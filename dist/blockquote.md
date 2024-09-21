## Usage

```

import { Blockquote } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';

function Demo() {
  const icon = <IconInfoCircle />;
  return (
    <Blockquote{{props}} cite="– Forrest Gump" icon={icon} mt="xl">
      Life is like an npm install – you never know what you are going to get.
    </Blockquote>
  );
}
```