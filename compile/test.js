var MyModule;
(function (MyModule) {
    var MyClass = (function () {
        function MyClass() {
        }
        MyClass.prototype.getGrettingsMessage = function (name) {
            return "Hello " + name;
        };
        return MyClass;
    })();
    MyModule.MyClass = MyClass;
})(MyModule || (MyModule = {}));
//# sourceMappingURL=test.js.map