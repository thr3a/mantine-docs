## Usage

Use Title component to render h1-h6 headings with Mantine theme styles. By default, `Title` has no margins and paddings. You can change `font-size`, `font-weight` and `line-height` per heading with theme.headings.

Set `order` prop to render a specific element (h1-h6), default order is `1`:

```

import { Title } from '@mantine/core';

function Demo() {
  return (
    <>
      <Title order={1}>This is h1 title</Title>
      <Title order={2}>This is h2 title</Title>
      <Title order={3}>This is h3 title</Title>
      <Title order={4}>This is h4 title</Title>
      <Title order={5}>This is h5 title</Title>
      <Title order={6}>This is h6 title</Title>
    </>
  );
}
```

## Size

You can change Title `size` independent of its `order`:

-   If you set size to `h1`\-`h6`, then component will add corresponding `font-size` and `line-height` from the theme
-   If you set size to any other value, then `line-height` will be calculated based on `order` – `size` will impact only `font-size`

```

import { Title } from '@mantine/core';

function Demo() {
  return (
    <>
      <Title order={3} size="h1">
        H3 heading with h1 font-size
      </Title>
      <Title size="h4">H1 heading with h4 font-size</Title>
      <Title size="1rem">H1 heading with 1rem size</Title>
    </>
  );
}
```

## Text wrap

Use `textWrap` prop to control text-wrap CSS property. It controls how text inside an element is wrapped.

```

import { Title } from '@mantine/core';

function Demo() {
  return (
    <Title order={3}{{props}}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatibus inventore iusto
      cum dolore molestiae perspiciatis! Totam repudiandae impedit maxime!
    </Title>
  );
}
```

You can also set `textWrap` on theme:

```tsx
import { createTheme, MantineProvider, Title } from '@mantine/core';

const theme = createTheme({
  headings: {
    textWrap: 'wrap',
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Title>Some very long title that should wrap</Title>
    </MantineProvider>
  );
}
```

## Line clamp

Set `lineClamp` prop to truncate text after specified number of lines:

```

import { Title, Box } from '@mantine/core';

function Demo() {
  return (
    <Box maw={400}>
      <Title order={2}{{props}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloremque quas dolorum. Quo
        amet earum alias consequuntur quam accusamus a quae beatae, odio, quod provident consectetur
        non repudiandae enim adipisci?
      </Title>
    </Box>
  )
}
```