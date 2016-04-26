System.register(['angular2/core', 'angular2/router', './id.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, id_service_1;
    var IdListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (id_service_1_1) {
                id_service_1 = id_service_1_1;
            }],
        execute: function() {
            IdListComponent = (function () {
                function IdListComponent(_idService) {
                    this._idService = _idService;
                    this.pageTitle = 'List';
                }
                IdListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._idService.getIds()
                        .subscribe(function (products) { return _this.ids = products; }, function (error) { return _this.errorMessage = error; });
                };
                IdListComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/id/id-list.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [id_service_1.IdService])
                ], IdListComponent);
                return IdListComponent;
            }());
            exports_1("IdListComponent", IdListComponent);
        }
    }
});
//# sourceMappingURL=id-list.component.js.map