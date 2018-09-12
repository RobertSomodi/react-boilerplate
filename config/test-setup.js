// const babel = require('../node_modules/babel-polyfill');

// Enzyme adapter for React 16
const Enzyme = require('../node_modules/enzyme');
const Adapter = require('../node_modules/enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });