import { computed as e, createElementBlock as t, createElementVNode as n, defineComponent as r, normalizeStyle as i, onMounted as a, onUnmounted as o, openBlock as s, ref as c } from "vue";
//#region src/utils.ts
function l(e, t, n) {
	return Math.max(t, Math.min(n, e));
}
function u(e) {
	return (e % 360 + 360) % 360;
}
//#endregion
//#region src/animation.ts
function d(e) {
	let t = Math.max(0, e.excitement), n = Math.max(0, e.warp), r = l(e.env, 0, 1), i = e.time * t - e.blobIndex * e.phase, a = Math.sin(i * .31) * 18 * t + Math.sin(i * .83) * 9 * t + Math.cos(i * .17) * 6 * t, o = Math.cos(i * .26) * 16 * t + Math.sin(i * .69) * 8 * t - r * 8, s = Math.sin(i * .19) * 120 * n + Math.sin(i * .53) * 30 * n, c = 1.1 + .3 * t * Math.sin(i * .47) + r * .08, u = 1.1 + .3 * t * Math.sin(i * .61 + 2.1) + r * .3, d = l(50 + 22 * n * Math.sin(i * .41), 0, 100), f = l(50 + 22 * n * Math.sin(i * .57 + 1.4), 0, 100), p = l(50 + 22 * n * Math.sin(i * .33 + 2.9), 0, 100), m = l(50 + 22 * n * Math.sin(i * .71 + 4.2), 0, 100);
	return {
		x: a,
		y: o,
		rotation: s,
		scaleX: c,
		scaleY: u,
		borderRadius: `${d}% ${100 - d}% ${f}% ${100 - f}% / ${p}% ${m}% ${100 - m}% ${100 - p}%`
	};
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/rgb/parseNumber.js
var f = (e, t) => {
	if (typeof e == "number") {
		if (t === 3) return {
			mode: "rgb",
			r: (e >> 8 & 15 | e >> 4 & 240) / 255,
			g: (e >> 4 & 15 | e & 240) / 255,
			b: (e & 15 | e << 4 & 240) / 255
		};
		if (t === 4) return {
			mode: "rgb",
			r: (e >> 12 & 15 | e >> 8 & 240) / 255,
			g: (e >> 8 & 15 | e >> 4 & 240) / 255,
			b: (e >> 4 & 15 | e & 240) / 255,
			alpha: (e & 15 | e << 4 & 240) / 255
		};
		if (t === 6) return {
			mode: "rgb",
			r: (e >> 16 & 255) / 255,
			g: (e >> 8 & 255) / 255,
			b: (e & 255) / 255
		};
		if (t === 8) return {
			mode: "rgb",
			r: (e >> 24 & 255) / 255,
			g: (e >> 16 & 255) / 255,
			b: (e >> 8 & 255) / 255,
			alpha: (e & 255) / 255
		};
	}
}, p = {
	aliceblue: 15792383,
	antiquewhite: 16444375,
	aqua: 65535,
	aquamarine: 8388564,
	azure: 15794175,
	beige: 16119260,
	bisque: 16770244,
	black: 0,
	blanchedalmond: 16772045,
	blue: 255,
	blueviolet: 9055202,
	brown: 10824234,
	burlywood: 14596231,
	cadetblue: 6266528,
	chartreuse: 8388352,
	chocolate: 13789470,
	coral: 16744272,
	cornflowerblue: 6591981,
	cornsilk: 16775388,
	crimson: 14423100,
	cyan: 65535,
	darkblue: 139,
	darkcyan: 35723,
	darkgoldenrod: 12092939,
	darkgray: 11119017,
	darkgreen: 25600,
	darkgrey: 11119017,
	darkkhaki: 12433259,
	darkmagenta: 9109643,
	darkolivegreen: 5597999,
	darkorange: 16747520,
	darkorchid: 10040012,
	darkred: 9109504,
	darksalmon: 15308410,
	darkseagreen: 9419919,
	darkslateblue: 4734347,
	darkslategray: 3100495,
	darkslategrey: 3100495,
	darkturquoise: 52945,
	darkviolet: 9699539,
	deeppink: 16716947,
	deepskyblue: 49151,
	dimgray: 6908265,
	dimgrey: 6908265,
	dodgerblue: 2003199,
	firebrick: 11674146,
	floralwhite: 16775920,
	forestgreen: 2263842,
	fuchsia: 16711935,
	gainsboro: 14474460,
	ghostwhite: 16316671,
	gold: 16766720,
	goldenrod: 14329120,
	gray: 8421504,
	green: 32768,
	greenyellow: 11403055,
	grey: 8421504,
	honeydew: 15794160,
	hotpink: 16738740,
	indianred: 13458524,
	indigo: 4915330,
	ivory: 16777200,
	khaki: 15787660,
	lavender: 15132410,
	lavenderblush: 16773365,
	lawngreen: 8190976,
	lemonchiffon: 16775885,
	lightblue: 11393254,
	lightcoral: 15761536,
	lightcyan: 14745599,
	lightgoldenrodyellow: 16448210,
	lightgray: 13882323,
	lightgreen: 9498256,
	lightgrey: 13882323,
	lightpink: 16758465,
	lightsalmon: 16752762,
	lightseagreen: 2142890,
	lightskyblue: 8900346,
	lightslategray: 7833753,
	lightslategrey: 7833753,
	lightsteelblue: 11584734,
	lightyellow: 16777184,
	lime: 65280,
	limegreen: 3329330,
	linen: 16445670,
	magenta: 16711935,
	maroon: 8388608,
	mediumaquamarine: 6737322,
	mediumblue: 205,
	mediumorchid: 12211667,
	mediumpurple: 9662683,
	mediumseagreen: 3978097,
	mediumslateblue: 8087790,
	mediumspringgreen: 64154,
	mediumturquoise: 4772300,
	mediumvioletred: 13047173,
	midnightblue: 1644912,
	mintcream: 16121850,
	mistyrose: 16770273,
	moccasin: 16770229,
	navajowhite: 16768685,
	navy: 128,
	oldlace: 16643558,
	olive: 8421376,
	olivedrab: 7048739,
	orange: 16753920,
	orangered: 16729344,
	orchid: 14315734,
	palegoldenrod: 15657130,
	palegreen: 10025880,
	paleturquoise: 11529966,
	palevioletred: 14381203,
	papayawhip: 16773077,
	peachpuff: 16767673,
	peru: 13468991,
	pink: 16761035,
	plum: 14524637,
	powderblue: 11591910,
	purple: 8388736,
	rebeccapurple: 6697881,
	red: 16711680,
	rosybrown: 12357519,
	royalblue: 4286945,
	saddlebrown: 9127187,
	salmon: 16416882,
	sandybrown: 16032864,
	seagreen: 3050327,
	seashell: 16774638,
	sienna: 10506797,
	silver: 12632256,
	skyblue: 8900331,
	slateblue: 6970061,
	slategray: 7372944,
	slategrey: 7372944,
	snow: 16775930,
	springgreen: 65407,
	steelblue: 4620980,
	tan: 13808780,
	teal: 32896,
	thistle: 14204888,
	tomato: 16737095,
	turquoise: 4251856,
	violet: 15631086,
	wheat: 16113331,
	white: 16777215,
	whitesmoke: 16119285,
	yellow: 16776960,
	yellowgreen: 10145074
}, m = (e) => f(p[e.toLowerCase()], 6), h = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i, g = (e) => {
	let t;
	return (t = e.match(h)) ? f(parseInt(t[1], 16), t[1].length) : void 0;
}, _ = "([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)";
`${_}`;
var v = `${_}%`;
`${_}`;
var y = `(?:${_}%|${_})`, b = `(?:${_}%|${_}|none)`, x = `(?:${_}(deg|grad|rad|turn)|${_})`;
`${_}${_}`;
var S = "\\s*,\\s*";
RegExp("^" + b + "$");
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/rgb/parseRgbLegacy.js
var C = RegExp(`^rgba?\\(\\s*${_}${S}${_}${S}${_}\\s*(?:,\\s*${y}\\s*)?\\)$`), w = RegExp(`^rgba?\\(\\s*${v}${S}${v}${S}${v}\\s*(?:,\\s*${y}\\s*)?\\)$`), T = (e) => {
	let t = { mode: "rgb" }, n;
	if (n = e.match(C)) n[1] !== void 0 && (t.r = n[1] / 255), n[2] !== void 0 && (t.g = n[2] / 255), n[3] !== void 0 && (t.b = n[3] / 255);
	else if (n = e.match(w)) n[1] !== void 0 && (t.r = n[1] / 100), n[2] !== void 0 && (t.g = n[2] / 100), n[3] !== void 0 && (t.b = n[3] / 100);
	else return;
	return n[4] === void 0 ? n[5] !== void 0 && (t.alpha = Math.max(0, Math.min(1, +n[5]))) : t.alpha = Math.max(0, Math.min(1, n[4] / 100)), t;
}, ee = (e, t) => e === void 0 ? void 0 : typeof e == "object" ? e.mode === void 0 ? t ? {
	...e,
	mode: t
} : void 0 : e : ve(e), E = (e = "rgb") => (t) => (t = ee(t, e)) === void 0 ? void 0 : t.mode === e ? t : D[t.mode][e] ? D[t.mode][e](t) : e === "rgb" ? D[t.mode].rgb(t) : D.rgb[e](D[t.mode].rgb(t)), D = {}, te = {}, O = [], ne = {}, re = (e) => e, k = (e) => (D[e.mode] = {
	...D[e.mode],
	...e.toMode
}, Object.keys(e.fromMode || {}).forEach((t) => {
	D[t] || (D[t] = {}), D[t][e.mode] = e.fromMode[t];
}), e.ranges ||= {}, e.difference ||= {}, e.channels.forEach((t) => {
	if (e.ranges[t] === void 0 && (e.ranges[t] = [0, 1]), !e.interpolate[t]) throw Error(`Missing interpolator for: ${t}`);
	typeof e.interpolate[t] == "function" && (e.interpolate[t] = { use: e.interpolate[t] }), e.interpolate[t].fixup || (e.interpolate[t].fixup = re);
}), te[e.mode] = e, (e.parse || []).forEach((t) => {
	ae(t, e.mode);
}), E(e.mode)), ie = (e) => te[e], ae = (e, t) => {
	if (typeof e == "string") {
		if (!t) throw Error("'mode' required when 'parser' is a string");
		ne[e] = t;
	} else typeof e == "function" && O.indexOf(e) < 0 && O.push(e);
}, oe = /[^\x00-\x7F]|[a-zA-Z_]/, se = /[^\x00-\x7F]|[-\w]/, A = {
	Function: "function",
	Ident: "ident",
	Number: "number",
	Percentage: "percentage",
	ParenClose: ")",
	None: "none",
	Hue: "hue",
	Alpha: "alpha"
}, j = 0;
function ce(e) {
	let t = e[j], n = e[j + 1];
	return t === "-" || t === "+" ? /\d/.test(n) || n === "." && /\d/.test(e[j + 2]) : t === "." ? /\d/.test(n) : /\d/.test(t);
}
function le(e) {
	if (j >= e.length) return !1;
	let t = e[j];
	if (oe.test(t)) return !0;
	if (t === "-") {
		if (e.length - j < 2) return !1;
		let t = e[j + 1];
		return !!(t === "-" || oe.test(t));
	}
	return !1;
}
var ue = {
	deg: 1,
	rad: 180 / Math.PI,
	grad: 9 / 10,
	turn: 360
};
function M(e) {
	let t = "";
	if ((e[j] === "-" || e[j] === "+") && (t += e[j++]), t += de(e), e[j] === "." && /\d/.test(e[j + 1]) && (t += e[j++] + de(e)), (e[j] === "e" || e[j] === "E") && ((e[j + 1] === "-" || e[j + 1] === "+") && /\d/.test(e[j + 2]) ? t += e[j++] + e[j++] + de(e) : /\d/.test(e[j + 1]) && (t += e[j++] + de(e))), le(e)) {
		let n = fe(e);
		return n === "deg" || n === "rad" || n === "turn" || n === "grad" ? {
			type: A.Hue,
			value: t * ue[n]
		} : void 0;
	}
	return e[j] === "%" ? (j++, {
		type: A.Percentage,
		value: +t
	}) : {
		type: A.Number,
		value: +t
	};
}
function de(e) {
	let t = "";
	for (; /\d/.test(e[j]);) t += e[j++];
	return t;
}
function fe(e) {
	let t = "";
	for (; j < e.length && se.test(e[j]);) t += e[j++];
	return t;
}
function pe(e) {
	let t = fe(e);
	return e[j] === "(" ? (j++, {
		type: A.Function,
		value: t
	}) : t === "none" ? {
		type: A.None,
		value: void 0
	} : {
		type: A.Ident,
		value: t
	};
}
function me(e = "") {
	let t = e.trim(), n = [], r;
	for (j = 0; j < t.length;) {
		if (r = t[j++], r === "\n" || r === "	" || r === " ") {
			for (; j < t.length && (t[j] === "\n" || t[j] === "	" || t[j] === " ");) j++;
			continue;
		}
		if (r === ",") return;
		if (r === ")") {
			n.push({ type: A.ParenClose });
			continue;
		}
		if (r === "+") {
			if (j--, ce(t)) {
				n.push(M(t));
				continue;
			}
			return;
		}
		if (r === "-") {
			if (j--, ce(t)) {
				n.push(M(t));
				continue;
			}
			if (le(t)) {
				n.push({
					type: A.Ident,
					value: fe(t)
				});
				continue;
			}
			return;
		}
		if (r === ".") {
			if (j--, ce(t)) {
				n.push(M(t));
				continue;
			}
			return;
		}
		if (r === "/") {
			for (; j < t.length && (t[j] === "\n" || t[j] === "	" || t[j] === " ");) j++;
			let e;
			if (ce(t) && (e = M(t), e.type !== A.Hue)) {
				n.push({
					type: A.Alpha,
					value: e
				});
				continue;
			}
			if (le(t) && fe(t) === "none") {
				n.push({
					type: A.Alpha,
					value: {
						type: A.None,
						value: void 0
					}
				});
				continue;
			}
			return;
		}
		if (/\d/.test(r)) {
			j--, n.push(M(t));
			continue;
		}
		if (oe.test(r)) {
			j--, n.push(pe(t));
			continue;
		}
		return;
	}
	return n;
}
function he(e) {
	e._i = 0;
	let t = e[e._i++];
	if (!t || t.type !== A.Function || t.value !== "color" || (t = e[e._i++], t.type !== A.Ident)) return;
	let n = ne[t.value];
	if (!n) return;
	let r = { mode: n }, i = ge(e, !1);
	if (!i) return;
	let a = ie(n).channels;
	for (let e = 0, t, n; e < a.length; e++) t = i[e], n = a[e], t.type !== A.None && (r[n] = t.type === A.Number ? t.value : t.value / 100, n === "alpha" && (r[n] = Math.max(0, Math.min(1, r[n]))));
	return r;
}
function ge(e, t) {
	let n = [], r;
	for (; e._i < e.length;) {
		if (r = e[e._i++], r.type === A.None || r.type === A.Number || r.type === A.Alpha || r.type === A.Percentage || t && r.type === A.Hue) {
			n.push(r);
			continue;
		}
		if (r.type === A.ParenClose) {
			if (e._i < e.length) return;
			continue;
		}
		return;
	}
	if (!(n.length < 3 || n.length > 4)) {
		if (n.length === 4) {
			if (n[3].type !== A.Alpha) return;
			n[3] = n[3].value;
		}
		return n.length === 3 && n.push({
			type: A.None,
			value: void 0
		}), n.every((e) => e.type !== A.Alpha) ? n : void 0;
	}
}
function _e(e, t) {
	e._i = 0;
	let n = e[e._i++];
	if (!n || n.type !== A.Function) return;
	let r = ge(e, t);
	if (r) return r.unshift(n.value), r;
}
var ve = (e) => {
	if (typeof e != "string") return;
	let t = me(e), n = t ? _e(t, !0) : void 0, r, i = 0, a = O.length;
	for (; i < a;) if ((r = O[i++](e, n)) !== void 0) return r;
	return t ? he(t) : void 0;
};
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/rgb/parseRgb.js
function ye(e, t) {
	if (!t || t[0] !== "rgb" && t[0] !== "rgba") return;
	let n = { mode: "rgb" }, [, r, i, a, o] = t;
	if (r.type !== A.Hue && i.type !== A.Hue && a.type !== A.Hue) return r.type !== A.None && (n.r = r.type === A.Number ? r.value / 255 : r.value / 100), i.type !== A.None && (n.g = i.type === A.Number ? i.value / 255 : i.value / 100), a.type !== A.None && (n.b = a.type === A.Number ? a.value / 255 : a.value / 100), o.type !== A.None && (n.alpha = Math.min(1, Math.max(0, o.type === A.Number ? o.value : o.value / 100))), n;
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/rgb/parseTransparent.js
var be = (e) => e === "transparent" ? {
	mode: "rgb",
	r: 0,
	g: 0,
	b: 0,
	alpha: 0
} : void 0, xe = (e, t, n) => e + n * (t - e), Se = (e) => {
	let t = [];
	for (let n = 0; n < e.length - 1; n++) {
		let r = e[n], i = e[n + 1];
		r === void 0 && i === void 0 ? t.push(void 0) : r !== void 0 && i !== void 0 ? t.push([r, i]) : t.push(r === void 0 ? [i, i] : [r, r]);
	}
	return t;
}, N = ((e) => (t) => {
	let n = Se(t);
	return (t) => {
		let r = t * n.length, i = t >= 1 ? n.length - 1 : Math.max(Math.floor(r), 0), a = n[i];
		return a === void 0 ? void 0 : e(a[0], a[1], r - i);
	};
})(xe), P = (e) => {
	let t = !1, n = e.map((e) => e === void 0 ? 1 : (t = !0, e));
	return t ? n : e;
}, F = {
	mode: "rgb",
	channels: [
		"r",
		"g",
		"b",
		"alpha"
	],
	parse: [
		ye,
		g,
		T,
		m,
		be,
		"srgb"
	],
	serialize: "srgb",
	interpolate: {
		r: N,
		g: N,
		b: N,
		alpha: {
			use: N,
			fixup: P
		}
	},
	gamut: !0,
	white: {
		r: 1,
		g: 1,
		b: 1
	},
	black: {
		r: 0,
		g: 0,
		b: 0
	}
}, Ce = (e = 0) => Math.abs(e) ** (563 / 256) * Math.sign(e), we = (e) => {
	let t = Ce(e.r), n = Ce(e.g), r = Ce(e.b), i = {
		mode: "xyz65",
		x: .5766690429101305 * t + .1855582379065463 * n + .1882286462349947 * r,
		y: .297344975250536 * t + .6273635662554661 * n + .0752914584939979 * r,
		z: .0270313613864123 * t + .0706888525358272 * n + .9913375368376386 * r
	};
	return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, Te = (e) => Math.abs(e) ** (256 / 563) * Math.sign(e), Ee = ({ x: e, y: t, z: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = {
		mode: "a98",
		r: Te(e * 2.0415879038107465 - t * .5650069742788597 - .3447313507783297 * n),
		g: Te(e * -.9692436362808798 + t * 1.8759675015077206 + .0415550574071756 * n),
		b: Te(e * .0134442806320312 - t * .1183623922310184 + 1.0151749943912058 * n)
	};
	return r !== void 0 && (i.alpha = r), i;
}, De = (e = 0) => {
	let t = Math.abs(e);
	return t <= .04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + .055) / 1.055) ** 2.4;
}, I = ({ r: e, g: t, b: n, alpha: r }) => {
	let i = {
		mode: "lrgb",
		r: De(e),
		g: De(t),
		b: De(n)
	};
	return r !== void 0 && (i.alpha = r), i;
}, L = (e) => {
	let { r: t, g: n, b: r, alpha: i } = I(e), a = {
		mode: "xyz65",
		x: .4123907992659593 * t + .357584339383878 * n + .1804807884018343 * r,
		y: .2126390058715102 * t + .715168678767756 * n + .0721923153607337 * r,
		z: .0193308187155918 * t + .119194779794626 * n + .9505321522496607 * r
	};
	return i !== void 0 && (a.alpha = i), a;
}, Oe = (e = 0) => {
	let t = Math.abs(e);
	return t > .0031308 ? (Math.sign(e) || 1) * (1.055 * t ** (1 / 2.4) - .055) : e * 12.92;
}, R = ({ r: e, g: t, b: n, alpha: r }, i = "rgb") => {
	let a = {
		mode: i,
		r: Oe(e),
		g: Oe(t),
		b: Oe(n)
	};
	return r !== void 0 && (a.alpha = r), a;
}, z = ({ x: e, y: t, z: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = R({
		r: e * 3.2409699419045226 - t * 1.537383177570094 - .4986107602930034 * n,
		g: e * -.9692436362808796 + t * 1.8759675015077204 + .0415550574071756 * n,
		b: e * .0556300796969936 - t * .2039769588889765 + 1.0569715142428784 * n
	});
	return r !== void 0 && (i.alpha = r), i;
}, ke = {
	...F,
	mode: "a98",
	parse: ["a98-rgb"],
	serialize: "a98-rgb",
	fromMode: {
		rgb: (e) => Ee(L(e)),
		xyz65: Ee
	},
	toMode: {
		rgb: (e) => z(we(e)),
		xyz65: we
	}
}, B = (e) => (e %= 360) < 0 ? e + 360 : e, Ae = (e, t) => e.map((n, r, i) => {
	if (n === void 0) return n;
	let a = B(n);
	return r === 0 || e[r - 1] === void 0 ? a : t(a - B(i[r - 1]));
}).reduce((e, t) => !e.length || t === void 0 || e[e.length - 1] === void 0 ? (e.push(t), e) : (e.push(t + e[e.length - 1]), e), []), V = (e) => Ae(e, (e) => Math.abs(e) <= 180 ? e : e - 360 * Math.sign(e)), H = [
	-.14861,
	1.78277,
	-.29227,
	-.90649,
	1.97294,
	0
], je = Math.PI / 180, Me = 180 / Math.PI, Ne = H[3] * H[4], Pe = H[1] * H[4], Fe = H[1] * H[2] - H[0] * H[3], Ie = ({ r: e, g: t, b: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = (Fe * n + e * Ne - t * Pe) / (Fe + Ne - Pe), a = n - i, o = (H[4] * (t - i) - H[2] * a) / H[3], s = {
		mode: "cubehelix",
		l: i,
		s: i === 0 || i === 1 ? void 0 : Math.sqrt(a * a + o * o) / (H[4] * i * (1 - i))
	};
	return s.s && (s.h = Math.atan2(o, a) * Me - 120), r !== void 0 && (s.alpha = r), s;
}, Le = ({ h: e, s: t, l: n, alpha: r }) => {
	let i = { mode: "rgb" };
	e = (e === void 0 ? 0 : e + 120) * je, n === void 0 && (n = 0);
	let a = t === void 0 ? 0 : t * n * (1 - n), o = Math.cos(e), s = Math.sin(e);
	return i.r = n + a * (H[0] * o + H[1] * s), i.g = n + a * (H[2] * o + H[3] * s), i.b = n + a * (H[4] * o + H[5] * s), r !== void 0 && (i.alpha = r), i;
}, Re = (e, t) => {
	if (e.h === void 0 || t.h === void 0 || !e.s || !t.s) return 0;
	let n = B(e.h), r = B(t.h), i = Math.sin((r - n + 360) / 2 * Math.PI / 180);
	return 2 * Math.sqrt(e.s * t.s) * i;
}, ze = (e, t) => {
	if (e.h === void 0 || t.h === void 0) return 0;
	let n = B(e.h), r = B(t.h);
	return Math.abs(r - n) > 180 ? n - (r - 360 * Math.sign(r - n)) : r - n;
}, Be = (e, t) => {
	if (e.h === void 0 || t.h === void 0 || !e.c || !t.c) return 0;
	let n = B(e.h), r = B(t.h), i = Math.sin((r - n + 360) / 2 * Math.PI / 180);
	return 2 * Math.sqrt(e.c * t.c) * i;
}, U = (e) => {
	let t = e.reduce((e, t) => {
		if (t !== void 0) {
			let n = t * Math.PI / 180;
			e.sin += Math.sin(n), e.cos += Math.cos(n);
		}
		return e;
	}, {
		sin: 0,
		cos: 0
	}), n = Math.atan2(t.sin, t.cos) * 180 / Math.PI;
	return n < 0 ? 360 + n : n;
}, Ve = {
	mode: "cubehelix",
	channels: [
		"h",
		"s",
		"l",
		"alpha"
	],
	parse: ["--cubehelix"],
	serialize: "--cubehelix",
	ranges: {
		h: [0, 360],
		s: [0, 4.614],
		l: [0, 1]
	},
	fromMode: { rgb: Ie },
	toMode: { rgb: Le },
	interpolate: {
		h: {
			use: N,
			fixup: V
		},
		s: N,
		l: N,
		alpha: {
			use: N,
			fixup: P
		}
	},
	difference: { h: Re },
	average: { h: U }
}, W = ({ l: e, a: t, b: n, alpha: r }, i = "lch") => {
	t === void 0 && (t = 0), n === void 0 && (n = 0);
	let a = Math.sqrt(t * t + n * n), o = {
		mode: i,
		l: e,
		c: a
	};
	return a && (o.h = B(Math.atan2(n, t) * 180 / Math.PI)), r !== void 0 && (o.alpha = r), o;
}, G = ({ l: e, c: t, h: n, alpha: r }, i = "lab") => {
	n === void 0 && (n = 0);
	let a = {
		mode: i,
		l: e,
		a: t ? t * Math.cos(n / 180 * Math.PI) : 0,
		b: t ? t * Math.sin(n / 180 * Math.PI) : 0
	};
	return r !== void 0 && (a.alpha = r), a;
}, He = 29 ** 3 / 3 ** 3, Ue = 6 ** 3 / 29 ** 3, K = {
	X: .3457 / .3585,
	Y: 1,
	Z: .2958 / .3585
}, q = {
	X: .3127 / .329,
	Y: 1,
	Z: .3583 / .329
}, We = (e) => e ** 3 > Ue ? e ** 3 : (116 * e - 16) / He, Ge = ({ l: e, a: t, b: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = (e + 16) / 116, a = t / 500 + i, o = i - n / 200, s = {
		mode: "xyz65",
		x: We(a) * q.X,
		y: We(i) * q.Y,
		z: We(o) * q.Z
	};
	return r !== void 0 && (s.alpha = r), s;
}, Ke = (e) => z(Ge(e)), qe = (e) => e > Ue ? Math.cbrt(e) : (He * e + 16) / 116, Je = ({ x: e, y: t, z: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = qe(e / q.X), a = qe(t / q.Y), o = qe(n / q.Z), s = {
		mode: "lab65",
		l: 116 * a - 16,
		a: 500 * (i - a),
		b: 200 * (a - o)
	};
	return r !== void 0 && (s.alpha = r), s;
}, Ye = (e) => {
	let t = Je(L(e));
	return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, J = 26 / 180 * Math.PI, Y = Math.cos(J), Xe = Math.sin(J), Ze = 100 / Math.log(139 / 100), Qe = ({ l: e, c: t, h: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = {
		mode: "lab65",
		l: (Math.exp(e * 1 / Ze) - 1) / .0039
	}, a = (Math.exp(.0435 * t * 1 * 1) - 1) / .075, o = a * Math.cos(n / 180 * Math.PI - J), s = a * Math.sin(n / 180 * Math.PI - J);
	return i.a = o * Y - s / .83 * Xe, i.b = o * Xe + s / .83 * Y, r !== void 0 && (i.alpha = r), i;
}, $e = ({ l: e, a: t, b: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = t * Y + n * Xe, a = .83 * (n * Y - t * Xe), o = Math.sqrt(i * i + a * a), s = {
		mode: "dlch",
		l: Ze / 1 * Math.log(1 + .0039 * e),
		c: Math.log(1 + .075 * o) / .0435
	};
	return s.c && (s.h = B((Math.atan2(a, i) + J) / Math.PI * 180)), r !== void 0 && (s.alpha = r), s;
}, et = (e) => Qe(W(e, "dlch")), tt = (e) => G($e(e), "dlab"), nt = {
	mode: "dlab",
	parse: ["--din99o-lab"],
	serialize: "--din99o-lab",
	toMode: {
		lab65: et,
		rgb: (e) => Ke(et(e))
	},
	fromMode: {
		lab65: tt,
		rgb: (e) => tt(Ye(e))
	},
	channels: [
		"l",
		"a",
		"b",
		"alpha"
	],
	ranges: {
		l: [0, 100],
		a: [-40.09, 45.501],
		b: [-40.469, 44.344]
	},
	interpolate: {
		l: N,
		a: N,
		b: N,
		alpha: {
			use: N,
			fixup: P
		}
	}
}, rt = {
	mode: "dlch",
	parse: ["--din99o-lch"],
	serialize: "--din99o-lch",
	toMode: {
		lab65: Qe,
		dlab: (e) => G(e, "dlab"),
		rgb: (e) => Ke(Qe(e))
	},
	fromMode: {
		lab65: $e,
		dlab: (e) => W(e, "dlch"),
		rgb: (e) => $e(Ye(e))
	},
	channels: [
		"l",
		"c",
		"h",
		"alpha"
	],
	ranges: {
		l: [0, 100],
		c: [0, 51.484],
		h: [0, 360]
	},
	interpolate: {
		l: N,
		c: N,
		h: {
			use: N,
			fixup: V
		},
		alpha: {
			use: N,
			fixup: P
		}
	},
	difference: { h: Be },
	average: { h: U }
};
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/hsi/convertHsiToRgb.js
function it({ h: e, s: t, i: n, alpha: r }) {
	e = B(e === void 0 ? 0 : e), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = Math.abs(e / 60 % 2 - 1), a;
	switch (Math.floor(e / 60)) {
		case 0:
			a = {
				r: n * (1 + t * (3 / (2 - i) - 1)),
				g: n * (1 + t * (3 * (1 - i) / (2 - i) - 1)),
				b: n * (1 - t)
			};
			break;
		case 1:
			a = {
				r: n * (1 + t * (3 * (1 - i) / (2 - i) - 1)),
				g: n * (1 + t * (3 / (2 - i) - 1)),
				b: n * (1 - t)
			};
			break;
		case 2:
			a = {
				r: n * (1 - t),
				g: n * (1 + t * (3 / (2 - i) - 1)),
				b: n * (1 + t * (3 * (1 - i) / (2 - i) - 1))
			};
			break;
		case 3:
			a = {
				r: n * (1 - t),
				g: n * (1 + t * (3 * (1 - i) / (2 - i) - 1)),
				b: n * (1 + t * (3 / (2 - i) - 1))
			};
			break;
		case 4:
			a = {
				r: n * (1 + t * (3 * (1 - i) / (2 - i) - 1)),
				g: n * (1 - t),
				b: n * (1 + t * (3 / (2 - i) - 1))
			};
			break;
		case 5:
			a = {
				r: n * (1 + t * (3 / (2 - i) - 1)),
				g: n * (1 - t),
				b: n * (1 + t * (3 * (1 - i) / (2 - i) - 1))
			};
			break;
		default: a = {
			r: n * (1 - t),
			g: n * (1 - t),
			b: n * (1 - t)
		};
	}
	return a.mode = "rgb", r !== void 0 && (a.alpha = r), a;
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/hsi/convertRgbToHsi.js
function at({ r: e, g: t, b: n, alpha: r }) {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = Math.max(e, t, n), a = Math.min(e, t, n), o = {
		mode: "hsi",
		s: e + t + n === 0 ? 0 : 1 - 3 * a / (e + t + n),
		i: (e + t + n) / 3
	};
	return i - a !== 0 && (o.h = (i === e ? (t - n) / (i - a) + (t < n) * 6 : i === t ? (n - e) / (i - a) + 2 : (e - t) / (i - a) + 4) * 60), r !== void 0 && (o.alpha = r), o;
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/hsi/definition.js
var ot = {
	mode: "hsi",
	toMode: { rgb: it },
	parse: ["--hsi"],
	serialize: "--hsi",
	fromMode: { rgb: at },
	channels: [
		"h",
		"s",
		"i",
		"alpha"
	],
	ranges: { h: [0, 360] },
	gamut: "rgb",
	interpolate: {
		h: {
			use: N,
			fixup: V
		},
		s: N,
		i: N,
		alpha: {
			use: N,
			fixup: P
		}
	},
	difference: { h: Re },
	average: { h: U }
};
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/hsl/convertHslToRgb.js
function st({ h: e, s: t, l: n, alpha: r }) {
	e = B(e === void 0 ? 0 : e), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = n + t * (n < .5 ? n : 1 - n), a = i - (i - n) * 2 * Math.abs(e / 60 % 2 - 1), o;
	switch (Math.floor(e / 60)) {
		case 0:
			o = {
				r: i,
				g: a,
				b: 2 * n - i
			};
			break;
		case 1:
			o = {
				r: a,
				g: i,
				b: 2 * n - i
			};
			break;
		case 2:
			o = {
				r: 2 * n - i,
				g: i,
				b: a
			};
			break;
		case 3:
			o = {
				r: 2 * n - i,
				g: a,
				b: i
			};
			break;
		case 4:
			o = {
				r: a,
				g: 2 * n - i,
				b: i
			};
			break;
		case 5:
			o = {
				r: i,
				g: 2 * n - i,
				b: a
			};
			break;
		default: o = {
			r: 2 * n - i,
			g: 2 * n - i,
			b: 2 * n - i
		};
	}
	return o.mode = "rgb", r !== void 0 && (o.alpha = r), o;
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/hsl/convertRgbToHsl.js
function ct({ r: e, g: t, b: n, alpha: r }) {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = Math.max(e, t, n), a = Math.min(e, t, n), o = {
		mode: "hsl",
		s: i === a ? 0 : (i - a) / (1 - Math.abs(i + a - 1)),
		l: .5 * (i + a)
	};
	return i - a !== 0 && (o.h = (i === e ? (t - n) / (i - a) + (t < n) * 6 : i === t ? (n - e) / (i - a) + 2 : (e - t) / (i - a) + 4) * 60), r !== void 0 && (o.alpha = r), o;
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/util/hue.js
var lt = (e, t) => {
	switch (t) {
		case "deg": return +e;
		case "rad": return e / Math.PI * 180;
		case "grad": return e / 10 * 9;
		case "turn": return e * 360;
	}
}, ut = RegExp(`^hsla?\\(\\s*${x}${S}${v}${S}${v}\\s*(?:,\\s*${y}\\s*)?\\)$`), dt = (e) => {
	let t = e.match(ut);
	if (!t) return;
	let n = { mode: "hsl" };
	return t[3] === void 0 ? t[1] !== void 0 && t[2] !== void 0 && (n.h = lt(t[1], t[2])) : n.h = +t[3], t[4] !== void 0 && (n.s = Math.min(Math.max(0, t[4] / 100), 1)), t[5] !== void 0 && (n.l = Math.min(Math.max(0, t[5] / 100), 1)), t[6] === void 0 ? t[7] !== void 0 && (n.alpha = Math.max(0, Math.min(1, +t[7]))) : n.alpha = Math.max(0, Math.min(1, t[6] / 100)), n;
};
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/hsl/parseHsl.js
function ft(e, t) {
	if (!t || t[0] !== "hsl" && t[0] !== "hsla") return;
	let n = { mode: "hsl" }, [, r, i, a, o] = t;
	if (r.type !== A.None) {
		if (r.type === A.Percentage) return;
		n.h = r.value;
	}
	if (i.type !== A.None) {
		if (i.type === A.Hue) return;
		n.s = i.value / 100;
	}
	if (a.type !== A.None) {
		if (a.type === A.Hue) return;
		n.l = a.value / 100;
	}
	return o.type !== A.None && (n.alpha = Math.min(1, Math.max(0, o.type === A.Number ? o.value : o.value / 100))), n;
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/hsl/definition.js
var pt = {
	mode: "hsl",
	toMode: { rgb: st },
	fromMode: { rgb: ct },
	channels: [
		"h",
		"s",
		"l",
		"alpha"
	],
	ranges: { h: [0, 360] },
	gamut: "rgb",
	parse: [ft, dt],
	serialize: (e) => `hsl(${e.h === void 0 ? "none" : e.h} ${e.s === void 0 ? "none" : e.s * 100 + "%"} ${e.l === void 0 ? "none" : e.l * 100 + "%"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
	interpolate: {
		h: {
			use: N,
			fixup: V
		},
		s: N,
		l: N,
		alpha: {
			use: N,
			fixup: P
		}
	},
	difference: { h: Re },
	average: { h: U }
};
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/hsv/convertHsvToRgb.js
function mt({ h: e, s: t, v: n, alpha: r }) {
	e = B(e === void 0 ? 0 : e), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = Math.abs(e / 60 % 2 - 1), a;
	switch (Math.floor(e / 60)) {
		case 0:
			a = {
				r: n,
				g: n * (1 - t * i),
				b: n * (1 - t)
			};
			break;
		case 1:
			a = {
				r: n * (1 - t * i),
				g: n,
				b: n * (1 - t)
			};
			break;
		case 2:
			a = {
				r: n * (1 - t),
				g: n,
				b: n * (1 - t * i)
			};
			break;
		case 3:
			a = {
				r: n * (1 - t),
				g: n * (1 - t * i),
				b: n
			};
			break;
		case 4:
			a = {
				r: n * (1 - t * i),
				g: n * (1 - t),
				b: n
			};
			break;
		case 5:
			a = {
				r: n,
				g: n * (1 - t),
				b: n * (1 - t * i)
			};
			break;
		default: a = {
			r: n * (1 - t),
			g: n * (1 - t),
			b: n * (1 - t)
		};
	}
	return a.mode = "rgb", r !== void 0 && (a.alpha = r), a;
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/hsv/convertRgbToHsv.js
function ht({ r: e, g: t, b: n, alpha: r }) {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = Math.max(e, t, n), a = Math.min(e, t, n), o = {
		mode: "hsv",
		s: i === 0 ? 0 : 1 - a / i,
		v: i
	};
	return i - a !== 0 && (o.h = (i === e ? (t - n) / (i - a) + (t < n) * 6 : i === t ? (n - e) / (i - a) + 2 : (e - t) / (i - a) + 4) * 60), r !== void 0 && (o.alpha = r), o;
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/hsv/definition.js
var gt = {
	mode: "hsv",
	toMode: { rgb: mt },
	parse: ["--hsv"],
	serialize: "--hsv",
	fromMode: { rgb: ht },
	channels: [
		"h",
		"s",
		"v",
		"alpha"
	],
	ranges: { h: [0, 360] },
	gamut: "rgb",
	interpolate: {
		h: {
			use: N,
			fixup: V
		},
		s: N,
		v: N,
		alpha: {
			use: N,
			fixup: P
		}
	},
	difference: { h: Re },
	average: { h: U }
};
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/hwb/convertHwbToRgb.js
function _t({ h: e, w: t, b: n, alpha: r }) {
	if (t === void 0 && (t = 0), n === void 0 && (n = 0), t + n > 1) {
		let e = t + n;
		t /= e, n /= e;
	}
	return mt({
		h: e,
		s: n === 1 ? 1 : 1 - t / (1 - n),
		v: 1 - n,
		alpha: r
	});
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/hwb/convertRgbToHwb.js
function vt(e) {
	let t = ht(e);
	if (t === void 0) return;
	let n = t.s === void 0 ? 0 : t.s, r = t.v === void 0 ? 0 : t.v, i = {
		mode: "hwb",
		w: (1 - n) * r,
		b: 1 - r
	};
	return t.h !== void 0 && (i.h = t.h), t.alpha !== void 0 && (i.alpha = t.alpha), i;
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/hwb/parseHwb.js
function yt(e, t) {
	if (!t || t[0] !== "hwb") return;
	let n = { mode: "hwb" }, [, r, i, a, o] = t;
	if (r.type !== A.None) {
		if (r.type === A.Percentage) return;
		n.h = r.value;
	}
	if (i.type !== A.None) {
		if (i.type === A.Hue) return;
		n.w = i.value / 100;
	}
	if (a.type !== A.None) {
		if (a.type === A.Hue) return;
		n.b = a.value / 100;
	}
	return o.type !== A.None && (n.alpha = Math.min(1, Math.max(0, o.type === A.Number ? o.value : o.value / 100))), n;
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/hwb/definition.js
var bt = {
	mode: "hwb",
	toMode: { rgb: _t },
	fromMode: { rgb: vt },
	channels: [
		"h",
		"w",
		"b",
		"alpha"
	],
	ranges: { h: [0, 360] },
	gamut: "rgb",
	parse: [yt],
	serialize: (e) => `hwb(${e.h === void 0 ? "none" : e.h} ${e.w === void 0 ? "none" : e.w * 100 + "%"} ${e.b === void 0 ? "none" : e.b * 100 + "%"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
	interpolate: {
		h: {
			use: N,
			fixup: V
		},
		w: N,
		b: N,
		alpha: {
			use: N,
			fixup: P
		}
	},
	difference: { h: ze },
	average: { h: U }
}, xt = .1593017578125, St = 78.84375, Ct = .8359375, wt = 18.8515625, Tt = 18.6875;
function Et(e) {
	if (e < 0) return 0;
	let t = e ** (1 / St);
	return 1e4 * (Math.max(0, t - Ct) / (wt - Tt * t)) ** (1 / xt);
}
function Dt(e) {
	if (e < 0) return 0;
	let t = (e / 1e4) ** xt;
	return ((Ct + wt * t) / (1 + Tt * t)) ** +St;
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/itp/convertItpToXyz65.js
var Ot = (e) => Math.max(e / 203, 0), kt = ({ i: e, t, p: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = Et(e + .008609037037932761 * t + .11102962500302593 * n), a = Et(e - .00860903703793275 * t - .11102962500302599 * n), o = Et(e + .5600313357106791 * t - .32062717498731885 * n), s = {
		mode: "xyz65",
		x: Ot(2.070152218389422 * i - 1.3263473389671556 * a + .2066510476294051 * o),
		y: Ot(.3647385209748074 * i + .680566024947227 * a - .0453045459220346 * o),
		z: Ot(-.049747207535812 * i - .0492609666966138 * a + 1.1880659249923042 * o)
	};
	return r !== void 0 && (s.alpha = r), s;
}, At = (e = 0) => Math.max(e * 203, 0), jt = ({ x: e, y: t, z: n, alpha: r }) => {
	let i = At(e), a = At(t), o = At(n), s = Dt(.3592832590121217 * i + .6976051147779502 * a - .0358915932320289 * o), c = Dt(-.1920808463704995 * i + 1.1004767970374323 * a + .0753748658519118 * o), l = Dt(.0070797844607477 * i + .0748396662186366 * a + .8433265453898765 * o), u = {
		mode: "itp",
		i: .5 * s + .5 * c,
		t: 1.61376953125 * s - 3.323486328125 * c + 1.709716796875 * l,
		p: 4.378173828125 * s - 4.24560546875 * c - .132568359375 * l
	};
	return r !== void 0 && (u.alpha = r), u;
}, Mt = {
	mode: "itp",
	channels: [
		"i",
		"t",
		"p",
		"alpha"
	],
	parse: ["--ictcp"],
	serialize: "--ictcp",
	toMode: {
		xyz65: kt,
		rgb: (e) => z(kt(e))
	},
	fromMode: {
		xyz65: jt,
		rgb: (e) => jt(L(e))
	},
	ranges: {
		i: [0, .581],
		t: [-.369, .272],
		p: [-.164, .331]
	},
	interpolate: {
		i: N,
		t: N,
		p: N,
		alpha: {
			use: N,
			fixup: P
		}
	}
}, Nt = 134.03437499999998, Pt = 16295499532821565e-27, Ft = (e) => {
	if (e < 0) return 0;
	let t = (e / 1e4) ** xt;
	return ((Ct + wt * t) / (1 + Tt * t)) ** +Nt;
}, It = (e = 0) => Math.max(e * 203, 0), Lt = ({ x: e, y: t, z: n, alpha: r }) => {
	e = It(e), t = It(t), n = It(n);
	let i = 1.15 * e - .15 * n, a = .66 * t + .34 * e, o = Ft(.41478972 * i + .579999 * a + .014648 * n), s = Ft(-.20151 * i + 1.120649 * a + .0531008 * n), c = Ft(-.0166008 * i + .2648 * a + .6684799 * n), l = (o + s) / 2, u = {
		mode: "jab",
		j: .44 * l / (1 - .56 * l) - Pt,
		a: 3.524 * o - 4.066708 * s + .542708 * c,
		b: .199076 * o + 1.096799 * s - 1.295875 * c
	};
	return r !== void 0 && (u.alpha = r), u;
}, Rt = 134.03437499999998, zt = 16295499532821565e-27, Bt = (e) => {
	if (e < 0) return 0;
	let t = e ** (1 / Rt);
	return 1e4 * ((Ct - t) / (Tt * t - wt)) ** (1 / xt);
}, Vt = (e) => e / 203, Ht = ({ j: e, a: t, b: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = (e + zt) / (.44 + .56 * (e + zt)), a = Bt(i + .13860504 * t + .058047316 * n), o = Bt(i - .13860504 * t - .058047316 * n), s = Bt(i - .096019242 * t - .8118919 * n), c = {
		mode: "xyz65",
		x: Vt(1.661373024652174 * a - .914523081304348 * o + .23136208173913045 * s),
		y: Vt(-.3250758611844533 * a + 1.571847026732543 * o - .21825383453227928 * s),
		z: Vt(-.090982811 * a - .31272829 * o + 1.5227666 * s)
	};
	return r !== void 0 && (c.alpha = r), c;
}, Ut = (e) => {
	let t = Lt(L(e));
	return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, Wt = (e) => z(Ht(e)), Gt = {
	mode: "jab",
	channels: [
		"j",
		"a",
		"b",
		"alpha"
	],
	parse: ["--jzazbz"],
	serialize: "--jzazbz",
	fromMode: {
		rgb: Ut,
		xyz65: Lt
	},
	toMode: {
		rgb: Wt,
		xyz65: Ht
	},
	ranges: {
		j: [0, .222],
		a: [-.109, .129],
		b: [-.185, .134]
	},
	interpolate: {
		j: N,
		a: N,
		b: N,
		alpha: {
			use: N,
			fixup: P
		}
	}
}, Kt = ({ j: e, a: t, b: n, alpha: r }) => {
	t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = Math.sqrt(t * t + n * n), a = {
		mode: "jch",
		j: e,
		c: i
	};
	return i && (a.h = B(Math.atan2(n, t) * 180 / Math.PI)), r !== void 0 && (a.alpha = r), a;
}, qt = ({ j: e, c: t, h: n, alpha: r }) => {
	n === void 0 && (n = 0);
	let i = {
		mode: "jab",
		j: e,
		a: t ? t * Math.cos(n / 180 * Math.PI) : 0,
		b: t ? t * Math.sin(n / 180 * Math.PI) : 0
	};
	return r !== void 0 && (i.alpha = r), i;
}, Jt = {
	mode: "jch",
	parse: ["--jzczhz"],
	serialize: "--jzczhz",
	toMode: {
		jab: qt,
		rgb: (e) => Wt(qt(e))
	},
	fromMode: {
		rgb: (e) => Kt(Ut(e)),
		jab: Kt
	},
	channels: [
		"j",
		"c",
		"h",
		"alpha"
	],
	ranges: {
		j: [0, .221],
		c: [0, .19],
		h: [0, 360]
	},
	interpolate: {
		h: {
			use: N,
			fixup: V
		},
		c: N,
		j: N,
		alpha: {
			use: N,
			fixup: P
		}
	},
	difference: { h: Be },
	average: { h: U }
}, Yt = 29 ** 3 / 3 ** 3, Xt = 6 ** 3 / 29 ** 3, Zt = (e) => e ** 3 > Xt ? e ** 3 : (116 * e - 16) / Yt, Qt = ({ l: e, a: t, b: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = (e + 16) / 116, a = t / 500 + i, o = i - n / 200, s = {
		mode: "xyz50",
		x: Zt(a) * K.X,
		y: Zt(i) * K.Y,
		z: Zt(o) * K.Z
	};
	return r !== void 0 && (s.alpha = r), s;
}, X = ({ x: e, y: t, z: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = R({
		r: e * 3.1341359569958707 - t * 1.6173863321612538 - .4906619460083532 * n,
		g: e * -.978795502912089 + t * 1.916254567259524 + .03344273116131949 * n,
		b: e * .07195537988411677 - t * .2289768264158322 + 1.405386058324125 * n
	});
	return r !== void 0 && (i.alpha = r), i;
}, $t = (e) => X(Qt(e)), Z = (e) => {
	let { r: t, g: n, b: r, alpha: i } = I(e), a = {
		mode: "xyz50",
		x: .436065742824811 * t + .3851514688337912 * n + .14307845442264197 * r,
		y: .22249319175623702 * t + .7168870538238823 * n + .06061979053616537 * r,
		z: .013923904500943465 * t + .09708128566574634 * n + .7140993584005155 * r
	};
	return i !== void 0 && (a.alpha = i), a;
}, en = (e) => e > Xt ? Math.cbrt(e) : (Yt * e + 16) / 116, tn = ({ x: e, y: t, z: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = en(e / K.X), a = en(t / K.Y), o = en(n / K.Z), s = {
		mode: "lab",
		l: 116 * a - 16,
		a: 500 * (i - a),
		b: 200 * (a - o)
	};
	return r !== void 0 && (s.alpha = r), s;
}, nn = (e) => {
	let t = tn(Z(e));
	return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
};
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/lab/parseLab.js
function rn(e, t) {
	if (!t || t[0] !== "lab") return;
	let n = { mode: "lab" }, [, r, i, a, o] = t;
	if (r.type !== A.Hue && i.type !== A.Hue && a.type !== A.Hue) return r.type !== A.None && (n.l = Math.min(Math.max(0, r.value), 100)), i.type !== A.None && (n.a = i.type === A.Number ? i.value : i.value * 125 / 100), a.type !== A.None && (n.b = a.type === A.Number ? a.value : a.value * 125 / 100), o.type !== A.None && (n.alpha = Math.min(1, Math.max(0, o.type === A.Number ? o.value : o.value / 100))), n;
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/lab/definition.js
var an = {
	mode: "lab",
	toMode: {
		xyz50: Qt,
		rgb: $t
	},
	fromMode: {
		xyz50: tn,
		rgb: nn
	},
	channels: [
		"l",
		"a",
		"b",
		"alpha"
	],
	ranges: {
		l: [0, 100],
		a: [-125, 125],
		b: [-125, 125]
	},
	parse: [rn],
	serialize: (e) => `lab(${e.l === void 0 ? "none" : e.l} ${e.a === void 0 ? "none" : e.a} ${e.b === void 0 ? "none" : e.b}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
	interpolate: {
		l: N,
		a: N,
		b: N,
		alpha: {
			use: N,
			fixup: P
		}
	}
}, on = {
	...an,
	mode: "lab65",
	parse: ["--lab-d65"],
	serialize: "--lab-d65",
	toMode: {
		xyz65: Ge,
		rgb: Ke
	},
	fromMode: {
		xyz65: Je,
		rgb: Ye
	},
	ranges: {
		l: [0, 100],
		a: [-125, 125],
		b: [-125, 125]
	}
};
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/lch/parseLch.js
function sn(e, t) {
	if (!t || t[0] !== "lch") return;
	let n = { mode: "lch" }, [, r, i, a, o] = t;
	if (r.type !== A.None) {
		if (r.type === A.Hue) return;
		n.l = Math.min(Math.max(0, r.value), 100);
	}
	if (i.type !== A.None && (n.c = Math.max(0, i.type === A.Number ? i.value : i.value * 150 / 100)), a.type !== A.None) {
		if (a.type === A.Percentage) return;
		n.h = a.value;
	}
	return o.type !== A.None && (n.alpha = Math.min(1, Math.max(0, o.type === A.Number ? o.value : o.value / 100))), n;
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/lch/definition.js
var cn = {
	mode: "lch",
	toMode: {
		lab: G,
		rgb: (e) => $t(G(e))
	},
	fromMode: {
		rgb: (e) => W(nn(e)),
		lab: W
	},
	channels: [
		"l",
		"c",
		"h",
		"alpha"
	],
	ranges: {
		l: [0, 100],
		c: [0, 150],
		h: [0, 360]
	},
	parse: [sn],
	serialize: (e) => `lch(${e.l === void 0 ? "none" : e.l} ${e.c === void 0 ? "none" : e.c} ${e.h === void 0 ? "none" : e.h}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
	interpolate: {
		h: {
			use: N,
			fixup: V
		},
		c: N,
		l: N,
		alpha: {
			use: N,
			fixup: P
		}
	},
	difference: { h: Be },
	average: { h: U }
}, ln = {
	...cn,
	mode: "lch65",
	parse: ["--lch-d65"],
	serialize: "--lch-d65",
	toMode: {
		lab65: (e) => G(e, "lab65"),
		rgb: (e) => Ke(G(e, "lab65"))
	},
	fromMode: {
		rgb: (e) => W(Ye(e), "lch65"),
		lab65: (e) => W(e, "lch65")
	},
	ranges: {
		l: [0, 100],
		c: [0, 150],
		h: [0, 360]
	}
}, un = ({ l: e, u: t, v: n, alpha: r }) => {
	t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = Math.sqrt(t * t + n * n), a = {
		mode: "lchuv",
		l: e,
		c: i
	};
	return i && (a.h = B(Math.atan2(n, t) * 180 / Math.PI)), r !== void 0 && (a.alpha = r), a;
}, dn = ({ l: e, c: t, h: n, alpha: r }) => {
	n === void 0 && (n = 0);
	let i = {
		mode: "luv",
		l: e,
		u: t ? t * Math.cos(n / 180 * Math.PI) : 0,
		v: t ? t * Math.sin(n / 180 * Math.PI) : 0
	};
	return r !== void 0 && (i.alpha = r), i;
}, fn = (e, t, n) => 4 * e / (e + 15 * t + 3 * n), pn = (e, t, n) => 9 * t / (e + 15 * t + 3 * n), mn = fn(K.X, K.Y, K.Z), hn = pn(K.X, K.Y, K.Z), gn = (e) => e <= Xt ? Yt * e : 116 * Math.cbrt(e) - 16, _n = ({ x: e, y: t, z: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = gn(t / K.Y), a = fn(e, t, n), o = pn(e, t, n);
	!isFinite(a) || !isFinite(o) ? i = a = o = 0 : (a = 13 * i * (a - mn), o = 13 * i * (o - hn));
	let s = {
		mode: "luv",
		l: i,
		u: a,
		v: o
	};
	return r !== void 0 && (s.alpha = r), s;
}, vn = (e, t, n) => 4 * e / (e + 15 * t + 3 * n), yn = (e, t, n) => 9 * t / (e + 15 * t + 3 * n), bn = vn(K.X, K.Y, K.Z), xn = yn(K.X, K.Y, K.Z), Sn = ({ l: e, u: t, v: n, alpha: r }) => {
	if (e === void 0 && (e = 0), e === 0) return {
		mode: "xyz50",
		x: 0,
		y: 0,
		z: 0
	};
	t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = t / (13 * e) + bn, a = n / (13 * e) + xn, o = K.Y * (e <= 8 ? e / Yt : ((e + 16) / 116) ** 3), s = {
		mode: "xyz50",
		x: 9 * i * o / (4 * a),
		y: o,
		z: o * (12 - 3 * i - 20 * a) / (4 * a)
	};
	return r !== void 0 && (s.alpha = r), s;
}, Cn = {
	mode: "lchuv",
	toMode: {
		luv: dn,
		rgb: (e) => X(Sn(dn(e)))
	},
	fromMode: {
		rgb: (e) => un(_n(Z(e))),
		luv: un
	},
	channels: [
		"l",
		"c",
		"h",
		"alpha"
	],
	parse: ["--lchuv"],
	serialize: "--lchuv",
	ranges: {
		l: [0, 100],
		c: [0, 176.956],
		h: [0, 360]
	},
	interpolate: {
		h: {
			use: N,
			fixup: V
		},
		c: N,
		l: N,
		alpha: {
			use: N,
			fixup: P
		}
	},
	difference: { h: Be },
	average: { h: U }
}, wn = {
	...F,
	mode: "lrgb",
	toMode: { rgb: R },
	fromMode: { rgb: I },
	parse: ["srgb-linear"],
	serialize: "srgb-linear"
}, Tn = {
	mode: "luv",
	toMode: {
		xyz50: Sn,
		rgb: (e) => X(Sn(e))
	},
	fromMode: {
		xyz50: _n,
		rgb: (e) => _n(Z(e))
	},
	channels: [
		"l",
		"u",
		"v",
		"alpha"
	],
	parse: ["--luv"],
	serialize: "--luv",
	ranges: {
		l: [0, 100],
		u: [-84.936, 175.042],
		v: [-125.882, 87.243]
	},
	interpolate: {
		l: N,
		u: N,
		v: N,
		alpha: {
			use: N,
			fixup: P
		}
	}
}, En = ({ r: e, g: t, b: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = Math.cbrt(.412221469470763 * e + .5363325372617348 * t + .0514459932675022 * n), a = Math.cbrt(.2119034958178252 * e + .6806995506452344 * t + .1073969535369406 * n), o = Math.cbrt(.0883024591900564 * e + .2817188391361215 * t + .6299787016738222 * n), s = {
		mode: "oklab",
		l: .210454268309314 * i + .7936177747023054 * a - .0040720430116193 * o,
		a: 1.9779985324311684 * i - 2.42859224204858 * a + .450593709617411 * o,
		b: .0259040424655478 * i + .7827717124575296 * a - .8086757549230774 * o
	};
	return r !== void 0 && (s.alpha = r), s;
}, Dn = (e) => {
	let t = En(I(e));
	return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, Q = ({ l: e, a: t, b: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = (e + .3963377773761749 * t + .2158037573099136 * n) ** 3, a = (e - .1055613458156586 * t - .0638541728258133 * n) ** 3, o = (e - .0894841775298119 * t - 1.2914855480194092 * n) ** 3, s = {
		mode: "lrgb",
		r: 4.076741636075957 * i - 3.3077115392580616 * a + .2309699031821044 * o,
		g: -1.2684379732850317 * i + 2.6097573492876887 * a - .3413193760026573 * o,
		b: -.0041960761386756 * i - .7034186179359362 * a + 1.7076146940746117 * o
	};
	return r !== void 0 && (s.alpha = r), s;
}, On = (e) => R(Q(e));
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/okhsl/helpers.js
function kn(e) {
	let t = .206, n = 1.206 / 1.03;
	return .5 * (n * e - t + Math.sqrt((n * e - t) * (n * e - t) + .12 * n * e));
}
function An(e) {
	return (e * e + .206 * e) / (1.206 / 1.03 * (e + .03));
}
function jn(e, t) {
	let n, r, i, a, o, s, c, l;
	-1.88170328 * e - .80936493 * t > 1 ? (n = 1.19086277, r = 1.76576728, i = .59662641, a = .75515197, o = .56771245, s = 4.0767416621, c = -3.3077115913, l = .2309699292) : 1.81444104 * e - 1.19445276 * t > 1 ? (n = .73956515, r = -.45954404, i = .08285427, a = .1254107, o = .14503204, s = -1.2684380046, c = 2.6097574011, l = -.3413193965) : (n = 1.35733652, r = -.00915799, i = -1.1513021, a = -.50559606, o = .00692167, s = -.0041960863, c = -.7034186147, l = 1.707614701);
	let u = n + r * e + i * t + a * e * e + o * e * t, d = .3963377774 * e + .2158037573 * t, f = -.1055613458 * e - .0638541728 * t, p = -.0894841775 * e - 1.291485548 * t;
	{
		let e = 1 + u * d, t = 1 + u * f, n = 1 + u * p, r = e * e * e, i = t * t * t, a = n * n * n, o = 3 * d * e * e, m = 3 * f * t * t, h = 3 * p * n * n, g = 6 * d * d * e, _ = 6 * f * f * t, v = 6 * p * p * n, y = s * r + c * i + l * a, b = s * o + c * m + l * h, x = s * g + c * _ + l * v;
		u -= y * b / (b * b - .5 * y * x);
	}
	return u;
}
function Mn(e, t) {
	let n = jn(e, t), r = Q({
		l: 1,
		a: n * e,
		b: n * t
	}), i = Math.cbrt(1 / Math.max(r.r, r.g, r.b));
	return [i, i * n];
}
function Nn(e, t, n, r, i, a = null) {
	a ||= Mn(e, t);
	let o;
	if ((n - i) * a[1] - (a[0] - i) * r <= 0) o = a[1] * i / (r * a[0] + a[1] * (i - n));
	else {
		o = a[1] * (i - 1) / (r * (a[0] - 1) + a[1] * (i - n));
		{
			let a = n - i, s = r, c = .3963377774 * e + .2158037573 * t, l = -.1055613458 * e - .0638541728 * t, u = -.0894841775 * e - 1.291485548 * t, d = a + s * c, f = a + s * l, p = a + s * u;
			{
				let e = i * (1 - o) + o * n, t = o * r, a = e + t * c, s = e + t * l, m = e + t * u, h = a * a * a, g = s * s * s, _ = m * m * m, v = 3 * d * a * a, y = 3 * f * s * s, b = 3 * p * m * m, x = 6 * d * d * a, S = 6 * f * f * s, C = 6 * p * p * m, w = 4.0767416621 * h - 3.3077115913 * g + .2309699292 * _ - 1, T = 4.0767416621 * v - 3.3077115913 * y + .2309699292 * b, ee = 4.0767416621 * x - 3.3077115913 * S + .2309699292 * C, E = T / (T * T - .5 * w * ee), D = -w * E, te = -1.2684380046 * h + 2.6097574011 * g - .3413193965 * _ - 1, O = -1.2684380046 * v + 2.6097574011 * y - .3413193965 * b, ne = -1.2684380046 * x + 2.6097574011 * S - .3413193965 * C, re = O / (O * O - .5 * te * ne), k = -te * re, ie = -.0041960863 * h - .7034186147 * g + 1.707614701 * _ - 1, ae = -.0041960863 * v - .7034186147 * y + 1.707614701 * b, oe = -.0041960863 * x - .7034186147 * S + 1.707614701 * C, se = ae / (ae * ae - .5 * ie * oe), A = -ie * se;
				D = E >= 0 ? D : 1e6, k = re >= 0 ? k : 1e6, A = se >= 0 ? A : 1e6, o += Math.min(D, Math.min(k, A));
			}
		}
	}
	return o;
}
function Pn(e, t, n = null) {
	n ||= Mn(e, t);
	let r = n[0], i = n[1];
	return [i / r, i / (1 - r)];
}
function Fn(e, t, n) {
	let r = Mn(t, n), i = Nn(t, n, e, 1, e, r), a = Pn(t, n, r), o = .11516993 + 1 / (7.4477897 + 4.1590124 * n + t * (-2.19557347 + 1.75198401 * n + t * (-2.13704948 - 10.02301043 * n + t * (-4.24894561 + 5.38770819 * n + 4.69891013 * t)))), s = .11239642 + 1 / (1.6132032 - .68124379 * n + t * (.40370612 + .90148123 * n + t * (-.27087943 + .6122399 * n + t * (.00299215 - .45399568 * n - .14661872 * t)))), c = i / Math.min(e * a[0], (1 - e) * a[1]), l = e * o, u = (1 - e) * s, d = .9 * c * Math.sqrt(Math.sqrt(1 / (1 / (l * l * l * l) + 1 / (u * u * u * u))));
	return l = e * .4, u = (1 - e) * .8, [
		Math.sqrt(1 / (1 / (l * l) + 1 / (u * u))),
		d,
		i
	];
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/okhsl/convertOklabToOkhsl.js
function In(e) {
	let t = e.l === void 0 ? 0 : e.l, n = e.a === void 0 ? 0 : e.a, r = e.b === void 0 ? 0 : e.b, i = {
		mode: "okhsl",
		l: kn(t)
	};
	e.alpha !== void 0 && (i.alpha = e.alpha);
	let a = Math.sqrt(n * n + r * r);
	if (!a) return i.s = 0, i;
	let [o, s, c] = Fn(t, n / a, r / a), l;
	if (a < s) {
		let e = .8 * o, t = 1 - e / s;
		l = (a - 0) / (e + t * (a - 0)) * .8;
	} else {
		let e = s, t = .2 * s * s * 1.25 * 1.25 / o, n = 1 - t / (c - s);
		l = .8 + .2 * ((a - e) / (t + n * (a - e)));
	}
	return l && (i.s = l, i.h = B(Math.atan2(r, n) * 180 / Math.PI)), i;
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/okhsl/convertOkhslToOklab.js
function Ln(e) {
	let t = e.h === void 0 ? 0 : e.h, n = e.s === void 0 ? 0 : e.s, r = e.l === void 0 ? 0 : e.l, i = {
		mode: "oklab",
		l: An(r)
	};
	if (e.alpha !== void 0 && (i.alpha = e.alpha), !n || r === 1) return i.a = i.b = 0, i;
	let a = Math.cos(t / 180 * Math.PI), o = Math.sin(t / 180 * Math.PI), [s, c, l] = Fn(i.l, a, o), u, d, f, p;
	n < .8 ? (u = 1.25 * n, d = 0, f = .8 * s, p = 1 - f / c) : (u = 5 * (n - .8), d = c, f = .2 * c * c * 1.25 * 1.25 / s, p = 1 - f / (l - c));
	let m = d + u * f / (1 - p * u);
	return i.a = m * a, i.b = m * o, i;
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/okhsl/modeOkhsl.js
var Rn = {
	...pt,
	mode: "okhsl",
	channels: [
		"h",
		"s",
		"l",
		"alpha"
	],
	parse: ["--okhsl"],
	serialize: "--okhsl",
	fromMode: {
		oklab: In,
		rgb: (e) => In(Dn(e))
	},
	toMode: {
		oklab: Ln,
		rgb: (e) => On(Ln(e))
	}
};
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/okhsv/convertOklabToOkhsv.js
function zn(e) {
	let t = e.l === void 0 ? 0 : e.l, n = e.a === void 0 ? 0 : e.a, r = e.b === void 0 ? 0 : e.b, i = Math.sqrt(n * n + r * r), a = i ? n / i : 1, o = i ? r / i : 1, [s, c] = Pn(a, o), l = .5, u = 1 - l / s, d = c / (i + t * c), f = d * t, p = d * i, m = An(f), h = p * m / f, g = Q({
		l: m,
		a: a * h,
		b: o * h
	}), _ = Math.cbrt(1 / Math.max(g.r, g.g, g.b, 0));
	t /= _, i = i / _ * kn(t) / t, t = kn(t);
	let v = {
		mode: "okhsv",
		s: i ? (l + c) * p / (c * l + c * u * p) : 0,
		v: t ? t / f : 0
	};
	return v.s && (v.h = B(Math.atan2(r, n) * 180 / Math.PI)), e.alpha !== void 0 && (v.alpha = e.alpha), v;
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/okhsv/convertOkhsvToOklab.js
function Bn(e) {
	let t = { mode: "oklab" };
	e.alpha !== void 0 && (t.alpha = e.alpha);
	let n = e.h === void 0 ? 0 : e.h, r = e.s === void 0 ? 0 : e.s, i = e.v === void 0 ? 0 : e.v, a = Math.cos(n / 180 * Math.PI), o = Math.sin(n / 180 * Math.PI), [s, c] = Pn(a, o), l = .5, u = 1 - l / s, d = 1 - r * l / (l + c - c * u * r), f = r * c * l / (l + c - c * u * r), p = An(d), m = f * p / d, h = Q({
		l: p,
		a: a * m,
		b: o * m
	}), g = Math.cbrt(1 / Math.max(h.r, h.g, h.b, 0)), _ = An(i * d), v = f * _ / d;
	return t.l = _ * g, t.a = v * a * g, t.b = v * o * g, t;
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/okhsv/modeOkhsv.js
var Vn = {
	...gt,
	mode: "okhsv",
	channels: [
		"h",
		"s",
		"v",
		"alpha"
	],
	parse: ["--okhsv"],
	serialize: "--okhsv",
	fromMode: {
		oklab: zn,
		rgb: (e) => zn(Dn(e))
	},
	toMode: {
		oklab: Bn,
		rgb: (e) => On(Bn(e))
	}
};
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/oklab/parseOklab.js
function Hn(e, t) {
	if (!t || t[0] !== "oklab") return;
	let n = { mode: "oklab" }, [, r, i, a, o] = t;
	if (r.type !== A.Hue && i.type !== A.Hue && a.type !== A.Hue) return r.type !== A.None && (n.l = Math.min(Math.max(0, r.type === A.Number ? r.value : r.value / 100), 1)), i.type !== A.None && (n.a = i.type === A.Number ? i.value : i.value * .4 / 100), a.type !== A.None && (n.b = a.type === A.Number ? a.value : a.value * .4 / 100), o.type !== A.None && (n.alpha = Math.min(1, Math.max(0, o.type === A.Number ? o.value : o.value / 100))), n;
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/oklab/definition.js
var Un = {
	...an,
	mode: "oklab",
	toMode: {
		lrgb: Q,
		rgb: On
	},
	fromMode: {
		lrgb: En,
		rgb: Dn
	},
	ranges: {
		l: [0, 1],
		a: [-.4, .4],
		b: [-.4, .4]
	},
	parse: [Hn],
	serialize: (e) => `oklab(${e.l === void 0 ? "none" : e.l} ${e.a === void 0 ? "none" : e.a} ${e.b === void 0 ? "none" : e.b}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`
};
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/oklch/parseOklch.js
function Wn(e, t) {
	if (!t || t[0] !== "oklch") return;
	let n = { mode: "oklch" }, [, r, i, a, o] = t;
	if (r.type !== A.None) {
		if (r.type === A.Hue) return;
		n.l = Math.min(Math.max(0, r.type === A.Number ? r.value : r.value / 100), 1);
	}
	if (i.type !== A.None && (n.c = Math.max(0, i.type === A.Number ? i.value : i.value * .4 / 100)), a.type !== A.None) {
		if (a.type === A.Percentage) return;
		n.h = a.value;
	}
	return o.type !== A.None && (n.alpha = Math.min(1, Math.max(0, o.type === A.Number ? o.value : o.value / 100))), n;
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/oklch/definition.js
var Gn = {
	...cn,
	mode: "oklch",
	toMode: {
		oklab: (e) => G(e, "oklab"),
		rgb: (e) => On(G(e, "oklab"))
	},
	fromMode: {
		rgb: (e) => W(Dn(e), "oklch"),
		oklab: (e) => W(e, "oklch")
	},
	parse: [Wn],
	serialize: (e) => `oklch(${e.l === void 0 ? "none" : e.l} ${e.c === void 0 ? "none" : e.c} ${e.h === void 0 ? "none" : e.h}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
	ranges: {
		l: [0, 1],
		c: [0, .4],
		h: [0, 360]
	}
}, Kn = (e) => {
	let { r: t, g: n, b: r, alpha: i } = I(e), a = {
		mode: "xyz65",
		x: .486570948648216 * t + .265667693169093 * n + .1982172852343625 * r,
		y: .2289745640697487 * t + .6917385218365062 * n + .079286914093745 * r,
		z: 0 * t + .0451133818589026 * n + 1.043944368900976 * r
	};
	return i !== void 0 && (a.alpha = i), a;
}, qn = ({ x: e, y: t, z: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = R({
		r: e * 2.4934969119414263 - t * .9313836179191242 - .402710784450717 * n,
		g: e * -.8294889695615749 + t * 1.7626640603183465 + .0236246858419436 * n,
		b: e * .0358458302437845 - t * .0761723892680418 + .9568845240076871 * n
	}, "p3");
	return r !== void 0 && (i.alpha = r), i;
}, Jn = {
	...F,
	mode: "p3",
	parse: ["display-p3"],
	serialize: "display-p3",
	fromMode: {
		rgb: (e) => qn(L(e)),
		xyz65: qn
	},
	toMode: {
		rgb: (e) => z(Kn(e)),
		xyz65: Kn
	}
}, Yn = (e) => {
	let t = Math.abs(e);
	return t >= 1 / 512 ? Math.sign(e) * t ** (1 / 1.8) : 16 * e;
}, Xn = ({ x: e, y: t, z: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = {
		mode: "prophoto",
		r: Yn(e * 1.3457868816471585 - t * .2555720873797946 - .0511018649755453 * n),
		g: Yn(e * -.5446307051249019 + t * 1.5082477428451466 + .0205274474364214 * n),
		b: Yn(e * 0 + t * 0 + 1.2119675456389452 * n)
	};
	return r !== void 0 && (i.alpha = r), i;
}, Zn = (e = 0) => {
	let t = Math.abs(e);
	return t >= 16 / 512 ? Math.sign(e) * t ** 1.8 : e / 16;
}, Qn = (e) => {
	let t = Zn(e.r), n = Zn(e.g), r = Zn(e.b), i = {
		mode: "xyz50",
		x: .7977666449006423 * t + .1351812974005331 * n + .0313477341283922 * r,
		y: .2880748288194013 * t + .7118352342418731 * n + 899369387256e-16 * r,
		z: 0 * t + 0 * n + .8251046025104602 * r
	};
	return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, $n = {
	...F,
	mode: "prophoto",
	parse: ["prophoto-rgb"],
	serialize: "prophoto-rgb",
	fromMode: {
		xyz50: Xn,
		rgb: (e) => Xn(Z(e))
	},
	toMode: {
		xyz50: Qn,
		rgb: (e) => X(Qn(e))
	}
}, er = 1.09929682680944, tr = .018053968510807, nr = (e) => {
	let t = Math.abs(e);
	return t > tr ? (Math.sign(e) || 1) * (er * t ** .45 - .09929682680944008) : 4.5 * e;
}, rr = ({ x: e, y: t, z: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = {
		mode: "rec2020",
		r: nr(e * 1.7166511879712683 - t * .3556707837763925 - .2533662813736599 * n),
		g: nr(e * -.6666843518324893 + t * 1.6164812366349395 + .0157685458139111 * n),
		b: nr(e * .0176398574453108 - t * .0427706132578085 + .9421031212354739 * n)
	};
	return r !== void 0 && (i.alpha = r), i;
}, ir = 1.09929682680944, ar = .018053968510807, or = (e = 0) => {
	let t = Math.abs(e);
	return t < ar * 4.5 ? e / 4.5 : (Math.sign(e) || 1) * ((t + ir - 1) / ir) ** (1 / .45);
}, sr = (e) => {
	let t = or(e.r), n = or(e.g), r = or(e.b), i = {
		mode: "xyz65",
		x: .6369580483012911 * t + .1446169035862083 * n + .1688809751641721 * r,
		y: .262700212011267 * t + .6779980715188708 * n + .059301716469862 * r,
		z: 0 * t + .0280726930490874 * n + 1.0609850577107909 * r
	};
	return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, cr = {
	...F,
	mode: "rec2020",
	fromMode: {
		xyz65: rr,
		rgb: (e) => rr(L(e))
	},
	toMode: {
		xyz65: sr,
		rgb: (e) => z(sr(e))
	},
	parse: ["rec2020"],
	serialize: "rec2020"
}, $ = .0037930732552754493, lr = Math.cbrt($), ur = (e) => Math.cbrt(e) - lr, dr = (e) => {
	let { r: t, g: n, b: r, alpha: i } = I(e), a = ur(.3 * t + .622 * n + .078 * r + $), o = ur(.23 * t + .692 * n + .078 * r + $), s = ur(.2434226892454782 * t + .2047674442449682 * n + .5518098665095535 * r + $), c = {
		mode: "xyb",
		x: (a - o) / 2,
		y: (a + o) / 2,
		b: s - (a + o) / 2
	};
	return i !== void 0 && (c.alpha = i), c;
}, fr = (e) => (e + lr) ** 3, pr = {
	mode: "xyb",
	channels: [
		"x",
		"y",
		"b",
		"alpha"
	],
	parse: ["--xyb"],
	serialize: "--xyb",
	toMode: { rgb: ({ x: e, y: t, b: n, alpha: r }) => {
		e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
		let i = fr(e + t) - $, a = fr(t - e) - $, o = fr(n + t) - $, s = R({
			r: 11.031566904639861 * i - 9.866943908131562 * a - .16462299650829934 * o,
			g: -3.2541473810744237 * i + 4.418770377582723 * a - .16462299650829934 * o,
			b: -3.6588512867136815 * i + 2.7129230459360922 * a + 1.9459282407775895 * o
		});
		return r !== void 0 && (s.alpha = r), s;
	} },
	fromMode: { rgb: dr },
	ranges: {
		x: [-.0154, .0281],
		y: [0, .8453],
		b: [-.2778, .388]
	},
	interpolate: {
		x: N,
		y: N,
		b: N,
		alpha: {
			use: N,
			fixup: P
		}
	}
}, mr = {
	mode: "xyz50",
	parse: ["xyz-d50"],
	serialize: "xyz-d50",
	toMode: {
		rgb: X,
		lab: tn
	},
	fromMode: {
		rgb: Z,
		lab: Qt
	},
	channels: [
		"x",
		"y",
		"z",
		"alpha"
	],
	ranges: {
		x: [0, .964],
		y: [0, .999],
		z: [0, .825]
	},
	interpolate: {
		x: N,
		y: N,
		z: N,
		alpha: {
			use: N,
			fixup: P
		}
	}
}, hr = {
	mode: "xyz65",
	toMode: {
		rgb: z,
		xyz50: (e) => {
			let { x: t, y: n, z: r, alpha: i } = e;
			t === void 0 && (t = 0), n === void 0 && (n = 0), r === void 0 && (r = 0);
			let a = {
				mode: "xyz50",
				x: 1.0479298208405488 * t + .0229467933410191 * n - .0501922295431356 * r,
				y: .0296278156881593 * t + .990434484573249 * n - .0170738250293851 * r,
				z: -.0092430581525912 * t + .0150551448965779 * n + .7518742899580008 * r
			};
			return i !== void 0 && (a.alpha = i), a;
		}
	},
	fromMode: {
		rgb: L,
		xyz50: (e) => {
			let { x: t, y: n, z: r, alpha: i } = e;
			t === void 0 && (t = 0), n === void 0 && (n = 0), r === void 0 && (r = 0);
			let a = {
				mode: "xyz65",
				x: .9554734527042182 * t - .0230985368742614 * n + .0632593086610217 * r,
				y: -.0283697069632081 * t + 1.0099954580058226 * n + .021041398966943 * r,
				z: .0123140016883199 * t - .0205076964334779 * n + 1.3303659366080753 * r
			};
			return i !== void 0 && (a.alpha = i), a;
		}
	},
	ranges: {
		x: [0, .95],
		y: [0, 1],
		z: [0, 1.088]
	},
	channels: [
		"x",
		"y",
		"z",
		"alpha"
	],
	parse: ["xyz", "xyz-d65"],
	serialize: "xyz-d65",
	interpolate: {
		x: N,
		y: N,
		z: N,
		alpha: {
			use: N,
			fixup: P
		}
	}
}, gr = {
	mode: "yiq",
	toMode: { rgb: ({ y: e, i: t, q: n, alpha: r }) => {
		e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
		let i = {
			mode: "rgb",
			r: e + .95608445 * t + .6208885 * n,
			g: e - .27137664 * t - .6486059 * n,
			b: e - 1.10561724 * t + 1.70250126 * n
		};
		return r !== void 0 && (i.alpha = r), i;
	} },
	fromMode: { rgb: ({ r: e, g: t, b: n, alpha: r }) => {
		e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
		let i = {
			mode: "yiq",
			y: .29889531 * e + .58662247 * t + .11448223 * n,
			i: .59597799 * e - .2741761 * t - .32180189 * n,
			q: .21147017 * e - .52261711 * t + .31114694 * n
		};
		return r !== void 0 && (i.alpha = r), i;
	} },
	channels: [
		"y",
		"i",
		"q",
		"alpha"
	],
	parse: ["--yiq"],
	serialize: "--yiq",
	ranges: {
		i: [-.595, .595],
		q: [-.522, .522]
	},
	interpolate: {
		y: N,
		i: N,
		q: N,
		alpha: {
			use: N,
			fixup: P
		}
	}
}, _r = (e, t) => Math.round(e * (t = 10 ** t)) / t, vr = ((e = 4) => (t) => typeof t == "number" ? _r(t, e) : t)(2), yr = (e) => Math.max(0, Math.min(1, e || 0)), br = (e) => Math.round(yr(e) * 255), xr = E("rgb"), Sr = (e) => {
	if (e === void 0) return;
	let t = br(e.r), n = br(e.g), r = br(e.b);
	return e.alpha === void 0 || e.alpha === 1 ? `rgb(${t}, ${n}, ${r})` : `rgba(${t}, ${n}, ${r}, ${vr(yr(e.alpha))})`;
}, Cr = (e) => Sr(xr(e));
k(ke), k(Ve), k(nt), k(rt), k(ot), k(pt), k(gt), k(bt), k(Mt), k(Gt), k(Jt), k(an), k(on), k(cn), k(ln), k(Cn), k(wn), k(Tn), k(Rn), k(Vn), k(Un), k(Gn), k(Jn), k($n), k(cr), k(F), k(pr), k(mr), k(hr), k(gr);
//#endregion
//#region src/color.ts
var wr = E("oklch"), Tr = 265, Er = .64, Dr = .19;
function Or(e) {
	return {
		mode: "oklch",
		l: Er,
		c: Dr,
		h: u(e)
	};
}
function kr(e) {
	let t = wr(e);
	if (!t) throw Error(`GlowOrb: could not parse shade color "${e}"`);
	return t;
}
function Ar(e) {
	if (e.shades) {
		let [t, n, r] = e.shades.map(kr);
		return {
			blob0: t,
			blob1: n,
			blob2: r
		};
	}
	let t = e.hue ?? Tr, n = e.secondaryHue ?? t + 35;
	return {
		blob0: Or(t),
		blob1: Or(n),
		blob2: Or(t - 20)
	};
}
function jr(e) {
	let t = l(e.hueShift, 0, 1), n = l(e.intensity, 0, 1), r = u((e.base.h ?? 0) + Math.sin(e.time * .13 + e.offset) * 40 * t);
	return {
		mode: "oklch",
		l: l(e.base.l + Math.sin(e.time * .21 + e.offset) * .1 * n, 0, 1),
		c: Math.max(0, e.base.c + Math.sin(e.time * .17 + e.offset * 1.3) * .05 * n),
		h: r
	};
}
function Mr(e) {
	let t = l(e.l, 0, 1), n = Math.max(0, e.c), r = e.h ?? 0;
	return `oklch(${(t * 100).toFixed(1)}% ${n.toFixed(3)} ${r.toFixed(1)})`;
}
function Nr(e, t = .6) {
	return Cr({
		...e,
		alpha: t
	});
}
//#endregion
//#region src/GlowOrb.vue?vue&type=script&setup=true&lang.ts
var Pr = { class: "lava" }, Fr = /*#__PURE__*/ ((e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
})(/* @__PURE__ */ r({
	__name: "GlowOrb",
	props: {
		size: { default: 132 },
		shades: {},
		hue: {},
		secondaryHue: {},
		intensity: { default: .5 },
		hueShift: { default: 0 },
		glow: {},
		excitement: { default: 1 },
		warp: { default: 1 },
		phase: { default: .09 },
		env: { default: 0 }
	},
	setup(r) {
		let l = r, u = c(null), f = c(null), p = c(null), m = [
			u,
			f,
			p
		], h = e(() => {
			try {
				return Ar({
					shades: l.shades,
					hue: l.hue,
					secondaryHue: l.secondaryHue
				});
			} catch (e) {
				return console.warn("[GlowOrb] Invalid `shades`, falling back to hue-derived palette:", e), Ar({
					hue: l.hue,
					secondaryHue: l.secondaryHue
				});
			}
		}), g = e(() => [
			h.value.blob0,
			h.value.blob1,
			h.value.blob2
		]), _ = e(() => l.glow ?? Nr(h.value.blob0, .6)), v = 0, y = 0, b = 0, x = !1, S = null, C = null;
		function w() {
			x = C?.matches ?? !1;
		}
		function T(e) {
			let t = Math.min(.05, (e - (y || e)) / 1e3);
			y = e, x || (b += t), b !== S && (S = b, m.forEach((e, t) => {
				let n = e.value;
				if (!n) return;
				let r = d({
					time: b,
					blobIndex: t,
					excitement: l.excitement,
					warp: l.warp,
					phase: l.phase,
					env: l.env
				});
				n.style.transform = `translate(${r.x.toFixed(2)}px, ${r.y.toFixed(2)}px) rotate(${r.rotation.toFixed(2)}deg) scale(${r.scaleX.toFixed(3)}, ${r.scaleY.toFixed(3)})`, n.style.borderRadius = r.borderRadius;
				let i = jr({
					base: g.value[t],
					time: b,
					hueShift: l.hueShift,
					intensity: l.intensity,
					offset: t * 1.7
				});
				n.style.background = Mr(i);
			})), v = requestAnimationFrame(T);
		}
		return a(() => {
			typeof matchMedia < "u" && (C = matchMedia("(prefers-reduced-motion: reduce)"), w(), C.addEventListener("change", w)), v = requestAnimationFrame(T);
		}), o(() => {
			cancelAnimationFrame(v), C?.removeEventListener("change", w);
		}), (e, a) => (s(), t("div", {
			class: "glow-orb",
			style: i({
				"--orb-size": `${r.size}px`,
				"--orb-glow": _.value
			})
		}, [n("div", Pr, [
			n("div", {
				ref_key: "blob0El",
				ref: u,
				class: "blob blob0"
			}, null, 512),
			n("div", {
				ref_key: "blob1El",
				ref: f,
				class: "blob blob1"
			}, null, 512),
			n("div", {
				ref_key: "blob2El",
				ref: p,
				class: "blob blob2"
			}, null, 512)
		])], 4));
	}
}), [["__scopeId", "data-v-535adb49"]]);
//#endregion
//#region src/useHoverPreview.ts
function Ir(e, t) {
	let n = Math.abs(Math.sin(e * 6.9 + t)) * .6 + Math.abs(Math.sin(e * 2.3 + t * 1.7)) * .45 + Math.abs(Math.sin(e * 13.1 + t)) * .25, r = Math.sin(e * 1.15 + t * 2.3) > -.4 ? 1 : .25;
	return Math.min(1, n * r);
}
function Lr(e, t, n = {}) {
	let r = n.seed ?? 0, i = !1, s = 0, c = 0, l = 0, u = 0;
	function d(e) {
		let n = Math.min(.05, (e - (l || e)) / 1e3);
		l = e, s += n;
		let a = i ? Ir(s, r * 7) : 0;
		c += (a - c) * .18, t.value = Number(c.toFixed(3)), u = requestAnimationFrame(d);
	}
	function f() {
		i = !0;
	}
	function p() {
		i = !1;
	}
	a(() => {
		e.value?.addEventListener("pointerenter", f), e.value?.addEventListener("pointerleave", p), u = requestAnimationFrame(d);
	}), o(() => {
		cancelAnimationFrame(u), e.value?.removeEventListener("pointerenter", f), e.value?.removeEventListener("pointerleave", p);
	});
}
//#endregion
export { Fr as GlowOrb, Lr as useHoverPreview };
