## Usage

```

import { Button } from '@mantine/core';

function Demo() {
  return <Button{{props}}>Button</Button>;
}
```

## Full width

If `fullWidth` prop is set `Button` will take 100% of parent width:

```

import { Button } from '@mantine/core';

function Demo() {
  return <Button fullWidth>Full width button</Button>;
}
```

## Left and right sections

`leftSection` and `rightSection` allow adding icons or any other element to the left and right side of the button. When a section is added, padding on the corresponding side is reduced.

Note that `leftSection` and `rightSection` are flipped in RTL mode (`leftSection` is displayed on the right and `rightSection` is displayed on the left).

```

import { Group, Button } from '@mantine/core';
import { IconPhoto, IconDownload, IconArrowRight } from '@tabler/icons-react';

function Demo() {
  return (
    <Group justify="center">
      <Button leftSection={<IconPhoto size={14} />} variant="default">
        Gallery
      </Button>

      <Button rightSection={<IconDownload size={14} />}>Download</Button>

      <Button
        variant="light"
        leftSection={<IconPhoto size={14} />}
        rightSection={<IconArrowRight size={14} />}
      >
        Visit gallery
      </Button>
    </Group>
  );
}
```

## Sections position

`justify` prop sets `justify-content` of `inner` element. You can use it to change the alignment of left and right sections. For example, to spread them across the button set `justify="space-between"`.

If you need to align just one section to the side of the button set `justify` to `space-between` and add empty `<span />` to the opposite section.

```
(props) => `
import { Button } from '@mantine/core';
import { IconPhoto } from '@tabler/icons-react';

function Demo() {
  const icon = ;
  return (
    <>
      
        Button label
      

      
        Button label
      

      
        Button label
      

      }
        variant="default"
        mt="md"
      >
        Button label
      
    
  );
}
`
```

## Compact size

`Button` supports `xs` – `xl` and `compact-xs` – `compact-xl` sizes. `compact` sizes have the same font-size as `xs` – `xl` but reduced padding and height.

```
(props) => `
import { Button, Group } from '@mantine/core';

function Demo() {
  return (
    
      Regular ${props.size}
      Compact ${props.size}
    
  );
}
`
```

```
(props) => `
import { Button } from '@mantine/core';

function Demo() {
  return (
    
      Gradient button
    
  );
}
`
```

## Disabled state

To make `Button` disabled, set `disabled` prop, this will prevent any interactions with the button and add disabled styles. If you want the button to just look disabled but still be interactive, set `data-disabled` prop instead. Note that disabled styles are the same for all variants.

```

import { Button } from '@mantine/core';

function Demo() {
  return <Button disabled>Disabled button</Button>;
}
```

## Disabled state when Button is link

`<a />` element does not support `disabled` attribute. To make `Button` disabled when it is rendered as a link, set `data-disabled` attribute instead and prevent default behavior in `onClick` event handler.

```

import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button
      component="a"
      href="https://mantine.dev"
      data-disabled
      onClick={(event) => event.preventDefault()}
    >
      Disabled link
    </Button>
  );
}
```

## Customize disabled styles

To customize disabled styles, it is recommended to use both `&:disabled` and `&[data-disabled]` selectors:

-   `&:disabled` is used to style the button when `disabled` prop is set and also when the button is disabled by the parent component (for example, when `disabled` prop is set on a `<fieldset />` element which contains `Button`).
-   `&[data-disabled]` is used to style the button when it is not actually disabled but should look like it is (for example, `data-disabled` should be used if you need to use Tooltip with disabled `Button` or when `Button` is used as a link)

```

import { Button } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Button className={classes.button} disabled>
      Disabled with styles
    </Button>
  );
}
```

## Disabled button with Tooltip

`onMouseLeave` event is not triggered when `Button` is disabled, so if you need to use Tooltip with disabled `Button` you need to set `data-disabled` prop on `Button` instead of `disabled`. Note that it is also required to change `onClick` event handler to `(event) => event.preventDefault()` as `Button` is not actually disabled and will still trigger `onClick` event.

```

import { Button, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Tooltip for disabled button">
      <Button data-disabled onClick={(event) => event.preventDefault()}>
        Disabled button with tooltip
      </Button>
    </Tooltip>
  );
}
```

## Loading state

When `loading` prop is set, `Button` will be disabled and Loader with overlay will be rendered in the center of the button. Loader color depends on `Button` variant.

```

import { Button, Group, Switch } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [loading, { toggle }] = useDisclosure();
  return (
    <>
      <Group>
        <Button loading={loading}>Filled button</Button>
        <Button variant="light" loading={loading}>
          Light button
        </Button>
        <Button variant="outline" loading={loading}>
          Outline button
        </Button>
      </Group>

      <Switch checked={loading} onChange={toggle} label="Loading state" mt="md" />
    </>
  );
}
```

## Loader props

You can customize Loader with `loaderProps` prop, it accepts all props that Loader component has:

```

import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button loading loaderProps={{ type: 'dots' }}>
      Loading button
    </Button>
  );
}
```

```

import { Button, rem } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  return <Button{{props}} leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}>Your email</Button>;
}
```

Example of customizing `Button` with Styles API and data-\* attributes:

```

import { Button, ButtonProps, Group, rem } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import classes from './Demo.module.css';

function SendFilesButton(props: ButtonProps & React.ComponentPropsWithoutRef<'button'>) {
  return <Button {...props} radius="md" classNames={classes} />;
}

function Demo() {
  return (
    <Group>
      <SendFilesButton
        leftSection="12"
        rightSection={<IconArrowRight style={{ width: rem(18) }} />}
      >
        Send files
      </SendFilesButton>
      <SendFilesButton
        leftSection="3"
        rightSection={<IconArrowRight style={{ width: rem(18) }} />}
        disabled
      >
        Send files
      </SendFilesButton>
    </Group>
  );
}
```

## Custom variants

To add new `Button` variants, use data-variant attribute. Usually new variants are added on theme, this way they are available in all `Button` components in your application.

```

import { Group, Button, MantineProvider, createTheme } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Button: Button.extend({
      classNames: classes,
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Group>
        <Button variant="danger">Danger variant</Button>
        <Button variant="primary">Primary variant</Button>
      </Group>
    </MantineProvider>
  );
}
```

## Customize variants colors

You can customize colors for `Button` and other components variants by adding variantColorResolver to your theme.

```

import {
  Button,
  Group,
  MantineProvider,
  defaultVariantColorsResolver,
  VariantColorsResolver,
  parseThemeColor,
  rem,
  rgba,
  darken,
} from '@mantine/core';

const variantColorResolver: VariantColorsResolver = (input) => {
  const defaultResolvedColors = defaultVariantColorsResolver(input);
  const parsedColor = parseThemeColor({
    color: input.color || input.theme.primaryColor,
    theme: input.theme,
  });

  // Override some properties for variant
  if (parsedColor.isThemeColor && parsedColor.color === 'lime' && input.variant === 'filled') {
    return {
      ...defaultResolvedColors,
      color: 'var(--mantine-color-black)',
      hoverColor: 'var(--mantine-color-black)',
    };
  }

  // Completely override variant
  if (input.variant === 'light') {
    return {
      background: rgba(parsedColor.value, 0.1),
      hover: rgba(parsedColor.value, 0.15),
      border: `${rem(1)} solid ${parsedColor.value}`,
      color: darken(parsedColor.value, 0.1),
    };
  }

  // Add new variants support
  if (input.variant === 'danger') {
    return {
      background: 'var(--mantine-color-red-9)',
      hover: 'var(--mantine-color-red-8)',
      color: 'var(--mantine-color-white)',
      border: 'none',
    };
  }

  return defaultResolvedColors;
};

function Demo() {
  return (
    <MantineProvider theme={{ variantColorResolver }}>
      <Group>
        <Button color="lime.4" variant="filled">
          Lime filled button
        </Button>

        <Button color="orange" variant="light">
          Orange light button
        </Button>

        <Button variant="danger">Danger button</Button>
      </Group>
    </MantineProvider>
  );
}
```

```

import { Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Button color="lime.4">Default</Button>
      <Button color="lime.4" autoContrast>
        Auto contrast
      </Button>
    </Group>
  );
}
```

## Button.Group

```

import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button.Group{{props}}>
      <Button variant="default">First</Button>
      <Button variant="default">Second</Button>
      <Button variant="default">Third</Button>
    </Button.Group>
  );
}
```

Note that you must not wrap child `Button` components with any additional elements:

```tsx
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button.Group>
      <div>
        <Button>This will not work</Button>
      </div>
      <Button>Buttons will have incorrect borders</Button>
    </Button.Group>
  );
}
```