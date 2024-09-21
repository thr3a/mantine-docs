## Usage

`Container` centers content and limits its `max-width` to the value specified in `size` prop. Note that the `size` prop does not make `max-width` responsive, for example, when it set to `lg` it will always be `lg` regardless of screen size.

```

import { Container } from '@mantine/core';

function Demo() {
  const demoProps = {
    bg: 'var(--mantine-color-blue-light)',
    h: 50,
    mt: 'md',
  };

  return (
    <>
      <Container {...demoProps}>Default Container</Container>

      <Container size="xs" {...demoProps}>
        xs Container
      </Container>

      <Container px={0} size="30rem" {...demoProps}>
        30rem Container without padding
      </Container>
    </>
  );
}
```

## Fluid

Set `fluid` prop to make container fluid, it will take 100% of available width, it is the same as setting `size="100%"`.

```

import { Container } from '@mantine/core';

function Demo() {
  return (
    <Container fluid h={50} bg="var(--mantine-color-blue-light)">
      Fluid container has 100% max-width
    </Container>
  );
}
```

## Customize sizes

You can customize existing `Container` sizes and add new ones with CSS variables on theme:

```

import { Container, MantineProvider, createTheme, rem } from '@mantine/core';

const CONTAINER_SIZES: Record<string, string> = {
  xxs: rem(300),
  xs: rem(400),
  sm: rem(500),
  md: rem(600),
  lg: rem(700),
  xl: rem(800),
  xxl: rem(900),
};

const theme = createTheme({
  components: {
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          '--container-size': fluid
            ? '100%'
            : size !== undefined && size in CONTAINER_SIZES
            ? CONTAINER_SIZES[size]
            : rem(size),
        },
      }),
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Container size="xxs" bg="var(--mantine-color-blue-light)">
        Container with custom size
      </Container>
    </MantineProvider>
  );
}

```

## Responsive max-width

To make `Container` `max-width` responsive, use Styles API to set `classNames`. For example, you can add `responsive` size that will make `Container` `max-width` different depending on screen size:

```

import cx from 'clsx';
import { MantineProvider, Container, createTheme } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Container: Container.extend({
      classNames: (_, { size }) => ({
        root: cx({ [classes.responsiveContainer]: size === 'responsive' }),
      }),
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Container size="responsive" bg="var(--mantine-color-blue-light)">
        Container with responsive size
      </Container>
    </MantineProvider>
  );
}
```