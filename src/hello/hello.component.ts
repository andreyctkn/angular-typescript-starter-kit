export class HelloComponent implements ng.IComponentOptions {
    public static selector = "hello";
    public static templateUrl = "helo/hello.html";
    public static controller = HelloComponent;
    public static $inject = ["$element"];

    public displayName: string;
    public style: any;

    constructor(public $element: ng.IAugmentedJQuery) {
    }

    public $onInit() {
        this.displayName = "firstName";
    }

    public $onChanges(object: any) {
        console.warn(object);
    }

    public $onDestroy() {
        console.warn("on destroy");
    }
}
