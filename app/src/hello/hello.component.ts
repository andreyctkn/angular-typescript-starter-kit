export class HelloComponent {
	static selector = 'hello';
	
	static directiveFactory: ng.IDirectiveFactory = () => {
		return {
			restrict: 'E',
			controller: HelloComponent,
			template: require('./hello.html')
		};
	};
}