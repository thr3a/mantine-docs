## Usage

`CopyButton` is based on use-clipboard hook. Its children is a function that receives an object with the following properties:

-   `copied` – boolean value that indicates that a given value was recently copied to the clipboard, it resets after a given timeout (defaults to 500ms)
-   `copy` – function that should be called to copy given value to clipboard

```

import { CopyButton, Button } from '@mantine/core';

function Demo() {
  return (
    <CopyButton value="https://mantine.dev">
      {({ copied, copy }) => (
        <Button color={copied ? 'teal' : 'blue'} onClick={copy}>
          {copied ? 'Copied url' : 'Copy url'}
        </Button>
      )}
    </CopyButton>
  );
}
```

## Security

Due to security reasons `CopyButton` component will not work in iframes and may not work with local files opened with `file://` protocol (component will work fine with local websites that are using `http://` protocol). You can learn more about `navigator.clipboard` here.

## Timeout

You can provide a custom `copied` reset `timeout`:

```

import { CopyButton, ActionIcon, Tooltip, rem } from '@mantine/core';
import { IconCopy, IconCheck } from '@tabler/icons-react';

function Demo() {
  return (
    <CopyButton value="https://mantine.dev" timeout={2000}>
      {({ copied, copy }) => (
        <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
          <ActionIcon color={copied ? 'teal' : 'gray'} variant="subtle" onClick={copy}>
            {copied ? (
              <IconCheck style={{ width: rem(16) }} />
            ) : (
              <IconCopy style={{ width: rem(16) }} />
            )}
          </ActionIcon>
        </Tooltip>
      )}
    </CopyButton>
  );
}

```