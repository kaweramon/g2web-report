webpackJsonp([1,4],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmployeeService = (function () {
    function EmployeeService(http) {
        this.http = http;
        this.urlEmployeeLogin = '/employee/login';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
    }
    EmployeeService.prototype.login = function (login, password) {
        this.params.set('login', login);
        this.params.set('password', password);
        return this.http.get(this.urlEmployeeLogin, { headers: this.headers, search: this.params }).map(function (res) { return res.json(); });
    };
    return EmployeeService;
}());
EmployeeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], EmployeeService);

var _a;
//# sourceMappingURL=employee.service.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductFamilyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductFamilyService = (function () {
    function ProductFamilyService(http) {
        this.http = http;
        this.urlProductFamilies = '/product-family';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
    }
    ProductFamilyService.prototype.list = function (prodGroupId) {
        this.params.set('productGroupId', prodGroupId);
        return this.http.get(this.urlProductFamilies, { search: this.params, headers: this.headers }).map(function (res) { return res.json(); });
    };
    return ProductFamilyService;
}());
ProductFamilyService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], ProductFamilyService);

var _a;
//# sourceMappingURL=product-family.service.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductGroupService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductGroupService = (function () {
    function ProductGroupService(http) {
        this.http = http;
        this.urlProductGroups = '/product-group';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    ProductGroupService.prototype.list = function () {
        return this.http.get(this.urlProductGroups, { headers: this.headers }).map(function (res) { return res.json(); });
    };
    return ProductGroupService;
}());
ProductGroupService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], ProductGroupService);

var _a;
//# sourceMappingURL=product-group.service.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
        this.urlProduct = '/product';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    ProductService.prototype.list = function () {
        return this.http.get(this.urlProduct, { headers: this.headers }).map(function (res) { return res.json(); });
    };
    return ProductService;
}());
ProductService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], ProductService);

var _a;
//# sourceMappingURL=product.service.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuickSellService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuickSellService = (function () {
    function QuickSellService(http) {
        this.http = http;
        this.urlQuickSellReport = '/quicksell/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
    }
    QuickSellService.prototype.list = function (query) {
        this.params.set('search', query);
        return this.http.get(this.urlQuickSellReport, { search: this.params, headers: this.headers }).map(function (res) { return res.json(); });
    };
    return QuickSellService;
}());
QuickSellService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], QuickSellService);

var _a;
//# sourceMappingURL=quick-sell-service.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReportComponent = (function () {
    function ReportComponent() {
        this.reportCategorySelect = 'quickSell';
    }
    return ReportComponent;
}());
ReportComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-report',
        template: __webpack_require__(442),
        styles: [__webpack_require__(407)]
    }),
    __metadata("design:paramtypes", [])
], ReportComponent);

//# sourceMappingURL=report.component.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SightSaleService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SightSaleService = (function () {
    function SightSaleService(http) {
        this.http = http;
        this.urlQuickSellReport = '/sight-sale';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
    }
    SightSaleService.prototype.search = function (query) {
        this.params.set('search', query);
        return this.http.get(this.urlQuickSellReport, { headers: this.headers, search: this.params }).map(function (res) { return res.json(); });
    };
    return SightSaleService;
}());
SightSaleService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], SightSaleService);

var _a;
//# sourceMappingURL=sight-sale.service.js.map

/***/ }),

/***/ 317:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 317;


/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(343);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.reportCategorySelect = 'quickSell';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(435),
        styles: [__webpack_require__(400)]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__quick_sell_quick_sell_component__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__quick_sell_quick_sell_service__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_tabs__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__client_client_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__product_product_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__quick_sell_product_quick_sell_product_quick_sell_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_text_mask__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angular2_text_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__product_product_group_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__product_product_family_service__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__quick_sell_quick_sell_details_quick_sell_details_component__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__sight_sale_sight_sale_component__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__sight_sale_product_sight_sale_product_sight_sale_component__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__report_filters_report_filters_component__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__sight_sale_sight_sale_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__sight_sale_sight_sale_details_sight_sale_details_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__sale_resume_sale_resume_component__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ngx_pagination__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__app_routes__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__report_report_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__liberation_liberation_component__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__liberation_liberation_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ng2_slim_loading_bar__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__liberation_modal_client_liberation_modal_client_liberation_component__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ngx_bootstrap__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__employee_employee_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_angular_2_local_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_platform_browser_animations__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_ng2_toasty__ = __webpack_require__(241);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__quick_sell_quick_sell_component__["a" /* QuickSellComponent */],
            __WEBPACK_IMPORTED_MODULE_11__quick_sell_product_quick_sell_product_quick_sell_component__["a" /* ProductQuickSellComponent */],
            __WEBPACK_IMPORTED_MODULE_15__quick_sell_quick_sell_details_quick_sell_details_component__["a" /* QuickSellDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_16__sight_sale_sight_sale_component__["a" /* SightSaleComponent */],
            __WEBPACK_IMPORTED_MODULE_17__sight_sale_product_sight_sale_product_sight_sale_component__["a" /* ProductSightSaleComponent */],
            __WEBPACK_IMPORTED_MODULE_18__report_filters_report_filters_component__["a" /* ReportFiltersComponent */],
            __WEBPACK_IMPORTED_MODULE_20__sight_sale_sight_sale_details_sight_sale_details_component__["a" /* SightSaleDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_21__sale_resume_sale_resume_component__["a" /* SaleResumeComponent */],
            __WEBPACK_IMPORTED_MODULE_24__report_report_component__["a" /* ReportComponent */],
            __WEBPACK_IMPORTED_MODULE_25__liberation_liberation_component__["a" /* LiberationComponent */],
            __WEBPACK_IMPORTED_MODULE_28__liberation_modal_client_liberation_modal_client_liberation_component__["a" /* ModalClientLiberationComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_32__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_tabs__["a" /* TabsModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_12_angular2_text_mask__["TextMaskModule"],
            __WEBPACK_IMPORTED_MODULE_22_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_23__app_routes__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_27_ng2_slim_loading_bar__["a" /* SlimLoadingBarModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_29_ngx_bootstrap__["a" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_31_angular_2_local_storage__["LocalStorageModule"].withConfig({
                prefix: 'my-app',
                storageType: 'localStorage'
            }),
            __WEBPACK_IMPORTED_MODULE_33_ng2_toasty__["a" /* ToastyModule */].forRoot()
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__quick_sell_quick_sell_service__["a" /* QuickSellService */],
            __WEBPACK_IMPORTED_MODULE_9__client_client_service__["a" /* ClientService */],
            __WEBPACK_IMPORTED_MODULE_10__product_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_13__product_product_group_service__["a" /* ProductGroupService */],
            __WEBPACK_IMPORTED_MODULE_14__product_product_family_service__["a" /* ProductFamilyService */],
            __WEBPACK_IMPORTED_MODULE_19__sight_sale_sight_sale_service__["a" /* SightSaleService */],
            __WEBPACK_IMPORTED_MODULE_26__liberation_liberation_service__["a" /* LiberationService */],
            __WEBPACK_IMPORTED_MODULE_30__employee_employee_service__["a" /* EmployeeService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__report_report_component__ = __webpack_require__(109);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });


var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__report_report_component__["a" /* ReportComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Client; });
var Client = (function () {
    function Client() {
    }
    return Client;
}());

//# sourceMappingURL=client.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Employee; });
var Employee = (function () {
    function Employee() {
    }
    return Employee;
}());

//# sourceMappingURL=employee.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiberationFilters; });
var LiberationFilters = (function () {
    function LiberationFilters() {
    }
    return LiberationFilters;
}());

//# sourceMappingURL=liberation-filters.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__liberation_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__liberation_filters__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_slim_loading_bar__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_csv_Angular2_csv__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_csv_Angular2_csv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_csv_Angular2_csv__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__client_client_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__employee_employee__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__employee_employee_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular_2_local_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular_2_local_storage__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiberationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var LiberationComponent = (function () {
    function LiberationComponent(service, clientService, slimLoadingBarService, employeeService, localStorageService) {
        this.service = service;
        this.clientService = clientService;
        this.slimLoadingBarService = slimLoadingBarService;
        this.employeeService = employeeService;
        this.localStorageService = localStorageService;
        this.listClients = [];
        this.isLooged = false;
        this.liberationFilter = new __WEBPACK_IMPORTED_MODULE_3__liberation_filters__["a" /* LiberationFilters */]();
        this.employee = new __WEBPACK_IMPORTED_MODULE_8__employee_employee__["a" /* Employee */]();
        if (this.localStorageService.get('employee') !== null && this.localStorageService.get('employee') !== undefined) {
            this.isLooged = true;
        }
        else {
            this.isLooged = false;
        }
        this.getVersions();
    }
    LiberationComponent.prototype.getVersions = function () {
        var _this = this;
        this.service.getVersions().subscribe(function (versions) {
            _this.listVersions = versions;
        });
    };
    LiberationComponent.prototype.searchClients = function () {
        var _this = this;
        this.slimLoadingBarService.start();
        this.clientService.searchClients(this.buildQuery()).subscribe(function (result) {
            _this.listClients = result;
            _this.slimLoadingBarService.stop();
            _this.slimLoadingBarService.complete();
        });
    };
    LiberationComponent.prototype.buildQuery = function () {
        var query = '';
        if (this.liberationFilter.fantasyName !== null && this.liberationFilter.fantasyName !== undefined
            && this.liberationFilter.fantasyName.length > 0) {
            query += 'fantasyName=' + this.liberationFilter.fantasyName;
        }
        if (this.liberationFilter.name !== null && this.liberationFilter.name !== undefined
            && this.liberationFilter.name.length > 0) {
            if (query.length > 0) {
                query += ',';
            }
            query += 'name=' + this.liberationFilter.name;
        }
        if (this.liberationFilter.category !== null && this.liberationFilter.category !== undefined
            && this.liberationFilter.category.length > 0) {
            if (query.length > 0) {
                query += ',';
            }
            query += 'category=' + this.liberationFilter.category;
        }
        if (this.liberationFilter.situation !== null && this.liberationFilter.situation !== undefined
            && this.liberationFilter.situation.length > 0) {
            if (query.length > 0) {
                query += ',';
            }
            query += 'situation=' + this.liberationFilter.situation;
        }
        if (this.liberationFilter.version !== null && this.liberationFilter.version !== undefined
            && this.liberationFilter.version.length > 0) {
            if (query.length > 0) {
                query += ',';
            }
            query += 'clientSystemVersion=' + this.liberationFilter.version;
        }
        return query;
    };
    LiberationComponent.prototype.getConvertedDate = function (clientId, date) {
        if (this.selectClient !== undefined && clientId === this.selectClient.id) {
            return __WEBPACK_IMPORTED_MODULE_2_moment__(date).format('DD/MM/YYYY');
        }
        if (date === null) {
            return '';
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_2_moment__(date).add(1, 'days').format('DD/MM/YYYY');
        }
    };
    LiberationComponent.prototype.export = function () {
        var _this = this;
        var test = [];
        this.listClients.forEach(function (client) {
            test.push({
                codigo: client.id,
                nome: client.name,
                nomeFantasia: client.fantasyName,
                categoria: client.category,
                versao: client.liberation !== null ? client.liberation.clientSystemVersion : '',
                dataVerificacao: client.liberation !== null ? _this.getConvertedDate(client.id, client.liberation.verificationDate) : '',
                dataLiberacao: client.liberation !== null ? _this.getConvertedDate(client.id, client.liberation.systemLiberationDate) : '',
                observacoes: client.liberation !== null ? client.liberation.obs : '',
                status: client.situation
            });
        });
        new __WEBPACK_IMPORTED_MODULE_5_angular2_csv_Angular2_csv__["Angular2Csv"](test, 'relatorio_liberacao_cliente_' + __WEBPACK_IMPORTED_MODULE_2_moment__().format('DD/MM/YYYY'), { showLabels: true });
    };
    LiberationComponent.prototype.showModalReleaseClient = function (client) {
        this.selectClient = Object.assign({}, client);
        this.modalReleaseClient.show();
    };
    LiberationComponent.prototype.onNotify = function (msg) {
        if (msg.message === 'CLIENT_RELEASED') {
            this.selectClient.liberation.systemLiberationDate = __WEBPACK_IMPORTED_MODULE_2_moment__().add(5, 'days');
            this.selectClient.liberation.verificationDate = __WEBPACK_IMPORTED_MODULE_2_moment__().add(5, 'days');
        }
    };
    LiberationComponent.prototype.login = function () {
        var _this = this;
        this.employeeService.login(this.employee.login, this.employee.password).subscribe(function (employee) {
            _this.localStorageService.set('employee', employee);
            _this.isLooged = true;
        }, function (error) {
        });
    };
    LiberationComponent.prototype.loggof = function () {
        this.isLooged = false;
        this.localStorageService.set('employee', null);
    };
    return LiberationComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalReleaseClient'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__["b" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__["b" /* ModalDirective */]) === "function" && _a || Object)
], LiberationComponent.prototype, "modalReleaseClient", void 0);
LiberationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-liberation',
        template: __webpack_require__(436),
        styles: [__webpack_require__(401)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__liberation_service__["a" /* LiberationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__liberation_service__["a" /* LiberationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__client_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__client_client_service__["a" /* ClientService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_9__employee_employee_service__["a" /* EmployeeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__employee_employee_service__["a" /* EmployeeService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_10_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10_angular_2_local_storage__["LocalStorageService"]) === "function" && _f || Object])
], LiberationComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=liberation.component.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__client_client__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__liberation_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalClientLiberationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ModalClientLiberationComponent = (function () {
    function ModalClientLiberationComponent(service, localStorageService) {
        this.service = service;
        this.localStorageService = localStorageService;
        this.notify = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.client = new __WEBPACK_IMPORTED_MODULE_1__client_client__["a" /* Client */]();
    }
    ModalClientLiberationComponent.prototype.releaseClient = function () {
        var _this = this;
        this.client.liberation.systemLiberationDate = __WEBPACK_IMPORTED_MODULE_2_moment__().add(5, 'days');
        this.client.liberation.verificationDate = __WEBPACK_IMPORTED_MODULE_2_moment__().add(5, 'days');
        this.employee = this.localStorageService.get('employee');
        this.client.liberation.obs = 'Temporário por: ' + this.employee.id + ' - ' + this.employee.login + ' - ' +
            __WEBPACK_IMPORTED_MODULE_2_moment__().format('DD/MM/YYYY HH:MM:ss');
        console.log(this.client.liberation);
        this.service.update(this.client.liberation).subscribe(function (result) {
            _this.modal.hide();
            _this.client.liberation = Object.assign({}, result);
            _this.notify.emit({ message: 'CLIENT_RELEASED' });
        });
    };
    return ModalClientLiberationComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__client_client__["a" /* Client */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__client_client__["a" /* Client */]) === "function" && _a || Object)
], ModalClientLiberationComponent.prototype, "client", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], ModalClientLiberationComponent.prototype, "notify", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["b" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["b" /* ModalDirective */]) === "function" && _c || Object)
], ModalClientLiberationComponent.prototype, "modal", void 0);
ModalClientLiberationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-modal-client-liberation',
        template: __webpack_require__(437),
        styles: [__webpack_require__(402)]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__liberation_service__["a" /* LiberationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__liberation_service__["a" /* LiberationService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__["LocalStorageService"]) === "function" && _e || Object])
], ModalClientLiberationComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=modal-client-liberation.component.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__quick_sell__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductQuickSellComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductQuickSellComponent = (function () {
    function ProductQuickSellComponent() {
        this.quickSell = new __WEBPACK_IMPORTED_MODULE_1__quick_sell__["a" /* QuickSell */]();
    }
    return ProductQuickSellComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__quick_sell__["a" /* QuickSell */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__quick_sell__["a" /* QuickSell */]) === "function" && _a || Object)
], ProductQuickSellComponent.prototype, "quickSell", void 0);
ProductQuickSellComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product-quick-sell',
        template: __webpack_require__(438),
        styles: [__webpack_require__(403)]
    }),
    __metadata("design:paramtypes", [])
], ProductQuickSellComponent);

var _a;
//# sourceMappingURL=product-quick-sell.component.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__quick_sell__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuickSellDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuickSellDetailsComponent = (function () {
    function QuickSellDetailsComponent() {
        this.quickSell = new __WEBPACK_IMPORTED_MODULE_1__quick_sell__["a" /* QuickSell */]();
    }
    return QuickSellDetailsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__quick_sell__["a" /* QuickSell */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__quick_sell__["a" /* QuickSell */]) === "function" && _a || Object)
], QuickSellDetailsComponent.prototype, "quickSell", void 0);
QuickSellDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-quick-sell-details',
        template: __webpack_require__(439),
        styles: [__webpack_require__(404)]
    }),
    __metadata("design:paramtypes", [])
], QuickSellDetailsComponent);

var _a;
//# sourceMappingURL=quick-sell-details.component.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__quick_sell_service__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quick_sell__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sale_resume_sale_resume__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toasty__ = __webpack_require__(241);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuickSellComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QuickSellComponent = (function () {
    function QuickSellComponent(quickSellService, toastyService, toastyConfig) {
        this.quickSellService = quickSellService;
        this.toastyService = toastyService;
        this.toastyConfig = toastyConfig;
        this.listQuickSell = [];
        this.reportType = 'quickSell';
        this.toastyConfig.position = 'bottom-right';
    }
    QuickSellComponent.prototype.searchQuickSellReport = function (query) {
        var _this = this;
        this.quickSellSelected = new __WEBPACK_IMPORTED_MODULE_2__quick_sell__["a" /* QuickSell */]();
        this.listQuickSell = [];
        this.quickSellService.list(query)
            .subscribe(function (result) {
            if (result.length === 0) {
                var toastOptions = {
                    title: 'Nenhum resultado encontrado',
                    showClose: true,
                    timeout: 4000,
                    theme: 'material'
                };
                _this.toastyService.warning(toastOptions);
            }
            _this.listQuickSell = result;
            _this.calculateTotals();
        });
    };
    QuickSellComponent.prototype.getConvertedDate = function (date) {
        return __WEBPACK_IMPORTED_MODULE_3_moment__(date, 'YYYY-MM-DD').format('DD/MM/YYYY');
    };
    QuickSellComponent.prototype.selectRow = function (event, quickSell, quickSellId) {
        event.preventDefault();
        this.quickSellSelected = Object.assign({}, this.quickSellSelected, quickSell);
        $('#quickSellRow_' + quickSellId).addClass('active').siblings().removeClass('active');
    };
    QuickSellComponent.prototype.onNotify = function (query) {
        this.searchQuickSellReport(query);
    };
    QuickSellComponent.prototype.calculateTotals = function () {
        var _this = this;
        this.saleResume = new __WEBPACK_IMPORTED_MODULE_4__sale_resume_sale_resume__["a" /* SaleResume */]();
        this.listQuickSell.forEach(function (quickSell) {
            _this.saleResume.saleTotal += quickSell.total;
            quickSell.listProductQuickSell.forEach(function (productQuickSell) {
                _this.saleResume.numTotalSales += productQuickSell.quantity;
                _this.saleResume.productTotalPriceCost += productQuickSell.product.costPrice;
                if (productQuickSell.product.productOther && productQuickSell.product.productOther.discountValue) {
                    _this.saleResume.productTotalDiscountValue += productQuickSell.product.productOther.discountValue;
                }
            });
        });
    };
    return QuickSellComponent;
}());
QuickSellComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-quick-sell',
        template: __webpack_require__(440),
        styles: [__webpack_require__(405)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__quick_sell_service__["a" /* QuickSellService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__quick_sell_service__["a" /* QuickSellService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_toasty__["b" /* ToastyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng2_toasty__["b" /* ToastyService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_toasty__["c" /* ToastyConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng2_toasty__["c" /* ToastyConfig */]) === "function" && _c || Object])
], QuickSellComponent);

var _a, _b, _c;
//# sourceMappingURL=quick-sell.component.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__report_filters__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__client_client_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_product_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_product_family_service__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_product_group_service__ = __webpack_require__(106);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportFiltersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReportFiltersComponent = (function () {
    function ReportFiltersComponent(clientService, productService, productGroupService, productFamilyService) {
        this.clientService = clientService;
        this.productService = productService;
        this.productGroupService = productGroupService;
        this.productFamilyService = productFamilyService;
        this.hourMask = [/[0-9]/, /\d/, ':', /\d/, /\d/];
        this.dateMask = [/[0-9]/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
        this.filterSelected = '';
        this.listFilters = [];
        this.clients = [];
        this.products = [];
        this.productGroups = [];
        this.productFamilies = [];
        this.notify = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.reportFilters = new __WEBPACK_IMPORTED_MODULE_1__report_filters__["a" /* ReportFilters */]();
        this.listClients();
        this.listProducts();
        this.listProductGroups();
        this.initDate();
    }
    ReportFiltersComponent.prototype.initDate = function () {
        var dateArray = new Date().toISOString().split('-');
        var day = dateArray[2].substr(0, 2);
        this.reportFilters.dateFrom = day + '/' + dateArray[1] + '/' + dateArray[0];
        this.reportFilters.dateTo = day + '/' + dateArray[1] + '/' + dateArray[0];
    };
    ReportFiltersComponent.prototype.listClients = function () {
        var _this = this;
        this.clientService.list().subscribe(function (result) {
            _this.clients = result;
        });
    };
    ReportFiltersComponent.prototype.listProducts = function () {
        var _this = this;
        this.productService.list().subscribe(function (result) {
            _this.products = result;
        });
    };
    ReportFiltersComponent.prototype.listProductGroups = function () {
        var _this = this;
        this.productGroupService.list().subscribe(function (result) {
            _this.productGroups = result;
        });
    };
    ReportFiltersComponent.prototype.listProdFamilyByGroup = function () {
        var _this = this;
        this.productFamilyService.list(this.reportFilters.productGroupId.toString()).subscribe(function (result) {
            _this.productFamilies = result;
        });
    };
    ReportFiltersComponent.prototype.buildSearchQuery = function () {
        var query = '';
        if (this.reportType === 'quickSell') {
            query += 'transaction=Concluida';
            query += ',sellDate>' + this.reportFilters.dateFrom;
            query += ',sellDate<' + this.reportFilters.dateTo;
        }
        else {
            query += 'status=Concluido';
            var dateArrayFrom = this.reportFilters.dateFrom.split('/');
            var dateArrayTo = this.reportFilters.dateTo.split('/');
            var dayLess = parseInt(dateArrayFrom[0]) - 1;
            var dayGreater = parseInt(dateArrayTo[0]) + 1;
            query += ',sellDate>' + dayLess + '/' + dateArrayFrom[1] + '/' + dateArrayFrom[2];
            query += ',sellDate<' + dayGreater + '/' + dateArrayTo[1] + '/' + dateArrayTo[2];
        }
        if (this.reportFilters.client) {
            query += ',client=' + this.reportFilters.client.id;
        }
        if (this.reportFilters.product) {
            query += ',product=' + this.reportFilters.product.id;
        }
        if (this.reportFilters.productGroupId) {
            query += ',group=' + this.reportFilters.productGroupId;
        }
        if (this.reportFilters.productFamilyId) {
            query += ',family=' + this.reportFilters.productFamilyId;
        }
        if (this.reportFilters.coo) {
            query += ',coo=' + this.reportFilters.coo;
        }
        if (this.reportFilters.id) {
            query += ',id=' + this.reportFilters.id;
        }
        if (this.reportFilters.cashier) {
            query += ',cashier' + this.reportFilters.cashier;
        }
        this.notify.emit(query);
    };
    ReportFiltersComponent.prototype.insertFilter = function (filterType, filter) {
        var hasFilter = false;
        this.listFilters.forEach(function (filterItem) {
            if (filterItem.type === filterType) {
                filterItem.filter = filter;
                hasFilter = true;
            }
        });
        if (!hasFilter) {
            this.listFilters.push({
                type: filterType,
                filter: filter
            });
        }
    };
    ReportFiltersComponent.prototype.removeFilter = function (filter) {
        switch (filter.type) {
            case 'Cliente':
                this.reportFilters.client = undefined;
                break;
            case 'Product':
                this.reportFilters.product = undefined;
                break;
            case 'Caixa':
                this.reportFilters.cashier = undefined;
                break;
            case 'Chave':
                this.reportFilters.nfeKey = undefined;
                break;
            case 'Código':
                this.reportFilters.id = undefined;
                break;
            case 'Nº Nota':
                this.reportFilters.coo = undefined;
                break;
            case 'Grupo':
                this.reportFilters.productGroupId = undefined;
                break;
            case 'Família':
                this.reportFilters.productFamilyId = undefined;
                break;
            default:
                this.reportFilters.client = undefined;
        }
        this.listFilters.splice(this.listFilters.indexOf(filter), 1);
    };
    return ReportFiltersComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], ReportFiltersComponent.prototype, "notify", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('reportType'),
    __metadata("design:type", String)
], ReportFiltersComponent.prototype, "reportType", void 0);
ReportFiltersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-report-filters',
        template: __webpack_require__(441),
        styles: [__webpack_require__(406)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__client_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__client_client_service__["a" /* ClientService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__product_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__product_product_service__["a" /* ProductService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__product_product_group_service__["a" /* ProductGroupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__product_product_group_service__["a" /* ProductGroupService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__product_product_family_service__["a" /* ProductFamilyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__product_product_family_service__["a" /* ProductFamilyService */]) === "function" && _e || Object])
], ReportFiltersComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=report-filters.component.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportFilters; });
var ReportFilters = (function () {
    function ReportFilters() {
    }
    return ReportFilters;
}());

//# sourceMappingURL=report-filters.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sale_resume__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaleResumeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SaleResumeComponent = (function () {
    function SaleResumeComponent() {
        this.saleResume = new __WEBPACK_IMPORTED_MODULE_1__sale_resume__["a" /* SaleResume */]();
    }
    return SaleResumeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__sale_resume__["a" /* SaleResume */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__sale_resume__["a" /* SaleResume */]) === "function" && _a || Object)
], SaleResumeComponent.prototype, "saleResume", void 0);
SaleResumeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sale-resume',
        template: __webpack_require__(443),
        styles: [__webpack_require__(408)]
    }),
    __metadata("design:paramtypes", [])
], SaleResumeComponent);

var _a;
//# sourceMappingURL=sale-resume.component.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sight_sale__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductSightSaleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductSightSaleComponent = (function () {
    function ProductSightSaleComponent() {
        this.sightSale = new __WEBPACK_IMPORTED_MODULE_1__sight_sale__["a" /* SightSale */]();
    }
    return ProductSightSaleComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__sight_sale__["a" /* SightSale */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__sight_sale__["a" /* SightSale */]) === "function" && _a || Object)
], ProductSightSaleComponent.prototype, "sightSale", void 0);
ProductSightSaleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product-sight-sale',
        template: __webpack_require__(444),
        styles: [__webpack_require__(409)]
    }),
    __metadata("design:paramtypes", [])
], ProductSightSaleComponent);

var _a;
//# sourceMappingURL=product-sight-sale.component.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sight_sale__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SightSaleDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SightSaleDetailsComponent = (function () {
    function SightSaleDetailsComponent() {
        this.sightSale = new __WEBPACK_IMPORTED_MODULE_1__sight_sale__["a" /* SightSale */]();
    }
    return SightSaleDetailsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__sight_sale__["a" /* SightSale */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__sight_sale__["a" /* SightSale */]) === "function" && _a || Object)
], SightSaleDetailsComponent.prototype, "sightSale", void 0);
SightSaleDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sight-sale-details',
        template: __webpack_require__(445),
        styles: [__webpack_require__(410)]
    }),
    __metadata("design:paramtypes", [])
], SightSaleDetailsComponent);

var _a;
//# sourceMappingURL=sight-sale-details.component.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sight_sale__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sight_sale_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sale_resume_sale_resume__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SightSaleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SightSaleComponent = (function () {
    function SightSaleComponent(sightSaleService) {
        this.sightSaleService = sightSaleService;
        this.listSightSale = new Array();
        this.sightSaleSelected = new __WEBPACK_IMPORTED_MODULE_1__sight_sale__["a" /* SightSale */]();
    }
    SightSaleComponent.prototype.searchSightSaleReport = function (query) {
        var _this = this;
        this.sightSaleService.search(query).subscribe(function (result) {
            _this.listSightSale = result;
            _this.calculateTotals();
        });
    };
    SightSaleComponent.prototype.onNotify = function (query) {
        this.searchSightSaleReport(query);
    };
    SightSaleComponent.prototype.selectRow = function (event, sightSale, sightSaleId) {
        event.preventDefault();
        this.sightSaleSelected = Object.assign({}, this.sightSaleSelected, sightSale);
        $('#sightSaleRow_' + sightSaleId).addClass('active').siblings().removeClass('active');
    };
    SightSaleComponent.prototype.getConvertedDate = function (date, format) {
        return __WEBPACK_IMPORTED_MODULE_3_moment__(date).format(format);
    };
    SightSaleComponent.prototype.calculateTotals = function () {
        var _this = this;
        this.saleResume = new __WEBPACK_IMPORTED_MODULE_4__sale_resume_sale_resume__["a" /* SaleResume */]();
        this.listSightSale.forEach(function (sightSale) {
            _this.saleResume.saleTotal += sightSale.total;
            sightSale.listProductSightSale.forEach(function (productSightSale) {
                _this.saleResume.numTotalSales += productSightSale.quantity;
                _this.saleResume.productTotalPriceCost += productSightSale.product.costPrice;
            });
        });
    };
    return SightSaleComponent;
}());
SightSaleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sight-sale',
        template: __webpack_require__(446),
        styles: [__webpack_require__(411)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__sight_sale_service__["a" /* SightSaleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__sight_sale_service__["a" /* SightSaleService */]) === "function" && _a || Object])
], SightSaleComponent);

var _a;
//# sourceMappingURL=sight-sale.component.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 123,
	"./af.js": 123,
	"./ar": 130,
	"./ar-dz": 124,
	"./ar-dz.js": 124,
	"./ar-kw": 125,
	"./ar-kw.js": 125,
	"./ar-ly": 126,
	"./ar-ly.js": 126,
	"./ar-ma": 127,
	"./ar-ma.js": 127,
	"./ar-sa": 128,
	"./ar-sa.js": 128,
	"./ar-tn": 129,
	"./ar-tn.js": 129,
	"./ar.js": 130,
	"./az": 131,
	"./az.js": 131,
	"./be": 132,
	"./be.js": 132,
	"./bg": 133,
	"./bg.js": 133,
	"./bn": 134,
	"./bn.js": 134,
	"./bo": 135,
	"./bo.js": 135,
	"./br": 136,
	"./br.js": 136,
	"./bs": 137,
	"./bs.js": 137,
	"./ca": 138,
	"./ca.js": 138,
	"./cs": 139,
	"./cs.js": 139,
	"./cv": 140,
	"./cv.js": 140,
	"./cy": 141,
	"./cy.js": 141,
	"./da": 142,
	"./da.js": 142,
	"./de": 145,
	"./de-at": 143,
	"./de-at.js": 143,
	"./de-ch": 144,
	"./de-ch.js": 144,
	"./de.js": 145,
	"./dv": 146,
	"./dv.js": 146,
	"./el": 147,
	"./el.js": 147,
	"./en-au": 148,
	"./en-au.js": 148,
	"./en-ca": 149,
	"./en-ca.js": 149,
	"./en-gb": 150,
	"./en-gb.js": 150,
	"./en-ie": 151,
	"./en-ie.js": 151,
	"./en-nz": 152,
	"./en-nz.js": 152,
	"./eo": 153,
	"./eo.js": 153,
	"./es": 155,
	"./es-do": 154,
	"./es-do.js": 154,
	"./es.js": 155,
	"./et": 156,
	"./et.js": 156,
	"./eu": 157,
	"./eu.js": 157,
	"./fa": 158,
	"./fa.js": 158,
	"./fi": 159,
	"./fi.js": 159,
	"./fo": 160,
	"./fo.js": 160,
	"./fr": 163,
	"./fr-ca": 161,
	"./fr-ca.js": 161,
	"./fr-ch": 162,
	"./fr-ch.js": 162,
	"./fr.js": 163,
	"./fy": 164,
	"./fy.js": 164,
	"./gd": 165,
	"./gd.js": 165,
	"./gl": 166,
	"./gl.js": 166,
	"./gom-latn": 167,
	"./gom-latn.js": 167,
	"./he": 168,
	"./he.js": 168,
	"./hi": 169,
	"./hi.js": 169,
	"./hr": 170,
	"./hr.js": 170,
	"./hu": 171,
	"./hu.js": 171,
	"./hy-am": 172,
	"./hy-am.js": 172,
	"./id": 173,
	"./id.js": 173,
	"./is": 174,
	"./is.js": 174,
	"./it": 175,
	"./it.js": 175,
	"./ja": 176,
	"./ja.js": 176,
	"./jv": 177,
	"./jv.js": 177,
	"./ka": 178,
	"./ka.js": 178,
	"./kk": 179,
	"./kk.js": 179,
	"./km": 180,
	"./km.js": 180,
	"./kn": 181,
	"./kn.js": 181,
	"./ko": 182,
	"./ko.js": 182,
	"./ky": 183,
	"./ky.js": 183,
	"./lb": 184,
	"./lb.js": 184,
	"./lo": 185,
	"./lo.js": 185,
	"./lt": 186,
	"./lt.js": 186,
	"./lv": 187,
	"./lv.js": 187,
	"./me": 188,
	"./me.js": 188,
	"./mi": 189,
	"./mi.js": 189,
	"./mk": 190,
	"./mk.js": 190,
	"./ml": 191,
	"./ml.js": 191,
	"./mr": 192,
	"./mr.js": 192,
	"./ms": 194,
	"./ms-my": 193,
	"./ms-my.js": 193,
	"./ms.js": 194,
	"./my": 195,
	"./my.js": 195,
	"./nb": 196,
	"./nb.js": 196,
	"./ne": 197,
	"./ne.js": 197,
	"./nl": 199,
	"./nl-be": 198,
	"./nl-be.js": 198,
	"./nl.js": 199,
	"./nn": 200,
	"./nn.js": 200,
	"./pa-in": 201,
	"./pa-in.js": 201,
	"./pl": 202,
	"./pl.js": 202,
	"./pt": 204,
	"./pt-br": 203,
	"./pt-br.js": 203,
	"./pt.js": 204,
	"./ro": 205,
	"./ro.js": 205,
	"./ru": 206,
	"./ru.js": 206,
	"./sd": 207,
	"./sd.js": 207,
	"./se": 208,
	"./se.js": 208,
	"./si": 209,
	"./si.js": 209,
	"./sk": 210,
	"./sk.js": 210,
	"./sl": 211,
	"./sl.js": 211,
	"./sq": 212,
	"./sq.js": 212,
	"./sr": 214,
	"./sr-cyrl": 213,
	"./sr-cyrl.js": 213,
	"./sr.js": 214,
	"./ss": 215,
	"./ss.js": 215,
	"./sv": 216,
	"./sv.js": 216,
	"./sw": 217,
	"./sw.js": 217,
	"./ta": 218,
	"./ta.js": 218,
	"./te": 219,
	"./te.js": 219,
	"./tet": 220,
	"./tet.js": 220,
	"./th": 221,
	"./th.js": 221,
	"./tl-ph": 222,
	"./tl-ph.js": 222,
	"./tlh": 223,
	"./tlh.js": 223,
	"./tr": 224,
	"./tr.js": 224,
	"./tzl": 225,
	"./tzl.js": 225,
	"./tzm": 227,
	"./tzm-latn": 226,
	"./tzm-latn.js": 226,
	"./tzm.js": 227,
	"./uk": 228,
	"./uk.js": 228,
	"./ur": 229,
	"./ur.js": 229,
	"./uz": 231,
	"./uz-latn": 230,
	"./uz-latn.js": 230,
	"./uz.js": 231,
	"./vi": 232,
	"./vi.js": 232,
	"./x-pseudo": 233,
	"./x-pseudo.js": 233,
	"./yo": 234,
	"./yo.js": 234,
	"./zh-cn": 235,
	"./zh-cn.js": 235,
	"./zh-hk": 236,
	"./zh-hk.js": 236,
	"./zh-tw": 237,
	"./zh-tw.js": 237
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 412;


/***/ }),

/***/ 435:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<!--<div class=\"container\">\n  <div class=\"row\">\n    <h2 class=\"text-center\">Relatório Detalhado</h2>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-12 col-md-12\">\n      <label class=\"label-control\">Categoria:</label>\n      <input type=\"radio\" name=\"inputReportCategory\" value=\"quickSell\" [(ngModel)]=\"reportCategorySelect\"> Venda Rápida\n      <input type=\"radio\" name=\"inputReportCategory\" value=\"sightSale\" [(ngModel)]=\"reportCategorySelect\"> Venda NFe/Outros\n    </div>\n  </div>\n  <div *ngIf=\"reportCategorySelect === 'quickSell'\">\n    <app-quick-sell></app-quick-sell>\n  </div>\n  <div *ngIf=\"reportCategorySelect === 'sightSale'\">\n    <app-sight-sale></app-sight-sale>\n  </div>\n</div>-->\n\n"

/***/ }),

/***/ 436:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 col-md-12\" *ngIf=\"!isLooged\">\n  <div class=\"row\">\n    <div class=\"col-lg-4 col-md-4 form-group\">\n      <label for=\"inputEmployeeLogin\" class=\"control-label\">Login</label>\n      <input type=\"text\" name=\"login\" id=\"inputEmployeeLogin\" class=\"form-control\" [(ngModel)]=\"employee.login\">\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-4 col-md-4 form-group\">\n      <label for=\"inputEmployeePassword\" class=\"control-label\">Senha</label>\n      <input type=\"password\" (keyup.enter)=\"login()\" name=\"password\" id=\"inputEmployeePassword\" class=\"form-control\" [(ngModel)]=\"employee.password\">\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-4 col-md-4 form-group\">\n      <button type=\"button\" class=\"btn btn-default\">Limpar</button>\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"login()\">Login</button>\n    </div>\n  </div>\n</div>\n\n<div class=\"col-lg-12 col-md-12\" *ngIf=\"isLooged\">\n  <div class=\"row\">\n    <div class=\"col-lg-8 col-md-8\" style=\"background-color: #FFFFAB;\">\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-6 form-group\">\n          <label for=\"inputClientFantasyNameFilter\" class=\"control-label\">Nome Fantasia</label>\n          <input type=\"text\" id=\"inputClientFantasyNameFilter\" [(ngModel)]=\"liberationFilter.fantasyName\"\n                 class=\"form-control\" placeholder=\"Nome Fantasia\" name=\"fantasyName\" (keyup.enter)=\"searchClients()\">\n        </div>\n        <div class=\"col-lg-6 col-md-6 form-group\">\n          <label for=\"inputClientSocialReasonFilter\" class=\"control-label\">Nome</label>\n          <input type=\"text\" id=\"inputClientSocialReasonFilter\" [(ngModel)]=\"liberationFilter.name\"\n                 class=\"form-control\" placeholder=\"Razão Social\" name=\"socialReason\" (keyup.enter)=\"searchClients()\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-6 form-group\">\n          <label for=\"inputClientSituationFilter\" class=\"control-label\">Status</label>\n          <select name=\"situation\" id=\"inputClientSituationFilter\" class=\"form-control\"\n                  [(ngModel)]=\"liberationFilter.situation\">\n            <option value=\"\"></option>\n            <option value=\"ATIVO\">Ativo</option>\n            <option value=\"INATIVO\">Inativo</option>\n          </select>\n        </div>\n        <div class=\"col-lg-6 col-md-6 form-group\">\n          <label for=\"inputClientCategoryFilter\" class=\"control-label\">Categoria</label>\n          <select name=\"category\" id=\"inputClientCategoryFilter\" class=\"form-control\"\n                  [(ngModel)]=\"liberationFilter.category\">\n            <option value=\"\"></option>\n            <option value=\"MENSAL\">Mensal</option>\n            <option value=\"ALUGUEL\">Aluguel</option>\n            <option value=\"CHAMADO\">Chamado</option>\n            <option value=\"GRATUITO\">Gratuito</option>\n          </select>\n        </div>\n        <!--<div class=\"col-lg-4 col-md-4 form-group\">\n          <label for=\"inputClientVersionFilter\" class=\"control-label\">Versão</label>\n          <select name=\"version\" id=\"inputClientVersionFilter\" class=\"form-control\"\n                  [(ngModel)]=\"liberationFilter.version\">\n            <option *ngFor=\"let version of listVersions\" [ngValue]=\"version\">{{version}}</option>\n          </select>\n        </div>-->\n      </div>\n    </div>\n    <div class=\"col-lg-4 col-md-4 form-group\">\n      <button (click)=\"loggof()\" class=\"btn btn-default pull-right\"><span class=\"fa fa-sign-out\"></span>Sair</button>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-12 col-md-12\">\n      <button type=\"button\" class=\"btn btn-primary pull-right\" (click)=\"searchClients()\">\n        <span class=\"fa fa-search\"></span> Pesquisar\n      </button>\n    </div>\n  </div>\n  <ng2-slim-loading-bar [color]=\"'#204d74'\" [height]=\"'4px'\"></ng2-slim-loading-bar>\n</div>\n\n<div class=\"row\" *ngIf=\"isLooged\">\n  <div class=\"col-lg-12 col-md-12\" *ngIf=\"listClients.length > 0\">\n    <table class=\"table table-bordered table-striped\">\n      <thead>\n        <tr>\n          <th class=\"text-center\">Cód.</th>\n          <th class=\"text-left\">Nome Fantasia</th>\n          <th class=\"text-left\">Razão Social</th>\n          <th class=\"text-center\">Categoria</th>\n          <th class=\"text-center\">Versão</th>\n          <th class=\"text-center\">Data de Ver.</th>\n          <th class=\"text-center\">Data de Lib.</th>\n          <th class=\"text-left\">Observações</th>\n          <th class=\"text-center\">Status</th>\n          <th class=\"text-center\">Liberar</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let client of listClients | paginate: {itemsPerPage: 5, currentPage: p }\">\n          <td class=\"text-center\">{{client.id}}</td>\n          <td class=\"text-left\">{{client.fantasyName}}</td>\n          <td class=\"text-left\">{{client.name}}</td>\n          <td class=\"text-center\">{{client.category}}</td>\n          <td class=\"text-center\">{{client.liberation?.clientSystemVersion}}</td>\n          <td class=\"text-center\">{{getConvertedDate(client.id, client.liberation?.verificationDate)}}</td>\n          <td class=\"text-center\">{{getConvertedDate(client.id, client.liberation?.systemLiberationDate)}}</td>\n          <td class=\"text-left\">{{client.liberation?.obs}}</td>\n          <td class=\"text-center\">{{client.situation}}</td>\n          <td class=\"text-center\">\n            <span class=\"fa fa-check\" *ngIf=\"client.liberation?.systemLiberationDate !== client.liberation?.verificationDate\"\n                  (click)=\"showModalReleaseClient(client)\"></span>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <div class=\"row\">\n      <div class=\"col-lg-10 col-md-10\">\n        <pagination-controls previousLabel=\"Anterior\"\n                             nextLabel=\"Próximo\"\n                             (pageChange)=\"p = $event\">\n        </pagination-controls>\n      </div>\n      <div class=\"col-lg-2 col-md-2\">\n        <button class=\"btn btn-primary pull-right\" (click)=\"export()\">\n          <span class=\"fa fa-download\"></span> Exportar\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div bsModal #modalReleaseClient=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\"\n     aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n  <app-modal-client-liberation [client]=\"selectClient\"  [modal]=\"modalReleaseClient\" (notify)=\"onNotify($event)\">\n\n  </app-modal-client-liberation>\n</div>\n"

/***/ }),

/***/ 437:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog modal-md\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">Liberar Cliente</h4>\n      <button type=\"button\" class=\"close pull-right\" (click)=\"modal.hide()\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\" *ngIf=\"client\">\n      Deseja realmente liberar o Cliente: \"{{client.name}}\" ?\n    </div>\n    <div class=\"modal-footer\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <button class=\"btn\" (click)=\"modal.hide()\">Cancelar</button>\n          <button class=\"btn btn-primary\" (click)=\"releaseClient();\">Liberar</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 438:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"quickSell && quickSell.listProductQuickSell\">\n  <div class=\"col-lg-12 col-md-12\">\n    <table class=\"table table-bordered table-striped\">\n      <thead>\n        <tr>\n          <th>Barra</th>\n          <th>Nome</th>\n          <th>CFOP</th>\n          <th class=\"text-center\">Quant.</th>\n          <th class=\"text-center\">Valor</th>\n          <th class=\"text-center\">Subtotal</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let productQuickSell of quickSell.listProductQuickSell\">\n          <td>{{productQuickSell.product.barCode}}</td>\n          <td>{{productQuickSell.product.name}}</td>\n          <td>{{productQuickSell.cfop}}</td>\n          <td class=\"text-center\">{{productQuickSell.quantity}}</td>\n          <td class=\"text-center\">{{productQuickSell.value}}</td>\n          <td class=\"text-center\">{{productQuickSell.subTotal}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ 439:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"quickSell\">\n  <div class=\"row\">\n    <div class=\"panel panel-default\" style=\"margin-bottom: 0px;\">\n      <div class=\"panel-heading\">\n        <h2 class=\"panel-title\">\n          Produtos\n          <span class=\"fa fa-shopping-cart\"></span>\n        </h2>\n      </div>\n      <div class=\"panel-body\" style=\"background-color: #FFFFAB; color: #ff9900;\" *ngIf=\"quickSell.listProductQuickSell\">\n        <div class=\"row\" *ngFor=\"let productQuickSell of quickSell.listProductQuickSell\">\n          <div class=\"col-lg-12 col-md-12\">\n            <div class=\"row\">\n              <div class=\"col-lg-1 col-md-1\">\n                <label for=\"textQuickSellProductId\" class=\"label-control\">Cód.:</label>\n                <span id=\"textQuickSellProductId\">{{productQuickSell.product.id}}</span>\n              </div>\n              <div class=\"col-lg-3 col-md-3\">\n                <label for=\"textQuickSellProductName\" class=\"label-control\">Nome:</label>\n                <span id=\"textQuickSellProductName\">{{productQuickSell.product.name}}</span>\n              </div>\n              <div class=\"col-lg-3 col-md-3\">\n                <label for=\"textQuickSellProductBarCode\" class=\"label-control\">Barra:</label>\n                <span id=\"textQuickSellProductBarCode\">{{productQuickSell.product.barCode}}</span>\n              </div>\n              <div class=\"col-lg-1 col-md-1\">\n                <label for=\"textQuickSellProductQuantity\" class=\"label-control\">Quant.:</label>\n                <span id=\"textQuickSellProductQuantity\">{{productQuickSell.quantity}}</span>\n              </div>\n              <div class=\"col-lg-1 col-md-1\">\n                <label for=\"textQuickSellProductValue\" class=\"label-control\">Valor:</label>\n                <span id=\"textQuickSellProductValue\">{{productQuickSell.value}}</span>\n              </div>\n              <div class=\"col-lg-2 col-md-2\">\n                <label for=\"textQuickSellProductSubtotal\" class=\"label-control\">Subtotal:</label>\n                <span id=\"textQuickSellProductSubtotal\">{{productQuickSell.subTotal}}</span>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-lg-1 col-md-1\" *ngIf=\"productQuickSell.cst\">\n                <label for=\"textQuickSellProductCst\" class=\"label-control\">CST:</label>\n                <span id=\"textQuickSellProductCst\">{{productQuickSell.cst}}</span>\n              </div>\n              <div class=\"col-lg-3 col-md-3\" *ngIf=\"productQuickSell.cfop\">\n                <label for=\"textQuickSellProductCfop\" class=\"label-control\">CFOP:</label>\n                <span id=\"textQuickSellProductCfop\">{{productQuickSell.cfop}}</span>\n              </div>\n              <div class=\"col-lg-3 col-md-3\" *ngIf=\"productQuickSell.ncm\">\n                <label for=\"textQuickSellProductNCM\" class=\"label-control\">NCM:</label>\n                <span id=\"textQuickSellProductNCM\">{{productQuickSell.ncm}}</span>\n              </div>\n              <div class=\"col-lg-2 col-md-3\">\n                <label for=\"textQuickSellProductGroup\" class=\"label-control\">Grupo:</label>\n                <span id=\"textQuickSellProductGroup\">{{productQuickSell.product?.productGroup?.name}}</span>\n              </div>\n              <div class=\"col-lg-2 col-md-2\">\n                <label for=\"textQuickSellProductFamily\" class=\"label-control\">Família:</label>\n                <span id=\"textQuickSellProductFamily\">{{productQuickSell.product?.productFamily?.name}}</span>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-lg-2 col-md-2\" *ngIf=\"productQuickSell.aliquotICMS\">\n                <label for=\"textQuickSellProductAliquotICMS\" class=\"label-control\">Aliq. ICMS:</label>\n                <span id=\"textQuickSellProductAliquotICMS\">{{productQuickSell.aliquotICMS}}</span>\n              </div>\n              <div class=\"col-lg-2 col-md-2\" *ngIf=\"productQuickSell.product.productOther?.freightValue\">\n                <label for=\"textQuickSellProductFreightValue\" class=\"label-control\">Val./Frete:</label>\n                <span id=\"textQuickSellProductFreightValue\">{{productQuickSell.product.productOther?.freightValue}}</span>\n              </div>\n              <div class=\"col-lg-2 col-md-2\" *ngIf=\"productQuickSell.product.productOther?.insuranceValue\">\n                <label for=\"textQuickSellProductInsuranceValue\" class=\"label-control\">Val./Seguro:</label>\n                <span id=\"textQuickSellProductInsuranceValue\">{{productQuickSell.product.productOther?.insuranceValue}}</span>\n              </div>\n              <div class=\"col-lg-2 col-md-2\" *ngIf=\"productQuickSell.product.productOther.discountValue\">\n                <label for=\"textQuickSellProductDiscountValue\" class=\"label-control\">Val./Seguro:</label>\n                <span id=\"textQuickSellProductDiscountValue\">{{productQuickSell.product.productOther?.discountValue}}</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\" *ngIf=\"quickSell.client\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h2 class=\"panel-title\">\n          Cliente\n          <span class=\"fa fa-user\"></span>\n        </h2>\n      </div>\n      <div class=\"panel-body\" style=\"background-color: #FFFFAB; color: #ff9900;\">\n        <div class=\"row\">\n          <div class=\"col-lg-1 col-md-1\">\n            <label for=\"textQuickSellClientId\" class=\"label-control\">Cód.:</label>\n            <span id=\"textQuickSellClientId\">{{quickSell.client.id}}</span>\n          </div>\n          <div class=\"col-lg-3 col-md-3\">\n            <label for=\"textQuickSellClientName\" class=\"label-control\">Nome:</label>\n            <span id=\"textQuickSellClientName\">{{quickSell.client.name}}</span>\n          </div>\n          <div class=\"col-lg-3 col-md-3\" *ngIf=\"quickSell.client.cpf\">\n            <label for=\"textQuickSellClientCPF\" class=\"label-control\">CPF:</label>\n            <span id=\"textQuickSellClientCPF\">{{quickSell.client.cpf}}</span>\n          </div>\n          <div class=\"col-lg-3 col-md-3\" *ngIf=\"quickSell.client.cnpj\">\n            <label for=\"textQuickSellClientCNPJ\" class=\"label-control\">CNPJ:</label>\n            <span id=\"textQuickSellClientCNPJ\">{{quickSell.client.cnpj}}</span>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-4 col-md-4\" *ngIf=\"quickSell.client.address\">\n            <label for=\"textQuickSellClientAddress\" class=\"label-control\">Endereço:</label>\n            <span id=\"textQuickSellClientAddress\">{{quickSell.client.address}}</span>\n          </div>\n          <div class=\"col-lg-3 col-md-3\" *ngIf=\"quickSell.client.complement\">\n            <label for=\"textQuickSellClientComplement\" class=\"label-control\">Comp.:</label>\n            <span id=\"textQuickSellClientComplement\">{{quickSell.client.complement}}</span>\n          </div>\n          <div class=\"col-lg-1 col-md-1\" *ngIf=\"quickSell.client.addressNumber\">\n            <label for=\"textQuickSellClientAddressNumber\" class=\"label-control\">Nº:</label>\n            <span id=\"textQuickSellClientAddressNumber\">{{quickSell.client.addressNumber}}</span>\n          </div>\n          <div class=\"col-lg-3 col-md-3\" *ngIf=\"quickSell.client.city\">\n            <label for=\"textQuickSellClientCity\" class=\"label-control\">Cidade:</label>\n            <span id=\"textQuickSellClientCity\">{{quickSell.client.city}}</span>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-4 col-md-4\" *ngIf=\"quickSell.client.neighborhood\">\n            <label for=\"textQuickSellClientNeighborhood\" class=\"label-control\">Bairro:</label>\n            <span id=\"textQuickSellClientNeighborhood\">{{quickSell.client.neighborhood}}</span>\n          </div>\n          <div class=\"col-lg-4 col-md-4\" *ngIf=\"quickSell.client.cel1\">\n            <label for=\"textQuickSellClientCel1\" class=\"label-control\">Tel 1:</label>\n            <span id=\"textQuickSellClientCel1\">{{quickSell.client.cel1}}</span>\n          </div>\n          <div class=\"col-lg-4 col-md-4\" *ngIf=\"quickSell.client.cel2\">\n            <label for=\"textQuickSellClientCel2\" class=\"label-control\">Tel 2:</label>\n            <span id=\"textQuickSellClientCel2\">{{quickSell.client.cel2}}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 440:
/***/ (function(module, exports) {

module.exports = "<app-report-filters [reportType]=\"reportType\" (notify)=\"onNotify($event)\"></app-report-filters>\n<ng2-toasty></ng2-toasty>\n<div class=\"row\" *ngIf=\"listQuickSell.length > 0\">\n  <div class=\"col-lg-12 col-md-12\">\n    <tabset>\n      <tab heading=\"Resumo\">\n        <table class=\"table table-bordered table-striped\">\n          <thead>\n            <tr>\n              <th class=\"text-center\"></th>\n              <th class=\"text-center\">Cód.</th>\n              <th class=\"text-center\">Data/Hora</th>\n              <th class=\"text-center\">Tipo</th>\n              <th class=\"text-left\">Cliente</th>\n              <th class=\"text-center\">Caixa</th>\n              <th class=\"text-left\">Chave NFE</th>\n              <th class=\"text-center\">Total/Desc.</th>\n              <th class=\"text-center\">Total</th>\n            </tr>\n          </thead>\n          <tbody>\n          <tr *ngFor=\"let quickSell of listQuickSell | paginate: { itemsPerPage: 5, currentPage: p }\"\n              id=\"quickSellRow_{{quickSell.id}}\">\n            <td>\n              <div class=\"radio\">\n                <label><input type=\"radio\" name=\"radioSelectQuickSell\"\n                              [checked]=\"quickSellSelected.id === quickSell.id\"\n                              (change)=\"selectRow($event, quickSell, quickSell.id)\">\n                </label>\n              </div>\n            </td>\n            <td class=\"text-center\">{{quickSell.id}}</td>\n            <td>{{getConvertedDate(quickSell.sellDate)}} &nbsp; {{quickSell.schedule}}</td>\n            <td class=\"text-center\">{{quickSell.type}}</td>\n            <td class=\"text-left\">{{quickSell.client.name}}</td>\n            <td class=\"text-center\">{{quickSell.cashier}}</td>\n            <td class=\"text-left\">{{quickSell.nfeKey}}</td>\n            <td class=\"text-center\">R{{quickSell.totalWithDescount | currency:'USD':true:'1.2-2'}}</td>\n            <td class=\"text-center\">R{{quickSell.total | currency:'USD':true:'1.2-2'}}</td>\n          </tr>\n          </tbody>\n        </table>\n        <div class=\"row\">\n          <div class=\"col-lg-12 col-md-12\">\n            <pagination-controls previousLabel=\"Anterior\"\n                                 nextLabel=\"Próximo\"\n                                 (pageChange)=\"p = $event\">\n            </pagination-controls>\n          </div>\n        </div>\n        <app-sale-resume [saleResume]=\"saleResume\"></app-sale-resume>\n      </tab>\n      <tab heading=\"Produtos\">\n        <app-product-quick-sell [quickSell]=\"quickSellSelected\"></app-product-quick-sell>\n      </tab>\n      <tab heading=\"Detalhamento\">\n        <app-quick-sell-details [quickSell]=\"quickSellSelected\"></app-quick-sell-details>\n      </tab>\n    </tabset>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 441:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 col-md-12\">\n  <form name=\"formFilterQuickSellReport\" class=\"form\">\n    <div class=\"row\">\n      <div class=\"col-lg-8 col-md-8\" style=\"background-color: #FFFFAB;\">\n        <div class=\"row\">\n          <div class=\"col-lg-3 col-md-3 form-group\">\n            <label for=\"inputQuickSellReportDateFrom\" class=\"label-control\">De:</label>\n            <input type=\"text\" [textMask]=\"{mask: dateMask}\" class=\"form-control\" id=\"inputQuickSellReportDateFrom\"\n                   (keyup.enter)=\"buildSearchQuery()\"\n                   name=\"dateFrom\" [(ngModel)]=\"reportFilters.dateFrom\" placeholder=\"dd/mm/aaaa\">\n          </div>\n          <div class=\"col-lg-3 col-md-3 form-group\">\n            <label for=\"inputQuickSellReportDateTo\" class=\"label-control\">Até:</label>\n            <input type=\"text\" [textMask]=\"{mask: dateMask}\" class=\"form-control\" id=\"inputQuickSellReportDateTo\"\n                   (keyup.enter)=\"buildSearchQuery()\"\n                   name=\"dateTo\" [(ngModel)]=\"reportFilters.dateTo\" placeholder=\"dd/mm/aaaa\">\n          </div>\n          <div class=\"col-lg-6 col-md-6 form-group\">\n            <label for=\"inputQuickSellFilterType\" class=\"label-control\">Filtro:</label>\n            <select name=\"filterSelected\" id=\"inputQuickSellFilterType\" class=\"form-control\" [(ngModel)]=\"filterSelected\">\n              <option value=\"\"></option>\n              <option value=\"client\">Cliente</option>\n              <option value=\"product\">Produto</option>\n              <option value=\"cashier\">Caixa</option>\n              <option value=\"nfeKey\">Chave/Nfe</option>\n              <option value=\"coo\">Num/NF</option>\n              <option value=\"id\">Código/Venda</option>\n              <option value=\"productGroupFamily\">Grupo/Família</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-3 col-md-3 form-group\">\n            <label for=\"inputQuickSellReportFromSchedule\" class=\"label-control\">Hr/Início:</label>\n            <input type=\"text\" [textMask]=\"{mask: hourMask}\" class=\"form-control\" name=\"fromSchedule\" id=\"inputQuickSellReportFromSchedule\"\n                   [(ngModel)]=\"reportFilters.fromSchedule\" (keyup.enter)=\"buildSearchQuery()\">\n          </div>\n          <div class=\"col-lg-3 col-md-3 form-group\">\n            <label for=\"inputQuickSellReportToSchedule\" class=\"label-control\">Hr/Final:</label>\n            <input type=\"text\" [textMask]=\"{mask: hourMask}\" class=\"form-control\" name=\"toScedule\" id=\"inputQuickSellReportToSchedule\"\n                   [(ngModel)]=\"reportFilters.toSchedule\" (keyup.enter)=\"buildSearchQuery()\">\n          </div>\n          <div class=\"col-lg-6 col-md-6 form-group\" *ngIf=\"filterSelected === 'client'\">\n            <label for=\"inputQuickSellReportClient\" class=\"label-control\">Cliente:</label>\n            <select name=\"inputQuickSellReportClient\" id=\"inputQuickSellReportClient\" class=\"form-control\"\n                    [(ngModel)]=\"reportFilters.client\" (change)=\"insertFilter('Cliente', reportFilters.client.name)\">\n              <option *ngFor=\"let client of clients\" [ngValue]=\"client\">{{client.name}}</option>\n            </select>\n          </div>\n          <div class=\"col-lg-6 col-md-6 form-group\" *ngIf=\"filterSelected === 'product'\">\n            <label for=\"inputQuickSellReportProduct\" class=\"label-control\">Produto:</label>\n            <select name=\"inputQuickSellReportProduct\" id=\"inputQuickSellReportProduct\"\n                    class=\"form-control\" [(ngModel)]=\"reportFilters.product\"\n                    (change)=\"insertFilter('Produto', reportFilters.product.name)\">\n              <option *ngFor=\"let product of products\" [ngValue]=\"product\">{{product.name}}</option>\n            </select>\n          </div>\n          <div class=\"col-lg-3 col-md-3 form-group\" *ngIf=\"filterSelected === 'cashier'\">\n            <label for=\"inputQuickSellReportCashier\" class=\"label-control\">Caixa:</label>\n            <input type=\"number\" class=\"form-control\" name=\"cashier\" [(ngModel)]=\"reportFilters.cashier\"\n                   (keyup)=\"insertFilter('Caixa', reportFilters.cashier)\" id=\"inputQuickSellReportCashier\">\n          </div>\n          <div class=\"col-lg-6 col-md-6 form-group\" *ngIf=\"filterSelected === 'nfeKey'\">\n            <label for=\"inputQuickSellReportNfeKey\" class=\"label-control\">Chave</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"reportFilters.nfeKey\" name=\"nfeKey\"\n                   (keyup.enter)=\"insertFilter('Chave', reportFilters.nfeKey)\" id=\"inputQuickSellReportNfeKey\">\n          </div>\n          <div class=\"col-lg-3 col-md-3 form-group\" *ngIf=\"filterSelected === 'id'\">\n            <label for=\"inputQuickSellReportId\" class=\"label-control\">Código:</label>\n            <input type=\"number\" id=\"inputQuickSellReportId\" class=\"form-control\" name=\"id\"\n                   [(ngModel)]=\"reportFilters.id\" (keyup.enter)=\"insertFilter('Código', reportFilters.id)\">\n          </div>\n          <div class=\"col-lg-3 col-md-3 form-group\" *ngIf=\"filterSelected === 'coo'\">\n            <label for=\"inputQuickSellReportCoo\" class=\"label-control\">Nº NF:</label>\n            <input type=\"number\" id=\"inputQuickSellReportCoo\" class=\"form-control\" name=\"coo\"\n                   (keyup.enter)=\"insertFilter('Nº Nota', reportFilters.coo)\"\n                   [(ngModel)]=\"reportFilters.coo\">\n          </div>\n          <div class=\"col-lg-3 col-md-3 form-group\" *ngIf=\"filterSelected === 'productGroupFamily'\">\n            <label for=\"inputQuickSellReportProductGroup\" class=\"label-control\">Grupo:</label>\n            <select name=\"productGroup\" id=\"inputQuickSellReportProductGroup\" class=\"form-control\"\n                    [(ngModel)]=\"reportFilters.productGroupId\"\n                    (change)=\"listProdFamilyByGroup(); insertFilter('Grupo', reportFilters.productGroupId)\">\n              <option *ngFor=\"let productGroup of productGroups\" [value]=\"productGroup.id\">{{productGroup.name}}</option>\n            </select>\n          </div>\n          <div class=\"col-lg-3 col-md-3 form-group\" *ngIf=\"filterSelected === 'productGroupFamily'\">\n            <label for=\"inputQuickSellFilterProductFamily\" class=\"label-control\">Família:</label>\n            <select (change)=\"insertFilter('Família', reportFilters.productFamilyId)\" name=\"productFamily\"\n                    id=\"inputQuickSellFilterProductFamily\" class=\"form-control\"\n                    [(ngModel)]=\"reportFilters.productFamilyId\">\n              <option *ngFor=\"let productFamily of productFamilies\" [value]=\"productFamily.id\">\n                {{productFamily.name}}\n              </option>\n            </select>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-4 form-group\" *ngIf=\"listFilters.length > 0\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\" >\n            Filtros Inseridos:\n          </div>\n          <div class=\"panel-body\" style=\"background-color: #FFFFAB; color: #ff9900;\">\n            <div class=\"row no-margin no-padding\" *ngFor=\"let filter of listFilters\">\n              <div class=\"col-lg-2 col-md-2 no-padding no-margin\">\n                {{filter.type}}\n              </div>\n              <div class=\"col-lg-8 col-md-8 no-padding no-margin\">\n                {{filter.filter}}\n              </div>\n              <div class=\"col-lg-2 col-md-2 no-padding no-margin\">\n                <span (click)=\"removeFilter(filter)\" class=\"fa fa-trash pull-right\"></span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-12 col-md-12 form-group\">\n        <button type=\"button\" class=\"btn btn-primary pull-right\" (click)=\"buildSearchQuery()\">\n          <span class=\"fa fa-search\"></span> Pesquisar\n        </button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ 442:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"row\">\n    <h2 class=\"text-center\">Relatório Detalhado</h2>\n  </div>\n  <div class=\"row\">\n\n    <div class=\"col-lg-12 col-md-12\">\n      <label class=\"label-control\">Categoria:</label>\n      <input type=\"radio\" name=\"inputReportCategory\" value=\"quickSell\" [(ngModel)]=\"reportCategorySelect\"> Venda Rápida\n      <input type=\"radio\" name=\"inputReportCategory\" value=\"sightSale\" [(ngModel)]=\"reportCategorySelect\"> Venda NFe/Outros\n      <input type=\"radio\" name=\"inputReportCategory\" value=\"liberation\" [(ngModel)]=\"reportCategorySelect\"> Liberação Cliente\n    </div>\n  </div>\n  <div *ngIf=\"reportCategorySelect === 'quickSell'\">\n    <app-quick-sell></app-quick-sell>\n  </div>\n  <div *ngIf=\"reportCategorySelect === 'sightSale'\">\n    <app-sight-sale></app-sight-sale>\n  </div>\n  <div *ngIf=\"reportCategorySelect === 'liberation'\">\n    <app-liberation></app-liberation>\n  </div>\n</div>\n"

/***/ }),

/***/ 443:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"saleResume\">\n  <div class=\"col-lg-12 col-md-12\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">Resumo de Vendas</h3>\n      </div>\n      <div class=\"panel-body\" style=\"background-color: #FFFFAB; color: #ff9900;\">\n        <div class=\"row\">\n          <div class=\"col-lg-3 col-md-3\" *ngIf=\"saleResume.saleTotal && saleResume.saleTotal !== 0\">\n            <label for=\"textSaleResumeSaleTotal\" class=\"label-control\">Total de Vendas:</label>\n            <span id=\"textSaleResumeSaleTotal\">R{{saleResume.saleTotal | currency:'USD':true:'1.2-2'}}</span>\n          </div>\n          <div class=\"col-lg-3 col-md-3\">\n            <label for=\"textSaleResumeNumTotalSales\">Total de Produtos:</label>\n            <span id=\"textSaleResumeNumTotalSales\">{{saleResume.numTotalSales}}</span>\n          </div>\n          <div class=\"col-lg-3 col-md-3\"\n               *ngIf=\"saleResume.productTotalPriceCost && saleResume.productTotalPriceCost !== 0\">\n            <label for=\"textSaleResumeProductTotalPriceCost\">Total de Custos:</label>\n            <span id=\"textSaleResumeProductTotalPriceCost\">R{{saleResume.productTotalPriceCost | currency:'USD':true:'1.2-2'}}</span>\n          </div>\n          <div class=\"col-lg-3 col-md-3\"\n               *ngIf=\"saleResume.productTotalDiscountValue && saleResume.productTotalDiscountValue !== 0\">\n            <label for=\"textSaleResumeProductTotalDiscountValue\">Total Com Descontos:</label>\n            <span id=\"textSaleResumeProductTotalDiscountValue\">R{{saleResume.productTotalDiscountValue | currency:'USD':true:'1.2-2'}}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 444:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"sightSale?.listProductSightSale\">\r\n  <div class=\"col-lg-12 col-md-12\">\r\n    <table class=\"table table-bordered table-striped\">\r\n      <thead>\r\n      <tr>\r\n        <th>Barra</th>\r\n        <th>Nome</th>\r\n        <th class=\"text-center\">CFOP</th>\r\n        <th class=\"text-center\">Quant.</th>\r\n        <th class=\"text-center\">Valor</th>\r\n        <th class=\"text-center\">Subtotal</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr *ngFor=\"let productSightSale of sightSale.listProductSightSale\">\r\n        <td>{{productSightSale.product?.barCode}}</td>\r\n        <td *ngIf=\"productSightSale.product !== null\">{{productSightSale.product?.name}}</td>\r\n        <td class=\"text-center\">{{productSightSale.cfop}}</td>\r\n        <td class=\"text-center\">{{productSightSale.quantity}}</td>\r\n        <td class=\"text-center\">{{productSightSale.value}}</td>\r\n        <td class=\"text-center\">{{productSightSale.subTotal}}</td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 445:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"sightSale\">\n  <div class=\"row\">\n    <div class=\"panel panel-default\" style=\"margin-bottom: 0px;\">\n      <div class=\"panel-heading\">\n        <h2 class=\"panel-title\">\n          Produtos\n          <span class=\"fa fa-shopping-cart\"></span>\n        </h2>\n      </div>\n      <div class=\"panel-body\" style=\"background-color: #FFFFAB; color: #ff9900;\" *ngIf=\"sightSale.listProductSightSale\">\n        <div class=\"row\" *ngFor=\"let productSightSale of sightSale.listProductSightSale\">\n          <div class=\"col-lg-12 col-md-12\">\n            <div class=\"row\">\n              <div class=\"col-lg-1 col-md-1\">\n                <label for=\"textSightSaleProductId\" class=\"label-control\">Cód.:</label>\n                <span id=\"textSightSaleProductId\">{{productSightSale.product.id}}</span>\n              </div>\n              <div class=\"col-lg-3 col-md-3\">\n                <label for=\"textSightSaleProductName\" class=\"label-control\">Nome:</label>\n                <span id=\"textSightSaleProductName\">{{productSightSale.product.name}}</span>\n              </div>\n              <div class=\"col-lg-3 col-md-3\">\n                <label for=\"textSightSaleProductBarCode\" class=\"label-control\">Barra:</label>\n                <span id=\"textSightSaleProductBarCode\">{{productSightSale.product.barCode}}</span>\n              </div>\n              <div class=\"col-lg-1 col-md-1\">\n                <label for=\"textSightSaleProductQuantity\" class=\"label-control\">Quant.:</label>\n                <span id=\"textSightSaleProductQuantity\">{{productSightSale.quantity}}</span>\n              </div>\n              <div class=\"col-lg-1 col-md-1\">\n                <label for=\"textSightSaleProductValue\" class=\"label-control\">Valor:</label>\n                <span id=\"textSightSaleProductValue\">{{productSightSale.value}}</span>\n              </div>\n              <div class=\"col-lg-2 col-md-2\">\n                <label for=\"textSightSaleProductSubtotal\" class=\"label-control\">Subtotal:</label>\n                <span id=\"textSightSaleProductSubtotal\">{{productSightSale.subTotal}}</span>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-lg-1 col-md-1\">\n                <label for=\"textSightSaleProductCst\" class=\"label-control\">CST:</label>\n                <span id=\"textSightSaleProductCst\">{{productSightSale.cst}}</span>\n              </div>\n              <div class=\"col-lg-3 col-md-3\">\n                <label for=\"textSightSaleProductCfop\" class=\"label-control\">CFOP:</label>\n                <span id=\"textSightSaleProductCfop\">{{productSightSale.cfop}}</span>\n              </div>\n              <div class=\"col-lg-3 col-md-3\">\n                <label for=\"textSightSaleProductNCM\" class=\"label-control\">NCM:</label>\n                <span id=\"textSightSaleProductNCM\">{{productSightSale.ncm}}</span>\n              </div>\n              <div class=\"col-lg-2 col-md-2\">\n                <label for=\"textSightProductGroup\" class=\"label-control\">Grupo:</label>\n                <span id=\"textSightProductGroup\">{{productSightSale.product.productGroup?.name}}</span>\n              </div>\n              <div class=\"col-lg-2 col-md-2\">\n                <label for=\"textSightProductFamily\" class=\"label-control\">Família:</label>\n                <span id=\"textSightProductFamily\">{{productSightSale.product.productFamily?.name}}</span>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-lg-4 col-md-4\" *ngIf=\"productSightSale.aliquotICMS\">\n                <label for=\"textSightProductAliquotICMS\" class=\"label-control\">Aliq. ICMS:</label>\n                <span id=\"textSightProductAliquotICMS\">{{productSightSale.aliquotICMS}}</span>\n              </div>\n              <div class=\"col-lg-3 col-md-3\" *ngIf=\"productSightSale.product.productOther?.freightValue\">\n                <label for=\"textSightProductFreightValue\" class=\"label-control\">Val./Frete:</label>\n                <span id=\"textSightProductFreightValue\">{{productSightSale.product.productOther?.freightValue}}</span>\n              </div>\n              <div class=\"col-lg-2 col-md-2\" *ngIf=\"productSightSale.product.productOther?.insuranceValue\">\n                <label for=\"textSightProductInsuranceValue\" class=\"label-control\">Val./Seguro:</label>\n                <span id=\"textSightProductInsuranceValue\">{{productSightSale.product.productOther?.insuranceValue}}</span>\n              </div>\n              <div class=\"col-lg-2 col-md-2\" *ngIf=\"productSightSale.product.productOther.discountValue\">\n                <label for=\"textSightProductDiscountValue\" class=\"label-control\">Val./Seguro:</label>\n                <span id=\"textSightProductDiscountValue\">{{productSightSale.product.productOther?.discountValue}}</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\" *ngIf=\"sightSale.client\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h2 class=\"panel-title\">\n          Cliente\n          <span class=\"fa fa-user\"></span>\n        </h2>\n      </div>\n      <div class=\"panel-body\" style=\"background-color: #FFFFAB; color: #ff9900;\">\n        <div class=\"row\">\n          <div class=\"col-lg-1 col-md-1\">\n            <label for=\"textSightSaleClientId\" class=\"label-control\">Cód.:</label>\n            <span id=\"textSightSaleClientId\">{{sightSale.client.id}}</span>\n          </div>\n          <div class=\"col-lg-3 col-md-3\">\n            <label for=\"textSightSaleClientName\" class=\"label-control\">Nome:</label>\n            <span id=\"textSightSaleClientName\">{{sightSale.client.name}}</span>\n          </div>\n          <div class=\"col-lg-3 col-md-3\" *ngIf=\"sightSale.client.cpf\">\n            <label for=\"textSightSaleClientCPF\" class=\"label-control\">CPF:</label>\n            <span id=\"textSightSaleClientCPF\">{{sightSale.client.cpf}}</span>\n          </div>\n          <div class=\"col-lg-3 col-md-3\" *ngIf=\"sightSale.client.cnpj\">\n            <label for=\"textSightSaleClientCNPJ\" class=\"label-control\">CNPJ:</label>\n            <span id=\"textSightSaleClientCNPJ\">{{sightSale.client.cnpj}}</span>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-4 col-md-4\">\n            <label for=\"textSightSaleClientAddress\" class=\"label-control\">Endereço:</label>\n            <span id=\"textSightSaleClientAddress\">{{sightSale.client.address}}</span>\n          </div>\n          <div class=\"col-lg-3 col-md-3\" *ngIf=\"sightSale.client.complement\">\n            <label for=\"textSightSaleClientComplement\" class=\"label-control\">Comp.:</label>\n            <span id=\"textSightSaleClientComplement\">{{sightSale.client.complement}}</span>\n          </div>\n          <div class=\"col-lg-1 col-md-1\">\n            <label for=\"textSightSaleClientAddressNumber\" class=\"label-control\">Nº:</label>\n            <span id=\"textSightSaleClientAddressNumber\">{{sightSale.client.addressNumber}}</span>\n          </div>\n          <div class=\"col-lg-3 col-md-3\">\n            <label for=\"textSightSaleClientCity\" class=\"label-control\">Cidade:</label>\n            <span id=\"textSightSaleClientCity\">{{sightSale.client.city}}</span>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-4 col-md-4\">\n            <label for=\"textSightSaleClientNeighborhood\" class=\"label-control\">Bairro:</label>\n            <span id=\"textSightSaleClientNeighborhood\">{{sightSale.client.neighborhood}}</span>\n          </div>\n          <div class=\"col-lg-4 col-md-4\" *ngIf=\"sightSale.client.cel1\">\n            <label for=\"textSightSaleClientCel1\" class=\"label-control\">Tel 1:</label>\n            <span id=\"textSightSaleClientCel1\">{{sightSale.client.cel1}}</span>\n          </div>\n          <div class=\"col-lg-4 col-md-4\" *ngIf=\"sightSale.client.cel2\">\n            <label for=\"textSightSaleClientCel2\" class=\"label-control\">Tel 2:</label>\n            <span id=\"textSightSaleClientCel2\">{{sightSale.client.cel2}}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 446:
/***/ (function(module, exports) {

module.exports = "<app-report-filters [reportType]=\"sightSale\" (notify)=\"onNotify($event)\"></app-report-filters>\n<div class=\"row\" *ngIf=\"listSightSale.length > 0\">\n  <div class=\"col-lg-12 col-md-12\">\n    <tabset>\n      <tab heading=\"Resumo\">\n        <table class=\"table table-bordered table-striped\">\n          <thead>\n            <tr>\n              <th class=\"text-center\"></th>\n              <th class=\"text-center\">Cód.</th>\n              <th class=\"text-center\">COO</th>\n              <th class=\"text-center\">Data/Hora</th>\n              <th class=\"text-center\">Tipo</th>\n              <th class=\"text-left\">Cliente</th>\n              <th class=\"text-center\">Caixa</th>\n              <th class=\"text-left\">Chave NFE</th>\n              <th class=\"text-center\">Total/Desc.</th>\n              <th class=\"text-center\">Total</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let sightSale of listSightSale | paginate: { itemsPerPage: 5, currentPage: p }\" id=\"sightSaleRow_{{sightSale.id}}\">\n              <td class=\"text-center\">\n                <div class=\"radio\">\n                  <label><input type=\"radio\" name=\"radioSelectSightSale\"\n                                [checked]=\"sightSaleSelected.id === sightSale.id\"\n                                (change)=\"selectRow($event, sightSale, sightSale.id)\"></label>\n                </div>\n              </td>\n              <td class=\"text-center\">{{sightSale.id}}</td>\n              <td class=\"text-center\">{{sightSale.coo}}</td>\n              <td class=\"text-center\">\n                {{getConvertedDate(sightSale.sellDate, 'DD/MM/YYYY')}} &nbsp; {{sightSale.schedule}}\n              </td>\n              <td class=\"text-center\">{{sightSale.type}}</td>\n              <td class=\"text-left\">{{sightSale.client?.name}}</td>\n              <td class=\"text-center\">{{sightSale.cashier}}</td>\n              <td class=\"text-left\">{{sightSale.nfeKey}}</td>\n              <td class=\"text-center\">{{sightSale.totalDiscount}}</td>\n              <td class=\"text-center\">{{sightSale.total}}</td>\n            </tr>\n          </tbody>\n        </table>\n        <div class=\"row\">\n          <div class=\"col-lg-12 col-md-12\">\n            <pagination-controls previousLabel=\"Anterior\"\n                                 nextLabel=\"Próximo\"\n                                 (pageChange)=\"p = $event\">\n            </pagination-controls>\n          </div>\n        </div>\n        <app-sale-resume [saleResume]=\"saleResume\"></app-sale-resume>\n      </tab>\n      <tab heading=\"Produtos\">\n        <app-product-sight-sale [sightSale]=\"sightSaleSelected\"></app-product-sight-sale>\n      </tab>\n      <tab heading=\"Detalhamento\">\n        <app-sight-sale-details [sightSale]=\"sightSaleSelected\"></app-sight-sale-details>\n      </tab>\n    </tabset>\n\n  </div>\n</div>\n"

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientService = (function () {
    function ClientService(http) {
        this.http = http;
        this.urlClient = '/client';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
    }
    ClientService.prototype.list = function () {
        return this.http.get(this.urlClient, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    ClientService.prototype.searchClients = function (search) {
        this.params.set('search', search);
        return this.http.get(this.urlClient + '/search', { headers: this.headers, search: this.params }).map(function (res) { return res.json(); });
    };
    return ClientService;
}());
ClientService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], ClientService);

var _a;
//# sourceMappingURL=client.service.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiberationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LiberationService = (function () {
    function LiberationService(http) {
        this.http = http;
        this.urlLiberationReport = '/liberation/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
    }
    LiberationService.prototype.listLiberation = function () {
        return this.http.get(this.urlLiberationReport, { headers: this.headers }).map(function (res) { return res.json(); });
    };
    LiberationService.prototype.update = function (liberation) {
        this.params.set('liberationId', liberation.id.toString());
        return this.http.put(this.urlLiberationReport + liberation.id, liberation, { headers: this.headers, search: this.params }).map(function (res) { return res.json(); });
    };
    LiberationService.prototype.getVersions = function () {
        return this.http.get(this.urlLiberationReport + '/versions', { headers: this.headers }).map(function (res) { return res.json(); });
    };
    return LiberationService;
}());
LiberationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], LiberationService);

var _a;
//# sourceMappingURL=liberation.service.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuickSell; });
var QuickSell = (function () {
    function QuickSell() {
    }
    return QuickSell;
}());

//# sourceMappingURL=quick-sell.js.map

/***/ }),

/***/ 487:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(318);


/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaleResume; });
var SaleResume = (function () {
    function SaleResume() {
        this.saleTotal = 0;
        this.numTotalSales = 0;
        this.productTotalPriceCost = 0;
        this.productTotalDiscountValue = 0;
    }
    return SaleResume;
}());

//# sourceMappingURL=sale-resume.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SightSale; });
var SightSale = (function () {
    function SightSale() {
    }
    return SightSale;
}());

//# sourceMappingURL=sight-sale.js.map

/***/ })

},[487]);
//# sourceMappingURL=main.bundle.js.map
