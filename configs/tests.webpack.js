import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

var context = require.context('./../test', true, /\.js|\.jsx$/);
context.keys().forEach(context);
