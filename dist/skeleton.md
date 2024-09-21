## Usage

Use `Skeleton` to create a placeholder for loading content. `Skeleton` support the following props:

-   `height` – height – any valid CSS value
-   `width` – width - any valid CSS value
-   `radius` – key of `theme.radius` or any valid CSS value to set border-radius
-   `circle` – if true width, height and border-radius will equal to value specified in `height` prop
-   `animate` – true by default, controls animation

```
(props) => `
  import { Skeleton } from '@mantine/core';

  function Demo() {
    return (
      <>
        
        
        
        
      
    );
  }
  `
```

## With content

If you want to indicate the loading state of content that is already on page, wrap it with Skeleton and control loading overlay visibility with `visible` prop:

```

import { useState } from 'react';
import { Skeleton, Button } from '@mantine/core';

function Demo() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Skeleton visible={loading}>
        Lorem ipsum dolor sit amet...
        {/* other content */}
      </Skeleton>

      <Button onClick={() => setLoading((l) => !l)}>
        Toggle Skeleton
      </Button>
    </>
  );
}
```