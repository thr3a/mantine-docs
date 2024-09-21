## Usage

```

import { Pill } from '@mantine/core';

function Demo() {
  return <Pill{{props}}>React</Pill>;
}
```

## Inside inputs

`Pill` component is designed to be used inside inputs. It can be used to create custom multi select or tag inputs.

```

import { Pill, InputBase } from '@mantine/core';

function Demo() {
  const pills = Array(10)
    .fill(0)
    .map((_, index) => (
      <Pill key={index} withRemoveButton>
        Item {index}
      </Pill>
    ));

  return (
    <InputBase component="div" multiline>
      <Pill.Group>{pills}</Pill.Group>
    </InputBase>
  );
}
```

```

import { Pill } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return <Pill{{props}} withRemoveButton>Test pill</Pill>;
}
```