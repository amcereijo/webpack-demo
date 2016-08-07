webpackJsonp([0,4],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var component = __webpack_require__(2);
	/* eslint no-unused-vars: 0 */ 
	const react = __webpack_require__(3);
	document.body.appendChild(component());

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	let data = {};
	
	const showData = function(el) {
	  return function() {
	    el.innerHTML = data.message || 'No message';
	  };
	}
	
	const saveData = function(newData) {
	  data = newData;
	}
	
	function loadComponent () {
	  const element = document.createElement('div'); 
	  
	  const title = document.createElement('h1');
	  title.className = 'pure-button';
	  title.innerHTML = 'Hello world!!';
	  element.appendChild(title);
	
	  const buttonShow = document.createElement('button');
	  buttonShow.type= 'button';
	  buttonShow.innerHTML = 'Show';
	  buttonShow.onclick = showData(title);
	  element.appendChild(buttonShow);
	
	  const buttonLoadData = document.createElement('button');
	  buttonLoadData.type= 'button';
	  buttonLoadData.innerHTML = 'Load Data';
	  buttonLoadData.onclick = function() {
	    try {
	      !/* require.ensure */(function(require) {
	        const nData = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./data\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	        console.log('Data loadaded: ', nData);
	        saveData(nData);
	        buttonLoadData.remove();
	      }(__webpack_require__));
	    } catch(err) {
	      console.error('Error load data: ', err);
	    }
	  };
	  element.appendChild(buttonLoadData);
	
	  return element;
	}
	
	module.exports = loadComponent;

/***/ }
]);
//# sourceMappingURL=app.71f35321632f773459ad.js.map