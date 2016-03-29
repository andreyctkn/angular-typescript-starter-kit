import {IHelloScope} from "./hello.model";
import IDirectiveFactory = ng.IDirectiveFactory;

export class HelloComponent {
    displayName: String;
    style: any;
    static selector = "hello";
    static directiveFactory: IDirectiveFactory = () => {
        return {
            restrict: "E",
            link: (scope: IHelloScope) => new HelloComponent(scope),
            template: require("./hello.html")
        };
    };

    constructor(scope: IHelloScope) {
        scope.displayName = "firstName";
        scope.style = require("./hello.css");
    }
}
