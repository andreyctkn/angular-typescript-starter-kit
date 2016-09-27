import * as tpl from './hello.html';

export class HelloComponent implements ng.IComponentOptions {
    displayName: String;
    style: any;

    static selector = "hello";
    static controller = HelloComponent;
    static template = tpl;
    static $inject = ["$element"];

    constructor($element) { }

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
