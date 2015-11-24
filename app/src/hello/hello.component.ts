import IDirectiveFactory = ng.IDirectiveFactory;

export class HelloComponent {
	static selector = 'hello';
	
	static directiveFactory: IDirectiveFactory = () => {
		return {
			restrict: 'E',
			controller: HelloComponent,
			template: require('./hello.html')
		};
	};
}