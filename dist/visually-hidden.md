## Usage

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