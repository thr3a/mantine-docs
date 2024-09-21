## Usage

```

import { Textarea } from '@mantine/core';


function Demo() {
  return (
    <Textarea
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
```

## Controlled

```tsx
import { useState } from 'react';
import { Textarea } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('');
  return (
    <Textarea
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
    />
  );
}
```

## Autosize

Autosize textarea uses react-textarea-autosize package. Textarea height will grow until maxRows are reached or indefinitely if maxRows not set.

```

import { Textarea } from '@mantine/core';

function Demo() {
  return (
    <>
      <Textarea
        placeholder="Autosize with no rows limit"
        label="Autosize with no rows limit"
        autosize
        minRows={2}
      />

      <Textarea
        label="Autosize with 4 rows max"
        placeholder="Autosize with 4 rows max"
        autosize
        minRows={2}
        maxRows={4}
      />
    </>
  );
}

```

## Enable resize

By default, resize is `none`, to enable it set `resize` prop to `vertical` or `both`:

```

import { Textarea } from '@mantine/core';

function Demo() {
  return <Textarea resize="vertical" label="Disabled" placeholder="Your comment" />;
}
```

## Error state

```

import { Textarea } from '@mantine/core';

function Demo() {
  return (
    <>
      <Textarea label="Boolean error" placeholder="Boolean error" error />
      <Textarea
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

import { Textarea } from '@mantine/core';

function Demo() {
  return <Textarea label="Disabled" placeholder="Your comment" disabled />;
}
```

```

import { IconAt } from '@tabler/icons-react';
import { Textarea, rem } from '@mantine/core';

function Demo() {
  return (
    <Textarea
      label="Label"
      placeholder="Textarea"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconAt style={{ width: rem(18), height: rem(18) }} />}
      autosize
      {{props}}
    />
  );
}
```