## Usage

`Tree` component is used to display hierarchical data. `Tree` component has minimal styling by default, you can customize styles with Styles API.

```

import { Tree } from '@mantine/core';
import { data } from './data';

function Demo() {
  return <Tree data={data} />;
}
```

## Data prop

Data passed to the `data` prop should follow these rules:

-   Data must be an array
-   Each item in the array represents a node in the tree
-   Each node must be an object with `value` and `label` keys
-   Each node can have `children` key with an array of child nodes
-   The `value` of each node must be unique

Valid data example:

```tsx
// ✅ Valid data, all values are unique
const data = [
  {
    value: 'src',
    label: 'src',
    children: [
      { value: 'src/components', label: 'components' },
      { value: 'src/hooks', label: 'hooks' },
    ],
  },
  { value: 'package.json', label: 'package.json' },
];
```

Invalid data example:

```tsx
// ❌ Invalid data, values are not unique (components is used twice)
const data = [
  {
    value: 'src',
    label: 'src',
    children: [{ value: 'components', label: 'components' }],
  },
  { value: 'components', label: 'components' },
];
```

## Data type

You can import `TreeNodeData` type to define data type for your tree:

```tsx
import { TreeNodeData } from '@mantine/core';

const data: TreeNodeData[] = [
  {
    value: 'src',
    label: 'src',
    children: [
      { value: 'src/components', label: 'components' },
      { value: 'src/hooks', label: 'hooks' },
    ],
  },
  { value: 'package.json', label: 'package.json' },
];
```

## renderNode

Use `renderNode` prop to customize node rendering. `renderNode` function receives an object with the following properties as a single argument:

```tsx
export interface RenderTreeNodePayload {
  /** Node level in the tree */
  level: number;

  /** `true` if the node is expanded, applicable only for nodes with `children` */
  expanded: boolean;

  /** `true` if the node has non-empty `children` array */
  hasChildren: boolean;

  /** `true` if the node is selected */
  selected: boolean;

  /** Node data from the `data` prop of `Tree` */
  node: TreeNodeData;

  /** Tree controller instance, return value of `useTree` hook */
  tree: TreeController;

  /** Props to spread into the root node element */
  elementProps: {
    className: string;
    style: React.CSSProperties;
    onClick: (event: React.MouseEvent) => void;
    'data-selected': boolean | undefined;
    'data-value': string;
    'data-hovered': boolean | undefined;
  };
}
```

```

import { IconChevronDown } from '@tabler/icons-react';
import { Group, Tree } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <Tree
      data={data}
      levelOffset={23}
      renderNode={({ node, expanded, hasChildren, elementProps }) => (
        <Group gap={5} {...elementProps}>
          {hasChildren && (
            <IconChevronDown
              size={18}
              style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
            />
          )}

          <span>{node.label}</span>
        </Group>
      )}
    />
  );
}
```

## useTree hook

`useTree` hook can be used to control selected and expanded state of the tree.

The hook accepts an object with the following properties:

```tsx
export interface UseTreeInput {
  /** Initial expanded state of all nodes */
  initialExpandedState?: TreeExpandedState;

  /** Initial selected state of nodes */
  initialSelectedState?: string[];

  /** Initial checked state of nodes */
  initialCheckedState?: string[];

  /** Determines whether multiple node can be selected at a time */
  multiple?: boolean;
}
```

And returns an object with the following properties:

```tsx
export interface UseTreeReturnType {
  /** Determines whether multiple node can be selected at a time */
  multiple: boolean;

  /** A record of `node.value` and boolean values that represent nodes expanded state */
  expandedState: TreeExpandedState;

  /** An array of selected nodes values */
  selectedState: string[];

  /** An array of checked nodes values */
  checkedState: string[];

  /** A value of the node that was last clicked
   * Anchor node is used to determine range of selected nodes for multiple selection
   */
  anchorNode: string | null;

  /** Initializes tree state based on provided data, called automatically by the Tree component */
  initialize: (data: TreeNodeData[]) => void;

  /** Toggles expanded state of the node with provided value */
  toggleExpanded: (value: string) => void;

  /** Collapses node with provided value */
  collapse: (value: string) => void;

  /** Expands node with provided value */
  expand: (value: string) => void;

  /** Expands all nodes */
  expandAllNodes: () => void;

  /** Collapses all nodes */
  collapseAllNodes: () => void;

  /** Sets expanded state */
  setExpandedState: React.Dispatch<
    React.SetStateAction<TreeExpandedState>
  >;

  /** Toggles selected state of the node with provided value */
  toggleSelected: (value: string) => void;

  /** Selects node with provided value */
  select: (value: string) => void;

  /** Deselects node with provided value */
  deselect: (value: string) => void;

  /** Clears selected state */
  clearSelected: () => void;

  /** Sets selected state */
  setSelectedState: React.Dispatch<React.SetStateAction<string[]>>;

  /** A value of the node that is currently hovered */
  hoveredNode: string | null;

  /** Sets hovered node */
  setHoveredNode: React.Dispatch<React.SetStateAction<string | null>>;

  /** Checks node with provided value */
  checkNode: (value: string) => void;

  /** Unchecks node with provided value */
  uncheckNode: (value: string) => void;

  /** Returns all checked nodes with status */
  getCheckedNodes: () => CheckedNodeStatus[];

  /** Returns `true` if node with provided value is checked */
  isNodeChecked: (value: string) => boolean;

  /** Returns `true` if node with provided value is indeterminate */
  isNodeIndeterminate: (value: string) => boolean;
}
```

You can pass the value returned by the `useTree` hook to the `tree` prop of the `Tree` component to control tree state:

```

import { Button, Group, Tree, useTree } from '@mantine/core';
import { data } from './data';

function Demo() {
  const tree = useTree();

  return (
    <>
      <Tree data={data} tree={tree} />
      <Group mt="md">
        <Button onClick={() => tree.expandAllNodes()}>Expand all</Button>
        <Button onClick={() => tree.collapseAllNodes()}>Collapse all</Button>
      </Group>
    </>
  );
}
```

## Checked state

`Tree` can be used to display checked state with checkboxes. To implement checked state, you need to render `Checkbox.Indicator` in the `renderNode` function:

```

import { IconChevronDown } from '@tabler/icons-react';
import { Checkbox, Group, RenderTreeNodePayload, Tree } from '@mantine/core';
import { data } from './data';

const renderTreeNode = ({
  node,
  expanded,
  hasChildren,
  elementProps,
  tree,
}: RenderTreeNodePayload) => {
  const checked = tree.isNodeChecked(node.value);
  const indeterminate = tree.isNodeIndeterminate(node.value);

  return (
    <Group gap="xs" {...elementProps}>
      <Checkbox.Indicator
        checked={checked}
        indeterminate={indeterminate}
        onClick={() => (!checked ? tree.checkNode(node.value) : tree.uncheckNode(node.value))}
      />

      <Group gap={5} onClick={() => tree.toggleExpanded(node.value)}>
        <span>{node.label}</span>

        {hasChildren && (
          <IconChevronDown
            size={14}
            style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
          />
        )}
      </Group>
    </Group>
  );
};

function Demo() {
  return <Tree data={data} levelOffset={23} expandOnClick={false} renderNode={renderTreeNode} />;
}
```

## Example: files tree

```

import { IconFolder, IconFolderOpen } from '@tabler/icons-react';
import { Group, RenderTreeNodePayload, Tree } from '@mantine/core';
import { CssIcon, NpmIcon, TypeScriptCircleIcon } from '@mantinex/dev-icons';
import { data, dataCode } from './data';
import classes from './Demo.module.css';

interface FileIconProps {
  name: string;
  isFolder: boolean;
  expanded: boolean;
}

function FileIcon({ name, isFolder, expanded }: FileIconProps) {
  if (name.endsWith('package.json')) {
    return <NpmIcon size={14} />;
  }

  if (name.endsWith('.ts') || name.endsWith('.tsx') || name.endsWith('tsconfig.json')) {
    return <TypeScriptCircleIcon size={14} />;
  }

  if (name.endsWith('.css')) {
    return <CssIcon size={14} />;
  }

  if (isFolder) {
    return expanded ? (
      <IconFolderOpen color="var(--mantine-color-yellow-9)" size={14} stroke={2.5} />
    ) : (
      <IconFolder color="var(--mantine-color-yellow-9)" size={14} stroke={2.5} />
    );
  }

  return null;
}

function Leaf({ node, expanded, hasChildren, elementProps }: RenderTreeNodePayload) {
  return (
    <Group gap={5} {...elementProps}>
      <FileIcon name={node.value} isFolder={hasChildren} expanded={expanded} />
      <span>{node.label}</span>
    </Group>
  );
}

function Demo() {
  return (
    <Tree
      classNames={classes}
      selectOnClick
      clearSelectionOnOutsideClick
      data={data}
      renderNode={(payload) => <Leaf {...payload} />}
    />
  );
}
```