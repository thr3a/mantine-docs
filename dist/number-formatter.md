## Usage

Use `NumberFormatter` to format numbers. It supports the same formatting related props as NumberInput component.

```

import { NumberFormatter } from '@mantine/core';

function Demo() {
  return <NumberFormatter prefix="$ " value={1000000} thousandSeparator />;
}
```

## Prefix and suffix

Set `prefix` and `suffix` props to add given string to the start or end of the value:

```

import { NumberFormatter } from '@mantine/core';

function Demo() {
  return (
    <>
      <div>
        With prefix: <NumberFormatter prefix="$ " value={100} />
      </div>
      <div>
        With suffix: <NumberFormatter value={100} suffix=" RUB" />
      </div>
    </>
  );
}
```

## Thousands separator

Set `thousandSeparator` prop to separate thousands with a character. You can control grouping logic with `thousandsGroupStyle`, it accepts: `thousand`, `lakh`, `wan`, `none` values.

```

import { NumberFormatter } from '@mantine/core';

function Demo() {
  return (
    <>
      <div>
        With default separator: <NumberFormatter thousandSeparator value={1000000} />
      </div>
      <div>
        With custom separator:{' '}
        <NumberFormatter thousandSeparator="." decimalSeparator="," value={1000000} />
      </div>
    </>
  );
}
```

## Decimal scale

`decimalScale` prop controls the number of allowed decimal places:

```

import { NumberFormatter } from '@mantine/core';

function Demo() {
  return <NumberFormatter value={5 / 3} decimalScale={2} />;
}
```