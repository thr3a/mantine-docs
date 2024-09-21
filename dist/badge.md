## Usage

```

import { Badge } from '@mantine/core';

function Demo() {
  return <Badge{{props}}>Badge</Badge>;
}
```

```
(props) => `
import { Badge } from '@mantine/core';

function Demo() {
  return (
    
      Gradient badge
    
  );
}
`
```

## Rounded

Set `circle` prop, to reduce horizontal padding and make badge width equal to its height:

```

import { Badge, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Badge size="xs" circle>
        1
      </Badge>
      <Badge size="sm" circle>
        7
      </Badge>
      <Badge size="md" circle>
        9
      </Badge>
      <Badge size="lg" circle>
        3
      </Badge>
      <Badge size="xl" circle>
        8
      </Badge>
    </Group>
  );
}
```

## Left and right sections

```

import { Badge, Group, rem } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  const icon = <IconAt style={{ width: rem(12), height: rem(12) }} />;
  return (
    <Group>
      <Badge leftSection={icon}>With left section</Badge>
      <Badge rightSection={icon}>With right section</Badge>
    </Group>
  );
}
```

## Full width

Set `fullWidth` to make badge span full width of its parent element:

```

import { Badge } from '@mantine/core';

function Demo() {
  return <Badge fullWidth>Full width badge</Badge>;
}
```

## Customize variants colors

You can customize colors for `Badge` and other components variants by adding variantColorResolver to your theme.

```

import { IconPhoto, IconFingerprint, IconError404 } from '@tabler/icons-react';
import {
  Badge,
  Group,
  MantineProvider,
  defaultVariantColorsResolver,
  VariantColorsResolver,
  parseThemeColor,
  rem,
  rgba,
  darken,
} from '@mantine/core';

const variantColorResolver: VariantColorsResolver = (input) => {
  const defaultResolvedColors = defaultVariantColorsResolver(input);
  const parsedColor = parseThemeColor({
    color: input.color || input.theme.primaryColor,
    theme: input.theme,
  });

  // Override some properties for variant
  if (parsedColor.isThemeColor && parsedColor.color === 'lime' && input.variant === 'filled') {
    return {
      ...defaultResolvedColors,
      color: 'var(--mantine-color-black)',
      hoverColor: 'var(--mantine-color-black)',
    };
  }

  // Completely override variant
  if (input.variant === 'light') {
    return {
      background: rgba(parsedColor.value, 0.1),
      hover: rgba(parsedColor.value, 0.15),
      border: `${rem(1)} solid ${parsedColor.value}`,
      color: darken(parsedColor.value, 0.1),
    };
  }

  // Add new variants support
  if (input.variant === 'danger') {
    return {
      background: 'var(--mantine-color-red-9)',
      hover: 'var(--mantine-color-red-8)',
      color: 'var(--mantine-color-white)',
      border: 'none',
    };
  }

  return defaultResolvedColors;
};

function Demo() {
  return (
    <MantineProvider theme={{ variantColorResolver }}>
      <Group>
        <Badge color="lime.4" variant="filled">
          Lime filled
        </Badge>

        <Badge color="orange" variant="light">
          Orange light
        </Badge>

        <Badge variant="danger">
          Danger
        </Badge>
      </Group>
    </MantineProvider>
  );
}
```

```

import { Badge, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Badge size="lg" color="lime.4">
        Default
      </Badge>
      <Badge autoContrast size="lg" color="lime.4">
        Auto contrast
      </Badge>
    </Group>
  );
}
```

```

import { Badge, rem } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  const icon = <IconAt style={{ width: rem(12), height: rem(12) }} />;

  return (
    <Badge leftSection={icon} rightSection={icon}{{props}}>
      Badge component
    </Badge>
  );
}
```