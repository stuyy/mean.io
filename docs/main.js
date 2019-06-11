(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    padding: 15px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<nav class=\"jumbotron\">\n    <h1 style=\"text-align: center;\">{{name}} <i class=\"fas fa-keyboard\"></i></h1>\n    <h2 style=\"text-align: center;\">{{subtitle}}</h2>\n</nav>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.name = "MEAN.IO";
        this.subtitle = "More Excellent Articles Now";
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_guestpage_guestpage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/guestpage/guestpage.component */ "./src/app/components/guestpage/guestpage.component.ts");
/* harmony import */ var _components_registerform_registerform_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/registerform/registerform.component */ "./src/app/components/registerform/registerform.component.ts");
/* harmony import */ var _components_loginform_loginform_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/loginform/loginform.component */ "./src/app/components/loginform/loginform.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _components_articleposter_articleposter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/articleposter/articleposter.component */ "./src/app/components/articleposter/articleposter.component.ts");
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @tinymce/tinymce-angular */ "./node_modules/@tinymce/tinymce-angular/fesm5/tinymce-tinymce-angular.js");
/* harmony import */ var _components_article_article_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/article/article.component */ "./src/app/components/article/article.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var appRoutes = [
    {
        path: 'guest', component: _components_guestpage_guestpage_component__WEBPACK_IMPORTED_MODULE_6__["GuestpageComponent"]
    },
    {
        path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    },
    {
        path: 'register', component: _components_registerform_registerform_component__WEBPACK_IMPORTED_MODULE_7__["RegisterformComponent"]
    },
    {
        path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    },
    {
        path: '', redirectTo: '/dashboard', pathMatch: 'full'
    },
    {
        path: 'postarticle', component: _components_articleposter_articleposter_component__WEBPACK_IMPORTED_MODULE_11__["ArticleposterComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Boolean)
    ], AppModule.prototype, "isLoggedIn", void 0);
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _components_guestpage_guestpage_component__WEBPACK_IMPORTED_MODULE_6__["GuestpageComponent"],
                _components_registerform_registerform_component__WEBPACK_IMPORTED_MODULE_7__["RegisterformComponent"],
                _components_loginform_loginform_component__WEBPACK_IMPORTED_MODULE_8__["LoginformComponent"],
                _components_articleposter_articleposter_component__WEBPACK_IMPORTED_MODULE_11__["ArticleposterComponent"],
                _components_article_article_component__WEBPACK_IMPORTED_MODULE_13__["ArticleComponent"]
            ],
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbAlertModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_12__["EditorModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes),
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].production })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

/**
 * ENtry point file
 */ 


/***/ }),

/***/ "./src/app/components/article/article.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/article/article.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/article/article.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/article/article.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  article works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/article/article.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/article/article.component.ts ***!
  \*********************************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArticleComponent = /** @class */ (function () {
    function ArticleComponent() {
    }
    ArticleComponent.prototype.ngOnInit = function () {
    };
    ArticleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article',
            template: __webpack_require__(/*! ./article.component.html */ "./src/app/components/article/article.component.html"),
            styles: [__webpack_require__(/*! ./article.component.css */ "./src/app/components/article/article.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArticleComponent);
    return ArticleComponent;
}());



/***/ }),

/***/ "./src/app/components/articleposter/articleposter.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/articleposter/articleposter.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".editor  {\r\n    width: 80%;\r\n    margin:  0 auto;\r\n}\r\n.main {\r\n    width: 60%;\r\n    margin: 0 auto;\r\n}"

/***/ }),

/***/ "./src/app/components/articleposter/articleposter.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/articleposter/articleposter.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n    <nav class=\"navbar navbar-light\">\n        <a class=\"navbar-brand\" routerLink=\"/guest\">Home</a>\n        <a class=\"navbar-brand\" routerLink=\"/postarticle\">Post an Article</a>\n        <a class=\"navbar-brand\" href=\"http://localhost:3000/logout\" >Logout</a>\n    </nav>\n<div class=\"main\">\n    <div class=\"editor\">\n      <p *ngFor=\"let err of errors\">\n          <ngb-alert type=\"danger\" (close)=\"close(err)\">{{ err }}</ngb-alert>\n      </p>\n      <ngb-alert type=\"success\" *ngIf=\"success\" (close)=\"closeSuccess()\">{{ successMsg }}</ngb-alert>\n      <h1>Publish an Article</h1>\n      <label style=\"font-size:24px;\">Title</label>\n      <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\" [(ngModel)]=\"title\" name=\"title\"  placeholder=\"Example input\">\n      <hr>\n      <label style=\"font-size:24px;\">Write Something...</label>\n      <editor [formControl]=\"name\" apiKey=\"uu8jw6i04totre495kryqx8s3glyiovkqet2fhdp2kzamrwz\"  [init]=\"{plugins: 'preview'}\"></editor>\n      <button type=\"button\" class=\"btn btn-primary\" style=\"float:right;\" (click)=\"saveArticle()\">Submit</button>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/articleposter/articleposter.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/articleposter/articleposter.component.ts ***!
  \*********************************************************************/
/*! exports provided: ArticleposterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleposterComponent", function() { return ArticleposterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArticleposterComponent = /** @class */ (function () {
    function ArticleposterComponent(router) {
        this.router = router;
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.router = router;
        this.errors = [];
        this.title = '';
        this.success = false;
    }
    ArticleposterComponent.prototype.ngOnInit = function () {
        var _this = this;
        axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('http://localhost:3000/isloggedin', { withCredentials: true })
            .then(function (res) {
            console.log("User is authenticated.");
        })
            .catch(function (err) {
            console.log("User is not authenticated.");
            _this.router.navigate(['/login']);
        });
    };
    ArticleposterComponent.prototype.saveArticle = function () {
        var _this = this;
        this.errors = [];
        this.success = false;
        if (this.name.value.length < 100) {
            this.errors.push("Article needs to be at least 100 characters!");
            return;
        }
        if (this.title.length === 0) {
            this.errors.push("You need a title!");
            return;
        }
        else {
            axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('http://localhost:3000/article/publish', { data: this.name.value, title: this.title }, { withCredentials: true })
                .then(function (res) {
                _this.success = true;
                _this.successMsg = 'Successfully published your article!';
                _this.title = '';
                _this.name.reset();
            }).catch(function (err) { return console.log(err); });
        }
    };
    ArticleposterComponent.prototype.close = function (err) {
        this.errors.splice(this.errors.indexOf(err), 1);
    };
    ArticleposterComponent.prototype.closeSuccess = function () {
        this.success = false;
        this.successMsg = '';
    };
    ArticleposterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-articleposter',
            template: __webpack_require__(/*! ./articleposter.component.html */ "./src/app/components/articleposter/articleposter.component.html"),
            styles: [__webpack_require__(/*! ./articleposter.component.css */ "./src/app/components/articleposter/articleposter.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ArticleposterComponent);
    return ArticleposterComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light\">\n    <a class=\"navbar-brand\" routerLink=\"/guest\">Home</a>\n    <a class=\"navbar-brand\" routerLink=\"/postarticle\">Post an Article</a>\n    <a class=\"navbar-brand\" href=\"#\" (click)=\"logout($event)\">Logout</a>\n</nav>\n<div>\n  <h1 style=\"padding-left:40px;\">Articles</h1>\n  <hr>\n  <ul *ngFor=\"let article of articles\">\n    <h2>{{article.title}}</h2>\n    <div [innerHTML]=\"article.text\">{{article.text}}</div>\n    <span>Published On: {{article.date}}</span>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router) {
        this.router = router;
        this.router = router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Need to fetch articles from the database.
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('http://localhost:3000/article/get')
            .then(function (res) {
            _this.articles = res.data;
        })
            .catch(function (err) { return console.log(err); });
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('http://localhost:3000/isloggedin', { withCredentials: true })
            .then(function (res) {
            console.log("User is authenticated.");
        })
            .catch(function (err) {
            console.log("User is not authenticated.");
            _this.router.navigate(['/guest']);
        });
    };
    DashboardComponent.prototype.logout = function ($event) {
        var _this = this;
        $event.preventDefault();
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('http://localhost:3000/logout', { withCredentials: true })
            .then(function (res) {
            console.log(res);
            _this.router.navigate(['/guest']);
        }).catch(function (err) { return console.log(err); });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/guestpage/guestpage.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/guestpage/guestpage.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-header {\r\n    padding-left: 40px;\r\n}\r\n\r\n.guest-main {\r\n    width: 60%;\r\n    margin: 0 auto;\r\n}"

/***/ }),

/***/ "./src/app/components/guestpage/guestpage.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/guestpage/guestpage.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"guest-main\">\r\n    <nav class=\"navbar navbar-light\">\r\n        <a class=\"navbar-brand\" routerLink=\"/guest\">Home</a>\r\n        <a class=\"navbar-brand\" routerLink=\"/register\">Register</a>\r\n        <a class=\"navbar-brand\" routerLink=\"/login\">Login</a>\r\n    </nav>\r\n    <div class=\"top-header\">\r\n        <h1>Articles</h1>\r\n        <span *ngIf=\"!isLoggedIn\">You are viewing as a Guest</span>\r\n    </div>\r\n    <hr>\r\n    <ul *ngFor=\"let article of articles\">\r\n        <h2>{{article.title}}</h2>\r\n        <p [innerHTML]=\"article.text\"></p>\r\n        <span>Published on: {{article.date}}</span><br/>\r\n        <span>Published by: {{article.author}}</span>\r\n        <hr>\r\n    </ul>\r\n</div>"

/***/ }),

/***/ "./src/app/components/guestpage/guestpage.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/guestpage/guestpage.component.ts ***!
  \*************************************************************/
/*! exports provided: GuestpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestpageComponent", function() { return GuestpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GuestpageComponent = /** @class */ (function () {
    function GuestpageComponent(router) {
        this.router = router;
        this.router = router;
    }
    GuestpageComponent.prototype.ngOnInit = function () {
        var _this = this;
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('http://localhost:3000/article/get')
            .then(function (res) {
            console.log(res);
            _this.articles = res.data;
        }).catch(function (err) { return console.log(err); });
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('http://localhost:3000/isloggedin', { withCredentials: true })
            .then(function (res) {
            _this.isLoggedIn = true;
            _this.router.navigate(['/dashboard']);
        }).catch(function (err) {
            _this.isLoggedIn = false;
        });
    };
    GuestpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-guestpage',
            template: __webpack_require__(/*! ./guestpage.component.html */ "./src/app/components/guestpage/guestpage.component.html"),
            styles: [__webpack_require__(/*! ./guestpage.component.css */ "./src/app/components/guestpage/guestpage.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], GuestpageComponent);
    return GuestpageComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.login-nav {\r\n    width: 60%;\r\n    margin: 0 auto;\r\n}"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light login-nav\">\r\n    <a class=\"navbar-brand\" routerLink=\"/guest\">Home</a>\r\n    <a class=\"navbar-brand\" routerLink=\"/register\">Register</a>\r\n    <a class=\"navbar-brand\" routerLink=\"/login\">Login</a>\r\n</nav>\r\n<app-loginform></app-loginform>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/loginform/loginform.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/loginform/loginform.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form {\r\n    width: 50%;\r\n    margin: 0 auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/loginform/loginform.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/loginform/loginform.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form\">\n  <p ng-if=\"errors.length > 0\" *ngFor=\"let err of errors\">\n      <ngb-alert type=\"danger\">{{err}}</ngb-alert>\n  </p>\n  <div class=\"form-group\">\n    <label>Email Address</label>\n    <input type=\"email\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\" placeholder=\"Enter email\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Password\">\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\" (click)=\"login($event)\">Login</button>\n</form>"

/***/ }),

/***/ "./src/app/components/loginform/loginform.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/loginform/loginform.component.ts ***!
  \*************************************************************/
/*! exports provided: LoginformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginformComponent", function() { return LoginformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginformComponent = /** @class */ (function () {
    function LoginformComponent(router) {
        this.router = router;
        this.router = router;
    }
    LoginformComponent.prototype.ngOnInit = function () {
        var _this = this;
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('http://localhost:3000/isloggedin', { withCredentials: true })
            .then(function (res) {
            console.log("User is authenticated.");
            _this.router.navigate(['/dashboard']);
        })
            .catch(function (err) {
            console.log("User is not authenticated.");
            _this.router.navigate(['/login']);
        });
    };
    LoginformComponent.prototype.login = function ($event) {
        var _this = this;
        this.errors = [];
        $event.preventDefault();
        if (this.password === undefined || this.username === undefined) {
            this.errors.push('Invalid Credentials');
        }
        else {
            console.log("Yo");
            axios__WEBPACK_IMPORTED_MODULE_2___default()('http://localhost:3000/login', {
                method: "post",
                data: { username: this.username, password: this.password },
                withCredentials: true
            }).then(function (res) {
                console.log(res);
                _this.router.navigate(['/dashboard']);
            })
                .catch(function (err) {
                _this.router.navigate(['/guest']);
            });
        }
    };
    LoginformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loginform',
            template: __webpack_require__(/*! ./loginform.component.html */ "./src/app/components/loginform/loginform.component.html"),
            styles: [__webpack_require__(/*! ./loginform.component.css */ "./src/app/components/loginform/loginform.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginformComponent);
    return LoginformComponent;
}());



/***/ }),

/***/ "./src/app/components/registerform/registerform.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/registerform/registerform.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form {\r\n    width: 50%;\r\n    margin: 0 auto;\r\n}\r\n\r\n.register-nav {\r\n    width: 60%;\r\n    margin: 0 auto;\r\n}"

/***/ }),

/***/ "./src/app/components/registerform/registerform.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/registerform/registerform.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light register-nav\">\n    <a class=\"navbar-brand\" routerLink=\"/guest\">Home</a>\n    <a class=\"navbar-brand\" routerLink=\"/register\">Register</a>\n    <a class=\"navbar-brand\" routerLink=\"/login\">Login</a>\n</nav>\n<form class=\"form\">\n  <p ng-if=\"errors.length > 0\" *ngFor=\"let err of errors\">\n      <ngb-alert type=\"danger\">{{err}}</ngb-alert>\n  </p>\n  <div class=\"form-group\">\n    <label>Email Address</label>\n    <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Enter email\">\n  </div>\n  <div class=\"form-group\">\n    <label>Your Name</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"Enter your name\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Password\">\n  </div>\n  <div class=\"form-group\">\n    <label>Confirm Password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"confirm\" name=\"confirm\" placeholder=\"Confirm Password\">\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\" (click)=\"register($event)\">Register</button>\n</form>"

/***/ }),

/***/ "./src/app/components/registerform/registerform.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/registerform/registerform.component.ts ***!
  \*******************************************************************/
/*! exports provided: RegisterformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterformComponent", function() { return RegisterformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterformComponent = /** @class */ (function () {
    function RegisterformComponent(router) {
        this.router = router;
        this.email = '';
        this.router = router;
    }
    RegisterformComponent.prototype.ngOnInit = function () {
        var _this = this;
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('http://localhost:3000/isloggedin', { withCredentials: true })
            .then(function (res) {
            console.log("User is authenticated.");
            _this.router.navigate(['/dashboard']);
        })
            .catch(function (err) {
            console.log("User is not authenticated.");
        });
    };
    RegisterformComponent.prototype.register = function ($event) {
        var _this = this;
        this.errors = [];
        $event.preventDefault();
        axios__WEBPACK_IMPORTED_MODULE_1___default()("http://localhost:3000/register", {
            method: "post",
            data: { email: this.email, name: this.name, password: this.password, confirm: this.confirm },
            withCredentials: true
        }).then(function (res) {
            if (res.status === 201) {
                _this.router.navigate(['/login']);
            }
        })
            .catch(function (err) {
            err.response.data.errors.forEach(function (element) {
                _this.errors.push(element.msg);
            });
        });
    };
    RegisterformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registerform',
            template: __webpack_require__(/*! ./registerform.component.html */ "./src/app/components/registerform/registerform.component.html"),
            styles: [__webpack_require__(/*! ./registerform.component.css */ "./src/app/components/registerform/registerform.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterformComponent);
    return RegisterformComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Anson\Documents\blogger-io\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map