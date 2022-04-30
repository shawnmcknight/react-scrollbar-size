# Migrating from 3.2.0 custom hook usage

The only change to the custom hook syntax since 3.2.0 was a change from the hook being a named export to being the default export.

## 3.2.0 Syntax

```ts
import { useScrollbarSize } from 'react-scrollbar-size';
```

## 4.0.0 Syntax

```ts
import useScrollbarSize from 'react-scrollbar-size';
```

# Migrating from 3.2.0 and earlier component usage

The legacy component syntax has been deprecated in favor of a custom hook. The `onChange` handler therefore no longer exists. The hook will return updated `height` and `width` properties each time the scrollbar sizes change. Instead of allowing the `onChange` callback to run your logic, your logic will need to respond to the state change of `height` or `width`. In most situations, the desired result is simply a re-render and there is nothing more to do than to simply use the hook. See the [README](README.md) for examples of the new syntax.
