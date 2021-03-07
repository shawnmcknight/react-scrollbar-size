const mockDimensions = (
	heightAttributeName: keyof typeof HTMLElement.prototype,
	widthAttributeName: keyof typeof HTMLElement.prototype,
) => () => {
	const originalHeight = Object.getOwnPropertyDescriptor(
		HTMLElement.prototype,
		heightAttributeName,
	);
	const originalWidth = Object.getOwnPropertyDescriptor(HTMLElement.prototype, widthAttributeName);

	const mockHeight = (height: number) => {
		Object.defineProperty(HTMLElement.prototype, heightAttributeName, {
			configurable: true,
			value: height,
		});
	};

	const mockWidth = (width: number) => {
		Object.defineProperty(HTMLElement.prototype, widthAttributeName, {
			configurable: true,
			value: width,
		});
	};

	const mock = (height: number, width: number) => {
		mockHeight(height);
		mockWidth(width);
	};

	const unmock = () => {
		if (originalHeight != null) {
			Object.defineProperty(HTMLElement.prototype, heightAttributeName, originalHeight);
		} else {
			delete HTMLElement.prototype[heightAttributeName];
		}
		if (originalWidth != null) {
			Object.defineProperty(HTMLElement.prototype, widthAttributeName, originalWidth);
		} else {
			delete HTMLElement.prototype[widthAttributeName];
		}
	};

	return { mock, mockHeight, mockWidth, unmock };
};
export const mockOffsetDimensions = mockDimensions('offsetHeight', 'offsetWidth');
export const mockScrollDimensions = mockDimensions('scrollHeight', 'scrollWidth');
export const mockClientDimensions = mockDimensions('clientHeight', 'clientWidth');
