export class HelloComponent implements ng.IComponentOptions {
    displayName: String;

    static selector = "hello";
    static controller = HelloComponent;
    static template = require("./hello.html");
    static $inject = ["$element"];

    constructor(private $element) { }

    $onInit() {
        this.displayName = "firstName";
    }

    $onChanges(object: any) {
        console.warn(object);
    }

    $onDestroy() {
        console.warn("on destroy");
    }
}
