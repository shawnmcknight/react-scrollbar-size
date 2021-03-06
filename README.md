# React-Scrollbar-Size
<div align="center">

React-Scrollbar-Size is a [React](https://reactjs.org/) hook designed to calculate the size of the user agent's horizontal and vertical scrollbars.
It will also detect when the size of the scrollbars change, such as when the user agent's zoom factor changes.

[![npm package](https://img.shields.io/npm/v/react-scrollbar-size/latest.svg)](https://www.npmjs.com/package/react-scrollbar-size)
[![npm downloads](https://img.shields.io/npm/dm/react-scrollbar-size)](https://www.npmjs.com/package/react-scrollbar-size)
[![CircleCI](https://circleci.com/gh/shawnmcknight/react-scrollbar-size.svg?style=shield)](https://circleci.com/gh/shawnmcknight/react-scrollbar-size/tree/main)
[![Code Climate](https://img.shields.io/codeclimate/maintainability/shawnmcknight/react-scrollbar-size)](https://codeclimate.com/github/shawnmcknight/react-scrollbar-size)
[![Code Style](https://badgen.net/badge/eslint/airbnb/ff5a5f?icon=airbnb)](https://github.com/airbnb/javascript)
[![Code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=shawnmcknight/react-scrollbar-size)](https://dependabot.com)
[![Dependencies](https://david-dm.org/shawnmcknight/react-scrollbar-size/main/status.svg)](https://david-dm.org/shawnmcknight/react-scrollbar-size/main)
[![PeerDependencies](https://david-dm.org/shawnmcknight/react-scrollbar-size/main/peer-status.svg)](https://david-dm.org/shawnmcknight/react-scrollbar-size/main?type=peer)
[![DevDependencies](https://david-dm.org/shawnmcknight/react-scrollbar-size/dev-status.svg)](https://david-dm.org/shawnmcknight/react-scrollbar-size/main?type=dev)
[![Percentage of issues still open](https://isitmaintained.com/badge/open/shawnmcknight/react-scrollbar-size.svg)](https://isitmaintained.com/project/shawnmcknight/react-scrollbar-size)
![License](https://img.shields.io/npm/l/react-scrollbar-size)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)
[![Star on Github](https://img.shields.io/github/stars/shawnmcknight/react-scrollbar-size?style=social)](https://github.com/shawnmcknight/react-scrollbar-size)

</div>

## Installation
React-Scrollbar-Size is available as an [npm package](https://www.npmjs.com/package/react-scrollbar-size):

```sh
$ npm install react-scrollbar-size
```

## Usage
The `useScrollbarSize` custom hook returns an object with two properties:

| Name     | Description                                    |
| -------- | ---------------------------------------------- |
| `width`  | The current width of the vertical scrollbar    |
| `height` | The current height of the horizontal scrollbar |

:information_source: The component syntax will be deprecated in version 4. It is currently being provided for backwards compatibility.

## Examples
To see a live example, follow these [instructions](/example/README.md).

### TypeScript
```tsx
import React, { CSSProperties, FunctionComponent } from 'react';
import { useScrollbarSize } from 'react-scrollbar-size';

const styles: CSSProperties = {
	margin: '1rem',
	textAlign: 'center',
};

const ScrollbarSizeDemo: FunctionComponent = () => {
	const { height, width } = useScrollbarSize();

	return (
		<div style={styles}>
			<h2>React Scrollbar Size Demo</h2>
			<h4>Tip: Change browser zoom level to see scrollbar sizes change.</h4>
			<p>
				{`The current height of the scrollbar is ${height}px.`}
				<br />
				{`The current width of the scrollbar is ${width}px.`}
			</p>
		</div>
	);
};
```

### JavaScript
```jsx
import React from 'react';
import { useScrollbarSize } from 'react-scrollbar-size';

const styles = {
	margin: '1rem',
	textAlign: 'center',
};

const ScrollbarSizeDemo = () => {
	const { height, width } = useScrollbarSize();

	return (
		<div style={styles}>
			<h2>React Scrollbar Size Demo</h2>
			<h4>Tip: Change browser zoom level to see scrollbar sizes change.</h4>
			<p>
				{`The current height of the scrollbar is ${height}px.`}
				<br />
				{`The current width of the scrollbar is ${width}px.`}
			</p>
		</div>
	);
};
```

## License
This project is licensed under the terms of the
[MIT license](/LICENSE).
