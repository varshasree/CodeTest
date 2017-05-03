"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var holiday_service_1 = require("./holiday.service");
require("rxjs/Rx");
var AppComponent = (function () {
    function AppComponent(holidayS) {
        var _this = this;
        this.holidayS = holidayS;
        this.holidayS.getAll().subscribe(function (data) {
            _this.holidayLinks = Object.keys(data.holidays);
            console.log(_this.holidayLinks);
        });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <ul>\n    <li *ngFor=\"let link of holidayLinks\"><a [RouterLink]=\"holiday/{{link}}>{{link}}</a></li>\n    </ul>\n    <router-outlet></router-outlet>\n  ",
    }),
    __metadata("design:paramtypes", [holiday_service_1.HolidayService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map