## Usage

Data used in Accordion examples:

```tsx
const groceries = [
  {
    emoji: '🍎',
    value: 'Apples',
    description:
      'Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.',
  },
  {
    emoji: '🍌',
    value: 'Bananas',
    description:
      'Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.',
  },
  {
    emoji: '🥦',
    value: 'Broccoli',
    description:
      'Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.',
  },
];
```

```

import { Accordion } from '@mantine/core';

function Demo() {
  // See groceries data above
  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion{{props}} defaultValue="Apples">
      {items}
    </Accordion>
  );
}
```

## Custom control label

```

import { Group, Avatar, Text, Accordion } from '@mantine/core';

const charactersList = [
  {
    id: 'bender',
    image: 'https://img.icons8.com/clouds/256/000000/futurama-bender.png',
    label: 'Bender Bending Rodríguez',
    description: 'Fascinated with cooking, though has no sense of taste',
    content: "Bender Bending Rodríguez, (born September 4, 2996), designated Bending Unit 22, and commonly known as Bender, is a bending unit created by a division of MomCorp in Tijuana, Mexico, and his serial number is 2716057. His mugshot id number is 01473. He is Fry's best friend.",
  },

  {
    id: 'carol',
    image: 'https://img.icons8.com/clouds/256/000000/futurama-mom.png',
    label: 'Carol Miller',
    description: 'One of the richest people on Earth',
    content: "Carol Miller (born January 30, 2880), better known as Mom, is the evil chief executive officer and shareholder of 99.7% of Momcorp, one of the largest industrial conglomerates in the universe and the source of most of Earth's robots. She is also one of the main antagonists of the Futurama series.",
  },

  {
    id: 'homer',
    image: 'https://img.icons8.com/clouds/256/000000/homer-simpson.png',
    label: 'Homer Simpson',
    description: 'Overweight, lazy, and often ignorant',
    content: 'Homer Jay Simpson (born May 12) is the main protagonist and one of the five main characters of The Simpsons series(or show). He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson.',
  },
];

interface AccordionLabelProps {
  label: string;
  image: string;
  description: string;
}

function AccordionLabel({ label, image, description }: AccordionLabelProps) {
  return (
    <Group wrap="nowrap">
      <Avatar src={image} radius="xl" size="lg" />
      <div>
        <Text>{label}</Text>
        <Text size="sm" c="dimmed" fw={400}>
          {description}
        </Text>
      </div>
    </Group>
  );
}

function Demo() {
  const items = charactersList.map((item) => (
    <Accordion.Item value={item.id} key={item.label}>
      <Accordion.Control>
        <AccordionLabel {...item} />
      </Accordion.Control>
      <Accordion.Panel>
        <Text size="sm">{item.content}</Text>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion chevronPosition="right" variant="contained">
      {items}
    </Accordion>
  );
}
```

## Change chevron

```

import { IconPlus } from '@tabler/icons-react';
import { Accordion } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  // See groceries data above
  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji} disabled={item.value === 'Bananas'}>
        {item.value}
      </Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion
      defaultValue="Apples"
      classNames={{ chevron: classes.chevron }}
      chevron={<IconPlus className={classes.icon} />}
    >
      {items}
    </Accordion>
  );
}
```

## With icons

```

import { IconPhoto, IconPrinter, IconCameraSelfie } from '@tabler/icons-react';
import { Accordion, rem } from '@mantine/core';

function Demo() {
  return (
    <Accordion variant="contained">
      <Accordion.Item value="photos">
        <Accordion.Control
          icon={
            <IconPhoto
              style={{ color: 'var(--mantine-color-red-6', width: rem(20), height: rem(20) }}
            />
          }
        >
          Recent photos
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="print">
        <Accordion.Control
          icon={
            <IconPrinter
              style={{ color: 'var(--mantine-color-blue-6', width: rem(20), height: rem(20) }}
            />
          }
        >
          Print photos
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="camera">
        <Accordion.Control
          icon={
            <IconCameraSelfie
              style={{ color: 'var(--mantine-color-teal-6)', width: rem(20), height: rem(20) }}
            />
          }
        >
          Camera settings
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
```

## Change transition

To change transition duration, set `transitionDuration` prop:

```

import { Accordion } from '@mantine/core';

function Demo() {
  return (
    <Accordion transitionDuration={1000}>
      {/* ...content */}
    </Accordion>
  )
}
```

To disable transitions, set `transitionDuration` to 0:

```

import { Accordion } from '@mantine/core';

function Demo() {
  return (
    <Accordion transitionDuration={0}>
      {/* ...content */}
    </Accordion>
  )
}
```

## Default opened items

When `multiple={false}`, set `defaultValue` as string:

```tsx
import { Accordion } from '@mantine/core';

function Demo() {
  // Second item will be opened by default
  return (
    <Accordion defaultValue="item-2">
      <Accordion.Item value="item-1">
        <Accordion.Control>control-1</Accordion.Control>
        <Accordion.Panel>panel-1</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <Accordion.Control>control-2</Accordion.Control>
        <Accordion.Panel>panel-2</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
```

When `multiple={true}`, set `defaultValue` as an array of strings:

```tsx
import { Accordion } from '@mantine/core';

function Demo() {
  // Both items will be opened by default
  return (
    <Accordion multiple defaultValue={['item-1', 'item-2']}>
      <Accordion.Item value="item-1">
        <Accordion.Control>control-1</Accordion.Control>
        <Accordion.Panel>panel-1</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <Accordion.Control>control-2</Accordion.Control>
        <Accordion.Panel>panel-2</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
```

## Control state

When `multiple={false}`, set `value` as string:

```tsx
import { useState } from 'react';
import { Accordion } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <Accordion value={value} onChange={setValue}>
      <Accordion.Item value="item-1">
        <Accordion.Control>control-1</Accordion.Control>
        <Accordion.Panel>panel-1</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <Accordion.Control>control-2</Accordion.Control>
        <Accordion.Panel>panel-2</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
```

When `multiple={true}`, set `value` as an array of strings:

```tsx
import { useState } from 'react';
import { Accordion } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<string[]>([]);

  return (
    <Accordion multiple value={value} onChange={setValue}>
      <Accordion.Item value="item-1">
        <Accordion.Control>control-1</Accordion.Control>
        <Accordion.Panel>panel-1</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <Accordion.Control>control-2</Accordion.Control>
        <Accordion.Panel>panel-2</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
```

## Compose controls

You can add any additional elements that will be displayed next to `Accordion.Control`, for example, you can add ActionIcon or Menu:

```

import { Accordion, ActionIcon, AccordionControlProps, Center } from '@mantine/core';
import { IconDots } from '@tabler/icons-react';

function AccordionControl(props: AccordionControlProps) {
  return (
    <Center>
      <Accordion.Control {...props} />
      <ActionIcon size="lg" variant="subtle" color="gray">
        <IconDots size="1rem" />
      </ActionIcon>
    </Center>
  );
}

function Demo() {
  return (
    <Accordion chevronPosition="left" maw={400} mx="auto">
      <Accordion.Item value="item-1">
        <AccordionControl>Control 1</AccordionControl>
        <Accordion.Panel>Panel 1</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <AccordionControl>Control 2</AccordionControl>
        <Accordion.Panel>Panel 2</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="item-3">
        <AccordionControl>Control 3</AccordionControl>
        <Accordion.Panel>Panel 3</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
```

## Disabled items

Set `disabled` prop on `Accordion.Control` component to disable it. Disabled items cannot be activated with mouse or keyboard, will be skipped when user navigates with arrow keys:

```

import { Accordion } from '@mantine/core';

function Demo() {
  // See groceries data above
  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji} disabled={item.value === 'Bananas'}>
        {item.value}
      </Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion maw={400} defaultValue="Apples">
      {items}
    </Accordion>
  );
}
```

## Unstyled Accordion

Set `unstyled` prop on Accordion component to remove all non-essential library styles. It can be used to style component with Styles API without overriding any styles.

```

import { Accordion } from '@mantine/core';

function Demo() {
  return (
    <Accordion unstyled>
      {/* ... Accordion items */}
    </Accordion>
  );
}
```

Use Styles API to customize Accordion styles:

```

import { Accordion } from '@mantine/core';

function Demo() {
  // See groceries data above
  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion defaultValue="Apples" order={2}{{props}}>
      {items}
    </Accordion>
  );
}
```

Use Styles API to customize Accordion styles:

```

import { Accordion } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  // See groceries data above
  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion maw={400} defaultValue="Apples" classNames={classes}>
      {items}
    </Accordion>
  );
}
```

## TypeScript

`AccordionProps` type exported from `@mantine/core` is a generic, it accepts boolean type that describes `multiple` state:

```tsx
import type { AccordionProps } from '@mantine/core';

type MultipleAccordionProps = AccordionProps<true>;
type DefaultAccordionProps = AccordionProps<false>;
```

## Accessibility

Accordion component follows WAI-ARIA recommendations on accessibility.

Set `order` on `Accordion` component to wrap accordion controls with h2-h6 heading. The following example will wrap controls with h3 tag:

```tsx
import { Accordion } from '@mantine/core';

function Demo() {
  return <Accordion order={3}>{/* ...items */}</Accordion>;
}
```

Keyboard interactions:## Usage

```

import { ActionIcon } from '@mantine/core';
import { IconAdjustments } from '@tabler/icons-react';

function Demo() {
  return (
    <ActionIcon{{props}} aria-label="Settings">
      <IconAdjustments style={{ width: '70%', height: '70%' }} stroke={1.5} />
    </ActionIcon>
  );
}
```

```
(props) => `
import { ActionIcon } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    
      
    
  );
}
`
```

## Size

You can use any valid CSS value in `size` prop, it is used to set `width`, `min-width`, `min-height` and `height` properties. Note that `size` prop does not control child icon size, you need to set it manually on icon component. When `size` is a number, the value is treated as `px` units and converted to rem units.

```

import { ActionIcon, rem } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    <ActionIcon size={42} variant="default" aria-label="ActionIcon with size as a number">
      <IconHeart style={{ width: rem(24), height: rem(24) }} />
    </ActionIcon>
  );
}
```

If you want `ActionIcon` to have the same size as Mantine inputs, use `size="input-sm"` prop:

```

import { ActionIcon, Group, TextInput } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <TextInput placeholder="sm size input" size="sm" />
      <ActionIcon size="input-sm" variant="default" aria-label="ActionIcon the same size as inputs">
        SM
      </ActionIcon>
    </Group>
  );
}
```

## Disabled state

To make `ActionIcon` disabled set `disabled` prop, this will prevent any interactions with the button and add disabled styles. If you want the button to just look disabled but still be interactive, set `data-disabled` prop instead. Note that disabled styles are the same for all variants.

```

import { ActionIcon, Group } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    <Group justify="center">
      <ActionIcon size="xl" disabled aria-label="Disabled and not interactive">
        <IconHeart />
      </ActionIcon>

      <ActionIcon size="xl" data-disabled aria-label="Has disabled styles but still interactive">
        <IconHeart />
      </ActionIcon>
    </Group>
  );
}
```

## Disabled state when ActionIcon is link

`<a />` element does not support `disabled` attribute. To make `ActionIcon` disabled when it is rendered as a link, set `data-disabled` attribute instead and prevent default behavior in `onClick` event handler.

```

import { ActionIcon } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';

function Demo() {
  return (
    <ActionIcon
      component="a"
      href="https://mantine.dev"
      data-disabled
      size="xl"
      aria-label="Open in a new tab"
      onClick={(event) => event.preventDefault()}
    >
      <IconExternalLink />
    </ActionIcon>
  );
}
```

## Customize disabled styles

To customize disabled styles, it is recommended to use both `&:disabled` and `&[data-disabled]` selectors:

-   `&:disabled` is used to style the button when `disabled` prop is set and also when the button is disabled by the parent component (for example, when `disabled` prop is set on a `<fieldset />` element which contains `ActionIcon`).
-   `&[data-disabled]` is used to style the button when it is not actually disabled but should look like it is (for example, `data-disabled` should be used if you need to use Tooltip with disabled `ActionIcon` or when `ActionIcon` is used as a link)

```

import { ActionIcon } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import classes from './Demo.module.css';

function Demo() {
  return (
    <ActionIcon size="xl" className={classes.button} disabled aria-label="Disabled with styles">
      <IconHeart />
    </ActionIcon>
  );
}
```

## Disabled button with Tooltip

`onMouseLeave` event is not triggered when `ActionIcon` is disabled, so if you need to use Tooltip with disabled `ActionIcon` you need to set `data-disabled` prop on `ActionIcon` instead of `disabled`. Note that it is also required to change `onClick` event handler to `(event) => event.preventDefault()` as `ActionIcon` is not actually disabled and will still trigger `onClick` event.

```

import { ActionIcon, Tooltip } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    <Tooltip label="Tooltip for disabled button">
      <ActionIcon size="xl" data-disabled onClick={(event) => event.preventDefault()}>
        <IconHeart />
      </ActionIcon>
    </Tooltip>
  );
}
```

## Loading state

When `loading` prop is set, `ActionIcon` will be disabled and Loader with overlay will be rendered in the center of the button. Loader color depends on `ActionIcon` variant.

```

import { ActionIcon, Group, Switch } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconHeart } from '@tabler/icons-react';

function Demo() {
  const [loading, { toggle }] = useDisclosure();
  return (
    <>
      <Group>
        <ActionIcon loading={loading}>
          <IconHeart size={18} stroke={1.5} />
        </ActionIcon>
        <ActionIcon variant="light" loading={loading}>
          <IconHeart size={18} stroke={1.5} />
        </ActionIcon>
        <ActionIcon variant="outline" loading={loading}>
          <IconHeart size={18} stroke={1.5} />
        </ActionIcon>
      </Group>

      <Switch checked={loading} onChange={toggle} label="Loading state" mt="md" />
    </>
  );
}
```

## Loader props

You can customize Loader with `loaderProps` prop, it accepts all props that Loader component has:

```

import { ActionIcon } from '@mantine/core';

function Demo() {
  return <ActionIcon size="xl" loading loaderProps={{ type: 'dots' }} />;
}
```

## Add custom variants

To add new `ActionIcon` variants, use data-variant attribute. Usually new variants are added on theme, this way they are available in all `ActionIcon` components in your application.

```

import { Group, ActionIcon, MantineProvider, createTheme } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    ActionIcon: ActionIcon.extend({
      classNames: classes,
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Group justify="center">
        <ActionIcon size="xl" variant="danger" aria-label="Danger variant">
          <IconHeart />
        </ActionIcon>
        <ActionIcon size="xl" variant="primary" aria-label="Primary variant">
          <IconHeart />
        </ActionIcon>
      </Group>
    </MantineProvider>
  );
}
```

## Customize variants colors

You can customize colors for `ActionIcon` and other components variants by adding variantColorResolver to your theme.

```

import { IconPhoto, IconFingerprint, IconError404 } from '@tabler/icons-react';
import {
  ActionIcon,
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
        <ActionIcon color="lime.4" variant="filled">
          <IconPhoto size={20} />
        </ActionIcon>

        <ActionIcon color="orange" variant="light">
          <IconFingerprint size={20} />
        </ActionIcon>

        <ActionIcon variant="danger">
          <IconError404 size={20} />
        </ActionIcon>
      </Group>
    </MantineProvider>
  );
}
```

```

import { IconFingerprint } from '@tabler/icons-react';
import { ActionIcon, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <ActionIcon aria-label="default action icon" size="lg" color="lime.4">
        <IconFingerprint size={20} />
      </ActionIcon>
      <ActionIcon autoContrast aria-label="autoContrast action icon" size="lg" color="lime.4">
        <IconFingerprint size={20} />
      </ActionIcon>
    </Group>
  );
}
```

## Add custom sizes

`ActionIcon` sizes are defined by `--ai-size-{x}` CSS variables. The easiest way to add new sizes is to define additional `--ai-size-{x}` variables on the `root` element:

```

import { ActionIcon, createTheme, Group, MantineThemeProvider, rem } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    ActionIcon: ActionIcon.extend({
      classNames: classes,
    }),
  },
});

function Demo() {
  return (
    <MantineThemeProvider theme={theme}>
      <Group justify="center">
        <ActionIcon size="xxs" aria-label="Custom xxs size">
          <IconHeart style={{ width: rem(10), height: rem(10) }} />
        </ActionIcon>

        <ActionIcon size="xxl" aria-label="Custom xxl size">
          <IconHeart style={{ width: rem(32), height: rem(32) }} />
        </ActionIcon>
      </Group>
    </MantineThemeProvider>
  );
}
```

## ActionIcon.Group

```

import { ActionIcon, rem } from '@mantine/core';
import { IconPhoto, IconSettings, IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    <ActionIcon.Group{{props}}>
      <ActionIcon variant="default" size="lg" aria-label="Gallery">
        <IconPhoto style={{ width: rem(20) }} stroke={1.5} />
      </ActionIcon>

      <ActionIcon variant="default" size="lg" aria-label="Settings">
        <IconSettings style={{ width: rem(20) }} stroke={1.5} />
      </ActionIcon>

      <ActionIcon variant="default" size="lg" aria-label="Likes">
        <IconHeart style={{ width: rem(20) }} stroke={1.5} />
      </ActionIcon>
    </ActionIcon.Group>
  );
}
```

Note that you must not wrap child `ActionIcon` components with any additional elements:

```tsx
import { ActionIcon } from '@mantine/core';

// Will not work correctly
function Demo() {
  return (
    <ActionIcon.Group>
      <div>
        <ActionIcon>This will not work</ActionIcon>
      </div>
      <ActionIcon>ActionIcons will have incorrect borders</ActionIcon>
    </ActionIcon.Group>
  );
}
```

## Accessibility

To make `ActionIcon` accessible for screen readers, you need to either set `aria-label` or use VisuallyHidden component:

```tsx
import { IconHeart } from '@tabler/icons-react';
import { ActionIcon, VisuallyHidden } from '@mantine/core';

function Demo() {
  return (
    <>
      <ActionIcon aria-label="Like post">
        <IconHeart />
      </ActionIcon>

      <ActionIcon>
        <VisuallyHidden>Like post</VisuallyHidden>
        <IconHeart />
      </ActionIcon>
    </>
  );
}
```## Usage

`Affix` renders a div element with a fixed position inside the Portal component. Use it to display elements fixed at any position on the screen, for example, scroll to top button:

```

import { IconArrowUp } from '@tabler/icons-react';
import { useWindowScroll } from '@mantine/hooks';
import { Affix, Button, Text, Transition, rem } from '@mantine/core';

function Demo() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Text ta="center">Affix is located at the bottom of the screen, scroll to see it</Text>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftSection={<IconArrowUp style={{ width: rem(16), height: rem(16) }} />}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
    </>
  );
}
```## Usage

```

import { Alert } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';

function Demo() {
  const icon = <IconInfoCircle />;
  return (
    <Alert{{props}} icon={icon}>
      {{children}}
    </Alert>
  );
}
```

```

import { Alert } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import classes from './Demo.module.css';

function Demo() {
  const icon = <IconHeart />;

  return (
    <Alert title="Alert title" icon={icon} withCloseButton{{props}}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt corporis natus veniam quis
      cupiditate enim architecto mollitia numquam temporibus, consectetur nam laboriosam voluptates
      nemo facilis? Exercitationem aut praesentium quibusdam reiciendis.
    </Alert>
  );
}
```

## Accessibility

-   Root element role set to `alert`
-   `aria-describedby` set to body element id, `aria-labelledby` set to title element id if `title` is provided
-   Set `closeButtonLabel` prop to make close button accessible

```tsx
import { Alert } from '@mantine/core';

function Invalid() {
  // -> not ok
  return <Alert withCloseButton />;
}

function Valid() {
  // -> ok
  return <Alert withCloseButton closeButtonLabel="Dismiss" />;
}

function AlsoValid() {
  // -> ok, without close button, closeButtonLabel is not needed
  return <Alert />;
}
```## Usage

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
```## Examples

This page includes only documentation. Since all associated `AppShell` components have fixed position, it is not possible to include demos on this page.

## Usage

`AppShell` is a layout component. It can be used to implement a common Header – Navbar – Footer – Aside layout pattern. All `AppShell` components have `position: fixed` style – they are not scrolled with the page.

Basic AppShell example with header and navbar. Navbar is hidden on mobile by default and toggled with the burger button.

```tsx
import { AppShell, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
        />
        <div>Logo</div>
      </AppShell.Header>

      <AppShell.Navbar p="md">Navbar</AppShell.Navbar>

      <AppShell.Main>Main</AppShell.Main>
    </AppShell>
  );
}
```

## AppShell components

-   `AppShell` – root component, it is required to wrap all other components, used to configure layout properties
-   `AppShell.Header` – header section rendered at the top of the page, has fixed position, its height and collapsed state are controlled by the AppShell `header` prop
-   `AppShell.Navbar` – navbar section rendered at the left side of the page, has fixed position, its width and collapsed state are controlled by the AppShell `navbar` prop
-   `AppShell.Aside` – aside section rendered at the right side of the page, has fixed position, its width and collapsed state are controlled by the AppShell `aside` prop
-   `AppShell.Footer` – footer section rendered at the bottom of the page, has fixed position, its height and collapsed state are controlled by the AppShell `footer` prop
-   `AppShell.Main` – main section rendered at the center of the page, has static position, all other sections are offset by its padding
-   `AppShell.Section` – utility component that can be used to render group of content inside `AppShell.Navbar` and `AppShell.Aside`, can be used to create areas with custom scrollbars

## Configuration

`AppShell` component accepts, `header`, `footer`, `navbar` and `aside` props to configure corresponding sections. It is required to set these props if you want to use corresponding components. For example, if you want to use `AppShell.Header` component, you need to set `header` prop on the `AppShell` component.

`header` and `footer` configuration objects are the same and have the following properties:

```tsx
interface Configuration {
  /** Height of the section: number, string or
   ** object with breakpoints as keys and height as value */
  height: AppShellSize | AppShellResponsiveSize;

  /** If section is collapsed,
   ** it is hidden from the viewport and is not offset in AppShell.Main */
  collapsed?: boolean;

  /** Determines whether the section should be offset by the AppShell.Main.
   ** For example, it is useful if you want to
   ** hide header based on the scroll position. */
  offset?: boolean;
}
```

`navbar` and `aside` configuration objects are the same as well and have the following properties:

```tsx
interface Configuration {
  /** Width of the section: number, string or
   ** object with breakpoints as keys and width as value */
  width: AppShellSize | AppShellResponsiveSize;

  /** Breakpoint at which section should switch to mobile mode
   ** In mobile mode the section always has 100% width and its
   ** collapsed state is controlled by the `collapsed.mobile`
   ** instead of `collapsed.desktop` */
  breakpoint: MantineBreakpoint | (string & {}) | number;

  /** Determines whether the section should be collapsed */
  collapsed?: { desktop?: boolean; mobile?: boolean };
}
```

## layout prop

`layout` prop controls how `AppShell.Header`/`AppShell.Footer` and `AppShell.Navbar`/`AppShell.Aside` are positioned relative to each other. It accepts `alt` and `default` values:

-   `alt` – `AppShell.Navbar`/`AppShell.Aside` height is equal to viewport height, `AppShell.Header`/`AppShell.Footer` width is equal to viewport width - `AppShell.Navbar` and `AppShell.Aside` width (example)
-   `default` – `AppShell.Navbar`/`AppShell.Aside` height is equal to viewport height - `AppShell.Header`/`AppShell.Footer` height, `AppShell.Header`/`AppShell.Footer` width is equal to viewport width (example)

## Height configuration

`height` property in `header` and `footer` configuration objects works the following way:

-   If you pass a number, the value will be converted to rem and used as height at all viewport sizes.
-   To change height based on viewport width, use object with breakpoints as keys and height as values. It works the same way as style props.

Examples:

```tsx
import { AppShell } from '@mantine/core';

// Height is a number, it will be converted to rem
// and used as height at all viewport sizes
function Demo() {
  return (
    <AppShell header={{ height: 48 }}>
      <AppShell.Header>Header</AppShell.Header>
    </AppShell>
  );
}
```

```tsx
import { AppShell } from '@mantine/core';

// Height is an object with breakpoints:
// - height is 48 when viewport width is < theme.breakpoints.sm
// - height is 60 when viewport width is >= theme.breakpoints.sm and < theme.breakpoints.lg
// - height is 76 when viewport width is >= theme.breakpoints.lg
function Demo() {
  return (
    <AppShell header={{ height: { base: 48, sm: 60, lg: 76 } }}>
      <AppShell.Header>Header</AppShell.Header>
    </AppShell>
  );
}
```

## Width configuration

`width` property in `navbar` and `aside` configuration objects works the following way:

-   If you pass a number, the value will be converted to rem and used as width when the viewport is larger than `breakpoint`.
-   To change width based on viewport width, use object with breakpoints as keys and width as values. It works the same way as style props. Note that width is always 100% when the viewport is smaller than `breakpoint`.

Examples:

```tsx
import { AppShell } from '@mantine/core';

// Width is a number, it will be converted to rem
// and used as width when viewport is larger than theme.breakpoints.sm
function Demo() {
  return (
    <AppShell navbar={{ width: 48, breakpoint: 'sm' }}>
      <AppShell.Navbar>Navbar</AppShell.Navbar>
    </AppShell>
  );
}
```

```tsx
import { AppShell } from '@mantine/core';

// Width is an object with breakpoints:
// - width is 100% when viewport width is < theme.breakpoints.sm
// - width is 200 when viewport width is >= theme.breakpoints.sm and < theme.breakpoints.lg
// - width is 300 when viewport width is >= theme.breakpoints.lg
function Demo() {
  return (
    <AppShell
      navbar={{ width: { sm: 200, lg: 300 }, breakpoint: 'sm' }}
    >
      <AppShell.Navbar>Navbar</AppShell.Navbar>
    </AppShell>
  );
}
```

## padding prop

`padding` prop controls the padding of the `AppShell.Main` component. It is important to use it instead of setting padding on the `AppShell.Main` directly because padding of the `AppShell.Main` is also used to offset `AppShell.Header`, `AppShell.Navbar`, `AppShell.Aside` and `AppShell.Footer` components.

`padding` prop works the same way as style props and accepts numbers, strings and objects with breakpoints as keys and padding as values. You can reference `theme.spacing` values or use any valid CSS values.

```tsx
import { AppShell } from '@mantine/core';

// Padding is always theme.spacing.md
function Demo() {
  return <AppShell padding="md">{/* AppShell content */}</AppShell>;
}
```

```tsx
import { AppShell } from '@mantine/core';

// Padding is:
// - 10 when viewport width is < theme.breakpoints.sm
// - 15 when viewport width is >= theme.breakpoints.sm and < theme.breakpoints.lg
// - theme.spacing.xl when viewport width is >= theme.breakpoints.lg
function Demo() {
  return (
    <AppShell padding={{ base: 10, sm: 15, lg: 'xl' }}>
      {/* AppShell content */}
    </AppShell>
  );
}
```

## Header offset configuration

`header` prop has `offset` property which allows removing `AppShell.Header` offset from `AppShell.Main` component. It is useful when you want to collapse `AppShell.Header` based on the scroll position. For example, you can use use-headroom hook to collapse header when user scrolls down and expand it when user scrolls up (example).

```tsx
import { AppShell, rem } from '@mantine/core';
import { useHeadroom } from '@mantine/hooks';

function Demo() {
  const pinned = useHeadroom({ fixedAt: 120 });

  return (
    <AppShell
      header={{ height: 60, collapsed: !pinned, offset: false }}
      padding="md"
    >
      <AppShell.Header>Header</AppShell.Header>

      <AppShell.Main
        pt={`calc(${rem(60)} + var(--mantine-spacing-md))`}
      >
        {/* Content */}
      </AppShell.Main>
    </AppShell>
  );
}
```

## Collapsed navbar/aside configuration

`navbar` and `aside` props have `collapsed` property. The property accepts an object `{ mobile: boolean; desktop: boolean }` which allows to configure collapsed state depending on the viewport width.

Example with separate collapsed state for mobile and desktop:

```tsx
import { AppShell, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export function CollapseDesktop() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] =
    useDisclosure(true);

  return (
    <AppShell
      padding="md"
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
    >
      <AppShell.Header>Header</AppShell.Header>
      <AppShell.Navbar>Navbar</AppShell.Navbar>
      <AppShell.Main>
        <Button onClick={toggleDesktop} visibleFrom="sm">
          Toggle navbar
        </Button>
        <Button onClick={toggleMobile} hiddenFrom="sm">
          Toggle navbar
        </Button>
      </AppShell.Main>
    </AppShell>
  );
}
```

## withBorder prop

`withBorder` prop is available on `AppShell` and associated sections: `AppShell.Header`, `AppShell.Navbar`, `AppShell.Aside` and `AppShell.Footer`. By default, `withBorder` prop is `true` – all components have a border on the side that is adjacent to the `AppShell.Main` component. For example, `AppShell.Header` is located at the top of the page – it has a border on the bottom side, `AppShell.Navbar` is located on the left side of the page – it has a border on the right side.

To remove the border from all components, set `withBorder={false}` on the `AppShell`:

```tsx
import { AppShell } from '@mantine/core';

// None of the components will have a border
function Demo() {
  return (
    <AppShell withBorder={false}>{/* AppShell content */}</AppShell>
  );
}
```

To remove the border from a specific component, set `withBorder={false}` on that component:

```tsx
import { AppShell } from '@mantine/core';

// AppShell.Header does not have a border
// AppShell.Navbar and AppShell.Aside have a border
function Demo() {
  return (
    <AppShell>
      <AppShell.Header withBorder={false}>Header</AppShell.Header>
      <AppShell.Navbar>Navbar</AppShell.Navbar>
      <AppShell.Aside>Aside</AppShell.Aside>
    </AppShell>
  );
}
```

## zIndex prop

`zIndex` prop is available on `AppShell` and associated sections: `AppShell.Header`, `AppShell.Navbar`, `AppShell.Aside` and `AppShell.Footer`. By default, all sections `z-index` is `200`.

To change `z-index` of all sections, set `zIndex` prop on the `AppShell`:

```tsx
import { AppShell } from '@mantine/core';

// All sections will have z-index of 100
function Demo() {
  return <AppShell zIndex={100}>{/* AppShell content */}</AppShell>;
}
```

To change `z-index` of a specific section, set `zIndex` prop on that section:

```tsx
import { AppShell } from '@mantine/core';

// AppShell.Header has z-index of 100
// AppShell.Navbar and AppShell.Aside have z-index of 300
function Demo() {
  return (
    <AppShell>
      <AppShell.Header zIndex={100}>Header</AppShell.Header>
      <AppShell.Navbar zIndex={300}>Navbar</AppShell.Navbar>
      <AppShell.Aside zIndex={300}>Aside</AppShell.Aside>
    </AppShell>
  );
}
```

## Control transitions

Set `transitionDuration` and `transitionTimingFunction` props on the `AppShell` to control transitions:

```tsx
import { AppShell } from '@mantine/core';

function Demo() {
  return (
    <AppShell
      transitionDuration={500}
      transitionTimingFunction="ease"
    >
      {/* AppShell content */}
    </AppShell>
  );
}
```

## disabled prop

Set `disabled` prop on the `AppShell` to prevent all sections except `AppShell.Main` from rendering. It is useful when you want to hide the shell on some pages of your application.

```tsx
import { AppShell } from '@mantine/core';

function Demo() {
  return <AppShell disabled>{/* AppShell content */}</AppShell>;
}
```

## AppShell.Section component

`AppShell.Section` component can be used to create scrollable areas inside `AppShell.Navbar` and `AppShell.Aside`. Root elements of `AppShell.Navbar` and `AppShell.Aside` are flexbox containers with `flex-direction: column`, `AppShell.Section` with `grow` attribute will take all available space and will be scrollable if `component={ScrollArea}` is set.

In the following example:

-   First and last sections (header and footer) will take as much space as they need to render `children`
-   Second section will take all available space and will be scrollable if content height exceeds available space

```tsx
import { AppShell, ScrollArea } from '@mantine/core';

function Demo() {
  return (
    <AppShell navbar={{ width: 300, breakpoint: 0 }}>
      <AppShell.Navbar>
        <AppShell.Section>Navbar header</AppShell.Section>
        <AppShell.Section grow component={ScrollArea}>
          Navbar main section, it will
        </AppShell.Section>
        <AppShell.Section>
          Navbar footer – always at the bottom
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main>Main</AppShell.Main>
    </AppShell>
  );
}
```

## Semantic elements

-   `AppShell.Header` root element is `header`
-   `AppShell.Navbar` root element is `nav`
-   `AppShell.Aside` root element is `aside`
-   `AppShell.Footer` root element is `footer`
-   `AppShell.Main` root element is `main` – **!important:** do not use `main` element inside `AppShell.Main` component## Usage

`AspectRatio` allows maintaining a consistent width/height ratio. It can be used to display images, maps, videos and other media.

```

import { AspectRatio } from '@mantine/core';

function Demo() {
  return (
    <AspectRatio ratio={1080 / 720} maw={300} mx="auto">
      <img
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png"
        alt="Panda"
      />
    </AspectRatio>
  );
}
```

## Map embed

```

import { AspectRatio } from '@mantine/core';

function Demo() {
  return (
    <AspectRatio ratio={16 / 9}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.3063874233135!2d-74.04668908358428!3d40.68924937933441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25090129c363d%3A0x40c6a5770d25022b!2sStatue%20of%20Liberty%20National%20Monument!5e0!3m2!1sen!2sru!4v1644262070010!5m2!1sen!2sru"
        title="Google map"
        style={{ border: 0 }}
      />
    </AspectRatio>
  );
}
```

## Video embed

```

import { AspectRatio } from '@mantine/core';

function Demo() {
  return (
    <AspectRatio ratio={16 / 9}>
      <iframe
        src="https://www.youtube.com/embed/mzJ4vCjSt28"
        title="YouTube video player"
        style={{ border: 0 }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </AspectRatio>
  );
}
```

## Inside flex container

By default, `AspectRatio` does not have fixed width and height, it will take as much space as possible in a regular container. To make it work inside flex container, you need to set `width` or `flex` property.

```

import { AspectRatio, Image, rem } from '@mantine/core';

function Demo() {
  return (
    <div style={{ display: 'flex' }}>
      <AspectRatio ratio={1} style={{ flex: `0 0 ${rem(100)}` }}>
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-6.png"
          alt="Avatar"
        />
      </AspectRatio>
    </div>
  );
}
```## Usage

`Autocomplete` provides user a list of suggestions based on the input, however user is not limited to suggestions and can type anything.

```

import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
  );
}
```

## Controlled

`Autocomplete` value must be a string, other types are not supported. `onChange` function is called with a string value as a single argument.

```tsx
import { useState } from 'react';
import { Autocomplete } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('');
  return <Autocomplete data={[]} value={value} onChange={setValue} />;
}
```

```

import { Autocomplete, ComboboxItem, OptionsFilter } from '@mantine/core';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const splittedSearch = search.toLowerCase().trim().split(' ');
  return (options as ComboboxItem[]).filter((option) => {
    const words = option.label.toLowerCase().trim().split(' ');
    return splittedSearch.every((searchWord) => words.some((word) => word.includes(searchWord)));
  });
};

function Demo() {
  return (
    <Autocomplete
      label="Your country"
      placeholder="Pick value or enter anything"
      data={['Great Britain', 'Russian Federation', 'United States']}
      filter={optionsFilter}
    />
  );
}
```

## Sort options

By default, options are sorted by their position in the data array. You can change this behavior with `filter` function:

```

import { Autocomplete, ComboboxItem, OptionsFilter } from '@mantine/core';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const filtered = (options as ComboboxItem[]).filter((option) =>
    option.label.toLowerCase().trim().includes(search.toLowerCase().trim())
  );

  filtered.sort((a, b) => a.label.localeCompare(b.label));
  return filtered;
};

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={['4 – React', '1 – Angular', '3 – Vue', '2 – Svelte']}
      filter={optionsFilter}
    />
  );
}
```

```

import { Autocomplete } from '@mantine/core';

const largeData = Array(100_000)
  .fill(0)
  .map((_, index) => `Option ${index}`);

function Demo() {
  return (
    <Autocomplete
      label="100 000 options autocomplete"
      placeholder="Use limit to optimize performance"
      limit={5}
      data={largeData}
    />
  );
}
```

## renderOption

`renderOption` callback allows you to customize option rendering. It is called with option object. The function must return a React node.

```

import { Autocomplete, AutocompleteProps, Avatar, Group, Text } from '@mantine/core';

const usersData: Record<string, { image: string; email: string }> = {
  'Emily Johnson': {
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png',
    email: 'emily92@gmail.com',
  },
  'Ava Rodriguez': {
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png',
    email: 'ava_rose@gmail.com',
  },
  'Olivia Chen': {
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png',
    email: 'livvy_globe@gmail.com',
  },
  'Ethan Barnes': {
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
    email: 'ethan_explorer@gmail.com',
  },
  'Mason Taylor': {
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
    email: 'mason_musician@gmail.com',
  },
};

const renderAutocompleteOption: AutocompleteProps['renderOption'] = ({ option }) => (
  <Group gap="sm">
    <Avatar src={usersData[option.value].image} size={36} radius="xl" />
    <div>
      <Text size="sm">{option.value}</Text>
      <Text size="xs" opacity={0.5}>
        {usersData[option.value].email}
      </Text>
    </div>
  </Group>
);

function Demo() {
  return (
    <Autocomplete
      data={['Emily Johnson', 'Ava Rodriguez', 'Olivia Chen', 'Ethan Barnes', 'Mason Taylor']}
      renderOption={renderAutocompleteOption}
      maxDropdownHeight={300}
      label="Employee of the month"
      placeholder="Search for employee"
    />
  );
}
```

## Scrollable dropdown

By default, the options list is wrapped with ScrollArea.Autosize. You can control dropdown max-height with `maxDropdownHeight` prop if you do not change the default settings.

If you want to use native scrollbars, set `withScrollArea={false}`. Note that in this case, you will need to change dropdown styles with Styles API.

```

import { Autocomplete } from '@mantine/core';

const data = Array(100)
  .fill(0)
  .map((_, index) => `Option ${index}`);

function Demo() {
  return (
    <>
      <Autocomplete
        label="With scroll area (default)"
        placeholder="Pick value or enter anything"
        data={data}
        maxDropdownHeight={200}
      />

      <Autocomplete
        label="With native scroll"
        placeholder="Pick value or enter anything"
        data={data}
        withScrollArea={false}
        styles={{ dropdown: { maxHeight: 200, overflowY: 'auto' } }}
        mt="md"
      />
    </>
  );
}
```

## Group options

```

import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={[
        { group: 'Frontend', items: ['React', 'Angular'] },
        { group: 'Backend', items: ['Express', 'Django'] },
      ]}
    />
  );
}
```

## Disabled options

When option is disabled, it cannot be selected and is ignored in keyboard navigation.

```

import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={[
        { value: 'React' },
        { value: 'Angular' },
        { value: 'Vue', disabled: true },
        { value: 'Svelte', disabled: true },
      ]}
    />
  );
}
```

## Inside Popover

To use `Autocomplete` inside popover, you need to set `withinPortal: false`:

```

import { Popover, Button, Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Popover width={300} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Autocomplete
          label="Your favorite library"
          placeholder="Pick value or enter anything"
          data={['React', 'Angular', 'Vue', 'Svelte']}
          comboboxProps={{ withinPortal: false }}
        />
      </Popover.Dropdown>
    </Popover>
  );
}
```

## Control dropdown opened state

You can control dropdown opened state with `dropdownOpened` prop. Additionally, you can use `onDropdownClose` and `onDropdownOpen` to listen to dropdown opened state changes.

```

import { Autocomplete, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [dropdownOpened, { toggle }] = useDisclosure();
  return (
    <>
      <Button onClick={toggle} mb="md">
        Toggle dropdown
      </Button>

      <Autocomplete
        label="Your favorite library"
        placeholder="Pick value or enter anything"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        dropdownOpened={dropdownOpened}
      />
    </>
  );
}
```

## Dropdown position

By default, the dropdown is displayed below the input if there is enough space; otherwise it is displayed above the input. You can change this behavior by setting `position` and `middlewares` props, which are passed down to the underlying Popover component.

Example of dropdown that is always displayed above the input:

```

import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ position: 'top', middlewares: { flip: false, shift: false } }}
    />
  );
}
```

## Dropdown animation

By default, dropdown animations are disabled. To enable them, you can set `transitionProps`, which will be passed down to the underlying Transition component.

```

import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
    />
  );
}
```

## Dropdown padding

```

import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <>
      <Autocomplete
        label="Zero padding"
        placeholder="Pick value or enter anything"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        comboboxProps={{ dropdownPadding: 0 }}
      />
      <Autocomplete
        mt="md"
        label="10px padding"
        placeholder="Pick value or enter anything"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        comboboxProps={{ dropdownPadding: 10 }}
      />
    </>
  );
}
```

## Dropdown shadow

```

import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ shadow: 'md' }}
    />
  );
}
```

```

import { Autocomplete, rem } from '@mantine/core';
import { IconComponents } from '@tabler/icons-react';

function Demo() {
  const icon = <IconComponents style={{ width: rem(16), height: rem(16) }} />;
  return (
    <>
      <Autocomplete
        data={['React', 'Angular', 'Vue']}
        leftSectionPointerEvents="none"
        leftSection={icon}
        label="Your favorite library"
        placeholder="Your favorite library"
      />
      <Autocomplete
        mt="md"
        data={['React', 'Angular', 'Vue']}
        rightSectionPointerEvents="none"
        rightSection={icon}
        label="Your favorite library"
        placeholder="Your favorite library"
      />
    </>
  );
}
```

## Input props

```

import { Autocomplete } from '@mantine/core';


function Demo() {
  return (
    <Autocomplete
      {{props}}
      placeholder="Autocomplete placeholder"
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
  );
}
```

## Read only

Set `readOnly` to make the input read only. When `readOnly` is set, `Autocomplete` will not show suggestions and will not call `onChange` function.

```

import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      readOnly
    />
  );
}
```

## Disabled

Set `disabled` to disable the input. When `disabled` is set, user cannot interact with the input and `Autocomplete` will not show suggestions.

```

import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      disabled
    />
  );
}
```

## Error state

```

import { Autocomplete } from '@mantine/core';

function Demo() {
  return (
    <>
      <Autocomplete
        label="Boolean error"
        placeholder="Boolean error"
        error
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
      <Autocomplete
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
    </>
  );
}
```

```

import { IconAt } from '@tabler/icons-react';
import { Autocomplete, rem } from '@mantine/core';

function Demo() {
  return (
    <Autocomplete
     {{props}}
      leftSection={<IconAt style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
      label="Autocomplete"
      description="Description"
      error="Error"
      placeholder="Autocomplete"
      data={['React', 'Angular']}
    />
  );
}
```## Usage

```

import { Avatar } from '@mantine/core';
import { IconStar } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      {/* With image */}
      <Avatar src="avatar.png" alt="it's me" />

      {/* Default placeholder */}
      <Avatar radius="xl" />

      {/* Letters with xl radius */}
      <Avatar color="cyan" radius="xl">MK</Avatar>

      {/* Custom placeholder icon */}
      <Avatar color="blue" radius="sm">
        <IconStar size="1.5rem" />
      </Avatar>
    </>
  );
}

```

## Initials

To display initials instead of the default placeholder, set `name` prop to the name of the person, for example, `name="John Doe"`. If the name is set, you can use `color="initials"` to generate color based on the name:

```

import { Avatar, Group } from '@mantine/core';

const names = [
  'John Doe',
  'Jane Mol',
  'Alex Lump',
  'Sarah Condor',
  'Mike Johnson',
  'Kate Kok',
  'Tom Smith',
];

function Demo() {
  const avatars = names.map((name) => <Avatar key={name} name={name} color="initials" />);
  return <Group>{avatars}</Group>;
}
```

## Allowed initials colors

By default, all colors from the default theme are allowed for initials, you can restrict them by providing `allowedInitialsColors` prop with an array of colors. Note that the default colors array does not include custom colors defined in the theme, you need to provide them manually if needed.

```

import { Avatar, Group } from '@mantine/core';

const names = [
  'John Doe',
  'Jane Mol',
  'Alex Lump',
  'Sarah Condor',
  'Mike Johnson',
  'Kate Kok',
  'Tom Smith',
];

function Demo() {
  const avatars = names.map((name) => (
    <Avatar key={name} name={name} color="initials" allowedInitialsColors={['blue', 'red']} />
  ));
  return <Group>{avatars}</Group>;
}
```

## Placeholder

If the image cannot be loaded or not provided, `Avatar` will display a placeholder instead. By default, placeholder is an icon, but it can be changed to any React node:

```

import { Avatar } from '@mantine/core';
import { IconStar } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      {/* Default placeholder */}
      <Avatar src={null} alt="no image here" />

      {/* Default placeholder with custom color */}
      <Avatar src={null} alt="no image here" color="indigo" />

      {/* Placeholder with initials */}
      <Avatar src={null} alt="Vitaly Rtishchev" color="red">VR</Avatar>

      {/* Placeholder with custom icon */}
      <Avatar color="blue" radius="xl">
        <IconStar size="1.5rem" />
      </Avatar>
    </>
  );
}

```

## Variants

```

import { Avatar } from '@mantine/core';

function Demo() {
  return <Avatar{{props}} />;
}
```

## Avatar.Group

`Avatar.Group` component combines multiple avatars into a stack:

```

import { Avatar } from '@mantine/core';

function Demo() {
  return (
    <Avatar.Group>
      <Avatar src="image.png" />
      <Avatar src="image.png" />
      <Avatar src="image.png" />
      <Avatar>+5</Avatar>
    </Avatar.Group>
  );
}
```

Note that you must not wrap child `Avatar` components with any additional elements, but you can use wrap `Avatar` with components that do not render any HTML elements in the current tree, for example Tooltip.

```tsx
import { Avatar } from '@mantine/core';

// Will not work correctly
function Demo() {
  return (
    <Avatar.Group spacing="sm">
      <div>
        <Avatar src="image.png" radius="xl" />
      </div>
      <Avatar src="image.png" radius="xl" />
      <Avatar src="image.png" radius="xl" />
      <Avatar radius="xl">+5</Avatar>
    </Avatar.Group>
  );
}
```

Example of usage with Tooltip:

```

import { Avatar, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip.Group openDelay={300} closeDelay={100}>
      <Avatar.Group spacing="sm">
        <Tooltip label="Salazar Troop" withArrow>
          <Avatar src="image.png" radius="xl" />
        </Tooltip>
        <Tooltip label="Bandit Crimes" withArrow>
          <Avatar src="image.png" radius="xl" />
        </Tooltip>
        <Tooltip label="Jane Rata" withArrow>
          <Avatar src="image.png" radius="xl" />
        </Tooltip>
        <Tooltip
          withArrow
          label={
            <>
              <div>John Outcast</div>
              <div>Levi Capitan</div>
            </>
          }
        >
          <Avatar radius="xl">+2</Avatar>
        </Tooltip>
      </Avatar.Group>
    </Tooltip.Group>
  );
}
```

```

import { Avatar } from '@mantine/core';

function Demo() {
  return (
    <Avatar
      component="a"
      href="https://github.com/rtivital"
      target="_blank"
      src="avatar.png"
      alt="it's me"
    />
  );
}
```

You can combine it with Tooltip or Popover to show additional information on hover

```

import { Avatar, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip.Group openDelay={300} closeDelay={100}>
      <Avatar.Group spacing="sm">
        <Tooltip label="Salazar Troop" withArrow>
          <Avatar src="image.png" radius="xl" />
        </Tooltip>
        <Tooltip label="Bandit Crimes" withArrow>
          <Avatar src="image.png" radius="xl" />
        </Tooltip>
        <Tooltip label="Jane Rata" withArrow>
          <Avatar src="image.png" radius="xl" />
        </Tooltip>
        <Tooltip
          withArrow
          label={
            <>
              <div>John Outcast</div>
              <div>Levi Capitan</div>
            </>
          }
        >
          <Avatar radius="xl">+2</Avatar>
        </Tooltip>
      </Avatar.Group>
    </Tooltip.Group>
  );
}
```

## Accessibility

Avatar renders `<img />` HTML element. Set `alt` prop to describe image, it is also used as `title` attribute for avatar placeholder when the image cannot be loaded.

```tsx
import { Avatar } from '@mantine/core';

function NotOk() {
  // Not ok, no alt for image
  return <Avatar src="./image.png" />;
}

function Ok() {
  // Ok, alt is set on <img /> tag
  return <Avatar src="./image.png" alt="Rob Johnson" />;
}

function Ehh() {
  // Ehh, title is not required, but still recommended
  return <Avatar>RJ</Avatar>;
}

function OkPlaceholder() {
  // Ok, title is set on placeholder
  return <Avatar alt="Rob Johnson">RJ</Avatar>;
}
```## Usage

```

import { BackgroundImage, Center, Text, Box } from '@mantine/core';


function Demo() {
  return (
    <Box maw={300} mx="auto">
      <BackgroundImage
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-6.png"
        {{props}}
      >
        <Center p="md">
          <Text c="white">
            BackgroundImage component can be used to add any content on image. It is useful for hero
            headers and other similar sections
          </Text>
        </Center>
      </BackgroundImage>
    </Box>
  );
}
```## Usage

```

import { Badge } from '@mantine/core';

function Demo() {
  return <Badge{{props}}>Badge</Badge>;
}
```

```
(props) => `
import { Badge } from '@mantine/core';

function Demo() {
  return (
    
      Gradient badge
    
  );
}
`
```

## Rounded

Set `circle` prop, to reduce horizontal padding and make badge width equal to its height:

```

import { Badge, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Badge size="xs" circle>
        1
      </Badge>
      <Badge size="sm" circle>
        7
      </Badge>
      <Badge size="md" circle>
        9
      </Badge>
      <Badge size="lg" circle>
        3
      </Badge>
      <Badge size="xl" circle>
        8
      </Badge>
    </Group>
  );
}
```

## Left and right sections

```

import { Badge, Group, rem } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  const icon = <IconAt style={{ width: rem(12), height: rem(12) }} />;
  return (
    <Group>
      <Badge leftSection={icon}>With left section</Badge>
      <Badge rightSection={icon}>With right section</Badge>
    </Group>
  );
}
```

## Full width

Set `fullWidth` to make badge span full width of its parent element:

```

import { Badge } from '@mantine/core';

function Demo() {
  return <Badge fullWidth>Full width badge</Badge>;
}
```

## Customize variants colors

You can customize colors for `Badge` and other components variants by adding variantColorResolver to your theme.

```

import { IconPhoto, IconFingerprint, IconError404 } from '@tabler/icons-react';
import {
  Badge,
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
        <Badge color="lime.4" variant="filled">
          Lime filled
        </Badge>

        <Badge color="orange" variant="light">
          Orange light
        </Badge>

        <Badge variant="danger">
          Danger
        </Badge>
      </Group>
    </MantineProvider>
  );
}
```

```

import { Badge, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Badge size="lg" color="lime.4">
        Default
      </Badge>
      <Badge autoContrast size="lg" color="lime.4">
        Auto contrast
      </Badge>
    </Group>
  );
}
```

```

import { Badge, rem } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  const icon = <IconAt style={{ width: rem(12), height: rem(12) }} />;

  return (
    <Badge leftSection={icon} rightSection={icon}{{props}}>
      Badge component
    </Badge>
  );
}
```## Usage

```

import { Blockquote } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';

function Demo() {
  const icon = <IconInfoCircle />;
  return (
    <Blockquote{{props}} cite="– Forrest Gump" icon={icon} mt="xl">
      Life is like an npm install – you never know what you are going to get.
    </Blockquote>
  );
}
```## Usage

`Box` component is used as a base for all other components. `Box` supports the following features:

-   component prop
-   style props
-   style prop

You can use `Box` as a base for your own components or as a replacement for HTML elements:

```tsx
import { Box } from '@mantine/core';

function Demo() {
  return (
    <Box bg="red.5" my="xl" component="a" href="/">
      My component
    </Box>
  );
}
```## Usage

`Breadcrumbs` component accepts any number of React nodes as children and adds a given separator (defaults to `/`) between them:

```

import { Breadcrumbs, Anchor } from '@mantine/core';

const items = [
  { title: 'Mantine', href: '#' },
  { title: 'Mantine hooks', href: '#' },
  { title: 'use-id', href: '#' },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

function Demo() {
  return (
    <>
      <Breadcrumbs>{items}</Breadcrumbs>
      <Breadcrumbs separator="→" separatorMargin="md" mt="xs">
        {items}
      </Breadcrumbs>
    </>
  );
}
```## Usage

`Burger` component renders open/close menu button. Set `opened` and `onClick` props to control component state. If `opened` prop is set, cross will be rendered, otherwise – burger.

```

import { useDisclosure } from '@mantine/hooks';
import { Burger } from '@mantine/core';

function Demo() {
  const [opened, { toggle }] = useDisclosure();
  return <Burger{{props}} opened={opened} onClick={toggle} aria-label="Toggle navigation" />;
}
```

## Change lines size

```

import { useDisclosure } from '@mantine/hooks';
import { Burger } from '@mantine/core';

function Demo() {
  const [opened, { toggle }] = useDisclosure();
  return <Burger{{props}} size="xl" opened={opened} onClick={toggle} aria-label="Toggle navigation" />;
}
```

## Accessibility

To make `Burger` accessible for screen readers, you need to either set `aria-label` or use VisuallyHidden component:

```tsx
import { Burger, VisuallyHidden } from '@mantine/core';

function Demo() {
  return (
    <>
      <Burger aria-label="Toggle navigation" />

      <Burger>
        <VisuallyHidden>Toggle navigation</VisuallyHidden>
      </Burger>
    </>
  );
}
```## Usage

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
```## Usage

`Card` is a wrapper around Paper component with some additional styles and `Card.Section` component that allows to split card into sections. If you do not need sections, you use Paper component instead.

```

import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Norway Fjord Adventures</Text>
        <Badge color="pink">On Sale</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button>
    </Card>
  );
}

```

## Polymorphic component

Card is a polymorphic component component, you can change its root element:

```

import { Card, Image, Text } from '@mantine/core';

function Demo() {
  return (
    <Card
      shadow="sm"
      padding="xl"
      component="a"
      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      target="_blank"
    >
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
          h={160}
          alt="No way!"
        />
      </Card.Section>

      <Text fw={500} size="lg" mt="md">
        You&apos;ve won a million dollars in cash!
      </Text>

      <Text mt="xs" c="dimmed" size="sm">
        Please click anywhere on this card to claim your reward, this is not a fraud, trust us
      </Text>
    </Card>
  );
}
```

## Card.Section

`Card.Section` is a special component that is used to remove Card padding from its children while other elements still have horizontal spacing. `Card.Section` works the following way:

-   If component is the first child in Card, then it has negative top, left and right margins
-   If it is the last child in Card, then it has negative bottom, left and right margins
-   If it is in the middle then, only the left and right margins will be negative

```tsx
import { Card, Text } from '@mantine/core';

function Demo() {
  return (
    <Card padding="xl">
      {/* top, right, left margins are negative – -1 * theme.spacing.xl */}
      <Card.Section>First section</Card.Section>

      {/* Content that is not inside Card.Section will have theme.spacing.xl spacing on all sides relative to Card */}
      <Text>Some other content</Text>

      {/* right, left margins are negative – -1 * theme.spacing.xl */}
      <Card.Section>Middle section</Card.Section>

      {/* bottom, right, left margins are negative – -1 * theme.spacing.xl */}
      <Card.Section>Last section</Card.Section>
    </Card>
  );
}
```

Note that `Card` relies on mapping direct children and you cannot use fragments or other wrappers for `Card.Section`:

```tsx
import { Card } from '@mantine/core';

function Demo() {
  return (
    <Card padding="xl">
      <div>
        <Card.Section>Won't work</Card.Section>
      </div>

      <>
        <Card.Section>Won't work either</Card.Section>
      </>

      <Card.Section>Works fine</Card.Section>
    </Card>
  );
}
```

## Polymorphic Card.Section

`Card.Section` is a polymorphic component component, you can change its root element:

```

import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section component="a" href="https://mantine.dev/">
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Norway Fjord Adventures</Text>
        <Badge color="pink">On Sale</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button>
    </Card>
  );
}
```

## withBorder and inheritPadding props

-   `withBorder` prop adds top and bottom border to `Card.Section` depending on its position relative to other content and sections
-   `inheritPadding` prop adds the same left and right padding to `Card.Section` as set in `Card` component

```

import { Card, Group, Text, Menu, ActionIcon, Image, SimpleGrid, rem } from '@mantine/core';
import { IconDots, IconEye, IconFileZip, IconTrash } from '@tabler/icons-react';

const images = [
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
];

function Demo() {
  return (
    <Card withBorder shadow="sm" radius="md">
      <Card.Section withBorder inheritPadding py="xs">
        <Group justify="space-between">
          <Text fw={500}>Review pictures</Text>
          <Menu withinPortal position="bottom-end" shadow="sm">
            <Menu.Target>
              <ActionIcon variant="subtle" color="gray">
                <IconDots style={{ width: rem(16), height: rem(16) }} />
              </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item leftSection={<IconFileZip style={{ width: rem(14), height: rem(14) }} />}>
                Download zip
              </Menu.Item>
              <Menu.Item leftSection={<IconEye style={{ width: rem(14), height: rem(14) }} />}>
                Preview all
              </Menu.Item>
              <Menu.Item
                leftSection={<IconTrash style={{ width: rem(14), height: rem(14) }} />}
                color="red"
              >
                Delete all
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Card.Section>

      <Text mt="sm" c="dimmed" size="sm">
        <Text span inherit c="var(--mantine-color-anchor)">
          200+ images uploaded
        </Text>{' '}
        since last visit, review them to select which one should be added to your gallery
      </Text>

      <Card.Section mt="sm">
        <Image src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png" />
      </Card.Section>

      <Card.Section inheritPadding mt="sm" pb="md">
        <SimpleGrid cols={3}>
          {images.map((image) => (
            <Image src={image} key={image} radius="sm" />
          ))}
        </SimpleGrid>
      </Card.Section>
    </Card>
  );
}
```## Usage

```

import { Center, Box } from '@mantine/core';

function Demo() {
  return (
    <Center maw={400} h={100} bg="var(--mantine-color-gray-light)">
      <Box bg="var(--mantine-color-blue-light)">All elements inside Center are centered</Box>
    </Center>
  );
}
```

## Inline

To use `Center` with inline elements set `inline` prop. For example, you can center link icon and label:

```

import { Center, Anchor, Box, rem } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';

function Demo() {
  return (
    <Anchor href="https://mantine.dev" target="_blank">
      <Center inline>
        <IconArrowLeft style={{ width: rem(12), height: rem(12) }} />
        <Box ml={5}>Back to Mantine website</Box>
      </Center>
    </Anchor>
  );
}
```## Usage

```

import { Checkbox } from '@mantine/core';


function Demo() {
  return (
    <Checkbox
      defaultChecked
      {{props}}
    />
  );
}
```

## Controlled

```tsx
import { useState } from 'react';
import { Checkbox } from '@mantine/core';

function Demo() {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      checked={checked}
      onChange={(event) => setChecked(event.currentTarget.checked)}
    />
  );
}
```

## States

```

import { Checkbox, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <Checkbox checked={false} onChange={() => {}} label="Default checkbox" />
      <Checkbox checked={false} onChange={() => {}} indeterminate label="Indeterminate checkbox" />
      <Checkbox checked onChange={() => {}} label="Checked checkbox" />
      <Checkbox checked variant="outline" onChange={() => {}} label="Outline checked checkbox" />
      <Checkbox
        variant="outline"
        onChange={() => {}}
        indeterminate
        label="Outline indeterminate checkbox"
      />
      <Checkbox disabled label="Disabled checkbox" />
      <Checkbox disabled checked onChange={() => {}} label="Disabled checked checkbox" />
      <Checkbox disabled indeterminate label="Disabled indeterminate checkbox" />
    </Stack>
  );
}
```

## Change icons

```

import { Checkbox, CheckboxProps } from '@mantine/core';
import { IconBiohazard, IconRadioactive } from '@tabler/icons-react';

const CheckboxIcon: CheckboxProps['icon'] = ({ indeterminate, ...others }) =>
  indeterminate ? <IconRadioactive {...others} /> : <IconBiohazard {...others} />;

function Demo() {
  return (
    <>
      <Checkbox icon={CheckboxIcon} label="Custom icon" defaultChecked />
      <Checkbox icon={CheckboxIcon} label="Custom icon: indeterminate" indeterminate mt="sm" />
    </>
  );
}
```

## Change icon color

Use `iconColor` prop to change icon color. You can reference colors from `theme.colors` or use any valid CSS color:

```

import { Checkbox } from '@mantine/core';

function Demo() {
  return (
    <Checkbox
      defaultChecked
      color="lime.4"
      iconColor="dark.8"
      size="md"
      label="Bright lime checkbox"
    />
  );
}
```

## Indeterminate state

`Checkbox` supports indeterminate state. When `indeterminate` prop is set, `checked` prop is ignored (checkbox always has checked styles):

```

import { useListState, randomId } from '@mantine/hooks';
import { Checkbox } from '@mantine/core';

const initialValues = [
  { label: 'Receive email notifications', checked: false, key: randomId() },
  { label: 'Receive sms notifications', checked: false, key: randomId() },
  { label: 'Receive push notifications', checked: false, key: randomId() },
];

export function IndeterminateCheckbox() {
  const [values, handlers] = useListState(initialValues);

  const allChecked = values.every((value) => value.checked);
  const indeterminate = values.some((value) => value.checked) && !allChecked;

  const items = values.map((value, index) => (
    <Checkbox
      mt="xs"
      ml={33}
      label={value.label}
      key={value.key}
      checked={value.checked}
      onChange={(event) => handlers.setItemProp(index, 'checked', event.currentTarget.checked)}
    />
  ));

  return (
    <>
      <Checkbox
        checked={allChecked}
        indeterminate={indeterminate}
        label="Receive all notifications"
        onChange={() =>
          handlers.setState((current) =>
            current.map((value) => ({ ...value, checked: !allChecked }))
          )
        }
      />
      {items}
    </>
  );
}
```

## Label with link

```

import { Checkbox, Anchor } from '@mantine/core';

function Demo() {
  return (
    <Checkbox
      label={
        <>
          I accept{' '}
          <Anchor href="https://mantine.dev" target="_blank" inherit>
            terms and conditions
          </Anchor>
        </>
      }
    />
  );
}
```

## Checkbox with tooltip

You can change target element to which tooltip is attached with `refProp`:

-   If `refProp` is not set, the tooltip is attached to the checkbox input
-   If `refProp="rootRef"` is set, the tooltip is attached to the root element (contains label, input and other elements)

```

import { Tooltip, Checkbox } from '@mantine/core';

function Demo() {
  return (
    <>
      <Tooltip label="Checkbox with tooltip">
        <Checkbox label="Tooltip on checkbox only" />
      </Tooltip>

      <Tooltip label="Checkbox with tooltip" refProp="rootRef">
        <Checkbox label="Tooltip the entire element" mt="md" />
      </Tooltip>
    </>
  );
}
```

## Pointer cursor

By default, checkbox input and label have `cursor: default` (same as native `input[type="checkbox"]`). To change cursor to pointer, set `cursorType` on theme:

```

import { MantineProvider, createTheme, Checkbox } from '@mantine/core';

const theme = createTheme({
  cursorType: 'pointer',
});

function Demo() {
  return (
    <>
      <Checkbox label="Default cursor" />

      <MantineProvider theme={theme}>
        <Checkbox label="Pointer cursor" mt="md" />
      </MantineProvider>
    </>
  );
}
```

## Add custom sizes

You can add any number of custom sizes with data-size attribute:

```

import { MantineProvider, Checkbox, createTheme } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Checkbox: Checkbox.extend({ classNames: classes }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Checkbox size="xxs" label="Extra small checkbox" />
      <Checkbox size="xxl" label="Extra large checkbox" mt="md" />
    </MantineProvider>
  );
}
```

## Checkbox.Group

```

import { Checkbox, Group } from '@mantine/core';


function Demo() {
  return (
    <Checkbox.Group
      defaultValue={['react']}
      {{props}}
    >
      <Group mt="xs">
        <Checkbox value="react" label="React" />
        <Checkbox value="svelte" label="Svelte" />
        <Checkbox value="ng" label="Angular" />
        <Checkbox value="vue" label="Vue" />
      </Group>
    </Checkbox.Group>
  );
}
```

## Controlled Checkbox.Group

```tsx
import { useState } from 'react';
import { Checkbox } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<string[]>([]);

  return (
    <Checkbox.Group value={value} onChange={setValue}>
      <Checkbox value="react" label="React" />
      <Checkbox value="svelte" label="Svelte" />
    </Checkbox.Group>
  );
}
```

## Checkbox.Indicator

`Checkbox.Indicator` looks exactly the same as `Checkbox` component, but it does not have any semantic meaning, it’s just a visual representation of checkbox state. You can use it in any place where you need to display checkbox state without any interaction related to the indicator. For example, it is useful in cards based on buttons, trees, etc.

Note that `Checkbox.Indicator` cannot be focused or selected with keyboard. It is not accessible and should not be used as a replacement for `Checkbox` component.

```

import { Checkbox, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Checkbox.Indicator />
      <Checkbox.Indicator checked />
      <Checkbox.Indicator indeterminate />
      <Checkbox.Indicator disabled />
      <Checkbox.Indicator disabled checked />
      <Checkbox.Indicator disabled indeterminate />
    </Group>
  );
}
```

## Checkbox.Card component

`Checkbox.Card` component can be used as a replacement for `Checkbox` to build custom cards/buttons/other things that work as checkboxes. The root element of the component has `role="checkbox"` attribute, it is accessible by default and supports the same keyboard interactions as `input[type="checkbox"]`.

```

import { useState } from 'react';
import { Checkbox, Group, Text } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox.Card
      className={classes.root}
      radius="md"
      checked={checked}
      onClick={() => setChecked((c) => !c)}
    >
      <Group wrap="nowrap" align="flex-start">
        <Checkbox.Indicator />
        <div>
          <Text className={classes.label}>@mantine/core</Text>
          <Text className={classes.description}>
            Core components library: inputs, buttons, overlays, etc.
          </Text>
        </div>
      </Group>
    </Checkbox.Card>
  );
}
```

You can use `Checkbox.Card` with `Checkbox.Group` the same way as `Checkbox` component:

```

import { useState } from 'react';
import { Checkbox, Group, Stack, Text } from '@mantine/core';
import classes from './Demo.module.css';

const data = [
  {
    name: '@mantine/core',
    description: 'Core components library: inputs, buttons, overlays, etc.',
  },
  { name: '@mantine/hooks', description: 'Collection of reusable hooks for React applications.' },
  { name: '@mantine/notifications', description: 'Notifications system' },
];

function Demo() {
  const [value, setValue] = useState<string[]>([]);

  const cards = data.map((item) => (
    <Checkbox.Card className={classes.root} radius="md" value={item.name} key={item.name}>
      <Group wrap="nowrap" align="flex-start">
        <Checkbox.Indicator />
        <div>
          <Text className={classes.label}>{item.name}</Text>
          <Text className={classes.description}>{item.description}</Text>
        </div>
      </Group>
    </Checkbox.Card>
  ));

  return (
    <>
      <Checkbox.Group
        value={value}
        onChange={setValue}
        label="Pick packages to install"
        description="Choose all packages that you will need in your application"
      >
        <Stack pt="md" gap="xs">
          {cards}
        </Stack>
      </Checkbox.Group>

      <Text fz="xs" mt="md">
        CurrentValue: {value.join(', ') || '–'}
      </Text>
    </>
  );
}
```

```

import { Checkbox } from '@mantine/core';

function Demo() {
  return (
    <Checkbox
      label="Checkbox"
      description="Checkbox description"
      error="Checkbox error"
      defaultChecked
     {{props}}
    />
  );
}
```

## Example: Table with row selection

```

import { useState } from 'react';
import { Table, Checkbox } from '@mantine/core';

const elements = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

function Demo() {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const rows = elements.map((element) => (
    <Table.Tr
      key={element.name}
      bg={selectedRows.includes(element.position) ? 'var(--mantine-color-blue-light)' : undefined}
    >
      <Table.Td>
        <Checkbox
          aria-label="Select row"
          checked={selectedRows.includes(element.position)}
          onChange={(event) =>
            setSelectedRows(
              event.currentTarget.checked
                ? [...selectedRows, element.position]
                : selectedRows.filter((position) => position !== element.position)
            )
          }
        />
      </Table.Td>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th />
          <Table.Th>Element position</Table.Th>
          <Table.Th>Element name</Table.Th>
          <Table.Th>Symbol</Table.Th>
          <Table.Th>Atomic mass</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
```

## Example: Customize with Styles API

```

import { useState } from 'react';
import { Checkbox } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      classNames={classes}
      label="Checkbox button"
      checked={checked}
      onChange={(event) => setChecked(event.currentTarget.checked)}
      wrapperProps={{
        onClick: () => setChecked((c) => !c),
      }}
    />
  );
}
```

## Accessibility

Set `aria-label` or `label` prop to make the checkbox accessible:

```tsx
import { Checkbox } from '@mantine/core';

// Not ok, input is not labeled
function Bad() {
  return <Checkbox />;
}

// Ok, input is labelled by aria-label
function GoodAriaLabel() {
  return <Checkbox aria-label="My checkbox" />;
}

// Ok, input is labelled by label element
function GoodLabel() {
  return <Checkbox label="My checkbox" />;
}
```## Usage

```

import { Chip } from '@mantine/core';

function Demo() {
  return <Chip defaultChecked{{props}}>Awesome chip</Chip>
}
```

## Controlled

```tsx
import { useState } from 'react';
import { Chip } from '@mantine/core';

function Demo() {
  const [checked, setChecked] = useState(false);

  return (
    <Chip checked={checked} onChange={() => setChecked((v) => !v)}>
      My chip
    </Chip>
  );
}
```

## Change checked icon

```

import { Chip, rem } from '@mantine/core';
import { IconX } from '@tabler/icons-react';

function Demo() {
  return (
    <Chip
      icon={<IconX style={{ width: rem(16), height: rem(16) }} />}
      color="red"
      variant="filled"
      defaultChecked
    >
      Forbidden
    </Chip>
  );
}
```

## States

## Chip with tooltip

To use `Chip` with Tooltip and other similar components, set `refProp="rootRef"` on the Tooltip component:

```

import { Tooltip, Chip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Chip tooltip" refProp="rootRef">
      <Chip defaultChecked>Chip with tooltip</Chip>
    </Tooltip>
  );
}
```

## Chip.Group

`Chip.Group` component manages state of child Chip components, set `multiple` prop to allow multiple chips to be selected at a time:

```

import { Chip, Group } from '@mantine/core';

function Demo() {
  return (
    <>
      <Chip.Group>
        <Group justify="center">
          <Chip value="1">Single chip</Chip>
          <Chip value="2">Can be selected</Chip>
          <Chip value="3">At a time</Chip>
        </Group>
      </Chip.Group>

      <Chip.Group multiple>
        <Group justify="center" mt="md">
          <Chip value="1">Multiple chips</Chip>
          <Chip value="2">Can be selected</Chip>
          <Chip value="3">At a time</Chip>
        </Group>
      </Chip.Group>
    </>
  );
}
```

## Controlled Chip.Group

```tsx
import { useState } from 'react';
import { Chip } from '@mantine/core';

function Single() {
  // string value when multiple is false (default)
  const [value, setValue] = useState('react');

  return (
    <Chip.Group multiple={false} value={value} onChange={setValue}>
      <Chip value="react">React</Chip>
      <Chip value="ng">Angular</Chip>
      <Chip value="svelte">Svelte</Chip>
      <Chip value="vue">Vue</Chip>
    </Chip.Group>
  );
}

function Multiple() {
  // array of strings value when multiple is true
  const [value, setValue] = useState(['react']);

  return (
    <Chip.Group multiple value={value} onChange={setValue}>
      <Chip value="react">React</Chip>
      <Chip value="ng">Angular</Chip>
      <Chip value="svelte">Svelte</Chip>
      <Chip value="vue">Vue</Chip>
    </Chip.Group>
  );
}
```

## Accessibility

`Chip` and `Chip.Group` components are accessible by default – they are built with native radio/checkbox inputs, all keyboard events work the same as with native controls.## Usage

`CloseButton` renders a button with `X` icon inside. It is used in other Mantine components like Drawer or Modal.

```

import { CloseButton } from '@mantine/core';

function Demo() {
  return <CloseButton{{props}} />;
}
```

## Change icon

You can change icon by passing any react node to the `icon` prop. It is useful when `CloseButton` is used as a part of other components, for example, in Drawer or Modal. Note that if you use `icon` prop, `iconSize` prop is ignored – you will have to set icon size manually.

```

import { IconXboxX } from '@tabler/icons-react';
import { CloseButton } from '@mantine/core';

function Demo() {
  return <CloseButton icon={<IconXboxX size={18} stroke={1.5} />} />;
}
```

## Accessibility

To make `CloseButton` accessible for screen readers, you need to either set `aria-label` or use VisuallyHidden component:

```tsx
import { CloseButton, VisuallyHidden } from '@mantine/core';

function Demo() {
  return (
    <>
      <CloseButton aria-label="Close modal" />

      <CloseButton>
        <VisuallyHidden>Close modal</VisuallyHidden>
      </CloseButton>
    </>
  );
}
```## Usage

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
```## Usage

```

import { Button, Group, Text, Collapse, Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Box maw={400} mx="auto">
      <Group justify="center" mb={5}>
        <Button onClick={toggle}>Toggle content</Button>
      </Group>

      <Collapse in={opened}>
        <Text>{/* ... content */}</Text>
      </Collapse>
    </Box>
  );
}
```

## Change transition

Set following props to control transition:

-   `transitionDuration` – duration in ms
-   `transitionTimingFunction` – timing function (ease, linear, etc.), defaults to `ease`
-   `onTransitionEnd` – called when transition ends (both open and close)

```

import { useDisclosure } from '@mantine/hooks';
import { Button, Group, Text, Collapse, Box } from '@mantine/core';

function Demo() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Box maw={400} mx="auto">
      <Group justify="center" mb={5}>
        <Button onClick={toggle}>Toggle with linear transition</Button>
      </Group>

      <Collapse in={opened} transitionDuration={1000} transitionTimingFunction="linear">
        <Text>{/* ...content */}</Text>
      </Collapse>
    </Box>
  );
}
```

## Nested Collapse components## Usage

```

import { ColorInput } from '@mantine/core';


function Demo() {
  return (
    <ColorInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
```

## Controlled

```tsx
import { useState } from 'react';
import { ColorInput } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('');
  return <ColorInput value={value} onChange={setValue} />;
}
```

## Formats

Component supports hex, hexa, rgb, rgba, hsl and hsla color formats. Slider to change opacity is displayed only for hexa, rgba and hsla formats:

```

import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput defaultValue="#C5D899"{{props}} />;
}
```

## Preserve invalid input

By default, `ColorInput` will revert the value on blur to the last known valid value. To change this behavior and keep invalid value, set `fixOnBlur={false}`:

```

import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput fixOnBlur={false} label="Value is not fixed on blur" placeholder="May contain invalid value" />;
}
```

## onChangeEnd

`onChangeEnd` is called when user stops dragging slider or changes input value. It is useful when you need to update color only when user finished interaction with the component:

```

import { useState } from 'react';
import { ColorInput, Text } from '@mantine/core';

function Demo() {
  const [changeEndValue, setChangeEndValue] = useState('#FFFFFF');

  return (
    <>
      <Text mb="md">
        Change end value: <b>{changeEndValue}</b>
      </Text>

      <ColorInput
        label="Pick color"
        placeholder="Pick color"
        defaultValue="#FFFFFF"
        onChangeEnd={setChangeEndValue}
      />
    </>
  );
}
```

## Disable free input

To disable free input set `disallowInput` prop:

```

import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput disallowInput />;
}
```

## With swatches

You can add any amount of predefined color swatches:

```

import { ColorInput } from '@mantine/core';

function Demo() {
  return (
    <ColorInput
      format="hex"
      swatches={['#2e2e2e', '#868e96', '#fa5252', '#e64980', '#be4bdb', '#7950f2', '#4c6ef5', '#228be6', '#15aabf', '#12b886', '#40c057', '#82c91e', '#fab005', '#fd7e14']}
    />
  );
}
```

By default, there will be 7 swatches per row, you can change this with `swatchesPerRow` prop, like in ColorPicker component:

```

import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker{{props}} format="hex" swatches={['#2e2e2e', '#868e96', '#fa5252', '#e64980', '#be4bdb', '#7950f2', '#4c6ef5', '#228be6', '#15aabf', '#12b886', '#40c057', '#82c91e', '#fab005', '#fd7e14']} />
  );
}
```

If you need to restrict color picking to certain colors – disable color picker and disallow free input:

```

import { ColorInput, DEFAULT_THEME } from '@mantine/core';

function Demo() {
  return (
    <ColorInput
      placeholder="Pick color"
      label="Your favorite color"
      disallowInput
      withPicker={false}
      swatches={[
        ...DEFAULT_THEME.colors.red,
        ...DEFAULT_THEME.colors.green,
        ...DEFAULT_THEME.colors.blue,
      ]}
    />
  );
}
```

## Close dropdown on color swatch click

To close the dropdown when one of the color swatches is clicked, set `closeOnColorSwatchClick` prop:

```

import { ColorInput, DEFAULT_THEME } from '@mantine/core';

function Demo() {
  return (
    <ColorInput
      closeOnColorSwatchClick
      label="Dropdown is closed when color swatch is clicked"
      placeholder="Click color swatch"
      swatches={[
        ...DEFAULT_THEME.colors.red,
        ...DEFAULT_THEME.colors.green,
        ...DEFAULT_THEME.colors.blue,
      ]}
    />
  );
}
```

## Hide dropdown

To hide dropdown, set `withPicker={false}`:

```

import { ColorInput } from '@mantine/core';

function Demo() {
  return (
    <ColorInput withPicker={false} pointer label="Without dropdown" placeholder="Enter value" />
  );
}
```

## Eye dropper

By default, if EyeDropper API is available, eye dropper icon will be displayed at the right section of the input. To disable it, set `withEyeDropper={false}`:

```

import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput withEyeDropper={false} label="Without eye dropper" placeholder="Not fun" />;
}
```

## Change eye dropper icon

You can replace eye dropper icon with any React node using `eyeDropperIcon` prop:

```

import { ColorInput, rem } from '@mantine/core';
import { IconFocus2 } from '@tabler/icons-react';

function Demo() {
  return (
    <ColorInput
      eyeDropperIcon={<IconFocus2 style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
      label="With custom eye dropper icon"
      placeholder="Pick color"
    />
  );
}
```

Note that by default, `ColorPicker` has color preview in the left section and eye dropper button in the right section. You can replace these elements with any React node using `leftSection` and `rightSection` props:

```

import { ColorInput, rem } from '@mantine/core';
import { IconColorPicker } from '@tabler/icons-react';

function Demo() {
  const icon = <IconColorPicker style={{ width: rem(18), height: rem(18) }} stroke={1.5} />;

  return (
    <>
      <ColorInput
        label="With custom left section"
        placeholder="Replaces color swatch"
        leftSection={icon}
        withEyeDropper={false}
      />
      <ColorInput
        label="With custom right section"
        placeholder="Replaces eye dropper"
        rightSection={icon}
        mt="md"
      />
    </>
  );
}

```

## Error state

```

import { ColorInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <ColorInput label="Boolean error" placeholder="Boolean error" error />
      <ColorInput
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
      />
    </>
  );
}
```

## Disabled state

```

import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput disabled label="Disabled input" placeholder="Disabled input" />;
}
```

## Read only

```

import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput readOnly label="Cannot modify value" defaultValue="#F0FCFE" />;
}
```

```

import { ColorInput, rem } from '@mantine/core';

function Demo() {
  return (
    <ColorInput
      label="Label"
      placeholder="ColorInput"
      description="Description"
      error="Error"
      withAsterisk
      swatches={['#000', '#fff', '#f00', '#0f0', '#00f']}
      format="rgba"
      {{props}}
    />
  );
}
```## Usage

```

import { useState } from 'react';
import { ColorPicker, Text } from '@mantine/core';

function Demo() {
  const [value, onChange] = useState('rgba(47, 119, 150, 0.7)');

  return (
    <>
      <ColorPicker format="rgba" value={value} onChange={onChange} />
      <Text>{value}</Text>
    </>
  );
}
```

## Color format

`ColorPicker` supports hex, hexa, rgb, rgba, hsl and hsla color formats. Slider to change opacity and color preview are displayed only for hexa, rgba and hsla formats:

```

import { ColorPicker } from '@mantine/core';

function Demo() {
  return <ColorPicker{{props}} />;
}
```

## With swatches

You can add predefined color swatches with `swatches` prop:

```

import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker
      format="hex"
      swatches={['#2e2e2e', '#868e96', '#fa5252', '#e64980', '#be4bdb', '#7950f2', '#4c6ef5', '#228be6', '#15aabf', '#12b886', '#40c057', '#82c91e', '#fab005', '#fd7e14']}
    />
  );
}
```

By default, `ColorPicker` will display 7 swatches per row, you can configure it with `swatchesPerRow` prop:

```

import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker{{props}} format="hex" swatches={['#2e2e2e', '#868e96', '#fa5252', '#e64980', '#be4bdb', '#7950f2', '#4c6ef5', '#228be6', '#15aabf', '#12b886', '#40c057', '#82c91e', '#fab005', '#fd7e14']} />
  );
}
```

To display swatches without picker set `withPicker={false}` and `fullWidth` props:

```

import { useState } from 'react';
import { DEFAULT_THEME, ColorPicker, Text } from '@mantine/core';

function Demo() {
  const [value, onChange] = useState('#fff');

  return (
    <>
      <ColorPicker
        format="hex"
        value={value}
        onChange={onChange}
        withPicker={false}
        fullWidth
        swatches={[
          ...DEFAULT_THEME.colors.red.slice(0, 7),
          ...DEFAULT_THEME.colors.green.slice(0, 7),
          ...DEFAULT_THEME.colors.blue.slice(0, 7),
        ]}
      />

      <Text>{value}</Text>
    </>
  );
}
```

## Size

`ColorPicker` has 5 predefined sizes: `xs`, `sm`, `md`, `lg` and `xl`:

```

import { ColorPicker } from '@mantine/core';

function Demo() {
  return <ColorPicker{{props}} />;
}
```

## fullWidth

Set `fullWidth` prop to stretch component to 100% of parent width. In this case the picker will not have fixed width, but you can still use `size` prop to control sizes of sliders.

```

import { ColorPicker } from '@mantine/core';

function Demo() {
  return <ColorPicker fullWidth size="lg" format="rgba" />;
}
```

```

import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker format="rgba" size="lg"{{props}} swatches={['#25262b', '#868e96', '#fa5252', '#e64980', '#be4bdb', '#7950f2', '#4c6ef5']} />
  );
}
```

## HueSlider component

```

import { useState } from 'react';
import { HueSlider, Text } from '@mantine/core';

function Demo() {
  const [value, onChange] = useState(250);

  return (
    <>
      <Text>Hue value: {value}</Text>
      <HueSlider value={value} onChange={onChange} />
    </>
  );
}
```

## AlphaSlider component

```

import { useState } from 'react';
import { AlphaSlider, Text } from '@mantine/core';

function Demo() {
  const [value, onChange] = useState(0.55);

  return (
    <>
      <Text>Alpha value: {value}</Text>
      <AlphaSlider color="#1c7ed6" value={value} onChange={onChange} />
    </>
  );
}
```

## Accessibility

ColorPicker component is accessible by default:

-   Saturation, hue and alpha sliders are focusable
-   When moused is used to interact with the slider, focus is moved to the slider
-   All values can be changed with arrows

To make component accessible for screen readers, set `saturationLabel`, `hueLabel` and `alphaLabel`:

```tsx
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker
      saturationLabel="Saturation"
      hueLabel="Hue"
      alphaLabel="Alpha"
    />
  );
}
```## Usage

```

import { ColorSwatch, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <ColorSwatch color="#009790" />
      <ColorSwatch color="rgba(234, 22, 174, 0.5)" />
      <ColorSwatch color="var(--mantine-color-orange-5)" />
    </Group>
  );
}
```

## withShadow

By default, `ColorSwatch` has an inner box-shadow to make it more visible on light backgrounds, you can disable it by setting `withShadow={false}` prop:

```

import { ColorSwatch } from '@mantine/core';

function Demo() {
  return <ColorSwatch color="rgba(255, 255, 255, 0.7)"{{props}} />;
}
```

```

import { useState } from 'react';
import { ColorSwatch, CheckIcon, rem } from '@mantine/core';

function Demo() {
  const [checked, setChecked] = useState(true);

  return (
    <ColorSwatch
      component="button"
      color="var(--mantine-color-grape-6)"
      onClick={() => setChecked((c) => !c)}
      style={{ color: '#fff', cursor: 'pointer' }}
    >
      {checked && <CheckIcon style={{ width: rem(12), height: rem(12) }} />}
    </ColorSwatch>
  );
}
```## Examples

This page contains only a small set of examples, as the full code of the demos is long. You can find all 50+ examples on a separate page.

## Usage

`Combobox` provides a set of components and hooks to custom select, multiselect or autocomplete components. The component is very flexible – you have full control of the rendering and logic.

```

import { useState } from 'react';
import { Input, InputBase, Combobox, useCombobox } from '@mantine/core';

const groceries = ['🍎 Apples', '🍌 Bananas', '🥦 Broccoli', '🥕 Carrots', '🍫 Chocolate'];

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(val) => {
        setValue(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          component="button"
          type="button"
          pointer
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          onClick={() => combobox.toggleDropdown()}
        >
          {value || <Input.Placeholder>Pick value</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
```

## useCombobox hook

`useCombobox` hook provides combobox store. The store contains the current state of the component and handlers to update it. Created store must be passed to the `store` prop of `Combobox`:

```tsx
import { Combobox, useCombobox } from '@mantine/core';

function Demo() {
  const combobox = useCombobox();
  return (
    <Combobox store={combobox}>{/* Your implementation */}</Combobox>
  );
}
```

## useCombobox options

`useCombobox` hooks accepts an options object with the following properties:

```tsx
interface UseComboboxOptions {
  /** Default value for `dropdownOpened`, `false` by default */
  defaultOpened?: boolean;

  /** Controlled `dropdownOpened` state */
  opened?: boolean;

  /** Called when `dropdownOpened` state changes */
  onOpenedChange?(opened: boolean): void;

  /** Called when dropdown closes with event source: keyboard, mouse or unknown */
  onDropdownClose?(eventSource: ComboboxDropdownEventSource): void;

  /** Called when dropdown opens with event source: keyboard, mouse or unknown */
  onDropdownOpen?(eventSource: ComboboxDropdownEventSource): void;

  /** Determines whether arrow key presses should loop though items (first to last and last to first), `true` by default */
  loop?: boolean;

  /** `behavior` passed down to `element.scrollIntoView`, `'instant'` by default */
  scrollBehavior?: ScrollBehavior;
}
```

You can import `UseComboboxOptions` type from `@mantine/core` package:

```tsx
import type { UseComboboxOptions } from '@mantine/core';
```

## Combobox store

Combobox store is an object with the following properties:

```tsx
interface ComboboxStore {
  /** Current dropdown opened state */
  dropdownOpened: boolean;

  /** Opens dropdown */
  openDropdown(eventSource?: 'keyboard' | 'mouse' | 'unknown'): void;

  /** Closes dropdown */
  closeDropdown(eventSource?: 'keyboard' | 'mouse' | 'unknown'): void;

  /** Toggles dropdown opened state */
  toggleDropdown(
    eventSource?: 'keyboard' | 'mouse' | 'unknown'
  ): void;

  /** Selected option index */
  selectedOptionIndex: number;

  /** Selects `Combobox.Option` by index */
  selectOption(index: number): void;

  /** Selects first `Combobox.Option` with `active` prop.
   *  If there are no such options, the function does nothing.
   */
  selectActiveOption(): string | null;

  /** Selects first `Combobox.Option` that is not disabled.
   *  If there are no such options, the function does nothing.
   * */
  selectFirstOption(): string | null;

  /** Selects next `Combobox.Option` that is not disabled.
   *  If the current option is the last one, the function selects first option, if `loop` is true.
   */
  selectNextOption(): string | null;

  /** Selects previous `Combobox.Option` that is not disabled.
   *  If the current option is the first one, the function selects last option, if `loop` is true.
   * */
  selectPreviousOption(): string | null;

  /** Resets selected option index to -1, removes `data-combobox-selected` from selected option */
  resetSelectedOption(): void;

  /** Triggers `onClick` event of selected option.
   *  If there is no selected option, the function does nothing.
   */
  clickSelectedOption(): void;

  /** Updates selected option index to currently selected or active option.
   *  The function is required to be used with searchable components to update selected option index
   *  when options list changes based on search query.
   */
  updateSelectedOptionIndex(target?: 'active' | 'selected'): void;

  /** List id, used for `aria-*` attributes */
  listId: string | null;

  /** Sets list id */
  setListId(id: string): void;

  /** Ref of `Combobox.Search` input */
  searchRef: React.MutableRefObject<HTMLInputElement | null>;

  /** Moves focus to `Combobox.Search` input */
  focusSearchInput(): void;

  /** Ref of the target element */
  targetRef: React.MutableRefObject<HTMLElement | null>;

  /** Moves focus to the target element */
  focusTarget(): void;
}
```

You can import `ComboboxStore` type from `@mantine/core` package:

```tsx
import type { ComboboxStore } from '@mantine/core';
```

## useCombobox handlers

Combobox store handlers can be used to control `Combobox` state. For example, to open the dropdown, call `openDropdown` handler:

```tsx
import { Button, Combobox, useCombobox } from '@mantine/core';

function Demo() {
  const combobox = useCombobox();

  return (
    <Combobox>
      <Combobox.Target>
        <Button onClick={() => combobox.openDropdown()}>
          Open dropdown
        </Button>
      </Combobox.Target>

      {/* Your implementation */}
    </Combobox>
  );
}
```

You can use store handlers in `useCombobox` options. For example, you can call `selectFirstOption` when the dropdown is opened and `resetSelectedOption` when it is closed:

```tsx
import { Combobox, useCombobox } from '@mantine/core';

function Demo() {
  const combobox = useCombobox({
    onDropdownOpen: () => combobox.selectFirstOption(),
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  return (
    <Combobox store={combobox}>{/* Your implementation */}</Combobox>
  );
}
```

## Combobox.Target

`Combobox.Target` should be used as a wrapper for the target element or component. `Combobox.Target` marks its child as a target for dropdown and sets `aria-*` attributes and adds keyboard event listeners to it.

`Combobox.Target` requires a single child element or component. The child component must accept `ref` and `...others` props. You can use any Mantine component as a target without any additional configuration, for example, Button, TextInput or InputBase.

Example of using `Combobox.Target` with TextInput component:

```

import { useState } from 'react';
import { Combobox, TextInput, useCombobox } from '@mantine/core';

const groceries = ['🍎 Apples', '🍌 Bananas', '🥦 Broccoli', '🥕 Carrots', '🍫 Chocolate'];

function Demo() {
  const combobox = useCombobox();
  const [value, setValue] = useState('');
  const shouldFilterOptions = !groceries.some((item) => item === value);
  const filteredOptions = shouldFilterOptions
    ? groceries.filter((item) => item.toLowerCase().includes(value.toLowerCase().trim()))
    : groceries;

  const options = filteredOptions.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      onOptionSubmit={(optionValue) => {
        setValue(optionValue);
        combobox.closeDropdown();
      }}
      store={combobox}
    >
      <Combobox.Target>
        <TextInput
          label="Pick value or type anything"
          placeholder="Pick value or type anything"
          value={value}
          onChange={(event) => {
            setValue(event.currentTarget.value);
            combobox.openDropdown();
            combobox.updateSelectedOptionIndex();
          }}
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => combobox.closeDropdown()}
        />
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          {options.length === 0 ? <Combobox.Empty>Nothing found</Combobox.Empty> : options}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
```

Example of using `Combobox.Target` with Button component:

```

import { useState } from 'react';
import { Button, Combobox, useCombobox, Text, Box } from '@mantine/core';

const groceries = ['🍎 Apples', '🍌 Bananas', '🥦 Broccoli', '🥕 Carrots', '🍫 Chocolate'];

function Demo() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <>
      <Box mb="xs">
        <Text span size="sm" c="dimmed">
          Selected item:{' '}
        </Text>

        <Text span size="sm">
          {selectedItem || 'Nothing selected'}
        </Text>
      </Box>

      <Combobox
        store={combobox}
        width={250}
        position="bottom-start"
        withArrow
        onOptionSubmit={(val) => {
          setSelectedItem(val);
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target>
          <Button onClick={() => combobox.toggleDropdown()}>Pick item</Button>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </>
  );
}
```

## Split events and dropdown targets

In some cases, you might need to use different elements as an events target and as a dropdown. Use `Combobox.EventsTarget` to add `aria-*` attributes and keyboard event handlers, and `Combobox.DropdownTarget` to position the dropdown relative to the target.

You can have as many `Combobox.EventsTarget` as you need, but only one `Combobox.DropdownTarget` per `Combobox`.

Example of using `Combobox.EventsTarget` and `Combobox.DropdownTarget` with PillsInput component to create a searchable multiselect component:

```

import { useState } from 'react';
import { PillsInput, Pill, Combobox, CheckIcon, Group, useCombobox } from '@mantine/core';

const groceries = ['🍎 Apples', '🍌 Bananas', '🥦 Broccoli', '🥕 Carrots', '🍫 Chocolate'];

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
  });

  const [search, setSearch] = useState('');
  const [value, setValue] = useState<string[]>([]);

  const handleValueSelect = (val: string) =>
    setValue((current) =>
      current.includes(val) ? current.filter((v) => v !== val) : [...current, val]
    );

  const handleValueRemove = (val: string) =>
    setValue((current) => current.filter((v) => v !== val));

  const values = value.map((item) => (
    <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
      {item}
    </Pill>
  ));

  const options = groceries
    .filter((item) => item.toLowerCase().includes(search.trim().toLowerCase()))
    .map((item) => (
      <Combobox.Option value={item} key={item} active={value.includes(item)}>
        <Group gap="sm">
          {value.includes(item) ? <CheckIcon size={12} /> : null}
          <span>{item}</span>
        </Group>
      </Combobox.Option>
    ));

  return (
    <Combobox store={combobox} onOptionSubmit={handleValueSelect}>
      <Combobox.DropdownTarget>
        <PillsInput onClick={() => combobox.openDropdown()}>
          <Pill.Group>
            {values}

            <Combobox.EventsTarget>
              <PillsInput.Field
                onFocus={() => combobox.openDropdown()}
                onBlur={() => combobox.closeDropdown()}
                value={search}
                placeholder="Search values"
                onChange={(event) => {
                  combobox.updateSelectedOptionIndex();
                  setSearch(event.currentTarget.value);
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Backspace' && search.length === 0) {
                    event.preventDefault();
                    handleValueRemove(value[value.length - 1]);
                  }
                }}
              />
            </Combobox.EventsTarget>
          </Pill.Group>
        </PillsInput>
      </Combobox.DropdownTarget>

      <Combobox.Dropdown>
        <Combobox.Options>
          {options.length > 0 ? options : <Combobox.Empty>Nothing found...</Combobox.Empty>}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
```

## Update selected option index

`updateSelectedOptionIndex` handler is required to be called when options list changes. Usually, the options list changes when options are filtered based on the search query. In this case, you need to call `updateSelectedOptionIndex` in `onChange` handler of the search input.

Example of using `updateSelectedOptionIndex` handler in searchable select component:

```

import { useState } from 'react';
import { InputBase, Combobox, useCombobox } from '@mantine/core';

const groceries = ['🍎 Apples', '🍌 Bananas', '🥦 Broccoli', '🥕 Carrots', '🍫 Chocolate'];

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  const shouldFilterOptions = groceries.every((item) => item !== search);
  const filteredOptions = shouldFilterOptions
    ? groceries.filter((item) => item.toLowerCase().includes(search.toLowerCase().trim()))
    : groceries;

  const options = filteredOptions.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(val) => {
        setValue(val);
        setSearch(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => {
            combobox.closeDropdown();
            setSearch(value || '');
          }}
          placeholder="Search value"
          value={search}
          onChange={(event) => {
            combobox.updateSelectedOptionIndex();
            setSearch(event.currentTarget.value);
          }}
        />
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          {options.length > 0 ? options : <Combobox.Empty>Nothing found</Combobox.Empty>}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
```

## Search input

If you prefer search input inside the dropdown, use `Combobox.Search` component. To focus the search input, call `combobox.focusSearchInput`, usually it is done when the dropdown is opened. To prevent focus loss after the dropdown is closed, call `combobox.focusTarget`:

```

import { useState } from 'react';
import { Button, Combobox, useCombobox, Text, Box } from '@mantine/core';

const groceries = ['🍎 Apples', '🍌 Bananas', '🥦 Broccoli', '🥕 Carrots', '🍫 Chocolate'];

function Demo() {
  const [search, setSearch] = useState('');
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const combobox = useCombobox({
    onDropdownClose: () => {
      combobox.resetSelectedOption();
      combobox.focusTarget();
      setSearch('');
    },

    onDropdownOpen: () => {
      combobox.focusSearchInput();
    },
  });

  const options = groceries
    .filter((item) => item.toLowerCase().includes(search.toLowerCase().trim()))
    .map((item) => (
      <Combobox.Option value={item} key={item}>
        {item}
      </Combobox.Option>
    ));

  return (
    <>
      <Box mb="xs">
        <Text span size="sm" c="dimmed">
          Selected item:{' '}
        </Text>

        <Text span size="sm">
          {selectedItem || 'Nothing selected'}
        </Text>
      </Box>

      <Combobox
        store={combobox}
        width={250}
        position="bottom-start"
        withArrow
        onOptionSubmit={(val) => {
          setSelectedItem(val);
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target withAriaAttributes={false}>
          <Button onClick={() => combobox.toggleDropdown()}>Pick item</Button>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Search
            value={search}
            onChange={(event) => setSearch(event.currentTarget.value)}
            placeholder="Search groceries"
          />
          <Combobox.Options>
            {options.length > 0 ? options : <Combobox.Empty>Nothing found</Combobox.Empty>}
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </>
  );
}
```

## Select first option

Use `combobox.selectFirstOption` function to select the first option. It is useful if you want to select the first option when user searching for options in the list. If there are no options available, it will do nothing.

```

import { useState, useEffect } from 'react';
import { Combobox, TextInput, useCombobox } from '@mantine/core';

const groceries = ['🍎 Apples', '🍌 Bananas', '🥦 Broccoli', '🥕 Carrots', '🍫 Chocolate'];

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState('');
  const shouldFilterOptions = !groceries.some((item) => item === value);
  const filteredOptions = shouldFilterOptions
    ? groceries.filter((item) => item.toLowerCase().includes(value.toLowerCase().trim()))
    : groceries;

  const options = filteredOptions.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  useEffect(() => {
    // we need to wait for options to render before we can select first one
    combobox.selectFirstOption();
  }, [value]);

  return (
    <Combobox
      onOptionSubmit={(optionValue) => {
        setValue(optionValue);
        combobox.closeDropdown();
      }}
      store={combobox}
    >
      <Combobox.Target>
        <TextInput
          label="Pick value or type anything"
          placeholder="Pick value or type anything"
          value={value}
          onChange={(event) => {
            setValue(event.currentTarget.value);
            combobox.openDropdown();
          }}
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => combobox.closeDropdown()}
        />
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          {options.length === 0 ? <Combobox.Empty>Nothing found</Combobox.Empty> : options}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
```

## Active option

Set `active` prop on `Combobox.Option` component to mark it as active. By default, an active option does not have any styles, you can use `data-combobox-active` data attribute to style it.

`combobox.selectActiveOption` function selects active option. Usually, it is called when the dropdown is opened:

```

import { useState } from 'react';
import { Input, InputBase, Combobox, useCombobox, CheckIcon, Group } from '@mantine/core';

const groceries = ['🍎 Apples', '🍌 Bananas', '🥦 Broccoli', '🥕 Carrots', '🍫 Chocolate'];

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: (eventSource) => {
      if (eventSource === 'keyboard') {
        combobox.selectActiveOption();
      } else {
        combobox.updateSelectedOptionIndex('active');
      }
    },
  });

  const [value, setValue] = useState<string | null>('🥦 Broccoli');

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item} active={item === value}>
      <Group gap="xs">
        {item === value && <CheckIcon size={12} />}
        <span>{item}</span>
      </Group>
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      resetSelectionOnOptionHover
      onOptionSubmit={(val) => {
        setValue(val);
        combobox.updateSelectedOptionIndex('active');
      }}
    >
      <Combobox.Target targetType="button">
        <InputBase
          component="button"
          type="button"
          pointer
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          onClick={() => combobox.toggleDropdown()}
        >
          {value || <Input.Placeholder>Pick value</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
```

## Options groups

Render `Combobox.Option` components inside `Combobox.Group` to create options group. `Combobox.Group` label will be automatically hidden if the group does not have any children.

```

import { useState } from 'react';
import { Input, InputBase, Combobox, useCombobox } from '@mantine/core';

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(val) => {
        setValue(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          component="button"
          type="button"
          pointer
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          onClick={() => combobox.toggleDropdown()}
        >
          {value || <Input.Placeholder>Pick value</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          <Combobox.Group label="Fruits">
            <Combobox.Option value="🍎 Apples">🍎 Apples</Combobox.Option>
            <Combobox.Option value="🍌 Bananas">🍌 Bananas</Combobox.Option>
            <Combobox.Option value="🍇 Grape">🍇 Grape</Combobox.Option>
          </Combobox.Group>

          <Combobox.Group label="Vegetables">
            <Combobox.Option value="🥦 Broccoli">🥦 Broccoli</Combobox.Option>
            <Combobox.Option value="🥕 Carrots">🥕 Carrots</Combobox.Option>
            <Combobox.Option value="🥬 Lettuce">🥬 Lettuce</Combobox.Option>
          </Combobox.Group>
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
```

## Scrollable list

Set `max-height` style on either `Combobox.Dropdown` or `Combobox.Options` to make the options list scrollable. You can use `mah` style prop to set `max-height`.

```

import { useState } from 'react';
import { Input, InputBase, Combobox, useCombobox } from '@mantine/core';

const groceries = [
  '🍎 Apples',
  '🍌 Bananas',
  '🥦 Broccoli',
  '🥕 Carrots',
  '🍫 Chocolate',
  '🍇 Grapes',
  '🍋 Lemon',
  '🥬 Lettuce',
  '🍄 Mushrooms',
  '🍊 Oranges',
  '🥔 Potatoes',
  '🍅 Tomatoes',
  '🥚 Eggs',
  '🥛 Milk',
  '🍞 Bread',
  '🍗 Chicken',
  '🍔 Hamburger',
  '🧀 Cheese',
  '🥩 Steak',
  '🍟 French Fries',
  '🍕 Pizza',
  '🥦 Cauliflower',
  '🥜 Peanuts',
  '🍦 Ice Cream',
  '🍯 Honey',
  '🥖 Baguette',
  '🍣 Sushi',
  '🥝 Kiwi',
  '🍓 Strawberries',
];

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(val) => {
        setValue(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          component="button"
          type="button"
          pointer
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          onClick={() => combobox.toggleDropdown()}
        >
          {value || <Input.Placeholder>Pick value</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options mah={200} style={{ overflowY: 'auto' }}>
          {options}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
```

## Scrollable list with ScrollArea

You can also use ScrollArea or ScrollArea.Autosize components instead of native scrollbars:

```

import { useState } from 'react';
import { Input, InputBase, Combobox, useCombobox, ScrollArea } from '@mantine/core';

const groceries = [
  '🍎 Apples',
  '🍌 Bananas',
  '🥦 Broccoli',
  '🥕 Carrots',
  '🍫 Chocolate',
  '🍇 Grapes',
  '🍋 Lemon',
  '🥬 Lettuce',
  '🍄 Mushrooms',
  '🍊 Oranges',
  '🥔 Potatoes',
  '🍅 Tomatoes',
  '🥚 Eggs',
  '🥛 Milk',
  '🍞 Bread',
  '🍗 Chicken',
  '🍔 Hamburger',
  '🧀 Cheese',
  '🥩 Steak',
  '🍟 French Fries',
  '🍕 Pizza',
  '🥦 Cauliflower',
  '🥜 Peanuts',
  '🍦 Ice Cream',
  '🍯 Honey',
  '🥖 Baguette',
  '🍣 Sushi',
  '🥝 Kiwi',
  '🍓 Strawberries',
];

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(val) => {
        setValue(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          component="button"
          type="button"
          pointer
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          onClick={() => combobox.toggleDropdown()}
        >
          {value || <Input.Placeholder>Pick value</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          <ScrollArea.Autosize type="scroll" mah={200}>
            {options}
          </ScrollArea.Autosize>
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
```

## Hide dropdown

Set `hidden` prop on `Combobox.Dropdown` to hide the dropdown. For example, it can be useful when you want to show the dropdown only when there is at least one option available:

```

import { useState } from 'react';
import { Combobox, TextInput, useCombobox } from '@mantine/core';

const groceries = ['🍎 Apples', '🍌 Bananas', '🥦 Broccoli', '🥕 Carrots', '🍫 Chocolate'];

function Demo() {
  const combobox = useCombobox();
  const [value, setValue] = useState('');
  const shouldFilterOptions = !groceries.some((item) => item === value);
  const filteredOptions = shouldFilterOptions
    ? groceries.filter((item) => item.toLowerCase().includes(value.toLowerCase().trim()))
    : groceries;

  const options = filteredOptions.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      onOptionSubmit={(optionValue) => {
        setValue(optionValue);
        combobox.closeDropdown();
      }}
      store={combobox}
    >
      <Combobox.Target>
        <TextInput
          label="Pick value or type anything"
          placeholder="Pick value or type anything"
          value={value}
          onChange={(event) => {
            setValue(event.currentTarget.value);
            combobox.openDropdown();
          }}
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => combobox.closeDropdown()}
        />
      </Combobox.Target>

      <Combobox.Dropdown hidden={options.length === 0}>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
```

## Control dropdown opened state

To control the dropdown opened state, pass `opened` to `useCombobox` hook:

```

import { useState } from 'react';
import { TextInput, Button, Combobox, useCombobox } from '@mantine/core';

const groceries = ['🍎 Apples', '🍌 Bananas', '🥦 Broccoli', '🥕 Carrots', '🍫 Chocolate'];

function Demo() {
  const [opened, setOpened] = useState(false);
  const combobox = useCombobox({ opened });

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <>
      <Button mb="md" onClick={() => setOpened((o) => !o)}>
        Toggle dropdown
      </Button>

      <Combobox store={combobox}>
        <Combobox.Target>
          <TextInput
            label="Autocomplete"
            description="Dropdown is opened/closed when button is clicked"
            placeholder="Click button to toggle dropdown"
          />
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </>
  );
}
```

## Popover props

`Combobox` supports most of Popover props. For example, you can control dropdown position with `position` prop and disable Floating UI middlewares with `middlewares` prop:

```

import { useState } from 'react';
import { Input, InputBase, Combobox, useCombobox } from '@mantine/core';

const groceries = ['🍎 Apples', '🍌 Bananas', '🥦 Broccoli', '🥕 Carrots', '🍫 Chocolate'];

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      position="bottom"
      middlewares={{ flip: false, shift: false }}
      onOptionSubmit={(val) => {
        setValue(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          component="button"
          type="button"
          pointer
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          onClick={() => combobox.toggleDropdown()}
        >
          {value || <Input.Placeholder>Pick value</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
```

## Without dropdown

You can use `Combobox` without dropdown. To do so, use `Combobox.EventsTarget` instead of `Combobox.Target`:

```

import { useState } from 'react';
import { Combobox, TextInput } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('');

  return (
    <Combobox onOptionSubmit={setValue}>
      <Combobox.EventsTarget>
        <TextInput
          placeholder="Pick value"
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
        />
      </Combobox.EventsTarget>

      <Combobox.Options mt="sm">
        <Combobox.Option value="First">First</Combobox.Option>
        <Combobox.Option value="Second">Second</Combobox.Option>
        <Combobox.Option value="Third">Third</Combobox.Option>
      </Combobox.Options>
    </Combobox>
  );
}
```

```

import { Combobox, TextInput, useCombobox } from '@mantine/core';

function Demo() {
  const combobox = useCombobox({ opened: true });

  return (
    <Combobox store={combobox}{{props}}>
      <Combobox.Target>
        <TextInput placeholder="Pick value" />
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Header>Combobox header</Combobox.Header>
        <Combobox.Search placeholder="Search input" />

        <Combobox.Options>
          <Combobox.Group label="First group">
            <Combobox.Option value="1">First</Combobox.Option>
            <Combobox.Option value="2">Second</Combobox.Option>
          </Combobox.Group>

          <Combobox.Group label="Second group">
            <Combobox.Option value="3">Third</Combobox.Option>
            <Combobox.Option value="4">Fourth</Combobox.Option>
          </Combobox.Group>

          <Combobox.Group label="Third group">
            <Combobox.Empty>Nothing found in this group...</Combobox.Empty>
          </Combobox.Group>
        </Combobox.Options>

        <Combobox.Footer>Combobox footer</Combobox.Footer>
      </Combobox.Dropdown>
    </Combobox>
  );
}
```## Usage

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
```## Usage

`CopyButton` is based on use-clipboard hook. Its children is a function that receives an object with the following properties:

-   `copied` – boolean value that indicates that a given value was recently copied to the clipboard, it resets after a given timeout (defaults to 500ms)
-   `copy` – function that should be called to copy given value to clipboard

```

import { CopyButton, Button } from '@mantine/core';

function Demo() {
  return (
    <CopyButton value="https://mantine.dev">
      {({ copied, copy }) => (
        <Button color={copied ? 'teal' : 'blue'} onClick={copy}>
          {copied ? 'Copied url' : 'Copy url'}
        </Button>
      )}
    </CopyButton>
  );
}
```

## Security

Due to security reasons `CopyButton` component will not work in iframes and may not work with local files opened with `file://` protocol (component will work fine with local websites that are using `http://` protocol). You can learn more about `navigator.clipboard` here.

## Timeout

You can provide a custom `copied` reset `timeout`:

```

import { CopyButton, ActionIcon, Tooltip, rem } from '@mantine/core';
import { IconCopy, IconCheck } from '@tabler/icons-react';

function Demo() {
  return (
    <CopyButton value="https://mantine.dev" timeout={2000}>
      {({ copied, copy }) => (
        <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
          <ActionIcon color={copied ? 'teal' : 'gray'} variant="subtle" onClick={copy}>
            {copied ? (
              <IconCheck style={{ width: rem(16) }} />
            ) : (
              <IconCopy style={{ width: rem(16) }} />
            )}
          </ActionIcon>
        </Tooltip>
      )}
    </CopyButton>
  );
}

```## Usage

`Dialog` is a simplified version of Modal component. It does not include most of accessibility and usability Modal features:

-   Focus trap is not available
-   Does not close on click outside
-   Does not have overlay

Use `Dialog` to attract attention with not important information or action, for example, you can create an email subscription form:

```

import { useDisclosure } from '@mantine/hooks';
import { Dialog, Group, Button, TextInput, Text } from '@mantine/core';

function Demo() {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <>
      <Group justify="center">
        <Button onClick={toggle}>Toggle dialog</Button>
      </Group>

      <Dialog opened={opened} withCloseButton onClose={close} size="lg" radius="md">
        <Text size="sm" mb="xs" fw={500}>
          Subscribe to email newsletter
        </Text>

        <Group align="flex-end">
          <TextInput placeholder="hello@gluesticker.com" style={{ flex: 1 }} />
          <Button onClick={close}>Subscribe</Button>
        </Group>
      </Dialog>
    </>
  );
}
```

## Change position

`Dialog` is rendered in Portal and has fixed position, set `position` prop to control dialog’s position:

```tsx
import { Dialog } from '@mantine/core';

function Demo() {
  return (
    <>
      <Dialog position={{ top: 20, left: 20 }} opened>
        Dialog in top left corner
      </Dialog>
      <Dialog position={{ bottom: 20, left: 20 }} opened>
        Dialog in bottom left corner
      </Dialog>
    </>
  );
}
```

## Accessibility

`Dialog` is not accessible and most likely will not be announced by screen reader, make sure you do not put any important information. In most cases it would be better to select Modal, Drawer or Notifications.## Usage

```

import { Text, Divider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis! Fugit minus ea,
        perferendis eum consectetur quae vitae. Aliquid, quam reprehenderit? Maiores sed pariatur
        aliquid commodi atque sunt officiis natus?
      </Text>

      <Divider my="md" />

      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis! Fugit minus ea,
        perferendis eum consectetur quae vitae. Aliquid, quam reprehenderit? Maiores sed pariatur
        aliquid commodi atque sunt officiis natus?
      </Text>

      <Divider my="md" />

      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis! Fugit minus ea,
        perferendis eum consectetur quae vitae. Aliquid, quam reprehenderit? Maiores sed pariatur
        aliquid commodi atque sunt officiis natus?
      </Text>
    </>
  );
}

```

## Variants

```

import { Divider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Divider my="sm" />
      <Divider my="sm" variant="dashed" />
      <Divider my="sm" variant="dotted" />
    </>
  );
}
```

## With label

```

import { Divider, Box, Anchor } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <Divider my="xs" label="Label on the left" labelPosition="left" />
      <Divider my="xs" label="Label in the center" labelPosition="center" />
      <Divider my="xs" label="Label on the right" labelPosition="right" />
      <Divider
        my="xs"
        variant="dashed"
        labelPosition="center"
        label={
          <>
            <IconSearch size={12} />
            <Box ml={5}>Search results</Box>
          </>
        }
      />
      <Divider
        my="xs"
        label={
          <Anchor href="https://mantine.dev" target="_blank" inherit>
            Link label
          </Anchor>
        }
      />
    </>
  );
}
```

## Sizes

```

import { Divider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Divider size="xs" />
      <Divider size="sm" />
      <Divider size="md" />
      <Divider size="lg" />
      <Divider size="xl" />
      <Divider size={10} />
    </>
  );
}
```

## Vertical orientation

```

import { Divider, Group, Text } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Text>Label</Text>
      <Divider orientation="vertical" />
      <Text>Label</Text>
      <Divider size="sm" orientation="vertical" />
      <Text>Label</Text>
      <Divider size="md" orientation="vertical" />
      <Text>Label</Text>
      <Divider size="lg" orientation="vertical" />
      <Text>Label</Text>
      <Divider size="xl" orientation="vertical" />
      <Text>Label</Text>
    </Group>
  );
}
```## Usage

```

import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Authentication">
        {/* Drawer content */}
      </Drawer>

      <Button onClick={open}>Open Drawer</Button>
    </>
  );
}
```

## Position

Drawer can be placed on `left` (default), `top`, `right` and `bottom`. Control drawer position with `position` prop, for example `<Drawer position="top" />`.

## Offset

Set `offset` prop to change drawer offset from the edge of the viewport:

```

import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer offset={8} radius="md" opened={opened} onClose={close} title="Authentication">
        {/* Drawer content */}
      </Drawer>

      <Button onClick={open}>Open Drawer</Button>
    </>
  );
}
```

## Customize overlay

`Drawer` uses Overlay component, you can set any props that Overlay supports with `overlayProps`:

```

import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Authentication"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      >
        {/* Drawer content */}
      </Drawer>

      <Button onClick={open}>Open drawer</Button>
    </>
  );
}
```

## Sizes

You can change drawer width/height (depends on `position`) by setting `size` prop to predefined size or any valid width, for example, `size="55%"` or `size={200}`:

```tsx
import { Drawer } from '@mantine/core';

function Demo() {
  return (
    <Drawer position="right" size="xl" opened onClose={() => {}}>
      {/* Drawer content */}
    </Drawer>
  );
}
```

## Remove header

To remove header set `withCloseButton={false}`

```

import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} withCloseButton={false}>
        Drawer without header, press escape or click on overlay to close
      </Drawer>

      <Button onClick={open}>Open drawer</Button>
    </>
  );
}

```

## Drawer with scroll

```

import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  const content = Array(100)
    .fill(0)
    .map((_, index) => <p key={index}>Drawer with scroll</p>);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Header is sticky">
        {content}
      </Drawer>

      <Button onClick={open}>Open drawer</Button>
    </>
  );
}
```

## Usage with ScrollArea

```

import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button, ScrollArea } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  const content = Array(100)
    .fill(0)
    .map((_, index) => <p key={index}>Drawer with scroll</p>);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Header is sticky"
        scrollAreaComponent={ScrollArea.Autosize}
      >
        {content}
      </Drawer>

      <Button onClick={open}>Open drawer</Button>
    </>
  );
}
```

## Change transition

`Drawer` is built with Transition component. Use `transitionProps` prop to customize any Transition properties:

```

import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Authentication"
        transitionProps={{ transition: 'rotate-left', duration: 150, timingFunction: 'linear' }}
      >
        {/* Drawer content */}
      </Drawer>

      <Button onClick={open}>Open Drawer</Button>
    </>
  );
}

```

## Initial focus

`Drawer` uses FocusTrap to trap focus. Add `data-autofocus` attribute to the element that should receive initial focus.

```

import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button, TextInput } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Focus demo">
        <TextInput label="First input" placeholder="First input" />
        <TextInput
          data-autofocus
          label="Input with initial focus"
          placeholder="It has data-autofocus attribute"
          mt="md"
        />
      </Drawer>

      <Button onClick={open}>Open drawer</Button>
    </>
  );
}
```

If you do not want to focus any elements when the drawer is opened, use `FocusTrap.InitialFocus` component to create a visually hidden element that will receive initial focus:

```

import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button, TextInput, FocusTrap } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Focus demo">
        <FocusTrap.InitialFocus />
        <TextInput label="First input" placeholder="First input" />
        <TextInput
          data-autofocus
          label="Input with initial focus"
          placeholder="It has data-autofocus attribute"
          mt="md"
        />
      </Drawer>

      <Button onClick={open}>Open drawer</Button>
    </>
  );
}
```

If you do not add `data-autofocus` attribute and do not use `FocusTrap.InitialFocus`, drawer will focus the first focusable element inside it which is usually the close button.

## Control behavior

The following props can be used to control `Drawer` behavior. In most cases it is not recommended to turn these features off – it will make the component less accessible.

-   `trapFocus` – determines whether focus should be trapped inside drawer
-   `closeOnEscape` – determines whether the drawer should be closed when `Escape` key is pressed
-   `closeOnClickOutside` – determines whether the drawer should be closed when user clicks on the overlay
-   `returnFocus` – determines whether focus should be returned to the element that was focused before the drawer was opened

## react-remove-scroll settings

`Drawer` uses react-remove-scroll package to lock scroll. You can pass props down to the `RemoveScroll` component with `removeScrollProps`:

```tsx
import { Drawer } from '@mantine/core';

function Demo() {
  return (
    <Drawer
      removeScrollProps={{ allowPinchZoom: true }}
      opened
      onClose={() => {}}
    >
      {/* Drawer content */}
    </Drawer>
  );
}
```

## Change close icon

Use `closeButtonProps` to customize close button:

```

import { IconXboxX } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Authentication"
        closeButtonProps={{
          icon: <IconXboxX size={20} stroke={1.5} />,
        }}
      >
        {/* Drawer content */}
      </Drawer>

      <Button onClick={open}>Open Drawer</Button>
    </>
  );
}
```

## Compound components

You can use the following compound components to have full control over the `Drawer` rendering:

-   `Drawer.Root` – context provider
-   `Drawer.Overlay` – render Overlay
-   `Drawer.Content` – main drawer element, should include all drawer content
-   `Drawer.Header` – sticky header, usually contains `Drawer.Title` and `Drawer.CloseButton`
-   `Drawer.Title` – `h2` element, `aria-labelledby` of `Drawer.Content` is pointing to this element, usually is rendered inside `Drawer.Header`
-   `Drawer.CloseButton` – close button, usually rendered inside `Drawer.Header`
-   `Drawer.Body` – a place for main content, `aria-describedby` of `Drawer.Content` is pointing to this element

```

import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer.Root opened={opened} onClose={close}>
        <Drawer.Overlay />
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>Drawer title</Drawer.Title>
            <Drawer.CloseButton />
          </Drawer.Header>
          <Drawer.Body>Drawer content</Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>

      <Button onClick={open}>Open drawer</Button>
    </>
  );
}
```

## Fixed elements offset

`Drawer` component uses react-remove-scroll package to lock scroll. To properly size these `elements` add a `className` to them (documentation):

```tsx
import { RemoveScroll } from '@mantine/core';

function Demo() {
  return (
    <>
      <div className={RemoveScroll.classNames.fullWidth}>
        width: 100%
      </div>
      <div className={RemoveScroll.classNames.zeroRight}>
        right: 0
      </div>
    </>
  );
}
```

## Accessibility

`Drawer` component follows WAI-ARIA recommendations on accessibility.

Set `title` props to make component accessible, will add `aria-labelledby` to the content element:

```tsx
import { Drawer } from '@mantine/core';

function Demo() {
  return <Drawer title="Drawer label" opened onClose={() => {}} />;
}
```

To set close button `aria-label` use `closeButtonProps`:

```tsx
import { Drawer } from '@mantine/core';

function Demo() {
  return (
    <Drawer
      closeButtonProps={{ 'aria-label': 'Close modal' }}
      opened
      onClose={() => {}}
    />
  );
}
```## Usage

```

import { Fieldset, TextInput } from '@mantine/core';

function Demo() {
  return (
    <Fieldset legend="Personal information"{{props}}>
      <TextInput label="Your name" placeholder="Your name" />
      <TextInput label="Email" placeholder="Email" mt="md" />
    </Fieldset>
  );
}
```

## Disabled

Set `disabled` prop to disable all inputs and buttons inside the fieldset:

```

import { Fieldset, TextInput, Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Fieldset legend="Personal information" disabled>
      <TextInput label="Your name" placeholder="Your name" />
      <TextInput label="Email" placeholder="Email" mt="md" />

      <Group justify="flex-end" mt="md">
        <Button>Submit</Button>
      </Group>
    </Fieldset>
  );
}
```## Usage

```

import { useState } from 'react';
import { FileButton, Button, Group, Text } from '@mantine/core';

function Demo() {
  const [file, setFile] = useState<File | null>(null);
  return (
    <>
      <Group justify="center">
        <FileButton onChange={setFile} accept="image/png,image/jpeg">
          {(props) => <Button {...props}>Upload image</Button>}
        </FileButton>
      </Group>

      {file && (
        <Text size="sm" ta="center" mt="sm">
          Picked file: {file.name}
        </Text>
      )}
    </>
  );
}
```

## Multiple files

Set `multiple` prop to allow picking multiple files:

```

import { useState } from 'react';
import { FileButton, Button, Group, Text } from '@mantine/core';

function Demo() {
  const [files, setFiles] = useState<File[]>([]);
  return (
    <>
      <Group justify="center">
        <FileButton onChange={setFiles} accept="image/png,image/jpeg" multiple>
          {(props) => <Button {...props}>Upload image</Button>}
        </FileButton>
      </Group>

      {files.length > 0 && (
        <Text size="sm" mt="sm">
          Picked files:
        </Text>
      )}

      <ul>
        {files.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
    </>
  );
}
```

## Reset file

`resetRef` should be used to fix issue with stale value on hidden input element as input type file cannot be controlled. Call `resetRef` when user selection is cleared:

```

import { useState, useRef } from 'react';
import { FileButton, Button, Group, Text } from '@mantine/core';

function Demo() {
  const [file, setFile] = useState<File | null>(null);
  const resetRef = useRef<() => void>(null);

  const clearFile = () => {
    setFile(null);
    resetRef.current?.();
  };

  return (
    <>
      <Group justify="center">
        <FileButton resetRef={resetRef} onChange={setFile} accept="image/png,image/jpeg">
          {(props) => <Button {...props}>Upload image</Button>}
        </FileButton>
        <Button disabled={!file} color="red" onClick={clearFile}>
          Reset
        </Button>
      </Group>

      {file && (
        <Text size="sm" ta="center" mt="sm">
          Picked file: {file.name}
        </Text>
      )}
    </>
  );
}
```## Usage

```

import { FileInput } from '@mantine/core';


function Demo() {
  return (
    <FileInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
```

## Controlled

When `multiple` is `false`:

```tsx
import { useState } from 'react';
import { FileInput } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<File | null>(null);
  return <FileInput value={value} onChange={setValue} />;
}
```

When `multiple` is `true`:

```tsx
import { useState } from 'react';
import { FileInput } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<File[]>([]);
  return <FileInput multiple value={value} onChange={setValue} />;
}
```

## Multiple

Set `multiple` to allow user to pick more than one file:

```

import { FileInput } from '@mantine/core';

function Demo() {
  return <FileInput label="Upload files" placeholder="Upload files" multiple />;
}
```

## Accept

Set `accept` prop to restrict files selection to specific mime types:

```

import { FileInput } from '@mantine/core';

function Demo() {
  return (
    <FileInput accept="image/png,image/jpeg" label="Upload files" placeholder="Upload files" />
  );
}
```

## Clearable

Set `clearable` prop to display clear button in the right section of the input when file is selected. Note that if you define custom right section, clear button will not be rendered.

```

import { FileInput } from '@mantine/core';

function Demo() {
  return <FileInput clearable label="Upload files" placeholder="Upload files" />;
}
```

## Custom value component

```

import { FileInput, FileInputProps, Pill } from '@mantine/core';

const ValueComponent: FileInputProps['valueComponent'] = ({ value }) => {
  if (value === null) {
    return null;
  }

  if (Array.isArray(value)) {
    return (
      <Pill.Group>
        {value.map((file, index) => (
          <Pill key={index}>{file.name}</Pill>
        ))}
      </Pill.Group>
    );
  }

  return <Pill>{value.name}</Pill>;
};

function Demo() {
  return (
    <FileInput
      label="Upload files"
      placeholder="Upload files"
      multiple
      valueComponent={ValueComponent}
    />
  );
}
```

## Error state

```

import { FileInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <FileInput label="Boolean error" placeholder="Boolean error" error />
      <FileInput
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
      />
    </>
  );
}
```

## Disabled state

```

import { FileInput } from '@mantine/core';

function Demo() {
  return <FileInput disabled label="Disabled input" placeholder="Disabled input" />;
}
```

```

import { FileInput, rem } from '@mantine/core';
import { IconFileCv } from '@tabler/icons-react';

function Demo() {
  const icon = <IconFileCv style={{ width: rem(18), height: rem(18) }} stroke={1.5} />;

  return (
    <>
      <FileInput
        leftSection={icon}
        label="Attach your CV"
        placeholder="Your CV"
        leftSectionPointerEvents="none"
      />
      <FileInput
        rightSection={icon}
        label="Attach your CV"
        placeholder="Your CV"
        rightSectionPointerEvents="none"
        mt="md"
      />
    </>
  );
}
```

```

import { IconAt } from '@tabler/icons-react';
import { FileInput, rem } from '@mantine/core';

function Demo() {
  return (
    <FileInput
      label="Label"
      placeholder="FileInput"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconAt style={{ width: rem(18), height: rem(18) }} />}
      {{props}}
    />
  );
}
```

## FileInputProps type

`FileInputProps` type is a generic interface which accepts a single type argument: `multiple` value.

```tsx
import type { FileInputProps } from '@mantine/core';

type SingleInputProps = FileInputProps<false>;
type MultipleInputProps = FileInputProps<true>;
```## Usage

```

import { Flex, Button } from '@mantine/core';


function Demo() {
  return (
    <Flex
      mih={50}
      bg="rgba(0, 0, 0, .3)"
      {{props}}
    >
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Flex>
  );
}
```

## Supported props

## Responsive props

`Flex` component props can have responsive values the same way as other style props:

```

import { Flex, Button } from '@mantine/core';

function Demo() {
  return (
    <Flex
      direction={{ base: 'column', sm: 'row' }}
      gap={{ base: 'sm', sm: 'lg' }}
      justify={{ sm: 'center' }}
    >
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Flex>
  );
}
```

## Difference from Group and Stack

`Flex` component is an alternative to Group and Stack. `Flex` is more flexible, it allows creating both horizontal and vertical flexbox layouts, but requires more configuration. Unlike Group and Stack `Flex` is polymorphic and supports responsive props.## Usage

`FloatingIndicator` is designed to highlight active element in a group. It can be used to create custom segmented controls, tabs and other similar components.

`FloatingIndicator` renders an element over the `target` element. To calculate the position it is required to pass `parent` element which has a relative position.

By default, `FloatingIndicator` does not have any visible styles. You can use `className` prop or Styles API to apply styles.

```

import { useState } from 'react';
import { FloatingIndicator, UnstyledButton } from '@mantine/core';
import classes from './Demo.module.css';

const data = ['React', 'Vue', 'Angular', 'Svelte'];

function Demo() {
  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
  const [controlsRefs, setControlsRefs] = useState<Record<string, HTMLButtonElement | null>>({});
  const [active, setActive] = useState(0);

  const setControlRef = (index: number) => (node: HTMLButtonElement) => {
    controlsRefs[index] = node;
    setControlsRefs(controlsRefs);
  };

  const controls = data.map((item, index) => (
    <UnstyledButton
      key={item}
      className={classes.control}
      ref={setControlRef(index)}
      onClick={() => setActive(index)}
      mod={{ active: active === index }}
    >
      <span className={classes.controlLabel}>{item}</span>
    </UnstyledButton>
  ));

  return (
    <div className={classes.root} ref={setRootRef}>
      {controls}

      <FloatingIndicator
        target={controlsRefs[active]}
        parent={rootRef}
        className={classes.indicator}
      />
    </div>
  );
}
```

## Multiple rows

`FloatingIndicator` can be used to highlight active element in a group with multiple rows:

```

import { useState } from 'react';
import {
  IconArrowDown,
  IconArrowDownLeft,
  IconArrowDownRight,
  IconArrowLeft,
  IconArrowRight,
  IconArrowUp,
  IconArrowUpLeft,
  IconArrowUpRight,
  IconCircle,
} from '@tabler/icons-react';
import { FloatingIndicator, UnstyledButton } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
  const [controlsRefs, setControlsRefs] = useState<Record<string, HTMLButtonElement | null>>({});
  const [active, setActive] = useState('center');

  const setControlRef = (name: string) => (node: HTMLButtonElement) => {
    controlsRefs[name] = node;
    setControlsRefs(controlsRefs);
  };

  return (
    <div className={classes.root} dir="ltr" ref={setRootRef}>
      <FloatingIndicator
        target={controlsRefs[active]}
        parent={rootRef}
        className={classes.indicator}
      />

      <div className={classes.controlsGroup}>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('up-left')}
          ref={setControlRef('up-left')}
          mod={{ active: active === 'up-left' }}
        >
          <IconArrowUpLeft size={26} stroke={1.5} />
        </UnstyledButton>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('up')}
          ref={setControlRef('up')}
          mod={{ active: active === 'up' }}
        >
          <IconArrowUp size={26} stroke={1.5} />
        </UnstyledButton>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('up-right')}
          ref={setControlRef('up-right')}
          mod={{ active: active === 'up-right' }}
        >
          <IconArrowUpRight size={26} stroke={1.5} />
        </UnstyledButton>
      </div>
      <div className={classes.controlsGroup}>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('left')}
          ref={setControlRef('left')}
          mod={{ active: active === 'left' }}
        >
          <IconArrowLeft size={26} stroke={1.5} />
        </UnstyledButton>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('center')}
          ref={setControlRef('center')}
          mod={{ active: active === 'center' }}
        >
          <IconCircle size={26} stroke={1.5} />
        </UnstyledButton>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('right')}
          ref={setControlRef('right')}
          mod={{ active: active === 'right' }}
        >
          <IconArrowRight size={26} stroke={1.5} />
        </UnstyledButton>
      </div>
      <div className={classes.controlsGroup}>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('down-left')}
          ref={setControlRef('down-left')}
          mod={{ active: active === 'down-left' }}
        >
          <IconArrowDownLeft size={26} stroke={1.5} />
        </UnstyledButton>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('down')}
          ref={setControlRef('down')}
          mod={{ active: active === 'down' }}
        >
          <IconArrowDown size={26} stroke={1.5} />
        </UnstyledButton>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('down-right')}
          ref={setControlRef('down-right')}
          mod={{ active: active === 'down-right' }}
        >
          <IconArrowDownRight size={26} stroke={1.5} />
        </UnstyledButton>
      </div>
    </div>
  );
}
```## Usage

FocusTrap is a component implementation of use-focus-trap hook, it is used in all Mantine components that require focus trap (Modal, DatePicker, Popover, etc.).

```

import { useDisclosure } from '@mantine/hooks';
import { FocusTrap, TextInput, Button, Box } from '@mantine/core';

function Demo() {
  const [active, { toggle }] = useDisclosure(false);

  return (
    <Box maw={400} mx="auto">
      <Button onClick={toggle}>{active ? 'Deactivate' : 'Activate'} focus trap</Button>

      <FocusTrap active={active}>
        <div>
          <TextInput mt="sm" label="First input" placeholder="First input" />
          <TextInput mt="sm" label="Second input" placeholder="Second input" />
          <TextInput mt="sm" label="Third input" placeholder="Third input" />
        </div>
      </FocusTrap>
    </Box>
  );
}
```

## Initial focus

To define the element that will receive initial focus set `data-autofocus` attribute:

```

import { useDisclosure } from '@mantine/hooks';
import { FocusTrap, TextInput, Button, Box } from '@mantine/core';

function Demo() {
  const [active, { toggle }] = useDisclosure(false);

  return (
    <Box maw={400} mx="auto">
      <Button onClick={toggle}>{active ? 'Deactivate' : 'Activate'} focus trap</Button>

      <FocusTrap active={active}>
        <div>
          <TextInput mt="sm" label="First input" placeholder="First input" />
          <TextInput mt="sm" label="Second input" placeholder="Second input" data-autofocus />
          <TextInput mt="sm" label="Third input" placeholder="Third input" />
        </div>
      </FocusTrap>
    </Box>
  );
}
```

## FocusTrap.InitialFocus

`FocusTrap.InitialFocus` is a special component that adds a visually hidden element which will receive the focus when the focus trap is activated. Once `FocusTrap.InitialFocus` loses focus, it is removed from the tab order.

For example, it is useful if you do not want to focus any elements inside the Modal when it is opened:

```

import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, TextInput, FocusTrap } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Focus demo">
        <FocusTrap.InitialFocus />
        <TextInput label="First input" placeholder="First input" />
        <TextInput
          data-autofocus
          label="Input with initial focus"
          placeholder="It has data-autofocus attribute"
          mt="md"
        />
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}
```

## Focus trapping logic

-   Focus is trapped within child node if `active` prop is `true`
-   When FocusTrap component is mounted or when `active` prop changes from `false` to `true` first element with `data-autofocus` attribute is focused
-   If there are no elements with `data-autofocus` attribute, then the first element that supports keyboard interaction is focused
-   If the target element does not have focusable elements or does not support `ref`, then the focus trap will not work
-   Trap stops working when element outside of the `FocusTrap` child is focused## Usage

```

import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span={4}>1</Grid.Col>
      <Grid.Col span={4}>2</Grid.Col>
      <Grid.Col span={4}>3</Grid.Col>
    </Grid>
  );
}
```

## Columns span

`Grid.Col` `span` prop controls the ratio of column width to the total width of the row. By default, grid uses 12 columns layout, so `span` prop can be any number from 1 to 12.

Examples:

-   `<Grid.Col span={3} />` – 3 / 12 = 25% of row width
-   `<Grid.Col span={4} />` – 4 / 12 = 33% of row width
-   `<Grid.Col span={6} />` – 6 / 12 = 50% of row width
-   `<Grid.Col span={12} />` – 12 / 12 = 100% of row width

`span` prop also supports object syntax to change column width based on viewport width, it accepts `xs`, `sm`, `md`, `lg` and `xl` keys and values from 1 to 12. The syntax is the same as in style props.

In the following example `span={{ base: 12, md: 6, lg: 3 }}`:

-   `base` – 12 / 12 = 100% of row width when viewport width is less than `md` breakpoint
-   `md` – 6 / 12 = 50% of row width when viewport width is between `md` and `lg` breakpoints
-   `lg` – 3 / 12 = 25% of row width when viewport width is greater than `lg` breakpoint

```

import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>1</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>2</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>3</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>4</Grid.Col>
    </Grid>
  );
}
```

## Gutter

Set `gutter` prop to control spacing between columns. The prop works the same way as style props – you can reference `theme.spacing` values with `xs`, `sm`, `md`, `lg` and `xl` strings and use object syntax to change gutter based on viewport width:

```

import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}>
      <Grid.Col span={4}>1</Grid.Col>
      <Grid.Col span={4}>2</Grid.Col>
      <Grid.Col span={4}>3</Grid.Col>
    </Grid>
  );
}
```

## Grow

If `grow` prop is set, column will grow to fill the remaining space in the row:

```

import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid{{props}}>
      <Grid.Col span={4}>1</Grid.Col>
      <Grid.Col span={4}>2</Grid.Col>
      <Grid.Col span={4}>3</Grid.Col>
      <Grid.Col span={4}>4</Grid.Col>
      <Grid.Col span={4}>5</Grid.Col>
    </Grid>
  );
}
```

## Column offset

Set `offset` prop on `Grid.Col` component to add gaps to the grid. `offset` prop supports the same syntax as `span` prop: a number from 1 to 12 or an object with `xs`, `sm`, `md`, `lg` and `xl` keys and values from 1 to 12.

```

import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span={3}>1</Grid.Col>
      <Grid.Col span={3}>2</Grid.Col>
      <Grid.Col span={3} offset={3}>3</Grid.Col>
    </Grid>
  );
}
```

## Order

Set the `order` prop on `Grid.Col` component to change the order of columns. `order` prop supports the same syntax as `span` prop: a number from 1 to 12 or an object with `xs`, `sm`, `md`, `lg` and `xl` keys and values from 1 to 12.

```

import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span={3} order={{ base: 2, sm: 1, lg: 3 }}>2</Grid.Col>
      <Grid.Col span={3} order={{ base: 3, sm: 2, lg: 2 }}>3</Grid.Col>
      <Grid.Col span={3} order={{ base: 1, sm: 3, lg: 1 }}>1</Grid.Col>
    </Grid>
  );
}
```

## Multiple rows

Once columns `span` and `offset` sum exceeds `columns` prop (12 by default), columns are moved to the next row:

```

import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span={4}>1</Grid.Col>
      <Grid.Col span={4}>2</Grid.Col>
      <Grid.Col span={4}>3</Grid.Col>
      <Grid.Col span={4}>4</Grid.Col>
    </Grid>
  );
}
```

## Justify and align

You can control `justify-content` and `align-items` CSS properties with `justify` and `align` props on `Grid` component:

```

import { Grid, rem } from '@mantine/core';

function Demo() {
  return (
    <Grid{{props}}>
      <Grid.Col span={3} style={{ minHeight: rem(80) }}>1</Grid.Col>
      <Grid.Col span={3} style={{ minHeight: rem(120) }}>2</Grid.Col>
      <Grid.Col span={3}>3</Grid.Col>
    </Grid>
  );
}
```

## Auto sized columns

All columns in a row with `span="auto"` grow as much as they can to fill the row. In the following example, the second column takes up 50% of the row while the other two columns automatically resize to fill the remaining space:

```

import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span="auto">1</Grid.Col>
      <Grid.Col span={6}>2</Grid.Col>
      <Grid.Col span="auto">3</Grid.Col>
    </Grid>
  );
}
```

## Fit column content

If you set `span="content"`, the column’s size will automatically adjust to match the width of its content:

```

import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span="content">fit content</Grid.Col>
      <Grid.Col span={6}>2</Grid.Col>
    </Grid>
  );
}
```

## Change columns count

By default, grid uses 12 columns layout, you can change it by setting `columns` prop on `Grid` component. Note that in this case, columns span and offset will be calculated relative to this value.

In the following example, first column takes 50% with 12 span (12/24), second and third take 25% (6/24):

```

import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid columns={24}>
      <Grid.Col span={12}>1</Grid.Col>
      <Grid.Col span={6}>2</Grid.Col>
      <Grid.Col span={6}>3</Grid.Col>
    </Grid>
  );
}
```

## overflow: hidden

By default, `Grid` has `overflow: visible` style on the root element. In some cases you might want to change it to `overflow: hidden` to prevent negative margins from overflowing the grid container. For example, if you use `Grid` without parent container which has padding.

```tsx
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid overflow="hidden">
      <Grid.Col span={6}>1</Grid.Col>
      <Grid.Col span={6}>2</Grid.Col>
    </Grid>
  );
}
```## Usage

`Group` is a horizontal flex container. If you need a vertical flex container, use Stack component instead. If you need to have full control over flex container properties, use Flex component.

```

import { Group, Button } from '@mantine/core';

function Demo() {
  return (
    <Group{{props}}>
      <Button variant="default">First</Button>
      <Button variant="default">Second</Button>
      <Button variant="default">Third</Button>
    </Group>
  );
}
```

## preventGrowOverflow

`preventGrowOverflow` prop allows you to control how `Group` children should behave when there is not enough space to fit them all on one line. By default, children are not allowed to take more space than `(1 / children.length) * 100%` of parent width (`preventGrowOverflow` is set to `true`). To change this behavior, set `preventGrowOverflow` to `false` and children will be allowed to grow and take as much space as they need.

```

import { Group, Button, Box, Text } from '@mantine/core';

function Demo() {
  return (
    <Box style={{ overflow: 'hidden' }}>
      <Box maw={500} p="md" mx="auto" bg="var(--mantine-color-blue-light)">
        <Text size="sm" mb={5}>
          preventGrowOverflow: true – each child width is always limited to 33% of parent width
          (since there are 3 children)
        </Text>

        <Group grow wrap="nowrap">
          <Button variant="default">First button</Button>
          <Button variant="default">Second button with large content</Button>
          <Button variant="default">Third button</Button>
        </Group>

        <Text size="sm" mb={5} mt="md">
          preventGrowOverflow: false – children will grow based on their content, they can take more
          than 33% of parent width
        </Text>

        <Group grow preventGrowOverflow={false} wrap="nowrap">
          <Button variant="default">First button</Button>
          <Button variant="default">Second button with large content</Button>
          <Button variant="default">Third button</Button>
        </Group>
      </Box>
    </Box>
  );
}
```

## Group children

**!important** `Group` works correctly only with React elements. Strings, numbers, fragments may have incorrect styles if `grow` prop is set:

```tsx
// Invalid Group usage, do not do this
import { Group } from '@mantine/core';

function InvalidDemo() {
  return (
    <Group grow>
      First string
      <>
        <div>element inside fragment</div>
        <div>another inside fragment</div>
      </>
      {20}
    </Group>
  );
}
```## Usage

Use Highlight component to highlight a substring in a given string with a mark tag.

Pass the main string as children to Highlight component and string part that should be highlighted to `highlight` prop. If the main string does not include `highlight` part, it will be ignored. `Highlight` ignores trailing whitespace and highlights all matched characters sequences.

```

import { Highlight } from '@mantine/core';

function Demo() {
  return (
    <Highlight{{props}}>
      {{children}}
    </Highlight>
  );
}
```

## Highlight multiple substrings

To highlight multiple substrings, provide an array of values:

```

import { Highlight } from '@mantine/core';

function Demo() {
  return <Highlight highlight={['this', 'that']}>Highlight this and also that</Highlight>;
}
```

## Change highlight styles

Default Mark styles can be overwritten with `highlightStyles` prop, it accepts either a function with a subscription to theme or an object with styles:

```

import { Highlight } from '@mantine/core';

function Demo() {
  return (
    <Highlight
      ta="center"
      highlight={['highlighted', 'default']}
      highlightStyles={{
        backgroundImage:
          'linear-gradient(45deg, var(--mantine-color-cyan-5), var(--mantine-color-indigo-5))',
        fontWeight: 700,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      You can change styles of highlighted part if you do not like default styles
    </Highlight>
  );
}
```

## Text props

Highlight is based on Text component, all its props are available:

```

import { Highlight } from '@mantine/core';

function Demo() {
  return (
    <Highlight
      component="a"
      href="https://mantine.dev"
      target="_blank"
      highlight="mantine"
      fw={500}
      c="var(--mantine-color-anchor)"
    >
      Mantine website
    </Highlight>
  );
}

```## Usage

```

import { HoverCard, Button, Text, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <HoverCard width={280} shadow="md">
        <HoverCard.Target>
          <Button>Hover to reveal the card</Button>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size="sm">
            Hover card is revealed when user hovers over target element, it will be hidden once
            mouse is not over both target and dropdown elements
          </Text>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  );
}

```

## Delays

Set open and close delays in ms with `openDelay` and `closeDelay` props:

```

import { HoverCard, Button, Text, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <HoverCard shadow="md" openDelay={1000}>
        <HoverCard.Target>
          <Button>1000ms open delay</Button>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size="sm">Opened with 1000ms delay</Text>
        </HoverCard.Dropdown>
      </HoverCard>

      <HoverCard shadow="md" closeDelay={1000}>
        <HoverCard.Target>
          <Button>1000ms close delay</Button>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size="sm">Will close with 1000ms delay</Text>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  );
}
```

## With interactive elements

`HoverCard` is displayed only when the mouse is over the target element or dropdown, you can use anchors and buttons within dropdowns, using inputs is not recommended:

```

import { HoverCard, Avatar, Text, Group, Anchor, Stack } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <HoverCard width={320} shadow="md" withArrow openDelay={200} closeDelay={400}>
        <HoverCard.Target>
          <Avatar src="https://avatars.githubusercontent.com/u/79146003?s=200&v=4" radius="xl" />
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Group>
            <Avatar src="https://avatars.githubusercontent.com/u/79146003?s=200&v=4" radius="xl" />
            <Stack gap={5}>
              <Text size="sm" fw={700} style={{ lineHeight: 1 }}>
                Mantine
              </Text>
              <Anchor
                href="https://twitter.com/mantinedev"
                c="dimmed"
                size="xs"
                style={{ lineHeight: 1 }}
              >
                @mantinedev
              </Anchor>
            </Stack>
          </Group>

          <Text size="sm" mt="md">
            Customizable React components and hooks library with focus on usability, accessibility
            and developer experience
          </Text>

          <Group mt="md" gap="xl">
            <Text size="sm">
              <b>0</b> Following
            </Text>
            <Text size="sm">
              <b>1,174</b> Followers
            </Text>
          </Group>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  );
}
```

## Accessibility

`HoverCard` is ignored by screen readers and cannot be activated with keyboard, use it to display only additional information that is not required to understand the context.## Usage

`Image` is a wrapper for `img` with minimal styles. By default, the image will take 100% of parent width. The image size can be controlled with `w` and `h` style props.

```

import { Image } from '@mantine/core';

function Demo() {
  return (
    <Image
      radius="md"
      src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
    />
  );
}
```

## Image height

In most case, you will need to set image height to prevent layout jumps when image is loading. You can do so with `h` style props.

```

import { Image } from '@mantine/core';

function Demo() {
  return (
    <Image
      radius="md"
      h={200}
      src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-10.png"
    />
  );
}
```

## Image fit

By default the image has `object-fit: cover` style - it will resize to cover parent element. To change this behavior, set `w="auto"` and `fit="contain"` props.

```

import { Image } from '@mantine/core';

function Demo() {
  return (
    <Image
      radius="md"
      h={200}
      w="auto"
      fit="contain"
      src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"
    />
  );
}
```

## Fallback image

Set `fallbackSrc` prop to display fallback image when image fails to load:

```

import { Image } from '@mantine/core';

function Demo() {
  return (
    <Image
      radius="md"
      src={null}
      h={200}
      fallbackSrc="https://placehold.co/600x400?text=Placeholder"
    />
  );
}
```

## Usage with Next.js Image

`Image` component is a polymorphic component, its root element can be changed with `component` prop. You can use it with `next/image` and other similar components.

```tsx
import NextImage from 'next/image';
import { Image } from '@mantine/core';
import myImage from './my-image.jpg';

function Demo() {
  return <Image component={NextImage} src={myImage} alt="My image" />;
}
```## Usage

```

import { Indicator, Avatar } from '@mantine/core';

function Demo() {
  return (
    <Indicator{{props}}>
      <Avatar
        size="lg"
        radius="sm"
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
      />
    </Indicator>
  );
}
```

## Inline

When the target element has a fixed width, set `inline` prop to add `display: inline-block;` styles to Indicator container. Alternatively, you can set width and height with `style` prop if you still want the root element to keep `display: block`.

```

import { Avatar, Indicator } from '@mantine/core';

function Demo() {
  return (
    <Indicator inline label="New" size={16}>
      <Avatar
        size="lg"
        radius="sm"
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
      />
    </Indicator>
  );
}
```

## Offset

Set `offset` to change indicator position. It is useful when Indicator component is used with children that have border-radius:

```

import { Avatar, Indicator } from '@mantine/core';

function Demo() {
  return (
    <Indicator inline size={16} offset={7} position="bottom-end" color="red" withBorder>
      <Avatar
        size="lg"
        radius="xl"
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png"
      />
    </Indicator>
  );
}
```

## Processing animation

```

import { Avatar, Indicator } from '@mantine/core';

function Demo() {
  return (
    <Indicator inline processing color="red" size={12}>
      <Avatar
        size="lg"
        radius="sm"
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png"
      />
    </Indicator>
  );
}
```

## Disabled

Set `disabled` to hide the indicator:

```

import { useDisclosure } from '@mantine/hooks';
import { Avatar, Indicator, Button, Stack } from '@mantine/core';

function Demo() {
  const [visible, { toggle }] = useDisclosure();

  return (
    <Stack align="center">
      <Indicator inline disabled={!visible} color="red" size={12}>
        <Avatar
          size="lg"
          radius="sm"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png"
        />
      </Indicator>
      <Button onClick={toggle}>Toggle indicator</Button>
    </Stack>
  );
}
```## Disclaimer

**!important:** In most cases, you should not use `Input` in your application. `Input` is a base for other inputs and was not designed to be used directly. Use `Input` to create custom inputs, for other cases prefer TextInput or other component.

```tsx
import { Input, TextInput } from '@mantine/core';

// Incorrect usage, input is not accessible
function Incorrect() {
  return (
    <Input.Wrapper label="Input label">
      <Input />
    </Input.Wrapper>
  );
}

// Use TextInput instead of Input everywhere you want to use Input,
// it is accessible by default and includes Input.Wrapper
function Correct() {
  return (
    <TextInput label="Input label" description="Input description" />
  );
}
```

## Usage

`Input` component is used as base for some other inputs (NativeSelect, TextInput, Textarea, etc.). The purpose of the `Input` is to provide shared styles and features to other inputs.

```

import { Input } from '@mantine/core';

function Demo() {
  return <Input{{props}} placeholder="Input component" />;
}
```

```

import { useState } from 'react';
import { Input, CloseButton } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  const [value, setValue] = useState('Clear me');
  return (
    <>
      <Input placeholder="Your email" leftSection={<IconAt size={16} />} />
      <Input
        placeholder="Clearable input"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        rightSectionPointerEvents="all"
        mt="md"
        rightSection={
          <CloseButton
            aria-label="Clear input"
            onClick={() => setValue('')}
            style={{ display: value ? undefined : 'none' }}
          />
        }
      />
    </>
  );
}
```

## Change input element

Input is a polymorphic component, the default root element is `input`, but it can be changed to any other element or component.

Example of using `Input` as `button` and `select`:

```

import { Input } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <Input component="button" pointer>
        Button input
      </Input>

      <Input
        component="select"
        rightSection={<IconChevronDown size={14} stroke={1.5} />}
        pointer
        mt="md"
      >
        <option value="1">1</option>
        <option value="2">2</option>
      </Input>
    </>
  );
}
```

Example of using react-imask with `Input`:

```

import { Input } from '@mantine/core';
import { IMaskInput } from 'react-imask';

function Demo() {
  return <Input component={IMaskInput} mask="+7 (000) 000-00-00" placeholder="Your phone" />;
}
```

## Input.Wrapper component

`Input.Wrapper` component is used in all other inputs (TextInput, NativeSelect, Textarea, etc.) under the hood, you _do not need to wrap your inputs with it, as it is already included in all of them_. Use `Input.Wrapper` only when you want to create custom inputs.

```

import { Input } from '@mantine/core';

function Wrapper() {
  return (
    <Input.Wrapper{{props}}>
      <Input placeholder="Input inside Input.Wrapper" />
    </Input.Wrapper>
  );
}
```

## inputWrapperOrder

`inputWrapperOrder` allows configuring the order of `Input.Wrapper` parts. It accepts an array of four elements: `label`, `input`, `error` and `description`. Note that it is not required to include all of them, you can use only those that you need – parts that are not included will not be rendered.

```

import { TextInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <TextInput
        label="Custom layout"
        placeholder="Custom layout"
        description="Description below the input"
        inputWrapperOrder={['label', 'error', 'input', 'description']}
      />
      <TextInput
        mt="xl"
        label="Custom layout"
        placeholder="Custom layout"
        description="Error and description are"
        error="both below the input"
        inputWrapperOrder={['label', 'input', 'description', 'error']}
      />
    </>
  );
}
```

## inputContainer

With `inputContainer` prop, you can enhance inputs that use `Input.Wrapper` under the hood, for example, you can add Tooltip to the TextInput when the input is focused:

```

import { useState } from 'react';
import { TextInput, Tooltip } from '@mantine/core';

function Demo() {
  const [focused, setFocused] = useState(false);

  return (
    <TextInput
      label="TextInput with tooltip"
      description="Tooltip will be relative to the input"
      placeholder="Focus me to see tooltip"
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      inputContainer={(children) => (
        <Tooltip label="Additional information" position="top-start" opened={focused}>
          {children}
        </Tooltip>
      )}
    />
  );
}
```

## required and withAsterisk props

All components that are based on `Input.Wrapper` support `required` and `withAsterisk` props. When set to true, both of these props will add a red asterisk to the end of the label. The only difference is whether input element will have `required` attribute, example with TextInput component:

```tsx
import { TextInput } from '@mantine/core';

// Will display required asterisk and add `required` attribute to the input element
function RequiredDemo() {
  return <TextInput label="test-label" required />;
}

// Will only display the asterisk, `required` attribute is not added to the input element
function AsteriskDemo() {
  return <TextInput label="test-label" withAsterisk />;
}
```

## error prop

All inputs that use `Input.Wrapper` under the hood support `error` prop. When set to `true`, it will add a red border to the input. You can also pass a React node to display an error message below the input. To only display error message without a red border, set `error` prop to React node and `withErrorStyles={false}`:

```

import { TextInput, rem } from '@mantine/core';
import { IconExclamationCircle } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <TextInput placeholder="Error as boolean" label="Error as boolean" error />
      <TextInput
        mt="md"
        placeholder="Error as react node"
        label="Error as react node"
        error="Something went wrong"
      />

      <TextInput
        mt="md"
        placeholder="Without error styles on input"
        label="Without error styles on input"
        error="Something went wrong"
        withErrorStyles={false}
        rightSectionPointerEvents="none"
        rightSection={
          <IconExclamationCircle
            style={{ width: rem(20), height: rem(20) }}
            color="var(--mantine-color-error)"
          />
        }
      />
    </>
  );
}
```

## Input.Label, Input.Description and Input.Error components

`Input.Label`, `Input.Error` and `Input.Description` components can be used to create custom form layouts if the default `Input.Wrapper` layout does not meet your requirements.

```

import { Input } from '@mantine/core';

function Demo() {
  return (
    <>
      <Input.Label required>Input label</Input.Label>
      <Input.Description>Input description</Input.Description>
      <Input.Error>Input error</Input.Error>
    </>
  );
}
```

## Input.Placeholder component

`Input.Placeholder` component can be used to add placeholder to `Input` and `InputBase` components that are based on `button` element or do not support placeholder property natively:

```

import { Input } from '@mantine/core';

function Demo() {
  return (
    <Input component="button" pointer>
      <Input.Placeholder>Placeholder content</Input.Placeholder>
    </Input>
  );
}
```

## Default props on theme

You can add default props on theme to `Input` and `Input.Wrapper` components. These default props will be inherited by all inputs that use `Input` and `Input.Wrapper` under the hood (TextInput, NativeSelect, Textarea, etc.):

```

import { TextInput, NativeSelect, MantineProvider, createTheme, Input } from '@mantine/core';

const theme = createTheme({
  components: {
    Input: Input.extend({
      defaultProps: {
        variant: 'filled',
      },
    }),

    InputWrapper: Input.Wrapper.extend({
      defaultProps: {
        inputWrapperOrder: ['label', 'input', 'description', 'error'],
      },
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <TextInput
        label="Text input"
        placeholder="Text input"
        description="Description below the input"
      />

      <NativeSelect
        mt="md"
        label="Native select"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        description="Description below the input"
      />
    </MantineProvider>
  );
}
```

## Styles on theme

Same as with default props, you can use `Input` and `Input.Wrapper` Styles API on theme to add styles to all inputs:

```

import { TextInput, NativeSelect, MantineProvider, createTheme, Input } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Input: Input.extend({
      classNames: {
        input: classes.input,
      },
    }),

    InputWrapper: Input.Wrapper.extend({
      classNames: {
        label: classes.label,
      },
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <TextInput label="Text input" placeholder="Text input" />

      <NativeSelect
        mt="md"
        label="Native select"
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
    </MantineProvider>
  );
}
```

## Change focus styles

Use `&:focus-within` selector to change inputs focus styles. You can apply these styles to one component with `classNames` prop or to all inputs with Styles API on theme.

```

import { Input, TextInput } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <>
      <Input placeholder="Regular Input component" classNames={classes} />
      <TextInput
        placeholder="TextInput component"
        label="TextInput component"
        mt="md"
        classNames={classes}
      />
    </>
  );
}
```

## InputBase component

`InputBase` component combines `Input` and `Input.Wrapper` components and supports `component` prop:

```

import { InputBase } from '@mantine/core';
import { IMaskInput } from 'react-imask';

function Demo() {
  return (
    <>
      <InputBase
        label="Your phone"
        component={IMaskInput}
        mask="+7 (000) 000-0000"
        placeholder="Your phone"
      />

      <InputBase label="Custom native select" component="select" mt="md">
        <option value="react">React</option>
        <option value="react">Angular</option>
        <option value="svelte">Svelte</option>
      </InputBase>
    </>
  );
}
```

## Styles API

`Input` and `Input.Wrapper` components support Styles API – you can customize styles of any inner element with `classNames` and `styles` props.

`Input` Styles API selectors:

```

import { Input, rem } from '@mantine/core';

function Demo() {
  const at = <IconAt style={{ width: rem(16), height: rem(16) }} stroke={1.5} />;
  const chevron = <IconChevronDown style={{ width: rem(16), height: rem(16) }} stroke={1.5} />;
  return <Input{{props}} placeholder="Input component" leftSection={at} rightSection={chevron} />;
}
```

`Input.Wrapper` Styles API selectors:

```

import { Input } from '@mantine/core';

function Demo() {
  return <Input.Wrapper{{props}} label="Input label" description="Input description" error="Input error" withAsterisk />;
}
```

## Accessibility

If you use `Input` component without associated label element, set `aria-label`:

```tsx
import { Input } from '@mantine/core';

// ok – the input is labelled by the aria-label
function WithAriaLabel() {
  return <Input aria-label="Your email" />;
}

// ok – the input is labelled by the label element
function WithLabel() {
  return (
    <>
      <label htmlFor="my-email">Your email</label>
      <Input id="my-email" />
    </>
  );
}
```

When you use `Input` with `Input.Wrapper` it is required to set `id` on both components to connect label and other elements with the input:

```tsx
import { Input } from '@mantine/core';

function Demo() {
  return (
    <Input.Wrapper label="Your email" id="your-email">
      <Input id="your-email" />
    </Input.Wrapper>
  );
}
```

You can use use-id to generate unique ids:

```tsx
import { Input } from '@mantine/core';
import { useId } from '@mantine/hooks';

function Demo() {
  const id = useId();
  return (
    <Input.Wrapper label="Your email" id={id}>
      <Input id={id} />
    </Input.Wrapper>
  );
}
```## Usage

`JsonInput` is based on Textarea component, it includes json validation logic and option to format input value on blur:

```

import { JsonInput } from '@mantine/core';

function Demo() {
  return (
    <JsonInput
      label="Your package.json"
      placeholder="Textarea will autosize to fit the content"
      validationError="Invalid JSON"
      formatOnBlur
      autosize
      minRows={4}
    />
  );
}
```

## Controlled

```tsx
import { useState } from 'react';
import { JsonInput } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('');
  return <JsonInput value={value} onChange={setValue} />;
}
```

## Input props

```

import { JsonInput } from '@mantine/core';


function Demo() {
  return (
    <JsonInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
```

## Disabled state

```

import { JsonInput } from '@mantine/core';

function Demo() {
  return (
    <JsonInput disabled defaultValue='{ "a": 1, "B": 2 }' label="Disabled" placeholder="Disabled" />
  );
}
```

```

import { IconAt } from '@tabler/icons-react';
import { JsonInput, rem } from '@mantine/core';

function Demo() {
  return (
    <JsonInput
      label="Label"
      placeholder="JsonInput"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconAt style={{ width: rem(18), height: rem(18) }} />}
      autosize
      {{props}}
    />
  );
}
```## Usage

```

import { Kbd } from '@mantine/core';

function Demo() {
  return (
    <div dir="ltr">
      <Kbd>⌘</Kbd> + <Kbd>Shift</Kbd> + <Kbd>M</Kbd>
    </div>
  );
}
```## Usage

```

import { List } from '@mantine/core';

function Demo() {
  return (
    <List{{props}}>
      <List.Item>Clone or download repository from GitHub</List.Item>
      <List.Item>Install dependencies with yarn</List.Item>
      <List.Item>To start development server run npm start command</List.Item>
      <List.Item>Run tests to make sure your changes do not break the build</List.Item>
      <List.Item>Submit a pull request once you are done</List.Item>
    </List>
  );
}
```

## With icons

You can replace list bullets with icon. To do so provide following props:

-   `icon` on List component will be used as default icon for all list elements
-   `icon` on List.Item component will override context icon from List
-   `spacing` – spacing between list items from theme or any valid CSS value to set spacing, defaults to `0`
-   `center` – center item content with icon
-   `size` – set font size from theme

```

import { List, ThemeIcon, rem } from '@mantine/core';
import { IconCircleCheck, IconCircleDashed } from '@tabler/icons-react';

function Demo() {
  return (
    <List
      spacing="xs"
      size="sm"
      center
      icon={
        <ThemeIcon color="teal" size={24} radius="xl">
          <IconCircleCheck style={{ width: rem(16), height: rem(16) }} />
        </ThemeIcon>
      }
    >
      <List.Item>Clone or download repository from GitHub</List.Item>
      <List.Item>Install dependencies with yarn</List.Item>
      <List.Item>To start development server run npm start command</List.Item>
      <List.Item>Run tests to make sure your changes do not break the build</List.Item>
      <List.Item
        icon={
          <ThemeIcon color="blue" size={24} radius="xl">
            <IconCircleDashed style={{ width: rem(16), height: rem(16) }} />
          </ThemeIcon>
        }
      >
        Submit a pull request once you are done
      </List.Item>
    </List>
  );
}
```

## Nested lists

Set `withPadding` prop to offset nested lists and `listStyleType` to control bullet type:

```

import { List } from '@mantine/core';

function Demo() {
  return (
    <List listStyleType="disc">
      <List.Item>First order item</List.Item>
      <List.Item>First order item</List.Item>
      <List.Item>
        First order item with list
        <List withPadding listStyleType="disc">
          <List.Item>Nested item</List.Item>
          <List.Item>Nested item</List.Item>
          <List.Item>
            Nested item with list
            <List withPadding listStyleType="disc">
              <List.Item>Event more nested</List.Item>
              <List.Item>Event more nested</List.Item>
            </List>
          </List.Item>
          <List.Item>Nested item</List.Item>
        </List>
      </List.Item>
      <List.Item>First order item</List.Item>
    </List>
  );
}
```## Usage

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
```## Usage

`LoadingOverlay` renders an overlay with a loader over the parent element with relative position. It is usually used to indicate loading state of forms. Note that elements under overlay are still focusable with keyboard, remember to add additional logic to handle this case.

`LoadingOverlay` rendering is controlled by `visible` prop:

```

import { useDisclosure } from '@mantine/hooks';
import { LoadingOverlay, Button, Group, Box } from '@mantine/core';

function Demo() {
  const [visible, { toggle }] = useDisclosure(false);

  // Note that position: relative is required
  return (
    <>
      <Box pos="relative">
        <LoadingOverlay visible={visible} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
        {/* ...other content */}
      </Box>

      <Group justify="center">
        <Button onClick={toggle}>Toggle overlay</Button>
      </Group>
    </>
  );
}
```

## Loader props

You can pass props down to the Loader component with `loaderProps`:

```

import { useDisclosure } from '@mantine/hooks';
import { LoadingOverlay, Button, Group, Box } from '@mantine/core';

function Demo() {
  const [visible, { toggle }] = useDisclosure(true);

  // Note that position: relative is required
  return (
    <>
      <Box pos="relative">
        <LoadingOverlay
          visible={visible}
          zIndex={1000}
          overlayProps={{ radius: 'sm', blur: 2 }}
          loaderProps={{ color: 'pink', type: 'bars' }}
        />
        {/* ...other content */}
      </Box>

      <Group justify="center">
        <Button onClick={toggle}>Toggle overlay</Button>
      </Group>
    </>
  );
}
```

## Custom inline loaders

To replace default loader with any custom content, set `loaderProps={{ children: <div>Your content</div> }}`. You can put any React node inside `loaderProps.children`:

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
```## Usage

```

import { Text, Mark } from '@mantine/core';

function Demo() {
  return (
    <Text>
      Highlight <Mark{{props}}>this chunk</Mark> of the text
    </Text>
  );
}
```## Usage

```

import { Menu, Button, Text, rem } from '@mantine/core';
import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
} from '@tabler/icons-react';

function Demo() {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button>Toggle menu</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}>
          Settings
        </Menu.Item>
        <Menu.Item leftSection={<IconMessageCircle style={{ width: rem(14), height: rem(14) }} />}>
          Messages
        </Menu.Item>
        <Menu.Item leftSection={<IconPhoto style={{ width: rem(14), height: rem(14) }} />}>
          Gallery
        </Menu.Item>
        <Menu.Item
          leftSection={<IconSearch style={{ width: rem(14), height: rem(14) }} />}
          rightSection={
            <Text size="xs" c="dimmed">
              ⌘K
            </Text>
          }
        >
          Search
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item
          leftSection={<IconArrowsLeftRight style={{ width: rem(14), height: rem(14) }} />}
        >
          Transfer my data
        </Menu.Item>
        <Menu.Item
          color="red"
          leftSection={<IconTrash style={{ width: rem(14), height: rem(14) }} />}
        >
          Delete my account
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
```

## Controlled

Dropdown opened state can be controlled with `opened` and `onChange` props:

```tsx
import { useState } from 'react';
import { Menu } from '@mantine/core';

function Demo() {
  const [opened, setOpened] = useState(false);
  return (
    <Menu opened={opened} onChange={setOpened}>
      {/* Menu content */}
    </Menu>
  );
}
```

## Show menu on hover

Set `trigger="hover"` to reveal dropdown when hovers over menu target and dropdown. `closeDelay` and `openDelay` props can be used to control open and close delay in ms. Note that:

-   If you set `closeDelay={0}` then menu will close before user will reach dropdown, set `offset={0}` to remove space between target element and dropdown.
-   Menu with `trigger="hover"` is not accessible – users that navigate with keyboard will not be able to use it. If you need click-hover hover and click triggers, use `trigger="click-hover"`.

```

import { Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu trigger="hover" openDelay={100} closeDelay={400}>
      {/* ... menu items */}
    </Menu>
  );
}
```

To make `Menu` that is revealed on hover accessible on all devices, use `trigger="click-hover"` instead. The dropdown will be revealed on hover on desktop and on click on mobile devices.

```

import { Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu trigger="click-hover" openDelay={100} closeDelay={400}>
      {/* ... menu items */}
    </Menu>
  );
}
```

## Disabled items

```

import { Menu, Button, rem } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

function Demo() {
  return (
    <Menu>
      <Menu.Target>
        <Button>Toggle menu</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          leftSection={<IconSearch style={{ width: rem(14), height: rem(14) }} />}
          disabled
        >
          Search
        </Menu.Item>

        {/* Other items ... */}
      </Menu.Dropdown>
    </Menu>
  );
}
```

## Dropdown position

```

import { Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu{{props}}>
      {/* Menu items */}
    </Menu>
  );
}
```

## Transitions

Menu dropdown can be animated with any of premade transitions from Transition component:

```

import { Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu transitionProps={{ transition: 'rotate-right', duration: 150 }}>
      {/* Menu content */}
    </Menu>
  );
}
```

## Custom component as Menu.Item

By default, `Menu.Item` renders as button element, to change that set `component` prop:

```

import { Menu, Button, rem } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';

function Demo() {
  return (
    <Menu width={200} shadow="md">
      <Menu.Target>
        <Button>Toggle menu</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item component="a" href="https://mantine.dev">
          Mantine website
        </Menu.Item>
        <Menu.Item
          leftSection={<IconExternalLink style={{ width: rem(14), height: rem(14) }} />}
          component="a"
          href="https://mantine.dev"
          target="_blank"
        >
          External link
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
```

Note that the component you pass to `component` prop should allow spreading props to its root element:

```tsx
import { Menu } from '@mantine/core';

// ❌ Will not work with Menu.Item
function IncorrectItem() {
  return <button type="button">My custom Menu item</button>;
}

// ✅ Will work correctly with Menu.Item
function CorrectItem(
  props: React.ComponentPropsWithoutRef<'button'>
) {
  return (
    <button type="button" {...props}>
      My custom Menu item
    </button>
  );
}

function Demo() {
  // ❌ Will not work
  const incorrect = <Menu.Item component={IncorrectItem} />;

  // ✅ Will work
  const correct = <Menu.Item component={CorrectItem} />;
}
```

## Custom component as target

```

import { forwardRef } from 'react';
import { IconChevronRight } from '@tabler/icons-react';
import { Group, Avatar, Text, Menu, UnstyledButton } from '@mantine/core';

interface UserButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  image: string;
  name: string;
  email: string;
  icon?: React.ReactNode;
}

const UserButton = forwardRef<HTMLButtonElement, UserButtonProps>(
  ({ image, name, email, icon, ...others }: UserButtonProps, ref) => (
    <UnstyledButton
      ref={ref}
      style={{
        padding: 'var(--mantine-spacing-md)',
        color: 'var(--mantine-color-text)',
        borderRadius: 'var(--mantine-radius-sm)',
      }}
      {...others}
    >
      <Group>
        <Avatar src={image} radius="xl" />

        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500}>
            {name}
          </Text>

          <Text c="dimmed" size="xs">
            {email}
          </Text>
        </div>

        {icon || <IconChevronRight size="1rem" />}
      </Group>
    </UnstyledButton>
  )
);

function Demo() {
  return (
    <Menu withArrow>
      <Menu.Target>
        <UserButton
          image="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
          name="Harriette Spoonlicker"
          email="hspoonlicker@outlook.com"
        />
      </Menu.Target>
      {/* ... menu items */}
    </Menu>
  );
}
```

```

import { Menu } from '@mantine/core';

function Demo() {
  return (
    <Menu {...props} opened withArrow position="left">
      {/* ... menu items */}
    </Menu>
  );
}
```

## Accessibility

Menu follows WAI-ARIA recommendations:

-   Dropdown element has `role="menu"` and `aria-labelledby="target-id"` attributes
-   Target element has `aria-haspopup="menu"`, `aria-expanded`, `aria-controls="dropdown-id"` attributes
-   Menu item has `role="menuitem"` attribute

### Supported target elements

Uncontrolled Menu with `trigger="click"` (default) will be accessible only when used with `button` element or component that renders it (Button, ActionIcon, etc.). Other elements will not support `Space` and `Enter` key presses.

### Hover menu

Menu with `trigger="hover"` is not accessible – it cannot be accessed with keyboard, use it only if you do not care about accessibility. If you need click-hover hover and click triggers, use `trigger="click-hover"`.

### Navigation

If you are using the Menu to build a Navigation, you can use the options from the demo below to follow the WAI-ARIA recommendations for navigation.

```

import { Group, Menu } from '@mantine/core';

function Demo() {
  const menus = Array(4)
    .fill(0)
    .map((e, i) => (
      <Menu
        key={i}
        trigger="click-hover"
        loop={false}
        withinPortal={false}
        trapFocus={false}
        menuItemTabIndex={0}
      >
        {/* ... menu items */}
      </Menu>
    ));
  return <Group>{menus}</Group>;
}
```

### Keyboard interactions

If you also need to support `Tab` and `Shift + Tab` then set `menuItemTabIndex={0}`.## Usage

```

import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication">
        {/* Modal content */}
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}
```

## Center modal vertically

```

import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication" centered>
        {/* Modal content */}
      </Modal>

      <Button onClick={open}>Open centered Modal</Button>
    </>
  );
}
```

## Remove header

To remove header set `withCloseButton={false}`:

```

import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} withCloseButton={false}>
        Modal without header, press escape or click on overlay to close
      </Modal>

      <Button onClick={open}>Open Modal</Button>
    </>
  );
}

```

## Change size

You can change modal width by setting `size` prop to predefined size or any valid width, for example, `55%` or `50rem`. `Modal` width cannot exceed `100vw`.

## Size auto

`Modal` with `size="auto"` will have width to fit its content:

```

import { useDisclosure, useCounter } from '@mantine/hooks';
import { Modal, Button, Group, Text, Badge } from '@mantine/core';

function Demo() {
  const [opened, { close, open }] = useDisclosure(false);
  const [count, { increment, decrement }] = useCounter(3, { min: 0 });

  const badges = Array(count)
    .fill(0)
    .map((_, index) => <Badge key={index}>Badge {index}</Badge>);

  return (
    <>
      <Modal opened={opened} onClose={close} size="auto" title="Modal size auto">
        <Text>Modal with size auto will fits its content</Text>

        <Group wrap="nowrap" mt="md">
          {badges}
        </Group>

        <Group mt="xl">
          <Button onClick={increment}>Add badge</Button>
          <Button onClick={decrement}>Remove badge</Button>
        </Group>
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}
```

## Fullscreen

Fullscreen modal will take the entire screen, it is usually better to change transition to `fade` when `fullScreen` prop is set:

```

import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="This is a fullscreen modal"
        fullScreen
        radius={0}
        transitionProps={{ transition: 'fade', duration: 200 }}
      >
        {/* Modal content */}
      </Modal>

      <Button onClick={open}>Open Modal</Button>
    </>
  );
}
```

To switch Modal to fullscreen on devices with small screens only use use-media-query hook. `size` prop is ignored if `fullScreen` prop is set:

```

import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery('(max-width: 50em)');

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="This is a fullscreen modal"
        fullScreen={isMobile}
        transitionProps={{ transition: 'fade', duration: 200 }}
      >
        The Modal will be full screen only on mobile
      </Modal>

      <Button onClick={open}>Open Modal</Button>
    </>
  );
}
```

## Customize overlay

`Modal` uses Overlay component, you can set any props that Overlay supports with `overlayProps`:

```

import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Authentication"
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        {/* Modal content */}
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}
```

## Modal with scroll

```

import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  const content = Array(100)
    .fill(0)
    .map((_, index) => <p key={index}>Modal with scroll</p>);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Header is sticky">
        {content}
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}
```

## Usage with ScrollArea

```

import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, ScrollArea } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  const content = Array(100)
    .fill(0)
    .map((_, index) => <p key={index}>Modal with scroll</p>);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Header is sticky"
        scrollAreaComponent={ScrollArea.Autosize}
      >
        {content}
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}
```

## Change offsets

Use `xOffset`/`yOffset` to configure horizontal/vertical content offsets:

```

import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication" yOffset="1vh" xOffset={0}>
        {/* Modal content */}
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}
```

## Change transitions

`Modal` is built with Transition component. Use `transitionProps` prop to customize any Transition properties:

```

import { useState } from 'react';
import { Modal, Group, Button } from '@mantine/core';

function Demo() {
  const [noTransitionOpened, setNoTransitionOpened] = useState(false);
  const [slowTransitionOpened, setSlowTransitionOpened] = useState(false);

  return (
    <>
      <Modal
        opened={slowTransitionOpened}
        onClose={() => setSlowTransitionOpened(false)}
        title="Please consider this"
        transitionProps={{ transition: 'rotate-left' }}
      >
        rotate-left transition
      </Modal>

      <Modal
        opened={noTransitionOpened}
        onClose={() => setNoTransitionOpened(false)}
        title="Please consider this"
        transitionProps={{ transition: 'fade', duration: 600, timingFunction: 'linear' }}
      >
        fade transition 600ms linear transition
      </Modal>

      <Group justify="center">
        <Button onClick={() => setSlowTransitionOpened(true)} variant="default">
          Rotate left transition
        </Button>
        <Button onClick={() => setNoTransitionOpened(true)} variant="default">
          Fade transition
        </Button>
      </Group>
    </>
  );
}
```

## Initial focus

Modal uses FocusTrap to trap focus. Add `data-autofocus` attribute to the element that should receive initial focus.

```

import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, TextInput } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Focus demo">
        <TextInput label="First input" placeholder="First input" />
        <TextInput
          data-autofocus
          label="Input with initial focus"
          placeholder="It has data-autofocus attribute"
          mt="md"
        />
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}
```

If you do not want to focus any elements when the modal is opened, use `FocusTrap.InitialFocus` component to create a visually hidden element that will receive initial focus:

```

import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, TextInput, FocusTrap } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Focus demo">
        <FocusTrap.InitialFocus />
        <TextInput label="First input" placeholder="First input" />
        <TextInput
          data-autofocus
          label="Input with initial focus"
          placeholder="It has data-autofocus attribute"
          mt="md"
        />
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}
```

If you do not add `data-autofocus` attribute and do not use `FocusTrap.InitialFocus`, modal will focus the first focusable element inside it which is usually the close button.

## Control behavior

The following props can be used to control `Modal` behavior. In most cases, it is not recommended to turn these features off – it will make the component less accessible.

-   `trapFocus` – determines whether focus should be trapped inside modal
-   `closeOnEscape` – determines whether the modal should be closed when `Escape` key is pressed
-   `closeOnClickOutside` – determines whether the modal should be closed when user clicks on the overlay
-   `returnFocus` – determines whether focus should be returned to the element that was focused before the modal was opened

## react-remove-scroll settings

`Modal` uses react-remove-scroll package to lock scroll. You can pass props down to the `RemoveScroll` component with `removeScrollProps`:

```tsx
import { Modal } from '@mantine/core';

function Demo() {
  return (
    <Modal
      removeScrollProps={{ allowPinchZoom: true }}
      opened
      onClose={() => {}}
    />
  );
}
```

## Change close icon

Use `closeButtonProps` to customize close button:

```

import { IconXboxX } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Authentication"
        closeButtonProps={{
          icon: <IconXboxX size={20} stroke={1.5} />,
        }}
      >
        {/* Modal content */}
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}
```

## Compound components

You can use the following compound components to have full control over the `Modal` rendering:

-   `Modal.Root` – context provider
-   `Modal.Overlay` – render Overlay
-   `Modal.Content` – main modal element, should include all modal content
-   `Modal.Header` – sticky header, usually contains `Modal.Title` and `Modal.CloseButton`
-   `Modal.Title` – `h2` element, `aria-labelledby` of `Modal.Content` is pointing to this element, usually is rendered inside `Modal.Header`
-   `Modal.CloseButton` – close button, usually rendered inside `Modal.Header`
-   `Modal.Body` – a place for main content, `aria-describedby` of `Modal.Content` is pointing to this element

```

import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal.Root opened={opened} onClose={close}>
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body>Modal content</Modal.Body>
        </Modal.Content>
      </Modal.Root>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}
```

## Fixed elements offset

`Modal` component uses react-remove-scroll package to lock scroll. To properly size these `elements` add a `className` to them (documentation):

```tsx
import { RemoveScroll } from '@mantine/core';

function Demo() {
  return (
    <>
      <div className={RemoveScroll.classNames.fullWidth}>
        width: 100%
      </div>
      <div className={RemoveScroll.classNames.zeroRight}>
        right: 0
      </div>
    </>
  );
}
```

## Accessibility

`Modal` component follows WAI-ARIA recommendations on accessibility.

Set `title` props to make component accessible, will add `aria-labelledby` to the content element:

```tsx
import { Modal } from '@mantine/core';

function Demo() {
  return <Modal title="Modal label" opened onClose={() => {}} />;
}
```

To set close button `aria-label` use `closeButtonProps`:

```tsx
import { Modal } from '@mantine/core';

function Demo() {
  return (
    <Modal
      closeButtonProps={{ 'aria-label': 'Close modal' }}
      opened
      onClose={() => {}}
    />
  );
}
```## Usage

`MultiSelect` provides a way to enter multiple values. `MultiSelect` is similar to TagsInput, but it does not allow entering custom values.

```

import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
  );
}
```

## Controlled

`MultiSelect` value must be an array of strings, other types are not supported. `onChange` function is called with an array of strings as a single argument.

```tsx
import { useState } from 'react';
import { MultiSelect } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<string[]>([]);
  return <MultiSelect data={[]} value={value} onChange={setValue} />;
}
```

## Clearable

Set `clearable` prop to display the clear button in the right section. The button is not displayed when:

-   The component does not have a value
-   The component is disabled
-   The component is read only

```

import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      defaultValue={['React']}
      clearable
    />
  );
}
```

## Searchable

Set `searchable` prop to allow filtering options by user input:

```

import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      searchable
    />
  );
}
```

## Controlled search value

You can control search value with `searchValue` and `onSearchChange` props:

```tsx
import { useState } from 'react';
import { MultiSelect } from '@mantine/core';

function Demo() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <MultiSelect
      searchable
      searchValue={searchValue}
      onSearchChange={setSearchValue}
      data={[]}
    />
  );
}
```

## Nothing found

Set the `nothingFoundMessage` prop to display a given message when no options match the search query or there is no data available. If the `nothingFoundMessage` prop is not set, the `MultiSelect` dropdown will be hidden.

```

import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      searchable
      nothingFoundMessage="Nothing found..."
    />
  );
}
```

## Checked option icon

Set `checkIconPosition` prop to `left` or `right` to control position of check icon in active option. To remove the check icon, set `withCheckIcon={false}`.

```

import { MultiSelect } from '@mantine/core';


function Demo() {
  return (
    <MultiSelect
      {{props}}
      data={['React', 'Angular', 'Svelte', 'Vue']}
      dropdownOpened
      pb={150}
      label="Control check icon"
      placeholder="Pick value"
      defaultValue={["React"]}
    />
  );
}
```

## Max selected values

You can limit the number of selected values with `maxValues` prop. This will not allow adding more values once the limit is reached.

```

import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Select up to 2 libraries"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      maxValues={2}
    />
  );
}
```

## Hide selected options

To remove selected options from the list of available options, set `hidePickedOptions` prop:

```

import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      hidePickedOptions
    />
  );
}
```

```

import { MultiSelect, ComboboxItem, OptionsFilter } from '@mantine/core';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const splittedSearch = search.toLowerCase().trim().split(' ');
  return (options as ComboboxItem[]).filter((option) => {
    const words = option.label.toLowerCase().trim().split(' ');
    return splittedSearch.every((searchWord) => words.some((word) => word.includes(searchWord)));
  });
};

function Demo() {
  return (
    <MultiSelect
      label="What countries have you visited?"
      placeholder="Pick values"
      data={['Great Britain', 'Russian Federation', 'United States']}
      filter={optionsFilter}
      searchable
    />
  );
}
```

## Sort options

By default, options are sorted by their position in the data array. You can change this behavior with `filter` function:

```

import { MultiSelect, ComboboxItem, OptionsFilter } from '@mantine/core';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const filtered = (options as ComboboxItem[]).filter((option) =>
    option.label.toLowerCase().trim().includes(search.toLowerCase().trim())
  );

  filtered.sort((a, b) => a.label.localeCompare(b.label));
  return filtered;
};

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick values"
      data={['4 – React', '1 – Angular', '3 – Vue', '2 – Svelte']}
      filter={optionsFilter}
      searchable
    />
  );
}
```

```

import { MultiSelect } from '@mantine/core';

const largeData = Array(100_000)
  .fill(0)
  .map((_, index) => `Option ${index}`);

function Demo() {
  return (
    <MultiSelect
      label="100 000 options autocomplete"
      placeholder="Use limit to optimize performance"
      limit={5}
      data={largeData}
      searchable
    />
  );
}
```

## renderOption

`renderOption` callback allows you to customize option rendering. It is called with option object and checked state. The function must return a React node.

```

import { MultiSelect, MultiSelectProps, Avatar, Group, Text } from '@mantine/core';

const usersData: Record<string, { image: string; email: string }> = {
  'Emily Johnson': {
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png',
    email: 'emily92@gmail.com',
  },
  'Ava Rodriguez': {
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png',
    email: 'ava_rose@gmail.com',
  },
  'Olivia Chen': {
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png',
    email: 'livvy_globe@gmail.com',
  },
  'Ethan Barnes': {
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
    email: 'ethan_explorer@gmail.com',
  },
  'Mason Taylor': {
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
    email: 'mason_musician@gmail.com',
  },
};

const renderMultiSelectOption: MultiSelectProps['renderOption'] = ({ option }) => (
  <Group gap="sm">
    <Avatar src={usersData[option.value].image} size={36} radius="xl" />
    <div>
      <Text size="sm">{option.value}</Text>
      <Text size="xs" opacity={0.5}>
        {usersData[option.value].email}
      </Text>
    </div>
  </Group>
);

function Demo() {
  return (
    <MultiSelect
      data={['Emily Johnson', 'Ava Rodriguez', 'Olivia Chen', 'Ethan Barnes', 'Mason Taylor']}
      renderOption={renderMultiSelectOption}
      maxDropdownHeight={300}
      label="Employees of the month"
      placeholder="Search for employee"
    />
  );
}
```

## Scrollable dropdown

By default, the options list is wrapped with ScrollArea.Autosize. You can control dropdown max-height with `maxDropdownHeight` prop if you do not change the default settings.

If you want to use native scrollbars, set `withScrollArea={false}`. Note that in this case, you will need to change dropdown styles with Styles API.

```

import { MultiSelect } from '@mantine/core';

const data = Array(100)
  .fill(0)
  .map((_, index) => `Option ${index}`);

function Demo() {
  return (
    <>
      <MultiSelect
        label="With scroll area (default)"
        placeholder="Pick value"
        data={data}
        maxDropdownHeight={200}
      />

      <MultiSelect
        label="With native scroll"
        placeholder="Pick value"
        data={data}
        withScrollArea={false}
        styles={{ dropdown: { maxHeight: 200, overflowY: 'auto' } }}
        mt="md"
      />
    </>
  );
}
```

## Group options

```

import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={[
        { group: 'Frontend', items: ['React', 'Angular'] },
        { group: 'Backend', items: ['Express', 'Django'] },
      ]}
    />
  );
}
```

## Disabled options

When option is disabled, it cannot be selected and is ignored in keyboard navigation. Note that user can still enter disabled option as a value. If you want to prohibit certain values, use controlled component and filter them out in `onChange` function.

```

import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={[
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'vue', label: 'Vue', disabled: true },
        { value: 'svelte', label: 'Svelte', disabled: true },
      ]}
    />
  );
}
```

## Inside Popover

To use `MultiSelect` inside popover, you need to set `withinPortal: false`:

```

import { Popover, Button, MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <Popover width={300} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <MultiSelect
          label="Your favorite libraries"
          placeholder="Pick values"
          data={['React', 'Angular', 'Vue', 'Svelte']}
          comboboxProps={{ withinPortal: false }}
        />
      </Popover.Dropdown>
    </Popover>
  );
}
```

## Control dropdown opened state

You can control dropdown opened state with `dropdownOpened` prop. Additionally, you can use `onDropdownClose` and `onDropdownOpen` to listen to dropdown opened state changes.

```

import { MultiSelect, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [dropdownOpened, { toggle }] = useDisclosure();
  return (
    <>
      <Button onClick={toggle} mb="md">
        Toggle dropdown
      </Button>

      <MultiSelect
        label="Your favorite library"
        placeholder="Pick values"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        dropdownOpened={dropdownOpened}
      />
    </>
  );
}
```

## Dropdown position

By default, the dropdown is displayed below the input if there is enough space; otherwise it is displayed above the input. You can change this behavior by setting `position` and `middlewares` props, which are passed down to the underlying Popover component.

Example of dropdown that is always displayed above the input:

```

import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick values"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ position: 'top', middlewares: { flip: false, shift: false } }}
    />
  );
}
```

## Dropdown width

To change dropdown width, set `width` prop in `comboboxProps`. By default, dropdown width is equal to the input width.

```

import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ width: 200, position: 'bottom-start' }}
    />
  );
}
```

## Dropdown offset

To change dropdown offset, set `offset` prop in `comboboxProps`:

```

import { MultiSelect } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite library"
      placeholder="Pick values"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      classNames={classes}
      comboboxProps={{ position: 'bottom', middlewares: { flip: false, shift: false }, offset: 0 }}
    />
  );
}
```

## Dropdown animation

By default, dropdown animations are disabled. To enable them, you can set `transitionProps`, which will be passed down to the underlying Transition component.

```

import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick values"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
    />
  );
}
```

## Dropdown padding

```

import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <>
      <MultiSelect
        label="Zero padding"
        placeholder="Pick value or enter anything"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        comboboxProps={{ dropdownPadding: 0 }}
      />
      <MultiSelect
        mt="md"
        label="10px padding"
        placeholder="Pick value or enter anything"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        comboboxProps={{ dropdownPadding: 10 }}
      />
    </>
  );
}
```

## Dropdown shadow

```

import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick values"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ shadow: 'md' }}
    />
  );
}
```

```

import { MultiSelect, rem } from '@mantine/core';
import { IconComponents } from '@tabler/icons-react';

function Demo() {
  const icon = <IconComponents style={{ width: rem(16), height: rem(16) }} />;
  return (
    <>
      <MultiSelect
        data={['React', 'Angular', 'Vue']}
        leftSectionPointerEvents="none"
        leftSection={icon}
        label="Your favorite libraries"
        placeholder="Your favorite libraries"
      />
      <MultiSelect
        mt="md"
        data={['React', 'Angular', 'Vue']}
        rightSectionPointerEvents="none"
        rightSection={icon}
        label="Your favorite libraries"
        placeholder="Your favorite libraries"
      />
    </>
  );
}
```

## Input props

```

import { MultiSelect } from '@mantine/core';


function Demo() {
  return (
    <MultiSelect
      {{props}}
      placeholder="MultiSelect placeholder"
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
  );
}
```

## Read only

Set `readOnly` to make the input read only. When `readOnly` is set, `MultiSelect` will not show suggestions and will not call `onChange` function.

```

import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      readOnly
    />
  );
}
```

## Disabled

Set `disabled` to disable the input. When `disabled` is set, user cannot interact with the input and `MultiSelect` will not show suggestions.

```

import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      disabled
    />
  );
}
```

## Error state

```

import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <>
      <MultiSelect
        label="Boolean error"
        placeholder="Boolean error"
        error
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
      <MultiSelect
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
    </>
  );
}
```

```

import { IconAt } from '@tabler/icons-react';
import { MultiSelect, rem } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
     {{props}}
      leftSection={<IconAt style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
      label="MultiSelect"
      description="Description"
      error="Error"
      placeholder="MultiSelect"
      defaultValue={['React', 'Angular']}
      data={[
        { group: 'Frontend', items: ['React', 'Angular'] },
        { group: 'Backend', items: ['Node', 'Django'] },
      ]}
    />
  );
}
```

To set `aria-label` on the clear button, use `clearButtonProps`. Note that it is required only when `clearable` is set.

```tsx
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      data={[]}
      clearable
      clearButtonProps={{
        'aria-label': 'Clear input',
      }}
    />
  );
}
```## Usage

```

import { NativeSelect } from '@mantine/core';

function Demo() {
  return <NativeSelect{{props}} data={['React', 'Angular', 'Vue']} />;
}
```

## Controlled

```tsx
import { useState } from 'react';
import { NativeSelect } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('');

  return (
    <NativeSelect
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      data={['React', 'Angular', 'Svelte', 'Vue']}
    />
  );
}
```

## Adding options

`NativeSelect` allows passing options in two ways:

-   `data` prop array
-   `children` prop with `option` components

Note that if `children` is used, `data` will be ignored.

### data prop

`data` prop accepts values in one of the following formats:

1.  Array of strings:

```tsx
import { NativeSelect } from '@mantine/core';

function Demo() {
  return (
    <NativeSelect data={['React', 'Angular', 'Svelte', 'Vue']} />
  );
}
```

2.  Array of objects with `label`, `value` and `disabled` keys:

```tsx
import { NativeSelect } from '@mantine/core';

function Demo() {
  return (
    <NativeSelect
      data={[
        { label: 'React', value: 'react' },
        { label: 'Angular', value: 'angular' },
        { label: 'Svelte', value: 'svelte', disabled: true },
        { label: 'Vue', value: 'vue' },
      ]}
    />
  );
}
```

3.  Array of grouped options (string format):

```tsx
import { NativeSelect } from '@mantine/core';

function Demo() {
  return (
    <NativeSelect
      data={[
        {
          group: 'Frontend libraries',
          items: ['React', 'Angular', 'Svelte', 'Vue'],
        },
        {
          group: 'Backend libraries',
          items: ['Express', 'Koa', 'Django'],
        },
      ]}
    />
  );
}
```

4.  Array of grouped options (object format):

```tsx
import { NativeSelect } from '@mantine/core';

function Demo() {
  return (
    <NativeSelect
      data={[
        {
          group: 'Frontend libraries',
          items: [
            { label: 'React', value: 'react' },
            { label: 'Angular', value: 'angular' },
            { label: 'Vue', value: 'vue', disabled: true },
          ],
        },
        {
          group: 'Backend libraries',
          items: [
            { label: 'Express', value: 'express' },
            { label: 'Koa', value: 'koa' },
            { label: 'Django', value: 'django' },
          ],
        },
      ]}
    />
  );
}
```

Example of `data` prop with array of grouped options:

```

import { NativeSelect } from '@mantine/core';

function Demo() {
  return (
    <NativeSelect
      data={[
        {
          group: 'Frontend libraries',
          items: [
            { label: 'React', value: 'react' },
            { label: 'Angular', value: 'angular' },
            { label: 'Vue', value: 'vue', disabled: true },
          ],
        },
        {
          group: 'Backend libraries',
          items: [
            { label: 'Express', value: 'express' },
            { label: 'Koa', value: 'koa' },
            { label: 'Django', value: 'django' },
          ],
        },
      ]}
    />
  );
}
```

### children options

To add options with `children` prop, use `option` elements to add options and `optgroup` elements to group them:

```

import { NativeSelect } from '@mantine/core';

function Demo() {
  return (
    <NativeSelect label="With children options">
      <optgroup label="Frontend libraries">
        <option value="react">React</option>
        <option value="angular">Angular</option>
        <option value="vue" disabled>
          Vue
        </option>
      </optgroup>

      <optgroup label="Backend libraries">
        <option value="express">Express</option>
        <option value="koa">Koa</option>
        <option value="django">Django</option>
      </optgroup>
    </NativeSelect>
  );
}
```

## With dividers

Use `hr` tags to add dividers between options:

```

import { NativeSelect } from '@mantine/core';

function Demo() {
  return (
    <NativeSelect label="With dividers">
      <option>Select library</option>

      <hr />

      <optgroup label="Frontend libraries">
        <option value="react">React</option>
        <option value="angular">Angular</option>
        <option value="vue">Vue</option>
      </optgroup>

      <hr />

      <optgroup label="Backend libraries">
        <option value="express">Express</option>
        <option value="koa">Koa</option>
        <option value="django">Django</option>
      </optgroup>
    </NativeSelect>
  );
}
```

```

import { NativeSelect, rem } from '@mantine/core';
import { IconChevronDown, IconHash } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <NativeSelect
        leftSection={<IconHash style={{ width: rem(16), height: rem(16) }} />}
        leftSectionPointerEvents="none"
        label="Left section"
        data={['React', 'Angular']}
      />

      <NativeSelect
        rightSection={<IconChevronDown style={{ width: rem(16), height: rem(16) }} />}
        label="Right section"
        data={['React', 'Angular']}
        mt="md"
      />
    </>
  );
}
```

## Disabled state

```

import { NativeSelect } from '@mantine/core';

function Demo() {
  return <NativeSelect disabled data={['React', 'Angular']} label="Disabled NativeSelect" />;
}
```

## Error state

```

import { NativeSelect } from '@mantine/core';

function Demo() {
  return (
    <>
      <NativeSelect error label="Boolean error" data={['React', 'Angular']} />
      <NativeSelect
        error="Error message"
        label="React node error"
        data={['React', 'Angular']}
        mt="md"
      />
    </>
  );
}
```

```

import { NativeSelect } from '@mantine/core';

function Demo() {
  return <NativeSelect{{props}} data={['React', 'Angular']} label="NativeSelect label" description="NativeSelect description" error="NativeSelect error" withAsterisk />;
}
```## Usage

```

import { Badge, NavLink } from '@mantine/core';
import { IconHome2, IconGauge, IconChevronRight, IconActivity, IconCircleOff } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <NavLink
        href="#required-for-focus"
        label="With icon"
        leftSection={<IconHome2 size="1rem" stroke={1.5} />}
      />
      <NavLink
        href="#required-for-focus"
        label="With right section"
        leftSection={<IconGauge size="1rem" stroke={1.5} />}
        rightSection={
          <IconChevronRight size="0.8rem" stroke={1.5} className="mantine-rotate-rtl" />
        }
      />
      <NavLink
        href="#required-for-focus"
        label="Disabled"
        leftSection={<IconCircleOff size="1rem" stroke={1.5} />}
        disabled
      />
      <NavLink
        href="#required-for-focus"
        label="With description"
        description="Additional information"
        leftSection={
          <Badge size="xs" color="red" circle>
            3
          </Badge>
        }
      />
      <NavLink
        href="#required-for-focus"
        label="Active subtle"
        leftSection={<IconActivity size="1rem" stroke={1.5} />}
        rightSection={
          <IconChevronRight size="0.8rem" stroke={1.5} className="mantine-rotate-rtl" />
        }
        variant="subtle"
        active
      />
      <NavLink
        href="#required-for-focus"
        label="Active light"
        leftSection={<IconActivity size="1rem" stroke={1.5} />}
        rightSection={
          <IconChevronRight size="0.8rem" stroke={1.5} className="mantine-rotate-rtl" />
        }
        active
      />
      <NavLink
        href="#required-for-focus"
        label="Active filled"
        leftSection={<IconActivity size="1rem" stroke={1.5} />}
        rightSection={
          <IconChevronRight size="0.8rem" stroke={1.5} className="mantine-rotate-rtl" />
        }
        variant="filled"
        active
      />
    </>
  );
}
```

## Active

Set `active` prop to add active styles to `NavLink`.

Note that if you’re using a React Router or Remix `NavLink` inside `renderRoot`, the active styles will be based on the [`aria-current` attribute that’s set by React Router](https://reactrouter.com/en/main/components/nav-link#aria-current) so you won’t need to explicitly set the `active` prop.

You can customize active styles with `color` and `variant` props:

```

import { useState } from 'react';
import { IconGauge, IconFingerprint, IconActivity, IconChevronRight } from '@tabler/icons-react';
import { Box, NavLink } from '@mantine/core';

const data = [
  { icon: IconGauge, label: 'Dashboard', description: 'Item with description' },
  {
    icon: IconFingerprint,
    label: 'Security',
    rightSection: <IconChevronRight size="1rem" stroke={1.5} />,
  },
  { icon: IconActivity, label: 'Activity' },
];

function Demo() {
  const [active, setActive] = useState(0);

  const items = data.map((item, index) => (
    <NavLink
      href="#required-for-focus"
      key={item.label}
      active={index === active}
      label={item.label}
      description={item.description}
      rightSection={item.rightSection}
      leftSection={<item.icon size="1rem" stroke={1.5} />}
      onClick={() => setActive(index)}
      {{props}}
    />
  ));

  return <Box w={220}>{items}</Box>;
}
```

```

import { NavLink } from '@mantine/core';

function Demo() {
  return (
    <>
      <NavLink color="lime.4" variant="filled" active label="Default" />
      <NavLink color="lime.4" variant="filled" active autoContrast label="Auto contrast" />
    </>
  );
}
```

## Nested NavLinks

To create nested links put `NavLink` as children of another `NavLink`:

```

import { NavLink } from '@mantine/core';
import { IconGauge, IconFingerprint } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <NavLink
        href="#required-for-focus"
        label="First parent link"
        leftSection={<IconGauge size="1rem" stroke={1.5} />}
        childrenOffset={28}
      >
        <NavLink href="#required-for-focus" label="First child link" />
        <NavLink label="Second child link" href="#required-for-focus" />
        <NavLink label="Nested parent link" childrenOffset={28} href="#required-for-focus">
          <NavLink label="First child link" href="#required-for-focus" />
          <NavLink label="Second child link" href="#required-for-focus" />
          <NavLink label="Third child link" href="#required-for-focus" />
        </NavLink>
      </NavLink>

      <NavLink
        href="#required-for-focus"
        label="Second parent link"
        leftSection={<IconFingerprint size="1rem" stroke={1.5} />}
        childrenOffset={28}
        defaultOpened
      >
        <NavLink label="First child link" href="#required-for-focus" />
        <NavLink label="Second child link" href="#required-for-focus" />
        <NavLink label="Third child link" href="#required-for-focus" />
      </NavLink>
    </>
  );
}
```## Usage

Notification is a base component for notification system. Build your own or use @mantine/notifications package.

```

import { Notification } from '@mantine/core';

function Demo() {
  return (
    <Notification{{props}}>
      {{children}}
    </Notification>
  );
}
```

## With icon

```

import { IconX, IconCheck } from '@tabler/icons-react';
import { Notification, rem } from '@mantine/core';

function Demo() {
  const xIcon = <IconX style={{ width: rem(20), height: rem(20) }} />;
  const checkIcon = <IconCheck style={{ width: rem(20), height: rem(20) }} />;

  return (
    <>
      <Notification icon={xIcon} color="red" title="Bummer!">
        Something went wrong
      </Notification>
      <Notification icon={checkIcon} color="teal" title="All good!" mt="md">
        Everything is fine
      </Notification>
    </>
  );
}
```

```

import { Notification } from '@mantine/core';

function Demo() {
  return (
    <Notification{{props}} title="We notify you that">
      You are now obligated to give a star to Mantine project on GitHub
    </Notification>
  );
}
```

## Accessibility

To support screen readers, set close button aria-label or title with `closeButtonProps`:

```tsx
import { Notification } from '@mantine/core';

function Demo() {
  return (
    <Notification
      closeButtonProps={{ 'aria-label': 'Hide notification' }}
    />
  );
}
```## Usage

Use `NumberFormatter` to format numbers. It supports the same formatting related props as NumberInput component.

```

import { NumberFormatter } from '@mantine/core';

function Demo() {
  return <NumberFormatter prefix="$ " value={1000000} thousandSeparator />;
}
```

## Prefix and suffix

Set `prefix` and `suffix` props to add given string to the start or end of the value:

```

import { NumberFormatter } from '@mantine/core';

function Demo() {
  return (
    <>
      <div>
        With prefix: <NumberFormatter prefix="$ " value={100} />
      </div>
      <div>
        With suffix: <NumberFormatter value={100} suffix=" RUB" />
      </div>
    </>
  );
}
```

## Thousands separator

Set `thousandSeparator` prop to separate thousands with a character. You can control grouping logic with `thousandsGroupStyle`, it accepts: `thousand`, `lakh`, `wan`, `none` values.

```

import { NumberFormatter } from '@mantine/core';

function Demo() {
  return (
    <>
      <div>
        With default separator: <NumberFormatter thousandSeparator value={1000000} />
      </div>
      <div>
        With custom separator:{' '}
        <NumberFormatter thousandSeparator="." decimalSeparator="," value={1000000} />
      </div>
    </>
  );
}
```

## Decimal scale

`decimalScale` prop controls the number of allowed decimal places:

```

import { NumberFormatter } from '@mantine/core';

function Demo() {
  return <NumberFormatter value={5 / 3} decimalScale={2} />;
}
```## Usage

`NumberInput` is based on react-number-format. It supports most of the props from the `NumericFormat` component in the original package.

```

import { NumberInput } from '@mantine/core';


function Demo() {
  return (
    <NumberInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
```

## Controlled

```tsx
import { useState } from 'react';
import { NumberInput } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<string | number>('');
  return <NumberInput value={value} onChange={setValue} />;
}
```

## Value type

`value`, `defaultValue` and `onChange` props can be either string or number. In all cases when `NumberInput` value can be represented as a number, `onChange` function is called with a number (for example `55`, `1.28`, `-100`, etc.). But there are several cases when it is not possible to represent value as a number:

-   Empty state is represented as an empty string – `''`
-   Numbers that are larger than `Number.MAX_SAFE_INTEGER` or smaller than `Number.MIN_SAFE_INTEGER` are represented as strings – `'90071992547409910'`
-   Numbers that consist of only multiple zeros are represented as strings – `0.`, `0.0`, `-0.00`, etc.

## min and max

Set `min` and `max` props to limit the input value:

```

import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="Enter value between 10 and 20"
      placeholder="Don't enter more than 20 and less than 10"
      min={10}
      max={20}
    />
  );
}
```

## Clamp behavior

By default, the value is clamped when the input is blurred. If you set `clampBehavior="strict"`, it will not be possible to enter value outside of min/max range. Note that this option may cause issues if you have tight `min` and `max`, for example `min={10}` and `max={20}`. If you need to disable value clamping entirely, set `clampBehavior="none"`.

```

import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="You cannot enter number less than 0 or greater than 100"
      placeholder="You cannot enter number less than 0 or greater than 100"
      clampBehavior="strict"
      min={0}
      max={100}
    />
  );
}
```

## Prefix and suffix

Set `prefix` and `suffix` props to add given string to the start or end of the input value:

```

import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <NumberInput
        label="With prefix"
        placeholder="Dollars"
        prefix="$"
        defaultValue={100}
        mb="md"
      />
      <NumberInput
        label="With suffix"
        placeholder="Percents"
        suffix="%"
        defaultValue={100}
        mt="md"
      />
    </>
  );
}
```

## Negative numbers

By default, negative numbers are allowed. Set `allowNegative={false}` to allow only positive numbers.

```

import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="Negative number are not allowed"
      placeholder="Do not enter negative numbers"
      allowNegative={false}
    />
  );
}
```

## Decimal numbers

By default, decimal numbers are allowed. Set `allowDecimal={false}` to allow only integers.

```

import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="Decimals are not allowed"
      placeholder="Do not enter decimal numbers"
      allowDecimal={false}
    />
  );
}
```

## Decimal scale

`decimalScale` controls how many decimal places are allowed:

```

import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="You can enter only 2 digits after decimal point"
      placeholder="Do not enter more that 2"
      decimalScale={2}
    />
  );
}
```

## Fixed decimal scale

Set `fixedDecimalScale` to always display fixed number of decimal places:

```

import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="Always show 2 digits after decimal point"
      placeholder="Do not enter more that 2"
      decimalScale={2}
      fixedDecimalScale
      defaultValue={2.2}
    />
  );
}
```

## Decimal separator

Set `decimalSeparator` to change decimal separator character:

```

import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="Custom decimal separator"
      placeholder="You can change it"
      decimalSeparator=","
      defaultValue={20.573}
    />
  );
}
```

## Thousand separator

Set `thousandSeparator` prop to separate thousands with a character. You can control grouping logic with `thousandsGroupStyle`, it accepts: `thousand`, `lakh`, `wan`, `none` values.

```

import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <NumberInput
        label="Thousands are separated with a coma"
        placeholder="Thousands are separated with a coma"
        thousandSeparator=","
        defaultValue={1_000_000}
      />

      <NumberInput
        label="Thousands are separated with a space"
        placeholder="Thousands are separated with a space"
        thousandSeparator=" "
        defaultValue={1_000_000}
        mt="md"
      />
    </>
  );
}
```

```

import { NumberInput, rem } from '@mantine/core';
import { IconCurrencyDram } from '@tabler/icons-react';

function Demo() {
  const icon = <IconCurrencyDram style={{ width: rem(20), height: rem(20) }} stroke={1.5} />;
  return (
    <>
      <NumberInput leftSection={icon} label="With left section" placeholder="With left section" />
      <NumberInput
        rightSection={icon}
        label="With right section"
        placeholder="With right section"
        mt="md"
      />
    </>
  );
}
```

## Increment/decrement controls

By default, the right section is occupied by increment and decrement buttons. To hide them, set `hideControls` prop. You can also use `rightSection` prop to render anything in the right section to replace the default controls.

```

import { NumberInput } from '@mantine/core';
import { IconChartBubble } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <NumberInput label="Hide controls" placeholder="Hide controls" hideControls />
      <NumberInput
        label="Custom right section"
        placeholder="Custom right section"
        mt="md"
        rightSection={<IconChartBubble />}
        rightSectionPointerEvents="none"
      />
    </>
  );
}
```

## Increment/decrement on hold

Set `stepHoldDelay` and `stepHoldInterval` props to define behavior when increment/decrement controls are clicked and hold:

```

import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <NumberInput
        label="Step on hold"
        description="Step value when clicking and holding increment/decrement buttons"
        stepHoldDelay={500}
        stepHoldInterval={100}
      />

      <NumberInput
        label="Step the value with interval function"
        description="Step value will increase incrementally when control is hold"
        stepHoldDelay={500}
        stepHoldInterval={(t) => Math.max(1000 / t ** 2, 25)}
      />
    </>
  );
}
```

## Custom increment and decrement controls

You can get a ref with `increment` and `decrement` functions to create custom controls:

```

import { useRef } from 'react';
import { NumberInput, Group, Button, NumberInputHandlers } from '@mantine/core';

function Demo() {
  const handlersRef = useRef<NumberInputHandlers>(null);
  return (
    <>
      <NumberInput
        label="Click buttons to change value"
        placeholder="Click the buttons"
        handlersRef={handlersRef}
        step={2}
        min={10}
        max={20}
        defaultValue={15}
      />

      <Group mt="md" justify="center">
        <Button onClick={() => handlersRef.current?.decrement()} variant="default">
          Decrement by 2
        </Button>

        <Button onClick={() => handlersRef.current?.increment()} variant="default">
          Increment by 2
        </Button>
      </Group>
    </>
  );
}
```

## Error state

```

import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <NumberInput label="Boolean error" placeholder="Boolean error" error />
      <NumberInput
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
      />
    </>
  );
}
```

## Disabled state

```

import { NumberInput } from '@mantine/core';

function Demo() {
  return <NumberInput disabled label="Disabled input" placeholder="Disabled input" />;
}
```

```

import { IconAt } from '@tabler/icons-react';
import { NumberInput, rem } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="Label"
      placeholder="NumberInput"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconAt style={{ width: rem(18), height: rem(18) }} />}
      {{props}}
    />
  );
}
```## Usage

`Overlay` takes 100% of width and height of parent container or viewport if `fixed` prop is set. Set `color` and `backgroundOpacity` props to change `Overlay` background-color. Note that `backgroundOpacity` prop does not change CSS opacity property, it changes background-color. For example, if you set `color="#000"` and `backgroundOpacity={0.85}` background-color will be `rgba(0, 0, 0, 0.85)`:

```

import { useState } from 'react';
import { Button, Overlay, AspectRatio } from '@mantine/core';

function Demo() {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <AspectRatio ratio={16 / 9} maw={400} mx="auto" pos="relative">
        <img
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png"
          alt="Demo"
        />
        {visible && <Overlay color="#000" backgroundOpacity={0.85} />}
      </AspectRatio>
      <Button onClick={() => setVisible((v) => !v)} fullWidth maw={200} mx="auto" mt="xl">
        Toggle overlay
      </Button>
    </>
  );
}
```

## Gradient

Set `gradient` prop to use background-image instead of background-color. When `gradient` prop is set, `color` and `backgroundOpacity` props are ignored.

```

import { useState } from 'react';
import { Button, Overlay, AspectRatio } from '@mantine/core';

function Demo() {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <AspectRatio ratio={16 / 9} maw={400} mx="auto" pos="relative">
        <img
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
          alt="Demo"
        />
        {visible && (
          <Overlay
            gradient="linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 100%)"
            opacity={0.85}
          />
        )}
      </AspectRatio>
      <Button onClick={() => setVisible((v) => !v)} fullWidth maw={200} mx="auto" mt="xl">
        Toggle overlay
      </Button>
    </>
  );
}
```

## Blur

Set `blur` prop to add `backdrop-filter: blur({value})` styles. Note that `backdrop-filter` is not supported in all browsers.

```

import { Overlay, AspectRatio } from '@mantine/core';

function Demo() {
  return (
    <AspectRatio ratio={16 / 9} maw={400} mx="auto" pos="relative">
      <img
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png"
        alt="Demo"
      />
      <Overlay color="#000" backgroundOpacity={0.35}{{props}} />
    </AspectRatio>
  );
}
```## Usage

```

import { Pagination } from '@mantine/core';

function Demo() {
  return <Pagination total={10}{{props}} />;
}
```

## Example with chunked content

```

import { useState } from 'react';
import { randomId } from '@mantine/hooks';
import { Pagination, Text } from '@mantine/core';

function chunk<T>(array: T[], size: number): T[][] {
  if (!array.length) {
    return [];
  }
  const head = array.slice(0, size);
  const tail = array.slice(size);
  return [head, ...chunk(tail, size)];
}

const data = chunk(
  Array(30)
    .fill(0)
    .map((_, index) => ({ id: index, name: randomId() })),
  5
);

function Demo() {
  const [activePage, setPage] = useState(1);
  const items = data[activePage - 1].map((item) => (
    <Text key={item.id}>
      id: {item.id}, name: {item.name}
    </Text>
  ));

  return (
    <>
      {items}
      <Pagination total={data.length} value={activePage} onChange={setPage} mt="sm" />
    </>
  );
}
```

## Controlled

To control component state provide `value` and `onChange` props:

```tsx
import { useState } from 'react';
import { Pagination } from '@mantine/core';

function Demo() {
  const [activePage, setPage] = useState(1);
  return (
    <Pagination value={activePage} onChange={setPage} total={10} />
  );
}
```

## Siblings

Control number of active item siblings with `siblings` prop:

```

import { Text, Pagination } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text mb="xs">1 sibling (default)</Text>
      <Pagination total={20} siblings={1} defaultValue={10} />

      <Text mb="xs" mt="xl">2 siblings</Text>
      <Pagination total={20} siblings={2} defaultValue={10} />

      <Text mb="xs" mt="xl">3 siblings</Text>
      <Pagination total={20} siblings={3} defaultValue={10} />
    </>
  );
}
```

## Boundaries

Control number of items displayed after previous and before next buttons with `boundaries` prop:

```

import { Text, Pagination } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text mb="xs">1 boundary (default)</Text>
      <Pagination total={20} boundaries={1} defaultValue={10} />

      <Text mt="xl" mb="xs">2 boundaries</Text>
      <Pagination total={20} boundaries={2} defaultValue={10} />

      <Text mt="xl" mb="xs">3 boundaries</Text>
      <Pagination total={20} boundaries={3} defaultValue={10} />
    </>
  );
}
```

```

import { Pagination } from '@mantine/core';

function Demo() {
  return <Pagination total={10}{{props}} />;
}
```

## Compound components

You can use the following compound components to have full control over the `Pagination` rendering:

-   `Pagination.Root` – context provider
-   `Pagination.Items` – items list
-   `Pagination.Next` – next control
-   `Pagination.Previous` – previous control
-   `Pagination.First` – first control
-   `Pagination.Last` – last control

```

import { Group, Pagination } from '@mantine/core';

function Demo() {
  return (
    <Pagination.Root total={10}>
      <Group gap={5} justify="center">
        <Pagination.First />
        <Pagination.Previous />
        <Pagination.Items />
        <Pagination.Next />
        <Pagination.Last />
      </Group>
    </Pagination.Root>
  );
}
```

## Controls as links

```

import { Group, Pagination } from '@mantine/core';

function Demo() {
  return (
    <>
      {/* Regular pagination */}
      <Pagination
        total={10}
        withEdges
        getItemProps={(page) => ({
          component: 'a',
          href: `#page-${page}`,
        })}
        getControlProps={(control) => {
          if (control === 'first') {
            return { component: 'a', href: '#page-0' };
          }

          if (control === 'last') {
            return { component: 'a', href: '#page-10' };
          }

          if (control === 'next') {
            return { component: 'a', href: '#page-2' };
          }

          if (control === 'previous') {
            return { component: 'a', href: '#page-1' };
          }

          return {};
        }}
      />

      {/* Compound pagination */}
      <Pagination.Root
        total={10}
        getItemProps={(page) => ({
          component: 'a',
          href: `#page-${page}`,
        })}
      >
        <Group gap={7} mt="xl">
          <Pagination.First component="a" href="#page-0" />
          <Pagination.Previous component="a" href="#page-1" />
          <Pagination.Items />
          <Pagination.Next component="a" href="#page-2" />
          <Pagination.Last component="a" href="#page-10" />
        </Group>
      </Pagination.Root>
    </>
  );
}

```

## Change icons

```

import { Group, Pagination } from '@mantine/core';
import {
  IconArrowBarToRight,
  IconArrowBarToLeft,
  IconArrowLeft,
  IconArrowRight,
  IconGripHorizontal,
} from '@tabler/icons-react';

function Demo() {
  return (
    <>
      {/* Regular pagination */}
      <Pagination
        total={10}
        withEdges
        nextIcon={IconArrowRight}
        previousIcon={IconArrowLeft}
        firstIcon={IconArrowBarToLeft}
        lastIcon={IconArrowBarToRight}
        dotsIcon={IconGripHorizontal}
      />

      {/* Compound pagination */}
      <Pagination.Root total={10}>
        <Group gap={7} mt="xl">
          <Pagination.First icon={IconArrowBarToLeft} />
          <Pagination.Previous icon={IconArrowLeft} />
          <Pagination.Items dotsIcon={IconGripHorizontal} />
          <Pagination.Next icon={IconArrowRight} />
          <Pagination.Last icon={IconArrowBarToRight} />
        </Group>
      </Pagination.Root>
    </>
  );
}
```

```

import { Pagination, Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text>autoContrast: off</Text>
      <Pagination total={10} color="lime.4" />

      <Text mt="md">autoContrast: on</Text>
      <Pagination total={10} autoContrast color="lime.4" />
    </>
  );
}
```

## use-pagination hook

If you need more flexibility `@mantine/hooks` package exports use-pagination hook, you can use it to create custom pagination components.## Usage

```

import { Text, Paper } from '@mantine/core';

function Demo() {
  return (
    <Paper{{props}} p="xl">
      <Text>Paper is the most basic ui component</Text>
      <Text>
        Use it to create cards, dropdowns, modals and other components that require background
        with shadow
      </Text>
    </Paper>
  );
}
```## Usage

```

import { PasswordInput } from '@mantine/core';


function Demo() {
  return (
    <PasswordInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
```

## Controlled

```tsx
import { useState } from 'react';
import { PasswordInput } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('');
  return (
    <PasswordInput
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
    />
  );
}
```

## Controlled visibility toggle

Control visibility state with `visible` and `onVisibilityChange` props, for example, the props can be used to sync visibility state between two inputs:

```

import { useDisclosure } from '@mantine/hooks';
import { PasswordInput, Stack } from '@mantine/core';

function Demo() {
  const [visible, { toggle }] = useDisclosure(false);
  return (
    <Stack>
      <PasswordInput
        label="Password"
        defaultValue="secret"
        visible={visible}
        onVisibilityChange={toggle}
      />
      <PasswordInput
        label="Confirm password"
        defaultValue="secret"
        visible={visible}
        onVisibilityChange={toggle}
      />
    </Stack>
  );
}
```

## Change visibility toggle icon

To change visibility toggle icon, pass a React component that accepts `reveal` prop to `visibilityToggleIcon`:

```

import { PasswordInput } from '@mantine/core';
import { IconEyeCheck, IconEyeOff } from '@tabler/icons-react';

const VisibilityToggleIcon = ({ reveal }: { reveal: boolean }) =>
  reveal ? (
    <IconEyeOff style={{ width: 'var(--psi-icon-size)', height: 'var(--psi-icon-size)' }} />
  ) : (
    <IconEyeCheck style={{ width: 'var(--psi-icon-size)', height: 'var(--psi-icon-size)' }} />
  );

function Demo() {
  return (
    <PasswordInput
      maw={320}
      mx="auto"
      label="Change visibility toggle icon"
      placeholder="Change visibility toggle icon"
      defaultValue="secret"
      visibilityToggleIcon={VisibilityToggleIcon}
    />
  );
}
```

## Strength meter example

Password strength meter example with Progress and Popover components:

```

import { useState } from 'react';
import { IconX, IconCheck } from '@tabler/icons-react';
import { PasswordInput, Progress, Text, Popover, Box, rem } from '@mantine/core';

function PasswordRequirement({ meets, label }: { meets: boolean; label: string }) {
  return (
    <Text
      c={meets ? 'teal' : 'red'}
      style={{ display: 'flex', alignItems: 'center' }}
      mt={7}
      size="sm"
    >
      {meets ? (
        <IconCheck style={{ width: rem(14), height: rem(14) }} />
      ) : (
        <IconX style={{ width: rem(14), height: rem(14) }} />
      )}{' '}
      <Box ml={10}>{label}</Box>
    </Text>
  );
}

const requirements = [
  { re: /[0-9]/, label: 'Includes number' },
  { re: /[a-z]/, label: 'Includes lowercase letter' },
  { re: /[A-Z]/, label: 'Includes uppercase letter' },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Includes special symbol' },
];

function getStrength(password: string) {
  let multiplier = password.length > 5 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
}

function Demo() {
  const [popoverOpened, setPopoverOpened] = useState(false);
  const [value, setValue] = useState('');
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement key={index} label={requirement.label} meets={requirement.re.test(value)} />
  ));

  const strength = getStrength(value);
  const color = strength === 100 ? 'teal' : strength > 50 ? 'yellow' : 'red';

  return (
    <Popover opened={popoverOpened} position="bottom" width="target" transitionProps={{ transition: 'pop' }}>
      <Popover.Target>
        <div
          onFocusCapture={() => setPopoverOpened(true)}
          onBlurCapture={() => setPopoverOpened(false)}
        >
          <PasswordInput
            withAsterisk
            label="Your password"
            placeholder="Your password"
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}
          />
        </div>
      </Popover.Target>
      <Popover.Dropdown>
        <Progress color={color} value={strength} size={5} mb="xs" />
        <PasswordRequirement label="Includes at least 6 characters" meets={value.length > 5} />
        {checks}
      </Popover.Dropdown>
    </Popover>
  );
}
```

## Usage without visibility toggle

If you do not need visibility toggle button, use TextInput component instead:

```tsx
import { TextInput } from '@mantine/core';

function Demo() {
  return <TextInput type="password" />;
}
```

Note that when `rightSection` prop is used, visibility toggle button is not rendered.

```

import { PasswordInput, rem } from '@mantine/core';
import { IconLock } from '@tabler/icons-react';

function Demo() {
  const icon = <IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />;

  return (
    <>
      <PasswordInput leftSection={icon} label="With left section" placeholder="With left section" />
      <PasswordInput
        rightSection={icon}
        label="With right section"
        placeholder="With right section"
        mt="md"
      />
    </>
  );
}
```

## Error state

```

import { PasswordInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <PasswordInput label="Boolean error" placeholder="Boolean error" error />
      <PasswordInput
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
      />
    </>
  );
}
```

## Disabled

When `disabled` prop is set, visibility toggle button is hidden:

```

import { PasswordInput } from '@mantine/core';

function Demo() {
  return (
    <PasswordInput disabled label="Disabled password input" placeholder="Disabled password input" />
  );
}
```

```

import { IconLock } from '@tabler/icons-react';
import { PasswordInput, rem } from '@mantine/core';

function Demo() {
  return (
    <PasswordInput
      label="Label"
      placeholder="PasswordInput"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} />}
      {{props}}
    />
  );
}
```

To set `aria-label` on the visibility toggle button, use `visibilityToggleButtonProps` prop:

```tsx
import { PasswordInput } from '@mantine/core';

function Demo() {
  return (
    <PasswordInput
      label="Password"
      visibilityToggleButtonProps={{
        'aria-label': 'Toggle password visibility',
      }}
    />
  );
}
```## Usage

```

import { Pill } from '@mantine/core';

function Demo() {
  return <Pill{{props}}>React</Pill>;
}
```

## Inside inputs

`Pill` component is designed to be used inside inputs. It can be used to create custom multi select or tag inputs.

```

import { Pill, InputBase } from '@mantine/core';

function Demo() {
  const pills = Array(10)
    .fill(0)
    .map((_, index) => (
      <Pill key={index} withRemoveButton>
        Item {index}
      </Pill>
    ));

  return (
    <InputBase component="div" multiline>
      <Pill.Group>{pills}</Pill.Group>
    </InputBase>
  );
}
```

```

import { Pill } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return <Pill{{props}} withRemoveButton>Test pill</Pill>;
}
```## Usage

`PillsInput` is a utility component that can be used to create custom tag inputs, multi selects and other similar components. By itself it does not include any logic, it only renders given children. Usually, `PillsInput` is used in combination with Pill component.

```

import { PillsInput, Pill } from '@mantine/core';

function Demo() {
  return (
    <PillsInput label="PillsInput">
      <Pill.Group>
        <Pill>React</Pill>
        <Pill>Vue</Pill>
        <Pill>Svelte</Pill>
        <PillsInput.Field placeholder="Enter tags" />
      </Pill.Group>
    </PillsInput>
  );
}
```

## Input props

```

import { PillsInput, Pill } from '@mantine/core';


function Demo() {
  return (
    <PillsInput
      {{props}}
    >
      <Pill.Group>
        <Pill>React</Pill>
        <Pill>Vue</Pill>
        <Pill>Svelte</Pill>
        <PillsInput.Field placeholder="Enter tags" />
      </Pill.Group>
    </PillsInput>
  );
}
```

## Searchable select example

Combine `PillsInput` with Combobox to create searchable multiselect:

```

import { useState } from 'react';
import { PillsInput, Pill, Combobox, CheckIcon, Group, useCombobox } from '@mantine/core';

const groceries = ['🍎 Apples', '🍌 Bananas', '🥦 Broccoli', '🥕 Carrots', '🍫 Chocolate'];

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
  });

  const [search, setSearch] = useState('');
  const [value, setValue] = useState<string[]>([]);

  const handleValueSelect = (val: string) =>
    setValue((current) =>
      current.includes(val) ? current.filter((v) => v !== val) : [...current, val]
    );

  const handleValueRemove = (val: string) =>
    setValue((current) => current.filter((v) => v !== val));

  const values = value.map((item) => (
    <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
      {item}
    </Pill>
  ));

  const options = groceries
    .filter((item) => item.toLowerCase().includes(search.trim().toLowerCase()))
    .map((item) => (
      <Combobox.Option value={item} key={item} active={value.includes(item)}>
        <Group gap="sm">
          {value.includes(item) ? <CheckIcon size={12} /> : null}
          <span>{item}</span>
        </Group>
      </Combobox.Option>
    ));

  return (
    <Combobox store={combobox} onOptionSubmit={handleValueSelect}>
      <Combobox.DropdownTarget>
        <PillsInput onClick={() => combobox.openDropdown()}>
          <Pill.Group>
            {values}

            <Combobox.EventsTarget>
              <PillsInput.Field
                onFocus={() => combobox.openDropdown()}
                onBlur={() => combobox.closeDropdown()}
                value={search}
                placeholder="Search values"
                onChange={(event) => {
                  combobox.updateSelectedOptionIndex();
                  setSearch(event.currentTarget.value);
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Backspace' && search.length === 0) {
                    event.preventDefault();
                    handleValueRemove(value[value.length - 1]);
                  }
                }}
              />
            </Combobox.EventsTarget>
          </Pill.Group>
        </PillsInput>
      </Combobox.DropdownTarget>

      <Combobox.Dropdown>
        <Combobox.Options>
          {options.length > 0 ? options : <Combobox.Empty>Nothing found...</Combobox.Empty>}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
```

## Accessibility

If `PillsInput` is used without label prop, it will not be announced properly by screen reader:

```tsx
import { PillsInput } from '@mantine/core';

// Inaccessible input – screen reader will not announce it properly
function Demo() {
  return (
    <PillsInput>
      <PillsInput.Field />
    </PillsInput>
  );
}
```

Set `aria-label` on the `PillsInput.Field` component to make the input accessible. In this case label will not be visible, but screen reader will announce it:

```tsx
import { PillsInput } from '@mantine/core';

// Accessible input – it has aria-label
function Demo() {
  return (
    <PillsInput>
      <PillsInput.Field aria-label="Enter tags" />
    </PillsInput>
  );
}
```

If `label` prop is set, the input will be accessible it is not required to set `aria-label`:

```tsx
import { PillsInput } from '@mantine/core';

// Accessible input – it has associated label element
function Demo() {
  return (
    <PillsInput label="Enter tags">
      <PillsInput.Field />
    </PillsInput>
  );
}
```## Usage

```

import { PinInput } from '@mantine/core';

function Demo() {
  return <PinInput{{props}} />
}
```

## Regex type

You can use regular expression to validate user input. Characters that do not match given expression will be disregarded. For example, to create a `PinInput` that will accept only numbers from `0` to `3`, set `type={/^[0-3]+/}`:

```

import { PinInput } from '@mantine/core';

function Demo() {
  return <PinInput type={/^[0-3]*$/} inputType="tel" inputMode="numeric" />;
}
```

## One time code

Some operating systems expose the last received SMS code to be used by applications like your keyboard. If the current form input asks for this code, your keyboard adapts and proposes the code as keyboard-suggestion. Prop `oneTimeCode` makes your input setting `autocomplete="one-time-code"` which allows using that feature.

```tsx
import { PinInput } from '@mantine/core';

function OneTimeCodeInput() {
  return <PinInput oneTimeCode />;
}
```

```

import { PinInput } from '@mantine/core';

function Demo() {
  return (
    <PinInput{{props}} />
  );
}
```

## Accessibility

Inputs do not have associated labels, set `aria-label` to make component visible to the screen reader:

```tsx
import { PinInput } from '@mantine/core';

function Accessibility() {
  return <PinInput aria-label="One time code" />;
}
```## Usage

```

import { Popover, Text, Button } from '@mantine/core';

function Demo() {
  return (
    <Popover width={200} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">This is uncontrolled popover, it is opened when button is clicked</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
```

## Controlled

You can control Popover state with `opened` and `onChange` props:

```tsx
import { useState } from 'react';
import { Button, Popover } from '@mantine/core';

function Demo() {
  const [opened, setOpened] = useState(false);
  return (
    <Popover opened={opened} onChange={setOpened}>
      <Popover.Target>
        <Button onClick={() => setOpened((o) => !o)}>
          Toggle popover
        </Button>
      </Popover.Target>

      <Popover.Dropdown>Dropdown</Popover.Dropdown>
    </Popover>
  );
}
```

Controlled example with mouse events:

```

import { useDisclosure } from '@mantine/hooks';
import { Popover, Text, Button } from '@mantine/core';

function Demo() {
  const [opened, { close, open }] = useDisclosure(false);
  return (
    <Popover width={200} position="bottom" withArrow shadow="md" opened={opened}>
      <Popover.Target>
        <Button onMouseEnter={open} onMouseLeave={close}>
          Hover to see popover
        </Button>
      </Popover.Target>
      <Popover.Dropdown style={{ pointerEvents: 'none' }}>
        <Text size="sm">This popover is shown when user hovers the target element</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
```

## Focus trap

If you need to use interactive elements (inputs, buttons, etc.) inside `Popover.Dropdown`, set `trapFocus` prop:

```

import { Popover, Button, TextInput } from '@mantine/core';

function Demo() {
  return (
    <Popover width={300} trapFocus position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <TextInput label="Name" placeholder="Name" size="xs" />
        <TextInput label="Email" placeholder="john@doe.com" size="xs" mt="xs" />
      </Popover.Dropdown>
    </Popover>
  );
}
```

## Inline elements

Enable `inline` middleware to use `Popover` with inline elements:

```

import { Popover, Mark, Text } from '@mantine/core';

function Demo() {
  return (
    <Text>
      Stantler’s magnificent antlers were traded at high prices as works of art. As a result, this
      Pokémon was hunted close to extinction by those who were after the priceless antlers.{' '}
      <Popover middlewares={{ flip: true, shift: true, inline: true }} position="top">
        <Popover.Target>
          <Mark>When visiting a junkyard</Mark>
        </Popover.Target>
        <Popover.Dropdown>Inline dropdown</Popover.Dropdown>
      </Popover>
      , you may catch sight of it having an intense fight with Murkrow over shiny objects.Ho-Oh’s
      feathers glow in seven colors depending on the angle at which they are struck by light. These
      feathers are said to bring happiness to the bearers. This Pokémon is said to live at the foot
      of a rainbow.
    </Text>
  );
}
```

## Same width

Set `width="target"` prop to make Popover dropdown take the same width as target element:

```

import { Popover, Text, Button } from '@mantine/core';

function Demo() {
  return (
    <Popover width="target" position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button w={280}>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="sm">
          This popover has same width as target, it is useful when you are building input dropdowns
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
}

```

## offset

Set `offset` prop to a number to change dropdown position relative to the target element. This way you can control dropdown offset on main axis only.

```

import { Popover, Button, Text } from '@mantine/core';


function Demo() {
  return (
    <Popover
      width={200}
      opened
      {{props}}
    >
      <Popover.Target>
        <Button>Popover target</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">
          Change position and offset to configure dropdown offset relative to target
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
}
```

To control offset on both axis, pass object with `mainAxis` and `crossAxis` properties:

```
(props) => `
import { Popover, Button, Text } from '@mantine/core';

function Demo() {
  return (
    
      
        Popover target
      
      
        
          Change position and offset to configure dropdown offset relative to target
        
      
    
  );
}
`
```

## Middlewares

You can enable or disable Floating UI middlewares with `middlewares` prop:

-   shift middleware shifts the dropdown to keep it in view. It is enabled by default
-   flip middleware changes the placement of the dropdown to keep it in view. It is enabled by default.
-   inline middleware improves positioning for inline reference elements that span over multiple lines. It is disabled by default.
-   size middleware manipulates dropdown size. It is disabled by default.

Example of turning off `shift` and `flip` middlewares:

```tsx
import { Popover } from '@mantine/core';

function Demo() {
  return (
    <Popover
      middlewares={{ flip: false, shift: false }}
      position="bottom"
    >
      {/* Popover content */}
    </Popover>
  );
}
```

## Customize middleware options

To customize Floating UI middlewares options, pass them as an object to the `middlewares` prop. For example, to change shift middleware padding to `20px` use the following configuration:

```tsx
import { Popover } from '@mantine/core';

function Demo() {
  return (
    <Popover
      middlewares={{ shift: { padding: 20 } }}
      position="bottom"
    >
      {/* Popover content */}
    </Popover>
  );
}
```

## Dropdown arrow

Set `withArrow` prop to add an arrow to the dropdown. Arrow is a `div` element rotated with `transform: rotate(45deg)`.

`arrowPosition` prop determines how arrow is position relative to the target element when `position` is set to `*-start` and `*-end` values on `Popover` component. By default, the value is `center` – the arrow is positioned in the center of the target element if it is possible.

If you change `arrowPosition` to `side`, then the arrow will be positioned on the side of the target element, and you will be able to control arrow offset with `arrowOffset` prop. Note that when `arrowPosition` is set to `center`, `arrowOffset` prop is ignored.

```

import { Popover, Button, Text } from '@mantine/core';

function Demo() {
  return (
    <Popover width={200} opened position="bottom-start" withArrow{{props}}>
      <Popover.Target>
        <Button>Target element</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">Arrow position can be changed for *-start and *-end positions</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
```

## Disabled

Set `disabled` prop to prevent `Popover.Dropdown` from rendering:

```

import { Popover, Text, Button } from '@mantine/core';

function Demo() {
  return (
    <Popover width={200}{{props}}>
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">Disabled popover dropdown is always hidden</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
```

## Click outside

By default, `Popover` closes when you click outside of the dropdown. To disable this behavior, set `closeOnClickOutside={false}`.

You can configure events that are used for click outside detection with `clickOutsideEvents` prop. By default, `Popover` listens to `mousedown` and `touchstart` events. You can change it to any other events, for example, `mouseup` and `touchend`:

```

import { Popover, Text, Button } from '@mantine/core';

function Demo() {
  return (
    <Popover width={200} position="bottom" clickOutsideEvents={['mouseup', 'touchend']}>
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">Popover will be closed with mouseup and touchend events</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
```

## Initial focus

Popover uses FocusTrap component to manage focus. Add `data-autofocus` attribute to element that should receive initial focus:

```tsx
import { Popover } from '@mantine/core';

function Demo() {
  return (
    <Popover>
      <Popover.Target>
        <button type="button">Target</button>
      </Popover.Target>
      <Popover.Dropdown>
        <input />
        <input data-autofocus />
        <input />
      </Popover.Dropdown>
    </Popover>
  );
}
```

## Nested popovers

Nested popovers require children rendering without Portal. Usually, you should disable portal with props of the component that renders popover content, for example, Select has `comboboxProps={{ withinPortal: false }}` prop. Check documentation of the component that you are using to render popover content to find out how to disable the portal. If the portal is not disabled, outside click will close all popovers.

Example of disabling portal in Select and DatePickerInput components:

```

import { Button, Popover, Select } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  return (
    <Popover width={300} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown bg="var(--mantine-color-body)">
        <Select
          label="Select within Popover"
          placeholder="Select within Popover"
          comboboxProps={{ withinPortal: false }}
          data={['React', 'Angular', 'Svelte', 'Vue']}
        />
        <DatePickerInput
          label="DatePickerInput within Popover"
          placeholder="DatePickerInput within Popover"
          popoverProps={{ withinPortal: false }}
          mt="md"
        />
      </Popover.Dropdown>
    </Popover>
  );
}
```

## Accessibility

Popover follows WAI-ARIA recommendations:

-   Dropdown element has `role="dialog"` and `aria-labelledby="target-id"` attributes
-   Target element has `aria-haspopup="dialog"`, `aria-expanded`, `aria-controls="dropdown-id"` attributes

Uncontrolled Popover will be accessible only when used with `button` element or component that renders it (Button, ActionIcon, etc.). Other elements will not support `Space` and `Enter` key presses.

## Keyboard interactions## Usage

Portal is a wrapper component for ReactDOM.createPortal API. Render any component or element at the end of `document.body` or at a given element. Modal and Drawer components are wrapped in Portal by default.

Use Portal to render a component or an element at a different place (defaults to the end of `document.body`). Portal is useful when you want to prevent parent styles from interfering with children, usually all these styles are related to `position` and `z-index` properties and portals are used for components with fixed position, for example, modals.

```tsx
import { useState } from 'react';
import { Portal } from '@mantine/core';

function Demo() {
  const [opened, setOpened] = useState(false);

  return (
    <main style={{ position: 'relative', zIndex: 1 }}>
      {opened && (
        <Portal>
          <div>Your modal content</div>
        </Portal>
      )}

      <button onClick={() => setOpened(true)} type="button">
        Open modal
      </button>
    </main>
  );
}
```

In the example above, the div element is rendered outside of parent main (before closing body tag), but still receives `opened` and `onClose` props. The element will not be affected by parent z-index.

## Specify target dom node

You can specify dom node where portal will be rendered by passing `target` prop:

```tsx
import { Portal } from '@mantine/core';

const container = document.createElement('div');
document.body.appendChild(container);

function Demo() {
  return <Portal target={container}>My portal</Portal>;
}
```

Alternatively, you can specify selector to render portal in existing element:

```tsx
import { Portal } from '@mantine/core';

function Demo() {
  return <Portal target="#portal-container">My portal</Portal>;
}
```

If you don’t specify the target element, new one will be created and appended to the `document.body` for each Portal component.

## Server side rendering

`createPortal` is not supported during server side rendering. All components inside Portal are rendered only after the application was mounted to the dom.

## OptionalPortal component

`OptionalPortal` component lets you configure whether children should be rendered in `Portal`. It accepts the same props as the `Portal` component:

```tsx
import { OptionalPortal } from '@mantine/core';

function Demo() {
  return (
    <>
      <OptionalPortal withinPortal>
        This text is rendered in Portal
      </OptionalPortal>
      <OptionalPortal withinPortal={false}>
        This text is rendered as regular child
      </OptionalPortal>
    </>
  );
}
```## Usage

```

import { Progress } from '@mantine/core';

function Demo() {
  return <Progress{{props}} />;
}
```

## Compound components

```

import { Progress } from '@mantine/core';

function Demo() {
  return (
    <Progress.Root size="xl">
      <Progress.Section value={35} color="cyan">
        <Progress.Label>Documents</Progress.Label>
      </Progress.Section>
      <Progress.Section value={28} color="pink">
        <Progress.Label>Photos</Progress.Label>
      </Progress.Section>
      <Progress.Section value={15} color="orange">
        <Progress.Label>Other</Progress.Label>
      </Progress.Section>
    </Progress.Root>
  );
}
```

## With tooltips

```

import { Progress, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Progress.Root size={40}>
      <Tooltip label="Documents – 33Gb">
        <Progress.Section value={33} color="cyan">
          <Progress.Label>Documents</Progress.Label>
        </Progress.Section>
      </Tooltip>

      <Tooltip label="Photos – 28Gb">
        <Progress.Section value={28} color="pink">
          <Progress.Label>Photos</Progress.Label>
        </Progress.Section>
      </Tooltip>

      <Tooltip label="Other – 15Gb">
        <Progress.Section value={15} color="orange">
          <Progress.Label>Other</Progress.Label>
        </Progress.Section>
      </Tooltip>
    </Progress.Root>
  );
}
```

## Section width transition

Set `transitionDuration` to a number of ms to enable width transition:

```

import { useState } from 'react';
import { Button, Progress } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(50);
  return (
    <>
      <Progress value={value} size="lg" transitionDuration={200} />
      <Button onClick={() => setValue(Math.random() * 100)} mt="md">
        Set random value
      </Button>
    </>
  );
}
```

## Example: progress with segments

```

import { useState } from 'react';
import { Group, PasswordInput, Progress } from '@mantine/core';

const requirements = [
  { re: /[0-9]/, label: 'Includes number' },
  { re: /[a-z]/, label: 'Includes lowercase letter' },
  { re: /[A-Z]/, label: 'Includes uppercase letter' },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Includes special symbol' },
];

function getStrength(password: string) {
  if (password.length < 5) {
    return 10;
  }

  let multiplier = password.length > 5 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
}

function getStrengthColor(strength: number) {
  switch (true) {
    case strength < 30:
      return 'red';
    case strength < 50:
      return 'orange';
    case strength < 70:
      return 'yellow';
    default:
      return 'teal';
  }
}

function Demo() {
  const [value, setValue] = useState('');
  const strength = getStrength(value);
  const color = getStrengthColor(strength);

  return (
    <div>
      <PasswordInput
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        placeholder="Enter password"
        label="Enter password"
      />

      <Group grow gap={5} mt="xs">
        <Progress
          size="xs"
          color={color}
          value={value.length > 0 ? 100 : 0}
          transitionDuration={0}
        />
        <Progress size="xs" color={color} transitionDuration={0} value={strength < 30 ? 0 : 100} />
        <Progress size="xs" color={color} transitionDuration={0} value={strength < 50 ? 0 : 100} />
        <Progress size="xs" color={color} transitionDuration={0} value={strength < 70 ? 0 : 100} />
      </Group>
    </div>
  );
}
```

```

import { Progress } from '@mantine/core';

function Demo() {
  return (
    <Progress.Root size="xl"{{props}}>
      <Progress.Section value={35}>
        <Progress.Label>Documents</Progress.Label>
      </Progress.Section>
    </Progress.Root>
  );
}
```

## Accessibility

-   Progress section has `role="progressbar"` attribute
-   Progress section has `aria-valuenow` attribute with current value
-   `aria-valuemin` and `aria-valuemax` attributes are always set to `0` and `100` as component does not support other values

Set `aria-label` attribute to label progress:

```tsx
import { Progress } from '@mantine/core';

function Demo() {
  return <Progress aria-label="Uploading progress" value={10} />;
}

function DemoCompound() {
  return (
    <Progress.Root>
      <Progress.Section aria-label="Uploading progress" value={10} />
    </Progress.Root>
  );
}
```## Usage

```

import { Radio } from '@mantine/core';


function Demo() {
  return (
    <Radio
      {{props}}
    />
  );
}
```

## Controlled

```tsx
import { useState } from 'react';
import { Radio } from '@mantine/core';

function Demo() {
  const [checked, setChecked] = useState(false);
  return (
    <Radio
      checked={checked}
      onChange={(event) => setChecked(event.currentTarget.checked)}
    />
  );
}
```

## States

```

import { Radio, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <Radio checked={false} onChange={() => {}} label="Default radio" />
      <Radio checked onChange={() => {}} label="Checked radio" />
      <Radio checked variant="outline" onChange={() => {}} label="Outline checked radio" />
      <Radio disabled label="Disabled radio" />
      <Radio disabled checked onChange={() => {}} label="Disabled checked radio" />
    </Stack>
  );
}
```

## Change icon

```

import { Radio, CheckIcon } from '@mantine/core';

function Demo() {
  return (
    <Radio icon={CheckIcon} label="Custom check icon" name="check" value="check" defaultChecked />
  );
}
```

## Change icon color

```

import { Radio } from '@mantine/core';

function Demo() {
  return (
    <Radio
      iconColor="dark.8"
      color="lime.4"
      label="Custom icon color"
      name="check"
      value="check"
      defaultChecked
    />
  );
}
```

## Disabled state

```

import { Radio, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Radio checked disabled label="React" value="react" />
      <Radio disabled label="Angular" value="nu" />
      <Radio disabled label="Svelte" value="sv" />
    </Group>
  );
}
```

## Pointer cursor

By default, radio input and label have `cursor: default` (same as native `input[type="radio"]`). To change cursor to pointer, set `cursorType` on theme:

```tsx
import { createTheme, MantineProvider, Radio } from '@mantine/core';

const theme = createTheme({
  cursorType: 'pointer',
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Radio label="Pointer cursor" />
    </MantineProvider>
  );
}
```

## Radio with tooltip

You can change target element to which tooltip is attached with `refProp`:

-   If `refProp` is not set, the tooltip is attached to the checkbox input
-   If `refProp="rootRef"` is set, the tooltip is attached to the root element (contains label, input and other elements)

```

import { Tooltip, Radio } from '@mantine/core';

function Demo() {
  return (
    <>
      <Tooltip label="Radio with tooltip">
        <Radio label="Tooltip on radio only" />
      </Tooltip>

      <Tooltip label="Radio with tooltip" refProp="rootRef">
        <Radio label="Tooltip the entire element" mt="md" />
      </Tooltip>
    </>
  );
}
```

## Radio.Group component

```

import { Radio, Group } from '@mantine/core';


function Demo() {
  return (
    <Radio.Group
      name="favoriteFramework"
      {{props}}
    >
      <Group mt="xs">
        <Radio value="react" label="React" />
        <Radio value="svelte" label="Svelte" />
        <Radio value="ng" label="Angular" />
        <Radio value="vue" label="Vue" />
      </Group>
    </Radio.Group>
  );
}
```

## Controlled Radio.Group

```tsx
import { useState } from 'react';
import { Radio } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('react');

  return (
    <Radio.Group
      value={value}
      onChange={setValue}
      name="favoriteFramework"
      label="Select your favorite framework/library"
      description="This is anonymous"
      withAsterisk
    >
      <Radio value="react" label="React" />
      <Radio value="svelte" label="Svelte" />
      <Radio value="ng" label="Angular" />
      <Radio value="vue" label="Vue" />
    </Radio.Group>
  );
}
```

## Radio.Indicator

`Radio.Indicator` looks exactly the same as `Radio` component, but it does not have any semantic meaning, it’s just a visual representation of radio state. You can use it in any place where you need to display radio state without any interaction related to the indicator. For example, it is useful in cards based on buttons, trees, etc.

Note that `Radio.Indicator` cannot be focused or selected with keyboard. It is not accessible and should not be used as a replacement for `Radio` component.

```

import { Radio, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Radio.Indicator />
      <Radio.Indicator checked />
      <Radio.Indicator disabled />
      <Radio.Indicator disabled checked />
    </Group>
  );
}
```

## Radio.Card component

`Radio.Card` component can be used as a replacement for `Radio` to build custom cards/buttons/other things that work as radios. The root element of the component has `role="radio"` attribute, it is accessible by default and supports the same keyboard interactions as `input[type="radio"]`.

```

import { useState } from 'react';
import { Radio, Group, Text } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  const [checked, setChecked] = useState(false);

  return (
    <Radio.Card
      className={classes.root}
      radius="md"
      checked={checked}
      onClick={() => setChecked((c) => !c)}
    >
      <Group wrap="nowrap" align="flex-start">
        <Radio.Indicator />
        <div>
          <Text className={classes.label}>@mantine/core</Text>
          <Text className={classes.description}>
            Core components library: inputs, buttons, overlays, etc.
          </Text>
        </div>
      </Group>
    </Radio.Card>
  );
}
```

You can use `Radio.Card` with `Radio.Group` the same way as `Radio` component:

```

import { useState } from 'react';
import { Radio, Group, Stack, Text } from '@mantine/core';
import classes from './Demo.module.css';

const data = [
  {
    name: '@mantine/core',
    description: 'Core components library: inputs, buttons, overlays, etc.',
  },
  { name: '@mantine/hooks', description: 'Collection of reusable hooks for React applications.' },
  { name: '@mantine/notifications', description: 'Notifications system' },
];

function Demo() {
  const [value, setValue] = useState<string | null>(null);

  const cards = data.map((item) => (
    <Radio.Card className={classes.root} radius="md" value={item.name} key={item.name}>
      <Group wrap="nowrap" align="flex-start">
        <Radio.Indicator />
        <div>
          <Text className={classes.label}>{item.name}</Text>
          <Text className={classes.description}>{item.description}</Text>
        </div>
      </Group>
    </Radio.Card>
  ));

  return (
    <>
      <Radio.Group
        value={value}
        onChange={setValue}
        label="Pick one package to install"
        description="Choose a package that you will need in your application"
      >
        <Stack pt="md" gap="xs">
          {cards}
        </Stack>
      </Radio.Group>

      <Text fz="xs" mt="md">
        CurrentValue: {value || '–'}
      </Text>
    </>
  );
}
```

```

import { Radio } from '@mantine/core';

function Demo() {
  return (
    <Radio
      label="Radio"
      description="Radio description"
      error="Radio error"
      defaultChecked
     {{props}}
    />
  );
}
```

## Accessibility

Set `aria-label` or `label` prop to make the radio accessible:

```tsx
import { Radio } from '@mantine/core';

// Not ok, input is not labeled
function Bad() {
  return <Radio />;
}

// Ok, input is labelled by aria-label
function GoodAriaLabel() {
  return <Radio aria-label="My radio" />;
}

// Ok, input is labelled by label element
function GoodLabel() {
  return <Radio label="My radio" />;
}
```## Usage

```

import { Rating } from '@mantine/core';

function Demo() {
  return <Rating defaultValue={2}{{props}} />
}
```

## Controlled

```tsx
import { useState } from 'react';
import { Rating } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(0);
  return <Rating value={value} onChange={setValue} />;
}
```

## Read only

```

import { Rating } from '@mantine/core';

function Demo() {
  return <Rating value={3.5} fractions={2} readOnly />;
}
```

## Fractions

```

import { Rating, Group, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <Group>
        <div>Fractions: 2</div>
        <Rating fractions={2} defaultValue={1.5} />
      </Group>
      <Group>
        <div>Fractions: 3</div>
        <Rating fractions={3} defaultValue={2.33333333} />
      </Group>
      <Group>
        <div>Fractions: 4</div>
        <Rating fractions={4} defaultValue={3.75} />
      </Group>
    </Stack>
  );
}
```

## Custom symbol

```

import { Rating } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';

function Demo() {
  return <Rating emptySymbol={<IconSun size="1rem" />} fullSymbol={<IconMoon size="1rem" />} />;
}
```

## Symbols for each item

```

import { Rating, rem } from '@mantine/core';
import {
  IconMoodCry,
  IconMoodSad,
  IconMoodSmile,
  IconMoodHappy,
  IconMoodCrazyHappy,
} from '@tabler/icons-react';

const getIconStyle = (color?: string) => ({
  width: rem(24),
  height: rem(24),
  color: color ? `var(--mantine-color-${color}-7)` : undefined,
});

const getEmptyIcon = (value: number) => {
  const iconStyle = getIconStyle();

  switch (value) {
    case 1:
      return <IconMoodCry style={iconStyle} />;
    case 2:
      return <IconMoodSad style={iconStyle} />;
    case 3:
      return <IconMoodSmile style={iconStyle} />;
    case 4:
      return <IconMoodHappy style={iconStyle} />;
    case 5:
      return <IconMoodCrazyHappy style={iconStyle} />;
    default:
      return null;
  }
};

const getFullIcon = (value: number) => {
  switch (value) {
    case 1:
      return <IconMoodCry style={getIconStyle('red')} />;
    case 2:
      return <IconMoodSad style={getIconStyle('orange')} />;
    case 3:
      return <IconMoodSmile style={getIconStyle('yellow')} />;
    case 4:
      return <IconMoodHappy style={getIconStyle('lime')} />;
    case 5:
      return <IconMoodCrazyHappy style={getIconStyle('green')} />;
    default:
      return null;
  }
};

function Demo() {
  return <Rating emptySymbol={getEmptyIcon} fullSymbol={getFullIcon} highlightSelectedOnly />;
}
```## Usage

Set `sections` prop to an array of:

-   `value` – number between 0 and 100 – amount of space filled by segment
-   `color` – segment color from theme or any other css color value

```

import { RingProgress, Text } from '@mantine/core';

function Demo() {
  return (
    <RingProgress
      label={
        <Text size="xs" ta="center">
          Application data usage
        </Text>
      }
      sections={[
        { value: 40, color: 'cyan' },
        { value: 15, color: 'orange' },
        { value: 15, color: 'grape' },
      ]}
    />
  );
}
```

## Size, thickness & rounded caps

Use `size`, `thickness` & `roundCaps` props to configure RingProgress, size and thickness values:

```

import { RingProgress } from '@mantine/core';

function Demo() {
  return (
    <RingProgress
      {{props}}
      sections={[
        { value: 40, color: 'cyan' },
        { value: 15, color: 'orange' },
        { value: 15, color: 'grape' },
      ]}
    />
  )
}
```

## Sections tooltips

Add `tooltip` property to section to display floating Tooltip when user hovers over it:

```

import { RingProgress, Text } from '@mantine/core';

function Demo() {
  return (
    <RingProgress
      size={170}
      thickness={16}
      label={
        <Text size="xs" ta="center" px="xs" style={{ pointerEvents: 'none' }}>
          Hover sections to see tooltips
        </Text>
      }
      sections={[
        { value: 40, color: 'cyan', tooltip: 'Documents – 40 Gb' },
        { value: 25, color: 'orange', tooltip: 'Apps – 25 Gb' },
        { value: 15, color: 'grape', tooltip: 'Other – 15 Gb' },
      ]}
    />
  );
}
```

## Root color

Use `rootColor` property to change the root color:

```

import { RingProgress } from '@mantine/core';

function Demo() {
  return <RingProgress sections={[{ value: 40, color: 'yellow' }]} rootColor="red" />;
}
```

## Sections props

You can add any additional props to sections:

```

import { useState } from 'react';
import { RingProgress, Text } from '@mantine/core';

function Demo() {
  const [hovered, setHovered] = useState(-1);
  const reset = () => setHovered(-1);
  return (
    <>
      <RingProgress
        onMouseLeave={() => setHovered(-1)}
        size={140}
        sections={[
          { value: 40, color: 'cyan', onMouseEnter: () => setHovered(0), onMouseLeave: reset },
          { value: 20, color: 'blue', onMouseEnter: () => setHovered(1), onMouseLeave: reset },
          { value: 15, color: 'indigo', onMouseEnter: () => setHovered(2), onMouseLeave: reset },
        ]}
      />
      <Text>Hovered section: {hovered === -1 ? 'none' : hovered}</Text>
    </>
  );
}
```

## Customize label

You can add any React node as label, e.g. Text component with some additional styles or ThemeIcon:

```

import { ActionIcon, RingProgress, Text, Center, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <RingProgress
        sections={[{ value: 40, color: 'blue' }]}
        label={
          <Text c="blue" fw={700} ta="center" size="xl">
            40%
          </Text>
        }
      />

      <RingProgress
        sections={[{ value: 100, color: 'teal' }]}
        label={
          <Center>
            <ActionIcon color="teal" variant="light" radius="xl" size="xl">
              <IconCheck style={{ width: rem(22), height: rem(22) }} />
            </ActionIcon>
          </Center>
        }
      />
    </>
  );
}
```## Usage

`ScrollArea` component supports the following props:

-   `type` defines scrollbars behavior:
    -   `hover` – scrollbars are visible on hover
    -   `scroll` – scrollbars are visible on scroll
    -   `auto` – similar to `overflow: auto` – scrollbars are always visible when the content is overflowing
    -   `always` – same as `auto`, but scrollbars are always visible regardless of whether the content is overflowing
    -   `never` – scrollbars are always hidden
-   `offsetScrollbars` – offset scrollbars with padding
-   `scrollbarSize` – scrollbar size, controls scrollbar and thumb width/height
-   `scrollHideDelay` – delay in ms to hide scrollbars, applicable only when type is `hover` or `scroll`

```

import { ScrollArea } from '@mantine/core';

function Demo() {
  return (
    <ScrollArea h={250}{{props}}>
      {/* ... content */}
    </ScrollArea>
  );
}
```

## Horizontal scrollbars

```

import { ScrollArea, Box } from '@mantine/core';

function Demo() {
  return (
    <ScrollArea w={300} h={200}>
      <Box w={600}>
        {/* ... content */}
      </Box>
    </ScrollArea>
  );
}
```

## Disable horizontal scrollbars

To disable horizontal scrollbars set `scrollbars="y"` prop:

```

import { ScrollArea, Box } from '@mantine/core';

function Demo() {
  return (
    <ScrollArea w={300} h={200} scrollbars="y">
      <Box w={600}>
        {/* ... content */}
      </Box>
    </ScrollArea>
  );
}
```

## Subscribe to scroll position changes

Set `onScrollPositionChange` function to subscribe to scroll position changes, it will be called each time user scrolls with x and y coordinates:

```

import { useState } from 'react';
import { Text, ScrollArea, Code, Box } from '@mantine/core';

function Demo() {
  const [scrollPosition, onScrollPositionChange] = useState({ x: 0, y: 0 });

  return (
    <>
      <ScrollArea
        w={300}
        h={200}
        onScrollPositionChange={onScrollPositionChange}
      >
        <Box w={600}>
          {/* ... content */}
        </Box>
      </ScrollArea>

      <Text>
        Scroll position: <Code>{`{ x: ${scrollPosition.x}, y: ${scrollPosition.y} }`}</Code>
      </Text>
    </>
  );
}
```

## Scroll to position

To programmatically scroll to any position, get viewport element ref with `viewportRef` prop and call `scrollTo` method:

```

import { useRef } from 'react';
import { ScrollArea, Button, Stack, Group } from '@mantine/core';

function Demo() {
  const viewport = useRef<HTMLDivElement>(null);

  const scrollToBottom = () =>
    viewport.current!.scrollTo({ top: viewport.current!.scrollHeight, behavior: 'smooth' });

  const scrollToCenter = () =>
    viewport.current!.scrollTo({ top: viewport.current!.scrollHeight / 2, behavior: 'smooth' });

  const scrollToTop = () => viewport.current!.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <Stack align="center">
      <ScrollArea w={300} h={200} viewportRef={viewport}>
        {/* ... content */}
      </ScrollArea>

      <Group justify="center">
        <Button onClick={scrollToBottom}>Scroll to bottom</Button>
        <Button onClick={scrollToCenter}>Scroll to center</Button>
        <Button onClick={scrollToTop}>Scroll to top</Button>
      </Group>
    </Stack>
  );
}
```

## Styles API

```

import { ScrollArea, Box } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <ScrollArea w={300} h={200} type="always" offsetScrollbars classNames={classes}>
      <Box w={600}>
        {/* ... content */}
      </Box>
    </ScrollArea>
  );
}
```

## Scroll element into view

```

import { useState, useRef } from 'react';
import { ScrollArea, UnstyledButton, TextInput } from '@mantine/core';

const groceries: string[] = [
  '🍎 Apples',
  '🍌 Bananas',
  '🍊 Oranges',
  '🥛 Milk',
  '🍞 Bread',
  '🥚 Eggs',
  '🍗 Chicken',
  '🥩 Beef',
  '🍝 Pasta',
  '🍚 Rice',
  '🥔 Potatoes',
  '🧅 Onions',
  '🍅 Tomatoes',
  '🥒 Cucumbers',
  '🥕 Carrots',
  '🥬 Lettuce',
  '🍃 Spinach',
  '🥦 Broccoli',
  '🧀 Cheese',
  '🍦 Yogurt',
  '🧈 Butter',
  '🍚 Sugar',
  '🧂 Salt',
  '🌶️ Pepper',
  '☕ Coffee',
  '🍵 Tea',
  '🥤 Juice',
  '💧 Water',
  '🍪 Cookies',
  '🍫 Chocolate',
];

function Demo() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState('');
  const [hovered, setHovered] = useState(-1);
  const filtered = groceries.filter((item) => item.toLowerCase().includes(query.toLowerCase()));
  const items = filtered.map((item, index) => (
    <UnstyledButton
      data-list-item
      key={item}
      display="block"
      bg={index === hovered ? 'var(--mantine-color-blue-light)' : undefined}
      w="100%"
      p={5}
    >
      {item}
    </UnstyledButton>
  ));

  return (
    <>
      <TextInput
        value={query}
        onChange={(event) => {
          setQuery(event.currentTarget.value);
          setHovered(-1);
        }}
        onKeyDown={(event) => {
          if (event.key === 'ArrowDown') {
            event.preventDefault();
            setHovered((current) => {
              const nextIndex = current + 1 >= filtered.length ? current : current + 1;
              viewportRef.current
                ?.querySelectorAll('[data-list-item]')
                ?.[nextIndex]?.scrollIntoView({ block: 'nearest' });
              return nextIndex;
            });
          }

          if (event.key === 'ArrowUp') {
            event.preventDefault();
            setHovered((current) => {
              const nextIndex = current - 1 < 0 ? current : current - 1;
              viewportRef.current
                ?.querySelectorAll('[data-list-item]')
                ?.[nextIndex]?.scrollIntoView({ block: 'nearest' });
              return nextIndex;
            });
          }
        }}
        placeholder="Search groceries"
      />
      <ScrollArea h={150} type="always" mt="md" viewportRef={viewportRef}>
        {items}
      </ScrollArea>
    </>
  );
}
```

## ScrollArea.Autosize

`ScrollArea.Autosize` component allows to create scrollable containers when given max-height is reached:

```

import { useCounter } from '@mantine/hooks';
import { ScrollArea, Button, Group } from '@mantine/core';

const lorem =
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta perspiciatis reiciendis voluptate eaque itaque quos. Natus iure tenetur libero, reprehenderit ad, sequi, in aliquam eos necessitatibus expedita delectus veniam culpa!';

function Demo() {
  const [count, handlers] = useCounter(3, { min: 0, max: 10 });
  const content = Array(count)
    .fill(0)
    .map((_, index) => <p key={index}>{lorem}</p>);

  return (
    <>
      <ScrollArea.Autosize mah={300} maw={400} mx="auto">
        {content}
      </ScrollArea.Autosize>

      <Group justify="center" mt="md">
        <Button color="red" onClick={handlers.decrement}>
          Remove paragraph
        </Button>
        <Button onClick={handlers.increment}>
          Add paragraph
        </Button>
      </Group>
    </>
  );
}
```

## ScrollArea.Autosize with Popover

```

import { useState, useRef } from 'react';
import { ScrollArea, Popover, TextInput, UnstyledButton, Text, Box } from '@mantine/core';

const groceries = [
  'Apples',
  'Bananas',
  'Oranges',
  'Milk',
  'Bread',
  'Eggs',
  'Chicken',
  'Beef',
  'Pasta',
  'Rice',
  'Potatoes',
  'Onions',
  'Tomatoes',
  'Cucumbers',
  'Carrots',
  'Lettuce',
  'Spinach',
  'Broccoli',
  'Cheese',
  'Yogurt',
  'Butter',
  'Sugar',
  'Salt',
  'Pepper',
  'Coffee',
  'Tea',
  'Juice',
  'Water',
  'Cookies',
  'Chocolate',
];

function Demo() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState('');
  const [opened, setOpened] = useState(false);
  const [hovered, setHovered] = useState(-1);
  const filtered = groceries.filter((item) => item.toLowerCase().includes(query.toLowerCase()));
  const items = filtered.map((item, index) => (
    <UnstyledButton
      data-list-item
      key={item}
      display="block"
      bg={index === hovered ? 'var(--mantine-color-blue-light)' : undefined}
      w="100%"
      p={5}
    >
      {item}
    </UnstyledButton>
  ));

  return (
    <Popover width="target" opened={opened}>
      <Popover.Target>
        <TextInput
          value={query}
          onFocus={() => setOpened(true)}
          onBlur={() => setOpened(false)}
          onChange={(event) => {
            setQuery(event.currentTarget.value);
            setHovered(-1);
          }}
          onKeyDown={(event) => {
            if (event.key === 'ArrowDown') {
              event.preventDefault();
              setHovered((current) => {
                const nextIndex = current + 1 >= filtered.length ? current : current + 1;
                viewportRef.current
                  ?.querySelectorAll('[data-list-item]')
                  ?.[nextIndex]?.scrollIntoView({ block: 'nearest' });
                return nextIndex;
              });
            }

            if (event.key === 'ArrowUp') {
              event.preventDefault();
              setHovered((current) => {
                const nextIndex = current - 1 < 0 ? current : current - 1;
                viewportRef.current
                  ?.querySelectorAll('[data-list-item]')
                  ?.[nextIndex]?.scrollIntoView({ block: 'nearest' });
                return nextIndex;
              });
            }
          }}
          placeholder="Search groceries"
        />
      </Popover.Target>
      <Popover.Dropdown p={0}>
        <ScrollArea.Autosize viewportRef={viewportRef} mah={200} type="always" scrollbars="y">
          <Box px="xs" py={5}>
            {items.length > 0 ? items : <Text c="dimmed">Nothing found</Text>}
          </Box>
        </ScrollArea.Autosize>
      </Popover.Dropdown>
    </Popover>
  );
}
```## Usage

```

import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl{{props}} data={['React', 'Angular', 'Vue']} />;
}
```

## Controlled

```tsx
import { useState } from 'react';
import { SegmentedControl } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('react');

  return (
    <SegmentedControl
      value={value}
      onChange={setValue}
      data={[
        { label: 'React', value: 'react' },
        { label: 'Angular', value: 'ng' },
        { label: 'Vue', value: 'vue' },
        { label: 'Svelte', value: 'svelte' },
      ]}
    />
  );
}
```

## Data prop

`SegmentedControl` support two different data formats:

1.  An array of strings – used when `value` and `label` are the same
2.  An array of objects – used when `value` and `label` are different

```tsx
import { SegmentedControl } from '@mantine/core';

function ArrayOfStrings() {
  return (
    <SegmentedControl data={['React', 'Angular', 'Svelte', 'Vue']} />
  );
}

function ArrayOfObjects() {
  return (
    <SegmentedControl
      data={[
        { value: 'React', label: 'React' },
        { value: 'Angular', label: 'Angular' },
        { value: 'Svelte', label: 'Svelte' },
        { value: 'Vue', label: 'Vue' },
      ]}
    />
  );
}
```

## Disabled

To disable `SegmentedControl` item, use array of objects `data` format and set `disabled: true` on the item that you want to disable. To disable the entire component, use `disabled` prop.

```

import { SegmentedControl } from '@mantine/core';

function Demo() {
  return (
    <Stack align="center">
      <div>
        <Text size="sm" fw={500} mb={3}>
          Disabled control
        </Text>
        <SegmentedControl
          disabled
          data={[
            {
              value: 'preview',
              label: 'Preview',
            },
            {
              value: 'code',
              label: 'Code',
            },
            {
              value: 'export',
              label: 'Export',
            },
          ]}
        />
      </div>

      <div>
        <Text size="sm" fw={500} mb={3}>
          Disabled option
        </Text>
        <SegmentedControl
          data={[
            {
              value: 'preview',
              label: 'Preview',
              disabled: true,
            },
            {
              value: 'code',
              label: 'Code',
            },
            {
              value: 'export',
              label: 'Export',
            },
          ]}
        />
      </div>
    </Stack>
  );
}
```

## React node as label

You can use any React node as label:

```

import { Center, SegmentedControl, rem } from '@mantine/core';
import { IconEye, IconCode, IconExternalLink } from '@tabler/icons-react';

function Demo() {
  return (
    <SegmentedControl
      data={[
        {
          value: 'preview',
          label: (
            <Center style={{ gap: 10 }}>
              <IconEye style={{ width: rem(16), height: rem(16) }} />
              <span>Preview</span>
            </Center>
          ),
        },
        {
          value: 'code',
          label: (
            <Center style={{ gap: 10 }}>
              <IconCode style={{ width: rem(16), height: rem(16) }} />
              <span>Code</span>
            </Center>
          ),
        },
        {
          value: 'export',
          label: (
            <Center style={{ gap: 10 }}>
              <IconExternalLink style={{ width: rem(16), height: rem(16) }} />
              <span>Export</span>
            </Center>
          ),
        },
      ]}
    />
  );
}
```

## Color

By default, `SegmentedControl` uses `theme.white` with shadow in light color scheme and `var(--mantine-color-dark-6)` background color for indicator. Set `color` prop to change indicator `background-color`:

```

import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl{{props}} data={['React', 'Angular', 'Vue', 'Svelte']} />;
}
```

## Transitions

Change transition properties with:

-   `transitionDuration` – all transitions duration in ms, `200` by default
-   `transitionTimingFunction` – all transitions timing function, `ease` by default

```

import { SegmentedControl, Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text size="sm" fw={500} mt={3}>
        No transitions
      </Text>
      <SegmentedControl data={['React', 'Angular', 'Vue', 'Svelte']} transitionDuration={0} />

      <Text size="sm" fw={500} mt="md">
        500ms linear transition
      </Text>
      <SegmentedControl
        data={['React', 'Angular', 'Vue', 'Svelte']}
        transitionDuration={500}
        transitionTimingFunction="linear"
      />
    </>
  );
}
```

## readOnly

Set `readOnly` prop to prevent value from being changed:

```

import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl readOnly defaultValue="Angular" data={['React', 'Angular', 'Vue']} />;
}
```

```

import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl{{props}} data={['React', 'Angular', 'Vue']} />;
}
```

## Accessibility and usability

`SegmentedControl` uses radio inputs under the hood, it is accessible by default with no extra steps required if you have text in labels. Component support the same keyboard events as a regular radio group.

In case you do not have text in labels (for example, when you want to use `SegmentedControl` with icons only), use VisuallyHidden to make component accessible:

```

import { SegmentedControl, VisuallyHidden, rem } from '@mantine/core';
import { IconEye, IconCode, IconExternalLink } from '@tabler/icons-react';

function Demo() {
  const iconProps = {
    style: { width: rem(20), height: rem(20), display: 'block' },
    stroke: 1.5,
  };

  return (
    <SegmentedControl
      data={[
        {
          value: 'preview',
          label: (
            <>
              <IconEye {...iconProps} />
              <VisuallyHidden>Preview</VisuallyHidden>
            </>
          ),
        },
        {
          value: 'code',
          label: (
            <>
              <IconCode {...iconProps} />
              <VisuallyHidden>Code</VisuallyHidden>
            </>
          ),
        },
        {
          value: 'export',
          label: (
            <>
              <IconExternalLink {...iconProps} />
              <VisuallyHidden>Export</VisuallyHidden>
            </>
          ),
        },
      ]}
    />
  );
}
```## Usage

`Select` allows capturing user input based on suggestions from the list. Unlike Autocomplete, `Select` does not allow entering custom values.

```

import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
  );
}
```

## Controlled

`Select` value must be a string, other types are not supported. `onChange` function is called with a string value as a single argument.

```tsx
import { useState } from 'react';
import { Select } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<string | null>('');
  return <Select data={[]} value={value} onChange={setValue} />;
}
```

## onChange handler

`onChange` is called with two arguments:

-   `value` - string value of the selected option
-   `option` – selected option object

If you prefer object format in state, use second argument of onChange handler:

```tsx
import { useState } from 'react';
import { ComboboxItem, Select } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<ComboboxItem | null>(null);
  return (
    <Select
      data={[{ value: 'react', label: 'React library' }]}
      value={value ? value.value : null}
      onChange={(_value, option) => setValue(option)}
    />
  );
}
```

## Clearable

Set `clearable` prop to display the clear button in the right section. The button is not displayed when:

-   The component does not have a value
-   The component is disabled
-   The component is read only

```

import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      defaultValue="React"
      clearable
    />
  );
}
```

## Allow deselect

`allowDeselect` prop determines whether the value should be deselected when user clicks on the selected option. By default, `allowDeselect` is `true`:

```

import { Select } from '@mantine/core';

function Demo() {
  return (
    <>
      <Select
        label="Option can NOT be deselected"
        placeholder="Pick value"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        defaultValue="React"
        allowDeselect={false}
      />

      <Select
        label="Option can be deselected"
        description="This is default behavior, click 'React' in the dropdown"
        placeholder="Pick value"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        defaultValue="React"
        allowDeselect
        mt="md"
      />
    </>
  );
}
```

## Searchable

Set `searchable` prop to allow filtering options by user input:

```

import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      searchable
    />
  );
}
```

## Controlled search value

You can control search value with `searchValue` and `onSearchChange` props:

```tsx
import { useState } from 'react';
import { Select } from '@mantine/core';

function Demo() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <Select
      searchable
      searchValue={searchValue}
      onSearchChange={setSearchValue}
      data={[]}
    />
  );
}
```

## Nothing found

Set the `nothingFoundMessage` prop to display a given message when no options match the search query or there is no data available. If the `nothingFoundMessage` prop is not set, the `Select` dropdown will be hidden.

```

import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      searchable
      nothingFoundMessage="Nothing found..."
    />
  );
}
```

## Checked option icon

Set `checkIconPosition` prop to `left` or `right` to control position of check icon in active option. To remove the check icon, set `withCheckIcon={false}`.

```

import { Select } from '@mantine/core';


function Demo() {
  return (
    <Select
      {{props}}
      data={['React', 'Angular', 'Svelte', 'Vue']}
      dropdownOpened
      pb={150}
      label="Control check icon"
      placeholder="Pick value"
      defaultValue="React"
    />
  );
}
```

```

import { Select, ComboboxItem, OptionsFilter } from '@mantine/core';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const splittedSearch = search.toLowerCase().trim().split(' ');
  return (options as ComboboxItem[]).filter((option) => {
    const words = option.label.toLowerCase().trim().split(' ');
    return splittedSearch.every((searchWord) => words.some((word) => word.includes(searchWord)));
  });
};

function Demo() {
  return (
    <Select
      label="Your country"
      placeholder="Pick value"
      data={['Great Britain', 'Russian Federation', 'United States']}
      filter={optionsFilter}
      searchable
    />
  );
}
```

## Sort options

By default, options are sorted by their position in the data array. You can change this behavior with `filter` function:

```

import { Select, ComboboxItem, OptionsFilter } from '@mantine/core';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const filtered = (options as ComboboxItem[]).filter((option) =>
    option.label.toLowerCase().trim().includes(search.toLowerCase().trim())
  );

  filtered.sort((a, b) => a.label.localeCompare(b.label));
  return filtered;
};

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['4 – React', '1 – Angular', '3 – Vue', '2 – Svelte']}
      filter={optionsFilter}
      nothingFoundMessage="Nothing found..."
      searchable
    />
  );
}
```

```

import { Select } from '@mantine/core';

const largeData = Array(100_000)
  .fill(0)
  .map((_, index) => `Option ${index}`);

function Demo() {
  return (
    <Select
      label="100 000 options autocomplete"
      placeholder="Use limit to optimize performance"
      limit={5}
      data={largeData}
      searchable
    />
  );
}
```

## renderOption

`renderOption` callback allows you to customize option rendering. It is called with option object and checked state. The function must return a React node.

```

import {
  IconAlignCenter,
  IconAlignJustified,
  IconAlignLeft,
  IconAlignRight,
  IconCheck,
} from '@tabler/icons-react';
import { Group, Select, SelectProps } from '@mantine/core';

const iconProps = {
  stroke: 1.5,
  color: 'currentColor',
  opacity: 0.6,
  size: 18,
};

const icons: Record<string, React.ReactNode> = {
  left: <IconAlignLeft {...iconProps} />,
  center: <IconAlignCenter {...iconProps} />,
  right: <IconAlignRight {...iconProps} />,
  justify: <IconAlignJustified {...iconProps} />,
};

const renderSelectOption: SelectProps['renderOption'] = ({ option, checked }) => (
  <Group flex="1" gap="xs">
    {icons[option.value]}
    {option.label}
    {checked && <IconCheck style={{ marginInlineStart: 'auto' }} {...iconProps} />}
  </Group>
);

function Demo() {
  return (
    <Select
      label="Select with renderOption"
      placeholder="Select text align"
      data={[
        { value: 'left', label: 'Left' },
        { value: 'center', label: 'Center' },
        { value: 'right', label: 'Right' },
        { value: 'justify', label: 'Justify' },
      ]}
      renderOption={renderSelectOption}
    />
  );
}
```

## Scrollable dropdown

By default, the options list is wrapped with ScrollArea.Autosize. You can control dropdown max-height with `maxDropdownHeight` prop if you do not change the default settings.

If you want to use native scrollbars, set `withScrollArea={false}`. Note that in this case, you will need to change dropdown styles with Styles API.

```

import { Select } from '@mantine/core';

const data = Array(100)
  .fill(0)
  .map((_, index) => `Option ${index}`);

function Demo() {
  return (
    <>
      <Select
        label="With scroll area (default)"
        placeholder="Pick value"
        data={data}
        maxDropdownHeight={200}
      />

      <Select
        label="With native scroll"
        placeholder="Pick value"
        data={data}
        withScrollArea={false}
        styles={{ dropdown: { maxHeight: 200, overflowY: 'auto' } }}
        mt="md"
      />
    </>
  );
}
```

## Group options

```

import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={[
        { group: 'Frontend', items: ['React', 'Angular'] },
        { group: 'Backend', items: ['Express', 'Django'] },
      ]}
    />
  );
}
```

## Disabled options

When option is disabled, it cannot be selected and is ignored in keyboard navigation.

```

import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={[
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'vue', label: 'Vue', disabled: true },
        { value: 'svelte', label: 'Svelte', disabled: true },
      ]}
    />
  );
}
```

## Inside Popover

To use `Select` inside popover, you need to set `withinPortal: false`:

```

import { Popover, Button, Select } from '@mantine/core';

function Demo() {
  return (
    <Popover width={300} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Select
          label="Your favorite library"
          placeholder="Pick value"
          data={['React', 'Angular', 'Vue', 'Svelte']}
          comboboxProps={{ withinPortal: false }}
        />
      </Popover.Dropdown>
    </Popover>
  );
}
```

## Control dropdown opened state

You can control dropdown opened state with `dropdownOpened` prop. Additionally, you can use `onDropdownClose` and `onDropdownOpen` to listen to dropdown opened state changes.

```

import { Select, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [dropdownOpened, { toggle }] = useDisclosure();
  return (
    <>
      <Button onClick={toggle} mb="md">
        Toggle dropdown
      </Button>

      <Select
        label="Your favorite library"
        placeholder="Pick value"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        dropdownOpened={dropdownOpened}
      />
    </>
  );
}
```

## Dropdown position

By default, the dropdown is displayed below the input if there is enough space; otherwise it is displayed above the input. You can change this behavior by setting `position` and `middlewares` props, which are passed down to the underlying Popover component.

Example of dropdown that is always displayed above the input:

```

import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ position: 'top', middlewares: { flip: false, shift: false } }}
    />
  );
}
```

## Dropdown width

To change dropdown width, set `width` prop in `comboboxProps`. By default, dropdown width is equal to the input width.

```

import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ width: 200, position: 'bottom-start' }}
    />
  );
}
```

## Dropdown offset

To change dropdown offset, set `offset` prop in `comboboxProps`:

```

import { Select } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      classNames={classes}
      comboboxProps={{ position: 'bottom', middlewares: { flip: false, shift: false }, offset: 0 }}
    />
  );
}
```

## Dropdown animation

By default, dropdown animations are disabled. To enable them, you can set `transitionProps`, which will be passed down to the underlying Transition component.

```

import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
    />
  );
}
```

## Dropdown padding

```

import { Select } from '@mantine/core';

function Demo() {
  return (
    <>
      <Select
        label="Zero padding"
        placeholder="Pick value"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        comboboxProps={{ dropdownPadding: 0 }}
      />
      <Select
        mt="md"
        label="10px padding"
        placeholder="Pick value"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        comboboxProps={{ dropdownPadding: 10 }}
      />
    </>
  );
}
```

## Dropdown shadow

```

import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ shadow: 'md' }}
    />
  );
}
```

```

import { Select, rem } from '@mantine/core';
import { IconComponents } from '@tabler/icons-react';

function Demo() {
  const icon = <IconComponents style={{ width: rem(16), height: rem(16) }} />;
  return (
    <>
      <Select
        data={['React', 'Angular', 'Vue']}
        leftSectionPointerEvents="none"
        leftSection={icon}
        label="Your favorite library"
        placeholder="Your favorite library"
      />
      <Select
        mt="md"
        data={['React', 'Angular', 'Vue']}
        rightSectionPointerEvents="none"
        rightSection={icon}
        label="Your favorite library"
        placeholder="Your favorite library"
      />
    </>
  );
}
```

## Input props

```

import { Select } from '@mantine/core';


function Demo() {
  return (
    <Select
      {{props}}
      placeholder="Select placeholder"
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
  );
}
```

## Read only

Set `readOnly` to make the input read only. When `readOnly` is set, `Select` will not show suggestions and will not call `onChange` function.

```

import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      readOnly
    />
  );
}
```

## Disabled

Set `disabled` to disable the input. When `disabled` is set, user cannot interact with the input and `Select` will not show suggestions.

```

import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      disabled
    />
  );
}
```

## Error state

```

import { Select } from '@mantine/core';

function Demo() {
  return (
    <>
      <Select
        label="Boolean error"
        placeholder="Boolean error"
        error
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
      <Select
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
    </>
  );
}
```

```

import { IconAt } from '@tabler/icons-react';
import { Select, rem } from '@mantine/core';

function Demo() {
  return (
    <Select
     {{props}}
      leftSection={<IconAt style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
      label="Select"
      description="Description"
      error="Error"
      placeholder="Select"
      data={['React', 'Angular']}
    />
  );
}
```

To set `aria-label` on the clear button, use `clearButtonProps`. Note that it is required only when `clearable` is set.

```tsx
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      data={[]}
      clearable
      clearButtonProps={{
        'aria-label': 'Clear input',
      }}
    />
  );
}
```## Usage

```

import { SemiCircleProgress } from '@mantine/core';


function Demo() {
  return (
    <SemiCircleProgress
      {{props}}
      label="Label"
    />
  );
}
```

## Change empty segment color

Use `emptySegmentColor` prop to change color of empty segment, it accepts key of `theme.colors` or any valid CSS color value:

```

import { SemiCircleProgress } from '@mantine/core';

function Demo() {
  return <SemiCircleProgress value={30} emptySegmentColor="var(--mantine-color-dimmed)" />;
}
```

## Change label position

By default, the label is displayed at the bottom of the component, you can change its position to `center` by using `labelPosition` prop:

```

import { SemiCircleProgress } from '@mantine/core';

function Demo() {
  return (
    <>
      <SemiCircleProgress value={30} label="Bottom" mb="xl" />
      <SemiCircleProgress value={30} label="Center" labelPosition="center" />
    </>
  );
}
```

## Filled segment transition

By default, transitions are disabled, to enable them, set `transitionDuration` prop to a number of milliseconds:

```

import { useState } from 'react';
import { Button, SemiCircleProgress } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(30);

  return (
    <>
      <SemiCircleProgress value={value} transitionDuration={250} label={`${value}%`} />

      <Button onClick={() => setValue(Math.floor(Math.random() * 100))} mt="xl" fullWidth>
        Set random value
      </Button>
    </>
  );
}
```## Usage

`SimpleGrid` is a responsive grid system with equal-width columns. It uses CSS grid layout. If you need to set different widths for columns, use Grid component instead.

```

import { SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    <SimpleGrid{{props}}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </SimpleGrid>
  )
}
```

## spacing and verticalSpacing props

`spacing` prop is used both for horizontal and vertical spacing if `verticalSpacing` is not set:

```tsx
import { SimpleGrid } from '@mantine/core';

// `spacing` is used for both horizontal and vertical spacing
const Spacing = () => <SimpleGrid spacing="xl" />;

// `spacing` is used for horizontal spacing, `verticalSpacing` for vertical
const VerticalSpacing = () => (
  <SimpleGrid spacing="xl" verticalSpacing="lg" />
);
```

## Responsive props

`cols`, `spacing` and `verticalSpacing` props support object notation for responsive values, it works the same way as style props: the object may have `base`, `xs`, `sm`, `md`, `lg` and `xl` key, and values from those keys will be applied according to current viewport width.

In the following example, `cols={{ base: 1, sm: 2, lg: 5 }}` means:

-   1 column if viewport width is less than `sm` breakpoint
-   2 columns if viewport width is between `sm` and `lg` breakpoints
-   5 columns if viewport width is greater than `lg` breakpoint

Same logic applies to `spacing` and `verticalSpacing` props.

```

import { SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, lg: 5 }}
      spacing={{ base: 10, sm: 'xl' }}
      verticalSpacing={{ base: 'md', sm: 'xl' }}
    >
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </SimpleGrid>
  );
}
```

## Container queries

To use container queries instead of media queries, set `type="container"`. With container queries, grid columns and spacing will be adjusted based on the container width, not the viewport width.

Note that, when using container queries, `cols`, `spacing` and `verticalSpacing` props cannot reference `theme.breakpoints` values in keys. In is required to use exact px or em values.

To see how the grid changes, resize the root element of the demo with the resize handle located at the bottom right corner of the demo:

```

import { SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    // Wrapper div is added for demonstration purposes only,
    // it is not required in real projects
    <div style={{ resize: 'horizontal', overflow: 'hidden', maxWidth: '100%' }}>
      <SimpleGrid
        type="container"
        cols={{ base: 1, '300px': 2, '500px': 5 }}
        spacing={{ base: 10, '300px': 'xl' }}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </SimpleGrid>
    </div>
  );
}
```

## Browser support

`SimpleGrid` uses CSS Grid Layout, it is supported in all modern browsers. If you need to support older browsers, use Grid (flexbox based) component instead.

When `type="container"` is set, `SimpleGrid` uses container queries. Since February 2023, container queries are supported in all modern browsers. If you need to support older browsers, do not use container queries option.## Usage

Use `Skeleton` to create a placeholder for loading content. `Skeleton` support the following props:

-   `height` – height – any valid CSS value
-   `width` – width - any valid CSS value
-   `radius` – key of `theme.radius` or any valid CSS value to set border-radius
-   `circle` – if true width, height and border-radius will equal to value specified in `height` prop
-   `animate` – true by default, controls animation

```
(props) => `
  import { Skeleton } from '@mantine/core';

  function Demo() {
    return (
      <>
        
        
        
        
      
    );
  }
  `
```

## With content

If you want to indicate the loading state of content that is already on page, wrap it with Skeleton and control loading overlay visibility with `visible` prop:

```

import { useState } from 'react';
import { Skeleton, Button } from '@mantine/core';

function Demo() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Skeleton visible={loading}>
        Lorem ipsum dolor sit amet...
        {/* other content */}
      </Skeleton>

      <Button onClick={() => setLoading((l) => !l)}>
        Toggle Skeleton
      </Button>
    </>
  );
}
```## Usage

```

import { Slider } from '@mantine/core';


function Demo() {
  return (
    <Slider
      {{props}}
      marks={[
        { value: 20, label: '20%' },
        { value: 50, label: '50%' },
        { value: 80, label: '80%' },
      ]}
    />
  );
}
```

## Controlled

Controlled `Slider`:

```tsx
import { useState } from 'react';
import { Slider } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(40);
  return <Slider value={value} onChange={setValue} />;
}
```

Controlled `RangeSlider`:

```tsx
import { useState } from 'react';
import { RangeSlider } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<[number, number]>([20, 80]);
  return <RangeSlider value={value} onChange={setValue} />;
}
```

## Disabled

```

import { Slider, RangeSlider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Slider defaultValue={60} disabled />
      <RangeSlider
        mt="xl"
        mb="xl"
        disabled
        defaultValue={[25, 75]}
        marks={[
          { value: 0, label: 'xs' },
          { value: 25, label: 'sm' },
          { value: 50, label: 'md' },
          { value: 75, label: 'lg' },
          { value: 100, label: 'xl' },
        ]}
      />
    </>
  );
}
```

## onChangeEnd

`onChangeEnd` callback is called when user the slider is stopped from being dragged or value is changed with keyboard. You can use it as a debounced callback to avoid too frequent updates.

```

import { useState } from 'react';
import { Slider, Text, Box } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(50);
  const [endValue, setEndValue] = useState(50);

  return (
    <Box maw={400} mx="auto">
      <Slider value={value} onChange={setValue} onChangeEnd={setEndValue} />
      <Text mt="md" size="sm">
        onChange value: <b>{value}</b>
      </Text>
      <Text mt={5} size="sm">
        onChangeEnd value: <b>{endValue}</b>
      </Text>
    </Box>
  );
}
```

## Control label

To change label behavior and appearance, set the following props:

-   `label` – formatter function, accepts value as an argument, set null to disable label, defaults to `f => f`
-   `labelAlwaysOn` – if true – label will always be displayed, by default label is visible only when user is dragging
-   `labelTransitionProps` – props passed down to the Transition component, can be used to customize label animation

```

import { Slider, Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text size="sm">No label</Text>
      <Slider defaultValue={40} label={null} />

      <Text size="sm" mt="xl">Formatted label</Text>
      <Slider defaultValue={40} label={(value) => `${value} °C`} />

      <Text size="sm" mt="xl">Label always visible</Text>
      <Slider defaultValue={40} labelAlwaysOn />

      <Text size="sm" mt="xl">Custom label transition</Text>
      <Slider
        defaultValue={40}
        labelTransitionProps={{
          transition: 'skew-down',
          duration: 150,
          timingFunction: 'linear',
        }}
      />
    </>
  );
}
```

## Min, max and step

```

import { Slider, Text } from '@mantine/core';

const marks = [
  { value: 0, label: 'xs' },
  { value: 25, label: 'sm' },
  { value: 50, label: 'md' },
  { value: 75, label: 'lg' },
  { value: 100, label: 'xl' },
];

function Demo() {
  return (
    <>
      <Text>Decimal step</Text>
      <Slider
        defaultValue={0}
        min={-10}
        max={10}
        label={(value) => value.toFixed(1)}
        step={0.1}
        styles={{ markLabel: { display: 'none' } }}
      />

      <Text mt="md">Step matched with marks</Text>
      <Slider
        defaultValue={50}
        label={(val) => marks.find((mark) => mark.value === val)!.label}
        step={25}
        marks={marks}
        styles={{ markLabel: { display: 'none' } }}
      />
    </>
  );
}
```

## Decimal values

To use `Slider` with decimal values, set `min`, `max` and `step` props:

```

import { Slider } from '@mantine/core';

function Demo() {
  return <Slider min={0} max={1} step={0.0005} defaultValue={0.5535} />;
}
```

## minRange

Use `minRange` prop to control minimum range between `from` and `to` values in `RangeSlider`. The default value is `10`. The example below shows how to use `minRange` prop to capture decimal values from the user:

```

import { RangeSlider } from '@mantine/core';

function Demo() {
  return (
    <RangeSlider minRange={0.2} min={0} max={1} step={0.0005} defaultValue={[0.1245, 0.5535]} />
  );
}
```

## Marks

Add any number of marks to slider by setting `marks` prop to an array of objects:

```tsx
const marks = [
  { value: 20 }, // -> displays mark on slider track
  { value: 40, label: '40%' }, // -> adds mark label below slider track
];
```

Note that mark value is relative to slider value, not width:

```

import { Slider, RangeSlider } from '@mantine/core';

const marks = [
  { value: 20, label: '20%' },
  { value: 50, label: '50%' },
  { value: 80, label: '80%' },
];

function Demo() {
  return (
    <>
      <Slider defaultValue={40} marks={[{ value: 10 }, { value: 40 }, { value: 95 }]} />
      <Slider defaultValue={40} marks={marks} />
      <RangeSlider defaultValue={[20, 80]} marks={marks} />
    </>
  );
}
```

## Thumb size

```

import { Slider } from '@mantine/core';

function Demo() {
  return <Slider{{props}} defaultValue={20} />;
}
```

## Thumb children

```

import { Slider, RangeSlider, rem } from '@mantine/core';
import { IconHeart, IconHeartBroken } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <Slider
        thumbChildren={<IconHeart size="1rem" />}
        color="red"
        label={null}
        defaultValue={40}
        thumbSize={26}
        styles={{ thumb: { borderWidth: rem(2), padding: rem(3) } }}
      />

      <RangeSlider
        mt="xl"
        styles={{ thumb: { borderWidth: rem(2), padding: rem(3) } }}
        color="red"
        label={null}
        defaultValue={[20, 60]}
        thumbSize={26}
        thumbChildren={[<IconHeart size="1rem" key="1" />, <IconHeartBroken size="1rem" key="2" />]}
      />
    </>
  );
}
```

## Scale

You can use the `scale` prop to represent the value on a different scale.

In the following demo, the value `x` represents the value `2^x`. Increasing `x` by one increases the represented value by 2 to the power of `x`.

```

import { RangeSlider, Slider } from '@mantine/core';

function valueLabelFormat(value: number) {
  const units = ['KB', 'MB', 'GB', 'TB'];

  let unitIndex = 0;
  let scaledValue = value;

  while (scaledValue >= 1024 && unitIndex < units.length - 1) {
    unitIndex += 1;
    scaledValue /= 1024;
  }

  return `${scaledValue} ${units[unitIndex]}`;
}

const getScale = (v: number) => 2 ** v;

function Demo() {
  return (
    <>
      <Slider
        scale={getScale}
        step={1}
        min={2}
        max={30}
        labelAlwaysOn
        defaultValue={10}
        label={valueLabelFormat}
      />
      <RangeSlider
        mt={50}
        scale={getScale}
        step={1}
        min={2}
        max={30}
        labelAlwaysOn
        defaultValue={[10, 20]}
        label={valueLabelFormat}
      />
    </>
  );
}
```

## Inverted

You can invert the track with the `inverted` prop:

```

import { RangeSlider, Slider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Slider inverted defaultValue={80} />
      <RangeSlider inverted defaultValue={[40, 80]} mt="xl" />
    </>
  );
}
```

```

import { Slider } from '@mantine/core';

function Demo() {
  return <Slider{{props}} marks={[{ value: 20, label: '20%' }, { value: 80, label: '80%' }]} labelAlwaysOn />;
}
```

Example of using Styles API to change `Slider` styles:

```

import { Slider } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Slider
      defaultValue={40}
      marks={[
        { value: 20, label: '20%' },
        { value: 50, label: '50%' },
        { value: 80, label: '80%' },
      ]}
      size={2}
      classNames={classes}
    />
  );
}
```

## Vertical slider

`Slider` and `RangeSlider` do not provide vertical orientation as it is very rarely used. If you need this feature you can build it yourself with use-move hook.

## Accessibility

`Slider` and `RangeSlider` components are accessible by default:

-   Thumbs are focusable
-   When the user uses mouse to interact with the slider, focus is moved to the slider track, when the user presses arrows focus is moved to the thumb
-   Value can be changed with arrows with step increment/decrement

To label component for screen readers, add labels to thumbs:

```tsx
import { RangeSlider, Slider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Slider thumbLabel="Thumb aria-label" />
      <RangeSlider
        thumbFromLabel="First thumb aria-label"
        thumbToLabel="Second thumb aria-label"
      />
    </>
  );
}
```

## Keyboard interactions## Usage

Use `Space` component to add horizontal or vertical spacing between elements:

```

import { Text, Space } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text>First line</Text>
      <Space{{props}} />
      <Text>Second line</Text>
    </>
  );
}
```

```

import { Text, Space } from '@mantine/core';

function Demo() {
  return (
    <div style={{ display: 'flex' }}>
      <Text>First line</Text>
      <Space{{props}} />
      <Text>Second line</Text>
    </div>
  );
}
```

## Where to use

In most cases, you would want to use margin props instead of `Space` when working with Mantine components:

```tsx
import { Space, Text } from '@mantine/core';

// Space is not required as the same can be achieved with `mt` prop
function Demo() {
  return (
    <>
      <Text>First line</Text>
      <Text mt="md">Second line</Text>
    </>
  );
}
```

But when you work with regular HTML elements you do not have access to `theme.spacing` and you may want to use `Space` component to skip direct theme subscription:

```tsx
import { Space } from '@mantine/core';

// Margin props are not available on div,
// use Space to add spacing from theme
function Demo() {
  return (
    <>
      <div>First line</div>
      <Space h="md" />
      <div>Second line</div>
    </>
  );
}
```## Usage

Use `Spoiler` to hide long section of content. Set `maxHeight` prop to control point at which content will be hidden under spoiler and show/hide control appears. If the content height is less than `maxHeight`, the spoiler will just render children.

`hideLabel` and `showLabel` props are required – they are used as spoiler toggle button label in corresponding state.

```

import { Spoiler } from '@mantine/core';

function Demo() {
  return (
    <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
      {/* Content here */}
    </Spoiler>
  );
}
```

## Control expanded state

To control expanded state use `expanded` and `onExpandedChange` props. Note that `expanded` prop does not have any effect on spoiler visuals if the content height is less than given `maxHeight`.

```tsx
import { useState } from 'react';
import { Spoiler } from '@mantine/core';

function Demo() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Spoiler
      showLabel="Show more"
      hideLabel="Hide details"
      expanded={expanded}
      onExpandedChange={setExpanded}
    >
      {/* Spoiler content */}
    </Spoiler>
  );
}
```

## Subscribe to expanded state changes

Use `onExpandedChange` to subscribe to expanded state changes:

```tsx
import { Spoiler } from '@mantine/core';

function Demo() {
  return (
    <Spoiler
      showLabel="Show more"
      hideLabel="Hide details"
      onExpandedChange={(expanded) => console.log(expanded)}
    >
      {/* Spoiler content */}
    </Spoiler>
  );
}
```

## Transition duration

Control transition duration by setting `transitionDuration` prop (transition-duration CSS property in ms). To disable animations, set `transitionDuration={0}`:

```

import { Spoiler } from '@mantine/core';

function Demo() {
  return (
    <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide" transitionDuration={0}>
      {/* Content here */}
    </Spoiler>
  );
}
```

## Get control ref

```tsx
import { useRef } from 'react';
import { Spoiler } from '@mantine/core';

function Demo() {
  const spoilerControlRef = useRef<HTMLButtonElement>(null);
  return (
    <Spoiler
      controlRef={spoilerControlRef}
      hideLabel="Hide"
      showLabel="Show"
    />
  );
}
```## Usage

`Stack` is a vertical flex container. If you need a horizontal flex container, use Group component instead. If you need to have full control over flex container properties, use Flex component.

```

import { Stack, Button } from '@mantine/core';

function Demo() {
  return (
    <Stack
      h={300}
      bg="var(--mantine-color-body)"
      {{props}}
    >
      <Button variant="default">1</Button>
      <Button variant="default">2</Button>
      <Button variant="default">3</Button>
    </Stack>
  );
}
```## Usage

```

import { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper active={active} onStepClick={setActive}>
        <Stepper.Step label="First step" description="Create an account">
          Step 1 content: Create an account
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Verify email">
          Step 2 content: Verify email
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Get full access">
          Step 3 content: Get full access
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button variant="default" onClick={prevStep}>Back</Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </>
  );
}
```

## Allow step select

To disable step selection, set `allowStepSelect` prop on `Stepper.Step` component. It can be used to prevent the user from reaching next steps while letting them go back and forth between steps they’ve already reached before:

```

import { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(1);
  const [highestStepVisited, setHighestStepVisited] = useState(active);

  const handleStepChange = (nextStep: number) => {
    const isOutOfBounds = nextStep > 3 || nextStep < 0;

    if (isOutOfBounds) {
      return;
    }

    setActive(nextStep);
    setHighestStepVisited((hSC) => Math.max(hSC, nextStep));
  };

  // Allow the user to freely go back and forth between visited steps.
  const shouldAllowSelectStep = (step: number) => highestStepVisited >= step && active !== step;

  return (
    <>
      <Stepper active={active} onStepClick={setActive}>
        <Stepper.Step
          label="First step"
          description="Create an account"
          allowStepSelect={shouldAllowSelectStep(0)}
        >
          Step 1 content: Create an account
        </Stepper.Step>
        <Stepper.Step
          label="Second step"
          description="Verify email"
          allowStepSelect={shouldAllowSelectStep(1)}
        >
          Step 2 content: Verify email
        </Stepper.Step>
        <Stepper.Step
          label="Final step"
          description="Get full access"
          allowStepSelect={shouldAllowSelectStep(2)}
        >
          Step 3 content: Get full access
        </Stepper.Step>

        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button variant="default" onClick={() => handleStepChange(active - 1)}>
          Back
        </Button>
        <Button onClick={() => handleStepChange(active + 1)}>Next step</Button>
      </Group>
    </>
  );
}
```

## Disable next steps selection

Another way to disable selection of upcoming steps is to use the `allowNextStepsSelect` directly on the `Stepper` component. This is useful when you don’t need to control the behavior specifically for each step.

```

import { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper active={active} onStepClick={setActive} allowNextStepsSelect={false}>
        <Stepper.Step label="First step" description="Create an account">
          Step 1 content: Create an account
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Verify email">
          Step 2 content: Verify email
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Get full access">
          Step 3 content: Get full access
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button variant="default" onClick={prevStep}>Back</Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </>
  );
}
```

## Color, radius and size

```

import { Stepper } from '@mantine/core';

function Demo() {
  return (
    <Stepper{{props}} active={1}>
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
    </Stepper>
  );
}
```

Component size is controlled by two props: `size` and `iconSize`. `size` prop controls icon size, label and description font size. `iconSize` allows to overwrite icon size separately from other size values:

```

import { Stepper } from '@mantine/core';

function Demo() {
  return (
    <Stepper{{props}} active={1}>
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
    </Stepper>
  );
}
```

## With custom icons

You can replace the step icon by setting `icon` prop on `Stepper.Step` component. To change completed check icon set `completedIcon` on `Stepper` component. You can use any React node as an icon: component, string, number:

```

import { useState } from 'react';
import {
  IconUserCheck,
  IconMailOpened,
  IconShieldCheck,
  IconCircleCheck,
} from '@tabler/icons-react';
import { Stepper, rem } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(1);

  return (
    <Stepper
      active={active}
      onStepClick={setActive}
      completedIcon={<IconCircleCheck style={{ width: rem(18), height: rem(18) }} />}
    >
      <Stepper.Step
        icon={<IconUserCheck style={{ width: rem(18), height: rem(18) }} />}
        label="Step 1"
        description="Create an account"
      />
      <Stepper.Step
        icon={<IconMailOpened style={{ width: rem(18), height: rem(18) }} />}
        label="Step 2"
        description="Verify email"
      />
      <Stepper.Step
        icon={<IconShieldCheck style={{ width: rem(18), height: rem(18) }} />}
        label="Step 3"
        description="Get full access"
      />
    </Stepper>
  );
}
```

You can use `Stepper` with icons only. Note that in this case, you will have to set `aria-label` or `title` on `Stepper.Step` component to make it accessible:

```

import { useState } from 'react';
import { Stepper, rem } from '@mantine/core';
import { IconUserCheck, IconMailOpened, IconShieldCheck } from '@tabler/icons-react';

function Demo() {
  const [active, setActive] = useState(0);

  return (
    <Stepper active={active} onStepClick={setActive}>
      <Stepper.Step icon={<IconUserCheck style={{ width: rem(18), height: rem(18) }} />} />
      <Stepper.Step icon={<IconMailOpened style={{ width: rem(18), height: rem(18) }} />} />
      <Stepper.Step icon={<IconShieldCheck style={{ width: rem(18), height: rem(18) }} />} />
    </Stepper>
  );
}
```

You can also change the completed icon for each step, for example, to indicate error state:

```

import { Stepper, rem } from '@mantine/core';
import { IconCircleX } from '@tabler/icons-react';

function Demo() {
  return (
    <Stepper active={2}>
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step
        label="Step 2"
        description="Verify email"
        color="red"
        completedIcon={<IconCircleX style={{ width: rem(20), height: rem(20) }} />}
      />
      <Stepper.Step label="Step 3" description="Get full access" />
    </Stepper>
  );
}
```

## Vertical orientation

```

import { useState } from 'react';
import { Stepper } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(1);

  return (
    <Stepper active={active} onStepClick={setActive} orientation="vertical">
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
      <Stepper.Step label="Step 3" description="Get full access" />
    </Stepper>
  );
}
```

## Icon position

To change step icon and body arrangement, set `iconPosition="right"`:

```

import { useState } from 'react';
import { Stepper } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(1);

  return (
    <Stepper active={active} onStepClick={setActive} iconPosition="right">
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
      <Stepper.Step label="Step 3" description="Get full access" />
    </Stepper>
  );
}
```

## Loading state

To indicate loading state set `loading` prop on Step component, `Loader` will replace step icon. You can configure the default loader in the theme.

```

import { Stepper } from '@mantine/core';

function Demo() {
  return (
    <Stepper active={1}>
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" loading />
      <Stepper.Step label="Step 3" description="Get full access" />
    </Stepper>
  );
}
```

```

import { Stepper } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 2 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper active={active} onStepClick={setActive}{{props}}>
        <Stepper.Step label="First step" description="Create an account" loading>
          <Content>Step 1 content: Create an account</Content>
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Verify email">
          <Content>Step 2 content: Verify email</Content>
        </Stepper.Step>

        <Stepper.Completed>
          <Content>Completed, click back button to get to previous step</Content>
        </Stepper.Completed>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </>
  );
}
```

Examples of styles customization with Styles API:

```

import { useState } from 'react';
import { Stepper, StepperProps, rem } from '@mantine/core';

function StyledStepper(props: StepperProps) {
  return (
    <Stepper
      styles={{
        stepBody: {
          display: 'none',
        },

        step: {
          padding: 0,
        },

        stepIcon: {
          borderWidth: rem(4),
        },

        separator: {
          marginLeft: rem(-2),
          marginRight: rem(-2),
          height: rem(10),
        },
      }}
      {...props}
    />
  );
}

function Demo() {
  const [active, setActive] = useState(1);
  return (
    <StyledStepper active={active} onStepClick={setActive}>
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
      <Stepper.Step label="Step 3" description="Get full access" />
    </StyledStepper>
  );
}
```

```

import { useState } from 'react';
import { Stepper } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  const [active, setActive] = useState(1);

  return (
    <Stepper classNames={classes} active={active} onStepClick={setActive}>
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
      <Stepper.Step label="Step 3" description="Get full access" />
    </Stepper>
  );
}
```

## Get step ref

You can get refs of step button and stepper root element (div):

```tsx
import { useRef } from 'react';
import { Stepper } from '@mantine/core';

function MyStepper() {
  const firstStep = useRef<HTMLButtonElement>(null);
  const stepper = useRef<HTMLDivElement>(null);

  return (
    <Stepper ref={stepper} active={0}>
      <Stepper.Step label="First step" ref={firstStep} />
      <Stepper.Step label="Second step" />
    </Stepper>
  );
}
```

## Wrap Stepper.Step

`Stepper` component relies on `Stepper.Step` order. Wrapping `Stepper.Step` is not supported, Instead you will need to use different approaches:

```tsx
import { Stepper } from '@mantine/core';

// This will not work, step children will not render
function WillNotWork() {
  return (
    <Stepper.Step label="Nope" description="It will not work">
      This part will not render
    </Stepper.Step>
  );
}

// Create a separate component for children
function WillWork() {
  return <div>This will work as expected!</div>;
}

function Demo() {
  return (
    <Stepper active={1}>
      <Stepper.Step label="Regular step">First step</Stepper.Step>
      {/* Wrapped Stepper.Step will not render children, do not do that */}
      <WillNotWork />
      <Stepper.Step label="Step with custom content">
        <WillWork />
      </Stepper.Step>
      <Stepper.Step label="Regular step">Third step</Stepper.Step>
    </Stepper>
  );
}
```

## Accessibility

`<Stepper.Step />` components render button element, set `aria-label` or `title` props to make component visible for screen readers in case you do not specify `label` or `description`:

```tsx
import { Stepper } from '@mantine/core';

function Demo() {
  return (
    <Stepper active={0}>
      {/* Not ok, no label for screen reader */}
      <Stepper.Step />

      {/* Ok, label and description */}
      <Stepper.Step label="Step 1" description="Create an account" />

      {/* Ok, aria-label */}
      <Stepper.Step aria-label="Create an account" />
    </Stepper>
  );
}
```## Usage

```

import { Switch } from '@mantine/core';


function Demo() {
  return (
    <Switch
      defaultChecked
      {{props}}
    />
  );
}
```

## Controlled

```tsx
import { useState } from 'react';
import { Switch } from '@mantine/core';

function Demo() {
  const [checked, setChecked] = useState(false);
  return (
    <Switch
      checked={checked}
      onChange={(event) => setChecked(event.currentTarget.checked)}
    />
  );
}
```

## Inner Labels

```

import { Switch, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <Switch size="xs" onLabel="ON" offLabel="OFF" />
      <Switch size="sm" onLabel="ON" offLabel="OFF" />
      <Switch size="md" onLabel="ON" offLabel="OFF" />
      <Switch size="lg" onLabel="ON" offLabel="OFF" />
      <Switch size="xl" onLabel="ON" offLabel="OFF" />
    </Group>
  );
}
```

## Icon labels

```

import { Switch, useMantineTheme, rem } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

function Demo() {
  const theme = useMantineTheme();

  const sunIcon = (
    <IconSun
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.yellow[4]}
    />
  );

  const moonIcon = (
    <IconMoonStars
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.blue[6]}
    />
  );

  return <Switch size="md" color="dark.4" onLabel={sunIcon} offLabel={moonIcon} />;
}
```

## Thumb icon

```

import { useState } from 'react';
import { Switch, useMantineTheme, rem } from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons-react';

function Demo() {
  const theme = useMantineTheme();
  const [checked, setChecked] = useState(false);
  return (
    <Switch
      checked={checked}
      onChange={(event) => setChecked(event.currentTarget.checked)}
      color="teal"
      size="md"
      label="Switch with thumb icon"
      thumbIcon={
        checked ? (
          <IconCheck
            style={{ width: rem(12), height: rem(12) }}
            color={theme.colors.teal[6]}
            stroke={3}
          />
        ) : (
          <IconX
            style={{ width: rem(12), height: rem(12) }}
            color={theme.colors.red[6]}
            stroke={3}
          />
        )
      }
    />
  );
}
```

## With tooltip

Set `refProp="rootRef"` on Tooltip and other similar components to make them work with `Switch`:

```

import { Switch, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Switch tooltip" refProp="rootRef">
      <Switch label="Switch with tooltip" />
    </Tooltip>
  );
}
```

## Pointer cursor

By default, switch input and label have `cursor: default` (same as native `input[type="checkbox"]`). To change cursor to pointer, set `cursorType` on theme:

```tsx
import { createTheme, MantineProvider, Switch } from '@mantine/core';

const theme = createTheme({
  cursorType: 'pointer',
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Switch label="Pointer cursor" />
    </MantineProvider>
  );
}
```

## Switch.Group

```

import { Switch, Group } from '@mantine/core';

function Demo() {
  return (
    <Switch.Group
      defaultValue={['react']}
      {{props}}
    >
      <Group mt="xs">
        <Switch value="react" label="React" />
        <Switch value="svelte" label="Svelte" />
        <Switch value="ng" label="Angular" />
        <Switch value="vue" label="Vue" />
      </Group>
    </Switch.Group>
  );
}
```

## Controlled Switch.Group

```tsx
import { useState } from 'react';
import { Switch } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<string[]>([]);

  return (
    <Switch.Group value={value} onChange={setValue}>
      <Switch value="react" label="React" />
      <Switch value="svelte" label="Svelte" />
    </Switch.Group>
  );
}
```

```

import { Switch } from '@mantine/core';

function Demo() {
  return <Switch{{props}} label="Switch component" description="Switch description" error="Switch error />;
}
```

## Get input ref

```tsx
import { useRef } from 'react';
import { Switch } from '@mantine/core';

function Demo() {
  const ref = useRef<HTMLInputElement>(null);
  return <Switch ref={ref} />;
}
```

## Accessibility

`Switch` is a regular `input[type="checkbox"]`. Set `aria-label` if the `Switch` is used without `label` prop:

```tsx
import { Switch } from '@mantine/core';

// -> not ok, input is not labeled
function Bad() {
  return <Switch />;
}

// -> ok, input has aria-label
function Good() {
  return <Switch aria-label="I agree to everything" />;
}

// -> ok, input has associated label
function AlsoGood() {
  return <Switch label="I agree to everything" />;
}
```## Usage

Table data for all examples:

```tsx
const elements = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];
```

```

import { Table } from '@mantine/core';

function Demo() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Element position</Table.Th>
          <Table.Th>Element name</Table.Th>
          <Table.Th>Symbol</Table.Th>
          <Table.Th>Atomic mass</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
```

## data prop

You can use `data` prop to automatically generate table rows from array of React nodes. `data` prop accepts an object with the following properties:

-   `head` – an array of React nodes (`React.ReactNode[]`) to render `Table.Th` in `Table.Thead`
-   `foot` – an array of React nodes (`React.ReactNode[]`) to render `Table.Th` in `Table.Tfoot`
-   `body` - an array of arrays of React nodes (`React.ReactNode[][]`) to render `Table.Td` in `Table.Tbody`
-   `caption` – a React node to render `Table.Caption`

```

import { Table, TableData } from '@mantine/core';

const tableData: TableData = {
  caption: 'Some elements from periodic table',
  head: ['Element position', 'Atomic mass', 'Symbol', 'Element name'],
  body: [
    [6, 12.011, 'C', 'Carbon'],
    [7, 14.007, 'N', 'Nitrogen'],
    [39, 88.906, 'Y', 'Yttrium'],
    [56, 137.33, 'Ba', 'Barium'],
    [58, 140.12, 'Ce', 'Cerium'],
  ],
};

function Demo() {
  return <Table data={tableData} />;
}
```

## Sticky header

Set `stickyHeader` to make table header sticky. To customize top position of the header use `stickyHeaderOffset` prop: it is useful when you have a fixed header in your application. For example, Mantine documentation website has a fixed header with 60px height:

```

import { Table } from '@mantine/core';

const elements = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

function Demo() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table stickyHeader stickyHeaderOffset={60}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Element position</Table.Th>
          <Table.Th>Element name</Table.Th>
          <Table.Th>Symbol</Table.Th>
          <Table.Th>Atomic mass</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
      <Table.Caption>Scroll page to see sticky thead</Table.Caption>
    </Table>
  );
}
```

## Spacing

To control spacing use `horizontalSpacing` and `verticalSpacing` props. Both props support spacing from `theme.spacing` and any valid CSS value to set cell padding:

```

import { Table } from '@mantine/core';

function Demo() {
  return (
    <Table{{props}}>
      {/* {...rows} */}
    </Table>
  );
}
```

## Caption and tfoot

Table support tfoot and caption elements. Set `captionSide` prop (top or bottom) to change caption position.

```

import { Table } from '@mantine/core';

function Demo() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  const ths = (
    <Table.Tr>
      <Table.Th>Element position</Table.Th>
      <Table.Th>Element name</Table.Th>
      <Table.Th>Symbol</Table.Th>
      <Table.Th>Atomic mass</Table.Th>
    </Table.Tr>
  );

  return (
    <Table captionSide="bottom">
      <Table.Caption>Some elements from periodic table</Table.Caption>
      <Table.Thead>{ths}</Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
      <Table.Tfoot>{ths}</Table.Tfoot>
    </Table>
  );
}
```

## Striped and rows hover

```

import { Table } from '@mantine/core';

function Demo() {
  return (
    <Table{{props}}>
      {/* {...rows} */}
    </Table>
  );
}
```

## Scroll container

To prevent viewport overflow wrap `Table` with `Table.ScrollContainer`. The component accepts `minWidth` prop which sets minimum width below which table will be scrollable.

```

import { Table } from '@mantine/core';

function Demo() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table.ScrollContainer minWidth={500}>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Element position</Table.Th>
            <Table.Th>Element name</Table.Th>
            <Table.Th>Symbol</Table.Th>
            <Table.Th>Atomic mass</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
```

By default, `Table.ScrollContainer` uses ScrollArea, you can change it to native scrollbars by setting `type="native"`:

```

import { Table } from '@mantine/core';

function Demo() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table.ScrollContainer minWidth={500} type="native">
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Element position</Table.Th>
            <Table.Th>Element name</Table.Th>
            <Table.Th>Symbol</Table.Th>
            <Table.Th>Atomic mass</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
```

## Example: Table with row selection

```

import { useState } from 'react';
import { Table, Checkbox } from '@mantine/core';

const elements = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

function Demo() {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const rows = elements.map((element) => (
    <Table.Tr
      key={element.name}
      bg={selectedRows.includes(element.position) ? 'var(--mantine-color-blue-light)' : undefined}
    >
      <Table.Td>
        <Checkbox
          aria-label="Select row"
          checked={selectedRows.includes(element.position)}
          onChange={(event) =>
            setSelectedRows(
              event.currentTarget.checked
                ? [...selectedRows, element.position]
                : selectedRows.filter((position) => position !== element.position)
            )
          }
        />
      </Table.Td>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th />
          <Table.Th>Element position</Table.Th>
          <Table.Th>Element name</Table.Th>
          <Table.Th>Symbol</Table.Th>
          <Table.Th>Atomic mass</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
```## Usage

```

import { Tabs, rem } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';

function Demo() {
  const iconStyle = { width: rem(12), height: rem(12) };

  return (
    <Tabs{{props}} defaultValue="gallery">
      <Tabs.List>
        <Tabs.Tab value="gallery" leftSection={<IconPhoto style={iconStyle} />}>
          Gallery
        </Tabs.Tab>
        <Tabs.Tab value="messages" leftSection={<IconMessageCircle style={iconStyle} />}>
          Messages
        </Tabs.Tab>
        <Tabs.Tab value="settings" leftSection={<IconSettings style={iconStyle} />}>
          Settings
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery">
        Gallery tab content
      </Tabs.Panel>

      <Tabs.Panel value="messages">
        Messages tab content
      </Tabs.Panel>

      <Tabs.Panel value="settings">
        Settings tab content
      </Tabs.Panel>
    </Tabs>
  );
}
```

## Controlled Tabs

To control Tabs state, use `value` and `onChange` props:

```tsx
import { useState } from 'react';
import { Tabs } from '@mantine/core';

function Demo() {
  const [activeTab, setActiveTab] = useState<string | null>('first');

  return (
    <Tabs value={activeTab} onChange={setActiveTab}>
      <Tabs.List>
        <Tabs.Tab value="first">First tab</Tabs.Tab>
        <Tabs.Tab value="second">Second tab</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="first">First panel</Tabs.Panel>
      <Tabs.Panel value="second">Second panel</Tabs.Panel>
    </Tabs>
  );
}
```

## Uncontrolled Tabs

If you do not need to subscribe to Tabs state changes, use `defaultValue`:

```tsx
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="first">
      <Tabs.List>
        <Tabs.Tab value="first">First tab</Tabs.Tab>
        <Tabs.Tab value="second">Second tab</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="first">First panel</Tabs.Panel>
      <Tabs.Panel value="second">Second panel</Tabs.Panel>
    </Tabs>
  );
}
```

## Change colors

To change colors of all tabs, set `color` on `Tabs` component, to change color of the individual tab, set `color` on `Tabs.Tab`.

```

import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs color="teal" defaultValue="first">
      <Tabs.List>
        <Tabs.Tab value="first">Teal tab</Tabs.Tab>
        <Tabs.Tab value="second" color="blue">
          Blue tab
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="first" pt="xs">
        First tab color is teal, it gets this value from context
      </Tabs.Panel>

      <Tabs.Panel value="second" pt="xs">
        Second tab color is blue, it gets this value from props, props have the priority and will
        override context value
      </Tabs.Panel>
    </Tabs>
  );
}
```

## Tabs position

```

import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="first">
      <Tabs.List{{props}}>
        <Tabs.Tab value="first">First tab</Tabs.Tab>
        <Tabs.Tab value="second">Second tab</Tabs.Tab>
        <Tabs.Tab value="third">Third tab</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
```

To display tab on the opposite side, set `margin-left: auto` with `ml="auto"` prop or with `className`:

```

import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="chat">
      <Tabs.List>
        <Tabs.Tab value="chat">Chat</Tabs.Tab>
        <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
        <Tabs.Tab value="settings">Settings</Tabs.Tab>
        <Tabs.Tab value="account" ml="auto">
          Account
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
```

## Inverted tabs

To make tabs inverted, place `Tabs.Panel` components before `Tabs.List` and add `inverted` prop to `Tabs` component:

```

import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="chat" inverted>
      <Tabs.Panel value="chat" pb="xs">Chat panel</Tabs.Panel>
      <Tabs.Panel value="gallery" pb="xs">Gallery panel</Tabs.Panel>
      <Tabs.Panel value="account" pb="xs">Account panel</Tabs.Panel>

      <Tabs.List>
        <Tabs.Tab value="chat">Chat</Tabs.Tab>
        <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
        <Tabs.Tab value="account">Account</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
```

## Vertical tabs placement

To change placement of `Tabs.List` in vertical orientation set `placement` prop:

```

import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="gallery" orientation="vertical"{{props}}>
      <Tabs.List>
        <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
        <Tabs.Tab value="messages">Messages</Tabs.Tab>
        <Tabs.Tab value="settings">Settings</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery">Gallery tab content</Tabs.Panel>
      <Tabs.Panel value="messages">Messages tab content</Tabs.Panel>
      <Tabs.Panel value="settings">Settings tab content</Tabs.Panel>
    </Tabs>
  );
}
```

## Disabled tabs

Set `disabled` prop on `Tabs.Tab` component to disable tab. Disabled tab cannot be activated with mouse or keyboard, and they will be skipped when user navigates with arrow keys:

```

import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="chat">
      <Tabs.List>
        <Tabs.Tab value="chat">Chat</Tabs.Tab>
        <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
        <Tabs.Tab value="settings" disabled>
          Settings
        </Tabs.Tab>
        <Tabs.Tab value="account">Account</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
```

## Activation mode

By default, tabs are activated when user presses arrows keys or Home/End keys. To disable that set `activateTabWithKeyboard={false}` on `Tabs` component:

```

import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="chat" activateTabWithKeyboard={false}>
      {/* ...content */}
    </Tabs>
  );
}
```

## Tab deactivation

By default, active tab cannot be deactivated. To allow that set `allowTabDeactivation` on `Tabs` component:

```

import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="chat" allowTabDeactivation>
      {/* ...content */}
    </Tabs>
  );
}
```

## Unmount inactive tabs

By default, inactive `Tabs.Panel` will stay mounted, to unmount inactive tabs, set `keepMounted={false}` on Tabs. This is useful when you want to render components that impact performance inside `Tabs.Panel`. Note that components that are rendered inside `Tabs.Panel` will reset their state on each mount (tab change).

```tsx
import { Tabs } from '@mantine/core';

// Second tab panel will be mounted only when user activates second tab
function Demo() {
  return (
    <Tabs keepMounted={false} defaultValue="first">
      <Tabs.List>
        <Tabs.Tab value="first">First tab</Tabs.Tab>
        <Tabs.Tab value="second">Second tab</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="first">First panel</Tabs.Panel>
      <Tabs.Panel value="second">Second panel</Tabs.Panel>
    </Tabs>
  );
}
```

## Get tab control ref

```tsx
import { useRef } from 'react';
import { Tabs } from '@mantine/core';

function Demo() {
  const secondTabRef = useRef<HTMLButtonElement>(null);

  return (
    <Tabs defaultValue="first">
      <Tabs.List>
        <Tabs.Tab value="first">First tab</Tabs.Tab>
        <Tabs.Tab value="Second" ref={secondTabRef}>
          Second tab
        </Tabs.Tab>
        <Tabs.Tab value="third">Third tab</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
```

## Usage with react-router

```tsx
<Route path="/tabs/:tabValue" element={<Demo />} />
```

```tsx
import { useNavigate, useParams } from 'react-router-dom';
import { Tabs } from '@mantine/core';

function Demo() {
  const navigate = useNavigate();
  const { tabValue } = useParams();

  return (
    <Tabs
      value={tabValue}
      onChange={(value) => navigate(`/tabs/${value}`)}
    >
      <Tabs.List>
        <Tabs.Tab value="first">First tab</Tabs.Tab>
        <Tabs.Tab value="second">Second tab</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
```

## Usage with Next.js router

```tsx
// For file /tabs/[activeTab].tsx
import { useRouter } from 'next/router';
import { Tabs } from '@mantine/core';

function Demo() {
  const router = useRouter();

  return (
    <Tabs
      value={router.query.activeTab as string}
      onChange={(value) => router.push(`/tabs/${value}`)}
    >
      <Tabs.List>
        <Tabs.Tab value="first">First tab</Tabs.Tab>
        <Tabs.Tab value="second">Second tab</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
```

```

import { Tabs, rem } from '@mantine/core';

function Demo() {
  const iconStyle = { width: rem(12), height: rem(12) };

  return (
    <Tabs defaultValue="gallery"{{props}}>
      <Tabs.List>
        <Tabs.Tab value="gallery" leftSection={<IconPhoto style={iconStyle} />}>
          Gallery
        </Tabs.Tab>
        <Tabs.Tab value="messages" leftSection={<IconMessageCircle style={iconStyle} />}>
          Messages
        </Tabs.Tab>
        <Tabs.Tab value="settings" rightSection={<IconSettings style={iconStyle} />}>
          Settings
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery" pt="xs">
        Gallery tab content
      </Tabs.Panel>

      <Tabs.Panel value="messages" pt="xs">
        Messages tab content
      </Tabs.Panel>

      <Tabs.Panel value="settings" pt="xs">
        Settings tab content
      </Tabs.Panel>
    </Tabs>
  );
}
```

Example of Styles API usage to customize tab styles:

```

import { Tabs, rem } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Tabs variant="unstyled" defaultValue="settings" classNames={classes}>
      <Tabs.List grow>
        <Tabs.Tab
          value="settings"
          leftSection={<IconSettings style={{ width: rem(16), height: rem(16) }} />}
        >
          Settings
        </Tabs.Tab>
        <Tabs.Tab
          value="messages"
          leftSection={<IconMessageCircle style={{ width: rem(16), height: rem(16) }} />}
        >
          Messages
        </Tabs.Tab>
        <Tabs.Tab
          value="gallery"
          leftSection={<IconPhoto style={{ width: rem(16), height: rem(16) }} />}
        >
          Gallery
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
```

## Accessibility

Tabs component follows WAI-ARIA recommendations on accessibility.

If you use `Tabs.Tab` without text content, for example, only with icon, then set `aria-label` or use VisuallyHidden component:

```tsx
import { IconCoin } from '@tabler/icons-react';
import { Tabs, VisuallyHidden } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="chat">
      <Tabs.List>
        {/* aria-label is not required, tab is labelled by children */}
        <Tabs.Tab value="chat">Chat</Tabs.Tab>

        {/* aria-label is required, tab is not labelled by children */}
        <Tabs.Tab
          value="money"
          aria-label="Get money"
          leftSection={<IconCoin size={14} />}
        />

        {/* You can use VisuallyHidden instead of aria-label */}
        <Tabs.Tab value="money" leftSection={<IconCoin size={14} />}>
          <VisuallyHidden>Get money</VisuallyHidden>
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
```

To set tabs list label, set `aria-label` on `Tabs.List` component, it will be announced by screen reader:

```tsx
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="recent">
      {/* Tabs.List aria-label will be announced when tab is focused for the first time */}
      <Tabs.List aria-label="Chats">
        <Tabs.Tab value="recent">Most recent</Tabs.Tab>
        <Tabs.Tab value="recent">Unanswered</Tabs.Tab>
        <Tabs.Tab value="archived">Archived</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
```

## Keyboard interactions## Usage

`TagsInput` provides a way to enter multiple values. It can be used with suggestions or without them. `TagsInput` is similar to MultiSelect, but it allows entering custom values.

```

import { TagsInput } from '@mantine/core';

function Demo() {
  return <TagsInput label="Press Enter to submit a tag" placeholder="Enter tag" />;
}
```

## Controlled

`TagsInput` value must be an array of strings, other types are not supported. `onChange` function is called with an array of strings as a single argument.

```tsx
import { useState } from 'react';
import { TagsInput } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<string[]>([]);
  return <TagsInput data={[]} value={value} onChange={setValue} />;
}
```

## Controlled search value

You can control search value with `searchValue` and `onSearchChange` props:

```tsx
import { useState } from 'react';
import { TagsInput } from '@mantine/core';

function Demo() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <TagsInput
      searchValue={searchValue}
      onSearchChange={setSearchValue}
      data={[]}
    />
  );
}
```

## Clearable

Set `clearable` prop to display the clear button in the right section. The button is not displayed when:

-   The component does not have a value
-   The component is disabled
-   The component is read only

```

import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      label="Press Enter to submit a tag"
      placeholder="Enter tag"
      defaultValue={['React']}
      clearable
    />
  );
}
```

## Max selected values

You can limit the number of selected values with `maxTags` prop. This will not allow adding more values once the limit is reached.

```

import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      label="Press Enter to submit a tag"
      description="Add up to 3 tags"
      placeholder="Enter tag"
      maxTags={3}
      defaultValue={['first', 'second']}
    />
  );
}
```

## Accept value on blur

By default, if the user types a value and blurs the input, the value is added to the list. You can change this behavior by setting `acceptValueOnBlur` to `false`. In this case, the value is added only when the user presses `Enter` or clicks on a suggestion.

```

import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <TagsInput
        label="Value IS accepted on blur"
        placeholder="Enter text, then blur the field"
        data={['React', 'Angular', 'Svelte']}
        acceptValueOnBlur
      />
      <TagsInput
        label="Value IS NOT accepted on blur"
        placeholder="Enter text, then blur the field"
        data={['React', 'Angular', 'Svelte']}
        acceptValueOnBlur={false}
        mt="md"
      />
    </>
  );
}
```

## Allow duplicates

By default `TagsInput` does not allow to add duplicate values, but you can change this behavior by setting `allowDuplicates` prop. Value is considered duplicate if it is already present in the `value` array, regardless of the case and trailing whitespace.

```

import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      label="Press Enter to submit a tag"
      placeholder="Duplicates are allowed"
      allowDuplicates
    />
  );
}

```

## Split chars

By default, `TagsInput` splits values by comma (`,`), you can change this behavior by setting `splitChars` prop to an array of strings. All values from `splitChars` cannot be included in the final value. Values are also splitted on paste.

Example of splitting by `,`, `|` and space:

```

import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      label="Press Enter to submit a tag"
      placeholder="Enter tag"
      splitChars={[',', ' ', '|']}
    />
  );
}
```

## With suggestions

`TagsInput` can be used with suggestions, it will render suggestions list under input and allow to select suggestions with keyboard or mouse. Note that user is not limited to suggestions, it is still possible to enter custom values. If you want to allow values only from suggestions, use MultiSelect component instead.

```

import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      label="Press Enter to submit a tag"
      placeholder="Pick tag from list"
      data={['React', 'Angular', 'Svelte']}
    />
  );
}
```

```

import { TagsInput, ComboboxItem, OptionsFilter } from '@mantine/core';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const splittedSearch = search.toLowerCase().trim().split(' ');
  return (options as ComboboxItem[]).filter((option) => {
    const words = option.label.toLowerCase().trim().split(' ');
    return splittedSearch.every((searchWord) => words.some((word) => word.includes(searchWord)));
  });
};

function Demo() {
  return (
    <TagsInput
      label="What countries have you visited?"
      placeholder="Pick value or enter anything"
      data={['Great Britain', 'Russian Federation', 'United States']}
      filter={optionsFilter}
    />
  );
}
```

## Sort options

By default, options are sorted by their position in the data array. You can change this behavior with `filter` function:

```

import { TagsInput, ComboboxItem, OptionsFilter } from '@mantine/core';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const filtered = (options as ComboboxItem[]).filter((option) =>
    option.label.toLowerCase().trim().includes(search.toLowerCase().trim())
  );

  filtered.sort((a, b) => a.label.localeCompare(b.label));
  return filtered;
};

function Demo() {
  return (
    <TagsInput
      label="Your favorite libraries"
      placeholder="Pick value or enter anything"
      data={['4 – React', '1 – Angular', '3 – Vue', '2 – Svelte']}
      filter={optionsFilter}
    />
  );
}
```

```

import { TagsInput } from '@mantine/core';

const largeData = Array(100_000)
  .fill(0)
  .map((_, index) => `Option ${index}`);

function Demo() {
  return (
    <TagsInput
      label="100 000 options tags input"
      placeholder="Use limit to optimize performance"
      limit={5}
      data={largeData}
    />
  );
}
```

## renderOption

`renderOption` callback allows you to customize option rendering. It is called with option object. The function must return a React node.

```

import { Group, TagsInput, TagsInputProps, Text } from '@mantine/core';

const data: Record<string, { emoji: string; description: string }> = {
  Apples: {
    emoji: '🍎',
    description: 'Crisp and juicy snacking delight',
  },
  Bread: {
    emoji: '🍞',
    description: 'Freshly baked daily essential',
  },
  Bananas: {
    emoji: '🍌',
    description: 'Perfect for a healthy breakfast',
  },
  Eggs: {
    emoji: '🥚',
    description: 'Versatile protein source for cooking',
  },
  Broccoli: {
    emoji: '🥦',
    description: 'Nutrient-rich green vegetable',
  },
};

const renderTagsInputOption: TagsInputProps['renderOption'] = ({ option }) => (
  <Group>
    <Text span fz={24}>
      {data[option.value].emoji}
    </Text>
    <div>
      <Text>{option.value}</Text>
      <Text size="xs" opacity={0.5}>
        {data[option.value].description}
      </Text>
    </div>
  </Group>
);

function Demo() {
  return (
    <TagsInput
      data={['Apples', 'Bread', 'Bananas', 'Eggs', 'Broccoli']}
      renderOption={renderTagsInputOption}
      label="Groceries"
      placeholder="Pick tag from list or type to add new"
      maxDropdownHeight={300}
    />
  );
}
```

## Scrollable dropdown

By default, the options list is wrapped with ScrollArea.Autosize. You can control dropdown max-height with `maxDropdownHeight` prop if you do not change the default settings.

If you want to use native scrollbars, set `withScrollArea={false}`. Note that in this case, you will need to change dropdown styles with Styles API.

```

import { TagsInput } from '@mantine/core';

const data = Array(100)
  .fill(0)
  .map((_, index) => `Option ${index}`);

function Demo() {
  return (
    <>
      <TagsInput
        label="With scroll area (default)"
        placeholder="Pick value or enter anything"
        data={data}
        maxDropdownHeight={200}
      />

      <TagsInput
        label="With native scroll"
        placeholder="Pick value or enter anything"
        data={data}
        withScrollArea={false}
        styles={{ dropdown: { maxHeight: 200, overflowY: 'auto' } }}
        mt="md"
      />
    </>
  );
}
```

## Group options

```

import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      label="Enter tags"
      placeholder="Enter tags"
      data={[
        { group: 'Frontend', items: ['React', 'Angular'] },
        { group: 'Backend', items: ['Express', 'Django'] },
      ]}
    />
  );
}
```

## Disabled options

When option is disabled, it cannot be selected and is ignored in keyboard navigation. Note that user can still enter disabled option as a value. If you want to prohibit certain values, use controlled component and filter them out in `onChange` function.

```

import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      label="Enter tags"
      placeholder="Some tags are disabled"
      data={[
        { value: 'React' },
        { value: 'Angular' },
        { value: 'Vue', disabled: true },
        { value: 'Svelte', disabled: true },
      ]}
    />
  );
}
```

## Inside Popover

To use `TagsInput` inside popover, you need to set `withinPortal: false`:

```

import { Popover, Button, TagsInput } from '@mantine/core';

function Demo() {
  return (
    <Popover width={300} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <TagsInput
          label="Your favorite library"
          placeholder="Pick value or enter anything"
          data={['React', 'Angular', 'Vue', 'Svelte']}
          comboboxProps={{ withinPortal: false }}
        />
      </Popover.Dropdown>
    </Popover>
  );
}
```

## Control dropdown opened state

You can control dropdown opened state with `dropdownOpened` prop. Additionally, you can use `onDropdownClose` and `onDropdownOpen` to listen to dropdown opened state changes.

```

import { TagsInput, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [dropdownOpened, { toggle }] = useDisclosure();
  return (
    <>
      <Button onClick={toggle} mb="md">
        Toggle dropdown
      </Button>

      <TagsInput
        label="Your favorite library"
        placeholder="Pick value or enter anything"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        dropdownOpened={dropdownOpened}
      />
    </>
  );
}
```

## Dropdown position

By default, the dropdown is displayed below the input if there is enough space; otherwise it is displayed above the input. You can change this behavior by setting `position` and `middlewares` props, which are passed down to the underlying Popover component.

Example of dropdown that is always displayed above the input:

```

import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ position: 'top', middlewares: { flip: false, shift: false } }}
    />
  );
}
```

## Dropdown animation

By default, dropdown animations are disabled. To enable them, you can set `transitionProps`, which will be passed down to the underlying Transition component.

```

import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
    />
  );
}
```

## Dropdown width

To change dropdown width, set `width` prop in `comboboxProps`. By default, dropdown width is equal to the input width.

```

import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ width: 200, position: 'bottom-start' }}
    />
  );
}
```

## Dropdown padding

```

import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <TagsInput
        label="Zero padding"
        placeholder="Pick value or enter anything"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        comboboxProps={{ dropdownPadding: 0 }}
      />
      <TagsInput
        mt="md"
        label="10px padding"
        placeholder="Pick value or enter anything"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        comboboxProps={{ dropdownPadding: 10 }}
      />
    </>
  );
}
```

## Dropdown shadow

```

import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      label="Your favorite library"
      placeholder="Pick value or enter anything"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ shadow: 'md' }}
    />
  );
}
```

```

import { TagsInput, rem } from '@mantine/core';
import { IconComponents } from '@tabler/icons-react';

function Demo() {
  const icon = <IconComponents style={{ width: rem(16), height: rem(16) }} />;
  return (
    <>
      <TagsInput
        data={['React', 'Angular', 'Vue']}
        leftSectionPointerEvents="none"
        leftSection={icon}
        label="Your favorite library"
        placeholder="Your favorite library"
      />
      <TagsInput
        mt="md"
        data={['React', 'Angular', 'Vue']}
        rightSectionPointerEvents="none"
        rightSection={icon}
        label="Your favorite library"
        placeholder="Your favorite library"
      />
    </>
  );
}
```

## Input props

```

import { TagsInput } from '@mantine/core';


function Demo() {
  return (
    <TagsInput
      {{props}}
      placeholder="TagsInput placeholder"
      value={['First', 'Second']}
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
  );
}
```

## Read only

Set `readOnly` to make the input read only. When `readOnly` is set, `TagsInput` will not show suggestions and will not call `onChange` function.

```

import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      label="Read only"
      placeholder="Enter tag"
      readOnly
      defaultValue={['First', 'Second']}
    />
  );
}
```

## Disabled

Set `disabled` to disable the input. When `disabled` is set, user cannot interact with the input and `TagsInput` will not show suggestions.

```

import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      label="Disabled"
      placeholder="Enter tag"
      disabled
      defaultValue={['First', 'Second']}
    />
  );
}
```

## Error state

```

import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <TagsInput
        label="Boolean error"
        placeholder="Boolean error"
        error
        defaultValue={['React', 'Angular']}
      />
      <TagsInput
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
        defaultValue={['React', 'Angular']}
      />
    </>
  );
}
```

```

import { IconAt } from '@tabler/icons-react';
import { TagsInput, rem } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
     {{props}}
      leftSection={<IconAt style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
      label="TagsInput"
      description="Description"
      error="Error"
      placeholder="TagsInput"
      defaultValue={['First', 'Second']}
      data={['React', 'Angular']}
    />
  );
}
```

To set `aria-label` on the clear button, use `clearButtonProps`. Note that it is required only when `clearable` is set.

```tsx
import { TagsInput } from '@mantine/core';

function Demo() {
  return (
    <TagsInput
      data={[]}
      clearable
      clearButtonProps={{
        'aria-label': 'Clear input',
      }}
    />
  );
}
```## Usage

```

import { TextInput } from '@mantine/core';


function Demo() {
  return (
    <TextInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
```

## Controlled

```tsx
import { useState } from 'react';
import { TextInput } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('');
  return (
    <TextInput
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
    />
  );
}
```

```

import { TextInput, rem } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  const icon = <IconAt style={{ width: rem(16), height: rem(16) }} />;
  return (
    <>
      <TextInput
        leftSectionPointerEvents="none"
        leftSection={icon}
        label="Your email"
        placeholder="Your email"
      />
      <TextInput
        mt="md"
        rightSectionPointerEvents="none"
        rightSection={icon}
        label="Your email"
        placeholder="Your email"
      />
    </>
  );
}
```

## Error state

```

import { TextInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <TextInput label="Boolean error" placeholder="Boolean error" error />
      <TextInput
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
      />
    </>
  );
}
```

## Disabled state

```

import { TextInput } from '@mantine/core';

function Demo() {
  return <TextInput disabled label="Disabled input" placeholder="Disabled input" />;
}
```

```

import { IconAt } from '@tabler/icons-react';
import { TextInput, rem } from '@mantine/core';

function Demo() {
  return (
    <TextInput
      label="Label"
      placeholder="TextInput"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconAt style={{ width: rem(18), height: rem(18) }} />}
      {{props}}
    />
  );
}
```## Usage

```

import { Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text size="xs">Extra small text</Text>
      <Text size="sm">Small text</Text>
      <Text size="md">Default text</Text>
      <Text size="lg">Large text</Text>
      <Text size="xl">Extra large text</Text>
      <Text fw={500}>Semibold</Text>
      <Text fw={700}>Bold</Text>
      <Text fs="italic">Italic</Text>
      <Text td="underline">Underlined</Text>
      <Text td="line-through">Strikethrough</Text>
      <Text c="dimmed">Dimmed text</Text>
      <Text c="blue">Blue text</Text>
      <Text c="teal.4">Teal 4 text</Text>
      <Text tt="uppercase">Uppercase</Text>
      <Text tt="capitalize">capitalized text</Text>
      <Text ta="center">Aligned to center</Text>
      <Text ta="right">Aligned to right</Text>
    </>
  );
}
```

```
(props) => `
import { Text } from '@mantine/core';

function Demo() {
  return (
    
      Gradient Text
    
  );
}
`
```

## Truncate

Set `truncate` prop to add `text-overflow: ellipsis` styles:

```

import { Text, Box } from '@mantine/core';

function Demo() {
  return (
    <Box w={300}>
      <Text{{props}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat id
        necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae magnam
        perspiciatis excepturi iste sint itaque sunt laborum. Nihil?
      </Text>
    </Box>
  );
}
```

## Line clamp

Specify maximum number of lines with `lineClamp` prop. This option uses -webkit-line-clamp CSS property (caniuse). Note that `padding-bottom` cannot be set on text element:

```

import { Text } from '@mantine/core';

function Demo() {
  return (
    <Text{{props}}>
      {/* Text content */}
    </Text>
  );
}
```

Line clamp can also be used with any children (not only strings), for example with TypographyStylesProvider:

```

import { TypographyStylesProvider, Text } from '@mantine/core';

function Demo() {
  return (
    <Text lineClamp={3} component="div">
      <TypographyStylesProvider>
        <h3>Line clamp with TypographyStylesProvider</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nulla quam aut sed
          corporis voluptates praesentium inventore, sapiente ex tempore sit consequatur debitis
          non! Illo cum ipsa reiciendis quidem facere, deserunt eos totam impedit. Vel ab, ipsum
          veniam aperiam odit molestiae incidunt minus, sint eos iusto earum quaerat vitae
          perspiciatis.
        </p>
      </TypographyStylesProvider>
    </Text>
  );
}
```

## Inherit styles

Text always applies font-size, font-family and line-height styles, but in some cases this is not a desired behavior. To force Text to inherit parent styles set `inherit` prop. For example, highlight part of Title:

```

import { Text, Title } from '@mantine/core';

function Demo() {
  return <Title order={3}>Title in which you want to <Text span c="blue" inherit>highlight</Text> something</Title>;
}
```

## span prop

Use `span` prop as a shorthand for `component="span"`:

```tsx
import { Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text span>Same as below</Text>
      <Text component="span">Same as above</Text>
    </>
  );
}
```## Usage

```

import { Textarea } from '@mantine/core';


function Demo() {
  return (
    <Textarea
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
```

## Controlled

```tsx
import { useState } from 'react';
import { Textarea } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('');
  return (
    <Textarea
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
    />
  );
}
```

## Autosize

Autosize textarea uses react-textarea-autosize package. Textarea height will grow until maxRows are reached or indefinitely if maxRows not set.

```

import { Textarea } from '@mantine/core';

function Demo() {
  return (
    <>
      <Textarea
        placeholder="Autosize with no rows limit"
        label="Autosize with no rows limit"
        autosize
        minRows={2}
      />

      <Textarea
        label="Autosize with 4 rows max"
        placeholder="Autosize with 4 rows max"
        autosize
        minRows={2}
        maxRows={4}
      />
    </>
  );
}

```

## Enable resize

By default, resize is `none`, to enable it set `resize` prop to `vertical` or `both`:

```

import { Textarea } from '@mantine/core';

function Demo() {
  return <Textarea resize="vertical" label="Disabled" placeholder="Your comment" />;
}
```

## Error state

```

import { Textarea } from '@mantine/core';

function Demo() {
  return (
    <>
      <Textarea label="Boolean error" placeholder="Boolean error" error />
      <Textarea
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
      />
    </>
  );
}
```

## Disabled state

```

import { Textarea } from '@mantine/core';

function Demo() {
  return <Textarea label="Disabled" placeholder="Your comment" disabled />;
}
```

```

import { IconAt } from '@tabler/icons-react';
import { Textarea, rem } from '@mantine/core';

function Demo() {
  return (
    <Textarea
      label="Label"
      placeholder="Textarea"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconAt style={{ width: rem(18), height: rem(18) }} />}
      autosize
      {{props}}
    />
  );
}
```## Usage

```

import { ThemeIcon } from '@mantine/core';
import { IconPhoto } from '@tabler/icons-react';

function Demo() {
  return (
    <ThemeIcon{{props}}>
      <IconPhoto style={{ width: '70%', height: '70%' }} />
    </ThemeIcon>
  );
}
```

```
(props) => `
import { ThemeIcon } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    
      
    
  );
}
`
```

## Customize variants colors

You can customize colors for `ThemeIcon` and other components variants by adding variantColorResolver to your theme.

```

import { IconPhoto, IconFingerprint, IconError404 } from '@tabler/icons-react';
import {
  ThemeIcon,
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
        <ThemeIcon color="lime.4" variant="filled">
          <IconPhoto size={20} />
        </ThemeIcon>

        <ThemeIcon color="orange" variant="light">
          <IconFingerprint size={20} />
        </ThemeIcon>

        <ThemeIcon variant="danger">
          <IconError404 size={20} />
        </ThemeIcon>
      </Group>
    </MantineProvider>
  );
}
```

```

import { IconFingerprint } from '@tabler/icons-react';
import { ThemeIcon, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <ThemeIcon size="lg" color="lime.4">
        <IconFingerprint size={20} />
      </ThemeIcon>
      <ThemeIcon size="lg" color="lime.4" autoContrast>
        <IconFingerprint size={20} />
      </ThemeIcon>
    </Group>
  );
}
```## Usage

```

import { Timeline, Text } from '@mantine/core';
import { IconGitBranch, IconGitPullRequest, IconGitCommit, IconMessageDots } from '@tabler/icons-react';

function Demo() {
  return (
    <Timeline active={1} bulletSize={24} lineWidth={2}>
      <Timeline.Item bullet={<IconGitBranch size={12} />} title="New branch">
        <Text c="dimmed" size="sm">You&apos;ve created new branch <Text variant="link" component="span" inherit>fix-notifications</Text> from master</Text>
        <Text size="xs" mt={4}>2 hours ago</Text>
      </Timeline.Item>

      <Timeline.Item bullet={<IconGitCommit size={12} />} title="Commits">
        <Text c="dimmed" size="sm">You&apos;ve pushed 23 commits to<Text variant="link" component="span" inherit>fix-notifications branch</Text></Text>
        <Text size="xs" mt={4}>52 minutes ago</Text>
      </Timeline.Item>

      <Timeline.Item title="Pull request" bullet={<IconGitPullRequest size={12} />} lineVariant="dashed">
        <Text c="dimmed" size="sm">You&apos;ve submitted a pull request<Text variant="link" component="span" inherit>Fix incorrect notification message (#187)</Text></Text>
        <Text size="xs" mt={4}>34 minutes ago</Text>
      </Timeline.Item>

      <Timeline.Item title="Code review" bullet={<IconMessageDots size={12} />}>
        <Text c="dimmed" size="sm"><Text variant="link" component="span" inherit>Robert Gluesticker</Text> left a code review on your pull request</Text>
        <Text size="xs" mt={4}>12 minutes ago</Text>
      </Timeline.Item>
    </Timeline>
  );
}
```

## Line and bullet props

Control timeline appearance with the following props:

-   `active` – index of current active element, all elements before this index will be highlighted with `color`
-   `color` – color from theme that should be used to highlight active items, defaults to `theme.primaryColor`
-   `lineWidth` – controls line width and bullet border
-   `bulletSize` – bullet width, height and border-radius
-   `align` – defines line and bullets position relative to content, also sets text-align

```

import { Timeline } from '@mantine/core';

function Demo() {
  return (
    <Timeline{{props}}>
      {/* items */}
    </Timeline>
  );
}
```

## Bullet as React node

```

import { ThemeIcon, Text, Avatar, Timeline } from '@mantine/core';
import { IconSun, IconVideo } from '@tabler/icons-react';

function Demo() {
  return (
    <Timeline bulletSize={24}>
      <Timeline.Item title="Default bullet">
        <Text c="dimmed" size="sm">
          Default bullet without anything
        </Text>
      </Timeline.Item>
      <Timeline.Item
        title="Avatar"
        bullet={
          <Avatar
            size={22}
            radius="xl"
            src="https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
          />
        }
      >
        <Text c="dimmed" size="sm">
          Timeline bullet as avatar image
        </Text>
      </Timeline.Item>
      <Timeline.Item title="Icon" bullet={<IconSun size="0.8rem" />}>
        <Text c="dimmed" size="sm">
          Timeline bullet as icon
        </Text>
      </Timeline.Item>
      <Timeline.Item
        title="ThemeIcon"
        bullet={
          <ThemeIcon
            size={22}
            variant="gradient"
            gradient={{ from: 'lime', to: 'cyan' }}
            radius="xl"
          >
            <IconVideo size="0.8rem" />
          </ThemeIcon>
        }
      >
        <Text c="dimmed" size="sm">
          Timeline bullet as ThemeIcon component
        </Text>
      </Timeline.Item>
    </Timeline>
  );
}
```

## Wrap Timeline.Item

`Timeline` component relies on `Timeline.Item` order. Wrapping `Timeline.Item` is not supported, Instead you will need to use different approaches:

```tsx
import { Timeline } from '@mantine/core';

// This will not work, step children will not render
function WillNotWork() {
  return <Timeline.Item title="Nope">It will not work</Timeline.Item>;
}

// Create a separate component for children
function WillWork() {
  return <div>This will work as expected!</div>;
}

function Demo() {
  return (
    <Timeline active={1}>
      <Timeline.Item title="Regular item">First item</Timeline.Item>
      <WillNotWork />
      <Timeline.Item title="Works as expected">
        <WillWork />
      </Timeline.Item>
      <Timeline.Item title="Regular item">Third item</Timeline.Item>
    </Timeline>
  );
}
```## Usage

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
```## Usage

```

import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Tooltip">
      <Button>Button with tooltip</Button>
    </Tooltip>
  );
}
```

## Tooltip children

Tooltip requires an element or a component as a single child – strings, fragments, numbers and multiple elements/components are not supported and **will throw error**. Custom components must provide a prop to get root element ref, all Mantine components support ref out of the box.

```tsx
import { Badge, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <>
      <Tooltip label="OK">
        <button>Native button – ok</button>
      </Tooltip>

      <Tooltip label="OK">
        <Badge>Mantine component – ok</Badge>
      </Tooltip>

      <Tooltip label="Throws">
        Raw string, NOT OK – will throw error
      </Tooltip>

      {/* Number, NOT OK – will throw error */}
      <Tooltip label="Throws">{2}</Tooltip>

      <Tooltip label="Throws">
        <>Fragment, NOT OK, will throw error</>
      </Tooltip>

      <Tooltip label="Throws">
        <div>More that one node</div>
        <div>NOT OK, will throw error</div>
      </Tooltip>
    </>
  );
}
```

## Required ref prop

Custom components that are rendered inside `Tooltip` are required to support `ref` prop:

```tsx
// Example of code that WILL NOT WORK
import { Tooltip } from '@mantine/core';

function MyComponent() {
  return <div>My component</div>;
}

// This will not work – MyComponent does not support ref
function Demo() {
  return (
    <Tooltip label="Does not work">
      <MyComponent />
    </Tooltip>
  );
}
```

Use `forwardRef` function to forward ref to root element:

```tsx
// Example of code that will work
import { forwardRef } from 'react';
import { Tooltip } from '@mantine/core';

const MyComponent = forwardRef<HTMLDivElement>((props, ref) => (
  <div ref={ref} {...props}>
    My component
  </div>
));

// Works correctly – ref is forwarded
function Demo() {
  return (
    <Tooltip label="Works fine">
      <MyComponent />
    </Tooltip>
  );
}
```

## Color

```

import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Tooltip"{{props}}>
      <Button>With tooltip</Button>
    </Tooltip>
  );
}
```

## Offset

Set `offset` prop to a number to change tooltip position relative to the target element. This way you can control tooltip offset on main axis only.

```

import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Tooltip" opened{{props}}>
      <Button>Button with tooltip</Button>
    </Tooltip>
  );
}
```

To control offset on both axis, pass object with `mainAxis` and `crossAxis` properties:

```
(props) => `
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    
      Button with tooltip
    
  );
}
`
```

## Arrow

Set `withArrow` prop to add an arrow to the tooltip. Arrow is a `div` element rotated with `transform: rotate(45deg)`.

`arrowPosition` prop determines how arrow is position relative to the target element when `position` is set to `*-start` and `*-end` values on `Popover` component. By default, the value is `center` – the arrow is positioned in the center of the target element if it is possible.

If you change `arrowPosition` to `side`, then the arrow will be positioned on the side of the target element, and you will be able to control arrow offset with `arrowOffset` prop. Note that when `arrowPosition` is set to `center`, `arrowOffset` prop is ignored.

```

import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip{{props}} label="Tooltip" withArrow opened position="top-start">
      <Button>Button with tooltip</Button>
    </Tooltip>
  );
}
```

## Controlled

```

import { useState } from 'react';
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  const [opened, setOpened] = useState(true);

  return (
    <Tooltip label="Ctrl + J" opened={opened}>
      <Button onClick={() => setOpened((o) => !o)}>
        Toggle color scheme
      </Button>
    </Tooltip>
  );
}
```

## Change events

Events that trigger tooltip can be changed with `events` prop, it accepts an object with the following properties that determine which events will trigger tooltip:

-   `hover` – mouse hover event, `true` by default
-   `focus` – focus/blur events excluding clicks on the target element, `false` by default
-   `touch` – events for touchscreen devices, `false` by default

```tsx
import { Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip
      label="Tooltip"
      events={{ hover: true, focus: true, touch: false }}
    >
      <button>target</button>
    </Tooltip>
  );
}
```

## Multiline

To enable multiline mode, set `multiline` prop to enable line breaks and `w` style prop to set tooltip width:

```

import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip
      multiline
      w={220}
      withArrow
      transitionProps={{ duration: 200 }}
      label="Use this button to save this information in your profile, after that you will be able to access it any time and share it via email."
    >
      <Button>Multiline tooltip</Button>
    </Tooltip>
  );
}
```

## Inline

Set `inline` prop to use `Tooltip` with inline elements:

```

import { Tooltip, Mark, Text } from '@mantine/core';

function Demo() {
  return (
    <Text>
      Stantler’s magnificent antlers were traded at high prices as works of art. As a result, this
      Pokémon was hunted close to extinction by those who were after the priceless antlers.{' '}
      <Tooltip inline label="Inline tooltip">
        <Mark>When visiting a junkyard</Mark>
      </Tooltip>
      , you may catch sight of it having an intense fight with Murkrow over shiny objects.Ho-Oh’s
      feathers glow in seven colors depending on the angle at which they are struck by light. These
      feathers are said to bring happiness to the bearers. This Pokémon is said to live at the foot
      of a rainbow.
    </Text>
  );
}
```

## Change transition

Tooltip is built with Transition component, it supports `transitionProps` props:

```tsx
import { Button, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip
      label="Tooltip with custom transition"
      transitionProps={{ transition: 'skew-up', duration: 300 }}
    >
      <Button>Button with tooltip</Button>
    </Tooltip>
  );
}
```

All available premade transitions:

## Close and open delay

You can delay tooltip open/close events by setting `openDelay` and `closeDelay` props in ms:

```

import { Button, Tooltip, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <Tooltip label="Opened after 500ms" openDelay={500}>
        <Button>Delay open - 500ms</Button>
      </Tooltip>
      <Tooltip label="Closes after 500ms" closeDelay={500}>
        <Button>Delay close - 500ms</Button>
      </Tooltip>
    </Group>
  );
}
```

## Tooltip delay group

`Tooltip.Group` component can be used to sync open and close delays for multiple tooltips:

```

import { Tooltip, Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Tooltip.Group openDelay={500} closeDelay={100}>
      <Group justify="center">
        <Tooltip label="Tooltip 1">
          <Button>Button 1</Button>
        </Tooltip>
        <Tooltip label="Tooltip 2">
          <Button>Button 2</Button>
        </Tooltip>
        <Tooltip label="Tooltip 3">
          <Button>Button 3</Button>
        </Tooltip>
      </Group>
    </Tooltip.Group>
  );
}
```

## Floating tooltip

`Tooltip.Floating` component has the same API as Tooltip component but tooltip will follow mouse:

```

import { Box, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip.Floating label="Floating tooltip">
      <Box p="xl" bg="var(--mantine-color-blue-light)" style={{ cursor: 'default' }}>
        Hover over the box to see tooltip
      </Box>
    </Tooltip.Floating>
  );
}
```

## Custom components with Tooltip

If you want to build a component that can be used with Tooltip use forwardRef or other prop that will allow to get root element ref. This logic is applied to Tooltip and Tooltip.Floating components:

```tsx
import { forwardRef } from 'react';
import { Tooltip } from '@mantine/core';

// forwardRef function will allow to get root element ref
const MyBadge = forwardRef<HTMLDivElement, { color: string }>(
  ({ color }, ref) => (
    <div ref={ref} color={color}>
      Badge
    </div>
  )
);

// other props can also be used
function MyOtherBadge({
  color,
  innerRef,
}: {
  color: string;
  innerRef?: React.ForwardedRef<HTMLDivElement>;
}) {
  return (
    <div ref={innerRef} color={color}>
      Badge
    </div>
  );
}

function Demo() {
  return (
    <>
      <Tooltip label="Can be used as is">
        <MyBadge color="red" />
      </Tooltip>

      <Tooltip label="refProp is required" refProp="innerRef">
        <MyOtherBadge color="orange" />
      </Tooltip>
    </>
  );
}
```

## Accessibility

Tooltip follows WAI-ARIA recommendations:

-   Tooltip body has `role="tooltip"` attribute
-   Target element has `aria-describedby` attribute
-   `Tooltip.Floating` is ignored by screen readers

By default, Tooltip is not triggered by focus events and thus users who use a screen reader or navigate with keyboard will not be able to get tooltip content. Set `events` prop to enable focus/blur tooltip events:

```tsx
import { Button, Tooltip } from '@mantine/core';

// Tooltip will be visible for screen readers
function Demo() {
  return (
    <Tooltip
      label="Tooltip"
      events={{ hover: true, focus: true, touch: false }}
    >
      <Button>Button with tooltip</Button>
    </Tooltip>
  );
}
```## Premade transitions

Mantine includes several premade transitions:

To use one of them set `transition` property to one of these values:

```tsx
import { Transition } from '@mantine/core';

function Demo({ opened }: { opened: boolean }) {
  return (
    <Transition
      mounted={opened}
      transition="fade"
      duration={400}
      timingFunction="ease"
    >
      {(styles) => <div style={styles}>Your modal</div>}
    </Transition>
  );
}
```

## Custom transitions

You can create your own transition. `transition` is an object with 4 properties:

-   `in` – styles for mounted state
-   `out` – styles for unmounted state
-   `common` (optional) – styles for both mounted and unmounted states
-   `transitionProperty` – properties which participate in transition

```

import { useState } from 'react';
import { useClickOutside } from '@mantine/hooks';
import { Transition, Paper, Button, Box } from '@mantine/core';

const scaleY = {
  in: { opacity: 1, transform: 'scaleY(1)' },
  out: { opacity: 0, transform: 'scaleY(0)' },
  common: { transformOrigin: 'top' },
  transitionProperty: 'transform, opacity',
};

function Demo() {
  const [opened, setOpened] = useState(false);
  const clickOutsideRef = useClickOutside(() => setOpened(false));

  return (
    <Box
      maw={200}
      pos="relative"
      style={{ display: 'flex', justifyContent: 'center', margin: 'auto' }}
    >
      <Button onClick={() => setOpened(true)}>Open dropdown</Button>
      <Transition
        mounted={opened}
        transition={scaleY}
        duration={200}
        timingFunction="ease"
        keepMounted
      >
        {(transitionStyle) => (
          <Paper
            shadow="md"
            p="xl"
            h={120}
            pos="absolute"
            top={0}
            left={0}
            right={0}
            ref={clickOutsideRef}
            style={{ ...transitionStyle, zIndex: 1 }}
          >
            Dropdown
          </Paper>
        )}
      </Transition>
    </Box>
  );
}
```

## Enter and exit delay

Use `enterDelay` and `exitDelay` props to delay transition start. Values are in milliseconds:

```

import { useState } from 'react';
import { Button, Flex, Paper, Transition } from '@mantine/core';

export function Demo() {
  const [opened, setOpened] = useState(false);

  return (
    <Flex maw={200} pos="relative" justify="center" m="auto">
      <Button onClick={() => setOpened(true)}>Open dropdown</Button>

      <Transition mounted={opened} transition="pop" enterDelay={500} exitDelay={300}>
        {(transitionStyle) => (
          <Paper
            shadow="md"
            p="xl"
            h={120}
            pos="absolute"
            inset={0}
            bottom="auto"
            onClick={() => setOpened(false)}
            style={{ ...transitionStyle, zIndex: 1 }}
          >
            Click to close
          </Paper>
        )}
      </Transition>
    </Flex>
  );
}
```## Usage

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
```## Usage

Mantine does not include typography global styles. Use `TypographyStylesProvider` to add typography styles to your html content:

```tsx
import { TypographyStylesProvider } from '@mantine/core';

function Demo() {
  return (
    <TypographyStylesProvider>
      <div
        dangerouslySetInnerHTML={{ __html: '<p>Your html here</p>' }}
      />
    </TypographyStylesProvider>
  );
}
```

## Example

```

import { TypographyStylesProvider } from '@mantine/core';

const html = '...html content here...';

function Demo() {
  return (
    <TypographyStylesProvider>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </TypographyStylesProvider>
  );
}
```

## All styles demo

`TypographyStylesProvider` includes styles for:

-   paragraphs
-   headings
-   lists
-   blockquotes
-   tables
-   links
-   images
-   hr
-   kbd
-   code and pre## Usage

`UnstyledButton` resets default button styles, it is used as a base for all other button components. You can use it to as a base for custom polymorphic buttons.

```

import { UnstyledButton } from '@mantine/core';

function Demo() {
  return <UnstyledButton>Button without styles</UnstyledButton>;
}
```## Usage

`VisuallyHidden` is a utility component that hides content visually but leaves it available to screen readers.

For example, it can be used with ActionIcon component:

```tsx
import { IconHeart } from '@tabler/icons-react';
import { ActionIcon, VisuallyHidden } from '@mantine/core';

function Demo() {
  return (
    <ActionIcon>
      <IconHeart />
      <VisuallyHidden>Like post</VisuallyHidden>
    </ActionIcon>
  );
}
```