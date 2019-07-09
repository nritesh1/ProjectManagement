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

/***/ "./src/app/_components/nav/nav/nav.component.css":
/*!*******************************************************!*\
  !*** ./src/app/_components/nav/nav/nav.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/_components/nav/nav/nav.component.html":
/*!********************************************************!*\
  !*** ./src/app/_components/nav/nav/nav.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\"[routerLink]=\"['/projects']\">Project Manager</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li routerLinkActive=\"active\"><a [routerLink]=\"['/users']\">Add User</a></li>\n        <li routerLinkActive=\"active\"><a [routerLink]=\"['/projects']\">Add Project</a></li>\n        <li routerLinkActive=\"active\"><a [routerLink]=\"['/tasks']\">Add Task</a></li>\n        <li routerLinkActive=\"active\"><a [routerLink]=\"['/viewtask']\">View Task</a></li>\n\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>"

/***/ }),

/***/ "./src/app/_components/nav/nav/nav.component.ts":
/*!******************************************************!*\
  !*** ./src/app/_components/nav/nav/nav.component.ts ***!
  \******************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
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

var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/_components/nav/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/_components/nav/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/_components/project/project.component.css":
/*!***********************************************************!*\
  !*** ./src/app/_components/project/project.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control{\r\n    width: 250px;\r\n    display: inline;\r\n    margin-right: 5px;\r\n}\r\n.row{\r\n    margin-top: 5px;\r\n     margin-bottom: 5px;\r\n}\r\n.btn btn-primary\r\n{\r\npadding-right: 10px;\r\n}\r\n.error {\r\n    color: red;    \r\n    font-size: 12px;\r\n    font-style: italic;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/_components/project/project.component.html":
/*!************************************************************!*\
  !*** ./src/app/_components/project/project.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <form #projectForm=\"ngForm\" (ngSubmit)=\"submit(projectForm)\" name=\"ngform\">\n    <div class=\"col-md-12\">\n      <div class=\"panel panel-primary\">\n        <div class=\"panel-heading\">Add Projects</div>\n        <div class=\"panel-body\">\n          <div class=\"form-group\" [class.has-error]=\"projectName.touched && projectName.invalid\">\n            <div class=\"row\">\n              <div class=\"col-sm-3\">\n                <label for=\"ProjectName\" class=\"control-label\">Project Name</label>\n              </div>\n              <div class=\"col-sm-8\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter project Name\" id=\"ProjectName\" name=\"projectname\" [(ngModel)]=\"projectData.ProjectName\"\n                  required #projectName=\"ngModel\" minlength=\"10\">\n                  <div *ngIf=\"projectName.touched && projectName.invalid\">\n                    <span class=\"error\" *ngIf=\"projectName.errors?.required\">Name is required</span>\n                    <span class=\"error\" *ngIf=\"projectName.errors?.minlength\">Minimum length is\n                {{projectName.errors.minlength.requiredLength}}</span>\n                  </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\" [class.has-error]=\"startDate.touched && startDate.invalid  && endDate.touched && endDate.invalid && startDate > endDate\">\n            <div class=\"row\">\n              <div class=\"col-sm-3\">\n                <input id=\"chkStartEnd\" type=\"checkbox\" name=\"chkdate\" (change)=\"triggerEnableDate()\">\n                <label for=\"chkStartEnd\">Set Start and End Date:</label>\n              </div>\n              <div class=\"col-sm-8\">\n                <input id=\"StartDate\" class=\"form-control\" name=\"startdate\" type=\"date\" [disabled]=\"isDisabled\" [ngModel]=\"projectData.StartDate | date:'yyyy-MM-dd'\"\n                  required #startDate=\"ngModel\">\n                  <input id=\"EndDate\" type=\"date\" name=\"enddate\" [ngModel]=\"projectData.EndDate | date:'yyyy-MM-dd'\" [disabled]=\"isDisabled\" (onblur)=\"compareTwoDates(projectForm)\"\n                    class=\"form-control\" required #endDate=\"ngModel\">\n                    <div *ngIf=\"startDate.touched && startDate.invalid && endDate.touched && endDate.invalid && startDate > endDate\">\n                      <span class=\"error\" *ngIf=\"startDate.errors?.required\">StartDate and EndDate is required</span>\n                    </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\" [class.has-error]=\"priority.touched && priority.invalid\">\n            <div class=\"row\">\n              <div class=\"col-sm-3\">\n                <label for=\"txtPriority\">Priority:</label> </div>\n              <div class=\"col-sm-8 \">\n                <input id=\"rgPriority\" [(ngModel)]=\"projectData.Priority\" name=\"Priority\" type=\"range\" min=\"0\" max=\"30\" value=\"0\" class=\"form-control\"\n                  required #priority=\"ngModel\">\n                  <div *ngIf=\"priority.touched && priority.invalid\">\n                    <span class=\"error\" *ngIf=\"priority.errors?.required\">Priority is required</span>\n                  </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"row \">\n              <div class=\"col-sm-3\">\n                <label for=\"txtManager\" name=\"manager\">Manager:</label>\n              </div>\n              <div class=\"col-sm-8\">\n                <input id=\"txtManager\" type=\"text\" placeholder=\"Select Manager\" class=\"form-control\" name=\"manager\" [(ngModel)]=\"username\"\n                  disabled #manager=\"ngModel\">\n                  <button type=\"button\" class=\"btn btn-primary\" style=\"width:85px;\" name=\"btnsearch\" (click)=\"openModal(template)\">Search</button>\n                  <ng-template #template>\n                    <div class=\"modal-header\">\n                      <h4 class=\"modal-title pull-left\">User Names</h4>\n                      <button type=\"button\" name=\"close\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">      \n                        <span aria-hidden=\"true\">&times;</span></button>\n                    </div>\n                    <div class=\"modal-body\">\n                      <select ng-model=\"modelpopup\" class=\"form-control\"  ng-app [(ngModel)]=\"user_ID\" (change)=\"onChange($event)\" name=\"modelpopup\">\n                      <option value=\"\" selected disabled hidden>Choose here</option>\n                     <option *ngFor = \"let user of users \" value={{user.User_ID}}  >{{user.FirstName}}  {{user.LastName}} </option>\n                     </select>\n                      <button (click)=\"modalRef.hide()\" class=\"btn btn-primary\">OK</button>\n                    </div>\n                  </ng-template>\n\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"panel-footer\">\n          <div class=\"row \">\n            <div class=\"col-sm-3\"></div>\n            <div class=\"col-sm-8\">\n              <div class=\"pull-right\">\n                <button class=\"btn btn-md btn-primary\" style=\"width:85px;\" [disabled]=\"projectForm.invalid\">Submit</button> &nbsp;\n                <button type=\"reset\" style=\"width:85px;\" (click)=\"reset()\" class=\"btn btn-success\">Reset</button>\n              </div>\n              <div class=\"clearfix\"></div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </form>\n  <div style=\"margin-left: 25px;\">\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n        <label for=\"txtSearch\">Search:</label>\n        <input id=\"Search\" type=\"text\" placeholder=\"Enter text to search\" class=\"form-control\" name=\"Search\" [(ngModel)]=\"ProjectName\"\n          required #Search=\"ngModel\"></div>\n      <div class=\"col-sm-8  pull-right\">\n        <label for=\"lblSort\">Sort By: </label>\n        <button name=\"StartDate\" class=\"btn btn-primary btn-md\" id=\"StartDate\" style=\"width:85px;\" (click)=\"sort('StartDate')\">StartDate\n            </button>&nbsp;\n        <button name=\"EndDate\" class=\"btn btn-primary btn-md\" id=\"EndDate\" style=\"width:85px;\" (click)=\"sort('EndDate')\">EndDate\n            </button>&nbsp;\n        <button name=\"Priority\" class=\"btn btn-primary btn-md\" id=\"Priority\" style=\"width:85px;\" (click)=\"sort('Priority')\">Priority\n            </button>&nbsp;\n        <button name=\"Completed\" class=\"btn btn-primary btn-md\" id=\"Completed\" style=\"width:85px;\" (click)=\"sort('Completed')\">Completed\n            </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n      </div>\n    </div>\n    <div class=\"row\" *ngFor=\"let proj of projects | filter :ProjectName\">\n      <div class=\"col-sm-8\" style=\"background-color:lightgray;\"> Project: {{proj.ProjectName}}\n        <div class=\"row\">\n          <div class=\"col-sm-6\" style=\"background-color:lightgray;\"> </div>\n          <div class=\"col-sm-6\" style=\"background-color:lightgray;\"> </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-6\" style=\"background-color:lightgray;\"> No of Tasks: {{proj.Tasks.length}}</div>\n          <div class=\"col-sm-6\" style=\"background-color:lightgray;\"> Completed: {{ (proj.Tasks | filter : Status:'Completed').length }}</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-6\" style=\"background-color:lightgray;\"> </div>\n          <div class=\"col-sm-6\" style=\"background-color:lightgray;\"> </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-6\" style=\"background-color:lightgray;\"> Start Date: {{proj.StartDate}}</div>\n          <div class=\"col-sm-6\" style=\"background-color:lightgray;\"> End Date: {{proj.EndDate}}</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-6\" style=\"background-color:lightgray;\"> </div>\n          <div class=\"col-sm-6\" style=\"background-color:lightgray;\"> </div>\n        </div>\n      </div>\n      <div class=\"col-sm-4\">\n        <div class=\"col-sm-3\" style=\"background-color:lightgray; \">\n          <label for=\"txtPriority\" name=\"Priority\"> Priority</label>\n          <div class=\"row\"><div class=\"col-sm-3\"></div></div> \n          <div class=\"row\"><div class=\"col-sm-3\"></div></div>\n          <div class=\"row\"><div class=\"col-sm-3\" style=\"background-color:lightgray; \">\n              {{proj.Priority}}</div></div>\n           <div class=\"row\"><div class=\"col-sm-3\"></div></div> \n           <div class=\"row\"><div class=\"col-sm-3\"></div></div> \n           <div class=\"row\"><div class=\"col-sm-3\"></div></div>\n           <div class=\"row\"><div class=\"col-sm-3\"></div></div>\n        </div>\n        <div class=\"col-sm-1\">\n          <button class=\"btn btn-primary btn-md\" (click)=\"edit(proj.Project_ID)\" name=\"Edit\" style=\"width:85px;\" id=\"Edit\">  Edit\n            </button>&nbsp;\n          <button class=\"btn btn-primary btn-md\" (click)=\"delete(proj.Project_ID)\" name=\"Suspend\" style=\"width:85px;\" id=\"Suspend\">  Suspend\n            </button>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/_components/project/project.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/_components/project/project.component.ts ***!
  \**********************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/project.service */ "./src/app/_services/project.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProjectComponent = /** @class */ (function () {
    function ProjectComponent(modalService, userService, projectService, router) {
        this.modalService = modalService;
        this.userService = userService;
        this.projectService = projectService;
        this.router = router;
        this.todate = new Date();
        this.projectData = { Project_ID: null, ProjectName: '', StartDate: new Date(), EndDate: this.todate, Priority: 0, User_ID: null, Users: null, Tasks: null };
        this.userData = { User_ID: null, FirstName: '', LastName: '', Employee_ID: null, Project_ID: null, Task_ID: null };
        this.isDisabled = true;
    } // {2}
    ProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectService.getProjects()
            .subscribe(function (response) {
            _this.projects = response;
            console.log(response);
            //this.projectData.TaskCount=this.projects.
        });
        this.userService.getUsers()
            .subscribe(function (response) {
            _this.users = response;
            console.log(response);
        });
        this.todate.setDate(this.todate.getDate() + 1);
    };
    ProjectComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template); // {3}
    };
    ProjectComponent.prototype.triggerEnableDate = function () {
        this.isDisabled = !this.isDisabled;
        return;
    };
    ProjectComponent.prototype.onChange = function (event) {
        this.username = event.target.options[event.target.options.selectedIndex].text;
        this.user_ID = event.target.options[event.target.options.selectedIndex].value;
    };
    ProjectComponent.prototype.submit = function (form) {
        var _this = this;
        var request = form.value;
        request.user_ID = this.user_ID.toString();
        if (!this.endDateAfterOrEqualValidator(form))
            alert('Project End date should be greater than Start date.');
        else if (!this.isEdit) {
            this.projectService.saveProject(request)
                .subscribe(function (response) {
                _this.projects.push(response);
                confirm('Project Details Saved Successfully');
            }, function (error) {
                for (var _i = 0, _a = Object.keys(error.error.ModelState); _i < _a.length; _i++) {
                    var key = _a[_i];
                    for (var _b = 0, _c = error.error.ModelState[key]; _b < _c.length; _b++) {
                        var err = _c[_b];
                        alert(err);
                    }
                }
            }, function () {
                form.reset();
            });
        }
        else {
            request.Project_ID = this.projectId;
            this.projectService.saveProject(request)
                .subscribe(function (project) {
                var projIndex = _this.projects.findIndex(function (proj) { return proj.Project_ID == _this.projectId; });
                if (projIndex != -1) {
                    _this.projects[projIndex] = project;
                }
                confirm('Project Details Updated Successfully');
            }, function (error) {
                for (var _i = 0, _a = Object.keys(error.error.ModelState); _i < _a.length; _i++) {
                    var key = _a[_i];
                    for (var _b = 0, _c = error.error.ModelState[key]; _b < _c.length; _b++) {
                        var err = _c[_b];
                        alert(err);
                    }
                }
            }, function () {
                form.reset();
                _this.isEdit = false;
            });
        }
    };
    ProjectComponent.prototype.delete = function (id) {
        var _this = this;
        var isDelete = confirm('Do you wish to delete the Project?');
        if (isDelete) {
            this.projectService.deleteProject(id)
                .subscribe(function (response) {
                if (response) {
                    var projIndex = _this.projects.findIndex(function (proj) { return proj.Project_ID == id; });
                    if (projIndex != -1) {
                        _this.projects.splice(projIndex, 1);
                    }
                }
            });
        }
    };
    ProjectComponent.prototype.edit = function (id) {
        var _this = this;
        this.projectService.getProject(id)
            .subscribe(function (project) {
            _this.projectData.ProjectName = project.ProjectName;
            _this.projectData.StartDate = project.StartDate;
            _this.projectData.EndDate = project.EndDate;
            _this.projectData.Priority = project.Priority;
            _this.projectData.User_ID = project.User_ID;
            _this.user_ID = project.User_ID;
            console.log(project.User_ID);
            _this.username = _this.users.find(function (i) { return i.User_ID == project.User_ID; }).FirstName + '  ' + _this.users.find(function (i) { return i.User_ID == project.User_ID; }).LastName;
            _this.isEdit = true;
            _this.projectId = id;
        });
    };
    ProjectComponent.prototype.reset = function () {
        this.isDisabled = true;
    };
    ProjectComponent.prototype.sort = function (param) {
        var _this = this;
        if (param == 'StartDate') {
            this.projectService.getProjects()
                .subscribe(function (response) {
                _this.projects = response.sort(function (a, b) {
                    return new Date(b.StartDate) - new Date(a.StartDate);
                });
            });
        }
        if (param == 'EndDate') {
            this.projectService.getProjects()
                .subscribe(function (response) {
                _this.projects = response.sort(function (a, b) {
                    return new Date(b.StartDate) - new Date(a.StartDate);
                });
            });
        }
        if (param == 'Priority') {
            this.projectService.getProjects()
                .subscribe(function (response) {
                _this.projects = response.sort(function (a, b) { return a.Priority.toString().localeCompare(b.Priority.toString(), undefined, { numeric: true }); });
            });
        }
        if (param == 'Completed') {
            this.projectService.getProjects()
                .subscribe(function (response) {
                _this.projects = response.sort(function (a, b) { return a.Priority.toString().localeCompare(b.Priority.toString(), undefined, { numeric: true }); });
            });
        }
    };
    ProjectComponent.prototype.endDateAfterOrEqualValidator = function (formGroup) {
        var startDateTimestamp, endDateTimestamp;
        for (var controlName in formGroup.controls) {
            if (controlName.indexOf("startdate") !== -1) {
                startDateTimestamp = Date.parse(formGroup.controls[controlName].value);
            }
            if (controlName.indexOf("enddate") !== -1) {
                endDateTimestamp = Date.parse(formGroup.controls[controlName].value);
            }
        }
        return (endDateTimestamp < startDateTimestamp) ? false : true;
    };
    ProjectComponent.prototype.compareTwoDates = function (form) {
        if (new Date(form.controls['StartDate'].value) < new Date(form.controls['EndDate'].value)) {
            //this.error={isError:true,errorMessage:'End Date can't before start date'};
            return false;
        }
    };
    ProjectComponent.prototype.view = function (id) {
        this.router.navigate(['/projects', id]);
    };
    ProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/_components/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.css */ "./src/app/_components/project/project.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/_components/task/task.component.css":
/*!*****************************************************!*\
  !*** ./src/app/_components/task/task.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control{\r\n    width: 350px;\r\n    display: inline;\r\n    margin-right: 5px;\r\n}\r\n.row{\r\n    margin-top: 5px;\r\n}\r\n.btn btn-primary\r\n{\r\npadding-right: 10px;\r\n}\r\n.error {\r\n    color: red;    \r\n    font-size: 12px;\r\n    font-style: italic;\r\n}\r\n.wrapper {\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.modal-header {\r\n  background: #337ab7;\r\n}\r\n.modal-body {\r\n  height: 200px;\r\n  flex: 1;\r\n  overflow: auto; \r\n}"

/***/ }),

/***/ "./src/app/_components/task/task.component.html":
/*!******************************************************!*\
  !*** ./src/app/_components/task/task.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <form #taskForm=\"ngForm\" (ngSubmit)=\"submit(taskForm)\" name=\"ngform\">\n    <div class=\"col-md-12\">\n      <div class=\"panel panel-primary\">\n        <div class=\"panel-heading\">{{title}}</div>\n        <div class=\"panel-body\">\n          <div class=\"form-group\" [class.has-error]=\"projectName.touched && projectName.invalid\">\n            <div class=\"row\">\n              <div class=\"col-sm-3\">\n                <label for=\"ProjectName\" class=\"control-label\">Project: </label>\n              </div>\n              <div class=\"col-sm-8\">\n                <input type=\"text\" placeholder=\"Select Project\" disabled class=\"form-control\" id=\"ProjectName\" name=\"ProjectName\" [(ngModel)]=\"projectname\"\n                  required #projectName=\"ngModel\" minlength=\"10\">\n                  <button type=\"button\" style=\"width:85px;\" class=\"btn btn-info\" (click)=\"openModal(projecttemplate)\" style=\"width:85px;\" name=\"Search\">Search</button>\n                  <ng-template #projecttemplate>\n                    <div class=\"modal-header\">\n                      <h4 class=\"modal-title pull-left\">Project Names</h4>\n                      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\" name=\"Close\">      \n                        <span aria-hidden=\"true\">&times;</span></button>\n                    </div>\n                    <div class=\"modal-body\" style=\"height: 200px;\">\n                      <select class=\"form-control\" ng-model=\"projectList\" ng-app [(ngModel)]=\"project_ID\" (change)=\"onChange($event)\" name=\"projectList\">\n                        <option value=\"\" selected disabled hidden>Choose here</option>\n                     <option *ngFor = \"let proj of projects\" value={{proj.Project_ID}} >{{proj.ProjectName}}</option>\n                     </select>\n                    \n                    </div>  <div class=\"modal-footer\">\n                        <div class=\"pull-right\">\n                          <button class=\"btn btn-success\" (click)=\"modalRef.hide()\">OK</button>\n                        </div>\n                      </div>\n                  </ng-template>\n                  <div *ngIf=\"projectName.touched && projectName.invalid\">\n                    <span class=\"error\" *ngIf=\"projectName.errors?.required\">Name is required</span>\n                  </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\" [class.has-error]=\"taskName.touched && taskName.invalid\">\n            <div class=\"row\">\n              <div class=\"col-sm-3\">\n                <label for=\"TaskName\" class=\"control-label\">Task: </label>\n              </div>\n              <div class=\"col-sm-8\">\n                <input type=\"text\" placeholder=\"Enter Task Name\" class=\"form-control\" id=\"TaskName\" name=\"TaskName\" [(ngModel)]=\"taskData.TaskName\"\n                  required #taskName=\"ngModel\" minlength=\"10\">\n                  <div *ngIf=\"taskName.touched && taskName.invalid\">\n                    <span class=\"error\" *ngIf=\"taskName.errors?.required\">Name is required</span>\n                    <span class=\"error\" *ngIf=\"taskName.errors?.minlength\">Minimum length is\n                {{taskName.errors.minlength.requiredLength}} </span>\n                  </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"row\">\n              <div class=\"col-sm-3\">\n              </div>\n              <div class=\"col-sm-8\">\n                <input id=\"chkParenttask\" type=\"checkbox\" name=\"chkdate\"  #chkEnable ng-model>\n                <label for=\"chkParenttask\">Parent Task</label>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\" [class.has-error]=\"priority.touched && priority.invalid\">\n            <div class=\"row\">\n              <div class=\"col-sm-3\">\n                <label for=\"txtPriority\">Priority:</label> </div>\n              <div class=\"col-sm-8 \">\n                <input id=\"Priority\" [(ngModel)]=\"taskData.Priority\" [disabled]=\"chkEnable.checked\" name=\"Priority\" type=\"range\" min=\"0\"\n                  max=\"30\" class=\"form-control\" step=\"1\" required #priority=\"ngModel\">\n                  <div *ngIf=\"priority.touched && priority.invalid\">\n                    <span class=\"error\" *ngIf=\"priority.errors?.required\">Priority is required</span>\n                  </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\" [class.has-error]=\"parenTtask.touched && parenTtask.invalid\">\n            <div class=\"row \">\n              <div class=\"col-sm-3 \">\n                <label for=\"Parent_Task\">Parent Task:</label>\n              </div>\n              <div class=\"col-sm-8 \">\n                <input id=\"Parent_Task\" disabled placeholder=\"Select Parent Task\" type=\"text\" class=\"form-control\" name=\"Parent_Task\" [(ngModel)]=\"parenttask\"\n                  required #parenTtask=\"ngModel\">\n                  <button type=\"button\" style=\"width:85px;\" class=\"btn btn-info\" [disabled]=\"chkEnable.checked\" (click)=\"openModal(Parenttemplate)\"\n                    name=\"Search\">Search</button>\n\n                    <ng-template #Parenttemplate class=\"wrapper\">\n                      <div class=\"modal-header\">\n                        <h4 class=\"modal-title pull-left \">Parent Tasks</h4>\n                        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\" name=\"Close\">      \n                        <span aria-hidden=\"true\">&times;</span></button>\n                      </div>\n                      <div class=\"modal-body\" >\n                        \n                        <!--<select ng-model=\"parentTaskList\" ng-app [(ngModel)]=\"parent_ID\" (change)=\"ontaskChange($event)\" class=\"form-control\" name=\"parentTaskList\">\n                      <option value=\"\" selected disabled hidden>Choose here</option>\n                     <option *ngFor = \"let parenttask of parenttasks\" value={{parenttask.Parent_ID}} >{{parenttask.Parent_Task}}</option>\n                     </select>-->\n\n                     <ngx-select-dropdown [config]=\"config\" [options]=\"parenttasks\" (change)=\"ontaskChange($event)\"\n            [(value)]=\"singleSelect\" [multiple]=\"false\" ></ngx-select-dropdown>\n                      </div>  \n                      <div class=\"modal-footer\" >\n                        <div class=\"pull-right\">\n                          <button (click)=\"modalRef.hide()\" class=\"btn btn-primary\">OK</button>\n                        </div>\n                      </div>\n                    </ng-template>\n\n                    <div *ngIf=\"parenTtask.touched && parenTtask.invalid\">\n                      <span class=\"error\" *ngIf=\"parenTtask.errors?.required\">parenTtask is required</span>\n                    </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\" [class.has-error]=\"startDate.touched && startDate.invalid  && endDate.touched && endDate.invalid\">\n            <div class=\"row\">\n              <div class=\"col-sm-3\">\n                <label for=\"txtStartdate \">Start Date:</label>\n\n              </div>\n              <div class=\"col-sm-8\">\n                <input id=\"Start_Date\" [disabled]=\"chkEnable.checked\" class=\"form-control\" name=\"Start_Date\" type=\"date\" [ngModel]=\"taskData.Start_Date | date:'yyyy-MM-dd'\"\n                  required #startDate=\"ngModel\">\n              </div>\n            </div>\n\n          </div>\n          <div class=\"form-group\" [class.has-error]=\"startDate.touched && startDate.invalid  && endDate.touched && endDate.invalid\">\n\n            <div class=\"row\">\n              <div class=\"col-sm-3\">\n                <label for=\"txtenddate\">End Date:</label>\n\n              </div>\n              <div class=\"col-sm-8\">\n\n                <input id=\"End_Date\" [disabled]=\"chkEnable.checked\" type=\"date\" name=\"End_Date\" [ngModel]=\"taskData.End_Date | date:'yyyy-MM-dd'\"\n                  class=\"form-control\" required #endDate=\"ngModel\">\n                  <div *ngIf=\"startDate.touched && startDate.invalid && endDate.touched && endDate.invalid\">\n                    <span class=\"error\" *ngIf=\"startDate.errors?.required\">StartDate and EndDate is required</span>\n                  </div>\n              </div>\n            </div>\n\n          </div>\n          <div class=\"form-group\" [class.has-error]=\"user.touched && user.invalid\">\n            <div class=\"row \">\n              <div class=\"col-sm-3 \">\n                <label for=\"txtUser \">User:</label>\n              </div>\n              <div class=\"col-sm-8 \">\n                <input id=\"txtUser\" placeholder=\"Select User\" disabled type=\"text\" class=\"form-control\" name=\"user\" [(ngModel)]=\"username\"\n                  required #user=\"ngModel\">\n                  <button type=\"button\" style=\"width:85px;\" [disabled]=\"chkEnable.checked\" class=\"btn btn-info\" (click)=\"openModal(template)\">Search</button>\n                  <ng-template #template>\n                    <div class=\"modal-header\">\n                      <h4 class=\"modal-title pull-left\">User Names</h4>\n                      <button type=\"button\" class=\"close pull-right\" name=\"button\" aria-label=\"Close\" (click)=\"modalRef.hide()\">      \n                        <span aria-hidden=\"true\">&times;</span></button>\n                    </div>\n                    <div class=\"modal-body\">\n                      <select ng-model=\"selectusers\" class=\"form-control\" ng-app [(ngModel)]=\"user_ID\" (change)=\"onUserChange($event)\" name=\"selectusers\">\n                      <option value=\"\" selected disabled hidden>Choose here</option>\n                     <option *ngFor = \"let user of users\" value={{user.User_ID}} >{{user.FirstName}}  {{user.LastName}} </option>\n                     </select>\n                   \n                    </div> <div class=\"modal-footer\">\n                        <div class=\"pull-right\">\n                          <button class=\"btn btn-primary\" (click)=\"modalRef.hide()\">OK</button>\n                        </div>\n                      </div>\n                  </ng-template>\n                  <div *ngIf=\"user.touched && user.invalid\">\n                    <span class=\"error\" *ngIf=\"user.errors?.required\">User is required</span>\n                  </div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n        <div class=\"panel-footer\">\n          <div class=\"pull-right\">\n            <button class=\"btn btn-md btn-primary\" style=\"width:85px;\" [disabled]=\"taskForm.invalid\">{{ SubmitBtnName}}</button>            &nbsp;\n            <button type=\"reset\" style=\"width:85px;\" class=\"btn btn-success\">Reset</button>\n          </div>\n          <div class=\"clearfix\"></div>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/_components/task/task.component.ts":
/*!****************************************************!*\
  !*** ./src/app/_components/task/task.component.ts ***!
  \****************************************************/
/*! exports provided: TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return TaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/task.service */ "./src/app/_services/task.service.ts");
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/project.service */ "./src/app/_services/project.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/user.service */ "./src/app/_services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TaskComponent = /** @class */ (function () {
    function TaskComponent(modalService, userService, projectService, router, taskService, route) {
        this.modalService = modalService;
        this.userService = userService;
        this.projectService = projectService;
        this.router = router;
        this.taskService = taskService;
        this.route = route;
        this.title = 'Add Task';
        this.SubmitBtnName = 'Add Task';
        this.todate = new Date();
        this.tasks = [];
        this.taskData = { Task_ID: null, Parent_ID: null, Project_ID: null, TaskName: '', Start_Date: new Date(), End_Date: this.todate, Priority: 0, Status: '', Users: null, ParentTask: null, User_ID: null };
        this.parenttaskData = { Parent_ID: null, Parent_Task: '' };
        this.projectData = { Project_ID: null, ProjectName: '', StartDate: null, EndDate: new Date(), Priority: null, User_ID: null, Users: null, Tasks: null };
        this.userData = { User_ID: null, FirstName: '', LastName: '', Employee_ID: null, Project_ID: null, Task_ID: null };
        this.config = {
            displayKey: "Parent_Task",
            search: true //enables the search plugin to search in the list
        };
        this.singleSelect = [];
    } // {2}
    TaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        if (id != null) {
            this.edit(parseInt(id));
        }
        this.taskService.getparentTasks()
            .subscribe(function (response) {
            _this.parenttasks = response;
            if (_this.taskId != null && _this.taskId != 0 && _this.parentid != null && _this.parentid != 0)
                _this.parenttask = _this.parenttasks.filter(function (x) { return x.Parent_ID == _this.parentid; })[0].Parent_Task;
        });
        this.projectService.getProjects()
            .subscribe(function (response) {
            _this.projects = response;
            if (_this.taskId != null && _this.taskId != 0 && _this.project_ID != null && _this.project_ID != 0)
                _this.projectname = _this.projects.filter(function (x) { return x.Project_ID == _this.project_ID; })[0].ProjectName;
        });
        this.userService.getUsers()
            .subscribe(function (response) {
            _this.users = response;
            if (_this.taskId != null && _this.taskId != 0 && _this.user_ID != null && _this.user_ID != '')
                _this.username = _this.users.filter(function (x) { return x.User_ID.toString() == _this.user_ID; })[0].FirstName + ' ' + _this.users.filter(function (x) { return x.User_ID.toString() == _this.user_ID; })[0].LastName;
        });
        this.todate.setDate(this.todate.getDate() + 1);
    };
    TaskComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template); // {3}
    };
    TaskComponent.prototype.closeModal = function (template) {
        // this.userBodyTextname=template.elementRef.
        this.modalService.hide(1);
        //search(); 
    };
    TaskComponent.prototype.onChange = function (event) {
        //console.log(event);
        this.projectname = event.target.options[event.target.options.selectedIndex].text;
        this.project_ID = event.target.options[event.target.options.selectedIndex].value;
        // console.log(text);
    };
    TaskComponent.prototype.onUserChange = function (event) {
        //console.log(event);
        this.username = event.target.options[event.target.options.selectedIndex].text;
        this.user_ID = event.target.options[event.target.options.selectedIndex].value;
        // console.log(text);
    };
    TaskComponent.prototype.ontaskChange = function (event) {
        //console.log(event);
        this.parenttask = event.value[0].Parent_Task;
        this.parentid = event.value[0].Parent_ID;
        // console.log(Parent_IDtext);Parent_ID
    };
    TaskComponent.prototype.submit = function (form) {
        var _this = this;
        var request = form.value;
        if (this.user_ID != null) {
            request.user_ID = this.user_ID.toString();
        }
        request.Project_ID = this.project_ID.toString();
        if (this.parentid != null) {
            request.Parent_ID = this.parentid.toString();
        }
        if (!this.isEdit) {
            this.taskService.saveTask(request)
                .subscribe(function (response) {
                _this.tasks.push(response);
                confirm('Task Details Saved Successfully');
            }, function (error) {
                for (var _i = 0, _a = Object.keys(error.error.ModelState); _i < _a.length; _i++) {
                    var key = _a[_i];
                    for (var _b = 0, _c = error.error.ModelState[key]; _b < _c.length; _b++) {
                        var err = _c[_b];
                        alert(err);
                    }
                }
            }, function () {
                form.reset();
            });
        }
        else {
            request.Task_ID = this.taskId;
            this.taskService.saveTask(request)
                .subscribe(function (task) {
                var tskIndex = _this.tasks.findIndex(function (tsk) { return tsk.Task_ID == _this.taskId; });
                if (tskIndex != -1) {
                    _this.tasks[tskIndex] = task;
                }
                confirm('Task Details Updated Successfully');
                _this.router.navigate(['/viewtask']);
            }, function (error) {
                for (var _i = 0, _a = Object.keys(error.error.ModelState); _i < _a.length; _i++) {
                    var key = _a[_i];
                    for (var _b = 0, _c = error.error.ModelState[key]; _b < _c.length; _b++) {
                        var err = _c[_b];
                        alert(err);
                    }
                }
            }, function () {
                form.reset();
                _this.isEdit = false;
            });
        }
    };
    TaskComponent.prototype.delete = function (id) {
        var _this = this;
        var isDelete = confirm('Do you wish to delete the Task?');
        if (isDelete) {
            this.taskService.deleteTask(id)
                .subscribe(function (response) {
                if (response) {
                    var projIndex = _this.tasks.findIndex(function (proj) { return proj.Task_ID == id; });
                    if (projIndex != -1) {
                        _this.tasks.splice(projIndex, 1);
                    }
                }
            });
        }
    };
    TaskComponent.prototype.edit = function (id) {
        var _this = this;
        this.title = 'Update Task';
        this.taskId = id;
        this.SubmitBtnName = 'Update';
        this.taskService.getTask(id)
            .subscribe(function (task) {
            _this.taskData.Parent_ID = task.Parent_ID;
            _this.taskData.Project_ID = task.Project_ID;
            _this.taskData.TaskName = task.TaskName;
            _this.taskData.End_Date = task.End_Date;
            _this.taskData.Start_Date = task.Start_Date;
            _this.taskData.Priority = task.Priority;
            _this.taskData.Status = task.Status;
            _this.taskData.User_ID = task.User_ID;
            _this.project_ID = task.Project_ID;
            _this.parentid = task.Parent_ID;
            _this.user_ID = task.User_ID.toString();
            _this.isEdit = true;
            _this.taskId = id;
        });
    };
    TaskComponent.prototype.view = function (id) {
        this.router.navigate(['/tasks', id]);
    };
    TaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task',
            template: __webpack_require__(/*! ./task.component.html */ "./src/app/_components/task/task.component.html"),
            styles: [__webpack_require__(/*! ./task.component.css */ "./src/app/_components/task/task.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], src_app_services_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], TaskComponent);
    return TaskComponent;
}());



/***/ }),

/***/ "./src/app/_components/user/user.component.css":
/*!*****************************************************!*\
  !*** ./src/app/_components/user/user.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control{\r\n    width: 350px;\r\n    display: inline;\r\n    margin-right: 5px;\r\n}\r\n.row{\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n.btn btn-primary\r\n{\r\npadding-right: 10px;\r\n}\r\n.error {\r\n    color: red;    \r\n    font-size: 12px;\r\n    font-style: italic;\r\n}"

/***/ }),

/***/ "./src/app/_components/user/user.component.html":
/*!******************************************************!*\
  !*** ./src/app/_components/user/user.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <form #userForm=\"ngForm\" (ngSubmit)=\"submit(userForm)\" name=\"ngform\">\n    <div class=\"col-md-12\">\n      <div class=\"panel panel-primary\">\n        <div class=\"panel-heading\">Add User</div>\n        <div class=\"panel-body\">\n          <div class=\"form-group\" [class.has-error]=\"firstName.touched && firstName.invalid\">\n            <div class=\"row\">\n              <div class=\"col-sm-3\">\n                <label for=\"firstName\" class=\"control-label\">First Name</label>\n              </div>\n              <div class=\"col-sm-8\">\n                <input type=\"text\" class=\"form-control\" id=\"FirstName\" placeholder=\"Enter First Name\" name=\"FirstName\" [(ngModel)]=\"userData.FirstName\"\n                  required #firstName=\"ngModel\" maxlength=\"50\">\n                  <div *ngIf=\"firstName.touched && firstName.invalid\">\n                    <span class=\"error\" *ngIf=\"firstName.errors?.required\">First Name is required</span>\n                    <span class=\"error\" *ngIf=\"firstName.errors?.minlength\">Minimum length is\n                {{firstName.errors.minlength.requiredLength}}</span>\n                  </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"form-group\" [class.has-error]=\"lastName.touched && lastName.invalid\">\n            <div class=\"row \">\n              <div class=\"col-sm-3 \">\n                <label for=\"txtLastName\">Last Name:</label>\n              </div>\n              <div class=\"col-sm-8 \">\n                <input id=\"LastName\" type=\"text\" class=\"form-control\" placeholder=\"Enter Last Name\" name=\"LastName\" [(ngModel)]=\"userData.LastName\"\n                  required #lastName=\"ngModel\" maxlength=\"50\">\n\n                  <div *ngIf=\"lastName.touched && lastName.invalid\">\n                    <span class=\"error\" *ngIf=\"lastName.errors?.required\">Last Name is required</span>\n                    <span class=\"error\" *ngIf=\"lastName.errors?.minlength\">Minimum length is\n                {{lastName.errors.minlength.requiredLength}}</span>\n                  </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\" [class.has-error]=\"EmployeeId.touched && EmployeeId.invalid\">\n            <div class=\"row \">\n              <div class=\"col-sm-3 \">\n                <label for=\"txtEmployeeid\">Employee ID:</label>\n              </div>\n              <div class=\"col-sm-8 \">\n                <input id=\"Employee_ID\" type=\"number\" min=\"1\" placeholder=\"Enter Employee ID\" class=\"form-control\" name=\"Employee_ID\" [(ngModel)]=\"userData.Employee_ID\"\n                  required #EmployeeId=\"ngModel\" required>\n\n                  <div *ngIf=\"EmployeeId.touched && EmployeeId.invalid\">\n                    <span class=\"error\" *ngIf=\"EmployeeId.errors?.required\">Employee ID is required</span>\n                  </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"panel-footer\">\n          <div class=\"pull-right\">\n            <button class=\"btn btn-md btn-primary\" style=\"width:80px;\" [disabled]=\"userForm.invalid\">Submit</button> &nbsp;\n            <button type=\"reset\" class=\"btn btn-success\" style=\"width:80px;\">Reset</button>\n          </div>\n          <div class=\"clearfix\"></div>\n        </div>\n      </div>\n    </div>\n  </form>\n  <div style=\"margin-left: 20px;\">\n    <div>\n      <div class=\"row\">\n        <div class=\"col-sm-5\">\n            <input id=\"Search\" type=\"text\" placeholder=\"Enter text to search\" class=\"form-control\" name=\"Search\" [(ngModel)]=\"UserSearch\"\n            required #Search=\"ngModel\"></div>\n        <div class=\"col-sm-7\" style=\"padding-left: 65px;\">\n          <label for=\"lblSort\">Sort By: </label>&nbsp;\n          <button name=\"FirstName\" class=\"btn btn-primary btn-md\" style=\"width:80px;\" id=\"FirstName\" (click)=\"sort('FirstName')\">FirstName\n            </button>&nbsp;\n          <button name=\"LastName\" class=\"btn btn-primary btn-md\" style=\"width:80px;\" id=\"LastName\" (click)=\"sort('LastName')\">LastName\n            </button>&nbsp; \n          <button name=\"Id\" class=\"btn btn-primary btn-md\" style=\"width:80px;\" id=\"Id\" (click)=\"sort('Id')\">Emp ID\n            </button>&nbsp;&nbsp;&nbsp;&nbsp;\n        </div>\n      </div>\n      <div class=\"row\" *ngFor=\"let usr of users |filter: UserSearch\">\n        <div class=\"col-sm-8\">\n          <ul class=\"list-group\">\n            <li class=\"list-group-item list-group-item-info\" style=\"background-color:lightgrey;\">{{usr.FirstName}}</li>\n            <li class=\"list-group-item list-group-item-info\" style=\"background-color:lightgrey;\">{{usr.LastName}}</li>\n            <li class=\"list-group-item list-group-item-info\" style=\"background-color:lightgrey;\">{{usr.Employee_ID}}</li>\n          </ul>\n        </div>\n        <div class=\"col-sm-4\" >\n          <div class=\"row pu\">\n          <div class=\"col-sm-2\">\n            <button class=\"btn btn-primary btn-md\" (click)=\"edit(usr.User_ID)\" name=\"Edit\" id=\"Edit\" style=\"width:80px;\">  Edit\n            </button></div>\n          </div>\n          <div class=\"row\">\n          <div class=\"col-sm-2\">\n            <button class=\"btn btn-primary btn-md\" (click)=\"delete(usr.User_ID)\" name=\"Delete\" id=\"Delete\" style=\"width:80px;\">  Delete\n            </button>\n          </div>\n          </div>\n          <div class=\"col-sm-2\">\n          </div>\n        </div>\n      </div>\n\n\n\n\n\n    </div>\n\n  </div>"

/***/ }),

/***/ "./src/app/_components/user/user.component.ts":
/*!****************************************************!*\
  !*** ./src/app/_components/user/user.component.ts ***!
  \****************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserComponent = /** @class */ (function () {
    function UserComponent(modalService, userService, router) {
        this.modalService = modalService;
        this.userService = userService;
        this.router = router;
        this.userData = { User_ID: null, FirstName: '', LastName: '', Employee_ID: null, Project_ID: null, Task_ID: null };
    } // {2}
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (response) {
            _this.users = response;
            console.log(response);
        });
        this.user_ID = "";
    };
    UserComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template); // {3}
    };
    UserComponent.prototype.closeModal = function (template) {
        this.modalService.hide(1);
    };
    UserComponent.prototype.submit = function (form) {
        var _this = this;
        var request = form.value;
        if (!this.isEdit) {
            this.userService.saveUser(request)
                .subscribe(function (response) {
                _this.users.push(response);
                confirm('User Details Updated Successfully');
            }, function (error) {
                for (var _i = 0, _a = Object.keys(error.error.ModelState); _i < _a.length; _i++) {
                    var key = _a[_i];
                    for (var _b = 0, _c = error.error.ModelState[key]; _b < _c.length; _b++) {
                        var err = _c[_b];
                        alert(err);
                    }
                }
            }, function () {
                form.reset();
            });
        }
        else {
            request.User_ID = this.userId;
            this.userService.saveUser(request)
                .subscribe(function (user) {
                var userIndex = _this.users.findIndex(function (usr) { return usr.User_ID == _this.userId; });
                if (userIndex != -1) {
                    console.log(user);
                    _this.users[userIndex] = user;
                }
                confirm('User Details Updated Successfully');
            }, function (error) {
                for (var _i = 0, _a = Object.keys(error.error.ModelState); _i < _a.length; _i++) {
                    var key = _a[_i];
                    for (var _b = 0, _c = error.error.ModelState[key]; _b < _c.length; _b++) {
                        var err = _c[_b];
                        alert(err);
                    }
                }
            }, function () {
                form.reset();
                _this.isEdit = false;
            });
        }
    };
    UserComponent.prototype.delete = function (id) {
        var _this = this;
        var isDelete = confirm('Do you wish to delete the User?');
        if (isDelete) {
            this.userService.deleteUser(id)
                .subscribe(function (response) {
                if (response) {
                    var userIndex = _this.users.findIndex(function (user) { return user.User_ID == id; });
                    if (userIndex != -1) {
                        _this.users.splice(userIndex, 1);
                    }
                }
            });
        }
    };
    UserComponent.prototype.edit = function (id) {
        var _this = this;
        this.userService.getUser(id)
            .subscribe(function (user) {
            _this.userData.FirstName = user.FirstName;
            _this.userData.LastName = user.LastName;
            _this.userData.Employee_ID = user.Employee_ID;
            _this.userData.Project_ID = user.Project_ID;
            _this.userData.Task_ID = user.Task_ID;
            _this.isEdit = true;
            _this.userId = id;
        });
    };
    UserComponent.prototype.sort = function (param) {
        var _this = this;
        if (param == 'FirstName') {
            this.userService.getUsers()
                .subscribe(function (response) {
                _this.users = response.sort(function (a, b) { return a.FirstName.localeCompare(b.FirstName); });
            });
        }
        if (param == 'LastName') {
            this.userService.getUsers()
                .subscribe(function (response) {
                _this.users = response.sort(function (a, b) { return a.LastName.localeCompare(b.LastName); });
            });
        }
        if (param == 'Id') {
            this.userService.getUsers()
                .subscribe(function (response) {
                _this.users = response.sort(function (a, b) { return a.Employee_ID.toString().localeCompare(b.Employee_ID.toString(), undefined, { numeric: true }); });
            });
        }
    };
    UserComponent.prototype.view = function (id) {
        this.router.navigate(['/users', id]);
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/_components/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/_components/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/_components/viewtask/viewtask.component.css":
/*!*************************************************************!*\
  !*** ./src/app/_components/viewtask/viewtask.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control{\r\n    width: 350px;\r\n    display: inline;\r\n    margin-right: 5px;\r\n}\r\n.row{\r\n    margin-top: 5px;\r\n}\r\n.btn btn-primary\r\n{\r\npadding-right: 10px;\r\n}\r\n.error {\r\n    color: red;    \r\n    font-size: 12px;\r\n    font-style: italic;\r\n}\r\n.list-group .list-group-item{\r\n    width: 500px;\r\n}"

/***/ }),

/***/ "./src/app/_components/viewtask/viewtask.component.html":
/*!**************************************************************!*\
  !*** ./src/app/_components/viewtask/viewtask.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <form #viewtaskForm=\"ngForm\" (ngSubmit)=\"submit(viewtaskForm)\" name=\"ngform\">\n    <div class=\"col-md-12\">\n      <div class=\"panel panel-primary\">\n        <div class=\"panel-heading\">View Task</div>\n        <div class=\"panel-body\">\n          <div class=\"form-group\">\n            <div class=\"row\" style=\"padding-bottom: 15px;  border-bottom: 1px dashed blue;\">\n              <div class=\"col-sm-6\">\n                <label for=\"TaskName\" class=\"control-label\">Project</label>&nbsp;\n                <input type=\"text\" class=\"form-control\" id=\"projectname\" name=\"projectname\" [(ngModel)]=\"projectname\" required #projectName=\"ngModel\"\n                  minlength=\"10\">\n                  <button type=\"button\" class=\"btn btn-info\" (click)=\"openModal(template)\">Search</button>\n                  <ng-template #template>\n                    <div class=\"modal-header\">\n                      <h4 class=\"modal-title pull-left\">Project Names</h4>\n                      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">      \n                        <span aria-hidden=\"true\">&times;</span></button>\n                    </div>\n                    <div class=\"modal-body\">\n                      <select ng-model=\"projectName\" ng-app (change)=\"onChange($event)\" name=\"modelpopup\">\n                        <option value=\"\" selected disabled hidden>Choose here</option>\n                        <option value=\"\" ></option>\n                     <option *ngFor = \"let proj of projects\" value={{proj.Project_ID}} >{{proj.ProjectName}}</option>\n                     </select>\n                      <button (click)=\"modalRef.hide()\">OK</button>\n                    </div>\n                  </ng-template>\n              </div>\n              <div class=\"col-sm-6\">\n                <label for=\"lblSort\">Sort By: </label>\n                <button name=\"StartDate\" class=\"btn btn-primary btn-md\" style=\"width:85px;\" id=\"StartDate\" (click)=\"sort('StartDate')\">StartDate\n            </button>&nbsp;\n                <button name=\"EndDate\" class=\"btn btn-primary btn-md\" style=\"width:85px;\" id=\"EndDate\" (click)=\"sort('EndDate')\">EndDate\n            </button>&nbsp;\n                <button name=\"Priority\" class=\"btn btn-primary btn-md\" style=\"width:85px;\" id=\"Priority\" (click)=\"sort('Priority')\">Priority\n            </button>&nbsp;\n                <button name=\"Completed\" class=\"btn btn-primary btn-md\" style=\"width:85px;\" id=\"Completed\" (click)=\"sort('Completed')\">Completed\n            </button></div>\n            </div>\n            <div class=\"col-sm-12\" *ngFor=\"let tsk of tasks |filter: project_ID\">\n              <div class=\"row\">\n                <div class=\"col-sm-2 pull-left\" > Task</div>\n                <div class=\"col-sm-2 pull-left\" style=\"margin-left: 5px;\"> Parent</div>\n                <div class=\"col-sm-1 pull-left\"> Priority</div>\n                <div class=\"col-sm-2 pull-left\"> Start</div>\n                <div class=\"col-sm-2 pull-left\"> End</div>\n                <div class=\"pull-left\"></div>\n              </div>\n              <div class=\"row\" >\n                <div class=\"col-sm-2 pull-left\" style=\"background-color:lightgray; height: 50px; \"> {{tsk.TaskName}}</div>\n                <div class=\"col-sm-2 pull-left\" style=\"background-color:lightgray; height: 50px;margin-left: 5px;\"> {{tsk.ParentTask.Parent_Task}}</div>\n                <div class=\"col-sm-1 pull-left\"> {{tsk.Priority}}</div>\n                <div class=\"col-sm-2 pull-left\"> {{tsk.Start_Date | date:'yyyy-MM-dd'}}</div>\n                <div class=\"col-sm-2 pull-left\"> {{tsk.End_Date | date:'yyyy-MM-dd'}}</div>\n                <div class=\"pull-left\" *ngIf=\"tsk.Status != 'Completed'\">\n                  <button (click)=\"view(tsk.Task_ID)\" class=\"btn btn-primary btn-md\" style=\"width:80px;\" name=\"Edit\" id=\"Edit\">  Edit </button> &nbsp;\n                  <button (click)=\"delete(tsk.Task_ID)\" class=\"btn btn-primary btn-md\" style=\"width:80px;\" name=\"Delete\" id=\"Delete\">  End Task </button></div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/_components/viewtask/viewtask.component.ts":
/*!************************************************************!*\
  !*** ./src/app/_components/viewtask/viewtask.component.ts ***!
  \************************************************************/
/*! exports provided: ViewtaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewtaskComponent", function() { return ViewtaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/task.service */ "./src/app/_services/task.service.ts");
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/project.service */ "./src/app/_services/project.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/user.service */ "./src/app/_services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ViewtaskComponent = /** @class */ (function () {
    function ViewtaskComponent(modalService, userService, projectService, router, taskService) {
        this.modalService = modalService;
        this.userService = userService;
        this.projectService = projectService;
        this.router = router;
        this.taskService = taskService;
        this.tasks = [];
        this.taskData = { Task_ID: null, Parent_ID: null, Project_ID: null, TaskName: '', Start_Date: null, End_Date: null, Priority: null, Status: '', Users: null, ParentTask: null, User_ID: null };
        this.parenttaskData = { Parent_ID: null, Parent_Task: '' };
        this.projectData = { Project_ID: null, ProjectName: '', StartDate: null, EndDate: null, Priority: null, User_ID: null, Users: null, Tasks: null };
        this.userData = { User_ID: null, FirstName: '', LastName: '', Employee_ID: null, Project_ID: null, Task_ID: null };
    } // {2}
    ViewtaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskService.getparentTasks()
            .subscribe(function (response) {
            _this.parenttasks = response;
            console.log(response);
        });
        this.projectService.getProjects()
            .subscribe(function (response) {
            _this.projects = response;
        });
        this.userService.getUsers()
            .subscribe(function (response) {
            _this.users = response;
            console.log(response);
        });
        this.taskService.getTasks()
            .subscribe(function (response) {
            _this.tasks = response;
            console.log(response);
        });
    };
    ViewtaskComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template); // {3}
    };
    ViewtaskComponent.prototype.closeModal = function (template) {
        // this.userBodyTextname=template.elementRef.
        this.modalService.hide(1);
        //search();
    };
    ViewtaskComponent.prototype.onChange = function (event) {
        //console.log(event);
        this.projectname = event.target.options[event.target.options.selectedIndex].text;
        this.project_ID = event.target.options[event.target.options.selectedIndex].value;
        // console.log(text);
    };
    ViewtaskComponent.prototype.onUserChange = function (event) {
        //console.log(event);
        this.username = event.target.options[event.target.options.selectedIndex].text;
        this.user_ID = event.target.options[event.target.options.selectedIndex].value;
        // console.log(text);
    };
    ViewtaskComponent.prototype.ontaskChange = function (event) {
        //console.log(event);
        this.parenttask = event.target.options[event.target.options.selectedIndex].text;
        this.parentid = event.target.options[event.target.options.selectedIndex].value;
        // console.log(Parent_IDtext);Parent_ID
    };
    ViewtaskComponent.prototype.submit = function (form) {
        var _this = this;
        var request = form.value;
        request.Project_ID = this.project_ID.toString();
        request.Parent_ID = this.parentid.toString();
        if (!this.isEdit) {
            this.taskService.saveTask(request)
                .subscribe(function (response) {
                _this.tasks.push(response);
                console.log(response);
            }, function (error) {
                for (var _i = 0, _a = Object.keys(error.error.ModelState); _i < _a.length; _i++) {
                    var key = _a[_i];
                    for (var _b = 0, _c = error.error.ModelState[key]; _b < _c.length; _b++) {
                        var err = _c[_b];
                        alert(err);
                    }
                }
            }, function () {
                form.reset();
            });
        }
        else {
            request.Task_ID = this.taskId;
            this.taskService.saveTask(request)
                .subscribe(function (task) {
                var tskIndex = _this.tasks.findIndex(function (tsk) { return tsk.Task_ID == _this.taskId; });
                if (tskIndex != -1) {
                    _this.tasks[tskIndex] = task;
                }
                confirm('Task Details Updated Successfully');
            }, function (error) {
                for (var _i = 0, _a = Object.keys(error.error.ModelState); _i < _a.length; _i++) {
                    var key = _a[_i];
                    for (var _b = 0, _c = error.error.ModelState[key]; _b < _c.length; _b++) {
                        var err = _c[_b];
                        alert(err);
                    }
                }
            }, function () {
                form.reset();
                _this.isEdit = false;
            });
        }
    };
    ViewtaskComponent.prototype.delete = function (id) {
        var _this = this;
        var isDelete = confirm('Do you wish to End the Task?');
        if (isDelete) {
            this.taskService.deleteTask(id)
                .subscribe(function (task) {
                var tskIndex = _this.tasks.findIndex(function (tsk) { return tsk.Task_ID == _this.taskId; });
                if (tskIndex != -1) {
                    _this.tasks[tskIndex].Status = 'Completed';
                }
                confirm('Task has been Completed Successfully');
                location.reload();
            }, function (error) {
                for (var _i = 0, _a = Object.keys(error.error.ModelState); _i < _a.length; _i++) {
                    var key = _a[_i];
                    for (var _b = 0, _c = error.error.ModelState[key]; _b < _c.length; _b++) {
                        var err = _c[_b];
                        alert(err);
                    }
                }
            }, function () {
                // form.reset();
                _this.isEdit = false;
            });
        }
    };
    ViewtaskComponent.prototype.edit = function (id) {
        var _this = this;
        this.taskService.getTask(id)
            .subscribe(function (task) {
            _this.taskData.Parent_ID = task.Parent_ID;
            _this.taskData.Project_ID = task.Project_ID;
            _this.taskData.TaskName = task.TaskName;
            _this.taskData.End_Date = task.End_Date;
            _this.taskData.Start_Date = task.Start_Date;
            _this.taskData.Priority = task.Priority;
            _this.taskData.Status = task.Status;
            _this.isEdit = true;
            _this.taskId = id;
        });
    };
    ViewtaskComponent.prototype.view = function (id) {
        this.router.navigate(['/tasks', id]);
    };
    ViewtaskComponent.prototype.sort = function (param) {
        var _this = this;
        if (param == 'StartDate') {
            this.taskService.getTasks()
                .subscribe(function (response) {
                _this.tasks = response.sort(function (a, b) {
                    return new Date(b.Start_Date) - new Date(a.Start_Date);
                });
            });
        }
        if (param == 'EndDate') {
            this.taskService.getTasks()
                .subscribe(function (response) {
                _this.tasks = response.sort(function (a, b) {
                    return new Date(b.End_Date) - new Date(a.End_Date);
                });
            });
        }
        if (param == 'Priority') {
            this.taskService.getTasks()
                .subscribe(function (response) {
                _this.tasks = response.sort(function (a, b) { return a.Priority.toString().localeCompare(b.Priority.toString(), undefined, { numeric: true }); });
            });
        }
        if (param == 'Completed') {
            this.taskService.getTasks()
                .subscribe(function (response) {
                _this.tasks = response.sort(function (a, b) { return a.Status.toString().localeCompare(b.Status); });
            });
        }
    };
    ViewtaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewtask',
            template: __webpack_require__(/*! ./viewtask.component.html */ "./src/app/_components/viewtask/viewtask.component.html"),
            styles: [__webpack_require__(/*! ./viewtask.component.css */ "./src/app/_components/viewtask/viewtask.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], src_app_services_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"]])
    ], ViewtaskComponent);
    return ViewtaskComponent;
}());



/***/ }),

/***/ "./src/app/_services/project.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/project.service.ts ***!
  \**********************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectService = /** @class */ (function () {
    function ProjectService(http) {
        this.http = http;
        // private apiUrl: string = 'http://localhost:57022/api/projects';
        this.apiUrl = 'http://localhost/ProjectManagementService/api/projects';
    }
    ProjectService.prototype.saveProject = function (request) {
        return this.http.post(this.apiUrl, request);
    };
    ProjectService.prototype.getProjects = function () {
        return this.http.get(this.apiUrl + '/GetProjects/');
    };
    ProjectService.prototype.deleteProject = function (id) {
        return this.http.get(this.apiUrl + '/DeleteProject/' + id);
    };
    ProjectService.prototype.getProject = function (id) {
        return this.http.get(this.apiUrl + '/' + id);
    };
    ProjectService.prototype.updateProject = function (id, request) {
        return this.http.put(this.apiUrl + '/' + id, request);
    };
    ProjectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/app/_services/task.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/task.service.ts ***!
  \*******************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskService = /** @class */ (function () {
    function TaskService(http) {
        this.http = http;
        // private apiUrl: string = 'http://localhost:57022/api/tasks';
        this.apiUrl = 'http://localhost/ProjectManagementService/api/tasks';
    }
    TaskService.prototype.saveTask = function (request) {
        return this.http.post(this.apiUrl, request);
    };
    TaskService.prototype.getTasks = function () {
        return this.http.get(this.apiUrl);
    };
    TaskService.prototype.getparentTasks = function () {
        return this.http.get(this.apiUrl + "/GetParentTasks");
    };
    TaskService.prototype.deleteTask = function (id) {
        return this.http.get(this.apiUrl + '/DeleteTaskData/' + id);
    };
    TaskService.prototype.getTask = function (id) {
        return this.http.get(this.apiUrl + '/' + id);
    };
    TaskService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        // private apiUrl: string = 'http://localhost:57022/api/users';
        this.apiUrl = 'http://localhost/ProjectManagementService/api/users';
    }
    UserService.prototype.saveUser = function (request) {
        return this.http.post(this.apiUrl, request);
    };
    UserService.prototype.getUsers = function () {
        return this.http.get(this.apiUrl + '/GetUsers/');
    };
    UserService.prototype.deleteUser = function (id) {
        return this.http.get(this.apiUrl + '/DeleteUser/' + id);
    };
    UserService.prototype.getUser = function (id) {
        return this.http.get(this.apiUrl + '/' + id);
    };
    UserService.prototype.updateUser = function (id, request) {
        return this.http.put(this.apiUrl + '/' + id, request);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n\n</div>\n"

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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ProjectManagement-SPA';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_project_project_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_components/project/project.component */ "./src/app/_components/project/project.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_nav_nav_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_components/nav/nav/nav.component */ "./src/app/_components/nav/nav/nav.component.ts");
/* harmony import */ var _components_task_task_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_components/task/task.component */ "./src/app/_components/task/task.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_components/user/user.component */ "./src/app/_components/user/user.component.ts");
/* harmony import */ var _components_viewtask_viewtask_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_components/viewtask/viewtask.component */ "./src/app/_components/viewtask/viewtask.component.ts");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var ag_grid_angular_main__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ag-grid-angular/main */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular_main__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular_main__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-select-dropdown */ "./node_modules/ngx-select-dropdown/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var routes = [
    { path: '', component: _components_project_project_component__WEBPACK_IMPORTED_MODULE_6__["ProjectComponent"] },
    { path: 'projects', component: _components_project_project_component__WEBPACK_IMPORTED_MODULE_6__["ProjectComponent"] },
    { path: 'tasks', component: _components_task_task_component__WEBPACK_IMPORTED_MODULE_9__["TaskComponent"] },
    { path: 'tasks/:id', component: _components_task_task_component__WEBPACK_IMPORTED_MODULE_9__["TaskComponent"] },
    { path: 'users', component: _components_user_user_component__WEBPACK_IMPORTED_MODULE_10__["UserComponent"] },
    { path: 'viewtask', component: _components_viewtask_viewtask_component__WEBPACK_IMPORTED_MODULE_11__["ViewtaskComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_project_project_component__WEBPACK_IMPORTED_MODULE_6__["ProjectComponent"],
                _components_nav_nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"],
                _components_task_task_component__WEBPACK_IMPORTED_MODULE_9__["TaskComponent"],
                _components_user_user_component__WEBPACK_IMPORTED_MODULE_10__["UserComponent"],
                _components_viewtask_viewtask_component__WEBPACK_IMPORTED_MODULE_11__["ViewtaskComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_15__["Ng2SearchPipeModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_12__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_13__["TooltipModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__["ModalModule"].forRoot(),
                ag_grid_angular_main__WEBPACK_IMPORTED_MODULE_16__["AgGridModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes),
                ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_17__["SelectDropDownModule"]
            ],
            providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_4__["HashLocationStrategy"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            exports: [ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_12__["BsDropdownModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_13__["TooltipModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__["ModalModule"]]
        })
    ], AppModule);
    return AppModule;
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

module.exports = __webpack_require__(/*! C:\ProjectManagement\ProjectManagement-SPA\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map