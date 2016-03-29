import * as angular from "angular";
import {
    HelloComponent
} from "./hello/hello.component";

angular.module("ng-ts-starterkit", [])
    .directive(HelloComponent.selector, HelloComponent.directiveFactory);

angular.element(document).ready(function () {
    angular.bootstrap(document, ["ng-ts-starterkit"]);
});
