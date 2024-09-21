## Usage

By default, Code component renders inline `code` html element:

```

import { Code } from '@mantine/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}
```

## Block code

To render code in `pre` element pass `block` prop to Code component:

```

import { Code } from '@mantine/core';

const codeForPreviousDemo = `
import { Code } from '@mantine/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}`;

function Demo() {
  return <Code block>{codeForPreviousDemo}</Code>;
}
```

## Custom color

By default, code color is gray, you can change it to any valid CSS color or to one of the theme.colors:

```

import { Code, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <Code color="blue.9" c="white">
        React.createElement()
      </Code>
      <Code color="var(--mantine-color-blue-light)">React.createElement()</Code>
    </Group>
  );
}
```