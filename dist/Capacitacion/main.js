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

/***/ "./src/app/Plantilla/app-aside/app-aside.component.css":
/*!*************************************************************!*\
  !*** ./src/app/Plantilla/app-aside/app-aside.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 0;\r\n    word-wrap: break-word;\r\n    background-color: #fff;\r\n    background-clip: border-box;\r\n    border: 1px solid rgba(0, 0, 0, 0.125);\r\n    border-radius: 0.25rem;\r\n  }\r\n  \r\n  .card > hr {\r\n    margin-right: 0;\r\n    margin-left: 0;\r\n  }\r\n  \r\n  .card > .list-group:first-child .list-group-item:first-child {\r\n    border-top-left-radius: 0.25rem;\r\n    border-top-right-radius: 0.25rem;\r\n  }\r\n  \r\n  .card > .list-group:last-child .list-group-item:last-child {\r\n    border-bottom-right-radius: 0.25rem;\r\n    border-bottom-left-radius: 0.25rem;\r\n  }\r\n  \r\n  .card-body {\r\n    flex: 1 1 auto;\r\n    padding: 1.25rem;\r\n  }\r\n  \r\n  .card-title {\r\n    margin-bottom: 0.75rem;\r\n  }\r\n  \r\n  .card-subtitle {\r\n    margin-top: -0.375rem;\r\n    margin-bottom: 0;\r\n  }\r\n  \r\n  .card-text:last-child {\r\n    margin-bottom: 0;\r\n  }\r\n  \r\n  .card-link:hover {\r\n    text-decoration: none;\r\n  }\r\n  \r\n  .card-link + .card-link {\r\n    margin-left: 1.25rem;\r\n  }\r\n  \r\n  .card-header {\r\n    padding: 0.75rem 1.25rem;\r\n    margin-bottom: 0;\r\n    background-color: rgba(0, 0, 0, 0.03);\r\n    border-bottom: 1px solid rgba(0, 0, 0, 0.125);\r\n  }\r\n  \r\n  .card-header:first-child {\r\n    border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;\r\n  }\r\n  \r\n  .card-header + .list-group .list-group-item:first-child {\r\n    border-top: 0;\r\n  }\r\n  \r\n  .card-footer {\r\n    padding: 0.75rem 1.25rem;\r\n    background-color: rgba(0, 0, 0, 0.03);\r\n    border-top: 1px solid rgba(0, 0, 0, 0.125);\r\n  }\r\n  \r\n  .card-footer:last-child {\r\n    border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);\r\n  }\r\n  \r\n  .card-header-tabs {\r\n    margin-right: -0.625rem;\r\n    margin-bottom: -0.75rem;\r\n    margin-left: -0.625rem;\r\n    border-bottom: 0;\r\n  }\r\n  \r\n  .card-header-pills {\r\n    margin-right: -0.625rem;\r\n    margin-left: -0.625rem;\r\n  }\r\n  \r\n  .card-img-overlay {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    padding: 1.25rem;\r\n  }\r\n  \r\n  .card-img {\r\n    width: 100%;\r\n    border-radius: calc(0.25rem - 1px);\r\n  }\r\n  \r\n  .card-img-top {\r\n    width: 100%;\r\n    border-top-left-radius: calc(0.25rem - 1px);\r\n    border-top-right-radius: calc(0.25rem - 1px);\r\n  }\r\n  \r\n  .card-img-bottom {\r\n    width: 100%;\r\n    border-bottom-right-radius: calc(0.25rem - 1px);\r\n    border-bottom-left-radius: calc(0.25rem - 1px);\r\n  }\r\n  \r\n  .card-deck {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .card-deck .card {\r\n    margin-bottom: 15px;\r\n  }\r\n  \r\n  @media (min-width: 576px) {\r\n    .card-deck {\r\n      flex-flow: row wrap;\r\n      margin-right: -15px;\r\n      margin-left: -15px;\r\n    }\r\n    .card-deck .card {\r\n      display: flex;\r\n      flex: 1 0 0%;\r\n      flex-direction: column;\r\n      margin-right: 15px;\r\n      margin-bottom: 0;\r\n      margin-left: 15px;\r\n    }\r\n  }\r\n  \r\n  .card-group {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .card-group > .card {\r\n    margin-bottom: 15px;\r\n  }\r\n  \r\n  @media (min-width: 576px) {\r\n    .card-group {\r\n      flex-flow: row wrap;\r\n    }\r\n    .card-group > .card {\r\n      flex: 1 0 0%;\r\n      margin-bottom: 0;\r\n    }\r\n    .card-group > .card + .card {\r\n      margin-left: 0;\r\n      border-left: 0;\r\n    }\r\n    .card-group > .card:first-child {\r\n      border-top-right-radius: 0;\r\n      border-bottom-right-radius: 0;\r\n    }\r\n    .card-group > .card:first-child .card-img-top,\r\n    .card-group > .card:first-child .card-header {\r\n      border-top-right-radius: 0;\r\n    }\r\n    .card-group > .card:first-child .card-img-bottom,\r\n    .card-group > .card:first-child .card-footer {\r\n      border-bottom-right-radius: 0;\r\n    }\r\n    .card-group > .card:last-child {\r\n      border-top-left-radius: 0;\r\n      border-bottom-left-radius: 0;\r\n    }\r\n    .card-group > .card:last-child .card-img-top,\r\n    .card-group > .card:last-child .card-header {\r\n      border-top-left-radius: 0;\r\n    }\r\n    .card-group > .card:last-child .card-img-bottom,\r\n    .card-group > .card:last-child .card-footer {\r\n      border-bottom-left-radius: 0;\r\n    }\r\n    .card-group > .card:only-child {\r\n      border-radius: 0.25rem;\r\n    }\r\n    .card-group > .card:only-child .card-img-top,\r\n    .card-group > .card:only-child .card-header {\r\n      border-top-left-radius: 0.25rem;\r\n      border-top-right-radius: 0.25rem;\r\n    }\r\n    .card-group > .card:only-child .card-img-bottom,\r\n    .card-group > .card:only-child .card-footer {\r\n      border-bottom-right-radius: 0.25rem;\r\n      border-bottom-left-radius: 0.25rem;\r\n    }\r\n    .card-group > .card:not(:first-child):not(:last-child):not(:only-child) {\r\n      border-radius: 0;\r\n    }\r\n    .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-img-top,\r\n    .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-img-bottom,\r\n    .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-header,\r\n    .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-footer {\r\n      border-radius: 0;\r\n    }\r\n  }\r\n  \r\n  .card-columns .card {\r\n    margin-bottom: 0.75rem;\r\n  }\r\n  \r\n  @media (min-width: 576px) {\r\n    .card-columns {\r\n      -webkit-column-count: 3;\r\n      -moz-column-count: 3;\r\n      column-count: 3;\r\n      -webkit-column-gap: 1.25rem;\r\n      -moz-column-gap: 1.25rem;\r\n      column-gap: 1.25rem;\r\n    }\r\n    .card-columns .card {\r\n      display: inline-block;\r\n      width: 100%;\r\n    }\r\n  }\r\n  \r\n  .mb-3,\r\n.my-3 {\r\n  margin-bottom: 1rem !important;\r\n}\r\n  \r\n  .bg-primary {\r\n    background-color: #007bff !important;\r\n  }\r\n  \r\n  a.bg-primary:hover, a.bg-primary:focus,\r\n  button.bg-primary:hover,\r\n  button.bg-primary:focus {\r\n    background-color: #0062cc !important;\r\n  }\r\n  \r\n  .bg-primary {\r\n    background-color: #007bff !important;\r\n  }\r\n  \r\n  a.bg-primary:hover, a.bg-primary:focus,\r\n  button.bg-primary:hover,\r\n  button.bg-primary:focus {\r\n    background-color: #0062cc !important;\r\n  }\r\n  \r\n  .bg-secondary {\r\n    background-color: #6c757d !important;\r\n  }\r\n  \r\n  a.bg-secondary:hover, a.bg-secondary:focus,\r\n  button.bg-secondary:hover,\r\n  button.bg-secondary:focus {\r\n    background-color: #545b62 !important;\r\n  }\r\n  \r\n  .bg-success {\r\n    background-color: #28a745 !important;\r\n  }\r\n  \r\n  a.bg-success:hover, a.bg-success:focus,\r\n  button.bg-success:hover,\r\n  button.bg-success:focus {\r\n    background-color: #1e7e34 !important;\r\n  }\r\n  \r\n  .bg-info {\r\n    background-color: #17a2b8 !important;\r\n  }\r\n  \r\n  a.bg-info:hover, a.bg-info:focus,\r\n  button.bg-info:hover,\r\n  button.bg-info:focus {\r\n    background-color: #117a8b !important;\r\n  }\r\n  \r\n  .bg-warning {\r\n    background-color: #ffc107 !important;\r\n  }\r\n  \r\n  a.bg-warning:hover, a.bg-warning:focus,\r\n  button.bg-warning:hover,\r\n  button.bg-warning:focus {\r\n    background-color: #d39e00 !important;\r\n  }\r\n  \r\n  .bg-danger {\r\n    background-color: #dc3545 !important;\r\n  }\r\n  \r\n  a.bg-danger:hover, a.bg-danger:focus,\r\n  button.bg-danger:hover,\r\n  button.bg-danger:focus {\r\n    background-color: #bd2130 !important;\r\n  }\r\n  \r\n  .bg-light {\r\n    background-color: #f8f9fa !important;\r\n  }\r\n  \r\n  a.bg-light:hover, a.bg-light:focus,\r\n  button.bg-light:hover,\r\n  button.bg-light:focus {\r\n    background-color: #dae0e5 !important;\r\n  }\r\n  \r\n  .bg-dark {\r\n    background-color: #343a40 !important;\r\n  }\r\n  \r\n  a.bg-dark:hover, a.bg-dark:focus,\r\n  button.bg-dark:hover,\r\n  button.bg-dark:focus {\r\n    background-color: #1d2124 !important;\r\n  }\r\n  \r\n  .bg-white {\r\n    background-color: #fff !important;\r\n  }\r\n  \r\n  .bg-transparent {\r\n    background-color: transparent !important;\r\n  }\r\n  \r\n  .border {\r\n    border: 1px solid #dee2e6 !important;\r\n  }\r\n  \r\n  .border-top {\r\n    border-top: 1px solid #dee2e6 !important;\r\n  }\r\n  \r\n  .border-right {\r\n    border-right: 1px solid #dee2e6 !important;\r\n  }\r\n  \r\n  .card {\r\n    display: inline-block;\r\n    position: relative;\r\n    width: 100%;\r\n    margin: 25px 0;\r\n    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);\r\n    border-radius: 13px;\r\n    color: rgba(0, 0, 0, 0.87);\r\n    background: #fff;\r\n}\r\n  \r\n  .card .card-height-indicator {\r\n    margin-top: 100%;\r\n}\r\n  \r\n  .card.row-space .header {\r\n    padding: 15px 20px 0;\r\n}\r\n  \r\n  .card .title {\r\n    margin-top: 0;\r\n    margin-bottom: 5px;\r\n}\r\n  \r\n  .card .card-image {\r\n    height: 60%;\r\n    position: relative;\r\n    overflow: hidden;\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n    margin-top: -30px;\r\n    border-radius: 6px;\r\n}\r\n  \r\n  .card .card-image img {\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 6px;\r\n    pointer-events: none;\r\n}\r\n  \r\n  .card .card-image .card-title {\r\n    position: absolute;\r\n    bottom: 15px;\r\n    left: 15px;\r\n    color: #fff;\r\n    font-size: 1.3em;\r\n    text-shadow: 0 2px 5px rgba(33, 33, 33, 0.5);\r\n}\r\n  \r\n  .card .category:not([class*=\"text-\"]) {\r\n    color: #999999;\r\n}\r\n  \r\n  .card .card-content {\r\n    padding: 15px 20px;\r\n}\r\n  \r\n  .card .card-content .category {\r\n    margin-bottom: 0;\r\n}\r\n  \r\n  .card .card-header {\r\n    box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\r\n    margin: -35px 55px 0;\r\n    border-radius: 3px;\r\n    padding: 5px;\r\n    background-color: #999999;\r\n}\r\n  \r\n  .card .card-header .title {\r\n    color: #FFFFFF;\r\n}\r\n  \r\n  .card .card-header .category {\r\n    margin-bottom: 0;\r\n    color: rgba(255, 255, 255, 0.62);\r\n}\r\n  \r\n  .card .card-header.card-chart {\r\n    padding: 0;\r\n    min-height: 160px;\r\n}\r\n  \r\n  .card .card-header.card-chart+.content h4 {\r\n    margin-top: 0;\r\n}\r\n  \r\n  .card .card-header .ct-label {\r\n    color: rgba(255, 255, 255, 0.7);\r\n}\r\n  \r\n  .card .card-header .ct-grid {\r\n    stroke: rgba(255, 255, 255, 0.2);\r\n}\r\n  \r\n  .card .card-header .ct-series-a .ct-point,\r\n.card .card-header .ct-series-a .ct-line,\r\n.card .card-header .ct-series-a .ct-bar,\r\n.card .card-header .ct-series-a .ct-slice-donut {\r\n    stroke: rgba(255, 255, 255, 0.8);\r\n}\r\n  \r\n  .card .card-header .ct-series-a .ct-slice-pie,\r\n.card .card-header .ct-series-a .ct-area {\r\n    fill: rgba(255, 255, 255, 0.4);\r\n}\r\n  \r\n  .card .chart-title {\r\n    position: absolute;\r\n    top: 25px;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n  \r\n  .card .chart-title h3 {\r\n    margin: 0;\r\n    color: #FFFFFF;\r\n}\r\n  \r\n  .card .chart-title h6 {\r\n    margin: 0;\r\n    color: rgba(255, 255, 255, 0.4);\r\n}\r\n  \r\n  .card .card-footer {\r\n    margin: 0 20px 10px;\r\n    padding-top: 10px;\r\n    border-top: 1px solid #eeeeee;\r\n}\r\n  \r\n  .card .card-footer .content {\r\n    display: block;\r\n}\r\n  \r\n  .card .card-footer div {\r\n    display: inline-block;\r\n}\r\n  \r\n  .card .card-footer .author {\r\n    color: #999999;\r\n}\r\n  \r\n  .card .card-footer .stats {\r\n    line-height: 22px;\r\n    color: #999999;\r\n    font-size: 12px;\r\n}\r\n  \r\n  .card .card-footer .stats .material-icons {\r\n    position: relative;\r\n    top: 4px;\r\n    font-size: 16px;\r\n}\r\n  \r\n  .card .card-footer h6 {\r\n    color: #999999;\r\n}\r\n  \r\n  /*.card img {\r\n    width: 100%;\r\n    height: auto;\r\n}*/\r\n  \r\n  .card .category .material-icons {\r\n    position: relative;\r\n    top: 6px;\r\n    line-height: 0;\r\n}\r\n  \r\n  .card .category-social .fa {\r\n    font-size: 24px;\r\n    position: relative;\r\n    margin-top: -4px;\r\n    top: 2px;\r\n    margin-right: 5px;\r\n}\r\n  \r\n  .card .author .avatar {\r\n    width: 30px;\r\n    height: 30px;\r\n    overflow: hidden;\r\n    border-radius: 50%;\r\n    margin-right: 5px;\r\n}\r\n  \r\n  .card .author a {\r\n    color: #3C4858;\r\n    text-decoration: none;\r\n}\r\n  \r\n  .card .author a .ripple-container {\r\n    display: none;\r\n}\r\n  \r\n  .card .table {\r\n    margin-bottom: 0;\r\n}\r\n  \r\n  .card .table tr:first-child td {\r\n    border-top: none;\r\n}\r\n  \r\n  .card [data-background-color=\"purple\"] {\r\n    background: linear-gradient(60deg, #ab47bc, #8e24aa);\r\n    box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2);\r\n}\r\n  \r\n  .card [data-background-color=\"blue\"] {\r\n    background: linear-gradient(60deg, #26c6da, #00acc1);\r\n    box-shadow: 0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2);\r\n}\r\n  \r\n  .card [data-background-color=\"green\"] {\r\n    background: linear-gradient(60deg, #66bb6a, #43a047);\r\n    box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2);\r\n}\r\n  \r\n  .card [data-background-color=\"orange\"] {\r\n    background: linear-gradient(60deg, #ffa726, #fb8c00);\r\n    box-shadow: 0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2);\r\n}\r\n  \r\n  .card [data-background-color=\"red\"] {\r\n    background: linear-gradient(60deg, #ef5350, #e53935);\r\n    box-shadow: 0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2);\r\n}\r\n  \r\n  .card [data-background-color] {\r\n    color: #FFFFFF;\r\n}\r\n  \r\n  .card [data-background-color] a {\r\n    color: #FFFFFF;\r\n}\r\n  \r\n  .card-stats .title {\r\n    margin: 0;\r\n    \r\n}\r\n  \r\n  .card-stats .card-header {\r\n    float: left;\r\n    text-align: center;\r\n}\r\n  \r\n  .card-stats .card-header i {\r\n    font-size: 36px;\r\n    line-height: 56px;\r\n    width: 56px;\r\n    height: 56px;\r\n}\r\n  \r\n  .card-stats .card-content {\r\n    text-align: right;\r\n    padding-top: 10px;\r\n}\r\n  \r\n  .card-nav-tabs .header-raised {\r\n    margin-top: -30px;\r\n}\r\n  \r\n  .card-nav-tabs .nav-tabs {\r\n    background: transparent;\r\n    padding: 0;\r\n}\r\n  \r\n  .card-nav-tabs .nav-tabs-title {\r\n    float: left;\r\n    padding: 10px 10px 10px 0;\r\n    line-height: 24px;\r\n}\r\n  \r\n  .card-plain {\r\n    background: transparent;\r\n    box-shadow: none;\r\n}\r\n  \r\n  .card-plain .card-header {\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n}\r\n  \r\n  .card-plain .content {\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}\r\n  \r\n  .card-plain .card-image {\r\n    margin: 0;\r\n    border-radius: 3px;\r\n}\r\n  \r\n  .card-plain .card-image img {\r\n    border-radius: 3px;\r\n}\r\n  \r\n  .card-profile,\r\n.card-testimonial {\r\n    margin-top: 30px;\r\n    text-align: center;\r\n}\r\n  \r\n  .card-profile .btn-just-icon.btn-raised,\r\n.card-testimonial .btn-just-icon.btn-raised {\r\n    margin-left: 6px;\r\n    margin-right: 6px;\r\n}\r\n  \r\n  .card-profile .card-avatar,\r\n.card-testimonial .card-avatar {\r\n    max-width: 130px;\r\n    max-height: 130px;\r\n    margin: -50px auto 0;\r\n    border-radius: 50%;\r\n    overflow: hidden;\r\n    box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\r\n}\r\n  \r\n  .card-profile .card-avatar+.content,\r\n.card-testimonial .card-avatar+.content {\r\n    margin-top: 15px;\r\n}\r\n  \r\n  .card-profile.card-plain .card-avatar,\r\n.card-testimonial.card-plain .card-avatar {\r\n    margin-top: 0;\r\n}\r\n  \r\n  .tabla-centrar-busqueda{\r\n  text-align: center;\r\n  left: 25%;\r\n}\r\n  \r\n  .tabla-centrar-busqueda-fecha{\r\n  text-align: center;\r\n  left: 10%;\r\n}"

/***/ }),

/***/ "./src/app/Plantilla/app-aside/app-aside.component.html":
/*!**************************************************************!*\
  !*** ./src/app/Plantilla/app-aside/app-aside.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"left-sidebar\" class=\"left-sidebar \">\n  <!-- main-nav -->\n  <div class=\"sidebar-scroll\">\n    <nav class=\"main-nav\">\n      <ul class=\"main-menu\">\n        <li class=\"active\">\n\n          <ul class=\"sub-menu open\">\n            <li class=\"active\">\n              <a [routerLink]=\"['/template/controlpanel']\">\n                <i class=\"fa fa-bar-chart-o fw\"></i>\n                <span class=\"text\">Panel de Control</span>\n\n              </a>\n            </li>\n            <li>\n              <a [routerLink]=\"['/template/polizas']\">\n                <i class=\"fa fa-edit\"></i>\n                <span class=\"text\">Pólizas</span>\n\n              </a>\n            </li>\n            <li>\n              <a [routerLink]=\"['/template/reportes']\">\n                <i class=\"fa fa-folder-open\"></i>\n                <span class=\"text\">Reportes</span>\n              </a>\n\n            </li>\n            <li>\n              <a href=\"#\" class=\"js-sub-menu-toggle\">\n                <i class=\"fa fa-cogs\"></i>\n                <span class=\"text\">Administrar</span>\n                <i class=\"toggle-icon fa fa-angle-left\"></i>\n              </a>\n              <ul class=\"sub-menu \">\n                <li>\n                  <a [routerLink]=\"['/template/estados']\">\n                    <i class=\"fa fa-server\"></i>\n                    <span class=\"text\">Estados</span>\n                  </a>\n                </li>\n                <li>\n                  <a [routerLink]=\"['/template/cobertura']\">\n                    <i class=\"fa fa-shield\"></i>\n                    <span class=\"text\">Cobertura</span>\n                  </a>\n                </li>\n              </ul>\n            </li>         \n          </ul>\n        </li>\n      </ul>\n    </nav>\n    <!-- /main-nav -->\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/Plantilla/app-aside/app-aside.component.ts":
/*!************************************************************!*\
  !*** ./src/app/Plantilla/app-aside/app-aside.component.ts ***!
  \************************************************************/
/*! exports provided: AppAsideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppAsideComponent", function() { return AppAsideComponent; });
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

var AppAsideComponent = /** @class */ (function () {
    function AppAsideComponent() {
    }
    AppAsideComponent.prototype.ngOnInit = function () {
    };
    AppAsideComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-app-aside',
            template: __webpack_require__(/*! ./app-aside.component.html */ "./src/app/Plantilla/app-aside/app-aside.component.html"),
            styles: [__webpack_require__(/*! ./app-aside.component.css */ "./src/app/Plantilla/app-aside/app-aside.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppAsideComponent);
    return AppAsideComponent;
}());



/***/ }),

/***/ "./src/app/Plantilla/app-content/app-content.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/Plantilla/app-content/app-content.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Plantilla/app-content/app-content.component.html":
/*!******************************************************************!*\
  !*** ./src/app/Plantilla/app-content/app-content.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Content Wrapper. Contains page content -->\n<div id=\"main-content-wrapper\" class=\"content-wrapper\" >\n  <!-- Content Header (Page header) -->\n  <!-- Main content -->\n    <router-outlet></router-outlet>\n    <br><br>\n    <app-app-footer></app-app-footer>\n  <!-- /.content -->\n</div>"

/***/ }),

/***/ "./src/app/Plantilla/app-content/app-content.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/Plantilla/app-content/app-content.component.ts ***!
  \****************************************************************/
/*! exports provided: AppContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContentComponent", function() { return AppContentComponent; });
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

var AppContentComponent = /** @class */ (function () {
    function AppContentComponent() {
    }
    AppContentComponent.prototype.ngOnInit = function () {
    };
    AppContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-app-content',
            template: __webpack_require__(/*! ./app-content.component.html */ "./src/app/Plantilla/app-content/app-content.component.html"),
            styles: [__webpack_require__(/*! ./app-content.component.css */ "./src/app/Plantilla/app-content/app-content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppContentComponent);
    return AppContentComponent;
}());



/***/ }),

/***/ "./src/app/Plantilla/app-footer/app-footer.component.css":
/*!***************************************************************!*\
  !*** ./src/app/Plantilla/app-footer/app-footer.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Plantilla/app-footer/app-footer.component.html":
/*!****************************************************************!*\
  !*** ./src/app/Plantilla/app-footer/app-footer.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t<!-- FOOTER -->\n  <footer class=\"footer\">\n    <div>\n        <img [src]=\"'assets/ImagenesPlantillas/dtic.png'\" height=\"30\" width=\"80\" alt=\"KingAdmin - Admin Dashboard\" /> &copy; Escuela Superior Politecnica de Chimborazo 2018\n    </div>\n   <!-- <div *ngIf=\"!blimagen\"> \n        <img [src]=\"'assets/ImagenesPlantillas/dtic.png'\" height=\"30\" width=\"80\" alt=\"KingAdmin - Admin Dashboard\" /> &copy; Escuela Superior Politecnica de Chimborazo 2018\n    </div> -->\n    </footer>\n  <!-- END FOOTER -->"

/***/ }),

/***/ "./src/app/Plantilla/app-footer/app-footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/Plantilla/app-footer/app-footer.component.ts ***!
  \**************************************************************/
/*! exports provided: AppFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppFooterComponent", function() { return AppFooterComponent; });
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

var AppFooterComponent = /** @class */ (function () {
    function AppFooterComponent() {
    }
    AppFooterComponent.prototype.ngOnInit = function () {
    };
    AppFooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-app-footer',
            template: __webpack_require__(/*! ./app-footer.component.html */ "./src/app/Plantilla/app-footer/app-footer.component.html"),
            styles: [__webpack_require__(/*! ./app-footer.component.css */ "./src/app/Plantilla/app-footer/app-footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppFooterComponent);
    return AppFooterComponent;
}());



/***/ }),

/***/ "./src/app/Plantilla/app-header/app-header.component.css":
/*!***************************************************************!*\
  !*** ./src/app/Plantilla/app-header/app-header.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Plantilla/app-header/app-header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/Plantilla/app-header/app-header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- TOP BAR -->\n<div class=\"top-bar navbar-fixed-top\">\n    <div class=\"container\">\n        <div class=\"clearfix\">\n            <a class=\"pull-left toggle-sidebar-collapse\">\n                <i class=\"fa fa-bars\"></i>\n            </a>\n            <!-- logo -->\n            <div class=\"pull-left left \">\n                <a>\n                    <img [src]=\"'assets/ImagenesPlantillas/espoch.png'\" style=\"margin-right: 0.5em\" width=\"40\" height=\"40\" alt=\" \" />\n                    <img [src]=\"'assets/ImagenesPlantillas/dtic-blanco.png'\" width=\"130\" height=\"40\" alt=\" \" />\n                </a>\n                <h4 class=\"logo2\" style=\"margin-left: 8em\">\n                    <strong>SISTEMA DE CONTROL DE PÓLIZAS</strong>\n                </h4>\n            </div>\n            <!-- end logo -->\n            <div class=\"pull-right right\">\n                <!-- search box -->\n                <!-- end search box -->\n                <!-- top-bar-right -->\n                <div class=\"top-bar-right\">\n                    <div class=\"notifications\">\n                        \n                            <!-- end notification: general -->\n                        \n                    </div>\n                    <!-- logged user and the menu -->\n                    <div class=\"logged-user\">\n                        <div class=\"btn-group\">\n                            <a href=\"#\" class=\"btn btn-link dropdown-toggle\" data-toggle=\"dropdown\">\n                                <img [src]=\"'assets/ImagenesPlantillas/user-avatar.png'\" width=\"30\" alt=\" \" />\n                                <span class=\"name\"> Usuario  </span>\n                                <span class=\"caret\"></span>\n                            </a>\n                            <ul class=\"dropdown-menu\" role=\"menu\">\n                                <li>\n                                    <a href=\"#\">\n                                        <i class=\"fa fa-power-off\"></i>\n                                        <span class=\"text\"> Salir</span>\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                    <!-- end logged user and the menu -->\n                </div>\n                <!-- end top-bar-right -->\n            </div>\n        </div>\n    </div>\n    <!-- /container -->\n</div>\n<!-- END TOP BAR -->"

/***/ }),

/***/ "./src/app/Plantilla/app-header/app-header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/Plantilla/app-header/app-header.component.ts ***!
  \**************************************************************/
/*! exports provided: AppHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeaderComponent", function() { return AppHeaderComponent; });
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

var AppHeaderComponent = /** @class */ (function () {
    function AppHeaderComponent() {
    }
    AppHeaderComponent.prototype.ngOnInit = function () {
    };
    AppHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-app-header',
            template: __webpack_require__(/*! ./app-header.component.html */ "./src/app/Plantilla/app-header/app-header.component.html"),
            styles: [__webpack_require__(/*! ./app-header.component.css */ "./src/app/Plantilla/app-header/app-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppHeaderComponent);
    return AppHeaderComponent;
}());



/***/ }),

/***/ "./src/app/Plantilla/plantilla-integrada/plantilla-integrada.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/Plantilla/plantilla-integrada/plantilla-integrada.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 0;\r\n    word-wrap: break-word;\r\n    background-color: #fff;\r\n    background-clip: border-box;\r\n    border: 1px solid rgba(0, 0, 0, 0.125);\r\n    border-radius: 0.25rem;\r\n  }\r\n  \r\n  .card > hr {\r\n    margin-right: 0;\r\n    margin-left: 0;\r\n  }\r\n  \r\n  .card > .list-group:first-child .list-group-item:first-child {\r\n    border-top-left-radius: 0.25rem;\r\n    border-top-right-radius: 0.25rem;\r\n  }\r\n  \r\n  .card > .list-group:last-child .list-group-item:last-child {\r\n    border-bottom-right-radius: 0.25rem;\r\n    border-bottom-left-radius: 0.25rem;\r\n  }\r\n  \r\n  .card-body {\r\n    flex: 1 1 auto;\r\n    padding: 1.25rem;\r\n  }\r\n  \r\n  .card-title {\r\n    margin-bottom: 0.75rem;\r\n  }\r\n  \r\n  .card-subtitle {\r\n    margin-top: -0.375rem;\r\n    margin-bottom: 0;\r\n  }\r\n  \r\n  .card-text:last-child {\r\n    margin-bottom: 0;\r\n  }\r\n  \r\n  .card-link:hover {\r\n    text-decoration: none;\r\n  }\r\n  \r\n  .card-link + .card-link {\r\n    margin-left: 1.25rem;\r\n  }\r\n  \r\n  .card-header {\r\n    padding: 0.75rem 1.25rem;\r\n    margin-bottom: 0;\r\n    background-color: rgba(0, 0, 0, 0.03);\r\n    border-bottom: 1px solid rgba(0, 0, 0, 0.125);\r\n  }\r\n  \r\n  .card-header:first-child {\r\n    border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;\r\n  }\r\n  \r\n  .card-header + .list-group .list-group-item:first-child {\r\n    border-top: 0;\r\n  }\r\n  \r\n  .card-footer {\r\n    padding: 0.75rem 1.25rem;\r\n    background-color: rgba(0, 0, 0, 0.03);\r\n    border-top: 1px solid rgba(0, 0, 0, 0.125);\r\n  }\r\n  \r\n  .card-footer:last-child {\r\n    border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);\r\n  }\r\n  \r\n  .card-header-tabs {\r\n    margin-right: -0.625rem;\r\n    margin-bottom: -0.75rem;\r\n    margin-left: -0.625rem;\r\n    border-bottom: 0;\r\n  }\r\n  \r\n  .card-header-pills {\r\n    margin-right: -0.625rem;\r\n    margin-left: -0.625rem;\r\n  }\r\n  \r\n  .card-img-overlay {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    padding: 1.25rem;\r\n  }\r\n  \r\n  .card-img {\r\n    width: 100%;\r\n    border-radius: calc(0.25rem - 1px);\r\n  }\r\n  \r\n  .card-img-top {\r\n    width: 100%;\r\n    border-top-left-radius: calc(0.25rem - 1px);\r\n    border-top-right-radius: calc(0.25rem - 1px);\r\n  }\r\n  \r\n  .card-img-bottom {\r\n    width: 100%;\r\n    border-bottom-right-radius: calc(0.25rem - 1px);\r\n    border-bottom-left-radius: calc(0.25rem - 1px);\r\n  }\r\n  \r\n  .card-deck {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .card-deck .card {\r\n    margin-bottom: 15px;\r\n  }\r\n  \r\n  @media (min-width: 576px) {\r\n    .card-deck {\r\n      flex-flow: row wrap;\r\n      margin-right: -15px;\r\n      margin-left: -15px;\r\n    }\r\n    .card-deck .card {\r\n      display: flex;\r\n      flex: 1 0 0%;\r\n      flex-direction: column;\r\n      margin-right: 15px;\r\n      margin-bottom: 0;\r\n      margin-left: 15px;\r\n    }\r\n  }\r\n  \r\n  .card-group {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .card-group > .card {\r\n    margin-bottom: 15px;\r\n  }\r\n  \r\n  @media (min-width: 576px) {\r\n    .card-group {\r\n      flex-flow: row wrap;\r\n    }\r\n    .card-group > .card {\r\n      flex: 1 0 0%;\r\n      margin-bottom: 0;\r\n    }\r\n    .card-group > .card + .card {\r\n      margin-left: 0;\r\n      border-left: 0;\r\n    }\r\n    .card-group > .card:first-child {\r\n      border-top-right-radius: 0;\r\n      border-bottom-right-radius: 0;\r\n    }\r\n    .card-group > .card:first-child .card-img-top,\r\n    .card-group > .card:first-child .card-header {\r\n      border-top-right-radius: 0;\r\n    }\r\n    .card-group > .card:first-child .card-img-bottom,\r\n    .card-group > .card:first-child .card-footer {\r\n      border-bottom-right-radius: 0;\r\n    }\r\n    .card-group > .card:last-child {\r\n      border-top-left-radius: 0;\r\n      border-bottom-left-radius: 0;\r\n    }\r\n    .card-group > .card:last-child .card-img-top,\r\n    .card-group > .card:last-child .card-header {\r\n      border-top-left-radius: 0;\r\n    }\r\n    .card-group > .card:last-child .card-img-bottom,\r\n    .card-group > .card:last-child .card-footer {\r\n      border-bottom-left-radius: 0;\r\n    }\r\n    .card-group > .card:only-child {\r\n      border-radius: 0.25rem;\r\n    }\r\n    .card-group > .card:only-child .card-img-top,\r\n    .card-group > .card:only-child .card-header {\r\n      border-top-left-radius: 0.25rem;\r\n      border-top-right-radius: 0.25rem;\r\n    }\r\n    .card-group > .card:only-child .card-img-bottom,\r\n    .card-group > .card:only-child .card-footer {\r\n      border-bottom-right-radius: 0.25rem;\r\n      border-bottom-left-radius: 0.25rem;\r\n    }\r\n    .card-group > .card:not(:first-child):not(:last-child):not(:only-child) {\r\n      border-radius: 0;\r\n    }\r\n    .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-img-top,\r\n    .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-img-bottom,\r\n    .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-header,\r\n    .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-footer {\r\n      border-radius: 0;\r\n    }\r\n  }\r\n  \r\n  .card-columns .card {\r\n    margin-bottom: 0.75rem;\r\n  }\r\n  \r\n  @media (min-width: 576px) {\r\n    .card-columns {\r\n      -webkit-column-count: 3;\r\n      -moz-column-count: 3;\r\n      column-count: 3;\r\n      -webkit-column-gap: 1.25rem;\r\n      -moz-column-gap: 1.25rem;\r\n      column-gap: 1.25rem;\r\n    }\r\n    .card-columns .card {\r\n      display: inline-block;\r\n      width: 100%;\r\n    }\r\n  }\r\n  \r\n  .mb-3,\r\n.my-3 {\r\n  margin-bottom: 1rem !important;\r\n}\r\n  \r\n  .bg-primary {\r\n    background-color: #007bff !important;\r\n  }\r\n  \r\n  a.bg-primary:hover, a.bg-primary:focus,\r\n  button.bg-primary:hover,\r\n  button.bg-primary:focus {\r\n    background-color: #0062cc !important;\r\n  }\r\n  \r\n  .bg-primary {\r\n    background-color: #007bff !important;\r\n  }\r\n  \r\n  a.bg-primary:hover, a.bg-primary:focus,\r\n  button.bg-primary:hover,\r\n  button.bg-primary:focus {\r\n    background-color: #0062cc !important;\r\n  }\r\n  \r\n  .bg-secondary {\r\n    background-color: #6c757d !important;\r\n  }\r\n  \r\n  a.bg-secondary:hover, a.bg-secondary:focus,\r\n  button.bg-secondary:hover,\r\n  button.bg-secondary:focus {\r\n    background-color: #545b62 !important;\r\n  }\r\n  \r\n  .bg-success {\r\n    background-color: #28a745 !important;\r\n  }\r\n  \r\n  a.bg-success:hover, a.bg-success:focus,\r\n  button.bg-success:hover,\r\n  button.bg-success:focus {\r\n    background-color: #1e7e34 !important;\r\n  }\r\n  \r\n  .bg-info {\r\n    background-color: #17a2b8 !important;\r\n  }\r\n  \r\n  a.bg-info:hover, a.bg-info:focus,\r\n  button.bg-info:hover,\r\n  button.bg-info:focus {\r\n    background-color: #117a8b !important;\r\n  }\r\n  \r\n  .bg-warning {\r\n    background-color: #ffc107 !important;\r\n  }\r\n  \r\n  a.bg-warning:hover, a.bg-warning:focus,\r\n  button.bg-warning:hover,\r\n  button.bg-warning:focus {\r\n    background-color: #d39e00 !important;\r\n  }\r\n  \r\n  .bg-danger {\r\n    background-color: #dc3545 !important;\r\n  }\r\n  \r\n  a.bg-danger:hover, a.bg-danger:focus,\r\n  button.bg-danger:hover,\r\n  button.bg-danger:focus {\r\n    background-color: #bd2130 !important;\r\n  }\r\n  \r\n  .bg-light {\r\n    background-color: #f8f9fa !important;\r\n  }\r\n  \r\n  a.bg-light:hover, a.bg-light:focus,\r\n  button.bg-light:hover,\r\n  button.bg-light:focus {\r\n    background-color: #dae0e5 !important;\r\n  }\r\n  \r\n  .bg-dark {\r\n    background-color: #343a40 !important;\r\n  }\r\n  \r\n  a.bg-dark:hover, a.bg-dark:focus,\r\n  button.bg-dark:hover,\r\n  button.bg-dark:focus {\r\n    background-color: #1d2124 !important;\r\n  }\r\n  \r\n  .bg-white {\r\n    background-color: #fff !important;\r\n  }\r\n  \r\n  .bg-transparent {\r\n    background-color: transparent !important;\r\n  }\r\n  \r\n  .border {\r\n    border: 1px solid #dee2e6 !important;\r\n  }\r\n  \r\n  .border-top {\r\n    border-top: 1px solid #dee2e6 !important;\r\n  }\r\n  \r\n  .border-right {\r\n    border-right: 1px solid #dee2e6 !important;\r\n  }\r\n  \r\n  .card {\r\n    display: inline-block;\r\n    position: relative;\r\n    width: 100%;\r\n    margin: 25px 0;\r\n    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);\r\n    border-radius: 13px;\r\n    color: rgba(0, 0, 0, 0.87);\r\n    background: #fff;\r\n}\r\n  \r\n  .card .card-height-indicator {\r\n    margin-top: 100%;\r\n}\r\n  \r\n  .card.row-space .header {\r\n    padding: 15px 20px 0;\r\n}\r\n  \r\n  .card .title {\r\n    margin-top: 0;\r\n    margin-bottom: 5px;\r\n}\r\n  \r\n  .card .card-image {\r\n    height: 60%;\r\n    position: relative;\r\n    overflow: hidden;\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n    margin-top: -30px;\r\n    border-radius: 6px;\r\n}\r\n  \r\n  .card .card-image img {\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 6px;\r\n    pointer-events: none;\r\n}\r\n  \r\n  .card .card-image .card-title {\r\n    position: absolute;\r\n    bottom: 15px;\r\n    left: 15px;\r\n    color: #fff;\r\n    font-size: 1.3em;\r\n    text-shadow: 0 2px 5px rgba(33, 33, 33, 0.5);\r\n}\r\n  \r\n  .card .category:not([class*=\"text-\"]) {\r\n    color: #999999;\r\n}\r\n  \r\n  .card .card-content {\r\n    padding: 15px 20px;\r\n}\r\n  \r\n  .card .card-content .category {\r\n    margin-bottom: 0;\r\n}\r\n  \r\n  .card .card-header {\r\n    box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\r\n    margin: -35px 55px 0;\r\n    border-radius: 3px;\r\n    padding: 5px;\r\n    background-color: #999999;\r\n}\r\n  \r\n  .card .card-header .title {\r\n    color: #FFFFFF;\r\n}\r\n  \r\n  .card .card-header .category {\r\n    margin-bottom: 0;\r\n    color: rgba(255, 255, 255, 0.62);\r\n}\r\n  \r\n  .card .card-header.card-chart {\r\n    padding: 0;\r\n    min-height: 160px;\r\n}\r\n  \r\n  .card .card-header.card-chart+.content h4 {\r\n    margin-top: 0;\r\n}\r\n  \r\n  .card .card-header .ct-label {\r\n    color: rgba(255, 255, 255, 0.7);\r\n}\r\n  \r\n  .card .card-header .ct-grid {\r\n    stroke: rgba(255, 255, 255, 0.2);\r\n}\r\n  \r\n  .card .card-header .ct-series-a .ct-point,\r\n.card .card-header .ct-series-a .ct-line,\r\n.card .card-header .ct-series-a .ct-bar,\r\n.card .card-header .ct-series-a .ct-slice-donut {\r\n    stroke: rgba(255, 255, 255, 0.8);\r\n}\r\n  \r\n  .card .card-header .ct-series-a .ct-slice-pie,\r\n.card .card-header .ct-series-a .ct-area {\r\n    fill: rgba(255, 255, 255, 0.4);\r\n}\r\n  \r\n  .card .chart-title {\r\n    position: absolute;\r\n    top: 25px;\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n  \r\n  .card .chart-title h3 {\r\n    margin: 0;\r\n    color: #FFFFFF;\r\n}\r\n  \r\n  .card .chart-title h6 {\r\n    margin: 0;\r\n    color: rgba(255, 255, 255, 0.4);\r\n}\r\n  \r\n  .card .card-footer {\r\n    margin: 0 20px 10px;\r\n    padding-top: 10px;\r\n    border-top: 1px solid #eeeeee;\r\n}\r\n  \r\n  .card .card-footer .content {\r\n    display: block;\r\n}\r\n  \r\n  .card .card-footer div {\r\n    display: inline-block;\r\n}\r\n  \r\n  .card .card-footer .author {\r\n    color: #999999;\r\n}\r\n  \r\n  .card .card-footer .stats {\r\n    line-height: 22px;\r\n    color: #999999;\r\n    font-size: 12px;\r\n}\r\n  \r\n  .card .card-footer .stats .material-icons {\r\n    position: relative;\r\n    top: 4px;\r\n    font-size: 16px;\r\n}\r\n  \r\n  .card .card-footer h6 {\r\n    color: #999999;\r\n}\r\n  \r\n  /*.card img {\r\n    width: 100%;\r\n    height: auto;\r\n}*/\r\n  \r\n  .card .category .material-icons {\r\n    position: relative;\r\n    top: 6px;\r\n    line-height: 0;\r\n}\r\n  \r\n  .card .category-social .fa {\r\n    font-size: 24px;\r\n    position: relative;\r\n    margin-top: -4px;\r\n    top: 2px;\r\n    margin-right: 5px;\r\n}\r\n  \r\n  .card .author .avatar {\r\n    width: 30px;\r\n    height: 30px;\r\n    overflow: hidden;\r\n    border-radius: 50%;\r\n    margin-right: 5px;\r\n}\r\n  \r\n  .card .author a {\r\n    color: #3C4858;\r\n    text-decoration: none;\r\n}\r\n  \r\n  .card .author a .ripple-container {\r\n    display: none;\r\n}\r\n  \r\n  .card .table {\r\n    margin-bottom: 0;\r\n}\r\n  \r\n  .card .table tr:first-child td {\r\n    border-top: none;\r\n}\r\n  \r\n  .card [data-background-color=\"purple\"] {\r\n    background: linear-gradient(60deg, #ab47bc, #8e24aa);\r\n    box-shadow: 0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2);\r\n}\r\n  \r\n  .card [data-background-color=\"blue\"] {\r\n    background: linear-gradient(60deg, #26c6da, #00acc1);\r\n    box-shadow: 0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2);\r\n}\r\n  \r\n  .card [data-background-color=\"green\"] {\r\n    background: linear-gradient(60deg, #66bb6a, #43a047);\r\n    box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2);\r\n}\r\n  \r\n  .card [data-background-color=\"orange\"] {\r\n    background: linear-gradient(60deg, #ffa726, #fb8c00);\r\n    box-shadow: 0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2);\r\n}\r\n  \r\n  .card [data-background-color=\"red\"] {\r\n    background: linear-gradient(60deg, #ef5350, #e53935);\r\n    box-shadow: 0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2);\r\n}\r\n  \r\n  .card [data-background-color] {\r\n    color: #FFFFFF;\r\n}\r\n  \r\n  .card [data-background-color] a {\r\n    color: #FFFFFF;\r\n}\r\n  \r\n  .card-stats .title {\r\n    margin: 0;\r\n    \r\n}\r\n  \r\n  .card-stats .card-header {\r\n    float: left;\r\n    text-align: center;\r\n}\r\n  \r\n  .card-stats .card-header i {\r\n    font-size: 36px;\r\n    line-height: 56px;\r\n    width: 56px;\r\n    height: 56px;\r\n}\r\n  \r\n  .card-stats .card-content {\r\n    text-align: right;\r\n    padding-top: 10px;\r\n}\r\n  \r\n  .card-nav-tabs .header-raised {\r\n    margin-top: -30px;\r\n}\r\n  \r\n  .card-nav-tabs .nav-tabs {\r\n    background: transparent;\r\n    padding: 0;\r\n}\r\n  \r\n  .card-nav-tabs .nav-tabs-title {\r\n    float: left;\r\n    padding: 10px 10px 10px 0;\r\n    line-height: 24px;\r\n}\r\n  \r\n  .card-plain {\r\n    background: transparent;\r\n    box-shadow: none;\r\n}\r\n  \r\n  .card-plain .card-header {\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n}\r\n  \r\n  .card-plain .content {\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}\r\n  \r\n  .card-plain .card-image {\r\n    margin: 0;\r\n    border-radius: 3px;\r\n}\r\n  \r\n  .card-plain .card-image img {\r\n    border-radius: 3px;\r\n}\r\n  \r\n  .card-profile,\r\n.card-testimonial {\r\n    margin-top: 30px;\r\n    text-align: center;\r\n}\r\n  \r\n  .card-profile .btn-just-icon.btn-raised,\r\n.card-testimonial .btn-just-icon.btn-raised {\r\n    margin-left: 6px;\r\n    margin-right: 6px;\r\n}\r\n  \r\n  .card-profile .card-avatar,\r\n.card-testimonial .card-avatar {\r\n    max-width: 130px;\r\n    max-height: 130px;\r\n    margin: -50px auto 0;\r\n    border-radius: 50%;\r\n    overflow: hidden;\r\n    box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\r\n}\r\n  \r\n  .card-profile .card-avatar+.content,\r\n.card-testimonial .card-avatar+.content {\r\n    margin-top: 15px;\r\n}\r\n  \r\n  .card-profile.card-plain .card-avatar,\r\n.card-testimonial.card-plain .card-avatar {\r\n    margin-top: 0;\r\n}\r\n  \r\n  .tabla-centrar-busqueda{\r\n  text-align: center;\r\n  left: 25%;\r\n}\r\n  \r\n  .tabla-centrar-busqueda-fecha{\r\n  text-align: center;\r\n  left: 10%;\r\n}\r\n  \r\n  html {\r\n  font-size: 16px;\r\n}\r\n  \r\n  .menu {\r\n  width: 2.2rem;\r\n  height: 2.7rem;\r\n  background: #2EE3AD;\r\n  border-radius: 0.5rem;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 5%;\r\n  font-family: sans-serif;\r\n  font-size: 2rem;\r\n  color: white;\r\n  text-align: center;\r\n  transition: left 0.7s;\r\n}\r\n  \r\n  .checkbox:checked ~ .menu {\r\n  left: 40%;\r\n  border-radius: 0 0.5rem 0.5rem 0;\r\n}\r\n  \r\n  .left-panel {\r\n  width: 40%;\r\n  height: 100%;\r\n  /*safari*/\r\n  /*opera*/\r\n  /*estandar*/\r\n  background: linear-gradient(#54BBC7, #2EE3AD, #9191f2);\r\n  position: absolute;\r\n  top: 0;\r\n  left: -40%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  transition: left 0.4s;\r\n}\r\n  \r\n  .checkbox:checked ~ .left-panel {\r\n  left: 0;\r\n}\r\n  \r\n  .checkbox {\r\n  display: none;\r\n  \r\n}\r\n  \r\n  ul a {\r\n  color: #F7F7F7;\r\n  text-decoration: none;\r\n}\r\n  \r\n  li {\r\n  list-style: none;\r\n  font-size: 2rem;\r\n  text-align: center;\r\n  padding: 0 0.5rem;\r\n  margin: 1rem 0;\r\n}\r\n  \r\n  li:hover {\r\n  color: white;\r\n  border: solid white;\r\n  border-width: 0 0.1rem;\r\n}"

/***/ }),

/***/ "./src/app/Plantilla/plantilla-integrada/plantilla-integrada.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/Plantilla/plantilla-integrada/plantilla-integrada.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<html lang=\"en\" class=\"no-js\">\n\n<head>\n  <title>Sistema de Control de Pólizas</title>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\">\n  <meta name=\"description\" content=\"DTIC | SistemaControlPolizas\">\n  <meta name=\"author\" content=\"DTIC\">\n</head>\n<body class=\"topnav-fixed\">\n  <div id=\"wrapper\" class=\"wrapper\">\n    <app-app-header></app-app-header>\n    <app-app-aside></app-app-aside>\n    <app-app-content></app-app-content>\n   \n  </div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/Plantilla/plantilla-integrada/plantilla-integrada.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/Plantilla/plantilla-integrada/plantilla-integrada.component.ts ***!
  \********************************************************************************/
/*! exports provided: PlantillaIntegradaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlantillaIntegradaComponent", function() { return PlantillaIntegradaComponent; });
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

var PlantillaIntegradaComponent = /** @class */ (function () {
    function PlantillaIntegradaComponent() {
    }
    PlantillaIntegradaComponent.prototype.ngOnInit = function () {
    };
    PlantillaIntegradaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-plantilla-integrada',
            template: __webpack_require__(/*! ./plantilla-integrada.component.html */ "./src/app/Plantilla/plantilla-integrada/plantilla-integrada.component.html"),
            styles: [__webpack_require__(/*! ./plantilla-integrada.component.css */ "./src/app/Plantilla/plantilla-integrada/plantilla-integrada.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PlantillaIntegradaComponent);
    return PlantillaIntegradaComponent;
}());



/***/ }),

/***/ "./src/app/Recursos/Mensajes.services.ts":
/*!***********************************************!*\
  !*** ./src/app/Recursos/Mensajes.services.ts ***!
  \***********************************************/
/*! exports provided: Mensajes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mensajes", function() { return Mensajes; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Mensajes = /** @class */ (function () {
    function Mensajes() {
        this.mensaje1 = 'Datos Ingresado';
        this.mensaje2 = 'Datos Erroneos';
    }
    Mensajes = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], Mensajes);
    return Mensajes;
}());



/***/ }),

/***/ "./src/app/Recursos/Tools.services.ts":
/*!********************************************!*\
  !*** ./src/app/Recursos/Tools.services.ts ***!
  \********************************************/
/*! exports provided: ToolsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolsService", function() { return ToolsService; });
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

var ToolsService = /** @class */ (function () {
    function ToolsService() {
        this.dtOptions = {};
    }
    ToolsService.prototype.Tabla = function (opcion) {
        if (opcion == 1) {
            this.dtOptions[1] = {
                pagingType: 'full_numbers',
                pageLength: 10,
                language: {
                    processing: "Procesando...",
                    search: "Buscar:",
                    lengthMenu: "Mostrar _MENU_ Registro",
                    info: "Mostrando desde _START_ al _END_ de _TOTAL_ elementos",
                    infoEmpty: "Mostrando ningún elemento.",
                    infoFiltered: "(filtrado _MAX_ elementos total)",
                    infoPostFix: "",
                    loadingRecords: "Cargando registros...",
                    zeroRecords: "No se encontraron registros",
                    emptyTable: "No hay datos disponibles en la tabla",
                    paginate: {
                        first: "Primero",
                        previous: "Anterior",
                        next: "Siguiente",
                        last: "Último"
                    },
                    buttons: {
                        copy: 'Copiar',
                        copyTitle: 'Copiar al portapapeles',
                        copySuccess: 'Se han copiado %d filas al portapapeles',
                        copyKeys: 'Pulse <i>ctrl</i> o <i>\u2318</i> + <i>C</i> para copiar datos de la tabla a su portapapeles. <br><br>Para cancelar, haga clic en este mensaje o pulse Esc.',
                        print: 'Imprimir'
                    },
                    aria: {
                        sortAscending: ": Activar para ordenar la tabla en orden ascendente",
                        sortDescending: ": Activar para ordenar la tabla en orden descendente"
                    }
                },
                dom: 'Bfrtip',
                // Configure the buttons
                buttons: [
                    'print',
                    'copy',
                    'excel'
                ]
            };
            return this.dtOptions[1];
        }
    };
    ToolsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ToolsService);
    return ToolsService;
}());



/***/ }),

/***/ "./src/app/ServiciosWeb/configuracionesUrl.service.ts":
/*!************************************************************!*\
  !*** ./src/app/ServiciosWeb/configuracionesUrl.service.ts ***!
  \************************************************************/
/*! exports provided: ConfiguracionesUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracionesUrl", function() { return ConfiguracionesUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ConfiguracionesUrl = /** @class */ (function () {
    function ConfiguracionesUrl() {
        //Servidor de Pruebas
        this.url1 = 'http://pruebasw.espoch.edu.ec:3002/';
        this.url2 = 'https://servicioscomprobante.espoch.edu.ec:8181/';
        this.url3 = 'http://localhost:8080/AD_Polizas/webresources/entidades.poliza/';
        this.url4 = 'http://localhost:8080/';
    }
    ConfiguracionesUrl = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ConfiguracionesUrl);
    return ConfiguracionesUrl;
}());



/***/ }),

/***/ "./src/app/ServiciosWeb/servicioswebconsumo.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/ServiciosWeb/servicioswebconsumo.service.ts ***!
  \*************************************************************/
/*! exports provided: ServiciosWebConsumo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosWebConsumo", function() { return ServiciosWebConsumo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ServiciosWeb_configuracionesUrl_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ServiciosWeb/configuracionesUrl.service */ "./src/app/ServiciosWeb/configuracionesUrl.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ServiciosWebConsumo = /** @class */ (function () {
    function ServiciosWebConsumo(http, server, hpptclient) {
        this.http = http;
        this.hpptclient = hpptclient;
        this.urlservicio = server.url1;
        this.urlcentralizada = server.url2;
        this.urlingresopol = server.url3;
        this.urlPruebaEd = server.url4;
    }
    //Servicio Web Prueba 
    ServiciosWebConsumo.prototype.ServicioWebPrueba = function (strEstablecimiento) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        var parametros = strEstablecimiento;
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.urlservicio + 'ServicioWebComprobantes/ServiciosComprobantes/ListadoEstablecimiento/' + parametros)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
    };
    //Servicios Web Prueba 2
    ServiciosWebConsumo.prototype.ServicioWebPrueba2 = function (Parametro1, Parametro2, Parametro3) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        var content = JSON.stringify({
            parametro1: Parametro1,
            parametro2: Parametro2,
            parametro3: Parametro3
        });
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.urlservicio + 'ServicioWebComprobantes/ServiciosComprobantes/AnulacionFactura', content, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
    };
    //Servicio Ingreso Poliza
    ServiciosWebConsumo.prototype.ServicioWebIngresoPoliza = function (Parametro1, Parametro2, Parametro3, Parametro4, Parametro5, Parametro6, Parametro7, Parametro8, Parametro9, Parametro10, Parametro11, Parametro12, Parametro13, Parametro14, Parametro15) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        var content = JSON.stringify({
            parametro1: Parametro1,
            parametro2: Parametro2,
            parametro3: Parametro3,
            parametro4: Parametro4,
            parametro5: Parametro5,
            parametro6: Parametro6,
            parametro7: Parametro7,
            parametro8: Parametro8,
            parametro9: Parametro9,
            parametro10: Parametro10,
            parametro11: Parametro11,
            parametro12: Parametro12,
            parametro13: Parametro13,
            parametro14: Parametro14,
            parametro15: Parametro15
        });
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.urlingresopol + 'ingresarPoliza/', content, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
    };
    //Servicio web listar todos los estados
    ServiciosWebConsumo.prototype.ServicioWebEstado = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.urlPruebaEd + 'AD_Polizas/webresources/entidades.tipoestado/listarEstadosPolizas')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
    };
    //Servicio web listar todos las coberturas http://localhost:8080/AD_Polizas/webresources/entidades.tipocobertura
    ServiciosWebConsumo.prototype.ServicioWebCobertura = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.urlPruebaEd + 'AD_Polizas/webresources/entidades.tipocobertura/')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
    };
    //Servicio web listar todas las polizas
    ServiciosWebConsumo.prototype.ServicioWebPruebaED = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.urlPruebaEd + 'AD_Polizas/webresources/entidades.poliza/obtenertodos')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
    };
    //Servicio web listar todas las polizas por vencer
    ServiciosWebConsumo.prototype.ServicioWebPruebaED1 = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.urlPruebaEd + 'AD_Polizas/webresources/entidades.poliza/vencimiento/2019-07-10')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
    };
    //Servicio web listar todas las polizas vencidas
    ServiciosWebConsumo.prototype.ServicioWebPruebaED2 = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.urlPruebaEd + 'AD_Polizas/webresources/entidades.poliza/obtenervencidas')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
    };
    //Servicio Web para Eliminar Cobertura
    ServiciosWebConsumo.prototype.ServicioWebEliminarCobertura = function (idcobertura) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        var parametros = idcobertura;
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.urlPruebaEd + 'AD_Polizas/webresources/entidades.tipocobertura/eliminarTipoCobertura/' + parametros)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.text; }));
    };
    //Servicio Web para Eliminar un Estado
    ServiciosWebConsumo.prototype.ServicioWebEliminarEstado = function (idestado) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        var parametros = idestado;
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.urlPruebaEd + 'AD_Polizas/webresources/entidades.tipoestado/eliminarTipoEstado/' + parametros)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.text; }));
    };
    //Servicio Web para Ingresar un Estado
    ServiciosWebConsumo.prototype.ServicioWebIngresarEstado = function (descripcionestado) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        var parametros = descripcionestado;
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.urlPruebaEd + 'AD_Polizas/webresources/entidades.tipoestado/ingresarestado/' + parametros, parametros)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.text; }));
    };
    //Servicio Web para Ingresar un Estado
    ServiciosWebConsumo.prototype.ServicioWebIngresarPoliza = function (idaseguradora, idcobertura, idcontrato, idestado, numpoliza, fpagoant, finicob, vencini, vencfin, observaciones, numrenov, valini, valfin) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        var parametros = idaseguradora + "/" + idcobertura + "/" + idcontrato + "/" + idestado + "/" + numpoliza + "/" + fpagoant + "/" + finicob + "/" + vencini + "/" + vencfin + "/" + observaciones + "/" + numrenov + "/" + valini + "/" + valfin;
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.urlPruebaEd + 'AD_Polizas/webresources/entidades.poliza/ingresarPoliza/' + parametros, parametros)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.text; }));
    };
    //Servicio Web para Ingresar una Cobertura
    ServiciosWebConsumo.prototype.ServicioWebIngresarCobertura = function (descripcioncobertura) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        var parametros = descripcioncobertura;
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.urlPruebaEd + 'AD_Polizas/webresources/entidades.tipocobertura/ingresarcobertura/' + parametros, parametros)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.text; }));
    };
    ServiciosWebConsumo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _ServiciosWeb_configuracionesUrl_service__WEBPACK_IMPORTED_MODULE_3__["ConfiguracionesUrl"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ServiciosWebConsumo);
    return ServiciosWebConsumo;
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
        this.title = 'Capacitacion';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: '<router-outlet></router-outlet>',
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _Plantilla_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Plantilla/app-header/app-header.component */ "./src/app/Plantilla/app-header/app-header.component.ts");
/* harmony import */ var _Plantilla_app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Plantilla/app-footer/app-footer.component */ "./src/app/Plantilla/app-footer/app-footer.component.ts");
/* harmony import */ var _Plantilla_app_content_app_content_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Plantilla/app-content/app-content.component */ "./src/app/Plantilla/app-content/app-content.component.ts");
/* harmony import */ var _Plantilla_app_aside_app_aside_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Plantilla/app-aside/app-aside.component */ "./src/app/Plantilla/app-aside/app-aside.component.ts");
/* harmony import */ var _Plantilla_plantilla_integrada_plantilla_integrada_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Plantilla/plantilla-integrada/plantilla-integrada.component */ "./src/app/Plantilla/plantilla-integrada/plantilla-integrada.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _ingreso_polizas_ingreso_polizas_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ingreso-polizas/ingreso-polizas.component */ "./src/app/ingreso-polizas/ingreso-polizas.component.ts");
/* harmony import */ var _ingreso_estado_ingreso_estado_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ingreso-estado/ingreso-estado.component */ "./src/app/ingreso-estado/ingreso-estado.component.ts");
/* harmony import */ var _ingreso_cobertura_ingreso_cobertura_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ingreso-cobertura/ingreso-cobertura.component */ "./src/app/ingreso-cobertura/ingreso-cobertura.component.ts");
/* harmony import */ var _estados_estados_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./estados/estados.component */ "./src/app/estados/estados.component.ts");
/* harmony import */ var _cobertura_cobertura_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cobertura/cobertura.component */ "./src/app/cobertura/cobertura.component.ts");
/* harmony import */ var _controlpanel_controlpanel_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./controlpanel/controlpanel.component */ "./src/app/controlpanel/controlpanel.component.ts");
/* harmony import */ var _polizas_polizas_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./polizas/polizas.component */ "./src/app/polizas/polizas.component.ts");
/* harmony import */ var _reportes_reportes_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./reportes/reportes.component */ "./src/app/reportes/reportes.component.ts");
/* harmony import */ var _modificar_modificar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modificar/modificar.component */ "./src/app/modificar/modificar.component.ts");
/* harmony import */ var _modificar_estado_modificar_estado_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modificar-estado/modificar-estado.component */ "./src/app/modificar-estado/modificar-estado.component.ts");
/* harmony import */ var _modificar_cobertura_modificar_cobertura_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modificar-cobertura/modificar-cobertura.component */ "./src/app/modificar-cobertura/modificar-cobertura.component.ts");
/* harmony import */ var _ServiciosWeb_configuracionesUrl_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ServiciosWeb/configuracionesUrl.service */ "./src/app/ServiciosWeb/configuracionesUrl.service.ts");
/* harmony import */ var _ServiciosWeb_servicioswebconsumo_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ServiciosWeb/servicioswebconsumo.service */ "./src/app/ServiciosWeb/servicioswebconsumo.service.ts");
/* harmony import */ var _Recursos_Mensajes_services__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Recursos/Mensajes.services */ "./src/app/Recursos/Mensajes.services.ts");
/* harmony import */ var _Recursos_Tools_services__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Recursos/Tools.services */ "./src/app/Recursos/Tools.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







/****Componente Plantilla */





//Import Routing

//Import Paginas











//Servicios




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _Plantilla_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_7__["AppHeaderComponent"],
                _Plantilla_app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_8__["AppFooterComponent"],
                _Plantilla_app_content_app_content_component__WEBPACK_IMPORTED_MODULE_9__["AppContentComponent"],
                _Plantilla_app_aside_app_aside_component__WEBPACK_IMPORTED_MODULE_10__["AppAsideComponent"],
                _Plantilla_plantilla_integrada_plantilla_integrada_component__WEBPACK_IMPORTED_MODULE_11__["PlantillaIntegradaComponent"],
                _ingreso_polizas_ingreso_polizas_component__WEBPACK_IMPORTED_MODULE_13__["IngresoPolizasComponent"],
                _ingreso_estado_ingreso_estado_component__WEBPACK_IMPORTED_MODULE_14__["IngresoEstadoComponent"],
                _ingreso_cobertura_ingreso_cobertura_component__WEBPACK_IMPORTED_MODULE_15__["IngresoCoberturaComponent"],
                _estados_estados_component__WEBPACK_IMPORTED_MODULE_16__["EstadosComponent"],
                _cobertura_cobertura_component__WEBPACK_IMPORTED_MODULE_17__["CoberturaComponent"],
                _controlpanel_controlpanel_component__WEBPACK_IMPORTED_MODULE_18__["ControlpanelComponent"],
                _polizas_polizas_component__WEBPACK_IMPORTED_MODULE_19__["PolizasComponent"],
                _reportes_reportes_component__WEBPACK_IMPORTED_MODULE_20__["ReportesComponent"],
                _modificar_modificar_component__WEBPACK_IMPORTED_MODULE_21__["ModificarComponent"],
                _modificar_estado_modificar_estado_component__WEBPACK_IMPORTED_MODULE_22__["ModificarEstadoComponent"],
                _modificar_cobertura_modificar_cobertura_component__WEBPACK_IMPORTED_MODULE_23__["ModificarCoberturaComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_12__["routing"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"]
            ],
            providers: [_ServiciosWeb_configuracionesUrl_service__WEBPACK_IMPORTED_MODULE_24__["ConfiguracionesUrl"], _ServiciosWeb_servicioswebconsumo_service__WEBPACK_IMPORTED_MODULE_25__["ServiciosWebConsumo"], _Recursos_Mensajes_services__WEBPACK_IMPORTED_MODULE_26__["Mensajes"], _Recursos_Tools_services__WEBPACK_IMPORTED_MODULE_27__["ToolsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Plantilla_plantilla_integrada_plantilla_integrada_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Plantilla/plantilla-integrada/plantilla-integrada.component */ "./src/app/Plantilla/plantilla-integrada/plantilla-integrada.component.ts");
/* harmony import */ var _ingreso_polizas_ingreso_polizas_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ingreso-polizas/ingreso-polizas.component */ "./src/app/ingreso-polizas/ingreso-polizas.component.ts");
/* harmony import */ var _ingreso_estado_ingreso_estado_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ingreso-estado/ingreso-estado.component */ "./src/app/ingreso-estado/ingreso-estado.component.ts");
/* harmony import */ var _ingreso_cobertura_ingreso_cobertura_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ingreso-cobertura/ingreso-cobertura.component */ "./src/app/ingreso-cobertura/ingreso-cobertura.component.ts");
/* harmony import */ var _estados_estados_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./estados/estados.component */ "./src/app/estados/estados.component.ts");
/* harmony import */ var _cobertura_cobertura_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cobertura/cobertura.component */ "./src/app/cobertura/cobertura.component.ts");
/* harmony import */ var _controlpanel_controlpanel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./controlpanel/controlpanel.component */ "./src/app/controlpanel/controlpanel.component.ts");
/* harmony import */ var _polizas_polizas_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./polizas/polizas.component */ "./src/app/polizas/polizas.component.ts");
/* harmony import */ var _reportes_reportes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reportes/reportes.component */ "./src/app/reportes/reportes.component.ts");
/* harmony import */ var _modificar_modificar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modificar/modificar.component */ "./src/app/modificar/modificar.component.ts");
/* harmony import */ var _modificar_estado_modificar_estado_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modificar-estado/modificar-estado.component */ "./src/app/modificar-estado/modificar-estado.component.ts");
/* harmony import */ var _modificar_cobertura_modificar_cobertura_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modificar-cobertura/modificar-cobertura.component */ "./src/app/modificar-cobertura/modificar-cobertura.component.ts");

// Import Containers












var appRoutes = [
    {
        path: 'template',
        component: _Plantilla_plantilla_integrada_plantilla_integrada_component__WEBPACK_IMPORTED_MODULE_1__["PlantillaIntegradaComponent"],
        children: [
            {
                path: 'modificarEstado',
                component: _modificar_estado_modificar_estado_component__WEBPACK_IMPORTED_MODULE_11__["ModificarEstadoComponent"]
            },
            {
                path: 'modificarCobertura',
                component: _modificar_cobertura_modificar_cobertura_component__WEBPACK_IMPORTED_MODULE_12__["ModificarCoberturaComponent"]
            },
            {
                path: 'modificar',
                component: _modificar_modificar_component__WEBPACK_IMPORTED_MODULE_10__["ModificarComponent"]
            },
            {
                path: 'ingresoPol',
                component: _ingreso_polizas_ingreso_polizas_component__WEBPACK_IMPORTED_MODULE_2__["IngresoPolizasComponent"]
            },
            {
                path: 'polizas',
                component: _polizas_polizas_component__WEBPACK_IMPORTED_MODULE_8__["PolizasComponent"]
            },
            {
                path: 'estados',
                component: _estados_estados_component__WEBPACK_IMPORTED_MODULE_5__["EstadosComponent"]
            },
            {
                path: 'controlpanel',
                component: _controlpanel_controlpanel_component__WEBPACK_IMPORTED_MODULE_7__["ControlpanelComponent"]
            },
            {
                path: 'reportes',
                component: _reportes_reportes_component__WEBPACK_IMPORTED_MODULE_9__["ReportesComponent"]
            },
            {
                path: 'cobertura',
                component: _cobertura_cobertura_component__WEBPACK_IMPORTED_MODULE_6__["CoberturaComponent"]
            },
            {
                path: 'ingresoEstado',
                component: _ingreso_estado_ingreso_estado_component__WEBPACK_IMPORTED_MODULE_3__["IngresoEstadoComponent"]
            },
            {
                path: 'ingresoCobertura',
                component: _ingreso_cobertura_ingreso_cobertura_component__WEBPACK_IMPORTED_MODULE_4__["IngresoCoberturaComponent"]
            },
        ]
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/cobertura/cobertura.component.css":
/*!***************************************************!*\
  !*** ./src/app/cobertura/cobertura.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input:invalid,\r\ntextarea:invalid {\r\n    border-color: red;\r\n}"

/***/ }),

/***/ "./src/app/cobertura/cobertura.component.html":
/*!****************************************************!*\
  !*** ./src/app/cobertura/cobertura.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n\n<head>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\n</head>\n\n<body>\n\n    <div class=\"container\">\n        <h2>Tipo de Cobertura de las Pólizas</h2>\n\n        <div class=\"panel-group\" id=\"accordion\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                    <h4 class=\"panel-title\">\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse1\">Ingreso Nueva Cobertura</a>\n                    </h4>\n                </div>\n                <div id=\"collapse1\" class=\"panel-collapse collapse in\">\n                    <div class=\"panel-body\">\n                        <!-- MODAL DIALOG -->\n                        <div class=\"widget\">\n                            <div class=\"widget-content\" style=\"align-items: inherit\">\n                                <button class=\"btn btn-primary btn-lg\" style=\"margin-left: 40%\" data-toggle=\"modal\" data-target=\"#myModal\">Ingresar una nueva cobertura</button>\n\n                                <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n                                    <div class=\"modal-dialog\">\n                                        <div class=\"modal-content\">\n                                            <div class=\"modal-header\">\n                                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n                                                <h4 class=\"modal-title\" id=\"myModalLabel\"></h4>\n                                            </div>\n                                            <div class=\"modal-body\">\n                                                <!-- SUPPOR TICKET FORM -->\n                                                <div class=\"widget\">\n                                                    <div class=\"widget-header\">\n                                                        <h3><i class=\"fa fa-edit\"></i> Ingreso de Datos</h3>\n                                                    </div>\n                                                    <div class=\"widget-content\">\n                                                        <form class=\"form-horizontal\" role=\"form\">\n                                                            <fieldset>\n                                                                <legend>Nueva Cobertura</legend>\n                                                                <div class=\"form-group\">\n                                                                    <label for=\"ticket-type\" class=\"col-sm-3 control-label\">Descripción:</label>\n                                                                    <div class=\"col-sm-9\">\n                                                                        <input [(ngModel)]=\"descripcion\" [ngModelOptions]=\"{standalone: true}\" type=\"text\" class=\"form-control\" id=\"descripción\" placeholder=\"Descripción del Estado\" required>\n                                                                    </div>\n                                                                </div>\n                                                                <div class=\"col-sm-offset-3 col-sm-9\">\n                                                                    <button type=\"submit\" data-dismiss=\"modal\" (click)=\"ingresarCobertura(descripcion)\" class=\"btn btn-success\">Guardar Cobertura</button>&nbsp;&nbsp;\n                                                                    <input type=\"reset\" class=\"btn btn-info\" value=\"Limpiar Campos\">\n                                                                </div>\n                                                            </fieldset>\n                                                        </form>\n\n                                                    </div>\n                                                </div>\n                                                <!-- END SUPPORT TICKET FORM -->\n                                            </div>\n                                            <div class=\"modal-footer\">\n                                                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\"><i\n                                                  class=\"fa fa-times-circle\"></i> Cerrar</button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- END MODAL DIALOG -->\n                </div>\n            </div>\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                    <h4 class=\"panel-title\">\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse2\">Modificar y Eliminar un tipo de Cobertura</a>\n                    </h4>\n                </div>\n                <div id=\"collapse2\" class=\"panel-collapse collapse\">\n                    <!--Eliminar-->\n                    <div class=\"modal fade\" id=\"eliminar\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n                        <div class=\"modal-dialog\">\n                            <div class=\"modal-content\">\n                                <div class=\"modal-header\">\n                                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n                                    <h4 class=\"modal-title\" id=\"myModalLabel\"></h4>\n                                </div>\n                                <div class=\"modal-body\">\n\n                                    <div class=\"widget-header\">\n\n                                    </div>\n                                    <div class=\"widget-content\">\n\n                                        <fieldset>\n                                            <legend>¿Está seguro que desea eliminar el tipo de cobertura?</legend>\n                                            <div>\n                                                <button type=\"submit\" style=\"float: left; margin-left: 6em;\" data-dismiss=\"modal\" class=\"btn btn-success\">Eliminar Cobertura</button>\n                                                <button type=\"button\" style=\"float: right; margin-right: 6em;\" data-dismiss=\"modal\" class=\"btn btn-default\">Cancelar</button>\n                                            </div>\n                                        </fieldset>\n\n                                    </div>\n                                </div>\n\n\n                            </div>\n                        </div>\n                    </div>\n                    <!--fin eliminar-->\n                    <table id=\"dt\" class=\"display\" style=\"width:100%\">\n                        <thead>\n                            <tr>\n                                <th></th>\n                                <th>ID</th>\n                                <th>Descripción</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let objDatos of vecCobertura\">\n                                <td>\n                                    <div>\n                                        <a title=\"Modificar\" href=\"/template/modificarCobertura?idcobertura={{objDatos.idcobertura}}\"> <button data-toggle=\"modal\" data-target=\"#modificar\"><img src=\"assets\\images\\editar.PNG\" width=\"20\" height=\"20\"></button></a>\n                                        <button (click)=\"eliminarCobertura(objDatos.idcobertura)\"><img src=\"assets\\images\\eliminar.PNG \" width=\"20 \" height=\"20 \"></button>\n\n                                    </div>\n                                </td>\n                                <td>{{objDatos.idcobertura}}</td>\n                                <td>{{objDatos.descripcioncobertura}}</td>\n                            </tr>\n                        </tbody>\n                        <tfoot>\n                            <tr>\n                                <th></th>\n                                <th>ID</th>\n                                <th>Descripción</th>\n                            </tr>\n                        </tfoot>\n                    </table>\n                    <!-- FIN TABLA DE BUSQUEDA -->\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n</body>\n\n\n</html>"

/***/ }),

/***/ "./src/app/cobertura/cobertura.component.ts":
/*!**************************************************!*\
  !*** ./src/app/cobertura/cobertura.component.ts ***!
  \**************************************************/
/*! exports provided: CoberturaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoberturaComponent", function() { return CoberturaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ServiciosWeb_servicioswebconsumo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ServiciosWeb/servicioswebconsumo.service */ "./src/app/ServiciosWeb/servicioswebconsumo.service.ts");
/* harmony import */ var _Recursos_Mensajes_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Recursos/Mensajes.services */ "./src/app/Recursos/Mensajes.services.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

 //traer las direcciones de los servicios


//import {Navcontroler, NavParam} from "@angular";


var CoberturaComponent = /** @class */ (function () {
    function CoberturaComponent(servicios, mensaje) {
        this.servicios = servicios;
        this.mensaje = mensaje;
        this.bandera = false;
        this.parametroService = "";
        this.idcobertura = 0;
    }
    CoberturaComponent.prototype.ngOnInit = function () {
        var _this = this;
        $(function () {
            $('#dt').DataTable();
        });
        this.servicios.ServicioWebCobertura().subscribe(function (coberturas) { _this.vecCobertura = coberturas; });
    };
    CoberturaComponent.prototype.eliminarCobertura = function (objDatos) {
        return __awaiter(this, void 0, void 0, function () {
            var r, Auditoria;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        r = confirm("¿Está seguro que desea eliminar esta Cobertura?");
                        if (!(r == true)) return [3 /*break*/, 2];
                        return [4 /*yield*/, new Promise(function (resolve) {
                                return _this.servicios.ServicioWebEliminarCobertura(objDatos)
                                    .subscribe(function (translated) {
                                    resolve(translated);
                                });
                            })];
                    case 1:
                        Auditoria = _a.sent();
                        this.servicios.ServicioWebCobertura().subscribe(function (coberturas) { _this.vecCobertura = coberturas; });
                        $(function () {
                            $('#dt').DataTable();
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        window.alert('No se ha eliminado Nada');
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CoberturaComponent.prototype.ingresarCobertura = function (descripcion) {
        return __awaiter(this, void 0, void 0, function () {
            var Auditoria;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(descripcion == undefined)) return [3 /*break*/, 1];
                        window.alert('Error! Descripción Vacía');
                        return [3 /*break*/, 4];
                    case 1:
                        if (!((descripcion.length >= 20) || (descripcion.length < 4))) return [3 /*break*/, 2];
                        window.alert('Error! Descripción no Válida');
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, new Promise(function (resolve) {
                            return _this.servicios.ServicioWebIngresarCobertura(descripcion)
                                .subscribe(function (translated) {
                                resolve(translated);
                            });
                        })];
                    case 3:
                        Auditoria = _a.sent();
                        this.servicios.ServicioWebCobertura().subscribe(function (coberturas) { _this.vecCobertura = coberturas; });
                        $(function () {
                            $('#dt').DataTable();
                        });
                        window.alert('Cobertura Ingresada Correctamente');
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dataTable'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CoberturaComponent.prototype, "table", void 0);
    CoberturaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAlertModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot()
            ],
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cobertura',
            template: __webpack_require__(/*! ./cobertura.component.html */ "./src/app/cobertura/cobertura.component.html"),
            styles: [__webpack_require__(/*! ./cobertura.component.css */ "./src/app/cobertura/cobertura.component.css")],
        }),
        __metadata("design:paramtypes", [_ServiciosWeb_servicioswebconsumo_service__WEBPACK_IMPORTED_MODULE_1__["ServiciosWebConsumo"], _Recursos_Mensajes_services__WEBPACK_IMPORTED_MODULE_2__["Mensajes"]])
    ], CoberturaComponent);
    return CoberturaComponent;
}());



/***/ }),

/***/ "./src/app/controlpanel/controlpanel.component.css":
/*!*********************************************************!*\
  !*** ./src/app/controlpanel/controlpanel.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/controlpanel/controlpanel.component.html":
/*!**********************************************************!*\
  !*** ./src/app/controlpanel/controlpanel.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Large modal -->\r\n\r\n\r\n<div class=\"modal fade bd-example-modal-lg\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            ...\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/controlpanel/controlpanel.component.ts":
/*!********************************************************!*\
  !*** ./src/app/controlpanel/controlpanel.component.ts ***!
  \********************************************************/
/*! exports provided: ControlpanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlpanelComponent", function() { return ControlpanelComponent; });
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

var ControlpanelComponent = /** @class */ (function () {
    function ControlpanelComponent() {
    }
    ControlpanelComponent.prototype.ngOnInit = function () {
        this.dataTable = $(this.table.nativeElement);
        this.dataTable.dataTable();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dataTable'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ControlpanelComponent.prototype, "table", void 0);
    ControlpanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-controlpanel',
            template: __webpack_require__(/*! ./controlpanel.component.html */ "./src/app/controlpanel/controlpanel.component.html"),
            styles: [__webpack_require__(/*! ./controlpanel.component.css */ "./src/app/controlpanel/controlpanel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ControlpanelComponent);
    return ControlpanelComponent;
}());



/***/ }),

/***/ "./src/app/estados/estados.component.css":
/*!***********************************************!*\
  !*** ./src/app/estados/estados.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input:invalid, textarea:invalid {\r\n    border-color: red;\r\n  }"

/***/ }),

/***/ "./src/app/estados/estados.component.html":
/*!************************************************!*\
  !*** ./src/app/estados/estados.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n\n<head>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\n</head>\n\n<body>\n\n    <div class=\"container\">\n        <h2>Tipo de Estado de las Pólizas</h2>\n\n        <div class=\"panel-group\" id=\"accordion\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                    <h4 class=\"panel-title\">\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse1\">Ingreso Nuevo Tipo de Estado</a>\n                    </h4>\n                </div>\n                <div id=\"collapse1\" class=\"panel-collapse collapse in\">\n                    <div class=\"panel-body\">\n                        <!-- MODAL DIALOG -->\n                        <div class=\"widget\">\n                            <div class=\"widget-content\" style=\"align-items: inherit\">\n                                <button class=\"btn btn-primary btn-lg\" style=\"margin-left: 40%\" data-toggle=\"modal\" data-target=\"#myModal\">Ingresar un nuevo Estado</button>\n\n                                <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n                                    <div class=\"modal-dialog\">\n                                        <div class=\"modal-content\">\n                                            <div class=\"modal-header\">\n                                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n                                                <h4 class=\"modal-title\" id=\"myModalLabel\"></h4>\n                                            </div>\n                                            <div class=\"modal-body\">\n                                                <!-- SUPPOR TICKET FORM -->\n                                                <div class=\"widget\">\n                                                    <div class=\"widget-header\">\n                                                        <h3><i class=\"fa fa-edit\"></i> Ingreso de Datos</h3>\n                                                    </div>\n                                                    <div class=\"widget-content\">\n                                                        <form class=\"form-horizontal\" role=\"form\">\n                                                            <fieldset>\n                                                                <legend>Nuevo Estado de Pólizas</legend>\n                                                                <div class=\"form-group\">\n                                                                    <label for=\"ticket-type\" class=\"col-sm-3 control-label\">Descripción:</label>\n                                                                    <div class=\"col-sm-9\">\n                                                                        <input [(ngModel)]=\"descripcion\" [ngModelOptions]=\"{standalone: true}\" type=\"text\" class=\"form-control\" id=\"descripción\" placeholder=\"Descripción del Estado\" required>\n                                                                    </div>\n                                                                </div>\n                                                                <div class=\"col-sm-offset-3 col-sm-9\">\n                                                                    <button type=\"submit\" data-dismiss=\"modal\" (click)=\"ingresarEstado(descripcion)\" class=\"btn btn-success\">Guardar Estado</button>&nbsp;&nbsp;\n                                                                    <input type=\"reset\" class=\"btn btn-info\" value=\"Limpiar Campos\">\n                                                                </div>\n\n                                                            </fieldset>\n                                                        </form>\n                                                    </div>\n                                                </div>\n                                                <!-- END SUPPORT TICKET FORM -->\n                                            </div>\n                                            <div class=\"modal-footer\">\n                                                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\"><i\n                                                  class=\"fa fa-times-circle\"></i> Cerrar</button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- END MODAL DIALOG -->\n                </div>\n            </div>\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                    <h4 class=\"panel-title\">\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse2\">Modificar y Eliminar un Tipo de Estado</a>\n                    </h4>\n                </div>\n                <div id=\"collapse2\" class=\"panel-collapse collapse\">\n                    <!--Eliminar-->\n                    <div class=\"modal fade\" id=\"eliminar\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n                        <div class=\"modal-dialog\">\n                            <div class=\"modal-content\">\n                                <div class=\"modal-header\">\n                                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n                                    <h4 class=\"modal-title\" id=\"myModalLabel\"></h4>\n                                </div>\n                                <div class=\"modal-body\">\n\n                                    <div class=\"widget-header\">\n\n                                    </div>\n                                    <div class=\"widget-content\">\n                                        <form class=\"form-horizontal\" role=\"form\">\n                                            <fieldset>\n                                                <legend>¿Está seguro que desea eliminar el tipo de Estado?</legend>\n\n                                                <div>\n                                                    <button type=\"submit\" style=\"float: left; margin-left: 6em;\" data-dismiss=\"modal\" class=\"btn btn-success\">Eliminar Estado</button>\n                                                    <button type=\"button\" style=\"float: right; margin-right: 6em;\" data-dismiss=\"modal\" class=\"btn btn-default\">Cancelar</button>\n\n                                                </div>\n                                            </fieldset>\n                                        </form>\n                                    </div>\n                                </div>\n\n\n                            </div>\n                        </div>\n                    </div>\n                    <!--fin eliminar-->\n                    <table id=\"dt\" class=\"display\" style=\"width:100%\">\n                        <thead>\n                            <tr>\n                                <th></th>\n                                <th>ID</th>\n                                <th>Descripción</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let objDatos of vecEstados\">\n                                <td>\n                                    <div>\n                                        <a title=\"Modificar\" href=\"/template/modificarEstado?id={{objDatos.idestado}}\"> <button data-toggle=\"modal\" data-target=\"#modificar\"><img src=\"assets\\images\\editar.PNG\" width=\"20\" height=\"20\"></button></a>\n                                        <button (click)=\"eliminarEstado(objDatos.idestado)\"><img src=\"assets\\images\\eliminar.PNG \" width=\"20 \" height=\"20 \"></button>\n                                    </div>\n                                </td>\n                                <td>{{objDatos.idestado}}</td>\n                                <td>{{objDatos.descripcionestado}}</td>\n\n                            </tr>\n                        </tbody>\n                        <tfoot>\n                            <tr>\n                                <th></th>\n                                <th>ID</th>\n                                <th>Descripción</th>\n\n                            </tr>\n                        </tfoot>\n                    </table>\n                    <!-- FIN TABLA DE BUSQUEDA -->\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/estados/estados.component.ts":
/*!**********************************************!*\
  !*** ./src/app/estados/estados.component.ts ***!
  \**********************************************/
/*! exports provided: EstadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadosComponent", function() { return EstadosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ServiciosWeb_servicioswebconsumo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ServiciosWeb/servicioswebconsumo.service */ "./src/app/ServiciosWeb/servicioswebconsumo.service.ts");
/* harmony import */ var _Recursos_Mensajes_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Recursos/Mensajes.services */ "./src/app/Recursos/Mensajes.services.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

 //traer las direcciones de los servicios



var EstadosComponent = /** @class */ (function () {
    function EstadosComponent(servicios, mensaje) {
        this.servicios = servicios;
        this.mensaje = mensaje;
    }
    EstadosComponent.prototype.ngOnInit = function () {
        var _this = this;
        $(function () {
            $('#dt').DataTable();
        });
        this.servicios.ServicioWebEstado().subscribe(function (estados) { _this.vecEstados = estados; });
    };
    EstadosComponent.prototype.MensajeError = function () {
        var item = alert("No se han recibido datos");
    };
    EstadosComponent.prototype.MensajeCorrecto = function () {
        var item = alert("Datos Cargados Correctamente");
    };
    EstadosComponent.prototype.eliminarEstado = function (objDatos) {
        return __awaiter(this, void 0, void 0, function () {
            var r, Auditoria;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        r = confirm("¿Está seguro que desea eliminar este Estado?");
                        if (!(r == true)) return [3 /*break*/, 2];
                        return [4 /*yield*/, new Promise(function (resolve) {
                                return _this.servicios.ServicioWebEliminarEstado(objDatos)
                                    .subscribe(function (translated) {
                                    resolve(translated);
                                });
                            })];
                    case 1:
                        Auditoria = _a.sent();
                        this.servicios.ServicioWebEstado().subscribe(function (estados) { _this.vecEstados = estados; });
                        $(function () {
                            $('#dt').DataTable();
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        window.alert('No se ha eliminado Nada');
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EstadosComponent.prototype.ingresarEstado = function (descripcion) {
        return __awaiter(this, void 0, void 0, function () {
            var Auditoria;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(descripcion == undefined)) return [3 /*break*/, 1];
                        window.alert('Error! Descripción Vacía');
                        return [3 /*break*/, 4];
                    case 1:
                        if (!((descripcion.length >= 20) || (descripcion.length < 4))) return [3 /*break*/, 2];
                        window.alert('Error! Estado no Válido');
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, new Promise(function (resolve) {
                            return _this.servicios.ServicioWebIngresarEstado(descripcion)
                                .subscribe(function (translated) {
                                resolve(translated);
                            });
                        })];
                    case 3:
                        Auditoria = _a.sent();
                        this.servicios.ServicioWebEstado().subscribe(function (estados) { _this.vecEstados = estados; });
                        $(function () {
                            $('#dt').DataTable();
                        });
                        window.alert('Estado Ingresado Correctamente');
                        descripcion = '';
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    EstadosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]
            ],
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-estados',
            template: __webpack_require__(/*! ./estados.component.html */ "./src/app/estados/estados.component.html"),
            styles: [__webpack_require__(/*! ./estados.component.css */ "./src/app/estados/estados.component.css")]
        }),
        __metadata("design:paramtypes", [_ServiciosWeb_servicioswebconsumo_service__WEBPACK_IMPORTED_MODULE_1__["ServiciosWebConsumo"], _Recursos_Mensajes_services__WEBPACK_IMPORTED_MODULE_2__["Mensajes"]])
    ], EstadosComponent);
    return EstadosComponent;
}());



/***/ }),

/***/ "./src/app/ingreso-cobertura/ingreso-cobertura.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/ingreso-cobertura/ingreso-cobertura.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ingreso-cobertura/ingreso-cobertura.component.html":
/*!********************************************************************!*\
  !*** ./src/app/ingreso-cobertura/ingreso-cobertura.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  ingreso-cobertura works!\n</p>\n"

/***/ }),

/***/ "./src/app/ingreso-cobertura/ingreso-cobertura.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/ingreso-cobertura/ingreso-cobertura.component.ts ***!
  \******************************************************************/
/*! exports provided: IngresoCoberturaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngresoCoberturaComponent", function() { return IngresoCoberturaComponent; });
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

var IngresoCoberturaComponent = /** @class */ (function () {
    function IngresoCoberturaComponent() {
    }
    IngresoCoberturaComponent.prototype.ngOnInit = function () {
    };
    IngresoCoberturaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ingreso-cobertura',
            template: __webpack_require__(/*! ./ingreso-cobertura.component.html */ "./src/app/ingreso-cobertura/ingreso-cobertura.component.html"),
            styles: [__webpack_require__(/*! ./ingreso-cobertura.component.css */ "./src/app/ingreso-cobertura/ingreso-cobertura.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IngresoCoberturaComponent);
    return IngresoCoberturaComponent;
}());



/***/ }),

/***/ "./src/app/ingreso-estado/ingreso-estado.component.css":
/*!*************************************************************!*\
  !*** ./src/app/ingreso-estado/ingreso-estado.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ingreso-estado/ingreso-estado.component.html":
/*!**************************************************************!*\
  !*** ./src/app/ingreso-estado/ingreso-estado.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  ingreso-estado works!\n</p>\n"

/***/ }),

/***/ "./src/app/ingreso-estado/ingreso-estado.component.ts":
/*!************************************************************!*\
  !*** ./src/app/ingreso-estado/ingreso-estado.component.ts ***!
  \************************************************************/
/*! exports provided: IngresoEstadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngresoEstadoComponent", function() { return IngresoEstadoComponent; });
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

var IngresoEstadoComponent = /** @class */ (function () {
    function IngresoEstadoComponent() {
    }
    IngresoEstadoComponent.prototype.ngOnInit = function () {
    };
    IngresoEstadoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ingreso-estado',
            template: __webpack_require__(/*! ./ingreso-estado.component.html */ "./src/app/ingreso-estado/ingreso-estado.component.html"),
            styles: [__webpack_require__(/*! ./ingreso-estado.component.css */ "./src/app/ingreso-estado/ingreso-estado.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IngresoEstadoComponent);
    return IngresoEstadoComponent;
}());



/***/ }),

/***/ "./src/app/ingreso-polizas/ingreso-polizas.component.css":
/*!***************************************************************!*\
  !*** ./src/app/ingreso-polizas/ingreso-polizas.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ingreso-polizas/ingreso-polizas.component.html":
/*!****************************************************************!*\
  !*** ./src/app/ingreso-polizas/ingreso-polizas.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  ingreso-polizas works!\n</p>\n"

/***/ }),

/***/ "./src/app/ingreso-polizas/ingreso-polizas.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/ingreso-polizas/ingreso-polizas.component.ts ***!
  \**************************************************************/
/*! exports provided: IngresoPolizasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngresoPolizasComponent", function() { return IngresoPolizasComponent; });
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

var IngresoPolizasComponent = /** @class */ (function () {
    function IngresoPolizasComponent() {
    }
    IngresoPolizasComponent.prototype.ngOnInit = function () {
    };
    IngresoPolizasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ingreso-polizas',
            template: __webpack_require__(/*! ./ingreso-polizas.component.html */ "./src/app/ingreso-polizas/ingreso-polizas.component.html"),
            styles: [__webpack_require__(/*! ./ingreso-polizas.component.css */ "./src/app/ingreso-polizas/ingreso-polizas.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IngresoPolizasComponent);
    return IngresoPolizasComponent;
}());



/***/ }),

/***/ "./src/app/modificar-cobertura/modificar-cobertura.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/modificar-cobertura/modificar-cobertura.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modificar-cobertura/modificar-cobertura.component.html":
/*!************************************************************************!*\
  !*** ./src/app/modificar-cobertura/modificar-cobertura.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- SUPPOR TICKET FORM -->\n<div class=\"widget\">\n    <div class=\"widget-header\">\n        <h3><i class=\"fa fa-edit\"></i> Modificación de Datos de Cobertura</h3>\n    </div>\n    <div class=\"widget-content\">\n        <form class=\"form-horizontal\" role=\"form\">\n            <fieldset>\n                <legend>Información General</legend>\n                <div class=\"form-group\">\n                    <label for=\"ticket-type\" class=\"col-sm-3 control-label\">Descripción de la Cobertura:</label>\n                    <div class=\"col-sm-9\">\n                        <input type=\"text\" value=\"Ejemplo de Estado a Modificar\" class=\"form-control\" id=\"descripcionestado\" placeholder=\"Ingrese la Descripción\" required>\n                    </div>\n                </div>\n\n                <div class=\"col-sm-offset-3 col-sm-9\">\n                    <button type=\"submit\" data-dismiss=\"modal\" class=\"btn btn-success\">Guardar Cobertura</button>&nbsp;&nbsp;\n                    <input type=\"reset\" class=\"btn btn-info\" value=\"Cargar Datos\">\n                </div>\n\n            </fieldset>\n        </form>\n    </div>\n</div>\n<!-- END SUPPORT TICKET FORM -->"

/***/ }),

/***/ "./src/app/modificar-cobertura/modificar-cobertura.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modificar-cobertura/modificar-cobertura.component.ts ***!
  \**********************************************************************/
/*! exports provided: ModificarCoberturaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificarCoberturaComponent", function() { return ModificarCoberturaComponent; });
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

var ModificarCoberturaComponent = /** @class */ (function () {
    function ModificarCoberturaComponent() {
    }
    ModificarCoberturaComponent.prototype.ngOnInit = function () {
    };
    ModificarCoberturaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modificar-cobertura',
            template: __webpack_require__(/*! ./modificar-cobertura.component.html */ "./src/app/modificar-cobertura/modificar-cobertura.component.html"),
            styles: [__webpack_require__(/*! ./modificar-cobertura.component.css */ "./src/app/modificar-cobertura/modificar-cobertura.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ModificarCoberturaComponent);
    return ModificarCoberturaComponent;
}());



/***/ }),

/***/ "./src/app/modificar-estado/modificar-estado.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/modificar-estado/modificar-estado.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modificar-estado/modificar-estado.component.html":
/*!******************************************************************!*\
  !*** ./src/app/modificar-estado/modificar-estado.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- SUPPOR TICKET FORM -->\n<div class=\"widget\">\n    <div class=\"widget-header\">\n        <h3><i class=\"fa fa-edit\"></i> Modificación de Datos de Estado </h3>\n    </div>\n    <div class=\"widget-content\">\n        <form (ngSubmit)=\"ingresarEstado()\" class=\"form-horizontal\" role=\"form\">\n            <fieldset>\n                <legend>Información General</legend>\n                <div class=\"form-group\">\n                    <label for=\"ticket-type\" class=\"col-sm-3 control-label\">Descripción de Estado:</label>\n                    <div class=\"col-sm-9\">\n                        <input type=\"text\" value=\"Ejemplo de Estado a Modificar\" class=\"form-control\" id=\"descripcionestado\" placeholder=\"Ingrese la Descripción\" required>\n                    </div>\n                </div>\n\n                <div class=\"col-sm-offset-3 col-sm-9\">\n                    <button type=\"submit\" data-dismiss=\"modal\" class=\"btn btn-success\">Guardar Estado</button>&nbsp;&nbsp;\n                    <input type=\"reset\" class=\"btn btn-info\" value=\"Cargar Datos\">\n                </div>\n\n            </fieldset>\n        </form>\n    </div>\n</div>\n<!-- END SUPPORT TICKET FORM -->"

/***/ }),

/***/ "./src/app/modificar-estado/modificar-estado.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modificar-estado/modificar-estado.component.ts ***!
  \****************************************************************/
/*! exports provided: ModificarEstadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificarEstadoComponent", function() { return ModificarEstadoComponent; });
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

var ModificarEstadoComponent = /** @class */ (function () {
    function ModificarEstadoComponent() {
    }
    ModificarEstadoComponent.prototype.ngOnInit = function () {
    };
    ModificarEstadoComponent.prototype.MensajeError = function () {
        var item = alert("No se han recibido datos");
    };
    ModificarEstadoComponent.prototype.MensajeCorrecto = function () {
        var item = alert("Datos Cargados Correctamente");
    };
    ModificarEstadoComponent.prototype.ingresarEstado = function () {
        window.alert('Error en el ingreso!!');
        window.close();
    };
    ModificarEstadoComponent.prototype.buscarEstado = function () {
        window.alert('Datos encontrados!!');
        window.close();
    };
    ModificarEstadoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modificar-estado',
            template: __webpack_require__(/*! ./modificar-estado.component.html */ "./src/app/modificar-estado/modificar-estado.component.html"),
            styles: [__webpack_require__(/*! ./modificar-estado.component.css */ "./src/app/modificar-estado/modificar-estado.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ModificarEstadoComponent);
    return ModificarEstadoComponent;
}());



/***/ }),

/***/ "./src/app/modificar/modificar.component.css":
/*!***************************************************!*\
  !*** ./src/app/modificar/modificar.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modificar/modificar.component.html":
/*!****************************************************!*\
  !*** ./src/app/modificar/modificar.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n            <!-- SUPPOR TICKET FORM -->\n            <div class=\"widget\">\n              <div class=\"widget-header\">\n                <h3><i class=\"fa fa-edit\"></i> Modificación de Datos</h3>\n              </div>\n              <div class=\"widget-content\">\n                <form (ngSubmit)=\"ingresarPoliza()\" class=\"form-horizontal\" role=\"form\">\n                  <fieldset>\n                    <legend>Información General</legend>\n                    <div class=\"form-group\">\n                      <label for=\"ticket-type\" class=\"col-sm-3 control-label\">Aseguradora:</label>\n                      <div class=\"col-sm-9\">\n                        <select id=\"idaseguradora\" [(ngModel)]=\"idaseguradora\" name=\"idaseguradora\" class=\"form-control input-sm\"\n                          type=\"text\" placeholder=\".input-sm\">\n                          <option value=\"1\">Seguros Colonial (Quito)</option>\n                          <option value=\"2\">Seguros Colnial QBE</option>\n                          <option value=\"3\">Seguros Oriente</option>\n                          <option value=\"4\">Aseguradora del Sur</option>\n                          <option value=\"5\">Seguros Equinoccial</option>\n                          <option value=\"6\">Latina de Seguros y Reaseguros</option>\n                          <option value=\"7\">Banco del Pichincha</option>\n                          <option value=\"8\">Seguros Confianza</option>\n                          <option value=\"9\">Banco Internacional</option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"ticket-type\" class=\"col-sm-3 control-label\">Cobertura:</label>\n                      <div class=\"col-sm-9\">\n                        <select id=\"idcobertura\" [(ngModel)]=\"idcobertura\" name=\"idcobertura\" class=\"form-control input-sm\" type=\"text\"\n                          placeholder=\".input-sm\">\n                          <option value=\"1\">Buen uso de Anticipo</option>\n                          <option value=\"2\">Cumplimiento de Contrato</option>\n                          <option value=\"3\">Garantía Bancaria</option>\n                          <option value=\"4\">Certificación de depósito a plazo fijo</option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"ticket-type\" class=\"col-sm-3 control-label\">Contrato:</label>\n                      <div class=\"col-sm-9\">\n                        <input [(ngModel)]=\"idcontrato\" [ngModelOptions]=\"{standalone: false}\" type=\"text\" value=\"2\" class=\"form-control\" id=\"idcontra\"  required>\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"ticket-type\" class=\"col-sm-3 control-label\">Número de Póliza:</label>\n                      <div class=\"col-sm-9\">\n                        <input type=\"text\" [(ngModel)]=\"numpoliza\" value=\"43/2018\" [ngModelOptions]=\"{standalone: false}\" class=\"form-control\" id=\"numpol\" placeholder=\"Número de Póliza\" required>\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"ticket-type\" class=\"col-sm-3 control-label\">Estado:</label>\n\n                      <div class=\"col-sm-9\">\n                        <select id=\"idestado\" [(ngModel)]=\"idestado\" name=\"idestado\" class=\"form-control input-sm\" type=\"text\"\n                          placeholder=\".input-sm\">\n                          <option value=\"1\">Vigente</option>\n                          <option value=\"2\">Caducada</option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"ticket-message\" class=\"col-sm-3 control-label\">Fecha inicial de\n                        Cobertura:</label>\n                      <div class=\"col-sm-9\">\n                        <div class=\"input-group\">\n                          <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\n                          <input type=\"date\" [(ngModel)]=\"finicob\" value=\"2019-05-29\" [ngModelOptions]=\"{standalone: false}\"  id=\"finicob\" class=\"form-control\" required> \n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"ticket-message\" class=\"col-sm-3 control-label\">Fecha pago de\n                        Anticipo:</label>\n                      <div class=\"col-sm-9\">\n                        <div class=\"input-group\">\n                          <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\n                          <input type=\"date\" [(ngModel)]=\"fpagoant\" value=\"2019-05-17\" [ngModelOptions]=\"{standalone: false}\" id=\"fpagoant\" class=\"form-control\">\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"ticket-message\" class=\"col-sm-3 control-label\">Vencimiento fecha\n                        Inicial:</label>\n                      <div class=\"col-sm-9\">\n                        <div class=\"input-group\">\n                          <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\n                          <input type=\"date\" [(ngModel)]=\"vencini\" value=\"2019-06-12\" [ngModelOptions]=\"{standalone: false}\" id=\"fvencini\" class=\"form-control\" required>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"ticket-message\" class=\"col-sm-3 control-label\">Vencimiento fecha\n                        Final:</label>\n                      <div class=\"col-sm-9\">\n                        <div class=\"input-group\">\n                          <span class=\"input-group-addon\"><i  class=\"fa fa-calendar\"></i></span>\n                          <input type=\"date\" [(ngModel)]=\"vencfin\" value=\"2019-06-12\" [ngModelOptions]=\"{standalone: false}\" id=\"fvencfin\" class=\"form-control\" required>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"ticket-message\" class=\"col-sm-3 control-label\">Observaciones</label>\n                      <div class=\"col-sm-9\">\n                        <textarea class=\"form-control\" [(ngModel)]=\"observaciones\" value=\"todo bien\" [ngModelOptions]=\"{standalone: false}\" name=\"observaciones\" id=\"observaciones\" rows=\"4\"\n                          cols=\"30\" placeholder=\"Message\">Todo bien</textarea>\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"ticket-type\" class=\"col-sm-3 control-label\">Número de Renovación:</label>\n                      <div class=\"col-sm-9\">\n                        <input type=\"number\" [(ngModel)]=\"numrenov\" value=\"4\" [ngModelOptions]=\"{standalone: false}\" class=\"form-control\" id=\"numrenov\"\n                          placeholder=\"N° Renovación\" min=\"1\" max=\"500\">\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"ticket-type\" class=\"col-sm-3 control-label\">Valor Inicial:</label>\n                      <div class=\"col-sm-9\">\n                        <input type=\"text\" [(ngModel)]=\"valini\" value=\"$150.00\" [ngModelOptions]=\"{standalone: false}\" class=\"form-control\" id=\"valini\" placeholder=\"$\" required>\n                      </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"ticket-type\" class=\"col-sm-3 control-label\">Valor Final:</label>\n                        <div class=\"col-sm-9\">\n                          <input type=\"text\" [(ngModel)]=\"valfin\" value=\"$100.00\" [ngModelOptions]=\"{standalone: false}\" class=\"form-control\" id=\"valfin\" placeholder=\"$\" required>\n                        </div>\n                      </div>\n                  </fieldset>\n                  <fieldset>\n                    <legend>Agregar PFD</legend>\n                      <div class=\"form-group\">\n                      <label for=\"ticket-attachment\" class=\"col-sm-3 control-label\">Adjuntar Archivo</label>\n                      <div class=\"col-md-9\">\n                        <input type=\"file\" [(ngModel)]=\"polpdf\" [ngModelOptions]=\"{standalone: true}\" accept=\".pdf\" id=\"polizaPDF\">\n                        <p class=\"help-block\"><em>Tipo de Archivo válido: .pdf</em></p>\n                      </div>\n                    </div>\n                    \n                      <div class=\"col-sm-offset-3 col-sm-9\">\n                        <button type=\"submit\"  data-dismiss=\"modal\"  class=\"btn btn-success\">Guardar Póliza</button>&nbsp;&nbsp;\n                        <input type=\"reset\" class=\"btn btn-info\" value=\"Cargar Datos\">\n                      </div>\n                    \n                  </fieldset>\n                </form>\n              </div>\n            </div>\n            <!-- END SUPPORT TICKET FORM -->\n\n "

/***/ }),

/***/ "./src/app/modificar/modificar.component.ts":
/*!**************************************************!*\
  !*** ./src/app/modificar/modificar.component.ts ***!
  \**************************************************/
/*! exports provided: ModificarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificarComponent", function() { return ModificarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ServiciosWeb_servicioswebconsumo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ServiciosWeb/servicioswebconsumo.service */ "./src/app/ServiciosWeb/servicioswebconsumo.service.ts");
/* harmony import */ var _Recursos_Mensajes_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Recursos/Mensajes.services */ "./src/app/Recursos/Mensajes.services.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //traer las direcciones de los servicios



var ModificarComponent = /** @class */ (function () {
    function ModificarComponent(servicios, mensaje) {
        this.servicios = servicios;
        this.mensaje = mensaje;
    }
    ModificarComponent.prototype.ngOnInit = function () {
    };
    ModificarComponent.prototype.MensajeError = function () {
        var item = alert("No se han recibido datos");
    };
    ModificarComponent.prototype.MensajeCorrecto = function () {
        var item = alert("Datos Cargados Correctamente");
    };
    ModificarComponent.prototype.ConsumoPoliza = function () {
        try {
            if (this.vecPoliza == null)
                this.MensajeError();
            else
                this.MensajeCorrecto();
        }
        catch (error) {
            this.MensajeError();
            console.error(error);
        }
    };
    ModificarComponent.prototype.ingresarPoliza = function () {
        window.alert('Error en la Actualización!!');
        window.close();
    };
    ModificarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]
            ],
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modificar',
            template: __webpack_require__(/*! ./modificar.component.html */ "./src/app/modificar/modificar.component.html"),
            styles: [__webpack_require__(/*! ./modificar.component.css */ "./src/app/modificar/modificar.component.css")]
        }),
        __metadata("design:paramtypes", [_ServiciosWeb_servicioswebconsumo_service__WEBPACK_IMPORTED_MODULE_1__["ServiciosWebConsumo"], _Recursos_Mensajes_services__WEBPACK_IMPORTED_MODULE_2__["Mensajes"]])
    ], ModificarComponent);
    return ModificarComponent;
}());



/***/ }),

/***/ "./src/app/polizas/polizas.component.css":
/*!***********************************************!*\
  !*** ./src/app/polizas/polizas.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input:invalid, textarea:invalid {\r\n    border-color: red;\r\n  }"

/***/ }),

/***/ "./src/app/polizas/polizas.component.html":
/*!************************************************!*\
  !*** ./src/app/polizas/polizas.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n\n<head>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n</head>\n\n<body>\n    <div class=\"container\">\n        <h2>Pólizas de Seguro</h2>\n        <div class=\"panel-group\" id=\"accordion\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                    <h4 class=\"panel-title\">\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse1\">Ingreso de una Nueva</a>\n                    </h4>\n                </div>\n                <div id=\"collapse1\" class=\"panel-collapse collapse in\">\n\n                    <!-- MODAL DIALOG -->\n                    <div class=\"widget\">\n                        <div class=\"widget-content\" style=\"align-items: inherit\">\n\n\n                            <button class=\"btn btn-primary btn-lg\" style=\"margin-left: 45%\" data-toggle=\"modal\" data-target=\"#myModal\">Ingresar una nueva Póliza</button>\n\n                            <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n                                <div class=\"modal-dialog modal-lg\" style=\" width: 5050%;\">\n                                    <div class=\"modal-content\">\n                                        <div class=\"modal-header\">\n                                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n                                            <h4 class=\"modal-title\" id=\"myModalLabel\"></h4>\n                                        </div>\n                                        <div class=\"modal-body\">\n                                            <!-- INICIO CUERPO MODAL -->\n                                            <!-- SUPPOR TICKET FORM -->\n                                            <div class=\"widget\">\n                                                <div class=\"widget-header\">\n                                                    <h3><i class=\"fa fa-edit\"></i> Ingreso de Datos</h3>\n                                                </div>\n                                                <div class=\"widget-content\">\n                                                    <form class=\"form-horizontal\" role=\"form\">\n                                                        <fieldset>\n                                                            <legend>Información General</legend>\n                                                            <div class=\"form-group\">\n                                                                <label for=\"ticket-type\" class=\"col-sm-3 control-label\">Aseguradora:</label>\n                                                                <div class=\"col-sm-9\">\n                                                                    <select id=\"idaseguradora\" [(ngModel)]=\"idaseguradora\" name=\"idaseguradora\" class=\"form-control input-sm\" type=\"text\" placeholder=\".input-sm\" required>\n<option value=\"1\" selected>Seguros Colonial (Quito)</option>\n<option value=\"2\">Seguros Colonial QBE</option>\n<option value=\"3\">Seguros Oriente</option>\n<option value=\"4\">Aseguradora del Sur</option>\n<option value=\"5\">Seguros Equinoccial</option>\n<option value=\"6\">Latina de Seguros y Reaseguros</option>\n<option value=\"7\">Banco del Pichincha</option>\n<option value=\"8\">Seguros Confianza</option>\n<option value=\"9\">Banco Internacional</option>\n</select>\n                                                                </div>\n                                                            </div>\n                                                            <div class=\"form-group\">\n                                                                <label for=\"ticket-type\" class=\"col-sm-3 control-label\">Cobertura:</label>\n                                                                <div class=\"col-sm-9\">\n                                                                    <select id=\"idcobertura\" [(ngModel)]=\"idcobertura\" name=\"idcobertura\" class=\"form-control input-sm\" type=\"text\" placeholder=\".input-sm\">\n<option value=\"1\" selected>Buen uso de Anticipo</option>\n<option value=\"2\">Cumplimiento de Contrato</option>\n<option value=\"3\">Garantía Bancaria</option>\n<option value=\"4\">Certificación de depósito a plazo fijo</option>\n</select>\n                                                                </div>\n                                                            </div>\n                                                            <div class=\"form-group\">\n                                                                <label for=\"ticket-type\" class=\"col-sm-3 control-label\">Contrato:</label>\n                                                                <div class=\"col-sm-9\">\n                                                                    <select id=\"idcontrato\" [(ngModel)]=\"idcontrato\" name=\"idcontrato\" class=\"form-control input-sm\" type=\"text\" placeholder=\".input-sm\">\n                                                                                <option value=\"1\" selected>Suministro e Instalación</option>\n                                                                                <option value=\"2\">Acta de Entrega Definitiva</option>\n                                                                                <option value=\"3\">Construcción de Modulares</option>\n                                                                                \n                                                                        </select>\n                                                                </div>\n                                                            </div>\n                                                            <div class=\"form-group\">\n                                                                <label for=\"ticket-type\" class=\"col-sm-3 control-label\">Número de Póliza:</label>\n                                                                <div class=\"col-sm-9\">\n                                                                    <input type=\"number\" [(ngModel)]=\"numpoliza\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"numpol\" placeholder=\"Número de Póliza\" min=\"1\" max=\"50000\" required>\n                                                                </div>\n                                                            </div>\n                                                            <div class=\"form-group\">\n                                                                <label for=\"ticket-type\" class=\"col-sm-3 control-label\">Estado:</label>\n\n                                                                <div class=\"col-sm-9\">\n                                                                    <select id=\"idestado\" [(ngModel)]=\"idestado\" name=\"idestado\" class=\"form-control input-sm\" type=\"text\" placeholder=\".input-sm\">\n<option selected value=\"1\">Vigente</option>\n<option value=\"2\">Caducada</option>\n</select>\n                                                                </div>\n                                                            </div>\n                                                            <div class=\"form-group\">\n                                                                <label for=\"ticket-message\" class=\"col-sm-3 control-label\">Fecha inicial de\nCobertura:</label>\n                                                                <div class=\"col-sm-9\">\n                                                                    <div class=\"input-group\">\n                                                                        <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\n                                                                        <input type=\"date\" [(ngModel)]=\"finicob\" [ngModelOptions]=\"{standalone: true}\" id=\"finicob\" class=\"form-control\" required>\n                                                                    </div>\n                                                                </div>\n                                                            </div>\n                                                            <div class=\"form-group\">\n                                                                <label for=\"ticket-message\" class=\"col-sm-3 control-label\">Fecha pago de\nAnticipo:</label>\n                                                                <div class=\"col-sm-9\">\n                                                                    <div class=\"input-group\">\n                                                                        <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\n                                                                        <input type=\"date\" [(ngModel)]=\"fpagoant\" [ngModelOptions]=\"{standalone: true}\" id=\"fpagoant\" class=\"form-control\" required>\n                                                                    </div>\n                                                                </div>\n                                                            </div>\n                                                            <div class=\"form-group\">\n                                                                <label for=\"ticket-message\" class=\"col-sm-3 control-label\">Vencimiento fecha\nInicial:</label>\n                                                                <div class=\"col-sm-9\">\n                                                                    <div class=\"input-group\">\n                                                                        <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\n                                                                        <input type=\"date\" [(ngModel)]=\"vencini\" [ngModelOptions]=\"{standalone: true}\" id=\"fvencini\" class=\"form-control\" required>\n                                                                    </div>\n                                                                </div>\n                                                            </div>\n                                                            <div class=\"form-group\">\n                                                                <label for=\"ticket-message\" class=\"col-sm-3 control-label\">Vencimiento fecha\nFinal:</label>\n                                                                <div class=\"col-sm-9\">\n                                                                    <div class=\"input-group\">\n                                                                        <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\n                                                                        <input type=\"date\" [(ngModel)]=\"vencfin\" [ngModelOptions]=\"{standalone: true}\" id=\"fvencfin\" class=\"form-control\" required>\n                                                                    </div>\n                                                                </div>\n                                                            </div>\n                                                            <div class=\"form-group\">\n                                                                <label for=\"ticket-message\" class=\"col-sm-3 control-label\">Observaciones</label>\n                                                                <div class=\"col-sm-9\">\n                                                                    <textarea class=\"form-control\" [(ngModel)]=\"observaciones\" [ngModelOptions]=\"{standalone: true}\" name=\"observaciones\" id=\"observaciones\" rows=\"4\" cols=\"30\" placeholder=\"Message\"></textarea>\n                                                                </div>\n                                                            </div>\n                                                            <div class=\"form-group\">\n                                                                <label for=\"ticket-type\" class=\"col-sm-3 control-label\">Número de Renovación:</label>\n                                                                <div class=\"col-sm-9\">\n                                                                    <input type=\"number\" [(ngModel)]=\"numrenov\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"numrenov\" placeholder=\"N° Renovación\" min=\"1\" max=\"500\">\n                                                                </div>\n                                                            </div>\n                                                            <div class=\"form-group\">\n                                                                <label for=\"ticket-type\" class=\"col-sm-3 control-label\">Valor Inicial:</label>\n                                                                <div class=\"col-sm-9\">\n                                                                    <input type=\"text\" [(ngModel)]=\"valini\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"valini\" placeholder=\"$\" required>\n                                                                </div>\n                                                            </div>\n                                                            <div class=\"form-group\">\n                                                                <label for=\"ticket-type\" class=\"col-sm-3 control-label\">Valor Final:</label>\n                                                                <div class=\"col-sm-9\">\n                                                                    <input type=\"text\" [(ngModel)]=\"valfin\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" id=\"valfin\" placeholder=\"$\" required>\n                                                                </div>\n                                                            </div>\n                                                        </fieldset>\n                                                        <fieldset>\n                                                            <legend>Agregar PFD</legend>\n                                                            <div class=\"form-group\">\n                                                                <label for=\"ticket-attachment\" class=\"col-sm-3 control-label\">Adjuntar Archivo</label>\n                                                                <div class=\"col-md-9\">\n                                                                    <input type=\"file\" [(ngModel)]=\"polpdf\" [ngModelOptions]=\"{standalone: true}\" accept=\".pdf\" id=\"polizaPDF\">\n                                                                    <p class=\"help-block\"><em>Tipo de Archivo válido: .pdf.\nMB</em></p>\n                                                                </div>\n                                                            </div>\n\n                                                            <div class=\"col-sm-offset-3 col-sm-9\">\n                                                                <button type=\"submit\" data-dismiss=\"modal\" (click)=\"ingresarPoliza(idaseguradora,idcobertura,idcontrato,idestado,numpoliza,fpagoant,finicob,vencini,vencfin,observaciones,numrenov,valini,valfin)\" class=\"btn btn-success\">Guardar Póliza</button>&nbsp;&nbsp;\n                                                                <input type=\"reset\" class=\"btn btn-info\" value=\"Limpiar Campos\">\n                                                            </div>\n\n                                                        </fieldset>\n                                                    </form>\n                                                </div>\n                                            </div>\n                                            <!-- END SUPPORT TICKET FORM -->\n                                            <!-- FIN CUERPO MODAL -->\n                                        </div>\n                                        <div class=\"modal-footer\">\n                                            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\"><i\n                          class=\"fa fa-times-circle\"></i> Cerrar</button>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- END MODAL DIALOG -->\n                </div>\n            </div>\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                    <h4 class=\"panel-title\">\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse2\">Modificar una Póliza</a>\n                    </h4>\n                </div>\n                <div id=\"collapse2\" class=\"panel-collapse collapse\">\n                    <div class=\"panel-body\">\n                        <!-- INICIO TABLA DE BUSQUEDA -->\n                        <table id=\"dt1\" class=\"display\" style=\"width:100%\">\n                            <thead>\n                                <tr>\n                                    <th></th>\n                                    <th>Aseguradora</th>\n                                    <th>CI/RUC Contratista</th>\n                                    <th>Contratista</th>\n                                    <th>N° Contrato</th>\n                                    <th>Cobertura</th>\n                                    <th>Concepto</th>\n                                    <th>Administrador de Contrato</th>\n                                    <th>N° Póliza</th>\n                                    <th>Fecha Pago Anticipo</th>\n                                    <th>Fecha de Cobertura</th>\n                                    <th>Fecha Inicial</th>\n                                    <th>Fecha Final</th>\n\n                                    <th>Valor de Cobertura Actual</th>\n                                    <th>Observaciones</th>\n                                    <th>N° Renov.</th>\n\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let objDatos of vecPoliza\">\n                                    <td>\n                                        <div style=\"margin-left:8px;\">\n                                            <a title=\"Modificar\" href=\"/template/modificar?id={{objDatos.idpolizatabla}}\"><img src=\"assets\\images\\editar.PNG\" width=\"20\" height=\"20\"></a>\n                                        </div>\n                                    </td>\n                                    <td>{{objDatos.idaseguradora.nombreaseguradora}}</td>\n                                    <td>{{objDatos.idcontrato.idcontratista.ciruc}}</td>\n                                    <td>{{objDatos.idcontrato.idcontratista.nombrecontratista}}</td>\n                                    <td>{{objDatos.idcontrato.codcontrato}}</td>\n                                    <td>{{objDatos.idcobertura.descripcioncobertura}}</td>\n                                    <td>{{objDatos.idcontrato.concepto}}</td>\n                                    <td>{{objDatos.idcontrato.idadministrador.nombreadmin}}</td>\n                                    <td>{{objDatos.numpoliza}}</td>\n                                    <td>{{objDatos.fechapagoanticipo | date : format : timezone}}</td>\n                                    <td>{{objDatos.fechainicialcobertura | date : format : timezone}}</td>\n                                    <td>{{objDatos.vencimientofechainicial | date : format : timezone}}</td>\n                                    <td>{{objDatos.vencimientofechafinal | date : format : timezone}}</td>\n                                    <td>{{objDatos.valorcoberturaactual}}</td>\n                                    <td>{{objDatos.observaciones}}</td>\n                                    <td>{{objDatos.numrenovaciones}}</td>\n\n                                </tr>\n                            </tbody>\n                            <tfoot>\n                                <tr>\n                                    <th></th>\n                                    <th>Aseguradora</th>\n                                    <th>CI/RUC Contratista</th>\n                                    <th>Contratista</th>\n                                    <th>N° Contrato</th>\n                                    <th>Cobertura</th>\n                                    <th>Concepto</th>\n                                    <th>Administrador de Contrato</th>\n                                    <th>N° Póliza</th>\n                                    <th>Fecha Pago Anticipo</th>\n                                    <th>Fecha de Cobertura</th>\n                                    <th>Fecha Inicial</th>\n                                    <th>Fecha Final</th>\n                                    <th>Valor de Cobertura Actual</th>\n                                    <th>Observaciones</th>\n                                    <th>N° Renov.</th>\n\n                                </tr>\n                            </tfoot>\n                        </table>\n                        <!-- FIN TABLA DE BUSQUEDA -->\n\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/polizas/polizas.component.ts":
/*!**********************************************!*\
  !*** ./src/app/polizas/polizas.component.ts ***!
  \**********************************************/
/*! exports provided: PolizasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolizasComponent", function() { return PolizasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ServiciosWeb_servicioswebconsumo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ServiciosWeb/servicioswebconsumo.service */ "./src/app/ServiciosWeb/servicioswebconsumo.service.ts");
/* harmony import */ var _Recursos_Mensajes_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Recursos/Mensajes.services */ "./src/app/Recursos/Mensajes.services.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

 //traer las direcciones de los servicios



var PolizasComponent = /** @class */ (function () {
    function PolizasComponent(servicios, mensaje) {
        this.servicios = servicios;
        this.mensaje = mensaje;
    }
    PolizasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.servicios.ServicioWebPruebaED().subscribe(function (polizas) { _this.vecPoliza = polizas; });
        $(function () {
            $('#dt1').DataTable();
        });
    };
    PolizasComponent.prototype.MensajeError = function () {
        var item = alert("No se han recibido datos");
    };
    PolizasComponent.prototype.MensajeCorrecto = function () {
        var item = alert("Datos Cargados Correctamente");
    };
    PolizasComponent.prototype.ConsumoPoliza = function () {
        var _this = this;
        try {
            this.servicios.ServicioWebPruebaED().subscribe(function (polizas) {
                _this.vecPoliza = polizas;
            });
            if (this.vecPoliza == null)
                this.MensajeError();
            else
                this.MensajeCorrecto();
        }
        catch (error) {
            this.MensajeError();
            console.error(error);
        }
    };
    PolizasComponent.prototype.ingresarPoliza = function (idaseguradora, idcobertura, idcontrato, idestado, numpoliza, fpagoant, finicob, vencini, vencfin, observaciones, numrenov, valini, valfin) {
        return __awaiter(this, void 0, void 0, function () {
            var Auditoria;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!((idaseguradora == undefined) || (idcobertura == undefined) || (idcontrato == undefined) || (idestado == undefined) || (numpoliza == undefined) || (fpagoant == undefined) || (finicob == undefined) || (vencini == undefined) || (vencfin == undefined) || (valini == undefined) || (valfin == undefined))) return [3 /*break*/, 1];
                        window.alert('Error! Campos vacíos');
                        return [3 /*break*/, 4];
                    case 1:
                        if (!((valini.length >= 10) || (valini.length < 3) || (valfin.length >= 10) || (valfin.length < 3))) return [3 /*break*/, 2];
                        window.alert('Error! Campos no válidos');
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, new Promise(function (resolve) {
                            return _this.servicios.ServicioWebIngresarPoliza(idaseguradora, idcobertura, idcontrato, idestado, numpoliza, fpagoant, finicob, vencini, vencfin, observaciones, numrenov, valini, valfin)
                                .subscribe(function (translated) {
                                resolve(translated);
                            });
                        })];
                    case 3:
                        Auditoria = _a.sent();
                        this.servicios.ServicioWebPruebaED().subscribe(function (polizas) { _this.vecPoliza = polizas; });
                        $(function () {
                            $('#dt1').DataTable();
                        });
                        window.alert('Estado Ingresado Correctamente la Poliza');
                        window.close();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    PolizasComponent.prototype.buscarPoliza = function () {
        window.alert('Datos encontrados!!');
        window.close();
    };
    PolizasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]
            ],
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-polizas',
            template: __webpack_require__(/*! ./polizas.component.html */ "./src/app/polizas/polizas.component.html"),
            styles: [__webpack_require__(/*! ./polizas.component.css */ "./src/app/polizas/polizas.component.css")]
        }),
        __metadata("design:paramtypes", [_ServiciosWeb_servicioswebconsumo_service__WEBPACK_IMPORTED_MODULE_1__["ServiciosWebConsumo"], _Recursos_Mensajes_services__WEBPACK_IMPORTED_MODULE_2__["Mensajes"]])
    ], PolizasComponent);
    return PolizasComponent;
}());



/***/ }),

/***/ "./src/app/reportes/reportes.component.css":
/*!*************************************************!*\
  !*** ./src/app/reportes/reportes.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/reportes/reportes.component.html":
/*!**************************************************!*\
  !*** ./src/app/reportes/reportes.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>REPORTES DE PÓLIZAS</h4>\n<ul class=\"nav nav-tabs\" role=\"tablist\">\n    <li class=\"active\"><a href=\"#home2\" role=\"tab\" data-toggle=\"tab\"><i class=\"fa fa-exclamation-triangle\"></i> Pólizas por Vencer</a></li>\n    <li><a href=\"#profile2\" role=\"tab\" data-toggle=\"tab\"><i class=\"fa fa-archive\"></i> Todas las Pólizas</a></li>\n    <li><a href=\"#settings2\" role=\"tab\" data-toggle=\"tab\"><i class=\"fa fa-minus-square\"></i> Pólizas Vencidas</a></li>\n\n</ul>\n<div class=\"tab-content\">\n    <div class=\"tab-pane fade in active\" id=\"home2\">\n        <!-- INICIO TABLA DE BUSQUEDA -->\n        <table id=\"dt\" class=\"display\" style=\"width:100%\">\n            <thead>\n                <tr>\n                    <th>Aseguradora</th>\n                    <th>CI/RUC Contratista</th>\n                    <th>Contratista</th>\n                    <th>N° Contrato</th>\n                    <th>Cobertura</th>\n                    <th>Concepto</th>\n                    <th>Administrador de Contrato</th>\n                    <th>N° Póliza</th>\n                    <th>Fecha Pago Anticipo</th>\n                    <th>Fecha de Cobertura</th>\n                    <th>Fecha Inicial</th>\n                    <th>Fecha Final</th>\n                    <th>Valor de Cobertura Inicial</th>\n                    <th>Valor de Cobertura Actual</th>\n                    <th>Observaciones</th>\n                    <th>N° Renovación</th>\n\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let objDatos of vecPoliza1\">\n                    <td>{{objDatos.idaseguradora.nombreaseguradora}}</td>\n                    <td>{{objDatos.idcontrato.idcontratista.ciruc}}</td>\n                    <td>{{objDatos.idcontrato.idcontratista.nombrecontratista}}</td>\n                    <td>{{objDatos.idcontrato.codcontrato}}</td>\n                    <td>{{objDatos.idcobertura.descripcioncobertura}}</td>\n                    <td>{{objDatos.idcontrato.concepto}}</td>\n                    <td>{{objDatos.idcontrato.idadministrador.nombreadmin}}</td>\n                    <td>{{objDatos.numpoliza}}</td>\n                    <td>{{objDatos.fechapagoanticipo| date : format : timezone}}</td>\n                    <td>{{objDatos.fechainicialcobertura| date : format : timezone}}</td>\n                    <td>{{objDatos.vencimientofechainicial| date : format : timezone}}</td>\n                    <td>{{objDatos.vencimientofechafinal| date : format : timezone}}</td>\n                    <td>{{objDatos.valorcoberturainicial}}</td>\n                    <td>{{objDatos.valorcoberturaactual}}</td>\n                    <td>{{objDatos.observaciones}}</td>\n                    <td>{{objDatos.numrenovaciones}}</td>\n\n                </tr>\n            </tbody>\n            <tfoot>\n                <tr>\n\n                    <th>Aseguradora</th>\n                    <th>CI/RUC Contratista</th>\n                    <th>Contratista</th>\n                    <th>N° Contrato</th>\n                    <th>Cobertura</th>\n                    <th>Concepto</th>\n                    <th>Administrador de Contrato</th>\n                    <th>N° Póliza</th>\n                    <th>Fecha Pago Anticipo</th>\n                    <th>Fecha de Cobertura</th>\n                    <th>Fecha Inicial</th>\n                    <th>Fecha Final</th>\n                    <th>Valor de Cobertura Inicial</th>\n                    <th>Valor de Cobertura Actual</th>\n                    <th>Observaciones</th>\n                    <th>N° de Renovación</th>\n\n                </tr>\n            </tfoot>\n        </table>\n        <!-- FIN TABLA DE BUSQUEDA -->\n\n\n\n    </div>\n    <div class=\"tab-pane fade\" id=\"profile2\">\n\n        <!-- INICIO TABLA DE BUSQUEDA -->\n        <table id=\"dt1\" class=\"display\" style=\"width:100%\">\n            <thead>\n                <tr>\n                    <th>Aseguradora</th>\n                    <th>CI/RUC Contratista</th>\n                    <th>Contratista</th>\n                    <th>N° Contrato</th>\n                    <th>Cobertura</th>\n                    <th>Concepto</th>\n                    <th>Administrador de Contrato</th>\n                    <th>N° Póliza</th>\n                    <th>Fecha Pago Anticipo</th>\n                    <th>Fecha de Cobertura</th>\n                    <th>Fecha Inicial</th>\n                    <th>Fecha Final</th>\n                    <th>Valor de Cobertura Inicial</th>\n                    <th>Valor de Cobertura Actual</th>\n                    <th>Observaciones</th>\n                    <th>N° Renovación</th>\n\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let objDatos of vecPoliza\">\n                    <td>{{objDatos.idaseguradora.nombreaseguradora}}</td>\n                    <td>{{objDatos.idcontrato.idcontratista.ciruc}}</td>\n                    <td>{{objDatos.idcontrato.idcontratista.nombrecontratista}}</td>\n                    <td>{{objDatos.idcontrato.codcontrato}}</td>\n                    <td>{{objDatos.idcobertura.descripcioncobertura}}</td>\n                    <td>{{objDatos.idcontrato.concepto}}</td>\n                    <td>{{objDatos.idcontrato.idadministrador.nombreadmin}}</td>\n                    <td>{{objDatos.numpoliza}}</td>\n                    <td>{{objDatos.fechapagoanticipo| date : format : timezone}}</td>\n                    <td>{{objDatos.fechainicialcobertura| date : format : timezone}}</td>\n                    <td>{{objDatos.vencimientofechainicial| date : format : timezone}}</td>\n                    <td>{{objDatos.vencimientofechafinal| date : format : timezone}}</td>\n                    <td>{{objDatos.valorcoberturainicial}}</td>\n                    <td>{{objDatos.valorcoberturaactual}}</td>\n                    <td>{{objDatos.observaciones}}</td>\n                    <td>{{objDatos.numrenovaciones}}</td>\n\n                </tr>\n            </tbody>\n            <tfoot>\n                <tr>\n\n                    <th>Aseguradora</th>\n                    <th>CI/RUC Contratista</th>\n                    <th>Contratista</th>\n                    <th>N° Contrato</th>\n                    <th>Cobertura</th>\n                    <th>Concepto</th>\n                    <th>Administrador de Contrato</th>\n                    <th>N° Póliza</th>\n                    <th>Fecha Pago Anticipo</th>\n                    <th>Fecha de Cobertura</th>\n                    <th>Fecha Inicial</th>\n                    <th>Fecha Final</th>\n                    <th>Valor de Cobertura Inicial</th>\n                    <th>Valor de Cobertura Actual</th>\n                    <th>Observaciones</th>\n                    <th>N° de Renovación</th>\n\n                </tr>\n            </tfoot>\n        </table>\n        <!-- FIN TABLA DE BUSQUEDA -->\n\n    </div>\n    <div class=\"tab-pane fade\" id=\"settings2\">\n        <!-- INICIO TABLA DE BUSQUEDA -->\n        <table id=\"dt2\" class=\"display\" style=\"width:100%\">\n            <thead>\n                <tr>\n                    <th>Aseguradora</th>\n                    <th>CI/RUC Contratista</th>\n                    <th>Contratista</th>\n                    <th>N° Contrato</th>\n                    <th>Cobertura</th>\n                    <th>Concepto</th>\n                    <th>Administrador de Contrato</th>\n                    <th>N° Póliza</th>\n                    <th>Fecha Pago Anticipo</th>\n                    <th>Fecha de Cobertura</th>\n                    <th>Fecha Inicial</th>\n                    <th>Fecha Final</th>\n                    <th>Valor de Cobertura Inicial</th>\n                    <th>Valor de Cobertura Actual</th>\n                    <th>Observaciones</th>\n                    <th>N° Renovación</th>\n\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let objDatos of vecPoliza2\">\n                    <td>{{objDatos.idaseguradora.nombreaseguradora}}</td>\n                    <td>{{objDatos.idcontrato.idcontratista.ciruc}}</td>\n                    <td>{{objDatos.idcontrato.idcontratista.nombrecontratista}}</td>\n                    <td>{{objDatos.idcontrato.codcontrato}}</td>\n                    <td>{{objDatos.idcobertura.descripcioncobertura}}</td>\n                    <td>{{objDatos.idcontrato.concepto}}</td>\n                    <td>{{objDatos.idcontrato.idadministrador.nombreadmin}}</td>\n                    <td>{{objDatos.numpoliza}}</td>\n                    <td>{{objDatos.fechapagoanticipo| date : format : timezone}}</td>\n                    <td>{{objDatos.fechainicialcobertura| date : format : timezone}}</td>\n                    <td>{{objDatos.vencimientofechainicial| date : format : timezone}}</td>\n                    <td>{{objDatos.vencimientofechafinal| date : format : timezone}}</td>\n                    <td>{{objDatos.valorcoberturainicial}}</td>\n                    <td>{{objDatos.valorcoberturaactual}}</td>\n                    <td>{{objDatos.observaciones}}</td>\n                    <td>{{objDatos.numrenovaciones}}</td>\n\n                </tr>\n            </tbody>\n            <tfoot>\n                <tr>\n\n                    <th>Aseguradora</th>\n                    <th>CI/RUC Contratista</th>\n                    <th>Contratista</th>\n                    <th>N° Contrato</th>\n                    <th>Cobertura</th>\n                    <th>Concepto</th>\n                    <th>Administrador de Contrato</th>\n                    <th>N° Póliza</th>\n                    <th>Fecha Pago Anticipo</th>\n                    <th>Fecha de Cobertura</th>\n                    <th>Fecha Inicial</th>\n                    <th>Fecha Final</th>\n                    <th>Valor de Cobertura Inicial</th>\n                    <th>Valor de Cobertura Actual</th>\n                    <th>Observaciones</th>\n                    <th>N° de Renovación</th>\n\n                </tr>\n            </tfoot>\n        </table>\n        <!-- FIN TABLA DE BUSQUEDA -->\n    </div>\n    <div class=\"tab-pane fade in\" id=\"dropdown21\">\n        <h5>Tab Dropdown 1</h5>\n        <p>Phosfluorescently revolutionize viral leadership via turnkey technology. Synergistically monetize intermandated strategic theme areas through multimedia based.</p>\n    </div>\n    <div class=\"tab-pane fade\" id=\"dropdown22\">\n        <h5>Tab Dropdown 2</h5>\n        <p>Continually mesh resource sucking synergy before sustainable e-commerce. Efficiently incentivize leading-edge alignments with go forward expertise. Conveniently myocardinate leveraged process improvements through progressive models. Collaboratively.</p>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/reportes/reportes.component.ts":
/*!************************************************!*\
  !*** ./src/app/reportes/reportes.component.ts ***!
  \************************************************/
/*! exports provided: ReportesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportesComponent", function() { return ReportesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ServiciosWeb_servicioswebconsumo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ServiciosWeb/servicioswebconsumo.service */ "./src/app/ServiciosWeb/servicioswebconsumo.service.ts");
/* harmony import */ var _Recursos_Mensajes_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Recursos/Mensajes.services */ "./src/app/Recursos/Mensajes.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //para servicio

var ReportesComponent = /** @class */ (function () {
    function ReportesComponent(servicios, mensaje) {
        this.servicios = servicios;
        this.mensaje = mensaje;
    }
    ReportesComponent.prototype.ngOnInit = function () {
        var _this = this;
        $(function () {
            $('#dt').DataTable();
        });
        $(function () {
            $('#dt1').DataTable();
        });
        $(function () {
            $('#dt2').DataTable();
        });
        this.servicios.ServicioWebPruebaED().subscribe(function (polizas) { _this.vecPoliza = polizas; });
        this.servicios.ServicioWebPruebaED1().subscribe(function (polizas1) { _this.vecPoliza1 = polizas1; });
        this.servicios.ServicioWebPruebaED2().subscribe(function (polizas2) { _this.vecPoliza2 = polizas2; });
        this.dataTable = $(this.table.nativeElement);
        this.dataTable.dataTable();
    };
    ReportesComponent.prototype.MensajeError = function () {
        var item = alert("No se han recibido datos");
    };
    ReportesComponent.prototype.MensajeCorrecto = function () {
        var item = alert("Datos Cargados Correctamente");
    };
    ReportesComponent.prototype.ConsumoPoliza = function () {
        var _this = this;
        try {
            this.servicios.ServicioWebPruebaED().subscribe(function (polizas) {
                _this.vecPoliza = polizas;
            });
            if (this.vecPoliza == null)
                this.MensajeError();
            else
                this.MensajeCorrecto();
        }
        catch (error) {
            this.MensajeError();
            console.error(error);
        }
    };
    ReportesComponent.prototype.ConsumoPoliza1 = function () {
        var _this = this;
        try {
            this.servicios.ServicioWebPruebaED1().subscribe(function (polizas1) {
                _this.vecPoliza1 = polizas1;
            });
            if (this.vecPoliza1 == null)
                this.MensajeError();
            else
                this.MensajeCorrecto();
        }
        catch (error) {
            this.MensajeError();
            console.error(error);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dataTable'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ReportesComponent.prototype, "table", void 0);
    ReportesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reportes',
            template: __webpack_require__(/*! ./reportes.component.html */ "./src/app/reportes/reportes.component.html"),
            styles: [__webpack_require__(/*! ./reportes.component.css */ "./src/app/reportes/reportes.component.css")]
        }),
        __metadata("design:paramtypes", [_ServiciosWeb_servicioswebconsumo_service__WEBPACK_IMPORTED_MODULE_1__["ServiciosWebConsumo"], _Recursos_Mensajes_services__WEBPACK_IMPORTED_MODULE_2__["Mensajes"]])
    ], ReportesComponent);
    return ReportesComponent;
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

module.exports = __webpack_require__(/*! E:\Politécnica\ANGULAR\Polizas_IU\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map