## Usage

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
```