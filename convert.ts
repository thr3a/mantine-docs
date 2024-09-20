import fs from 'fs/promises';
import path from 'path';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkMdx from 'remark-mdx';
import remarkStringify from 'remark-stringify';
import { visit, SKIP } from 'unist-util-visit';
import {MdxJsxFlowElement} from 'mdast-util-mdx-jsx';

interface ParentNode extends Node {
  children: Node[];
}

function replaceContent(content: string) {
  const tmp = content
  .split('\n')
  .filter(line => line !== 'import { Layout } from \'@/layout\';')
  .filter(line => line !== 'import { MDX_DATA } from \'@/mdx\';')
  .filter(line => !line.startsWith('export default Layout'))
  .join('\n');

  // .map(line => {
  //   if (line.trim().startsWith('<Demo') && line.includes('} />')) {
  //     return line.replace('} />', '.code} />');
  //   }
  //   return line;
  // })
  return `import { formatCode } from '../hoge';\n${tmp}`;
}

async function processMdx(content: string): Promise<string> {
  // unified処理パイプラインを作成
  const result = await unified()
    .use(remarkParse)
    .use(remarkMdx)
    .use(() => (tree) => {
      visit(tree, 'mdxJsxFlowElement', (node: MdxJsxFlowElement, index: number, parent: ParentNode) => {
        // <Demo>コンポーネントを処理
        if (node.name === 'Demo') {
          // <Demo> コンポーネントの属性を取得
          const attributes = node.attributes || [];
          const dataAttribute = attributes.find(attr => attr.type === 'mdxJsxAttribute' && attr.name === 'data');
          if (dataAttribute && dataAttribute.value) {
            // data属性の値を取得
            const dataValue = dataAttribute.data;
            // <pre>と<code>タグで囲む
            const preNode: MdxJsxFlowElement = {
              type: 'mdxJsxFlowElement',
              name: 'pre',
              attributes: [],
              children: [
                {
                  type: 'mdxJsxFlowElement',
                  name: 'code',
                  attributes: [],
                  children: [
                    {
                      type: 'html',
                      value: `{formatCode(${dataAttribute.value.value}.code)}`,
                    },
                  ],
                },
              ],
            };
            parent.children[index] = preNode as unknown as Node;
          }
        } else {
          // <Demo>コンポーネント以外を削除
          parent.children.splice(index, 1);
          return [SKIP, index];
        }
      });
      // リンクタグを除去
      visit(tree, 'link', (node: any, index: number, parent: ParentNode) => {
        if (node.children && node.children.length > 0 && node.children[0].type === 'text') {
          const textNode = node.children[0];
          parent.children[index] = textNode;
        }
      });
    })
    .use(remarkStringify)
    .process(content);

  return result.toString();
}

async function processMarkdownFiles(inputDir: string, outputDir: string): Promise<void> {
  try {
    const files = await fs.readdir(inputDir);
    const mdxFiles = files.filter(file => path.extname(file).toLowerCase() === '.mdx');
    await fs.mkdir(outputDir, { recursive: true });

    for (const file of mdxFiles) {
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(outputDir, file);
      console.log(inputPath);
      let content = await fs.readFile(inputPath, 'utf-8');
      content = replaceContent(content);
      content = await processMdx(content);
      await fs.writeFile(outputPath, content, 'utf-8');
    }
  } catch (error) {
    console.error('Error', error);
  }
}

processMarkdownFiles('src/pages/core', 'src/pages/core');
