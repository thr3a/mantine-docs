## Usage

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

## Keyboard interactions