import * as angular from "angular";
import {
    HelloComponent
} from "./hello/hello.component";

angular.module("ng-ts-starterkit", ["ng-ts-starterkit.templates"])
    .component(HelloComponent.selector, HelloComponent);

angular.element(document).ready(function () {
    angular.bootstrap(document, ["ng-ts-starterkit"]);
});
