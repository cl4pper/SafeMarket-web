import { configure } from '@storybook/react';

const lib = require.context('@lib', true, /\.stories\.tsx$/);
const components = require.context('@components', true, /\.stories\.tsx$/);

function loadStories() {
	lib.keys().forEach((filename) => lib(filename));
	components.keys().forEach((filename) => components(filename));
}

configure(loadStories, module);
