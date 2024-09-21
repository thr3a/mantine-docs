## Usage

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
```