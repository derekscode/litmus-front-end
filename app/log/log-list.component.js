System.register(['angular2/core', 'angular2/router', './log.service'], function(exports_1, context_1) {
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
    var core_1, router_1, log_service_1;
    var LogListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (log_service_1_1) {
                log_service_1 = log_service_1_1;
            }],
        execute: function() {
            LogListComponent = (function () {
                // myDate = new Date(1988,3,15); // April 15, 1988
                // myDate2 = new Date('2016-05-10T15:05:56.0045295');
                function LogListComponent(_logService) {
                    this._logService = _logService;
                    this.pageTitle = 'Log List';
                }
                LogListComponent.prototype.ngOnInit = function () {
                    this.getLogs();
                };
                LogListComponent.prototype.getLogs = function () {
                    var _this = this;
                    this._logService.getLogs()
                        .subscribe(function (result) { return _this.logs = result; }, function (error) { return _this.errorMessage = error; });
                };
                LogListComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/log/log-list.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [log_service_1.LogService])
                ], LogListComponent);
                return LogListComponent;
            }());
            exports_1("LogListComponent", LogListComponent);
        }
    }
});
//# sourceMappingURL=log-list.component.js.map