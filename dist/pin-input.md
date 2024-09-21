## Usage

```

import { PinInput } from '@mantine/core';

function Demo() {
  return <PinInput{{props}} />
}
```

## Regex type

You can use regular expression to validate user input. Characters that do not match given expression will be disregarded. For example, to create a `PinInput` that will accept only numbers from `0` to `3`, set `type={/^[0-3]+/}`:

```

import { PinInput } from '@mantine/core';

function Demo() {
  return <PinInput type={/^[0-3]*$/} inputType="tel" inputMode="numeric" />;
}
```

## One time code

Some operating systems expose the last received SMS code to be used by applications like your keyboard. If the current form input asks for this code, your keyboard adapts and proposes the code as keyboard-suggestion. Prop `oneTimeCode` makes your input setting `autocomplete="one-time-code"` which allows using that feature.

```tsx
import { PinInput } from '@mantine/core';

function OneTimeCodeInput() {
  return <PinInput oneTimeCode />;
}
```

```

import { PinInput } from '@mantine/core';

function Demo() {
  return (
    <PinInput{{props}} />
  );
}
```

## Accessibility

Inputs do not have associated labels, set `aria-label` to make component visible to the screen reader:

```tsx
import { PinInput } from '@mantine/core';

function Accessibility() {
  return <PinInput aria-label="One time code" />;
}
```