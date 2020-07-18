# React-Scrollbar-Size
React-Scrollbar-Size is a [React](https://reactjs.org/) component designed to calculate the size of the user agent's horizontal and vertical scrollbars.
It will also detect when the size of the scrollbars change, such as when the user agent's zoom factor changes.

<a class="github-button" href="https://github.com/storis/react-scrollbar-size" data-show-count="true" aria-label="Star storis/react-scrollbar-size on GitHub">Star</a>
[![npm package](https://img.shields.io/npm/v/react-scrollbar-size/latest.svg)](https://www.npmjs.com/package/react-scrollbar-size)
[![npm downloads](https://img.shields.io/npm/dm/react-scrollbar-size)](https://www.npmjs.com/package/react-scrollbar-size)
[![CircleCI](https://circleci.com/gh/STORIS/react-scrollbar-size.svg?style=shield)](https://circleci.com/gh/STORIS/react-scrollbar-size/tree/master)
[![Code Climate](https://img.shields.io/codeclimate/maintainability/STORIS/react-scrollbar-size)](https://codeclimate.com/github/STORIS/react-scrollbar-size)
![Code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=storis/react-scrollbar-size)](https://dependabot.com)
[![Dependencies](https://david-dm.org/STORIS/react-scrollbar-size/master/status.svg)](https://david-dm.org/STORIS/react-scrollbar-size/master)
[![PeerDependencies](https://david-dm.org/STORIS/react-scrollbar-size/master/peer-status.svg)](https://david-dm.org/STORIS/react-scrollbar-size/master?type=peer)
[![DevDependencies](https://david-dm.org/STORIS/react-scrollbar-size/dev-status.svg)](https://david-dm.org/STORIS/react-scrollbar-size/master?type=dev)
[![Percentage of issues still open](https://isitmaintained.com/badge/open/storis/react-scrollbar-size.svg)](https://isitmaintained.com/project/storis/react-scrollbar-size)
![License](https://img.shields.io/npm/l/react-scrollbar-size)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)

## Installation
React-Scrollbar-Size is available as an [npm package](https://www.npmjs.com/package/react-scrollbar-size):

```sh
$ npm install react-scrollbar-size
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

## Examples
To see a live example, follow these [instructions](/example/README.md).

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
[MIT license](/LICENSE).
