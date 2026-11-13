import { activeLocale, compareText, fmtNumber, useImeGuard, useLanguageGeneration } from "@kirocrew/app-sdk";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Component, Fragment as Fragment$1, cloneElement, createContext, createElement, forwardRef, useCallback, useContext, useEffect, useId, useInsertionEffect, useLayoutEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { Check, ChevronDown, Code, Copy, FileText, FoldHorizontal, Folder, FolderOpen, GitBranch, ImageOff, ListFilter, Pencil, Pin, PinOff, Plus, RefreshCw, Settings, Trash2, UnfoldHorizontal, X } from "lucide-react";
import { Clickable, ErrorNotice } from "@kirocrew/app-sdk/ui";
import { useQuery, useQueryClient } from "@tanstack/react-query";
// \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esmMin = (fn, res, err) => () => {
	if (err) throw err[0];
	try {
		return fn && (res = fn(fn = 0)), res;
	} catch (e) {
		throw err = [e], e;
	}
};
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toCommonJS = (mod) => __hasOwnProp.call(mod, "module.exports") ? mod["module.exports"] : __copyProps(__defProp({}, "__esModule", { value: true }), mod);
// node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs
var LayoutGroupContext = createContext({});
// node_modules/framer-motion/dist/es/utils/use-constant.mjs
/**
* Creates a constant value over the lifecycle of a component.
*
* Even if `useMemo` is provided an empty array as its final argument, it doesn't offer
* a guarantee that it won't re-run for performance reasons later on. By using `useConstant`
* you can ensure that initialisers don't execute twice or more.
*/
function useConstant(init) {
	const ref = useRef(null);
	if (ref.current === null) ref.current = init();
	return ref.current;
}
// node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;
// node_modules/framer-motion/dist/es/context/PresenceContext.mjs
/**
* @public
*/
var PresenceContext = /* @__PURE__ */ createContext(null);
// node_modules/motion-utils/dist/es/array.mjs
function addUniqueItem(arr, item) {
	if (arr.indexOf(item) === -1) arr.push(item);
}
function removeItem(arr, item) {
	const index = arr.indexOf(item);
	if (index > -1) arr.splice(index, 1);
}
// node_modules/motion-utils/dist/es/clamp.mjs
var clamp = (min, max, v) => {
	if (v > max) return max;
	if (v < min) return min;
	return v;
};
// node_modules/motion-utils/dist/es/format-error-message.mjs
function formatErrorMessage(message, errorCode) {
	return errorCode ? `${message}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${errorCode}` : message;
}
// node_modules/motion-utils/dist/es/errors.mjs
var warning = () => {};
var invariant = () => {};
if (typeof process !== "undefined" && process.env.NODE_ENV !== "production") {
	warning = (check, message, errorCode) => {
		if (!check && typeof console !== "undefined") console.warn(formatErrorMessage(message, errorCode));
	};
	invariant = (check, message, errorCode) => {
		if (!check) throw new Error(formatErrorMessage(message, errorCode));
	};
}
// node_modules/motion-utils/dist/es/global-config.mjs
var MotionGlobalConfig = {};
// node_modules/motion-utils/dist/es/is-numerical-string.mjs
/**
* Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
*/
var isNumericalString = (v) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(v);
// node_modules/motion-utils/dist/es/is-object.mjs
var isObject = (value) => typeof value === "object" && value !== null;
// node_modules/motion-utils/dist/es/is-zero-value-string.mjs
/**
* Check if the value is a zero value string like "0px" or "0%"
*/
var isZeroValueString = (v) => /^0[^.\s]+$/u.test(v);
// node_modules/motion-utils/dist/es/memo.mjs
/*#__NO_SIDE_EFFECTS__*/
function memo(callback) {
	let result;
	return () => {
		if (result === void 0) result = callback();
		return result;
	};
}
// node_modules/motion-utils/dist/es/noop.mjs
var noop = /* @__NO_SIDE_EFFECTS__ */ (any) => any;
// node_modules/motion-utils/dist/es/pipe.mjs
/**
* Pipe
* Compose other transformers to run linearily
* pipe(min(20), max(40))
* @param  {...functions} transformers
* @return {function}
*/
var pipe = (...transformers) => transformers.reduce((a, b) => (v) => b(a(v)));
// node_modules/motion-utils/dist/es/progress.mjs
var progress = /* @__NO_SIDE_EFFECTS__ */ (from, to, value) => {
	const range = to - from;
	return range ? (value - from) / range : 1;
};
// node_modules/motion-utils/dist/es/subscription-manager.mjs
var SubscriptionManager = class {
	constructor() {
		this.subscriptions = [];
	}
	add(handler) {
		addUniqueItem(this.subscriptions, handler);
		return () => removeItem(this.subscriptions, handler);
	}
	notify(a, b, c) {
		const numSubscriptions = this.subscriptions.length;
		if (!numSubscriptions) return;
		if (numSubscriptions === 1)
 /**
		* If there's only a single handler we can just call it without invoking a loop.
		*/
		this.subscriptions[0](a, b, c);
		else for (let i = 0; i < numSubscriptions; i++) {
			/**
			* Check whether the handler exists before firing as it's possible
			* the subscriptions were modified during this loop running.
			*/
			const handler = this.subscriptions[i];
			handler && handler(a, b, c);
		}
	}
	getSize() {
		return this.subscriptions.length;
	}
	clear() {
		this.subscriptions.length = 0;
	}
};
// node_modules/motion-utils/dist/es/time-conversion.mjs
/**
* Converts seconds to milliseconds
*
* @param seconds - Time in seconds.
* @return milliseconds - Converted time in milliseconds.
*/
var secondsToMilliseconds = /* @__NO_SIDE_EFFECTS__ */ (seconds) => seconds * 1e3;
var millisecondsToSeconds = /* @__NO_SIDE_EFFECTS__ */ (milliseconds) => milliseconds / 1e3;
// node_modules/motion-utils/dist/es/velocity-per-second.mjs
var velocityPerSecond = /* @__NO_SIDE_EFFECTS__ */ (velocity, frameDuration) => frameDuration ? velocity * (1e3 / frameDuration) : 0;
// node_modules/motion-utils/dist/es/warn-once.mjs
var warned = /* @__PURE__ */ new Set();
function warnOnce(condition, message, errorCode) {
	if (condition || warned.has(message)) return;
	console.warn(formatErrorMessage(message, errorCode));
	warned.add(message);
}
// node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs
var calcBezier = (t, a1, a2) => (((1 - 3 * a2 + 3 * a1) * t + (3 * a2 - 6 * a1)) * t + 3 * a1) * t;
var subdivisionPrecision = 1e-7;
var subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
	let currentX;
	let currentT;
	let i = 0;
	do {
		currentT = lowerBound + (upperBound - lowerBound) / 2;
		currentX = calcBezier(currentT, mX1, mX2) - x;
		if (currentX > 0) upperBound = currentT;
		else lowerBound = currentT;
	} while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
	return currentT;
}
/*#__NO_SIDE_EFFECTS__*/
function cubicBezier(mX1, mY1, mX2, mY2) {
	if (mX1 === mY1 && mX2 === mY2) return noop;
	const getTForX = (aX) => binarySubdivide(aX, 0, 1, mX1, mX2);
	return (t) => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}
// node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs
var mirrorEasing = /* @__NO_SIDE_EFFECTS__ */ (easing) => (p) => p <= .5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
// node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs
var reverseEasing = /* @__NO_SIDE_EFFECTS__ */ (easing) => (p) => 1 - easing(1 - p);
// node_modules/motion-utils/dist/es/easing/back.mjs
var backOut = /*@__PURE__*/ cubicBezier(.33, 1.53, .69, .99);
var backIn = /*@__PURE__*/ reverseEasing(backOut);
var backInOut = /*@__PURE__*/ mirrorEasing(backIn);
// node_modules/motion-utils/dist/es/easing/anticipate.mjs
var anticipate = (p) => p >= 1 ? 1 : (p *= 2) < 1 ? .5 * backIn(p) : .5 * (2 - Math.pow(2, -10 * (p - 1)));
// node_modules/motion-utils/dist/es/easing/circ.mjs
var circIn = (p) => 1 - Math.sin(Math.acos(p));
var circOut = /* @__PURE__ */ reverseEasing(circIn);
var circInOut = /* @__PURE__ */ mirrorEasing(circIn);
// node_modules/motion-utils/dist/es/easing/ease.mjs
var easeIn = /*@__PURE__*/ cubicBezier(.42, 0, 1, 1);
var easeOut = /*@__PURE__*/ cubicBezier(0, 0, .58, 1);
var easeInOut = /*@__PURE__*/ cubicBezier(.42, 0, .58, 1);
// node_modules/motion-utils/dist/es/easing/utils/is-easing-array.mjs
var isEasingArray = /* @__NO_SIDE_EFFECTS__ */ (ease) => {
	return Array.isArray(ease) && typeof ease[0] !== "number";
};
// node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs
var isBezierDefinition = /* @__NO_SIDE_EFFECTS__ */ (easing) => Array.isArray(easing) && typeof easing[0] === "number";
// node_modules/motion-utils/dist/es/easing/utils/map.mjs
var easingLookup = {
	linear: noop,
	easeIn,
	easeInOut,
	easeOut,
	circIn,
	circInOut,
	circOut,
	backIn,
	backInOut,
	backOut,
	anticipate
};
var isValidEasing = (easing) => {
	return typeof easing === "string";
};
var easingDefinitionToFunction = (definition) => {
	if (/* @__PURE__ */ isBezierDefinition(definition)) {
		invariant(definition.length === 4, `Cubic bezier arrays must contain four numerical values.`, "cubic-bezier-length");
		const [x1, y1, x2, y2] = definition;
		return /* @__PURE__ */ cubicBezier(x1, y1, x2, y2);
	} else if (isValidEasing(definition)) {
		invariant(easingLookup[definition] !== void 0, `Invalid easing type '${definition}'`, "invalid-easing-type");
		return easingLookup[definition];
	}
	return definition;
};
// node_modules/motion-dom/dist/es/frameloop/order.mjs
var stepsOrder = [
	"setup",
	"read",
	"resolveKeyframes",
	"preUpdate",
	"update",
	"preRender",
	"render",
	"postRender"
];
// node_modules/motion-dom/dist/es/frameloop/render-step.mjs
function createRenderStep(runNextFrame) {
	/**
	* We create and reuse two queues, one to queue jobs for the current frame
	* and one for the next. We reuse to avoid triggering GC after x frames.
	*/
	let thisFrame = /* @__PURE__ */ new Set();
	let nextFrame = /* @__PURE__ */ new Set();
	/**
	* Track whether we're currently processing jobs in this step. This way
	* we can decide whether to schedule new jobs for this frame or next.
	*/
	let isProcessing = false;
	let flushNextFrame = false;
	/**
	* A set of processes which were marked keepAlive when scheduled.
	*/
	const toKeepAlive = /* @__PURE__ */ new WeakSet();
	let latestFrameData = {
		delta: 0,
		timestamp: 0,
		isProcessing: false
	};
	function triggerCallback(callback) {
		if (toKeepAlive.has(callback)) {
			step.schedule(callback);
			runNextFrame();
		}
		callback(latestFrameData);
	}
	const step = {
		/**
		* Schedule a process to run on the next frame.
		*/
		schedule: (callback, keepAlive = false, immediate = false) => {
			const queue = immediate && isProcessing ? thisFrame : nextFrame;
			if (keepAlive) toKeepAlive.add(callback);
			queue.add(callback);
			return callback;
		},
		/**
		* Cancel the provided callback from running on the next frame.
		*/
		cancel: (callback) => {
			nextFrame.delete(callback);
			toKeepAlive.delete(callback);
		},
		/**
		* Execute all schedule callbacks.
		*/
		process: (frameData) => {
			latestFrameData = frameData;
			/**
			* If we're already processing we've probably been triggered by a flushSync
			* inside an existing process. Instead of executing, mark flushNextFrame
			* as true and ensure we flush the following frame at the end of this one.
			*/
			if (isProcessing) {
				flushNextFrame = true;
				return;
			}
			isProcessing = true;
			const prevFrame = thisFrame;
			thisFrame = nextFrame;
			nextFrame = prevFrame;
			thisFrame.forEach(triggerCallback);
			thisFrame.clear();
			isProcessing = false;
			if (flushNextFrame) {
				flushNextFrame = false;
				step.process(frameData);
			}
		}
	};
	return step;
}
// node_modules/motion-dom/dist/es/frameloop/batcher.mjs
var maxElapsed = 40;
function createRenderBatcher(scheduleNextBatch, allowKeepAlive) {
	let runNextFrame = false;
	let useDefaultElapsed = true;
	const state = {
		delta: 0,
		timestamp: 0,
		isProcessing: false
	};
	const flagRunNextFrame = () => runNextFrame = true;
	const steps = stepsOrder.reduce((acc, key) => {
		acc[key] = createRenderStep(flagRunNextFrame);
		return acc;
	}, {});
	const { setup, read, resolveKeyframes, preUpdate, update, preRender, render, postRender } = steps;
	const processBatch = () => {
		const useManualTiming = MotionGlobalConfig.useManualTiming;
		const timestamp = useManualTiming ? state.timestamp : performance.now();
		runNextFrame = false;
		if (!useManualTiming) state.delta = useDefaultElapsed ? 1e3 / 60 : Math.max(Math.min(timestamp - state.timestamp, maxElapsed), 1);
		state.timestamp = timestamp;
		state.isProcessing = true;
		setup.process(state);
		read.process(state);
		resolveKeyframes.process(state);
		preUpdate.process(state);
		update.process(state);
		preRender.process(state);
		render.process(state);
		postRender.process(state);
		state.isProcessing = false;
		if (runNextFrame && allowKeepAlive) {
			useDefaultElapsed = false;
			scheduleNextBatch(processBatch);
		}
	};
	const wake = () => {
		runNextFrame = true;
		useDefaultElapsed = true;
		if (!state.isProcessing) scheduleNextBatch(processBatch);
	};
	const schedule = stepsOrder.reduce((acc, key) => {
		const step = steps[key];
		acc[key] = (process, keepAlive = false, immediate = false) => {
			if (!runNextFrame) wake();
			return step.schedule(process, keepAlive, immediate);
		};
		return acc;
	}, {});
	const cancel = (process) => {
		for (let i = 0; i < stepsOrder.length; i++) steps[stepsOrder[i]].cancel(process);
	};
	return {
		schedule,
		cancel,
		state,
		steps
	};
}
// node_modules/motion-dom/dist/es/frameloop/frame.mjs
var { schedule: frame, cancel: cancelFrame, state: frameData, steps: frameSteps } = /* @__PURE__ */ createRenderBatcher(typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : noop, true);
// node_modules/motion-dom/dist/es/frameloop/sync-time.mjs
var now;
function clearTime() {
	now = void 0;
}
/**
* An eventloop-synchronous alternative to performance.now().
*
* Ensures that time measurements remain consistent within a synchronous context.
* Usually calling performance.now() twice within the same synchronous context
* will return different values which isn't useful for animations when we're usually
* trying to sync animations to the same frame.
*/
var time = {
	now: () => {
		if (now === void 0) time.set(frameData.isProcessing || MotionGlobalConfig.useManualTiming ? frameData.timestamp : performance.now());
		return now;
	},
	set: (newTime) => {
		now = newTime;
		queueMicrotask(clearTime);
	}
};
// node_modules/motion-dom/dist/es/animation/utils/is-css-variable.mjs
var checkStringStartsWith = (token) => (key) => typeof key === "string" && key.startsWith(token);
var isCSSVariableName = /*@__PURE__*/ checkStringStartsWith("--");
var startsAsVariableToken = /*@__PURE__*/ checkStringStartsWith("var(--");
var isCSSVariableToken = (value) => {
	if (!startsAsVariableToken(value)) return false;
	return singleCssVariableRegex.test(value.split("/*")[0].trim());
};
var singleCssVariableRegex = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
/**
* Check if a value contains a CSS variable anywhere (e.g. inside calc()).
* Unlike isCSSVariableToken which checks if the value IS a var() token,
* this checks if the value CONTAINS var() somewhere in the string.
*/
function containsCSSVariable(value) {
	if (typeof value !== "string") return false;
	return value.split("/*")[0].includes("var(--");
}
// node_modules/motion-dom/dist/es/value/types/numbers/index.mjs
var number = {
	test: (v) => typeof v === "number",
	parse: parseFloat,
	transform: (v) => v
};
var alpha = {
	...number,
	transform: (v) => clamp(0, 1, v)
};
var scale = {
	...number,
	default: 1
};
// node_modules/motion-dom/dist/es/value/types/utils/sanitize.mjs
var sanitize$1 = (v) => Math.round(v * 1e5) / 1e5;
// node_modules/motion-dom/dist/es/value/types/utils/float-regex.mjs
var floatRegex = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
// node_modules/motion-dom/dist/es/value/types/utils/is-nullish.mjs
function isNullish(v) {
	return v == null;
}
// node_modules/motion-dom/dist/es/value/types/utils/single-color-regex.mjs
var singleColorRegex = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
// node_modules/motion-dom/dist/es/value/types/color/utils.mjs
/**
* Returns true if the provided string is a color, ie rgba(0,0,0,0) or #000,
* but false if a number or multiple colors
*/
var isColorString = (type, testProp) => (v) => {
	return Boolean(typeof v === "string" && singleColorRegex.test(v) && v.startsWith(type) || testProp && !isNullish(v) && Object.prototype.hasOwnProperty.call(v, testProp));
};
var splitColor = (aName, bName, cName) => (v) => {
	if (typeof v !== "string") return v;
	const [a, b, c, alpha] = v.match(floatRegex);
	return {
		[aName]: parseFloat(a),
		[bName]: parseFloat(b),
		[cName]: parseFloat(c),
		alpha: alpha !== void 0 ? parseFloat(alpha) : 1
	};
};
// node_modules/motion-dom/dist/es/value/types/color/rgba.mjs
var clampRgbUnit = (v) => clamp(0, 255, v);
var rgbUnit = {
	...number,
	transform: (v) => Math.round(clampRgbUnit(v))
};
var rgba = {
	test: /*@__PURE__*/ isColorString("rgb", "red"),
	parse: /*@__PURE__*/ splitColor("red", "green", "blue"),
	transform: ({ red, green, blue, alpha: alpha$1 = 1 }) => "rgba(" + rgbUnit.transform(red) + ", " + rgbUnit.transform(green) + ", " + rgbUnit.transform(blue) + ", " + sanitize$1(alpha.transform(alpha$1)) + ")"
};
// node_modules/motion-dom/dist/es/value/types/color/hex.mjs
function parseHex(v) {
	let r = "";
	let g = "";
	let b = "";
	let a = "";
	if (v.length > 5) {
		r = v.substring(1, 3);
		g = v.substring(3, 5);
		b = v.substring(5, 7);
		a = v.substring(7, 9);
	} else {
		r = v.substring(1, 2);
		g = v.substring(2, 3);
		b = v.substring(3, 4);
		a = v.substring(4, 5);
		r += r;
		g += g;
		b += b;
		a += a;
	}
	return {
		red: parseInt(r, 16),
		green: parseInt(g, 16),
		blue: parseInt(b, 16),
		alpha: a ? parseInt(a, 16) / 255 : 1
	};
}
var hex = {
	test: /*@__PURE__*/ isColorString("#"),
	parse: parseHex,
	transform: rgba.transform
};
// node_modules/motion-dom/dist/es/value/types/numbers/units.mjs
var createUnitType = /* @__NO_SIDE_EFFECTS__ */ (unit) => ({
	test: (v) => typeof v === "string" && v.endsWith(unit) && v.split(" ").length === 1,
	parse: parseFloat,
	transform: (v) => `${v}${unit}`
});
var degrees = /*@__PURE__*/ createUnitType("deg");
var percent = /*@__PURE__*/ createUnitType("%");
var px = /*@__PURE__*/ createUnitType("px");
var vh = /*@__PURE__*/ createUnitType("vh");
var vw = /*@__PURE__*/ createUnitType("vw");
var progressPercentage = /*@__PURE__*/ (() => ({
	...percent,
	parse: (v) => percent.parse(v) / 100,
	transform: (v) => percent.transform(v * 100)
}))();
// node_modules/motion-dom/dist/es/value/types/color/hsla.mjs
var hsla = {
	test: /*@__PURE__*/ isColorString("hsl", "hue"),
	parse: /*@__PURE__*/ splitColor("hue", "saturation", "lightness"),
	transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 }) => {
		return "hsla(" + Math.round(hue) + ", " + percent.transform(sanitize$1(saturation)) + ", " + percent.transform(sanitize$1(lightness)) + ", " + sanitize$1(alpha.transform(alpha$1)) + ")";
	}
};
// node_modules/motion-dom/dist/es/value/types/color/index.mjs
var color = {
	test: (v) => rgba.test(v) || hex.test(v) || hsla.test(v),
	parse: (v) => {
		if (rgba.test(v)) return rgba.parse(v);
		else if (hsla.test(v)) return hsla.parse(v);
		else return hex.parse(v);
	},
	transform: (v) => {
		return typeof v === "string" ? v : v.hasOwnProperty("red") ? rgba.transform(v) : hsla.transform(v);
	},
	getAnimatableNone: (v) => {
		const parsed = color.parse(v);
		parsed.alpha = 0;
		return color.transform(parsed);
	}
};
// node_modules/motion-dom/dist/es/value/types/utils/color-regex.mjs
var colorRegex = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
// node_modules/motion-dom/dist/es/value/types/complex/index.mjs
function test(v) {
	return isNaN(v) && typeof v === "string" && (v.match(floatRegex)?.length || 0) + (v.match(colorRegex)?.length || 0) > 0;
}
var NUMBER_TOKEN = "number";
var COLOR_TOKEN = "color";
var VAR_TOKEN = "var";
var VAR_FUNCTION_TOKEN = "var(";
var SPLIT_TOKEN = "${}";
var complexRegex = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function analyseComplexValue(value) {
	const originalValue = value.toString();
	const values = [];
	const indexes = {
		color: [],
		number: [],
		var: []
	};
	const types = [];
	let i = 0;
	return {
		values,
		split: originalValue.replace(complexRegex, (parsedValue) => {
			if (color.test(parsedValue)) {
				indexes.color.push(i);
				types.push(COLOR_TOKEN);
				values.push(color.parse(parsedValue));
			} else if (parsedValue.startsWith(VAR_FUNCTION_TOKEN)) {
				indexes.var.push(i);
				types.push(VAR_TOKEN);
				values.push(parsedValue);
			} else {
				indexes.number.push(i);
				types.push(NUMBER_TOKEN);
				values.push(parseFloat(parsedValue));
			}
			++i;
			return SPLIT_TOKEN;
		}).split(SPLIT_TOKEN),
		indexes,
		types
	};
}
function parseComplexValue(v) {
	return analyseComplexValue(v).values;
}
function buildTransformer({ split, types }) {
	const numSections = split.length;
	return (v) => {
		let output = "";
		for (let i = 0; i < numSections; i++) {
			output += split[i];
			if (v[i] !== void 0) {
				const type = types[i];
				if (type === NUMBER_TOKEN) output += sanitize$1(v[i]);
				else if (type === COLOR_TOKEN) output += color.transform(v[i]);
				else output += v[i];
			}
		}
		return output;
	};
}
function createTransformer(source) {
	return buildTransformer(analyseComplexValue(source));
}
var convertNumbersToZero = (v) => typeof v === "number" ? 0 : color.test(v) ? color.getAnimatableNone(v) : v;
/**
* Convert a parsed value to its zero equivalent, but preserve numbers
* that act as divisors in CSS calc() expressions.
*
* analyseComplexValue extracts numbers from CSS strings and puts the
* surrounding text into a `split` template array. For example:
*   "calc(var(--gap) / 5)"  →  values: [var(--gap), 5]
*                               split:  ["calc(", " / ", ")"]
*
* When building a zero-equivalent for animation, naively zeroing all
* numbers turns the divisor into 0 → "calc(var(--gap) / 0)" → NaN.
* We detect this by checking whether the text preceding a number
* (split[i]) ends with "/" — the CSS calc division operator.
*/
var convertToZero = (value, splitBefore) => {
	if (typeof value === "number") return splitBefore?.trim().endsWith("/") ? value : 0;
	return convertNumbersToZero(value);
};
function getAnimatableNone$1(v) {
	const info = analyseComplexValue(v);
	return buildTransformer(info)(info.values.map((value, i) => convertToZero(value, info.split[i])));
}
var complex = {
	test,
	parse: parseComplexValue,
	createTransformer,
	getAnimatableNone: getAnimatableNone$1
};
// node_modules/motion-dom/dist/es/value/types/color/hsla-to-rgba.mjs
function hueToRgb(p, q, t) {
	if (t < 0) t += 1;
	if (t > 1) t -= 1;
	if (t < 1 / 6) return p + (q - p) * 6 * t;
	if (t < 1 / 2) return q;
	if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
	return p;
}
function hslaToRgba({ hue, saturation, lightness, alpha }) {
	hue /= 360;
	saturation /= 100;
	lightness /= 100;
	let red = 0;
	let green = 0;
	let blue = 0;
	if (!saturation) red = green = blue = lightness;
	else {
		const q = lightness < .5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
		const p = 2 * lightness - q;
		red = hueToRgb(p, q, hue + 1 / 3);
		green = hueToRgb(p, q, hue);
		blue = hueToRgb(p, q, hue - 1 / 3);
	}
	return {
		red: Math.round(red * 255),
		green: Math.round(green * 255),
		blue: Math.round(blue * 255),
		alpha
	};
}
// node_modules/motion-dom/dist/es/utils/mix/immediate.mjs
function mixImmediate(a, b) {
	return (p) => p > 0 ? b : a;
}
// node_modules/motion-dom/dist/es/utils/mix/number.mjs
var mixNumber$1 = (from, to, progress) => {
	return from + (to - from) * progress;
};
// node_modules/motion-dom/dist/es/utils/mix/color.mjs
var mixLinearColor = (from, to, v) => {
	const fromExpo = from * from;
	const expo = v * (to * to - fromExpo) + fromExpo;
	return expo < 0 ? 0 : Math.sqrt(expo);
};
var colorTypes = [
	hex,
	rgba,
	hsla
];
var getColorType = (v) => colorTypes.find((type) => type.test(v));
function asRGBA(color) {
	const type = getColorType(color);
	warning(Boolean(type), `'${color}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable");
	if (!Boolean(type)) return false;
	let model = type.parse(color);
	if (type === hsla) model = hslaToRgba(model);
	return model;
}
var mixColor = (from, to) => {
	const fromRGBA = asRGBA(from);
	const toRGBA = asRGBA(to);
	if (!fromRGBA || !toRGBA) return mixImmediate(from, to);
	const blended = { ...fromRGBA };
	return (v) => {
		blended.red = mixLinearColor(fromRGBA.red, toRGBA.red, v);
		blended.green = mixLinearColor(fromRGBA.green, toRGBA.green, v);
		blended.blue = mixLinearColor(fromRGBA.blue, toRGBA.blue, v);
		blended.alpha = mixNumber$1(fromRGBA.alpha, toRGBA.alpha, v);
		return rgba.transform(blended);
	};
};
// node_modules/motion-dom/dist/es/utils/mix/visibility.mjs
var invisibleValues = /* @__PURE__ */ new Set(["none", "hidden"]);
/**
* Returns a function that, when provided a progress value between 0 and 1,
* will return the "none" or "hidden" string only when the progress is that of
* the origin or target.
*/
function mixVisibility(origin, target) {
	if (invisibleValues.has(origin)) return (p) => p <= 0 ? origin : target;
	else return (p) => p >= 1 ? target : origin;
}
// node_modules/motion-dom/dist/es/utils/mix/complex.mjs
function mixNumber(a, b) {
	return (p) => mixNumber$1(a, b, p);
}
function getMixer(a) {
	if (typeof a === "number") return mixNumber;
	else if (typeof a === "string") return isCSSVariableToken(a) ? mixImmediate : color.test(a) ? mixColor : mixComplex;
	else if (Array.isArray(a)) return mixArray;
	else if (typeof a === "object") return color.test(a) ? mixColor : mixObject;
	return mixImmediate;
}
function mixArray(a, b) {
	const output = [...a];
	const numValues = output.length;
	const blendValue = a.map((v, i) => getMixer(v)(v, b[i]));
	return (p) => {
		for (let i = 0; i < numValues; i++) output[i] = blendValue[i](p);
		return output;
	};
}
function mixObject(a, b) {
	const output = {
		...a,
		...b
	};
	const blendValue = {};
	for (const key in output) if (a[key] !== void 0 && b[key] !== void 0) blendValue[key] = getMixer(a[key])(a[key], b[key]);
	return (v) => {
		for (const key in blendValue) output[key] = blendValue[key](v);
		return output;
	};
}
function matchOrder(origin, target) {
	const orderedOrigin = [];
	const pointers = {
		color: 0,
		var: 0,
		number: 0
	};
	for (let i = 0; i < target.values.length; i++) {
		const type = target.types[i];
		const originIndex = origin.indexes[type][pointers[type]];
		const originValue = origin.values[originIndex] ?? 0;
		orderedOrigin[i] = originValue;
		pointers[type]++;
	}
	return orderedOrigin;
}
var mixComplex = (origin, target) => {
	const template = complex.createTransformer(target);
	const originStats = analyseComplexValue(origin);
	const targetStats = analyseComplexValue(target);
	if (originStats.indexes.var.length === targetStats.indexes.var.length && originStats.indexes.color.length === targetStats.indexes.color.length && originStats.indexes.number.length >= targetStats.indexes.number.length) {
		if (invisibleValues.has(origin) && !targetStats.values.length || invisibleValues.has(target) && !originStats.values.length) return mixVisibility(origin, target);
		return pipe(mixArray(matchOrder(originStats, targetStats), targetStats.values), template);
	} else {
		warning(true, `Complex values '${origin}' and '${target}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different");
		return mixImmediate(origin, target);
	}
};
// node_modules/motion-dom/dist/es/utils/mix/index.mjs
function mix(from, to, p) {
	if (typeof from === "number" && typeof to === "number" && typeof p === "number") return mixNumber$1(from, to, p);
	return getMixer(from)(from, to);
}
// node_modules/motion-dom/dist/es/animation/drivers/frame.mjs
var frameloopDriver = (update) => {
	const passTimestamp = ({ timestamp }) => update(timestamp);
	return {
		start: (keepAlive = true) => frame.update(passTimestamp, keepAlive),
		stop: () => cancelFrame(passTimestamp),
		/**
		* If we're processing this frame we can use the
		* framelocked timestamp to keep things in sync.
		*/
		now: () => frameData.isProcessing ? frameData.timestamp : time.now()
	};
};
// node_modules/motion-dom/dist/es/animation/waapi/utils/linear.mjs
var generateLinearEasing = (easing, duration, resolution = 10) => {
	let points = "";
	const numPoints = Math.max(Math.round(duration / resolution), 2);
	for (let i = 0; i < numPoints; i++) points += Math.round(easing(i / (numPoints - 1)) * 1e4) / 1e4 + ", ";
	return `linear(${points.substring(0, points.length - 2)})`;
};
// node_modules/motion-dom/dist/es/animation/generators/utils/calc-duration.mjs
/**
* Implement a practical max duration for keyframe generation
* to prevent infinite loops
*/
var maxGeneratorDuration = 2e4;
function calcGeneratorDuration(generator) {
	let duration = 0;
	const timeStep = 50;
	let state = generator.next(duration);
	while (!state.done && duration < 2e4) {
		duration += timeStep;
		state = generator.next(duration);
	}
	return duration >= 2e4 ? Infinity : duration;
}
// node_modules/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs
/**
* Create a progress => progress easing function from a generator.
*/
function createGeneratorEasing(options, scale = 100, createGenerator) {
	const generator = createGenerator({
		...options,
		keyframes: [0, scale]
	});
	const duration = Math.min(calcGeneratorDuration(generator), maxGeneratorDuration);
	return {
		type: "keyframes",
		ease: (progress) => {
			return generator.next(duration * progress).value / scale;
		},
		duration: /* @__PURE__ */ millisecondsToSeconds(duration)
	};
}
// node_modules/motion-dom/dist/es/animation/generators/spring.mjs
var springDefaults = {
	stiffness: 100,
	damping: 10,
	mass: 1,
	velocity: 0,
	duration: 800,
	bounce: .3,
	visualDuration: .3,
	restSpeed: {
		granular: .01,
		default: 2
	},
	restDelta: {
		granular: .005,
		default: .5
	},
	minDuration: .01,
	maxDuration: 10,
	minDamping: .05,
	maxDamping: 1
};
function calcAngularFreq(undampedFreq, dampingRatio) {
	return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}
var rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
	let result = initialGuess;
	for (let i = 1; i < rootIterations; i++) result = result - envelope(result) / derivative(result);
	return result;
}
/**
* This is ported from the Framer implementation of duration-based spring resolution.
*/
var safeMin = .001;
function findSpring({ duration = springDefaults.duration, bounce = springDefaults.bounce, velocity = springDefaults.velocity, mass = springDefaults.mass }) {
	let envelope;
	let derivative;
	warning(duration <= /* @__PURE__ */ secondsToMilliseconds(springDefaults.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
	let dampingRatio = 1 - bounce;
	/**
	* Restrict dampingRatio and duration to within acceptable ranges.
	*/
	dampingRatio = clamp(springDefaults.minDamping, springDefaults.maxDamping, dampingRatio);
	duration = clamp(springDefaults.minDuration, springDefaults.maxDuration, /* @__PURE__ */ millisecondsToSeconds(duration));
	if (dampingRatio < 1) {
		/**
		* Underdamped spring
		*/
		envelope = (undampedFreq) => {
			const exponentialDecay = undampedFreq * dampingRatio;
			const delta = exponentialDecay * duration;
			const a = exponentialDecay - velocity;
			const b = calcAngularFreq(undampedFreq, dampingRatio);
			const c = Math.exp(-delta);
			return safeMin - a / b * c;
		};
		derivative = (undampedFreq) => {
			const delta = undampedFreq * dampingRatio * duration;
			const d = delta * velocity + velocity;
			const e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq, 2) * duration;
			const f = Math.exp(-delta);
			const g = calcAngularFreq(Math.pow(undampedFreq, 2), dampingRatio);
			return (-envelope(undampedFreq) + safeMin > 0 ? -1 : 1) * ((d - e) * f) / g;
		};
	} else {
		/**
		* Critically-damped spring
		*/
		envelope = (undampedFreq) => {
			return -.001 + Math.exp(-undampedFreq * duration) * ((undampedFreq - velocity) * duration + 1);
		};
		derivative = (undampedFreq) => {
			return Math.exp(-undampedFreq * duration) * ((velocity - undampedFreq) * (duration * duration));
		};
	}
	const initialGuess = 5 / duration;
	const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
	duration = /* @__PURE__ */ secondsToMilliseconds(duration);
	if (isNaN(undampedFreq)) return {
		stiffness: springDefaults.stiffness,
		damping: springDefaults.damping,
		duration
	};
	else {
		const stiffness = Math.pow(undampedFreq, 2) * mass;
		return {
			stiffness,
			damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
			duration
		};
	}
}
var durationKeys = ["duration", "bounce"];
var physicsKeys = [
	"stiffness",
	"damping",
	"mass"
];
function isSpringType(options, keys) {
	return keys.some((key) => options[key] !== void 0);
}
function getSpringOptions(options) {
	let springOptions = {
		velocity: springDefaults.velocity,
		stiffness: springDefaults.stiffness,
		damping: springDefaults.damping,
		mass: springDefaults.mass,
		isResolvedFromDuration: false,
		...options
	};
	if (!isSpringType(options, physicsKeys) && isSpringType(options, durationKeys)) {
		springOptions.velocity = 0;
		if (options.visualDuration) {
			const visualDuration = options.visualDuration;
			const root = 2 * Math.PI / (visualDuration * 1.2);
			const stiffness = root * root;
			const damping = 2 * clamp(.05, 1, 1 - (options.bounce || 0)) * Math.sqrt(stiffness);
			springOptions = {
				...springOptions,
				mass: springDefaults.mass,
				stiffness,
				damping
			};
		} else {
			const derived = findSpring({
				...options,
				velocity: 0
			});
			springOptions = {
				...springOptions,
				...derived,
				mass: springDefaults.mass
			};
			springOptions.isResolvedFromDuration = true;
		}
	}
	return springOptions;
}
function spring(optionsOrVisualDuration = springDefaults.visualDuration, bounce = springDefaults.bounce) {
	const options = typeof optionsOrVisualDuration !== "object" ? {
		visualDuration: optionsOrVisualDuration,
		keyframes: [0, 1],
		bounce
	} : optionsOrVisualDuration;
	let { restSpeed, restDelta } = options;
	const origin = options.keyframes[0];
	const target = options.keyframes[options.keyframes.length - 1];
	/**
	* This is the Iterator-spec return value. We ensure it's mutable rather than using a generator
	* to reduce GC during animation.
	*/
	const state = {
		done: false,
		value: origin
	};
	const { stiffness, damping, mass, duration, velocity, isResolvedFromDuration } = getSpringOptions({
		...options,
		velocity: -/* @__PURE__ */ millisecondsToSeconds(options.velocity || 0)
	});
	const initialVelocity = velocity || 0;
	const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
	const initialDelta = target - origin;
	const undampedAngularFreq = /* @__PURE__ */ millisecondsToSeconds(Math.sqrt(stiffness / mass));
	/**
	* If we're working on a granular scale, use smaller defaults for determining
	* when the spring is finished.
	*
	* These defaults have been selected emprically based on what strikes a good
	* ratio between feeling good and finishing as soon as changes are imperceptible.
	*/
	const isGranularScale = Math.abs(initialDelta) < 5;
	restSpeed || (restSpeed = isGranularScale ? springDefaults.restSpeed.granular : springDefaults.restSpeed.default);
	restDelta || (restDelta = isGranularScale ? springDefaults.restDelta.granular : springDefaults.restDelta.default);
	let resolveSpring;
	let resolveVelocity;
	let angularFreq;
	let A;
	let sinCoeff;
	let cosCoeff;
	if (dampingRatio < 1) {
		angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);
		A = (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq;
		resolveSpring = (t) => {
			const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
			return target - envelope * (A * Math.sin(angularFreq * t) + initialDelta * Math.cos(angularFreq * t));
		};
		sinCoeff = dampingRatio * undampedAngularFreq * A + initialDelta * angularFreq;
		cosCoeff = dampingRatio * undampedAngularFreq * initialDelta - A * angularFreq;
		resolveVelocity = (t) => {
			return Math.exp(-dampingRatio * undampedAngularFreq * t) * (sinCoeff * Math.sin(angularFreq * t) + cosCoeff * Math.cos(angularFreq * t));
		};
	} else if (dampingRatio === 1) {
		resolveSpring = (t) => target - Math.exp(-undampedAngularFreq * t) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t);
		const C = initialVelocity + undampedAngularFreq * initialDelta;
		resolveVelocity = (t) => Math.exp(-undampedAngularFreq * t) * (undampedAngularFreq * C * t - initialVelocity);
	} else {
		const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
		resolveSpring = (t) => {
			const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
			const freqForT = Math.min(dampedAngularFreq * t, 300);
			return target - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq;
		};
		const P = (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / dampedAngularFreq;
		const sinhCoeff = dampingRatio * undampedAngularFreq * P - initialDelta * dampedAngularFreq;
		const coshCoeff = dampingRatio * undampedAngularFreq * initialDelta - P * dampedAngularFreq;
		resolveVelocity = (t) => {
			const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
			const freqForT = Math.min(dampedAngularFreq * t, 300);
			return envelope * (sinhCoeff * Math.sinh(freqForT) + coshCoeff * Math.cosh(freqForT));
		};
	}
	const generator = {
		calculatedDuration: isResolvedFromDuration ? duration || null : null,
		velocity: (t) => /* @__PURE__ */ secondsToMilliseconds(resolveVelocity(t)),
		next: (t) => {
			/**
			* For underdamped physics springs we need both position and
			* velocity each tick. Compute shared trig values once to avoid
			* duplicate Math.exp/sin/cos calls on the hot path.
			*/
			if (!isResolvedFromDuration && dampingRatio < 1) {
				const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
				const sin = Math.sin(angularFreq * t);
				const cos = Math.cos(angularFreq * t);
				const current = target - envelope * (A * sin + initialDelta * cos);
				const currentVelocity = /* @__PURE__ */ secondsToMilliseconds(envelope * (sinCoeff * sin + cosCoeff * cos));
				state.done = Math.abs(currentVelocity) <= restSpeed && Math.abs(target - current) <= restDelta;
				state.value = state.done ? target : current;
				return state;
			}
			const current = resolveSpring(t);
			if (!isResolvedFromDuration) {
				const currentVelocity = /* @__PURE__ */ secondsToMilliseconds(resolveVelocity(t));
				state.done = Math.abs(currentVelocity) <= restSpeed && Math.abs(target - current) <= restDelta;
			} else state.done = t >= duration;
			state.value = state.done ? target : current;
			return state;
		},
		toString: () => {
			const calculatedDuration = Math.min(calcGeneratorDuration(generator), maxGeneratorDuration);
			const easing = generateLinearEasing((progress) => generator.next(calculatedDuration * progress).value, calculatedDuration, 30);
			return calculatedDuration + "ms " + easing;
		},
		toTransition: () => {}
	};
	return generator;
}
spring.applyToOptions = (options) => {
	const generatorOptions = createGeneratorEasing(options, 100, spring);
	options.ease = generatorOptions.ease;
	options.duration = /* @__PURE__ */ secondsToMilliseconds(generatorOptions.duration);
	options.type = "keyframes";
	return options;
};
// node_modules/motion-dom/dist/es/animation/generators/utils/velocity.mjs
var velocitySampleDuration = 5;
function getGeneratorVelocity(resolveValue, t, current) {
	const prevT = Math.max(t - velocitySampleDuration, 0);
	return /* @__PURE__ */ velocityPerSecond(current - resolveValue(prevT), t - prevT);
}
// node_modules/motion-dom/dist/es/animation/generators/inertia.mjs
function inertia({ keyframes, velocity = 0, power = .8, timeConstant = 325, bounceDamping = 10, bounceStiffness = 500, modifyTarget, min, max, restDelta = .5, restSpeed }) {
	const origin = keyframes[0];
	const state = {
		done: false,
		value: origin
	};
	const isOutOfBounds = (v) => min !== void 0 && v < min || max !== void 0 && v > max;
	const nearestBoundary = (v) => {
		if (min === void 0) return max;
		if (max === void 0) return min;
		return Math.abs(min - v) < Math.abs(max - v) ? min : max;
	};
	let amplitude = power * velocity;
	const ideal = origin + amplitude;
	const target = modifyTarget === void 0 ? ideal : modifyTarget(ideal);
	/**
	* If the target has changed we need to re-calculate the amplitude, otherwise
	* the animation will start from the wrong position.
	*/
	if (target !== ideal) amplitude = target - origin;
	const calcDelta = (t) => -amplitude * Math.exp(-t / timeConstant);
	const calcLatest = (t) => target + calcDelta(t);
	const applyFriction = (t) => {
		const delta = calcDelta(t);
		const latest = calcLatest(t);
		state.done = Math.abs(delta) <= restDelta;
		state.value = state.done ? target : latest;
	};
	/**
	* Ideally this would resolve for t in a stateless way, we could
	* do that by always precalculating the animation but as we know
	* this will be done anyway we can assume that spring will
	* be discovered during that.
	*/
	let timeReachedBoundary;
	let spring$1;
	const checkCatchBoundary = (t) => {
		if (!isOutOfBounds(state.value)) return;
		timeReachedBoundary = t;
		spring$1 = spring({
			keyframes: [state.value, nearestBoundary(state.value)],
			velocity: getGeneratorVelocity(calcLatest, t, state.value),
			damping: bounceDamping,
			stiffness: bounceStiffness,
			restDelta,
			restSpeed
		});
	};
	checkCatchBoundary(0);
	return {
		calculatedDuration: null,
		next: (t) => {
			/**
			* We need to resolve the friction to figure out if we need a
			* spring but we don't want to do this twice per frame. So here
			* we flag if we updated for this frame and later if we did
			* we can skip doing it again.
			*/
			let hasUpdatedFrame = false;
			if (!spring$1 && timeReachedBoundary === void 0) {
				hasUpdatedFrame = true;
				applyFriction(t);
				checkCatchBoundary(t);
			}
			/**
			* If we have a spring and the provided t is beyond the moment the friction
			* animation crossed the min/max boundary, use the spring.
			*/
			if (timeReachedBoundary !== void 0 && t >= timeReachedBoundary) return spring$1.next(t - timeReachedBoundary);
			else {
				!hasUpdatedFrame && applyFriction(t);
				return state;
			}
		}
	};
}
// node_modules/motion-dom/dist/es/utils/interpolate.mjs
function createMixers(output, ease, customMixer) {
	const mixers = [];
	const mixerFactory = customMixer || MotionGlobalConfig.mix || mix;
	const numMixers = output.length - 1;
	for (let i = 0; i < numMixers; i++) {
		let mixer = mixerFactory(output[i], output[i + 1]);
		if (ease) mixer = pipe(Array.isArray(ease) ? ease[i] || noop : ease, mixer);
		mixers.push(mixer);
	}
	return mixers;
}
/**
* Create a function that maps from a numerical input array to a generic output array.
*
* Accepts:
*   - Numbers
*   - Colors (hex, hsl, hsla, rgb, rgba)
*   - Complex (combinations of one or more numbers or strings)
*
* ```jsx
* const mixColor = interpolate([0, 1], ['#fff', '#000'])
*
* mixColor(0.5) // 'rgba(128, 128, 128, 1)'
* ```
*
* TODO Revisit this approach once we've moved to data models for values,
* probably not needed to pregenerate mixer functions.
*
* @public
*/
function interpolate(input, output, { clamp: isClamp = true, ease, mixer } = {}) {
	const inputLength = input.length;
	invariant(inputLength === output.length, "Both input and output ranges must be the same length", "range-length");
	/**
	* If we're only provided a single input, we can just make a function
	* that returns the output.
	*/
	if (inputLength === 1) return () => output[0];
	if (inputLength === 2 && output[0] === output[1]) return () => output[1];
	const isZeroDeltaRange = input[0] === input[1];
	if (input[0] > input[inputLength - 1]) {
		input = [...input].reverse();
		output = [...output].reverse();
	}
	const mixers = createMixers(output, ease, mixer);
	const numMixers = mixers.length;
	const interpolator = (v) => {
		if (isZeroDeltaRange && v < input[0]) return output[0];
		let i = 0;
		if (numMixers > 1) {
			for (; i < input.length - 2; i++) if (v < input[i + 1]) break;
		}
		const progressInRange = /* @__PURE__ */ progress(input[i], input[i + 1], v);
		return mixers[i](progressInRange);
	};
	return isClamp ? (v) => interpolator(clamp(input[0], input[inputLength - 1], v)) : interpolator;
}
// node_modules/motion-dom/dist/es/animation/keyframes/offsets/fill.mjs
function fillOffset(offset, remaining) {
	const min = offset[offset.length - 1];
	for (let i = 1; i <= remaining; i++) {
		const offsetProgress = /* @__PURE__ */ progress(0, remaining, i);
		offset.push(mixNumber$1(min, 1, offsetProgress));
	}
}
// node_modules/motion-dom/dist/es/animation/keyframes/offsets/default.mjs
function defaultOffset(arr) {
	const offset = [0];
	fillOffset(offset, arr.length - 1);
	return offset;
}
// node_modules/motion-dom/dist/es/animation/keyframes/offsets/time.mjs
function convertOffsetToTimes(offset, duration) {
	return offset.map((o) => o * duration);
}
// node_modules/motion-dom/dist/es/animation/generators/keyframes.mjs
function defaultEasing(values, easing) {
	return values.map(() => easing || easeInOut).splice(0, values.length - 1);
}
function keyframes({ duration = 300, keyframes: keyframeValues, times, ease = "easeInOut" }) {
	/**
	* Easing functions can be externally defined as strings. Here we convert them
	* into actual functions.
	*/
	const easingFunctions = /* @__PURE__ */ isEasingArray(ease) ? ease.map(easingDefinitionToFunction) : easingDefinitionToFunction(ease);
	/**
	* This is the Iterator-spec return value. We ensure it's mutable rather than using a generator
	* to reduce GC during animation.
	*/
	const state = {
		done: false,
		value: keyframeValues[0]
	};
	const mapTimeToKeyframe = interpolate(convertOffsetToTimes(times && times.length === keyframeValues.length ? times : defaultOffset(keyframeValues), duration), keyframeValues, { ease: Array.isArray(easingFunctions) ? easingFunctions : defaultEasing(keyframeValues, easingFunctions) });
	return {
		calculatedDuration: duration,
		next: (t) => {
			state.value = mapTimeToKeyframe(t);
			state.done = t >= duration;
			return state;
		}
	};
}
// node_modules/motion-dom/dist/es/animation/keyframes/get-final.mjs
var isNotNull = (value) => value !== null;
function getFinalKeyframe(keyframes, { repeat, repeatType = "loop" }, finalKeyframe, speed = 1) {
	const resolvedKeyframes = keyframes.filter(isNotNull);
	const index = speed < 0 || repeat && repeatType !== "loop" && repeat % 2 === 1 ? 0 : resolvedKeyframes.length - 1;
	return !index || finalKeyframe === void 0 ? resolvedKeyframes[index] : finalKeyframe;
}
// node_modules/motion-dom/dist/es/animation/utils/replace-transition-type.mjs
var transitionTypeMap = {
	decay: inertia,
	inertia,
	tween: keyframes,
	keyframes,
	spring
};
function replaceTransitionType(transition) {
	if (typeof transition.type === "string") transition.type = transitionTypeMap[transition.type];
}
// node_modules/motion-dom/dist/es/animation/utils/WithPromise.mjs
var WithPromise = class {
	constructor() {
		this.updateFinished();
	}
	get finished() {
		return this._finished;
	}
	updateFinished() {
		this._finished = new Promise((resolve) => {
			this.resolve = resolve;
		});
	}
	notifyFinished() {
		this.resolve();
	}
	/**
	* Allows the animation to be awaited.
	*
	* @deprecated Use `finished` instead.
	*/
	then(onResolve, onReject) {
		return this.finished.then(onResolve, onReject);
	}
};
// node_modules/motion-dom/dist/es/animation/JSAnimation.mjs
var percentToProgress = (percent) => percent / 100;
var JSAnimation = class extends WithPromise {
	constructor(options) {
		super();
		this.state = "idle";
		this.startTime = null;
		this.isStopped = false;
		/**
		* The current time of the animation.
		*/
		this.currentTime = 0;
		/**
		* The time at which the animation was paused.
		*/
		this.holdTime = null;
		/**
		* Playback speed as a factor. 0 would be stopped, -1 reverse and 2 double speed.
		*/
		this.playbackSpeed = 1;
		/**
		* Reusable state object for the delay phase to avoid
		* allocating a new object every frame.
		*/
		this.delayState = {
			done: false,
			value: void 0
		};
		/**
		* This method is bound to the instance to fix a pattern where
		* animation.stop is returned as a reference from a useEffect.
		*/
		this.stop = () => {
			const { motionValue } = this.options;
			if (motionValue && motionValue.updatedAt !== time.now()) this.tick(time.now());
			this.isStopped = true;
			if (this.state === "idle") return;
			this.teardown();
			this.options.onStop?.();
		};
		this.options = options;
		this.initAnimation();
		this.play();
		if (options.autoplay === false) this.pause();
	}
	initAnimation() {
		const { options } = this;
		replaceTransitionType(options);
		const { type = keyframes, repeat = 0, repeatDelay = 0, repeatType, velocity = 0 } = options;
		let { keyframes: keyframes$1 } = options;
		const generatorFactory = type || keyframes;
		if (process.env.NODE_ENV !== "production" && generatorFactory !== keyframes) invariant(keyframes$1.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${keyframes$1}`, "spring-two-frames");
		if (generatorFactory !== keyframes && typeof keyframes$1[0] !== "number") {
			this.mixKeyframes = pipe(percentToProgress, mix(keyframes$1[0], keyframes$1[1]));
			keyframes$1 = [0, 100];
		}
		const generator = generatorFactory({
			...options,
			keyframes: keyframes$1
		});
		/**
		* If we have a mirror repeat type we need to create a second generator that outputs the
		* mirrored (not reversed) animation and later ping pong between the two generators.
		*/
		if (repeatType === "mirror") this.mirroredGenerator = generatorFactory({
			...options,
			keyframes: [...keyframes$1].reverse(),
			velocity: -velocity
		});
		/**
		* If duration is undefined and we have repeat options,
		* we need to calculate a duration from the generator.
		*
		* We set it to the generator itself to cache the duration.
		* Any timeline resolver will need to have already precalculated
		* the duration by this step.
		*/
		if (generator.calculatedDuration === null) generator.calculatedDuration = calcGeneratorDuration(generator);
		const { calculatedDuration } = generator;
		this.calculatedDuration = calculatedDuration;
		this.resolvedDuration = calculatedDuration + repeatDelay;
		this.totalDuration = this.resolvedDuration * (repeat + 1) - repeatDelay;
		this.generator = generator;
	}
	updateTime(timestamp) {
		const animationTime = Math.round(timestamp - this.startTime) * this.playbackSpeed;
		if (this.holdTime !== null) this.currentTime = this.holdTime;
		else this.currentTime = animationTime;
	}
	tick(timestamp, sample = false) {
		const { generator, totalDuration, mixKeyframes, mirroredGenerator, resolvedDuration, calculatedDuration } = this;
		if (this.startTime === null) return generator.next(0);
		const { delay = 0, keyframes, repeat, repeatType, repeatDelay, type, onUpdate, finalKeyframe } = this.options;
		/**
		* requestAnimationFrame timestamps can come through as lower than
		* the startTime as set by performance.now(). Here we prevent this,
		* though in the future it could be possible to make setting startTime
		* a pending operation that gets resolved here.
		*/
		if (this.speed > 0) this.startTime = Math.min(this.startTime, timestamp);
		else if (this.speed < 0) this.startTime = Math.min(timestamp - totalDuration / this.speed, this.startTime);
		if (sample) this.currentTime = timestamp;
		else this.updateTime(timestamp);
		const timeWithoutDelay = this.currentTime - delay * (this.playbackSpeed >= 0 ? 1 : -1);
		const isInDelayPhase = this.playbackSpeed >= 0 ? timeWithoutDelay < 0 : timeWithoutDelay > totalDuration;
		this.currentTime = Math.max(timeWithoutDelay, 0);
		if (this.state === "finished" && this.holdTime === null) this.currentTime = totalDuration;
		let elapsed = this.currentTime;
		let frameGenerator = generator;
		if (repeat) {
			/**
			* Get the current progress (0-1) of the animation. If t is >
			* than duration we'll get values like 2.5 (midway through the
			* third iteration)
			*/
			const progress = Math.min(this.currentTime, totalDuration) / resolvedDuration;
			/**
			* Get the current iteration (0 indexed). For instance the floor of
			* 2.5 is 2.
			*/
			let currentIteration = Math.floor(progress);
			/**
			* Get the current progress of the iteration by taking the remainder
			* so 2.5 is 0.5 through iteration 2
			*/
			let iterationProgress = progress % 1;
			/**
			* If iteration progress is 1 we count that as the end
			* of the previous iteration.
			*/
			if (!iterationProgress && progress >= 1) iterationProgress = 1;
			iterationProgress === 1 && currentIteration--;
			currentIteration = Math.min(currentIteration, repeat + 1);
			if (Boolean(currentIteration % 2)) {
				if (repeatType === "reverse") {
					iterationProgress = 1 - iterationProgress;
					if (repeatDelay) iterationProgress -= repeatDelay / resolvedDuration;
				} else if (repeatType === "mirror") frameGenerator = mirroredGenerator;
			}
			elapsed = clamp(0, 1, iterationProgress) * resolvedDuration;
		}
		/**
		* If we're in negative time, set state as the initial keyframe.
		* This prevents delay: x, duration: 0 animations from finishing
		* instantly.
		*/
		let state;
		if (isInDelayPhase) {
			this.delayState.value = keyframes[0];
			state = this.delayState;
		} else state = frameGenerator.next(elapsed);
		if (mixKeyframes && !isInDelayPhase) state.value = mixKeyframes(state.value);
		let { done } = state;
		if (!isInDelayPhase && calculatedDuration !== null) done = this.playbackSpeed >= 0 ? this.currentTime >= totalDuration : this.currentTime <= 0;
		const isAnimationFinished = this.holdTime === null && (this.state === "finished" || this.state === "running" && done);
		if (isAnimationFinished && type !== inertia) state.value = getFinalKeyframe(keyframes, this.options, finalKeyframe, this.speed);
		if (onUpdate) onUpdate(state.value);
		if (isAnimationFinished) this.finish();
		return state;
	}
	/**
	* Allows the returned animation to be awaited or promise-chained. Currently
	* resolves when the animation finishes at all but in a future update could/should
	* reject if its cancels.
	*/
	then(resolve, reject) {
		return this.finished.then(resolve, reject);
	}
	get duration() {
		return /* @__PURE__ */ millisecondsToSeconds(this.calculatedDuration);
	}
	get iterationDuration() {
		const { delay = 0 } = this.options || {};
		return this.duration + /* @__PURE__ */ millisecondsToSeconds(delay);
	}
	get time() {
		return /* @__PURE__ */ millisecondsToSeconds(this.currentTime);
	}
	set time(newTime) {
		newTime = /* @__PURE__ */ secondsToMilliseconds(newTime);
		this.currentTime = newTime;
		if (this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0) this.holdTime = newTime;
		else if (this.driver) this.startTime = this.driver.now() - newTime / this.playbackSpeed;
		if (this.driver) this.driver.start(false);
		else {
			this.startTime = 0;
			this.state = "paused";
			this.holdTime = newTime;
			this.tick(newTime);
		}
	}
	/**
	* Returns the generator's velocity at the current time in units/second.
	* Uses the analytical derivative when available (springs), avoiding
	* the MotionValue's frame-dependent velocity estimation.
	*/
	getGeneratorVelocity() {
		const t = this.currentTime;
		if (t <= 0) return this.options.velocity || 0;
		if (this.generator.velocity) return this.generator.velocity(t);
		const current = this.generator.next(t).value;
		return getGeneratorVelocity((s) => this.generator.next(s).value, t, current);
	}
	get speed() {
		return this.playbackSpeed;
	}
	set speed(newSpeed) {
		const hasChanged = this.playbackSpeed !== newSpeed;
		if (hasChanged && this.driver) this.updateTime(time.now());
		this.playbackSpeed = newSpeed;
		if (hasChanged && this.driver) this.time = /* @__PURE__ */ millisecondsToSeconds(this.currentTime);
	}
	play() {
		if (this.isStopped) return;
		const { driver = frameloopDriver, startTime } = this.options;
		if (!this.driver) this.driver = driver((timestamp) => this.tick(timestamp));
		this.options.onPlay?.();
		const now = this.driver.now();
		if (this.state === "finished") {
			this.updateFinished();
			this.startTime = now;
		} else if (this.holdTime !== null) this.startTime = now - this.holdTime;
		else if (!this.startTime) this.startTime = startTime ?? now;
		if (this.state === "finished" && this.speed < 0) this.startTime += this.calculatedDuration;
		this.holdTime = null;
		/**
		* Set playState to running only after we've used it in
		* the previous logic.
		*/
		this.state = "running";
		this.driver.start();
	}
	pause() {
		this.state = "paused";
		this.updateTime(time.now());
		this.holdTime = this.currentTime;
	}
	complete() {
		if (this.state !== "running") this.play();
		this.state = "finished";
		this.holdTime = null;
	}
	finish() {
		this.notifyFinished();
		this.teardown();
		this.state = "finished";
		this.options.onComplete?.();
	}
	cancel() {
		this.holdTime = null;
		this.startTime = 0;
		this.tick(0);
		this.teardown();
		this.options.onCancel?.();
	}
	teardown() {
		this.state = "idle";
		this.stopDriver();
		this.startTime = this.holdTime = null;
	}
	stopDriver() {
		if (!this.driver) return;
		this.driver.stop();
		this.driver = void 0;
	}
	sample(sampleTime) {
		this.startTime = 0;
		return this.tick(sampleTime, true);
	}
	attachTimeline(timeline) {
		if (this.options.allowFlatten) {
			this.options.type = "keyframes";
			this.options.ease = "linear";
			this.initAnimation();
		}
		this.driver?.stop();
		return timeline.observe(this);
	}
};
// node_modules/motion-dom/dist/es/animation/keyframes/utils/fill-wildcards.mjs
function fillWildcards(keyframes) {
	for (let i = 1; i < keyframes.length; i++) keyframes[i] ?? (keyframes[i] = keyframes[i - 1]);
}
// node_modules/motion-dom/dist/es/render/dom/parse-transform.mjs
var radToDeg = (rad) => rad * 180 / Math.PI;
var rotate = (v) => {
	return rebaseAngle(radToDeg(Math.atan2(v[1], v[0])));
};
var matrix2dParsers = {
	x: 4,
	y: 5,
	translateX: 4,
	translateY: 5,
	scaleX: 0,
	scaleY: 3,
	scale: (v) => (Math.abs(v[0]) + Math.abs(v[3])) / 2,
	rotate,
	rotateZ: rotate,
	skewX: (v) => radToDeg(Math.atan(v[1])),
	skewY: (v) => radToDeg(Math.atan(v[2])),
	skew: (v) => (Math.abs(v[1]) + Math.abs(v[2])) / 2
};
var rebaseAngle = (angle) => {
	angle = angle % 360;
	if (angle < 0) angle += 360;
	return angle;
};
var rotateZ = rotate;
var scaleX = (v) => Math.sqrt(v[0] * v[0] + v[1] * v[1]);
var scaleY = (v) => Math.sqrt(v[4] * v[4] + v[5] * v[5]);
var matrix3dParsers = {
	x: 12,
	y: 13,
	z: 14,
	translateX: 12,
	translateY: 13,
	translateZ: 14,
	scaleX,
	scaleY,
	scale: (v) => (scaleX(v) + scaleY(v)) / 2,
	rotateX: (v) => rebaseAngle(radToDeg(Math.atan2(v[6], v[5]))),
	rotateY: (v) => rebaseAngle(radToDeg(Math.atan2(-v[2], v[0]))),
	rotateZ,
	rotate: rotateZ,
	skewX: (v) => radToDeg(Math.atan(v[4])),
	skewY: (v) => radToDeg(Math.atan(v[1])),
	skew: (v) => (Math.abs(v[1]) + Math.abs(v[4])) / 2
};
function defaultTransformValue(name) {
	return name.includes("scale") ? 1 : 0;
}
function parseValueFromTransform(transform, name) {
	if (!transform || transform === "none") return defaultTransformValue(name);
	const matrix3dMatch = transform.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
	let parsers;
	let match;
	if (matrix3dMatch) {
		parsers = matrix3dParsers;
		match = matrix3dMatch;
	} else {
		const matrix2dMatch = transform.match(/^matrix\(([-\d.e\s,]+)\)$/u);
		parsers = matrix2dParsers;
		match = matrix2dMatch;
	}
	if (!match) return defaultTransformValue(name);
	const valueParser = parsers[name];
	const values = match[1].split(",").map(convertTransformToNumber);
	return typeof valueParser === "function" ? valueParser(values) : values[valueParser];
}
var readTransformValue = (instance, name) => {
	const { transform = "none" } = getComputedStyle(instance);
	return parseValueFromTransform(transform, name);
};
function convertTransformToNumber(value) {
	return parseFloat(value.trim());
}
// node_modules/motion-dom/dist/es/render/utils/keys-transform.mjs
/**
* Generate a list of every possible transform key.
*/
var transformPropOrder = [
	"transformPerspective",
	"x",
	"y",
	"z",
	"translateX",
	"translateY",
	"translateZ",
	"scale",
	"scaleX",
	"scaleY",
	"rotate",
	"rotateX",
	"rotateY",
	"rotateZ",
	"skew",
	"skewX",
	"skewY"
];
/**
* A quick lookup for transform props.
*
* `pathRotation` is a transform for routing purposes (skipped from raw
* style application, wired to the transform composite, flags transform
* dirty) but is intentionally NOT in `transformPropOrder` — it is
* composed onto `rotate` at the build sites, not serialized in its own
* slot, and must stay out of the order-array consumers (parse-transform,
* unit-conversion, keys-position).
*/
var transformProps = /*@__PURE__*/ (() => /* @__PURE__ */ new Set([...transformPropOrder, "pathRotation"]))();
// node_modules/motion-dom/dist/es/animation/keyframes/utils/unit-conversion.mjs
var isNumOrPxType = (v) => v === number || v === px;
var transformKeys = /* @__PURE__ */ new Set([
	"x",
	"y",
	"z"
]);
var nonTranslationalTransformKeys = transformPropOrder.filter((key) => !transformKeys.has(key));
function removeNonTranslationalTransform(visualElement) {
	const removedTransforms = [];
	nonTranslationalTransformKeys.forEach((key) => {
		const value = visualElement.getValue(key);
		if (value !== void 0) {
			removedTransforms.push([key, value.get()]);
			value.set(key.startsWith("scale") ? 1 : 0);
		}
	});
	return removedTransforms;
}
var positionalValues = {
	width: ({ x }, { paddingLeft = "0", paddingRight = "0", boxSizing }) => {
		const width = x.max - x.min;
		return boxSizing === "border-box" ? width : width - parseFloat(paddingLeft) - parseFloat(paddingRight);
	},
	height: ({ y }, { paddingTop = "0", paddingBottom = "0", boxSizing }) => {
		const height = y.max - y.min;
		return boxSizing === "border-box" ? height : height - parseFloat(paddingTop) - parseFloat(paddingBottom);
	},
	top: (_bbox, { top }) => parseFloat(top),
	left: (_bbox, { left }) => parseFloat(left),
	bottom: ({ y }, { top }) => parseFloat(top) + (y.max - y.min),
	right: ({ x }, { left }) => parseFloat(left) + (x.max - x.min),
	x: (_bbox, { transform }) => parseValueFromTransform(transform, "x"),
	y: (_bbox, { transform }) => parseValueFromTransform(transform, "y")
};
positionalValues.translateX = positionalValues.x;
positionalValues.translateY = positionalValues.y;
// node_modules/motion-dom/dist/es/animation/keyframes/KeyframesResolver.mjs
var toResolve = /* @__PURE__ */ new Set();
var isScheduled = false;
var anyNeedsMeasurement = false;
var isForced = false;
function measureAllKeyframes() {
	if (anyNeedsMeasurement) {
		const resolversToMeasure = Array.from(toResolve).filter((resolver) => resolver.needsMeasurement);
		const elementsToMeasure = new Set(resolversToMeasure.map((resolver) => resolver.element));
		const transformsToRestore = /* @__PURE__ */ new Map();
		/**
		* Write pass
		* If we're measuring elements we want to remove bounding box-changing transforms.
		*/
		elementsToMeasure.forEach((element) => {
			const removedTransforms = removeNonTranslationalTransform(element);
			if (!removedTransforms.length) return;
			transformsToRestore.set(element, removedTransforms);
			element.render();
		});
		resolversToMeasure.forEach((resolver) => resolver.measureInitialState());
		elementsToMeasure.forEach((element) => {
			element.render();
			const restore = transformsToRestore.get(element);
			if (restore) restore.forEach(([key, value]) => {
				element.getValue(key)?.set(value);
			});
		});
		resolversToMeasure.forEach((resolver) => resolver.measureEndState());
		resolversToMeasure.forEach((resolver) => {
			if (resolver.suspendedScrollY !== void 0) window.scrollTo(0, resolver.suspendedScrollY);
		});
	}
	anyNeedsMeasurement = false;
	isScheduled = false;
	toResolve.forEach((resolver) => resolver.complete(isForced));
	toResolve.clear();
}
function readAllKeyframes() {
	toResolve.forEach((resolver) => {
		resolver.readKeyframes();
		if (resolver.needsMeasurement) anyNeedsMeasurement = true;
	});
}
function flushKeyframeResolvers() {
	isForced = true;
	readAllKeyframes();
	measureAllKeyframes();
	isForced = false;
}
var KeyframeResolver = class {
	constructor(unresolvedKeyframes, onComplete, name, motionValue, element, isAsync = false) {
		this.state = "pending";
		/**
		* Track whether this resolver is async. If it is, it'll be added to the
		* resolver queue and flushed in the next frame. Resolvers that aren't going
		* to trigger read/write thrashing don't need to be async.
		*/
		this.isAsync = false;
		/**
		* Track whether this resolver needs to perform a measurement
		* to resolve its keyframes.
		*/
		this.needsMeasurement = false;
		this.unresolvedKeyframes = [...unresolvedKeyframes];
		this.onComplete = onComplete;
		this.name = name;
		this.motionValue = motionValue;
		this.element = element;
		this.isAsync = isAsync;
	}
	scheduleResolve() {
		this.state = "scheduled";
		if (this.isAsync) {
			toResolve.add(this);
			if (!isScheduled) {
				isScheduled = true;
				frame.read(readAllKeyframes);
				frame.resolveKeyframes(measureAllKeyframes);
			}
		} else {
			this.readKeyframes();
			this.complete();
		}
	}
	readKeyframes() {
		const { unresolvedKeyframes, name, element, motionValue } = this;
		if (unresolvedKeyframes[0] === null) {
			const currentValue = motionValue?.get();
			const finalKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
			if (currentValue !== void 0) unresolvedKeyframes[0] = currentValue;
			else if (element && name) {
				const valueAsRead = element.readValue(name, finalKeyframe);
				if (valueAsRead !== void 0 && valueAsRead !== null) unresolvedKeyframes[0] = valueAsRead;
			}
			if (unresolvedKeyframes[0] === void 0) unresolvedKeyframes[0] = finalKeyframe;
			if (motionValue && currentValue === void 0) motionValue.set(unresolvedKeyframes[0]);
		}
		fillWildcards(unresolvedKeyframes);
	}
	setFinalKeyframe() {}
	measureInitialState() {}
	renderEndStyles() {}
	measureEndState() {}
	complete(isForcedComplete = false) {
		this.state = "complete";
		this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, isForcedComplete);
		toResolve.delete(this);
	}
	cancel() {
		if (this.state === "scheduled") {
			toResolve.delete(this);
			this.state = "pending";
		}
	}
	resume() {
		if (this.state === "pending") this.scheduleResolve();
	}
};
// node_modules/motion-dom/dist/es/render/dom/is-css-var.mjs
var isCSSVar = (name) => name.startsWith("--");
// node_modules/motion-dom/dist/es/render/dom/style-set.mjs
function setStyle(element, name, value) {
	isCSSVar(name) ? element.style.setProperty(name, value) : element.style[name] = value;
}
// node_modules/motion-dom/dist/es/utils/supports/flags.mjs
/**
* Add the ability for test suites to manually set support flags
* to better test more environments.
*/
var supportsFlags = {};
// node_modules/motion-dom/dist/es/utils/supports/memo.mjs
function memoSupports(callback, supportsFlag) {
	const memoized = /* @__PURE__ */ memo(callback);
	return () => supportsFlags[supportsFlag] ?? memoized();
}
// node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs
var supportsScrollTimeline = /* @__PURE__ */ memoSupports(() => window.ScrollTimeline !== void 0, "scrollTimeline");
// node_modules/motion-dom/dist/es/utils/supports/linear-easing.mjs
var supportsLinearEasing = /*@__PURE__*/ memoSupports(() => {
	try {
		document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
	} catch (e) {
		return false;
	}
	return true;
}, "linearEasing");
// node_modules/motion-dom/dist/es/animation/waapi/easing/cubic-bezier.mjs
var cubicBezierAsString = ([a, b, c, d]) => `cubic-bezier(${a}, ${b}, ${c}, ${d})`;
// node_modules/motion-dom/dist/es/animation/waapi/easing/supported.mjs
var supportedWaapiEasing = {
	linear: "linear",
	ease: "ease",
	easeIn: "ease-in",
	easeOut: "ease-out",
	easeInOut: "ease-in-out",
	circIn: /*@__PURE__*/ cubicBezierAsString([
		0,
		.65,
		.55,
		1
	]),
	circOut: /*@__PURE__*/ cubicBezierAsString([
		.55,
		0,
		1,
		.45
	]),
	backIn: /*@__PURE__*/ cubicBezierAsString([
		.31,
		.01,
		.66,
		-.59
	]),
	backOut: /*@__PURE__*/ cubicBezierAsString([
		.33,
		1.53,
		.69,
		.99
	])
};
// node_modules/motion-dom/dist/es/animation/waapi/easing/map-easing.mjs
function mapEasingToNativeEasing(easing, duration) {
	if (!easing) return;
	else if (typeof easing === "function") return supportsLinearEasing() ? generateLinearEasing(easing, duration) : "ease-out";
	else if (/* @__PURE__ */ isBezierDefinition(easing)) return cubicBezierAsString(easing);
	else if (Array.isArray(easing)) return easing.map((segmentEasing) => mapEasingToNativeEasing(segmentEasing, duration) || supportedWaapiEasing.easeOut);
	else return supportedWaapiEasing[easing];
}
// node_modules/motion-dom/dist/es/animation/waapi/start-waapi-animation.mjs
function startWaapiAnimation(element, valueName, keyframes, { delay = 0, duration = 300, repeat = 0, repeatType = "loop", ease = "easeOut", times } = {}, pseudoElement = void 0) {
	const keyframeOptions = { [valueName]: keyframes };
	if (times) keyframeOptions.offset = times;
	const easing = mapEasingToNativeEasing(ease, duration);
	/**
	* If this is an easing array, apply to keyframes, not animation as a whole
	*/
	if (Array.isArray(easing)) keyframeOptions.easing = easing;
	const options = {
		delay,
		duration,
		easing: !Array.isArray(easing) ? easing : "linear",
		fill: "both",
		iterations: repeat + 1,
		direction: repeatType === "reverse" ? "alternate" : "normal"
	};
	if (pseudoElement) options.pseudoElement = pseudoElement;
	return element.animate(keyframeOptions, options);
}
// node_modules/motion-dom/dist/es/animation/generators/utils/is-generator.mjs
function isGenerator(type) {
	return typeof type === "function" && "applyToOptions" in type;
}
// node_modules/motion-dom/dist/es/animation/waapi/utils/apply-generator.mjs
function applyGeneratorOptions({ type, ...options }) {
	if (isGenerator(type) && supportsLinearEasing()) return type.applyToOptions(options);
	else {
		options.duration ?? (options.duration = 300);
		options.ease ?? (options.ease = "easeOut");
	}
	return options;
}
// node_modules/motion-dom/dist/es/animation/NativeAnimation.mjs
/**
* NativeAnimation implements AnimationPlaybackControls for the browser's Web Animations API.
*/
var NativeAnimation = class extends WithPromise {
	constructor(options) {
		super();
		this.finishedTime = null;
		this.isStopped = false;
		/**
		* Tracks a manually-set start time that takes precedence over WAAPI's
		* dynamic startTime. This is cleared when play() or time setter is called,
		* allowing WAAPI to take over timing.
		*/
		this.manualStartTime = null;
		if (!options) return;
		const { element, name, keyframes, pseudoElement, allowFlatten = false, finalKeyframe, onComplete } = options;
		this.isPseudoElement = Boolean(pseudoElement);
		this.allowFlatten = allowFlatten;
		this.options = options;
		invariant(typeof options.type !== "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
		const transition = applyGeneratorOptions(options);
		this.animation = startWaapiAnimation(element, name, keyframes, transition, pseudoElement);
		if (transition.autoplay === false) this.animation.pause();
		this.animation.onfinish = () => {
			this.finishedTime = this.time;
			if (!pseudoElement) {
				const keyframe = getFinalKeyframe(keyframes, this.options, finalKeyframe, this.speed);
				if (this.updateMotionValue) this.updateMotionValue(keyframe);
				/**
				* If we can, we want to commit the final style as set by the user,
				* rather than the computed keyframe value supplied by the animation.
				* We always do this, even when a motion value is present, to prevent
				* a visual flash in Firefox where the WAAPI animation's fill is removed
				* during cancel() before the scheduled render can apply the correct value.
				*/
				setStyle(element, name, keyframe);
				this.animation.cancel();
			}
			onComplete?.();
			this.notifyFinished();
		};
	}
	play() {
		if (this.isStopped) return;
		this.manualStartTime = null;
		this.animation.play();
		if (this.state === "finished") this.updateFinished();
	}
	pause() {
		this.animation.pause();
	}
	complete() {
		this.animation.finish?.();
	}
	cancel() {
		try {
			this.animation.cancel();
		} catch (e) {}
	}
	stop() {
		if (this.isStopped) return;
		this.isStopped = true;
		const { state } = this;
		if (state === "idle" || state === "finished") return;
		if (this.updateMotionValue) this.updateMotionValue();
		else this.commitStyles();
		if (!this.isPseudoElement) this.cancel();
	}
	/**
	* WAAPI doesn't natively have any interruption capabilities.
	*
	* In this method, we commit styles back to the DOM before cancelling
	* the animation.
	*
	* This is designed to be overridden by NativeAnimationExtended, which
	* will create a renderless JS animation and sample it twice to calculate
	* its current value, "previous" value, and therefore allow
	* Motion to also correctly calculate velocity for any subsequent animation
	* while deferring the commit until the next animation frame.
	*/
	commitStyles() {
		const element = this.options?.element;
		if (!this.isPseudoElement && element?.isConnected) this.animation.commitStyles?.();
	}
	get duration() {
		const duration = this.animation.effect?.getComputedTiming?.().duration || 0;
		return /* @__PURE__ */ millisecondsToSeconds(Number(duration));
	}
	get iterationDuration() {
		const { delay = 0 } = this.options || {};
		return this.duration + /* @__PURE__ */ millisecondsToSeconds(delay);
	}
	get time() {
		return /* @__PURE__ */ millisecondsToSeconds(Number(this.animation.currentTime) || 0);
	}
	set time(newTime) {
		const wasFinished = this.finishedTime !== null;
		this.manualStartTime = null;
		this.finishedTime = null;
		this.animation.currentTime = /* @__PURE__ */ secondsToMilliseconds(newTime);
		if (wasFinished) this.animation.pause();
	}
	/**
	* The playback speed of the animation.
	* 1 = normal speed, 2 = double speed, 0.5 = half speed.
	*/
	get speed() {
		return this.animation.playbackRate;
	}
	set speed(newSpeed) {
		if (newSpeed < 0) this.finishedTime = null;
		this.animation.playbackRate = newSpeed;
	}
	get state() {
		return this.finishedTime !== null ? "finished" : this.animation.playState;
	}
	get startTime() {
		return this.manualStartTime ?? Number(this.animation.startTime);
	}
	set startTime(newStartTime) {
		this.manualStartTime = this.animation.startTime = newStartTime;
	}
	/**
	* Attaches a timeline to the animation, for instance the `ScrollTimeline`.
	*/
	attachTimeline({ timeline, rangeStart, rangeEnd, observe }) {
		if (this.allowFlatten) this.animation.effect?.updateTiming({ easing: "linear" });
		this.animation.onfinish = null;
		if (timeline && supportsScrollTimeline()) {
			this.animation.timeline = timeline;
			if (rangeStart) this.animation.rangeStart = rangeStart;
			if (rangeEnd) this.animation.rangeEnd = rangeEnd;
			return noop;
		} else return observe(this);
	}
};
// node_modules/motion-dom/dist/es/animation/waapi/utils/unsupported-easing.mjs
var unsupportedEasingFunctions = {
	anticipate,
	backInOut,
	circInOut
};
function isUnsupportedEase(key) {
	return key in unsupportedEasingFunctions;
}
function replaceStringEasing(transition) {
	if (typeof transition.ease === "string" && isUnsupportedEase(transition.ease)) transition.ease = unsupportedEasingFunctions[transition.ease];
}
// node_modules/motion-dom/dist/es/animation/NativeAnimationExtended.mjs
/**
* 10ms is chosen here as it strikes a balance between smooth
* results (more than one keyframe per frame at 60fps) and
* keyframe quantity.
*/
var sampleDelta = 10;
var NativeAnimationExtended = class extends NativeAnimation {
	constructor(options) {
		/**
		* The base NativeAnimation function only supports a subset
		* of Motion easings, and WAAPI also only supports some
		* easing functions via string/cubic-bezier definitions.
		*
		* This function replaces those unsupported easing functions
		* with a JS easing function. This will later get compiled
		* to a linear() easing function.
		*/
		replaceStringEasing(options);
		/**
		* Ensure we replace the transition type with a generator function
		* before passing to WAAPI.
		*
		* TODO: Does this have a better home? It could be shared with
		* JSAnimation.
		*/
		replaceTransitionType(options);
		super(options);
		/**
		* Only set startTime when the animation should autoplay.
		* Setting startTime on a paused WAAPI animation unpauses it
		* (per the WAAPI spec), which breaks autoplay: false.
		*/
		if (options.startTime !== void 0 && options.autoplay !== false) this.startTime = options.startTime;
		this.options = options;
	}
	/**
	* WAAPI doesn't natively have any interruption capabilities.
	*
	* Rather than read committed styles back out of the DOM, we can
	* create a renderless JS animation and sample it twice to calculate
	* its current value, "previous" value, and therefore allow
	* Motion to calculate velocity for any subsequent animation.
	*/
	updateMotionValue(value) {
		const { motionValue, onUpdate, onComplete, element, ...options } = this.options;
		if (!motionValue) return;
		if (value !== void 0) {
			motionValue.set(value);
			return;
		}
		const sampleAnimation = new JSAnimation({
			...options,
			autoplay: false
		});
		/**
		* Use wall-clock elapsed time for sampling.
		* Under CPU load, WAAPI's currentTime may not reflect actual
		* elapsed time, causing incorrect sampling and visual jumps.
		*/
		const sampleTime = Math.max(sampleDelta, time.now() - this.startTime);
		const delta = clamp(0, sampleDelta, sampleTime - sampleDelta);
		const current = sampleAnimation.sample(sampleTime).value;
		/**
		* Write the estimated value to inline style so it persists
		* after cancel(), covering the async gap before the next
		* animation starts.
		*/
		const { name } = this.options;
		if (element && name) setStyle(element, name, current);
		motionValue.setWithVelocity(sampleAnimation.sample(Math.max(0, sampleTime - delta)).value, current, delta);
		sampleAnimation.stop();
	}
};
// node_modules/motion-dom/dist/es/animation/utils/is-animatable.mjs
/**
* Check if a value is animatable. Examples:
*
* ✅: 100, "100px", "#fff"
* ❌: "block", "url(2.jpg)"
* @param value
*
* @internal
*/
var isAnimatable = (value, name) => {
	if (name === "zIndex") return false;
	if (typeof value === "number" || Array.isArray(value)) return true;
	if (typeof value === "string" && (complex.test(value) || value === "0") && !value.startsWith("url(")) return true;
	return false;
};
// node_modules/motion-dom/dist/es/animation/utils/can-animate.mjs
function hasKeyframesChanged(keyframes) {
	const current = keyframes[0];
	if (keyframes.length === 1) return true;
	for (let i = 0; i < keyframes.length; i++) if (keyframes[i] !== current) return true;
}
function canAnimate(keyframes, name, type, velocity) {
	/**
	* Check if we're able to animate between the start and end keyframes,
	* and throw a warning if we're attempting to animate between one that's
	* animatable and another that isn't.
	*/
	const originKeyframe = keyframes[0];
	if (originKeyframe === null) return false;
	/**
	* These aren't traditionally animatable but we do support them.
	* In future we could look into making this more generic or replacing
	* this function with mix() === mixImmediate
	*/
	if (name === "display" || name === "visibility") return true;
	const targetKeyframe = keyframes[keyframes.length - 1];
	const isOriginAnimatable = isAnimatable(originKeyframe, name);
	const isTargetAnimatable = isAnimatable(targetKeyframe, name);
	warning(isOriginAnimatable === isTargetAnimatable, `You are trying to animate ${name} from "${originKeyframe}" to "${targetKeyframe}". "${isOriginAnimatable ? targetKeyframe : originKeyframe}" is not an animatable value.`, "value-not-animatable");
	if (!isOriginAnimatable || !isTargetAnimatable) return false;
	return hasKeyframesChanged(keyframes) || (type === "spring" || isGenerator(type)) && velocity;
}
// node_modules/motion-dom/dist/es/animation/utils/make-animation-instant.mjs
function makeAnimationInstant(options) {
	options.duration = 0;
	options.type = "keyframes";
}
// node_modules/motion-dom/dist/es/animation/waapi/utils/accelerated-values.mjs
/**
* A list of values that can be hardware-accelerated.
*/
var acceleratedValues = /* @__PURE__ */ new Set([
	"opacity",
	"clipPath",
	"filter",
	"transform",
	"backgroundColor"
]);
// node_modules/motion-dom/dist/es/animation/waapi/utils/is-browser-color.mjs
var browserColorFunctions = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function hasBrowserOnlyColors(keyframes) {
	for (let i = 0; i < keyframes.length; i++) if (typeof keyframes[i] === "string" && browserColorFunctions.test(keyframes[i])) return true;
	return false;
}
// node_modules/motion-dom/dist/es/animation/waapi/supports/waapi.mjs
var colorProperties = /* @__PURE__ */ new Set([
	"color",
	"backgroundColor",
	"outlineColor",
	"fill",
	"stroke",
	"borderColor",
	"borderTopColor",
	"borderRightColor",
	"borderBottomColor",
	"borderLeftColor"
]);
var supportsWaapi = /*@__PURE__*/ memo(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function supportsBrowserAnimation(options) {
	const { motionValue, name, repeatDelay, repeatType, damping, type, keyframes } = options;
	const subject = motionValue?.owner?.current;
	/**
	* We use instanceof checks instead of isHTMLElement()/isSVGElement()
	* because we explicitly **don't** want elements in different timing
	* contexts (i.e. popups) to be accelerated, as it's not possible to sync
	* these animations properly with those driven from the main window
	* frameloop.
	*/
	if (!(subject instanceof HTMLElement) && !(subject instanceof SVGElement)) return false;
	const { onUpdate, transformTemplate } = motionValue.owner.getProps();
	return supportsWaapi() && name && (acceleratedValues.has(name) || colorProperties.has(name) && hasBrowserOnlyColors(keyframes)) && (name !== "transform" || !transformTemplate) && !onUpdate && !repeatDelay && repeatType !== "mirror" && damping !== 0 && type !== "inertia";
}
// node_modules/motion-dom/dist/es/animation/AsyncMotionValueAnimation.mjs
/**
* Maximum time allowed between an animation being created and it being
* resolved for us to use the latter as the start time.
*
* This is to ensure that while we prefer to "start" an animation as soon
* as it's triggered, we also want to avoid a visual jump if there's a big delay
* between these two moments.
*/
var MAX_RESOLVE_DELAY = 40;
var AsyncMotionValueAnimation = class extends WithPromise {
	constructor({ autoplay = true, delay = 0, type = "keyframes", repeat = 0, repeatDelay = 0, repeatType = "loop", keyframes, name, motionValue, element, ...options }) {
		super();
		/**
		* Bound to support return animation.stop pattern
		*/
		this.stop = () => {
			if (this._animation) {
				this._animation.stop();
				this.stopTimeline?.();
			}
			this.keyframeResolver?.cancel();
		};
		this.createdAt = time.now();
		const optionsWithDefaults = {
			autoplay,
			delay,
			type,
			repeat,
			repeatDelay,
			repeatType,
			name,
			motionValue,
			element,
			...options
		};
		const KeyframeResolver$1 = element?.KeyframeResolver || KeyframeResolver;
		this.keyframeResolver = new KeyframeResolver$1(keyframes, (resolvedKeyframes, finalKeyframe, forced) => this.onKeyframesResolved(resolvedKeyframes, finalKeyframe, optionsWithDefaults, !forced), name, motionValue, element);
		this.keyframeResolver?.scheduleResolve();
	}
	onKeyframesResolved(keyframes, finalKeyframe, options, sync) {
		this.keyframeResolver = void 0;
		const { name, type, velocity, delay, isHandoff, onUpdate } = options;
		this.resolvedAt = time.now();
		/**
		* If we can't animate this value with the resolved keyframes
		* then we should complete it immediately.
		*/
		let canAnimateValue = true;
		if (!canAnimate(keyframes, name, type, velocity)) {
			canAnimateValue = false;
			if (MotionGlobalConfig.instantAnimations || !delay) onUpdate?.(getFinalKeyframe(keyframes, options, finalKeyframe));
			keyframes[0] = keyframes[keyframes.length - 1];
			makeAnimationInstant(options);
			options.repeat = 0;
		}
		const resolvedOptions = {
			startTime: sync ? !this.resolvedAt ? this.createdAt : this.resolvedAt - this.createdAt > MAX_RESOLVE_DELAY ? this.resolvedAt : this.createdAt : void 0,
			finalKeyframe,
			...options,
			keyframes
		};
		/**
		* Animate via WAAPI if possible. If this is a handoff animation, the optimised animation will be running via
		* WAAPI. Therefore, this animation must be JS to ensure it runs "under" the
		* optimised animation.
		*
		* Also skip WAAPI when keyframes aren't animatable, as the resolved
		* values may not be valid CSS and would trigger browser warnings.
		*/
		const useWaapi = canAnimateValue && !isHandoff && supportsBrowserAnimation(resolvedOptions);
		const element = resolvedOptions.motionValue?.owner?.current;
		let animation;
		if (useWaapi) try {
			animation = new NativeAnimationExtended({
				...resolvedOptions,
				element
			});
		} catch {
			animation = new JSAnimation(resolvedOptions);
		}
		else animation = new JSAnimation(resolvedOptions);
		animation.finished.then(() => {
			this.notifyFinished();
		}).catch(noop);
		if (this.pendingTimeline) {
			this.stopTimeline = animation.attachTimeline(this.pendingTimeline);
			this.pendingTimeline = void 0;
		}
		this._animation = animation;
	}
	get finished() {
		if (!this._animation) return this._finished;
		else return this.animation.finished;
	}
	then(onResolve, _onReject) {
		return this.finished.finally(onResolve).then(() => {});
	}
	get animation() {
		if (!this._animation) {
			this.keyframeResolver?.resume();
			flushKeyframeResolvers();
		}
		return this._animation;
	}
	get duration() {
		return this.animation.duration;
	}
	get iterationDuration() {
		return this.animation.iterationDuration;
	}
	get time() {
		return this.animation.time;
	}
	set time(newTime) {
		this.animation.time = newTime;
	}
	get speed() {
		return this.animation.speed;
	}
	get state() {
		return this.animation.state;
	}
	set speed(newSpeed) {
		this.animation.speed = newSpeed;
	}
	get startTime() {
		return this.animation.startTime;
	}
	attachTimeline(timeline) {
		if (this._animation) this.stopTimeline = this.animation.attachTimeline(timeline);
		else this.pendingTimeline = timeline;
		return () => this.stop();
	}
	play() {
		this.animation.play();
	}
	pause() {
		this.animation.pause();
	}
	complete() {
		this.animation.complete();
	}
	cancel() {
		if (this._animation) this.animation.cancel();
		this.keyframeResolver?.cancel();
	}
};
// node_modules/motion-dom/dist/es/animation/utils/calc-child-stagger.mjs
function calcChildStagger(children, child, delayChildren, staggerChildren = 0, staggerDirection = 1) {
	const index = Array.from(children).sort((a, b) => a.sortNodePosition(b)).indexOf(child);
	const numChildren = children.size;
	const maxStaggerDuration = (numChildren - 1) * staggerChildren;
	return typeof delayChildren === "function" ? delayChildren(index, numChildren) : staggerDirection === 1 ? index * staggerChildren : maxStaggerDuration - index * staggerChildren;
}
// node_modules/motion-dom/dist/es/value/index.mjs
/**
* Maximum time between the value of two frames, beyond which we
* assume the velocity has since been 0.
*/
var MAX_VELOCITY_DELTA = 30;
var isFloat = (value) => {
	return !isNaN(parseFloat(value));
};
var collectMotionValues = { current: void 0 };
/**
* `MotionValue` is used to track the state and velocity of motion values.
*
* @public
*/
var MotionValue = class {
	/**
	* @param init - The initiating value
	* @param config - Optional configuration options
	*
	* -  `transformer`: A function to transform incoming values with.
	*/
	constructor(init, options = {}) {
		/**
		* Tracks whether this value can output a velocity. Currently this is only true
		* if the value is numerical, but we might be able to widen the scope here and support
		* other value types.
		*
		* @internal
		*/
		this.canTrackVelocity = null;
		/**
		* An object containing a SubscriptionManager for each active event.
		*/
		this.events = {};
		this.updateAndNotify = (v) => {
			const currentTime = time.now();
			/**
			* If we're updating the value during another frame or eventloop
			* than the previous frame, then the we set the previous frame value
			* to current.
			*/
			if (this.updatedAt !== currentTime) this.setPrevFrameValue();
			this.prev = this.current;
			this.setCurrent(v);
			if (this.current !== this.prev) {
				this.events.change?.notify(this.current);
				if (this.dependents) for (const dependent of this.dependents) dependent.dirty();
			}
		};
		this.hasAnimated = false;
		this.setCurrent(init);
		this.owner = options.owner;
	}
	setCurrent(current) {
		this.current = current;
		this.updatedAt = time.now();
		if (this.canTrackVelocity === null && current !== void 0) this.canTrackVelocity = isFloat(this.current);
	}
	setPrevFrameValue(prevFrameValue = this.current) {
		this.prevFrameValue = prevFrameValue;
		this.prevUpdatedAt = this.updatedAt;
	}
	/**
	* Adds a function that will be notified when the `MotionValue` is updated.
	*
	* It returns a function that, when called, will cancel the subscription.
	*
	* When calling `onChange` inside a React component, it should be wrapped with the
	* `useEffect` hook. As it returns an unsubscribe function, this should be returned
	* from the `useEffect` function to ensure you don't add duplicate subscribers..
	*
	* ```jsx
	* export const MyComponent = () => {
	*   const x = useMotionValue(0)
	*   const y = useMotionValue(0)
	*   const opacity = useMotionValue(1)
	*
	*   useEffect(() => {
	*     function updateOpacity() {
	*       const maxXY = Math.max(x.get(), y.get())
	*       const newOpacity = transform(maxXY, [0, 100], [1, 0])
	*       opacity.set(newOpacity)
	*     }
	*
	*     const unsubscribeX = x.on("change", updateOpacity)
	*     const unsubscribeY = y.on("change", updateOpacity)
	*
	*     return () => {
	*       unsubscribeX()
	*       unsubscribeY()
	*     }
	*   }, [])
	*
	*   return <motion.div style={{ x }} />
	* }
	* ```
	*
	* @param subscriber - A function that receives the latest value.
	* @returns A function that, when called, will cancel this subscription.
	*
	* @deprecated
	*/
	onChange(subscription) {
		if (process.env.NODE_ENV !== "production") warnOnce(false, `value.onChange(callback) is deprecated. Switch to value.on("change", callback).`);
		return this.on("change", subscription);
	}
	on(eventName, callback) {
		if (!this.events[eventName]) this.events[eventName] = new SubscriptionManager();
		const unsubscribe = this.events[eventName].add(callback);
		if (eventName === "change") return () => {
			unsubscribe();
			/**
			* If we have no more change listeners by the start
			* of the next frame, stop active animations.
			*/
			frame.read(() => {
				if (!this.events.change.getSize()) this.stop();
			});
		};
		return unsubscribe;
	}
	clearListeners() {
		for (const eventManagers in this.events) this.events[eventManagers].clear();
	}
	/**
	* Attaches a passive effect to the `MotionValue`.
	*/
	attach(passiveEffect, stopPassiveEffect) {
		this.passiveEffect = passiveEffect;
		this.stopPassiveEffect = stopPassiveEffect;
	}
	/**
	* Sets the state of the `MotionValue`.
	*
	* @remarks
	*
	* ```jsx
	* const x = useMotionValue(0)
	* x.set(10)
	* ```
	*
	* @param latest - Latest value to set.
	* @param render - Whether to notify render subscribers. Defaults to `true`
	*
	* @public
	*/
	set(v) {
		if (!this.passiveEffect) this.updateAndNotify(v);
		else this.passiveEffect(v, this.updateAndNotify);
	}
	setWithVelocity(prev, current, delta) {
		this.set(current);
		this.prev = void 0;
		this.prevFrameValue = prev;
		this.prevUpdatedAt = this.updatedAt - delta;
	}
	/**
	* Set the state of the `MotionValue`, stopping any active animations,
	* effects, and resets velocity to `0`.
	*/
	jump(v, endAnimation = true) {
		this.updateAndNotify(v);
		this.prev = v;
		this.prevUpdatedAt = this.prevFrameValue = void 0;
		endAnimation && this.stop();
		if (this.stopPassiveEffect) this.stopPassiveEffect();
	}
	dirty() {
		this.events.change?.notify(this.current);
	}
	addDependent(dependent) {
		if (!this.dependents) this.dependents = /* @__PURE__ */ new Set();
		this.dependents.add(dependent);
	}
	removeDependent(dependent) {
		if (this.dependents) this.dependents.delete(dependent);
	}
	/**
	* Returns the latest state of `MotionValue`
	*
	* @returns - The latest state of `MotionValue`
	*
	* @public
	*/
	get() {
		if (collectMotionValues.current) collectMotionValues.current.push(this);
		return this.current;
	}
	/**
	* @public
	*/
	getPrevious() {
		return this.prev;
	}
	/**
	* Returns the latest velocity of `MotionValue`
	*
	* @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
	*
	* @public
	*/
	getVelocity() {
		const currentTime = time.now();
		if (!this.canTrackVelocity || this.prevFrameValue === void 0 || currentTime - this.updatedAt > MAX_VELOCITY_DELTA) return 0;
		const delta = Math.min(this.updatedAt - this.prevUpdatedAt, MAX_VELOCITY_DELTA);
		return /* @__PURE__ */ velocityPerSecond(parseFloat(this.current) - parseFloat(this.prevFrameValue), delta);
	}
	/**
	* Registers a new animation to control this `MotionValue`. Only one
	* animation can drive a `MotionValue` at one time.
	*
	* ```jsx
	* value.start()
	* ```
	*
	* @param animation - A function that starts the provided animation
	*/
	start(startAnimation) {
		this.stop();
		return new Promise((resolve) => {
			this.hasAnimated = true;
			this.animation = startAnimation(resolve);
			if (this.events.animationStart) this.events.animationStart.notify();
		}).then(() => {
			if (this.events.animationComplete) this.events.animationComplete.notify();
			this.clearAnimation();
		});
	}
	/**
	* Stop the currently active animation.
	*
	* @public
	*/
	stop() {
		if (this.animation) {
			this.animation.stop();
			if (this.events.animationCancel) this.events.animationCancel.notify();
		}
		this.clearAnimation();
	}
	/**
	* Returns `true` if this value is currently animating.
	*
	* @public
	*/
	isAnimating() {
		return !!this.animation;
	}
	clearAnimation() {
		delete this.animation;
	}
	/**
	* Destroy and clean up subscribers to this `MotionValue`.
	*
	* The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
	* handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
	* created a `MotionValue` via the `motionValue` function.
	*
	* @public
	*/
	destroy() {
		this.dependents?.clear();
		this.events.destroy?.notify();
		this.clearListeners();
		this.stop();
		if (this.stopPassiveEffect) this.stopPassiveEffect();
	}
};
function motionValue(init, options) {
	return new MotionValue(init, options);
}
// node_modules/motion-dom/dist/es/animation/utils/resolve-transition.mjs
/**
* If `transition` has `inherit: true`, shallow-merge it with
* `parentTransition` (child keys win) and strip the `inherit` key.
* Otherwise return `transition` unchanged.
*/
function resolveTransition(transition, parentTransition) {
	if (transition?.inherit && parentTransition) {
		const { inherit: _, ...rest } = transition;
		return {
			...parentTransition,
			...rest
		};
	}
	return transition;
}
// node_modules/motion-dom/dist/es/animation/utils/get-value-transition.mjs
function getValueTransition(transition, key) {
	const valueTransition = transition?.[key] ?? transition?.["default"] ?? transition;
	if (valueTransition !== transition) return resolveTransition(valueTransition, transition);
	return valueTransition;
}
// node_modules/motion-dom/dist/es/animation/utils/default-transitions.mjs
var underDampedSpring = {
	type: "spring",
	stiffness: 500,
	damping: 25,
	restSpeed: 10
};
var criticallyDampedSpring = (target) => ({
	type: "spring",
	stiffness: 550,
	damping: target === 0 ? 2 * Math.sqrt(550) : 30,
	restSpeed: 10
});
var keyframesTransition = {
	type: "keyframes",
	duration: .8
};
/**
* Default easing curve is a slightly shallower version of
* the default browser easing curve.
*/
var ease = {
	type: "keyframes",
	ease: [
		.25,
		.1,
		.35,
		1
	],
	duration: .3
};
var getDefaultTransition = (valueKey, { keyframes }) => {
	if (keyframes.length > 2) return keyframesTransition;
	else if (transformProps.has(valueKey)) return valueKey.startsWith("scale") ? criticallyDampedSpring(keyframes[1]) : underDampedSpring;
	return ease;
};
// node_modules/motion-dom/dist/es/animation/utils/is-transition-defined.mjs
var orchestrationKeys = /* @__PURE__ */ new Set([
	"when",
	"delay",
	"delayChildren",
	"staggerChildren",
	"staggerDirection",
	"repeat",
	"repeatType",
	"repeatDelay",
	"from",
	"elapsed"
]);
/**
* Decide whether a transition is defined on a given Transition.
* This filters out orchestration options and returns true
* if any options are left.
*/
function isTransitionDefined(transition) {
	for (const key in transition) if (!orchestrationKeys.has(key)) return true;
	return false;
}
// node_modules/motion-dom/dist/es/animation/interfaces/motion-value.mjs
var animateMotionValue = (name, value, target, transition = {}, element, isHandoff) => (onComplete) => {
	const valueTransition = getValueTransition(transition, name) || {};
	/**
	* Most transition values are currently completely overwritten by value-specific
	* transitions. In the future it'd be nicer to blend these transitions. But for now
	* delay actually does inherit from the root transition if not value-specific.
	*/
	const delay = valueTransition.delay || transition.delay || 0;
	/**
	* Elapsed isn't a public transition option but can be passed through from
	* optimized appear effects in milliseconds.
	*/
	let { elapsed = 0 } = transition;
	elapsed = elapsed - /* @__PURE__ */ secondsToMilliseconds(delay);
	const options = {
		keyframes: Array.isArray(target) ? target : [null, target],
		ease: "easeOut",
		velocity: value.getVelocity(),
		...valueTransition,
		delay: -elapsed,
		onUpdate: (v) => {
			value.set(v);
			valueTransition.onUpdate && valueTransition.onUpdate(v);
		},
		onComplete: () => {
			onComplete();
			valueTransition.onComplete && valueTransition.onComplete();
		},
		name,
		motionValue: value,
		element: isHandoff ? void 0 : element
	};
	/**
	* If there's no transition defined for this value, we can generate
	* unique transition settings for this value.
	*/
	if (!isTransitionDefined(valueTransition)) Object.assign(options, getDefaultTransition(name, options));
	/**
	* Both WAAPI and our internal animation functions use durations
	* as defined by milliseconds, while our external API defines them
	* as seconds.
	*/
	options.duration && (options.duration = /* @__PURE__ */ secondsToMilliseconds(options.duration));
	options.repeatDelay && (options.repeatDelay = /* @__PURE__ */ secondsToMilliseconds(options.repeatDelay));
	/**
	* Support deprecated way to set initial value. Prefer keyframe syntax.
	*/
	if (options.from !== void 0) options.keyframes[0] = options.from;
	let shouldSkip = false;
	if (options.type === false || options.duration === 0 && !options.repeatDelay) {
		makeAnimationInstant(options);
		if (options.delay === 0) shouldSkip = true;
	}
	if (MotionGlobalConfig.instantAnimations || MotionGlobalConfig.skipAnimations || element?.shouldSkipAnimations || valueTransition.skipAnimations) {
		shouldSkip = true;
		makeAnimationInstant(options);
		options.delay = 0;
	}
	/**
	* If the transition type or easing has been explicitly set by the user
	* then we don't want to allow flattening the animation.
	*/
	options.allowFlatten = !valueTransition.type && !valueTransition.ease;
	/**
	* If we can or must skip creating the animation, and apply only
	* the final keyframe, do so. We also check once keyframes are resolved but
	* this early check prevents the need to create an animation at all.
	*/
	if (shouldSkip && !isHandoff && value.get() !== void 0) {
		const finalKeyframe = getFinalKeyframe(options.keyframes, valueTransition);
		if (finalKeyframe !== void 0) {
			frame.update(() => {
				options.onUpdate(finalKeyframe);
				options.onComplete();
			});
			return;
		}
	}
	return valueTransition.isSync ? new JSAnimation(options) : new AsyncMotionValueAnimation(options);
};
// node_modules/motion-dom/dist/es/animation/utils/css-variables-conversion.mjs
/**
* Parse Framer's special CSS variable format into a CSS token and a fallback.
*
* ```
* `var(--foo, #fff)` => [`--foo`, '#fff']
* ```
*
* @param current
*/
var splitCSSVariableRegex = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function parseCSSVariable(current) {
	const match = splitCSSVariableRegex.exec(current);
	if (!match) return [,];
	const [, token1, token2, fallback] = match;
	return [`--${token1 ?? token2}`, fallback];
}
var maxDepth = 4;
function getVariableValue(current, element, depth = 1) {
	invariant(depth <= maxDepth, `Max CSS variable fallback depth detected in property "${current}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
	const [token, fallback] = parseCSSVariable(current);
	if (!token) return;
	const resolved = window.getComputedStyle(element).getPropertyValue(token);
	if (resolved) {
		const trimmed = resolved.trim();
		return isNumericalString(trimmed) ? parseFloat(trimmed) : trimmed;
	}
	return isCSSVariableToken(fallback) ? getVariableValue(fallback, element, depth + 1) : fallback;
}
// node_modules/motion-dom/dist/es/render/utils/resolve-variants.mjs
function getValueState(visualElement) {
	const state = [{}, {}];
	visualElement?.values.forEach((value, key) => {
		state[0][key] = value.get();
		state[1][key] = value.getVelocity();
	});
	return state;
}
function resolveVariantFromProps(props, definition, custom, visualElement) {
	/**
	* If the variant definition is a function, resolve.
	*/
	if (typeof definition === "function") {
		const [current, velocity] = getValueState(visualElement);
		definition = definition(custom !== void 0 ? custom : props.custom, current, velocity);
	}
	/**
	* If the variant definition is a variant label, or
	* the function returned a variant label, resolve.
	*/
	if (typeof definition === "string") definition = props.variants && props.variants[definition];
	/**
	* At this point we've resolved both functions and variant labels,
	* but the resolved variant label might itself have been a function.
	* If so, resolve. This can only have returned a valid target object.
	*/
	if (typeof definition === "function") {
		const [current, velocity] = getValueState(visualElement);
		definition = definition(custom !== void 0 ? custom : props.custom, current, velocity);
	}
	return definition;
}
// node_modules/motion-dom/dist/es/render/utils/resolve-dynamic-variants.mjs
function resolveVariant(visualElement, definition, custom) {
	const props = visualElement.getProps();
	return resolveVariantFromProps(props, definition, custom !== void 0 ? custom : props.custom, visualElement);
}
// node_modules/motion-dom/dist/es/render/utils/keys-position.mjs
var positionalKeys = /* @__PURE__ */ new Set([
	"width",
	"height",
	"top",
	"left",
	"right",
	"bottom",
	...transformPropOrder
]);
// node_modules/motion-dom/dist/es/render/utils/is-keyframes-target.mjs
var isKeyframesTarget = (v) => {
	return Array.isArray(v);
};
// node_modules/motion-dom/dist/es/render/utils/setters.mjs
/**
* Set VisualElement's MotionValue, creating a new MotionValue for it if
* it doesn't exist.
*/
function setMotionValue(visualElement, key, value) {
	if (visualElement.hasValue(key)) visualElement.getValue(key).set(value);
	else visualElement.addValue(key, motionValue(value));
}
function resolveFinalValueInKeyframes(v) {
	return isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
}
function setTarget(visualElement, definition) {
	let { transitionEnd = {}, transition = {}, ...target } = resolveVariant(visualElement, definition) || {};
	target = {
		...target,
		...transitionEnd
	};
	for (const key in target) setMotionValue(visualElement, key, resolveFinalValueInKeyframes(target[key]));
}
// node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs
var isMotionValue = (value) => Boolean(value && value.getVelocity);
// node_modules/motion-dom/dist/es/value/will-change/is.mjs
function isWillChangeMotionValue(value) {
	return Boolean(isMotionValue(value) && value.add);
}
// node_modules/motion-dom/dist/es/value/will-change/add-will-change.mjs
function addValueToWillChange(visualElement, key) {
	const willChange = visualElement.getValue("willChange");
	/**
	* It could be that a user has set willChange to a regular MotionValue,
	* in which case we can't add the value to it.
	*/
	if (isWillChangeMotionValue(willChange)) return willChange.add(key);
	else if (!willChange && MotionGlobalConfig.WillChange) {
		const newWillChange = new MotionGlobalConfig.WillChange("auto");
		visualElement.addValue("willChange", newWillChange);
		newWillChange.add(key);
	}
}
// node_modules/motion-dom/dist/es/render/dom/utils/camel-to-dash.mjs
function camelToDash(str) {
	return str.replace(/([A-Z])/g, (match) => `-${match.toLowerCase()}`);
}
var optimizedAppearDataAttribute = "data-" + camelToDash("framerAppearId");
// node_modules/motion-dom/dist/es/animation/optimized-appear/get-appear-id.mjs
function getOptimisedAppearId(visualElement) {
	return visualElement.props[optimizedAppearDataAttribute];
}
// node_modules/motion-dom/dist/es/animation/interfaces/visual-element-target.mjs
/**
* Decide whether we should block this animation. Previously, we achieved this
* just by checking whether the key was listed in protectedKeys, but this
* posed problems if an animation was triggered by afterChildren and protectedKeys
* had been set to true in the meantime.
*/
function shouldBlockAnimation({ protectedKeys, needsAnimating }, key) {
	const shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
	needsAnimating[key] = false;
	return shouldBlock;
}
function animateTarget(visualElement, targetAndTransition, { delay = 0, transitionOverride, type } = {}) {
	let { transition, transitionEnd, ...target } = targetAndTransition;
	const defaultTransition = visualElement.getDefaultTransition();
	transition = transition ? resolveTransition(transition, defaultTransition) : defaultTransition;
	const reduceMotion = transition?.reduceMotion;
	const skipAnimations = transition?.skipAnimations;
	if (transitionOverride) transition = transitionOverride;
	const animations = [];
	const animationTypeState = type && visualElement.animationState && visualElement.animationState.getState()[type];
	const path = transition?.path;
	if (path) path.animateVisualElement(visualElement, target, transition, delay, animations);
	for (const key in target) {
		const value = visualElement.getValue(key, visualElement.latestValues[key] ?? null);
		const valueTarget = target[key];
		if (valueTarget === void 0 || animationTypeState && shouldBlockAnimation(animationTypeState, key)) continue;
		const valueTransition = {
			delay,
			...getValueTransition(transition || {}, key)
		};
		if (skipAnimations) valueTransition.skipAnimations = true;
		/**
		* If the value is already at the defined target, skip the animation.
		* We still re-assert the value via frame.update to take precedence
		* over any stale transitionEnd callbacks from previous animations.
		*/
		const currentValue = value.get();
		if (currentValue !== void 0 && !value.isAnimating() && !Array.isArray(valueTarget) && valueTarget === currentValue && !valueTransition.velocity) {
			frame.update(() => value.set(valueTarget));
			continue;
		}
		/**
		* If this is the first time a value is being animated, check
		* to see if we're handling off from an existing animation.
		*/
		let isHandoff = false;
		if (window.MotionHandoffAnimation) {
			const appearId = getOptimisedAppearId(visualElement);
			if (appearId) {
				const startTime = window.MotionHandoffAnimation(appearId, key, frame);
				if (startTime !== null) {
					valueTransition.startTime = startTime;
					isHandoff = true;
				}
			}
		}
		addValueToWillChange(visualElement, key);
		const shouldReduceMotion = reduceMotion ?? visualElement.shouldReduceMotion;
		value.start(animateMotionValue(key, value, valueTarget, shouldReduceMotion && positionalKeys.has(key) ? { type: false } : valueTransition, visualElement, isHandoff));
		const animation = value.animation;
		if (animation) animations.push(animation);
	}
	if (transitionEnd) {
		const applyTransitionEnd = () => frame.update(() => {
			transitionEnd && setTarget(visualElement, transitionEnd);
		});
		if (animations.length) Promise.all(animations).then(applyTransitionEnd);
		else applyTransitionEnd();
	}
	return animations;
}
// node_modules/motion-dom/dist/es/animation/interfaces/visual-element-variant.mjs
function animateVariant(visualElement, variant, options = {}) {
	const resolved = resolveVariant(visualElement, variant, options.type === "exit" ? visualElement.presenceContext?.custom : void 0);
	let { transition = visualElement.getDefaultTransition() || {} } = resolved || {};
	if (options.transitionOverride) transition = options.transitionOverride;
	/**
	* If we have a variant, create a callback that runs it as an animation.
	* Otherwise, we resolve a Promise immediately for a composable no-op.
	*/
	const getAnimation = resolved ? () => Promise.all(animateTarget(visualElement, resolved, options)) : () => Promise.resolve();
	/**
	* If we have children, create a callback that runs all their animations.
	* Otherwise, we resolve a Promise immediately for a composable no-op.
	*/
	const getChildAnimations = visualElement.variantChildren && visualElement.variantChildren.size ? (forwardDelay = 0) => {
		const { delayChildren = 0, staggerChildren, staggerDirection } = transition;
		return animateChildren(visualElement, variant, forwardDelay, delayChildren, staggerChildren, staggerDirection, options);
	} : () => Promise.resolve();
	/**
	* If the transition explicitly defines a "when" option, we need to resolve either
	* this animation or all children animations before playing the other.
	*/
	const { when } = transition;
	if (when) {
		const [first, last] = when === "beforeChildren" ? [getAnimation, getChildAnimations] : [getChildAnimations, getAnimation];
		return first().then(() => last());
	} else return Promise.all([getAnimation(), getChildAnimations(options.delay)]);
}
function animateChildren(visualElement, variant, delay = 0, delayChildren = 0, staggerChildren = 0, staggerDirection = 1, options) {
	const animations = [];
	for (const child of visualElement.variantChildren) {
		child.notify("AnimationStart", variant);
		animations.push(animateVariant(child, variant, {
			...options,
			delay: delay + (typeof delayChildren === "function" ? 0 : delayChildren) + calcChildStagger(visualElement.variantChildren, child, delayChildren, staggerChildren, staggerDirection)
		}).then(() => child.notify("AnimationComplete", variant)));
	}
	return Promise.all(animations);
}
// node_modules/motion-dom/dist/es/animation/interfaces/visual-element.mjs
function animateVisualElement(visualElement, definition, options = {}) {
	visualElement.notify("AnimationStart", definition);
	let animation;
	if (Array.isArray(definition)) {
		const animations = definition.map((variant) => animateVariant(visualElement, variant, options));
		animation = Promise.all(animations);
	} else if (typeof definition === "string") animation = animateVariant(visualElement, definition, options);
	else {
		const resolvedDefinition = typeof definition === "function" ? resolveVariant(visualElement, definition, options.custom) : definition;
		animation = Promise.all(animateTarget(visualElement, resolvedDefinition, options));
	}
	return animation.then(() => {
		visualElement.notify("AnimationComplete", definition);
	});
}
// node_modules/motion-dom/dist/es/value/types/auto.mjs
/**
* ValueType for "auto"
*/
var auto = {
	test: (v) => v === "auto",
	parse: (v) => v
};
// node_modules/motion-dom/dist/es/value/types/test.mjs
/**
* Tests a provided value against a ValueType
*/
var testValueType = (v) => (type) => type.test(v);
// node_modules/motion-dom/dist/es/value/types/dimensions.mjs
/**
* A list of value types commonly used for dimensions
*/
var dimensionValueTypes = [
	number,
	px,
	percent,
	degrees,
	vw,
	vh,
	auto
];
/**
* Tests a dimensional value against the list of dimension ValueTypes
*/
var findDimensionValueType = (v) => dimensionValueTypes.find(testValueType(v));
// node_modules/motion-dom/dist/es/animation/keyframes/utils/is-none.mjs
function isNone(value) {
	if (typeof value === "number") return value === 0;
	else if (value !== null) return value === "none" || value === "0" || isZeroValueString(value);
	else return true;
}
// node_modules/motion-dom/dist/es/value/types/complex/filter.mjs
/**
* Properties that should default to 1 or 100%
*/
var maxDefaults = /* @__PURE__ */ new Set([
	"brightness",
	"contrast",
	"saturate",
	"opacity"
]);
function applyDefaultFilter(v) {
	const [name, value] = v.slice(0, -1).split("(");
	if (name === "drop-shadow") return v;
	const [number] = value.match(floatRegex) || [];
	if (!number) return v;
	const unit = value.replace(number, "");
	let defaultValue = maxDefaults.has(name) ? 1 : 0;
	if (number !== value) defaultValue *= 100;
	return name + "(" + defaultValue + unit + ")";
}
var functionRegex = /\b([a-z-]*)\(.*?\)/gu;
var filter = {
	...complex,
	getAnimatableNone: (v) => {
		const functions = v.match(functionRegex);
		return functions ? functions.map(applyDefaultFilter).join(" ") : v;
	}
};
// node_modules/motion-dom/dist/es/value/types/complex/mask.mjs
var mask = {
	...complex,
	getAnimatableNone: (v) => {
		const parsed = complex.parse(v);
		return complex.createTransformer(v)(parsed.map((v) => typeof v === "number" ? 0 : typeof v === "object" ? {
			...v,
			alpha: 1
		} : v));
	}
};
// node_modules/motion-dom/dist/es/value/types/int.mjs
var int = {
	...number,
	transform: Math.round
};
// node_modules/motion-dom/dist/es/value/types/maps/number.mjs
var numberValueTypes = {
	borderWidth: px,
	borderTopWidth: px,
	borderRightWidth: px,
	borderBottomWidth: px,
	borderLeftWidth: px,
	borderRadius: px,
	borderTopLeftRadius: px,
	borderTopRightRadius: px,
	borderBottomRightRadius: px,
	borderBottomLeftRadius: px,
	width: px,
	maxWidth: px,
	height: px,
	maxHeight: px,
	top: px,
	right: px,
	bottom: px,
	left: px,
	inset: px,
	insetBlock: px,
	insetBlockStart: px,
	insetBlockEnd: px,
	insetInline: px,
	insetInlineStart: px,
	insetInlineEnd: px,
	padding: px,
	paddingTop: px,
	paddingRight: px,
	paddingBottom: px,
	paddingLeft: px,
	paddingBlock: px,
	paddingBlockStart: px,
	paddingBlockEnd: px,
	paddingInline: px,
	paddingInlineStart: px,
	paddingInlineEnd: px,
	margin: px,
	marginTop: px,
	marginRight: px,
	marginBottom: px,
	marginLeft: px,
	marginBlock: px,
	marginBlockStart: px,
	marginBlockEnd: px,
	marginInline: px,
	marginInlineStart: px,
	marginInlineEnd: px,
	fontSize: px,
	backgroundPositionX: px,
	backgroundPositionY: px,
	rotate: degrees,
	/**
	* Internal channel for `transition.path` orientToPath. Composed onto
	* `rotate` at the transform-build sites so the user's `rotate` is
	* never read or overwritten. Not part of `transformPropOrder`.
	*/
	pathRotation: degrees,
	rotateX: degrees,
	rotateY: degrees,
	rotateZ: degrees,
	scale,
	scaleX: scale,
	scaleY: scale,
	scaleZ: scale,
	skew: degrees,
	skewX: degrees,
	skewY: degrees,
	distance: px,
	translateX: px,
	translateY: px,
	translateZ: px,
	x: px,
	y: px,
	z: px,
	perspective: px,
	transformPerspective: px,
	opacity: alpha,
	originX: progressPercentage,
	originY: progressPercentage,
	originZ: px,
	zIndex: int,
	fillOpacity: alpha,
	strokeOpacity: alpha,
	numOctaves: int
};
// node_modules/motion-dom/dist/es/value/types/maps/defaults.mjs
/**
* A map of default value types for common values
*/
var defaultValueTypes = {
	...numberValueTypes,
	color,
	backgroundColor: color,
	outlineColor: color,
	fill: color,
	stroke: color,
	borderColor: color,
	borderTopColor: color,
	borderRightColor: color,
	borderBottomColor: color,
	borderLeftColor: color,
	filter,
	WebkitFilter: filter,
	mask,
	WebkitMask: mask
};
/**
* Gets the default ValueType for the provided value key
*/
var getDefaultValueType = (key) => defaultValueTypes[key];
// node_modules/motion-dom/dist/es/value/types/utils/animatable-none.mjs
var customTypes = /*@__PURE__*/ new Set([filter, mask]);
function getAnimatableNone(key, value) {
	let defaultValueType = getDefaultValueType(key);
	if (!customTypes.has(defaultValueType)) defaultValueType = complex;
	return defaultValueType.getAnimatableNone ? defaultValueType.getAnimatableNone(value) : void 0;
}
// node_modules/motion-dom/dist/es/animation/keyframes/utils/make-none-animatable.mjs
/**
* If we encounter keyframes like "none" or "0" and we also have keyframes like
* "#fff" or "200px 200px" we want to find a keyframe to serve as a template for
* the "none" keyframes. In this case "#fff" or "200px 200px" - then these get turned into
* zero equivalents, i.e. "#fff0" or "0px 0px".
*/
var invalidTemplates = /* @__PURE__ */ new Set([
	"auto",
	"none",
	"0"
]);
function makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name) {
	let i = 0;
	let animatableTemplate = void 0;
	while (i < unresolvedKeyframes.length && !animatableTemplate) {
		const keyframe = unresolvedKeyframes[i];
		if (typeof keyframe === "string" && !invalidTemplates.has(keyframe) && analyseComplexValue(keyframe).values.length) animatableTemplate = unresolvedKeyframes[i];
		i++;
	}
	if (animatableTemplate && name) for (const noneIndex of noneKeyframeIndexes) unresolvedKeyframes[noneIndex] = getAnimatableNone(name, animatableTemplate);
}
// node_modules/motion-dom/dist/es/animation/keyframes/DOMKeyframesResolver.mjs
var DOMKeyframesResolver = class extends KeyframeResolver {
	constructor(unresolvedKeyframes, onComplete, name, motionValue, element) {
		super(unresolvedKeyframes, onComplete, name, motionValue, element, true);
	}
	readKeyframes() {
		const { unresolvedKeyframes, element, name } = this;
		if (!element || !element.current) return;
		super.readKeyframes();
		/**
		* If any keyframe is a CSS variable, we need to find its value by sampling the element
		*/
		for (let i = 0; i < unresolvedKeyframes.length; i++) {
			let keyframe = unresolvedKeyframes[i];
			if (typeof keyframe === "string") {
				keyframe = keyframe.trim();
				if (isCSSVariableToken(keyframe)) {
					const resolved = getVariableValue(keyframe, element.current);
					if (resolved !== void 0) unresolvedKeyframes[i] = resolved;
					if (i === unresolvedKeyframes.length - 1) this.finalKeyframe = keyframe;
				}
			}
		}
		/**
		* Resolve "none" values. We do this potentially twice - once before and once after measuring keyframes.
		* This could be seen as inefficient but it's a trade-off to avoid measurements in more situations, which
		* have a far bigger performance impact.
		*/
		this.resolveNoneKeyframes();
		/**
		* Check to see if unit type has changed. If so schedule jobs that will
		* temporarily set styles to the destination keyframes.
		* Skip if we have more than two keyframes or this isn't a positional value.
		* TODO: We can throw if there are multiple keyframes and the value type changes.
		*/
		if (!positionalKeys.has(name) || unresolvedKeyframes.length !== 2) return;
		const [origin, target] = unresolvedKeyframes;
		const originType = findDimensionValueType(origin);
		const targetType = findDimensionValueType(target);
		if (containsCSSVariable(origin) !== containsCSSVariable(target) && positionalValues[name]) {
			this.needsMeasurement = true;
			return;
		}
		/**
		* Either we don't recognise these value types or we can animate between them.
		*/
		if (originType === targetType) return;
		/**
		* If both values are numbers or pixels, we can animate between them by
		* converting them to numbers.
		*/
		if (isNumOrPxType(originType) && isNumOrPxType(targetType)) for (let i = 0; i < unresolvedKeyframes.length; i++) {
			const value = unresolvedKeyframes[i];
			if (typeof value === "string") unresolvedKeyframes[i] = parseFloat(value);
		}
		else if (positionalValues[name])
 /**
		* Else, the only way to resolve this is by measuring the element.
		*/
		this.needsMeasurement = true;
	}
	resolveNoneKeyframes() {
		const { unresolvedKeyframes, name } = this;
		const noneKeyframeIndexes = [];
		for (let i = 0; i < unresolvedKeyframes.length; i++) if (unresolvedKeyframes[i] === null || isNone(unresolvedKeyframes[i])) noneKeyframeIndexes.push(i);
		if (noneKeyframeIndexes.length) makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name);
	}
	measureInitialState() {
		const { element, unresolvedKeyframes, name } = this;
		if (!element || !element.current) return;
		if (name === "height") this.suspendedScrollY = window.pageYOffset;
		this.measuredOrigin = positionalValues[name](element.measureViewportBox(), window.getComputedStyle(element.current));
		unresolvedKeyframes[0] = this.measuredOrigin;
		const measureKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
		if (measureKeyframe !== void 0) element.getValue(name, measureKeyframe).jump(measureKeyframe, false);
	}
	measureEndState() {
		const { element, name, unresolvedKeyframes } = this;
		if (!element || !element.current) return;
		const value = element.getValue(name);
		value && value.jump(this.measuredOrigin, false);
		const finalKeyframeIndex = unresolvedKeyframes.length - 1;
		const finalKeyframe = unresolvedKeyframes[finalKeyframeIndex];
		unresolvedKeyframes[finalKeyframeIndex] = positionalValues[name](element.measureViewportBox(), window.getComputedStyle(element.current));
		if (finalKeyframe !== null && this.finalKeyframe === void 0) this.finalKeyframe = finalKeyframe;
		if (this.removedTransforms?.length) this.removedTransforms.forEach(([unsetTransformName, unsetTransformValue]) => {
			element.getValue(unsetTransformName).set(unsetTransformValue);
		});
		this.resolveNoneKeyframes();
	}
};
// node_modules/motion-dom/dist/es/utils/border-radius.mjs
/**
* The four corner-radius longhands. Shared so the projection mixer, scale
* corrector, WAAPI px-value set and view-transition crop pass don't each carry
* their own copy. Order is irrelevant - every consumer mixes/corrects/animates
* each corner independently.
*/
var cornerRadiusProps = [
	"borderTopLeftRadius",
	"borderTopRightRadius",
	"borderBottomRightRadius",
	"borderBottomLeftRadius"
];
// node_modules/motion-dom/dist/es/utils/resolve-elements.mjs
function resolveElements(elementOrSelector, scope, selectorCache) {
	if (elementOrSelector == null) return [];
	if (elementOrSelector instanceof EventTarget) return [elementOrSelector];
	else if (typeof elementOrSelector === "string") {
		let root = document;
		if (scope) root = scope.current;
		const elements = selectorCache?.[elementOrSelector] ?? root.querySelectorAll(elementOrSelector);
		return elements ? Array.from(elements) : [];
	}
	return Array.from(elementOrSelector).filter((element) => element != null);
}
// node_modules/motion-dom/dist/es/value/types/utils/get-as-type.mjs
/**
* Provided a value and a ValueType, returns the value as that value type.
*/
var getValueAsType = (value, type) => {
	return type && typeof value === "number" ? type.transform(value) : value;
};
// node_modules/motion-dom/dist/es/utils/is-html-element.mjs
/**
* Checks if an element is an HTML element in a way
* that works across iframes
*/
function isHTMLElement(element) {
	return isObject(element) && "offsetHeight" in element && !("ownerSVGElement" in element);
}
// node_modules/motion-dom/dist/es/frameloop/microtask.mjs
var { schedule: microtask, cancel: cancelMicrotask } = /* @__PURE__ */ createRenderBatcher(queueMicrotask, false);
// node_modules/motion-dom/dist/es/gestures/drag/state/is-active.mjs
var isDragging = {
	x: false,
	y: false
};
function isDragActive() {
	return isDragging.x || isDragging.y;
}
// node_modules/motion-dom/dist/es/gestures/drag/state/set-active.mjs
function setDragLock(axis) {
	if (axis === "x" || axis === "y") {
		if (isDragging[axis]) return null;
		else {
			isDragging[axis] = true;
			return () => {
				isDragging[axis] = false;
			};
		}
	} else if (isDragging.x || isDragging.y) return null;
	else {
		isDragging.x = isDragging.y = true;
		return () => {
			isDragging.x = isDragging.y = false;
		};
	}
}
// node_modules/motion-dom/dist/es/gestures/utils/setup.mjs
function setupGesture(elementOrSelector, options) {
	const elements = resolveElements(elementOrSelector);
	const gestureAbortController = new AbortController();
	const eventOptions = {
		passive: true,
		...options,
		signal: gestureAbortController.signal
	};
	const cancel = () => gestureAbortController.abort();
	return [
		elements,
		eventOptions,
		cancel
	];
}
// node_modules/motion-dom/dist/es/gestures/hover.mjs
function isValidHover(event) {
	return !(event.pointerType === "touch" || isDragActive());
}
/**
* Create a hover gesture. hover() is different to .addEventListener("pointerenter")
* in that it has an easier syntax, filters out polyfilled touch events, interoperates
* with drag gestures, and automatically removes the "pointerennd" event listener when the hover ends.
*
* @public
*/
function hover(elementOrSelector, onHoverStart, options = {}) {
	const [elements, eventOptions, cancel] = setupGesture(elementOrSelector, options);
	elements.forEach((element) => {
		let isPressed = false;
		let deferredHoverEnd = false;
		let hoverEndCallback;
		const removePointerLeave = () => {
			element.removeEventListener("pointerleave", onPointerLeave);
		};
		const endHover = (event) => {
			if (hoverEndCallback) {
				hoverEndCallback(event);
				hoverEndCallback = void 0;
			}
			removePointerLeave();
		};
		const onPointerUp = (event) => {
			isPressed = false;
			window.removeEventListener("pointerup", onPointerUp);
			window.removeEventListener("pointercancel", onPointerUp);
			if (deferredHoverEnd) {
				deferredHoverEnd = false;
				endHover(event);
			}
		};
		const onPointerDown = () => {
			isPressed = true;
			window.addEventListener("pointerup", onPointerUp, eventOptions);
			window.addEventListener("pointercancel", onPointerUp, eventOptions);
		};
		const onPointerLeave = (leaveEvent) => {
			if (leaveEvent.pointerType === "touch") return;
			if (isPressed) {
				deferredHoverEnd = true;
				return;
			}
			endHover(leaveEvent);
		};
		const onPointerEnter = (enterEvent) => {
			if (!isValidHover(enterEvent)) return;
			deferredHoverEnd = false;
			const onHoverEnd = onHoverStart(element, enterEvent);
			if (typeof onHoverEnd !== "function") return;
			hoverEndCallback = onHoverEnd;
			element.addEventListener("pointerleave", onPointerLeave, eventOptions);
		};
		element.addEventListener("pointerenter", onPointerEnter, eventOptions);
		element.addEventListener("pointerdown", onPointerDown, eventOptions);
	});
	return cancel;
}
// node_modules/motion-dom/dist/es/gestures/utils/is-node-or-child.mjs
/**
* Recursively traverse up the tree to check whether the provided child node
* is the parent or a descendant of it.
*
* @param parent - Element to find
* @param child - Element to test against parent
*/
var isNodeOrChild = (parent, child) => {
	if (!child) return false;
	else if (parent === child) return true;
	else return isNodeOrChild(parent, child.parentElement);
};
// node_modules/motion-dom/dist/es/gestures/utils/is-primary-pointer.mjs
var isPrimaryPointer = (event) => {
	if (event.pointerType === "mouse") return typeof event.button !== "number" || event.button <= 0;
	else
 /**
	* isPrimary is true for all mice buttons, whereas every touch point
	* is regarded as its own input. So subsequent concurrent touch points
	* will be false.
	*
	* Specifically match against false here as incomplete versions of
	* PointerEvents in very old browser might have it set as undefined.
	*/
	return event.isPrimary !== false;
};
// node_modules/motion-dom/dist/es/gestures/press/utils/is-keyboard-accessible.mjs
var keyboardAccessibleElements = /* @__PURE__ */ new Set([
	"BUTTON",
	"INPUT",
	"SELECT",
	"TEXTAREA",
	"A"
]);
/**
* Checks if an element is natively keyboard accessible (focusable).
* Used by the press gesture to determine if we need to add tabIndex.
*/
function isElementKeyboardAccessible(element) {
	return keyboardAccessibleElements.has(element.tagName) || element.isContentEditable === true;
}
var textInputElements = /* @__PURE__ */ new Set([
	"INPUT",
	"SELECT",
	"TEXTAREA"
]);
/**
* Checks if an element has text selection or direct interaction behavior
* that should block drag gestures from starting.
*
* This specifically targets form controls where the user might want to select
* text or interact with the control (e.g., sliders, dropdowns).
*
* Buttons and links are NOT included because they don't have click-and-move
* actions of their own - they only respond to click events, so dragging
* should still work when initiated from these elements.
*/
function isElementTextInput(element) {
	return textInputElements.has(element.tagName) || element.isContentEditable === true;
}
// node_modules/motion-dom/dist/es/gestures/press/utils/state.mjs
var isPressing = /* @__PURE__ */ new WeakSet();
// node_modules/motion-dom/dist/es/gestures/press/utils/keyboard.mjs
/**
* Filter out events that are not "Enter" keys.
*/
function filterEvents(callback) {
	return (event) => {
		if (event.key !== "Enter") return;
		callback(event);
	};
}
function firePointerEvent(target, type) {
	target.dispatchEvent(new PointerEvent("pointer" + type, {
		isPrimary: true,
		bubbles: true
	}));
}
var enableKeyboardPress = (focusEvent, eventOptions) => {
	const element = focusEvent.currentTarget;
	if (!element) return;
	const handleKeydown = filterEvents(() => {
		if (isPressing.has(element)) return;
		firePointerEvent(element, "down");
		const handleKeyup = filterEvents(() => {
			firePointerEvent(element, "up");
		});
		const handleBlur = () => firePointerEvent(element, "cancel");
		element.addEventListener("keyup", handleKeyup, eventOptions);
		element.addEventListener("blur", handleBlur, eventOptions);
	});
	element.addEventListener("keydown", handleKeydown, eventOptions);
	/**
	* Add an event listener that fires on blur to remove the keydown events.
	*/
	element.addEventListener("blur", () => element.removeEventListener("keydown", handleKeydown), eventOptions);
};
// node_modules/motion-dom/dist/es/gestures/press/index.mjs
/**
* Filter out events that are not primary pointer events, or are triggering
* while a Motion gesture is active.
*/
function isValidPressEvent(event) {
	return isPrimaryPointer(event) && !isDragActive();
}
var claimedPointerDownEvents = /* @__PURE__ */ new WeakSet();
/**
* Create a press gesture.
*
* Press is different to `"pointerdown"`, `"pointerup"` in that it
* automatically filters out secondary pointer events like right
* click and multitouch.
*
* It also adds accessibility support for keyboards, where
* an element with a press gesture will receive focus and
*  trigger on Enter `"keydown"` and `"keyup"` events.
*
* This is different to a browser's `"click"` event, which does
* respond to keyboards but only for the `"click"` itself, rather
* than the press start and end/cancel. The element also needs
* to be focusable for this to work, whereas a press gesture will
* make an element focusable by default.
*
* @public
*/
function press(targetOrSelector, onPressStart, options = {}) {
	const [targets, eventOptions, cancelEvents] = setupGesture(targetOrSelector, options);
	const startPress = (startEvent) => {
		const target = startEvent.currentTarget;
		if (!isValidPressEvent(startEvent)) return;
		if (claimedPointerDownEvents.has(startEvent)) return;
		isPressing.add(target);
		if (options.stopPropagation) claimedPointerDownEvents.add(startEvent);
		const onPressEnd = onPressStart(target, startEvent);
		/**
		* End listeners run in the capture phase so a descendant calling
		* stopPropagation() in its own pointerup handler can't prevent the
		* press gesture from ending. This also keeps the gesture-end
		* ordering consistent with the drag gesture. See #2794.
		*/
		const endEventOptions = {
			...eventOptions,
			capture: true
		};
		const onPointerEnd = (endEvent, success) => {
			window.removeEventListener("pointerup", onPointerUp, endEventOptions);
			window.removeEventListener("pointercancel", onPointerCancel, endEventOptions);
			if (isPressing.has(target)) isPressing.delete(target);
			if (!isValidPressEvent(endEvent)) return;
			if (typeof onPressEnd === "function") onPressEnd(endEvent, { success });
		};
		const onPointerUp = (upEvent) => {
			onPointerEnd(upEvent, target === window || target === document || options.useGlobalTarget || isNodeOrChild(target, upEvent.target));
		};
		const onPointerCancel = (cancelEvent) => {
			onPointerEnd(cancelEvent, false);
		};
		window.addEventListener("pointerup", onPointerUp, endEventOptions);
		window.addEventListener("pointercancel", onPointerCancel, endEventOptions);
	};
	targets.forEach((target) => {
		(options.useGlobalTarget ? window : target).addEventListener("pointerdown", startPress, eventOptions);
		if (isHTMLElement(target)) {
			target.addEventListener("focus", (event) => enableKeyboardPress(event, eventOptions));
			if (!isElementKeyboardAccessible(target) && !target.hasAttribute("tabindex")) target.tabIndex = 0;
		}
	});
	return cancelEvents;
}
// node_modules/motion-dom/dist/es/utils/is-svg-element.mjs
/**
* Checks if an element is an SVG element in a way
* that works across iframes
*/
function isSVGElement(element) {
	return isObject(element) && "ownerSVGElement" in element;
}
// node_modules/motion-dom/dist/es/resize/handle-element.mjs
var resizeHandlers = /* @__PURE__ */ new WeakMap();
var observer;
var getSize = (borderBoxAxis, svgAxis, htmlAxis) => (target, borderBoxSize) => {
	if (borderBoxSize && borderBoxSize[0]) return borderBoxSize[0][borderBoxAxis + "Size"];
	else if (isSVGElement(target) && "getBBox" in target) return target.getBBox()[svgAxis];
	else return target[htmlAxis];
};
var getWidth = /*@__PURE__*/ getSize("inline", "width", "offsetWidth");
var getHeight = /*@__PURE__*/ getSize("block", "height", "offsetHeight");
function notifyTarget({ target, borderBoxSize }) {
	resizeHandlers.get(target)?.forEach((handler) => {
		handler(target, {
			get width() {
				return getWidth(target, borderBoxSize);
			},
			get height() {
				return getHeight(target, borderBoxSize);
			}
		});
	});
}
function notifyAll(entries) {
	entries.forEach(notifyTarget);
}
function createResizeObserver() {
	if (typeof ResizeObserver === "undefined") return;
	observer = new ResizeObserver(notifyAll);
}
function resizeElement(target, handler) {
	if (!observer) createResizeObserver();
	const elements = resolveElements(target);
	elements.forEach((element) => {
		let elementHandlers = resizeHandlers.get(element);
		if (!elementHandlers) {
			elementHandlers = /* @__PURE__ */ new Set();
			resizeHandlers.set(element, elementHandlers);
		}
		elementHandlers.add(handler);
		observer?.observe(element);
	});
	return () => {
		elements.forEach((element) => {
			const elementHandlers = resizeHandlers.get(element);
			elementHandlers?.delete(handler);
			if (!elementHandlers?.size) observer?.unobserve(element);
		});
	};
}
// node_modules/motion-dom/dist/es/resize/handle-window.mjs
var windowCallbacks = /* @__PURE__ */ new Set();
var windowResizeHandler;
function createWindowResizeHandler() {
	windowResizeHandler = () => {
		const info = {
			get width() {
				return window.innerWidth;
			},
			get height() {
				return window.innerHeight;
			}
		};
		windowCallbacks.forEach((callback) => callback(info));
	};
	window.addEventListener("resize", windowResizeHandler);
}
function resizeWindow(callback) {
	windowCallbacks.add(callback);
	if (!windowResizeHandler) createWindowResizeHandler();
	return () => {
		windowCallbacks.delete(callback);
		if (!windowCallbacks.size && typeof windowResizeHandler === "function") {
			window.removeEventListener("resize", windowResizeHandler);
			windowResizeHandler = void 0;
		}
	};
}
// node_modules/motion-dom/dist/es/resize/index.mjs
function resize(a, b) {
	return typeof a === "function" ? resizeWindow(a) : resizeElement(a, b);
}
// node_modules/motion-dom/dist/es/stats/buffer.mjs
var statsBuffer = {
	value: null,
	addProjectionMetrics: null
};
// node_modules/motion-dom/dist/es/utils/is-svg-svg-element.mjs
/**
* Checks if an element is specifically an SVGSVGElement (the root SVG element)
* in a way that works across iframes
*/
function isSVGSVGElement(element) {
	return isSVGElement(element) && element.tagName === "svg";
}
// node_modules/motion-dom/dist/es/value/types/utils/find.mjs
/**
* A list of all ValueTypes
*/
var valueTypes = [
	...dimensionValueTypes,
	color,
	complex
];
/**
* Tests a value against the list of ValueTypes
*/
var findValueType = (v) => valueTypes.find(testValueType(v));
// node_modules/motion-dom/dist/es/projection/geometry/models.mjs
var createAxisDelta = () => ({
	translate: 0,
	scale: 1,
	origin: 0,
	originPoint: 0
});
var createDelta = () => ({
	x: createAxisDelta(),
	y: createAxisDelta()
});
var createAxis = () => ({
	min: 0,
	max: 0
});
var createBox = () => ({
	x: createAxis(),
	y: createAxis()
});
// node_modules/motion-dom/dist/es/render/store.mjs
var visualElementStore = /* @__PURE__ */ new WeakMap();
// node_modules/motion-dom/dist/es/render/utils/is-animation-controls.mjs
function isAnimationControls(v) {
	return v !== null && typeof v === "object" && typeof v.start === "function";
}
// node_modules/motion-dom/dist/es/render/utils/is-variant-label.mjs
/**
* Decides if the supplied variable is variant label
*/
function isVariantLabel(v) {
	return typeof v === "string" || Array.isArray(v);
}
// node_modules/motion-dom/dist/es/render/utils/variant-props.mjs
var variantPriorityOrder = [
	"animate",
	"whileInView",
	"whileFocus",
	"whileHover",
	"whileTap",
	"whileDrag",
	"exit"
];
var variantProps = ["initial", ...variantPriorityOrder];
// node_modules/motion-dom/dist/es/render/utils/is-controlling-variants.mjs
function isControllingVariants(props) {
	return isAnimationControls(props.animate) || variantProps.some((name) => isVariantLabel(props[name]));
}
function isVariantNode(props) {
	return Boolean(isControllingVariants(props) || props.variants);
}
// node_modules/motion-dom/dist/es/render/utils/motion-values.mjs
/**
* Updates motion values from props changes.
* Uses `any` type for element to avoid circular dependencies with VisualElement.
*/
function updateMotionValuesFromProps(element, next, prev) {
	for (const key in next) {
		const nextValue = next[key];
		const prevValue = prev[key];
		if (isMotionValue(nextValue))
 /**
		* If this is a motion value found in props or style, we want to add it
		* to our visual element's motion value map.
		*/
		element.addValue(key, nextValue);
		else if (isMotionValue(prevValue))
 /**
		* If we're swapping from a motion value to a static value,
		* create a new motion value from that
		*/
		element.addValue(key, motionValue(nextValue, { owner: element }));
		else if (prevValue !== nextValue) {
			/**
			* If this is a flat value that has changed, update the motion value
			* or create one if it doesn't exist. We only want to do this if we're
			* not handling the value with our animation state.
			*/
			if (element.hasValue(key)) {
				const existingValue = element.getValue(key);
				if (existingValue.liveStyle === true) existingValue.jump(nextValue);
				else if (!existingValue.hasAnimated) existingValue.set(nextValue);
			} else {
				const latestValue = element.getStaticValue(key);
				element.addValue(key, motionValue(latestValue !== void 0 ? latestValue : nextValue, { owner: element }));
			}
		}
	}
	for (const key in prev) if (next[key] === void 0) element.removeValue(key);
	return next;
}
// node_modules/motion-dom/dist/es/render/utils/reduced-motion/state.mjs
var prefersReducedMotion = { current: null };
var hasReducedMotionListener = { current: false };
// node_modules/motion-dom/dist/es/render/utils/reduced-motion/index.mjs
var isBrowser = typeof window !== "undefined";
function initPrefersReducedMotion() {
	hasReducedMotionListener.current = true;
	if (!isBrowser) return;
	if (window.matchMedia) {
		const motionMediaQuery = window.matchMedia("(prefers-reduced-motion)");
		const setReducedMotionPreferences = () => prefersReducedMotion.current = motionMediaQuery.matches;
		motionMediaQuery.addEventListener("change", setReducedMotionPreferences);
		setReducedMotionPreferences();
	} else prefersReducedMotion.current = false;
}
// node_modules/motion-dom/dist/es/render/VisualElement.mjs
var propEventHandlers = [
	"AnimationStart",
	"AnimationComplete",
	"Update",
	"BeforeLayoutMeasure",
	"LayoutMeasure",
	"LayoutAnimationStart",
	"LayoutAnimationComplete"
];
/**
* Static feature definitions - can be injected by framework layer
*/
var featureDefinitions = {};
/**
* Set feature definitions for all VisualElements.
* This should be called by the framework layer (e.g., framer-motion) during initialization.
*/
function setFeatureDefinitions(definitions) {
	featureDefinitions = definitions;
}
/**
* Get the current feature definitions
*/
function getFeatureDefinitions() {
	return featureDefinitions;
}
/**
* A VisualElement is an imperative abstraction around UI elements such as
* HTMLElement, SVGElement, Three.Object3D etc.
*/
var VisualElement = class {
	/**
	* This method takes React props and returns found MotionValues. For example, HTML
	* MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
	*
	* This isn't an abstract method as it needs calling in the constructor, but it is
	* intended to be one.
	*/
	scrapeMotionValuesFromProps(_props, _prevProps, _visualElement) {
		return {};
	}
	constructor({ parent, props, presenceContext, reducedMotionConfig, skipAnimations, blockInitialAnimation, visualState }, options = {}) {
		/**
		* A reference to the current underlying Instance, e.g. a HTMLElement
		* or Three.Mesh etc.
		*/
		this.current = null;
		/**
		* A set containing references to this VisualElement's children.
		*/
		this.children = /* @__PURE__ */ new Set();
		/**
		* Determine what role this visual element should take in the variant tree.
		*/
		this.isVariantNode = false;
		this.isControllingVariants = false;
		/**
		* Decides whether this VisualElement should animate in reduced motion
		* mode.
		*
		* TODO: This is currently set on every individual VisualElement but feels
		* like it could be set globally.
		*/
		this.shouldReduceMotion = null;
		/**
		* Decides whether animations should be skipped for this VisualElement.
		* Useful for E2E tests and visual regression testing.
		*/
		this.shouldSkipAnimations = false;
		/**
		* A map of all motion values attached to this visual element. Motion
		* values are source of truth for any given animated value. A motion
		* value might be provided externally by the component via props.
		*/
		this.values = /* @__PURE__ */ new Map();
		this.KeyframeResolver = KeyframeResolver;
		/**
		* Cleanup functions for active features (hover/tap/exit etc)
		*/
		this.features = {};
		/**
		* A map of every subscription that binds the provided or generated
		* motion values onChange listeners to this visual element.
		*/
		this.valueSubscriptions = /* @__PURE__ */ new Map();
		/**
		* A reference to the previously-provided motion values as returned
		* from scrapeMotionValuesFromProps. We use the keys in here to determine
		* if any motion values need to be removed after props are updated.
		*/
		this.prevMotionValues = {};
		/**
		* Track whether this element has been mounted before, to detect
		* remounts after Suspense unmount/remount cycles.
		*/
		this.hasBeenMounted = false;
		/**
		* An object containing a SubscriptionManager for each active event.
		*/
		this.events = {};
		/**
		* An object containing an unsubscribe function for each prop event subscription.
		* For example, every "Update" event can have multiple subscribers via
		* VisualElement.on(), but only one of those can be defined via the onUpdate prop.
		*/
		this.propEventSubscriptions = {};
		this.notifyUpdate = () => this.notify("Update", this.latestValues);
		this.render = () => {
			if (!this.current) return;
			this.triggerBuild();
			this.renderInstance(this.current, this.renderState, this.props.style, this.projection);
		};
		this.renderScheduledAt = 0;
		this.scheduleRender = () => {
			const now = time.now();
			if (this.renderScheduledAt < now) {
				this.renderScheduledAt = now;
				frame.render(this.render, false, true);
			}
		};
		const { latestValues, renderState } = visualState;
		this.latestValues = latestValues;
		this.baseTarget = { ...latestValues };
		this.initialValues = props.initial ? { ...latestValues } : {};
		this.renderState = renderState;
		this.parent = parent;
		this.props = props;
		this.presenceContext = presenceContext;
		this.depth = parent ? parent.depth + 1 : 0;
		this.reducedMotionConfig = reducedMotionConfig;
		this.skipAnimationsConfig = skipAnimations;
		this.options = options;
		this.blockInitialAnimation = Boolean(blockInitialAnimation);
		this.isControllingVariants = isControllingVariants(props);
		this.isVariantNode = isVariantNode(props);
		if (this.isVariantNode) this.variantChildren = /* @__PURE__ */ new Set();
		this.manuallyAnimateOnMount = Boolean(parent && parent.current);
		/**
		* Any motion values that are provided to the element when created
		* aren't yet bound to the element, as this would technically be impure.
		* However, we iterate through the motion values and set them to the
		* initial values for this component.
		*
		* TODO: This is impure and we should look at changing this to run on mount.
		* Doing so will break some tests but this isn't necessarily a breaking change,
		* more a reflection of the test.
		*/
		const { willChange, ...initialMotionValues } = this.scrapeMotionValuesFromProps(props, {}, this);
		for (const key in initialMotionValues) {
			const value = initialMotionValues[key];
			if (latestValues[key] !== void 0 && isMotionValue(value)) value.set(latestValues[key]);
		}
	}
	mount(instance) {
		/**
		* If this element has been mounted before (e.g. after a Suspense
		* unmount/remount), reset motion values to their initial state
		* so animations replay correctly from initial → animate.
		*/
		if (this.hasBeenMounted) for (const key in this.initialValues) {
			this.values.get(key)?.jump(this.initialValues[key]);
			this.latestValues[key] = this.initialValues[key];
		}
		this.current = instance;
		visualElementStore.set(instance, this);
		if (this.projection && !this.projection.instance) this.projection.mount(instance);
		if (this.parent && this.isVariantNode && !this.isControllingVariants) this.removeFromVariantTree = this.parent.addVariantChild(this);
		this.values.forEach((value, key) => this.bindToMotionValue(key, value));
		/**
		* Determine reduced motion preference. Only initialize the matchMedia
		* listener if we actually need the dynamic value (i.e., when config
		* is neither "never" nor "always").
		*/
		if (this.reducedMotionConfig === "never") this.shouldReduceMotion = false;
		else if (this.reducedMotionConfig === "always") this.shouldReduceMotion = true;
		else {
			if (!hasReducedMotionListener.current) initPrefersReducedMotion();
			this.shouldReduceMotion = prefersReducedMotion.current;
		}
		if (process.env.NODE_ENV !== "production") warnOnce(this.shouldReduceMotion !== true, "You have Reduced Motion enabled on your device. Animations may not appear as expected.", "reduced-motion-disabled");
		/**
		* Set whether animations should be skipped based on the config.
		*/
		this.shouldSkipAnimations = this.skipAnimationsConfig ?? false;
		this.parent?.addChild(this);
		this.update(this.props, this.presenceContext);
		this.hasBeenMounted = true;
	}
	unmount() {
		this.projection && this.projection.unmount();
		cancelFrame(this.notifyUpdate);
		cancelFrame(this.render);
		this.valueSubscriptions.forEach((remove) => remove());
		this.valueSubscriptions.clear();
		this.removeFromVariantTree && this.removeFromVariantTree();
		this.parent?.removeChild(this);
		for (const key in this.events) this.events[key].clear();
		for (const key in this.features) {
			const feature = this.features[key];
			if (feature) {
				feature.unmount();
				feature.isMounted = false;
			}
		}
		this.current = null;
	}
	addChild(child) {
		this.children.add(child);
		this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set());
		this.enteringChildren.add(child);
	}
	removeChild(child) {
		this.children.delete(child);
		this.enteringChildren && this.enteringChildren.delete(child);
	}
	bindToMotionValue(key, value) {
		if (this.valueSubscriptions.has(key)) this.valueSubscriptions.get(key)();
		if (value.accelerate && acceleratedValues.has(key) && this.current instanceof HTMLElement) {
			const { factory, keyframes, times, ease, duration } = value.accelerate;
			const animation = new NativeAnimation({
				element: this.current,
				name: key,
				keyframes,
				times,
				ease,
				duration: /* @__PURE__ */ secondsToMilliseconds(duration)
			});
			const cleanup = factory(animation);
			this.valueSubscriptions.set(key, () => {
				cleanup();
				animation.cancel();
			});
			return;
		}
		const valueIsTransform = transformProps.has(key);
		if (valueIsTransform && this.onBindTransform) this.onBindTransform();
		const removeOnChange = value.on("change", (latestValue) => {
			this.latestValues[key] = latestValue;
			this.props.onUpdate && frame.preRender(this.notifyUpdate);
			if (valueIsTransform && this.projection) this.projection.isTransformDirty = true;
			this.scheduleRender();
		});
		let removeSyncCheck;
		if (typeof window !== "undefined" && window.MotionCheckAppearSync) removeSyncCheck = window.MotionCheckAppearSync(this, key, value);
		this.valueSubscriptions.set(key, () => {
			removeOnChange();
			if (removeSyncCheck) removeSyncCheck();
		});
	}
	sortNodePosition(other) {
		/**
		* If these nodes aren't even of the same type we can't compare their depth.
		*/
		if (!this.current || !this.sortInstanceNodePosition || this.type !== other.type) return 0;
		return this.sortInstanceNodePosition(this.current, other.current);
	}
	updateFeatures() {
		let key = "animation";
		for (key in featureDefinitions) {
			const featureDefinition = featureDefinitions[key];
			if (!featureDefinition) continue;
			const { isEnabled, Feature: FeatureConstructor } = featureDefinition;
			/**
			* If this feature is enabled but not active, make a new instance.
			*/
			if (!this.features[key] && FeatureConstructor && isEnabled(this.props)) this.features[key] = new FeatureConstructor(this);
			/**
			* If we have a feature, mount or update it.
			*/
			if (this.features[key]) {
				const feature = this.features[key];
				if (feature.isMounted) feature.update();
				else {
					feature.mount();
					feature.isMounted = true;
				}
			}
		}
	}
	triggerBuild() {
		this.build(this.renderState, this.latestValues, this.props);
	}
	/**
	* Measure the current viewport box with or without transforms.
	* Only measures axis-aligned boxes, rotate and skew must be manually
	* removed with a re-render to work.
	*/
	measureViewportBox() {
		return this.current ? this.measureInstanceViewportBox(this.current, this.props) : createBox();
	}
	getStaticValue(key) {
		return this.latestValues[key];
	}
	setStaticValue(key, value) {
		this.latestValues[key] = value;
	}
	/**
	* Update the provided props. Ensure any newly-added motion values are
	* added to our map, old ones removed, and listeners updated.
	*/
	update(props, presenceContext) {
		if (props.transformTemplate || this.props.transformTemplate) this.scheduleRender();
		this.prevProps = this.props;
		this.props = props;
		this.prevPresenceContext = this.presenceContext;
		this.presenceContext = presenceContext;
		/**
		* Update prop event handlers ie onAnimationStart, onAnimationComplete
		*/
		for (let i = 0; i < propEventHandlers.length; i++) {
			const key = propEventHandlers[i];
			if (this.propEventSubscriptions[key]) {
				this.propEventSubscriptions[key]();
				delete this.propEventSubscriptions[key];
			}
			const listener = props["on" + key];
			if (listener) this.propEventSubscriptions[key] = this.on(key, listener);
		}
		this.prevMotionValues = updateMotionValuesFromProps(this, this.scrapeMotionValuesFromProps(props, this.prevProps || {}, this), this.prevMotionValues);
		if (this.handleChildMotionValue) this.handleChildMotionValue();
	}
	getProps() {
		return this.props;
	}
	/**
	* Returns the variant definition with a given name.
	*/
	getVariant(name) {
		return this.props.variants ? this.props.variants[name] : void 0;
	}
	/**
	* Returns the defined default transition on this component.
	*/
	getDefaultTransition() {
		return this.props.transition;
	}
	getTransformPagePoint() {
		return this.props.transformPagePoint;
	}
	getClosestVariantNode() {
		return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
	}
	/**
	* Add a child visual element to our set of children.
	*/
	addVariantChild(child) {
		const closestVariantNode = this.getClosestVariantNode();
		if (closestVariantNode) {
			closestVariantNode.variantChildren && closestVariantNode.variantChildren.add(child);
			return () => closestVariantNode.variantChildren.delete(child);
		}
	}
	/**
	* Add a motion value and bind it to this visual element.
	*/
	addValue(key, value) {
		const existingValue = this.values.get(key);
		if (value !== existingValue) {
			if (existingValue) this.removeValue(key);
			this.bindToMotionValue(key, value);
			this.values.set(key, value);
			this.latestValues[key] = value.get();
		}
	}
	/**
	* Remove a motion value and unbind any active subscriptions.
	*/
	removeValue(key) {
		this.values.delete(key);
		const unsubscribe = this.valueSubscriptions.get(key);
		if (unsubscribe) {
			unsubscribe();
			this.valueSubscriptions.delete(key);
		}
		delete this.latestValues[key];
		this.removeValueFromRenderState(key, this.renderState);
	}
	/**
	* Check whether we have a motion value for this key
	*/
	hasValue(key) {
		return this.values.has(key);
	}
	getValue(key, defaultValue) {
		if (this.props.values && this.props.values[key]) return this.props.values[key];
		let value = this.values.get(key);
		if (value === void 0 && defaultValue !== void 0) {
			value = motionValue(defaultValue === null ? void 0 : defaultValue, { owner: this });
			this.addValue(key, value);
		}
		return value;
	}
	/**
	* If we're trying to animate to a previously unencountered value,
	* we need to check for it in our state and as a last resort read it
	* directly from the instance (which might have performance implications).
	*/
	readValue(key, target) {
		let value = this.latestValues[key] !== void 0 || !this.current ? this.latestValues[key] : this.getBaseTargetFromProps(this.props, key) ?? this.readValueFromInstance(this.current, key, this.options);
		if (value !== void 0 && value !== null) {
			if (typeof value === "string" && (isNumericalString(value) || isZeroValueString(value))) value = parseFloat(value);
			else if (!findValueType(value) && complex.test(target)) value = getAnimatableNone(key, target);
			this.setBaseTarget(key, isMotionValue(value) ? value.get() : value);
		}
		return isMotionValue(value) ? value.get() : value;
	}
	/**
	* Set the base target to later animate back to. This is currently
	* only hydrated on creation and when we first read a value.
	*/
	setBaseTarget(key, value) {
		this.baseTarget[key] = value;
	}
	/**
	* Find the base target for a value thats been removed from all animation
	* props.
	*/
	getBaseTarget(key) {
		const { initial } = this.props;
		let valueFromInitial;
		if (typeof initial === "string" || typeof initial === "object") {
			const variant = resolveVariantFromProps(this.props, initial, this.presenceContext?.custom);
			if (variant) valueFromInitial = variant[key];
		}
		/**
		* If this value still exists in the current initial variant, read that.
		*/
		if (initial && valueFromInitial !== void 0) return valueFromInitial;
		/**
		* Alternatively, if this VisualElement config has defined a getBaseTarget
		* so we can read the value from an alternative source, try that.
		*/
		const target = this.getBaseTargetFromProps(this.props, key);
		if (target !== void 0 && !isMotionValue(target)) return target;
		/**
		* If the value was initially defined on initial, but it doesn't any more,
		* return undefined. Otherwise return the value as initially read from the DOM.
		*/
		return this.initialValues[key] !== void 0 && valueFromInitial === void 0 ? void 0 : this.baseTarget[key];
	}
	on(eventName, callback) {
		if (!this.events[eventName]) this.events[eventName] = new SubscriptionManager();
		return this.events[eventName].add(callback);
	}
	notify(eventName, ...args) {
		if (this.events[eventName]) this.events[eventName].notify(...args);
	}
	scheduleRenderMicrotask() {
		microtask.render(this.render);
	}
};
// node_modules/motion-dom/dist/es/render/dom/DOMVisualElement.mjs
var DOMVisualElement = class extends VisualElement {
	constructor() {
		super(...arguments);
		this.KeyframeResolver = DOMKeyframesResolver;
	}
	sortInstanceNodePosition(a, b) {
		/**
		* compareDocumentPosition returns a bitmask, by using the bitwise &
		* we're returning true if 2 in that bitmask is set to true. 2 is set
		* to true if b preceeds a.
		*/
		return a.compareDocumentPosition(b) & 2 ? 1 : -1;
	}
	getBaseTargetFromProps(props, key) {
		const style = props.style;
		return style ? style[key] : void 0;
	}
	removeValueFromRenderState(key, { vars, style }) {
		delete vars[key];
		delete style[key];
	}
	handleChildMotionValue() {
		if (this.childSubscription) {
			this.childSubscription();
			delete this.childSubscription;
		}
		const { children } = this.props;
		if (isMotionValue(children)) this.childSubscription = children.on("change", (latest) => {
			if (this.current) this.current.textContent = `${latest}`;
		});
	}
};
// node_modules/motion-dom/dist/es/render/Feature.mjs
/**
* Feature base class for extending VisualElement functionality.
* Features are plugins that can be mounted/unmounted to add behavior
* like gestures, animations, or layout tracking.
*/
var Feature = class {
	constructor(node) {
		this.isMounted = false;
		this.node = node;
	}
	update() {}
};
// node_modules/motion-dom/dist/es/projection/geometry/conversion.mjs
/**
* Bounding boxes tend to be defined as top, left, right, bottom. For various operations
* it's easier to consider each axis individually. This function returns a bounding box
* as a map of single-axis min/max values.
*/
function convertBoundingBoxToBox({ top, left, right, bottom }) {
	return {
		x: {
			min: left,
			max: right
		},
		y: {
			min: top,
			max: bottom
		}
	};
}
function convertBoxToBoundingBox({ x, y }) {
	return {
		top: y.min,
		right: x.max,
		bottom: y.max,
		left: x.min
	};
}
/**
* Applies a TransformPoint function to a bounding box. TransformPoint is usually a function
* provided by Framer to allow measured points to be corrected for device scaling. This is used
* when measuring DOM elements and DOM event points.
*/
function transformBoxPoints(point, transformPoint) {
	if (!transformPoint) return point;
	const topLeft = transformPoint({
		x: point.left,
		y: point.top
	});
	const bottomRight = transformPoint({
		x: point.right,
		y: point.bottom
	});
	return {
		top: topLeft.y,
		left: topLeft.x,
		bottom: bottomRight.y,
		right: bottomRight.x
	};
}
// node_modules/motion-dom/dist/es/projection/utils/has-transform.mjs
function isIdentityScale(scale) {
	return scale === void 0 || scale === 1;
}
function hasScale({ scale, scaleX, scaleY }) {
	return !isIdentityScale(scale) || !isIdentityScale(scaleX) || !isIdentityScale(scaleY);
}
function hasTransform(values) {
	return hasScale(values) || has2DTranslate(values) || values.z || values.rotate || values.rotateX || values.rotateY || values.skewX || values.skewY;
}
function has2DTranslate(values) {
	return is2DTranslate(values.x) || is2DTranslate(values.y);
}
function is2DTranslate(value) {
	return value && value !== "0%";
}
// node_modules/motion-dom/dist/es/projection/geometry/delta-apply.mjs
/**
* Scales a point based on a factor and an originPoint
*/
function scalePoint(point, scale, originPoint) {
	return originPoint + scale * (point - originPoint);
}
/**
* Applies a translate/scale delta to a point
*/
function applyPointDelta(point, translate, scale, originPoint, boxScale) {
	if (boxScale !== void 0) point = scalePoint(point, boxScale, originPoint);
	return scalePoint(point, scale, originPoint) + translate;
}
/**
* Applies a translate/scale delta to an axis
*/
function applyAxisDelta(axis, translate = 0, scale = 1, originPoint, boxScale) {
	axis.min = applyPointDelta(axis.min, translate, scale, originPoint, boxScale);
	axis.max = applyPointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
* Applies a translate/scale delta to a box
*/
function applyBoxDelta(box, { x, y }) {
	applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
	applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
}
var TREE_SCALE_SNAP_MIN = .999999999999;
var TREE_SCALE_SNAP_MAX = 1.0000000000001;
/**
* Apply a tree of deltas to a box. We do this to calculate the effect of all the transforms
* in a tree upon our box before then calculating how to project it into our desired viewport-relative box
*
* This is the final nested loop within updateLayoutDelta for future refactoring
*/
function applyTreeDeltas(box, treeScale, treePath, isSharedTransition = false) {
	const treeLength = treePath.length;
	if (!treeLength) return;
	treeScale.x = treeScale.y = 1;
	let node;
	let delta;
	for (let i = 0; i < treeLength; i++) {
		node = treePath[i];
		delta = node.projectionDelta;
		/**
		* TODO: Prefer to remove this, but currently we have motion components with
		* display: contents in Framer.
		*/
		const { visualElement } = node.options;
		if (visualElement && visualElement.props.style && visualElement.props.style.display === "contents") continue;
		if (isSharedTransition && node.options.layoutScroll && node.scroll && node !== node.root) {
			translateAxis(box.x, -node.scroll.offset.x);
			translateAxis(box.y, -node.scroll.offset.y);
		}
		if (delta) {
			treeScale.x *= delta.x.scale;
			treeScale.y *= delta.y.scale;
			applyBoxDelta(box, delta);
		}
		if (isSharedTransition && hasTransform(node.latestValues)) transformBox(box, node.latestValues, node.layout?.layoutBox);
	}
	/**
	* Snap tree scale back to 1 if it's within a non-perceivable threshold.
	* This will help reduce useless scales getting rendered.
	*/
	if (treeScale.x < TREE_SCALE_SNAP_MAX && treeScale.x > TREE_SCALE_SNAP_MIN) treeScale.x = 1;
	if (treeScale.y < TREE_SCALE_SNAP_MAX && treeScale.y > TREE_SCALE_SNAP_MIN) treeScale.y = 1;
}
function translateAxis(axis, distance) {
	axis.min += distance;
	axis.max += distance;
}
/**
* Apply a transform to an axis from the latest resolved motion values.
* This function basically acts as a bridge between a flat motion value map
* and applyAxisDelta
*/
function transformAxis(axis, axisTranslate, axisScale, boxScale, axisOrigin = .5) {
	applyAxisDelta(axis, axisTranslate, axisScale, mixNumber$1(axis.min, axis.max, axisOrigin), boxScale);
}
function resolveAxisTranslate(value, axis) {
	if (typeof value === "string") return parseFloat(value) / 100 * (axis.max - axis.min);
	return value;
}
/**
* Apply a transform to a box from the latest resolved motion values.
*/
function transformBox(box, transform, sourceBox) {
	const resolveBox = sourceBox ?? box;
	transformAxis(box.x, resolveAxisTranslate(transform.x, resolveBox.x), transform.scaleX, transform.scale, transform.originX);
	transformAxis(box.y, resolveAxisTranslate(transform.y, resolveBox.y), transform.scaleY, transform.scale, transform.originY);
}
// node_modules/motion-dom/dist/es/projection/utils/measure.mjs
function measureViewportBox(instance, transformPoint) {
	return convertBoundingBoxToBox(transformBoxPoints(instance.getBoundingClientRect(), transformPoint));
}
function measurePageBox(element, rootProjectionNode, transformPagePoint) {
	const viewportBox = measureViewportBox(element, transformPagePoint);
	const { scroll } = rootProjectionNode;
	if (scroll) {
		translateAxis(viewportBox.x, scroll.offset.x);
		translateAxis(viewportBox.y, scroll.offset.y);
	}
	return viewportBox;
}
// node_modules/motion-dom/dist/es/render/html/utils/build-transform.mjs
var translateAlias = {
	x: "translateX",
	y: "translateY",
	z: "translateZ",
	transformPerspective: "perspective"
};
var numTransforms = transformPropOrder.length;
/**
* Build a CSS transform style from individual x/y/scale etc properties.
*
* This outputs with a default order of transforms/scales/rotations, this can be customised by
* providing a transformTemplate function.
*/
function buildTransform(latestValues, transform, transformTemplate) {
	let transformString = "";
	let transformIsDefault = true;
	/**
	* Loop over all possible transforms in order, adding the ones that
	* are present to the transform string.
	*/
	for (let i = 0; i < numTransforms; i++) {
		const key = transformPropOrder[i];
		const value = latestValues[key];
		if (value === void 0) continue;
		let valueIsDefault = true;
		if (typeof value === "number") valueIsDefault = value === (key.startsWith("scale") ? 1 : 0);
		else {
			const parsed = parseFloat(value);
			valueIsDefault = key.startsWith("scale") ? parsed === 1 : parsed === 0;
		}
		if (!valueIsDefault || transformTemplate) {
			const valueAsType = getValueAsType(value, numberValueTypes[key]);
			if (!valueIsDefault) {
				transformIsDefault = false;
				const transformName = translateAlias[key] || key;
				transformString += `${transformName}(${valueAsType}) `;
			}
			if (transformTemplate) transform[key] = valueAsType;
		}
	}
	const pathRotation = latestValues.pathRotation;
	if (pathRotation) {
		transformIsDefault = false;
		transformString += `rotate(${getValueAsType(pathRotation, numberValueTypes.pathRotation)}) `;
	}
	transformString = transformString.trim();
	if (transformTemplate) transformString = transformTemplate(transform, transformIsDefault ? "" : transformString);
	else if (transformIsDefault) transformString = "none";
	return transformString;
}
// node_modules/motion-dom/dist/es/render/html/utils/build-styles.mjs
function buildHTMLStyles(state, latestValues, transformTemplate) {
	const { style, vars, transformOrigin } = state;
	let hasTransform = false;
	let hasTransformOrigin = false;
	/**
	* Loop over all our latest animated values and decide whether to handle them
	* as a style or CSS variable.
	*
	* Transforms and transform origins are kept separately for further processing.
	*/
	for (const key in latestValues) {
		const value = latestValues[key];
		if (transformProps.has(key)) {
			hasTransform = true;
			continue;
		} else if (isCSSVariableName(key)) {
			vars[key] = value;
			continue;
		} else {
			const valueAsType = getValueAsType(value, numberValueTypes[key]);
			if (key.startsWith("origin")) {
				hasTransformOrigin = true;
				transformOrigin[key] = valueAsType;
			} else style[key] = valueAsType;
		}
	}
	if (!latestValues.transform) {
		if (hasTransform || transformTemplate) style.transform = buildTransform(latestValues, state.transform, transformTemplate);
		else if (style.transform)
 /**
		* If we have previously created a transform but currently don't have any,
		* reset transform style to none.
		*/
		style.transform = "none";
	}
	/**
	* Build a transformOrigin style. Uses the same defaults as the browser for
	* undefined origins.
	*/
	if (hasTransformOrigin) {
		const { originX = "50%", originY = "50%", originZ = 0 } = transformOrigin;
		style.transformOrigin = `${originX} ${originY} ${originZ}`;
	}
}
// node_modules/motion-dom/dist/es/render/html/utils/render.mjs
function renderHTML(element, { style, vars }, styleProp, projection) {
	const elementStyle = element.style;
	let key;
	for (key in style) elementStyle[key] = style[key];
	projection?.applyProjectionStyles(elementStyle, styleProp);
	for (key in vars) elementStyle.setProperty(key, vars[key]);
}
// node_modules/motion-dom/dist/es/projection/styles/scale-border-radius.mjs
function pixelsToPercent(pixels, axis) {
	if (axis.max === axis.min) return 0;
	return pixels / (axis.max - axis.min) * 100;
}
/**
* We always correct borderRadius as a percentage rather than pixels to reduce paints.
* For example, if you are projecting a box that is 100px wide with a 10px borderRadius
* into a box that is 200px wide with a 20px borderRadius, that is actually a 10%
* borderRadius in both states. If we animate between the two in pixels that will trigger
* a paint each time. If we animate between the two in percentage we'll avoid a paint.
*/
var correctBorderRadius = { correct: (latest, node) => {
	if (!node.target) return latest;
	/**
	* If latest is a string, if it's a percentage we can return immediately as it's
	* going to be stretched appropriately. Otherwise, if it's a pixel, convert it to a number.
	*/
	if (typeof latest === "string") {
		if (px.test(latest)) latest = parseFloat(latest);
		else return latest;
	}
	return `${pixelsToPercent(latest, node.target.x)}% ${pixelsToPercent(latest, node.target.y)}%`;
} };
// node_modules/motion-dom/dist/es/projection/styles/scale-box-shadow.mjs
var correctBoxShadow = { correct: (latest, { treeScale, projectionDelta }) => {
	const original = latest;
	const shadow = complex.parse(latest);
	if (shadow.length > 5) return original;
	const template = complex.createTransformer(latest);
	const offset = typeof shadow[0] !== "number" ? 1 : 0;
	const xScale = projectionDelta.x.scale * treeScale.x;
	const yScale = projectionDelta.y.scale * treeScale.y;
	shadow[0 + offset] /= xScale;
	shadow[1 + offset] /= yScale;
	/**
	* Ideally we'd correct x and y scales individually, but because blur and
	* spread apply to both we have to take a scale average and apply that instead.
	* We could potentially improve the outcome of this by incorporating the ratio between
	* the two scales.
	*/
	const averageScale = mixNumber$1(xScale, yScale, .5);
	if (typeof shadow[2 + offset] === "number") shadow[2 + offset] /= averageScale;
	if (typeof shadow[3 + offset] === "number") shadow[3 + offset] /= averageScale;
	return template(shadow);
} };
// node_modules/motion-dom/dist/es/projection/styles/scale-correction.mjs
var scaleCorrectors = {
	borderRadius: {
		...correctBorderRadius,
		applyTo: [...cornerRadiusProps]
	},
	borderTopLeftRadius: correctBorderRadius,
	borderTopRightRadius: correctBorderRadius,
	borderBottomLeftRadius: correctBorderRadius,
	borderBottomRightRadius: correctBorderRadius,
	boxShadow: correctBoxShadow
};
// node_modules/motion-dom/dist/es/render/utils/is-forced-motion-value.mjs
function isForcedMotionValue(key, { layout, layoutId }) {
	return transformProps.has(key) || key.startsWith("origin") || (layout || layoutId !== void 0) && (!!scaleCorrectors[key] || key === "opacity");
}
// node_modules/motion-dom/dist/es/render/html/utils/scrape-motion-values.mjs
function scrapeMotionValuesFromProps$1(props, prevProps, visualElement) {
	const style = props.style;
	const prevStyle = prevProps?.style;
	const newValues = {};
	if (!style) return newValues;
	for (const key in style) if (isMotionValue(style[key]) || prevStyle && isMotionValue(prevStyle[key]) || isForcedMotionValue(key, props) || visualElement?.getValue(key)?.liveStyle !== void 0) newValues[key] = style[key];
	return newValues;
}
// node_modules/motion-dom/dist/es/render/html/HTMLVisualElement.mjs
function getComputedStyle$1(element) {
	return window.getComputedStyle(element);
}
var HTMLVisualElement = class extends DOMVisualElement {
	constructor() {
		super(...arguments);
		this.type = "html";
		this.renderInstance = renderHTML;
	}
	mount(instance) {
		/**
		* If a custom component forwards its ref to something other than a
		* HTML/SVG element (a class instance, an imperative handle) there's
		* nothing for Motion to style, measure or attach gestures to. #2777
		*/
		invariant(Boolean(instance.style), "motion.create() components must forward their ref to a HTML or SVG element", "custom-component-ref");
		super.mount(instance);
	}
	readValueFromInstance(instance, key) {
		if (transformProps.has(key)) return this.projection?.isProjecting ? defaultTransformValue(key) : readTransformValue(instance, key);
		else {
			const computedStyle = getComputedStyle$1(instance);
			const value = (isCSSVariableName(key) ? computedStyle.getPropertyValue(key) : computedStyle[key]) || 0;
			return typeof value === "string" ? value.trim() : value;
		}
	}
	measureInstanceViewportBox(instance, { transformPagePoint }) {
		return measureViewportBox(instance, transformPagePoint);
	}
	build(renderState, latestValues, props) {
		buildHTMLStyles(renderState, latestValues, props.transformTemplate);
	}
	scrapeMotionValuesFromProps(props, prevProps, visualElement) {
		return scrapeMotionValuesFromProps$1(props, prevProps, visualElement);
	}
};
// node_modules/motion-dom/dist/es/render/svg/utils/path.mjs
var dashKeys = {
	offset: "stroke-dashoffset",
	array: "stroke-dasharray"
};
var camelKeys = {
	offset: "strokeDashoffset",
	array: "strokeDasharray"
};
/**
* Build SVG path properties. Uses the path's measured length to convert
* our custom pathLength, pathSpacing and pathOffset into stroke-dashoffset
* and stroke-dasharray attributes.
*
* This function is mutative to reduce per-frame GC.
*
* Note: We use unitless values for stroke-dasharray and stroke-dashoffset
* because Safari incorrectly scales px values when the page is zoomed.
*/
function buildSVGPath(attrs, length, spacing = 1, offset = 0, useDashCase = true) {
	attrs.pathLength = 1;
	const keys = useDashCase ? dashKeys : camelKeys;
	attrs[keys.offset] = `${-offset}`;
	attrs[keys.array] = `${length} ${spacing}`;
}
// node_modules/motion-dom/dist/es/render/svg/utils/build-attrs.mjs
/**
* CSS Motion Path properties that should remain as CSS styles on SVG elements.
*/
var cssMotionPathProperties = [
	"offsetDistance",
	"offsetPath",
	"offsetRotate",
	"offsetAnchor"
];
/**
* Build SVG visual attributes, like cx and style.transform
*/
function buildSVGAttrs(state, { attrX, attrY, attrScale, pathLength, pathSpacing = 1, pathOffset = 0, ...latest }, isSVGTag, transformTemplate, styleProp) {
	buildHTMLStyles(state, latest, transformTemplate);
	/**
	* For svg tags we just want to make sure viewBox is animatable and treat all the styles
	* as normal HTML tags.
	*/
	if (isSVGTag) {
		if (state.style.viewBox) state.attrs.viewBox = state.style.viewBox;
		return;
	}
	state.attrs = state.style;
	state.style = {};
	const { attrs, style } = state;
	/**
	* However, we apply transforms as CSS transforms.
	* So if we detect a transform, transformOrigin we take it from attrs and copy it into style.
	*/
	if (attrs.transform) {
		style.transform = attrs.transform;
		delete attrs.transform;
	}
	if (style.transform || attrs.transformOrigin) {
		style.transformOrigin = attrs.transformOrigin ?? "50% 50%";
		delete attrs.transformOrigin;
	}
	if (style.transform) {
		/**
		* SVG's element transform-origin uses its own median as a reference.
		* Therefore, transformBox becomes a fill-box
		*/
		style.transformBox = styleProp?.transformBox ?? "fill-box";
		delete attrs.transformBox;
	}
	for (const key of cssMotionPathProperties) if (attrs[key] !== void 0) {
		style[key] = attrs[key];
		delete attrs[key];
	}
	if (attrX !== void 0) attrs.x = attrX;
	if (attrY !== void 0) attrs.y = attrY;
	if (attrScale !== void 0) attrs.scale = attrScale;
	if (pathLength !== void 0) buildSVGPath(attrs, pathLength, pathSpacing, pathOffset, false);
}
// node_modules/motion-dom/dist/es/render/svg/utils/camel-case-attrs.mjs
/**
* A set of attribute names that are always read/written as camel case.
*/
var camelCaseAttributes = /* @__PURE__ */ new Set([
	"baseFrequency",
	"diffuseConstant",
	"kernelMatrix",
	"kernelUnitLength",
	"keySplines",
	"keyTimes",
	"limitingConeAngle",
	"markerHeight",
	"markerWidth",
	"numOctaves",
	"targetX",
	"targetY",
	"surfaceScale",
	"specularConstant",
	"specularExponent",
	"stdDeviation",
	"tableValues",
	"viewBox",
	"gradientTransform",
	"pathLength",
	"startOffset",
	"textLength",
	"lengthAdjust"
]);
// node_modules/motion-dom/dist/es/render/svg/utils/is-svg-tag.mjs
var isSVGTag = (tag) => typeof tag === "string" && tag.toLowerCase() === "svg";
// node_modules/motion-dom/dist/es/render/svg/utils/render.mjs
function renderSVG(element, renderState, _styleProp, projection) {
	renderHTML(element, renderState, void 0, projection);
	for (const key in renderState.attrs) element.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, renderState.attrs[key]);
}
// node_modules/motion-dom/dist/es/render/svg/utils/scrape-motion-values.mjs
function scrapeMotionValuesFromProps(props, prevProps, visualElement) {
	const newValues = scrapeMotionValuesFromProps$1(props, prevProps, visualElement);
	for (const key in props) if (isMotionValue(props[key]) || isMotionValue(prevProps[key])) {
		const targetKey = transformPropOrder.indexOf(key) !== -1 ? "attr" + key.charAt(0).toUpperCase() + key.substring(1) : key;
		newValues[targetKey] = props[key];
	}
	return newValues;
}
// node_modules/motion-dom/dist/es/render/svg/SVGVisualElement.mjs
var SVGVisualElement = class extends DOMVisualElement {
	constructor() {
		super(...arguments);
		this.type = "svg";
		this.isSVGTag = false;
		this.measureInstanceViewportBox = createBox;
	}
	getBaseTargetFromProps(props, key) {
		return props[key];
	}
	readValueFromInstance(instance, key) {
		if (transformProps.has(key)) {
			const defaultType = getDefaultValueType(key);
			return defaultType ? defaultType.default || 0 : 0;
		}
		key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
		return instance.getAttribute(key);
	}
	scrapeMotionValuesFromProps(props, prevProps, visualElement) {
		return scrapeMotionValuesFromProps(props, prevProps, visualElement);
	}
	build(renderState, latestValues, props) {
		buildSVGAttrs(renderState, latestValues, this.isSVGTag, props.transformTemplate, props.style);
	}
	renderInstance(instance, renderState, styleProp, projection) {
		renderSVG(instance, renderState, styleProp, projection);
	}
	mount(instance) {
		this.isSVGTag = isSVGTag(instance.tagName);
		super.mount(instance);
	}
};
// node_modules/motion-dom/dist/es/render/utils/get-variant-context.mjs
var numVariantProps = variantProps.length;
/**
* Get variant context from a visual element's parent chain.
* Uses `any` type for visualElement to avoid circular dependencies.
*/
function getVariantContext(visualElement) {
	if (!visualElement) return void 0;
	if (!visualElement.isControllingVariants) {
		const context = visualElement.parent ? getVariantContext(visualElement.parent) || {} : {};
		if (visualElement.props.initial !== void 0) context.initial = visualElement.props.initial;
		return context;
	}
	const context = {};
	for (let i = 0; i < numVariantProps; i++) {
		const name = variantProps[i];
		const prop = visualElement.props[name];
		if (isVariantLabel(prop) || prop === false) context[name] = prop;
	}
	return context;
}
// node_modules/motion-dom/dist/es/render/utils/shallow-compare.mjs
function shallowCompare(next, prev) {
	if (!Array.isArray(prev)) return false;
	const prevLength = prev.length;
	if (prevLength !== next.length) return false;
	for (let i = 0; i < prevLength; i++) if (prev[i] !== next[i]) return false;
	return true;
}
// node_modules/motion-dom/dist/es/render/utils/animation-state.mjs
var reversePriorityOrder = [...variantPriorityOrder].reverse();
var numAnimationTypes = variantPriorityOrder.length;
function createAnimateFunction(visualElement) {
	return (animations) => {
		return Promise.all(animations.map(({ animation, options }) => animateVisualElement(visualElement, animation, options)));
	};
}
function createAnimationState(visualElement) {
	let animate = createAnimateFunction(visualElement);
	let state = createState();
	let isInitialRender = true;
	/**
	* Track whether the animation state has been reset (e.g. via StrictMode
	* double-invocation or Suspense unmount/remount). On the first
	* animateChanges() call after a reset we need to behave like the initial
	* render for variant-inheritance checks, even though isInitialRender is
	* already false.
	*/
	let wasReset = false;
	/**
	* This function will be used to reduce the animation definitions for
	* each active animation type into an object of resolved values for it.
	*/
	const buildResolvedTypeValues = (type) => (acc, definition) => {
		const resolved = resolveVariant(visualElement, definition, type === "exit" ? visualElement.presenceContext?.custom : void 0);
		if (resolved) {
			const { transition, transitionEnd, ...target } = resolved;
			acc = {
				...acc,
				...target,
				...transitionEnd
			};
		}
		return acc;
	};
	/**
	* This just allows us to inject mocked animation functions
	* @internal
	*/
	function setAnimateFunction(makeAnimator) {
		animate = makeAnimator(visualElement);
	}
	/**
	* When we receive new props, we need to:
	* 1. Create a list of protected keys for each type. This is a directory of
	*    value keys that are currently being "handled" by types of a higher priority
	*    so that whenever an animation is played of a given type, these values are
	*    protected from being animated.
	* 2. Determine if an animation type needs animating.
	* 3. Determine if any values have been removed from a type and figure out
	*    what to animate those to.
	*/
	function animateChanges(changedActiveType) {
		const { props } = visualElement;
		const context = getVariantContext(visualElement.parent) || {};
		/**
		* A list of animations that we'll build into as we iterate through the animation
		* types. This will get executed at the end of the function.
		*/
		const animations = [];
		/**
		* Keep track of which values have been removed. Then, as we hit lower priority
		* animation types, we can check if they contain removed values and animate to that.
		*/
		const removedKeys = /* @__PURE__ */ new Set();
		/**
		* A dictionary of all encountered keys. This is an object to let us build into and
		* copy it without iteration. Each time we hit an animation type we set its protected
		* keys - the keys its not allowed to animate - to the latest version of this object.
		*/
		let encounteredKeys = {};
		/**
		* If a variant has been removed at a given index, and this component is controlling
		* variant animations, we want to ensure lower-priority variants are forced to animate.
		*/
		let removedVariantIndex = Infinity;
		/**
		* Iterate through all animation types in reverse priority order. For each, we want to
		* detect which values it's handling and whether or not they've changed (and therefore
		* need to be animated). If any values have been removed, we want to detect those in
		* lower priority props and flag for animation.
		*/
		for (let i = 0; i < numAnimationTypes; i++) {
			const type = reversePriorityOrder[i];
			const typeState = state[type];
			const prop = props[type] !== void 0 ? props[type] : context[type];
			const propIsVariant = isVariantLabel(prop);
			/**
			* If this type has *just* changed isActive status, set activeDelta
			* to that status. Otherwise set to null.
			*/
			const activeDelta = type === changedActiveType ? typeState.isActive : null;
			if (activeDelta === false) removedVariantIndex = i;
			/**
			* If this prop is an inherited variant, rather than been set directly on the
			* component itself, we want to make sure we allow the parent to trigger animations.
			*
			* TODO: Can probably change this to a !isControllingVariants check
			*/
			let isInherited = prop === context[type] && prop !== props[type] && propIsVariant;
			if (isInherited && (isInitialRender || wasReset) && visualElement.manuallyAnimateOnMount) isInherited = false;
			/**
			* Set all encountered keys so far as the protected keys for this type. This will
			* be any key that has been animated or otherwise handled by active, higher-priortiy types.
			*/
			typeState.protectedKeys = { ...encounteredKeys };
			if (!typeState.isActive && activeDelta === null || !prop && !typeState.prevProp || isAnimationControls(prop) || typeof prop === "boolean") continue;
			/**
			* If exit is already active and wasn't just activated, skip
			* re-processing to prevent interrupting running exit animations.
			* Re-resolving exit with a changed custom value can start new
			* value animations that stop the originals, leaving the exit
			* animation promise unresolved and the component stuck in the DOM.
			*/
			if (type === "exit" && typeState.isActive && activeDelta !== true) {
				if (typeState.prevResolvedValues) encounteredKeys = {
					...encounteredKeys,
					...typeState.prevResolvedValues
				};
				continue;
			}
			/**
			* As we go look through the values defined on this type, if we detect
			* a changed value or a value that was removed in a higher priority, we set
			* this to true and add this prop to the animation list.
			*/
			const variantDidChange = checkVariantsDidChange(typeState.prevProp, prop);
			let shouldAnimateType = variantDidChange || type === changedActiveType && typeState.isActive && !isInherited && propIsVariant || i > removedVariantIndex && propIsVariant;
			let handledRemovedValues = false;
			/**
			* As animations can be set as variant lists, variants or target objects, we
			* coerce everything to an array if it isn't one already
			*/
			const definitionList = Array.isArray(prop) ? prop : [prop];
			/**
			* Build an object of all the resolved values. We'll use this in the subsequent
			* animateChanges calls to determine whether a value has changed.
			*/
			let resolvedValues = definitionList.reduce(buildResolvedTypeValues(type), {});
			if (activeDelta === false) resolvedValues = {};
			/**
			* Now we need to loop through all the keys in the prev prop and this prop,
			* and decide:
			* 1. If the value has changed, and needs animating
			* 2. If it has been removed, and needs adding to the removedKeys set
			* 3. If it has been removed in a higher priority type and needs animating
			* 4. If it hasn't been removed in a higher priority but hasn't changed, and
			*    needs adding to the type's protectedKeys list.
			*/
			const { prevResolvedValues = {} } = typeState;
			const allKeys = {
				...prevResolvedValues,
				...resolvedValues
			};
			const markToAnimate = (key) => {
				shouldAnimateType = true;
				if (removedKeys.has(key)) {
					handledRemovedValues = true;
					removedKeys.delete(key);
				}
				typeState.needsAnimating[key] = true;
				const motionValue = visualElement.getValue(key);
				if (motionValue) motionValue.liveStyle = false;
			};
			for (const key in allKeys) {
				const next = resolvedValues[key];
				const prev = prevResolvedValues[key];
				if (encounteredKeys.hasOwnProperty(key)) continue;
				/**
				* If the value has changed, we probably want to animate it.
				*/
				let valueHasChanged = false;
				if (isKeyframesTarget(next) && isKeyframesTarget(prev)) valueHasChanged = !shallowCompare(next, prev) || variantDidChange;
				else valueHasChanged = next !== prev;
				if (valueHasChanged) {
					if (next !== void 0 && next !== null) markToAnimate(key);
					else removedKeys.add(key);
				} else if (next !== void 0 && removedKeys.has(key))
 /**
				* If next hasn't changed and it isn't undefined, we want to check if it's
				* been removed by a higher priority
				*/
				markToAnimate(key);
				else
 /**
				* If it hasn't changed, we add it to the list of protected values
				* to ensure it doesn't get animated.
				*/
				typeState.protectedKeys[key] = true;
			}
			/**
			* Update the typeState so next time animateChanges is called we can compare the
			* latest prop and resolvedValues to these.
			*/
			typeState.prevProp = prop;
			typeState.prevResolvedValues = resolvedValues;
			if (typeState.isActive) encounteredKeys = {
				...encounteredKeys,
				...resolvedValues
			};
			if ((isInitialRender || wasReset) && visualElement.blockInitialAnimation) shouldAnimateType = false;
			/**
			* If this is an inherited prop we want to skip this animation
			* unless the inherited variants haven't changed on this render.
			*/
			const willAnimateViaParent = isInherited && variantDidChange;
			if (shouldAnimateType && (!willAnimateViaParent || handledRemovedValues)) animations.push(...definitionList.map((animation) => {
				const options = { type };
				/**
				* If we're performing the initial animation, but we're not
				* rendering at the same time as the variant-controlling parent,
				* we want to use the parent's transition to calculate the stagger.
				*/
				if (typeof animation === "string" && (isInitialRender || wasReset) && !willAnimateViaParent && visualElement.manuallyAnimateOnMount && visualElement.parent) {
					const { parent } = visualElement;
					const parentVariant = resolveVariant(parent, animation);
					if (parent.enteringChildren && parentVariant) {
						const { delayChildren } = parentVariant.transition || {};
						options.delay = calcChildStagger(parent.enteringChildren, visualElement, delayChildren);
					}
				}
				return {
					animation,
					options
				};
			}));
		}
		/**
		* If there are some removed value that haven't been dealt with,
		* we need to create a new animation that falls back either to the value
		* defined in the style prop, or the last read value.
		*/
		if (removedKeys.size) {
			const fallbackAnimation = {};
			/**
			* If the initial prop contains a transition we can use that, otherwise
			* allow the animation function to use the visual element's default.
			*/
			if (typeof props.initial !== "boolean") {
				const initialTransition = resolveVariant(visualElement, Array.isArray(props.initial) ? props.initial[0] : props.initial);
				if (initialTransition && initialTransition.transition) fallbackAnimation.transition = initialTransition.transition;
			}
			removedKeys.forEach((key) => {
				const fallbackTarget = visualElement.getBaseTarget(key);
				const motionValue = visualElement.getValue(key);
				if (motionValue) motionValue.liveStyle = true;
				fallbackAnimation[key] = fallbackTarget ?? null;
			});
			animations.push({ animation: fallbackAnimation });
		}
		let shouldAnimate = Boolean(animations.length);
		if (isInitialRender && (props.initial === false || props.initial === props.animate) && !visualElement.manuallyAnimateOnMount) shouldAnimate = false;
		isInitialRender = false;
		wasReset = false;
		return shouldAnimate ? animate(animations) : Promise.resolve();
	}
	/**
	* Change whether a certain animation type is active.
	*/
	function setActive(type, isActive) {
		if (state[type].isActive === isActive) return Promise.resolve();
		visualElement.variantChildren?.forEach((child) => child.animationState?.setActive(type, isActive));
		state[type].isActive = isActive;
		const animations = animateChanges(type);
		for (const key in state) state[key].protectedKeys = {};
		return animations;
	}
	return {
		animateChanges,
		setActive,
		setAnimateFunction,
		getState: () => state,
		reset: () => {
			state = createState();
			wasReset = true;
		}
	};
}
function checkVariantsDidChange(prev, next) {
	if (typeof next === "string") return next !== prev;
	else if (Array.isArray(next)) return !shallowCompare(next, prev);
	return false;
}
function createTypeState(isActive = false) {
	return {
		isActive,
		protectedKeys: {},
		needsAnimating: {},
		prevResolvedValues: {}
	};
}
function createState() {
	return {
		animate: createTypeState(true),
		whileInView: createTypeState(),
		whileHover: createTypeState(),
		whileTap: createTypeState(),
		whileDrag: createTypeState(),
		whileFocus: createTypeState(),
		exit: createTypeState()
	};
}
// node_modules/motion-dom/dist/es/projection/geometry/copy.mjs
/**
* Reset an axis to the provided origin box.
*
* This is a mutative operation.
*/
function copyAxisInto(axis, originAxis) {
	axis.min = originAxis.min;
	axis.max = originAxis.max;
}
/**
* Reset a box to the provided origin box.
*
* This is a mutative operation.
*/
function copyBoxInto(box, originBox) {
	copyAxisInto(box.x, originBox.x);
	copyAxisInto(box.y, originBox.y);
}
/**
* Reset a delta to the provided origin box.
*
* This is a mutative operation.
*/
function copyAxisDeltaInto(delta, originDelta) {
	delta.translate = originDelta.translate;
	delta.scale = originDelta.scale;
	delta.originPoint = originDelta.originPoint;
	delta.origin = originDelta.origin;
}
// node_modules/motion-dom/dist/es/projection/geometry/delta-calc.mjs
var SCALE_MIN = .9999;
var SCALE_MAX = 1.0001;
var TRANSLATE_MIN = -.01;
var TRANSLATE_MAX = .01;
function calcLength(axis) {
	return axis.max - axis.min;
}
function isNear(value, target, maxDistance) {
	return Math.abs(value - target) <= maxDistance;
}
function calcAxisDelta(delta, source, target, origin = .5) {
	delta.origin = origin;
	delta.originPoint = mixNumber$1(source.min, source.max, delta.origin);
	delta.scale = calcLength(target) / calcLength(source);
	delta.translate = mixNumber$1(target.min, target.max, delta.origin) - delta.originPoint;
	if (delta.scale >= SCALE_MIN && delta.scale <= SCALE_MAX || isNaN(delta.scale)) delta.scale = 1;
	if (delta.translate >= TRANSLATE_MIN && delta.translate <= TRANSLATE_MAX || isNaN(delta.translate)) delta.translate = 0;
}
function calcBoxDelta(delta, source, target, origin) {
	calcAxisDelta(delta.x, source.x, target.x, origin ? origin.originX : void 0);
	calcAxisDelta(delta.y, source.y, target.y, origin ? origin.originY : void 0);
}
function calcRelativeAxis(target, relative, parent, anchor = 0) {
	target.min = (anchor ? mixNumber$1(parent.min, parent.max, anchor) : parent.min) + relative.min;
	target.max = target.min + calcLength(relative);
}
function calcRelativeBox(target, relative, parent, anchor) {
	calcRelativeAxis(target.x, relative.x, parent.x, anchor?.x);
	calcRelativeAxis(target.y, relative.y, parent.y, anchor?.y);
}
function calcRelativeAxisPosition(target, layout, parent, anchor = 0) {
	const anchorPoint = anchor ? mixNumber$1(parent.min, parent.max, anchor) : parent.min;
	target.min = layout.min - anchorPoint;
	target.max = target.min + calcLength(layout);
}
function calcRelativePosition(target, layout, parent, anchor) {
	calcRelativeAxisPosition(target.x, layout.x, parent.x, anchor?.x);
	calcRelativeAxisPosition(target.y, layout.y, parent.y, anchor?.y);
}
// node_modules/motion-dom/dist/es/projection/geometry/delta-remove.mjs
/**
* Remove a delta from a point. This is essentially the steps of applyPointDelta in reverse
*/
function removePointDelta(point, translate, scale, originPoint, boxScale) {
	point -= translate;
	point = scalePoint(point, 1 / scale, originPoint);
	if (boxScale !== void 0) point = scalePoint(point, 1 / boxScale, originPoint);
	return point;
}
/**
* Remove a delta from an axis. This is essentially the steps of applyAxisDelta in reverse
*/
function removeAxisDelta(axis, translate = 0, scale = 1, origin = .5, boxScale, originAxis = axis, sourceAxis = axis) {
	if (percent.test(translate)) {
		translate = parseFloat(translate);
		translate = mixNumber$1(sourceAxis.min, sourceAxis.max, translate / 100) - sourceAxis.min;
	}
	if (typeof translate !== "number") return;
	let originPoint = mixNumber$1(originAxis.min, originAxis.max, origin);
	if (axis === originAxis) originPoint -= translate;
	axis.min = removePointDelta(axis.min, translate, scale, originPoint, boxScale);
	axis.max = removePointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
* Remove a transforms from an axis. This is essentially the steps of applyAxisTransforms in reverse
* and acts as a bridge between motion values and removeAxisDelta
*/
function removeAxisTransforms(axis, transforms, [key, scaleKey, originKey], origin, sourceAxis) {
	removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale, origin, sourceAxis);
}
/**
* The names of the motion values we want to apply as translation, scale and origin.
*/
var xKeys = [
	"x",
	"scaleX",
	"originX"
];
var yKeys = [
	"y",
	"scaleY",
	"originY"
];
/**
* Remove a transforms from an box. This is essentially the steps of applyAxisBox in reverse
* and acts as a bridge between motion values and removeAxisDelta
*/
function removeBoxTransforms(box, transforms, originBox, sourceBox) {
	removeAxisTransforms(box.x, transforms, xKeys, originBox ? originBox.x : void 0, sourceBox ? sourceBox.x : void 0);
	removeAxisTransforms(box.y, transforms, yKeys, originBox ? originBox.y : void 0, sourceBox ? sourceBox.y : void 0);
}
// node_modules/motion-dom/dist/es/projection/geometry/utils.mjs
function isAxisDeltaZero(delta) {
	return delta.translate === 0 && delta.scale === 1;
}
function isDeltaZero(delta) {
	return isAxisDeltaZero(delta.x) && isAxisDeltaZero(delta.y);
}
function axisEquals(a, b) {
	return a.min === b.min && a.max === b.max;
}
function boxEquals(a, b) {
	return axisEquals(a.x, b.x) && axisEquals(a.y, b.y);
}
function axisEqualsRounded(a, b) {
	return Math.round(a.min) === Math.round(b.min) && Math.round(a.max) === Math.round(b.max);
}
function boxEqualsRounded(a, b) {
	return axisEqualsRounded(a.x, b.x) && axisEqualsRounded(a.y, b.y);
}
function aspectRatio(box) {
	return calcLength(box.x) / calcLength(box.y);
}
function axisDeltaEquals(a, b) {
	return a.translate === b.translate && a.scale === b.scale && a.originPoint === b.originPoint;
}
// node_modules/motion-dom/dist/es/projection/utils/each-axis.mjs
function eachAxis(callback) {
	return [callback("x"), callback("y")];
}
// node_modules/motion-dom/dist/es/projection/styles/transform.mjs
function buildProjectionTransform(delta, treeScale, latestTransform) {
	let transform = "";
	/**
	* The translations we use to calculate are always relative to the viewport coordinate space.
	* But when we apply scales, we also scale the coordinate space of an element and its children.
	* For instance if we have a treeScale (the culmination of all parent scales) of 0.5 and we need
	* to move an element 100 pixels, we actually need to move it 200 in within that scaled space.
	*/
	const xTranslate = delta.x.translate / treeScale.x;
	const yTranslate = delta.y.translate / treeScale.y;
	const zTranslate = latestTransform?.z || 0;
	if (xTranslate || yTranslate || zTranslate) transform = `translate3d(${xTranslate}px, ${yTranslate}px, ${zTranslate}px) `;
	/**
	* Apply scale correction for the tree transform.
	* This will apply scale to the screen-orientated axes.
	*/
	if (treeScale.x !== 1 || treeScale.y !== 1) transform += `scale(${1 / treeScale.x}, ${1 / treeScale.y}) `;
	if (latestTransform) {
		const { transformPerspective, rotate, pathRotation, rotateX, rotateY, skewX, skewY } = latestTransform;
		if (transformPerspective) transform = `perspective(${transformPerspective}px) ${transform}`;
		if (rotate) transform += `rotate(${rotate}deg) `;
		if (pathRotation) transform += `rotate(${pathRotation}deg) `;
		if (rotateX) transform += `rotateX(${rotateX}deg) `;
		if (rotateY) transform += `rotateY(${rotateY}deg) `;
		if (skewX) transform += `skewX(${skewX}deg) `;
		if (skewY) transform += `skewY(${skewY}deg) `;
	}
	/**
	* Apply scale to match the size of the element to the size we want it.
	* This will apply scale to the element-orientated axes.
	*/
	const elementScaleX = delta.x.scale * treeScale.x;
	const elementScaleY = delta.y.scale * treeScale.y;
	if (elementScaleX !== 1 || elementScaleY !== 1) transform += `scale(${elementScaleX}, ${elementScaleY})`;
	return transform || "none";
}
// node_modules/motion-dom/dist/es/projection/animation/mix-values.mjs
var numBorders = cornerRadiusProps.length;
var asNumber = (value) => typeof value === "string" ? parseFloat(value) : value;
var isPx = (value) => typeof value === "number" || px.test(value);
function mixValues(target, follow, lead, progress, shouldCrossfadeOpacity, isOnlyMember) {
	if (shouldCrossfadeOpacity) {
		target.opacity = mixNumber$1(0, lead.opacity ?? 1, easeCrossfadeIn(progress));
		target.opacityExit = mixNumber$1(follow.opacity ?? 1, 0, easeCrossfadeOut(progress));
	} else if (isOnlyMember) target.opacity = mixNumber$1(follow.opacity ?? 1, lead.opacity ?? 1, progress);
	/**
	* Mix border radius
	*/
	for (let i = 0; i < numBorders; i++) {
		const borderLabel = cornerRadiusProps[i];
		let followRadius = getRadius(follow, borderLabel);
		let leadRadius = getRadius(lead, borderLabel);
		if (followRadius === void 0 && leadRadius === void 0) continue;
		followRadius || (followRadius = 0);
		leadRadius || (leadRadius = 0);
		if (followRadius === 0 || leadRadius === 0 || isPx(followRadius) === isPx(leadRadius)) {
			target[borderLabel] = Math.max(mixNumber$1(asNumber(followRadius), asNumber(leadRadius), progress), 0);
			if (percent.test(leadRadius) || percent.test(followRadius)) target[borderLabel] += "%";
		} else target[borderLabel] = leadRadius;
	}
	/**
	* Mix rotation
	*/
	if (follow.rotate || lead.rotate) target.rotate = mixNumber$1(follow.rotate || 0, lead.rotate || 0, progress);
}
function getRadius(values, radiusName) {
	return values[radiusName] !== void 0 ? values[radiusName] : values.borderRadius;
}
var easeCrossfadeIn = /*@__PURE__*/ compress(0, .5, circOut);
var easeCrossfadeOut = /*@__PURE__*/ compress(.5, .95, noop);
function compress(min, max, easing) {
	return (p) => {
		if (p < min) return 0;
		if (p > max) return 1;
		return easing(/* @__PURE__ */ progress(min, max, p));
	};
}
// node_modules/motion-dom/dist/es/animation/animate/single-value.mjs
function animateSingleValue(value, keyframes, options) {
	const motionValue$1 = isMotionValue(value) ? value : motionValue(value);
	motionValue$1.start(animateMotionValue("", motionValue$1, keyframes, options));
	return motionValue$1.animation;
}
// node_modules/motion-dom/dist/es/events/add-dom-event.mjs
function addDomEvent(target, eventName, handler, options = { passive: true }) {
	target.addEventListener(eventName, handler, options);
	return () => target.removeEventListener(eventName, handler, options);
}
// node_modules/motion-dom/dist/es/projection/utils/compare-by-depth.mjs
var compareByDepth = (a, b) => a.depth - b.depth;
// node_modules/motion-dom/dist/es/projection/utils/flat-tree.mjs
var FlatTree = class {
	constructor() {
		this.children = [];
		this.isDirty = false;
	}
	add(child) {
		addUniqueItem(this.children, child);
		this.isDirty = true;
	}
	remove(child) {
		removeItem(this.children, child);
		this.isDirty = true;
	}
	forEach(callback) {
		this.isDirty && this.children.sort(compareByDepth);
		this.isDirty = false;
		this.children.forEach(callback);
	}
};
// node_modules/motion-dom/dist/es/utils/delay.mjs
/**
* Timeout defined in ms
*/
function delay(callback, timeout) {
	const start = time.now();
	const checkElapsed = ({ timestamp }) => {
		const elapsed = timestamp - start;
		if (elapsed >= timeout) {
			cancelFrame(checkElapsed);
			callback(elapsed - timeout);
		}
	};
	frame.setup(checkElapsed, true);
	return () => cancelFrame(checkElapsed);
}
// node_modules/motion-dom/dist/es/value/utils/resolve-motion-value.mjs
/**
* If the provided value is a MotionValue, this returns the actual value, otherwise just the value itself
*/
function resolveMotionValue(value) {
	return isMotionValue(value) ? value.get() : value;
}
// node_modules/motion-dom/dist/es/projection/shared/stack.mjs
var NodeStack = class {
	constructor() {
		this.members = [];
	}
	add(node) {
		addUniqueItem(this.members, node);
		for (let i = this.members.length - 1; i >= 0; i--) {
			const member = this.members[i];
			if (member === node || member === this.lead || member === this.prevLead) continue;
			const inst = member.instance;
			if ((!inst || inst.isConnected === false) && !member.snapshot) {
				removeItem(this.members, member);
				member.unmount();
			}
		}
		node.scheduleRender();
	}
	remove(node) {
		removeItem(this.members, node);
		if (node === this.prevLead) this.prevLead = void 0;
		if (node === this.lead) {
			const prevLead = this.members[this.members.length - 1];
			if (prevLead) this.promote(prevLead);
		}
	}
	relegate(node) {
		for (let i = this.members.indexOf(node) - 1; i >= 0; i--) {
			const member = this.members[i];
			if (member.isPresent !== false && member.instance?.isConnected !== false) {
				this.promote(member);
				return true;
			}
		}
		return false;
	}
	promote(node, preserveFollowOpacity) {
		const prevLead = this.lead;
		if (node === prevLead) return;
		this.prevLead = prevLead;
		this.lead = node;
		node.show();
		if (prevLead) {
			prevLead.updateSnapshot();
			node.scheduleRender();
			const { layoutDependency: prevDep } = prevLead.options;
			const { layoutDependency: nextDep } = node.options;
			if (prevDep === void 0 || prevDep !== nextDep) {
				node.resumeFrom = prevLead;
				if (preserveFollowOpacity) prevLead.preserveOpacity = true;
				if (prevLead.snapshot) {
					node.snapshot = prevLead.snapshot;
					node.snapshot.latestValues = prevLead.animationValues || prevLead.latestValues;
				}
				if (node.root?.isUpdating) node.isLayoutDirty = true;
			}
			if (node.options.crossfade === false) prevLead.hide();
		}
	}
	exitAnimationComplete() {
		this.members.forEach((member) => {
			member.options.onExitComplete?.();
			member.resumingFrom?.options.onExitComplete?.();
		});
	}
	scheduleRender() {
		this.members.forEach((member) => member.instance && member.scheduleRender(false));
	}
	removeLeadSnapshot() {
		if (this.lead?.snapshot) this.lead.snapshot = void 0;
	}
};
// node_modules/motion-dom/dist/es/projection/node/state.mjs
/**
* This should only ever be modified on the client otherwise it'll
* persist through server requests. If we need instanced states we
* could lazy-init via root.
*/
var globalProjectionState = {
	/**
	* Global flag as to whether the tree has animated since the last time
	* we resized the window
	*/
	hasAnimatedSinceResize: true,
	/**
	* We set this to true once, on the first update. Any nodes added to the tree beyond that
	* update will be given a `data-projection-id` attribute.
	*/
	hasEverUpdated: false
};
// node_modules/motion-dom/dist/es/projection/node/create-projection-node.mjs
var metrics = {
	nodes: 0,
	calculatedTargetDeltas: 0,
	calculatedProjections: 0
};
var transformAxes = [
	"",
	"X",
	"Y",
	"Z"
];
/**
* We use 1000 as the animation target as 0-1000 maps better to pixels than 0-1
* which has a noticeable difference in spring animations
*/
var animationTarget = 1e3;
var id$1 = 0;
function resetDistortingTransform(key, visualElement, values, sharedAnimationValues) {
	const { latestValues } = visualElement;
	if (latestValues[key]) {
		values[key] = latestValues[key];
		visualElement.setStaticValue(key, 0);
		if (sharedAnimationValues) sharedAnimationValues[key] = 0;
	}
}
function cancelTreeOptimisedTransformAnimations(projectionNode) {
	projectionNode.hasCheckedOptimisedAppear = true;
	if (projectionNode.root === projectionNode) return;
	const { visualElement } = projectionNode.options;
	if (!visualElement) return;
	const appearId = getOptimisedAppearId(visualElement);
	if (window.MotionHasOptimisedAnimation(appearId, "transform")) {
		const { layout, layoutId } = projectionNode.options;
		window.MotionCancelOptimisedAnimation(appearId, "transform", frame, !(layout || layoutId));
	}
	const { parent } = projectionNode;
	if (parent && !parent.hasCheckedOptimisedAppear) cancelTreeOptimisedTransformAnimations(parent);
}
function createProjectionNode$1({ attachResizeListener, defaultParent, measureScroll, checkIsScrollRoot, resetTransform }) {
	return class ProjectionNode {
		constructor(latestValues = {}, parent = defaultParent?.()) {
			/**
			* A unique ID generated for every projection node.
			*/
			this.id = id$1++;
			/**
			* An id that represents a unique session instigated by startUpdate.
			*/
			this.animationId = 0;
			this.animationCommitId = 0;
			/**
			* A Set containing all this component's children. This is used to iterate
			* through the children.
			*
			* TODO: This could be faster to iterate as a flat array stored on the root node.
			*/
			this.children = /* @__PURE__ */ new Set();
			/**
			* Options for the node. We use this to configure what kind of layout animations
			* we should perform (if any).
			*/
			this.options = {};
			/**
			* We use this to detect when its safe to shut down part of a projection tree.
			* We have to keep projecting children for scale correction and relative projection
			* until all their parents stop performing layout animations.
			*/
			this.isTreeAnimating = false;
			this.isAnimationBlocked = false;
			/**
			* Flag to true if we think this layout has been changed. We can't always know this,
			* currently we set it to true every time a component renders, or if it has a layoutDependency
			* if that has changed between renders. Additionally, components can be grouped by LayoutGroup
			* and if one node is dirtied, they all are.
			*/
			this.isLayoutDirty = false;
			/**
			* Flag to true if we think the projection calculations for this node needs
			* recalculating as a result of an updated transform or layout animation.
			*/
			this.isProjectionDirty = false;
			/**
			* Flag to true if the layout *or* transform has changed. This then gets propagated
			* throughout the projection tree, forcing any element below to recalculate on the next frame.
			*/
			this.isSharedProjectionDirty = false;
			/**
			* Flag transform dirty. This gets propagated throughout the whole tree but is only
			* respected by shared nodes.
			*/
			this.isTransformDirty = false;
			/**
			* Block layout updates for instant layout transitions throughout the tree.
			*/
			this.updateManuallyBlocked = false;
			this.updateBlockedByResize = false;
			/**
			* Set to true between the start of the first `willUpdate` call and the end of the `didUpdate`
			* call.
			*/
			this.isUpdating = false;
			/**
			* If this is an SVG element we currently disable projection transforms
			*/
			this.isSVG = false;
			/**
			* Flag to true (during promotion) if a node doing an instant layout transition needs to reset
			* its projection styles.
			*/
			this.needsReset = false;
			/**
			* Flags whether this node should have its transform reset prior to measuring.
			*/
			this.shouldResetTransform = false;
			/**
			* Store whether this node has been checked for optimised appear animations. As
			* effects fire bottom-up, and we want to look up the tree for appear animations,
			* this makes sure we only check each path once, stopping at nodes that
			* have already been checked.
			*/
			this.hasCheckedOptimisedAppear = false;
			/**
			* An object representing the calculated contextual/accumulated/tree scale.
			* This will be used to scale calculcated projection transforms, as these are
			* calculated in screen-space but need to be scaled for elements to layoutly
			* make it to their calculated destinations.
			*
			* TODO: Lazy-init
			*/
			this.treeScale = {
				x: 1,
				y: 1
			};
			/**
			*
			*/
			this.eventHandlers = /* @__PURE__ */ new Map();
			this.hasTreeAnimated = false;
			this.layoutVersion = 0;
			this.updateScheduled = false;
			this.scheduleUpdate = () => this.update();
			this.projectionUpdateScheduled = false;
			this.checkUpdateFailed = () => {
				if (this.isUpdating) {
					this.isUpdating = false;
					this.clearAllSnapshots();
				}
			};
			/**
			* This is a multi-step process as shared nodes might be of different depths. Nodes
			* are sorted by depth order, so we need to resolve the entire tree before moving to
			* the next step.
			*/
			this.updateProjection = () => {
				this.projectionUpdateScheduled = false;
				/**
				* Reset debug counts. Manually resetting rather than creating a new
				* object each frame.
				*/
				if (statsBuffer.value) metrics.nodes = metrics.calculatedTargetDeltas = metrics.calculatedProjections = 0;
				this.nodes.forEach(propagateDirtyNodes);
				this.nodes.forEach(resolveTargetDelta);
				this.nodes.forEach(calcProjection);
				this.nodes.forEach(cleanDirtyNodes);
				if (statsBuffer.addProjectionMetrics) statsBuffer.addProjectionMetrics(metrics);
			};
			/**
			* Frame calculations
			*/
			this.resolvedRelativeTargetAt = 0;
			this.linkedParentVersion = 0;
			this.hasProjected = false;
			this.isVisible = true;
			this.animationProgress = 0;
			/**
			* Shared layout
			*/
			this.sharedNodes = /* @__PURE__ */ new Map();
			this.latestValues = latestValues;
			this.root = parent ? parent.root || parent : this;
			this.path = parent ? [...parent.path, parent] : [];
			this.parent = parent;
			this.depth = parent ? parent.depth + 1 : 0;
			for (let i = 0; i < this.path.length; i++) this.path[i].shouldResetTransform = true;
			if (this.root === this) this.nodes = new FlatTree();
		}
		addEventListener(name, handler) {
			if (!this.eventHandlers.has(name)) this.eventHandlers.set(name, new SubscriptionManager());
			return this.eventHandlers.get(name).add(handler);
		}
		notifyListeners(name, ...args) {
			const subscriptionManager = this.eventHandlers.get(name);
			subscriptionManager && subscriptionManager.notify(...args);
		}
		hasListeners(name) {
			return this.eventHandlers.has(name);
		}
		/**
		* Lifecycles
		*/
		mount(instance) {
			if (this.instance) return;
			this.isSVG = isSVGElement(instance) && !isSVGSVGElement(instance);
			this.instance = instance;
			const { layoutId, layout, visualElement } = this.options;
			if (visualElement && !visualElement.current) visualElement.mount(instance);
			this.root.nodes.add(this);
			this.parent && this.parent.children.add(this);
			if (this.root.hasTreeAnimated && (layout || layoutId)) this.isLayoutDirty = true;
			if (attachResizeListener) {
				let cancelDelay;
				let innerWidth = 0;
				const resizeUnblockUpdate = () => this.root.updateBlockedByResize = false;
				frame.read(() => {
					innerWidth = window.innerWidth;
				});
				attachResizeListener(instance, () => {
					const newInnerWidth = window.innerWidth;
					if (newInnerWidth === innerWidth) return;
					innerWidth = newInnerWidth;
					this.root.updateBlockedByResize = true;
					cancelDelay && cancelDelay();
					cancelDelay = delay(resizeUnblockUpdate, 250);
					if (globalProjectionState.hasAnimatedSinceResize) {
						globalProjectionState.hasAnimatedSinceResize = false;
						this.nodes.forEach(finishAnimation);
					}
				});
			}
			if (layoutId) this.root.registerSharedNode(layoutId, this);
			if (this.options.animate !== false && visualElement && (layoutId || layout)) this.addEventListener("didUpdate", ({ delta, hasLayoutChanged, hasRelativeLayoutChanged, layout: newLayout }) => {
				if (this.isTreeAnimationBlocked()) {
					this.target = void 0;
					this.relativeTarget = void 0;
					return;
				}
				const layoutTransition = this.options.transition || visualElement.getDefaultTransition() || defaultLayoutTransition;
				const { onLayoutAnimationStart, onLayoutAnimationComplete } = visualElement.getProps();
				/**
				* The target layout of the element might stay the same,
				* but its position relative to its parent has changed.
				*/
				const hasTargetChanged = !this.targetLayout || !boxEqualsRounded(this.targetLayout, newLayout);
				/**
				* If the layout hasn't seemed to have changed, it might be that the
				* element is visually in the same place in the document but its position
				* relative to its parent has indeed changed. So here we check for that.
				*/
				const hasOnlyRelativeTargetChanged = !hasLayoutChanged && hasRelativeLayoutChanged;
				if (this.options.layoutRoot || this.resumeFrom || hasOnlyRelativeTargetChanged || hasLayoutChanged && (hasTargetChanged || !this.currentAnimation)) {
					if (this.resumeFrom) {
						this.resumingFrom = this.resumeFrom;
						this.resumingFrom.resumingFrom = void 0;
					}
					const animationOptions = {
						...getValueTransition(layoutTransition, "layout"),
						onPlay: onLayoutAnimationStart,
						onComplete: onLayoutAnimationComplete
					};
					if (visualElement.shouldReduceMotion || this.options.layoutRoot) {
						animationOptions.delay = 0;
						animationOptions.type = false;
					}
					this.startAnimation(animationOptions);
					/**
					* Set animation origin after starting animation to avoid layout jump
					* caused by stopping previous layout animation
					*/
					this.setAnimationOrigin(delta, hasOnlyRelativeTargetChanged, animationOptions.path);
				} else {
					/**
					* If the layout hasn't changed and we have an animation that hasn't started yet,
					* finish it immediately. Otherwise it will be animating from a location
					* that was probably never committed to screen and look like a jumpy box.
					*/
					if (!hasLayoutChanged) finishAnimation(this);
					if (this.isLead() && this.options.onExitComplete) this.options.onExitComplete();
				}
				this.targetLayout = newLayout;
			});
		}
		unmount() {
			this.options.layoutId && this.willUpdate();
			this.root.nodes.remove(this);
			const stack = this.getStack();
			stack && stack.remove(this);
			this.parent && this.parent.children.delete(this);
			this.instance = void 0;
			this.eventHandlers.clear();
			cancelFrame(this.updateProjection);
		}
		blockUpdate() {
			this.updateManuallyBlocked = true;
		}
		unblockUpdate() {
			this.updateManuallyBlocked = false;
		}
		isUpdateBlocked() {
			return this.updateManuallyBlocked || this.updateBlockedByResize;
		}
		isTreeAnimationBlocked() {
			return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || false;
		}
		startUpdate() {
			if (this.isUpdateBlocked()) return;
			this.isUpdating = true;
			this.nodes && this.nodes.forEach(resetSkewAndRotation);
			this.animationId++;
		}
		getTransformTemplate() {
			const { visualElement } = this.options;
			return visualElement && visualElement.getProps().transformTemplate;
		}
		willUpdate(shouldNotifyListeners = true) {
			this.root.hasTreeAnimated = true;
			if (this.root.isUpdateBlocked()) {
				this.options.onExitComplete && this.options.onExitComplete();
				return;
			}
			/**
			* If we're running optimised appear animations then these must be
			* cancelled before measuring the DOM. This is so we can measure
			* the true layout of the element rather than the WAAPI animation
			* which will be unaffected by the resetSkewAndRotate step.
			*
			* Note: This is a DOM write. Worst case scenario is this is sandwiched
			* between other snapshot reads which will cause unnecessary style recalculations.
			* This has to happen here though, as we don't yet know which nodes will need
			* snapshots in startUpdate(), but we only want to cancel optimised animations
			* if a layout animation measurement is actually going to be affected by them.
			*/
			if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear) cancelTreeOptimisedTransformAnimations(this);
			!this.root.isUpdating && this.root.startUpdate();
			if (this.isLayoutDirty) return;
			this.isLayoutDirty = true;
			for (let i = 0; i < this.path.length; i++) {
				const node = this.path[i];
				node.shouldResetTransform = true;
				/**
				* Percentage translates resolve against layoutBox dimensions,
				* so ancestors with them must be re-measured after transform reset.
				*/
				if (typeof node.latestValues.x === "string" || typeof node.latestValues.y === "string") node.isLayoutDirty = true;
				node.updateScroll("snapshot");
				if (node.options.layoutRoot) node.willUpdate(false);
			}
			const { layoutId, layout } = this.options;
			if (layoutId === void 0 && !layout) return;
			const transformTemplate = this.getTransformTemplate();
			this.prevTransformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : void 0;
			this.updateSnapshot();
			shouldNotifyListeners && this.notifyListeners("willUpdate");
		}
		update() {
			this.updateScheduled = false;
			if (this.isUpdateBlocked()) {
				const wasBlockedByResize = this.updateBlockedByResize;
				this.unblockUpdate();
				this.updateBlockedByResize = false;
				this.clearAllSnapshots();
				/**
				* When blocked by resize, still measure layouts so
				* callbacks like onLayoutMeasure fire (e.g. Reorder).
				* Skip notifyLayoutUpdate to prevent animations.
				*/
				if (wasBlockedByResize) this.nodes.forEach(forceLayoutMeasure);
				this.nodes.forEach(clearMeasurements);
				return;
			}
			/**
			* If this is a repeat of didUpdate then ignore the animation.
			*/
			if (this.animationId <= this.animationCommitId) {
				this.nodes.forEach(clearIsLayoutDirty);
				return;
			}
			this.animationCommitId = this.animationId;
			if (!this.isUpdating) this.nodes.forEach(clearIsLayoutDirty);
			else {
				this.isUpdating = false;
				/**
				* Ensure animation-blocked nodes (e.g. during drag)
				* get measured even when memoized (willUpdate skipped).
				*/
				this.nodes.forEach(ensureDraggedNodesSnapshotted);
				/**
				* Write
				*/
				this.nodes.forEach(resetTransformStyle);
				/**
				* Read ==================
				*/
				this.nodes.forEach(updateLayout);
				/**
				* Write
				*/
				this.nodes.forEach(notifyLayoutUpdate);
			}
			this.clearAllSnapshots();
			/**
			* Manually flush any pending updates. Ideally
			* we could leave this to the following requestAnimationFrame but this seems
			* to leave a flash of incorrectly styled content.
			*/
			const now = time.now();
			frameData.delta = clamp(0, 1e3 / 60, now - frameData.timestamp);
			frameData.timestamp = now;
			frameData.isProcessing = true;
			frameSteps.update.process(frameData);
			frameSteps.preRender.process(frameData);
			frameSteps.render.process(frameData);
			frameData.isProcessing = false;
		}
		didUpdate() {
			if (!this.updateScheduled) {
				this.updateScheduled = true;
				microtask.read(this.scheduleUpdate);
			}
		}
		clearAllSnapshots() {
			this.nodes.forEach(clearSnapshot);
			this.sharedNodes.forEach(removeLeadSnapshots);
		}
		scheduleUpdateProjection() {
			if (!this.projectionUpdateScheduled) {
				this.projectionUpdateScheduled = true;
				frame.preRender(this.updateProjection, false, true);
			}
		}
		scheduleCheckAfterUnmount() {
			/**
			* If the unmounting node is in a layoutGroup and did trigger a willUpdate,
			* we manually call didUpdate to give a chance to the siblings to animate.
			* Otherwise, cleanup all snapshots to prevents future nodes from reusing them.
			*/
			frame.postRender(() => {
				if (this.isLayoutDirty) this.root.didUpdate();
				else this.root.checkUpdateFailed();
			});
		}
		/**
		* Update measurements
		*/
		updateSnapshot() {
			if (this.snapshot || !this.instance) return;
			this.snapshot = this.measure();
			if (this.snapshot && !calcLength(this.snapshot.measuredBox.x) && !calcLength(this.snapshot.measuredBox.y)) this.snapshot = void 0;
		}
		updateLayout() {
			if (!this.instance) return;
			this.updateScroll();
			if (!(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty) return;
			/**
			* When a node is mounted, it simply resumes from the prevLead's
			* snapshot instead of taking a new one, but the ancestors scroll
			* might have updated while the prevLead is unmounted. We need to
			* update the scroll again to make sure the layout we measure is
			* up to date.
			*/
			if (this.resumeFrom && !this.resumeFrom.instance) for (let i = 0; i < this.path.length; i++) this.path[i].updateScroll();
			const prevLayout = this.layout;
			this.layout = this.measure(false);
			this.layoutVersion++;
			if (!this.layoutCorrected) this.layoutCorrected = createBox();
			this.isLayoutDirty = false;
			this.projectionDelta = void 0;
			this.notifyListeners("measure", this.layout.layoutBox);
			const { visualElement } = this.options;
			visualElement && visualElement.notify("LayoutMeasure", this.layout.layoutBox, prevLayout ? prevLayout.layoutBox : void 0);
		}
		updateScroll(phase = "measure") {
			let needsMeasurement = Boolean(this.options.layoutScroll && this.instance);
			if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === phase) needsMeasurement = false;
			if (needsMeasurement && this.instance) {
				const isRoot = checkIsScrollRoot(this.instance);
				this.scroll = {
					animationId: this.root.animationId,
					phase,
					isRoot,
					offset: measureScroll(this.instance),
					wasRoot: this.scroll ? this.scroll.isRoot : isRoot
				};
			}
		}
		resetTransform() {
			if (!resetTransform) return;
			const isResetRequested = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout;
			const hasProjection = this.projectionDelta && !isDeltaZero(this.projectionDelta);
			const transformTemplate = this.getTransformTemplate();
			const transformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : void 0;
			const transformTemplateHasChanged = transformTemplateValue !== this.prevTransformTemplateValue;
			if (isResetRequested && this.instance && (hasProjection || hasTransform(this.latestValues) || transformTemplateHasChanged)) {
				resetTransform(this.instance, transformTemplateValue);
				this.shouldResetTransform = false;
				this.scheduleRender();
			}
		}
		measure(removeTransform = true) {
			const pageBox = this.measurePageBox();
			let layoutBox = this.removeElementScroll(pageBox);
			/**
			* Measurements taken during the pre-render stage
			* still have transforms applied so we remove them
			* via calculation.
			*/
			if (removeTransform) layoutBox = this.removeTransform(layoutBox);
			roundBox(layoutBox);
			return {
				animationId: this.root.animationId,
				measuredBox: pageBox,
				layoutBox,
				latestValues: {},
				source: this.id
			};
		}
		measurePageBox() {
			const { visualElement } = this.options;
			if (!visualElement) return createBox();
			const box = visualElement.measureViewportBox();
			if (!(this.scroll?.wasRoot || this.path.some(checkNodeWasScrollRoot))) {
				const { scroll } = this.root;
				if (scroll) {
					translateAxis(box.x, scroll.offset.x);
					translateAxis(box.y, scroll.offset.y);
				}
			}
			return box;
		}
		removeElementScroll(box) {
			const boxWithoutScroll = createBox();
			copyBoxInto(boxWithoutScroll, box);
			if (this.scroll?.wasRoot) return boxWithoutScroll;
			/**
			* Performance TODO: Keep a cumulative scroll offset down the tree
			* rather than loop back up the path.
			*/
			for (let i = 0; i < this.path.length; i++) {
				const node = this.path[i];
				const { scroll, options } = node;
				if (node !== this.root && scroll && options.layoutScroll) {
					/**
					* If this is a new scroll root, we want to remove all previous scrolls
					* from the viewport box.
					*/
					if (scroll.wasRoot) copyBoxInto(boxWithoutScroll, box);
					translateAxis(boxWithoutScroll.x, scroll.offset.x);
					translateAxis(boxWithoutScroll.y, scroll.offset.y);
				}
			}
			return boxWithoutScroll;
		}
		applyTransform(box, transformOnly = false, output) {
			const withTransforms = output || createBox();
			copyBoxInto(withTransforms, box);
			for (let i = 0; i < this.path.length; i++) {
				const node = this.path[i];
				if (!transformOnly && node.options.layoutScroll && node.scroll && node !== node.root) {
					translateAxis(withTransforms.x, -node.scroll.offset.x);
					translateAxis(withTransforms.y, -node.scroll.offset.y);
				}
				if (!hasTransform(node.latestValues)) continue;
				transformBox(withTransforms, node.latestValues, node.layout?.layoutBox);
			}
			if (hasTransform(this.latestValues)) transformBox(withTransforms, this.latestValues, this.layout?.layoutBox);
			return withTransforms;
		}
		removeTransform(box) {
			const boxWithoutTransform = createBox();
			copyBoxInto(boxWithoutTransform, box);
			for (let i = 0; i < this.path.length; i++) {
				const node = this.path[i];
				if (!hasTransform(node.latestValues)) continue;
				let sourceBox;
				if (node.instance) {
					hasScale(node.latestValues) && node.updateSnapshot();
					sourceBox = createBox();
					copyBoxInto(sourceBox, node.measurePageBox());
				}
				removeBoxTransforms(boxWithoutTransform, node.latestValues, node.snapshot?.layoutBox, sourceBox);
			}
			if (hasTransform(this.latestValues)) removeBoxTransforms(boxWithoutTransform, this.latestValues);
			return boxWithoutTransform;
		}
		setTargetDelta(delta) {
			this.targetDelta = delta;
			this.root.scheduleUpdateProjection();
			this.isProjectionDirty = true;
		}
		setOptions(options) {
			this.options = {
				...this.options,
				...options,
				crossfade: options.crossfade !== void 0 ? options.crossfade : true
			};
		}
		clearMeasurements() {
			this.scroll = void 0;
			this.layout = void 0;
			this.snapshot = void 0;
			this.prevTransformTemplateValue = void 0;
			this.targetDelta = void 0;
			this.target = void 0;
			this.isLayoutDirty = false;
		}
		forceRelativeParentToResolveTarget() {
			if (!this.relativeParent) return;
			/**
			* If the parent target isn't up-to-date, force it to update.
			* This is an unfortunate de-optimisation as it means any updating relative
			* projection will cause all the relative parents to recalculate back
			* up the tree.
			*/
			if (this.relativeParent.resolvedRelativeTargetAt !== frameData.timestamp) this.relativeParent.resolveTargetDelta(true);
		}
		resolveTargetDelta(forceRecalculation = false) {
			/**
			* Once the dirty status of nodes has been spread through the tree, we also
			* need to check if we have a shared node of a different depth that has itself
			* been dirtied.
			*/
			const lead = this.getLead();
			this.isProjectionDirty || (this.isProjectionDirty = lead.isProjectionDirty);
			this.isTransformDirty || (this.isTransformDirty = lead.isTransformDirty);
			this.isSharedProjectionDirty || (this.isSharedProjectionDirty = lead.isSharedProjectionDirty);
			const isShared = Boolean(this.resumingFrom) || this !== lead;
			if (!(forceRecalculation || isShared && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
			const { layout, layoutId } = this.options;
			/**
			* If we have no layout, we can't perform projection, so early return
			*/
			if (!this.layout || !(layout || layoutId)) return;
			this.resolvedRelativeTargetAt = frameData.timestamp;
			const relativeParent = this.getClosestProjectingParent();
			if (relativeParent && this.linkedParentVersion !== relativeParent.layoutVersion && !relativeParent.options.layoutRoot) this.removeRelativeTarget();
			/**
			* If we don't have a targetDelta but do have a layout, we can attempt to resolve
			* a relativeParent. This will allow a component to perform scale correction
			* even if no animation has started.
			*/
			if (!this.targetDelta && !this.relativeTarget) {
				if (this.options.layoutAnchor !== false && relativeParent && relativeParent.layout) this.createRelativeTarget(relativeParent, this.layout.layoutBox, relativeParent.layout.layoutBox);
				else this.removeRelativeTarget();
			}
			/**
			* If we have no relative target or no target delta our target isn't valid
			* for this frame.
			*/
			if (!this.relativeTarget && !this.targetDelta) return;
			/**
			* Lazy-init target data structure
			*/
			if (!this.target) {
				this.target = createBox();
				this.targetWithTransforms = createBox();
			}
			/**
			* If we've got a relative box for this component, resolve it into a target relative to the parent.
			*/
			if (this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) {
				this.forceRelativeParentToResolveTarget();
				calcRelativeBox(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0);
			} else if (this.targetDelta) {
				if (Boolean(this.resumingFrom)) this.applyTransform(this.layout.layoutBox, false, this.target);
				else copyBoxInto(this.target, this.layout.layoutBox);
				applyBoxDelta(this.target, this.targetDelta);
			} else
 /**
			* If no target, use own layout as target
			*/
			copyBoxInto(this.target, this.layout.layoutBox);
			/**
			* If we've been told to attempt to resolve a relative target, do so.
			*/
			if (this.attemptToResolveRelativeTarget) {
				this.attemptToResolveRelativeTarget = false;
				if (this.options.layoutAnchor !== false && relativeParent && Boolean(relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !relativeParent.options.layoutScroll && relativeParent.target && this.animationProgress !== 1) this.createRelativeTarget(relativeParent, this.target, relativeParent.target);
				else this.relativeParent = this.relativeTarget = void 0;
			}
			/**
			* Increase debug counter for resolved target deltas
			*/
			if (statsBuffer.value) metrics.calculatedTargetDeltas++;
		}
		getClosestProjectingParent() {
			if (!this.parent || hasScale(this.parent.latestValues) || has2DTranslate(this.parent.latestValues)) return;
			if (this.parent.isProjecting()) return this.parent;
			else return this.parent.getClosestProjectingParent();
		}
		isProjecting() {
			return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
		}
		createRelativeTarget(relativeParent, layout, parentLayout) {
			this.relativeParent = relativeParent;
			this.linkedParentVersion = relativeParent.layoutVersion;
			this.forceRelativeParentToResolveTarget();
			this.relativeTarget = createBox();
			this.relativeTargetOrigin = createBox();
			calcRelativePosition(this.relativeTargetOrigin, layout, parentLayout, this.options.layoutAnchor || void 0);
			copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
		}
		removeRelativeTarget() {
			this.relativeParent = this.relativeTarget = void 0;
		}
		calcProjection() {
			const lead = this.getLead();
			const isShared = Boolean(this.resumingFrom) || this !== lead;
			let canSkip = true;
			/**
			* If this is a normal layout animation and neither this node nor its nearest projecting
			* is dirty then we can't skip.
			*/
			if (this.isProjectionDirty || this.parent?.isProjectionDirty) canSkip = false;
			/**
			* If this is a shared layout animation and this node's shared projection is dirty then
			* we can't skip.
			*/
			if (isShared && (this.isSharedProjectionDirty || this.isTransformDirty)) canSkip = false;
			/**
			* If we have resolved the target this frame we must recalculate the
			* projection to ensure it visually represents the internal calculations.
			*/
			if (this.resolvedRelativeTargetAt === frameData.timestamp) canSkip = false;
			if (canSkip) return;
			const { layout, layoutId } = this.options;
			/**
			* If this section of the tree isn't animating we can
			* delete our target sources for the following frame.
			*/
			this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation);
			if (!this.isTreeAnimating) this.targetDelta = this.relativeTarget = void 0;
			if (!this.layout || !(layout || layoutId)) return;
			/**
			* Reset the corrected box with the latest values from box, as we're then going
			* to perform mutative operations on it.
			*/
			copyBoxInto(this.layoutCorrected, this.layout.layoutBox);
			/**
			* Record previous tree scales before updating.
			*/
			const prevTreeScaleX = this.treeScale.x;
			const prevTreeScaleY = this.treeScale.y;
			/**
			* Apply all the parent deltas to this box to produce the corrected box. This
			* is the layout box, as it will appear on screen as a result of the transforms of its parents.
			*/
			applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, isShared);
			/**
			* If this layer needs to perform scale correction but doesn't have a target,
			* use the layout as the target.
			*/
			if (lead.layout && !lead.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1)) {
				lead.target = lead.layout.layoutBox;
				lead.targetWithTransforms = createBox();
			}
			const { target } = lead;
			if (!target) {
				/**
				* If we don't have a target to project into, but we were previously
				* projecting, we want to remove the stored transform and schedule
				* a render to ensure the elements reflect the removed transform.
				*/
				if (this.prevProjectionDelta) {
					this.createProjectionDeltas();
					this.scheduleRender();
				}
				return;
			}
			if (!this.projectionDelta || !this.prevProjectionDelta) this.createProjectionDeltas();
			else {
				copyAxisDeltaInto(this.prevProjectionDelta.x, this.projectionDelta.x);
				copyAxisDeltaInto(this.prevProjectionDelta.y, this.projectionDelta.y);
			}
			/**
			* Update the delta between the corrected box and the target box before user-set transforms were applied.
			* This will allow us to calculate the corrected borderRadius and boxShadow to compensate
			* for our layout reprojection, but still allow them to be scaled correctly by the user.
			* It might be that to simplify this we may want to accept that user-set scale is also corrected
			* and we wouldn't have to keep and calc both deltas, OR we could support a user setting
			* to allow people to choose whether these styles are corrected based on just the
			* layout reprojection or the final bounding box.
			*/
			calcBoxDelta(this.projectionDelta, this.layoutCorrected, target, this.latestValues);
			if (this.treeScale.x !== prevTreeScaleX || this.treeScale.y !== prevTreeScaleY || !axisDeltaEquals(this.projectionDelta.x, this.prevProjectionDelta.x) || !axisDeltaEquals(this.projectionDelta.y, this.prevProjectionDelta.y)) {
				this.hasProjected = true;
				this.scheduleRender();
				this.notifyListeners("projectionUpdate", target);
			}
			/**
			* Increase debug counter for recalculated projections
			*/
			if (statsBuffer.value) metrics.calculatedProjections++;
		}
		hide() {
			this.isVisible = false;
		}
		show() {
			this.isVisible = true;
		}
		scheduleRender(notifyAll = true) {
			this.options.visualElement?.scheduleRender();
			if (notifyAll) {
				const stack = this.getStack();
				stack && stack.scheduleRender();
			}
			if (this.resumingFrom && !this.resumingFrom.instance) this.resumingFrom = void 0;
		}
		createProjectionDeltas() {
			this.prevProjectionDelta = createDelta();
			this.projectionDelta = createDelta();
			this.projectionDeltaWithTransform = createDelta();
		}
		setAnimationOrigin(delta, hasOnlyRelativeTargetChanged = false, pathFn) {
			const snapshot = this.snapshot;
			const snapshotLatestValues = snapshot ? snapshot.latestValues : {};
			const mixedValues = { ...this.latestValues };
			const targetDelta = createDelta();
			if (!this.relativeParent || !this.relativeParent.options.layoutRoot) this.relativeTarget = this.relativeTargetOrigin = void 0;
			this.attemptToResolveRelativeTarget = !hasOnlyRelativeTargetChanged;
			const relativeLayout = createBox();
			const isSharedLayoutAnimation = (snapshot ? snapshot.source : void 0) !== (this.layout ? this.layout.source : void 0);
			const stack = this.getStack();
			const isOnlyMember = !stack || stack.members.length <= 1;
			const shouldCrossfadeOpacity = Boolean(isSharedLayoutAnimation && !isOnlyMember && this.options.crossfade === true && !this.path.some(hasOpacityCrossfade));
			this.animationProgress = 0;
			let prevRelativeTarget;
			const interpolate = pathFn?.interpolateProjection(delta);
			this.mixTargetDelta = (latest) => {
				const progress = latest / 1e3;
				const point = interpolate?.(progress);
				if (point) {
					targetDelta.x.translate = point.x;
					targetDelta.x.scale = mixNumber$1(delta.x.scale, 1, progress);
					targetDelta.x.origin = delta.x.origin;
					targetDelta.x.originPoint = delta.x.originPoint;
					targetDelta.y.translate = point.y;
					targetDelta.y.scale = mixNumber$1(delta.y.scale, 1, progress);
					targetDelta.y.origin = delta.y.origin;
					targetDelta.y.originPoint = delta.y.originPoint;
				} else {
					mixAxisDeltaLinear(targetDelta.x, delta.x, progress);
					mixAxisDeltaLinear(targetDelta.y, delta.y, progress);
				}
				this.setTargetDelta(targetDelta);
				if (this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
					calcRelativePosition(relativeLayout, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0);
					mixBox(this.relativeTarget, this.relativeTargetOrigin, relativeLayout, progress);
					/**
					* If this is an unchanged relative target we can consider the
					* projection not dirty.
					*/
					if (prevRelativeTarget && boxEquals(this.relativeTarget, prevRelativeTarget)) this.isProjectionDirty = false;
					if (!prevRelativeTarget) prevRelativeTarget = createBox();
					copyBoxInto(prevRelativeTarget, this.relativeTarget);
				}
				if (isSharedLayoutAnimation) {
					this.animationValues = mixedValues;
					mixValues(mixedValues, snapshotLatestValues, this.latestValues, progress, shouldCrossfadeOpacity, isOnlyMember);
				}
				if (point && point.rotate !== void 0) {
					if (!this.animationValues) this.animationValues = mixedValues;
					this.animationValues.pathRotation = point.rotate;
				}
				this.root.scheduleUpdateProjection();
				this.scheduleRender();
				this.animationProgress = progress;
			};
			this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
		}
		startAnimation(options) {
			this.notifyListeners("animationStart");
			this.currentAnimation?.stop();
			this.resumingFrom?.currentAnimation?.stop();
			if (this.pendingAnimation) {
				cancelFrame(this.pendingAnimation);
				this.pendingAnimation = void 0;
			}
			/**
			* Start the animation in the next frame to have a frame with progress 0,
			* where the target is the same as when the animation started, so we can
			* calculate the relative positions correctly for instant transitions.
			*/
			this.pendingAnimation = frame.update(() => {
				globalProjectionState.hasAnimatedSinceResize = true;
				this.motionValue || (this.motionValue = motionValue(0));
				this.motionValue.jump(0, false);
				this.currentAnimation = animateSingleValue(this.motionValue, [0, 1e3], {
					...options,
					velocity: 0,
					isSync: true,
					onUpdate: (latest) => {
						this.mixTargetDelta(latest);
						options.onUpdate && options.onUpdate(latest);
					},
					onComplete: () => {
						options.onComplete && options.onComplete();
						this.completeAnimation();
					}
				});
				if (this.resumingFrom) this.resumingFrom.currentAnimation = this.currentAnimation;
				this.pendingAnimation = void 0;
			});
		}
		completeAnimation() {
			if (this.resumingFrom) {
				this.resumingFrom.currentAnimation = void 0;
				this.resumingFrom.preserveOpacity = void 0;
			}
			const stack = this.getStack();
			stack && stack.exitAnimationComplete();
			this.resumingFrom = this.currentAnimation = this.animationValues = void 0;
			this.notifyListeners("animationComplete");
		}
		finishAnimation() {
			if (this.currentAnimation) {
				this.mixTargetDelta && this.mixTargetDelta(animationTarget);
				this.currentAnimation.stop();
			}
			this.completeAnimation();
		}
		applyTransformsToTarget() {
			const lead = this.getLead();
			let { targetWithTransforms, target, layout, latestValues } = lead;
			if (!targetWithTransforms || !target || !layout) return;
			/**
			* If we're only animating position, and this element isn't the lead element,
			* then instead of projecting into the lead box we instead want to calculate
			* a new target that aligns the two boxes but maintains the layout shape.
			*/
			if (this !== lead && this.layout && layout && shouldAnimatePositionOnly(this.options.animationType, this.layout.layoutBox, layout.layoutBox)) {
				target = this.target || createBox();
				const xLength = calcLength(this.layout.layoutBox.x);
				target.x.min = lead.target.x.min;
				target.x.max = target.x.min + xLength;
				const yLength = calcLength(this.layout.layoutBox.y);
				target.y.min = lead.target.y.min;
				target.y.max = target.y.min + yLength;
			}
			copyBoxInto(targetWithTransforms, target);
			/**
			* Apply the latest user-set transforms to the targetBox to produce the targetBoxFinal.
			* This is the final box that we will then project into by calculating a transform delta and
			* applying it to the corrected box.
			*/
			transformBox(targetWithTransforms, latestValues);
			/**
			* Update the delta between the corrected box and the final target box, after
			* user-set transforms are applied to it. This will be used by the renderer to
			* create a transform style that will reproject the element from its layout layout
			* into the desired bounding box.
			*/
			calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, targetWithTransforms, latestValues);
		}
		registerSharedNode(layoutId, node) {
			if (!this.sharedNodes.has(layoutId)) this.sharedNodes.set(layoutId, new NodeStack());
			this.sharedNodes.get(layoutId).add(node);
			const config = node.options.initialPromotionConfig;
			node.promote({
				transition: config ? config.transition : void 0,
				preserveFollowOpacity: config && config.shouldPreserveFollowOpacity ? config.shouldPreserveFollowOpacity(node) : void 0
			});
		}
		isLead() {
			const stack = this.getStack();
			return stack ? stack.lead === this : true;
		}
		getLead() {
			const { layoutId } = this.options;
			return layoutId ? this.getStack()?.lead || this : this;
		}
		getPrevLead() {
			const { layoutId } = this.options;
			return layoutId ? this.getStack()?.prevLead : void 0;
		}
		getStack() {
			const { layoutId } = this.options;
			if (layoutId) return this.root.sharedNodes.get(layoutId);
		}
		promote({ needsReset, transition, preserveFollowOpacity } = {}) {
			const stack = this.getStack();
			if (stack) stack.promote(this, preserveFollowOpacity);
			if (needsReset) {
				this.projectionDelta = void 0;
				this.needsReset = true;
			}
			if (transition) this.setOptions({ transition });
		}
		relegate() {
			const stack = this.getStack();
			if (stack) return stack.relegate(this);
			else return false;
		}
		resetSkewAndRotation() {
			const { visualElement } = this.options;
			if (!visualElement) return;
			let hasDistortingTransform = false;
			/**
			* An unrolled check for rotation values. Most elements don't have any rotation and
			* skipping the nested loop and new object creation is 50% faster.
			*/
			const { latestValues } = visualElement;
			if (latestValues.z || latestValues.rotate || latestValues.rotateX || latestValues.rotateY || latestValues.rotateZ || latestValues.skewX || latestValues.skewY) hasDistortingTransform = true;
			if (!hasDistortingTransform) return;
			const resetValues = {};
			if (latestValues.z) resetDistortingTransform("z", visualElement, resetValues, this.animationValues);
			for (let i = 0; i < transformAxes.length; i++) {
				resetDistortingTransform(`rotate${transformAxes[i]}`, visualElement, resetValues, this.animationValues);
				resetDistortingTransform(`skew${transformAxes[i]}`, visualElement, resetValues, this.animationValues);
			}
			visualElement.render();
			for (const key in resetValues) {
				visualElement.setStaticValue(key, resetValues[key]);
				if (this.animationValues) this.animationValues[key] = resetValues[key];
			}
			visualElement.scheduleRender();
		}
		applyProjectionStyles(targetStyle, styleProp) {
			if (!this.instance || this.isSVG) return;
			if (!this.isVisible) {
				targetStyle.visibility = "hidden";
				return;
			}
			const transformTemplate = this.getTransformTemplate();
			if (this.needsReset) {
				this.needsReset = false;
				targetStyle.visibility = "";
				targetStyle.opacity = "";
				targetStyle.pointerEvents = resolveMotionValue(styleProp?.pointerEvents) || "";
				targetStyle.transform = transformTemplate ? transformTemplate(this.latestValues, "") : "none";
				return;
			}
			const lead = this.getLead();
			if (!this.projectionDelta || !this.layout || !lead.target) {
				if (this.options.layoutId) {
					targetStyle.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1;
					targetStyle.pointerEvents = resolveMotionValue(styleProp?.pointerEvents) || "";
				}
				if (this.hasProjected && !hasTransform(this.latestValues)) {
					targetStyle.transform = transformTemplate ? transformTemplate({}, "") : "none";
					this.hasProjected = false;
				}
				return;
			}
			targetStyle.visibility = "";
			const valuesToRender = lead.animationValues || lead.latestValues;
			this.applyTransformsToTarget();
			let transform = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, valuesToRender);
			if (transformTemplate) transform = transformTemplate(valuesToRender, transform);
			targetStyle.transform = transform;
			const { x, y } = this.projectionDelta;
			targetStyle.transformOrigin = `${x.origin * 100}% ${y.origin * 100}% 0`;
			if (lead.animationValues)
 /**
			* If the lead component is animating, assign this either the entering/leaving
			* opacity
			*/
			targetStyle.opacity = lead === this ? valuesToRender.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : valuesToRender.opacityExit;
			else
 /**
			* Or we're not animating at all, set the lead component to its layout
			* opacity and other components to hidden.
			*/
			targetStyle.opacity = lead === this ? valuesToRender.opacity !== void 0 ? valuesToRender.opacity : "" : valuesToRender.opacityExit !== void 0 ? valuesToRender.opacityExit : 0;
			/**
			* Apply scale correction
			*/
			for (const key in scaleCorrectors) {
				if (valuesToRender[key] === void 0) continue;
				const { correct, applyTo, isCSSVariable } = scaleCorrectors[key];
				/**
				* Only apply scale correction to the value if we have an
				* active projection transform. Otherwise these values become
				* vulnerable to distortion if the element changes size without
				* a corresponding layout animation.
				*/
				const corrected = transform === "none" ? valuesToRender[key] : correct(valuesToRender[key], lead);
				if (applyTo) {
					const num = applyTo.length;
					for (let i = 0; i < num; i++) targetStyle[applyTo[i]] = corrected;
				} else if (isCSSVariable) this.options.visualElement.renderState.vars[key] = corrected;
				else targetStyle[key] = corrected;
			}
			/**
			* Disable pointer events on follow components. This is to ensure
			* that if a follow component covers a lead component it doesn't block
			* pointer events on the lead.
			*/
			if (this.options.layoutId) targetStyle.pointerEvents = lead === this ? resolveMotionValue(styleProp?.pointerEvents) || "" : "none";
		}
		clearSnapshot() {
			this.resumeFrom = this.snapshot = void 0;
		}
		resetTree() {
			this.root.nodes.forEach((node) => node.currentAnimation?.stop());
			this.root.nodes.forEach(clearMeasurements);
			this.root.sharedNodes.clear();
		}
	};
}
function updateLayout(node) {
	node.updateLayout();
}
function notifyLayoutUpdate(node) {
	const snapshot = node.resumeFrom?.snapshot || node.snapshot;
	if (node.isLead() && node.layout && snapshot && node.hasListeners("didUpdate")) {
		const { layoutBox: layout, measuredBox: measuredLayout } = node.layout;
		const { animationType } = node.options;
		const isShared = snapshot.source !== node.layout.source;
		if (animationType === "size") eachAxis((axis) => {
			const axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
			const length = calcLength(axisSnapshot);
			axisSnapshot.min = layout[axis].min;
			axisSnapshot.max = axisSnapshot.min + length;
		});
		else if (animationType === "x" || animationType === "y") {
			const snapAxis = animationType === "x" ? "y" : "x";
			copyAxisInto(isShared ? snapshot.measuredBox[snapAxis] : snapshot.layoutBox[snapAxis], layout[snapAxis]);
		} else if (shouldAnimatePositionOnly(animationType, snapshot.layoutBox, layout)) eachAxis((axis) => {
			const axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
			const length = calcLength(layout[axis]);
			axisSnapshot.max = axisSnapshot.min + length;
			/**
			* Ensure relative target gets resized and rerendererd
			*/
			if (node.relativeTarget && !node.currentAnimation) {
				node.isProjectionDirty = true;
				node.relativeTarget[axis].max = node.relativeTarget[axis].min + length;
			}
		});
		const layoutDelta = createDelta();
		calcBoxDelta(layoutDelta, layout, snapshot.layoutBox);
		const visualDelta = createDelta();
		if (isShared) calcBoxDelta(visualDelta, node.applyTransform(measuredLayout, true), snapshot.measuredBox);
		else calcBoxDelta(visualDelta, layout, snapshot.layoutBox);
		const hasLayoutChanged = !isDeltaZero(layoutDelta);
		let hasRelativeLayoutChanged = false;
		if (!node.resumeFrom) {
			const relativeParent = node.getClosestProjectingParent();
			/**
			* If the relativeParent is itself resuming from a different element then
			* the relative snapshot is not relavent
			*/
			if (relativeParent && !relativeParent.resumeFrom) {
				const { snapshot: parentSnapshot, layout: parentLayout } = relativeParent;
				if (parentSnapshot && parentLayout) {
					const anchor = node.options.layoutAnchor || void 0;
					const relativeSnapshot = createBox();
					calcRelativePosition(relativeSnapshot, snapshot.layoutBox, parentSnapshot.layoutBox, anchor);
					const relativeLayout = createBox();
					calcRelativePosition(relativeLayout, layout, parentLayout.layoutBox, anchor);
					if (!boxEqualsRounded(relativeSnapshot, relativeLayout)) hasRelativeLayoutChanged = true;
					if (relativeParent.options.layoutRoot) {
						node.relativeTarget = relativeLayout;
						node.relativeTargetOrigin = relativeSnapshot;
						node.relativeParent = relativeParent;
					}
				}
			}
		}
		node.notifyListeners("didUpdate", {
			layout,
			snapshot,
			delta: visualDelta,
			layoutDelta,
			hasLayoutChanged,
			hasRelativeLayoutChanged
		});
	} else if (node.isLead()) {
		const { onExitComplete } = node.options;
		onExitComplete && onExitComplete();
	}
	/**
	* Clearing transition
	* TODO: Investigate why this transition is being passed in as {type: false } from Framer
	* and why we need it at all
	*/
	node.options.transition = void 0;
}
function propagateDirtyNodes(node) {
	/**
	* Increase debug counter for nodes encountered this frame
	*/
	if (statsBuffer.value) metrics.nodes++;
	if (!node.parent) return;
	/**
	* If this node isn't projecting, propagate isProjectionDirty. It will have
	* no performance impact but it will allow the next child that *is* projecting
	* but *isn't* dirty to just check its parent to see if *any* ancestor needs
	* correcting.
	*/
	if (!node.isProjecting()) node.isProjectionDirty = node.parent.isProjectionDirty;
	/**
	* Propagate isSharedProjectionDirty and isTransformDirty
	* throughout the whole tree. A future revision can take another look at
	* this but for safety we still recalcualte shared nodes.
	*/
	node.isSharedProjectionDirty || (node.isSharedProjectionDirty = Boolean(node.isProjectionDirty || node.parent.isProjectionDirty || node.parent.isSharedProjectionDirty));
	node.isTransformDirty || (node.isTransformDirty = node.parent.isTransformDirty);
}
function cleanDirtyNodes(node) {
	node.isProjectionDirty = node.isSharedProjectionDirty = node.isTransformDirty = false;
}
function clearSnapshot(node) {
	node.clearSnapshot();
}
function clearMeasurements(node) {
	node.clearMeasurements();
}
function forceLayoutMeasure(node) {
	node.isLayoutDirty = true;
	node.updateLayout();
}
function clearIsLayoutDirty(node) {
	node.isLayoutDirty = false;
}
/**
* When a node is animation-blocked (e.g. during drag) and its component
* didn't re-render (memoized), willUpdate() is never called so there's
* no snapshot. Use the previous layout as a snapshot and mark dirty so
* resetTransform/updateLayout/notifyLayoutUpdate process it normally.
*/
function ensureDraggedNodesSnapshotted(node) {
	if (node.isAnimationBlocked && node.layout && !node.isLayoutDirty) {
		node.snapshot = node.layout;
		node.isLayoutDirty = true;
	}
}
function resetTransformStyle(node) {
	const { visualElement } = node.options;
	if (visualElement && visualElement.getProps().onBeforeLayoutMeasure) visualElement.notify("BeforeLayoutMeasure");
	node.resetTransform();
}
function finishAnimation(node) {
	node.finishAnimation();
	node.targetDelta = node.relativeTarget = node.target = void 0;
	node.isProjectionDirty = true;
}
function resolveTargetDelta(node) {
	node.resolveTargetDelta();
}
function calcProjection(node) {
	node.calcProjection();
}
function resetSkewAndRotation(node) {
	node.resetSkewAndRotation();
}
function removeLeadSnapshots(stack) {
	stack.removeLeadSnapshot();
}
function mixAxisDeltaLinear(output, delta, p) {
	output.translate = mixNumber$1(delta.translate, 0, p);
	output.scale = mixNumber$1(delta.scale, 1, p);
	output.origin = delta.origin;
	output.originPoint = delta.originPoint;
}
function mixAxis(output, from, to, p) {
	output.min = mixNumber$1(from.min, to.min, p);
	output.max = mixNumber$1(from.max, to.max, p);
}
function mixBox(output, from, to, p) {
	mixAxis(output.x, from.x, to.x, p);
	mixAxis(output.y, from.y, to.y, p);
}
function hasOpacityCrossfade(node) {
	return node.animationValues && node.animationValues.opacityExit !== void 0;
}
var defaultLayoutTransition = {
	duration: .45,
	ease: [
		.4,
		0,
		.1,
		1
	]
};
var userAgentContains = (string) => typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(string);
/**
* Measured bounding boxes must be rounded in Safari and
* left untouched in Chrome, otherwise non-integer layouts within scaled-up elements
* can appear to jump.
*/
var roundPoint = userAgentContains("applewebkit/") && !userAgentContains("chrome/") ? Math.round : noop;
function roundAxis(axis) {
	axis.min = roundPoint(axis.min);
	axis.max = roundPoint(axis.max);
}
function roundBox(box) {
	roundAxis(box.x);
	roundAxis(box.y);
}
function shouldAnimatePositionOnly(animationType, snapshot, layout) {
	return animationType === "position" || animationType === "preserve-aspect" && !isNear(aspectRatio(snapshot), aspectRatio(layout), .2);
}
function checkNodeWasScrollRoot(node) {
	return node !== node.root && node.scroll?.wasRoot;
}
// node_modules/motion-dom/dist/es/projection/node/DocumentProjectionNode.mjs
var DocumentProjectionNode = createProjectionNode$1({
	attachResizeListener: (ref, notify) => addDomEvent(ref, "resize", notify),
	measureScroll: () => ({
		x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
		y: document.documentElement.scrollTop || document.body?.scrollTop || 0
	}),
	checkIsScrollRoot: () => true
});
// node_modules/motion-dom/dist/es/projection/node/HTMLProjectionNode.mjs
var rootProjectionNode = { current: void 0 };
var HTMLProjectionNode = createProjectionNode$1({
	measureScroll: (instance) => ({
		x: instance.scrollLeft,
		y: instance.scrollTop
	}),
	defaultParent: () => {
		if (!rootProjectionNode.current) {
			const documentNode = new DocumentProjectionNode({});
			documentNode.mount(window);
			documentNode.setOptions({ layoutScroll: true });
			rootProjectionNode.current = documentNode;
		}
		return rootProjectionNode.current;
	},
	resetTransform: (instance, value) => {
		instance.style.transform = value !== void 0 ? value : "none";
	},
	checkIsScrollRoot: (instance) => Boolean(window.getComputedStyle(instance).position === "fixed")
});
// node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs
/**
* @public
*/
var MotionConfigContext = createContext({
	transformPagePoint: (p) => p,
	isStatic: false,
	reducedMotion: "never"
});
// node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
/**
* When a component is the child of `AnimatePresence`, it can use `usePresence`
* to access information about whether it's still present in the React tree.
*
* ```jsx
* import { usePresence } from "framer-motion"
*
* export const Component = () => {
*   const [isPresent, safeToRemove] = usePresence()
*
*   useEffect(() => {
*     !isPresent && setTimeout(safeToRemove, 1000)
*   }, [isPresent])
*
*   return <div />
* }
* ```
*
* If `isPresent` is `false`, it means that a component has been removed from the tree,
* but `AnimatePresence` won't really remove it until `safeToRemove` has been called.
*
* @public
*/
function usePresence(subscribe = true) {
	const context = useContext(PresenceContext);
	if (context === null) return [true, null];
	const { isPresent, onExitComplete, register } = context;
	const id = useId();
	useEffect(() => {
		if (subscribe) return register(id);
	}, [subscribe]);
	const safeToRemove = useCallback(() => subscribe && onExitComplete && onExitComplete(id), [
		id,
		onExitComplete,
		subscribe
	]);
	return !isPresent && onExitComplete ? [false, safeToRemove] : [true];
}
// node_modules/framer-motion/dist/es/context/LazyContext.mjs
var LazyContext = createContext({ strict: false });
// node_modules/framer-motion/dist/es/motion/features/definitions.mjs
var featureProps = {
	animation: [
		"animate",
		"variants",
		"whileHover",
		"whileTap",
		"exit",
		"whileInView",
		"whileFocus",
		"whileDrag"
	],
	exit: ["exit"],
	drag: ["drag", "dragControls"],
	focus: ["whileFocus"],
	hover: [
		"whileHover",
		"onHoverStart",
		"onHoverEnd"
	],
	tap: [
		"whileTap",
		"onTap",
		"onTapStart",
		"onTapCancel"
	],
	pan: [
		"onPan",
		"onPanStart",
		"onPanSessionStart",
		"onPanEnd"
	],
	inView: [
		"whileInView",
		"onViewportEnter",
		"onViewportLeave"
	],
	layout: ["layout", "layoutId"]
};
var isInitialized = false;
/**
* Initialize feature definitions with isEnabled checks.
* This must be called before any motion components are rendered.
*/
function initFeatureDefinitions() {
	if (isInitialized) return;
	const initialFeatureDefinitions = {};
	for (const key in featureProps) initialFeatureDefinitions[key] = { isEnabled: (props) => featureProps[key].some((name) => !!props[name]) };
	setFeatureDefinitions(initialFeatureDefinitions);
	isInitialized = true;
}
/**
* Get the current feature definitions, initializing if needed.
*/
function getInitializedFeatureDefinitions() {
	initFeatureDefinitions();
	return getFeatureDefinitions();
}
// node_modules/framer-motion/dist/es/motion/features/load-features.mjs
function loadFeatures(features) {
	const featureDefinitions = getInitializedFeatureDefinitions();
	for (const key in features) featureDefinitions[key] = {
		...featureDefinitions[key],
		...features[key]
	};
	setFeatureDefinitions(featureDefinitions);
}
// node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs
/**
* A list of all valid MotionProps.
*
* @privateRemarks
* This doesn't throw if a `MotionProp` name is missing - it should.
*/
var validMotionProps = /* @__PURE__ */ new Set([
	"animate",
	"exit",
	"variants",
	"initial",
	"style",
	"values",
	"variants",
	"transition",
	"transformTemplate",
	"custom",
	"inherit",
	"onBeforeLayoutMeasure",
	"onAnimationStart",
	"onAnimationComplete",
	"onUpdate",
	"onDragStart",
	"onDrag",
	"onDragEnd",
	"onMeasureDragConstraints",
	"onDirectionLock",
	"onDragTransitionEnd",
	"_dragX",
	"_dragY",
	"onHoverStart",
	"onHoverEnd",
	"onViewportEnter",
	"onViewportLeave",
	"globalTapTarget",
	"propagate",
	"ignoreStrict",
	"viewport"
]);
/**
* Check whether a prop name is a valid `MotionProp` key.
*
* @param key - Name of the property to check
* @returns `true` is key is a valid `MotionProp`.
*
* @public
*/
function isValidMotionProp(key) {
	return key.startsWith("while") || key.startsWith("drag") && key !== "draggable" || key.startsWith("layout") || key.startsWith("onTap") || key.startsWith("onPan") || key.startsWith("onLayout") || validMotionProps.has(key);
}
// __vite-optional-peer-dep:@emotion/is-prop-valid:framer-motion
var is_prop_valid_framer_motion_exports = /* @__PURE__ */ __exportAll({ default: () => is_prop_valid_framer_motion_default });
var is_prop_valid_framer_motion_default;
var init_is_prop_valid_framer_motion = __esmMin((() => {
	is_prop_valid_framer_motion_default = {};
	throw new Error(`Could not resolve "@emotion/is-prop-valid" imported by "framer-motion". Is it installed?`);
}));
// node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs
var shouldForward = (key) => !isValidMotionProp(key);
function loadExternalIsValidProp(isValidProp) {
	if (typeof isValidProp !== "function") return;
	shouldForward = (key) => key.startsWith("on") ? !isValidMotionProp(key) : isValidProp(key);
}
/**
* Emotion and Styled Components both allow users to pass through arbitrary props to their components
* to dynamically generate CSS. They both use the `@emotion/is-prop-valid` package to determine which
* of these should be passed to the underlying DOM node.
*
* However, when styling a Motion component `styled(motion.div)`, both packages pass through *all* props
* as it's seen as an arbitrary component rather than a DOM node. Motion only allows arbitrary props
* passed through the `custom` prop so it doesn't *need* the payload or computational overhead of
* `@emotion/is-prop-valid`, however to fix this problem we need to use it.
*
* By making it an optionalDependency we can offer this functionality only in the situations where it's
* actually required.
*/
try {
	loadExternalIsValidProp((init_is_prop_valid_framer_motion(), __toCommonJS(is_prop_valid_framer_motion_exports)).default);
} catch {}
function filterProps(props, isDom, forwardMotionProps) {
	const filteredProps = {};
	for (const key in props) {
		/**
		* values is considered a valid prop by Emotion, so if it's present
		* this will be rendered out to the DOM unless explicitly filtered.
		*
		* We check the type as it could be used with the `feColorMatrix`
		* element, which we support.
		*/
		if (key === "values" && typeof props.values === "object") continue;
		if (isMotionValue(props[key])) continue;
		if (shouldForward(key) || forwardMotionProps === true && isValidMotionProp(key) || !isDom && !isValidMotionProp(key) || props["draggable"] && key.startsWith("onDrag")) filteredProps[key] = props[key];
	}
	return filteredProps;
}
// node_modules/framer-motion/dist/es/context/MotionContext/index.mjs
var MotionContext = /* @__PURE__ */ createContext({});
// node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs
function getCurrentTreeVariants(props, context) {
	if (isControllingVariants(props)) {
		const { initial, animate } = props;
		return {
			initial: initial === false || isVariantLabel(initial) ? initial : void 0,
			animate: isVariantLabel(animate) ? animate : void 0
		};
	}
	return props.inherit !== false ? context : {};
}
// node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
function useCreateMotionContext(props) {
	const { initial, animate } = getCurrentTreeVariants(props, useContext(MotionContext));
	return useMemo(() => ({
		initial,
		animate
	}), [variantLabelsAsDependency(initial), variantLabelsAsDependency(animate)]);
}
function variantLabelsAsDependency(prop) {
	return Array.isArray(prop) ? prop.join(" ") : prop;
}
// node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs
var createHtmlRenderState = () => ({
	style: {},
	transform: {},
	transformOrigin: {},
	vars: {}
});
// node_modules/framer-motion/dist/es/render/html/use-props.mjs
function copyRawValuesOnly(target, source, props) {
	for (const key in source) if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props)) target[key] = source[key];
}
function useInitialMotionValues({ transformTemplate }, visualState) {
	return useMemo(() => {
		const state = createHtmlRenderState();
		buildHTMLStyles(state, visualState, transformTemplate);
		return Object.assign({}, state.vars, state.style);
	}, [visualState]);
}
function useStyle(props, visualState) {
	const styleProp = props.style || {};
	const style = {};
	/**
	* Copy non-Motion Values straight into style
	*/
	copyRawValuesOnly(style, styleProp, props);
	Object.assign(style, useInitialMotionValues(props, visualState));
	return style;
}
function useHTMLProps(props, visualState) {
	const htmlProps = {};
	const style = useStyle(props, visualState);
	if (props.drag && props.dragListener !== false) {
		htmlProps.draggable = false;
		style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout = "none";
		style.touchAction = props.drag === true ? "none" : `pan-${props.drag === "x" ? "y" : "x"}`;
	}
	if (props.tabIndex === void 0 && (props.onTap || props.onTapStart || props.whileTap)) htmlProps.tabIndex = 0;
	htmlProps.style = style;
	return htmlProps;
}
// node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs
var createSvgRenderState = () => ({
	...createHtmlRenderState(),
	attrs: {}
});
// node_modules/framer-motion/dist/es/render/svg/use-props.mjs
function useSVGProps(props, visualState, _isStatic, Component) {
	const visualProps = useMemo(() => {
		const state = createSvgRenderState();
		buildSVGAttrs(state, visualState, isSVGTag(Component), props.transformTemplate, props.style);
		return {
			...state.attrs,
			style: { ...state.style }
		};
	}, [visualState]);
	if (props.style) {
		const rawStyles = {};
		copyRawValuesOnly(rawStyles, props.style, props);
		visualProps.style = {
			...rawStyles,
			...visualProps.style
		};
	}
	return visualProps;
}
// node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs
/**
* We keep these listed separately as we use the lowercase tag names as part
* of the runtime bundle to detect SVG components
*/
var lowercaseSVGElements = [
	"animate",
	"circle",
	"defs",
	"desc",
	"ellipse",
	"g",
	"image",
	"line",
	"filter",
	"marker",
	"mask",
	"metadata",
	"path",
	"pattern",
	"polygon",
	"polyline",
	"rect",
	"stop",
	"switch",
	"symbol",
	"svg",
	"text",
	"tspan",
	"use",
	"view"
];
// node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs
function isSVGComponent(Component) {
	if (typeof Component !== "string" || Component.includes("-")) return false;
	else if (lowercaseSVGElements.indexOf(Component) > -1 || /[A-Z]/u.test(Component)) return true;
	return false;
}
// node_modules/framer-motion/dist/es/render/dom/use-render.mjs
function useRender(Component, props, ref, { latestValues }, isStatic, forwardMotionProps = false, isSVG) {
	const visualProps = (isSVG ?? isSVGComponent(Component) ? useSVGProps : useHTMLProps)(props, latestValues, isStatic, Component);
	const filteredProps = filterProps(props, typeof Component === "string", forwardMotionProps);
	const elementProps = Component !== Fragment$1 ? {
		...filteredProps,
		...visualProps,
		ref
	} : {};
	/**
	* If component has been handed a motion value as its child,
	* memoise its initial value and render that. Subsequent updates
	* will be handled by the onChange handler
	*/
	const { children } = props;
	const renderedChildren = useMemo(() => isMotionValue(children) ? children.get() : children, [children]);
	return createElement(Component, {
		...elementProps,
		children: renderedChildren
	});
}
// node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs
function makeState({ scrapeMotionValuesFromProps, createRenderState }, props, context, presenceContext) {
	return {
		latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps),
		renderState: createRenderState()
	};
}
function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
	const values = {};
	const motionValues = scrapeMotionValues(props, {});
	for (const key in motionValues) values[key] = resolveMotionValue(motionValues[key]);
	let { initial, animate } = props;
	const isControllingVariants$1 = isControllingVariants(props);
	const isVariantNode$1 = isVariantNode(props);
	if (context && isVariantNode$1 && !isControllingVariants$1 && props.inherit !== false) {
		if (initial === void 0) initial = context.initial;
		if (animate === void 0) animate = context.animate;
	}
	let isInitialAnimationBlocked = presenceContext ? presenceContext.initial === false : false;
	isInitialAnimationBlocked = isInitialAnimationBlocked || initial === false;
	const variantToSet = isInitialAnimationBlocked ? animate : initial;
	if (variantToSet && typeof variantToSet !== "boolean" && !isAnimationControls(variantToSet)) {
		const list = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
		for (let i = 0; i < list.length; i++) {
			const resolved = resolveVariantFromProps(props, list[i]);
			if (resolved) {
				const { transitionEnd, transition, ...target } = resolved;
				for (const key in target) {
					let valueTarget = target[key];
					if (Array.isArray(valueTarget)) {
						/**
						* Take final keyframe if the initial animation is blocked because
						* we want to initialise at the end of that blocked animation.
						*/
						const index = isInitialAnimationBlocked ? valueTarget.length - 1 : 0;
						valueTarget = valueTarget[index];
					}
					if (valueTarget !== null) values[key] = valueTarget;
				}
				for (const key in transitionEnd) values[key] = transitionEnd[key];
			}
		}
	}
	return values;
}
var makeUseVisualState = (config) => (props, isStatic) => {
	const context = useContext(MotionContext);
	const presenceContext = useContext(PresenceContext);
	const make = () => makeState(config, props, context, presenceContext);
	return isStatic ? make() : useConstant(make);
};
// node_modules/framer-motion/dist/es/render/html/use-html-visual-state.mjs
var useHTMLVisualState = /*@__PURE__*/ makeUseVisualState({
	scrapeMotionValuesFromProps: scrapeMotionValuesFromProps$1,
	createRenderState: createHtmlRenderState
});
// node_modules/framer-motion/dist/es/render/svg/use-svg-visual-state.mjs
var useSVGVisualState = /*@__PURE__*/ makeUseVisualState({
	scrapeMotionValuesFromProps,
	createRenderState: createSvgRenderState
});
// node_modules/framer-motion/dist/es/motion/utils/symbol.mjs
var motionComponentSymbol = Symbol.for("motionComponentSymbol");
// node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
/**
* Creates a ref function that, when called, hydrates the provided
* external ref and VisualElement.
*/
function useMotionRef(visualState, visualElement, externalRef) {
	/**
	* Store externalRef in a ref to avoid including it in the useCallback
	* dependency array. Including externalRef in dependencies causes issues
	* with libraries like Radix UI that create new callback refs on each render
	* when using asChild - this would cause the callback to be recreated,
	* triggering element remounts and breaking AnimatePresence exit animations.
	*/
	const externalRefContainer = useRef(externalRef);
	useInsertionEffect(() => {
		externalRefContainer.current = externalRef;
	});
	const refCleanup = useRef(null);
	return useCallback((instance) => {
		if (instance) visualState.onMount?.(instance);
		if (visualElement) instance ? visualElement.mount(instance) : visualElement.unmount();
		const ref = externalRefContainer.current;
		if (typeof ref === "function") {
			if (instance) {
				const cleanup = ref(instance);
				if (typeof cleanup === "function") refCleanup.current = cleanup;
			} else if (refCleanup.current) {
				refCleanup.current();
				refCleanup.current = null;
			} else ref(instance);
		} else if (ref) ref.current = instance;
	}, [visualElement]);
}
// node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs
/**
* Internal, exported only for usage in Framer
*/
var SwitchLayoutGroupContext = createContext({});
// node_modules/framer-motion/dist/es/utils/is-ref-object.mjs
function isRefObject(ref) {
	return ref && typeof ref === "object" && Object.prototype.hasOwnProperty.call(ref, "current");
}
// node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
function useVisualElement(Component, visualState, props, createVisualElement, ProjectionNodeConstructor, isSVG) {
	const { visualElement: parent } = useContext(MotionContext);
	const lazyContext = useContext(LazyContext);
	const presenceContext = useContext(PresenceContext);
	const motionConfig = useContext(MotionConfigContext);
	const reducedMotionConfig = motionConfig.reducedMotion;
	const skipAnimations = motionConfig.skipAnimations;
	const visualElementRef = useRef(null);
	/**
	* Track whether the component has been through React's commit phase.
	* Used to detect when LazyMotion features load after the component has mounted.
	*/
	const hasMountedOnce = useRef(false);
	/**
	* If we haven't preloaded a renderer, check to see if we have one lazy-loaded
	*/
	createVisualElement = createVisualElement || lazyContext.renderer;
	if (!visualElementRef.current && createVisualElement) {
		visualElementRef.current = createVisualElement(Component, {
			visualState,
			parent,
			props,
			presenceContext,
			blockInitialAnimation: presenceContext ? presenceContext.initial === false : false,
			reducedMotionConfig,
			skipAnimations,
			isSVG
		});
		/**
		* If the component has already mounted before features loaded (e.g. via
		* LazyMotion with async feature loading), we need to force the initial
		* animation to run. Otherwise state changes that occurred before features
		* loaded will be lost and the element will snap to its final state.
		*/
		if (hasMountedOnce.current && visualElementRef.current) visualElementRef.current.manuallyAnimateOnMount = true;
	}
	const visualElement = visualElementRef.current;
	/**
	* Load Motion gesture and animation features. These are rendered as renderless
	* components so each feature can optionally make use of React lifecycle methods.
	*/
	const initialLayoutGroupConfig = useContext(SwitchLayoutGroupContext);
	if (visualElement && !visualElement.projection && ProjectionNodeConstructor && (visualElement.type === "html" || visualElement.type === "svg")) createProjectionNode(visualElementRef.current, props, ProjectionNodeConstructor, initialLayoutGroupConfig);
	const isMounted = useRef(false);
	useInsertionEffect(() => {
		/**
		* Check the component has already mounted before calling
		* `update` unnecessarily. This ensures we skip the initial update.
		*/
		if (visualElement && isMounted.current) visualElement.update(props, presenceContext);
	});
	/**
	* Cache this value as we want to know whether HandoffAppearAnimations
	* was present on initial render - it will be deleted after this.
	*/
	const optimisedAppearId = props[optimizedAppearDataAttribute];
	const wantsHandoff = useRef(Boolean(optimisedAppearId) && typeof window !== "undefined" && !window.MotionHandoffIsComplete?.(optimisedAppearId) && window.MotionHasOptimisedAnimation?.(optimisedAppearId));
	useIsomorphicLayoutEffect(() => {
		/**
		* Track that this component has mounted. This is used to detect when
		* LazyMotion features load after the component has already committed.
		*/
		hasMountedOnce.current = true;
		if (!visualElement) return;
		isMounted.current = true;
		window.MotionIsMounted = true;
		visualElement.updateFeatures();
		visualElement.scheduleRenderMicrotask();
		/**
		* Ideally this function would always run in a useEffect.
		*
		* However, if we have optimised appear animations to handoff from,
		* it needs to happen synchronously to ensure there's no flash of
		* incorrect styles in the event of a hydration error.
		*
		* So if we detect a situtation where optimised appear animations
		* are running, we use useLayoutEffect to trigger animations.
		*/
		if (wantsHandoff.current && visualElement.animationState) visualElement.animationState.animateChanges();
	});
	useEffect(() => {
		if (!visualElement) return;
		if (!wantsHandoff.current && visualElement.animationState) visualElement.animationState.animateChanges();
		if (wantsHandoff.current) {
			queueMicrotask(() => {
				window.MotionHandoffMarkAsComplete?.(optimisedAppearId);
			});
			wantsHandoff.current = false;
		}
		/**
		* Now we've finished triggering animations for this element we
		* can wipe the enteringChildren set for the next render.
		*/
		visualElement.enteringChildren = void 0;
	});
	return visualElement;
}
function createProjectionNode(visualElement, props, ProjectionNodeConstructor, initialPromotionConfig) {
	const { layoutId, layout, drag, dragConstraints, layoutScroll, layoutRoot, layoutAnchor, layoutCrossfade } = props;
	visualElement.projection = new ProjectionNodeConstructor(visualElement.latestValues, props["data-framer-portal-id"] ? void 0 : getClosestProjectingNode(visualElement.parent));
	visualElement.projection.setOptions({
		layoutId,
		layout,
		alwaysMeasureLayout: Boolean(drag) || dragConstraints && isRefObject(dragConstraints),
		visualElement,
		/**
		* TODO: Update options in an effect. This could be tricky as it'll be too late
		* to update by the time layout animations run.
		* We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
		* ensuring it gets called if there's no potential layout animations.
		*
		*/
		animationType: typeof layout === "string" ? layout : "both",
		initialPromotionConfig,
		crossfade: layoutCrossfade,
		layoutScroll,
		layoutRoot,
		layoutAnchor
	});
}
function getClosestProjectingNode(visualElement) {
	if (!visualElement) return void 0;
	return visualElement.options.allowProjection !== false ? visualElement.projection : getClosestProjectingNode(visualElement.parent);
}
// node_modules/framer-motion/dist/es/motion/index.mjs
/**
* Create a `motion` component.
*
* This function accepts a Component argument, which can be either a string (ie "div"
* for `motion.div`), or an actual React component.
*
* Alongside this is a config option which provides a way of rendering the provided
* component "offline", or outside the React render cycle.
*/
function createMotionComponent(Component, { forwardMotionProps = false, type } = {}, preloadedFeatures, createVisualElement) {
	preloadedFeatures && loadFeatures(preloadedFeatures);
	/**
	* Determine whether to use SVG or HTML rendering based on:
	* 1. Explicit `type` option (highest priority)
	* 2. Auto-detection via `isSVGComponent`
	*/
	const isSVG = type ? type === "svg" : isSVGComponent(Component);
	const useVisualState = isSVG ? useSVGVisualState : useHTMLVisualState;
	function MotionDOMComponent(props, externalRef) {
		/**
		* If we need to measure the element we load this functionality in a
		* separate class component in order to gain access to getSnapshotBeforeUpdate.
		*/
		let MeasureLayout;
		const configAndProps = {
			...useContext(MotionConfigContext),
			...props,
			layoutId: useLayoutId(props)
		};
		const { isStatic } = configAndProps;
		const context = useCreateMotionContext(props);
		const visualState = useVisualState(props, isStatic);
		if (!isStatic && typeof window !== "undefined") {
			useStrictMode(configAndProps, preloadedFeatures);
			const layoutProjection = getProjectionFunctionality(configAndProps);
			MeasureLayout = layoutProjection.MeasureLayout;
			/**
			* Create a VisualElement for this component. A VisualElement provides a common
			* interface to renderer-specific APIs (ie DOM/Three.js etc) as well as
			* providing a way of rendering to these APIs outside of the React render loop
			* for more performant animations and interactions
			*/
			context.visualElement = useVisualElement(Component, visualState, configAndProps, createVisualElement, layoutProjection.ProjectionNode, isSVG);
		}
		/**
		* The mount order and hierarchy is specific to ensure our element ref
		* is hydrated by the time features fire their effects.
		*/
		return jsxs(MotionContext.Provider, {
			value: context,
			children: [MeasureLayout && context.visualElement ? jsx(MeasureLayout, {
				visualElement: context.visualElement,
				...configAndProps
			}) : null, useRender(Component, props, useMotionRef(visualState, context.visualElement, externalRef), visualState, isStatic, forwardMotionProps, isSVG)]
		});
	}
	MotionDOMComponent.displayName = `motion.${typeof Component === "string" ? Component : `create(${Component.displayName ?? Component.name ?? ""})`}`;
	const ForwardRefMotionComponent = forwardRef(MotionDOMComponent);
	ForwardRefMotionComponent[motionComponentSymbol] = Component;
	return ForwardRefMotionComponent;
}
function useLayoutId({ layoutId }) {
	const layoutGroupId = useContext(LayoutGroupContext).id;
	return layoutGroupId && layoutId !== void 0 ? layoutGroupId + "-" + layoutId : layoutId;
}
function useStrictMode(configAndProps, preloadedFeatures) {
	const isStrict = useContext(LazyContext).strict;
	/**
	* If we're in development mode, check to make sure we're not rendering a motion component
	* as a child of LazyMotion, as this will break the file-size benefits of using it.
	*/
	if (process.env.NODE_ENV !== "production" && preloadedFeatures && isStrict) {
		const strictMessage = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
		configAndProps.ignoreStrict ? warning(false, strictMessage, "lazy-strict-mode") : invariant(false, strictMessage, "lazy-strict-mode");
	}
}
function getProjectionFunctionality(props) {
	const { drag, layout } = getInitializedFeatureDefinitions();
	if (!drag && !layout) return {};
	const combined = {
		...drag,
		...layout
	};
	return {
		MeasureLayout: drag?.isEnabled(props) || layout?.isEnabled(props) ? combined.MeasureLayout : void 0,
		ProjectionNode: combined.ProjectionNode
	};
}
// node_modules/framer-motion/dist/es/render/components/create-proxy.mjs
function createMotionProxy(preloadedFeatures, createVisualElement) {
	if (typeof Proxy === "undefined") return createMotionComponent;
	/**
	* A cache of generated `motion` components, e.g `motion.div`, `motion.input` etc.
	* Rather than generating them anew every render.
	*/
	const componentCache = /* @__PURE__ */ new Map();
	const factory = (Component, options) => {
		return createMotionComponent(Component, options, preloadedFeatures, createVisualElement);
	};
	/**
	* Support for deprecated`motion(Component)` pattern
	*/
	const deprecatedFactoryFunction = (Component, options) => {
		if (process.env.NODE_ENV !== "production") warnOnce(false, "motion() is deprecated. Use motion.create() instead.");
		return factory(Component, options);
	};
	return new Proxy(deprecatedFactoryFunction, { 
	/**
	* Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
	* The prop name is passed through as `key` and we can use that to generate a `motion`
	* DOM component with that name.
	*/
get: (_target, key) => {
		if (key === "create") return factory;
		/**
		* If this element doesn't exist in the component cache, create it and cache.
		*/
		if (!componentCache.has(key)) componentCache.set(key, createMotionComponent(key, void 0, preloadedFeatures, createVisualElement));
		return componentCache.get(key);
	} });
}
// node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs
var createDomVisualElement = (Component, options) => {
	return options.isSVG ?? isSVGComponent(Component) ? new SVGVisualElement(options) : new HTMLVisualElement(options, { allowProjection: Component !== Fragment$1 });
};
// node_modules/framer-motion/dist/es/motion/features/animation/index.mjs
var AnimationFeature = class extends Feature {
	/**
	* We dynamically generate the AnimationState manager as it contains a reference
	* to the underlying animation library. We only want to load that if we load this,
	* so people can optionally code split it out using the `m` component.
	*/
	constructor(node) {
		super(node);
		node.animationState || (node.animationState = createAnimationState(node));
	}
	updateAnimationControlsSubscription() {
		const { animate } = this.node.getProps();
		if (isAnimationControls(animate)) this.unmountControls = animate.subscribe(this.node);
	}
	/**
	* Subscribe any provided AnimationControls to the component's VisualElement
	*/
	mount() {
		this.updateAnimationControlsSubscription();
	}
	update() {
		const { animate } = this.node.getProps();
		const { animate: prevAnimate } = this.node.prevProps || {};
		if (animate !== prevAnimate) this.updateAnimationControlsSubscription();
	}
	unmount() {
		this.node.animationState.reset();
		this.unmountControls?.();
	}
};
// node_modules/framer-motion/dist/es/motion/features/animation/exit.mjs
var id = 0;
var ExitAnimationFeature = class extends Feature {
	constructor() {
		super(...arguments);
		this.id = id++;
		this.isExitComplete = false;
	}
	update() {
		if (!this.node.presenceContext) return;
		const { isPresent, onExitComplete } = this.node.presenceContext;
		const { isPresent: prevIsPresent } = this.node.prevPresenceContext || {};
		if (!this.node.animationState || isPresent === prevIsPresent) return;
		if (isPresent && prevIsPresent === false) {
			/**
			* When re-entering, if the exit animation already completed
			* (element is at rest), reset to initial values so the enter
			* animation replays from the correct position.
			*/
			if (this.isExitComplete) {
				const { initial, custom } = this.node.getProps();
				if (typeof initial === "string" || typeof initial === "object" && initial !== null && !Array.isArray(initial)) {
					const resolved = resolveVariant(this.node, initial, custom);
					if (resolved) {
						const { transition, transitionEnd, ...target } = resolved;
						for (const key in target) this.node.getValue(key)?.jump(target[key]);
					}
				}
				this.node.animationState.reset();
				this.node.animationState.animateChanges();
			} else this.node.animationState.setActive("exit", false);
			this.isExitComplete = false;
			return;
		}
		const exitAnimation = this.node.animationState.setActive("exit", !isPresent);
		if (onExitComplete && !isPresent) exitAnimation.then(() => {
			this.isExitComplete = true;
			onExitComplete(this.id);
		});
	}
	mount() {
		const { register, onExitComplete } = this.node.presenceContext || {};
		if (onExitComplete) onExitComplete(this.id);
		if (register) this.unmount = register(this.id);
	}
	unmount() {}
};
// node_modules/framer-motion/dist/es/motion/features/animations.mjs
var animations = {
	animation: { Feature: AnimationFeature },
	exit: { Feature: ExitAnimationFeature }
};
// node_modules/framer-motion/dist/es/events/event-info.mjs
function extractEventInfo(event) {
	return { point: {
		x: event.pageX,
		y: event.pageY
	} };
}
var addPointerInfo = (handler) => (event) => isPrimaryPointer(event) && handler(event, extractEventInfo(event));
// node_modules/framer-motion/dist/es/events/add-pointer-event.mjs
function addPointerEvent(target, eventName, handler, options) {
	return addDomEvent(target, eventName, addPointerInfo(handler), options);
}
// node_modules/framer-motion/dist/es/utils/get-context-window.mjs
var getContextWindow = ({ current }) => {
	return current ? current.ownerDocument.defaultView : null;
};
// node_modules/framer-motion/dist/es/utils/distance.mjs
var distance = (a, b) => Math.abs(a - b);
function distance2D(a, b) {
	const xDelta = distance(a.x, b.x);
	const yDelta = distance(a.y, b.y);
	return Math.sqrt(xDelta ** 2 + yDelta ** 2);
}
// node_modules/framer-motion/dist/es/gestures/pan/PanSession.mjs
var overflowStyles = /*#__PURE__*/ new Set(["auto", "scroll"]);
/**
* @internal
*/
var PanSession = class {
	constructor(event, handlers, { transformPagePoint, contextWindow = window, dragSnapToOrigin = false, distanceThreshold = 3, element } = {}) {
		/**
		* @internal
		*/
		this.startEvent = null;
		/**
		* @internal
		*/
		this.lastMoveEvent = null;
		/**
		* @internal
		*/
		this.lastMoveEventInfo = null;
		/**
		* Raw (untransformed) event info, re-transformed each frame
		* so transformPagePoint sees the current parent matrix.
		* @internal
		*/
		this.lastRawMoveEventInfo = null;
		/**
		* @internal
		*/
		this.handlers = {};
		/**
		* @internal
		*/
		this.contextWindow = window;
		/**
		* Scroll positions of scrollable ancestors and window.
		* @internal
		*/
		this.scrollPositions = /* @__PURE__ */ new Map();
		/**
		* Cleanup function for scroll listeners.
		* @internal
		*/
		this.removeScrollListeners = null;
		this.onElementScroll = (event) => {
			this.handleScroll(event.target);
		};
		this.onWindowScroll = () => {
			this.handleScroll(window);
		};
		this.updatePoint = () => {
			if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			if (this.lastRawMoveEventInfo) this.lastMoveEventInfo = transformPoint(this.lastRawMoveEventInfo, this.transformPagePoint);
			const info = getPanInfo(this.lastMoveEventInfo, this.history);
			const isPanStarted = this.startEvent !== null;
			const isDistancePastThreshold = distance2D(info.offset, {
				x: 0,
				y: 0
			}) >= this.distanceThreshold;
			if (!isPanStarted && !isDistancePastThreshold) return;
			const { point } = info;
			const { timestamp } = frameData;
			this.history.push({
				...point,
				timestamp
			});
			const { onStart, onMove } = this.handlers;
			if (!isPanStarted) {
				onStart && onStart(this.lastMoveEvent, info);
				this.startEvent = this.lastMoveEvent;
			}
			onMove && onMove(this.lastMoveEvent, info);
		};
		this.handlePointerMove = (event, info) => {
			this.lastMoveEvent = event;
			this.lastRawMoveEventInfo = info;
			this.lastMoveEventInfo = transformPoint(info, this.transformPagePoint);
			frame.update(this.updatePoint, true);
		};
		this.handlePointerUp = (event, info) => {
			this.end();
			const { onEnd, onSessionEnd, resumeAnimation } = this.handlers;
			if (this.dragSnapToOrigin || !this.startEvent) resumeAnimation && resumeAnimation();
			if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			const panInfo = getPanInfo(event.type === "pointercancel" ? this.lastMoveEventInfo : transformPoint(info, this.transformPagePoint), this.history);
			if (this.startEvent && onEnd) onEnd(event, panInfo);
			onSessionEnd && onSessionEnd(event, panInfo);
		};
		if (!isPrimaryPointer(event)) return;
		this.dragSnapToOrigin = dragSnapToOrigin;
		this.handlers = handlers;
		this.transformPagePoint = transformPagePoint;
		this.distanceThreshold = distanceThreshold;
		this.contextWindow = contextWindow || window;
		const initialInfo = transformPoint(extractEventInfo(event), this.transformPagePoint);
		const { point } = initialInfo;
		const { timestamp } = frameData;
		this.history = [{
			...point,
			timestamp
		}];
		const { onSessionStart } = handlers;
		onSessionStart && onSessionStart(event, getPanInfo(initialInfo, this.history));
		this.removeListeners = pipe(addPointerEvent(this.contextWindow, "pointermove", this.handlePointerMove), addPointerEvent(this.contextWindow, "pointerup", this.handlePointerUp), addPointerEvent(this.contextWindow, "pointercancel", this.handlePointerUp));
		if (element) this.startScrollTracking(element);
	}
	/**
	* Start tracking scroll on ancestors and window.
	*/
	startScrollTracking(element) {
		let current = element.parentElement;
		while (current) {
			const style = getComputedStyle(current);
			if (overflowStyles.has(style.overflowX) || overflowStyles.has(style.overflowY)) this.scrollPositions.set(current, {
				x: current.scrollLeft,
				y: current.scrollTop
			});
			current = current.parentElement;
		}
		this.scrollPositions.set(window, {
			x: window.scrollX,
			y: window.scrollY
		});
		window.addEventListener("scroll", this.onElementScroll, { capture: true });
		window.addEventListener("scroll", this.onWindowScroll);
		this.removeScrollListeners = () => {
			window.removeEventListener("scroll", this.onElementScroll, { capture: true });
			window.removeEventListener("scroll", this.onWindowScroll);
		};
	}
	/**
	* Handle scroll compensation during drag.
	*
	* For element scroll: adjusts history origin since pageX/pageY doesn't change.
	* For window scroll: adjusts lastMoveEventInfo since pageX/pageY would change.
	*/
	handleScroll(target) {
		const initial = this.scrollPositions.get(target);
		if (!initial) return;
		const isWindow = target === window;
		const current = isWindow ? {
			x: window.scrollX,
			y: window.scrollY
		} : {
			x: target.scrollLeft,
			y: target.scrollTop
		};
		const delta = {
			x: current.x - initial.x,
			y: current.y - initial.y
		};
		if (delta.x === 0 && delta.y === 0) return;
		if (isWindow) {
			if (this.lastMoveEventInfo) {
				this.lastMoveEventInfo.point.x += delta.x;
				this.lastMoveEventInfo.point.y += delta.y;
			}
		} else if (this.history.length > 0) {
			this.history[0].x -= delta.x;
			this.history[0].y -= delta.y;
		}
		this.scrollPositions.set(target, current);
		frame.update(this.updatePoint, true);
	}
	updateHandlers(handlers) {
		this.handlers = handlers;
	}
	end() {
		this.removeListeners && this.removeListeners();
		this.removeScrollListeners && this.removeScrollListeners();
		this.scrollPositions.clear();
		cancelFrame(this.updatePoint);
	}
};
function transformPoint(info, transformPagePoint) {
	return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
}
function subtractPoint(a, b) {
	return {
		x: a.x - b.x,
		y: a.y - b.y
	};
}
function getPanInfo({ point }, history) {
	return {
		point,
		delta: subtractPoint(point, lastDevicePoint(history)),
		offset: subtractPoint(point, startDevicePoint(history)),
		velocity: getVelocity(history, .1)
	};
}
function startDevicePoint(history) {
	return history[0];
}
function lastDevicePoint(history) {
	return history[history.length - 1];
}
function getVelocity(history, timeDelta) {
	if (history.length < 2) return {
		x: 0,
		y: 0
	};
	let i = history.length - 1;
	let timestampedPoint = null;
	const lastPoint = lastDevicePoint(history);
	while (i >= 0) {
		timestampedPoint = history[i];
		if (lastPoint.timestamp - timestampedPoint.timestamp > /* @__PURE__ */ secondsToMilliseconds(timeDelta)) break;
		i--;
	}
	if (!timestampedPoint) return {
		x: 0,
		y: 0
	};
	/**
	* If the selected point is the pointer-down origin (history[0]),
	* there are better movement points available, and the time gap
	* is suspiciously large (>2x timeDelta), use the next point instead.
	* This prevents stale pointer-down points from diluting velocity
	* in hold-then-flick gestures.
	*/
	if (timestampedPoint === history[0] && history.length > 2 && lastPoint.timestamp - timestampedPoint.timestamp > /* @__PURE__ */ secondsToMilliseconds(timeDelta) * 2) timestampedPoint = history[1];
	const time = /* @__PURE__ */ millisecondsToSeconds(lastPoint.timestamp - timestampedPoint.timestamp);
	if (time === 0) return {
		x: 0,
		y: 0
	};
	const currentVelocity = {
		x: (lastPoint.x - timestampedPoint.x) / time,
		y: (lastPoint.y - timestampedPoint.y) / time
	};
	if (currentVelocity.x === Infinity) currentVelocity.x = 0;
	if (currentVelocity.y === Infinity) currentVelocity.y = 0;
	return currentVelocity;
}
// node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.mjs
/**
* Apply constraints to a point. These constraints are both physical along an
* axis, and an elastic factor that determines how much to constrain the point
* by if it does lie outside the defined parameters.
*/
function applyConstraints(point, { min, max }, elastic) {
	if (min !== void 0 && point < min) point = elastic ? mixNumber$1(min, point, elastic.min) : Math.max(point, min);
	else if (max !== void 0 && point > max) point = elastic ? mixNumber$1(max, point, elastic.max) : Math.min(point, max);
	return point;
}
/**
* Calculate constraints in terms of the viewport when defined relatively to the
* measured axis. This is measured from the nearest edge, so a max constraint of 200
* on an axis with a max value of 300 would return a constraint of 500 - axis length
*/
function calcRelativeAxisConstraints(axis, min, max) {
	return {
		min: min !== void 0 ? axis.min + min : void 0,
		max: max !== void 0 ? axis.max + max - (axis.max - axis.min) : void 0
	};
}
/**
* Calculate constraints in terms of the viewport when
* defined relatively to the measured bounding box.
*/
function calcRelativeConstraints(layoutBox, { top, left, bottom, right }) {
	return {
		x: calcRelativeAxisConstraints(layoutBox.x, left, right),
		y: calcRelativeAxisConstraints(layoutBox.y, top, bottom)
	};
}
/**
* Calculate viewport constraints when defined as another viewport-relative axis
*/
function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
	let min = constraintsAxis.min - layoutAxis.min;
	let max = constraintsAxis.max - layoutAxis.max;
	if (constraintsAxis.max - constraintsAxis.min < layoutAxis.max - layoutAxis.min) [min, max] = [max, min];
	return {
		min,
		max
	};
}
/**
* Calculate viewport constraints when defined as another viewport-relative box
*/
function calcViewportConstraints(layoutBox, constraintsBox) {
	return {
		x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
		y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y)
	};
}
/**
* Calculate a transform origin relative to the source axis, between 0-1, that results
* in an asthetically pleasing scale/transform needed to project from source to target.
*/
function calcOrigin(source, target) {
	let origin = .5;
	const sourceLength = calcLength(source);
	const targetLength = calcLength(target);
	if (targetLength > sourceLength) origin = /* @__PURE__ */ progress(target.min, target.max - sourceLength, source.min);
	else if (sourceLength > targetLength) origin = /* @__PURE__ */ progress(source.min, source.max - targetLength, target.min);
	return clamp(0, 1, origin);
}
/**
* Rebase the calculated viewport constraints relative to the layout.min point.
*/
function rebaseAxisConstraints(layout, constraints) {
	const relativeConstraints = {};
	if (constraints.min !== void 0) relativeConstraints.min = constraints.min - layout.min;
	if (constraints.max !== void 0) relativeConstraints.max = constraints.max - layout.min;
	return relativeConstraints;
}
var defaultElastic = .35;
/**
* Accepts a dragElastic prop and returns resolved elastic values for each axis.
*/
function resolveDragElastic(dragElastic = defaultElastic) {
	if (dragElastic === false) dragElastic = 0;
	else if (dragElastic === true) dragElastic = defaultElastic;
	return {
		x: resolveAxisElastic(dragElastic, "left", "right"),
		y: resolveAxisElastic(dragElastic, "top", "bottom")
	};
}
function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
	return {
		min: resolvePointElastic(dragElastic, minLabel),
		max: resolvePointElastic(dragElastic, maxLabel)
	};
}
function resolvePointElastic(dragElastic, label) {
	return typeof dragElastic === "number" ? dragElastic : dragElastic[label] || 0;
}
// node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs
var elementDragControls = /* @__PURE__ */ new WeakMap();
var VisualElementDragControls = class {
	constructor(visualElement) {
		this.openDragLock = null;
		this.isDragging = false;
		this.currentDirection = null;
		this.originPoint = {
			x: 0,
			y: 0
		};
		/**
		* The permitted boundaries of travel, in pixels.
		*/
		this.constraints = false;
		this.hasMutatedConstraints = false;
		/**
		* The per-axis resolved elastic values.
		*/
		this.elastic = createBox();
		/**
		* The latest pointer event. Used as fallback when the `cancel` and `stop` functions are called without arguments.
		*/
		this.latestPointerEvent = null;
		/**
		* The latest pan info. Used as fallback when the `cancel` and `stop` functions are called without arguments.
		*/
		this.latestPanInfo = null;
		this.visualElement = visualElement;
	}
	start(originEvent, { snapToCursor = false, distanceThreshold } = {}) {
		/**
		* Don't start dragging if this component is exiting
		*/
		const { presenceContext } = this.visualElement;
		if (presenceContext && presenceContext.isPresent === false) return;
		const onSessionStart = (event) => {
			if (snapToCursor) this.snapToCursor(extractEventInfo(event).point);
			this.stopAnimation();
		};
		const onStart = (event, info) => {
			const { drag, dragPropagation, onDragStart } = this.getProps();
			if (drag && !dragPropagation) {
				if (this.openDragLock) this.openDragLock();
				this.openDragLock = setDragLock(drag);
				if (!this.openDragLock) return;
			}
			this.latestPointerEvent = event;
			this.latestPanInfo = info;
			this.isDragging = true;
			this.currentDirection = null;
			this.resolveConstraints();
			if (this.visualElement.projection) {
				this.visualElement.projection.isAnimationBlocked = true;
				this.visualElement.projection.target = void 0;
			}
			/**
			* Record gesture origin and pointer offset
			*/
			eachAxis((axis) => {
				let current = this.getAxisMotionValue(axis).get() || 0;
				/**
				* If the MotionValue is a percentage value convert to px
				*/
				if (percent.test(current)) {
					const { projection } = this.visualElement;
					if (projection && projection.layout) {
						const measuredAxis = projection.layout.layoutBox[axis];
						if (measuredAxis) current = calcLength(measuredAxis) * (parseFloat(current) / 100);
					}
				}
				this.originPoint[axis] = current;
			});
			if (onDragStart) frame.update(() => onDragStart(event, info), false, true);
			addValueToWillChange(this.visualElement, "transform");
			const { animationState } = this.visualElement;
			animationState && animationState.setActive("whileDrag", true);
		};
		const onMove = (event, info) => {
			this.latestPointerEvent = event;
			this.latestPanInfo = info;
			const { dragPropagation, dragDirectionLock, onDirectionLock, onDrag } = this.getProps();
			if (!dragPropagation && !this.openDragLock) return;
			const { offset } = info;
			if (dragDirectionLock && this.currentDirection === null) {
				this.currentDirection = getCurrentDirection(offset);
				if (this.currentDirection !== null) onDirectionLock && onDirectionLock(this.currentDirection);
				return;
			}
			this.updateAxis("x", info.point, offset);
			this.updateAxis("y", info.point, offset);
			/**
			* Ideally we would leave the renderer to fire naturally at the end of
			* this frame but if the element is about to change layout as the result
			* of a re-render we want to ensure the browser can read the latest
			* bounding box to ensure the pointer and element don't fall out of sync.
			*/
			this.visualElement.render();
			/**
			* This must fire after the render call as it might trigger a state
			* change which itself might trigger a layout update.
			*/
			if (onDrag) frame.update(() => onDrag(event, info), false, true);
		};
		const onSessionEnd = (event, info) => {
			this.latestPointerEvent = event;
			this.latestPanInfo = info;
			this.stop(event, info);
			this.latestPointerEvent = null;
			this.latestPanInfo = null;
		};
		const resumeAnimation = () => {
			const { dragSnapToOrigin: snap } = this.getProps();
			if (snap || this.constraints) this.startAnimation({
				x: 0,
				y: 0
			});
		};
		const { dragSnapToOrigin } = this.getProps();
		this.panSession = new PanSession(originEvent, {
			onSessionStart,
			onStart,
			onMove,
			onSessionEnd,
			resumeAnimation
		}, {
			transformPagePoint: this.visualElement.getTransformPagePoint(),
			dragSnapToOrigin,
			distanceThreshold,
			contextWindow: getContextWindow(this.visualElement),
			element: this.visualElement.current
		});
	}
	/**
	* @internal
	*/
	stop(event, panInfo) {
		const finalEvent = event || this.latestPointerEvent;
		const finalPanInfo = panInfo || this.latestPanInfo;
		const isDragging = this.isDragging;
		this.cancel();
		if (!isDragging || !finalPanInfo || !finalEvent) return;
		const { velocity } = finalPanInfo;
		this.startAnimation(velocity);
		const { onDragEnd } = this.getProps();
		if (onDragEnd) frame.postRender(() => onDragEnd(finalEvent, finalPanInfo));
	}
	/**
	* @internal
	*/
	cancel() {
		this.isDragging = false;
		const { projection, animationState } = this.visualElement;
		if (projection) projection.isAnimationBlocked = false;
		this.endPanSession();
		const { dragPropagation } = this.getProps();
		if (!dragPropagation && this.openDragLock) {
			this.openDragLock();
			this.openDragLock = null;
		}
		animationState && animationState.setActive("whileDrag", false);
	}
	/**
	* Clean up the pan session without modifying other drag state.
	* This is used during unmount to ensure event listeners are removed
	* without affecting projection animations or drag locks.
	* @internal
	*/
	endPanSession() {
		this.panSession && this.panSession.end();
		this.panSession = void 0;
	}
	updateAxis(axis, _point, offset) {
		const { drag } = this.getProps();
		if (!offset || !shouldDrag(axis, drag, this.currentDirection)) return;
		const axisValue = this.getAxisMotionValue(axis);
		let next = this.originPoint[axis] + offset[axis];
		if (this.constraints && this.constraints[axis]) next = applyConstraints(next, this.constraints[axis], this.elastic[axis]);
		axisValue.set(next);
	}
	resolveConstraints() {
		const { dragConstraints, dragElastic } = this.getProps();
		const layout = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(false) : this.visualElement.projection?.layout;
		const prevConstraints = this.constraints;
		if (dragConstraints && isRefObject(dragConstraints)) {
			if (!this.constraints) this.constraints = this.resolveRefConstraints();
		} else if (dragConstraints && layout) this.constraints = calcRelativeConstraints(layout.layoutBox, dragConstraints);
		else this.constraints = false;
		this.elastic = resolveDragElastic(dragElastic);
		/**
		* If we're outputting to external MotionValues, we want to rebase the measured constraints
		* from viewport-relative to component-relative. This only applies to relative (non-ref)
		* constraints, as ref-based constraints from calcViewportConstraints are already in the
		* correct coordinate space for the motion value transform offset.
		*/
		if (prevConstraints !== this.constraints && !isRefObject(dragConstraints) && layout && this.constraints && !this.hasMutatedConstraints) eachAxis((axis) => {
			if (this.constraints !== false && this.getAxisMotionValue(axis)) this.constraints[axis] = rebaseAxisConstraints(layout.layoutBox[axis], this.constraints[axis]);
		});
	}
	resolveRefConstraints() {
		const { dragConstraints: constraints, onMeasureDragConstraints } = this.getProps();
		if (!constraints || !isRefObject(constraints)) return false;
		const constraintsElement = constraints.current;
		invariant(constraintsElement !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
		const { projection } = this.visualElement;
		if (!projection || !projection.layout) return false;
		/**
		* Refresh the root scroll offset so the constraint's viewport box
		* translates to correct page coordinates. The scroll captured at
		* drag mount can be stale if the document was scrolled afterwards —
		* e.g. via the browser restoring scroll on refresh, or an ancestor
		* layout effect running after this element's mount (#2829).
		*
		* Clear the cached scroll first so `updateScroll` bypasses its
		* per-animationId cache and re-reads the live value.
		*/
		if (projection.root) {
			projection.root.scroll = void 0;
			projection.root.updateScroll();
		}
		const constraintsBox = measurePageBox(constraintsElement, projection.root, this.visualElement.getTransformPagePoint());
		let measuredConstraints = calcViewportConstraints(projection.layout.layoutBox, constraintsBox);
		/**
		* If there's an onMeasureDragConstraints listener we call it and
		* if different constraints are returned, set constraints to that
		*/
		if (onMeasureDragConstraints) {
			const userConstraints = onMeasureDragConstraints(convertBoxToBoundingBox(measuredConstraints));
			this.hasMutatedConstraints = !!userConstraints;
			if (userConstraints) measuredConstraints = convertBoundingBoxToBox(userConstraints);
		}
		return measuredConstraints;
	}
	startAnimation(velocity) {
		const { drag, dragMomentum, dragElastic, dragTransition, dragSnapToOrigin, onDragTransitionEnd } = this.getProps();
		const constraints = this.constraints || {};
		const momentumAnimations = eachAxis((axis) => {
			if (!shouldDrag(axis, drag, this.currentDirection)) return;
			let transition = constraints && constraints[axis] || {};
			if (dragSnapToOrigin === true || dragSnapToOrigin === axis) transition = {
				min: 0,
				max: 0
			};
			/**
			* Overdamp the boundary spring if `dragElastic` is disabled. There's still a frame
			* of spring animations so we should look into adding a disable spring option to `inertia`.
			* We could do something here where we affect the `bounceStiffness` and `bounceDamping`
			* using the value of `dragElastic`.
			*/
			const bounceStiffness = dragElastic ? 200 : 1e6;
			const bounceDamping = dragElastic ? 40 : 1e7;
			const inertia = {
				type: "inertia",
				velocity: dragMomentum ? velocity[axis] : 0,
				bounceStiffness,
				bounceDamping,
				timeConstant: 750,
				restDelta: 1,
				restSpeed: 10,
				...dragTransition,
				...transition
			};
			return this.startAxisValueAnimation(axis, inertia);
		});
		return Promise.all(momentumAnimations).then(onDragTransitionEnd);
	}
	startAxisValueAnimation(axis, transition) {
		const axisValue = this.getAxisMotionValue(axis);
		addValueToWillChange(this.visualElement, axis);
		return axisValue.start(animateMotionValue(axis, axisValue, 0, transition, this.visualElement, false));
	}
	stopAnimation() {
		eachAxis((axis) => this.getAxisMotionValue(axis).stop());
	}
	/**
	* Drag works differently depending on which props are provided.
	*
	* - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
	* - Otherwise, we apply the delta to the x/y motion values.
	*/
	getAxisMotionValue(axis) {
		const dragKey = `_drag${axis.toUpperCase()}`;
		const externalMotionValue = this.visualElement.getProps()[dragKey];
		return externalMotionValue ? externalMotionValue : this.visualElement.getValue(axis, this.visualElement.latestValues[axis] ?? 0);
	}
	snapToCursor(point) {
		eachAxis((axis) => {
			const { drag } = this.getProps();
			if (!shouldDrag(axis, drag, this.currentDirection)) return;
			const { projection } = this.visualElement;
			const axisValue = this.getAxisMotionValue(axis);
			if (projection && projection.layout) {
				const { min, max } = projection.layout.layoutBox[axis];
				/**
				* The layout measurement includes the current transform value,
				* so we need to add it back to get the correct snap position.
				* This fixes an issue where elements with initial coordinates
				* would snap to the wrong position on the first drag.
				*/
				const current = axisValue.get() || 0;
				axisValue.set(point[axis] - mixNumber$1(min, max, .5) + current);
			}
		});
	}
	/**
	* When the viewport resizes we want to check if the measured constraints
	* have changed and, if so, reposition the element within those new constraints
	* relative to where it was before the resize.
	*/
	scalePositionWithinConstraints() {
		if (!this.visualElement.current) return;
		const { drag, dragConstraints } = this.getProps();
		const { projection } = this.visualElement;
		if (!isRefObject(dragConstraints) || !projection || !this.constraints) return;
		/**
		* Stop current animations as there can be visual glitching if we try to do
		* this mid-animation
		*/
		this.stopAnimation();
		/**
		* Record the relative position of the dragged element relative to the
		* constraints box and save as a progress value.
		*/
		const boxProgress = {
			x: 0,
			y: 0
		};
		eachAxis((axis) => {
			const axisValue = this.getAxisMotionValue(axis);
			if (axisValue && this.constraints !== false) {
				const latest = axisValue.get();
				boxProgress[axis] = calcOrigin({
					min: latest,
					max: latest
				}, this.constraints[axis]);
			}
		});
		/**
		* Update the layout of this element and resolve the latest drag constraints
		*/
		const { transformTemplate } = this.visualElement.getProps();
		this.visualElement.current.style.transform = transformTemplate ? transformTemplate({}, "") : "none";
		projection.root && projection.root.updateScroll();
		projection.updateLayout();
		/**
		* Reset constraints so resolveConstraints() will recalculate them
		* with the freshly measured layout rather than returning the cached value.
		*/
		this.constraints = false;
		this.resolveConstraints();
		/**
		* For each axis, calculate the current progress of the layout axis
		* within the new constraints.
		*/
		eachAxis((axis) => {
			if (!shouldDrag(axis, drag, null)) return;
			/**
			* Calculate a new transform based on the previous box progress
			*/
			const axisValue = this.getAxisMotionValue(axis);
			const { min, max } = this.constraints[axis];
			axisValue.set(mixNumber$1(min, max, boxProgress[axis]));
		});
		/**
		* Flush the updated transform to the DOM synchronously to prevent
		* a visual flash at the element's CSS layout position (0,0) when
		* the transform was stripped for measurement.
		*/
		this.visualElement.render();
	}
	addListeners() {
		if (!this.visualElement.current) return;
		elementDragControls.set(this.visualElement, this);
		const element = this.visualElement.current;
		/**
		* Attach a pointerdown event listener on this DOM element to initiate drag tracking.
		*/
		const stopPointerListener = addPointerEvent(element, "pointerdown", (event) => {
			const { drag, dragListener = true } = this.getProps();
			const target = event.target;
			/**
			* Only block drag if clicking on a text input child element
			* (input, textarea, select, contenteditable) where users might
			* want to select text or interact with the control.
			*
			* Buttons and links don't block drag since they don't have
			* click-and-move actions of their own.
			*/
			const isClickingTextInputChild = target !== element && isElementTextInput(target);
			if (drag && dragListener && !isClickingTextInputChild) this.start(event);
		});
		/**
		* If using ref-based constraints, observe both the draggable element
		* and the constraint container for size changes via ResizeObserver.
		* Setup is deferred because dragConstraints.current is null when
		* addListeners first runs (React hasn't committed the ref yet).
		*/
		let stopResizeObservers;
		const measureDragConstraints = () => {
			const { dragConstraints } = this.getProps();
			if (isRefObject(dragConstraints) && dragConstraints.current) {
				this.constraints = this.resolveRefConstraints();
				if (!stopResizeObservers) stopResizeObservers = startResizeObservers(element, dragConstraints.current, () => this.scalePositionWithinConstraints());
			}
		};
		const { projection } = this.visualElement;
		const stopMeasureLayoutListener = projection.addEventListener("measure", measureDragConstraints);
		if (projection && !projection.layout) {
			projection.root && projection.root.updateScroll();
			projection.updateLayout();
		}
		frame.read(measureDragConstraints);
		/**
		* Attach a window resize listener to scale the draggable target within its defined
		* constraints as the window resizes.
		*/
		const stopResizeListener = addDomEvent(window, "resize", () => this.scalePositionWithinConstraints());
		/**
		* If the element's layout changes, calculate the delta and apply that to
		* the drag gesture's origin point.
		*/
		const stopLayoutUpdateListener = projection.addEventListener("didUpdate", (({ delta, hasLayoutChanged }) => {
			if (this.isDragging && hasLayoutChanged) {
				eachAxis((axis) => {
					const motionValue = this.getAxisMotionValue(axis);
					if (!motionValue) return;
					this.originPoint[axis] += delta[axis].translate;
					motionValue.set(motionValue.get() + delta[axis].translate);
				});
				this.visualElement.render();
			}
		}));
		return () => {
			stopResizeListener();
			stopPointerListener();
			stopMeasureLayoutListener();
			stopLayoutUpdateListener && stopLayoutUpdateListener();
			stopResizeObservers && stopResizeObservers();
		};
	}
	getProps() {
		const props = this.visualElement.getProps();
		const { drag = false, dragDirectionLock = false, dragPropagation = false, dragConstraints = false, dragElastic = defaultElastic, dragMomentum = true } = props;
		return {
			...props,
			drag,
			dragDirectionLock,
			dragPropagation,
			dragConstraints,
			dragElastic,
			dragMomentum
		};
	}
};
function skipFirstCall(callback) {
	let isFirst = true;
	return () => {
		if (isFirst) {
			isFirst = false;
			return;
		}
		callback();
	};
}
function startResizeObservers(element, constraintsElement, onResize) {
	const stopElement = resize(element, skipFirstCall(onResize));
	const stopContainer = resize(constraintsElement, skipFirstCall(onResize));
	return () => {
		stopElement();
		stopContainer();
	};
}
function shouldDrag(direction, drag, currentDirection) {
	return (drag === true || drag === direction) && (currentDirection === null || currentDirection === direction);
}
/**
* Based on an x/y offset determine the current drag direction. If both axis' offsets are lower
* than the provided threshold, return `null`.
*
* @param offset - The x/y offset from origin.
* @param lockThreshold - (Optional) - the minimum absolute offset before we can determine a drag direction.
*/
function getCurrentDirection(offset, lockThreshold = 10) {
	let direction = null;
	if (Math.abs(offset.y) > lockThreshold) direction = "y";
	else if (Math.abs(offset.x) > lockThreshold) direction = "x";
	return direction;
}
// node_modules/framer-motion/dist/es/gestures/drag/index.mjs
var DragGesture = class extends Feature {
	constructor(node) {
		super(node);
		this.removeGroupControls = noop;
		this.removeListeners = noop;
		this.controls = new VisualElementDragControls(node);
	}
	mount() {
		const { dragControls } = this.node.getProps();
		if (dragControls) this.removeGroupControls = dragControls.subscribe(this.controls);
		this.removeListeners = this.controls.addListeners() || noop;
	}
	update() {
		const { dragControls } = this.node.getProps();
		const { dragControls: prevDragControls } = this.node.prevProps || {};
		if (dragControls !== prevDragControls) {
			this.removeGroupControls();
			if (dragControls) this.removeGroupControls = dragControls.subscribe(this.controls);
		}
	}
	unmount() {
		this.removeGroupControls();
		this.removeListeners();
		/**
		* In React 19, during list reorder reconciliation, components may
		* briefly unmount and remount while the drag is still active. If we're
		* actively dragging, we should NOT end the pan session - it will
		* continue tracking pointer events via its window-level listeners.
		*
		* The pan session will be properly cleaned up when:
		* 1. The drag ends naturally (pointerup/pointercancel)
		* 2. The component is truly removed from the DOM
		*/
		if (!this.controls.isDragging) this.controls.endPanSession();
	}
};
// node_modules/framer-motion/dist/es/gestures/pan/index.mjs
var asyncHandler = (handler) => (event, info) => {
	if (handler) frame.update(() => handler(event, info), false, true);
};
var PanGesture = class extends Feature {
	constructor() {
		super(...arguments);
		this.removePointerDownListener = noop;
	}
	onPointerDown(pointerDownEvent) {
		this.session = new PanSession(pointerDownEvent, this.createPanHandlers(), {
			transformPagePoint: this.node.getTransformPagePoint(),
			contextWindow: getContextWindow(this.node)
		});
	}
	createPanHandlers() {
		const { onPanSessionStart, onPanStart, onPan, onPanEnd } = this.node.getProps();
		return {
			onSessionStart: asyncHandler(onPanSessionStart),
			onStart: asyncHandler(onPanStart),
			onMove: asyncHandler(onPan),
			onEnd: (event, info) => {
				delete this.session;
				if (onPanEnd) frame.postRender(() => onPanEnd(event, info));
			}
		};
	}
	mount() {
		this.removePointerDownListener = addPointerEvent(this.node.current, "pointerdown", (event) => this.onPointerDown(event));
	}
	update() {
		this.session && this.session.updateHandlers(this.createPanHandlers());
	}
	unmount() {
		this.removePointerDownListener();
		this.session && this.session.end();
	}
};
// node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs
/**
* Track whether we've taken any snapshots yet. If not,
* we can safely skip notification of didUpdate.
*
* Difficult to capture in a test but to prevent flickering
* we must set this to true either on update or unmount.
* Running `next-env/layout-id` in Safari will show this behaviour if broken.
*/
var hasTakenAnySnapshot = false;
var MeasureLayoutWithContext = class extends Component {
	/**
	* This only mounts projection nodes for components that
	* need measuring, we might want to do it for all components
	* in order to incorporate transforms
	*/
	componentDidMount() {
		const { visualElement, layoutGroup, switchLayoutGroup, layoutId } = this.props;
		const { projection } = visualElement;
		if (projection) {
			if (layoutGroup.group) layoutGroup.group.add(projection);
			if (switchLayoutGroup && switchLayoutGroup.register && layoutId) switchLayoutGroup.register(projection);
			if (hasTakenAnySnapshot) projection.root.didUpdate();
			projection.addEventListener("animationComplete", () => {
				this.safeToRemove();
			});
			projection.setOptions({
				...projection.options,
				layoutDependency: this.props.layoutDependency,
				onExitComplete: () => this.safeToRemove()
			});
		}
		globalProjectionState.hasEverUpdated = true;
	}
	getSnapshotBeforeUpdate(prevProps) {
		const { layoutDependency, visualElement, drag, isPresent } = this.props;
		const { projection } = visualElement;
		if (!projection) return null;
		/**
		* TODO: We use this data in relegate to determine whether to
		* promote a previous element. There's no guarantee its presence data
		* will have updated by this point - if a bug like this arises it will
		* have to be that we markForRelegation and then find a new lead some other way,
		* perhaps in didUpdate
		*/
		projection.isPresent = isPresent;
		if (prevProps.layoutDependency !== layoutDependency) projection.setOptions({
			...projection.options,
			layoutDependency
		});
		hasTakenAnySnapshot = true;
		if (drag || prevProps.layoutDependency !== layoutDependency || layoutDependency === void 0 || prevProps.isPresent !== isPresent) projection.willUpdate();
		else this.safeToRemove();
		if (prevProps.isPresent !== isPresent) {
			if (isPresent) projection.promote();
			else if (!projection.relegate())
 /**
			* If there's another stack member taking over from this one,
			* it's in charge of the exit animation and therefore should
			* be in charge of the safe to remove. Otherwise we call it here.
			*/
			frame.postRender(() => {
				const stack = projection.getStack();
				if (!stack || !stack.members.length) this.safeToRemove();
			});
		}
		return null;
	}
	componentDidUpdate() {
		const { visualElement, layoutAnchor } = this.props;
		const { projection } = visualElement;
		if (projection) {
			projection.options.layoutAnchor = layoutAnchor;
			projection.root.didUpdate();
			microtask.postRender(() => {
				if (!projection.currentAnimation && projection.isLead()) this.safeToRemove();
			});
		}
	}
	componentWillUnmount() {
		const { visualElement, layoutGroup, switchLayoutGroup: promoteContext } = this.props;
		const { projection } = visualElement;
		hasTakenAnySnapshot = true;
		if (projection) {
			projection.scheduleCheckAfterUnmount();
			if (layoutGroup && layoutGroup.group) layoutGroup.group.remove(projection);
			if (promoteContext && promoteContext.deregister) promoteContext.deregister(projection);
		}
	}
	safeToRemove() {
		const { safeToRemove } = this.props;
		safeToRemove && safeToRemove();
	}
	render() {
		return null;
	}
};
function MeasureLayout(props) {
	const [isPresent, safeToRemove] = usePresence();
	const layoutGroup = useContext(LayoutGroupContext);
	return jsx(MeasureLayoutWithContext, {
		...props,
		layoutGroup,
		switchLayoutGroup: useContext(SwitchLayoutGroupContext),
		isPresent,
		safeToRemove
	});
}
// node_modules/framer-motion/dist/es/motion/features/drag.mjs
var drag = {
	pan: { Feature: PanGesture },
	drag: {
		Feature: DragGesture,
		ProjectionNode: HTMLProjectionNode,
		MeasureLayout
	}
};
// node_modules/framer-motion/dist/es/gestures/hover.mjs
function handleHoverEvent(node, event, lifecycle) {
	const { props } = node;
	if (node.animationState && props.whileHover) node.animationState.setActive("whileHover", lifecycle === "Start");
	const callback = props["onHover" + lifecycle];
	if (callback) frame.postRender(() => callback(event, extractEventInfo(event)));
}
var HoverGesture = class extends Feature {
	mount() {
		const { current } = this.node;
		if (!current) return;
		this.unmount = hover(current, (_element, startEvent) => {
			handleHoverEvent(this.node, startEvent, "Start");
			return (endEvent) => handleHoverEvent(this.node, endEvent, "End");
		});
	}
	unmount() {}
};
// node_modules/framer-motion/dist/es/gestures/focus.mjs
var FocusGesture = class extends Feature {
	constructor() {
		super(...arguments);
		this.isActive = false;
	}
	onFocus() {
		let isFocusVisible = false;
		/**
		* If this element doesn't match focus-visible then don't
		* apply whileHover. But, if matches throws that focus-visible
		* is not a valid selector then in that browser outline styles will be applied
		* to the element by default and we want to match that behaviour with whileFocus.
		*/
		try {
			isFocusVisible = this.node.current.matches(":focus-visible");
		} catch (e) {
			isFocusVisible = true;
		}
		if (!isFocusVisible || !this.node.animationState) return;
		this.node.animationState.setActive("whileFocus", true);
		this.isActive = true;
	}
	onBlur() {
		if (!this.isActive || !this.node.animationState) return;
		this.node.animationState.setActive("whileFocus", false);
		this.isActive = false;
	}
	mount() {
		this.unmount = pipe(addDomEvent(this.node.current, "focus", () => this.onFocus()), addDomEvent(this.node.current, "blur", () => this.onBlur()));
	}
	unmount() {}
};
// node_modules/framer-motion/dist/es/gestures/press.mjs
function handlePressEvent(node, event, lifecycle) {
	const { props } = node;
	if (node.current instanceof HTMLButtonElement && node.current.disabled) return;
	if (node.animationState && props.whileTap) node.animationState.setActive("whileTap", lifecycle === "Start");
	const callback = props["onTap" + (lifecycle === "End" ? "" : lifecycle)];
	if (callback) frame.postRender(() => callback(event, extractEventInfo(event)));
}
var PressGesture = class extends Feature {
	mount() {
		const { current } = this.node;
		if (!current) return;
		const { globalTapTarget, propagate } = this.node.props;
		this.unmount = press(current, (_element, startEvent) => {
			handlePressEvent(this.node, startEvent, "Start");
			return (endEvent, { success }) => handlePressEvent(this.node, endEvent, success ? "End" : "Cancel");
		}, {
			useGlobalTarget: globalTapTarget,
			stopPropagation: propagate?.tap === false
		});
	}
	unmount() {}
};
// node_modules/framer-motion/dist/es/motion/features/viewport/observers.mjs
/**
* Map an IntersectionHandler callback to an element. We only ever make one handler for one
* element, so even though these handlers might all be triggered by different
* observers, we can keep them in the same map.
*/
var observerCallbacks = /* @__PURE__ */ new WeakMap();
/**
* Multiple observers can be created for multiple element/document roots. Each with
* different settings. So here we store dictionaries of observers to each root,
* using serialised settings (threshold/margin) as lookup keys.
*/
var observers = /* @__PURE__ */ new WeakMap();
var fireObserverCallback = (entry) => {
	const callback = observerCallbacks.get(entry.target);
	callback && callback(entry);
};
var fireAllObserverCallbacks = (entries) => {
	entries.forEach(fireObserverCallback);
};
function initIntersectionObserver({ root, ...options }) {
	const lookupRoot = root || document;
	/**
	* If we don't have an observer lookup map for this root, create one.
	*/
	if (!observers.has(lookupRoot)) observers.set(lookupRoot, {});
	const rootObservers = observers.get(lookupRoot);
	const key = JSON.stringify(options);
	/**
	* If we don't have an observer for this combination of root and settings,
	* create one.
	*/
	if (!rootObservers[key]) rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, {
		root,
		...options
	});
	return rootObservers[key];
}
function observeIntersection(element, options, callback) {
	const rootInteresectionObserver = initIntersectionObserver(options);
	observerCallbacks.set(element, callback);
	rootInteresectionObserver.observe(element);
	return () => {
		observerCallbacks.delete(element);
		rootInteresectionObserver.unobserve(element);
	};
}
// node_modules/framer-motion/dist/es/motion/features/viewport/index.mjs
var thresholdNames = {
	some: 0,
	all: 1
};
var InViewFeature = class extends Feature {
	constructor() {
		super(...arguments);
		this.hasEnteredView = false;
		this.isInView = false;
	}
	startObserver() {
		this.stopObserver?.();
		const { viewport = {} } = this.node.getProps();
		const { root, margin: rootMargin, amount = "some", once } = viewport;
		const options = {
			root: root ? root.current : void 0,
			rootMargin,
			threshold: typeof amount === "number" ? amount : thresholdNames[amount]
		};
		const onIntersectionUpdate = (entry) => {
			const { isIntersecting } = entry;
			/**
			* If there's been no change in the viewport state, early return.
			*/
			if (this.isInView === isIntersecting) return;
			this.isInView = isIntersecting;
			/**
			* Handle hasEnteredView. If this is only meant to run once, and
			* element isn't visible, early return. Otherwise set hasEnteredView to true.
			*/
			if (once && !isIntersecting && this.hasEnteredView) return;
			else if (isIntersecting) this.hasEnteredView = true;
			if (this.node.animationState) this.node.animationState.setActive("whileInView", isIntersecting);
			/**
			* Use the latest committed props rather than the ones in scope
			* when this observer is created
			*/
			const { onViewportEnter, onViewportLeave } = this.node.getProps();
			const callback = isIntersecting ? onViewportEnter : onViewportLeave;
			callback && callback(entry);
		};
		this.stopObserver = observeIntersection(this.node.current, options, onIntersectionUpdate);
	}
	mount() {
		this.startObserver();
	}
	update() {
		if (typeof IntersectionObserver === "undefined") return;
		const { props, prevProps } = this.node;
		if ([
			"amount",
			"margin",
			"root"
		].some(hasViewportOptionChanged(props, prevProps))) this.startObserver();
	}
	unmount() {
		this.stopObserver?.();
		this.hasEnteredView = false;
		this.isInView = false;
	}
};
function hasViewportOptionChanged({ viewport = {} }, { viewport: prevViewport = {} } = {}) {
	return (name) => viewport[name] !== prevViewport[name];
}
// node_modules/framer-motion/dist/es/motion/features/gestures.mjs
var gestureAnimations = {
	inView: { Feature: InViewFeature },
	tap: { Feature: PressGesture },
	focus: { Feature: FocusGesture },
	hover: { Feature: HoverGesture }
};
// node_modules/framer-motion/dist/es/motion/features/layout.mjs
var layout = { layout: {
	ProjectionNode: HTMLProjectionNode,
	MeasureLayout
} };
// node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs
var motion = /*@__PURE__*/ createMotionProxy({
	...animations,
	...gestureAnimations,
	...drag,
	...layout
}, createDomVisualElement);
// src/host/panels.tsx
var FRAME = {
	x: 2.5,
	y: 3.25,
	width: 19,
	height: 17.5,
	rx: 3
};
/** Pane rect per side and state — the single source of truth for pane
*  geometry. The pane hugs its frame edge and grows inward: thin = panel
*  closed, thick = panel open. */
var PANE_GEOMETRY = {
	left: {
		closed: {
			x: 4.5,
			y: 5.25,
			width: 2.4,
			height: 13.5,
			rx: 1.2
		},
		open: {
			x: 4.5,
			y: 5.25,
			width: 6.5,
			height: 13.5,
			rx: 1.4
		}
	},
	right: {
		closed: {
			x: 17.1,
			y: 5.25,
			width: 2.4,
			height: 13.5,
			rx: 1.2
		},
		open: {
			x: 13,
			y: 5.25,
			width: 6.5,
			height: 13.5,
			rx: 1.4
		}
	},
	bottom: {
		closed: {
			x: 4.5,
			y: 16.35,
			width: 15,
			height: 2.4,
			rx: 1.2
		},
		open: {
			x: 4.5,
			y: 13.25,
			width: 15,
			height: 5.5,
			rx: 1.4
		}
	}
};
/** Dimmed "already open" pane fill — low enough to read as not-solid, high
*  enough to stay legible on dim muted-gray themes. */
var LIGHT_OPACITY = .45;
/** Rest + hover-target geometry as CSS custom properties consumed by the
*  `.pi-pane` rules in index.css. */
function paneVars(rest, hover, open) {
	return {
		"--pi-x": `${rest.x}px`,
		"--pi-y": `${rest.y}px`,
		"--pi-w": `${rest.width}px`,
		"--pi-h": `${rest.height}px`,
		"--pi-rx": `${rest.rx}px`,
		"--pi-o": open ? LIGHT_OPACITY : 1,
		"--pi-hx": `${hover.x}px`,
		"--pi-hy": `${hover.y}px`,
		"--pi-hw": `${hover.width}px`,
		"--pi-hh": `${hover.height}px`,
		"--pi-hrx": `${hover.rx}px`,
		"--pi-ho": open ? 1 : LIGHT_OPACITY
	};
}
function makePanelIcon(side, open, displayName) {
	const rest = PANE_GEOMETRY[side][open ? "open" : "closed"];
	const hover = PANE_GEOMETRY[side][open ? "closed" : "open"];
	const vars = paneVars(rest, hover, open);
	function PanelIcon({ size = 24, style, ...props }) {
		return /* @__PURE__ */ jsxs("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			width: size,
			height: size,
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: 2,
			strokeLinecap: "round",
			strokeLinejoin: "round",
			"aria-hidden": "true",
			style: style ? {
				...vars,
				...style
			} : vars,
			...props,
			children: [/* @__PURE__ */ jsx("rect", { ...FRAME }), /* @__PURE__ */ jsx("rect", {
				className: "pi-pane",
				...rest,
				fill: "currentColor",
				fillOpacity: open ? LIGHT_OPACITY : void 0,
				stroke: "none"
			})]
		});
	}
	PanelIcon.displayName = displayName;
	return PanelIcon;
}
/** Left sidebar is HIDDEN — thin solid pane says "click to summon it". */
var PanelLeftSolid = makePanelIcon("left", false, "PanelLeftSolid");
/** Left sidebar is OPEN — thick dimmed pane says "already out; click to tuck away". */
var PanelLeftLight = makePanelIcon("left", true, "PanelLeftLight");
makePanelIcon("right", false, "PanelRightSolid");
makePanelIcon("right", true, "PanelRightLight");
makePanelIcon("bottom", false, "PanelBottomSolid");
makePanelIcon("bottom", true, "PanelBottomLight");
// src/host/i18n.ts
/**
* The app's own strings. A bundle cannot read the dashboard's catalogs (those
* belong to the host and change with it), so every locale the dashboard ships is
* bundled here and looked up against the host's active language.
*
* Lookup order: the exact locale (`pt`, `zh-CN`), then its base language, then
* English, then the key itself, so a missing translation shows English rather
* than nothing. `{{name}}` placeholders are filled from `vars`; one with no value
* is left as written. With a numeric `count`, the CLDR plural form of that
* locale is tried first (`result_count_one`, `_few`, `_many`, `_other`), the
* same key shape the dashboard's catalogs use.
*
* `t` reads the language at call time. The root component subscribes to the
* host's language changes (`useLanguageGeneration`), and its re-render reaches
* every child, so a language switch repaints the page without a reload.
*/
var CATALOGS = {
	bn: {
		apps: /* @__PURE__ */ JSON.parse("{\"mdNotebook\":{\"badge\":{\"deleting\":\"মুছে ফেলা হচ্ছে\",\"pending\":\"অপেক্ষমাণ\"},\"banner\":{\"diskConflict\":\"আপনি খোলার পর এই নোটটি ডিস্কে বদলে গেছে।\",\"keepMine\":\"আমার সংস্করণ রাখুন\",\"staleBackend\":\"নোট ব্যাকএন্ড এই পৃষ্ঠার চেয়ে পুরোনো কোড চালাচ্ছে — অনুপস্থিত: {{features}}। পুনরারম্ভ করতে অ্যাপস পৃষ্ঠায় নোট বন্ধ করে চালু করুন।\",\"staleBackendRoute\":\"নোটস ব্যাকএন্ড এই পৃষ্ঠার চেয়ে পুরনো কোড চালাচ্ছে। এটি পুনরায় চালু করতে Apps পৃষ্ঠায় নোটস বন্ধ করে আবার চালু করুন।\",\"syncConflict\":\"মার্জ কনফ্লিক্টের কারণে সিঙ্ক থেমে গেছে, তাই কিছুই পুশ হয়নি। কনফ্লিক্টে থাকা নোট: {{paths}}\",\"useDisk\":\"ডিস্কের সংস্করণ ব্যবহার করুন\"},\"body\":{\"backlinks\":\"{{n}} থেকে সংযুক্ত\",\"empty\":\"একটি নোট বাছুন, বা + বোতামে নতুন তৈরি করুন।\"},\"boot\":{\"loading\":\"লোড হচ্ছে…\",\"unreachable\":\"নোট ব্যাকএন্ডে পৌঁছানো যায়নি: {{message}}। এটি এখনও চালু হচ্ছে হতে পারে।\"},\"connect\":{\"attachAction\":\"ফোল্ডার সংযুক্ত করুন\",\"attachHelp\":\"আপনার আগে থেকেই থাকা git ফোল্ডার সেখানেই ব্যবহার করে — দ্বিতীয় কপি নয়।\",\"attachNoRemoteHelp\":\"git রিমোট নেই? সেটাও চলবে — ভল্ট একইভাবে কাজ করে এবং নোটগুলো এই মেশিনেই থাকে।\",\"attachTab\":\"ফোল্ডার সংযুক্ত করুন\",\"attaching\":\"সংযুক্ত হচ্ছে…\",\"branch\":\"ব্রাঞ্চ\",\"cancel\":\"বাতিল\",\"choose\":\"বাছুন…\",\"choosing\":\"বাছা হচ্ছে…\",\"cloneAction\":\"ভল্ট যোগ করুন\",\"cloneHelp\":\"একটি GitHub রিপোজিটরি ক্লোন করে এবং নিজের কর্মকপি রাখে।\",\"cloneTab\":\"রিপোজিটরি ক্লোন করুন\",\"cloning\":\"ক্লোন হচ্ছে…\",\"knowledgeFailed\":\"ভল্ট যুক্ত হয়েছে, কিন্তু জ্ঞান সিঙ্ক ব্যর্থ: {{message}}\",\"localFolder\":\"স্থানীয় ফোল্ডার\",\"localFolderPlaceholder\":\"~/Developer/my-notes\",\"pickerFailed\":\"ফোল্ডার নির্বাচক খোলা যায়নি: {{message}}\",\"pickerNeedsMac\":\"ফোল্ডার নির্বাচকের জন্য macOS দরকার — পথ টাইপ করুন।\",\"repoUrl\":\"রিপোজিটরি URL\",\"repoUrlPlaceholder\":\"https://github.com/you/notes\",\"subfolder\":\"সাবফোল্ডার (ঐচ্ছিক)\",\"subfolderPlaceholder\":\"notes\",\"title\":\"ভল্ট যোগ করুন\",\"token\":\"অ্যাক্সেস টোকেন (ঐচ্ছিক)\",\"tokenPlaceholder\":\"github_pat_…\"},\"editor\":{\"blockAria\":\"ব্লক সম্পাদনা\",\"renameHint\":\"এই নোটের নাম বদলাতে ক্লিক করুন\",\"titleAria\":\"নোটের শিরোনাম\"},\"header\":{\"view_raw\":\"Markdown সোর্স\",\"view_rendered\":\"রেন্ডার করা\"},\"knowledge\":{\"connectHelp\":\"এই ভল্টটি জ্ঞান লাইব্রেরিতে যোগ করে, যাতে এজেন্ট আপনার নোট খুঁজতে পারে। পরে {{capabilities}} → {{tab}}-এ বদলানো যাবে।\",\"label\":\"{{productName}} জ্ঞানে সিঙ্ক করুন\"},\"manifest\":{\"description\":\"git রিপোজিটরিতেই থাকে এমন একটি markdown নোটবই রাখো, যাতে তোমার নোট ভার্সন করা, বহনযোগ্য এবং অন্য যেকোনো এডিটরেও পড়ার মতো থাকে। কোনো GitHub রিপোর দিকে তাক করালে এটি একটি কাজের কপি ক্লোন করে, বা আগে থেকেই আছে এমন কোনো ফোল্ডার জুড়ে দাও — এমনকি চালু থাকা একটি Obsidian ভল্টও — এটি সেই চেকআউটকে জায়গাতেই গ্রহণ করে, দ্বিতীয় কপি বানায় না। নোট সাজানো লেখা হিসেবে দেখা যায় এবং সোজা তাতে ক্লিক করেই সম্পাদনা করা যায়, [[wikilinks]] সেগুলোকে জোড়ে, আর প্রতিটি নোট দেখায় কোন কোন নোট তার দিকে লিঙ্ক করছে। সিঙ্ক এক ধাপেই কমিট, পুল ও পুশ করে; আর মার্জ কনফ্লিক্ট হলে কিছু ওভাররাইট না করে কনফ্লিক্টে থাকা নোটের তালিকা দিয়ে মার্জ বাতিল করে জানিয়ে দেয়।\",\"display_name\":\"নোট\",\"use_case_1\":\"wikilink, backlink, search, Git history ও ঐচ্ছিক Knowledge indexing-সহ একটি বহনযোগ্য Markdown vault সম্পাদনা করুন।\",\"configuration_1\":\"একটি Git repository clone করুন বা বর্তমান local folder যুক্ত করুন, তারপর চাইলে Knowledge ও scheduled sync চালু করুন; private GitHub clone-এর জন্য PAT বা প্রমাণীকৃত gh লাগে।\",\"highlight_1\":\"তোমার নোট git রিপোতে সাধারণ markdown — কোনো লক-ইন নেই, Obsidian বা যেকোনো এডিটরে পড়া যায়\",\"highlight_2\":\"কোনো GitHub রিপো ভল্ট হিসেবে ক্লোন করো, বা আগে থেকেই আছে এমন কোনো ফোল্ডার কপি না করেই জুড়ে দাও\",\"highlight_3\":\"সাজানো যেকোনো ব্লকে ক্লিক করে সেখানেই সম্পাদনা করো; Enter নতুন ব্লক শুরু করে, Tab তালিকা ভেতরে ঢোকায়\",\"highlight_4\":\"নোটের মধ্যে [[Wikilinks]], সঙ্গে ব্যাকলিঙ্ক তালিকা — তুমি যে নোট পড়ছ তার দিকে কী কী তাক করে আছে তা দেখায়\",\"highlight_5\":\"শিরোনাম ও লেখা জুড়ে পূর্ণ-টেক্সট খোঁজ, সঙ্গে ফোল্ডার ও সমতল ভিউ এবং ছয়টি সাজানোর ক্রম\",\"highlight_6\":\"এক ধাপের সিঙ্ক কমিট, পুল ও পুশ করে; মার্জ কনফ্লিক্ট হলে কনফ্লিক্টে থাকা নোটের তালিকা দেয় আর কিছুই ওভাররাইট করে না\",\"highlight_7\":\"তুমি খোলার পর ফাইল ডিস্কে বদলে গেলে সেভ করতে দেওয়া হয় না, তাই অন্য কোথাও করা সম্পাদনা কখনও মুছে যায় না\",\"highlight_8\":\"চাইলে কোনো ভল্ট নলেজ লাইব্রেরিতে ইনডেক্স করো, যাতে এজেন্টরা তোমার নোট খুঁজে দেখতে পারে\",\"page_label\":\"নোট\"},\"panel\":{\"connectVault\":\"ভল্ট যোগ করুন\",\"hide\":\"নোট প্যানেল লুকান\",\"newRootNote\":\"শীর্ষ স্তরে নতুন নোট\",\"noMatches\":\"কিছু মেলেনি\",\"searchPlaceholder\":\"নোট খুঁজুন\",\"show\":\"নোট প্যানেল দেখান\",\"sortAndView\":\"ক্রম ও ভিউ\",\"sortSection\":\"এভাবে সাজান\",\"switchVault\":\"ভল্ট বদলান\",\"vaults\":\"ভল্ট\",\"viewSection\":\"ভিউ\",\"view_folders\":\"ফোল্ডার\",\"view_list\":\"সরল তালিকা\"},\"preview\":{\"detailsSummaryFallback\":\"বিস্তারিত\",\"mermaidError\":\"অবৈধ Mermaid ডায়াগ্রাম — সোর্স দেখানো হচ্ছে।\"},\"row\":{\"delete\":\"নোট মুছুন\",\"deleteAction\":\"মুছুন\",\"deleteConfirm\":\"আপনি এটি <trash>.trash</trash> থেকে ফিরিয়ে আনতে পারবেন। ট্র্যাশের নোট রিমোটের সাথে সিঙ্ক হয় না।\",\"deleteTitle\":\"“{{title}}” ট্র্যাশে সরাবেন?\",\"duplicate\":\"নোটের অনুলিপি তৈরি করুন\",\"pin\":\"নোট পিন করুন\",\"rename\":\"নোটের নাম পরিবর্তন করুন\",\"renameField\":\"নোটের নাম\",\"unpin\":\"নোট আনপিন করুন\"},\"settings\":{\"active\":\"সক্রিয়\",\"authGh\":\"GitHub CLI লগইন ব্যবহার হচ্ছে।\",\"authNone\":\"GitHub অ্যাক্সেস নেই — ব্যক্তিগত রিপোজিটরি সিঙ্ক করতে টোকেন যোগ করুন।\",\"authStored\":\"এই অ্যাপে সংরক্ষিত টোকেন ব্যবহার হচ্ছে।\",\"autoCommit\":\"ইতিহাসে স্বয়ংক্রিয় সংরক্ষণ\",\"autoCommitHelp\":\"প্রতি {{n}} মিনিটে আপনার সম্পাদনা ভল্টের স্থানীয় git ইতিহাসে কমিট করে, তাই আপনাকে কখনও হাতে সংরক্ষণ করতে হয় না। কোনো রিমোটে কিছুই পুশ করা হয় না।\",\"autoSync\":\"স্বয়ংক্রিয় সিঙ্ক\",\"autoSyncHelp\":\"টাইমার অনুযায়ী পরিবর্তন GitHub-এ পাঠায় ও সর্বশেষ আনে। Notes বন্ধ থাকলেও, {{productName}} চালু থাকা পর্যন্ত পটভূমিতে চলতে থাকে। কোনো দ্বন্দ্বে সিদ্ধান্ত দরকার হলে থেমে থাকে।\",\"badgeCloned\":\"ক্লোন করা\",\"badgeLocal\":\"স্থানীয় ফোল্ডার\",\"clear\":\"মুছুন\",\"close\":\"সেটিংস বন্ধ করুন\",\"every\":\"প্রতি\",\"githubSection\":\"GitHub অ্যাক্সেস\",\"intervalAria\":\"স্বয়ংক্রিয় সিঙ্কের বিরতি (মিনিট)\",\"knowledgeAdded\":\"জ্ঞানে যোগ করা হয়েছে।\",\"knowledgeAddedCount_one\":\"জ্ঞানে যোগ হয়েছে — {{n}}টি ফাইল সূচিকরণের সারিতে।\",\"knowledgeAddedCount_other\":\"জ্ঞানে যোগ হয়েছে — {{n}}টি ফাইল সূচিকরণের সারিতে।\",\"knowledgeAdding\":\"জ্ঞানে যোগ করা হচ্ছে…\",\"knowledgeIndexed\":\"জ্ঞান লাইব্রেরিতে সূচিবদ্ধ — এজেন্ট এই নোটগুলি খুঁজতে পারে।\",\"knowledgeNotIndexed\":\"সূচিবদ্ধ নয়। এজেন্টকে এই ভল্টে খুঁজতে দিতে চালু করুন।\",\"knowledgeRemoved\":\"জ্ঞান থেকে সরানো হয়েছে।\",\"knowledgeRemoving\":\"জ্ঞান থেকে সরানো হচ্ছে…\",\"minutes\":\"মিনিট\",\"noRemote\":\"কোনো রিমোট নেই\",\"open\":\"খুলুন\",\"prefsSaveFailed\":\"সিঙ্ক সেটিং সংরক্ষণ ব্যর্থ: {{message}}\",\"recording\":\"রেকর্ডিং…\",\"remove\":\"সরান\",\"removeConfirm\":\"এই ভল্টটি অ্যাপ থেকে সরাবেন? ডিস্কে ফাইলগুলি অপরিবর্তিত থাকে — শুধু সংযোগটি ভুলে যাওয়া হয়।\",\"removeFailed\":\"ভল্ট সরানো যায়নি: {{message}}\",\"removeIt\":\"সরিয়ে দিন\",\"reset\":\"রিসেট\",\"save\":\"সংরক্ষণ\",\"shortcut\":\"ম্যানুয়াল সিঙ্ক শর্টকাট\",\"shortcutHelpIdle\":\"নতুন শর্টকাট রেকর্ড করতে ক্লিক করুন।\",\"shortcutHelpRecording\":\"যে কীগুলি চান চাপুন — বাতিলে Esc।\",\"shortcutNeedsModifier\":\"অন্তত ⌘, Ctrl বা ⌥ ব্যবহার করুন — একা একটি অক্ষর টাইপ করার সময় চালু হয়ে যাবে।\",\"subtitle\":\"ভল্ট, GitHub অ্যাক্সেস ও সিঙ্ক\",\"syncSection\":\"সিঙ্ক\",\"title\":\"সেটিংস\",\"tokenCleared\":\"টোকেন মোছা হয়েছে।\",\"tokenClearFailed\":\"টোকেন মুছতে ব্যর্থ: {{message}}\",\"tokenPlaceholderEmpty\":\"github_pat_…\",\"tokenPlaceholderStored\":\"সংরক্ষিত টোকেন বদলান…\",\"tokenSaved\":\"টোকেন সংরক্ষিত।\",\"tokenSaveFailed\":\"টোকেন সংরক্ষণ ব্যর্থ: {{message}}\",\"vaultsSection\":\"ভল্ট\"},\"sort\":{\"createdNewOld\":\"তৈরি — নতুন থেকে পুরোনো\",\"createdOldNew\":\"তৈরি — পুরোনো থেকে নতুন\",\"modifiedNewOld\":\"পরিবর্তিত — নতুন থেকে পুরোনো\",\"modifiedOldNew\":\"পরিবর্তিত — পুরোনো থেকে নতুন\",\"nameAZ\":\"ফাইলের নাম — A থেকে Z\",\"nameZA\":\"ফাইলের নাম — Z থেকে A\"},\"sync\":{\"action\":\"সিঙ্ক\",\"ago_d\":\"{{n}} দিন আগে সিঙ্ক\",\"ago_h\":\"{{n}} ঘণ্টা আগে সিঙ্ক\",\"ago_m\":\"{{n}} মিনিট আগে সিঙ্ক\",\"justNow\":\"এইমাত্র সিঙ্ক হয়েছে\",\"localAction\":\"স্থানীয়ভাবে সংরক্ষণ\",\"localTitle\":\"পরিবর্তনগুলো এই ভল্টের স্থানীয় git ইতিহাসে কমিট করুন। এই ভল্টের কোনো রিমোট নেই, তাই কিছুই পুশ করা হয় না।\",\"syncing\":\"সিঙ্ক হচ্ছে\"},\"title\":\"নোট\",\"trash\":{\"empty\":\"এই ভল্ট থেকে এখনও কিছু মুছে ফেলা হয়নি, তাই কোনো .trash ফোল্ডার নেই।\",\"failed\":\"ফোল্ডার খোলা যায়নি: {{message}}\",\"open\":\".trash ফোল্ডার খুলুন\",\"unsupported\":\"এই সিস্টেমে ফোল্ডার খোলা সমর্থিত নয়।\"}}}"),
		api: { "client": {
			"proxy_challenge_framed": "{{origin}} নতুন ট্যাবে খোলো — যদি সাইন-ইন পেজ আসে, তাহলে তোমার অ্যাক্সেস প্রক্সির সেশন শেষ হয়ে গেছে। এই প্যানেলের ভিতরে সাইন ইন কাজ করবে না। সেখানে সাইন ইন করো, তারপর এই পেজটি রিলোড করো।",
			"proxy_challenge_reload": "এই ব্রাউজার ট্যাব রিলোড করো — যদি সাইন-ইন পেজ আসে, তাহলে তোমার অ্যাক্সেস প্রক্সির সেশন শেষ হয়ে গেছে। না আসলে এই ড্যাশবোর্ডের সামনে থাকা প্রক্সি বা ফায়ারওয়াল অনুরোধ ফিরিয়ে দিয়েছে; প্রক্সির লগ দেখো, বা পরে আবার চেষ্টা করো।"
		} },
		nav: {
			"agent_capabilities": "কাস্টমাইজ",
			"mcp_servers": "MCP সার্ভার"
		},
		pages: { "capabilitiesPage": {
			"knowledge_label": "নলেজ",
			"skills_label": "স্কিল"
		} },
		components: { "readingWidthToggle": {
			"title_md": "মধ্যম প্রস্থ",
			"title_full": "পূর্ণ প্রস্থ"
		} }
	},
	de: {
		apps: { "mdNotebook": {
			"badge": {
				"deleting": "wird gelöscht",
				"pending": "ausstehend"
			},
			"banner": {
				"diskConflict": "Diese Notiz wurde auf der Festplatte geändert, seit du sie geöffnet hast.",
				"keepMine": "Meine Version behalten",
				"staleBackend": "Das Notizen-Backend führt älteren Code als diese Seite aus – fehlend: {{features}}. Schalte Notizen auf der Apps-Seite aus und wieder ein, um es neu zu starten.",
				"staleBackendRoute": "Das Notizen-Backend führt älteren Code als diese Seite aus. Schalte Notizen auf der Apps-Seite aus und wieder ein, um es neu zu starten.",
				"syncConflict": "Die Synchronisierung wurde durch einen Merge-Konflikt gestoppt, daher wurde nichts gepusht. Betroffene Notizen: {{paths}}",
				"useDisk": "Version auf der Festplatte verwenden"
			},
			"body": {
				"backlinks": "Verlinkt von {{n}}",
				"empty": "Wähle eine Notiz oder erstelle eine mit der Schaltfläche +."
			},
			"boot": {
				"loading": "Wird geladen…",
				"unreachable": "Das Notizen-Backend ist nicht erreichbar: {{message}}. Möglicherweise startet es noch."
			},
			"connect": {
				"attachAction": "Ordner anhängen",
				"attachHelp": "Verwendet einen bereits vorhandenen Git-Ordner an seinem Platz – ohne zweite Kopie.",
				"attachNoRemoteHelp": "Kein Git-Remote? Das funktioniert auch — der Vault verhält sich gleich und die Notizen bleiben auf diesem Rechner.",
				"attachTab": "Ordner anhängen",
				"attaching": "Anhängen…",
				"branch": "Branch",
				"cancel": "Abbrechen",
				"choose": "Auswählen…",
				"choosing": "Auswahl…",
				"cloneAction": "Vault verbinden",
				"cloneHelp": "Klont ein GitHub-Repository und behält eine eigene Arbeitskopie.",
				"cloneTab": "Repository klonen",
				"cloning": "Klonen…",
				"knowledgeFailed": "Vault verbunden, aber die Wissenssynchronisierung ist fehlgeschlagen: {{message}}",
				"localFolder": "Lokaler Ordner",
				"localFolderPlaceholder": "~/Developer/my-notes",
				"pickerFailed": "Die Ordnerauswahl konnte nicht geöffnet werden: {{message}}",
				"pickerNeedsMac": "Die Ordnerauswahl benötigt macOS – gib den Pfad ein.",
				"repoUrl": "Repository-URL",
				"repoUrlPlaceholder": "https://github.com/you/notes",
				"subfolder": "Unterordner (optional)",
				"subfolderPlaceholder": "notes",
				"title": "Vault verbinden",
				"token": "Zugriffstoken (optional)",
				"tokenPlaceholder": "github_pat_…"
			},
			"editor": {
				"blockAria": "Block bearbeiten",
				"renameHint": "Klicken, um diese Notiz umzubenennen",
				"titleAria": "Notiztitel"
			},
			"header": {
				"view_raw": "Markdown-Quelltext",
				"view_rendered": "Gerendert"
			},
			"knowledge": {
				"connectHelp": "Fügt diesen Vault der Wissensbibliothek hinzu, damit Agenten deine Notizen durchsuchen können. Später unter {{capabilities}} → {{tab}} änderbar.",
				"label": "Mit {{productName}} Wissen synchronisieren"
			},
			"manifest": {
				"description": "Führe ein Markdown-Notizbuch, das in einem Git-Repository liegt, damit deine Notizen versioniert, portabel und in jedem anderen Editor lesbar sind. Richte es auf ein GitHub-Repository, und es klont eine Arbeitskopie, oder hänge einen Ordner an, den du schon hast — auch einen bestehenden Obsidian-Vault — und es übernimmt diesen Checkout an seinem Ort, ohne eine zweite Kopie anzulegen. Notizen werden als formatierter Text dargestellt, in den du zum Bearbeiten direkt hineinklickst, [[wikilinks]] verbinden sie, und jede Notiz zeigt, was auf sie zurückverweist. Die Synchronisierung committet, pullt und pusht in einem Schritt, und ein Merge-Konflikt wird gemeldet — mit einer Liste der betroffenen Notizen und Abbruch des Merges — statt irgendetwas zu überschreiben.",
				"display_name": "Notizen",
				"highlight_1": "Deine Notizen sind einfaches Markdown in einem Git-Repository — keine Bindung, lesbar mit Obsidian oder jedem Editor",
				"highlight_2": "Klone ein GitHub-Repository als Vault oder hänge einen Ordner an, den du schon hast, ohne ihn zu kopieren",
				"highlight_3": "Klicke einen beliebigen dargestellten Block an, um ihn direkt zu bearbeiten; Enter beginnt einen neuen Block, Tab verschachtelt Listen",
				"highlight_4": "[[Wikilinks]] zwischen Notizen, mit einer Backlink-Liste, die zeigt, was auf die gerade gelesene Notiz verweist",
				"highlight_5": "Volltextsuche über Titel und Inhalte, dazu Ordner- und Flachansicht mit sechs Sortierungen",
				"highlight_6": "Die Synchronisierung committet, pullt und pusht in einem Schritt; ein Merge-Konflikt listet die betroffenen Notizen auf und überschreibt nichts",
				"highlight_7": "Ein Speichern wird abgelehnt, wenn sich die Datei seit dem Öffnen auf der Festplatte geändert hat, damit Änderungen von anderswo nie zerstört werden",
				"highlight_8": "Optional einen Vault in die Wissensbibliothek indexieren, damit Agenten deine Notizen durchsuchen können",
				"page_label": "Notizen",
				"use_case_1": "Bearbeite einen portablen Markdown-Vault mit Wikilinks, Backlinks, Suche, Git-Verlauf und optionaler Knowledge-Indizierung.",
				"configuration_1": "Klone ein Git-Repository oder hänge einen vorhandenen lokalen Ordner an und aktiviere optional Knowledge und die geplante Synchronisierung; private GitHub-Klone benötigen ein PAT oder ein authentifiziertes gh."
			},
			"panel": {
				"connectVault": "Vault verbinden",
				"hide": "Notizbereich ausblenden",
				"newRootNote": "Neue Notiz auf oberster Ebene",
				"noMatches": "Keine Treffer",
				"searchPlaceholder": "Notizen durchsuchen",
				"show": "Notizbereich anzeigen",
				"sortAndView": "Sortierung und Ansicht",
				"sortSection": "Sortieren nach",
				"switchVault": "Vault wechseln",
				"vaults": "Vaults",
				"viewSection": "Ansicht",
				"view_folders": "Ordner",
				"view_list": "Flache Liste"
			},
			"preview": {
				"detailsSummaryFallback": "Details",
				"mermaidError": "Ungültiges Mermaid-Diagramm — Quelltext wird angezeigt."
			},
			"row": {
				"delete": "Notiz löschen",
				"deleteAction": "Löschen",
				"deleteConfirm": "Du kannst sie aus <trash>.trash</trash> wiederherstellen. Notizen im Papierkorb werden nicht mit dem Remote synchronisiert.",
				"deleteTitle": "„{{title}}“ in den Papierkorb verschieben?",
				"duplicate": "Notiz duplizieren",
				"pin": "Notiz anpinnen",
				"rename": "Notiz umbenennen",
				"renameField": "Notizname",
				"unpin": "Notiz abpinnen"
			},
			"settings": {
				"active": "Aktiv",
				"authGh": "Verwendet deine GitHub-CLI-Anmeldung.",
				"authNone": "Kein GitHub-Zugriff – füge ein Token hinzu, um private Repositories zu synchronisieren.",
				"authStored": "Verwendet ein in dieser App gespeichertes Token.",
				"autoCommit": "Automatisch in Historie speichern",
				"autoCommitHelp": "Committet deine Änderungen alle {{n}} Minuten in die lokale Git-Historie des Vaults, damit du nie manuell speichern musst. Es wird nichts an ein Remote gepusht.",
				"autoSync": "Automatische Synchronisierung",
				"autoSyncHelp": "Überträgt deine Änderungen zu GitHub und holt die neuesten, nach Zeitplan. Läuft im Hintergrund weiter, wenn Notes geschlossen ist – solange {{productName}} geöffnet ist. Pausiert, solange ein Konflikt deine Entscheidung braucht.",
				"badgeCloned": "Geklont",
				"badgeLocal": "Lokaler Ordner",
				"clear": "Löschen",
				"close": "Einstellungen schließen",
				"every": "Alle",
				"githubSection": "GitHub-Zugriff",
				"intervalAria": "Intervall der automatischen Synchronisierung in Minuten",
				"knowledgeAdded": "Zum Wissen hinzugefügt.",
				"knowledgeAddedCount_one": "Zum Wissen hinzugefügt – {{n}} Datei zur Indexierung eingereiht.",
				"knowledgeAddedCount_other": "Zum Wissen hinzugefügt – {{n}} Dateien zur Indexierung eingereiht.",
				"knowledgeAdding": "Wird zum Wissen hinzugefügt…",
				"knowledgeIndexed": "In der Wissensbibliothek indexiert – Agenten können diese Notizen durchsuchen.",
				"knowledgeNotIndexed": "Nicht indexiert. Aktivieren, damit Agenten diesen Vault durchsuchen können.",
				"knowledgeRemoved": "Aus dem Wissen entfernt.",
				"knowledgeRemoving": "Wird aus dem Wissen entfernt…",
				"minutes": "Minuten",
				"noRemote": "Kein Remote",
				"open": "Öffnen",
				"prefsSaveFailed": "Die Sync-Einstellung konnte nicht gespeichert werden: {{message}}",
				"recording": "Aufnahme…",
				"remove": "Entfernen",
				"removeConfirm": "Diesen Vault aus der App entfernen? Die Dateien bleiben unangetastet auf der Festplatte – nur die Verbindung wird vergessen.",
				"removeFailed": "Der Vault konnte nicht entfernt werden: {{message}}",
				"removeIt": "Entfernen",
				"reset": "Zurücksetzen",
				"save": "Speichern",
				"shortcut": "Kurzbefehl für manuelle Synchronisierung",
				"shortcutHelpIdle": "Klicken, um einen neuen Kurzbefehl aufzunehmen.",
				"shortcutHelpRecording": "Drücke die gewünschten Tasten – Esc bricht ab.",
				"shortcutNeedsModifier": "Verwende mindestens ⌘, Ctrl oder ⌥ – ein einzelner Buchstabe würde beim Tippen auslösen.",
				"subtitle": "Vaults, GitHub-Zugriff und Synchronisierung",
				"syncSection": "Synchronisierung",
				"title": "Einstellungen",
				"tokenCleared": "Token gelöscht.",
				"tokenClearFailed": "Token konnte nicht gelöscht werden: {{message}}",
				"tokenPlaceholderEmpty": "github_pat_…",
				"tokenPlaceholderStored": "Gespeichertes Token ersetzen…",
				"tokenSaved": "Token gespeichert.",
				"tokenSaveFailed": "Token konnte nicht gespeichert werden: {{message}}",
				"vaultsSection": "Vaults"
			},
			"sort": {
				"createdNewOld": "Erstellt – neu nach alt",
				"createdOldNew": "Erstellt – alt nach neu",
				"modifiedNewOld": "Geändert – neu nach alt",
				"modifiedOldNew": "Geändert – alt nach neu",
				"nameAZ": "Dateiname – A bis Z",
				"nameZA": "Dateiname – Z bis A"
			},
			"sync": {
				"action": "Synchronisieren",
				"ago_d": "Vor {{n}} T. synchronisiert",
				"ago_h": "Vor {{n}} Std. synchronisiert",
				"ago_m": "Vor {{n}} Min. synchronisiert",
				"justNow": "Gerade synchronisiert",
				"localAction": "Lokal speichern",
				"localTitle": "Änderungen in die lokale Git-Historie dieses Vaults committen. Dieser Vault hat kein Remote, es wird also nichts gepusht.",
				"syncing": "Synchronisierung"
			},
			"title": "Notizen",
			"trash": {
				"empty": "Aus diesem Vault wurde noch nichts gelöscht, daher gibt es keinen .trash-Ordner.",
				"failed": "Ordner konnte nicht geöffnet werden: {{message}}",
				"open": ".trash-Ordner öffnen",
				"unsupported": "Das Öffnen eines Ordners wird auf diesem System nicht unterstützt."
			}
		} },
		api: { "client": {
			"proxy_challenge_framed": "Öffne {{origin}} in einem neuen Tab — erscheint eine Anmeldeseite, ist die Sitzung deines Zugriffsproxys abgelaufen. In diesem Panel funktioniert die Anmeldung nicht. Melde dich dort an und lade dann diese Seite neu.",
			"proxy_challenge_reload": "Lade diesen Browser-Tab neu — erscheint eine Anmeldeseite, ist die Sitzung deines Zugriffsproxys abgelaufen. Wenn nicht, hat ein Proxy oder eine Firewall vor diesem Dashboard die Anfrage abgewiesen; prüfe die Protokolle des Proxys oder versuche es später erneut."
		} },
		nav: {
			"agent_capabilities": "Anpassen",
			"mcp_servers": "MCP-Server"
		},
		pages: { "capabilitiesPage": {
			"knowledge_label": "Wissen",
			"skills_label": "Fähigkeiten"
		} },
		components: { "readingWidthToggle": {
			"title_md": "Mittlere Breite",
			"title_full": "Volle Breite"
		} }
	},
	en: {
		apps: { "mdNotebook": {
			"badge": {
				"deleting": "deleting",
				"pending": "pending"
			},
			"banner": {
				"diskConflict": "This note changed on disk since you opened it.",
				"keepMine": "Keep my version",
				"staleBackend": "The Notes backend is running older code than this page — missing: {{features}}. Toggle Notes off and on in the Apps page to restart it.",
				"staleBackendRoute": "The Notes backend is running older code than this page. Toggle Notes off and on in the Apps page to restart it.",
				"syncConflict": "Sync stopped on a merge conflict, so nothing was pushed. Conflicting notes: {{paths}}",
				"useDisk": "Use the version on disk"
			},
			"body": {
				"backlinks": "Linked from {{n}}",
				"empty": "Select a note, or create one with the + button."
			},
			"boot": {
				"loading": "Loading…",
				"unreachable": "Could not reach the Notes backend: {{message}}. It may still be starting."
			},
			"connect": {
				"attachAction": "Attach folder",
				"attachHelp": "Uses a git folder you already have, in place — no second copy.",
				"attachNoRemoteHelp": "No git remote? That works too — the vault behaves the same and the notes stay on this machine.",
				"attachTab": "Attach a folder",
				"attaching": "Attaching…",
				"branch": "Branch",
				"cancel": "Cancel",
				"choose": "Choose…",
				"choosing": "Choosing…",
				"cloneAction": "Connect vault",
				"cloneHelp": "Clones a GitHub repository and keeps its own working copy.",
				"cloneTab": "Clone a repo",
				"cloning": "Cloning…",
				"knowledgeFailed": "Vault connected, but knowledge sync failed: {{message}}",
				"localFolder": "Local folder",
				"localFolderPlaceholder": "~/Developer/my-notes",
				"pickerFailed": "Could not open the folder chooser: {{message}}",
				"pickerNeedsMac": "Folder chooser needs macOS — type the path instead.",
				"repoUrl": "Repository URL",
				"repoUrlPlaceholder": "https://github.com/you/notes",
				"subfolder": "Subfolder (optional)",
				"subfolderPlaceholder": "notes",
				"title": "Connect a vault",
				"token": "Access token (optional)",
				"tokenPlaceholder": "github_pat_…"
			},
			"editor": {
				"blockAria": "Edit block",
				"renameHint": "Click to rename this note",
				"titleAria": "Note title"
			},
			"header": {
				"view_raw": "Markdown source",
				"view_rendered": "Rendered"
			},
			"knowledge": {
				"connectHelp": "Adds this vault to the Knowledge library so agents can search your notes. You can change this later in {{capabilities}} → {{tab}}.",
				"label": "Sync to {{productName}} knowledge"
			},
			"manifest": {
				"description": "Keep a markdown notebook that lives in a git repository, so your notes are versioned, portable, and readable by any other editor. Point it at a GitHub repo and it clones a working copy, or attach a folder you already have — including an existing Obsidian vault — and it adopts that checkout in place without making a second copy. Notes render as formatted text you can click straight into to edit, [[wikilinks]] connect them, and every note shows what links back to it. Sync commits, pulls and pushes in one step, and a merge conflict is reported — listing the conflicted notes and aborting the merge — rather than overwriting anything.",
				"display_name": "Notes",
				"highlight_1": "Your notes are plain markdown in a git repo — no lock-in, readable by Obsidian or any editor",
				"highlight_2": "Clone a GitHub repo as a vault, or attach a folder you already have without copying it",
				"highlight_3": "Click any rendered block to edit it in place; Enter starts a new block, Tab nests lists",
				"highlight_4": "[[Wikilinks]] between notes, with a backlinks list showing what points at the note you are reading",
				"highlight_5": "Full-text search across titles and content, plus folder and flat views with six sort orders",
				"highlight_6": "One-step sync commits, pulls and pushes; a merge conflict lists the conflicted notes and overwrites nothing",
				"highlight_7": "A save is refused if the file changed on disk since you opened it, so edits made elsewhere are never clobbered",
				"highlight_8": "Optionally index a vault into the Knowledge library so agents can search your notes",
				"page_label": "Notes",
				"use_case_1": "Edit a portable Markdown vault with wikilinks, backlinks, search, Git history, and optional Knowledge indexing.",
				"configuration_1": "Clone a Git repository or attach an existing local folder, then optionally enable Knowledge and scheduled sync; private GitHub clones need a PAT or authenticated gh."
			},
			"panel": {
				"connectVault": "Connect a vault",
				"hide": "Hide notes panel",
				"newRootNote": "New note at the top level",
				"noMatches": "No matches",
				"searchPlaceholder": "Search notes",
				"show": "Show notes panel",
				"sortAndView": "Sort and view",
				"sortSection": "Sort by",
				"switchVault": "Switch vault",
				"vaults": "Vaults",
				"viewSection": "View",
				"view_folders": "Folders",
				"view_list": "Flat list"
			},
			"preview": {
				"detailsSummaryFallback": "Details",
				"mermaidError": "Invalid Mermaid diagram — showing its source."
			},
			"row": {
				"delete": "Delete note",
				"deleteAction": "Delete",
				"deleteTitle": "Move “{{title}}” to trash?",
				"duplicate": "Duplicate note",
				"pin": "Pin note",
				"rename": "Rename note",
				"renameField": "Note name",
				"unpin": "Unpin note",
				"deleteConfirm": "You can restore it from <trash>.trash</trash>. Trashed notes aren't synced to the remote."
			},
			"settings": {
				"active": "Active",
				"authGh": "Using your GitHub CLI login.",
				"authNone": "No GitHub access — add a token to sync private repositories.",
				"authStored": "Using a token stored in this app.",
				"autoCommit": "Autosave to history",
				"autoCommitHelp": "Commits your edits to the vault's local git history every {{n}} minutes, so you never have to save by hand. Nothing is pushed to a remote.",
				"autoSync": "Auto sync",
				"autoSyncHelp": "Pushes your changes to GitHub and pulls the latest, on a timer. Keeps running in the background when Notes is closed, as long as {{productName}} is open. Paused while a conflict needs your decision.",
				"badgeCloned": "Cloned",
				"badgeLocal": "Local folder",
				"clear": "Clear",
				"close": "Close settings",
				"every": "Every",
				"githubSection": "GitHub access",
				"intervalAria": "Auto sync interval in minutes",
				"knowledgeAdded": "Added to Knowledge.",
				"knowledgeAddedCount_one": "Added to Knowledge — {{n}} file queued for indexing.",
				"knowledgeAddedCount_other": "Added to Knowledge — {{n}} files queued for indexing.",
				"knowledgeAdding": "Adding to Knowledge…",
				"knowledgeIndexed": "Indexed in the Knowledge library — agents can search these notes.",
				"knowledgeNotIndexed": "Not indexed. Turn on to let agents search this vault.",
				"knowledgeRemoved": "Removed from Knowledge.",
				"knowledgeRemoving": "Removing from Knowledge…",
				"minutes": "minutes",
				"noRemote": "No remote",
				"open": "Open",
				"prefsSaveFailed": "Could not save the sync setting: {{message}}",
				"recording": "Recording…",
				"remove": "Remove",
				"removeConfirm": "Remove this vault from the app? Your files are left untouched on disk — only the connection is forgotten.",
				"removeFailed": "Could not remove the vault: {{message}}",
				"removeIt": "Remove it",
				"reset": "Reset",
				"save": "Save",
				"shortcut": "Manual sync shortcut",
				"shortcutHelpIdle": "Click to record a new shortcut.",
				"shortcutHelpRecording": "Press the keys you want to use — Esc to cancel.",
				"shortcutNeedsModifier": "Use at least one of ⌘, Ctrl or ⌥ — a plain letter would fire while you type.",
				"subtitle": "Vaults, GitHub access and sync",
				"syncSection": "Sync",
				"title": "Settings",
				"tokenCleared": "Token cleared.",
				"tokenClearFailed": "Could not clear the token: {{message}}",
				"tokenPlaceholderEmpty": "github_pat_…",
				"tokenPlaceholderStored": "Replace stored token…",
				"tokenSaved": "Token saved.",
				"tokenSaveFailed": "Could not save the token: {{message}}",
				"vaultsSection": "Vaults"
			},
			"sort": {
				"createdNewOld": "Created — new to old",
				"createdOldNew": "Created — old to new",
				"modifiedNewOld": "Modified — new to old",
				"modifiedOldNew": "Modified — old to new",
				"nameAZ": "File name — A to Z",
				"nameZA": "File name — Z to A"
			},
			"sync": {
				"action": "Sync",
				"ago_d": "Synced {{n}}d ago",
				"ago_h": "Synced {{n}}h ago",
				"ago_m": "Synced {{n}}m ago",
				"justNow": "Synced just now",
				"localAction": "Save locally",
				"localTitle": "Commit changes to this vault's local git history. This vault has no remote, so nothing is pushed.",
				"syncing": "Syncing"
			},
			"title": "Notes",
			"trash": {
				"empty": "Nothing has been deleted from this vault yet, so there is no .trash folder.",
				"failed": "Could not open the folder: {{message}}",
				"open": "Open the .trash folder",
				"unsupported": "Opening a folder is not supported on this system."
			}
		} },
		api: { "client": {
			"proxy_challenge_framed": "Open {{origin}} in a new tab — if a sign-in page appears, your access proxy’s session expired. Signing in inside this panel won’t work. Sign in there, then reload this page.",
			"proxy_challenge_reload": "Reload this browser tab — if a sign-in page appears, your access proxy’s session expired. If not, a proxy or firewall in front of this dashboard refused the request; check the proxy’s logs, or retry later."
		} },
		nav: {
			"agent_capabilities": "Customize",
			"mcp_servers": "MCP Servers"
		},
		pages: { "capabilitiesPage": {
			"knowledge_label": "Knowledge",
			"skills_label": "Skills"
		} },
		components: { "readingWidthToggle": {
			"title_md": "Medium width",
			"title_full": "Full width"
		} }
	},
	es: {
		apps: { "mdNotebook": {
			"badge": {
				"deleting": "eliminando",
				"pending": "pendiente"
			},
			"banner": {
				"diskConflict": "Esta nota cambió en el disco desde que la abriste.",
				"keepMine": "Conservar mi versión",
				"staleBackend": "El backend de Notas ejecuta código más antiguo que esta página; falta: {{features}}. Desactiva y vuelve a activar Notas en la página de Aplicaciones para reiniciarlo.",
				"staleBackendRoute": "El backend de Notas ejecuta código más antiguo que esta página. Desactiva y vuelve a activar Notas en la página de Apps para reiniciarlo.",
				"syncConflict": "La sincronización se detuvo por un conflicto de fusión, así que no se envió nada. Notas en conflicto: {{paths}}",
				"useDisk": "Usar la versión del disco"
			},
			"body": {
				"backlinks": "Enlazada desde {{n}}",
				"empty": "Selecciona una nota o crea una con el botón +."
			},
			"boot": {
				"loading": "Cargando…",
				"unreachable": "No se pudo contactar el backend de Notas: {{message}}. Puede que aún esté iniciando."
			},
			"connect": {
				"attachAction": "Adjuntar carpeta",
				"attachHelp": "Usa una carpeta git que ya tienes, en su sitio: sin una segunda copia.",
				"attachNoRemoteHelp": "¿Sin remoto de git? También funciona: el vault se comporta igual y las notas se quedan en este equipo.",
				"attachTab": "Adjuntar una carpeta",
				"attaching": "Adjuntando…",
				"branch": "Rama",
				"cancel": "Cancelar",
				"choose": "Elegir…",
				"choosing": "Eligiendo…",
				"cloneAction": "Conectar bóveda",
				"cloneHelp": "Clona un repositorio de GitHub y mantiene su propia copia de trabajo.",
				"cloneTab": "Clonar un repositorio",
				"cloning": "Clonando…",
				"knowledgeFailed": "Bóveda conectada, pero falló la sincronización de conocimiento: {{message}}",
				"localFolder": "Carpeta local",
				"localFolderPlaceholder": "~/Developer/my-notes",
				"pickerFailed": "No se pudo abrir el selector de carpetas: {{message}}",
				"pickerNeedsMac": "El selector de carpetas requiere macOS: escribe la ruta.",
				"repoUrl": "URL del repositorio",
				"repoUrlPlaceholder": "https://github.com/you/notes",
				"subfolder": "Subcarpeta (opcional)",
				"subfolderPlaceholder": "notes",
				"title": "Conectar una bóveda",
				"token": "Token de acceso (opcional)",
				"tokenPlaceholder": "github_pat_…"
			},
			"editor": {
				"blockAria": "Editar bloque",
				"renameHint": "Haz clic para renombrar esta nota",
				"titleAria": "Título de la nota"
			},
			"header": {
				"view_raw": "Código Markdown",
				"view_rendered": "Renderizado"
			},
			"knowledge": {
				"connectHelp": "Añade esta bóveda a la biblioteca de Conocimiento para que los agentes puedan buscar tus notas. Puedes cambiarlo después en {{capabilities}} → {{tab}}.",
				"label": "Sincronizar con el conocimiento de {{productName}}"
			},
			"manifest": {
				"description": "Mantén un cuaderno en markdown que vive en un repositorio git, así tus notas quedan versionadas, son portables y se pueden leer con cualquier otro editor. Apúntalo a un repositorio de GitHub y clona una copia de trabajo, o adjunta una carpeta que ya tengas — incluida una bóveda de Obsidian existente — y adopta ese checkout tal cual, sin hacer una segunda copia. Las notas se muestran como texto con formato en el que puedes hacer clic para editarlo directamente, los [[wikilinks]] las conectan y cada nota muestra qué apunta a ella. La sincronización confirma, trae y envía los cambios en un solo paso, y un conflicto de fusión se reporta — listando las notas en conflicto y abortando la fusión — en lugar de sobrescribir nada.",
				"display_name": "Notas",
				"highlight_1": "Tus notas son markdown simple en un repositorio git — sin dependencia de un proveedor, legibles con Obsidian o cualquier editor",
				"highlight_2": "Clona un repositorio de GitHub como bóveda, o adjunta una carpeta que ya tengas sin copiarla",
				"highlight_3": "Haz clic en cualquier bloque renderizado para editarlo ahí mismo; Enter empieza un bloque nuevo y Tab anida listas",
				"highlight_4": "[[Wikilinks]] entre notas, con una lista de retroenlaces que muestra qué apunta a la nota que estás leyendo",
				"highlight_5": "Búsqueda de texto completo en títulos y contenido, además de vistas de carpetas y plana con seis criterios de orden",
				"highlight_6": "La sincronización en un paso confirma, trae y envía los cambios; un conflicto de fusión lista las notas en conflicto y no sobrescribe nada",
				"highlight_7": "Un guardado se rechaza si el archivo cambió en el disco desde que lo abriste, así las ediciones hechas en otro lugar nunca se pisan",
				"highlight_8": "Opcionalmente, indexa una bóveda en la biblioteca de Conocimiento para que los agentes puedan buscar tus notas",
				"page_label": "Notas",
				"use_case_1": "Edita un vault Markdown portátil con wikilinks, backlinks, búsqueda, historial de Git e indexación opcional en Knowledge.",
				"configuration_1": "Clona un repositorio Git o adjunta una carpeta local existente y activa, si quieres, Knowledge y la sincronización programada; los clones privados de GitHub necesitan un PAT o gh autenticado."
			},
			"panel": {
				"connectVault": "Conectar una bóveda",
				"hide": "Ocultar el panel de notas",
				"newRootNote": "Nota nueva en el nivel superior",
				"noMatches": "Sin resultados",
				"searchPlaceholder": "Buscar notas",
				"show": "Mostrar el panel de notas",
				"sortAndView": "Orden y vista",
				"sortSection": "Ordenar por",
				"switchVault": "Cambiar de bóveda",
				"vaults": "Bóvedas",
				"viewSection": "Vista",
				"view_folders": "Carpetas",
				"view_list": "Lista plana"
			},
			"preview": {
				"detailsSummaryFallback": "Detalles",
				"mermaidError": "Diagrama Mermaid no válido: se muestra su código fuente."
			},
			"row": {
				"delete": "Eliminar nota",
				"deleteAction": "Eliminar",
				"deleteConfirm": "Puedes restaurarla desde <trash>.trash</trash>. Las notas en la papelera no se sincronizan con el remoto.",
				"deleteTitle": "¿Mover “{{title}}” a la papelera?",
				"duplicate": "Duplicar nota",
				"pin": "Fijar nota",
				"rename": "Cambiar el nombre de la nota",
				"renameField": "Nombre de la nota",
				"unpin": "No fijar la nota"
			},
			"settings": {
				"active": "Activa",
				"authGh": "Usando tu sesión de GitHub CLI.",
				"authNone": "Sin acceso a GitHub: añade un token para sincronizar repositorios privados.",
				"authStored": "Usando un token guardado en esta aplicación.",
				"autoCommit": "Guardado automático en el historial",
				"autoCommitHelp": "Confirma tus cambios en el historial de git local del vault cada {{n}} minutos, así nunca tienes que guardar a mano. No se envía nada a un remoto.",
				"autoSync": "Sincronización automática",
				"autoSyncHelp": "Envía tus cambios a GitHub y trae los últimos, con un temporizador. Sigue funcionando en segundo plano cuando Notes está cerrado, siempre que {{productName}} esté abierto. Se pausa mientras un conflicto necesita tu decisión.",
				"badgeCloned": "Clonada",
				"badgeLocal": "Carpeta local",
				"clear": "Borrar",
				"close": "Cerrar ajustes",
				"every": "Cada",
				"githubSection": "Acceso a GitHub",
				"intervalAria": "Intervalo de sincronización automática en minutos",
				"knowledgeAdded": "Añadida a Conocimiento.",
				"knowledgeAddedCount_one": "Añadida a Conocimiento: {{n}} archivo en cola para indexar.",
				"knowledgeAddedCount_many": "Añadida a Conocimiento: {{n}} de archivos en cola para indexar.",
				"knowledgeAddedCount_other": "Añadida a Conocimiento: {{n}} archivos en cola para indexar.",
				"knowledgeAdding": "Añadiendo a Conocimiento…",
				"knowledgeIndexed": "Indexada en la biblioteca de Conocimiento: los agentes pueden buscar estas notas.",
				"knowledgeNotIndexed": "Sin indexar. Actívalo para que los agentes busquen en esta bóveda.",
				"knowledgeRemoved": "Quitada de Conocimiento.",
				"knowledgeRemoving": "Quitando de Conocimiento…",
				"minutes": "minutos",
				"noRemote": "Sin remoto",
				"open": "Abrir",
				"prefsSaveFailed": "No se pudo guardar la configuración de sincronización: {{message}}",
				"recording": "Grabando…",
				"remove": "Quitar",
				"removeConfirm": "¿Quitar esta bóveda de la aplicación? Tus archivos quedan intactos en el disco: solo se olvida la conexión.",
				"removeFailed": "No se pudo quitar la bóveda: {{message}}",
				"removeIt": "Quitarla",
				"reset": "Restablecer",
				"save": "Guardar",
				"shortcut": "Atajo de sincronización manual",
				"shortcutHelpIdle": "Haz clic para grabar un atajo nuevo.",
				"shortcutHelpRecording": "Pulsa las teclas que quieras usar; Esc para cancelar.",
				"shortcutNeedsModifier": "Usa al menos ⌘, Ctrl o ⌥: una letra sola se activaría al escribir.",
				"subtitle": "Bóvedas, acceso a GitHub y sincronización",
				"syncSection": "Sincronización",
				"title": "Ajustes",
				"tokenCleared": "Token borrado.",
				"tokenClearFailed": "No se pudo borrar el token: {{message}}",
				"tokenPlaceholderEmpty": "github_pat_…",
				"tokenPlaceholderStored": "Reemplazar el token guardado…",
				"tokenSaved": "Token guardado.",
				"tokenSaveFailed": "No se pudo guardar el token: {{message}}",
				"vaultsSection": "Bóvedas"
			},
			"sort": {
				"createdNewOld": "Creación: de nueva a antigua",
				"createdOldNew": "Creación: de antigua a nueva",
				"modifiedNewOld": "Modificación: de nueva a antigua",
				"modifiedOldNew": "Modificación: de antigua a nueva",
				"nameAZ": "Nombre de archivo: de A a Z",
				"nameZA": "Nombre de archivo: de Z a A"
			},
			"sync": {
				"action": "Sincronizar",
				"ago_d": "Sincronizado hace {{n}} d",
				"ago_h": "Sincronizado hace {{n}} h",
				"ago_m": "Sincronizado hace {{n}} min",
				"justNow": "Sincronizado ahora mismo",
				"localAction": "Guardar en local",
				"localTitle": "Confirma los cambios en el historial de git local de este vault. Este vault no tiene remoto, así que no se envía nada.",
				"syncing": "Sincronizando"
			},
			"title": "Notas",
			"trash": {
				"empty": "Todavía no se ha eliminado nada de este vault, así que no hay carpeta .trash.",
				"failed": "No se pudo abrir la carpeta: {{message}}",
				"open": "Abrir la carpeta .trash",
				"unsupported": "Abrir una carpeta no es compatible con este sistema."
			}
		} },
		api: { "client": {
			"proxy_challenge_framed": "Abre {{origin}} en una pestaña nueva: si aparece una página de inicio de sesión, la sesión de tu proxy de acceso expiró. Dentro de este panel no funciona. Inicia sesión allí y luego vuelve a cargar esta página.",
			"proxy_challenge_reload": "Vuelve a cargar esta pestaña del navegador: si aparece una página de inicio de sesión, la sesión de tu proxy de acceso expiró. Si no, un proxy o firewall delante de este panel rechazó la solicitud; revisa los registros del proxy o vuelve a intentarlo más tarde."
		} },
		nav: {
			"agent_capabilities": "Personalizar",
			"mcp_servers": "Servidores MCP"
		},
		pages: { "capabilitiesPage": {
			"knowledge_label": "Conocimiento",
			"skills_label": "Habilidades"
		} },
		components: { "readingWidthToggle": {
			"title_md": "Ancho medio",
			"title_full": "Ancho completo"
		} }
	},
	fr: {
		apps: { "mdNotebook": {
			"badge": {
				"deleting": "suppression",
				"pending": "en attente"
			},
			"banner": {
				"diskConflict": "Cette note a changé sur le disque depuis son ouverture.",
				"keepMine": "Conserver ma version",
				"staleBackend": "Le backend Notes exécute un code plus ancien que cette page — manquant : {{features}}. Désactivez puis réactivez Notes dans la page Applications pour le redémarrer.",
				"staleBackendRoute": "Le backend Notes exécute un code plus ancien que cette page. Désactivez puis réactivez Notes dans la page Apps pour le redémarrer.",
				"syncConflict": "La synchronisation s’est arrêtée sur un conflit de fusion, donc rien n’a été poussé. Notes en conflit : {{paths}}",
				"useDisk": "Utiliser la version du disque"
			},
			"body": {
				"backlinks": "Liée depuis {{n}}",
				"empty": "Sélectionnez une note, ou créez-en une avec le bouton +."
			},
			"boot": {
				"loading": "Chargement…",
				"unreachable": "Impossible de joindre le backend Notes : {{message}}. Il démarre peut-être encore."
			},
			"connect": {
				"attachAction": "Rattacher le dossier",
				"attachHelp": "Utilise un dossier git que vous avez déjà, sur place — sans seconde copie.",
				"attachNoRemoteHelp": "Pas de dépôt distant ? Cela fonctionne aussi — le coffre se comporte de la même façon et les notes restent sur cette machine.",
				"attachTab": "Rattacher un dossier",
				"attaching": "Rattachement…",
				"branch": "Branche",
				"cancel": "Annuler",
				"choose": "Choisir…",
				"choosing": "Sélection…",
				"cloneAction": "Connecter le coffre",
				"cloneHelp": "Clone un dépôt GitHub et conserve sa propre copie de travail.",
				"cloneTab": "Cloner un dépôt",
				"cloning": "Clonage…",
				"knowledgeFailed": "Coffre connecté, mais la synchronisation des connaissances a échoué : {{message}}",
				"localFolder": "Dossier local",
				"localFolderPlaceholder": "~/Developer/my-notes",
				"pickerFailed": "Impossible d’ouvrir le sélecteur de dossier : {{message}}",
				"pickerNeedsMac": "Le sélecteur de dossier nécessite macOS — saisissez le chemin.",
				"repoUrl": "URL du dépôt",
				"repoUrlPlaceholder": "https://github.com/you/notes",
				"subfolder": "Sous-dossier (facultatif)",
				"subfolderPlaceholder": "notes",
				"title": "Connecter un coffre",
				"token": "Jeton d’accès (facultatif)",
				"tokenPlaceholder": "github_pat_…"
			},
			"editor": {
				"blockAria": "Modifier le bloc",
				"renameHint": "Cliquez pour renommer cette note",
				"titleAria": "Titre de la note"
			},
			"header": {
				"view_raw": "Source Markdown",
				"view_rendered": "Rendu"
			},
			"knowledge": {
				"connectHelp": "Ajoute ce coffre à la bibliothèque de Connaissances pour que les agents puissent chercher dans vos notes. Modifiable ensuite dans {{capabilities}} → {{tab}}.",
				"label": "Synchroniser avec les connaissances {{productName}}"
			},
			"manifest": {
				"description": "Tiens un carnet en markdown qui vit dans un dépôt git, pour que tes notes soient versionnées, portables et lisibles par n’importe quel autre éditeur. Indique-lui un dépôt GitHub et il en clone une copie de travail, ou rattache un dossier que tu possèdes déjà — y compris un coffre Obsidian existant — et il adopte ce checkout sur place, sans en faire une seconde copie. Les notes s’affichent en texte mis en forme dans lequel tu cliques directement pour l’éditer, les [[wikilinks]] les relient entre elles, et chaque note montre ce qui pointe vers elle. La synchronisation commite, récupère et pousse en une seule étape, et un conflit de fusion est signalé — en listant les notes en conflit et en abandonnant la fusion — au lieu d’écraser quoi que ce soit.",
				"display_name": "Notes",
				"highlight_1": "Tes notes sont du markdown brut dans un dépôt git — aucun verrouillage, lisibles par Obsidian ou tout autre éditeur",
				"highlight_2": "Clone un dépôt GitHub comme coffre, ou rattache un dossier que tu possèdes déjà sans le copier",
				"highlight_3": "Clique sur n’importe quel bloc rendu pour l’éditer sur place ; Enter crée un nouveau bloc, Tab imbrique les listes",
				"highlight_4": "Des [[Wikilinks]] entre les notes, avec une liste de liens entrants indiquant ce qui pointe vers la note que tu lis",
				"highlight_5": "Recherche plein texte dans les titres et le contenu, plus des vues par dossier ou à plat avec six ordres de tri",
				"highlight_6": "La synchronisation en une étape commite, récupère et pousse ; un conflit de fusion liste les notes en conflit et n’écrase rien",
				"highlight_7": "Un enregistrement est refusé si le fichier a changé sur le disque depuis son ouverture, donc les modifications faites ailleurs ne sont jamais écrasées",
				"highlight_8": "Indexe si tu veux un coffre dans la bibliothèque Connaissances pour que les agents puissent chercher dans tes notes",
				"page_label": "Notes",
				"use_case_1": "Modifie un coffre Markdown portable avec wikilinks, backlinks, recherche, historique Git et indexation Knowledge facultative.",
				"configuration_1": "Clone un dépôt Git ou rattache un dossier local existant, puis active éventuellement Knowledge et la synchronisation planifiée ; les clones GitHub privés nécessitent un PAT ou une CLI gh authentifiée."
			},
			"panel": {
				"connectVault": "Connecter un coffre",
				"hide": "Masquer le panneau des notes",
				"newRootNote": "Nouvelle note au niveau supérieur",
				"noMatches": "Aucun résultat",
				"searchPlaceholder": "Rechercher des notes",
				"show": "Afficher le panneau des notes",
				"sortAndView": "Tri et affichage",
				"sortSection": "Trier par",
				"switchVault": "Changer de coffre",
				"vaults": "Coffres",
				"viewSection": "Affichage",
				"view_folders": "Dossiers",
				"view_list": "Liste simple"
			},
			"preview": {
				"detailsSummaryFallback": "Détails",
				"mermaidError": "Diagramme Mermaid invalide — sa source est affichée."
			},
			"row": {
				"delete": "Supprimer la note",
				"deleteAction": "Supprimer",
				"deleteConfirm": "Vous pouvez la restaurer depuis <trash>.trash</trash>. Les notes dans la corbeille ne sont pas synchronisées avec le dépôt distant.",
				"deleteTitle": "Déplacer « {{title}} » vers la corbeille ?",
				"duplicate": "Dupliquer la note",
				"pin": "Épingler la note",
				"rename": "Renommer la note",
				"renameField": "Nom de la note",
				"unpin": "Détacher la note"
			},
			"settings": {
				"active": "Actif",
				"authGh": "Utilise votre connexion GitHub CLI.",
				"authNone": "Aucun accès GitHub — ajoutez un jeton pour synchroniser des dépôts privés.",
				"authStored": "Utilise un jeton stocké dans cette application.",
				"autoCommit": "Enregistrement auto dans l'historique",
				"autoCommitHelp": "Valide vos modifications dans l'historique git local du coffre toutes les {{n}} minutes, pour ne jamais avoir à enregistrer à la main. Rien n'est poussé vers un dépôt distant.",
				"autoSync": "Synchronisation automatique",
				"autoSyncHelp": "Envoie vos modifications vers GitHub et récupère les dernières, sur une minuterie. Continue en arrière-plan lorsque Notes est fermé, tant que {{productName}} est ouvert. En pause tant qu’un conflit attend votre décision.",
				"badgeCloned": "Cloné",
				"badgeLocal": "Dossier local",
				"clear": "Effacer",
				"close": "Fermer les réglages",
				"every": "Toutes les",
				"githubSection": "Accès GitHub",
				"intervalAria": "Intervalle de synchronisation automatique en minutes",
				"knowledgeAdded": "Ajouté aux Connaissances.",
				"knowledgeAddedCount_one": "Ajouté aux Connaissances — {{n}} fichier en file d’indexation.",
				"knowledgeAddedCount_many": "Ajouté aux Connaissances — {{n}} de fichiers en file d’indexation.",
				"knowledgeAddedCount_other": "Ajouté aux Connaissances — {{n}} fichiers en file d’indexation.",
				"knowledgeAdding": "Ajout aux Connaissances…",
				"knowledgeIndexed": "Indexé dans la bibliothèque de Connaissances — les agents peuvent chercher dans ces notes.",
				"knowledgeNotIndexed": "Non indexé. Activez pour que les agents cherchent dans ce coffre.",
				"knowledgeRemoved": "Retiré des Connaissances.",
				"knowledgeRemoving": "Retrait des Connaissances…",
				"minutes": "minutes",
				"noRemote": "Aucun dépôt distant",
				"open": "Ouvrir",
				"prefsSaveFailed": "Impossible d’enregistrer le réglage de synchronisation : {{message}}",
				"recording": "Enregistrement…",
				"remove": "Retirer",
				"removeConfirm": "Retirer ce coffre de l’application ? Vos fichiers restent intacts sur le disque — seule la connexion est oubliée.",
				"removeFailed": "Impossible de retirer le coffre : {{message}}",
				"removeIt": "Le retirer",
				"reset": "Réinitialiser",
				"save": "Enregistrer",
				"shortcut": "Raccourci de synchronisation manuelle",
				"shortcutHelpIdle": "Cliquez pour enregistrer un nouveau raccourci.",
				"shortcutHelpRecording": "Appuyez sur les touches souhaitées — Échap pour annuler.",
				"shortcutNeedsModifier": "Utilisez au moins ⌘, Ctrl ou ⌥ — une simple lettre se déclencherait pendant la saisie.",
				"subtitle": "Coffres, accès GitHub et synchronisation",
				"syncSection": "Synchronisation",
				"title": "Réglages",
				"tokenCleared": "Jeton effacé.",
				"tokenClearFailed": "Impossible d’effacer le jeton : {{message}}",
				"tokenPlaceholderEmpty": "github_pat_…",
				"tokenPlaceholderStored": "Remplacer le jeton stocké…",
				"tokenSaved": "Jeton enregistré.",
				"tokenSaveFailed": "Impossible d’enregistrer le jeton : {{message}}",
				"vaultsSection": "Coffres"
			},
			"sort": {
				"createdNewOld": "Création — du plus récent au plus ancien",
				"createdOldNew": "Création — du plus ancien au plus récent",
				"modifiedNewOld": "Modification — du plus récent au plus ancien",
				"modifiedOldNew": "Modification — du plus ancien au plus récent",
				"nameAZ": "Nom de fichier — de A à Z",
				"nameZA": "Nom de fichier — de Z à A"
			},
			"sync": {
				"action": "Synchroniser",
				"ago_d": "Synchronisé il y a {{n}} j",
				"ago_h": "Synchronisé il y a {{n}} h",
				"ago_m": "Synchronisé il y a {{n}} min",
				"justNow": "Synchronisé à l’instant",
				"localAction": "Enregistrer en local",
				"localTitle": "Valider les modifications dans l'historique git local de ce coffre. Ce coffre n'a pas de dépôt distant, rien n'est donc poussé.",
				"syncing": "Synchronisation"
			},
			"title": "Notes",
			"trash": {
				"empty": "Rien n'a encore été supprimé de ce coffre, il n'y a donc pas de dossier .trash.",
				"failed": "Impossible d'ouvrir le dossier : {{message}}",
				"open": "Ouvrir le dossier .trash",
				"unsupported": "L'ouverture d'un dossier n'est pas prise en charge sur ce système."
			}
		} },
		api: { "client": {
			"proxy_challenge_framed": "Ouvre {{origin}} dans un nouvel onglet : si une page de connexion apparaît, la session de ton proxy d'accès a expiré. La connexion ne fonctionne pas dans ce panneau. Connecte-toi là-bas, puis recharge cette page.",
			"proxy_challenge_reload": "Recharge cet onglet du navigateur : si une page de connexion apparaît, la session de ton proxy d'accès a expiré. Sinon, un proxy ou un pare-feu devant ce tableau de bord a refusé la requête ; consulte les journaux du proxy ou réessaie plus tard."
		} },
		nav: {
			"agent_capabilities": "Personnaliser",
			"mcp_servers": "Serveurs MCP"
		},
		pages: { "capabilitiesPage": {
			"knowledge_label": "Connaissances",
			"skills_label": "Compétences"
		} },
		components: { "readingWidthToggle": {
			"title_md": "Largeur moyenne",
			"title_full": "Pleine largeur"
		} }
	},
	hi: {
		apps: /* @__PURE__ */ JSON.parse("{\"mdNotebook\":{\"badge\":{\"deleting\":\"हटाया जा रहा है\",\"pending\":\"लंबित\"},\"banner\":{\"diskConflict\":\"खोलने के बाद यह नोट डिस्क पर बदल गया है.\",\"keepMine\":\"मेरा संस्करण रखें\",\"staleBackend\":\"नोट्स बैकएंड इस पृष्ठ से पुराना कोड चला रहा है — अनुपलब्ध: {{features}}. इसे पुनः आरंभ करने के लिए ऐप्स पृष्ठ में नोट्स बंद करके चालू करें.\",\"staleBackendRoute\":\"नोट्स बैकएंड इस पेज से पुराना कोड चला रहा है। इसे पुनरारंभ करने के लिए Apps पेज में नोट्स को बंद करके फिर से चालू करें।\",\"syncConflict\":\"मर्ज कॉन्फ़्लिक्ट के कारण सिंक रुक गया, इसलिए कुछ भी पुश नहीं हुआ। कॉन्फ़्लिक्ट वाले नोट्स: {{paths}}\",\"useDisk\":\"डिस्क वाला संस्करण उपयोग करें\"},\"body\":{\"backlinks\":\"{{n}} से लिंक किया गया\",\"empty\":\"कोई नोट चुनें, या + बटन से नया बनाएँ.\"},\"boot\":{\"loading\":\"लोड हो रहा है…\",\"unreachable\":\"नोट्स बैकएंड तक नहीं पहुँच सके: {{message}}. यह अभी शुरू हो रहा हो सकता है.\"},\"connect\":{\"attachAction\":\"फ़ोल्डर जोड़ें\",\"attachHelp\":\"पहले से मौजूद git फ़ोल्डर को उसी जगह उपयोग करता है — दूसरी प्रति नहीं.\",\"attachNoRemoteHelp\":\"git रिमोट नहीं है? यह भी चलेगा — वॉल्ट वैसे ही काम करता है और नोट्स इसी मशीन पर रहते हैं।\",\"attachTab\":\"फ़ोल्डर जोड़ें\",\"attaching\":\"जोड़ा जा रहा है…\",\"branch\":\"ब्रांच\",\"cancel\":\"रद्द करें\",\"choose\":\"चुनें…\",\"choosing\":\"चुन रहे हैं…\",\"cloneAction\":\"वॉल्ट जोड़ें\",\"cloneHelp\":\"GitHub रिपॉज़िटरी क्लोन करता है और अपनी कार्य-प्रति रखता है.\",\"cloneTab\":\"रिपॉज़िटरी क्लोन करें\",\"cloning\":\"क्लोन हो रहा है…\",\"knowledgeFailed\":\"वॉल्ट जुड़ गया, लेकिन ज्ञान सिंक असफल रहा: {{message}}\",\"localFolder\":\"स्थानीय फ़ोल्डर\",\"localFolderPlaceholder\":\"~/Developer/my-notes\",\"pickerFailed\":\"फ़ोल्डर चयनकर्ता नहीं खुल सका: {{message}}\",\"pickerNeedsMac\":\"फ़ोल्डर चयनकर्ता के लिए macOS आवश्यक है — पथ टाइप करें.\",\"repoUrl\":\"रिपॉज़िटरी URL\",\"repoUrlPlaceholder\":\"https://github.com/you/notes\",\"subfolder\":\"सबफ़ोल्डर (वैकल्पिक)\",\"subfolderPlaceholder\":\"notes\",\"title\":\"वॉल्ट जोड़ें\",\"token\":\"एक्सेस टोकन (वैकल्पिक)\",\"tokenPlaceholder\":\"github_pat_…\"},\"editor\":{\"blockAria\":\"ब्लॉक संपादित करें\",\"renameHint\":\"इस नोट का नाम बदलने के लिए क्लिक करें\",\"titleAria\":\"नोट शीर्षक\"},\"header\":{\"view_raw\":\"Markdown स्रोत\",\"view_rendered\":\"रेंडर किया गया\"},\"knowledge\":{\"connectHelp\":\"इस वॉल्ट को ज्ञान लाइब्रेरी में जोड़ता है, ताकि एजेंट इन नोट्स को खोज सकें. इसे बाद में {{capabilities}} → {{tab}} में बदला जा सकता है.\",\"label\":\"{{productName}} ज्ञान से सिंक करें\"},\"manifest\":{\"description\":\"एक markdown नोटबुक रखो जो git रिपॉज़िटरी में रहती है, ताकि तुम्हारे नोट्स वर्शन में रहें, कहीं भी ले जाए जा सकें और किसी भी दूसरे एडिटर में पढ़े जा सकें। इसे किसी GitHub रिपो पर लगाओ और यह वर्किंग कॉपी क्लोन कर लेता है, या पहले से मौजूद कोई फ़ोल्डर जोड़ो — जिसमें कोई पुराना Obsidian वॉल्ट भी शामिल है — और यह उस चेकआउट को वहीं अपना लेता है, दूसरी कॉपी बनाए बिना। नोट्स फ़ॉर्मैट किए टेक्स्ट के रूप में रेंडर होते हैं जिन पर सीधे क्लिक करके संपादन किया जा सकता है, [[wikilinks]] उन्हें जोड़ते हैं, और हर नोट दिखाता है कि उससे कौन जुड़ा है। सिंक एक ही कदम में कमिट, पुल और पुश करता है, और मर्ज कॉन्फ़्लिक्ट होने पर कुछ भी ऊपर लिखने की जगह उसकी सूचना दी जाती है — टकराव वाले नोट्स गिनाकर और मर्ज रोककर।\",\"display_name\":\"नोट्स\",\"use_case_1\":\"wikilink, backlink, खोज, Git इतिहास और वैकल्पिक Knowledge indexing वाला पोर्टेबल Markdown vault संपादित करें।\",\"configuration_1\":\"Git रिपॉज़िटरी clone करें या मौजूदा लोकल फ़ोल्डर जोड़ें, फिर चाहें तो Knowledge और scheduled sync सक्षम करें; निजी GitHub clone के लिए PAT या प्रमाणित gh चाहिए।\",\"highlight_1\":\"तुम्हारे नोट्स git रिपो में सादा markdown हैं — कोई लॉक-इन नहीं, Obsidian या किसी भी एडिटर में पढ़े जा सकते हैं\",\"highlight_2\":\"किसी GitHub रिपो को वॉल्ट के रूप में क्लोन करो, या पहले से मौजूद फ़ोल्डर बिना कॉपी किए जोड़ो\",\"highlight_3\":\"किसी भी रेंडर हुए ब्लॉक पर क्लिक करके उसे वहीं संपादित करो; Enter नया ब्लॉक शुरू करता है, Tab सूची को अंदर ले जाता है\",\"highlight_4\":\"नोट्स के बीच [[Wikilinks]], और बैकलिंक सूची दिखाती है कि जो नोट तुम पढ़ रहे हो उस पर कौन इशारा करता है\",\"highlight_5\":\"शीर्षक और सामग्री में पूर्ण-पाठ खोज, साथ में छह क्रम विकल्पों वाले फ़ोल्डर और सपाट व्यू\",\"highlight_6\":\"एक कदम वाला सिंक कमिट, पुल और पुश करता है; मर्ज कॉन्फ़्लिक्ट टकराव वाले नोट्स गिनाता है और कुछ भी ऊपर नहीं लिखता\",\"highlight_7\":\"अगर फ़ाइल खोलने के बाद डिस्क पर बदल गई हो तो सेव मना कर दिया जाता है, ताकि कहीं और किए बदलाव कभी न मिटें\",\"highlight_8\":\"चाहो तो किसी वॉल्ट को Knowledge लाइब्रेरी में इंडेक्स करो, ताकि एजेंट तुम्हारे नोट्स खोज सकें\",\"page_label\":\"नोट्स\"},\"panel\":{\"connectVault\":\"वॉल्ट जोड़ें\",\"hide\":\"नोट्स पैनल छिपाएँ\",\"newRootNote\":\"शीर्ष स्तर पर नया नोट\",\"noMatches\":\"कोई मिलान नहीं\",\"searchPlaceholder\":\"नोट्स खोजें\",\"show\":\"नोट्स पैनल दिखाएँ\",\"sortAndView\":\"क्रम और दृश्य\",\"sortSection\":\"इससे क्रमबद्ध करें\",\"switchVault\":\"वॉल्ट बदलें\",\"vaults\":\"वॉल्ट\",\"viewSection\":\"दृश्य\",\"view_folders\":\"फ़ोल्डर\",\"view_list\":\"सपाट सूची\"},\"preview\":{\"detailsSummaryFallback\":\"विवरण\",\"mermaidError\":\"अमान्य Mermaid आरेख — स्रोत दिखाया जा रहा है।\"},\"row\":{\"delete\":\"नोट हटाएँ\",\"deleteAction\":\"हटाएँ\",\"deleteConfirm\":\"तुम इसे <trash>.trash</trash> से वापस ला सकते हो। ट्रैश में रखे नोट रिमोट के साथ सिंक नहीं होते।\",\"deleteTitle\":\"“{{title}}” को ट्रैश में ले जाएँ?\",\"duplicate\":\"नोट की प्रतिलिपि बनाएँ\",\"pin\":\"नोट पिन करें\",\"rename\":\"नोट का नाम बदलें\",\"renameField\":\"नोट का नाम\",\"unpin\":\"नोट अनपिन करें\"},\"settings\":{\"active\":\"सक्रिय\",\"authGh\":\"GitHub CLI लॉगिन का उपयोग हो रहा है.\",\"authNone\":\"GitHub पहुँच नहीं — निजी रिपॉज़िटरी सिंक करने के लिए टोकन जोड़ें.\",\"authStored\":\"इस ऐप में संग्रहीत टोकन का उपयोग हो रहा है.\",\"autoCommit\":\"हिस्ट्री में ऑटो-सेव\",\"autoCommitHelp\":\"हर {{n}} मिनट में तुम्हारे बदलाव वॉल्ट की स्थानीय git हिस्ट्री में कमिट करता है, ताकि हाथ से सेव करने की ज़रूरत न पड़े। किसी रिमोट पर कुछ भी पुश नहीं होता।\",\"autoSync\":\"स्वतः सिंक\",\"autoSyncHelp\":\"टाइमर पर परिवर्तन GitHub को भेजता है और नवीनतम लाता है. Notes बंद होने पर भी, जब तक {{productName}} चालू है, पृष्ठभूमि में चलता रहता है. जब किसी विरोध पर निर्णय चाहिए, तब रुका रहता है.\",\"badgeCloned\":\"क्लोन किया\",\"badgeLocal\":\"स्थानीय फ़ोल्डर\",\"clear\":\"साफ़ करें\",\"close\":\"सेटिंग्स बंद करें\",\"every\":\"हर\",\"githubSection\":\"GitHub पहुँच\",\"intervalAria\":\"स्वतः सिंक अंतराल (मिनट)\",\"knowledgeAdded\":\"ज्ञान में जोड़ा गया.\",\"knowledgeAddedCount_one\":\"ज्ञान में जोड़ा गया — {{n}} फ़ाइल अनुक्रमण के लिए कतार में।\",\"knowledgeAddedCount_other\":\"ज्ञान में जोड़ा गया — {{n}} फ़ाइलें अनुक्रमण के लिए कतार में।\",\"knowledgeAdding\":\"ज्ञान में जोड़ा जा रहा है…\",\"knowledgeIndexed\":\"ज्ञान लाइब्रेरी में अनुक्रमित — एजेंट इन नोट्स को खोज सकते हैं.\",\"knowledgeNotIndexed\":\"अनुक्रमित नहीं. एजेंट को इस वॉल्ट में खोजने देने के लिए चालू करें.\",\"knowledgeRemoved\":\"ज्ञान से हटाया गया.\",\"knowledgeRemoving\":\"ज्ञान से हटाया जा रहा है…\",\"minutes\":\"मिनट\",\"noRemote\":\"कोई रिमोट नहीं\",\"open\":\"खोलें\",\"prefsSaveFailed\":\"सिंक सेटिंग सहेजी नहीं जा सकी: {{message}}\",\"recording\":\"रिकॉर्डिंग…\",\"remove\":\"हटाएँ\",\"removeConfirm\":\"इस वॉल्ट को ऐप से हटाना है? डिस्क पर फ़ाइलें अछूती रहती हैं — केवल कनेक्शन भुला दिया जाता है.\",\"removeFailed\":\"वॉल्ट हटाया नहीं जा सका: {{message}}\",\"removeIt\":\"हटा दें\",\"reset\":\"रीसेट\",\"save\":\"सहेजें\",\"shortcut\":\"मैनुअल सिंक शॉर्टकट\",\"shortcutHelpIdle\":\"नया शॉर्टकट रिकॉर्ड करने के लिए क्लिक करें.\",\"shortcutHelpRecording\":\"जो कुंजियाँ चाहिए वे दबाएँ — रद्द करने के लिए Esc.\",\"shortcutNeedsModifier\":\"कम से कम ⌘, Ctrl या ⌥ में से एक का प्रयोग करें — केवल अक्षर टाइप करते समय चल जाएगा.\",\"subtitle\":\"वॉल्ट, GitHub पहुँच और सिंक\",\"syncSection\":\"सिंक\",\"title\":\"सेटिंग्स\",\"tokenCleared\":\"टोकन साफ़ किया गया.\",\"tokenClearFailed\":\"टोकन साफ़ नहीं किया जा सका: {{message}}\",\"tokenPlaceholderEmpty\":\"github_pat_…\",\"tokenPlaceholderStored\":\"संग्रहीत टोकन बदलें…\",\"tokenSaved\":\"टोकन सहेजा गया.\",\"tokenSaveFailed\":\"टोकन सहेजा नहीं जा सका: {{message}}\",\"vaultsSection\":\"वॉल्ट\"},\"sort\":{\"createdNewOld\":\"बनाया — नए से पुराने\",\"createdOldNew\":\"बनाया — पुराने से नए\",\"modifiedNewOld\":\"संशोधित — नए से पुराने\",\"modifiedOldNew\":\"संशोधित — पुराने से नए\",\"nameAZ\":\"फ़ाइल नाम — A से Z\",\"nameZA\":\"फ़ाइल नाम — Z से A\"},\"sync\":{\"action\":\"सिंक करें\",\"ago_d\":\"{{n}} दिन पहले सिंक हुआ\",\"ago_h\":\"{{n}} घंटे पहले सिंक हुआ\",\"ago_m\":\"{{n}} मिनट पहले सिंक हुआ\",\"justNow\":\"अभी सिंक हुआ\",\"localAction\":\"स्थानीय रूप से सहेजें\",\"localTitle\":\"बदलावों को इस वॉल्ट की स्थानीय git हिस्ट्री में कमिट करें। इस वॉल्ट का कोई रिमोट नहीं है, इसलिए कुछ भी पुश नहीं किया जाता।\",\"syncing\":\"सिंक हो रहा है\"},\"title\":\"नोट्स\",\"trash\":{\"empty\":\"इस वॉल्ट से अभी तक कुछ भी नहीं हटाया गया है, इसलिए कोई .trash फ़ोल्डर नहीं है।\",\"failed\":\"फ़ोल्डर नहीं खुल सका: {{message}}\",\"open\":\".trash फ़ोल्डर खोलें\",\"unsupported\":\"इस सिस्टम पर फ़ोल्डर खोलना समर्थित नहीं है।\"}}}"),
		api: { "client": {
			"proxy_challenge_framed": "{{origin}} को नए टैब में खोलो — अगर साइन-इन पेज दिखे, तो एक्सेस प्रॉक्सी का सत्र समाप्त हो गया है। इस पैनल के अंदर साइन इन नहीं होगा। वहाँ साइन इन करो, फिर इस पेज को रीलोड करो।",
			"proxy_challenge_reload": "इस ब्राउज़र टैब को रीलोड करो — अगर साइन-इन पेज दिखे, तो एक्सेस प्रॉक्सी का सत्र समाप्त हो गया है। नहीं दिखे तो इस डैशबोर्ड के आगे लगे प्रॉक्सी या फ़ायरवॉल ने अनुरोध ठुकरा दिया; प्रॉक्सी के लॉग देखो, या बाद में फिर कोशिश करो।"
		} },
		nav: {
			"agent_capabilities": "कस्टमाइज़",
			"mcp_servers": "MCP सर्वर"
		},
		pages: { "capabilitiesPage": {
			"knowledge_label": "नॉलेज",
			"skills_label": "स्किल्स"
		} },
		components: { "readingWidthToggle": {
			"title_md": "मध्यम चौड़ाई",
			"title_full": "पूरी चौड़ाई"
		} }
	},
	it: {
		apps: { "mdNotebook": {
			"badge": {
				"deleting": "eliminazione",
				"pending": "in attesa"
			},
			"banner": {
				"diskConflict": "Questa nota è cambiata su disco da quando l’hai aperta.",
				"keepMine": "Mantieni la mia versione",
				"staleBackend": "Il backend di Note esegue codice più vecchio di questa pagina — manca: {{features}}. Disattiva e riattiva Note nella pagina App per riavviarlo.",
				"staleBackendRoute": "Il backend di Note esegue codice più vecchio di questa pagina. Disattiva e riattiva Note nella pagina App per riavviarlo.",
				"syncConflict": "La sincronizzazione si è fermata per un conflitto di merge, quindi non è stato inviato nulla. Note in conflitto: {{paths}}",
				"useDisk": "Usa la versione su disco"
			},
			"body": {
				"backlinks": "Collegata da {{n}}",
				"empty": "Seleziona una nota o creane una con il pulsante +."
			},
			"boot": {
				"loading": "Caricamento…",
				"unreachable": "Impossibile raggiungere il backend di Note: {{message}}. Potrebbe essere ancora in avvio."
			},
			"connect": {
				"attachAction": "Allega cartella",
				"attachHelp": "Usa una cartella git che hai già, sul posto — senza una seconda copia.",
				"attachNoRemoteHelp": "Nessun remoto git? Va bene comunque: il vault funziona allo stesso modo e le note restano su questo computer.",
				"attachTab": "Allega una cartella",
				"attaching": "Collegamento…",
				"branch": "Ramo",
				"cancel": "Annulla",
				"choose": "Scegli…",
				"choosing": "Selezione…",
				"cloneAction": "Collega vault",
				"cloneHelp": "Clona un repository GitHub e mantiene una propria copia di lavoro.",
				"cloneTab": "Clona un repository",
				"cloning": "Clonazione…",
				"knowledgeFailed": "Vault collegato, ma la sincronizzazione della conoscenza è fallita: {{message}}",
				"localFolder": "Cartella locale",
				"localFolderPlaceholder": "~/Developer/my-notes",
				"pickerFailed": "Impossibile aprire il selettore di cartelle: {{message}}",
				"pickerNeedsMac": "Il selettore di cartelle richiede macOS — digita il percorso.",
				"repoUrl": "URL del repository",
				"repoUrlPlaceholder": "https://github.com/you/notes",
				"subfolder": "Sottocartella (opzionale)",
				"subfolderPlaceholder": "notes",
				"title": "Collega un vault",
				"token": "Token di accesso (opzionale)",
				"tokenPlaceholder": "github_pat_…"
			},
			"editor": {
				"blockAria": "Modifica blocco",
				"renameHint": "Fai clic per rinominare questa nota",
				"titleAria": "Titolo della nota"
			},
			"header": {
				"view_raw": "Sorgente Markdown",
				"view_rendered": "Renderizzato"
			},
			"knowledge": {
				"connectHelp": "Aggiunge questo vault alla libreria Conoscenza così gli agenti possono cercare nelle tue note. Modificabile poi in {{capabilities}} → {{tab}}.",
				"label": "Sincronizza con la conoscenza di {{productName}}"
			},
			"manifest": {
				"description": "Tieni un blocco note in markdown che vive in un repository git, così le tue note sono versionate, portabili e leggibili da qualsiasi altro editor. Indicagli un repo GitHub e ne clona una copia di lavoro, oppure collega una cartella che hai già — anche un vault Obsidian esistente — e adotta quel checkout dov’è, senza farne una seconda copia. Le note sono rese come testo formattato su cui puoi cliccare per modificarle subito, i [[wikilinks]] le collegano e ogni nota mostra quali altre note la richiamano. La sincronizzazione fa commit, pull e push in un unico passaggio, e un conflitto di merge viene segnalato — elencando le note in conflitto e annullando il merge — invece di sovrascrivere qualcosa.",
				"display_name": "Note",
				"highlight_1": "Le tue note sono semplice markdown in un repo git — nessun vincolo, leggibili da Obsidian o da qualsiasi editor",
				"highlight_2": "Clona un repo GitHub come vault, oppure collega una cartella che hai già senza copiarla",
				"highlight_3": "Clicca un blocco già formattato per modificarlo sul posto; Enter apre un nuovo blocco, Tab annida gli elenchi",
				"highlight_4": "[[Wikilinks]] tra le note, con un elenco di backlink che mostra cosa punta alla nota che stai leggendo",
				"highlight_5": "Ricerca full-text su titoli e contenuti, più viste a cartelle o piatta con sei criteri di ordinamento",
				"highlight_6": "La sincronizzazione in un passaggio fa commit, pull e push; un conflitto di merge elenca le note in conflitto e non sovrascrive nulla",
				"highlight_7": "Un salvataggio viene rifiutato se il file è cambiato su disco da quando l’hai aperto, così le modifiche fatte altrove non vengono mai schiacciate",
				"highlight_8": "Se vuoi, indicizza un vault nella libreria Conoscenza così gli agenti possono cercare nelle tue note",
				"page_label": "Note",
				"use_case_1": "Modifica un vault Markdown portabile con wikilink, backlink, ricerca, cronologia Git e indicizzazione Knowledge opzionale.",
				"configuration_1": "Clona un repository Git o collega una cartella locale esistente, quindi abilita facoltativamente Knowledge e la sincronizzazione pianificata; i cloni GitHub privati richiedono un PAT o gh autenticato."
			},
			"panel": {
				"connectVault": "Collega un vault",
				"hide": "Nascondi il pannello note",
				"newRootNote": "Nuova nota al livello superiore",
				"noMatches": "Nessun risultato",
				"searchPlaceholder": "Cerca nelle note",
				"show": "Mostra il pannello note",
				"sortAndView": "Ordine e vista",
				"sortSection": "Ordina per",
				"switchVault": "Cambia vault",
				"vaults": "Vault",
				"viewSection": "Vista",
				"view_folders": "Cartelle",
				"view_list": "Elenco semplice"
			},
			"preview": {
				"detailsSummaryFallback": "Dettagli",
				"mermaidError": "Diagramma Mermaid non valido: viene mostrato il codice sorgente."
			},
			"row": {
				"delete": "Elimina la nota",
				"deleteAction": "Elimina",
				"deleteConfirm": "Puoi ripristinarla da <trash>.trash</trash>. Le note nel cestino non vengono sincronizzate con il remoto.",
				"deleteTitle": "Spostare «{{title}}» nel cestino?",
				"duplicate": "Duplica la nota",
				"pin": "Fissa la nota",
				"rename": "Rinomina la nota",
				"renameField": "Nome della nota",
				"unpin": "Rimuovi la nota fissata"
			},
			"settings": {
				"active": "Attivo",
				"authGh": "Usa il tuo accesso GitHub CLI.",
				"authNone": "Nessun accesso GitHub: aggiungi un token per sincronizzare repository privati.",
				"authStored": "Usa un token salvato in questa app.",
				"autoCommit": "Salvataggio automatico nella cronologia",
				"autoCommitHelp": "Esegue il commit delle tue modifiche nella cronologia git locale del vault ogni {{n}} minuti, così non devi mai salvare a mano. Nulla viene inviato a un remoto.",
				"autoSync": "Sincronizzazione automatica",
				"autoSyncHelp": "Invia le tue modifiche a GitHub e scarica le ultime, a intervalli. Continua in background quando Notes è chiuso, purché {{productName}} sia aperto. In pausa finché un conflitto richiede una tua decisione.",
				"badgeCloned": "Clonato",
				"badgeLocal": "Cartella locale",
				"clear": "Cancella",
				"close": "Chiudi le impostazioni",
				"every": "Ogni",
				"githubSection": "Accesso GitHub",
				"intervalAria": "Intervallo di sincronizzazione automatica in minuti",
				"knowledgeAdded": "Aggiunto a Conoscenza.",
				"knowledgeAddedCount_one": "Aggiunto a Conoscenza: {{n}} file in coda per l’indicizzazione.",
				"knowledgeAddedCount_many": "Aggiunto a Conoscenza: {{n}} di file in coda per l’indicizzazione.",
				"knowledgeAddedCount_other": "Aggiunto a Conoscenza: {{n}} file in coda per l’indicizzazione.",
				"knowledgeAdding": "Aggiunta a Conoscenza…",
				"knowledgeIndexed": "Indicizzato nella libreria Conoscenza: gli agenti possono cercare in queste note.",
				"knowledgeNotIndexed": "Non indicizzato. Attiva per permettere agli agenti di cercare in questo vault.",
				"knowledgeRemoved": "Rimosso da Conoscenza.",
				"knowledgeRemoving": "Rimozione da Conoscenza…",
				"minutes": "minuti",
				"noRemote": "Nessun remoto",
				"open": "Apri",
				"prefsSaveFailed": "Impossibile salvare l’impostazione di sincronizzazione: {{message}}",
				"recording": "Registrazione…",
				"remove": "Rimuovi",
				"removeConfirm": "Rimuovere questo vault dall’app? I file restano intatti sul disco: viene dimenticata solo la connessione.",
				"removeFailed": "Impossibile rimuovere il vault: {{message}}",
				"removeIt": "Rimuovilo",
				"reset": "Reimposta",
				"save": "Salva",
				"shortcut": "Scorciatoia di sincronizzazione manuale",
				"shortcutHelpIdle": "Fai clic per registrare una nuova scorciatoia.",
				"shortcutHelpRecording": "Premi i tasti da usare — Esc per annullare.",
				"shortcutNeedsModifier": "Usa almeno ⌘, Ctrl o ⌥: una lettera sola scatterebbe durante la scrittura.",
				"subtitle": "Vault, accesso GitHub e sincronizzazione",
				"syncSection": "Sincronizzazione",
				"title": "Impostazioni",
				"tokenCleared": "Token cancellato.",
				"tokenClearFailed": "Impossibile cancellare il token: {{message}}",
				"tokenPlaceholderEmpty": "github_pat_…",
				"tokenPlaceholderStored": "Sostituisci il token salvato…",
				"tokenSaved": "Token salvato.",
				"tokenSaveFailed": "Impossibile salvare il token: {{message}}",
				"vaultsSection": "Vault"
			},
			"sort": {
				"createdNewOld": "Creazione — dal più recente",
				"createdOldNew": "Creazione — dal meno recente",
				"modifiedNewOld": "Modifica — dal più recente",
				"modifiedOldNew": "Modifica — dal meno recente",
				"nameAZ": "Nome file — dalla A alla Z",
				"nameZA": "Nome file — dalla Z alla A"
			},
			"sync": {
				"action": "Sincronizza",
				"ago_d": "Sincronizzato {{n}} g fa",
				"ago_h": "Sincronizzato {{n}} h fa",
				"ago_m": "Sincronizzato {{n}} min fa",
				"justNow": "Sincronizzato ora",
				"localAction": "Salva in locale",
				"localTitle": "Esegue il commit delle modifiche nella cronologia git locale di questo vault. Questo vault non ha un remoto, quindi non viene inviato nulla.",
				"syncing": "Sincronizzazione"
			},
			"title": "Note",
			"trash": {
				"empty": "Da questo vault non è ancora stato eliminato nulla, quindi non esiste una cartella .trash.",
				"failed": "Impossibile aprire la cartella: {{message}}",
				"open": "Apri la cartella .trash",
				"unsupported": "L'apertura di una cartella non è supportata su questo sistema."
			}
		} },
		api: { "client": {
			"proxy_challenge_framed": "Apri {{origin}} in una nuova scheda: se compare una pagina di accesso, la sessione del tuo proxy di accesso è scaduta. Dentro questo pannello non funziona. Accedi lì, poi ricarica questa pagina.",
			"proxy_challenge_reload": "Ricarica questa scheda del browser: se compare una pagina di accesso, la sessione del tuo proxy di accesso è scaduta. Altrimenti un proxy o un firewall davanti a questa dashboard ha rifiutato la richiesta; controlla i log del proxy oppure riprova più tardi."
		} },
		nav: {
			"agent_capabilities": "Personalizza",
			"mcp_servers": "Server MCP"
		},
		pages: { "capabilitiesPage": {
			"knowledge_label": "Conoscenza",
			"skills_label": "Competenze"
		} },
		components: { "readingWidthToggle": {
			"title_md": "Larghezza media",
			"title_full": "Larghezza intera"
		} }
	},
	ja: {
		apps: /* @__PURE__ */ JSON.parse("{\"mdNotebook\":{\"badge\":{\"deleting\":\"削除中\",\"pending\":\"保留中\"},\"banner\":{\"diskConflict\":\"このノートは開いてから、ディスク上で変更されました。\",\"keepMine\":\"自分のバージョンを保持\",\"staleBackend\":\"ノートバックエンド が実行しているコードがこのページより古い。不足している: {{features}}。アプリページの ノート をオフ/オンにしてバックエンドを再起動してください。\",\"staleBackendRoute\":\"ノートバックエンド が実行しているコードがこのページより古い。アプリページの ノート をオフ/オンにしてバックエンドを再起動してください。\",\"syncConflict\":\"マージ競合で同期が停止したため、何もプッシュされませんでした。競合するノート: {{paths}}\",\"useDisk\":\"ディスク上のバージョンを使用\"},\"body\":{\"backlinks\":\"{{n}}からリンク済み\",\"empty\":\"ノートを選択するか、+ ボタンで新規作成してください。\"},\"boot\":{\"loading\":\"読み込み中…\",\"unreachable\":\"ノートバックエンド に接続できませんでした: {{message}}。まだ起動中の可能性があります。\"},\"connect\":{\"attachAction\":\"フォルダーを接続\",\"attachHelp\":\"既存の git フォルダーを使用します。2 番目のコピーは作成されません。\",\"attachNoRemoteHelp\":\"git リモートなし？ それでも動作します。ボールトは同じように動作し、ノートはこのマシンに保存されます。\",\"attachTab\":\"フォルダーを接続\",\"attaching\":\"接続中…\",\"branch\":\"ブランチ\",\"cancel\":\"キャンセル\",\"choose\":\"選択…\",\"choosing\":\"選択中…\",\"cloneAction\":\"ボールトを接続\",\"cloneHelp\":\"GitHub リポジトリをクローンし、独自の作業コピーを保持します。\",\"cloneTab\":\"リポジトリをクローン\",\"cloning\":\"クローン中…\",\"knowledgeFailed\":\"ボールトが接続されましたが、知識の同期に失敗しました: {{message}}\",\"localFolder\":\"ローカルフォルダー\",\"localFolderPlaceholder\":\"~/Developer/my-notes\",\"pickerFailed\":\"フォルダーピッカーを開くことができませんでした: {{message}}\",\"pickerNeedsMac\":\"フォルダーピッカーには macOS が必要です。代わりにパスを入力してください。\",\"repoUrl\":\"リポジトリ URL\",\"repoUrlPlaceholder\":\"https://github.com/you/notes\",\"subfolder\":\"サブフォルダー (オプション)\",\"subfolderPlaceholder\":\"notes\",\"title\":\"ボールトを接続\",\"token\":\"アクセストークン (オプション)\",\"tokenPlaceholder\":\"github_pat_…\"},\"editor\":{\"blockAria\":\"ブロックの編集\",\"renameHint\":\"クリックしてこのノートの名前を変更\",\"titleAria\":\"ノートタイトル\"},\"header\":{\"view_raw\":\"Markdown ソース\",\"view_rendered\":\"レンダリング済み\"},\"knowledge\":{\"connectHelp\":\"このボールトを知識ライブラリに追加して、エージェントがノートを検索できるようにします。これは後で{{capabilities}} → {{tab}}で変更できます。\",\"label\":\"{{productName}} ナレッジと同期\"},\"manifest\":{\"use_case_1\":\"wikilink、バックリンク、検索、Git 履歴、任意の Knowledge インデックス機能を備えた、持ち運び可能な Markdown ボールトを編集します。\",\"configuration_1\":\"Git リポジトリをクローンするか既存のローカルフォルダーを接続し、必要に応じて Knowledge と定期同期を有効にします。非公開 GitHub リポジトリのクローンには PAT または認証済みの gh が必要です。\",\"description\":\"git リポジトリに置かれたマークダウンノートブックを保持してください。ノートはバージョン管理され、ポータブルで、他のエディタで読み取り可能です。GitHub リポジトリを指すと、作業コピーがクローンされるか、既存のフォルダーを接続します。既存の Obsidian ボールトなどを含む。フォルダーは 2 番目のコピーを作成せずにその場で採用されます。ノートは、クリックしてすぐに編集できるフォーマット済みテキストとしてレンダリングされます。[[wikilinks]] はそれらを接続し、すべてのノートは何がそれにリンクバックしているかを示します。同期は 1 つのステップでコミット、プル、プッシュを行い、マージ競合は何かを上書きするのではなく、競合するノートを一覧に表示し、マージを中止して報告されます。\",\"display_name\":\"ノート\",\"highlight_1\":\"ノートはプレーンマークダウン git リポジトリ内にあります。ロックイン不要、Obsidian または任意のエディタで読み取り可能\",\"highlight_2\":\"GitHub リポジトリをボールトとしてクローンするか、既存のフォルダーを接続してコピーせずに使用\",\"highlight_3\":\"レンダリングされた任意のブロックをクリックしてその場で編集。Enter で新しいブロックを開始、Tab でリストをネスト\",\"highlight_4\":\"[[wikilinks]] ノート間で、ノートを指しているものを示すバックリンクリストを表示\",\"highlight_5\":\"タイトルとコンテンツ全体を検索でき、フォルダービューとフラットビューの6種類のソート順序に対応しています\",\"highlight_6\":\"1ステップで同期、プル、プッシュが可能。マージコンフリクトが生じた場合は競合しているノートのリストを表示し、何も上書きしません\",\"highlight_7\":\"ファイルを開いてから、そのファイルがディスク上で変更された場合、保存は拒否されます。これにより、他の場所で行われた編集が上書きされることはありません\",\"highlight_8\":\"オプションでボールトをナレッジライブラリにインデックスすると、エージェントはノートを検索できるようになります\",\"page_label\":\"ノート\"},\"panel\":{\"connectVault\":\"ボールトを接続\",\"hide\":\"ノートパネルを非表示\",\"newRootNote\":\"トップレベルに新しいノートを作成\",\"noMatches\":\"一致するものはありません\",\"searchPlaceholder\":\"ノートを検索\",\"show\":\"ノートパネルを表示\",\"sortAndView\":\"ソートと表示\",\"sortSection\":\"ソート順\",\"switchVault\":\"ボールトを切り替え\",\"vaults\":\"ボールト\",\"viewSection\":\"表示\",\"view_folders\":\"フォルダー\",\"view_list\":\"フラットリスト\"},\"preview\":{\"detailsSummaryFallback\":\"詳細\",\"mermaidError\":\"無効な Mermaid 図 — ソースを表示しています。\"},\"row\":{\"delete\":\"ノートを削除\",\"deleteAction\":\"削除\",\"deleteConfirm\":\"<trash>.trash</trash>から復元できます。削除されたノートはリモートに同期されません。\",\"deleteTitle\":\"「{{title}}」をゴミ箱に移動しますか？\",\"duplicate\":\"ノートを複製\",\"pin\":\"ノートをピン\",\"rename\":\"ノート名を変更\",\"renameField\":\"ノート名\",\"unpin\":\"ノートをアンピン\"},\"settings\":{\"active\":\"アクティブ\",\"authGh\":\"GitHub CLIログインを使用しています。\",\"authNone\":\"GitHub アクセスなし—プライベートリポジトリを同期するにはトークンを追加してください。\",\"authStored\":\"このアプリに保存されたトークンを使用しています。\",\"autoCommit\":\"履歴に自動保存\",\"autoCommitHelp\":\"ボールトのローカルgit履歴に、{{n}}分ごとに編集をコミットします。手動で保存する必要はありません。リモートにはプッシュされません。\",\"autoSync\":\"自動同期\",\"autoSyncHelp\":\"変更を GitHub にプッシュし、定期的に最新を取得します。Notes を閉じていても、{{productName}} が起動している間はバックグラウンドで動作します。コンフリクトの判断が必要な場合は一時停止します。\",\"badgeCloned\":\"クローン済み\",\"badgeLocal\":\"ローカルフォルダー\",\"clear\":\"クリア\",\"close\":\"設定を閉じる\",\"every\":\"毎\",\"githubSection\":\"GitHub アクセス\",\"intervalAria\":\"自動同期間隔(分)\",\"knowledgeAdded\":\"ナレッジに追加されました。\",\"knowledgeAddedCount_other\":\"ナレッジに追加されました—{{n}}個のファイルがインデックス待ちです。\",\"knowledgeAdding\":\"ナレッジに追加中…\",\"knowledgeIndexed\":\"ナレッジライブラリにインデックスされています—エージェントはこれらのノートを検索できます。\",\"knowledgeNotIndexed\":\"インデックスされていません。有効にすると、エージェントはこのボールトを検索できるようになります。\",\"knowledgeRemoved\":\"ナレッジから削除されました。\",\"knowledgeRemoving\":\"ナレッジから削除中…\",\"minutes\":\"分\",\"noRemote\":\"リモートなし\",\"open\":\"開く\",\"prefsSaveFailed\":\"同期設定を保存できませんでした: {{message}}\",\"recording\":\"記録中…\",\"remove\":\"削除\",\"removeConfirm\":\"このボールトをアプリから削除しますか？ ファイルはディスク上に残ります—接続情報だけが忘れられます。\",\"removeFailed\":\"ボールトを削除できませんでした: {{message}}\",\"removeIt\":\"削除\",\"reset\":\"リセット\",\"save\":\"保存\",\"shortcut\":\"手動同期ショートカット\",\"shortcutHelpIdle\":\"クリックして新しいショートカットを記録します。\",\"shortcutHelpRecording\":\"使用したいキーを押してください—キャンセルする場合はEscを押してください。\",\"shortcutNeedsModifier\":\"⌘、Ctrl、または⌥の少なくとも1つを使用してください—通常の文字だけではタイピング時に発動してしまいます。\",\"subtitle\":\"ボールト、GitHub アクセスと同期\",\"syncSection\":\"同期\",\"title\":\"設定\",\"tokenCleared\":\"トークンをクリアしました。\",\"tokenClearFailed\":\"トークンをクリアできませんでした: {{message}}\",\"tokenPlaceholderEmpty\":\"github_pat_…\",\"tokenPlaceholderStored\":\"保存されたトークンを置き換え…\",\"tokenSaved\":\"トークンを保存しました。\",\"tokenSaveFailed\":\"トークンを保存できませんでした: {{message}}\",\"vaultsSection\":\"ボールト\"},\"sort\":{\"createdNewOld\":\"作成—新しい順\",\"createdOldNew\":\"作成—古い順\",\"modifiedNewOld\":\"変更—新しい順\",\"modifiedOldNew\":\"変更—古い順\",\"nameAZ\":\"ファイル名—A~Z\",\"nameZA\":\"ファイル名—Z~A\"},\"sync\":{\"action\":\"同期\",\"ago_d\":\"{{n}}日前に同期\",\"ago_h\":\"{{n}}時間前に同期\",\"ago_m\":\"{{n}}分前に同期\",\"justNow\":\"今同期しました\",\"localAction\":\"ローカルに保存\",\"localTitle\":\"このボールトのローカルgit履歴に変更をコミットします。このボールトはリモートがないため、何もプッシュされません。\",\"syncing\":\"同期中\"},\"title\":\"ノート\",\"trash\":{\"empty\":\"このボールトからまだ何も削除されていないため、.trashフォルダーはありません。\",\"failed\":\"フォルダーを開くことができません:{{message}}\",\"open\":\".trashフォルダーを開く\",\"unsupported\":\"このシステムではフォルダーを開くことはできません。\"}}}"),
		api: { "client": {
			"proxy_challenge_framed": "新しいタブで {{origin}} を開いてください。サインインページが表示された場合は、アクセスプロキシのセッションが切れています。このパネル内ではサインインできません。そちらでサインインしてから、このページを再読み込みしてください。",
			"proxy_challenge_reload": "このブラウザータブを再読み込みしてください。サインインページが表示された場合は、アクセスプロキシのセッションが切れています。表示されない場合は、このダッシュボードの前段にあるプロキシまたはファイアウォールがリクエストを拒否しています。プロキシのログを確認するか、後でもう一度お試しください。"
		} },
		nav: {
			"agent_capabilities": "カスタマイズ",
			"mcp_servers": "MCP サーバー"
		},
		pages: { "capabilitiesPage": {
			"knowledge_label": "ナレッジ",
			"skills_label": "スキル"
		} },
		components: { "readingWidthToggle": {
			"title_md": "中幅",
			"title_full": "全幅"
		} }
	},
	ko: {
		apps: { "mdNotebook": {
			"badge": {
				"deleting": "삭제 중",
				"pending": "대기 중"
			},
			"banner": {
				"diskConflict": "이 노트는 연 이후 디스크에서 변경되었습니다.",
				"keepMine": "내 버전 유지",
				"staleBackend": "노트 백엔드가 이 페이지보다 오래된 코드를 실행하고 있습니다 — 누락: {{features}}. 앱 페이지에서 노트를 껐다 켜서 다시 시작하세요.",
				"staleBackendRoute": "노트 백엔드가 이 페이지보다 오래된 코드를 실행하고 있습니다. 앱 페이지에서 노트를 껐다가 다시 켜서 재시작하세요.",
				"syncConflict": "병합 충돌로 동기화가 중단되어 아무것도 푸시되지 않았습니다. 충돌한 노트: {{paths}}",
				"useDisk": "디스크의 버전 사용"
			},
			"body": {
				"backlinks": "{{n}}에서 링크됨",
				"empty": "노트를 선택하거나 + 버튼으로 새로 만드세요."
			},
			"boot": {
				"loading": "불러오는 중…",
				"unreachable": "노트 백엔드에 연결할 수 없습니다: {{message}}. 아직 시작 중일 수 있습니다."
			},
			"connect": {
				"attachAction": "폴더 연결",
				"attachHelp": "이미 가지고 있는 Git 폴더를 그 자리에서 사용합니다 — 복사본을 만들지 않습니다.",
				"attachNoRemoteHelp": "Git 원격이 없나요? 그래도 됩니다 — 보관소는 동일하게 동작하고 노트는 이 컴퓨터에 남습니다.",
				"attachTab": "폴더 연결",
				"attaching": "연결 중…",
				"branch": "브랜치",
				"cancel": "취소",
				"choose": "선택…",
				"choosing": "선택 중…",
				"cloneAction": "보관소 연결",
				"cloneHelp": "GitHub 저장소를 클론하고 자체 작업 사본을 유지합니다.",
				"cloneTab": "저장소 클론",
				"cloning": "클론 중…",
				"knowledgeFailed": "보관소를 연결했지만 지식 동기화에 실패했습니다: {{message}}",
				"localFolder": "로컬 폴더",
				"localFolderPlaceholder": "~/Developer/my-notes",
				"pickerFailed": "폴더 선택기를 열 수 없습니다: {{message}}",
				"pickerNeedsMac": "폴더 선택기는 macOS가 필요합니다 — 대신 경로를 입력하세요.",
				"repoUrl": "저장소 URL",
				"repoUrlPlaceholder": "https://github.com/you/notes",
				"subfolder": "하위 폴더 (선택 사항)",
				"subfolderPlaceholder": "notes",
				"title": "보관소 연결",
				"token": "액세스 토큰 (선택 사항)",
				"tokenPlaceholder": "github_pat_…"
			},
			"editor": {
				"blockAria": "블록 편집",
				"renameHint": "클릭하여 이 노트의 이름 변경",
				"titleAria": "노트 제목"
			},
			"header": {
				"view_raw": "Markdown 원본",
				"view_rendered": "렌더링됨"
			},
			"knowledge": {
				"connectHelp": "이 보관소를 지식 라이브러리에 추가하여 에이전트가 노트를 검색할 수 있게 합니다. 나중에 {{capabilities}} → {{tab}}에서 변경할 수 있습니다.",
				"label": "{{productName}} 지식과 동기화"
			},
			"manifest": {
				"use_case_1": "위키링크, 백링크, 검색, Git 기록, 선택적 Knowledge 인덱싱을 지원하는 이식 가능한 Markdown 보관소를 편집합니다.",
				"configuration_1": "Git 저장소를 클론하거나 기존 로컬 폴더를 연결한 다음, 필요하면 Knowledge와 정기 동기화를 활성화하세요. 비공개 GitHub 저장소를 클론하려면 PAT 또는 인증된 gh가 필요합니다.",
				"description": "Git 저장소에 들어 있는 Markdown 노트북을 관리하여 노트가 버전 관리되고, 이동이 자유롭고, 다른 어떤 편집기에서도 읽힐 수 있게 합니다. GitHub 저장소를 지정하면 작업 사본을 클론하고, 이미 가지고 있는 폴더를 연결하면 — 기존 Obsidian 보관소도 포함해 — 복사본을 만들지 않고 그 체크아웃을 그 자리에서 사용합니다. 노트는 바로 클릭해 편집할 수 있는 서식 있는 텍스트로 렌더링되고, [[wikilinks]]로 서로 연결되며, 모든 노트는 자신을 가리키는 링크를 보여 줍니다. 동기화는 커밋·풀·푸시를 한 번에 처리하고, 병합 충돌이 생기면 아무것도 덮어쓰지 않고 충돌한 노트를 나열하며 병합을 중단해 알려 줍니다.",
				"display_name": "노트",
				"highlight_1": "노트는 Git 저장소 안의 순수 Markdown입니다 — 종속되지 않고 Obsidian이나 어떤 편집기로도 읽을 수 있습니다",
				"highlight_2": "GitHub 저장소를 보관소로 클론하거나, 이미 가지고 있는 폴더를 복사 없이 연결합니다",
				"highlight_3": "렌더링된 블록을 클릭해 그 자리에서 편집합니다. Enter로 새 블록을 시작하고 Tab으로 목록을 중첩합니다",
				"highlight_4": "노트 사이의 [[Wikilinks]], 그리고 읽고 있는 노트를 가리키는 항목을 보여 주는 백링크 목록",
				"highlight_5": "제목과 콘텐츠 전체 검색, 여섯 가지 정렬 순서를 지원하는 폴더 보기와 평면 보기",
				"highlight_6": "한 번의 동기화로 커밋·풀·푸시. 병합 충돌이 생기면 충돌한 노트를 나열하고 아무것도 덮어쓰지 않습니다",
				"highlight_7": "파일을 연 뒤 디스크에서 변경되었다면 저장이 거부되므로, 다른 곳에서 한 편집이 지워지지 않습니다",
				"highlight_8": "보관소를 지식 라이브러리에 선택적으로 인덱싱하면 에이전트가 노트를 검색할 수 있습니다",
				"page_label": "노트"
			},
			"panel": {
				"connectVault": "보관소 연결",
				"hide": "노트 패널 숨기기",
				"newRootNote": "최상위에 새 노트",
				"noMatches": "일치하는 항목 없음",
				"searchPlaceholder": "노트 검색",
				"show": "노트 패널 표시",
				"sortAndView": "정렬 및 보기",
				"sortSection": "정렬 기준",
				"switchVault": "보관소 전환",
				"vaults": "보관소",
				"viewSection": "보기",
				"view_folders": "폴더",
				"view_list": "평면 목록"
			},
			"preview": {
				"detailsSummaryFallback": "세부 정보",
				"mermaidError": "잘못된 Mermaid 다이어그램 — 소스를 표시합니다."
			},
			"row": {
				"delete": "노트 삭제",
				"deleteAction": "삭제",
				"deleteConfirm": "<trash>.trash</trash>에서 복원할 수 있습니다. 휴지통에 있는 노트는 원격에 동기화되지 않습니다.",
				"deleteTitle": "‘{{title}}’을(를) 휴지통으로 옮기시겠습니까?",
				"duplicate": "노트 복제",
				"pin": "노트 고정",
				"rename": "노트 이름 변경",
				"renameField": "노트 이름",
				"unpin": "노트 고정 해제"
			},
			"settings": {
				"active": "활성",
				"authGh": "GitHub CLI 로그인을 사용하고 있습니다.",
				"authNone": "GitHub 액세스 없음 — 비공개 저장소를 동기화하려면 토큰을 추가하세요.",
				"authStored": "이 앱에 저장된 토큰을 사용하고 있습니다.",
				"autoCommit": "히스토리에 자동 저장",
				"autoCommitHelp": "{{n}}분마다 편집 내용을 보관소의 로컬 Git 히스토리에 커밋하므로 직접 저장할 필요가 없습니다. 원격에는 아무것도 푸시되지 않습니다.",
				"autoSync": "자동 동기화",
				"autoSyncHelp": "일정한 간격으로 변경 내용을 GitHub에 푸시하고 최신 내용을 가져옵니다. Notes를 닫아도 {{productName}}이(가) 실행 중이면 백그라운드에서 계속 동작합니다. 충돌에 대한 결정이 필요하면 일시 중지됩니다.",
				"badgeCloned": "클론됨",
				"badgeLocal": "로컬 폴더",
				"clear": "지우기",
				"close": "설정 닫기",
				"every": "매",
				"githubSection": "GitHub 액세스",
				"intervalAria": "자동 동기화 간격(분)",
				"knowledgeAdded": "지식에 추가되었습니다.",
				"knowledgeAddedCount_other": "지식에 추가되었습니다 — 파일 {{n}}개가 인덱싱 대기 중입니다.",
				"knowledgeAdding": "지식에 추가 중…",
				"knowledgeIndexed": "지식 라이브러리에 인덱싱되었습니다 — 에이전트가 이 노트를 검색할 수 있습니다.",
				"knowledgeNotIndexed": "인덱싱되지 않았습니다. 켜면 에이전트가 이 보관소를 검색할 수 있습니다.",
				"knowledgeRemoved": "지식에서 제거되었습니다.",
				"knowledgeRemoving": "지식에서 제거 중…",
				"minutes": "분",
				"noRemote": "원격 없음",
				"open": "열기",
				"prefsSaveFailed": "동기화 설정을 저장할 수 없습니다: {{message}}",
				"recording": "기록 중…",
				"remove": "제거",
				"removeConfirm": "이 보관소를 앱에서 제거하시겠습니까? 파일은 디스크에 그대로 남습니다 — 연결 정보만 잊힙니다.",
				"removeFailed": "보관소를 제거할 수 없습니다: {{message}}",
				"removeIt": "제거",
				"reset": "초기화",
				"save": "저장",
				"shortcut": "수동 동기화 바로 가기",
				"shortcutHelpIdle": "클릭하여 새 바로 가기를 기록하세요.",
				"shortcutHelpRecording": "사용할 키를 누르세요 — 취소는 Esc입니다.",
				"shortcutNeedsModifier": "⌘, Ctrl, ⌥ 중 적어도 하나를 사용하세요 — 일반 문자만 쓰면 입력 중에 실행됩니다.",
				"subtitle": "보관소, GitHub 액세스 및 동기화",
				"syncSection": "동기화",
				"title": "설정",
				"tokenCleared": "토큰을 지웠습니다.",
				"tokenClearFailed": "토큰을 지울 수 없습니다: {{message}}",
				"tokenPlaceholderEmpty": "github_pat_…",
				"tokenPlaceholderStored": "저장된 토큰 교체…",
				"tokenSaved": "토큰을 저장했습니다.",
				"tokenSaveFailed": "토큰을 저장할 수 없습니다: {{message}}",
				"vaultsSection": "보관소"
			},
			"sort": {
				"createdNewOld": "생성 — 최신순",
				"createdOldNew": "생성 — 오래된순",
				"modifiedNewOld": "수정 — 최신순",
				"modifiedOldNew": "수정 — 오래된순",
				"nameAZ": "파일 이름 — A에서 Z",
				"nameZA": "파일 이름 — Z에서 A"
			},
			"sync": {
				"action": "동기화",
				"ago_d": "{{n}}일 전에 동기화",
				"ago_h": "{{n}}시간 전에 동기화",
				"ago_m": "{{n}}분 전에 동기화",
				"justNow": "방금 동기화",
				"localAction": "로컬에 저장",
				"localTitle": "변경 내용을 이 보관소의 로컬 Git 히스토리에 커밋합니다. 이 보관소에는 원격이 없으므로 아무것도 푸시되지 않습니다.",
				"syncing": "동기화 중"
			},
			"title": "노트",
			"trash": {
				"empty": "이 보관소에서 아직 삭제된 것이 없으므로 .trash 폴더가 없습니다.",
				"failed": "폴더를 열 수 없습니다: {{message}}",
				"open": ".trash 폴더 열기",
				"unsupported": "이 시스템에서는 폴더 열기를 지원하지 않습니다."
			}
		} },
		api: { "client": {
			"proxy_challenge_framed": "새 탭에서 {{origin}} 을 여세요. 로그인 페이지가 나타나면 액세스 프록시 세션이 만료된 것입니다. 이 패널 안에서는 로그인할 수 없습니다. 거기서 로그인한 뒤 이 페이지를 다시 로드하세요.",
			"proxy_challenge_reload": "이 브라우저 탭을 다시 로드하세요. 로그인 페이지가 나타나면 액세스 프록시 세션이 만료된 것입니다. 그렇지 않다면 이 대시보드 앞단의 프록시나 방화벽이 요청을 거부한 것이니, 프록시 로그를 확인하거나 나중에 다시 시도하세요."
		} },
		nav: {
			"agent_capabilities": "맞춤 설정",
			"mcp_servers": "MCP 서버"
		},
		pages: { "capabilitiesPage": {
			"knowledge_label": "지식",
			"skills_label": "스킬"
		} },
		components: { "readingWidthToggle": {
			"title_md": "중간 너비",
			"title_full": "전체 너비"
		} }
	},
	pt: {
		apps: { "mdNotebook": {
			"badge": {
				"deleting": "excluindo",
				"pending": "pendente"
			},
			"banner": {
				"diskConflict": "Esta nota mudou no disco desde que você a abriu.",
				"keepMine": "Manter minha versão",
				"staleBackend": "O backend de Notas está executando código mais antigo que esta página — faltando: {{features}}. Desligue e ligue Notas na página de Aplicativos para reiniciá-lo.",
				"staleBackendRoute": "O backend do Notas está executando um código mais antigo que esta página. Desative e reative o Notas na página de Apps para reiniciá-lo.",
				"syncConflict": "A sincronização parou num conflito de merge, portanto nada foi enviado. Notas em conflito: {{paths}}",
				"useDisk": "Usar a versão do disco"
			},
			"body": {
				"backlinks": "Vinculada de {{n}}",
				"empty": "Selecione uma nota ou crie uma com o botão +."
			},
			"boot": {
				"loading": "Carregando…",
				"unreachable": "Não foi possível acessar o backend de Notas: {{message}}. Ele pode ainda estar iniciando."
			},
			"connect": {
				"attachAction": "Anexar pasta",
				"attachHelp": "Usa uma pasta git que você já tem, no lugar — sem uma segunda cópia.",
				"attachNoRemoteHelp": "Sem remoto git? Também funciona — o vault se comporta da mesma forma e as notas ficam nesta máquina.",
				"attachTab": "Anexar uma pasta",
				"attaching": "Anexando…",
				"branch": "Branch",
				"cancel": "Cancelar",
				"choose": "Escolher…",
				"choosing": "Escolhendo…",
				"cloneAction": "Conectar cofre",
				"cloneHelp": "Clona um repositório do GitHub e mantém sua própria cópia de trabalho.",
				"cloneTab": "Clonar um repositório",
				"cloning": "Clonando…",
				"knowledgeFailed": "Cofre conectado, mas a sincronização de conhecimento falhou: {{message}}",
				"localFolder": "Pasta local",
				"localFolderPlaceholder": "~/Developer/my-notes",
				"pickerFailed": "Não foi possível abrir o seletor de pastas: {{message}}",
				"pickerNeedsMac": "O seletor de pastas precisa do macOS — digite o caminho.",
				"repoUrl": "URL do repositório",
				"repoUrlPlaceholder": "https://github.com/you/notes",
				"subfolder": "Subpasta (opcional)",
				"subfolderPlaceholder": "notes",
				"title": "Conectar um cofre",
				"token": "Token de acesso (opcional)",
				"tokenPlaceholder": "github_pat_…"
			},
			"editor": {
				"blockAria": "Editar bloco",
				"renameHint": "Clique para renomear esta nota",
				"titleAria": "Título da nota"
			},
			"header": {
				"view_raw": "Código Markdown",
				"view_rendered": "Renderizado"
			},
			"knowledge": {
				"connectHelp": "Adiciona este cofre à biblioteca de Conhecimento para que os agentes possam pesquisar suas notas. Você pode alterar isso depois em {{capabilities}} → {{tab}}.",
				"label": "Sincronizar com o conhecimento do {{productName}}"
			},
			"manifest": {
				"description": "Mantenha um caderno em markdown que vive em um repositório git, para que as suas notas fiquem versionadas, portáveis e legíveis por qualquer outro editor. Aponte para um repositório do GitHub e ele clona uma cópia de trabalho, ou anexe uma pasta que você já tem — inclusive um cofre existente do Obsidian — e ele adota esse checkout no lugar, sem criar uma segunda cópia. As notas aparecem como texto formatado em que você clica para editar direto, [[wikilinks]] as conectam e cada nota mostra o que aponta de volta para ela. A sincronização faz commit, pull e push em um passo só, e um conflito de merge é informado — com a lista das notas em conflito e o merge abortado — em vez de sobrescrever qualquer coisa.",
				"display_name": "Notas",
				"highlight_1": "As suas notas são markdown puro em um repositório git — sem aprisionamento, legíveis pelo Obsidian ou por qualquer editor",
				"highlight_2": "Clone um repositório do GitHub como cofre ou anexe uma pasta que você já tem, sem copiá-la",
				"highlight_3": "Clique em qualquer bloco renderizado para editá-lo no lugar; Enter começa um novo bloco, Tab aninha listas",
				"highlight_4": "[[Wikilinks]] entre notas, com uma lista de backlinks mostrando o que aponta para a nota que você está lendo",
				"highlight_5": "Busca em texto completo por títulos e conteúdo, além de visões por pasta e plana com seis ordenações",
				"highlight_6": "A sincronização em um passo faz commit, pull e push; um conflito de merge lista as notas em conflito e não sobrescreve nada",
				"highlight_7": "Um salvamento é recusado se o arquivo mudou no disco desde que você o abriu, para que edições feitas em outro lugar nunca sejam destruídas",
				"highlight_8": "Opcionalmente, indexe um cofre na biblioteca de Conhecimento para que os agentes possam pesquisar as suas notas",
				"page_label": "Notas",
				"use_case_1": "Edite um vault Markdown portátil com wikilinks, backlinks, pesquisa, histórico do Git e indexação opcional no Knowledge.",
				"configuration_1": "Clone um repositório Git ou anexe uma pasta local existente e, se quiser, ative o Knowledge e a sincronização agendada; clones privados do GitHub precisam de um PAT ou do gh autenticado."
			},
			"panel": {
				"connectVault": "Conectar um cofre",
				"hide": "Ocultar o painel de notas",
				"newRootNote": "Nova nota no nível superior",
				"noMatches": "Nenhum resultado",
				"searchPlaceholder": "Pesquisar notas",
				"show": "Mostrar o painel de notas",
				"sortAndView": "Ordem e visualização",
				"sortSection": "Ordenar por",
				"switchVault": "Trocar de cofre",
				"vaults": "Cofres",
				"viewSection": "Visualização",
				"view_folders": "Pastas",
				"view_list": "Lista simples"
			},
			"preview": {
				"detailsSummaryFallback": "Detalhes",
				"mermaidError": "Diagrama Mermaid inválido — mostrando o código-fonte."
			},
			"row": {
				"delete": "Excluir nota",
				"deleteAction": "Excluir",
				"deleteConfirm": "Você pode restaurá-la de <trash>.trash</trash>. Notas na lixeira não são sincronizadas com o remoto.",
				"deleteTitle": "Mover “{{title}}” para a lixeira?",
				"duplicate": "Duplicar nota",
				"pin": "Fixar nota",
				"rename": "Renomear nota",
				"renameField": "Nome da nota",
				"unpin": "Desafixar nota"
			},
			"settings": {
				"active": "Ativo",
				"authGh": "Usando seu login do GitHub CLI.",
				"authNone": "Sem acesso ao GitHub — adicione um token para sincronizar repositórios privados.",
				"authStored": "Usando um token salvo neste aplicativo.",
				"autoCommit": "Salvamento automático no histórico",
				"autoCommitHelp": "Faz commit das suas alterações no histórico git local do vault a cada {{n}} minutos, assim você nunca precisa salvar manualmente. Nada é enviado para um remoto.",
				"autoSync": "Sincronização automática",
				"autoSyncHelp": "Envia suas alterações ao GitHub e traz as mais recentes, por temporizador. Continua em segundo plano quando o Notes está fechado, desde que o {{productName}} esteja aberto. Pausada enquanto um conflito precisa da sua decisão.",
				"badgeCloned": "Clonado",
				"badgeLocal": "Pasta local",
				"clear": "Limpar",
				"close": "Fechar configurações",
				"every": "A cada",
				"githubSection": "Acesso ao GitHub",
				"intervalAria": "Intervalo de sincronização automática em minutos",
				"knowledgeAdded": "Adicionado ao Conhecimento.",
				"knowledgeAddedCount_one": "Adicionado ao Conhecimento — {{n}} arquivo na fila de indexação.",
				"knowledgeAddedCount_many": "Adicionado ao Conhecimento — {{n}} de arquivos na fila de indexação.",
				"knowledgeAddedCount_other": "Adicionado ao Conhecimento — {{n}} arquivos na fila de indexação.",
				"knowledgeAdding": "Adicionando ao Conhecimento…",
				"knowledgeIndexed": "Indexado na biblioteca de Conhecimento — os agentes podem pesquisar estas notas.",
				"knowledgeNotIndexed": "Não indexado. Ative para que os agentes pesquisem neste cofre.",
				"knowledgeRemoved": "Removido do Conhecimento.",
				"knowledgeRemoving": "Removendo do Conhecimento…",
				"minutes": "minutos",
				"noRemote": "Sem remoto",
				"open": "Abrir",
				"prefsSaveFailed": "Não foi possível salvar a configuração de sincronização: {{message}}",
				"recording": "Gravando…",
				"remove": "Remover",
				"removeConfirm": "Remover este cofre do aplicativo? Seus arquivos permanecem intactos no disco — apenas a conexão é esquecida.",
				"removeFailed": "Não foi possível remover o cofre: {{message}}",
				"removeIt": "Remover",
				"reset": "Redefinir",
				"save": "Salvar",
				"shortcut": "Atalho de sincronização manual",
				"shortcutHelpIdle": "Clique para gravar um novo atalho.",
				"shortcutHelpRecording": "Pressione as teclas desejadas — Esc para cancelar.",
				"shortcutNeedsModifier": "Use ao menos ⌘, Ctrl ou ⌥ — uma letra sozinha dispararia ao digitar.",
				"subtitle": "Cofres, acesso ao GitHub e sincronização",
				"syncSection": "Sincronização",
				"title": "Configurações",
				"tokenCleared": "Token limpo.",
				"tokenClearFailed": "Não foi possível limpar o token: {{message}}",
				"tokenPlaceholderEmpty": "github_pat_…",
				"tokenPlaceholderStored": "Substituir o token salvo…",
				"tokenSaved": "Token salvo.",
				"tokenSaveFailed": "Não foi possível salvar o token: {{message}}",
				"vaultsSection": "Cofres"
			},
			"sort": {
				"createdNewOld": "Criação — da mais nova para a mais antiga",
				"createdOldNew": "Criação — da mais antiga para a mais nova",
				"modifiedNewOld": "Modificação — da mais nova para a mais antiga",
				"modifiedOldNew": "Modificação — da mais antiga para a mais nova",
				"nameAZ": "Nome do arquivo — de A a Z",
				"nameZA": "Nome do arquivo — de Z a A"
			},
			"sync": {
				"action": "Sincronizar",
				"ago_d": "Sincronizado há {{n}} d",
				"ago_h": "Sincronizado há {{n}} h",
				"ago_m": "Sincronizado há {{n}} min",
				"justNow": "Sincronizado agora",
				"localAction": "Salvar localmente",
				"localTitle": "Faz commit das alterações no histórico git local deste vault. Este vault não tem remoto, então nada é enviado.",
				"syncing": "Sincronizando"
			},
			"title": "Notas",
			"trash": {
				"empty": "Nada foi excluído deste vault ainda, então não existe uma pasta .trash.",
				"failed": "Não foi possível abrir a pasta: {{message}}",
				"open": "Abrir a pasta .trash",
				"unsupported": "Abrir uma pasta não é compatível com este sistema."
			}
		} },
		api: { "client": {
			"proxy_challenge_framed": "Abra {{origin}} em uma nova aba: se aparecer uma página de login, a sessão do seu proxy de acesso expirou. Dentro deste painel não funciona. Entre por lá e depois recarregue esta página.",
			"proxy_challenge_reload": "Recarregue esta aba do navegador: se aparecer uma página de login, a sessão do seu proxy de acesso expirou. Caso contrário, um proxy ou firewall na frente deste painel recusou a solicitação; verifique os logs do proxy ou tente de novo mais tarde."
		} },
		nav: {
			"agent_capabilities": "Personalizar",
			"mcp_servers": "Servidores MCP"
		},
		pages: { "capabilitiesPage": {
			"knowledge_label": "Conhecimento",
			"skills_label": "Habilidades"
		} },
		components: { "readingWidthToggle": {
			"title_md": "Largura média",
			"title_full": "Largura total"
		} }
	},
	ru: {
		apps: /* @__PURE__ */ JSON.parse("{\"mdNotebook\":{\"badge\":{\"deleting\":\"удаление\",\"pending\":\"ожидает\"},\"banner\":{\"diskConflict\":\"Эта заметка изменилась на диске после того, как вы её открыли.\",\"keepMine\":\"Сохранить мою версию\",\"staleBackend\":\"Бэкенд Заметок выполняет код старее этой страницы — отсутствует: {{features}}. Выключите и включите Заметки на странице приложений, чтобы перезапустить его.\",\"staleBackendRoute\":\"Бэкенд «Заметок» выполняет более старый код, чем эта страница. Выключите и снова включите «Заметки» на странице приложений, чтобы перезапустить его.\",\"syncConflict\":\"Синхронизация остановлена из-за конфликта слияния, поэтому ничего не отправлено. Конфликтующие заметки: {{paths}}\",\"useDisk\":\"Использовать версию с диска\"},\"body\":{\"backlinks\":\"Ссылаются: {{n}}\",\"empty\":\"Выберите заметку или создайте новую кнопкой +.\"},\"boot\":{\"loading\":\"Загрузка…\",\"unreachable\":\"Не удалось связаться с бэкендом Заметок: {{message}}. Возможно, он ещё запускается.\"},\"connect\":{\"attachAction\":\"Присоединить папку\",\"attachHelp\":\"Использует уже имеющуюся git-папку на месте — без второй копии.\",\"attachNoRemoteHelp\":\"Нет удалённого репозитория git? Это тоже работает — хранилище ведёт себя так же, а заметки остаются на этом компьютере.\",\"attachTab\":\"Присоединить папку\",\"attaching\":\"Присоединение…\",\"branch\":\"Ветка\",\"cancel\":\"Отмена\",\"choose\":\"Выбрать…\",\"choosing\":\"Выбор…\",\"cloneAction\":\"Подключить хранилище\",\"cloneHelp\":\"Клонирует репозиторий GitHub и держит собственную рабочую копию.\",\"cloneTab\":\"Клонировать репозиторий\",\"cloning\":\"Клонирование…\",\"knowledgeFailed\":\"Хранилище подключено, но синхронизация знаний не удалась: {{message}}\",\"localFolder\":\"Локальная папка\",\"localFolderPlaceholder\":\"~/Developer/my-notes\",\"pickerFailed\":\"Не удалось открыть выбор папки: {{message}}\",\"pickerNeedsMac\":\"Выбор папки доступен только в macOS — введите путь вручную.\",\"repoUrl\":\"URL репозитория\",\"repoUrlPlaceholder\":\"https://github.com/you/notes\",\"subfolder\":\"Подпапка (необязательно)\",\"subfolderPlaceholder\":\"notes\",\"title\":\"Подключить хранилище\",\"token\":\"Токен доступа (необязательно)\",\"tokenPlaceholder\":\"github_pat_…\"},\"editor\":{\"blockAria\":\"Редактировать блок\",\"renameHint\":\"Нажмите, чтобы переименовать заметку\",\"titleAria\":\"Заголовок заметки\"},\"header\":{\"view_raw\":\"Исходный Markdown\",\"view_rendered\":\"С разметкой\"},\"knowledge\":{\"connectHelp\":\"Добавляет это хранилище в библиотеку знаний, чтобы агенты могли искать по вашим заметкам. Это можно изменить позже в разделе {{capabilities}} → {{tab}}.\",\"label\":\"Синхронизировать со знаниями {{productName}}\"},\"manifest\":{\"description\":\"Ведёт блокнот в markdown, который живёт в репозитории git, поэтому заметки версионируются, переносятся куда угодно и читаются любым другим редактором. Укажи репозиторий GitHub — он склонирует рабочую копию, или подключи уже готовую папку, в том числе существующее хранилище Obsidian, — и он возьмёт эту рабочую копию как есть, не создавая вторую. Заметки отображаются как форматированный текст, в который можно кликнуть и сразу править, [[wikilinks]] связывают их между собой, а у каждой заметки видно, что на неё ссылается. Синхронизация делает коммит, pull и push одним действием, а конфликт слияния будет показан — со списком конфликтных заметок и отменой слияния — и ничего не перезапишет.\",\"display_name\":\"Заметки\",\"use_case_1\":\"Редактируйте переносимое хранилище Markdown с wikilink, обратными ссылками, поиском, историей Git и необязательной индексацией Knowledge.\",\"configuration_1\":\"Клонируйте репозиторий Git или подключите существующую локальную папку, затем при желании включите Knowledge и синхронизацию по расписанию; для закрытых клонов GitHub нужен PAT или авторизованный gh.\",\"highlight_1\":\"Заметки — обычный markdown в репозитории git, без привязки к приложению: их прочитает Obsidian или любой редактор\",\"highlight_2\":\"Склонируй репозиторий GitHub как хранилище или подключи уже готовую папку, не копируя её\",\"highlight_3\":\"Нажми на любой отрисованный блок, чтобы править его на месте; Enter создаёт новый блок, Tab вкладывает списки\",\"highlight_4\":\"[[Wikilinks]] между заметками и список обратных ссылок, который показывает, что ссылается на открытую заметку\",\"highlight_5\":\"Полнотекстовый поиск по заголовкам и содержимому, а также вид по папкам и плоский список с шестью порядками сортировки\",\"highlight_6\":\"Синхронизация одним действием делает коммит, pull и push; при конфликте слияния показывается список конфликтных заметок и ничего не перезаписывается\",\"highlight_7\":\"Сохранение отклоняется, если файл изменился на диске после открытия, поэтому правки, сделанные в другом месте, никогда не затираются\",\"highlight_8\":\"При желании хранилище индексируется в библиотеку знаний, чтобы агенты могли искать по заметкам\",\"page_label\":\"Заметки\"},\"panel\":{\"connectVault\":\"Подключить хранилище\",\"hide\":\"Скрыть панель заметок\",\"newRootNote\":\"Новая заметка на верхнем уровне\",\"noMatches\":\"Ничего не найдено\",\"searchPlaceholder\":\"Поиск по заметкам\",\"show\":\"Показать панель заметок\",\"sortAndView\":\"Сортировка и вид\",\"sortSection\":\"Сортировать по\",\"switchVault\":\"Переключить хранилище\",\"vaults\":\"Хранилища\",\"viewSection\":\"Вид\",\"view_folders\":\"Папки\",\"view_list\":\"Плоский список\"},\"preview\":{\"detailsSummaryFallback\":\"Подробности\",\"mermaidError\":\"Недопустимая диаграмма Mermaid — показан исходный код.\"},\"row\":{\"delete\":\"Удалить заметку\",\"deleteAction\":\"Удалить\",\"deleteConfirm\":\"Вы можете восстановить её из <trash>.trash</trash>. Заметки в корзине не синхронизируются с удалённым репозиторием.\",\"deleteTitle\":\"Переместить «{{title}}» в корзину?\",\"duplicate\":\"Дублировать заметку\",\"pin\":\"Закрепить заметку\",\"rename\":\"Переименовать заметку\",\"renameField\":\"Название заметки\",\"unpin\":\"Открепить заметку\"},\"settings\":{\"active\":\"Активно\",\"authGh\":\"Используется вход через GitHub CLI.\",\"authNone\":\"Нет доступа к GitHub — добавьте токен для синхронизации приватных репозиториев.\",\"authStored\":\"Используется токен, сохранённый в этом приложении.\",\"autoCommit\":\"Автосохранение в историю\",\"autoCommitHelp\":\"Каждые {{n}} минут фиксирует изменения в локальной истории git хранилища, чтобы не приходилось сохранять вручную. Ничего не отправляется в удалённый репозиторий.\",\"autoSync\":\"Автосинхронизация\",\"autoSyncHelp\":\"Отправляет изменения в GitHub и получает последние по таймеру. Продолжает работать в фоне, когда Notes закрыт, пока открыт {{productName}}. Приостановлена, пока конфликт ждёт вашего решения.\",\"badgeCloned\":\"Клонировано\",\"badgeLocal\":\"Локальная папка\",\"clear\":\"Очистить\",\"close\":\"Закрыть настройки\",\"every\":\"Каждые\",\"githubSection\":\"Доступ к GitHub\",\"intervalAria\":\"Интервал автосинхронизации в минутах\",\"knowledgeAdded\":\"Добавлено в знания.\",\"knowledgeAddedCount_one\":\"Добавлено в знания — {{n}} файл в очереди на индексацию.\",\"knowledgeAddedCount_few\":\"Добавлено в знания — {{n}} файла в очереди на индексацию.\",\"knowledgeAddedCount_many\":\"Добавлено в знания — {{n}} файлов в очереди на индексацию.\",\"knowledgeAddedCount_other\":\"Добавлено в знания — {{n}} файла в очереди на индексацию.\",\"knowledgeAdding\":\"Добавление в знания…\",\"knowledgeIndexed\":\"Проиндексировано в библиотеке знаний — агенты могут искать по этим заметкам.\",\"knowledgeNotIndexed\":\"Не проиндексировано. Включите, чтобы агенты могли искать в этом хранилище.\",\"knowledgeRemoved\":\"Удалено из знаний.\",\"knowledgeRemoving\":\"Удаление из знаний…\",\"minutes\":\"мин\",\"noRemote\":\"Без удалённого репозитория\",\"open\":\"Открыть\",\"prefsSaveFailed\":\"Не удалось сохранить настройку синхронизации: {{message}}\",\"recording\":\"Запись…\",\"remove\":\"Удалить\",\"removeConfirm\":\"Удалить это хранилище из приложения? Файлы на диске останутся нетронутыми — забудется только подключение.\",\"removeFailed\":\"Не удалось удалить хранилище: {{message}}\",\"removeIt\":\"Удалить\",\"reset\":\"Сбросить\",\"save\":\"Сохранить\",\"shortcut\":\"Горячая клавиша ручной синхронизации\",\"shortcutHelpIdle\":\"Нажмите, чтобы записать новое сочетание.\",\"shortcutHelpRecording\":\"Нажмите нужные клавиши — Esc для отмены.\",\"shortcutNeedsModifier\":\"Используйте хотя бы ⌘, Ctrl или ⌥ — одна буква срабатывала бы при наборе текста.\",\"subtitle\":\"Хранилища, доступ к GitHub и синхронизация\",\"syncSection\":\"Синхронизация\",\"title\":\"Настройки\",\"tokenCleared\":\"Токен очищен.\",\"tokenClearFailed\":\"Не удалось очистить токен: {{message}}\",\"tokenPlaceholderEmpty\":\"github_pat_…\",\"tokenPlaceholderStored\":\"Заменить сохранённый токен…\",\"tokenSaved\":\"Токен сохранён.\",\"tokenSaveFailed\":\"Не удалось сохранить токен: {{message}}\",\"vaultsSection\":\"Хранилища\"},\"sort\":{\"createdNewOld\":\"Создано — от новых к старым\",\"createdOldNew\":\"Создано — от старых к новым\",\"modifiedNewOld\":\"Изменено — от новых к старым\",\"modifiedOldNew\":\"Изменено — от старых к новым\",\"nameAZ\":\"Имя файла — от А до Я\",\"nameZA\":\"Имя файла — от Я до А\"},\"sync\":{\"action\":\"Синхронизировать\",\"ago_d\":\"Синхронизировано {{n}} дн назад\",\"ago_h\":\"Синхронизировано {{n}} ч назад\",\"ago_m\":\"Синхронизировано {{n}} мин назад\",\"justNow\":\"Синхронизировано только что\",\"localAction\":\"Сохранить локально\",\"localTitle\":\"Зафиксировать изменения в локальной истории git этого хранилища. У хранилища нет удалённого репозитория, поэтому ничего не отправляется.\",\"syncing\":\"Синхронизация\"},\"title\":\"Заметки\",\"trash\":{\"empty\":\"Из этого хранилища ещё ничего не удаляли, поэтому папки .trash нет.\",\"failed\":\"Не удалось открыть папку: {{message}}\",\"open\":\"Открыть папку .trash\",\"unsupported\":\"Открытие папки не поддерживается в этой системе.\"}}}"),
		api: { "client": {
			"proxy_challenge_framed": "Открой {{origin}} в новой вкладке: если появится страница входа, сессия твоего прокси доступа истекла. Внутри этой панели вход не работает. Войди там, затем обнови эту страницу.",
			"proxy_challenge_reload": "Обнови эту вкладку браузера: если появится страница входа, сессия твоего прокси доступа истекла. Если нет — прокси или файрвол перед этой панелью отклонил запрос; посмотри журналы прокси или повтори позже."
		} },
		nav: {
			"agent_capabilities": "Кастомизация",
			"mcp_servers": "MCP-серверы"
		},
		pages: { "capabilitiesPage": {
			"knowledge_label": "Знания",
			"skills_label": "Навыки"
		} },
		components: { "readingWidthToggle": {
			"title_md": "Средняя ширина",
			"title_full": "Полная ширина"
		} }
	},
	"zh-CN": {
		apps: { "mdNotebook": {
			"badge": {
				"deleting": "删除中",
				"pending": "待同步"
			},
			"banner": {
				"diskConflict": "自你打开后，这条笔记在磁盘上已被更改。",
				"keepMine": "保留我的版本",
				"staleBackend": "笔记后端运行的代码比此页面旧 —— 缺少：{{features}}。请在应用页面关闭再打开笔记以重启它。",
				"staleBackendRoute": "笔记后端运行的代码比此页面旧。请在应用页面中关闭再打开笔记以重启它。",
				"syncConflict": "同步因合并冲突而停止，未推送任何内容。冲突笔记：{{paths}}",
				"useDisk": "使用磁盘上的版本"
			},
			"body": {
				"backlinks": "被 {{n}} 处引用",
				"empty": "选择一条笔记，或用 + 按钮新建。"
			},
			"boot": {
				"loading": "加载中…",
				"unreachable": "无法连接笔记后端：{{message}}。它可能仍在启动。"
			},
			"connect": {
				"attachAction": "附加文件夹",
				"attachHelp": "就地使用你已有的 git 文件夹 —— 不会复制第二份。",
				"attachNoRemoteHelp": "没有 git 远程仓库？同样可以使用——保险库行为不变，笔记只保留在这台机器上。",
				"attachTab": "附加文件夹",
				"attaching": "附加中…",
				"branch": "分支",
				"cancel": "取消",
				"choose": "选择…",
				"choosing": "选择中…",
				"cloneAction": "连接仓库",
				"cloneHelp": "克隆一个 GitHub 仓库并保留独立的工作副本。",
				"cloneTab": "克隆仓库",
				"cloning": "克隆中…",
				"knowledgeFailed": "仓库已连接，但知识库同步失败：{{message}}",
				"localFolder": "本地文件夹",
				"localFolderPlaceholder": "~/Developer/my-notes",
				"pickerFailed": "无法打开文件夹选择器：{{message}}",
				"pickerNeedsMac": "文件夹选择器需要 macOS —— 请手动输入路径。",
				"repoUrl": "仓库地址",
				"repoUrlPlaceholder": "https://github.com/you/notes",
				"subfolder": "子文件夹（可选）",
				"subfolderPlaceholder": "notes",
				"title": "连接仓库",
				"token": "访问令牌（可选）",
				"tokenPlaceholder": "github_pat_…"
			},
			"editor": {
				"blockAria": "编辑块",
				"renameHint": "点击重命名此笔记",
				"titleAria": "笔记标题"
			},
			"header": {
				"view_raw": "Markdown 源码",
				"view_rendered": "渲染视图"
			},
			"knowledge": {
				"connectHelp": "将此仓库加入知识库，使智能体可以搜索你的笔记。稍后可在“{{capabilities}} → {{tab}}”中更改。",
				"label": "同步到 {{productName}} 知识库"
			},
			"manifest": {
				"use_case_1": "编辑一个可移植的 Markdown 笔记仓库，支持 wikilink、反向链接、搜索、Git 历史和可选的知识库索引。",
				"configuration_1": "克隆 Git 仓库或挂载现有本地文件夹，然后可选启用知识库和定时同步；克隆私有 GitHub 仓库需要 PAT 或已认证的 gh。",
				"description": "把 markdown 笔记本放在 git 仓库里，笔记因此有版本、可迁移，任何编辑器都读得懂。指向一个 GitHub 仓库，它会克隆一份工作副本；也可以挂上你已有的文件夹 — 包括现成的 Obsidian 仓库 — 它会就地接管那份检出，不再复制第二份。笔记以排版后的文本呈现，点一下就能就地编辑，[[wikilinks]] 把它们连起来，每篇笔记都会显示哪些笔记指向自己。同步一步完成提交、拉取和推送；遇到合并冲突会如实报告 — 列出冲突的笔记并中止合并 — 而不是覆盖任何内容。",
				"display_name": "笔记",
				"highlight_1": "笔记就是 git 仓库里的纯 markdown — 没有锁定，Obsidian 或任何编辑器都能读",
				"highlight_2": "把 GitHub 仓库克隆为笔记仓库，或者直接挂上你已有的文件夹，不做复制",
				"highlight_3": "点击任意渲染后的块即可就地编辑；Enter 新建一个块，Tab 缩进列表",
				"highlight_4": "笔记之间用 [[Wikilinks]] 互联，反向链接列表会显示哪些笔记指向你正在读的这篇",
				"highlight_5": "标题和正文全文搜索，另有文件夹视图和平铺视图，六种排序方式",
				"highlight_6": "一步同步完成提交、拉取和推送；合并冲突会列出冲突的笔记，不覆盖任何内容",
				"highlight_7": "如果文件在你打开后已在磁盘上改动，保存会被拒绝，别处做的修改绝不会被冲掉",
				"highlight_8": "可以选择把笔记仓库索引进知识库，让代理能搜索你的笔记",
				"page_label": "笔记"
			},
			"panel": {
				"connectVault": "连接仓库",
				"hide": "隐藏笔记面板",
				"newRootNote": "在顶层新建笔记",
				"noMatches": "无匹配结果",
				"searchPlaceholder": "搜索笔记",
				"show": "显示笔记面板",
				"sortAndView": "排序与视图",
				"sortSection": "排序方式",
				"switchVault": "切换仓库",
				"vaults": "仓库",
				"viewSection": "视图",
				"view_folders": "文件夹",
				"view_list": "平铺列表"
			},
			"preview": {
				"detailsSummaryFallback": "详情",
				"mermaidError": "无效的 Mermaid 图表——显示其源代码。"
			},
			"row": {
				"delete": "删除笔记",
				"deleteAction": "删除",
				"deleteConfirm": "你可以从 <trash>.trash</trash> 中恢复它。回收站中的笔记不会同步到远程仓库。",
				"deleteTitle": "将“{{title}}”移到回收站？",
				"duplicate": "复制笔记",
				"pin": "固定笔记",
				"rename": "重命名笔记",
				"renameField": "笔记名称",
				"unpin": "取消固定笔记"
			},
			"settings": {
				"active": "当前",
				"authGh": "正在使用你的 GitHub CLI 登录。",
				"authNone": "无 GitHub 访问权限 —— 添加令牌以同步私有仓库。",
				"authStored": "正在使用此应用中存储的令牌。",
				"autoCommit": "自动保存到历史",
				"autoCommitHelp": "每 {{n}} 分钟将你的编辑提交到保险库的本地 git 历史，无需手动保存。不会推送到任何远程仓库。",
				"autoSync": "自动同步",
				"autoSyncHelp": "按计时器将更改推送到 GitHub 并拉取最新内容。关闭 Notes 后仍会在后台运行，只要 {{productName}} 保持打开。存在需你决定的冲突时暂停。",
				"badgeCloned": "已克隆",
				"badgeLocal": "本地文件夹",
				"clear": "清除",
				"close": "关闭设置",
				"every": "每",
				"githubSection": "GitHub 访问",
				"intervalAria": "自动同步间隔（分钟）",
				"knowledgeAdded": "已加入知识库。",
				"knowledgeAddedCount_other": "已加入知识库 —— {{n}} 个文件排队待索引。",
				"knowledgeAdding": "正在加入知识库…",
				"knowledgeIndexed": "已在知识库中建立索引 —— 智能体可以搜索这些笔记。",
				"knowledgeNotIndexed": "未建立索引。开启后智能体可搜索此仓库。",
				"knowledgeRemoved": "已从知识库移除。",
				"knowledgeRemoving": "正在从知识库移除…",
				"minutes": "分钟",
				"noRemote": "无远程仓库",
				"open": "打开",
				"prefsSaveFailed": "无法保存同步设置：{{message}}",
				"recording": "录制中…",
				"remove": "移除",
				"removeConfirm": "从应用中移除此仓库？磁盘上的文件不会改动 —— 仅忘记该连接。",
				"removeFailed": "无法移除该仓库：{{message}}",
				"removeIt": "确认移除",
				"reset": "重置",
				"save": "保存",
				"shortcut": "手动同步快捷键",
				"shortcutHelpIdle": "点击以录制新快捷键。",
				"shortcutHelpRecording": "按下想使用的按键 —— Esc 取消。",
				"shortcutNeedsModifier": "请至少使用 ⌘、Ctrl 或 ⌥ 之一 —— 单个字母会在输入时触发。",
				"subtitle": "仓库、GitHub 访问与同步",
				"syncSection": "同步",
				"title": "设置",
				"tokenCleared": "令牌已清除。",
				"tokenClearFailed": "无法清除令牌：{{message}}",
				"tokenPlaceholderEmpty": "github_pat_…",
				"tokenPlaceholderStored": "替换已存储的令牌…",
				"tokenSaved": "令牌已保存。",
				"tokenSaveFailed": "无法保存令牌：{{message}}",
				"vaultsSection": "仓库"
			},
			"sort": {
				"createdNewOld": "创建时间 —— 由新到旧",
				"createdOldNew": "创建时间 —— 由旧到新",
				"modifiedNewOld": "修改时间 —— 由新到旧",
				"modifiedOldNew": "修改时间 —— 由旧到新",
				"nameAZ": "文件名 —— A 到 Z",
				"nameZA": "文件名 —— Z 到 A"
			},
			"sync": {
				"action": "同步",
				"ago_d": "{{n}} 天前同步",
				"ago_h": "{{n}} 小时前同步",
				"ago_m": "{{n}} 分钟前同步",
				"justNow": "刚刚同步",
				"localAction": "保存到本地",
				"localTitle": "将更改提交到此保险库的本地 git 历史。此保险库没有远程仓库，因此不会推送任何内容。",
				"syncing": "同步中"
			},
			"title": "笔记",
			"trash": {
				"empty": "还没有从此保险库删除过任何内容，因此没有 .trash 文件夹。",
				"failed": "无法打开文件夹：{{message}}",
				"open": "打开 .trash 文件夹",
				"unsupported": "此系统不支持打开文件夹。"
			}
		} },
		api: { "client": {
			"proxy_challenge_framed": "请在新标签页中打开 {{origin}}：如果出现登录页面，说明访问代理的会话已过期。在此面板内无法完成登录。请在那里登录后，重新加载此页面。",
			"proxy_challenge_reload": "请重新加载此浏览器标签页：如果出现登录页面，说明访问代理的会话已过期。否则，则是此仪表板前方的代理或防火墙拒绝了请求；请查看代理日志，或稍后重试。"
		} },
		nav: {
			"agent_capabilities": "自定义",
			"mcp_servers": "MCP 服务器"
		},
		pages: { "capabilitiesPage": {
			"knowledge_label": "知识库",
			"skills_label": "技能"
		} },
		components: { "readingWidthToggle": {
			"title_md": "中等宽度",
			"title_full": "全宽"
		} }
	}
};
var own = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);
function lookup(catalog, key) {
	let node = catalog;
	for (const part of key.split(".")) {
		if (node === void 0 || typeof node === "string" || !own(node, part)) return void 0;
		node = node[part];
	}
	return typeof node === "string" ? node : void 0;
}
/** The catalogs to try for `locale`, most specific first, always ending in English. */
function localeChain(locale) {
	const chain = [];
	const add = (candidate) => {
		if (own(CATALOGS, candidate) && !chain.includes(candidate)) chain.push(candidate);
	};
	add(locale);
	add(locale.split("-")[0]);
	add("en");
	return chain;
}
function currentLocale() {
	try {
		const locale = activeLocale();
		return typeof locale === "string" && locale ? locale : "en";
	} catch {
		return "en";
	}
}
var PLACEHOLDER = /\{\{\s*(\w+)\s*\}\}/g;
function pluralSuffix(locale, count) {
	try {
		return new Intl.PluralRules(locale).select(count);
	} catch {
		return "other";
	}
}
/**
* The product name the dashboard's catalogs render as `{{productName}}`. The stock
* dashboard resolves it to "Kiro Crew"; an edition may rename it, which the App
* SDK does not expose to a bundle, so this page always says "Kiro Crew".
*/
var PRODUCT_NAME = "Kiro Crew";
function fill(text, vars) {
	return text.replace(PLACEHOLDER, (whole, name) => {
		if (vars && own(vars, name)) return String(vars[name]);
		return name === "productName" ? PRODUCT_NAME : whole;
	});
}
function t(key, vars) {
	const count = vars && typeof vars.count === "number" ? vars.count : void 0;
	for (const locale of localeChain(currentLocale())) {
		const catalog = CATALOGS[locale];
		if (count !== void 0) {
			const forms = [`${key}_${pluralSuffix(locale, count)}`, `${key}_other`];
			for (const form of forms) {
				const text = lookup(catalog, form);
				if (text !== void 0) return fill(text, vars);
			}
		}
		const text = lookup(catalog, key);
		if (text !== void 0) return fill(text, vars);
	}
	return key;
}
/** The name the page's components call `t` by, kept from the dashboard's `i18n/t`. */
var i18nT = t;
// src/host/Trans.tsx
/**
* `<Trans>` for the one string the page renders with markup inside it.
*
* react-i18next is the dashboard's, not the App SDK's. This reads the same catalog
* string through `t`, then replaces each `<name>…</name>` tag with the matching
* element from `components` (its children become the tag's inner text). Text
* outside a known tag is rendered as text, never as HTML.
*/
var TAG = /<(\w+)>(.*?)<\/\1>|<(\w+)\s*\/>/g;
function Trans({ i18nKey, values, components = {} }) {
	const text = t(i18nKey, values);
	const parts = [];
	let last = 0;
	let index = 0;
	for (const match of text.matchAll(TAG)) {
		const at = match.index ?? 0;
		if (at > last) parts.push(text.slice(last, at));
		const name = match[1] ?? match[3];
		const inner = match[2] ?? "";
		const element = components[name];
		parts.push(element ? cloneElement(element, { key: `t${index++}` }, inner || element.props.children) : inner);
		last = at + match[0].length;
	}
	if (last < text.length) parts.push(text.slice(last));
	return /* @__PURE__ */ jsx(Fragment$1, { children: parts });
}
// src/constants.ts
/** The gateway proxies this prefix to the app's own backend. */
var API_BASE = "/apps/md-notebook/api";
var ACCENT = "var(--accent)";
var ACCENT_BG = "var(--accent-subtle)";
var ACCENT_FG = "var(--accent-fg)";
var FONT_BODY = "var(--font-body)";
var FONT_MONO = "var(--mono)";
/**
* Heading accent chrome.
*
* The heading TEXT stays `--text-strong` — the same token the dashboard's own
* markdown renderer uses — and the active theme's accent appears only as a rule
* or a rail beside it. That split is deliberate and is what makes the styling
* safe on every theme: a theme pack may set `--accent` to any value the
* allowlist in `hooks/themeCss.ts` accepts, including a colour indistinguishable
* from its own `--bg`. Tinting the text with such an accent yields an unreadable
* heading, whereas a rule simply fades into faint decoration. Measured across
* the 36 built-in themes, no single accent ratio clears WCAG AA once arbitrary
* packs are in scope, so no ratio is applied to text at all.
*
* The `color-mix()` expressions behind the three chrome tokens are declared as
* custom properties on `.mdnb-note` in `styles.ts`; see that file for why they
* live in the CSS module rather than here.
*/
var HEADING_FG = "var(--text-strong)";
/** Rule under h1 — the heaviest accent, on the largest type. */
var HEADING_RULE_STRONG = "var(--mdnb-heading-rule-strong)";
/** Rule under h2 — lighter, so the two levels stay distinguishable. */
var HEADING_RULE_SOFT = "var(--mdnb-heading-rule-soft)";
/** Vertical rail beside h3–h6, which are too small to carry a rule legibly. */
var HEADING_RAIL = "var(--mdnb-heading-rail)";
/** localStorage keys. Renaming one silently resets that preference. */
var LS = {
	panelOpen: "mdnb-panel-open",
	panelWidth: "mdnb-panel-width",
	activeVault: "mdnb-active-vault",
	openNote: "mdnb-open-note",
	sort: "mdnb-sort",
	view: "mdnb-view",
	autoCommit: "mdnb-auto-commit",
	syncShortcut: "mdnb-sync-shortcut",
	fullWidth: "mdnb-full-width"
};
/**
* Keys that USED to hold auto-sync settings, kept only so an existing choice can
* be migrated into the backend once (see the settings seed in useMdNotebookPageState).
*
* Auto-sync moved server-side because the backend runs the sync loop itself and
* cannot read a browser's storage, so a value here could never be honoured — and
* because "push my notes to a remote on a timer" is a decision about the vault,
* not about the machine that happened to make it. Deleting these keys outright
* would have turned auto sync off for everyone who had enabled it, with no
* message; they are read once and then removed.
*/
var LEGACY_LS = {
	autoSync: "mdnb-auto-sync",
	autoSyncMins: "mdnb-auto-sync-mins"
};
/**
* Pinned notes are a per-vault preference, so the key carries the vault id.
* Local to this machine on purpose: the pin is a reading aid for THIS device's
* sidebar, and writing it into the note (frontmatter) would commit a UI
* preference into the user's git history on the next sync.
*/
var pinnedKey = (vaultId) => `mdnb-pinned-${vaultId}`;
/**
* Collapsed folder names, per vault for the same reason pins are: two vaults
* hold different trees, so a name collapsed in one means nothing in the other.
* Local to this machine because it is view state, not content — writing it into
* the vault would sync one device's sidebar shape to every other.
*/
var collapsedKey = (vaultId) => `mdnb-collapsed-${vaultId}`;
/**
* Sort options for the notes list. Keys are persisted, so renaming one resets
* the user's choice to the default. Labels live in `labels.ts` (`sortLabel`),
* keyed by these same ids, so the i18n key-reference gate can verify them.
*/
var SORTS = {
	"modified-desc": { cmp: (a, b) => b.modifiedAt - a.modifiedAt },
	"modified-asc": { cmp: (a, b) => a.modifiedAt - b.modifiedAt },
	"created-desc": { cmp: (a, b) => (b.createdAt ?? 0) - (a.createdAt ?? 0) },
	"created-asc": { cmp: (a, b) => (a.createdAt ?? 0) - (b.createdAt ?? 0) },
	"name-asc": { cmp: (a, b) => compareText(a.title, b.title) },
	"name-desc": { cmp: (a, b) => compareText(b.title, a.title) }
};
var DEFAULT_SORT = "name-asc";
/** Manual-sync shortcut. Cmd+S by default (Ctrl+S on non-Mac keyboards). */
var DEFAULT_SYNC_SHORTCUT = {
	key: "s",
	meta: true,
	ctrl: false,
	alt: false,
	shift: false
};
var MAX_AUTO_SYNC_MINS = 1440;
/**
* Left-rail type ramp — the Sessions list's scale, not a second one.
*
* The dashboard declares no global type scale, so the rail borrows the one
* surface that does declare one: the session-row ramp in `pages/chat-sidebar/SessionRow.tsx`
* (`ROW_TITLE_CLS` / `ROW_STATUS_CLS` / `ROW_META_CLS`), quantized to a 4px
* baseline grid, plus that panel's own `text-sm` header. Four sizes carry the
* whole rail — 14 panel title, 13 row, 11 secondary, 10 meta.
*
* 12px is deliberately absent: the sessions list uses no 12px anywhere in a row,
* a folder header, or a menu item, and every 12px the rail used to carry was a
* per-component optical nudge rather than a step. A new slot MUST reuse one of
* these five entries; a literal `fontSize` in the rail is how the ramp drifts.
*
* Sizes and leading only — no family. Everything in the rail inherits
* `FONT_BODY`, so an installed theme pack's sans still wins.
*/
var RAIL_TYPE = {
	/** Panel title — the vault-name trigger. Matches the Sessions panel header,
	*  which is `text-sm` (14px), the one step in the rail above a row. */
	panelTitle: {
		fontSize: "14px",
		lineHeight: "20px"
	},
	/** Any row's headline: a note title, a folder name, the Settings destination,
	*  a menu item. Matches `ROW_TITLE_CLS` and the dashboard's own menu items. */
	row: {
		fontSize: "13px",
		lineHeight: "20px"
	},
	/** Standalone secondary text — a folder's note count, an empty-state line.
	*  Matches `ROW_STATUS_CLS`. */
	secondary: {
		fontSize: "11px",
		lineHeight: "16px"
	},
	/** The line UNDER a headline: folder, relative time. The tightest box in the
	*  ramp, spent on the least important line. Matches `ROW_META_CLS`. */
	meta: {
		fontSize: "10px",
		lineHeight: "12px"
	},
	/** Micro-label inside a chip, where the chip's own padding sets its height, so
	*  the leading collapses instead of adding to it. Same step as `meta`. */
	micro: {
		fontSize: "10px",
		lineHeight: 1
	}
};
/**
* Section label inside the rail's own dropdown menus — `VIEW` / `SORT BY`.
*
* Deliberately NOT a `RAIL_TYPE` slot. This is a menu element that merely lives
* in the rail's file, and `RAIL_TYPE` carries no 12px on purpose: removing 12px
* from the rail is the point of that ramp, so folding a 12px menu size into the
* same table would quietly contradict it.
*
* 12/500 uppercase matches the dashboard's own dropdown section labels
* (`components/HookSkillsDropdown.tsx` — uppercase, `font-medium`, one size step
* under its items), NOT Radix's `DropdownMenuLabel`, which is 12/600 and never
* uppercase. Sitting one step under the 13px items is what keeps it reading as a
* heading rather than as another choice.
*
* Know this before changing it: `textTransform: uppercase` is a no-op for CJK,
* Korean, Devanagari and Bengali, and those glyphs fill their em box. In those
* locales only weight and colour separate this label from the items it heads, so
* the case treatment carries none of the load it carries in Latin and Cyrillic.
*/
var MENU_SECTION_LABEL = {
	fontSize: "12px",
	lineHeight: "16px",
	fontWeight: 500
};
/** Debounce before a note edit is persisted. */
var SAVE_DEBOUNCE_MS = 1e3;
/** External-change poll interval. */
var CHANGES_POLL_MS = 4e3;
var DOC_BODY_LINE_HEIGHT = 1.55;
/**
* Document heading ramp — Obsidian's stock heading variables.
*
* Matched to Obsidian deliberately: a vault is read in both apps, and a note
* whose hierarchy shifts between them reads as two different documents. Stored as
* plain ratios so `DOC_H1_PX` below can be derived from them; the renderer spells
* them as `em`, which resolves against `DOC_BODY_PX` rather than against whatever
* font-size an enclosing surface happens to set.
*
* The ratios are Obsidian's, not a clean modular scale — 1.802 / 1.602 / 1.422 /
* 1.278 / 1.121 steps by roughly 1.125 but not exactly (1.278 -> 1.121 is 1.140).
* Do not "correct" them to powers of 1.125: matching Obsidian is the point, and
* the irregularity is what makes it a match.
*
* Weight is a TABLE, not a rule derived from the level: only h1 is 700, and every
* level below it is 600. That does not coincide with the h1/h2-vs-h3+ split the
* chrome uses (rule underneath vs left rail), so the two cannot share one
* `n <= 2` test — a single expression serving both is how they silently drift.
*/
var DOC_HEADING_EM = [
	1.802,
	1.602,
	1.422,
	1.278,
	1.121,
	1
];
var DOC_HEADING_WEIGHTS = [
	700,
	600,
	600,
	600,
	600,
	600
];
/**
* h1's size in absolute px, for the inline note title.
*
* That title renders in the chrome header, which sets no reading-column
* font-size, so an `em` there would resolve against the wrong base — it needs a
* real px value. Derived from the ramp rather than typed as a literal because the
* two are required to match: a hardcoded copy is what let the title sit 5.8px
* under h1 the moment the reading base moved from 13px to 16px.
*/
var DOC_H1_PX = 16 * DOC_HEADING_EM[0];
/**
* Monospace inside a document, as a ratio of the reading base.
*
* Mono faces run visually larger than the body face at the same nominal size,
* so code is set slightly below body prose. ONE ratio serves both spellings of
* code — inline spans use the `em`, and the surfaces that cannot resolve `em`
* against the reading column (a fenced block's own `<pre>`, the block editor
* opened on a fence, a mermaid block's source fallback) use the derived px.
*
* They are derived from one number because they are the same size: while the
* fenced sites carried their own literal, raising the reading base moved inline
* code and left fences behind, which rendered a fenced block SMALLER than the
* inline code beside it.
*/
var DOC_CODE_EM = .9;
var DOC_CODE_PX = 16 * DOC_CODE_EM;
// src/styles.ts
/**
* Scoped CSS for the Notes app.
*
* Geometry and colour live in inline styles (which cannot be purged and need no
* build step); this string carries only what inline styles cannot express —
* hover and focus.
*
* The one exception is the heading accent VALUES: the `color-mix()` expressions
* that derive the rule and rail colours from `--accent`. They sit here as
* custom properties on `.mdnb-note` rather than as module constants because the
* strict i18n gate (`eslint.i18n.strict.config.js`) reads a string literal under
* an ALL-CAPS declarator as user-visible copy, and a `color-mix()` expression
* carries enough words and spaces to look like prose to it. Declaring them as
* CSS keeps them in the module that is exempt precisely because it holds
* declarations rather than copy, while the geometry that uses them stays inline
* in `Preview.tsx` as the convention above requires.
*/
var MDNB_CSS = `
.mdnb-note{
  --mdnb-heading-rule-strong:color-mix(in srgb,var(--accent) 45%,transparent);
  --mdnb-heading-rule-soft:color-mix(in srgb,var(--accent) 30%,transparent);
  --mdnb-heading-rail:color-mix(in srgb,var(--accent) 55%,transparent)}
.mdnb-row:hover{background:var(--bg-hover);color:var(--text)}
.mdnb-row-actions{position:absolute;top:50%;transform:translateY(-50%);right:6px;
  display:flex;align-items:center;gap:2px;padding:3px;border-radius:8px;
  background:var(--card);border:1px solid var(--border);
  box-shadow:0 1px 3px rgba(0,0,0,0.18);
  opacity:0;pointer-events:none;transition:opacity .12s}
.mdnb-row:hover .mdnb-row-actions,
.mdnb-row-actions:has(:focus-visible){opacity:1;pointer-events:auto}
.mdnb-act:hover{background:var(--bg-hover);color:var(--text)}
.mdnb-act-danger:hover{background:var(--danger-subtle);color:var(--danger)}
.mdnb-dlg-cancel:hover{background:var(--bg-hover)}
.mdnb-dlg-danger:hover{filter:brightness(1.1)}
.mdnb-dlg-cancel:focus-visible,.mdnb-dlg-danger:focus-visible{outline:2px solid var(--ring);outline-offset:2px}
.mdnb-blk:hover{background:var(--bg-hover)}
.mdnb-search::placeholder{color:color-mix(in srgb,var(--muted) 50%,transparent)}
.mdnb-search{transition:border-color .2s,box-shadow .2s}
.mdnb-search:focus{outline:none;border-color:var(--ring);
  box-shadow:0 0 0 3px var(--accent-subtle),0 0 20px color-mix(in srgb,var(--accent) 8%,transparent)}
.mdnb-vault-trigger:hover{background:var(--bg-hover)}
.mdnb-vault-trigger:hover span{color:var(--text)}
.mdnb-collapse{color:var(--muted)}
.mdnb-collapse:hover{color:var(--text);background:var(--bg-hover)}
`;
// src/labels.ts
/**
* Label lookups for the Notes app.
*
* Every key is a literal: the project forbids assembling an i18n key from parts
* (a composed key is invisible to the extractor, so it reads as dead and can
* never be checked), and module-level i18nT() calls would freeze the language
* at import time. Hence explicit switches called during render.
*/
/**
* Catalog key for each sort option, indexed by the persisted sort id from
* `SORTS`. A module-level map of full literal keys (the `STATUS_LABEL_KEY`
* pattern in McpToolsPanel.tsx) so the i18n key-reference gate can resolve
* and verify every key statically.
*/
var SORT_LABEL_KEY = {
	"modified-desc": "apps.mdNotebook.sort.modifiedNewOld",
	"modified-asc": "apps.mdNotebook.sort.modifiedOldNew",
	"created-desc": "apps.mdNotebook.sort.createdNewOld",
	"created-asc": "apps.mdNotebook.sort.createdOldNew",
	"name-asc": "apps.mdNotebook.sort.nameAZ",
	"name-desc": "apps.mdNotebook.sort.nameZA"
};
/** Label for one sort option, by its persisted sort id. */
function sortLabel(sortId) {
	return i18nT(SORT_LABEL_KEY[sortId]);
}
/** Label for the folders / flat-list choice. */
function listViewLabel(view) {
	return view === "folders" ? i18nT("apps.mdNotebook.panel.view_folders") : i18nT("apps.mdNotebook.panel.view_list");
}
/** Label for the rendered / raw-markdown choice. */
function paneViewLabel(mode) {
	return mode === "rendered" ? i18nT("apps.mdNotebook.header.view_rendered") : i18nT("apps.mdNotebook.header.view_raw");
}
/** "Synced N ago" for the sync button, by unit bucket. */
function syncedAgoLabel(unit, n) {
	switch (unit) {
		case "now": return i18nT("apps.mdNotebook.sync.justNow");
		case "m": return i18nT("apps.mdNotebook.sync.ago_m", { n });
		case "h": return i18nT("apps.mdNotebook.sync.ago_h", { n });
		default: return i18nT("apps.mdNotebook.sync.ago_d", { n });
	}
}
/** Hint under a ` ```mermaid ` block whose source failed to render. */
function mermaidErrorLabel() {
	return i18nT("apps.mdNotebook.preview.mermaidError");
}
function detailsSummaryFallbackLabel() {
	return i18nT("apps.mdNotebook.preview.detailsSummaryFallback");
}
// src/host/format.ts
/**
* The one dashboard formatter the App SDK does not export: `fmtDateFields`, a date
* rendered from explicit fields in the host's active language. Restated over the
* SDK's `activeLocale` with the dashboard's `toDate` rules: an empty value or an
* invalid date reads `—`, and a number below 10^11 is seconds rather than ms.
*/
var SECONDS_CEILING = 1e11;
function toDate(value) {
	if (value === null || value === void 0 || value === "") return null;
	if (value instanceof Date) return Number.isNaN(value.getTime()) ? null : value;
	if (typeof value === "number") {
		if (!Number.isFinite(value) || value <= 0) return null;
		const d = new Date(value < SECONDS_CEILING ? value * 1e3 : value);
		return Number.isNaN(d.getTime()) ? null : d;
	}
	const d = new Date(value);
	return Number.isNaN(d.getTime()) ? null : d;
}
function fmtDateFields(value, options) {
	const d = toDate(value);
	if (!d) return "—";
	return new Intl.DateTimeFormat(activeLocale(), {
		localeMatcher: "lookup",
		...options
	}).format(d);
}
// src/host/urlTransform.ts
/**
* The dashboard's `utils/urlTransform`, copied: a bundle cannot import the host's
* module. `defaultUrlTransform` is react-markdown 10.1.0's (MIT, see NOTICE), restated
* here so the bundle does not carry the whole renderer for one function.
*/
var SAFE_PROTOCOL = /^(https?|ircs?|mailto|xmpp)$/i;
/** react-markdown's `defaultUrlTransform`: keep a relative URL or a safe scheme, else ''. */
function defaultUrlTransform(value) {
	const colon = value.indexOf(":");
	const questionMark = value.indexOf("?");
	const numberSign = value.indexOf("#");
	const slash = value.indexOf("/");
	if (colon === -1 || slash !== -1 && colon > slash || questionMark !== -1 && colon > questionMark || numberSign !== -1 && colon > numberSign || SAFE_PROTOCOL.test(value.slice(0, colon))) return value;
	return "";
}
var ALLOWED_PROTOCOLS = /* @__PURE__ */ new Set(["vscode:", "vscode-insiders:"]);
/** Windows drive-letter absolute path (`C:/…` or `C:\…`). THE single copy of
*  this predicate — it decides both which image `src` values bypass
*  `defaultUrlTransform` (below) and which are treated as local file reads
*  (ImgWithFallback), so the two decisions can never drift apart.
*
*  Deliberately EXCLUDES backslash UNC (`\\host\…`): a UNC path names a HOST,
*  and letting attacker-authored markdown route one to `/api/file-raw` would
*  hand Windows an outbound SMB authentication probe. Legitimate UNC upload
*  paths never reach the renderer in backslash form — mdImageDest normalizes
*  them to `//host/share/…`, which flows through `defaultUrlTransform` as a
*  scheme-less relative URL and is validated against the gateway's trusted
*  attachment roots server-side before any filesystem resolution.
*
*  Anchored and separator-required so real URI schemes never match — every
*  registered scheme is 2+ characters (`js:`), and a single-letter scheme
*  without a following separator (`c:foo`) is still rejected. */
var WINDOWS_ABS_PATH_RE = /^[A-Za-z]:[\\/]/;
function urlTransform(url, key) {
	if (key === "src" && WINDOWS_ABS_PATH_RE.test(url)) return url;
	try {
		const u = new URL(url);
		if (ALLOWED_PROTOCOLS.has(u.protocol) && u.href.length > u.protocol.length + 2) return u.href;
	} catch {}
	return defaultUrlTransform(url);
}
// src/utils.ts
/**
* Pure helpers for the Notes app — no React, no DOM, so they are unit-testable.
*
* In the original single-file app version this logic lived inside the component
* module and no test runner could import it; the editor behaviour (indent
* measurement, list continuation, caret placement) was therefore unverifiable.
*/
/**
* Leading indent + marker of a list item: bullet, task or ordered.
* Group 1 is the indent, 2 the whole marker, 3 the ordinal (numbered only).
*/
var LIST_MARKER_RE = /^(\s*)(- \[[ x]\] |[-*] |(\d+)\. )/;
/** Frontmatter block at the top of a note. */
var FM_RE = /^---\r?\n[\s\S]*?\r?\n---[ \t]*(?:\r?\n|$)/;
/**
* Pixel offset for a run of leading whitespace.
*
* Counting characters would score a tab the same as one space, which renders
* real nesting shallower than a stray two-space indent. Expanding to tab stops
* is what every editor (and Obsidian) does, so a tab-indented child sits a full
* level in and leftover spaces land proportionally.
*/
function indentPx(ws) {
	let col = 0;
	for (const ch of ws) col = ch === "	" ? col + 4 - col % 4 : col + 1;
	return col * 8;
}
/** A delimiter-row cell: hyphens, with a colon on either side for alignment. */
var SEP_CELL_RE = /^:?-+:?$/;
/** True when the line has a pipe that is not backslash-escaped. */
function hasPipe(line) {
	return line.replace(/\\\|/g, "").includes("|");
}
/**
* Split one table row into trimmed cells.
*
* `\|` is a literal pipe inside a cell, so it must not split — that is how a
* note writes a pipe in prose or in `a \| b` code. The leading and trailing
* pipes are optional in GFM; when present they produce an empty edge cell that
* is delimiter rather than content, so those are dropped.
*/
function splitTableRow(line) {
	const cells = [];
	let cur = "";
	for (let i = 0; i < line.length; i++) if (line[i] === "\\" && line[i + 1] === "|") {
		cur += "|";
		i++;
	} else if (line[i] === "|") {
		cells.push(cur);
		cur = "";
	} else cur += line[i];
	cells.push(cur);
	if (cells.length > 1 && cells[0].trim() === "") cells.shift();
	if (cells.length > 1 && cells[cells.length - 1].trim() === "") cells.pop();
	return cells.map((c) => c.trim());
}
/**
* Per-column alignment when `line` is a delimiter row for `cols` columns, else
* null. The cell count has to match the header exactly: that is what separates
* a table from a paragraph that happens to contain pipes.
*/
function tableAlignments(line, cols) {
	if (!hasPipe(line)) return null;
	const cells = splitTableRow(line);
	if (cells.length !== cols || !cells.every((c) => SEP_CELL_RE.test(c))) return null;
	return cells.map((c) => {
		const left = c.startsWith(":");
		const right = c.endsWith(":");
		if (left && right) return "center";
		if (right) return "right";
		return left ? "left" : null;
	});
}
/**
* Read the table starting at `start`, or null when there is none there.
*
* A table is a header line followed by a matching delimiter row, then rows for
* as long as they keep carrying pipes. Requiring a pipe in the delimiter row
* too keeps a bare `---` under a line of prose an horizontal rule, which is
* what it has always rendered as.
*/
function parseTable(lines, start) {
	const headerLine = lines[start];
	if (headerLine === void 0 || !hasPipe(headerLine)) return null;
	const sep = lines[start + 1];
	if (sep === void 0) return null;
	const header = splitTableRow(headerLine);
	const align = tableAlignments(sep, header.length);
	if (!align) return null;
	const rows = [];
	let end = start + 1;
	for (let i = start + 2; i < lines.length; i++) {
		if (lines[i].trim() === "" || !hasPipe(lines[i])) break;
		const cells = splitTableRow(lines[i]);
		rows.push(Array.from({ length: header.length }, (_, c) => cells[c] ?? ""));
		end = i;
	}
	return {
		header,
		align,
		rows,
		end
	};
}
/**
* Indent (or with `out`, outdent) the list item containing the caret.
* Returns the rewritten text and new caret position, or null when the caret
* is not on a list item — callers then leave the keystroke alone so Tab can
* still move focus out of the editor.
*/
/**
* Resolve a markdown image source to a URL the browser can load, or null when
* the source must degrade to plain text.
*
* A note is ordinary text out of a git-backed vault, so its image sources are
* untrusted input and the two cases are kept apart deliberately:
*
* - a remote source is handed to `urlTransform()`, which returns '' for a
*   scheme it refuses. `javascript:` and `data:` land there, so a crafted note
*   cannot smuggle script or an inline payload past this point;
* - a local source is served through the dashboard's `/api/file-raw`, the same
*   endpoint the chat renderer uses for local images. Nothing about the path is
*   trusted here on purpose: that endpoint validates it, refuses sensitive
*   paths and symlinks, and answers only for bytes whose magic number really is
*   an image, so path traversal in a note is the endpoint's answer to give.
*
* A relative source resolves against `noteDir`, the directory of the note being
* read, which is how `assets/diagram.png` sitting beside the note is found. It
* stays unresolved without that directory rather than guessing a root.
*/
function resolveNoteImageSrc(src, noteDir) {
	const raw = src.trim();
	if (!raw) return null;
	const winAbs = WINDOWS_ABS_PATH_RE.test(raw);
	if (!(raw.startsWith("/") || raw.startsWith("~") || raw.startsWith(".") || winAbs || !/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(raw))) return urlTransform(raw) || null;
	const rooted = raw.startsWith("/") || raw.startsWith("~") || winAbs;
	if (!rooted && !noteDir) return null;
	const path = rooted ? raw : `${noteDir}/${raw.replace(/^\.\//, "")}`;
	return `/api/file-raw?path=${encodeURIComponent(path)}`;
}
/**
* The vault-rooted URL for a root-relative image source (`/images/a.png`), or
* null when the source is not one or cannot be placed safely inside the vault.
*
* `resolveNoteImageSrc` serves a leading-slash source as an absolute filesystem
* path first, so a real absolute path keeps loading on the first request. This
* is the second try, taken only after that one fails: the same path read
* against the vault root, which is what a vault that links `/images/a.png`
* means. It asks `/api/file-raw` for a path under the vault, nothing more than
* the absolute path could already ask for, and every check on that endpoint
* (sensitive paths, symlinks, image magic number) still applies to it.
*
* The candidate must stay lexically inside the root, so it is refused rather
* than normalised when any segment is `.` or `..`, including when written
* percent-encoded or with a backslash, or when the source carries a NUL byte or
* is protocol-relative (`//host/x`). A refused candidate yields no second try,
* so the image degrades to its alt text as before.
*/
function vaultRootImageSrc(src, vaultRoot) {
	const raw = src.trim();
	if (!vaultRoot || !raw.startsWith("/") || raw.startsWith("//")) return null;
	const rel = raw.slice(1);
	if (!rel || rel.includes("\0")) return null;
	const segments = [];
	for (const segment of rel.split(/[\\/]/)) {
		let decoded = segment;
		try {
			decoded = decodeURIComponent(segment);
		} catch {}
		if (/[\\/\0]/.test(decoded)) return null;
		if (decoded === "." || decoded === ".." || segment === "." || segment === "..") return null;
		segments.push(decoded);
	}
	const root = vaultRoot.replace(/[\\/]+$/, "");
	return `/api/file-raw?path=${encodeURIComponent(`${root}/${segments.join("/")}`)}`;
}
/** Directory of a note inside its vault, absolute, for resolving its images. */
function noteDirPath(vault, notePath) {
	if (!vault || !notePath) return void 0;
	const root = vaultContentPath(vault);
	const slash = notePath.lastIndexOf("/");
	return slash === -1 ? root : `${root}/${notePath.slice(0, slash)}`;
}
/**
* Where an embed target in Obsidian's relative link format (`./a.png`,
* `../assets/a.png`) points, as segments under the vault root: read from the
* note's folder, which `noteDirPath` builds as the vault root plus the note's
* folder. Null when it climbs above the vault root.
*/
function noteRelativeSegments(segments, noteDir, vaultRoot) {
	if (!noteDir || !vaultRoot) return null;
	const out = noteDir.slice(vaultRoot.length).split("/").filter(Boolean);
	for (const segment of segments) if (segment === "..") {
		if (out.pop() === void 0) return null;
	} else if (segment && segment !== ".") out.push(segment);
	return out;
}
function shiftListItem(text, pos, out) {
	const lineStart = text.lastIndexOf("\n", pos - 1) + 1;
	const nl = text.indexOf("\n", pos);
	const lineEnd = nl === -1 ? text.length : nl;
	const line = text.slice(lineStart, lineEnd);
	if (!LIST_MARKER_RE.test(line)) return null;
	if (out) {
		const m = /^(\t| {1,4})/.exec(line);
		if (!m) return null;
		return {
			text: text.slice(0, lineStart) + line.slice(m[0].length) + text.slice(lineEnd),
			pos: Math.max(lineStart, pos - m[0].length)
		};
	}
	return {
		text: text.slice(0, lineStart) + "	" + line + text.slice(lineEnd),
		pos: pos + 1
	};
}
/**
* The marker a new block should inherit when Enter splits a list item.
* Numbers increment and a checked task starts unchecked. Empty string when the
* line is not a list item.
*/
function carriedMarker(before) {
	const m = LIST_MARKER_RE.exec(before);
	if (!m) return "";
	return m[3] ? `${m[1]}${Number(m[3]) + 1}. ` : `${m[1]}${m[2].replace("[x]", "[ ]")}`;
}
/** True when Enter on this line should leave the list rather than continue it. */
function isEmptyListItem(before, after) {
	const m = LIST_MARKER_RE.exec(before);
	return Boolean(m) && before.slice(m[0].length).trim() === "" && after === "";
}
/** Group a flat note list into a folder tree. */
function buildTree(notes) {
	const root = {
		folders: /* @__PURE__ */ new Map(),
		notes: []
	};
	for (const n of notes) {
		const parts = n.path.split("/");
		let cur = root;
		for (const part of parts.slice(0, -1)) {
			if (!cur.folders.has(part)) cur.folders.set(part, {
				folders: /* @__PURE__ */ new Map(),
				notes: []
			});
			cur = cur.folders.get(part);
		}
		cur.notes.push(n);
	}
	return root;
}
/** Absolute path a Knowledge source should watch (vault root + subfolder). */
function vaultContentPath(v) {
	return v.subfolder ? `${v.localPath}/${v.subfolder}` : v.localPath;
}
/**
* Relative timestamp for a note row: time today, weekday + time this week,
* else the date (with the year when it is not the current one).
*/
function relTime(ms) {
	const d = new Date(ms);
	const now = /* @__PURE__ */ new Date();
	const time = fmtDateFields(d, {
		hour: "numeric",
		minute: "2-digit"
	});
	if (d.toDateString() === now.toDateString()) return time;
	if (now.getTime() - d.getTime() < 6048e5) return `${fmtDateFields(d, { weekday: "short" })} ${time}`;
	return fmtDateFields(d, {
		month: "short",
		day: "numeric",
		...d.getFullYear() !== now.getFullYear() ? { year: "numeric" } : {}
	});
}
/** Buckets for the "time since last sync" label. Rendered via i18n. */
function agoBucket(ms) {
	const delta = Date.now() - ms;
	if (delta < 45e3) return {
		unit: "now",
		value: 0
	};
	const mins = Math.round(delta / 6e4);
	if (mins < 60) return {
		unit: "m",
		value: mins
	};
	const hrs = Math.round(mins / 60);
	if (hrs < 24) return {
		unit: "h",
		value: hrs
	};
	return {
		unit: "d",
		value: Math.round(hrs / 24)
	};
}
/** Human shortcut label in macOS modifier order: ⌃ ⌥ ⇧ ⌘ Key. */
function formatShortcut(sc) {
	if (!sc?.key) return "—";
	const parts = [];
	if (sc.ctrl) parts.push("⌃");
	if (sc.alt) parts.push("⌥");
	if (sc.shift) parts.push("⇧");
	if (sc.meta) parts.push("⌘");
	parts.push(sc.key.length === 1 ? sc.key.toUpperCase() : sc.key);
	return parts.join(" ");
}
/** True when a keyboard event matches a recorded shortcut exactly. */
function matchesShortcut(e, sc) {
	if (!sc?.key) return false;
	return e.key.toLowerCase() === sc.key.toLowerCase() && e.metaKey === !!sc.meta && e.ctrlKey === !!sc.ctrl && e.altKey === !!sc.alt && e.shiftKey === !!sc.shift;
}
/** Read a JSON value from localStorage, falling back when absent or corrupt. */
function loadPref(key, fallback) {
	try {
		const raw = localStorage.getItem(key);
		return raw === null ? fallback : JSON.parse(raw);
	} catch {
		return fallback;
	}
}
/** Persist a JSON value, ignoring quota or privacy-mode failures. */
/**
* The note the panel should open after `path` is deleted: the next one DOWN in
* the visible order, or the one above when the deleted note was last. Returns
* null when it was the only note, so the caller falls back to the empty state.
*
* Takes the VISIBLE order rather than the raw note list, because "next" has to
* mean what the user sees — folders view, flat list and search results order
* differently, and a collapsed folder's notes are not candidates at all.
*/
function neighborAfterDelete(visible, path) {
	const i = visible.indexOf(path);
	if (i === -1) return null;
	return visible[i + 1] ?? visible[i - 1] ?? null;
}
/**
* Whether a captured note identity still refers to the note open right now.
*
* BOTH halves are compared because a note path is vault-RELATIVE: two vaults can
* each hold `One.md`. Matching on path alone reports vault A's note as being
* vault B's identically-named one, and every caller here is an async completion
* deciding whether to touch the live editor — so a false match drops keystrokes,
* renders an unrelated row un-openable, or offers "use the file on disk" against
* a buffer from a different vault.
*
* Used by the in-flight DELETE guard and the in-flight SAVE conflict guard.
*/
function targetsSameNote(captured, vault, path) {
	if (!captured || path === null) return false;
	return captured.vault === vault && captured.path === path;
}
/**
* Which badge a note row shows, if any — the one slot on the row that means
* "state of this file".
*
* `deleting` wins: it is the newer, more relevant fact than how the file
* compares to git. `pending` is suppressed entirely when the vault has no remote
* (`showSyncBadge` false): "differs from the last commit" is not a state the user
* can act on there, it clears itself on the next autosave, and left visible it
* reads as "not saved" — the opposite of the truth, since the badge only appears
* once the file has reached disk.
*/
function rowBadge(input) {
	if (input.deleting) return "deleting";
	if (!input.showSyncBadge || input.syncStatus === "synced") return null;
	return "pending";
}
function savePref(key, value) {
	try {
		localStorage.setItem(key, JSON.stringify(value));
	} catch {}
}
/** Forget a stored preference, ignoring quota or privacy-mode failures. */
function clearPref(key) {
	try {
		localStorage.removeItem(key);
	} catch {}
}
/**
* An auto-sync interval coerced into a cadence that can actually be scheduled.
*
* Two steps, in this order, because they answer different questions. `Math.round(n)
* || DEFAULT` first: 0, NaN and '' all mean the user expressed no interval at all
* (an emptied number input reports ''), so they land on the default rather than on
* MIN — a one-minute push loop is not what clearing the field asks for. Only then
* is a real number clamped into the allowed range.
*
* Applied when a value is READ as well as when it is written. An unclamped 0
* reaching the auto-sync timer schedules `setInterval(…, 0)`, which syncs in a
* tight loop and pushes to the remote continuously.
*/
function clampAutoSyncMins(n) {
	return Math.min(MAX_AUTO_SYNC_MINS, Math.max(1, Math.round(n) || 10));
}
/**
* A closed ` ```mermaid ` fence starting at `start`, or null.
*
* Strict on the opening line (` ```mermaid ` alone) so other info-strings keep
* their generic code-block rendering, but the closing scan accepts any line
* starting with ` ``` ` — the same rule the generic fence toggle applies — so
* both parsers always agree on where a block ends. An UNCLOSED mermaid fence
* returns null on purpose: the generic path already renders run-away fences as
* code until EOF, and a half-typed diagram flashing through the renderer on
* every keystroke would be noise.
*/
function parseMermaidBlock(lines, start) {
	if (!/^```mermaid\s*$/.test(lines[start])) return null;
	for (let i = start + 1; i < lines.length; i++) if (lines[i].startsWith("```")) return {
		code: lines.slice(start + 1, i).join("\n"),
		end: i
	};
	return null;
}
/**
* A ``<details>`` collapsible block, from its opening line to the matching
* ``</details>``, or ``null`` when the block is not opened here or never closes.
*
* The one multi-line HTML block this renderer reads — every other raw tag stays
* literal text. Shaped like :func:`parseMermaidBlock`: an unclosed ``<details>``
* returns null and falls through to the generic line path, exactly as a run-away
* code fence does, so a half-typed block is still editable rather than eating
* the rest of the note.
*
* ``summary`` is the text inside a leading ``<summary>…</summary>`` — inline on
* the open line (``<details><summary>Answer</summary>``) or on its own next line
* — with the tags removed; empty when the author wrote no summary (the renderer
* shows a localized fallback). ``body`` is the lines between the summary and the
* close, verbatim. Nothing here interprets the content as HTML: ``summary`` and
* every ``body`` line are handed to the same ``inline()`` span renderer the rest
* of the note uses, so they are escaped by React and no raw tag passes through.
*/
/** The ``</details>`` closing tag, tolerant of inner whitespace (``</details >``). */
function detailsCloseRe() {
	return /<\/details\s*>/;
}
function parseDetailsBlock(lines, start) {
	const open = lines[start];
	const openMatch = /^<details\b[^>]*>(.*)$/.exec(open);
	if (openMatch === null) return null;
	let end = -1;
	let inFence = false;
	for (let i = start; i < lines.length; i++) {
		if (i > start && lines[i].startsWith("```")) {
			inFence = !inFence;
			continue;
		}
		if (!inFence && detailsCloseRe().test(lines[i])) {
			end = i;
			break;
		}
	}
	if (end < 0) return null;
	const closeOnEnd = detailsCloseRe().exec(lines[end]);
	if (closeOnEnd !== null && lines[end].slice(closeOnEnd.index + closeOnEnd[0].length).trim() !== "") return null;
	const inner = [openMatch[1], ...lines.slice(start + 1, end + 1)];
	const closeIdx = inner.length - 1;
	const closeMatch = detailsCloseRe().exec(inner[closeIdx]);
	inner[closeIdx] = inner[closeIdx].slice(0, closeMatch === null ? void 0 : closeMatch.index);
	const joined = inner.join("\n");
	let summary = "";
	let bodyText = joined;
	const summaryMatch = /^\s*<summary\b[^>]*>([\s\S]*?)<\/summary>/.exec(joined);
	if (summaryMatch !== null) {
		summary = summaryMatch[1].trim();
		bodyText = joined.slice(summaryMatch[0].length);
	}
	const body = bodyText.split("\n");
	while (body.length && body[0].trim() === "") body.shift();
	while (body.length && body[body.length - 1].trim() === "") body.pop();
	return {
		summary,
		body,
		end
	};
}
/**
* Language named on a fence's opening line (` ```python ` -> `python`), or
* undefined for a bare fence. Only the first whitespace-delimited token after
* the backticks counts, matching how highlight.js and every other markdown
* renderer read a fence info string; anything after it (e.g. a title) is not
* this app's concern yet. Undefined — not '' — is the signal a caller checks
* to keep an unlabelled fence out of highlightAuto().
*/
function fenceLang(openLine) {
	return openLine.slice(3).trim().split(/\s+/)[0] || void 0;
}
// src/BlockEditor.tsx
/** In-place editors: one markdown block, and the note's inline title. */
/**
* Editor for one block of markdown source.
*
* Enter ENDS the block and opens a fresh one below (via `onSplit`) rather than
* growing this one, so the next line can take its own format. Shift+Enter keeps
* the older behaviour — a literal newline inside the same block.
*/
function BlockEditor({ initial, onCommit, onCancel, onDirty, onSplit, textStyle, caret }) {
	const ime = useImeGuard();
	const [text, setText] = useState(initial);
	const ref = useRef(null);
	const handedOff = useRef(false);
	const autoSize = useCallback(() => {
		const ta = ref.current;
		if (!ta) return;
		ta.style.height = "auto";
		ta.style.height = `${ta.scrollHeight}px`;
	}, []);
	useEffect(() => {
		const ta = ref.current;
		if (!ta) return;
		autoSize();
		const pos = typeof caret === "number" ? Math.min(caret, ta.value.length) : ta.value.length;
		ta.focus();
		ta.setSelectionRange(pos, pos);
	}, [autoSize, caret]);
	const rewrite = useCallback((ta, next, pos) => {
		ta.value = next;
		ta.setSelectionRange(pos, pos);
		setText(next);
		onDirty?.();
		autoSize();
	}, [autoSize, onDirty]);
	return /* @__PURE__ */ jsx("textarea", {
		ref,
		value: text,
		spellCheck: false,
		rows: 1,
		"aria-label": i18nT("apps.mdNotebook.editor.blockAria"),
		onChange: (e) => {
			setText(e.target.value);
			onDirty?.();
			autoSize();
		},
		...ime.bindComposition({ onBlur: () => {
			if (!handedOff.current) onCommit(text);
		} }),
		onKeyDown: (e) => {
			if (e.key === "Escape") {
				e.stopPropagation();
				onCancel();
			} else if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
				if (!ime.claimEnter(e)) return;
				e.currentTarget.blur();
			} else if (e.key === "Tab") {
				const ta = e.currentTarget;
				const next = shiftListItem(text, ta.selectionStart, e.shiftKey);
				if (!next) return;
				if (!ime.claimKey(e)) return;
				e.preventDefault();
				rewrite(ta, next.text, next.pos);
			} else if (e.key === "Enter" && !e.shiftKey && onSplit) {
				if (!ime.claimEnter(e)) return;
				const ta = e.currentTarget;
				const before = text.slice(0, ta.selectionStart);
				const after = text.slice(ta.selectionEnd);
				if (isEmptyListItem(before, after)) {
					setText("");
					autoSize();
					return;
				}
				const prefix = carriedMarker(before);
				handedOff.current = true;
				onSplit(before, prefix + after, prefix.length);
			}
		},
		style: {
			width: "100%",
			boxSizing: "border-box",
			resize: "none",
			border: `1px solid ${ACCENT_BG}`,
			outline: "none",
			background: "var(--bg-elevated)",
			color: "var(--text)",
			borderRadius: "4px",
			padding: "2px 6px",
			display: "block",
			overflow: "hidden",
			fontSize: `16px`,
			fontFamily: FONT_BODY,
			lineHeight: DOC_BODY_LINE_HEIGHT,
			...textStyle
		}
	});
}
/**
* Inline title, Obsidian-style: the note's FILENAME rendered as the first line
* of the document rather than tucked into the app chrome. Click to edit;
* committing renames the file on disk.
*
* It is deliberately not part of the markdown text — the file's own first line
* stays whatever the user wrote, so nothing is consumed or hidden.
*/
function InlineTitle({ path, onRename, mb = "8px" }) {
	const ime = useImeGuard();
	const name = (path.split("/").pop() ?? path).replace(/\.md$/i, "");
	const [editing, setEditing] = useState(false);
	const [value, setValue] = useState(name);
	const ref = useRef(null);
	useEffect(() => {
		setEditing(false);
		setValue(name);
	}, [path, name]);
	const autoSize = useCallback(() => {
		const ta = ref.current;
		if (!ta) return;
		ta.style.height = "auto";
		ta.style.height = `${ta.scrollHeight}px`;
	}, []);
	useEffect(() => {
		if (!editing || !ref.current) return;
		autoSize();
		ref.current.focus();
		ref.current.select();
	}, [editing, autoSize]);
	const shared = {
		fontSize: `${DOC_H1_PX}px`,
		fontWeight: DOC_HEADING_WEIGHTS[0],
		lineHeight: 1.25,
		fontFamily: FONT_BODY
	};
	if (!editing) return /* @__PURE__ */ jsx(Clickable, {
		className: "mdnb-blk",
		onClick: () => {
			setValue(name);
			setEditing(true);
		},
		"aria-label": i18nT("apps.mdNotebook.editor.renameHint"),
		title: i18nT("apps.mdNotebook.editor.renameHint"),
		style: {
			...shared,
			cursor: "text",
			borderRadius: "4px",
			padding: "0 4px",
			margin: `0 -4px ${mb}`,
			whiteSpace: "normal",
			overflowWrap: "anywhere"
		},
		children: name
	});
	return /* @__PURE__ */ jsx("textarea", {
		ref,
		value,
		spellCheck: false,
		rows: 1,
		"aria-label": i18nT("apps.mdNotebook.editor.titleAria"),
		onChange: (e) => {
			setValue(e.target.value.replace(/\n/g, ""));
			autoSize();
		},
		...ime.bindComposition({ onBlur: () => {
			setEditing(false);
			if (value.trim() && value.trim() !== name) onRename(value);
		} }),
		onKeyDown: (e) => {
			if (e.key === "Escape") {
				e.stopPropagation();
				setValue(name);
				setEditing(false);
			} else if (e.key === "Enter") {
				if (!ime.claimEnter(e)) return;
				e.currentTarget.blur();
			}
		},
		style: {
			...shared,
			width: "100%",
			boxSizing: "border-box",
			display: "block",
			resize: "none",
			overflow: "hidden",
			background: "var(--bg-elevated)",
			color: "var(--text)",
			border: `1px solid ${ACCENT_BG}`,
			borderRadius: "4px",
			padding: "0 4px",
			margin: `0 -4px ${mb}`,
			outline: "none"
		}
	});
}
// node_modules/dompurify/dist/purify.es.mjs
/*! @license DOMPurify 3.4.17 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.17/LICENSE */
function _OverloadYield(e, d) {
	this.v = e, this.k = d;
}
function _arrayLikeToArray(r, a) {
	(null == a || a > r.length) && (a = r.length);
	for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
	return n;
}
function _arrayWithHoles(r) {
	if (Array.isArray(r)) return r;
}
function _iterableToArrayLimit(r, l) {
	var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
	if (null != t) {
		var e, n, i, u, a = [], f = !0, o = !1;
		try {
			if (i = (t = t.call(r)).next, 0 === l) {
				if (Object(t) !== t) return;
				f = !1;
			} else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
		} catch (r) {
			o = !0, n = r;
		} finally {
			try {
				if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
			} finally {
				if (o) throw n;
			}
		}
		return a;
	}
}
function _nonIterableRest() {
	throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
function _slicedToArray(r, e) {
	return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _unsupportedIterableToArray(r, a) {
	if (r) {
		if ("string" == typeof r) return _arrayLikeToArray(r, a);
		var t = {}.toString.call(r).slice(8, -1);
		return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
	}
}
function AsyncGenerator(e) {
	var t, n;
	function resume(t, n) {
		try {
			var r = e[t](n), o = r.value, u = o instanceof _OverloadYield;
			Promise.resolve(u ? o.v : o).then(function(n) {
				if (u) {
					var i = "return" === t && o.k ? t : "next";
					if (!o.k || n.done) return resume(i, n);
					n = e[i](n).value;
				}
				settle(!!r.done, n);
			}, function(e) {
				resume("throw", e);
			});
		} catch (e) {
			settle(2, e);
		}
	}
	function settle(e, r) {
		2 === e ? t.reject(r) : t.resolve({
			value: r,
			done: e
		}), (t = t.next) ? resume(t.key, t.arg) : n = null;
	}
	this._invoke = function(e, r) {
		return new Promise(function(o, u) {
			var i = {
				key: e,
				arg: r,
				resolve: o,
				reject: u,
				next: null
			};
			n ? n = n.next = i : (t = n = i, resume(e, r));
		});
	}, "function" != typeof e.return && (this.return = void 0);
}
AsyncGenerator.prototype["function" == typeof Symbol && Symbol.asyncIterator || "@@asyncIterator"] = function() {
	return this;
}, AsyncGenerator.prototype.next = function(e) {
	return this._invoke("next", e);
}, AsyncGenerator.prototype.throw = function(e) {
	return this._invoke("throw", e);
}, AsyncGenerator.prototype.return = function(e) {
	return this._invoke("return", e);
};
var entries = Object.entries;
var setPrototypeOf = Object.setPrototypeOf;
var isFrozen = Object.isFrozen;
var getPrototypeOf = Object.getPrototypeOf;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var freeze = Object.freeze;
var seal = Object.seal;
var create = Object.create;
var _ref = typeof Reflect !== "undefined" && Reflect;
var apply = _ref.apply;
var construct = _ref.construct;
if (!freeze) freeze = function freeze(x) {
	return x;
};
if (!seal) seal = function seal(x) {
	return x;
};
if (!apply) apply = function apply(func, thisArg) {
	for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) args[_key - 2] = arguments[_key];
	return func.apply(thisArg, args);
};
if (!construct) construct = function construct(Func) {
	for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) args[_key2 - 1] = arguments[_key2];
	return new Func(...args);
};
var arrayForEach = unapply(Array.prototype.forEach);
Array.prototype.indexOf;
var arrayLastIndexOf = unapply(Array.prototype.lastIndexOf);
var arrayPop = unapply(Array.prototype.pop);
var arrayPush = unapply(Array.prototype.push);
var arraySlice = unapply(Array.prototype.slice);
var arraySplice = unapply(Array.prototype.splice);
var arrayIsArray = Array.isArray;
var setCreate = unconstruct(Set);
var setAdd = unapply(Set.prototype.add);
var setHas = unapply(Set.prototype.has);
var stringToLowerCase = unapply(String.prototype.toLowerCase);
var stringToString = unapply(String.prototype.toString);
var stringMatch = unapply(String.prototype.match);
var stringReplace = unapply(String.prototype.replace);
var stringIndexOf = unapply(String.prototype.indexOf);
var stringTrim = unapply(String.prototype.trim);
var numberToString = unapply(Number.prototype.toString);
var booleanToString = unapply(Boolean.prototype.toString);
var bigintToString = typeof BigInt === "undefined" ? null : unapply(BigInt.prototype.toString);
var symbolToString = typeof Symbol === "undefined" ? null : unapply(Symbol.prototype.toString);
var objectHasOwnProperty = unapply(Object.prototype.hasOwnProperty);
var objectToString = unapply(Object.prototype.toString);
var regExpTest = unapply(RegExp.prototype.test);
var typeErrorCreate = unconstruct(TypeError);
/**
* Creates a new function that calls the given function with a specified thisArg and arguments.
*
* @param func - The function to be wrapped and called.
* @returns A new function that calls the given function with a specified thisArg and arguments.
*/
function unapply(func) {
	return function(thisArg) {
		if (thisArg instanceof RegExp) thisArg.lastIndex = 0;
		for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) args[_key3 - 1] = arguments[_key3];
		return apply(func, thisArg, args);
	};
}
/**
* Creates a new function that constructs an instance of the given constructor function with the provided arguments.
*
* @param func - The constructor function to be wrapped and called.
* @returns A new function that constructs an instance of the given constructor function with the provided arguments.
*/
function unconstruct(Func) {
	return function() {
		for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) args[_key4] = arguments[_key4];
		return construct(Func, args);
	};
}
/**
* Add properties to a lookup table
*
* @param set - The set to which elements will be added.
* @param array - The array containing elements to be added to the set.
* @param transformCaseFunc - An optional function to transform the case of each element before adding to the set.
* @returns The modified set with added elements.
*/
function addToSet(set, array) {
	let transformCaseFunc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : stringToLowerCase;
	if (setPrototypeOf) setPrototypeOf(set, null);
	if (!arrayIsArray(array)) return set;
	let l = array.length;
	while (l--) {
		let element = array[l];
		if (typeof element === "string") {
			const lcElement = transformCaseFunc(element);
			if (lcElement !== element) {
				if (!isFrozen(array)) array[l] = lcElement;
				element = lcElement;
			}
		}
		set[element] = true;
	}
	return set;
}
/**
* Clean up an array to harden against CSPP
*
* @param array - The array to be cleaned.
* @returns The cleaned version of the array
*/
function cleanArray(array) {
	for (let index = 0; index < array.length; index++) if (!objectHasOwnProperty(array, index)) array[index] = null;
	return array;
}
/**
* Shallow clone an object
*
* @param object - The object to be cloned.
* @returns A new object that copies the original.
*/
function clone(object) {
	const newObject = create(null);
	for (const _ref2 of entries(object)) {
		var _ref3 = _slicedToArray(_ref2, 2);
		const property = _ref3[0];
		const value = _ref3[1];
		if (objectHasOwnProperty(object, property)) {
			if (arrayIsArray(value)) newObject[property] = cleanArray(value);
			else if (value && typeof value === "object" && value.constructor === Object) newObject[property] = clone(value);
			else newObject[property] = value;
		}
	}
	return newObject;
}
/**
* Convert non-node values into strings without depending on direct property access.
*
* @param value - The value to stringify.
* @returns A string representation of the provided value.
*/
function stringifyValue(value) {
	switch (typeof value) {
		case "string": return value;
		case "number": return numberToString(value);
		case "boolean": return booleanToString(value);
		case "bigint": return bigintToString ? bigintToString(value) : "0";
		case "symbol": return symbolToString ? symbolToString(value) : "Symbol()";
		case "undefined": return objectToString(value);
		case "function":
		case "object": {
			if (value === null) return objectToString(value);
			const valueAsRecord = value;
			const valueToString = lookupGetter(valueAsRecord, "toString");
			if (typeof valueToString === "function") {
				const stringified = valueToString(valueAsRecord);
				return typeof stringified === "string" ? stringified : objectToString(stringified);
			}
			return objectToString(value);
		}
		default: return objectToString(value);
	}
}
/**
* This method automatically checks if the prop is function or getter and behaves accordingly.
*
* @param object - The object to look up the getter function in its prototype chain.
* @param prop - The property name for which to find the getter function.
* @returns The getter function found in the prototype chain or a fallback function.
*/
function lookupGetter(object, prop) {
	while (object !== null) {
		const desc = getOwnPropertyDescriptor(object, prop);
		if (desc) {
			if (desc.get) return unapply(desc.get);
			if (typeof desc.value === "function") return unapply(desc.value);
		}
		object = getPrototypeOf(object);
	}
	function fallbackValue() {
		return null;
	}
	return fallbackValue;
}
/**
* Like lookupGetter, but for accessor properties only, and returns null
* instead of a null-returning fallback when no getter exists on the chain.
* Lets a caller fall back to a direct property read in environments that
* lack the getter, where a fallback returning null would be indistinguishable
* from a legitimate null value (e.g. namespaceURI of a no-namespace element).
*
* @param object - The object (usually a prototype) to start the lookup at.
* @param prop - The accessor property name.
* @returns The unapplied getter, or null if none was found.
*/
function lookupAccessor(object, prop) {
	while (object !== null) {
		const desc = getOwnPropertyDescriptor(object, prop);
		if (desc) return desc.get ? unapply(desc.get) : null;
		object = getPrototypeOf(object);
	}
	return null;
}
function isRegex(value) {
	try {
		regExpTest(value, "");
		return true;
	} catch (_unused) {
		return false;
	}
}
var html$1 = freeze([
	"a",
	"abbr",
	"acronym",
	"address",
	"area",
	"article",
	"aside",
	"audio",
	"b",
	"bdi",
	"bdo",
	"big",
	"blink",
	"blockquote",
	"body",
	"br",
	"button",
	"canvas",
	"caption",
	"center",
	"cite",
	"code",
	"col",
	"colgroup",
	"content",
	"data",
	"datalist",
	"dd",
	"decorator",
	"del",
	"details",
	"dfn",
	"dialog",
	"dir",
	"div",
	"dl",
	"dt",
	"element",
	"em",
	"fieldset",
	"figcaption",
	"figure",
	"font",
	"footer",
	"form",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6",
	"head",
	"header",
	"hgroup",
	"hr",
	"html",
	"i",
	"img",
	"input",
	"ins",
	"kbd",
	"label",
	"legend",
	"li",
	"main",
	"map",
	"mark",
	"marquee",
	"menu",
	"menuitem",
	"meter",
	"nav",
	"nobr",
	"ol",
	"optgroup",
	"option",
	"output",
	"p",
	"picture",
	"pre",
	"progress",
	"q",
	"rp",
	"rt",
	"ruby",
	"s",
	"samp",
	"search",
	"section",
	"select",
	"shadow",
	"slot",
	"small",
	"source",
	"spacer",
	"span",
	"strike",
	"strong",
	"style",
	"sub",
	"summary",
	"sup",
	"table",
	"tbody",
	"td",
	"template",
	"textarea",
	"tfoot",
	"th",
	"thead",
	"time",
	"tr",
	"track",
	"tt",
	"u",
	"ul",
	"var",
	"video",
	"wbr"
]);
var svg$1 = freeze([
	"svg",
	"a",
	"altglyph",
	"altglyphdef",
	"altglyphitem",
	"animatecolor",
	"animatemotion",
	"animatetransform",
	"circle",
	"clippath",
	"defs",
	"desc",
	"ellipse",
	"enterkeyhint",
	"exportparts",
	"filter",
	"font",
	"g",
	"glyph",
	"glyphref",
	"hkern",
	"image",
	"inputmode",
	"line",
	"lineargradient",
	"marker",
	"mask",
	"metadata",
	"mpath",
	"part",
	"path",
	"pattern",
	"polygon",
	"polyline",
	"radialgradient",
	"rect",
	"stop",
	"style",
	"switch",
	"symbol",
	"text",
	"textpath",
	"title",
	"tref",
	"tspan",
	"view",
	"vkern"
]);
var svgFilters = freeze([
	"feBlend",
	"feColorMatrix",
	"feComponentTransfer",
	"feComposite",
	"feConvolveMatrix",
	"feDiffuseLighting",
	"feDisplacementMap",
	"feDistantLight",
	"feDropShadow",
	"feFlood",
	"feFuncA",
	"feFuncB",
	"feFuncG",
	"feFuncR",
	"feGaussianBlur",
	"feImage",
	"feMerge",
	"feMergeNode",
	"feMorphology",
	"feOffset",
	"fePointLight",
	"feSpecularLighting",
	"feSpotLight",
	"feTile",
	"feTurbulence"
]);
var svgDisallowed = freeze([
	"animate",
	"color-profile",
	"cursor",
	"discard",
	"font-face",
	"font-face-format",
	"font-face-name",
	"font-face-src",
	"font-face-uri",
	"foreignobject",
	"hatch",
	"hatchpath",
	"mesh",
	"meshgradient",
	"meshpatch",
	"meshrow",
	"missing-glyph",
	"script",
	"set",
	"solidcolor",
	"unknown",
	"use"
]);
var mathMl$1 = freeze([
	"math",
	"menclose",
	"merror",
	"mfenced",
	"mfrac",
	"mglyph",
	"mi",
	"mlabeledtr",
	"mmultiscripts",
	"mn",
	"mo",
	"mover",
	"mpadded",
	"mphantom",
	"mroot",
	"mrow",
	"ms",
	"mspace",
	"msqrt",
	"mstyle",
	"msub",
	"msup",
	"msubsup",
	"mtable",
	"mtd",
	"mtext",
	"mtr",
	"munder",
	"munderover",
	"mprescripts"
]);
var mathMlDisallowed = freeze([
	"maction",
	"maligngroup",
	"malignmark",
	"mlongdiv",
	"mscarries",
	"mscarry",
	"msgroup",
	"mstack",
	"msline",
	"msrow",
	"semantics",
	"annotation",
	"annotation-xml",
	"mprescripts",
	"none"
]);
var text = freeze(["#text"]);
var html = freeze([
	"accept",
	"action",
	"align",
	"alt",
	"autocapitalize",
	"autocomplete",
	"autopictureinpicture",
	"autoplay",
	"background",
	"bgcolor",
	"border",
	"capture",
	"cellpadding",
	"cellspacing",
	"checked",
	"cite",
	"class",
	"clear",
	"color",
	"cols",
	"colspan",
	"command",
	"commandfor",
	"controls",
	"controlslist",
	"coords",
	"crossorigin",
	"datetime",
	"decoding",
	"default",
	"dir",
	"disabled",
	"disablepictureinpicture",
	"disableremoteplayback",
	"download",
	"draggable",
	"enctype",
	"enterkeyhint",
	"exportparts",
	"face",
	"for",
	"headers",
	"height",
	"hidden",
	"high",
	"href",
	"hreflang",
	"id",
	"inert",
	"inputmode",
	"integrity",
	"ismap",
	"kind",
	"label",
	"lang",
	"list",
	"loading",
	"loop",
	"low",
	"max",
	"maxlength",
	"media",
	"method",
	"min",
	"minlength",
	"multiple",
	"muted",
	"name",
	"nonce",
	"noshade",
	"novalidate",
	"nowrap",
	"open",
	"optimum",
	"part",
	"pattern",
	"placeholder",
	"playsinline",
	"popover",
	"popovertarget",
	"popovertargetaction",
	"poster",
	"preload",
	"pubdate",
	"radiogroup",
	"readonly",
	"rel",
	"required",
	"rev",
	"reversed",
	"role",
	"rows",
	"rowspan",
	"spellcheck",
	"scope",
	"selected",
	"shape",
	"size",
	"sizes",
	"slot",
	"span",
	"srclang",
	"start",
	"src",
	"srcset",
	"step",
	"style",
	"summary",
	"tabindex",
	"title",
	"translate",
	"type",
	"usemap",
	"valign",
	"value",
	"width",
	"wrap",
	"xmlns"
]);
var svg = freeze([
	"accent-height",
	"accumulate",
	"additive",
	"alignment-baseline",
	"amplitude",
	"ascent",
	"attributename",
	"attributetype",
	"azimuth",
	"basefrequency",
	"baseline-shift",
	"begin",
	"bias",
	"by",
	"class",
	"clip",
	"clippathunits",
	"clip-path",
	"clip-rule",
	"color",
	"color-interpolation",
	"color-interpolation-filters",
	"color-profile",
	"color-rendering",
	"cx",
	"cy",
	"d",
	"dx",
	"dy",
	"diffuseconstant",
	"direction",
	"display",
	"divisor",
	"dominant-baseline",
	"dur",
	"edgemode",
	"elevation",
	"end",
	"exponent",
	"fill",
	"fill-opacity",
	"fill-rule",
	"filter",
	"filterunits",
	"flood-color",
	"flood-opacity",
	"font-family",
	"font-size",
	"font-size-adjust",
	"font-stretch",
	"font-style",
	"font-variant",
	"font-weight",
	"fx",
	"fy",
	"g1",
	"g2",
	"glyph-name",
	"glyphref",
	"gradientunits",
	"gradienttransform",
	"height",
	"href",
	"id",
	"image-rendering",
	"in",
	"in2",
	"intercept",
	"k",
	"k1",
	"k2",
	"k3",
	"k4",
	"kerning",
	"keypoints",
	"keysplines",
	"keytimes",
	"lang",
	"lengthadjust",
	"letter-spacing",
	"kernelmatrix",
	"kernelunitlength",
	"lighting-color",
	"local",
	"marker-end",
	"marker-mid",
	"marker-start",
	"markerheight",
	"markerunits",
	"markerwidth",
	"maskcontentunits",
	"maskunits",
	"max",
	"mask",
	"mask-type",
	"media",
	"method",
	"mode",
	"min",
	"name",
	"numoctaves",
	"offset",
	"operator",
	"opacity",
	"order",
	"orient",
	"orientation",
	"origin",
	"overflow",
	"paint-order",
	"path",
	"pathlength",
	"patterncontentunits",
	"patterntransform",
	"patternunits",
	"pointer-events",
	"points",
	"preservealpha",
	"preserveaspectratio",
	"primitiveunits",
	"r",
	"rx",
	"ry",
	"radius",
	"refx",
	"refy",
	"repeatcount",
	"repeatdur",
	"restart",
	"result",
	"rotate",
	"scale",
	"seed",
	"shape-rendering",
	"slope",
	"specularconstant",
	"specularexponent",
	"spreadmethod",
	"startoffset",
	"stddeviation",
	"stitchtiles",
	"stop-color",
	"stop-opacity",
	"stroke-dasharray",
	"stroke-dashoffset",
	"stroke-linecap",
	"stroke-linejoin",
	"stroke-miterlimit",
	"stroke-opacity",
	"stroke",
	"stroke-width",
	"style",
	"surfacescale",
	"systemlanguage",
	"tabindex",
	"tablevalues",
	"targetx",
	"targety",
	"transform",
	"transform-origin",
	"text-anchor",
	"text-decoration",
	"text-orientation",
	"text-rendering",
	"textlength",
	"type",
	"u1",
	"u2",
	"unicode",
	"values",
	"vector-effect",
	"viewbox",
	"visibility",
	"version",
	"vert-adv-y",
	"vert-origin-x",
	"vert-origin-y",
	"width",
	"word-spacing",
	"wrap",
	"writing-mode",
	"xchannelselector",
	"ychannelselector",
	"x",
	"x1",
	"x2",
	"xmlns",
	"y",
	"y1",
	"y2",
	"z",
	"zoomandpan"
]);
var mathMl = freeze([
	"accent",
	"accentunder",
	"align",
	"bevelled",
	"close",
	"columnalign",
	"columnlines",
	"columnspacing",
	"columnspan",
	"denomalign",
	"depth",
	"dir",
	"display",
	"displaystyle",
	"encoding",
	"fence",
	"frame",
	"height",
	"href",
	"id",
	"largeop",
	"length",
	"linethickness",
	"lquote",
	"lspace",
	"mathbackground",
	"mathcolor",
	"mathsize",
	"mathvariant",
	"maxsize",
	"minsize",
	"movablelimits",
	"notation",
	"numalign",
	"open",
	"rowalign",
	"rowlines",
	"rowspacing",
	"rowspan",
	"rspace",
	"rquote",
	"scriptlevel",
	"scriptminsize",
	"scriptsizemultiplier",
	"selection",
	"separator",
	"separators",
	"stretchy",
	"subscriptshift",
	"supscriptshift",
	"symmetric",
	"voffset",
	"width",
	"xmlns"
]);
var xml = freeze([
	"xlink:href",
	"xml:id",
	"xlink:title",
	"xml:space",
	"xmlns:xlink"
]);
var MUSTACHE_EXPR = seal(/{{[\w\W]*|^[\w\W]*}}/g);
var ERB_EXPR = seal(/<%[\w\W]*|^[\w\W]*%>/g);
var TMPLIT_EXPR = seal(/\${[\w\W]*/g);
var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]+$/);
var ARIA_ATTR = seal(/^aria-[\-\w]+$/);
var IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i);
var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
var ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g);
var DOCTYPE_NAME = seal(/^html$/i);
var CUSTOM_ELEMENT = seal(/^[a-z][.\w]*(-[.\w]+)+$/i);
var ELEMENT_MARKUP_PROBE = seal(/<[/\w!]/g);
var COMMENT_MARKUP_PROBE = seal(/<[/\w]/g);
var FALLBACK_TAG_CLOSE = seal(/<\/no(script|embed|frames)/i);
var SELF_CLOSING_TAG = seal(/\/>/i);
var NODE_TYPE = {
	element: 1,
	attribute: 2,
	text: 3,
	cdataSection: 4,
	entityReference: 5,
	entityNode: 6,
	processingInstruction: 7,
	comment: 8,
	document: 9,
	documentType: 10,
	documentFragment: 11,
	notation: 12
};
var LITERAL_TEXT_ELEMENTS = freeze(addToSet({}, [
	"style",
	"script",
	"xmp",
	"iframe",
	"noembed",
	"noframes",
	"plaintext",
	"noscript"
]));
var getGlobal = function getGlobal() {
	return typeof window === "undefined" ? null : window;
};
/**
* Creates a no-op policy for internal use only.
* Don't export this function outside this module!
* @param trustedTypes The policy factory.
* @param purifyHostElement The Script element used to load DOMPurify (to determine policy name suffix).
* @return The policy created (or null, if Trusted Types
* are not supported or creating the policy failed).
*/
var _createTrustedTypesPolicy = function _createTrustedTypesPolicy(trustedTypes, purifyHostElement) {
	if (typeof trustedTypes !== "object" || typeof trustedTypes.createPolicy !== "function") return null;
	let suffix = null;
	const ATTR_NAME = "data-tt-policy-suffix";
	if (purifyHostElement && purifyHostElement.hasAttribute(ATTR_NAME)) suffix = purifyHostElement.getAttribute(ATTR_NAME);
	const policyName = "dompurify" + (suffix ? "#" + suffix : "");
	try {
		return trustedTypes.createPolicy(policyName, {
			createHTML(html) {
				return html;
			},
			createScriptURL(scriptUrl) {
				return scriptUrl;
			}
		});
	} catch (_) {
		console.warn("TrustedTypes policy " + policyName + " could not be created.");
		return null;
	}
};
var _createHooksMap = function _createHooksMap() {
	return {
		afterSanitizeAttributes: [],
		afterSanitizeElements: [],
		afterSanitizeShadowDOM: [],
		beforeSanitizeAttributes: [],
		beforeSanitizeElements: [],
		beforeSanitizeShadowDOM: [],
		uponSanitizeAttribute: [],
		uponSanitizeElement: [],
		uponSanitizeShadowNode: []
	};
};
/**
* Resolve a set-valued configuration option: a fresh set built from
* cfg[key] when it is an own array property (seeded with a clone of
* options.base when given, case-normalized via options.transform),
* the fallback set otherwise.
*
* @param cfg the cloned, prototype-free configuration object
* @param key the configuration property to read
* @param fallback the set to use when the option is absent or not an array
* @param options transform and optional base set to merge into
* @returns the resolved set
*/
var _resolveSetOption = function _resolveSetOption(cfg, key, fallback, options) {
	return objectHasOwnProperty(cfg, key) && arrayIsArray(cfg[key]) ? addToSet(options.base ? clone(options.base) : {}, cfg[key], options.transform) : fallback;
};
/**
* Resolve an object-valued configuration option: a prototype-free clone
* of cfg[key] when it is an own, truthy object property, else a fresh
* fallback built by makeFallback (fresh on every parse, so a previous
* parse can never leak state into the next one).
*
* @param cfg the cloned, prototype-free configuration object
* @param key the configuration property to read
* @param makeFallback builds the fallback value when the option is absent
* @returns the resolved object
*/
var _resolveObjectOption = function _resolveObjectOption(cfg, key, makeFallback) {
	const value = objectHasOwnProperty(cfg, key) ? cfg[key] : void 0;
	return value && typeof value === "object" ? clone(value) : makeFallback();
};
function createDOMPurify() {
	let window = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getGlobal();
	const DOMPurify = (root) => createDOMPurify(root);
	DOMPurify.version = "3.4.17";
	DOMPurify.removed = [];
	if (!window || !window.document || window.document.nodeType !== NODE_TYPE.document || !window.Element) {
		DOMPurify.isSupported = false;
		return DOMPurify;
	}
	let document = window.document;
	const originalDocument = document;
	const currentScript = originalDocument.currentScript;
	window.DocumentFragment;
	const HTMLTemplateElement = window.HTMLTemplateElement, Node = window.Node, Element = window.Element, NodeFilter = window.NodeFilter;
	window.NamedNodeMap === void 0 && (window.NamedNodeMap || window.MozNamedAttrMap);
	window.HTMLFormElement;
	const DOMParser = window.DOMParser, trustedTypes = window.trustedTypes;
	const ElementPrototype = Element.prototype;
	const cloneNode = lookupGetter(ElementPrototype, "cloneNode");
	const remove = lookupGetter(ElementPrototype, "remove");
	const removeAttributeNode = lookupGetter(ElementPrototype, "removeAttributeNode");
	const getNextSibling = lookupGetter(ElementPrototype, "nextSibling");
	const getChildNodes = lookupGetter(ElementPrototype, "childNodes");
	const getParentNode = lookupGetter(ElementPrototype, "parentNode");
	const getShadowRoot = lookupGetter(ElementPrototype, "shadowRoot");
	const getAttributes = lookupGetter(ElementPrototype, "attributes");
	const getNodeType = Node && Node.prototype ? lookupGetter(Node.prototype, "nodeType") : null;
	const getNodeName = Node && Node.prototype ? lookupGetter(Node.prototype, "nodeName") : null;
	const getOwnerDocument = Node && Node.prototype ? lookupGetter(Node.prototype, "ownerDocument") : null;
	const _readNodeType = function _readNodeType(node) {
		return getNodeType ? getNodeType(node) : node.nodeType;
	};
	const _readNodeName = function _readNodeName(node) {
		return getNodeName ? getNodeName(node) : node.nodeName;
	};
	const getNamespaceURI = lookupAccessor(ElementPrototype, "namespaceURI");
	const _readNamespaceURI = function _readNamespaceURI(element) {
		return getNamespaceURI ? getNamespaceURI(element) : element.namespaceURI;
	};
	if (typeof HTMLTemplateElement === "function") {
		const template = document.createElement("template");
		if (template.content && template.content.ownerDocument) document = template.content.ownerDocument;
	}
	let trustedTypesPolicy;
	let emptyHTML = "";
	let defaultTrustedTypesPolicy;
	let defaultTrustedTypesPolicyResolved = false;
	let IN_TRUSTED_TYPES_POLICY = 0;
	const _assertNotInTrustedTypesPolicy = function _assertNotInTrustedTypesPolicy() {
		if (IN_TRUSTED_TYPES_POLICY > 0) throw typeErrorCreate("A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the \"DOMPurify and Trusted Types\" section of the README.");
	};
	const _createTrustedHTML = function _createTrustedHTML(html) {
		_assertNotInTrustedTypesPolicy();
		IN_TRUSTED_TYPES_POLICY++;
		try {
			return trustedTypesPolicy.createHTML(html);
		} finally {
			IN_TRUSTED_TYPES_POLICY--;
		}
	};
	const _createTrustedScriptURL = function _createTrustedScriptURL(scriptUrl) {
		_assertNotInTrustedTypesPolicy();
		IN_TRUSTED_TYPES_POLICY++;
		try {
			return trustedTypesPolicy.createScriptURL(scriptUrl);
		} finally {
			IN_TRUSTED_TYPES_POLICY--;
		}
	};
	const _getDefaultTrustedTypesPolicy = function _getDefaultTrustedTypesPolicy() {
		if (!defaultTrustedTypesPolicyResolved) {
			defaultTrustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, currentScript);
			defaultTrustedTypesPolicyResolved = true;
		}
		return defaultTrustedTypesPolicy;
	};
	const _document = document, implementation = _document.implementation, createNodeIterator = _document.createNodeIterator, createDocumentFragment = _document.createDocumentFragment, getElementsByTagName = _document.getElementsByTagName;
	const importNode = originalDocument.importNode;
	let hooks = _createHooksMap();
	/**
	* Expose whether this browser supports running the full DOMPurify.
	*/
	DOMPurify.isSupported = typeof entries === "function" && typeof getParentNode === "function" && implementation && implementation.createHTMLDocument !== void 0;
	const MUSTACHE_EXPR$1 = MUSTACHE_EXPR, ERB_EXPR$1 = ERB_EXPR, TMPLIT_EXPR$1 = TMPLIT_EXPR, DATA_ATTR$1 = DATA_ATTR, ARIA_ATTR$1 = ARIA_ATTR, IS_SCRIPT_OR_DATA$1 = IS_SCRIPT_OR_DATA, ATTR_WHITESPACE$1 = ATTR_WHITESPACE, CUSTOM_ELEMENT$1 = CUSTOM_ELEMENT;
	let IS_ALLOWED_URI$1 = IS_ALLOWED_URI;
	/**
	* We consider the elements and attributes below to be safe. Ideally
	* don't add any new ones but feel free to remove unwanted ones.
	*/
	let ALLOWED_TAGS = null;
	const DEFAULT_ALLOWED_TAGS = addToSet({}, [
		...html$1,
		...svg$1,
		...svgFilters,
		...mathMl$1,
		...text
	]);
	let ALLOWED_ATTR = null;
	const DEFAULT_ALLOWED_ATTR = addToSet({}, [
		...html,
		...svg,
		...mathMl,
		...xml
	]);
	let CUSTOM_ELEMENT_HANDLING = Object.seal(create(null, {
		tagNameCheck: {
			writable: true,
			configurable: false,
			enumerable: true,
			value: null
		},
		attributeNameCheck: {
			writable: true,
			configurable: false,
			enumerable: true,
			value: null
		},
		allowCustomizedBuiltInElements: {
			writable: true,
			configurable: false,
			enumerable: true,
			value: false
		}
	}));
	let FORBID_TAGS = null;
	let FORBID_ATTR = null;
	const EXTRA_ELEMENT_HANDLING = Object.seal(create(null, {
		tagCheck: {
			writable: true,
			configurable: false,
			enumerable: true,
			value: null
		},
		attributeCheck: {
			writable: true,
			configurable: false,
			enumerable: true,
			value: null
		}
	}));
	let ALLOW_ARIA_ATTR = true;
	let ALLOW_DATA_ATTR = true;
	let ALLOW_UNKNOWN_PROTOCOLS = false;
	let ALLOW_SELF_CLOSE_IN_ATTR = true;
	let SAFE_FOR_TEMPLATES = false;
	let SAFE_FOR_XML = true;
	let WHOLE_DOCUMENT = false;
	let SET_CONFIG = false;
	let SET_CONFIG_ALLOWED_TAGS = null;
	let SET_CONFIG_ALLOWED_ATTR = null;
	let FORCE_BODY = false;
	let RETURN_DOM = false;
	let RETURN_DOM_FRAGMENT = false;
	let RETURN_TRUSTED_TYPE = false;
	let SANITIZE_DOM = true;
	let SANITIZE_NAMED_PROPS = false;
	const SANITIZE_NAMED_PROPS_PREFIX = "user-content-";
	let KEEP_CONTENT = true;
	let IN_PLACE = false;
	let IN_PLACE_VISITED = null;
	let USE_PROFILES = {};
	let FORBID_CONTENTS = null;
	const DEFAULT_FORBID_CONTENTS = addToSet({}, [
		"annotation-xml",
		"audio",
		"colgroup",
		"desc",
		"foreignobject",
		"head",
		"iframe",
		"math",
		"mi",
		"mn",
		"mo",
		"ms",
		"mtext",
		"noembed",
		"noframes",
		"noscript",
		"plaintext",
		"script",
		"selectedcontent",
		"style",
		"svg",
		"template",
		"thead",
		"title",
		"video",
		"xmp"
	]);
	let DATA_URI_TAGS = null;
	const DEFAULT_DATA_URI_TAGS = addToSet({}, [
		"audio",
		"video",
		"img",
		"source",
		"image",
		"track"
	]);
	let URI_SAFE_ATTRIBUTES = null;
	const DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, [
		"alt",
		"class",
		"for",
		"id",
		"label",
		"name",
		"pattern",
		"placeholder",
		"role",
		"summary",
		"title",
		"value",
		"style",
		"xmlns"
	]);
	const MATHML_NAMESPACE = "http://www.w3.org/1998/Math/MathML";
	const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
	const HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
	let NAMESPACE = HTML_NAMESPACE;
	let IS_EMPTY_INPUT = false;
	let ALLOWED_NAMESPACES = null;
	const DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [
		MATHML_NAMESPACE,
		SVG_NAMESPACE,
		HTML_NAMESPACE
	], stringToString);
	const DEFAULT_MATHML_TEXT_INTEGRATION_POINTS = freeze([
		"mi",
		"mo",
		"mn",
		"ms",
		"mtext"
	]);
	let MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, DEFAULT_MATHML_TEXT_INTEGRATION_POINTS);
	const DEFAULT_HTML_INTEGRATION_POINTS = freeze(["annotation-xml"]);
	let HTML_INTEGRATION_POINTS = addToSet({}, DEFAULT_HTML_INTEGRATION_POINTS);
	const COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, [
		"title",
		"style",
		"font",
		"a",
		"script"
	]);
	let PARSER_MEDIA_TYPE = null;
	const SUPPORTED_PARSER_MEDIA_TYPES = ["application/xhtml+xml", "text/html"];
	const DEFAULT_PARSER_MEDIA_TYPE = "text/html";
	let transformCaseFunc = null;
	let CONFIG = null;
	const formElement = document.createElement("form");
	const isRegexOrFunction = function isRegexOrFunction(testValue) {
		return testValue instanceof RegExp || testValue instanceof Function;
	};
	/**
	* _parseConfig
	*
	* @param cfg optional config literal
	*/
	const _parseConfig = function _parseConfig() {
		let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		if (CONFIG && CONFIG === cfg) return;
		if (!cfg || typeof cfg !== "object") cfg = {};
		cfg = clone(cfg);
		PARSER_MEDIA_TYPE = SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? DEFAULT_PARSER_MEDIA_TYPE : cfg.PARSER_MEDIA_TYPE;
		transformCaseFunc = PARSER_MEDIA_TYPE === "application/xhtml+xml" ? stringToString : stringToLowerCase;
		ALLOWED_TAGS = _resolveSetOption(cfg, "ALLOWED_TAGS", DEFAULT_ALLOWED_TAGS, { transform: transformCaseFunc });
		ALLOWED_ATTR = _resolveSetOption(cfg, "ALLOWED_ATTR", DEFAULT_ALLOWED_ATTR, { transform: transformCaseFunc });
		ALLOWED_NAMESPACES = _resolveSetOption(cfg, "ALLOWED_NAMESPACES", DEFAULT_ALLOWED_NAMESPACES, { transform: stringToString });
		URI_SAFE_ATTRIBUTES = _resolveSetOption(cfg, "ADD_URI_SAFE_ATTR", DEFAULT_URI_SAFE_ATTRIBUTES, {
			transform: transformCaseFunc,
			base: DEFAULT_URI_SAFE_ATTRIBUTES
		});
		DATA_URI_TAGS = _resolveSetOption(cfg, "ADD_DATA_URI_TAGS", DEFAULT_DATA_URI_TAGS, {
			transform: transformCaseFunc,
			base: DEFAULT_DATA_URI_TAGS
		});
		FORBID_CONTENTS = _resolveSetOption(cfg, "FORBID_CONTENTS", DEFAULT_FORBID_CONTENTS, { transform: transformCaseFunc });
		FORBID_TAGS = _resolveSetOption(cfg, "FORBID_TAGS", clone({}), { transform: transformCaseFunc });
		FORBID_ATTR = _resolveSetOption(cfg, "FORBID_ATTR", clone({}), { transform: transformCaseFunc });
		USE_PROFILES = objectHasOwnProperty(cfg, "USE_PROFILES") ? cfg.USE_PROFILES && typeof cfg.USE_PROFILES === "object" ? clone(cfg.USE_PROFILES) : cfg.USE_PROFILES : false;
		ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false;
		ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false;
		ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false;
		ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false;
		SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false;
		SAFE_FOR_XML = cfg.SAFE_FOR_XML !== false;
		WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false;
		RETURN_DOM = cfg.RETURN_DOM || false;
		RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false;
		RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false;
		FORCE_BODY = cfg.FORCE_BODY || false;
		SANITIZE_DOM = cfg.SANITIZE_DOM !== false;
		SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false;
		KEEP_CONTENT = cfg.KEEP_CONTENT !== false;
		IN_PLACE = cfg.IN_PLACE || false;
		IS_ALLOWED_URI$1 = isRegex(cfg.ALLOWED_URI_REGEXP) ? cfg.ALLOWED_URI_REGEXP : IS_ALLOWED_URI;
		NAMESPACE = typeof cfg.NAMESPACE === "string" ? cfg.NAMESPACE : HTML_NAMESPACE;
		MATHML_TEXT_INTEGRATION_POINTS = _resolveObjectOption(cfg, "MATHML_TEXT_INTEGRATION_POINTS", () => addToSet({}, DEFAULT_MATHML_TEXT_INTEGRATION_POINTS));
		HTML_INTEGRATION_POINTS = _resolveObjectOption(cfg, "HTML_INTEGRATION_POINTS", () => addToSet({}, DEFAULT_HTML_INTEGRATION_POINTS));
		const customElementHandling = _resolveObjectOption(cfg, "CUSTOM_ELEMENT_HANDLING", () => create(null));
		CUSTOM_ELEMENT_HANDLING = create(null);
		if (objectHasOwnProperty(customElementHandling, "tagNameCheck") && isRegexOrFunction(customElementHandling.tagNameCheck)) CUSTOM_ELEMENT_HANDLING.tagNameCheck = customElementHandling.tagNameCheck;
		if (objectHasOwnProperty(customElementHandling, "attributeNameCheck") && isRegexOrFunction(customElementHandling.attributeNameCheck)) CUSTOM_ELEMENT_HANDLING.attributeNameCheck = customElementHandling.attributeNameCheck;
		if (objectHasOwnProperty(customElementHandling, "allowCustomizedBuiltInElements") && typeof customElementHandling.allowCustomizedBuiltInElements === "boolean") CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = customElementHandling.allowCustomizedBuiltInElements;
		seal(CUSTOM_ELEMENT_HANDLING);
		if (SAFE_FOR_TEMPLATES) ALLOW_DATA_ATTR = false;
		if (RETURN_DOM_FRAGMENT) RETURN_DOM = true;
		if (USE_PROFILES) {
			ALLOWED_TAGS = addToSet({}, text);
			ALLOWED_ATTR = create(null);
			if (USE_PROFILES.html === true) {
				addToSet(ALLOWED_TAGS, html$1);
				addToSet(ALLOWED_ATTR, html);
			}
			if (USE_PROFILES.svg === true) {
				addToSet(ALLOWED_TAGS, svg$1);
				addToSet(ALLOWED_ATTR, svg);
				addToSet(ALLOWED_ATTR, xml);
			}
			if (USE_PROFILES.svgFilters === true) {
				addToSet(ALLOWED_TAGS, svgFilters);
				addToSet(ALLOWED_ATTR, svg);
				addToSet(ALLOWED_ATTR, xml);
			}
			if (USE_PROFILES.mathMl === true) {
				addToSet(ALLOWED_TAGS, mathMl$1);
				addToSet(ALLOWED_ATTR, mathMl);
				addToSet(ALLOWED_ATTR, xml);
			}
		}
		EXTRA_ELEMENT_HANDLING.tagCheck = null;
		EXTRA_ELEMENT_HANDLING.attributeCheck = null;
		if (objectHasOwnProperty(cfg, "ADD_TAGS")) {
			if (typeof cfg.ADD_TAGS === "function") EXTRA_ELEMENT_HANDLING.tagCheck = cfg.ADD_TAGS;
			else if (arrayIsArray(cfg.ADD_TAGS)) {
				if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) ALLOWED_TAGS = clone(ALLOWED_TAGS);
				addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
			}
		}
		if (objectHasOwnProperty(cfg, "ADD_ATTR")) {
			if (typeof cfg.ADD_ATTR === "function") EXTRA_ELEMENT_HANDLING.attributeCheck = cfg.ADD_ATTR;
			else if (arrayIsArray(cfg.ADD_ATTR)) {
				if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) ALLOWED_ATTR = clone(ALLOWED_ATTR);
				addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
			}
		}
		if (objectHasOwnProperty(cfg, "ADD_FORBID_CONTENTS") && arrayIsArray(cfg.ADD_FORBID_CONTENTS)) {
			if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) FORBID_CONTENTS = clone(FORBID_CONTENTS);
			addToSet(FORBID_CONTENTS, cfg.ADD_FORBID_CONTENTS, transformCaseFunc);
		}
		if (KEEP_CONTENT) ALLOWED_TAGS["#text"] = true;
		if (WHOLE_DOCUMENT) addToSet(ALLOWED_TAGS, [
			"html",
			"head",
			"body"
		]);
		if (ALLOWED_TAGS.table) {
			addToSet(ALLOWED_TAGS, ["tbody"]);
			delete FORBID_TAGS.tbody;
		}
		if (cfg.TRUSTED_TYPES_POLICY) {
			if (typeof cfg.TRUSTED_TYPES_POLICY.createHTML !== "function") throw typeErrorCreate("TRUSTED_TYPES_POLICY configuration option must provide a \"createHTML\" hook.");
			if (typeof cfg.TRUSTED_TYPES_POLICY.createScriptURL !== "function") throw typeErrorCreate("TRUSTED_TYPES_POLICY configuration option must provide a \"createScriptURL\" hook.");
			const previousTrustedTypesPolicy = trustedTypesPolicy;
			trustedTypesPolicy = cfg.TRUSTED_TYPES_POLICY;
			try {
				emptyHTML = _createTrustedHTML("");
			} catch (error) {
				trustedTypesPolicy = previousTrustedTypesPolicy;
				throw error;
			}
		} else if (cfg.TRUSTED_TYPES_POLICY === null) {
			trustedTypesPolicy = void 0;
			emptyHTML = "";
		} else {
			if (trustedTypesPolicy === void 0) trustedTypesPolicy = _getDefaultTrustedTypesPolicy();
			if (trustedTypesPolicy && typeof emptyHTML === "string") emptyHTML = _createTrustedHTML("");
		}
		if (freeze) freeze(cfg);
		CONFIG = cfg;
	};
	const ALL_SVG_TAGS = addToSet({}, [
		...svg$1,
		...svgFilters,
		...svgDisallowed
	]);
	const ALL_MATHML_TAGS = addToSet({}, [...mathMl$1, ...mathMlDisallowed]);
	/**
	* Namespace rules for an element in the SVG namespace.
	*
	* @param tagName the element's lowercase tag name
	* @param parent the (possibly simulated) parent node
	* @param parentTagName the parent's lowercase tag name
	* @returns true if a spec-compliant parser could produce this element
	*/
	const _checkSvgNamespace = function _checkSvgNamespace(tagName, parent, parentTagName) {
		if (parent.namespaceURI === HTML_NAMESPACE) return tagName === "svg";
		if (parent.namespaceURI === MATHML_NAMESPACE) return tagName === "svg" && (parentTagName === "annotation-xml" || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
		return Boolean(ALL_SVG_TAGS[tagName]);
	};
	/**
	* Namespace rules for an element in the MathML namespace.
	*
	* @param tagName the element's lowercase tag name
	* @param parent the (possibly simulated) parent node
	* @param parentTagName the parent's lowercase tag name
	* @returns true if a spec-compliant parser could produce this element
	*/
	const _checkMathMlNamespace = function _checkMathMlNamespace(tagName, parent, parentTagName) {
		if (parent.namespaceURI === HTML_NAMESPACE) return tagName === "math";
		if (parent.namespaceURI === SVG_NAMESPACE) return tagName === "math" && HTML_INTEGRATION_POINTS[parentTagName];
		return Boolean(ALL_MATHML_TAGS[tagName]);
	};
	/**
	* Namespace rules for an element in the HTML namespace.
	*
	* @param tagName the element's lowercase tag name
	* @param parent the (possibly simulated) parent node
	* @param parentTagName the parent's lowercase tag name
	* @returns true if a spec-compliant parser could produce this element
	*/
	const _checkHtmlNamespace = function _checkHtmlNamespace(tagName, parent, parentTagName) {
		if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) return false;
		if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) return false;
		return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
	};
	/**
	* @param element a DOM element whose namespace is being checked
	* @returns Return false if the element has a
	*  namespace that a spec-compliant parser would never
	*  return. Return true otherwise.
	*/
	const _checkValidNamespace = function _checkValidNamespace(element) {
		const elementNamespace = _readNamespaceURI(element);
		const tagName = stringToLowerCase(_readNodeName(element));
		const parentNode = getParentNode(element);
		let parent;
		let parentTagName;
		if (parentNode && _readNodeType(parentNode) === NODE_TYPE.element) {
			parent = { namespaceURI: _readNamespaceURI(parentNode) };
			parentTagName = stringToLowerCase(_readNodeName(parentNode));
		} else {
			parent = { namespaceURI: NAMESPACE };
			parentTagName = "template";
		}
		if (!ALLOWED_NAMESPACES[elementNamespace]) return false;
		if (elementNamespace === SVG_NAMESPACE) return _checkSvgNamespace(tagName, parent, parentTagName);
		if (elementNamespace === MATHML_NAMESPACE) return _checkMathMlNamespace(tagName, parent, parentTagName);
		if (elementNamespace === HTML_NAMESPACE) return _checkHtmlNamespace(tagName, parent, parentTagName);
		if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && ALLOWED_NAMESPACES[elementNamespace]) return true;
		return false;
	};
	/**
	* _forceRemove
	*
	* @param node a DOM node
	*/
	const _forceRemove = function _forceRemove(node) {
		arrayPush(DOMPurify.removed, { element: node });
		try {
			getParentNode(node).removeChild(node);
		} catch (_) {
			remove(node);
			if (!getParentNode(node)) throw typeErrorCreate("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
		}
	};
	/**
	* _stripAttributeNode
	*
	* Remove a single Attr node case/namespace-exactly on an attribute-teardown
	* path. Name-based removeAttribute() ASCII-lowercases its lookup key for an
	* HTML element in an HTML document and so silently misses a case-preserved
	* handler (e.g. `ONERROR` off an XML/XHTML import) - the same defect
	* _removeAttribute() was fixed for, which a name-based call would reintroduce
	* on these IN_PLACE teardown paths. Unlike _removeAttribute this does not
	* record into DOMPurify.removed: the neutralize passes intentionally do not
	* book-keep. A clobbered/detached node falls back to best-effort name-based
	* removal.
	*
	* @param element the element to strip the attribute from
	* @param attribute the Attr node to remove
	* @param name the attribute's name, for the fallback path
	*/
	const _stripAttributeNode = function _stripAttributeNode(element, attribute, name) {
		try {
			removeAttributeNode(element, attribute);
		} catch (_) {
			try {
				element.removeAttribute(name);
			} catch (_) {}
		}
	};
	/**
	* Fail-closed teardown of an in-place root: strip every disallowed attribute
	* in the subtree first, so nothing armed is left behind, then remove all
	* children and the root's own attributes.
	*
	* @param root the in-place root to empty
	*/
	const _neutralizeRoot = function _neutralizeRoot(root) {
		_neutralizeSubtree(root);
		const childNodes = getChildNodes(root);
		if (childNodes) arrayForEach(arraySlice(childNodes), (child) => {
			try {
				remove(child);
			} catch (_) {}
		});
		const attributes = _readNodeType(root) === NODE_TYPE.element ? getAttributes(root) : null;
		if (attributes) for (let i = attributes.length - 1; i >= 0; --i) {
			const attribute = attributes[i];
			const name = attribute && attribute.name;
			if (typeof name === "string") _stripAttributeNode(root, attribute, name);
		}
	};
	/**
	* Removes an attribute, preferably as its exact Attr node: name-based
	* removal lowercases the name in HTML documents and misses case-preserved
	* names, e.g. from imported XHTML.
	*
	* @param name an Attribute name
	* @param element a DOM node
	* @param attr the exact Attr node to remove, when the caller has it
	*/
	const _removeAttribute = function _removeAttribute(name, element, attr) {
		if (!attr) try {
			attr = element.getAttributeNode(name);
		} catch (_) {
			attr = null;
		}
		arrayPush(DOMPurify.removed, {
			attribute: attr || null,
			from: element
		});
		try {
			if (attr) removeAttributeNode(element, attr);
			else element.removeAttribute(name);
		} catch (_) {
			try {
				element.removeAttribute(name);
			} catch (_) {}
		}
		if (name === "is") {
			if (RETURN_DOM || RETURN_DOM_FRAGMENT) try {
				_forceRemove(element);
			} catch (_) {}
			else try {
				element.setAttribute(name, "");
			} catch (_) {}
		}
	};
	/**
	* Removes every attribute the configuration does not allow. Used to
	* neutralize nodes discarded from an in-place tree.
	*
	* @param element the element to strip
	*/
	const _stripDisallowedAttributes = function _stripDisallowedAttributes(element) {
		const attributes = getAttributes(element);
		if (!attributes) return;
		for (let i = attributes.length - 1; i >= 0; --i) {
			const attribute = attributes[i];
			const name = attribute && attribute.name;
			if (typeof name !== "string" || ALLOWED_ATTR[transformCaseFunc(name)]) continue;
			_stripAttributeNode(element, attribute, name);
		}
	};
	/**
	* Iterative depth-first walk, so deep trees cannot overflow the call stack,
	* reading through the cached getters, so clobbering cannot hide children.
	* When `visit` returns false, the node's children are skipped. With
	* `intoShadow`, open shadow roots are walked after their host's children.
	*
	* @param root where to start
	* @param visit called for every node
	* @param intoShadow whether to enter open shadow roots
	*/
	const _walkTree = function _walkTree(root, visit) {
		let intoShadow = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
		const stack = [root];
		while (stack.length > 0) {
			const node = stack.pop();
			if (visit(node) === false) continue;
			if (intoShadow && _readNodeType(node) === NODE_TYPE.element) {
				const shadowRoot = getShadowRoot(node);
				if (_isDocumentFragment(shadowRoot)) stack.push(shadowRoot);
			}
			const childNodes = getChildNodes(node);
			if (childNodes) for (let i = childNodes.length - 1; i >= 0; --i) stack.push(childNodes[i]);
		}
	};
	/**
	* Strips disallowed attributes from every element of a discarded subtree,
	* so a handler that is already queued (a loading image) cannot fire.
	*
	* @param root the root of a removed subtree
	*/
	const _neutralizeSubtree = function _neutralizeSubtree(root) {
		_walkTree(root, (node) => {
			if (_readNodeType(node) === NODE_TYPE.element) _stripDisallowedAttributes(node);
		});
	};
	/**
	* All nodes under `root`, root first, including open shadow roots. Template
	* content is not entered, it is inert.
	*
	* @param root the in-place root
	* @return the nodes
	*/
	const _collectLiveNodes = function _collectLiveNodes(root) {
		const nodes = [];
		_walkTree(root, (node) => {
			nodes.push(node);
		}, true);
		return nodes;
	};
	/**
	* Strips disallowed attributes from every element that was under the
	* in-place root when the call started and no longer is, whatever removed
	* or moved it.
	*
	* @param root the in-place root
	* @param before the root's nodes, collected before the walk
	*/
	const _neutralizeEscapedElements = function _neutralizeEscapedElements(root, before) {
		const reachable = setCreate();
		arrayForEach(_collectLiveNodes(root), (node) => {
			if (_readNodeType(node) === NODE_TYPE.element) setAdd(reachable, node);
		});
		arrayForEach(before, (node) => {
			if (_readNodeType(node) === NODE_TYPE.element && !setHas(reachable, node)) _stripDisallowedAttributes(node);
		});
	};
	/**
	* Neutralizes everything that left the in-place tree during the call: what
	* DOMPurify removed, and what hooks or custom elements removed or moved out.
	*
	* @param root the in-place root
	* @param before the root's nodes, collected before the walk
	* @return true if the root itself was removed
	*/
	const _neutralizeDiscarded = function _neutralizeDiscarded(root, before) {
		let rootRemoved = false;
		arrayForEach(DOMPurify.removed, (entry) => {
			if (entry.element) {
				rootRemoved = rootRemoved || entry.element === root;
				_neutralizeSubtree(entry.element);
			}
		});
		_neutralizeEscapedElements(root, before);
		return rootRemoved;
	};
	const MAX_UNVISITED_ROUNDS = 8;
	/**
	* The walk only moves forward, so a node moved to a position it already
	* passed is never visited. Give every original node that is still in the
	* tree but unvisited the normal treatment, hooks included. Nodes created
	* during the call are left alone. Fails closed if the tree keeps changing.
	*
	* @param root the in-place root
	* @param before the root's nodes, collected before the walk
	*/
	const _sanitizeUnvisitedNodes = function _sanitizeUnvisitedNodes(root, before) {
		const visited = IN_PLACE_VISITED;
		let original = null;
		const getOriginal = () => {
			if (!original) {
				original = setCreate();
				arrayForEach(before, (beforeNode) => {
					setAdd(original, beforeNode);
				});
			}
			return original;
		};
		for (let round = 0;; round++) {
			const live = _collectLiveNodes(root);
			const containers = [root];
			let pending = false;
			arrayForEach(live, (node) => {
				if (_readNodeType(node) === NODE_TYPE.documentFragment) arrayPush(containers, node);
				else if (!pending && !setHas(visited, node)) pending = setHas(getOriginal(), node);
			});
			if (!pending) return;
			if (round >= MAX_UNVISITED_ROUNDS) throw typeErrorCreate("the tree kept changing during in-place sanitization; refusing to return it");
			arrayForEach(containers, (container, index) => {
				_sanitizeUnvisitedIn(container, index > 0, root, getOriginal());
			});
		}
	};
	/**
	* One _sanitizeUnvisitedNodes pass over the root or an open shadow root.
	*
	* @param container the root or an open shadow root
	* @param inShadow whether container is a shadow root
	* @param root the in-place root
	* @param original the root's nodes collected before the walk, as a set
	*/
	const _sanitizeUnvisitedIn = function _sanitizeUnvisitedIn(container, inShadow, root, original) {
		const iterator = _createNodeIterator(container);
		let node;
		while (node = iterator.nextNode()) {
			if (!setHas(original, node) || setHas(IN_PLACE_VISITED, node)) continue;
			if (inShadow) _executeHooks(hooks.uponSanitizeShadowNode, node, null);
			_sanitizeElements(node, root);
			_sanitizeAttributes(node, root);
			if (_isDocumentFragment(node.content)) _sanitizeShadowDOM2(node.content);
		}
	};
	/**
	* Records that _sanitizeElements processed `node`. No-op outside IN_PLACE.
	*
	* @param node the node being processed
	*/
	const _markVisited = function _markVisited(node) {
		if (IN_PLACE_VISITED) setAdd(IN_PLACE_VISITED, node);
	};
	/**
	* Patch-linkage attributes (declarative partial updates): `patchsrc`
	* always, `for` everywhere except on <label> and <output>. Gated on
	* SAFE_FOR_XML. Shared by the IN_PLACE pre-pass and _isValidAttribute.
	*
	* @param lcName the transformCaseFunc'd attribute name
	* @param lcTag the transformCaseFunc'd tag name of the carrying element
	* @return true if the attribute is patch linkage and must be dropped
	*/
	const _isPatchLinkageAttribute = function _isPatchLinkageAttribute(lcName, lcTag) {
		if (!SAFE_FOR_XML) return false;
		if (lcName === "patchsrc") return true;
		return lcName === "for" && lcTag !== "label" && lcTag !== "output";
	};
	/**
	* IN_PLACE pre-pass: sever all patch linkage before the walk, so no patch
	* can fire mid-walk into a part of the tree the walker already passed.
	* Removes range markers (processing instructions, comments with markup)
	* and strips linkage attributes. It cannot undo a patch that already fired.
	*
	* TODO: if the shipped feature can patch through `for` on <label>/<output>,
	* drop that pair here too (see test/declarative-patch-probe.html).
	*
	* @param root the in-place root to sweep
	*/
	const _neutralizePatchLinkage = function _neutralizePatchLinkage(root) {
		if (!SAFE_FOR_XML) return;
		_walkTree(root, (node) => {
			const nodeType = _readNodeType(node);
			if (nodeType === NODE_TYPE.processingInstruction || nodeType === NODE_TYPE.comment && regExpTest(COMMENT_MARKUP_PROBE, node.data)) {
				try {
					remove(node);
				} catch (_) {}
				return false;
			}
			if (nodeType === NODE_TYPE.element) {
				const element = node;
				const lcTag = transformCaseFunc(_readNodeName(node));
				try {
					if (element.hasAttribute && element.hasAttribute("patchsrc")) element.removeAttribute("patchsrc");
					if (element.hasAttribute && element.hasAttribute("for") && _isPatchLinkageAttribute("for", lcTag)) element.removeAttribute("for");
				} catch (_) {}
			}
			return true;
		});
	};
	/**
	* _initDocument
	*
	* @param dirty - a string of dirty markup
	* @return a DOM, filled with the dirty markup
	*/
	const _initDocument = function _initDocument(dirty) {
		let doc = null;
		let leadingWhitespace = null;
		if (FORCE_BODY) dirty = "<remove></remove>" + dirty;
		else {
			const matches = stringMatch(dirty, /^[\r\n\t ]+/);
			leadingWhitespace = matches && matches[0];
		}
		if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && NAMESPACE === HTML_NAMESPACE) dirty = "<html xmlns=\"http://www.w3.org/1999/xhtml\"><head></head><body>" + dirty + "</body></html>";
		const dirtyPayload = trustedTypesPolicy ? _createTrustedHTML(dirty) : dirty;
		if (NAMESPACE === HTML_NAMESPACE) try {
			doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
		} catch (_) {}
		if (!doc || !doc.documentElement) {
			doc = implementation.createDocument(NAMESPACE, "template", null);
			try {
				doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
			} catch (_) {}
		}
		const body = doc.body || doc.documentElement;
		if (dirty && leadingWhitespace) body.insertBefore(document.createTextNode(leadingWhitespace), body.childNodes[0] || null);
		if (NAMESPACE === HTML_NAMESPACE) return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? "html" : "body")[0];
		return WHOLE_DOCUMENT ? doc.documentElement : body;
	};
	/**
	* Creates a NodeIterator object that you can use to traverse filtered lists of nodes or elements in a document.
	*
	* @param root The root element or node to start traversing on.
	* @return The created NodeIterator
	*/
	const _createNodeIterator = function _createNodeIterator(root) {
		const doc = getOwnerDocument ? getOwnerDocument(root) : root.ownerDocument;
		return createNodeIterator.call(doc || root, root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT | NodeFilter.SHOW_PROCESSING_INSTRUCTION | NodeFilter.SHOW_CDATA_SECTION, null);
	};
	/**
	* Replace template expression syntax (mustache, ERB, template
	* literal) with a space; shared by all SAFE_FOR_TEMPLATES scrub
	* sites. Order matters: mustache, then ERB, then template literal.
	*
	* @param value the string to scrub
	* @returns the scrubbed string
	*/
	const _stripTemplateExpressions = function _stripTemplateExpressions(value) {
		value = stringReplace(value, MUSTACHE_EXPR$1, " ");
		value = stringReplace(value, ERB_EXPR$1, " ");
		value = stringReplace(value, TMPLIT_EXPR$1, " ");
		return value;
	};
	/**
	* Strip template-engine expressions ({{...}}, ${...}, <%...%>) from the
	* character data of an element subtree. Used as the final safety net for
	* SAFE_FOR_TEMPLATES on every DOM-returning code path so that expressions
	* which only form after text-node normalization (e.g. fragments split across
	* stripped elements) cannot survive into a template-evaluating framework.
	*
	* Walks text/comment/CDATA/processing-instruction nodes and mutates `.data`
	* in place rather than round-tripping through innerHTML. This preserves
	* descendant node references (important for IN_PLACE callers), avoids a
	* serialize/reparse cycle, and reads literal character data — which means
	* `<%...%>` in text content matches the ERB regex against its real bytes
	* instead of the HTML-entity-escaped form innerHTML would produce.
	*
	* Attribute values are not visited here; SAFE_FOR_TEMPLATES handling for
	* attributes is performed during the per-node `_sanitizeAttributes` pass.
	*
	* @param node The root element whose character data should be scrubbed.
	*/
	const _scrubTemplateExpressions2 = function _scrubTemplateExpressions(node) {
		var _node$querySelectorAl;
		_scrubOwnCharacterData(node);
		const templates = (_node$querySelectorAl = node.querySelectorAll) === null || _node$querySelectorAl === void 0 ? void 0 : _node$querySelectorAl.call(node, "template");
		if (templates) arrayForEach(templates, (tmpl) => {
			if (_isDocumentFragment(tmpl.content)) _scrubTemplateExpressions2(tmpl.content);
		});
	};
	/**
	* _scrubOwnCharacterData
	*
	* Non-recursive core of _scrubTemplateExpressions: normalize `node` and
	* strip template expressions from its own character data only. Does not
	* enter <template>.content or attached shadow roots (NodeIterator never
	* does). Used by _sanitizeShadowDOM, where every nested template content
	* and shadow root is already walked - and therefore scrubbed - by its own
	* recursive _sanitizeShadowDOM call; recursing here as well would rescrub
	* each nested fragment once per ancestor, which is quadratic in nesting
	* depth.
	*
	* @param node The root whose own character data should be scrubbed.
	*/
	const _scrubOwnCharacterData = function _scrubOwnCharacterData(node) {
		node.normalize();
		const doc = getOwnerDocument ? getOwnerDocument(node) : node.ownerDocument;
		const walker = createNodeIterator.call(doc || node, node, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_CDATA_SECTION | NodeFilter.SHOW_PROCESSING_INSTRUCTION, null);
		let currentNode = walker.nextNode();
		while (currentNode) {
			currentNode.data = _stripTemplateExpressions(currentNode.data);
			currentNode = walker.nextNode();
		}
	};
	/**
	* _isClobbered
	*
	* Detect DOM-clobbering on HTMLFormElement nodes. Form is the only HTML
	* interface with [LegacyOverrideBuiltIns]; a descendant element with a
	* `name` attribute matching a prototype property shadows that property
	* on direct reads. We use this check at the IN_PLACE entry-point and
	* during attribute sanitization to refuse clobbered forms.
	*
	* @param element element to check for clobbering attacks
	* @return true if clobbered, false if safe
	*/
	const _isClobbered = function _isClobbered(element) {
		const realTagName = getNodeName ? getNodeName(element) : null;
		if (typeof realTagName !== "string") return false;
		if (transformCaseFunc(realTagName) !== "form") return false;
		return typeof element.nodeName !== "string" || typeof element.textContent !== "string" || typeof element.removeChild !== "function" || element.attributes !== getAttributes(element) || typeof element.removeAttribute !== "function" || typeof element.removeAttributeNode !== "function" || typeof element.getAttributeNode !== "function" || typeof element.setAttribute !== "function" || typeof element.namespaceURI !== "string" || typeof element.insertBefore !== "function" || typeof element.hasChildNodes !== "function" || element.nodeType !== getNodeType(element) || element.childNodes !== getChildNodes(element);
	};
	/**
	* Checks whether the given value is a DocumentFragment from any realm.
	*
	* The realm-independent replacement reads `nodeType` through the cached
	* Node.prototype getter and compares to the DOCUMENT_FRAGMENT_NODE
	* constant (11). nodeType is a numeric value resolved from the node's
	* internal slot, identical across realms for the same kind of node.
	*
	* @param value object to check
	* @return true if value is a DocumentFragment-shaped node from any realm
	*/
	const _isDocumentFragment = function _isDocumentFragment(value) {
		if (!getNodeType || typeof value !== "object" || value === null) return false;
		try {
			return getNodeType(value) === NODE_TYPE.documentFragment;
		} catch (_) {
			return false;
		}
	};
	/**
	* Checks whether the given object is a DOM node, including nodes that
	* originate from a different window/realm (e.g. an iframe's
	* contentDocument). The previous `value instanceof Node` check was
	* realm-bound: nodes from a different window failed it, causing
	* sanitize() to silently stringify them and reset IN_PLACE to false,
	* returning the original node unsanitized. See GHSA-4w3q-35jp-p934.
	*
	* @param value object to check whether it's a DOM node
	* @return true if value is a DOM node from any realm
	*/
	const _isNode = function _isNode(value) {
		if (!getNodeType || typeof value !== "object" || value === null) return false;
		try {
			return typeof getNodeType(value) === "number";
		} catch (_) {
			return false;
		}
	};
	function _executeHooks(hooks, currentNode, data) {
		if (hooks.length === 0) return;
		arrayForEach(hooks, (hook) => {
			hook.call(DOMPurify, currentNode, data, CONFIG);
		});
	}
	/**
	* Structural-threat checks that condemn a node regardless of the
	* allowlists: mXSS via namespace confusion, risky CSS construction,
	* processing instructions, markup-bearing comments. Pure predicate;
	* the caller removes. Check order is load-bearing.
	*
	* @param currentNode the node to inspect
	* @param tagName the node's transformCaseFunc'd tag name
	* @return true if the node must be removed
	*/
	const _isUnsafeNode = function _isUnsafeNode(currentNode, tagName) {
		if (SAFE_FOR_XML && currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && regExpTest(ELEMENT_MARKUP_PROBE, currentNode.textContent) && regExpTest(ELEMENT_MARKUP_PROBE, currentNode.innerHTML)) return true;
		if (SAFE_FOR_XML && LITERAL_TEXT_ELEMENTS[tagName] && _readNodeType(currentNode) === NODE_TYPE.element && _readNamespaceURI(currentNode) === HTML_NAMESPACE && (_isNode(currentNode.firstElementChild) || typeof currentNode.textContent === "string" && regExpTest(ELEMENT_MARKUP_PROBE, currentNode.textContent))) return true;
		if (currentNode.nodeType === NODE_TYPE.processingInstruction) return true;
		if (SAFE_FOR_XML && currentNode.nodeType === NODE_TYPE.comment && regExpTest(COMMENT_MARKUP_PROBE, currentNode.data)) return true;
		return false;
	};
	/**
	* Evaluate a CUSTOM_ELEMENT_HANDLING check (a RegExp or a predicate
	* function, per the validation in _parseConfig) against a name.
	* Additional arguments are forwarded to predicate functions - the
	* attributeNameCheck predicate receives the tag name as its second
	* argument. A null/absent check never matches.
	*
	* @param check the configured tagNameCheck / attributeNameCheck value
	* @param name the name to test
	* @param args extra arguments forwarded to a predicate function
	* @return true if the check matches the name
	*/
	const _matchesNameCheck = function _matchesNameCheck(check, name) {
		if (check instanceof RegExp) return regExpTest(check, name);
		if (check instanceof Function) {
			for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) args[_key - 2] = arguments[_key];
			return Boolean(check(name, ...args));
		}
		return false;
	};
	/**
	* Handle a node whose tag is forbidden or not allowlisted: keep
	* allowed custom elements (false return exits _sanitizeElements
	* early - the namespace and fallback-tag removal checks are
	* intentionally skipped for kept custom elements), else hoist
	* content per KEEP_CONTENT and remove.
	*
	* A kept custom element is the ONLY case in which this function
	* returns false, so the caller uses that return value to run the
	* afterSanitizeElements hook on the kept element and keep the
	* element-hook lifecycle consistent with normal allowlisted
	* elements (GHSA-c2j3-45gr-mqc4).
	*
	* @param currentNode the disallowed node
	* @param tagName the node's transformCaseFunc'd tag name
	* @return true if the node was removed, false if kept
	*/
	const _sanitizeDisallowedNode = function _sanitizeDisallowedNode(currentNode, tagName, root) {
		if (!FORBID_TAGS[tagName] && _isBasicCustomElement(tagName) && _matchesNameCheck(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) return false;
		if (KEEP_CONTENT && !FORBID_CONTENTS[tagName] && !FORBID_CONTENTS[stringToLowerCase(tagName)]) {
			const parentNode = getParentNode(currentNode);
			const childNodes = getChildNodes(currentNode);
			if (childNodes && parentNode) {
				const childCount = childNodes.length;
				for (let i = childCount - 1; i >= 0; --i) {
					const hoisted = currentNode === root ? cloneNode(childNodes[i], true) : childNodes[i];
					parentNode.insertBefore(hoisted, getNextSibling(currentNode));
				}
			}
		}
		_forceRemove(currentNode);
		return true;
	};
	/**
	* Fork a hook-mutable allowlist off its shared binding the first time a
	* (possibly lazily-installed) uponSanitize* hook is about to see it, so the
	* hook cannot widen the per-instance default or the setConfig binding by
	* reference and leak past the call. Returns the set unchanged once it is
	* already call-local, so repeated calls across elements are idempotent.
	*
	* @param hookList the uponSanitize* hook array for this event
	* @param set the current ALLOWED_TAGS / ALLOWED_ATTR binding
	* @param defaultSet the per-instance DEFAULT_ALLOWED_* constant
	* @param setConfigSet the captured setConfig() binding, or null
	* @return a call-local clone if a hook is present and set is still shared,
	*   else set unchanged
	*/
	const _forkSharedAllowlist = function _forkSharedAllowlist(hookList, set, defaultSet, setConfigSet) {
		if (hookList.length === 0) return set;
		return set === defaultSet || set === setConfigSet ? clone(set) : set;
	};
	/**
	* A hook may have detached the node it was called for. If so, treat it as
	* removed and stop processing it; the walk root is exempt. On the IN_PLACE
	* path the detached subtree is neutralized right away.
	*
	* @param currentNode the node a hook may have detached
	* @param root the current walk root
	* @return true if the node was detached
	*/
	const _handleHookDetachedNode = function _handleHookDetachedNode(currentNode, root) {
		if (currentNode === root || getParentNode(currentNode) !== null) return false;
		if (IN_PLACE) _neutralizeSubtree(currentNode);
		return true;
	};
	/**
	* _sanitizeElements
	*
	* @protect nodeName
	* @protect textContent
	* @protect removeChild
	* @param currentNode to check for permission to exist
	* @return true if node was killed, false if left alive
	*/
	const _sanitizeElements = function _sanitizeElements(currentNode, root) {
		_markVisited(currentNode);
		_executeHooks(hooks.beforeSanitizeElements, currentNode, null);
		if (_handleHookDetachedNode(currentNode, root)) return true;
		if (_isClobbered(currentNode)) {
			_forceRemove(currentNode);
			return true;
		}
		const tagName = transformCaseFunc(_readNodeName(currentNode));
		ALLOWED_TAGS = _forkSharedAllowlist(hooks.uponSanitizeElement, ALLOWED_TAGS, DEFAULT_ALLOWED_TAGS, SET_CONFIG_ALLOWED_TAGS);
		_executeHooks(hooks.uponSanitizeElement, currentNode, {
			tagName,
			allowedTags: ALLOWED_TAGS
		});
		if (_handleHookDetachedNode(currentNode, root)) return true;
		if (_isUnsafeNode(currentNode, tagName)) {
			_forceRemove(currentNode);
			return true;
		}
		if (FORBID_TAGS[tagName] || !(EXTRA_ELEMENT_HANDLING.tagCheck instanceof Function && EXTRA_ELEMENT_HANDLING.tagCheck(tagName)) && !ALLOWED_TAGS[tagName]) {
			const removed = _sanitizeDisallowedNode(currentNode, tagName, root);
			if (removed === false) {
				_executeHooks(hooks.afterSanitizeElements, currentNode, null);
				if (_handleHookDetachedNode(currentNode, root)) return true;
			}
			return removed;
		}
		if (_readNodeType(currentNode) === NODE_TYPE.element && !_checkValidNamespace(currentNode)) {
			_forceRemove(currentNode);
			return true;
		}
		if ((tagName === "noscript" || tagName === "noembed" || tagName === "noframes") && regExpTest(FALLBACK_TAG_CLOSE, currentNode.innerHTML)) {
			_forceRemove(currentNode);
			return true;
		}
		if (SAFE_FOR_TEMPLATES && currentNode.nodeType === NODE_TYPE.text) {
			const content = _stripTemplateExpressions(currentNode.textContent);
			if (currentNode.textContent !== content) {
				arrayPush(DOMPurify.removed, { element: currentNode.cloneNode() });
				currentNode.textContent = content;
			}
		}
		_executeHooks(hooks.afterSanitizeElements, currentNode, null);
		return _handleHookDetachedNode(currentNode, root);
	};
	/**
	* _isValidAttribute
	*
	* @param lcTag Lowercase tag name of containing element.
	* @param lcName Lowercase attribute name.
	* @param value Attribute value.
	* @return Returns true if `value` is valid, otherwise false.
	*/
	const _isValidAttribute = function _isValidAttribute(lcTag, lcName, value) {
		if (FORBID_ATTR[lcName]) return false;
		if (_isPatchLinkageAttribute(lcName, lcTag)) return false;
		if (SANITIZE_DOM && (lcName === "id" || lcName === "name") && (value in document || value in formElement)) return false;
		const nameIsPermitted = ALLOWED_ATTR[lcName] || EXTRA_ELEMENT_HANDLING.attributeCheck instanceof Function && EXTRA_ELEMENT_HANDLING.attributeCheck(lcName, lcTag);
		if (ALLOW_DATA_ATTR && regExpTest(DATA_ATTR$1, lcName)) return true;
		if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR$1, lcName)) return true;
		if (!nameIsPermitted) return _isBasicCustomElement(lcTag) && _matchesNameCheck(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) && _matchesNameCheck(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName, lcTag) || lcName === "is" && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && _matchesNameCheck(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value);
		if (URI_SAFE_ATTRIBUTES[lcName]) return true;
		if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE$1, ""))) return true;
		if ((lcName === "src" || lcName === "xlink:href" || lcName === "href") && lcTag !== "script" && stringIndexOf(value, "data:") === 0 && DATA_URI_TAGS[lcTag]) return true;
		if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA$1, stringReplace(value, ATTR_WHITESPACE$1, ""))) return true;
		return !value;
	};
	const RESERVED_CUSTOM_ELEMENT_NAMES = addToSet({}, [
		"annotation-xml",
		"color-profile",
		"font-face",
		"font-face-format",
		"font-face-name",
		"font-face-src",
		"font-face-uri",
		"missing-glyph"
	]);
	/**
	* _isBasicCustomElement
	* checks if at least one dash is included in tagName, and it's not the first char
	* for more sophisticated checking see https://github.com/sindresorhus/validate-element-name
	*
	* @param tagName name of the tag of the node to sanitize
	* @returns Returns true if the tag name meets the basic criteria for a custom element, otherwise false.
	*/
	const _isBasicCustomElement = function _isBasicCustomElement(tagName) {
		return !RESERVED_CUSTOM_ELEMENT_NAMES[stringToLowerCase(tagName)] && regExpTest(CUSTOM_ELEMENT$1, tagName);
	};
	/**
	* Wrap an attribute value in the matching Trusted Types object when
	* the active policy requires it. Namespaced attributes pass through
	* unchanged (no TT support yet, see
	* https://bugs.chromium.org/p/chromium/issues/detail?id=1305293).
	*
	* @param lcTag lowercase tag name of the containing element
	* @param lcName lowercase attribute name
	* @param namespaceURI the attribute's namespace, if any
	* @param value the attribute value to wrap
	* @return the value, wrapped when Trusted Types demand it
	*/
	const _applyTrustedTypesToAttribute = function _applyTrustedTypesToAttribute(lcTag, lcName, namespaceURI, value) {
		if (trustedTypesPolicy && typeof trustedTypes === "object" && typeof trustedTypes.getAttributeType === "function" && !namespaceURI) switch (trustedTypes.getAttributeType(lcTag, lcName)) {
			case "TrustedHTML": return _createTrustedHTML(value);
			case "TrustedScriptURL": return _createTrustedScriptURL(value);
		}
		return value;
	};
	/**
	* Write a modified attribute value back onto the element. On
	* success, re-probe for clobbering introduced by the new value and
	* remove the element when found; otherwise, when this writeback is the
	* recreate half of the SANITIZE_NAMED_PROPS remove-and-recreate, pop the
	* removal entry that path recorded so it does not show as removed. On
	* failure, remove the attribute instead.
	*
	* Returns true only on a clean write (the value was set and the new value
	* introduced no clobbering). The caller uses that, together with its own
	* knowledge of whether this attribute pushed a DOMPurify.removed record, to
	* decide whether to pop that record. The pop must happen ONLY for the
	* named-prop remove-and-recreate; popping on any other value change (trim,
	* template scrubbing, Trusted Types) would consume an unrelated _forceRemove
	* subtree-cleanup record and let that detached subtree keep a live event
	* handler through the IN_PLACE neutralization pass (SO-001).
	*
	* @param currentNode the element carrying the attribute
	* @param name the attribute name as present on the element
	* @param namespaceURI the attribute's namespace, if any
	* @param value the new attribute value
	* @return true if the value was written without introducing clobbering
	*/
	const _setAttributeValue = function _setAttributeValue(currentNode, name, namespaceURI, value) {
		try {
			if (namespaceURI) currentNode.setAttributeNS(namespaceURI, name, value);
			else currentNode.setAttribute(name, value);
			if (_isClobbered(currentNode)) {
				_forceRemove(currentNode);
				return false;
			}
			return true;
		} catch (_) {
			_removeAttribute(name, currentNode);
			return false;
		}
	};
	/**
	* _isUnsafeAttributeValue
	*
	* Value-based attribute checks that the attribute walk applies before any
	* hook can force-keep an attribute, shared with the public
	* isValidAttribute() so that it never approves a value sanitize() would
	* strip.
	*
	* @param name the attribute name as found on the node (case preserved)
	* @param value the attribute value
	* @returns true if the attribute must be removed because of its value
	*/
	const _isUnsafeAttributeValue = function _isUnsafeAttributeValue(name, value) {
		if (SAFE_FOR_XML && regExpTest(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, value)) return true;
		return stringToLowerCase(name) === "attributename" && stringMatch(value, "href") !== null;
	};
	/**
	* _sanitizeAttributes
	*
	* @protect attributes
	* @protect nodeName
	* @protect removeAttribute
	* @protect setAttribute
	*
	* @param currentNode to sanitize
	* @param root the current walk root
	*/
	const _sanitizeAttributes = function _sanitizeAttributes(currentNode, root) {
		_executeHooks(hooks.beforeSanitizeAttributes, currentNode, null);
		if (_handleHookDetachedNode(currentNode, root)) return;
		const attributes = currentNode.attributes;
		if (!attributes || _isClobbered(currentNode)) return;
		ALLOWED_ATTR = _forkSharedAllowlist(hooks.uponSanitizeAttribute, ALLOWED_ATTR, DEFAULT_ALLOWED_ATTR, SET_CONFIG_ALLOWED_ATTR);
		const hookEvent = {
			attrName: "",
			attrValue: "",
			keepAttr: true,
			allowedAttributes: ALLOWED_ATTR,
			forceKeepAttr: void 0
		};
		let l = attributes.length;
		const lcTag = transformCaseFunc(currentNode.nodeName);
		while (l--) {
			const attr = attributes[l];
			const name = attr.name, namespaceURI = attr.namespaceURI, attrValue = attr.value;
			const lcName = transformCaseFunc(name);
			const initValue = attrValue;
			let value = name === "value" ? initValue : stringTrim(initValue);
			let recreatedNamedProp = false;
			hookEvent.attrName = lcName;
			hookEvent.attrValue = value;
			hookEvent.keepAttr = true;
			hookEvent.forceKeepAttr = void 0;
			_executeHooks(hooks.uponSanitizeAttribute, currentNode, hookEvent);
			value = hookEvent.attrValue;
			if (SANITIZE_NAMED_PROPS && (lcName === "id" || lcName === "name") && stringIndexOf(value, SANITIZE_NAMED_PROPS_PREFIX) !== 0) {
				_removeAttribute(name, currentNode, attr);
				value = SANITIZE_NAMED_PROPS_PREFIX + value;
				recreatedNamedProp = true;
			}
			if (_isUnsafeAttributeValue(name, value)) {
				_removeAttribute(name, currentNode, attr);
				continue;
			}
			if (hookEvent.forceKeepAttr) continue;
			if (!hookEvent.keepAttr) {
				_removeAttribute(name, currentNode, attr);
				continue;
			}
			if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(SELF_CLOSING_TAG, value)) {
				_removeAttribute(name, currentNode, attr);
				continue;
			}
			if (SAFE_FOR_TEMPLATES) value = _stripTemplateExpressions(value);
			if (!_isValidAttribute(lcTag, lcName, value)) {
				_removeAttribute(name, currentNode, attr);
				continue;
			}
			value = _applyTrustedTypesToAttribute(lcTag, lcName, namespaceURI, value);
			if (value !== initValue) {
				if (_setAttributeValue(currentNode, name, namespaceURI, value) && recreatedNamedProp) arrayPop(DOMPurify.removed);
			}
		}
		_executeHooks(hooks.afterSanitizeAttributes, currentNode, null);
		_handleHookDetachedNode(currentNode, root);
	};
	/**
	* _sanitizeShadowDOM
	*
	* @param fragment to iterate over recursively
	*/
	const _sanitizeShadowDOM2 = function _sanitizeShadowDOM(fragment) {
		let shadowNode = null;
		const shadowIterator = _createNodeIterator(fragment);
		_executeHooks(hooks.beforeSanitizeShadowDOM, fragment, null);
		while (shadowNode = shadowIterator.nextNode()) {
			_executeHooks(hooks.uponSanitizeShadowNode, shadowNode, null);
			_sanitizeElements(shadowNode, fragment);
			_sanitizeAttributes(shadowNode, fragment);
			if (_isDocumentFragment(shadowNode.content)) _sanitizeShadowDOM2(shadowNode.content);
			if (_readNodeType(shadowNode) === NODE_TYPE.element) {
				const innerSr = getShadowRoot(shadowNode);
				if (_isDocumentFragment(innerSr)) {
					_sanitizeAttachedShadowRoots(innerSr);
					_sanitizeShadowDOM2(innerSr);
				}
			}
		}
		if (SAFE_FOR_TEMPLATES) _scrubOwnCharacterData(fragment);
		_executeHooks(hooks.afterSanitizeShadowDOM, fragment, null);
	};
	/**
	* Sanitizes every attached shadow root under `root`, since the node
	* iterator does not enter shadow trees. Needed for IN_PLACE input and for
	* DOM input whose clonable shadow roots were copied by importNode().
	*
	* @param root the subtree root to walk for attached shadow roots
	*/
	const _sanitizeAttachedShadowRoots = function _sanitizeAttachedShadowRoots(root) {
		const stack = [{
			node: root,
			shadow: null
		}];
		while (stack.length > 0) {
			const item = stack.pop();
			if (item.shadow) {
				_sanitizeShadowDOM2(item.shadow);
				continue;
			}
			const node = item.node;
			const isElement = _readNodeType(node) === NODE_TYPE.element;
			const childNodes = getChildNodes(node);
			if (childNodes) for (let i = childNodes.length - 1; i >= 0; --i) stack.push({
				node: childNodes[i],
				shadow: null
			});
			if (isElement) {
				const rootName = getNodeName ? getNodeName(node) : null;
				if (typeof rootName === "string" && transformCaseFunc(rootName) === "template") {
					const content = node.content;
					if (_isDocumentFragment(content)) stack.push({
						node: content,
						shadow: null
					});
				}
			}
			if (isElement) {
				const sr = getShadowRoot(node);
				if (_isDocumentFragment(sr)) stack.push({
					node: null,
					shadow: sr
				}, {
					node: sr,
					shadow: null
				});
			}
		}
	};
	DOMPurify.sanitize = function(dirty) {
		let cfg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		let body = null;
		let importedNode = null;
		let currentNode = null;
		let returnNode = null;
		IS_EMPTY_INPUT = !dirty;
		if (IS_EMPTY_INPUT) dirty = "<!-->";
		if (typeof dirty !== "string" && !_isNode(dirty)) {
			dirty = stringifyValue(dirty);
			if (typeof dirty !== "string") throw typeErrorCreate("dirty is not a string, aborting");
		}
		if (!DOMPurify.isSupported) return dirty;
		if (SET_CONFIG) {
			ALLOWED_TAGS = SET_CONFIG_ALLOWED_TAGS;
			ALLOWED_ATTR = SET_CONFIG_ALLOWED_ATTR;
		} else _parseConfig(cfg);
		if (hooks.uponSanitizeElement.length > 0 || hooks.uponSanitizeAttribute.length > 0) ALLOWED_TAGS = clone(ALLOWED_TAGS);
		if (hooks.uponSanitizeAttribute.length > 0) ALLOWED_ATTR = clone(ALLOWED_ATTR);
		DOMPurify.removed = [];
		const inPlace = IN_PLACE && typeof dirty !== "string" && _isNode(dirty);
		let inPlaceNodes = [];
		const outerVisited = IN_PLACE_VISITED;
		if (inPlace) {
			_neutralizePatchLinkage(dirty);
			const nn = _readNodeName(dirty);
			if (typeof nn === "string") {
				const tagName = transformCaseFunc(nn);
				if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
					_neutralizeRoot(dirty);
					throw typeErrorCreate("root node is forbidden and cannot be sanitized in-place");
				}
			}
			if (_isClobbered(dirty)) {
				_neutralizeRoot(dirty);
				throw typeErrorCreate("root node is clobbered and cannot be sanitized in-place");
			}
			inPlaceNodes = _collectLiveNodes(dirty);
			IN_PLACE_VISITED = setCreate();
		} else if (_isNode(dirty)) {
			body = _initDocument("<!---->");
			importedNode = body.ownerDocument.importNode(dirty, true);
			if (importedNode.nodeType === NODE_TYPE.element && importedNode.nodeName === "BODY") body = importedNode;
			else if (importedNode.nodeName === "HTML") body = importedNode;
			else body.appendChild(importedNode);
			_sanitizeAttachedShadowRoots(body);
		} else {
			if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && dirty.indexOf("<") === -1) return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? _createTrustedHTML(dirty) : dirty;
			body = _initDocument(dirty);
			if (!body) return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : "";
		}
		if (body && FORCE_BODY) _forceRemove(body.firstChild);
		const walkRoot = inPlace ? dirty : body;
		try {
			if (inPlace) _sanitizeAttachedShadowRoots(dirty);
			const nodeIterator = _createNodeIterator(walkRoot);
			while (currentNode = nodeIterator.nextNode()) {
				_sanitizeElements(currentNode, walkRoot);
				_sanitizeAttributes(currentNode, walkRoot);
				if (_isDocumentFragment(currentNode.content)) _sanitizeShadowDOM2(currentNode.content);
			}
			if (inPlace) _sanitizeUnvisitedNodes(dirty, inPlaceNodes);
		} catch (error) {
			if (inPlace) {
				_neutralizeRoot(dirty);
				_neutralizeDiscarded(dirty, inPlaceNodes);
			}
			throw error;
		} finally {
			IN_PLACE_VISITED = outerVisited;
		}
		if (inPlace) {
			if (_neutralizeDiscarded(dirty, inPlaceNodes)) throw typeErrorCreate("a node selected for removal could not be safely returned; refusing to sanitize in place");
			if (SAFE_FOR_TEMPLATES) _scrubTemplateExpressions2(dirty);
			return dirty;
		}
		if (RETURN_DOM) {
			if (SAFE_FOR_TEMPLATES) _scrubTemplateExpressions2(body);
			if (RETURN_DOM_FRAGMENT) {
				returnNode = createDocumentFragment.call(body.ownerDocument);
				while (body.firstChild) returnNode.appendChild(body.firstChild);
			} else returnNode = body;
			if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmode) returnNode = importNode.call(originalDocument, returnNode, true);
			return returnNode;
		}
		let serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
		if (WHOLE_DOCUMENT && ALLOWED_TAGS["!doctype"] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) serializedHTML = "<!DOCTYPE " + body.ownerDocument.doctype.name + ">\n" + serializedHTML;
		if (SAFE_FOR_TEMPLATES) serializedHTML = _stripTemplateExpressions(serializedHTML);
		return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? _createTrustedHTML(serializedHTML) : serializedHTML;
	};
	DOMPurify.setConfig = function() {
		let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		_parseConfig(cfg);
		SET_CONFIG = true;
		SET_CONFIG_ALLOWED_TAGS = ALLOWED_TAGS;
		SET_CONFIG_ALLOWED_ATTR = ALLOWED_ATTR;
	};
	DOMPurify.clearConfig = function() {
		CONFIG = null;
		SET_CONFIG = false;
		SET_CONFIG_ALLOWED_TAGS = null;
		SET_CONFIG_ALLOWED_ATTR = null;
		trustedTypesPolicy = defaultTrustedTypesPolicy;
		emptyHTML = "";
	};
	DOMPurify.isValidAttribute = function(tag, attr, value) {
		if (!CONFIG) _parseConfig({});
		const lcTag = transformCaseFunc(tag);
		const lcName = transformCaseFunc(attr);
		if (typeof value === "string" && (_isUnsafeAttributeValue(attr, value) || !ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(SELF_CLOSING_TAG, value))) return false;
		return _isValidAttribute(lcTag, lcName, value);
	};
	DOMPurify.addHook = function(entryPoint, hookFunction) {
		if (typeof hookFunction !== "function") return;
		if (!objectHasOwnProperty(hooks, entryPoint)) return;
		arrayPush(hooks[entryPoint], hookFunction);
	};
	DOMPurify.removeHook = function(entryPoint, hookFunction) {
		if (!objectHasOwnProperty(hooks, entryPoint)) return;
		if (hookFunction !== void 0) {
			const index = arrayLastIndexOf(hooks[entryPoint], hookFunction);
			return index === -1 ? void 0 : arraySplice(hooks[entryPoint], index, 1)[0];
		}
		return arrayPop(hooks[entryPoint]);
	};
	DOMPurify.removeHooks = function(entryPoint) {
		if (!objectHasOwnProperty(hooks, entryPoint)) return;
		hooks[entryPoint] = [];
	};
	DOMPurify.removeAllHooks = function() {
		hooks = _createHooksMap();
	};
	return DOMPurify;
}
var purify_default = createDOMPurify();
// src/host/hljsWorker.ts?worker&inline
var jsContent = "(function() {\n	// \\0rolldown/runtime.js\n	var __create = Object.create;\n	var __defProp = Object.defineProperty;\n	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;\n	var __getOwnPropNames = Object.getOwnPropertyNames;\n	var __getProtoOf = Object.getPrototypeOf;\n	var __hasOwnProp = Object.prototype.hasOwnProperty;\n	var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod, mod.exports), cb = null), mod.exports);\n	var __copyProps = (to, from, except, desc) => {\n		if (from && typeof from === \"object\" || typeof from === \"function\") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {\n			key = keys[i];\n			if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {\n				get: ((k) => from[k]).bind(null, key),\n				enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable\n			});\n		}\n		return to;\n	};\n	var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule || !__hasOwnProp.call(mod, \"default\") ? __defProp(target, \"default\", {\n		value: mod,\n		enumerable: true\n	}) : target, mod));\n	var core_default = (/* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {\n		function deepFreeze(obj) {\n			if (obj instanceof Map) obj.clear = obj.delete = obj.set = function() {\n				throw new Error(\"map is read-only\");\n			};\n			else if (obj instanceof Set) obj.add = obj.clear = obj.delete = function() {\n				throw new Error(\"set is read-only\");\n			};\n			Object.freeze(obj);\n			Object.getOwnPropertyNames(obj).forEach((name) => {\n				const prop = obj[name];\n				const type = typeof prop;\n				if ((type === \"object\" || type === \"function\") && !Object.isFrozen(prop)) deepFreeze(prop);\n			});\n			return obj;\n		}\n		/** @typedef {import('highlight.js').CallbackResponse} CallbackResponse */\n		/** @typedef {import('highlight.js').CompiledMode} CompiledMode */\n		/** @implements CallbackResponse */\n		var Response = class {\n			/**\n			* @param {CompiledMode} mode\n			*/\n			constructor(mode) {\n				if (mode.data === void 0) mode.data = {};\n				this.data = mode.data;\n				this.isMatchIgnored = false;\n			}\n			ignoreMatch() {\n				this.isMatchIgnored = true;\n			}\n		};\n		/**\n		* @param {string} value\n		* @returns {string}\n		*/\n		function escapeHTML(value) {\n			return value.replace(/&/g, \"&amp;\").replace(/</g, \"&lt;\").replace(/>/g, \"&gt;\").replace(/\"/g, \"&quot;\").replace(/'/g, \"&#x27;\");\n		}\n		/**\n		* performs a shallow merge of multiple objects into one\n		*\n		* @template T\n		* @param {T} original\n		* @param {Record<string,any>[]} objects\n		* @returns {T} a single new object\n		*/\n		function inherit$1(original, ...objects) {\n			/** @type Record<string,any> */\n			const result = Object.create(null);\n			for (const key in original) result[key] = original[key];\n			objects.forEach(function(obj) {\n				for (const key in obj) result[key] = obj[key];\n			});\n			return result;\n		}\n		/**\n		* @typedef {object} Renderer\n		* @property {(text: string) => void} addText\n		* @property {(node: Node) => void} openNode\n		* @property {(node: Node) => void} closeNode\n		* @property {() => string} value\n		*/\n		/** @typedef {{scope?: string, language?: string, sublanguage?: boolean}} Node */\n		/** @typedef {{walk: (r: Renderer) => void}} Tree */\n		/** */\n		const SPAN_CLOSE = \"</span>\";\n		/**\n		* Determines if a node needs to be wrapped in <span>\n		*\n		* @param {Node} node */\n		const emitsWrappingTags = (node) => {\n			return !!node.scope;\n		};\n		/**\n		*\n		* @param {string} name\n		* @param {{prefix:string}} options\n		*/\n		const scopeToCSSClass = (name, { prefix }) => {\n			if (name.startsWith(\"language:\")) return name.replace(\"language:\", \"language-\");\n			if (name.includes(\".\")) {\n				const pieces = name.split(\".\");\n				return [`${prefix}${pieces.shift()}`, ...pieces.map((x, i) => `${x}${\"_\".repeat(i + 1)}`)].join(\" \");\n			}\n			return `${prefix}${name}`;\n		};\n		/** @type {Renderer} */\n		var HTMLRenderer = class {\n			/**\n			* Creates a new HTMLRenderer\n			*\n			* @param {Tree} parseTree - the parse tree (must support `walk` API)\n			* @param {{classPrefix: string}} options\n			*/\n			constructor(parseTree, options) {\n				this.buffer = \"\";\n				this.classPrefix = options.classPrefix;\n				parseTree.walk(this);\n			}\n			/**\n			* Adds texts to the output stream\n			*\n			* @param {string} text */\n			addText(text) {\n				this.buffer += escapeHTML(text);\n			}\n			/**\n			* Adds a node open to the output stream (if needed)\n			*\n			* @param {Node} node */\n			openNode(node) {\n				if (!emitsWrappingTags(node)) return;\n				const className = scopeToCSSClass(node.scope, { prefix: this.classPrefix });\n				this.span(className);\n			}\n			/**\n			* Adds a node close to the output stream (if needed)\n			*\n			* @param {Node} node */\n			closeNode(node) {\n				if (!emitsWrappingTags(node)) return;\n				this.buffer += SPAN_CLOSE;\n			}\n			/**\n			* returns the accumulated buffer\n			*/\n			value() {\n				return this.buffer;\n			}\n			/**\n			* Builds a span element\n			*\n			* @param {string} className */\n			span(className) {\n				this.buffer += `<span class=\"${className}\">`;\n			}\n		};\n		/** @typedef {{scope?: string, language?: string, children: Node[]} | string} Node */\n		/** @typedef {{scope?: string, language?: string, children: Node[]} } DataNode */\n		/** @typedef {import('highlight.js').Emitter} Emitter */\n		/**  */\n		/** @returns {DataNode} */\n		const newNode = (opts = {}) => {\n			/** @type DataNode */\n			const result = { children: [] };\n			Object.assign(result, opts);\n			return result;\n		};\n		var TokenTree = class TokenTree {\n			constructor() {\n				/** @type DataNode */\n				this.rootNode = newNode();\n				this.stack = [this.rootNode];\n			}\n			get top() {\n				return this.stack[this.stack.length - 1];\n			}\n			get root() {\n				return this.rootNode;\n			}\n			/** @param {Node} node */\n			add(node) {\n				this.top.children.push(node);\n			}\n			/** @param {string} scope */\n			openNode(scope) {\n				/** @type Node */\n				const node = newNode({ scope });\n				this.add(node);\n				this.stack.push(node);\n			}\n			closeNode() {\n				if (this.stack.length > 1) return this.stack.pop();\n			}\n			closeAllNodes() {\n				while (this.closeNode());\n			}\n			toJSON() {\n				return JSON.stringify(this.rootNode, null, 4);\n			}\n			/**\n			* @typedef { import(\"./html_renderer\").Renderer } Renderer\n			* @param {Renderer} builder\n			*/\n			walk(builder) {\n				return this.constructor._walk(builder, this.rootNode);\n			}\n			/**\n			* @param {Renderer} builder\n			* @param {Node} node\n			*/\n			static _walk(builder, node) {\n				if (typeof node === \"string\") builder.addText(node);\n				else if (node.children) {\n					builder.openNode(node);\n					node.children.forEach((child) => this._walk(builder, child));\n					builder.closeNode(node);\n				}\n				return builder;\n			}\n			/**\n			* @param {Node} node\n			*/\n			static _collapse(node) {\n				if (typeof node === \"string\") return;\n				if (!node.children) return;\n				if (node.children.every((el) => typeof el === \"string\")) node.children = [node.children.join(\"\")];\n				else node.children.forEach((child) => {\n					TokenTree._collapse(child);\n				});\n			}\n		};\n		/**\n		Currently this is all private API, but this is the minimal API necessary\n		that an Emitter must implement to fully support the parser.\n		\n		Minimal interface:\n		\n		- addText(text)\n		- __addSublanguage(emitter, subLanguageName)\n		- startScope(scope)\n		- endScope()\n		- finalize()\n		- toHTML()\n		\n		*/\n		/**\n		* @implements {Emitter}\n		*/\n		var TokenTreeEmitter = class extends TokenTree {\n			/**\n			* @param {*} options\n			*/\n			constructor(options) {\n				super();\n				this.options = options;\n			}\n			/**\n			* @param {string} text\n			*/\n			addText(text) {\n				if (text === \"\") return;\n				this.add(text);\n			}\n			/** @param {string} scope */\n			startScope(scope) {\n				this.openNode(scope);\n			}\n			endScope() {\n				this.closeNode();\n			}\n			/**\n			* @param {Emitter & {root: DataNode}} emitter\n			* @param {string} name\n			*/\n			__addSublanguage(emitter, name) {\n				/** @type DataNode */\n				const node = emitter.root;\n				if (name) node.scope = `language:${name}`;\n				this.add(node);\n			}\n			toHTML() {\n				return new HTMLRenderer(this, this.options).value();\n			}\n			finalize() {\n				this.closeAllNodes();\n				return true;\n			}\n		};\n		/**\n		* @param {string} value\n		* @returns {RegExp}\n		* */\n		/**\n		* @param {RegExp | string } re\n		* @returns {string}\n		*/\n		function source(re) {\n			if (!re) return null;\n			if (typeof re === \"string\") return re;\n			return re.source;\n		}\n		/**\n		* @param {RegExp | string } re\n		* @returns {string}\n		*/\n		function lookahead(re) {\n			return concat(\"(?=\", re, \")\");\n		}\n		/**\n		* @param {RegExp | string } re\n		* @returns {string}\n		*/\n		function anyNumberOfTimes(re) {\n			return concat(\"(?:\", re, \")*\");\n		}\n		/**\n		* @param {RegExp | string } re\n		* @returns {string}\n		*/\n		function optional(re) {\n			return concat(\"(?:\", re, \")?\");\n		}\n		/**\n		* @param {...(RegExp | string) } args\n		* @returns {string}\n		*/\n		function concat(...args) {\n			return args.map((x) => source(x)).join(\"\");\n		}\n		/**\n		* @param { Array<string | RegExp | Object> } args\n		* @returns {object}\n		*/\n		function stripOptionsFromArgs(args) {\n			const opts = args[args.length - 1];\n			if (typeof opts === \"object\" && opts.constructor === Object) {\n				args.splice(args.length - 1, 1);\n				return opts;\n			} else return {};\n		}\n		/** @typedef { {capture?: boolean} } RegexEitherOptions */\n		/**\n		* Any of the passed expresssions may match\n		*\n		* Creates a huge this | this | that | that match\n		* @param {(RegExp | string)[] | [...(RegExp | string)[], RegexEitherOptions]} args\n		* @returns {string}\n		*/\n		function either(...args) {\n			return \"(\" + (stripOptionsFromArgs(args).capture ? \"\" : \"?:\") + args.map((x) => source(x)).join(\"|\") + \")\";\n		}\n		/**\n		* @param {RegExp | string} re\n		* @returns {number}\n		*/\n		function countMatchGroups(re) {\n			return new RegExp(re.toString() + \"|\").exec(\"\").length - 1;\n		}\n		/**\n		* Does lexeme start with a regular expression match at the beginning\n		* @param {RegExp} re\n		* @param {string} lexeme\n		*/\n		function startsWith(re, lexeme) {\n			const match = re && re.exec(lexeme);\n			return match && match.index === 0;\n		}\n		const BACKREF_RE = /\\[(?:[^\\\\\\]]|\\\\.)*\\]|\\(\\??|\\\\([1-9][0-9]*)|\\\\./;\n		/**\n		* @param {(string | RegExp)[]} regexps\n		* @param {{joinWith: string}} opts\n		* @returns {string}\n		*/\n		function _rewriteBackreferences(regexps, { joinWith }) {\n			let numCaptures = 0;\n			return regexps.map((regex) => {\n				numCaptures += 1;\n				const offset = numCaptures;\n				let re = source(regex);\n				let out = \"\";\n				while (re.length > 0) {\n					const match = BACKREF_RE.exec(re);\n					if (!match) {\n						out += re;\n						break;\n					}\n					out += re.substring(0, match.index);\n					re = re.substring(match.index + match[0].length);\n					if (match[0][0] === \"\\\\\" && match[1]) out += \"\\\\\" + String(Number(match[1]) + offset);\n					else {\n						out += match[0];\n						if (match[0] === \"(\") numCaptures++;\n					}\n				}\n				return out;\n			}).map((re) => `(${re})`).join(joinWith);\n		}\n		/** @typedef {import('highlight.js').Mode} Mode */\n		/** @typedef {import('highlight.js').ModeCallback} ModeCallback */\n		const MATCH_NOTHING_RE = /\\b\\B/;\n		const IDENT_RE = \"[a-zA-Z]\\\\w*\";\n		const UNDERSCORE_IDENT_RE = \"[a-zA-Z_]\\\\w*\";\n		const NUMBER_RE = \"\\\\b\\\\d+(\\\\.\\\\d+)?\";\n		const C_NUMBER_RE = \"(-?)(\\\\b0[xX][a-fA-F0-9]+|(\\\\b\\\\d+(\\\\.\\\\d*)?|\\\\.\\\\d+)([eE][-+]?\\\\d+)?)\";\n		const BINARY_NUMBER_RE = \"\\\\b(0b[01]+)\";\n		const RE_STARTERS_RE = \"!|!=|!==|%|%=|&|&&|&=|\\\\*|\\\\*=|\\\\+|\\\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\\\?|\\\\[|\\\\{|\\\\(|\\\\^|\\\\^=|\\\\||\\\\|=|\\\\|\\\\||~\";\n		/**\n		* @param { Partial<Mode> & {binary?: string | RegExp} } opts\n		*/\n		const SHEBANG = (opts = {}) => {\n			const beginShebang = /^#![ ]*\\//;\n			if (opts.binary) opts.begin = concat(beginShebang, /.*\\b/, opts.binary, /\\b.*/);\n			return inherit$1({\n				scope: \"meta\",\n				begin: beginShebang,\n				end: /$/,\n				relevance: 0,\n				/** @type {ModeCallback} */\n				\"on:begin\": (m, resp) => {\n					if (m.index !== 0) resp.ignoreMatch();\n				}\n			}, opts);\n		};\n		const BACKSLASH_ESCAPE = {\n			begin: \"\\\\\\\\[\\\\s\\\\S]\",\n			relevance: 0\n		};\n		const APOS_STRING_MODE = {\n			scope: \"string\",\n			begin: \"'\",\n			end: \"'\",\n			illegal: \"\\\\n\",\n			contains: [BACKSLASH_ESCAPE]\n		};\n		const QUOTE_STRING_MODE = {\n			scope: \"string\",\n			begin: \"\\\"\",\n			end: \"\\\"\",\n			illegal: \"\\\\n\",\n			contains: [BACKSLASH_ESCAPE]\n		};\n		const PHRASAL_WORDS_MODE = { begin: /\\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\\b/ };\n		/**\n		* Creates a comment mode\n		*\n		* @param {string | RegExp} begin\n		* @param {string | RegExp} end\n		* @param {Mode | {}} [modeOptions]\n		* @returns {Partial<Mode>}\n		*/\n		const COMMENT = function(begin, end, modeOptions = {}) {\n			const mode = inherit$1({\n				scope: \"comment\",\n				begin,\n				end,\n				contains: []\n			}, modeOptions);\n			mode.contains.push({\n				scope: \"doctag\",\n				begin: \"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)\",\n				end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,\n				excludeBegin: true,\n				relevance: 0\n			});\n			const ENGLISH_WORD = either(\"I\", \"a\", \"is\", \"so\", \"us\", \"to\", \"at\", \"if\", \"in\", \"it\", \"on\", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);\n			mode.contains.push({ begin: concat(/[ ]+/, \"(\", ENGLISH_WORD, /[.]?[:]?([.][ ]|[ ])/, \"){3}\") });\n			return mode;\n		};\n		const C_LINE_COMMENT_MODE = COMMENT(\"//\", \"$\");\n		const C_BLOCK_COMMENT_MODE = COMMENT(\"/\\\\*\", \"\\\\*/\");\n		const HASH_COMMENT_MODE = COMMENT(\"#\", \"$\");\n		const NUMBER_MODE = {\n			scope: \"number\",\n			begin: NUMBER_RE,\n			relevance: 0\n		};\n		const C_NUMBER_MODE = {\n			scope: \"number\",\n			begin: C_NUMBER_RE,\n			relevance: 0\n		};\n		const BINARY_NUMBER_MODE = {\n			scope: \"number\",\n			begin: BINARY_NUMBER_RE,\n			relevance: 0\n		};\n		const REGEXP_MODE = {\n			scope: \"regexp\",\n			begin: /\\/(?=[^/\\n]*\\/)/,\n			end: /\\/[gimuy]*/,\n			contains: [BACKSLASH_ESCAPE, {\n				begin: /\\[/,\n				end: /\\]/,\n				relevance: 0,\n				contains: [BACKSLASH_ESCAPE]\n			}]\n		};\n		const TITLE_MODE = {\n			scope: \"title\",\n			begin: IDENT_RE,\n			relevance: 0\n		};\n		const UNDERSCORE_TITLE_MODE = {\n			scope: \"title\",\n			begin: UNDERSCORE_IDENT_RE,\n			relevance: 0\n		};\n		const METHOD_GUARD = {\n			begin: \"\\\\.\\\\s*[a-zA-Z_]\\\\w*\",\n			relevance: 0\n		};\n		/**\n		* Adds end same as begin mechanics to a mode\n		*\n		* Your mode must include at least a single () match group as that first match\n		* group is what is used for comparison\n		* @param {Partial<Mode>} mode\n		*/\n		const END_SAME_AS_BEGIN = function(mode) {\n			return Object.assign(mode, {\n				/** @type {ModeCallback} */\n				\"on:begin\": (m, resp) => {\n					resp.data._beginMatch = m[1];\n				},\n				/** @type {ModeCallback} */\n				\"on:end\": (m, resp) => {\n					if (resp.data._beginMatch !== m[1]) resp.ignoreMatch();\n				}\n			});\n		};\n		var MODES = /*#__PURE__*/ Object.freeze({\n			__proto__: null,\n			APOS_STRING_MODE,\n			BACKSLASH_ESCAPE,\n			BINARY_NUMBER_MODE,\n			BINARY_NUMBER_RE,\n			COMMENT,\n			C_BLOCK_COMMENT_MODE,\n			C_LINE_COMMENT_MODE,\n			C_NUMBER_MODE,\n			C_NUMBER_RE,\n			END_SAME_AS_BEGIN,\n			HASH_COMMENT_MODE,\n			IDENT_RE,\n			MATCH_NOTHING_RE,\n			METHOD_GUARD,\n			NUMBER_MODE,\n			NUMBER_RE,\n			PHRASAL_WORDS_MODE,\n			QUOTE_STRING_MODE,\n			REGEXP_MODE,\n			RE_STARTERS_RE,\n			SHEBANG,\n			TITLE_MODE,\n			UNDERSCORE_IDENT_RE,\n			UNDERSCORE_TITLE_MODE\n		});\n		/**\n		@typedef {import('highlight.js').CallbackResponse} CallbackResponse\n		@typedef {import('highlight.js').CompilerExt} CompilerExt\n		*/\n		/**\n		* Skip a match if it has a preceding dot\n		*\n		* This is used for `beginKeywords` to prevent matching expressions such as\n		* `bob.keyword.do()`. The mode compiler automatically wires this up as a\n		* special _internal_ 'on:begin' callback for modes with `beginKeywords`\n		* @param {RegExpMatchArray} match\n		* @param {CallbackResponse} response\n		*/\n		function skipIfHasPrecedingDot(match, response) {\n			if (match.input[match.index - 1] === \".\") response.ignoreMatch();\n		}\n		/**\n		*\n		* @type {CompilerExt}\n		*/\n		function scopeClassName(mode, _parent) {\n			if (mode.className !== void 0) {\n				mode.scope = mode.className;\n				delete mode.className;\n			}\n		}\n		/**\n		* `beginKeywords` syntactic sugar\n		* @type {CompilerExt}\n		*/\n		function beginKeywords(mode, parent) {\n			if (!parent) return;\n			if (!mode.beginKeywords) return;\n			mode.begin = \"\\\\b(\" + mode.beginKeywords.split(\" \").join(\"|\") + \")(?!\\\\.)(?=\\\\b|\\\\s)\";\n			mode.__beforeBegin = skipIfHasPrecedingDot;\n			mode.keywords = mode.keywords || mode.beginKeywords;\n			delete mode.beginKeywords;\n			if (mode.relevance === void 0) mode.relevance = 0;\n		}\n		/**\n		* Allow `illegal` to contain an array of illegal values\n		* @type {CompilerExt}\n		*/\n		function compileIllegal(mode, _parent) {\n			if (!Array.isArray(mode.illegal)) return;\n			mode.illegal = either(...mode.illegal);\n		}\n		/**\n		* `match` to match a single expression for readability\n		* @type {CompilerExt}\n		*/\n		function compileMatch(mode, _parent) {\n			if (!mode.match) return;\n			if (mode.begin || mode.end) throw new Error(\"begin & end are not supported with match\");\n			mode.begin = mode.match;\n			delete mode.match;\n		}\n		/**\n		* provides the default 1 relevance to all modes\n		* @type {CompilerExt}\n		*/\n		function compileRelevance(mode, _parent) {\n			if (mode.relevance === void 0) mode.relevance = 1;\n		}\n		const beforeMatchExt = (mode, parent) => {\n			if (!mode.beforeMatch) return;\n			if (mode.starts) throw new Error(\"beforeMatch cannot be used with starts\");\n			const originalMode = Object.assign({}, mode);\n			Object.keys(mode).forEach((key) => {\n				delete mode[key];\n			});\n			mode.keywords = originalMode.keywords;\n			mode.begin = concat(originalMode.beforeMatch, lookahead(originalMode.begin));\n			mode.starts = {\n				relevance: 0,\n				contains: [Object.assign(originalMode, { endsParent: true })]\n			};\n			mode.relevance = 0;\n			delete originalMode.beforeMatch;\n		};\n		const COMMON_KEYWORDS = [\n			\"of\",\n			\"and\",\n			\"for\",\n			\"in\",\n			\"not\",\n			\"or\",\n			\"if\",\n			\"then\",\n			\"parent\",\n			\"list\",\n			\"value\"\n		];\n		const DEFAULT_KEYWORD_SCOPE = \"keyword\";\n		/**\n		* Given raw keywords from a language definition, compile them.\n		*\n		* @param {string | Record<string,string|string[]> | Array<string>} rawKeywords\n		* @param {boolean} caseInsensitive\n		*/\n		function compileKeywords(rawKeywords, caseInsensitive, scopeName = DEFAULT_KEYWORD_SCOPE) {\n			/** @type {import(\"highlight.js/private\").KeywordDict} */\n			const compiledKeywords = Object.create(null);\n			if (typeof rawKeywords === \"string\") compileList(scopeName, rawKeywords.split(\" \"));\n			else if (Array.isArray(rawKeywords)) compileList(scopeName, rawKeywords);\n			else Object.keys(rawKeywords).forEach(function(scopeName) {\n				Object.assign(compiledKeywords, compileKeywords(rawKeywords[scopeName], caseInsensitive, scopeName));\n			});\n			return compiledKeywords;\n			/**\n			* Compiles an individual list of keywords\n			*\n			* Ex: \"for if when while|5\"\n			*\n			* @param {string} scopeName\n			* @param {Array<string>} keywordList\n			*/\n			function compileList(scopeName, keywordList) {\n				if (caseInsensitive) keywordList = keywordList.map((x) => x.toLowerCase());\n				keywordList.forEach(function(keyword) {\n					const pair = keyword.split(\"|\");\n					compiledKeywords[pair[0]] = [scopeName, scoreForKeyword(pair[0], pair[1])];\n				});\n			}\n		}\n		/**\n		* Returns the proper score for a given keyword\n		*\n		* Also takes into account comment keywords, which will be scored 0 UNLESS\n		* another score has been manually assigned.\n		* @param {string} keyword\n		* @param {string} [providedScore]\n		*/\n		function scoreForKeyword(keyword, providedScore) {\n			if (providedScore) return Number(providedScore);\n			return commonKeyword(keyword) ? 0 : 1;\n		}\n		/**\n		* Determines if a given keyword is common or not\n		*\n		* @param {string} keyword */\n		function commonKeyword(keyword) {\n			return COMMON_KEYWORDS.includes(keyword.toLowerCase());\n		}\n		/**\n		* @type {Record<string, boolean>}\n		*/\n		const seenDeprecations = {};\n		/**\n		* @param {string} message\n		*/\n		const error = (message) => {\n			console.error(message);\n		};\n		/**\n		* @param {string} message\n		* @param {any} args\n		*/\n		const warn = (message, ...args) => {\n			console.log(`WARN: ${message}`, ...args);\n		};\n		/**\n		* @param {string} version\n		* @param {string} message\n		*/\n		const deprecated = (version, message) => {\n			if (seenDeprecations[`${version}/${message}`]) return;\n			console.log(`Deprecated as of ${version}. ${message}`);\n			seenDeprecations[`${version}/${message}`] = true;\n		};\n		/**\n		@typedef {import('highlight.js').CompiledMode} CompiledMode\n		*/\n		const MultiClassError = /* @__PURE__ */ new Error();\n		/**\n		* Renumbers labeled scope names to account for additional inner match\n		* groups that otherwise would break everything.\n		*\n		* Lets say we 3 match scopes:\n		*\n		*   { 1 => ..., 2 => ..., 3 => ... }\n		*\n		* So what we need is a clean match like this:\n		*\n		*   (a)(b)(c) => [ \"a\", \"b\", \"c\" ]\n		*\n		* But this falls apart with inner match groups:\n		*\n		* (a)(((b)))(c) => [\"a\", \"b\", \"b\", \"b\", \"c\" ]\n		*\n		* Our scopes are now \"out of alignment\" and we're repeating `b` 3 times.\n		* What needs to happen is the numbers are remapped:\n		*\n		*   { 1 => ..., 2 => ..., 5 => ... }\n		*\n		* We also need to know that the ONLY groups that should be output\n		* are 1, 2, and 5.  This function handles this behavior.\n		*\n		* @param {CompiledMode} mode\n		* @param {Array<RegExp | string>} regexes\n		* @param {{key: \"beginScope\"|\"endScope\"}} opts\n		*/\n		function remapScopeNames(mode, regexes, { key }) {\n			let offset = 0;\n			const scopeNames = mode[key];\n			/** @type Record<number,boolean> */\n			const emit = {};\n			/** @type Record<number,string> */\n			const positions = {};\n			for (let i = 1; i <= regexes.length; i++) {\n				positions[i + offset] = scopeNames[i];\n				emit[i + offset] = true;\n				offset += countMatchGroups(regexes[i - 1]);\n			}\n			mode[key] = positions;\n			mode[key]._emit = emit;\n			mode[key]._multi = true;\n		}\n		/**\n		* @param {CompiledMode} mode\n		*/\n		function beginMultiClass(mode) {\n			if (!Array.isArray(mode.begin)) return;\n			if (mode.skip || mode.excludeBegin || mode.returnBegin) {\n				error(\"skip, excludeBegin, returnBegin not compatible with beginScope: {}\");\n				throw MultiClassError;\n			}\n			if (typeof mode.beginScope !== \"object\" || mode.beginScope === null) {\n				error(\"beginScope must be object\");\n				throw MultiClassError;\n			}\n			remapScopeNames(mode, mode.begin, { key: \"beginScope\" });\n			mode.begin = _rewriteBackreferences(mode.begin, { joinWith: \"\" });\n		}\n		/**\n		* @param {CompiledMode} mode\n		*/\n		function endMultiClass(mode) {\n			if (!Array.isArray(mode.end)) return;\n			if (mode.skip || mode.excludeEnd || mode.returnEnd) {\n				error(\"skip, excludeEnd, returnEnd not compatible with endScope: {}\");\n				throw MultiClassError;\n			}\n			if (typeof mode.endScope !== \"object\" || mode.endScope === null) {\n				error(\"endScope must be object\");\n				throw MultiClassError;\n			}\n			remapScopeNames(mode, mode.end, { key: \"endScope\" });\n			mode.end = _rewriteBackreferences(mode.end, { joinWith: \"\" });\n		}\n		/**\n		* this exists only to allow `scope: {}` to be used beside `match:`\n		* Otherwise `beginScope` would necessary and that would look weird\n		\n		{\n		match: [ /def/, /\\w+/ ]\n		scope: { 1: \"keyword\" , 2: \"title\" }\n		}\n		\n		* @param {CompiledMode} mode\n		*/\n		function scopeSugar(mode) {\n			if (mode.scope && typeof mode.scope === \"object\" && mode.scope !== null) {\n				mode.beginScope = mode.scope;\n				delete mode.scope;\n			}\n		}\n		/**\n		* @param {CompiledMode} mode\n		*/\n		function MultiClass(mode) {\n			scopeSugar(mode);\n			if (typeof mode.beginScope === \"string\") mode.beginScope = { _wrap: mode.beginScope };\n			if (typeof mode.endScope === \"string\") mode.endScope = { _wrap: mode.endScope };\n			beginMultiClass(mode);\n			endMultiClass(mode);\n		}\n		/**\n		@typedef {import('highlight.js').Mode} Mode\n		@typedef {import('highlight.js').CompiledMode} CompiledMode\n		@typedef {import('highlight.js').Language} Language\n		@typedef {import('highlight.js').HLJSPlugin} HLJSPlugin\n		@typedef {import('highlight.js').CompiledLanguage} CompiledLanguage\n		*/\n		/**\n		* Compiles a language definition result\n		*\n		* Given the raw result of a language definition (Language), compiles this so\n		* that it is ready for highlighting code.\n		* @param {Language} language\n		* @returns {CompiledLanguage}\n		*/\n		function compileLanguage(language) {\n			/**\n			* Builds a regex with the case sensitivity of the current language\n			*\n			* @param {RegExp | string} value\n			* @param {boolean} [global]\n			*/\n			function langRe(value, global) {\n				return new RegExp(source(value), \"m\" + (language.case_insensitive ? \"i\" : \"\") + (language.unicodeRegex ? \"u\" : \"\") + (global ? \"g\" : \"\"));\n			}\n			/**\n			Stores multiple regular expressions and allows you to quickly search for\n			them all in a string simultaneously - returning the first match.  It does\n			this by creating a huge (a|b|c) regex - each individual item wrapped with ()\n			and joined by `|` - using match groups to track position.  When a match is\n			found checking which position in the array has content allows us to figure\n			out which of the original regexes / match groups triggered the match.\n			\n			The match object itself (the result of `Regex.exec`) is returned but also\n			enhanced by merging in any meta-data that was registered with the regex.\n			This is how we keep track of which mode matched, and what type of rule\n			(`illegal`, `begin`, end, etc).\n			*/\n			class MultiRegex {\n				constructor() {\n					this.matchIndexes = {};\n					this.regexes = [];\n					this.matchAt = 1;\n					this.position = 0;\n				}\n				addRule(re, opts) {\n					opts.position = this.position++;\n					this.matchIndexes[this.matchAt] = opts;\n					this.regexes.push([opts, re]);\n					this.matchAt += countMatchGroups(re) + 1;\n				}\n				compile() {\n					if (this.regexes.length === 0) this.exec = () => null;\n					const terminators = this.regexes.map((el) => el[1]);\n					this.matcherRe = langRe(_rewriteBackreferences(terminators, { joinWith: \"|\" }), true);\n					this.lastIndex = 0;\n				}\n				/** @param {string} s */\n				exec(s) {\n					this.matcherRe.lastIndex = this.lastIndex;\n					const match = this.matcherRe.exec(s);\n					if (!match) return null;\n					const i = match.findIndex((el, i) => i > 0 && el !== void 0);\n					const matchData = this.matchIndexes[i];\n					match.splice(0, i);\n					return Object.assign(match, matchData);\n				}\n			}\n			class ResumableMultiRegex {\n				constructor() {\n					this.rules = [];\n					this.multiRegexes = [];\n					this.count = 0;\n					this.lastIndex = 0;\n					this.regexIndex = 0;\n				}\n				getMatcher(index) {\n					if (this.multiRegexes[index]) return this.multiRegexes[index];\n					const matcher = new MultiRegex();\n					this.rules.slice(index).forEach(([re, opts]) => matcher.addRule(re, opts));\n					matcher.compile();\n					this.multiRegexes[index] = matcher;\n					return matcher;\n				}\n				resumingScanAtSamePosition() {\n					return this.regexIndex !== 0;\n				}\n				considerAll() {\n					this.regexIndex = 0;\n				}\n				addRule(re, opts) {\n					this.rules.push([re, opts]);\n					if (opts.type === \"begin\") this.count++;\n				}\n				/** @param {string} s */\n				exec(s) {\n					const m = this.getMatcher(this.regexIndex);\n					m.lastIndex = this.lastIndex;\n					let result = m.exec(s);\n					if (this.resumingScanAtSamePosition()) {\n						if (result && result.index === this.lastIndex);\n						else {\n							const m2 = this.getMatcher(0);\n							m2.lastIndex = this.lastIndex + 1;\n							result = m2.exec(s);\n						}\n					}\n					if (result) {\n						this.regexIndex += result.position + 1;\n						if (this.regexIndex === this.count) this.considerAll();\n					}\n					return result;\n				}\n			}\n			/**\n			* Given a mode, builds a huge ResumableMultiRegex that can be used to walk\n			* the content and find matches.\n			*\n			* @param {CompiledMode} mode\n			* @returns {ResumableMultiRegex}\n			*/\n			function buildModeRegex(mode) {\n				const mm = new ResumableMultiRegex();\n				mode.contains.forEach((term) => mm.addRule(term.begin, {\n					rule: term,\n					type: \"begin\"\n				}));\n				if (mode.terminatorEnd) mm.addRule(mode.terminatorEnd, { type: \"end\" });\n				if (mode.illegal) mm.addRule(mode.illegal, { type: \"illegal\" });\n				return mm;\n			}\n			/** skip vs abort vs ignore\n			*\n			* @skip   - The mode is still entered and exited normally (and contains rules apply),\n			*           but all content is held and added to the parent buffer rather than being\n			*           output when the mode ends.  Mostly used with `sublanguage` to build up\n			*           a single large buffer than can be parsed by sublanguage.\n			*\n			*             - The mode begin ands ends normally.\n			*             - Content matched is added to the parent mode buffer.\n			*             - The parser cursor is moved forward normally.\n			*\n			* @abort  - A hack placeholder until we have ignore.  Aborts the mode (as if it\n			*           never matched) but DOES NOT continue to match subsequent `contains`\n			*           modes.  Abort is bad/suboptimal because it can result in modes\n			*           farther down not getting applied because an earlier rule eats the\n			*           content but then aborts.\n			*\n			*             - The mode does not begin.\n			*             - Content matched by `begin` is added to the mode buffer.\n			*             - The parser cursor is moved forward accordingly.\n			*\n			* @ignore - Ignores the mode (as if it never matched) and continues to match any\n			*           subsequent `contains` modes.  Ignore isn't technically possible with\n			*           the current parser implementation.\n			*\n			*             - The mode does not begin.\n			*             - Content matched by `begin` is ignored.\n			*             - The parser cursor is not moved forward.\n			*/\n			/**\n			* Compiles an individual mode\n			*\n			* This can raise an error if the mode contains certain detectable known logic\n			* issues.\n			* @param {Mode} mode\n			* @param {CompiledMode | null} [parent]\n			* @returns {CompiledMode | never}\n			*/\n			function compileMode(mode, parent) {\n				const cmode = mode;\n				if (mode.isCompiled) return cmode;\n				[\n					scopeClassName,\n					compileMatch,\n					MultiClass,\n					beforeMatchExt\n				].forEach((ext) => ext(mode, parent));\n				language.compilerExtensions.forEach((ext) => ext(mode, parent));\n				mode.__beforeBegin = null;\n				[\n					beginKeywords,\n					compileIllegal,\n					compileRelevance\n				].forEach((ext) => ext(mode, parent));\n				mode.isCompiled = true;\n				let keywordPattern = null;\n				if (typeof mode.keywords === \"object\" && mode.keywords.$pattern) {\n					mode.keywords = Object.assign({}, mode.keywords);\n					keywordPattern = mode.keywords.$pattern;\n					delete mode.keywords.$pattern;\n				}\n				keywordPattern = keywordPattern || /\\w+/;\n				if (mode.keywords) mode.keywords = compileKeywords(mode.keywords, language.case_insensitive);\n				cmode.keywordPatternRe = langRe(keywordPattern, true);\n				if (parent) {\n					if (!mode.begin) mode.begin = /\\B|\\b/;\n					cmode.beginRe = langRe(cmode.begin);\n					if (!mode.end && !mode.endsWithParent) mode.end = /\\B|\\b/;\n					if (mode.end) cmode.endRe = langRe(cmode.end);\n					cmode.terminatorEnd = source(cmode.end) || \"\";\n					if (mode.endsWithParent && parent.terminatorEnd) cmode.terminatorEnd += (mode.end ? \"|\" : \"\") + parent.terminatorEnd;\n				}\n				if (mode.illegal) cmode.illegalRe = langRe(mode.illegal);\n				if (!mode.contains) mode.contains = [];\n				mode.contains = [].concat(...mode.contains.map(function(c) {\n					return expandOrCloneMode(c === \"self\" ? mode : c);\n				}));\n				mode.contains.forEach(function(c) {\n					compileMode(c, cmode);\n				});\n				if (mode.starts) compileMode(mode.starts, parent);\n				cmode.matcher = buildModeRegex(cmode);\n				return cmode;\n			}\n			if (!language.compilerExtensions) language.compilerExtensions = [];\n			if (language.contains && language.contains.includes(\"self\")) throw new Error(\"ERR: contains `self` is not supported at the top-level of a language.  See documentation.\");\n			language.classNameAliases = inherit$1(language.classNameAliases || {});\n			return compileMode(language);\n		}\n		/**\n		* Determines if a mode has a dependency on it's parent or not\n		*\n		* If a mode does have a parent dependency then often we need to clone it if\n		* it's used in multiple places so that each copy points to the correct parent,\n		* where-as modes without a parent can often safely be re-used at the bottom of\n		* a mode chain.\n		*\n		* @param {Mode | null} mode\n		* @returns {boolean} - is there a dependency on the parent?\n		* */\n		function dependencyOnParent(mode) {\n			if (!mode) return false;\n			return mode.endsWithParent || dependencyOnParent(mode.starts);\n		}\n		/**\n		* Expands a mode or clones it if necessary\n		*\n		* This is necessary for modes with parental dependenceis (see notes on\n		* `dependencyOnParent`) and for nodes that have `variants` - which must then be\n		* exploded into their own individual modes at compile time.\n		*\n		* @param {Mode} mode\n		* @returns {Mode | Mode[]}\n		* */\n		function expandOrCloneMode(mode) {\n			if (mode.variants && !mode.cachedVariants) mode.cachedVariants = mode.variants.map(function(variant) {\n				return inherit$1(mode, { variants: null }, variant);\n			});\n			if (mode.cachedVariants) return mode.cachedVariants;\n			if (dependencyOnParent(mode)) return inherit$1(mode, { starts: mode.starts ? inherit$1(mode.starts) : null });\n			if (Object.isFrozen(mode)) return inherit$1(mode);\n			return mode;\n		}\n		var version = \"11.11.1\";\n		var HTMLInjectionError = class extends Error {\n			constructor(reason, html) {\n				super(reason);\n				this.name = \"HTMLInjectionError\";\n				this.html = html;\n			}\n		};\n		/**\n		@typedef {import('highlight.js').Mode} Mode\n		@typedef {import('highlight.js').CompiledMode} CompiledMode\n		@typedef {import('highlight.js').CompiledScope} CompiledScope\n		@typedef {import('highlight.js').Language} Language\n		@typedef {import('highlight.js').HLJSApi} HLJSApi\n		@typedef {import('highlight.js').HLJSPlugin} HLJSPlugin\n		@typedef {import('highlight.js').PluginEvent} PluginEvent\n		@typedef {import('highlight.js').HLJSOptions} HLJSOptions\n		@typedef {import('highlight.js').LanguageFn} LanguageFn\n		@typedef {import('highlight.js').HighlightedHTMLElement} HighlightedHTMLElement\n		@typedef {import('highlight.js').BeforeHighlightContext} BeforeHighlightContext\n		@typedef {import('highlight.js/private').MatchType} MatchType\n		@typedef {import('highlight.js/private').KeywordData} KeywordData\n		@typedef {import('highlight.js/private').EnhancedMatch} EnhancedMatch\n		@typedef {import('highlight.js/private').AnnotatedError} AnnotatedError\n		@typedef {import('highlight.js').AutoHighlightResult} AutoHighlightResult\n		@typedef {import('highlight.js').HighlightOptions} HighlightOptions\n		@typedef {import('highlight.js').HighlightResult} HighlightResult\n		*/\n		const escape = escapeHTML;\n		const inherit = inherit$1;\n		const NO_MATCH = Symbol(\"nomatch\");\n		const MAX_KEYWORD_HITS = 7;\n		/**\n		* @param {any} hljs - object that is extended (legacy)\n		* @returns {HLJSApi}\n		*/\n		const HLJS = function(hljs) {\n			/** @type {Record<string, Language>} */\n			const languages = Object.create(null);\n			/** @type {Record<string, string>} */\n			const aliases = Object.create(null);\n			/** @type {HLJSPlugin[]} */\n			const plugins = [];\n			let SAFE_MODE = true;\n			const LANGUAGE_NOT_FOUND = \"Could not find the language '{}', did you forget to load/include a language module?\";\n			/** @type {Language} */\n			const PLAINTEXT_LANGUAGE = {\n				disableAutodetect: true,\n				name: \"Plain text\",\n				contains: []\n			};\n			/** @type HLJSOptions */\n			let options = {\n				ignoreUnescapedHTML: false,\n				throwUnescapedHTML: false,\n				noHighlightRe: /^(no-?highlight)$/i,\n				languageDetectRe: /\\blang(?:uage)?-([\\w-]+)\\b/i,\n				classPrefix: \"hljs-\",\n				cssSelector: \"pre code\",\n				languages: null,\n				__emitter: TokenTreeEmitter\n			};\n			/**\n			* Tests a language name to see if highlighting should be skipped\n			* @param {string} languageName\n			*/\n			function shouldNotHighlight(languageName) {\n				return options.noHighlightRe.test(languageName);\n			}\n			/**\n			* @param {HighlightedHTMLElement} block - the HTML element to determine language for\n			*/\n			function blockLanguage(block) {\n				let classes = block.className + \" \";\n				classes += block.parentNode ? block.parentNode.className : \"\";\n				const match = options.languageDetectRe.exec(classes);\n				if (match) {\n					const language = getLanguage(match[1]);\n					if (!language) {\n						warn(LANGUAGE_NOT_FOUND.replace(\"{}\", match[1]));\n						warn(\"Falling back to no-highlight mode for this block.\", block);\n					}\n					return language ? match[1] : \"no-highlight\";\n				}\n				return classes.split(/\\s+/).find((_class) => shouldNotHighlight(_class) || getLanguage(_class));\n			}\n			/**\n			* Core highlighting function.\n			*\n			* OLD API\n			* highlight(lang, code, ignoreIllegals, continuation)\n			*\n			* NEW API\n			* highlight(code, {lang, ignoreIllegals})\n			*\n			* @param {string} codeOrLanguageName - the language to use for highlighting\n			* @param {string | HighlightOptions} optionsOrCode - the code to highlight\n			* @param {boolean} [ignoreIllegals] - whether to ignore illegal matches, default is to bail\n			*\n			* @returns {HighlightResult} Result - an object that represents the result\n			* @property {string} language - the language name\n			* @property {number} relevance - the relevance score\n			* @property {string} value - the highlighted HTML code\n			* @property {string} code - the original raw code\n			* @property {CompiledMode} top - top of the current mode stack\n			* @property {boolean} illegal - indicates whether any illegal matches were found\n			*/\n			function highlight(codeOrLanguageName, optionsOrCode, ignoreIllegals) {\n				let code = \"\";\n				let languageName = \"\";\n				if (typeof optionsOrCode === \"object\") {\n					code = codeOrLanguageName;\n					ignoreIllegals = optionsOrCode.ignoreIllegals;\n					languageName = optionsOrCode.language;\n				} else {\n					deprecated(\"10.7.0\", \"highlight(lang, code, ...args) has been deprecated.\");\n					deprecated(\"10.7.0\", \"Please use highlight(code, options) instead.\\nhttps://github.com/highlightjs/highlight.js/issues/2277\");\n					languageName = codeOrLanguageName;\n					code = optionsOrCode;\n				}\n				if (ignoreIllegals === void 0) ignoreIllegals = true;\n				/** @type {BeforeHighlightContext} */\n				const context = {\n					code,\n					language: languageName\n				};\n				fire(\"before:highlight\", context);\n				const result = context.result ? context.result : _highlight(context.language, context.code, ignoreIllegals);\n				result.code = context.code;\n				fire(\"after:highlight\", result);\n				return result;\n			}\n			/**\n			* private highlight that's used internally and does not fire callbacks\n			*\n			* @param {string} languageName - the language to use for highlighting\n			* @param {string} codeToHighlight - the code to highlight\n			* @param {boolean?} [ignoreIllegals] - whether to ignore illegal matches, default is to bail\n			* @param {CompiledMode?} [continuation] - current continuation mode, if any\n			* @returns {HighlightResult} - result of the highlight operation\n			*/\n			function _highlight(languageName, codeToHighlight, ignoreIllegals, continuation) {\n				const keywordHits = Object.create(null);\n				/**\n				* Return keyword data if a match is a keyword\n				* @param {CompiledMode} mode - current mode\n				* @param {string} matchText - the textual match\n				* @returns {KeywordData | false}\n				*/\n				function keywordData(mode, matchText) {\n					return mode.keywords[matchText];\n				}\n				function processKeywords() {\n					if (!top.keywords) {\n						emitter.addText(modeBuffer);\n						return;\n					}\n					let lastIndex = 0;\n					top.keywordPatternRe.lastIndex = 0;\n					let match = top.keywordPatternRe.exec(modeBuffer);\n					let buf = \"\";\n					while (match) {\n						buf += modeBuffer.substring(lastIndex, match.index);\n						const word = language.case_insensitive ? match[0].toLowerCase() : match[0];\n						const data = keywordData(top, word);\n						if (data) {\n							const [kind, keywordRelevance] = data;\n							emitter.addText(buf);\n							buf = \"\";\n							keywordHits[word] = (keywordHits[word] || 0) + 1;\n							if (keywordHits[word] <= MAX_KEYWORD_HITS) relevance += keywordRelevance;\n							if (kind.startsWith(\"_\")) buf += match[0];\n							else {\n								const cssClass = language.classNameAliases[kind] || kind;\n								emitKeyword(match[0], cssClass);\n							}\n						} else buf += match[0];\n						lastIndex = top.keywordPatternRe.lastIndex;\n						match = top.keywordPatternRe.exec(modeBuffer);\n					}\n					buf += modeBuffer.substring(lastIndex);\n					emitter.addText(buf);\n				}\n				function processSubLanguage() {\n					if (modeBuffer === \"\") return;\n					/** @type HighlightResult */\n					let result = null;\n					if (typeof top.subLanguage === \"string\") {\n						if (!languages[top.subLanguage]) {\n							emitter.addText(modeBuffer);\n							return;\n						}\n						result = _highlight(top.subLanguage, modeBuffer, true, continuations[top.subLanguage]);\n						continuations[top.subLanguage] = result._top;\n					} else result = highlightAuto(modeBuffer, top.subLanguage.length ? top.subLanguage : null);\n					if (top.relevance > 0) relevance += result.relevance;\n					emitter.__addSublanguage(result._emitter, result.language);\n				}\n				function processBuffer() {\n					if (top.subLanguage != null) processSubLanguage();\n					else processKeywords();\n					modeBuffer = \"\";\n				}\n				/**\n				* @param {string} text\n				* @param {string} scope\n				*/\n				function emitKeyword(keyword, scope) {\n					if (keyword === \"\") return;\n					emitter.startScope(scope);\n					emitter.addText(keyword);\n					emitter.endScope();\n				}\n				/**\n				* @param {CompiledScope} scope\n				* @param {RegExpMatchArray} match\n				*/\n				function emitMultiClass(scope, match) {\n					let i = 1;\n					const max = match.length - 1;\n					while (i <= max) {\n						if (!scope._emit[i]) {\n							i++;\n							continue;\n						}\n						const klass = language.classNameAliases[scope[i]] || scope[i];\n						const text = match[i];\n						if (klass) emitKeyword(text, klass);\n						else {\n							modeBuffer = text;\n							processKeywords();\n							modeBuffer = \"\";\n						}\n						i++;\n					}\n				}\n				/**\n				* @param {CompiledMode} mode - new mode to start\n				* @param {RegExpMatchArray} match\n				*/\n				function startNewMode(mode, match) {\n					if (mode.scope && typeof mode.scope === \"string\") emitter.openNode(language.classNameAliases[mode.scope] || mode.scope);\n					if (mode.beginScope) {\n						if (mode.beginScope._wrap) {\n							emitKeyword(modeBuffer, language.classNameAliases[mode.beginScope._wrap] || mode.beginScope._wrap);\n							modeBuffer = \"\";\n						} else if (mode.beginScope._multi) {\n							emitMultiClass(mode.beginScope, match);\n							modeBuffer = \"\";\n						}\n					}\n					top = Object.create(mode, { parent: { value: top } });\n					return top;\n				}\n				/**\n				* @param {CompiledMode } mode - the mode to potentially end\n				* @param {RegExpMatchArray} match - the latest match\n				* @param {string} matchPlusRemainder - match plus remainder of content\n				* @returns {CompiledMode | void} - the next mode, or if void continue on in current mode\n				*/\n				function endOfMode(mode, match, matchPlusRemainder) {\n					let matched = startsWith(mode.endRe, matchPlusRemainder);\n					if (matched) {\n						if (mode[\"on:end\"]) {\n							const resp = new Response(mode);\n							mode[\"on:end\"](match, resp);\n							if (resp.isMatchIgnored) matched = false;\n						}\n						if (matched) {\n							while (mode.endsParent && mode.parent) mode = mode.parent;\n							return mode;\n						}\n					}\n					if (mode.endsWithParent) return endOfMode(mode.parent, match, matchPlusRemainder);\n				}\n				/**\n				* Handle matching but then ignoring a sequence of text\n				*\n				* @param {string} lexeme - string containing full match text\n				*/\n				function doIgnore(lexeme) {\n					if (top.matcher.regexIndex === 0) {\n						modeBuffer += lexeme[0];\n						return 1;\n					} else {\n						resumeScanAtSamePosition = true;\n						return 0;\n					}\n				}\n				/**\n				* Handle the start of a new potential mode match\n				*\n				* @param {EnhancedMatch} match - the current match\n				* @returns {number} how far to advance the parse cursor\n				*/\n				function doBeginMatch(match) {\n					const lexeme = match[0];\n					const newMode = match.rule;\n					const resp = new Response(newMode);\n					const beforeCallbacks = [newMode.__beforeBegin, newMode[\"on:begin\"]];\n					for (const cb of beforeCallbacks) {\n						if (!cb) continue;\n						cb(match, resp);\n						if (resp.isMatchIgnored) return doIgnore(lexeme);\n					}\n					if (newMode.skip) modeBuffer += lexeme;\n					else {\n						if (newMode.excludeBegin) modeBuffer += lexeme;\n						processBuffer();\n						if (!newMode.returnBegin && !newMode.excludeBegin) modeBuffer = lexeme;\n					}\n					startNewMode(newMode, match);\n					return newMode.returnBegin ? 0 : lexeme.length;\n				}\n				/**\n				* Handle the potential end of mode\n				*\n				* @param {RegExpMatchArray} match - the current match\n				*/\n				function doEndMatch(match) {\n					const lexeme = match[0];\n					const matchPlusRemainder = codeToHighlight.substring(match.index);\n					const endMode = endOfMode(top, match, matchPlusRemainder);\n					if (!endMode) return NO_MATCH;\n					const origin = top;\n					if (top.endScope && top.endScope._wrap) {\n						processBuffer();\n						emitKeyword(lexeme, top.endScope._wrap);\n					} else if (top.endScope && top.endScope._multi) {\n						processBuffer();\n						emitMultiClass(top.endScope, match);\n					} else if (origin.skip) modeBuffer += lexeme;\n					else {\n						if (!(origin.returnEnd || origin.excludeEnd)) modeBuffer += lexeme;\n						processBuffer();\n						if (origin.excludeEnd) modeBuffer = lexeme;\n					}\n					do {\n						if (top.scope) emitter.closeNode();\n						if (!top.skip && !top.subLanguage) relevance += top.relevance;\n						top = top.parent;\n					} while (top !== endMode.parent);\n					if (endMode.starts) startNewMode(endMode.starts, match);\n					return origin.returnEnd ? 0 : lexeme.length;\n				}\n				function processContinuations() {\n					const list = [];\n					for (let current = top; current !== language; current = current.parent) if (current.scope) list.unshift(current.scope);\n					list.forEach((item) => emitter.openNode(item));\n				}\n				/** @type {{type?: MatchType, index?: number, rule?: Mode}}} */\n				let lastMatch = {};\n				/**\n				*  Process an individual match\n				*\n				* @param {string} textBeforeMatch - text preceding the match (since the last match)\n				* @param {EnhancedMatch} [match] - the match itself\n				*/\n				function processLexeme(textBeforeMatch, match) {\n					const lexeme = match && match[0];\n					modeBuffer += textBeforeMatch;\n					if (lexeme == null) {\n						processBuffer();\n						return 0;\n					}\n					if (lastMatch.type === \"begin\" && match.type === \"end\" && lastMatch.index === match.index && lexeme === \"\") {\n						modeBuffer += codeToHighlight.slice(match.index, match.index + 1);\n						if (!SAFE_MODE) {\n							/** @type {AnnotatedError} */\n							const err = /* @__PURE__ */ new Error(`0 width match regex (${languageName})`);\n							err.languageName = languageName;\n							err.badRule = lastMatch.rule;\n							throw err;\n						}\n						return 1;\n					}\n					lastMatch = match;\n					if (match.type === \"begin\") return doBeginMatch(match);\n					else if (match.type === \"illegal\" && !ignoreIllegals) {\n						/** @type {AnnotatedError} */\n						const err = /* @__PURE__ */ new Error(\"Illegal lexeme \\\"\" + lexeme + \"\\\" for mode \\\"\" + (top.scope || \"<unnamed>\") + \"\\\"\");\n						err.mode = top;\n						throw err;\n					} else if (match.type === \"end\") {\n						const processed = doEndMatch(match);\n						if (processed !== NO_MATCH) return processed;\n					}\n					if (match.type === \"illegal\" && lexeme === \"\") {\n						modeBuffer += \"\\n\";\n						return 1;\n					}\n					if (iterations > 1e5 && iterations > match.index * 3) throw /* @__PURE__ */ new Error(\"potential infinite loop, way more iterations than matches\");\n					modeBuffer += lexeme;\n					return lexeme.length;\n				}\n				const language = getLanguage(languageName);\n				if (!language) {\n					error(LANGUAGE_NOT_FOUND.replace(\"{}\", languageName));\n					throw new Error(\"Unknown language: \\\"\" + languageName + \"\\\"\");\n				}\n				const md = compileLanguage(language);\n				let result = \"\";\n				/** @type {CompiledMode} */\n				let top = continuation || md;\n				/** @type Record<string,CompiledMode> */\n				const continuations = {};\n				const emitter = new options.__emitter(options);\n				processContinuations();\n				let modeBuffer = \"\";\n				let relevance = 0;\n				let index = 0;\n				let iterations = 0;\n				let resumeScanAtSamePosition = false;\n				try {\n					if (!language.__emitTokens) {\n						top.matcher.considerAll();\n						for (;;) {\n							iterations++;\n							if (resumeScanAtSamePosition) resumeScanAtSamePosition = false;\n							else top.matcher.considerAll();\n							top.matcher.lastIndex = index;\n							const match = top.matcher.exec(codeToHighlight);\n							if (!match) break;\n							const processedCount = processLexeme(codeToHighlight.substring(index, match.index), match);\n							index = match.index + processedCount;\n						}\n						processLexeme(codeToHighlight.substring(index));\n					} else language.__emitTokens(codeToHighlight, emitter);\n					emitter.finalize();\n					result = emitter.toHTML();\n					return {\n						language: languageName,\n						value: result,\n						relevance,\n						illegal: false,\n						_emitter: emitter,\n						_top: top\n					};\n				} catch (err) {\n					if (err.message && err.message.includes(\"Illegal\")) return {\n						language: languageName,\n						value: escape(codeToHighlight),\n						illegal: true,\n						relevance: 0,\n						_illegalBy: {\n							message: err.message,\n							index,\n							context: codeToHighlight.slice(index - 100, index + 100),\n							mode: err.mode,\n							resultSoFar: result\n						},\n						_emitter: emitter\n					};\n					else if (SAFE_MODE) return {\n						language: languageName,\n						value: escape(codeToHighlight),\n						illegal: false,\n						relevance: 0,\n						errorRaised: err,\n						_emitter: emitter,\n						_top: top\n					};\n					else throw err;\n				}\n			}\n			/**\n			* returns a valid highlight result, without actually doing any actual work,\n			* auto highlight starts with this and it's possible for small snippets that\n			* auto-detection may not find a better match\n			* @param {string} code\n			* @returns {HighlightResult}\n			*/\n			function justTextHighlightResult(code) {\n				const result = {\n					value: escape(code),\n					illegal: false,\n					relevance: 0,\n					_top: PLAINTEXT_LANGUAGE,\n					_emitter: new options.__emitter(options)\n				};\n				result._emitter.addText(code);\n				return result;\n			}\n			/**\n			Highlighting with language detection. Accepts a string with the code to\n			highlight. Returns an object with the following properties:\n			\n			- language (detected language)\n			- relevance (int)\n			- value (an HTML string with highlighting markup)\n			- secondBest (object with the same structure for second-best heuristically\n			detected language, may be absent)\n			\n			@param {string} code\n			@param {Array<string>} [languageSubset]\n			@returns {AutoHighlightResult}\n			*/\n			function highlightAuto(code, languageSubset) {\n				languageSubset = languageSubset || options.languages || Object.keys(languages);\n				const plaintext = justTextHighlightResult(code);\n				const results = languageSubset.filter(getLanguage).filter(autoDetection).map((name) => _highlight(name, code, false));\n				results.unshift(plaintext);\n				const [best, secondBest] = results.sort((a, b) => {\n					if (a.relevance !== b.relevance) return b.relevance - a.relevance;\n					if (a.language && b.language) {\n						if (getLanguage(a.language).supersetOf === b.language) return 1;\n						else if (getLanguage(b.language).supersetOf === a.language) return -1;\n					}\n					return 0;\n				});\n				/** @type {AutoHighlightResult} */\n				const result = best;\n				result.secondBest = secondBest;\n				return result;\n			}\n			/**\n			* Builds new class name for block given the language name\n			*\n			* @param {HTMLElement} element\n			* @param {string} [currentLang]\n			* @param {string} [resultLang]\n			*/\n			function updateClassName(element, currentLang, resultLang) {\n				const language = currentLang && aliases[currentLang] || resultLang;\n				element.classList.add(\"hljs\");\n				element.classList.add(`language-${language}`);\n			}\n			/**\n			* Applies highlighting to a DOM node containing code.\n			*\n			* @param {HighlightedHTMLElement} element - the HTML element to highlight\n			*/\n			function highlightElement(element) {\n				/** @type HTMLElement */\n				let node = null;\n				const language = blockLanguage(element);\n				if (shouldNotHighlight(language)) return;\n				fire(\"before:highlightElement\", {\n					el: element,\n					language\n				});\n				if (element.dataset.highlighted) {\n					console.log(\"Element previously highlighted. To highlight again, first unset `dataset.highlighted`.\", element);\n					return;\n				}\n				if (element.children.length > 0) {\n					if (!options.ignoreUnescapedHTML) {\n						console.warn(\"One of your code blocks includes unescaped HTML. This is a potentially serious security risk.\");\n						console.warn(\"https://github.com/highlightjs/highlight.js/wiki/security\");\n						console.warn(\"The element with unescaped HTML:\");\n						console.warn(element);\n					}\n					if (options.throwUnescapedHTML) throw new HTMLInjectionError(\"One of your code blocks includes unescaped HTML.\", element.innerHTML);\n				}\n				node = element;\n				const text = node.textContent;\n				const result = language ? highlight(text, {\n					language,\n					ignoreIllegals: true\n				}) : highlightAuto(text);\n				element.innerHTML = result.value;\n				element.dataset.highlighted = \"yes\";\n				updateClassName(element, language, result.language);\n				element.result = {\n					language: result.language,\n					re: result.relevance,\n					relevance: result.relevance\n				};\n				if (result.secondBest) element.secondBest = {\n					language: result.secondBest.language,\n					relevance: result.secondBest.relevance\n				};\n				fire(\"after:highlightElement\", {\n					el: element,\n					result,\n					text\n				});\n			}\n			/**\n			* Updates highlight.js global options with the passed options\n			*\n			* @param {Partial<HLJSOptions>} userOptions\n			*/\n			function configure(userOptions) {\n				options = inherit(options, userOptions);\n			}\n			const initHighlighting = () => {\n				highlightAll();\n				deprecated(\"10.6.0\", \"initHighlighting() deprecated.  Use highlightAll() now.\");\n			};\n			function initHighlightingOnLoad() {\n				highlightAll();\n				deprecated(\"10.6.0\", \"initHighlightingOnLoad() deprecated.  Use highlightAll() now.\");\n			}\n			let wantsHighlight = false;\n			/**\n			* auto-highlights all pre>code elements on the page\n			*/\n			function highlightAll() {\n				function boot() {\n					highlightAll();\n				}\n				if (document.readyState === \"loading\") {\n					if (!wantsHighlight) window.addEventListener(\"DOMContentLoaded\", boot, false);\n					wantsHighlight = true;\n					return;\n				}\n				document.querySelectorAll(options.cssSelector).forEach(highlightElement);\n			}\n			/**\n			* Register a language grammar module\n			*\n			* @param {string} languageName\n			* @param {LanguageFn} languageDefinition\n			*/\n			function registerLanguage(languageName, languageDefinition) {\n				let lang = null;\n				try {\n					lang = languageDefinition(hljs);\n				} catch (error$1) {\n					error(\"Language definition for '{}' could not be registered.\".replace(\"{}\", languageName));\n					if (!SAFE_MODE) throw error$1;\n					else error(error$1);\n					lang = PLAINTEXT_LANGUAGE;\n				}\n				if (!lang.name) lang.name = languageName;\n				languages[languageName] = lang;\n				lang.rawDefinition = languageDefinition.bind(null, hljs);\n				if (lang.aliases) registerAliases(lang.aliases, { languageName });\n			}\n			/**\n			* Remove a language grammar module\n			*\n			* @param {string} languageName\n			*/\n			function unregisterLanguage(languageName) {\n				delete languages[languageName];\n				for (const alias of Object.keys(aliases)) if (aliases[alias] === languageName) delete aliases[alias];\n			}\n			/**\n			* @returns {string[]} List of language internal names\n			*/\n			function listLanguages() {\n				return Object.keys(languages);\n			}\n			/**\n			* @param {string} name - name of the language to retrieve\n			* @returns {Language | undefined}\n			*/\n			function getLanguage(name) {\n				name = (name || \"\").toLowerCase();\n				return languages[name] || languages[aliases[name]];\n			}\n			/**\n			*\n			* @param {string|string[]} aliasList - single alias or list of aliases\n			* @param {{languageName: string}} opts\n			*/\n			function registerAliases(aliasList, { languageName }) {\n				if (typeof aliasList === \"string\") aliasList = [aliasList];\n				aliasList.forEach((alias) => {\n					aliases[alias.toLowerCase()] = languageName;\n				});\n			}\n			/**\n			* Determines if a given language has auto-detection enabled\n			* @param {string} name - name of the language\n			*/\n			function autoDetection(name) {\n				const lang = getLanguage(name);\n				return lang && !lang.disableAutodetect;\n			}\n			/**\n			* Upgrades the old highlightBlock plugins to the new\n			* highlightElement API\n			* @param {HLJSPlugin} plugin\n			*/\n			function upgradePluginAPI(plugin) {\n				if (plugin[\"before:highlightBlock\"] && !plugin[\"before:highlightElement\"]) plugin[\"before:highlightElement\"] = (data) => {\n					plugin[\"before:highlightBlock\"](Object.assign({ block: data.el }, data));\n				};\n				if (plugin[\"after:highlightBlock\"] && !plugin[\"after:highlightElement\"]) plugin[\"after:highlightElement\"] = (data) => {\n					plugin[\"after:highlightBlock\"](Object.assign({ block: data.el }, data));\n				};\n			}\n			/**\n			* @param {HLJSPlugin} plugin\n			*/\n			function addPlugin(plugin) {\n				upgradePluginAPI(plugin);\n				plugins.push(plugin);\n			}\n			/**\n			* @param {HLJSPlugin} plugin\n			*/\n			function removePlugin(plugin) {\n				const index = plugins.indexOf(plugin);\n				if (index !== -1) plugins.splice(index, 1);\n			}\n			/**\n			*\n			* @param {PluginEvent} event\n			* @param {any} args\n			*/\n			function fire(event, args) {\n				const cb = event;\n				plugins.forEach(function(plugin) {\n					if (plugin[cb]) plugin[cb](args);\n				});\n			}\n			/**\n			* DEPRECATED\n			* @param {HighlightedHTMLElement} el\n			*/\n			function deprecateHighlightBlock(el) {\n				deprecated(\"10.7.0\", \"highlightBlock will be removed entirely in v12.0\");\n				deprecated(\"10.7.0\", \"Please use highlightElement now.\");\n				return highlightElement(el);\n			}\n			Object.assign(hljs, {\n				highlight,\n				highlightAuto,\n				highlightAll,\n				highlightElement,\n				highlightBlock: deprecateHighlightBlock,\n				configure,\n				initHighlighting,\n				initHighlightingOnLoad,\n				registerLanguage,\n				unregisterLanguage,\n				listLanguages,\n				getLanguage,\n				registerAliases,\n				autoDetection,\n				inherit,\n				addPlugin,\n				removePlugin\n			});\n			hljs.debugMode = function() {\n				SAFE_MODE = false;\n			};\n			hljs.safeMode = function() {\n				SAFE_MODE = true;\n			};\n			hljs.versionString = version;\n			hljs.regex = {\n				concat,\n				lookahead,\n				either,\n				optional,\n				anyNumberOfTimes\n			};\n			for (const key in MODES) if (typeof MODES[key] === \"object\") deepFreeze(MODES[key]);\n			Object.assign(hljs, MODES);\n			return hljs;\n		};\n		const highlight = HLJS({});\n		highlight.newInstance = () => HLJS({});\n		module.exports = highlight;\n		highlight.HighlightJS = highlight;\n		highlight.default = highlight;\n	})))())).default;\n	// node_modules/highlight.js/es/languages/javascript.js\n	const IDENT_RE$2 = \"[A-Za-z$_][0-9A-Za-z$_]*\";\n	const KEYWORDS$2 = [\n		\"as\",\n		\"in\",\n		\"of\",\n		\"if\",\n		\"for\",\n		\"while\",\n		\"finally\",\n		\"var\",\n		\"new\",\n		\"function\",\n		\"do\",\n		\"return\",\n		\"void\",\n		\"else\",\n		\"break\",\n		\"catch\",\n		\"instanceof\",\n		\"with\",\n		\"throw\",\n		\"case\",\n		\"default\",\n		\"try\",\n		\"switch\",\n		\"continue\",\n		\"typeof\",\n		\"delete\",\n		\"let\",\n		\"yield\",\n		\"const\",\n		\"class\",\n		\"debugger\",\n		\"async\",\n		\"await\",\n		\"static\",\n		\"import\",\n		\"from\",\n		\"export\",\n		\"extends\",\n		\"using\"\n	];\n	const LITERALS$1 = [\n		\"true\",\n		\"false\",\n		\"null\",\n		\"undefined\",\n		\"NaN\",\n		\"Infinity\"\n	];\n	const TYPES$1 = [\n		\"Object\",\n		\"Function\",\n		\"Boolean\",\n		\"Symbol\",\n		\"Math\",\n		\"Date\",\n		\"Number\",\n		\"BigInt\",\n		\"String\",\n		\"RegExp\",\n		\"Array\",\n		\"Float32Array\",\n		\"Float64Array\",\n		\"Int8Array\",\n		\"Uint8Array\",\n		\"Uint8ClampedArray\",\n		\"Int16Array\",\n		\"Int32Array\",\n		\"Uint16Array\",\n		\"Uint32Array\",\n		\"BigInt64Array\",\n		\"BigUint64Array\",\n		\"Set\",\n		\"Map\",\n		\"WeakSet\",\n		\"WeakMap\",\n		\"ArrayBuffer\",\n		\"SharedArrayBuffer\",\n		\"Atomics\",\n		\"DataView\",\n		\"JSON\",\n		\"Promise\",\n		\"Generator\",\n		\"GeneratorFunction\",\n		\"AsyncFunction\",\n		\"Reflect\",\n		\"Proxy\",\n		\"Intl\",\n		\"WebAssembly\"\n	];\n	const ERROR_TYPES$1 = [\n		\"Error\",\n		\"EvalError\",\n		\"InternalError\",\n		\"RangeError\",\n		\"ReferenceError\",\n		\"SyntaxError\",\n		\"TypeError\",\n		\"URIError\"\n	];\n	const BUILT_IN_GLOBALS$1 = [\n		\"setInterval\",\n		\"setTimeout\",\n		\"clearInterval\",\n		\"clearTimeout\",\n		\"require\",\n		\"exports\",\n		\"eval\",\n		\"isFinite\",\n		\"isNaN\",\n		\"parseFloat\",\n		\"parseInt\",\n		\"decodeURI\",\n		\"decodeURIComponent\",\n		\"encodeURI\",\n		\"encodeURIComponent\",\n		\"escape\",\n		\"unescape\"\n	];\n	const BUILT_IN_VARIABLES$1 = [\n		\"arguments\",\n		\"this\",\n		\"super\",\n		\"console\",\n		\"window\",\n		\"document\",\n		\"localStorage\",\n		\"sessionStorage\",\n		\"module\",\n		\"global\"\n	];\n	const BUILT_INS$1 = [].concat(BUILT_IN_GLOBALS$1, TYPES$1, ERROR_TYPES$1);\n	/** @type LanguageFn */\n	function javascript$1(hljs) {\n		const regex = hljs.regex;\n		/**\n		* Takes a string like \"<Booger\" and checks to see\n		* if we can find a matching \"</Booger\" later in the\n		* content.\n		* @param {RegExpMatchArray} match\n		* @param {{after:number}} param1\n		*/\n		const hasClosingTag = (match, { after }) => {\n			const tag = \"</\" + match[0].slice(1);\n			return match.input.indexOf(tag, after) !== -1;\n		};\n		const IDENT_RE$1 = IDENT_RE$2;\n		const FRAGMENT = {\n			begin: \"<>\",\n			end: \"</>\"\n		};\n		const XML_SELF_CLOSING = /<[A-Za-z0-9\\\\._:-]+\\s*\\/>/;\n		const XML_TAG = {\n			begin: /<[A-Za-z0-9\\\\._:-]+/,\n			end: /\\/[A-Za-z0-9\\\\._:-]+>|\\/>/,\n			/**\n			* @param {RegExpMatchArray} match\n			* @param {CallbackResponse} response\n			*/\n			isTrulyOpeningTag: (match, response) => {\n				const afterMatchIndex = match[0].length + match.index;\n				const nextChar = match.input[afterMatchIndex];\n				if (nextChar === \"<\" || nextChar === \",\") {\n					response.ignoreMatch();\n					return;\n				}\n				if (nextChar === \">\") {\n					if (!hasClosingTag(match, { after: afterMatchIndex })) response.ignoreMatch();\n				}\n				let m;\n				const afterMatch = match.input.substring(afterMatchIndex);\n				if (m = afterMatch.match(/^\\s*=/)) {\n					response.ignoreMatch();\n					return;\n				}\n				if (m = afterMatch.match(/^\\s+extends\\s+/)) {\n					if (m.index === 0) {\n						response.ignoreMatch();\n						return;\n					}\n				}\n			}\n		};\n		const KEYWORDS$1 = {\n			$pattern: IDENT_RE$2,\n			keyword: KEYWORDS$2,\n			literal: LITERALS$1,\n			built_in: BUILT_INS$1,\n			\"variable.language\": BUILT_IN_VARIABLES$1\n		};\n		const decimalDigits = \"[0-9](_?[0-9])*\";\n		const frac = `\\\\.(${decimalDigits})`;\n		const decimalInteger = `0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*`;\n		const NUMBER = {\n			className: \"number\",\n			variants: [\n				{ begin: `(\\\\b(${decimalInteger})((${frac})|\\\\.)?|(${frac}))[eE][+-]?(${decimalDigits})\\\\b` },\n				{ begin: `\\\\b(${decimalInteger})\\\\b((${frac})\\\\b|\\\\.)?|(${frac})\\\\b` },\n				{ begin: `\\\\b(0|[1-9](_?[0-9])*)n\\\\b` },\n				{ begin: \"\\\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\\\b\" },\n				{ begin: \"\\\\b0[bB][0-1](_?[0-1])*n?\\\\b\" },\n				{ begin: \"\\\\b0[oO][0-7](_?[0-7])*n?\\\\b\" },\n				{ begin: \"\\\\b0[0-7]+n?\\\\b\" }\n			],\n			relevance: 0\n		};\n		const SUBST = {\n			className: \"subst\",\n			begin: \"\\\\$\\\\{\",\n			end: \"\\\\}\",\n			keywords: KEYWORDS$1,\n			contains: []\n		};\n		const HTML_TEMPLATE = {\n			begin: \".?html`\",\n			end: \"\",\n			starts: {\n				end: \"`\",\n				returnEnd: false,\n				contains: [hljs.BACKSLASH_ESCAPE, SUBST],\n				subLanguage: \"xml\"\n			}\n		};\n		const CSS_TEMPLATE = {\n			begin: \".?css`\",\n			end: \"\",\n			starts: {\n				end: \"`\",\n				returnEnd: false,\n				contains: [hljs.BACKSLASH_ESCAPE, SUBST],\n				subLanguage: \"css\"\n			}\n		};\n		const GRAPHQL_TEMPLATE = {\n			begin: \".?gql`\",\n			end: \"\",\n			starts: {\n				end: \"`\",\n				returnEnd: false,\n				contains: [hljs.BACKSLASH_ESCAPE, SUBST],\n				subLanguage: \"graphql\"\n			}\n		};\n		const TEMPLATE_STRING = {\n			className: \"string\",\n			begin: \"`\",\n			end: \"`\",\n			contains: [hljs.BACKSLASH_ESCAPE, SUBST]\n		};\n		const COMMENT = {\n			className: \"comment\",\n			variants: [\n				hljs.COMMENT(/\\/\\*\\*(?!\\/)/, \"\\\\*/\", {\n					relevance: 0,\n					contains: [{\n						begin: \"(?=@[A-Za-z]+)\",\n						relevance: 0,\n						contains: [\n							{\n								className: \"doctag\",\n								begin: \"@[A-Za-z]+\"\n							},\n							{\n								className: \"type\",\n								begin: \"\\\\{\",\n								end: \"\\\\}\",\n								excludeEnd: true,\n								excludeBegin: true,\n								relevance: 0\n							},\n							{\n								className: \"variable\",\n								begin: IDENT_RE$1 + \"(?=\\\\s*(-)|$)\",\n								endsParent: true,\n								relevance: 0\n							},\n							{\n								begin: /(?=[^\\n])\\s/,\n								relevance: 0\n							}\n						]\n					}]\n				}),\n				hljs.C_BLOCK_COMMENT_MODE,\n				hljs.C_LINE_COMMENT_MODE\n			]\n		};\n		const SUBST_INTERNALS = [\n			hljs.APOS_STRING_MODE,\n			hljs.QUOTE_STRING_MODE,\n			HTML_TEMPLATE,\n			CSS_TEMPLATE,\n			GRAPHQL_TEMPLATE,\n			TEMPLATE_STRING,\n			{ match: /\\$\\d+/ },\n			NUMBER\n		];\n		SUBST.contains = SUBST_INTERNALS.concat({\n			begin: /\\{/,\n			end: /\\}/,\n			keywords: KEYWORDS$1,\n			contains: [\"self\"].concat(SUBST_INTERNALS)\n		});\n		const SUBST_AND_COMMENTS = [].concat(COMMENT, SUBST.contains);\n		const PARAMS_CONTAINS = SUBST_AND_COMMENTS.concat([{\n			begin: /(\\s*)\\(/,\n			end: /\\)/,\n			keywords: KEYWORDS$1,\n			contains: [\"self\"].concat(SUBST_AND_COMMENTS)\n		}]);\n		const PARAMS = {\n			className: \"params\",\n			begin: /(\\s*)\\(/,\n			end: /\\)/,\n			excludeBegin: true,\n			excludeEnd: true,\n			keywords: KEYWORDS$1,\n			contains: PARAMS_CONTAINS\n		};\n		const CLASS_OR_EXTENDS = { variants: [{\n			match: [\n				/class/,\n				/\\s+/,\n				IDENT_RE$1,\n				/\\s+/,\n				/extends/,\n				/\\s+/,\n				regex.concat(IDENT_RE$1, \"(\", regex.concat(/\\./, IDENT_RE$1), \")*\")\n			],\n			scope: {\n				1: \"keyword\",\n				3: \"title.class\",\n				5: \"keyword\",\n				7: \"title.class.inherited\"\n			}\n		}, {\n			match: [\n				/class/,\n				/\\s+/,\n				IDENT_RE$1\n			],\n			scope: {\n				1: \"keyword\",\n				3: \"title.class\"\n			}\n		}] };\n		const CLASS_REFERENCE = {\n			relevance: 0,\n			match: regex.either(/\\bJSON/, /\\b[A-Z][a-z]+([A-Z][a-z]*|\\d)*/, /\\b[A-Z]{2,}([A-Z][a-z]+|\\d)+([A-Z][a-z]*)*/, /\\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\\d)*([A-Z][a-z]*)*/),\n			className: \"title.class\",\n			keywords: { _: [...TYPES$1, ...ERROR_TYPES$1] }\n		};\n		const USE_STRICT = {\n			label: \"use_strict\",\n			className: \"meta\",\n			relevance: 10,\n			begin: /^\\s*['\"]use (strict|asm)['\"]/\n		};\n		const FUNCTION_DEFINITION = {\n			variants: [{ match: [\n				/function/,\n				/\\s+/,\n				IDENT_RE$1,\n				/(?=\\s*\\()/\n			] }, { match: [/function/, /\\s*(?=\\()/] }],\n			className: {\n				1: \"keyword\",\n				3: \"title.function\"\n			},\n			label: \"func.def\",\n			contains: [PARAMS],\n			illegal: /%/\n		};\n		const UPPER_CASE_CONSTANT = {\n			relevance: 0,\n			match: /\\b[A-Z][A-Z_0-9]+\\b/,\n			className: \"variable.constant\"\n		};\n		function noneOf(list) {\n			return regex.concat(\"(?!\", list.join(\"|\"), \")\");\n		}\n		const FUNCTION_CALL = {\n			match: regex.concat(/\\b/, noneOf([\n				...BUILT_IN_GLOBALS$1,\n				\"super\",\n				\"import\"\n			].map((x) => `${x}\\\\s*\\\\(`)), IDENT_RE$1, regex.lookahead(/\\s*\\(/)),\n			className: \"title.function\",\n			relevance: 0\n		};\n		const PROPERTY_ACCESS = {\n			begin: regex.concat(/\\./, regex.lookahead(regex.concat(IDENT_RE$1, /(?![0-9A-Za-z$_(])/))),\n			end: IDENT_RE$1,\n			excludeBegin: true,\n			keywords: \"prototype\",\n			className: \"property\",\n			relevance: 0\n		};\n		const GETTER_OR_SETTER = {\n			match: [\n				/get|set/,\n				/\\s+/,\n				IDENT_RE$1,\n				/(?=\\()/\n			],\n			className: {\n				1: \"keyword\",\n				3: \"title.function\"\n			},\n			contains: [{ begin: /\\(\\)/ }, PARAMS]\n		};\n		const FUNC_LEAD_IN_RE = \"(\\\\([^()]*(\\\\([^()]*(\\\\([^()]*\\\\)[^()]*)*\\\\)[^()]*)*\\\\)|\" + hljs.UNDERSCORE_IDENT_RE + \")\\\\s*=>\";\n		const FUNCTION_VARIABLE = {\n			match: [\n				/const|var|let/,\n				/\\s+/,\n				IDENT_RE$1,\n				/\\s*/,\n				/=\\s*/,\n				/(async\\s*)?/,\n				regex.lookahead(FUNC_LEAD_IN_RE)\n			],\n			keywords: \"async\",\n			className: {\n				1: \"keyword\",\n				3: \"title.function\"\n			},\n			contains: [PARAMS]\n		};\n		return {\n			name: \"JavaScript\",\n			aliases: [\n				\"js\",\n				\"jsx\",\n				\"mjs\",\n				\"cjs\"\n			],\n			keywords: KEYWORDS$1,\n			exports: {\n				PARAMS_CONTAINS,\n				CLASS_REFERENCE\n			},\n			illegal: /#(?![$_A-z])/,\n			contains: [\n				hljs.SHEBANG({\n					label: \"shebang\",\n					binary: \"node\",\n					relevance: 5\n				}),\n				USE_STRICT,\n				hljs.APOS_STRING_MODE,\n				hljs.QUOTE_STRING_MODE,\n				HTML_TEMPLATE,\n				CSS_TEMPLATE,\n				GRAPHQL_TEMPLATE,\n				TEMPLATE_STRING,\n				COMMENT,\n				{ match: /\\$\\d+/ },\n				NUMBER,\n				CLASS_REFERENCE,\n				{\n					scope: \"attr\",\n					match: IDENT_RE$1 + regex.lookahead(\":\"),\n					relevance: 0\n				},\n				FUNCTION_VARIABLE,\n				{\n					begin: \"(\" + hljs.RE_STARTERS_RE + \"|\\\\b(case|return|throw)\\\\b)\\\\s*\",\n					keywords: \"return throw case\",\n					relevance: 0,\n					contains: [\n						COMMENT,\n						hljs.REGEXP_MODE,\n						{\n							className: \"function\",\n							begin: FUNC_LEAD_IN_RE,\n							returnBegin: true,\n							end: \"\\\\s*=>\",\n							contains: [{\n								className: \"params\",\n								variants: [\n									{\n										begin: hljs.UNDERSCORE_IDENT_RE,\n										relevance: 0\n									},\n									{\n										className: null,\n										begin: /\\(\\s*\\)/,\n										skip: true\n									},\n									{\n										begin: /(\\s*)\\(/,\n										end: /\\)/,\n										excludeBegin: true,\n										excludeEnd: true,\n										keywords: KEYWORDS$1,\n										contains: PARAMS_CONTAINS\n									}\n								]\n							}]\n						},\n						{\n							begin: /,/,\n							relevance: 0\n						},\n						{\n							match: /\\s+/,\n							relevance: 0\n						},\n						{\n							variants: [\n								{\n									begin: FRAGMENT.begin,\n									end: FRAGMENT.end\n								},\n								{ match: XML_SELF_CLOSING },\n								{\n									begin: XML_TAG.begin,\n									\"on:begin\": XML_TAG.isTrulyOpeningTag,\n									end: XML_TAG.end\n								}\n							],\n							subLanguage: \"xml\",\n							contains: [{\n								begin: XML_TAG.begin,\n								end: XML_TAG.end,\n								skip: true,\n								contains: [\"self\"]\n							}]\n						}\n					]\n				},\n				FUNCTION_DEFINITION,\n				{ beginKeywords: \"while if switch catch for\" },\n				{\n					begin: \"\\\\b(?!function)\" + hljs.UNDERSCORE_IDENT_RE + \"\\\\([^()]*(\\\\([^()]*(\\\\([^()]*\\\\)[^()]*)*\\\\)[^()]*)*\\\\)\\\\s*\\\\{\",\n					returnBegin: true,\n					label: \"func.def\",\n					contains: [PARAMS, hljs.inherit(hljs.TITLE_MODE, {\n						begin: IDENT_RE$1,\n						className: \"title.function\"\n					})]\n				},\n				{\n					match: /\\.\\.\\./,\n					relevance: 0\n				},\n				PROPERTY_ACCESS,\n				{\n					match: \"\\\\$\" + IDENT_RE$1,\n					relevance: 0\n				},\n				{\n					match: [/\\bconstructor(?=\\s*\\()/],\n					className: { 1: \"title.function\" },\n					contains: [PARAMS]\n				},\n				FUNCTION_CALL,\n				UPPER_CASE_CONSTANT,\n				CLASS_OR_EXTENDS,\n				GETTER_OR_SETTER,\n				{ match: /\\$[(.]/ }\n			]\n		};\n	}\n	// node_modules/highlight.js/es/languages/typescript.js\n	const IDENT_RE = \"[A-Za-z$_][0-9A-Za-z$_]*\";\n	const KEYWORDS = [\n		\"as\",\n		\"in\",\n		\"of\",\n		\"if\",\n		\"for\",\n		\"while\",\n		\"finally\",\n		\"var\",\n		\"new\",\n		\"function\",\n		\"do\",\n		\"return\",\n		\"void\",\n		\"else\",\n		\"break\",\n		\"catch\",\n		\"instanceof\",\n		\"with\",\n		\"throw\",\n		\"case\",\n		\"default\",\n		\"try\",\n		\"switch\",\n		\"continue\",\n		\"typeof\",\n		\"delete\",\n		\"let\",\n		\"yield\",\n		\"const\",\n		\"class\",\n		\"debugger\",\n		\"async\",\n		\"await\",\n		\"static\",\n		\"import\",\n		\"from\",\n		\"export\",\n		\"extends\",\n		\"using\"\n	];\n	const LITERALS = [\n		\"true\",\n		\"false\",\n		\"null\",\n		\"undefined\",\n		\"NaN\",\n		\"Infinity\"\n	];\n	const TYPES = [\n		\"Object\",\n		\"Function\",\n		\"Boolean\",\n		\"Symbol\",\n		\"Math\",\n		\"Date\",\n		\"Number\",\n		\"BigInt\",\n		\"String\",\n		\"RegExp\",\n		\"Array\",\n		\"Float32Array\",\n		\"Float64Array\",\n		\"Int8Array\",\n		\"Uint8Array\",\n		\"Uint8ClampedArray\",\n		\"Int16Array\",\n		\"Int32Array\",\n		\"Uint16Array\",\n		\"Uint32Array\",\n		\"BigInt64Array\",\n		\"BigUint64Array\",\n		\"Set\",\n		\"Map\",\n		\"WeakSet\",\n		\"WeakMap\",\n		\"ArrayBuffer\",\n		\"SharedArrayBuffer\",\n		\"Atomics\",\n		\"DataView\",\n		\"JSON\",\n		\"Promise\",\n		\"Generator\",\n		\"GeneratorFunction\",\n		\"AsyncFunction\",\n		\"Reflect\",\n		\"Proxy\",\n		\"Intl\",\n		\"WebAssembly\"\n	];\n	const ERROR_TYPES = [\n		\"Error\",\n		\"EvalError\",\n		\"InternalError\",\n		\"RangeError\",\n		\"ReferenceError\",\n		\"SyntaxError\",\n		\"TypeError\",\n		\"URIError\"\n	];\n	const BUILT_IN_GLOBALS = [\n		\"setInterval\",\n		\"setTimeout\",\n		\"clearInterval\",\n		\"clearTimeout\",\n		\"require\",\n		\"exports\",\n		\"eval\",\n		\"isFinite\",\n		\"isNaN\",\n		\"parseFloat\",\n		\"parseInt\",\n		\"decodeURI\",\n		\"decodeURIComponent\",\n		\"encodeURI\",\n		\"encodeURIComponent\",\n		\"escape\",\n		\"unescape\"\n	];\n	const BUILT_IN_VARIABLES = [\n		\"arguments\",\n		\"this\",\n		\"super\",\n		\"console\",\n		\"window\",\n		\"document\",\n		\"localStorage\",\n		\"sessionStorage\",\n		\"module\",\n		\"global\"\n	];\n	const BUILT_INS = [].concat(BUILT_IN_GLOBALS, TYPES, ERROR_TYPES);\n	/** @type LanguageFn */\n	function javascript(hljs) {\n		const regex = hljs.regex;\n		/**\n		* Takes a string like \"<Booger\" and checks to see\n		* if we can find a matching \"</Booger\" later in the\n		* content.\n		* @param {RegExpMatchArray} match\n		* @param {{after:number}} param1\n		*/\n		const hasClosingTag = (match, { after }) => {\n			const tag = \"</\" + match[0].slice(1);\n			return match.input.indexOf(tag, after) !== -1;\n		};\n		const IDENT_RE$1 = IDENT_RE;\n		const FRAGMENT = {\n			begin: \"<>\",\n			end: \"</>\"\n		};\n		const XML_SELF_CLOSING = /<[A-Za-z0-9\\\\._:-]+\\s*\\/>/;\n		const XML_TAG = {\n			begin: /<[A-Za-z0-9\\\\._:-]+/,\n			end: /\\/[A-Za-z0-9\\\\._:-]+>|\\/>/,\n			/**\n			* @param {RegExpMatchArray} match\n			* @param {CallbackResponse} response\n			*/\n			isTrulyOpeningTag: (match, response) => {\n				const afterMatchIndex = match[0].length + match.index;\n				const nextChar = match.input[afterMatchIndex];\n				if (nextChar === \"<\" || nextChar === \",\") {\n					response.ignoreMatch();\n					return;\n				}\n				if (nextChar === \">\") {\n					if (!hasClosingTag(match, { after: afterMatchIndex })) response.ignoreMatch();\n				}\n				let m;\n				const afterMatch = match.input.substring(afterMatchIndex);\n				if (m = afterMatch.match(/^\\s*=/)) {\n					response.ignoreMatch();\n					return;\n				}\n				if (m = afterMatch.match(/^\\s+extends\\s+/)) {\n					if (m.index === 0) {\n						response.ignoreMatch();\n						return;\n					}\n				}\n			}\n		};\n		const KEYWORDS$1 = {\n			$pattern: IDENT_RE,\n			keyword: KEYWORDS,\n			literal: LITERALS,\n			built_in: BUILT_INS,\n			\"variable.language\": BUILT_IN_VARIABLES\n		};\n		const decimalDigits = \"[0-9](_?[0-9])*\";\n		const frac = `\\\\.(${decimalDigits})`;\n		const decimalInteger = `0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*`;\n		const NUMBER = {\n			className: \"number\",\n			variants: [\n				{ begin: `(\\\\b(${decimalInteger})((${frac})|\\\\.)?|(${frac}))[eE][+-]?(${decimalDigits})\\\\b` },\n				{ begin: `\\\\b(${decimalInteger})\\\\b((${frac})\\\\b|\\\\.)?|(${frac})\\\\b` },\n				{ begin: `\\\\b(0|[1-9](_?[0-9])*)n\\\\b` },\n				{ begin: \"\\\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\\\b\" },\n				{ begin: \"\\\\b0[bB][0-1](_?[0-1])*n?\\\\b\" },\n				{ begin: \"\\\\b0[oO][0-7](_?[0-7])*n?\\\\b\" },\n				{ begin: \"\\\\b0[0-7]+n?\\\\b\" }\n			],\n			relevance: 0\n		};\n		const SUBST = {\n			className: \"subst\",\n			begin: \"\\\\$\\\\{\",\n			end: \"\\\\}\",\n			keywords: KEYWORDS$1,\n			contains: []\n		};\n		const HTML_TEMPLATE = {\n			begin: \".?html`\",\n			end: \"\",\n			starts: {\n				end: \"`\",\n				returnEnd: false,\n				contains: [hljs.BACKSLASH_ESCAPE, SUBST],\n				subLanguage: \"xml\"\n			}\n		};\n		const CSS_TEMPLATE = {\n			begin: \".?css`\",\n			end: \"\",\n			starts: {\n				end: \"`\",\n				returnEnd: false,\n				contains: [hljs.BACKSLASH_ESCAPE, SUBST],\n				subLanguage: \"css\"\n			}\n		};\n		const GRAPHQL_TEMPLATE = {\n			begin: \".?gql`\",\n			end: \"\",\n			starts: {\n				end: \"`\",\n				returnEnd: false,\n				contains: [hljs.BACKSLASH_ESCAPE, SUBST],\n				subLanguage: \"graphql\"\n			}\n		};\n		const TEMPLATE_STRING = {\n			className: \"string\",\n			begin: \"`\",\n			end: \"`\",\n			contains: [hljs.BACKSLASH_ESCAPE, SUBST]\n		};\n		const COMMENT = {\n			className: \"comment\",\n			variants: [\n				hljs.COMMENT(/\\/\\*\\*(?!\\/)/, \"\\\\*/\", {\n					relevance: 0,\n					contains: [{\n						begin: \"(?=@[A-Za-z]+)\",\n						relevance: 0,\n						contains: [\n							{\n								className: \"doctag\",\n								begin: \"@[A-Za-z]+\"\n							},\n							{\n								className: \"type\",\n								begin: \"\\\\{\",\n								end: \"\\\\}\",\n								excludeEnd: true,\n								excludeBegin: true,\n								relevance: 0\n							},\n							{\n								className: \"variable\",\n								begin: IDENT_RE$1 + \"(?=\\\\s*(-)|$)\",\n								endsParent: true,\n								relevance: 0\n							},\n							{\n								begin: /(?=[^\\n])\\s/,\n								relevance: 0\n							}\n						]\n					}]\n				}),\n				hljs.C_BLOCK_COMMENT_MODE,\n				hljs.C_LINE_COMMENT_MODE\n			]\n		};\n		const SUBST_INTERNALS = [\n			hljs.APOS_STRING_MODE,\n			hljs.QUOTE_STRING_MODE,\n			HTML_TEMPLATE,\n			CSS_TEMPLATE,\n			GRAPHQL_TEMPLATE,\n			TEMPLATE_STRING,\n			{ match: /\\$\\d+/ },\n			NUMBER\n		];\n		SUBST.contains = SUBST_INTERNALS.concat({\n			begin: /\\{/,\n			end: /\\}/,\n			keywords: KEYWORDS$1,\n			contains: [\"self\"].concat(SUBST_INTERNALS)\n		});\n		const SUBST_AND_COMMENTS = [].concat(COMMENT, SUBST.contains);\n		const PARAMS_CONTAINS = SUBST_AND_COMMENTS.concat([{\n			begin: /(\\s*)\\(/,\n			end: /\\)/,\n			keywords: KEYWORDS$1,\n			contains: [\"self\"].concat(SUBST_AND_COMMENTS)\n		}]);\n		const PARAMS = {\n			className: \"params\",\n			begin: /(\\s*)\\(/,\n			end: /\\)/,\n			excludeBegin: true,\n			excludeEnd: true,\n			keywords: KEYWORDS$1,\n			contains: PARAMS_CONTAINS\n		};\n		const CLASS_OR_EXTENDS = { variants: [{\n			match: [\n				/class/,\n				/\\s+/,\n				IDENT_RE$1,\n				/\\s+/,\n				/extends/,\n				/\\s+/,\n				regex.concat(IDENT_RE$1, \"(\", regex.concat(/\\./, IDENT_RE$1), \")*\")\n			],\n			scope: {\n				1: \"keyword\",\n				3: \"title.class\",\n				5: \"keyword\",\n				7: \"title.class.inherited\"\n			}\n		}, {\n			match: [\n				/class/,\n				/\\s+/,\n				IDENT_RE$1\n			],\n			scope: {\n				1: \"keyword\",\n				3: \"title.class\"\n			}\n		}] };\n		const CLASS_REFERENCE = {\n			relevance: 0,\n			match: regex.either(/\\bJSON/, /\\b[A-Z][a-z]+([A-Z][a-z]*|\\d)*/, /\\b[A-Z]{2,}([A-Z][a-z]+|\\d)+([A-Z][a-z]*)*/, /\\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\\d)*([A-Z][a-z]*)*/),\n			className: \"title.class\",\n			keywords: { _: [...TYPES, ...ERROR_TYPES] }\n		};\n		const USE_STRICT = {\n			label: \"use_strict\",\n			className: \"meta\",\n			relevance: 10,\n			begin: /^\\s*['\"]use (strict|asm)['\"]/\n		};\n		const FUNCTION_DEFINITION = {\n			variants: [{ match: [\n				/function/,\n				/\\s+/,\n				IDENT_RE$1,\n				/(?=\\s*\\()/\n			] }, { match: [/function/, /\\s*(?=\\()/] }],\n			className: {\n				1: \"keyword\",\n				3: \"title.function\"\n			},\n			label: \"func.def\",\n			contains: [PARAMS],\n			illegal: /%/\n		};\n		const UPPER_CASE_CONSTANT = {\n			relevance: 0,\n			match: /\\b[A-Z][A-Z_0-9]+\\b/,\n			className: \"variable.constant\"\n		};\n		function noneOf(list) {\n			return regex.concat(\"(?!\", list.join(\"|\"), \")\");\n		}\n		const FUNCTION_CALL = {\n			match: regex.concat(/\\b/, noneOf([\n				...BUILT_IN_GLOBALS,\n				\"super\",\n				\"import\"\n			].map((x) => `${x}\\\\s*\\\\(`)), IDENT_RE$1, regex.lookahead(/\\s*\\(/)),\n			className: \"title.function\",\n			relevance: 0\n		};\n		const PROPERTY_ACCESS = {\n			begin: regex.concat(/\\./, regex.lookahead(regex.concat(IDENT_RE$1, /(?![0-9A-Za-z$_(])/))),\n			end: IDENT_RE$1,\n			excludeBegin: true,\n			keywords: \"prototype\",\n			className: \"property\",\n			relevance: 0\n		};\n		const GETTER_OR_SETTER = {\n			match: [\n				/get|set/,\n				/\\s+/,\n				IDENT_RE$1,\n				/(?=\\()/\n			],\n			className: {\n				1: \"keyword\",\n				3: \"title.function\"\n			},\n			contains: [{ begin: /\\(\\)/ }, PARAMS]\n		};\n		const FUNC_LEAD_IN_RE = \"(\\\\([^()]*(\\\\([^()]*(\\\\([^()]*\\\\)[^()]*)*\\\\)[^()]*)*\\\\)|\" + hljs.UNDERSCORE_IDENT_RE + \")\\\\s*=>\";\n		const FUNCTION_VARIABLE = {\n			match: [\n				/const|var|let/,\n				/\\s+/,\n				IDENT_RE$1,\n				/\\s*/,\n				/=\\s*/,\n				/(async\\s*)?/,\n				regex.lookahead(FUNC_LEAD_IN_RE)\n			],\n			keywords: \"async\",\n			className: {\n				1: \"keyword\",\n				3: \"title.function\"\n			},\n			contains: [PARAMS]\n		};\n		return {\n			name: \"JavaScript\",\n			aliases: [\n				\"js\",\n				\"jsx\",\n				\"mjs\",\n				\"cjs\"\n			],\n			keywords: KEYWORDS$1,\n			exports: {\n				PARAMS_CONTAINS,\n				CLASS_REFERENCE\n			},\n			illegal: /#(?![$_A-z])/,\n			contains: [\n				hljs.SHEBANG({\n					label: \"shebang\",\n					binary: \"node\",\n					relevance: 5\n				}),\n				USE_STRICT,\n				hljs.APOS_STRING_MODE,\n				hljs.QUOTE_STRING_MODE,\n				HTML_TEMPLATE,\n				CSS_TEMPLATE,\n				GRAPHQL_TEMPLATE,\n				TEMPLATE_STRING,\n				COMMENT,\n				{ match: /\\$\\d+/ },\n				NUMBER,\n				CLASS_REFERENCE,\n				{\n					scope: \"attr\",\n					match: IDENT_RE$1 + regex.lookahead(\":\"),\n					relevance: 0\n				},\n				FUNCTION_VARIABLE,\n				{\n					begin: \"(\" + hljs.RE_STARTERS_RE + \"|\\\\b(case|return|throw)\\\\b)\\\\s*\",\n					keywords: \"return throw case\",\n					relevance: 0,\n					contains: [\n						COMMENT,\n						hljs.REGEXP_MODE,\n						{\n							className: \"function\",\n							begin: FUNC_LEAD_IN_RE,\n							returnBegin: true,\n							end: \"\\\\s*=>\",\n							contains: [{\n								className: \"params\",\n								variants: [\n									{\n										begin: hljs.UNDERSCORE_IDENT_RE,\n										relevance: 0\n									},\n									{\n										className: null,\n										begin: /\\(\\s*\\)/,\n										skip: true\n									},\n									{\n										begin: /(\\s*)\\(/,\n										end: /\\)/,\n										excludeBegin: true,\n										excludeEnd: true,\n										keywords: KEYWORDS$1,\n										contains: PARAMS_CONTAINS\n									}\n								]\n							}]\n						},\n						{\n							begin: /,/,\n							relevance: 0\n						},\n						{\n							match: /\\s+/,\n							relevance: 0\n						},\n						{\n							variants: [\n								{\n									begin: FRAGMENT.begin,\n									end: FRAGMENT.end\n								},\n								{ match: XML_SELF_CLOSING },\n								{\n									begin: XML_TAG.begin,\n									\"on:begin\": XML_TAG.isTrulyOpeningTag,\n									end: XML_TAG.end\n								}\n							],\n							subLanguage: \"xml\",\n							contains: [{\n								begin: XML_TAG.begin,\n								end: XML_TAG.end,\n								skip: true,\n								contains: [\"self\"]\n							}]\n						}\n					]\n				},\n				FUNCTION_DEFINITION,\n				{ beginKeywords: \"while if switch catch for\" },\n				{\n					begin: \"\\\\b(?!function)\" + hljs.UNDERSCORE_IDENT_RE + \"\\\\([^()]*(\\\\([^()]*(\\\\([^()]*\\\\)[^()]*)*\\\\)[^()]*)*\\\\)\\\\s*\\\\{\",\n					returnBegin: true,\n					label: \"func.def\",\n					contains: [PARAMS, hljs.inherit(hljs.TITLE_MODE, {\n						begin: IDENT_RE$1,\n						className: \"title.function\"\n					})]\n				},\n				{\n					match: /\\.\\.\\./,\n					relevance: 0\n				},\n				PROPERTY_ACCESS,\n				{\n					match: \"\\\\$\" + IDENT_RE$1,\n					relevance: 0\n				},\n				{\n					match: [/\\bconstructor(?=\\s*\\()/],\n					className: { 1: \"title.function\" },\n					contains: [PARAMS]\n				},\n				FUNCTION_CALL,\n				UPPER_CASE_CONSTANT,\n				CLASS_OR_EXTENDS,\n				GETTER_OR_SETTER,\n				{ match: /\\$[(.]/ }\n			]\n		};\n	}\n	/** @type LanguageFn */\n	function typescript(hljs) {\n		const regex = hljs.regex;\n		const tsLanguage = javascript(hljs);\n		const IDENT_RE$1 = IDENT_RE;\n		const TYPES = [\n			\"any\",\n			\"void\",\n			\"number\",\n			\"boolean\",\n			\"string\",\n			\"object\",\n			\"never\",\n			\"symbol\",\n			\"bigint\",\n			\"unknown\"\n		];\n		const NAMESPACE = {\n			begin: [\n				/namespace/,\n				/\\s+/,\n				hljs.IDENT_RE\n			],\n			beginScope: {\n				1: \"keyword\",\n				3: \"title.class\"\n			}\n		};\n		const INTERFACE = {\n			beginKeywords: \"interface\",\n			end: /\\{/,\n			excludeEnd: true,\n			keywords: {\n				keyword: \"interface extends\",\n				built_in: TYPES\n			},\n			contains: [tsLanguage.exports.CLASS_REFERENCE]\n		};\n		const USE_STRICT = {\n			className: \"meta\",\n			relevance: 10,\n			begin: /^\\s*['\"]use strict['\"]/\n		};\n		const KEYWORDS$1 = {\n			$pattern: IDENT_RE,\n			keyword: KEYWORDS.concat([\n				\"type\",\n				\"interface\",\n				\"public\",\n				\"private\",\n				\"protected\",\n				\"implements\",\n				\"declare\",\n				\"abstract\",\n				\"readonly\",\n				\"enum\",\n				\"override\",\n				\"satisfies\"\n			]),\n			literal: LITERALS,\n			built_in: BUILT_INS.concat(TYPES),\n			\"variable.language\": BUILT_IN_VARIABLES\n		};\n		const DECORATOR = {\n			className: \"meta\",\n			begin: \"@\" + IDENT_RE$1\n		};\n		const swapMode = (mode, label, replacement) => {\n			const indx = mode.contains.findIndex((m) => m.label === label);\n			if (indx === -1) throw new Error(\"can not find mode to replace\");\n			mode.contains.splice(indx, 1, replacement);\n		};\n		Object.assign(tsLanguage.keywords, KEYWORDS$1);\n		tsLanguage.exports.PARAMS_CONTAINS.push(DECORATOR);\n		const ATTRIBUTE_HIGHLIGHT = tsLanguage.contains.find((c) => c.scope === \"attr\");\n		const OPTIONAL_KEY_OR_ARGUMENT = Object.assign({}, ATTRIBUTE_HIGHLIGHT, { match: regex.concat(IDENT_RE$1, regex.lookahead(/\\s*\\?:/)) });\n		tsLanguage.exports.PARAMS_CONTAINS.push([\n			tsLanguage.exports.CLASS_REFERENCE,\n			ATTRIBUTE_HIGHLIGHT,\n			OPTIONAL_KEY_OR_ARGUMENT\n		]);\n		tsLanguage.contains = tsLanguage.contains.concat([\n			DECORATOR,\n			NAMESPACE,\n			INTERFACE,\n			OPTIONAL_KEY_OR_ARGUMENT\n		]);\n		swapMode(tsLanguage, \"shebang\", hljs.SHEBANG());\n		swapMode(tsLanguage, \"use_strict\", USE_STRICT);\n		const functionDeclaration = tsLanguage.contains.find((m) => m.label === \"func.def\");\n		functionDeclaration.relevance = 0;\n		Object.assign(tsLanguage, {\n			name: \"TypeScript\",\n			aliases: [\n				\"ts\",\n				\"tsx\",\n				\"mts\",\n				\"cts\"\n			]\n		});\n		return tsLanguage;\n	}\n	// node_modules/highlight.js/es/languages/python.js\n	function python(hljs) {\n		const regex = hljs.regex;\n		const IDENT_RE = /[\\p{XID_Start}_]\\p{XID_Continue}*/u;\n		const RESERVED_WORDS = [\n			\"and\",\n			\"as\",\n			\"assert\",\n			\"async\",\n			\"await\",\n			\"break\",\n			\"case\",\n			\"class\",\n			\"continue\",\n			\"def\",\n			\"del\",\n			\"elif\",\n			\"else\",\n			\"except\",\n			\"finally\",\n			\"for\",\n			\"from\",\n			\"global\",\n			\"if\",\n			\"import\",\n			\"in\",\n			\"is\",\n			\"lambda\",\n			\"match\",\n			\"nonlocal|10\",\n			\"not\",\n			\"or\",\n			\"pass\",\n			\"raise\",\n			\"return\",\n			\"try\",\n			\"while\",\n			\"with\",\n			\"yield\"\n		];\n		const KEYWORDS = {\n			$pattern: /[A-Za-z]\\w+|__\\w+__/,\n			keyword: RESERVED_WORDS,\n			built_in: [\n				\"__import__\",\n				\"abs\",\n				\"all\",\n				\"any\",\n				\"ascii\",\n				\"bin\",\n				\"bool\",\n				\"breakpoint\",\n				\"bytearray\",\n				\"bytes\",\n				\"callable\",\n				\"chr\",\n				\"classmethod\",\n				\"compile\",\n				\"complex\",\n				\"delattr\",\n				\"dict\",\n				\"dir\",\n				\"divmod\",\n				\"enumerate\",\n				\"eval\",\n				\"exec\",\n				\"filter\",\n				\"float\",\n				\"format\",\n				\"frozenset\",\n				\"getattr\",\n				\"globals\",\n				\"hasattr\",\n				\"hash\",\n				\"help\",\n				\"hex\",\n				\"id\",\n				\"input\",\n				\"int\",\n				\"isinstance\",\n				\"issubclass\",\n				\"iter\",\n				\"len\",\n				\"list\",\n				\"locals\",\n				\"map\",\n				\"max\",\n				\"memoryview\",\n				\"min\",\n				\"next\",\n				\"object\",\n				\"oct\",\n				\"open\",\n				\"ord\",\n				\"pow\",\n				\"print\",\n				\"property\",\n				\"range\",\n				\"repr\",\n				\"reversed\",\n				\"round\",\n				\"set\",\n				\"setattr\",\n				\"slice\",\n				\"sorted\",\n				\"staticmethod\",\n				\"str\",\n				\"sum\",\n				\"super\",\n				\"tuple\",\n				\"type\",\n				\"vars\",\n				\"zip\"\n			],\n			literal: [\n				\"__debug__\",\n				\"Ellipsis\",\n				\"False\",\n				\"None\",\n				\"NotImplemented\",\n				\"True\"\n			],\n			type: [\n				\"Any\",\n				\"Callable\",\n				\"Coroutine\",\n				\"Dict\",\n				\"List\",\n				\"Literal\",\n				\"Generic\",\n				\"Optional\",\n				\"Sequence\",\n				\"Set\",\n				\"Tuple\",\n				\"Type\",\n				\"Union\"\n			]\n		};\n		const PROMPT = {\n			className: \"meta\",\n			begin: /^(>>>|\\.\\.\\.) /\n		};\n		const SUBST = {\n			className: \"subst\",\n			begin: /\\{/,\n			end: /\\}/,\n			keywords: KEYWORDS,\n			illegal: /#/\n		};\n		const LITERAL_BRACKET = {\n			begin: /\\{\\{/,\n			relevance: 0\n		};\n		const STRING = {\n			className: \"string\",\n			contains: [hljs.BACKSLASH_ESCAPE],\n			variants: [\n				{\n					begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,\n					end: /'''/,\n					contains: [hljs.BACKSLASH_ESCAPE, PROMPT],\n					relevance: 10\n				},\n				{\n					begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?\"\"\"/,\n					end: /\"\"\"/,\n					contains: [hljs.BACKSLASH_ESCAPE, PROMPT],\n					relevance: 10\n				},\n				{\n					begin: /([fF][rR]|[rR][fF]|[fF])'''/,\n					end: /'''/,\n					contains: [\n						hljs.BACKSLASH_ESCAPE,\n						PROMPT,\n						LITERAL_BRACKET,\n						SUBST\n					]\n				},\n				{\n					begin: /([fF][rR]|[rR][fF]|[fF])\"\"\"/,\n					end: /\"\"\"/,\n					contains: [\n						hljs.BACKSLASH_ESCAPE,\n						PROMPT,\n						LITERAL_BRACKET,\n						SUBST\n					]\n				},\n				{\n					begin: /([uU]|[rR])'/,\n					end: /'/,\n					relevance: 10\n				},\n				{\n					begin: /([uU]|[rR])\"/,\n					end: /\"/,\n					relevance: 10\n				},\n				{\n					begin: /([bB]|[bB][rR]|[rR][bB])'/,\n					end: /'/\n				},\n				{\n					begin: /([bB]|[bB][rR]|[rR][bB])\"/,\n					end: /\"/\n				},\n				{\n					begin: /([fF][rR]|[rR][fF]|[fF])'/,\n					end: /'/,\n					contains: [\n						hljs.BACKSLASH_ESCAPE,\n						LITERAL_BRACKET,\n						SUBST\n					]\n				},\n				{\n					begin: /([fF][rR]|[rR][fF]|[fF])\"/,\n					end: /\"/,\n					contains: [\n						hljs.BACKSLASH_ESCAPE,\n						LITERAL_BRACKET,\n						SUBST\n					]\n				},\n				hljs.APOS_STRING_MODE,\n				hljs.QUOTE_STRING_MODE\n			]\n		};\n		const digitpart = \"[0-9](_?[0-9])*\";\n		const pointfloat = `(\\\\b(${digitpart}))?\\\\.(${digitpart})|\\\\b(${digitpart})\\\\.`;\n		const lookahead = `\\\\b|${RESERVED_WORDS.join(\"|\")}`;\n		const NUMBER = {\n			className: \"number\",\n			relevance: 0,\n			variants: [\n				{ begin: `(\\\\b(${digitpart})|(${pointfloat}))[eE][+-]?(${digitpart})[jJ]?(?=${lookahead})` },\n				{ begin: `(${pointfloat})[jJ]?` },\n				{ begin: `\\\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${lookahead})` },\n				{ begin: `\\\\b0[bB](_?[01])+[lL]?(?=${lookahead})` },\n				{ begin: `\\\\b0[oO](_?[0-7])+[lL]?(?=${lookahead})` },\n				{ begin: `\\\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${lookahead})` },\n				{ begin: `\\\\b(${digitpart})[jJ](?=${lookahead})` }\n			]\n		};\n		const COMMENT_TYPE = {\n			className: \"comment\",\n			begin: regex.lookahead(/# type:/),\n			end: /$/,\n			keywords: KEYWORDS,\n			contains: [{ begin: /# type:/ }, {\n				begin: /#/,\n				end: /\\b\\B/,\n				endsWithParent: true\n			}]\n		};\n		const PARAMS = {\n			className: \"params\",\n			variants: [{\n				className: \"\",\n				begin: /\\(\\s*\\)/,\n				skip: true\n			}, {\n				begin: /\\(/,\n				end: /\\)/,\n				excludeBegin: true,\n				excludeEnd: true,\n				keywords: KEYWORDS,\n				contains: [\n					\"self\",\n					PROMPT,\n					NUMBER,\n					STRING,\n					hljs.HASH_COMMENT_MODE\n				]\n			}]\n		};\n		SUBST.contains = [\n			STRING,\n			NUMBER,\n			PROMPT\n		];\n		return {\n			name: \"Python\",\n			aliases: [\n				\"py\",\n				\"gyp\",\n				\"ipython\"\n			],\n			unicodeRegex: true,\n			keywords: KEYWORDS,\n			illegal: /(<\\/|\\?)|=>/,\n			contains: [\n				PROMPT,\n				NUMBER,\n				{\n					scope: \"variable.language\",\n					match: /\\bself\\b/\n				},\n				{\n					beginKeywords: \"if\",\n					relevance: 0\n				},\n				{\n					match: /\\bor\\b/,\n					scope: \"keyword\"\n				},\n				STRING,\n				COMMENT_TYPE,\n				hljs.HASH_COMMENT_MODE,\n				{\n					match: [\n						/\\bdef/,\n						/\\s+/,\n						IDENT_RE\n					],\n					scope: {\n						1: \"keyword\",\n						3: \"title.function\"\n					},\n					contains: [PARAMS]\n				},\n				{\n					variants: [{ match: [\n						/\\bclass/,\n						/\\s+/,\n						IDENT_RE,\n						/\\s*/,\n						/\\(\\s*/,\n						IDENT_RE,\n						/\\s*\\)/\n					] }, { match: [\n						/\\bclass/,\n						/\\s+/,\n						IDENT_RE\n					] }],\n					scope: {\n						1: \"keyword\",\n						3: \"title.class\",\n						6: \"title.class.inherited\"\n					}\n				},\n				{\n					className: \"meta\",\n					begin: /^[\\t ]*@/,\n					end: /(?=#)|$/,\n					contains: [\n						NUMBER,\n						PARAMS,\n						STRING\n					]\n				}\n			]\n		};\n	}\n	// node_modules/highlight.js/es/languages/bash.js\n	/** @type LanguageFn */\n	function bash(hljs) {\n		const regex = hljs.regex;\n		const VAR = {};\n		const BRACED_VAR = {\n			begin: /\\$\\{/,\n			end: /\\}/,\n			contains: [\"self\", {\n				begin: /:-/,\n				contains: [VAR]\n			}]\n		};\n		Object.assign(VAR, {\n			className: \"variable\",\n			variants: [{ begin: regex.concat(/\\$[\\w\\d#@][\\w\\d_]*/, `(?![\\\\w\\\\d])(?![$])`) }, BRACED_VAR]\n		});\n		const SUBST = {\n			className: \"subst\",\n			begin: /\\$\\(/,\n			end: /\\)/,\n			contains: [hljs.BACKSLASH_ESCAPE]\n		};\n		const COMMENT = hljs.inherit(hljs.COMMENT(), {\n			match: [/(^|\\s)/, /#.*$/],\n			scope: { 2: \"comment\" }\n		});\n		const HERE_DOC = {\n			begin: /<<-?\\s*(?=\\w+)/,\n			starts: { contains: [hljs.END_SAME_AS_BEGIN({\n				begin: /(\\w+)/,\n				end: /(\\w+)/,\n				className: \"string\"\n			})] }\n		};\n		const QUOTE_STRING = {\n			className: \"string\",\n			begin: /\"/,\n			end: /\"/,\n			contains: [\n				hljs.BACKSLASH_ESCAPE,\n				VAR,\n				SUBST\n			]\n		};\n		SUBST.contains.push(QUOTE_STRING);\n		const ESCAPED_QUOTE = { match: /\\\\\"/ };\n		const APOS_STRING = {\n			className: \"string\",\n			begin: /'/,\n			end: /'/\n		};\n		const ESCAPED_APOS = { match: /\\\\'/ };\n		const ARITHMETIC = {\n			begin: /\\$?\\(\\(/,\n			end: /\\)\\)/,\n			contains: [\n				{\n					begin: /\\d+#[0-9a-f]+/,\n					className: \"number\"\n				},\n				hljs.NUMBER_MODE,\n				VAR\n			]\n		};\n		const KNOWN_SHEBANG = hljs.SHEBANG({\n			binary: `(${[\n				\"fish\",\n				\"bash\",\n				\"zsh\",\n				\"sh\",\n				\"csh\",\n				\"ksh\",\n				\"tcsh\",\n				\"dash\",\n				\"scsh\"\n			].join(\"|\")})`,\n			relevance: 10\n		});\n		const FUNCTION = {\n			className: \"function\",\n			begin: /\\w[\\w\\d_]*\\s*\\(\\s*\\)\\s*\\{/,\n			returnBegin: true,\n			contains: [hljs.inherit(hljs.TITLE_MODE, { begin: /\\w[\\w\\d_]*/ })],\n			relevance: 0\n		};\n		const KEYWORDS = [\n			\"if\",\n			\"then\",\n			\"else\",\n			\"elif\",\n			\"fi\",\n			\"time\",\n			\"for\",\n			\"while\",\n			\"until\",\n			\"in\",\n			\"do\",\n			\"done\",\n			\"case\",\n			\"esac\",\n			\"coproc\",\n			\"function\",\n			\"select\"\n		];\n		const LITERALS = [\"true\", \"false\"];\n		const PATH_MODE = { match: /(\\/[a-z._-]+)+/ };\n		const SHELL_BUILT_INS = [\n			\"break\",\n			\"cd\",\n			\"continue\",\n			\"eval\",\n			\"exec\",\n			\"exit\",\n			\"export\",\n			\"getopts\",\n			\"hash\",\n			\"pwd\",\n			\"readonly\",\n			\"return\",\n			\"shift\",\n			\"test\",\n			\"times\",\n			\"trap\",\n			\"umask\",\n			\"unset\"\n		];\n		const BASH_BUILT_INS = [\n			\"alias\",\n			\"bind\",\n			\"builtin\",\n			\"caller\",\n			\"command\",\n			\"declare\",\n			\"echo\",\n			\"enable\",\n			\"help\",\n			\"let\",\n			\"local\",\n			\"logout\",\n			\"mapfile\",\n			\"printf\",\n			\"read\",\n			\"readarray\",\n			\"source\",\n			\"sudo\",\n			\"type\",\n			\"typeset\",\n			\"ulimit\",\n			\"unalias\"\n		];\n		const ZSH_BUILT_INS = [\n			\"autoload\",\n			\"bg\",\n			\"bindkey\",\n			\"bye\",\n			\"cap\",\n			\"chdir\",\n			\"clone\",\n			\"comparguments\",\n			\"compcall\",\n			\"compctl\",\n			\"compdescribe\",\n			\"compfiles\",\n			\"compgroups\",\n			\"compquote\",\n			\"comptags\",\n			\"comptry\",\n			\"compvalues\",\n			\"dirs\",\n			\"disable\",\n			\"disown\",\n			\"echotc\",\n			\"echoti\",\n			\"emulate\",\n			\"fc\",\n			\"fg\",\n			\"float\",\n			\"functions\",\n			\"getcap\",\n			\"getln\",\n			\"history\",\n			\"integer\",\n			\"jobs\",\n			\"kill\",\n			\"limit\",\n			\"log\",\n			\"noglob\",\n			\"popd\",\n			\"print\",\n			\"pushd\",\n			\"pushln\",\n			\"rehash\",\n			\"sched\",\n			\"setcap\",\n			\"setopt\",\n			\"stat\",\n			\"suspend\",\n			\"ttyctl\",\n			\"unfunction\",\n			\"unhash\",\n			\"unlimit\",\n			\"unsetopt\",\n			\"vared\",\n			\"wait\",\n			\"whence\",\n			\"where\",\n			\"which\",\n			\"zcompile\",\n			\"zformat\",\n			\"zftp\",\n			\"zle\",\n			\"zmodload\",\n			\"zparseopts\",\n			\"zprof\",\n			\"zpty\",\n			\"zregexparse\",\n			\"zsocket\",\n			\"zstyle\",\n			\"ztcp\"\n		];\n		const GNU_CORE_UTILS = [\n			\"chcon\",\n			\"chgrp\",\n			\"chown\",\n			\"chmod\",\n			\"cp\",\n			\"dd\",\n			\"df\",\n			\"dir\",\n			\"dircolors\",\n			\"ln\",\n			\"ls\",\n			\"mkdir\",\n			\"mkfifo\",\n			\"mknod\",\n			\"mktemp\",\n			\"mv\",\n			\"realpath\",\n			\"rm\",\n			\"rmdir\",\n			\"shred\",\n			\"sync\",\n			\"touch\",\n			\"truncate\",\n			\"vdir\",\n			\"b2sum\",\n			\"base32\",\n			\"base64\",\n			\"cat\",\n			\"cksum\",\n			\"comm\",\n			\"csplit\",\n			\"cut\",\n			\"expand\",\n			\"fmt\",\n			\"fold\",\n			\"head\",\n			\"join\",\n			\"md5sum\",\n			\"nl\",\n			\"numfmt\",\n			\"od\",\n			\"paste\",\n			\"ptx\",\n			\"pr\",\n			\"sha1sum\",\n			\"sha224sum\",\n			\"sha256sum\",\n			\"sha384sum\",\n			\"sha512sum\",\n			\"shuf\",\n			\"sort\",\n			\"split\",\n			\"sum\",\n			\"tac\",\n			\"tail\",\n			\"tr\",\n			\"tsort\",\n			\"unexpand\",\n			\"uniq\",\n			\"wc\",\n			\"arch\",\n			\"basename\",\n			\"chroot\",\n			\"date\",\n			\"dirname\",\n			\"du\",\n			\"echo\",\n			\"env\",\n			\"expr\",\n			\"factor\",\n			\"groups\",\n			\"hostid\",\n			\"id\",\n			\"link\",\n			\"logname\",\n			\"nice\",\n			\"nohup\",\n			\"nproc\",\n			\"pathchk\",\n			\"pinky\",\n			\"printenv\",\n			\"printf\",\n			\"pwd\",\n			\"readlink\",\n			\"runcon\",\n			\"seq\",\n			\"sleep\",\n			\"stat\",\n			\"stdbuf\",\n			\"stty\",\n			\"tee\",\n			\"test\",\n			\"timeout\",\n			\"tty\",\n			\"uname\",\n			\"unlink\",\n			\"uptime\",\n			\"users\",\n			\"who\",\n			\"whoami\",\n			\"yes\"\n		];\n		return {\n			name: \"Bash\",\n			aliases: [\"sh\", \"zsh\"],\n			keywords: {\n				$pattern: /\\b[a-z][a-z0-9._-]+\\b/,\n				keyword: KEYWORDS,\n				literal: LITERALS,\n				built_in: [\n					...SHELL_BUILT_INS,\n					...BASH_BUILT_INS,\n					\"set\",\n					\"shopt\",\n					...ZSH_BUILT_INS,\n					...GNU_CORE_UTILS\n				]\n			},\n			contains: [\n				KNOWN_SHEBANG,\n				hljs.SHEBANG(),\n				FUNCTION,\n				ARITHMETIC,\n				COMMENT,\n				HERE_DOC,\n				PATH_MODE,\n				QUOTE_STRING,\n				ESCAPED_QUOTE,\n				APOS_STRING,\n				ESCAPED_APOS,\n				VAR\n			]\n		};\n	}\n	// node_modules/highlight.js/es/languages/json.js\n	function json(hljs) {\n		const ATTRIBUTE = {\n			className: \"attr\",\n			begin: /\"(\\\\.|[^\\\\\"\\r\\n])*\"(?=\\s*:)/,\n			relevance: 1.01\n		};\n		const PUNCTUATION = {\n			match: /[{}[\\],:]/,\n			className: \"punctuation\",\n			relevance: 0\n		};\n		const LITERALS = [\n			\"true\",\n			\"false\",\n			\"null\"\n		];\n		const LITERALS_MODE = {\n			scope: \"literal\",\n			beginKeywords: LITERALS.join(\" \")\n		};\n		return {\n			name: \"JSON\",\n			aliases: [\"jsonc\"],\n			keywords: { literal: LITERALS },\n			contains: [\n				ATTRIBUTE,\n				PUNCTUATION,\n				hljs.QUOTE_STRING_MODE,\n				LITERALS_MODE,\n				hljs.C_NUMBER_MODE,\n				hljs.C_LINE_COMMENT_MODE,\n				hljs.C_BLOCK_COMMENT_MODE\n			],\n			illegal: \"\\\\S\"\n		};\n	}\n	// node_modules/highlight.js/es/languages/yaml.js\n	function yaml(hljs) {\n		const LITERALS = \"true false yes no null\";\n		const URI_CHARACTERS = \"[\\\\w#;/?:@&=+$,.~*'()[\\\\]]+\";\n		const KEY = {\n			className: \"attr\",\n			variants: [\n				{ begin: /[\\w*@][\\w*@ :()\\./-]*:(?=[ \\t]|$)/ },\n				{ begin: /\"[\\w*@][\\w*@ :()\\./-]*\":(?=[ \\t]|$)/ },\n				{ begin: /'[\\w*@][\\w*@ :()\\./-]*':(?=[ \\t]|$)/ }\n			]\n		};\n		const TEMPLATE_VARIABLES = {\n			className: \"template-variable\",\n			variants: [{\n				begin: /\\{\\{/,\n				end: /\\}\\}/\n			}, {\n				begin: /%\\{/,\n				end: /\\}/\n			}]\n		};\n		const SINGLE_QUOTE_STRING = {\n			className: \"string\",\n			relevance: 0,\n			begin: /'/,\n			end: /'/,\n			contains: [{\n				match: /''/,\n				scope: \"char.escape\",\n				relevance: 0\n			}]\n		};\n		const STRING = {\n			className: \"string\",\n			relevance: 0,\n			variants: [{\n				begin: /\"/,\n				end: /\"/\n			}, { begin: /\\S+/ }],\n			contains: [hljs.BACKSLASH_ESCAPE, TEMPLATE_VARIABLES]\n		};\n		const CONTAINER_STRING = hljs.inherit(STRING, { variants: [\n			{\n				begin: /'/,\n				end: /'/,\n				contains: [{\n					begin: /''/,\n					relevance: 0\n				}]\n			},\n			{\n				begin: /\"/,\n				end: /\"/\n			},\n			{ begin: /[^\\s,{}[\\]]+/ }\n		] });\n		const TIMESTAMP = {\n			className: \"number\",\n			begin: \"\\\\b[0-9]{4}(-[0-9][0-9]){0,2}([Tt \\\\t][0-9][0-9]?(:[0-9][0-9]){2})?(\\\\.[0-9]*)?([ \\\\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?\\\\b\"\n		};\n		const VALUE_CONTAINER = {\n			end: \",\",\n			endsWithParent: true,\n			excludeEnd: true,\n			keywords: LITERALS,\n			relevance: 0\n		};\n		const OBJECT = {\n			begin: /\\{/,\n			end: /\\}/,\n			contains: [VALUE_CONTAINER],\n			illegal: \"\\\\n\",\n			relevance: 0\n		};\n		const ARRAY = {\n			begin: \"\\\\[\",\n			end: \"\\\\]\",\n			contains: [VALUE_CONTAINER],\n			illegal: \"\\\\n\",\n			relevance: 0\n		};\n		const MODES = [\n			KEY,\n			{\n				className: \"meta\",\n				begin: \"^---\\\\s*$\",\n				relevance: 10\n			},\n			{\n				className: \"string\",\n				begin: \"[\\\\|>]([1-9]?[+-])?[ ]*\\\\n( +)[^ ][^\\\\n]*\\\\n(\\\\2[^\\\\n]+\\\\n?)*\"\n			},\n			{\n				begin: \"<%[%=-]?\",\n				end: \"[%-]?%>\",\n				subLanguage: \"ruby\",\n				excludeBegin: true,\n				excludeEnd: true,\n				relevance: 0\n			},\n			{\n				className: \"type\",\n				begin: \"!\\\\w+!\" + URI_CHARACTERS\n			},\n			{\n				className: \"type\",\n				begin: \"!<\" + URI_CHARACTERS + \">\"\n			},\n			{\n				className: \"type\",\n				begin: \"!\" + URI_CHARACTERS\n			},\n			{\n				className: \"type\",\n				begin: \"!!\" + URI_CHARACTERS\n			},\n			{\n				className: \"meta\",\n				begin: \"&\" + hljs.UNDERSCORE_IDENT_RE + \"$\"\n			},\n			{\n				className: \"meta\",\n				begin: \"\\\\*\" + hljs.UNDERSCORE_IDENT_RE + \"$\"\n			},\n			{\n				className: \"bullet\",\n				begin: \"-(?=[ ]|$)\",\n				relevance: 0\n			},\n			hljs.HASH_COMMENT_MODE,\n			{\n				beginKeywords: LITERALS,\n				keywords: { literal: LITERALS }\n			},\n			TIMESTAMP,\n			{\n				className: \"number\",\n				begin: hljs.C_NUMBER_RE + \"\\\\b\",\n				relevance: 0\n			},\n			OBJECT,\n			ARRAY,\n			SINGLE_QUOTE_STRING,\n			STRING\n		];\n		const VALUE_MODES = [...MODES];\n		VALUE_MODES.pop();\n		VALUE_MODES.push(CONTAINER_STRING);\n		VALUE_CONTAINER.contains = VALUE_MODES;\n		return {\n			name: \"YAML\",\n			case_insensitive: true,\n			aliases: [\"yml\"],\n			contains: MODES\n		};\n	}\n	// node_modules/highlight.js/es/languages/xml.js\n	/** @type LanguageFn */\n	function xml(hljs) {\n		const regex = hljs.regex;\n		const TAG_NAME_RE = regex.concat(/[\\p{L}_]/u, regex.optional(/[\\p{L}0-9_.-]*:/u), /[\\p{L}0-9_.-]*/u);\n		const XML_IDENT_RE = /[\\p{L}0-9._:-]+/u;\n		const XML_ENTITIES = {\n			className: \"symbol\",\n			begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/\n		};\n		const XML_META_KEYWORDS = {\n			begin: /\\s/,\n			contains: [{\n				className: \"keyword\",\n				begin: /#?[a-z_][a-z1-9_-]+/,\n				illegal: /\\n/\n			}]\n		};\n		const XML_META_PAR_KEYWORDS = hljs.inherit(XML_META_KEYWORDS, {\n			begin: /\\(/,\n			end: /\\)/\n		});\n		const APOS_META_STRING_MODE = hljs.inherit(hljs.APOS_STRING_MODE, { className: \"string\" });\n		const QUOTE_META_STRING_MODE = hljs.inherit(hljs.QUOTE_STRING_MODE, { className: \"string\" });\n		const TAG_INTERNALS = {\n			endsWithParent: true,\n			illegal: /</,\n			relevance: 0,\n			contains: [{\n				className: \"attr\",\n				begin: XML_IDENT_RE,\n				relevance: 0\n			}, {\n				begin: /=\\s*/,\n				relevance: 0,\n				contains: [{\n					className: \"string\",\n					endsParent: true,\n					variants: [\n						{\n							begin: /\"/,\n							end: /\"/,\n							contains: [XML_ENTITIES]\n						},\n						{\n							begin: /'/,\n							end: /'/,\n							contains: [XML_ENTITIES]\n						},\n						{ begin: /[^\\s\"'=<>`]+/ }\n					]\n				}]\n			}]\n		};\n		return {\n			name: \"HTML, XML\",\n			aliases: [\n				\"html\",\n				\"xhtml\",\n				\"rss\",\n				\"atom\",\n				\"xjb\",\n				\"xsd\",\n				\"xsl\",\n				\"plist\",\n				\"wsf\",\n				\"svg\"\n			],\n			case_insensitive: true,\n			unicodeRegex: true,\n			contains: [\n				{\n					className: \"meta\",\n					begin: /<![a-z]/,\n					end: />/,\n					relevance: 10,\n					contains: [\n						XML_META_KEYWORDS,\n						QUOTE_META_STRING_MODE,\n						APOS_META_STRING_MODE,\n						XML_META_PAR_KEYWORDS,\n						{\n							begin: /\\[/,\n							end: /\\]/,\n							contains: [{\n								className: \"meta\",\n								begin: /<![a-z]/,\n								end: />/,\n								contains: [\n									XML_META_KEYWORDS,\n									XML_META_PAR_KEYWORDS,\n									QUOTE_META_STRING_MODE,\n									APOS_META_STRING_MODE\n								]\n							}]\n						}\n					]\n				},\n				hljs.COMMENT(/<!--/, /-->/, { relevance: 10 }),\n				{\n					begin: /<!\\[CDATA\\[/,\n					end: /\\]\\]>/,\n					relevance: 10\n				},\n				XML_ENTITIES,\n				{\n					className: \"meta\",\n					end: /\\?>/,\n					variants: [{\n						begin: /<\\?xml/,\n						relevance: 10,\n						contains: [QUOTE_META_STRING_MODE]\n					}, { begin: /<\\?[a-z][a-z0-9]+/ }]\n				},\n				{\n					className: \"tag\",\n					begin: /<style(?=\\s|>)/,\n					end: />/,\n					keywords: { name: \"style\" },\n					contains: [TAG_INTERNALS],\n					starts: {\n						end: /<\\/style>/,\n						returnEnd: true,\n						subLanguage: [\"css\", \"xml\"]\n					}\n				},\n				{\n					className: \"tag\",\n					begin: /<script(?=\\s|>)/,\n					end: />/,\n					keywords: { name: \"script\" },\n					contains: [TAG_INTERNALS],\n					starts: {\n						end: /<\\/script>/,\n						returnEnd: true,\n						subLanguage: [\n							\"javascript\",\n							\"handlebars\",\n							\"xml\"\n						]\n					}\n				},\n				{\n					className: \"tag\",\n					begin: /<>|<\\/>/\n				},\n				{\n					className: \"tag\",\n					begin: regex.concat(/</, regex.lookahead(regex.concat(TAG_NAME_RE, regex.either(/\\/>/, />/, /\\s/)))),\n					end: /\\/?>/,\n					contains: [{\n						className: \"name\",\n						begin: TAG_NAME_RE,\n						relevance: 0,\n						starts: TAG_INTERNALS\n					}]\n				},\n				{\n					className: \"tag\",\n					begin: regex.concat(/<\\//, regex.lookahead(regex.concat(TAG_NAME_RE, />/))),\n					contains: [{\n						className: \"name\",\n						begin: TAG_NAME_RE,\n						relevance: 0\n					}, {\n						begin: />/,\n						relevance: 0,\n						endsParent: true\n					}]\n				}\n			]\n		};\n	}\n	// node_modules/highlight.js/es/languages/css.js\n	const MODES = (hljs) => {\n		return {\n			IMPORTANT: {\n				scope: \"meta\",\n				begin: \"!important\"\n			},\n			BLOCK_COMMENT: hljs.C_BLOCK_COMMENT_MODE,\n			HEXCOLOR: {\n				scope: \"number\",\n				begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\\b/\n			},\n			FUNCTION_DISPATCH: {\n				className: \"built_in\",\n				begin: /[\\w-]+(?=\\()/\n			},\n			ATTRIBUTE_SELECTOR_MODE: {\n				scope: \"selector-attr\",\n				begin: /\\[/,\n				end: /\\]/,\n				illegal: \"$\",\n				contains: [hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE]\n			},\n			CSS_NUMBER_MODE: {\n				scope: \"number\",\n				begin: hljs.NUMBER_RE + \"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?\",\n				relevance: 0\n			},\n			CSS_VARIABLE: {\n				className: \"attr\",\n				begin: /--[A-Za-z_][A-Za-z0-9_-]*/\n			}\n		};\n	};\n	const HTML_TAGS = [\n		\"a\",\n		\"abbr\",\n		\"address\",\n		\"article\",\n		\"aside\",\n		\"audio\",\n		\"b\",\n		\"blockquote\",\n		\"body\",\n		\"button\",\n		\"canvas\",\n		\"caption\",\n		\"cite\",\n		\"code\",\n		\"dd\",\n		\"del\",\n		\"details\",\n		\"dfn\",\n		\"div\",\n		\"dl\",\n		\"dt\",\n		\"em\",\n		\"fieldset\",\n		\"figcaption\",\n		\"figure\",\n		\"footer\",\n		\"form\",\n		\"h1\",\n		\"h2\",\n		\"h3\",\n		\"h4\",\n		\"h5\",\n		\"h6\",\n		\"header\",\n		\"hgroup\",\n		\"html\",\n		\"i\",\n		\"iframe\",\n		\"img\",\n		\"input\",\n		\"ins\",\n		\"kbd\",\n		\"label\",\n		\"legend\",\n		\"li\",\n		\"main\",\n		\"mark\",\n		\"menu\",\n		\"nav\",\n		\"object\",\n		\"ol\",\n		\"optgroup\",\n		\"option\",\n		\"p\",\n		\"picture\",\n		\"q\",\n		\"quote\",\n		\"samp\",\n		\"section\",\n		\"select\",\n		\"source\",\n		\"span\",\n		\"strong\",\n		\"summary\",\n		\"sup\",\n		\"table\",\n		\"tbody\",\n		\"td\",\n		\"textarea\",\n		\"tfoot\",\n		\"th\",\n		\"thead\",\n		\"time\",\n		\"tr\",\n		\"ul\",\n		\"var\",\n		\"video\"\n	];\n	const SVG_TAGS = [\n		\"defs\",\n		\"g\",\n		\"marker\",\n		\"mask\",\n		\"pattern\",\n		\"svg\",\n		\"switch\",\n		\"symbol\",\n		\"feBlend\",\n		\"feColorMatrix\",\n		\"feComponentTransfer\",\n		\"feComposite\",\n		\"feConvolveMatrix\",\n		\"feDiffuseLighting\",\n		\"feDisplacementMap\",\n		\"feFlood\",\n		\"feGaussianBlur\",\n		\"feImage\",\n		\"feMerge\",\n		\"feMorphology\",\n		\"feOffset\",\n		\"feSpecularLighting\",\n		\"feTile\",\n		\"feTurbulence\",\n		\"linearGradient\",\n		\"radialGradient\",\n		\"stop\",\n		\"circle\",\n		\"ellipse\",\n		\"image\",\n		\"line\",\n		\"path\",\n		\"polygon\",\n		\"polyline\",\n		\"rect\",\n		\"text\",\n		\"use\",\n		\"textPath\",\n		\"tspan\",\n		\"foreignObject\",\n		\"clipPath\"\n	];\n	const TAGS = [...HTML_TAGS, ...SVG_TAGS];\n	const MEDIA_FEATURES = [\n		\"any-hover\",\n		\"any-pointer\",\n		\"aspect-ratio\",\n		\"color\",\n		\"color-gamut\",\n		\"color-index\",\n		\"device-aspect-ratio\",\n		\"device-height\",\n		\"device-width\",\n		\"display-mode\",\n		\"forced-colors\",\n		\"grid\",\n		\"height\",\n		\"hover\",\n		\"inverted-colors\",\n		\"monochrome\",\n		\"orientation\",\n		\"overflow-block\",\n		\"overflow-inline\",\n		\"pointer\",\n		\"prefers-color-scheme\",\n		\"prefers-contrast\",\n		\"prefers-reduced-motion\",\n		\"prefers-reduced-transparency\",\n		\"resolution\",\n		\"scan\",\n		\"scripting\",\n		\"update\",\n		\"width\",\n		\"min-width\",\n		\"max-width\",\n		\"min-height\",\n		\"max-height\"\n	].sort().reverse();\n	const PSEUDO_CLASSES = [\n		\"active\",\n		\"any-link\",\n		\"blank\",\n		\"checked\",\n		\"current\",\n		\"default\",\n		\"defined\",\n		\"dir\",\n		\"disabled\",\n		\"drop\",\n		\"empty\",\n		\"enabled\",\n		\"first\",\n		\"first-child\",\n		\"first-of-type\",\n		\"fullscreen\",\n		\"future\",\n		\"focus\",\n		\"focus-visible\",\n		\"focus-within\",\n		\"has\",\n		\"host\",\n		\"host-context\",\n		\"hover\",\n		\"indeterminate\",\n		\"in-range\",\n		\"invalid\",\n		\"is\",\n		\"lang\",\n		\"last-child\",\n		\"last-of-type\",\n		\"left\",\n		\"link\",\n		\"local-link\",\n		\"not\",\n		\"nth-child\",\n		\"nth-col\",\n		\"nth-last-child\",\n		\"nth-last-col\",\n		\"nth-last-of-type\",\n		\"nth-of-type\",\n		\"only-child\",\n		\"only-of-type\",\n		\"optional\",\n		\"out-of-range\",\n		\"past\",\n		\"placeholder-shown\",\n		\"read-only\",\n		\"read-write\",\n		\"required\",\n		\"right\",\n		\"root\",\n		\"scope\",\n		\"target\",\n		\"target-within\",\n		\"user-invalid\",\n		\"valid\",\n		\"visited\",\n		\"where\"\n	].sort().reverse();\n	const PSEUDO_ELEMENTS = [\n		\"after\",\n		\"backdrop\",\n		\"before\",\n		\"cue\",\n		\"cue-region\",\n		\"first-letter\",\n		\"first-line\",\n		\"grammar-error\",\n		\"marker\",\n		\"part\",\n		\"placeholder\",\n		\"selection\",\n		\"slotted\",\n		\"spelling-error\"\n	].sort().reverse();\n	const ATTRIBUTES = [\n		\"accent-color\",\n		\"align-content\",\n		\"align-items\",\n		\"align-self\",\n		\"alignment-baseline\",\n		\"all\",\n		\"anchor-name\",\n		\"animation\",\n		\"animation-composition\",\n		\"animation-delay\",\n		\"animation-direction\",\n		\"animation-duration\",\n		\"animation-fill-mode\",\n		\"animation-iteration-count\",\n		\"animation-name\",\n		\"animation-play-state\",\n		\"animation-range\",\n		\"animation-range-end\",\n		\"animation-range-start\",\n		\"animation-timeline\",\n		\"animation-timing-function\",\n		\"appearance\",\n		\"aspect-ratio\",\n		\"backdrop-filter\",\n		\"backface-visibility\",\n		\"background\",\n		\"background-attachment\",\n		\"background-blend-mode\",\n		\"background-clip\",\n		\"background-color\",\n		\"background-image\",\n		\"background-origin\",\n		\"background-position\",\n		\"background-position-x\",\n		\"background-position-y\",\n		\"background-repeat\",\n		\"background-size\",\n		\"baseline-shift\",\n		\"block-size\",\n		\"border\",\n		\"border-block\",\n		\"border-block-color\",\n		\"border-block-end\",\n		\"border-block-end-color\",\n		\"border-block-end-style\",\n		\"border-block-end-width\",\n		\"border-block-start\",\n		\"border-block-start-color\",\n		\"border-block-start-style\",\n		\"border-block-start-width\",\n		\"border-block-style\",\n		\"border-block-width\",\n		\"border-bottom\",\n		\"border-bottom-color\",\n		\"border-bottom-left-radius\",\n		\"border-bottom-right-radius\",\n		\"border-bottom-style\",\n		\"border-bottom-width\",\n		\"border-collapse\",\n		\"border-color\",\n		\"border-end-end-radius\",\n		\"border-end-start-radius\",\n		\"border-image\",\n		\"border-image-outset\",\n		\"border-image-repeat\",\n		\"border-image-slice\",\n		\"border-image-source\",\n		\"border-image-width\",\n		\"border-inline\",\n		\"border-inline-color\",\n		\"border-inline-end\",\n		\"border-inline-end-color\",\n		\"border-inline-end-style\",\n		\"border-inline-end-width\",\n		\"border-inline-start\",\n		\"border-inline-start-color\",\n		\"border-inline-start-style\",\n		\"border-inline-start-width\",\n		\"border-inline-style\",\n		\"border-inline-width\",\n		\"border-left\",\n		\"border-left-color\",\n		\"border-left-style\",\n		\"border-left-width\",\n		\"border-radius\",\n		\"border-right\",\n		\"border-right-color\",\n		\"border-right-style\",\n		\"border-right-width\",\n		\"border-spacing\",\n		\"border-start-end-radius\",\n		\"border-start-start-radius\",\n		\"border-style\",\n		\"border-top\",\n		\"border-top-color\",\n		\"border-top-left-radius\",\n		\"border-top-right-radius\",\n		\"border-top-style\",\n		\"border-top-width\",\n		\"border-width\",\n		\"bottom\",\n		\"box-align\",\n		\"box-decoration-break\",\n		\"box-direction\",\n		\"box-flex\",\n		\"box-flex-group\",\n		\"box-lines\",\n		\"box-ordinal-group\",\n		\"box-orient\",\n		\"box-pack\",\n		\"box-shadow\",\n		\"box-sizing\",\n		\"break-after\",\n		\"break-before\",\n		\"break-inside\",\n		\"caption-side\",\n		\"caret-color\",\n		\"clear\",\n		\"clip\",\n		\"clip-path\",\n		\"clip-rule\",\n		\"color\",\n		\"color-interpolation\",\n		\"color-interpolation-filters\",\n		\"color-profile\",\n		\"color-rendering\",\n		\"color-scheme\",\n		\"column-count\",\n		\"column-fill\",\n		\"column-gap\",\n		\"column-rule\",\n		\"column-rule-color\",\n		\"column-rule-style\",\n		\"column-rule-width\",\n		\"column-span\",\n		\"column-width\",\n		\"columns\",\n		\"contain\",\n		\"contain-intrinsic-block-size\",\n		\"contain-intrinsic-height\",\n		\"contain-intrinsic-inline-size\",\n		\"contain-intrinsic-size\",\n		\"contain-intrinsic-width\",\n		\"container\",\n		\"container-name\",\n		\"container-type\",\n		\"content\",\n		\"content-visibility\",\n		\"counter-increment\",\n		\"counter-reset\",\n		\"counter-set\",\n		\"cue\",\n		\"cue-after\",\n		\"cue-before\",\n		\"cursor\",\n		\"cx\",\n		\"cy\",\n		\"direction\",\n		\"display\",\n		\"dominant-baseline\",\n		\"empty-cells\",\n		\"enable-background\",\n		\"field-sizing\",\n		\"fill\",\n		\"fill-opacity\",\n		\"fill-rule\",\n		\"filter\",\n		\"flex\",\n		\"flex-basis\",\n		\"flex-direction\",\n		\"flex-flow\",\n		\"flex-grow\",\n		\"flex-shrink\",\n		\"flex-wrap\",\n		\"float\",\n		\"flood-color\",\n		\"flood-opacity\",\n		\"flow\",\n		\"font\",\n		\"font-display\",\n		\"font-family\",\n		\"font-feature-settings\",\n		\"font-kerning\",\n		\"font-language-override\",\n		\"font-optical-sizing\",\n		\"font-palette\",\n		\"font-size\",\n		\"font-size-adjust\",\n		\"font-smooth\",\n		\"font-smoothing\",\n		\"font-stretch\",\n		\"font-style\",\n		\"font-synthesis\",\n		\"font-synthesis-position\",\n		\"font-synthesis-small-caps\",\n		\"font-synthesis-style\",\n		\"font-synthesis-weight\",\n		\"font-variant\",\n		\"font-variant-alternates\",\n		\"font-variant-caps\",\n		\"font-variant-east-asian\",\n		\"font-variant-emoji\",\n		\"font-variant-ligatures\",\n		\"font-variant-numeric\",\n		\"font-variant-position\",\n		\"font-variation-settings\",\n		\"font-weight\",\n		\"forced-color-adjust\",\n		\"gap\",\n		\"glyph-orientation-horizontal\",\n		\"glyph-orientation-vertical\",\n		\"grid\",\n		\"grid-area\",\n		\"grid-auto-columns\",\n		\"grid-auto-flow\",\n		\"grid-auto-rows\",\n		\"grid-column\",\n		\"grid-column-end\",\n		\"grid-column-start\",\n		\"grid-gap\",\n		\"grid-row\",\n		\"grid-row-end\",\n		\"grid-row-start\",\n		\"grid-template\",\n		\"grid-template-areas\",\n		\"grid-template-columns\",\n		\"grid-template-rows\",\n		\"hanging-punctuation\",\n		\"height\",\n		\"hyphenate-character\",\n		\"hyphenate-limit-chars\",\n		\"hyphens\",\n		\"icon\",\n		\"image-orientation\",\n		\"image-rendering\",\n		\"image-resolution\",\n		\"ime-mode\",\n		\"initial-letter\",\n		\"initial-letter-align\",\n		\"inline-size\",\n		\"inset\",\n		\"inset-area\",\n		\"inset-block\",\n		\"inset-block-end\",\n		\"inset-block-start\",\n		\"inset-inline\",\n		\"inset-inline-end\",\n		\"inset-inline-start\",\n		\"isolation\",\n		\"justify-content\",\n		\"justify-items\",\n		\"justify-self\",\n		\"kerning\",\n		\"left\",\n		\"letter-spacing\",\n		\"lighting-color\",\n		\"line-break\",\n		\"line-height\",\n		\"line-height-step\",\n		\"list-style\",\n		\"list-style-image\",\n		\"list-style-position\",\n		\"list-style-type\",\n		\"margin\",\n		\"margin-block\",\n		\"margin-block-end\",\n		\"margin-block-start\",\n		\"margin-bottom\",\n		\"margin-inline\",\n		\"margin-inline-end\",\n		\"margin-inline-start\",\n		\"margin-left\",\n		\"margin-right\",\n		\"margin-top\",\n		\"margin-trim\",\n		\"marker\",\n		\"marker-end\",\n		\"marker-mid\",\n		\"marker-start\",\n		\"marks\",\n		\"mask\",\n		\"mask-border\",\n		\"mask-border-mode\",\n		\"mask-border-outset\",\n		\"mask-border-repeat\",\n		\"mask-border-slice\",\n		\"mask-border-source\",\n		\"mask-border-width\",\n		\"mask-clip\",\n		\"mask-composite\",\n		\"mask-image\",\n		\"mask-mode\",\n		\"mask-origin\",\n		\"mask-position\",\n		\"mask-repeat\",\n		\"mask-size\",\n		\"mask-type\",\n		\"masonry-auto-flow\",\n		\"math-depth\",\n		\"math-shift\",\n		\"math-style\",\n		\"max-block-size\",\n		\"max-height\",\n		\"max-inline-size\",\n		\"max-width\",\n		\"min-block-size\",\n		\"min-height\",\n		\"min-inline-size\",\n		\"min-width\",\n		\"mix-blend-mode\",\n		\"nav-down\",\n		\"nav-index\",\n		\"nav-left\",\n		\"nav-right\",\n		\"nav-up\",\n		\"none\",\n		\"normal\",\n		\"object-fit\",\n		\"object-position\",\n		\"offset\",\n		\"offset-anchor\",\n		\"offset-distance\",\n		\"offset-path\",\n		\"offset-position\",\n		\"offset-rotate\",\n		\"opacity\",\n		\"order\",\n		\"orphans\",\n		\"outline\",\n		\"outline-color\",\n		\"outline-offset\",\n		\"outline-style\",\n		\"outline-width\",\n		\"overflow\",\n		\"overflow-anchor\",\n		\"overflow-block\",\n		\"overflow-clip-margin\",\n		\"overflow-inline\",\n		\"overflow-wrap\",\n		\"overflow-x\",\n		\"overflow-y\",\n		\"overlay\",\n		\"overscroll-behavior\",\n		\"overscroll-behavior-block\",\n		\"overscroll-behavior-inline\",\n		\"overscroll-behavior-x\",\n		\"overscroll-behavior-y\",\n		\"padding\",\n		\"padding-block\",\n		\"padding-block-end\",\n		\"padding-block-start\",\n		\"padding-bottom\",\n		\"padding-inline\",\n		\"padding-inline-end\",\n		\"padding-inline-start\",\n		\"padding-left\",\n		\"padding-right\",\n		\"padding-top\",\n		\"page\",\n		\"page-break-after\",\n		\"page-break-before\",\n		\"page-break-inside\",\n		\"paint-order\",\n		\"pause\",\n		\"pause-after\",\n		\"pause-before\",\n		\"perspective\",\n		\"perspective-origin\",\n		\"place-content\",\n		\"place-items\",\n		\"place-self\",\n		\"pointer-events\",\n		\"position\",\n		\"position-anchor\",\n		\"position-visibility\",\n		\"print-color-adjust\",\n		\"quotes\",\n		\"r\",\n		\"resize\",\n		\"rest\",\n		\"rest-after\",\n		\"rest-before\",\n		\"right\",\n		\"rotate\",\n		\"row-gap\",\n		\"ruby-align\",\n		\"ruby-position\",\n		\"scale\",\n		\"scroll-behavior\",\n		\"scroll-margin\",\n		\"scroll-margin-block\",\n		\"scroll-margin-block-end\",\n		\"scroll-margin-block-start\",\n		\"scroll-margin-bottom\",\n		\"scroll-margin-inline\",\n		\"scroll-margin-inline-end\",\n		\"scroll-margin-inline-start\",\n		\"scroll-margin-left\",\n		\"scroll-margin-right\",\n		\"scroll-margin-top\",\n		\"scroll-padding\",\n		\"scroll-padding-block\",\n		\"scroll-padding-block-end\",\n		\"scroll-padding-block-start\",\n		\"scroll-padding-bottom\",\n		\"scroll-padding-inline\",\n		\"scroll-padding-inline-end\",\n		\"scroll-padding-inline-start\",\n		\"scroll-padding-left\",\n		\"scroll-padding-right\",\n		\"scroll-padding-top\",\n		\"scroll-snap-align\",\n		\"scroll-snap-stop\",\n		\"scroll-snap-type\",\n		\"scroll-timeline\",\n		\"scroll-timeline-axis\",\n		\"scroll-timeline-name\",\n		\"scrollbar-color\",\n		\"scrollbar-gutter\",\n		\"scrollbar-width\",\n		\"shape-image-threshold\",\n		\"shape-margin\",\n		\"shape-outside\",\n		\"shape-rendering\",\n		\"speak\",\n		\"speak-as\",\n		\"src\",\n		\"stop-color\",\n		\"stop-opacity\",\n		\"stroke\",\n		\"stroke-dasharray\",\n		\"stroke-dashoffset\",\n		\"stroke-linecap\",\n		\"stroke-linejoin\",\n		\"stroke-miterlimit\",\n		\"stroke-opacity\",\n		\"stroke-width\",\n		\"tab-size\",\n		\"table-layout\",\n		\"text-align\",\n		\"text-align-all\",\n		\"text-align-last\",\n		\"text-anchor\",\n		\"text-combine-upright\",\n		\"text-decoration\",\n		\"text-decoration-color\",\n		\"text-decoration-line\",\n		\"text-decoration-skip\",\n		\"text-decoration-skip-ink\",\n		\"text-decoration-style\",\n		\"text-decoration-thickness\",\n		\"text-emphasis\",\n		\"text-emphasis-color\",\n		\"text-emphasis-position\",\n		\"text-emphasis-style\",\n		\"text-indent\",\n		\"text-justify\",\n		\"text-orientation\",\n		\"text-overflow\",\n		\"text-rendering\",\n		\"text-shadow\",\n		\"text-size-adjust\",\n		\"text-transform\",\n		\"text-underline-offset\",\n		\"text-underline-position\",\n		\"text-wrap\",\n		\"text-wrap-mode\",\n		\"text-wrap-style\",\n		\"timeline-scope\",\n		\"top\",\n		\"touch-action\",\n		\"transform\",\n		\"transform-box\",\n		\"transform-origin\",\n		\"transform-style\",\n		\"transition\",\n		\"transition-behavior\",\n		\"transition-delay\",\n		\"transition-duration\",\n		\"transition-property\",\n		\"transition-timing-function\",\n		\"translate\",\n		\"unicode-bidi\",\n		\"user-modify\",\n		\"user-select\",\n		\"vector-effect\",\n		\"vertical-align\",\n		\"view-timeline\",\n		\"view-timeline-axis\",\n		\"view-timeline-inset\",\n		\"view-timeline-name\",\n		\"view-transition-name\",\n		\"visibility\",\n		\"voice-balance\",\n		\"voice-duration\",\n		\"voice-family\",\n		\"voice-pitch\",\n		\"voice-range\",\n		\"voice-rate\",\n		\"voice-stress\",\n		\"voice-volume\",\n		\"white-space\",\n		\"white-space-collapse\",\n		\"widows\",\n		\"width\",\n		\"will-change\",\n		\"word-break\",\n		\"word-spacing\",\n		\"word-wrap\",\n		\"writing-mode\",\n		\"x\",\n		\"y\",\n		\"z-index\",\n		\"zoom\"\n	].sort().reverse();\n	/** @type LanguageFn */\n	function css(hljs) {\n		const regex = hljs.regex;\n		const modes = MODES(hljs);\n		const VENDOR_PREFIX = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ };\n		const AT_MODIFIERS = \"and or not only\";\n		const AT_PROPERTY_RE = /@-?\\w[\\w]*(-\\w+)*/;\n		const STRINGS = [hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE];\n		return {\n			name: \"CSS\",\n			case_insensitive: true,\n			illegal: /[=|'\\$]/,\n			keywords: { keyframePosition: \"from to\" },\n			classNameAliases: { keyframePosition: \"selector-tag\" },\n			contains: [\n				modes.BLOCK_COMMENT,\n				VENDOR_PREFIX,\n				modes.CSS_NUMBER_MODE,\n				{\n					className: \"selector-id\",\n					begin: /#[A-Za-z0-9_-]+/,\n					relevance: 0\n				},\n				{\n					className: \"selector-class\",\n					begin: \"\\\\.[a-zA-Z-][a-zA-Z0-9_-]*\",\n					relevance: 0\n				},\n				modes.ATTRIBUTE_SELECTOR_MODE,\n				{\n					className: \"selector-pseudo\",\n					variants: [{ begin: \":(\" + PSEUDO_CLASSES.join(\"|\") + \")\" }, { begin: \":(:)?(\" + PSEUDO_ELEMENTS.join(\"|\") + \")\" }]\n				},\n				modes.CSS_VARIABLE,\n				{\n					className: \"attribute\",\n					begin: \"\\\\b(\" + ATTRIBUTES.join(\"|\") + \")\\\\b\"\n				},\n				{\n					begin: /:/,\n					end: /[;}{]/,\n					contains: [\n						modes.BLOCK_COMMENT,\n						modes.HEXCOLOR,\n						modes.IMPORTANT,\n						modes.CSS_NUMBER_MODE,\n						...STRINGS,\n						{\n							begin: /(url|data-uri)\\(/,\n							end: /\\)/,\n							relevance: 0,\n							keywords: { built_in: \"url data-uri\" },\n							contains: [...STRINGS, {\n								className: \"string\",\n								begin: /[^)]/,\n								endsWithParent: true,\n								excludeEnd: true\n							}]\n						},\n						modes.FUNCTION_DISPATCH\n					]\n				},\n				{\n					begin: regex.lookahead(/@/),\n					end: \"[{;]\",\n					relevance: 0,\n					illegal: /:/,\n					contains: [{\n						className: \"keyword\",\n						begin: AT_PROPERTY_RE\n					}, {\n						begin: /\\s/,\n						endsWithParent: true,\n						excludeEnd: true,\n						relevance: 0,\n						keywords: {\n							$pattern: /[a-z-]+/,\n							keyword: AT_MODIFIERS,\n							attribute: MEDIA_FEATURES.join(\" \")\n						},\n						contains: [\n							{\n								begin: /[a-z-]+(?=:)/,\n								className: \"attribute\"\n							},\n							...STRINGS,\n							modes.CSS_NUMBER_MODE\n						]\n					}]\n				},\n				{\n					className: \"selector-tag\",\n					begin: \"\\\\b(\" + TAGS.join(\"|\") + \")\\\\b\"\n				}\n			]\n		};\n	}\n	// node_modules/highlight.js/es/languages/sql.js\n	function sql(hljs) {\n		const regex = hljs.regex;\n		const COMMENT_MODE = hljs.COMMENT(\"--\", \"$\");\n		const STRING = {\n			scope: \"string\",\n			variants: [{\n				begin: /'/,\n				end: /'/,\n				contains: [{ match: /''/ }]\n			}]\n		};\n		const QUOTED_IDENTIFIER = {\n			begin: /\"/,\n			end: /\"/,\n			contains: [{ match: /\"\"/ }]\n		};\n		const LITERALS = [\n			\"true\",\n			\"false\",\n			\"unknown\"\n		];\n		const MULTI_WORD_TYPES = [\n			\"double precision\",\n			\"large object\",\n			\"with timezone\",\n			\"without timezone\"\n		];\n		const TYPES = [\n			\"bigint\",\n			\"binary\",\n			\"blob\",\n			\"boolean\",\n			\"char\",\n			\"character\",\n			\"clob\",\n			\"date\",\n			\"dec\",\n			\"decfloat\",\n			\"decimal\",\n			\"float\",\n			\"int\",\n			\"integer\",\n			\"interval\",\n			\"nchar\",\n			\"nclob\",\n			\"national\",\n			\"numeric\",\n			\"real\",\n			\"row\",\n			\"smallint\",\n			\"time\",\n			\"timestamp\",\n			\"varchar\",\n			\"varying\",\n			\"varbinary\"\n		];\n		const NON_RESERVED_WORDS = [\n			\"add\",\n			\"asc\",\n			\"collation\",\n			\"desc\",\n			\"final\",\n			\"first\",\n			\"last\",\n			\"view\"\n		];\n		const RESERVED_WORDS = [\n			\"abs\",\n			\"acos\",\n			\"all\",\n			\"allocate\",\n			\"alter\",\n			\"and\",\n			\"any\",\n			\"are\",\n			\"array\",\n			\"array_agg\",\n			\"array_max_cardinality\",\n			\"as\",\n			\"asensitive\",\n			\"asin\",\n			\"asymmetric\",\n			\"at\",\n			\"atan\",\n			\"atomic\",\n			\"authorization\",\n			\"avg\",\n			\"begin\",\n			\"begin_frame\",\n			\"begin_partition\",\n			\"between\",\n			\"bigint\",\n			\"binary\",\n			\"blob\",\n			\"boolean\",\n			\"both\",\n			\"by\",\n			\"call\",\n			\"called\",\n			\"cardinality\",\n			\"cascaded\",\n			\"case\",\n			\"cast\",\n			\"ceil\",\n			\"ceiling\",\n			\"char\",\n			\"char_length\",\n			\"character\",\n			\"character_length\",\n			\"check\",\n			\"classifier\",\n			\"clob\",\n			\"close\",\n			\"coalesce\",\n			\"collate\",\n			\"collect\",\n			\"column\",\n			\"commit\",\n			\"condition\",\n			\"connect\",\n			\"constraint\",\n			\"contains\",\n			\"convert\",\n			\"copy\",\n			\"corr\",\n			\"corresponding\",\n			\"cos\",\n			\"cosh\",\n			\"count\",\n			\"covar_pop\",\n			\"covar_samp\",\n			\"create\",\n			\"cross\",\n			\"cube\",\n			\"cume_dist\",\n			\"current\",\n			\"current_catalog\",\n			\"current_date\",\n			\"current_default_transform_group\",\n			\"current_path\",\n			\"current_role\",\n			\"current_row\",\n			\"current_schema\",\n			\"current_time\",\n			\"current_timestamp\",\n			\"current_path\",\n			\"current_role\",\n			\"current_transform_group_for_type\",\n			\"current_user\",\n			\"cursor\",\n			\"cycle\",\n			\"date\",\n			\"day\",\n			\"deallocate\",\n			\"dec\",\n			\"decimal\",\n			\"decfloat\",\n			\"declare\",\n			\"default\",\n			\"define\",\n			\"delete\",\n			\"dense_rank\",\n			\"deref\",\n			\"describe\",\n			\"deterministic\",\n			\"disconnect\",\n			\"distinct\",\n			\"double\",\n			\"drop\",\n			\"dynamic\",\n			\"each\",\n			\"element\",\n			\"else\",\n			\"empty\",\n			\"end\",\n			\"end_frame\",\n			\"end_partition\",\n			\"end-exec\",\n			\"equals\",\n			\"escape\",\n			\"every\",\n			\"except\",\n			\"exec\",\n			\"execute\",\n			\"exists\",\n			\"exp\",\n			\"external\",\n			\"extract\",\n			\"false\",\n			\"fetch\",\n			\"filter\",\n			\"first_value\",\n			\"float\",\n			\"floor\",\n			\"for\",\n			\"foreign\",\n			\"frame_row\",\n			\"free\",\n			\"from\",\n			\"full\",\n			\"function\",\n			\"fusion\",\n			\"get\",\n			\"global\",\n			\"grant\",\n			\"group\",\n			\"grouping\",\n			\"groups\",\n			\"having\",\n			\"hold\",\n			\"hour\",\n			\"identity\",\n			\"in\",\n			\"indicator\",\n			\"initial\",\n			\"inner\",\n			\"inout\",\n			\"insensitive\",\n			\"insert\",\n			\"int\",\n			\"integer\",\n			\"intersect\",\n			\"intersection\",\n			\"interval\",\n			\"into\",\n			\"is\",\n			\"join\",\n			\"json_array\",\n			\"json_arrayagg\",\n			\"json_exists\",\n			\"json_object\",\n			\"json_objectagg\",\n			\"json_query\",\n			\"json_table\",\n			\"json_table_primitive\",\n			\"json_value\",\n			\"lag\",\n			\"language\",\n			\"large\",\n			\"last_value\",\n			\"lateral\",\n			\"lead\",\n			\"leading\",\n			\"left\",\n			\"like\",\n			\"like_regex\",\n			\"listagg\",\n			\"ln\",\n			\"local\",\n			\"localtime\",\n			\"localtimestamp\",\n			\"log\",\n			\"log10\",\n			\"lower\",\n			\"match\",\n			\"match_number\",\n			\"match_recognize\",\n			\"matches\",\n			\"max\",\n			\"member\",\n			\"merge\",\n			\"method\",\n			\"min\",\n			\"minute\",\n			\"mod\",\n			\"modifies\",\n			\"module\",\n			\"month\",\n			\"multiset\",\n			\"national\",\n			\"natural\",\n			\"nchar\",\n			\"nclob\",\n			\"new\",\n			\"no\",\n			\"none\",\n			\"normalize\",\n			\"not\",\n			\"nth_value\",\n			\"ntile\",\n			\"null\",\n			\"nullif\",\n			\"numeric\",\n			\"octet_length\",\n			\"occurrences_regex\",\n			\"of\",\n			\"offset\",\n			\"old\",\n			\"omit\",\n			\"on\",\n			\"one\",\n			\"only\",\n			\"open\",\n			\"or\",\n			\"order\",\n			\"out\",\n			\"outer\",\n			\"over\",\n			\"overlaps\",\n			\"overlay\",\n			\"parameter\",\n			\"partition\",\n			\"pattern\",\n			\"per\",\n			\"percent\",\n			\"percent_rank\",\n			\"percentile_cont\",\n			\"percentile_disc\",\n			\"period\",\n			\"portion\",\n			\"position\",\n			\"position_regex\",\n			\"power\",\n			\"precedes\",\n			\"precision\",\n			\"prepare\",\n			\"primary\",\n			\"procedure\",\n			\"ptf\",\n			\"range\",\n			\"rank\",\n			\"reads\",\n			\"real\",\n			\"recursive\",\n			\"ref\",\n			\"references\",\n			\"referencing\",\n			\"regr_avgx\",\n			\"regr_avgy\",\n			\"regr_count\",\n			\"regr_intercept\",\n			\"regr_r2\",\n			\"regr_slope\",\n			\"regr_sxx\",\n			\"regr_sxy\",\n			\"regr_syy\",\n			\"release\",\n			\"result\",\n			\"return\",\n			\"returns\",\n			\"revoke\",\n			\"right\",\n			\"rollback\",\n			\"rollup\",\n			\"row\",\n			\"row_number\",\n			\"rows\",\n			\"running\",\n			\"savepoint\",\n			\"scope\",\n			\"scroll\",\n			\"search\",\n			\"second\",\n			\"seek\",\n			\"select\",\n			\"sensitive\",\n			\"session_user\",\n			\"set\",\n			\"show\",\n			\"similar\",\n			\"sin\",\n			\"sinh\",\n			\"skip\",\n			\"smallint\",\n			\"some\",\n			\"specific\",\n			\"specifictype\",\n			\"sql\",\n			\"sqlexception\",\n			\"sqlstate\",\n			\"sqlwarning\",\n			\"sqrt\",\n			\"start\",\n			\"static\",\n			\"stddev_pop\",\n			\"stddev_samp\",\n			\"submultiset\",\n			\"subset\",\n			\"substring\",\n			\"substring_regex\",\n			\"succeeds\",\n			\"sum\",\n			\"symmetric\",\n			\"system\",\n			\"system_time\",\n			\"system_user\",\n			\"table\",\n			\"tablesample\",\n			\"tan\",\n			\"tanh\",\n			\"then\",\n			\"time\",\n			\"timestamp\",\n			\"timezone_hour\",\n			\"timezone_minute\",\n			\"to\",\n			\"trailing\",\n			\"translate\",\n			\"translate_regex\",\n			\"translation\",\n			\"treat\",\n			\"trigger\",\n			\"trim\",\n			\"trim_array\",\n			\"true\",\n			\"truncate\",\n			\"uescape\",\n			\"union\",\n			\"unique\",\n			\"unknown\",\n			\"unnest\",\n			\"update\",\n			\"upper\",\n			\"user\",\n			\"using\",\n			\"value\",\n			\"values\",\n			\"value_of\",\n			\"var_pop\",\n			\"var_samp\",\n			\"varbinary\",\n			\"varchar\",\n			\"varying\",\n			\"versioning\",\n			\"when\",\n			\"whenever\",\n			\"where\",\n			\"width_bucket\",\n			\"window\",\n			\"with\",\n			\"within\",\n			\"without\",\n			\"year\"\n		];\n		const RESERVED_FUNCTIONS = [\n			\"abs\",\n			\"acos\",\n			\"array_agg\",\n			\"asin\",\n			\"atan\",\n			\"avg\",\n			\"cast\",\n			\"ceil\",\n			\"ceiling\",\n			\"coalesce\",\n			\"corr\",\n			\"cos\",\n			\"cosh\",\n			\"count\",\n			\"covar_pop\",\n			\"covar_samp\",\n			\"cume_dist\",\n			\"dense_rank\",\n			\"deref\",\n			\"element\",\n			\"exp\",\n			\"extract\",\n			\"first_value\",\n			\"floor\",\n			\"json_array\",\n			\"json_arrayagg\",\n			\"json_exists\",\n			\"json_object\",\n			\"json_objectagg\",\n			\"json_query\",\n			\"json_table\",\n			\"json_table_primitive\",\n			\"json_value\",\n			\"lag\",\n			\"last_value\",\n			\"lead\",\n			\"listagg\",\n			\"ln\",\n			\"log\",\n			\"log10\",\n			\"lower\",\n			\"max\",\n			\"min\",\n			\"mod\",\n			\"nth_value\",\n			\"ntile\",\n			\"nullif\",\n			\"percent_rank\",\n			\"percentile_cont\",\n			\"percentile_disc\",\n			\"position\",\n			\"position_regex\",\n			\"power\",\n			\"rank\",\n			\"regr_avgx\",\n			\"regr_avgy\",\n			\"regr_count\",\n			\"regr_intercept\",\n			\"regr_r2\",\n			\"regr_slope\",\n			\"regr_sxx\",\n			\"regr_sxy\",\n			\"regr_syy\",\n			\"row_number\",\n			\"sin\",\n			\"sinh\",\n			\"sqrt\",\n			\"stddev_pop\",\n			\"stddev_samp\",\n			\"substring\",\n			\"substring_regex\",\n			\"sum\",\n			\"tan\",\n			\"tanh\",\n			\"translate\",\n			\"translate_regex\",\n			\"treat\",\n			\"trim\",\n			\"trim_array\",\n			\"unnest\",\n			\"upper\",\n			\"value_of\",\n			\"var_pop\",\n			\"var_samp\",\n			\"width_bucket\"\n		];\n		const POSSIBLE_WITHOUT_PARENS = [\n			\"current_catalog\",\n			\"current_date\",\n			\"current_default_transform_group\",\n			\"current_path\",\n			\"current_role\",\n			\"current_schema\",\n			\"current_transform_group_for_type\",\n			\"current_user\",\n			\"session_user\",\n			\"system_time\",\n			\"system_user\",\n			\"current_time\",\n			\"localtime\",\n			\"current_timestamp\",\n			\"localtimestamp\"\n		];\n		const COMBOS = [\n			\"create table\",\n			\"insert into\",\n			\"primary key\",\n			\"foreign key\",\n			\"not null\",\n			\"alter table\",\n			\"add constraint\",\n			\"grouping sets\",\n			\"on overflow\",\n			\"character set\",\n			\"respect nulls\",\n			\"ignore nulls\",\n			\"nulls first\",\n			\"nulls last\",\n			\"depth first\",\n			\"breadth first\"\n		];\n		const FUNCTIONS = RESERVED_FUNCTIONS;\n		const KEYWORDS = [...RESERVED_WORDS, ...NON_RESERVED_WORDS].filter((keyword) => {\n			return !RESERVED_FUNCTIONS.includes(keyword);\n		});\n		const VARIABLE = {\n			scope: \"variable\",\n			match: /@[a-z0-9][a-z0-9_]*/\n		};\n		const OPERATOR = {\n			scope: \"operator\",\n			match: /[-+*/=%^~]|&&?|\\|\\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,\n			relevance: 0\n		};\n		const FUNCTION_CALL = {\n			match: regex.concat(/\\b/, regex.either(...FUNCTIONS), /\\s*\\(/),\n			relevance: 0,\n			keywords: { built_in: FUNCTIONS }\n		};\n		function kws_to_regex(list) {\n			return regex.concat(/\\b/, regex.either(...list.map((kw) => {\n				return kw.replace(/\\s+/, \"\\\\s+\");\n			})), /\\b/);\n		}\n		const MULTI_WORD_KEYWORDS = {\n			scope: \"keyword\",\n			match: kws_to_regex(COMBOS),\n			relevance: 0\n		};\n		function reduceRelevancy(list, { exceptions, when } = {}) {\n			const qualifyFn = when;\n			exceptions = exceptions || [];\n			return list.map((item) => {\n				if (item.match(/\\|\\d+$/) || exceptions.includes(item)) return item;\n				else if (qualifyFn(item)) return `${item}|0`;\n				else return item;\n			});\n		}\n		return {\n			name: \"SQL\",\n			case_insensitive: true,\n			illegal: /[{}]|<\\//,\n			keywords: {\n				$pattern: /\\b[\\w\\.]+/,\n				keyword: reduceRelevancy(KEYWORDS, { when: (x) => x.length < 3 }),\n				literal: LITERALS,\n				type: TYPES,\n				built_in: POSSIBLE_WITHOUT_PARENS\n			},\n			contains: [\n				{\n					scope: \"type\",\n					match: kws_to_regex(MULTI_WORD_TYPES)\n				},\n				MULTI_WORD_KEYWORDS,\n				FUNCTION_CALL,\n				VARIABLE,\n				STRING,\n				QUOTED_IDENTIFIER,\n				hljs.C_NUMBER_MODE,\n				hljs.C_BLOCK_COMMENT_MODE,\n				COMMENT_MODE,\n				OPERATOR\n			]\n		};\n	}\n	// node_modules/highlight.js/es/languages/rust.js\n	/** @type LanguageFn */\n	function rust(hljs) {\n		const regex = hljs.regex;\n		const RAW_IDENTIFIER = /(r#)?/;\n		const UNDERSCORE_IDENT_RE = regex.concat(RAW_IDENTIFIER, hljs.UNDERSCORE_IDENT_RE);\n		const IDENT_RE = regex.concat(RAW_IDENTIFIER, hljs.IDENT_RE);\n		const FUNCTION_INVOKE = {\n			className: \"title.function.invoke\",\n			relevance: 0,\n			begin: regex.concat(/\\b/, /(?!let|for|while|if|else|match\\b)/, IDENT_RE, regex.lookahead(/\\s*\\(/))\n		};\n		const NUMBER_SUFFIX = \"([ui](8|16|32|64|128|size)|f(32|64))?\";\n		const KEYWORDS = [\n			\"abstract\",\n			\"as\",\n			\"async\",\n			\"await\",\n			\"become\",\n			\"box\",\n			\"break\",\n			\"const\",\n			\"continue\",\n			\"crate\",\n			\"do\",\n			\"dyn\",\n			\"else\",\n			\"enum\",\n			\"extern\",\n			\"false\",\n			\"final\",\n			\"fn\",\n			\"for\",\n			\"if\",\n			\"impl\",\n			\"in\",\n			\"let\",\n			\"loop\",\n			\"macro\",\n			\"match\",\n			\"mod\",\n			\"move\",\n			\"mut\",\n			\"override\",\n			\"priv\",\n			\"pub\",\n			\"ref\",\n			\"return\",\n			\"self\",\n			\"Self\",\n			\"static\",\n			\"struct\",\n			\"super\",\n			\"trait\",\n			\"true\",\n			\"try\",\n			\"type\",\n			\"typeof\",\n			\"union\",\n			\"unsafe\",\n			\"unsized\",\n			\"use\",\n			\"virtual\",\n			\"where\",\n			\"while\",\n			\"yield\"\n		];\n		const LITERALS = [\n			\"true\",\n			\"false\",\n			\"Some\",\n			\"None\",\n			\"Ok\",\n			\"Err\"\n		];\n		const BUILTINS = [\n			\"drop \",\n			\"Copy\",\n			\"Send\",\n			\"Sized\",\n			\"Sync\",\n			\"Drop\",\n			\"Fn\",\n			\"FnMut\",\n			\"FnOnce\",\n			\"ToOwned\",\n			\"Clone\",\n			\"Debug\",\n			\"PartialEq\",\n			\"PartialOrd\",\n			\"Eq\",\n			\"Ord\",\n			\"AsRef\",\n			\"AsMut\",\n			\"Into\",\n			\"From\",\n			\"Default\",\n			\"Iterator\",\n			\"Extend\",\n			\"IntoIterator\",\n			\"DoubleEndedIterator\",\n			\"ExactSizeIterator\",\n			\"SliceConcatExt\",\n			\"ToString\",\n			\"assert!\",\n			\"assert_eq!\",\n			\"bitflags!\",\n			\"bytes!\",\n			\"cfg!\",\n			\"col!\",\n			\"concat!\",\n			\"concat_idents!\",\n			\"debug_assert!\",\n			\"debug_assert_eq!\",\n			\"env!\",\n			\"eprintln!\",\n			\"panic!\",\n			\"file!\",\n			\"format!\",\n			\"format_args!\",\n			\"include_bytes!\",\n			\"include_str!\",\n			\"line!\",\n			\"local_data_key!\",\n			\"module_path!\",\n			\"option_env!\",\n			\"print!\",\n			\"println!\",\n			\"select!\",\n			\"stringify!\",\n			\"try!\",\n			\"unimplemented!\",\n			\"unreachable!\",\n			\"vec!\",\n			\"write!\",\n			\"writeln!\",\n			\"macro_rules!\",\n			\"assert_ne!\",\n			\"debug_assert_ne!\"\n		];\n		const TYPES = [\n			\"i8\",\n			\"i16\",\n			\"i32\",\n			\"i64\",\n			\"i128\",\n			\"isize\",\n			\"u8\",\n			\"u16\",\n			\"u32\",\n			\"u64\",\n			\"u128\",\n			\"usize\",\n			\"f32\",\n			\"f64\",\n			\"str\",\n			\"char\",\n			\"bool\",\n			\"Box\",\n			\"Option\",\n			\"Result\",\n			\"String\",\n			\"Vec\"\n		];\n		return {\n			name: \"Rust\",\n			aliases: [\"rs\"],\n			keywords: {\n				$pattern: hljs.IDENT_RE + \"!?\",\n				type: TYPES,\n				keyword: KEYWORDS,\n				literal: LITERALS,\n				built_in: BUILTINS\n			},\n			illegal: \"</\",\n			contains: [\n				hljs.C_LINE_COMMENT_MODE,\n				hljs.COMMENT(\"/\\\\*\", \"\\\\*/\", { contains: [\"self\"] }),\n				hljs.inherit(hljs.QUOTE_STRING_MODE, {\n					begin: /b?\"/,\n					illegal: null\n				}),\n				{\n					className: \"symbol\",\n					begin: /'[a-zA-Z_][a-zA-Z0-9_]*(?!')/\n				},\n				{\n					scope: \"string\",\n					variants: [{ begin: /b?r(#*)\"(.|\\n)*?\"\\1(?!#)/ }, {\n						begin: /b?'/,\n						end: /'/,\n						contains: [{\n							scope: \"char.escape\",\n							match: /\\\\('|\\w|x\\w{2}|u\\w{4}|U\\w{8})/\n						}]\n					}]\n				},\n				{\n					className: \"number\",\n					variants: [\n						{ begin: \"\\\\b0b([01_]+)\" + NUMBER_SUFFIX },\n						{ begin: \"\\\\b0o([0-7_]+)\" + NUMBER_SUFFIX },\n						{ begin: \"\\\\b0x([A-Fa-f0-9_]+)\" + NUMBER_SUFFIX },\n						{ begin: \"\\\\b(\\\\d[\\\\d_]*(\\\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)\" + NUMBER_SUFFIX }\n					],\n					relevance: 0\n				},\n				{\n					begin: [\n						/fn/,\n						/\\s+/,\n						UNDERSCORE_IDENT_RE\n					],\n					className: {\n						1: \"keyword\",\n						3: \"title.function\"\n					}\n				},\n				{\n					className: \"meta\",\n					begin: \"#!?\\\\[\",\n					end: \"\\\\]\",\n					contains: [{\n						className: \"string\",\n						begin: /\"/,\n						end: /\"/,\n						contains: [hljs.BACKSLASH_ESCAPE]\n					}]\n				},\n				{\n					begin: [\n						/let/,\n						/\\s+/,\n						/(?:mut\\s+)?/,\n						UNDERSCORE_IDENT_RE\n					],\n					className: {\n						1: \"keyword\",\n						3: \"keyword\",\n						4: \"variable\"\n					}\n				},\n				{\n					begin: [\n						/for/,\n						/\\s+/,\n						UNDERSCORE_IDENT_RE,\n						/\\s+/,\n						/in/\n					],\n					className: {\n						1: \"keyword\",\n						3: \"variable\",\n						5: \"keyword\"\n					}\n				},\n				{\n					begin: [\n						/type/,\n						/\\s+/,\n						UNDERSCORE_IDENT_RE\n					],\n					className: {\n						1: \"keyword\",\n						3: \"title.class\"\n					}\n				},\n				{\n					begin: [\n						/(?:trait|enum|struct|union|impl|for)/,\n						/\\s+/,\n						UNDERSCORE_IDENT_RE\n					],\n					className: {\n						1: \"keyword\",\n						3: \"title.class\"\n					}\n				},\n				{\n					begin: hljs.IDENT_RE + \"::\",\n					keywords: {\n						keyword: \"Self\",\n						built_in: BUILTINS,\n						type: TYPES\n					}\n				},\n				{\n					className: \"punctuation\",\n					begin: \"->\"\n				},\n				FUNCTION_INVOKE\n			]\n		};\n	}\n	// node_modules/highlight.js/es/languages/java.js\n	var decimalDigits = \"[0-9](_*[0-9])*\";\n	var frac = `\\\\.(${decimalDigits})`;\n	var hexDigits = \"[0-9a-fA-F](_*[0-9a-fA-F])*\";\n	var NUMERIC = {\n		className: \"number\",\n		variants: [\n			{ begin: `(\\\\b(${decimalDigits})((${frac})|\\\\.)?|(${frac}))[eE][+-]?(${decimalDigits})[fFdD]?\\\\b` },\n			{ begin: `\\\\b(${decimalDigits})((${frac})[fFdD]?\\\\b|\\\\.([fFdD]\\\\b)?)` },\n			{ begin: `(${frac})[fFdD]?\\\\b` },\n			{ begin: `\\\\b(${decimalDigits})[fFdD]\\\\b` },\n			{ begin: `\\\\b0[xX]((${hexDigits})\\\\.?|(${hexDigits})?\\\\.(${hexDigits}))[pP][+-]?(${decimalDigits})[fFdD]?\\\\b` },\n			{ begin: \"\\\\b(0|[1-9](_*[0-9])*)[lL]?\\\\b\" },\n			{ begin: `\\\\b0[xX](${hexDigits})[lL]?\\\\b` },\n			{ begin: \"\\\\b0(_*[0-7])*[lL]?\\\\b\" },\n			{ begin: \"\\\\b0[bB][01](_*[01])*[lL]?\\\\b\" }\n		],\n		relevance: 0\n	};\n	/**\n	* Allows recursive regex expressions to a given depth\n	*\n	* ie: recurRegex(\"(abc~~~)\", /~~~/g, 2) becomes:\n	* (abc(abc(abc)))\n	*\n	* @param {string} re\n	* @param {RegExp} substitution (should be a g mode regex)\n	* @param {number} depth\n	* @returns {string}``\n	*/\n	function recurRegex(re, substitution, depth) {\n		if (depth === -1) return \"\";\n		return re.replace(substitution, (_) => {\n			return recurRegex(re, substitution, depth - 1);\n		});\n	}\n	/** @type LanguageFn */\n	function java(hljs) {\n		const regex = hljs.regex;\n		const JAVA_IDENT_RE = \"[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*\";\n		const GENERIC_IDENT_RE = JAVA_IDENT_RE + recurRegex(\"(?:<\" + JAVA_IDENT_RE + \"~~~(?:\\\\s*,\\\\s*\" + JAVA_IDENT_RE + \"~~~)*>)?\", /~~~/g, 2);\n		const KEYWORDS = {\n			keyword: [\n				\"synchronized\",\n				\"abstract\",\n				\"private\",\n				\"var\",\n				\"static\",\n				\"if\",\n				\"const \",\n				\"for\",\n				\"while\",\n				\"strictfp\",\n				\"finally\",\n				\"protected\",\n				\"import\",\n				\"native\",\n				\"final\",\n				\"void\",\n				\"enum\",\n				\"else\",\n				\"break\",\n				\"transient\",\n				\"catch\",\n				\"instanceof\",\n				\"volatile\",\n				\"case\",\n				\"assert\",\n				\"package\",\n				\"default\",\n				\"public\",\n				\"try\",\n				\"switch\",\n				\"continue\",\n				\"throws\",\n				\"protected\",\n				\"public\",\n				\"private\",\n				\"module\",\n				\"requires\",\n				\"exports\",\n				\"do\",\n				\"sealed\",\n				\"yield\",\n				\"permits\",\n				\"goto\",\n				\"when\"\n			],\n			literal: [\n				\"false\",\n				\"true\",\n				\"null\"\n			],\n			type: [\n				\"char\",\n				\"boolean\",\n				\"long\",\n				\"float\",\n				\"int\",\n				\"byte\",\n				\"short\",\n				\"double\"\n			],\n			built_in: [\"super\", \"this\"]\n		};\n		const ANNOTATION = {\n			className: \"meta\",\n			begin: \"@\" + JAVA_IDENT_RE,\n			contains: [{\n				begin: /\\(/,\n				end: /\\)/,\n				contains: [\"self\"]\n			}]\n		};\n		const PARAMS = {\n			className: \"params\",\n			begin: /\\(/,\n			end: /\\)/,\n			keywords: KEYWORDS,\n			relevance: 0,\n			contains: [hljs.C_BLOCK_COMMENT_MODE],\n			endsParent: true\n		};\n		return {\n			name: \"Java\",\n			aliases: [\"jsp\"],\n			keywords: KEYWORDS,\n			illegal: /<\\/|#/,\n			contains: [\n				hljs.COMMENT(\"/\\\\*\\\\*\", \"\\\\*/\", {\n					relevance: 0,\n					contains: [{\n						begin: /\\w+@/,\n						relevance: 0\n					}, {\n						className: \"doctag\",\n						begin: \"@[A-Za-z]+\"\n					}]\n				}),\n				{\n					begin: /import java\\.[a-z]+\\./,\n					keywords: \"import\",\n					relevance: 2\n				},\n				hljs.C_LINE_COMMENT_MODE,\n				hljs.C_BLOCK_COMMENT_MODE,\n				{\n					begin: /\"\"\"/,\n					end: /\"\"\"/,\n					className: \"string\",\n					contains: [hljs.BACKSLASH_ESCAPE]\n				},\n				hljs.APOS_STRING_MODE,\n				hljs.QUOTE_STRING_MODE,\n				{\n					match: [\n						/\\b(?:class|interface|enum|extends|implements|new)/,\n						/\\s+/,\n						JAVA_IDENT_RE\n					],\n					className: {\n						1: \"keyword\",\n						3: \"title.class\"\n					}\n				},\n				{\n					match: /non-sealed/,\n					scope: \"keyword\"\n				},\n				{\n					begin: [\n						regex.concat(/(?!else)/, JAVA_IDENT_RE),\n						/\\s+/,\n						JAVA_IDENT_RE,\n						/\\s+/,\n						/=(?!=)/\n					],\n					className: {\n						1: \"type\",\n						3: \"variable\",\n						5: \"operator\"\n					}\n				},\n				{\n					begin: [\n						/record/,\n						/\\s+/,\n						JAVA_IDENT_RE\n					],\n					className: {\n						1: \"keyword\",\n						3: \"title.class\"\n					},\n					contains: [\n						PARAMS,\n						hljs.C_LINE_COMMENT_MODE,\n						hljs.C_BLOCK_COMMENT_MODE\n					]\n				},\n				{\n					beginKeywords: \"new throw return else\",\n					relevance: 0\n				},\n				{\n					begin: [\n						\"(?:\" + GENERIC_IDENT_RE + \"\\\\s+)\",\n						hljs.UNDERSCORE_IDENT_RE,\n						/\\s*(?=\\()/\n					],\n					className: { 2: \"title.function\" },\n					keywords: KEYWORDS,\n					contains: [\n						{\n							className: \"params\",\n							begin: /\\(/,\n							end: /\\)/,\n							keywords: KEYWORDS,\n							relevance: 0,\n							contains: [\n								ANNOTATION,\n								hljs.APOS_STRING_MODE,\n								hljs.QUOTE_STRING_MODE,\n								NUMERIC,\n								hljs.C_BLOCK_COMMENT_MODE\n							]\n						},\n						hljs.C_LINE_COMMENT_MODE,\n						hljs.C_BLOCK_COMMENT_MODE\n					]\n				},\n				NUMERIC,\n				ANNOTATION\n			]\n		};\n	}\n	// node_modules/highlight.js/es/languages/markdown.js\n	function markdown(hljs) {\n		const regex = hljs.regex;\n		const INLINE_HTML = {\n			begin: /<\\/?[A-Za-z_]/,\n			end: \">\",\n			subLanguage: \"xml\",\n			relevance: 0\n		};\n		const HORIZONTAL_RULE = {\n			begin: \"^[-\\\\*]{3,}\",\n			end: \"$\"\n		};\n		const CODE = {\n			className: \"code\",\n			variants: [\n				{ begin: \"(`{3,})[^`](.|\\\\n)*?\\\\1`*[ ]*\" },\n				{ begin: \"(~{3,})[^~](.|\\\\n)*?\\\\1~*[ ]*\" },\n				{\n					begin: \"```\",\n					end: \"```+[ ]*$\"\n				},\n				{\n					begin: \"~~~\",\n					end: \"~~~+[ ]*$\"\n				},\n				{ begin: \"`.+?`\" },\n				{\n					begin: \"(?=^( {4}|\\\\t))\",\n					contains: [{\n						begin: \"^( {4}|\\\\t)\",\n						end: \"(\\\\n)$\"\n					}],\n					relevance: 0\n				}\n			]\n		};\n		const LIST = {\n			className: \"bullet\",\n			begin: \"^[ 	]*([*+-]|(\\\\d+\\\\.))(?=\\\\s+)\",\n			end: \"\\\\s+\",\n			excludeEnd: true\n		};\n		const LINK_REFERENCE = {\n			begin: /^\\[[^\\n]+\\]:/,\n			returnBegin: true,\n			contains: [{\n				className: \"symbol\",\n				begin: /\\[/,\n				end: /\\]/,\n				excludeBegin: true,\n				excludeEnd: true\n			}, {\n				className: \"link\",\n				begin: /:\\s*/,\n				end: /$/,\n				excludeBegin: true\n			}]\n		};\n		const LINK = {\n			variants: [\n				{\n					begin: /\\[.+?\\]\\[.*?\\]/,\n					relevance: 0\n				},\n				{\n					begin: /\\[.+?\\]\\(((data|javascript|mailto):|(?:http|ftp)s?:\\/\\/).*?\\)/,\n					relevance: 2\n				},\n				{\n					begin: regex.concat(/\\[.+?\\]\\(/, /[A-Za-z][A-Za-z0-9+.-]*/, /:\\/\\/.*?\\)/),\n					relevance: 2\n				},\n				{\n					begin: /\\[.+?\\]\\([./?&#].*?\\)/,\n					relevance: 1\n				},\n				{\n					begin: /\\[.*?\\]\\(.*?\\)/,\n					relevance: 0\n				}\n			],\n			returnBegin: true,\n			contains: [\n				{ match: /\\[(?=\\])/ },\n				{\n					className: \"string\",\n					relevance: 0,\n					begin: \"\\\\[\",\n					end: \"\\\\]\",\n					excludeBegin: true,\n					returnEnd: true\n				},\n				{\n					className: \"link\",\n					relevance: 0,\n					begin: \"\\\\]\\\\(\",\n					end: \"\\\\)\",\n					excludeBegin: true,\n					excludeEnd: true\n				},\n				{\n					className: \"symbol\",\n					relevance: 0,\n					begin: \"\\\\]\\\\[\",\n					end: \"\\\\]\",\n					excludeBegin: true,\n					excludeEnd: true\n				}\n			]\n		};\n		const BOLD = {\n			className: \"strong\",\n			contains: [],\n			variants: [{\n				begin: /_{2}(?!\\s)/,\n				end: /_{2}/\n			}, {\n				begin: /\\*{2}(?!\\s)/,\n				end: /\\*{2}/\n			}]\n		};\n		const ITALIC = {\n			className: \"emphasis\",\n			contains: [],\n			variants: [{\n				begin: /\\*(?![*\\s])/,\n				end: /\\*/\n			}, {\n				begin: /_(?![_\\s])/,\n				end: /_/,\n				relevance: 0\n			}]\n		};\n		const BOLD_WITHOUT_ITALIC = hljs.inherit(BOLD, { contains: [] });\n		const ITALIC_WITHOUT_BOLD = hljs.inherit(ITALIC, { contains: [] });\n		BOLD.contains.push(ITALIC_WITHOUT_BOLD);\n		ITALIC.contains.push(BOLD_WITHOUT_ITALIC);\n		let CONTAINABLE = [INLINE_HTML, LINK];\n		[\n			BOLD,\n			ITALIC,\n			BOLD_WITHOUT_ITALIC,\n			ITALIC_WITHOUT_BOLD\n		].forEach((m) => {\n			m.contains = m.contains.concat(CONTAINABLE);\n		});\n		CONTAINABLE = CONTAINABLE.concat(BOLD, ITALIC);\n		return {\n			name: \"Markdown\",\n			aliases: [\n				\"md\",\n				\"mkdown\",\n				\"mkd\"\n			],\n			contains: [\n				{\n					className: \"section\",\n					variants: [{\n						begin: \"^#{1,6}\",\n						end: \"$\",\n						contains: CONTAINABLE\n					}, {\n						begin: \"(?=^.+?\\\\n[=-]{2,}$)\",\n						contains: [{ begin: \"^[=-]*$\" }, {\n							begin: \"^\",\n							end: \"\\\\n\",\n							contains: CONTAINABLE\n						}]\n					}]\n				},\n				INLINE_HTML,\n				LIST,\n				BOLD,\n				ITALIC,\n				{\n					className: \"quote\",\n					begin: \"^>\\\\s+\",\n					contains: CONTAINABLE,\n					end: \"$\"\n				},\n				CODE,\n				HORIZONTAL_RULE,\n				LINK,\n				LINK_REFERENCE,\n				{\n					scope: \"literal\",\n					match: /&([a-zA-Z0-9]+|#[0-9]{1,7}|#[Xx][0-9a-fA-F]{1,6});/\n				}\n			]\n		};\n	}\n	// src/host/hljsWorker.ts\n	const LANGUAGES = [\n		[\"javascript\", javascript$1],\n		[\"js\", javascript$1],\n		[\"jsx\", javascript$1],\n		[\"typescript\", typescript],\n		[\"ts\", typescript],\n		[\"tsx\", typescript],\n		[\"python\", python],\n		[\"py\", python],\n		[\"bash\", bash],\n		[\"sh\", bash],\n		[\"shell\", bash],\n		[\"zsh\", bash],\n		[\"json\", json],\n		[\"yaml\", yaml],\n		[\"yml\", yaml],\n		[\"xml\", xml],\n		[\"html\", xml],\n		[\"css\", css],\n		[\"sql\", sql],\n		[\"rust\", rust],\n		[\"rs\", rust],\n		[\"java\", java],\n		[\"markdown\", markdown],\n		[\"md\", markdown]\n	];\n	for (const [name, language] of LANGUAGES) core_default.registerLanguage(name, language);\n	const ctx = self;\n	ctx.onmessage = (e) => {\n		const { id, code, lang } = e.data;\n		let html = \"\";\n		try {\n			if (lang && core_default.getLanguage(lang)) html = core_default.highlight(code, { language: lang }).value;\n			else html = core_default.highlightAuto(code).value;\n		} catch (e) {\n			html = \"\";\n			console.warn(\"[hljsWorker] highlight failed\", e?.name);\n		}\n		const res = {\n			id,\n			html\n		};\n		ctx.postMessage(res);\n	};\n})();\n";
var blob = typeof self !== "undefined" && self.Blob && new Blob(["(self.URL || self.webkitURL).revokeObjectURL(self.location.href);", jsContent], { type: "text/javascript;charset=utf-8" });
function WorkerWrapper(options) {
	let objURL;
	try {
		objURL = blob && (self.URL || self.webkitURL).createObjectURL(blob);
		if (!objURL) throw "";
		const worker = new Worker(objURL, { name: options?.name });
		worker.addEventListener("error", () => {
			(self.URL || self.webkitURL).revokeObjectURL(objURL);
		});
		return worker;
	} catch (e) {
		return new Worker("data:text/javascript;charset=utf-8," + encodeURIComponent(jsContent), { name: options?.name });
	}
}
// src/host/highlightClient.ts
var worker = null;
var workerFailed = false;
var nextId = 1;
var pending = /* @__PURE__ */ new Map();
var HIGHLIGHT_TIMEOUT_MS = 3e3;
function getWorker() {
	if (workerFailed || typeof Worker === "undefined") return null;
	if (worker) return worker;
	try {
		worker = new WorkerWrapper();
		worker.onmessage = (e) => {
			const resolve = pending.get(e.data.id);
			if (resolve) {
				pending.delete(e.data.id);
				resolve(e.data.html);
			}
		};
		worker.onerror = () => {
			workerFailed = true;
			worker = null;
			for (const resolve of pending.values()) resolve("");
			pending.clear();
		};
	} catch {
		workerFailed = true;
		worker = null;
	}
	return worker;
}
/**
* Highlight `code` in the worker. Resolves to sanitized HTML, or '' when
* highlighting is unavailable (no Worker support, e.g. tests, or a worker load
* failure) so the caller keeps rendering plain text. Regex backtracking is
* absorbed by the worker thread — the main thread never blocks.
*/
function highlightAsync(code, lang) {
	const w = getWorker();
	if (!w) return Promise.resolve("");
	return new Promise((resolve) => {
		const id = nextId++;
		const timer = setTimeout(() => {
			if (pending.delete(id)) {
				if (worker === w) {
					try {
						w.terminate();
					} catch {}
					worker = null;
				}
				resolve("");
			}
		}, HIGHLIGHT_TIMEOUT_MS);
		pending.set(id, (html) => {
			clearTimeout(timer);
			resolve(html ? purify_default.sanitize(html) : "");
		});
		w.postMessage({
			id,
			code,
			lang
		});
	});
}
// src/CodeFenceBlock.tsx
/**
* Rendered fenced code block for the Notes preview.
*
* Colours only when the fence names a language. The worker falls back to
* `highlightAuto()` on an unrecognized-but-present language, matching the
* dashboard's chat code blocks, but a BARE fence must never reach the worker
* at all: a note's unlabelled fence is usually a log, a directory tree or
* pasted output, and `highlightAuto()` would paint arbitrary words in keyword
* colours. That gate is why this doesn't just reuse `components/CodeBlock.tsx`'s
* `HighlightedCode` — the other reason is its Tailwind-baked 13px face, which
* would desync from this block's own 12px `FONT_MONO` sizing.
*
* Plain text renders immediately; the worker's reply swaps in without moving
* the block, same contract as the chat renderer's own code blocks.
*/
var PRE_STYLE = {
	background: "var(--card)",
	border: "1px solid var(--border)",
	borderRadius: "6px",
	padding: "10px",
	fontSize: `${DOC_CODE_PX}px`,
	overflowX: "auto",
	fontFamily: FONT_MONO
};
function CodeFenceBlock({ code, lang }) {
	const [html, setHtml] = useState("");
	const key = `${lang ?? ""}\n${code}`;
	const keyRef = useRef(key);
	if (keyRef.current !== key) {
		keyRef.current = key;
		if (html) setHtml("");
	}
	useEffect(() => {
		if (!lang) return;
		let cancelled = false;
		highlightAsync(code, lang).then((out) => {
			if (!cancelled && out) setHtml(out);
		});
		return () => {
			cancelled = true;
		};
	}, [code, lang]);
	return /* @__PURE__ */ jsx("pre", {
		style: PRE_STYLE,
		children: html ? /* @__PURE__ */ jsx("code", {
			className: "hljs",
			dangerouslySetInnerHTML: { __html: html }
		}) : code
	});
}
// src/DetailsBlock.tsx
function DetailsBlock({ summary, body }) {
	return /* @__PURE__ */ jsxs("details", {
		style: {
			border: "1px solid var(--border)",
			borderRadius: "6px",
			padding: "2px 10px",
			background: "var(--card)"
		},
		children: [/* @__PURE__ */ jsx("summary", {
			style: {
				cursor: "pointer",
				fontWeight: 600,
				color: ACCENT,
				fontSize: `16px`
			},
			onClick: (e) => e.stopPropagation(),
			children: summary
		}), /* @__PURE__ */ jsx("div", {
			style: { marginTop: "6px" },
			children: body
		})]
	});
}
// src/host/mermaidRuntime.ts
var MERMAID_RUNTIME_PATH = "/vendor/mermaid.min.js";
var load = null;
function loadMermaidRuntime() {
	load ??= new Promise((resolve, reject) => {
		const host = window;
		if (host.mermaid) {
			resolve(host.mermaid);
			return;
		}
		const script = document.createElement("script");
		script.src = MERMAID_RUNTIME_PATH;
		script.async = true;
		script.onload = () => {
			if (host.mermaid) resolve(host.mermaid);
			else reject(/* @__PURE__ */ new Error("the dashboard served no Mermaid runtime"));
		};
		script.onerror = () => {
			load = null;
			reject(/* @__PURE__ */ new Error("could not load the Mermaid runtime"));
		};
		document.head.appendChild(script);
	});
	return load;
}
// src/host/sanitize.ts
/** The dashboard's `api/helpers.sanitize`: DOMPurify over markup the page renders. */
function sanitize(html) {
	return purify_default.sanitize(html);
}
// src/MermaidBlock.tsx
/**
* Rendered ` ```mermaid ` block for the Notes preview.
*
* `Preview` is a synchronous line-to-block mapper, while mermaid's API is
* async twice over: the library itself is the dashboard's runtime, loaded on
* the first diagram (`host/mermaidRuntime`), and `render()` returns a promise. This component is
* the escape hatch: it mounts showing the diagram SOURCE — the exact thing the
* note showed before this feature existed — and swaps in the SVG when it
* arrives, so a note without diagrams pays nothing and a slow load degrades to
* the old behaviour instead of a blank hole.
*
* A failed render keeps the source visible and adds a one-line hint rather
* than replacing the block with an error box: in a click-to-edit notebook the
* source IS the recovery path, and the user's very next gesture (click, fix
* the typo) needs the text in front of them.
*
* Colours stay on mermaid's built-in `dark`/`default` themes on purpose. The
* dashboard accent is not used: theme packs may set `--accent` to any value —
* including one indistinguishable from the background — and mermaid derives
* dozens of fills from each seed colour, so a bad accent would not degrade to
* faint chrome (the headings compromise) but to unreadable diagrams. The
* built-in themes are contrast-safe on the card background in both modes.
*/
/**
* Strip external references from sanitized SVG markup to prevent exfiltration.
*
* Mermaid's image-node syntax (`:::img[url]`) can produce `<image href="...">`
* elements pointing to attacker-controlled URLs. DOMPurify preserves them
* (valid SVG element) and CSP permits HTTPS, so opening the note would fire
* an attacker-controlled request.
*
* This post-processor removes `<image .../>` elements entirely, and strips
* href/xlink:href attributes whose values don't start with `#` (preserving
* internal fragment references used by mermaid for markers and defs).
*/
function stripExternalSvgRefs(svgMarkup) {
	let result = svgMarkup.replace(/<image\b[^>]*\/?\s*>(\s*<\/image>)?/gi, "");
	result = result.replace(/\b(xlink:href|href)\s*=\s*"(?!#)([^"]*)"/gi, "");
	result = result.replace(/url\(\s*['"]?(?!['"]?#)([^'")]+)['"]?\s*\)/gi, "url()");
	result = result.replace(/(?:image-set|image|src)\([^)]*(?:\([^)]*\)[^)]*)*\)/gi, "url()");
	result = result.replace(/\\[0-9a-f]{1,6}\s*/gi, "");
	return result;
}
/** Lazy singleton: one script load no matter how many diagrams a note holds. */
var loadMermaid = loadMermaidRuntime;
/** `mermaid.render` demands a document-unique id for its work element. */
var seq = 0;
/** Same dark detection as the chat renderer, so both surfaces agree. */
function isDarkTheme() {
	return (document.documentElement.getAttribute("data-theme") ?? "").includes("dark");
}
var FRAME_STYLE = {
	background: "var(--card)",
	border: "1px solid var(--border)",
	borderRadius: "6px",
	padding: "10px",
	overflowX: "auto"
};
var SOURCE_STYLE = {
	...FRAME_STYLE,
	fontSize: `${DOC_CODE_PX}px`,
	fontFamily: FONT_MONO,
	margin: 0
};
function MermaidBlock({ code }) {
	const [svg, setSvg] = useState(null);
	const [failed, setFailed] = useState(false);
	const [themeTick, setThemeTick] = useState(0);
	useEffect(() => {
		const obs = new MutationObserver(() => setThemeTick((t) => t + 1));
		obs.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ["data-theme"]
		});
		return () => obs.disconnect();
	}, []);
	useEffect(() => {
		let cancelled = false;
		setFailed(false);
		loadMermaid().then((mermaid) => {
			mermaid.initialize({
				startOnLoad: false,
				securityLevel: "strict",
				suppressErrorRendering: true,
				fontFamily: "inherit",
				theme: isDarkTheme() ? "dark" : "default",
				htmlLabels: false,
				flowchart: { htmlLabels: false }
			});
			seq += 1;
			return mermaid.render(`mdnb-mermaid-${seq}`, code);
		}).then((res) => {
			if (!cancelled) setSvg(stripExternalSvgRefs(sanitize(res.svg)));
		}).catch(() => {
			if (!cancelled) setFailed(true);
		});
		return () => {
			cancelled = true;
		};
	}, [code, themeTick]);
	if (svg !== null && !failed) return /* @__PURE__ */ jsx("div", {
		style: FRAME_STYLE,
		dangerouslySetInnerHTML: { __html: svg }
	});
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("pre", {
		style: SOURCE_STYLE,
		children: code
	}), failed && /* @__PURE__ */ jsx("div", {
		style: {
			fontSize: "11px",
			color: "var(--muted)",
			padding: "2px 4px"
		},
		children: mermaidErrorLabel()
	})] });
}
// src/vaultRootContext.ts
/**
* Absolute path of the open vault's content root (its local path plus subfolder).
*
* Read by `NoteImage` to resolve a root-relative image source (`/images/a.png`)
* against the vault, the convention Obsidian-style vaults use, and by `NoteEmbed`
* for an Obsidian `![[file]]` embed. A context rather
* than a prop because the image is rendered by `inline()`, a plain function
* called from a dozen block renderers, and threading a second path through every
* one of them would touch each call site for a value only the leaf needs.
*/
var VaultRootCtx = createContext(void 0);
// src/NoteImage.tsx
/**
* Rendered `![alt](src)` image for the Notes preview.
*
* A component rather than a bare `<img>` because a note's image is the one
* inline span that can fail after it renders: the file was renamed in the
* vault, the remote host is unreachable, the path points outside what the
* dashboard will serve. When that happens the block falls back to the alt text
* (or the file name, when the note gave no alt), so the reader still learns
* what was meant to be there instead of facing a broken frame. That mirrors
* what the chat renderer does for the same failure.
*
* The image is capped at the width of its container rather than sized in
* pixels, so it follows the reading column and the full-width mode instead of
* overflowing the measure. Height is capped at 60vh, like the chat renderer, so
* a tall phone screenshot or whiteboard photo stays one screenful instead of
* pushing the rest of the note several viewports down.
*
* A min-height floor holds the block's space until the bytes decode. Markdown
* carries no dimensions, so without it the image lays out at nothing and then
* snaps to its natural height: in this app that shift lands under a click that
* means "edit the line I am pointing at", so it would open the wrong block's
* editor. The floor is released on load, which keeps the final layout exact.
* SVGs get a definite width basis instead, because one authored with only a
* `viewBox` has no intrinsic size and would collapse under a max-width cap.
*
* A root-relative source (`/images/a.png`) is served as an absolute path first,
* so a real absolute path still loads on the first request. When that fails and
* the open vault is known, the image tries the same path against the vault root
* once, the convention Obsidian-style vaults use, and only then falls back to
* the alt text. The retry asks `/api/file-raw` for a path under the vault and
* nothing a plain absolute path could not already ask for.
*
* No click handler: in this app a click means "edit the source of this line",
* and the surrounding block already carries that gesture. Swallowing the click
* to open a lightbox would make the image the only span in a note you cannot
* click to edit.
*/
/** File name of a source, used as the fallback label when alt is empty. */
function srcLabel(src) {
	const clean = src.split(/[?#]/)[0];
	const slash = Math.max(clean.lastIndexOf("/"), clean.lastIndexOf("\\"));
	return (slash === -1 ? clean : clean.slice(slash + 1)) || src;
}
function NoteImage({ src, alt, rawSrc, fallbackSrc, width }) {
	const vaultRoot = useContext(VaultRootCtx);
	const fallback = src === null ? null : fallbackSrc !== void 0 ? fallbackSrc : vaultRootImageSrc(rawSrc, vaultRoot);
	const [triedFallback, setTriedFallback] = useState(null);
	const [failedSrc, setFailedSrc] = useState(null);
	const [loaded, setLoaded] = useState(false);
	const onFallback = fallback !== null && triedFallback === fallback;
	const active = onFallback ? fallback : src;
	const failureKey = JSON.stringify([active, fallback]);
	if (active === null || failedSrc === failureKey) return /* @__PURE__ */ jsxs("span", {
		style: {
			color: "var(--muted)",
			display: "inline-flex",
			alignItems: "center",
			gap: "4px"
		},
		children: [/* @__PURE__ */ jsx(ImageOff, {
			size: 14,
			"aria-hidden": "true"
		}), alt || srcLabel(rawSrc)]
	});
	const isSvg = /\.svg([?#]|$)/i.test(rawSrc);
	return /* @__PURE__ */ jsx("img", {
		src: active,
		alt,
		onLoad: () => setLoaded(true),
		onError: () => fallback !== null && !onFallback ? setTriedFallback(fallback) : setFailedSrc(failureKey),
		style: {
			maxWidth: "100%",
			maxHeight: "60vh",
			objectFit: "contain",
			...isSvg ? {
				width: "100%",
				height: "auto"
			} : {
				height: loaded ? "auto" : void 0,
				minHeight: loaded ? void 0 : "120px"
			},
			...width ? { width: `${width}px` } : {},
			display: "block",
			margin: "4px 0",
			borderRadius: "4px"
		}
	});
}
/**
* An Obsidian `![[file]]` image embed. Obsidian reads the target as a path from
* the vault root, which is also where it puts new attachments by default, so
* that is tried first and the same path beside the note second. A target in
* Obsidian's relative link format (`./a.png`, `../assets/a.png`) is read from
* the note's folder alone. Every try goes through `vaultRootImageSrc`, so a
* target that is absolute, climbs above the vault root, or keeps a `.` or `..`
* segment anywhere else asks for nothing and shows the missing-image fallback.
*/
function NoteEmbed({ target, noteDir, alt, width }) {
	const vaultRoot = useContext(VaultRootCtx);
	const segments = target.split(/[\\/]/);
	const rooted = (s) => `/${s.map(encodeURIComponent).join("/")}`;
	const relative = segments[0] === "." || segments[0] === "..";
	const inVault = relative ? noteRelativeSegments(segments, noteDir, vaultRoot) : null;
	const candidates = relative ? [inVault && vaultRootImageSrc(rooted(inVault), vaultRoot)] : [vaultRootImageSrc(rooted(segments), vaultRoot), vaultRootImageSrc(rooted(segments), noteDir)];
	const tries = [...new Set(candidates)].filter((t) => !!t);
	return /* @__PURE__ */ jsx(NoteImage, {
		src: tries[0] ?? null,
		fallbackSrc: tries[1] ?? null,
		alt: alt || srcLabel(target),
		rawSrc: target,
		width
	});
}
// src/Preview.tsx
/**
* Inline spans: code, bold, italic, wikilinks, links, images and image embeds.
*
* The image alternative sits last but still wins over the link one for
* `![alt](src)`: its match starts at the `!`, one character earlier than the
* link's `[`, and the engine takes the leftmost match before it ever considers
* alternative order. Appending it therefore leaves every existing group number
* untouched, which is why it is not spliced in beside the link branch.
*
* The Obsidian embed (`![[a.png]]`, `![[a.png|720]]`) is appended after it and
* wins over the wikilink branch the same way. It matches only a target ending
* in an image extension `/api/file-raw` serves (`_ALLOWED_IMAGE_EXT` in
* `dashboard/handlers/files.py`), hence the `i` flag; a note or PDF embed falls
* through to the wikilink branch and renders as before.
*/
var INLINE_RE = /(`[^`]+`)|(\*\*[^*]+\*\*)|(\*[^*]+\*)|(\[\[([^\][|]+?)(?:\|([^\]]+?))?\]\])|(\[([^\]]+)\]\(([^)]+)\))|(!\[([^\]]*)\]\(([^)]+)\))|(!\[\[([^\][|]+?\.(?:png|jpe?g|gif|webp|bmp|svg))(?:\|([^\]]*))?\]\])/gi;
/**
* Render one line's inline markup to React nodes.
*
* `noteDir` is the directory of the note being read; it is what turns a
* relative image source into a file the dashboard can serve. Optional because
* every other span renders without it, so a caller that has no note context
* (a test, a preview of loose text) still gets everything but relative images.
*/
function inline(text, key, noteDir) {
	const nodes = [];
	const re = new RegExp(INLINE_RE.source, INLINE_RE.flags);
	let last = 0;
	let i = 0;
	let m;
	while ((m = re.exec(text)) !== null) {
		if (m.index > last) nodes.push(text.slice(last, m.index));
		const k = `${key}-${i}`;
		if (m[1]) nodes.push(/* @__PURE__ */ jsx("code", {
			style: {
				background: "var(--card)",
				border: "1px solid var(--border)",
				borderRadius: "4px",
				padding: "0 4px",
				fontSize: `${DOC_CODE_EM}em`,
				fontFamily: FONT_MONO
			},
			children: m[1].slice(1, -1)
		}, k));
		else if (m[2]) nodes.push(/* @__PURE__ */ jsx("strong", { children: m[2].slice(2, -2) }, k));
		else if (m[3]) nodes.push(/* @__PURE__ */ jsx("em", { children: m[3].slice(1, -1) }, k));
		else if (m[4]) nodes.push(/* @__PURE__ */ jsx("span", {
			style: { color: ACCENT },
			children: m[6] || m[5]
		}, k));
		else if (m[7]) {
			const href = urlTransform(m[9]);
			nodes.push(href ? /* @__PURE__ */ jsx("a", {
				href,
				target: "_blank",
				rel: "noopener noreferrer",
				onClick: (e) => e.stopPropagation(),
				style: { color: ACCENT },
				children: m[8]
			}, k) : /* @__PURE__ */ jsx("span", { children: m[8] }, k));
		} else if (m[10]) nodes.push(/* @__PURE__ */ jsx(NoteImage, {
			src: resolveNoteImageSrc(m[12], noteDir),
			alt: m[11],
			rawSrc: m[12]
		}, k));
		else if (m[13]) {
			const suffix = (m[15] ?? "").trim();
			const size = /^(\d+)(?:x\d+)?$/.exec(suffix);
			nodes.push(/* @__PURE__ */ jsx(NoteEmbed, {
				target: m[14].trim(),
				noteDir,
				alt: size ? "" : suffix,
				width: Number(size?.[1]) || void 0
			}, k));
		}
		last = m.index + m[0].length;
		i++;
	}
	if (last < text.length) nodes.push(text.slice(last));
	return nodes;
}
/**
* The heading ramp itself lives in `constants.ts` (`DOC_HEADING_EM` /
* `DOC_HEADING_WEIGHTS`) because the inline note title has to match h1 and
* derives its px size from the same table. Read the rationale there before
* changing a value.
*/
var HEADING_SIZES = DOC_HEADING_EM.map((em) => `${em}em`);
var CELL_PAD = "5px 8px";
var CELL_BORDER = "1px solid var(--border)";
/**
* Render a parsed table.
*
* Cells wrap rather than being held on one line: a note's tables carry prose,
* and inside an 800px reading column nowrap would push almost every one of them
* into horizontal scrolling. The wrapper still scrolls, so a genuinely wide
* table stays reachable instead of overflowing the column.
*/
function tableNode(t, key, noteDir) {
	const cell = (align, first) => ({
		padding: CELL_PAD,
		textAlign: align ?? "left",
		verticalAlign: "top",
		...first ? null : { borderLeft: CELL_BORDER }
	});
	return /* @__PURE__ */ jsx("div", {
		style: {
			overflowX: "auto",
			border: CELL_BORDER,
			borderRadius: "6px",
			margin: "6px 0"
		},
		children: /* @__PURE__ */ jsxs("table", {
			style: {
				borderCollapse: "collapse",
				width: "100%"
			},
			children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { children: t.header.map((text, c) => /* @__PURE__ */ jsx("th", {
				style: {
					...cell(t.align[c], c === 0),
					fontWeight: 600,
					background: "var(--card)",
					borderBottom: CELL_BORDER
				},
				children: inline(text, `${key}-h${c}`, noteDir)
			}, c)) }) }), /* @__PURE__ */ jsx("tbody", { children: t.rows.map((row, r) => /* @__PURE__ */ jsx("tr", { children: row.map((text, c) => /* @__PURE__ */ jsx("td", {
				style: {
					...cell(t.align[c], c === 0),
					...r === 0 ? null : { borderTop: CELL_BORDER }
				},
				children: inline(text, `${key}-${r}-${c}`, noteDir)
			}, c)) }, r)) })]
		})
	});
}
/**
* Render a `<details>` body as read-only blocks.
*
* The body is not individually click-to-edit (clicking the disclosure opens the
* whole block's source), so this needs no line-indexed editor machinery — but it
* MUST keep block-level markdown readable: a fenced code run renders as a
* `CodeFenceBlock` (monospace, indentation and backticks preserved) rather than
* flattened through `inline()` line by line, which would turn ` ```py `, `*args`
* and leading spaces into literal text, italics and collapsed whitespace. Every
* non-fenced line still renders inline (escaped by React), and a blank line is a
* small gap. Nested `<details>`, tables and lists are out of scope here: the
* body is a disclosure's contents, not a second notebook.
*/
function detailsBodyNodes(body, key, noteDir) {
	const nodes = [];
	let i = 0;
	while (i < body.length) {
		const line = body[i];
		if (line.startsWith("```")) {
			const lang = fenceLang(line);
			const code = [];
			let j = i + 1;
			for (; j < body.length; j++) {
				if (body[j].startsWith("```")) break;
				code.push(body[j]);
			}
			nodes.push(/* @__PURE__ */ jsx("div", {
				style: { margin: "4px 0" },
				children: /* @__PURE__ */ jsx(CodeFenceBlock, {
					code: code.join("\n"),
					lang
				})
			}, `${key}-d-${i}`));
			i = j < body.length ? j + 1 : j;
			continue;
		}
		nodes.push(line.trim() === "" ? /* @__PURE__ */ jsx("div", { style: { height: "8px" } }, `${key}-d-${i}`) : /* @__PURE__ */ jsx("div", { children: inline(line, `${key}-d-${i}`, noteDir) }, `${key}-d-${i}`));
		i++;
	}
	return nodes;
}
function Preview({ content, onToggleCheckbox, editRange, onStartEdit, onCommitEdit, onCancelEdit, onSplitEdit, onDirtyEdit, noteDir, vaultRoot }) {
	const rawLines = content.replace(FM_RE, "").split("\n");
	const lines = rawLines[rawLines.length - 1] === "" ? rawLines.slice(0, -1) : rawLines;
	const out = [];
	let inCode = false;
	let codeBuf = [];
	let codeStart = 0;
	/** Last line swallowed by a multi-line block, so the loop skips past it. */
	let skipTo = -1;
	const shield = (e) => e.stopPropagation();
	/**
	* Wrap a rendered block so clicking it swaps in the editor for source lines
	* [start, end]. `split: false` keeps Enter a literal newline (fenced code).
	*/
	const blk = (start, end, node, textStyle, opts) => {
		if (editRange && start === editRange.start) return /* @__PURE__ */ jsx(BlockEditor, {
			initial: lines.slice(editRange.start, editRange.end + 1).join("\n"),
			onCommit: onCommitEdit,
			onCancel: onCancelEdit,
			onDirty: onDirtyEdit,
			onSplit: opts?.split === false ? null : onSplitEdit,
			textStyle,
			caret: editRange.caret
		}, `edit-${start}`);
		if (editRange && start > editRange.start && start <= editRange.end) return null;
		return /* @__PURE__ */ jsx(Clickable, {
			className: "mdnb-blk",
			onClick: () => onStartEdit(start, end),
			style: {
				cursor: "text",
				borderRadius: "4px",
				padding: "0 4px",
				margin: "0 -4px"
			},
			children: node
		}, start);
	};
	/**
	* Nesting rails: a nested list item draws a vertical line at each ancestor's
	* indent, so stacked children form one continuous rail under the parent.
	* Drawn on the CHILDREN, which is why it begins below the parent row and
	* exists only when something is actually nested.
	*/
	const withRails = (rails, idx, el) => el && rails.length ? /* @__PURE__ */ jsxs("div", {
		style: { position: "relative" },
		children: [rails.map((x) => /* @__PURE__ */ jsx("div", {
			"aria-hidden": true,
			style: {
				position: "absolute",
				left: `${x + 7}px`,
				top: 0,
				bottom: 0,
				width: "1px",
				background: "var(--border)"
			}
		}, x)), el]
	}, `rail-${idx}`) : el;
	let stack = [];
	/** Ancestor indents for a list line at `ind`, updating the stack. */
	const enter = (ind) => {
		while (stack.length && stack[stack.length - 1] >= ind) stack.pop();
		const rails = stack.slice();
		stack.push(ind);
		return rails;
	};
	lines.forEach((line, idx) => {
		if (idx <= skipTo) return;
		if (!LIST_MARKER_RE.test(line)) stack = [];
		if (line.startsWith("```")) {
			if (!inCode) {
				const mermaid = parseMermaidBlock(lines, idx);
				if (mermaid) {
					skipTo = mermaid.end;
					out.push(blk(idx, mermaid.end, /* @__PURE__ */ jsx(MermaidBlock, { code: mermaid.code }), {
						fontSize: `${DOC_CODE_PX}px`,
						fontFamily: FONT_MONO
					}, { split: false }));
					return;
				}
			}
			if (inCode) {
				out.push(blk(codeStart, idx, /* @__PURE__ */ jsx(CodeFenceBlock, {
					code: codeBuf.join("\n"),
					lang: fenceLang(lines[codeStart])
				}), {
					fontSize: `${DOC_CODE_PX}px`,
					fontFamily: FONT_MONO
				}, { split: false }));
				codeBuf = [];
			} else codeStart = idx;
			inCode = !inCode;
			return;
		}
		if (inCode) {
			codeBuf.push(line);
			return;
		}
		const table = parseTable(lines, idx);
		if (table) {
			skipTo = table.end;
			out.push(blk(idx, table.end, tableNode(table, idx, noteDir), { fontFamily: FONT_MONO }, { split: false }));
			return;
		}
		const details = parseDetailsBlock(lines, idx);
		if (details) {
			skipTo = details.end;
			const summaryNode = details.summary ? inline(details.summary, `${idx}-summary`, noteDir) : detailsSummaryFallbackLabel();
			const bodyNode = detailsBodyNodes(details.body, idx, noteDir);
			out.push(blk(idx, details.end, /* @__PURE__ */ jsx(DetailsBlock, {
				summary: summaryNode,
				body: bodyNode
			}), void 0, { split: false }));
			return;
		}
		const task = /^(\s*)- \[( |x)\] (.*)$/.exec(line);
		if (task) {
			const ind = indentPx(task[1]);
			const rails = enter(ind);
			out.push(withRails(rails, idx, blk(idx, idx, /* @__PURE__ */ jsxs("div", {
				style: {
					display: "flex",
					gap: "6px",
					alignItems: "baseline",
					marginLeft: ind
				},
				children: [/* @__PURE__ */ jsx("input", {
					type: "checkbox",
					checked: task[2] === "x",
					onClick: shield,
					onChange: () => onToggleCheckbox(idx),
					"aria-label": task[3] || "task",
					style: { accentColor: ACCENT }
				}), /* @__PURE__ */ jsx("span", {
					style: task[2] === "x" ? {
						color: "var(--muted)",
						textDecoration: "line-through"
					} : void 0,
					children: inline(task[3], idx, noteDir)
				})]
			}))));
			return;
		}
		const head = /^(#{1,6}) (.*)$/.exec(line);
		if (head) {
			const n = head[1].length;
			const Tag = `h${n}`;
			const style = {
				fontSize: HEADING_SIZES[n - 1],
				fontWeight: DOC_HEADING_WEIGHTS[n - 1],
				lineHeight: 1.25,
				color: HEADING_FG,
				marginTop: n <= 2 ? "14px" : "10px",
				marginRight: 0,
				marginBottom: n <= 2 ? "6px" : "4px",
				marginLeft: n <= 2 ? 0 : `-10px`
			};
			if (n <= 2) {
				style.borderBottomWidth = n === 1 ? "2px" : "1px";
				style.borderBottomStyle = "solid";
				style.borderBottomColor = n === 1 ? HEADING_RULE_STRONG : HEADING_RULE_SOFT;
				style.paddingBottom = n === 1 ? "4px" : "3px";
			} else {
				style.borderLeftWidth = "2px";
				style.borderLeftStyle = "solid";
				style.borderLeftColor = HEADING_RAIL;
				style.paddingLeft = `8px`;
			}
			out.push(blk(idx, idx, /* @__PURE__ */ jsx(Tag, {
				style,
				children: inline(head[2], idx, noteDir)
			}), {
				fontSize: style.fontSize,
				fontWeight: style.fontWeight,
				lineHeight: style.lineHeight,
				color: style.color
			}));
			return;
		}
		const li = /^(\s*)[-*] (.*)$/.exec(line);
		if (li) {
			const ind = indentPx(li[1]);
			out.push(withRails(enter(ind), idx, blk(idx, idx, /* @__PURE__ */ jsx("div", {
				style: { marginLeft: ind + 4 },
				children: ["• ", ...inline(li[2], idx, noteDir)]
			}))));
			return;
		}
		const ol = /^(\s*)(\d+)\. (.*)$/.exec(line);
		if (ol) {
			const ind = indentPx(ol[1]);
			out.push(withRails(enter(ind), idx, blk(idx, idx, /* @__PURE__ */ jsx("div", {
				style: { marginLeft: ind + 4 },
				children: [`${ol[2]}. `, ...inline(ol[3], idx, noteDir)]
			}))));
			return;
		}
		if (/^(-{3,}|\*{3,})$/.test(line.trim())) {
			out.push(blk(idx, idx, /* @__PURE__ */ jsx("hr", { style: {
				border: "none",
				borderTop: "1px solid var(--border)",
				pointerEvents: "none"
			} })));
			return;
		}
		if (line.startsWith("> ")) {
			out.push(blk(idx, idx, /* @__PURE__ */ jsx("div", {
				style: {
					borderLeft: `3px solid ${ACCENT_BG}`,
					paddingLeft: "8px",
					color: "var(--muted)"
				},
				children: inline(line.slice(2), idx, noteDir)
			})));
			return;
		}
		out.push(blk(idx, idx, line.trim() === "" ? /* @__PURE__ */ jsx("div", { style: { height: "8px" } }) : /* @__PURE__ */ jsx("div", { children: inline(line, idx, noteDir) })));
	});
	const appendStart = lines.length;
	out.push(editRange && editRange.start === appendStart ? /* @__PURE__ */ jsx(BlockEditor, {
		initial: "",
		onCommit: onCommitEdit,
		onCancel: onCancelEdit,
		onDirty: onDirtyEdit,
		onSplit: onSplitEdit
	}, "edit-append") : /* @__PURE__ */ jsx(Clickable, {
		onClick: () => onStartEdit(appendStart, appendStart - 1),
		style: {
			minHeight: "80px",
			cursor: "text"
		}
	}, "append"));
	return /* @__PURE__ */ jsx("div", {
		className: "mdnb-note",
		style: {
			fontSize: `16px`,
			lineHeight: DOC_BODY_LINE_HEIGHT,
			display: "flex",
			flexDirection: "column",
			minHeight: "100%"
		},
		children: /* @__PURE__ */ jsx(VaultRootCtx.Provider, {
			value: vaultRoot,
			children: out
		})
	});
}
// src/host/destinationVars.ts
/** destinationVars — interpolation variables for prose that names where in
*  the dashboard something lives ("… under {{capabilities}} → {{tab}}").
*
*  Rail entries and tab labels are catalog values already; prose that names
*  them must read the same keys instead of re-spelling the words, or a relabel
*  silently turns the sentence into a wrong destination again — the drift
*  class the settings-redirect audit found. Both halves resolve in the active
*  locale, so every catalog carries only the placeholders.
*/
var CAPABILITIES_TAB_LABEL_KEY = {
	knowledge: "pages.capabilitiesPage.knowledge_label",
	skills: "pages.capabilitiesPage.skills_label"
};
/** `{{capabilities}} → {{tab}}`: the Agent Capabilities rail entry and one of its tabs. */
function capabilitiesVars(tab) {
	return {
		capabilities: i18nT("nav.agent_capabilities"),
		tab: i18nT(CAPABILITIES_TAB_LABEL_KEY[tab])
	};
}
// src/host/edgeAuthChallenge.ts
/**
* The dashboard's `api/edgeAuthChallenge`, restated for the two names this page uses.
*
* A gate in front of the gateway (an auth proxy) answers an expired session with its
* own HTML sign-in page, not the backend's JSON. Recognising it lets the page say
* "reload to sign in again" instead of showing the proxy's markup as an error.
* The host keeps a per-message address memo for its own error screen; this page shows
* the message inline, so it has none.
*/
var HTML_DOCUMENT_START = /^<(?:!doctype\s|html[\s>])/i;
var CHALLENGE_STATUSES = /* @__PURE__ */ new Set([401, 403]);
function isEmbeddedPane() {
	try {
		return typeof window !== "undefined" && window.self !== window.top;
	} catch {
		return true;
	}
}
function noteEdgeAuthChallenge(status, contentType, body) {
	if (!CHALLENGE_STATUSES.has(status)) return null;
	const type = (contentType ?? "").split(";", 1)[0].trim().toLowerCase();
	if (type !== "text/html" && type !== "application/xhtml+xml") return null;
	if (!HTML_DOCUMENT_START.test(body.trim())) return null;
	if (typeof window === "undefined") return "challenged";
	return isEmbeddedPane() ? "framed" : "challenged";
}
function edgeChallengeMessage(outcome) {
	if (outcome === null) return null;
	if (outcome === "framed") {
		let origin = "";
		try {
			origin = typeof window === "undefined" ? "" : window.location.origin;
		} catch {
			origin = "";
		}
		return i18nT("api.client.proxy_challenge_framed", { origin });
	}
	return i18nT("api.client.proxy_challenge_reload");
}
// src/api.ts
/**
* API client for the Notes app.
*
* Two different servers are involved:
*  - `API_BASE` is the app's own backend, reached through the gateway proxy.
*  - the Knowledge calls go to the DASHBOARD's own API, because registering a
*    folder needs the user's session. `/api/knowledge` is declared in the
*    manifest's `permissions.api` for exactly that reason.
*/
/** An API failure that carries the response payload callers need. */
var ApiError = class extends Error {
	status;
	body;
	/** The backend process predates this UI bundle. */
	staleBackend;
	constructor(message, status, body, stale = false) {
		super(message);
		this.name = "ApiError";
		this.status = status;
		this.body = body;
		this.staleBackend = stale;
	}
};
/** Catalog key for the message shown when the running backend is older than this page. */
var STALE_BACKEND_KEY = "apps.mdNotebook.banner.staleBackendRoute";
async function mdnbCall(method, path, body) {
	const res = await fetch(API_BASE + path, {
		method,
		credentials: "same-origin",
		headers: { "Content-Type": "application/json" },
		body: body === void 0 ? void 0 : JSON.stringify(body)
	});
	const text = await res.text().catch(() => "");
	let json;
	try {
		json = JSON.parse(text);
	} catch {
		json = {};
	}
	if (!res.ok) {
		const challenge = res.status === 403 && res.headers.get("X-Auth-Required") === "true" ? null : edgeChallengeMessage(noteEdgeAuthChallenge(res.status, res.headers.get("content-type"), text));
		const raw = typeof json.error === "string" ? json.error : res.statusText;
		const stale = /^no route: /.test(raw);
		if (challenge !== null) throw new ApiError(challenge, res.status, json, false);
		throw new ApiError(stale ? i18nT(STALE_BACKEND_KEY) : raw, res.status, json, stale);
	}
	return json;
}
/** Append the active vault to a vault-scoped path. */
function mdnbVaultQuery(path, vault) {
	if (!vault) return path;
	return path + (path.includes("?") ? "&" : "?") + new URLSearchParams({ vault }).toString();
}
var notesApi = {
	health: () => mdnbCall("GET", "/health"),
	listVaults: () => mdnbCall("GET", "/vaults"),
	cloneVault: (payload) => mdnbCall("POST", "/vaults", payload),
	attachVault: (payload) => mdnbCall("POST", "/vaults/attach", payload),
	forgetVault: (id) => mdnbCall("DELETE", `/vaults?vault=${encodeURIComponent(id)}`),
	setVaultKnowledge: (vault, knowledge, sourceId) => mdnbCall("PUT", "/vaults/knowledge", {
		vault,
		knowledge,
		sourceId
	}),
	setPat: (pat) => mdnbCall("PUT", "/pat", { pat }),
	pickFolder: () => mdnbCall("POST", "/pick-folder"),
	listNotes: (vault) => mdnbCall("GET", mdnbVaultQuery("/notes", vault)),
	readNote: (vault, path) => mdnbCall("GET", mdnbVaultQuery(`/note?path=${encodeURIComponent(path)}`, vault)),
	saveNote: (vault, path, content, baseMtime, baseHash) => mdnbCall("PUT", mdnbVaultQuery("/note", vault), {
		path,
		content,
		baseMtime,
		baseHash
	}),
	deleteNote: (vault, path) => mdnbCall("DELETE", mdnbVaultQuery(`/note?path=${encodeURIComponent(path)}`, vault)),
	newNote: (vault, folder) => mdnbCall("POST", mdnbVaultQuery("/note/new", vault), { folder }),
	duplicateNote: (vault, path) => mdnbCall("POST", mdnbVaultQuery("/note/duplicate", vault), { path }),
	moveNote: (vault, from, to) => mdnbCall("POST", mdnbVaultQuery("/note/move", vault), {
		from,
		to
	}),
	sync: (vault) => mdnbCall("POST", mdnbVaultQuery("/sync", vault)),
	/** Commit pending edits to local git history only — never pushes. */
	commit: (vault) => mdnbCall("POST", mdnbVaultQuery("/commit", vault)),
	/**
	* Reveal the vault's `.trash` in the OS file manager. Sends no path — the
	* backend derives the directory from the vault, so this cannot open anything
	* else. `empty: true` means nothing has been deleted yet and no folder exists.
	*/
	openTrash: (vault) => mdnbCall("POST", mdnbVaultQuery("/trash/open", vault)),
	search: (vault, q) => mdnbCall("GET", mdnbVaultQuery(`/search?q=${encodeURIComponent(q)}`, vault)),
	changes: (vault, since) => mdnbCall("GET", mdnbVaultQuery(`/changes?since=${since}`, vault)),
	/** The user's sync settings. Not vault-scoped: they apply to every vault. */
	settings: () => mdnbCall("GET", "/settings"),
	/**
	* Update sync settings. The caller sends the FULL desired {autoSync,
	* autoSyncMins} so a winning write never drops the other field. Writes are
	* serialized single-flight on the client and applied in arrival order by the
	* server; no client ordering token is sent. `lastSync` is server-owned and is
	* never accepted here.
	*/
	saveSettings: (patch) => mdnbCall("PUT", "/settings", patch)
};
/**
* Register the vault folder as a Knowledge source and confirm it so ingestion
* starts. A 409 means the folder is already registered — adopt that id rather
* than failing, so a re-enable after a partial failure recovers cleanly.
*/
async function knowledgeRegister(vault) {
	const res = await fetch("/api/knowledge/sources", {
		method: "POST",
		credentials: "same-origin",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			name: vault.name,
			source_type: "obsidian_vault",
			uri: vaultContentPath(vault),
			properties: {}
		})
	});
	const body = await res.json().catch(() => ({}));
	if (!res.ok && res.status !== 409) throw new Error(body.error || `knowledge add failed (${res.status})`);
	if (!body.id) throw new Error(body.error || "knowledge add returned no source id");
	const confirm = await fetch(`/api/knowledge/sources/${encodeURIComponent(body.id)}/confirm`, {
		method: "POST",
		credentials: "same-origin"
	});
	if (!confirm.ok) {
		const detail = await confirm.json().catch(() => ({}));
		await knowledgeUnregister(body.id).catch(() => void 0);
		throw new Error(detail.error || `knowledge confirm failed (${confirm.status})`);
	}
	return {
		sourceId: body.id,
		fileCount: body.file_count
	};
}
/** Remove a vault's Knowledge source. Already-gone is not an error. */
async function knowledgeUnregister(sourceId) {
	if (!sourceId) return;
	const res = await fetch(`/api/knowledge/sources/${encodeURIComponent(sourceId)}`, {
		method: "DELETE",
		credentials: "same-origin"
	});
	if (!res.ok && res.status !== 404) {
		const body = await res.json().catch(() => ({}));
		throw new Error(body.error || `knowledge remove failed (${res.status})`);
	}
}
// src/host/github-mark.svg?inline
var github_mark_default = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2016%2016'%20width='16'%20height='16'%3e%3cpath%20fill='%23000'%20d='M8%200C3.58%200%200%203.58%200%208c0%203.54%202.29%206.53%205.47%207.59.4.07.55-.17.55-.38%200-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01%201.08.58%201.23.82.72%201.21%201.87.87%202.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95%200-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12%200%200%20.67-.21%202.2.82.64-.18%201.32-.27%202-.27s1.36.09%202%20.27c1.53-1.04%202.2-.82%202.2-.82.44%201.1.16%201.92.08%202.12.51.56.82%201.27.82%202.15%200%203.07-1.87%203.75-3.65%203.95.29.25.54.73.54%201.48%200%201.07-.01%201.93-.01%202.2%200%20.21.15.46.55.38A8.01%208.01%200%200%200%2016%208c0-4.42-3.58-8-8-8z'/%3e%3c/svg%3e";
// src/host/BrandIcon.tsx
/**
* The dashboard's GitHub mark (`components/BrandIcon.GithubIcon`): the monochrome
* mark tinted through a CSS mask so it follows `currentColor`, like the lucide icons
* beside it. The SVG is inlined into the bundle as a `data:` URI, so the URL is quoted.
*/
function GithubIcon({ size = 16 }) {
	return /* @__PURE__ */ jsx("span", {
		"aria-hidden": "true",
		className: "inline-block shrink-0",
		style: {
			width: size,
			height: size,
			backgroundColor: "currentColor",
			WebkitMaskImage: `url("${github_mark_default}")`,
			maskImage: `url("${github_mark_default}")`,
			WebkitMaskRepeat: "no-repeat",
			maskRepeat: "no-repeat",
			WebkitMaskSize: "contain",
			maskSize: "contain",
			WebkitMaskPosition: "center",
			maskPosition: "center"
		}
	});
}
// src/bits.tsx
/** Shared link treatment: an underlined accent button with no chrome. */
var linkStyle = {
	padding: 0,
	border: "none",
	background: "transparent",
	color: ACCENT,
	font: "inherit",
	textDecoration: "underline",
	textUnderlineOffset: "2px",
	cursor: "pointer"
};
/**
* Underlined text link that runs an action rather than navigating.
*
* A `<button>`, not an `<a>`: there is no href — the click asks the backend to
* reveal a folder — and an anchor without one is unreachable by keyboard. The
* underline is what makes it read as a link at this size, where a bare accent
* colour is easy to miss.
*/
function TextLink({ label, onClick, disabled, title }) {
	return /* @__PURE__ */ jsx("button", {
		type: "button",
		onClick,
		disabled,
		title,
		style: {
			...linkStyle,
			fontSize: "11.5px",
			cursor: disabled ? "default" : "pointer",
			opacity: disabled ? .6 : 1
		},
		children: label
	});
}
/**
* The same link, sized to sit INSIDE a sentence — `font: inherit` with no size
* of its own, so it matches the surrounding prose rather than the app's default.
*
* Takes children rather than a label because it is rendered by `<Trans>`, which
* clones the component around the translated text between its tags. That is the
* only way to put a link mid-sentence without splitting the sentence across two
* catalog keys — a split reads fine in English and breaks in every language whose
* word order differs.
*/
function InlineLink({ children, onClick, title }) {
	return /* @__PURE__ */ jsx("button", {
		type: "button",
		onClick,
		title,
		style: linkStyle,
		children
	});
}
/** Track-and-knob switch, shared by the sync and knowledge toggles. */
function Switch({ on, onChange, label, disabled }) {
	return /* @__PURE__ */ jsx("button", {
		type: "button",
		role: "switch",
		"aria-checked": Boolean(on),
		"aria-label": label,
		disabled,
		onClick: () => onChange(!on),
		style: {
			flexShrink: 0,
			width: "34px",
			height: "20px",
			borderRadius: "9999px",
			border: "none",
			padding: "2px",
			cursor: disabled ? "default" : "pointer",
			opacity: disabled ? .5 : 1,
			background: on ? ACCENT : "var(--border)",
			display: "flex",
			justifyContent: on ? "flex-end" : "flex-start",
			alignItems: "center",
			transition: "background .15s"
		},
		children: /* @__PURE__ */ jsx("span", { style: {
			width: "16px",
			height: "16px",
			borderRadius: "9999px",
			background: on ? ACCENT_FG : "var(--bg-elevated)",
			display: "block"
		} })
	});
}
// src/ConnectVault.tsx
/** Connect a vault: clone a GitHub repo, or attach a folder already on disk. */
var field$1 = {
	width: "100%",
	boxSizing: "border-box",
	fontSize: "12px",
	padding: "7px 10px",
	borderRadius: "6px",
	border: "1px solid var(--border)",
	background: "var(--bg)",
	color: "var(--text)",
	outline: "none",
	marginTop: "4px"
};
var label = {
	fontSize: "11px",
	color: "var(--muted)",
	display: "block",
	marginTop: "12px"
};
function ConnectVault({ onConnected, onCancel }) {
	const [mode, setMode] = useState("clone");
	const [url, setUrl] = useState("");
	const [folder, setFolder] = useState("");
	const [pat, setPat] = useState("");
	const [branch, setBranch] = useState("main");
	const [subfolder, setSubfolder] = useState("");
	const [knowledge, setKnowledge] = useState(false);
	const [busy, setBusy] = useState(false);
	const [picking, setPicking] = useState(false);
	const [error, setError] = useState(null);
	const attaching = mode === "attach";
	const segment = (active) => ({
		flex: 1,
		padding: "6px 10px",
		borderRadius: "8px",
		border: "none",
		cursor: "pointer",
		fontSize: "12px",
		fontWeight: 500,
		fontFamily: FONT_BODY,
		background: active ? ACCENT : "transparent",
		color: active ? ACCENT_FG : "var(--muted)"
	});
	async function submit() {
		setBusy(true);
		setError(null);
		try {
			const sub = subfolder.replace(/\/$/, "") || void 0;
			const { vault } = attaching ? await notesApi.attachVault({
				path: folder.trim(),
				subfolder: sub,
				knowledge
			}) : await notesApi.cloneVault({
				url,
				pat: pat || void 0,
				branch,
				subfolder: sub,
				knowledge
			});
			if (knowledge) try {
				const { sourceId } = await knowledgeRegister(vault);
				await notesApi.setVaultKnowledge(vault.id, true, sourceId);
			} catch (e) {
				await notesApi.setVaultKnowledge(vault.id, false).catch(() => void 0);
				setError(i18nT("apps.mdNotebook.connect.knowledgeFailed", { message: e instanceof Error ? e.message : String(e) }));
			}
			onConnected(vault);
		} catch (e) {
			setError(e instanceof Error ? e.message : String(e));
		} finally {
			setBusy(false);
		}
	}
	async function choose() {
		setPicking(true);
		setError(null);
		try {
			const { path, cancelled } = await notesApi.pickFolder();
			if (!cancelled && path) setFolder(path);
		} catch (e) {
			setError(e instanceof ApiError && e.status === 501 ? i18nT("apps.mdNotebook.connect.pickerNeedsMac") : i18nT("apps.mdNotebook.connect.pickerFailed", { message: e instanceof Error ? e.message : String(e) }));
		} finally {
			setPicking(false);
		}
	}
	return /* @__PURE__ */ jsx("div", {
		style: {
			minHeight: "100%",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			padding: "24px",
			boxSizing: "border-box",
			fontFamily: FONT_BODY,
			color: "var(--text)"
		},
		children: /* @__PURE__ */ jsxs("div", {
			style: {
				width: "100%",
				maxWidth: "440px",
				background: "var(--bg)",
				border: "1px solid var(--border)",
				borderRadius: "6px",
				padding: "20px"
			},
			children: [
				/* @__PURE__ */ jsx("div", {
					style: {
						fontSize: "18px",
						fontWeight: 600
					},
					children: i18nT("apps.mdNotebook.connect.title")
				}),
				/* @__PURE__ */ jsxs("div", {
					style: {
						display: "flex",
						gap: "4px",
						marginTop: "14px",
						padding: "4px",
						background: "var(--card)",
						borderRadius: "10px"
					},
					children: [/* @__PURE__ */ jsx("button", {
						type: "button",
						style: segment(!attaching),
						onClick: () => setMode("clone"),
						children: i18nT("apps.mdNotebook.connect.cloneTab")
					}), /* @__PURE__ */ jsx("button", {
						type: "button",
						style: segment(attaching),
						onClick: () => setMode("attach"),
						children: i18nT("apps.mdNotebook.connect.attachTab")
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					style: {
						fontSize: "11px",
						color: "var(--muted)",
						marginTop: "8px"
					},
					children: attaching ? i18nT("apps.mdNotebook.connect.attachHelp") : i18nT("apps.mdNotebook.connect.cloneHelp")
				}),
				attaching && /* @__PURE__ */ jsx("div", {
					style: {
						fontSize: "11px",
						color: "var(--muted)",
						marginTop: "4px"
					},
					children: i18nT("apps.mdNotebook.connect.attachNoRemoteHelp")
				}),
				attaching ? /* @__PURE__ */ jsxs("label", {
					style: label,
					htmlFor: "mdnb-localFolder",
					children: [i18nT("apps.mdNotebook.connect.localFolder"), /* @__PURE__ */ jsxs("div", {
						style: {
							display: "flex",
							gap: "8px",
							alignItems: "stretch",
							marginTop: "4px"
						},
						children: [/* @__PURE__ */ jsx("input", {
							id: "mdnb-localFolder",
							"aria-label": i18nT("apps.mdNotebook.connect.localFolder"),
							style: {
								...field$1,
								marginTop: 0,
								flex: 1,
								minWidth: 0
							},
							value: folder,
							onChange: (e) => setFolder(e.target.value),
							placeholder: i18nT("apps.mdNotebook.connect.localFolderPlaceholder")
						}), /* @__PURE__ */ jsxs("button", {
							type: "button",
							disabled: picking,
							onClick: choose,
							style: {
								display: "flex",
								alignItems: "center",
								gap: "6px",
								background: "transparent",
								color: "var(--muted)",
								border: "1px solid var(--border)",
								padding: "0 12px",
								borderRadius: "8px",
								fontSize: "11px",
								fontWeight: 500,
								cursor: picking ? "default" : "pointer",
								flexShrink: 0,
								whiteSpace: "nowrap"
							},
							children: [/* @__PURE__ */ jsx(FolderOpen, { size: 13 }), picking ? i18nT("apps.mdNotebook.connect.choosing") : i18nT("apps.mdNotebook.connect.choose")]
						})]
					})]
				}) : /* @__PURE__ */ jsxs(Fragment, { children: [
					/* @__PURE__ */ jsxs("label", {
						style: label,
						htmlFor: "mdnb-repoUrl",
						children: [i18nT("apps.mdNotebook.connect.repoUrl"), /* @__PURE__ */ jsx("input", {
							id: "mdnb-repoUrl",
							"aria-label": i18nT("apps.mdNotebook.connect.repoUrl"),
							style: field$1,
							value: url,
							onChange: (e) => setUrl(e.target.value),
							placeholder: i18nT("apps.mdNotebook.connect.repoUrlPlaceholder")
						})]
					}),
					/* @__PURE__ */ jsxs("label", {
						style: label,
						htmlFor: "mdnb-branch",
						children: [i18nT("apps.mdNotebook.connect.branch"), /* @__PURE__ */ jsx("input", {
							id: "mdnb-branch",
							"aria-label": i18nT("apps.mdNotebook.connect.branch"),
							style: field$1,
							value: branch,
							onChange: (e) => setBranch(e.target.value)
						})]
					}),
					/* @__PURE__ */ jsxs("label", {
						style: label,
						htmlFor: "mdnb-token",
						children: [i18nT("apps.mdNotebook.connect.token"), /* @__PURE__ */ jsx("input", {
							id: "mdnb-token",
							"aria-label": i18nT("apps.mdNotebook.connect.token"),
							style: field$1,
							type: "password",
							value: pat,
							onChange: (e) => setPat(e.target.value),
							placeholder: i18nT("apps.mdNotebook.connect.tokenPlaceholder")
						})]
					})
				] }),
				/* @__PURE__ */ jsxs("label", {
					style: label,
					children: [i18nT("apps.mdNotebook.connect.subfolder"), /* @__PURE__ */ jsx("input", {
						id: "mdnb-subfolder",
						"aria-label": i18nT("apps.mdNotebook.connect.subfolder"),
						style: field$1,
						value: subfolder,
						onChange: (e) => setSubfolder(e.target.value),
						placeholder: i18nT("apps.mdNotebook.connect.subfolderPlaceholder")
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					style: {
						display: "flex",
						alignItems: "flex-start",
						gap: "10px",
						marginTop: "16px"
					},
					children: [/* @__PURE__ */ jsxs("div", {
						style: {
							flex: 1,
							minWidth: 0
						},
						children: [/* @__PURE__ */ jsx("div", {
							style: {
								fontSize: "13px",
								fontWeight: 500
							},
							children: i18nT("apps.mdNotebook.knowledge.label")
						}), /* @__PURE__ */ jsx("div", {
							style: {
								fontSize: "11px",
								color: "var(--muted)",
								marginTop: "2px"
							},
							children: i18nT("apps.mdNotebook.knowledge.connectHelp", capabilitiesVars("knowledge"))
						})]
					}), /* @__PURE__ */ jsx(Switch, {
						on: knowledge,
						onChange: setKnowledge,
						label: i18nT("apps.mdNotebook.knowledge.label")
					})]
				}),
				error && /* @__PURE__ */ jsx("div", {
					style: {
						marginTop: "10px",
						fontSize: "11px",
						color: "var(--danger)"
					},
					children: error
				}),
				/* @__PURE__ */ jsx("button", {
					type: "button",
					disabled: !busy && (attaching ? !folder : !url),
					"aria-disabled": busy || void 0,
					onClick: () => {
						if (!busy) submit();
					},
					style: {
						marginTop: "16px",
						background: busy ? "transparent" : ACCENT,
						color: busy ? "var(--muted)" : ACCENT_FG,
						border: "none",
						padding: "7px 18px",
						borderRadius: "12px",
						fontSize: "11px",
						fontWeight: 500,
						cursor: busy ? "default" : "pointer"
					},
					children: busy ? attaching ? i18nT("apps.mdNotebook.connect.attaching") : i18nT("apps.mdNotebook.connect.cloning") : attaching ? i18nT("apps.mdNotebook.connect.attachAction") : i18nT("apps.mdNotebook.connect.cloneAction")
				}),
				onCancel && /* @__PURE__ */ jsx("button", {
					type: "button",
					onClick: onCancel,
					style: {
						marginTop: "16px",
						marginLeft: "8px",
						background: "transparent",
						color: "var(--muted)",
						border: "1px solid var(--border)",
						padding: "7px 14px",
						borderRadius: "8px",
						fontSize: "11px",
						fontWeight: 500,
						cursor: "pointer"
					},
					children: i18nT("apps.mdNotebook.connect.cancel")
				})
			]
		})
	});
}
// src/ConfirmDialog.tsx
/**
* Themed confirmation dialog for the Notes app.
*
* Replaces `window.confirm`, which renders as an OS sheet in the desktop app —
* the one place the app broke out of its own design language, and unthemeable by
* construction. Local to this app rather than the dashboard's shared Dialog for
* the same reason every other surface here is: geometry and colour live in inline
* styles that no CSS purge can strip, and the app ships as a compiled builtin.
*/
var btn = {
	height: "30px",
	padding: "0 14px",
	borderRadius: "8px",
	fontSize: "12px",
	fontWeight: 500,
	fontFamily: FONT_BODY,
	cursor: "pointer"
};
function ConfirmDialog({ title, body, footer, confirmLabel, cancelLabel, onConfirm, onCancel }) {
	const confirmRef = useRef(null);
	useEffect(() => {
		confirmRef.current?.focus();
		const onKey = (e) => {
			if (e.key !== "Escape") return;
			e.preventDefault();
			e.stopPropagation();
			onCancel();
		};
		window.addEventListener("keydown", onKey, true);
		return () => window.removeEventListener("keydown", onKey, true);
	}, [onCancel]);
	return /* @__PURE__ */ jsx("div", {
		role: "presentation",
		onClick: onCancel,
		style: {
			position: "absolute",
			inset: 0,
			zIndex: 50,
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			background: "rgba(0,0,0,0.55)"
		},
		children: /* @__PURE__ */ jsxs("div", {
			role: "dialog",
			"aria-modal": "true",
			"aria-label": title,
			onClick: (e) => e.stopPropagation(),
			style: {
				width: "min(420px, calc(100% - 48px))",
				boxSizing: "border-box",
				padding: "18px 20px 16px",
				background: "var(--bg-elevated)",
				border: "1px solid var(--border)",
				borderRadius: "12px",
				boxShadow: "0 12px 32px rgba(0,0,0,0.35)",
				fontFamily: FONT_BODY
			},
			children: [
				/* @__PURE__ */ jsx("div", {
					style: {
						fontSize: "15px",
						fontWeight: 600,
						color: "var(--text)"
					},
					children: title
				}),
				/* @__PURE__ */ jsx("div", {
					style: {
						marginTop: "8px",
						fontSize: "12.5px",
						lineHeight: 1.5,
						color: "var(--muted)"
					},
					children: body
				}),
				footer && /* @__PURE__ */ jsx("div", {
					style: { marginTop: "10px" },
					children: footer
				}),
				/* @__PURE__ */ jsxs("div", {
					style: {
						marginTop: "18px",
						display: "flex",
						justifyContent: "flex-end",
						gap: "8px"
					},
					children: [/* @__PURE__ */ jsx("button", {
						type: "button",
						className: "mdnb-dlg-cancel",
						onClick: onCancel,
						style: {
							...btn,
							background: "transparent",
							border: "1px solid var(--border)",
							color: "var(--text)"
						},
						children: cancelLabel
					}), /* @__PURE__ */ jsx("button", {
						ref: confirmRef,
						type: "button",
						className: "mdnb-dlg-danger",
						onClick: onConfirm,
						style: {
							...btn,
							background: "var(--danger)",
							border: "1px solid var(--danger)",
							color: "var(--danger-fg)"
						},
						children: confirmLabel
					})]
				})
			]
		})
	});
}
// src/SettingsPage.tsx
/**
* Settings, rendered as a PAGE in the note pane rather than a floating modal —
* same header geometry and reading column as a note, so switching between a
* note and Settings does not shift the layout.
*
* Escape leaves the page; a click outside does NOT, because this is a
* destination rather than a dialog.
*/
var field = {
	boxSizing: "border-box",
	fontSize: "12px",
	padding: "6px 10px",
	borderRadius: "6px",
	border: "1px solid var(--border)",
	background: "var(--bg)",
	color: "var(--text)",
	outline: "none"
};
var sectionLabel = {
	fontSize: "11px",
	textTransform: "uppercase",
	letterSpacing: ".04em",
	color: "var(--muted)",
	marginBottom: "6px"
};
function SettingsPage({ vaults, activeVaultId, hasPat, hasGhAuth, autoSync, autoSyncMins, autoCommit, syncPrefsError, shortcut, onClose, onSwitchVault, onConnect, onForget, onSetPat, onSetKnowledge, onAutoSync, onAutoSyncMins, onAutoCommit, onSetShortcut, onRecordingChange }) {
	const [pat, setPat] = useState("");
	const [busy, setBusy] = useState(false);
	const [patNote, setPatNote] = useState(null);
	const [knowledgeMsg, setKnowledgeMsg] = useState({});
	const [trashMsg, setTrashMsg] = useState({});
	const revealTrash = useCallback(async (vault) => {
		setTrashMsg((prev) => ({
			...prev,
			[vault.id]: null
		}));
		try {
			if ((await notesApi.openTrash(vault.id)).empty) setTrashMsg((prev) => ({
				...prev,
				[vault.id]: i18nT("apps.mdNotebook.trash.empty")
			}));
		} catch (e) {
			const code = e.body?.code;
			setTrashMsg((prev) => ({
				...prev,
				[vault.id]: code === "folder_open_unsupported" ? i18nT("apps.mdNotebook.trash.unsupported") : i18nT("apps.mdNotebook.trash.failed", { message: e instanceof Error ? e.message : String(e) })
			}));
		}
	}, []);
	const [knowledgeBusy, setKnowledgeBusy] = useState(null);
	const [confirmForget, setConfirmForget] = useState(null);
	const [forgetError, setForgetError] = useState(null);
	const [recording, setRecording] = useState(false);
	const [shortcutError, setShortcutError] = useState(null);
	const toggleKnowledge = useCallback(async (vault, next) => {
		setKnowledgeBusy(vault.id);
		setKnowledgeMsg((m) => ({
			...m,
			[vault.id]: null
		}));
		const say = (text, error) => setKnowledgeMsg((m) => ({
			...m,
			[vault.id]: {
				text,
				error
			}
		}));
		try {
			if (next) {
				const { sourceId, fileCount } = await knowledgeRegister(vault);
				try {
					await onSetKnowledge(vault.id, true, sourceId);
				} catch (e) {
					await knowledgeUnregister(sourceId).catch(() => void 0);
					throw e;
				}
				say(typeof fileCount === "number" ? i18nT("apps.mdNotebook.settings.knowledgeAddedCount", {
					count: fileCount,
					n: fmtNumber(fileCount)
				}) : i18nT("apps.mdNotebook.settings.knowledgeAdded"));
			} else {
				const priorSourceId = vault.knowledgeSourceId;
				await onSetKnowledge(vault.id, false);
				try {
					await knowledgeUnregister(priorSourceId);
				} catch (e) {
					await onSetKnowledge(vault.id, true, priorSourceId ?? void 0).catch(() => void 0);
					throw e;
				}
				say(i18nT("apps.mdNotebook.settings.knowledgeRemoved"));
			}
		} catch (e) {
			say(e instanceof Error ? e.message : String(e), true);
		} finally {
			setKnowledgeBusy(null);
		}
	}, [onSetKnowledge]);
	useEffect(() => {
		const onKey = (e) => {
			if (e.key === "Escape") {
				e.stopPropagation();
				onClose();
			}
		};
		document.addEventListener("keydown", onKey);
		return () => document.removeEventListener("keydown", onKey);
	}, [onClose]);
	useEffect(() => {
		if (!recording) return;
		onRecordingChange(true);
		setShortcutError(null);
		const onKey = (e) => {
			e.preventDefault();
			e.stopPropagation();
			if (e.key === "Escape") {
				setRecording(false);
				return;
			}
			if (!e.metaKey && !e.ctrlKey && !e.altKey) {
				setShortcutError(i18nT("apps.mdNotebook.settings.shortcutNeedsModifier"));
				return;
			}
			onSetShortcut({
				key: e.key.length === 1 ? e.key.toLowerCase() : e.key,
				meta: e.metaKey,
				ctrl: e.ctrlKey,
				alt: e.altKey,
				shift: e.shiftKey
			});
			setShortcutError(null);
			setRecording(false);
		};
		window.addEventListener("keydown", onKey, true);
		return () => {
			window.removeEventListener("keydown", onKey, true);
			onRecordingChange(false);
		};
	}, [
		recording,
		onSetShortcut,
		onRecordingChange
	]);
	const pill = (primary) => ({
		background: primary ? ACCENT : "transparent",
		color: primary ? ACCENT_FG : "var(--muted)",
		border: primary ? "none" : "1px solid var(--border)",
		padding: "5px 14px",
		borderRadius: primary ? "12px" : "8px",
		fontSize: "11px",
		fontWeight: 500,
		cursor: busy ? "default" : "pointer",
		flexShrink: 0,
		fontFamily: FONT_BODY
	});
	const authStatus = hasPat ? i18nT("apps.mdNotebook.settings.authStored") : hasGhAuth ? i18nT("apps.mdNotebook.settings.authGh") : i18nT("apps.mdNotebook.settings.authNone");
	return /* @__PURE__ */ jsxs("div", {
		style: {
			flex: 1,
			display: "flex",
			flexDirection: "column",
			minWidth: 0,
			minHeight: 0,
			fontFamily: FONT_BODY,
			color: "var(--text)"
		},
		children: [/* @__PURE__ */ jsxs("div", {
			style: { position: "relative" },
			children: [
				/* @__PURE__ */ jsx("button", {
					type: "button",
					onClick: onClose,
					"aria-label": i18nT("apps.mdNotebook.settings.close"),
					title: i18nT("apps.mdNotebook.settings.close"),
					style: {
						position: "absolute",
						top: "24px",
						right: `20px`,
						zIndex: 2,
						width: "28px",
						height: "28px",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						borderRadius: "8px",
						background: "transparent",
						border: "none",
						color: "var(--muted)",
						cursor: "pointer"
					},
					children: /* @__PURE__ */ jsx(X, { size: 15 })
				}),
				/* @__PURE__ */ jsxs("div", {
					style: {
						margin: "0 auto",
						width: "100%",
						maxWidth: `800px`,
						boxSizing: "border-box",
						padding: `24px 20px 14px`
					},
					children: [/* @__PURE__ */ jsx("div", {
						style: {
							fontSize: `${DOC_H1_PX}px`,
							fontWeight: DOC_HEADING_WEIGHTS[0],
							lineHeight: 1.25
						},
						children: i18nT("apps.mdNotebook.settings.title")
					}), /* @__PURE__ */ jsx("div", {
						style: {
							fontSize: "11px",
							fontWeight: 400,
							color: "var(--muted)",
							marginTop: "2px"
						},
						children: i18nT("apps.mdNotebook.settings.subtitle")
					})]
				}),
				/* @__PURE__ */ jsx("div", { style: {
					borderTop: "1px solid var(--border)",
					margin: `0 20px`
				} })
			]
		}), /* @__PURE__ */ jsx("div", {
			style: {
				flex: 1,
				overflowY: "auto",
				minHeight: 0
			},
			children: /* @__PURE__ */ jsxs("div", {
				style: {
					margin: "0 auto",
					width: "100%",
					maxWidth: `800px`,
					boxSizing: "border-box",
					padding: `16px 20px 32px`,
					display: "flex",
					flexDirection: "column",
					gap: "20px"
				},
				children: [
					/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("div", {
							style: sectionLabel,
							children: i18nT("apps.mdNotebook.settings.vaultsSection")
						}),
						/* @__PURE__ */ jsxs("div", {
							style: {
								display: "flex",
								flexDirection: "column",
								gap: "8px"
							},
							children: [vaults.map((v) => /* @__PURE__ */ jsxs("div", {
								style: {
									display: "flex",
									flexDirection: "column",
									gap: "8px",
									padding: "8px 10px",
									borderRadius: "8px",
									border: "1px solid var(--border)",
									background: "var(--bg)"
								},
								children: [/* @__PURE__ */ jsxs("div", {
									style: {
										display: "flex",
										alignItems: "center",
										gap: "10px"
									},
									children: [
										/* @__PURE__ */ jsxs("div", {
											style: {
												flex: 1,
												minWidth: 0
											},
											children: [
												/* @__PURE__ */ jsxs("div", {
													style: {
														display: "flex",
														alignItems: "center",
														gap: "6px"
													},
													children: [
														/* @__PURE__ */ jsx("span", {
															style: {
																fontSize: "13px",
																fontWeight: 600,
																overflow: "hidden",
																textOverflow: "ellipsis",
																whiteSpace: "nowrap"
															},
															children: v.name
														}),
														/* @__PURE__ */ jsx("span", {
															style: {
																fontSize: "10px",
																fontWeight: 500,
																padding: "1px 6px",
																borderRadius: "4px",
																border: "1px solid var(--border)",
																color: "var(--muted)",
																flexShrink: 0
															},
															children: v.external ? i18nT("apps.mdNotebook.settings.badgeLocal") : i18nT("apps.mdNotebook.settings.badgeCloned")
														}),
														v.id === activeVaultId && /* @__PURE__ */ jsx("span", {
															style: {
																fontSize: "10px",
																color: "var(--accent)",
																flexShrink: 0
															},
															children: i18nT("apps.mdNotebook.settings.active")
														})
													]
												}),
												/* @__PURE__ */ jsxs("div", {
													title: v.localPath,
													style: {
														display: "flex",
														alignItems: "center",
														gap: "5px",
														fontSize: "11px",
														color: "var(--muted)",
														marginTop: "2px",
														minWidth: 0
													},
													children: [/* @__PURE__ */ jsx(Folder, {
														size: 12,
														style: { flexShrink: 0 }
													}), /* @__PURE__ */ jsx("span", {
														style: {
															overflow: "hidden",
															textOverflow: "ellipsis",
															whiteSpace: "nowrap"
														},
														children: v.localPath
													})]
												}),
												/* @__PURE__ */ jsxs("div", {
													style: {
														display: "flex",
														alignItems: "center",
														gap: "5px",
														fontSize: "11px",
														color: "var(--muted)",
														marginTop: "1px",
														minWidth: 0
													},
													children: [v.localOnly ? /* @__PURE__ */ jsx(GitBranch, { size: 12 }) : /* @__PURE__ */ jsx(GithubIcon, { size: 12 }), /* @__PURE__ */ jsx("span", {
														style: {
															overflow: "hidden",
															textOverflow: "ellipsis",
															whiteSpace: "nowrap"
														},
														children: `${v.localOnly ? i18nT("apps.mdNotebook.settings.noRemote") : v.repo} · ${v.branch}${v.subfolder ? ` · /${v.subfolder}` : ""}`
													})]
												}),
												/* @__PURE__ */ jsxs("div", {
													style: { marginTop: "4px" },
													children: [/* @__PURE__ */ jsx(TextLink, {
														label: i18nT("apps.mdNotebook.trash.open"),
														onClick: () => void revealTrash(v),
														title: `${v.localPath}${v.subfolder ? `/${v.subfolder}` : ""}/.trash`
													}), trashMsg[v.id] && /* @__PURE__ */ jsx("div", {
														style: {
															marginTop: "3px",
															fontSize: "11px",
															color: "var(--muted)"
														},
														children: trashMsg[v.id]
													})]
												})
											]
										}),
										v.id !== activeVaultId && /* @__PURE__ */ jsx("button", {
											type: "button",
											onClick: () => onSwitchVault(v.id),
											style: pill(false),
											children: i18nT("apps.mdNotebook.settings.open")
										}),
										/* @__PURE__ */ jsx("button", {
											type: "button",
											onClick: () => {
												setConfirmForget(v.id);
												setForgetError(null);
											},
											style: {
												...pill(false),
												color: "var(--danger)",
												borderColor: "var(--danger)"
											},
											children: i18nT("apps.mdNotebook.settings.remove")
										})
									]
								}), /* @__PURE__ */ jsxs("div", {
									style: {
										borderTop: "1px solid var(--border)",
										paddingTop: "8px"
									},
									children: [/* @__PURE__ */ jsxs("div", {
										style: {
											display: "flex",
											alignItems: "center",
											gap: "10px"
										},
										children: [/* @__PURE__ */ jsxs("div", {
											style: {
												flex: 1,
												minWidth: 0
											},
											children: [/* @__PURE__ */ jsx("div", {
												style: { fontSize: "12px" },
												children: i18nT("apps.mdNotebook.knowledge.label")
											}), /* @__PURE__ */ jsx("div", {
												style: {
													fontSize: "11px",
													color: "var(--muted)",
													marginTop: "1px"
												},
												children: knowledgeBusy === v.id ? v.knowledge ? i18nT("apps.mdNotebook.settings.knowledgeRemoving") : i18nT("apps.mdNotebook.settings.knowledgeAdding") : v.knowledge ? i18nT("apps.mdNotebook.settings.knowledgeIndexed") : i18nT("apps.mdNotebook.settings.knowledgeNotIndexed")
											})]
										}), /* @__PURE__ */ jsx(Switch, {
											on: Boolean(v.knowledge),
											disabled: knowledgeBusy === v.id,
											label: i18nT("apps.mdNotebook.knowledge.label"),
											onChange: (next) => void toggleKnowledge(v, next)
										})]
									}), knowledgeMsg[v.id] && /* @__PURE__ */ jsx("div", {
										role: knowledgeMsg[v.id]?.error ? "alert" : "status",
										style: {
											marginTop: "8px",
											padding: "6px 8px",
											borderRadius: "6px",
											fontSize: "11px",
											lineHeight: 1.45,
											background: knowledgeMsg[v.id]?.error ? "var(--danger-subtle)" : "var(--accent-subtle)",
											color: knowledgeMsg[v.id]?.error ? "var(--danger)" : "var(--accent)"
										},
										children: knowledgeMsg[v.id]?.text
									})]
								})]
							}, v.id)), confirmForget && /* @__PURE__ */ jsxs("div", {
								style: {
									padding: "8px 10px",
									borderRadius: "8px",
									background: "var(--danger-subtle)",
									color: "var(--danger)",
									fontSize: "11px",
									display: "flex",
									alignItems: "center",
									gap: "10px",
									flexWrap: "wrap"
								},
								children: [
									/* @__PURE__ */ jsx("span", {
										style: {
											flex: 1,
											minWidth: "180px"
										},
										children: i18nT("apps.mdNotebook.settings.removeConfirm")
									}),
									/* @__PURE__ */ jsx("button", {
										type: "button",
										disabled: busy,
										onClick: async () => {
											const id = confirmForget;
											if (!id) return;
											setBusy(true);
											setForgetError(null);
											try {
												await onForget(id);
												setConfirmForget(null);
											} catch (e) {
												setForgetError(e instanceof Error ? e.message : String(e));
											} finally {
												setBusy(false);
											}
										},
										style: {
											...pill(false),
											color: "var(--danger)",
											borderColor: "var(--danger)"
										},
										children: i18nT("apps.mdNotebook.settings.removeIt")
									}),
									/* @__PURE__ */ jsx("button", {
										type: "button",
										onClick: () => {
											setConfirmForget(null);
											setForgetError(null);
										},
										style: pill(false),
										children: i18nT("apps.mdNotebook.connect.cancel")
									}),
									forgetError && /* @__PURE__ */ jsx("div", {
										style: { flexBasis: "100%" },
										children: /* @__PURE__ */ jsx(ErrorNotice, {
											message: i18nT("apps.mdNotebook.settings.removeFailed", { message: forgetError }),
											variant: "inline"
										})
									})
								]
							})]
						}),
						/* @__PURE__ */ jsx("button", {
							type: "button",
							onClick: onConnect,
							style: {
								...pill(false),
								marginTop: "8px"
							},
							children: i18nT("apps.mdNotebook.panel.connectVault")
						})
					] }),
					/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("div", {
							style: sectionLabel,
							children: i18nT("apps.mdNotebook.settings.githubSection")
						}),
						/* @__PURE__ */ jsx("div", {
							style: {
								fontSize: "11px",
								color: "var(--muted)",
								marginBottom: "6px"
							},
							children: authStatus
						}),
						/* @__PURE__ */ jsxs("div", {
							style: {
								display: "flex",
								gap: "8px",
								alignItems: "center"
							},
							children: [
								/* @__PURE__ */ jsx("input", {
									type: "password",
									value: pat,
									onChange: (e) => setPat(e.target.value),
									"aria-label": i18nT("apps.mdNotebook.connect.token"),
									placeholder: hasPat ? i18nT("apps.mdNotebook.settings.tokenPlaceholderStored") : i18nT("apps.mdNotebook.settings.tokenPlaceholderEmpty"),
									style: {
										...field,
										flex: 1,
										minWidth: 0
									}
								}),
								/* @__PURE__ */ jsx("button", {
									type: "button",
									disabled: !busy && !pat,
									"aria-disabled": busy || void 0,
									"aria-busy": busy || void 0,
									onClick: async () => {
										if (busy || !pat) return;
										setBusy(true);
										setPatNote(null);
										try {
											await onSetPat(pat);
											setPat("");
											setPatNote({ text: i18nT("apps.mdNotebook.settings.tokenSaved") });
										} catch (e) {
											setPatNote({
												text: i18nT("apps.mdNotebook.settings.tokenSaveFailed", { message: e instanceof Error ? e.message : String(e) }),
												error: true
											});
										} finally {
											setBusy(false);
										}
									},
									style: pill(true),
									children: i18nT("apps.mdNotebook.settings.save")
								}),
								hasPat && /* @__PURE__ */ jsx("button", {
									type: "button",
									disabled: busy,
									onClick: async () => {
										setBusy(true);
										setPatNote(null);
										try {
											await onSetPat("");
											setPatNote({ text: i18nT("apps.mdNotebook.settings.tokenCleared") });
										} catch (e) {
											setPatNote({
												text: i18nT("apps.mdNotebook.settings.tokenClearFailed", { message: e instanceof Error ? e.message : String(e) }),
												error: true
											});
										} finally {
											setBusy(false);
										}
									},
									style: pill(false),
									children: i18nT("apps.mdNotebook.settings.clear")
								})
							]
						}),
						patNote && /* @__PURE__ */ jsx("div", {
							role: patNote.error ? "alert" : "status",
							style: {
								fontSize: "11px",
								color: patNote.error ? "var(--danger)" : "var(--accent)",
								marginTop: "6px"
							},
							children: patNote.text
						})
					] }),
					/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("div", {
							style: sectionLabel,
							children: i18nT("apps.mdNotebook.settings.syncSection")
						}),
						/* @__PURE__ */ jsxs("div", {
							style: {
								display: "flex",
								alignItems: "flex-start",
								gap: "10px",
								marginBottom: "16px"
							},
							children: [/* @__PURE__ */ jsxs("div", {
								style: {
									flex: 1,
									minWidth: 0
								},
								children: [/* @__PURE__ */ jsx("div", {
									style: {
										fontSize: "13px",
										fontWeight: 500
									},
									children: i18nT("apps.mdNotebook.settings.autoCommit")
								}), /* @__PURE__ */ jsx("div", {
									style: {
										fontSize: "11px",
										color: "var(--muted)",
										marginTop: "2px"
									},
									children: i18nT("apps.mdNotebook.settings.autoCommitHelp", { n: 5 })
								})]
							}), /* @__PURE__ */ jsx(Switch, {
								on: autoCommit,
								onChange: onAutoCommit,
								label: i18nT("apps.mdNotebook.settings.autoCommit")
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							style: {
								display: "flex",
								alignItems: "flex-start",
								gap: "10px"
							},
							children: [/* @__PURE__ */ jsxs("div", {
								style: {
									flex: 1,
									minWidth: 0
								},
								children: [/* @__PURE__ */ jsx("div", {
									style: {
										fontSize: "13px",
										fontWeight: 500
									},
									children: i18nT("apps.mdNotebook.settings.autoSync")
								}), /* @__PURE__ */ jsx("div", {
									style: {
										fontSize: "11px",
										color: "var(--muted)",
										marginTop: "2px"
									},
									children: i18nT("apps.mdNotebook.settings.autoSyncHelp")
								})]
							}), /* @__PURE__ */ jsx(Switch, {
								on: autoSync,
								onChange: onAutoSync,
								label: i18nT("apps.mdNotebook.settings.autoSync")
							})]
						}),
						autoSync && /* @__PURE__ */ jsxs("div", {
							style: {
								display: "flex",
								alignItems: "center",
								gap: "8px",
								marginTop: "10px",
								paddingLeft: "12px",
								borderLeft: `2px solid var(--accent-subtle)`
							},
							children: [
								/* @__PURE__ */ jsx("span", {
									style: {
										fontSize: "12px",
										color: "var(--muted)"
									},
									children: i18nT("apps.mdNotebook.settings.every")
								}),
								/* @__PURE__ */ jsx("input", {
									type: "number",
									min: 1,
									max: 1440,
									value: autoSyncMins,
									"aria-label": i18nT("apps.mdNotebook.settings.intervalAria"),
									onChange: (e) => onAutoSyncMins(Number(e.target.value)),
									style: {
										...field,
										width: "68px",
										textAlign: "center"
									}
								}),
								/* @__PURE__ */ jsx("span", {
									style: {
										fontSize: "12px",
										color: "var(--muted)"
									},
									children: i18nT("apps.mdNotebook.settings.minutes")
								})
							]
						}),
						syncPrefsError && /* @__PURE__ */ jsx("div", {
							style: { marginTop: "8px" },
							children: /* @__PURE__ */ jsx(ErrorNotice, { message: syncPrefsError })
						}),
						/* @__PURE__ */ jsxs("div", {
							style: {
								display: "flex",
								alignItems: "center",
								gap: "10px",
								marginTop: "16px"
							},
							children: [
								/* @__PURE__ */ jsxs("div", {
									style: {
										flex: 1,
										minWidth: 0
									},
									children: [/* @__PURE__ */ jsx("div", {
										style: {
											fontSize: "13px",
											fontWeight: 500
										},
										children: i18nT("apps.mdNotebook.settings.shortcut")
									}), /* @__PURE__ */ jsx("div", {
										style: {
											fontSize: "11px",
											color: "var(--muted)",
											marginTop: "2px"
										},
										children: recording ? i18nT("apps.mdNotebook.settings.shortcutHelpRecording") : i18nT("apps.mdNotebook.settings.shortcutHelpIdle")
									})]
								}),
								/* @__PURE__ */ jsx("button", {
									type: "button",
									onClick: () => setRecording((r) => !r),
									"aria-label": i18nT("apps.mdNotebook.settings.shortcut"),
									"aria-pressed": recording,
									style: {
										flexShrink: 0,
										minWidth: "78px",
										padding: "5px 12px",
										borderRadius: "6px",
										cursor: "pointer",
										fontFamily: FONT_MONO,
										fontSize: "12px",
										border: `1px solid ${recording ? ACCENT : "var(--border)"}`,
										background: recording ? ACCENT_BG : "var(--bg)",
										color: recording ? ACCENT : "var(--text)"
									},
									children: recording ? i18nT("apps.mdNotebook.settings.recording") : formatShortcut(shortcut)
								}),
								formatShortcut(shortcut) !== formatShortcut(DEFAULT_SYNC_SHORTCUT) && /* @__PURE__ */ jsx("button", {
									type: "button",
									onClick: () => {
										setRecording(false);
										onSetShortcut(DEFAULT_SYNC_SHORTCUT);
									},
									style: pill(false),
									children: i18nT("apps.mdNotebook.settings.reset")
								})
							]
						}),
						shortcutError && /* @__PURE__ */ jsx("div", {
							style: {
								fontSize: "11px",
								color: "var(--danger)",
								marginTop: "6px"
							},
							children: shortcutError
						})
					] })
				]
			})
		})]
	});
}
/** The panel's bottom Settings row. Shows a selected state while it is open. */
function SettingsBar({ open, onOpen }) {
	return /* @__PURE__ */ jsx("div", {
		style: {
			flexShrink: 0,
			marginTop: "4px",
			borderTop: "1px solid var(--border-strong)",
			paddingTop: "8px",
			marginBottom: "8px"
		},
		children: /* @__PURE__ */ jsxs(Clickable, {
			className: "mdnb-row",
			"aria-label": i18nT("apps.mdNotebook.settings.title"),
			"aria-current": open ? "page" : void 0,
			onClick: onOpen,
			style: {
				display: "flex",
				alignItems: "center",
				gap: "4px",
				padding: "2px 4px 2px 12px",
				margin: "0 8px",
				borderRadius: "8px",
				whiteSpace: "nowrap",
				cursor: "pointer",
				...open ? { background: ACCENT_BG } : null
			},
			children: [/* @__PURE__ */ jsx("span", {
				style: {
					...RAIL_TYPE.row,
					fontWeight: open ? 600 : 400,
					color: open ? "var(--text)" : "var(--muted)",
					flex: 1,
					overflow: "hidden",
					textOverflow: "ellipsis"
				},
				children: i18nT("apps.mdNotebook.settings.title")
			}), /* @__PURE__ */ jsx("button", {
				type: "button",
				title: i18nT("apps.mdNotebook.settings.title"),
				"aria-label": i18nT("apps.mdNotebook.settings.title"),
				onClick: (e) => {
					e.stopPropagation();
					onOpen();
				},
				onMouseEnter: (e) => {
					e.currentTarget.style.background = "var(--bg-hover)";
					e.currentTarget.style.color = "var(--text)";
				},
				onMouseLeave: (e) => {
					e.currentTarget.style.background = "transparent";
					e.currentTarget.style.color = open ? "var(--text)" : "var(--muted)";
				},
				style: {
					width: "24px",
					height: "24px",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					borderRadius: "8px",
					color: open ? "var(--text)" : "var(--muted)",
					background: "transparent",
					border: "none",
					cursor: "pointer",
					flexShrink: 0,
					transition: "color .15s, background .15s"
				},
				children: /* @__PURE__ */ jsx(Settings, { size: 15 })
			})]
		})
	});
}
// src/host/ReadingWidthToggle.tsx
/**
* The dashboard's `components/ReadingWidthToggle`, copied: the host's `HoverTip` is not
* an App Kit surface, so the tooltip is the button's native `title`.
*
* Catalog KEY for the button's tooltip and accessible name.
*
* Keys, not strings: this table is evaluated at module load, so an `i18nT()`
* call here would freeze the boot language and never re-resolve on a language
* switch. It is indexed inline at the `i18nT()` call in the component, which
* runs per render — and a flat `Record` of full literal keys is the form
* `scripts/check-i18n-keys.mjs` can resolve statically.
*/
var TITLE_KEY = {
	md: "components.readingWidthToggle.title_md",
	full: "components.readingWidthToggle.title_full"
};
function ReadingWidthToggle({ value, onToggle }) {
	const title = i18nT(TITLE_KEY[value]);
	return /* @__PURE__ */ jsx("button", {
		type: "button",
		title,
		className: `w-[26px] h-[26px] flex items-center justify-center rounded-md cursor-pointer border transition-all ${value === "full" ? "border-accent bg-accent-subtle text-accent" : "border-border text-muted hover:text-text hover:border-border-strong"}`,
		onClick: onToggle,
		"aria-label": title,
		"aria-pressed": value === "full",
		children: /* @__PURE__ */ jsx(value === "full" ? FoldHorizontal : UnfoldHorizontal, {
			size: 13,
			"aria-hidden": "true"
		})
	});
}
// src/NoteRow.tsx
/** Rows for the notes panel: one note, one folder, and the tree renderer. */
/** Sync badge, matching the Sessions list tag-chip recipe. */
function badgeStyle(status) {
	const map = {
		pending: {
			background: "var(--warn-subtle)",
			color: "var(--warn)",
			borderColor: "var(--warn)"
		},
		conflict: {
			background: "var(--danger-subtle)",
			color: "var(--danger)",
			borderColor: "var(--danger)"
		},
		synced: {
			background: "var(--card)",
			color: "var(--muted)",
			borderColor: "var(--border)"
		}
	};
	return {
		...map[status] ?? map.synced,
		padding: "1px 6px",
		borderRadius: "4px",
		...RAIL_TYPE.micro,
		fontWeight: 500,
		border: "1px solid",
		display: "inline-flex",
		alignItems: "center"
	};
}
/** One button in the hover action bar. */
var actionBtn = {
	width: "22px",
	height: "22px",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	padding: 0,
	borderRadius: "4px",
	border: "none",
	background: "transparent",
	color: "var(--muted)",
	cursor: "pointer",
	flexShrink: 0
};
function NoteRow({ note, active, onOpen, showFolder, showSyncBadge = true, actions }) {
	const ime = useImeGuard();
	const folder = showFolder && note.path.includes("/") ? note.path.split("/").slice(0, -1).pop() : null;
	const pinned = !!actions?.isPinned(note.path);
	const renaming = actions?.renamingPath === note.path;
	const deleting = actions?.deletingPath === note.path;
	const badge = rowBadge({
		deleting,
		syncStatus: note.syncStatus,
		showSyncBadge
	});
	const [draft, setDraft] = useState("");
	const inputRef = useRef(null);
	const ownFolder = note.path.includes("/") ? note.path.slice(0, note.path.lastIndexOf("/")) : "";
	useEffect(() => {
		if (!renaming) return;
		setDraft(note.title);
		const el = inputRef.current;
		if (!el) return;
		el.focus();
		el.select();
	}, [renaming, note.title]);
	const commitRename = () => {
		if (!actions) return;
		const next = draft.trim();
		actions.onRenameEnd();
		if (next && next !== note.title) actions.onRename(note.path, next);
	};
	return /* @__PURE__ */ jsxs(Clickable, {
		className: "mdnb-row",
		"aria-label": note.title,
		disabled: deleting,
		onClick: () => {
			if (!renaming && !deleting) onOpen(note.path);
		},
		draggable: !renaming && !deleting,
		onDragStart: (e) => {
			if (renaming) {
				e.preventDefault();
				return;
			}
			e.dataTransfer.setData("text/plain", note.path);
			e.dataTransfer.effectAllowed = "move";
		},
		onDragOver: (e) => {
			if (!actions) return;
			e.preventDefault();
			e.stopPropagation();
			e.dataTransfer.dropEffect = "move";
		},
		onDrop: (e) => {
			if (!actions) return;
			e.preventDefault();
			e.stopPropagation();
			const from = e.dataTransfer.getData("text/plain");
			if (from && from !== note.path) actions.onMove(from, ownFolder);
		},
		style: {
			position: "relative",
			padding: "8px 16px",
			borderRadius: "8px",
			cursor: deleting ? "default" : "pointer",
			...deleting ? { opacity: .5 } : null,
			...active ? { background: ACCENT_BG } : null
		},
		children: [
			renaming ? /* @__PURE__ */ jsx("input", {
				ref: inputRef,
				value: draft,
				"aria-label": i18nT("apps.mdNotebook.row.renameField"),
				onChange: (e) => setDraft(e.target.value),
				onClick: (e) => e.stopPropagation(),
				...ime.bindComposition({ onBlur: commitRename }),
				onKeyDown: (e) => {
					e.stopPropagation();
					if (e.key === "Enter") {
						if (!ime.claimEnter(e)) return;
						commitRename();
					} else if (e.key === "Escape") {
						e.preventDefault();
						actions?.onRenameEnd();
					}
				},
				style: {
					width: "100%",
					boxSizing: "border-box",
					background: "var(--card)",
					border: `1px solid ${ACCENT}`,
					borderRadius: "6px",
					padding: "1px 6px",
					...RAIL_TYPE.row,
					fontWeight: 600,
					color: "var(--text)",
					fontFamily: FONT_BODY,
					outline: "none"
				}
			}) : /* @__PURE__ */ jsxs("div", {
				style: {
					display: "flex",
					alignItems: "center",
					gap: "4px",
					minWidth: 0
				},
				children: [pinned && /* @__PURE__ */ jsx(Pin, {
					size: 11,
					"aria-hidden": true,
					fill: "var(--accent)",
					stroke: "none",
					style: {
						flexShrink: 0,
						color: "var(--accent)"
					}
				}), /* @__PURE__ */ jsx("div", {
					style: {
						...RAIL_TYPE.row,
						fontWeight: 600,
						color: "var(--text)",
						overflow: "hidden",
						textOverflow: "ellipsis",
						whiteSpace: "nowrap"
					},
					children: note.title
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				style: {
					display: "flex",
					gap: "6px",
					alignItems: "center",
					marginTop: "2px",
					minWidth: 0
				},
				children: [
					folder && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("span", {
						title: note.path,
						style: {
							...RAIL_TYPE.meta,
							fontWeight: 400,
							color: "var(--muted)",
							maxWidth: "96px",
							overflow: "hidden",
							textOverflow: "ellipsis",
							whiteSpace: "nowrap",
							flexShrink: 0
						},
						children: folder
					}), /* @__PURE__ */ jsx("span", {
						style: {
							...RAIL_TYPE.meta,
							color: "var(--muted)",
							flexShrink: 0
						},
						children: "·"
					})] }),
					/* @__PURE__ */ jsx("span", {
						style: {
							...RAIL_TYPE.meta,
							fontWeight: 400,
							color: "var(--muted)",
							flexShrink: 0
						},
						children: relTime(note.modifiedAt)
					}),
					badge === "deleting" ? /* @__PURE__ */ jsx("span", {
						style: badgeStyle("conflict"),
						children: i18nT("apps.mdNotebook.badge.deleting")
					}) : badge === "pending" && /* @__PURE__ */ jsx("span", {
						style: badgeStyle("pending"),
						children: i18nT("apps.mdNotebook.badge.pending")
					})
				]
			}),
			actions && !renaming && !deleting && /* @__PURE__ */ jsxs("div", {
				className: "mdnb-row-actions",
				children: [
					/* @__PURE__ */ jsx("button", {
						type: "button",
						style: actionBtn,
						className: "mdnb-act",
						title: pinned ? i18nT("apps.mdNotebook.row.unpin") : i18nT("apps.mdNotebook.row.pin"),
						"aria-label": pinned ? i18nT("apps.mdNotebook.row.unpin") : i18nT("apps.mdNotebook.row.pin"),
						onClick: (e) => {
							e.stopPropagation();
							actions.onTogglePin(note.path);
						},
						children: pinned ? /* @__PURE__ */ jsx(PinOff, { size: 13 }) : /* @__PURE__ */ jsx(Pin, { size: 13 })
					}),
					/* @__PURE__ */ jsx("button", {
						type: "button",
						style: actionBtn,
						className: "mdnb-act",
						title: i18nT("apps.mdNotebook.row.duplicate"),
						"aria-label": i18nT("apps.mdNotebook.row.duplicate"),
						onClick: (e) => {
							e.stopPropagation();
							actions.onDuplicate(note.path);
						},
						children: /* @__PURE__ */ jsx(Copy, { size: 13 })
					}),
					/* @__PURE__ */ jsx("button", {
						type: "button",
						style: actionBtn,
						className: "mdnb-act",
						title: i18nT("apps.mdNotebook.row.rename"),
						"aria-label": i18nT("apps.mdNotebook.row.rename"),
						onClick: (e) => {
							e.stopPropagation();
							actions.onRenameStart(note.path);
						},
						children: /* @__PURE__ */ jsx(Pencil, { size: 13 })
					}),
					actions.onDelete && /* @__PURE__ */ jsx("button", {
						type: "button",
						style: {
							...actionBtn,
							color: "var(--danger)"
						},
						className: "mdnb-act mdnb-act-danger",
						title: i18nT("apps.mdNotebook.row.delete"),
						"aria-label": i18nT("apps.mdNotebook.row.delete"),
						onClick: (e) => {
							e.stopPropagation();
							actions.onDelete?.(note.path, note.title);
						},
						children: /* @__PURE__ */ jsx(Trash2, { size: 13 })
					})
				]
			})
		]
	});
}
function countNotes(node) {
	let n = node.notes.length;
	for (const [, child] of node.folders) n += countNotes(child);
	return n;
}
function FolderRow({ name, node, depth, ...rest }) {
	const isCollapsed = rest.collapsed.has(name);
	const [dropping, setDropping] = useState(false);
	const Glyph = isCollapsed ? Folder : FolderOpen;
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsxs(Clickable, {
		className: "mdnb-row",
		"aria-label": name.split("/").pop(),
		onClick: () => rest.toggle(name),
		onDragOver: (e) => {
			e.preventDefault();
			e.stopPropagation();
			e.dataTransfer.dropEffect = "move";
			setDropping(true);
		},
		onDragLeave: () => setDropping(false),
		onDrop: (e) => {
			e.preventDefault();
			e.stopPropagation();
			setDropping(false);
			const from = e.dataTransfer.getData("text/plain");
			if (from) rest.actions.onMove(from, name);
		},
		style: {
			display: "flex",
			gap: "8px",
			alignItems: "center",
			padding: "4px 8px",
			borderRadius: "8px",
			cursor: "pointer",
			...RAIL_TYPE.row,
			fontWeight: 500,
			color: dropping ? ACCENT : "var(--muted)",
			marginLeft: depth * 10,
			...dropping ? {
				background: ACCENT_BG,
				outline: `1px solid ${ACCENT}`
			} : null
		},
		children: [
			/* @__PURE__ */ jsx("span", {
				style: {
					display: "flex",
					alignItems: "center",
					flexShrink: 0,
					color: "inherit"
				},
				children: /* @__PURE__ */ jsx(Glyph, { size: 14 })
			}),
			name.split("/").pop(),
			/* @__PURE__ */ jsx("span", {
				style: {
					marginLeft: "auto",
					...RAIL_TYPE.secondary,
					color: "inherit"
				},
				children: countNotes(node)
			})
		]
	}), !isCollapsed && /* @__PURE__ */ jsxs("div", {
		style: {
			marginLeft: depth * 10 + 8,
			position: "relative"
		},
		children: [/* @__PURE__ */ jsx("div", {
			"aria-hidden": true,
			style: {
				position: "absolute",
				left: `7px`,
				top: 0,
				bottom: 0,
				width: "1px",
				background: "var(--border)"
			}
		}), renderTree(node, depth + 1, name, rest)]
	})] });
}
/**
* Order notes for display: pinned first, then the user's chosen sort within
* each group. Pinned notes stay inside their own folder rather than being
* hoisted to the top of the tree — the folder is the note's location, and moving
* a row out of it on pin would misreport where the file lives.
*/
function orderNotes(notes, cmp, isPinned) {
	return [...notes].sort((a, b) => {
		const pa = isPinned(a.path) ? 0 : 1;
		const pb = isPinned(b.path) ? 0 : 1;
		return pa !== pb ? pa - pb : cmp(a, b);
	});
}
/**
* The paths the folders view renders, in the order it renders them: each
* folder's subtree depth-first (folders alphabetical, notes by the active sort
* with pinned first), then this level's own notes. A COLLAPSED folder
* contributes nothing, because its notes are not on screen.
*
* Mirrors `renderTree` deliberately — it is what "the next note down" means, so
* the two must not drift. Pure, so the ordering is unit-testable.
*/
function flattenVisibleNotes(node, cmp, isPinned, collapsed, prefix = "") {
	const out = [];
	for (const [name, child] of [...node.folders].sort((a, b) => compareText(a[0], b[0]))) {
		const full = prefix ? `${prefix}/${name}` : name;
		if (collapsed.has(full)) continue;
		out.push(...flattenVisibleNotes(child, cmp, isPinned, collapsed, full));
	}
	for (const n of orderNotes(node.notes, cmp, isPinned)) out.push(n.path);
	return out;
}
/** Render a folder tree. Folders stay alphabetical; the sort applies to notes. */
function renderTree(node, depth, prefix, props) {
	const items = [];
	for (const [name, child] of [...node.folders].sort((a, b) => compareText(a[0], b[0]))) {
		const full = prefix ? `${prefix}/${name}` : name;
		items.push(/* @__PURE__ */ jsx(FolderRow, {
			name: full,
			node: child,
			depth,
			...props
		}, full));
	}
	for (const n of orderNotes(node.notes, props.cmp, props.actions.isPinned)) items.push(/* @__PURE__ */ jsx(NoteRow, {
		note: n,
		active: n.path === props.activePath,
		onOpen: props.onOpen,
		showSyncBadge: props.showSyncBadge,
		actions: props.actions
	}, n.path));
	return items;
}
// src/host/useIsMobile.ts
/** The dashboard's own phone breakpoint: narrower than 768 px is the stacked layout. */
var MOBILE_QUERY = "(max-width: 767px)";
var cachedFn;
var cachedMql = null;
function currentMql() {
	const fn = typeof window !== "undefined" ? window.matchMedia : void 0;
	if (typeof fn !== "function") return null;
	if (fn !== cachedFn) {
		cachedFn = fn;
		cachedMql = fn.call(window, MOBILE_QUERY);
	}
	return cachedMql;
}
var WINDOW_EVENTS = [
	"orientationchange",
	"resize",
	"pageshow"
];
function subscribe(cb) {
	const mql = currentMql();
	mql?.addEventListener("change", cb);
	for (const type of WINDOW_EVENTS) window.addEventListener(type, cb);
	document.addEventListener("visibilitychange", cb);
	return () => {
		mql?.removeEventListener("change", cb);
		for (const type of WINDOW_EVENTS) window.removeEventListener(type, cb);
		document.removeEventListener("visibilitychange", cb);
	};
}
/** True on a narrow (phone-width) viewport. */
function useIsMobile() {
	return useSyncExternalStore(subscribe, () => currentMql()?.matches ?? false, () => false);
}
// src/useMdNotebookPageState.ts
/**
* The Notes page's state and behaviour: everything `MdNotebookPage` holds
* between renders. That is the vault list and the open note, the note buffer
* and its debounced, conflict-checked saving, the server-owned sync settings,
* the vault and note commands (open, move, rename, duplicate, delete, sync,
* autosave), the change poll and search, and the panel controls, plus the
* capability probe that gates them.
*
* `MdNotebookPage.tsx` calls `useMdNotebookPageState` as its only hook and
* renders from what it returns, so the page registers its hooks in one place
* and in one order. New state, effects and actions for the page go here, or in
* a sibling `useMdNotebookPage<Part>.ts` this hook calls; new markup goes in
* the page.
*/
/** Backend capabilities this UI bundle needs. */
var REQUIRED_FEATURES = [
	"createdAt",
	"attach",
	"changes",
	"saveGuard",
	"forget",
	"pat",
	"newNote",
	"move",
	"duplicate",
	"localOnly",
	"autoCommit",
	"trash",
	"trashOpen",
	"knowledge",
	"pickFolder"
];
/**
* Ref callback reporting an element's box on attach and on every resize.
*
* Used where a layout decision is arithmetic on real widths rather than a CSS
* expression, so it needs the numbers: `onMeasure` must be stable.
*/
function useMeasuredBox(onMeasure) {
	const observer = useRef(null);
	return useCallback((el) => {
		observer.current?.disconnect();
		observer.current = null;
		if (!el) return;
		const measure = () => onMeasure(el);
		measure();
		observer.current = new ResizeObserver(measure);
		observer.current.observe(el);
	}, [onMeasure]);
}
/** Every state, ref, effect and action of the Notes page, in the order the page registers them. */
function useMdNotebookPageState() {
	const [vaults, setVaults] = useState(null);
	const [notes, setNotes] = useState([]);
	const [activePath, setActivePath] = useState(null);
	const [content, setContent] = useState("");
	const [backlinks, setBacklinks] = useState([]);
	const [dirty, setDirty] = useState(false);
	const [query, setQuery] = useState("");
	const [results, setResults] = useState([]);
	const [collapsed, setCollapsed] = useState(() => {
		const vault = loadPref(LS.activeVault, null);
		return new Set(vault ? loadPref(collapsedKey(vault), []) : []);
	});
	const [syncing, setSyncing] = useState(false);
	const [error, setError] = useState(null);
	const [editBlock, setEditBlock] = useState(null);
	const [showConnect, setShowConnect] = useState(false);
	const [vaultSelOpen, setVaultSelOpen] = useState(false);
	const [sortOpen, setSortOpen] = useState(false);
	const [fileConflict, setFileConflict] = useState(null);
	const [settingsOpen, setSettingsOpen] = useState(false);
	const [auth, setAuth] = useState({
		hasPat: false,
		hasGhAuth: false
	});
	const [pinned, setPinned] = useState(/* @__PURE__ */ new Set());
	const [renamingPath, setRenamingPath] = useState(null);
	const [confirmDelete, setConfirmDelete] = useState(null);
	const [deleting, setDeleting] = useState(null);
	const deletingRef = useRef(null);
	const [mode, setMode] = useState(() => loadPref(LS.view, "rendered"));
	const [sortKey, setSortKey] = useState(() => {
		const k = loadPref(LS.sort, DEFAULT_SORT);
		return k in SORTS ? k : DEFAULT_SORT;
	});
	const [view, setView] = useState(() => loadPref("mdnb-list-view", "folders"));
	const [panelOpen, setPanelOpen] = useState(() => loadPref(LS.panelOpen, true));
	const isMobile = useIsMobile();
	const ime = useImeGuard();
	const [narrowPanelOpen, setNarrowPanelOpen] = useState(false);
	const panelShown = isMobile ? narrowPanelOpen || !activePath && !settingsOpen : panelOpen;
	const [panelW, setPanelW] = useState(() => {
		const w = loadPref(LS.panelWidth, 260);
		return w >= 180 && w <= 420 ? w : 260;
	});
	const [activeVaultId, setActiveVaultId] = useState(() => loadPref(LS.activeVault, null));
	const [autoSync, setAutoSync] = useState(false);
	const [autoSyncMins, setAutoSyncMins] = useState(10);
	const [settingsWriteError, setSettingsWriteError] = useState(null);
	const [autoCommit, setAutoCommit] = useState(() => loadPref(LS.autoCommit, true));
	const [syncShortcut, setSyncShortcut] = useState(() => loadPref(LS.syncShortcut, DEFAULT_SYNC_SHORTCUT));
	const [fullWidth, setFullWidth] = useState(() => loadPref(LS.fullWidth, false));
	const recordingShortcutRef = useRef(false);
	/**
	* Persist part of the sync settings, reporting a rejection instead of dropping
	* it. Returns whether the server took the value, so a caller can roll its
	* optimistic local state back on failure. On success it invalidates the
	* settings query so the cache refetches the server's authoritative state.
	*/
	const qc = useQueryClient();
	const autoSyncRef = useRef(autoSync);
	const autoSyncMinsRef = useRef(autoSyncMins);
	useEffect(() => {
		autoSyncRef.current = autoSync;
	}, [autoSync]);
	useEffect(() => {
		autoSyncMinsRef.current = autoSyncMins;
	}, [autoSyncMins]);
	const writeChainRef = useRef(Promise.resolve());
	const writePendingRef = useRef(0);
	const serverMinsRef = useRef(autoSyncMins);
	const putSyncSettings = useCallback(async (patch) => {
		setSettingsWriteError(null);
		const bodyToSend = {
			autoSync: patch.autoSync ?? autoSyncRef.current,
			autoSyncMins: patch.autoSyncMins ?? autoSyncMinsRef.current
		};
		writePendingRef.current += 1;
		const run = writeChainRef.current.then(() => notesApi.saveSettings(bodyToSend));
		writeChainRef.current = run.then(() => void 0, () => void 0);
		try {
			await run;
			qc.invalidateQueries({ queryKey: ["md-notebook", "settings"] });
			return true;
		} catch (e) {
			setSettingsWriteError(i18nT("apps.mdNotebook.settings.prefsSaveFailed", { message: e instanceof Error ? e.message : String(e) }));
			return false;
		} finally {
			writePendingRef.current -= 1;
		}
	}, [qc]);
	const setAutoSyncPref = useCallback((on) => {
		const prev = autoSync;
		setAutoSync(on);
		putSyncSettings({ autoSync: on }).then((ok) => {
			if (!ok) setAutoSync(prev);
		});
	}, [autoSync, putSyncSettings]);
	const minsTimer = useRef(null);
	const pendingMins = useRef(null);
	const setAutoSyncMinsPref = useCallback((n) => {
		const v = clampAutoSyncMins(n);
		setAutoSyncMins(v);
		pendingMins.current = v;
		if (minsTimer.current !== null) window.clearTimeout(minsTimer.current);
		minsTimer.current = window.setTimeout(() => {
			minsTimer.current = null;
			pendingMins.current = null;
			putSyncSettings({ autoSyncMins: v }).then((ok) => {
				if (!ok) setAutoSyncMins(serverMinsRef.current);
			});
		}, SAVE_DEBOUNCE_MS);
	}, [putSyncSettings]);
	useEffect(() => () => {
		if (minsTimer.current === null) return;
		window.clearTimeout(minsTimer.current);
		const v = pendingMins.current;
		if (v === null) return;
		const body = {
			autoSync: autoSyncRef.current,
			autoSyncMins: v
		};
		writeChainRef.current = writeChainRef.current.then(() => notesApi.saveSettings(body)).then(() => void 0, () => void 0);
	}, []);
	/** Lift or restore the reading-column cap, remembered for this device. */
	const toggleFullWidth = useCallback(() => {
		setFullWidth((on) => {
			savePref(LS.fullWidth, !on);
			return !on;
		});
	}, []);
	const columnMaxWidth = fullWidth ? void 0 : `800px`;
	const [headerControls, setHeaderControls] = useState({
		width: 0,
		height: 0
	});
	const [headerBandWidth, setHeaderBandWidth] = useState(0);
	const onMeasureControls = useCallback((el) => setHeaderControls({
		width: el.offsetWidth,
		height: el.offsetHeight
	}), []);
	const onMeasureBand = useCallback((el) => setHeaderBandWidth(el.offsetWidth), []);
	const headerControlsRef = useMeasuredBox(onMeasureControls);
	const headerBandRef = useMeasuredBox(onMeasureBand);
	const { titleClearance, stackTitle } = useMemo(() => {
		if (!headerBandWidth || !headerControls.width) return {
			titleClearance: 0,
			stackTitle: false
		};
		const blockWidth = fullWidth ? headerBandWidth : Math.min(headerBandWidth, 800);
		const titleRight = (headerBandWidth + blockWidth) / 2 - 20;
		const clusterLeft = headerBandWidth - 20 - headerControls.width;
		const clearance = Math.max(0, titleRight + 12 - clusterLeft);
		return blockWidth - 40 - clearance < 120 ? {
			titleClearance: 0,
			stackTitle: true
		} : {
			titleClearance: clearance,
			stackTitle: false
		};
	}, [
		fullWidth,
		headerBandWidth,
		headerControls.width
	]);
	const setSyncShortcutPref = useCallback((sc) => {
		setSyncShortcut(sc);
		savePref(LS.syncShortcut, sc);
	}, []);
	const setAutoCommitPref = useCallback((on) => {
		setAutoCommit(on);
		savePref(LS.autoCommit, on);
	}, []);
	const [trashMsg, setTrashMsg] = useState(null);
	const openTrash = useCallback(async () => {
		setTrashMsg(null);
		try {
			if ((await notesApi.openTrash(vaultRef.current)).empty) setTrashMsg(i18nT("apps.mdNotebook.trash.empty"));
		} catch (e) {
			const code = e.body?.code;
			setTrashMsg(code === "folder_open_unsupported" ? i18nT("apps.mdNotebook.trash.unsupported") : i18nT("apps.mdNotebook.trash.failed", { message: e instanceof Error ? e.message : String(e) }));
		}
	}, []);
	/**
	* Last conflict-free sync per vault id, as the server reports it.
	*
	* Keyed by vault rather than held as one value so switching vaults shows each
	* one's own time instead of the last one looked at, and sourced from the server
	* so a sync the BACKEND performed on its own timer still ages the label — a
	* page-written timestamp could only ever record syncs this tab ran itself.
	*/
	const [lastSyncByVault, setLastSyncByVault] = useState({});
	const saveTimer = useRef(null);
	/**
	* Requests the unmount flush must wait for before it writes.
	*
	* Not just saves. The flush targets `pathRef`, so anything that RETARGETS
	* `pathRef` has to finish first: between a move's request and its reply the
	* open note's path names a file the server has already moved away, and a write
	* sent there is lost to a swallowed `ESTALE`. Entries are registered through
	* their retarget, not merely around the request, because it is the retarget --
	* not the response -- that makes the wait sufficient.
	*/
	const writesInFlightRef = useRef(/* @__PURE__ */ new Set());
	/**
	* The active disk save, shared by every caller that reaches the save barrier.
	*
	* A debounce and a rename/move can ask to flush the same dirty buffer at the
	* same time. Sending both requests lets one success clear `dirtyRef` after the
	* other request failed, so the mutation can move a note whose save was never
	* reconciled. Joining the active request makes its one outcome authoritative.
	*/
	const saveInFlightRef = useRef(null);
	const contentRef = useRef("");
	const pathRef = useRef(null);
	const vaultRef = useRef(activeVaultId);
	const mtimeRef = useRef(null);
	const hashRef = useRef(null);
	const dirtyRef = useRef(false);
	const revRef = useRef(0);
	const openSeqRef = useRef(0);
	/**
	* True while the note that is OPEN RIGHT NOW has a DELETE in flight.
	*
	* Both halves of the identity are compared, because `deletingRef` holds a
	* vault-relative path: matching on path alone would report `true` for a
	* same-named note in a different vault and make the callers below drop that
	* note's edits.
	*/
	const openNoteIsDeleting = useCallback(() => targetsSameNote(deletingRef.current, vaultRef.current, pathRef.current), []);
	/**
	* Register a request the unmount flush must wait for; the returned function
	* releases it. Callers hold it across the retarget, not just the request.
	*/
	const trackWrite = useCallback(() => {
		let release;
		const entry = new Promise((resolve) => {
			release = resolve;
		});
		writesInFlightRef.current.add(entry);
		return () => {
			release();
			writesInFlightRef.current.delete(entry);
		};
	}, []);
	useEffect(() => {
		dirtyRef.current = dirty;
	}, [dirty]);
	useEffect(() => {
		const onBeforeUnload = (e) => {
			if (dirtyRef.current) {
				e.preventDefault();
				e.returnValue = "";
			}
		};
		window.addEventListener("beforeunload", onBeforeUnload);
		return () => window.removeEventListener("beforeunload", onBeforeUnload);
	}, []);
	useEffect(() => () => {
		if (!saveTimer.current && !writesInFlightRef.current.size && !dirtyRef.current) return;
		if (saveTimer.current) {
			window.clearTimeout(saveTimer.current);
			saveTimer.current = null;
		}
		const activeWrites = [...writesInFlightRef.current];
		const pendingContent = contentRef.current;
		const saveDirtySnapshot = async () => {
			const vault = vaultRef.current;
			const path = pathRef.current;
			if (targetsSameNote(deletingRef.current, vault, path)) return;
			if (vault && path && dirtyRef.current) await notesApi.saveNote(vault, path, pendingContent, mtimeRef.current ?? void 0, hashRef.current ?? void 0);
		};
		if (activeWrites.length) Promise.all(activeWrites).then(saveDirtySnapshot).catch(() => void 0);
		else saveDirtySnapshot().catch(() => void 0);
	}, []);
	const [, setTick] = useState(0);
	useEffect(() => {
		const id = window.setInterval(() => setTick((t) => t + 1), 3e4);
		return () => window.clearInterval(id);
	}, []);
	const { data: health } = useQuery({
		queryKey: ["md-notebook", "health"],
		queryFn: () => notesApi.health(),
		retry: false
	});
	const staleBackend = useMemo(() => {
		if (!health) return null;
		const missing = REQUIRED_FEATURES.filter((f) => !(health.features ?? []).includes(f));
		return missing.length ? missing : null;
	}, [health]);
	const canTrash = (health?.features ?? []).includes("trash");
	const { data: settingsData, error: settingsLoadError } = useQuery({
		queryKey: ["md-notebook", "settings"],
		queryFn: () => notesApi.settings(),
		retry: false,
		refetchInterval: 6e4
	});
	/**
	* A failed READ matters as much as a failed write: it leaves the page showing
	* the defaults, which is a different setting from the user's own, so the switch
	* would claim auto sync is off while the backend keeps pushing. Write errors win
	* because they report the more recent action.
	*/
	const settingsError = settingsWriteError ?? (settingsLoadError instanceof Error ? settingsLoadError.message : null);
	const legacyCleared = useRef(false);
	useEffect(() => {
		const s = settingsData?.settings;
		if (!s) return;
		setLastSyncByVault((prev) => ({
			...prev,
			...s.lastSync ?? {}
		}));
		serverMinsRef.current = clampAutoSyncMins(s.autoSyncMins);
		if (!legacyCleared.current) {
			legacyCleared.current = true;
			clearPref(LEGACY_LS.autoSync);
			clearPref(LEGACY_LS.autoSyncMins);
		}
		if (writePendingRef.current > 0 || minsTimer.current !== null) return;
		setAutoSync(s.autoSync);
		setAutoSyncMins(clampAutoSyncMins(s.autoSyncMins));
	}, [settingsData]);
	const loadVaults = useCallback(async () => {
		try {
			const { vaults: list, hasPat, hasGhAuth } = await notesApi.listVaults();
			setVaults(list);
			setAuth({
				hasPat,
				hasGhAuth
			});
			if (list.length && !list.some((v) => v.id === vaultRef.current)) {
				vaultRef.current = list[0].id;
				setActiveVaultId(list[0].id);
			}
		} catch (e) {
			setError(e instanceof Error ? e.message : String(e));
			setVaults(null);
		}
	}, []);
	useEffect(() => {
		loadVaults();
	}, [loadVaults]);
	const loadNotes = useCallback(async () => {
		if (!vaultRef.current) return;
		const requested = vaultRef.current;
		try {
			const { notes: list } = await notesApi.listNotes(requested);
			if (vaultRef.current !== requested) return;
			setNotes(list);
		} catch (e) {
			if (vaultRef.current !== requested) return;
			setError(e instanceof Error ? e.message : String(e));
		}
	}, []);
	const flushSave = useCallback(async () => {
		if (saveTimer.current) {
			window.clearTimeout(saveTimer.current);
			saveTimer.current = null;
		}
		if (saveInFlightRef.current) {
			await saveInFlightRef.current;
			return;
		}
		if (!pathRef.current || !dirtyRef.current) return;
		const savingPath = pathRef.current;
		const saving = {
			vault: vaultRef.current,
			path: savingPath
		};
		const run = (async () => {
			const doneSave = trackWrite();
			try {
				for (let attempt = 0; attempt < 3; attempt++) {
					const sent = contentRef.current;
					const res = await notesApi.saveNote(saving.vault, saving.path, sent, mtimeRef.current ?? void 0, hashRef.current ?? void 0);
					mtimeRef.current = res.mtime;
					hashRef.current = res.contentHash ?? null;
					if (contentRef.current === sent) {
						setDirty(false);
						dirtyRef.current = false;
						break;
					}
					if (!targetsSameNote(saving, vaultRef.current, pathRef.current)) return;
				}
			} catch (e) {
				const body = e.body;
				if (body?.code === "ESTALE") {
					if (!targetsSameNote(saving, vaultRef.current, pathRef.current)) return;
					setFileConflict({
						mtime: body.mtime ?? 0,
						disk: body.disk ?? "",
						contentHash: body.contentHash
					});
				} else setError(e instanceof Error ? e.message : String(e));
			} finally {
				doneSave();
			}
		})();
		saveInFlightRef.current = run;
		try {
			await run;
		} finally {
			if (saveInFlightRef.current === run) saveInFlightRef.current = null;
		}
	}, [trackWrite]);
	const openNote = useCallback(async (path) => {
		if (!vaultRef.current) return;
		const seq = ++openSeqRef.current;
		await flushSave();
		if (openSeqRef.current !== seq) return;
		if (dirtyRef.current) return;
		setSettingsOpen(false);
		try {
			const requested = vaultRef.current;
			const doc = await notesApi.readNote(requested, path);
			if (vaultRef.current !== requested || openSeqRef.current !== seq) return;
			if (dirtyRef.current) return;
			pathRef.current = path;
			setActivePath(path);
			if (isMobile) setNarrowPanelOpen(false);
			savePref(LS.openNote, path);
			setContent(doc.content);
			contentRef.current = doc.content;
			mtimeRef.current = doc.mtime;
			hashRef.current = doc.contentHash ?? null;
			setBacklinks(doc.backlinks ?? []);
			setDirty(false);
			setEditBlock(null);
			setFileConflict(null);
		} catch (e) {
			if (openSeqRef.current !== seq) return;
			setError(e instanceof Error ? e.message : String(e));
		}
	}, [flushSave, isMobile]);
	useEffect(() => {
		vaultRef.current = activeVaultId;
		if (!activeVaultId) return;
		savePref(LS.activeVault, activeVaultId);
		setPinned(new Set(loadPref(pinnedKey(activeVaultId), [])));
		setCollapsed(new Set(loadPref(collapsedKey(activeVaultId), [])));
		setRenamingPath(null);
		loadNotes();
	}, [activeVaultId, loadNotes]);
	const restored = useRef(false);
	useEffect(() => {
		if (restored.current || activePath || !notes.length) return;
		restored.current = true;
		const remembered = loadPref(LS.openNote, null);
		const target = remembered && notes.some((n) => n.path === remembered) ? remembered : null;
		if (target) openNote(target);
	}, [
		notes,
		activePath,
		openNote
	]);
	/** Edit the note body, debouncing the save. */
	const edit = useCallback((next) => {
		if (openNoteIsDeleting()) return;
		setContent(next);
		contentRef.current = next;
		setDirty(true);
		dirtyRef.current = true;
		if (saveTimer.current) window.clearTimeout(saveTimer.current);
		saveTimer.current = window.setTimeout(() => {
			flushSave().then(() => loadNotes());
		}, SAVE_DEBOUNCE_MS);
	}, [
		flushSave,
		loadNotes,
		openNoteIsDeleting
	]);
	const markDirty = useCallback(() => {
		if (openNoteIsDeleting()) return;
		setDirty(true);
		dirtyRef.current = true;
	}, [openNoteIsDeleting]);
	const fmOffset = useCallback(() => {
		const m = FM_RE.exec(contentRef.current);
		if (!m) return 0;
		const lines = m[0].split("\n").length;
		return m[0].endsWith("\n") ? lines - 1 : lines;
	}, []);
	const startBlockEdit = useCallback((start, end) => setEditBlock({
		start,
		end
	}), []);
	const cancelBlockEdit = useCallback(() => setEditBlock(null), []);
	const commitBlockEdit = useCallback((text) => {
		if (editBlock) {
			const offset = fmOffset();
			const lines = contentRef.current.split("\n");
			const count = Math.max(0, editBlock.end - editBlock.start + 1);
			if (text !== lines.slice(editBlock.start + offset, editBlock.start + offset + count).join("\n") && !(count === 0 && text.trim() === "")) {
				lines.splice(editBlock.start + offset, count, ...text.split("\n"));
				edit(lines.join("\n"));
			}
		}
		setEditBlock(null);
	}, [
		editBlock,
		edit,
		fmOffset
	]);
	/**
	* Enter inside a block: `before` stays, `after` becomes a new block below,
	* and the editor follows it. `caret` is the column to land on — past a
	* carried list marker, if any.
	*/
	const splitBlockEdit = useCallback((before, after, caret = 0) => {
		if (!editBlock) return;
		const offset = fmOffset();
		const lines = contentRef.current.split("\n");
		const count = Math.max(0, editBlock.end - editBlock.start + 1);
		const beforeLines = before.split("\n");
		const afterLines = after.split("\n");
		lines.splice(editBlock.start + offset, count, ...beforeLines, ...afterLines);
		edit(lines.join("\n"));
		const start = editBlock.start + beforeLines.length;
		setEditBlock({
			start,
			end: start + afterLines.length - 1,
			caret
		});
	}, [
		editBlock,
		edit,
		fmOffset
	]);
	const toggleCheckbox = useCallback((bodyLine) => {
		const offset = fmOffset();
		const lines = contentRef.current.split("\n");
		const i = bodyLine + offset;
		const line = lines[i];
		if (!line) return;
		lines[i] = line.includes("- [ ] ") ? line.replace("- [ ] ", "- [x] ") : line.replace("- [x] ", "- [ ] ");
		edit(lines.join("\n"));
	}, [edit, fmOffset]);
	const switchVault = useCallback(async (id) => {
		setVaultSelOpen(false);
		if (id === vaultRef.current) return;
		openSeqRef.current += 1;
		if (dirtyRef.current) await flushSave();
		if (dirtyRef.current) return;
		vaultRef.current = id;
		setActiveVaultId(id);
		setConfirmDelete(null);
		setRenamingPath(null);
		setActivePath(null);
		pathRef.current = null;
		setContent("");
		contentRef.current = "";
		setNotes([]);
		restored.current = false;
	}, [flushSave]);
	const newNote = useCallback(async () => {
		try {
			const { path } = await notesApi.newNote(vaultRef.current);
			await loadNotes();
			await openNote(path);
		} catch (e) {
			setError(e instanceof Error ? e.message : String(e));
		}
	}, [loadNotes, openNote]);
	/**
	* Persist a new pinned set for the ACTIVE vault. Pins are per-vault and local
	* to this machine — see `pinnedKey` for why they are not written into the note.
	*/
	const writePinned = useCallback((next) => {
		setPinned(next);
		if (vaultRef.current) savePref(pinnedKey(vaultRef.current), [...next]);
	}, []);
	/** Persist a new collapsed-folder set for the ACTIVE vault. Same shape as pins. */
	const writeCollapsed = useCallback((next) => {
		setCollapsed(next);
		if (vaultRef.current) savePref(collapsedKey(vaultRef.current), [...next]);
	}, []);
	const isPinned = useCallback((path) => pinned.has(path), [pinned]);
	const tree = useMemo(() => buildTree(notes), [notes]);
	/**
	* The note paths in the order the panel is rendering them right now. Declared
	* here (above the actions that consume it) because "the next note down" is a
	* property of the VIEW, not of the note list: the three modes order
	* differently, and a collapsed folder's notes are off screen entirely.
	*/
	const visibleNotePaths = useMemo(() => {
		if (query.trim()) return results.map((r) => r.path);
		if (view === "list") return orderNotes(notes, SORTS[sortKey].cmp, isPinned).map((n) => n.path);
		return flattenVisibleNotes(tree, SORTS[sortKey].cmp, isPinned, collapsed);
	}, [
		query,
		results,
		view,
		notes,
		sortKey,
		isPinned,
		tree,
		collapsed
	]);
	const togglePin = useCallback((path) => {
		const next = new Set(pinned);
		if (next.has(path)) next.delete(path);
		else next.add(path);
		writePinned(next);
	}, [pinned, writePinned]);
	/** Follow a pin across a move/rename, or drop it when the note is deleted. */
	const repointPin = useCallback((vault, from, to) => {
		if (!vault) return;
		const key = pinnedKey(vault);
		const stored = new Set(loadPref(key, []));
		if (!stored.has(from)) return;
		stored.delete(from);
		if (to) stored.add(to);
		savePref(key, [...stored]);
		if (vaultRef.current === vault) setPinned(new Set(stored));
	}, []);
	const relocate = useCallback(async (from, to) => {
		if (!to || to === from) return;
		const vault = vaultRef.current;
		try {
			openSeqRef.current += 1;
			if (pathRef.current === from && dirtyRef.current) await flushSave();
			if (pathRef.current === from && dirtyRef.current) return;
			const doneMove = trackWrite();
			try {
				await notesApi.moveNote(vault, from, to);
				repointPin(vault, from, to);
				if (vaultRef.current !== vault) return;
				if (pathRef.current === from) {
					pathRef.current = to;
					setActivePath(to);
					savePref(LS.openNote, to);
				}
			} finally {
				doneMove();
			}
			await loadNotes();
			if (pathRef.current === to) await openNote(to);
		} catch (e) {
			setError(e instanceof Error ? e.message : String(e));
		}
	}, [
		flushSave,
		loadNotes,
		openNote,
		repointPin,
		trackWrite
	]);
	/** File a note into `folder` ('' = vault root), keeping its filename. */
	const moveNote = useCallback((from, folder) => {
		const name = from.split("/").pop();
		relocate(from, folder ? `${folder}/${name}` : String(name));
	}, [relocate]);
	/** Rename in place from the inline title, keeping the folder. */
	const renameNote = useCallback((from, nextName) => {
		const clean = String(nextName).replace(/[\\/:*?"<>|]/g, "").trim().slice(0, 120);
		if (!clean) return;
		const dir = from.includes("/") ? from.slice(0, from.lastIndexOf("/")) : "";
		relocate(from, `${dir ? `${dir}/` : ""}${clean}.md`);
	}, [relocate]);
	/** Copy a note beside itself and open the copy. */
	const duplicateNote = useCallback(async (path) => {
		const vault = vaultRef.current;
		try {
			if (pathRef.current === path && dirtyRef.current) {
				openSeqRef.current += 1;
				await flushSave();
				if (dirtyRef.current) return;
			}
			const { path: copy } = await notesApi.duplicateNote(vault, path);
			if (vaultRef.current !== vault) return;
			await loadNotes();
			await openNote(copy);
		} catch (e) {
			setError(e instanceof Error ? e.message : String(e));
		}
	}, [
		flushSave,
		loadNotes,
		openNote
	]);
	/** Delete a note. The confirmation dialog is the caller's gate, not this. */
	const removeNote = useCallback(async (path) => {
		const vault = vaultRef.current;
		if (deletingRef.current !== null) return;
		openSeqRef.current += 1;
		if (pathRef.current === path && dirtyRef.current) {
			await flushSave();
			if (dirtyRef.current) return;
		}
		const next = pathRef.current === path ? neighborAfterDelete(visibleNotePaths, path) : null;
		setDeleting({
			vault,
			path
		});
		deletingRef.current = {
			vault,
			path
		};
		try {
			await notesApi.deleteNote(vault, path);
			if (vaultRef.current !== vault) return;
			if (pathRef.current === path) {
				if (saveTimer.current) {
					window.clearTimeout(saveTimer.current);
					saveTimer.current = null;
				}
				setDirty(false);
				dirtyRef.current = false;
				pathRef.current = null;
				setActivePath(null);
				setContent("");
				contentRef.current = "";
				setBacklinks([]);
				setEditBlock(null);
				setFileConflict(null);
				savePref(LS.openNote, null);
			}
			repointPin(vault, path, null);
			await loadNotes();
			if (next && vaultRef.current === vault) await openNote(next);
		} catch (e) {
			setError(e instanceof Error ? e.message : String(e));
		} finally {
			setDeleting((prev) => prev?.vault === vault && prev.path === path ? null : prev);
			const d = deletingRef.current;
			if (d?.vault === vault && d.path === path) deletingRef.current = null;
		}
	}, [
		flushSave,
		loadNotes,
		openNote,
		repointPin,
		visibleNotePaths
	]);
	const forgetVault = useCallback(async (id) => {
		if (id === vaultRef.current && dirtyRef.current) {
			openSeqRef.current += 1;
			await flushSave();
			if (dirtyRef.current) return;
		}
		await notesApi.forgetVault(id);
		if (id === vaultRef.current) {
			pathRef.current = null;
			setActivePath(null);
			setContent("");
			contentRef.current = "";
			setNotes([]);
			restored.current = false;
		}
		await loadVaults();
	}, [loadVaults, flushSave]);
	const savePat = useCallback(async (value) => {
		const r = await notesApi.setPat(value);
		setAuth({
			hasPat: r.hasPat,
			hasGhAuth: r.hasGhAuth
		});
	}, []);
	/** Persist a vault's knowledge preference and refresh the vault list. */
	const setVaultKnowledge = useCallback(async (id, on, sourceId) => {
		await notesApi.setVaultKnowledge(id, on, sourceId);
		await loadVaults();
	}, [loadVaults]);
	const runSync = useCallback(async () => {
		if (!vaultRef.current) return;
		if (editBlock) return;
		setSyncing(true);
		setError(null);
		try {
			if (dirtyRef.current) await flushSave();
			if (dirtyRef.current) return;
			const vault = vaultRef.current;
			if (!vault) return;
			const { result, lastSync: syncedAt } = await notesApi.sync(vault);
			if (!result.conflicts.length) {
				if (typeof syncedAt === "number") setLastSyncByVault((prev) => ({
					...prev,
					[vault]: syncedAt
				}));
			} else setError(i18nT("apps.mdNotebook.banner.syncConflict", { paths: result.conflicts.map((c) => c.path).join(", ") }));
			await loadNotes();
			if (pathRef.current) await openNote(pathRef.current);
		} catch (e) {
			setError(e instanceof Error ? e.message : String(e));
		} finally {
			setSyncing(false);
		}
	}, [
		editBlock,
		flushSave,
		loadNotes,
		openNote
	]);
	const runSyncRef = useRef(runSync);
	useEffect(() => {
		runSyncRef.current = runSync;
	}, [runSync]);
	useEffect(() => {
		const onKey = (e) => {
			if (recordingShortcutRef.current) return;
			if (!matchesShortcut(e, syncShortcut)) return;
			e.preventDefault();
			e.stopPropagation();
			runSyncRef.current();
		};
		window.addEventListener("keydown", onKey, true);
		return () => window.removeEventListener("keydown", onKey, true);
	}, [syncShortcut]);
	const runAutoCommit = useCallback(async () => {
		if (!vaultRef.current) return;
		if (editBlock) return;
		const vault = vaultRef.current;
		try {
			if (dirtyRef.current) await flushSave();
			if (dirtyRef.current) return;
			const { result } = await notesApi.commit(vault);
			if (result.committed.length && vaultRef.current === vault) await loadNotes();
		} catch {}
	}, [
		editBlock,
		flushSave,
		loadNotes
	]);
	const runAutoCommitRef = useRef(runAutoCommit);
	useEffect(() => {
		runAutoCommitRef.current = runAutoCommit;
	}, [runAutoCommit]);
	useEffect(() => {
		if (!autoCommit || !activeVaultId) return;
		if (vaults?.find((v) => v.id === activeVaultId)?.readOnly) return;
		const id = window.setInterval(() => void runAutoCommitRef.current(), 3e5);
		return () => window.clearInterval(id);
	}, [
		autoCommit,
		activeVaultId,
		vaults
	]);
	useEffect(() => {
		if (!activeVaultId) return;
		const id = window.setInterval(async () => {
			try {
				const r = await notesApi.changes(vaultRef.current, revRef.current);
				if (r.rev === revRef.current) return;
				revRef.current = r.rev;
				await loadNotes();
				if (pathRef.current && r.changed.includes(pathRef.current) && !dirtyRef.current) await openNote(pathRef.current);
			} catch {}
		}, CHANGES_POLL_MS);
		return () => window.clearInterval(id);
	}, [
		activeVaultId,
		loadNotes,
		openNote
	]);
	useEffect(() => {
		setResults([]);
	}, [activeVaultId]);
	useEffect(() => {
		if (!query.trim()) {
			setResults([]);
			return;
		}
		const vault = activeVaultId;
		let cancelled = false;
		const t = window.setTimeout(() => {
			notesApi.search(vault, query).then((r) => {
				if (!cancelled && vaultRef.current === vault) setResults(r.results);
			}).catch(() => void 0);
		}, 150);
		return () => {
			cancelled = true;
			window.clearTimeout(t);
		};
	}, [query, activeVaultId]);
	return {
		vaults,
		setVaults,
		notes,
		activePath,
		content,
		setContent,
		backlinks,
		setDirty,
		query,
		setQuery,
		results,
		collapsed,
		syncing,
		error,
		editBlock,
		showConnect,
		setShowConnect,
		vaultSelOpen,
		setVaultSelOpen,
		sortOpen,
		setSortOpen,
		fileConflict,
		setFileConflict,
		settingsOpen,
		setSettingsOpen,
		auth,
		confirmDelete,
		setConfirmDelete,
		mode,
		sortKey,
		setSortKey,
		view,
		setView,
		isMobile,
		ime,
		setNarrowPanelOpen,
		panelShown,
		panelW,
		activeVaultId,
		autoSync,
		autoSyncMins,
		autoCommit,
		syncShortcut,
		fullWidth,
		recordingShortcutRef,
		setAutoSyncPref,
		setAutoSyncMinsPref,
		toggleFullWidth,
		columnMaxWidth,
		headerControls,
		headerBandWidth,
		headerControlsRef,
		headerBandRef,
		titleClearance,
		stackTitle,
		setSyncShortcutPref,
		setAutoCommitPref,
		trashMsg,
		setTrashMsg,
		openTrash,
		lastSyncByVault,
		contentRef,
		mtimeRef,
		hashRef,
		dirtyRef,
		staleBackend,
		settingsError,
		flushSave,
		openNote,
		edit,
		markDirty,
		startBlockEdit,
		cancelBlockEdit,
		commitBlockEdit,
		splitBlockEdit,
		toggleCheckbox,
		switchVault,
		newNote,
		isPinned,
		tree,
		moveNote,
		renameNote,
		removeNote,
		forgetVault,
		savePat,
		setVaultKnowledge,
		runSync,
		noteActions: useMemo(() => ({
			isPinned,
			onTogglePin: togglePin,
			onDuplicate: (p) => void duplicateNote(p),
			onDelete: canTrash ? (p, t) => setConfirmDelete({
				path: p,
				title: t
			}) : void 0,
			onMove: moveNote,
			renamingPath,
			deletingPath: deleting?.vault === activeVaultId ? deleting.path : null,
			onRenameStart: setRenamingPath,
			onRenameEnd: () => setRenamingPath(null),
			onRename: renameNote
		}), [
			isPinned,
			togglePin,
			duplicateNote,
			moveNote,
			renamingPath,
			deleting,
			activeVaultId,
			renameNote,
			canTrash
		]),
		toggle: useCallback((name) => {
			const next = new Set(collapsed);
			if (next.has(name)) next.delete(name);
			else next.add(name);
			writeCollapsed(next);
		}, [collapsed, writeCollapsed]),
		togglePanel: useCallback(() => {
			if (isMobile) {
				setNarrowPanelOpen((v) => !v);
				return;
			}
			setPanelOpen((v) => {
				savePref(LS.panelOpen, !v);
				return !v;
			});
		}, [isMobile]),
		startResize: useCallback((e) => {
			e.preventDefault();
			const startX = e.clientX;
			const startW = panelW;
			const clamp = (x) => Math.min(420, Math.max(180, startW + (x - startX)));
			const onMove = (ev) => setPanelW(clamp(ev.clientX));
			const onUp = (ev) => {
				savePref(LS.panelWidth, clamp(ev.clientX));
				window.removeEventListener("pointermove", onMove);
				window.removeEventListener("pointerup", onUp);
			};
			window.addEventListener("pointermove", onMove);
			window.addEventListener("pointerup", onUp);
		}, [panelW]),
		switchMode: useCallback((m) => {
			setMode(m);
			setEditBlock(null);
			savePref(LS.view, m);
		}, [])
	};
}
// src/MdNotebookPage.tsx
/**
* Notes — a markdown notebook backed by a git repository.
*
* Single-note view, no tabs: the left panel is the only navigation surface.
* Search swaps the tree for flat ranked results; clearing restores the tree.
*
* This file is the route's import path and renders the page. Its state, effects
* and actions live in `useMdNotebookPageState.ts`, which the component calls as
* its only hook. New state or behaviour goes there (or in a sibling
* `useMdNotebookPage<Part>.ts` it calls); new markup goes here.
*/
var iconBtn = {
	width: "28px",
	height: "28px",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	borderRadius: "8px",
	background: "transparent",
	border: "none",
	color: "var(--muted)",
	cursor: "pointer",
	flexShrink: 0
};
function MdNotebookPage() {
	const { vaults, setVaults, notes, activePath, content, setContent, backlinks, setDirty, query, setQuery, results, collapsed, syncing, error, editBlock, showConnect, setShowConnect, vaultSelOpen, setVaultSelOpen, sortOpen, setSortOpen, fileConflict, setFileConflict, settingsOpen, setSettingsOpen, auth, confirmDelete, setConfirmDelete, mode, sortKey, setSortKey, view, setView, isMobile, ime, setNarrowPanelOpen, panelShown, panelW, activeVaultId, autoSync, autoSyncMins, autoCommit, syncShortcut, fullWidth, recordingShortcutRef, setAutoSyncPref, setAutoSyncMinsPref, toggleFullWidth, columnMaxWidth, headerControls, headerBandWidth, headerControlsRef, headerBandRef, titleClearance, stackTitle, setSyncShortcutPref, setAutoCommitPref, trashMsg, setTrashMsg, openTrash, lastSyncByVault, contentRef, mtimeRef, hashRef, dirtyRef, staleBackend, settingsError, flushSave, openNote, edit, markDirty, startBlockEdit, cancelBlockEdit, commitBlockEdit, splitBlockEdit, toggleCheckbox, switchVault, newNote, isPinned, tree, moveNote, renameNote, removeNote, forgetVault, savePat, setVaultKnowledge, runSync, noteActions, toggle, togglePanel, startResize, switchMode } = useMdNotebookPageState();
	if (vaults === null) return /* @__PURE__ */ jsx("div", {
		style: {
			padding: "24px",
			fontSize: "12px",
			fontFamily: FONT_BODY,
			color: error ? "var(--danger)" : "var(--muted)"
		},
		children: error ? i18nT("apps.mdNotebook.boot.unreachable", { message: error }) : i18nT("apps.mdNotebook.boot.loading")
	});
	if (!vaults.length || showConnect) return /* @__PURE__ */ jsx(ConnectVault, {
		onCancel: vaults.length ? () => setShowConnect(false) : null,
		onConnected: (v) => {
			setVaults((prev) => [...prev ?? [], v]);
			setShowConnect(false);
			switchVault(v.id);
		}
	});
	const activeVault = vaults.find((v) => v.id === activeVaultId) ?? vaults[0];
	const noteDir = noteDirPath(activeVault, activePath);
	const vaultRoot = activeVault ? vaultContentPath(activeVault) : void 0;
	const showSyncBadge = !activeVault?.localOnly;
	const lastSync = activeVaultId ? lastSyncByVault[activeVaultId] ?? null : null;
	const ago = lastSync ? agoBucket(lastSync) : null;
	const syncLabel = syncing ? i18nT("apps.mdNotebook.sync.syncing") : activeVault?.localOnly ? i18nT("apps.mdNotebook.sync.localAction") : ago === null ? i18nT("apps.mdNotebook.sync.action") : syncedAgoLabel(ago.unit, ago.value);
	return /* @__PURE__ */ jsxs("div", {
		style: {
			display: "flex",
			height: "100%",
			minHeight: "520px",
			position: "relative",
			fontFamily: FONT_BODY,
			color: "var(--text)",
			background: "var(--bg)"
		},
		children: [
			/* @__PURE__ */ jsx("style", { children: MDNB_CSS }),
			confirmDelete && /* @__PURE__ */ jsx(ConfirmDialog, {
				title: i18nT("apps.mdNotebook.row.deleteTitle", { title: confirmDelete.title }),
				body: /* @__PURE__ */ jsx(Trans, {
					i18nKey: "apps.mdNotebook.row.deleteConfirm",
					components: { trash: /* @__PURE__ */ jsx(InlineLink, {
						onClick: () => void openTrash(),
						title: i18nT("apps.mdNotebook.trash.open")
					}) }
				}),
				footer: trashMsg && /* @__PURE__ */ jsx("div", {
					style: {
						fontSize: "11px",
						color: "var(--muted)"
					},
					children: trashMsg
				}),
				confirmLabel: i18nT("apps.mdNotebook.row.deleteAction"),
				cancelLabel: i18nT("apps.mdNotebook.connect.cancel"),
				onCancel: () => {
					setTrashMsg(null);
					setConfirmDelete(null);
				},
				onConfirm: () => {
					const target = confirmDelete.path;
					setTrashMsg(null);
					setConfirmDelete(null);
					removeNote(target);
				}
			}),
			/* @__PURE__ */ jsx("button", {
				type: "button",
				className: "pi-morph mdnb-collapse",
				onClick: togglePanel,
				"aria-label": panelShown ? i18nT("apps.mdNotebook.panel.hide") : i18nT("apps.mdNotebook.panel.show"),
				style: {
					position: "absolute",
					top: "9px",
					left: "8px",
					zIndex: 10,
					width: "28px",
					height: "28px",
					borderRadius: "8px",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					cursor: "pointer",
					border: "none",
					transition: "color .15s, background .15s"
				},
				children: panelShown ? /* @__PURE__ */ jsx(PanelLeftLight, { size: 16 }) : /* @__PURE__ */ jsx(PanelLeftSolid, { size: 16 })
			}),
			panelShown && /* @__PURE__ */ jsxs("div", {
				style: {
					width: isMobile ? "100%" : `${panelW}px`,
					flexShrink: 0,
					position: "relative",
					display: "flex",
					flexDirection: "column",
					margin: "0 0 8px",
					background: "var(--bg-elevated)",
					border: "1px solid var(--border)",
					borderRadius: "16px",
					boxShadow: "0 1px 2px rgba(0,0,0,0.05)"
				},
				children: [
					/* @__PURE__ */ jsxs("div", {
						style: {
							height: "40px",
							marginTop: "2px",
							display: "flex",
							alignItems: "center",
							padding: "0 14px 0 8px",
							flexShrink: 0,
							position: "relative"
						},
						children: [
							/* @__PURE__ */ jsxs("button", {
								type: "button",
								className: "mdnb-vault-trigger",
								onClick: () => setVaultSelOpen((o) => !o),
								"aria-expanded": vaultSelOpen,
								"aria-haspopup": "listbox",
								"aria-label": i18nT("apps.mdNotebook.panel.switchVault"),
								style: {
									display: "flex",
									alignItems: "center",
									gap: "4px",
									marginLeft: "28px",
									minWidth: 0,
									background: "transparent",
									border: "none",
									padding: "4px 6px",
									borderRadius: "8px",
									cursor: "pointer",
									fontFamily: "var(--font-body)"
								},
								children: [/* @__PURE__ */ jsx("span", {
									style: {
										...RAIL_TYPE.panelTitle,
										fontWeight: 500,
										color: "var(--muted)",
										letterSpacing: ".04em",
										overflow: "hidden",
										textOverflow: "ellipsis",
										whiteSpace: "nowrap"
									},
									children: activeVault?.name ?? i18nT("apps.mdNotebook.title")
								}), /* @__PURE__ */ jsx(ChevronDown, {
									size: 13,
									style: {
										flexShrink: 0,
										color: "var(--muted)",
										transform: vaultSelOpen ? "rotate(180deg)" : "none",
										transition: "transform .15s"
									}
								})]
							}),
							/* @__PURE__ */ jsx("button", {
								type: "button",
								onClick: () => void newNote(),
								"aria-label": i18nT("apps.mdNotebook.panel.newRootNote"),
								title: i18nT("apps.mdNotebook.panel.newRootNote"),
								style: {
									...iconBtn,
									marginLeft: "auto"
								},
								className: "mdnb-act",
								children: /* @__PURE__ */ jsx(Plus, { size: 16 })
							}),
							vaultSelOpen && /* @__PURE__ */ jsxs("div", {
								role: "listbox",
								"aria-label": i18nT("apps.mdNotebook.panel.vaults"),
								style: {
									position: "absolute",
									top: "38px",
									left: "38px",
									minWidth: "180px",
									maxWidth: "calc(100% - 46px)",
									maxHeight: "112px",
									overflowY: "auto",
									background: "var(--bg-elevated)",
									border: "1px solid var(--border)",
									borderRadius: "8px",
									boxShadow: "0 4px 14px rgba(0,0,0,0.25)",
									padding: "4px",
									zIndex: 20
								},
								children: [
									vaults.map((v) => /* @__PURE__ */ jsxs("div", {
										className: "mdnb-row",
										role: "option",
										"aria-selected": v.id === activeVaultId,
										tabIndex: 0,
										onKeyDown: (e) => {
											if (e.key !== "Enter" && e.key !== " ") return;
											e.preventDefault();
											switchVault(v.id);
										},
										onClick: () => void switchVault(v.id),
										style: {
											display: "flex",
											alignItems: "center",
											gap: "8px",
											padding: "5px 8px",
											borderRadius: "6px",
											cursor: "pointer",
											...RAIL_TYPE.row,
											color: v.id === activeVaultId ? "var(--text)" : "var(--muted)"
										},
										children: [/* @__PURE__ */ jsx("span", {
											style: {
												flex: 1,
												overflow: "hidden",
												textOverflow: "ellipsis",
												whiteSpace: "nowrap"
											},
											children: v.name
										}), v.id === activeVaultId && /* @__PURE__ */ jsx(Check, {
											size: 14,
											style: {
												flexShrink: 0,
												color: "var(--accent)"
											}
										})]
									}, v.id)),
									/* @__PURE__ */ jsx("div", { style: {
										height: "1px",
										background: "var(--border)",
										margin: "4px 0"
									} }),
									/* @__PURE__ */ jsx(Clickable, {
										className: "mdnb-row",
										onClick: () => {
											setVaultSelOpen(false);
											setShowConnect(true);
										},
										style: {
											padding: "5px 8px",
											borderRadius: "6px",
											cursor: "pointer",
											...RAIL_TYPE.row,
											color: "var(--muted)"
										},
										children: i18nT("apps.mdNotebook.panel.connectVault")
									})
								]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						style: {
							display: "flex",
							gap: "6px",
							alignItems: "center",
							padding: "0 12px 8px",
							flexShrink: 0
						},
						children: [/* @__PURE__ */ jsx("input", {
							className: "mdnb-search",
							"aria-label": i18nT("apps.mdNotebook.panel.searchPlaceholder"),
							value: query,
							onChange: (e) => setQuery(e.target.value),
							placeholder: i18nT("apps.mdNotebook.panel.searchPlaceholder"),
							style: {
								flex: 1,
								height: "30px",
								minWidth: 0,
								boxSizing: "border-box",
								background: "var(--card)",
								border: "1px solid var(--border)",
								borderRadius: "8px",
								padding: "0 10px",
								...RAIL_TYPE.row,
								color: "var(--text)",
								fontFamily: "var(--font-body)"
							}
						}), /* @__PURE__ */ jsxs("div", {
							style: {
								position: "relative",
								flexShrink: 0
							},
							children: [/* @__PURE__ */ jsx("button", {
								type: "button",
								onClick: () => setSortOpen((o) => !o),
								"aria-label": i18nT("apps.mdNotebook.panel.sortAndView"),
								style: {
									...iconBtn,
									width: "30px",
									height: "30px",
									border: "1px solid var(--border)"
								},
								children: /* @__PURE__ */ jsx(ListFilter, { size: 14 })
							}), sortOpen && /* @__PURE__ */ jsxs("div", {
								style: {
									position: "absolute",
									top: "34px",
									right: 0,
									minWidth: "200px",
									background: "var(--bg-elevated)",
									border: "1px solid var(--border)",
									borderRadius: "8px",
									boxShadow: "0 4px 14px rgba(0,0,0,0.25)",
									padding: "4px",
									zIndex: 20
								},
								children: [
									/* @__PURE__ */ jsx("div", {
										style: {
											...MENU_SECTION_LABEL,
											textTransform: "uppercase",
											letterSpacing: ".04em",
											color: "var(--muted)",
											padding: "6px 8px 4px"
										},
										children: i18nT("apps.mdNotebook.panel.viewSection")
									}),
									["folders", "list"].map((v) => /* @__PURE__ */ jsxs(Clickable, {
										className: "mdnb-row",
										"aria-label": listViewLabel(v),
										onClick: () => {
											setView(v);
											savePref("mdnb-list-view", v);
											setSortOpen(false);
										},
										style: {
											display: "flex",
											alignItems: "center",
											gap: "8px",
											padding: "5px 8px",
											borderRadius: "6px",
											cursor: "pointer",
											...RAIL_TYPE.row,
											color: view === v ? "var(--text)" : "var(--muted)"
										},
										children: [/* @__PURE__ */ jsx("span", {
											style: { flex: 1 },
											children: listViewLabel(v)
										}), view === v && /* @__PURE__ */ jsx(Check, {
											size: 14,
											style: { color: "var(--accent)" }
										})]
									}, v)),
									/* @__PURE__ */ jsx("div", { style: {
										height: "1px",
										background: "var(--border)",
										margin: "4px 0"
									} }),
									/* @__PURE__ */ jsx("div", {
										style: {
											...MENU_SECTION_LABEL,
											textTransform: "uppercase",
											letterSpacing: ".04em",
											color: "var(--muted)",
											padding: "6px 8px 4px"
										},
										children: i18nT("apps.mdNotebook.panel.sortSection")
									}),
									Object.keys(SORTS).map((key) => /* @__PURE__ */ jsxs(Clickable, {
										className: "mdnb-row",
										"aria-label": sortLabel(key),
										onClick: () => {
											setSortKey(key);
											savePref(LS.sort, key);
											setSortOpen(false);
										},
										style: {
											display: "flex",
											alignItems: "center",
											gap: "8px",
											padding: "5px 8px",
											borderRadius: "6px",
											cursor: "pointer",
											...RAIL_TYPE.row,
											color: sortKey === key ? "var(--text)" : "var(--muted)"
										},
										children: [/* @__PURE__ */ jsx("span", {
											style: {
												flex: 1,
												whiteSpace: "nowrap"
											},
											children: sortLabel(key)
										}), sortKey === key && /* @__PURE__ */ jsx(Check, {
											size: 14,
											style: { color: "var(--accent)" }
										})]
									}, key))
								]
							})]
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						style: {
							flex: 1,
							overflowY: "auto",
							padding: "8px"
						},
						onDragOver: (e) => {
							e.preventDefault();
							e.dataTransfer.dropEffect = "move";
						},
						onDrop: (e) => {
							e.preventDefault();
							const from = e.dataTransfer.getData("text/plain");
							if (from) moveNote(from, "");
						},
						children: query.trim() ? results.length ? results.map((r) => /* @__PURE__ */ jsx(NoteRow, {
							note: {
								path: r.path,
								title: r.title,
								modifiedAt: notes.find((n) => n.path === r.path)?.modifiedAt ?? Date.now(),
								syncStatus: "synced"
							},
							active: !settingsOpen && r.path === activePath,
							onOpen: (p) => void openNote(p),
							actions: noteActions
						}, r.path)) : /* @__PURE__ */ jsx("div", {
							style: {
								padding: "10px",
								...RAIL_TYPE.secondary,
								color: "var(--muted)"
							},
							children: i18nT("apps.mdNotebook.panel.noMatches")
						}) : view === "list" ? orderNotes(notes, SORTS[sortKey].cmp, isPinned).map((n) => /* @__PURE__ */ jsx(NoteRow, {
							note: n,
							active: !settingsOpen && n.path === activePath,
							onOpen: (p) => void openNote(p),
							showSyncBadge,
							actions: noteActions,
							showFolder: true
						}, n.path)) : renderTree(tree, 0, "", {
							activePath: settingsOpen ? null : activePath,
							onOpen: (p) => void openNote(p),
							collapsed,
							toggle,
							showSyncBadge,
							cmp: SORTS[sortKey].cmp,
							actions: noteActions
						})
					}),
					/* @__PURE__ */ jsx(SettingsBar, {
						open: settingsOpen,
						onOpen: () => {
							setSettingsOpen(true);
							if (isMobile) setNarrowPanelOpen(false);
						}
					}),
					/* @__PURE__ */ jsx("div", {
						onPointerDown: startResize,
						style: {
							position: "absolute",
							top: 0,
							bottom: 0,
							right: "-3px",
							width: "5px",
							cursor: "col-resize"
						}
					})
				]
			}),
			/* @__PURE__ */ jsx("div", {
				style: { display: isMobile && panelShown ? "none" : "contents" },
				children: settingsOpen ? /* @__PURE__ */ jsx(SettingsPage, {
					vaults,
					activeVaultId,
					hasPat: auth.hasPat,
					hasGhAuth: auth.hasGhAuth,
					autoSync,
					autoSyncMins,
					autoCommit,
					syncPrefsError: settingsError,
					shortcut: syncShortcut,
					onClose: () => setSettingsOpen(false),
					onSwitchVault: (id) => {
						switchVault(id);
						setSettingsOpen(false);
					},
					onConnect: () => {
						setSettingsOpen(false);
						setShowConnect(true);
					},
					onForget: forgetVault,
					onSetPat: savePat,
					onSetKnowledge: setVaultKnowledge,
					onAutoSync: setAutoSyncPref,
					onAutoSyncMins: setAutoSyncMinsPref,
					onAutoCommit: setAutoCommitPref,
					onSetShortcut: setSyncShortcutPref,
					onRecordingChange: (on) => {
						recordingShortcutRef.current = on;
					}
				}) : /* @__PURE__ */ jsxs("div", {
					style: {
						flex: 1,
						display: "flex",
						flexDirection: "column",
						minWidth: 0
					},
					children: [
						/* @__PURE__ */ jsxs("div", {
							ref: headerBandRef,
							style: { position: "relative" },
							children: [
								/* @__PURE__ */ jsxs("div", {
									ref: headerControlsRef,
									style: {
										position: "absolute",
										top: "24px",
										right: `20px`,
										zIndex: 2,
										display: "flex",
										gap: "4px",
										alignItems: "center",
										maxWidth: headerBandWidth ? `${Math.max(0, headerBandWidth - 40)}px` : void 0,
										flexWrap: "wrap",
										justifyContent: "flex-end"
									},
									children: [
										/* @__PURE__ */ jsx("div", {
											style: {
												display: "flex",
												gap: "4px",
												padding: "4px",
												background: "var(--card)",
												border: "1px solid var(--border)",
												borderRadius: "8px"
											},
											children: [["rendered", FileText], ["raw", Code]].map(([m, Icon]) => /* @__PURE__ */ jsx("button", {
												type: "button",
												onClick: () => switchMode(m),
												"aria-label": paneViewLabel(m),
												title: paneViewLabel(m),
												style: {
													width: "26px",
													height: "22px",
													display: "flex",
													alignItems: "center",
													justifyContent: "center",
													border: "none",
													borderRadius: "6px",
													cursor: "pointer",
													background: mode === m ? ACCENT : "transparent",
													color: mode === m ? "var(--accent-fg)" : "var(--muted)"
												},
												children: /* @__PURE__ */ jsx(Icon, { size: 16 })
											}, m))
										}),
										/* @__PURE__ */ jsx(ReadingWidthToggle, {
											value: fullWidth ? "full" : "md",
											onToggle: toggleFullWidth
										}),
										/* @__PURE__ */ jsxs("button", {
											type: "button",
											onClick: () => {
												if (!syncing) runSync();
											},
											"aria-disabled": syncing || void 0,
											"aria-busy": syncing || void 0,
											title: activeVault?.localOnly ? i18nT("apps.mdNotebook.sync.localTitle") : void 0,
											style: {
												display: "flex",
												alignItems: "center",
												gap: "6px",
												height: "28px",
												padding: "0 12px",
												borderRadius: "12px",
												border: "none",
												background: ACCENT,
												color: "var(--accent-fg)",
												fontSize: "11px",
												fontWeight: 500,
												cursor: syncing ? "default" : "pointer",
												fontFamily: FONT_BODY
											},
											children: [
												/* @__PURE__ */ jsx(RefreshCw, { size: 13 }),
												syncLabel,
												syncing && /* @__PURE__ */ jsx("span", {
													"aria-hidden": true,
													children: [
														0,
														.2,
														.4
													].map((delay) => /* @__PURE__ */ jsx(motion.span, {
														style: { display: "inline-block" },
														animate: { opacity: [
															.25,
															1,
															.25
														] },
														transition: {
															duration: 1.4,
															times: [
																0,
																.4,
																.8
															],
															repeat: Infinity,
															ease: "easeInOut",
															delay
														},
														children: "."
													}, delay))
												})
											]
										})
									]
								}),
								/* @__PURE__ */ jsxs("div", {
									style: {
										margin: "0 auto",
										width: "100%",
										maxWidth: columnMaxWidth,
										boxSizing: "border-box",
										padding: stackTitle ? `${24 + headerControls.height + 8}px 20px 14px` : `24px ${20 + titleClearance}px 14px 20px`
									},
									children: [activePath ? /* @__PURE__ */ jsx(InlineTitle, {
										path: activePath,
										onRename: (n) => renameNote(activePath, n),
										mb: "0"
									}) : /* @__PURE__ */ jsx("div", {
										style: {
											fontSize: `${DOC_H1_PX}px`,
											fontWeight: DOC_HEADING_WEIGHTS[0],
											color: "var(--muted)"
										},
										children: i18nT("apps.mdNotebook.title")
									}), activePath && /* @__PURE__ */ jsx("div", {
										title: `${activeVault?.name ?? ""}/${activePath}`,
										style: {
											fontSize: "11px",
											color: "var(--muted)",
											marginTop: "2px"
										},
										children: `${activeVault?.name ?? ""}/${activePath.includes("/") ? `${activePath.slice(0, activePath.lastIndexOf("/"))}/` : ""}`
									})]
								}),
								/* @__PURE__ */ jsx("div", { style: {
									borderTop: "1px solid var(--border)",
									margin: `0 20px`
								} })
							]
						}),
						staleBackend && /* @__PURE__ */ jsx("div", {
							role: "alert",
							style: {
								margin: `8px 20px 0`,
								padding: "8px 10px",
								borderRadius: "8px",
								background: "var(--warn-subtle)",
								color: "var(--warn)",
								fontSize: "11px"
							},
							children: i18nT("apps.mdNotebook.banner.staleBackend", { features: staleBackend.join(", ") })
						}),
						fileConflict && /* @__PURE__ */ jsxs("div", {
							role: "alert",
							style: {
								margin: `8px 20px 0`,
								padding: "8px 10px",
								borderRadius: "8px",
								background: "var(--danger-subtle)",
								color: "var(--danger)",
								fontSize: "11px",
								display: "flex",
								gap: "10px",
								alignItems: "center",
								flexWrap: "wrap"
							},
							children: [
								/* @__PURE__ */ jsx("span", {
									style: {
										flex: 1,
										minWidth: "200px"
									},
									children: i18nT("apps.mdNotebook.banner.diskConflict")
								}),
								/* @__PURE__ */ jsx("button", {
									type: "button",
									onClick: () => {
										setContent(fileConflict.disk);
										contentRef.current = fileConflict.disk;
										mtimeRef.current = fileConflict.mtime;
										hashRef.current = fileConflict.contentHash ?? null;
										setDirty(false);
										dirtyRef.current = false;
										setFileConflict(null);
									},
									style: {
										background: "transparent",
										color: "inherit",
										border: "1px solid currentColor",
										padding: "3px 10px",
										borderRadius: "8px",
										fontSize: "11px",
										cursor: "pointer"
									},
									children: i18nT("apps.mdNotebook.banner.useDisk")
								}),
								/* @__PURE__ */ jsx("button", {
									type: "button",
									onClick: () => {
										mtimeRef.current = fileConflict.mtime;
										hashRef.current = fileConflict.contentHash ?? null;
										setFileConflict(null);
										flushSave();
									},
									style: {
										background: "transparent",
										color: "inherit",
										border: "1px solid currentColor",
										padding: "3px 10px",
										borderRadius: "8px",
										fontSize: "11px",
										cursor: "pointer"
									},
									children: i18nT("apps.mdNotebook.banner.keepMine")
								})
							]
						}),
						error && /* @__PURE__ */ jsx("div", {
							style: { margin: `8px 20px 0` },
							children: /* @__PURE__ */ jsx(ErrorNotice, { message: error })
						}),
						!activePath ? /* @__PURE__ */ jsx("div", {
							style: {
								flex: 1,
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								color: "var(--muted)",
								fontSize: "12px"
							},
							children: i18nT("apps.mdNotebook.body.empty")
						}) : mode === "raw" ? /* @__PURE__ */ jsx("div", {
							style: {
								flex: 1,
								position: "relative",
								display: "flex",
								minHeight: 0
							},
							children: /* @__PURE__ */ jsx("textarea", {
								value: content,
								spellCheck: false,
								"aria-label": i18nT("apps.mdNotebook.header.view_raw"),
								onChange: (e) => edit(e.target.value),
								...ime.bindComposition(),
								onKeyDown: (e) => {
									if (e.key !== "Tab") return;
									const ta = e.currentTarget;
									const next = shiftListItem(content, ta.selectionStart, e.shiftKey);
									if (!next) return;
									if (!ime.claimKey(e)) return;
									e.preventDefault();
									ta.value = next.text;
									ta.setSelectionRange(next.pos, next.pos);
									edit(next.text);
								},
								style: {
									flex: 1,
									width: "100%",
									minHeight: 0,
									boxSizing: "border-box",
									resize: "none",
									border: "none",
									outline: "none",
									background: "var(--bg)",
									color: "var(--text)",
									paddingTop: "14px",
									paddingBottom: "14px",
									paddingLeft: `max(20px, calc((100% - 760px) / 2))`,
									paddingRight: `max(20px, calc((100% - 760px) / 2))`,
									...fullWidth ? {
										paddingLeft: `20px`,
										paddingRight: `20px`
									} : {},
									fontSize: `16px`,
									lineHeight: DOC_BODY_LINE_HEIGHT,
									fontFamily: FONT_MONO
								}
							})
						}) : /* @__PURE__ */ jsx("div", {
							style: {
								flex: 1,
								overflowY: "auto",
								minHeight: 0
							},
							children: /* @__PURE__ */ jsxs("div", {
								style: {
									margin: "0 auto",
									width: "100%",
									maxWidth: columnMaxWidth,
									boxSizing: "border-box",
									padding: `14px 20px 32px`
								},
								children: [/* @__PURE__ */ jsx(Preview, {
									content,
									noteDir,
									vaultRoot,
									onToggleCheckbox: toggleCheckbox,
									editRange: editBlock,
									onStartEdit: startBlockEdit,
									onCommitEdit: commitBlockEdit,
									onCancelEdit: cancelBlockEdit,
									onSplitEdit: splitBlockEdit,
									onDirtyEdit: markDirty
								}), backlinks.length > 0 && /* @__PURE__ */ jsxs("div", {
									style: {
										marginTop: "24px",
										borderTop: "1px solid var(--border)",
										paddingTop: "12px"
									},
									children: [/* @__PURE__ */ jsx("div", {
										style: {
											fontSize: "10px",
											textTransform: "uppercase",
											letterSpacing: ".04em",
											color: "var(--muted)",
											marginBottom: "6px"
										},
										children: i18nT("apps.mdNotebook.body.backlinks", { n: backlinks.length })
									}), backlinks.map((b) => /* @__PURE__ */ jsxs(Clickable, {
										className: "mdnb-row",
										"aria-label": b.sourcePath,
										onClick: () => void openNote(b.sourcePath),
										style: {
											padding: "6px 8px",
											borderRadius: "6px",
											cursor: "pointer",
											fontSize: "11px"
										},
										children: [/* @__PURE__ */ jsx("span", {
											style: { color: "var(--accent)" },
											children: b.sourcePath
										}), /* @__PURE__ */ jsx("span", {
											style: { color: "var(--muted)" },
											children: ` — ${b.context}`
										})]
									}, `${b.sourcePath}-${b.line}`))]
								})]
							})
						})
					]
				})
			})
		]
	});
}
// src/index.tsx
/**
* The bundle's entry: AppHost lazy-imports this module and renders its default
* export as the app's page.
*
* It subscribes to the host's language generation, which is what repaints the
* page on a language switch: `i18nT` reads the active locale at call time, and
* this component's re-render reaches every child.
*/
function MdNotebookApp() {
	useLanguageGeneration();
	return /* @__PURE__ */ jsx(MdNotebookPage, {});
}
export { MdNotebookApp as default };
