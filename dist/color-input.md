## Usage

```

import { ColorInput } from '@mantine/core';


function Demo() {
  return (
    <ColorInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
```

## Controlled

```tsx
import { useState } from 'react';
import { ColorInput } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('');
  return <ColorInput value={value} onChange={setValue} />;
}
```

## Formats

Component supports hex, hexa, rgb, rgba, hsl and hsla color formats. Slider to change opacity is displayed only for hexa, rgba and hsla formats:

```

import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput defaultValue="#C5D899"{{props}} />;
}
```

## Preserve invalid input

By default, `ColorInput` will revert the value on blur to the last known valid value. To change this behavior and keep invalid value, set `fixOnBlur={false}`:

```

import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput fixOnBlur={false} label="Value is not fixed on blur" placeholder="May contain invalid value" />;
}
```

## onChangeEnd

`onChangeEnd` is called when user stops dragging slider or changes input value. It is useful when you need to update color only when user finished interaction with the component:

```

import { useState } from 'react';
import { ColorInput, Text } from '@mantine/core';

function Demo() {
  const [changeEndValue, setChangeEndValue] = useState('#FFFFFF');

  return (
    <>
      <Text mb="md">
        Change end value: <b>{changeEndValue}</b>
      </Text>

      <ColorInput
        label="Pick color"
        placeholder="Pick color"
        defaultValue="#FFFFFF"
        onChangeEnd={setChangeEndValue}
      />
    </>
  );
}
```

## Disable free input

To disable free input set `disallowInput` prop:

```

import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput disallowInput />;
}
```

## With swatches

You can add any amount of predefined color swatches:

```

import { ColorInput } from '@mantine/core';

function Demo() {
  return (
    <ColorInput
      format="hex"
      swatches={['#2e2e2e', '#868e96', '#fa5252', '#e64980', '#be4bdb', '#7950f2', '#4c6ef5', '#228be6', '#15aabf', '#12b886', '#40c057', '#82c91e', '#fab005', '#fd7e14']}
    />
  );
}
```

By default, there will be 7 swatches per row, you can change this with `swatchesPerRow` prop, like in ColorPicker component:

```

import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker{{props}} format="hex" swatches={['#2e2e2e', '#868e96', '#fa5252', '#e64980', '#be4bdb', '#7950f2', '#4c6ef5', '#228be6', '#15aabf', '#12b886', '#40c057', '#82c91e', '#fab005', '#fd7e14']} />
  );
}
```

If you need to restrict color picking to certain colors – disable color picker and disallow free input:

```

import { ColorInput, DEFAULT_THEME } from '@mantine/core';

function Demo() {
  return (
    <ColorInput
      placeholder="Pick color"
      label="Your favorite color"
      disallowInput
      withPicker={false}
      swatches={[
        ...DEFAULT_THEME.colors.red,
        ...DEFAULT_THEME.colors.green,
        ...DEFAULT_THEME.colors.blue,
      ]}
    />
  );
}
```

## Close dropdown on color swatch click

To close the dropdown when one of the color swatches is clicked, set `closeOnColorSwatchClick` prop:

```

import { ColorInput, DEFAULT_THEME } from '@mantine/core';

function Demo() {
  return (
    <ColorInput
      closeOnColorSwatchClick
      label="Dropdown is closed when color swatch is clicked"
      placeholder="Click color swatch"
      swatches={[
        ...DEFAULT_THEME.colors.red,
        ...DEFAULT_THEME.colors.green,
        ...DEFAULT_THEME.colors.blue,
      ]}
    />
  );
}
```

## Hide dropdown

To hide dropdown, set `withPicker={false}`:

```

import { ColorInput } from '@mantine/core';

function Demo() {
  return (
    <ColorInput withPicker={false} pointer label="Without dropdown" placeholder="Enter value" />
  );
}
```

## Eye dropper

By default, if EyeDropper API is available, eye dropper icon will be displayed at the right section of the input. To disable it, set `withEyeDropper={false}`:

```

import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput withEyeDropper={false} label="Without eye dropper" placeholder="Not fun" />;
}
```

## Change eye dropper icon

You can replace eye dropper icon with any React node using `eyeDropperIcon` prop:

```

import { ColorInput, rem } from '@mantine/core';
import { IconFocus2 } from '@tabler/icons-react';

function Demo() {
  return (
    <ColorInput
      eyeDropperIcon={<IconFocus2 style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
      label="With custom eye dropper icon"
      placeholder="Pick color"
    />
  );
}
```

Note that by default, `ColorPicker` has color preview in the left section and eye dropper button in the right section. You can replace these elements with any React node using `leftSection` and `rightSection` props:

```

import { ColorInput, rem } from '@mantine/core';
import { IconColorPicker } from '@tabler/icons-react';

function Demo() {
  const icon = <IconColorPicker style={{ width: rem(18), height: rem(18) }} stroke={1.5} />;

  return (
    <>
      <ColorInput
        label="With custom left section"
        placeholder="Replaces color swatch"
        leftSection={icon}
        withEyeDropper={false}
      />
      <ColorInput
        label="With custom right section"
        placeholder="Replaces eye dropper"
        rightSection={icon}
        mt="md"
      />
    </>
  );
}

```

## Error state

```

import { ColorInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <ColorInput label="Boolean error" placeholder="Boolean error" error />
      <ColorInput
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

import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput disabled label="Disabled input" placeholder="Disabled input" />;
}
```

## Read only

```

import { ColorInput } from '@mantine/core';

function Demo() {
  return <ColorInput readOnly label="Cannot modify value" defaultValue="#F0FCFE" />;
}
```

```

import { ColorInput, rem } from '@mantine/core';

function Demo() {
  return (
    <ColorInput
      label="Label"
      placeholder="ColorInput"
      description="Description"
      error="Error"
      withAsterisk
      swatches={['#000', '#fff', '#f00', '#0f0', '#00f']}
      format="rgba"
      {{props}}
    />
  );
}
```