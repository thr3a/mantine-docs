## Usage

```

import { ColorSwatch, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <ColorSwatch color="#009790" />
      <ColorSwatch color="rgba(234, 22, 174, 0.5)" />
      <ColorSwatch color="var(--mantine-color-orange-5)" />
    </Group>
  );
}
```

## withShadow

By default, `ColorSwatch` has an inner box-shadow to make it more visible on light backgrounds, you can disable it by setting `withShadow={false}` prop:

```

import { ColorSwatch } from '@mantine/core';

function Demo() {
  return <ColorSwatch color="rgba(255, 255, 255, 0.7)"{{props}} />;
}
```

```

import { useState } from 'react';
import { ColorSwatch, CheckIcon, rem } from '@mantine/core';

function Demo() {
  const [checked, setChecked] = useState(true);

  return (
    <ColorSwatch
      component="button"
      color="var(--mantine-color-grape-6)"
      onClick={() => setChecked((c) => !c)}
      style={{ color: '#fff', cursor: 'pointer' }}
    >
      {checked && <CheckIcon style={{ width: rem(12), height: rem(12) }} />}
    </ColorSwatch>
  );
}
```