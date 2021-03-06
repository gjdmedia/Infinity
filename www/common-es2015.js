(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "/OzF":
/*!****************************************************!*\
  !*** ./src/app/user/profile/user-profile.model.ts ***!
  \****************************************************/
/*! exports provided: UserProfileModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileModel", function() { return UserProfileModel; });
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shell/data-store */ "f/Ol");

class UserProfileModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
        this.friends = [
            {
                image: '',
                name: ''
            },
            {
                image: '',
                name: ''
            },
            {
                image: '',
                name: ''
            },
            {
                image: '',
                name: ''
            }
        ];
        this.photos = [
            '',
            '',
            '',
            ''
        ];
    }
}


/***/ }),

/***/ "/pNQ":
/*!********************************************!*\
  !*** ./src/app/fashion/fashion.service.ts ***!
  \********************************************/
/*! exports provided: FashionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FashionService", function() { return FashionService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shell/data-store */ "f/Ol");
/* harmony import */ var _listing_fashion_listing_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listing/fashion-listing.model */ "nfFl");
/* harmony import */ var _details_fashion_details_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./details/fashion-details.model */ "W6mW");





class FashionService {
    constructor(http) {
        this.http = http;
    }
    getListingDataSource() {
        return this.http.get('./assets/data/fashion/listing.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            // Note: HttpClient cannot know how to instantiate a class for the returned data
            // We need to properly cast types from json data
            const listing = new _listing_fashion_listing_model__WEBPACK_IMPORTED_MODULE_3__["FashionListingModel"]();
            // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
            // Note: If you have non-enummerable properties, you can try a spread operator instead. listing = {...data};
            // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)
            Object.assign(listing, data);
            return listing;
        }));
    }
    getListingStore(dataSource) {
        // Use cache if available
        if (!this.listingDataStore) {
            // Initialize the model specifying that it is a shell model
            const shellModel = new _listing_fashion_listing_model__WEBPACK_IMPORTED_MODULE_3__["FashionListingModel"]();
            this.listingDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_2__["DataStore"](shellModel);
            // Trigger the loading mechanism (with shell) in the dataStore
            this.listingDataStore.load(dataSource);
        }
        return this.listingDataStore;
    }
    getDetailsDataSource() {
        return this.http.get('./assets/data/fashion/details.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            // Note: HttpClient cannot know how to instantiate a class for the returned data
            // We need to properly cast types from json data
            const details = new _details_fashion_details_model__WEBPACK_IMPORTED_MODULE_4__["FashionDetailsModel"]();
            // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
            // Note: If you have non-enummerable properties, you can try a spread operator instead. details = {...data};
            // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)
            Object.assign(details, data);
            return details;
        }));
    }
    getDetailsStore(dataSource) {
        // Use cache if available
        if (!this.detailsDataStore) {
            // Initialize the model specifying that it is a shell model
            const shellModel = new _details_fashion_details_model__WEBPACK_IMPORTED_MODULE_4__["FashionDetailsModel"]();
            this.detailsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_2__["DataStore"](shellModel);
            // Trigger the loading mechanism (with shell) in the dataStore
            this.detailsDataStore.load(dataSource);
        }
        return this.detailsDataStore;
    }
}


/***/ }),

/***/ "07p5":
/*!************************************************************************************!*\
  !*** ./src/app/terms-of-service/styles/terms-of-service.page.scss.shim.ngstyle.js ***!
  \************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
var styles = ["[_nghost-%COMP%] {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background-shade);\n}\n\n.legal-content[_ngcontent-%COMP%] {\n  --background: var(--page-background);\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --padding-top: var(--page-margin);\n  --padding-bottom: var(--page-margin);\n}\n\n.legal-content[_ngcontent-%COMP%]   .legal-title[_ngcontent-%COMP%] {\n  color: var(--ion-color-secondary);\n  margin: var(--page-margin) 0px calc(var(--page-margin) / 2);\n}\n\n.legal-content[_ngcontent-%COMP%]   .legal-text[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium);\n  margin: calc(var(--page-margin) / 2) 0px var(--page-margin);\n  font-size: 14px;\n  line-height: 20px;\n  text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVybXMtb2Ytc2VydmljZS9zdHlsZXMvdGVybXMtb2Ytc2VydmljZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxzQ0FBQTtFQUNBLDhDQUFBO0FBREY7O0FBS0E7RUFDRSxvQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQ0FBQTtFQUNBLG9DQUFBO0FBRkY7O0FBSUU7RUFDRSxpQ0FBQTtFQUNBLDJEQUFBO0FBRko7O0FBS0U7RUFDRSw4QkFBQTtFQUNBLDJEQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFISiIsImZpbGUiOiJzcmMvYXBwL3Rlcm1zLW9mLXNlcnZpY2Uvc3R5bGVzL3Rlcm1zLW9mLXNlcnZpY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VzdG9tIHZhcmlhYmxlc1xuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG46aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1icm9hZC1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xufVxuXG4vLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbi5sZWdhbC1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAubGVnYWwtdGl0bGUge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgfVxuXG4gIC5sZWdhbC10ZXh0IHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIH1cbn1cbiJdfQ== */"];



/***/ }),

/***/ "3vsf":
/*!**************************************************************!*\
  !*** ./src/app/carpentry/listing/carpentry-listing.model.ts ***!
  \**************************************************************/
/*! exports provided: CarpentryItemModel, CarpentryListingModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarpentryItemModel", function() { return CarpentryItemModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarpentryListingModel", function() { return CarpentryListingModel; });
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shell/data-store */ "f/Ol");

class CarpentryItemModel {
    constructor() {
        this.tags = [
            '',
            '',
            ''
        ];
        this.pictures = [
            '',
            '',
            '',
            '',
            ''
        ];
    }
}
class CarpentryListingModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
        this.items = [
            new CarpentryItemModel(),
            new CarpentryItemModel(),
            new CarpentryItemModel(),
            new CarpentryItemModel()
        ];
    }
}


/***/ }),

/***/ "5HpK":
/*!****************************************!*\
  !*** ./src/app/brick/brick.service.ts ***!
  \****************************************/
/*! exports provided: BrickService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrickService", function() { return BrickService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shell/data-store */ "f/Ol");
/* harmony import */ var _listing_brick_listing_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listing/brick-listing.model */ "UQC2");
/* harmony import */ var _details_brick_details_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./details/brick-details.model */ "tER8");





class BrickService {
    constructor(http) {
        this.http = http;
    }
    getListingDataSource() {
        return this.http.get('./assets/data/brick/listing.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            // Note: HttpClient cannot know how to instantiate a class for the returned data
            // We need to properly cast types from json data
            const listing = new _listing_brick_listing_model__WEBPACK_IMPORTED_MODULE_3__["BrickListingModel"]();
            // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
            // Note: If you have non-enummerable properties, you can try a spread operator instead. listing = {...data};
            // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)
            Object.assign(listing, data);
            return listing;
        }));
    }
    getListingStore(dataSource) {
        // Use cache if available
        if (!this.listingDataStore) {
            // Initialize the model specifying that it is a shell model
            const shellModel = new _listing_brick_listing_model__WEBPACK_IMPORTED_MODULE_3__["BrickListingModel"]();
            this.listingDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_2__["DataStore"](shellModel);
            // Trigger the loading mechanism (with shell) in the dataStore
            this.listingDataStore.load(dataSource);
        }
        return this.listingDataStore;
    }
    getDetailsDataSource(slug) {
        return this.http.get('./assets/data/brick/details.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["flatMap"])(details => details.items.filter(item => item.slug === slug)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            // Note: HttpClient cannot know how to instantiate a class for the returned data
            // We need to properly cast types from json data
            const details = new _details_brick_details_model__WEBPACK_IMPORTED_MODULE_4__["BrickDetailsModel"]();
            // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
            // Note: If you have non-enummerable properties, you can try a spread operator instead. details = {...data};
            // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)
            Object.assign(details, data);
            return details;
        }));
    }
    getDetailsStore(dataSource) {
        // Initialize the model specifying that it is a shell model
        const shellModel = new _details_brick_details_model__WEBPACK_IMPORTED_MODULE_4__["BrickDetailsModel"]();
        this.detailsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_2__["DataStore"](shellModel);
        // Trigger the loading mechanism (with shell) in the dataStore
        this.detailsDataStore.load(dataSource);
        return this.detailsDataStore;
    }
}


/***/ }),

/***/ "5e4S":
/*!**********************************************!*\
  !*** ./src/app/showcase/showcase.service.ts ***!
  \**********************************************/
/*! exports provided: ShowcaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseService", function() { return ShowcaseService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _showcase_shell_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./showcase-shell.model */ "wwno");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shell/data-store */ "f/Ol");



// tslint:disable-next-line:max-line-length


class ShowcaseService {
    constructor(http) {
        this.http = http;
        this.openDataStream = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"]();
    }
    getDataSourceWithDelay() {
        return this.http.get('./assets/data/showcase/shell.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(val => {
            console.log('getData STARTED');
            // tslint:disable-next-line:no-console
            console.time('getData Roundtrip');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(5000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => {
            console.log('getData COMPLETED');
            // tslint:disable-next-line:no-console
            console.timeEnd('getData Roundtrip');
        }));
    }
    getSimpleDataSource() {
        return this.http.get('./assets/data/showcase/shell.json');
    }
    getSimpleDataStore(dataSource) {
        // Use cache if available
        if (!this.showcaseDataStore) {
            // Initialize the model specifying that it is a shell model
            const shellModel = new _showcase_shell_model__WEBPACK_IMPORTED_MODULE_3__["ShowcaseShellModel"]();
            this.showcaseDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_4__["DataStore"](shellModel);
            // Trigger the loading mechanism (with shell) in the dataStore
            this.showcaseDataStore.load(dataSource);
        }
        return this.showcaseDataStore;
    }
    getListDataSource() {
        return this.http.get('https://reqres.in/api/users').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(result => result['data']));
    }
    getPaginationDataSource(page) {
        return this.http.get('https://reqres.in/api/users?page=' + page).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(result => result['data']), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(results => results.length > 0));
    }
    getMultipleDataSourceA() {
        return this.http.get('./assets/data/travel/listing.json');
    }
    getMultipleDataSourceB() {
        return this.http.get('./assets/data/fashion/listing.json');
    }
    getDependantDataSourcePost() {
        return this.http.get('https://jsonplaceholder.typicode.com/posts/1');
    }
    // tslint:disable-next-line:max-line-length
    getDependantDataSourcePostComments(dependantDataSource) {
        return dependantDataSource.pipe(
        // Filter user values that are not shells. We need to add this filter if using the combinedUserDataStore timeline
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(post => !post.isShell), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(post => {
            return this.http.get('https://jsonplaceholder.typicode.com/comments?postId=' + post.id);
        }));
    }
    getUser(userId) {
        return this.http.get('https://jsonplaceholder.typicode.com/users/' + userId);
    }
    // get the company details, a subset of the user data
    getUserSubsetData(userId) {
        const dataObservable = this.http.get('https://jsonplaceholder.typicode.com/users/' + userId);
        return dataObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((jsonResponse) => {
            const filteredData = Object.assign({}, jsonResponse.company);
            return filteredData;
        }));
    }
    getTasks() {
        return this.http.get('https://jsonplaceholder.typicode.com/todos');
    }
    // Concat the task with the details of the user
    getCombinedTasksUserDataSource() {
        return this.getTasks().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(tasks => {
            const completeTaskData = tasks.map(task => {
                // for each task retrun a new observable with the ShowcaseCombinedTaskUserModel
                const taskUser = this.getUser(task.userId);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([
                    Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(task),
                    taskUser
                ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(([taskData, user]) => {
                    return Object.assign(Object.assign({}, taskData), { user: user });
                }));
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(completeTaskData);
        }));
    }
    getOpenDataStream() {
        const firstLoadData = this.getPaginationDataSource(1);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.openDataStream.asObservable(), firstLoadData);
    }
    pushValuesToOpenStream() {
        const stackedValues = this.getStackedValues();
        this.openDataStream.next(stackedValues);
    }
    getStackedValuesDataSource() {
        const stackedValues = this.getStackedValues();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(stackedValues).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(3000));
    }
    getStackedValues() {
        const newUser = {
            first_name: 'Agustin',
            last_name: 'Nitsuga',
            avatar: './assets/images/user/person_1.jpg'
        };
        // Get a random integer between 1 (and only 1) and 'max'
        const getRand = (max, min = 1) => {
            return Math.floor(Math.random() * max) + min;
        };
        // Randomly send one, two or three users
        return Array(getRand(3)).fill(newUser);
    }
}


/***/ }),

/***/ "6MMK":
/*!********************************************!*\
  !*** ./src/app/roofing/roofing.service.ts ***!
  \********************************************/
/*! exports provided: RoofingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoofingService", function() { return RoofingService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shell/data-store */ "f/Ol");
/* harmony import */ var _listing_roofing_listing_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listing/roofing-listing.model */ "NmiO");
/* harmony import */ var _details_roofing_details_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./details/roofing-details.model */ "wCfV");





class RoofingService {
    constructor(http) {
        this.http = http;
    }
    getListingDataSource() {
        return this.http.get('./assets/data/roofing/listing.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            // Note: HttpClient cannot know how to instantiate a class for the returned data
            // We need to properly cast types from json data
            const listing = new _listing_roofing_listing_model__WEBPACK_IMPORTED_MODULE_3__["RoofingListingModel"]();
            // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
            // Note: If you have non-enummerable properties, you can try a spread operator instead. listing = {...data};
            // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)
            Object.assign(listing, data);
            return listing;
        }));
    }
    getListingStore(dataSource) {
        // Use cache if available
        if (!this.listingDataStore) {
            // Initialize the model specifying that it is a shell model
            const shellModel = new _listing_roofing_listing_model__WEBPACK_IMPORTED_MODULE_3__["RoofingListingModel"]();
            this.listingDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_2__["DataStore"](shellModel);
            // Trigger the loading mechanism (with shell) in the dataStore
            this.listingDataStore.load(dataSource);
        }
        return this.listingDataStore;
    }
    getDetailsDataSource(slug) {
        return this.http.get('./assets/data/roofing/details.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["flatMap"])(details => details.items.filter(item => item.slug === slug)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            // Note: HttpClient cannot know how to instantiate a class for the returned data
            // We need to properly cast types from json data
            const details = new _details_roofing_details_model__WEBPACK_IMPORTED_MODULE_4__["RoofingDetailsModel"]();
            // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
            // Note: If you have non-enummerable properties, you can try a spread operator instead. details = {...data};
            // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)
            Object.assign(details, data);
            return details;
        }));
    }
    getDetailsStore(dataSource) {
        // Initialize the model specifying that it is a shell model
        const shellModel = new _details_roofing_details_model__WEBPACK_IMPORTED_MODULE_4__["RoofingDetailsModel"]();
        this.detailsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_2__["DataStore"](shellModel);
        // Trigger the loading mechanism (with shell) in the dataStore
        this.detailsDataStore.load(dataSource);
        return this.detailsDataStore;
    }
}


/***/ }),

/***/ "6i10":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
    'bubbles': {
        dur: 1000,
        circles: 9,
        fn: (dur, index, total) => {
            const animationDelay = `${(dur * index / total) - dur}ms`;
            const angle = 2 * Math.PI * index / total;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circles': {
        dur: 1000,
        circles: 8,
        fn: (dur, index, total) => {
            const step = index / total;
            const animationDelay = `${(dur * step) - dur}ms`;
            const angle = 2 * Math.PI * step;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: () => {
            return {
                r: 20,
                cx: 48,
                cy: 48,
                fill: 'none',
                viewBox: '24 24 48 48',
                transform: 'translate(0,0)',
                style: {}
            };
        }
    },
    'crescent': {
        dur: 750,
        circles: 1,
        fn: () => {
            return {
                r: 26,
                style: {}
            };
        }
    },
    'dots': {
        dur: 750,
        circles: 3,
        fn: (_, index) => {
            const animationDelay = -(110 * index) + 'ms';
            return {
                r: 6,
                style: {
                    'left': `${9 - (9 * index)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 17,
                y2: 29,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines-small': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 12,
                y2: 20,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    }
};
const SPINNERS = spinners;




/***/ }),

/***/ "7d5M":
/*!****************************************************!*\
  !*** ./src/app/user/friends/user-friends.model.ts ***!
  \****************************************************/
/*! exports provided: UserFriendsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFriendsModel", function() { return UserFriendsModel; });
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shell/data-store */ "f/Ol");

class UserFriendsModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
        this.friends = [
            {
                image: '',
                name: '',
                job: '',
                followers: '',
                followings: '',
                following: false
            },
            {
                image: '',
                name: '',
                job: '',
                followers: '',
                followings: '',
                following: true
            },
            {
                image: '',
                name: '',
                job: '',
                followers: '',
                followings: '',
                following: false
            },
            {
                image: '',
                name: '',
                job: '',
                followers: '',
                followings: '',
                following: false
            }
        ];
        this.followers = [
            {
                image: '',
                name: '',
                job: '',
                followers: '',
                followings: '',
                following: false
            },
            {
                image: '',
                name: '',
                job: '',
                followers: '',
                followings: '',
                following: false
            },
            {
                image: '',
                name: '',
                job: '',
                followers: '',
                followings: '',
                following: false
            },
            {
                image: '',
                name: '',
                job: '',
                followers: '',
                followings: '',
                following: true
            }
        ];
        this.following = [
            {
                image: '',
                name: '',
                job: '',
                followers: '',
                followings: '',
                following: false
            },
            {
                image: '',
                name: '',
                job: '',
                followers: '',
                followings: '',
                following: false
            },
            {
                image: '',
                name: '',
                job: '',
                followers: '',
                followings: '',
                following: false
            },
            {
                image: '',
                name: '',
                job: '',
                followers: '',
                followings: '',
                following: false
            }
        ];
    }
}


/***/ }),

/***/ "8zxt":
/*!********************************************************!*\
  !*** ./src/app/travel/listing/travel-listing.model.ts ***!
  \********************************************************/
/*! exports provided: TravelItemModel, TravelListingModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelItemModel", function() { return TravelItemModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelListingModel", function() { return TravelListingModel; });
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shell/data-store */ "f/Ol");

class TravelItemModel {
}
class TravelListingModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
        this.items = [
            new TravelItemModel(),
            new TravelItemModel(),
            new TravelItemModel(),
            new TravelItemModel()
        ];
    }
}


/***/ }),

/***/ "CpCY":
/*!*********************************************************************!*\
  !*** ./src/app/terms-of-service/terms-of-service.page.ngfactory.js ***!
  \*********************************************************************/
/*! exports provided: RenderType_TermsOfServicePage, View_TermsOfServicePage_0, View_TermsOfServicePage_Host_0, TermsOfServicePageNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TermsOfServicePage", function() { return RenderType_TermsOfServicePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TermsOfServicePage_0", function() { return View_TermsOfServicePage_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TermsOfServicePage_Host_0", function() { return View_TermsOfServicePage_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsOfServicePageNgFactory", function() { return TermsOfServicePageNgFactory; });
/* harmony import */ var _styles_terms_of_service_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/terms-of-service.page.scss.shim.ngstyle */ "07p5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@ionic/angular/ionic-angular.ngfactory */ "MKJQ");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _terms_of_service_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./terms-of-service.page */ "XXTH");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 





var styles_TermsOfServicePage = [_styles_terms_of_service_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_TermsOfServicePage = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_TermsOfServicePage, data: {} });

function View_TermsOfServicePage_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 11, "ion-header", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonHeader_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 9, "ion-toolbar", [["color", "primary"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonToolbar_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonToolbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { color: [0, "color"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 4, "ion-buttons", [["slot", "end"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonButtons_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonButtons"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, 0, 2, "ion-button", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.dismiss() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonButton_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Close"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, 0, 2, "ion-title", [], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonTitle_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonTitle"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTitle"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Terms Of Service "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 13, "ion-content", [["class", "legal-content"]], null, null, null, _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IonContent_0"], _node_modules_ionic_angular_ionic_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IonContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 49152, null, 0, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, 0, 1, "h3", [["class", "legal-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Welcome to Ionic 5 Demo App"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, 0, 1, "p", [["class", "legal-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, 0, 1, "h3", [["class", "legal-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Using our services"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, 0, 1, "p", [["class", "legal-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, 0, 1, "h3", [["class", "legal-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["About these terms"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, 0, 1, "p", [["class", "legal-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. "]))], function (_ck, _v) { var currVal_0 = "primary"; _ck(_v, 3, 0, currVal_0); }, null); }
function View_TermsOfServicePage_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-terms-of-service-page", [], null, null, null, View_TermsOfServicePage_0, RenderType_TermsOfServicePage)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _terms_of_service_page__WEBPACK_IMPORTED_MODULE_4__["TermsOfServicePage"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]], null, null)], null, null); }
var TermsOfServicePageNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-terms-of-service-page", _terms_of_service_page__WEBPACK_IMPORTED_MODULE_4__["TermsOfServicePage"], View_TermsOfServicePage_Host_0, {}, {}, []);



/***/ }),

/***/ "FUeK":
/*!******************************************************************!*\
  !*** ./src/app/real-estate/listing/real-estate-listing.model.ts ***!
  \******************************************************************/
/*! exports provided: RealEstateItemModel, RealEstateListingModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealEstateItemModel", function() { return RealEstateItemModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealEstateListingModel", function() { return RealEstateListingModel; });
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shell/data-store */ "f/Ol");

class RealEstateItemModel {
    constructor() {
        this.amenities = [
            {
                name: '',
                icon: ''
            },
            {
                name: '',
                icon: ''
            }
        ];
    }
}
class RealEstateListingModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
        this.items = [
            new RealEstateItemModel(),
            new RealEstateItemModel(),
            new RealEstateItemModel(),
            new RealEstateItemModel()
        ];
    }
}


/***/ }),

/***/ "GBb9":
/*!******************************************************************!*\
  !*** ./src/app/real-estate/details/real-estate-details.model.ts ***!
  \******************************************************************/
/*! exports provided: RealEstateDetailsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealEstateDetailsModel", function() { return RealEstateDetailsModel; });
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shell/data-store */ "f/Ol");

class RealEstateDetailsModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
        this.amenities = [
            {
                name: '',
                icon: ''
            },
            {
                name: '',
                icon: ''
            },
            {
                name: '',
                icon: ''
            },
            {
                name: '',
                icon: ''
            },
            {
                name: '',
                icon: ''
            },
            {
                name: '',
                icon: ''
            }
        ];
    }
}


/***/ }),

/***/ "IoD4":
/*!****************************************************!*\
  !*** ./src/app/wood/details/wood-details.model.ts ***!
  \****************************************************/
/*! exports provided: woodDetailsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "woodDetailsModel", function() { return woodDetailsModel; });
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shell/data-store */ "f/Ol");

class woodDetailsModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
        this.ratings = [
            {
                concept: '',
                rate: null
            },
            {
                concept: '',
                rate: null
            },
            {
                concept: '',
                rate: null
            }
        ];
        this.openHours = [
            {
                day: '',
                open: true,
                hourFrom: '',
                hourTo: ''
            },
            {
                day: '',
                open: true,
                hourFrom: '',
                hourTo: ''
            },
            {
                day: '',
                open: false,
                hourFrom: '',
                hourTo: ''
            }
        ];
        this.tags = [
            '',
            '',
            ''
        ];
        this.usersPictures = [
            '',
            '',
            '',
            '',
            '',
            ''
        ];
        this.popularDishes = [
            {
                name: '',
                rate: null,
                votesCount: null
            },
            {
                name: '',
                rate: null,
                votesCount: null
            }
        ];
        this.reviews = [
            {
                user: {
                    image: '',
                    name: '',
                    reviewsCount: null,
                    points: null
                },
                avgRating: null,
                ratings: [
                    {
                        concept: '',
                        rate: null
                    },
                    {
                        concept: '',
                        rate: null
                    },
                    {
                        concept: '',
                        rate: null
                    }
                ],
                publishedAt: null,
                message: ''
            },
            {
                user: {
                    image: '',
                    name: '',
                    reviewsCount: null,
                    points: null
                },
                avgRating: null,
                ratings: [
                    {
                        concept: '',
                        rate: null
                    },
                    {
                        concept: '',
                        rate: null
                    },
                    {
                        concept: '',
                        rate: null
                    }
                ],
                publishedAt: null,
                message: ''
            },
            {
                user: {
                    image: '',
                    name: '',
                    reviewsCount: null,
                    points: null
                },
                avgRating: null,
                ratings: [
                    {
                        concept: '',
                        rate: null
                    },
                    {
                        concept: '',
                        rate: null
                    },
                    {
                        concept: '',
                        rate: null
                    }
                ],
                publishedAt: null,
                message: ''
            }
        ];
        this.popularRecipes = [
            {
                showcaseImage: '',
                name: '',
                chef: {
                    name: '',
                    image: ''
                },
                difficulty: '',
                time: '',
                calories: '',
                chefExtract: ''
            }
        ];
    }
}


/***/ }),

/***/ "K0As":
/*!**************************************************************!*\
  !*** ./src/app/carpentry/details/carpentry-details.model.ts ***!
  \**************************************************************/
/*! exports provided: CarpentryDetailsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarpentryDetailsModel", function() { return CarpentryDetailsModel; });
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shell/data-store */ "f/Ol");

class CarpentryDetailsModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
        this.ratings = [
            {
                concept: '',
                rate: null
            },
            {
                concept: '',
                rate: null
            },
            {
                concept: '',
                rate: null
            }
        ];
        this.openHours = [
            {
                day: '',
                open: true,
                hourFrom: '',
                hourTo: ''
            },
            {
                day: '',
                open: true,
                hourFrom: '',
                hourTo: ''
            },
            {
                day: '',
                open: false,
                hourFrom: '',
                hourTo: ''
            }
        ];
        this.tags = [
            '',
            '',
            ''
        ];
        this.usersPictures = [
            '',
            '',
            '',
            '',
            '',
            ''
        ];
        this.popularDishes = [
            {
                name: '',
                rate: null,
                votesCount: null
            },
            {
                name: '',
                rate: null,
                votesCount: null
            }
        ];
        this.reviews = [
            {
                user: {
                    image: '',
                    name: '',
                    reviewsCount: null,
                    points: null
                },
                avgRating: null,
                ratings: [
                    {
                        concept: '',
                        rate: null
                    },
                    {
                        concept: '',
                        rate: null
                    },
                    {
                        concept: '',
                        rate: null
                    }
                ],
                publishedAt: null,
                message: ''
            },
            {
                user: {
                    image: '',
                    name: '',
                    reviewsCount: null,
                    points: null
                },
                avgRating: null,
                ratings: [
                    {
                        concept: '',
                        rate: null
                    },
                    {
                        concept: '',
                        rate: null
                    },
                    {
                        concept: '',
                        rate: null
                    }
                ],
                publishedAt: null,
                message: ''
            },
            {
                user: {
                    image: '',
                    name: '',
                    reviewsCount: null,
                    points: null
                },
                avgRating: null,
                ratings: [
                    {
                        concept: '',
                        rate: null
                    },
                    {
                        concept: '',
                        rate: null
                    },
                    {
                        concept: '',
                        rate: null
                    }
                ],
                publishedAt: null,
                message: ''
            }
        ];
        this.popularRecipes = [
            {
                showcaseImage: '',
                name: '',
                chef: {
                    name: '',
                    image: ''
                },
                difficulty: '',
                time: '',
                calories: '',
                chefExtract: ''
            }
        ];
    }
}


/***/ }),

/***/ "Kp0C":
/*!************************************************************!*\
  !*** ./src/app/painting/details/painting-details.model.ts ***!
  \************************************************************/
/*! exports provided: PaintingDetailsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaintingDetailsModel", function() { return PaintingDetailsModel; });
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shell/data-store */ "f/Ol");

class PaintingDetailsModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
        this.ratings = [
            {
                concept: '',
                rate: null
            },
            {
                concept: '',
                rate: null
            },
            {
                concept: '',
                rate: null
            }
        ];
        this.openHours = [
            {
                day: '',
                open: true,
                hourFrom: '',
                hourTo: ''
            },
            {
                day: '',
                open: true,
                hourFrom: '',
                hourTo: ''
            },
            {
                day: '',
                open: false,
                hourFrom: '',
                hourTo: ''
            }
        ];
        this.tags = [
            '',
            '',
            ''
        ];
        this.usersPictures = [
            '',
            '',
            '',
            '',
            '',
            ''
        ];
        this.popularDishes = [
            {
                name: '',
                rate: null,
                votesCount: null
            },
            {
                name: '',
                rate: null,
                votesCount: null
            }
        ];
        this.reviews = [
            {
                user: {
                    image: '',
                    name: '',
                    reviewsCount: null,
                    points: null
                },
                avgRating: null,
                ratings: [
                    {
                        concept: '',
                        rate: null
                    },
                    {
                        concept: '',
                        rate: null
                    },
                    {
                        concept: '',
                        rate: null
                    }
                ],
                publishedAt: null,
                message: ''
            },
            {
                user: {
                    image: '',
                    name: '',
                    reviewsCount: null,
                    points: null
                },
                avgRating: null,
                ratings: [
                    {
                        concept: '',
                        rate: null
                    },
                    {
                        concept: '',
                        rate: null
                    },
                    {
                        concept: '',
                        rate: null
                    }
                ],
                publishedAt: null,
                message: ''
            },
            {
                user: {
                    image: '',
                    name: '',
                    reviewsCount: null,
                    points: null
                },
                avgRating: null,
                ratings: [
                    {
                        concept: '',
                        rate: null
                    },
                    {
                        concept: '',
                        rate: null
                    },
                    {
                        concept: '',
                        rate: null
                    }
                ],
                publishedAt: null,
                message: ''
            }
        ];
        this.popularRecipes = [
            {
                showcaseImage: '',
                name: '',
                chef: {
                    name: '',
                    image: ''
                },
                difficulty: '',
                time: '',
                calories: '',
                chefExtract: ''
            }
        ];
    }
}


/***/ }),

/***/ "KwJk":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color) => {
    return (typeof color === 'string' && color.length > 0) ? {
        'ion-color': true,
        [`ion-color-${color}`]: true
    } : undefined;
};
const getClassList = (classes) => {
    if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(c => c != null)
            .map(c => c.trim())
            .filter(c => c !== '');
    }
    return [];
};
const getClassMap = (classes) => {
    const map = {};
    getClassList(classes).forEach(c => map[c] = true);
    return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction) => {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            return router.push(url, direction);
        }
    }
    return false;
};




/***/ }),

/***/ "NmiO":
/*!**********************************************************!*\
  !*** ./src/app/roofing/listing/roofing-listing.model.ts ***!
  \**********************************************************/
/*! exports provided: RoofingItemModel, RoofingListingModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoofingItemModel", function() { return RoofingItemModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoofingListingModel", function() { return RoofingListingModel; });
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shell/data-store */ "f/Ol");

class RoofingItemModel {
    constructor() {
        this.tags = [
            '',
            '',
            ''
        ];
        this.pictures = [
            '',
            '',
            '',
            '',
            ''
        ];
    }
}
class RoofingListingModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
        this.items = [
            new RoofingItemModel(),
            new RoofingItemModel(),
            new RoofingItemModel(),
            new RoofingItemModel()
        ];
    }
}


/***/ }),

/***/ "NqGI":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
    if (delegate) {
        return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }
    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
        throw new Error('framework delegate is missing');
    }
    const el = (typeof component === 'string')
        ? container.ownerDocument && container.ownerDocument.createElement(component)
        : component;
    if (cssClasses) {
        cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
        Object.assign(el, componentProps);
    }
    container.appendChild(el);
    if (el.componentOnReady) {
        await el.componentOnReady();
    }
    return el;
};
const detachComponent = (delegate, element) => {
    if (element) {
        if (delegate) {
            const container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
};




/***/ }),

/***/ "OsGW":
/*!**************************************************!*\
  !*** ./src/app/electrical/electrical.service.ts ***!
  \**************************************************/
/*! exports provided: ElectricalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectricalService", function() { return ElectricalService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shell/data-store */ "f/Ol");
/* harmony import */ var _listing_electrical_listing_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listing/electrical-listing.model */ "hQLp");
/* harmony import */ var _details_electrical_details_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./details/electrical-details.model */ "evBP");





class ElectricalService {
    constructor(http) {
        this.http = http;
    }
    getListingDataSource() {
        return this.http.get('./assets/data/electrical/listing.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            // Note: HttpClient cannot know how to instantiate a class for the returned data
            // We need to properly cast types from json data
            const listing = new _listing_electrical_listing_model__WEBPACK_IMPORTED_MODULE_3__["ElectricalListingModel"]();
            // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
            // Note: If you have non-enummerable properties, you can try a spread operator instead. listing = {...data};
            // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)
            Object.assign(listing, data);
            return listing;
        }));
    }
    getListingStore(dataSource) {
        // Use cache if available
        if (!this.listingDataStore) {
            // Initialize the model specifying that it is a shell model
            const shellModel = new _listing_electrical_listing_model__WEBPACK_IMPORTED_MODULE_3__["ElectricalListingModel"]();
            this.listingDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_2__["DataStore"](shellModel);
            // Trigger the loading mechanism (with shell) in the dataStore
            this.listingDataStore.load(dataSource);
        }
        return this.listingDataStore;
    }
    getDetailsDataSource(slug) {
        return this.http.get('./assets/data/electrical/details.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["flatMap"])(details => details.items.filter(item => item.slug === slug)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            // Note: HttpClient cannot know how to instantiate a class for the returned data
            // We need to properly cast types from json data
            const details = new _details_electrical_details_model__WEBPACK_IMPORTED_MODULE_4__["ElectricalDetailsModel"]();
            // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
            // Note: If you have non-enummerable properties, you can try a spread operator instead. details = {...data};
            // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)
            Object.assign(details, data);
            return details;
        }));
    }
    getDetailsStore(dataSource) {
        // Initialize the model specifying that it is a shell model
        const shellModel = new _details_electrical_details_model__WEBPACK_IMPORTED_MODULE_4__["ElectricalDetailsModel"]();
        this.detailsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_2__["DataStore"](shellModel);
        // Trigger the loading mechanism (with shell) in the dataStore
        this.detailsDataStore.load(dataSource);
        return this.detailsDataStore;
    }
}


/***/ }),

/***/ "PdPT":
/*!************************************************************!*\
  !*** ./src/app/painting/listing/painting-listing.model.ts ***!
  \************************************************************/
/*! exports provided: PaintingItemModel, PaintingListingModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaintingItemModel", function() { return PaintingItemModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaintingListingModel", function() { return PaintingListingModel; });
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shell/data-store */ "f/Ol");

class PaintingItemModel {
    constructor() {
        this.tags = [
            '',
            '',
            ''
        ];
        this.pictures = [
            '',
            '',
            '',
            '',
            ''
        ];
    }
}
class PaintingListingModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
        this.items = [
            new PaintingItemModel(),
            new PaintingItemModel(),
            new PaintingItemModel(),
            new PaintingItemModel()
        ];
    }
}


/***/ }),

/***/ "QNWb":
/*!************************************************************!*\
  !*** ./src/app/plumbing/listing/plumbing-listing.model.ts ***!
  \************************************************************/
/*! exports provided: plumbingItemModel, plumbingListingModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plumbingItemModel", function() { return plumbingItemModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plumbingListingModel", function() { return plumbingListingModel; });
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shell/data-store */ "f/Ol");

class plumbingItemModel {
    constructor() {
        this.tags = [
            '',
            '',
            ''
        ];
        this.pictures = [
            '',
            '',
            '',
            '',
            ''
        ];
    }
}
class plumbingListingModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
        this.items = [
            new plumbingItemModel(),
            new plumbingItemModel(),
            new plumbingItemModel(),
            new plumbingItemModel()
        ];
    }
}


/***/ }),

/***/ "SQnO":
/*!******************************************************!*\
  !*** ./src/app/deals/listing/deals-listing.model.ts ***!
  \******************************************************/
/*! exports provided: DealsItemModel, DealsListingModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealsItemModel", function() { return DealsItemModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealsListingModel", function() { return DealsListingModel; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "Wgwc");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shell/data-store */ "f/Ol");


class DealsItemModel {
    constructor() {
        // Default mock value
        // expirationDate = '12/01/2018';
        this.expirationDate = dayjs__WEBPACK_IMPORTED_MODULE_0__().add(5, 'day').format('MM/DD/YYYY HH:mm:ss');
    }
}
class DealsListingModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"] {
    constructor() {
        super();
        this.items = [
            new DealsItemModel(),
            new DealsItemModel(),
            new DealsItemModel(),
            new DealsItemModel()
        ];
    }
}


/***/ }),

/***/ "UG6G":
/*!******************************************************!*\
  !*** ./src/app/deals/details/deals-details.model.ts ***!
  \******************************************************/
/*! exports provided: DealsDetailsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealsDetailsModel", function() { return DealsDetailsModel; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "Wgwc");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shell/data-store */ "f/Ol");


class DealsDetailsModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"] {
    constructor() {
        super();
        this.showcaseImages = [
            '',
            '',
            ''
        ];
        // Default mock value
        // expirationDate = '03/03/2019';
        this.expirationDate = dayjs__WEBPACK_IMPORTED_MODULE_0__().add(5, 'day').format('MM/DD/YYYY HH:mm:ss');
        this.relatedDeals = [
            {
                logo: '',
                name: '',
                description: ''
            },
            {
                logo: '',
                name: '',
                description: ''
            },
            {
                logo: '',
                name: '',
                description: ''
            }
        ];
    }
}


/***/ }),

/***/ "UQC2":
/*!******************************************************!*\
  !*** ./src/app/brick/listing/brick-listing.model.ts ***!
  \******************************************************/
/*! exports provided: BrickItemModel, BrickListingModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrickItemModel", function() { return BrickItemModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrickListingModel", function() { return BrickListingModel; });
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shell/data-store */ "f/Ol");

class BrickItemModel {
    constructor() {
        this.tags = [
            '',
            '',
            ''
        ];
        this.pictures = [
            '',
            '',
            '',
            '',
            ''
        ];
    }
}
class BrickListingModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
        this.items = [
            new BrickItemModel(),
            new BrickItemModel(),
            new BrickItemModel(),
            new BrickItemModel()
        ];
    }
}


/***/ }),

/***/ "VGjC":
/*!**************************************!*\
  !*** ./src/app/user/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shell/data-store */ "f/Ol");
/* harmony import */ var _profile_user_profile_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/user-profile.model */ "/OzF");
/* harmony import */ var _friends_user_friends_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./friends/user-friends.model */ "7d5M");





class UserService {
    constructor(http) {
        this.http = http;
    }
    getProfileDataSource() {
        return this.http.get('./assets/data/user/user-profile.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            // Note: HttpClient cannot know how to instantiate a class for the returned data
            // We need to properly cast types from json data
            const profile = new _profile_user_profile_model__WEBPACK_IMPORTED_MODULE_3__["UserProfileModel"]();
            // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
            // Note: If you have non-enummerable properties, you can try a spread operator instead. profile = {...data};
            // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)
            Object.assign(profile, data);
            return profile;
        }));
    }
    getProfileStore(dataSource) {
        // Use cache if available
        if (!this.profileDataStore) {
            // Initialize the model specifying that it is a shell model
            const shellModel = new _profile_user_profile_model__WEBPACK_IMPORTED_MODULE_3__["UserProfileModel"]();
            this.profileDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_2__["DataStore"](shellModel);
            // Trigger the loading mechanism (with shell) in the dataStore
            this.profileDataStore.load(dataSource);
        }
        return this.profileDataStore;
    }
    getFriendsDataSource() {
        return this.http.get('./assets/data/user/user-friends.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            // Note: HttpClient cannot know how to instantiate a class for the returned data
            // We need to properly cast types from json data
            const friends = new _friends_user_friends_model__WEBPACK_IMPORTED_MODULE_4__["UserFriendsModel"]();
            // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
            // Note: If you have non-enummerable properties, you can try a spread operator instead. friends = {...data};
            // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)
            Object.assign(friends, data);
            return friends;
        }));
    }
    getFriendsStore(dataSource) {
        // Use cache if available
        if (!this.friendsDataStore) {
            // Initialize the model specifying that it is a shell model
            const shellModel = new _friends_user_friends_model__WEBPACK_IMPORTED_MODULE_4__["UserFriendsModel"]();
            this.friendsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_2__["DataStore"](shellModel);
            // Trigger the loading mechanism (with shell) in the dataStore
            this.friendsDataStore.load(dataSource);
        }
        return this.friendsDataStore;
    }
}


/***/ }),

/***/ "W6mW":
/*!**********************************************************!*\
  !*** ./src/app/fashion/details/fashion-details.model.ts ***!
  \**********************************************************/
/*! exports provided: FashionDetailsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FashionDetailsModel", function() { return FashionDetailsModel; });
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shell/data-store */ "f/Ol");

class FashionDetailsModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
        this.showcaseImages = [
            {
                type: '',
                source: ''
            },
            {
                type: '',
                source: ''
            },
            {
                type: '',
                source: ''
            }
        ];
        this.colorVariants = [
            {
                name: '',
                value: '',
                default: false
            },
            {
                name: '',
                value: '',
                default: false
            },
            {
                name: '',
                value: '',
                default: false
            }
        ];
        this.sizeVariants = [
            {
                name: '',
                value: '',
                default: false
            },
            {
                name: '',
                value: '',
                default: false
            },
            {
                name: '',
                value: '',
                default: false
            }
        ];
        this.relatedProducts = [
            {
                id: null
            },
            {
                id: null
            }
        ];
    }
}


/***/ }),

/***/ "XXTH":
/*!***********************************************************!*\
  !*** ./src/app/terms-of-service/terms-of-service.page.ts ***!
  \***********************************************************/
/*! exports provided: TermsOfServicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsOfServicePage", function() { return TermsOfServicePage; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "sZkV");

class TermsOfServicePage {
    constructor(modalController) {
        this.modalController = modalController;
    }
    dismiss() {
        this.modalController.dismiss();
    }
}


/***/ }),

/***/ "bKs7":
/*!************************************************************!*\
  !*** ./src/app/plumbing/details/plumbing-details.model.ts ***!
  \************************************************************/
/*! exports provided: plumbingDetailsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plumbingDetailsModel", function() { return plumbingDetailsModel; });
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shell/data-store */ "f/Ol");

class plumbingDetailsModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
        this.ratings = [
            {
                concept: '',
                rate: null
            },
            {
                concept: '',
                rate: null
            },
            {
                concept: '',
                rate: null
            }
        ];
        this.openHours = [
            {
                day: '',
                open: true,
                hourFrom: '',
                hourTo: ''
            },
            {
                day: '',
                open: true,
                hourFrom: '',
                hourTo: ''
            },
            {
                day: '',
                open: false,
                hourFrom: '',
                hourTo: ''
            }
        ];
        this.tags = [
            '',
            '',
            ''
        ];
        this.usersPictures = [
            '',
            '',
            '',
            '',
            '',
            ''
        ];
        this.popularDishes = [
            {
                name: '',
                rate: null,
                votesCount: null
            },
            {
                name: '',
                rate: null,
                votesCount: null
            }
        ];
        this.reviews = [
            {
                user: {
                    image: '',
                    name: '',
                    reviewsCount: null,
                    points: null
                },
                avgRating: null,
                ratings: [
                    {
                        concept: '',
                        rate: null
                    },
                    {
                        concept: '',
                        rate: null
                    },
                    {
                        concept: '',
                        rate: null
                    }
                ],
                publishedAt: null,
                message: ''
            },
            {
                user: {
                    image: '',
                    name: '',
                    reviewsCount: null,
                    points: null
                },
                avgRating: null,
                ratings: [
                    {
                        concept: '',
                        rate: null
                    },
                    {
                        concept: '',
                        rate: null
                    },
                    {
                        concept: '',
                        rate: null
                    }
                ],
                publishedAt: null,
                message: ''
            },
            {
                user: {
                    image: '',
                    name: '',
                    reviewsCount: null,
                    points: null
                },
                avgRating: null,
                ratings: [
                    {
                        concept: '',
                        rate: null
                    },
                    {
                        concept: '',
                        rate: null
                    },
                    {
                        concept: '',
                        rate: null
                    }
                ],
                publishedAt: null,
                message: ''
            }
        ];
        this.popularRecipes = [
            {
                showcaseImage: '',
                name: '',
                chef: {
                    name: '',
                    image: ''
                },
                difficulty: '',
                time: '',
                calories: '',
                chefExtract: ''
            }
        ];
    }
}


/***/ }),

/***/ "dgp+":
/*!********************************************************!*\
  !*** ./src/app/travel/details/travel-details.model.ts ***!
  \********************************************************/
/*! exports provided: TravelDetailsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelDetailsModel", function() { return TravelDetailsModel; });
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shell/data-store */ "f/Ol");

class TravelDetailsModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
        this.tags = new Array(3).fill('');
        this.openHours = [
            {
                day: '',
                open: true,
                hourFrom: '',
                hourTo: ''
            },
            {
                day: '',
                open: true,
                hourFrom: '',
                hourTo: ''
            },
            {
                day: '',
                open: false,
                hourFrom: '',
                hourTo: ''
            }
        ];
        this.whereToStay = [
            {
                picture: '',
                name: '',
                rating: null
            },
            {
                picture: '',
                name: '',
                rating: null
            },
            {
                picture: '',
                name: '',
                rating: null
            }
        ];
        this.whereToEat = [
            {
                picture: '',
                name: '',
                rating: null
            },
            {
                picture: '',
                name: '',
                rating: null
            },
            {
                picture: '',
                name: '',
                rating: null
            }
        ];
        this.relatedActivities = [
            {
                picture: '',
                name: '',
                category: '',
                rating: null
            },
            {
                picture: '',
                name: '',
                category: '',
                rating: null
            }
        ];
    }
}


/***/ }),

/***/ "evBP":
/*!****************************************************************!*\
  !*** ./src/app/electrical/details/electrical-details.model.ts ***!
  \****************************************************************/
/*! exports provided: ElectricalDetailsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectricalDetailsModel", function() { return ElectricalDetailsModel; });
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shell/data-store */ "f/Ol");

class ElectricalDetailsModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
        this.ratings = [
            {
                concept: '',
                rate: null
            },
            {
                concept: '',
                rate: null
            },
            {
                concept: '',
                rate: null
            }
        ];
        this.openHours = [
            {
                day: '',
                open: true,
                hourFrom: '',
                hourTo: ''
            },
            {
                day: '',
                open: true,
                hourFrom: '',
                hourTo: ''
            },
            {
                day: '',
                open: false,
                hourFrom: '',
                hourTo: ''
            }
        ];
        this.tags = [
            '',
            '',
            ''
        ];
        this.usersPictures = [
            '',
            '',
            '',
            '',
            '',
            ''
        ];
        this.popularDishes = [
            {
                name: '',
                rate: null,
                votesCount: null
            },
            {
                name: '',
                rate: null,
                votesCount: null
            }
        ];
        this.reviews = [
            {
                user: {
                    image: '',
                    name: '',
                    reviewsCount: null,
                    points: null
                },
                avgRating: null,
                ratings: [
                    {
                        concept: '',
                        rate: null
                    },
                    {
                        concept: '',
                        rate: null
                    },
                    {
                        concept: '',
                        rate: null
                    }
                ],
                publishedAt: null,
                message: ''
            },
            {
                user: {
                    image: '',
                    name: '',
                    reviewsCount: null,
                    points: null
                },
                avgRating: null,
                ratings: [
                    {
                        concept: '',
                        rate: null
                    },
                    {
                        concept: '',
                        rate: null
                    },
                    {
                        concept: '',
                        rate: null
                    }
                ],
                publishedAt: null,
                message: ''
            },
            {
                user: {
                    image: '',
                    name: '',
                    reviewsCount: null,
                    points: null
                },
                avgRating: null,
                ratings: [
                    {
                        concept: '',
                        rate: null
                    },
                    {
                        concept: '',
                        rate: null
                    },
                    {
                        concept: '',
                        rate: null
                    }
                ],
                publishedAt: null,
                message: ''
            }
        ];
        this.popularRecipes = [
            {
                showcaseImage: '',
                name: '',
                chef: {
                    name: '',
                    image: ''
                },
                difficulty: '',
                time: '',
                calories: '',
                chefExtract: ''
            }
        ];
    }
}


/***/ }),

/***/ "fLKo":
/*!**************************************!*\
  !*** ./src/app/wood/wood.service.ts ***!
  \**************************************/
/*! exports provided: woodService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "woodService", function() { return woodService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shell/data-store */ "f/Ol");
/* harmony import */ var _listing_wood_listing_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listing/wood-listing.model */ "r4YO");
/* harmony import */ var _details_wood_details_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./details/wood-details.model */ "IoD4");





class woodService {
    constructor(http) {
        this.http = http;
    }
    getListingDataSource() {
        return this.http.get('./assets/data/wood/listing.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            // Note: HttpClient cannot know how to instantiate a class for the returned data
            // We need to properly cast types from json data
            const listing = new _listing_wood_listing_model__WEBPACK_IMPORTED_MODULE_3__["woodListingModel"]();
            // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
            // Note: If you have non-enummerable properties, you can try a spread operator instead. listing = {...data};
            // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)
            Object.assign(listing, data);
            return listing;
        }));
    }
    getListingStore(dataSource) {
        // Use cache if available
        if (!this.listingDataStore) {
            // Initialize the model specifying that it is a shell model
            const shellModel = new _listing_wood_listing_model__WEBPACK_IMPORTED_MODULE_3__["woodListingModel"]();
            this.listingDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_2__["DataStore"](shellModel);
            // Trigger the loading mechanism (with shell) in the dataStore
            this.listingDataStore.load(dataSource);
        }
        return this.listingDataStore;
    }
    getDetailsDataSource(slug) {
        return this.http.get('./assets/data/wood/details.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["flatMap"])(details => details.items.filter(item => item.slug === slug)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            // Note: HttpClient cannot know how to instantiate a class for the returned data
            // We need to properly cast types from json data
            const details = new _details_wood_details_model__WEBPACK_IMPORTED_MODULE_4__["woodDetailsModel"]();
            // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
            // Note: If you have non-enummerable properties, you can try a spread operator instead. details = {...data};
            // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)
            Object.assign(details, data);
            return details;
        }));
    }
    getDetailsStore(dataSource) {
        // Initialize the model specifying that it is a shell model
        const shellModel = new _details_wood_details_model__WEBPACK_IMPORTED_MODULE_4__["woodDetailsModel"]();
        this.detailsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_2__["DataStore"](shellModel);
        // Trigger the loading mechanism (with shell) in the dataStore
        this.detailsDataStore.load(dataSource);
        return this.detailsDataStore;
    }
}


/***/ }),

/***/ "fpyr":
/*!***************************************************************************!*\
  !*** ./src/app/components/checkbox-wrapper/checkbox-wrapper.component.ts ***!
  \***************************************************************************/
/*! exports provided: CheckboxWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxWrapperComponent", function() { return CheckboxWrapperComponent; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
// Reference to the @ionic/angular Components List:
// https://github.com/ionic-team/ionic/blob/master/angular/src/directives/proxies.ts

class CheckboxWrapperComponent {
    constructor() { }
    ngAfterContentInit() {
        // ContentChild is set
        this.isChecked = this.checkbox.checked;
        // Subscribe to changes
        this.checkbox.ionChange.subscribe(changes => {
            this.isChecked = changes.detail.checked;
        });
    }
}


/***/ }),

/***/ "gQyH":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/checkbox-wrapper/checkbox-wrapper.component.scss.shim.ngstyle.js ***!
  \*********************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
var styles = ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGVja2JveC13cmFwcGVyL2NoZWNrYm94LXdyYXBwZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NoZWNrYm94LXdyYXBwZXIvY2hlY2tib3gtd3JhcHBlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iXX0= */"];



/***/ }),

/***/ "hQLp":
/*!****************************************************************!*\
  !*** ./src/app/electrical/listing/electrical-listing.model.ts ***!
  \****************************************************************/
/*! exports provided: ElectricalItemModel, ElectricalListingModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectricalItemModel", function() { return ElectricalItemModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectricalListingModel", function() { return ElectricalListingModel; });
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shell/data-store */ "f/Ol");

class ElectricalItemModel {
    constructor() {
        this.tags = [
            '',
            '',
            ''
        ];
        this.pictures = [
            '',
            '',
            '',
            '',
            ''
        ];
    }
}
class ElectricalListingModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
        this.items = [
            new ElectricalItemModel(),
            new ElectricalItemModel(),
            new ElectricalItemModel(),
            new ElectricalItemModel()
        ];
    }
}


/***/ }),

/***/ "htxY":
/*!**********************************************!*\
  !*** ./src/app/plumbing/plumbing.service.ts ***!
  \**********************************************/
/*! exports provided: plumbingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plumbingService", function() { return plumbingService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shell/data-store */ "f/Ol");
/* harmony import */ var _listing_plumbing_listing_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listing/plumbing-listing.model */ "QNWb");
/* harmony import */ var _details_plumbing_details_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./details/plumbing-details.model */ "bKs7");





class plumbingService {
    constructor(http) {
        this.http = http;
    }
    getListingDataSource() {
        return this.http.get('./assets/data/plumbing/listing.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            // Note: HttpClient cannot know how to instantiate a class for the returned data
            // We need to properly cast types from json data
            const listing = new _listing_plumbing_listing_model__WEBPACK_IMPORTED_MODULE_3__["plumbingListingModel"]();
            // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
            // Note: If you have non-enummerable properties, you can try a spread operator instead. listing = {...data};
            // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)
            Object.assign(listing, data);
            return listing;
        }));
    }
    getListingStore(dataSource) {
        // Use cache if available
        if (!this.listingDataStore) {
            // Initialize the model specifying that it is a shell model
            const shellModel = new _listing_plumbing_listing_model__WEBPACK_IMPORTED_MODULE_3__["plumbingListingModel"]();
            this.listingDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_2__["DataStore"](shellModel);
            // Trigger the loading mechanism (with shell) in the dataStore
            this.listingDataStore.load(dataSource);
        }
        return this.listingDataStore;
    }
    getDetailsDataSource(slug) {
        return this.http.get('./assets/data/plumbing/details.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["flatMap"])(details => details.items.filter(item => item.slug === slug)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            // Note: HttpClient cannot know how to instantiate a class for the returned data
            // We need to properly cast types from json data
            const details = new _details_plumbing_details_model__WEBPACK_IMPORTED_MODULE_4__["plumbingDetailsModel"]();
            // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
            // Note: If you have non-enummerable properties, you can try a spread operator instead. details = {...data};
            // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)
            Object.assign(details, data);
            return details;
        }));
    }
    getDetailsStore(dataSource) {
        // Initialize the model specifying that it is a shell model
        const shellModel = new _details_plumbing_details_model__WEBPACK_IMPORTED_MODULE_4__["plumbingDetailsModel"]();
        this.detailsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_2__["DataStore"](shellModel);
        // Trigger the loading mechanism (with shell) in the dataStore
        this.detailsDataStore.load(dataSource);
        return this.detailsDataStore;
    }
}


/***/ }),

/***/ "nfFl":
/*!**********************************************************!*\
  !*** ./src/app/fashion/listing/fashion-listing.model.ts ***!
  \**********************************************************/
/*! exports provided: FashionItemModel, FashionListingModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FashionItemModel", function() { return FashionItemModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FashionListingModel", function() { return FashionListingModel; });
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shell/data-store */ "f/Ol");

class FashionItemModel {
}
class FashionListingModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
        this.items = [
            new FashionItemModel(),
            new FashionItemModel(),
            new FashionItemModel(),
            new FashionItemModel()
        ];
    }
}


/***/ }),

/***/ "r4YO":
/*!****************************************************!*\
  !*** ./src/app/wood/listing/wood-listing.model.ts ***!
  \****************************************************/
/*! exports provided: woodItemModel, woodListingModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "woodItemModel", function() { return woodItemModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "woodListingModel", function() { return woodListingModel; });
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shell/data-store */ "f/Ol");

class woodItemModel {
    constructor() {
        this.tags = [
            '',
            '',
            ''
        ];
        this.pictures = [
            '',
            '',
            '',
            '',
            ''
        ];
    }
}
class woodListingModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
        this.items = [
            new woodItemModel(),
            new woodItemModel(),
            new woodItemModel(),
            new woodItemModel()
        ];
    }
}


/***/ }),

/***/ "r7vE":
/*!****************************************************!*\
  !*** ./src/app/real-estate/real-estate.service.ts ***!
  \****************************************************/
/*! exports provided: RealEstateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealEstateService", function() { return RealEstateService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shell/data-store */ "f/Ol");
/* harmony import */ var _listing_real_estate_listing_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listing/real-estate-listing.model */ "FUeK");
/* harmony import */ var _details_real_estate_details_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./details/real-estate-details.model */ "GBb9");





class RealEstateService {
    constructor(http) {
        this.http = http;
    }
    getListingDataSource() {
        return this.http.get('./assets/data/real-estate/listing.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            // Note: HttpClient cannot know how to instantiate a class for the returned data
            // We need to properly cast types from json data
            const listing = new _listing_real_estate_listing_model__WEBPACK_IMPORTED_MODULE_3__["RealEstateListingModel"]();
            // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
            // Note: If you have non-enummerable properties, you can try a spread operator instead. listing = {...data};
            // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)
            Object.assign(listing, data);
            return listing;
        }));
    }
    getListingStore(dataSource) {
        // Use cache if available
        if (!this.listingDataStore) {
            // Initialize the model specifying that it is a shell model
            const shellModel = new _listing_real_estate_listing_model__WEBPACK_IMPORTED_MODULE_3__["RealEstateListingModel"]();
            this.listingDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_2__["DataStore"](shellModel);
            // Trigger the loading mechanism (with shell) in the dataStore
            this.listingDataStore.load(dataSource);
        }
        return this.listingDataStore;
    }
    getDetailsDataSource() {
        return this.http.get('./assets/data/real-estate/details.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            // Note: HttpClient cannot know how to instantiate a class for the returned data
            // We need to properly cast types from json data
            const details = new _details_real_estate_details_model__WEBPACK_IMPORTED_MODULE_4__["RealEstateDetailsModel"]();
            // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
            // Note: If you have non-enummerable properties, you can try a spread operator instead. details = {...data};
            // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)
            Object.assign(details, data);
            return details;
        }));
    }
    getDetailsStore(dataSource) {
        // Use cache if available
        if (!this.detailsDataStore) {
            // Initialize the model specifying that it is a shell model
            const shellModel = new _details_real_estate_details_model__WEBPACK_IMPORTED_MODULE_4__["RealEstateDetailsModel"]();
            this.detailsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_2__["DataStore"](shellModel);
            // Trigger the loading mechanism (with shell) in the dataStore
            this.detailsDataStore.load(dataSource);
        }
        return this.detailsDataStore;
    }
}


/***/ }),

/***/ "sY96":
/*!**************************************************!*\
  !*** ./src/app/validators/password.validator.ts ***!
  \**************************************************/
/*! exports provided: PasswordValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordValidator", function() { return PasswordValidator; });
class PasswordValidator {
    // If our validation fails, we return an object with a key for the error name and a value of true.
    // Otherwise, if the validation passes, we simply return null because there is no error.
    static areNotEqual(formGroup) {
        let val;
        let valid = true;
        for (const key in formGroup.controls) {
            if (formGroup.controls.hasOwnProperty(key)) {
                const control = formGroup.controls[key];
                if (val === undefined) {
                    val = control.value;
                }
                else {
                    if (val !== control.value) {
                        valid = false;
                        break;
                    }
                }
            }
        }
        if (valid) {
            return null;
        }
        return {
            areNotEqual: true
        };
    }
}


/***/ }),

/***/ "swtw":
/*!**********************************************!*\
  !*** ./src/app/painting/painting.service.ts ***!
  \**********************************************/
/*! exports provided: PaintingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaintingService", function() { return PaintingService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shell/data-store */ "f/Ol");
/* harmony import */ var _listing_painting_listing_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listing/painting-listing.model */ "PdPT");
/* harmony import */ var _details_painting_details_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./details/painting-details.model */ "Kp0C");





class PaintingService {
    constructor(http) {
        this.http = http;
    }
    getListingDataSource() {
        return this.http.get('./assets/data/painting/listing.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            // Note: HttpClient cannot know how to instantiate a class for the returned data
            // We need to properly cast types from json data
            const listing = new _listing_painting_listing_model__WEBPACK_IMPORTED_MODULE_3__["PaintingListingModel"]();
            // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
            // Note: If you have non-enummerable properties, you can try a spread operator instead. listing = {...data};
            // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)
            Object.assign(listing, data);
            return listing;
        }));
    }
    getListingStore(dataSource) {
        // Use cache if available
        if (!this.listingDataStore) {
            // Initialize the model specifying that it is a shell model
            const shellModel = new _listing_painting_listing_model__WEBPACK_IMPORTED_MODULE_3__["PaintingListingModel"]();
            this.listingDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_2__["DataStore"](shellModel);
            // Trigger the loading mechanism (with shell) in the dataStore
            this.listingDataStore.load(dataSource);
        }
        return this.listingDataStore;
    }
    getDetailsDataSource(slug) {
        return this.http.get('./assets/data/painting/details.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["flatMap"])(details => details.items.filter(item => item.slug === slug)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            // Note: HttpClient cannot know how to instantiate a class for the returned data
            // We need to properly cast types from json data
            const details = new _details_painting_details_model__WEBPACK_IMPORTED_MODULE_4__["PaintingDetailsModel"]();
            // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
            // Note: If you have non-enummerable properties, you can try a spread operator instead. details = {...data};
            // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)
            Object.assign(details, data);
            return details;
        }));
    }
    getDetailsStore(dataSource) {
        // Initialize the model specifying that it is a shell model
        const shellModel = new _details_painting_details_model__WEBPACK_IMPORTED_MODULE_4__["PaintingDetailsModel"]();
        this.detailsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_2__["DataStore"](shellModel);
        // Trigger the loading mechanism (with shell) in the dataStore
        this.detailsDataStore.load(dataSource);
        return this.detailsDataStore;
    }
}


/***/ }),

/***/ "tER8":
/*!******************************************************!*\
  !*** ./src/app/brick/details/brick-details.model.ts ***!
  \******************************************************/
/*! exports provided: BrickDetailsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrickDetailsModel", function() { return BrickDetailsModel; });
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shell/data-store */ "f/Ol");

class BrickDetailsModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
        this.ratings = [
            {
                concept: '',
                rate: null
            },
            {
                concept: '',
                rate: null
            },
            {
                concept: '',
                rate: null
            }
        ];
        this.openHours = [
            {
                day: '',
                open: true,
                hourFrom: '',
                hourTo: ''
            },
            {
                day: '',
                open: true,
                hourFrom: '',
                hourTo: ''
            },
            {
                day: '',
                open: false,
                hourFrom: '',
                hourTo: ''
            }
        ];
        this.tags = [
            '',
            '',
            ''
        ];
        this.usersPictures = [
            '',
            '',
            '',
            '',
            '',
            ''
        ];
        this.popularDishes = [
            {
                name: '',
                rate: null,
                votesCount: null
            },
            {
                name: '',
                rate: null,
                votesCount: null
            }
        ];
        this.reviews = [
            {
                user: {
                    image: '',
                    name: '',
                    reviewsCount: null,
                    points: null
                },
                avgRating: null,
                ratings: [
                    {
                        concept: '',
                        rate: null
                    },
                    {
                        concept: '',
                        rate: null
                    },
                    {
                        concept: '',
                        rate: null
                    }
                ],
                publishedAt: null,
                message: ''
            },
            {
                user: {
                    image: '',
                    name: '',
                    reviewsCount: null,
                    points: null
                },
                avgRating: null,
                ratings: [
                    {
                        concept: '',
                        rate: null
                    },
                    {
                        concept: '',
                        rate: null
                    },
                    {
                        concept: '',
                        rate: null
                    }
                ],
                publishedAt: null,
                message: ''
            },
            {
                user: {
                    image: '',
                    name: '',
                    reviewsCount: null,
                    points: null
                },
                avgRating: null,
                ratings: [
                    {
                        concept: '',
                        rate: null
                    },
                    {
                        concept: '',
                        rate: null
                    },
                    {
                        concept: '',
                        rate: null
                    }
                ],
                publishedAt: null,
                message: ''
            }
        ];
        this.popularRecipes = [
            {
                showcaseImage: '',
                name: '',
                chef: {
                    name: '',
                    image: ''
                },
                difficulty: '',
                time: '',
                calories: '',
                chefExtract: ''
            }
        ];
    }
}


/***/ }),

/***/ "v0Fq":
/*!******************************************!*\
  !*** ./src/app/travel/travel.service.ts ***!
  \******************************************/
/*! exports provided: TravelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelService", function() { return TravelService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shell/data-store */ "f/Ol");
/* harmony import */ var _listing_travel_listing_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listing/travel-listing.model */ "8zxt");
/* harmony import */ var _details_travel_details_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./details/travel-details.model */ "dgp+");





class TravelService {
    constructor(http) {
        this.http = http;
    }
    getListingDataSource() {
        return this.http.get('./assets/data/travel/listing.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            // Note: HttpClient cannot know how to instantiate a class for the returned data
            // We need to properly cast types from json data
            const listing = new _listing_travel_listing_model__WEBPACK_IMPORTED_MODULE_3__["TravelListingModel"]();
            // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
            // Note: If you have non-enummerable properties, you can try a spread operator instead. listing = {...data};
            // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)
            Object.assign(listing, data);
            return listing;
        }));
    }
    getListingStore(dataSource) {
        // Use cache if available
        if (!this.listingDataStore) {
            // Initialize the model specifying that it is a shell model
            const shellModel = new _listing_travel_listing_model__WEBPACK_IMPORTED_MODULE_3__["TravelListingModel"]();
            this.listingDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_2__["DataStore"](shellModel);
            // Trigger the loading mechanism (with shell) in the dataStore
            this.listingDataStore.load(dataSource);
        }
        return this.listingDataStore;
    }
    getDetailsDataSource() {
        return this.http.get('./assets/data/travel/details.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            // Note: HttpClient cannot know how to instantiate a class for the returned data
            // We need to properly cast types from json data
            const details = new _details_travel_details_model__WEBPACK_IMPORTED_MODULE_4__["TravelDetailsModel"]();
            // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
            // Note: If you have non-enummerable properties, you can try a spread operator instead. details = {...data};
            // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)
            Object.assign(details, data);
            return details;
        }));
    }
    getDetailsStore(dataSource) {
        // Use cache if available
        if (!this.detailsDataStore) {
            // Initialize the model specifying that it is a shell model
            const shellModel = new _details_travel_details_model__WEBPACK_IMPORTED_MODULE_4__["TravelDetailsModel"]();
            this.detailsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_2__["DataStore"](shellModel);
            // Trigger the loading mechanism (with shell) in the dataStore
            this.detailsDataStore.load(dataSource);
        }
        return this.detailsDataStore;
    }
}


/***/ }),

/***/ "wCfV":
/*!**********************************************************!*\
  !*** ./src/app/roofing/details/roofing-details.model.ts ***!
  \**********************************************************/
/*! exports provided: RoofingDetailsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoofingDetailsModel", function() { return RoofingDetailsModel; });
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shell/data-store */ "f/Ol");

class RoofingDetailsModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
        this.ratings = [
            {
                concept: '',
                rate: null
            },
            {
                concept: '',
                rate: null
            },
            {
                concept: '',
                rate: null
            }
        ];
        this.openHours = [
            {
                day: '',
                open: true,
                hourFrom: '',
                hourTo: ''
            },
            {
                day: '',
                open: true,
                hourFrom: '',
                hourTo: ''
            },
            {
                day: '',
                open: false,
                hourFrom: '',
                hourTo: ''
            }
        ];
        this.tags = [
            '',
            '',
            ''
        ];
        this.usersPictures = [
            '',
            '',
            '',
            '',
            '',
            ''
        ];
        this.popularDishes = [
            {
                name: '',
                rate: null,
                votesCount: null
            },
            {
                name: '',
                rate: null,
                votesCount: null
            }
        ];
        this.reviews = [
            {
                user: {
                    image: '',
                    name: '',
                    reviewsCount: null,
                    points: null
                },
                avgRating: null,
                ratings: [
                    {
                        concept: '',
                        rate: null
                    },
                    {
                        concept: '',
                        rate: null
                    },
                    {
                        concept: '',
                        rate: null
                    }
                ],
                publishedAt: null,
                message: ''
            },
            {
                user: {
                    image: '',
                    name: '',
                    reviewsCount: null,
                    points: null
                },
                avgRating: null,
                ratings: [
                    {
                        concept: '',
                        rate: null
                    },
                    {
                        concept: '',
                        rate: null
                    },
                    {
                        concept: '',
                        rate: null
                    }
                ],
                publishedAt: null,
                message: ''
            },
            {
                user: {
                    image: '',
                    name: '',
                    reviewsCount: null,
                    points: null
                },
                avgRating: null,
                ratings: [
                    {
                        concept: '',
                        rate: null
                    },
                    {
                        concept: '',
                        rate: null
                    },
                    {
                        concept: '',
                        rate: null
                    }
                ],
                publishedAt: null,
                message: ''
            }
        ];
        this.popularRecipes = [
            {
                showcaseImage: '',
                name: '',
                chef: {
                    name: '',
                    image: ''
                },
                difficulty: '',
                time: '',
                calories: '',
                chefExtract: ''
            }
        ];
    }
}


/***/ }),

/***/ "wXFO":
/*!*************************************************************************************!*\
  !*** ./src/app/components/checkbox-wrapper/checkbox-wrapper.component.ngfactory.js ***!
  \*************************************************************************************/
/*! exports provided: RenderType_CheckboxWrapperComponent, View_CheckboxWrapperComponent_0, View_CheckboxWrapperComponent_Host_0, CheckboxWrapperComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CheckboxWrapperComponent", function() { return RenderType_CheckboxWrapperComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CheckboxWrapperComponent_0", function() { return View_CheckboxWrapperComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CheckboxWrapperComponent_Host_0", function() { return View_CheckboxWrapperComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxWrapperComponentNgFactory", function() { return CheckboxWrapperComponentNgFactory; });
/* harmony import */ var _checkbox_wrapper_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkbox-wrapper.component.scss.shim.ngstyle */ "gQyH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _checkbox_wrapper_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkbox-wrapper.component */ "fpyr");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 



var styles_CheckboxWrapperComponent = [_checkbox_wrapper_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_CheckboxWrapperComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_CheckboxWrapperComponent, data: {} });

function View_CheckboxWrapperComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵncd"](null, 0)], null, null); }
function View_CheckboxWrapperComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "app-checkbox-wrapper", [], [[2, "checkbox-checked", null]], null, null, View_CheckboxWrapperComponent_0, RenderType_CheckboxWrapperComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 1097728, null, 1, _checkbox_wrapper_component__WEBPACK_IMPORTED_MODULE_2__["CheckboxWrapperComponent"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { checkbox: 0 })], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).isChecked; _ck(_v, 0, 0, currVal_0); }); }
var CheckboxWrapperComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-checkbox-wrapper", _checkbox_wrapper_component__WEBPACK_IMPORTED_MODULE_2__["CheckboxWrapperComponent"], View_CheckboxWrapperComponent_Host_0, {}, {}, ["*"]);



/***/ }),

/***/ "wwno":
/*!**************************************************!*\
  !*** ./src/app/showcase/showcase-shell.model.ts ***!
  \**************************************************/
/*! exports provided: ShowcaseShellModel, ShowcaseShellUserModel, ShowcaseCommentModel, ShowcasePostModel, ShowcaseTaskModel, ShowcaseUser2Model, ShowcaseCompanyModel, ShowcaseCombinedTaskUserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseShellModel", function() { return ShowcaseShellModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseShellUserModel", function() { return ShowcaseShellUserModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseCommentModel", function() { return ShowcaseCommentModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcasePostModel", function() { return ShowcasePostModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseTaskModel", function() { return ShowcaseTaskModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseUser2Model", function() { return ShowcaseUser2Model; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseCompanyModel", function() { return ShowcaseCompanyModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseCombinedTaskUserModel", function() { return ShowcaseCombinedTaskUserModel; });
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shell/data-store */ "f/Ol");

class ShowcaseShellModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
    }
}
class ShowcaseShellUserModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
    }
}
class ShowcaseCommentModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
    }
}
class ShowcasePostModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
    }
}
class ShowcaseTaskModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
    }
}
class ShowcaseUser2Model extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
    }
}
class ShowcaseCompanyModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
    }
}
class ShowcaseCombinedTaskUserModel extends ShowcaseTaskModel {
    constructor() {
        super();
    }
}


/***/ }),

/***/ "xBcy":
/*!************************************************!*\
  !*** ./src/app/carpentry/carpentry.service.ts ***!
  \************************************************/
/*! exports provided: CarpentryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarpentryService", function() { return CarpentryService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shell/data-store */ "f/Ol");
/* harmony import */ var _listing_carpentry_listing_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listing/carpentry-listing.model */ "3vsf");
/* harmony import */ var _details_carpentry_details_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./details/carpentry-details.model */ "K0As");





class CarpentryService {
    constructor(http) {
        this.http = http;
    }
    getListingDataSource() {
        return this.http.get('./assets/data/carpentry/listing.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            // Note: HttpClient cannot know how to instantiate a class for the returned data
            // We need to properly cast types from json data
            const listing = new _listing_carpentry_listing_model__WEBPACK_IMPORTED_MODULE_3__["CarpentryListingModel"]();
            // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
            // Note: If you have non-enummerable properties, you can try a spread operator instead. listing = {...data};
            // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)
            Object.assign(listing, data);
            return listing;
        }));
    }
    getListingStore(dataSource) {
        // Use cache if available
        if (!this.listingDataStore) {
            // Initialize the model specifying that it is a shell model
            const shellModel = new _listing_carpentry_listing_model__WEBPACK_IMPORTED_MODULE_3__["CarpentryListingModel"]();
            this.listingDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_2__["DataStore"](shellModel);
            // Trigger the loading mechanism (with shell) in the dataStore
            this.listingDataStore.load(dataSource);
        }
        return this.listingDataStore;
    }
    getDetailsDataSource(slug) {
        return this.http.get('./assets/data/carpentry/details.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["flatMap"])(details => details.items.filter(item => item.slug === slug)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            // Note: HttpClient cannot know how to instantiate a class for the returned data
            // We need to properly cast types from json data
            const details = new _details_carpentry_details_model__WEBPACK_IMPORTED_MODULE_4__["CarpentryDetailsModel"]();
            // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
            // Note: If you have non-enummerable properties, you can try a spread operator instead. details = {...data};
            // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)
            Object.assign(details, data);
            return details;
        }));
    }
    getDetailsStore(dataSource) {
        // Initialize the model specifying that it is a shell model
        const shellModel = new _details_carpentry_details_model__WEBPACK_IMPORTED_MODULE_4__["CarpentryDetailsModel"]();
        this.detailsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_2__["DataStore"](shellModel);
        // Trigger the loading mechanism (with shell) in the dataStore
        this.detailsDataStore.load(dataSource);
        return this.detailsDataStore;
    }
}


/***/ }),

/***/ "xgmX":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-da73c8fd.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelection; });
const HapticEngine = {
    getEngine() {
        const win = window;
        return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
    },
    available() {
        return !!this.getEngine();
    },
    isCordova() {
        return !!window.TapticEngine;
    },
    isCapacitor() {
        const win = window;
        return !!win.Capacitor;
    },
    impact(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.impact({ style });
    },
    notification(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.notification({ style });
    },
    selection() {
        this.impact({ style: 'light' });
    },
    selectionStart() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionStart();
        }
        else {
            engine.gestureSelectionStart();
        }
    },
    selectionChanged() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionChanged();
        }
        else {
            engine.gestureSelectionChanged();
        }
    },
    selectionEnd() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionChanged();
        }
        else {
            engine.gestureSelectionChanged();
        }
    }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
    HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
    HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
    HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
    HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
    HapticEngine.impact(options);
};




/***/ }),

/***/ "y+sA":
/*!****************************************!*\
  !*** ./src/app/deals/deals.service.ts ***!
  \****************************************/
/*! exports provided: DealsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealsService", function() { return DealsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ "Wgwc");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shell/data-store */ "f/Ol");
/* harmony import */ var _listing_deals_listing_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./listing/deals-listing.model */ "SQnO");
/* harmony import */ var _details_deals_details_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details/deals-details.model */ "UG6G");







class DealsService {
    constructor(http) {
        this.http = http;
    }
    get relativeDates() {
        return [
            dayjs__WEBPACK_IMPORTED_MODULE_3__().add(1, 'day').add(8, 'hour').add(10, 'second').format('MM/DD/YYYY HH:mm:ss'),
            dayjs__WEBPACK_IMPORTED_MODULE_3__().add(7, 'day').format('MM/DD/YYYY'),
            dayjs__WEBPACK_IMPORTED_MODULE_3__().subtract(1, 'month').format('MM/DD/YYYY'),
            dayjs__WEBPACK_IMPORTED_MODULE_3__().add(2, 'month').format('MM/DD/YYYY')
        ];
    }
    getListingDataSource() {
        return this.http.get('./assets/data/deals/listing.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
            // Using rest operator to divide the data (see: https://dev.to/napoleon039/how-to-use-the-spread-and-rest-operator-4jbb)
            const { items } = data, otherData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(data, ["items"]);
            const itemsWithRelativeDates = items.map((dealItem, index) => {
                // Relative date (better to showcase UI micro-interactions)
                return Object.assign(Object.assign({}, dealItem), { expirationDate: this.relativeDates[index] });
            });
            // Using spread operator to concat the data (see: https://dev.to/napoleon039/how-to-use-the-spread-and-rest-operator-4jbb)
            const updatedListingData = Object.assign(Object.assign({}, otherData), { items: itemsWithRelativeDates });
            // Note: HttpClient cannot know how to instantiate a class for the returned data
            // We need to properly cast types from json data
            const listing = new _listing_deals_listing_model__WEBPACK_IMPORTED_MODULE_5__["DealsListingModel"]();
            // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
            // Note: If you have non-enummerable properties, you can try a spread operator instead. listing = {...data};
            // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)
            Object.assign(listing, updatedListingData);
            return listing;
        }));
    }
    getListingStore(dataSource) {
        // Use cache if available
        if (!this.listingDataStore) {
            // Initialize the model specifying that it is a shell model
            const shellModel = new _listing_deals_listing_model__WEBPACK_IMPORTED_MODULE_5__["DealsListingModel"]();
            this.listingDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_4__["DataStore"](shellModel);
            // Trigger the loading mechanism (with shell) in the dataStore
            this.listingDataStore.load(dataSource);
        }
        return this.listingDataStore;
    }
    getDetailsDataSource() {
        return this.http.get('./assets/data/deals/details.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => {
            const expirationDate = dayjs__WEBPACK_IMPORTED_MODULE_3__().add(1, 'day').add(8, 'hour').add(10, 'second').format('MM/DD/YYYY HH:mm:ss');
            const updatedDetailsData = Object.assign(Object.assign({}, data), { expirationDate });
            // Note: HttpClient cannot know how to instantiate a class for the returned data
            // We need to properly cast types from json data
            const details = new _details_deals_details_model__WEBPACK_IMPORTED_MODULE_6__["DealsDetailsModel"]();
            // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
            // Note: If you have non-enummerable properties, you can try a spread operator instead. details = {...data};
            // (see: https://scotch.io/bar-talk/copying-objects-in-javascript#toc-using-spread-elements-)
            Object.assign(details, updatedDetailsData);
            return details;
        }));
    }
    getDetailsStore(dataSource) {
        // Initialize the model specifying that it is a shell model
        const shellModel = new _details_deals_details_model__WEBPACK_IMPORTED_MODULE_6__["DealsDetailsModel"]();
        this.detailsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_4__["DataStore"](shellModel);
        // Trigger the loading mechanism (with shell) in the dataStore
        this.detailsDataStore.load(dataSource);
        return this.detailsDataStore;
    }
}


/***/ }),

/***/ "ykzn":
/*!***********************************************!*\
  !*** ./src/app/pipes/time-difference.pipe.ts ***!
  \***********************************************/
/*! exports provided: TimeDifferencePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeDifferencePipe", function() { return TimeDifferencePipe; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "Wgwc");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);

class TimeDifferencePipe {
    transform(value) {
        return dayjs__WEBPACK_IMPORTED_MODULE_0__(value).diff(dayjs__WEBPACK_IMPORTED_MODULE_0__(), 'day');
    }
}


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map