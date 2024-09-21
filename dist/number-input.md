## Usage

`NumberInput` is based on react-number-format. It supports most of the props from the `NumericFormat` component in the original package.

```

import { NumberInput } from '@mantine/core';


function Demo() {
  return (
    <NumberInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
```

## Controlled

```tsx
import { useState } from 'react';
import { NumberInput } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<string | number>('');
  return <NumberInput value={value} onChange={setValue} />;
}
```

## Value type

`value`, `defaultValue` and `onChange` props can be either string or number. In all cases when `NumberInput` value can be represented as a number, `onChange` function is called with a number (for example `55`, `1.28`, `-100`, etc.). But there are several cases when it is not possible to represent value as a number:

-   Empty state is represented as an empty string – `''`
-   Numbers that are larger than `Number.MAX_SAFE_INTEGER` or smaller than `Number.MIN_SAFE_INTEGER` are represented as strings – `'90071992547409910'`
-   Numbers that consist of only multiple zeros are represented as strings – `0.`, `0.0`, `-0.00`, etc.

## min and max

Set `min` and `max` props to limit the input value:

```

import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="Enter value between 10 and 20"
      placeholder="Don't enter more than 20 and less than 10"
      min={10}
      max={20}
    />
  );
}
```

## Clamp behavior

By default, the value is clamped when the input is blurred. If you set `clampBehavior="strict"`, it will not be possible to enter value outside of min/max range. Note that this option may cause issues if you have tight `min` and `max`, for example `min={10}` and `max={20}`. If you need to disable value clamping entirely, set `clampBehavior="none"`.

```

import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="You cannot enter number less than 0 or greater than 100"
      placeholder="You cannot enter number less than 0 or greater than 100"
      clampBehavior="strict"
      min={0}
      max={100}
    />
  );
}
```

## Prefix and suffix

Set `prefix` and `suffix` props to add given string to the start or end of the input value:

```

import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <NumberInput
        label="With prefix"
        placeholder="Dollars"
        prefix="$"
        defaultValue={100}
        mb="md"
      />
      <NumberInput
        label="With suffix"
        placeholder="Percents"
        suffix="%"
        defaultValue={100}
        mt="md"
      />
    </>
  );
}
```

## Negative numbers

By default, negative numbers are allowed. Set `allowNegative={false}` to allow only positive numbers.

```

import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="Negative number are not allowed"
      placeholder="Do not enter negative numbers"
      allowNegative={false}
    />
  );
}
```

## Decimal numbers

By default, decimal numbers are allowed. Set `allowDecimal={false}` to allow only integers.

```

import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="Decimals are not allowed"
      placeholder="Do not enter decimal numbers"
      allowDecimal={false}
    />
  );
}
```

## Decimal scale

`decimalScale` controls how many decimal places are allowed:

```

import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="You can enter only 2 digits after decimal point"
      placeholder="Do not enter more that 2"
      decimalScale={2}
    />
  );
}
```

## Fixed decimal scale

Set `fixedDecimalScale` to always display fixed number of decimal places:

```

import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="Always show 2 digits after decimal point"
      placeholder="Do not enter more that 2"
      decimalScale={2}
      fixedDecimalScale
      defaultValue={2.2}
    />
  );
}
```

## Decimal separator

Set `decimalSeparator` to change decimal separator character:

```

import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="Custom decimal separator"
      placeholder="You can change it"
      decimalSeparator=","
      defaultValue={20.573}
    />
  );
}
```

## Thousand separator

Set `thousandSeparator` prop to separate thousands with a character. You can control grouping logic with `thousandsGroupStyle`, it accepts: `thousand`, `lakh`, `wan`, `none` values.

```

import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <NumberInput
        label="Thousands are separated with a coma"
        placeholder="Thousands are separated with a coma"
        thousandSeparator=","
        defaultValue={1_000_000}
      />

      <NumberInput
        label="Thousands are separated with a space"
        placeholder="Thousands are separated with a space"
        thousandSeparator=" "
        defaultValue={1_000_000}
        mt="md"
      />
    </>
  );
}
```

```

import { NumberInput, rem } from '@mantine/core';
import { IconCurrencyDram } from '@tabler/icons-react';

function Demo() {
  const icon = <IconCurrencyDram style={{ width: rem(20), height: rem(20) }} stroke={1.5} />;
  return (
    <>
      <NumberInput leftSection={icon} label="With left section" placeholder="With left section" />
      <NumberInput
        rightSection={icon}
        label="With right section"
        placeholder="With right section"
        mt="md"
      />
    </>
  );
}
```

## Increment/decrement controls

By default, the right section is occupied by increment and decrement buttons. To hide them, set `hideControls` prop. You can also use `rightSection` prop to render anything in the right section to replace the default controls.

```

import { NumberInput } from '@mantine/core';
import { IconChartBubble } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <NumberInput label="Hide controls" placeholder="Hide controls" hideControls />
      <NumberInput
        label="Custom right section"
        placeholder="Custom right section"
        mt="md"
        rightSection={<IconChartBubble />}
        rightSectionPointerEvents="none"
      />
    </>
  );
}
```

## Increment/decrement on hold

Set `stepHoldDelay` and `stepHoldInterval` props to define behavior when increment/decrement controls are clicked and hold:

```

import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <NumberInput
        label="Step on hold"
        description="Step value when clicking and holding increment/decrement buttons"
        stepHoldDelay={500}
        stepHoldInterval={100}
      />

      <NumberInput
        label="Step the value with interval function"
        description="Step value will increase incrementally when control is hold"
        stepHoldDelay={500}
        stepHoldInterval={(t) => Math.max(1000 / t ** 2, 25)}
      />
    </>
  );
}
```

## Custom increment and decrement controls

You can get a ref with `increment` and `decrement` functions to create custom controls:

```

import { useRef } from 'react';
import { NumberInput, Group, Button, NumberInputHandlers } from '@mantine/core';

function Demo() {
  const handlersRef = useRef<NumberInputHandlers>(null);
  return (
    <>
      <NumberInput
        label="Click buttons to change value"
        placeholder="Click the buttons"
        handlersRef={handlersRef}
        step={2}
        min={10}
        max={20}
        defaultValue={15}
      />

      <Group mt="md" justify="center">
        <Button onClick={() => handlersRef.current?.decrement()} variant="default">
          Decrement by 2
        </Button>

        <Button onClick={() => handlersRef.current?.increment()} variant="default">
          Increment by 2
        </Button>
      </Group>
    </>
  );
}
```

## Error state

```

import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <NumberInput label="Boolean error" placeholder="Boolean error" error />
      <NumberInput
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

import { NumberInput } from '@mantine/core';

function Demo() {
  return <NumberInput disabled label="Disabled input" placeholder="Disabled input" />;
}
```

```

import { IconAt } from '@tabler/icons-react';
import { NumberInput, rem } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="Label"
      placeholder="NumberInput"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconAt style={{ width: rem(18), height: rem(18) }} />}
      {{props}}
    />
  );
}
```