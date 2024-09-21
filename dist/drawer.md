## Usage

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
```