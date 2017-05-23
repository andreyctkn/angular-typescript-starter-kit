import * as angular from "angular";
import "angular-mocks";

describe("HelloComponent", () => {
    let _$scope;
    let _$compile;

    beforeEach(() => {
        angular.mock.module("ng-ts-starterkit");
        angular.mock.inject(($compile, $rootScope) => {
            _$scope = $rootScope.$new();
            _$compile = $compile;
        });
    });

    it("should be generate default display name", () => {
        let element = angular.element("<hello></hello>");

        let compiled = _$compile(element)(_$scope);

        _$scope.$digest();

        expect(compiled.html()).toContain("firstName");
    });

    it("shouldn not be generate new display name", () => {
        let newName = "newName";
        let element = angular.element(`<hello></hello>`);
        _$scope.displayName = newName;

        let compiled = _$compile(element)(_$scope);
        _$scope.$digest();

        expect(compiled.html()).not.toContain(newName);
    });
});
