## Usage

`Image` is a wrapper for `img` with minimal styles. By default, the image will take 100% of parent width. The image size can be controlled with `w` and `h` style props.

```

import { Image } from '@mantine/core';

function Demo() {
  return (
    <Image
      radius="md"
      src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
    />
  );
}
```

## Image height

In most case, you will need to set image height to prevent layout jumps when image is loading. You can do so with `h` style props.

```

import { Image } from '@mantine/core';

function Demo() {
  return (
    <Image
      radius="md"
      h={200}
      src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-10.png"
    />
  );
}
```

## Image fit

By default the image has `object-fit: cover` style - it will resize to cover parent element. To change this behavior, set `w="auto"` and `fit="contain"` props.

```

import { Image } from '@mantine/core';

function Demo() {
  return (
    <Image
      radius="md"
      h={200}
      w="auto"
      fit="contain"
      src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"
    />
  );
}
```

## Fallback image

Set `fallbackSrc` prop to display fallback image when image fails to load:

```

import { Image } from '@mantine/core';

function Demo() {
  return (
    <Image
      radius="md"
      src={null}
      h={200}
      fallbackSrc="https://placehold.co/600x400?text=Placeholder"
    />
  );
}
```

## Usage with Next.js Image

`Image` component is a polymorphic component, its root element can be changed with `component` prop. You can use it with `next/image` and other similar components.

```tsx
import NextImage from 'next/image';
import { Image } from '@mantine/core';
import myImage from './my-image.jpg';

function Demo() {
  return <Image component={NextImage} src={myImage} alt="My image" />;
}
```