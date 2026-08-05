import {
  onMounted as a,
  ref as c,
  computed as e,
  normalizeStyle as i,
  createElementVNode as n,
  onUnmounted as o,
  defineComponent as r,
  openBlock as s,
  createElementBlock as t,
} from 'vue';

//#region src/utils.ts
function l(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function u(e) {
  return ((e % 360) + 360) % 360;
}
//#endregion
//#region src/animation.ts
function d(e) {
  const t = Math.max(0, e.excitement),
    n = Math.max(0, e.warp),
    r = l(e.env, 0, 1),
    i = e.time * t - e.blobIndex * e.phase,
    a =
      Math.sin(i * 0.31) * 18 * t +
      Math.sin(i * 0.83) * 9 * t +
      Math.cos(i * 0.17) * 6 * t,
    o = Math.cos(i * 0.26) * 16 * t + Math.sin(i * 0.69) * 8 * t - r * 8,
    s = Math.sin(i * 0.19) * 120 * n + Math.sin(i * 0.53) * 30 * n,
    c = 1.1 + 0.3 * t * Math.sin(i * 0.47) + r * 0.08,
    u = 1.1 + 0.3 * t * Math.sin(i * 0.61 + 2.1) + r * 0.3,
    d = 50 + 22 * n * Math.sin(i * 0.41),
    f = 50 + 22 * n * Math.sin(i * 0.57 + 1.4),
    p = 50 + 22 * n * Math.sin(i * 0.33 + 2.9),
    m = 50 + 22 * n * Math.sin(i * 0.71 + 4.2);
  return {
    x: a,
    y: o,
    rotation: s,
    scaleX: c,
    scaleY: u,
    borderRadius: `${d}% ${100 - d}% ${f}% ${100 - f}% / ${p}% ${m}% ${100 - m}% ${100 - p}%`,
  };
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/rgb/parseNumber.js
var f = (e, t) => {
    if (typeof e == 'number') {
      if (t === 3)
        return {
          mode: 'rgb',
          r: (((e >> 8) & 15) | ((e >> 4) & 240)) / 255,
          g: (((e >> 4) & 15) | (e & 240)) / 255,
          b: ((e & 15) | ((e << 4) & 240)) / 255,
        };
      if (t === 4)
        return {
          mode: 'rgb',
          r: (((e >> 12) & 15) | ((e >> 8) & 240)) / 255,
          g: (((e >> 8) & 15) | ((e >> 4) & 240)) / 255,
          b: (((e >> 4) & 15) | (e & 240)) / 255,
          alpha: ((e & 15) | ((e << 4) & 240)) / 255,
        };
      if (t === 6)
        return {
          mode: 'rgb',
          r: ((e >> 16) & 255) / 255,
          g: ((e >> 8) & 255) / 255,
          b: (e & 255) / 255,
        };
      if (t === 8)
        return {
          mode: 'rgb',
          r: ((e >> 24) & 255) / 255,
          g: ((e >> 16) & 255) / 255,
          b: ((e >> 8) & 255) / 255,
          alpha: (e & 255) / 255,
        };
    }
  },
  p = {
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
    yellowgreen: 10145074,
  },
  m = (e) => f(p[e.toLowerCase()], 6),
  h = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i,
  g = (e) => {
    let t;
    return (t = e.match(h)) ? f(parseInt(t[1], 16), t[1].length) : void 0;
  },
  _ = '([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)';
`${_}`;
var v = `${_}%`;
`${_}`;
var y = `(?:${_}%|${_})`,
  b = `(?:${_}%|${_}|none)`,
  x = `(?:${_}(deg|grad|rad|turn)|${_})`;
`${_}${_}`;
var S = '\\s*,\\s*';
RegExp('^' + b + '$');
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/rgb/parseRgbLegacy.js
var ee = RegExp(`^rgba?\\(\\s*${_}${S}${_}${S}${_}\\s*(?:,\\s*${y}\\s*)?\\)$`),
  te = RegExp(`^rgba?\\(\\s*${v}${S}${v}${S}${v}\\s*(?:,\\s*${y}\\s*)?\\)$`),
  ne = (e) => {
    let t = { mode: 'rgb' },
      n;
    if ((n = e.match(ee)))
      n[1] !== void 0 && (t.r = n[1] / 255),
        n[2] !== void 0 && (t.g = n[2] / 255),
        n[3] !== void 0 && (t.b = n[3] / 255);
    else if ((n = e.match(te)))
      n[1] !== void 0 && (t.r = n[1] / 100),
        n[2] !== void 0 && (t.g = n[2] / 100),
        n[3] !== void 0 && (t.b = n[3] / 100);
    else return;
    return (
      n[4] === void 0
        ? n[5] !== void 0 && (t.alpha = Math.max(0, Math.min(1, +n[5])))
        : (t.alpha = Math.max(0, Math.min(1, n[4] / 100))),
      t
    );
  },
  re = (e, t) =>
    e === void 0
      ? void 0
      : typeof e == 'object'
        ? e.mode === void 0
          ? t
            ? {
                ...e,
                mode: t,
              }
            : void 0
          : e
        : ye(e),
  C =
    (e = 'rgb') =>
    (t) =>
      (t = re(t, e)) === void 0
        ? void 0
        : t.mode === e
          ? t
          : w[t.mode][e]
            ? w[t.mode][e](t)
            : e === 'rgb'
              ? w[t.mode].rgb(t)
              : w.rgb[e](w[t.mode].rgb(t)),
  w = {},
  ie = {},
  T = [],
  ae = {},
  oe = (e) => e,
  E = (e) => (
    (w[e.mode] = {
      ...w[e.mode],
      ...e.toMode,
    }),
    Object.keys(e.fromMode || {}).forEach((t) => {
      w[t] || (w[t] = {}), (w[t][e.mode] = e.fromMode[t]);
    }),
    (e.ranges ||= {}),
    (e.difference ||= {}),
    e.channels.forEach((t) => {
      if ((e.ranges[t] === void 0 && (e.ranges[t] = [0, 1]), !e.interpolate[t]))
        throw Error(`Missing interpolator for: ${t}`);
      typeof e.interpolate[t] == 'function' &&
        (e.interpolate[t] = { use: e.interpolate[t] }),
        e.interpolate[t].fixup || (e.interpolate[t].fixup = oe);
    }),
    (ie[e.mode] = e),
    (e.parse || []).forEach((t) => {
      D(t, e.mode);
    }),
    C(e.mode)
  ),
  se = (e) => ie[e],
  D = (e, t) => {
    if (typeof e == 'string') {
      if (!t) throw Error("'mode' required when 'parser' is a string");
      ae[e] = t;
    } else typeof e == 'function' && T.indexOf(e) < 0 && T.push(e);
  },
  O = /[^\x00-\x7F]|[a-zA-Z_]/,
  ce = /[^\x00-\x7F]|[-\w]/,
  k = {
    Function: 'function',
    Ident: 'ident',
    Number: 'number',
    Percentage: 'percentage',
    ParenClose: ')',
    None: 'none',
    Hue: 'hue',
    Alpha: 'alpha',
  },
  A = 0;
function le(e) {
  const t = e[A],
    n = e[A + 1];
  return t === '-' || t === '+'
    ? /\d/.test(n) || (n === '.' && /\d/.test(e[A + 2]))
    : t === '.'
      ? /\d/.test(n)
      : /\d/.test(t);
}
function ue(e) {
  if (A >= e.length) return !1;
  const t = e[A];
  if (O.test(t)) return !0;
  if (t === '-') {
    if (e.length - A < 2) return !1;
    const t = e[A + 1];
    return !!(t === '-' || O.test(t));
  }
  return !1;
}
var de = {
  deg: 1,
  rad: 180 / Math.PI,
  grad: 9 / 10,
  turn: 360,
};
function j(e) {
  let t = '';
  if (
    ((e[A] === '-' || e[A] === '+') && (t += e[A++]),
    (t += fe(e)),
    e[A] === '.' && /\d/.test(e[A + 1]) && (t += e[A++] + fe(e)),
    (e[A] === 'e' || e[A] === 'E') &&
      ((e[A + 1] === '-' || e[A + 1] === '+') && /\d/.test(e[A + 2])
        ? (t += e[A++] + e[A++] + fe(e))
        : /\d/.test(e[A + 1]) && (t += e[A++] + fe(e))),
    ue(e))
  ) {
    const n = pe(e);
    return n === 'deg' || n === 'rad' || n === 'turn' || n === 'grad'
      ? {
          type: k.Hue,
          value: t * de[n],
        }
      : void 0;
  }
  return e[A] === '%'
    ? (A++,
      {
        type: k.Percentage,
        value: +t,
      })
    : {
        type: k.Number,
        value: +t,
      };
}
function fe(e) {
  let t = '';
  for (; /\d/.test(e[A]); ) t += e[A++];
  return t;
}
function pe(e) {
  let t = '';
  for (; A < e.length && ce.test(e[A]); ) t += e[A++];
  return t;
}
function me(e) {
  const t = pe(e);
  return e[A] === '('
    ? (A++,
      {
        type: k.Function,
        value: t,
      })
    : t === 'none'
      ? {
          type: k.None,
          value: void 0,
        }
      : {
          type: k.Ident,
          value: t,
        };
}
function he(e = '') {
  let t = e.trim(),
    n = [],
    r;
  for (A = 0; A < t.length; ) {
    if (((r = t[A++]), r === '\n' || r === '	' || r === ' ')) {
      for (; A < t.length && (t[A] === '\n' || t[A] === '	' || t[A] === ' '); )
        A++;
      continue;
    }
    if (r === ',') return;
    if (r === ')') {
      n.push({ type: k.ParenClose });
      continue;
    }
    if (r === '+') {
      if ((A--, le(t))) {
        n.push(j(t));
        continue;
      }
      return;
    }
    if (r === '-') {
      if ((A--, le(t))) {
        n.push(j(t));
        continue;
      }
      if (ue(t)) {
        n.push({
          type: k.Ident,
          value: pe(t),
        });
        continue;
      }
      return;
    }
    if (r === '.') {
      if ((A--, le(t))) {
        n.push(j(t));
        continue;
      }
      return;
    }
    if (r === '/') {
      for (; A < t.length && (t[A] === '\n' || t[A] === '	' || t[A] === ' '); )
        A++;
      let e;
      if (le(t) && ((e = j(t)), e.type !== k.Hue)) {
        n.push({
          type: k.Alpha,
          value: e,
        });
        continue;
      }
      if (ue(t) && pe(t) === 'none') {
        n.push({
          type: k.Alpha,
          value: {
            type: k.None,
            value: void 0,
          },
        });
        continue;
      }
      return;
    }
    if (/\d/.test(r)) {
      A--, n.push(j(t));
      continue;
    }
    if (O.test(r)) {
      A--, n.push(me(t));
      continue;
    }
    return;
  }
  return n;
}
function ge(e) {
  e._i = 0;
  let t = e[e._i++];
  if (
    !t ||
    t.type !== k.Function ||
    t.value !== 'color' ||
    ((t = e[e._i++]), t.type !== k.Ident)
  )
    return;
  const n = ae[t.value];
  if (!n) return;
  const r = { mode: n },
    i = _e(e, !1);
  if (!i) return;
  const a = se(n).channels;
  for (let e = 0, t, n; e < a.length; e++)
    (t = i[e]),
      (n = a[e]),
      t.type !== k.None &&
        ((r[n] = t.type === k.Number ? t.value : t.value / 100),
        n === 'alpha' && (r[n] = Math.max(0, Math.min(1, r[n]))));
  return r;
}
function _e(e, t) {
  let n = [],
    r;
  for (; e._i < e.length; ) {
    if (
      ((r = e[e._i++]),
      r.type === k.None ||
        r.type === k.Number ||
        r.type === k.Alpha ||
        r.type === k.Percentage ||
        (t && r.type === k.Hue))
    ) {
      n.push(r);
      continue;
    }
    if (r.type === k.ParenClose) {
      if (e._i < e.length) return;
      continue;
    }
    return;
  }
  if (!(n.length < 3 || n.length > 4)) {
    if (n.length === 4) {
      if (n[3].type !== k.Alpha) return;
      n[3] = n[3].value;
    }
    return (
      n.length === 3 &&
        n.push({
          type: k.None,
          value: void 0,
        }),
      n.every((e) => e.type !== k.Alpha) ? n : void 0
    );
  }
}
function ve(e, t) {
  e._i = 0;
  const n = e[e._i++];
  if (!n || n.type !== k.Function) return;
  const r = _e(e, t);
  if (r) return r.unshift(n.value), r;
}
var ye = (e) => {
  if (typeof e != 'string') return;
  let t = he(e),
    n = t ? ve(t, !0) : void 0,
    r,
    i = 0,
    a = T.length;
  for (; i < a; ) if ((r = T[i++](e, n)) !== void 0) return r;
  return t ? ge(t) : void 0;
};
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/rgb/parseRgb.js
function be(e, t) {
  if (!t || (t[0] !== 'rgb' && t[0] !== 'rgba')) return;
  const n = { mode: 'rgb' },
    [, r, i, a, o] = t;
  if (r.type !== k.Hue && i.type !== k.Hue && a.type !== k.Hue)
    return (
      r.type !== k.None &&
        (n.r = r.type === k.Number ? r.value / 255 : r.value / 100),
      i.type !== k.None &&
        (n.g = i.type === k.Number ? i.value / 255 : i.value / 100),
      a.type !== k.None &&
        (n.b = a.type === k.Number ? a.value / 255 : a.value / 100),
      o.type !== k.None &&
        (n.alpha = Math.min(
          1,
          Math.max(0, o.type === k.Number ? o.value : o.value / 100)
        )),
      n
    );
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/rgb/parseTransparent.js
var xe = (e) =>
    e === 'transparent'
      ? {
          mode: 'rgb',
          r: 0,
          g: 0,
          b: 0,
          alpha: 0,
        }
      : void 0,
  Se = (e, t, n) => e + n * (t - e),
  Ce = (e) => {
    const t = [];
    for (let n = 0; n < e.length - 1; n++) {
      const r = e[n],
        i = e[n + 1];
      r === void 0 && i === void 0
        ? t.push(void 0)
        : r !== void 0 && i !== void 0
          ? t.push([r, i])
          : t.push(r === void 0 ? [i, i] : [r, r]);
    }
    return t;
  },
  M = ((e) => (t) => {
    const n = Ce(t);
    return (t) => {
      const r = t * n.length,
        i = t >= 1 ? n.length - 1 : Math.max(Math.floor(r), 0),
        a = n[i];
      return a === void 0 ? void 0 : e(a[0], a[1], r - i);
    };
  })(Se),
  N = (e) => {
    let t = !1,
      n = e.map((e) => (e === void 0 ? 1 : ((t = !0), e)));
    return t ? n : e;
  },
  P = {
    mode: 'rgb',
    channels: ['r', 'g', 'b', 'alpha'],
    parse: [be, g, ne, m, xe, 'srgb'],
    serialize: 'srgb',
    interpolate: {
      r: M,
      g: M,
      b: M,
      alpha: {
        use: M,
        fixup: N,
      },
    },
    gamut: !0,
    white: {
      r: 1,
      g: 1,
      b: 1,
    },
    black: {
      r: 0,
      g: 0,
      b: 0,
    },
  },
  we = (e = 0) => Math.abs(e) ** (563 / 256) * Math.sign(e),
  Te = (e) => {
    const t = we(e.r),
      n = we(e.g),
      r = we(e.b),
      i = {
        mode: 'xyz65',
        x:
          0.5766690429101305 * t +
          0.1855582379065463 * n +
          0.1882286462349947 * r,
        y:
          0.297344975250536 * t +
          0.6273635662554661 * n +
          0.0752914584939979 * r,
        z:
          0.0270313613864123 * t +
          0.0706888525358272 * n +
          0.9913375368376386 * r,
      };
    return e.alpha !== void 0 && (i.alpha = e.alpha), i;
  },
  Ee = (e) => Math.abs(e) ** (256 / 563) * Math.sign(e),
  De = ({ x: e, y: t, z: n, alpha: r }) => {
    e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
    const i = {
      mode: 'a98',
      r: Ee(
        e * 2.0415879038107465 - t * 0.5650069742788597 - 0.3447313507783297 * n
      ),
      g: Ee(
        e * -0.9692436362808798 +
          t * 1.8759675015077206 +
          0.0415550574071756 * n
      ),
      b: Ee(
        e * 0.0134442806320312 - t * 0.1183623922310184 + 1.0151749943912058 * n
      ),
    };
    return r !== void 0 && (i.alpha = r), i;
  },
  Oe = (e = 0) => {
    const t = Math.abs(e);
    return t <= 0.04045
      ? e / 12.92
      : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
  },
  F = ({ r: e, g: t, b: n, alpha: r }) => {
    const i = {
      mode: 'lrgb',
      r: Oe(e),
      g: Oe(t),
      b: Oe(n),
    };
    return r !== void 0 && (i.alpha = r), i;
  },
  I = (e) => {
    const { r: t, g: n, b: r, alpha: i } = F(e),
      a = {
        mode: 'xyz65',
        x:
          0.4123907992659593 * t +
          0.357584339383878 * n +
          0.1804807884018343 * r,
        y:
          0.2126390058715102 * t +
          0.715168678767756 * n +
          0.0721923153607337 * r,
        z:
          0.0193308187155918 * t +
          0.119194779794626 * n +
          0.9505321522496607 * r,
      };
    return i !== void 0 && (a.alpha = i), a;
  },
  ke = (e = 0) => {
    const t = Math.abs(e);
    return t > 0.0031308
      ? (Math.sign(e) || 1) * (1.055 * t ** (1 / 2.4) - 0.055)
      : e * 12.92;
  },
  L = ({ r: e, g: t, b: n, alpha: r }, i = 'rgb') => {
    const a = {
      mode: i,
      r: ke(e),
      g: ke(t),
      b: ke(n),
    };
    return r !== void 0 && (a.alpha = r), a;
  },
  R = ({ x: e, y: t, z: n, alpha: r }) => {
    e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
    const i = L({
      r:
        e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * n,
      g:
        e * -0.9692436362808796 +
        t * 1.8759675015077204 +
        0.0415550574071756 * n,
      b:
        e * 0.0556300796969936 -
        t * 0.2039769588889765 +
        1.0569715142428784 * n,
    });
    return r !== void 0 && (i.alpha = r), i;
  },
  Ae = {
    ...P,
    mode: 'a98',
    parse: ['a98-rgb'],
    serialize: 'a98-rgb',
    fromMode: {
      rgb: (e) => De(I(e)),
      xyz65: De,
    },
    toMode: {
      rgb: (e) => R(Te(e)),
      xyz65: Te,
    },
  },
  z = (e) => ((e %= 360) < 0 ? e + 360 : e),
  je = (e, t) =>
    e
      .map((n, r, i) => {
        if (n === void 0) return n;
        const a = z(n);
        return r === 0 || e[r - 1] === void 0 ? a : t(a - z(i[r - 1]));
      })
      .reduce(
        (e, t) =>
          !e.length || t === void 0 || e[e.length - 1] === void 0
            ? (e.push(t), e)
            : (e.push(t + e[e.length - 1]), e),
        []
      ),
  B = (e) => je(e, (e) => (Math.abs(e) <= 180 ? e : e - 360 * Math.sign(e))),
  V = [-0.14861, 1.78277, -0.29227, -0.90649, 1.97294, 0],
  Me = Math.PI / 180,
  Ne = 180 / Math.PI,
  Pe = V[3] * V[4],
  Fe = V[1] * V[4],
  Ie = V[1] * V[2] - V[0] * V[3],
  Le = ({ r: e, g: t, b: n, alpha: r }) => {
    e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
    const i = (Ie * n + e * Pe - t * Fe) / (Ie + Pe - Fe),
      a = n - i,
      o = (V[4] * (t - i) - V[2] * a) / V[3],
      s = {
        mode: 'cubehelix',
        l: i,
        s:
          i === 0 || i === 1
            ? void 0
            : Math.sqrt(a * a + o * o) / (V[4] * i * (1 - i)),
      };
    return (
      s.s && (s.h = Math.atan2(o, a) * Ne - 120),
      r !== void 0 && (s.alpha = r),
      s
    );
  },
  Re = ({ h: e, s: t, l: n, alpha: r }) => {
    const i = { mode: 'rgb' };
    (e = (e === void 0 ? 0 : e + 120) * Me), n === void 0 && (n = 0);
    const a = t === void 0 ? 0 : t * n * (1 - n),
      o = Math.cos(e),
      s = Math.sin(e);
    return (
      (i.r = n + a * (V[0] * o + V[1] * s)),
      (i.g = n + a * (V[2] * o + V[3] * s)),
      (i.b = n + a * (V[4] * o + V[5] * s)),
      r !== void 0 && (i.alpha = r),
      i
    );
  },
  ze = (e, t) => {
    if (e.h === void 0 || t.h === void 0 || !e.s || !t.s) return 0;
    const n = z(e.h),
      r = z(t.h),
      i = Math.sin((((r - n + 360) / 2) * Math.PI) / 180);
    return 2 * Math.sqrt(e.s * t.s) * i;
  },
  Be = (e, t) => {
    if (e.h === void 0 || t.h === void 0) return 0;
    const n = z(e.h),
      r = z(t.h);
    return Math.abs(r - n) > 180 ? n - (r - 360 * Math.sign(r - n)) : r - n;
  },
  Ve = (e, t) => {
    if (e.h === void 0 || t.h === void 0 || !e.c || !t.c) return 0;
    const n = z(e.h),
      r = z(t.h),
      i = Math.sin((((r - n + 360) / 2) * Math.PI) / 180);
    return 2 * Math.sqrt(e.c * t.c) * i;
  },
  H = (e) => {
    const t = e.reduce(
        (e, t) => {
          if (t !== void 0) {
            const n = (t * Math.PI) / 180;
            (e.sin += Math.sin(n)), (e.cos += Math.cos(n));
          }
          return e;
        },
        {
          sin: 0,
          cos: 0,
        }
      ),
      n = (Math.atan2(t.sin, t.cos) * 180) / Math.PI;
    return n < 0 ? 360 + n : n;
  },
  He = {
    mode: 'cubehelix',
    channels: ['h', 's', 'l', 'alpha'],
    parse: ['--cubehelix'],
    serialize: '--cubehelix',
    ranges: {
      h: [0, 360],
      s: [0, 4.614],
      l: [0, 1],
    },
    fromMode: { rgb: Le },
    toMode: { rgb: Re },
    interpolate: {
      h: {
        use: M,
        fixup: B,
      },
      s: M,
      l: M,
      alpha: {
        use: M,
        fixup: N,
      },
    },
    difference: { h: ze },
    average: { h: H },
  },
  U = ({ l: e, a: t, b: n, alpha: r }, i = 'lch') => {
    t === void 0 && (t = 0), n === void 0 && (n = 0);
    const a = Math.sqrt(t * t + n * n),
      o = {
        mode: i,
        l: e,
        c: a,
      };
    return (
      a && (o.h = z((Math.atan2(n, t) * 180) / Math.PI)),
      r !== void 0 && (o.alpha = r),
      o
    );
  },
  W = ({ l: e, c: t, h: n, alpha: r }, i = 'lab') => {
    n === void 0 && (n = 0);
    const a = {
      mode: i,
      l: e,
      a: t ? t * Math.cos((n / 180) * Math.PI) : 0,
      b: t ? t * Math.sin((n / 180) * Math.PI) : 0,
    };
    return r !== void 0 && (a.alpha = r), a;
  },
  Ue = 29 ** 3 / 3 ** 3,
  We = 6 ** 3 / 29 ** 3,
  G = {
    X: 0.3457 / 0.3585,
    Y: 1,
    Z: 0.2958 / 0.3585,
  },
  K = {
    X: 0.3127 / 0.329,
    Y: 1,
    Z: 0.3583 / 0.329,
  },
  Ge = (e) => (e ** 3 > We ? e ** 3 : (116 * e - 16) / Ue),
  Ke = ({ l: e, a: t, b: n, alpha: r }) => {
    e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
    const i = (e + 16) / 116,
      a = t / 500 + i,
      o = i - n / 200,
      s = {
        mode: 'xyz65',
        x: Ge(a) * K.X,
        y: Ge(i) * K.Y,
        z: Ge(o) * K.Z,
      };
    return r !== void 0 && (s.alpha = r), s;
  },
  qe = (e) => R(Ke(e)),
  Je = (e) => (e > We ? Math.cbrt(e) : (Ue * e + 16) / 116),
  Ye = ({ x: e, y: t, z: n, alpha: r }) => {
    e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
    const i = Je(e / K.X),
      a = Je(t / K.Y),
      o = Je(n / K.Z),
      s = {
        mode: 'lab65',
        l: 116 * a - 16,
        a: 500 * (i - a),
        b: 200 * (a - o),
      };
    return r !== void 0 && (s.alpha = r), s;
  },
  Xe = (e) => {
    const t = Ye(I(e));
    return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
  },
  q = (26 / 180) * Math.PI,
  J = Math.cos(q),
  Ze = Math.sin(q),
  Qe = 100 / Math.log(139 / 100),
  $e = ({ l: e, c: t, h: n, alpha: r }) => {
    e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
    const i = {
        mode: 'lab65',
        l: (Math.exp((e * 1) / Qe) - 1) / 0.0039,
      },
      a = (Math.exp(0.0435 * t * 1 * 1) - 1) / 0.075,
      o = a * Math.cos((n / 180) * Math.PI - q),
      s = a * Math.sin((n / 180) * Math.PI - q);
    return (
      (i.a = o * J - (s / 0.83) * Ze),
      (i.b = o * Ze + (s / 0.83) * J),
      r !== void 0 && (i.alpha = r),
      i
    );
  },
  et = ({ l: e, a: t, b: n, alpha: r }) => {
    e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
    const i = t * J + n * Ze,
      a = 0.83 * (n * J - t * Ze),
      o = Math.sqrt(i * i + a * a),
      s = {
        mode: 'dlch',
        l: (Qe / 1) * Math.log(1 + 0.0039 * e),
        c: Math.log(1 + 0.075 * o) / 0.0435,
      };
    return (
      s.c && (s.h = z(((Math.atan2(a, i) + q) / Math.PI) * 180)),
      r !== void 0 && (s.alpha = r),
      s
    );
  },
  tt = (e) => $e(U(e, 'dlch')),
  nt = (e) => W(et(e), 'dlab'),
  rt = {
    mode: 'dlab',
    parse: ['--din99o-lab'],
    serialize: '--din99o-lab',
    toMode: {
      lab65: tt,
      rgb: (e) => qe(tt(e)),
    },
    fromMode: {
      lab65: nt,
      rgb: (e) => nt(Xe(e)),
    },
    channels: ['l', 'a', 'b', 'alpha'],
    ranges: {
      l: [0, 100],
      a: [-40.09, 45.501],
      b: [-40.469, 44.344],
    },
    interpolate: {
      l: M,
      a: M,
      b: M,
      alpha: {
        use: M,
        fixup: N,
      },
    },
  },
  it = {
    mode: 'dlch',
    parse: ['--din99o-lch'],
    serialize: '--din99o-lch',
    toMode: {
      lab65: $e,
      dlab: (e) => W(e, 'dlab'),
      rgb: (e) => qe($e(e)),
    },
    fromMode: {
      lab65: et,
      dlab: (e) => U(e, 'dlch'),
      rgb: (e) => et(Xe(e)),
    },
    channels: ['l', 'c', 'h', 'alpha'],
    ranges: {
      l: [0, 100],
      c: [0, 51.484],
      h: [0, 360],
    },
    interpolate: {
      l: M,
      c: M,
      h: {
        use: M,
        fixup: B,
      },
      alpha: {
        use: M,
        fixup: N,
      },
    },
    difference: { h: Ve },
    average: { h: H },
  };
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/hsi/convertHsiToRgb.js
function at({ h: e, s: t, i: n, alpha: r }) {
  (e = z(e === void 0 ? 0 : e)),
    t === void 0 && (t = 0),
    n === void 0 && (n = 0);
  let i = Math.abs(((e / 60) % 2) - 1),
    a;
  switch (Math.floor(e / 60)) {
    case 0:
      a = {
        r: n * (1 + t * (3 / (2 - i) - 1)),
        g: n * (1 + t * ((3 * (1 - i)) / (2 - i) - 1)),
        b: n * (1 - t),
      };
      break;
    case 1:
      a = {
        r: n * (1 + t * ((3 * (1 - i)) / (2 - i) - 1)),
        g: n * (1 + t * (3 / (2 - i) - 1)),
        b: n * (1 - t),
      };
      break;
    case 2:
      a = {
        r: n * (1 - t),
        g: n * (1 + t * (3 / (2 - i) - 1)),
        b: n * (1 + t * ((3 * (1 - i)) / (2 - i) - 1)),
      };
      break;
    case 3:
      a = {
        r: n * (1 - t),
        g: n * (1 + t * ((3 * (1 - i)) / (2 - i) - 1)),
        b: n * (1 + t * (3 / (2 - i) - 1)),
      };
      break;
    case 4:
      a = {
        r: n * (1 + t * ((3 * (1 - i)) / (2 - i) - 1)),
        g: n * (1 - t),
        b: n * (1 + t * (3 / (2 - i) - 1)),
      };
      break;
    case 5:
      a = {
        r: n * (1 + t * (3 / (2 - i) - 1)),
        g: n * (1 - t),
        b: n * (1 + t * ((3 * (1 - i)) / (2 - i) - 1)),
      };
      break;
    default:
      a = {
        r: n * (1 - t),
        g: n * (1 - t),
        b: n * (1 - t),
      };
  }
  return (a.mode = 'rgb'), r !== void 0 && (a.alpha = r), a;
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/hsi/convertRgbToHsi.js
function ot({ r: e, g: t, b: n, alpha: r }) {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  const i = Math.max(e, t, n),
    a = Math.min(e, t, n),
    o = {
      mode: 'hsi',
      s: e + t + n === 0 ? 0 : 1 - (3 * a) / (e + t + n),
      i: (e + t + n) / 3,
    };
  return (
    i - a !== 0 &&
      (o.h =
        (i === e
          ? (t - n) / (i - a) + (t < n) * 6
          : i === t
            ? (n - e) / (i - a) + 2
            : (e - t) / (i - a) + 4) * 60),
    r !== void 0 && (o.alpha = r),
    o
  );
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/hsi/definition.js
var st = {
  mode: 'hsi',
  toMode: { rgb: at },
  parse: ['--hsi'],
  serialize: '--hsi',
  fromMode: { rgb: ot },
  channels: ['h', 's', 'i', 'alpha'],
  ranges: { h: [0, 360] },
  gamut: 'rgb',
  interpolate: {
    h: {
      use: M,
      fixup: B,
    },
    s: M,
    i: M,
    alpha: {
      use: M,
      fixup: N,
    },
  },
  difference: { h: ze },
  average: { h: H },
};
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/hsl/convertHslToRgb.js
function ct({ h: e, s: t, l: n, alpha: r }) {
  (e = z(e === void 0 ? 0 : e)),
    t === void 0 && (t = 0),
    n === void 0 && (n = 0);
  let i = n + t * (n < 0.5 ? n : 1 - n),
    a = i - (i - n) * 2 * Math.abs(((e / 60) % 2) - 1),
    o;
  switch (Math.floor(e / 60)) {
    case 0:
      o = {
        r: i,
        g: a,
        b: 2 * n - i,
      };
      break;
    case 1:
      o = {
        r: a,
        g: i,
        b: 2 * n - i,
      };
      break;
    case 2:
      o = {
        r: 2 * n - i,
        g: i,
        b: a,
      };
      break;
    case 3:
      o = {
        r: 2 * n - i,
        g: a,
        b: i,
      };
      break;
    case 4:
      o = {
        r: a,
        g: 2 * n - i,
        b: i,
      };
      break;
    case 5:
      o = {
        r: i,
        g: 2 * n - i,
        b: a,
      };
      break;
    default:
      o = {
        r: 2 * n - i,
        g: 2 * n - i,
        b: 2 * n - i,
      };
  }
  return (o.mode = 'rgb'), r !== void 0 && (o.alpha = r), o;
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/hsl/convertRgbToHsl.js
function lt({ r: e, g: t, b: n, alpha: r }) {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  const i = Math.max(e, t, n),
    a = Math.min(e, t, n),
    o = {
      mode: 'hsl',
      s: i === a ? 0 : (i - a) / (1 - Math.abs(i + a - 1)),
      l: 0.5 * (i + a),
    };
  return (
    i - a !== 0 &&
      (o.h =
        (i === e
          ? (t - n) / (i - a) + (t < n) * 6
          : i === t
            ? (n - e) / (i - a) + 2
            : (e - t) / (i - a) + 4) * 60),
    r !== void 0 && (o.alpha = r),
    o
  );
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/util/hue.js
var ut = (e, t) => {
    switch (t) {
      case 'deg':
        return +e;
      case 'rad':
        return (e / Math.PI) * 180;
      case 'grad':
        return (e / 10) * 9;
      case 'turn':
        return e * 360;
    }
  },
  dt = RegExp(`^hsla?\\(\\s*${x}${S}${v}${S}${v}\\s*(?:,\\s*${y}\\s*)?\\)$`),
  ft = (e) => {
    const t = e.match(dt);
    if (!t) return;
    const n = { mode: 'hsl' };
    return (
      t[3] === void 0
        ? t[1] !== void 0 && t[2] !== void 0 && (n.h = ut(t[1], t[2]))
        : (n.h = +t[3]),
      t[4] !== void 0 && (n.s = Math.min(Math.max(0, t[4] / 100), 1)),
      t[5] !== void 0 && (n.l = Math.min(Math.max(0, t[5] / 100), 1)),
      t[6] === void 0
        ? t[7] !== void 0 && (n.alpha = Math.max(0, Math.min(1, +t[7])))
        : (n.alpha = Math.max(0, Math.min(1, t[6] / 100))),
      n
    );
  };
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/hsl/parseHsl.js
function pt(e, t) {
  if (!t || (t[0] !== 'hsl' && t[0] !== 'hsla')) return;
  const n = { mode: 'hsl' },
    [, r, i, a, o] = t;
  if (r.type !== k.None) {
    if (r.type === k.Percentage) return;
    n.h = r.value;
  }
  if (i.type !== k.None) {
    if (i.type === k.Hue) return;
    n.s = i.value / 100;
  }
  if (a.type !== k.None) {
    if (a.type === k.Hue) return;
    n.l = a.value / 100;
  }
  return (
    o.type !== k.None &&
      (n.alpha = Math.min(
        1,
        Math.max(0, o.type === k.Number ? o.value : o.value / 100)
      )),
    n
  );
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/hsl/definition.js
var mt = {
  mode: 'hsl',
  toMode: { rgb: ct },
  fromMode: { rgb: lt },
  channels: ['h', 's', 'l', 'alpha'],
  ranges: { h: [0, 360] },
  gamut: 'rgb',
  parse: [pt, ft],
  serialize: (e) =>
    `hsl(${e.h === void 0 ? 'none' : e.h} ${e.s === void 0 ? 'none' : e.s * 100 + '%'} ${e.l === void 0 ? 'none' : e.l * 100 + '%'}${e.alpha < 1 ? ` / ${e.alpha}` : ''})`,
  interpolate: {
    h: {
      use: M,
      fixup: B,
    },
    s: M,
    l: M,
    alpha: {
      use: M,
      fixup: N,
    },
  },
  difference: { h: ze },
  average: { h: H },
};
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/hsv/convertHsvToRgb.js
function ht({ h: e, s: t, v: n, alpha: r }) {
  (e = z(e === void 0 ? 0 : e)),
    t === void 0 && (t = 0),
    n === void 0 && (n = 0);
  let i = Math.abs(((e / 60) % 2) - 1),
    a;
  switch (Math.floor(e / 60)) {
    case 0:
      a = {
        r: n,
        g: n * (1 - t * i),
        b: n * (1 - t),
      };
      break;
    case 1:
      a = {
        r: n * (1 - t * i),
        g: n,
        b: n * (1 - t),
      };
      break;
    case 2:
      a = {
        r: n * (1 - t),
        g: n,
        b: n * (1 - t * i),
      };
      break;
    case 3:
      a = {
        r: n * (1 - t),
        g: n * (1 - t * i),
        b: n,
      };
      break;
    case 4:
      a = {
        r: n * (1 - t * i),
        g: n * (1 - t),
        b: n,
      };
      break;
    case 5:
      a = {
        r: n,
        g: n * (1 - t),
        b: n * (1 - t * i),
      };
      break;
    default:
      a = {
        r: n * (1 - t),
        g: n * (1 - t),
        b: n * (1 - t),
      };
  }
  return (a.mode = 'rgb'), r !== void 0 && (a.alpha = r), a;
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/hsv/convertRgbToHsv.js
function gt({ r: e, g: t, b: n, alpha: r }) {
  e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
  const i = Math.max(e, t, n),
    a = Math.min(e, t, n),
    o = {
      mode: 'hsv',
      s: i === 0 ? 0 : 1 - a / i,
      v: i,
    };
  return (
    i - a !== 0 &&
      (o.h =
        (i === e
          ? (t - n) / (i - a) + (t < n) * 6
          : i === t
            ? (n - e) / (i - a) + 2
            : (e - t) / (i - a) + 4) * 60),
    r !== void 0 && (o.alpha = r),
    o
  );
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/hsv/definition.js
var _t = {
  mode: 'hsv',
  toMode: { rgb: ht },
  parse: ['--hsv'],
  serialize: '--hsv',
  fromMode: { rgb: gt },
  channels: ['h', 's', 'v', 'alpha'],
  ranges: { h: [0, 360] },
  gamut: 'rgb',
  interpolate: {
    h: {
      use: M,
      fixup: B,
    },
    s: M,
    v: M,
    alpha: {
      use: M,
      fixup: N,
    },
  },
  difference: { h: ze },
  average: { h: H },
};
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/hwb/convertHwbToRgb.js
function vt({ h: e, w: t, b: n, alpha: r }) {
  if ((t === void 0 && (t = 0), n === void 0 && (n = 0), t + n > 1)) {
    const e = t + n;
    (t /= e), (n /= e);
  }
  return ht({
    h: e,
    s: n === 1 ? 1 : 1 - t / (1 - n),
    v: 1 - n,
    alpha: r,
  });
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/hwb/convertRgbToHwb.js
function yt(e) {
  const t = gt(e);
  if (t === void 0) return;
  const n = t.s === void 0 ? 0 : t.s,
    r = t.v === void 0 ? 0 : t.v,
    i = {
      mode: 'hwb',
      w: (1 - n) * r,
      b: 1 - r,
    };
  return (
    t.h !== void 0 && (i.h = t.h), t.alpha !== void 0 && (i.alpha = t.alpha), i
  );
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/hwb/parseHwb.js
function bt(e, t) {
  if (!t || t[0] !== 'hwb') return;
  const n = { mode: 'hwb' },
    [, r, i, a, o] = t;
  if (r.type !== k.None) {
    if (r.type === k.Percentage) return;
    n.h = r.value;
  }
  if (i.type !== k.None) {
    if (i.type === k.Hue) return;
    n.w = i.value / 100;
  }
  if (a.type !== k.None) {
    if (a.type === k.Hue) return;
    n.b = a.value / 100;
  }
  return (
    o.type !== k.None &&
      (n.alpha = Math.min(
        1,
        Math.max(0, o.type === k.Number ? o.value : o.value / 100)
      )),
    n
  );
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/hwb/definition.js
var xt = {
    mode: 'hwb',
    toMode: { rgb: vt },
    fromMode: { rgb: yt },
    channels: ['h', 'w', 'b', 'alpha'],
    ranges: { h: [0, 360] },
    gamut: 'rgb',
    parse: [bt],
    serialize: (e) =>
      `hwb(${e.h === void 0 ? 'none' : e.h} ${e.w === void 0 ? 'none' : e.w * 100 + '%'} ${e.b === void 0 ? 'none' : e.b * 100 + '%'}${e.alpha < 1 ? ` / ${e.alpha}` : ''})`,
    interpolate: {
      h: {
        use: M,
        fixup: B,
      },
      w: M,
      b: M,
      alpha: {
        use: M,
        fixup: N,
      },
    },
    difference: { h: Be },
    average: { h: H },
  },
  St = 0.1593017578125,
  Ct = 78.84375,
  wt = 0.8359375,
  Tt = 18.8515625,
  Et = 18.6875;
function Dt(e) {
  if (e < 0) return 0;
  const t = e ** (1 / Ct);
  return 1e4 * (Math.max(0, t - wt) / (Tt - Et * t)) ** (1 / St);
}
function Ot(e) {
  if (e < 0) return 0;
  const t = (e / 1e4) ** St;
  return ((wt + Tt * t) / (1 + Et * t)) ** +Ct;
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/itp/convertItpToXyz65.js
var kt = (e) => Math.max(e / 203, 0),
  At = ({ i: e, t, p: n, alpha: r }) => {
    e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
    const i = Dt(e + 0.008609037037932761 * t + 0.11102962500302593 * n),
      a = Dt(e - 0.00860903703793275 * t - 0.11102962500302599 * n),
      o = Dt(e + 0.5600313357106791 * t - 0.32062717498731885 * n),
      s = {
        mode: 'xyz65',
        x: kt(
          2.070152218389422 * i -
            1.3263473389671556 * a +
            0.2066510476294051 * o
        ),
        y: kt(
          0.3647385209748074 * i +
            0.680566024947227 * a -
            0.0453045459220346 * o
        ),
        z: kt(
          -0.049747207535812 * i -
            0.0492609666966138 * a +
            1.1880659249923042 * o
        ),
      };
    return r !== void 0 && (s.alpha = r), s;
  },
  jt = (e = 0) => Math.max(e * 203, 0),
  Mt = ({ x: e, y: t, z: n, alpha: r }) => {
    const i = jt(e),
      a = jt(t),
      o = jt(n),
      s = Ot(
        0.3592832590121217 * i + 0.6976051147779502 * a - 0.0358915932320289 * o
      ),
      c = Ot(
        -0.1920808463704995 * i +
          1.1004767970374323 * a +
          0.0753748658519118 * o
      ),
      l = Ot(
        0.0070797844607477 * i + 0.0748396662186366 * a + 0.8433265453898765 * o
      ),
      u = {
        mode: 'itp',
        i: 0.5 * s + 0.5 * c,
        t: 1.61376953125 * s - 3.323486328125 * c + 1.709716796875 * l,
        p: 4.378173828125 * s - 4.24560546875 * c - 0.132568359375 * l,
      };
    return r !== void 0 && (u.alpha = r), u;
  },
  Nt = {
    mode: 'itp',
    channels: ['i', 't', 'p', 'alpha'],
    parse: ['--ictcp'],
    serialize: '--ictcp',
    toMode: {
      xyz65: At,
      rgb: (e) => R(At(e)),
    },
    fromMode: {
      xyz65: Mt,
      rgb: (e) => Mt(I(e)),
    },
    ranges: {
      i: [0, 0.581],
      t: [-0.369, 0.272],
      p: [-0.164, 0.331],
    },
    interpolate: {
      i: M,
      t: M,
      p: M,
      alpha: {
        use: M,
        fixup: N,
      },
    },
  },
  Pt = 134.03437499999998,
  Ft = 16295499532821565e-27,
  It = (e) => {
    if (e < 0) return 0;
    const t = (e / 1e4) ** St;
    return ((wt + Tt * t) / (1 + Et * t)) ** +Pt;
  },
  Lt = (e = 0) => Math.max(e * 203, 0),
  Rt = ({ x: e, y: t, z: n, alpha: r }) => {
    (e = Lt(e)), (t = Lt(t)), (n = Lt(n));
    const i = 1.15 * e - 0.15 * n,
      a = 0.66 * t + 0.34 * e,
      o = It(0.41478972 * i + 0.579999 * a + 0.014648 * n),
      s = It(-0.20151 * i + 1.120649 * a + 0.0531008 * n),
      c = It(-0.0166008 * i + 0.2648 * a + 0.6684799 * n),
      l = (o + s) / 2,
      u = {
        mode: 'jab',
        j: (0.44 * l) / (1 - 0.56 * l) - Ft,
        a: 3.524 * o - 4.066708 * s + 0.542708 * c,
        b: 0.199076 * o + 1.096799 * s - 1.295875 * c,
      };
    return r !== void 0 && (u.alpha = r), u;
  },
  zt = 134.03437499999998,
  Bt = 16295499532821565e-27,
  Vt = (e) => {
    if (e < 0) return 0;
    const t = e ** (1 / zt);
    return 1e4 * ((wt - t) / (Et * t - Tt)) ** (1 / St);
  },
  Ht = (e) => e / 203,
  Ut = ({ j: e, a: t, b: n, alpha: r }) => {
    e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
    const i = (e + Bt) / (0.44 + 0.56 * (e + Bt)),
      a = Vt(i + 0.13860504 * t + 0.058047316 * n),
      o = Vt(i - 0.13860504 * t - 0.058047316 * n),
      s = Vt(i - 0.096019242 * t - 0.8118919 * n),
      c = {
        mode: 'xyz65',
        x: Ht(
          1.661373024652174 * a -
            0.914523081304348 * o +
            0.23136208173913045 * s
        ),
        y: Ht(
          -0.3250758611844533 * a +
            1.571847026732543 * o -
            0.21825383453227928 * s
        ),
        z: Ht(-0.090982811 * a - 0.31272829 * o + 1.5227666 * s),
      };
    return r !== void 0 && (c.alpha = r), c;
  },
  Wt = (e) => {
    const t = Rt(I(e));
    return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
  },
  Gt = (e) => R(Ut(e)),
  Kt = {
    mode: 'jab',
    channels: ['j', 'a', 'b', 'alpha'],
    parse: ['--jzazbz'],
    serialize: '--jzazbz',
    fromMode: {
      rgb: Wt,
      xyz65: Rt,
    },
    toMode: {
      rgb: Gt,
      xyz65: Ut,
    },
    ranges: {
      j: [0, 0.222],
      a: [-0.109, 0.129],
      b: [-0.185, 0.134],
    },
    interpolate: {
      j: M,
      a: M,
      b: M,
      alpha: {
        use: M,
        fixup: N,
      },
    },
  },
  qt = ({ j: e, a: t, b: n, alpha: r }) => {
    t === void 0 && (t = 0), n === void 0 && (n = 0);
    const i = Math.sqrt(t * t + n * n),
      a = {
        mode: 'jch',
        j: e,
        c: i,
      };
    return (
      i && (a.h = z((Math.atan2(n, t) * 180) / Math.PI)),
      r !== void 0 && (a.alpha = r),
      a
    );
  },
  Jt = ({ j: e, c: t, h: n, alpha: r }) => {
    n === void 0 && (n = 0);
    const i = {
      mode: 'jab',
      j: e,
      a: t ? t * Math.cos((n / 180) * Math.PI) : 0,
      b: t ? t * Math.sin((n / 180) * Math.PI) : 0,
    };
    return r !== void 0 && (i.alpha = r), i;
  },
  Yt = {
    mode: 'jch',
    parse: ['--jzczhz'],
    serialize: '--jzczhz',
    toMode: {
      jab: Jt,
      rgb: (e) => Gt(Jt(e)),
    },
    fromMode: {
      rgb: (e) => qt(Wt(e)),
      jab: qt,
    },
    channels: ['j', 'c', 'h', 'alpha'],
    ranges: {
      j: [0, 0.221],
      c: [0, 0.19],
      h: [0, 360],
    },
    interpolate: {
      h: {
        use: M,
        fixup: B,
      },
      c: M,
      j: M,
      alpha: {
        use: M,
        fixup: N,
      },
    },
    difference: { h: Ve },
    average: { h: H },
  },
  Xt = 29 ** 3 / 3 ** 3,
  Zt = 6 ** 3 / 29 ** 3,
  Qt = (e) => (e ** 3 > Zt ? e ** 3 : (116 * e - 16) / Xt),
  $t = ({ l: e, a: t, b: n, alpha: r }) => {
    e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
    const i = (e + 16) / 116,
      a = t / 500 + i,
      o = i - n / 200,
      s = {
        mode: 'xyz50',
        x: Qt(a) * G.X,
        y: Qt(i) * G.Y,
        z: Qt(o) * G.Z,
      };
    return r !== void 0 && (s.alpha = r), s;
  },
  Y = ({ x: e, y: t, z: n, alpha: r }) => {
    e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
    const i = L({
      r:
        e * 3.1341359569958707 -
        t * 1.6173863321612538 -
        0.4906619460083532 * n,
      g:
        e * -0.978795502912089 +
        t * 1.916254567259524 +
        0.03344273116131949 * n,
      b:
        e * 0.07195537988411677 -
        t * 0.2289768264158322 +
        1.405386058324125 * n,
    });
    return r !== void 0 && (i.alpha = r), i;
  },
  en = (e) => Y($t(e)),
  X = (e) => {
    const { r: t, g: n, b: r, alpha: i } = F(e),
      a = {
        mode: 'xyz50',
        x:
          0.436065742824811 * t +
          0.3851514688337912 * n +
          0.14307845442264197 * r,
        y:
          0.22249319175623702 * t +
          0.7168870538238823 * n +
          0.06061979053616537 * r,
        z:
          0.013923904500943465 * t +
          0.09708128566574634 * n +
          0.7140993584005155 * r,
      };
    return i !== void 0 && (a.alpha = i), a;
  },
  tn = (e) => (e > Zt ? Math.cbrt(e) : (Xt * e + 16) / 116),
  nn = ({ x: e, y: t, z: n, alpha: r }) => {
    e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
    const i = tn(e / G.X),
      a = tn(t / G.Y),
      o = tn(n / G.Z),
      s = {
        mode: 'lab',
        l: 116 * a - 16,
        a: 500 * (i - a),
        b: 200 * (a - o),
      };
    return r !== void 0 && (s.alpha = r), s;
  },
  rn = (e) => {
    const t = nn(X(e));
    return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
  };
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/lab/parseLab.js
function an(e, t) {
  if (!t || t[0] !== 'lab') return;
  const n = { mode: 'lab' },
    [, r, i, a, o] = t;
  if (r.type !== k.Hue && i.type !== k.Hue && a.type !== k.Hue)
    return (
      r.type !== k.None && (n.l = Math.min(Math.max(0, r.value), 100)),
      i.type !== k.None &&
        (n.a = i.type === k.Number ? i.value : (i.value * 125) / 100),
      a.type !== k.None &&
        (n.b = a.type === k.Number ? a.value : (a.value * 125) / 100),
      o.type !== k.None &&
        (n.alpha = Math.min(
          1,
          Math.max(0, o.type === k.Number ? o.value : o.value / 100)
        )),
      n
    );
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/lab/definition.js
var on = {
    mode: 'lab',
    toMode: {
      xyz50: $t,
      rgb: en,
    },
    fromMode: {
      xyz50: nn,
      rgb: rn,
    },
    channels: ['l', 'a', 'b', 'alpha'],
    ranges: {
      l: [0, 100],
      a: [-125, 125],
      b: [-125, 125],
    },
    parse: [an],
    serialize: (e) =>
      `lab(${e.l === void 0 ? 'none' : e.l} ${e.a === void 0 ? 'none' : e.a} ${e.b === void 0 ? 'none' : e.b}${e.alpha < 1 ? ` / ${e.alpha}` : ''})`,
    interpolate: {
      l: M,
      a: M,
      b: M,
      alpha: {
        use: M,
        fixup: N,
      },
    },
  },
  sn = {
    ...on,
    mode: 'lab65',
    parse: ['--lab-d65'],
    serialize: '--lab-d65',
    toMode: {
      xyz65: Ke,
      rgb: qe,
    },
    fromMode: {
      xyz65: Ye,
      rgb: Xe,
    },
    ranges: {
      l: [0, 100],
      a: [-125, 125],
      b: [-125, 125],
    },
  };
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/lch/parseLch.js
function cn(e, t) {
  if (!t || t[0] !== 'lch') return;
  const n = { mode: 'lch' },
    [, r, i, a, o] = t;
  if (r.type !== k.None) {
    if (r.type === k.Hue) return;
    n.l = Math.min(Math.max(0, r.value), 100);
  }
  if (
    (i.type !== k.None &&
      (n.c = Math.max(
        0,
        i.type === k.Number ? i.value : (i.value * 150) / 100
      )),
    a.type !== k.None)
  ) {
    if (a.type === k.Percentage) return;
    n.h = a.value;
  }
  return (
    o.type !== k.None &&
      (n.alpha = Math.min(
        1,
        Math.max(0, o.type === k.Number ? o.value : o.value / 100)
      )),
    n
  );
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/lch/definition.js
var ln = {
    mode: 'lch',
    toMode: {
      lab: W,
      rgb: (e) => en(W(e)),
    },
    fromMode: {
      rgb: (e) => U(rn(e)),
      lab: U,
    },
    channels: ['l', 'c', 'h', 'alpha'],
    ranges: {
      l: [0, 100],
      c: [0, 150],
      h: [0, 360],
    },
    parse: [cn],
    serialize: (e) =>
      `lch(${e.l === void 0 ? 'none' : e.l} ${e.c === void 0 ? 'none' : e.c} ${e.h === void 0 ? 'none' : e.h}${e.alpha < 1 ? ` / ${e.alpha}` : ''})`,
    interpolate: {
      h: {
        use: M,
        fixup: B,
      },
      c: M,
      l: M,
      alpha: {
        use: M,
        fixup: N,
      },
    },
    difference: { h: Ve },
    average: { h: H },
  },
  un = {
    ...ln,
    mode: 'lch65',
    parse: ['--lch-d65'],
    serialize: '--lch-d65',
    toMode: {
      lab65: (e) => W(e, 'lab65'),
      rgb: (e) => qe(W(e, 'lab65')),
    },
    fromMode: {
      rgb: (e) => U(Xe(e), 'lch65'),
      lab65: (e) => U(e, 'lch65'),
    },
    ranges: {
      l: [0, 100],
      c: [0, 150],
      h: [0, 360],
    },
  },
  dn = ({ l: e, u: t, v: n, alpha: r }) => {
    t === void 0 && (t = 0), n === void 0 && (n = 0);
    const i = Math.sqrt(t * t + n * n),
      a = {
        mode: 'lchuv',
        l: e,
        c: i,
      };
    return (
      i && (a.h = z((Math.atan2(n, t) * 180) / Math.PI)),
      r !== void 0 && (a.alpha = r),
      a
    );
  },
  fn = ({ l: e, c: t, h: n, alpha: r }) => {
    n === void 0 && (n = 0);
    const i = {
      mode: 'luv',
      l: e,
      u: t ? t * Math.cos((n / 180) * Math.PI) : 0,
      v: t ? t * Math.sin((n / 180) * Math.PI) : 0,
    };
    return r !== void 0 && (i.alpha = r), i;
  },
  pn = (e, t, n) => (4 * e) / (e + 15 * t + 3 * n),
  mn = (e, t, n) => (9 * t) / (e + 15 * t + 3 * n),
  hn = pn(G.X, G.Y, G.Z),
  gn = mn(G.X, G.Y, G.Z),
  _n = (e) => (e <= Zt ? Xt * e : 116 * Math.cbrt(e) - 16),
  vn = ({ x: e, y: t, z: n, alpha: r }) => {
    e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
    let i = _n(t / G.Y),
      a = pn(e, t, n),
      o = mn(e, t, n);
    !isFinite(a) || !isFinite(o)
      ? (i = a = o = 0)
      : ((a = 13 * i * (a - hn)), (o = 13 * i * (o - gn)));
    const s = {
      mode: 'luv',
      l: i,
      u: a,
      v: o,
    };
    return r !== void 0 && (s.alpha = r), s;
  },
  yn = (e, t, n) => (4 * e) / (e + 15 * t + 3 * n),
  bn = (e, t, n) => (9 * t) / (e + 15 * t + 3 * n),
  xn = yn(G.X, G.Y, G.Z),
  Sn = bn(G.X, G.Y, G.Z),
  Cn = ({ l: e, u: t, v: n, alpha: r }) => {
    if ((e === void 0 && (e = 0), e === 0))
      return {
        mode: 'xyz50',
        x: 0,
        y: 0,
        z: 0,
      };
    t === void 0 && (t = 0), n === void 0 && (n = 0);
    const i = t / (13 * e) + xn,
      a = n / (13 * e) + Sn,
      o = G.Y * (e <= 8 ? e / Xt : ((e + 16) / 116) ** 3),
      s = {
        mode: 'xyz50',
        x: (9 * i * o) / (4 * a),
        y: o,
        z: (o * (12 - 3 * i - 20 * a)) / (4 * a),
      };
    return r !== void 0 && (s.alpha = r), s;
  },
  wn = {
    mode: 'lchuv',
    toMode: {
      luv: fn,
      rgb: (e) => Y(Cn(fn(e))),
    },
    fromMode: {
      rgb: (e) => dn(vn(X(e))),
      luv: dn,
    },
    channels: ['l', 'c', 'h', 'alpha'],
    parse: ['--lchuv'],
    serialize: '--lchuv',
    ranges: {
      l: [0, 100],
      c: [0, 176.956],
      h: [0, 360],
    },
    interpolate: {
      h: {
        use: M,
        fixup: B,
      },
      c: M,
      l: M,
      alpha: {
        use: M,
        fixup: N,
      },
    },
    difference: { h: Ve },
    average: { h: H },
  },
  Tn = {
    ...P,
    mode: 'lrgb',
    toMode: { rgb: L },
    fromMode: { rgb: F },
    parse: ['srgb-linear'],
    serialize: 'srgb-linear',
  },
  En = {
    mode: 'luv',
    toMode: {
      xyz50: Cn,
      rgb: (e) => Y(Cn(e)),
    },
    fromMode: {
      xyz50: vn,
      rgb: (e) => vn(X(e)),
    },
    channels: ['l', 'u', 'v', 'alpha'],
    parse: ['--luv'],
    serialize: '--luv',
    ranges: {
      l: [0, 100],
      u: [-84.936, 175.042],
      v: [-125.882, 87.243],
    },
    interpolate: {
      l: M,
      u: M,
      v: M,
      alpha: {
        use: M,
        fixup: N,
      },
    },
  },
  Dn = ({ r: e, g: t, b: n, alpha: r }) => {
    e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
    const i = Math.cbrt(
        0.412221469470763 * e + 0.5363325372617348 * t + 0.0514459932675022 * n
      ),
      a = Math.cbrt(
        0.2119034958178252 * e + 0.6806995506452344 * t + 0.1073969535369406 * n
      ),
      o = Math.cbrt(
        0.0883024591900564 * e + 0.2817188391361215 * t + 0.6299787016738222 * n
      ),
      s = {
        mode: 'oklab',
        l:
          0.210454268309314 * i +
          0.7936177747023054 * a -
          0.0040720430116193 * o,
        a:
          1.9779985324311684 * i - 2.42859224204858 * a + 0.450593709617411 * o,
        b:
          0.0259040424655478 * i +
          0.7827717124575296 * a -
          0.8086757549230774 * o,
      };
    return r !== void 0 && (s.alpha = r), s;
  },
  On = (e) => {
    const t = Dn(F(e));
    return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
  },
  Z = ({ l: e, a: t, b: n, alpha: r }) => {
    e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
    const i = (e + 0.3963377773761749 * t + 0.2158037573099136 * n) ** 3,
      a = (e - 0.1055613458156586 * t - 0.0638541728258133 * n) ** 3,
      o = (e - 0.0894841775298119 * t - 1.2914855480194092 * n) ** 3,
      s = {
        mode: 'lrgb',
        r:
          4.076741636075957 * i -
          3.3077115392580616 * a +
          0.2309699031821044 * o,
        g:
          -1.2684379732850317 * i +
          2.6097573492876887 * a -
          0.3413193760026573 * o,
        b:
          -0.0041960761386756 * i -
          0.7034186179359362 * a +
          1.7076146940746117 * o,
      };
    return r !== void 0 && (s.alpha = r), s;
  },
  kn = (e) => L(Z(e));
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/okhsl/helpers.js
function An(e) {
  const t = 0.206,
    n = 1.206 / 1.03;
  return (
    0.5 * (n * e - t + Math.sqrt((n * e - t) * (n * e - t) + 0.12 * n * e))
  );
}
function Q(e) {
  return (e * e + 0.206 * e) / ((1.206 / 1.03) * (e + 0.03));
}
function jn(e, t) {
  let n, r, i, a, o, s, c, l;
  -1.88170328 * e - 0.80936493 * t > 1
    ? ((n = 1.19086277),
      (r = 1.76576728),
      (i = 0.59662641),
      (a = 0.75515197),
      (o = 0.56771245),
      (s = 4.0767416621),
      (c = -3.3077115913),
      (l = 0.2309699292))
    : 1.81444104 * e - 1.19445276 * t > 1
      ? ((n = 0.73956515),
        (r = -0.45954404),
        (i = 0.08285427),
        (a = 0.1254107),
        (o = 0.14503204),
        (s = -1.2684380046),
        (c = 2.6097574011),
        (l = -0.3413193965))
      : ((n = 1.35733652),
        (r = -0.00915799),
        (i = -1.1513021),
        (a = -0.50559606),
        (o = 0.00692167),
        (s = -0.0041960863),
        (c = -0.7034186147),
        (l = 1.707614701));
  let u = n + r * e + i * t + a * e * e + o * e * t,
    d = 0.3963377774 * e + 0.2158037573 * t,
    f = -0.1055613458 * e - 0.0638541728 * t,
    p = -0.0894841775 * e - 1.291485548 * t;
  {
    const e = 1 + u * d,
      t = 1 + u * f,
      n = 1 + u * p,
      r = e * e * e,
      i = t * t * t,
      a = n * n * n,
      o = 3 * d * e * e,
      m = 3 * f * t * t,
      h = 3 * p * n * n,
      g = 6 * d * d * e,
      _ = 6 * f * f * t,
      v = 6 * p * p * n,
      y = s * r + c * i + l * a,
      b = s * o + c * m + l * h,
      x = s * g + c * _ + l * v;
    u -= (y * b) / (b * b - 0.5 * y * x);
  }
  return u;
}
function Mn(e, t) {
  const n = jn(e, t),
    r = Z({
      l: 1,
      a: n * e,
      b: n * t,
    }),
    i = Math.cbrt(1 / Math.max(r.r, r.g, r.b));
  return [i, i * n];
}
function Nn(e, t, n, r, i, a = null) {
  a ||= Mn(e, t);
  let o;
  if ((n - i) * a[1] - (a[0] - i) * r <= 0)
    o = (a[1] * i) / (r * a[0] + a[1] * (i - n));
  else {
    o = (a[1] * (i - 1)) / (r * (a[0] - 1) + a[1] * (i - n));
    {
      const a = n - i,
        s = r,
        c = 0.3963377774 * e + 0.2158037573 * t,
        l = -0.1055613458 * e - 0.0638541728 * t,
        u = -0.0894841775 * e - 1.291485548 * t,
        d = a + s * c,
        f = a + s * l,
        p = a + s * u;
      {
        let e = i * (1 - o) + o * n,
          t = o * r,
          a = e + t * c,
          s = e + t * l,
          m = e + t * u,
          h = a * a * a,
          g = s * s * s,
          _ = m * m * m,
          v = 3 * d * a * a,
          y = 3 * f * s * s,
          b = 3 * p * m * m,
          x = 6 * d * d * a,
          S = 6 * f * f * s,
          ee = 6 * p * p * m,
          te = 4.0767416621 * h - 3.3077115913 * g + 0.2309699292 * _ - 1,
          ne = 4.0767416621 * v - 3.3077115913 * y + 0.2309699292 * b,
          re = 4.0767416621 * x - 3.3077115913 * S + 0.2309699292 * ee,
          C = ne / (ne * ne - 0.5 * te * re),
          w = -te * C,
          ie = -1.2684380046 * h + 2.6097574011 * g - 0.3413193965 * _ - 1,
          T = -1.2684380046 * v + 2.6097574011 * y - 0.3413193965 * b,
          ae = -1.2684380046 * x + 2.6097574011 * S - 0.3413193965 * ee,
          oe = T / (T * T - 0.5 * ie * ae),
          E = -ie * oe,
          se = -0.0041960863 * h - 0.7034186147 * g + 1.707614701 * _ - 1,
          D = -0.0041960863 * v - 0.7034186147 * y + 1.707614701 * b,
          O = -0.0041960863 * x - 0.7034186147 * S + 1.707614701 * ee,
          ce = D / (D * D - 0.5 * se * O),
          k = -se * ce;
        (w = C >= 0 ? w : 1e6),
          (E = oe >= 0 ? E : 1e6),
          (k = ce >= 0 ? k : 1e6),
          (o += Math.min(w, Math.min(E, k)));
      }
    }
  }
  return o;
}
function Pn(e, t, n = null) {
  n ||= Mn(e, t);
  const r = n[0],
    i = n[1];
  return [i / r, i / (1 - r)];
}
function Fn(e, t, n) {
  let r = Mn(t, n),
    i = Nn(t, n, e, 1, e, r),
    a = Pn(t, n, r),
    o =
      0.11516993 +
      1 /
        (7.4477897 +
          4.1590124 * n +
          t *
            (-2.19557347 +
              1.75198401 * n +
              t *
                (-2.13704948 -
                  10.02301043 * n +
                  t * (-4.24894561 + 5.38770819 * n + 4.69891013 * t)))),
    s =
      0.11239642 +
      1 /
        (1.6132032 -
          0.68124379 * n +
          t *
            (0.40370612 +
              0.90148123 * n +
              t *
                (-0.27087943 +
                  0.6122399 * n +
                  t * (0.00299215 - 0.45399568 * n - 0.14661872 * t)))),
    c = i / Math.min(e * a[0], (1 - e) * a[1]),
    l = e * o,
    u = (1 - e) * s,
    d =
      0.9 *
      c *
      Math.sqrt(Math.sqrt(1 / (1 / (l * l * l * l) + 1 / (u * u * u * u))));
  return (
    (l = e * 0.4),
    (u = (1 - e) * 0.8),
    [Math.sqrt(1 / (1 / (l * l) + 1 / (u * u))), d, i]
  );
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/okhsl/convertOklabToOkhsl.js
function In(e) {
  const t = e.l === void 0 ? 0 : e.l,
    n = e.a === void 0 ? 0 : e.a,
    r = e.b === void 0 ? 0 : e.b,
    i = {
      mode: 'okhsl',
      l: An(t),
    };
  e.alpha !== void 0 && (i.alpha = e.alpha);
  const a = Math.sqrt(n * n + r * r);
  if (!a) return (i.s = 0), i;
  let [o, s, c] = Fn(t, n / a, r / a),
    l;
  if (a < s) {
    const e = 0.8 * o,
      t = 1 - e / s;
    l = ((a - 0) / (e + t * (a - 0))) * 0.8;
  } else {
    const e = s,
      t = (0.2 * s * s * 1.25 * 1.25) / o,
      n = 1 - t / (c - s);
    l = 0.8 + 0.2 * ((a - e) / (t + n * (a - e)));
  }
  return l && ((i.s = l), (i.h = z((Math.atan2(r, n) * 180) / Math.PI))), i;
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/okhsl/convertOkhslToOklab.js
function Ln(e) {
  const t = e.h === void 0 ? 0 : e.h,
    n = e.s === void 0 ? 0 : e.s,
    r = e.l === void 0 ? 0 : e.l,
    i = {
      mode: 'oklab',
      l: Q(r),
    };
  if ((e.alpha !== void 0 && (i.alpha = e.alpha), !n || r === 1))
    return (i.a = i.b = 0), i;
  let a = Math.cos((t / 180) * Math.PI),
    o = Math.sin((t / 180) * Math.PI),
    [s, c, l] = Fn(i.l, a, o),
    u,
    d,
    f,
    p;
  n < 0.8
    ? ((u = 1.25 * n), (d = 0), (f = 0.8 * s), (p = 1 - f / c))
    : ((u = 5 * (n - 0.8)),
      (d = c),
      (f = (0.2 * c * c * 1.25 * 1.25) / s),
      (p = 1 - f / (l - c)));
  const m = d + (u * f) / (1 - p * u);
  return (i.a = m * a), (i.b = m * o), i;
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/okhsl/modeOkhsl.js
var Rn = {
  ...mt,
  mode: 'okhsl',
  channels: ['h', 's', 'l', 'alpha'],
  parse: ['--okhsl'],
  serialize: '--okhsl',
  fromMode: {
    oklab: In,
    rgb: (e) => In(On(e)),
  },
  toMode: {
    oklab: Ln,
    rgb: (e) => kn(Ln(e)),
  },
};
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/okhsv/convertOklabToOkhsv.js
function zn(e) {
  let t = e.l === void 0 ? 0 : e.l,
    n = e.a === void 0 ? 0 : e.a,
    r = e.b === void 0 ? 0 : e.b,
    i = Math.sqrt(n * n + r * r),
    a = i ? n / i : 1,
    o = i ? r / i : 1,
    [s, c] = Pn(a, o),
    l = 0.5,
    u = 1 - l / s,
    d = c / (i + t * c),
    f = d * t,
    p = d * i,
    m = Q(f),
    h = (p * m) / f,
    g = Z({
      l: m,
      a: a * h,
      b: o * h,
    }),
    _ = Math.cbrt(1 / Math.max(g.r, g.g, g.b, 0));
  (t /= _), (i = ((i / _) * An(t)) / t), (t = An(t));
  const v = {
    mode: 'okhsv',
    s: i ? ((l + c) * p) / (c * l + c * u * p) : 0,
    v: t ? t / f : 0,
  };
  return (
    v.s && (v.h = z((Math.atan2(r, n) * 180) / Math.PI)),
    e.alpha !== void 0 && (v.alpha = e.alpha),
    v
  );
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/okhsv/convertOkhsvToOklab.js
function Bn(e) {
  const t = { mode: 'oklab' };
  e.alpha !== void 0 && (t.alpha = e.alpha);
  const n = e.h === void 0 ? 0 : e.h,
    r = e.s === void 0 ? 0 : e.s,
    i = e.v === void 0 ? 0 : e.v,
    a = Math.cos((n / 180) * Math.PI),
    o = Math.sin((n / 180) * Math.PI),
    [s, c] = Pn(a, o),
    l = 0.5,
    u = 1 - l / s,
    d = 1 - (r * l) / (l + c - c * u * r),
    f = (r * c * l) / (l + c - c * u * r),
    p = Q(d),
    m = (f * p) / d,
    h = Z({
      l: p,
      a: a * m,
      b: o * m,
    }),
    g = Math.cbrt(1 / Math.max(h.r, h.g, h.b, 0)),
    _ = Q(i * d),
    v = (f * _) / d;
  return (t.l = _ * g), (t.a = v * a * g), (t.b = v * o * g), t;
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/okhsv/modeOkhsv.js
var Vn = {
  ..._t,
  mode: 'okhsv',
  channels: ['h', 's', 'v', 'alpha'],
  parse: ['--okhsv'],
  serialize: '--okhsv',
  fromMode: {
    oklab: zn,
    rgb: (e) => zn(On(e)),
  },
  toMode: {
    oklab: Bn,
    rgb: (e) => kn(Bn(e)),
  },
};
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/oklab/parseOklab.js
function Hn(e, t) {
  if (!t || t[0] !== 'oklab') return;
  const n = { mode: 'oklab' },
    [, r, i, a, o] = t;
  if (r.type !== k.Hue && i.type !== k.Hue && a.type !== k.Hue)
    return (
      r.type !== k.None &&
        (n.l = Math.min(
          Math.max(0, r.type === k.Number ? r.value : r.value / 100),
          1
        )),
      i.type !== k.None &&
        (n.a = i.type === k.Number ? i.value : (i.value * 0.4) / 100),
      a.type !== k.None &&
        (n.b = a.type === k.Number ? a.value : (a.value * 0.4) / 100),
      o.type !== k.None &&
        (n.alpha = Math.min(
          1,
          Math.max(0, o.type === k.Number ? o.value : o.value / 100)
        )),
      n
    );
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/oklab/definition.js
var Un = {
  ...on,
  mode: 'oklab',
  toMode: {
    lrgb: Z,
    rgb: kn,
  },
  fromMode: {
    lrgb: Dn,
    rgb: On,
  },
  ranges: {
    l: [0, 1],
    a: [-0.4, 0.4],
    b: [-0.4, 0.4],
  },
  parse: [Hn],
  serialize: (e) =>
    `oklab(${e.l === void 0 ? 'none' : e.l} ${e.a === void 0 ? 'none' : e.a} ${e.b === void 0 ? 'none' : e.b}${e.alpha < 1 ? ` / ${e.alpha}` : ''})`,
};
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/oklch/parseOklch.js
function Wn(e, t) {
  if (!t || t[0] !== 'oklch') return;
  const n = { mode: 'oklch' },
    [, r, i, a, o] = t;
  if (r.type !== k.None) {
    if (r.type === k.Hue) return;
    n.l = Math.min(
      Math.max(0, r.type === k.Number ? r.value : r.value / 100),
      1
    );
  }
  if (
    (i.type !== k.None &&
      (n.c = Math.max(
        0,
        i.type === k.Number ? i.value : (i.value * 0.4) / 100
      )),
    a.type !== k.None)
  ) {
    if (a.type === k.Percentage) return;
    n.h = a.value;
  }
  return (
    o.type !== k.None &&
      (n.alpha = Math.min(
        1,
        Math.max(0, o.type === k.Number ? o.value : o.value / 100)
      )),
    n
  );
}
//#endregion
//#region node_modules/.pnpm/culori@4.0.2/node_modules/culori/src/oklch/definition.js
var Gn = {
    ...ln,
    mode: 'oklch',
    toMode: {
      oklab: (e) => W(e, 'oklab'),
      rgb: (e) => kn(W(e, 'oklab')),
    },
    fromMode: {
      rgb: (e) => U(On(e), 'oklch'),
      oklab: (e) => U(e, 'oklch'),
    },
    parse: [Wn],
    serialize: (e) =>
      `oklch(${e.l === void 0 ? 'none' : e.l} ${e.c === void 0 ? 'none' : e.c} ${e.h === void 0 ? 'none' : e.h}${e.alpha < 1 ? ` / ${e.alpha}` : ''})`,
    ranges: {
      l: [0, 1],
      c: [0, 0.4],
      h: [0, 360],
    },
  },
  Kn = (e) => {
    const { r: t, g: n, b: r, alpha: i } = F(e),
      a = {
        mode: 'xyz65',
        x:
          0.486570948648216 * t +
          0.265667693169093 * n +
          0.1982172852343625 * r,
        y:
          0.2289745640697487 * t +
          0.6917385218365062 * n +
          0.079286914093745 * r,
        z: 0 * t + 0.0451133818589026 * n + 1.043944368900976 * r,
      };
    return i !== void 0 && (a.alpha = i), a;
  },
  qn = ({ x: e, y: t, z: n, alpha: r }) => {
    e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
    const i = L(
      {
        r:
          e * 2.4934969119414263 -
          t * 0.9313836179191242 -
          0.402710784450717 * n,
        g:
          e * -0.8294889695615749 +
          t * 1.7626640603183465 +
          0.0236246858419436 * n,
        b:
          e * 0.0358458302437845 -
          t * 0.0761723892680418 +
          0.9568845240076871 * n,
      },
      'p3'
    );
    return r !== void 0 && (i.alpha = r), i;
  },
  Jn = {
    ...P,
    mode: 'p3',
    parse: ['display-p3'],
    serialize: 'display-p3',
    fromMode: {
      rgb: (e) => qn(I(e)),
      xyz65: qn,
    },
    toMode: {
      rgb: (e) => R(Kn(e)),
      xyz65: Kn,
    },
  },
  Yn = (e) => {
    const t = Math.abs(e);
    return t >= 1 / 512 ? Math.sign(e) * t ** (1 / 1.8) : 16 * e;
  },
  Xn = ({ x: e, y: t, z: n, alpha: r }) => {
    e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
    const i = {
      mode: 'prophoto',
      r: Yn(
        e * 1.3457868816471585 - t * 0.2555720873797946 - 0.0511018649755453 * n
      ),
      g: Yn(
        e * -0.5446307051249019 +
          t * 1.5082477428451466 +
          0.0205274474364214 * n
      ),
      b: Yn(e * 0 + t * 0 + 1.2119675456389452 * n),
    };
    return r !== void 0 && (i.alpha = r), i;
  },
  Zn = (e = 0) => {
    const t = Math.abs(e);
    return t >= 16 / 512 ? Math.sign(e) * t ** 1.8 : e / 16;
  },
  Qn = (e) => {
    const t = Zn(e.r),
      n = Zn(e.g),
      r = Zn(e.b),
      i = {
        mode: 'xyz50',
        x:
          0.7977666449006423 * t +
          0.1351812974005331 * n +
          0.0313477341283922 * r,
        y:
          0.2880748288194013 * t +
          0.7118352342418731 * n +
          899369387256e-16 * r,
        z: 0 * t + 0 * n + 0.8251046025104602 * r,
      };
    return e.alpha !== void 0 && (i.alpha = e.alpha), i;
  },
  $n = {
    ...P,
    mode: 'prophoto',
    parse: ['prophoto-rgb'],
    serialize: 'prophoto-rgb',
    fromMode: {
      xyz50: Xn,
      rgb: (e) => Xn(X(e)),
    },
    toMode: {
      xyz50: Qn,
      rgb: (e) => Y(Qn(e)),
    },
  },
  er = 1.09929682680944,
  tr = 0.018053968510807,
  nr = (e) => {
    const t = Math.abs(e);
    return t > tr
      ? (Math.sign(e) || 1) * (er * t ** 0.45 - 0.09929682680944008)
      : 4.5 * e;
  },
  rr = ({ x: e, y: t, z: n, alpha: r }) => {
    e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
    const i = {
      mode: 'rec2020',
      r: nr(
        e * 1.7166511879712683 - t * 0.3556707837763925 - 0.2533662813736599 * n
      ),
      g: nr(
        e * -0.6666843518324893 +
          t * 1.6164812366349395 +
          0.0157685458139111 * n
      ),
      b: nr(
        e * 0.0176398574453108 - t * 0.0427706132578085 + 0.9421031212354739 * n
      ),
    };
    return r !== void 0 && (i.alpha = r), i;
  },
  ir = 1.09929682680944,
  ar = 0.018053968510807,
  or = (e = 0) => {
    const t = Math.abs(e);
    return t < ar * 4.5
      ? e / 4.5
      : (Math.sign(e) || 1) * ((t + ir - 1) / ir) ** (1 / 0.45);
  },
  sr = (e) => {
    const t = or(e.r),
      n = or(e.g),
      r = or(e.b),
      i = {
        mode: 'xyz65',
        x:
          0.6369580483012911 * t +
          0.1446169035862083 * n +
          0.1688809751641721 * r,
        y:
          0.262700212011267 * t +
          0.6779980715188708 * n +
          0.059301716469862 * r,
        z: 0 * t + 0.0280726930490874 * n + 1.0609850577107909 * r,
      };
    return e.alpha !== void 0 && (i.alpha = e.alpha), i;
  },
  cr = {
    ...P,
    mode: 'rec2020',
    fromMode: {
      xyz65: rr,
      rgb: (e) => rr(I(e)),
    },
    toMode: {
      xyz65: sr,
      rgb: (e) => R(sr(e)),
    },
    parse: ['rec2020'],
    serialize: 'rec2020',
  },
  $ = 0.0037930732552754493,
  lr = Math.cbrt($),
  ur = (e) => Math.cbrt(e) - lr,
  dr = (e) => {
    const { r: t, g: n, b: r, alpha: i } = F(e),
      a = ur(0.3 * t + 0.622 * n + 0.078 * r + $),
      o = ur(0.23 * t + 0.692 * n + 0.078 * r + $),
      s = ur(
        0.2434226892454782 * t +
          0.2047674442449682 * n +
          0.5518098665095535 * r +
          $
      ),
      c = {
        mode: 'xyb',
        x: (a - o) / 2,
        y: (a + o) / 2,
        b: s - (a + o) / 2,
      };
    return i !== void 0 && (c.alpha = i), c;
  },
  fr = (e) => (e + lr) ** 3,
  pr = {
    mode: 'xyb',
    channels: ['x', 'y', 'b', 'alpha'],
    parse: ['--xyb'],
    serialize: '--xyb',
    toMode: {
      rgb: ({ x: e, y: t, b: n, alpha: r }) => {
        e === void 0 && (e = 0),
          t === void 0 && (t = 0),
          n === void 0 && (n = 0);
        const i = fr(e + t) - $,
          a = fr(t - e) - $,
          o = fr(n + t) - $,
          s = L({
            r:
              11.031566904639861 * i -
              9.866943908131562 * a -
              0.16462299650829934 * o,
            g:
              -3.2541473810744237 * i +
              4.418770377582723 * a -
              0.16462299650829934 * o,
            b:
              -3.6588512867136815 * i +
              2.7129230459360922 * a +
              1.9459282407775895 * o,
          });
        return r !== void 0 && (s.alpha = r), s;
      },
    },
    fromMode: { rgb: dr },
    ranges: {
      x: [-0.0154, 0.0281],
      y: [0, 0.8453],
      b: [-0.2778, 0.388],
    },
    interpolate: {
      x: M,
      y: M,
      b: M,
      alpha: {
        use: M,
        fixup: N,
      },
    },
  },
  mr = {
    mode: 'xyz50',
    parse: ['xyz-d50'],
    serialize: 'xyz-d50',
    toMode: {
      rgb: Y,
      lab: nn,
    },
    fromMode: {
      rgb: X,
      lab: $t,
    },
    channels: ['x', 'y', 'z', 'alpha'],
    ranges: {
      x: [0, 0.964],
      y: [0, 0.999],
      z: [0, 0.825],
    },
    interpolate: {
      x: M,
      y: M,
      z: M,
      alpha: {
        use: M,
        fixup: N,
      },
    },
  },
  hr = {
    mode: 'xyz65',
    toMode: {
      rgb: R,
      xyz50: (e) => {
        let { x: t, y: n, z: r, alpha: i } = e;
        t === void 0 && (t = 0),
          n === void 0 && (n = 0),
          r === void 0 && (r = 0);
        const a = {
          mode: 'xyz50',
          x:
            1.0479298208405488 * t +
            0.0229467933410191 * n -
            0.0501922295431356 * r,
          y:
            0.0296278156881593 * t +
            0.990434484573249 * n -
            0.0170738250293851 * r,
          z:
            -0.0092430581525912 * t +
            0.0150551448965779 * n +
            0.7518742899580008 * r,
        };
        return i !== void 0 && (a.alpha = i), a;
      },
    },
    fromMode: {
      rgb: I,
      xyz50: (e) => {
        let { x: t, y: n, z: r, alpha: i } = e;
        t === void 0 && (t = 0),
          n === void 0 && (n = 0),
          r === void 0 && (r = 0);
        const a = {
          mode: 'xyz65',
          x:
            0.9554734527042182 * t -
            0.0230985368742614 * n +
            0.0632593086610217 * r,
          y:
            -0.0283697069632081 * t +
            1.0099954580058226 * n +
            0.021041398966943 * r,
          z:
            0.0123140016883199 * t -
            0.0205076964334779 * n +
            1.3303659366080753 * r,
        };
        return i !== void 0 && (a.alpha = i), a;
      },
    },
    ranges: {
      x: [0, 0.95],
      y: [0, 1],
      z: [0, 1.088],
    },
    channels: ['x', 'y', 'z', 'alpha'],
    parse: ['xyz', 'xyz-d65'],
    serialize: 'xyz-d65',
    interpolate: {
      x: M,
      y: M,
      z: M,
      alpha: {
        use: M,
        fixup: N,
      },
    },
  },
  gr = {
    mode: 'yiq',
    toMode: {
      rgb: ({ y: e, i: t, q: n, alpha: r }) => {
        e === void 0 && (e = 0),
          t === void 0 && (t = 0),
          n === void 0 && (n = 0);
        const i = {
          mode: 'rgb',
          r: e + 0.95608445 * t + 0.6208885 * n,
          g: e - 0.27137664 * t - 0.6486059 * n,
          b: e - 1.10561724 * t + 1.70250126 * n,
        };
        return r !== void 0 && (i.alpha = r), i;
      },
    },
    fromMode: {
      rgb: ({ r: e, g: t, b: n, alpha: r }) => {
        e === void 0 && (e = 0),
          t === void 0 && (t = 0),
          n === void 0 && (n = 0);
        const i = {
          mode: 'yiq',
          y: 0.29889531 * e + 0.58662247 * t + 0.11448223 * n,
          i: 0.59597799 * e - 0.2741761 * t - 0.32180189 * n,
          q: 0.21147017 * e - 0.52261711 * t + 0.31114694 * n,
        };
        return r !== void 0 && (i.alpha = r), i;
      },
    },
    channels: ['y', 'i', 'q', 'alpha'],
    parse: ['--yiq'],
    serialize: '--yiq',
    ranges: {
      i: [-0.595, 0.595],
      q: [-0.522, 0.522],
    },
    interpolate: {
      y: M,
      i: M,
      q: M,
      alpha: {
        use: M,
        fixup: N,
      },
    },
  },
  _r = (e, t) => Math.round(e * (t = 10 ** t)) / t,
  vr = (
    (e = 4) =>
    (t) =>
      typeof t == 'number' ? _r(t, e) : t
  )(2),
  yr = (e) => Math.max(0, Math.min(1, e || 0)),
  br = (e) => Math.round(yr(e) * 255),
  xr = C('rgb'),
  Sr = (e) => {
    if (e === void 0) return;
    const t = br(e.r),
      n = br(e.g),
      r = br(e.b);
    return e.alpha === void 0 || e.alpha === 1
      ? `rgb(${t}, ${n}, ${r})`
      : `rgba(${t}, ${n}, ${r}, ${vr(yr(e.alpha))})`;
  },
  Cr = (e) => Sr(xr(e));
E(Ae),
  E(He),
  E(rt),
  E(it),
  E(st),
  E(mt),
  E(_t),
  E(xt),
  E(Nt),
  E(Kt),
  E(Yt),
  E(on),
  E(sn),
  E(ln),
  E(un),
  E(wn),
  E(Tn),
  E(En),
  E(Rn),
  E(Vn),
  E(Un),
  E(Gn),
  E(Jn),
  E($n),
  E(cr),
  E(P),
  E(pr),
  E(mr),
  E(hr),
  E(gr);
//#endregion
//#region src/color.ts
var wr = C('oklch'),
  Tr = 265,
  Er = 0.64,
  Dr = 0.19;
function Or(e) {
  return {
    mode: 'oklch',
    l: Er,
    c: Dr,
    h: u(e),
  };
}
function kr(e) {
  const t = wr(e);
  if (!t) throw Error(`GlowOrb: could not parse shade color "${e}"`);
  return t;
}
function Ar(e) {
  if (e.shades) {
    const [t, n, r] = e.shades.map(kr);
    return {
      blob0: t,
      blob1: n,
      blob2: r,
    };
  }
  const t = e.hue ?? Tr,
    n = e.secondaryHue ?? t + 35;
  return {
    blob0: Or(t),
    blob1: Or(n),
    blob2: Or(t - 20),
  };
}
function jr(e) {
  const t = l(e.hueShift, 0, 1),
    n = l(e.intensity, 0, 1),
    r = u((e.base.h ?? 0) + Math.sin(e.time * 0.13 + e.offset) * 40 * t);
  return {
    mode: 'oklch',
    l: l(e.base.l + Math.sin(e.time * 0.21 + e.offset) * 0.1 * n, 0, 1),
    c: Math.max(
      0,
      e.base.c + Math.sin(e.time * 0.17 + e.offset * 1.3) * 0.05 * n
    ),
    h: r,
  };
}
function Mr(e) {
  const t = l(e.l, 0, 1),
    n = Math.max(0, e.c),
    r = e.h ?? 0;
  return `oklch(${(t * 100).toFixed(1)}% ${n.toFixed(3)} ${r.toFixed(1)})`;
}
function Nr(e, t = 0.6) {
  return Cr({
    ...e,
    alpha: t,
  });
}
//#endregion
//#region src/GlowOrb.vue?vue&type=script&setup=true&lang.ts
var Pr = { class: 'lava' },
  Fr = /*#__PURE__*/ ((e, t) => {
    const n = e.__vccOpts || e;
    for (const [e, r] of t) n[e] = r;
    return n;
  })(
    /* @__PURE__ */ r({
      __name: 'GlowOrb',
      props: {
        size: { default: 132 },
        shades: {},
        hue: {},
        secondaryHue: {},
        intensity: { default: 0.5 },
        hueShift: { default: 0 },
        glow: {},
        excitement: { default: 1 },
        warp: { default: 1 },
        phase: { default: 0.09 },
        env: { default: 0 },
      },
      setup(r) {
        let l = r,
          u = c(null),
          f = c(null),
          p = c(null),
          m = [u, f, p],
          h = e(() =>
            Ar({
              shades: l.shades,
              hue: l.hue,
              secondaryHue: l.secondaryHue,
            })
          ),
          g = e(() => [h.value.blob0, h.value.blob1, h.value.blob2]),
          _ = e(() => l.glow ?? Nr(h.value.blob0, 0.6)),
          v = 0,
          y = 0,
          b = 0,
          x = !1;
        function S(e) {
          const t = Math.min(0.05, (e - (y || e)) / 1e3);
          (y = e),
            x || (b += t),
            m.forEach((e, t) => {
              const n = e.value;
              if (!n) return;
              const r = d({
                time: b,
                blobIndex: t,
                excitement: l.excitement,
                warp: l.warp,
                phase: l.phase,
                env: l.env,
              });
              (n.style.transform = `translate(${r.x.toFixed(2)}px, ${r.y.toFixed(2)}px) rotate(${r.rotation.toFixed(2)}deg) scale(${r.scaleX.toFixed(3)}, ${r.scaleY.toFixed(3)})`),
                (n.style.borderRadius = r.borderRadius);
              const i = jr({
                base: g.value[t],
                time: b,
                hueShift: l.hueShift,
                intensity: l.intensity,
                offset: t * 1.7,
              });
              n.style.background = Mr(i);
            }),
            (v = requestAnimationFrame(S));
        }
        return (
          a(() => {
            (x =
              typeof matchMedia < 'u' &&
              matchMedia('(prefers-reduced-motion: reduce)').matches),
              (v = requestAnimationFrame(S));
          }),
          o(() => {
            cancelAnimationFrame(v);
          }),
          (e, a) => (
            s(),
            t(
              'div',
              {
                class: 'glow-orb',
                style: i({
                  '--orb-size': `${r.size}px`,
                  '--orb-glow': _.value,
                }),
              },
              [
                n('div', Pr, [
                  n(
                    'div',
                    {
                      ref_key: 'blob0El',
                      ref: u,
                      class: 'blob blob0',
                    },
                    null,
                    512
                  ),
                  n(
                    'div',
                    {
                      ref_key: 'blob1El',
                      ref: f,
                      class: 'blob blob1',
                    },
                    null,
                    512
                  ),
                  n(
                    'div',
                    {
                      ref_key: 'blob2El',
                      ref: p,
                      class: 'blob blob2',
                    },
                    null,
                    512
                  ),
                ]),
              ],
              4
            )
          )
        );
      },
    }),
    [['__scopeId', 'data-v-68ed6ebe']]
  );
//#endregion
//#region src/useHoverPreview.ts
function Ir(e, t) {
  const n =
      Math.abs(Math.sin(e * 6.9 + t)) * 0.6 +
      Math.abs(Math.sin(e * 2.3 + t * 1.7)) * 0.45 +
      Math.abs(Math.sin(e * 13.1 + t)) * 0.25,
    r = Math.sin(e * 1.15 + t * 2.3) > -0.4 ? 1 : 0.25;
  return Math.min(1, n * r);
}
function Lr(e, t, n = {}) {
  let r = n.seed ?? 0,
    i = !1,
    s = 0,
    c = 0,
    l = 0,
    u = 0;
  function d(e) {
    const n = Math.min(0.05, (e - (l || e)) / 1e3);
    (l = e), (s += n);
    const a = i ? Ir(s, r * 7) : 0;
    (c += (a - c) * 0.18),
      (t.value = Number(c.toFixed(3))),
      (u = requestAnimationFrame(d));
  }
  function f() {
    i = !0;
  }
  function p() {
    i = !1;
  }
  a(() => {
    e.value?.addEventListener('pointerenter', f),
      e.value?.addEventListener('pointerleave', p),
      (u = requestAnimationFrame(d));
  }),
    o(() => {
      cancelAnimationFrame(u),
        e.value?.removeEventListener('pointerenter', f),
        e.value?.removeEventListener('pointerleave', p);
    });
}

//#endregion
export { Fr as GlowOrb, Lr as useHoverPreview };
