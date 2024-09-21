## Usage

```

import { SemiCircleProgress } from '@mantine/core';


function Demo() {
  return (
    <SemiCircleProgress
      {{props}}
      label="Label"
    />
  );
}
```

## Change empty segment color

Use `emptySegmentColor` prop to change color of empty segment, it accepts key of `theme.colors` or any valid CSS color value:

```

import { SemiCircleProgress } from '@mantine/core';

function Demo() {
  return <SemiCircleProgress value={30} emptySegmentColor="var(--mantine-color-dimmed)" />;
}
```

## Change label position

By default, the label is displayed at the bottom of the component, you can change its position to `center` by using `labelPosition` prop:

```

import { SemiCircleProgress } from '@mantine/core';

function Demo() {
  return (
    <>
      <SemiCircleProgress value={30} label="Bottom" mb="xl" />
      <SemiCircleProgress value={30} label="Center" labelPosition="center" />
    </>
  );
}
```

## Filled segment transition

By default, transitions are disabled, to enable them, set `transitionDuration` prop to a number of milliseconds:

```

import { useState } from 'react';
import { Button, SemiCircleProgress } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(30);

  return (
    <>
      <SemiCircleProgress value={value} transitionDuration={250} label={`${value}%`} />

      <Button onClick={() => setValue(Math.floor(Math.random() * 100))} mt="xl" fullWidth>
        Set random value
      </Button>
    </>
  );
}
```