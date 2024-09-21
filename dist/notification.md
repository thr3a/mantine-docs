## Usage

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
```