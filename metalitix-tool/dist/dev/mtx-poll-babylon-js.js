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

/***/ "./src/lib/mtx-poll-base.ts":
/*!**********************************!*\
  !*** ./src/lib/mtx-poll-base.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MetalitixLoggerBase)
/* harmony export */ });
/* harmony import */ var three_src_math_MathUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/src/math/MathUtils */ "./node_modules/three/src/math/MathUtils.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services */ "./src/services/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./src/types/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
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
            if (this.pollRecords.length > 0 &&
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
            this.sessionId = (0,three_src_math_MathUtils__WEBPACK_IMPORTED_MODULE_4__.generateUUID)();
            this.addSessionStart();
            this.sendPositionLoop(true);
            document.addEventListener('visibilitychange', this.handleVisibilityChange);
        };
        this.pauseSession = () => {
            /** If the session was paused we need to send all our data and stop collecting new items */
            this.forceStopLoop();
            return this.sendPosition(true);
        };
        this.resumeSession = () => __awaiter(this, void 0, void 0, function* () {
            if (Date.now() - this.lastPollTimestamp <= _constants__WEBPACK_IMPORTED_MODULE_1__.MAXIMUM_SESSION_KEEPALIVE_TIME) {
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
        const { pollInterval = _constants__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_INTERVAL_VALUE, apiVersion = 'v2', userMeta = {} } = options;
        this.appKey = appKey;
        this.apiVersion = apiVersion;
        this.userMeta = userMeta;
        this.setPollInterval(pollInterval);
        this.sessionId = null;
        this.previousCameraData = null;
        this.pollRecords = [];
        this.lastPollTimestamp = -1;
        this.nextPoll = -1;
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