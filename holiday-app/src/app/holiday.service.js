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
var http_1 = require("@angular/http");
var HolidayService = (function () {
    function HolidayService(http) {
        this.http = http;
        this.baseUrl = 'https://holidayapi.com/v1/holidays?key=d0d2514d-4266-4655-9292-9eae98e10a57&country=US&year=2015';
    }
    HolidayService.prototype.getAll = function () {
        return this.http.get("" + this.baseUrl, { headers: this.getHeaders() }).map(function (res) { return res.json(); });
    };
    HolidayService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        return headers;
    };
    return HolidayService;
}());
HolidayService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HolidayService);
exports.HolidayService = HolidayService;
//# sourceMappingURL=holiday.service.js.map