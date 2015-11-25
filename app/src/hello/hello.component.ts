import IDirectiveFactory = ng.IDirectiveFactory;

export class HelloComponent {

	displayName: String;
	style: any;
	static selector = 'hello';

	static directiveFactory: IDirectiveFactory = () => {
		return {
			restrict: 'E',
			controller: HelloComponent,
			controllerAs: 'vm',
			template: require('./hello.html')
		};
	};

	constructor() {
		this.displayName = 'firstName';
		this.style = require('./hello.css');
	}
}