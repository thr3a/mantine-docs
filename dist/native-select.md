## Usage

```

import { NativeSelect } from '@mantine/core';

function Demo() {
  return <NativeSelect{{props}} data={['React', 'Angular', 'Vue']} />;
}
```

## Controlled

```tsx
import { useState } from 'react';
import { NativeSelect } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('');

  return (
    <NativeSelect
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      data={['React', 'Angular', 'Svelte', 'Vue']}
    />
  );
}
```

## Adding options

`NativeSelect` allows passing options in two ways:

-   `data` prop array
-   `children` prop with `option` components

Note that if `children` is used, `data` will be ignored.

### data prop

`data` prop accepts values in one of the following formats:

1.  Array of strings:

```tsx
import { NativeSelect } from '@mantine/core';

function Demo() {
  return (
    <NativeSelect data={['React', 'Angular', 'Svelte', 'Vue']} />
  );
}
```

2.  Array of objects with `label`, `value` and `disabled` keys:

```tsx
import { NativeSelect } from '@mantine/core';

function Demo() {
  return (
    <NativeSelect
      data={[
        { label: 'React', value: 'react' },
        { label: 'Angular', value: 'angular' },
        { label: 'Svelte', value: 'svelte', disabled: true },
        { label: 'Vue', value: 'vue' },
      ]}
    />
  );
}
```

3.  Array of grouped options (string format):

```tsx
import { NativeSelect } from '@mantine/core';

function Demo() {
  return (
    <NativeSelect
      data={[
        {
          group: 'Frontend libraries',
          items: ['React', 'Angular', 'Svelte', 'Vue'],
        },
        {
          group: 'Backend libraries',
          items: ['Express', 'Koa', 'Django'],
        },
      ]}
    />
  );
}
```

4.  Array of grouped options (object format):

```tsx
import { NativeSelect } from '@mantine/core';

function Demo() {
  return (
    <NativeSelect
      data={[
        {
          group: 'Frontend libraries',
          items: [
            { label: 'React', value: 'react' },
            { label: 'Angular', value: 'angular' },
            { label: 'Vue', value: 'vue', disabled: true },
          ],
        },
        {
          group: 'Backend libraries',
          items: [
            { label: 'Express', value: 'express' },
            { label: 'Koa', value: 'koa' },
            { label: 'Django', value: 'django' },
          ],
        },
      ]}
    />
  );
}
```

Example of `data` prop with array of grouped options:

```

import { NativeSelect } from '@mantine/core';

function Demo() {
  return (
    <NativeSelect
      data={[
        {
          group: 'Frontend libraries',
          items: [
            { label: 'React', value: 'react' },
            { label: 'Angular', value: 'angular' },
            { label: 'Vue', value: 'vue', disabled: true },
          ],
        },
        {
          group: 'Backend libraries',
          items: [
            { label: 'Express', value: 'express' },
            { label: 'Koa', value: 'koa' },
            { label: 'Django', value: 'django' },
          ],
        },
      ]}
    />
  );
}
```

### children options

To add options with `children` prop, use `option` elements to add options and `optgroup` elements to group them:

```

import { NativeSelect } from '@mantine/core';

function Demo() {
  return (
    <NativeSelect label="With children options">
      <optgroup label="Frontend libraries">
        <option value="react">React</option>
        <option value="angular">Angular</option>
        <option value="vue" disabled>
          Vue
        </option>
      </optgroup>

      <optgroup label="Backend libraries">
        <option value="express">Express</option>
        <option value="koa">Koa</option>
        <option value="django">Django</option>
      </optgroup>
    </NativeSelect>
  );
}
```

## With dividers

Use `hr` tags to add dividers between options:

```

import { NativeSelect } from '@mantine/core';

function Demo() {
  return (
    <NativeSelect label="With dividers">
      <option>Select library</option>

      <hr />

      <optgroup label="Frontend libraries">
        <option value="react">React</option>
        <option value="angular">Angular</option>
        <option value="vue">Vue</option>
      </optgroup>

      <hr />

      <optgroup label="Backend libraries">
        <option value="express">Express</option>
        <option value="koa">Koa</option>
        <option value="django">Django</option>
      </optgroup>
    </NativeSelect>
  );
}
```

```

import { NativeSelect, rem } from '@mantine/core';
import { IconChevronDown, IconHash } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <NativeSelect
        leftSection={<IconHash style={{ width: rem(16), height: rem(16) }} />}
        leftSectionPointerEvents="none"
        label="Left section"
        data={['React', 'Angular']}
      />

      <NativeSelect
        rightSection={<IconChevronDown style={{ width: rem(16), height: rem(16) }} />}
        label="Right section"
        data={['React', 'Angular']}
        mt="md"
      />
    </>
  );
}
```

## Disabled state

```

import { NativeSelect } from '@mantine/core';

function Demo() {
  return <NativeSelect disabled data={['React', 'Angular']} label="Disabled NativeSelect" />;
}
```

## Error state

```

import { NativeSelect } from '@mantine/core';

function Demo() {
  return (
    <>
      <NativeSelect error label="Boolean error" data={['React', 'Angular']} />
      <NativeSelect
        error="Error message"
        label="React node error"
        data={['React', 'Angular']}
        mt="md"
      />
    </>
  );
}
```

```

import { NativeSelect } from '@mantine/core';

function Demo() {
  return <NativeSelect{{props}} data={['React', 'Angular']} label="NativeSelect label" description="NativeSelect description" error="NativeSelect error" withAsterisk />;
}
```