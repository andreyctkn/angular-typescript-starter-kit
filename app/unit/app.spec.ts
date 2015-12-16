describe('Applications initializations', () => {
    let module: ng.IModule;
    beforeEach(() => {
        module = angular.module('ng-ts-starterkit');
    });

    it('should be registered', function() {
        expect(module).not.toEqual(null);
    });
});