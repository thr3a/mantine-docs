## Usage

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
```