/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports) {

	(function() {
	  "use strict";

	  $(".menu button").click(function(event) {

	    event.preventDefault();

	    var windowPosition = -Math.abs(window.pageYOffset);

	    if ($("body").hasClass("menu-open")) {
	      $("window").scrollTop(500);
	      $("body").removeClass("fixed").removeClass("menu-open").removeAttr("style");
	      $("html").removeClass("body-menu");
	    } else {
	      $("body").css('top', windowPosition).addClass("menu-open").addClass("fixed");
	      $("html").addClass("body-menu");
	    }
	  });
	})();



/***/ },
/* 2 */
/***/ function(module, exports) {

	(function() {
	  $("footer button").click(function() {
	    $(this).find(".scroll-top").addClass("to-top");
	    $("html, body").delay(500).animate( {
	      scrollTop: 0
	    }, 500, function() {
	      $(".scroll-top").removeClass("to-top");
	    });
	  });
	})();



/***/ }
/******/ ]);