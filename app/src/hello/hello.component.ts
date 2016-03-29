export class HelloComponent implements ng.IComponentOptions {
    displayName: String;
    style: any;

    static selector = "hello";
    static template = require("./hello.html");
    static controller = HelloComponent;
    static $inject = ["$element"];

    constructor($element) {
        console.warn($element);
    }

    $onInit() {
        this.displayName = "firstName";
        this.style = require("./hello.css");
    }

    $onChanges(object: any) {
        console.warn(object);
    }

    $onDestroy() {
        console.warn("on destroy");
    }
}
