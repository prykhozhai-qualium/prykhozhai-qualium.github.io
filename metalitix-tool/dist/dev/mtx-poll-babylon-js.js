(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["MetalitixLogger"] = factory();
	else
		root["MetalitixLogger"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/three/src/math/MathUtils.js":
/*!**************************************************!*\
  !*** ./node_modules/three/src/math/MathUtils.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEG2RAD": () => (/* binding */ DEG2RAD),
/* harmony export */   "RAD2DEG": () => (/* binding */ RAD2DEG),
/* harmony export */   "ceilPowerOfTwo": () => (/* binding */ ceilPowerOfTwo),
/* harmony export */   "clamp": () => (/* binding */ clamp),
/* harmony export */   "damp": () => (/* binding */ damp),
/* harmony export */   "degToRad": () => (/* binding */ degToRad),
/* harmony export */   "euclideanModulo": () => (/* binding */ euclideanModulo),
/* harmony export */   "floorPowerOfTwo": () => (/* binding */ floorPowerOfTwo),
/* harmony export */   "generateUUID": () => (/* binding */ generateUUID),
/* harmony export */   "inverseLerp": () => (/* binding */ inverseLerp),
/* harmony export */   "isPowerOfTwo": () => (/* binding */ isPowerOfTwo),
/* harmony export */   "lerp": () => (/* binding */ lerp),
/* harmony export */   "mapLinear": () => (/* binding */ mapLinear),
/* harmony export */   "pingpong": () => (/* binding */ pingpong),
/* harmony export */   "radToDeg": () => (/* binding */ radToDeg),
/* harmony export */   "randFloat": () => (/* binding */ randFloat),
/* harmony export */   "randFloatSpread": () => (/* binding */ randFloatSpread),
/* harmony export */   "randInt": () => (/* binding */ randInt),
/* harmony export */   "seededRandom": () => (/* binding */ seededRandom),
/* harmony export */   "setQuaternionFromProperEuler": () => (/* binding */ setQuaternionFromProperEuler),
/* harmony export */   "smootherstep": () => (/* binding */ smootherstep),
/* harmony export */   "smoothstep": () => (/* binding */ smoothstep)
/* harmony export */ });
const _lut = [];

for ( let i = 0; i < 256; i ++ ) {

	_lut[ i ] = ( i < 16 ? '0' : '' ) + ( i ).toString( 16 );

}

let _seed = 1234567;


const DEG2RAD = Math.PI / 180;
const RAD2DEG = 180 / Math.PI;

// http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136
function generateUUID() {

	const d0 = Math.random() * 0xffffffff | 0;
	const d1 = Math.random() * 0xffffffff | 0;
	const d2 = Math.random() * 0xffffffff | 0;
	const d3 = Math.random() * 0xffffffff | 0;
	const uuid = _lut[ d0 & 0xff ] + _lut[ d0 >> 8 & 0xff ] + _lut[ d0 >> 16 & 0xff ] + _lut[ d0 >> 24 & 0xff ] + '-' +
			_lut[ d1 & 0xff ] + _lut[ d1 >> 8 & 0xff ] + '-' + _lut[ d1 >> 16 & 0x0f | 0x40 ] + _lut[ d1 >> 24 & 0xff ] + '-' +
			_lut[ d2 & 0x3f | 0x80 ] + _lut[ d2 >> 8 & 0xff ] + '-' + _lut[ d2 >> 16 & 0xff ] + _lut[ d2 >> 24 & 0xff ] +
			_lut[ d3 & 0xff ] + _lut[ d3 >> 8 & 0xff ] + _lut[ d3 >> 16 & 0xff ] + _lut[ d3 >> 24 & 0xff ];

	// .toUpperCase() here flattens concatenated strings to save heap memory space.
	return uuid.toUpperCase();

}

function clamp( value, min, max ) {

	return Math.max( min, Math.min( max, value ) );

}

// compute euclidian modulo of m % n
// https://en.wikipedia.org/wiki/Modulo_operation
function euclideanModulo( n, m ) {

	return ( ( n % m ) + m ) % m;

}

// Linear mapping from range <a1, a2> to range <b1, b2>
function mapLinear( x, a1, a2, b1, b2 ) {

	return b1 + ( x - a1 ) * ( b2 - b1 ) / ( a2 - a1 );

}

// https://www.gamedev.net/tutorials/programming/general-and-gameplay-programming/inverse-lerp-a-super-useful-yet-often-overlooked-function-r5230/
function inverseLerp( x, y, value ) {

	if ( x !== y ) {

		return ( value - x ) / ( y - x );

	} else {

		return 0;

	}

}

// https://en.wikipedia.org/wiki/Linear_interpolation
function lerp( x, y, t ) {

	return ( 1 - t ) * x + t * y;

}

// http://www.rorydriscoll.com/2016/03/07/frame-rate-independent-damping-using-lerp/
function damp( x, y, lambda, dt ) {

	return lerp( x, y, 1 - Math.exp( - lambda * dt ) );

}

// https://www.desmos.com/calculator/vcsjnyz7x4
function pingpong( x, length = 1 ) {

	return length - Math.abs( euclideanModulo( x, length * 2 ) - length );

}

// http://en.wikipedia.org/wiki/Smoothstep
function smoothstep( x, min, max ) {

	if ( x <= min ) return 0;
	if ( x >= max ) return 1;

	x = ( x - min ) / ( max - min );

	return x * x * ( 3 - 2 * x );

}

function smootherstep( x, min, max ) {

	if ( x <= min ) return 0;
	if ( x >= max ) return 1;

	x = ( x - min ) / ( max - min );

	return x * x * x * ( x * ( x * 6 - 15 ) + 10 );

}

// Random integer from <low, high> interval
function randInt( low, high ) {

	return low + Math.floor( Math.random() * ( high - low + 1 ) );

}

// Random float from <low, high> interval
function randFloat( low, high ) {

	return low + Math.random() * ( high - low );

}

// Random float from <-range/2, range/2> interval
function randFloatSpread( range ) {

	return range * ( 0.5 - Math.random() );

}

// Deterministic pseudo-random float in the interval [ 0, 1 ]
function seededRandom( s ) {

	if ( s !== undefined ) _seed = s % 2147483647;

	// Park-Miller algorithm

	_seed = _seed * 16807 % 2147483647;

	return ( _seed - 1 ) / 2147483646;

}

function degToRad( degrees ) {

	return degrees * DEG2RAD;

}

function radToDeg( radians ) {

	return radians * RAD2DEG;

}

function isPowerOfTwo( value ) {

	return ( value & ( value - 1 ) ) === 0 && value !== 0;

}

function ceilPowerOfTwo( value ) {

	return Math.pow( 2, Math.ceil( Math.log( value ) / Math.LN2 ) );

}

function floorPowerOfTwo( value ) {

	return Math.pow( 2, Math.floor( Math.log( value ) / Math.LN2 ) );

}

function setQuaternionFromProperEuler( q, a, b, c, order ) {

	// Intrinsic Proper Euler Angles - see https://en.wikipedia.org/wiki/Euler_angles

	// rotations are applied to the axes in the order specified by 'order'
	// rotation by angle 'a' is applied first, then by angle 'b', then by angle 'c'
	// angles are in radians

	const cos = Math.cos;
	const sin = Math.sin;

	const c2 = cos( b / 2 );
	const s2 = sin( b / 2 );

	const c13 = cos( ( a + c ) / 2 );
	const s13 = sin( ( a + c ) / 2 );

	const c1_3 = cos( ( a - c ) / 2 );
	const s1_3 = sin( ( a - c ) / 2 );

	const c3_1 = cos( ( c - a ) / 2 );
	const s3_1 = sin( ( c - a ) / 2 );

	switch ( order ) {

		case 'XYX':
			q.set( c2 * s13, s2 * c1_3, s2 * s1_3, c2 * c13 );
			break;

		case 'YZY':
			q.set( s2 * s1_3, c2 * s13, s2 * c1_3, c2 * c13 );
			break;

		case 'ZXZ':
			q.set( s2 * c1_3, s2 * s1_3, c2 * s13, c2 * c13 );
			break;

		case 'XZX':
			q.set( c2 * s13, s2 * s3_1, s2 * c3_1, c2 * c13 );
			break;

		case 'YXY':
			q.set( s2 * c3_1, c2 * s13, s2 * s3_1, c2 * c13 );
			break;

		case 'ZYZ':
			q.set( s2 * s3_1, s2 * c3_1, c2 * s13, c2 * c13 );
			break;

		default:
			console.warn( 'THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: ' + order );

	}

}







/***/ }),

/***/ "./src/constants/index.ts":
/*!********************************!*\
  !*** ./src/constants/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_ORIGIN": () => (/* binding */ API_ORIGIN),
/* harmony export */   "API_URL": () => (/* binding */ API_URL),
/* harmony export */   "API_VERSION": () => (/* binding */ API_VERSION),
/* harmony export */   "DEFAULT_INTERVAL_VALUE": () => (/* binding */ DEFAULT_INTERVAL_VALUE),
/* harmony export */   "MAXIMUM_BATCH_RECORDS_LENGTH": () => (/* binding */ MAXIMUM_BATCH_RECORDS_LENGTH),
/* harmony export */   "MAXIMUM_BATCH_SENDING_INTERVAL": () => (/* binding */ MAXIMUM_BATCH_SENDING_INTERVAL),
/* harmony export */   "MAXIMUM_SESSION_KEEPALIVE_TIME": () => (/* binding */ MAXIMUM_SESSION_KEEPALIVE_TIME),
/* harmony export */   "MAX_INTERVAL_VALUE": () => (/* binding */ MAX_INTERVAL_VALUE),
/* harmony export */   "MIN_INTERVAL_VALUE": () => (/* binding */ MIN_INTERVAL_VALUE),
/* harmony export */   "isProduction": () => (/* binding */ isProduction),
/* harmony export */   "isStaging": () => (/* binding */ isStaging)
/* harmony export */ });
const isProduction = "development" === 'production';
const isStaging = "development" === 'staging';
const API_ORIGIN = isProduction
    ? 'https://app.metalitix.com'
    : isStaging
        ? 'https://metalitix-staging.aircards.io'
        : 'https://metalitix-dev.aircards.io';
const API_VERSION = 'v1';
const API_URL = `${API_ORIGIN}/api/${API_VERSION}`;
const MIN_INTERVAL_VALUE = 100;
const MAX_INTERVAL_VALUE = 1000;
const DEFAULT_INTERVAL_VALUE = 500;
const MAXIMUM_BATCH_RECORDS_LENGTH = 100;
/** Wait maximum 3 minutes if limit of MAXIMUM_BATCH_RECORDS_LENGTH was not reached */
const MAXIMUM_BATCH_SENDING_INTERVAL = 3 * 60 * 1000;
/** Maximum server keepalive time since last successful pull data to the server */
const MAXIMUM_SESSION_KEEPALIVE_TIME = 5 * 60 * 1000;


/***/ }),

/***/ "./src/lib/mtx-engagement-survey.ts":
/*!******************************************!*\
  !*** ./src/lib/mtx-engagement-survey.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addSurvey": () => (/* binding */ addSurvey)
/* harmony export */ });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services */ "./src/services/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const template = `<style>
  .mtx-survey {
    position: fixed;
    z-index: 2000;
    top: 0;
    left: 50%;
    transform: translate(-50%, -100%);
    padding: 10px 33px 7px;
    border-radius: 5px;
    border: 2px solid #888;
    transition: transform 0.3s ease-in-out;
  }
  
  .mtx-survey--open {
    transform: translate(-50%, 35px);
  }
  
  .mtx-survey--close {
    opacity: 0;
    transition: transform 0.3s cubic-bezier(.84,-0.23,.41,.78), opacity 0.3s ease-in-out;
    transform: translate(-50%, 0) scale(0.6);
  }
  
  .mtx-survey--white {
    background: #fff;
    color: #292929;
  }
  
  .mtx-survey--black {
    background: #2d2d2d;
    color: #fff;
  }
  
  .mtx-survey-title {
    font-family: 'Rubik', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    margin: 0 0 5px;
    text-align: center;
  }
  
  .mtx-survey-items {
    text-align: center;
    margin-bottom: 7px;
  }
  
  .mtx-survey-item {
    transition: opacity 0.3s ease-in-out;
    cursor: pointer;
  }
  
  .mtx-survey-submit-holder {
    text-align: center;
  }
  
  .mtx-survey-submit-button {
    background: #FFFFFF;
    border: 0;
    font-family: 'Rubik', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 10px;
    line-height: 12px;
    padding: 7px 27px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .mtx-survey-submit-button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  .mtx-survey--white .mtx-survey-submit-button {
    background: #292929;
    color: #fff;
  }
  
  .mtx-survey--black .mtx-survey-submit-button {
    background: #fff;
    color: #2f2f2f;
  }
</style>
<h4 class="mtx-survey-title">How would you rate your experience?</h4>
<div class="mtx-survey-items">
  <svg width="265" height="39" viewBox="0 0 265 39" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g class="mtx-survey-item" data-value="1">
      <path d="M19.2562 37.805C29.2646 37.805 37.3965 29.6731 37.3965 19.6647C37.3965 9.65626 29.2646 1.52441 19.2562 1.52441C9.24777 1.52441 1.11594 9.65626 1.11594 19.6647C1.11594 29.6731 9.24777 37.805 19.2562 37.805Z" fill="#E64355"/>
      <path d="M19.2564 2.64125C9.87348 2.64125 2.23313 10.2816 2.23313 19.6645C2.23313 29.0474 9.87348 36.6878 19.2564 36.6878C28.6393 36.6878 36.2796 29.0474 36.2796 19.6645C36.2796 10.2816 28.6393 2.64125 19.2564 2.64125ZM19.2564 0.407227C29.8903 0.407227 38.5137 9.03056 38.5137 19.6645C38.5137 30.2985 29.8903 38.9218 19.2564 38.9218C8.62242 38.9218 -0.000896454 30.2985 -0.000896454 19.6645C-0.000896454 9.03056 8.62242 0.407227 19.2564 0.407227Z" fill="#FBD2D8"/>
      <path d="M23.6645 16.6417C22.7597 16.6417 22.0262 15.5414 22.0262 14.1842C22.0262 12.827 22.7597 11.7268 23.6645 11.7268C24.5693 11.7268 25.3027 12.827 25.3027 14.1842C25.3027 15.5414 24.5693 16.6417 23.6645 16.6417Z" fill="white"/>
      <path d="M15.1 16.6417C14.1952 16.6417 13.4617 15.5414 13.4617 14.1842C13.4617 12.827 14.1952 11.7268 15.1 11.7268C16.0048 11.7268 16.7383 12.827 16.7383 14.1842C16.7383 15.5414 16.0048 16.6417 15.1 16.6417Z" fill="white"/>
      <path d="M9.96176 28.2436C9.96176 28.2436 11.7639 21.5713 19.0021 21.5713C25.734 21.5713 28.5488 28.2436 28.5488 28.2436" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
    </g>
   
    <g class="mtx-survey-item" data-value="2">
      <path d="M75.7699 37.8047C85.7783 37.8047 93.9102 29.6729 93.9102 19.6644C93.9102 9.65602 85.7783 1.52417 75.7699 1.52417C65.7615 1.52417 57.6296 9.65602 57.6296 19.6644C57.6296 29.6729 65.7615 37.8047 75.7699 37.8047Z" fill="#F5A720"/>
      <path d="M75.7701 2.64125C66.3872 2.64125 58.7468 10.2816 58.7468 19.6645C58.7468 29.0474 66.3872 36.6878 75.7701 36.6878C85.153 36.6878 92.7933 29.0474 92.7933 19.6645C92.7933 10.2816 85.153 2.64125 75.7701 2.64125ZM75.7701 0.407227C86.404 0.407227 95.0273 9.03056 95.0273 19.6645C95.0273 30.2985 86.404 38.9218 75.7701 38.9218C65.1361 38.9218 56.5128 30.2985 56.5128 19.6645C56.5128 9.03056 65.1361 0.407227 75.7701 0.407227Z" fill="#FFE6BE"/>
      <path d="M80.0609 16.6413C79.1561 16.6413 78.4227 15.5411 78.4227 14.1839C78.4227 12.8267 79.1561 11.7264 80.0609 11.7264C80.9657 11.7264 81.6992 12.8267 81.6992 14.1839C81.6992 15.5411 80.9657 16.6413 80.0609 16.6413Z" fill="white"/>
      <path d="M71.4848 16.6413C70.58 16.6413 69.8465 15.5411 69.8465 14.1839C69.8465 12.8267 70.58 11.7264 71.4848 11.7264C72.3896 11.7264 73.123 12.8267 73.123 14.1839C73.123 15.5411 72.3896 16.6413 71.4848 16.6413Z" fill="white"/>
      <path d="M67.7444 27.484C67.7444 27.484 69.4124 23.6266 76.0996 23.6266C81.1038 23.6266 83.8145 27.484 83.8145 27.484" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
    </g>
   
    <g class="mtx-survey-item" data-value="3">
      <path d="M132.284 37.805C142.292 37.805 150.424 29.6731 150.424 19.6647C150.424 9.65626 142.292 1.52441 132.284 1.52441C122.275 1.52441 114.143 9.65626 114.143 19.6647C114.143 29.6731 122.275 37.805 132.284 37.805Z" fill="#D4C828"/>
      <path d="M132.284 2.64125C122.901 2.64125 115.26 10.2816 115.26 19.6645C115.26 29.0474 122.901 36.6878 132.284 36.6878C141.667 36.6878 149.307 29.0474 149.307 19.6645C149.307 10.2816 141.667 2.64125 132.284 2.64125ZM132.284 0.407227C142.918 0.407227 151.541 9.03056 151.541 19.6645C151.541 30.2985 142.918 38.9218 132.284 38.9218C121.65 38.9218 113.026 30.2985 113.026 19.6645C113.026 9.03056 121.65 0.407227 132.284 0.407227Z" fill="#F9F297"/>
      <path d="M136.551 17.49C135.646 17.49 134.913 16.3898 134.913 15.0326C134.913 13.6754 135.646 12.5752 136.551 12.5752C137.456 12.5752 138.189 13.6754 138.189 15.0326C138.189 16.3898 137.456 17.49 136.551 17.49Z" fill="white"/>
      <path d="M127.989 17.49C127.084 17.49 126.35 16.3898 126.35 15.0326C126.35 13.6754 127.084 12.5752 127.989 12.5752C128.893 12.5752 129.627 13.6754 129.627 15.0326C129.627 16.3898 128.893 17.49 127.989 17.49Z" fill="white"/>
      <path d="M138.416 25.5475H131.967C126.963 25.5475 126.054 25.5475 126.054 25.5475" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
    </g>
    
    <g class="mtx-survey-item" data-value="4">
      <path d="M188.797 37.805C198.806 37.805 206.938 29.6731 206.938 19.6647C206.938 9.65626 198.806 1.52441 188.797 1.52441C178.789 1.52441 170.657 9.65626 170.657 19.6647C170.657 29.6731 178.789 37.805 188.797 37.805Z" fill="#A5CE3A"/>
      <path d="M188.797 2.64125C179.415 2.64125 171.774 10.2816 171.774 19.6645C171.774 29.0474 179.415 36.6878 188.797 36.6878C198.18 36.6878 205.821 29.0474 205.821 19.6645C205.821 10.2816 198.18 2.64125 188.797 2.64125ZM188.797 0.407227C199.431 0.407227 208.055 9.03056 208.055 19.6645C208.055 30.2985 199.431 38.9218 188.797 38.9218C178.163 38.9218 169.54 30.2985 169.54 19.6645C169.54 9.03056 178.163 0.407227 188.797 0.407227Z" fill="#D7E48A"/>
      <path d="M193.09 17.4898C192.185 17.4898 191.452 16.3896 191.452 15.0324C191.452 13.6752 192.185 12.575 193.09 12.575C193.995 12.575 194.729 13.6752 194.729 15.0324C194.729 16.3896 193.995 17.4898 193.09 17.4898Z" fill="white"/>
      <path d="M184.512 17.4898C183.607 17.4898 182.874 16.3896 182.874 15.0324C182.874 13.6752 183.607 12.575 184.512 12.575C185.417 12.575 186.15 13.6752 186.15 15.0324C186.15 16.3896 185.417 17.4898 184.512 17.4898Z" fill="white"/>
      <path d="M196.828 24.4751C196.828 24.4751 195.16 28.3325 188.473 28.3325C183.469 28.3325 180.758 24.4751 180.758 24.4751" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
    </g>
    
    <g class="mtx-survey-item" data-value="5">
      <path d="M245.311 37.8048C255.319 37.8048 263.451 29.673 263.451 19.6646C263.451 9.65614 255.319 1.52429 245.311 1.52429C235.302 1.52429 227.171 9.65614 227.171 19.6646C227.171 29.673 235.302 37.8048 245.311 37.8048Z" fill="#84C441"/>
      <path d="M245.311 2.64101C235.928 2.64101 228.288 10.2814 228.288 19.6643C228.288 29.0472 235.928 36.6875 245.311 36.6875C254.694 36.6875 262.334 29.0472 262.334 19.6643C262.334 10.2814 254.694 2.64101 245.311 2.64101ZM245.311 0.406982C255.945 0.406982 264.568 9.03031 264.568 19.6643C264.568 30.2982 255.945 38.9216 245.311 38.9216C234.677 38.9216 226.054 30.2982 226.054 19.6643C226.054 9.03031 234.677 0.406982 245.311 0.406982Z" fill="#C9DF86"/>
      <path d="M249.717 17.4898C248.812 17.4898 248.079 16.3896 248.079 15.0324C248.079 13.6752 248.812 12.575 249.717 12.575C250.622 12.575 251.355 13.6752 251.355 15.0324C251.355 16.3896 250.622 17.4898 249.717 17.4898Z" fill="white"/>
      <path d="M241.153 17.4898C240.248 17.4898 239.514 16.3896 239.514 15.0324C239.514 13.6752 240.248 12.575 241.153 12.575C242.058 12.575 242.791 13.6752 242.791 15.0324C242.791 16.3896 242.058 17.4898 241.153 17.4898Z" fill="white"/>
      <path d="M254.602 22.4196C254.602 22.4196 252.799 29.0918 245.561 29.0918C238.829 29.0918 236.014 22.4196 236.014 22.4196" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
    </g>
  </svg>
</div>
<div class="mtx-survey-submit-holder">
  <button type="button" class="mtx-survey-submit-button" disabled>Submit</button>
</div>`;
const SURVEY_SUCCESSFULLY_LOGGED = 'mtx-survey-successfully-logged';
const getSurveyLogs = () => {
    const result = localStorage.getItem(SURVEY_SUCCESSFULLY_LOGGED);
    if (result === null) {
        return {};
    }
    return JSON.parse(result);
};
const getIsSurveyLogged = (appkey) => {
    const logs = getSurveyLogs();
    return logs[appkey] !== undefined;
};
const setSurveyLogged = (appkey, rating) => {
    const logs = getSurveyLogs();
    logs[appkey] = rating;
    return localStorage.setItem(SURVEY_SUCCESSFULLY_LOGGED, JSON.stringify(logs));
};
let surveyHolder = document.createElement('div');
const hideSurvey = (holder) => {
    holder.classList.add('mtx-survey--close');
    setTimeout(() => document.body.removeChild(holder), 350);
};
const addSurvey = ({ appkey, sessionId, force = false, theme = 'white' }) => {
    hideSurvey(surveyHolder);
    const isLogged = getIsSurveyLogged(appkey);
    /** Don't show the survey twice in automatic mode */
    if (isLogged && !force) {
        return;
    }
    surveyHolder = document.createElement('div');
    surveyHolder.setAttribute('class', `mtx-survey mtx-survey--${theme}`);
    surveyHolder.innerHTML = template;
    let rating = null;
    document.body.appendChild(surveyHolder);
    setTimeout(() => surveyHolder.classList.add('mtx-survey--open'), 0);
    const items = [...surveyHolder.querySelectorAll('.mtx-survey-item')];
    const submitButton = surveyHolder.querySelector('.mtx-survey-submit-button');
    const setActiveItem = (item) => {
        items.forEach(itemScore => {
            if (item !== itemScore) {
                itemScore.setAttribute('style', 'opacity: 0.6');
            }
            else {
                itemScore.setAttribute('style', 'opacity: 1');
            }
        });
    };
    const handleItemClick = (item) => {
        item.addEventListener('click', () => {
            rating = Number(item.getAttribute('data-value'));
            submitButton === null || submitButton === void 0 ? void 0 : submitButton.removeAttribute('disabled');
            setActiveItem(item);
        });
    };
    items.forEach(handleItemClick);
    submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
        if (rating === null) {
            return;
        }
        hideSurvey(surveyHolder);
        try {
            yield (0,_services__WEBPACK_IMPORTED_MODULE_0__.sendMetricSurveysData)({
                appkey,
                sessionId,
                rating,
            });
            setSurveyLogged(appkey, rating);
        }
        catch (e) {
            console.log(e);
        }
    }));
};


/***/ }),

/***/ "./src/lib/mtx-poll-base.ts":
/*!**********************************!*\
  !*** ./src/lib/mtx-poll-base.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MetalitixLoggerBase)
/* harmony export */ });
/* harmony import */ var three_src_math_MathUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three/src/math/MathUtils */ "./node_modules/three/src/math/MathUtils.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services */ "./src/services/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./src/types/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
/* harmony import */ var _mtx_engagement_survey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mtx-engagement-survey */ "./src/lib/mtx-engagement-survey.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






class MetalitixLoggerBase {
    constructor(appKey, options = {}) {
        this.interval = _constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_INTERVAL_VALUE;
        this.customData = {};
        this.object3D = null;
        this.setPollInterval = (pollInterval) => {
            this.interval = Math.min(_constants__WEBPACK_IMPORTED_MODULE_1__.MAX_INTERVAL_VALUE, Math.max(_constants__WEBPACK_IMPORTED_MODULE_1__.MIN_INTERVAL_VALUE, pollInterval));
        };
        /** Put this function in the `render` or `tick` function */
        this.updateFPS = () => {
            this.frames++;
            let time = Date.now();
            if (time >= this.prevFPSTime + 1000) {
                this.currentFPS = (this.frames * 1000) / (time - this.prevFPSTime);
                this.prevFPSTime = time;
                this.frames = 0;
            }
        };
        this.setCustomField = (key, value) => {
            this.customData[key] = value;
        };
        this.removeCustomField = (key) => {
            delete this.customData[key];
        };
        this.getRecord = (eventType, sessionId, { userEvent, userMeta, camera, data }) => {
            const resultData = Object.assign({}, this.customData, data);
            const base = {
                object: 'xr.analytics.record',
                appkey: this.appKey,
                apiver: this.apiVersion,
                sessionId,
                timestamp: Date.now(),
                metrics: {
                    fps: Math.round(this.currentFPS),
                },
                data: resultData,
            };
            if (eventType === _types__WEBPACK_IMPORTED_MODULE_2__.XRAnalytics.EventTypes.SessionStart) {
                console.assert(userMeta !== undefined, '"userMeta" is required for session start!');
                console.assert(camera !== undefined, '"camera" is required for session start!');
                return Object.assign({}, base, { eventType, userMeta, camera });
            }
            if (eventType === _types__WEBPACK_IMPORTED_MODULE_2__.XRAnalytics.EventTypes.SessionUpdate) {
                console.assert(userMeta !== undefined, '"userMeta" is required for session update!');
                return Object.assign({}, base, { eventType, userMeta, camera });
            }
            if (eventType === _types__WEBPACK_IMPORTED_MODULE_2__.XRAnalytics.EventTypes.SessionEnd) {
                return Object.assign({}, base, { eventType, camera });
            }
            if (eventType === _types__WEBPACK_IMPORTED_MODULE_2__.XRAnalytics.EventTypes.UserPosition) {
                return Object.assign({}, base, { eventType });
            }
            if (eventType === _types__WEBPACK_IMPORTED_MODULE_2__.XRAnalytics.EventTypes.UserInteraction) {
                console.assert(userEvent !== undefined, '"userEvent" is required for user interaction!');
                return Object.assign({}, base, { eventType, userEvent });
            }
            throw new Error('Unknown eventType: ' + eventType);
        };
        this.addRecord = (eventType, { userEvent, userMeta, camera, data }) => {
            if (this.sessionId === null) {
                return;
            }
            const record = this.getRecord(eventType, this.sessionId, { userEvent, userMeta, camera, data });
            this.pollRecords.push(record);
        };
        this.sendPosition = (sendAll = false) => __awaiter(this, void 0, void 0, function* () {
            this.pollInProgress = true;
            try {
                const items = this.pollRecords.slice(0, _constants__WEBPACK_IMPORTED_MODULE_1__.MAXIMUM_BATCH_RECORDS_LENGTH);
                const batchRecordsData = {
                    object: 'xr.analytics.batch.records',
                    appkey: this.appKey,
                    apiver: this.apiVersion,
                    items,
                };
                yield (0,_services__WEBPACK_IMPORTED_MODULE_0__.sendXRAnalyticsData)(batchRecordsData);
                this.pollRecords = this.pollRecords.slice(_constants__WEBPACK_IMPORTED_MODULE_1__.MAXIMUM_BATCH_RECORDS_LENGTH);
                if (this.pollRecords.length > 0 && sendAll) {
                    yield this.sendPosition(true);
                }
                this.lastPollTimestamp = Date.now();
            }
            catch (error) {
                console.log('Something went wrong', error);
                this.forceStopLoop();
            }
            finally {
                this.pollInProgress = false;
            }
        });
        this.getUserMeta = () => {
            return Object.assign({}, this.userMeta, {
                userAgent: window.navigator.userAgent,
                pagePath: location.pathname,
                pageQuery: location.search,
            });
        };
        this.addSessionStart = () => {
            const data = this.getPositionData(this.object3D);
            const camera = this.getCameraData(this.object3D);
            const userMeta = this.getUserMeta();
            this.previousCameraData = camera || null;
            if (data === undefined) {
                return;
            }
            this.addRecord(_types__WEBPACK_IMPORTED_MODULE_2__.XRAnalytics.EventTypes.SessionStart, { data, camera, userMeta });
        };
        this.addSessionEnd = () => {
            const data = this.getPositionData(this.object3D);
            let camera = this.getCameraData(this.object3D);
            if (data === undefined) {
                return;
            }
            if ((0,_utils__WEBPACK_IMPORTED_MODULE_3__.deepEqual)(camera, this.previousCameraData)) {
                /** Don't send the camera object if it was not changed */
                camera = undefined;
            }
            this.addRecord(_types__WEBPACK_IMPORTED_MODULE_2__.XRAnalytics.EventTypes.SessionEnd, { data, camera });
        };
        this.addUserPosition = () => {
            const data = this.getPositionData(this.object3D);
            if (data === undefined) {
                return;
            }
            this.addRecord(_types__WEBPACK_IMPORTED_MODULE_2__.XRAnalytics.EventTypes.UserPosition, { data });
        };
        this.addSessionUpdate = (camera) => {
            const data = this.getPositionData(this.object3D);
            const userMeta = this.getUserMeta();
            if (data === undefined) {
                return;
            }
            this.addRecord(_types__WEBPACK_IMPORTED_MODULE_2__.XRAnalytics.EventTypes.SessionUpdate, { data, camera, userMeta });
        };
        this.sddNextUserPositionAndUpdateCameraIfNeeded = () => {
            const camera = this.getCameraData(this.object3D);
            if (camera === undefined || (0,_utils__WEBPACK_IMPORTED_MODULE_3__.deepEqual)(camera, this.previousCameraData)) {
                this.addUserPosition();
            }
            else {
                this.addSessionUpdate(camera);
                this.previousCameraData = camera;
            }
        };
        this.sendPositionLoop = (start = false) => {
            /** Don't push position twice on session start */
            if (!start) {
                this.sddNextUserPositionAndUpdateCameraIfNeeded();
            }
            if (!this.pollInProgress &&
                this.pollRecords.length > 0 &&
                (this.pollRecords.length >= _constants__WEBPACK_IMPORTED_MODULE_1__.MAXIMUM_BATCH_RECORDS_LENGTH ||
                    Date.now() - this.lastPollTimestamp >= _constants__WEBPACK_IMPORTED_MODULE_1__.MAXIMUM_BATCH_SENDING_INTERVAL)) {
                this.sendPosition();
            }
            /** Stop polling data if session was ended and there is nothing to send */
            if (this.sessionId === null && this.pollRecords.length === 0) {
                return;
            }
            this.nextPoll = window.setTimeout(() => this.sendPositionLoop(), this.interval);
        };
        this.forceStopLoop = () => clearTimeout(this.nextPoll);
        this.clearSessionPollRecords = () => {
            this.pollRecords = [];
        };
        this.handleVisibilityChange = () => __awaiter(this, void 0, void 0, function* () {
            /**
             *  If user close or switch the browser tab - we need to pause the session
             *  Then if user came back to the browser - we need to try to resume the session if it's possible or start new one
             **/
            return document.visibilityState === 'hidden' ? this.pauseSession() : yield this.resumeSession();
        });
        this.startSession = (object3D) => {
            this.object3D = object3D;
            const sessionId = (0,three_src_math_MathUtils__WEBPACK_IMPORTED_MODULE_5__.generateUUID)();
            this.sessionId = sessionId;
            this.addSessionStart();
            this.sendPositionLoop(true);
            document.addEventListener('visibilitychange', this.handleVisibilityChange);
            this.afterSessionStart();
            if (this.showSurveyAutomatically) {
                this.surveyTimer = window.setTimeout(() => (0,_mtx_engagement_survey__WEBPACK_IMPORTED_MODULE_4__.addSurvey)({ appkey: this.appKey, sessionId, theme: this.surveyTheme }), this.autoSurveyShowInMs);
            }
        };
        this.pauseSession = () => {
            /** If the session was paused we need to send all our data and stop collecting new items */
            this.forceStopLoop();
            return this.sendPosition(true);
        };
        this.resumeSession = () => __awaiter(this, void 0, void 0, function* () {
            if (this.lastPollTimestamp < 0 || Date.now() - this.lastPollTimestamp <= _constants__WEBPACK_IMPORTED_MODULE_1__.MAXIMUM_SESSION_KEEPALIVE_TIME) {
                /** If the session was resumed on time - we need to continue collect current session data */
                this.forceStopLoop(); // in case if session was not paused
                this.sendPositionLoop();
            }
            else if (this.object3D !== null) {
                /** If the session was resumed when server already has closed the session - we need to start new session */
                const object3D = this.object3D;
                yield this.endSession();
                this.startSession(object3D);
            }
        });
        this.endSession = () => __awaiter(this, void 0, void 0, function* () {
            if (this.sessionId === null) {
                /** The session was already ended */
                return;
            }
            this.addSessionEnd();
            this.object3D = null;
            this.sessionId = null;
            this.previousCameraData = null;
            this.forceStopLoop();
            yield this.sendPosition(true);
            this.clearSessionPollRecords();
            this.lastPollTimestamp = -1;
            document.removeEventListener('visibilitychange', this.handleVisibilityChange);
        });
        this.updateUserMeta = (userMeta) => {
            if (userMeta === undefined) {
                return;
            }
            this.userMeta = userMeta;
            this.addSessionUpdate();
        };
        this.sendUserEvent = (eventName, eventType, target, points, params) => {
            const data = this.getPositionData(this.object3D);
            const userEvent = {
                object: 'user.event',
                eventName,
                eventType,
                target,
                points,
                params,
            };
            if (data === undefined) {
                return;
            }
            this.addRecord(_types__WEBPACK_IMPORTED_MODULE_2__.XRAnalytics.EventTypes.UserInteraction, { data, userEvent });
        };
        this.logCustomEvent = (eventName, params) => {
            this.sendUserEvent(eventName, 'custom', undefined, undefined, params);
        };
        this.logKeyDownEvent = (x, y, params) => {
            this.sendUserEvent('key_down', _types__WEBPACK_IMPORTED_MODULE_2__.XRAnalytics.UserInteractionTypes.KeyDown, {
                state: _types__WEBPACK_IMPORTED_MODULE_2__.XRAnalytics.PointStates.Pressed,
                timestamp: Date.now(),
                position: { x, y },
            }, undefined, params);
        };
        this.logKeyPressEvent = (x, y, params) => {
            this.sendUserEvent('key_press', _types__WEBPACK_IMPORTED_MODULE_2__.XRAnalytics.UserInteractionTypes.KeyPress, {
                state: _types__WEBPACK_IMPORTED_MODULE_2__.XRAnalytics.PointStates.Stationary,
                timestamp: Date.now(),
                position: { x, y },
            }, undefined, params);
        };
        this.logKeyUpEvent = (x, y, params) => {
            this.sendUserEvent('key_up', _types__WEBPACK_IMPORTED_MODULE_2__.XRAnalytics.UserInteractionTypes.KeyUp, {
                state: _types__WEBPACK_IMPORTED_MODULE_2__.XRAnalytics.PointStates.Released,
                timestamp: Date.now(),
                position: { x, y },
            }, undefined, params);
        };
        this.logMouseEnterEvent = (x, y, params) => {
            this.sendUserEvent('mouse_enter', _types__WEBPACK_IMPORTED_MODULE_2__.XRAnalytics.UserInteractionTypes.MouseEnter, {
                state: _types__WEBPACK_IMPORTED_MODULE_2__.XRAnalytics.PointStates.Stationary,
                timestamp: Date.now(),
                position: { x, y },
            }, undefined, params);
        };
        this.logMouseLeaveEvent = (x, y, params) => {
            this.sendUserEvent('mouse_leave', _types__WEBPACK_IMPORTED_MODULE_2__.XRAnalytics.UserInteractionTypes.MouseLeave, {
                state: _types__WEBPACK_IMPORTED_MODULE_2__.XRAnalytics.PointStates.Stationary,
                timestamp: Date.now(),
                position: { x, y },
            }, undefined, params);
        };
        this.logMouseOverEvent = (x, y, params) => {
            this.sendUserEvent('mouse_over', _types__WEBPACK_IMPORTED_MODULE_2__.XRAnalytics.UserInteractionTypes.MouseOver, {
                state: _types__WEBPACK_IMPORTED_MODULE_2__.XRAnalytics.PointStates.Stationary,
                timestamp: Date.now(),
                position: { x, y },
            }, undefined, params);
        };
        this.logMouseOutEvent = (x, y, params) => {
            this.sendUserEvent('mouse_out', _types__WEBPACK_IMPORTED_MODULE_2__.XRAnalytics.UserInteractionTypes.MouseOut, {
                state: _types__WEBPACK_IMPORTED_MODULE_2__.XRAnalytics.PointStates.Stationary,
                timestamp: Date.now(),
                position: { x, y },
            }, undefined, params);
        };
        this.logMouseDownEvent = (x, y, params) => {
            this.sendUserEvent('mouse_down', _types__WEBPACK_IMPORTED_MODULE_2__.XRAnalytics.UserInteractionTypes.MouseDown, {
                state: _types__WEBPACK_IMPORTED_MODULE_2__.XRAnalytics.PointStates.Pressed,
                timestamp: Date.now(),
                position: { x, y },
            }, undefined, params);
        };
        this.logMouseUpEvent = (x, y, params) => {
            this.sendUserEvent('mouse_up', _types__WEBPACK_IMPORTED_MODULE_2__.XRAnalytics.UserInteractionTypes.MouseUp, {
                state: _types__WEBPACK_IMPORTED_MODULE_2__.XRAnalytics.PointStates.Released,
                timestamp: Date.now(),
                position: { x, y },
            }, undefined, params);
        };
        this.logMouseMoveEvent = (x, y, params) => {
            this.sendUserEvent('mouse_move', _types__WEBPACK_IMPORTED_MODULE_2__.XRAnalytics.UserInteractionTypes.MouseMove, {
                state: _types__WEBPACK_IMPORTED_MODULE_2__.XRAnalytics.PointStates.Updated,
                timestamp: Date.now(),
                position: { x, y },
            }, undefined, params);
        };
        this.logMousePressEvent = (x, y, params) => {
            this.sendUserEvent('mouse_press', _types__WEBPACK_IMPORTED_MODULE_2__.XRAnalytics.UserInteractionTypes.MousePress, {
                state: _types__WEBPACK_IMPORTED_MODULE_2__.XRAnalytics.PointStates.Stationary,
                timestamp: Date.now(),
                position: { x, y },
            }, undefined, params);
        };
        this.logTouchTapEvent = (x, y, params) => {
            this.sendUserEvent('touch_tap', _types__WEBPACK_IMPORTED_MODULE_2__.XRAnalytics.UserInteractionTypes.TouchTap, {
                state: _types__WEBPACK_IMPORTED_MODULE_2__.XRAnalytics.PointStates.Stationary,
                timestamp: Date.now(),
                position: { x, y },
            }, undefined, params);
        };
        this.logTouchStartEvent = (x, y, params) => {
            this.sendUserEvent('touch_start', _types__WEBPACK_IMPORTED_MODULE_2__.XRAnalytics.UserInteractionTypes.TouchStart, {
                state: _types__WEBPACK_IMPORTED_MODULE_2__.XRAnalytics.PointStates.Pressed,
                timestamp: Date.now(),
                position: { x, y },
            }, undefined, params);
        };
        this.logTouchMoveEvent = (x, y, params) => {
            this.sendUserEvent('touch_move', _types__WEBPACK_IMPORTED_MODULE_2__.XRAnalytics.UserInteractionTypes.TouchMove, {
                state: _types__WEBPACK_IMPORTED_MODULE_2__.XRAnalytics.PointStates.Updated,
                timestamp: Date.now(),
                position: { x, y },
            }, undefined, params);
        };
        this.logTouchEndEvent = (x, y, params) => {
            this.sendUserEvent('touch_end', _types__WEBPACK_IMPORTED_MODULE_2__.XRAnalytics.UserInteractionTypes.TouchEnd, {
                state: _types__WEBPACK_IMPORTED_MODULE_2__.XRAnalytics.PointStates.Released,
                timestamp: Date.now(),
                position: { x, y },
            }, undefined, params);
        };
        this.logZoomStartEvent = (x, y, params) => {
            this.sendUserEvent('zoom_start', _types__WEBPACK_IMPORTED_MODULE_2__.XRAnalytics.UserInteractionTypes.ZoomStart, {
                state: _types__WEBPACK_IMPORTED_MODULE_2__.XRAnalytics.PointStates.Pressed,
                timestamp: Date.now(),
                position: { x, y },
            }, undefined, params);
        };
        this.logZoomUpdateEvent = (x, y, params) => {
            this.sendUserEvent('zoom_update', _types__WEBPACK_IMPORTED_MODULE_2__.XRAnalytics.UserInteractionTypes.ZoomUpdate, {
                state: _types__WEBPACK_IMPORTED_MODULE_2__.XRAnalytics.PointStates.Updated,
                timestamp: Date.now(),
                position: { x, y },
            }, undefined, params);
        };
        this.logZoomEndEvent = (x, y, params) => {
            this.sendUserEvent('zoom_end', _types__WEBPACK_IMPORTED_MODULE_2__.XRAnalytics.UserInteractionTypes.ZoomEnd, {
                state: _types__WEBPACK_IMPORTED_MODULE_2__.XRAnalytics.PointStates.Released,
                timestamp: Date.now(),
                position: { x, y },
            }, undefined, params);
        };
        this.showSurvey = (surveyTheme) => {
            clearTimeout(this.surveyTimer);
            if (this.sessionId === null) {
                return;
            }
            (0,_mtx_engagement_survey__WEBPACK_IMPORTED_MODULE_4__.addSurvey)({ appkey: this.appKey, sessionId: this.sessionId, theme: surveyTheme !== null && surveyTheme !== void 0 ? surveyTheme : this.surveyTheme, force: true });
        };
        const { pollInterval = _constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_INTERVAL_VALUE, apiVersion = 'v2', userMeta = {}, showSurvey = false, surveyTheme, } = options;
        this.appKey = appKey;
        this.apiVersion = apiVersion;
        this.userMeta = userMeta;
        this.setPollInterval(pollInterval);
        this.sessionId = null;
        this.previousCameraData = null;
        this.pollRecords = [];
        this.lastPollTimestamp = -1;
        this.pollInProgress = false;
        this.nextPoll = -1;
        this.pollInProgress = false;
        this.showSurveyAutomatically = showSurvey;
        this.surveyTheme = surveyTheme;
        /** Show survey automatically in range between 30 seconds and 3 minutes */
        this.autoSurveyShowInMs = (30 + 150 * Math.random()) * 1000;
        this.surveyTimer = -1;
        this.prevFPSTime = Date.now();
        this.frames = 0;
        this.currentFPS = 0;
    }
}


/***/ }),

/***/ "./src/services/index.ts":
/*!*******************************!*\
  !*** ./src/services/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendMetricSurveysData": () => (/* binding */ sendMetricSurveysData),
/* harmony export */   "sendXRAnalyticsData": () => (/* binding */ sendXRAnalyticsData)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function sendXRAnalyticsData(data) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('poll', data);
        return fetch(`${_constants__WEBPACK_IMPORTED_MODULE_0__.API_URL}/xr-analytics`, {
            method: 'POST',
            keepalive: true,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
    });
}
function sendMetricSurveysData(data) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('survey data', data);
        return fetch(`${_constants__WEBPACK_IMPORTED_MODULE_0__.API_ORIGIN}/api/v1/metric-surveys`, {
            method: 'POST',
            keepalive: true,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
    });
}


/***/ }),

/***/ "./src/types/index.ts":
/*!****************************!*\
  !*** ./src/types/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XRAnalytics": () => (/* binding */ XRAnalytics)
/* harmony export */ });
var XRAnalytics;
(function (XRAnalytics) {
    let PointStates;
    (function (PointStates) {
        PointStates["Pressed"] = "state.pressed";
        PointStates["Updated"] = "state.updated";
        PointStates["Released"] = "state.released";
        PointStates["Stationary"] = "state.stationary";
    })(PointStates = XRAnalytics.PointStates || (XRAnalytics.PointStates = {}));
    XRAnalytics.KnownPointStates = Object.values(PointStates);
    let UserInteractionTypes;
    (function (UserInteractionTypes) {
        UserInteractionTypes["KeyDown"] = "user.interaction.key_down";
        UserInteractionTypes["KeyPress"] = "user.interaction.key_press";
        UserInteractionTypes["KeyUp"] = "user.interaction.key_down";
        UserInteractionTypes["MouseEnter"] = "user.interaction.mouse_enter";
        UserInteractionTypes["MouseLeave"] = "user.interaction.mouse_leave";
        UserInteractionTypes["MouseOver"] = "user.interaction.mouse_over";
        UserInteractionTypes["MouseOut"] = "user.interaction.mouse_out";
        UserInteractionTypes["MouseDown"] = "user.interaction.mouse_down";
        UserInteractionTypes["MouseUp"] = "user.interaction.mouse_up";
        UserInteractionTypes["MouseMove"] = "user.interaction.mouse_move";
        UserInteractionTypes["MousePress"] = "user.interaction.mouse_press";
        UserInteractionTypes["TouchTap"] = "user.interaction.touch_tap";
        UserInteractionTypes["TouchStart"] = "user.interaction.touch_start";
        UserInteractionTypes["TouchMove"] = "user.interaction.touch_move";
        UserInteractionTypes["TouchEnd"] = "user.interaction.touch_end";
        UserInteractionTypes["ZoomStart"] = "user.interaction.zoom_start";
        UserInteractionTypes["ZoomUpdate"] = "user.interaction.zoom_update";
        UserInteractionTypes["ZoomEnd"] = "user.interaction.zoom_end";
    })(UserInteractionTypes = XRAnalytics.UserInteractionTypes || (XRAnalytics.UserInteractionTypes = {}));
    XRAnalytics.KnownUserInteractionTypes = Object.values(UserInteractionTypes);
    let EventTypes;
    (function (EventTypes) {
        EventTypes["UserPosition"] = "event.user.position";
        EventTypes["UserInteraction"] = "event.user.interaction";
        EventTypes["SessionStart"] = "event.session.start";
        EventTypes["SessionUpdate"] = "event.session.update";
        EventTypes["SessionEnd"] = "event.session.end";
    })(EventTypes = XRAnalytics.EventTypes || (XRAnalytics.EventTypes = {}));
    XRAnalytics.KnownEventTypes = Object.values(EventTypes);
})(XRAnalytics || (XRAnalytics = {}));


/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deepEqual": () => (/* binding */ deepEqual),
/* harmony export */   "isObject": () => (/* binding */ isObject),
/* harmony export */   "mergeDeep": () => (/* binding */ mergeDeep)
/* harmony export */ });
function deepEqual(x, y) {
    const ok = Object.keys;
    const tx = typeof x;
    const ty = typeof y;
    return x && y && tx === 'object' && tx === ty ? ok(x).length === ok(y).length && ok(x).every(key => deepEqual(x[key], y[key])) : x === y;
}
function isObject(item) {
    return item && typeof item === 'object' && !Array.isArray(item);
}
function mergeDeep(target, source) {
    let output = Object.assign({}, target);
    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach(key => {
            if (isObject(source[key])) {
                if (!(key in target))
                    Object.assign(output, { [key]: source[key] });
                else
                    output[key] = mergeDeep(target[key], source[key]);
            }
            else {
                Object.assign(output, { [key]: source[key] });
            }
        });
    }
    return output;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************************!*\
  !*** ./src/lib/mtx-poll-babylon-js.ts ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MetalitixLogger)
/* harmony export */ });
/* harmony import */ var _mtx_poll_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mtx-poll-base */ "./src/lib/mtx-poll-base.ts");

class MetalitixLogger extends _mtx_poll_base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(appKey, options = {}) {
        super(appKey, options);
        this.afterSessionStart = () => { };
        this.getPositionData = (scene) => {
            var _a;
            const camera = (_a = scene === null || scene === void 0 ? void 0 : scene.activeCamera) !== null && _a !== void 0 ? _a : null;
            if (camera === null) {
                return undefined;
            }
            return {
                position: { x: camera.position.x, y: camera.position.y, z: camera.position.z },
                direction: { x: camera.absoluteRotation.x, y: camera.absoluteRotation.y, z: camera.absoluteRotation.z },
            };
        };
        this.getCameraData = (scene) => {
            var _a;
            const camera = (_a = scene === null || scene === void 0 ? void 0 : scene.activeCamera) !== null && _a !== void 0 ? _a : null;
            if (camera === null) {
                return undefined;
            }
            return {
                fieldOfView: camera.fov,
                aspectRatio: camera.viewport.width / camera.viewport.height,
                zNearPlane: camera.minZ,
                zFarPlane: camera.maxZ,
            };
        };
    }
}

})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=mtx-poll-babylon-js.js.map