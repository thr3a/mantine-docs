## Usage

```

import { FileInput } from '@mantine/core';


function Demo() {
  return (
    <FileInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
```

## Controlled

When `multiple` is `false`:

```tsx
import { useState } from 'react';
import { FileInput } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<File | null>(null);
  return <FileInput value={value} onChange={setValue} />;
}
```

When `multiple` is `true`:

```tsx
import { useState } from 'react';
import { FileInput } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<File[]>([]);
  return <FileInput multiple value={value} onChange={setValue} />;
}
```

## Multiple

Set `multiple` to allow user to pick more than one file:

```

import { FileInput } from '@mantine/core';

function Demo() {
  return <FileInput label="Upload files" placeholder="Upload files" multiple />;
}
```

## Accept

Set `accept` prop to restrict files selection to specific mime types:

```

import { FileInput } from '@mantine/core';

function Demo() {
  return (
    <FileInput accept="image/png,image/jpeg" label="Upload files" placeholder="Upload files" />
  );
}
```

## Clearable

Set `clearable` prop to display clear button in the right section of the input when file is selected. Note that if you define custom right section, clear button will not be rendered.

```

import { FileInput } from '@mantine/core';

function Demo() {
  return <FileInput clearable label="Upload files" placeholder="Upload files" />;
}
```

## Custom value component

```

import { FileInput, FileInputProps, Pill } from '@mantine/core';

const ValueComponent: FileInputProps['valueComponent'] = ({ value }) => {
  if (value === null) {
    return null;
  }

  if (Array.isArray(value)) {
    return (
      <Pill.Group>
        {value.map((file, index) => (
          <Pill key={index}>{file.name}</Pill>
        ))}
      </Pill.Group>
    );
  }

  return <Pill>{value.name}</Pill>;
};

function Demo() {
  return (
    <FileInput
      label="Upload files"
      placeholder="Upload files"
      multiple
      valueComponent={ValueComponent}
    />
  );
}
```

## Error state

```

import { FileInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <FileInput label="Boolean error" placeholder="Boolean error" error />
      <FileInput
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
      />
    </>
  );
}
```

## Disabled state

```

import { FileInput } from '@mantine/core';

function Demo() {
  return <FileInput disabled label="Disabled input" placeholder="Disabled input" />;
}
```

```

import { FileInput, rem } from '@mantine/core';
import { IconFileCv } from '@tabler/icons-react';

function Demo() {
  const icon = <IconFileCv style={{ width: rem(18), height: rem(18) }} stroke={1.5} />;

  return (
    <>
      <FileInput
        leftSection={icon}
        label="Attach your CV"
        placeholder="Your CV"
        leftSectionPointerEvents="none"
      />
      <FileInput
        rightSection={icon}
        label="Attach your CV"
        placeholder="Your CV"
        rightSectionPointerEvents="none"
        mt="md"
      />
    </>
  );
}
```

```

import { IconAt } from '@tabler/icons-react';
import { FileInput, rem } from '@mantine/core';

function Demo() {
  return (
    <FileInput
      label="Label"
      placeholder="FileInput"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconAt style={{ width: rem(18), height: rem(18) }} />}
      {{props}}
    />
  );
}
```

## FileInputProps type

`FileInputProps` type is a generic interface which accepts a single type argument: `multiple` value.

```tsx
import type { FileInputProps } from '@mantine/core';

type SingleInputProps = FileInputProps<false>;
type MultipleInputProps = FileInputProps<true>;
```