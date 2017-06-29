export class HelloComponent implements ng.IComponentController {
    public static selector = "hello";
    public static templateUrl = "hello/hello.html";
    public static controller = HelloComponent;
    public static $inject = ["$element"];

    public displayName: string;
    public style: any;

    constructor(public $element: ng.IAugmentedJQuery) {
    }

    public $onInit() {
        this.displayName = "firstName1";
    }

    public $onChanges(object: any) {
        console.warn(object);
    }

    public $onDestroy() {
        console.warn("on destroy");
    }
}
