## Usage

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
```