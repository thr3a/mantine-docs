## Disclaimer

**!important:** In most cases, you should not use `Input` in your application. `Input` is a base for other inputs and was not designed to be used directly. Use `Input` to create custom inputs, for other cases prefer TextInput or other component.

```tsx
import { Input, TextInput } from '@mantine/core';

// Incorrect usage, input is not accessible
function Incorrect() {
  return (
    <Input.Wrapper label="Input label">
      <Input />
    </Input.Wrapper>
  );
}

// Use TextInput instead of Input everywhere you want to use Input,
// it is accessible by default and includes Input.Wrapper
function Correct() {
  return (
    <TextInput label="Input label" description="Input description" />
  );
}
```

## Usage

`Input` component is used as base for some other inputs (NativeSelect, TextInput, Textarea, etc.). The purpose of the `Input` is to provide shared styles and features to other inputs.

```

import { Input } from '@mantine/core';

function Demo() {
  return <Input{{props}} placeholder="Input component" />;
}
```

```

import { useState } from 'react';
import { Input, CloseButton } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  const [value, setValue] = useState('Clear me');
  return (
    <>
      <Input placeholder="Your email" leftSection={<IconAt size={16} />} />
      <Input
        placeholder="Clearable input"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        rightSectionPointerEvents="all"
        mt="md"
        rightSection={
          <CloseButton
            aria-label="Clear input"
            onClick={() => setValue('')}
            style={{ display: value ? undefined : 'none' }}
          />
        }
      />
    </>
  );
}
```

## Change input element

Input is a polymorphic component, the default root element is `input`, but it can be changed to any other element or component.

Example of using `Input` as `button` and `select`:

```

import { Input } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <Input component="button" pointer>
        Button input
      </Input>

      <Input
        component="select"
        rightSection={<IconChevronDown size={14} stroke={1.5} />}
        pointer
        mt="md"
      >
        <option value="1">1</option>
        <option value="2">2</option>
      </Input>
    </>
  );
}
```

Example of using react-imask with `Input`:

```

import { Input } from '@mantine/core';
import { IMaskInput } from 'react-imask';

function Demo() {
  return <Input component={IMaskInput} mask="+7 (000) 000-00-00" placeholder="Your phone" />;
}
```

## Input.Wrapper component

`Input.Wrapper` component is used in all other inputs (TextInput, NativeSelect, Textarea, etc.) under the hood, you _do not need to wrap your inputs with it, as it is already included in all of them_. Use `Input.Wrapper` only when you want to create custom inputs.

```

import { Input } from '@mantine/core';

function Wrapper() {
  return (
    <Input.Wrapper{{props}}>
      <Input placeholder="Input inside Input.Wrapper" />
    </Input.Wrapper>
  );
}
```

## inputWrapperOrder

`inputWrapperOrder` allows configuring the order of `Input.Wrapper` parts. It accepts an array of four elements: `label`, `input`, `error` and `description`. Note that it is not required to include all of them, you can use only those that you need – parts that are not included will not be rendered.

```

import { TextInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <TextInput
        label="Custom layout"
        placeholder="Custom layout"
        description="Description below the input"
        inputWrapperOrder={['label', 'error', 'input', 'description']}
      />
      <TextInput
        mt="xl"
        label="Custom layout"
        placeholder="Custom layout"
        description="Error and description are"
        error="both below the input"
        inputWrapperOrder={['label', 'input', 'description', 'error']}
      />
    </>
  );
}
```

## inputContainer

With `inputContainer` prop, you can enhance inputs that use `Input.Wrapper` under the hood, for example, you can add Tooltip to the TextInput when the input is focused:

```

import { useState } from 'react';
import { TextInput, Tooltip } from '@mantine/core';

function Demo() {
  const [focused, setFocused] = useState(false);

  return (
    <TextInput
      label="TextInput with tooltip"
      description="Tooltip will be relative to the input"
      placeholder="Focus me to see tooltip"
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      inputContainer={(children) => (
        <Tooltip label="Additional information" position="top-start" opened={focused}>
          {children}
        </Tooltip>
      )}
    />
  );
}
```

## required and withAsterisk props

All components that are based on `Input.Wrapper` support `required` and `withAsterisk` props. When set to true, both of these props will add a red asterisk to the end of the label. The only difference is whether input element will have `required` attribute, example with TextInput component:

```tsx
import { TextInput } from '@mantine/core';

// Will display required asterisk and add `required` attribute to the input element
function RequiredDemo() {
  return <TextInput label="test-label" required />;
}

// Will only display the asterisk, `required` attribute is not added to the input element
function AsteriskDemo() {
  return <TextInput label="test-label" withAsterisk />;
}
```

## error prop

All inputs that use `Input.Wrapper` under the hood support `error` prop. When set to `true`, it will add a red border to the input. You can also pass a React node to display an error message below the input. To only display error message without a red border, set `error` prop to React node and `withErrorStyles={false}`:

```

import { TextInput, rem } from '@mantine/core';
import { IconExclamationCircle } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <TextInput placeholder="Error as boolean" label="Error as boolean" error />
      <TextInput
        mt="md"
        placeholder="Error as react node"
        label="Error as react node"
        error="Something went wrong"
      />

      <TextInput
        mt="md"
        placeholder="Without error styles on input"
        label="Without error styles on input"
        error="Something went wrong"
        withErrorStyles={false}
        rightSectionPointerEvents="none"
        rightSection={
          <IconExclamationCircle
            style={{ width: rem(20), height: rem(20) }}
            color="var(--mantine-color-error)"
          />
        }
      />
    </>
  );
}
```

## Input.Label, Input.Description and Input.Error components

`Input.Label`, `Input.Error` and `Input.Description` components can be used to create custom form layouts if the default `Input.Wrapper` layout does not meet your requirements.

```

import { Input } from '@mantine/core';

function Demo() {
  return (
    <>
      <Input.Label required>Input label</Input.Label>
      <Input.Description>Input description</Input.Description>
      <Input.Error>Input error</Input.Error>
    </>
  );
}
```

## Input.Placeholder component

`Input.Placeholder` component can be used to add placeholder to `Input` and `InputBase` components that are based on `button` element or do not support placeholder property natively:

```

import { Input } from '@mantine/core';

function Demo() {
  return (
    <Input component="button" pointer>
      <Input.Placeholder>Placeholder content</Input.Placeholder>
    </Input>
  );
}
```

## Default props on theme

You can add default props on theme to `Input` and `Input.Wrapper` components. These default props will be inherited by all inputs that use `Input` and `Input.Wrapper` under the hood (TextInput, NativeSelect, Textarea, etc.):

```

import { TextInput, NativeSelect, MantineProvider, createTheme, Input } from '@mantine/core';

const theme = createTheme({
  components: {
    Input: Input.extend({
      defaultProps: {
        variant: 'filled',
      },
    }),

    InputWrapper: Input.Wrapper.extend({
      defaultProps: {
        inputWrapperOrder: ['label', 'input', 'description', 'error'],
      },
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <TextInput
        label="Text input"
        placeholder="Text input"
        description="Description below the input"
      />

      <NativeSelect
        mt="md"
        label="Native select"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        description="Description below the input"
      />
    </MantineProvider>
  );
}
```

## Styles on theme

Same as with default props, you can use `Input` and `Input.Wrapper` Styles API on theme to add styles to all inputs:

```

import { TextInput, NativeSelect, MantineProvider, createTheme, Input } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Input: Input.extend({
      classNames: {
        input: classes.input,
      },
    }),

    InputWrapper: Input.Wrapper.extend({
      classNames: {
        label: classes.label,
      },
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <TextInput label="Text input" placeholder="Text input" />

      <NativeSelect
        mt="md"
        label="Native select"
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
    </MantineProvider>
  );
}
```

## Change focus styles

Use `&:focus-within` selector to change inputs focus styles. You can apply these styles to one component with `classNames` prop or to all inputs with Styles API on theme.

```

import { Input, TextInput } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <>
      <Input placeholder="Regular Input component" classNames={classes} />
      <TextInput
        placeholder="TextInput component"
        label="TextInput component"
        mt="md"
        classNames={classes}
      />
    </>
  );
}
```

## InputBase component

`InputBase` component combines `Input` and `Input.Wrapper` components and supports `component` prop:

```

import { InputBase } from '@mantine/core';
import { IMaskInput } from 'react-imask';

function Demo() {
  return (
    <>
      <InputBase
        label="Your phone"
        component={IMaskInput}
        mask="+7 (000) 000-0000"
        placeholder="Your phone"
      />

      <InputBase label="Custom native select" component="select" mt="md">
        <option value="react">React</option>
        <option value="react">Angular</option>
        <option value="svelte">Svelte</option>
      </InputBase>
    </>
  );
}
```

## Styles API

`Input` and `Input.Wrapper` components support Styles API – you can customize styles of any inner element with `classNames` and `styles` props.

`Input` Styles API selectors:

```

import { Input, rem } from '@mantine/core';

function Demo() {
  const at = <IconAt style={{ width: rem(16), height: rem(16) }} stroke={1.5} />;
  const chevron = <IconChevronDown style={{ width: rem(16), height: rem(16) }} stroke={1.5} />;
  return <Input{{props}} placeholder="Input component" leftSection={at} rightSection={chevron} />;
}
```

`Input.Wrapper` Styles API selectors:

```

import { Input } from '@mantine/core';

function Demo() {
  return <Input.Wrapper{{props}} label="Input label" description="Input description" error="Input error" withAsterisk />;
}
```

## Accessibility

If you use `Input` component without associated label element, set `aria-label`:

```tsx
import { Input } from '@mantine/core';

// ok – the input is labelled by the aria-label
function WithAriaLabel() {
  return <Input aria-label="Your email" />;
}

// ok – the input is labelled by the label element
function WithLabel() {
  return (
    <>
      <label htmlFor="my-email">Your email</label>
      <Input id="my-email" />
    </>
  );
}
```

When you use `Input` with `Input.Wrapper` it is required to set `id` on both components to connect label and other elements with the input:

```tsx
import { Input } from '@mantine/core';

function Demo() {
  return (
    <Input.Wrapper label="Your email" id="your-email">
      <Input id="your-email" />
    </Input.Wrapper>
  );
}
```

You can use use-id to generate unique ids:

```tsx
import { Input } from '@mantine/core';
import { useId } from '@mantine/hooks';

function Demo() {
  const id = useId();
  return (
    <Input.Wrapper label="Your email" id={id}>
      <Input id={id} />
    </Input.Wrapper>
  );
}
```