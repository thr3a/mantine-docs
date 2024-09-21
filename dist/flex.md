## Usage

```

import { Flex, Button } from '@mantine/core';


function Demo() {
  return (
    <Flex
      mih={50}
      bg="rgba(0, 0, 0, .3)"
      {{props}}
    >
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Flex>
  );
}
```

## Supported props

## Responsive props

`Flex` component props can have responsive values the same way as other style props:

```

import { Flex, Button } from '@mantine/core';

function Demo() {
  return (
    <Flex
      direction={{ base: 'column', sm: 'row' }}
      gap={{ base: 'sm', sm: 'lg' }}
      justify={{ sm: 'center' }}
    >
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Flex>
  );
}
```

## Difference from Group and Stack

`Flex` component is an alternative to Group and Stack. `Flex` is more flexible, it allows creating both horizontal and vertical flexbox layouts, but requires more configuration. Unlike Group and Stack `Flex` is polymorphic and supports responsive props.