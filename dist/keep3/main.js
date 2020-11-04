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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<router-outlet></router-outlet>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _note_note_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./note/note.component */ "./src/app/note/note.component.ts");
/* harmony import */ var _services_notes_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/notes.service */ "./src/app/services/notes.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_router_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/router.service */ "./src/app/services/router.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _can_activate_route_guard__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./can-activate-route.guard */ "./src/app/can-activate-route.guard.ts");
/* harmony import */ var _note_view_note_view_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./note-view/note-view.component */ "./src/app/note-view/note-view.component.ts");
/* harmony import */ var _list_view_list_view_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./list-view/list-view.component */ "./src/app/list-view/list-view.component.ts");
/* harmony import */ var _edit_note_view_edit_note_view_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./edit-note-view/edit-note-view.component */ "./src/app/edit-note-view/edit-note-view.component.ts");
/* harmony import */ var _edit_note_opener_edit_note_opener_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./edit-note-opener/edit-note-opener.component */ "./src/app/edit-note-opener/edit-note-opener.component.ts");
/* harmony import */ var _note_taker_note_taker_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./note-taker/note-taker.component */ "./src/app/note-taker/note-taker.component.ts");






























var appRoutes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"] },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_22__["DashboardComponent"],
        canActivate: [_can_activate_route_guard__WEBPACK_IMPORTED_MODULE_23__["CanActivateRouteGuard"]],
        children: [
            {
                path: 'view/noteview', component: _note_view_note_view_component__WEBPACK_IMPORTED_MODULE_24__["NoteViewComponent"]
            },
            {
                path: 'view/listview', component: _list_view_list_view_component__WEBPACK_IMPORTED_MODULE_25__["ListViewComponent"]
            },
            {
                path: '', redirectTo: 'view/noteview', pathMatch: 'full'
            },
            {
                path: 'note/:noteId/edit', component: _edit_note_opener_edit_note_opener_component__WEBPACK_IMPORTED_MODULE_27__["EditNoteOpenerComponent"], outlet: 'noteEditOutlet'
            }
        ]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"],
                _note_note_component__WEBPACK_IMPORTED_MODULE_17__["NoteComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_22__["DashboardComponent"],
                _note_view_note_view_component__WEBPACK_IMPORTED_MODULE_24__["NoteViewComponent"],
                _list_view_list_view_component__WEBPACK_IMPORTED_MODULE_25__["ListViewComponent"],
                _edit_note_view_edit_note_view_component__WEBPACK_IMPORTED_MODULE_26__["EditNoteViewComponent"],
                _edit_note_opener_edit_note_opener_component__WEBPACK_IMPORTED_MODULE_27__["EditNoteOpenerComponent"],
                _note_taker_note_taker_component__WEBPACK_IMPORTED_MODULE_28__["NoteTakerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [_services_notes_service__WEBPACK_IMPORTED_MODULE_18__["NotesService"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_19__["AuthenticationService"], _services_router_service__WEBPACK_IMPORTED_MODULE_20__["RouterService"], _can_activate_route_guard__WEBPACK_IMPORTED_MODULE_23__["CanActivateRouteGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]],
            entryComponents: [_edit_note_view_edit_note_view_component__WEBPACK_IMPORTED_MODULE_26__["EditNoteViewComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/can-activate-route.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/can-activate-route.guard.ts ***!
  \*********************************************/
/*! exports provided: CanActivateRouteGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanActivateRouteGuard", function() { return CanActivateRouteGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_router_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/router.service */ "./src/app/services/router.service.ts");




var CanActivateRouteGuard = /** @class */ (function () {
    function CanActivateRouteGuard(authService, routeService) {
        this.authService = authService;
        this.routeService = routeService;
    }
    CanActivateRouteGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        var booleanPromise = this.authService.isUserAuthenticated(this.authService.getBearerToken());
        return booleanPromise.then(function (authenticated) {
            if (!authenticated) {
                _this.routeService.routeToLogin();
            }
            return authenticated;
        });
    };
    CanActivateRouteGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _services_router_service__WEBPACK_IMPORTED_MODULE_3__["RouterService"]])
    ], CanActivateRouteGuard);
    return CanActivateRouteGuard;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-note-taker></app-note-taker>\n<router-outlet></router-outlet>\n<router-outlet name=\"noteEditOutlet\"></router-outlet>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_notes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/notes.service */ "./src/app/services/notes.service.ts");



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(notesService) {
        this.notesService = notesService;
        this.notesService.fetchNotesFromServer();
    }
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_notes_service__WEBPACK_IMPORTED_MODULE_2__["NotesService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/edit-note-opener/edit-note-opener.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/edit-note-opener/edit-note-opener.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtbm90ZS1vcGVuZXIvZWRpdC1ub3RlLW9wZW5lci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/edit-note-opener/edit-note-opener.component.html":
/*!******************************************************************!*\
  !*** ./src/app/edit-note-opener/edit-note-opener.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit-note-opener/edit-note-opener.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/edit-note-opener/edit-note-opener.component.ts ***!
  \****************************************************************/
/*! exports provided: EditNoteOpenerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditNoteOpenerComponent", function() { return EditNoteOpenerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _edit_note_view_edit_note_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../edit-note-view/edit-note-view.component */ "./src/app/edit-note-view/edit-note-view.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var EditNoteOpenerComponent = /** @class */ (function () {
    function EditNoteOpenerComponent(dialog, route) {
        this.dialog = dialog;
        this.route = route;
        var noteId = +this.route.snapshot.paramMap.get('noteId');
        var editDialog = this.dialog.open(_edit_note_view_edit_note_view_component__WEBPACK_IMPORTED_MODULE_3__["EditNoteViewComponent"], {
            data: {
                note: noteId,
            }
        });
    }
    EditNoteOpenerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-note-opener',
            template: __webpack_require__(/*! ./edit-note-opener.component.html */ "./src/app/edit-note-opener/edit-note-opener.component.html"),
            styles: [__webpack_require__(/*! ./edit-note-opener.component.css */ "./src/app/edit-note-opener/edit-note-opener.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], EditNoteOpenerComponent);
    return EditNoteOpenerComponent;
}());



/***/ }),

/***/ "./src/app/edit-note-view/edit-note-view.component.css":
/*!*************************************************************!*\
  !*** ./src/app/edit-note-view/edit-note-view.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".keep-c-note-edit-container{\n\tdisplay: flex;\n\tflex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1ub3RlLXZpZXcvZWRpdC1ub3RlLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9lZGl0LW5vdGUtdmlldy9lZGl0LW5vdGUtdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmtlZXAtYy1ub3RlLWVkaXQtY29udGFpbmVye1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/edit-note-view/edit-note-view.component.html":
/*!**************************************************************!*\
  !*** ./src/app/edit-note-view/edit-note-view.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"keep-c-note-edit-container\">\n<label class=\"error-message\">{{ errMessage }}</label>\n  <mat-form-field> \n    <input [(ngModel)]=\"note.title\" name=\"editTitle\" matInput placeholder=\"Title\" type=\"text\">\n  </mat-form-field>\n  <mat-form-field>\n    <textarea [(ngModel)]=\"note.text\" name=\"editText\" matInput placeholder=\"Text\"></textarea>\n  </mat-form-field>\n  <mat-form-field>\n  <mat-select name=\"editStatus\" placeholder=\"Select state\" [(ngModel)]=\"note.state\">\n    <mat-option *ngFor=\"let state of states\" [value]=\"state\">\n      {{ state }}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n  <div class=\"keep-c-done-wrapper\">\n    <button mat-button (click)=\"onSave()\">Save</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/edit-note-view/edit-note-view.component.ts":
/*!************************************************************!*\
  !*** ./src/app/edit-note-view/edit-note-view.component.ts ***!
  \************************************************************/
/*! exports provided: EditNoteViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditNoteViewComponent", function() { return EditNoteViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _services_router_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/router.service */ "./src/app/services/router.service.ts");
/* harmony import */ var _services_notes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/notes.service */ "./src/app/services/notes.service.ts");





var EditNoteViewComponent = /** @class */ (function () {
    function EditNoteViewComponent(matDialogRef, routeService, notesService, data) {
        this.matDialogRef = matDialogRef;
        this.routeService = routeService;
        this.notesService = notesService;
        this.data = data;
        this.states = ['not-started', 'started', 'completed'];
    }
    EditNoteViewComponent.prototype.ngOnInit = function () {
        this.note = this.notesService.getNoteById(this.data.note);
    };
    EditNoteViewComponent.prototype.ngOnDestroy = function () {
        this.routeService.routeBack();
    };
    EditNoteViewComponent.prototype.onSave = function () {
        var _this = this;
        this.notesService.editNote(this.note).subscribe(function (editedNote) {
            _this.matDialogRef.close();
        }, function (err) {
            _this.errMessage = err.message;
        });
    };
    EditNoteViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-note-view',
            template: __webpack_require__(/*! ./edit-note-view.component.html */ "./src/app/edit-note-view/edit-note-view.component.html"),
            styles: [__webpack_require__(/*! ./edit-note-view.component.css */ "./src/app/edit-note-view/edit-note-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _services_router_service__WEBPACK_IMPORTED_MODULE_3__["RouterService"],
            _services_notes_service__WEBPACK_IMPORTED_MODULE_4__["NotesService"], Object])
    ], EditNoteViewComponent);
    return EditNoteViewComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".keep-c-toggle-view {\n\twidth: 100%;\n\tmargin-left: 93%;\n\tcursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsV0FBVztDQUNYLGdCQUFnQjtDQUNoQixlQUFlO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmtlZXAtYy10b2dnbGUtdmlldyB7XG5cdHdpZHRoOiAxMDAlO1xuXHRtYXJnaW4tbGVmdDogOTMlO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">Keep\n\t<div class=\"keep-c-toggle-view\">\n\t\t<i *ngIf=\"isNoteView\" (click)=\"switchView()\" class=\"material-icons switchToListView\">view_list</i>\n\t\t<i *ngIf=\"!isNoteView\" (click)=\"switchView()\" class=\"material-icons switchToNoteView\">view_quilt</i>\n\t</div>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_router_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/router.service */ "./src/app/services/router.service.ts");





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(location, router, routerService) {
        var _this = this;
        this.location = location;
        this.router = router;
        this.routerService = routerService;
        this.isNoteView = true;
        router.events.subscribe(function (val) {
            if (location.path().indexOf('listview') > -1) {
                _this.isNoteView = false;
            }
        });
    }
    HeaderComponent.prototype.switchView = function () {
        if (this.isNoteView) {
            this.routerService.routeToListView();
            this.isNoteView = false;
        }
        else {
            this.routerService.routeToNoteView();
            this.isNoteView = true;
        }
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_router_service__WEBPACK_IMPORTED_MODULE_4__["RouterService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/list-view/list-view.component.css":
/*!***************************************************!*\
  !*** ./src/app/list-view/list-view.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".keep-c-note-container {\n  padding: 30px;\n  display: flex;\n  flex-wrap: wrap;\n}\n.keep-c-list-container {\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  flex-grow: 1;\t\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC12aWV3L2xpc3Qtdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvbGlzdC12aWV3L2xpc3Qtdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmtlZXAtYy1ub3RlLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5rZWVwLWMtbGlzdC1jb250YWluZXIge1xuICBwYWRkaW5nOiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtZ3JvdzogMTtcdFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/list-view/list-view.component.html":
/*!****************************************************!*\
  !*** ./src/app/list-view/list-view.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"keep-c-note-container\">\n\t<div class=\"keep-c-list-container\">\n\t\t<label>Not-Started</label>\n\t\t<app-note [note]=\"note\" *ngFor=\"let note of notStartedNotes\"></app-note>\n\t</div>\n\t<div class=\"keep-c-list-container\">\n\t\t<label>Started</label>\n\t\t<app-note [note]=\"note\" *ngFor=\"let note of startedNotes\"></app-note>\n\t</div>\n\t<div class=\"keep-c-list-container\">\n\t\t<label>Completed</label>\n\t\t<app-note [note]=\"note\" *ngFor=\"let note of completedNotes\"></app-note>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/list-view/list-view.component.ts":
/*!**************************************************!*\
  !*** ./src/app/list-view/list-view.component.ts ***!
  \**************************************************/
/*! exports provided: ListViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewComponent", function() { return ListViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_notes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/notes.service */ "./src/app/services/notes.service.ts");



var ListViewComponent = /** @class */ (function () {
    function ListViewComponent(notesService) {
        this.notesService = notesService;
        this.notStartedNotes = [];
        this.startedNotes = [];
        this.completedNotes = [];
    }
    ListViewComponent.prototype.filterNotes = function (data) {
        this.notStartedNotes = data.filter(function (note) { return note.state === 'not-started'; });
        this.startedNotes = data.filter(function (note) { return note.state === 'started'; });
        this.completedNotes = data.filter(function (note) { return note.state === 'completed'; });
    };
    ListViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.notesService.getNotes().subscribe(function (res) { return _this.filterNotes(res); }, function (err) { });
    };
    ListViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-view',
            template: __webpack_require__(/*! ./list-view.component.html */ "./src/app/list-view/list-view.component.html"),
            styles: [__webpack_require__(/*! ./list-view.component.css */ "./src/app/list-view/list-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_notes_service__WEBPACK_IMPORTED_MODULE_2__["NotesService"]])
    ], ListViewComponent);
    return ListViewComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-c-form-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 70vh;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tYy1mb3JtLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiA3MHZoO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-c-form-wrapper\">\n  <form class=\"login-form\" (submit)='loginSubmit()' >\n  <mat-form-field>\n    <input class=\"username\" matInput [formControl]='username'>\n    <mat-error *ngIf = 'username.invalid'>{{getErrorMessage()}}</mat-error>\n  </mat-form-field>\n\n  <mat-form-field>\n    <input class=\"password\" matInput type = 'password' [formControl]='password'>\n    <mat-error *ngIf = 'password.invalid'>{{getErrorMessage()}}</mat-error>\n  </mat-form-field>\n  <button type=\"submit\" mat-button>Submit</button>\n  <mat-error *ngIf = 'submitMessage' class=\"error-message\">{{submitMessage}}</mat-error>\n</form>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_router_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/router.service */ "./src/app/services/router.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, routerService) {
        this.authService = authService;
        this.routerService = routerService;
        this.username = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
    }
    LoginComponent.prototype.loginSubmit = function () {
        var _this = this;
        if (this.username.valid && this.password.valid) {
            this.authService.authenticateUser({
                username: this.username.value,
                password: this.password.value
            }).subscribe(function (res) {
                _this.bearerToken = res['token'];
                _this.authService.setBearerToken(_this.bearerToken);
                _this.routerService.routeToDashboard();
            }, function (err) {
                if (err.status === 403) {
                    _this.submitMessage = err.error.message;
                }
                else {
                    _this.submitMessage = err.message;
                }
            });
        }
    };
    LoginComponent.prototype.getErrorMessage = function () {
        return this.username.hasError('required') ? 'You must enter a value' :
            this.password.hasError('required') ? 'You must enter a value ' :
                '';
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _services_router_service__WEBPACK_IMPORTED_MODULE_3__["RouterService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/note-taker/note-taker.component.css":
/*!*****************************************************!*\
  !*** ./src/app/note-taker/note-taker.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".keep-c-expansion-panel-wrapper {\n  width: 50vw;\n  margin: auto;\n  margin-top: 30px;\n}\n\n.keep-c-note-taker-wrapper {\n  display: flex;\n  flex-direction: column;\n}\n\n.keep-c-done-wrapper {\n  display: flex;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90ZS10YWtlci9ub3RlLXRha2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvbm90ZS10YWtlci9ub3RlLXRha2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIua2VlcC1jLWV4cGFuc2lvbi1wYW5lbC13cmFwcGVyIHtcbiAgd2lkdGg6IDUwdnc7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmtlZXAtYy1ub3RlLXRha2VyLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ua2VlcC1jLWRvbmUtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/note-taker/note-taker.component.html":
/*!******************************************************!*\
  !*** ./src/app/note-taker/note-taker.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label class=\"error-message\">{{ errMessage }}</label>\n<div class=\"keep-c-expansion-panel-wrapper\">\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>Take a note</mat-panel-title>\n    </mat-expansion-panel-header>\n    <div class=\"keep-c-note-taker-wrapper\">\n      <mat-form-field>\n        <input [(ngModel)]=\"note.title\" name=\"title\" matInput placeholder=\"Title\" type=\"text\">\n      </mat-form-field>\n      <mat-form-field>\n        <textarea [(ngModel)]=\"note.text\" name=\"text\" matInput placeholder=\"Text\"></textarea>\n      </mat-form-field>\n      <div class=\"keep-c-done-wrapper\">\n        <button mat-button (click)=\"takeNotes()\">Done</button>\n      </div>\n    </div>\n  </mat-expansion-panel>\n</div>"

/***/ }),

/***/ "./src/app/note-taker/note-taker.component.ts":
/*!****************************************************!*\
  !*** ./src/app/note-taker/note-taker.component.ts ***!
  \****************************************************/
/*! exports provided: NoteTakerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteTakerComponent", function() { return NoteTakerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_notes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/notes.service */ "./src/app/services/notes.service.ts");
/* harmony import */ var _note__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../note */ "./src/app/note.ts");




var NoteTakerComponent = /** @class */ (function () {
    function NoteTakerComponent(notesService) {
        this.notesService = notesService;
        this.note = new _note__WEBPACK_IMPORTED_MODULE_3__["Note"]();
    }
    NoteTakerComponent.prototype.ngOnInit = function () {
    };
    NoteTakerComponent.prototype.takeNotes = function () {
        var _this = this;
        if (this.note.title !== '' && this.note.text !== '') {
            this.notesService.addNote(this.note).subscribe(function (data) { }, function (err) {
                _this.errMessage = err.message;
            });
            this.note = new _note__WEBPACK_IMPORTED_MODULE_3__["Note"]();
        }
        else {
            this.errMessage = 'Title and Text both are required fields';
        }
    };
    NoteTakerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-note-taker',
            template: __webpack_require__(/*! ./note-taker.component.html */ "./src/app/note-taker/note-taker.component.html"),
            styles: [__webpack_require__(/*! ./note-taker.component.css */ "./src/app/note-taker/note-taker.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_notes_service__WEBPACK_IMPORTED_MODULE_2__["NotesService"]])
    ], NoteTakerComponent);
    return NoteTakerComponent;
}());



/***/ }),

/***/ "./src/app/note-view/note-view.component.css":
/*!***************************************************!*\
  !*** ./src/app/note-view/note-view.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".keep-c-note-container {\n  padding: 30px;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90ZS12aWV3L25vdGUtdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbm90ZS12aWV3L25vdGUtdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmtlZXAtYy1ub3RlLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/note-view/note-view.component.html":
/*!****************************************************!*\
  !*** ./src/app/note-view/note-view.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"keep-c-note-container\">\n  <app-note [note]=\"note\" *ngFor=\"let note of notes\"></app-note>\n</div>\n"

/***/ }),

/***/ "./src/app/note-view/note-view.component.ts":
/*!**************************************************!*\
  !*** ./src/app/note-view/note-view.component.ts ***!
  \**************************************************/
/*! exports provided: NoteViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteViewComponent", function() { return NoteViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_notes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/notes.service */ "./src/app/services/notes.service.ts");



var NoteViewComponent = /** @class */ (function () {
    function NoteViewComponent(notesService) {
        this.notesService = notesService;
        this.notes = [];
    }
    NoteViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.notesService.getNotes().subscribe(function (res) { return _this.notes = res; }, function (err) { });
    };
    NoteViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-note-view',
            template: __webpack_require__(/*! ./note-view.component.html */ "./src/app/note-view/note-view.component.html"),
            styles: [__webpack_require__(/*! ./note-view.component.css */ "./src/app/note-view/note-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_notes_service__WEBPACK_IMPORTED_MODULE_2__["NotesService"]])
    ], NoteViewComponent);
    return NoteViewComponent;
}());



/***/ }),

/***/ "./src/app/note.ts":
/*!*************************!*\
  !*** ./src/app/note.ts ***!
  \*************************/
/*! exports provided: Note */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Note", function() { return Note; });
var Note = /** @class */ (function () {
    function Note() {
        this.title = '';
        this.text = '';
        this.state = 'not-started';
    }
    return Note;
}());



/***/ }),

/***/ "./src/app/note/note.component.css":
/*!*****************************************!*\
  !*** ./src/app/note/note.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".keep-c-note {\n  margin-left: 10px;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90ZS9ub3RlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbm90ZS9ub3RlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIua2VlcC1jLW5vdGUge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/note/note.component.html":
/*!******************************************!*\
  !*** ./src/app/note/note.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"keep-c-note\" (click)=\"openEditView()\">\n  <mat-card-title>{{note.title}}</mat-card-title>\n  <mat-card-content>\n    <p>{{note.text}}</p>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/note/note.component.ts":
/*!****************************************!*\
  !*** ./src/app/note/note.component.ts ***!
  \****************************************/
/*! exports provided: NoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteComponent", function() { return NoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_router_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/router.service */ "./src/app/services/router.service.ts");
/* harmony import */ var _note__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../note */ "./src/app/note.ts");




var NoteComponent = /** @class */ (function () {
    function NoteComponent(routerService) {
        this.routerService = routerService;
    }
    NoteComponent.prototype.openEditView = function () {
        this.routerService.routeToEditNoteView(this.note.id);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _note__WEBPACK_IMPORTED_MODULE_3__["Note"])
    ], NoteComponent.prototype, "note", void 0);
    NoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-note',
            template: __webpack_require__(/*! ./note.component.html */ "./src/app/note/note.component.html"),
            styles: [__webpack_require__(/*! ./note.component.css */ "./src/app/note/note.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_router_service__WEBPACK_IMPORTED_MODULE_2__["RouterService"]])
    ], NoteComponent);
    return NoteComponent;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");



// import 'rxjs/add/operator/map';

var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.authUrl = 'http://localhost:3000/auth/v1/';
    }
    AuthenticationService.prototype.authenticateUser = function (data) {
        return this.http.post(this.authUrl, data);
    };
    AuthenticationService.prototype.setBearerToken = function (token) {
        localStorage.setItem('bearerToken', token);
    };
    AuthenticationService.prototype.getBearerToken = function () {
        return localStorage.getItem('bearerToken');
    };
    AuthenticationService.prototype.isUserAuthenticated = function (token) {
        return this.http.post(this.authUrl + "isAuthenticated", {}, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', "Bearer " + token)
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res['isAuthenticated']; }))
            .toPromise();
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/notes.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/notes.service.ts ***!
  \*******************************************/
/*! exports provided: NotesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesService", function() { return NotesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






// import 'rxjs/add/operator/do';
// import 'rxjs/add/observable/from';

var NotesService = /** @class */ (function () {
    function NotesService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.notes = [];
        this.notesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
    }
    NotesService.prototype.fetchNotesFromServer = function () {
        var _this = this;
        return this.http.get('http://localhost:3000/api/v1/notes', {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', "Bearer " + this.authService.getBearerToken())
        }).subscribe(function (notes) {
            _this.notes = notes;
            _this.notesSubject.next(_this.notes);
        }, function (err) {
            _this.notesSubject.error(err);
        });
    };
    NotesService.prototype.getNotes = function () {
        return this.notesSubject;
    };
    NotesService.prototype.addNote = function (note) {
        var _this = this;
        return this.http.post('http://localhost:3000/api/v1/notes', note, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', "Bearer " + this.authService.getBearerToken())
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (addedNote) {
            _this.notes.push(addedNote);
            _this.notesSubject.next(_this.notes);
        }));
    };
    NotesService.prototype.editNote = function (note) {
        var _this = this;
        return this.http.put("http://localhost:3000/api/v1/notes/" + note.id, note, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', "Bearer " + this.authService.getBearerToken())
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (editedNote) {
            var existingNote = _this.notes.find(function (noteValue) { return noteValue.id === editedNote.id; });
            Object.assign(existingNote, editedNote);
            _this.notesSubject.next(_this.notes);
        }));
    };
    NotesService.prototype.getNoteById = function (noteId) {
        var note = this.notes.find(function (noteValue) { return noteValue.id === noteId; });
        return Object.assign({}, note);
    };
    NotesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], NotesService);
    return NotesService;
}());



/***/ }),

/***/ "./src/app/services/router.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/router.service.ts ***!
  \********************************************/
/*! exports provided: RouterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterService", function() { return RouterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var RouterService = /** @class */ (function () {
    function RouterService(router, location) {
        this.router = router;
        this.location = location;
    }
    RouterService.prototype.routeToDashboard = function () {
        this.router.navigate(['dashboard']);
    };
    RouterService.prototype.routeToLogin = function () {
        this.router.navigate(['login']);
    };
    RouterService.prototype.routeToEditNoteView = function (noteId) {
        this.router.navigate(['dashboard', {
                outlets: {
                    noteEditOutlet: ['note', noteId, 'edit'],
                }
            }]);
    };
    RouterService.prototype.routeBack = function () {
        this.location.back();
    };
    RouterService.prototype.routeToNoteView = function () {
        this.router.navigate(['dashboard/view/noteview']);
    };
    RouterService.prototype.routeToListView = function () {
        this.router.navigate(['dashboard/view/listview']);
    };
    RouterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], RouterService);
    return RouterService;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/vidya/newGit/angular7-keep-level-3-assignment/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map