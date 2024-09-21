## Usage

`Loader` component supports 3 types of loaders: `oval`, `bars` and `dots` by default. All loaders are animated with CSS for better performance.

```

import { Loader } from '@mantine/core';

function Demo() {
  return <Loader{{props}} />;
}
```

## Size prop

You can pass any valid CSS values and numbers to `size` prop. Numbers are treated as px, but converted to rem. For example, `size={32}` will produce `--loader-size: 2rem` CSS variable.

```

import { Loader } from '@mantine/core';

function Demo() {
  return <Loader{{props}} />;
}
```

## Adding custom loaders

`Loader` component is used in other components (Button, ActionIcon, LoadingOverlay, etc.). You can change loader type with default props by setting `type`. You can also add a custom CSS or SVG loader with `loaders` default prop.

### Custom CSS only loader

Note that in order for `size` and `color` props to work with custom loaders, you need to use `--loader-size` and `--loader-color` CSS variables in your loader styles.

```

import { MantineProvider, Loader } from '@mantine/core';
import { CssLoader } from './CssLoader';

const theme = createTheme({
  components: {
    Loader: Loader.extend({
      defaultProps: {
        loaders: { ...Loader.defaultLoaders, custom: CssLoader },
        type: 'custom',
      },
    }),
  },
});

function Demo() {
  return (
    <MantineThemeProvider theme={theme}>
      <Loader />
    </MantineThemeProvider>
  );
}
```

### Custom SVG loader

It is recommended to use CSS only loaders, as SVG based animations may have the following issues:

-   High CPU usage – loader may look glitchy on low-end devices
-   Loader animation may not start playing until js is loaded – user may see static loader

In your SVG loader, you need to use `--loader-size` and `--loader-color` variables the same way as in CSS only custom loader in order for `size` and `color` props to work. Usually, you would need to set `width` and `height` to `var(--loader-size)` and `fill`/`stroke` to `var(--loader-color)`.

```

import { MantineProvider, Loader } from '@mantine/core';
import { RingLoader } from './RingLoader';

const theme = createTheme({
  components: {
    Loader: Loader.extend({
      defaultProps: {
        loaders: { ...Loader.defaultLoaders, ring: RingLoader },
        type: 'ring',
      },
    }),
  },
});

function Demo() {
  return (
    <MantineThemeProvider theme={theme}>
      <Loader />
    </MantineThemeProvider>
  );
}
```

## children prop

`Loader` supports `children` prop. If you pass anything to `children`, it will be rendered instead of the loader. This is useful when you want to control `Loader` representation in components that use `loaderProps`, for example Button, LoadingOverlay, Dropzone.

```

import { useDisclosure } from '@mantine/hooks';
import { LoadingOverlay, Button, Group, Box } from '@mantine/core';

function Demo() {
  const [visible, { toggle }] = useDisclosure(false);

  return (
    <>
      <Box pos="relative">
        <LoadingOverlay visible={visible} loaderProps={{ children: 'Loading...' }} />
        {/* ...other content */}
      </Box>

      <Group justify="center">
        <Button onClick={toggle}>Toggle overlay</Button>
      </Group>
    </>
  );
}
```