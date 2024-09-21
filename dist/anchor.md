## Usage

```

import { Anchor } from '@mantine/core';

function Demo() {
  return (
    <Anchor href="https://mantine.dev/" target="_blank">
      Anchor component
    </Anchor>
  );
}
```

## Underline

Use `underline` prop to configure `text-decoration` property. It accepts the following values:

-   `always` - link is always underlined
-   `hover` - link is underlined on hover
-   `never` - link is never underlined

```

import { Anchor, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <Anchor href="https://mantine.dev/" target="_blank" underline="always">
        Underline always
      </Anchor>
      <Anchor href="https://mantine.dev/" target="_blank" underline="hover">
        Underline hover
      </Anchor>
      <Anchor href="https://mantine.dev/" target="_blank" underline="never">
        Underline never
      </Anchor>
    </Group>
  );
}
```

You can also configure `underline` prop for all `Anchor` components with default props:

```tsx
import { Anchor, createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  components: {
    Anchor: Anchor.extend({
      defaultProps: {
        underline: 'always',
      },
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      {/* Your app here */}
    </MantineProvider>
  );
}
```

## Text props

`Anchor` components supports all Text component props. For example, you can use gradient variant:

```

import { Anchor } from '@mantine/core';

function Demo() {
  return (
    <Anchor
      variant="gradient"
      gradient={{ from: 'pink', to: 'yellow' }}
      fw={500}
      fz="lg"
      href="#text-props"
    >
      A link with pink to yellow gradient
    </Anchor>
  );
}
```