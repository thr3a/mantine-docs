## Usage

```

import { useState } from 'react';
import { ColorPicker, Text } from '@mantine/core';

function Demo() {
  const [value, onChange] = useState('rgba(47, 119, 150, 0.7)');

  return (
    <>
      <ColorPicker format="rgba" value={value} onChange={onChange} />
      <Text>{value}</Text>
    </>
  );
}
```

## Color format

`ColorPicker` supports hex, hexa, rgb, rgba, hsl and hsla color formats. Slider to change opacity and color preview are displayed only for hexa, rgba and hsla formats:

```

import { ColorPicker } from '@mantine/core';

function Demo() {
  return <ColorPicker{{props}} />;
}
```

## With swatches

You can add predefined color swatches with `swatches` prop:

```

import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker
      format="hex"
      swatches={['#2e2e2e', '#868e96', '#fa5252', '#e64980', '#be4bdb', '#7950f2', '#4c6ef5', '#228be6', '#15aabf', '#12b886', '#40c057', '#82c91e', '#fab005', '#fd7e14']}
    />
  );
}
```

By default, `ColorPicker` will display 7 swatches per row, you can configure it with `swatchesPerRow` prop:

```

import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker{{props}} format="hex" swatches={['#2e2e2e', '#868e96', '#fa5252', '#e64980', '#be4bdb', '#7950f2', '#4c6ef5', '#228be6', '#15aabf', '#12b886', '#40c057', '#82c91e', '#fab005', '#fd7e14']} />
  );
}
```

To display swatches without picker set `withPicker={false}` and `fullWidth` props:

```

import { useState } from 'react';
import { DEFAULT_THEME, ColorPicker, Text } from '@mantine/core';

function Demo() {
  const [value, onChange] = useState('#fff');

  return (
    <>
      <ColorPicker
        format="hex"
        value={value}
        onChange={onChange}
        withPicker={false}
        fullWidth
        swatches={[
          ...DEFAULT_THEME.colors.red.slice(0, 7),
          ...DEFAULT_THEME.colors.green.slice(0, 7),
          ...DEFAULT_THEME.colors.blue.slice(0, 7),
        ]}
      />

      <Text>{value}</Text>
    </>
  );
}
```

## Size

`ColorPicker` has 5 predefined sizes: `xs`, `sm`, `md`, `lg` and `xl`:

```

import { ColorPicker } from '@mantine/core';

function Demo() {
  return <ColorPicker{{props}} />;
}
```

## fullWidth

Set `fullWidth` prop to stretch component to 100% of parent width. In this case the picker will not have fixed width, but you can still use `size` prop to control sizes of sliders.

```

import { ColorPicker } from '@mantine/core';

function Demo() {
  return <ColorPicker fullWidth size="lg" format="rgba" />;
}
```

```

import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker format="rgba" size="lg"{{props}} swatches={['#25262b', '#868e96', '#fa5252', '#e64980', '#be4bdb', '#7950f2', '#4c6ef5']} />
  );
}
```

## HueSlider component

```

import { useState } from 'react';
import { HueSlider, Text } from '@mantine/core';

function Demo() {
  const [value, onChange] = useState(250);

  return (
    <>
      <Text>Hue value: {value}</Text>
      <HueSlider value={value} onChange={onChange} />
    </>
  );
}
```

## AlphaSlider component

```

import { useState } from 'react';
import { AlphaSlider, Text } from '@mantine/core';

function Demo() {
  const [value, onChange] = useState(0.55);

  return (
    <>
      <Text>Alpha value: {value}</Text>
      <AlphaSlider color="#1c7ed6" value={value} onChange={onChange} />
    </>
  );
}
```

## Accessibility

ColorPicker component is accessible by default:

-   Saturation, hue and alpha sliders are focusable
-   When moused is used to interact with the slider, focus is moved to the slider
-   All values can be changed with arrows

To make component accessible for screen readers, set `saturationLabel`, `hueLabel` and `alphaLabel`:

```tsx
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker
      saturationLabel="Saturation"
      hueLabel="Hue"
      alphaLabel="Alpha"
    />
  );
}
```