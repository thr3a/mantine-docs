## Usage

```

import { Avatar } from '@mantine/core';
import { IconStar } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      {/* With image */}
      <Avatar src="avatar.png" alt="it's me" />

      {/* Default placeholder */}
      <Avatar radius="xl" />

      {/* Letters with xl radius */}
      <Avatar color="cyan" radius="xl">MK</Avatar>

      {/* Custom placeholder icon */}
      <Avatar color="blue" radius="sm">
        <IconStar size="1.5rem" />
      </Avatar>
    </>
  );
}

```

## Initials

To display initials instead of the default placeholder, set `name` prop to the name of the person, for example, `name="John Doe"`. If the name is set, you can use `color="initials"` to generate color based on the name:

```

import { Avatar, Group } from '@mantine/core';

const names = [
  'John Doe',
  'Jane Mol',
  'Alex Lump',
  'Sarah Condor',
  'Mike Johnson',
  'Kate Kok',
  'Tom Smith',
];

function Demo() {
  const avatars = names.map((name) => <Avatar key={name} name={name} color="initials" />);
  return <Group>{avatars}</Group>;
}
```

## Allowed initials colors

By default, all colors from the default theme are allowed for initials, you can restrict them by providing `allowedInitialsColors` prop with an array of colors. Note that the default colors array does not include custom colors defined in the theme, you need to provide them manually if needed.

```

import { Avatar, Group } from '@mantine/core';

const names = [
  'John Doe',
  'Jane Mol',
  'Alex Lump',
  'Sarah Condor',
  'Mike Johnson',
  'Kate Kok',
  'Tom Smith',
];

function Demo() {
  const avatars = names.map((name) => (
    <Avatar key={name} name={name} color="initials" allowedInitialsColors={['blue', 'red']} />
  ));
  return <Group>{avatars}</Group>;
}
```

## Placeholder

If the image cannot be loaded or not provided, `Avatar` will display a placeholder instead. By default, placeholder is an icon, but it can be changed to any React node:

```

import { Avatar } from '@mantine/core';
import { IconStar } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      {/* Default placeholder */}
      <Avatar src={null} alt="no image here" />

      {/* Default placeholder with custom color */}
      <Avatar src={null} alt="no image here" color="indigo" />

      {/* Placeholder with initials */}
      <Avatar src={null} alt="Vitaly Rtishchev" color="red">VR</Avatar>

      {/* Placeholder with custom icon */}
      <Avatar color="blue" radius="xl">
        <IconStar size="1.5rem" />
      </Avatar>
    </>
  );
}

```

## Variants

```

import { Avatar } from '@mantine/core';

function Demo() {
  return <Avatar{{props}} />;
}
```

## Avatar.Group

`Avatar.Group` component combines multiple avatars into a stack:

```

import { Avatar } from '@mantine/core';

function Demo() {
  return (
    <Avatar.Group>
      <Avatar src="image.png" />
      <Avatar src="image.png" />
      <Avatar src="image.png" />
      <Avatar>+5</Avatar>
    </Avatar.Group>
  );
}
```

Note that you must not wrap child `Avatar` components with any additional elements, but you can use wrap `Avatar` with components that do not render any HTML elements in the current tree, for example Tooltip.

```tsx
import { Avatar } from '@mantine/core';

// Will not work correctly
function Demo() {
  return (
    <Avatar.Group spacing="sm">
      <div>
        <Avatar src="image.png" radius="xl" />
      </div>
      <Avatar src="image.png" radius="xl" />
      <Avatar src="image.png" radius="xl" />
      <Avatar radius="xl">+5</Avatar>
    </Avatar.Group>
  );
}
```

Example of usage with Tooltip:

```

import { Avatar, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip.Group openDelay={300} closeDelay={100}>
      <Avatar.Group spacing="sm">
        <Tooltip label="Salazar Troop" withArrow>
          <Avatar src="image.png" radius="xl" />
        </Tooltip>
        <Tooltip label="Bandit Crimes" withArrow>
          <Avatar src="image.png" radius="xl" />
        </Tooltip>
        <Tooltip label="Jane Rata" withArrow>
          <Avatar src="image.png" radius="xl" />
        </Tooltip>
        <Tooltip
          withArrow
          label={
            <>
              <div>John Outcast</div>
              <div>Levi Capitan</div>
            </>
          }
        >
          <Avatar radius="xl">+2</Avatar>
        </Tooltip>
      </Avatar.Group>
    </Tooltip.Group>
  );
}
```

```

import { Avatar } from '@mantine/core';

function Demo() {
  return (
    <Avatar
      component="a"
      href="https://github.com/rtivital"
      target="_blank"
      src="avatar.png"
      alt="it's me"
    />
  );
}
```

You can combine it with Tooltip or Popover to show additional information on hover

```

import { Avatar, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip.Group openDelay={300} closeDelay={100}>
      <Avatar.Group spacing="sm">
        <Tooltip label="Salazar Troop" withArrow>
          <Avatar src="image.png" radius="xl" />
        </Tooltip>
        <Tooltip label="Bandit Crimes" withArrow>
          <Avatar src="image.png" radius="xl" />
        </Tooltip>
        <Tooltip label="Jane Rata" withArrow>
          <Avatar src="image.png" radius="xl" />
        </Tooltip>
        <Tooltip
          withArrow
          label={
            <>
              <div>John Outcast</div>
              <div>Levi Capitan</div>
            </>
          }
        >
          <Avatar radius="xl">+2</Avatar>
        </Tooltip>
      </Avatar.Group>
    </Tooltip.Group>
  );
}
```

## Accessibility

Avatar renders `<img />` HTML element. Set `alt` prop to describe image, it is also used as `title` attribute for avatar placeholder when the image cannot be loaded.

```tsx
import { Avatar } from '@mantine/core';

function NotOk() {
  // Not ok, no alt for image
  return <Avatar src="./image.png" />;
}

function Ok() {
  // Ok, alt is set on <img /> tag
  return <Avatar src="./image.png" alt="Rob Johnson" />;
}

function Ehh() {
  // Ehh, title is not required, but still recommended
  return <Avatar>RJ</Avatar>;
}

function OkPlaceholder() {
  // Ok, title is set on placeholder
  return <Avatar alt="Rob Johnson">RJ</Avatar>;
}
```