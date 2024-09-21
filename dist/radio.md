## Usage

```

import { Radio } from '@mantine/core';


function Demo() {
  return (
    <Radio
      {{props}}
    />
  );
}
```

## Controlled

```tsx
import { useState } from 'react';
import { Radio } from '@mantine/core';

function Demo() {
  const [checked, setChecked] = useState(false);
  return (
    <Radio
      checked={checked}
      onChange={(event) => setChecked(event.currentTarget.checked)}
    />
  );
}
```

## States

```

import { Radio, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <Radio checked={false} onChange={() => {}} label="Default radio" />
      <Radio checked onChange={() => {}} label="Checked radio" />
      <Radio checked variant="outline" onChange={() => {}} label="Outline checked radio" />
      <Radio disabled label="Disabled radio" />
      <Radio disabled checked onChange={() => {}} label="Disabled checked radio" />
    </Stack>
  );
}
```

## Change icon

```

import { Radio, CheckIcon } from '@mantine/core';

function Demo() {
  return (
    <Radio icon={CheckIcon} label="Custom check icon" name="check" value="check" defaultChecked />
  );
}
```

## Change icon color

```

import { Radio } from '@mantine/core';

function Demo() {
  return (
    <Radio
      iconColor="dark.8"
      color="lime.4"
      label="Custom icon color"
      name="check"
      value="check"
      defaultChecked
    />
  );
}
```

## Disabled state

```

import { Radio, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Radio checked disabled label="React" value="react" />
      <Radio disabled label="Angular" value="nu" />
      <Radio disabled label="Svelte" value="sv" />
    </Group>
  );
}
```

## Pointer cursor

By default, radio input and label have `cursor: default` (same as native `input[type="radio"]`). To change cursor to pointer, set `cursorType` on theme:

```tsx
import { createTheme, MantineProvider, Radio } from '@mantine/core';

const theme = createTheme({
  cursorType: 'pointer',
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Radio label="Pointer cursor" />
    </MantineProvider>
  );
}
```

## Radio with tooltip

You can change target element to which tooltip is attached with `refProp`:

-   If `refProp` is not set, the tooltip is attached to the checkbox input
-   If `refProp="rootRef"` is set, the tooltip is attached to the root element (contains label, input and other elements)

```

import { Tooltip, Radio } from '@mantine/core';

function Demo() {
  return (
    <>
      <Tooltip label="Radio with tooltip">
        <Radio label="Tooltip on radio only" />
      </Tooltip>

      <Tooltip label="Radio with tooltip" refProp="rootRef">
        <Radio label="Tooltip the entire element" mt="md" />
      </Tooltip>
    </>
  );
}
```

## Radio.Group component

```

import { Radio, Group } from '@mantine/core';


function Demo() {
  return (
    <Radio.Group
      name="favoriteFramework"
      {{props}}
    >
      <Group mt="xs">
        <Radio value="react" label="React" />
        <Radio value="svelte" label="Svelte" />
        <Radio value="ng" label="Angular" />
        <Radio value="vue" label="Vue" />
      </Group>
    </Radio.Group>
  );
}
```

## Controlled Radio.Group

```tsx
import { useState } from 'react';
import { Radio } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('react');

  return (
    <Radio.Group
      value={value}
      onChange={setValue}
      name="favoriteFramework"
      label="Select your favorite framework/library"
      description="This is anonymous"
      withAsterisk
    >
      <Radio value="react" label="React" />
      <Radio value="svelte" label="Svelte" />
      <Radio value="ng" label="Angular" />
      <Radio value="vue" label="Vue" />
    </Radio.Group>
  );
}
```

## Radio.Indicator

`Radio.Indicator` looks exactly the same as `Radio` component, but it does not have any semantic meaning, it’s just a visual representation of radio state. You can use it in any place where you need to display radio state without any interaction related to the indicator. For example, it is useful in cards based on buttons, trees, etc.

Note that `Radio.Indicator` cannot be focused or selected with keyboard. It is not accessible and should not be used as a replacement for `Radio` component.

```

import { Radio, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Radio.Indicator />
      <Radio.Indicator checked />
      <Radio.Indicator disabled />
      <Radio.Indicator disabled checked />
    </Group>
  );
}
```

## Radio.Card component

`Radio.Card` component can be used as a replacement for `Radio` to build custom cards/buttons/other things that work as radios. The root element of the component has `role="radio"` attribute, it is accessible by default and supports the same keyboard interactions as `input[type="radio"]`.

```

import { useState } from 'react';
import { Radio, Group, Text } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  const [checked, setChecked] = useState(false);

  return (
    <Radio.Card
      className={classes.root}
      radius="md"
      checked={checked}
      onClick={() => setChecked((c) => !c)}
    >
      <Group wrap="nowrap" align="flex-start">
        <Radio.Indicator />
        <div>
          <Text className={classes.label}>@mantine/core</Text>
          <Text className={classes.description}>
            Core components library: inputs, buttons, overlays, etc.
          </Text>
        </div>
      </Group>
    </Radio.Card>
  );
}
```

You can use `Radio.Card` with `Radio.Group` the same way as `Radio` component:

```

import { useState } from 'react';
import { Radio, Group, Stack, Text } from '@mantine/core';
import classes from './Demo.module.css';

const data = [
  {
    name: '@mantine/core',
    description: 'Core components library: inputs, buttons, overlays, etc.',
  },
  { name: '@mantine/hooks', description: 'Collection of reusable hooks for React applications.' },
  { name: '@mantine/notifications', description: 'Notifications system' },
];

function Demo() {
  const [value, setValue] = useState<string | null>(null);

  const cards = data.map((item) => (
    <Radio.Card className={classes.root} radius="md" value={item.name} key={item.name}>
      <Group wrap="nowrap" align="flex-start">
        <Radio.Indicator />
        <div>
          <Text className={classes.label}>{item.name}</Text>
          <Text className={classes.description}>{item.description}</Text>
        </div>
      </Group>
    </Radio.Card>
  ));

  return (
    <>
      <Radio.Group
        value={value}
        onChange={setValue}
        label="Pick one package to install"
        description="Choose a package that you will need in your application"
      >
        <Stack pt="md" gap="xs">
          {cards}
        </Stack>
      </Radio.Group>

      <Text fz="xs" mt="md">
        CurrentValue: {value || '–'}
      </Text>
    </>
  );
}
```

```

import { Radio } from '@mantine/core';

function Demo() {
  return (
    <Radio
      label="Radio"
      description="Radio description"
      error="Radio error"
      defaultChecked
     {{props}}
    />
  );
}
```

## Accessibility

Set `aria-label` or `label` prop to make the radio accessible:

```tsx
import { Radio } from '@mantine/core';

// Not ok, input is not labeled
function Bad() {
  return <Radio />;
}

// Ok, input is labelled by aria-label
function GoodAriaLabel() {
  return <Radio aria-label="My radio" />;
}

// Ok, input is labelled by label element
function GoodLabel() {
  return <Radio label="My radio" />;
}
```