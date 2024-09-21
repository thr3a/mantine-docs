## Usage

```

import { PasswordInput } from '@mantine/core';


function Demo() {
  return (
    <PasswordInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
```

## Controlled

```tsx
import { useState } from 'react';
import { PasswordInput } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('');
  return (
    <PasswordInput
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
    />
  );
}
```

## Controlled visibility toggle

Control visibility state with `visible` and `onVisibilityChange` props, for example, the props can be used to sync visibility state between two inputs:

```

import { useDisclosure } from '@mantine/hooks';
import { PasswordInput, Stack } from '@mantine/core';

function Demo() {
  const [visible, { toggle }] = useDisclosure(false);
  return (
    <Stack>
      <PasswordInput
        label="Password"
        defaultValue="secret"
        visible={visible}
        onVisibilityChange={toggle}
      />
      <PasswordInput
        label="Confirm password"
        defaultValue="secret"
        visible={visible}
        onVisibilityChange={toggle}
      />
    </Stack>
  );
}
```

## Change visibility toggle icon

To change visibility toggle icon, pass a React component that accepts `reveal` prop to `visibilityToggleIcon`:

```

import { PasswordInput } from '@mantine/core';
import { IconEyeCheck, IconEyeOff } from '@tabler/icons-react';

const VisibilityToggleIcon = ({ reveal }: { reveal: boolean }) =>
  reveal ? (
    <IconEyeOff style={{ width: 'var(--psi-icon-size)', height: 'var(--psi-icon-size)' }} />
  ) : (
    <IconEyeCheck style={{ width: 'var(--psi-icon-size)', height: 'var(--psi-icon-size)' }} />
  );

function Demo() {
  return (
    <PasswordInput
      maw={320}
      mx="auto"
      label="Change visibility toggle icon"
      placeholder="Change visibility toggle icon"
      defaultValue="secret"
      visibilityToggleIcon={VisibilityToggleIcon}
    />
  );
}
```

## Strength meter example

Password strength meter example with Progress and Popover components:

```

import { useState } from 'react';
import { IconX, IconCheck } from '@tabler/icons-react';
import { PasswordInput, Progress, Text, Popover, Box, rem } from '@mantine/core';

function PasswordRequirement({ meets, label }: { meets: boolean; label: string }) {
  return (
    <Text
      c={meets ? 'teal' : 'red'}
      style={{ display: 'flex', alignItems: 'center' }}
      mt={7}
      size="sm"
    >
      {meets ? (
        <IconCheck style={{ width: rem(14), height: rem(14) }} />
      ) : (
        <IconX style={{ width: rem(14), height: rem(14) }} />
      )}{' '}
      <Box ml={10}>{label}</Box>
    </Text>
  );
}

const requirements = [
  { re: /[0-9]/, label: 'Includes number' },
  { re: /[a-z]/, label: 'Includes lowercase letter' },
  { re: /[A-Z]/, label: 'Includes uppercase letter' },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Includes special symbol' },
];

function getStrength(password: string) {
  let multiplier = password.length > 5 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
}

function Demo() {
  const [popoverOpened, setPopoverOpened] = useState(false);
  const [value, setValue] = useState('');
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement key={index} label={requirement.label} meets={requirement.re.test(value)} />
  ));

  const strength = getStrength(value);
  const color = strength === 100 ? 'teal' : strength > 50 ? 'yellow' : 'red';

  return (
    <Popover opened={popoverOpened} position="bottom" width="target" transitionProps={{ transition: 'pop' }}>
      <Popover.Target>
        <div
          onFocusCapture={() => setPopoverOpened(true)}
          onBlurCapture={() => setPopoverOpened(false)}
        >
          <PasswordInput
            withAsterisk
            label="Your password"
            placeholder="Your password"
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}
          />
        </div>
      </Popover.Target>
      <Popover.Dropdown>
        <Progress color={color} value={strength} size={5} mb="xs" />
        <PasswordRequirement label="Includes at least 6 characters" meets={value.length > 5} />
        {checks}
      </Popover.Dropdown>
    </Popover>
  );
}
```

## Usage without visibility toggle

If you do not need visibility toggle button, use TextInput component instead:

```tsx
import { TextInput } from '@mantine/core';

function Demo() {
  return <TextInput type="password" />;
}
```

Note that when `rightSection` prop is used, visibility toggle button is not rendered.

```

import { PasswordInput, rem } from '@mantine/core';
import { IconLock } from '@tabler/icons-react';

function Demo() {
  const icon = <IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />;

  return (
    <>
      <PasswordInput leftSection={icon} label="With left section" placeholder="With left section" />
      <PasswordInput
        rightSection={icon}
        label="With right section"
        placeholder="With right section"
        mt="md"
      />
    </>
  );
}
```

## Error state

```

import { PasswordInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <PasswordInput label="Boolean error" placeholder="Boolean error" error />
      <PasswordInput
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
      />
    </>
  );
}
```

## Disabled

When `disabled` prop is set, visibility toggle button is hidden:

```

import { PasswordInput } from '@mantine/core';

function Demo() {
  return (
    <PasswordInput disabled label="Disabled password input" placeholder="Disabled password input" />
  );
}
```

```

import { IconLock } from '@tabler/icons-react';
import { PasswordInput, rem } from '@mantine/core';

function Demo() {
  return (
    <PasswordInput
      label="Label"
      placeholder="PasswordInput"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} />}
      {{props}}
    />
  );
}
```

To set `aria-label` on the visibility toggle button, use `visibilityToggleButtonProps` prop:

```tsx
import { PasswordInput } from '@mantine/core';

function Demo() {
  return (
    <PasswordInput
      label="Password"
      visibilityToggleButtonProps={{
        'aria-label': 'Toggle password visibility',
      }}
    />
  );
}
```