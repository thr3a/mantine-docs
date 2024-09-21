## Usage

Mantine does not include typography global styles. Use `TypographyStylesProvider` to add typography styles to your html content:

```tsx
import { TypographyStylesProvider } from '@mantine/core';

function Demo() {
  return (
    <TypographyStylesProvider>
      <div
        dangerouslySetInnerHTML={{ __html: '<p>Your html here</p>' }}
      />
    </TypographyStylesProvider>
  );
}
```

## Example

```

import { TypographyStylesProvider } from '@mantine/core';

const html = '...html content here...';

function Demo() {
  return (
    <TypographyStylesProvider>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </TypographyStylesProvider>
  );
}
```

## All styles demo

`TypographyStylesProvider` includes styles for:

-   paragraphs
-   headings
-   lists
-   blockquotes
-   tables
-   links
-   images
-   hr
-   kbd
-   code and pre