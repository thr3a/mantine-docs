## Usage

```

import { HoverCard, Button, Text, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <HoverCard width={280} shadow="md">
        <HoverCard.Target>
          <Button>Hover to reveal the card</Button>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size="sm">
            Hover card is revealed when user hovers over target element, it will be hidden once
            mouse is not over both target and dropdown elements
          </Text>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  );
}

```

## Delays

Set open and close delays in ms with `openDelay` and `closeDelay` props:

```

import { HoverCard, Button, Text, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <HoverCard shadow="md" openDelay={1000}>
        <HoverCard.Target>
          <Button>1000ms open delay</Button>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size="sm">Opened with 1000ms delay</Text>
        </HoverCard.Dropdown>
      </HoverCard>

      <HoverCard shadow="md" closeDelay={1000}>
        <HoverCard.Target>
          <Button>1000ms close delay</Button>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size="sm">Will close with 1000ms delay</Text>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  );
}
```

## With interactive elements

`HoverCard` is displayed only when the mouse is over the target element or dropdown, you can use anchors and buttons within dropdowns, using inputs is not recommended:

```

import { HoverCard, Avatar, Text, Group, Anchor, Stack } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <HoverCard width={320} shadow="md" withArrow openDelay={200} closeDelay={400}>
        <HoverCard.Target>
          <Avatar src="https://avatars.githubusercontent.com/u/79146003?s=200&v=4" radius="xl" />
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Group>
            <Avatar src="https://avatars.githubusercontent.com/u/79146003?s=200&v=4" radius="xl" />
            <Stack gap={5}>
              <Text size="sm" fw={700} style={{ lineHeight: 1 }}>
                Mantine
              </Text>
              <Anchor
                href="https://twitter.com/mantinedev"
                c="dimmed"
                size="xs"
                style={{ lineHeight: 1 }}
              >
                @mantinedev
              </Anchor>
            </Stack>
          </Group>

          <Text size="sm" mt="md">
            Customizable React components and hooks library with focus on usability, accessibility
            and developer experience
          </Text>

          <Group mt="md" gap="xl">
            <Text size="sm">
              <b>0</b> Following
            </Text>
            <Text size="sm">
              <b>1,174</b> Followers
            </Text>
          </Group>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  );
}
```

## Accessibility

`HoverCard` is ignored by screen readers and cannot be activated with keyboard, use it to display only additional information that is not required to understand the context.