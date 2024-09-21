## Usage

Use Highlight component to highlight a substring in a given string with a mark tag.

Pass the main string as children to Highlight component and string part that should be highlighted to `highlight` prop. If the main string does not include `highlight` part, it will be ignored. `Highlight` ignores trailing whitespace and highlights all matched characters sequences.

```

import { Highlight } from '@mantine/core';

function Demo() {
  return (
    <Highlight{{props}}>
      {{children}}
    </Highlight>
  );
}
```

## Highlight multiple substrings

To highlight multiple substrings, provide an array of values:

```

import { Highlight } from '@mantine/core';

function Demo() {
  return <Highlight highlight={['this', 'that']}>Highlight this and also that</Highlight>;
}
```

## Change highlight styles

Default Mark styles can be overwritten with `highlightStyles` prop, it accepts either a function with a subscription to theme or an object with styles:

```

import { Highlight } from '@mantine/core';

function Demo() {
  return (
    <Highlight
      ta="center"
      highlight={['highlighted', 'default']}
      highlightStyles={{
        backgroundImage:
          'linear-gradient(45deg, var(--mantine-color-cyan-5), var(--mantine-color-indigo-5))',
        fontWeight: 700,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      You can change styles of highlighted part if you do not like default styles
    </Highlight>
  );
}
```

## Text props

Highlight is based on Text component, all its props are available:

```

import { Highlight } from '@mantine/core';

function Demo() {
  return (
    <Highlight
      component="a"
      href="https://mantine.dev"
      target="_blank"
      highlight="mantine"
      fw={500}
      c="var(--mantine-color-anchor)"
    >
      Mantine website
    </Highlight>
  );
}

```