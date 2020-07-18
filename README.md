# React-Scrollbar-Size
[![STORIS](https://circleci.com/gh/STORIS/react-scrollbar-size.svg?style=svg)](https://app.circleci.com/pipelines/github/STORIS/react-scrollbar-size?branch=master)
[![Downloads](https://img.shields.io/npm/dm/react-scrollbar-size)](https://www.npmjs.com/package/react-scrollbar-size)

React-Scrollbar-Size is a React component designed to calculate the size of the user agent's horizontal and vertical scrollbars.
It will also detect when the size of the scrollbars changes, such as when the user agent's zoom factor changes.

## Installation
React-Scrollbar-Size is available as an [npm package](https://www.npmjs.com/package/react-scrollbar-size):

```sh
$ npm install --save react-scrollbar-size
```

## Usage

### Props
| Name | Description |
| ---- | ---- |
| `onChange` | Callback which will fire when the scrollbar sizes change. |

The callback accepts an object which will be updated with the following properties:

| Name | Description |
| ---- | ---- |
| `width` | The current width of the vertical scrollbar. |
| `height` | The current height of the horizontal scrollbar. |

### Example
To see a live example, follow these [instructions](https://github.com/STORIS/react-scrollbar-size/blob/master/example/README.md).

### TypeScript
```tsx
import React, { CSSProperties, FunctionComponent, useState } from 'react';
import ScrollbarSize from 'react-scrollbar-size';

const styles: CSSProperties = {
  margin: '1rem',
  textAlign: 'center',
};

const ScrollbarSizeDemo: FunctionComponent = () => {
  const [currentHeight, setHeight] = useState(0);
  const [currentWidth, setWidth] = useState(0);

  const scrollbarSizeChange = ({ height, width }: ScrollbarSizeChangeHandlerParams) => {
    if (height !== currentHeight) {
      setHeight(height);
    }

    if (width !== currentWidth) {
      setWidth(width);
    }
  };

  return (
    <div style={styles}>
      <h2>React Scrollbar Size Demo</h2>
      <h4>Tip: Change browser zoom level to see scrollbar sizes change.</h4>
      <ScrollbarSize onChange={scrollbarSizeChange} />
      <p>
        {`The current height of the scrollbar is ${currentHeight}px.`}
        <br />
        {`The current width of the scrollbar is ${currentWidth}px.`}
      </p>
    </div>
  );
};
```

### JavaScript
```jsx
import React, { useState } from 'react';
import ScrollbarSize from 'react-scrollbar-size';

const styles = {
  margin: '1rem',
  textAlign: 'center',
};

const ScrollbarSizeDemo = () => {
  const [currentHeight, setHeight] = useState(0);
  const [currentWidth, setWidth] = useState(0);

  const scrollbarSizeChange = ({ height, width }) => {
    if (height !== currentHeight) {
      setHeight(height);
    }

    if (width !== currentWidth) {
      setWidth(width);
    }
  };

  return (
    <div style={styles}>
      <h2>React Scrollbar Size Demo</h2>
      <h4>Tip: Change browser zoom level to see scrollbar sizes change.</h4>
      <ScrollbarSize onChange={scrollbarSizeChange} />
      <p>
        {`The current height of the scrollbar is ${currentHeight}px.`}
        <br />
        {`The current width of the scrollbar is ${currentWidth}px.`}
      </p>
    </div>
  );
};
```

## License
This project is licensed under the terms of the
[MIT license](https://github.com/STORIS/react-scrollbar-size/blob/master/LICENSE).
