import '../src/app';
import 'angular-mocks';

let testContext = (<{ context?: Function }>require)
    .context('./', true, /\.spec\.ts/);
testContext.keys().forEach(testContext);