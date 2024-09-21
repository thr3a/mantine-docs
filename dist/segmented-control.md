## Usage

```

import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl{{props}} data={['React', 'Angular', 'Vue']} />;
}
```

## Controlled

```tsx
import { useState } from 'react';
import { SegmentedControl } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('react');

  return (
    <SegmentedControl
      value={value}
      onChange={setValue}
      data={[
        { label: 'React', value: 'react' },
        { label: 'Angular', value: 'ng' },
        { label: 'Vue', value: 'vue' },
        { label: 'Svelte', value: 'svelte' },
      ]}
    />
  );
}
```

## Data prop

`SegmentedControl` support two different data formats:

1.  An array of strings – used when `value` and `label` are the same
2.  An array of objects – used when `value` and `label` are different

```tsx
import { SegmentedControl } from '@mantine/core';

function ArrayOfStrings() {
  return (
    <SegmentedControl data={['React', 'Angular', 'Svelte', 'Vue']} />
  );
}

function ArrayOfObjects() {
  return (
    <SegmentedControl
      data={[
        { value: 'React', label: 'React' },
        { value: 'Angular', label: 'Angular' },
        { value: 'Svelte', label: 'Svelte' },
        { value: 'Vue', label: 'Vue' },
      ]}
    />
  );
}
```

## Disabled

To disable `SegmentedControl` item, use array of objects `data` format and set `disabled: true` on the item that you want to disable. To disable the entire component, use `disabled` prop.

```

import { SegmentedControl } from '@mantine/core';

function Demo() {
  return (
    <Stack align="center">
      <div>
        <Text size="sm" fw={500} mb={3}>
          Disabled control
        </Text>
        <SegmentedControl
          disabled
          data={[
            {
              value: 'preview',
              label: 'Preview',
            },
            {
              value: 'code',
              label: 'Code',
            },
            {
              value: 'export',
              label: 'Export',
            },
          ]}
        />
      </div>

      <div>
        <Text size="sm" fw={500} mb={3}>
          Disabled option
        </Text>
        <SegmentedControl
          data={[
            {
              value: 'preview',
              label: 'Preview',
              disabled: true,
            },
            {
              value: 'code',
              label: 'Code',
            },
            {
              value: 'export',
              label: 'Export',
            },
          ]}
        />
      </div>
    </Stack>
  );
}
```

## React node as label

You can use any React node as label:

```

import { Center, SegmentedControl, rem } from '@mantine/core';
import { IconEye, IconCode, IconExternalLink } from '@tabler/icons-react';

function Demo() {
  return (
    <SegmentedControl
      data={[
        {
          value: 'preview',
          label: (
            <Center style={{ gap: 10 }}>
              <IconEye style={{ width: rem(16), height: rem(16) }} />
              <span>Preview</span>
            </Center>
          ),
        },
        {
          value: 'code',
          label: (
            <Center style={{ gap: 10 }}>
              <IconCode style={{ width: rem(16), height: rem(16) }} />
              <span>Code</span>
            </Center>
          ),
        },
        {
          value: 'export',
          label: (
            <Center style={{ gap: 10 }}>
              <IconExternalLink style={{ width: rem(16), height: rem(16) }} />
              <span>Export</span>
            </Center>
          ),
        },
      ]}
    />
  );
}
```

## Color

By default, `SegmentedControl` uses `theme.white` with shadow in light color scheme and `var(--mantine-color-dark-6)` background color for indicator. Set `color` prop to change indicator `background-color`:

```

import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl{{props}} data={['React', 'Angular', 'Vue', 'Svelte']} />;
}
```

## Transitions

Change transition properties with:

-   `transitionDuration` – all transitions duration in ms, `200` by default
-   `transitionTimingFunction` – all transitions timing function, `ease` by default

```

import { SegmentedControl, Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text size="sm" fw={500} mt={3}>
        No transitions
      </Text>
      <SegmentedControl data={['React', 'Angular', 'Vue', 'Svelte']} transitionDuration={0} />

      <Text size="sm" fw={500} mt="md">
        500ms linear transition
      </Text>
      <SegmentedControl
        data={['React', 'Angular', 'Vue', 'Svelte']}
        transitionDuration={500}
        transitionTimingFunction="linear"
      />
    </>
  );
}
```

## readOnly

Set `readOnly` prop to prevent value from being changed:

```

import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl readOnly defaultValue="Angular" data={['React', 'Angular', 'Vue']} />;
}
```

```

import { SegmentedControl } from '@mantine/core';

function Demo() {
  return <SegmentedControl{{props}} data={['React', 'Angular', 'Vue']} />;
}
```

## Accessibility and usability

`SegmentedControl` uses radio inputs under the hood, it is accessible by default with no extra steps required if you have text in labels. Component support the same keyboard events as a regular radio group.

In case you do not have text in labels (for example, when you want to use `SegmentedControl` with icons only), use VisuallyHidden to make component accessible:

```

import { SegmentedControl, VisuallyHidden, rem } from '@mantine/core';
import { IconEye, IconCode, IconExternalLink } from '@tabler/icons-react';

function Demo() {
  const iconProps = {
    style: { width: rem(20), height: rem(20), display: 'block' },
    stroke: 1.5,
  };

  return (
    <SegmentedControl
      data={[
        {
          value: 'preview',
          label: (
            <>
              <IconEye {...iconProps} />
              <VisuallyHidden>Preview</VisuallyHidden>
            </>
          ),
        },
        {
          value: 'code',
          label: (
            <>
              <IconCode {...iconProps} />
              <VisuallyHidden>Code</VisuallyHidden>
            </>
          ),
        },
        {
          value: 'export',
          label: (
            <>
              <IconExternalLink {...iconProps} />
              <VisuallyHidden>Export</VisuallyHidden>
            </>
          ),
        },
      ]}
    />
  );
}
```