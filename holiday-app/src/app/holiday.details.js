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
var Router_1 = require("@angular/Router");
var HolidayDetails = (function () {
    function HolidayDetails(holidayS, route, activatedRoute) {
        var _this = this;
        this.holidayS = holidayS;
        this.route = route;
        this.activatedRoute = activatedRoute;
        this.holidayS.getAll().subscribe(function (data) {
            _this.holidayLinks = Object.keys(data.holidays);
            var link = _this.route.snapshot.params();
            _this.values = data.holidays[link];
        });
    }
    return HolidayDetails;
}());
HolidayDetails = __decorate([
    core_1.Component({
        selector: 'holiday',
        template: "\n    <div *ngFor=\"let v of values\">\n        Name : {{v.name}}\n        Date : {{v.date}}\n        Observed : {{v.observed}}\n        Public: {{v.public}}\n    </div>\n  \n  ",
    }),
    __metadata("design:paramtypes", [holiday_service_1.HolidayService,
        Router_1.Router,
        Router_1.ActivatedRoute])
], HolidayDetails);
exports.HolidayDetails = HolidayDetails;
//# sourceMappingURL=holiday.details.js.map