import { computed as e, createElementBlock as t, createElementVNode as n, defineComponent as r, normalizeStyle as i, onMounted as a, onUnmounted as o, openBlock as s, ref as c } from "vue";
import './glow-orb-vue.css';//#region src/utils.ts
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
//#region src/color.ts
var f = 265, p = .64, m = .19;
function h(e) {
	return {
		mode: "oklch",
		l: p,
		c: m,
		h: u(e)
	};
}
function g(e) {
	let t = e / 255;
	return t <= .04045 ? t / 12.92 : ((t + .055) / 1.055) ** 2.4;
}
function _(e) {
	let t = l(e, 0, 1), n = t <= .0031308 ? t * 12.92 : 1.055 * t ** (1 / 2.4) - .055;
	return Math.round(l(n, 0, 1) * 255);
}
function v(e, t, n) {
	let r = .4122214708 * e + .5363325363 * t + .0514459929 * n, i = .2119034982 * e + .6806995451 * t + .1073969566 * n, a = .0883024619 * e + .2817188376 * t + .6299787005 * n, o = Math.cbrt(r), s = Math.cbrt(i), c = Math.cbrt(a);
	return {
		L: .2104542553 * o + .793617785 * s - .0040720468 * c,
		a: 1.9779984951 * o - 2.428592205 * s + .4505937099 * c,
		b: .0259040371 * o + .7827717662 * s - .808675766 * c
	};
}
function y(e, t, n) {
	let r = e + .3963377774 * t + .2158037573 * n, i = e - .1055613458 * t - .0638541728 * n, a = e - .0894841775 * t - 1.291485548 * n, o = r ** 3, s = i ** 3, c = a ** 3;
	return {
		r: 4.0767416621 * o - 3.3077115913 * s + .2309699292 * c,
		g: -1.2684380046 * o + 2.6097574011 * s - .3413193965 * c,
		b: -.0041960863 * o - .7034186147 * s + 1.707614701 * c
	};
}
function b(e, t, n, r) {
	let { L: i, a, b: o } = v(g(e), g(t), g(n)), s = Math.sqrt(a * a + o * o);
	return {
		mode: "oklch",
		l: i,
		c: s,
		h: s < 1e-6 ? 0 : u(Math.atan2(o, a) * 180 / Math.PI),
		alpha: r
	};
}
function x(e) {
	let t = (e.h ?? 0) * Math.PI / 180, n = e.c * Math.cos(t), r = e.c * Math.sin(t), i = y(e.l, n, r);
	return {
		r: _(i.r),
		g: _(i.g),
		b: _(i.b),
		alpha: e.alpha ?? 1
	};
}
function S(e) {
	let t = e.slice(1);
	if (!/^[0-9a-f]+$/i.test(t)) return null;
	let n, r, i, a = 1;
	if (t.length === 3 || t.length === 4) n = Number.parseInt(t[0] + t[0], 16), r = Number.parseInt(t[1] + t[1], 16), i = Number.parseInt(t[2] + t[2], 16), t.length === 4 && (a = Number.parseInt(t[3] + t[3], 16) / 255);
	else if (t.length === 6 || t.length === 8) n = Number.parseInt(t.slice(0, 2), 16), r = Number.parseInt(t.slice(2, 4), 16), i = Number.parseInt(t.slice(4, 6), 16), t.length === 8 && (a = Number.parseInt(t.slice(6, 8), 16) / 255);
	else return null;
	return b(n, r, i, a);
}
function C(e, t) {
	let n = e.trim();
	return n.endsWith("%") ? Number.parseFloat(n) / 100 * t : Number.parseFloat(n);
}
function w(e) {
	if (e === void 0) return 1;
	let t = e.trim();
	return t.endsWith("%") ? Number.parseFloat(t) / 100 : Number.parseFloat(t);
}
function T(e) {
	let [t, n] = e.split("/").map((e) => e.trim());
	return {
		channels: t.split(/[\s,]+/).filter(Boolean),
		alpha: n
	};
}
function E(e) {
	let t = /^rgba?\(([^)]+)\)$/i.exec(e.trim());
	if (!t) return null;
	let { channels: n, alpha: r } = T(t[1]);
	if (n.length < 3) return null;
	let i = C(n[0], 255), a = C(n[1], 255), o = C(n[2], 255), s = w(r ?? n[3]);
	return [
		i,
		a,
		o,
		s
	].some(Number.isNaN) ? null : b(i, a, o, s);
}
function D(e, t, n) {
	let r = u(e) / 360, i = l(t, 0, 1), a = l(n, 0, 1);
	if (i === 0) {
		let e = Math.round(a * 255);
		return {
			r: e,
			g: e,
			b: e
		};
	}
	let o = a < .5 ? a * (1 + i) : a + i - a * i, s = 2 * a - o;
	function c(e) {
		let t = e;
		return t < 0 && (t += 1), t > 1 && --t, t < 1 / 6 ? s + (o - s) * 6 * t : t < 1 / 2 ? o : t < 2 / 3 ? s + (o - s) * (2 / 3 - t) * 6 : s;
	}
	return {
		r: Math.round(c(r + 1 / 3) * 255),
		g: Math.round(c(r) * 255),
		b: Math.round(c(r - 1 / 3) * 255)
	};
}
function O(e) {
	let t = /^hsla?\(([^)]+)\)$/i.exec(e.trim());
	if (!t) return null;
	let { channels: n, alpha: r } = T(t[1]);
	if (n.length < 3) return null;
	let i = Number.parseFloat(n[0]), a = C(n[1], 1), o = C(n[2], 1), s = w(r ?? n[3]);
	if ([
		i,
		a,
		o,
		s
	].some(Number.isNaN)) return null;
	let { r: c, g: l, b: u } = D(i, a, o);
	return b(c, l, u, s);
}
function k(e) {
	let t = e.trim();
	return t.startsWith("#") ? S(t) : /^rgba?\(/i.test(t) ? E(t) : /^hsla?\(/i.test(t) ? O(t) : null;
}
function A(e) {
	let t = k(e);
	if (!t) throw Error(`GlowOrb: could not parse shade color "${e}"`);
	return t;
}
function j(e) {
	if (e.shades) {
		let [t, n, r] = e.shades.map(A);
		return {
			blob0: t,
			blob1: n,
			blob2: r
		};
	}
	let t = e.hue ?? f, n = e.secondaryHue ?? t + 35;
	return {
		blob0: h(t),
		blob1: h(n),
		blob2: h(t - 20)
	};
}
function M(e) {
	let t = l(e.hueShift, 0, 1), n = l(e.intensity, 0, 1), r = u((e.base.h ?? 0) + Math.sin(e.time * .13 + e.offset) * 40 * t);
	return {
		mode: "oklch",
		l: l(e.base.l + Math.sin(e.time * .21 + e.offset) * .1 * n, 0, 1),
		c: Math.max(0, e.base.c + Math.sin(e.time * .17 + e.offset * 1.3) * .05 * n),
		h: r
	};
}
function N(e) {
	let t = l(e.l, 0, 1), n = Math.max(0, e.c), r = e.h ?? 0;
	return `oklch(${(t * 100).toFixed(1)}% ${n.toFixed(3)} ${r.toFixed(1)})`;
}
function P(e, t = .6) {
	let { r: n, g: r, b: i } = x({
		...e,
		alpha: t
	});
	return `rgba(${n}, ${r}, ${i}, ${t})`;
}
//#endregion
//#region src/GlowOrb.vue?vue&type=script&setup=true&lang.ts
var F = { class: "glow-orb-vue-lava" }, I = /* @__PURE__ */ r({
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
				return j({
					shades: l.shades,
					hue: l.hue,
					secondaryHue: l.secondaryHue
				});
			} catch (e) {
				return console.warn("[GlowOrb] Invalid `shades`, falling back to hue-derived palette:", e), j({
					hue: l.hue,
					secondaryHue: l.secondaryHue
				});
			}
		}), g = e(() => [
			h.value.blob0,
			h.value.blob1,
			h.value.blob2
		]), _ = e(() => l.glow ?? P(h.value.blob0, .6)), v = 0, y = 0, b = 0, x = !1, S = null, C = null;
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
				let i = M({
					base: g.value[t],
					time: b,
					hueShift: l.hueShift,
					intensity: l.intensity,
					offset: t * 1.7
				});
				n.style.background = N(i);
			})), v = requestAnimationFrame(T);
		}
		return a(() => {
			typeof matchMedia < "u" && (C = matchMedia("(prefers-reduced-motion: reduce)"), w(), C.addEventListener("change", w)), v = requestAnimationFrame(T);
		}), o(() => {
			cancelAnimationFrame(v), C?.removeEventListener("change", w);
		}), (e, a) => (s(), t("div", {
			class: "glow-orb-vue-root",
			style: i({
				"--orb-size": `${r.size}px`,
				"--orb-glow": _.value
			})
		}, [n("div", F, [
			n("div", {
				ref_key: "blob0El",
				ref: u,
				class: "glow-orb-vue-blob glow-orb-vue-blob-0"
			}, null, 512),
			n("div", {
				ref_key: "blob1El",
				ref: f,
				class: "glow-orb-vue-blob glow-orb-vue-blob-1"
			}, null, 512),
			n("div", {
				ref_key: "blob2El",
				ref: p,
				class: "glow-orb-vue-blob glow-orb-vue-blob-2"
			}, null, 512)
		])], 4));
	}
});
//#endregion
//#region src/useHoverPreview.ts
function L(e, t) {
	let n = Math.abs(Math.sin(e * 6.9 + t)) * .6 + Math.abs(Math.sin(e * 2.3 + t * 1.7)) * .45 + Math.abs(Math.sin(e * 13.1 + t)) * .25, r = Math.sin(e * 1.15 + t * 2.3) > -.4 ? 1 : .25;
	return Math.min(1, n * r);
}
function R(e, t, n = {}) {
	let r = n.seed ?? 0, i = !1, s = 0, c = 0, l = 0, u = 0;
	function d(e) {
		let n = Math.min(.05, (e - (l || e)) / 1e3);
		l = e, s += n;
		let a = i ? L(s, r * 7) : 0;
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
export { I as GlowOrb, R as useHoverPreview };
