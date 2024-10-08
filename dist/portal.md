## Usage

Portal is a wrapper component for ReactDOM.createPortal API. Render any component or element at the end of `document.body` or at a given element. Modal and Drawer components are wrapped in Portal by default.

Use Portal to render a component or an element at a different place (defaults to the end of `document.body`). Portal is useful when you want to prevent parent styles from interfering with children, usually all these styles are related to `position` and `z-index` properties and portals are used for components with fixed position, for example, modals.

```tsx
import { useState } from 'react';
import { Portal } from '@mantine/core';

function Demo() {
  const [opened, setOpened] = useState(false);

  return (
    <main style={{ position: 'relative', zIndex: 1 }}>
      {opened && (
        <Portal>
          <div>Your modal content</div>
        </Portal>
      )}

      <button onClick={() => setOpened(true)} type="button">
        Open modal
      </button>
    </main>
  );
}
```

In the example above, the div element is rendered outside of parent main (before closing body tag), but still receives `opened` and `onClose` props. The element will not be affected by parent z-index.

## Specify target dom node

You can specify dom node where portal will be rendered by passing `target` prop:

```tsx
import { Portal } from '@mantine/core';

const container = document.createElement('div');
document.body.appendChild(container);

function Demo() {
  return <Portal target={container}>My portal</Portal>;
}
```

Alternatively, you can specify selector to render portal in existing element:

```tsx
import { Portal } from '@mantine/core';

function Demo() {
  return <Portal target="#portal-container">My portal</Portal>;
}
```

If you don’t specify the target element, new one will be created and appended to the `document.body` for each Portal component.

## Server side rendering

`createPortal` is not supported during server side rendering. All components inside Portal are rendered only after the application was mounted to the dom.

## OptionalPortal component

`OptionalPortal` component lets you configure whether children should be rendered in `Portal`. It accepts the same props as the `Portal` component:

```tsx
import { OptionalPortal } from '@mantine/core';

function Demo() {
  return (
    <>
      <OptionalPortal withinPortal>
        This text is rendered in Portal
      </OptionalPortal>
      <OptionalPortal withinPortal={false}>
        This text is rendered as regular child
      </OptionalPortal>
    </>
  );
}
```