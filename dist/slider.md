## Usage

```

import { Slider } from '@mantine/core';


function Demo() {
  return (
    <Slider
      {{props}}
      marks={[
        { value: 20, label: '20%' },
        { value: 50, label: '50%' },
        { value: 80, label: '80%' },
      ]}
    />
  );
}
```

## Controlled

Controlled `Slider`:

```tsx
import { useState } from 'react';
import { Slider } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(40);
  return <Slider value={value} onChange={setValue} />;
}
```

Controlled `RangeSlider`:

```tsx
import { useState } from 'react';
import { RangeSlider } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<[number, number]>([20, 80]);
  return <RangeSlider value={value} onChange={setValue} />;
}
```

## Disabled

```

import { Slider, RangeSlider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Slider defaultValue={60} disabled />
      <RangeSlider
        mt="xl"
        mb="xl"
        disabled
        defaultValue={[25, 75]}
        marks={[
          { value: 0, label: 'xs' },
          { value: 25, label: 'sm' },
          { value: 50, label: 'md' },
          { value: 75, label: 'lg' },
          { value: 100, label: 'xl' },
        ]}
      />
    </>
  );
}
```

## onChangeEnd

`onChangeEnd` callback is called when user the slider is stopped from being dragged or value is changed with keyboard. You can use it as a debounced callback to avoid too frequent updates.

```

import { useState } from 'react';
import { Slider, Text, Box } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(50);
  const [endValue, setEndValue] = useState(50);

  return (
    <Box maw={400} mx="auto">
      <Slider value={value} onChange={setValue} onChangeEnd={setEndValue} />
      <Text mt="md" size="sm">
        onChange value: <b>{value}</b>
      </Text>
      <Text mt={5} size="sm">
        onChangeEnd value: <b>{endValue}</b>
      </Text>
    </Box>
  );
}
```

## Control label

To change label behavior and appearance, set the following props:

-   `label` – formatter function, accepts value as an argument, set null to disable label, defaults to `f => f`
-   `labelAlwaysOn` – if true – label will always be displayed, by default label is visible only when user is dragging
-   `labelTransitionProps` – props passed down to the Transition component, can be used to customize label animation

```

import { Slider, Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text size="sm">No label</Text>
      <Slider defaultValue={40} label={null} />

      <Text size="sm" mt="xl">Formatted label</Text>
      <Slider defaultValue={40} label={(value) => `${value} °C`} />

      <Text size="sm" mt="xl">Label always visible</Text>
      <Slider defaultValue={40} labelAlwaysOn />

      <Text size="sm" mt="xl">Custom label transition</Text>
      <Slider
        defaultValue={40}
        labelTransitionProps={{
          transition: 'skew-down',
          duration: 150,
          timingFunction: 'linear',
        }}
      />
    </>
  );
}
```

## Min, max and step

```

import { Slider, Text } from '@mantine/core';

const marks = [
  { value: 0, label: 'xs' },
  { value: 25, label: 'sm' },
  { value: 50, label: 'md' },
  { value: 75, label: 'lg' },
  { value: 100, label: 'xl' },
];

function Demo() {
  return (
    <>
      <Text>Decimal step</Text>
      <Slider
        defaultValue={0}
        min={-10}
        max={10}
        label={(value) => value.toFixed(1)}
        step={0.1}
        styles={{ markLabel: { display: 'none' } }}
      />

      <Text mt="md">Step matched with marks</Text>
      <Slider
        defaultValue={50}
        label={(val) => marks.find((mark) => mark.value === val)!.label}
        step={25}
        marks={marks}
        styles={{ markLabel: { display: 'none' } }}
      />
    </>
  );
}
```

## Decimal values

To use `Slider` with decimal values, set `min`, `max` and `step` props:

```

import { Slider } from '@mantine/core';

function Demo() {
  return <Slider min={0} max={1} step={0.0005} defaultValue={0.5535} />;
}
```

## minRange

Use `minRange` prop to control minimum range between `from` and `to` values in `RangeSlider`. The default value is `10`. The example below shows how to use `minRange` prop to capture decimal values from the user:

```

import { RangeSlider } from '@mantine/core';

function Demo() {
  return (
    <RangeSlider minRange={0.2} min={0} max={1} step={0.0005} defaultValue={[0.1245, 0.5535]} />
  );
}
```

## Marks

Add any number of marks to slider by setting `marks` prop to an array of objects:

```tsx
const marks = [
  { value: 20 }, // -> displays mark on slider track
  { value: 40, label: '40%' }, // -> adds mark label below slider track
];
```

Note that mark value is relative to slider value, not width:

```

import { Slider, RangeSlider } from '@mantine/core';

const marks = [
  { value: 20, label: '20%' },
  { value: 50, label: '50%' },
  { value: 80, label: '80%' },
];

function Demo() {
  return (
    <>
      <Slider defaultValue={40} marks={[{ value: 10 }, { value: 40 }, { value: 95 }]} />
      <Slider defaultValue={40} marks={marks} />
      <RangeSlider defaultValue={[20, 80]} marks={marks} />
    </>
  );
}
```

## Thumb size

```

import { Slider } from '@mantine/core';

function Demo() {
  return <Slider{{props}} defaultValue={20} />;
}
```

## Thumb children

```

import { Slider, RangeSlider, rem } from '@mantine/core';
import { IconHeart, IconHeartBroken } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <Slider
        thumbChildren={<IconHeart size="1rem" />}
        color="red"
        label={null}
        defaultValue={40}
        thumbSize={26}
        styles={{ thumb: { borderWidth: rem(2), padding: rem(3) } }}
      />

      <RangeSlider
        mt="xl"
        styles={{ thumb: { borderWidth: rem(2), padding: rem(3) } }}
        color="red"
        label={null}
        defaultValue={[20, 60]}
        thumbSize={26}
        thumbChildren={[<IconHeart size="1rem" key="1" />, <IconHeartBroken size="1rem" key="2" />]}
      />
    </>
  );
}
```

## Scale

You can use the `scale` prop to represent the value on a different scale.

In the following demo, the value `x` represents the value `2^x`. Increasing `x` by one increases the represented value by 2 to the power of `x`.

```

import { RangeSlider, Slider } from '@mantine/core';

function valueLabelFormat(value: number) {
  const units = ['KB', 'MB', 'GB', 'TB'];

  let unitIndex = 0;
  let scaledValue = value;

  while (scaledValue >= 1024 && unitIndex < units.length - 1) {
    unitIndex += 1;
    scaledValue /= 1024;
  }

  return `${scaledValue} ${units[unitIndex]}`;
}

const getScale = (v: number) => 2 ** v;

function Demo() {
  return (
    <>
      <Slider
        scale={getScale}
        step={1}
        min={2}
        max={30}
        labelAlwaysOn
        defaultValue={10}
        label={valueLabelFormat}
      />
      <RangeSlider
        mt={50}
        scale={getScale}
        step={1}
        min={2}
        max={30}
        labelAlwaysOn
        defaultValue={[10, 20]}
        label={valueLabelFormat}
      />
    </>
  );
}
```

## Inverted

You can invert the track with the `inverted` prop:

```

import { RangeSlider, Slider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Slider inverted defaultValue={80} />
      <RangeSlider inverted defaultValue={[40, 80]} mt="xl" />
    </>
  );
}
```

```

import { Slider } from '@mantine/core';

function Demo() {
  return <Slider{{props}} marks={[{ value: 20, label: '20%' }, { value: 80, label: '80%' }]} labelAlwaysOn />;
}
```

Example of using Styles API to change `Slider` styles:

```

import { Slider } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Slider
      defaultValue={40}
      marks={[
        { value: 20, label: '20%' },
        { value: 50, label: '50%' },
        { value: 80, label: '80%' },
      ]}
      size={2}
      classNames={classes}
    />
  );
}
```

## Vertical slider

`Slider` and `RangeSlider` do not provide vertical orientation as it is very rarely used. If you need this feature you can build it yourself with use-move hook.

## Accessibility

`Slider` and `RangeSlider` components are accessible by default:

-   Thumbs are focusable
-   When the user uses mouse to interact with the slider, focus is moved to the slider track, when the user presses arrows focus is moved to the thumb
-   Value can be changed with arrows with step increment/decrement

To label component for screen readers, add labels to thumbs:

```tsx
import { RangeSlider, Slider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Slider thumbLabel="Thumb aria-label" />
      <RangeSlider
        thumbFromLabel="First thumb aria-label"
        thumbToLabel="Second thumb aria-label"
      />
    </>
  );
}
```

## Keyboard interactions