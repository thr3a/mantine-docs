## Usage

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

`Dialog` is not accessible and most likely will not be announced by screen reader, make sure you do not put any important information. In most cases it would be better to select Modal, Drawer or Notifications.