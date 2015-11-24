import '../src/app';

let testContext = (<{ context?: Function }>require)
	.context('./', true, /\.spec\.ts/);
testContext.keys().forEach(testContext);