## Usage

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

If you also need to support `Tab` and `Shift + Tab` then set `menuItemTabIndex={0}`.