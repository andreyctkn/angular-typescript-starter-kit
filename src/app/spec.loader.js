require( "../src/app");
require("angular-mocks");

var testsContext = require.context(".", true, /.spec.ts/);

testsContext.keys().forEach(testsContext);
