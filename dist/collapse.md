## Usage

```

import { Button, Group, Text, Collapse, Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Box maw={400} mx="auto">
      <Group justify="center" mb={5}>
        <Button onClick={toggle}>Toggle content</Button>
      </Group>

      <Collapse in={opened}>
        <Text>{/* ... content */}</Text>
      </Collapse>
    </Box>
  );
}
```

## Change transition

Set following props to control transition:

-   `transitionDuration` – duration in ms
-   `transitionTimingFunction` – timing function (ease, linear, etc.), defaults to `ease`
-   `onTransitionEnd` – called when transition ends (both open and close)

```

import { useDisclosure } from '@mantine/hooks';
import { Button, Group, Text, Collapse, Box } from '@mantine/core';

function Demo() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Box maw={400} mx="auto">
      <Group justify="center" mb={5}>
        <Button onClick={toggle}>Toggle with linear transition</Button>
      </Group>

      <Collapse in={opened} transitionDuration={1000} transitionTimingFunction="linear">
        <Text>{/* ...content */}</Text>
      </Collapse>
    </Box>
  );
}
```

## Nested Collapse components