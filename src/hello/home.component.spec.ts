describe("HelloComponent", () => {
    let scope: ng.IScope;
    let compile: ng.ICompileService;

    beforeEach(() => {
        angular.mock.module("ng-ts-starterkit.templates");
        angular.mock.module("ng-ts-starterkit");
        angular.mock.inject(($compile: ng.ICompileService, $rootScope: ng.IRootScopeService) => {
            scope = $rootScope.$new();
            compile = $compile;
        });
    });

    it("should be generate default display name", () => {
        const element = angular.element("<hello></hello>");

        const compiled = compile(element)(scope);

        scope.$digest();

        expect(compiled.html()).toContain("firstName");
    });

    it("shouldn not be generate new display name", () => {
        const newName = "newName";
        const element = angular.element(`<hello></hello>`);
        scope.displayName = newName;

        const compiled = compile(element)(scope);
        scope.$digest();

        expect(compiled.html()).not.toContain(newName);
    });
});
