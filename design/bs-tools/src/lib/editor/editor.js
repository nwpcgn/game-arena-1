/**
 * Bundled by jsDelivr using Rollup v2.79.2 and Terser v5.39.0.
 * Original file: /npm/@json-editor/json-editor@2.15.2/dist/jsoneditor.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var t = { exports: {} }
/*! For license information please see jsoneditor.js.LICENSE.txt */ self
var e = (t.exports = (() =>
		(() => {
			var t = {
					9306: (t, e, r) => {
						var n = r(4901),
							i = r(6823),
							o = TypeError
						t.exports = function (t) {
							if (n(t)) return t
							throw new o(i(t) + ' is not a function')
						}
					},
					5548: (t, e, r) => {
						var n = r(3517),
							i = r(6823),
							o = TypeError
						t.exports = function (t) {
							if (n(t)) return t
							throw new o(i(t) + ' is not a constructor')
						}
					},
					3506: (t, e, r) => {
						var n = r(3925),
							i = String,
							o = TypeError
						t.exports = function (t) {
							if (n(t)) return t
							throw new o("Can't set " + i(t) + ' as a prototype')
						}
					},
					6469: (t, e, r) => {
						var n = r(8227),
							i = r(2360),
							o = r(4913).f,
							a = n('unscopables'),
							s = Array.prototype
						void 0 === s[a] && o(s, a, { configurable: !0, value: i(null) }),
							(t.exports = function (t) {
								s[a][t] = !0
							})
					},
					7829: (t, e, r) => {
						var n = r(8183).charAt
						t.exports = function (t, e, r) {
							return e + (r ? n(t, e).length : 1)
						}
					},
					679: (t, e, r) => {
						var n = r(1625),
							i = TypeError
						t.exports = function (t, e) {
							if (n(e, t)) return t
							throw new i('Incorrect invocation')
						}
					},
					8551: (t, e, r) => {
						var n = r(34),
							i = String,
							o = TypeError
						t.exports = function (t) {
							if (n(t)) return t
							throw new o(i(t) + ' is not an object')
						}
					},
					235: (t, e, r) => {
						var n = r(9213).forEach,
							i = r(4598)('forEach')
						t.exports = i
							? [].forEach
							: function (t) {
									return n(
										this,
										t,
										arguments.length > 1 ? arguments[1] : void 0
									)
								}
					},
					7916: (t, e, r) => {
						var n = r(6080),
							i = r(9565),
							o = r(8981),
							a = r(6319),
							s = r(4209),
							l = r(3517),
							c = r(6198),
							u = r(4659),
							h = r(81),
							p = r(851),
							d = Array
						t.exports = function (t) {
							var e = o(t),
								r = l(this),
								f = arguments.length,
								y = f > 1 ? arguments[1] : void 0,
								m = void 0 !== y
							m && (y = n(y, f > 2 ? arguments[2] : void 0))
							var v,
								b,
								g,
								w,
								_,
								k,
								j = p(e),
								O = 0
							if (!j || (this === d && s(j)))
								for (v = c(e), b = r ? new this(v) : d(v); v > O; O++)
									(k = m ? y(e[O], O) : e[O]), u(b, O, k)
							else
								for (
									b = r ? new this() : [], _ = (w = h(e, j)).next;
									!(g = i(_, w)).done;
									O++
								)
									(k = m ? a(w, y, [g.value, O], !0) : g.value), u(b, O, k)
							return (b.length = O), b
						}
					},
					9617: (t, e, r) => {
						var n = r(5397),
							i = r(5610),
							o = r(6198),
							a = function (t) {
								return function (e, r, a) {
									var s = n(e),
										l = o(s)
									if (0 === l) return !t && -1
									var c,
										u = i(a, l)
									if (t && r != r) {
										for (; l > u; ) if ((c = s[u++]) != c) return !0
									} else
										for (; l > u; u++)
											if ((t || u in s) && s[u] === r) return t || u || 0
									return !t && -1
								}
							}
						t.exports = { includes: a(!0), indexOf: a(!1) }
					},
					9213: (t, e, r) => {
						var n = r(6080),
							i = r(9504),
							o = r(7055),
							a = r(8981),
							s = r(6198),
							l = r(1469),
							c = i([].push),
							u = function (t) {
								var e = 1 === t,
									r = 2 === t,
									i = 3 === t,
									u = 4 === t,
									h = 6 === t,
									p = 7 === t,
									d = 5 === t || h
								return function (f, y, m, v) {
									for (
										var b,
											g,
											w = a(f),
											_ = o(w),
											k = s(_),
											j = n(y, m),
											O = 0,
											x = v || l,
											C = e ? x(f, k) : r || p ? x(f, 0) : void 0;
										k > O;
										O++
									)
										if ((d || O in _) && ((g = j((b = _[O]), O, w)), t))
											if (e) C[O] = g
											else if (g)
												switch (t) {
													case 3:
														return !0
													case 5:
														return b
													case 6:
														return O
													case 2:
														c(C, b)
												}
											else
												switch (t) {
													case 4:
														return !1
													case 7:
														c(C, b)
												}
									return h ? -1 : i || u ? u : C
								}
							}
						t.exports = {
							forEach: u(0),
							map: u(1),
							filter: u(2),
							some: u(3),
							every: u(4),
							find: u(5),
							findIndex: u(6),
							filterReject: u(7)
						}
					},
					597: (t, e, r) => {
						var n = r(9039),
							i = r(8227),
							o = r(7388),
							a = i('species')
						t.exports = function (t) {
							return (
								o >= 51 ||
								!n(function () {
									var e = []
									return (
										((e.constructor = {})[a] = function () {
											return { foo: 1 }
										}),
										1 !== e[t](Boolean).foo
									)
								})
							)
						}
					},
					4598: (t, e, r) => {
						var n = r(9039)
						t.exports = function (t, e) {
							var r = [][t]
							return (
								!!r &&
								n(function () {
									r.call(
										null,
										e ||
											function () {
												return 1
											},
										1
									)
								})
							)
						}
					},
					926: (t, e, r) => {
						var n = r(9306),
							i = r(8981),
							o = r(7055),
							a = r(6198),
							s = TypeError,
							l = 'Reduce of empty array with no initial value',
							c = function (t) {
								return function (e, r, c, u) {
									var h = i(e),
										p = o(h),
										d = a(h)
									if ((n(r), 0 === d && c < 2)) throw new s(l)
									var f = t ? d - 1 : 0,
										y = t ? -1 : 1
									if (c < 2)
										for (;;) {
											if (f in p) {
												;(u = p[f]), (f += y)
												break
											}
											if (((f += y), t ? f < 0 : d <= f)) throw new s(l)
										}
									for (; t ? f >= 0 : d > f; f += y)
										f in p && (u = r(u, p[f], f, h))
									return u
								}
							}
						t.exports = { left: c(!1), right: c(!0) }
					},
					4527: (t, e, r) => {
						var n = r(3724),
							i = r(4376),
							o = TypeError,
							a = Object.getOwnPropertyDescriptor,
							s =
								n &&
								!(function () {
									if (void 0 !== this) return !0
									try {
										Object.defineProperty([], 'length', {
											writable: !1
										}).length = 1
									} catch (t) {
										return t instanceof TypeError
									}
								})()
						t.exports = s
							? function (t, e) {
									if (i(t) && !a(t, 'length').writable)
										throw new o('Cannot set read only .length')
									return (t.length = e)
								}
							: function (t, e) {
									return (t.length = e)
								}
					},
					7680: (t, e, r) => {
						var n = r(9504)
						t.exports = n([].slice)
					},
					4488: (t, e, r) => {
						var n = r(7680),
							i = Math.floor,
							o = function (t, e) {
								var r = t.length
								if (r < 8)
									for (var a, s, l = 1; l < r; ) {
										for (s = l, a = t[l]; s && e(t[s - 1], a) > 0; )
											t[s] = t[--s]
										s !== l++ && (t[s] = a)
									}
								else
									for (
										var c = i(r / 2),
											u = o(n(t, 0, c), e),
											h = o(n(t, c), e),
											p = u.length,
											d = h.length,
											f = 0,
											y = 0;
										f < p || y < d;

									)
										t[f + y] =
											f < p && y < d
												? e(u[f], h[y]) <= 0
													? u[f++]
													: h[y++]
												: f < p
													? u[f++]
													: h[y++]
								return t
							}
						t.exports = o
					},
					7433: (t, e, r) => {
						var n = r(4376),
							i = r(3517),
							o = r(34),
							a = r(8227)('species'),
							s = Array
						t.exports = function (t) {
							var e
							return (
								n(t) &&
									((e = t.constructor),
									((i(e) && (e === s || n(e.prototype))) ||
										(o(e) && null === (e = e[a]))) &&
										(e = void 0)),
								void 0 === e ? s : e
							)
						}
					},
					1469: (t, e, r) => {
						var n = r(7433)
						t.exports = function (t, e) {
							return new (n(t))(0 === e ? 0 : e)
						}
					},
					6319: (t, e, r) => {
						var n = r(8551),
							i = r(9539)
						t.exports = function (t, e, r, o) {
							try {
								return o ? e(n(r)[0], r[1]) : e(r)
							} catch (e) {
								i(t, 'throw', e)
							}
						}
					},
					4428: (t, e, r) => {
						var n = r(8227)('iterator'),
							i = !1
						try {
							var o = 0,
								a = {
									next: function () {
										return { done: !!o++ }
									},
									return: function () {
										i = !0
									}
								}
							;(a[n] = function () {
								return this
							}),
								Array.from(a, function () {
									throw 2
								})
						} catch (t) {}
						t.exports = function (t, e) {
							try {
								if (!e && !i) return !1
							} catch (t) {
								return !1
							}
							var r = !1
							try {
								var o = {}
								;(o[n] = function () {
									return {
										next: function () {
											return { done: (r = !0) }
										}
									}
								}),
									t(o)
							} catch (t) {}
							return r
						}
					},
					4576: (t, e, r) => {
						var n = r(9504),
							i = n({}.toString),
							o = n(''.slice)
						t.exports = function (t) {
							return o(i(t), 8, -1)
						}
					},
					6955: (t, e, r) => {
						var n = r(2140),
							i = r(4901),
							o = r(4576),
							a = r(8227)('toStringTag'),
							s = Object,
							l =
								'Arguments' ===
								o(
									(function () {
										return arguments
									})()
								)
						t.exports = n
							? o
							: function (t) {
									var e, r, n
									return void 0 === t
										? 'Undefined'
										: null === t
											? 'Null'
											: 'string' ==
												  typeof (r = (function (t, e) {
														try {
															return t[e]
														} catch (t) {}
												  })((e = s(t)), a))
												? r
												: l
													? o(e)
													: 'Object' === (n = o(e)) && i(e.callee)
														? 'Arguments'
														: n
								}
					},
					7740: (t, e, r) => {
						var n = r(9297),
							i = r(5031),
							o = r(7347),
							a = r(4913)
						t.exports = function (t, e, r) {
							for (var s = i(e), l = a.f, c = o.f, u = 0; u < s.length; u++) {
								var h = s[u]
								n(t, h) || (r && n(r, h)) || l(t, h, c(e, h))
							}
						}
					},
					1436: (t, e, r) => {
						var n = r(8227)('match')
						t.exports = function (t) {
							var e = /./
							try {
								'/./'[t](e)
							} catch (r) {
								try {
									return (e[n] = !1), '/./'[t](e)
								} catch (t) {}
							}
							return !1
						}
					},
					2211: (t, e, r) => {
						var n = r(9039)
						t.exports = !n(function () {
							function t() {}
							return (
								(t.prototype.constructor = null),
								Object.getPrototypeOf(new t()) !== t.prototype
							)
						})
					},
					2529: (t) => {
						t.exports = function (t, e) {
							return { value: t, done: e }
						}
					},
					6699: (t, e, r) => {
						var n = r(3724),
							i = r(4913),
							o = r(6980)
						t.exports = n
							? function (t, e, r) {
									return i.f(t, e, o(1, r))
								}
							: function (t, e, r) {
									return (t[e] = r), t
								}
					},
					6980: (t) => {
						t.exports = function (t, e) {
							return {
								enumerable: !(1 & t),
								configurable: !(2 & t),
								writable: !(4 & t),
								value: e
							}
						}
					},
					4659: (t, e, r) => {
						var n = r(3724),
							i = r(4913),
							o = r(6980)
						t.exports = function (t, e, r) {
							n ? i.f(t, e, o(0, r)) : (t[e] = r)
						}
					},
					380: (t, e, r) => {
						var n = r(9504),
							i = r(9039),
							o = r(533).start,
							a = RangeError,
							s = isFinite,
							l = Math.abs,
							c = Date.prototype,
							u = c.toISOString,
							h = n(c.getTime),
							p = n(c.getUTCDate),
							d = n(c.getUTCFullYear),
							f = n(c.getUTCHours),
							y = n(c.getUTCMilliseconds),
							m = n(c.getUTCMinutes),
							v = n(c.getUTCMonth),
							b = n(c.getUTCSeconds)
						t.exports =
							i(function () {
								return (
									'0385-07-25T07:06:39.999Z' !==
									u.call(new Date(-50000000000001))
								)
							}) ||
							!i(function () {
								u.call(new Date(NaN))
							})
								? function () {
										if (!s(h(this))) throw new a('Invalid time value')
										var t = this,
											e = d(t),
											r = y(t),
											n = e < 0 ? '-' : e > 9999 ? '+' : ''
										return (
											n +
											o(l(e), n ? 6 : 4, 0) +
											'-' +
											o(v(t) + 1, 2, 0) +
											'-' +
											o(p(t), 2, 0) +
											'T' +
											o(f(t), 2, 0) +
											':' +
											o(m(t), 2, 0) +
											':' +
											o(b(t), 2, 0) +
											'.' +
											o(r, 3, 0) +
											'Z'
										)
									}
								: u
					},
					3640: (t, e, r) => {
						var n = r(8551),
							i = r(4270),
							o = TypeError
						t.exports = function (t) {
							if ((n(this), 'string' === t || 'default' === t)) t = 'string'
							else if ('number' !== t) throw new o('Incorrect hint')
							return i(this, t)
						}
					},
					2106: (t, e, r) => {
						var n = r(283),
							i = r(4913)
						t.exports = function (t, e, r) {
							return (
								r.get && n(r.get, e, { getter: !0 }),
								r.set && n(r.set, e, { setter: !0 }),
								i.f(t, e, r)
							)
						}
					},
					6840: (t, e, r) => {
						var n = r(4901),
							i = r(4913),
							o = r(283),
							a = r(9433)
						t.exports = function (t, e, r, s) {
							s || (s = {})
							var l = s.enumerable,
								c = void 0 !== s.name ? s.name : e
							if ((n(r) && o(r, c, s), s.global)) l ? (t[e] = r) : a(e, r)
							else {
								try {
									s.unsafe ? t[e] && (l = !0) : delete t[e]
								} catch (t) {}
								l
									? (t[e] = r)
									: i.f(t, e, {
											value: r,
											enumerable: !1,
											configurable: !s.nonConfigurable,
											writable: !s.nonWritable
										})
							}
							return t
						}
					},
					9433: (t, e, r) => {
						var n = r(4475),
							i = Object.defineProperty
						t.exports = function (t, e) {
							try {
								i(n, t, { value: e, configurable: !0, writable: !0 })
							} catch (r) {
								n[t] = e
							}
							return e
						}
					},
					4606: (t, e, r) => {
						var n = r(6823),
							i = TypeError
						t.exports = function (t, e) {
							if (!delete t[e])
								throw new i('Cannot delete property ' + n(e) + ' of ' + n(t))
						}
					},
					3724: (t, e, r) => {
						var n = r(9039)
						t.exports = !n(function () {
							return (
								7 !==
								Object.defineProperty({}, 1, {
									get: function () {
										return 7
									}
								})[1]
							)
						})
					},
					4055: (t, e, r) => {
						var n = r(4475),
							i = r(34),
							o = n.document,
							a = i(o) && i(o.createElement)
						t.exports = function (t) {
							return a ? o.createElement(t) : {}
						}
					},
					6837: (t) => {
						var e = TypeError
						t.exports = function (t) {
							if (t > 9007199254740991)
								throw e('Maximum allowed index exceeded')
							return t
						}
					},
					7400: (t) => {
						t.exports = {
							CSSRuleList: 0,
							CSSStyleDeclaration: 0,
							CSSValueList: 0,
							ClientRectList: 0,
							DOMRectList: 0,
							DOMStringList: 0,
							DOMTokenList: 1,
							DataTransferItemList: 0,
							FileList: 0,
							HTMLAllCollection: 0,
							HTMLCollection: 0,
							HTMLFormElement: 0,
							HTMLSelectElement: 0,
							MediaList: 0,
							MimeTypeArray: 0,
							NamedNodeMap: 0,
							NodeList: 1,
							PaintRequestList: 0,
							Plugin: 0,
							PluginArray: 0,
							SVGLengthList: 0,
							SVGNumberList: 0,
							SVGPathSegList: 0,
							SVGPointList: 0,
							SVGStringList: 0,
							SVGTransformList: 0,
							SourceBufferList: 0,
							StyleSheetList: 0,
							TextTrackCueList: 0,
							TextTrackList: 0,
							TouchList: 0
						}
					},
					9296: (t, e, r) => {
						var n = r(4055)('span').classList,
							i = n && n.constructor && n.constructor.prototype
						t.exports = i === Object.prototype ? void 0 : i
					},
					8834: (t, e, r) => {
						var n = r(9392).match(/firefox\/(\d+)/i)
						t.exports = !!n && +n[1]
					},
					7290: (t, e, r) => {
						var n = r(516),
							i = r(9088)
						t.exports =
							!n &&
							!i &&
							'object' == typeof window &&
							'object' == typeof document
					},
					6763: (t) => {
						t.exports =
							'function' == typeof Bun && Bun && 'string' == typeof Bun.version
					},
					516: (t) => {
						t.exports =
							'object' == typeof Deno && Deno && 'object' == typeof Deno.version
					},
					3202: (t, e, r) => {
						var n = r(9392)
						t.exports = /MSIE|Trident/.test(n)
					},
					28: (t, e, r) => {
						var n = r(9392)
						t.exports =
							/ipad|iphone|ipod/i.test(n) && 'undefined' != typeof Pebble
					},
					8119: (t, e, r) => {
						var n = r(9392)
						t.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(n)
					},
					9088: (t, e, r) => {
						var n = r(4475),
							i = r(4576)
						t.exports = 'process' === i(n.process)
					},
					6765: (t, e, r) => {
						var n = r(9392)
						t.exports = /web0s(?!.*chrome)/i.test(n)
					},
					9392: (t) => {
						t.exports =
							('undefined' != typeof navigator &&
								String(navigator.userAgent)) ||
							''
					},
					7388: (t, e, r) => {
						var n,
							i,
							o = r(4475),
							a = r(9392),
							s = o.process,
							l = o.Deno,
							c = (s && s.versions) || (l && l.version),
							u = c && c.v8
						u &&
							(i = (n = u.split('.'))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1])),
							!i &&
								a &&
								(!(n = a.match(/Edge\/(\d+)/)) || n[1] >= 74) &&
								(n = a.match(/Chrome\/(\d+)/)) &&
								(i = +n[1]),
							(t.exports = i)
					},
					9160: (t, e, r) => {
						var n = r(9392).match(/AppleWebKit\/(\d+)\./)
						t.exports = !!n && +n[1]
					},
					8727: (t) => {
						t.exports = [
							'constructor',
							'hasOwnProperty',
							'isPrototypeOf',
							'propertyIsEnumerable',
							'toLocaleString',
							'toString',
							'valueOf'
						]
					},
					6518: (t, e, r) => {
						var n = r(4475),
							i = r(7347).f,
							o = r(6699),
							a = r(6840),
							s = r(9433),
							l = r(7740),
							c = r(2796)
						t.exports = function (t, e) {
							var r,
								u,
								h,
								p,
								d,
								f = t.target,
								y = t.global,
								m = t.stat
							if ((r = y ? n : m ? n[f] || s(f, {}) : n[f] && n[f].prototype))
								for (u in e) {
									if (
										((p = e[u]),
										(h = t.dontCallGetSet ? (d = i(r, u)) && d.value : r[u]),
										!c(y ? u : f + (m ? '.' : '#') + u, t.forced) &&
											void 0 !== h)
									) {
										if (typeof p == typeof h) continue
										l(p, h)
									}
									;(t.sham || (h && h.sham)) && o(p, 'sham', !0), a(r, u, p, t)
								}
						}
					},
					9039: (t) => {
						t.exports = function (t) {
							try {
								return !!t()
							} catch (t) {
								return !0
							}
						}
					},
					9228: (t, e, r) => {
						r(7495)
						var n = r(9565),
							i = r(6840),
							o = r(7323),
							a = r(9039),
							s = r(8227),
							l = r(6699),
							c = s('species'),
							u = RegExp.prototype
						t.exports = function (t, e, r, h) {
							var p = s(t),
								d = !a(function () {
									var e = {}
									return (
										(e[p] = function () {
											return 7
										}),
										7 !== ''[t](e)
									)
								}),
								f =
									d &&
									!a(function () {
										var e = !1,
											r = /a/
										return (
											'split' === t &&
												(((r = {}).constructor = {}),
												(r.constructor[c] = function () {
													return r
												}),
												(r.flags = ''),
												(r[p] = /./[p])),
											(r.exec = function () {
												return (e = !0), null
											}),
											r[p](''),
											!e
										)
									})
							if (!d || !f || r) {
								var y = /./[p],
									m = e(p, ''[t], function (t, e, r, i, a) {
										var s = e.exec
										return s === o || s === u.exec
											? d && !a
												? { done: !0, value: n(y, e, r, i) }
												: { done: !0, value: n(t, r, e, i) }
											: { done: !1 }
									})
								i(String.prototype, t, m[0]), i(u, p, m[1])
							}
							h && l(u[p], 'sham', !0)
						}
					},
					8745: (t, e, r) => {
						var n = r(616),
							i = Function.prototype,
							o = i.apply,
							a = i.call
						t.exports =
							('object' == typeof Reflect && Reflect.apply) ||
							(n
								? a.bind(o)
								: function () {
										return a.apply(o, arguments)
									})
					},
					6080: (t, e, r) => {
						var n = r(7476),
							i = r(9306),
							o = r(616),
							a = n(n.bind)
						t.exports = function (t, e) {
							return (
								i(t),
								void 0 === e
									? t
									: o
										? a(t, e)
										: function () {
												return t.apply(e, arguments)
											}
							)
						}
					},
					616: (t, e, r) => {
						var n = r(9039)
						t.exports = !n(function () {
							var t = function () {}.bind()
							return 'function' != typeof t || t.hasOwnProperty('prototype')
						})
					},
					566: (t, e, r) => {
						var n = r(9504),
							i = r(9306),
							o = r(34),
							a = r(9297),
							s = r(7680),
							l = r(616),
							c = Function,
							u = n([].concat),
							h = n([].join),
							p = {}
						t.exports = l
							? c.bind
							: function (t) {
									var e = i(this),
										r = e.prototype,
										n = s(arguments, 1),
										l = function () {
											var r = u(n, s(arguments))
											return this instanceof l
												? (function (t, e, r) {
														if (!a(p, e)) {
															for (var n = [], i = 0; i < e; i++)
																n[i] = 'a[' + i + ']'
															p[e] = c('C,a', 'return new C(' + h(n, ',') + ')')
														}
														return p[e](t, r)
													})(e, r.length, r)
												: e.apply(t, r)
										}
									return o(r) && (l.prototype = r), l
								}
					},
					9565: (t, e, r) => {
						var n = r(616),
							i = Function.prototype.call
						t.exports = n
							? i.bind(i)
							: function () {
									return i.apply(i, arguments)
								}
					},
					350: (t, e, r) => {
						var n = r(3724),
							i = r(9297),
							o = Function.prototype,
							a = n && Object.getOwnPropertyDescriptor,
							s = i(o, 'name'),
							l = s && 'something' === function () {}.name,
							c = s && (!n || (n && a(o, 'name').configurable))
						t.exports = { EXISTS: s, PROPER: l, CONFIGURABLE: c }
					},
					6706: (t, e, r) => {
						var n = r(9504),
							i = r(9306)
						t.exports = function (t, e, r) {
							try {
								return n(i(Object.getOwnPropertyDescriptor(t, e)[r]))
							} catch (t) {}
						}
					},
					7476: (t, e, r) => {
						var n = r(4576),
							i = r(9504)
						t.exports = function (t) {
							if ('Function' === n(t)) return i(t)
						}
					},
					9504: (t, e, r) => {
						var n = r(616),
							i = Function.prototype,
							o = i.call,
							a = n && i.bind.bind(o, o)
						t.exports = n
							? a
							: function (t) {
									return function () {
										return o.apply(t, arguments)
									}
								}
					},
					7751: (t, e, r) => {
						var n = r(4475),
							i = r(4901)
						t.exports = function (t, e) {
							return arguments.length < 2
								? ((r = n[t]), i(r) ? r : void 0)
								: n[t] && n[t][e]
							var r
						}
					},
					851: (t, e, r) => {
						var n = r(6955),
							i = r(5966),
							o = r(4117),
							a = r(6269),
							s = r(8227)('iterator')
						t.exports = function (t) {
							if (!o(t)) return i(t, s) || i(t, '@@iterator') || a[n(t)]
						}
					},
					81: (t, e, r) => {
						var n = r(9565),
							i = r(9306),
							o = r(8551),
							a = r(6823),
							s = r(851),
							l = TypeError
						t.exports = function (t, e) {
							var r = arguments.length < 2 ? s(t) : e
							if (i(r)) return o(n(r, t))
							throw new l(a(t) + ' is not iterable')
						}
					},
					6933: (t, e, r) => {
						var n = r(9504),
							i = r(4376),
							o = r(4901),
							a = r(4576),
							s = r(655),
							l = n([].push)
						t.exports = function (t) {
							if (o(t)) return t
							if (i(t)) {
								for (var e = t.length, r = [], n = 0; n < e; n++) {
									var c = t[n]
									'string' == typeof c
										? l(r, c)
										: ('number' != typeof c &&
												'Number' !== a(c) &&
												'String' !== a(c)) ||
											l(r, s(c))
								}
								var u = r.length,
									h = !0
								return function (t, e) {
									if (h) return (h = !1), e
									if (i(this)) return e
									for (var n = 0; n < u; n++) if (r[n] === t) return e
								}
							}
						}
					},
					5966: (t, e, r) => {
						var n = r(9306),
							i = r(4117)
						t.exports = function (t, e) {
							var r = t[e]
							return i(r) ? void 0 : n(r)
						}
					},
					2478: (t, e, r) => {
						var n = r(9504),
							i = r(8981),
							o = Math.floor,
							a = n(''.charAt),
							s = n(''.replace),
							l = n(''.slice),
							c = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
							u = /\$([$&'`]|\d{1,2})/g
						t.exports = function (t, e, r, n, h, p) {
							var d = r + t.length,
								f = n.length,
								y = u
							return (
								void 0 !== h && ((h = i(h)), (y = c)),
								s(p, y, function (i, s) {
									var c
									switch (a(s, 0)) {
										case '$':
											return '$'
										case '&':
											return t
										case '`':
											return l(e, 0, r)
										case "'":
											return l(e, d)
										case '<':
											c = h[l(s, 1, -1)]
											break
										default:
											var u = +s
											if (0 === u) return i
											if (u > f) {
												var p = o(u / 10)
												return 0 === p
													? i
													: p <= f
														? void 0 === n[p - 1]
															? a(s, 1)
															: n[p - 1] + a(s, 1)
														: i
											}
											c = n[u - 1]
									}
									return void 0 === c ? '' : c
								})
							)
						}
					},
					4475: function (t, e, r) {
						var n = function (t) {
							return t && t.Math === Math && t
						}
						t.exports =
							n('object' == typeof globalThis && globalThis) ||
							n('object' == typeof window && window) ||
							n('object' == typeof self && self) ||
							n('object' == typeof r.g && r.g) ||
							n('object' == typeof this && this) ||
							(function () {
								return this
							})() ||
							Function('return this')()
					},
					9297: (t, e, r) => {
						var n = r(9504),
							i = r(8981),
							o = n({}.hasOwnProperty)
						t.exports =
							Object.hasOwn ||
							function (t, e) {
								return o(i(t), e)
							}
					},
					421: (t) => {
						t.exports = {}
					},
					3138: (t) => {
						t.exports = function (t, e) {
							try {
								1 === arguments.length ? console.error(t) : console.error(t, e)
							} catch (t) {}
						}
					},
					397: (t, e, r) => {
						var n = r(7751)
						t.exports = n('document', 'documentElement')
					},
					5917: (t, e, r) => {
						var n = r(3724),
							i = r(9039),
							o = r(4055)
						t.exports =
							!n &&
							!i(function () {
								return (
									7 !==
									Object.defineProperty(o('div'), 'a', {
										get: function () {
											return 7
										}
									}).a
								)
							})
					},
					7055: (t, e, r) => {
						var n = r(9504),
							i = r(9039),
							o = r(4576),
							a = Object,
							s = n(''.split)
						t.exports = i(function () {
							return !a('z').propertyIsEnumerable(0)
						})
							? function (t) {
									return 'String' === o(t) ? s(t, '') : a(t)
								}
							: a
					},
					3167: (t, e, r) => {
						var n = r(4901),
							i = r(34),
							o = r(2967)
						t.exports = function (t, e, r) {
							var a, s
							return (
								o &&
									n((a = e.constructor)) &&
									a !== r &&
									i((s = a.prototype)) &&
									s !== r.prototype &&
									o(t, s),
								t
							)
						}
					},
					3706: (t, e, r) => {
						var n = r(9504),
							i = r(4901),
							o = r(7629),
							a = n(Function.toString)
						i(o.inspectSource) ||
							(o.inspectSource = function (t) {
								return a(t)
							}),
							(t.exports = o.inspectSource)
					},
					1181: (t, e, r) => {
						var n,
							i,
							o,
							a = r(8622),
							s = r(4475),
							l = r(34),
							c = r(6699),
							u = r(9297),
							h = r(7629),
							p = r(6119),
							d = r(421),
							f = 'Object already initialized',
							y = s.TypeError,
							m = s.WeakMap
						if (a || h.state) {
							var v = h.state || (h.state = new m())
							;(v.get = v.get),
								(v.has = v.has),
								(v.set = v.set),
								(n = function (t, e) {
									if (v.has(t)) throw new y(f)
									return (e.facade = t), v.set(t, e), e
								}),
								(i = function (t) {
									return v.get(t) || {}
								}),
								(o = function (t) {
									return v.has(t)
								})
						} else {
							var b = p('state')
							;(d[b] = !0),
								(n = function (t, e) {
									if (u(t, b)) throw new y(f)
									return (e.facade = t), c(t, b, e), e
								}),
								(i = function (t) {
									return u(t, b) ? t[b] : {}
								}),
								(o = function (t) {
									return u(t, b)
								})
						}
						t.exports = {
							set: n,
							get: i,
							has: o,
							enforce: function (t) {
								return o(t) ? i(t) : n(t, {})
							},
							getterFor: function (t) {
								return function (e) {
									var r
									if (!l(e) || (r = i(e)).type !== t)
										throw new y('Incompatible receiver, ' + t + ' required')
									return r
								}
							}
						}
					},
					4209: (t, e, r) => {
						var n = r(8227),
							i = r(6269),
							o = n('iterator'),
							a = Array.prototype
						t.exports = function (t) {
							return void 0 !== t && (i.Array === t || a[o] === t)
						}
					},
					4376: (t, e, r) => {
						var n = r(4576)
						t.exports =
							Array.isArray ||
							function (t) {
								return 'Array' === n(t)
							}
					},
					4901: (t) => {
						var e = 'object' == typeof document && document.all
						t.exports =
							void 0 === e && void 0 !== e
								? function (t) {
										return 'function' == typeof t || t === e
									}
								: function (t) {
										return 'function' == typeof t
									}
					},
					3517: (t, e, r) => {
						var n = r(9504),
							i = r(9039),
							o = r(4901),
							a = r(6955),
							s = r(7751),
							l = r(3706),
							c = function () {},
							u = s('Reflect', 'construct'),
							h = /^\s*(?:class|function)\b/,
							p = n(h.exec),
							d = !h.test(c),
							f = function (t) {
								if (!o(t)) return !1
								try {
									return u(c, [], t), !0
								} catch (t) {
									return !1
								}
							},
							y = function (t) {
								if (!o(t)) return !1
								switch (a(t)) {
									case 'AsyncFunction':
									case 'GeneratorFunction':
									case 'AsyncGeneratorFunction':
										return !1
								}
								try {
									return d || !!p(h, l(t))
								} catch (t) {
									return !0
								}
							}
						;(y.sham = !0),
							(t.exports =
								!u ||
								i(function () {
									var t
									return (
										f(f.call) ||
										!f(Object) ||
										!f(function () {
											t = !0
										}) ||
										t
									)
								})
									? y
									: f)
					},
					6575: (t, e, r) => {
						var n = r(9297)
						t.exports = function (t) {
							return void 0 !== t && (n(t, 'value') || n(t, 'writable'))
						}
					},
					2796: (t, e, r) => {
						var n = r(9039),
							i = r(4901),
							o = /#|\.prototype\./,
							a = function (t, e) {
								var r = l[s(t)]
								return r === u || (r !== c && (i(e) ? n(e) : !!e))
							},
							s = (a.normalize = function (t) {
								return String(t).replace(o, '.').toLowerCase()
							}),
							l = (a.data = {}),
							c = (a.NATIVE = 'N'),
							u = (a.POLYFILL = 'P')
						t.exports = a
					},
					4117: (t) => {
						t.exports = function (t) {
							return null == t
						}
					},
					34: (t, e, r) => {
						var n = r(4901)
						t.exports = function (t) {
							return 'object' == typeof t ? null !== t : n(t)
						}
					},
					3925: (t, e, r) => {
						var n = r(34)
						t.exports = function (t) {
							return n(t) || null === t
						}
					},
					6395: (t) => {
						t.exports = !1
					},
					788: (t, e, r) => {
						var n = r(34),
							i = r(4576),
							o = r(8227)('match')
						t.exports = function (t) {
							var e
							return n(t) && (void 0 !== (e = t[o]) ? !!e : 'RegExp' === i(t))
						}
					},
					757: (t, e, r) => {
						var n = r(7751),
							i = r(4901),
							o = r(1625),
							a = r(7040),
							s = Object
						t.exports = a
							? function (t) {
									return 'symbol' == typeof t
								}
							: function (t) {
									var e = n('Symbol')
									return i(e) && o(e.prototype, s(t))
								}
					},
					2652: (t, e, r) => {
						var n = r(6080),
							i = r(9565),
							o = r(8551),
							a = r(6823),
							s = r(4209),
							l = r(6198),
							c = r(1625),
							u = r(81),
							h = r(851),
							p = r(9539),
							d = TypeError,
							f = function (t, e) {
								;(this.stopped = t), (this.result = e)
							},
							y = f.prototype
						t.exports = function (t, e, r) {
							var m,
								v,
								b,
								g,
								w,
								_,
								k,
								j = r && r.that,
								O = !(!r || !r.AS_ENTRIES),
								x = !(!r || !r.IS_RECORD),
								C = !(!r || !r.IS_ITERATOR),
								E = !(!r || !r.INTERRUPTED),
								S = n(e, j),
								P = function (t) {
									return m && p(m, 'normal', t), new f(!0, t)
								},
								L = function (t) {
									return O
										? (o(t), E ? S(t[0], t[1], P) : S(t[0], t[1]))
										: E
											? S(t, P)
											: S(t)
								}
							if (x) m = t.iterator
							else if (C) m = t
							else {
								if (!(v = h(t))) throw new d(a(t) + ' is not iterable')
								if (s(v)) {
									for (b = 0, g = l(t); g > b; b++)
										if ((w = L(t[b])) && c(y, w)) return w
									return new f(!1)
								}
								m = u(t, v)
							}
							for (_ = x ? t.next : m.next; !(k = i(_, m)).done; ) {
								try {
									w = L(k.value)
								} catch (t) {
									p(m, 'throw', t)
								}
								if ('object' == typeof w && w && c(y, w)) return w
							}
							return new f(!1)
						}
					},
					9539: (t, e, r) => {
						var n = r(9565),
							i = r(8551),
							o = r(5966)
						t.exports = function (t, e, r) {
							var a, s
							i(t)
							try {
								if (!(a = o(t, 'return'))) {
									if ('throw' === e) throw r
									return r
								}
								a = n(a, t)
							} catch (t) {
								;(s = !0), (a = t)
							}
							if ('throw' === e) throw r
							if (s) throw a
							return i(a), r
						}
					},
					3994: (t, e, r) => {
						var n = r(7657).IteratorPrototype,
							i = r(2360),
							o = r(6980),
							a = r(687),
							s = r(6269),
							l = function () {
								return this
							}
						t.exports = function (t, e, r, c) {
							var u = e + ' Iterator'
							return (
								(t.prototype = i(n, { next: o(+!c, r) })),
								a(t, u, !1, !0),
								(s[u] = l),
								t
							)
						}
					},
					1088: (t, e, r) => {
						var n = r(6518),
							i = r(9565),
							o = r(6395),
							a = r(350),
							s = r(4901),
							l = r(3994),
							c = r(2787),
							u = r(2967),
							h = r(687),
							p = r(6699),
							d = r(6840),
							f = r(8227),
							y = r(6269),
							m = r(7657),
							v = a.PROPER,
							b = a.CONFIGURABLE,
							g = m.IteratorPrototype,
							w = m.BUGGY_SAFARI_ITERATORS,
							_ = f('iterator'),
							k = 'keys',
							j = 'values',
							O = 'entries',
							x = function () {
								return this
							}
						t.exports = function (t, e, r, a, f, m, C) {
							l(r, e, a)
							var E,
								S,
								P,
								L = function (t) {
									if (t === f && B) return B
									if (!w && t && t in R) return R[t]
									switch (t) {
										case k:
										case j:
										case O:
											return function () {
												return new r(this, t)
											}
									}
									return function () {
										return new r(this)
									}
								},
								T = e + ' Iterator',
								A = !1,
								R = t.prototype,
								I = R[_] || R['@@iterator'] || (f && R[f]),
								B = (!w && I) || L(f),
								N = ('Array' === e && R.entries) || I
							if (
								(N &&
									(E = c(N.call(new t()))) !== Object.prototype &&
									E.next &&
									(o || c(E) === g || (u ? u(E, g) : s(E[_]) || d(E, _, x)),
									h(E, T, !0, !0),
									o && (y[T] = x)),
								v &&
									f === j &&
									I &&
									I.name !== j &&
									(!o && b
										? p(R, 'name', j)
										: ((A = !0),
											(B = function () {
												return i(I, this)
											}))),
								f)
							)
								if (
									((S = { values: L(j), keys: m ? B : L(k), entries: L(O) }), C)
								)
									for (P in S) (w || A || !(P in R)) && d(R, P, S[P])
								else n({ target: e, proto: !0, forced: w || A }, S)
							return (
								(o && !C) || R[_] === B || d(R, _, B, { name: f }),
								(y[e] = B),
								S
							)
						}
					},
					7657: (t, e, r) => {
						var n,
							i,
							o,
							a = r(9039),
							s = r(4901),
							l = r(34),
							c = r(2360),
							u = r(2787),
							h = r(6840),
							p = r(8227),
							d = r(6395),
							f = p('iterator'),
							y = !1
						;[].keys &&
							('next' in (o = [].keys())
								? (i = u(u(o))) !== Object.prototype && (n = i)
								: (y = !0)),
							!l(n) ||
							a(function () {
								var t = {}
								return n[f].call(t) !== t
							})
								? (n = {})
								: d && (n = c(n)),
							s(n[f]) ||
								h(n, f, function () {
									return this
								}),
							(t.exports = { IteratorPrototype: n, BUGGY_SAFARI_ITERATORS: y })
					},
					6269: (t) => {
						t.exports = {}
					},
					6198: (t, e, r) => {
						var n = r(8014)
						t.exports = function (t) {
							return n(t.length)
						}
					},
					283: (t, e, r) => {
						var n = r(9504),
							i = r(9039),
							o = r(4901),
							a = r(9297),
							s = r(3724),
							l = r(350).CONFIGURABLE,
							c = r(3706),
							u = r(1181),
							h = u.enforce,
							p = u.get,
							d = String,
							f = Object.defineProperty,
							y = n(''.slice),
							m = n(''.replace),
							v = n([].join),
							b =
								s &&
								!i(function () {
									return 8 !== f(function () {}, 'length', { value: 8 }).length
								}),
							g = String(String).split('String'),
							w = (t.exports = function (t, e, r) {
								'Symbol(' === y(d(e), 0, 7) &&
									(e = '[' + m(d(e), /^Symbol\(([^)]*)\).*$/, '$1') + ']'),
									r && r.getter && (e = 'get ' + e),
									r && r.setter && (e = 'set ' + e),
									(!a(t, 'name') || (l && t.name !== e)) &&
										(s
											? f(t, 'name', { value: e, configurable: !0 })
											: (t.name = e)),
									b &&
										r &&
										a(r, 'arity') &&
										t.length !== r.arity &&
										f(t, 'length', { value: r.arity })
								try {
									r && a(r, 'constructor') && r.constructor
										? s && f(t, 'prototype', { writable: !1 })
										: t.prototype && (t.prototype = void 0)
								} catch (t) {}
								var n = h(t)
								return (
									a(n, 'source') ||
										(n.source = v(g, 'string' == typeof e ? e : '')),
									t
								)
							})
						Function.prototype.toString = w(function () {
							return (o(this) && p(this).source) || c(this)
						}, 'toString')
					},
					741: (t) => {
						var e = Math.ceil,
							r = Math.floor
						t.exports =
							Math.trunc ||
							function (t) {
								var n = +t
								return (n > 0 ? r : e)(n)
							}
					},
					1955: (t, e, r) => {
						var n,
							i,
							o,
							a,
							s,
							l = r(4475),
							c = r(3389),
							u = r(6080),
							h = r(9225).set,
							p = r(8265),
							d = r(8119),
							f = r(28),
							y = r(6765),
							m = r(9088),
							v = l.MutationObserver || l.WebKitMutationObserver,
							b = l.document,
							g = l.process,
							w = l.Promise,
							_ = c('queueMicrotask')
						if (!_) {
							var k = new p(),
								j = function () {
									var t, e
									for (m && (t = g.domain) && t.exit(); (e = k.get()); )
										try {
											e()
										} catch (t) {
											throw (k.head && n(), t)
										}
									t && t.enter()
								}
							d || m || y || !v || !b
								? !f && w && w.resolve
									? (((a = w.resolve(void 0)).constructor = w),
										(s = u(a.then, a)),
										(n = function () {
											s(j)
										}))
									: m
										? (n = function () {
												g.nextTick(j)
											})
										: ((h = u(h, l)),
											(n = function () {
												h(j)
											}))
								: ((i = !0),
									(o = b.createTextNode('')),
									new v(j).observe(o, { characterData: !0 }),
									(n = function () {
										o.data = i = !i
									})),
								(_ = function (t) {
									k.head || n(), k.add(t)
								})
						}
						t.exports = _
					},
					6043: (t, e, r) => {
						var n = r(9306),
							i = TypeError,
							o = function (t) {
								var e, r
								;(this.promise = new t(function (t, n) {
									if (void 0 !== e || void 0 !== r)
										throw new i('Bad Promise constructor')
									;(e = t), (r = n)
								})),
									(this.resolve = n(e)),
									(this.reject = n(r))
							}
						t.exports.f = function (t) {
							return new o(t)
						}
					},
					5749: (t, e, r) => {
						var n = r(788),
							i = TypeError
						t.exports = function (t) {
							if (n(t))
								throw new i("The method doesn't accept regular expressions")
							return t
						}
					},
					3904: (t, e, r) => {
						var n = r(4475),
							i = r(9039),
							o = r(9504),
							a = r(655),
							s = r(3802).trim,
							l = r(7452),
							c = o(''.charAt),
							u = n.parseFloat,
							h = n.Symbol,
							p = h && h.iterator,
							d =
								1 / u(l + '-0') != -1 / 0 ||
								(p &&
									!i(function () {
										u(Object(p))
									}))
						t.exports = d
							? function (t) {
									var e = s(a(t)),
										r = u(e)
									return 0 === r && '-' === c(e, 0) ? -0 : r
								}
							: u
					},
					2703: (t, e, r) => {
						var n = r(4475),
							i = r(9039),
							o = r(9504),
							a = r(655),
							s = r(3802).trim,
							l = r(7452),
							c = n.parseInt,
							u = n.Symbol,
							h = u && u.iterator,
							p = /^[+-]?0x/i,
							d = o(p.exec),
							f =
								8 !== c(l + '08') ||
								22 !== c(l + '0x16') ||
								(h &&
									!i(function () {
										c(Object(h))
									}))
						t.exports = f
							? function (t, e) {
									var r = s(a(t))
									return c(r, e >>> 0 || (d(p, r) ? 16 : 10))
								}
							: c
					},
					4213: (t, e, r) => {
						var n = r(3724),
							i = r(9504),
							o = r(9565),
							a = r(9039),
							s = r(1072),
							l = r(3717),
							c = r(8773),
							u = r(8981),
							h = r(7055),
							p = Object.assign,
							d = Object.defineProperty,
							f = i([].concat)
						t.exports =
							!p ||
							a(function () {
								if (
									n &&
									1 !==
										p(
											{ b: 1 },
											p(
												d({}, 'a', {
													enumerable: !0,
													get: function () {
														d(this, 'b', { value: 3, enumerable: !1 })
													}
												}),
												{ b: 2 }
											)
										).b
								)
									return !0
								var t = {},
									e = {},
									r = Symbol('assign detection'),
									i = 'abcdefghijklmnopqrst'
								return (
									(t[r] = 7),
									i.split('').forEach(function (t) {
										e[t] = t
									}),
									7 !== p({}, t)[r] || s(p({}, e)).join('') !== i
								)
							})
								? function (t, e) {
										for (
											var r = u(t),
												i = arguments.length,
												a = 1,
												p = l.f,
												d = c.f;
											i > a;

										)
											for (
												var y,
													m = h(arguments[a++]),
													v = p ? f(s(m), p(m)) : s(m),
													b = v.length,
													g = 0;
												b > g;

											)
												(y = v[g++]), (n && !o(d, m, y)) || (r[y] = m[y])
										return r
									}
								: p
					},
					2360: (t, e, r) => {
						var n,
							i = r(8551),
							o = r(6801),
							a = r(8727),
							s = r(421),
							l = r(397),
							c = r(4055),
							u = r(6119),
							h = 'prototype',
							p = 'script',
							d = u('IE_PROTO'),
							f = function () {},
							y = function (t) {
								return '<' + p + '>' + t + '</' + p + '>'
							},
							m = function (t) {
								t.write(y('')), t.close()
								var e = t.parentWindow.Object
								return (t = null), e
							},
							v = function () {
								try {
									n = new ActiveXObject('htmlfile')
								} catch (t) {}
								var t, e, r
								v =
									'undefined' != typeof document
										? document.domain && n
											? m(n)
											: ((e = c('iframe')),
												(r = 'java' + p + ':'),
												(e.style.display = 'none'),
												l.appendChild(e),
												(e.src = String(r)),
												(t = e.contentWindow.document).open(),
												t.write(y('document.F=Object')),
												t.close(),
												t.F)
										: m(n)
								for (var i = a.length; i--; ) delete v[h][a[i]]
								return v()
							}
						;(s[d] = !0),
							(t.exports =
								Object.create ||
								function (t, e) {
									var r
									return (
										null !== t
											? ((f[h] = i(t)),
												(r = new f()),
												(f[h] = null),
												(r[d] = t))
											: (r = v()),
										void 0 === e ? r : o.f(r, e)
									)
								})
					},
					6801: (t, e, r) => {
						var n = r(3724),
							i = r(8686),
							o = r(4913),
							a = r(8551),
							s = r(5397),
							l = r(1072)
						e.f =
							n && !i
								? Object.defineProperties
								: function (t, e) {
										a(t)
										for (
											var r, n = s(e), i = l(e), c = i.length, u = 0;
											c > u;

										)
											o.f(t, (r = i[u++]), n[r])
										return t
									}
					},
					4913: (t, e, r) => {
						var n = r(3724),
							i = r(5917),
							o = r(8686),
							a = r(8551),
							s = r(6969),
							l = TypeError,
							c = Object.defineProperty,
							u = Object.getOwnPropertyDescriptor,
							h = 'enumerable',
							p = 'configurable',
							d = 'writable'
						e.f = n
							? o
								? function (t, e, r) {
										if (
											(a(t),
											(e = s(e)),
											a(r),
											'function' == typeof t &&
												'prototype' === e &&
												'value' in r &&
												d in r &&
												!r[d])
										) {
											var n = u(t, e)
											n &&
												n[d] &&
												((t[e] = r.value),
												(r = {
													configurable: p in r ? r[p] : n[p],
													enumerable: h in r ? r[h] : n[h],
													writable: !1
												}))
										}
										return c(t, e, r)
									}
								: c
							: function (t, e, r) {
									if ((a(t), (e = s(e)), a(r), i))
										try {
											return c(t, e, r)
										} catch (t) {}
									if ('get' in r || 'set' in r)
										throw new l('Accessors not supported')
									return 'value' in r && (t[e] = r.value), t
								}
					},
					7347: (t, e, r) => {
						var n = r(3724),
							i = r(9565),
							o = r(8773),
							a = r(6980),
							s = r(5397),
							l = r(6969),
							c = r(9297),
							u = r(5917),
							h = Object.getOwnPropertyDescriptor
						e.f = n
							? h
							: function (t, e) {
									if (((t = s(t)), (e = l(e)), u))
										try {
											return h(t, e)
										} catch (t) {}
									if (c(t, e)) return a(!i(o.f, t, e), t[e])
								}
					},
					298: (t, e, r) => {
						var n = r(4576),
							i = r(5397),
							o = r(8480).f,
							a = r(7680),
							s =
								'object' == typeof window &&
								window &&
								Object.getOwnPropertyNames
									? Object.getOwnPropertyNames(window)
									: []
						t.exports.f = function (t) {
							return s && 'Window' === n(t)
								? (function (t) {
										try {
											return o(t)
										} catch (t) {
											return a(s)
										}
									})(t)
								: o(i(t))
						}
					},
					8480: (t, e, r) => {
						var n = r(1828),
							i = r(8727).concat('length', 'prototype')
						e.f =
							Object.getOwnPropertyNames ||
							function (t) {
								return n(t, i)
							}
					},
					3717: (t, e) => {
						e.f = Object.getOwnPropertySymbols
					},
					2787: (t, e, r) => {
						var n = r(9297),
							i = r(4901),
							o = r(8981),
							a = r(6119),
							s = r(2211),
							l = a('IE_PROTO'),
							c = Object,
							u = c.prototype
						t.exports = s
							? c.getPrototypeOf
							: function (t) {
									var e = o(t)
									if (n(e, l)) return e[l]
									var r = e.constructor
									return i(r) && e instanceof r
										? r.prototype
										: e instanceof c
											? u
											: null
								}
					},
					1625: (t, e, r) => {
						var n = r(9504)
						t.exports = n({}.isPrototypeOf)
					},
					1828: (t, e, r) => {
						var n = r(9504),
							i = r(9297),
							o = r(5397),
							a = r(9617).indexOf,
							s = r(421),
							l = n([].push)
						t.exports = function (t, e) {
							var r,
								n = o(t),
								c = 0,
								u = []
							for (r in n) !i(s, r) && i(n, r) && l(u, r)
							for (; e.length > c; ) i(n, (r = e[c++])) && (~a(u, r) || l(u, r))
							return u
						}
					},
					1072: (t, e, r) => {
						var n = r(1828),
							i = r(8727)
						t.exports =
							Object.keys ||
							function (t) {
								return n(t, i)
							}
					},
					8773: (t, e) => {
						var r = {}.propertyIsEnumerable,
							n = Object.getOwnPropertyDescriptor,
							i = n && !r.call({ 1: 2 }, 1)
						e.f = i
							? function (t) {
									var e = n(this, t)
									return !!e && e.enumerable
								}
							: r
					},
					2967: (t, e, r) => {
						var n = r(6706),
							i = r(34),
							o = r(7750),
							a = r(3506)
						t.exports =
							Object.setPrototypeOf ||
							('__proto__' in {}
								? (function () {
										var t,
											e = !1,
											r = {}
										try {
											;(t = n(Object.prototype, '__proto__', 'set'))(r, []),
												(e = r instanceof Array)
										} catch (t) {}
										return function (r, n) {
											return (
												o(r),
												a(n),
												i(r) ? (e ? t(r, n) : (r.__proto__ = n), r) : r
											)
										}
									})()
								: void 0)
					},
					2357: (t, e, r) => {
						var n = r(3724),
							i = r(9039),
							o = r(9504),
							a = r(2787),
							s = r(1072),
							l = r(5397),
							c = o(r(8773).f),
							u = o([].push),
							h =
								n &&
								i(function () {
									var t = Object.create(null)
									return (t[2] = 2), !c(t, 2)
								}),
							p = function (t) {
								return function (e) {
									for (
										var r,
											i = l(e),
											o = s(i),
											p = h && null === a(i),
											d = o.length,
											f = 0,
											y = [];
										d > f;

									)
										(r = o[f++]),
											(n && !(p ? r in i : c(i, r))) ||
												u(y, t ? [r, i[r]] : i[r])
									return y
								}
							}
						t.exports = { entries: p(!0), values: p(!1) }
					},
					3179: (t, e, r) => {
						var n = r(2140),
							i = r(6955)
						t.exports = n
							? {}.toString
							: function () {
									return '[object ' + i(this) + ']'
								}
					},
					4270: (t, e, r) => {
						var n = r(9565),
							i = r(4901),
							o = r(34),
							a = TypeError
						t.exports = function (t, e) {
							var r, s
							if ('string' === e && i((r = t.toString)) && !o((s = n(r, t))))
								return s
							if (i((r = t.valueOf)) && !o((s = n(r, t)))) return s
							if ('string' !== e && i((r = t.toString)) && !o((s = n(r, t))))
								return s
							throw new a("Can't convert object to primitive value")
						}
					},
					5031: (t, e, r) => {
						var n = r(7751),
							i = r(9504),
							o = r(8480),
							a = r(3717),
							s = r(8551),
							l = i([].concat)
						t.exports =
							n('Reflect', 'ownKeys') ||
							function (t) {
								var e = o.f(s(t)),
									r = a.f
								return r ? l(e, r(t)) : e
							}
					},
					9167: (t, e, r) => {
						var n = r(4475)
						t.exports = n
					},
					1103: (t) => {
						t.exports = function (t) {
							try {
								return { error: !1, value: t() }
							} catch (t) {
								return { error: !0, value: t }
							}
						}
					},
					916: (t, e, r) => {
						var n = r(4475),
							i = r(550),
							o = r(4901),
							a = r(2796),
							s = r(3706),
							l = r(8227),
							c = r(7290),
							u = r(516),
							h = r(6395),
							p = r(7388),
							d = i && i.prototype,
							f = l('species'),
							y = !1,
							m = o(n.PromiseRejectionEvent),
							v = a('Promise', function () {
								var t = s(i),
									e = t !== String(i)
								if (!e && 66 === p) return !0
								if (h && (!d.catch || !d.finally)) return !0
								if (!p || p < 51 || !/native code/.test(t)) {
									var r = new i(function (t) {
											t(1)
										}),
										n = function (t) {
											t(
												function () {},
												function () {}
											)
										}
									if (
										(((r.constructor = {})[f] = n),
										!(y = r.then(function () {}) instanceof n))
									)
										return !0
								}
								return !e && (c || u) && !m
							})
						t.exports = { CONSTRUCTOR: v, REJECTION_EVENT: m, SUBCLASSING: y }
					},
					550: (t, e, r) => {
						var n = r(4475)
						t.exports = n.Promise
					},
					3438: (t, e, r) => {
						var n = r(8551),
							i = r(34),
							o = r(6043)
						t.exports = function (t, e) {
							if ((n(t), i(e) && e.constructor === t)) return e
							var r = o.f(t)
							return (0, r.resolve)(e), r.promise
						}
					},
					537: (t, e, r) => {
						var n = r(550),
							i = r(4428),
							o = r(916).CONSTRUCTOR
						t.exports =
							o ||
							!i(function (t) {
								n.all(t).then(void 0, function () {})
							})
					},
					1056: (t, e, r) => {
						var n = r(4913).f
						t.exports = function (t, e, r) {
							r in t ||
								n(t, r, {
									configurable: !0,
									get: function () {
										return e[r]
									},
									set: function (t) {
										e[r] = t
									}
								})
						}
					},
					8265: (t) => {
						var e = function () {
							;(this.head = null), (this.tail = null)
						}
						;(e.prototype = {
							add: function (t) {
								var e = { item: t, next: null },
									r = this.tail
								r ? (r.next = e) : (this.head = e), (this.tail = e)
							},
							get: function () {
								var t = this.head
								if (t)
									return (
										null === (this.head = t.next) && (this.tail = null), t.item
									)
							}
						}),
							(t.exports = e)
					},
					6682: (t, e, r) => {
						var n = r(9565),
							i = r(8551),
							o = r(4901),
							a = r(4576),
							s = r(7323),
							l = TypeError
						t.exports = function (t, e) {
							var r = t.exec
							if (o(r)) {
								var c = n(r, t, e)
								return null !== c && i(c), c
							}
							if ('RegExp' === a(t)) return n(s, t, e)
							throw new l('RegExp#exec called on incompatible receiver')
						}
					},
					7323: (t, e, r) => {
						var n,
							i,
							o = r(9565),
							a = r(9504),
							s = r(655),
							l = r(7979),
							c = r(8429),
							u = r(5745),
							h = r(2360),
							p = r(1181).get,
							d = r(3635),
							f = r(8814),
							y = u('native-string-replace', String.prototype.replace),
							m = RegExp.prototype.exec,
							v = m,
							b = a(''.charAt),
							g = a(''.indexOf),
							w = a(''.replace),
							_ = a(''.slice),
							k =
								((i = /b*/g),
								o(m, (n = /a/), 'a'),
								o(m, i, 'a'),
								0 !== n.lastIndex || 0 !== i.lastIndex),
							j = c.BROKEN_CARET,
							O = void 0 !== /()??/.exec('')[1]
						;(k || O || j || d || f) &&
							(v = function (t) {
								var e,
									r,
									n,
									i,
									a,
									c,
									u,
									d = this,
									f = p(d),
									x = s(t),
									C = f.raw
								if (C)
									return (
										(C.lastIndex = d.lastIndex),
										(e = o(v, C, x)),
										(d.lastIndex = C.lastIndex),
										e
									)
								var E = f.groups,
									S = j && d.sticky,
									P = o(l, d),
									L = d.source,
									T = 0,
									A = x
								if (
									(S &&
										((P = w(P, 'y', '')),
										-1 === g(P, 'g') && (P += 'g'),
										(A = _(x, d.lastIndex)),
										d.lastIndex > 0 &&
											(!d.multiline ||
												(d.multiline && '\n' !== b(x, d.lastIndex - 1))) &&
											((L = '(?: ' + L + ')'), (A = ' ' + A), T++),
										(r = new RegExp('^(?:' + L + ')', P))),
									O && (r = new RegExp('^' + L + '$(?!\\s)', P)),
									k && (n = d.lastIndex),
									(i = o(m, S ? r : d, A)),
									S
										? i
											? ((i.input = _(i.input, T)),
												(i[0] = _(i[0], T)),
												(i.index = d.lastIndex),
												(d.lastIndex += i[0].length))
											: (d.lastIndex = 0)
										: k &&
											i &&
											(d.lastIndex = d.global ? i.index + i[0].length : n),
									O &&
										i &&
										i.length > 1 &&
										o(y, i[0], r, function () {
											for (a = 1; a < arguments.length - 2; a++)
												void 0 === arguments[a] && (i[a] = void 0)
										}),
									i && E)
								)
									for (i.groups = c = h(null), a = 0; a < E.length; a++)
										c[(u = E[a])[0]] = i[u[1]]
								return i
							}),
							(t.exports = v)
					},
					7979: (t, e, r) => {
						var n = r(8551)
						t.exports = function () {
							var t = n(this),
								e = ''
							return (
								t.hasIndices && (e += 'd'),
								t.global && (e += 'g'),
								t.ignoreCase && (e += 'i'),
								t.multiline && (e += 'm'),
								t.dotAll && (e += 's'),
								t.unicode && (e += 'u'),
								t.unicodeSets && (e += 'v'),
								t.sticky && (e += 'y'),
								e
							)
						}
					},
					1034: (t, e, r) => {
						var n = r(9565),
							i = r(9297),
							o = r(1625),
							a = r(7979),
							s = RegExp.prototype
						t.exports = function (t) {
							var e = t.flags
							return void 0 !== e || 'flags' in s || i(t, 'flags') || !o(s, t)
								? e
								: n(a, t)
						}
					},
					8429: (t, e, r) => {
						var n = r(9039),
							i = r(4475).RegExp,
							o = n(function () {
								var t = i('a', 'y')
								return (t.lastIndex = 2), null !== t.exec('abcd')
							}),
							a =
								o ||
								n(function () {
									return !i('a', 'y').sticky
								}),
							s =
								o ||
								n(function () {
									var t = i('^r', 'gy')
									return (t.lastIndex = 2), null !== t.exec('str')
								})
						t.exports = { BROKEN_CARET: s, MISSED_STICKY: a, UNSUPPORTED_Y: o }
					},
					3635: (t, e, r) => {
						var n = r(9039),
							i = r(4475).RegExp
						t.exports = n(function () {
							var t = i('.', 's')
							return !(t.dotAll && t.test('\n') && 's' === t.flags)
						})
					},
					8814: (t, e, r) => {
						var n = r(9039),
							i = r(4475).RegExp
						t.exports = n(function () {
							var t = i('(?<a>b)', 'g')
							return (
								'b' !== t.exec('b').groups.a || 'bc' !== 'b'.replace(t, '$<a>c')
							)
						})
					},
					7750: (t, e, r) => {
						var n = r(4117),
							i = TypeError
						t.exports = function (t) {
							if (n(t)) throw new i("Can't call method on " + t)
							return t
						}
					},
					3389: (t, e, r) => {
						var n = r(4475),
							i = r(3724),
							o = Object.getOwnPropertyDescriptor
						t.exports = function (t) {
							if (!i) return n[t]
							var e = o(n, t)
							return e && e.value
						}
					},
					9472: (t, e, r) => {
						var n,
							i = r(4475),
							o = r(8745),
							a = r(4901),
							s = r(6763),
							l = r(9392),
							c = r(7680),
							u = r(2812),
							h = i.Function,
							p =
								/MSIE .\./.test(l) ||
								(s &&
									((n = i.Bun.version.split('.')).length < 3 ||
										('0' === n[0] &&
											(n[1] < 3 || ('3' === n[1] && '0' === n[2])))))
						t.exports = function (t, e) {
							var r = e ? 2 : 1
							return p
								? function (n, i) {
										var s = u(arguments.length, 1) > r,
											l = a(n) ? n : h(n),
											p = s ? c(arguments, r) : [],
											d = s
												? function () {
														o(l, this, p)
													}
												: l
										return e ? t(d, i) : t(d)
									}
								: t
						}
					},
					7633: (t, e, r) => {
						var n = r(7751),
							i = r(2106),
							o = r(8227),
							a = r(3724),
							s = o('species')
						t.exports = function (t) {
							var e = n(t)
							a &&
								e &&
								!e[s] &&
								i(e, s, {
									configurable: !0,
									get: function () {
										return this
									}
								})
						}
					},
					687: (t, e, r) => {
						var n = r(4913).f,
							i = r(9297),
							o = r(8227)('toStringTag')
						t.exports = function (t, e, r) {
							t && !r && (t = t.prototype),
								t && !i(t, o) && n(t, o, { configurable: !0, value: e })
						}
					},
					6119: (t, e, r) => {
						var n = r(5745),
							i = r(3392),
							o = n('keys')
						t.exports = function (t) {
							return o[t] || (o[t] = i(t))
						}
					},
					7629: (t, e, r) => {
						var n = r(6395),
							i = r(4475),
							o = r(9433),
							a = '__core-js_shared__',
							s = (t.exports = i[a] || o(a, {}))
						;(s.versions || (s.versions = [])).push({
							version: '3.36.1',
							mode: n ? 'pure' : 'global',
							copyright: '© 2014-2024 Denis Pushkarev (zloirock.ru)',
							license:
								'https://github.com/zloirock/core-js/blob/v3.36.1/LICENSE',
							source: 'https://github.com/zloirock/core-js'
						})
					},
					5745: (t, e, r) => {
						var n = r(7629)
						t.exports = function (t, e) {
							return n[t] || (n[t] = e || {})
						}
					},
					2293: (t, e, r) => {
						var n = r(8551),
							i = r(5548),
							o = r(4117),
							a = r(8227)('species')
						t.exports = function (t, e) {
							var r,
								s = n(t).constructor
							return void 0 === s || o((r = n(s)[a])) ? e : i(r)
						}
					},
					8183: (t, e, r) => {
						var n = r(9504),
							i = r(1291),
							o = r(655),
							a = r(7750),
							s = n(''.charAt),
							l = n(''.charCodeAt),
							c = n(''.slice),
							u = function (t) {
								return function (e, r) {
									var n,
										u,
										h = o(a(e)),
										p = i(r),
										d = h.length
									return p < 0 || p >= d
										? t
											? ''
											: void 0
										: (n = l(h, p)) < 55296 ||
											  n > 56319 ||
											  p + 1 === d ||
											  (u = l(h, p + 1)) < 56320 ||
											  u > 57343
											? t
												? s(h, p)
												: n
											: t
												? c(h, p, p + 2)
												: u - 56320 + ((n - 55296) << 10) + 65536
								}
							}
						t.exports = { codeAt: u(!1), charAt: u(!0) }
					},
					533: (t, e, r) => {
						var n = r(9504),
							i = r(8014),
							o = r(655),
							a = r(2333),
							s = r(7750),
							l = n(a),
							c = n(''.slice),
							u = Math.ceil,
							h = function (t) {
								return function (e, r, n) {
									var a,
										h,
										p = o(s(e)),
										d = i(r),
										f = p.length,
										y = void 0 === n ? ' ' : o(n)
									return d <= f || '' === y
										? p
										: ((h = l(y, u((a = d - f) / y.length))).length > a &&
												(h = c(h, 0, a)),
											t ? p + h : h + p)
								}
							}
						t.exports = { start: h(!1), end: h(!0) }
					},
					2333: (t, e, r) => {
						var n = r(1291),
							i = r(655),
							o = r(7750),
							a = RangeError
						t.exports = function (t) {
							var e = i(o(this)),
								r = '',
								s = n(t)
							if (s < 0 || s === 1 / 0)
								throw new a('Wrong number of repetitions')
							for (; s > 0; (s >>>= 1) && (e += e)) 1 & s && (r += e)
							return r
						}
					},
					706: (t, e, r) => {
						var n = r(350).PROPER,
							i = r(9039),
							o = r(7452)
						t.exports = function (t) {
							return i(function () {
								return !!o[t]() || '​᠎' !== '​᠎'[t]() || (n && o[t].name !== t)
							})
						}
					},
					3802: (t, e, r) => {
						var n = r(9504),
							i = r(7750),
							o = r(655),
							a = r(7452),
							s = n(''.replace),
							l = RegExp('^[' + a + ']+'),
							c = RegExp('(^|[^' + a + '])[' + a + ']+$'),
							u = function (t) {
								return function (e) {
									var r = o(i(e))
									return (
										1 & t && (r = s(r, l, '')), 2 & t && (r = s(r, c, '$1')), r
									)
								}
							}
						t.exports = { start: u(1), end: u(2), trim: u(3) }
					},
					4495: (t, e, r) => {
						var n = r(7388),
							i = r(9039),
							o = r(4475).String
						t.exports =
							!!Object.getOwnPropertySymbols &&
							!i(function () {
								var t = Symbol('symbol detection')
								return (
									!o(t) ||
									!(Object(t) instanceof Symbol) ||
									(!Symbol.sham && n && n < 41)
								)
							})
					},
					8242: (t, e, r) => {
						var n = r(9565),
							i = r(7751),
							o = r(8227),
							a = r(6840)
						t.exports = function () {
							var t = i('Symbol'),
								e = t && t.prototype,
								r = e && e.valueOf,
								s = o('toPrimitive')
							e &&
								!e[s] &&
								a(
									e,
									s,
									function (t) {
										return n(r, this)
									},
									{ arity: 1 }
								)
						}
					},
					1296: (t, e, r) => {
						var n = r(4495)
						t.exports = n && !!Symbol.for && !!Symbol.keyFor
					},
					9225: (t, e, r) => {
						var n,
							i,
							o,
							a,
							s = r(4475),
							l = r(8745),
							c = r(6080),
							u = r(4901),
							h = r(9297),
							p = r(9039),
							d = r(397),
							f = r(7680),
							y = r(4055),
							m = r(2812),
							v = r(8119),
							b = r(9088),
							g = s.setImmediate,
							w = s.clearImmediate,
							_ = s.process,
							k = s.Dispatch,
							j = s.Function,
							O = s.MessageChannel,
							x = s.String,
							C = 0,
							E = {},
							S = 'onreadystatechange'
						p(function () {
							n = s.location
						})
						var P = function (t) {
								if (h(E, t)) {
									var e = E[t]
									delete E[t], e()
								}
							},
							L = function (t) {
								return function () {
									P(t)
								}
							},
							T = function (t) {
								P(t.data)
							},
							A = function (t) {
								s.postMessage(x(t), n.protocol + '//' + n.host)
							}
						;(g && w) ||
							((g = function (t) {
								m(arguments.length, 1)
								var e = u(t) ? t : j(t),
									r = f(arguments, 1)
								return (
									(E[++C] = function () {
										l(e, void 0, r)
									}),
									i(C),
									C
								)
							}),
							(w = function (t) {
								delete E[t]
							}),
							b
								? (i = function (t) {
										_.nextTick(L(t))
									})
								: k && k.now
									? (i = function (t) {
											k.now(L(t))
										})
									: O && !v
										? ((a = (o = new O()).port2),
											(o.port1.onmessage = T),
											(i = c(a.postMessage, a)))
										: s.addEventListener &&
											  u(s.postMessage) &&
											  !s.importScripts &&
											  n &&
											  'file:' !== n.protocol &&
											  !p(A)
											? ((i = A), s.addEventListener('message', T, !1))
											: (i =
													S in y('script')
														? function (t) {
																d.appendChild(y('script'))[S] = function () {
																	d.removeChild(this), P(t)
																}
															}
														: function (t) {
																setTimeout(L(t), 0)
															})),
							(t.exports = { set: g, clear: w })
					},
					1240: (t, e, r) => {
						var n = r(9504)
						t.exports = n((1).valueOf)
					},
					5610: (t, e, r) => {
						var n = r(1291),
							i = Math.max,
							o = Math.min
						t.exports = function (t, e) {
							var r = n(t)
							return r < 0 ? i(r + e, 0) : o(r, e)
						}
					},
					5397: (t, e, r) => {
						var n = r(7055),
							i = r(7750)
						t.exports = function (t) {
							return n(i(t))
						}
					},
					1291: (t, e, r) => {
						var n = r(741)
						t.exports = function (t) {
							var e = +t
							return e != e || 0 === e ? 0 : n(e)
						}
					},
					8014: (t, e, r) => {
						var n = r(1291),
							i = Math.min
						t.exports = function (t) {
							var e = n(t)
							return e > 0 ? i(e, 9007199254740991) : 0
						}
					},
					8981: (t, e, r) => {
						var n = r(7750),
							i = Object
						t.exports = function (t) {
							return i(n(t))
						}
					},
					2777: (t, e, r) => {
						var n = r(9565),
							i = r(34),
							o = r(757),
							a = r(5966),
							s = r(4270),
							l = r(8227),
							c = TypeError,
							u = l('toPrimitive')
						t.exports = function (t, e) {
							if (!i(t) || o(t)) return t
							var r,
								l = a(t, u)
							if (l) {
								if (
									(void 0 === e && (e = 'default'),
									(r = n(l, t, e)),
									!i(r) || o(r))
								)
									return r
								throw new c("Can't convert object to primitive value")
							}
							return void 0 === e && (e = 'number'), s(t, e)
						}
					},
					6969: (t, e, r) => {
						var n = r(2777),
							i = r(757)
						t.exports = function (t) {
							var e = n(t, 'string')
							return i(e) ? e : e + ''
						}
					},
					2140: (t, e, r) => {
						var n = {}
						;(n[r(8227)('toStringTag')] = 'z'),
							(t.exports = '[object z]' === String(n))
					},
					655: (t, e, r) => {
						var n = r(6955),
							i = String
						t.exports = function (t) {
							if ('Symbol' === n(t))
								throw new TypeError('Cannot convert a Symbol value to a string')
							return i(t)
						}
					},
					6823: (t) => {
						var e = String
						t.exports = function (t) {
							try {
								return e(t)
							} catch (t) {
								return 'Object'
							}
						}
					},
					3392: (t, e, r) => {
						var n = r(9504),
							i = 0,
							o = Math.random(),
							a = n((1).toString)
						t.exports = function (t) {
							return 'Symbol(' + (void 0 === t ? '' : t) + ')_' + a(++i + o, 36)
						}
					},
					7040: (t, e, r) => {
						var n = r(4495)
						t.exports = n && !Symbol.sham && 'symbol' == typeof Symbol.iterator
					},
					8686: (t, e, r) => {
						var n = r(3724),
							i = r(9039)
						t.exports =
							n &&
							i(function () {
								return (
									42 !==
									Object.defineProperty(function () {}, 'prototype', {
										value: 42,
										writable: !1
									}).prototype
								)
							})
					},
					2812: (t) => {
						var e = TypeError
						t.exports = function (t, r) {
							if (t < r) throw new e('Not enough arguments')
							return t
						}
					},
					8622: (t, e, r) => {
						var n = r(4475),
							i = r(4901),
							o = n.WeakMap
						t.exports = i(o) && /native code/.test(String(o))
					},
					511: (t, e, r) => {
						var n = r(9167),
							i = r(9297),
							o = r(1951),
							a = r(4913).f
						t.exports = function (t) {
							var e = n.Symbol || (n.Symbol = {})
							i(e, t) || a(e, t, { value: o.f(t) })
						}
					},
					1951: (t, e, r) => {
						var n = r(8227)
						e.f = n
					},
					8227: (t, e, r) => {
						var n = r(4475),
							i = r(5745),
							o = r(9297),
							a = r(3392),
							s = r(4495),
							l = r(7040),
							c = n.Symbol,
							u = i('wks'),
							h = l ? c.for || c : (c && c.withoutSetter) || a
						t.exports = function (t) {
							return (
								o(u, t) || (u[t] = s && o(c, t) ? c[t] : h('Symbol.' + t)), u[t]
							)
						}
					},
					7452: (t) => {
						t.exports = '\t\n\v\f\r                　\u2028\u2029\ufeff'
					},
					8706: (t, e, r) => {
						var n = r(6518),
							i = r(9039),
							o = r(4376),
							a = r(34),
							s = r(8981),
							l = r(6198),
							c = r(6837),
							u = r(4659),
							h = r(1469),
							p = r(597),
							d = r(8227),
							f = r(7388),
							y = d('isConcatSpreadable'),
							m =
								f >= 51 ||
								!i(function () {
									var t = []
									return (t[y] = !1), t.concat()[0] !== t
								}),
							v = function (t) {
								if (!a(t)) return !1
								var e = t[y]
								return void 0 !== e ? !!e : o(t)
							}
						n(
							{
								target: 'Array',
								proto: !0,
								arity: 1,
								forced: !m || !p('concat')
							},
							{
								concat: function (t) {
									var e,
										r,
										n,
										i,
										o,
										a = s(this),
										p = h(a, 0),
										d = 0
									for (e = -1, n = arguments.length; e < n; e++)
										if (v((o = -1 === e ? a : arguments[e])))
											for (i = l(o), c(d + i), r = 0; r < i; r++, d++)
												r in o && u(p, d, o[r])
										else c(d + 1), u(p, d++, o)
									return (p.length = d), p
								}
							}
						)
					},
					8431: (t, e, r) => {
						var n = r(6518),
							i = r(9213).every
						n(
							{ target: 'Array', proto: !0, forced: !r(4598)('every') },
							{
								every: function (t) {
									return i(
										this,
										t,
										arguments.length > 1 ? arguments[1] : void 0
									)
								}
							}
						)
					},
					2008: (t, e, r) => {
						var n = r(6518),
							i = r(9213).filter
						n(
							{ target: 'Array', proto: !0, forced: !r(597)('filter') },
							{
								filter: function (t) {
									return i(
										this,
										t,
										arguments.length > 1 ? arguments[1] : void 0
									)
								}
							}
						)
					},
					113: (t, e, r) => {
						var n = r(6518),
							i = r(9213).find,
							o = r(6469),
							a = 'find',
							s = !0
						a in [] &&
							Array(1)[a](function () {
								s = !1
							}),
							n(
								{ target: 'Array', proto: !0, forced: s },
								{
									find: function (t) {
										return i(
											this,
											t,
											arguments.length > 1 ? arguments[1] : void 0
										)
									}
								}
							),
							o(a)
					},
					1629: (t, e, r) => {
						var n = r(6518),
							i = r(235)
						n(
							{ target: 'Array', proto: !0, forced: [].forEach !== i },
							{ forEach: i }
						)
					},
					3418: (t, e, r) => {
						var n = r(6518),
							i = r(7916)
						n(
							{
								target: 'Array',
								stat: !0,
								forced: !r(4428)(function (t) {
									Array.from(t)
								})
							},
							{ from: i }
						)
					},
					4423: (t, e, r) => {
						var n = r(6518),
							i = r(9617).includes,
							o = r(9039),
							a = r(6469)
						n(
							{
								target: 'Array',
								proto: !0,
								forced: o(function () {
									return !Array(1).includes()
								})
							},
							{
								includes: function (t) {
									return i(
										this,
										t,
										arguments.length > 1 ? arguments[1] : void 0
									)
								}
							}
						),
							a('includes')
					},
					5276: (t, e, r) => {
						var n = r(6518),
							i = r(7476),
							o = r(9617).indexOf,
							a = r(4598),
							s = i([].indexOf),
							l = !!s && 1 / s([1], 1, -0) < 0
						n(
							{ target: 'Array', proto: !0, forced: l || !a('indexOf') },
							{
								indexOf: function (t) {
									var e = arguments.length > 1 ? arguments[1] : void 0
									return l ? s(this, t, e) || 0 : o(this, t, e)
								}
							}
						)
					},
					4346: (t, e, r) => {
						r(6518)({ target: 'Array', stat: !0 }, { isArray: r(4376) })
					},
					3792: (t, e, r) => {
						var n = r(5397),
							i = r(6469),
							o = r(6269),
							a = r(1181),
							s = r(4913).f,
							l = r(1088),
							c = r(2529),
							u = r(6395),
							h = r(3724),
							p = 'Array Iterator',
							d = a.set,
							f = a.getterFor(p)
						t.exports = l(
							Array,
							'Array',
							function (t, e) {
								d(this, { type: p, target: n(t), index: 0, kind: e })
							},
							function () {
								var t = f(this),
									e = t.target,
									r = t.index++
								if (!e || r >= e.length)
									return (t.target = void 0), c(void 0, !0)
								switch (t.kind) {
									case 'keys':
										return c(r, !1)
									case 'values':
										return c(e[r], !1)
								}
								return c([r, e[r]], !1)
							},
							'values'
						)
						var y = (o.Arguments = o.Array)
						if (
							(i('keys'),
							i('values'),
							i('entries'),
							!u && h && 'values' !== y.name)
						)
							try {
								s(y, 'name', { value: 'values' })
							} catch (t) {}
					},
					8598: (t, e, r) => {
						var n = r(6518),
							i = r(9504),
							o = r(7055),
							a = r(5397),
							s = r(4598),
							l = i([].join)
						n(
							{
								target: 'Array',
								proto: !0,
								forced: o !== Object || !s('join', ',')
							},
							{
								join: function (t) {
									return l(a(this), void 0 === t ? ',' : t)
								}
							}
						)
					},
					2062: (t, e, r) => {
						var n = r(6518),
							i = r(9213).map
						n(
							{ target: 'Array', proto: !0, forced: !r(597)('map') },
							{
								map: function (t) {
									return i(
										this,
										t,
										arguments.length > 1 ? arguments[1] : void 0
									)
								}
							}
						)
					},
					2712: (t, e, r) => {
						var n = r(6518),
							i = r(926).left,
							o = r(4598),
							a = r(7388)
						n(
							{
								target: 'Array',
								proto: !0,
								forced: (!r(9088) && a > 79 && a < 83) || !o('reduce')
							},
							{
								reduce: function (t) {
									var e = arguments.length
									return i(this, t, e, e > 1 ? arguments[1] : void 0)
								}
							}
						)
					},
					4490: (t, e, r) => {
						var n = r(6518),
							i = r(9504),
							o = r(4376),
							a = i([].reverse),
							s = [1, 2]
						n(
							{
								target: 'Array',
								proto: !0,
								forced: String(s) === String(s.reverse())
							},
							{
								reverse: function () {
									return o(this) && (this.length = this.length), a(this)
								}
							}
						)
					},
					4782: (t, e, r) => {
						var n = r(6518),
							i = r(4376),
							o = r(3517),
							a = r(34),
							s = r(5610),
							l = r(6198),
							c = r(5397),
							u = r(4659),
							h = r(8227),
							p = r(597),
							d = r(7680),
							f = p('slice'),
							y = h('species'),
							m = Array,
							v = Math.max
						n(
							{ target: 'Array', proto: !0, forced: !f },
							{
								slice: function (t, e) {
									var r,
										n,
										h,
										p = c(this),
										f = l(p),
										b = s(t, f),
										g = s(void 0 === e ? f : e, f)
									if (
										i(p) &&
										((r = p.constructor),
										((o(r) && (r === m || i(r.prototype))) ||
											(a(r) && null === (r = r[y]))) &&
											(r = void 0),
										r === m || void 0 === r)
									)
										return d(p, b, g)
									for (
										n = new (void 0 === r ? m : r)(v(g - b, 0)), h = 0;
										b < g;
										b++, h++
									)
										b in p && u(n, h, p[b])
									return (n.length = h), n
								}
							}
						)
					},
					5086: (t, e, r) => {
						var n = r(6518),
							i = r(9213).some
						n(
							{ target: 'Array', proto: !0, forced: !r(4598)('some') },
							{
								some: function (t) {
									return i(
										this,
										t,
										arguments.length > 1 ? arguments[1] : void 0
									)
								}
							}
						)
					},
					6910: (t, e, r) => {
						var n = r(6518),
							i = r(9504),
							o = r(9306),
							a = r(8981),
							s = r(6198),
							l = r(4606),
							c = r(655),
							u = r(9039),
							h = r(4488),
							p = r(4598),
							d = r(8834),
							f = r(3202),
							y = r(7388),
							m = r(9160),
							v = [],
							b = i(v.sort),
							g = i(v.push),
							w = u(function () {
								v.sort(void 0)
							}),
							_ = u(function () {
								v.sort(null)
							}),
							k = p('sort'),
							j = !u(function () {
								if (y) return y < 70
								if (!(d && d > 3)) {
									if (f) return !0
									if (m) return m < 603
									var t,
										e,
										r,
										n,
										i = ''
									for (t = 65; t < 76; t++) {
										switch (((e = String.fromCharCode(t)), t)) {
											case 66:
											case 69:
											case 70:
											case 72:
												r = 3
												break
											case 68:
											case 71:
												r = 4
												break
											default:
												r = 2
										}
										for (n = 0; n < 47; n++) v.push({ k: e + n, v: r })
									}
									for (
										v.sort(function (t, e) {
											return e.v - t.v
										}),
											n = 0;
										n < v.length;
										n++
									)
										(e = v[n].k.charAt(0)),
											i.charAt(i.length - 1) !== e && (i += e)
									return 'DGBEFHACIJK' !== i
								}
							})
						n(
							{ target: 'Array', proto: !0, forced: w || !_ || !k || !j },
							{
								sort: function (t) {
									void 0 !== t && o(t)
									var e = a(this)
									if (j) return void 0 === t ? b(e) : b(e, t)
									var r,
										n,
										i = [],
										u = s(e)
									for (n = 0; n < u; n++) n in e && g(i, e[n])
									for (
										h(
											i,
											(function (t) {
												return function (e, r) {
													return void 0 === r
														? -1
														: void 0 === e
															? 1
															: void 0 !== t
																? +t(e, r) || 0
																: c(e) > c(r)
																	? 1
																	: -1
												}
											})(t)
										),
											r = s(i),
											n = 0;
										n < r;

									)
										e[n] = i[n++]
									for (; n < u; ) l(e, n++)
									return e
								}
							}
						)
					},
					4554: (t, e, r) => {
						var n = r(6518),
							i = r(8981),
							o = r(5610),
							a = r(1291),
							s = r(6198),
							l = r(4527),
							c = r(6837),
							u = r(1469),
							h = r(4659),
							p = r(4606),
							d = r(597)('splice'),
							f = Math.max,
							y = Math.min
						n(
							{ target: 'Array', proto: !0, forced: !d },
							{
								splice: function (t, e) {
									var r,
										n,
										d,
										m,
										v,
										b,
										g = i(this),
										w = s(g),
										_ = o(t, w),
										k = arguments.length
									for (
										0 === k
											? (r = n = 0)
											: 1 === k
												? ((r = 0), (n = w - _))
												: ((r = k - 2), (n = y(f(a(e), 0), w - _))),
											c(w + r - n),
											d = u(g, n),
											m = 0;
										m < n;
										m++
									)
										(v = _ + m) in g && h(d, m, g[v])
									if (((d.length = n), r < n)) {
										for (m = _; m < w - n; m++)
											(b = m + r), (v = m + n) in g ? (g[b] = g[v]) : p(g, b)
										for (m = w; m > w - n + r; m--) p(g, m - 1)
									} else if (r > n)
										for (m = w - n; m > _; m--)
											(b = m + r - 1),
												(v = m + n - 1) in g ? (g[b] = g[v]) : p(g, b)
									for (m = 0; m < r; m++) g[m + _] = arguments[m + 2]
									return l(g, w - n + r), d
								}
							}
						)
					},
					1688: (t, e, r) => {
						var n = r(6518),
							i = r(380)
						n(
							{
								target: 'Date',
								proto: !0,
								forced: Date.prototype.toISOString !== i
							},
							{ toISOString: i }
						)
					},
					739: (t, e, r) => {
						var n = r(6518),
							i = r(9039),
							o = r(8981),
							a = r(2777)
						n(
							{
								target: 'Date',
								proto: !0,
								arity: 1,
								forced: i(function () {
									return (
										null !== new Date(NaN).toJSON() ||
										1 !==
											Date.prototype.toJSON.call({
												toISOString: function () {
													return 1
												}
											})
									)
								})
							},
							{
								toJSON: function (t) {
									var e = o(this),
										r = a(e, 'number')
									return 'number' != typeof r || isFinite(r)
										? e.toISOString()
										: null
								}
							}
						)
					},
					9572: (t, e, r) => {
						var n = r(9297),
							i = r(6840),
							o = r(3640),
							a = r(8227)('toPrimitive'),
							s = Date.prototype
						n(s, a) || i(s, a, o)
					},
					3288: (t, e, r) => {
						var n = r(9504),
							i = r(6840),
							o = Date.prototype,
							a = 'Invalid Date',
							s = 'toString',
							l = n(o[s]),
							c = n(o.getTime)
						String(new Date(NaN)) !== a &&
							i(o, s, function () {
								var t = c(this)
								return t == t ? l(this) : a
							})
					},
					4170: (t, e, r) => {
						var n = r(6518),
							i = r(566)
						n(
							{ target: 'Function', proto: !0, forced: Function.bind !== i },
							{ bind: i }
						)
					},
					2010: (t, e, r) => {
						var n = r(3724),
							i = r(350).EXISTS,
							o = r(9504),
							a = r(2106),
							s = Function.prototype,
							l = o(s.toString),
							c =
								/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,
							u = o(c.exec)
						n &&
							!i &&
							a(s, 'name', {
								configurable: !0,
								get: function () {
									try {
										return u(c, l(this))[1]
									} catch (t) {
										return ''
									}
								}
							})
					},
					3110: (t, e, r) => {
						var n = r(6518),
							i = r(7751),
							o = r(8745),
							a = r(9565),
							s = r(9504),
							l = r(9039),
							c = r(4901),
							u = r(757),
							h = r(7680),
							p = r(6933),
							d = r(4495),
							f = String,
							y = i('JSON', 'stringify'),
							m = s(/./.exec),
							v = s(''.charAt),
							b = s(''.charCodeAt),
							g = s(''.replace),
							w = s((1).toString),
							_ = /[\uD800-\uDFFF]/g,
							k = /^[\uD800-\uDBFF]$/,
							j = /^[\uDC00-\uDFFF]$/,
							O =
								!d ||
								l(function () {
									var t = i('Symbol')('stringify detection')
									return (
										'[null]' !== y([t]) ||
										'{}' !== y({ a: t }) ||
										'{}' !== y(Object(t))
									)
								}),
							x = l(function () {
								return (
									'"\\udf06\\ud834"' !== y('\udf06\ud834') ||
									'"\\udead"' !== y('\udead')
								)
							}),
							C = function (t, e) {
								var r = h(arguments),
									n = p(e)
								if (c(n) || (void 0 !== t && !u(t)))
									return (
										(r[1] = function (t, e) {
											if ((c(n) && (e = a(n, this, f(t), e)), !u(e))) return e
										}),
										o(y, null, r)
									)
							},
							E = function (t, e, r) {
								var n = v(r, e - 1),
									i = v(r, e + 1)
								return (m(k, t) && !m(j, i)) || (m(j, t) && !m(k, n))
									? '\\u' + w(b(t, 0), 16)
									: t
							}
						y &&
							n(
								{ target: 'JSON', stat: !0, arity: 3, forced: O || x },
								{
									stringify: function (t, e, r) {
										var n = h(arguments),
											i = o(O ? C : y, null, n)
										return x && 'string' == typeof i ? g(i, _, E) : i
									}
								}
							)
					},
					4731: (t, e, r) => {
						var n = r(4475)
						r(687)(n.JSON, 'JSON', !0)
					},
					479: (t, e, r) => {
						r(687)(Math, 'Math', !0)
					},
					2892: (t, e, r) => {
						var n = r(6518),
							i = r(6395),
							o = r(3724),
							a = r(4475),
							s = r(9167),
							l = r(9504),
							c = r(2796),
							u = r(9297),
							h = r(3167),
							p = r(1625),
							d = r(757),
							f = r(2777),
							y = r(9039),
							m = r(8480).f,
							v = r(7347).f,
							b = r(4913).f,
							g = r(1240),
							w = r(3802).trim,
							_ = 'Number',
							k = a[_],
							j = s[_],
							O = k.prototype,
							x = a.TypeError,
							C = l(''.slice),
							E = l(''.charCodeAt),
							S = c(_, !k(' 0o1') || !k('0b1') || k('+0x1')),
							P = function (t) {
								var e,
									r =
										arguments.length < 1
											? 0
											: k(
													(function (t) {
														var e = f(t, 'number')
														return 'bigint' == typeof e
															? e
															: (function (t) {
																	var e,
																		r,
																		n,
																		i,
																		o,
																		a,
																		s,
																		l,
																		c = f(t, 'number')
																	if (d(c))
																		throw new x(
																			'Cannot convert a Symbol value to a number'
																		)
																	if ('string' == typeof c && c.length > 2)
																		if (
																			((c = w(c)),
																			43 === (e = E(c, 0)) || 45 === e)
																		) {
																			if (88 === (r = E(c, 2)) || 120 === r)
																				return NaN
																		} else if (48 === e) {
																			switch (E(c, 1)) {
																				case 66:
																				case 98:
																					;(n = 2), (i = 49)
																					break
																				case 79:
																				case 111:
																					;(n = 8), (i = 55)
																					break
																				default:
																					return +c
																			}
																			for (
																				a = (o = C(c, 2)).length, s = 0;
																				s < a;
																				s++
																			)
																				if ((l = E(o, s)) < 48 || l > i)
																					return NaN
																			return parseInt(o, n)
																		}
																	return +c
																})(e)
													})(t)
												)
								return p(O, (e = this)) &&
									y(function () {
										g(e)
									})
									? h(Object(r), this, P)
									: r
							}
						;(P.prototype = O),
							S && !i && (O.constructor = P),
							n(
								{ global: !0, constructor: !0, wrap: !0, forced: S },
								{ Number: P }
							)
						var L = function (t, e) {
							for (
								var r,
									n = o
										? m(e)
										: 'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range'.split(
												','
											),
									i = 0;
								n.length > i;
								i++
							)
								u(e, (r = n[i])) && !u(t, r) && b(t, r, v(e, r))
						}
						i && j && L(s[_], j), (S || i) && L(s[_], k)
					},
					9868: (t, e, r) => {
						var n = r(6518),
							i = r(9504),
							o = r(1291),
							a = r(1240),
							s = r(2333),
							l = r(9039),
							c = RangeError,
							u = String,
							h = Math.floor,
							p = i(s),
							d = i(''.slice),
							f = i((1).toFixed),
							y = function (t, e, r) {
								return 0 === e
									? r
									: e % 2 == 1
										? y(t, e - 1, r * t)
										: y(t * t, e / 2, r)
							},
							m = function (t, e, r) {
								for (var n = -1, i = r; ++n < 6; )
									(i += e * t[n]), (t[n] = i % 1e7), (i = h(i / 1e7))
							},
							v = function (t, e) {
								for (var r = 6, n = 0; --r >= 0; )
									(n += t[r]), (t[r] = h(n / e)), (n = (n % e) * 1e7)
							},
							b = function (t) {
								for (var e = 6, r = ''; --e >= 0; )
									if ('' !== r || 0 === e || 0 !== t[e]) {
										var n = u(t[e])
										r = '' === r ? n : r + p('0', 7 - n.length) + n
									}
								return r
							}
						n(
							{
								target: 'Number',
								proto: !0,
								forced:
									l(function () {
										return (
											'0.000' !== f(8e-5, 3) ||
											'1' !== f(0.9, 0) ||
											'1.25' !== f(1.255, 2) ||
											'1000000000000000128' !== f(0xde0b6b3a7640080, 0)
										)
									}) ||
									!l(function () {
										f({})
									})
							},
							{
								toFixed: function (t) {
									var e,
										r,
										n,
										i,
										s = a(this),
										l = o(t),
										h = [0, 0, 0, 0, 0, 0],
										f = '',
										g = '0'
									if (l < 0 || l > 20) throw new c('Incorrect fraction digits')
									if (s != s) return 'NaN'
									if (s <= -1e21 || s >= 1e21) return u(s)
									if ((s < 0 && ((f = '-'), (s = -s)), s > 1e-21))
										if (
											((r =
												(e =
													(function (t) {
														for (var e = 0, r = t; r >= 4096; )
															(e += 12), (r /= 4096)
														for (; r >= 2; ) (e += 1), (r /= 2)
														return e
													})(s * y(2, 69, 1)) - 69) < 0
													? s * y(2, -e, 1)
													: s / y(2, e, 1)),
											(r *= 4503599627370496),
											(e = 52 - e) > 0)
										) {
											for (m(h, 0, r), n = l; n >= 7; ) m(h, 1e7, 0), (n -= 7)
											for (m(h, y(10, n, 1), 0), n = e - 1; n >= 23; )
												v(h, 1 << 23), (n -= 23)
											v(h, 1 << n), m(h, 1, 1), v(h, 2), (g = b(h))
										} else m(h, 0, r), m(h, 1 << -e, 0), (g = b(h) + p('0', l))
									return l > 0
										? f +
												((i = g.length) <= l
													? '0.' + p('0', l - i) + g
													: d(g, 0, i - l) + '.' + d(g, i - l))
										: f + g
								}
							}
						)
					},
					9085: (t, e, r) => {
						var n = r(6518),
							i = r(4213)
						n(
							{
								target: 'Object',
								stat: !0,
								arity: 2,
								forced: Object.assign !== i
							},
							{ assign: i }
						)
					},
					9904: (t, e, r) => {
						r(6518)(
							{ target: 'Object', stat: !0, sham: !r(3724) },
							{ create: r(2360) }
						)
					},
					7945: (t, e, r) => {
						var n = r(6518),
							i = r(3724),
							o = r(6801).f
						n(
							{
								target: 'Object',
								stat: !0,
								forced: Object.defineProperties !== o,
								sham: !i
							},
							{ defineProperties: o }
						)
					},
					4185: (t, e, r) => {
						var n = r(6518),
							i = r(3724),
							o = r(4913).f
						n(
							{
								target: 'Object',
								stat: !0,
								forced: Object.defineProperty !== o,
								sham: !i
							},
							{ defineProperty: o }
						)
					},
					5506: (t, e, r) => {
						var n = r(6518),
							i = r(2357).entries
						n(
							{ target: 'Object', stat: !0 },
							{
								entries: function (t) {
									return i(t)
								}
							}
						)
					},
					3851: (t, e, r) => {
						var n = r(6518),
							i = r(9039),
							o = r(5397),
							a = r(7347).f,
							s = r(3724)
						n(
							{
								target: 'Object',
								stat: !0,
								forced:
									!s ||
									i(function () {
										a(1)
									}),
								sham: !s
							},
							{
								getOwnPropertyDescriptor: function (t, e) {
									return a(o(t), e)
								}
							}
						)
					},
					1278: (t, e, r) => {
						var n = r(6518),
							i = r(3724),
							o = r(5031),
							a = r(5397),
							s = r(7347),
							l = r(4659)
						n(
							{ target: 'Object', stat: !0, sham: !i },
							{
								getOwnPropertyDescriptors: function (t) {
									for (
										var e, r, n = a(t), i = s.f, c = o(n), u = {}, h = 0;
										c.length > h;

									)
										void 0 !== (r = i(n, (e = c[h++]))) && l(u, e, r)
									return u
								}
							}
						)
					},
					9773: (t, e, r) => {
						var n = r(6518),
							i = r(4495),
							o = r(9039),
							a = r(3717),
							s = r(8981)
						n(
							{
								target: 'Object',
								stat: !0,
								forced:
									!i ||
									o(function () {
										a.f(1)
									})
							},
							{
								getOwnPropertySymbols: function (t) {
									var e = a.f
									return e ? e(s(t)) : []
								}
							}
						)
					},
					875: (t, e, r) => {
						var n = r(6518),
							i = r(9039),
							o = r(8981),
							a = r(2787),
							s = r(2211)
						n(
							{
								target: 'Object',
								stat: !0,
								forced: i(function () {
									a(1)
								}),
								sham: !s
							},
							{
								getPrototypeOf: function (t) {
									return a(o(t))
								}
							}
						)
					},
					9432: (t, e, r) => {
						var n = r(6518),
							i = r(8981),
							o = r(1072)
						n(
							{
								target: 'Object',
								stat: !0,
								forced: r(9039)(function () {
									o(1)
								})
							},
							{
								keys: function (t) {
									return o(i(t))
								}
							}
						)
					},
					287: (t, e, r) => {
						r(6518)({ target: 'Object', stat: !0 }, { setPrototypeOf: r(2967) })
					},
					6099: (t, e, r) => {
						var n = r(2140),
							i = r(6840),
							o = r(3179)
						n || i(Object.prototype, 'toString', o, { unsafe: !0 })
					},
					6034: (t, e, r) => {
						var n = r(6518),
							i = r(2357).values
						n(
							{ target: 'Object', stat: !0 },
							{
								values: function (t) {
									return i(t)
								}
							}
						)
					},
					8459: (t, e, r) => {
						var n = r(6518),
							i = r(3904)
						n({ global: !0, forced: parseFloat !== i }, { parseFloat: i })
					},
					8940: (t, e, r) => {
						var n = r(6518),
							i = r(2703)
						n({ global: !0, forced: parseInt !== i }, { parseInt: i })
					},
					6499: (t, e, r) => {
						var n = r(6518),
							i = r(9565),
							o = r(9306),
							a = r(6043),
							s = r(1103),
							l = r(2652)
						n(
							{ target: 'Promise', stat: !0, forced: r(537) },
							{
								all: function (t) {
									var e = this,
										r = a.f(e),
										n = r.resolve,
										c = r.reject,
										u = s(function () {
											var r = o(e.resolve),
												a = [],
												s = 0,
												u = 1
											l(t, function (t) {
												var o = s++,
													l = !1
												u++,
													i(r, e, t).then(function (t) {
														l || ((l = !0), (a[o] = t), --u || n(a))
													}, c)
											}),
												--u || n(a)
										})
									return u.error && c(u.value), r.promise
								}
							}
						)
					},
					2003: (t, e, r) => {
						var n = r(6518),
							i = r(6395),
							o = r(916).CONSTRUCTOR,
							a = r(550),
							s = r(7751),
							l = r(4901),
							c = r(6840),
							u = a && a.prototype
						if (
							(n(
								{ target: 'Promise', proto: !0, forced: o, real: !0 },
								{
									catch: function (t) {
										return this.then(void 0, t)
									}
								}
							),
							!i && l(a))
						) {
							var h = s('Promise').prototype.catch
							u.catch !== h && c(u, 'catch', h, { unsafe: !0 })
						}
					},
					436: (t, e, r) => {
						var n,
							i,
							o,
							a = r(6518),
							s = r(6395),
							l = r(9088),
							c = r(4475),
							u = r(9565),
							h = r(6840),
							p = r(2967),
							d = r(687),
							f = r(7633),
							y = r(9306),
							m = r(4901),
							v = r(34),
							b = r(679),
							g = r(2293),
							w = r(9225).set,
							_ = r(1955),
							k = r(3138),
							j = r(1103),
							O = r(8265),
							x = r(1181),
							C = r(550),
							E = r(916),
							S = r(6043),
							P = 'Promise',
							L = E.CONSTRUCTOR,
							T = E.REJECTION_EVENT,
							A = E.SUBCLASSING,
							R = x.getterFor(P),
							I = x.set,
							B = C && C.prototype,
							N = C,
							D = B,
							F = c.TypeError,
							V = c.document,
							H = c.process,
							z = S.f,
							M = z,
							q = !!(V && V.createEvent && c.dispatchEvent),
							U = 'unhandledrejection',
							G = function (t) {
								var e
								return !(!v(t) || !m((e = t.then))) && e
							},
							$ = function (t, e) {
								var r,
									n,
									i,
									o = e.value,
									a = 1 === e.state,
									s = a ? t.ok : t.fail,
									l = t.resolve,
									c = t.reject,
									h = t.domain
								try {
									s
										? (a || (2 === e.rejection && Q(e), (e.rejection = 1)),
											!0 === s
												? (r = o)
												: (h && h.enter(),
													(r = s(o)),
													h && (h.exit(), (i = !0))),
											r === t.promise
												? c(new F('Promise-chain cycle'))
												: (n = G(r))
													? u(n, r, l, c)
													: l(r))
										: c(o)
								} catch (t) {
									h && !i && h.exit(), c(t)
								}
							},
							J = function (t, e) {
								t.notified ||
									((t.notified = !0),
									_(function () {
										for (var r, n = t.reactions; (r = n.get()); ) $(r, t)
										;(t.notified = !1), e && !t.rejection && Z(t)
									}))
							},
							W = function (t, e, r) {
								var n, i
								q
									? (((n = V.createEvent('Event')).promise = e),
										(n.reason = r),
										n.initEvent(t, !1, !0),
										c.dispatchEvent(n))
									: (n = { promise: e, reason: r }),
									!T && (i = c['on' + t])
										? i(n)
										: t === U && k('Unhandled promise rejection', r)
							},
							Z = function (t) {
								u(w, c, function () {
									var e,
										r = t.facade,
										n = t.value
									if (
										Y(t) &&
										((e = j(function () {
											l ? H.emit('unhandledRejection', n, r) : W(U, r, n)
										})),
										(t.rejection = l || Y(t) ? 2 : 1),
										e.error)
									)
										throw e.value
								})
							},
							Y = function (t) {
								return 1 !== t.rejection && !t.parent
							},
							Q = function (t) {
								u(w, c, function () {
									var e = t.facade
									l
										? H.emit('rejectionHandled', e)
										: W('rejectionhandled', e, t.value)
								})
							},
							K = function (t, e, r) {
								return function (n) {
									t(e, n, r)
								}
							},
							X = function (t, e, r) {
								t.done ||
									((t.done = !0),
									r && (t = r),
									(t.value = e),
									(t.state = 2),
									J(t, !0))
							},
							tt = function (t, e, r) {
								if (!t.done) {
									;(t.done = !0), r && (t = r)
									try {
										if (t.facade === e)
											throw new F("Promise can't be resolved itself")
										var n = G(e)
										n
											? _(function () {
													var r = { done: !1 }
													try {
														u(n, e, K(tt, r, t), K(X, r, t))
													} catch (e) {
														X(r, e, t)
													}
												})
											: ((t.value = e), (t.state = 1), J(t, !1))
									} catch (e) {
										X({ done: !1 }, e, t)
									}
								}
							}
						if (
							L &&
							((D = (N = function (t) {
								b(this, D), y(t), u(n, this)
								var e = R(this)
								try {
									t(K(tt, e), K(X, e))
								} catch (t) {
									X(e, t)
								}
							}).prototype),
							((n = function (t) {
								I(this, {
									type: P,
									done: !1,
									notified: !1,
									parent: !1,
									reactions: new O(),
									rejection: !1,
									state: 0,
									value: void 0
								})
							}).prototype = h(D, 'then', function (t, e) {
								var r = R(this),
									n = z(g(this, N))
								return (
									(r.parent = !0),
									(n.ok = !m(t) || t),
									(n.fail = m(e) && e),
									(n.domain = l ? H.domain : void 0),
									0 === r.state
										? r.reactions.add(n)
										: _(function () {
												$(n, r)
											}),
									n.promise
								)
							})),
							(i = function () {
								var t = new n(),
									e = R(t)
								;(this.promise = t),
									(this.resolve = K(tt, e)),
									(this.reject = K(X, e))
							}),
							(S.f = z =
								function (t) {
									return t === N || void 0 === t ? new i(t) : M(t)
								}),
							!s && m(C) && B !== Object.prototype)
						) {
							;(o = B.then),
								A ||
									h(
										B,
										'then',
										function (t, e) {
											var r = this
											return new N(function (t, e) {
												u(o, r, t, e)
											}).then(t, e)
										},
										{ unsafe: !0 }
									)
							try {
								delete B.constructor
							} catch (t) {}
							p && p(B, D)
						}
						a(
							{ global: !0, constructor: !0, wrap: !0, forced: L },
							{ Promise: N }
						),
							d(N, P, !1, !0),
							f(P)
					},
					3362: (t, e, r) => {
						r(436), r(6499), r(2003), r(7743), r(1481), r(280)
					},
					7743: (t, e, r) => {
						var n = r(6518),
							i = r(9565),
							o = r(9306),
							a = r(6043),
							s = r(1103),
							l = r(2652)
						n(
							{ target: 'Promise', stat: !0, forced: r(537) },
							{
								race: function (t) {
									var e = this,
										r = a.f(e),
										n = r.reject,
										c = s(function () {
											var a = o(e.resolve)
											l(t, function (t) {
												i(a, e, t).then(r.resolve, n)
											})
										})
									return c.error && n(c.value), r.promise
								}
							}
						)
					},
					1481: (t, e, r) => {
						var n = r(6518),
							i = r(6043)
						n(
							{ target: 'Promise', stat: !0, forced: r(916).CONSTRUCTOR },
							{
								reject: function (t) {
									var e = i.f(this)
									return (0, e.reject)(t), e.promise
								}
							}
						)
					},
					280: (t, e, r) => {
						var n = r(6518),
							i = r(7751),
							o = r(6395),
							a = r(550),
							s = r(916).CONSTRUCTOR,
							l = r(3438),
							c = i('Promise'),
							u = o && !s
						n(
							{ target: 'Promise', stat: !0, forced: o || s },
							{
								resolve: function (t) {
									return l(u && this === c ? a : this, t)
								}
							}
						)
					},
					825: (t, e, r) => {
						var n = r(6518),
							i = r(7751),
							o = r(8745),
							a = r(566),
							s = r(5548),
							l = r(8551),
							c = r(34),
							u = r(2360),
							h = r(9039),
							p = i('Reflect', 'construct'),
							d = Object.prototype,
							f = [].push,
							y = h(function () {
								function t() {}
								return !(p(function () {}, [], t) instanceof t)
							}),
							m = !h(function () {
								p(function () {})
							}),
							v = y || m
						n(
							{ target: 'Reflect', stat: !0, forced: v, sham: v },
							{
								construct: function (t, e) {
									s(t), l(e)
									var r = arguments.length < 3 ? t : s(arguments[2])
									if (m && !y) return p(t, e, r)
									if (t === r) {
										switch (e.length) {
											case 0:
												return new t()
											case 1:
												return new t(e[0])
											case 2:
												return new t(e[0], e[1])
											case 3:
												return new t(e[0], e[1], e[2])
											case 4:
												return new t(e[0], e[1], e[2], e[3])
										}
										var n = [null]
										return o(f, n, e), new (o(a, t, n))()
									}
									var i = r.prototype,
										h = u(c(i) ? i : d),
										v = o(t, h, e)
									return c(v) ? v : h
								}
							}
						)
					},
					888: (t, e, r) => {
						var n = r(6518),
							i = r(9565),
							o = r(34),
							a = r(8551),
							s = r(6575),
							l = r(7347),
							c = r(2787)
						n(
							{ target: 'Reflect', stat: !0 },
							{
								get: function t(e, r) {
									var n,
										u,
										h = arguments.length < 3 ? e : arguments[2]
									return a(e) === h
										? e[r]
										: (n = l.f(e, r))
											? s(n)
												? n.value
												: void 0 === n.get
													? void 0
													: i(n.get, h)
											: o((u = c(e)))
												? t(u, r, h)
												: void 0
								}
							}
						)
					},
					4864: (t, e, r) => {
						var n = r(3724),
							i = r(4475),
							o = r(9504),
							a = r(2796),
							s = r(3167),
							l = r(6699),
							c = r(2360),
							u = r(8480).f,
							h = r(1625),
							p = r(788),
							d = r(655),
							f = r(1034),
							y = r(8429),
							m = r(1056),
							v = r(6840),
							b = r(9039),
							g = r(9297),
							w = r(1181).enforce,
							_ = r(7633),
							k = r(8227),
							j = r(3635),
							O = r(8814),
							x = k('match'),
							C = i.RegExp,
							E = C.prototype,
							S = i.SyntaxError,
							P = o(E.exec),
							L = o(''.charAt),
							T = o(''.replace),
							A = o(''.indexOf),
							R = o(''.slice),
							I = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,
							B = /a/g,
							N = /a/g,
							D = new C(B) !== B,
							F = y.MISSED_STICKY,
							V = y.UNSUPPORTED_Y
						if (
							a(
								'RegExp',
								n &&
									(!D ||
										F ||
										j ||
										O ||
										b(function () {
											return (
												(N[x] = !1),
												C(B) !== B || C(N) === N || '/a/i' !== String(C(B, 'i'))
											)
										}))
							)
						) {
							for (
								var H = function (t, e) {
										var r,
											n,
											i,
											o,
											a,
											u,
											y = h(E, this),
											m = p(t),
											v = void 0 === e,
											b = [],
											_ = t
										if (!y && m && v && t.constructor === H) return t
										if (
											((m || h(E, t)) && ((t = t.source), v && (e = f(_))),
											(t = void 0 === t ? '' : d(t)),
											(e = void 0 === e ? '' : d(e)),
											(_ = t),
											j &&
												('dotAll' in B) &&
												(n = !!e && A(e, 's') > -1) &&
												(e = T(e, /s/g, '')),
											(r = e),
											F &&
												('sticky' in B) &&
												(i = !!e && A(e, 'y') > -1) &&
												V &&
												(e = T(e, /y/g, '')),
											O &&
												((o = (function (t) {
													for (
														var e,
															r = t.length,
															n = 0,
															i = '',
															o = [],
															a = c(null),
															s = !1,
															l = !1,
															u = 0,
															h = '';
														n <= r;
														n++
													) {
														if ('\\' === (e = L(t, n))) e += L(t, ++n)
														else if (']' === e) s = !1
														else if (!s)
															switch (!0) {
																case '[' === e:
																	s = !0
																	break
																case '(' === e:
																	P(I, R(t, n + 1)) && ((n += 2), (l = !0)),
																		(i += e),
																		u++
																	continue
																case '>' === e && l:
																	if ('' === h || g(a, h))
																		throw new S('Invalid capture group name')
																	;(a[h] = !0),
																		(o[o.length] = [h, u]),
																		(l = !1),
																		(h = '')
																	continue
															}
														l ? (h += e) : (i += e)
													}
													return [i, o]
												})(t)),
												(t = o[0]),
												(b = o[1])),
											(a = s(C(t, e), y ? this : E, H)),
											(n || i || b.length) &&
												((u = w(a)),
												n &&
													((u.dotAll = !0),
													(u.raw = H(
														(function (t) {
															for (
																var e, r = t.length, n = 0, i = '', o = !1;
																n <= r;
																n++
															)
																'\\' !== (e = L(t, n))
																	? o || '.' !== e
																		? ('[' === e
																				? (o = !0)
																				: ']' === e && (o = !1),
																			(i += e))
																		: (i += '[\\s\\S]')
																	: (i += e + L(t, ++n))
															return i
														})(t),
														r
													))),
												i && (u.sticky = !0),
												b.length && (u.groups = b)),
											t !== _)
										)
											try {
												l(a, 'source', '' === _ ? '(?:)' : _)
											} catch (t) {}
										return a
									},
									z = u(C),
									M = 0;
								z.length > M;

							)
								m(H, C, z[M++])
							;(E.constructor = H),
								(H.prototype = E),
								v(i, 'RegExp', H, { constructor: !0 })
						}
						_('RegExp')
					},
					7495: (t, e, r) => {
						var n = r(6518),
							i = r(7323)
						n(
							{ target: 'RegExp', proto: !0, forced: /./.exec !== i },
							{ exec: i }
						)
					},
					8781: (t, e, r) => {
						var n = r(350).PROPER,
							i = r(6840),
							o = r(8551),
							a = r(655),
							s = r(9039),
							l = r(1034),
							c = 'toString',
							u = RegExp.prototype,
							h = u[c],
							p = s(function () {
								return '/a/b' !== h.call({ source: 'a', flags: 'b' })
							}),
							d = n && h.name !== c
						;(p || d) &&
							i(
								u,
								c,
								function () {
									var t = o(this)
									return '/' + a(t.source) + '/' + a(l(t))
								},
								{ unsafe: !0 }
							)
					},
					1699: (t, e, r) => {
						var n = r(6518),
							i = r(9504),
							o = r(5749),
							a = r(7750),
							s = r(655),
							l = r(1436),
							c = i(''.indexOf)
						n(
							{ target: 'String', proto: !0, forced: !l('includes') },
							{
								includes: function (t) {
									return !!~c(
										s(a(this)),
										s(o(t)),
										arguments.length > 1 ? arguments[1] : void 0
									)
								}
							}
						)
					},
					7764: (t, e, r) => {
						var n = r(8183).charAt,
							i = r(655),
							o = r(1181),
							a = r(1088),
							s = r(2529),
							l = 'String Iterator',
							c = o.set,
							u = o.getterFor(l)
						a(
							String,
							'String',
							function (t) {
								c(this, { type: l, string: i(t), index: 0 })
							},
							function () {
								var t,
									e = u(this),
									r = e.string,
									i = e.index
								return i >= r.length
									? s(void 0, !0)
									: ((t = n(r, i)), (e.index += t.length), s(t, !1))
							}
						)
					},
					1761: (t, e, r) => {
						var n = r(9565),
							i = r(9228),
							o = r(8551),
							a = r(4117),
							s = r(8014),
							l = r(655),
							c = r(7750),
							u = r(5966),
							h = r(7829),
							p = r(6682)
						i('match', function (t, e, r) {
							return [
								function (e) {
									var r = c(this),
										i = a(e) ? void 0 : u(e, t)
									return i ? n(i, e, r) : new RegExp(e)[t](l(r))
								},
								function (t) {
									var n = o(this),
										i = l(t),
										a = r(e, n, i)
									if (a.done) return a.value
									if (!n.global) return p(n, i)
									var c = n.unicode
									n.lastIndex = 0
									for (var u, d = [], f = 0; null !== (u = p(n, i)); ) {
										var y = l(u[0])
										;(d[f] = y),
											'' === y && (n.lastIndex = h(i, s(n.lastIndex), c)),
											f++
									}
									return 0 === f ? null : d
								}
							]
						})
					},
					5440: (t, e, r) => {
						var n = r(8745),
							i = r(9565),
							o = r(9504),
							a = r(9228),
							s = r(9039),
							l = r(8551),
							c = r(4901),
							u = r(4117),
							h = r(1291),
							p = r(8014),
							d = r(655),
							f = r(7750),
							y = r(7829),
							m = r(5966),
							v = r(2478),
							b = r(6682),
							g = r(8227)('replace'),
							w = Math.max,
							_ = Math.min,
							k = o([].concat),
							j = o([].push),
							O = o(''.indexOf),
							x = o(''.slice),
							C = '$0' === 'a'.replace(/./, '$0'),
							E = !!/./[g] && '' === /./[g]('a', '$0')
						a(
							'replace',
							function (t, e, r) {
								var o = E ? '$' : '$0'
								return [
									function (t, r) {
										var n = f(this),
											o = u(t) ? void 0 : m(t, g)
										return o ? i(o, t, n, r) : i(e, d(n), t, r)
									},
									function (t, i) {
										var a = l(this),
											s = d(t)
										if (
											'string' == typeof i &&
											-1 === O(i, o) &&
											-1 === O(i, '$<')
										) {
											var u = r(e, a, s, i)
											if (u.done) return u.value
										}
										var f = c(i)
										f || (i = d(i))
										var m,
											g = a.global
										g && ((m = a.unicode), (a.lastIndex = 0))
										for (
											var C, E = [];
											null !== (C = b(a, s)) && (j(E, C), g);

										)
											'' === d(C[0]) && (a.lastIndex = y(s, p(a.lastIndex), m))
										for (var S, P = '', L = 0, T = 0; T < E.length; T++) {
											for (
												var A,
													R = d((C = E[T])[0]),
													I = w(_(h(C.index), s.length), 0),
													B = [],
													N = 1;
												N < C.length;
												N++
											)
												j(B, void 0 === (S = C[N]) ? S : String(S))
											var D = C.groups
											if (f) {
												var F = k([R], B, I, s)
												void 0 !== D && j(F, D), (A = d(n(i, void 0, F)))
											} else A = v(R, s, I, B, D, i)
											I >= L && ((P += x(s, L, I) + A), (L = I + R.length))
										}
										return P + x(s, L)
									}
								]
							},
							!!s(function () {
								var t = /./
								return (
									(t.exec = function () {
										var t = []
										return (t.groups = { a: '7' }), t
									}),
									'7' !== ''.replace(t, '$<a>')
								)
							}) ||
								!C ||
								E
						)
					},
					1392: (t, e, r) => {
						var n,
							i = r(6518),
							o = r(7476),
							a = r(7347).f,
							s = r(8014),
							l = r(655),
							c = r(5749),
							u = r(7750),
							h = r(1436),
							p = r(6395),
							d = o(''.slice),
							f = Math.min,
							y = h('startsWith')
						i(
							{
								target: 'String',
								proto: !0,
								forced: !(
									(!p &&
										!y &&
										((n = a(String.prototype, 'startsWith')),
										n && !n.writable)) ||
									y
								)
							},
							{
								startsWith: function (t) {
									var e = l(u(this))
									c(t)
									var r = s(
											f(arguments.length > 1 ? arguments[1] : void 0, e.length)
										),
										n = l(t)
									return d(e, r, r + n.length) === n
								}
							}
						)
					},
					2762: (t, e, r) => {
						var n = r(6518),
							i = r(3802).trim
						n(
							{ target: 'String', proto: !0, forced: r(706)('trim') },
							{
								trim: function () {
									return i(this)
								}
							}
						)
					},
					6412: (t, e, r) => {
						r(511)('asyncIterator')
					},
					6761: (t, e, r) => {
						var n = r(6518),
							i = r(4475),
							o = r(9565),
							a = r(9504),
							s = r(6395),
							l = r(3724),
							c = r(4495),
							u = r(9039),
							h = r(9297),
							p = r(1625),
							d = r(8551),
							f = r(5397),
							y = r(6969),
							m = r(655),
							v = r(6980),
							b = r(2360),
							g = r(1072),
							w = r(8480),
							_ = r(298),
							k = r(3717),
							j = r(7347),
							O = r(4913),
							x = r(6801),
							C = r(8773),
							E = r(6840),
							S = r(2106),
							P = r(5745),
							L = r(6119),
							T = r(421),
							A = r(3392),
							R = r(8227),
							I = r(1951),
							B = r(511),
							N = r(8242),
							D = r(687),
							F = r(1181),
							V = r(9213).forEach,
							H = L('hidden'),
							z = 'Symbol',
							M = 'prototype',
							q = F.set,
							U = F.getterFor(z),
							G = Object[M],
							$ = i.Symbol,
							J = $ && $[M],
							W = i.RangeError,
							Z = i.TypeError,
							Y = i.QObject,
							Q = j.f,
							K = O.f,
							X = _.f,
							tt = C.f,
							et = a([].push),
							rt = P('symbols'),
							nt = P('op-symbols'),
							it = P('wks'),
							ot = !Y || !Y[M] || !Y[M].findChild,
							at = function (t, e, r) {
								var n = Q(G, e)
								n && delete G[e], K(t, e, r), n && t !== G && K(G, e, n)
							},
							st =
								l &&
								u(function () {
									return (
										7 !==
										b(
											K({}, 'a', {
												get: function () {
													return K(this, 'a', { value: 7 }).a
												}
											})
										).a
									)
								})
									? at
									: K,
							lt = function (t, e) {
								var r = (rt[t] = b(J))
								return (
									q(r, { type: z, tag: t, description: e }),
									l || (r.description = e),
									r
								)
							},
							ct = function (t, e, r) {
								t === G && ct(nt, e, r), d(t)
								var n = y(e)
								return (
									d(r),
									h(rt, n)
										? (r.enumerable
												? (h(t, H) && t[H][n] && (t[H][n] = !1),
													(r = b(r, { enumerable: v(0, !1) })))
												: (h(t, H) || K(t, H, v(1, b(null))), (t[H][n] = !0)),
											st(t, n, r))
										: K(t, n, r)
								)
							},
							ut = function (t, e) {
								d(t)
								var r = f(e),
									n = g(r).concat(ft(r))
								return (
									V(n, function (e) {
										;(l && !o(ht, r, e)) || ct(t, e, r[e])
									}),
									t
								)
							},
							ht = function (t) {
								var e = y(t),
									r = o(tt, this, e)
								return (
									!(this === G && h(rt, e) && !h(nt, e)) &&
									(!(
										r ||
										!h(this, e) ||
										!h(rt, e) ||
										(h(this, H) && this[H][e])
									) ||
										r)
								)
							},
							pt = function (t, e) {
								var r = f(t),
									n = y(e)
								if (r !== G || !h(rt, n) || h(nt, n)) {
									var i = Q(r, n)
									return (
										!i ||
											!h(rt, n) ||
											(h(r, H) && r[H][n]) ||
											(i.enumerable = !0),
										i
									)
								}
							},
							dt = function (t) {
								var e = X(f(t)),
									r = []
								return (
									V(e, function (t) {
										h(rt, t) || h(T, t) || et(r, t)
									}),
									r
								)
							},
							ft = function (t) {
								var e = t === G,
									r = X(e ? nt : f(t)),
									n = []
								return (
									V(r, function (t) {
										!h(rt, t) || (e && !h(G, t)) || et(n, rt[t])
									}),
									n
								)
							}
						c ||
							(E(
								(J = ($ = function () {
									if (p(J, this)) throw new Z('Symbol is not a constructor')
									var t =
											arguments.length && void 0 !== arguments[0]
												? m(arguments[0])
												: void 0,
										e = A(t),
										r = function (t) {
											var n = void 0 === this ? i : this
											n === G && o(r, nt, t),
												h(n, H) && h(n[H], e) && (n[H][e] = !1)
											var a = v(1, t)
											try {
												st(n, e, a)
											} catch (t) {
												if (!(t instanceof W)) throw t
												at(n, e, a)
											}
										}
									return (
										l && ot && st(G, e, { configurable: !0, set: r }), lt(e, t)
									)
								})[M]),
								'toString',
								function () {
									return U(this).tag
								}
							),
							E($, 'withoutSetter', function (t) {
								return lt(A(t), t)
							}),
							(C.f = ht),
							(O.f = ct),
							(x.f = ut),
							(j.f = pt),
							(w.f = _.f = dt),
							(k.f = ft),
							(I.f = function (t) {
								return lt(R(t), t)
							}),
							l &&
								(S(J, 'description', {
									configurable: !0,
									get: function () {
										return U(this).description
									}
								}),
								s || E(G, 'propertyIsEnumerable', ht, { unsafe: !0 }))),
							n(
								{ global: !0, constructor: !0, wrap: !0, forced: !c, sham: !c },
								{ Symbol: $ }
							),
							V(g(it), function (t) {
								B(t)
							}),
							n(
								{ target: z, stat: !0, forced: !c },
								{
									useSetter: function () {
										ot = !0
									},
									useSimple: function () {
										ot = !1
									}
								}
							),
							n(
								{ target: 'Object', stat: !0, forced: !c, sham: !l },
								{
									create: function (t, e) {
										return void 0 === e ? b(t) : ut(b(t), e)
									},
									defineProperty: ct,
									defineProperties: ut,
									getOwnPropertyDescriptor: pt
								}
							),
							n(
								{ target: 'Object', stat: !0, forced: !c },
								{ getOwnPropertyNames: dt }
							),
							N(),
							D($, z),
							(T[H] = !0)
					},
					9463: (t, e, r) => {
						var n = r(6518),
							i = r(3724),
							o = r(4475),
							a = r(9504),
							s = r(9297),
							l = r(4901),
							c = r(1625),
							u = r(655),
							h = r(2106),
							p = r(7740),
							d = o.Symbol,
							f = d && d.prototype
						if (
							i &&
							l(d) &&
							(!('description' in f) || void 0 !== d().description)
						) {
							var y = {},
								m = function () {
									var t =
											arguments.length < 1 || void 0 === arguments[0]
												? void 0
												: u(arguments[0]),
										e = c(f, this) ? new d(t) : void 0 === t ? d() : d(t)
									return '' === t && (y[e] = !0), e
								}
							p(m, d), (m.prototype = f), (f.constructor = m)
							var v =
									'Symbol(description detection)' ===
									String(d('description detection')),
								b = a(f.valueOf),
								g = a(f.toString),
								w = /^Symbol\((.*)\)[^)]+$/,
								_ = a(''.replace),
								k = a(''.slice)
							h(f, 'description', {
								configurable: !0,
								get: function () {
									var t = b(this)
									if (s(y, t)) return ''
									var e = g(t),
										r = v ? k(e, 7, -1) : _(e, w, '$1')
									return '' === r ? void 0 : r
								}
							}),
								n({ global: !0, constructor: !0, forced: !0 }, { Symbol: m })
						}
					},
					1510: (t, e, r) => {
						var n = r(6518),
							i = r(7751),
							o = r(9297),
							a = r(655),
							s = r(5745),
							l = r(1296),
							c = s('string-to-symbol-registry'),
							u = s('symbol-to-string-registry')
						n(
							{ target: 'Symbol', stat: !0, forced: !l },
							{
								for: function (t) {
									var e = a(t)
									if (o(c, e)) return c[e]
									var r = i('Symbol')(e)
									return (c[e] = r), (u[r] = e), r
								}
							}
						)
					},
					2259: (t, e, r) => {
						r(511)('iterator')
					},
					2675: (t, e, r) => {
						r(6761), r(1510), r(7812), r(3110), r(9773)
					},
					7812: (t, e, r) => {
						var n = r(6518),
							i = r(9297),
							o = r(757),
							a = r(6823),
							s = r(5745),
							l = r(1296),
							c = s('symbol-to-string-registry')
						n(
							{ target: 'Symbol', stat: !0, forced: !l },
							{
								keyFor: function (t) {
									if (!o(t)) throw new TypeError(a(t) + ' is not a symbol')
									if (i(c, t)) return c[t]
								}
							}
						)
					},
					5700: (t, e, r) => {
						var n = r(511),
							i = r(8242)
						n('toPrimitive'), i()
					},
					8125: (t, e, r) => {
						var n = r(7751),
							i = r(511),
							o = r(687)
						i('toStringTag'), o(n('Symbol'), 'Symbol')
					},
					3500: (t, e, r) => {
						var n = r(4475),
							i = r(7400),
							o = r(9296),
							a = r(235),
							s = r(6699),
							l = function (t) {
								if (t && t.forEach !== a)
									try {
										s(t, 'forEach', a)
									} catch (e) {
										t.forEach = a
									}
							}
						for (var c in i) i[c] && l(n[c] && n[c].prototype)
						l(o)
					},
					2953: (t, e, r) => {
						var n = r(4475),
							i = r(7400),
							o = r(9296),
							a = r(3792),
							s = r(6699),
							l = r(687),
							c = r(8227)('iterator'),
							u = a.values,
							h = function (t, e) {
								if (t) {
									if (t[c] !== u)
										try {
											s(t, c, u)
										} catch (e) {
											t[c] = u
										}
									if ((l(t, e, !0), i[e]))
										for (var r in a)
											if (t[r] !== a[r])
												try {
													s(t, r, a[r])
												} catch (e) {
													t[r] = a[r]
												}
								}
							}
						for (var p in i) h(n[p] && n[p].prototype, p)
						h(o, 'DOMTokenList')
					},
					5575: (t, e, r) => {
						var n = r(6518),
							i = r(4475),
							o = r(9472)(i.setInterval, !0)
						n(
							{ global: !0, bind: !0, forced: i.setInterval !== o },
							{ setInterval: o }
						)
					},
					4599: (t, e, r) => {
						var n = r(6518),
							i = r(4475),
							o = r(9472)(i.setTimeout, !0)
						n(
							{ global: !0, bind: !0, forced: i.setTimeout !== o },
							{ setTimeout: o }
						)
					},
					6031: (t, e, r) => {
						r(5575), r(4599)
					}
				},
				e = {}
			function r(n) {
				var i = e[n]
				if (void 0 !== i) return i.exports
				var o = (e[n] = { exports: {} })
				return t[n].call(o.exports, o, o.exports, r), o.exports
			}
			;(r.d = (t, e) => {
				for (var n in e)
					r.o(e, n) &&
						!r.o(t, n) &&
						Object.defineProperty(t, n, { enumerable: !0, get: e[n] })
			}),
				(r.g = (function () {
					if ('object' == typeof globalThis) return globalThis
					try {
						return this || new Function('return this')()
					} catch (t) {
						if ('object' == typeof window) return window
					}
				})()),
				(r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
				(r.r = (t) => {
					'undefined' != typeof Symbol &&
						Symbol.toStringTag &&
						Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
						Object.defineProperty(t, '__esModule', { value: !0 })
				})
			var n = {}
			return (
				(() => {
					r.r(n),
						r.d(n, { JSONEditor: () => Ka }),
						r(2675),
						r(9463),
						r(6412),
						r(2259),
						r(5700),
						r(8125),
						r(8706),
						r(113),
						r(1629),
						r(3418),
						r(4346),
						r(3792),
						r(2712),
						r(4490),
						r(4782),
						r(739),
						r(9572),
						r(3288),
						r(2010),
						r(4731),
						r(479),
						r(2892),
						r(9085),
						r(9904),
						r(4185),
						r(875),
						r(9432),
						r(287),
						r(6099),
						r(6034),
						r(3362),
						r(7495),
						r(8781),
						r(7764),
						r(3500),
						r(2953),
						r(5506),
						r(4864),
						r(5440),
						r(4423)
					var t = [
							'actionscript',
							'batchfile',
							'c',
							'c++',
							'cpp',
							'coffee',
							'csharp',
							'css',
							'dart',
							'django',
							'ejs',
							'erlang',
							'golang',
							'groovy',
							'handlebars',
							'haskell',
							'haxe',
							'html',
							'ini',
							'jade',
							'java',
							'javascript',
							'json',
							'less',
							'lisp',
							'lua',
							'makefile',
							'matlab',
							'mysql',
							'objectivec',
							'pascal',
							'perl',
							'pgsql',
							'php',
							'python',
							'prql',
							'r',
							'ruby',
							'rust',
							'sass',
							'scala',
							'scss',
							'sh',
							'smarty',
							'sql',
							'sqlserver',
							'stylus',
							'svg',
							'typescript',
							'twig',
							'vbscript',
							'xml',
							'yaml',
							'zig'
						],
						e = [
							function (t) {
								return (
									'string' === t.type && 'color' === t.format && 'colorpicker'
								)
							},
							function (t) {
								return (
									'string' === t.type &&
									['ip', 'ipv4', 'ipv6', 'hostname'].includes(t.format) &&
									'ip'
								)
							},
							function (e) {
								return 'string' === e.type && t.includes(e.format) && 'ace'
							},
							function (t) {
								return (
									'string' === t.type &&
									['xhtml', 'bbcode'].includes(t.format) &&
									'sceditor'
								)
							},
							function (t) {
								return (
									'string' === t.type && 'markdown' === t.format && 'simplemde'
								)
							},
							function (t) {
								return 'string' === t.type && 'jodit' === t.format && 'jodit'
							},
							function (t) {
								return (
									'string' === t.type &&
									'autocomplete' === t.format &&
									'autocomplete'
								)
							},
							function (t) {
								return 'string' === t.type && 'uuid' === t.format && 'uuid'
							},
							function (t) {
								return 'info' === t.format && 'info'
							},
							function (t) {
								return 'button' === t.format && 'button'
							},
							function (t) {
								if (
									('integer' === t.type || 'number' === t.type) &&
									'stepper' === t.format
								)
									return 'stepper'
							},
							function (t) {
								if (t.links)
									for (var e = 0; e < t.links.length; e++)
										if (
											t.links[e].rel &&
											'describedby' === t.links[e].rel.toLowerCase()
										)
											return 'describedBy'
							},
							function (t) {
								return (
									['string', 'integer'].includes(t.type) &&
									['starrating', 'rating'].includes(t.format) &&
									'starrating'
								)
							},
							function (t) {
								return (
									['string', 'integer'].includes(t.type) &&
									['date', 'time', 'datetime-local'].includes(t.format) &&
									'datetime'
								)
							},
							function (t) {
								var e, r
								return (
									(t.oneOf || t.anyOf) &&
									!0 ===
										(null ===
											(e =
												null === (r = t.options) || void 0 === r
													? void 0
													: r.switcher) ||
											void 0 === e ||
											e) &&
									'multiple'
								)
							},
							function (t) {
								return t.if && 'multiple'
							},
							function (t, e) {
								if (
									(t.items && (t.items = e.expandSchema(t.items)),
									'array' === t.type &&
										t.items &&
										!Array.isArray(t.items) &&
										['string', 'number', 'integer'].includes(t.items.type))
								) {
									if ('choices' === t.format) return 'arrayChoices'
									if (t.uniqueItems) {
										if ('selectize' === t.format) return 'arraySelectize'
										if ('select2' === t.format) return 'arraySelect2'
										if (t.items.enum) return 'multiselect'
									}
								}
							},
							function (t) {
								if (t.enum) {
									if ('array' === t.type || 'object' === t.type) return 'enum'
									if (
										'number' === t.type ||
										'integer' === t.type ||
										'string' === t.type
									)
										return 'radio' === t.format
											? 'radio'
											: 'select2' === t.format
												? 'select2'
												: 'selectize' === t.format
													? 'selectize'
													: 'choices' === t.format
														? 'choices'
														: 'select'
								}
							},
							function (t) {
								if (t.enumSource)
									return 'radio' === t.format
										? 'radio'
										: 'select2' === t.format
											? 'select2'
											: 'selectize' === t.format
												? 'selectize'
												: 'choices' === t.format
													? 'choices'
													: 'select'
							},
							function (t) {
								return 'array' === t.type && 'table' === t.format && 'table'
							},
							function (t) {
								return (
									'string' === t.type &&
									'url' === t.format &&
									window.FileReader &&
									t.options &&
									t.options.upload === Object(t.options.upload) &&
									'upload'
								)
							},
							function (t) {
								return (
									'string' === t.type &&
									t.media &&
									'base64' === t.media.binaryEncoding &&
									'base64'
								)
							},
							function (t) {
								return 'any' === t.type && 'multiple'
							},
							function (t) {
								if ('boolean' === t.type)
									return 'checkbox' === t.format ||
										(t.options && t.options.checkbox)
										? 'checkbox'
										: 'select2' === t.format
											? 'select2'
											: 'selectize' === t.format
												? 'selectize'
												: 'choices' === t.format
													? 'choices'
													: 'select'
							},
							function (t) {
								return (
									'string' === t.type && 'signature' === t.format && 'signature'
								)
							},
							function (t) {
								return (
									'string' == typeof t.type &&
									[
										'string',
										'number',
										'integer',
										'boolean',
										'null',
										'array',
										'object'
									].includes(t.type) &&
									t.type
								)
							},
							function (t) {
								return !t.type && t.properties && 'object'
							},
							function (t) {
								return 'string' != typeof t.type && 'multiple'
							},
							function (t) {
								return 'string' == typeof t.type && 'string'
							}
						]
					function i(t, e, r) {
						var n
						return (
							(n = (function (t) {
								if ('object' != o(t) || !t) return t
								var e = t[Symbol.toPrimitive]
								if (void 0 !== e) {
									var r = e.call(t, 'string')
									if ('object' != o(r)) return r
									throw new TypeError(
										'@@toPrimitive must return a primitive value.'
									)
								}
								return String(t)
							})(e)),
							(e = 'symbol' == o(n) ? n : n + '') in t
								? Object.defineProperty(t, e, {
										value: r,
										enumerable: !0,
										configurable: !0,
										writable: !0
									})
								: (t[e] = r),
							t
						)
					}
					function o(t) {
						return (
							(o =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							o(t)
						)
					}
					function a(t) {
						return !(
							null === t ||
							'object' !== o(t) ||
							t.nodeType ||
							t === t.window ||
							(t.constructor && !h(t.constructor.prototype, 'isPrototypeOf'))
						)
					}
					function s(t) {
						return a(t) ? l({}, t) : Array.isArray(t) ? t.map(s) : t
					}
					function l(t) {
						for (
							var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1;
							n < e;
							n++
						)
							r[n - 1] = arguments[n]
						return (
							r.forEach(function (e) {
								e &&
									Object.keys(e).forEach(function (r) {
										e[r] && a(e[r])
											? (h(t, r) || (t[r] = {}), l(t[r], e[r]))
											: Array.isArray(e[r])
												? (t[r] = s(e[r]))
												: (t[r] = e[r])
									})
							}),
							t
						)
					}
					function c(t, e) {
						var r = document.createEvent('HTMLEvents')
						r.initEvent(e, !0, !0), t.dispatchEvent(r)
					}
					function u(t) {
						return (
							t &&
							('[object ShadowRoot]' === t.toString() ? t : u(t.parentNode))
						)
					}
					function h(t, e) {
						return t && Object.prototype.hasOwnProperty.call(t, e)
					}
					r(4170),
						r(3851),
						r(825),
						r(888),
						r(8598),
						r(1699),
						r(1761),
						r(5276),
						r(5086),
						r(1392),
						r(2062),
						r(8459),
						r(8940)
					var p = /^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
						d = /^\s*(-|\+)?(\d+)\s*$/
					function f() {
						var t = new Date().getTime()
						return (
							'undefined' != typeof performance &&
								'function' == typeof performance.now &&
								(t += performance.now()),
							'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
								/[xy]/g,
								function (e) {
									var r = (t + 16 * Math.random()) % 16 | 0
									return (
										(t = Math.floor(t / 16)),
										('x' === e ? r : (3 & r) | 8).toString(16)
									)
								}
							)
						)
					}
					function y(t) {
						return t && 'object' === o(t) && !Array.isArray(t)
					}
					function m(t) {
						for (
							var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1;
							n < e;
							n++
						)
							r[n - 1] = arguments[n]
						if (!r.length) return t
						var o = r.shift()
						if (y(t) && y(o))
							for (var a in o)
								y(o[a])
									? (t[a] || Object.assign(t, i({}, a, {})), m(t[a], o[a]))
									: Object.assign(t, i({}, a, o[a]))
						return m.apply(void 0, [t].concat(r))
					}
					function v(t, e) {
						;(null == e || e > t.length) && (e = t.length)
						for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r]
						return n
					}
					function b(t) {
						return (
							(b =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							b(t)
						)
					}
					function g(t) {
						var e = (function (t) {
							if ('object' != b(t) || !t) return t
							var e = t[Symbol.toPrimitive]
							if (void 0 !== e) {
								var r = e.call(t, 'string')
								if ('object' != b(r)) return r
								throw new TypeError(
									'@@toPrimitive must return a primitive value.'
								)
							}
							return String(t)
						})(t)
						return 'symbol' == b(e) ? e : e + ''
					}
					var w = (function () {
						return (
							(t = function t(e, r) {
								var n, i
								!(function (t, e) {
									if (!(t instanceof e))
										throw new TypeError('Cannot call a class as a function')
								})(this, t),
									(this.defaults = r),
									(this.jsoneditor = e.jsoneditor),
									(this.theme = this.jsoneditor.theme),
									(this.template_engine = this.jsoneditor.template),
									(this.iconlib = this.jsoneditor.iconlib),
									(this.translate =
										this.jsoneditor.translate || this.defaults.translate),
									(this.translateProperty =
										this.jsoneditor.translateProperty ||
										this.defaults.translateProperty),
									(this.original_schema = e.schema),
									(this.schema = this.jsoneditor.expandSchema(
										this.original_schema
									)),
									(this.active = !0),
									(this.isUiOnly = !1),
									(this.options = l(
										{},
										this.options || {},
										this.schema.options || {},
										e.schema.options || {},
										e
									)),
									(this.enforceConstEnabled =
										null !== (n = this.options.enforce_const) && void 0 !== n
											? n
											: this.jsoneditor.options.enforce_const),
									(this.formname =
										this.jsoneditor.options.form_name_root || 'root'),
									e.path || this.schema.id || (this.schema.id = this.formname),
									(this.path = e.path || this.formname),
									(this.formname =
										e.formname || this.path.replace(/\.([^.]+)/g, '[$1]')),
									(this.parent = e.parent),
									(this.key =
										void 0 !== this.parent
											? this.path
													.split('.')
													.slice(this.parent.path.split('.').length)
													.join('.')
											: this.path),
									(this.link_watchers = []),
									(this.watchLoop = !1),
									(this.optInWidget =
										null !== (i = this.options.opt_in_widget) && void 0 !== i
											? i
											: this.jsoneditor.options.opt_in_widget),
									e.container && this.setContainer(e.container),
									this.registerDependencies()
							}),
							(e = [
								{
									key: 'onChildEditorChange',
									value: function (t, e) {
										this.onChange(!0, !1, e)
									}
								},
								{
									key: 'notify',
									value: function () {
										this.path && this.jsoneditor.notifyWatchers(this.path)
									}
								},
								{
									key: 'change',
									value: function (t) {
										this.parent
											? this.parent.onChildEditorChange(this, t)
											: this.jsoneditor && this.jsoneditor.onChange(t)
									}
								},
								{
									key: 'onChange',
									value: function (t, e, r) {
										this.notify(),
											e || (this.watch_listener && this.watch_listener()),
											t && this.change(r)
									}
								},
								{
									key: 'register',
									value: function () {
										if (
											(this.jsoneditor.registerEditor(this),
											this.input && !this.label)
										) {
											var t = this.getTitle() || this.formname
											this.input.setAttribute('aria-label', t)
										}
										this.onChange()
									}
								},
								{
									key: 'unregister',
									value: function () {
										this.jsoneditor && this.jsoneditor.unregisterEditor(this)
									}
								},
								{
									key: 'getNumColumns',
									value: function () {
										return 12
									}
								},
								{
									key: 'isActive',
									value: function () {
										return this.active
									}
								},
								{
									key: 'activate',
									value: function () {
										;(this.active = !0),
											(this.optInCheckbox.checked = !0),
											this.enable(),
											this.change()
									}
								},
								{
									key: 'deactivate',
									value: function () {
										this.isRequired() ||
											((this.active = !1),
											(this.optInCheckbox.checked = !1),
											this.disable(),
											this.change())
									}
								},
								{
									key: 'registerDependencies',
									value: function () {
										var t = this
										this.dependenciesFulfilled = !0
										var e = this.options.dependencies
										e &&
											Object.keys(e).forEach(function (e) {
												var r
												e.startsWith(t.jsoneditor.root.path)
													? (r = e)
													: (((r = t.path.split('.'))[r.length - 1] = e),
														(r = r.join('.'))),
													t.jsoneditor.watch(r, function () {
														t.evaluateDependencies()
													})
											})
									}
								},
								{
									key: 'evaluateDependencies',
									value: function () {
										var t = this,
											e = this.container || this.control
										if (e && null !== this.jsoneditor) {
											var r = this.options.dependencies
											if (r) {
												var n = this.dependenciesFulfilled
												;(this.dependenciesFulfilled = !0),
													Object.keys(r).forEach(function (e) {
														var n
														e.startsWith(t.jsoneditor.root.path)
															? (n = e)
															: (((n = t.path.split('.'))[n.length - 1] = e),
																(n = n.join('.')))
														var i = r[e]
														t.checkDependency(n, i)
													}),
													this.dependenciesFulfilled !== n && this.notify()
												var i = this.dependenciesFulfilled ? 'block' : 'none'
												this.options.hidden && (i = 'none'),
													'TD' === e.tagName
														? Object.keys(e.childNodes).forEach(function (t) {
																return (e.childNodes[t].style.display = i)
															})
														: (e.style.display = i)
											}
										}
									}
								},
								{
									key: 'checkDependency',
									value: function (t, e) {
										var r = this
										if (this.path !== t && null !== this.jsoneditor) {
											var n = this.jsoneditor.getEditor(t),
												i = n ? n.getValue() : void 0
											n && n.dependenciesFulfilled && i
												? Array.isArray(e)
													? (this.dependenciesFulfilled = e.some(function (t) {
															if (JSON.stringify(i) === JSON.stringify(t))
																return !0
														}))
													: 'object' === b(e)
														? 'object' !== b(i)
															? (this.dependenciesFulfilled = e === i)
															: Object.keys(e).some(function (t) {
																	return (
																		!!h(e, t) &&
																		(h(i, t) && e[t] === i[t]
																			? void 0
																			: ((r.dependenciesFulfilled = !1), !0))
																	)
																})
														: 'string' == typeof e || 'number' == typeof e
															? (this.dependenciesFulfilled =
																	this.dependenciesFulfilled && i === e)
															: 'boolean' == typeof e &&
																(this.dependenciesFulfilled = e
																	? this.dependenciesFulfilled &&
																		(i || i.length > 0)
																	: this.dependenciesFulfilled &&
																		(!i || 0 === i.length))
												: (this.dependenciesFulfilled = !1)
										}
									}
								},
								{
									key: 'setContainer',
									value: function (t) {
										;(this.container = t),
											this.setContainerAttributes(),
											this.schema.id &&
												this.container.setAttribute(
													'data-schemaid',
													this.schema.id
												),
											this.schema.type &&
												'string' == typeof this.schema.type &&
												this.container.setAttribute(
													'data-schematype',
													this.schema.type
												),
											this.container.setAttribute('data-schemapath', this.path)
									}
								},
								{
									key: 'setOptInCheckbox',
									value: function () {
										var t,
											e = this
										;(t =
											'switch' === this.optInWidget
												? this.theme.getOptInSwitch(this.formname)
												: this.theme.getOptInCheckbox(this.formname)),
											(this.optInCheckbox = t.checkbox),
											(this.optInContainer = t.container),
											this.optInCheckbox.addEventListener('click', function () {
												e.isActive() ? e.deactivate() : e.activate()
											})
										var r = this.jsoneditor.options.show_opt_in,
											n = void 0 !== this.parent.options.show_opt_in,
											i = n && !0 === this.parent.options.show_opt_in,
											o = n && !1 === this.parent.options.show_opt_in
										;(i || (!o && r) || (!n && r)) &&
											this.parent &&
											'object' === this.parent.schema.type &&
											!this.isRequired() &&
											this.header &&
											(this.header.insertBefore(
												this.optInContainer,
												this.header.firstChild
											),
											(this.optInAppended = !0))
									}
								},
								{ key: 'preBuild', value: function () {} },
								{ key: 'build', value: function () {} },
								{
									key: 'postBuild',
									value: function () {
										this.setupWatchListeners(),
											this.addLinks(),
											this.register(),
											this.setValue(this.getDefault(), !0),
											this.updateHeaderText(),
											this.onWatchedFieldChange(),
											this.options.titleHidden &&
												(this.theme.visuallyHidden(this.label),
												this.theme.visuallyHidden(this.header)),
											this.enforceConstEnabled &&
												this.schema.const &&
												this.disable()
									}
								},
								{
									key: 'setupWatchListeners',
									value: function () {
										var t = this
										if (
											((this.watched = {}),
											this.schema.vars &&
												(this.schema.watch = this.schema.vars),
											(this.watched_values = {}),
											(this.watch_listener = function () {
												t.refreshWatchedFieldValues() &&
													t.onWatchedFieldChange()
											}),
											h(this.schema, 'watch'))
										) {
											var e,
												r,
												n,
												i,
												o,
												a = this.container.getAttribute('data-schemapath')
											Object.keys(this.schema.watch).forEach(function (s) {
												if (((e = t.schema.watch[s]), Array.isArray(e))) {
													if (e.length < 2) return
													r = [e[0]].concat(e[1].split('.'))
												} else
													(r = e.split('.')),
														t.theme.closest(
															t.container,
															'[data-schemaid="'.concat(r[0], '"]')
														) || r.unshift('#')
												if (
													('#' === (n = r.shift()) &&
														(n =
															t.jsoneditor.schema.id ||
															t.jsoneditor.root.formname),
													!(i = t.theme.closest(
														t.container,
														'[data-schemaid="'.concat(n, '"]')
													)))
												)
													throw new Error(
														'Could not find ancestor node with id '.concat(n)
													)
												;(o = ''
													.concat(i.getAttribute('data-schemapath'), '.')
													.concat(r.join('.'))),
													a.startsWith(o) && (t.watchLoop = !0),
													t.jsoneditor.watch(o, t.watch_listener),
													(t.watched[s] = o)
											})
										}
										this.schema.headerTemplate &&
											(this.header_template = this.jsoneditor.compileTemplate(
												this.schema.headerTemplate,
												this.template_engine
											))
									}
								},
								{
									key: 'addLinks',
									value: function () {
										if (
											!this.no_link_holder &&
											((this.link_holder = this.theme.getLinksHolder()),
											void 0 !== this.description
												? this.description.parentNode.insertBefore(
														this.link_holder,
														this.description
													)
												: this.container.appendChild(this.link_holder),
											this.schema.links)
										)
											for (var t = 0; t < this.schema.links.length; t++)
												this.addLink(this.getLink(this.schema.links[t]))
									}
								},
								{ key: 'onMove', value: function () {} },
								{
									key: 'getButton',
									value: function (t, e, r) {
										var n =
												arguments.length > 3 && void 0 !== arguments[3]
													? arguments[3]
													: [],
											i = 'json-editor-btn-'.concat(e)
										;(e = this.iconlib ? this.iconlib.getIcon(e) : null),
											(t = this.translate(t, n)),
											(r = this.translate(r, n)),
											!e && r && ((t = r), (r = null))
										var o = this.theme.getButton(t, e, r)
										return o.classList.add(i), o
									}
								},
								{
									key: 'setButtonText',
									value: function (t, e, r, n) {
										var i =
											arguments.length > 4 && void 0 !== arguments[4]
												? arguments[4]
												: []
										return (
											(r = this.iconlib ? this.iconlib.getIcon(r) : null),
											(e = this.translate(e, i)),
											(n = this.translate(n, i)),
											!r && n && ((e = n), (n = null)),
											this.theme.setButtonText(t, e, r, n)
										)
									}
								},
								{
									key: 'addLink',
									value: function (t) {
										this.link_holder && this.link_holder.appendChild(t)
									}
								},
								{
									key: 'getLink',
									value: function (t) {
										var e,
											r,
											n = (t.mediaType || 'application/javascript').split(
												'/'
											)[0],
											i = this.jsoneditor.compileTemplate(
												t.href,
												this.template_engine
											),
											o = this.jsoneditor.compileTemplate(
												t.rel ? t.rel : t.href,
												this.template_engine
											),
											a = null
										if (
											(t.download && (a = t.download),
											a &&
												!0 !== a &&
												(a = this.jsoneditor.compileTemplate(
													a,
													this.template_engine
												)),
											'image' === n)
										) {
											;(e = this.theme.getBlockLinkHolder()),
												(r = document.createElement('a')).setAttribute(
													'target',
													'_blank'
												)
											var s = document.createElement('img')
											this.theme.createImageLink(e, r, s),
												this.link_watchers.push(function (t) {
													var e = i(t),
														n = o(t)
													r.setAttribute('href', e),
														r.setAttribute('title', n || e),
														s.setAttribute('src', e)
												})
										} else if (['audio', 'video'].includes(n)) {
											;(e = this.theme.getBlockLinkHolder()),
												(r = this.theme.getBlockLink()).setAttribute(
													'target',
													'_blank'
												)
											var l = document.createElement(n)
											l.setAttribute('controls', 'controls'),
												this.theme.createMediaLink(e, r, l),
												this.link_watchers.push(function (t) {
													var e = i(t),
														n = o(t)
													r.setAttribute('href', e),
														(r.textContent = n || e),
														l.setAttribute('src', e)
												})
										} else
											(r = e = this.theme.getBlockLink()),
												e.setAttribute('target', '_blank'),
												(e.textContent = t.rel),
												(e.style.display = 'none'),
												this.link_watchers.push(function (t) {
													var r = i(t),
														n = o(t)
													r && (e.style.display = ''),
														e.setAttribute('href', r),
														(e.textContent = n || r)
												})
										return (
											a &&
												r &&
												(!0 === a
													? r.setAttribute('download', '')
													: this.link_watchers.push(function (t) {
															r.setAttribute('download', a(t))
														})),
											t.class &&
												t.class.split(' ').forEach(function (t) {
													r.classList.add(t)
												}),
											e
										)
									}
								},
								{
									key: 'refreshWatchedFieldValues',
									value: function () {
										var t = this
										if (this.watched_values) {
											var e = {},
												r = !1
											return (
												this.watched &&
													Object.keys(this.watched).forEach(function (n) {
														var i = t.jsoneditor.getEditor(t.watched[n]),
															o = i ? i.getValue() : null
														t.watched_values[n] !== o && (r = !0), (e[n] = o)
													}),
												(e.self = this.getValue()),
												this.watched_values.self !== e.self && (r = !0),
												(this.watched_values = e),
												r
											)
										}
									}
								},
								{
									key: 'getWatchedFieldValues',
									value: function () {
										return this.watched_values
									}
								},
								{
									key: 'updateHeaderText',
									value: function () {
										if (this.header) {
											var t = this.getHeaderText()
											if (this.header.children.length) {
												for (var e = 0; e < this.header.childNodes.length; e++)
													if (3 === this.header.childNodes[e].nodeType) {
														this.header.childNodes[e].nodeValue =
															this.cleanText(t)
														break
													}
											} else
												window.DOMPurify
													? (this.header.innerHTML =
															window.DOMPurify.sanitize(t))
													: (this.header.textContent = this.cleanText(t))
										}
									}
								},
								{
									key: 'getHeaderText',
									value: function (t) {
										return this.header_text
											? this.header_text
											: t
												? this.translateProperty(this.schema.title)
												: this.getTitle()
									}
								},
								{
									key: 'getPathDepth',
									value: function () {
										return this.path.split('.').length
									}
								},
								{
									key: 'cleanText',
									value: function (t) {
										var e = document.createElement('div')
										return (e.innerHTML = t), e.textContent || e.innerText
									}
								},
								{
									key: 'onWatchedFieldChange',
									value: function () {
										var t,
											e = this
										if (this.header_template) {
											;(t = l(this.getWatchedFieldValues(), {
												key: this.key,
												i: this.key,
												i0: 1 * this.key,
												i1: 1 * this.key + 1,
												title: this.getTitle()
											})),
												this.editors &&
													Object.keys(this.editors).length &&
													((t.properties = {}),
													Object.keys(this.editors).forEach(function (r) {
														var n = e.editors[r]
														if (
															n.schema &&
															n.schema.enum &&
															n.schema.options &&
															n.schema.options.enum_titles
														) {
															var i = n.schema.enum.indexOf(n.value),
																o = n.options.enum_titles[i]
															t.properties[r] = { enumTitle: o }
														}
													}))
											var r = this.header_template(t)
											r !== this.header_text &&
												((this.header_text = r),
												this.updateHeaderText(),
												this.notify())
										}
										if (this.link_watchers.length) {
											t = this.getWatchedFieldValues()
											for (var n = 0; n < this.link_watchers.length; n++)
												this.link_watchers[n](t)
										}
									}
								},
								{
									key: 'setValue',
									value: function (t) {
										;(t = this.applyConstFilter(t)), (this.value = t)
									}
								},
								{
									key: 'applyConstFilter',
									value: function (t) {
										return (
											this.enforceConstEnabled &&
												void 0 !== this.schema.const &&
												(t = this.schema.const),
											t
										)
									}
								},
								{
									key: 'getValue',
									value: function () {
										if (this.dependenciesFulfilled) return this.value
									}
								},
								{ key: 'refreshValue', value: function () {} },
								{
									key: 'getChildEditors',
									value: function () {
										return !1
									}
								},
								{
									key: 'destroy',
									value: function () {
										var t = this
										this.unregister(this),
											this.watched &&
												Object.values(this.watched).forEach(function (e) {
													return t.jsoneditor.unwatch(e, t.watch_listener)
												}),
											(this.watched = null),
											(this.watched_values = null),
											(this.watch_listener = null),
											(this.header_text = null),
											(this.header_template = null),
											(this.value = null),
											this.container &&
												this.container.parentNode &&
												this.container.parentNode.removeChild(this.container),
											(this.container = null),
											(this.jsoneditor = null),
											(this.schema = null),
											(this.path = null),
											(this.key = null),
											(this.parent = null)
									}
								},
								{
									key: 'isDefaultRequired',
									value: function () {
										return (
											this.isRequired() ||
											!!this.jsoneditor.options.use_default_values
										)
									}
								},
								{
									key: 'getDefault',
									value: function () {
										if (this.enforceConstEnabled && this.schema.const)
											return this.schema.const
										if (void 0 !== this.schema.default)
											return this.schema.default
										if (void 0 !== this.schema.enum) return this.schema.enum[0]
										var t = this.schema.type || this.schema.oneOf
										if (
											(t && Array.isArray(t) && (t = t[0]),
											t && 'object' === b(t) && (t = t.type),
											t && Array.isArray(t) && (t = t[0]),
											'string' == typeof t)
										) {
											if ('number' === t)
												return this.isDefaultRequired() ? 0 : void 0
											if ('boolean' === t)
												return !this.isDefaultRequired() && void 0
											if ('integer' === t)
												return this.isDefaultRequired() ? 0 : void 0
											if ('string' === t)
												return this.isDefaultRequired() ? '' : void 0
											if ('null' === t) return null
											if ('object' === t) return {}
											if ('array' === t) return []
										}
									}
								},
								{
									key: 'getTitle',
									value: function () {
										return this.translateProperty(
											this.schema.title || this.key || this.formname
										)
									}
								},
								{
									key: 'enable',
									value: function () {
										this.disabled = !1
									}
								},
								{
									key: 'disable',
									value: function () {
										this.disabled = !0
									}
								},
								{
									key: 'isEnabled',
									value: function () {
										return !this.disabled
									}
								},
								{
									key: 'isRequired',
									value: function () {
										return 'boolean' == typeof this.schema.required
											? this.schema.required
											: this.parent &&
												  this.parent.schema &&
												  Array.isArray(this.parent.schema.required)
												? this.parent.schema.required.includes(this.key)
												: !!this.jsoneditor.options.required_by_default
									}
								},
								{
									key: 'getDisplayText',
									value: function (t) {
										var e = [],
											r = {}
										t.forEach(function (t) {
											t.title && ((r[t.title] = r[t.title] || 0), r[t.title]++),
												t.description &&
													((r[t.description] = r[t.description] || 0),
													r[t.description]++),
												t.format &&
													((r[t.format] = r[t.format] || 0), r[t.format]++),
												t.type && ((r[t.type] = r[t.type] || 0), r[t.type]++)
										}),
											t.forEach(function (t) {
												var n
												;(n =
													'string' == typeof t
														? t
														: t.title && r[t.title] <= 1
															? t.title
															: t.format && r[t.format] <= 1
																? t.format
																: t.type && r[t.type] <= 1
																	? t.type
																	: t.description && r[t.description] <= 1
																		? t.description
																		: t.title
																			? t.title
																			: t.format
																				? t.format
																				: t.type
																					? t.type
																					: t.description
																						? t.description
																						: JSON.stringify(t).length < 500
																							? JSON.stringify(t)
																							: 'type'),
													e.push(n)
											})
										var n = {}
										return (
											e.forEach(function (t, i) {
												;(n[t] = n[t] || 0),
													n[t]++,
													r[t] > 1 && (e[i] = ''.concat(t, ' ').concat(n[t]))
											}),
											e
										)
									}
								},
								{
									key: 'getValidId',
									value: function (t) {
										return (t = void 0 === t ? '' : t.toString()).replace(
											/\s+/g,
											'-'
										)
									}
								},
								{
									key: 'setInputAttributes',
									value: function (t, e) {
										if (
											this.schema.options &&
											this.schema.options.inputAttributes
										) {
											var r = this.schema.options.inputAttributes,
												n = ['name', 'type'].concat(t),
												i = e || this.input
											Object.keys(r).forEach(function (t) {
												n.includes(t.toLowerCase()) || i.setAttribute(t, r[t])
											})
										}
									}
								},
								{
									key: 'setContainerAttributes',
									value: function () {
										var t = this
										if (
											this.schema.options &&
											this.schema.options.containerAttributes
										) {
											var e = this.schema.options.containerAttributes,
												r = [
													'data-schemapath',
													'data-schematype',
													'data-schemaid'
												]
											Object.keys(e).forEach(function (n) {
												r.includes(n.toLowerCase()) ||
													t.container.setAttribute(n, e[n])
											})
										}
									}
								},
								{
									key: 'expandCallbacks',
									value: function (t, e) {
										var r = this,
											n = this.defaults.callbacks[t]
										return (
											Object.entries(e).forEach(function (i) {
												var o,
													a =
														(function (t) {
															if (Array.isArray(t)) return t
														})((o = i)) ||
														(function (t) {
															var e =
																null == t
																	? null
																	: ('undefined' != typeof Symbol &&
																			t[Symbol.iterator]) ||
																		t['@@iterator']
															if (null != e) {
																var r,
																	n,
																	i,
																	o,
																	a = [],
																	s = !0,
																	l = !1
																try {
																	for (
																		i = (e = e.call(t)).next;
																		!(s = (r = i.call(e)).done) &&
																		(a.push(r.value), 2 !== a.length);
																		s = !0
																	);
																} catch (t) {
																	;(l = !0), (n = t)
																} finally {
																	try {
																		if (
																			!s &&
																			null != e.return &&
																			((o = e.return()), Object(o) !== o)
																		)
																			return
																	} finally {
																		if (l) throw n
																	}
																}
																return a
															}
														})(o) ||
														(function (t) {
															if (t) {
																if ('string' == typeof t) return v(t, 2)
																var e = Object.prototype.toString
																	.call(t)
																	.slice(8, -1)
																return (
																	'Object' === e &&
																		t.constructor &&
																		(e = t.constructor.name),
																	'Map' === e || 'Set' === e
																		? Array.from(t)
																		: 'Arguments' === e ||
																			  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
																					e
																			  )
																			? v(t, 2)
																			: void 0
																)
															}
														})(o) ||
														(function () {
															throw new TypeError(
																'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
															)
														})(),
													s = a[0],
													l = a[1]
												l === Object(l)
													? (e[s] = r.expandCallbacks(t, l))
													: 'string' == typeof l &&
														'object' === b(n) &&
														'function' == typeof n[l] &&
														(e[s] = n[l].bind(null, r))
											}),
											e
										)
									}
								},
								{ key: 'showValidationErrors', value: function (t) {} }
							]),
							e &&
								(function (t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r]
										;(n.enumerable = n.enumerable || !1),
											(n.configurable = !0),
											'value' in n && (n.writable = !0),
											Object.defineProperty(t, g(n.key), n)
									}
								})(t.prototype, e),
							Object.defineProperty(t, 'prototype', { writable: !1 }),
							t
						)
						var t, e
					})()
					function _(t) {
						return (
							(_ =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							_(t)
						)
					}
					function k(t) {
						var e = (function (t) {
							if ('object' != _(t) || !t) return t
							var e = t[Symbol.toPrimitive]
							if (void 0 !== e) {
								var r = e.call(t, 'string')
								if ('object' != _(r)) return r
								throw new TypeError(
									'@@toPrimitive must return a primitive value.'
								)
							}
							return String(t)
						})(t)
						return 'symbol' == _(e) ? e : e + ''
					}
					function j() {
						try {
							var t = !Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							)
						} catch (t) {}
						return (j = function () {
							return !!t
						})()
					}
					function O() {
						return (
							(O =
								'undefined' != typeof Reflect && Reflect.get
									? Reflect.get.bind()
									: function (t, e, r) {
											var n = (function (t, e) {
												for (
													;
													!Object.prototype.hasOwnProperty.call(t, e) &&
													null !== (t = x(t));

												);
												return t
											})(t, e)
											if (n) {
												var i = Object.getOwnPropertyDescriptor(n, e)
												return i.get
													? i.get.call(arguments.length < 3 ? t : r)
													: i.value
											}
										}),
							O.apply(this, arguments)
						)
					}
					function x(t) {
						return (
							(x = Object.setPrototypeOf
								? Object.getPrototypeOf.bind()
								: function (t) {
										return t.__proto__ || Object.getPrototypeOf(t)
									}),
							x(t)
						)
					}
					function C(t, e) {
						return (
							(C = Object.setPrototypeOf
								? Object.setPrototypeOf.bind()
								: function (t, e) {
										return (t.__proto__ = e), t
									}),
							C(t, e)
						)
					}
					var E = (function (t) {
						function e() {
							return (
								(function (t, e) {
									if (!(t instanceof e))
										throw new TypeError('Cannot call a class as a function')
								})(this, e),
								(function (t, e, r) {
									return (
										(e = x(e)),
										(function (t, e) {
											if (e && ('object' === _(e) || 'function' == typeof e))
												return e
											if (void 0 !== e)
												throw new TypeError(
													'Derived constructors may only return object or undefined'
												)
											return (function (t) {
												if (void 0 === t)
													throw new ReferenceError(
														"this hasn't been initialised - super() hasn't been called"
													)
												return t
											})(t)
										})(
											t,
											j()
												? Reflect.construct(e, r || [], x(t).constructor)
												: e.apply(t, r)
										)
									)
								})(this, e, arguments)
							)
						}
						return (
							(function (t, e) {
								if ('function' != typeof e && null !== e)
									throw new TypeError(
										'Super expression must either be null or a function'
									)
								;(t.prototype = Object.create(e && e.prototype, {
									constructor: { value: t, writable: !0, configurable: !0 }
								})),
									Object.defineProperty(t, 'prototype', { writable: !1 }),
									e && C(t, e)
							})(e, t),
							(r = e),
							(n = [
								{
									key: 'register',
									value: function () {
										O(x(e.prototype), 'register', this).call(this),
											this.input &&
												this.jsoneditor.options.use_name_attributes &&
												this.input.setAttribute('name', this.formname)
									}
								},
								{
									key: 'unregister',
									value: function () {
										O(x(e.prototype), 'unregister', this).call(this),
											this.input &&
												(this.input.removeAttribute('name'),
												this.input.removeAttribute('aria-label'))
									}
								},
								{
									key: 'setValue',
									value: function (t, e, r) {
										if (
											((t = this.applyConstFilter(t)),
											(!this.template || r) &&
												(this.shouldBeUnset() || null != t
													? 'object' === _(t)
														? (t = JSON.stringify(t))
														: this.shouldBeUnset() ||
															'string' == typeof t ||
															(t = ''.concat(t))
													: (t = ''),
												t !== this.serialized))
										) {
											var n = this.sanitize(t)
											if (this.input.value !== n) {
												if (
													(this.setValueToInputField(n),
													'range' === this.format)
												) {
													var i = this.control.querySelector('output')
													i && (i.value = n)
												}
												var o = r || this.getValue() !== t
												return (
													this.refreshValue(),
													e
														? (this.is_dirty = !1)
														: 'change' ===
																this.jsoneditor.options.show_errors &&
															(this.is_dirty = !0),
													this.adjust_height && this.adjust_height(this.input),
													o && this.onChange(!0, r),
													{ changed: o, value: n }
												)
											}
										}
									}
								},
								{
									key: 'setValueToInputField',
									value: function (t) {
										this.input.value = void 0 === t ? '' : t
									}
								},
								{
									key: 'getNumColumns',
									value: function () {
										var t,
											e = Math.ceil(
												Math.max(
													this.getTitle().length,
													this.schema.maxLength || 0,
													this.schema.minLength || 0
												) / 5
											)
										return (
											(t =
												'textarea' === this.input_type
													? 6
													: ['text', 'email'].includes(this.input_type)
														? 4
														: 2),
											Math.min(12, Math.max(e, t))
										)
									}
								},
								{
									key: 'build',
									value: function () {
										var t,
											e = this
										if (
											(this.options.compact ||
												(this.header = this.label =
													this.theme.getFormInputLabel(
														this.getTitle(),
														this.isRequired()
													)),
											this.schema.description &&
												(this.description = this.theme.getFormInputDescription(
													this.translateProperty(this.schema.description)
												)),
											this.options.infoText &&
												(this.infoButton = this.theme.getInfoButton(
													this.translateProperty(this.options.infoText)
												)),
											(this.format = this.schema.format),
											!this.format &&
												this.schema.media &&
												this.schema.media.type &&
												(this.format = this.schema.media.type.replace(
													/(^(application|text)\/(x-)?(script\.)?)|(-source$)/g,
													''
												)),
											!this.format &&
												this.options.default_format &&
												(this.format = this.options.default_format),
											this.options.format &&
												(this.format = this.options.format),
											this.format)
										)
											if ('textarea' === this.format)
												(this.input_type = 'textarea'),
													(this.input = this.theme.getTextareaInput())
											else if ('range' === this.format) {
												this.input_type = 'range'
												var r = this.schema.minimum || 0,
													n = this.schema.maximum || Math.max(100, r + 1),
													i = 1
												this.schema.multipleOf &&
													(r % this.schema.multipleOf &&
														(r =
															Math.ceil(r / this.schema.multipleOf) *
															this.schema.multipleOf),
													n % this.schema.multipleOf &&
														(n =
															Math.floor(n / this.schema.multipleOf) *
															this.schema.multipleOf),
													(i = this.schema.multipleOf)),
													(this.input = this.theme.getRangeInput(
														r,
														n,
														i,
														this.description,
														this.formname
													)),
													this.input.setAttribute('id', this.formname)
											} else
												(this.input_type = 'text'),
													[
														'button',
														'checkbox',
														'color',
														'date',
														'datetime-local',
														'email',
														'file',
														'hidden',
														'image',
														'month',
														'number',
														'password',
														'radio',
														'reset',
														'search',
														'submit',
														'tel',
														'text',
														'time',
														'url',
														'week'
													].includes(this.format) &&
														(this.input_type = this.format),
													(this.input = this.theme.getFormInputField(
														this.input_type
													))
										else
											(this.input_type = 'text'),
												(this.input = this.theme.getFormInputField(
													this.input_type
												))
										void 0 !== this.schema.maxLength &&
											this.input.setAttribute(
												'maxlength',
												this.schema.maxLength
											),
											void 0 !== this.schema.pattern
												? this.input.setAttribute(
														'pattern',
														this.schema.pattern
													)
												: void 0 !== this.schema.minLength &&
													this.input.setAttribute(
														'pattern',
														'.{'.concat(this.schema.minLength, ',}')
													),
											this.options.compact
												? this.container.classList.add('compact')
												: this.options.input_width &&
													(this.input.style.width = this.options.input_width),
											(this.schema.readOnly ||
												this.schema.readonly ||
												this.schema.template) &&
												(this.disable(!0),
												this.input.setAttribute('readonly', 'true')),
											this.setInputAttributes([
												'maxlength',
												'pattern',
												'readonly',
												'min',
												'max',
												'step'
											]),
											this.input.addEventListener('change', function (t) {
												if (
													(t.preventDefault(),
													t.stopPropagation(),
													e.schema.template)
												)
													t.currentTarget.value = e.value
												else {
													var r = t.currentTarget.value,
														n = e.sanitize(r)
													r !== n && (t.currentTarget.value = n),
														(e.is_dirty = !0),
														e.refreshValue(),
														e.onChange(!0)
												}
											}),
											this.options.input_height &&
												(this.input.style.height = this.options.input_height),
											this.options.expand_height &&
												((this.adjust_height = function (t) {
													if (t) {
														var e,
															r = t.offsetHeight
														if (t.offsetHeight < t.scrollHeight)
															for (
																e = 0;
																t.offsetHeight < t.scrollHeight + 3 &&
																!(e > 100);

															)
																e++, r++, (t.style.height = ''.concat(r, 'px'))
														else {
															for (
																e = 0;
																t.offsetHeight >= t.scrollHeight + 3 &&
																!(e > 100);

															)
																e++, r--, (t.style.height = ''.concat(r, 'px'))
															t.style.height = ''.concat(r + 1, 'px')
														}
													}
												}),
												this.input.addEventListener('keyup', function (t) {
													e.adjust_height(t.currentTarget)
												}),
												this.input.addEventListener('change', function (t) {
													e.adjust_height(t.currentTarget)
												}),
												this.adjust_height())
										var o =
												null !==
													(t = this.options.prompt_paste_max_length_reached) &&
												void 0 !== t
													? t
													: this.jsoneditor.options
															.prompt_paste_max_length_reached,
											a = void 0 !== this.schema.maxLength
										o &&
											a &&
											this.input.addEventListener('paste', function (t) {
												;(t.clipboardData || window.clipboardData).getData(
													'text'
												).length +
													e.input.value.length >
													e.schema.maxLength &&
													alert(
														e.translate('paste_max_length_reached', [
															e.schema.maxLength
														])
													)
											}),
											this.format &&
												this.input.setAttribute(
													'data-schemaformat',
													this.format
												)
										var s = this.input
										if (
											('range' === this.format &&
												(s = this.theme.getRangeControl(
													this.input,
													this.theme.getRangeOutput(
														this.input,
														this.schema.default ||
															Math.max(this.schema.minimum || 0, 0)
													)
												)),
											(this.control = this.theme.getFormControl(
												this.label,
												s,
												this.description,
												this.infoButton,
												this.formname
											)),
											this.container.appendChild(this.control),
											window.requestAnimationFrame(function () {
												e.input.parentNode && e.afterInputReady(),
													e.adjust_height && e.adjust_height(e.input),
													'range' === e.format &&
														(e.control.querySelector('output').value =
															e.input.value)
											}),
											this.schema.template)
										) {
											var l = this.expandCallbacks('template', {
												template: this.schema.template
											})
											'function' == typeof l.template
												? (this.template = l.template)
												: (this.template = this.jsoneditor.compileTemplate(
														this.schema.template,
														this.template_engine
													)),
												this.refreshValue()
										} else this.refreshValue()
									}
								},
								{
									key: 'setupCleave',
									value: function (t) {
										var e = this.expandCallbacks(
											'cleave',
											l(
												{},
												this.defaults.options.cleave || {},
												this.options.cleave || {}
											)
										)
										'object' === _(e) &&
											Object.keys(e).length > 0 &&
											(this.cleave_instance = new window.Cleave(t, e))
									}
								},
								{
									key: 'setupImask',
									value: function (t) {
										var e = this.expandCallbacks(
											'imask',
											l(
												{},
												this.defaults.options.imask || {},
												this.options.imask || {}
											)
										)
										'object' === _(e) &&
											Object.keys(e).length > 0 &&
											(this.imask_instance = window.IMask(
												t,
												this.ajustIMaskOptions(e)
											))
									}
								},
								{
									key: 'ajustIMaskOptions',
									value: function (t) {
										var e = this
										return (
											Object.keys(t).forEach(function (r) {
												if (t[r] === Object(t[r]))
													t[r] = e.ajustIMaskOptions(t[r])
												else if ('mask' === r)
													if ('regex:' === t[r].substr(0, 6)) {
														var n = t[r].match(/^regex:\/(.*)\/([gimsuy]*)$/)
														if (null !== n)
															try {
																t[r] = new RegExp(n[1], n[2])
															} catch (t) {}
													} else t[r] = e.getGlobalPropertyFromString(t[r])
											}),
											t
										)
									}
								},
								{
									key: 'getGlobalPropertyFromString',
									value: function (t) {
										if (t.includes('.')) {
											var e = t.split('.'),
												r = e[0],
												n = e[1]
											if (void 0 !== window[r] && void 0 !== window[r][n])
												return window[r][n]
										} else if (void 0 !== window[t]) return window[t]
										return t
									}
								},
								{
									key: 'shouldBeUnset',
									value: function () {
										return (
											!this.jsoneditor.options.use_default_values &&
											!this.is_dirty
										)
									}
								},
								{
									key: 'getValue',
									value: function () {
										var t = !(!this.input || !this.input.value)
										if (!this.shouldBeUnset() || t)
											return this.imask_instance &&
												this.dependenciesFulfilled &&
												this.options.imask.returnUnmasked
												? this.imask_instance.unmaskedValue
												: O(x(e.prototype), 'getValue', this).call(this)
									}
								},
								{
									key: 'enable',
									value: function () {
										this.always_disabled ||
											((this.input.disabled = !1),
											O(x(e.prototype), 'enable', this).call(this))
									}
								},
								{
									key: 'disable',
									value: function (t) {
										t && (this.always_disabled = !0),
											(this.input.disabled = !0),
											O(x(e.prototype), 'disable', this).call(this)
									}
								},
								{
									key: 'afterInputReady',
									value: function () {
										this.theme.afterInputReady(this.input),
											window.Cleave && !this.cleave_instance
												? this.setupCleave(this.input)
												: window.IMask &&
													!this.imask_instance &&
													this.setupImask(this.input)
									}
								},
								{
									key: 'refreshValue',
									value: function () {
										this.input &&
											((this.value = this.input.value),
											'string' == typeof this.value ||
												this.shouldBeUnset() ||
												(this.value = ''),
											(this.serialized = this.value))
									}
								},
								{
									key: 'destroy',
									value: function () {
										this.cleave_instance && this.cleave_instance.destroy(),
											this.imask_instance && this.imask_instance.destroy(),
											(this.template = null),
											this.input &&
												this.input.parentNode &&
												this.input.parentNode.removeChild(this.input),
											this.label &&
												this.label.parentNode &&
												this.label.parentNode.removeChild(this.label),
											this.description &&
												this.description.parentNode &&
												this.description.parentNode.removeChild(
													this.description
												),
											O(x(e.prototype), 'destroy', this).call(this)
									}
								},
								{
									key: 'sanitize',
									value: function (t) {
										return t
									}
								},
								{
									key: 'onWatchedFieldChange',
									value: function () {
										var t
										this.template &&
											((t = this.getWatchedFieldValues()),
											this.setValue(this.template(t), !1, !0)),
											O(x(e.prototype), 'onWatchedFieldChange', this).call(this)
									}
								},
								{
									key: 'showValidationErrors',
									value: function (t) {
										var e = this
										if ('always' === this.jsoneditor.options.show_errors);
										else if (
											!this.is_dirty &&
											this.previous_error_setting ===
												this.jsoneditor.options.show_errors
										)
											return
										this.previous_error_setting =
											this.jsoneditor.options.show_errors
										var r = t.reduce(function (t, r) {
											return r.path === e.path && t.push(r.message), t
										}, [])
										r.length
											? this.theme.addInputError(
													this.input,
													''.concat(r.join('. '), '.')
												)
											: this.theme.removeInputError(this.input)
									}
								}
							]) &&
								(function (t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r]
										;(n.enumerable = n.enumerable || !1),
											(n.configurable = !0),
											'value' in n && (n.writable = !0),
											Object.defineProperty(t, k(n.key), n)
									}
								})(r.prototype, n),
							Object.defineProperty(r, 'prototype', { writable: !1 }),
							r
						)
						var r, n
					})(w)
					function S(t) {
						return (
							(S =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							S(t)
						)
					}
					function P(t) {
						var e = (function (t) {
							if ('object' != S(t) || !t) return t
							var e = t[Symbol.toPrimitive]
							if (void 0 !== e) {
								var r = e.call(t, 'string')
								if ('object' != S(r)) return r
								throw new TypeError(
									'@@toPrimitive must return a primitive value.'
								)
							}
							return String(t)
						})(t)
						return 'symbol' == S(e) ? e : e + ''
					}
					function L() {
						try {
							var t = !Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							)
						} catch (t) {}
						return (L = function () {
							return !!t
						})()
					}
					function T() {
						return (
							(T =
								'undefined' != typeof Reflect && Reflect.get
									? Reflect.get.bind()
									: function (t, e, r) {
											var n = (function (t, e) {
												for (
													;
													!Object.prototype.hasOwnProperty.call(t, e) &&
													null !== (t = A(t));

												);
												return t
											})(t, e)
											if (n) {
												var i = Object.getOwnPropertyDescriptor(n, e)
												return i.get
													? i.get.call(arguments.length < 3 ? t : r)
													: i.value
											}
										}),
							T.apply(this, arguments)
						)
					}
					function A(t) {
						return (
							(A = Object.setPrototypeOf
								? Object.getPrototypeOf.bind()
								: function (t) {
										return t.__proto__ || Object.getPrototypeOf(t)
									}),
							A(t)
						)
					}
					function R(t, e) {
						return (
							(R = Object.setPrototypeOf
								? Object.setPrototypeOf.bind()
								: function (t, e) {
										return (t.__proto__ = e), t
									}),
							R(t, e)
						)
					}
					var I = (function (t) {
						function e() {
							return (
								(function (t, e) {
									if (!(t instanceof e))
										throw new TypeError('Cannot call a class as a function')
								})(this, e),
								(function (t, e, r) {
									return (
										(e = A(e)),
										(function (t, e) {
											if (e && ('object' === S(e) || 'function' == typeof e))
												return e
											if (void 0 !== e)
												throw new TypeError(
													'Derived constructors may only return object or undefined'
												)
											return (function (t) {
												if (void 0 === t)
													throw new ReferenceError(
														"this hasn't been initialised - super() hasn't been called"
													)
												return t
											})(t)
										})(
											t,
											L()
												? Reflect.construct(e, r || [], A(t).constructor)
												: e.apply(t, r)
										)
									)
								})(this, e, arguments)
							)
						}
						return (
							(function (t, e) {
								if ('function' != typeof e && null !== e)
									throw new TypeError(
										'Super expression must either be null or a function'
									)
								;(t.prototype = Object.create(e && e.prototype, {
									constructor: { value: t, writable: !0, configurable: !0 }
								})),
									Object.defineProperty(t, 'prototype', { writable: !1 }),
									e && R(t, e)
							})(e, t),
							(r = e),
							(n = [
								{
									key: 'setValue',
									value: function (t, r, n) {
										t = this.applyConstFilter(t)
										var i = T(A(e.prototype), 'setValue', this).call(
											this,
											t,
											r,
											n
										)
										void 0 !== i &&
											i.changed &&
											this.ace_editor_instance &&
											(this.ace_editor_instance.setValue(i.value),
											this.ace_editor_instance.session
												.getSelection()
												.clearSelection(),
											this.ace_editor_instance.resize())
									}
								},
								{
									key: 'build',
									value: function () {
										;(this.options.format = 'textarea'),
											T(A(e.prototype), 'build', this).call(this),
											(this.input_type = this.schema.format),
											this.input.setAttribute(
												'data-schemaformat',
												this.input_type
											)
									}
								},
								{
									key: 'afterInputReady',
									value: function () {
										var t,
											r = this
										if (window.ace) {
											var n = this.input_type
											;('cpp' !== n && 'c++' !== n && 'c' !== n) ||
												(n = 'c_cpp'),
												(t = this.expandCallbacks(
													'ace',
													l(
														{},
														{
															selectionStyle: 'text',
															minLines: 30,
															maxLines: 30
														},
														this.defaults.options.ace || {},
														this.options.ace || {},
														{ mode: 'ace/mode/'.concat(n) }
													)
												)),
												(this.ace_container = document.createElement('div')),
												(this.ace_container.style.width = '100%'),
												(this.ace_container.style.position = 'relative'),
												this.input.parentNode.insertBefore(
													this.ace_container,
													this.input
												),
												(this.input.style.display = 'none'),
												(this.ace_editor_instance = window.ace.edit(
													this.ace_container,
													t
												)),
												this.ace_editor_instance.setValue(this.getValue()),
												this.ace_editor_instance.session
													.getSelection()
													.clearSelection(),
												this.ace_editor_instance.resize(),
												(this.schema.readOnly ||
													this.schema.readonly ||
													this.schema.template) &&
													this.ace_editor_instance.setReadOnly(!0),
												this.ace_editor_instance.on('change', function () {
													;(r.input.value = r.ace_editor_instance.getValue()),
														r.refreshValue(),
														(r.is_dirty = !0),
														r.onChange(!0)
												}),
												this.theme.afterInputReady(this.input)
										} else T(A(e.prototype), 'afterInputReady', this).call(this)
									}
								},
								{
									key: 'getNumColumns',
									value: function () {
										return 6
									}
								},
								{
									key: 'enable',
									value: function () {
										!this.always_disabled &&
											this.ace_editor_instance &&
											this.ace_editor_instance.setReadOnly(!1),
											T(A(e.prototype), 'enable', this).call(this)
									}
								},
								{
									key: 'disable',
									value: function (t) {
										this.ace_editor_instance &&
											this.ace_editor_instance.setReadOnly(!0),
											T(A(e.prototype), 'disable', this).call(this, t)
									}
								},
								{
									key: 'destroy',
									value: function () {
										this.ace_editor_instance &&
											(this.ace_editor_instance.destroy(),
											(this.ace_editor_instance = null)),
											T(A(e.prototype), 'destroy', this).call(this)
									}
								}
							]) &&
								(function (t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r]
										;(n.enumerable = n.enumerable || !1),
											(n.configurable = !0),
											'value' in n && (n.writable = !0),
											Object.defineProperty(t, P(n.key), n)
									}
								})(r.prototype, n),
							Object.defineProperty(r, 'prototype', { writable: !1 }),
							r
						)
						var r, n
					})(E)
					function B(t) {
						return (
							(B =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							B(t)
						)
					}
					function N(t) {
						var e = (function (t) {
							if ('object' != B(t) || !t) return t
							var e = t[Symbol.toPrimitive]
							if (void 0 !== e) {
								var r = e.call(t, 'string')
								if ('object' != B(r)) return r
								throw new TypeError(
									'@@toPrimitive must return a primitive value.'
								)
							}
							return String(t)
						})(t)
						return 'symbol' == B(e) ? e : e + ''
					}
					function D() {
						try {
							var t = !Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							)
						} catch (t) {}
						return (D = function () {
							return !!t
						})()
					}
					function F() {
						return (
							(F =
								'undefined' != typeof Reflect && Reflect.get
									? Reflect.get.bind()
									: function (t, e, r) {
											var n = (function (t, e) {
												for (
													;
													!Object.prototype.hasOwnProperty.call(t, e) &&
													null !== (t = V(t));

												);
												return t
											})(t, e)
											if (n) {
												var i = Object.getOwnPropertyDescriptor(n, e)
												return i.get
													? i.get.call(arguments.length < 3 ? t : r)
													: i.value
											}
										}),
							F.apply(this, arguments)
						)
					}
					function V(t) {
						return (
							(V = Object.setPrototypeOf
								? Object.getPrototypeOf.bind()
								: function (t) {
										return t.__proto__ || Object.getPrototypeOf(t)
									}),
							V(t)
						)
					}
					function H(t, e) {
						return (
							(H = Object.setPrototypeOf
								? Object.setPrototypeOf.bind()
								: function (t, e) {
										return (t.__proto__ = e), t
									}),
							H(t, e)
						)
					}
					r(2008), r(4554)
					var z = (function (t) {
						function e() {
							return (
								(function (t, e) {
									if (!(t instanceof e))
										throw new TypeError('Cannot call a class as a function')
								})(this, e),
								(function (t, e, r) {
									return (
										(e = V(e)),
										(function (t, e) {
											if (e && ('object' === B(e) || 'function' == typeof e))
												return e
											if (void 0 !== e)
												throw new TypeError(
													'Derived constructors may only return object or undefined'
												)
											return (function (t) {
												if (void 0 === t)
													throw new ReferenceError(
														"this hasn't been initialised - super() hasn't been called"
													)
												return t
											})(t)
										})(
											t,
											D()
												? Reflect.construct(e, r || [], V(t).constructor)
												: e.apply(t, r)
										)
									)
								})(this, e, arguments)
							)
						}
						return (
							(function (t, e) {
								if ('function' != typeof e && null !== e)
									throw new TypeError(
										'Super expression must either be null or a function'
									)
								;(t.prototype = Object.create(e && e.prototype, {
									constructor: { value: t, writable: !0, configurable: !0 }
								})),
									Object.defineProperty(t, 'prototype', { writable: !1 }),
									e && H(t, e)
							})(e, t),
							(r = e),
							(n = [
								{
									key: 'askConfirmation',
									value: function () {
										return (
											!0 !== this.jsoneditor.options.prompt_before_delete ||
											!1 !==
												window.confirm(
													this.translate('button_delete_node_warning')
												)
										)
									}
								},
								{
									key: 'register',
									value: function () {
										F(V(e.prototype), 'register', this).call(this),
											this.rows &&
												this.rows.forEach(function (t) {
													return t.register()
												})
									}
								},
								{
									key: 'unregister',
									value: function () {
										F(V(e.prototype), 'unregister', this).call(this),
											this.rows &&
												this.rows.forEach(function (t) {
													return t.unregister()
												})
									}
								},
								{
									key: 'getNumColumns',
									value: function () {
										var t = this.getItemInfo(0)
										return this.tabs_holder && 'tabs-top' !== this.schema.format
											? Math.max(Math.min(12, t.width + 2), 4)
											: t.width
									}
								},
								{
									key: 'enable',
									value: function () {
										var t = this
										this.always_disabled ||
											(this.setAvailability(this, !1),
											this.rows &&
												this.rows.forEach(function (e) {
													e.enable(), t.setAvailability(e, !1)
												}),
											F(V(e.prototype), 'enable', this).call(this))
									}
								},
								{
									key: 'disable',
									value: function (t) {
										var r = this
										t && (this.always_disabled = !0),
											this.setAvailability(this, !0),
											this.rows &&
												this.rows.forEach(function (e) {
													e.disable(t), r.setAvailability(e, !0)
												}),
											F(V(e.prototype), 'disable', this).call(this)
									}
								},
								{
									key: 'setAvailability',
									value: function (t, e) {
										t.add_row_button && (t.add_row_button.disabled = e),
											t.remove_all_rows_button &&
												(t.remove_all_rows_button.disabled = e),
											t.delete_last_row_button &&
												(t.delete_last_row_button.disabled = e),
											t.copy_button && (t.copy_button.disabled = e),
											t.delete_button && (t.delete_button.disabled = e),
											t.moveup_button && (t.moveup_button.disabled = e),
											t.movedown_button && (t.movedown_button.disabled = e)
									}
								},
								{
									key: 'preBuild',
									value: function () {
										F(V(e.prototype), 'preBuild', this).call(this),
											(this.rows = []),
											(this.row_cache = []),
											(this.hide_delete_buttons =
												this.options.disable_array_delete ||
												this.jsoneditor.options.disable_array_delete),
											(this.hide_delete_all_rows_buttons =
												this.hide_delete_buttons ||
												this.options.disable_array_delete_all_rows ||
												this.jsoneditor.options.disable_array_delete_all_rows),
											(this.hide_delete_last_row_buttons =
												this.hide_delete_buttons ||
												this.options.disable_array_delete_last_row ||
												this.jsoneditor.options.disable_array_delete_last_row),
											(this.hide_move_buttons =
												this.options.disable_array_reorder ||
												this.jsoneditor.options.disable_array_reorder),
											(this.hide_add_button =
												this.options.disable_array_add ||
												this.jsoneditor.options.disable_array_add),
											(this.show_copy_button =
												this.options.enable_array_copy ||
												this.jsoneditor.options.enable_array_copy),
											(this.array_controls_top =
												this.options.array_controls_top ||
												this.jsoneditor.options.array_controls_top)
									}
								},
								{
									key: 'build',
									value: function () {
										this.options.compact
											? ((this.title = this.theme.getHeader(
													'',
													this.getPathDepth()
												)),
												this.container.appendChild(this.title),
												(this.panel = this.theme.getIndentedPanel()),
												this.container.appendChild(this.panel),
												(this.title_controls =
													this.theme.getHeaderButtonHolder()),
												this.title.appendChild(this.title_controls),
												(this.controls = this.theme.getHeaderButtonHolder()),
												this.title.appendChild(this.controls),
												(this.row_holder = document.createElement('div')),
												this.panel.appendChild(this.row_holder))
											: ((this.header = document.createElement('span')),
												(this.header.textContent = this.getTitle()),
												(this.title = this.theme.getHeader(
													this.header,
													this.getPathDepth()
												)),
												this.container.appendChild(this.title),
												this.options.infoText &&
													((this.infoButton = this.theme.getInfoButton(
														this.translateProperty(this.options.infoText)
													)),
													this.container.appendChild(this.infoButton)),
												(this.title_controls =
													this.theme.getHeaderButtonHolder()),
												this.title.appendChild(this.title_controls),
												this.schema.description &&
													((this.description = this.theme.getDescription(
														this.translateProperty(this.schema.description)
													)),
													this.container.appendChild(this.description)),
												(this.error_holder = document.createElement('div')),
												this.container.appendChild(this.error_holder),
												'tabs-top' === this.schema.format
													? ((this.controls =
															this.theme.getHeaderButtonHolder()),
														this.title.appendChild(this.controls),
														(this.tabs_holder = this.theme.getTopTabHolder(
															this.getValidId(this.getItemTitle())
														)),
														this.container.appendChild(this.tabs_holder),
														(this.row_holder =
															this.theme.getTopTabContentHolder(
																this.tabs_holder
															)),
														(this.active_tab = null))
													: 'tabs' === this.schema.format
														? ((this.controls =
																this.theme.getHeaderButtonHolder()),
															this.title.appendChild(this.controls),
															(this.tabs_holder = this.theme.getTabHolder(
																this.getValidId(this.getItemTitle())
															)),
															this.container.appendChild(this.tabs_holder),
															(this.row_holder = this.theme.getTabContentHolder(
																this.tabs_holder
															)),
															(this.active_tab = null))
														: ((this.panel = this.theme.getIndentedPanel()),
															this.container.appendChild(this.panel),
															(this.row_holder = document.createElement('div')),
															this.panel.appendChild(this.row_holder),
															(this.controls = this.theme.getButtonHolder()),
															this.array_controls_top
																? this.title.appendChild(this.controls)
																: this.panel.appendChild(this.controls))),
											this.addControls()
									}
								},
								{
									key: 'postBuild',
									value: function () {
										F(V(e.prototype), 'postBuild', this).call(this),
											(this.schema.readOnly || this.schema.readonly) &&
												this.disable()
									}
								},
								{
									key: 'onChildEditorChange',
									value: function (t, r) {
										this.refreshValue(),
											this.refreshTabs(!0),
											(this.is_dirty = !0),
											F(V(e.prototype), 'onChildEditorChange', this).call(
												this,
												t,
												r
											)
									}
								},
								{
									key: 'getItemTitle',
									value: function () {
										if (!this.item_title)
											if (
												this.schema.items &&
												!Array.isArray(this.schema.items)
											) {
												var t = this.jsoneditor.expandRefs(this.schema.items)
												this.item_title =
													this.translateProperty(t.title) ||
													this.translate('default_array_item_title')
											} else
												this.item_title = this.translate(
													'default_array_item_title'
												)
										return this.cleanText(this.item_title)
									}
								},
								{
									key: 'getItemSchema',
									value: function (t) {
										return Array.isArray(this.schema.items)
											? t >= this.schema.items.length
												? !0 === this.schema.additionalItems
													? {}
													: this.schema.additionalItems
														? l({}, this.schema.additionalItems)
														: void 0
												: l({}, this.schema.items[t])
											: this.schema.items
												? l({}, this.schema.items)
												: {}
									}
								},
								{
									key: 'getItemInfo',
									value: function (t) {
										var e = this.getItemSchema(t)
										this.item_info = this.item_info || {}
										var r = JSON.stringify(e)
										return (
											void 0 !== this.item_info[r] ||
												((e = this.jsoneditor.expandRefs(e)),
												(this.item_info[r] = {
													title:
														this.translateProperty(e.title) ||
														this.translate('default_array_item_title'),
													default: e.default,
													width: 12,
													child_editors: e.properties || e.items
												})),
											this.item_info[r]
										)
									}
								},
								{
									key: 'getElementEditor',
									value: function (t) {
										var e = this.getItemInfo(t),
											r = this.getItemSchema(t)
										;(r = this.jsoneditor.expandRefs(r)).title = ''
											.concat(e.title, ' ')
											.concat(t + 1)
										var n,
											i = this.jsoneditor.getEditorClass(r)
										this.tabs_holder
											? ((n =
													'tabs-top' === this.schema.format
														? this.theme.getTopTabContent()
														: this.theme.getTabContent()).id = ''
													.concat(this.path, '.')
													.concat(t))
											: (n = e.child_editors
													? this.theme.getChildEditorHolder()
													: this.theme.getIndentedPanel()),
											this.row_holder.appendChild(n)
										var o = this.jsoneditor.createEditor(i, {
											jsoneditor: this.jsoneditor,
											schema: r,
											container: n,
											path: ''.concat(this.path, '.').concat(t),
											parent: this,
											required: !0
										})
										return (
											o.preBuild(),
											o.build(),
											o.postBuild(),
											o.title_controls ||
												((o.array_controls = this.theme.getButtonHolder()),
												n.appendChild(o.array_controls)),
											o
										)
									}
								},
								{
									key: 'checkParent',
									value: function (t) {
										return t && t.parentNode
									}
								},
								{
									key: 'destroy',
									value: function () {
										this.empty(!0),
											this.checkParent(this.title) &&
												this.title.parentNode.removeChild(this.title),
											this.checkParent(this.description) &&
												this.description.parentNode.removeChild(
													this.description
												),
											this.checkParent(this.row_holder) &&
												this.row_holder.parentNode.removeChild(this.row_holder),
											this.checkParent(this.controls) &&
												this.controls.parentNode.removeChild(this.controls),
											this.checkParent(this.panel) &&
												this.panel.parentNode.removeChild(this.panel),
											(this.rows =
												this.row_cache =
												this.title =
												this.description =
												this.row_holder =
												this.panel =
												this.controls =
													null),
											F(V(e.prototype), 'destroy', this).call(this)
									}
								},
								{
									key: 'empty',
									value: function (t) {
										var e = this
										if (null !== this.rows) {
											if (
												(this.rows.forEach(function (r, n) {
													t &&
														(e.checkParent(r.tab) &&
															r.tab.parentNode.removeChild(r.tab),
														e.destroyRow(r, !0),
														(e.row_cache[n] = null)),
														(e.rows[n] = null)
												}),
												t)
											)
												for (
													var r = this.rows.length;
													r < this.row_cache.length;
													r++
												)
													this.destroyRow(this.row_cache[r], !0),
														(this.row_cache[r] = null)
											;(this.rows = []), t && (this.row_cache = [])
										}
									}
								},
								{
									key: 'destroyRow',
									value: function (t, e) {
										var r = t.container
										e
											? (t.destroy(),
												r.parentNode && r.parentNode.removeChild(r),
												this.checkParent(t.tab) &&
													t.tab.parentNode.removeChild(t.tab))
											: (t.tab && (t.tab.style.display = 'none'),
												(r.style.display = 'none'),
												t.unregister())
									}
								},
								{
									key: 'getMax',
									value: function () {
										return Array.isArray(this.schema.items) &&
											!1 === this.schema.additionalItems
											? Math.min(
													this.schema.items.length,
													this.schema.maxItems || 1 / 0
												)
											: this.schema.maxItems || 1 / 0
									}
								},
								{
									key: 'refreshTabs',
									value: function (t) {
										var e = this
										this.rows.forEach(function (r) {
											r.tab &&
												(t
													? (r.tab_text.textContent = r.getHeaderText())
													: r.tab === e.active_tab
														? e.theme.markTabActive(r)
														: e.theme.markTabInactive(r))
										})
									}
								},
								{
									key: 'ensureArraySize',
									value: function (t) {
										if ((Array.isArray(t) || (t = [t]), this.schema.minItems))
											for (; t.length < this.schema.minItems; )
												t.push(this.getItemInfo(t.length).default)
										return (
											this.getMax() &&
												t.length > this.getMax() &&
												(t = t.slice(0, this.getMax())),
											t
										)
									}
								},
								{
									key: 'setValue',
									value: function () {
										var t = this,
											e =
												arguments.length > 0 && void 0 !== arguments[0]
													? arguments[0]
													: [],
											r = arguments.length > 1 ? arguments[1] : void 0
										if (
											((e = this.applyConstFilter(e)),
											(e = this.ensureArraySize(e)),
											JSON.stringify(e) !== this.serialized)
										) {
											e.forEach(function (e, n) {
												if (t.rows[n]) t.rows[n].setValue(e, r)
												else if (t.row_cache[n])
													(t.rows[n] = t.row_cache[n]),
														t.rows[n].setValue(e, r),
														(t.rows[n].container.style.display = ''),
														t.rows[n].tab && (t.rows[n].tab.style.display = ''),
														t.rows[n].register(),
														t.jsoneditor.trigger('addRow', t.rows[n])
												else {
													var i = t.addRow(e, r)
													t.jsoneditor.trigger('addRow', i)
												}
											})
											for (var n = e.length; n < this.rows.length; n++)
												this.destroyRow(this.rows[n]), (this.rows[n] = null)
											this.rows = this.rows.slice(0, e.length)
											var i = this.rows.find(function (e) {
													return e.tab === t.active_tab
												}),
												o = void 0 !== i ? i.tab : null
											!o && this.rows.length && (o = this.rows[0].tab),
												(this.active_tab = o),
												this.refreshValue(r),
												this.refreshTabs(!0),
												this.refreshTabs(),
												this.onChange()
										} else r && this.refreshValue(r)
									}
								},
								{
									key: 'setButtonState',
									value: function (t, e) {
										switch (
											this.options.button_state_mode ||
											this.jsoneditor.options.button_state_mode
										) {
											case 1:
											default:
												t.style.display = e ? '' : 'none'
												break
											case 2:
												t.disabled = !e
										}
									}
								},
								{
									key: 'setupButtons',
									value: function (t) {
										var e = []
										if (this.value.length)
											if (1 === this.value.length) {
												this.setButtonState(this.remove_all_rows_button, !1)
												var r = !(t || this.hide_delete_last_row_buttons)
												this.setButtonState(this.delete_last_row_button, r),
													e.push(r)
											} else {
												var n = !(t || this.hide_delete_last_row_buttons)
												this.setButtonState(this.delete_last_row_button, n),
													e.push(n)
												var i = !(t || this.hide_delete_all_rows_buttons)
												this.setButtonState(this.remove_all_rows_button, i),
													e.push(i)
											}
										else
											this.setButtonState(this.delete_last_row_button, !1),
												this.setButtonState(this.remove_all_rows_button, !1)
										var o = !(
											(this.getMax() && this.getMax() <= this.rows.length) ||
											this.hide_add_button
										)
										return (
											this.setButtonState(this.add_row_button, o),
											e.push(o),
											e.some(function (t) {
												return t
											})
										)
									}
								},
								{
									key: 'refreshValue',
									value: function (t) {
										var e = this,
											r = this.value ? this.value.length : 0
										if (
											((this.value = this.rows.map(function (t) {
												return t.getValue()
											})),
											r !== this.value.length || t)
										) {
											var n =
												this.schema.minItems &&
												this.schema.minItems >= this.rows.length
											this.rows.forEach(function (t, r) {
												if (t.movedown_button) {
													var i = r !== e.rows.length - 1
													e.setButtonState(t.movedown_button, i)
												}
												t.delete_button &&
													e.setButtonState(t.delete_button, !n),
													(e.value[r] = t.getValue())
											}),
												this.setupButtons(n) && !this.collapsed
													? (this.controls.style.display = 'inline-block')
													: (this.controls.style.display = 'none')
										}
										this.serialized = JSON.stringify(this.value)
									}
								},
								{
									key: 'addRow',
									value: function (t, e) {
										var r = this,
											n = this.rows.length
										;(this.rows[n] = this.getElementEditor(n)),
											(this.row_cache[n] = this.rows[n]),
											this.tabs_holder
												? ((this.rows[n].tab_text =
														document.createElement('span')),
													(this.rows[n].tab_text.textContent =
														this.rows[n].getHeaderText()),
													'tabs-top' === this.schema.format
														? ((this.rows[n].tab = this.theme.getTopTab(
																this.rows[n].tab_text,
																this.getValidId(this.rows[n].path)
															)),
															this.theme.addTopTab(
																this.tabs_holder,
																this.rows[n].tab
															))
														: ((this.rows[n].tab = this.theme.getTab(
																this.rows[n].tab_text,
																this.getValidId(this.rows[n].path)
															)),
															this.theme.addTab(
																this.tabs_holder,
																this.rows[n].tab
															)),
													this.rows[n].tab.addEventListener(
														'click',
														function (t) {
															;(r.active_tab = r.rows[n].tab),
																r.refreshTabs(),
																t.preventDefault(),
																t.stopPropagation()
														}
													),
													this._supportDragDrop(this.rows[n].tab))
												: this._supportDragDrop(this.rows[n].container, !0)
										var i =
											this.rows[n].title_controls || this.rows[n].array_controls
										return (
											this.hide_delete_buttons ||
												(this.rows[n].delete_button = this._createDeleteButton(
													n,
													i
												)),
											this.show_copy_button &&
												(this.rows[n].copy_button = this._createCopyButton(
													n,
													i
												)),
											n &&
												!this.hide_move_buttons &&
												(this.rows[n].moveup_button = this._createMoveUpButton(
													n,
													i
												)),
											this.hide_move_buttons ||
												(this.rows[n].movedown_button =
													this._createMoveDownButton(n, i)),
											void 0 !== t && this.rows[n].setValue(t, e),
											this.refreshTabs(),
											this.rows[n]
										)
									}
								},
								{
									key: '_createDeleteButton',
									value: function (t, e) {
										var r = this,
											n = this.getButton(
												this.getItemTitle(),
												'delete',
												'button_delete_row_title',
												[this.getItemTitle()]
											)
										return (
											n.classList.add('delete', 'json-editor-btntype-delete'),
											n.setAttribute('data-i', t),
											n.addEventListener('click', function (t) {
												if (
													(t.preventDefault(),
													t.stopPropagation(),
													!r.askConfirmation())
												)
													return !1
												var e = 1 * t.currentTarget.getAttribute('data-i'),
													n = r.getValue().filter(function (t, r) {
														return r !== e
													}),
													i = null,
													o = r.rows[e].getValue()
												r.setValue(n),
													r.rows[e]
														? (i = r.rows[e].tab)
														: r.rows[e - 1] && (i = r.rows[e - 1].tab),
													i && ((r.active_tab = i), r.refreshTabs()),
													r.onChange(!0),
													r.jsoneditor.trigger('deleteRow', o)
											}),
											e && e.appendChild(n),
											n
										)
									}
								},
								{
									key: '_createCopyButton',
									value: function (t, e) {
										var r = this,
											n = this.getButton(
												this.getItemTitle(),
												'copy',
												'button_copy_row_title',
												[this.getItemTitle()]
											),
											i = this.schema
										return (
											n.classList.add('copy', 'json-editor-btntype-copy'),
											n.setAttribute('data-i', t),
											n.addEventListener('click', function (t) {
												var e = r.getValue()
												t.preventDefault(), t.stopPropagation()
												var n = 1 * t.currentTarget.getAttribute('data-i')
												e.forEach(function (t, r) {
													if (r === n) {
														if (
															'string' === i.items.type &&
															'uuid' === i.items.format
														)
															t = f()
														else if (
															'object' === i.items.type &&
															i.items.properties
														)
															for (
																var o = 0, a = Object.keys(t);
																o < a.length;
																o++
															) {
																var s = a[o]
																i.items.properties &&
																	i.items.properties[s] &&
																	'uuid' === i.items.properties[s].format &&
																	(t[s] = f())
															}
														e.push(t)
													}
												}),
													r.setValue(e),
													r.refreshValue(!0),
													r.onChange(!0),
													r.jsoneditor.trigger('copyRow', r.rows[n - 1])
											}),
											e.appendChild(n),
											n
										)
									}
								},
								{
									key: '_createMoveUpButton',
									value: function (t, e) {
										var r = this,
											n = this.getButton(
												'',
												'tabs-top' === this.schema.format
													? 'moveleft'
													: 'moveup',
												'button_move_up_title'
											)
										return (
											n.classList.add('moveup', 'json-editor-btntype-move'),
											n.setAttribute('data-i', t),
											n.addEventListener('click', function (t) {
												t.preventDefault(), t.stopPropagation()
												var e = 1 * t.currentTarget.getAttribute('data-i')
												if (!(e <= 0)) {
													var n = r.getValue(),
														i = n[e - 1]
													;(n[e - 1] = n[e]),
														(n[e] = i),
														r.setValue(n),
														(r.active_tab = r.rows[e - 1].tab),
														r.refreshTabs(),
														r.onChange(!0),
														r.jsoneditor.trigger('moveRow', r.rows[e - 1])
												}
											}),
											e && e.appendChild(n),
											n
										)
									}
								},
								{
									key: '_createMoveDownButton',
									value: function (t, e) {
										var r = this,
											n = this.getButton(
												'',
												'tabs-top' === this.schema.format
													? 'moveright'
													: 'movedown',
												'button_move_down_title'
											)
										return (
											n.classList.add('movedown', 'json-editor-btntype-move'),
											n.setAttribute('data-i', t),
											n.addEventListener('click', function (t) {
												t.preventDefault(), t.stopPropagation()
												var e = 1 * t.currentTarget.getAttribute('data-i'),
													n = r.getValue()
												if (!(e >= n.length - 1)) {
													var i = n[e + 1]
													;(n[e + 1] = n[e]),
														(n[e] = i),
														r.setValue(n),
														(r.active_tab = r.rows[e + 1].tab),
														r.refreshTabs(),
														r.onChange(!0),
														r.jsoneditor.trigger('moveRow', r.rows[e + 1])
												}
											}),
											e && e.appendChild(n),
											n
										)
									}
								},
								{
									key: '_supportDragDrop',
									value: function (t, e) {
										var r = this
										M(
											t,
											function (t, e) {
												var n = r.getValue(),
													i = n[t]
												n.splice(t, 1),
													n.splice(e, 0, i),
													r.setValue(n),
													(r.active_tab = r.rows[e].tab),
													r.refreshTabs(),
													r.onChange(!0),
													r.jsoneditor.trigger('moveRow', r.rows[e])
											},
											{ useTrigger: e }
										)
									}
								},
								{
									key: 'addControls',
									value: function () {
										;(this.collapsed = !1),
											(this.toggle_button = this._createToggleButton()),
											this.options.collapsed && c(this.toggle_button, 'click'),
											this.schema.options &&
											void 0 !== this.schema.options.disable_collapse
												? this.schema.options.disable_collapse &&
													(this.toggle_button.style.display = 'none')
												: this.jsoneditor.options.disable_collapse &&
													(this.toggle_button.style.display = 'none'),
											(this.add_row_button = this._createAddRowButton()),
											(this.delete_last_row_button =
												this._createDeleteLastRowButton()),
											(this.remove_all_rows_button =
												this._createRemoveAllRowsButton()),
											this.tabs &&
												(this.add_row_button.classList.add(
													'je-array-control-btn'
												),
												this.delete_last_row_button.classList.add(
													'je-array-control-btn'
												),
												this.remove_all_rows_button.classList.add(
													'je-array-control-btn'
												))
									}
								},
								{
									key: '_createToggleButton',
									value: function () {
										var t = this,
											e = this.getButton('', 'collapse', 'button_collapse')
										e.classList.add('json-editor-btntype-toggle'),
											this.title.insertBefore(e, this.title.childNodes[0])
										var r = this.row_holder.style.display,
											n = this.controls.style.display
										return (
											e.addEventListener('click', function (e) {
												e.preventDefault(),
													e.stopPropagation(),
													t.panel && t.setButtonState(t.panel, t.collapsed),
													t.tabs_holder &&
														t.setButtonState(t.tabs_holder, t.collapsed),
													t.collapsed
														? ((t.collapsed = !1),
															(t.row_holder.style.display = r),
															(t.controls.style.display = n),
															t.setButtonText(
																e.currentTarget,
																'',
																'collapse',
																'button_collapse'
															))
														: ((t.collapsed = !0),
															(t.row_holder.style.display = 'none'),
															(t.controls.style.display = 'none'),
															t.setButtonText(
																e.currentTarget,
																'',
																'expand',
																'button_expand'
															))
											}),
											e
										)
									}
								},
								{
									key: '_createAddRowButton',
									value: function () {
										var t = this,
											e = this.getButton(
												this.getItemTitle(),
												'add',
												'button_add_row_title',
												[this.getItemTitle()]
											)
										return (
											e.classList.add('json-editor-btntype-add'),
											e.addEventListener('click', function (e) {
												e.preventDefault(), e.stopPropagation()
												var r,
													n = t.rows.length
												t.row_cache[n]
													? ((r = t.rows[n] = t.row_cache[n]),
														t.rows[n].setValue(t.rows[n].getDefault(), !0),
														'function' ==
															typeof t.rows[n]
																.deactivateNonRequiredProperties &&
															t.rows[n].deactivateNonRequiredProperties(!0),
														(t.rows[n].container.style.display = ''),
														t.rows[n].tab && (t.rows[n].tab.style.display = ''),
														t.rows[n].register())
													: (r = t.addRow()),
													(t.active_tab = t.rows[n].tab),
													t.refreshTabs(),
													t.refreshValue(),
													t.onChange(!0),
													t.jsoneditor.trigger('addRow', r)
											}),
											this.controls.appendChild(e),
											e
										)
									}
								},
								{
									key: '_createDeleteLastRowButton',
									value: function () {
										var t = this,
											e = this.getButton(
												'button_delete_last',
												'subtract',
												'button_delete_last_title',
												[this.getItemTitle()]
											)
										return (
											e.classList.add('json-editor-btntype-deletelast'),
											e.addEventListener('click', function (e) {
												if (
													(e.preventDefault(),
													e.stopPropagation(),
													!t.askConfirmation())
												)
													return !1
												var r = t.getValue(),
													n = null,
													i = r.pop()
												t.setValue(r),
													t.rows[t.rows.length - 1] &&
														(n = t.rows[t.rows.length - 1].tab),
													n && ((t.active_tab = n), t.refreshTabs()),
													t.onChange(!0),
													t.jsoneditor.trigger('deleteRow', i)
											}),
											this.controls.appendChild(e),
											e
										)
									}
								},
								{
									key: '_createRemoveAllRowsButton',
									value: function () {
										var t = this,
											e = this.getButton(
												'button_delete_all',
												'delete',
												'button_delete_all_title'
											)
										return (
											e.classList.add('json-editor-btntype-deleteall'),
											e.addEventListener('click', function (e) {
												if (
													(e.preventDefault(),
													e.stopPropagation(),
													!t.askConfirmation())
												)
													return !1
												var r = t.getValue()
												t.empty(!0),
													t.setValue([]),
													t.onChange(!0),
													t.jsoneditor.trigger('deleteAllRows', r)
											}),
											this.controls.appendChild(e),
											e
										)
									}
								},
								{
									key: 'showValidationErrors',
									value: function (t) {
										var e = this,
											r = [],
											n = []
										t.forEach(function (t) {
											t.path === e.path ? r.push(t) : n.push(t)
										}),
											this.error_holder &&
												(r.length
													? ((this.error_holder.innerHTML = ''),
														(this.error_holder.style.display = ''),
														r.forEach(function (t) {
															e.error_holder.appendChild(
																e.theme.getErrorMessage(t.message)
															)
														}))
													: (this.error_holder.style.display = 'none')),
											this.rows.forEach(function (t) {
												return t.showValidationErrors(n)
											})
									}
								}
							]),
							n &&
								(function (t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r]
										;(n.enumerable = n.enumerable || !1),
											(n.configurable = !0),
											'value' in n && (n.writable = !0),
											Object.defineProperty(t, N(n.key), n)
									}
								})(r.prototype, n),
							Object.defineProperty(r, 'prototype', { writable: !1 }),
							r
						)
						var r, n
					})(w)
					function M(t, e) {
						;(arguments.length > 2 && void 0 !== arguments[2]
							? arguments[2]
							: {}
						).useTrigger
							? t.addEventListener('mousedown', function (e) {
									if (e.ctrlKey) {
										t.draggable = !0
										var r = function e(r) {
											;(t.draggable = !1),
												document.removeEventListener('dragend', e),
												document.removeEventListener('mouseup', e)
										}
										document.addEventListener('dragend', r),
											document.addEventListener('mouseup', r)
									}
								})
							: (t.draggable = !0),
							t.addEventListener('dragstart', function (e) {
								window.curDrag = t
							}),
							t.addEventListener('dragover', function (e) {
								null === window.curDrag ||
								window.curDrag === t ||
								window.curDrag.parentElement !== t.parentElement
									? (e.dataTransfer.dropEffect = 'none')
									: (e.dataTransfer.dropEffect = 'move'),
									e.preventDefault()
							}),
							t.addEventListener('drop', function (r) {
								if (
									(r.preventDefault(),
									r.stopPropagation(),
									null !== window.curDrag &&
										window.curDrag !== t &&
										window.curDrag.parentElement === t.parentElement)
								) {
									var n = function (t) {
											for (
												var e = 0, r = t.parentElement.firstElementChild;
												r !== t && null !== r;

											)
												(r = r.nextSibling), ++e
											return e
										},
										i = n(window.curDrag),
										o = n(t)
									e(i, o, window.curDrag, t), (window.curDrag = null)
								}
							})
					}
					function q(t) {
						return (
							(q =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							q(t)
						)
					}
					function U(t) {
						var e = (function (t) {
							if ('object' != q(t) || !t) return t
							var e = t[Symbol.toPrimitive]
							if (void 0 !== e) {
								var r = e.call(t, 'string')
								if ('object' != q(r)) return r
								throw new TypeError(
									'@@toPrimitive must return a primitive value.'
								)
							}
							return String(t)
						})(t)
						return 'symbol' == q(e) ? e : e + ''
					}
					function G() {
						try {
							var t = !Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							)
						} catch (t) {}
						return (G = function () {
							return !!t
						})()
					}
					function $() {
						return (
							($ =
								'undefined' != typeof Reflect && Reflect.get
									? Reflect.get.bind()
									: function (t, e, r) {
											var n = (function (t, e) {
												for (
													;
													!Object.prototype.hasOwnProperty.call(t, e) &&
													null !== (t = J(t));

												);
												return t
											})(t, e)
											if (n) {
												var i = Object.getOwnPropertyDescriptor(n, e)
												return i.get
													? i.get.call(arguments.length < 3 ? t : r)
													: i.value
											}
										}),
							$.apply(this, arguments)
						)
					}
					function J(t) {
						return (
							(J = Object.setPrototypeOf
								? Object.getPrototypeOf.bind()
								: function (t) {
										return t.__proto__ || Object.getPrototypeOf(t)
									}),
							J(t)
						)
					}
					function W(t, e) {
						return (
							(W = Object.setPrototypeOf
								? Object.setPrototypeOf.bind()
								: function (t, e) {
										return (t.__proto__ = e), t
									}),
							W(t, e)
						)
					}
					z.rules = {
						'.json-editor-btntype-toggle': 'margin:0%2010px%200%200',
						'.je-array-control-btn':
							'width:100%25;text-align:left;margin-bottom:3px'
					}
					var Z = (function (t) {
						function e() {
							return (
								(function (t, e) {
									if (!(t instanceof e))
										throw new TypeError('Cannot call a class as a function')
								})(this, e),
								(function (t, e, r) {
									return (
										(e = J(e)),
										(function (t, e) {
											if (e && ('object' === q(e) || 'function' == typeof e))
												return e
											if (void 0 !== e)
												throw new TypeError(
													'Derived constructors may only return object or undefined'
												)
											return (function (t) {
												if (void 0 === t)
													throw new ReferenceError(
														"this hasn't been initialised - super() hasn't been called"
													)
												return t
											})(t)
										})(
											t,
											G()
												? Reflect.construct(e, r || [], J(t).constructor)
												: e.apply(t, r)
										)
									)
								})(this, e, arguments)
							)
						}
						return (
							(function (t, e) {
								if ('function' != typeof e && null !== e)
									throw new TypeError(
										'Super expression must either be null or a function'
									)
								;(t.prototype = Object.create(e && e.prototype, {
									constructor: { value: t, writable: !0, configurable: !0 }
								})),
									Object.defineProperty(t, 'prototype', { writable: !1 }),
									e && W(t, e)
							})(e, t),
							(r = e),
							(n = [
								{
									key: 'onInputChange',
									value: function () {
										;(this.value = this.input.value), this.onChange(!0)
									}
								},
								{
									key: 'register',
									value: function () {
										$(J(e.prototype), 'register', this).call(this),
											this.input &&
												this.jsoneditor.options.use_name_attributes &&
												this.input.setAttribute('name', this.formname)
									}
								},
								{
									key: 'unregister',
									value: function () {
										$(J(e.prototype), 'unregister', this).call(this),
											this.input && this.input.removeAttribute('name')
									}
								},
								{
									key: 'getNumColumns',
									value: function () {
										var t = this,
											e = this.getTitle().length
										return (
											Object.keys(this.select_values).forEach(function (r) {
												return (e = Math.max(
													e,
													''.concat(t.select_values[r]).length + 4
												))
											}),
											Math.min(12, Math.max(e / 7, 2))
										)
									}
								},
								{
									key: 'preBuild',
									value: function () {
										var t
										$(J(e.prototype), 'preBuild', this).call(this),
											(this.select_options = {}),
											(this.select_values = {}),
											(this.option_titles = []),
											(this.option_keys = []),
											(this.option_enum = [])
										var r = this.jsoneditor.expandRefs(this.schema.items || {}),
											n = r.enum || [],
											i = (r.options && r.options.enum) || [],
											o = (r.options && r.options.enum_titles) || []
										for (t = 0; t < n.length; t++)
											if (this.sanitize(n[t]) === n[t]) {
												var a = i[t] || {}
												'title' in a || (a.title = ''.concat(o[t] || n[t])),
													this.option_keys.push(''.concat(n[t])),
													this.option_enum.push(a),
													(this.select_values[''.concat(n[t])] = n[t])
											}
									}
								},
								{
									key: 'build',
									value: function () {
										var t,
											e = this
										if (
											(this.options.compact ||
												(this.header = this.label =
													this.theme.getLabelLike(
														this.getTitle(),
														this.isRequired()
													)),
											this.schema.description &&
												(this.description = this.theme.getFormInputDescription(
													this.translateProperty(this.schema.description)
												)),
											this.options.infoText &&
												(this.infoButton = this.theme.getInfoButton(
													this.translateProperty(this.options.infoText)
												)),
											this.options.compact &&
												this.container.classList.add('compact'),
											(!this.schema.format && this.option_keys.length < 8) ||
												'checkbox' === this.schema.format)
										) {
											for (
												this.input_type = 'checkboxes',
													this.inputs = {},
													this.controls = {},
													t = 0;
												t < this.option_keys.length;
												t++
											) {
												var r = this.formname + t.toString()
												;(this.inputs[this.option_keys[t]] =
													this.theme.getCheckbox()),
													(this.inputs[this.option_keys[t]].id = r),
													(this.select_options[this.option_keys[t]] =
														this.inputs[this.option_keys[t]])
												var n = this.theme.getCheckboxLabel(
													this.option_enum[t].title
												)
												if (((n.htmlFor = r), this.option_enum[t].infoText)) {
													var i = this.theme.getInfoButton(
														this.translateProperty(this.option_enum[t].infoText)
													)
													n.appendChild(i)
												}
												this.controls['_' + this.option_keys[t]] =
													this.theme.getFormControl(
														n,
														this.inputs[this.option_keys[t]]
													)
											}
											;(this.control = this.theme.getMultiCheckboxHolder(
												this.controls,
												this.label,
												this.description,
												this.infoButton
											)),
												(this.inputs.controlgroup = this.inputs.controls =
													this.control)
										} else {
											for (
												this.options.compact ||
													(this.header = this.label =
														this.theme.getFormInputLabel(
															this.getTitle(),
															this.isRequired()
														)),
													this.input_type = 'select',
													this.input = this.theme.getSelectInput(
														this.option_keys,
														!0
													),
													this.theme.setSelectOptions(
														this.input,
														this.option_keys,
														this.option_enum.map(function (t) {
															return t.title
														})
													),
													this.input.setAttribute('multiple', 'multiple'),
													this.input.size = Math.min(
														10,
														this.option_keys.length
													),
													t = 0;
												t < this.option_keys.length;
												t++
											)
												this.select_options[this.option_keys[t]] =
													this.input.children[t]
											this.control = this.theme.getFormControl(
												this.label,
												this.input,
												this.description,
												this.infoButton,
												this.formname
											)
										}
										;(this.schema.readOnly || this.schema.readonly) &&
											this.disable(!0),
											this.container.appendChild(this.control),
											(this.multiselectChangeHandler = function (r) {
												var n = []
												for (t = 0; t < e.option_keys.length; t++)
													e.select_options[e.option_keys[t]] &&
														(e.select_options[e.option_keys[t]].selected ||
															e.select_options[e.option_keys[t]].checked) &&
														n.push(e.select_values[e.option_keys[t]])
												e.updateValue(n), e.onChange(!0)
											}),
											this.control.addEventListener(
												'change',
												this.multiselectChangeHandler,
												!1
											),
											window.requestAnimationFrame(function () {
												e.afterInputReady()
											})
									}
								},
								{
									key: 'postBuild',
									value: function () {
										$(J(e.prototype), 'postBuild', this).call(this)
									}
								},
								{
									key: 'afterInputReady',
									value: function () {
										this.theme.afterInputReady(this.input || this.inputs)
									}
								},
								{
									key: 'setValue',
									value: function (t, e) {
										var r = this
										;(t = (t = this.applyConstFilter(t)) || []),
											Array.isArray(t) || (t = [t]),
											(t = t.map(function (t) {
												return ''.concat(t)
											})),
											Object.keys(this.select_options).forEach(function (e) {
												r.select_options[e][
													'select' === r.input_type ? 'selected' : 'checked'
												] = t.includes(e)
											}),
											this.updateValue(t),
											this.onChange(!0)
									}
								},
								{
									key: 'removeValue',
									value: function (t) {
										;(t = [].concat(t)),
											this.setValue(
												this.getValue().filter(function (e) {
													return !t.includes(e)
												})
											)
									}
								},
								{
									key: 'addValue',
									value: function (t) {
										this.setValue(this.getValue().concat(t))
									}
								},
								{
									key: 'updateValue',
									value: function (t) {
										for (var e = !1, r = [], n = 0; n < t.length; n++)
											if (this.select_options[''.concat(t[n])]) {
												var i = this.sanitize(this.select_values[t[n]])
												r.push(i), i !== t[n] && (e = !0)
											} else e = !0
										return (this.value = r), e
									}
								},
								{
									key: 'sanitize',
									value: function (t) {
										return 'boolean' === this.schema.items.type
											? !!t
											: 'number' === this.schema.items.type
												? 1 * t || 0
												: 'integer' === this.schema.items.type
													? Math.floor(1 * t || 0)
													: ''.concat(t)
									}
								},
								{
									key: 'enable',
									value: function () {
										var t = this
										this.always_disabled ||
											(this.input
												? (this.input.disabled = !1)
												: this.inputs &&
													Object.keys(this.inputs).forEach(function (e) {
														return (t.inputs[e].disabled = !1)
													}),
											$(J(e.prototype), 'enable', this).call(this))
									}
								},
								{
									key: 'disable',
									value: function (t) {
										var r = this
										t && (this.always_disabled = !0),
											this.input
												? (this.input.disabled = !0)
												: this.inputs &&
													Object.keys(this.inputs).forEach(function (t) {
														return (r.inputs[t].disabled = !0)
													}),
											$(J(e.prototype), 'disable', this).call(this)
									}
								},
								{
									key: 'destroy',
									value: function () {
										$(J(e.prototype), 'destroy', this).call(this)
									}
								},
								{
									key: 'escapeRegExp',
									value: function (t) {
										return t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
									}
								},
								{
									key: 'showValidationErrors',
									value: function (t) {
										var e = new RegExp(
												'^'.concat(this.escapeRegExp(this.path), '(\\.\\d+)?$')
											),
											r = t.reduce(function (t, r) {
												return r.path.match(e) && t.push(r.message), t
											}, [])
										r.length
											? this.theme.addInputError(
													this.input || this.inputs,
													''.concat(r.join('. '), '.')
												)
											: this.theme.removeInputError(this.input || this.inputs)
									}
								}
							]) &&
								(function (t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r]
										;(n.enumerable = n.enumerable || !1),
											(n.configurable = !0),
											'value' in n && (n.writable = !0),
											Object.defineProperty(t, U(n.key), n)
									}
								})(r.prototype, n),
							Object.defineProperty(r, 'prototype', { writable: !1 }),
							r
						)
						var r, n
					})(w)
					function Y(t) {
						return (
							(Y =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							Y(t)
						)
					}
					function Q(t) {
						var e = (function (t) {
							if ('object' != Y(t) || !t) return t
							var e = t[Symbol.toPrimitive]
							if (void 0 !== e) {
								var r = e.call(t, 'string')
								if ('object' != Y(r)) return r
								throw new TypeError(
									'@@toPrimitive must return a primitive value.'
								)
							}
							return String(t)
						})(t)
						return 'symbol' == Y(e) ? e : e + ''
					}
					function K() {
						try {
							var t = !Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							)
						} catch (t) {}
						return (K = function () {
							return !!t
						})()
					}
					function X() {
						return (
							(X =
								'undefined' != typeof Reflect && Reflect.get
									? Reflect.get.bind()
									: function (t, e, r) {
											var n = (function (t, e) {
												for (
													;
													!Object.prototype.hasOwnProperty.call(t, e) &&
													null !== (t = tt(t));

												);
												return t
											})(t, e)
											if (n) {
												var i = Object.getOwnPropertyDescriptor(n, e)
												return i.get
													? i.get.call(arguments.length < 3 ? t : r)
													: i.value
											}
										}),
							X.apply(this, arguments)
						)
					}
					function tt(t) {
						return (
							(tt = Object.setPrototypeOf
								? Object.getPrototypeOf.bind()
								: function (t) {
										return t.__proto__ || Object.getPrototypeOf(t)
									}),
							tt(t)
						)
					}
					function et(t, e) {
						return (
							(et = Object.setPrototypeOf
								? Object.setPrototypeOf.bind()
								: function (t, e) {
										return (t.__proto__ = e), t
									}),
							et(t, e)
						)
					}
					var rt = (function (t) {
						function e() {
							return (
								(function (t, e) {
									if (!(t instanceof e))
										throw new TypeError('Cannot call a class as a function')
								})(this, e),
								(function (t, e, r) {
									return (
										(e = tt(e)),
										(function (t, e) {
											if (e && ('object' === Y(e) || 'function' == typeof e))
												return e
											if (void 0 !== e)
												throw new TypeError(
													'Derived constructors may only return object or undefined'
												)
											return (function (t) {
												if (void 0 === t)
													throw new ReferenceError(
														"this hasn't been initialised - super() hasn't been called"
													)
												return t
											})(t)
										})(
											t,
											K()
												? Reflect.construct(e, r || [], tt(t).constructor)
												: e.apply(t, r)
										)
									)
								})(this, e, arguments)
							)
						}
						return (
							(function (t, e) {
								if ('function' != typeof e && null !== e)
									throw new TypeError(
										'Super expression must either be null or a function'
									)
								;(t.prototype = Object.create(e && e.prototype, {
									constructor: { value: t, writable: !0, configurable: !0 }
								})),
									Object.defineProperty(t, 'prototype', { writable: !1 }),
									e && et(t, e)
							})(e, t),
							(r = e),
							(n = [
								{
									key: 'setValue',
									value: function (t, r) {
										this.choices_instance
											? ((t = this.applyConstFilter(t)),
												(t = [].concat(t).map(function (t) {
													return ''.concat(t)
												})),
												this.updateValue(t),
												this.choices_instance.removeActiveItems(),
												this.choices_instance.setChoiceByValue(this.value),
												this.onChange(!0))
											: X(tt(e.prototype), 'setValue', this).call(this, t, r)
									}
								},
								{
									key: 'afterInputReady',
									value: function () {
										var t = this
										if (window.Choices && !this.choices_instance) {
											var r = this.expandCallbacks(
												'choices',
												l(
													{},
													{ removeItems: !0, removeItemButton: !0 },
													this.defaults.options.choices || {},
													this.options.choices || {},
													{
														addItems: !0,
														editItems: !1,
														duplicateItemsAllowed: !1
													}
												)
											)
											;(this.newEnumAllowed = !1),
												(this.choices_instance = new window.Choices(
													this.input,
													r
												)),
												this.control.removeEventListener(
													'change',
													this.multiselectChangeHandler
												),
												(this.multiselectChangeHandler = function (e) {
													var r = t.choices_instance.getValue(!0)
													t.updateValue(r), t.onChange(!0)
												}),
												this.control.addEventListener(
													'change',
													this.multiselectChangeHandler,
													!1
												)
										}
										X(tt(e.prototype), 'afterInputReady', this).call(this)
									}
								},
								{
									key: 'updateValue',
									value: function (t) {
										t = [].concat(t)
										for (var e = !1, r = [], n = 0; n < t.length; n++) {
											if (!this.select_values[''.concat(t[n])]) {
												if (((e = !0), !this.newEnumAllowed)) continue
												if (!this.addNewOption(t[n])) continue
											}
											var i = this.sanitize(this.select_values[t[n]])
											r.push(i), i !== t[n] && (e = !0)
										}
										return (this.value = r), e
									}
								},
								{
									key: 'addNewOption',
									value: function (t) {
										return (
											this.option_keys.push(''.concat(t)),
											this.option_titles.push(''.concat(t)),
											(this.select_values[''.concat(t)] = t),
											this.schema.items.enum.push(t),
											this.choices_instance.setChoices(
												[{ value: ''.concat(t), label: ''.concat(t) }],
												'value',
												'label',
												!1
											),
											!0
										)
									}
								},
								{
									key: 'enable',
									value: function () {
										!this.always_disabled &&
											this.choices_instance &&
											this.choices_instance.enable(),
											X(tt(e.prototype), 'enable', this).call(this)
									}
								},
								{
									key: 'disable',
									value: function (t) {
										this.choices_instance && this.choices_instance.disable(),
											X(tt(e.prototype), 'disable', this).call(this, t)
									}
								},
								{
									key: 'destroy',
									value: function () {
										this.choices_instance &&
											(this.choices_instance.destroy(),
											(this.choices_instance = null)),
											X(tt(e.prototype), 'destroy', this).call(this)
									}
								}
							]) &&
								(function (t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r]
										;(n.enumerable = n.enumerable || !1),
											(n.configurable = !0),
											'value' in n && (n.writable = !0),
											Object.defineProperty(t, Q(n.key), n)
									}
								})(r.prototype, n),
							Object.defineProperty(r, 'prototype', { writable: !1 }),
							r
						)
						var r, n
					})(Z)
					function nt(t) {
						return (
							(nt =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							nt(t)
						)
					}
					function it(t) {
						var e = (function (t) {
							if ('object' != nt(t) || !t) return t
							var e = t[Symbol.toPrimitive]
							if (void 0 !== e) {
								var r = e.call(t, 'string')
								if ('object' != nt(r)) return r
								throw new TypeError(
									'@@toPrimitive must return a primitive value.'
								)
							}
							return String(t)
						})(t)
						return 'symbol' == nt(e) ? e : e + ''
					}
					function ot() {
						try {
							var t = !Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							)
						} catch (t) {}
						return (ot = function () {
							return !!t
						})()
					}
					function at() {
						return (
							(at =
								'undefined' != typeof Reflect && Reflect.get
									? Reflect.get.bind()
									: function (t, e, r) {
											var n = (function (t, e) {
												for (
													;
													!Object.prototype.hasOwnProperty.call(t, e) &&
													null !== (t = st(t));

												);
												return t
											})(t, e)
											if (n) {
												var i = Object.getOwnPropertyDescriptor(n, e)
												return i.get
													? i.get.call(arguments.length < 3 ? t : r)
													: i.value
											}
										}),
							at.apply(this, arguments)
						)
					}
					function st(t) {
						return (
							(st = Object.setPrototypeOf
								? Object.getPrototypeOf.bind()
								: function (t) {
										return t.__proto__ || Object.getPrototypeOf(t)
									}),
							st(t)
						)
					}
					function lt(t, e) {
						return (
							(lt = Object.setPrototypeOf
								? Object.setPrototypeOf.bind()
								: function (t, e) {
										return (t.__proto__ = e), t
									}),
							lt(t, e)
						)
					}
					var ct = (function (t) {
						function e() {
							return (
								(function (t, e) {
									if (!(t instanceof e))
										throw new TypeError('Cannot call a class as a function')
								})(this, e),
								(function (t, e, r) {
									return (
										(e = st(e)),
										(function (t, e) {
											if (e && ('object' === nt(e) || 'function' == typeof e))
												return e
											if (void 0 !== e)
												throw new TypeError(
													'Derived constructors may only return object or undefined'
												)
											return (function (t) {
												if (void 0 === t)
													throw new ReferenceError(
														"this hasn't been initialised - super() hasn't been called"
													)
												return t
											})(t)
										})(
											t,
											ot()
												? Reflect.construct(e, r || [], st(t).constructor)
												: e.apply(t, r)
										)
									)
								})(this, e, arguments)
							)
						}
						return (
							(function (t, e) {
								if ('function' != typeof e && null !== e)
									throw new TypeError(
										'Super expression must either be null or a function'
									)
								;(t.prototype = Object.create(e && e.prototype, {
									constructor: { value: t, writable: !0, configurable: !0 }
								})),
									Object.defineProperty(t, 'prototype', { writable: !1 }),
									e && lt(t, e)
							})(e, t),
							(r = e),
							(n = [
								{
									key: 'setValue',
									value: function (t, r) {
										;(t = this.applyConstFilter(t)),
											this.select2_instance
												? ((t = [].concat(t).map(function (t) {
														return ''.concat(t)
													})),
													this.updateValue(t),
													this.select2v4
														? this.select2_instance.val(this.value).change()
														: this.select2_instance.select2('val', this.value),
													this.onChange(!0))
												: at(st(e.prototype), 'setValue', this).call(this, t, r)
									}
								},
								{
									key: 'afterInputReady',
									value: function () {
										var t,
											r = this
										window.jQuery &&
											window.jQuery.fn &&
											window.jQuery.fn.select2 &&
											!this.select2_instance &&
											((t = this.expandCallbacks(
												'select2',
												l(
													{},
													{ tags: !0, width: '100%' },
													this.defaults.options.select2 || {},
													this.options.select2 || {}
												)
											)),
											(this.newEnumAllowed = t.tags =
												!!t.tags &&
												this.schema.items &&
												'string' === this.schema.items.type),
											(this.select2_instance = window
												.jQuery(this.input)
												.select2(t)),
											(this.select2v4 = h(
												this.select2_instance.select2,
												'amd'
											)),
											(this.selectChangeHandler = function () {
												var t = r.select2v4
													? r.select2_instance.val()
													: r.select2_instance.select2('val')
												r.updateValue(t), r.onChange(!0)
											}),
											this.select2_instance.on(
												'select2-blur',
												this.selectChangeHandler
											),
											this.select2_instance.on(
												'change',
												this.selectChangeHandler
											)),
											at(st(e.prototype), 'afterInputReady', this).call(this)
									}
								},
								{
									key: 'updateValue',
									value: function (t) {
										t = [].concat(t)
										for (var e = !1, r = [], n = 0; n < t.length; n++) {
											if (!this.select_values[''.concat(t[n])]) {
												if (((e = !0), !this.newEnumAllowed)) continue
												if (!this.addNewOption(t[n])) continue
											}
											var i = this.sanitize(this.select_values[t[n]])
											r.push(i), i !== t[n] && (e = !0)
										}
										return (this.value = r), e
									}
								},
								{
									key: 'addNewOption',
									value: function (t) {
										this.option_keys.push(''.concat(t)),
											this.option_titles.push(''.concat(t)),
											(this.select_values[''.concat(t)] = t),
											this.schema.items.enum.push(t)
										var e = this.input.querySelector(
											'option[value="'.concat(t, '"]')
										)
										return (
											e
												? e.removeAttribute('data-select2-tag')
												: this.input
														.appendChild(new Option(t, t, !1, !1))
														.trigger('change'),
											!0
										)
									}
								},
								{
									key: 'enable',
									value: function () {
										!this.always_disabled &&
											this.select2_instance &&
											(this.select2v4
												? this.select2_instance.prop('disabled', !1)
												: this.select2_instance.select2('enable', !0)),
											at(st(e.prototype), 'enable', this).call(this)
									}
								},
								{
									key: 'disable',
									value: function (t) {
										this.select2_instance &&
											(this.select2v4
												? this.select2_instance.prop('disabled', !0)
												: this.select2_instance.select2('enable', !1)),
											at(st(e.prototype), 'disable', this).call(this)
									}
								},
								{
									key: 'destroy',
									value: function () {
										this.select2_instance &&
											(this.select2_instance.select2('destroy'),
											(this.select2_instance = null)),
											at(st(e.prototype), 'destroy', this).call(this)
									}
								}
							]) &&
								(function (t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r]
										;(n.enumerable = n.enumerable || !1),
											(n.configurable = !0),
											'value' in n && (n.writable = !0),
											Object.defineProperty(t, it(n.key), n)
									}
								})(r.prototype, n),
							Object.defineProperty(r, 'prototype', { writable: !1 }),
							r
						)
						var r, n
					})(Z)
					function ut(t) {
						return (
							(ut =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							ut(t)
						)
					}
					function ht(t) {
						var e = (function (t) {
							if ('object' != ut(t) || !t) return t
							var e = t[Symbol.toPrimitive]
							if (void 0 !== e) {
								var r = e.call(t, 'string')
								if ('object' != ut(r)) return r
								throw new TypeError(
									'@@toPrimitive must return a primitive value.'
								)
							}
							return String(t)
						})(t)
						return 'symbol' == ut(e) ? e : e + ''
					}
					function pt() {
						try {
							var t = !Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							)
						} catch (t) {}
						return (pt = function () {
							return !!t
						})()
					}
					function dt() {
						return (
							(dt =
								'undefined' != typeof Reflect && Reflect.get
									? Reflect.get.bind()
									: function (t, e, r) {
											var n = (function (t, e) {
												for (
													;
													!Object.prototype.hasOwnProperty.call(t, e) &&
													null !== (t = ft(t));

												);
												return t
											})(t, e)
											if (n) {
												var i = Object.getOwnPropertyDescriptor(n, e)
												return i.get
													? i.get.call(arguments.length < 3 ? t : r)
													: i.value
											}
										}),
							dt.apply(this, arguments)
						)
					}
					function ft(t) {
						return (
							(ft = Object.setPrototypeOf
								? Object.getPrototypeOf.bind()
								: function (t) {
										return t.__proto__ || Object.getPrototypeOf(t)
									}),
							ft(t)
						)
					}
					function yt(t, e) {
						return (
							(yt = Object.setPrototypeOf
								? Object.setPrototypeOf.bind()
								: function (t, e) {
										return (t.__proto__ = e), t
									}),
							yt(t, e)
						)
					}
					var mt = (function (t) {
						function e() {
							return (
								(function (t, e) {
									if (!(t instanceof e))
										throw new TypeError('Cannot call a class as a function')
								})(this, e),
								(function (t, e, r) {
									return (
										(e = ft(e)),
										(function (t, e) {
											if (e && ('object' === ut(e) || 'function' == typeof e))
												return e
											if (void 0 !== e)
												throw new TypeError(
													'Derived constructors may only return object or undefined'
												)
											return (function (t) {
												if (void 0 === t)
													throw new ReferenceError(
														"this hasn't been initialised - super() hasn't been called"
													)
												return t
											})(t)
										})(
											t,
											pt()
												? Reflect.construct(e, r || [], ft(t).constructor)
												: e.apply(t, r)
										)
									)
								})(this, e, arguments)
							)
						}
						return (
							(function (t, e) {
								if ('function' != typeof e && null !== e)
									throw new TypeError(
										'Super expression must either be null or a function'
									)
								;(t.prototype = Object.create(e && e.prototype, {
									constructor: { value: t, writable: !0, configurable: !0 }
								})),
									Object.defineProperty(t, 'prototype', { writable: !1 }),
									e && yt(t, e)
							})(e, t),
							(r = e),
							(n = [
								{
									key: 'setValue',
									value: function (t, r) {
										;(t = this.applyConstFilter(t)),
											this.selectize_instance
												? ((t = [].concat(t).map(function (t) {
														return ''.concat(t)
													})),
													this.updateValue(t),
													this.selectize_instance.setValue(this.value),
													this.onChange(!0))
												: dt(ft(e.prototype), 'setValue', this).call(this, t, r)
									}
								},
								{
									key: 'afterInputReady',
									value: function () {
										var t,
											r = this
										if (
											window.jQuery &&
											window.jQuery.fn &&
											window.jQuery.fn.selectize &&
											!this.selectize_instance
										) {
											;(t = this.expandCallbacks(
												'selectize',
												l(
													{},
													{
														plugins: ['remove_button'],
														delimiter: !1,
														createOnBlur: !0,
														create: !0
													},
													this.defaults.options.selectize || {},
													this.options.selectize || {}
												)
											)),
												(this.newEnumAllowed = t.create =
													!!t.create &&
													this.schema.items &&
													'string' === this.schema.items.type),
												(this.selectize_instance = window
													.jQuery(this.input)
													.selectize(t)[0].selectize),
												this.control.removeEventListener(
													'change',
													this.multiselectChangeHandler
												),
												(this.multiselectChangeHandler = function (t) {
													var e = r.selectize_instance.getValue()
													r.updateValue(e), r.onChange(!0)
												}),
												this.selectize_instance.on(
													'change',
													this.multiselectChangeHandler
												)
											var n = this.theme.getHiddenLabel(this.formname)
											this.input.setAttribute(
												'id',
												this.formname + '-hidden-input'
											),
												n.setAttribute('for', this.formname + '-hidden-input'),
												this.input.parentNode.insertBefore(n, this.input)
											var i = this.selectize_instance.$control[0]
											if (i) {
												var o = this.theme.getHiddenLabel(this.formname)
												o.setAttribute('for', this.formname + '-selectized'),
													i.appendChild(o)
											}
										}
										dt(ft(e.prototype), 'afterInputReady', this).call(this)
									}
								},
								{
									key: 'updateValue',
									value: function (t) {
										t = [].concat(t)
										for (var e = !1, r = [], n = 0; n < t.length; n++) {
											if (!this.select_values[''.concat(t[n])]) {
												if (((e = !0), !this.newEnumAllowed)) continue
												if (!this.addNewOption(t[n])) continue
											}
											var i = this.sanitize(this.select_values[t[n]])
											r.push(i), i !== t[n] && (e = !0)
										}
										return (this.value = r), e
									}
								},
								{
									key: 'addNewOption',
									value: function (t) {
										return (
											this.option_keys.push(''.concat(t)),
											this.option_titles.push(''.concat(t)),
											(this.select_values[''.concat(t)] = t),
											this.selectize_instance.addOption({ text: t, value: t }),
											!0
										)
									}
								},
								{
									key: 'enable',
									value: function () {
										!this.always_disabled &&
											this.selectize_instance &&
											this.selectize_instance.unlock(),
											dt(ft(e.prototype), 'enable', this).call(this)
									}
								},
								{
									key: 'disable',
									value: function (t) {
										this.selectize_instance && this.selectize_instance.lock(),
											dt(ft(e.prototype), 'disable', this).call(this, t)
									}
								},
								{
									key: 'destroy',
									value: function () {
										this.selectize_instance &&
											(this.selectize_instance.destroy(),
											(this.selectize_instance = null)),
											dt(ft(e.prototype), 'destroy', this).call(this)
									}
								}
							]) &&
								(function (t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r]
										;(n.enumerable = n.enumerable || !1),
											(n.configurable = !0),
											'value' in n && (n.writable = !0),
											Object.defineProperty(t, ht(n.key), n)
									}
								})(r.prototype, n),
							Object.defineProperty(r, 'prototype', { writable: !1 }),
							r
						)
						var r, n
					})(Z)
					function vt(t) {
						return (
							(vt =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							vt(t)
						)
					}
					function bt(t) {
						var e = (function (t) {
							if ('object' != vt(t) || !t) return t
							var e = t[Symbol.toPrimitive]
							if (void 0 !== e) {
								var r = e.call(t, 'string')
								if ('object' != vt(r)) return r
								throw new TypeError(
									'@@toPrimitive must return a primitive value.'
								)
							}
							return String(t)
						})(t)
						return 'symbol' == vt(e) ? e : e + ''
					}
					function gt() {
						try {
							var t = !Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							)
						} catch (t) {}
						return (gt = function () {
							return !!t
						})()
					}
					function wt() {
						return (
							(wt =
								'undefined' != typeof Reflect && Reflect.get
									? Reflect.get.bind()
									: function (t, e, r) {
											var n = (function (t, e) {
												for (
													;
													!Object.prototype.hasOwnProperty.call(t, e) &&
													null !== (t = _t(t));

												);
												return t
											})(t, e)
											if (n) {
												var i = Object.getOwnPropertyDescriptor(n, e)
												return i.get
													? i.get.call(arguments.length < 3 ? t : r)
													: i.value
											}
										}),
							wt.apply(this, arguments)
						)
					}
					function _t(t) {
						return (
							(_t = Object.setPrototypeOf
								? Object.getPrototypeOf.bind()
								: function (t) {
										return t.__proto__ || Object.getPrototypeOf(t)
									}),
							_t(t)
						)
					}
					function kt(t, e) {
						return (
							(kt = Object.setPrototypeOf
								? Object.setPrototypeOf.bind()
								: function (t, e) {
										return (t.__proto__ = e), t
									}),
							kt(t, e)
						)
					}
					var jt = (function (t) {
						function e() {
							return (
								(function (t, e) {
									if (!(t instanceof e))
										throw new TypeError('Cannot call a class as a function')
								})(this, e),
								(function (t, e, r) {
									return (
										(e = _t(e)),
										(function (t, e) {
											if (e && ('object' === vt(e) || 'function' == typeof e))
												return e
											if (void 0 !== e)
												throw new TypeError(
													'Derived constructors may only return object or undefined'
												)
											return (function (t) {
												if (void 0 === t)
													throw new ReferenceError(
														"this hasn't been initialised - super() hasn't been called"
													)
												return t
											})(t)
										})(
											t,
											gt()
												? Reflect.construct(e, r || [], _t(t).constructor)
												: e.apply(t, r)
										)
									)
								})(this, e, arguments)
							)
						}
						return (
							(function (t, e) {
								if ('function' != typeof e && null !== e)
									throw new TypeError(
										'Super expression must either be null or a function'
									)
								;(t.prototype = Object.create(e && e.prototype, {
									constructor: { value: t, writable: !0, configurable: !0 }
								})),
									Object.defineProperty(t, 'prototype', { writable: !1 }),
									e && kt(t, e)
							})(e, t),
							(r = e),
							(n = [
								{
									key: 'postBuild',
									value: function () {
										window.Autocomplete &&
											((this.autocomplete_wrapper =
												document.createElement('div')),
											this.input.parentNode.insertBefore(
												this.autocomplete_wrapper,
												this.input.nextSibling
											),
											this.autocomplete_wrapper.appendChild(this.input),
											(this.autocomplete_dropdown =
												document.createElement('ul')),
											this.input.parentNode.insertBefore(
												this.autocomplete_dropdown,
												this.input.nextSibling
											)),
											wt(_t(e.prototype), 'postBuild', this).call(this)
									}
								},
								{
									key: 'afterInputReady',
									value: function () {
										var t,
											r = this
										window.Autocomplete &&
											!this.autocomplete_instance &&
											((t = this.expandCallbacks(
												'autocomplete',
												l(
													{},
													{
														search: function (t) {
															return (
																console.log(
																	'No "search" callback defined for autocomplete in property "'.concat(
																		t.key,
																		'"'
																	)
																),
																[]
															)
														},
														onSubmit: function () {
															r.input.blur()
														},
														baseClass: 'autocomplete'
													},
													this.defaults.options.autocomplete || {},
													this.options.autocomplete || {}
												)
											)),
											this.autocomplete_wrapper.classList.add(t.baseClass),
											this.autocomplete_dropdown.classList.add(
												''.concat(t.baseClass, '-result-list')
											),
											(this.autocomplete_instance = new window.Autocomplete(
												this.autocomplete_wrapper,
												t
											))),
											wt(_t(e.prototype), 'afterInputReady', this).call(this)
									}
								},
								{
									key: 'destroy',
									value: function () {
										this.autocomplete_instance &&
											(this.input &&
												this.input.parentNode &&
												this.input.parentNode.removeChild(this.input),
											this.autocomplete_dropdown &&
												this.autocomplete_dropdown.parentNode &&
												this.autocomplete_dropdown.parentNode.removeChild(
													this.autocomplete_dropdown
												),
											this.autocomplete_wrapper &&
												this.autocomplete_wrapper.parentNode &&
												this.autocomplete_wrapper.parentNode.removeChild(
													this.autocomplete_wrapper
												),
											(this.autocomplete_instance = null)),
											wt(_t(e.prototype), 'destroy', this).call(this)
									}
								}
							]) &&
								(function (t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r]
										;(n.enumerable = n.enumerable || !1),
											(n.configurable = !0),
											'value' in n && (n.writable = !0),
											Object.defineProperty(t, bt(n.key), n)
									}
								})(r.prototype, n),
							Object.defineProperty(r, 'prototype', { writable: !1 }),
							r
						)
						var r, n
					})(E)
					function Ot(t) {
						return (
							(Ot =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							Ot(t)
						)
					}
					function xt(t) {
						var e = (function (t) {
							if ('object' != Ot(t) || !t) return t
							var e = t[Symbol.toPrimitive]
							if (void 0 !== e) {
								var r = e.call(t, 'string')
								if ('object' != Ot(r)) return r
								throw new TypeError(
									'@@toPrimitive must return a primitive value.'
								)
							}
							return String(t)
						})(t)
						return 'symbol' == Ot(e) ? e : e + ''
					}
					function Ct() {
						try {
							var t = !Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							)
						} catch (t) {}
						return (Ct = function () {
							return !!t
						})()
					}
					function Et() {
						return (
							(Et =
								'undefined' != typeof Reflect && Reflect.get
									? Reflect.get.bind()
									: function (t, e, r) {
											var n = (function (t, e) {
												for (
													;
													!Object.prototype.hasOwnProperty.call(t, e) &&
													null !== (t = St(t));

												);
												return t
											})(t, e)
											if (n) {
												var i = Object.getOwnPropertyDescriptor(n, e)
												return i.get
													? i.get.call(arguments.length < 3 ? t : r)
													: i.value
											}
										}),
							Et.apply(this, arguments)
						)
					}
					function St(t) {
						return (
							(St = Object.setPrototypeOf
								? Object.getPrototypeOf.bind()
								: function (t) {
										return t.__proto__ || Object.getPrototypeOf(t)
									}),
							St(t)
						)
					}
					function Pt(t, e) {
						return (
							(Pt = Object.setPrototypeOf
								? Object.setPrototypeOf.bind()
								: function (t, e) {
										return (t.__proto__ = e), t
									}),
							Pt(t, e)
						)
					}
					var Lt = (function (t) {
						function e() {
							return (
								(function (t, e) {
									if (!(t instanceof e))
										throw new TypeError('Cannot call a class as a function')
								})(this, e),
								(function (t, e, r) {
									return (
										(e = St(e)),
										(function (t, e) {
											if (e && ('object' === Ot(e) || 'function' == typeof e))
												return e
											if (void 0 !== e)
												throw new TypeError(
													'Derived constructors may only return object or undefined'
												)
											return (function (t) {
												if (void 0 === t)
													throw new ReferenceError(
														"this hasn't been initialised - super() hasn't been called"
													)
												return t
											})(t)
										})(
											t,
											Ct()
												? Reflect.construct(e, r || [], St(t).constructor)
												: e.apply(t, r)
										)
									)
								})(this, e, arguments)
							)
						}
						return (
							(function (t, e) {
								if ('function' != typeof e && null !== e)
									throw new TypeError(
										'Super expression must either be null or a function'
									)
								;(t.prototype = Object.create(e && e.prototype, {
									constructor: { value: t, writable: !0, configurable: !0 }
								})),
									Object.defineProperty(t, 'prototype', { writable: !1 }),
									e && Pt(t, e)
							})(e, t),
							(r = e),
							(n = [
								{
									key: 'getNumColumns',
									value: function () {
										return 4
									}
								},
								{
									key: 'setFileReaderListener',
									value: function (t) {
										var e = this
										t.addEventListener('load', function (t) {
											if (e.count === e.current_item_index)
												e.value[e.count][e.key] = t.target.result
											else {
												var r = {}
												for (var n in e.parent.schema.properties) r[n] = ''
												;(r[e.key] = t.target.result),
													e.value.splice(e.count, 0, r)
											}
											;(e.count += 1),
												e.count === e.total + e.current_item_index &&
													e.arrayEditor.setValue(e.value)
										})
									}
								},
								{
									key: 'build',
									value: function () {
										var t = this
										if (
											(this.options.compact ||
												(this.title =
													this.header =
													this.label =
														this.theme.getFormInputLabel(
															this.getTitle(),
															this.isRequired()
														)),
											this.options.infoText &&
												(this.infoButton = this.theme.getInfoButton(
													this.translateProperty(this.options.infoText)
												)),
											(this.input = this.theme.getFormInputField('hidden')),
											this.container.appendChild(this.input),
											!this.schema.readOnly && !this.schema.readonly)
										) {
											if (!window.FileReader)
												throw new Error('FileReader required for base64 editor')
											;(this.uploader = this.theme.getFormInputField('file')),
												(this.uploader.style.display = 'none'),
												this.schema.options &&
													this.schema.options.multiple &&
													!0 === this.schema.options.multiple &&
													this.parent &&
													'object' === this.parent.schema.type &&
													this.parent.parent &&
													'array' === this.parent.parent.schema.type &&
													this.uploader.setAttribute('multiple', ''),
												this.uploader.addEventListener('change', function (e) {
													if (
														(e.preventDefault(),
														e.stopPropagation(),
														e.currentTarget.files &&
															e.currentTarget.files.length)
													)
														if (
															e.currentTarget.files.length > 1 &&
															t.schema.options &&
															t.schema.options.multiple &&
															!0 === t.schema.options.multiple &&
															t.parent &&
															'object' === t.parent.schema.type &&
															t.parent.parent &&
															'array' === t.parent.parent.schema.type
														) {
															;(t.arrayEditor = t.jsoneditor.getEditor(
																t.parent.parent.path
															)),
																(t.value = t.arrayEditor.getValue()),
																(t.total = e.currentTarget.files.length),
																(t.current_item_index = parseInt(t.parent.key)),
																(t.count = t.current_item_index)
															for (var r = 0; r < t.total; r++) {
																var n = new FileReader()
																t.setFileReaderListener(n),
																	n.readAsDataURL(e.currentTarget.files[r])
															}
														} else {
															var i = new FileReader()
															;(i.onload = function (e) {
																;(t.value = e.target.result),
																	t.refreshPreview(),
																	t.onChange(!0),
																	(i = null)
															}),
																i.readAsDataURL(e.currentTarget.files[0])
														}
												})
										}
										;(this.preview = this.theme.getFormInputDescription(
											this.translateProperty(this.schema.description)
										)),
											this.container.appendChild(this.preview),
											(this.control = this.theme.getFormControl(
												this.label,
												this.uploader || this.input,
												this.preview,
												this.infoButton
											)),
											this.container.appendChild(this.control)
										var e = this.getButton(
											'button_upload',
											'upload',
											'button_upload'
										)
										e.addEventListener('click', function () {
											t.uploader.click()
										}),
											this.control.appendChild(e),
											this.setInputAttributes(['multiple'], e)
									}
								},
								{
									key: 'refreshPreview',
									value: function () {
										if (
											this.last_preview !== this.value &&
											((this.last_preview = this.value),
											(this.preview.innerHTML = ''),
											this.value)
										) {
											var t = this.value.match(/^data:([^;,]+)[;,]/)
											if ((t && (t = t[1]), t)) {
												if (
													((this.preview.innerHTML = '<strong>Type:</strong> '
														.concat(t, ', <strong>Size:</strong> ')
														.concat(
															Math.floor(
																(this.value.length -
																	this.value.split(',')[0].length -
																	1) /
																	1.33333
															),
															' bytes'
														)),
													'image' === t.substr(0, 5))
												) {
													this.preview.innerHTML += '<br>'
													var e = document.createElement('img')
													;(e.style.maxWidth = '100%'),
														(e.style.maxHeight = '100px'),
														(e.src = this.value),
														this.preview.appendChild(e)
												}
											} else
												this.preview.innerHTML = '<em>Invalid data URI</em>'
										}
									}
								},
								{
									key: 'enable',
									value: function () {
										this.always_disabled ||
											(this.uploader && (this.uploader.disabled = !1),
											Et(St(e.prototype), 'enable', this).call(this))
									}
								},
								{
									key: 'disable',
									value: function (t) {
										t && (this.always_disabled = !0),
											this.uploader && (this.uploader.disabled = !0),
											Et(St(e.prototype), 'disable', this).call(this)
									}
								},
								{
									key: 'setValue',
									value: function (t) {
										;(t = this.applyConstFilter(t)),
											this.value !== t &&
												(this.schema.readOnly &&
												this.schema.enum &&
												!this.schema.enum.includes(t)
													? (this.value = this.schema.enum[0])
													: (this.value = t),
												(this.input.value = this.value),
												this.refreshPreview(),
												this.onChange())
									}
								},
								{
									key: 'destroy',
									value: function () {
										this.preview &&
											this.preview.parentNode &&
											this.preview.parentNode.removeChild(this.preview),
											this.title &&
												this.title.parentNode &&
												this.title.parentNode.removeChild(this.title),
											this.input &&
												this.input.parentNode &&
												this.input.parentNode.removeChild(this.input),
											this.uploader &&
												this.uploader.parentNode &&
												this.uploader.parentNode.removeChild(this.uploader),
											Et(St(e.prototype), 'destroy', this).call(this)
									}
								}
							]) &&
								(function (t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r]
										;(n.enumerable = n.enumerable || !1),
											(n.configurable = !0),
											'value' in n && (n.writable = !0),
											Object.defineProperty(t, xt(n.key), n)
									}
								})(r.prototype, n),
							Object.defineProperty(r, 'prototype', { writable: !1 }),
							r
						)
						var r, n
					})(w)
					function Tt(t) {
						return (
							(Tt =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							Tt(t)
						)
					}
					function At(t) {
						var e = (function (t) {
							if ('object' != Tt(t) || !t) return t
							var e = t[Symbol.toPrimitive]
							if (void 0 !== e) {
								var r = e.call(t, 'string')
								if ('object' != Tt(r)) return r
								throw new TypeError(
									'@@toPrimitive must return a primitive value.'
								)
							}
							return String(t)
						})(t)
						return 'symbol' == Tt(e) ? e : e + ''
					}
					function Rt() {
						try {
							var t = !Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							)
						} catch (t) {}
						return (Rt = function () {
							return !!t
						})()
					}
					function It() {
						return (
							(It =
								'undefined' != typeof Reflect && Reflect.get
									? Reflect.get.bind()
									: function (t, e, r) {
											var n = (function (t, e) {
												for (
													;
													!Object.prototype.hasOwnProperty.call(t, e) &&
													null !== (t = Bt(t));

												);
												return t
											})(t, e)
											if (n) {
												var i = Object.getOwnPropertyDescriptor(n, e)
												return i.get
													? i.get.call(arguments.length < 3 ? t : r)
													: i.value
											}
										}),
							It.apply(this, arguments)
						)
					}
					function Bt(t) {
						return (
							(Bt = Object.setPrototypeOf
								? Object.getPrototypeOf.bind()
								: function (t) {
										return t.__proto__ || Object.getPrototypeOf(t)
									}),
							Bt(t)
						)
					}
					function Nt(t, e) {
						return (
							(Nt = Object.setPrototypeOf
								? Object.setPrototypeOf.bind()
								: function (t, e) {
										return (t.__proto__ = e), t
									}),
							Nt(t, e)
						)
					}
					var Dt = (function (t) {
						function e(t, r) {
							var n
							return (
								(function (t, e) {
									if (!(t instanceof e))
										throw new TypeError('Cannot call a class as a function')
								})(this, e),
								((n = (function (t, e, r) {
									return (
										(e = Bt(e)),
										(function (t, e) {
											if (e && ('object' === Tt(e) || 'function' == typeof e))
												return e
											if (void 0 !== e)
												throw new TypeError(
													'Derived constructors may only return object or undefined'
												)
											return (function (t) {
												if (void 0 === t)
													throw new ReferenceError(
														"this hasn't been initialised - super() hasn't been called"
													)
												return t
											})(t)
										})(
											t,
											Rt()
												? Reflect.construct(e, r || [], Bt(t).constructor)
												: e.apply(t, r)
										)
									)
								})(this, e, [t, r])).active = !1),
								(n.isUiOnly = !0),
								n.parent &&
									n.parent.schema &&
									(Array.isArray(n.parent.schema.required)
										? n.parent.schema.required.includes(n.key) ||
											n.parent.schema.required.push(n.key)
										: (n.parent.schema.required = [n.key])),
								n
							)
						}
						return (
							(function (t, e) {
								if ('function' != typeof e && null !== e)
									throw new TypeError(
										'Super expression must either be null or a function'
									)
								;(t.prototype = Object.create(e && e.prototype, {
									constructor: { value: t, writable: !0, configurable: !0 }
								})),
									Object.defineProperty(t, 'prototype', { writable: !1 }),
									e && Nt(t, e)
							})(e, t),
							(r = e),
							(n = [
								{
									key: 'build',
									value: function () {
										var t = this
										this.options.compact = !0
										var e = this.expandCallbacks(
												'button',
												l(
													{},
													{
														icon: '',
														validated: !1,
														align: 'left',
														action: function (t, e) {
															window.alert(
																'No button action defined for "'.concat(
																	t.path,
																	'"'
																)
															)
														}
													},
													this.defaults.options.button || {},
													this.options.button || {}
												)
											),
											r =
												this.translateProperty(e.text || this.schema.title) ||
												this.key
										;(this.input = this.getButton(r, e.icon, r)),
											'function' != typeof e.action
												? window.alert(
														'No button action defined for "'.concat(
															this.path,
															'"'
														)
													)
												: this.input.addEventListener('click', e.action, !1),
											(this.schema.readOnly ||
												this.schema.readonly ||
												this.schema.template) &&
												(this.disable(!0),
												this.input.setAttribute('readonly', 'true')),
											this.setInputAttributes(['readonly']),
											(this.control = this.theme.getFormButtonHolder(e.align)),
											this.control.appendChild(this.input),
											this.container.appendChild(this.control),
											(this.changeHandler = function () {
												t.jsoneditor.validate(t.jsoneditor.getValue()).length >
												0
													? t.disable()
													: t.enable()
											}),
											e.validated &&
												this.jsoneditor.on('change', this.changeHandler)
									}
								},
								{
									key: 'enable',
									value: function () {
										this.always_disabled ||
											((this.input.disabled = !1),
											It(Bt(e.prototype), 'enable', this).call(this))
									}
								},
								{
									key: 'disable',
									value: function (t) {
										t && (this.always_disabled = !0),
											(this.input.disabled = !0),
											It(Bt(e.prototype), 'disable', this).call(this)
									}
								},
								{
									key: 'getNumColumns',
									value: function () {
										return 2
									}
								},
								{
									key: 'activate',
									value: function () {
										;(this.active = !1), this.enable()
									}
								},
								{
									key: 'deactivate',
									value: function () {
										this.isRequired() || ((this.active = !1), this.disable())
									}
								},
								{
									key: 'destroy',
									value: function () {
										this.jsoneditor.off('change', this.changeHandler),
											(this.changeHandler = null),
											It(Bt(e.prototype), 'destroy', this).call(this)
									}
								}
							]) &&
								(function (t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r]
										;(n.enumerable = n.enumerable || !1),
											(n.configurable = !0),
											'value' in n && (n.writable = !0),
											Object.defineProperty(t, At(n.key), n)
									}
								})(r.prototype, n),
							Object.defineProperty(r, 'prototype', { writable: !1 }),
							r
						)
						var r, n
					})(w)
					function Ft(t) {
						return (
							(Ft =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							Ft(t)
						)
					}
					function Vt(t) {
						var e = (function (t) {
							if ('object' != Ft(t) || !t) return t
							var e = t[Symbol.toPrimitive]
							if (void 0 !== e) {
								var r = e.call(t, 'string')
								if ('object' != Ft(r)) return r
								throw new TypeError(
									'@@toPrimitive must return a primitive value.'
								)
							}
							return String(t)
						})(t)
						return 'symbol' == Ft(e) ? e : e + ''
					}
					function Ht() {
						try {
							var t = !Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							)
						} catch (t) {}
						return (Ht = function () {
							return !!t
						})()
					}
					function zt() {
						return (
							(zt =
								'undefined' != typeof Reflect && Reflect.get
									? Reflect.get.bind()
									: function (t, e, r) {
											var n = (function (t, e) {
												for (
													;
													!Object.prototype.hasOwnProperty.call(t, e) &&
													null !== (t = Mt(t));

												);
												return t
											})(t, e)
											if (n) {
												var i = Object.getOwnPropertyDescriptor(n, e)
												return i.get
													? i.get.call(arguments.length < 3 ? t : r)
													: i.value
											}
										}),
							zt.apply(this, arguments)
						)
					}
					function Mt(t) {
						return (
							(Mt = Object.setPrototypeOf
								? Object.getPrototypeOf.bind()
								: function (t) {
										return t.__proto__ || Object.getPrototypeOf(t)
									}),
							Mt(t)
						)
					}
					function qt(t, e) {
						return (
							(qt = Object.setPrototypeOf
								? Object.setPrototypeOf.bind()
								: function (t, e) {
										return (t.__proto__ = e), t
									}),
							qt(t, e)
						)
					}
					var Ut = (function (t) {
						function e() {
							return (
								(function (t, e) {
									if (!(t instanceof e))
										throw new TypeError('Cannot call a class as a function')
								})(this, e),
								(function (t, e, r) {
									return (
										(e = Mt(e)),
										(function (t, e) {
											if (e && ('object' === Ft(e) || 'function' == typeof e))
												return e
											if (void 0 !== e)
												throw new TypeError(
													'Derived constructors may only return object or undefined'
												)
											return (function (t) {
												if (void 0 === t)
													throw new ReferenceError(
														"this hasn't been initialised - super() hasn't been called"
													)
												return t
											})(t)
										})(
											t,
											Ht()
												? Reflect.construct(e, r || [], Mt(t).constructor)
												: e.apply(t, r)
										)
									)
								})(this, e, arguments)
							)
						}
						return (
							(function (t, e) {
								if ('function' != typeof e && null !== e)
									throw new TypeError(
										'Super expression must either be null or a function'
									)
								;(t.prototype = Object.create(e && e.prototype, {
									constructor: { value: t, writable: !0, configurable: !0 }
								})),
									Object.defineProperty(t, 'prototype', { writable: !1 }),
									e && qt(t, e)
							})(e, t),
							(r = e),
							(n = [
								{
									key: 'setValue',
									value: function (t, e) {
										t = !!(t = this.applyConstFilter(t))
										var r = this.getValue() !== t
										;(this.value = t),
											(this.input.checked = this.value),
											e || (this.is_dirty = !0),
											this.onChange(r)
									}
								},
								{
									key: 'register',
									value: function () {
										zt(Mt(e.prototype), 'register', this).call(this),
											this.input &&
												this.jsoneditor.options.use_name_attributes &&
												this.input.setAttribute('name', this.formname)
									}
								},
								{
									key: 'unregister',
									value: function () {
										zt(Mt(e.prototype), 'unregister', this).call(this),
											this.input && this.input.removeAttribute('name')
									}
								},
								{
									key: 'getNumColumns',
									value: function () {
										return Math.min(12, Math.max(this.getTitle().length / 7, 2))
									}
								},
								{
									key: 'setOptInCheckbox',
									value: function () {
										zt(Mt(e.prototype), 'setOptInCheckbox', this).call(this),
											this.optInAppended &&
												(this.container.insertBefore(
													this.optInContainer,
													this.container.firstChild
												),
												(this.optInContainer.style.verticalAlign = 'top'),
												(this.control.style.marginTop = '0'))
									}
								},
								{
									key: 'build',
									value: function () {
										var t = this
										this.parent.options.table_row ||
											((this.label = this.header =
												this.theme.getCheckboxLabel(
													this.getTitle(),
													this.isRequired()
												)),
											(this.label.htmlFor = this.formname)),
											this.schema.description &&
												(this.description = this.theme.getFormInputDescription(
													this.translateProperty(this.schema.description)
												)),
											this.options.infoText &&
												!this.options.compact &&
												(this.infoButton = this.theme.getInfoButton(
													this.translateProperty(this.options.infoText)
												)),
											this.options.compact &&
												this.container.classList.add('compact'),
											(this.input = this.theme.getCheckbox()),
											(this.input.id = this.formname),
											(this.control = this.theme.getFormControl(
												this.label,
												this.input,
												this.description,
												this.infoButton
											)),
											(this.control.style.display = 'inline-block'),
											(this.schema.readOnly || this.schema.readonly) &&
												(this.disable(!0), (this.input.disabled = !0)),
											this.input.addEventListener('change', function (e) {
												e.preventDefault(),
													e.stopPropagation(),
													(t.value = e.currentTarget.checked),
													(t.is_dirty = !0),
													t.onChange(!0)
											}),
											this.container.appendChild(this.control)
									}
								},
								{
									key: 'enable',
									value: function () {
										this.always_disabled ||
											((this.input.disabled = !1),
											zt(Mt(e.prototype), 'enable', this).call(this))
									}
								},
								{
									key: 'disable',
									value: function (t) {
										t && (this.always_disabled = !0),
											(this.input.disabled = !0),
											zt(Mt(e.prototype), 'disable', this).call(this)
									}
								},
								{
									key: 'destroy',
									value: function () {
										this.label &&
											this.label.parentNode &&
											this.label.parentNode.removeChild(this.label),
											this.description &&
												this.description.parentNode &&
												this.description.parentNode.removeChild(
													this.description
												),
											this.input &&
												this.input.parentNode &&
												this.input.parentNode.removeChild(this.input),
											zt(Mt(e.prototype), 'destroy', this).call(this)
									}
								},
								{
									key: 'showValidationErrors',
									value: function (t) {
										var e = this,
											r = this.jsoneditor.options.show_errors,
											n = 'change' === r || 'interaction' === r
										if (
											('never' !== r || this.is_dirty) &&
											(!n || this.is_dirty)
										) {
											var i = t.reduce(function (t, r) {
												return r.path === e.path && t.push(r.message), t
											}, [])
											;(this.input.controlgroup = this.control),
												i.length
													? this.theme.addInputError(
															this.input,
															''.concat(i.join('. '), '.')
														)
													: this.theme.removeInputError(this.input)
										}
									}
								}
							]) &&
								(function (t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r]
										;(n.enumerable = n.enumerable || !1),
											(n.configurable = !0),
											'value' in n && (n.writable = !0),
											Object.defineProperty(t, Vt(n.key), n)
									}
								})(r.prototype, n),
							Object.defineProperty(r, 'prototype', { writable: !1 }),
							r
						)
						var r, n
					})(w)
					function Gt(t) {
						return (
							(Gt =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							Gt(t)
						)
					}
					function $t(t) {
						var e = (function (t) {
							if ('object' != Gt(t) || !t) return t
							var e = t[Symbol.toPrimitive]
							if (void 0 !== e) {
								var r = e.call(t, 'string')
								if ('object' != Gt(r)) return r
								throw new TypeError(
									'@@toPrimitive must return a primitive value.'
								)
							}
							return String(t)
						})(t)
						return 'symbol' == Gt(e) ? e : e + ''
					}
					function Jt() {
						try {
							var t = !Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							)
						} catch (t) {}
						return (Jt = function () {
							return !!t
						})()
					}
					function Wt() {
						return (
							(Wt =
								'undefined' != typeof Reflect && Reflect.get
									? Reflect.get.bind()
									: function (t, e, r) {
											var n = (function (t, e) {
												for (
													;
													!Object.prototype.hasOwnProperty.call(t, e) &&
													null !== (t = Zt(t));

												);
												return t
											})(t, e)
											if (n) {
												var i = Object.getOwnPropertyDescriptor(n, e)
												return i.get
													? i.get.call(arguments.length < 3 ? t : r)
													: i.value
											}
										}),
							Wt.apply(this, arguments)
						)
					}
					function Zt(t) {
						return (
							(Zt = Object.setPrototypeOf
								? Object.getPrototypeOf.bind()
								: function (t) {
										return t.__proto__ || Object.getPrototypeOf(t)
									}),
							Zt(t)
						)
					}
					function Yt(t, e) {
						return (
							(Yt = Object.setPrototypeOf
								? Object.setPrototypeOf.bind()
								: function (t, e) {
										return (t.__proto__ = e), t
									}),
							Yt(t, e)
						)
					}
					r(6910)
					var Qt = (function (t) {
						function e() {
							return (
								(function (t, e) {
									if (!(t instanceof e))
										throw new TypeError('Cannot call a class as a function')
								})(this, e),
								(function (t, e, r) {
									return (
										(e = Zt(e)),
										(function (t, e) {
											if (e && ('object' === Gt(e) || 'function' == typeof e))
												return e
											if (void 0 !== e)
												throw new TypeError(
													'Derived constructors may only return object or undefined'
												)
											return (function (t) {
												if (void 0 === t)
													throw new ReferenceError(
														"this hasn't been initialised - super() hasn't been called"
													)
												return t
											})(t)
										})(
											t,
											Jt()
												? Reflect.construct(e, r || [], Zt(t).constructor)
												: e.apply(t, r)
										)
									)
								})(this, e, arguments)
							)
						}
						return (
							(function (t, e) {
								if ('function' != typeof e && null !== e)
									throw new TypeError(
										'Super expression must either be null or a function'
									)
								;(t.prototype = Object.create(e && e.prototype, {
									constructor: { value: t, writable: !0, configurable: !0 }
								})),
									Object.defineProperty(t, 'prototype', { writable: !1 }),
									e && Yt(t, e)
							})(e, t),
							(r = e),
							(n = [
								{
									key: 'setValue',
									value: function (t, e) {
										t = this.applyConstFilter(t)
										var r = this.typecast(t),
											n =
												this.enum_options.length > 0 &&
												this.enum_values.includes(r),
											i =
												!!this.jsoneditor.options.use_default_values ||
												void 0 !== this.schema.default
										if (
											(this.hasPlaceholderOption ||
												(n && (!e || this.isRequired() || i)) ||
												(r = this.enum_values[0]),
											this.value !== r)
										) {
											var o = this.enum_values.indexOf(r)
											n && -1 !== o
												? (this.input.value = this.enum_options[o])
												: this.hasPlaceholderOption
													? (this.input.value = '_placeholder_')
													: (this.input.value = r),
												(this.value = r),
												e || (this.is_dirty = !0),
												this.onChange(),
												this.change()
										}
									}
								},
								{
									key: 'register',
									value: function () {
										Wt(Zt(e.prototype), 'register', this).call(this),
											this.input &&
												this.jsoneditor.options.use_name_attributes &&
												this.input.setAttribute('name', this.formname)
									}
								},
								{
									key: 'unregister',
									value: function () {
										Wt(Zt(e.prototype), 'unregister', this).call(this),
											this.input && this.input.removeAttribute('name')
									}
								},
								{
									key: 'getNumColumns',
									value: function () {
										if (!this.enum_options) return 3
										for (
											var t = this.getTitle().length, e = 0;
											e < this.enum_options.length;
											e++
										)
											t = Math.max(t, this.enum_options[e].length + 4)
										return Math.min(12, Math.max(t / 7, 2))
									}
								},
								{
									key: 'typecast',
									value: function (t) {
										return 'boolean' === this.schema.type
											? 'undefined' === t || void 0 === t
												? void 0
												: !!t
											: 'number' === this.schema.type
												? 1 * t || 0
												: 'integer' === this.schema.type
													? Math.floor(1 * t || 0)
													: this.schema.enum && void 0 === t
														? void 0
														: ''.concat(t)
									}
								},
								{
									key: 'getValue',
									value: function () {
										if (this.dependenciesFulfilled)
											return this.typecast(this.value)
									}
								},
								{
									key: 'preBuild',
									value: function () {
										var t,
											e,
											r,
											n,
											i = this
										if (
											((this.input_type = 'select'),
											(this.enum_options = []),
											(this.enum_values = []),
											(this.enum_display = []),
											(this.hasPlaceholderOption =
												(null === (t = this.schema) ||
												void 0 === t ||
												null === (t = t.options) ||
												void 0 === t
													? void 0
													: t.has_placeholder_option) || !1),
											(this.placeholderOptionText =
												(null === (e = this.schema) ||
												void 0 === e ||
												null === (e = e.options) ||
												void 0 === e
													? void 0
													: e.placeholder_option_text) || ' '),
											this.enforceConst && this.schema.const)
										) {
											var o = this.schema.const
											;(this.enum_options = [''.concat(o)]),
												(this.enum_display = [
													''.concat(this.translateProperty(o) || o)
												]),
												(this.enum_values = [this.typecast(o)])
										} else if (this.schema.enum) {
											var a =
												(this.schema.options &&
													this.schema.options.enum_titles) ||
												[]
											this.schema.enum.forEach(function (t, e) {
												;(i.enum_options[e] = ''.concat(t)),
													(i.enum_display[e] = ''.concat(
														i.translateProperty(a[e]) || t
													)),
													(i.enum_values[e] = i.typecast(t))
											})
										} else if ('boolean' === this.schema.type)
											(this.enum_display = (this.schema.options &&
												this.schema.options.enum_titles) || ['true', 'false']),
												(this.enum_options = ['1', '']),
												(this.enum_values = [!0, !1]),
												this.isRequired() ||
													(this.enum_display.unshift(' '),
													this.enum_options.unshift('undefined'),
													this.enum_values.unshift(void 0))
										else {
											if (!this.schema.enumSource)
												throw new Error(
													"'select' editor requires the enum property to be set."
												)
											if (
												((this.enumSource = []),
												(this.enum_display = []),
												(this.enum_options = []),
												(this.enum_values = []),
												Array.isArray(this.schema.enumSource))
											)
												for (r = 0; r < this.schema.enumSource.length; r++)
													'string' == typeof this.schema.enumSource[r]
														? (this.enumSource[r] = {
																source: this.schema.enumSource[r]
															})
														: Array.isArray(this.schema.enumSource[r])
															? (this.enumSource[r] = this.schema.enumSource[r])
															: (this.enumSource[r] = l(
																	{},
																	this.schema.enumSource[r]
																))
											else
												this.schema.enumValue
													? (this.enumSource = [
															{
																source: this.schema.enumSource,
																value: this.schema.enumValue
															}
														])
													: (this.enumSource = [
															{ source: this.schema.enumSource }
														])
											for (r = 0; r < this.enumSource.length; r++)
												this.enumSource[r].value &&
													('function' ==
													typeof (n = this.expandCallbacks('template', {
														template: this.enumSource[r].value
													})).template
														? (this.enumSource[r].value = n.template)
														: (this.enumSource[r].value =
																this.jsoneditor.compileTemplate(
																	this.enumSource[r].value,
																	this.template_engine
																))),
													this.enumSource[r].title &&
														('function' ==
														typeof (n = this.expandCallbacks('template', {
															template: this.enumSource[r].title
														})).template
															? (this.enumSource[r].title = n.template)
															: (this.enumSource[r].title =
																	this.jsoneditor.compileTemplate(
																		this.enumSource[r].title,
																		this.template_engine
																	))),
													this.enumSource[r].filter &&
														this.enumSource[r].value &&
														('function' ==
														typeof (n = this.expandCallbacks('template', {
															template: this.enumSource[r].filter
														})).template
															? (this.enumSource[r].filter = n.template)
															: (this.enumSource[r].filter =
																	this.jsoneditor.compileTemplate(
																		this.enumSource[r].filter,
																		this.template_engine
																	)))
										}
									}
								},
								{
									key: 'build',
									value: function () {
										var t = this
										this.options.compact ||
											(this.header = this.label =
												this.theme.getFormInputLabel(
													this.getTitle(),
													this.isRequired()
												)),
											this.schema.description &&
												(this.description = this.theme.getFormInputDescription(
													this.translateProperty(this.schema.description)
												)),
											this.options.infoText &&
												(this.infoButton = this.theme.getInfoButton(
													this.translateProperty(this.options.infoText)
												)),
											this.options.compact &&
												this.container.classList.add('compact'),
											(this.input = this.theme.getSelectInput(
												this.enum_options,
												!1
											)),
											this.theme.setSelectOptions(
												this.input,
												this.enum_options,
												this.enum_display,
												this.hasPlaceholderOption,
												this.placeholderOptionText
											),
											(this.schema.readOnly || this.schema.readonly) &&
												(this.disable(!0), (this.input.disabled = !0)),
											this.setInputAttributes([]),
											this.input.addEventListener('change', function (e) {
												e.preventDefault(),
													e.stopPropagation(),
													t.onInputChange()
											}),
											(this.control = this.theme.getFormControl(
												this.label,
												this.input,
												this.description,
												this.infoButton,
												this.formname
											)),
											this.container.appendChild(this.control),
											(this.value = this.enum_values[0]),
											window.requestAnimationFrame(function () {
												t.input.parentNode && t.afterInputReady()
											})
									}
								},
								{
									key: 'afterInputReady',
									value: function () {
										this.theme.afterInputReady(this.input)
									}
								},
								{
									key: 'onInputChange',
									value: function () {
										var t,
											e = this.typecast(this.input.value)
										;(t = this.enum_values.includes(e)
											? this.enum_values[this.enum_values.indexOf(e)]
											: this.enum_values[0]) !== this.value &&
											((this.is_dirty = !0),
											(this.value = t),
											this.onChange(!0))
									}
								},
								{
									key: 'onWatchedFieldChange',
									value: function () {
										var t,
											r,
											n = [],
											i = []
										if (this.enumSource) {
											t = this.getWatchedFieldValues()
											for (var o = 0; o < this.enumSource.length; o++)
												if (Array.isArray(this.enumSource[o]))
													(n = n.concat(this.enumSource[o])),
														(i = i.concat(this.enumSource[o]))
												else {
													var a = []
													if (
														(a = Array.isArray(this.enumSource[o].source)
															? this.enumSource[o].source
															: t[this.enumSource[o].source])
													) {
														if (
															(this.enumSource[o].slice &&
																(a = Array.prototype.slice.apply(
																	a,
																	this.enumSource[o].slice
																)),
															this.enumSource[o].filter)
														) {
															var s = []
															for (r = 0; r < a.length; r++)
																this.enumSource[o].filter({
																	i: r,
																	item: a[r],
																	watched: t
																}) && s.push(a[r])
															a = s
														}
														var l = [],
															c = []
														for (r = 0; r < a.length; r++) {
															var u = a[r]
															this.enumSource[o].value
																? (c[r] = this.typecast(
																		this.enumSource[o].value({ i: r, item: u })
																	))
																: (c[r] = a[r]),
																this.enumSource[o].title
																	? (l[r] = this.enumSource[o].title({
																			i: r,
																			item: u
																		}))
																	: (l[r] = c[r])
														}
														this.enumSource[o].sort &&
															function (t, e, r) {
																t.map(function (t, r) {
																	return { v: t, t: e[r] }
																})
																	.sort(function (t, e) {
																		return t.v < e.v ? -r : t.v === e.v ? 0 : r
																	})
																	.forEach(function (r, n) {
																		;(t[n] = r.v), (e[n] = r.t)
																	})
															}.bind(
																null,
																c,
																l,
																'desc' === this.enumSource[o].sort ? 1 : -1
															)(),
															(n = n.concat(c)),
															(i = i.concat(l))
													}
												}
											var h = this.value
											this.theme.setSelectOptions(this.input, n, i),
												(this.enum_options = n),
												(this.enum_display = i),
												(this.enum_values = n),
												n.includes(h) ||
												!1 !==
													this.jsoneditor.options.enum_source_value_auto_select
													? ((this.input.value = h), (this.value = h))
													: ((this.input.value = n[0]),
														(this.value = this.typecast(n[0] || '')),
														this.parent && !this.watchLoop
															? this.parent.onChildEditorChange(this)
															: this.jsoneditor.onChange(),
														this.jsoneditor.notifyWatchers(this.path))
										}
										Wt(Zt(e.prototype), 'onWatchedFieldChange', this).call(this)
									}
								},
								{
									key: 'enable',
									value: function () {
										this.always_disabled ||
											((this.input.disabled = !1),
											Wt(Zt(e.prototype), 'enable', this).call(this))
									}
								},
								{
									key: 'disable',
									value: function (t) {
										t && (this.always_disabled = !0),
											(this.input.disabled = !0),
											Wt(Zt(e.prototype), 'disable', this).call(this, t)
									}
								},
								{
									key: 'destroy',
									value: function () {
										this.label &&
											this.label.parentNode &&
											this.label.parentNode.removeChild(this.label),
											this.description &&
												this.description.parentNode &&
												this.description.parentNode.removeChild(
													this.description
												),
											this.input &&
												this.input.parentNode &&
												this.input.parentNode.removeChild(this.input),
											Wt(Zt(e.prototype), 'destroy', this).call(this)
									}
								},
								{
									key: 'showValidationErrors',
									value: function (t) {
										var e = this,
											r = this.jsoneditor.options.show_errors,
											n = 'change' === r || 'interaction' === r
										if (
											('never' !== r || this.is_dirty) &&
											(!n || this.is_dirty)
										) {
											var i = t.reduce(function (t, r) {
												return r.path === e.path && t.push(r.message), t
											}, [])
											i.length
												? this.theme.addInputError(
														this.input,
														''.concat(i.join('. '), '.')
													)
												: this.theme.removeInputError(this.input)
										}
									}
								}
							]) &&
								(function (t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r]
										;(n.enumerable = n.enumerable || !1),
											(n.configurable = !0),
											'value' in n && (n.writable = !0),
											Object.defineProperty(t, $t(n.key), n)
									}
								})(r.prototype, n),
							Object.defineProperty(r, 'prototype', { writable: !1 }),
							r
						)
						var r, n
					})(w)
					function Kt(t) {
						return (
							(Kt =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							Kt(t)
						)
					}
					function Xt(t) {
						var e = (function (t) {
							if ('object' != Kt(t) || !t) return t
							var e = t[Symbol.toPrimitive]
							if (void 0 !== e) {
								var r = e.call(t, 'string')
								if ('object' != Kt(r)) return r
								throw new TypeError(
									'@@toPrimitive must return a primitive value.'
								)
							}
							return String(t)
						})(t)
						return 'symbol' == Kt(e) ? e : e + ''
					}
					function te() {
						try {
							var t = !Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							)
						} catch (t) {}
						return (te = function () {
							return !!t
						})()
					}
					function ee() {
						return (
							(ee =
								'undefined' != typeof Reflect && Reflect.get
									? Reflect.get.bind()
									: function (t, e, r) {
											var n = (function (t, e) {
												for (
													;
													!Object.prototype.hasOwnProperty.call(t, e) &&
													null !== (t = re(t));

												);
												return t
											})(t, e)
											if (n) {
												var i = Object.getOwnPropertyDescriptor(n, e)
												return i.get
													? i.get.call(arguments.length < 3 ? t : r)
													: i.value
											}
										}),
							ee.apply(this, arguments)
						)
					}
					function re(t) {
						return (
							(re = Object.setPrototypeOf
								? Object.getPrototypeOf.bind()
								: function (t) {
										return t.__proto__ || Object.getPrototypeOf(t)
									}),
							re(t)
						)
					}
					function ne(t, e) {
						return (
							(ne = Object.setPrototypeOf
								? Object.setPrototypeOf.bind()
								: function (t, e) {
										return (t.__proto__ = e), t
									}),
							ne(t, e)
						)
					}
					var ie = (function (t) {
						function e() {
							return (
								(function (t, e) {
									if (!(t instanceof e))
										throw new TypeError('Cannot call a class as a function')
								})(this, e),
								(function (t, e, r) {
									return (
										(e = re(e)),
										(function (t, e) {
											if (e && ('object' === Kt(e) || 'function' == typeof e))
												return e
											if (void 0 !== e)
												throw new TypeError(
													'Derived constructors may only return object or undefined'
												)
											return (function (t) {
												if (void 0 === t)
													throw new ReferenceError(
														"this hasn't been initialised - super() hasn't been called"
													)
												return t
											})(t)
										})(
											t,
											te()
												? Reflect.construct(e, r || [], re(t).constructor)
												: e.apply(t, r)
										)
									)
								})(this, e, arguments)
							)
						}
						return (
							(function (t, e) {
								if ('function' != typeof e && null !== e)
									throw new TypeError(
										'Super expression must either be null or a function'
									)
								;(t.prototype = Object.create(e && e.prototype, {
									constructor: { value: t, writable: !0, configurable: !0 }
								})),
									Object.defineProperty(t, 'prototype', { writable: !1 }),
									e && ne(t, e)
							})(e, t),
							(r = e),
							(n = [
								{
									key: 'setValue',
									value: function (t, r) {
										if (
											((t = this.applyConstFilter(t)), this.choices_instance)
										) {
											var n = this.typecast(t || '')
											if (
												(this.enum_values.includes(n) ||
													(n = this.enum_values[0]),
												this.value === n)
											)
												return
											r
												? (this.is_dirty = !1)
												: 'change' === this.jsoneditor.options.show_errors &&
													(this.is_dirty = !0),
												(this.input.value =
													this.enum_options[this.enum_values.indexOf(n)]),
												this.choices_instance.setChoiceByValue(
													this.input.value
												),
												(this.value = n),
												this.onChange()
										} else
											ee(re(e.prototype), 'setValue', this).call(this, t, r)
									}
								},
								{
									key: 'afterInputReady',
									value: function () {
										if (window.Choices && !this.choices_instance) {
											var t = this.expandCallbacks(
												'choices',
												l(
													{},
													this.defaults.options.choices || {},
													this.options.choices || {}
												)
											)
											this.choices_instance = new window.Choices(this.input, t)
										}
										ee(re(e.prototype), 'afterInputReady', this).call(this)
									}
								},
								{
									key: 'onWatchedFieldChange',
									value: function () {
										var t = this
										if (
											(ee(re(e.prototype), 'onWatchedFieldChange', this).call(
												this
											),
											this.choices_instance)
										) {
											var r = this.enum_options.map(function (e, r) {
												return { value: e, label: t.enum_display[r] }
											})
											this.choices_instance.setChoices(r, 'value', 'label', !0),
												this.choices_instance.setChoiceByValue(
													''.concat(this.value)
												)
										}
									}
								},
								{
									key: 'enable',
									value: function () {
										!this.always_disabled &&
											this.choices_instance &&
											this.choices_instance.enable(),
											ee(re(e.prototype), 'enable', this).call(this)
									}
								},
								{
									key: 'disable',
									value: function (t) {
										this.choices_instance && this.choices_instance.disable(),
											ee(re(e.prototype), 'disable', this).call(this, t)
									}
								},
								{
									key: 'destroy',
									value: function () {
										this.choices_instance &&
											(this.choices_instance.destroy(),
											(this.choices_instance = null)),
											ee(re(e.prototype), 'destroy', this).call(this)
									}
								}
							]) &&
								(function (t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r]
										;(n.enumerable = n.enumerable || !1),
											(n.configurable = !0),
											'value' in n && (n.writable = !0),
											Object.defineProperty(t, Xt(n.key), n)
									}
								})(r.prototype, n),
							Object.defineProperty(r, 'prototype', { writable: !1 }),
							r
						)
						var r, n
					})(Qt)
					function oe(t) {
						return (
							(oe =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							oe(t)
						)
					}
					function ae(t) {
						var e = (function (t) {
							if ('object' != oe(t) || !t) return t
							var e = t[Symbol.toPrimitive]
							if (void 0 !== e) {
								var r = e.call(t, 'string')
								if ('object' != oe(r)) return r
								throw new TypeError(
									'@@toPrimitive must return a primitive value.'
								)
							}
							return String(t)
						})(t)
						return 'symbol' == oe(e) ? e : e + ''
					}
					function se() {
						try {
							var t = !Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							)
						} catch (t) {}
						return (se = function () {
							return !!t
						})()
					}
					function le() {
						return (
							(le =
								'undefined' != typeof Reflect && Reflect.get
									? Reflect.get.bind()
									: function (t, e, r) {
											var n = (function (t, e) {
												for (
													;
													!Object.prototype.hasOwnProperty.call(t, e) &&
													null !== (t = ce(t));

												);
												return t
											})(t, e)
											if (n) {
												var i = Object.getOwnPropertyDescriptor(n, e)
												return i.get
													? i.get.call(arguments.length < 3 ? t : r)
													: i.value
											}
										}),
							le.apply(this, arguments)
						)
					}
					function ce(t) {
						return (
							(ce = Object.setPrototypeOf
								? Object.getPrototypeOf.bind()
								: function (t) {
										return t.__proto__ || Object.getPrototypeOf(t)
									}),
							ce(t)
						)
					}
					function ue(t, e) {
						return (
							(ue = Object.setPrototypeOf
								? Object.setPrototypeOf.bind()
								: function (t, e) {
										return (t.__proto__ = e), t
									}),
							ue(t, e)
						)
					}
					ie.rules = { '.choices > *': 'box-sizing:border-box' }
					var he = (function (t) {
						function e() {
							return (
								(function (t, e) {
									if (!(t instanceof e))
										throw new TypeError('Cannot call a class as a function')
								})(this, e),
								(function (t, e, r) {
									return (
										(e = ce(e)),
										(function (t, e) {
											if (e && ('object' === oe(e) || 'function' == typeof e))
												return e
											if (void 0 !== e)
												throw new TypeError(
													'Derived constructors may only return object or undefined'
												)
											return (function (t) {
												if (void 0 === t)
													throw new ReferenceError(
														"this hasn't been initialised - super() hasn't been called"
													)
												return t
											})(t)
										})(
											t,
											se()
												? Reflect.construct(e, r || [], ce(t).constructor)
												: e.apply(t, r)
										)
									)
								})(this, e, arguments)
							)
						}
						return (
							(function (t, e) {
								if ('function' != typeof e && null !== e)
									throw new TypeError(
										'Super expression must either be null or a function'
									)
								;(t.prototype = Object.create(e && e.prototype, {
									constructor: { value: t, writable: !0, configurable: !0 }
								})),
									Object.defineProperty(t, 'prototype', { writable: !1 }),
									e && ue(t, e)
							})(e, t),
							(r = e),
							(n = [
								{
									key: 'build',
									value: function () {
										if (
											(le(ce(e.prototype), 'build', this).call(this),
											this.input &&
												(this.schema.max &&
													'string' == typeof this.schema.max &&
													this.input.setAttribute('max', this.schema.max),
												this.schema.min &&
													'string' == typeof this.schema.max &&
													this.input.setAttribute('min', this.schema.min),
												window.flatpickr &&
													'object' === oe(this.options.flatpickr)))
										) {
											;(this.options.flatpickr.enableTime =
												'date' !== this.schema.format),
												(this.options.flatpickr.noCalendar =
													'time' === this.schema.format),
												'integer' === this.schema.type &&
													(this.options.flatpickr.mode = 'single'),
												this.input.setAttribute('data-input', '')
											var t = this.input
											if (!0 === this.options.flatpickr.wrap) {
												var r = []
												if (!1 !== this.options.flatpickr.showToggleButton) {
													var n = this.getButton(
														'',
														'time' === this.schema.format ? 'time' : 'calendar',
														'flatpickr_toggle_button'
													)
													n.setAttribute('data-toggle', ''), r.push(n)
												}
												if (!1 !== this.options.flatpickr.showClearButton) {
													var i = this.getButton(
														'',
														'clear',
														'flatpickr_clear_button'
													)
													i.setAttribute('data-clear', ''), r.push(i)
												}
												var o = this.input.parentNode,
													a = this.input.nextSibling,
													s = this.theme.getInputGroup(this.input, r)
												void 0 !== s
													? ((this.options.flatpickr.inline = !1),
														o.insertBefore(s, a),
														(t = s))
													: (this.options.flatpickr.wrap = !1)
											}
											;(this.flatpickr = window.flatpickr(
												t,
												this.options.flatpickr
											)),
												!0 === this.options.flatpickr.inline &&
													!0 === this.options.flatpickr.inlineHideInput &&
													this.input.setAttribute('type', 'hidden')
										}
									}
								},
								{
									key: 'getValue',
									value: function () {
										if (this.dependenciesFulfilled) {
											if ('string' === this.schema.type) return this.value
											if ('' !== this.value && void 0 !== this.value) {
												var t =
													'time' === this.schema.format
														? '1970-01-01 '.concat(this.value)
														: this.value
												return parseInt(new Date(t).getTime() / 1e3)
											}
										}
									}
								},
								{
									key: 'setValue',
									value: function (t, r, n) {
										if (
											((t = this.applyConstFilter(t)),
											'string' === this.schema.type)
										)
											le(ce(e.prototype), 'setValue', this).call(this, t, r, n),
												this.flatpickr && this.flatpickr.setDate(t)
										else if (t > 0) {
											var i = new Date(1e3 * t),
												o = i.getFullYear(),
												a = this.zeroPad(i.getMonth() + 1),
												s = this.zeroPad(i.getDate()),
												l = this.zeroPad(i.getHours()),
												c = this.zeroPad(i.getMinutes()),
												u = this.zeroPad(i.getSeconds()),
												h = [o, a, s].join('-'),
												p = [l, c, u].join(':'),
												d = ''.concat(h, 'T').concat(p)
											'date' === this.schema.format
												? (d = h)
												: 'time' === this.schema.format && (d = p),
												(this.input.value = d),
												this.refreshValue(),
												this.flatpickr && this.flatpickr.setDate(d)
										}
									}
								},
								{
									key: 'destroy',
									value: function () {
										this.flatpickr && this.flatpickr.destroy(),
											(this.flatpickr = null),
											le(ce(e.prototype), 'destroy', this).call(this)
									}
								},
								{
									key: 'zeroPad',
									value: function (t) {
										return '0'.concat(t).slice(-2)
									}
								}
							]) &&
								(function (t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r]
										;(n.enumerable = n.enumerable || !1),
											(n.configurable = !0),
											'value' in n && (n.writable = !0),
											Object.defineProperty(t, ae(n.key), n)
									}
								})(r.prototype, n),
							Object.defineProperty(r, 'prototype', { writable: !1 }),
							r
						)
						var r, n
					})(E)
					function pe(t) {
						return (
							(pe =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							pe(t)
						)
					}
					function de(t) {
						var e = (function (t) {
							if ('object' != pe(t) || !t) return t
							var e = t[Symbol.toPrimitive]
							if (void 0 !== e) {
								var r = e.call(t, 'string')
								if ('object' != pe(r)) return r
								throw new TypeError(
									'@@toPrimitive must return a primitive value.'
								)
							}
							return String(t)
						})(t)
						return 'symbol' == pe(e) ? e : e + ''
					}
					function fe() {
						try {
							var t = !Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							)
						} catch (t) {}
						return (fe = function () {
							return !!t
						})()
					}
					function ye() {
						return (
							(ye =
								'undefined' != typeof Reflect && Reflect.get
									? Reflect.get.bind()
									: function (t, e, r) {
											var n = (function (t, e) {
												for (
													;
													!Object.prototype.hasOwnProperty.call(t, e) &&
													null !== (t = me(t));

												);
												return t
											})(t, e)
											if (n) {
												var i = Object.getOwnPropertyDescriptor(n, e)
												return i.get
													? i.get.call(arguments.length < 3 ? t : r)
													: i.value
											}
										}),
							ye.apply(this, arguments)
						)
					}
					function me(t) {
						return (
							(me = Object.setPrototypeOf
								? Object.getPrototypeOf.bind()
								: function (t) {
										return t.__proto__ || Object.getPrototypeOf(t)
									}),
							me(t)
						)
					}
					function ve(t, e) {
						return (
							(ve = Object.setPrototypeOf
								? Object.setPrototypeOf.bind()
								: function (t, e) {
										return (t.__proto__ = e), t
									}),
							ve(t, e)
						)
					}
					var be = (function (t) {
						function e() {
							return (
								(function (t, e) {
									if (!(t instanceof e))
										throw new TypeError('Cannot call a class as a function')
								})(this, e),
								(function (t, e, r) {
									return (
										(e = me(e)),
										(function (t, e) {
											if (e && ('object' === pe(e) || 'function' == typeof e))
												return e
											if (void 0 !== e)
												throw new TypeError(
													'Derived constructors may only return object or undefined'
												)
											return (function (t) {
												if (void 0 === t)
													throw new ReferenceError(
														"this hasn't been initialised - super() hasn't been called"
													)
												return t
											})(t)
										})(
											t,
											fe()
												? Reflect.construct(e, r || [], me(t).constructor)
												: e.apply(t, r)
										)
									)
								})(this, e, arguments)
							)
						}
						return (
							(function (t, e) {
								if ('function' != typeof e && null !== e)
									throw new TypeError(
										'Super expression must either be null or a function'
									)
								;(t.prototype = Object.create(e && e.prototype, {
									constructor: { value: t, writable: !0, configurable: !0 }
								})),
									Object.defineProperty(t, 'prototype', { writable: !1 }),
									e && ve(t, e)
							})(e, t),
							(r = e),
							(n = [
								{
									key: 'register',
									value: function () {
										if (this.editors) {
											for (var t = 0; t < this.editors.length; t++)
												this.editors[t] && this.editors[t].unregister()
											this.editors[this.currentEditor] &&
												this.editors[this.currentEditor].register()
										}
										ye(me(e.prototype), 'register', this).call(this)
									}
								},
								{
									key: 'unregister',
									value: function () {
										if (
											(ye(me(e.prototype), 'unregister', this).call(this),
											this.editors)
										)
											for (var t = 0; t < this.editors.length; t++)
												this.editors[t] && this.editors[t].unregister()
									}
								},
								{
									key: 'getNumColumns',
									value: function () {
										return this.editors[this.currentEditor]
											? Math.max(
													this.editors[this.currentEditor].getNumColumns(),
													4
												)
											: 4
									}
								},
								{
									key: 'enable',
									value: function () {
										if (this.editors)
											for (var t = 0; t < this.editors.length; t++)
												this.editors[t] && this.editors[t].enable()
										ye(me(e.prototype), 'enable', this).call(this)
									}
								},
								{
									key: 'disable',
									value: function () {
										if (this.editors)
											for (var t = 0; t < this.editors.length; t++)
												this.editors[t] && this.editors[t].disable()
										ye(me(e.prototype), 'disable', this).call(this)
									}
								},
								{
									key: 'switchEditor',
									value: function () {
										var t = this,
											e = this.getWatchedFieldValues()
										if (e) {
											var r =
												document.location.origin +
												document.location.pathname +
												this.template(e)
											this.editors[this.refs[r]] || this.buildChildEditor(r),
												(this.currentEditor = this.refs[r]),
												this.register(),
												this.editors.forEach(function (e, r) {
													e &&
														(t.currentEditor === r
															? (e.container.style.display = '')
															: (e.container.style.display = 'none'))
												}),
												this.refreshValue(),
												this.onChange(!0)
										}
									}
								},
								{
									key: 'buildChildEditor',
									value: function (t) {
										this.refs[t] = this.editors.length
										var e = this.theme.getChildEditorHolder()
										this.editor_holder.appendChild(e)
										var r = l({}, this.schema, this.jsoneditor.refs[t]),
											n = this.jsoneditor.getEditorClass(r, this.jsoneditor),
											i = this.jsoneditor.createEditor(n, {
												jsoneditor: this.jsoneditor,
												schema: r,
												container: e,
												path: this.path,
												parent: this,
												required: !0
											})
										this.editors.push(i), i.preBuild(), i.build(), i.postBuild()
									}
								},
								{
									key: 'preBuild',
									value: function () {
										var t
										for (
											this.refs = {},
												this.editors = [],
												this.currentEditor = '',
												t = 0;
											t < this.schema.links.length;
											t++
										)
											if (
												'describedby' === this.schema.links[t].rel.toLowerCase()
											) {
												this.template = this.jsoneditor.compileTemplate(
													this.schema.links[t].href,
													this.template_engine
												)
												break
											}
										;(this.schema.links = this.schema.links
											.slice(0, t)
											.concat(this.schema.links.slice(t + 1))),
											0 === this.schema.links.length &&
												delete this.schema.links,
											(this.baseSchema = l({}, this.schema))
									}
								},
								{
									key: 'build',
									value: function () {
										;(this.editor_holder = document.createElement('div')),
											this.container.appendChild(this.editor_holder),
											this.switchEditor()
									}
								},
								{
									key: 'onWatchedFieldChange',
									value: function () {
										this.switchEditor()
									}
								},
								{
									key: 'onChildEditorChange',
									value: function (t, r) {
										this.editors[this.currentEditor] && this.refreshValue(),
											ye(me(e.prototype), 'onChildEditorChange', this).call(
												this,
												t,
												r
											)
									}
								},
								{
									key: 'refreshValue',
									value: function () {
										this.editors[this.currentEditor] &&
											(this.value = this.editors[this.currentEditor].getValue())
									}
								},
								{
									key: 'setValue',
									value: function (t, e) {
										;(t = this.applyConstFilter(t)),
											this.editors[this.currentEditor] &&
												(this.editors[this.currentEditor].setValue(t, e),
												this.refreshValue(),
												this.onChange())
									}
								},
								{
									key: 'destroy',
									value: function () {
										this.editors.forEach(function (t) {
											t && t.destroy()
										}),
											this.editor_holder &&
												this.editor_holder.parentNode &&
												this.editor_holder.parentNode.removeChild(
													this.editor_holder
												),
											ye(me(e.prototype), 'destroy', this).call(this)
									}
								},
								{
									key: 'showValidationErrors',
									value: function (t) {
										this.editors.forEach(function (e) {
											e && e.showValidationErrors(t)
										})
									}
								}
							]) &&
								(function (t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r]
										;(n.enumerable = n.enumerable || !1),
											(n.configurable = !0),
											'value' in n && (n.writable = !0),
											Object.defineProperty(t, de(n.key), n)
									}
								})(r.prototype, n),
							Object.defineProperty(r, 'prototype', { writable: !1 }),
							r
						)
						var r, n
					})(w)
					function ge(t) {
						return (
							(ge =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							ge(t)
						)
					}
					function we(t, e) {
						;(null == e || e > t.length) && (e = t.length)
						for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r]
						return n
					}
					function _e(t) {
						var e = (function (t) {
							if ('object' != ge(t) || !t) return t
							var e = t[Symbol.toPrimitive]
							if (void 0 !== e) {
								var r = e.call(t, 'string')
								if ('object' != ge(r)) return r
								throw new TypeError(
									'@@toPrimitive must return a primitive value.'
								)
							}
							return String(t)
						})(t)
						return 'symbol' == ge(e) ? e : e + ''
					}
					function ke() {
						try {
							var t = !Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							)
						} catch (t) {}
						return (ke = function () {
							return !!t
						})()
					}
					function je() {
						return (
							(je =
								'undefined' != typeof Reflect && Reflect.get
									? Reflect.get.bind()
									: function (t, e, r) {
											var n = (function (t, e) {
												for (
													;
													!Object.prototype.hasOwnProperty.call(t, e) &&
													null !== (t = Oe(t));

												);
												return t
											})(t, e)
											if (n) {
												var i = Object.getOwnPropertyDescriptor(n, e)
												return i.get
													? i.get.call(arguments.length < 3 ? t : r)
													: i.value
											}
										}),
							je.apply(this, arguments)
						)
					}
					function Oe(t) {
						return (
							(Oe = Object.setPrototypeOf
								? Object.getPrototypeOf.bind()
								: function (t) {
										return t.__proto__ || Object.getPrototypeOf(t)
									}),
							Oe(t)
						)
					}
					function xe(t, e) {
						return (
							(xe = Object.setPrototypeOf
								? Object.setPrototypeOf.bind()
								: function (t, e) {
										return (t.__proto__ = e), t
									}),
							xe(t, e)
						)
					}
					var Ce = (function (t) {
						function e() {
							return (
								(function (t, e) {
									if (!(t instanceof e))
										throw new TypeError('Cannot call a class as a function')
								})(this, e),
								(function (t, e, r) {
									return (
										(e = Oe(e)),
										(function (t, e) {
											if (e && ('object' === ge(e) || 'function' == typeof e))
												return e
											if (void 0 !== e)
												throw new TypeError(
													'Derived constructors may only return object or undefined'
												)
											return (function (t) {
												if (void 0 === t)
													throw new ReferenceError(
														"this hasn't been initialised - super() hasn't been called"
													)
												return t
											})(t)
										})(
											t,
											ke()
												? Reflect.construct(e, r || [], Oe(t).constructor)
												: e.apply(t, r)
										)
									)
								})(this, e, arguments)
							)
						}
						return (
							(function (t, e) {
								if ('function' != typeof e && null !== e)
									throw new TypeError(
										'Super expression must either be null or a function'
									)
								;(t.prototype = Object.create(e && e.prototype, {
									constructor: { value: t, writable: !0, configurable: !0 }
								})),
									Object.defineProperty(t, 'prototype', { writable: !1 }),
									e && xe(t, e)
							})(e, t),
							(r = e),
							(n = [
								{
									key: 'getNumColumns',
									value: function () {
										return 4
									}
								},
								{
									key: 'build',
									value: function () {
										var t = this
										;(this.title =
											this.header =
											this.label =
												this.theme.getFormInputLabel(
													this.getTitle(),
													this.isRequired()
												)),
											this.container.appendChild(this.title),
											(this.options.enum_titles =
												this.options.enum_titles || []),
											this.enforceConstEnabled && this.schema.const
												? (this.enum = [this.schema.const])
												: (this.enum = this.schema.enum),
											(this.selected = 0),
											(this.select_options = []),
											(this.html_values = [])
										for (var e = 0; e < this.enum.length; e++)
											(this.select_options[e] =
												this.options.enum_titles[e] || 'Value '.concat(e + 1)),
												(this.html_values[e] = this.getHTML(this.enum[e]))
										;(this.switcher = this.theme.getSwitcher(
											this.select_options
										)),
											this.container.appendChild(this.switcher),
											(this.display_area = this.theme.getIndentedPanel()),
											this.container.appendChild(this.display_area),
											this.options.hide_display &&
												(this.display_area.style.display = 'none'),
											this.switcher.addEventListener('change', function (e) {
												;(t.selected = t.select_options.indexOf(
													e.currentTarget.value
												)),
													(t.value = t.enum[t.selected]),
													t.refreshValue(),
													t.onChange(!0)
											}),
											(this.value = this.enum[0]),
											this.refreshValue(),
											1 === this.enum.length &&
												(this.switcher.style.display = 'none')
									}
								},
								{
									key: 'refreshValue',
									value: function () {
										var t = this
										if (this.enum) {
											this.selected = -1
											var e = JSON.stringify(this.value)
											this.enum.forEach(function (r, n) {
												if (e === JSON.stringify(r)) return (t.selected = n), !1
											}),
												this.selected < 0
													? this.setValue(this.enum[0])
													: ((this.switcher.value =
															this.select_options[this.selected]),
														(this.display_area.innerHTML =
															this.html_values[this.selected]))
										}
									}
								},
								{
									key: 'enable',
									value: function () {
										this.always_disabled ||
											((this.switcher.disabled = !1),
											je(Oe(e.prototype), 'enable', this).call(this))
									}
								},
								{
									key: 'disable',
									value: function (t) {
										t && (this.always_disabled = !0),
											(this.switcher.disabled = !0),
											je(Oe(e.prototype), 'disable', this).call(this)
									}
								},
								{
									key: 'getHTML',
									value: function (t) {
										var e,
											r,
											n = this
										if (null === t) return '<em>null</em>'
										if ('object' === ge(t)) {
											var i = ''
											return (
												(e = t),
												(r = function (e, r) {
													var o = n.getHTML(r)
													Array.isArray(t) ||
														(o = '<div><em>'
															.concat(e, '</em>: ')
															.concat(o, '</div>')),
														(i += '<li>'.concat(o, '</li>'))
												}),
												Array.isArray(e) ||
												('number' == typeof e.length &&
													e.length > 0 &&
													e.length - 1 in e)
													? Array.from(e).forEach(function (t, e) {
															return r(e, t)
														})
													: Object.entries(e).forEach(function (t) {
															var e,
																n =
																	(function (t) {
																		if (Array.isArray(t)) return t
																	})((e = t)) ||
																	(function (t) {
																		var e =
																			null == t
																				? null
																				: ('undefined' != typeof Symbol &&
																						t[Symbol.iterator]) ||
																					t['@@iterator']
																		if (null != e) {
																			var r,
																				n,
																				i,
																				o,
																				a = [],
																				s = !0,
																				l = !1
																			try {
																				for (
																					i = (e = e.call(t)).next;
																					!(s = (r = i.call(e)).done) &&
																					(a.push(r.value), 2 !== a.length);
																					s = !0
																				);
																			} catch (t) {
																				;(l = !0), (n = t)
																			} finally {
																				try {
																					if (
																						!s &&
																						null != e.return &&
																						((o = e.return()), Object(o) !== o)
																					)
																						return
																				} finally {
																					if (l) throw n
																				}
																			}
																			return a
																		}
																	})(e) ||
																	(function (t) {
																		if (t) {
																			if ('string' == typeof t) return we(t, 2)
																			var e = Object.prototype.toString
																				.call(t)
																				.slice(8, -1)
																			return (
																				'Object' === e &&
																					t.constructor &&
																					(e = t.constructor.name),
																				'Map' === e || 'Set' === e
																					? Array.from(t)
																					: 'Arguments' === e ||
																						  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
																								e
																						  )
																						? we(t, 2)
																						: void 0
																			)
																		}
																	})(e) ||
																	(function () {
																		throw new TypeError(
																			'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
																		)
																	})(),
																i = n[0],
																o = n[1]
															return r(i, o)
														}),
												(i = Array.isArray(t)
													? '<ol>'.concat(i, '</ol>')
													: "<ul style='margin-top:0;margin-bottom:0;padding-top:0;padding-bottom:0;'>".concat(
															i,
															'</ul>'
														))
											)
										}
										return 'boolean' == typeof t
											? t
												? 'true'
												: 'false'
											: 'string' == typeof t
												? t
														.replace(/&/g, '&amp;')
														.replace(/</g, '&lt;')
														.replace(/>/g, '&gt;')
												: t
									}
								},
								{
									key: 'setValue',
									value: function (t) {
										;(t = this.applyConstFilter(t)),
											this.value !== t &&
												((this.value = t), this.refreshValue(), this.onChange())
									}
								},
								{
									key: 'destroy',
									value: function () {
										this.display_area &&
											this.display_area.parentNode &&
											this.display_area.parentNode.removeChild(
												this.display_area
											),
											this.title &&
												this.title.parentNode &&
												this.title.parentNode.removeChild(this.title),
											this.switcher &&
												this.switcher.parentNode &&
												this.switcher.parentNode.removeChild(this.switcher),
											je(Oe(e.prototype), 'destroy', this).call(this)
									}
								}
							]) &&
								(function (t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r]
										;(n.enumerable = n.enumerable || !1),
											(n.configurable = !0),
											'value' in n && (n.writable = !0),
											Object.defineProperty(t, _e(n.key), n)
									}
								})(r.prototype, n),
							Object.defineProperty(r, 'prototype', { writable: !1 }),
							r
						)
						var r, n
					})(w)
					function Ee(t) {
						return (
							(Ee =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							Ee(t)
						)
					}
					function Se(t) {
						var e = (function (t) {
							if ('object' != Ee(t) || !t) return t
							var e = t[Symbol.toPrimitive]
							if (void 0 !== e) {
								var r = e.call(t, 'string')
								if ('object' != Ee(r)) return r
								throw new TypeError(
									'@@toPrimitive must return a primitive value.'
								)
							}
							return String(t)
						})(t)
						return 'symbol' == Ee(e) ? e : e + ''
					}
					function Pe() {
						try {
							var t = !Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							)
						} catch (t) {}
						return (Pe = function () {
							return !!t
						})()
					}
					function Le() {
						return (
							(Le =
								'undefined' != typeof Reflect && Reflect.get
									? Reflect.get.bind()
									: function (t, e, r) {
											var n = (function (t, e) {
												for (
													;
													!Object.prototype.hasOwnProperty.call(t, e) &&
													null !== (t = Te(t));

												);
												return t
											})(t, e)
											if (n) {
												var i = Object.getOwnPropertyDescriptor(n, e)
												return i.get
													? i.get.call(arguments.length < 3 ? t : r)
													: i.value
											}
										}),
							Le.apply(this, arguments)
						)
					}
					function Te(t) {
						return (
							(Te = Object.setPrototypeOf
								? Object.getPrototypeOf.bind()
								: function (t) {
										return t.__proto__ || Object.getPrototypeOf(t)
									}),
							Te(t)
						)
					}
					function Ae(t, e) {
						return (
							(Ae = Object.setPrototypeOf
								? Object.setPrototypeOf.bind()
								: function (t, e) {
										return (t.__proto__ = e), t
									}),
							Ae(t, e)
						)
					}
					var Re = (function (t) {
						function e() {
							return (
								(function (t, e) {
									if (!(t instanceof e))
										throw new TypeError('Cannot call a class as a function')
								})(this, e),
								(function (t, e, r) {
									return (
										(e = Te(e)),
										(function (t, e) {
											if (e && ('object' === Ee(e) || 'function' == typeof e))
												return e
											if (void 0 !== e)
												throw new TypeError(
													'Derived constructors may only return object or undefined'
												)
											return (function (t) {
												if (void 0 === t)
													throw new ReferenceError(
														"this hasn't been initialised - super() hasn't been called"
													)
												return t
											})(t)
										})(
											t,
											Pe()
												? Reflect.construct(e, r || [], Te(t).constructor)
												: e.apply(t, r)
										)
									)
								})(this, e, arguments)
							)
						}
						return (
							(function (t, e) {
								if ('function' != typeof e && null !== e)
									throw new TypeError(
										'Super expression must either be null or a function'
									)
								;(t.prototype = Object.create(e && e.prototype, {
									constructor: { value: t, writable: !0, configurable: !0 }
								})),
									Object.defineProperty(t, 'prototype', { writable: !1 }),
									e && Ae(t, e)
							})(e, t),
							(r = e),
							(n = [
								{
									key: 'register',
									value: function () {
										Le(Te(e.prototype), 'register', this).call(this),
											this.input &&
												this.jsoneditor.options.use_name_attributes &&
												this.input.setAttribute('name', this.formname)
									}
								},
								{
									key: 'unregister',
									value: function () {
										Le(Te(e.prototype), 'unregister', this).call(this),
											this.input && this.input.removeAttribute('name')
									}
								},
								{
									key: 'setValue',
									value: function (t, e, r) {
										if (
											((t = this.applyConstFilter(t)),
											(!this.template || r) &&
												(null == t
													? (t = '')
													: 'object' === Ee(t)
														? (t = JSON.stringify(t))
														: 'string' != typeof t && (t = ''.concat(t)),
												t !== this.serialized))
										) {
											var n = this.sanitize(t)
											if (this.input.value !== n) {
												this.input.value = n
												var i = r || this.getValue() !== t
												this.refreshValue(),
													e
														? (this.is_dirty = !1)
														: 'change' ===
																this.jsoneditor.options.show_errors &&
															(this.is_dirty = !0),
													this.adjust_height && this.adjust_height(this.input),
													this.onChange(i)
											}
										}
									}
								},
								{
									key: 'getNumColumns',
									value: function () {
										return 2
									}
								},
								{
									key: 'enable',
									value: function () {
										Le(Te(e.prototype), 'enable', this).call(this)
									}
								},
								{
									key: 'disable',
									value: function () {
										Le(Te(e.prototype), 'disable', this).call(this)
									}
								},
								{
									key: 'refreshValue',
									value: function () {
										;(this.value = this.input.value),
											'string' != typeof this.value && (this.value = ''),
											(this.serialized = this.value)
									}
								},
								{
									key: 'destroy',
									value: function () {
										;(this.template = null),
											this.input &&
												this.input.parentNode &&
												this.input.parentNode.removeChild(this.input),
											this.label &&
												this.label.parentNode &&
												this.label.parentNode.removeChild(this.label),
											this.description &&
												this.description.parentNode &&
												this.description.parentNode.removeChild(
													this.description
												),
											Le(Te(e.prototype), 'destroy', this).call(this)
									}
								},
								{
									key: 'sanitize',
									value: function (t) {
										return t
									}
								},
								{
									key: 'onWatchedFieldChange',
									value: function () {
										var t
										this.template &&
											((t = this.getWatchedFieldValues()),
											this.setValue(this.template(t), !1, !0)),
											Le(Te(e.prototype), 'onWatchedFieldChange', this).call(
												this
											)
									}
								},
								{
									key: 'build',
									value: function () {
										if (
											((this.format = this.schema.format),
											!this.format &&
												this.options.default_format &&
												(this.format = this.options.default_format),
											this.options.format &&
												(this.format = this.options.format),
											(this.input_type = 'hidden'),
											(this.input = this.theme.getFormInputField(
												this.input_type
											)),
											this.format &&
												this.input.setAttribute(
													'data-schemaformat',
													this.format
												),
											this.container.appendChild(this.input),
											this.schema.template)
										) {
											var t = this.expandCallbacks('template', {
												template: this.schema.template
											})
											'function' == typeof t.template
												? (this.template = t.template)
												: (this.template = this.jsoneditor.compileTemplate(
														this.schema.template,
														this.template_engine
													)),
												this.refreshValue()
										} else this.refreshValue()
									}
								}
							]) &&
								(function (t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r]
										;(n.enumerable = n.enumerable || !1),
											(n.configurable = !0),
											'value' in n && (n.writable = !0),
											Object.defineProperty(t, Se(n.key), n)
									}
								})(r.prototype, n),
							Object.defineProperty(r, 'prototype', { writable: !1 }),
							r
						)
						var r, n
					})(w)
					function Ie(t) {
						return (
							(Ie =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							Ie(t)
						)
					}
					function Be(t) {
						var e = (function (t) {
							if ('object' != Ie(t) || !t) return t
							var e = t[Symbol.toPrimitive]
							if (void 0 !== e) {
								var r = e.call(t, 'string')
								if ('object' != Ie(r)) return r
								throw new TypeError(
									'@@toPrimitive must return a primitive value.'
								)
							}
							return String(t)
						})(t)
						return 'symbol' == Ie(e) ? e : e + ''
					}
					function Ne() {
						try {
							var t = !Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							)
						} catch (t) {}
						return (Ne = function () {
							return !!t
						})()
					}
					function De(t) {
						return (
							(De = Object.setPrototypeOf
								? Object.getPrototypeOf.bind()
								: function (t) {
										return t.__proto__ || Object.getPrototypeOf(t)
									}),
							De(t)
						)
					}
					function Fe(t, e) {
						return (
							(Fe = Object.setPrototypeOf
								? Object.setPrototypeOf.bind()
								: function (t, e) {
										return (t.__proto__ = e), t
									}),
							Fe(t, e)
						)
					}
					var Ve = (function (t) {
						function e() {
							return (
								(function (t, e) {
									if (!(t instanceof e))
										throw new TypeError('Cannot call a class as a function')
								})(this, e),
								(function (t, e, r) {
									return (
										(e = De(e)),
										(function (t, e) {
											if (e && ('object' === Ie(e) || 'function' == typeof e))
												return e
											if (void 0 !== e)
												throw new TypeError(
													'Derived constructors may only return object or undefined'
												)
											return (function (t) {
												if (void 0 === t)
													throw new ReferenceError(
														"this hasn't been initialised - super() hasn't been called"
													)
												return t
											})(t)
										})(
											t,
											Ne()
												? Reflect.construct(e, r || [], De(t).constructor)
												: e.apply(t, r)
										)
									)
								})(this, e, arguments)
							)
						}
						return (
							(function (t, e) {
								if ('function' != typeof e && null !== e)
									throw new TypeError(
										'Super expression must either be null or a function'
									)
								;(t.prototype = Object.create(e && e.prototype, {
									constructor: { value: t, writable: !0, configurable: !0 }
								})),
									Object.defineProperty(t, 'prototype', { writable: !1 }),
									e && Fe(t, e)
							})(e, t),
							(r = e),
							(n = [
								{
									key: 'build',
									value: function () {
										;(this.options.compact = !1),
											(this.header = this.label =
												this.theme.getLabelLike(this.getTitle())),
											(this.description = this.theme.getDescription(
												this.schema.description || ''
											)),
											(this.control = this.theme.getFormControl(
												this.label,
												this.description,
												null
											)),
											this.container.appendChild(this.control)
									}
								},
								{
									key: 'getTitle',
									value: function () {
										return this.translateProperty(this.schema.title)
									}
								},
								{
									key: 'getNumColumns',
									value: function () {
										return 12
									}
								},
								{
									key: 'disable',
									value: function () {
										return !1
									}
								},
								{
									key: 'enable',
									value: function () {
										return !1
									}
								}
							]) &&
								(function (t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r]
										;(n.enumerable = n.enumerable || !1),
											(n.configurable = !0),
											'value' in n && (n.writable = !0),
											Object.defineProperty(t, Be(n.key), n)
									}
								})(r.prototype, n),
							Object.defineProperty(r, 'prototype', { writable: !1 }),
							r
						)
						var r, n
					})(Dt)
					function He(t) {
						return (
							(He =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							He(t)
						)
					}
					function ze(t) {
						var e = (function (t) {
							if ('object' != He(t) || !t) return t
							var e = t[Symbol.toPrimitive]
							if (void 0 !== e) {
								var r = e.call(t, 'string')
								if ('object' != He(r)) return r
								throw new TypeError(
									'@@toPrimitive must return a primitive value.'
								)
							}
							return String(t)
						})(t)
						return 'symbol' == He(e) ? e : e + ''
					}
					function Me() {
						try {
							var t = !Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							)
						} catch (t) {}
						return (Me = function () {
							return !!t
						})()
					}
					function qe() {
						return (
							(qe =
								'undefined' != typeof Reflect && Reflect.get
									? Reflect.get.bind()
									: function (t, e, r) {
											var n = (function (t, e) {
												for (
													;
													!Object.prototype.hasOwnProperty.call(t, e) &&
													null !== (t = Ue(t));

												);
												return t
											})(t, e)
											if (n) {
												var i = Object.getOwnPropertyDescriptor(n, e)
												return i.get
													? i.get.call(arguments.length < 3 ? t : r)
													: i.value
											}
										}),
							qe.apply(this, arguments)
						)
					}
					function Ue(t) {
						return (
							(Ue = Object.setPrototypeOf
								? Object.getPrototypeOf.bind()
								: function (t) {
										return t.__proto__ || Object.getPrototypeOf(t)
									}),
							Ue(t)
						)
					}
					function Ge(t, e) {
						return (
							(Ge = Object.setPrototypeOf
								? Object.setPrototypeOf.bind()
								: function (t, e) {
										return (t.__proto__ = e), t
									}),
							Ge(t, e)
						)
					}
					var $e = (function (t) {
						function e() {
							return (
								(function (t, e) {
									if (!(t instanceof e))
										throw new TypeError('Cannot call a class as a function')
								})(this, e),
								(function (t, e, r) {
									return (
										(e = Ue(e)),
										(function (t, e) {
											if (e && ('object' === He(e) || 'function' == typeof e))
												return e
											if (void 0 !== e)
												throw new TypeError(
													'Derived constructors may only return object or undefined'
												)
											return (function (t) {
												if (void 0 === t)
													throw new ReferenceError(
														"this hasn't been initialised - super() hasn't been called"
													)
												return t
											})(t)
										})(
											t,
											Me()
												? Reflect.construct(e, r || [], Ue(t).constructor)
												: e.apply(t, r)
										)
									)
								})(this, e, arguments)
							)
						}
						return (
							(function (t, e) {
								if ('function' != typeof e && null !== e)
									throw new TypeError(
										'Super expression must either be null or a function'
									)
								;(t.prototype = Object.create(e && e.prototype, {
									constructor: { value: t, writable: !0, configurable: !0 }
								})),
									Object.defineProperty(t, 'prototype', { writable: !1 }),
									e && Ge(t, e)
							})(e, t),
							(r = e),
							(n = [
								{
									key: 'build',
									value: function () {
										if (
											(qe(Ue(e.prototype), 'build', this).call(this),
											void 0 !== this.schema.minimum)
										) {
											var t = this.schema.minimum
											void 0 !== this.schema.exclusiveMinimum && (t += 1),
												this.input.setAttribute('min', t)
										}
										if (void 0 !== this.schema.maximum) {
											var r = this.schema.maximum
											void 0 !== this.schema.exclusiveMaximum && (r -= 1),
												this.input.setAttribute('max', r)
										}
										if (void 0 !== this.schema.step) {
											var n = this.schema.step || 1
											this.input.setAttribute('step', n)
										}
										this.setInputAttributes([
											'maxlength',
											'pattern',
											'readonly',
											'min',
											'max',
											'step'
										])
									}
								},
								{
									key: 'getNumColumns',
									value: function () {
										return 2
									}
								},
								{
									key: 'getValue',
									value: function () {
										if (this.dependenciesFulfilled)
											return this.schema.default ||
												this.jsoneditor.options.use_default_values ||
												'' !== this.value
												? (function (t) {
														if (null == t) return !1
														var e = t.match(p),
															r = parseFloat(t)
														return null !== e && !isNaN(r) && isFinite(r)
													})(this.value)
													? parseFloat(this.value)
													: this.value
												: void (this.shouldBeUnset() && (this.input.value = ''))
									}
								}
							]) &&
								(function (t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r]
										;(n.enumerable = n.enumerable || !1),
											(n.configurable = !0),
											'value' in n && (n.writable = !0),
											Object.defineProperty(t, ze(n.key), n)
									}
								})(r.prototype, n),
							Object.defineProperty(r, 'prototype', { writable: !1 }),
							r
						)
						var r, n
					})(E)
					function Je(t) {
						return (
							(Je =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							Je(t)
						)
					}
					function We(t) {
						var e = (function (t) {
							if ('object' != Je(t) || !t) return t
							var e = t[Symbol.toPrimitive]
							if (void 0 !== e) {
								var r = e.call(t, 'string')
								if ('object' != Je(r)) return r
								throw new TypeError(
									'@@toPrimitive must return a primitive value.'
								)
							}
							return String(t)
						})(t)
						return 'symbol' == Je(e) ? e : e + ''
					}
					function Ze() {
						try {
							var t = !Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							)
						} catch (t) {}
						return (Ze = function () {
							return !!t
						})()
					}
					function Ye(t) {
						return (
							(Ye = Object.setPrototypeOf
								? Object.getPrototypeOf.bind()
								: function (t) {
										return t.__proto__ || Object.getPrototypeOf(t)
									}),
							Ye(t)
						)
					}
					function Qe(t, e) {
						return (
							(Qe = Object.setPrototypeOf
								? Object.setPrototypeOf.bind()
								: function (t, e) {
										return (t.__proto__ = e), t
									}),
							Qe(t, e)
						)
					}
					var Ke = (function (t) {
						function e() {
							return (
								(function (t, e) {
									if (!(t instanceof e))
										throw new TypeError('Cannot call a class as a function')
								})(this, e),
								(function (t, e, r) {
									return (
										(e = Ye(e)),
										(function (t, e) {
											if (e && ('object' === Je(e) || 'function' == typeof e))
												return e
											if (void 0 !== e)
												throw new TypeError(
													'Derived constructors may only return object or undefined'
												)
											return (function (t) {
												if (void 0 === t)
													throw new ReferenceError(
														"this hasn't been initialised - super() hasn't been called"
													)
												return t
											})(t)
										})(
											t,
											Ze()
												? Reflect.construct(e, r || [], Ye(t).constructor)
												: e.apply(t, r)
										)
									)
								})(this, e, arguments)
							)
						}
						return (
							(function (t, e) {
								if ('function' != typeof e && null !== e)
									throw new TypeError(
										'Super expression must either be null or a function'
									)
								;(t.prototype = Object.create(e && e.prototype, {
									constructor: { value: t, writable: !0, configurable: !0 }
								})),
									Object.defineProperty(t, 'prototype', { writable: !1 }),
									e && Qe(t, e)
							})(e, t),
							(r = e),
							(n = [
								{
									key: 'getNumColumns',
									value: function () {
										return 2
									}
								},
								{
									key: 'getValue',
									value: function () {
										if (this.dependenciesFulfilled)
											return this.schema.default ||
												this.jsoneditor.options.use_default_values ||
												'' !== this.value
												? (function (t) {
														if (null == t) return !1
														var e = t.match(d),
															r = parseInt(t)
														return null !== e && !isNaN(r) && isFinite(r)
													})(this.value)
													? parseInt(this.value)
													: this.value
												: void this.shouldBeUnset()
									}
								}
							]) &&
								(function (t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r]
										;(n.enumerable = n.enumerable || !1),
											(n.configurable = !0),
											'value' in n && (n.writable = !0),
											Object.defineProperty(t, We(n.key), n)
									}
								})(r.prototype, n),
							Object.defineProperty(r, 'prototype', { writable: !1 }),
							r
						)
						var r, n
					})($e)
					function Xe(t) {
						return (
							(Xe =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							Xe(t)
						)
					}
					function tr(t) {
						var e = (function (t) {
							if ('object' != Xe(t) || !t) return t
							var e = t[Symbol.toPrimitive]
							if (void 0 !== e) {
								var r = e.call(t, 'string')
								if ('object' != Xe(r)) return r
								throw new TypeError(
									'@@toPrimitive must return a primitive value.'
								)
							}
							return String(t)
						})(t)
						return 'symbol' == Xe(e) ? e : e + ''
					}
					function er() {
						try {
							var t = !Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							)
						} catch (t) {}
						return (er = function () {
							return !!t
						})()
					}
					function rr() {
						return (
							(rr =
								'undefined' != typeof Reflect && Reflect.get
									? Reflect.get.bind()
									: function (t, e, r) {
											var n = (function (t, e) {
												for (
													;
													!Object.prototype.hasOwnProperty.call(t, e) &&
													null !== (t = nr(t));

												);
												return t
											})(t, e)
											if (n) {
												var i = Object.getOwnPropertyDescriptor(n, e)
												return i.get
													? i.get.call(arguments.length < 3 ? t : r)
													: i.value
											}
										}),
							rr.apply(this, arguments)
						)
					}
					function nr(t) {
						return (
							(nr = Object.setPrototypeOf
								? Object.getPrototypeOf.bind()
								: function (t) {
										return t.__proto__ || Object.getPrototypeOf(t)
									}),
							nr(t)
						)
					}
					function ir(t, e) {
						return (
							(ir = Object.setPrototypeOf
								? Object.setPrototypeOf.bind()
								: function (t, e) {
										return (t.__proto__ = e), t
									}),
							ir(t, e)
						)
					}
					var or = (function (t) {
						function e() {
							return (
								(function (t, e) {
									if (!(t instanceof e))
										throw new TypeError('Cannot call a class as a function')
								})(this, e),
								(function (t, e, r) {
									return (
										(e = nr(e)),
										(function (t, e) {
											if (e && ('object' === Xe(e) || 'function' == typeof e))
												return e
											if (void 0 !== e)
												throw new TypeError(
													'Derived constructors may only return object or undefined'
												)
											return (function (t) {
												if (void 0 === t)
													throw new ReferenceError(
														"this hasn't been initialised - super() hasn't been called"
													)
												return t
											})(t)
										})(
											t,
											er()
												? Reflect.construct(e, r || [], nr(t).constructor)
												: e.apply(t, r)
										)
									)
								})(this, e, arguments)
							)
						}
						return (
							(function (t, e) {
								if ('function' != typeof e && null !== e)
									throw new TypeError(
										'Super expression must either be null or a function'
									)
								;(t.prototype = Object.create(e && e.prototype, {
									constructor: { value: t, writable: !0, configurable: !0 }
								})),
									Object.defineProperty(t, 'prototype', { writable: !1 }),
									e && ir(t, e)
							})(e, t),
							(r = e),
							(n = [
								{
									key: 'preBuild',
									value: function () {
										if (
											(rr(nr(e.prototype), 'preBuild', this).call(this),
											this.schema.options || (this.schema.options = {}),
											!this.schema.options.cleave)
										)
											switch (this.format) {
												case 'ipv6':
													this.schema.options.cleave = {
														delimiters: [':'],
														blocks: [4, 4, 4, 4, 4, 4, 4, 4],
														uppercase: !0
													}
													break
												case 'ipv4':
													this.schema.options.cleave = {
														delimiters: ['.'],
														blocks: [3, 3, 3, 3],
														numericOnly: !0
													}
											}
										this.options = l(this.options, this.schema.options || {})
									}
								}
							]) &&
								(function (t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r]
										;(n.enumerable = n.enumerable || !1),
											(n.configurable = !0),
											'value' in n && (n.writable = !0),
											Object.defineProperty(t, tr(n.key), n)
									}
								})(r.prototype, n),
							Object.defineProperty(r, 'prototype', { writable: !1 }),
							r
						)
						var r, n
					})(E)
					function ar(t) {
						return (
							(ar =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							ar(t)
						)
					}
					function sr(t) {
						var e = (function (t) {
							if ('object' != ar(t) || !t) return t
							var e = t[Symbol.toPrimitive]
							if (void 0 !== e) {
								var r = e.call(t, 'string')
								if ('object' != ar(r)) return r
								throw new TypeError(
									'@@toPrimitive must return a primitive value.'
								)
							}
							return String(t)
						})(t)
						return 'symbol' == ar(e) ? e : e + ''
					}
					function lr() {
						try {
							var t = !Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							)
						} catch (t) {}
						return (lr = function () {
							return !!t
						})()
					}
					function cr() {
						return (
							(cr =
								'undefined' != typeof Reflect && Reflect.get
									? Reflect.get.bind()
									: function (t, e, r) {
											var n = (function (t, e) {
												for (
													;
													!Object.prototype.hasOwnProperty.call(t, e) &&
													null !== (t = ur(t));

												);
												return t
											})(t, e)
											if (n) {
												var i = Object.getOwnPropertyDescriptor(n, e)
												return i.get
													? i.get.call(arguments.length < 3 ? t : r)
													: i.value
											}
										}),
							cr.apply(this, arguments)
						)
					}
					function ur(t) {
						return (
							(ur = Object.setPrototypeOf
								? Object.getPrototypeOf.bind()
								: function (t) {
										return t.__proto__ || Object.getPrototypeOf(t)
									}),
							ur(t)
						)
					}
					function hr(t, e) {
						return (
							(hr = Object.setPrototypeOf
								? Object.setPrototypeOf.bind()
								: function (t, e) {
										return (t.__proto__ = e), t
									}),
							hr(t, e)
						)
					}
					var pr = (function (t) {
						function e() {
							return (
								(function (t, e) {
									if (!(t instanceof e))
										throw new TypeError('Cannot call a class as a function')
								})(this, e),
								(function (t, e, r) {
									return (
										(e = ur(e)),
										(function (t, e) {
											if (e && ('object' === ar(e) || 'function' == typeof e))
												return e
											if (void 0 !== e)
												throw new TypeError(
													'Derived constructors may only return object or undefined'
												)
											return (function (t) {
												if (void 0 === t)
													throw new ReferenceError(
														"this hasn't been initialised - super() hasn't been called"
													)
												return t
											})(t)
										})(
											t,
											lr()
												? Reflect.construct(e, r || [], ur(t).constructor)
												: e.apply(t, r)
										)
									)
								})(this, e, arguments)
							)
						}
						return (
							(function (t, e) {
								if ('function' != typeof e && null !== e)
									throw new TypeError(
										'Super expression must either be null or a function'
									)
								;(t.prototype = Object.create(e && e.prototype, {
									constructor: { value: t, writable: !0, configurable: !0 }
								})),
									Object.defineProperty(t, 'prototype', { writable: !1 }),
									e && hr(t, e)
							})(e, t),
							(r = e),
							(n = [
								{
									key: 'setValue',
									value: function (t, r, n) {
										t = this.applyConstFilter(t)
										var i = cr(ur(e.prototype), 'setValue', this).call(
											this,
											t,
											r,
											n
										)
										void 0 !== i &&
											i.changed &&
											this.jodit_instance &&
											this.jodit_instance.setEditorValue(i.value)
									}
								},
								{
									key: 'build',
									value: function () {
										;(this.options.format = 'textarea'),
											cr(ur(e.prototype), 'build', this).call(this),
											(this.input_type = this.schema.format),
											this.input.setAttribute(
												'data-schemaformat',
												this.input_type
											)
									}
								},
								{
									key: 'afterInputReady',
									value: function () {
										var t,
											r = this
										window.Jodit
											? ((t = this.expandCallbacks(
													'jodit',
													l(
														{},
														{ height: 300 },
														this.defaults.options.jodit || {},
														this.options.jodit || {}
													)
												)),
												(this.jodit_instance = new window.Jodit(this.input, t)),
												(this.schema.readOnly ||
													this.schema.readonly ||
													this.schema.template) &&
													this.jodit_instance.setReadOnly(!0),
												this.jodit_instance.events.on('change', function () {
													;(r.value = r.jodit_instance.getEditorValue()),
														(r.is_dirty = !0),
														r.onChange(!0)
												}),
												this.theme.afterInputReady(this.input))
											: cr(ur(e.prototype), 'afterInputReady', this).call(this)
									}
								},
								{
									key: 'getNumColumns',
									value: function () {
										return 6
									}
								},
								{
									key: 'enable',
									value: function () {
										!this.always_disabled &&
											this.jodit_instance &&
											this.jodit_instance.setReadOnly(!1),
											cr(ur(e.prototype), 'enable', this).call(this)
									}
								},
								{
									key: 'disable',
									value: function (t) {
										this.jodit_instance && this.jodit_instance.setReadOnly(!0),
											cr(ur(e.prototype), 'disable', this).call(this, t)
									}
								},
								{
									key: 'destroy',
									value: function () {
										this.jodit_instance &&
											(this.jodit_instance.destruct(),
											(this.jodit_instance = null)),
											cr(ur(e.prototype), 'destroy', this).call(this)
									}
								}
							]) &&
								(function (t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r]
										;(n.enumerable = n.enumerable || !1),
											(n.configurable = !0),
											'value' in n && (n.writable = !0),
											Object.defineProperty(t, sr(n.key), n)
									}
								})(r.prototype, n),
							Object.defineProperty(r, 'prototype', { writable: !1 }),
							r
						)
						var r, n
					})(E)
					function dr(t, e, r, n) {
						try {
							switch (t.format) {
								case 'ipv4':
									!(function (t) {
										var e = t.split('.')
										if (4 !== e.length) throw new Error('error_ipv4')
										e.forEach(function (t) {
											if (isNaN(+t) || +t < 0 || +t > 255)
												throw new Error('error_ipv4')
										})
									})(e)
									break
								case 'ipv6':
									!(function (t) {
										if (
											!t.match(
												'^(?:(?:(?:[a-fA-F0-9]{1,4}:){6}|(?=(?:[a-fA-F0-9]{0,4}:){2,6}(?:[0-9]{1,3}.){3}[0-9]{1,3}$)(([0-9a-fA-F]{1,4}:){1,5}|:)((:[0-9a-fA-F]{1,4}){1,5}:|:)|::(?:[a-fA-F0-9]{1,4}:){5})(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9]).){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])|(?:[a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}|(?=(?:[a-fA-F0-9]{0,4}:){0,7}[a-fA-F0-9]{0,4}$)(([0-9a-fA-F]{1,4}:){1,7}|:)((:[0-9a-fA-F]{1,4}){1,7}|:)|(?:[a-fA-F0-9]{1,4}:){7}:|:(:[a-fA-F0-9]{1,4}){7})$'
											)
										)
											throw new Error('error_ipv6')
									})(e)
									break
								case 'hostname':
									!(function (t) {
										if (
											!t.match(
												'(?=^.{4,253}$)(^((?!-)[a-zA-Z0-9-]{0,62}[a-zA-Z0-9].)+[a-zA-Z]{2,63}$)'
											)
										)
											throw new Error('error_hostname')
									})(e)
							}
							return []
						} catch (t) {
							return [{ path: r, property: 'format', message: n(t.message) }]
						}
					}
					function fr(t, e) {
						var r = Object.keys(t)
						if (Object.getOwnPropertySymbols) {
							var n = Object.getOwnPropertySymbols(t)
							e &&
								(n = n.filter(function (e) {
									return Object.getOwnPropertyDescriptor(t, e).enumerable
								})),
								r.push.apply(r, n)
						}
						return r
					}
					function yr(t, e, r) {
						return (
							(e = _r(e)) in t
								? Object.defineProperty(t, e, {
										value: r,
										enumerable: !0,
										configurable: !0,
										writable: !0
									})
								: (t[e] = r),
							t
						)
					}
					function mr(t) {
						return (
							(mr =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							mr(t)
						)
					}
					function vr(t, e) {
						return (
							(function (t) {
								if (Array.isArray(t)) return t
							})(t) ||
							(function (t, e) {
								var r =
									null == t
										? null
										: ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
											t['@@iterator']
								if (null != r) {
									var n,
										i,
										o,
										a,
										s = [],
										l = !0,
										c = !1
									try {
										if (((o = (r = r.call(t)).next), 0 === e)) {
											if (Object(r) !== r) return
											l = !1
										} else
											for (
												;
												!(l = (n = o.call(r)).done) &&
												(s.push(n.value), s.length !== e);
												l = !0
											);
									} catch (t) {
										;(c = !0), (i = t)
									} finally {
										try {
											if (
												!l &&
												null != r.return &&
												((a = r.return()), Object(a) !== a)
											)
												return
										} finally {
											if (c) throw i
										}
									}
									return s
								}
							})(t, e) ||
							gr(t, e) ||
							(function () {
								throw new TypeError(
									'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
								)
							})()
						)
					}
					function br(t) {
						return (
							(function (t) {
								if (Array.isArray(t)) return wr(t)
							})(t) ||
							(function (t) {
								if (
									('undefined' != typeof Symbol &&
										null != t[Symbol.iterator]) ||
									null != t['@@iterator']
								)
									return Array.from(t)
							})(t) ||
							gr(t) ||
							(function () {
								throw new TypeError(
									'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
								)
							})()
						)
					}
					function gr(t, e) {
						if (t) {
							if ('string' == typeof t) return wr(t, e)
							var r = Object.prototype.toString.call(t).slice(8, -1)
							return (
								'Object' === r && t.constructor && (r = t.constructor.name),
								'Map' === r || 'Set' === r
									? Array.from(t)
									: 'Arguments' === r ||
										  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
										? wr(t, e)
										: void 0
							)
						}
					}
					function wr(t, e) {
						;(null == e || e > t.length) && (e = t.length)
						for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r]
						return n
					}
					function _r(t) {
						var e = (function (t) {
							if ('object' != mr(t) || !t) return t
							var e = t[Symbol.toPrimitive]
							if (void 0 !== e) {
								var r = e.call(t, 'string')
								if ('object' != mr(r)) return r
								throw new TypeError(
									'@@toPrimitive must return a primitive value.'
								)
							}
							return String(t)
						})(t)
						return 'symbol' == mr(e) ? e : e + ''
					}
					r(8431), r(7945), r(1278)
					var kr = (function () {
						return (
							(t = function t(e, r, n, i) {
								!(function (t, e) {
									if (!(t instanceof e))
										throw new TypeError('Cannot call a class as a function')
								})(this, t),
									(this.jsoneditor = e),
									(this.schema = r || this.jsoneditor.schema),
									(this.options = n || {}),
									(this.translate = this.jsoneditor.translate || i.translate),
									(this.translateProperty =
										this.jsoneditor.translateProperty || i.translateProperty),
									(this.defaults = i),
									(this._validateSubSchema = {
										dependentRequired: function (t, e, r) {
											var n = []
											if (void 0 !== t.dependentRequired) {
												var i = []
												Object.keys(t.dependentRequired).forEach(function (r) {
													if (void 0 !== e[r]) {
														var n = t.dependentRequired[r]
														i = n.filter(function (t) {
															return !h(e, t)
														})
													}
												}),
													i.length > 0 &&
														n.push({
															message:
																'Must have the required properties: ' +
																i.join(', '),
															path: r
														})
											}
											return n
										},
										dependentSchemas: function (t, e, r) {
											var n = this,
												i = []
											return (
												Object.keys(t.dependentSchemas).forEach(function (o) {
													if (void 0 !== e[o]) {
														var a = t.dependentSchemas[o],
															s = n._validateSchema(a, e, r)
														i = [].concat(br(i), br(s))
													}
												}),
												i
											)
										},
										contains: function (t, e, r) {
											var n = this,
												i = [],
												o = 0
											e.forEach(function (e) {
												0 === n._validateSchema(t.contains, e, r).length && o++
											})
											var a = 0 === o
											return (
												void 0 !== t.minContains
													? o < t.minContains &&
														i.push({
															message: this.translate(
																'error_minContains',
																[o, t.minContains],
																t
															),
															path: r
														})
													: a &&
														i.push({
															message: this.translate(
																'error_contains',
																null,
																t
															),
															path: r
														}),
												void 0 !== t.maxContains &&
													o > t.maxContains &&
													i.push({
														message: this.translate(
															'error_maxContains',
															[o, t.maxContains],
															t
														),
														path: r
													}),
												i
											)
										},
										if: function (t, e, r) {
											if (void 0 === t.then && void 0 === t.else) return []
											var n = this._validateSchema(t.if, e, r),
												i = [],
												o = []
											return (
												void 0 !== t.then &&
													(i = this._validateSchema(t.then, e, r)),
												void 0 !== t.else &&
													(o = this._validateSchema(t.else, e, r)),
												!0 === t.if
													? i
													: !1 === t.if
														? o
														: 0 === n.length
															? i
															: n.length > 0
																? o
																: []
											)
										},
										const: function (t, e, r) {
											return JSON.stringify(t.const) === JSON.stringify(e)
												? []
												: [
														{
															path: r,
															property: 'const',
															message: this.translate('error_const', null, t)
														}
													]
										},
										enum: function (t, e, r) {
											var n = JSON.stringify(e)
											return t.enum.some(function (t) {
												return n === JSON.stringify(t)
											})
												? []
												: [
														{
															path: r,
															property: 'enum',
															message: this.translate('error_enum', null, t)
														}
													]
										},
										extends: function (t, e, r) {
											var n = this
											return t.extends.reduce(function (t, i) {
												return (
													t.push.apply(t, br(n._validateSchema(i, e, r))), t
												)
											}, [])
										},
										allOf: function (t, e, r) {
											var n = this
											return t.allOf.reduce(function (t, i) {
												return (
													t.push.apply(t, br(n._validateSchema(i, e, r))), t
												)
											}, [])
										},
										anyOf: function (t, e, r) {
											var n = this
											return t.anyOf.some(function (t) {
												return !n._validateSchema(t, e, r).length
											})
												? []
												: [
														{
															path: r,
															property: 'anyOf',
															message: this.translate('error_anyOf', null, t)
														}
													]
										},
										oneOf: function (t, e, r) {
											var n = this,
												i = 0,
												o = []
											t.oneOf.forEach(function (t, a) {
												var s = n._validateSchema(t, e, r)
												s.length || i++,
													s.forEach(function (t) {
														t.path = ''
															.concat(r, '.oneOf[')
															.concat(a, ']')
															.concat(t.path.substr(r.length))
													}),
													o.push.apply(o, br(s))
											})
											var a = []
											return (
												1 !== i &&
													(a.push({
														path: r,
														property: 'oneOf',
														message: this.translate('error_oneOf', [i], t)
													}),
													a.push.apply(a, o)),
												a
											)
										},
										not: function (t, e, r) {
											return this._validateSchema(t.not, e, r).length
												? []
												: [
														{
															path: r,
															property: 'not',
															message: this.translate('error_not', null, t)
														}
													]
										},
										type: function (t, e, r) {
											var n = this
											if (Array.isArray(t.type)) {
												if (
													!t.type.some(function (t) {
														return n._checkType(t, e)
													})
												)
													return [
														{
															path: r,
															property: 'type',
															message: this.translate(
																'error_type_union',
																null,
																t
															)
														}
													]
											} else if (
												['date', 'time', 'datetime-local'].includes(t.format) &&
												'integer' === t.type
											) {
												if (!this._checkType('string', ''.concat(e)))
													return [
														{
															path: r,
															property: 'type',
															message: this.translate(
																'error_type',
																[t.format],
																t
															)
														}
													]
											} else if (!this._checkType(t.type, e))
												return [
													{
														path: r,
														property: 'type',
														message: this.translate('error_type', [t.type], t)
													}
												]
											return []
										},
										disallow: function (t, e, r) {
											var n = this
											if (Array.isArray(t.disallow)) {
												if (
													t.disallow.some(function (t) {
														return n._checkType(t, e)
													})
												)
													return [
														{
															path: r,
															property: 'disallow',
															message: this.translate(
																'error_disallow_union',
																null,
																t
															)
														}
													]
											} else if (this._checkType(t.disallow, e))
												return [
													{
														path: r,
														property: 'disallow',
														message: this.translate(
															'error_disallow',
															[t.disallow],
															t
														)
													}
												]
											return []
										}
									}),
									(this._validateNumberSubSchema = {
										multipleOf: function (t, e, r) {
											return this._validateNumberSubSchemaMultipleDivisible(
												t,
												e,
												r
											)
										},
										divisibleBy: function (t, e, r) {
											return this._validateNumberSubSchemaMultipleDivisible(
												t,
												e,
												r
											)
										},
										maximum: function (t, e, r) {
											var n = t.exclusiveMaximum
												? e < t.maximum
												: e <= t.maximum
											return (
												window.math
													? (n = window.math[
															t.exclusiveMaximum ? 'smaller' : 'smallerEq'
														](
															window.math.bignumber(e),
															window.math.bignumber(t.maximum)
														))
													: window.Decimal &&
														(n = new window.Decimal(e)[
															t.exclusiveMaximum ? 'lt' : 'lte'
														](new window.Decimal(t.maximum))),
												n
													? []
													: [
															{
																path: r,
																property: 'maximum',
																message: this.translate(
																	t.exclusiveMaximum
																		? 'error_maximum_excl'
																		: 'error_maximum_incl',
																	[t.maximum],
																	t
																)
															}
														]
											)
										},
										minimum: function (t, e, r) {
											var n = t.exclusiveMinimum
												? e > t.minimum
												: e >= t.minimum
											return (
												window.math
													? (n = window.math[
															t.exclusiveMinimum ? 'larger' : 'largerEq'
														](
															window.math.bignumber(e),
															window.math.bignumber(t.minimum)
														))
													: window.Decimal &&
														(n = new window.Decimal(e)[
															t.exclusiveMinimum ? 'gt' : 'gte'
														](new window.Decimal(t.minimum))),
												n
													? []
													: [
															{
																path: r,
																property: 'minimum',
																message: this.translate(
																	t.exclusiveMinimum
																		? 'error_minimum_excl'
																		: 'error_minimum_incl',
																	[t.minimum],
																	t
																)
															}
														]
											)
										}
									}),
									(this._validateStringSubSchema = {
										maxLength: function (t, e, r) {
											var n = []
											return (
												''.concat(e).length > t.maxLength &&
													n.push({
														path: r,
														property: 'maxLength',
														message: this.translate(
															'error_maxLength',
															[t.maxLength],
															t
														)
													}),
												n
											)
										},
										minLength: function (t, e, r) {
											return ''.concat(e).length < t.minLength
												? [
														{
															path: r,
															property: 'minLength',
															message: this.translate(
																1 === t.minLength
																	? 'error_notempty'
																	: 'error_minLength',
																[t.minLength],
																t
															)
														}
													]
												: []
										},
										pattern: function (t, e, r) {
											return new RegExp(t.pattern).test(e)
												? []
												: [
														{
															path: r,
															property: 'pattern',
															message:
																t.options && t.options.patternmessage
																	? t.options.patternmessage
																	: this.translate(
																			'error_pattern',
																			[t.pattern],
																			t
																		)
														}
													]
										}
									}),
									(this._validateArraySubSchema = {
										items: function (t, e, r) {
											var n = this,
												i = []
											if (Array.isArray(t.items))
												for (var o = 0; o < e.length; o++)
													if (t.items[o])
														i.push.apply(
															i,
															br(
																this._validateSchema(
																	t.items[o],
																	e[o],
																	''.concat(r, '.').concat(o)
																)
															)
														)
													else {
														if (!0 === t.additionalItems) break
														if (!t.additionalItems) {
															if (!1 === t.additionalItems) {
																i.push({
																	path: r,
																	property: 'additionalItems',
																	message: this.translate(
																		'error_additionalItems',
																		null,
																		t
																	)
																})
																break
															}
															break
														}
														i.push.apply(
															i,
															br(
																this._validateSchema(
																	t.additionalItems,
																	e[o],
																	''.concat(r, '.').concat(o)
																)
															)
														)
													}
											else
												e.forEach(function (e, o) {
													i.push.apply(
														i,
														br(
															n._validateSchema(
																t.items,
																e,
																''.concat(r, '.').concat(o)
															)
														)
													)
												})
											return i
										},
										maxItems: function (t, e, r) {
											return e.length > t.maxItems
												? [
														{
															path: r,
															property: 'maxItems',
															message: this.translate(
																'error_maxItems',
																[t.maxItems],
																t
															)
														}
													]
												: []
										},
										minItems: function (t, e, r) {
											return e.length < t.minItems
												? [
														{
															path: r,
															property: 'minItems',
															message: this.translate(
																'error_minItems',
																[t.minItems],
																t
															)
														}
													]
												: []
										},
										uniqueItems: function (t, e, r) {
											for (var n = {}, i = 0; i < e.length; i++) {
												var o = JSON.stringify(e[i])
												if (n[o])
													return [
														{
															path: r,
															property: 'uniqueItems',
															message: this.translate(
																'error_uniqueItems',
																null,
																t
															)
														}
													]
												n[o] = !0
											}
											return []
										}
									}),
									(this._validateObjectSubSchema = {
										maxProperties: function (t, e, r) {
											return Object.keys(e).length > t.maxProperties
												? [
														{
															path: r,
															property: 'maxProperties',
															message: this.translate(
																'error_maxProperties',
																[t.maxProperties],
																t
															)
														}
													]
												: []
										},
										minProperties: function (t, e, r) {
											return Object.keys(e).length < t.minProperties
												? [
														{
															path: r,
															property: 'minProperties',
															message: this.translate(
																'error_minProperties',
																[t.minProperties],
																t
															)
														}
													]
												: []
										},
										required: function (t, e, r) {
											var n = this,
												i = []
											return (
												Array.isArray(t.required) &&
													t.required.forEach(function (o) {
														if (void 0 === e[o]) {
															var a = n.jsoneditor.getEditor(
																''.concat(r, '.').concat(o)
															)
															;(a && !1 === a.dependenciesFulfilled) ||
																(a &&
																	['button', 'info'].includes(
																		a.schema.format || a.schema.type
																	)) ||
																i.push({
																	path: r,
																	property: 'required',
																	message: n.translate(
																		'error_required',
																		[
																			t &&
																			t.properties &&
																			t.properties[o] &&
																			t.properties[o].title
																				? t.properties[o].title
																				: o
																		],
																		t
																	)
																})
														}
													}),
												i
											)
										},
										properties: function (t, e, r, n) {
											var i = this,
												o = []
											return (
												Object.entries(t.properties).forEach(function (t) {
													var a = vr(t, 2),
														s = a[0],
														l = a[1]
													;(n[s] = !0),
														o.push.apply(
															o,
															br(
																i._validateSchema(
																	l,
																	e[s],
																	''.concat(r, '.').concat(s)
																)
															)
														)
												}),
												o
											)
										},
										patternProperties: function (t, e, r, n) {
											var i = this,
												o = []
											return (
												Object.entries(t.patternProperties).forEach(
													function (t) {
														var a = vr(t, 2),
															s = a[0],
															l = a[1],
															c = new RegExp(s)
														Object.entries(e).forEach(function (t) {
															var e = vr(t, 2),
																a = e[0],
																s = e[1]
															c.test(a) &&
																((n[a] = !0),
																o.push.apply(
																	o,
																	br(
																		i._validateSchema(
																			l,
																			s,
																			''.concat(r, '.').concat(a)
																		)
																	)
																))
														})
													}
												),
												o
											)
										}
									}),
									(this._validateObjectSubSchema2 = {
										propertyNames: function (t, e, r, n) {
											for (
												var i,
													o = this,
													a = [],
													s = Object.keys(e),
													l = null,
													c = function () {
														var e = ''
														return (
															(l = s[u]),
															'boolean' == typeof t.propertyNames
																? !0 === t.propertyNames
																	? 0
																	: (a.push({
																			path: r,
																			property: 'propertyNames',
																			message: o.translate(
																				'error_property_names_false',
																				[l],
																				t
																			)
																		}),
																		1)
																: Object.entries(t.propertyNames).every(
																			function (n) {
																				var i = vr(n, 2),
																					s = i[0],
																					c = i[1],
																					u = !1
																				switch (s) {
																					case 'maxLength':
																						if ('number' != typeof c) {
																							e =
																								'error_property_names_maxlength'
																							break
																						}
																						if (l.length > c) {
																							e =
																								'error_property_names_exceeds_maxlength'
																							break
																						}
																						return !0
																					case 'const':
																						if (c !== l) {
																							e =
																								'error_property_names_const_mismatch'
																							break
																						}
																						return !0
																					case 'enum':
																						if (!Array.isArray(c)) {
																							e = 'error_property_names_enum'
																							break
																						}
																						if (
																							(c.forEach(function (t) {
																								t === l && (u = !0)
																							}),
																							!u)
																						) {
																							e =
																								'error_property_names_enum_mismatch'
																							break
																						}
																						return !0
																					case 'pattern':
																						if ('string' != typeof c) {
																							e = 'error_property_names_pattern'
																							break
																						}
																						if (!new RegExp(c).test(l)) {
																							e =
																								'error_property_names_pattern_mismatch'
																							break
																						}
																						return !0
																					default:
																						return (
																							a.push({
																								path: r,
																								property: 'propertyNames',
																								message: o.translate(
																									'error_property_names_unsupported',
																									[s],
																									t
																								)
																							}),
																							!1
																						)
																				}
																				return (
																					a.push({
																						path: r,
																						property: 'propertyNames',
																						message: o.translate(e, [l], t)
																					}),
																					!1
																				)
																			}
																	  )
																	? void 0
																	: 1
														)
													},
													u = 0;
												u < s.length && (0 === (i = c()) || 1 !== i);
												u++
											);
											return a
										},
										additionalProperties: function (t, e, r, n) {
											for (
												var i = [], o = Object.keys(e), a = 0;
												a < o.length;
												a++
											) {
												var s = o[a]
												if (!n[s]) {
													if (!t.additionalProperties) {
														i.push({
															path: r,
															property: 'additionalProperties',
															message: this.translate(
																'error_additional_properties',
																[s],
																t
															)
														})
														break
													}
													if (!0 === t.additionalProperties) break
													i.push.apply(
														i,
														br(
															this._validateSchema(
																t.additionalProperties,
																e[s],
																''.concat(r, '.').concat(s)
															)
														)
													)
												}
											}
											return i
										},
										dependencies: function (t, e, r) {
											var n = this,
												i = []
											return (
												Object.entries(t.dependencies).forEach(function (o) {
													var a = vr(o, 2),
														s = a[0],
														l = a[1]
													void 0 !== e[s] &&
														(Array.isArray(l)
															? l.forEach(function (o) {
																	void 0 === e[o] &&
																		i.push({
																			path: r,
																			property: 'dependencies',
																			message: n.translate(
																				'error_dependency',
																				[o],
																				t
																			)
																		})
																})
															: i.push.apply(i, br(n._validateSchema(l, e, r))))
												}),
												i
											)
										}
									})
							}),
							(e = [
								{
									key: 'fitTest',
									value: function (t, e) {
										var r =
												arguments.length > 2 && void 0 !== arguments[2]
													? arguments[2]
													: 1e7,
											n = { match: 0, extra: 0 }
										if ('object' === mr(t) && null !== t) {
											var i = this._getSchema(e)
											if (i.anyOf) {
												var o,
													a = (function (t) {
														for (var e = 1; e < arguments.length; e++) {
															var r = null != arguments[e] ? arguments[e] : {}
															e % 2
																? fr(Object(r), !0).forEach(function (e) {
																		yr(t, e, r[e])
																	})
																: Object.getOwnPropertyDescriptors
																	? Object.defineProperties(
																			t,
																			Object.getOwnPropertyDescriptors(r)
																		)
																	: fr(Object(r)).forEach(function (e) {
																			Object.defineProperty(
																				t,
																				e,
																				Object.getOwnPropertyDescriptor(r, e)
																			)
																		})
														}
														return t
													})({}, n),
													s = (function (t) {
														var e =
															('undefined' != typeof Symbol &&
																t[Symbol.iterator]) ||
															t['@@iterator']
														if (!e) {
															if (Array.isArray(t) || (e = gr(t))) {
																e && (t = e)
																var r = 0,
																	n = function () {}
																return {
																	s: n,
																	n: function () {
																		return r >= t.length
																			? { done: !0 }
																			: { done: !1, value: t[r++] }
																	},
																	e: function (t) {
																		throw t
																	},
																	f: n
																}
															}
															throw new TypeError(
																'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
															)
														}
														var i,
															o = !0,
															a = !1
														return {
															s: function () {
																e = e.call(t)
															},
															n: function () {
																var t = e.next()
																return (o = t.done), t
															},
															e: function (t) {
																;(a = !0), (i = t)
															},
															f: function () {
																try {
																	o || null == e.return || e.return()
																} finally {
																	if (a) throw i
																}
															}
														}
													})(i.anyOf)
												try {
													for (s.s(); !(o = s.n()).done; ) {
														var l = o.value,
															c = this.fitTest(t, l, r)
														;(c.match > a.match ||
															(c.match === a.match && c.extra < a.extra)) &&
															(a = c)
													}
												} catch (t) {
													s.e(t)
												} finally {
													s.f()
												}
												return a
											}
											var u = this._getSchema(e).properties
											for (var p in u)
												if (h(u, p)) {
													if (
														'object' === mr(t[p]) &&
														'object' === mr(u[p]) &&
														'object' === mr(u[p].properties)
													) {
														var d = this.fitTest(t[p], u[p], r / 100)
														;(n.match += d.match), (n.extra += d.extra)
													}
													void 0 !== t[p] && (n.match += r)
												} else n.extra += r
										}
										return n
									}
								},
								{
									key: '_getSchema',
									value: function (t) {
										return void 0 === t
											? l({}, this.jsoneditor.expandRefs(this.schema))
											: t
									}
								},
								{
									key: 'validate',
									value: function (t) {
										return this._validateSchema(this.schema, t)
									}
								},
								{
									key: '_validateSchema',
									value: function (t, e, r) {
										var n = this,
											i = []
										return (
											(r = r || this.jsoneditor.root.formname),
											(t = l({}, this.jsoneditor.expandRefs(t))),
											void 0 === e
												? this._validateV3Required(t, e, r)
												: (Object.keys(t).forEach(function (o) {
														n._validateSubSchema[o] &&
															i.push.apply(
																i,
																br(n._validateSubSchema[o].call(n, t, e, r))
															)
													}),
													i.push.apply(
														i,
														br(this._validateByValueType(t, e, r))
													),
													t.links &&
														t.links.forEach(function (o, a) {
															o.rel &&
																'describedby' === o.rel.toLowerCase() &&
																((t = n._expandSchemaLink(t, a)),
																i.push.apply(
																	i,
																	br(n._validateSchema(t, e, r, n.translate))
																))
														}),
													['date', 'time', 'datetime-local'].includes(
														t.format
													) &&
														i.push.apply(
															i,
															br(this._validateDateTimeSubSchema(t, e, r))
														),
													['uuid'].includes(t.format) &&
														i.push.apply(
															i,
															br(this._validateUUIDSchema(t, e, r))
														),
													i.push.apply(
														i,
														br(this._validateCustomValidator(t, e, r))
													),
													this._removeDuplicateErrors(i))
										)
									}
								},
								{
									key: '_expandSchemaLink',
									value: function (t, e) {
										var r = t.links[e].href,
											n = this.jsoneditor.root.getValue(),
											i = this.jsoneditor.compileTemplate(
												r,
												this.jsoneditor.template
											),
											o =
												document.location.origin +
												document.location.pathname +
												i(n)
										return (
											(t.links = t.links
												.slice(0, e)
												.concat(t.links.slice(e + 1))),
											l({}, t, this.jsoneditor.refs[o])
										)
									}
								},
								{
									key: '_validateV3Required',
									value: function (t, e, r) {
										return ((void 0 !== t.required && !0 === t.required) ||
											(void 0 === t.required &&
												!0 === this.jsoneditor.options.required_by_default)) &&
											'info' !== t.type
											? [
													{
														path: r,
														property: 'required',
														message: this.translate('error_notset', null, t)
													}
												]
											: []
									}
								},
								{
									key: '_validateByValueType',
									value: function (t, e, r) {
										var n = this,
											i = []
										if (null === e) return i
										if ('number' == typeof e)
											Object.keys(t).forEach(function (o) {
												n._validateNumberSubSchema[o] &&
													i.push.apply(
														i,
														br(n._validateNumberSubSchema[o].call(n, t, e, r))
													)
											})
										else if ('string' == typeof e)
											Object.keys(t).forEach(function (o) {
												n._validateStringSubSchema[o] &&
													i.push.apply(
														i,
														br(n._validateStringSubSchema[o].call(n, t, e, r))
													)
											})
										else if (Array.isArray(e))
											Object.keys(t).forEach(function (o) {
												n._validateArraySubSchema[o] &&
													i.push.apply(
														i,
														br(n._validateArraySubSchema[o].call(n, t, e, r))
													)
											})
										else if ('object' === mr(e)) {
											var o = {}
											Object.keys(t).forEach(function (a) {
												n._validateObjectSubSchema[a] &&
													i.push.apply(
														i,
														br(
															n._validateObjectSubSchema[a].call(n, t, e, r, o)
														)
													)
											}),
												void 0 !== t.additionalProperties ||
													!this.jsoneditor.options.no_additional_properties ||
													t.oneOf ||
													t.anyOf ||
													t.allOf ||
													(t.additionalProperties = !1),
												Object.keys(t).forEach(function (a) {
													void 0 !== n._validateObjectSubSchema2[a] &&
														i.push.apply(
															i,
															br(
																n._validateObjectSubSchema2[a].call(
																	n,
																	t,
																	e,
																	r,
																	o
																)
															)
														)
												})
										}
										return i
									}
								},
								{
									key: '_validateUUIDSchema',
									value: function (t, e, r) {
										return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
											e
										)
											? []
											: [
													{
														path: r,
														property: 'format',
														message: this.translate(
															'error_pattern',
															[
																'^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$'
															],
															t
														)
													}
												]
									}
								},
								{
									key: '_validateNumberSubSchemaMultipleDivisible',
									value: function (t, e, r) {
										var n = t.multipleOf || t.divisibleBy,
											i = e / n === Math.floor(e / n)
										return (
											window.math
												? (i = window.math
														.mod(
															window.math.bignumber(e),
															window.math.bignumber(n)
														)
														.equals(0))
												: window.Decimal &&
													(i = new window.Decimal(e)
														.mod(new window.Decimal(n))
														.equals(0)),
											i
												? []
												: [
														{
															path: r,
															property: t.multipleOf
																? 'multipleOf'
																: 'divisibleBy',
															message: this.translate(
																'error_multipleOf',
																[n],
																t
															)
														}
													]
										)
									}
								},
								{
									key: '_validateDateTimeSubSchema',
									value: function (t, e, r) {
										var n = this,
											i = this.jsoneditor.getEditor(r),
											o =
												i && i.flatpickr
													? i.flatpickr.config.dateFormat
													: {
															date: '"YYYY-MM-DD"',
															time: '"HH:MM"',
															'datetime-local': '"YYYY-MM-DD HH:MM"'
														}[t.format]
										if ('integer' === t.type)
											return (function (t, e, r) {
												return 1 * e < 1
													? [
															{
																path: r,
																property: 'format',
																message: n.translate(
																	'error_invalid_epoch',
																	null,
																	t
																)
															}
														]
													: e !== Math.abs(parseInt(e))
														? [
																{
																	path: r,
																	property: 'format',
																	message: n.translate(
																		'error_'.concat(
																			t.format.replace(/-/g, '_')
																		),
																		[o],
																		t
																	)
																}
															]
														: []
											})(t, e, r)
										if (i && i.flatpickr) {
											if (i)
												return (function (t, e, r, i) {
													if ('' !== e) {
														var o
														if ('single' !== i.flatpickr.config.mode) {
															var a =
																'range' === i.flatpickr.config.mode
																	? i.flatpickr.l10n.rangeSeparator
																	: ', '
															o = i.flatpickr.selectedDates
																.map(function (t) {
																	return i.flatpickr.formatDate(
																		t,
																		i.flatpickr.config.dateFormat
																	)
																})
																.join(a)
														}
														try {
															if (o) {
																if (o !== e)
																	throw new Error(
																		''.concat(
																			i.flatpickr.config.mode,
																			' mismatch'
																		)
																	)
															} else if (
																i.flatpickr.formatDate(
																	i.flatpickr.parseDate(
																		e,
																		i.flatpickr.config.dateFormat
																	),
																	i.flatpickr.config.dateFormat
																) !== e
															)
																throw new Error('mismatch')
														} catch (e) {
															var s =
																void 0 !== i.flatpickr.config.errorDateFormat
																	? i.flatpickr.config.errorDateFormat
																	: i.flatpickr.config.dateFormat
															return [
																{
																	path: r,
																	property: 'format',
																	message: n.translate(
																		'error_'.concat(
																			i.format.replace(/-/g, '_')
																		),
																		[s],
																		t
																	)
																}
															]
														}
													}
													return []
												})(t, e, r, i)
										} else if (
											!{
												date: /^(\d{4}\D\d{2}\D\d{2})$/,
												time: /^(\d{2}:\d{2}(?::\d{2})?)$/,
												'datetime-local':
													/^(\d{4}\D\d{2}\D\d{2}[ T]\d{2}:\d{2}(?::\d{2})?)$/
											}[t.format].test(e)
										)
											return [
												{
													path: r,
													property: 'format',
													message: this.translate(
														'error_'.concat(t.format.replace(/-/g, '_')),
														[o],
														t
													)
												}
											]
										return []
									}
								},
								{
									key: '_validateCustomValidator',
									value: function (t, e, r) {
										var n = this,
											i = []
										i.push.apply(i, br(dr.call(this, t, e, r, this.translate)))
										var o = function (o) {
											i.push.apply(i, br(o.call(n, t, e, r)))
										}
										return (
											this.defaults.custom_validators.forEach(o),
											this.options.custom_validators &&
												this.options.custom_validators.forEach(o),
											i
										)
									}
								},
								{
									key: '_removeDuplicateErrors',
									value: function (t) {
										return t.reduce(function (t, e) {
											var r = !0
											return (
												t || (t = []),
												t.forEach(function (t) {
													t.message === e.message &&
														t.path === e.path &&
														t.property === e.property &&
														(t.errorcount++, (r = !1))
												}),
												r && ((e.errorcount = 1), t.push(e)),
												t
											)
										}, [])
									}
								},
								{
									key: '_checkType',
									value: function (t, e) {
										var r = {
											string: function (t) {
												return 'string' == typeof t
											},
											number: function (t) {
												return 'number' == typeof t
											},
											integer: function (t) {
												return 'number' == typeof t && t === Math.floor(t)
											},
											boolean: function (t) {
												return 'boolean' == typeof t
											},
											array: function (t) {
												return Array.isArray(t)
											},
											object: function (t) {
												return (
													null !== t && !Array.isArray(t) && 'object' === mr(t)
												)
											},
											null: function (t) {
												return null === t
											}
										}
										return 'string' == typeof t
											? !r[t] || r[t](e)
											: !this._validateSchema(t, e).length
									}
								}
							]),
							e &&
								(function (t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r]
										;(n.enumerable = n.enumerable || !1),
											(n.configurable = !0),
											'value' in n && (n.writable = !0),
											Object.defineProperty(t, _r(n.key), n)
									}
								})(t.prototype, e),
							Object.defineProperty(t, 'prototype', { writable: !1 }),
							t
						)
						var t, e
					})()
					function jr(t) {
						return (
							(jr =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							jr(t)
						)
					}
					function Or(t) {
						var e = (function (t) {
							if ('object' != jr(t) || !t) return t
							var e = t[Symbol.toPrimitive]
							if (void 0 !== e) {
								var r = e.call(t, 'string')
								if ('object' != jr(r)) return r
								throw new TypeError(
									'@@toPrimitive must return a primitive value.'
								)
							}
							return String(t)
						})(t)
						return 'symbol' == jr(e) ? e : e + ''
					}
					function xr() {
						try {
							var t = !Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							)
						} catch (t) {}
						return (xr = function () {
							return !!t
						})()
					}
					function Cr() {
						return (
							(Cr =
								'undefined' != typeof Reflect && Reflect.get
									? Reflect.get.bind()
									: function (t, e, r) {
											var n = (function (t, e) {
												for (
													;
													!Object.prototype.hasOwnProperty.call(t, e) &&
													null !== (t = Er(t));

												);
												return t
											})(t, e)
											if (n) {
												var i = Object.getOwnPropertyDescriptor(n, e)
												return i.get
													? i.get.call(arguments.length < 3 ? t : r)
													: i.value
											}
										}),
							Cr.apply(this, arguments)
						)
					}
					function Er(t) {
						return (
							(Er = Object.setPrototypeOf
								? Object.getPrototypeOf.bind()
								: function (t) {
										return t.__proto__ || Object.getPrototypeOf(t)
									}),
							Er(t)
						)
					}
					function Sr(t, e) {
						return (
							(Sr = Object.setPrototypeOf
								? Object.setPrototypeOf.bind()
								: function (t, e) {
										return (t.__proto__ = e), t
									}),
							Sr(t, e)
						)
					}
					var Pr = (function (t) {
						function e() {
							return (
								(function (t, e) {
									if (!(t instanceof e))
										throw new TypeError('Cannot call a class as a function')
								})(this, e),
								(function (t, e, r) {
									return (
										(e = Er(e)),
										(function (t, e) {
											if (e && ('object' === jr(e) || 'function' == typeof e))
												return e
											if (void 0 !== e)
												throw new TypeError(
													'Derived constructors may only return object or undefined'
												)
											return (function (t) {
												if (void 0 === t)
													throw new ReferenceError(
														"this hasn't been initialised - super() hasn't been called"
													)
												return t
											})(t)
										})(
											t,
											xr()
												? Reflect.construct(e, r || [], Er(t).constructor)
												: e.apply(t, r)
										)
									)
								})(this, e, arguments)
							)
						}
						return (
							(function (t, e) {
								if ('function' != typeof e && null !== e)
									throw new TypeError(
										'Super expression must either be null or a function'
									)
								;(t.prototype = Object.create(e && e.prototype, {
									constructor: { value: t, writable: !0, configurable: !0 }
								})),
									Object.defineProperty(t, 'prototype', { writable: !1 }),
									e && Sr(t, e)
							})(e, t),
							(r = e),
							(n = [
								{
									key: 'register',
									value: function () {
										if (this.editors) {
											for (var t = 0; t < this.editors.length; t++)
												this.editors[t] && this.editors[t].unregister()
											this.editors[this.type] &&
												this.editors[this.type].register()
										}
										Cr(Er(e.prototype), 'register', this).call(this)
									}
								},
								{
									key: 'unregister',
									value: function () {
										if (
											(Cr(Er(e.prototype), 'unregister', this).call(this),
											this.editors)
										)
											for (var t = 0; t < this.editors.length; t++)
												this.editors[t] && this.editors[t].unregister()
									}
								},
								{
									key: 'getNumColumns',
									value: function () {
										return this.editors[this.type]
											? Math.max(this.editors[this.type].getNumColumns(), 4)
											: 4
									}
								},
								{
									key: 'enable',
									value: function () {
										if (!this.always_disabled) {
											if (this.editors)
												for (var t = 0; t < this.editors.length; t++)
													this.editors[t] && this.editors[t].enable()
											;(this.switcher.disabled = !1),
												Cr(Er(e.prototype), 'enable', this).call(this)
										}
									}
								},
								{
									key: 'disable',
									value: function (t) {
										if ((t && (this.always_disabled = !0), this.editors))
											for (var r = 0; r < this.editors.length; r++)
												this.editors[r] && this.editors[r].disable(t)
										;(this.switcher.disabled = !0),
											Cr(Er(e.prototype), 'disable', this).call(this)
									}
								},
								{
									key: 'switchEditor',
									value: function (t) {
										var e = this
										;(this.lastType = this.type),
											this.editors[t] || this.buildChildEditor(t)
										var r = this.getValue()
										;(this.type = t),
											this.register(),
											this.editors.forEach(function (t, n) {
												var i, o
												t &&
													(e.type === n
														? (e.keep_only_existing_values &&
																((i = t.getValue()),
																(o = r),
																Object.keys(o).forEach(function (t) {
																	t in i && (i[t] = o[t])
																}),
																(r = i)),
															(e.keep_values || e.if) && t.setValue(r, !0),
															(t.container.style.display = ''))
														: (t.container.style.display = 'none'))
											}),
											this.onChange(!0, !1, {
												event: 'switch',
												data: {
													type: this.lastType,
													path: this.editors[t].path
												}
											}),
											this.refreshValue(),
											this.refreshHeaderText()
									}
								},
								{
									key: 'buildChildEditor',
									value: function (t) {
										var e,
											r,
											n = this,
											i = this.types[t],
											o = this.theme.getChildEditorHolder()
										this.editor_holder.appendChild(o),
											'string' == typeof i
												? ((r = l({}, this.schema)).type = i)
												: ((r = l({}, this.schema, i)),
													(r = this.jsoneditor.expandRefs(r)),
													i &&
														i.required &&
														Array.isArray(i.required) &&
														this.schema.required &&
														Array.isArray(this.schema.required) &&
														(r.required = this.schema.required.concat(
															i.required
														))),
											null !== (e = r) &&
												void 0 !== e &&
												null !== (e = e.options) &&
												void 0 !== e &&
												e.dependencies &&
												delete r.options.dependencies
										var a = this.jsoneditor.getEditorClass(r)
										;(this.editors[t] = this.jsoneditor.createEditor(a, {
											jsoneditor: this.jsoneditor,
											schema: r,
											container: o,
											path: this.path,
											parent: this,
											required: !0
										})),
											this.editors[t].preBuild(),
											this.editors[t].build(),
											this.editors[t].postBuild(),
											this.editors[t].header &&
												this.theme.visuallyHidden(this.editors[t].header),
											(this.editors[t].option = this.switcher_options[t]),
											o.addEventListener('change_header_text', function () {
												n.refreshHeaderText()
											}),
											t !== this.type && (o.style.display = 'none')
									}
								},
								{
									key: 'preBuild',
									value: function () {
										if (
											((this.types = []),
											(this.type = 0),
											(this.editors = []),
											(this.validators = []),
											(this.keep_values = !0),
											void 0 !== this.jsoneditor.options.keep_oneof_values &&
												(this.keep_values =
													this.jsoneditor.options.keep_oneof_values),
											void 0 !== this.options.keep_oneof_values &&
												(this.keep_values = this.options.keep_oneof_values),
											(this.keep_only_existing_values = !1),
											void 0 !==
												this.jsoneditor.options.keep_only_existing_values &&
												(this.keep_only_existing_values =
													this.jsoneditor.options.keep_only_existing_values),
											void 0 !== this.options.keep_only_existing_values &&
												(this.keep_only_existing_values =
													this.options.keep_only_existing_values),
											this.schema.oneOf)
										)
											(this.oneOf = !0),
												(this.types = this.schema.oneOf),
												delete this.schema.oneOf
										else if (this.schema.anyOf)
											(this.anyOf = !0),
												(this.types = this.schema.anyOf),
												delete this.schema.anyOf
										else if (this.schema.if)
											(this.if = !0),
												(this.ifSchema = JSON.parse(
													JSON.stringify(this.schema.if)
												)),
												(this.thenSchema = { title: 'then' }),
												(this.elseSchema = { title: 'else' }),
												(this.types = []),
												this.schema.then &&
													m(this.thenSchema, this.schema, this.schema.then),
												this.schema.else &&
													m(this.elseSchema, this.schema, this.schema.else),
												this.types.push(this.thenSchema),
												this.types.push(this.elseSchema),
												this.types.forEach(function (t) {
													delete t.if, delete t.then, delete t.else
												}),
												delete this.schema.if
										else {
											if (this.schema.type && 'any' !== this.schema.type)
												Array.isArray(this.schema.type)
													? (this.types = this.schema.type)
													: (this.types = [this.schema.type])
											else if (
												((this.types = [
													'string',
													'number',
													'integer',
													'boolean',
													'object',
													'array',
													'null'
												]),
												this.schema.disallow)
											) {
												var t = this.schema.disallow
												;('object' === jr(t) && Array.isArray(t)) || (t = [t])
												var e = []
												this.types.forEach(function (r) {
													t.includes(r) || e.push(r)
												}),
													(this.types = e)
											}
											delete this.schema.type
										}
										this.display_text = this.getDisplayText(this.types)
									}
								},
								{
									key: 'build',
									value: function () {
										var t = this,
											e = this.container
										;(this.header = this.label =
											this.theme.getLabelLike(
												this.getTitle(),
												this.isRequired()
											)),
											(this.switcher = this.theme.getSwitcher(
												this.display_text
											)),
											this.switcher.setAttribute(
												'id',
												this.formname + 'switcher'
											),
											(this.switcherLabel = this.theme.getHiddenLabel(
												this.formname + ' switcher'
											)),
											this.switcherLabel.setAttribute(
												'for',
												this.formname + 'switcher'
											),
											this.if ||
												(this.container.appendChild(this.header),
												e.appendChild(this.switcherLabel),
												e.appendChild(this.switcher)),
											this.switcher.addEventListener('change', function (e) {
												e.preventDefault(),
													e.stopPropagation(),
													t.switchEditor(
														t.display_text.indexOf(e.currentTarget.value)
													),
													t.onChange(!0)
											}),
											(this.editor_holder = document.createElement('div')),
											e.appendChild(this.editor_holder)
										var r = {}
										this.jsoneditor.options.custom_validators &&
											(r.custom_validators =
												this.jsoneditor.options.custom_validators),
											(this.switcher_options = this.theme.getSwitcherOptions(
												this.switcher
											)),
											this.types.forEach(function (e, n) {
												var i
												;(t.editors[n] = !1),
													'string' == typeof e
														? ((i = l({}, t.schema)).type = e)
														: ((i = l({}, t.schema, e)),
															e.required &&
																Array.isArray(e.required) &&
																t.schema.required &&
																Array.isArray(t.schema.required) &&
																(i.required = t.schema.required.concat(
																	e.required
																))),
													(t.validators[n] = new kr(
														t.jsoneditor,
														i,
														r,
														t.defaults
													))
											}),
											this.jsoneditor.on('change', function () {
												t.switchIf()
											}),
											this.switchEditor(0)
									}
								},
								{
									key: 'onChildEditorChange',
									value: function (t, r) {
										this.editors[this.type] &&
											(this.refreshValue(), this.refreshHeaderText()),
											Cr(Er(e.prototype), 'onChildEditorChange', this).call(
												this,
												t,
												r
											)
									}
								},
								{
									key: 'refreshHeaderText',
									value: function () {
										var t = this.getDisplayText(this.types)
										Array.from(this.switcher_options).forEach(function (e, r) {
											e.textContent = t[r]
										})
									}
								},
								{
									key: 'refreshValue',
									value: function () {
										this.editors[this.type] &&
											(this.value = this.editors[this.type].getValue())
									}
								},
								{
									key: 'switchIf',
									value: function () {
										if (this.ifSchema && this.value) {
											var t = this.getIfType(this.value)
											this.lastType !== t &&
												(this.switchEditor(t),
												this.editors[this.type].setValue(this.value, !0)),
												(this.switcher.value = this.display_text[this.type])
										}
									}
								},
								{
									key: 'getIfType',
									value: function (t) {
										return 0 ===
											this.jsoneditor.validator._validateSchema(
												this.ifSchema,
												t
											).length
											? 0
											: 1
									}
								},
								{
									key: 'setValue',
									value: function (t, e) {
										var r = this
										t = this.applyConstFilter(t)
										var n = this.type,
											i = { match: 0, extra: 0, i: this.type },
											o = { match: 0, i: null }
										this.validators.forEach(function (e, n) {
											var a = null
											void 0 !== r.anyOf &&
												r.anyOf &&
												((a = e.fitTest(t)),
												(i.match < a.match ||
													(i.match === a.match && i.extra > a.extra)) &&
													((i = a).i = n)),
												e.validate(t).length || null !== o.i
													? (i = o)
													: ((o.i = n), null !== a && (o.match = a.match))
										})
										var a = o.i
										void 0 !== this.anyOf &&
											this.anyOf &&
											o.match < i.match &&
											(a = i.i),
											this.if && (a = this.getIfType(t)),
											null === a && (a = this.type),
											(this.type = a),
											(this.switcher.value = this.display_text[a])
										var s = this.type !== n
										s &&
											(this.switchEditor(this.type),
											this.editors[this.type].setValue(t, e)),
											void 0 !== t && this.editors[this.type].setValue(t, e),
											this.refreshValue(),
											this.onChange(s)
									}
								},
								{
									key: 'destroy',
									value: function () {
										this.editors.forEach(function (t) {
											t && t.destroy()
										}),
											this.editor_holder &&
												this.editor_holder.parentNode &&
												this.editor_holder.parentNode.removeChild(
													this.editor_holder
												),
											this.switcher &&
												this.switcher.parentNode &&
												this.switcher.parentNode.removeChild(this.switcher),
											Cr(Er(e.prototype), 'destroy', this).call(this)
									}
								},
								{
									key: 'showValidationErrors',
									value: function (t) {
										var e = this
										if (this.oneOf || this.anyOf) {
											var r = this.oneOf ? 'oneOf' : 'anyOf'
											this.editors.forEach(function (n, i) {
												if (n) {
													var o = ''
														.concat(e.path, '.')
														.concat(r, '[')
														.concat(i, ']')
													n.showValidationErrors(
														t.reduce(function (t, r) {
															if (
																r.path.startsWith(o) ||
																r.path === o.substr(0, r.path.length)
															) {
																var n = l({}, r)
																r.path.startsWith(o) &&
																	(n.path = e.path + n.path.substr(o.length)),
																	t.push(n)
															}
															return t
														}, [])
													)
												}
											})
										} else
											this.editors.forEach(function (e) {
												e && e.showValidationErrors(t)
											})
									}
								},
								{ key: 'addLinks', value: function () {} }
							]) &&
								(function (t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r]
										;(n.enumerable = n.enumerable || !1),
											(n.configurable = !0),
											'value' in n && (n.writable = !0),
											Object.defineProperty(t, Or(n.key), n)
									}
								})(r.prototype, n),
							Object.defineProperty(r, 'prototype', { writable: !1 }),
							r
						)
						var r, n
					})(w)
					function Lr(t) {
						return (
							(Lr =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							Lr(t)
						)
					}
					function Tr(t) {
						var e = (function (t) {
							if ('object' != Lr(t) || !t) return t
							var e = t[Symbol.toPrimitive]
							if (void 0 !== e) {
								var r = e.call(t, 'string')
								if ('object' != Lr(r)) return r
								throw new TypeError(
									'@@toPrimitive must return a primitive value.'
								)
							}
							return String(t)
						})(t)
						return 'symbol' == Lr(e) ? e : e + ''
					}
					function Ar() {
						try {
							var t = !Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							)
						} catch (t) {}
						return (Ar = function () {
							return !!t
						})()
					}
					function Rr(t) {
						return (
							(Rr = Object.setPrototypeOf
								? Object.getPrototypeOf.bind()
								: function (t) {
										return t.__proto__ || Object.getPrototypeOf(t)
									}),
							Rr(t)
						)
					}
					function Ir(t, e) {
						return (
							(Ir = Object.setPrototypeOf
								? Object.setPrototypeOf.bind()
								: function (t, e) {
										return (t.__proto__ = e), t
									}),
							Ir(t, e)
						)
					}
					var Br = (function (t) {
						function e() {
							return (
								(function (t, e) {
									if (!(t instanceof e))
										throw new TypeError('Cannot call a class as a function')
								})(this, e),
								(function (t, e, r) {
									return (
										(e = Rr(e)),
										(function (t, e) {
											if (e && ('object' === Lr(e) || 'function' == typeof e))
												return e
											if (void 0 !== e)
												throw new TypeError(
													'Derived constructors may only return object or undefined'
												)
											return (function (t) {
												if (void 0 === t)
													throw new ReferenceError(
														"this hasn't been initialised - super() hasn't been called"
													)
												return t
											})(t)
										})(
											t,
											Ar()
												? Reflect.construct(e, r || [], Rr(t).constructor)
												: e.apply(t, r)
										)
									)
								})(this, e, arguments)
							)
						}
						return (
							(function (t, e) {
								if ('function' != typeof e && null !== e)
									throw new TypeError(
										'Super expression must either be null or a function'
									)
								;(t.prototype = Object.create(e && e.prototype, {
									constructor: { value: t, writable: !0, configurable: !0 }
								})),
									Object.defineProperty(t, 'prototype', { writable: !1 }),
									e && Ir(t, e)
							})(e, t),
							(r = e),
							(n = [
								{
									key: 'getValue',
									value: function () {
										if (this.dependenciesFulfilled) return null
									}
								},
								{
									key: 'setValue',
									value: function () {
										this.onChange()
									}
								},
								{
									key: 'getNumColumns',
									value: function () {
										return 2
									}
								}
							]) &&
								(function (t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r]
										;(n.enumerable = n.enumerable || !1),
											(n.configurable = !0),
											'value' in n && (n.writable = !0),
											Object.defineProperty(t, Tr(n.key), n)
									}
								})(r.prototype, n),
							Object.defineProperty(r, 'prototype', { writable: !1 }),
							r
						)
						var r, n
					})(w)
					function Nr(t, e) {
						var r = Object.keys(t)
						if (Object.getOwnPropertySymbols) {
							var n = Object.getOwnPropertySymbols(t)
							e &&
								(n = n.filter(function (e) {
									return Object.getOwnPropertyDescriptor(t, e).enumerable
								})),
								r.push.apply(r, n)
						}
						return r
					}
					function Dr(t) {
						for (var e = 1; e < arguments.length; e++) {
							var r = null != arguments[e] ? arguments[e] : {}
							e % 2
								? Nr(Object(r), !0).forEach(function (e) {
										Fr(t, e, r[e])
									})
								: Object.getOwnPropertyDescriptors
									? Object.defineProperties(
											t,
											Object.getOwnPropertyDescriptors(r)
										)
									: Nr(Object(r)).forEach(function (e) {
											Object.defineProperty(
												t,
												e,
												Object.getOwnPropertyDescriptor(r, e)
											)
										})
						}
						return t
					}
					function Fr(t, e, r) {
						return (
							(e = Mr(e)) in t
								? Object.defineProperty(t, e, {
										value: r,
										enumerable: !0,
										configurable: !0,
										writable: !0
									})
								: (t[e] = r),
							t
						)
					}
					function Vr(t, e) {
						return (
							(function (t) {
								if (Array.isArray(t)) return t
							})(t) ||
							(function (t, e) {
								var r =
									null == t
										? null
										: ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
											t['@@iterator']
								if (null != r) {
									var n,
										i,
										o,
										a,
										s = [],
										l = !0,
										c = !1
									try {
										if (((o = (r = r.call(t)).next), 0 === e)) {
											if (Object(r) !== r) return
											l = !1
										} else
											for (
												;
												!(l = (n = o.call(r)).done) &&
												(s.push(n.value), s.length !== e);
												l = !0
											);
									} catch (t) {
										;(c = !0), (i = t)
									} finally {
										try {
											if (
												!l &&
												null != r.return &&
												((a = r.return()), Object(a) !== a)
											)
												return
										} finally {
											if (c) throw i
										}
									}
									return s
								}
							})(t, e) ||
							(function (t, e) {
								if (t) {
									if ('string' == typeof t) return Hr(t, e)
									var r = Object.prototype.toString.call(t).slice(8, -1)
									return (
										'Object' === r && t.constructor && (r = t.constructor.name),
										'Map' === r || 'Set' === r
											? Array.from(t)
											: 'Arguments' === r ||
												  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
												? Hr(t, e)
												: void 0
									)
								}
							})(t, e) ||
							(function () {
								throw new TypeError(
									'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
								)
							})()
						)
					}
					function Hr(t, e) {
						;(null == e || e > t.length) && (e = t.length)
						for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r]
						return n
					}
					function zr(t) {
						return (
							(zr =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							zr(t)
						)
					}
					function Mr(t) {
						var e = (function (t) {
							if ('object' != zr(t) || !t) return t
							var e = t[Symbol.toPrimitive]
							if (void 0 !== e) {
								var r = e.call(t, 'string')
								if ('object' != zr(r)) return r
								throw new TypeError(
									'@@toPrimitive must return a primitive value.'
								)
							}
							return String(t)
						})(t)
						return 'symbol' == zr(e) ? e : e + ''
					}
					function qr() {
						try {
							var t = !Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							)
						} catch (t) {}
						return (qr = function () {
							return !!t
						})()
					}
					function Ur() {
						return (
							(Ur =
								'undefined' != typeof Reflect && Reflect.get
									? Reflect.get.bind()
									: function (t, e, r) {
											var n = (function (t, e) {
												for (
													;
													!Object.prototype.hasOwnProperty.call(t, e) &&
													null !== (t = Gr(t));

												);
												return t
											})(t, e)
											if (n) {
												var i = Object.getOwnPropertyDescriptor(n, e)
												return i.get
													? i.get.call(arguments.length < 3 ? t : r)
													: i.value
											}
										}),
							Ur.apply(this, arguments)
						)
					}
					function Gr(t) {
						return (
							(Gr = Object.setPrototypeOf
								? Object.getPrototypeOf.bind()
								: function (t) {
										return t.__proto__ || Object.getPrototypeOf(t)
									}),
							Gr(t)
						)
					}
					function $r(t, e) {
						return (
							($r = Object.setPrototypeOf
								? Object.setPrototypeOf.bind()
								: function (t, e) {
										return (t.__proto__ = e), t
									}),
							$r(t, e)
						)
					}
					var Jr = (function (t) {
						function e(t, r, n) {
							var i
							return (
								(function (t, e) {
									if (!(t instanceof e))
										throw new TypeError('Cannot call a class as a function')
								})(this, e),
								((i = (function (t, e, r) {
									return (
										(e = Gr(e)),
										(function (t, e) {
											if (e && ('object' === zr(e) || 'function' == typeof e))
												return e
											if (void 0 !== e)
												throw new TypeError(
													'Derived constructors may only return object or undefined'
												)
											return (function (t) {
												if (void 0 === t)
													throw new ReferenceError(
														"this hasn't been initialised - super() hasn't been called"
													)
												return t
											})(t)
										})(
											t,
											qr()
												? Reflect.construct(e, r || [], Gr(t).constructor)
												: e.apply(t, r)
										)
									)
								})(this, e, [t, r])).currentDepth = n),
								i
							)
						}
						return (
							(function (t, e) {
								if ('function' != typeof e && null !== e)
									throw new TypeError(
										'Super expression must either be null or a function'
									)
								;(t.prototype = Object.create(e && e.prototype, {
									constructor: { value: t, writable: !0, configurable: !0 }
								})),
									Object.defineProperty(t, 'prototype', { writable: !1 }),
									e && $r(t, e)
							})(e, t),
							(r = e),
							(n = [
								{
									key: 'getChildEditors',
									value: function () {
										return this.editors
									}
								},
								{
									key: 'register',
									value: function () {
										Ur(Gr(e.prototype), 'register', this).call(this),
											this.editors &&
												Object.values(this.editors).forEach(function (t) {
													return t.register()
												})
									}
								},
								{
									key: 'unregister',
									value: function () {
										Ur(Gr(e.prototype), 'unregister', this).call(this),
											this.editors &&
												Object.values(this.editors).forEach(function (t) {
													return t.unregister()
												})
									}
								},
								{
									key: 'getNumColumns',
									value: function () {
										return Math.max(Math.min(12, this.maxwidth), 3)
									}
								},
								{
									key: 'enable',
									value: function () {
										this.always_disabled ||
											(this.editjson_control &&
												(this.editjson_control.disabled = !1),
											this.addproperty_button &&
												(this.addproperty_button.disabled = !1),
											Ur(Gr(e.prototype), 'enable', this).call(this),
											this.editors &&
												Object.values(this.editors).forEach(function (t) {
													;(t.isActive() || t.isUiOnly) && t.enable(),
														t.optInCheckbox && (t.optInCheckbox.disabled = !1)
												}))
									}
								},
								{
									key: 'disable',
									value: function (t) {
										t && (this.always_disabled = !0),
											this.editjson_control &&
												(this.editjson_control.disabled = !0),
											this.addproperty_button &&
												(this.addproperty_button.disabled = !0),
											this.hideEditJSON(),
											Ur(Gr(e.prototype), 'disable', this).call(this),
											this.editors &&
												Object.values(this.editors).forEach(function (e) {
													;(e.isActive() || e.isUiOnly) && e.disable(t),
														(e.optInCheckbox.disabled = !0)
												})
									}
								},
								{
									key: 'layoutEditors',
									value: function () {
										var t,
											e,
											r = this
										if (this.row_container) {
											var n
											;(this.property_order = Object.keys(this.editors)),
												(this.property_order = this.property_order.sort(
													function (t, e) {
														var n = r.editors[t].schema.propertyOrder,
															i = r.editors[e].schema.propertyOrder
														return (
															'number' != typeof n && (n = 1e3),
															'number' != typeof i && (i = 1e3),
															n - i
														)
													}
												))
											var i,
												o = 'categories' === this.format,
												a = [],
												s = null,
												l = null
											if ('grid-strict' === this.format) {
												var u = 0
												if (
													((i = []),
													this.property_order.forEach(function (t) {
														var e = r.editors[t]
														if (!e.property_removed) {
															var n = e.options.hidden
																	? 0
																	: e.options.grid_columns || e.getNumColumns(),
																o = e.options.hidden
																	? 0
																	: e.options.grid_offset || 0,
																s =
																	!e.options.hidden &&
																	(e.options.grid_break || !1),
																l = {
																	key: t,
																	width: n,
																	offset: o,
																	height: e.options.hidden
																		? 0
																		: e.container.offsetHeight
																}
															i.push(l), (a[u] = i), s && (u++, (i = []))
														}
													}),
													this.layout === JSON.stringify(a))
												)
													return !1
												for (
													this.layout = JSON.stringify(a),
														n = document.createElement('div'),
														t = 0;
													t < a.length;
													t++
												)
													for (
														i = this.theme.getGridRow(),
															n.appendChild(i),
															e = 0;
														e < a[t].length;
														e++
													)
														(s = a[t][e].key),
															(l = this.editors[s]).options.hidden
																? (l.container.style.display = 'none')
																: this.theme.setGridColumnSize(
																		l.container,
																		a[t][e].width,
																		a[t][e].offset
																	),
															i.appendChild(l.container)
											} else if ('grid' === this.format) {
												for (
													this.property_order.forEach(function (t) {
														var e = r.editors[t]
														if (!e.property_removed) {
															for (
																var n = !1,
																	i = e.options.hidden
																		? 0
																		: e.options.grid_columns ||
																			e.getNumColumns(),
																	o = e.options.hidden
																		? 0
																		: e.container.offsetHeight,
																	s = 0;
																s < a.length;
																s++
															)
																a[s].width + i <= 12 &&
																	(!o ||
																		(0.5 * a[s].minh < o &&
																			2 * a[s].maxh > o)) &&
																	(n = s)
															!1 === n &&
																(a.push({
																	width: 0,
																	minh: 999999,
																	maxh: 0,
																	editors: []
																}),
																(n = a.length - 1)),
																a[n].editors.push({
																	key: t,
																	width: i,
																	height: o
																}),
																(a[n].width += i),
																(a[n].minh = Math.min(a[n].minh, o)),
																(a[n].maxh = Math.max(a[n].maxh, o))
														}
													}),
														t = 0;
													t < a.length;
													t++
												)
													if (a[t].width < 12) {
														var h = !1,
															p = 0
														for (e = 0; e < a[t].editors.length; e++)
															(!1 === h ||
																a[t].editors[e].width >
																	a[t].editors[h].width) &&
																(h = e),
																(a[t].editors[e].width *= 12 / a[t].width),
																(a[t].editors[e].width = Math.floor(
																	a[t].editors[e].width
																)),
																(p += a[t].editors[e].width)
														p < 12 && (a[t].editors[h].width += 12 - p),
															(a[t].width = 12)
													}
												if (this.layout === JSON.stringify(a)) return !1
												for (
													this.layout = JSON.stringify(a),
														n = document.createElement('div'),
														t = 0;
													t < a.length;
													t++
												)
													for (
														i = this.theme.getGridRow(),
															n.appendChild(i),
															e = 0;
														e < a[t].editors.length;
														e++
													)
														(s = a[t].editors[e].key),
															(l = this.editors[s]).options.hidden
																? (l.container.style.display = 'none')
																: this.theme.setGridColumnSize(
																		l.container,
																		a[t].editors[e].width
																	),
															i.appendChild(l.container)
											} else {
												if (((n = document.createElement('div')), o)) {
													var d = document.createElement('div'),
														f = this.theme.getTopTabHolder(
															this.translateProperty(this.schema.title)
														),
														y = this.theme.getTopTabContentHolder(f)
													for (
														this.property_order.forEach(function (t) {
															var e = r.editors[t]
															if (!e.property_removed) {
																var n = r.theme.getTabContent(),
																	i =
																		e.schema &&
																		('object' === e.schema.type ||
																			'array' === e.schema.type)
																n.isObjOrArray = i
																var o = r.theme.getGridRow()
																e.tab ||
																	(void 0 === r.basicPane
																		? r.addRow(e, f, n)
																		: r.addRow(e, f, r.basicPane)),
																	(n.id = r.getValidId(e.tab_text.textContent)),
																	i
																		? (n.appendChild(o),
																			y.appendChild(n),
																			r.theme.addTopTab(f, e.tab))
																		: (d.appendChild(o),
																			y.childElementCount > 0
																				? y.firstChild.isObjOrArray &&
																					(n.appendChild(d),
																					y.insertBefore(n, y.firstChild),
																					r.theme.insertBasicTopTab(e.tab, f),
																					(e.basicPane = n))
																				: (n.appendChild(d),
																					y.appendChild(n),
																					r.theme.addTopTab(f, e.tab),
																					(e.basicPane = n))),
																	e.options.hidden
																		? (e.container.style.display = 'none')
																		: r.theme.setGridColumnSize(
																				e.container,
																				12
																			),
																	o.appendChild(e.container),
																	(e.rowPane = n)
															}
														});
														this.tabPanesContainer.firstChild;

													)
														this.tabPanesContainer.removeChild(
															this.tabPanesContainer.firstChild
														)
													var m = this.tabs_holder.parentNode
													m.removeChild(m.firstChild),
														m.appendChild(f),
														(this.tabPanesContainer = y),
														(this.tabs_holder = f)
													var v = this.theme.getFirstTab(this.tabs_holder)
													return void (v && c(v, 'click'))
												}
												this.property_order.forEach(function (t) {
													var e = r.editors[t]
													e.property_removed ||
														((i = r.theme.getGridRow()),
														n.appendChild(i),
														e.options.hidden
															? (e.container.style.display = 'none')
															: r.theme.setGridColumnSize(e.container, 12),
														i.appendChild(e.container))
												})
											}
											for (; this.row_container.firstChild; )
												this.row_container.removeChild(
													this.row_container.firstChild
												)
											this.row_container.appendChild(n)
										}
									}
								},
								{
									key: 'getPropertySchema',
									value: function (t) {
										var e = this,
											r = this.schema.properties[t] || {}
										r = l({}, r)
										var n = !!this.schema.properties[t]
										return (
											this.schema.patternProperties &&
												Object.keys(this.schema.patternProperties).forEach(
													function (i) {
														new RegExp(i).test(t) &&
															((r.allOf = r.allOf || []),
															r.allOf.push(e.schema.patternProperties[i]),
															(n = !0))
													}
												),
											!n &&
												this.schema.additionalProperties &&
												'object' === zr(this.schema.additionalProperties) &&
												(r = l({}, this.schema.additionalProperties)),
											r
										)
									}
								},
								{
									key: 'preBuild',
									value: function () {
										var t = this
										if (
											(Ur(Gr(e.prototype), 'preBuild', this).call(this),
											(this.editors = {}),
											(this.cached_editors = {}),
											(this.format =
												this.options.layout ||
												this.options.object_layout ||
												this.schema.format ||
												this.jsoneditor.options.object_layout ||
												'normal'),
											(this.schema.properties = this.schema.properties || {}),
											(this.minwidth = 0),
											(this.maxwidth = 0),
											this.options.table_row)
										)
											Object.entries(this.schema.properties).forEach(
												function (e) {
													var r = Vr(e, 2),
														n = r[0],
														i = r[1],
														o = t.jsoneditor.getEditorClass(i)
													;(t.editors[n] = t.jsoneditor.createEditor(
														o,
														{
															jsoneditor: t.jsoneditor,
															schema: i,
															path: ''.concat(t.path, '.').concat(n),
															parent: t,
															compact: !0,
															required: !0
														},
														t.currentDepth + 1
													)),
														t.editors[n].preBuild()
													var a = t.editors[n].options.hidden
														? 0
														: t.editors[n].options.grid_columns ||
															t.editors[n].getNumColumns()
													;(t.minwidth += a), (t.maxwidth += a)
												}
											),
												(this.no_link_holder = !0)
										else {
											if (this.options.table)
												throw new Error('Not supported yet')
											this.schema.defaultProperties ||
												(this.jsoneditor.options.display_required_only ||
												this.options.display_required_only
													? (this.schema.defaultProperties = Object.keys(
															this.schema.properties
														).filter(function (e) {
															return t.isRequiredObject({
																key: e,
																schema: t.schema.properties[e]
															})
														}))
													: (this.schema.defaultProperties = Object.keys(
															this.schema.properties
														))),
												(this.maxwidth += 1),
												Array.isArray(this.schema.defaultProperties) &&
													this.schema.defaultProperties.forEach(function (e) {
														t.addObjectProperty(e, !0),
															t.editors[e] &&
																((t.minwidth = Math.max(
																	t.minwidth,
																	t.editors[e].options.grid_columns ||
																		t.editors[e].getNumColumns()
																)),
																(t.maxwidth +=
																	t.editors[e].options.grid_columns ||
																	t.editors[e].getNumColumns()))
													})
										}
										;(this.property_order = Object.keys(this.editors)),
											(this.property_order = this.property_order.sort(
												function (e, r) {
													var n = t.editors[e].schema.propertyOrder,
														i = t.editors[r].schema.propertyOrder
													return (
														'number' != typeof n && (n = 1e3),
														'number' != typeof i && (i = 1e3),
														n - i
													)
												}
											))
									}
								},
								{
									key: 'addTab',
									value: function (t) {
										var e = this,
											r =
												this.rows[t].schema &&
												('object' === this.rows[t].schema.type ||
													'array' === this.rows[t].schema.type)
										this.tabs_holder &&
											((this.rows[t].tab_text = document.createElement('span')),
											(this.rows[t].tab_text.textContent = r
												? this.rows[t].getHeaderText()
												: void 0 === this.schema.basicCategoryTitle
													? 'Basic'
													: this.schema.basicCategoryTitle),
											(this.rows[t].tab = this.theme.getTopTab(
												this.rows[t].tab_text,
												this.getValidId(this.rows[t].tab_text.textContent)
											)),
											this.rows[t].tab.addEventListener('click', function (r) {
												;(e.active_tab = e.rows[t].tab),
													e.refreshTabs(),
													r.preventDefault(),
													r.stopPropagation()
											}))
									}
								},
								{
									key: 'addRow',
									value: function (t, e, r) {
										var n = this.rows.length,
											i =
												'object' === t.schema.type || 'array' === t.schema.type
										;(this.rows[n] = t),
											(this.rows[n].rowPane = r),
											i
												? (this.addTab(n),
													this.theme.addTopTab(e, this.rows[n].tab))
												: void 0 === this.basicTab
													? (this.addTab(n),
														(this.basicTab = n),
														(this.basicPane = r),
														this.theme.addTopTab(e, this.rows[n].tab))
													: ((this.rows[n].tab = this.rows[this.basicTab].tab),
														(this.rows[n].tab_text =
															this.rows[this.basicTab].tab_text),
														(this.rows[n].rowPane =
															this.rows[this.basicTab].rowPane))
									}
								},
								{
									key: 'refreshTabs',
									value: function (t) {
										var e = this,
											r = void 0 !== this.basicTab,
											n = !1
										this.rows.forEach(function (i) {
											i.tab &&
												i.rowPane &&
												i.rowPane.parentNode &&
												((r && i.tab === e.rows[e.basicTab].tab && n) ||
													(t
														? (i.tab_text.textContent = i.getHeaderText())
														: (r &&
																i.tab === e.rows[e.basicTab].tab &&
																(n = !0),
															i.tab === e.active_tab
																? e.theme.markTabActive(i)
																: e.theme.markTabInactive(i))))
										})
									}
								},
								{
									key: 'build',
									value: function () {
										var t = this,
											e = 'categories' === this.format
										if (
											((this.rows = []),
											(this.active_tab = null),
											this.options.table_row)
										)
											(this.editor_holder = this.container),
												Object.entries(this.editors).forEach(function (e) {
													var r = Vr(e, 2),
														n = r[0],
														i = r[1],
														o = t.theme.getTableCell()
													t.editor_holder.appendChild(o),
														i.setContainer(o),
														i.build(),
														i.postBuild(),
														i.setOptInCheckbox(i.header),
														i.setValue(i.getDefault(), !0),
														t.editors[n].options.hidden &&
															(o.style.display = 'none'),
														t.editors[n].options.input_width &&
															(o.style.width = t.editors[n].options.input_width)
												})
										else {
											if (this.options.table)
												throw new Error('Not supported yet')
											;(this.header = ''),
												this.options.compact ||
													((this.header = document.createElement('span')),
													(this.header.textContent = this.getTitle())),
												(this.title = this.theme.getHeader(
													this.header,
													this.getPathDepth()
												)),
												this.title.classList.add('je-object__title'),
												(this.controls = this.theme.getButtonHolder()),
												this.controls.classList.add('je-object__controls'),
												this.container.appendChild(this.title),
												this.container.appendChild(this.controls),
												this.container.classList.add('je-object__container'),
												(this.editjson_holder = this.theme.getModal()),
												(this.editjson_textarea_label =
													this.theme.getHiddenLabel(
														this.translate('button_edit_json')
													)),
												this.editjson_textarea_label.setAttribute(
													'for',
													this.path + '-edit-json-textarea'
												),
												(this.editjson_textarea =
													this.theme.getTextareaInput()),
												this.editjson_textarea.setAttribute(
													'id',
													this.path + '-edit-json-textarea'
												),
												this.editjson_textarea.setAttribute(
													'aria-labelledby',
													this.path + '-edit-json-textarea'
												),
												this.editjson_textarea.classList.add(
													'je-edit-json--textarea'
												),
												(this.editjson_save = this.getButton(
													'button_save',
													'save',
													'button_save'
												)),
												this.editjson_save.classList.add(
													'json-editor-btntype-save'
												),
												this.editjson_save.addEventListener(
													'click',
													function (e) {
														e.preventDefault(),
															e.stopPropagation(),
															t.saveJSON()
													}
												),
												(this.editjson_copy = this.getButton(
													'button_copy',
													'copy',
													'button_copy'
												)),
												this.editjson_copy.classList.add(
													'json-editor-btntype-copy'
												),
												this.editjson_copy.addEventListener(
													'click',
													function (e) {
														e.preventDefault(),
															e.stopPropagation(),
															t.copyJSON()
													}
												),
												(this.editjson_cancel = this.getButton(
													'button_cancel',
													'cancel',
													'button_cancel'
												)),
												this.editjson_cancel.classList.add(
													'json-editor-btntype-cancel'
												),
												this.editjson_cancel.addEventListener(
													'click',
													function (e) {
														e.preventDefault(),
															e.stopPropagation(),
															t.hideEditJSON()
													}
												),
												this.editjson_holder.appendChild(
													this.editjson_textarea_label
												),
												this.editjson_holder.appendChild(
													this.editjson_textarea
												),
												this.editjson_holder.appendChild(this.editjson_save),
												this.editjson_holder.appendChild(this.editjson_copy),
												this.editjson_holder.appendChild(this.editjson_cancel),
												(this.addproperty_holder = this.theme.getModal()),
												(this.addproperty_list = document.createElement('div')),
												this.addproperty_list.classList.add(
													'property-selector'
												),
												(this.addproperty_add = this.getButton(
													'button_add',
													'add',
													'button_add'
												)),
												this.addproperty_add.classList.add(
													'json-editor-btntype-add'
												),
												(this.addproperty_input =
													this.theme.getFormInputField('text')),
												this.addproperty_input.setAttribute(
													'placeholder',
													'Property name...'
												),
												(this.addproperty_input_label =
													this.theme.getHiddenLabel(
														this.translate('button_properties')
													)),
												this.addproperty_input_label.setAttribute(
													'for',
													this.path + '-property-selector'
												),
												this.addproperty_input.classList.add(
													'property-selector-input'
												),
												this.addproperty_input.setAttribute(
													'id',
													this.path + '-property-selector'
												),
												this.addproperty_input.setAttribute(
													'aria-labelledby',
													this.path + '-property-selector'
												),
												this.addproperty_add.addEventListener(
													'click',
													function (e) {
														if (
															(e.preventDefault(),
															e.stopPropagation(),
															t.addproperty_input.value)
														) {
															if (t.editors[t.addproperty_input.value])
																return void window.alert(
																	'there is already a property with that name'
																)
															t.addObjectProperty(t.addproperty_input.value),
																t.editors[t.addproperty_input.value] &&
																	t.editors[t.addproperty_input.value].disable()
															var r = t.editors[t.addproperty_input.value].key,
																n = t.editors[t.addproperty_input.value].type,
																i = t.editors[t.addproperty_input.value].path
															t.onChange(!0, !1, {
																event: 'add',
																data: { key: r, type: n, path: i }
															})
														}
													}
												),
												this.addproperty_input.addEventListener(
													'input',
													function (e) {
														e.target.previousSibling.previousSibling.childNodes.forEach(
															function (r) {
																var n = r.innerText,
																	i = e.target.value
																t.options.case_sensitive_property_search ||
																	t.jsoneditor.options
																		.case_sensitive_property_search ||
																	((n = n.toLowerCase()),
																	(i = i.toLowerCase())),
																	n.includes(i)
																		? (r.style.display = '')
																		: (r.style.display = 'none')
															}
														)
													}
												),
												this.addproperty_holder.appendChild(
													this.addproperty_list
												),
												this.addproperty_holder.appendChild(
													this.addproperty_input_label
												),
												this.addproperty_holder.appendChild(
													this.addproperty_input
												),
												this.addproperty_holder.appendChild(
													this.addproperty_add
												)
											var r = document.createElement('div')
											;(r.style.clear = 'both'),
												this.addproperty_holder.appendChild(r),
												(this.onOutsideModalClickListener =
													this.onOutsideModalClick.bind(this)),
												document.addEventListener(
													'click',
													this.onOutsideModalClickListener,
													!0
												),
												this.schema.description &&
													((this.description = this.theme.getDescription(
														this.translateProperty(this.schema.description)
													)),
													this.container.appendChild(this.description)),
												(this.error_holder = document.createElement('div')),
												this.container.appendChild(this.error_holder),
												(this.editor_holder = this.theme.getIndentedPanel()),
												this.container.appendChild(this.editor_holder),
												(this.row_container = this.theme.getGridContainer()),
												e
													? ((this.tabs_holder = this.theme.getTopTabHolder(
															this.getValidId(
																this.translateProperty(this.schema.title)
															)
														)),
														(this.tabPanesContainer =
															this.theme.getTopTabContentHolder(
																this.tabs_holder
															)),
														this.editor_holder.appendChild(this.tabs_holder))
													: ((this.tabs_holder = this.theme.getTabHolder(
															this.getValidId(
																this.translateProperty(this.schema.title)
															)
														)),
														(this.tabPanesContainer =
															this.theme.getTabContentHolder(this.tabs_holder)),
														this.editor_holder.appendChild(this.row_container)),
												Object.values(this.editors).forEach(function (r) {
													var n = t.theme.getTabContent(),
														i = t.theme.getGridColumn(),
														o = !(
															!r.schema ||
															('object' !== r.schema.type &&
																'array' !== r.schema.type)
														)
													if (((n.isObjOrArray = o), e)) {
														if (o) {
															var a = t.theme.getGridContainer()
															a.appendChild(i),
																n.appendChild(a),
																t.tabPanesContainer.appendChild(n),
																(t.row_container = a)
														} else
															void 0 === t.row_container_basic &&
																((t.row_container_basic =
																	t.theme.getGridContainer()),
																n.appendChild(t.row_container_basic),
																0 === t.tabPanesContainer.childElementCount
																	? t.tabPanesContainer.appendChild(n)
																	: t.tabPanesContainer.insertBefore(
																			n,
																			t.tabPanesContainer.childNodes[1]
																		)),
																t.row_container_basic.appendChild(i)
														t.addRow(r, t.tabs_holder, n),
															(n.id = t.getValidId(r.schema.title))
													} else t.row_container.appendChild(i)
													r.setContainer(i),
														r.build(),
														r.postBuild(),
														r.setOptInCheckbox(r.header)
												}),
												this.rows[0] && c(this.rows[0].tab, 'click'),
												(this.collapsed = !1),
												(this.collapse_control = this.getButton(
													'',
													'collapse',
													'button_collapse'
												)),
												this.collapse_control.classList.add(
													'json-editor-btntype-toggle'
												),
												this.title.insertBefore(
													this.collapse_control,
													this.title.childNodes[0]
												),
												this.collapse_control.addEventListener(
													'click',
													function (e) {
														e.preventDefault(),
															e.stopPropagation(),
															t.collapsed
																? ((t.editor_holder.style.display = ''),
																	(t.collapsed = !1),
																	t.setButtonText(
																		t.collapse_control,
																		'',
																		'collapse',
																		'button_collapse'
																	))
																: ((t.editor_holder.style.display = 'none'),
																	(t.collapsed = !0),
																	t.setButtonText(
																		t.collapse_control,
																		'',
																		'expand',
																		'button_expand'
																	))
													}
												),
												this.options.collapsed &&
													c(this.collapse_control, 'click'),
												this.schema.options &&
												void 0 !== this.schema.options.disable_collapse
													? this.schema.options.disable_collapse &&
														(this.collapse_control.style.display = 'none')
													: this.jsoneditor.options.disable_collapse &&
														(this.collapse_control.style.display = 'none'),
												(this.editjson_control = this.getButton(
													'JSON',
													'edit',
													'button_edit_json'
												)),
												this.editjson_control.classList.add(
													'json-editor-btntype-editjson'
												),
												this.editjson_control.addEventListener(
													'click',
													function (e) {
														e.preventDefault(),
															e.stopPropagation(),
															t.toggleEditJSON()
													}
												),
												this.controls.appendChild(this.editjson_control),
												this.controls.insertBefore(
													this.editjson_holder,
													this.controls.childNodes[0]
												),
												this.schema.options &&
												void 0 !== this.schema.options.disable_edit_json
													? this.schema.options.disable_edit_json &&
														(this.editjson_control.style.display = 'none')
													: this.jsoneditor.options.disable_edit_json &&
														(this.editjson_control.style.display = 'none'),
												(this.addproperty_button = this.getButton(
													'properties',
													'edit_properties',
													'button_object_properties'
												)),
												this.addproperty_button.classList.add(
													'json-editor-btntype-properties'
												),
												this.addproperty_button.addEventListener(
													'click',
													function (e) {
														e.preventDefault(),
															e.stopPropagation(),
															t.toggleAddProperty()
													}
												),
												this.controls.appendChild(this.addproperty_button),
												this.controls.insertBefore(
													this.addproperty_holder,
													this.controls.childNodes[1]
												),
												this.refreshAddProperties(),
												this.deactivateNonRequiredProperties(!1)
										}
										this.options.table_row
											? ((this.editor_holder = this.container),
												this.property_order.forEach(function (e) {
													t.editor_holder.appendChild(t.editors[e].container)
												}))
											: (this.layoutEditors(), this.layoutEditors()),
											(this.schema.readOnly || this.schema.readonly) &&
												this.disable()
									}
								},
								{
									key: 'deactivateNonRequiredProperties',
									value: function (t) {
										var e = this,
											r = this.jsoneditor.options.show_opt_in,
											n = void 0 !== this.options.show_opt_in,
											i = n && !0 === this.options.show_opt_in,
											o = n && !1 === this.options.show_opt_in
										;(i || (!o && r) || (!n && r)) &&
											Object.entries(this.editors).forEach(function (r) {
												var n = Vr(r, 2),
													i = n[0],
													o = n[1]
												e.isRequiredObject(o) || e.editors[i].deactivate(),
													t &&
														'function' ==
															typeof e.editors[i]
																.deactivateNonRequiredProperties &&
														e.editors[i].deactivateNonRequiredProperties(t)
											})
									}
								},
								{
									key: 'showEditJSON',
									value: function () {
										this.editjson_holder &&
											(this.hideAddProperty(),
											(this.editjson_holder.style.left = ''.concat(
												this.editjson_control.offsetLeft,
												'px'
											)),
											(this.editjson_holder.style.top = ''.concat(
												this.editjson_control.offsetTop +
													this.editjson_control.offsetHeight,
												'px'
											)),
											(this.editjson_textarea.value = JSON.stringify(
												this.getValue(),
												null,
												2
											)),
											this.disable(),
											(this.editjson_holder.style.display = ''),
											(this.editjson_control.disabled = !1),
											(this.editing_json = !0))
									}
								},
								{
									key: 'hideEditJSON',
									value: function () {
										this.editjson_holder &&
											this.editing_json &&
											((this.editjson_holder.style.display = 'none'),
											this.enable(),
											(this.editing_json = !1))
									}
								},
								{
									key: 'copyJSON',
									value: function () {
										this.editjson_holder &&
											navigator.clipboard
												.writeText(this.editjson_textarea.value)
												.catch(function (t) {
													return window.alert(t)
												})
									}
								},
								{
									key: 'saveJSON',
									value: function () {
										if (this.editjson_holder)
											try {
												var t = JSON.parse(this.editjson_textarea.value)
												this.setValue(t), this.hideEditJSON(), this.onChange(!0)
											} catch (t) {
												throw (window.alert('invalid JSON'), t)
											}
									}
								},
								{
									key: 'toggleEditJSON',
									value: function () {
										this.editing_json
											? this.hideEditJSON()
											: this.showEditJSON()
									}
								},
								{
									key: 'insertPropertyControlUsingPropertyOrder',
									value: function (t, e, r) {
										var n
										this.schema.properties[t] &&
											(n = this.schema.properties[t].propertyOrder),
											'number' != typeof n && (n = 1e3),
											(e.propertyOrder = n)
										for (var i = 0; i < r.childNodes.length; i++) {
											var o = r.childNodes[i]
											if (e.propertyOrder < o.propertyOrder) {
												this.addproperty_list.insertBefore(e, o), (e = null)
												break
											}
										}
										e && this.addproperty_list.appendChild(e)
									}
								},
								{
									key: 'addPropertyCheckbox',
									value: function (t) {
										var e,
											r = this,
											n = this.theme.getCheckbox()
										e =
											this.schema.properties[t] &&
											this.schema.properties[t].title
												? this.schema.properties[t].title
												: t
										var i = this.theme.getCheckboxLabel(e),
											o = this.theme.getFormControl(
												i,
												n,
												null,
												null,
												this.path + '-' + t
											)
										return (
											(o.style.paddingBottom =
												o.style.marginBottom =
												o.style.paddingTop =
												o.style.marginTop =
													0),
											(o.style.height = 'auto'),
											this.insertPropertyControlUsingPropertyOrder(
												t,
												o,
												this.addproperty_list
											),
											(n.checked = t in this.editors),
											n.addEventListener('change', function () {
												n.checked
													? r.addObjectProperty(t)
													: r.removeObjectProperty(t),
													r.onChange(!0)
											}),
											(this.addproperty_checkboxes[t] = n),
											n
										)
									}
								},
								{
									key: 'showAddProperty',
									value: function () {
										this.addproperty_holder &&
											(this.hideEditJSON(),
											(this.addproperty_holder.style.left = ''.concat(
												this.addproperty_button.offsetLeft,
												'px'
											)),
											(this.addproperty_holder.style.top = ''.concat(
												this.addproperty_button.offsetTop +
													this.addproperty_button.offsetHeight,
												'px'
											)),
											this.disable(),
											(this.adding_property = !0),
											(this.addproperty_button.disabled = !1),
											(this.addproperty_holder.style.display = ''),
											this.refreshAddProperties())
									}
								},
								{
									key: 'hideAddProperty',
									value: function () {
										this.addproperty_holder &&
											this.adding_property &&
											((this.addproperty_holder.style.display = 'none'),
											this.enable(),
											(this.adding_property = !1))
									}
								},
								{
									key: 'toggleAddProperty',
									value: function () {
										this.adding_property
											? this.hideAddProperty()
											: this.showAddProperty()
									}
								},
								{
									key: 'removeObjectProperty',
									value: function (t) {
										if (this.editors[t]) {
											var e
											if (
												null !== (e = this.editors[t].schema) &&
												void 0 !== e &&
												null !== (e = e.options) &&
												void 0 !== e &&
												e.dependencies
											)
												return
											this.editors[t].unregister(),
												delete this.editors[t],
												this.refreshValue(),
												this.layoutEditors()
										}
									}
								},
								{
									key: 'getSchemaOnMaxDepth',
									value: function (t) {
										return Object.keys(t).reduce(function (e, r) {
											switch (r) {
												case '$ref':
													return e
												case 'properties':
												case 'items':
													return Dr(Dr({}, e), {}, Fr({}, r, {}))
												case 'additionalProperties':
												case 'propertyNames':
													return Dr(Dr({}, e), {}, Fr({}, r, !0))
												default:
													return Dr(Dr({}, e), {}, Fr({}, r, t[r]))
											}
										}, {})
									}
								},
								{
									key: 'addObjectProperty',
									value: function (t, e) {
										if (!this.editors[t]) {
											if (this.cached_editors[t]) {
												if (((this.editors[t] = this.cached_editors[t]), e))
													return
												this.editors[t].register()
											} else {
												if (
													!(
														this.canHaveAdditionalProperties() ||
														(this.schema.properties &&
															this.schema.properties[t]) ||
														(this.schema.patternProperties &&
															Object.keys(this.schema.patternProperties).find(
																function (e) {
																	return new RegExp(e).test(t)
																}
															))
													)
												)
													return
												var r = this.getPropertySchema(t)
												'number' != typeof r.propertyOrder &&
													(r.propertyOrder =
														Object.keys(this.editors).length + 1e3)
												var n = this.jsoneditor.getEditorClass(r),
													i = this.jsoneditor.options.max_depth
												if (
													((this.editors[t] = this.jsoneditor.createEditor(
														n,
														{
															jsoneditor: this.jsoneditor,
															schema:
																i && this.currentDepth >= i
																	? this.getSchemaOnMaxDepth(r)
																	: r,
															path: ''.concat(this.path, '.').concat(t),
															parent: this
														},
														this.currentDepth + 1
													)),
													this.editors[t].preBuild(),
													!e)
												) {
													var o = this.theme.getChildEditorHolder()
													this.editor_holder.appendChild(o),
														this.editors[t].setContainer(o),
														this.editors[t].build(),
														this.editors[t].postBuild(),
														this.editors[t].setOptInCheckbox(n.header),
														this.editors[t].activate()
												}
												this.cached_editors[t] = this.editors[t]
											}
											e || (this.refreshValue(), this.layoutEditors())
										}
									}
								},
								{
									key: 'onOutsideModalClick',
									value: function (t) {
										var e = t.path || (t.composedPath && t.composedPath())
										this.addproperty_holder &&
											!this.addproperty_holder.contains(e[0]) &&
											this.adding_property &&
											(t.preventDefault(),
											t.stopPropagation(),
											this.toggleAddProperty())
									}
								},
								{
									key: 'onChildEditorChange',
									value: function (t, r) {
										this.refreshValue(),
											Ur(Gr(e.prototype), 'onChildEditorChange', this).call(
												this,
												t,
												r
											)
									}
								},
								{
									key: 'canHaveAdditionalProperties',
									value: function () {
										return 'boolean' == typeof this.schema.additionalProperties
											? this.schema.additionalProperties
											: ('object' === zr(this.schema.additionalProperties) &&
													null !== this.schema.additionalProperties) ||
													('boolean' ==
													typeof this.options.no_additional_properties
														? !this.options.no_additional_properties
														: 'boolean' !=
																typeof this.jsoneditor.options
																	.no_additional_properties ||
															!this.jsoneditor.options.no_additional_properties)
									}
								},
								{
									key: 'destroy',
									value: function () {
										Object.values(this.cached_editors).forEach(function (t) {
											return t.destroy()
										}),
											this.editor_holder && (this.editor_holder.innerHTML = ''),
											this.title &&
												this.title.parentNode &&
												this.title.parentNode.removeChild(this.title),
											this.error_holder &&
												this.error_holder.parentNode &&
												this.error_holder.parentNode.removeChild(
													this.error_holder
												),
											(this.editors = null),
											(this.cached_editors = null),
											this.editor_holder &&
												this.editor_holder.parentNode &&
												this.editor_holder.parentNode.removeChild(
													this.editor_holder
												),
											(this.editor_holder = null),
											document.removeEventListener(
												'click',
												this.onOutsideModalClickListener,
												!0
											),
											Ur(Gr(e.prototype), 'destroy', this).call(this)
									}
								},
								{
									key: 'getValue',
									value: function () {
										if (this.dependenciesFulfilled) {
											var t = Ur(Gr(e.prototype), 'getValue', this).call(this)
											return (
												t &&
													(this.jsoneditor.options.remove_empty_properties ||
														this.options.remove_empty_properties) &&
													Object.keys(t).forEach(function (e) {
														var r
														;(void 0 === (r = t[e]) ||
															'' === r ||
															(r === Object(r) &&
																0 === Object.keys(r).length &&
																r.constructor === Object)) &&
															delete t[e]
													}),
												t &&
													(this.jsoneditor.options.remove_false_properties ||
														this.options.remove_false_properties) &&
													Object.keys(t).forEach(function (e) {
														!1 === t[e] && delete t[e]
													}),
												t
											)
										}
									}
								},
								{
									key: 'refreshValue',
									value: function () {
										var t = this
										;(this.value = {}),
											this.editors &&
												(Object.keys(this.editors).forEach(function (e) {
													t.editors[e].isActive() &&
														(t.editors[e].refreshValue(),
														(t.value[e] = t.editors[e].getValue()))
												}),
												Object.keys(this.editors).forEach(function (e) {
													t.editors[e].isActive() &&
														t.activateDependentRequired(t.editors[e].key)
												}),
												this.adding_property && this.refreshAddProperties())
									}
								},
								{
									key: 'activateDependentRequired',
									value: function (t) {
										var e = this
										this.getDependentRequired(t).forEach(function (t) {
											var r
											Object.entries(e.cached_editors).forEach(function (e) {
												var n = Vr(e, 2),
													i = (n[0], n[1])
												i.key === t && (r = i)
											}),
												r && !r.isActive() && r.activate()
										})
									}
								},
								{
									key: 'getDependentRequired',
									value: function (t) {
										return this.schema.dependentRequired &&
											h(this.schema.dependentRequired, t)
											? this.schema.dependentRequired[t]
											: []
									}
								},
								{
									key: 'refreshAddProperties',
									value: function () {
										var t = this
										if (
											this.options.disable_properties ||
											(!1 !== this.options.disable_properties &&
												this.jsoneditor.options.disable_properties)
										)
											this.addproperty_button.style.display = 'none'
										else {
											var e,
												r = 0,
												n = !1
											Object.keys(this.editors).forEach(function (t) {
												return r++
											}),
												(e =
													this.canHaveAdditionalProperties() &&
													!(
														void 0 !== this.schema.maxProperties &&
														r >= this.schema.maxProperties
													)),
												this.addproperty_checkboxes &&
													(this.addproperty_list.innerHTML = ''),
												(this.addproperty_checkboxes = {}),
												Object.keys(this.cached_editors).forEach(function (i) {
													t.addPropertyCheckbox(i),
														t.isRequiredObject(t.cached_editors[i]) &&
															i in t.editors &&
															(t.addproperty_checkboxes[i].disabled = !0),
														void 0 !== t.schema.minProperties &&
														r <= t.schema.minProperties
															? ((t.addproperty_checkboxes[i].disabled =
																	t.addproperty_checkboxes[i].checked),
																t.addproperty_checkboxes[i].checked || (n = !0))
															: i in t.editors
																? (n = !0)
																: e || h(t.schema.properties, i)
																	? ((t.addproperty_checkboxes[i].disabled =
																			!1),
																		(n = !0))
																	: (t.addproperty_checkboxes[i].disabled = !0)
												}),
												this.canHaveAdditionalProperties() && (n = !0),
												Object.keys(this.schema.properties).forEach(
													function (e) {
														t.cached_editors[e] ||
															((n = !0), t.addPropertyCheckbox(e))
													}
												),
												n
													? this.canHaveAdditionalProperties()
														? (this.addproperty_add.disabled = !e)
														: ((this.addproperty_add.style.display = 'none'),
															(this.addproperty_input.style.display = 'none'))
													: (this.hideAddProperty(),
														(this.addproperty_button.style.display = 'none'))
										}
									}
								},
								{
									key: 'isRequiredObject',
									value: function (t) {
										if (t)
											return 'boolean' == typeof t.schema.required
												? t.schema.required
												: Array.isArray(this.schema.required)
													? this.schema.required.includes(t.key)
													: !!this.jsoneditor.options.required_by_default
									}
								},
								{
									key: 'setValue',
									value: function (t, e) {
										var r = this
										;('object' !==
											zr((t = (t = this.applyConstFilter(t)) || {})) ||
											Array.isArray(t)) &&
											(t = {}),
											Object.entries(this.cached_editors).forEach(function (n) {
												var i = Vr(n, 2),
													o = i[0],
													a = i[1]
												void 0 !== t[o]
													? (r.addObjectProperty(o),
														a.setValue(t[o], e),
														a.activate(),
														r.disabled && a.disable())
													: e || r.isRequiredObject(a)
														? a.setValue(a.getDefault(), e)
														: r.jsoneditor.options.show_opt_in ||
															  r.options.show_opt_in
															? a.deactivate()
															: r.removeObjectProperty(o)
											}),
											Object.entries(t).forEach(function (t) {
												var n = Vr(t, 2),
													i = n[0],
													o = n[1]
												r.cached_editors[i] ||
													(r.addObjectProperty(i),
													r.editors[i] &&
														r.editors[i].setValue(
															o,
															e,
															!!r.editors[i].template
														))
											}),
											this.refreshValue(),
											this.layoutEditors(),
											this.onChange()
									}
								},
								{
									key: 'showValidationErrors',
									value: function (t) {
										var e = this,
											r = [],
											n = []
										t.forEach(function (t) {
											t.path === e.path ? r.push(t) : n.push(t)
										}),
											this.error_holder &&
												(r.length
													? ((this.error_holder.innerHTML = ''),
														(this.error_holder.style.display = ''),
														r.forEach(function (t) {
															t.errorcount &&
																t.errorcount > 1 &&
																(t.message += ' ('.concat(
																	t.errorcount,
																	' errors)'
																)),
																e.error_holder.appendChild(
																	e.theme.getErrorMessage(t.message)
																)
														}))
													: (this.error_holder.style.display = 'none')),
											this.options.table_row &&
												(r.length
													? this.theme.addTableRowError(this.container)
													: this.theme.removeTableRowError(this.container)),
											Object.values(this.editors).forEach(function (t) {
												t.showValidationErrors(n)
											})
									}
								}
							]) &&
								(function (t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r]
										;(n.enumerable = n.enumerable || !1),
											(n.configurable = !0),
											'value' in n && (n.writable = !0),
											Object.defineProperty(t, Mr(n.key), n)
									}
								})(r.prototype, n),
							Object.defineProperty(r, 'prototype', { writable: !1 }),
							r
						)
						var r, n
					})(w)
					function Wr(t) {
						return (
							(Wr =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							Wr(t)
						)
					}
					function Zr(t) {
						var e = (function (t) {
							if ('object' != Wr(t) || !t) return t
							var e = t[Symbol.toPrimitive]
							if (void 0 !== e) {
								var r = e.call(t, 'string')
								if ('object' != Wr(r)) return r
								throw new TypeError(
									'@@toPrimitive must return a primitive value.'
								)
							}
							return String(t)
						})(t)
						return 'symbol' == Wr(e) ? e : e + ''
					}
					function Yr() {
						try {
							var t = !Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							)
						} catch (t) {}
						return (Yr = function () {
							return !!t
						})()
					}
					function Qr() {
						return (
							(Qr =
								'undefined' != typeof Reflect && Reflect.get
									? Reflect.get.bind()
									: function (t, e, r) {
											var n = (function (t, e) {
												for (
													;
													!Object.prototype.hasOwnProperty.call(t, e) &&
													null !== (t = Kr(t));

												);
												return t
											})(t, e)
											if (n) {
												var i = Object.getOwnPropertyDescriptor(n, e)
												return i.get
													? i.get.call(arguments.length < 3 ? t : r)
													: i.value
											}
										}),
							Qr.apply(this, arguments)
						)
					}
					function Kr(t) {
						return (
							(Kr = Object.setPrototypeOf
								? Object.getPrototypeOf.bind()
								: function (t) {
										return t.__proto__ || Object.getPrototypeOf(t)
									}),
							Kr(t)
						)
					}
					function Xr(t, e) {
						return (
							(Xr = Object.setPrototypeOf
								? Object.setPrototypeOf.bind()
								: function (t, e) {
										return (t.__proto__ = e), t
									}),
							Xr(t, e)
						)
					}
					Jr.rules = {
						'.je-object__title': 'display:inline-block',
						'.je-object__controls': 'margin:0%200%200%2010px',
						'.je-object__container': 'position:relative',
						'.je-object__property-checkbox': 'margin:0;height:auto',
						'.property-selector':
							'width:295px;max-height:160px;padding:5px%200;overflow-y:auto;overflow-x:hidden;padding-left:5px',
						'.property-selector-input':
							'width:220px;margin-bottom:0;display:inline-block',
						'.json-editor-btntype-toggle': 'margin:0%2010px%200%200',
						'.je-edit-json--textarea': 'height:170px;width:300px;display:block'
					}
					var tn = (function (t) {
						function e() {
							return (
								(function (t, e) {
									if (!(t instanceof e))
										throw new TypeError('Cannot call a class as a function')
								})(this, e),
								(function (t, e, r) {
									return (
										(e = Kr(e)),
										(function (t, e) {
											if (e && ('object' === Wr(e) || 'function' == typeof e))
												return e
											if (void 0 !== e)
												throw new TypeError(
													'Derived constructors may only return object or undefined'
												)
											return (function (t) {
												if (void 0 === t)
													throw new ReferenceError(
														"this hasn't been initialised - super() hasn't been called"
													)
												return t
											})(t)
										})(
											t,
											Yr()
												? Reflect.construct(e, r || [], Kr(t).constructor)
												: e.apply(t, r)
										)
									)
								})(this, e, arguments)
							)
						}
						return (
							(function (t, e) {
								if ('function' != typeof e && null !== e)
									throw new TypeError(
										'Super expression must either be null or a function'
									)
								;(t.prototype = Object.create(e && e.prototype, {
									constructor: { value: t, writable: !0, configurable: !0 }
								})),
									Object.defineProperty(t, 'prototype', { writable: !1 }),
									e && Xr(t, e)
							})(e, t),
							(r = e),
							(n = [
								{
									key: 'preBuild',
									value: function () {
										Qr(Kr(e.prototype), 'preBuild', this).call(this)
									}
								},
								{
									key: 'build',
									value: function () {
										var t = this
										;(this.label = ''),
											this.options.compact ||
												(this.header = this.label =
													this.theme.getFormInputLabel(
														this.getTitle(),
														this.isRequired()
													)),
											this.schema.description &&
												(this.description = this.theme.getFormInputDescription(
													this.translateProperty(this.schema.description)
												)),
											this.options.infoText &&
												(this.infoButton = this.theme.getInfoButton(
													this.translateProperty(this.options.infoText)
												)),
											this.options.compact &&
												this.container.classList.add('compact'),
											(this.radioContainer = document.createElement('div')),
											(this.radioGroup = [])
										for (
											var e = function (e) {
													t.setValue(e.currentTarget.value),
														t.onChange(!0),
														t.radioGroup.forEach(function (e) {
															e.checked = e.value === t.getValue()
														})
												},
												r = 0;
											r < this.enum_values.length;
											r++
										) {
											var n = {
												id: ''.concat(this.formname, '[').concat(r, ']'),
												value: this.enum_values[r]
											}
											this.jsoneditor.options.use_name_attributes &&
												(n.name = this.formname),
												(this.input = this.theme.getFormRadio(n)),
												this.setInputAttributes(['id', 'value', 'name']),
												this.input.addEventListener('change', e, !1),
												this.radioGroup.push(this.input)
											var i = this.theme.getFormRadioLabel(this.enum_display[r])
											i.htmlFor = this.input.id
											var o = this.theme.getFormRadioControl(
												i,
												this.input,
												!(
													'horizontal' !== this.options.layout &&
													!this.options.compact
												)
											)
											this.radioContainer.appendChild(o)
										}
										if (this.schema.readOnly || this.schema.readonly) {
											this.disable(!0)
											for (var a = 0; a < this.radioGroup.length; a++)
												this.radioGroup[a].disabled = !0
											this.radioContainer.classList.add('readonly')
										}
										var s = this.theme.getContainer()
										s.appendChild(this.radioContainer),
											(s.dataset.containerFor = 'radio'),
											(this.input = s),
											(this.control = this.theme.getFormControl(
												this.label,
												s,
												this.description,
												this.infoButton
											)),
											this.container.appendChild(this.control),
											window.requestAnimationFrame(function () {
												t.input.parentNode && t.afterInputReady()
											})
									}
								},
								{
									key: 'enable',
									value: function () {
										if (!this.always_disabled) {
											for (var t = 0; t < this.radioGroup.length; t++)
												this.radioGroup[t].disabled = !1
											this.radioContainer.classList.remove('readonly'),
												Qr(Kr(e.prototype), 'enable', this).call(this)
										}
									}
								},
								{
									key: 'disable',
									value: function (t) {
										t && (this.always_disabled = !0)
										for (var r = 0; r < this.radioGroup.length; r++)
											this.radioGroup[r].disabled = !0
										this.radioContainer.classList.add('readonly'),
											Qr(Kr(e.prototype), 'disable', this).call(this)
									}
								},
								{
									key: 'destroy',
									value: function () {
										this.radioContainer.parentNode &&
											this.radioContainer.parentNode.parentNode &&
											this.radioContainer.parentNode.parentNode.removeChild(
												this.radioContainer.parentNode
											),
											this.label &&
												this.label.parentNode &&
												this.label.parentNode.removeChild(this.label),
											this.description &&
												this.description.parentNode &&
												this.description.parentNode.removeChild(
													this.description
												),
											Qr(Kr(e.prototype), 'destroy', this).call(this)
									}
								},
								{
									key: 'getNumColumns',
									value: function () {
										return 2
									}
								},
								{
									key: 'setValue',
									value: function (t) {
										'string' != typeof (t = this.applyConstFilter(t)) &&
											(t = String(t))
										for (var e = 0; e < this.radioGroup.length; e++) {
											if (this.radioGroup[e].value === t) {
												this.radioGroup[e].checked = !0
												break
											}
											this.radioGroup[e].checked = !1
										}
										;(this.value = t), this.onChange()
									}
								}
							]) &&
								(function (t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r]
										;(n.enumerable = n.enumerable || !1),
											(n.configurable = !0),
											'value' in n && (n.writable = !0),
											Object.defineProperty(t, Zr(n.key), n)
									}
								})(r.prototype, n),
							Object.defineProperty(r, 'prototype', { writable: !1 }),
							r
						)
						var r, n
					})(Qt)
					function en(t) {
						return (
							(en =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							en(t)
						)
					}
					function rn(t) {
						var e = (function (t) {
							if ('object' != en(t) || !t) return t
							var e = t[Symbol.toPrimitive]
							if (void 0 !== e) {
								var r = e.call(t, 'string')
								if ('object' != en(r)) return r
								throw new TypeError(
									'@@toPrimitive must return a primitive value.'
								)
							}
							return String(t)
						})(t)
						return 'symbol' == en(e) ? e : e + ''
					}
					function nn() {
						try {
							var t = !Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							)
						} catch (t) {}
						return (nn = function () {
							return !!t
						})()
					}
					function on() {
						return (
							(on =
								'undefined' != typeof Reflect && Reflect.get
									? Reflect.get.bind()
									: function (t, e, r) {
											var n = (function (t, e) {
												for (
													;
													!Object.prototype.hasOwnProperty.call(t, e) &&
													null !== (t = an(t));

												);
												return t
											})(t, e)
											if (n) {
												var i = Object.getOwnPropertyDescriptor(n, e)
												return i.get
													? i.get.call(arguments.length < 3 ? t : r)
													: i.value
											}
										}),
							on.apply(this, arguments)
						)
					}
					function an(t) {
						return (
							(an = Object.setPrototypeOf
								? Object.getPrototypeOf.bind()
								: function (t) {
										return t.__proto__ || Object.getPrototypeOf(t)
									}),
							an(t)
						)
					}
					function sn(t, e) {
						return (
							(sn = Object.setPrototypeOf
								? Object.setPrototypeOf.bind()
								: function (t, e) {
										return (t.__proto__ = e), t
									}),
							sn(t, e)
						)
					}
					var ln = (function (t) {
						function e() {
							return (
								(function (t, e) {
									if (!(t instanceof e))
										throw new TypeError('Cannot call a class as a function')
								})(this, e),
								(function (t, e, r) {
									return (
										(e = an(e)),
										(function (t, e) {
											if (e && ('object' === en(e) || 'function' == typeof e))
												return e
											if (void 0 !== e)
												throw new TypeError(
													'Derived constructors may only return object or undefined'
												)
											return (function (t) {
												if (void 0 === t)
													throw new ReferenceError(
														"this hasn't been initialised - super() hasn't been called"
													)
												return t
											})(t)
										})(
											t,
											nn()
												? Reflect.construct(e, r || [], an(t).constructor)
												: e.apply(t, r)
										)
									)
								})(this, e, arguments)
							)
						}
						return (
							(function (t, e) {
								if ('function' != typeof e && null !== e)
									throw new TypeError(
										'Super expression must either be null or a function'
									)
								;(t.prototype = Object.create(e && e.prototype, {
									constructor: { value: t, writable: !0, configurable: !0 }
								})),
									Object.defineProperty(t, 'prototype', { writable: !1 }),
									e && sn(t, e)
							})(e, t),
							(r = e),
							(n = [
								{
									key: 'setValue',
									value: function (t, r, n) {
										t = this.applyConstFilter(t)
										var i = on(an(e.prototype), 'setValue', this).call(
											this,
											t,
											r,
											n
										)
										void 0 !== i &&
											i.changed &&
											this.sceditor_instance &&
											this.sceditor_instance.val(i.value)
									}
								},
								{
									key: 'build',
									value: function () {
										;(this.options.format = 'textarea'),
											on(an(e.prototype), 'build', this).call(this),
											(this.input_type = this.schema.format),
											this.input.setAttribute(
												'data-schemaformat',
												this.input_type
											)
									}
								},
								{
									key: 'afterInputReady',
									value: function () {
										var t = this
										if (window.sceditor) {
											var r = this.expandCallbacks(
													'sceditor',
													l(
														{},
														{
															format: this.input_type,
															emoticonsEnabled: !1,
															width: '100%',
															height: 300,
															readOnly:
																this.schema.readOnly ||
																this.schema.readonly ||
																this.schema.template
														},
														this.defaults.options.sceditor || {},
														this.options.sceditor || {},
														{ element: this.input }
													)
												),
												n = window.sceditor.instance(this.input)
											void 0 === n && window.sceditor.create(this.input, r),
												(this.sceditor_instance =
													n || window.sceditor.instance(this.input)),
												this.sceditor_instance.blur(function () {
													;(t.value = t.sceditor_instance.val()),
														t.sceditor_instance.updateOriginal(),
														(t.is_dirty = !0),
														t.onChange(!0)
												}),
												this.theme.afterInputReady(this.input)
										} else
											on(an(e.prototype), 'afterInputReady', this).call(this)
									}
								},
								{
									key: 'getNumColumns',
									value: function () {
										return 6
									}
								},
								{
									key: 'enable',
									value: function () {
										!this.always_disabled &&
											this.sceditor_instance &&
											this.sceditor_instance.readOnly(!1),
											on(an(e.prototype), 'enable', this).call(this)
									}
								},
								{
									key: 'disable',
									value: function (t) {
										this.sceditor_instance &&
											this.sceditor_instance.readOnly(!0),
											on(an(e.prototype), 'disable', this).call(this, t)
									}
								},
								{
									key: 'destroy',
									value: function () {
										this.sceditor_instance &&
											(this.sceditor_instance.destroy(),
											(this.sceditor_instance = null)),
											on(an(e.prototype), 'destroy', this).call(this)
									}
								}
							]) &&
								(function (t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r]
										;(n.enumerable = n.enumerable || !1),
											(n.configurable = !0),
											'value' in n && (n.writable = !0),
											Object.defineProperty(t, rn(n.key), n)
									}
								})(r.prototype, n),
							Object.defineProperty(r, 'prototype', { writable: !1 }),
							r
						)
						var r, n
					})(E)
					function cn(t) {
						return (
							(cn =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							cn(t)
						)
					}
					function un(t) {
						var e = (function (t) {
							if ('object' != cn(t) || !t) return t
							var e = t[Symbol.toPrimitive]
							if (void 0 !== e) {
								var r = e.call(t, 'string')
								if ('object' != cn(r)) return r
								throw new TypeError(
									'@@toPrimitive must return a primitive value.'
								)
							}
							return String(t)
						})(t)
						return 'symbol' == cn(e) ? e : e + ''
					}
					function hn() {
						try {
							var t = !Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							)
						} catch (t) {}
						return (hn = function () {
							return !!t
						})()
					}
					function pn() {
						return (
							(pn =
								'undefined' != typeof Reflect && Reflect.get
									? Reflect.get.bind()
									: function (t, e, r) {
											var n = (function (t, e) {
												for (
													;
													!Object.prototype.hasOwnProperty.call(t, e) &&
													null !== (t = dn(t));

												);
												return t
											})(t, e)
											if (n) {
												var i = Object.getOwnPropertyDescriptor(n, e)
												return i.get
													? i.get.call(arguments.length < 3 ? t : r)
													: i.value
											}
										}),
							pn.apply(this, arguments)
						)
					}
					function dn(t) {
						return (
							(dn = Object.setPrototypeOf
								? Object.getPrototypeOf.bind()
								: function (t) {
										return t.__proto__ || Object.getPrototypeOf(t)
									}),
							dn(t)
						)
					}
					function fn(t, e) {
						return (
							(fn = Object.setPrototypeOf
								? Object.setPrototypeOf.bind()
								: function (t, e) {
										return (t.__proto__ = e), t
									}),
							fn(t, e)
						)
					}
					var yn = (function (t) {
						function e() {
							return (
								(function (t, e) {
									if (!(t instanceof e))
										throw new TypeError('Cannot call a class as a function')
								})(this, e),
								(function (t, e, r) {
									return (
										(e = dn(e)),
										(function (t, e) {
											if (e && ('object' === cn(e) || 'function' == typeof e))
												return e
											if (void 0 !== e)
												throw new TypeError(
													'Derived constructors may only return object or undefined'
												)
											return (function (t) {
												if (void 0 === t)
													throw new ReferenceError(
														"this hasn't been initialised - super() hasn't been called"
													)
												return t
											})(t)
										})(
											t,
											hn()
												? Reflect.construct(e, r || [], dn(t).constructor)
												: e.apply(t, r)
										)
									)
								})(this, e, arguments)
							)
						}
						return (
							(function (t, e) {
								if ('function' != typeof e && null !== e)
									throw new TypeError(
										'Super expression must either be null or a function'
									)
								;(t.prototype = Object.create(e && e.prototype, {
									constructor: { value: t, writable: !0, configurable: !0 }
								})),
									Object.defineProperty(t, 'prototype', { writable: !1 }),
									e && fn(t, e)
							})(e, t),
							(r = e),
							(n = [
								{
									key: 'setValue',
									value: function (t, r) {
										if (
											((t = this.applyConstFilter(t)), this.select2_instance)
										) {
											r
												? (this.is_dirty = !1)
												: 'change' === this.jsoneditor.options.show_errors &&
													(this.is_dirty = !0)
											var n = this.updateValue(t)
											;(this.input.value = n),
												this.select2v4
													? this.select2_instance.val(n).trigger('change')
													: this.select2_instance.select2('val', n),
												this.onChange(!0)
										} else
											pn(dn(e.prototype), 'setValue', this).call(this, t, r)
									}
								},
								{
									key: 'afterInputReady',
									value: function () {
										var t = this
										if (
											window.jQuery &&
											window.jQuery.fn &&
											window.jQuery.fn.select2 &&
											!this.select2_instance
										) {
											var r = this.expandCallbacks(
												'select2',
												l(
													{},
													this.defaults.options.select2 || {},
													this.options.select2 || {}
												)
											)
											;(this.newEnumAllowed = r.tags =
												!!r.tags && 'string' === this.schema.type),
												(this.select2_instance = window
													.jQuery(this.input)
													.select2(r)),
												(this.select2v4 = h(
													this.select2_instance.select2,
													'amd'
												)),
												(this.selectChangeHandler = function () {
													var e = t.select2v4
														? t.select2_instance.val()
														: t.select2_instance.select2('val')
													t.updateValue(e), t.onChange(!0)
												}),
												this.select2_instance.on(
													'change',
													this.selectChangeHandler
												),
												this.select2_instance.on(
													'select2-blur',
													this.selectChangeHandler
												)
										}
										pn(dn(e.prototype), 'afterInputReady', this).call(this)
									}
								},
								{
									key: 'updateValue',
									value: function (t) {
										var e = this.enum_values[0]
										return (
											(t = this.typecast(t || '')),
											this.enum_values.includes(t)
												? (e = t)
												: this.newEnumAllowed &&
													(e = this.addNewOption(t) ? t : e),
											(this.value = e),
											e
										)
									}
								},
								{
									key: 'addNewOption',
									value: function (t) {
										var e,
											r = this.typecast(t),
											n = !1
										return (
											this.enum_values.includes(r) ||
												'' === r ||
												(this.enum_options.push(''.concat(r)),
												this.enum_display.push(''.concat(r)),
												this.enum_values.push(r),
												this.schema.enum.push(r),
												(e = this.input.querySelector(
													'option[value="'.concat(r, '"]')
												))
													? e.removeAttribute('data-select2-tag')
													: this.select2_instance
															.append(new Option(r, r, !1, !1))
															.trigger('change'),
												(n = !0)),
											n
										)
									}
								},
								{
									key: 'enable',
									value: function () {
										this.always_disabled ||
											(this.select2_instance &&
												(this.select2v4
													? this.select2_instance.prop('disabled', !1)
													: this.select2_instance.select2('enable', !0))),
											pn(dn(e.prototype), 'enable', this).call(this)
									}
								},
								{
									key: 'disable',
									value: function (t) {
										this.select2_instance &&
											(this.select2v4
												? this.select2_instance.prop('disabled', !0)
												: this.select2_instance.select2('enable', !1)),
											pn(dn(e.prototype), 'disable', this).call(this, t)
									}
								},
								{
									key: 'destroy',
									value: function () {
										this.select2_instance &&
											(this.select2_instance.select2('destroy'),
											(this.select2_instance = null)),
											pn(dn(e.prototype), 'destroy', this).call(this)
									}
								}
							]) &&
								(function (t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r]
										;(n.enumerable = n.enumerable || !1),
											(n.configurable = !0),
											'value' in n && (n.writable = !0),
											Object.defineProperty(t, un(n.key), n)
									}
								})(r.prototype, n),
							Object.defineProperty(r, 'prototype', { writable: !1 }),
							r
						)
						var r, n
					})(Qt)
					function mn(t) {
						return (
							(mn =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							mn(t)
						)
					}
					function vn(t) {
						var e = (function (t) {
							if ('object' != mn(t) || !t) return t
							var e = t[Symbol.toPrimitive]
							if (void 0 !== e) {
								var r = e.call(t, 'string')
								if ('object' != mn(r)) return r
								throw new TypeError(
									'@@toPrimitive must return a primitive value.'
								)
							}
							return String(t)
						})(t)
						return 'symbol' == mn(e) ? e : e + ''
					}
					function bn() {
						try {
							var t = !Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							)
						} catch (t) {}
						return (bn = function () {
							return !!t
						})()
					}
					function gn() {
						return (
							(gn =
								'undefined' != typeof Reflect && Reflect.get
									? Reflect.get.bind()
									: function (t, e, r) {
											var n = (function (t, e) {
												for (
													;
													!Object.prototype.hasOwnProperty.call(t, e) &&
													null !== (t = wn(t));

												);
												return t
											})(t, e)
											if (n) {
												var i = Object.getOwnPropertyDescriptor(n, e)
												return i.get
													? i.get.call(arguments.length < 3 ? t : r)
													: i.value
											}
										}),
							gn.apply(this, arguments)
						)
					}
					function wn(t) {
						return (
							(wn = Object.setPrototypeOf
								? Object.getPrototypeOf.bind()
								: function (t) {
										return t.__proto__ || Object.getPrototypeOf(t)
									}),
							wn(t)
						)
					}
					function _n(t, e) {
						return (
							(_n = Object.setPrototypeOf
								? Object.setPrototypeOf.bind()
								: function (t, e) {
										return (t.__proto__ = e), t
									}),
							_n(t, e)
						)
					}
					var kn = (function (t) {
						function e() {
							return (
								(function (t, e) {
									if (!(t instanceof e))
										throw new TypeError('Cannot call a class as a function')
								})(this, e),
								(function (t, e, r) {
									return (
										(e = wn(e)),
										(function (t, e) {
											if (e && ('object' === mn(e) || 'function' == typeof e))
												return e
											if (void 0 !== e)
												throw new TypeError(
													'Derived constructors may only return object or undefined'
												)
											return (function (t) {
												if (void 0 === t)
													throw new ReferenceError(
														"this hasn't been initialised - super() hasn't been called"
													)
												return t
											})(t)
										})(
											t,
											bn()
												? Reflect.construct(e, r || [], wn(t).constructor)
												: e.apply(t, r)
										)
									)
								})(this, e, arguments)
							)
						}
						return (
							(function (t, e) {
								if ('function' != typeof e && null !== e)
									throw new TypeError(
										'Super expression must either be null or a function'
									)
								;(t.prototype = Object.create(e && e.prototype, {
									constructor: { value: t, writable: !0, configurable: !0 }
								})),
									Object.defineProperty(t, 'prototype', { writable: !1 }),
									e && _n(t, e)
							})(e, t),
							(r = e),
							(n = [
								{
									key: 'setValue',
									value: function (t, r) {
										if (
											((t = this.applyConstFilter(t)), this.selectize_instance)
										) {
											r
												? (this.is_dirty = !1)
												: 'change' === this.jsoneditor.options.show_errors &&
													(this.is_dirty = !0)
											var n = this.updateValue(t)
											;(this.input.value = n),
												this.selectize_instance.clear(!0),
												this.selectize_instance.setValue(n),
												this.onChange(!0)
										} else
											gn(wn(e.prototype), 'setValue', this).call(this, t, r)
									}
								},
								{
									key: 'afterInputReady',
									value: function () {
										var t = this
										if (
											window.jQuery &&
											window.jQuery.fn &&
											window.jQuery.fn.selectize &&
											!this.selectize_instance
										) {
											var r = this.expandCallbacks(
												'selectize',
												l(
													{},
													this.defaults.options.selectize || {},
													this.options.selectize || {}
												)
											)
											;(this.newEnumAllowed = r.create =
												!!r.create && 'string' === this.schema.type),
												(this.selectize_instance = window
													.jQuery(this.input)
													.selectize(r)[0].selectize),
												this.control.removeEventListener(
													'change',
													this.multiselectChangeHandler
												),
												(this.multiselectChangeHandler = function (e) {
													t.updateValue(e), t.onChange(!0)
												}),
												this.selectize_instance.on(
													'change',
													this.multiselectChangeHandler
												)
										}
										gn(wn(e.prototype), 'afterInputReady', this).call(this)
									}
								},
								{
									key: 'updateValue',
									value: function (t) {
										var e = this.enum_values[0]
										return (
											(t = this.typecast(t || '')),
											this.enum_values.includes(t)
												? (e = t)
												: this.newEnumAllowed &&
													(e = this.addNewOption(t) ? t : e),
											(this.value = e),
											e
										)
									}
								},
								{
									key: 'addNewOption',
									value: function (t) {
										var e = this.typecast(t),
											r = !1
										return (
											this.enum_values.includes(e) ||
												'' === e ||
												(this.enum_options.push(''.concat(e)),
												this.enum_display.push(''.concat(e)),
												this.enum_values.push(e),
												this.schema.enum.push(e),
												this.selectize_instance.addItem(e),
												this.selectize_instance.refreshOptions(!1),
												(r = !0)),
											r
										)
									}
								},
								{
									key: 'onWatchedFieldChange',
									value: function () {
										var t = this
										gn(wn(e.prototype), 'onWatchedFieldChange', this).call(
											this
										),
											this.selectize_instance &&
												(this.selectize_instance.clear(!0),
												this.selectize_instance.clearOptions(!0),
												this.enum_options.forEach(function (e, r) {
													t.selectize_instance.addOption({
														value: e,
														text: t.enum_display[r]
													})
												}),
												this.selectize_instance.addItem(
													''.concat(this.value),
													!0
												))
									}
								},
								{
									key: 'enable',
									value: function () {
										!this.always_disabled &&
											this.selectize_instance &&
											this.selectize_instance.unlock(),
											gn(wn(e.prototype), 'enable', this).call(this)
									}
								},
								{
									key: 'disable',
									value: function (t) {
										this.selectize_instance && this.selectize_instance.lock(),
											gn(wn(e.prototype), 'disable', this).call(this, t)
									}
								},
								{
									key: 'destroy',
									value: function () {
										this.selectize_instance &&
											(this.selectize_instance.destroy(),
											(this.selectize_instance = null)),
											gn(wn(e.prototype), 'destroy', this).call(this)
									}
								}
							]) &&
								(function (t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r]
										;(n.enumerable = n.enumerable || !1),
											(n.configurable = !0),
											'value' in n && (n.writable = !0),
											Object.defineProperty(t, vn(n.key), n)
									}
								})(r.prototype, n),
							Object.defineProperty(r, 'prototype', { writable: !1 }),
							r
						)
						var r, n
					})(Qt)
					function jn(t) {
						return (
							(jn =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							jn(t)
						)
					}
					function On(t) {
						var e = (function (t) {
							if ('object' != jn(t) || !t) return t
							var e = t[Symbol.toPrimitive]
							if (void 0 !== e) {
								var r = e.call(t, 'string')
								if ('object' != jn(r)) return r
								throw new TypeError(
									'@@toPrimitive must return a primitive value.'
								)
							}
							return String(t)
						})(t)
						return 'symbol' == jn(e) ? e : e + ''
					}
					function xn() {
						try {
							var t = !Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							)
						} catch (t) {}
						return (xn = function () {
							return !!t
						})()
					}
					function Cn(t) {
						return (
							(Cn = Object.setPrototypeOf
								? Object.getPrototypeOf.bind()
								: function (t) {
										return t.__proto__ || Object.getPrototypeOf(t)
									}),
							Cn(t)
						)
					}
					function En(t, e) {
						return (
							(En = Object.setPrototypeOf
								? Object.setPrototypeOf.bind()
								: function (t, e) {
										return (t.__proto__ = e), t
									}),
							En(t, e)
						)
					}
					var Sn = (function (t) {
						function e() {
							return (
								(function (t, e) {
									if (!(t instanceof e))
										throw new TypeError('Cannot call a class as a function')
								})(this, e),
								(function (t, e, r) {
									return (
										(e = Cn(e)),
										(function (t, e) {
											if (e && ('object' === jn(e) || 'function' == typeof e))
												return e
											if (void 0 !== e)
												throw new TypeError(
													'Derived constructors may only return object or undefined'
												)
											return (function (t) {
												if (void 0 === t)
													throw new ReferenceError(
														"this hasn't been initialised - super() hasn't been called"
													)
												return t
											})(t)
										})(
											t,
											xn()
												? Reflect.construct(e, r || [], Cn(t).constructor)
												: e.apply(t, r)
										)
									)
								})(this, e, arguments)
							)
						}
						return (
							(function (t, e) {
								if ('function' != typeof e && null !== e)
									throw new TypeError(
										'Super expression must either be null or a function'
									)
								;(t.prototype = Object.create(e && e.prototype, {
									constructor: { value: t, writable: !0, configurable: !0 }
								})),
									Object.defineProperty(t, 'prototype', { writable: !1 }),
									e && En(t, e)
							})(e, t),
							(r = e),
							(n = [
								{
									key: 'build',
									value: function () {
										var t = this
										this.options.compact ||
											(this.header = this.label =
												this.theme.getFormInputLabel(
													this.getTitle(),
													this.isRequired()
												)),
											this.schema.description &&
												(this.description = this.theme.getFormInputDescription(
													this.translateProperty(this.schema.description)
												))
										var e = this.formname.replace(/\W/g, '')
										if ('function' == typeof SignaturePad) {
											;(this.input = this.theme.getFormInputField('hidden')),
												this.container.appendChild(this.input)
											var r = document.createElement('div')
											r.classList.add('signature-container')
											var n = document.createElement('canvas')
											this.jsoneditor.options.use_name_attributes &&
												n.setAttribute('name', e),
												n.classList.add('signature'),
												r.appendChild(n),
												(this.signaturePad = new window.SignaturePad(n)),
												(this.signaturePad.onEnd = function () {
													t.signaturePad.isEmpty()
														? (t.input.value = '')
														: (t.input.value = t.signaturePad.toDataURL()),
														(t.is_dirty = !0),
														t.refreshValue(),
														t.watch_listener(),
														t.jsoneditor.notifyWatchers(t.path),
														t.parent
															? t.parent.onChildEditorChange(t)
															: t.jsoneditor.onChange()
												})
											var i = document.createElement('div'),
												o = document.createElement('button')
											o.classList.add('tiny', 'button'),
												(o.innerHTML = 'Clear signature'),
												i.appendChild(o),
												r.appendChild(i),
												this.options.compact &&
													this.container.setAttribute(
														'class',
														''.concat(
															this.container.getAttribute('class'),
															' compact'
														)
													),
												(this.schema.readOnly || this.schema.readonly) &&
													(this.disable(!0),
													Array.from(this.inputs).forEach(function (t) {
														n.setAttribute('readOnly', 'readOnly'),
															(t.disabled = !0)
													})),
												o.addEventListener('click', function (e) {
													e.preventDefault(),
														e.stopPropagation(),
														t.signaturePad.clear(),
														t.signaturePad.strokeEnd()
												}),
												(this.control = this.theme.getFormControl(
													this.label,
													r,
													this.description
												)),
												this.container.appendChild(this.control),
												this.refreshValue(),
												(n.width = r.offsetWidth),
												this.options && this.options.canvas_height
													? (n.height = this.options.canvas_height)
													: (n.height = '300')
										} else {
											var a = document.createElement('p')
											;(a.innerHTML =
												'Signature pad is not available, please include SignaturePad from https://github.com/szimek/signature_pad'),
												this.container.appendChild(a)
										}
									}
								},
								{
									key: 'setValue',
									value: function (t) {
										if (
											((t = this.applyConstFilter(t)),
											'function' == typeof SignaturePad)
										) {
											var e = this.sanitize(t)
											if (this.value === e) return
											return (
												(this.value = e),
												(this.input.value = this.value),
												this.signaturePad.clear(),
												t && '' !== t && this.signaturePad.fromDataURL(t),
												this.watch_listener(),
												this.jsoneditor.notifyWatchers(this.path),
												!1
											)
										}
									}
								},
								{
									key: 'destroy',
									value: function () {
										this.signaturePad.off(), delete this.signaturePad
									}
								}
							]) &&
								(function (t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r]
										;(n.enumerable = n.enumerable || !1),
											(n.configurable = !0),
											'value' in n && (n.writable = !0),
											Object.defineProperty(t, On(n.key), n)
									}
								})(r.prototype, n),
							Object.defineProperty(r, 'prototype', { writable: !1 }),
							r
						)
						var r, n
					})(E)
					function Pn(t) {
						return (
							(Pn =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							Pn(t)
						)
					}
					function Ln(t) {
						var e = (function (t) {
							if ('object' != Pn(t) || !t) return t
							var e = t[Symbol.toPrimitive]
							if (void 0 !== e) {
								var r = e.call(t, 'string')
								if ('object' != Pn(r)) return r
								throw new TypeError(
									'@@toPrimitive must return a primitive value.'
								)
							}
							return String(t)
						})(t)
						return 'symbol' == Pn(e) ? e : e + ''
					}
					function Tn() {
						try {
							var t = !Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							)
						} catch (t) {}
						return (Tn = function () {
							return !!t
						})()
					}
					function An() {
						return (
							(An =
								'undefined' != typeof Reflect && Reflect.get
									? Reflect.get.bind()
									: function (t, e, r) {
											var n = (function (t, e) {
												for (
													;
													!Object.prototype.hasOwnProperty.call(t, e) &&
													null !== (t = Rn(t));

												);
												return t
											})(t, e)
											if (n) {
												var i = Object.getOwnPropertyDescriptor(n, e)
												return i.get
													? i.get.call(arguments.length < 3 ? t : r)
													: i.value
											}
										}),
							An.apply(this, arguments)
						)
					}
					function Rn(t) {
						return (
							(Rn = Object.setPrototypeOf
								? Object.getPrototypeOf.bind()
								: function (t) {
										return t.__proto__ || Object.getPrototypeOf(t)
									}),
							Rn(t)
						)
					}
					function In(t, e) {
						return (
							(In = Object.setPrototypeOf
								? Object.setPrototypeOf.bind()
								: function (t, e) {
										return (t.__proto__ = e), t
									}),
							In(t, e)
						)
					}
					r(6031)
					var Bn = (function (t) {
						function e() {
							return (
								(function (t, e) {
									if (!(t instanceof e))
										throw new TypeError('Cannot call a class as a function')
								})(this, e),
								(function (t, e, r) {
									return (
										(e = Rn(e)),
										(function (t, e) {
											if (e && ('object' === Pn(e) || 'function' == typeof e))
												return e
											if (void 0 !== e)
												throw new TypeError(
													'Derived constructors may only return object or undefined'
												)
											return (function (t) {
												if (void 0 === t)
													throw new ReferenceError(
														"this hasn't been initialised - super() hasn't been called"
													)
												return t
											})(t)
										})(
											t,
											Tn()
												? Reflect.construct(e, r || [], Rn(t).constructor)
												: e.apply(t, r)
										)
									)
								})(this, e, arguments)
							)
						}
						return (
							(function (t, e) {
								if ('function' != typeof e && null !== e)
									throw new TypeError(
										'Super expression must either be null or a function'
									)
								;(t.prototype = Object.create(e && e.prototype, {
									constructor: { value: t, writable: !0, configurable: !0 }
								})),
									Object.defineProperty(t, 'prototype', { writable: !1 }),
									e && In(t, e)
							})(e, t),
							(r = e),
							(n = [
								{
									key: 'setValue',
									value: function (t, r, n) {
										t = this.applyConstFilter(t)
										var i = An(Rn(e.prototype), 'setValue', this).call(
											this,
											t,
											r,
											n
										)
										void 0 !== i &&
											i.changed &&
											this.simplemde_instance &&
											this.simplemde_instance.value(i.value)
									}
								},
								{
									key: 'build',
									value: function () {
										;(this.options.format = 'textarea'),
											An(Rn(e.prototype), 'build', this).call(this),
											(this.input_type = this.schema.format),
											this.input.setAttribute(
												'data-schemaformat',
												this.input_type
											)
									}
								},
								{
									key: 'afterInputReady',
									value: function () {
										var t,
											r = this
										window.SimpleMDE
											? ((t = this.expandCallbacks(
													'simplemde',
													l(
														{},
														{ height: 300 },
														this.defaults.options.simplemde || {},
														this.options.simplemde || {},
														{ element: this.input, forceSync: !0 }
													)
												)),
												(this.simplemde_instance = new window.SimpleMDE(t)),
												(this.schema.readOnly ||
													this.schema.readonly ||
													this.schema.template) &&
													(this.simplemde_instance.codemirror.options.readOnly =
														!0),
												this.simplemde_instance.codemirror.on(
													'change',
													function () {
														;(r.value = r.simplemde_instance.value()),
															(r.is_dirty = !0),
															r.onChange(!0)
													}
												),
												t.autorefresh &&
													this.startListening(
														this.simplemde_instance.codemirror,
														(this.simplemde_instance.codemirror.state.autoRefresh =
															{ delay: 250 })
													),
												this.theme.afterInputReady(this.input))
											: An(Rn(e.prototype), 'afterInputReady', this).call(this)
									}
								},
								{
									key: 'getNumColumns',
									value: function () {
										return 6
									}
								},
								{
									key: 'enable',
									value: function () {
										!this.always_disabled &&
											this.simplemde_instance &&
											(this.simplemde_instance.codemirror.options.readOnly =
												!1),
											An(Rn(e.prototype), 'enable', this).call(this)
									}
								},
								{
									key: 'disable',
									value: function (t) {
										this.simplemde_instance &&
											(this.simplemde_instance.codemirror.options.readOnly =
												!0),
											An(Rn(e.prototype), 'disable', this).call(this, t)
									}
								},
								{
									key: 'destroy',
									value: function () {
										this.simplemde_instance &&
											(this.simplemde_instance.toTextArea(),
											(this.simplemde_instance = null)),
											An(Rn(e.prototype), 'destroy', this).call(this)
									}
								},
								{
									key: 'startListening',
									value: function (t, e) {
										var r = this,
											n = function n() {
												t.display.wrapper.offsetHeight
													? (r.stopListening(t, e),
														t.display.lastWrapHeight !==
															t.display.wrapper.clientHeight && t.refresh())
													: (e.timeout = window.setTimeout(n, e.delay))
											}
										;(e.timeout = window.setTimeout(n, e.delay)),
											(e.hurry = function () {
												window.clearTimeout(e.timeout),
													(e.timeout = window.setTimeout(n, 50))
											}),
											t.on(window, 'mouseup', e.hurry),
											t.on(window, 'keyup', e.hurry)
									}
								},
								{
									key: 'stopListening',
									value: function (t, e) {
										window.clearTimeout(e.timeout),
											t.off(window, 'mouseup', e.hurry),
											t.off(window, 'keyup', e.hurry)
									}
								}
							]) &&
								(function (t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r]
										;(n.enumerable = n.enumerable || !1),
											(n.configurable = !0),
											'value' in n && (n.writable = !0),
											Object.defineProperty(t, Ln(n.key), n)
									}
								})(r.prototype, n),
							Object.defineProperty(r, 'prototype', { writable: !1 }),
							r
						)
						var r, n
					})(E)
					function Nn(t) {
						return (
							(Nn =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							Nn(t)
						)
					}
					function Dn(t) {
						var e = (function (t) {
							if ('object' != Nn(t) || !t) return t
							var e = t[Symbol.toPrimitive]
							if (void 0 !== e) {
								var r = e.call(t, 'string')
								if ('object' != Nn(r)) return r
								throw new TypeError(
									'@@toPrimitive must return a primitive value.'
								)
							}
							return String(t)
						})(t)
						return 'symbol' == Nn(e) ? e : e + ''
					}
					function Fn() {
						try {
							var t = !Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							)
						} catch (t) {}
						return (Fn = function () {
							return !!t
						})()
					}
					function Vn() {
						return (
							(Vn =
								'undefined' != typeof Reflect && Reflect.get
									? Reflect.get.bind()
									: function (t, e, r) {
											var n = (function (t, e) {
												for (
													;
													!Object.prototype.hasOwnProperty.call(t, e) &&
													null !== (t = Hn(t));

												);
												return t
											})(t, e)
											if (n) {
												var i = Object.getOwnPropertyDescriptor(n, e)
												return i.get
													? i.get.call(arguments.length < 3 ? t : r)
													: i.value
											}
										}),
							Vn.apply(this, arguments)
						)
					}
					function Hn(t) {
						return (
							(Hn = Object.setPrototypeOf
								? Object.getPrototypeOf.bind()
								: function (t) {
										return t.__proto__ || Object.getPrototypeOf(t)
									}),
							Hn(t)
						)
					}
					function zn(t, e) {
						return (
							(zn = Object.setPrototypeOf
								? Object.setPrototypeOf.bind()
								: function (t, e) {
										return (t.__proto__ = e), t
									}),
							zn(t, e)
						)
					}
					var Mn = (function (t) {
						function e() {
							return (
								(function (t, e) {
									if (!(t instanceof e))
										throw new TypeError('Cannot call a class as a function')
								})(this, e),
								(function (t, e, r) {
									return (
										(e = Hn(e)),
										(function (t, e) {
											if (e && ('object' === Nn(e) || 'function' == typeof e))
												return e
											if (void 0 !== e)
												throw new TypeError(
													'Derived constructors may only return object or undefined'
												)
											return (function (t) {
												if (void 0 === t)
													throw new ReferenceError(
														"this hasn't been initialised - super() hasn't been called"
													)
												return t
											})(t)
										})(
											t,
											Fn()
												? Reflect.construct(e, r || [], Hn(t).constructor)
												: e.apply(t, r)
										)
									)
								})(this, e, arguments)
							)
						}
						return (
							(function (t, e) {
								if ('function' != typeof e && null !== e)
									throw new TypeError(
										'Super expression must either be null or a function'
									)
								;(t.prototype = Object.create(e && e.prototype, {
									constructor: { value: t, writable: !0, configurable: !0 }
								})),
									Object.defineProperty(t, 'prototype', { writable: !1 }),
									e && zn(t, e)
							})(e, t),
							(r = e),
							(n = [
								{
									key: 'build',
									value: function () {
										var t = this
										if (
											(this.options.compact ||
												(this.header = this.label =
													this.theme.getLabelLike(
														this.getTitle(),
														this.isRequired()
													)),
											this.schema.description &&
												(this.description = this.theme.getFormInputDescription(
													this.translateProperty(this.schema.description)
												)),
											this.options.infoText &&
												(this.infoButton = this.theme.getInfoButton(
													this.translateProperty(this.options.infoText)
												)),
											this.options.compact &&
												this.container.classList.add('compact'),
											(this.ratingContainer = document.createElement('div')),
											this.ratingContainer.classList.add('starrating'),
											void 0 === this.schema.enum)
										) {
											var e = this.schema.maximum ? this.schema.maximum : 5
											this.schema.exclusiveMaximum && e--,
												(this.enum_values = [])
											for (var r = 0; r < e; r++) this.enum_values.push(r + 1)
										} else this.enum_values = this.schema.enum
										this.radioGroup = []
										for (
											var n = function (e) {
													e.preventDefault(),
														e.stopPropagation(),
														t.setValue(e.currentTarget.value),
														t.onChange(!0)
												},
												i = this.enum_values.length - 1;
											i > -1;
											i--
										) {
											var o = this.formname + (i + 1),
												a = this.theme.getFormInputField('radio')
											;(a.name = ''.concat(this.formname, '[starrating]')),
												(a.value = this.enum_values[i]),
												(a.id = o),
												a.addEventListener('change', n, !1),
												this.radioGroup.push(a)
											var s = document.createElement('label')
											;(s.htmlFor = o),
												(s.title = this.enum_values[i]),
												this.options.displayValue &&
													s.classList.add('starrating-display-enabled')
											var l = this.theme.getHiddenText('label')
											;(l.textContent = i),
												s.appendChild(l),
												this.ratingContainer.appendChild(a),
												this.ratingContainer.appendChild(s)
										}
										if (
											(this.options.displayValue &&
												((this.displayRating = document.createElement('div')),
												this.displayRating.classList.add('starrating-display'),
												(this.displayRating.innerText = this.enum_values[0]),
												this.ratingContainer.appendChild(this.displayRating)),
											this.schema.readOnly || this.schema.readonly)
										) {
											this.disable(!0)
											for (var c = 0; c < this.radioGroup.length; c++)
												this.radioGroup[c].disabled = !0
											this.ratingContainer.classList.add('readonly')
										}
										var u = this.theme.getContainer()
										u.appendChild(this.ratingContainer),
											(this.input = u),
											(this.control = this.theme.getFormControl(
												this.label,
												u,
												this.description,
												this.infoButton
											)),
											this.container.appendChild(this.control),
											this.refreshValue()
									}
								},
								{
									key: 'enable',
									value: function () {
										if (!this.always_disabled) {
											for (var t = 0; t < this.radioGroup.length; t++)
												this.radioGroup[t].disabled = !1
											this.ratingContainer.classList.remove('readonly'),
												(this.disabled = !1)
										}
									}
								},
								{
									key: 'disable',
									value: function (t) {
										t && (this.always_disabled = !0)
										for (var e = 0; e < this.radioGroup.length; e++)
											this.radioGroup[e].disabled = !0
										this.ratingContainer.classList.add('readonly'),
											(this.disabled = !0)
									}
								},
								{
									key: 'destroy',
									value: function () {
										this.ratingContainer.parentNode &&
											this.ratingContainer.parentNode.parentNode &&
											this.ratingContainer.parentNode.parentNode.removeChild(
												this.ratingContainer.parentNode
											),
											this.label &&
												this.label.parentNode &&
												this.label.parentNode.removeChild(this.label),
											this.description &&
												this.description.parentNode &&
												this.description.parentNode.removeChild(
													this.description
												),
											Vn(Hn(e.prototype), 'destroy', this).call(this)
									}
								},
								{
									key: 'getNumColumns',
									value: function () {
										return 2
									}
								},
								{
									key: 'getValue',
									value: function () {
										if (this.dependenciesFulfilled)
											return 'integer' === this.schema.type
												? '' === this.value
													? 0
													: parseInt(this.value)
												: this.value
									}
								},
								{
									key: 'setValue',
									value: function (t) {
										;(t = this.applyConstFilter(t)), (this.value = t)
										for (var r = 0; r < this.radioGroup.length; r++)
											if (this.radioGroup[r].value === ''.concat(t)) {
												;(this.radioGroup[r].checked = !0),
													(this.value = t),
													this.options.displayValue &&
														(this.displayRating.innerHTML = this.value)
												break
											}
										Vn(Hn(e.prototype), 'setValue', this).call(this, this.value)
									}
								}
							]) &&
								(function (t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r]
										;(n.enumerable = n.enumerable || !1),
											(n.configurable = !0),
											'value' in n && (n.writable = !0),
											Object.defineProperty(t, Dn(n.key), n)
									}
								})(r.prototype, n),
							Object.defineProperty(r, 'prototype', { writable: !1 }),
							r
						)
						var r, n
					})(E)
					function qn(t) {
						return (
							(qn =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							qn(t)
						)
					}
					function Un(t) {
						var e = (function (t) {
							if ('object' != qn(t) || !t) return t
							var e = t[Symbol.toPrimitive]
							if (void 0 !== e) {
								var r = e.call(t, 'string')
								if ('object' != qn(r)) return r
								throw new TypeError(
									'@@toPrimitive must return a primitive value.'
								)
							}
							return String(t)
						})(t)
						return 'symbol' == qn(e) ? e : e + ''
					}
					function Gn() {
						try {
							var t = !Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							)
						} catch (t) {}
						return (Gn = function () {
							return !!t
						})()
					}
					function $n() {
						return (
							($n =
								'undefined' != typeof Reflect && Reflect.get
									? Reflect.get.bind()
									: function (t, e, r) {
											var n = (function (t, e) {
												for (
													;
													!Object.prototype.hasOwnProperty.call(t, e) &&
													null !== (t = Jn(t));

												);
												return t
											})(t, e)
											if (n) {
												var i = Object.getOwnPropertyDescriptor(n, e)
												return i.get
													? i.get.call(arguments.length < 3 ? t : r)
													: i.value
											}
										}),
							$n.apply(this, arguments)
						)
					}
					function Jn(t) {
						return (
							(Jn = Object.setPrototypeOf
								? Object.getPrototypeOf.bind()
								: function (t) {
										return t.__proto__ || Object.getPrototypeOf(t)
									}),
							Jn(t)
						)
					}
					function Wn(t, e) {
						return (
							(Wn = Object.setPrototypeOf
								? Object.setPrototypeOf.bind()
								: function (t, e) {
										return (t.__proto__ = e), t
									}),
							Wn(t, e)
						)
					}
					Mn.rules = {
						'.starrating':
							'direction:rtl;display:inline-block;white-space:nowrap',
						'.starrating > input': 'display:none',
						'.starrating > label:before':
							"content:'%5C2606';margin:1px;font-size:18px;font-style:normal;font-weight:400;line-height:1;font-family:'Arial';display:inline-block",
						'.starrating > label':
							'color:%23888;cursor:pointer;margin:8px%200%202px%200',
						'.starrating > label.starrating-display-enabled':
							'margin:1px%200%200%200',
						'.starrating > input:checked ~ label': 'color:%23ffca08',
						'.starrating:not(.readonly) > input:hover ~ label':
							'color:%23ffca08',
						'.starrating > input:checked ~ label:before':
							"content:'%5C2605';text-shadow:0%200%201px%20rgba(0%2C20%2C20%2C1)",
						'.starrating:not(.readonly) > input:hover ~ label:before':
							"content:'%5C2605';text-shadow:0%200%201px%20rgba(0%2C20%2C20%2C1)",
						'.starrating .starrating-display':
							'position:relative;direction:rtl;text-align:center;font-size:10px;line-height:0px'
					}
					var Zn = (function (t) {
						function e() {
							return (
								(function (t, e) {
									if (!(t instanceof e))
										throw new TypeError('Cannot call a class as a function')
								})(this, e),
								(function (t, e, r) {
									return (
										(e = Jn(e)),
										(function (t, e) {
											if (e && ('object' === qn(e) || 'function' == typeof e))
												return e
											if (void 0 !== e)
												throw new TypeError(
													'Derived constructors may only return object or undefined'
												)
											return (function (t) {
												if (void 0 === t)
													throw new ReferenceError(
														"this hasn't been initialised - super() hasn't been called"
													)
												return t
											})(t)
										})(
											t,
											Gn()
												? Reflect.construct(e, r || [], Jn(t).constructor)
												: e.apply(t, r)
										)
									)
								})(this, e, arguments)
							)
						}
						return (
							(function (t, e) {
								if ('function' != typeof e && null !== e)
									throw new TypeError(
										'Super expression must either be null or a function'
									)
								;(t.prototype = Object.create(e && e.prototype, {
									constructor: { value: t, writable: !0, configurable: !0 }
								})),
									Object.defineProperty(t, 'prototype', { writable: !1 }),
									e && Wn(t, e)
							})(e, t),
							(r = e),
							(n = [
								{
									key: 'build',
									value: function () {
										$n(Jn(e.prototype), 'build', this).call(this),
											this.input.setAttribute('type', 'number'),
											this.input.getAttribute('step') ||
												this.input.setAttribute('step', '1')
										var t = this.theme.getStepperButtons(this.input)
										this.control.appendChild(t),
											(this.stepperDown =
												this.control.querySelector('.stepper-down')),
											(this.stepperUp =
												this.control.querySelector('.stepper-up'))
									}
								},
								{
									key: 'enable',
									value: function () {
										$n(Jn(e.prototype), 'enable', this).call(this),
											this.stepperDown.removeAttribute('disabled'),
											this.stepperUp.removeAttribute('disabled')
									}
								},
								{
									key: 'disable',
									value: function () {
										$n(Jn(e.prototype), 'disable', this).call(this),
											this.stepperDown.setAttribute('disabled', !0),
											this.stepperUp.setAttribute('disabled', !0)
									}
								}
							]) &&
								(function (t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r]
										;(n.enumerable = n.enumerable || !1),
											(n.configurable = !0),
											'value' in n && (n.writable = !0),
											Object.defineProperty(t, Un(n.key), n)
									}
								})(r.prototype, n),
							Object.defineProperty(r, 'prototype', { writable: !1 }),
							r
						)
						var r, n
					})(Ke)
					function Yn(t) {
						return (
							(Yn =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							Yn(t)
						)
					}
					function Qn(t) {
						var e = (function (t) {
							if ('object' != Yn(t) || !t) return t
							var e = t[Symbol.toPrimitive]
							if (void 0 !== e) {
								var r = e.call(t, 'string')
								if ('object' != Yn(r)) return r
								throw new TypeError(
									'@@toPrimitive must return a primitive value.'
								)
							}
							return String(t)
						})(t)
						return 'symbol' == Yn(e) ? e : e + ''
					}
					function Kn() {
						try {
							var t = !Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							)
						} catch (t) {}
						return (Kn = function () {
							return !!t
						})()
					}
					function Xn() {
						return (
							(Xn =
								'undefined' != typeof Reflect && Reflect.get
									? Reflect.get.bind()
									: function (t, e, r) {
											var n = (function (t, e) {
												for (
													;
													!Object.prototype.hasOwnProperty.call(t, e) &&
													null !== (t = ti(t));

												);
												return t
											})(t, e)
											if (n) {
												var i = Object.getOwnPropertyDescriptor(n, e)
												return i.get
													? i.get.call(arguments.length < 3 ? t : r)
													: i.value
											}
										}),
							Xn.apply(this, arguments)
						)
					}
					function ti(t) {
						return (
							(ti = Object.setPrototypeOf
								? Object.getPrototypeOf.bind()
								: function (t) {
										return t.__proto__ || Object.getPrototypeOf(t)
									}),
							ti(t)
						)
					}
					function ei(t, e) {
						return (
							(ei = Object.setPrototypeOf
								? Object.setPrototypeOf.bind()
								: function (t, e) {
										return (t.__proto__ = e), t
									}),
							ei(t, e)
						)
					}
					var ri = (function (t) {
						function e() {
							return (
								(function (t, e) {
									if (!(t instanceof e))
										throw new TypeError('Cannot call a class as a function')
								})(this, e),
								(function (t, e, r) {
									return (
										(e = ti(e)),
										(function (t, e) {
											if (e && ('object' === Yn(e) || 'function' == typeof e))
												return e
											if (void 0 !== e)
												throw new TypeError(
													'Derived constructors may only return object or undefined'
												)
											return (function (t) {
												if (void 0 === t)
													throw new ReferenceError(
														"this hasn't been initialised - super() hasn't been called"
													)
												return t
											})(t)
										})(
											t,
											Kn()
												? Reflect.construct(e, r || [], ti(t).constructor)
												: e.apply(t, r)
										)
									)
								})(this, e, arguments)
							)
						}
						return (
							(function (t, e) {
								if ('function' != typeof e && null !== e)
									throw new TypeError(
										'Super expression must either be null or a function'
									)
								;(t.prototype = Object.create(e && e.prototype, {
									constructor: { value: t, writable: !0, configurable: !0 }
								})),
									Object.defineProperty(t, 'prototype', { writable: !1 }),
									e && ei(t, e)
							})(e, t),
							(r = e),
							(n = [
								{
									key: 'register',
									value: function () {
										if (
											(Xn(ti(e.prototype), 'register', this).call(this),
											this.rows)
										)
											for (var t = 0; t < this.rows.length; t++)
												this.rows[t].register()
									}
								},
								{
									key: 'unregister',
									value: function () {
										if (
											(Xn(ti(e.prototype), 'unregister', this).call(this),
											this.rows)
										)
											for (var t = 0; t < this.rows.length; t++)
												this.rows[t].unregister()
									}
								},
								{
									key: 'getNumColumns',
									value: function () {
										return Math.max(Math.min(12, this.width), 3)
									}
								},
								{
									key: 'preBuild',
									value: function () {
										var t = this.jsoneditor.expandRefs(this.schema.items || {})
										;(this.item_title = t.title || 'row'),
											(this.item_default = t.default || null),
											(this.item_has_child_editors = t.properties || t.items),
											(this.width = 12),
											(this.array_controls_top =
												this.options.array_controls_top ||
												this.jsoneditor.options.array_controls_top),
											Xn(ti(e.prototype), 'preBuild', this).call(this)
									}
								},
								{
									key: 'build',
									value: function () {
										;(this.tableContainer = this.theme.getTableContainer()),
											(this.table = this.theme.getTable()),
											this.tableContainer.appendChild(this.table),
											this.container.appendChild(this.tableContainer),
											(this.thead = this.theme.getTableHead()),
											this.table.appendChild(this.thead),
											(this.header_row = this.theme.getTableRow()),
											this.thead.appendChild(this.header_row),
											(this.row_holder = this.theme.getTableBody()),
											this.table.appendChild(this.row_holder)
										var t = this.getElementEditor(0, !0)
										if (
											((this.item_default = t.getDefault()),
											(this.width = t.getNumColumns() + 2),
											this.options.compact
												? ((this.panel = document.createElement('div')),
													this.container.appendChild(this.panel))
												: ((this.header = document.createElement('span')),
													(this.header.textContent = this.getTitle()),
													(this.title = this.theme.getHeader(
														this.header,
														this.getPathDepth()
													)),
													this.container.appendChild(this.title),
													this.options.infoText &&
														((this.infoButton = this.theme.getInfoButton(
															this.translateProperty(this.options.infoText)
														)),
														this.container.appendChild(this.infoButton)),
													(this.title_controls =
														this.theme.getHeaderButtonHolder()),
													this.title.appendChild(this.title_controls),
													this.schema.description &&
														((this.description = this.theme.getDescription(
															this.translateProperty(this.schema.description)
														)),
														this.container.appendChild(this.description)),
													(this.panel = this.theme.getIndentedPanel()),
													this.container.appendChild(this.panel),
													(this.error_holder = document.createElement('div')),
													this.panel.appendChild(this.error_holder)),
											this.panel.appendChild(this.tableContainer),
											(this.controls = this.theme.getButtonHolder()),
											this.array_controls_top
												? this.title.appendChild(this.controls)
												: this.panel.appendChild(this.controls),
											this.item_has_child_editors)
										)
											for (
												var e = t.getChildEditors(),
													r = t.property_order || Object.keys(e),
													n = 0;
												n < r.length;
												n++
											) {
												var i = this.theme.getTableHeaderCell(
													e[r[n]].getTitle()
												)
												e[r[n]].options.hidden && (i.style.display = 'none'),
													this.header_row.appendChild(i)
											}
										else
											this.header_row.appendChild(
												this.theme.getTableHeaderCell(this.item_title)
											)
										t.destroy(),
											(this.row_holder.innerHTML = ''),
											(this.controls_header_cell =
												this.theme.getTableHeaderCell(
													this.translate('table_controls')
												)),
											this.controls_header_cell.setAttribute(
												'aria-hidden',
												'true'
											),
											(this.controls_header_cell.style.visibility = 'hidden'),
											this.header_row.appendChild(this.controls_header_cell),
											this.addControls()
									}
								},
								{
									key: 'onChildEditorChange',
									value: function (t, r) {
										this.refreshValue(),
											Xn(ti(e.prototype), 'onChildEditorChange', this).call(
												this,
												t,
												r
											)
									}
								},
								{
									key: 'getItemDefault',
									value: function () {
										return l({}, { default: this.item_default }).default
									}
								},
								{
									key: 'getItemTitle',
									value: function () {
										return this.item_title
									}
								},
								{
									key: 'getElementEditor',
									value: function (t, e) {
										var r = l({}, this.schema.items),
											n = this.jsoneditor.getEditorClass(r, this.jsoneditor),
											i = this.row_holder.appendChild(this.theme.getTableRow()),
											o = i
										this.item_has_child_editors ||
											((o = this.theme.getTableCell()), i.appendChild(o))
										var a = this.jsoneditor.createEditor(n, {
											jsoneditor: this.jsoneditor,
											schema: r,
											container: o,
											path: ''.concat(this.path, '.').concat(t),
											parent: this,
											compact: !0,
											table_row: !0
										})
										return (
											a.preBuild(),
											e ||
												(a.build(),
												a.postBuild(),
												(a.controls_cell = i.appendChild(
													this.theme.getTableCell()
												)),
												(a.row = i),
												(a.table_controls = this.theme.getButtonHolder()),
												a.controls_cell.appendChild(a.table_controls),
												(a.table_controls.style.margin = 0),
												(a.table_controls.style.padding = 0)),
											a
										)
									}
								},
								{
									key: 'destroy',
									value: function () {
										;(this.innerHTML = ''),
											this.checkParent(this.title) &&
												this.title.parentNode.removeChild(this.title),
											this.checkParent(this.description) &&
												this.description.parentNode.removeChild(
													this.description
												),
											this.checkParent(this.row_holder) &&
												this.row_holder.parentNode.removeChild(this.row_holder),
											this.checkParent(this.table) &&
												this.table.parentNode.removeChild(this.table),
											this.checkParent(this.panel) &&
												this.panel.parentNode.removeChild(this.panel),
											(this.rows =
												this.title =
												this.description =
												this.row_holder =
												this.table =
												this.panel =
													null),
											Xn(ti(e.prototype), 'destroy', this).call(this)
									}
								},
								{
									key: 'ensureArraySize',
									value: function (t) {
										if ((Array.isArray(t) || (t = [t]), this.schema.minItems))
											for (; t.length < this.schema.minItems; )
												t.push(this.getItemDefault())
										return (
											this.schema.maxItems &&
												t.length > this.schema.maxItems &&
												(t = t.slice(0, this.schema.maxItems)),
											t
										)
									}
								},
								{
									key: 'setValue',
									value: function () {
										var t = this,
											e =
												arguments.length > 0 && void 0 !== arguments[0]
													? arguments[0]
													: [],
											r = arguments.length > 1 ? arguments[1] : void 0
										if (
											((e = this.applyConstFilter(e)),
											(e = this.ensureArraySize(e)),
											JSON.stringify(e) !== this.serialized)
										) {
											var n = !1
											e.forEach(function (e, r) {
												t.rows[r]
													? t.rows[r].setValue(e)
													: (t.addRow(e), (n = !0))
											})
											for (var i = e.length; i < this.rows.length; i++) {
												var o = this.rows[i].container
												this.item_has_child_editors ||
													this.rows[i].row.parentNode.removeChild(
														this.rows[i].row
													),
													this.rows[i].destroy(),
													o.parentNode && o.parentNode.removeChild(o),
													(this.rows[i] = null),
													(n = !0)
											}
											;(this.rows = this.rows.slice(0, e.length)),
												this.refreshValue(),
												(n || r) && this.refreshRowButtons(),
												this.onChange()
										}
									}
								},
								{
									key: 'refreshRowButtons',
									value: function () {
										var t = this,
											e =
												this.schema.minItems &&
												this.schema.minItems >= this.rows.length,
											r =
												this.schema.maxItems &&
												this.schema.maxItems <= this.rows.length,
											n = []
										this.rows.forEach(function (i, o) {
											if (i.delete_button) {
												var a = !e
												t.setButtonState(i.delete_button, a), n.push(a)
											}
											if (i.copy_button) {
												var s = !r
												t.setButtonState(i.copy_button, s), n.push(s)
											}
											if (i.moveup_button) {
												var l = 0 !== o
												t.setButtonState(i.moveup_button, l), n.push(l)
											}
											if (i.movedown_button) {
												var c = o !== t.rows.length - 1
												t.setButtonState(i.movedown_button, c), n.push(c)
											}
										})
										var i = n.some(function (t) {
											return t
										})
										this.rows.forEach(function (e) {
											return t.setButtonState(e.controls_cell, i)
										}),
											this.setButtonState(this.controls_header_cell, i),
											this.setButtonState(this.table, this.value.length)
										var o = !(r || this.hide_add_button)
										this.setButtonState(this.add_row_button, o)
										var a = !(
											!this.value.length ||
											e ||
											this.hide_delete_last_row_buttons
										)
										this.setButtonState(this.delete_last_row_button, a)
										var s = !(
											this.value.length <= 1 ||
											e ||
											this.hide_delete_all_rows_buttons
										)
										this.setButtonState(this.remove_all_rows_button, s)
										var l = o || a || s
										this.setButtonState(this.controls, l)
									}
								},
								{
									key: 'refreshValue',
									value: function () {
										var t = this
										;(this.value = []),
											this.rows.forEach(function (e, r) {
												t.value[r] = e.getValue()
											}),
											(this.serialized = JSON.stringify(this.value))
									}
								},
								{
									key: 'addRow',
									value: function (t) {
										var e = this.rows.length
										this.rows[e] = this.getElementEditor(e)
										var r = this.rows[e].table_controls
										return (
											this.hide_delete_buttons ||
												(this.rows[e].delete_button = this._createDeleteButton(
													e,
													r
												)),
											this.show_copy_button &&
												(this.rows[e].copy_button = this._createCopyButton(
													e,
													r
												)),
											this.hide_move_buttons ||
												(this.rows[e].moveup_button = this._createMoveUpButton(
													e,
													r
												)),
											this.hide_move_buttons ||
												(this.rows[e].movedown_button =
													this._createMoveDownButton(e, r)),
											this._supportDragDrop(this.rows[e].row),
											void 0 !== t && this.rows[e].setValue(t),
											this.rows[e]
										)
									}
								},
								{
									key: '_createDeleteButton',
									value: function (t, e) {
										var r = this,
											n = this.getButton(
												'',
												'delete',
												'button_delete_row_title_short'
											)
										return (
											n.classList.add('delete', 'json-editor-btntype-delete'),
											n.setAttribute('data-i', t),
											n.addEventListener('click', function (t) {
												if (
													(t.preventDefault(),
													t.stopPropagation(),
													!r.askConfirmation())
												)
													return !1
												var e = 1 * t.currentTarget.getAttribute('data-i'),
													n = r.getValue(),
													i = r.getValue()[e]
												n.splice(e, 1),
													r.setValue(n),
													r.onChange(!0),
													r.jsoneditor.trigger('deleteRow', i)
											}),
											e.appendChild(n),
											n
										)
									}
								},
								{
									key: '_createCopyButton',
									value: function (t, e) {
										var r = this,
											n = this.getButton(
												'',
												'copy',
												'button_copy_row_title_short'
											),
											i = this.schema
										return (
											n.classList.add('copy', 'json-editor-btntype-copy'),
											n.setAttribute('data-i', t),
											n.addEventListener('click', function (t) {
												t.preventDefault(), t.stopPropagation()
												var e = 1 * t.currentTarget.getAttribute('data-i'),
													n = r.getValue(),
													o = n[e]
												'string' === i.items.type && 'uuid' === i.items.format
													? (o = f())
													: 'object' === i.items.type &&
														i.items.properties &&
														n.forEach(function (t, r) {
															if (e === r)
																for (
																	var a = 0, s = Object.keys(t);
																	a < s.length;
																	a++
																) {
																	var l = s[a]
																	i.items.properties &&
																		i.items.properties[l] &&
																		'uuid' === i.items.properties[l].format &&
																		((o = Object.assign({}, n[e]))[l] = f())
																}
														}),
													n.splice(e + 1, 0, o),
													r.setValue(n),
													r.onChange(!0),
													r.jsoneditor.trigger('copyRow', r.rows[e + 1])
											}),
											e.appendChild(n),
											n
										)
									}
								},
								{
									key: '_createMoveUpButton',
									value: function (t, e) {
										var r = this,
											n = this.getButton('', 'moveup', 'button_move_up_title')
										return (
											n.classList.add('moveup', 'json-editor-btntype-move'),
											n.setAttribute('data-i', t),
											n.addEventListener('click', function (t) {
												t.preventDefault(), t.stopPropagation()
												var e = 1 * t.currentTarget.getAttribute('data-i'),
													n = r.getValue()
												n.splice(e - 1, 0, n.splice(e, 1)[0]),
													r.setValue(n),
													r.onChange(!0),
													r.jsoneditor.trigger('moveRow', r.rows[e - 1])
											}),
											e.appendChild(n),
											n
										)
									}
								},
								{
									key: '_createMoveDownButton',
									value: function (t, e) {
										var r = this,
											n = this.getButton(
												'',
												'movedown',
												'button_move_down_title'
											)
										return (
											n.classList.add('movedown', 'json-editor-btntype-move'),
											n.setAttribute('data-i', t),
											n.addEventListener('click', function (t) {
												t.preventDefault(), t.stopPropagation()
												var e = 1 * t.currentTarget.getAttribute('data-i'),
													n = r.getValue()
												n.splice(e + 1, 0, n.splice(e, 1)[0]),
													r.setValue(n),
													r.onChange(!0),
													r.jsoneditor.trigger('moveRow', r.rows[e + 1])
											}),
											e.appendChild(n),
											n
										)
									}
								},
								{
									key: '_supportDragDrop',
									value: function (t) {
										var e = this
										M(
											t,
											function (t, r) {
												var n = e.getValue(),
													i = n[t]
												n.splice(t, 1),
													n.splice(r, 0, i),
													e.setValue(n),
													e.onChange(!0),
													e.jsoneditor.trigger('moveRow', e.rows[r])
											},
											{ useTrigger: !0 }
										)
									}
								},
								{
									key: 'addControls',
									value: function () {
										var t = this
										;(this.collapsed = !1),
											(this.toggle_button = this._createToggleButton()),
											this.title_controls &&
												(this.title.insertBefore(
													this.toggle_button,
													this.title.childNodes[0]
												),
												this.toggle_button.addEventListener(
													'click',
													function (e) {
														e.preventDefault(),
															e.stopPropagation(),
															t.setButtonState(t.panel, t.collapsed),
															t.collapsed
																? ((t.collapsed = !1),
																	t.setButtonText(
																		e.currentTarget,
																		'',
																		'collapse',
																		'button_collapse'
																	))
																: ((t.collapsed = !0),
																	t.setButtonText(
																		e.currentTarget,
																		'',
																		'expand',
																		'button_expand'
																	))
													}
												),
												this.options.collapsed &&
													c(this.toggle_button, 'click'),
												this.schema.options &&
												void 0 !== this.schema.options.disable_collapse
													? this.schema.options.disable_collapse &&
														(this.toggle_button.style.display = 'none')
													: this.jsoneditor.options.disable_collapse &&
														(this.toggle_button.style.display = 'none')),
											(this.add_row_button = this._createAddRowButton()),
											(this.delete_last_row_button =
												this._createDeleteLastRowButton()),
											(this.remove_all_rows_button =
												this._createRemoveAllRowsButton())
									}
								},
								{
									key: '_createToggleButton',
									value: function () {
										var t = this.getButton('', 'collapse', 'button_collapse')
										return t.classList.add('json-editor-btntype-toggle'), t
									}
								},
								{
									key: '_createAddRowButton',
									value: function () {
										var t = this,
											e = this.getButton(
												this.getItemTitle(),
												'add',
												'button_add_row_title',
												[this.getItemTitle()]
											)
										return (
											e.classList.add('json-editor-btntype-add'),
											e.addEventListener('click', function (e) {
												e.preventDefault(), e.stopPropagation()
												var r = t.addRow()
												t.refreshValue(),
													t.refreshRowButtons(),
													t.onChange(!0),
													t.jsoneditor.trigger('addRow', r)
											}),
											this.controls.appendChild(e),
											e
										)
									}
								},
								{
									key: '_createDeleteLastRowButton',
									value: function () {
										var t = this,
											e = this.getButton(
												'button_delete_last',
												'subtract',
												'button_delete_last_title',
												[this.getItemTitle()]
											)
										return (
											e.classList.add('json-editor-btntype-deletelast'),
											e.addEventListener('click', function (e) {
												if (
													(e.preventDefault(),
													e.stopPropagation(),
													!t.askConfirmation())
												)
													return !1
												var r = t.getValue(),
													n = r.pop()
												t.setValue(r),
													t.onChange(!0),
													t.jsoneditor.trigger('deleteRow', n)
											}),
											this.controls.appendChild(e),
											e
										)
									}
								},
								{
									key: '_createRemoveAllRowsButton',
									value: function () {
										var t = this,
											e = this.getButton(
												'button_delete_all',
												'delete',
												'button_delete_all_title'
											)
										return (
											e.classList.add('json-editor-btntype-deleteall'),
											e.addEventListener('click', function (e) {
												if (
													(e.preventDefault(),
													e.stopPropagation(),
													!t.askConfirmation())
												)
													return !1
												var r = t.getValue()
												t.setValue([]),
													t.onChange(!0),
													t.jsoneditor.trigger('deleteAllRows', r)
											}),
											this.controls.appendChild(e),
											e
										)
									}
								}
							]),
							n &&
								(function (t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r]
										;(n.enumerable = n.enumerable || !1),
											(n.configurable = !0),
											'value' in n && (n.writable = !0),
											Object.defineProperty(t, Qn(n.key), n)
									}
								})(r.prototype, n),
							Object.defineProperty(r, 'prototype', { writable: !1 }),
							r
						)
						var r, n
					})(z)
					function ni(t) {
						return (
							(ni =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							ni(t)
						)
					}
					function ii(t) {
						var e = (function (t) {
							if ('object' != ni(t) || !t) return t
							var e = t[Symbol.toPrimitive]
							if (void 0 !== e) {
								var r = e.call(t, 'string')
								if ('object' != ni(r)) return r
								throw new TypeError(
									'@@toPrimitive must return a primitive value.'
								)
							}
							return String(t)
						})(t)
						return 'symbol' == ni(e) ? e : e + ''
					}
					function oi() {
						try {
							var t = !Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							)
						} catch (t) {}
						return (oi = function () {
							return !!t
						})()
					}
					function ai() {
						return (
							(ai =
								'undefined' != typeof Reflect && Reflect.get
									? Reflect.get.bind()
									: function (t, e, r) {
											var n = (function (t, e) {
												for (
													;
													!Object.prototype.hasOwnProperty.call(t, e) &&
													null !== (t = si(t));

												);
												return t
											})(t, e)
											if (n) {
												var i = Object.getOwnPropertyDescriptor(n, e)
												return i.get
													? i.get.call(arguments.length < 3 ? t : r)
													: i.value
											}
										}),
							ai.apply(this, arguments)
						)
					}
					function si(t) {
						return (
							(si = Object.setPrototypeOf
								? Object.getPrototypeOf.bind()
								: function (t) {
										return t.__proto__ || Object.getPrototypeOf(t)
									}),
							si(t)
						)
					}
					function li(t, e) {
						return (
							(li = Object.setPrototypeOf
								? Object.setPrototypeOf.bind()
								: function (t, e) {
										return (t.__proto__ = e), t
									}),
							li(t, e)
						)
					}
					function ci(t) {
						return (
							(ci =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							ci(t)
						)
					}
					function ui(t) {
						var e = (function (t) {
							if ('object' != ci(t) || !t) return t
							var e = t[Symbol.toPrimitive]
							if (void 0 !== e) {
								var r = e.call(t, 'string')
								if ('object' != ci(r)) return r
								throw new TypeError(
									'@@toPrimitive must return a primitive value.'
								)
							}
							return String(t)
						})(t)
						return 'symbol' == ci(e) ? e : e + ''
					}
					function hi() {
						try {
							var t = !Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							)
						} catch (t) {}
						return (hi = function () {
							return !!t
						})()
					}
					function pi() {
						return (
							(pi =
								'undefined' != typeof Reflect && Reflect.get
									? Reflect.get.bind()
									: function (t, e, r) {
											var n = (function (t, e) {
												for (
													;
													!Object.prototype.hasOwnProperty.call(t, e) &&
													null !== (t = di(t));

												);
												return t
											})(t, e)
											if (n) {
												var i = Object.getOwnPropertyDescriptor(n, e)
												return i.get
													? i.get.call(arguments.length < 3 ? t : r)
													: i.value
											}
										}),
							pi.apply(this, arguments)
						)
					}
					function di(t) {
						return (
							(di = Object.setPrototypeOf
								? Object.getPrototypeOf.bind()
								: function (t) {
										return t.__proto__ || Object.getPrototypeOf(t)
									}),
							di(t)
						)
					}
					function fi(t, e) {
						return (
							(fi = Object.setPrototypeOf
								? Object.setPrototypeOf.bind()
								: function (t, e) {
										return (t.__proto__ = e), t
									}),
							fi(t, e)
						)
					}
					function yi(t) {
						return (
							(yi =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							yi(t)
						)
					}
					function mi(t) {
						var e = (function (t) {
							if ('object' != yi(t) || !t) return t
							var e = t[Symbol.toPrimitive]
							if (void 0 !== e) {
								var r = e.call(t, 'string')
								if ('object' != yi(r)) return r
								throw new TypeError(
									'@@toPrimitive must return a primitive value.'
								)
							}
							return String(t)
						})(t)
						return 'symbol' == yi(e) ? e : e + ''
					}
					function vi() {
						try {
							var t = !Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							)
						} catch (t) {}
						return (vi = function () {
							return !!t
						})()
					}
					function bi() {
						return (
							(bi =
								'undefined' != typeof Reflect && Reflect.get
									? Reflect.get.bind()
									: function (t, e, r) {
											var n = (function (t, e) {
												for (
													;
													!Object.prototype.hasOwnProperty.call(t, e) &&
													null !== (t = gi(t));

												);
												return t
											})(t, e)
											if (n) {
												var i = Object.getOwnPropertyDescriptor(n, e)
												return i.get
													? i.get.call(arguments.length < 3 ? t : r)
													: i.value
											}
										}),
							bi.apply(this, arguments)
						)
					}
					function gi(t) {
						return (
							(gi = Object.setPrototypeOf
								? Object.getPrototypeOf.bind()
								: function (t) {
										return t.__proto__ || Object.getPrototypeOf(t)
									}),
							gi(t)
						)
					}
					function wi(t, e) {
						return (
							(wi = Object.setPrototypeOf
								? Object.setPrototypeOf.bind()
								: function (t, e) {
										return (t.__proto__ = e), t
									}),
							wi(t, e)
						)
					}
					r(9868)
					var _i = {
						ace: I,
						array: z,
						arrayChoices: rt,
						arraySelect2: ct,
						arraySelectize: mt,
						autocomplete: jt,
						base64: Lt,
						button: Dt,
						checkbox: Ut,
						choices: ie,
						datetime: he,
						describedBy: be,
						enum: Ce,
						hidden: Re,
						info: Ve,
						integer: Ke,
						ip: or,
						jodit: pr,
						multiple: Pr,
						multiselect: Z,
						null: Br,
						number: $e,
						object: Jr,
						radio: tn,
						sceditor: ln,
						select: Qt,
						select2: yn,
						selectize: kn,
						signature: Sn,
						simplemde: Bn,
						starrating: Mn,
						stepper: Zn,
						string: E,
						table: ri,
						upload: (function (t) {
							function e() {
								return (
									(function (t, e) {
										if (!(t instanceof e))
											throw new TypeError('Cannot call a class as a function')
									})(this, e),
									(function (t, e, r) {
										return (
											(e = si(e)),
											(function (t, e) {
												if (e && ('object' === ni(e) || 'function' == typeof e))
													return e
												if (void 0 !== e)
													throw new TypeError(
														'Derived constructors may only return object or undefined'
													)
												return (function (t) {
													if (void 0 === t)
														throw new ReferenceError(
															"this hasn't been initialised - super() hasn't been called"
														)
													return t
												})(t)
											})(
												t,
												oi()
													? Reflect.construct(e, r || [], si(t).constructor)
													: e.apply(t, r)
											)
										)
									})(this, e, arguments)
								)
							}
							return (
								(function (t, e) {
									if ('function' != typeof e && null !== e)
										throw new TypeError(
											'Super expression must either be null or a function'
										)
									;(t.prototype = Object.create(e && e.prototype, {
										constructor: { value: t, writable: !0, configurable: !0 }
									})),
										Object.defineProperty(t, 'prototype', { writable: !1 }),
										e && li(t, e)
								})(e, t),
								(r = e),
								(n = [
									{
										key: 'getNumColumns',
										value: function () {
											return 4
										}
									},
									{
										key: 'build',
										value: function () {
											var t = this
											if (
												(this.options.compact ||
													(this.header = this.label =
														this.theme.getFormInputLabel(
															this.getTitle(),
															this.isRequired()
														)),
												this.schema.description &&
													(this.description =
														this.theme.getFormInputDescription(
															this.translateProperty(this.schema.description)
														)),
												this.options.infoText &&
													(this.infoButton = this.theme.getInfoButton(
														this.translateProperty(this.options.infoText)
													)),
												this.options.hidden &&
													(this.container.style.display = 'none'),
												(this.options = this.expandCallbacks(
													'upload',
													l(
														{},
														{
															title: 'Browse',
															icon: '',
															auto_upload: !1,
															hide_input: !1,
															enable_drag_drop: !1,
															drop_zone_text: 'Drag & Drop file here',
															drop_zone_top: !1,
															alt_drop_zone: '',
															mime_type: '',
															max_upload_size: 0,
															upload_handler: function (t, e, r, n) {
																window.alert(
																	'No upload_handler defined for "'.concat(
																		t.path,
																		'". You must create your own handler to enable upload to server'
																	)
																)
															}
														},
														this.defaults.options.upload || {},
														this.options.upload || {}
													)
												)),
												(this.options.mime_type = this.options.mime_type
													? [].concat(this.options.mime_type)
													: []),
												(this.input = this.theme.getFormInputField('hidden')),
												this.container.appendChild(this.input),
												!this.schema.readOnly && !this.schema.readonly)
											) {
												if ('function' != typeof this.options.upload_handler)
													throw new Error(
														'Upload handler required for upload editor'
													)
												if (
													((this.uploader =
														this.theme.getFormInputField('file')),
													(this.uploader.style.display = 'none'),
													this.options.mime_type.length &&
														this.uploader.setAttribute(
															'accept',
															this.options.mime_type
														),
													(!0 === this.options.enable_drag_drop &&
														!0 === this.options.hide_input) ||
														((this.clickHandler = function (e) {
															t.uploader.dispatchEvent(
																new window.MouseEvent('click', {
																	view: window,
																	bubbles: !0,
																	cancelable: !1
																})
															)
														}),
														(this.browseButton = this.getButton(
															this.options.title,
															this.options.icon,
															this.options.title
														)),
														this.browseButton.addEventListener(
															'click',
															this.clickHandler
														),
														(this.fileDisplay =
															this.theme.getFormInputField('input')),
														this.fileDisplay.setAttribute('readonly', !0),
														(this.fileDisplay.value = 'No file selected.'),
														this.fileDisplay.addEventListener(
															'dblclick',
															this.clickHandler
														),
														(this.fileUploadGroup = this.theme.getInputGroup(
															this.fileDisplay,
															[this.browseButton]
														)),
														this.fileUploadGroup ||
															((this.fileUploadGroup =
																document.createElement('div')),
															this.fileUploadGroup.appendChild(
																this.fileDisplay
															),
															this.fileUploadGroup.appendChild(
																this.browseButton
															))),
													!0 === this.options.enable_drag_drop)
												) {
													if ('' !== this.options.alt_drop_zone) {
														if (
															((this.altDropZone = document.querySelector(
																this.options.alt_drop_zone
															)),
															!this.altDropZone)
														)
															throw new Error(
																'Error: alt_drop_zone selector "'.concat(
																	this.options.alt_drop_zone,
																	'" not found!'
																)
															)
														this.dropZone = this.altDropZone
													} else
														this.dropZone = this.theme.getDropZone(
															this.options.drop_zone_text
														)
													this.dropZone &&
														(this.dropZone.classList.add('upload-dropzone'),
														this.dropZone.addEventListener(
															'dblclick',
															this.clickHandler
														))
												}
												;(this.uploadHandler = function (e) {
													e.preventDefault(), e.stopPropagation()
													var r = e.target.files || e.dataTransfer.files
													if (r && r.length)
														if (
															0 !== t.options.max_upload_size &&
															r[0].size > t.options.max_upload_size
														)
															t.theme.addInputError(
																t.uploader,
																''
																	.concat(t.translate('upload_max_size'), ' ')
																	.concat(t.options.max_upload_size)
															)
														else if (
															0 === t.options.mime_type.length ||
															t.isValidMimeType(r[0].type, t.options.mime_type)
														) {
															t.fileDisplay && (t.fileDisplay.value = r[0].name)
															var n = new window.FileReader()
															;(n.onload = function (e) {
																;(t.preview_value = e.target.result),
																	t.refreshPreview(r),
																	t.onChange(!0),
																	(n = null)
															}),
																n.readAsDataURL(r[0])
														} else
															t.theme.addInputError(
																t.uploader,
																''
																	.concat(
																		t.translate('upload_wrong_file_format'),
																		' '
																	)
																	.concat(t.options.mime_type.toString())
															)
												}),
													this.uploader.addEventListener(
														'change',
														this.uploadHandler
													),
													(this.dragHandler = function (e) {
														var r =
																e.dataTransfer.items || e.dataTransfer.files,
															n =
																r &&
																r.length &&
																(0 === t.options.mime_type.length ||
																	t.isValidMimeType(
																		r[0].type,
																		t.options.mime_type
																	)),
															i =
																e.currentTarget.classList &&
																e.currentTarget.classList.contains(
																	'upload-dropzone'
																) &&
																n
														switch (
															(e.currentTarget === window ? 'w_' : 'e_') +
															e.type
														) {
															case 'w_drop':
															case 'w_dragover':
																i || (e.dataTransfer.dropEffect = 'none')
																break
															case 'e_dragenter':
																i
																	? (t.dropZone.classList.add('valid-dropzone'),
																		(e.dataTransfer.dropEffect = 'copy'))
																	: t.dropZone.classList.add('invalid-dropzone')
																break
															case 'e_dragover':
																i && (e.dataTransfer.dropEffect = 'copy')
																break
															case 'e_dragleave':
																t.dropZone.classList.remove(
																	'valid-dropzone',
																	'invalid-dropzone'
																)
																break
															case 'e_drop':
																t.dropZone.classList.remove(
																	'valid-dropzone',
																	'invalid-dropzone'
																),
																	i && t.uploadHandler(e)
														}
														i || e.preventDefault()
													}),
													!0 === this.options.enable_drag_drop &&
														(['dragover', 'drop'].forEach(function (e) {
															window.addEventListener(e, t.dragHandler, !0)
														}),
														[
															'dragenter',
															'dragover',
															'dragleave',
															'drop'
														].forEach(function (e) {
															t.dropZone.addEventListener(e, t.dragHandler, !0)
														}))
											}
											;(this.preview = document.createElement('div')),
												(this.control = this.input.controlgroup =
													this.theme.getFormControl(
														this.label,
														this.uploader || this.input,
														this.description,
														this.infoButton
													)),
												this.uploader &&
													(this.uploader.controlgroup = this.control)
											var e = this.uploader || this.input,
												r = document.createElement('div')
											this.dropZone &&
												!this.altDropZone &&
												!0 === this.options.drop_zone_top &&
												r.appendChild(this.dropZone),
												this.fileUploadGroup &&
													r.appendChild(this.fileUploadGroup),
												this.dropZone &&
													!this.altDropZone &&
													!0 !== this.options.drop_zone_top &&
													r.appendChild(this.dropZone),
												r.appendChild(this.preview),
												e.parentNode.insertBefore(r, e.nextSibling),
												this.container.appendChild(this.control),
												window.requestAnimationFrame(function () {
													t.afterInputReady()
												})
										}
									},
									{
										key: 'afterInputReady',
										value: function () {
											var t = this
											if (this.value) {
												var e = document.createElement('img')
												;(e.style.maxWidth = '100%'),
													(e.style.maxHeight = '100px'),
													(e.onload = function (r) {
														t.preview.appendChild(e)
													}),
													(e.onerror = function (t) {
														console.error('upload error', t, t.currentTarget)
													}),
													(e.src = this.container.querySelector('a').href)
											}
											this.theme.afterInputReady(this.input)
										}
									},
									{
										key: 'refreshPreview',
										value: function (t) {
											var e = this
											if (
												this.last_preview !== this.preview_value &&
												((this.last_preview = this.preview_value),
												(this.preview.innerHTML = ''),
												this.preview_value)
											) {
												var r = t[0],
													n = this.preview_value.match(/^data:([^;,]+)[;,]/)
												if (((r.mimeType = n ? n[1] : 'unknown'), r.size > 0)) {
													var i = Math.floor(Math.log(r.size) / Math.log(1024))
													r.formattedSize = ''
														.concat(
															parseFloat(
																(r.size / Math.pow(1024, i)).toFixed(2)
															),
															' '
														)
														.concat(
															[
																'Bytes',
																'KB',
																'MB',
																'GB',
																'TB',
																'PB',
																'EB',
																'ZB',
																'YB'
															][i]
														)
												} else r.formattedSize = '0 Bytes'
												var o = this.getButton(
													'button_upload',
													'upload',
													'button_upload'
												)
												o.addEventListener('click', function (t) {
													t.preventDefault(),
														o.setAttribute('disabled', 'disabled'),
														e.theme.removeInputError(e.uploader),
														e.theme.getProgressBar &&
															((e.progressBar = e.theme.getProgressBar()),
															e.preview.appendChild(e.progressBar)),
														e.options.upload_handler(e.path, r, {
															success: function (t) {
																e.setValue(t),
																	e.parent
																		? e.parent.onChildEditorChange(e)
																		: e.jsoneditor.onChange(),
																	e.progressBar &&
																		e.preview.removeChild(e.progressBar),
																	o.removeAttribute('disabled')
															},
															failure: function (t) {
																e.theme.addInputError(e.uploader, t),
																	e.progressBar &&
																		e.preview.removeChild(e.progressBar),
																	o.removeAttribute('disabled')
															},
															updateProgress: function (t) {
																e.progressBar &&
																	(t
																		? e.theme.updateProgressBar(
																				e.progressBar,
																				t
																			)
																		: e.theme.updateProgressBarUnknown(
																				e.progressBar
																			))
															}
														})
												}),
													this.preview.appendChild(
														this.theme.getUploadPreview(
															r,
															o,
															this.preview_value
														)
													),
													this.options.auto_upload &&
														(o.dispatchEvent(new window.MouseEvent('click')),
														o.parentNode.removeChild(o))
											}
										}
									},
									{
										key: 'enable',
										value: function () {
											this.always_disabled ||
												(this.uploader && (this.uploader.disabled = !1),
												ai(si(e.prototype), 'enable', this).call(this))
										}
									},
									{
										key: 'disable',
										value: function (t) {
											t && (this.always_disabled = !0),
												this.uploader && (this.uploader.disabled = !0),
												ai(si(e.prototype), 'disable', this).call(this)
										}
									},
									{
										key: 'setValue',
										value: function (t) {
											;(t = this.applyConstFilter(t)),
												this.value !== t &&
													((this.value = t),
													(this.input.value = this.value),
													this.onChange())
										}
									},
									{
										key: 'destroy',
										value: function () {
											var t = this
											!0 === this.options.enable_drag_drop &&
												(['dragover', 'drop'].forEach(function (e) {
													window.removeEventListener(e, t.dragHandler, !0)
												}),
												['dragenter', 'dragover', 'dragleave', 'drop'].forEach(
													function (e) {
														t.dropZone.removeEventListener(e, t.dragHandler, !0)
													}
												),
												this.dropZone.removeEventListener(
													'dblclick',
													this.clickHandler
												),
												this.dropZone &&
													this.dropZone.parentNode &&
													this.dropZone.parentNode.removeChild(this.dropZone)),
												this.uploader &&
													this.uploader.parentNode &&
													(this.uploader.removeEventListener(
														'change',
														this.uploadHandler
													),
													this.uploader.parentNode.removeChild(this.uploader)),
												this.browseButton &&
													this.browseButton.parentNode &&
													(this.browseButton.removeEventListener(
														'click',
														this.clickHandler
													),
													this.browseButton.parentNode.removeChild(
														this.browseButton
													)),
												this.fileDisplay &&
													this.fileDisplay.parentNode &&
													(this.fileDisplay.removeEventListener(
														'dblclick',
														this.clickHandler
													),
													this.fileDisplay.parentNode.removeChild(
														this.fileDisplay
													)),
												this.fileUploadGroup &&
													this.fileUploadGroup.parentNode &&
													this.fileUploadGroup.parentNode.removeChild(
														this.fileUploadGroup
													),
												this.preview &&
													this.preview.parentNode &&
													this.preview.parentNode.removeChild(this.preview),
												this.header &&
													this.header.parentNode &&
													this.header.parentNode.removeChild(this.header),
												this.input &&
													this.input.parentNode &&
													this.input.parentNode.removeChild(this.input),
												ai(si(e.prototype), 'destroy', this).call(this)
										}
									},
									{
										key: 'isValidMimeType',
										value: function (t, e) {
											return e.reduce(function (e, r) {
												return (
													e || new RegExp(r.replace(/\*/g, '.*'), 'gi').test(t)
												)
											}, !1)
										}
									}
								]) &&
									(function (t, e) {
										for (var r = 0; r < e.length; r++) {
											var n = e[r]
											;(n.enumerable = n.enumerable || !1),
												(n.configurable = !0),
												'value' in n && (n.writable = !0),
												Object.defineProperty(t, ii(n.key), n)
										}
									})(r.prototype, n),
								Object.defineProperty(r, 'prototype', { writable: !1 }),
								r
							)
							var r, n
						})(w),
						uuid: (function (t) {
							function e() {
								return (
									(function (t, e) {
										if (!(t instanceof e))
											throw new TypeError('Cannot call a class as a function')
									})(this, e),
									(function (t, e, r) {
										return (
											(e = di(e)),
											(function (t, e) {
												if (e && ('object' === ci(e) || 'function' == typeof e))
													return e
												if (void 0 !== e)
													throw new TypeError(
														'Derived constructors may only return object or undefined'
													)
												return (function (t) {
													if (void 0 === t)
														throw new ReferenceError(
															"this hasn't been initialised - super() hasn't been called"
														)
													return t
												})(t)
											})(
												t,
												hi()
													? Reflect.construct(e, r || [], di(t).constructor)
													: e.apply(t, r)
											)
										)
									})(this, e, arguments)
								)
							}
							return (
								(function (t, e) {
									if ('function' != typeof e && null !== e)
										throw new TypeError(
											'Super expression must either be null or a function'
										)
									;(t.prototype = Object.create(e && e.prototype, {
										constructor: { value: t, writable: !0, configurable: !0 }
									})),
										Object.defineProperty(t, 'prototype', { writable: !1 }),
										e && fi(t, e)
								})(e, t),
								(r = e),
								(n = [
									{
										key: 'preBuild',
										value: function () {
											pi(di(e.prototype), 'preBuild', this).call(this),
												(this.schema.default = this.uuid = this.getUuid()),
												this.schema.options || (this.schema.options = {}),
												this.schema.options.cleave ||
													(this.schema.options.cleave = {
														delimiters: ['-'],
														blocks: [8, 4, 4, 4, 12]
													})
										}
									},
									{
										key: 'build',
										value: function () {
											pi(di(e.prototype), 'build', this).call(this),
												this.disable(!0),
												this.input.setAttribute('readonly', 'true')
										}
									},
									{
										key: 'sanitize',
										value: function (t) {
											return this.testUuid(t) || (t = this.uuid), t
										}
									},
									{
										key: 'setValue',
										value: function (t, r, n) {
											;(t = this.applyConstFilter(t)),
												this.testUuid(t) || (t = this.uuid),
												(this.uuid = t),
												pi(di(e.prototype), 'setValue', this).call(
													this,
													t,
													r,
													n
												)
										}
									},
									{
										key: 'getUuid',
										value: function () {
											return f()
										}
									},
									{
										key: 'testUuid',
										value: function (t) {
											return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
												t
											)
										}
									}
								]) &&
									(function (t, e) {
										for (var r = 0; r < e.length; r++) {
											var n = e[r]
											;(n.enumerable = n.enumerable || !1),
												(n.configurable = !0),
												'value' in n && (n.writable = !0),
												Object.defineProperty(t, ui(n.key), n)
										}
									})(r.prototype, n),
								Object.defineProperty(r, 'prototype', { writable: !1 }),
								r
							)
							var r, n
						})(E),
						colorpicker: (function (t) {
							function e() {
								return (
									(function (t, e) {
										if (!(t instanceof e))
											throw new TypeError('Cannot call a class as a function')
									})(this, e),
									(function (t, e, r) {
										return (
											(e = gi(e)),
											(function (t, e) {
												if (e && ('object' === yi(e) || 'function' == typeof e))
													return e
												if (void 0 !== e)
													throw new TypeError(
														'Derived constructors may only return object or undefined'
													)
												return (function (t) {
													if (void 0 === t)
														throw new ReferenceError(
															"this hasn't been initialised - super() hasn't been called"
														)
													return t
												})(t)
											})(
												t,
												vi()
													? Reflect.construct(e, r || [], gi(t).constructor)
													: e.apply(t, r)
											)
										)
									})(this, e, arguments)
								)
							}
							return (
								(function (t, e) {
									if ('function' != typeof e && null !== e)
										throw new TypeError(
											'Super expression must either be null or a function'
										)
									;(t.prototype = Object.create(e && e.prototype, {
										constructor: { value: t, writable: !0, configurable: !0 }
									})),
										Object.defineProperty(t, 'prototype', { writable: !1 }),
										e && wi(t, e)
								})(e, t),
								(r = e),
								(n = [
									{
										key: 'postBuild',
										value: function () {
											window.Picker && (this.input.type = 'text'),
												(this.input.style.padding = '3px')
										}
									},
									{
										key: 'setValue',
										value: function (t, r, n) {
											t = this.applyConstFilter(t)
											var i = bi(gi(e.prototype), 'setValue', this).call(
												this,
												t,
												r,
												n
											)
											return (
												this.picker_instance &&
													this.picker_instance.domElement &&
													i &&
													i.changed &&
													this.picker_instance.setColor(i.value, !0),
												i
											)
										}
									},
									{
										key: 'getNumColumns',
										value: function () {
											return 2
										}
									},
									{
										key: 'afterInputReady',
										value: function () {
											bi(gi(e.prototype), 'afterInputReady', this).call(this),
												this.createPicker(!0)
										}
									},
									{
										key: 'disable',
										value: function () {
											if (
												(bi(gi(e.prototype), 'disable', this).call(this),
												this.picker_instance && this.picker_instance.domElement)
											) {
												this.picker_instance.domElement.style.pointerEvents =
													'none'
												for (
													var t =
															this.picker_instance.domElement.querySelectorAll(
																'button'
															),
														r = 0;
													r < t.length;
													r++
												)
													t[r].disabled = !0
											}
										}
									},
									{
										key: 'enable',
										value: function () {
											if (
												(bi(gi(e.prototype), 'enable', this).call(this),
												this.picker_instance && this.picker_instance.domElement)
											) {
												this.picker_instance.domElement.style.pointerEvents =
													'auto'
												for (
													var t =
															this.picker_instance.domElement.querySelectorAll(
																'button'
															),
														r = 0;
													r < t.length;
													r++
												)
													t[r].disabled = !1
											}
										}
									},
									{
										key: 'destroy',
										value: function () {
											this.createPicker(!1),
												bi(gi(e.prototype), 'destroy', this).call(this)
										}
									},
									{
										key: 'createPicker',
										value: function (t) {
											var e = this
											if (t) {
												if (window.Picker && !this.picker_instance) {
													var r = this.expandCallbacks(
															'colorpicker',
															l(
																{},
																{
																	editor: !1,
																	alpha: !1,
																	color: this.value,
																	popup: 'bottom'
																},
																this.defaults.options.colorpicker || {},
																this.options.colorpicker || {},
																{ parent: this.container }
															)
														),
														n = function (t) {
															var r = e.picker_instance.settings.editorFormat,
																n = e.picker_instance.settings.alpha
															e.setValue(
																'hex' === r
																	? n
																		? t.hex
																		: t.hex.slice(0, 7)
																	: t[''.concat(r + (n ? 'a' : ''), 'String')]
															)
														}
													r.popup || 'function' == typeof r.onChange
														? r.popup &&
															'function' != typeof r.onDone &&
															(r.onDone = n)
														: (r.onChange = n),
														(this.picker_instance = new window.Picker(r)),
														r.popup ||
															((this.input.style.display = 'none'),
															this.theme.afterInputReady(
																this.picker_instance.domElement
															))
												}
											} else
												this.picker_instance &&
													(this.picker_instance.destroy(),
													(this.picker_instance = null),
													(this.input.style.display = ''))
										}
									}
								]) &&
									(function (t, e) {
										for (var r = 0; r < e.length; r++) {
											var n = e[r]
											;(n.enumerable = n.enumerable || !1),
												(n.configurable = !0),
												'value' in n && (n.writable = !0),
												Object.defineProperty(t, mi(n.key), n)
										}
									})(r.prototype, n),
								Object.defineProperty(r, 'prototype', { writable: !1 }),
								r
							)
							var r, n
						})(E)
					}
					function ki(t, e) {
						;(null == e || e > t.length) && (e = t.length)
						for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r]
						return n
					}
					var ji = {},
						Oi = 'en',
						xi = Oi
					;(ji.en = {
						error_notset: 'Property must be set',
						error_notempty: 'Value required',
						error_enum: 'Value must be one of the enumerated values',
						error_const: 'Value must be the constant value',
						error_anyOf:
							'Value must validate against at least one of the provided schemas',
						error_oneOf:
							'Value must validate against exactly one of the provided schemas. It currently validates against {{0}} of the schemas.',
						error_not: 'Value must not validate against the provided schema',
						error_type_union: 'Value must be one of the provided types',
						error_type: 'Value must be of type {{0}}',
						error_disallow_union:
							'Value must not be one of the provided disallowed types',
						error_disallow: 'Value must not be of type {{0}}',
						error_multipleOf: 'Value must be a multiple of {{0}}',
						error_maximum_excl: 'Value must be less than {{0}}',
						error_maximum_incl: 'Value must be at most {{0}}',
						error_minimum_excl: 'Value must be greater than {{0}}',
						error_minimum_incl: 'Value must be at least {{0}}',
						error_maxLength: 'Value must be at most {{0}} characters long',
						error_contains: 'No items match contains',
						error_minContains:
							'Contains match count {{0}} is less than minimum contains count of {{1}}',
						error_maxContains:
							'Contains match count {{0}} exceeds maximum contains count of {{1}}',
						error_minLength: 'Value must be at least {{0}} characters long',
						error_pattern: 'Value must match the pattern {{0}}',
						error_additionalItems: 'No additional items allowed in this array',
						error_maxItems: 'Value must have at most {{0}} items',
						error_minItems: 'Value must have at least {{0}} items',
						error_uniqueItems: 'Array must have unique items',
						error_maxProperties: 'Object must have at most {{0}} properties',
						error_minProperties: 'Object must have at least {{0}} properties',
						error_required: "Object is missing the required property '{{0}}'",
						error_additional_properties:
							'No additional properties allowed, but property {{0}} is set',
						error_property_names_exceeds_maxlength:
							'Property name {{0}} exceeds maxLength',
						error_property_names_enum_mismatch:
							'Property name {{0}} does not match any enum values',
						error_property_names_const_mismatch:
							'Property name {{0}} does not match the const value',
						error_property_names_pattern_mismatch:
							'Property name {{0}} does not match pattern',
						error_property_names_false:
							'Property name {{0}} fails when propertyName is false',
						error_property_names_maxlength:
							'Property name {{0}} cannot match invalid maxLength',
						error_property_names_enum:
							'Property name {{0}} cannot match invalid enum',
						error_property_names_pattern:
							'Property name {{0}} cannot match invalid pattern',
						error_property_names_unsupported: 'Unsupported propertyName {{0}}',
						error_dependency: 'Must have property {{0}}',
						error_date: 'Date must be in the format {{0}}',
						error_time: 'Time must be in the format {{0}}',
						error_datetime_local: 'Datetime must be in the format {{0}}',
						error_invalid_epoch: 'Date must be greater than 1 January 1970',
						error_ipv4:
							'Value must be a valid IPv4 address in the form of 4 numbers between 0 and 255, separated by dots',
						error_ipv6: 'Value must be a valid IPv6 address',
						error_hostname: 'The hostname has the wrong format',
						upload_max_size: 'Filesize too large. Max size is ',
						upload_wrong_file_format: 'Wrong file format. Allowed format(s): ',
						button_save: 'Save',
						button_copy: 'Copy',
						button_cancel: 'Cancel',
						button_add: 'Add',
						button_delete_all: 'All',
						button_delete_all_title: 'Delete All',
						button_delete_last: 'Last {{0}}',
						button_delete_last_title: 'Delete Last {{0}}',
						button_add_row_title: 'Add {{0}}',
						button_move_down_title: 'Move down',
						button_move_up_title: 'Move up',
						button_properties: 'Properties',
						button_object_properties: 'Object Properties',
						button_copy_row_title: 'Copy {{0}}',
						button_delete_row_title: 'Delete {{0}}',
						button_delete_row_title_short: 'Delete',
						button_copy_row_title_short: 'Copy',
						button_collapse: 'Collapse',
						button_expand: 'Expand',
						button_edit_json: 'Edit JSON',
						button_upload: 'Upload',
						flatpickr_toggle_button: 'Toggle',
						flatpickr_clear_button: 'Clear',
						choices_placeholder_text: 'Start typing to add value',
						default_array_item_title: 'item',
						button_delete_node_warning:
							'Are you sure you want to remove this item?',
						table_controls: 'Controls',
						paste_max_length_reached:
							'Pasted text exceeded maximum length of {{0}} and will be clipped.'
					}),
						Object.entries(_i).forEach(function (t) {
							var e = (function (t) {
									return (
										(function (t) {
											if (Array.isArray(t)) return t
										})(t) ||
										(function (t) {
											var e =
												null == t
													? null
													: ('undefined' != typeof Symbol &&
															t[Symbol.iterator]) ||
														t['@@iterator']
											if (null != e) {
												var r,
													n,
													i,
													o,
													a = [],
													s = !0,
													l = !1
												try {
													for (
														i = (e = e.call(t)).next;
														!(s = (r = i.call(e)).done) &&
														(a.push(r.value), 2 !== a.length);
														s = !0
													);
												} catch (t) {
													;(l = !0), (n = t)
												} finally {
													try {
														if (
															!s &&
															null != e.return &&
															((o = e.return()), Object(o) !== o)
														)
															return
													} finally {
														if (l) throw n
													}
												}
												return a
											}
										})(t) ||
										(function (t) {
											if (t) {
												if ('string' == typeof t) return ki(t, 2)
												var e = Object.prototype.toString.call(t).slice(8, -1)
												return (
													'Object' === e &&
														t.constructor &&
														(e = t.constructor.name),
													'Map' === e || 'Set' === e
														? Array.from(t)
														: 'Arguments' === e ||
															  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
																	e
															  )
															? ki(t, 2)
															: void 0
												)
											}
										})(t) ||
										(function () {
											throw new TypeError(
												'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
											)
										})()
									)
								})(t),
								r = e[0],
								n = e[1]
							_i[r].options = n.options || {}
						})
					var Ci = {
						options: {
							upload: function (t, e, r) {
								console.log('Upload handler required for upload editor')
							},
							use_name_attributes: !0,
							prompt_before_delete: !0,
							use_default_values: !0,
							max_depth: 0,
							button_state_mode: 1,
							case_sensitive_property_search: !0,
							show_errors: 'interaction',
							prompt_paste_max_length_reached: !1,
							remove_false_properties: !1,
							enforce_const: !1,
							opt_in_widget: 'checkbox'
						},
						theme: 'html',
						template: 'default',
						themes: {},
						callbacks: {},
						templates: {},
						iconlibs: {},
						editors: _i,
						languages: ji,
						resolvers: e,
						custom_validators: [],
						default_language: Oi,
						language: xi,
						translate: function (t, e, r) {
							var n = {}
							r &&
								r.options &&
								r.options.error_messages &&
								r.options.error_messages[Ci.language] &&
								(n = r.options.error_messages[Ci.language])
							var i = Ci.languages[Ci.language]
							if (!i) throw new Error('Unknown language '.concat(Ci.language))
							var o = n[t] || i[t] || Ci.languages[Oi][t] || t
							if (e)
								for (var a = 0; a < e.length; a++)
									o = o.replace(new RegExp('\\{\\{'.concat(a, '}}'), 'g'), e[a])
							return o
						},
						translateProperty: function (t, e) {
							return t
						}
					}
					function Ei() {
						Ei = function () {
							return e
						}
						var t,
							e = {},
							r = Object.prototype,
							n = r.hasOwnProperty,
							i =
								Object.defineProperty ||
								function (t, e, r) {
									t[e] = r.value
								},
							o = 'function' == typeof Symbol ? Symbol : {},
							a = o.iterator || '@@iterator',
							s = o.asyncIterator || '@@asyncIterator',
							l = o.toStringTag || '@@toStringTag'
						function c(t, e, r) {
							return (
								Object.defineProperty(t, e, {
									value: r,
									enumerable: !0,
									configurable: !0,
									writable: !0
								}),
								t[e]
							)
						}
						try {
							c({}, '')
						} catch (t) {
							c = function (t, e, r) {
								return (t[e] = r)
							}
						}
						function u(t, e, r, n) {
							var o = e && e.prototype instanceof v ? e : v,
								a = Object.create(o.prototype),
								s = new L(n || [])
							return i(a, '_invoke', { value: C(t, r, s) }), a
						}
						function h(t, e, r) {
							try {
								return { type: 'normal', arg: t.call(e, r) }
							} catch (t) {
								return { type: 'throw', arg: t }
							}
						}
						e.wrap = u
						var p = 'suspendedStart',
							d = 'suspendedYield',
							f = 'executing',
							y = 'completed',
							m = {}
						function v() {}
						function b() {}
						function g() {}
						var w = {}
						c(w, a, function () {
							return this
						})
						var _ = Object.getPrototypeOf,
							k = _ && _(_(T([])))
						k && k !== r && n.call(k, a) && (w = k)
						var j = (g.prototype = v.prototype = Object.create(w))
						function O(t) {
							;['next', 'throw', 'return'].forEach(function (e) {
								c(t, e, function (t) {
									return this._invoke(e, t)
								})
							})
						}
						function x(t, e) {
							function r(i, o, a, s) {
								var l = h(t[i], t, o)
								if ('throw' !== l.type) {
									var c = l.arg,
										u = c.value
									return u && 'object' == Ai(u) && n.call(u, '__await')
										? e.resolve(u.__await).then(
												function (t) {
													r('next', t, a, s)
												},
												function (t) {
													r('throw', t, a, s)
												}
											)
										: e.resolve(u).then(
												function (t) {
													;(c.value = t), a(c)
												},
												function (t) {
													return r('throw', t, a, s)
												}
											)
								}
								s(l.arg)
							}
							var o
							i(this, '_invoke', {
								value: function (t, n) {
									function i() {
										return new e(function (e, i) {
											r(t, n, e, i)
										})
									}
									return (o = o ? o.then(i, i) : i())
								}
							})
						}
						function C(e, r, n) {
							var i = p
							return function (o, a) {
								if (i === f) throw Error('Generator is already running')
								if (i === y) {
									if ('throw' === o) throw a
									return { value: t, done: !0 }
								}
								for (n.method = o, n.arg = a; ; ) {
									var s = n.delegate
									if (s) {
										var l = E(s, n)
										if (l) {
											if (l === m) continue
											return l
										}
									}
									if ('next' === n.method) n.sent = n._sent = n.arg
									else if ('throw' === n.method) {
										if (i === p) throw ((i = y), n.arg)
										n.dispatchException(n.arg)
									} else 'return' === n.method && n.abrupt('return', n.arg)
									i = f
									var c = h(e, r, n)
									if ('normal' === c.type) {
										if (((i = n.done ? y : d), c.arg === m)) continue
										return { value: c.arg, done: n.done }
									}
									'throw' === c.type &&
										((i = y), (n.method = 'throw'), (n.arg = c.arg))
								}
							}
						}
						function E(e, r) {
							var n = r.method,
								i = e.iterator[n]
							if (i === t)
								return (
									(r.delegate = null),
									('throw' === n &&
										e.iterator.return &&
										((r.method = 'return'),
										(r.arg = t),
										E(e, r),
										'throw' === r.method)) ||
										('return' !== n &&
											((r.method = 'throw'),
											(r.arg = new TypeError(
												"The iterator does not provide a '" + n + "' method"
											)))),
									m
								)
							var o = h(i, e.iterator, r.arg)
							if ('throw' === o.type)
								return (
									(r.method = 'throw'), (r.arg = o.arg), (r.delegate = null), m
								)
							var a = o.arg
							return a
								? a.done
									? ((r[e.resultName] = a.value),
										(r.next = e.nextLoc),
										'return' !== r.method && ((r.method = 'next'), (r.arg = t)),
										(r.delegate = null),
										m)
									: a
								: ((r.method = 'throw'),
									(r.arg = new TypeError('iterator result is not an object')),
									(r.delegate = null),
									m)
						}
						function S(t) {
							var e = { tryLoc: t[0] }
							1 in t && (e.catchLoc = t[1]),
								2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
								this.tryEntries.push(e)
						}
						function P(t) {
							var e = t.completion || {}
							;(e.type = 'normal'), delete e.arg, (t.completion = e)
						}
						function L(t) {
							;(this.tryEntries = [{ tryLoc: 'root' }]),
								t.forEach(S, this),
								this.reset(!0)
						}
						function T(e) {
							if (e || '' === e) {
								var r = e[a]
								if (r) return r.call(e)
								if ('function' == typeof e.next) return e
								if (!isNaN(e.length)) {
									var i = -1,
										o = function r() {
											for (; ++i < e.length; )
												if (n.call(e, i))
													return (r.value = e[i]), (r.done = !1), r
											return (r.value = t), (r.done = !0), r
										}
									return (o.next = o)
								}
							}
							throw new TypeError(Ai(e) + ' is not iterable')
						}
						return (
							(b.prototype = g),
							i(j, 'constructor', { value: g, configurable: !0 }),
							i(g, 'constructor', { value: b, configurable: !0 }),
							(b.displayName = c(g, l, 'GeneratorFunction')),
							(e.isGeneratorFunction = function (t) {
								var e = 'function' == typeof t && t.constructor
								return (
									!!e &&
									(e === b || 'GeneratorFunction' === (e.displayName || e.name))
								)
							}),
							(e.mark = function (t) {
								return (
									Object.setPrototypeOf
										? Object.setPrototypeOf(t, g)
										: ((t.__proto__ = g), c(t, l, 'GeneratorFunction')),
									(t.prototype = Object.create(j)),
									t
								)
							}),
							(e.awrap = function (t) {
								return { __await: t }
							}),
							O(x.prototype),
							c(x.prototype, s, function () {
								return this
							}),
							(e.AsyncIterator = x),
							(e.async = function (t, r, n, i, o) {
								void 0 === o && (o = Promise)
								var a = new x(u(t, r, n, i), o)
								return e.isGeneratorFunction(r)
									? a
									: a.next().then(function (t) {
											return t.done ? t.value : a.next()
										})
							}),
							O(j),
							c(j, l, 'Generator'),
							c(j, a, function () {
								return this
							}),
							c(j, 'toString', function () {
								return '[object Generator]'
							}),
							(e.keys = function (t) {
								var e = Object(t),
									r = []
								for (var n in e) r.push(n)
								return (
									r.reverse(),
									function t() {
										for (; r.length; ) {
											var n = r.pop()
											if (n in e) return (t.value = n), (t.done = !1), t
										}
										return (t.done = !0), t
									}
								)
							}),
							(e.values = T),
							(L.prototype = {
								constructor: L,
								reset: function (e) {
									if (
										((this.prev = 0),
										(this.next = 0),
										(this.sent = this._sent = t),
										(this.done = !1),
										(this.delegate = null),
										(this.method = 'next'),
										(this.arg = t),
										this.tryEntries.forEach(P),
										!e)
									)
										for (var r in this)
											't' === r.charAt(0) &&
												n.call(this, r) &&
												!isNaN(+r.slice(1)) &&
												(this[r] = t)
								},
								stop: function () {
									this.done = !0
									var t = this.tryEntries[0].completion
									if ('throw' === t.type) throw t.arg
									return this.rval
								},
								dispatchException: function (e) {
									if (this.done) throw e
									var r = this
									function i(n, i) {
										return (
											(s.type = 'throw'),
											(s.arg = e),
											(r.next = n),
											i && ((r.method = 'next'), (r.arg = t)),
											!!i
										)
									}
									for (var o = this.tryEntries.length - 1; o >= 0; --o) {
										var a = this.tryEntries[o],
											s = a.completion
										if ('root' === a.tryLoc) return i('end')
										if (a.tryLoc <= this.prev) {
											var l = n.call(a, 'catchLoc'),
												c = n.call(a, 'finallyLoc')
											if (l && c) {
												if (this.prev < a.catchLoc) return i(a.catchLoc, !0)
												if (this.prev < a.finallyLoc) return i(a.finallyLoc)
											} else if (l) {
												if (this.prev < a.catchLoc) return i(a.catchLoc, !0)
											} else {
												if (!c)
													throw Error('try statement without catch or finally')
												if (this.prev < a.finallyLoc) return i(a.finallyLoc)
											}
										}
									}
								},
								abrupt: function (t, e) {
									for (var r = this.tryEntries.length - 1; r >= 0; --r) {
										var i = this.tryEntries[r]
										if (
											i.tryLoc <= this.prev &&
											n.call(i, 'finallyLoc') &&
											this.prev < i.finallyLoc
										) {
											var o = i
											break
										}
									}
									o &&
										('break' === t || 'continue' === t) &&
										o.tryLoc <= e &&
										e <= o.finallyLoc &&
										(o = null)
									var a = o ? o.completion : {}
									return (
										(a.type = t),
										(a.arg = e),
										o
											? ((this.method = 'next'), (this.next = o.finallyLoc), m)
											: this.complete(a)
									)
								},
								complete: function (t, e) {
									if ('throw' === t.type) throw t.arg
									return (
										'break' === t.type || 'continue' === t.type
											? (this.next = t.arg)
											: 'return' === t.type
												? ((this.rval = this.arg = t.arg),
													(this.method = 'return'),
													(this.next = 'end'))
												: 'normal' === t.type && e && (this.next = e),
										m
									)
								},
								finish: function (t) {
									for (var e = this.tryEntries.length - 1; e >= 0; --e) {
										var r = this.tryEntries[e]
										if (r.finallyLoc === t)
											return this.complete(r.completion, r.afterLoc), P(r), m
									}
								},
								catch: function (t) {
									for (var e = this.tryEntries.length - 1; e >= 0; --e) {
										var r = this.tryEntries[e]
										if (r.tryLoc === t) {
											var n = r.completion
											if ('throw' === n.type) {
												var i = n.arg
												P(r)
											}
											return i
										}
									}
									throw Error('illegal catch attempt')
								},
								delegateYield: function (e, r, n) {
									return (
										(this.delegate = {
											iterator: T(e),
											resultName: r,
											nextLoc: n
										}),
										'next' === this.method && (this.arg = t),
										m
									)
								}
							}),
							e
						)
					}
					function Si(t, e, r, n, i, o, a) {
						try {
							var s = t[o](a),
								l = s.value
						} catch (t) {
							return void r(t)
						}
						s.done ? e(l) : Promise.resolve(l).then(n, i)
					}
					function Pi(t) {
						return function () {
							var e = this,
								r = arguments
							return new Promise(function (n, i) {
								var o = t.apply(e, r)
								function a(t) {
									Si(o, n, i, a, s, 'next', t)
								}
								function s(t) {
									Si(o, n, i, a, s, 'throw', t)
								}
								a(void 0)
							})
						}
					}
					function Li(t, e) {
						return (
							(function (t) {
								if (Array.isArray(t)) return t
							})(t) ||
							(function (t, e) {
								var r =
									null == t
										? null
										: ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
											t['@@iterator']
								if (null != r) {
									var n,
										i,
										o,
										a,
										s = [],
										l = !0,
										c = !1
									try {
										if (((o = (r = r.call(t)).next), 0 === e)) {
											if (Object(r) !== r) return
											l = !1
										} else
											for (
												;
												!(l = (n = o.call(r)).done) &&
												(s.push(n.value), s.length !== e);
												l = !0
											);
									} catch (t) {
										;(c = !0), (i = t)
									} finally {
										try {
											if (
												!l &&
												null != r.return &&
												((a = r.return()), Object(a) !== a)
											)
												return
										} finally {
											if (c) throw i
										}
									}
									return s
								}
							})(t, e) ||
							(function (t, e) {
								if (t) {
									if ('string' == typeof t) return Ti(t, e)
									var r = Object.prototype.toString.call(t).slice(8, -1)
									return (
										'Object' === r && t.constructor && (r = t.constructor.name),
										'Map' === r || 'Set' === r
											? Array.from(t)
											: 'Arguments' === r ||
												  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
												? Ti(t, e)
												: void 0
									)
								}
							})(t, e) ||
							(function () {
								throw new TypeError(
									'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
								)
							})()
						)
					}
					function Ti(t, e) {
						;(null == e || e > t.length) && (e = t.length)
						for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r]
						return n
					}
					function Ai(t) {
						return (
							(Ai =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							Ai(t)
						)
					}
					function Ri(t) {
						var e = (function (t) {
							if ('object' != Ai(t) || !t) return t
							var e = t[Symbol.toPrimitive]
							if (void 0 !== e) {
								var r = e.call(t, 'string')
								if ('object' != Ai(r)) return r
								throw new TypeError(
									'@@toPrimitive must return a primitive value.'
								)
							}
							return String(t)
						})(t)
						return 'symbol' == Ai(e) ? e : e + ''
					}
					r(1688)
					var Ii = (function () {
							return (
								(t = function t(e) {
									!(function (t, e) {
										if (!(t instanceof e))
											throw new TypeError('Cannot call a class as a function')
									})(this, t),
										(this.options = e || {}),
										(this.schema = {}),
										(this.refs = this.options.refs || {}),
										(this.refs_with_info = {}),
										(this.refs_prefix = '#/counter/'),
										(this.refs_counter = 1),
										(this._subSchema1 = {
											type: function (t) {
												'object' === Ai(t.type) &&
													(t.type = this._expandSubSchema(t.type))
											},
											disallow: function (t) {
												'object' === Ai(t.disallow) &&
													(t.disallow = this._expandSubSchema(t.disallow))
											},
											anyOf: function (t) {
												var e = this
												Object.entries(t.anyOf).forEach(function (r) {
													var n = Li(r, 2),
														i = n[0],
														o = n[1]
													t.anyOf[i] = e.expandSchema(o)
												})
											},
											dependencies: function (t) {
												var e = this
												Object.entries(t.dependencies).forEach(function (r) {
													var n = Li(r, 2),
														i = n[0],
														o = n[1]
													'object' !== Ai(o) ||
														Array.isArray(o) ||
														(t.dependencies[i] = e.expandSchema(o))
												})
											},
											not: function (t) {
												t.not = this.expandSchema(t.not)
											}
										}),
										(this._subSchema2 = {
											allOf: function (t, e) {
												var r = this,
													n = l({}, e)
												return (
													Object.entries(t.allOf).forEach(function (e) {
														var i = Li(e, 2),
															o = i[0],
															a = i[1]
														;(t.allOf[o] = r.expandRefs(a, !0)),
															(n = r.extendSchemas(n, r.expandSchema(a)))
													}),
													delete n.allOf,
													n
												)
											},
											extends: function (t, e) {
												var r,
													n = this
												return (
													delete (r = Array.isArray(t.extends)
														? t.extends.reduce(function (t, e, r) {
																return n.extendSchemas(t, n.expandSchema(e))
															}, e)
														: this.extendSchemas(
																e,
																this.expandSchema(t.extends)
															)).extends,
													r
												)
											},
											oneOf: function (t, e) {
												var r = this,
													n = l({}, e)
												return (
													delete n.oneOf,
													t.oneOf.reduce(function (t, e, i) {
														return (
															(t.oneOf[i] = r.extendSchemas(
																r.expandSchema(e),
																n
															)),
															t
														)
													}, e),
													e
												)
											}
										})
								}),
								(e = [
									{
										key: 'load',
										value:
											((n = Pi(
												Ei().mark(function t(e, r, n) {
													return Ei().wrap(
														function (t) {
															for (;;)
																switch ((t.prev = t.next)) {
																	case 0:
																		return (
																			(this.schema = e),
																			(t.next = 3),
																			this._asyncloadExternalRefs(
																				e,
																				r,
																				this._getFileBase(n),
																				!0
																			)
																		)
																	case 3:
																		return t.abrupt(
																			'return',
																			this.expandRefs(e)
																		)
																	case 4:
																	case 'end':
																		return t.stop()
																}
														},
														t,
														this
													)
												})
											)),
											function (t, e, r) {
												return n.apply(this, arguments)
											})
									},
									{
										key: 'expandRefs',
										value: function (t, e) {
											var r = this,
												n = l({}, t)
											if (!n.$ref) return n
											var i = n.$ref.split('#')
											if (2 === i.length && !this.refs_with_info[n.$ref]) {
												var o = this.expandRecursivePointer(this.schema, i[1]),
													a = this.extendSchemas(n, this.expandSchema(o))
												return delete a.$ref, a
											}
											var s =
												i.length > 2
													? this.refs_with_info['#' + i[1]]
													: this.refs_with_info[n.$ref]
											delete n.$ref
											var c = s.$ref.startsWith('#') ? s.fetchUrl : '',
												u = this._getRef(c, s)
											if (this.refs[u]) {
												if (e && h(this.refs[u], 'allOf')) {
													var p = this.refs[u].allOf
													Object.keys(p).forEach(function (t) {
														p[t] = r.expandRefs(p[t], !0)
													})
												}
											} else
												console.warn("reference:'".concat(u, "' not found!"))
											return i.length > 2
												? this.extendSchemas(
														n,
														this.expandSchema(
															this.expandRecursivePointer(this.refs[u], i[2])
														)
													)
												: this.extendSchemas(n, this.expandSchema(this.refs[u]))
										}
									},
									{
										key: 'expandRecursivePointer',
										value: function (t, e) {
											var r = t
											return (
												e
													.split('/')
													.slice(1)
													.forEach(function (t) {
														r[t] && (r = r[t])
													}),
												r.$refs && r.$refs.startsWith('#')
													? this.expandRecursivePointer(t, r.$refs)
													: r
											)
										}
									},
									{
										key: 'expandSchema',
										value: function (t) {
											var e = this
											Object.entries(this._subSchema1).forEach(function (r) {
												var n = Li(r, 2),
													i = n[0],
													o = n[1]
												t[i] && o.call(e, t)
											})
											var r = l({}, t)
											return (
												Object.entries(this._subSchema2).forEach(function (n) {
													var i = Li(n, 2),
														o = i[0],
														a = i[1]
													t[o] && (r = a.call(e, t, r))
												}),
												this.expandRefs(r)
											)
										}
									},
									{
										key: '_getRef',
										value: function (t, e) {
											var r = t + e
											return this.refs[r] ? r : t + decodeURIComponent(e.$ref)
										}
									},
									{
										key: '_expandSubSchema',
										value: function (t) {
											var e = this
											return Array.isArray(t)
												? t.map(function (t) {
														return 'object' === Ai(t) ? e.expandSchema(t) : t
													})
												: this.expandSchema(t)
										}
									},
									{
										key: '_manageRecursivePointer',
										value: function (t, e) {
											Object.keys(t).forEach(function (r) {
												null !== t[r] &&
													t[r].$ref &&
													0 === t[r].$ref.indexOf('#') &&
													(t[r].$ref = e + t[r].$ref)
											})
										}
									},
									{
										key: '_getExternalRefs',
										value: function (t, e) {
											var r = this,
												n =
													arguments.length > 2 &&
													void 0 !== arguments[2] &&
													arguments[2]
											n || this._manageRecursivePointer(t, e)
											var i = {},
												o = function (t) {
													return Object.keys(t).forEach(function (t) {
														i[t] = !0
													})
												}
											if (
												t.$ref &&
												'object' !== Ai(t.$ref) &&
												(0 !== t.$ref.indexOf('#') || !n)
											) {
												var a = t.$ref,
													s = ''
												a.indexOf('#') > 0 && (a = a.substr(0, a.indexOf('#'))),
													a !== t.$ref &&
														(s = t.$ref.substr(t.$ref.indexOf('#')))
												var l = this.refs_prefix + this.refs_counter++,
													c = l + s
												'#' === t.$ref.substr(0, 1) ||
													this.refs[t.$ref] ||
													(i[a] = !0),
													(this.refs_with_info[l] = { fetchUrl: e, $ref: a }),
													(t.$ref = c)
											}
											return (
												Object.values(t).forEach(function (t) {
													t &&
														'object' === Ai(t) &&
														(Array.isArray(t)
															? Object.values(t).forEach(function (t) {
																	t &&
																		'object' === Ai(t) &&
																		o(r._getExternalRefs(t, e, n))
																})
															: (t.$ref &&
																	'string' == typeof t.$ref &&
																	t.$ref.startsWith('#')) ||
																o(r._getExternalRefs(t, e, n)))
												}),
												t.id &&
												'string' == typeof t.id &&
												'urn:' === t.id.substr(0, 4)
													? (this.refs[t.id] = t)
													: t.$id &&
														'string' == typeof t.$id &&
														'urn:' === t.$id.substr(0, 4) &&
														(this.refs[t.$id] = t),
												i
											)
										}
									},
									{
										key: '_getFileBase',
										value: function (t) {
											if (!t) return '/'
											var e = this.options.ajaxBase
											return void 0 === e
												? this._getFileBaseFromFileLocation(t)
												: e
										}
									},
									{
										key: '_getFileBaseFromFileLocation',
										value: function (t) {
											var e = t.split('/')
											return e.pop(), ''.concat(e.join('/'), '/')
										}
									},
									{
										key: '_joinUrl',
										value: function (t, e) {
											var r = t
											return (
												'http://' !== t.substr(0, 7) &&
													'https://' !== t.substr(0, 8) &&
													'blob:' !== t.substr(0, 5) &&
													'data:' !== t.substr(0, 5) &&
													'#' !== t.substr(0, 1) &&
													'/' !== t.substr(0, 1) &&
													(r = e + t),
												r.indexOf('#') > 0 && (r = r.substr(0, r.indexOf('#'))),
												r
											)
										}
									},
									{
										key: '_isUniformResourceName',
										value: function (t) {
											return 'urn:' === t.substr(0, 4)
										}
									},
									{
										key: '_asyncloadExternalRefs',
										value:
											((r = Pi(
												Ei().mark(function t(e, r, n) {
													var i,
														o,
														a,
														s,
														l,
														c,
														u = this,
														h = arguments
													return Ei().wrap(
														function (t) {
															for (;;)
																switch ((t.prev = t.next)) {
																	case 0:
																		;(i =
																			h.length > 3 && void 0 !== h[3] && h[3]),
																			(o = this._getExternalRefs(e, r, i)),
																			(a = 0),
																			(s = Ei().mark(function t() {
																				var e, r, i, o, s, h, p, d, f, y, m
																				return Ei().wrap(
																					function (t) {
																						for (;;)
																							switch ((t.prev = t.next)) {
																								case 0:
																									if (void 0 !== (e = c[l])) {
																										t.next = 3
																										break
																									}
																									return t.abrupt('return', 0)
																								case 3:
																									if (!u.refs[e]) {
																										t.next = 5
																										break
																									}
																									return t.abrupt('return', 0)
																								case 5:
																									if (
																										!u._isUniformResourceName(e)
																									) {
																										t.next = 40
																										break
																									}
																									if (
																										((u.refs[e] = 'loading'),
																										a++,
																										(r =
																											u.options.urn_resolver),
																										(i = e),
																										'function' == typeof r)
																									) {
																										t.next = 13
																										break
																									}
																									throw (
																										(console.log(
																											'No "urn_resolver" callback defined to resolve "'.concat(
																												i,
																												'"'
																											)
																										),
																										new Error(
																											'Must set urn_resolver option to a callback to resolve '.concat(
																												i
																											)
																										))
																									)
																								case 13:
																									return (
																										i.indexOf('#') > 0 &&
																											(i = i.substr(
																												0,
																												i.indexOf('#')
																											)),
																										(t.prev = 14),
																										(t.next = 17),
																										r(i)
																									)
																								case 17:
																									;(o = t.sent),
																										(t.prev = 18),
																										(s = JSON.parse(o)),
																										(t.next = 26)
																									break
																								case 22:
																									throw (
																										((t.prev = 22),
																										(t.t0 = t.catch(18)),
																										console.log(t.t0),
																										new Error(
																											'Failed to parse external ref '.concat(
																												i
																											)
																										))
																									)
																								case 26:
																									if (
																										!(
																											('boolean' != typeof s &&
																												'object' !== Ai(s)) ||
																											null === s ||
																											Array.isArray(s)
																										)
																									) {
																										t.next = 28
																										break
																									}
																									throw new Error(
																										'External ref does not contain a valid schema - '.concat(
																											i
																										)
																									)
																								case 28:
																									return (
																										(u.refs[e] = s),
																										(t.next = 31),
																										u._asyncloadExternalRefs(
																											s,
																											e,
																											n
																										)
																									)
																								case 31:
																									t.next = 37
																									break
																								case 33:
																									throw (
																										((t.prev = 33),
																										(t.t1 = t.catch(14)),
																										console.log(t.t1),
																										new Error(
																											'Failed to parse external ref '.concat(
																												i
																											)
																										))
																									)
																								case 37:
																									if ('boolean' != typeof o) {
																										t.next = 39
																										break
																									}
																									throw new Error(
																										'External ref does not contain a valid schema - '.concat(
																											i
																										)
																									)
																								case 39:
																									return t.abrupt('return', 0)
																								case 40:
																									if (u.options.ajax) {
																										t.next = 42
																										break
																									}
																									throw new Error(
																										'Must set ajax option to true to load external ref '.concat(
																											e
																										)
																									)
																								case 42:
																									if (
																										(a++,
																										(h = u._joinUrl(e, n)),
																										u.options
																											.ajax_cache_responses &&
																											(d = u.cacheGet(h)) &&
																											(p = d),
																										p)
																									) {
																										t.next = 61
																										break
																									}
																									return (
																										(t.next = 48),
																										new Promise(function (t) {
																											var e =
																												new XMLHttpRequest()
																											u.options
																												.ajaxCredentials &&
																												(e.withCredentials =
																													u.options.ajaxCredentials),
																												e.overrideMimeType(
																													'application/json'
																												),
																												e.open('GET', h, !0),
																												(e.onload =
																													function () {
																														t(e)
																													}),
																												(e.onerror = function (
																													e
																												) {
																													t(void 0)
																												}),
																												e.send()
																										})
																									)
																								case 48:
																									if (void 0 !== (f = t.sent)) {
																										t.next = 51
																										break
																									}
																									throw new Error(
																										'Failed to fetch ref via ajax - '.concat(
																											e
																										)
																									)
																								case 51:
																									;(t.prev = 51),
																										(p = JSON.parse(
																											f.responseText
																										)),
																										u.onSchemaLoaded({
																											schema: p,
																											schemaUrl: h
																										}),
																										u.options
																											.ajax_cache_responses &&
																											u.cacheSet(h, p),
																										(t.next = 61)
																									break
																								case 57:
																									throw (
																										((t.prev = 57),
																										(t.t2 = t.catch(51)),
																										console.log(t.t2),
																										new Error(
																											'Failed to parse external ref '.concat(
																												h
																											)
																										))
																									)
																								case 61:
																									if (
																										!(
																											('boolean' != typeof p &&
																												'object' !== Ai(p)) ||
																											null === p ||
																											Array.isArray(p)
																										)
																									) {
																										t.next = 63
																										break
																									}
																									throw new Error(
																										'External ref does not contain a valid schema - '.concat(
																											h
																										)
																									)
																								case 63:
																									return (
																										(u.refs[e] = p),
																										(y =
																											u._getFileBaseFromFileLocation(
																												h
																											)),
																										h !== e &&
																											((m = h.split('/')),
																											(h =
																												('/' === e.substr(0, 1)
																													? '/'
																													: '') + m.pop())),
																										(t.next = 68),
																										u._asyncloadExternalRefs(
																											p,
																											h,
																											y
																										)
																									)
																								case 68:
																								case 'end':
																									return t.stop()
																							}
																					},
																					t,
																					null,
																					[
																						[14, 33],
																						[18, 22],
																						[51, 57]
																					]
																				)
																			})),
																			(l = 0),
																			(c = Object.keys(o))
																	case 5:
																		if (!(l < c.length)) {
																			t.next = 13
																			break
																		}
																		return t.delegateYield(s(), 't0', 7)
																	case 7:
																		if (0 !== t.t0) {
																			t.next = 10
																			break
																		}
																		return t.abrupt('continue', 10)
																	case 10:
																		l++, (t.next = 5)
																		break
																	case 13:
																		if (a) {
																			t.next = 15
																			break
																		}
																		return t.abrupt('return', !0)
																	case 15:
																		this.onAllSchemasLoaded()
																	case 16:
																	case 'end':
																		return t.stop()
																}
														},
														t,
														this
													)
												})
											)),
											function (t, e, n) {
												return r.apply(this, arguments)
											})
									},
									{ key: 'onSchemaLoaded', value: function (t) {} },
									{ key: 'onAllSchemasLoaded', value: function () {} },
									{
										key: 'extendSchemas',
										value: function (t, e) {
											var r = this
											;(t = l({}, t)), (e = l({}, e))
											var n = {}
											return (
												Object.entries(t).forEach(function (t) {
													var i = Li(t, 2),
														o = i[0],
														a = i[1]
													void 0 !== e[o]
														? (function (t, i) {
																!(function (t, e) {
																	return (
																		('required' === t ||
																			'defaultProperties' === t) &&
																		'object' === Ai(e) &&
																		Array.isArray(e)
																	)
																})(t, i)
																	? 'type' !== t ||
																		('string' != typeof i && !Array.isArray(i))
																		? 'object' !== Ai(i) ||
																			Array.isArray(i) ||
																			null === i
																			? (n[t] = i)
																			: (n[t] = r.extendSchemas(i, e[t]))
																		: (function (t) {
																				'string' == typeof t && (t = [t]),
																					'string' == typeof e.type &&
																						(e.type = [e.type]),
																					e.type && e.type.length
																						? (n.type = t.filter(function (t) {
																								return e.type.includes(t)
																							}))
																						: (n.type = t),
																					1 === n.type.length &&
																					'string' == typeof n.type[0]
																						? (n.type = n.type[0])
																						: 0 === n.type.length &&
																							delete n.type
																			})(i)
																	: (n[t] = i.concat(e[t]).reduce(function (
																			t,
																			e
																		) {
																			return t.includes(e) || t.push(e), t
																		}, []))
															})(o, a)
														: (n[o] = a)
												}),
												Object.entries(e).forEach(function (e) {
													var r = Li(e, 2),
														i = r[0],
														o = r[1]
													void 0 === t[i] && (n[i] = o)
												}),
												n
											)
										}
									},
									{
										key: 'getCacheKey',
										value: function (t) {
											return ['je-cache', t].join('::')
										}
									},
									{
										key: 'getCacheBuster',
										value: function () {
											return (
												this.options.ajax_cache_buster ||
												new Date().toISOString().slice(0, 10)
											)
										}
									},
									{
										key: 'cacheSet',
										value: function (t, e) {
											try {
												window.localStorage.setItem(
													this.getCacheKey(t),
													JSON.stringify({
														cacheBuster: this.getCacheBuster(),
														schema: e
													})
												)
											} catch (t) {
												console.error(t)
											}
										}
									},
									{
										key: 'cacheGet',
										value: function (t) {
											try {
												var e = window.localStorage.getItem(this.getCacheKey(t))
												if (e) {
													var r = JSON.parse(e)
													if (
														r.cacheBuster &&
														r.schema &&
														r.cacheBuster === this.getCacheBuster()
													)
														return r.schema
													this.cacheDelete(t)
												}
											} catch (t) {
												console.error(t)
											}
										}
									},
									{
										key: 'cacheDelete',
										value: function (t) {
											window.localStorage.removeItem(this.getCacheKey(t))
										}
									}
								]),
								e &&
									(function (t, e) {
										for (var r = 0; r < e.length; r++) {
											var n = e[r]
											;(n.enumerable = n.enumerable || !1),
												(n.configurable = !0),
												'value' in n && (n.writable = !0),
												Object.defineProperty(t, Ri(n.key), n)
										}
									})(t.prototype, e),
								Object.defineProperty(t, 'prototype', { writable: !1 }),
								t
							)
							var t, e, r, n
						})(),
						Bi =
							(r(2762),
							{
								default: function () {
									return {
										compile: function (t) {
											var e = t.match(/{{\s*([a-zA-Z0-9\-_ .]+)\s*}}/g),
												r = e && e.length
											if (!r)
												return function () {
													return t
												}
											for (
												var n = [],
													i = function (t) {
														var r,
															i,
															o = e[t].replace(/[{}]+/g, '').trim().split('.'),
															a = o.length
														a > 1
															? (r = function (e) {
																	for (
																		i = e, t = 0;
																		t < a && (i = i[o[t]]);
																		t++
																	);
																	return i
																})
															: ((o = o[0]),
																(r = function (t) {
																	return t[o]
																})),
															n.push({ s: e[t], r: r })
													},
													o = 0;
												o < r;
												o++
											)
												i(o)
											return function (e) {
												for (var i, o = ''.concat(t), a = 0; a < r; a++)
													(i = n[a]), (o = o.replace(i.s, i.r(e)))
												return o
											}
										}
									}
								},
								ejs: function () {
									return (
										!!window.EJS && {
											compile: function (t) {
												var e = new window.EJS({ text: t })
												return function (t) {
													return e.render(t)
												}
											}
										}
									)
								},
								handlebars: function () {
									return window.Handlebars
								},
								hogan: function () {
									return (
										!!window.Hogan && {
											compile: function (t) {
												var e = window.Hogan.compile(t)
												return function (t) {
													return e.render(t)
												}
											}
										}
									)
								},
								lodash: function () {
									return (
										!!window._ && {
											compile: function (t) {
												return function (e) {
													return window._.template(t)(e)
												}
											}
										}
									)
								},
								markup: function () {
									return (
										!(!window.Mark || !window.Mark.up) && {
											compile: function (t) {
												return function (e) {
													return window.Mark.up(t, e)
												}
											}
										}
									)
								},
								mustache: function () {
									return (
										!!window.Mustache && {
											compile: function (t) {
												return function (e) {
													return window.Mustache.render(t, e)
												}
											}
										}
									)
								},
								swig: function () {
									return window.swig
								},
								underscore: function () {
									return (
										!!window._ && {
											compile: function (t) {
												return function (e) {
													return window._.template(t)(e)
												}
											}
										}
									)
								}
							})
					function Ni(t) {
						return (
							(Ni =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							Ni(t)
						)
					}
					function Di(t, e) {
						;(null == e || e > t.length) && (e = t.length)
						for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r]
						return n
					}
					function Fi(t) {
						var e = (function (t) {
							if ('object' != Ni(t) || !t) return t
							var e = t[Symbol.toPrimitive]
							if (void 0 !== e) {
								var r = e.call(t, 'string')
								if ('object' != Ni(r)) return r
								throw new TypeError(
									'@@toPrimitive must return a primitive value.'
								)
							}
							return String(t)
						})(t)
						return 'symbol' == Ni(e) ? e : e + ''
					}
					var Vi = {
							collapse: '',
							expand: '',
							delete: '',
							edit: '',
							add: '',
							cancel: '',
							save: '',
							moveup: '',
							movedown: ''
						},
						Hi = (function () {
							return (
								(t = function t() {
									var e =
											arguments.length > 0 && void 0 !== arguments[0]
												? arguments[0]
												: '',
										r =
											arguments.length > 1 && void 0 !== arguments[1]
												? arguments[1]
												: Vi
									!(function (t, e) {
										if (!(t instanceof e))
											throw new TypeError('Cannot call a class as a function')
									})(this, t),
										(this.mapping = r),
										(this.icon_prefix = e)
								}),
								(e = [
									{
										key: 'getIconClass',
										value: function (t) {
											return this.mapping[t]
												? this.icon_prefix + this.mapping[t]
												: this.icon_prefix + t
										}
									},
									{
										key: 'getIcon',
										value: function (t) {
											var e,
												r = this.getIconClass(t)
											if (!r) return null
											var n,
												i = document.createElement('i')
											return (
												(e = i.classList).add.apply(
													e,
													(function (t) {
														if (Array.isArray(t)) return Di(t)
													})((n = r.split(' '))) ||
														(function (t) {
															if (
																('undefined' != typeof Symbol &&
																	null != t[Symbol.iterator]) ||
																null != t['@@iterator']
															)
																return Array.from(t)
														})(n) ||
														(function (t, e) {
															if (t) {
																if ('string' == typeof t) return Di(t, e)
																var r = Object.prototype.toString
																	.call(t)
																	.slice(8, -1)
																return (
																	'Object' === r &&
																		t.constructor &&
																		(r = t.constructor.name),
																	'Map' === r || 'Set' === r
																		? Array.from(t)
																		: 'Arguments' === r ||
																			  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
																					r
																			  )
																			? Di(t, e)
																			: void 0
																)
															}
														})(n) ||
														(function () {
															throw new TypeError(
																'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
															)
														})()
												),
												i
											)
										}
									}
								]) &&
									(function (t, e) {
										for (var r = 0; r < e.length; r++) {
											var n = e[r]
											;(n.enumerable = n.enumerable || !1),
												(n.configurable = !0),
												'value' in n && (n.writable = !0),
												Object.defineProperty(t, Fi(n.key), n)
										}
									})(t.prototype, e),
								Object.defineProperty(t, 'prototype', { writable: !1 }),
								t
							)
							var t, e
						})()
					function zi(t) {
						return (
							(zi =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							zi(t)
						)
					}
					function Mi() {
						try {
							var t = !Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							)
						} catch (t) {}
						return (Mi = function () {
							return !!t
						})()
					}
					function qi(t) {
						return (
							(qi = Object.setPrototypeOf
								? Object.getPrototypeOf.bind()
								: function (t) {
										return t.__proto__ || Object.getPrototypeOf(t)
									}),
							qi(t)
						)
					}
					function Ui(t, e) {
						return (
							(Ui = Object.setPrototypeOf
								? Object.setPrototypeOf.bind()
								: function (t, e) {
										return (t.__proto__ = e), t
									}),
							Ui(t, e)
						)
					}
					var Gi = {
							collapse: 'chevron-down',
							expand: 'chevron-right',
							delete: 'trash',
							edit: 'pencil',
							add: 'plus',
							subtract: 'minus',
							cancel: 'floppy-remove',
							save: 'floppy-saved',
							moveup: 'arrow-up',
							moveright: 'arrow-right',
							movedown: 'arrow-down',
							moveleft: 'arrow-left',
							copy: 'copy',
							clear: 'remove-circle',
							time: 'time',
							calendar: 'calendar',
							edit_properties: 'list'
						},
						$i = (function (t) {
							function e() {
								return (
									(function (t, e) {
										if (!(t instanceof e))
											throw new TypeError('Cannot call a class as a function')
									})(this, e),
									(function (t, e, r) {
										return (
											(e = qi(e)),
											(function (t, e) {
												if (e && ('object' === zi(e) || 'function' == typeof e))
													return e
												if (void 0 !== e)
													throw new TypeError(
														'Derived constructors may only return object or undefined'
													)
												return (function (t) {
													if (void 0 === t)
														throw new ReferenceError(
															"this hasn't been initialised - super() hasn't been called"
														)
													return t
												})(t)
											})(
												t,
												Mi()
													? Reflect.construct(e, r || [], qi(t).constructor)
													: e.apply(t, r)
											)
										)
									})(this, e, ['glyphicon glyphicon-', Gi])
								)
							}
							return (
								(function (t, e) {
									if ('function' != typeof e && null !== e)
										throw new TypeError(
											'Super expression must either be null or a function'
										)
									;(t.prototype = Object.create(e && e.prototype, {
										constructor: { value: t, writable: !0, configurable: !0 }
									})),
										Object.defineProperty(t, 'prototype', { writable: !1 }),
										e && Ui(t, e)
								})(e, t),
								(r = e),
								Object.defineProperty(r, 'prototype', { writable: !1 }),
								r
							)
							var r
						})(Hi)
					function Ji(t) {
						return (
							(Ji =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							Ji(t)
						)
					}
					function Wi() {
						try {
							var t = !Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							)
						} catch (t) {}
						return (Wi = function () {
							return !!t
						})()
					}
					function Zi(t) {
						return (
							(Zi = Object.setPrototypeOf
								? Object.getPrototypeOf.bind()
								: function (t) {
										return t.__proto__ || Object.getPrototypeOf(t)
									}),
							Zi(t)
						)
					}
					function Yi(t, e) {
						return (
							(Yi = Object.setPrototypeOf
								? Object.setPrototypeOf.bind()
								: function (t, e) {
										return (t.__proto__ = e), t
									}),
							Yi(t, e)
						)
					}
					var Qi = {
							collapse: 'chevron-down',
							expand: 'chevron-right',
							delete: 'trash',
							edit: 'pencil',
							add: 'plus',
							subtract: 'minus',
							cancel: 'ban-circle',
							save: 'save',
							moveup: 'arrow-up',
							moveright: 'arrow-right',
							movedown: 'arrow-down',
							moveleft: 'arrow-left',
							copy: 'copy',
							clear: 'remove-circle',
							time: 'time',
							calendar: 'calendar',
							edit_properties: 'list'
						},
						Ki = (function (t) {
							function e() {
								return (
									(function (t, e) {
										if (!(t instanceof e))
											throw new TypeError('Cannot call a class as a function')
									})(this, e),
									(function (t, e, r) {
										return (
											(e = Zi(e)),
											(function (t, e) {
												if (e && ('object' === Ji(e) || 'function' == typeof e))
													return e
												if (void 0 !== e)
													throw new TypeError(
														'Derived constructors may only return object or undefined'
													)
												return (function (t) {
													if (void 0 === t)
														throw new ReferenceError(
															"this hasn't been initialised - super() hasn't been called"
														)
													return t
												})(t)
											})(
												t,
												Wi()
													? Reflect.construct(e, r || [], Zi(t).constructor)
													: e.apply(t, r)
											)
										)
									})(this, e, ['icon-', Qi])
								)
							}
							return (
								(function (t, e) {
									if ('function' != typeof e && null !== e)
										throw new TypeError(
											'Super expression must either be null or a function'
										)
									;(t.prototype = Object.create(e && e.prototype, {
										constructor: { value: t, writable: !0, configurable: !0 }
									})),
										Object.defineProperty(t, 'prototype', { writable: !1 }),
										e && Yi(t, e)
								})(e, t),
								(r = e),
								Object.defineProperty(r, 'prototype', { writable: !1 }),
								r
							)
							var r
						})(Hi)
					function Xi(t) {
						return (
							(Xi =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							Xi(t)
						)
					}
					function to() {
						try {
							var t = !Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							)
						} catch (t) {}
						return (to = function () {
							return !!t
						})()
					}
					function eo(t) {
						return (
							(eo = Object.setPrototypeOf
								? Object.getPrototypeOf.bind()
								: function (t) {
										return t.__proto__ || Object.getPrototypeOf(t)
									}),
							eo(t)
						)
					}
					function ro(t, e) {
						return (
							(ro = Object.setPrototypeOf
								? Object.setPrototypeOf.bind()
								: function (t, e) {
										return (t.__proto__ = e), t
									}),
							ro(t, e)
						)
					}
					var no = {
							collapse: 'caret-square-o-down',
							expand: 'caret-square-o-right',
							delete: 'times',
							edit: 'pencil',
							add: 'plus',
							subtract: 'minus',
							cancel: 'ban',
							save: 'save',
							moveup: 'arrow-up',
							moveright: 'arrow-right',
							movedown: 'arrow-down',
							moveleft: 'arrow-left',
							copy: 'files-o',
							clear: 'times-circle-o',
							time: 'clock-o',
							calendar: 'calendar',
							edit_properties: 'list'
						},
						io = (function (t) {
							function e() {
								return (
									(function (t, e) {
										if (!(t instanceof e))
											throw new TypeError('Cannot call a class as a function')
									})(this, e),
									(function (t, e, r) {
										return (
											(e = eo(e)),
											(function (t, e) {
												if (e && ('object' === Xi(e) || 'function' == typeof e))
													return e
												if (void 0 !== e)
													throw new TypeError(
														'Derived constructors may only return object or undefined'
													)
												return (function (t) {
													if (void 0 === t)
														throw new ReferenceError(
															"this hasn't been initialised - super() hasn't been called"
														)
													return t
												})(t)
											})(
												t,
												to()
													? Reflect.construct(e, r || [], eo(t).constructor)
													: e.apply(t, r)
											)
										)
									})(this, e, ['fa fa-', no])
								)
							}
							return (
								(function (t, e) {
									if ('function' != typeof e && null !== e)
										throw new TypeError(
											'Super expression must either be null or a function'
										)
									;(t.prototype = Object.create(e && e.prototype, {
										constructor: { value: t, writable: !0, configurable: !0 }
									})),
										Object.defineProperty(t, 'prototype', { writable: !1 }),
										e && ro(t, e)
								})(e, t),
								(r = e),
								Object.defineProperty(r, 'prototype', { writable: !1 }),
								r
							)
							var r
						})(Hi)
					function oo(t) {
						return (
							(oo =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							oo(t)
						)
					}
					function ao() {
						try {
							var t = !Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							)
						} catch (t) {}
						return (ao = function () {
							return !!t
						})()
					}
					function so(t) {
						return (
							(so = Object.setPrototypeOf
								? Object.getPrototypeOf.bind()
								: function (t) {
										return t.__proto__ || Object.getPrototypeOf(t)
									}),
							so(t)
						)
					}
					function lo(t, e) {
						return (
							(lo = Object.setPrototypeOf
								? Object.setPrototypeOf.bind()
								: function (t, e) {
										return (t.__proto__ = e), t
									}),
							lo(t, e)
						)
					}
					var co = {
							collapse: 'caret-down',
							expand: 'caret-right',
							delete: 'trash',
							edit: 'pen',
							add: 'plus',
							subtract: 'minus',
							cancel: 'ban',
							save: 'save',
							moveup: 'arrow-up',
							moveright: 'arrow-right',
							movedown: 'arrow-down',
							moveleft: 'arrow-left',
							copy: 'copy',
							clear: 'times-circle',
							time: 'clock',
							calendar: 'calendar',
							edit_properties: 'list'
						},
						uo = (function (t) {
							function e() {
								return (
									(function (t, e) {
										if (!(t instanceof e))
											throw new TypeError('Cannot call a class as a function')
									})(this, e),
									(function (t, e, r) {
										return (
											(e = so(e)),
											(function (t, e) {
												if (e && ('object' === oo(e) || 'function' == typeof e))
													return e
												if (void 0 !== e)
													throw new TypeError(
														'Derived constructors may only return object or undefined'
													)
												return (function (t) {
													if (void 0 === t)
														throw new ReferenceError(
															"this hasn't been initialised - super() hasn't been called"
														)
													return t
												})(t)
											})(
												t,
												ao()
													? Reflect.construct(e, r || [], so(t).constructor)
													: e.apply(t, r)
											)
										)
									})(this, e, ['fas fa-', co])
								)
							}
							return (
								(function (t, e) {
									if ('function' != typeof e && null !== e)
										throw new TypeError(
											'Super expression must either be null or a function'
										)
									;(t.prototype = Object.create(e && e.prototype, {
										constructor: { value: t, writable: !0, configurable: !0 }
									})),
										Object.defineProperty(t, 'prototype', { writable: !1 }),
										e && lo(t, e)
								})(e, t),
								(r = e),
								Object.defineProperty(r, 'prototype', { writable: !1 }),
								r
							)
							var r
						})(Hi)
					function ho(t) {
						return (
							(ho =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							ho(t)
						)
					}
					function po() {
						try {
							var t = !Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							)
						} catch (t) {}
						return (po = function () {
							return !!t
						})()
					}
					function fo(t) {
						return (
							(fo = Object.setPrototypeOf
								? Object.getPrototypeOf.bind()
								: function (t) {
										return t.__proto__ || Object.getPrototypeOf(t)
									}),
							fo(t)
						)
					}
					function yo(t, e) {
						return (
							(yo = Object.setPrototypeOf
								? Object.setPrototypeOf.bind()
								: function (t, e) {
										return (t.__proto__ = e), t
									}),
							yo(t, e)
						)
					}
					var mo = {
							collapse: 'triangle-1-s',
							expand: 'triangle-1-e',
							delete: 'trash',
							edit: 'pencil',
							add: 'plusthick',
							subtract: 'minusthick',
							cancel: 'closethick',
							save: 'disk',
							moveup: 'arrowthick-1-n',
							moveright: 'arrowthick-1-e',
							movedown: 'arrowthick-1-s',
							moveleft: 'arrowthick-1-w',
							copy: 'copy',
							clear: 'circle-close',
							time: 'time',
							calendar: 'calendar',
							edit_properties: 'note'
						},
						vo = (function (t) {
							function e() {
								return (
									(function (t, e) {
										if (!(t instanceof e))
											throw new TypeError('Cannot call a class as a function')
									})(this, e),
									(function (t, e, r) {
										return (
											(e = fo(e)),
											(function (t, e) {
												if (e && ('object' === ho(e) || 'function' == typeof e))
													return e
												if (void 0 !== e)
													throw new TypeError(
														'Derived constructors may only return object or undefined'
													)
												return (function (t) {
													if (void 0 === t)
														throw new ReferenceError(
															"this hasn't been initialised - super() hasn't been called"
														)
													return t
												})(t)
											})(
												t,
												po()
													? Reflect.construct(e, r || [], fo(t).constructor)
													: e.apply(t, r)
											)
										)
									})(this, e, ['ui-icon ui-icon-', mo])
								)
							}
							return (
								(function (t, e) {
									if ('function' != typeof e && null !== e)
										throw new TypeError(
											'Super expression must either be null or a function'
										)
									;(t.prototype = Object.create(e && e.prototype, {
										constructor: { value: t, writable: !0, configurable: !0 }
									})),
										Object.defineProperty(t, 'prototype', { writable: !1 }),
										e && yo(t, e)
								})(e, t),
								(r = e),
								Object.defineProperty(r, 'prototype', { writable: !1 }),
								r
							)
							var r
						})(Hi)
					function bo(t) {
						return (
							(bo =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							bo(t)
						)
					}
					function go() {
						try {
							var t = !Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							)
						} catch (t) {}
						return (go = function () {
							return !!t
						})()
					}
					function wo(t) {
						return (
							(wo = Object.setPrototypeOf
								? Object.getPrototypeOf.bind()
								: function (t) {
										return t.__proto__ || Object.getPrototypeOf(t)
									}),
							wo(t)
						)
					}
					function _o(t, e) {
						return (
							(_o = Object.setPrototypeOf
								? Object.setPrototypeOf.bind()
								: function (t, e) {
										return (t.__proto__ = e), t
									}),
							_o(t, e)
						)
					}
					var ko = {
							collapse: 'collapse-down',
							expand: 'expand-right',
							delete: 'trash',
							edit: 'pencil',
							add: 'plus',
							subtract: 'minus',
							cancel: 'ban',
							save: 'file',
							moveup: 'arrow-thick-top',
							moveright: 'arrow-thick-right',
							movedown: 'arrow-thick-bottom',
							moveleft: 'arrow-thick-left',
							copy: 'clipboard',
							clear: 'circle-x',
							time: 'clock',
							calendar: 'calendar',
							edit_properties: 'list'
						},
						jo = (function (t) {
							function e() {
								return (
									(function (t, e) {
										if (!(t instanceof e))
											throw new TypeError('Cannot call a class as a function')
									})(this, e),
									(function (t, e, r) {
										return (
											(e = wo(e)),
											(function (t, e) {
												if (e && ('object' === bo(e) || 'function' == typeof e))
													return e
												if (void 0 !== e)
													throw new TypeError(
														'Derived constructors may only return object or undefined'
													)
												return (function (t) {
													if (void 0 === t)
														throw new ReferenceError(
															"this hasn't been initialised - super() hasn't been called"
														)
													return t
												})(t)
											})(
												t,
												go()
													? Reflect.construct(e, r || [], wo(t).constructor)
													: e.apply(t, r)
											)
										)
									})(this, e, ['oi oi-', ko])
								)
							}
							return (
								(function (t, e) {
									if ('function' != typeof e && null !== e)
										throw new TypeError(
											'Super expression must either be null or a function'
										)
									;(t.prototype = Object.create(e && e.prototype, {
										constructor: { value: t, writable: !0, configurable: !0 }
									})),
										Object.defineProperty(t, 'prototype', { writable: !1 }),
										e && _o(t, e)
								})(e, t),
								(r = e),
								Object.defineProperty(r, 'prototype', { writable: !1 }),
								r
							)
							var r
						})(Hi)
					function Oo(t) {
						return (
							(Oo =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							Oo(t)
						)
					}
					function xo() {
						try {
							var t = !Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							)
						} catch (t) {}
						return (xo = function () {
							return !!t
						})()
					}
					function Co(t) {
						return (
							(Co = Object.setPrototypeOf
								? Object.getPrototypeOf.bind()
								: function (t) {
										return t.__proto__ || Object.getPrototypeOf(t)
									}),
							Co(t)
						)
					}
					function Eo(t, e) {
						return (
							(Eo = Object.setPrototypeOf
								? Object.setPrototypeOf.bind()
								: function (t, e) {
										return (t.__proto__ = e), t
									}),
							Eo(t, e)
						)
					}
					var So = {
							collapse: 'arrow-down',
							expand: 'arrow-right',
							delete: 'delete',
							edit: 'edit',
							add: 'plus',
							subtract: 'minus',
							cancel: 'cross',
							save: 'check',
							moveup: 'upward',
							moveright: 'forward',
							movedown: 'downward',
							moveleft: 'back',
							copy: 'copy',
							clear: 'close',
							time: 'time',
							calendar: 'bookmark',
							edit_properties: 'menu'
						},
						Po = (function (t) {
							function e() {
								return (
									(function (t, e) {
										if (!(t instanceof e))
											throw new TypeError('Cannot call a class as a function')
									})(this, e),
									(function (t, e, r) {
										return (
											(e = Co(e)),
											(function (t, e) {
												if (e && ('object' === Oo(e) || 'function' == typeof e))
													return e
												if (void 0 !== e)
													throw new TypeError(
														'Derived constructors may only return object or undefined'
													)
												return (function (t) {
													if (void 0 === t)
														throw new ReferenceError(
															"this hasn't been initialised - super() hasn't been called"
														)
													return t
												})(t)
											})(
												t,
												xo()
													? Reflect.construct(e, r || [], Co(t).constructor)
													: e.apply(t, r)
											)
										)
									})(this, e, ['icon icon-', So])
								)
							}
							return (
								(function (t, e) {
									if ('function' != typeof e && null !== e)
										throw new TypeError(
											'Super expression must either be null or a function'
										)
									;(t.prototype = Object.create(e && e.prototype, {
										constructor: { value: t, writable: !0, configurable: !0 }
									})),
										Object.defineProperty(t, 'prototype', { writable: !1 }),
										e && Eo(t, e)
								})(e, t),
								(r = e),
								Object.defineProperty(r, 'prototype', { writable: !1 }),
								r
							)
							var r
						})(Hi)
					function Lo(t) {
						return (
							(Lo =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							Lo(t)
						)
					}
					function To() {
						try {
							var t = !Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							)
						} catch (t) {}
						return (To = function () {
							return !!t
						})()
					}
					function Ao(t) {
						return (
							(Ao = Object.setPrototypeOf
								? Object.getPrototypeOf.bind()
								: function (t) {
										return t.__proto__ || Object.getPrototypeOf(t)
									}),
							Ao(t)
						)
					}
					function Ro(t, e) {
						return (
							(Ro = Object.setPrototypeOf
								? Object.setPrototypeOf.bind()
								: function (t, e) {
										return (t.__proto__ = e), t
									}),
							Ro(t, e)
						)
					}
					var Io = {
							collapse: 'chevron-down',
							expand: 'chevron-right',
							delete: 'trash',
							edit: 'pencil',
							add: 'plus',
							subtract: 'dash',
							cancel: 'x-circle',
							save: 'save',
							moveup: 'arrow-up',
							moveright: 'arrow-right',
							movedown: 'arrow-down',
							moveleft: 'arrow-left',
							copy: 'clipboard',
							clear: 'x-circle',
							time: 'clock',
							calendar: 'calendar',
							edit_properties: 'list-ul'
						},
						Bo = {
							bootstrap: (function (t) {
								function e() {
									return (
										(function (t, e) {
											if (!(t instanceof e))
												throw new TypeError('Cannot call a class as a function')
										})(this, e),
										(function (t, e, r) {
											return (
												(e = Ao(e)),
												(function (t, e) {
													if (
														e &&
														('object' === Lo(e) || 'function' == typeof e)
													)
														return e
													if (void 0 !== e)
														throw new TypeError(
															'Derived constructors may only return object or undefined'
														)
													return (function (t) {
														if (void 0 === t)
															throw new ReferenceError(
																"this hasn't been initialised - super() hasn't been called"
															)
														return t
													})(t)
												})(
													t,
													To()
														? Reflect.construct(e, r || [], Ao(t).constructor)
														: e.apply(t, r)
												)
											)
										})(this, e, ['bi bi-', Io])
									)
								}
								return (
									(function (t, e) {
										if ('function' != typeof e && null !== e)
											throw new TypeError(
												'Super expression must either be null or a function'
											)
										;(t.prototype = Object.create(e && e.prototype, {
											constructor: { value: t, writable: !0, configurable: !0 }
										})),
											Object.defineProperty(t, 'prototype', { writable: !1 }),
											e && Ro(t, e)
									})(e, t),
									(r = e),
									Object.defineProperty(r, 'prototype', { writable: !1 }),
									r
								)
								var r
							})(Hi),
							bootstrap3: $i,
							fontawesome3: Ki,
							fontawesome4: io,
							fontawesome5: uo,
							jqueryui: vo,
							openiconic: jo,
							spectre: Po
						}
					function No(t) {
						return (
							(No =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							No(t)
						)
					}
					function Do(t) {
						var e = (function (t) {
							if ('object' != No(t) || !t) return t
							var e = t[Symbol.toPrimitive]
							if (void 0 !== e) {
								var r = e.call(t, 'string')
								if ('object' != No(r)) return r
								throw new TypeError(
									'@@toPrimitive must return a primitive value.'
								)
							}
							return String(t)
						})(t)
						return 'symbol' == No(e) ? e : e + ''
					}
					var Fo = [
							'matches',
							'webkitMatchesSelector',
							'mozMatchesSelector',
							'msMatchesSelector',
							'oMatchesSelector'
						].find(function (t) {
							return t in document.documentElement
						}),
						Vo = (function () {
							return (
								(t = function t(e) {
									var r =
										arguments.length > 1 && void 0 !== arguments[1]
											? arguments[1]
											: { disable_theme_rules: !1 }
									!(function (t, e) {
										if (!(t instanceof e))
											throw new TypeError('Cannot call a class as a function')
									})(this, t),
										(this.jsoneditor = e),
										Object.keys(r).forEach(function (t) {
											void 0 !== e.options[t] && (r[t] = e.options[t])
										}),
										(this.options = r)
								}),
								(e = [
									{
										key: 'getContainer',
										value: function () {
											return document.createElement('div')
										}
									},
									{
										key: 'getOptInCheckbox',
										value: function (t) {
											var e = document.createElement('span'),
												r = this.getHiddenLabel(t + ' opt-in')
											r.setAttribute('for', t + '-opt-in'),
												(r.textContent = t + '-opt-in')
											var n = document.createElement('input')
											return (
												n.setAttribute('type', 'checkbox'),
												n.setAttribute('style', 'margin: 0 10px 0 0;'),
												n.setAttribute('id', t + '-opt-in'),
												n.classList.add('json-editor-opt-in'),
												e.appendChild(n),
												e.appendChild(r),
												{ label: r, checkbox: n, container: e }
											)
										}
									},
									{
										key: 'getOptInSwitch',
										value: function (t) {
											return this.getOptInCheckbox()
										}
									},
									{
										key: 'getFloatRightLinkHolder',
										value: function () {
											var t = document.createElement('div')
											return t.classList.add('je-float-right-linkholder'), t
										}
									},
									{
										key: 'getModal',
										value: function () {
											var t = document.createElement('div')
											return (
												(t.style.display = 'none'),
												t.classList.add('je-modal'),
												t
											)
										}
									},
									{
										key: 'getGridContainer',
										value: function () {
											return document.createElement('div')
										}
									},
									{
										key: 'getGridRow',
										value: function () {
											var t = document.createElement('div')
											return t.classList.add('row'), t
										}
									},
									{
										key: 'getGridColumn',
										value: function () {
											return document.createElement('div')
										}
									},
									{ key: 'setGridColumnSize', value: function (t, e) {} },
									{
										key: 'getLink',
										value: function (t) {
											var e = document.createElement('a')
											return (
												e.setAttribute('href', '#'),
												e.appendChild(document.createTextNode(t)),
												e
											)
										}
									},
									{
										key: 'disableHeader',
										value: function (t) {
											t.style.color = '#ccc'
										}
									},
									{
										key: 'disableLabel',
										value: function (t) {
											t.style.color = '#ccc'
										}
									},
									{
										key: 'enableHeader',
										value: function (t) {
											t.style.color = ''
										}
									},
									{
										key: 'enableLabel',
										value: function (t) {
											t.style.color = ''
										}
									},
									{
										key: 'getInfoButton',
										value: function (t) {
											var e = document.createElement('span')
											;(e.innerText = 'ⓘ'),
												e.classList.add('je-infobutton-icon')
											var r = document.createElement('span')
											return (
												r.classList.add('je-infobutton-tooltip'),
												(r.innerText = t),
												(e.onmouseover = function () {
													r.style.visibility = 'visible'
												}),
												(e.onmouseleave = function () {
													r.style.visibility = 'hidden'
												}),
												e.appendChild(r),
												e
											)
										}
									},
									{
										key: 'getFormInputLabel',
										value: function (t, e) {
											var r = document.createElement('label')
											return (
												r.appendChild(document.createTextNode(t)),
												e && r.classList.add('required'),
												r
											)
										}
									},
									{
										key: 'getLabelLike',
										value: function (t, e) {
											var r = document.createElement('b')
											return (
												r.appendChild(document.createTextNode(t)),
												e && r.classList.add('required'),
												r
											)
										}
									},
									{
										key: 'getHeader',
										value: function (t, e) {
											var r = document.createElement('span')
											return (
												'string' == typeof t
													? (r.textContent = t)
													: r.appendChild(t),
												r.classList.add('je-header'),
												r
											)
										}
									},
									{
										key: 'getCheckbox',
										value: function () {
											var t = this.getFormInputField('checkbox')
											return t.classList.add('je-checkbox'), t
										}
									},
									{
										key: 'getCheckboxLabel',
										value: function (t, e) {
											var r = document.createElement('label')
											return (
												r.appendChild(document.createTextNode(' '.concat(t))),
												e && r.classList.add('required'),
												r
											)
										}
									},
									{
										key: 'getMultiCheckboxHolder',
										value: function (t, e, r, n) {
											var i = document.createElement('div')
											return (
												i.classList.add('control-group'),
												e &&
													((e.style.display = 'block'),
													i.appendChild(e),
													n && e.appendChild(n)),
												Object.values(t).forEach(function (t) {
													;(t.style.display = 'inline-block'),
														(t.style.marginRight = '20px'),
														i.appendChild(t)
												}),
												r && i.appendChild(r),
												i
											)
										}
									},
									{
										key: 'getFormCheckboxControl',
										value: function (t, e, r) {
											var n = document.createElement('div')
											return (
												n.appendChild(t),
												(e.style.width = 'auto'),
												t.insertBefore(e, t.firstChild),
												r && n.classList.add('je-checkbox-control--compact'),
												n
											)
										}
									},
									{
										key: 'getFormRadio',
										value: function (t) {
											var e = this.getFormInputField('radio')
											return (
												Object.keys(t).forEach(function (r) {
													return e.setAttribute(r, t[r])
												}),
												e.classList.add('je-radio'),
												e
											)
										}
									},
									{
										key: 'getFormRadioLabel',
										value: function (t, e) {
											var r = document.createElement('label')
											return (
												r.appendChild(document.createTextNode(' '.concat(t))),
												e && r.classList.add('required'),
												r
											)
										}
									},
									{
										key: 'getFormRadioControl',
										value: function (t, e, r, n) {
											var i = document.createElement('div')
											return (
												i.appendChild(t),
												(e.style.width = 'auto'),
												t.insertBefore(e, t.firstChild),
												r && i.classList.add('je-radio-control--compact'),
												'div' !== e.tagName.toLowerCase() &&
													n &&
													t &&
													e &&
													(e.setAttribute('id', n),
													e.setAttribute('aria-labelledby', n),
													t.setAttribute('for', n)),
												i
											)
										}
									},
									{
										key: 'getSelectInput',
										value: function (t, e) {
											var r =
													arguments.length > 2 &&
													void 0 !== arguments[2] &&
													arguments[2],
												n = document.createElement('select')
											return t && this.setSelectOptions(n, t, [], r), n
										}
									},
									{
										key: 'getSwitcher',
										value: function (t) {
											var e = this.getSelectInput(t, !1)
											return e.classList.add('je-switcher'), e
										}
									},
									{
										key: 'getSwitcherOptions',
										value: function (t) {
											return t.getElementsByTagName('option')
										}
									},
									{
										key: 'setSwitcherOptions',
										value: function (t, e, r) {
											this.setSelectOptions(t, e, r)
										}
									},
									{
										key: 'setSelectOptions',
										value: function (t, e) {
											var r =
													arguments.length > 2 && void 0 !== arguments[2]
														? arguments[2]
														: [],
												n =
													arguments.length > 3 &&
													void 0 !== arguments[3] &&
													arguments[3],
												i =
													arguments.length > 4 && void 0 !== arguments[4]
														? arguments[4]
														: ' '
											if (((t.innerHTML = ''), n)) {
												var o = document.createElement('option')
												o.setAttribute('value', '_placeholder_'),
													(o.textContent = i),
													o.setAttribute('disabled', ''),
													o.setAttribute('hidden', ''),
													t.appendChild(o)
											}
											for (var a = 0; a < e.length; a++) {
												var s = document.createElement('option')
												s.setAttribute('value', e[a]),
													(s.textContent = r[a] || e[a]),
													t.appendChild(s)
											}
										}
									},
									{
										key: 'getTextareaInput',
										value: function () {
											var t = document.createElement('textarea')
											return t.classList.add('je-textarea'), t
										}
									},
									{
										key: 'getHiddenLabel',
										value: function (t) {
											var e = document.createElement('label')
											return (
												(e.textContent = t),
												e.setAttribute(
													'style',
													'position: absolute;width: 1px;height: 1px;padding: 0;margin: -1px;overflow: hidden;clip: rect(0,0,0,0);border: 0;'
												),
												e
											)
										}
									},
									{
										key: 'visuallyHidden',
										value: function (t) {
											t &&
												t.setAttribute(
													'style',
													'position: absolute;width: 1px;height: 1px;padding: 0;margin: -1px;overflow: hidden;clip: rect(0,0,0,0);border: 0;'
												)
										}
									},
									{
										key: 'getHiddenText',
										value: function (t) {
											var e = document.createElement('span')
											return (
												(e.textContent = t),
												e.setAttribute(
													'style',
													'position: absolute;width: 1px;height: 1px;padding: 0;margin: -1px;overflow: hidden;clip: rect(0,0,0,0);border: 0;'
												),
												e
											)
										}
									},
									{
										key: 'getRangeInput',
										value: function (t, e, r, n, i) {
											var o = this.getFormInputField('range')
											return (
												o.setAttribute('min', t),
												o.setAttribute('max', e),
												o.setAttribute('step', r),
												n &&
													(n.setAttribute('id', i + '-description'),
													o.setAttribute(
														'aria-describedby',
														i + '-description'
													)),
												o
											)
										}
									},
									{
										key: 'getStepperButtons',
										value: function (t) {
											var e = document.createElement('div'),
												r = document.createElement('button')
											r.setAttribute('type', 'button'),
												r.classList.add('stepper-down')
											var n = document.createElement('button')
											n.setAttribute('type', 'button'),
												n.classList.add('stepper-up'),
												t.getAttribute('readonly') &&
													(r.setAttribute('disabled', !0),
													n.setAttribute('disabled', !0)),
												(r.textContent = '-'),
												(n.textContent = '+')
											var i = function (t, e) {
													;(t.value = Number(e || t.value)),
														t.setAttribute('initialized', '1')
												},
												o = t.getAttribute('min'),
												a = t.getAttribute('max')
											return (
												r.addEventListener('click', function () {
													t.getAttribute('initialized')
														? o
															? Number(t.value) > Number(o) && t.stepDown()
															: t.stepDown()
														: i(t, o),
														c(t, 'change')
												}),
												n.addEventListener('click', function () {
													t.getAttribute('initialized')
														? a
															? Number(t.value) < Number(a) && t.stepUp()
															: t.stepUp()
														: i(t, o),
														c(t, 'change')
												}),
												e.appendChild(r),
												e.appendChild(n),
												e
											)
										}
									},
									{
										key: 'getRangeOutput',
										value: function (t) {
											var e = document.createElement('output'),
												r = function (t) {
													e.value = t.currentTarget.value
												}
											return (
												t.addEventListener('change', r, !1),
												t.addEventListener('input', r, !1),
												e
											)
										}
									},
									{
										key: 'getRangeControl',
										value: function (t, e) {
											var r = document.createElement('div')
											return (
												r.classList.add('je-range-control'),
												e && r.appendChild(e),
												r.appendChild(t),
												r
											)
										}
									},
									{
										key: 'getFormInputField',
										value: function (t) {
											var e = document.createElement('input')
											return e.setAttribute('type', t), e
										}
									},
									{ key: 'afterInputReady', value: function (t) {} },
									{
										key: 'getFormControl',
										value: function (t, e, r, n, i) {
											var o = document.createElement('div')
											return (
												o.classList.add('form-control'),
												t && (o.appendChild(t), i && t.setAttribute('for', i)),
												('checkbox' !== e.type && 'radio' !== e.type) || !t
													? (n && t && t.appendChild(n), o.appendChild(e))
													: ((e.style.width = 'auto'),
														t.insertBefore(e, t.firstChild),
														n && t.appendChild(n)),
												'div' !== e.tagName.toLowerCase() &&
													e &&
													t &&
													i &&
													(t.setAttribute('for', i), e.setAttribute('id', i)),
												'div' !== e.tagName.toLowerCase() &&
													e &&
													r &&
													(r.setAttribute('id', i + '-description'),
													e.setAttribute(
														'aria-describedby',
														i + '-description'
													)),
												r && o.appendChild(r),
												o
											)
										}
									},
									{
										key: 'getIndentedPanel',
										value: function () {
											var t = document.createElement('div')
											return t.classList.add('je-indented-panel'), t
										}
									},
									{
										key: 'getTopIndentedPanel',
										value: function () {
											var t = document.createElement('div')
											return t.classList.add('je-indented-panel--top'), t
										}
									},
									{
										key: 'getChildEditorHolder',
										value: function () {
											return document.createElement('div')
										}
									},
									{
										key: 'getDescription',
										value: function (t) {
											var e = document.createElement('p')
											return (
												window.DOMPurify
													? (e.innerHTML = window.DOMPurify.sanitize(t))
													: (e.textContent = this.cleanText(t)),
												e
											)
										}
									},
									{
										key: 'getCheckboxDescription',
										value: function (t) {
											return this.getDescription(t)
										}
									},
									{
										key: 'getFormInputDescription',
										value: function (t) {
											return this.getDescription(t)
										}
									},
									{
										key: 'getButtonHolder',
										value: function () {
											return document.createElement('span')
										}
									},
									{
										key: 'getHeaderButtonHolder',
										value: function () {
											return this.getButtonHolder()
										}
									},
									{
										key: 'getFormButtonHolder',
										value: function (t) {
											return this.getButtonHolder()
										}
									},
									{
										key: 'getButton',
										value: function (t, e, r) {
											var n = document.createElement('button')
											return (
												(n.type = 'button'), this.setButtonText(n, t, e, r), n
											)
										}
									},
									{
										key: 'getFormButton',
										value: function (t, e, r) {
											return this.getButton(t, e, r)
										}
									},
									{
										key: 'setButtonText',
										value: function (t, e, r, n) {
											for (; t.firstChild; ) t.removeChild(t.firstChild)
											if (
												(r && (t.appendChild(r), (e = ' '.concat(e))),
												!this.jsoneditor.options.iconlib ||
													!this.jsoneditor.options.remove_button_labels ||
													!r)
											) {
												var i = document.createElement('span')
												i.appendChild(document.createTextNode(e)),
													t.appendChild(i)
											}
											n && t.setAttribute('title', n)
										}
									},
									{
										key: 'getTableContainer',
										value: function () {
											return document.createElement('div')
										}
									},
									{
										key: 'getTable',
										value: function () {
											return document.createElement('table')
										}
									},
									{
										key: 'getTableRow',
										value: function () {
											return document.createElement('tr')
										}
									},
									{
										key: 'getTableHead',
										value: function () {
											return document.createElement('thead')
										}
									},
									{
										key: 'getTableBody',
										value: function () {
											return document.createElement('tbody')
										}
									},
									{
										key: 'getTableHeaderCell',
										value: function (t) {
											var e = document.createElement('th')
											return (e.textContent = t), e
										}
									},
									{
										key: 'getTableCell',
										value: function () {
											return document.createElement('td')
										}
									},
									{
										key: 'getErrorMessage',
										value: function (t) {
											var e = document.createElement('p')
											return (
												(e.style = e.style || {}),
												(e.style.color = 'red'),
												e.appendChild(document.createTextNode(t)),
												e
											)
										}
									},
									{
										key: 'addInputError',
										value: function (t, e) {
											t.errmsg.setAttribute('role', 'alert')
										}
									},
									{ key: 'removeInputError', value: function (t) {} },
									{ key: 'addTableRowError', value: function (t) {} },
									{ key: 'removeTableRowError', value: function (t) {} },
									{
										key: 'getTabHolder',
										value: function (t) {
											var e = void 0 === t ? '' : t,
												r = document.createElement('div')
											return (
												(r.innerHTML =
													"<div class='je-tabholder tabs'></div><div class='content' id='".concat(
														e,
														"'></div><div class='je-tabholder--clear'></div>"
													)),
												r
											)
										}
									},
									{
										key: 'getTopTabHolder',
										value: function (t) {
											var e = void 0 === t ? '' : t,
												r = document.createElement('div')
											return (
												(r.innerHTML =
													"<div class='tabs je-tabholder--top'></div><div class='je-tabholder--clear'></div><div class='content' id='".concat(
														e,
														"'></div>"
													)),
												r
											)
										}
									},
									{
										key: 'applyStyles',
										value: function (t, e) {
											Object.keys(e).forEach(function (r) {
												return (t.style[r] = e[r])
											})
										}
									},
									{
										key: 'closest',
										value: function (t, e) {
											for (; t && t !== document; ) {
												if (!t[Fo]) return !1
												if (t[Fo](e)) return t
												t = t.parentNode
											}
											return !1
										}
									},
									{
										key: 'insertBasicTopTab',
										value: function (t, e) {
											e.firstChild.insertBefore(t, e.firstChild.firstChild)
										}
									},
									{
										key: 'getTab',
										value: function (t, e) {
											var r = document.createElement('div')
											return (
												r.appendChild(t),
												(r.id = e),
												r.classList.add('je-tab'),
												r
											)
										}
									},
									{
										key: 'getTopTab',
										value: function (t, e) {
											var r = document.createElement('div')
											return (
												r.appendChild(t),
												(r.id = e),
												r.classList.add('je-tab--top'),
												r
											)
										}
									},
									{
										key: 'getTabContentHolder',
										value: function (t) {
											return t.children[1]
										}
									},
									{
										key: 'getTopTabContentHolder',
										value: function (t) {
											return t.children[1]
										}
									},
									{
										key: 'getTabContent',
										value: function () {
											return this.getIndentedPanel()
										}
									},
									{
										key: 'getTopTabContent',
										value: function () {
											return this.getTopIndentedPanel()
										}
									},
									{
										key: 'markTabActive',
										value: function (t) {
											this.applyStyles(t.tab, {
												opacity: 1,
												background: 'white'
											}),
												void 0 !== t.rowPane
													? (t.rowPane.style.display = '')
													: (t.container.style.display = '')
										}
									},
									{
										key: 'markTabInactive',
										value: function (t) {
											this.applyStyles(t.tab, { opacity: 0.5, background: '' }),
												void 0 !== t.rowPane
													? (t.rowPane.style.display = 'none')
													: (t.container.style.display = 'none')
										}
									},
									{
										key: 'addTab',
										value: function (t, e) {
											t.children[0].appendChild(e)
										}
									},
									{
										key: 'addTopTab',
										value: function (t, e) {
											t.children[0].appendChild(e)
										}
									},
									{
										key: 'getBlockLink',
										value: function () {
											var t = document.createElement('a')
											return t.classList.add('je-block-link'), t
										}
									},
									{
										key: 'getBlockLinkHolder',
										value: function () {
											return document.createElement('div')
										}
									},
									{
										key: 'getLinksHolder',
										value: function () {
											return document.createElement('div')
										}
									},
									{
										key: 'createMediaLink',
										value: function (t, e, r) {
											t.appendChild(e),
												r.classList.add('je-media'),
												t.appendChild(r)
										}
									},
									{
										key: 'createImageLink',
										value: function (t, e, r) {
											t.appendChild(e), e.appendChild(r)
										}
									},
									{
										key: 'getFirstTab',
										value: function (t) {
											return t.firstChild.firstChild
										}
									},
									{ key: 'getInputGroup', value: function (t, e) {} },
									{
										key: 'cleanText',
										value: function (t) {
											var e = document.createElement('div')
											return (e.innerHTML = t), e.textContent || e.innerText
										}
									},
									{
										key: 'getDropZone',
										value: function (t) {
											var e = document.createElement('div')
											return (
												e.setAttribute('data-text', t),
												e.classList.add('je-dropzone'),
												e
											)
										}
									},
									{
										key: 'getUploadPreview',
										value: function (t, e, r) {
											var n = document.createElement('div')
											if (
												(n.classList.add('je-upload-preview'),
												'image' === t.mimeType.substr(0, 5))
											) {
												var i = document.createElement('img')
												;(i.src = r), n.appendChild(i)
											}
											var o = document.createElement('div')
											;(o.innerHTML += '<strong>Name:</strong> '
												.concat(t.name, '<br><strong>Type:</strong> ')
												.concat(t.type, '<br><strong>Size:</strong> ')
												.concat(t.formattedSize)),
												n.appendChild(o),
												n.appendChild(e)
											var a = document.createElement('div')
											return (a.style.clear = 'left'), n.appendChild(a), n
										}
									},
									{
										key: 'getProgressBar',
										value: function () {
											var t = document.createElement('progress')
											return (
												t.setAttribute('max', 100),
												t.setAttribute('value', 0),
												t
											)
										}
									},
									{
										key: 'updateProgressBar',
										value: function (t, e) {
											t && t.setAttribute('value', e)
										}
									},
									{
										key: 'updateProgressBarUnknown',
										value: function (t) {
											t && t.removeAttribute('value')
										}
									}
								]),
								e &&
									(function (t, e) {
										for (var r = 0; r < e.length; r++) {
											var n = e[r]
											;(n.enumerable = n.enumerable || !1),
												(n.configurable = !0),
												'value' in n && (n.writable = !0),
												Object.defineProperty(t, Do(n.key), n)
										}
									})(t.prototype, e),
								Object.defineProperty(t, 'prototype', { writable: !1 }),
								t
							)
							var t, e
						})()
					function Ho(t) {
						return (
							(Ho =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							Ho(t)
						)
					}
					function zo(t) {
						var e = (function (t) {
							if ('object' != Ho(t) || !t) return t
							var e = t[Symbol.toPrimitive]
							if (void 0 !== e) {
								var r = e.call(t, 'string')
								if ('object' != Ho(r)) return r
								throw new TypeError(
									'@@toPrimitive must return a primitive value.'
								)
							}
							return String(t)
						})(t)
						return 'symbol' == Ho(e) ? e : e + ''
					}
					function Mo() {
						try {
							var t = !Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							)
						} catch (t) {}
						return (Mo = function () {
							return !!t
						})()
					}
					function qo() {
						return (
							(qo =
								'undefined' != typeof Reflect && Reflect.get
									? Reflect.get.bind()
									: function (t, e, r) {
											var n = (function (t, e) {
												for (
													;
													!Object.prototype.hasOwnProperty.call(t, e) &&
													null !== (t = Uo(t));

												);
												return t
											})(t, e)
											if (n) {
												var i = Object.getOwnPropertyDescriptor(n, e)
												return i.get
													? i.get.call(arguments.length < 3 ? t : r)
													: i.value
											}
										}),
							qo.apply(this, arguments)
						)
					}
					function Uo(t) {
						return (
							(Uo = Object.setPrototypeOf
								? Object.getPrototypeOf.bind()
								: function (t) {
										return t.__proto__ || Object.getPrototypeOf(t)
									}),
							Uo(t)
						)
					}
					function Go(t, e) {
						return (
							(Go = Object.setPrototypeOf
								? Object.setPrototypeOf.bind()
								: function (t, e) {
										return (t.__proto__ = e), t
									}),
							Go(t, e)
						)
					}
					var $o = (function (t) {
						function e() {
							return (
								(function (t, e) {
									if (!(t instanceof e))
										throw new TypeError('Cannot call a class as a function')
								})(this, e),
								(function (t, e, r) {
									return (
										(e = Uo(e)),
										(function (t, e) {
											if (e && ('object' === Ho(e) || 'function' == typeof e))
												return e
											if (void 0 !== e)
												throw new TypeError(
													'Derived constructors may only return object or undefined'
												)
											return (function (t) {
												if (void 0 === t)
													throw new ReferenceError(
														"this hasn't been initialised - super() hasn't been called"
													)
												return t
											})(t)
										})(
											t,
											Mo()
												? Reflect.construct(e, r || [], Uo(t).constructor)
												: e.apply(t, r)
										)
									)
								})(this, e, arguments)
							)
						}
						return (
							(function (t, e) {
								if ('function' != typeof e && null !== e)
									throw new TypeError(
										'Super expression must either be null or a function'
									)
								;(t.prototype = Object.create(e && e.prototype, {
									constructor: { value: t, writable: !0, configurable: !0 }
								})),
									Object.defineProperty(t, 'prototype', { writable: !1 }),
									e && Go(t, e)
							})(e, t),
							(r = e),
							(n = [
								{
									key: 'getFormInputLabel',
									value: function (t, r) {
										var n = qo(Uo(e.prototype), 'getFormInputLabel', this).call(
											this,
											t,
											r
										)
										return n.classList.add('je-form-input-label'), n
									}
								},
								{
									key: 'getFormInputDescription',
									value: function (t) {
										var r = qo(
											Uo(e.prototype),
											'getFormInputDescription',
											this
										).call(this, t)
										return r.classList.add('je-form-input-label'), r
									}
								},
								{
									key: 'getIndentedPanel',
									value: function () {
										var t = qo(Uo(e.prototype), 'getIndentedPanel', this).call(
											this
										)
										return t.classList.add('je-indented-panel'), t
									}
								},
								{
									key: 'getTopIndentedPanel',
									value: function () {
										return this.getIndentedPanel()
									}
								},
								{
									key: 'getChildEditorHolder',
									value: function () {
										var t = qo(
											Uo(e.prototype),
											'getChildEditorHolder',
											this
										).call(this)
										return t.classList.add('je-child-editor-holder'), t
									}
								},
								{
									key: 'getHeaderButtonHolder',
									value: function () {
										var t = this.getButtonHolder()
										return t.classList.add('je-header-button-holder'), t
									}
								},
								{
									key: 'getTable',
									value: function () {
										var t = qo(Uo(e.prototype), 'getTable', this).call(this)
										return t.classList.add('je-table'), t
									}
								},
								{
									key: 'addInputError',
									value: function (t, e) {
										var r = this.closest(t, '.form-control') || t.controlgroup
										t.errmsg
											? (t.errmsg.style.display = 'block')
											: ((t.errmsg = document.createElement('div')),
												t.errmsg.setAttribute('class', 'errmsg'),
												(t.errmsg.style = t.errmsg.style || {}),
												(t.errmsg.style.color = 'red'),
												r.appendChild(t.errmsg)),
											(t.errmsg.innerHTML = ''),
											t.errmsg.appendChild(document.createTextNode(e)),
											t.errmsg.setAttribute('role', 'alert')
									}
								},
								{
									key: 'removeInputError',
									value: function (t) {
										t.style && (t.style.borderColor = ''),
											t.errmsg && (t.errmsg.style.display = 'none')
									}
								}
							]) &&
								(function (t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r]
										;(n.enumerable = n.enumerable || !1),
											(n.configurable = !0),
											'value' in n && (n.writable = !0),
											Object.defineProperty(t, zo(n.key), n)
									}
								})(r.prototype, n),
							Object.defineProperty(r, 'prototype', { writable: !1 }),
							r
						)
						var r, n
					})(Vo)
					function Jo(t) {
						return (
							(Jo =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							Jo(t)
						)
					}
					function Wo(t) {
						var e = (function (t) {
							if ('object' != Jo(t) || !t) return t
							var e = t[Symbol.toPrimitive]
							if (void 0 !== e) {
								var r = e.call(t, 'string')
								if ('object' != Jo(r)) return r
								throw new TypeError(
									'@@toPrimitive must return a primitive value.'
								)
							}
							return String(t)
						})(t)
						return 'symbol' == Jo(e) ? e : e + ''
					}
					function Zo() {
						try {
							var t = !Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							)
						} catch (t) {}
						return (Zo = function () {
							return !!t
						})()
					}
					function Yo() {
						return (
							(Yo =
								'undefined' != typeof Reflect && Reflect.get
									? Reflect.get.bind()
									: function (t, e, r) {
											var n = (function (t, e) {
												for (
													;
													!Object.prototype.hasOwnProperty.call(t, e) &&
													null !== (t = Qo(t));

												);
												return t
											})(t, e)
											if (n) {
												var i = Object.getOwnPropertyDescriptor(n, e)
												return i.get
													? i.get.call(arguments.length < 3 ? t : r)
													: i.value
											}
										}),
							Yo.apply(this, arguments)
						)
					}
					function Qo(t) {
						return (
							(Qo = Object.setPrototypeOf
								? Object.getPrototypeOf.bind()
								: function (t) {
										return t.__proto__ || Object.getPrototypeOf(t)
									}),
							Qo(t)
						)
					}
					function Ko(t, e) {
						return (
							(Ko = Object.setPrototypeOf
								? Object.setPrototypeOf.bind()
								: function (t, e) {
										return (t.__proto__ = e), t
									}),
							Ko(t, e)
						)
					}
					$o.rules = {
						'.je-form-input-label':
							'display:block;margin-bottom:3px;font-weight:bold',
						'.je-form-input-description':
							'display:inline-block;margin:0;font-size:0.8em;font-style:italic',
						'.je-indented-panel':
							'padding:5px;margin:10px;border-radius:3px;border:1px%20solid%20%23ddd',
						'.je-child-editor-holder': 'margin-bottom:8px',
						'.je-header-button-holder':
							'display:inline-block;margin-left:10px;font-size:0.8em;vertical-align:middle',
						'.je-table': 'margin-bottom:5px;border-bottom:1px%20solid%20%23ccc',
						'.je-upload-preview img':
							'float:left;margin:0%200.5rem%200.5rem%200;max-width:100%25;max-height:5rem',
						'.je-dropzone':
							'position:relative;margin:0.5rem%200;border:2px%20dashed%20black;width:100%25;height:60px;background:teal;transition:all%200.5s',
						'.je-dropzone:before':
							'position:absolute;content:attr(data-text);color:rgba(0%2C%200%2C%200%2C%200.6);left:50%25;top:50%25;transform:translate(-50%25%2C%20-50%25)',
						'.je-dropzone.valid-dropzone': 'background:green',
						'.je-dropzone.invalid-dropzone': 'background:red'
					}
					var Xo = (function (t) {
						function e() {
							return (
								(function (t, e) {
									if (!(t instanceof e))
										throw new TypeError('Cannot call a class as a function')
								})(this, e),
								(function (t, e, r) {
									return (
										(e = Qo(e)),
										(function (t, e) {
											if (e && ('object' === Jo(e) || 'function' == typeof e))
												return e
											if (void 0 !== e)
												throw new TypeError(
													'Derived constructors may only return object or undefined'
												)
											return (function (t) {
												if (void 0 === t)
													throw new ReferenceError(
														"this hasn't been initialised - super() hasn't been called"
													)
												return t
											})(t)
										})(
											t,
											Zo()
												? Reflect.construct(e, r || [], Qo(t).constructor)
												: e.apply(t, r)
										)
									)
								})(this, e, arguments)
							)
						}
						return (
							(function (t, e) {
								if ('function' != typeof e && null !== e)
									throw new TypeError(
										'Super expression must either be null or a function'
									)
								;(t.prototype = Object.create(e && e.prototype, {
									constructor: { value: t, writable: !0, configurable: !0 }
								})),
									Object.defineProperty(t, 'prototype', { writable: !1 }),
									e && Ko(t, e)
							})(e, t),
							(r = e),
							(n = [
								{
									key: 'getOptInSwitch',
									value: function (t) {
										var e = this.getHiddenLabel(t + ' opt-in')
										e.setAttribute('for', t + '-opt-in')
										var r = document.createElement('label')
										r.classList.add('switch')
										var n = document.createElement('input')
										n.setAttribute('type', 'checkbox'),
											n.setAttribute('id', t + '-opt-in'),
											n.classList.add('json-editor-opt-in')
										var i = document.createElement('span')
										i.classList.add('switch-slider')
										var o = document.createElement('span')
										return (
											o.classList.add('sr-only'),
											(o.textContent = t + '-opt-in'),
											r.appendChild(o),
											r.appendChild(n),
											r.appendChild(i),
											{ label: e, checkbox: n, container: r }
										)
									}
								},
								{
									key: 'getSelectInput',
									value: function (t, r) {
										var n = Yo(Qo(e.prototype), 'getSelectInput', this).call(
											this,
											t
										)
										return n.classList.add('form-control'), n
									}
								},
								{
									key: 'setGridColumnSize',
									value: function (t, e, r) {
										t.classList.add('col-md-'.concat(e)),
											r && t.classList.add('col-md-offset-'.concat(r))
									}
								},
								{
									key: 'afterInputReady',
									value: function (t) {
										t.controlgroup ||
											((t.controlgroup = this.closest(t, '.form-group')),
											this.closest(t, '.compact') &&
												(t.controlgroup.style.marginBottom = 0))
									}
								},
								{
									key: 'getTextareaInput',
									value: function () {
										var t = document.createElement('textarea')
										return t.classList.add('form-control'), t
									}
								},
								{
									key: 'getRangeInput',
									value: function (t, r, n, i, o) {
										return Yo(Qo(e.prototype), 'getRangeInput', this).call(
											this,
											t,
											r,
											n,
											i,
											o
										)
									}
								},
								{
									key: 'getFormInputField',
									value: function (t) {
										var r = Yo(Qo(e.prototype), 'getFormInputField', this).call(
											this,
											t
										)
										return (
											'checkbox' !== t &&
												'radio' !== t &&
												r.classList.add('form-control'),
											r
										)
									}
								},
								{
									key: 'getHiddenLabel',
									value: function (t) {
										var e = document.createElement('label')
										return (e.textContent = t), e.classList.add('sr-only'), e
									}
								},
								{
									key: 'visuallyHidden',
									value: function (t) {
										t && t.classList.add('sr-only')
									}
								},
								{
									key: 'getHiddenText',
									value: function (t) {
										var e = document.createElement('span')
										return (e.textContent = t), e.classList.add('sr-only'), e
									}
								},
								{
									key: 'getFormControl',
									value: function (t, e, r, n, i) {
										var o = document.createElement('div')
										return (
											!t || ('checkbox' !== e.type && 'radio' !== e.type)
												? (o.classList.add('form-group'),
													t &&
														(t.classList.add('control-label'),
														o.appendChild(t),
														n && t.appendChild(n)),
													o.appendChild(e))
												: (o.classList.add(e.type),
													n && t.appendChild(n),
													t.insertBefore(e, t.firstChild),
													o.appendChild(t)),
											r && o.appendChild(r),
											'div' !== e.tagName.toLowerCase() &&
												e &&
												t &&
												i &&
												(t.setAttribute('for', i), e.setAttribute('id', i)),
											'div' !== e.tagName.toLowerCase() &&
												e &&
												r &&
												(r.setAttribute('id', i + '-description'),
												e.setAttribute('aria-describedby', i + '-description')),
											o
										)
									}
								},
								{
									key: 'getIndentedPanel',
									value: function () {
										var t = document.createElement('div')
										return (
											t.classList.add('well', 'well-sm'),
											(t.style.paddingBottom = 0),
											t
										)
									}
								},
								{
									key: 'getInfoButton',
									value: function (t) {
										var e = document.createElement('span')
										e.classList.add(
											'glyphicon',
											'glyphicon-info-sign',
											'pull-right'
										),
											(e.style.padding = '.25rem'),
											(e.style.position = 'relative'),
											(e.style.display = 'inline-block')
										var r = document.createElement('span')
										return (
											(r.style['font-family'] = 'sans-serif'),
											(r.style.visibility = 'hidden'),
											(r.style['background-color'] = 'rgba(50, 50, 50, .75)'),
											(r.style.margin = '0 .25rem'),
											(r.style.color = '#FAFAFA'),
											(r.style.padding = '.5rem 1rem'),
											(r.style['border-radius'] = '.25rem'),
											(r.style.width = '25rem'),
											(r.style.position = 'absolute'),
											(r.innerText = t),
											(e.onmouseover = function () {
												r.style.visibility = 'visible'
											}),
											(e.onmouseleave = function () {
												r.style.visibility = 'hidden'
											}),
											e.appendChild(r),
											e
										)
									}
								},
								{
									key: 'getFormInputDescription',
									value: function (t) {
										var e = document.createElement('p')
										return (
											e.classList.add('help-block'),
											window.DOMPurify
												? (e.innerHTML = window.DOMPurify.sanitize(t))
												: (e.textContent = this.cleanText(t)),
											e
										)
									}
								},
								{
									key: 'getHeaderContainer',
									value: function () {
										return document.createElement('div')
									}
								},
								{
									key: 'getHeader',
									value: function (t, e) {
										var r = document.createElement('span')
										return (
											r.classList.add('h3'),
											'string' == typeof t
												? (r.textContent = t)
												: r.appendChild(t),
											r
										)
									}
								},
								{
									key: 'getHeaderButtonHolder',
									value: function () {
										var t = this.getButtonHolder()
										return (t.style.marginLeft = '10px'), t
									}
								},
								{
									key: 'getButtonHolder',
									value: function () {
										var t = document.createElement('span')
										return t.classList.add('btn-group'), t
									}
								},
								{
									key: 'getButton',
									value: function (t, r, n) {
										var i = Yo(Qo(e.prototype), 'getButton', this).call(
											this,
											t,
											r,
											n
										)
										return i.classList.add('btn', 'btn-default'), i
									}
								},
								{
									key: 'getTableContainer',
									value: function () {
										var t = Yo(Qo(e.prototype), 'getTableContainer', this).call(
											this
										)
										return t.classList.add('table-responsive'), t
									}
								},
								{
									key: 'getTable',
									value: function () {
										var t = document.createElement('table')
										return (
											t.classList.add('table', 'table-bordered'),
											(t.style.width = 'auto'),
											(t.style.maxWidth = 'none'),
											t
										)
									}
								},
								{
									key: 'addInputError',
									value: function (t, e) {
										t.controlgroup &&
											(t.controlgroup.classList.add('has-error'),
											t.errmsg
												? (t.errmsg.style.display = '')
												: ((t.errmsg = document.createElement('p')),
													t.errmsg.classList.add('help-block', 'errormsg'),
													t.controlgroup.appendChild(t.errmsg)),
											(t.errmsg.textContent = e),
											t.errmsg.setAttribute('role', 'alert'))
									}
								},
								{
									key: 'removeInputError',
									value: function (t) {
										t.errmsg &&
											((t.errmsg.style.display = 'none'),
											t.controlgroup.classList.remove('has-error'))
									}
								},
								{
									key: 'getTabHolder',
									value: function (t) {
										var e = void 0 === t ? '' : t,
											r = document.createElement('div')
										return (
											(r.innerHTML =
												"<ul class='col-md-2 nav nav-pills nav-stacked' id='"
													.concat(
														e,
														"' role='tablist'></ul><div class='col-md-10 tab-content active well well-small'  id='"
													)
													.concat(e, "'></div>")),
											r
										)
									}
								},
								{
									key: 'getTopTabHolder',
									value: function (t) {
										var e = void 0 === t ? '' : t,
											r = document.createElement('div')
										return (
											(r.innerHTML = "<ul class='nav nav-tabs' id='"
												.concat(
													e,
													"' role='tablist'></ul><div class='tab-content active well well-small'  id='"
												)
												.concat(e, "'></div>")),
											r
										)
									}
								},
								{
									key: 'getTab',
									value: function (t, e) {
										var r = document.createElement('li')
										r.setAttribute('role', 'presentation')
										var n = document.createElement('a')
										return (
											n.setAttribute('href', '#'.concat(e)),
											n.appendChild(t),
											n.setAttribute('aria-controls', e),
											n.setAttribute('role', 'tab'),
											n.setAttribute('data-toggle', 'tab'),
											r.appendChild(n),
											r
										)
									}
								},
								{
									key: 'getTopTab',
									value: function (t, e) {
										var r = document.createElement('li')
										r.setAttribute('role', 'presentation')
										var n = document.createElement('a')
										return (
											n.setAttribute('href', '#'.concat(e)),
											n.appendChild(t),
											n.setAttribute('aria-controls', e),
											n.setAttribute('role', 'tab'),
											n.setAttribute('data-toggle', 'tab'),
											r.appendChild(n),
											r
										)
									}
								},
								{
									key: 'getTabContent',
									value: function () {
										var t = document.createElement('div')
										return (
											t.classList.add('tab-pane'),
											t.setAttribute('role', 'tabpanel'),
											t
										)
									}
								},
								{
									key: 'getTopTabContent',
									value: function () {
										var t = document.createElement('div')
										return (
											t.classList.add('tab-pane'),
											t.setAttribute('role', 'tabpanel'),
											t
										)
									}
								},
								{
									key: 'markTabActive',
									value: function (t) {
										t.tab.classList.add('active'),
											void 0 !== t.rowPane
												? t.rowPane.classList.add('active')
												: t.container.classList.add('active')
									}
								},
								{
									key: 'markTabInactive',
									value: function (t) {
										t.tab.classList.remove('active'),
											void 0 !== t.rowPane
												? t.rowPane.classList.remove('active')
												: t.container.classList.remove('active')
									}
								},
								{
									key: 'getProgressBar',
									value: function () {
										var t = document.createElement('div')
										t.classList.add('progress')
										var e = document.createElement('div')
										return (
											e.classList.add('progress-bar'),
											e.setAttribute('role', 'progressbar'),
											e.setAttribute('aria-valuenow', 0),
											e.setAttribute('aria-valuemin', 0),
											e.setAttribute('aria-valuenax', 100),
											(e.innerHTML = ''.concat(0, '%')),
											t.appendChild(e),
											t
										)
									}
								},
								{
									key: 'updateProgressBar',
									value: function (t, e) {
										if (t) {
											var r = t.firstChild,
												n = ''.concat(e, '%')
											r.setAttribute('aria-valuenow', e),
												(r.style.width = n),
												(r.innerHTML = n)
										}
									}
								},
								{
									key: 'updateProgressBarUnknown',
									value: function (t) {
										if (t) {
											var e = t.firstChild
											t.classList.add('progress', 'progress-striped', 'active'),
												e.removeAttribute('aria-valuenow'),
												(e.style.width = '100%'),
												(e.innerHTML = '')
										}
									}
								},
								{
									key: 'getInputGroup',
									value: function (t, e) {
										if (t) {
											var r = document.createElement('div')
											r.classList.add('input-group'), r.appendChild(t)
											var n = document.createElement('div')
											n.classList.add('input-group-btn'), r.appendChild(n)
											for (var i = 0; i < e.length; i++) n.appendChild(e[i])
											return r
										}
									}
								}
							]) &&
								(function (t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r]
										;(n.enumerable = n.enumerable || !1),
											(n.configurable = !0),
											'value' in n && (n.writable = !0),
											Object.defineProperty(t, Wo(n.key), n)
									}
								})(r.prototype, n),
							Object.defineProperty(r, 'prototype', { writable: !1 }),
							r
						)
						var r, n
					})(Vo)
					function ta(t) {
						return (
							(ta =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							ta(t)
						)
					}
					function ea(t) {
						var e = (function (t) {
							if ('object' != ta(t) || !t) return t
							var e = t[Symbol.toPrimitive]
							if (void 0 !== e) {
								var r = e.call(t, 'string')
								if ('object' != ta(r)) return r
								throw new TypeError(
									'@@toPrimitive must return a primitive value.'
								)
							}
							return String(t)
						})(t)
						return 'symbol' == ta(e) ? e : e + ''
					}
					function ra() {
						try {
							var t = !Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							)
						} catch (t) {}
						return (ra = function () {
							return !!t
						})()
					}
					function na() {
						return (
							(na =
								'undefined' != typeof Reflect && Reflect.get
									? Reflect.get.bind()
									: function (t, e, r) {
											var n = (function (t, e) {
												for (
													;
													!Object.prototype.hasOwnProperty.call(t, e) &&
													null !== (t = ia(t));

												);
												return t
											})(t, e)
											if (n) {
												var i = Object.getOwnPropertyDescriptor(n, e)
												return i.get
													? i.get.call(arguments.length < 3 ? t : r)
													: i.value
											}
										}),
							na.apply(this, arguments)
						)
					}
					function ia(t) {
						return (
							(ia = Object.setPrototypeOf
								? Object.getPrototypeOf.bind()
								: function (t) {
										return t.__proto__ || Object.getPrototypeOf(t)
									}),
							ia(t)
						)
					}
					function oa(t, e) {
						return (
							(oa = Object.setPrototypeOf
								? Object.setPrototypeOf.bind()
								: function (t, e) {
										return (t.__proto__ = e), t
									}),
							oa(t, e)
						)
					}
					Xo.rules = {
						'.switch':
							'position:relative;display:inline-block;width:28px;height:16px;margin-right:10px',
						'.switch input': 'opacity:0;width:0;height:0',
						'.switch-slider':
							'position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:%23ccc;transition:.1s;border-radius:34px',
						'.switch-slider:before':
							'position:absolute;content:%22%22;height:12px;width:12px;left:1px;top:2px;background-color:white;transition:.1s;border-radius:50%25',
						'input:checked + .switch-slider': 'background-color:%232196F3',
						'input:focus + .switch-slider':
							'box-shadow:0%200%201px%20%232196F3',
						'input:checked + .switch-slider:before':
							'transform:translateX(12px)',
						'input:disabled + .switch-slider': 'opacity:0.5'
					}
					var aa = {
							disable_theme_rules: !1,
							input_size: 'normal',
							custom_forms: !1,
							object_indent: !0,
							object_background: 'bg-light',
							object_text: '',
							table_border: !1,
							table_zebrastyle: !1,
							tooltip: 'bootstrap'
						},
						sa = (function (t) {
							function e(t) {
								return (
									(function (t, e) {
										if (!(t instanceof e))
											throw new TypeError('Cannot call a class as a function')
									})(this, e),
									(function (t, e, r) {
										return (
											(e = ia(e)),
											(function (t, e) {
												if (e && ('object' === ta(e) || 'function' == typeof e))
													return e
												if (void 0 !== e)
													throw new TypeError(
														'Derived constructors may only return object or undefined'
													)
												return (function (t) {
													if (void 0 === t)
														throw new ReferenceError(
															"this hasn't been initialised - super() hasn't been called"
														)
													return t
												})(t)
											})(
												t,
												ra()
													? Reflect.construct(e, r || [], ia(t).constructor)
													: e.apply(t, r)
											)
										)
									})(this, e, [t, aa])
								)
							}
							return (
								(function (t, e) {
									if ('function' != typeof e && null !== e)
										throw new TypeError(
											'Super expression must either be null or a function'
										)
									;(t.prototype = Object.create(e && e.prototype, {
										constructor: { value: t, writable: !0, configurable: !0 }
									})),
										Object.defineProperty(t, 'prototype', { writable: !1 }),
										e && oa(t, e)
								})(e, t),
								(r = e),
								(n = [
									{
										key: 'getSelectInput',
										value: function (t, r) {
											var n = na(ia(e.prototype), 'getSelectInput', this).call(
												this,
												t
											)
											return (
												n.classList.add('form-control'),
												!1 === this.options.custom_forms
													? ('small' === this.options.input_size &&
															n.classList.add('form-control-sm'),
														'large' === this.options.input_size &&
															n.classList.add('form-control-lg'))
													: (n.classList.remove('form-control'),
														n.classList.add('custom-select'),
														'small' === this.options.input_size &&
															n.classList.add('custom-select-sm'),
														'large' === this.options.input_size &&
															n.classList.add('custom-select-lg')),
												n
											)
										}
									},
									{
										key: 'getContainer',
										value: function () {
											var t = document.createElement('div')
											return (
												this.options.object_indent ||
													t.classList.add('je-noindent'),
												t
											)
										}
									},
									{
										key: 'getOptInSwitch',
										value: function (t) {
											var e = this.getHiddenLabel(t + ' opt-in')
											e.setAttribute('for', t + '-opt-in')
											var r = document.createElement('div')
											r.classList.add(
												'custom-control',
												'custom-switch',
												'd-inline-block',
												'fs-6'
											)
											var n = document.createElement('input')
											n.setAttribute('type', 'checkbox'),
												n.setAttribute('id', t + '-opt-in'),
												n.classList.add(
													'custom-control-input',
													'json-editor-opt-in'
												)
											var i = document.createElement('label')
											i.setAttribute('for', t + '-opt-in'),
												i.classList.add('custom-control-label')
											var o = document.createElement('span')
											return (
												o.classList.add('sr-only'),
												(o.textContent = t + '-opt-in'),
												i.appendChild(o),
												r.appendChild(n),
												r.appendChild(i),
												{ label: e, checkbox: n, container: r }
											)
										}
									},
									{
										key: 'setGridColumnSize',
										value: function (t, e, r) {
											t.classList.add('col-md-'.concat(e)),
												r && t.classList.add('offset-md-'.concat(r))
										}
									},
									{
										key: 'afterInputReady',
										value: function (t) {
											if (!t.controlgroup) {
												var e = t.name
												t.id = e
												var r =
													t.parentNode.parentNode.getElementsByTagName(
														'label'
													)[0]
												r && (r.htmlFor = e),
													(t.controlgroup = this.closest(t, '.form-group'))
											}
										}
									},
									{
										key: 'getTextareaInput',
										value: function () {
											var t = document.createElement('textarea')
											return (
												t.classList.add('form-control'),
												'small' === this.options.input_size &&
													t.classList.add('form-control-sm'),
												'large' === this.options.input_size &&
													t.classList.add('form-control-lg'),
												t
											)
										}
									},
									{
										key: 'getRangeInput',
										value: function (t, r, n, i, o) {
											var a = na(ia(e.prototype), 'getRangeInput', this).call(
												this,
												t,
												r,
												n,
												i,
												o
											)
											return (
												!0 === this.options.custom_forms &&
													(a.classList.remove('form-control'),
													a.classList.add('custom-range')),
												a
											)
										}
									},
									{
										key: 'getStepperButtons',
										value: function (t) {
											var e = document.createElement('div'),
												r = document.createElement('div'),
												n = document.createElement('div'),
												i = document.createElement('button')
											i.setAttribute('type', 'button')
											var o = document.createElement('button')
											o.setAttribute('type', 'button'),
												e.appendChild(r),
												e.appendChild(t),
												e.appendChild(n),
												r.appendChild(i),
												n.appendChild(o),
												e.classList.add('input-group'),
												r.classList.add('input-group-prepend'),
												n.classList.add('input-group-append'),
												i.classList.add('btn'),
												i.classList.add('btn-secondary'),
												i.classList.add('stepper-down'),
												o.classList.add('btn'),
												o.classList.add('btn-secondary'),
												o.classList.add('stepper-up'),
												t.getAttribute('readonly') &&
													(i.setAttribute('disabled', !0),
													o.setAttribute('disabled', !0)),
												(i.textContent = '-'),
												(o.textContent = '+')
											var a = function (t, e) {
													;(t.value = Number(e || t.value)),
														t.setAttribute('initialized', '1')
												},
												s = t.getAttribute('min'),
												l = t.getAttribute('max')
											return (
												t.addEventListener('change', function () {
													t.getAttribute('initialized') ||
														t.setAttribute('initialized', '1')
												}),
												i.addEventListener('click', function () {
													t.getAttribute('initialized')
														? s
															? Number(t.value) > Number(s) && t.stepDown()
															: t.stepDown()
														: a(t, s),
														c(t, 'change')
												}),
												o.addEventListener('click', function () {
													t.getAttribute('initialized')
														? l
															? Number(t.value) < Number(l) && t.stepUp()
															: t.stepUp()
														: a(t, s),
														c(t, 'change')
												}),
												e
											)
										}
									},
									{
										key: 'getFormInputField',
										value: function (t) {
											var r = na(
												ia(e.prototype),
												'getFormInputField',
												this
											).call(this, t)
											return (
												'checkbox' !== t &&
													'radio' !== t &&
													'file' !== t &&
													(r.classList.add('form-control'),
													'small' === this.options.input_size &&
														r.classList.add('form-control-sm'),
													'large' === this.options.input_size &&
														r.classList.add('form-control-lg')),
												'file' === t && r.classList.add('form-control-file'),
												r
											)
										}
									},
									{
										key: 'getHiddenLabel',
										value: function (t) {
											var e = document.createElement('label')
											return (e.textContent = t), e.classList.add('sr-only'), e
										}
									},
									{
										key: 'visuallyHidden',
										value: function (t) {
											t && t.classList.add('sr-only')
										}
									},
									{
										key: 'getHiddenText',
										value: function (t) {
											var e = document.createElement('span')
											return (e.textContent = t), e.classList.add('sr-only'), e
										}
									},
									{
										key: 'getFormControl',
										value: function (t, e, r, n, i) {
											var o = document.createElement('div')
											if (
												(o.classList.add('form-group'),
												!t || ('checkbox' !== e.type && 'radio' !== e.type))
											)
												t && (o.appendChild(t), n && o.appendChild(n)),
													o.appendChild(e)
											else {
												var a = document.createElement('div')
												!1 === this.options.custom_forms
													? (a.classList.add('form-check'),
														e.classList.add('form-check-input'),
														t.classList.add('form-check-label'))
													: (a.classList.add('custom-control'),
														e.classList.add('custom-control-input'),
														t.classList.add('custom-control-label'),
														'checkbox' === e.type
															? a.classList.add('custom-checkbox')
															: a.classList.add('custom-radio')),
													a.appendChild(e),
													a.appendChild(t),
													n && a.appendChild(n),
													o.appendChild(a)
											}
											return (
												r && o.appendChild(r),
												'div' !== e.tagName.toLowerCase() &&
													e &&
													t &&
													i &&
													(t.setAttribute('for', i), e.setAttribute('id', i)),
												'div' !== e.tagName.toLowerCase() &&
													e &&
													r &&
													(r.setAttribute('id', i + '-description'),
													e.setAttribute(
														'aria-describedby',
														i + '-description'
													)),
												o
											)
										}
									},
									{
										key: 'getInfoButton',
										value: function (t) {
											var e = document.createElement('button')
											;(e.type = 'button'),
												e.classList.add('ml-3', 'jsoneditor-twbs4-text-button'),
												e.setAttribute('data-toggle', 'tooltip'),
												e.setAttribute('data-placement', 'auto'),
												(e.title = t)
											var r = document.createTextNode('ⓘ')
											return (
												e.appendChild(r),
												'bootstrap' === this.options.tooltip
													? window.jQuery && window.jQuery().tooltip
														? window.jQuery(e).tooltip()
														: console.warn(
																'Could not find popper jQuery plugin of Bootstrap.'
															)
													: 'css' === this.options.tooltip &&
														e.classList.add('je-tooltip'),
												e
											)
										}
									},
									{
										key: 'getCheckbox',
										value: function () {
											return this.getFormInputField('checkbox')
										}
									},
									{
										key: 'getMultiCheckboxHolder',
										value: function (t, e, r, n) {
											var i = document.createElement('div')
											i.classList.add('form-group'),
												e && (i.appendChild(e), n && e.appendChild(n))
											var o = document.createElement('div')
											return (
												Object.values(t).forEach(function (t) {
													var e = t.firstChild
													o.appendChild(e)
												}),
												i.appendChild(o),
												r && i.appendChild(r),
												i
											)
										}
									},
									{
										key: 'getFormRadio',
										value: function (t) {
											var e = this.getFormInputField('radio')
											for (var r in t) e.setAttribute(r, t[r])
											return (
												!1 === this.options.custom_forms
													? e.classList.add('form-check-input')
													: e.classList.add('custom-control-input'),
												e
											)
										}
									},
									{
										key: 'getFormRadioLabel',
										value: function (t, e) {
											var r = document.createElement('label')
											return (
												!1 === this.options.custom_forms
													? r.classList.add('form-check-label')
													: r.classList.add('custom-control-label'),
												r.appendChild(document.createTextNode(t)),
												r
											)
										}
									},
									{
										key: 'getFormRadioControl',
										value: function (t, e, r) {
											var n = document.createElement('div')
											return (
												!1 === this.options.custom_forms
													? n.classList.add('form-check')
													: n.classList.add('custom-control', 'custom-radio'),
												n.appendChild(e),
												n.appendChild(t),
												r &&
													(!1 === this.options.custom_forms
														? n.classList.add('form-check-inline')
														: n.classList.add('custom-control-inline')),
												n
											)
										}
									},
									{
										key: 'getIndentedPanel',
										value: function () {
											var t = document.createElement('div')
											return (
												t.classList.add('card', 'card-body', 'mb-3'),
												this.options.object_background &&
													t.classList.add(this.options.object_background),
												this.options.object_text &&
													t.classList.add(this.options.object_text),
												t
											)
										}
									},
									{
										key: 'getFormInputDescription',
										value: function (t) {
											var e = document.createElement('small')
											return (
												e.classList.add('form-text'),
												window.DOMPurify
													? (e.innerHTML = window.DOMPurify.sanitize(t))
													: (e.textContent = this.cleanText(t)),
												e
											)
										}
									},
									{
										key: 'getHeader',
										value: function (t, e) {
											var r = document.createElement('span')
											return (
												r.classList.add('h3'),
												r.classList.add('card-title'),
												r.classList.add('level-' + e),
												'string' == typeof t
													? (r.textContent = t)
													: r.appendChild(t),
												(r.style.display = 'inline-block'),
												r
											)
										}
									},
									{
										key: 'getHeaderButtonHolder',
										value: function () {
											return this.getButtonHolder()
										}
									},
									{
										key: 'getButtonHolder',
										value: function () {
											var t = document.createElement('span')
											return t.classList.add('btn-group'), t
										}
									},
									{
										key: 'getFormButtonHolder',
										value: function (t) {
											var e = this.getButtonHolder()
											return (
												e.classList.add('d-block'),
												'center' === t
													? e.classList.add('text-center')
													: 'right' === t && e.classList.add('text-right'),
												e
											)
										}
									},
									{
										key: 'getButton',
										value: function (t, r, n) {
											var i = na(ia(e.prototype), 'getButton', this).call(
												this,
												t,
												r,
												n
											)
											return (
												i.classList.add('btn', 'btn-secondary', 'btn-sm'), i
											)
										}
									},
									{
										key: 'getTableContainer',
										value: function () {
											var t = na(
												ia(e.prototype),
												'getTableContainer',
												this
											).call(this)
											return t.classList.add('table-responsive'), t
										}
									},
									{
										key: 'getTable',
										value: function () {
											var t = document.createElement('table')
											return (
												t.classList.add('table', 'table-sm'),
												this.options.table_border &&
													t.classList.add('table-bordered'),
												this.options.table_zebrastyle &&
													t.classList.add('table-striped'),
												t
											)
										}
									},
									{
										key: 'getErrorMessage',
										value: function (t) {
											var e = document.createElement('div')
											return (
												e.classList.add('alert', 'alert-danger'),
												e.setAttribute('role', 'alert'),
												e.appendChild(document.createTextNode(t)),
												e
											)
										}
									},
									{
										key: 'addInputError',
										value: function (t, e) {
											t.controlgroup &&
												(t.controlgroup.classList.add('is-invalid'),
												t.errmsg ||
													((t.errmsg = document.createElement('p')),
													t.errmsg.classList.add('invalid-feedback'),
													t.controlgroup.appendChild(t.errmsg),
													(t.errmsg.style.display = 'block')),
												(t.errmsg.style.display = 'block'),
												(t.errmsg.textContent = e),
												t.errmsg.setAttribute('role', 'alert'))
										}
									},
									{
										key: 'removeInputError',
										value: function (t) {
											t.errmsg &&
												((t.errmsg.style.display = 'none'),
												t.controlgroup.classList.remove('is-invalid'))
										}
									},
									{
										key: 'getTabHolder',
										value: function (t) {
											var e = document.createElement('div'),
												r = void 0 === t ? '' : t
											return (
												(e.innerHTML = "<div class='col-md-2' id='"
													.concat(
														r,
														"'><ul class='nav flex-column nav-pills'></ul></div><div class='col-md-10'><div class='tab-content' id='"
													)
													.concat(r, "'></div></div>")),
												e.classList.add('row'),
												e
											)
										}
									},
									{
										key: 'addTab',
										value: function (t, e) {
											t.children[0].children[0].appendChild(e)
										}
									},
									{
										key: 'getTabContentHolder',
										value: function (t) {
											return t.children[1].children[0]
										}
									},
									{
										key: 'getTopTabHolder',
										value: function (t) {
											var e = void 0 === t ? '' : t,
												r = document.createElement('div')
											return (
												r.classList.add('card'),
												(r.innerHTML =
													"<div class='card-header'><ul class='nav nav-tabs card-header-tabs' id='"
														.concat(
															e,
															"'></ul></div><div class='card-body'><div class='tab-content' id='"
														)
														.concat(e, "'></div></div>")),
												r
											)
										}
									},
									{
										key: 'getTab',
										value: function (t, e) {
											var r = document.createElement('li')
											r.classList.add('nav-item')
											var n = document.createElement('a')
											return (
												n.classList.add('nav-link'),
												n.setAttribute('href', '#'.concat(e)),
												n.setAttribute('data-toggle', 'tab'),
												n.appendChild(t),
												r.appendChild(n),
												r
											)
										}
									},
									{
										key: 'getTopTab',
										value: function (t, e) {
											var r = document.createElement('li')
											r.classList.add('nav-item')
											var n = document.createElement('a')
											return (
												n.classList.add('nav-link'),
												n.setAttribute('href', '#'.concat(e)),
												n.setAttribute('data-toggle', 'tab'),
												n.appendChild(t),
												r.appendChild(n),
												r
											)
										}
									},
									{
										key: 'getTabContent',
										value: function () {
											var t = document.createElement('div')
											return (
												t.classList.add('tab-pane'),
												t.setAttribute('role', 'tabpanel'),
												t
											)
										}
									},
									{
										key: 'getTopTabContent',
										value: function () {
											var t = document.createElement('div')
											return (
												t.classList.add('tab-pane'),
												t.setAttribute('role', 'tabpanel'),
												t
											)
										}
									},
									{
										key: 'markTabActive',
										value: function (t) {
											t.tab.firstChild.classList.add('active'),
												void 0 !== t.rowPane
													? t.rowPane.classList.add('active')
													: t.container.classList.add('active')
										}
									},
									{
										key: 'markTabInactive',
										value: function (t) {
											t.tab.firstChild.classList.remove('active'),
												void 0 !== t.rowPane
													? t.rowPane.classList.remove('active')
													: t.container.classList.remove('active')
										}
									},
									{
										key: 'insertBasicTopTab',
										value: function (t, e) {
											e.children[0].children[0].insertBefore(
												t,
												e.children[0].children[0].firstChild
											)
										}
									},
									{
										key: 'addTopTab',
										value: function (t, e) {
											t.children[0].children[0].appendChild(e)
										}
									},
									{
										key: 'getTopTabContentHolder',
										value: function (t) {
											return t.children[1].children[0]
										}
									},
									{
										key: 'getFirstTab',
										value: function (t) {
											return t.firstChild.firstChild.firstChild
										}
									},
									{
										key: 'getProgressBar',
										value: function () {
											var t = document.createElement('div')
											t.classList.add('progress')
											var e = document.createElement('div')
											return (
												e.classList.add('progress-bar'),
												e.setAttribute('role', 'progressbar'),
												e.setAttribute('aria-valuenow', 0),
												e.setAttribute('aria-valuemin', 0),
												e.setAttribute('aria-valuenax', 100),
												(e.innerHTML = ''.concat(0, '%')),
												t.appendChild(e),
												t
											)
										}
									},
									{
										key: 'updateProgressBar',
										value: function (t, e) {
											if (t) {
												var r = t.firstChild,
													n = ''.concat(e, '%')
												r.setAttribute('aria-valuenow', e),
													(r.style.width = n),
													(r.innerHTML = n)
											}
										}
									},
									{
										key: 'updateProgressBarUnknown',
										value: function (t) {
											if (t) {
												var e = t.firstChild
												t.classList.add(
													'progress',
													'progress-striped',
													'active'
												),
													e.removeAttribute('aria-valuenow'),
													(e.style.width = '100%'),
													(e.innerHTML = '')
											}
										}
									},
									{
										key: 'getBlockLink',
										value: function () {
											var t = document.createElement('a')
											return t.classList.add('mb-3', 'd-inline-block'), t
										}
									},
									{
										key: 'getLinksHolder',
										value: function () {
											return document.createElement('div')
										}
									},
									{
										key: 'getInputGroup',
										value: function (t, e) {
											if (t) {
												var r = document.createElement('div')
												r.classList.add('input-group'), r.appendChild(t)
												var n = document.createElement('div')
												n.classList.add('input-group-append'), r.appendChild(n)
												for (var i = 0; i < e.length; i++)
													e[i].classList.remove('mr-2', 'btn-secondary'),
														e[i].classList.add('btn-outline-secondary'),
														n.appendChild(e[i])
												return r
											}
										}
									}
								]) &&
									(function (t, e) {
										for (var r = 0; r < e.length; r++) {
											var n = e[r]
											;(n.enumerable = n.enumerable || !1),
												(n.configurable = !0),
												'value' in n && (n.writable = !0),
												Object.defineProperty(t, ea(n.key), n)
										}
									})(r.prototype, n),
								Object.defineProperty(r, 'prototype', { writable: !1 }),
								r
							)
							var r, n
						})(Vo)
					function la(t) {
						return (
							(la =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							la(t)
						)
					}
					function ca(t) {
						var e = (function (t) {
							if ('object' != la(t) || !t) return t
							var e = t[Symbol.toPrimitive]
							if (void 0 !== e) {
								var r = e.call(t, 'string')
								if ('object' != la(r)) return r
								throw new TypeError(
									'@@toPrimitive must return a primitive value.'
								)
							}
							return String(t)
						})(t)
						return 'symbol' == la(e) ? e : e + ''
					}
					function ua() {
						try {
							var t = !Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							)
						} catch (t) {}
						return (ua = function () {
							return !!t
						})()
					}
					function ha() {
						return (
							(ha =
								'undefined' != typeof Reflect && Reflect.get
									? Reflect.get.bind()
									: function (t, e, r) {
											var n = (function (t, e) {
												for (
													;
													!Object.prototype.hasOwnProperty.call(t, e) &&
													null !== (t = pa(t));

												);
												return t
											})(t, e)
											if (n) {
												var i = Object.getOwnPropertyDescriptor(n, e)
												return i.get
													? i.get.call(arguments.length < 3 ? t : r)
													: i.value
											}
										}),
							ha.apply(this, arguments)
						)
					}
					function pa(t) {
						return (
							(pa = Object.setPrototypeOf
								? Object.getPrototypeOf.bind()
								: function (t) {
										return t.__proto__ || Object.getPrototypeOf(t)
									}),
							pa(t)
						)
					}
					function da(t, e) {
						return (
							(da = Object.setPrototypeOf
								? Object.setPrototypeOf.bind()
								: function (t, e) {
										return (t.__proto__ = e), t
									}),
							da(t, e)
						)
					}
					sa.rules = {
						'.jsoneditor-twbs4-text-button':
							'background:none;padding:0;border:0;color:currentColor',
						'td > .form-group': 'margin-bottom:0',
						'.json-editor-btn-upload': 'margin-top:1rem',
						'.je-noindent .card': 'padding:0;border:0',
						'.je-tooltip:hover::before':
							'display:block;position:absolute;font-size:0.8em;color:%23fff;border-radius:0.2em;content:attr(title);background-color:%23000;margin-top:-2.5em;padding:0.3em',
						'.je-tooltip:hover::after':
							'display:block;position:absolute;font-size:0.8em;color:%23fff',
						'.select2-container--default .select2-selection--single':
							'height:calc(1.5em%20%2B%200.75rem%20%2B%202px)',
						'.select2-container--default   .select2-selection--single   .select2-selection__arrow':
							'height:calc(1.5em%20%2B%200.75rem%20%2B%202px)',
						'.select2-container--default   .select2-selection--single   .select2-selection__rendered':
							'line-height:calc(1.5em%20%2B%200.75rem%20%2B%202px)',
						'.selectize-control.form-control': 'padding:0',
						'.selectize-dropdown.form-control': 'padding:0;height:auto',
						'.je-upload-preview img':
							'float:left;margin:0%200.5rem%200.5rem%200;max-width:100%25;max-height:5rem',
						'.je-dropzone':
							'position:relative;margin:0.5rem%200;border:2px%20dashed%20black;width:100%25;height:60px;background:teal;transition:all%200.5s',
						'.je-dropzone:before':
							'position:absolute;content:attr(data-text);color:rgba(0%2C%200%2C%200%2C%200.6);left:50%25;top:50%25;transform:translate(-50%25%2C%20-50%25)',
						'.je-dropzone.valid-dropzone': 'background:green',
						'.je-dropzone.invalid-dropzone': 'background:red'
					}
					var fa = {
							disable_theme_rules: !1,
							input_size: 'normal',
							object_indent: !0,
							object_background: 'bg-light',
							object_text: '',
							table_border: !1,
							table_zebrastyle: !1,
							tooltip: 'bootstrap'
						},
						ya = (function (t) {
							function e(t) {
								return (
									(function (t, e) {
										if (!(t instanceof e))
											throw new TypeError('Cannot call a class as a function')
									})(this, e),
									(function (t, e, r) {
										return (
											(e = pa(e)),
											(function (t, e) {
												if (e && ('object' === la(e) || 'function' == typeof e))
													return e
												if (void 0 !== e)
													throw new TypeError(
														'Derived constructors may only return object or undefined'
													)
												return (function (t) {
													if (void 0 === t)
														throw new ReferenceError(
															"this hasn't been initialised - super() hasn't been called"
														)
													return t
												})(t)
											})(
												t,
												ua()
													? Reflect.construct(e, r || [], pa(t).constructor)
													: e.apply(t, r)
											)
										)
									})(this, e, [t, fa])
								)
							}
							return (
								(function (t, e) {
									if ('function' != typeof e && null !== e)
										throw new TypeError(
											'Super expression must either be null or a function'
										)
									;(t.prototype = Object.create(e && e.prototype, {
										constructor: { value: t, writable: !0, configurable: !0 }
									})),
										Object.defineProperty(t, 'prototype', { writable: !1 }),
										e && da(t, e)
								})(e, t),
								(r = e),
								(n = [
									{
										key: 'getSelectInput',
										value: function (t, r) {
											var n = ha(pa(e.prototype), 'getSelectInput', this).call(
												this,
												t
											)
											return (
												n.classList.add('form-control'),
												n.classList.add('form-select'),
												'small' === this.options.input_size &&
													n.classList.add('form-control-sm'),
												'large' === this.options.input_size &&
													n.classList.add('form-control-lg'),
												n
											)
										}
									},
									{
										key: 'getContainer',
										value: function () {
											var t = document.createElement('div')
											return (
												this.options.object_indent ||
													t.classList.add('je-noindent'),
												t
											)
										}
									},
									{
										key: 'getOptInSwitch',
										value: function (t) {
											var e = this.getHiddenLabel(t + ' opt-in')
											e.setAttribute('for', t + '-opt-in')
											var r = document.createElement('div')
											r.classList.add(
												'form-check',
												'form-switch',
												'd-inline-block',
												'fs-6'
											)
											var n = document.createElement('input')
											n.setAttribute('type', 'checkbox'),
												n.setAttribute('role', 'switch'),
												n.setAttribute('id', t + '-opt-in'),
												n.classList.add(
													'form-check-input',
													'json-editor-opt-in'
												)
											var i = document.createElement('label')
											i.setAttribute('for', t + '-opt-in'),
												i.classList.add('form-check-label')
											var o = document.createElement('span')
											return (
												o.classList.add('visually-hidden'),
												(o.textContent = t + '-opt-in'),
												i.appendChild(o),
												r.appendChild(n),
												r.appendChild(i),
												{ label: e, checkbox: n, container: r }
											)
										}
									},
									{
										key: 'setGridColumnSize',
										value: function (t, e, r) {
											t.classList.add('col-md-'.concat(e)),
												r && t.classList.add('offset-md-'.concat(r))
										}
									},
									{
										key: 'afterInputReady',
										value: function (t) {
											if (!t.controlgroup) {
												var e = t.name
												t.id = e
												var r =
													t.parentNode.parentNode.getElementsByTagName(
														'label'
													)[0]
												r && (r.classList.add('form-label'), (r.htmlFor = e)),
													(t.controlgroup = this.closest(t, '.form-group'))
											}
										}
									},
									{
										key: 'getTextareaInput',
										value: function () {
											var t = document.createElement('textarea')
											return (
												t.classList.add('form-control'),
												'small' === this.options.input_size &&
													t.classList.add('form-control-sm'),
												'large' === this.options.input_size &&
													t.classList.add('form-control-lg'),
												t
											)
										}
									},
									{
										key: 'getRangeInput',
										value: function (t, r, n, i, o) {
											var a = ha(pa(e.prototype), 'getRangeInput', this).call(
												this,
												t,
												r,
												n,
												i,
												o
											)
											return (
												a.classList.remove('form-control'),
												a.classList.add('form-range'),
												a
											)
										}
									},
									{
										key: 'getStepperButtons',
										value: function (t) {
											var e = document.createElement('div'),
												r = document.createElement('button')
											r.setAttribute('type', 'button')
											var n = document.createElement('button')
											n.setAttribute('type', 'button'),
												e.appendChild(r),
												e.appendChild(t),
												e.appendChild(n),
												e.classList.add('input-group'),
												r.classList.add('btn'),
												r.classList.add('btn-secondary'),
												r.classList.add('stepper-down'),
												n.classList.add('btn'),
												n.classList.add('btn-secondary'),
												n.classList.add('stepper-up'),
												t.getAttribute('readonly') &&
													(r.setAttribute('disabled', !0),
													n.setAttribute('disabled', !0)),
												(r.textContent = '-'),
												(n.textContent = '+')
											var i = function (t, e) {
													;(t.value = Number(e || t.value)),
														t.setAttribute('initialized', '1')
												},
												o = t.getAttribute('min'),
												a = t.getAttribute('max')
											return (
												t.addEventListener('change', function () {
													t.getAttribute('initialized') ||
														t.setAttribute('initialized', '1')
												}),
												r.addEventListener('click', function () {
													t.getAttribute('initialized')
														? o
															? Number(t.value) > Number(o) && t.stepDown()
															: t.stepDown()
														: i(t, o),
														c(t, 'change')
												}),
												n.addEventListener('click', function () {
													t.getAttribute('initialized')
														? a
															? Number(t.value) < Number(a) && t.stepUp()
															: t.stepUp()
														: i(t, o),
														c(t, 'change')
												}),
												e
											)
										}
									},
									{
										key: 'getFormInputField',
										value: function (t) {
											var r = ha(
												pa(e.prototype),
												'getFormInputField',
												this
											).call(this, t)
											return (
												'checkbox' !== t &&
													'radio' !== t &&
													(r.classList.add('form-control'),
													'small' === this.options.input_size &&
														r.classList.add('form-control-sm'),
													'large' === this.options.input_size &&
														r.classList.add('form-control-lg')),
												r
											)
										}
									},
									{
										key: 'getFormControl',
										value: function (t, e, r, n, i) {
											var o = document.createElement('div')
											if (
												(o.classList.add('form-group'),
												!t || ('checkbox' !== e.type && 'radio' !== e.type))
											)
												t &&
													(t.classList.add('form-label'),
													o.appendChild(t),
													n && o.appendChild(n)),
													o.appendChild(e)
											else {
												var a = document.createElement('div')
												a.classList.add('form-check'),
													e.classList.add('form-check-input'),
													t.classList.add('form-check-label'),
													'div' !== e.tagName.toLowerCase() &&
														e &&
														t &&
														i &&
														(t.setAttribute('for', i), e.setAttribute('id', i)),
													'div' !== e.tagName.toLowerCase() &&
														e &&
														r &&
														(r.setAttribute('id', i + '-description'),
														e.setAttribute(
															'aria-describedby',
															i + '-description'
														)),
													a.appendChild(e),
													a.appendChild(t),
													n && a.appendChild(n),
													o.appendChild(a)
											}
											return r && o.appendChild(r), o
										}
									},
									{
										key: 'getHiddenLabel',
										value: function (t) {
											var e = document.createElement('label')
											return (
												(e.textContent = t),
												e.classList.add('visually-hidden'),
												e
											)
										}
									},
									{
										key: 'visuallyHidden',
										value: function (t) {
											t && t.classList.add('visually-hidden')
										}
									},
									{
										key: 'getHiddenText',
										value: function (t) {
											var e = document.createElement('span')
											return (e.textContent = t), e.classList.add('sr-only'), e
										}
									},
									{
										key: 'getInfoButton',
										value: function (t) {
											var e = document.createElement('button')
											;(e.type = 'button'),
												e.classList.add('ms-3', 'jsoneditor-twbs5-text-button'),
												e.setAttribute('data-toggle', 'tooltip'),
												e.setAttribute('data-placement', 'auto'),
												(e.title = t)
											var r = document.createTextNode('ⓘ')
											return (
												e.appendChild(r),
												'bootstrap' === this.options.tooltip
													? window.jQuery && window.jQuery().tooltip
														? window.jQuery(e).tooltip()
														: console.warn(
																'Could not find popper jQuery plugin of Bootstrap.'
															)
													: 'css' === this.options.tooltip &&
														e.classList.add('je-tooltip'),
												e
											)
										}
									},
									{
										key: 'getCheckbox',
										value: function () {
											return this.getFormInputField('checkbox')
										}
									},
									{
										key: 'getMultiCheckboxHolder',
										value: function (t, e, r, n) {
											var i = document.createElement('div')
											i.classList.add('form-group'),
												e && (i.appendChild(e), n && e.appendChild(n))
											var o = document.createElement('div')
											return (
												Object.values(t).forEach(function (t) {
													var e = t.firstChild
													o.appendChild(e)
												}),
												i.appendChild(o),
												r && i.appendChild(r),
												i
											)
										}
									},
									{
										key: 'getFormRadio',
										value: function (t) {
											var e = this.getFormInputField('radio')
											for (var r in t) e.setAttribute(r, t[r])
											return e.classList.add('form-check-input'), e
										}
									},
									{
										key: 'getFormRadioLabel',
										value: function (t, e) {
											var r = document.createElement('label')
											return (
												r.classList.add('form-check-label'),
												r.appendChild(document.createTextNode(t)),
												r
											)
										}
									},
									{
										key: 'getFormRadioControl',
										value: function (t, e, r) {
											var n = document.createElement('div')
											return (
												n.classList.add('form-check'),
												n.appendChild(e),
												n.appendChild(t),
												r && n.classList.add('form-check-inline'),
												n
											)
										}
									},
									{
										key: 'getIndentedPanel',
										value: function () {
											var t = document.createElement('div')
											return (
												t.classList.add('card', 'card-body', 'my-3'),
												this.options.object_background &&
													t.classList.add(this.options.object_background),
												this.options.object_text &&
													t.classList.add(this.options.object_text),
												t
											)
										}
									},
									{
										key: 'getFormInputDescription',
										value: function (t) {
											var e = document.createElement('small')
											return (
												e.classList.add('form-text'),
												e.classList.add('d-block'),
												window.DOMPurify
													? (e.innerHTML = window.DOMPurify.sanitize(t))
													: (e.textContent = this.cleanText(t)),
												e
											)
										}
									},
									{
										key: 'getHeader',
										value: function (t, e) {
											var r = document.createElement('span')
											return (
												r.classList.add('h3'),
												r.classList.add('card-title'),
												r.classList.add('level-' + e),
												'string' == typeof t
													? (r.textContent = t)
													: r.appendChild(t),
												(r.style.display = 'inline-block'),
												r
											)
										}
									},
									{
										key: 'getHeaderButtonHolder',
										value: function () {
											return this.getButtonHolder()
										}
									},
									{
										key: 'getButtonHolder',
										value: function () {
											var t = document.createElement('span')
											return t.classList.add('btn-group'), t
										}
									},
									{
										key: 'getFormButtonHolder',
										value: function (t) {
											var e = this.getButtonHolder()
											return (
												e.classList.add('d-block'),
												'center' === t
													? e.classList.add('text-center')
													: 'right' === t && e.classList.add('text-end'),
												e
											)
										}
									},
									{
										key: 'getButton',
										value: function (t, r, n) {
											var i = ha(pa(e.prototype), 'getButton', this).call(
												this,
												t,
												r,
												n
											)
											return (
												i.classList.add('btn', 'btn-secondary', 'btn-sm'), i
											)
										}
									},
									{
										key: 'getTableContainer',
										value: function () {
											var t = ha(
												pa(e.prototype),
												'getTableContainer',
												this
											).call(this)
											return t.classList.add('table-responsive'), t
										}
									},
									{
										key: 'getTable',
										value: function () {
											var t = document.createElement('table')
											return (
												t.classList.add('table', 'table-sm'),
												this.options.table_border &&
													t.classList.add('table-bordered'),
												this.options.table_zebrastyle &&
													t.classList.add('table-striped'),
												t
											)
										}
									},
									{
										key: 'getErrorMessage',
										value: function (t) {
											var e = document.createElement('div')
											return (
												e.classList.add('alert', 'alert-danger'),
												e.setAttribute('role', 'alert'),
												e.appendChild(document.createTextNode(t)),
												e
											)
										}
									},
									{
										key: 'addInputError',
										value: function (t, e) {
											t.controlgroup &&
												(t.controlgroup.classList.add('is-invalid'),
												t.errmsg ||
													((t.errmsg = document.createElement('p')),
													t.errmsg.classList.add('invalid-feedback'),
													t.controlgroup.appendChild(t.errmsg),
													(t.errmsg.style.display = 'block')),
												(t.errmsg.style.display = 'block'),
												(t.errmsg.textContent = e),
												t.errmsg.setAttribute('role', 'alert'))
										}
									},
									{
										key: 'removeInputError',
										value: function (t) {
											t.errmsg &&
												((t.errmsg.style.display = 'none'),
												t.controlgroup.classList.remove('is-invalid'))
										}
									},
									{
										key: 'getTabHolder',
										value: function (t) {
											var e = document.createElement('div'),
												r = void 0 === t ? '' : t
											return (
												(e.innerHTML = "<div class='col-md-2' id='"
													.concat(
														r,
														"'><ul class='nav flex-column nav-pills'></ul></div><div class='col-md-10'><div class='tab-content' id='"
													)
													.concat(r, "'></div></div>")),
												e.classList.add('row'),
												e
											)
										}
									},
									{
										key: 'addTab',
										value: function (t, e) {
											t.children[0].children[0].appendChild(e)
										}
									},
									{
										key: 'getTabContentHolder',
										value: function (t) {
											return t.children[1].children[0]
										}
									},
									{
										key: 'getTopTabHolder',
										value: function (t) {
											var e = void 0 === t ? '' : t,
												r = document.createElement('div')
											return (
												r.classList.add('card'),
												(r.innerHTML =
													"<div class='card-header'><ul class='nav nav-tabs card-header-tabs' id='"
														.concat(
															e,
															"'></ul></div><div class='card-body'><div class='tab-content' id='"
														)
														.concat(e, "'></div></div>")),
												r
											)
										}
									},
									{
										key: 'getTab',
										value: function (t, e) {
											var r = document.createElement('li')
											r.classList.add('nav-item')
											var n = document.createElement('a')
											return (
												n.classList.add('nav-link'),
												n.setAttribute('href', '#'.concat(e)),
												n.setAttribute('data-toggle', 'tab'),
												n.appendChild(t),
												r.appendChild(n),
												r
											)
										}
									},
									{
										key: 'getTopTab',
										value: function (t, e) {
											var r = document.createElement('li')
											r.classList.add('nav-item')
											var n = document.createElement('a')
											return (
												n.classList.add('nav-link'),
												n.setAttribute('href', '#'.concat(e)),
												n.setAttribute('data-toggle', 'tab'),
												n.appendChild(t),
												r.appendChild(n),
												r
											)
										}
									},
									{
										key: 'getTabContent',
										value: function () {
											var t = document.createElement('div')
											return (
												t.classList.add('tab-pane'),
												t.setAttribute('role', 'tabpanel'),
												t
											)
										}
									},
									{
										key: 'getTopTabContent',
										value: function () {
											var t = document.createElement('div')
											return (
												t.classList.add('tab-pane'),
												t.setAttribute('role', 'tabpanel'),
												t
											)
										}
									},
									{
										key: 'markTabActive',
										value: function (t) {
											t.tab.firstChild.classList.add('active'),
												void 0 !== t.rowPane
													? t.rowPane.classList.add('active')
													: t.container.classList.add('active')
										}
									},
									{
										key: 'markTabInactive',
										value: function (t) {
											t.tab.firstChild.classList.remove('active'),
												void 0 !== t.rowPane
													? t.rowPane.classList.remove('active')
													: t.container.classList.remove('active')
										}
									},
									{
										key: 'insertBasicTopTab',
										value: function (t, e) {
											e.children[0].children[0].insertBefore(
												t,
												e.children[0].children[0].firstChild
											)
										}
									},
									{
										key: 'addTopTab',
										value: function (t, e) {
											t.children[0].children[0].appendChild(e)
										}
									},
									{
										key: 'getTopTabContentHolder',
										value: function (t) {
											return t.children[1].children[0]
										}
									},
									{
										key: 'getFirstTab',
										value: function (t) {
											return t.firstChild.firstChild.firstChild
										}
									},
									{
										key: 'getProgressBar',
										value: function () {
											var t = document.createElement('div')
											t.classList.add('progress')
											var e = document.createElement('div')
											return (
												e.classList.add('progress-bar'),
												e.setAttribute('role', 'progressbar'),
												e.setAttribute('aria-valuenow', 0),
												e.setAttribute('aria-valuemin', 0),
												e.setAttribute('aria-valuenax', 100),
												(e.innerHTML = ''.concat(0, '%')),
												t.appendChild(e),
												t
											)
										}
									},
									{
										key: 'updateProgressBar',
										value: function (t, e) {
											if (t) {
												var r = t.firstChild,
													n = ''.concat(e, '%')
												r.setAttribute('aria-valuenow', e),
													(r.style.width = n),
													(r.innerHTML = n)
											}
										}
									},
									{
										key: 'updateProgressBarUnknown',
										value: function (t) {
											if (t) {
												var e = t.firstChild
												t.classList.add(
													'progress',
													'progress-striped',
													'active'
												),
													e.removeAttribute('aria-valuenow'),
													(e.style.width = '100%'),
													(e.innerHTML = '')
											}
										}
									},
									{
										key: 'getBlockLink',
										value: function () {
											var t = document.createElement('a')
											return t.classList.add('mb-3', 'd-inline-block'), t
										}
									},
									{
										key: 'getLinksHolder',
										value: function () {
											return document.createElement('div')
										}
									},
									{
										key: 'getInputGroup',
										value: function (t, e) {
											if (t) {
												var r = document.createElement('div')
												r.classList.add('input-group'), r.appendChild(t)
												for (var n = 0; n < e.length; n++)
													e[n].classList.remove('me-2', 'btn-secondary'),
														e[n].classList.add('btn-outline-secondary'),
														r.appendChild(e[n])
												return r
											}
										}
									}
								]) &&
									(function (t, e) {
										for (var r = 0; r < e.length; r++) {
											var n = e[r]
											;(n.enumerable = n.enumerable || !1),
												(n.configurable = !0),
												'value' in n && (n.writable = !0),
												Object.defineProperty(t, ca(n.key), n)
										}
									})(r.prototype, n),
								Object.defineProperty(r, 'prototype', { writable: !1 }),
								r
							)
							var r, n
						})(Vo)
					function ma(t) {
						return (
							(ma =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							ma(t)
						)
					}
					function va(t) {
						var e = (function (t) {
							if ('object' != ma(t) || !t) return t
							var e = t[Symbol.toPrimitive]
							if (void 0 !== e) {
								var r = e.call(t, 'string')
								if ('object' != ma(r)) return r
								throw new TypeError(
									'@@toPrimitive must return a primitive value.'
								)
							}
							return String(t)
						})(t)
						return 'symbol' == ma(e) ? e : e + ''
					}
					function ba() {
						try {
							var t = !Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							)
						} catch (t) {}
						return (ba = function () {
							return !!t
						})()
					}
					function ga() {
						return (
							(ga =
								'undefined' != typeof Reflect && Reflect.get
									? Reflect.get.bind()
									: function (t, e, r) {
											var n = (function (t, e) {
												for (
													;
													!Object.prototype.hasOwnProperty.call(t, e) &&
													null !== (t = wa(t));

												);
												return t
											})(t, e)
											if (n) {
												var i = Object.getOwnPropertyDescriptor(n, e)
												return i.get
													? i.get.call(arguments.length < 3 ? t : r)
													: i.value
											}
										}),
							ga.apply(this, arguments)
						)
					}
					function wa(t) {
						return (
							(wa = Object.setPrototypeOf
								? Object.getPrototypeOf.bind()
								: function (t) {
										return t.__proto__ || Object.getPrototypeOf(t)
									}),
							wa(t)
						)
					}
					function _a(t, e) {
						return (
							(_a = Object.setPrototypeOf
								? Object.setPrototypeOf.bind()
								: function (t, e) {
										return (t.__proto__ = e), t
									}),
							_a(t, e)
						)
					}
					ya.rules = {
						'.form-group': 'margin-bottom:1rem',
						'.form-text': 'display:block',
						'.jsoneditor-twbs5-text-button':
							'background:none;padding:0;border:0;color:currentColor',
						'td > .form-group': 'margin-bottom:0',
						'.json-editor-btn-upload': 'margin-top:1rem',
						'.je-noindent .card': 'padding:0;border:0',
						'.je-tooltip:hover::before':
							'display:block;position:absolute;font-size:0.8em;color:%23fff;border-radius:0.2em;content:attr(title);background-color:%23000;margin-top:-2.5em;padding:0.3em',
						'.je-tooltip:hover::after':
							'display:block;position:absolute;font-size:0.8em;color:%23fff',
						'.select2-container--default .select2-selection--single':
							'height:calc(1.5em%20%2B%200.75rem%20%2B%202px)',
						'.select2-container--default   .select2-selection--single   .select2-selection__arrow':
							'height:calc(1.5em%20%2B%200.75rem%20%2B%202px)',
						'.select2-container--default   .select2-selection--single   .select2-selection__rendered':
							'line-height:calc(1.5em%20%2B%200.75rem%20%2B%202px)',
						'.selectize-control.form-control': 'padding:0',
						'.selectize-dropdown.form-control': 'padding:0;height:auto',
						'.je-upload-preview img':
							'float:left;margin:0%200.5rem%200.5rem%200;max-width:100%25;max-height:5rem',
						'.je-dropzone':
							'position:relative;margin:0.5rem%200;border:2px%20dashed%20black;width:100%25;height:60px;background:teal;transition:all%200.5s',
						'.je-dropzone:before':
							'position:absolute;content:attr(data-text);color:rgba(0%2C%200%2C%200%2C%200.6);left:50%25;top:50%25;transform:translate(-50%25%2C%20-50%25)',
						'.je-dropzone.valid-dropzone': 'background:green',
						'.je-dropzone.invalid-dropzone': 'background:red'
					}
					var ka = (function (t) {
						function e() {
							return (
								(function (t, e) {
									if (!(t instanceof e))
										throw new TypeError('Cannot call a class as a function')
								})(this, e),
								(function (t, e, r) {
									return (
										(e = wa(e)),
										(function (t, e) {
											if (e && ('object' === ma(e) || 'function' == typeof e))
												return e
											if (void 0 !== e)
												throw new TypeError(
													'Derived constructors may only return object or undefined'
												)
											return (function (t) {
												if (void 0 === t)
													throw new ReferenceError(
														"this hasn't been initialised - super() hasn't been called"
													)
												return t
											})(t)
										})(
											t,
											ba()
												? Reflect.construct(e, r || [], wa(t).constructor)
												: e.apply(t, r)
										)
									)
								})(this, e, arguments)
							)
						}
						return (
							(function (t, e) {
								if ('function' != typeof e && null !== e)
									throw new TypeError(
										'Super expression must either be null or a function'
									)
								;(t.prototype = Object.create(e && e.prototype, {
									constructor: { value: t, writable: !0, configurable: !0 }
								})),
									Object.defineProperty(t, 'prototype', { writable: !1 }),
									e && _a(t, e)
							})(e, t),
							(r = e),
							(n = [
								{
									key: 'getTable',
									value: function () {
										var t = ga(wa(e.prototype), 'getTable', this).call(this)
										return (
											t.setAttribute('cellpadding', 5),
											t.setAttribute('cellspacing', 0),
											t
										)
									}
								},
								{
									key: 'getTableHeaderCell',
									value: function (t) {
										var r = ga(
											wa(e.prototype),
											'getTableHeaderCell',
											this
										).call(this, t)
										return (
											r.classList.add('ui-state-active'),
											(r.style.fontWeight = 'bold'),
											r
										)
									}
								},
								{
									key: 'getTableCell',
									value: function () {
										var t = ga(wa(e.prototype), 'getTableCell', this).call(this)
										return t.classList.add('ui-widget-content'), t
									}
								},
								{
									key: 'getHeaderButtonHolder',
									value: function () {
										var t = this.getButtonHolder()
										return (
											(t.style.marginLeft = '10px'),
											(t.style.fontSize = '.6em'),
											(t.style.display = 'inline-block'),
											t
										)
									}
								},
								{
									key: 'getFormInputDescription',
									value: function (t) {
										var e = this.getDescription(t)
										return (
											(e.style.marginLeft = '10px'),
											(e.style.display = 'inline-block'),
											e
										)
									}
								},
								{
									key: 'getFormControl',
									value: function (t, r, n, i) {
										var o = ga(wa(e.prototype), 'getFormControl', this).call(
											this,
											t,
											r,
											n,
											i
										)
										return (
											'checkbox' === r.type
												? ((o.style.lineHeight = '25px'),
													(o.style.padding = '3px 0'))
												: (o.style.padding = '4px 0 8px 0'),
											o
										)
									}
								},
								{
									key: 'getDescription',
									value: function (t) {
										var e = document.createElement('span')
										return (
											(e.style.fontSize = '.8em'),
											(e.style.fontStyle = 'italic'),
											window.DOMPurify
												? (e.innerHTML = window.DOMPurify.sanitize(t))
												: (e.textContent = this.cleanText(t)),
											e
										)
									}
								},
								{
									key: 'getButtonHolder',
									value: function () {
										var t = document.createElement('div')
										return (
											t.classList.add('ui-buttonset'),
											(t.style.fontSize = '.7em'),
											t
										)
									}
								},
								{
									key: 'getFormInputLabel',
									value: function (t, e) {
										var r = document.createElement('label')
										return (
											(r.style.fontWeight = 'bold'),
											(r.style.display = 'block'),
											(r.textContent = t),
											e && r.classList.add('required'),
											r
										)
									}
								},
								{
									key: 'getButton',
									value: function (t, e, r) {
										var n = document.createElement('button')
										n.classList.add(
											'ui-button',
											'ui-widget',
											'ui-state-default',
											'ui-corner-all'
										),
											e && !t
												? (n.classList.add('ui-button-icon-only'),
													e.classList.add(
														'ui-button-icon-primary',
														'ui-icon-primary'
													),
													n.appendChild(e))
												: e
													? (n.classList.add('ui-button-text-icon-primary'),
														e.classList.add(
															'ui-button-icon-primary',
															'ui-icon-primary'
														),
														n.appendChild(e))
													: n.classList.add('ui-button-text-only')
										var i = document.createElement('span')
										return (
											i.classList.add('ui-button-text'),
											(i.textContent = t || r || '.'),
											n.appendChild(i),
											n.setAttribute('title', r),
											n
										)
									}
								},
								{
									key: 'setButtonText',
									value: function (t, e, r, n) {
										;(t.innerHTML = ''),
											t.classList.add(
												'ui-button',
												'ui-widget',
												'ui-state-default',
												'ui-corner-all'
											),
											r && !e
												? (t.classList.add('ui-button-icon-only'),
													r.classList.add(
														'ui-button-icon-primary',
														'ui-icon-primary'
													),
													t.appendChild(r))
												: r
													? (t.classList.add('ui-button-text-icon-primary'),
														r.classList.add(
															'ui-button-icon-primary',
															'ui-icon-primary'
														),
														t.appendChild(r))
													: t.classList.add('ui-button-text-only')
										var i = document.createElement('span')
										i.classList.add('ui-button-text'),
											(i.textContent = e || n || '.'),
											t.appendChild(i),
											t.setAttribute('title', n)
									}
								},
								{
									key: 'getIndentedPanel',
									value: function () {
										var t = document.createElement('div')
										return (
											t.classList.add('ui-widget-content', 'ui-corner-all'),
											(t.style.padding = '1em 1.4em'),
											(t.style.marginBottom = '20px'),
											t
										)
									}
								},
								{
									key: 'afterInputReady',
									value: function (t) {
										if (
											!t.controls &&
											((t.controls = this.closest(t, '.form-control')),
											this.queuedInputErrorText)
										) {
											var e = this.queuedInputErrorText
											delete this.queuedInputErrorText, this.addInputError(t, e)
										}
									}
								},
								{
									key: 'addInputError',
									value: function (t, e) {
										t.controls
											? (t.errmsg
													? (t.errmsg.style.display = '')
													: ((t.errmsg = document.createElement('div')),
														t.errmsg.classList.add('ui-state-error'),
														t.controls.appendChild(t.errmsg)),
												(t.errmsg.textContent = e))
											: (this.queuedInputErrorText = e)
									}
								},
								{
									key: 'removeInputError',
									value: function (t) {
										t.controls || delete this.queuedInputErrorText,
											t.errmsg && (t.errmsg.style.display = 'none')
									}
								},
								{
									key: 'markTabActive',
									value: function (t) {
										t.tab.classList.remove('ui-widget-header'),
											t.tab.classList.add('ui-state-active'),
											void 0 !== t.rowPane
												? (t.rowPane.style.display = '')
												: (t.container.style.display = '')
									}
								},
								{
									key: 'markTabInactive',
									value: function (t) {
										t.tab.classList.add('ui-widget-header'),
											t.tab.classList.remove('ui-state-active'),
											void 0 !== t.rowPane
												? (t.rowPane.style.display = 'none')
												: (t.container.style.display = 'none')
									}
								}
							]) &&
								(function (t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r]
										;(n.enumerable = n.enumerable || !1),
											(n.configurable = !0),
											'value' in n && (n.writable = !0),
											Object.defineProperty(t, va(n.key), n)
									}
								})(r.prototype, n),
							Object.defineProperty(r, 'prototype', { writable: !1 }),
							r
						)
						var r, n
					})(Vo)
					function ja(t) {
						return (
							(ja =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							ja(t)
						)
					}
					function Oa(t) {
						var e = (function (t) {
							if ('object' != ja(t) || !t) return t
							var e = t[Symbol.toPrimitive]
							if (void 0 !== e) {
								var r = e.call(t, 'string')
								if ('object' != ja(r)) return r
								throw new TypeError(
									'@@toPrimitive must return a primitive value.'
								)
							}
							return String(t)
						})(t)
						return 'symbol' == ja(e) ? e : e + ''
					}
					function xa() {
						try {
							var t = !Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							)
						} catch (t) {}
						return (xa = function () {
							return !!t
						})()
					}
					function Ca(t) {
						return (
							(Ca = Object.setPrototypeOf
								? Object.getPrototypeOf.bind()
								: function (t) {
										return t.__proto__ || Object.getPrototypeOf(t)
									}),
							Ca(t)
						)
					}
					function Ea(t, e) {
						return (
							(Ea = Object.setPrototypeOf
								? Object.setPrototypeOf.bind()
								: function (t, e) {
										return (t.__proto__ = e), t
									}),
							Ea(t, e)
						)
					}
					ka.rules = {
						'div[data-schemaid="root"]:after':
							'position:relative;color:red;margin:10px 0;font-weight:600;display:block;width:100%;text-align:center;content:"This is an old JSON-Editor 1.x Theme and might not display elements correctly when used with the 2.x version"'
					}
					var Sa = (function (t) {
						function e() {
							return (
								(function (t, e) {
									if (!(t instanceof e))
										throw new TypeError('Cannot call a class as a function')
								})(this, e),
								(function (t, e, r) {
									return (
										(e = Ca(e)),
										(function (t, e) {
											if (e && ('object' === ja(e) || 'function' == typeof e))
												return e
											if (void 0 !== e)
												throw new TypeError(
													'Derived constructors may only return object or undefined'
												)
											return (function (t) {
												if (void 0 === t)
													throw new ReferenceError(
														"this hasn't been initialised - super() hasn't been called"
													)
												return t
											})(t)
										})(
											t,
											xa()
												? Reflect.construct(e, r || [], Ca(t).constructor)
												: e.apply(t, r)
										)
									)
								})(this, e, arguments)
							)
						}
						return (
							(function (t, e) {
								if ('function' != typeof e && null !== e)
									throw new TypeError(
										'Super expression must either be null or a function'
									)
								;(t.prototype = Object.create(e && e.prototype, {
									constructor: { value: t, writable: !0, configurable: !0 }
								})),
									Object.defineProperty(t, 'prototype', { writable: !1 }),
									e && Ea(t, e)
							})(e, t),
							(r = e),
							(n = [
								{
									key: 'addInputError',
									value: function (t, e) {
										if (t.errmsg) t.errmsg.style.display = 'block'
										else {
											var r = this.closest(t, '.form-control')
											;(t.errmsg = document.createElement('div')),
												t.errmsg.setAttribute('class', 'errmsg'),
												r.nodeName && r.appendChild(t.errmsg)
										}
										;(t.errmsg.innerHTML = ''),
											t.errmsg.appendChild(document.createTextNode(e)),
											t.errmsg.setAttribute('role', 'alert')
									}
								},
								{
									key: 'removeInputError',
									value: function (t) {
										t.style && (t.style.borderColor = ''),
											t.errmsg && (t.errmsg.style.display = 'none')
									}
								}
							]) &&
								(function (t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r]
										;(n.enumerable = n.enumerable || !1),
											(n.configurable = !0),
											'value' in n && (n.writable = !0),
											Object.defineProperty(t, Oa(n.key), n)
									}
								})(r.prototype, n),
							Object.defineProperty(r, 'prototype', { writable: !1 }),
							r
						)
						var r, n
					})(Vo)
					function Pa(t) {
						return (
							(Pa =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							Pa(t)
						)
					}
					function La(t) {
						var e = (function (t) {
							if ('object' != Pa(t) || !t) return t
							var e = t[Symbol.toPrimitive]
							if (void 0 !== e) {
								var r = e.call(t, 'string')
								if ('object' != Pa(r)) return r
								throw new TypeError(
									'@@toPrimitive must return a primitive value.'
								)
							}
							return String(t)
						})(t)
						return 'symbol' == Pa(e) ? e : e + ''
					}
					function Ta() {
						try {
							var t = !Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							)
						} catch (t) {}
						return (Ta = function () {
							return !!t
						})()
					}
					function Aa() {
						return (
							(Aa =
								'undefined' != typeof Reflect && Reflect.get
									? Reflect.get.bind()
									: function (t, e, r) {
											var n = (function (t, e) {
												for (
													;
													!Object.prototype.hasOwnProperty.call(t, e) &&
													null !== (t = Ra(t));

												);
												return t
											})(t, e)
											if (n) {
												var i = Object.getOwnPropertyDescriptor(n, e)
												return i.get
													? i.get.call(arguments.length < 3 ? t : r)
													: i.value
											}
										}),
							Aa.apply(this, arguments)
						)
					}
					function Ra(t) {
						return (
							(Ra = Object.setPrototypeOf
								? Object.getPrototypeOf.bind()
								: function (t) {
										return t.__proto__ || Object.getPrototypeOf(t)
									}),
							Ra(t)
						)
					}
					function Ia(t, e) {
						return (
							(Ia = Object.setPrototypeOf
								? Object.setPrototypeOf.bind()
								: function (t, e) {
										return (t.__proto__ = e), t
									}),
							Ia(t, e)
						)
					}
					Sa.rules = {
						'.je-upload-preview img':
							'float:left;margin:0%200.5rem%200.5rem%200;max-width:100%25;max-height:5rem',
						'.je-dropzone':
							'position:relative;margin:0.5rem%200;border:2px%20dashed%20black;width:100%25;height:60px;background:teal;transition:all%200.5s',
						'.je-dropzone:before':
							'position:absolute;content:attr(data-text);color:rgba(0%2C%200%2C%200%2C%200.6);left:50%25;top:50%25;transform:translate(-50%25%2C%20-50%25)',
						'.je-dropzone.valid-dropzone': 'background:green',
						'.je-dropzone.invalid-dropzone': 'background:red'
					}
					var Ba = {
							disable_theme_rules: !1,
							label_bold: !0,
							align_bottom: !1,
							object_indent: !1,
							object_border: !1,
							table_border: !1,
							table_zebrastyle: !1,
							input_size: 'normal'
						},
						Na = (function (t) {
							function e(t) {
								return (
									(function (t, e) {
										if (!(t instanceof e))
											throw new TypeError('Cannot call a class as a function')
									})(this, e),
									(function (t, e, r) {
										return (
											(e = Ra(e)),
											(function (t, e) {
												if (e && ('object' === Pa(e) || 'function' == typeof e))
													return e
												if (void 0 !== e)
													throw new TypeError(
														'Derived constructors may only return object or undefined'
													)
												return (function (t) {
													if (void 0 === t)
														throw new ReferenceError(
															"this hasn't been initialised - super() hasn't been called"
														)
													return t
												})(t)
											})(
												t,
												Ta()
													? Reflect.construct(e, r || [], Ra(t).constructor)
													: e.apply(t, r)
											)
										)
									})(this, e, [t, Ba])
								)
							}
							return (
								(function (t, e) {
									if ('function' != typeof e && null !== e)
										throw new TypeError(
											'Super expression must either be null or a function'
										)
									;(t.prototype = Object.create(e && e.prototype, {
										constructor: { value: t, writable: !0, configurable: !0 }
									})),
										Object.defineProperty(t, 'prototype', { writable: !1 }),
										e && Ia(t, e)
								})(e, t),
								(r = e),
								(n = [
									{
										key: 'getOptInSwitch',
										value: function (t) {
											var e = document.createElement('span')
											e.classList.add('form-group')
											var r = document.createElement('label')
											r.classList.add('form-switch', 'd-inline-block')
											var n = document.createElement('input')
											n.setAttribute('type', 'checkbox'),
												n.setAttribute('id', t + '-opt-in'),
												n.classList.add('json-editor-opt-in')
											var i = document.createElement('i')
											i.classList.add('form-icon')
											var o = document.createElement('span')
											return (
												o.classList.add('sr-only'),
												(o.textContent = t + '-opt-in'),
												r.appendChild(o),
												r.appendChild(n),
												r.appendChild(i),
												e.appendChild(r),
												{ label: r, checkbox: n, container: e }
											)
										}
									},
									{
										key: 'setGridColumnSize',
										value: function (t, e, r) {
											t.classList.add('col-'.concat(e)),
												r && t.classList.add('col-mx-auto')
										}
									},
									{
										key: 'getGridContainer',
										value: function () {
											var t = document.createElement('div')
											return (
												t.classList.add('container'),
												this.options.object_indent ||
													t.classList.add('je-noindent'),
												t
											)
										}
									},
									{
										key: 'getGridRow',
										value: function () {
											var t = document.createElement('div')
											return t.classList.add('columns'), t
										}
									},
									{
										key: 'getGridColumn',
										value: function () {
											var t = document.createElement('div')
											return (
												t.classList.add('column'),
												this.options.align_bottom &&
													t.classList.add('je-align-bottom'),
												t
											)
										}
									},
									{
										key: 'getIndentedPanel',
										value: function () {
											var t = document.createElement('div')
											return (
												t.classList.add('je-panel'),
												this.options.object_border &&
													t.classList.add('je-border'),
												t
											)
										}
									},
									{
										key: 'getTopIndentedPanel',
										value: function () {
											var t = document.createElement('div')
											return (
												t.classList.add('je-panel-top'),
												this.options.object_border &&
													t.classList.add('je-border'),
												t
											)
										}
									},
									{
										key: 'getHeaderButtonHolder',
										value: function () {
											return this.getButtonHolder()
										}
									},
									{
										key: 'getButtonHolder',
										value: function () {
											var t = Aa(Ra(e.prototype), 'getButtonHolder', this).call(
												this
											)
											return t.classList.add('btn-group'), t
										}
									},
									{
										key: 'getFormButtonHolder',
										value: function (t) {
											var r = Aa(
												Ra(e.prototype),
												'getFormButtonHolder',
												this
											).call(this)
											return (
												r.classList.remove('btn-group'),
												r.classList.add('d-block'),
												'center' === t
													? r.classList.add('text-center')
													: 'right' === t
														? r.classList.add('text-right')
														: r.classList.add('text-left'),
												r
											)
										}
									},
									{
										key: 'getFormButton',
										value: function (t, r, n) {
											var i = Aa(Ra(e.prototype), 'getFormButton', this).call(
												this,
												t,
												r,
												n
											)
											return (
												i.classList.add('btn', 'btn-primary', 'mx-2', 'my-1'),
												'small' !== this.options.input_size &&
													i.classList.remove('btn-sm'),
												'large' === this.options.input_size &&
													i.classList.add('btn-lg'),
												i
											)
										}
									},
									{
										key: 'getButton',
										value: function (t, r, n) {
											var i = Aa(Ra(e.prototype), 'getButton', this).call(
												this,
												t,
												r,
												n
											)
											return (
												i.classList.add(
													'btn',
													'btn-sm',
													'btn-primary',
													'mr-2',
													'my-1'
												),
												i
											)
										}
									},
									{
										key: 'getHeader',
										value: function (t, e) {
											var r = document.createElement('span')
											return (
												'string' == typeof t
													? (r.textContent = t)
													: r.appendChild(t),
												(r.style.display = 'inline-block'),
												r
											)
										}
									},
									{
										key: 'getFormInputDescription',
										value: function (t) {
											var r = Aa(
												Ra(e.prototype),
												'getFormInputDescription',
												this
											).call(this, t)
											return r.classList.add('je-desc', 'hide-sm'), r
										}
									},
									{
										key: 'getFormInputLabel',
										value: function (t, r) {
											var n = Aa(
												Ra(e.prototype),
												'getFormInputLabel',
												this
											).call(this, t, r)
											return (
												this.options.label_bold && n.classList.add('je-label'),
												n
											)
										}
									},
									{
										key: 'getCheckbox',
										value: function () {
											return this.getFormInputField('checkbox')
										}
									},
									{
										key: 'getCheckboxLabel',
										value: function (t, r) {
											var n = Aa(
													Ra(e.prototype),
													'getCheckboxLabel',
													this
												).call(this, t, r),
												i = document.createElement('i')
											return (
												i.classList.add('form-icon'),
												n.classList.add('form-checkbox', 'pr-0'),
												n.insertBefore(i, n.firstChild),
												n
											)
										}
									},
									{
										key: 'getFormCheckboxControl',
										value: function (t, e, r) {
											return (
												t.insertBefore(e, t.firstChild),
												r && t.classList.add('form-inline'),
												t
											)
										}
									},
									{
										key: 'getMultiCheckboxHolder',
										value: function (t, r, n, i) {
											return Aa(
												Ra(e.prototype),
												'getMultiCheckboxHolder',
												this
											).call(this, t, r, n, i)
										}
									},
									{
										key: 'getFormRadio',
										value: function (t) {
											var e = this.getFormInputField('radio')
											for (var r in t) e.setAttribute(r, t[r])
											return e
										}
									},
									{
										key: 'getFormRadioLabel',
										value: function (t, r) {
											var n = Aa(
													Ra(e.prototype),
													'getFormRadioLabel',
													this
												).call(this, t, r),
												i = document.createElement('i')
											return (
												i.classList.add('form-icon'),
												n.classList.add('form-radio'),
												n.insertBefore(i, n.firstChild),
												n
											)
										}
									},
									{
										key: 'getFormRadioControl',
										value: function (t, e, r) {
											return (
												t.insertBefore(e, t.firstChild),
												r && t.classList.add('form-inline'),
												t
											)
										}
									},
									{
										key: 'getFormInputField',
										value: function (t) {
											var r = Aa(
												Ra(e.prototype),
												'getFormInputField',
												this
											).call(this, t)
											return (
												['checkbox', 'radio'].includes(t) ||
													r.classList.add('form-input'),
												r
											)
										}
									},
									{
										key: 'getRangeInput',
										value: function (t, r, n, i, o) {
											var a = Aa(Ra(e.prototype), 'getRangeInput', this).call(
												this,
												t,
												r,
												n,
												i,
												o
											)
											return (
												a.classList.add('slider'),
												a.classList.remove('form-input'),
												a.setAttribute(
													'oninput',
													'this.setAttribute("value", this.value)'
												),
												a
											)
										}
									},
									{
										key: 'getRangeControl',
										value: function (t, r) {
											var n = Aa(Ra(e.prototype), 'getRangeControl', this).call(
												this,
												t,
												r
											)
											return n.classList.add('text-center'), n
										}
									},
									{
										key: 'getSelectInput',
										value: function (t, r) {
											var n = Aa(Ra(e.prototype), 'getSelectInput', this).call(
												this,
												t
											)
											return n.classList.add('form-select'), n
										}
									},
									{
										key: 'getTextareaInput',
										value: function () {
											var t = document.createElement('textarea')
											return t.classList.add('form-input'), t
										}
									},
									{
										key: 'getFormControl',
										value: function (t, e, r, n, i) {
											var o = document.createElement('div')
											return (
												o.classList.add('form-group'),
												!t || ('checkbox' !== e.type && 'radio' !== e.type)
													? (t &&
															(t.classList.add('form-label'),
															o.appendChild(t),
															n && t.appendChild(n)),
														o.appendChild(e))
													: (o.classList.add(e.type),
														n && t.appendChild(n),
														t.insertBefore(e, t.firstChild),
														o.appendChild(t)),
												'small' === this.options.input_size
													? e.classList.add('input-sm', 'select-sm')
													: 'large' === this.options.input_size &&
														e.classList.add('input-lg', 'select-lg'),
												'checkbox' !== e.type && o.appendChild(e),
												r && o.appendChild(r),
												'div' !== e.tagName.toLowerCase() &&
													e &&
													t &&
													i &&
													(t.setAttribute('for', i), e.setAttribute('id', i)),
												'div' !== e.tagName.toLowerCase() &&
													e &&
													r &&
													(r.setAttribute('id', i + '-description'),
													e.setAttribute(
														'aria-describedby',
														i + '-description'
													)),
												o
											)
										}
									},
									{
										key: 'getInputGroup',
										value: function (t, e) {
											if (t) {
												var r = document.createElement('div')
												r.classList.add('input-group'), r.appendChild(t)
												for (var n = 0; n < e.length; n++)
													e[n].classList.add('input-group-btn'),
														e[n].classList.remove('btn-sm', 'mr-2', 'my-1'),
														r.appendChild(e[n])
												return r
											}
										}
									},
									{
										key: 'getInfoButton',
										value: function (t) {
											var e = document.createElement('div')
											e.classList.add('popover', 'popover-left', 'float-right')
											var r = document.createElement('button')
											r.classList.add(
												'btn',
												'btn-secondary',
												'btn-info',
												'btn-action',
												's-circle'
											),
												r.setAttribute('tabindex', '-1'),
												e.appendChild(r)
											var n = document.createTextNode('I')
											r.appendChild(n)
											var i = document.createElement('div')
											i.classList.add('popover-container'), e.appendChild(i)
											var o = document.createElement('div')
											o.classList.add('card'), i.appendChild(o)
											var a = document.createElement('div')
											return (
												a.classList.add('card-body'),
												(a.innerHTML = t),
												o.appendChild(a),
												e
											)
										}
									},
									{
										key: 'getTable',
										value: function () {
											var t = Aa(Ra(e.prototype), 'getTable', this).call(this)
											return (
												t.classList.add('table', 'table-scroll'),
												this.options.table_border &&
													t.classList.add('je-table-border'),
												this.options.table_zebrastyle &&
													t.classList.add('table-striped'),
												t
											)
										}
									},
									{
										key: 'getProgressBar',
										value: function () {
											var t = Aa(Ra(e.prototype), 'getProgressBar', this).call(
												this
											)
											return t.classList.add('progress'), t
										}
									},
									{
										key: 'getTabHolder',
										value: function (t) {
											var e = void 0 === t ? '' : t,
												r = document.createElement('div')
											return (
												r.classList.add('columns'),
												(r.innerHTML =
													'<div class="column col-2"></div><div class="column col-10 content" id="'.concat(
														e,
														'"></div>'
													)),
												r
											)
										}
									},
									{
										key: 'getTopTabHolder',
										value: function (t) {
											var e = void 0 === t ? '' : t,
												r = document.createElement('div')
											return (
												(r.innerHTML =
													'<ul class="tab"></ul><div class="content" id="'.concat(
														e,
														'"></div>'
													)),
												r
											)
										}
									},
									{
										key: 'getTab',
										value: function (t, e) {
											var r = document.createElement('a')
											return (
												r.classList.add('btn', 'btn-secondary', 'btn-block'),
												r.setAttribute('href', '#'.concat(e)),
												r.appendChild(t),
												r
											)
										}
									},
									{
										key: 'getTopTab',
										value: function (t, e) {
											var r = document.createElement('li')
											;(r.id = e), r.classList.add('tab-item')
											var n = document.createElement('a')
											return (
												n.setAttribute('href', '#'.concat(e)),
												n.appendChild(t),
												r.appendChild(n),
												r
											)
										}
									},
									{
										key: 'markTabActive',
										value: function (t) {
											t.tab.classList.add('active'),
												void 0 !== t.rowPane
													? (t.rowPane.style.display = '')
													: (t.container.style.display = '')
										}
									},
									{
										key: 'markTabInactive',
										value: function (t) {
											t.tab.classList.remove('active'),
												void 0 !== t.rowPane
													? (t.rowPane.style.display = 'none')
													: (t.container.style.display = 'none')
										}
									},
									{
										key: 'afterInputReady',
										value: function (t) {
											if ('select' === t.localName)
												if (t.classList.contains('selectized')) {
													var e = t.nextSibling
													e &&
														(e.classList.remove('form-select'),
														Array.from(
															e.querySelectorAll('.form-select')
														).forEach(function (t) {
															t.classList.remove('form-select')
														}))
												} else if (
													t.classList.contains('select2-hidden-accessible')
												) {
													var r = t.nextSibling
													r &&
														r.querySelector('.select2-selection--single') &&
														r.classList.add('form-select')
												}
											t.controlgroup ||
												((t.controlgroup = this.closest(t, '.form-group')),
												this.closest(t, '.compact') &&
													(t.controlgroup.style.marginBottom = 0))
										}
									},
									{
										key: 'addInputError',
										value: function (t, e) {
											t.controlgroup &&
												(t.controlgroup.classList.add('has-error'),
												t.errmsg ||
													((t.errmsg = document.createElement('p')),
													t.errmsg.classList.add('form-input-hint'),
													t.controlgroup.appendChild(t.errmsg)),
												t.errmsg.classList.remove('d-hide'),
												(t.errmsg.textContent = e),
												t.errmsg.setAttribute('role', 'alert'))
										}
									},
									{
										key: 'removeInputError',
										value: function (t) {
											t.errmsg &&
												(t.errmsg.classList.add('d-hide'),
												t.controlgroup.classList.remove('has-error'))
										}
									}
								]) &&
									(function (t, e) {
										for (var r = 0; r < e.length; r++) {
											var n = e[r]
											;(n.enumerable = n.enumerable || !1),
												(n.configurable = !0),
												'value' in n && (n.writable = !0),
												Object.defineProperty(t, La(n.key), n)
										}
									})(r.prototype, n),
								Object.defineProperty(r, 'prototype', { writable: !1 }),
								r
							)
							var r, n
						})(Vo)
					function Da(t) {
						return (
							(Da =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							Da(t)
						)
					}
					function Fa(t) {
						var e = (function (t) {
							if ('object' != Da(t) || !t) return t
							var e = t[Symbol.toPrimitive]
							if (void 0 !== e) {
								var r = e.call(t, 'string')
								if ('object' != Da(r)) return r
								throw new TypeError(
									'@@toPrimitive must return a primitive value.'
								)
							}
							return String(t)
						})(t)
						return 'symbol' == Da(e) ? e : e + ''
					}
					function Va() {
						try {
							var t = !Boolean.prototype.valueOf.call(
								Reflect.construct(Boolean, [], function () {})
							)
						} catch (t) {}
						return (Va = function () {
							return !!t
						})()
					}
					function Ha() {
						return (
							(Ha =
								'undefined' != typeof Reflect && Reflect.get
									? Reflect.get.bind()
									: function (t, e, r) {
											var n = (function (t, e) {
												for (
													;
													!Object.prototype.hasOwnProperty.call(t, e) &&
													null !== (t = za(t));

												);
												return t
											})(t, e)
											if (n) {
												var i = Object.getOwnPropertyDescriptor(n, e)
												return i.get
													? i.get.call(arguments.length < 3 ? t : r)
													: i.value
											}
										}),
							Ha.apply(this, arguments)
						)
					}
					function za(t) {
						return (
							(za = Object.setPrototypeOf
								? Object.getPrototypeOf.bind()
								: function (t) {
										return t.__proto__ || Object.getPrototypeOf(t)
									}),
							za(t)
						)
					}
					function Ma(t, e) {
						return (
							(Ma = Object.setPrototypeOf
								? Object.setPrototypeOf.bind()
								: function (t, e) {
										return (t.__proto__ = e), t
									}),
							Ma(t, e)
						)
					}
					Na.rules = {
						'*': '--primary-color:%235755d9;--gray-color:%23bcc3ce;--light-color:%23fff',
						'.slider:focus': 'box-shadow:none',
						'h4 > label + .btn-group': 'margin-left:1rem',
						'.text-right > button': 'margin-right:0%20!important',
						'.text-left > button': 'margin-left:0%20!important',
						'.property-selector':
							'font-size:0.7rem;font-weight:normal;max-height:260px%20!important;width:395px%20!important',
						'.property-selector .form-checkbox': 'margin:0',
						textarea: 'width:100%25;min-height:2rem;resize:vertical',
						table: 'border-collapse:collapse',
						'.table td': 'padding:0.4rem%200.4rem',
						'.mr-5': 'margin-right:1rem%20!important',
						"div[data-schematype]:not([data-schematype='object'])":
							'transition:0.5s',
						"div[data-schematype]:not([data-schematype='object']):hover":
							'background-color:%23eee',
						'.je-table-border td':
							'border:0.05rem%20solid%20%23dadee4%20!important',
						'.btn-info':
							'font-size:0.5rem;font-weight:bold;height:0.8rem;padding:0.15rem%200;line-height:0.8;margin:0.3rem%200%200.3rem%200.1rem',
						'.je-label + select': 'min-width:5rem',
						'.je-label': 'font-weight:600',
						'.btn-action.btn-info': 'width:0.8rem',
						'.je-border': 'border:0.05rem%20solid%20%23dadee4',
						'.je-panel':
							'padding:0.2rem;margin:0.2rem;background-color:rgba(218%2C%20222%2C%20228%2C%200.1)',
						'.je-panel-top':
							'padding:0.2rem;margin:0.2rem;background-color:rgba(218%2C%20222%2C%20228%2C%200.1)',
						'.required:after': 'content:%22%20*%22;color:red;font:inherit',
						'.je-align-bottom': 'margin-top:auto',
						'.je-desc': 'font-size:smaller;margin:0.2rem%200',
						'.je-upload-preview img':
							'float:left;margin:0%200.5rem%200.5rem%200;max-width:100%25;max-height:5rem;border:3px%20solid%20white;box-shadow:0px%200px%208px%20rgba(0%2C%200%2C%200%2C%200.3);box-sizing:border-box',
						'.je-dropzone':
							'position:relative;margin:0.5rem%200;border:2px%20dashed%20black;width:100%25;height:60px;background:teal;transition:all%200.5s',
						'.je-dropzone:before':
							'position:absolute;content:attr(data-text);color:rgba(0%2C%200%2C%200%2C%200.6);left:50%25;top:50%25;transform:translate(-50%25%2C%20-50%25)',
						'.je-dropzone.valid-dropzone': 'background:green',
						'.je-dropzone.invalid-dropzone': 'background:red',
						'.columns .container.je-noindent': 'padding-left:0;padding-right:0',
						'.selectize-control.multi .item':
							'background:var(--primary-color)%20!important',
						'.select2-container--default   .select2-selection--single   .select2-selection__arrow':
							'display:none',
						'.select2-container--default .select2-selection--single':
							'border:none',
						'.select2-container .select2-selection--single .select2-selection__rendered':
							'padding:0',
						'.select2-container .select2-search--inline .select2-search__field':
							'margin-top:0',
						'.select2-container--default.select2-container--focus   .select2-selection--multiple':
							'border:0.05rem%20solid%20var(--gray-color)',
						'.select2-container--default   .select2-selection--multiple   .select2-selection__choice':
							'margin:0.4rem%200.2rem%200.2rem%200;padding:2px%205px;background-color:var(--primary-color);color:var(--light-color)',
						'.select2-container--default .select2-search--inline .select2-search__field':
							'line-height:normal',
						'.choices': 'margin-bottom:auto',
						'.choices__list--multiple .choices__item':
							'border:none;background-color:var(--primary-color);color:var(--light-color)',
						".choices[data-type*='select-multiple'] .choices__button":
							'border-left:0.05rem%20solid%20%232826a6',
						'.choices__inner':
							'font-size:inherit;min-height:20px;padding:4px%207.5px%204px%203.75px',
						".choices[data-type*='select-one'] .choices__inner":
							'padding-bottom:4px',
						'.choices__list--dropdown .choices__item': 'font-size:inherit'
					}
					var qa = {
							disable_theme_rules: !1,
							label_bold: !1,
							object_panel_default: !0,
							object_indent: !0,
							object_border: !1,
							table_border: !1,
							table_hdiv: !1,
							table_zebrastyle: !1,
							input_size: 'small',
							enable_compact: !1
						},
						Ua = (function (t) {
							function e(t) {
								return (
									(function (t, e) {
										if (!(t instanceof e))
											throw new TypeError('Cannot call a class as a function')
									})(this, e),
									(function (t, e, r) {
										return (
											(e = za(e)),
											(function (t, e) {
												if (e && ('object' === Da(e) || 'function' == typeof e))
													return e
												if (void 0 !== e)
													throw new TypeError(
														'Derived constructors may only return object or undefined'
													)
												return (function (t) {
													if (void 0 === t)
														throw new ReferenceError(
															"this hasn't been initialised - super() hasn't been called"
														)
													return t
												})(t)
											})(
												t,
												Va()
													? Reflect.construct(e, r || [], za(t).constructor)
													: e.apply(t, r)
											)
										)
									})(this, e, [t, qa])
								)
							}
							return (
								(function (t, e) {
									if ('function' != typeof e && null !== e)
										throw new TypeError(
											'Super expression must either be null or a function'
										)
									;(t.prototype = Object.create(e && e.prototype, {
										constructor: { value: t, writable: !0, configurable: !0 }
									})),
										Object.defineProperty(t, 'prototype', { writable: !1 }),
										e && Ma(t, e)
								})(e, t),
								(r = e),
								(n = [
									{
										key: 'getOptInSwitch',
										value: function (t) {
											var e = this.getHiddenLabel(t + ' opt-in')
											e.setAttribute('for', t + '-opt-in')
											var r = document.createElement('label')
											r.classList.add('switch')
											var n = document.createElement('input')
											n.setAttribute('type', 'checkbox'),
												n.setAttribute('id', t + '-opt-in'),
												n.classList.add('json-editor-opt-in')
											var i = document.createElement('span')
											i.classList.add('switch-slider', 'round')
											var o = document.createElement('span')
											return (
												o.classList.add('sr-only'),
												(o.textContent = t + '-opt-in'),
												r.appendChild(o),
												r.appendChild(n),
												r.appendChild(i),
												{ label: e, checkbox: n, container: r }
											)
										}
									},
									{
										key: 'getGridContainer',
										value: function () {
											var t = document.createElement('div')
											return (
												t.classList.add('flex', 'flex-col', 'w-full'),
												this.options.object_indent ||
													t.classList.add('je-noindent'),
												t
											)
										}
									},
									{
										key: 'getGridRow',
										value: function () {
											var t = document.createElement('div')
											return t.classList.add('flex', 'flex-wrap', 'w-full'), t
										}
									},
									{
										key: 'getGridColumn',
										value: function () {
											var t = document.createElement('div')
											return t.classList.add('flex', 'flex-col'), t
										}
									},
									{
										key: 'setGridColumnSize',
										value: function (t, e, r) {
											e > 0 && e < 12
												? t.classList.add('w-'.concat(e, '/12'), 'px-1')
												: t.classList.add('w-full', 'px-1'),
												r &&
													(t.style.marginLeft = ''.concat((100 / 12) * r, '%'))
										}
									},
									{
										key: 'getIndentedPanel',
										value: function () {
											var t = document.createElement('div')
											return (
												this.options.object_panel_default
													? t.classList.add('w-full', 'p-1')
													: t.classList.add(
															'relative',
															'flex',
															'flex-col',
															'rounded',
															'break-words',
															'border',
															'bg-white',
															'border-0',
															'border-blue-400',
															'p-1',
															'shadow-md'
														),
												this.options.object_border &&
													t.classList.add('je-border'),
												t
											)
										}
									},
									{
										key: 'getTopIndentedPanel',
										value: function () {
											var t = document.createElement('div')
											return (
												this.options.object_panel_default
													? t.classList.add('w-full', 'm-2')
													: t.classList.add(
															'relative',
															'flex',
															'flex-col',
															'rounded',
															'break-words',
															'border',
															'bg-white',
															'border-0',
															'border-blue-400',
															'p-1',
															'shadow-md'
														),
												this.options.object_border &&
													t.classList.add('je-border'),
												t
											)
										}
									},
									{
										key: 'getTitle',
										value: function () {
											return this.translateProperty(this.schema.title)
										}
									},
									{
										key: 'getSelectInput',
										value: function (t, r) {
											var n = Ha(za(e.prototype), 'getSelectInput', this).call(
												this,
												t
											)
											return (
												r
													? n.classList.add(
															'form-multiselect',
															'block',
															'py-0',
															'h-auto',
															'w-full',
															'px-1',
															'text-sm',
															'text-black',
															'leading-normal',
															'bg-white',
															'border',
															'border-grey',
															'rounded'
														)
													: n.classList.add(
															'form-select',
															'block',
															'py-0',
															'h-6',
															'w-full',
															'px-1',
															'text-sm',
															'text-black',
															'leading-normal',
															'bg-white',
															'border',
															'border-grey',
															'rounded'
														),
												this.options.enable_compact &&
													n.classList.add('compact'),
												n
											)
										}
									},
									{
										key: 'afterInputReady',
										value: function (t) {
											t.controlgroup ||
												((t.controlgroup = this.closest(t, '.form-group')),
												this.closest(t, '.compact') &&
													(t.controlgroup.style.marginBottom = 0))
										}
									},
									{
										key: 'getTextareaInput',
										value: function () {
											var t = Ha(
												za(e.prototype),
												'getTextareaInput',
												this
											).call(this)
											return (
												t.classList.add(
													'block',
													'w-full',
													'px-1',
													'text-sm',
													'leading-normal',
													'bg-white',
													'text-black',
													'border',
													'border-grey',
													'rounded'
												),
												this.options.enable_compact &&
													t.classList.add('compact'),
												(t.style.height = 0),
												t
											)
										}
									},
									{
										key: 'getRangeInput',
										value: function (t, e, r) {
											var n = this.getFormInputField('range')
											return (
												n.classList.add('slider'),
												this.options.enable_compact &&
													n.classList.add('compact'),
												n.setAttribute(
													'oninput',
													'this.setAttribute("value", this.value)'
												),
												n.setAttribute('min', t),
												n.setAttribute('max', e),
												n.setAttribute('step', r),
												n
											)
										}
									},
									{
										key: 'getRangeControl',
										value: function (t, r) {
											var n = Ha(za(e.prototype), 'getRangeControl', this).call(
												this,
												t,
												r
											)
											return n.classList.add('text-center', 'text-black'), n
										}
									},
									{
										key: 'getCheckbox',
										value: function () {
											var t = this.getFormInputField('checkbox')
											return t.classList.add('form-checkbox', 'text-red-600'), t
										}
									},
									{
										key: 'getCheckboxLabel',
										value: function (t, r) {
											var n = Ha(
												za(e.prototype),
												'getCheckboxLabel',
												this
											).call(this, t, r)
											return n.classList.add('inline-flex', 'items-center'), n
										}
									},
									{
										key: 'getFormCheckboxControl',
										value: function (t, e, r) {
											return (
												t.insertBefore(e, t.firstChild),
												r && t.classList.add('inline-flex flex-row'),
												t
											)
										}
									},
									{
										key: 'getMultiCheckboxHolder',
										value: function (t, r, n, i) {
											var o = Ha(
												za(e.prototype),
												'getMultiCheckboxHolder',
												this
											).call(this, t, r, n, i)
											return o.classList.add('inline-flex', 'flex-col'), o
										}
									},
									{
										key: 'getFormRadio',
										value: function (t) {
											var e = this.getFormInputField('radio')
											for (var r in (e.classList.add(
												'form-radio',
												'text-red-600'
											),
											t))
												e.setAttribute(r, t[r])
											return e
										}
									},
									{
										key: 'getFormRadioLabel',
										value: function (t, r) {
											var n = Ha(
												za(e.prototype),
												'getFormRadioLabel',
												this
											).call(this, t, r)
											return (
												n.classList.add('inline-flex', 'items-center', 'mr-2'),
												n
											)
										}
									},
									{
										key: 'getFormRadioControl',
										value: function (t, e, r) {
											return (
												t.insertBefore(e, t.firstChild),
												r && t.classList.add('form-radio'),
												t
											)
										}
									},
									{
										key: 'getRadioHolder',
										value: function (t, r, n, i, o) {
											var a = Ha(za(e.prototype), 'getRadioHolder', this).call(
												this,
												r,
												n,
												i,
												o
											)
											return (
												'h' === t.options.layout
													? a.classList.add('inline-flex', 'flex-row')
													: a.classList.add('inline-flex', 'flex-col'),
												a
											)
										}
									},
									{
										key: 'getFormInputLabel',
										value: function (t, r) {
											var n = Ha(
												za(e.prototype),
												'getFormInputLabel',
												this
											).call(this, t, r)
											return (
												this.options.label_bold
													? n.classList.add('font-bold')
													: n.classList.add('required'),
												n
											)
										}
									},
									{
										key: 'getFormInputField',
										value: function (t) {
											var r = Ha(
												za(e.prototype),
												'getFormInputField',
												this
											).call(this, t)
											return (
												['checkbox', 'radio'].includes(t) ||
													r.classList.add(
														'block',
														'w-full',
														'px-1',
														'text-black',
														'text-sm',
														'leading-normal',
														'bg-white',
														'border',
														'border-grey',
														'rounded'
													),
												this.options.enable_compact &&
													r.classList.add('compact'),
												r
											)
										}
									},
									{
										key: 'getFormInputDescription',
										value: function (t) {
											var e = document.createElement('p')
											return (
												e.classList.add('block', 'mt-1', 'text-xs'),
												window.DOMPurify
													? (e.innerHTML = window.DOMPurify.sanitize(t))
													: (e.textContent = this.cleanText(t)),
												e
											)
										}
									},
									{
										key: 'getFormControl',
										value: function (t, e, r, n) {
											var i = document.createElement('div')
											return (
												i.classList.add('form-group', 'mb-1', 'w-full'),
												t &&
													(t.classList.add('text-xs'),
													'checkbox' === e.type &&
														(e.classList.add(
															'form-checkbox',
															'text-xs',
															'text-red-600',
															'mr-1'
														),
														t.classList.add('items-center', 'flex'),
														(t = this.getFormCheckboxControl(t, e, !1, n))),
													'radio' === e.type &&
														(e.classList.add(
															'form-radio',
															'text-red-600',
															'mr-1'
														),
														t.classList.add('items-center', 'flex'),
														(t = this.getFormRadioControl(t, e, !1, n))),
													i.appendChild(t),
													!['checkbox', 'radio'].includes(e.type) &&
														n &&
														i.appendChild(n)),
												['checkbox', 'radio'].includes(e.type) ||
													('small' === this.options.input_size
														? e.classList.add('text-xs')
														: 'normal' === this.options.input_size
															? e.classList.add('text-base')
															: 'large' === this.options.input_size &&
																e.classList.add('text-xl'),
													i.appendChild(e)),
												r && i.appendChild(r),
												i
											)
										}
									},
									{
										key: 'getHeaderButtonHolder',
										value: function () {
											var t = this.getButtonHolder()
											return t.classList.add('text-sm'), t
										}
									},
									{
										key: 'getButtonHolder',
										value: function () {
											var t = document.createElement('div')
											return (
												t.classList.add(
													'flex',
													'relative',
													'inline-flex',
													'align-middle'
												),
												t
											)
										}
									},
									{
										key: 'getButton',
										value: function (t, r, n) {
											var i = Ha(za(e.prototype), 'getButton', this).call(
												this,
												t,
												r,
												n
											)
											return (
												i.classList.add(
													'inline-block',
													'align-middle',
													'text-center',
													'text-sm',
													'bg-blue-700',
													'text-white',
													'py-1',
													'pr-1',
													'm-2',
													'shadow',
													'select-none',
													'whitespace-no-wrap',
													'rounded'
												),
												i
											)
										}
									},
									{
										key: 'getInfoButton',
										value: function (t) {
											var e = document.createElement('a')
											e.classList.add('tooltips', 'float-right'),
												(e.innerHTML = 'ⓘ')
											var r = document.createElement('span')
											return (r.innerHTML = t), e.appendChild(r), e
										}
									},
									{
										key: 'getTable',
										value: function () {
											var t = Ha(za(e.prototype), 'getTable', this).call(this)
											return (
												this.options.table_border
													? t.classList.add('je-table-border')
													: t.classList.add('table', 'border', 'p-0'),
												t
											)
										}
									},
									{
										key: 'getTableRow',
										value: function () {
											var t = Ha(za(e.prototype), 'getTableRow', this).call(
												this
											)
											return (
												this.options.table_border &&
													t.classList.add('je-table-border'),
												this.options.table_zebrastyle &&
													t.classList.add('je-table-zebra'),
												t
											)
										}
									},
									{
										key: 'getTableHeaderCell',
										value: function (t) {
											var r = Ha(
												za(e.prototype),
												'getTableHeaderCell',
												this
											).call(this, t)
											return (
												this.options.table_border
													? r.classList.add('je-table-border')
													: this.options.table_hdiv
														? r.classList.add('je-table-hdiv')
														: r.classList.add(
																'text-xs',
																'border',
																'p-0',
																'm-0'
															),
												r
											)
										}
									},
									{
										key: 'getTableCell',
										value: function () {
											var t = Ha(za(e.prototype), 'getTableCell', this).call(
												this
											)
											return (
												this.options.table_border
													? t.classList.add('je-table-border')
													: this.options.table_hdiv
														? t.classList.add('je-table-hdiv')
														: t.classList.add('border-0', 'p-0', 'm-0'),
												t
											)
										}
									},
									{
										key: 'addInputError',
										value: function (t, e) {
											t.controlgroup &&
												(t.controlgroup.classList.add('has-error'),
												t.controlgroup.classList.add('text-red-600'),
												t.errmsg
													? (t.errmsg.style.display = '')
													: ((t.errmsg = document.createElement('p')),
														t.errmsg.classList.add(
															'block',
															'mt-1',
															'text-xs',
															'text-red'
														),
														t.controlgroup.appendChild(t.errmsg)),
												(t.errmsg.textContent = e))
										}
									},
									{
										key: 'removeInputError',
										value: function (t) {
											t.errmsg &&
												((t.errmsg.style.display = 'none'),
												t.controlgroup.classList.remove('text-red-600'),
												t.controlgroup.classList.remove('has-error'))
										}
									},
									{
										key: 'getTabHolder',
										value: function (t) {
											var e = document.createElement('div'),
												r = void 0 === t ? '' : t
											return (
												(e.innerHTML = "<div class='w-2/12' id='"
													.concat(
														r,
														"'><ul class='list-reset pl-0 mb-0'></ul></div><div class='w-10/12' id='"
													)
													.concat(r, "'></div>")),
												e.classList.add('flex'),
												e
											)
										}
									},
									{
										key: 'addTab',
										value: function (t, e) {
											t.children[0].children[0].appendChild(e)
										}
									},
									{
										key: 'getTopTabHolder',
										value: function (t) {
											var e = void 0 === t ? '' : t,
												r = document.createElement('div')
											return (
												(r.innerHTML =
													"<ul class='nav-tabs flex list-reset pl-0 mb-0 border-b border-grey-light' id='"
														.concat(e, "'></ul><div class='p-6 block' id='")
														.concat(e, "'></div>")),
												r
											)
										}
									},
									{
										key: 'getTab',
										value: function (t, e) {
											var r = document.createElement('li')
											r.classList.add(
												'nav-item',
												'flex-col',
												'text-center',
												'text-white',
												'bg-blue-500',
												'shadow-md',
												'border',
												'p-2',
												'mb-2',
												'mr-2',
												'hover:bg-blue-400',
												'rounded'
											)
											var n = document.createElement('a')
											return (
												n.classList.add('nav-link', 'text-center'),
												n.setAttribute('href', '#'.concat(e)),
												n.setAttribute('data-toggle', 'tab'),
												n.appendChild(t),
												r.appendChild(n),
												r
											)
										}
									},
									{
										key: 'getTopTab',
										value: function (t, e) {
											var r = document.createElement('li')
											r.classList.add(
												'nav-item',
												'flex',
												'border-l',
												'border-t',
												'border-r'
											)
											var n = document.createElement('a')
											return (
												n.classList.add(
													'nav-link',
													'-mb-px',
													'flex-row',
													'text-center',
													'bg-white',
													'p-2',
													'hover:bg-blue-400',
													'rounded-t'
												),
												n.setAttribute('href', '#'.concat(e)),
												n.setAttribute('data-toggle', 'tab'),
												n.appendChild(t),
												r.appendChild(n),
												r
											)
										}
									},
									{
										key: 'getTabContent',
										value: function () {
											var t = document.createElement('div')
											return t.setAttribute('role', 'tabpanel'), t
										}
									},
									{
										key: 'getTopTabContent',
										value: function () {
											var t = document.createElement('div')
											return t.setAttribute('role', 'tabpanel'), t
										}
									},
									{
										key: 'markTabActive',
										value: function (t) {
											t.tab.firstChild.classList.add('block'),
												!0 === t.tab.firstChild.classList.contains('border-b')
													? (t.tab.firstChild.classList.add('border-b-0'),
														t.tab.firstChild.classList.remove('border-b'))
													: t.tab.firstChild.classList.add('border-b-0'),
												!0 === t.container.classList.contains('hidden')
													? (t.container.classList.remove('hidden'),
														t.container.classList.add('block'))
													: t.container.classList.add('block')
										}
									},
									{
										key: 'markTabInactive',
										value: function (t) {
											!0 === t.tab.firstChild.classList.contains('border-b-0')
												? (t.tab.firstChild.classList.add('border-b'),
													t.tab.firstChild.classList.remove('border-b-0'))
												: t.tab.firstChild.classList.add('border-b'),
												!0 === t.container.classList.contains('block') &&
													(t.container.classList.remove('block'),
													t.container.classList.add('hidden'))
										}
									},
									{
										key: 'getProgressBar',
										value: function () {
											var t = document.createElement('div')
											t.classList.add('progress')
											var e = document.createElement('div')
											return (
												e.classList.add(
													'bg-blue',
													'leading-none',
													'py-1',
													'text-xs',
													'text-center',
													'text-white'
												),
												e.setAttribute('role', 'progressbar'),
												e.setAttribute('aria-valuenow', 0),
												e.setAttribute('aria-valuemin', 0),
												e.setAttribute('aria-valuenax', 100),
												(e.innerHTML = ''.concat(0, '%')),
												t.appendChild(e),
												t
											)
										}
									},
									{
										key: 'updateProgressBar',
										value: function (t, e) {
											if (t) {
												var r = t.firstChild,
													n = ''.concat(e, '%')
												r.setAttribute('aria-valuenow', e),
													(r.style.width = n),
													(r.innerHTML = n)
											}
										}
									},
									{
										key: 'updateProgressBarUnknown',
										value: function (t) {
											if (t) {
												var e = t.firstChild
												t.classList.add(
													'progress',
													'bg-blue',
													'leading-none',
													'py-1',
													'text-xs',
													'text-center',
													'text-white',
													'block'
												),
													e.removeAttribute('aria-valuenow'),
													e.classList.add('w-full'),
													(e.innerHTML = '')
											}
										}
									},
									{
										key: 'getInputGroup',
										value: function (t, e) {
											if (t) {
												var r = document.createElement('div')
												r.classList.add('relative', 'items-stretch', 'w-full'),
													r.appendChild(t)
												var n = document.createElement('div')
												n.classList.add('-mr-1'), r.appendChild(n)
												for (var i = 0; i < e.length; i++) n.appendChild(e[i])
												return r
											}
										}
									}
								]) &&
									(function (t, e) {
										for (var r = 0; r < e.length; r++) {
											var n = e[r]
											;(n.enumerable = n.enumerable || !1),
												(n.configurable = !0),
												'value' in n && (n.writable = !0),
												Object.defineProperty(t, Fa(n.key), n)
										}
									})(r.prototype, n),
								Object.defineProperty(r, 'prototype', { writable: !1 }),
								r
							)
							var r, n
						})(Vo)
					Ua.rules = {
						'.slider':
							'-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;display:block;border:none;height:1.2rem;width:100%25',
						'.slider:focus':
							'box-shadow:0%200%200%200%20rgba(87%2C%2085%2C%20217%2C%200.2);outline:none',
						'.slider.tooltip:not([data-tooltip])::after': 'content:attr(value)',
						'.slider::-webkit-slider-thumb':
							'-webkit-appearance:none;background:%23f17405;border-radius:100%25;height:0.6rem;margin-top:-0.25rem;transition:transform%200.2s;width:0.6rem',
						'.slider:active::-webkit-slider-thumb':
							'transform:scale(1.25);outline:none',
						'.slider::-webkit-slider-runnable-track':
							'background:%23b2b4b6;border-radius:0.1rem;height:0.1rem;width:100%25',
						'a.tooltips': 'position:relative;display:inline',
						'a.tooltips span':
							'position:absolute;white-space:nowrap;width:auto;padding-left:1rem;padding-right:1rem;color:%23ffffff;background:rgba(56%2C%2056%2C%2056%2C%200.85);height:1.5rem;line-height:1.5rem;text-align:center;visibility:hidden;border-radius:3px',
						'a.tooltips span:after':
							'content:%22%22;position:absolute;top:50%25;left:100%25;margin-top:-5px;width:0;height:0;border-left:5px%20solid%20rgba(56%2C%2056%2C%2056%2C%200.85);border-top:5px%20solid%20transparent;border-bottom:5px%20solid%20transparent',
						'a:hover.tooltips span':
							'visibility:visible;opacity:0.9;font-size:0.8rem;right:100%25;top:50%25;margin-top:-12px;margin-right:10px;z-index:999',
						'.json-editor-btntype-properties + div':
							'font-size:0.8rem;font-weight:normal',
						textarea: 'width:100%25;min-height:2rem;resize:vertical',
						table: 'width:100%25;border-collapse:collapse',
						'.table td': 'padding:0rem%200rem',
						"div[data-schematype]:not([data-schematype='object'])":
							'transition:0.5s',
						"div[data-schematype]:not([data-schematype='object']):hover":
							'background-color:%23e6f4fe',
						"div[data-schemaid='root']":
							'position:relative;width:inherit;display:inherit;overflow-x:hidden;z-index:10',
						'select[multiple]': 'height:auto',
						'select[multiple].from-select': 'height:auto',
						'.je-table-zebra:nth-child(even)': 'background-color:%23f2f2f2',
						'.je-table-border': 'border:0.5px%20solid%20black',
						'.je-table-hdiv': 'border-bottom:1px%20solid%20black',
						'.je-border': 'border:0.05rem%20solid%20%233182ce',
						'.je-panel':
							'width:inherit;padding:0.2rem;margin:0.2rem;background-color:rgba(218%2C%20222%2C%20228%2C%200.1)',
						'.je-panel-top':
							'width:100%25;padding:0.2rem;margin:0.2rem;background-color:rgba(218%2C%20222%2C%20228%2C%200.1)',
						'.required:after':
							'content:%22%20*%22;color:red;font:inherit;font-weight:bold',
						'.je-desc': 'font-size:smaller;margin:0.2rem%200',
						'.container-xl.je-noindent': 'padding-left:0;padding-right:0',
						'.json-editor-btntype-add':
							'color:white;margin:0.3rem;padding:0.3rem%200.8rem;background-color:%234299e1;box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2);-webkit-box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2);-moz-box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2)',
						'.json-editor-btntype-deletelast':
							'color:white;margin:0.3rem;padding:0.3rem%200.8rem;background-color:%23e53e3e;box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2);-webkit-box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2);-moz-box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2)',
						'.json-editor-btntype-deleteall':
							'color:white;margin:0.3rem;padding:0.3rem%200.8rem;background-color:%23000000;box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2);-webkit-box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2);-moz-box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2)',
						'.json-editor-btn-save':
							'float:right;color:white;margin:0.3rem;padding:0.3rem%200.8rem;background-color:%232b6cb0;box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2);-webkit-box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2);-moz-box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2)',
						'.json-editor-btn-back':
							'color:white;margin:0.3rem;padding:0.3rem%200.8rem;background-color:%232b6cb0;box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2);-webkit-box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2);-moz-box-shadow:3px%203px%205px%201px%20rgba(4%2C%204%2C%204%2C%200.2)',
						'.json-editor-btntype-delete':
							'color:%23e53e3e;background-color:rgba(218%2C%20222%2C%20228%2C%200.1);margin:0.03rem;padding:0.1rem',
						'.json-editor-btntype-move':
							'color:%23000000;background-color:rgba(218%2C%20222%2C%20228%2C%200.1);margin:0.03rem;padding:0.1rem',
						'.json-editor-btn-collapse':
							'padding:0em%200.8rem;font-size:1.3rem;color:%23e53e3e;background-color:rgba(218%2C%20222%2C%20228%2C%200.1)',
						'.je-upload-preview img':
							'float:left;margin:0%200.5rem%200.5rem%200;max-width:100%25;max-height:5rem',
						'.je-dropzone':
							'position:relative;margin:0.5rem%200;border:2px%20dashed%20black;width:100%25;height:60px;background:teal;transition:all%200.5s',
						'.je-dropzone:before':
							'position:absolute;content:attr(data-text);color:rgba(0%2C%200%2C%200%2C%200.6);left:50%25;top:50%25;transform:translate(-50%25%2C%20-50%25)',
						'.je-dropzone.valid-dropzone': 'background:green',
						'.je-dropzone.invalid-dropzone': 'background:red',
						'.switch':
							'position:relative;display:inline-block;width:28px;height:16px;margin-right:10px',
						'.switch input': 'opacity:0;width:0;height:0',
						'.switch-slider':
							'position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:%23ccc;transition:.1s;border-radius:34px',
						'.switch-slider:before':
							'position:absolute;content:%22%22;height:12px;width:12px;left:1px;top:2px;background-color:white;transition:.1s;border-radius:50%25',
						'input:checked + .switch-slider': 'background-color:%232196F3',
						'input:focus + .switch-slider':
							'box-shadow:0%200%201px%20%232196F3',
						'input:checked + .switch-slider:before':
							'transform:translateX(12px)',
						'input:disabled + .switch-slider': 'opacity:0.5'
					}
					var Ga = {
						html: $o,
						bootstrap3: Xo,
						bootstrap4: sa,
						bootstrap5: ya,
						jqueryui: ka,
						barebones: Sa,
						spectre: Na,
						tailwind: Ua
					}
					const $a = {
						'.table-responsive .autocomplete-result-list':
							'position:relative%20!important',
						'.je-float-right-linkholder': 'float:right;margin-left:10px',
						'.je-modal':
							'background-color:white;border:1px%20solid%20black;box-shadow:3px%203px%20black;position:absolute;z-index:10',
						'.je-infobutton-icon':
							'font-size:16px;font-weight:bold;padding:0.25rem;position:relative;display:inline-block',
						'.je-infobutton-tooltip':
							'font-size:12px;font-weight:normal;font-family:sans-serif;visibility:hidden;background-color:rgba(50%2C%2050%2C%2050%2C%200.75);margin:0%200.25rem;color:%23fafafa;padding:0.5rem%201rem;border-radius:0.25rem;width:20rem;position:absolute',
						'.je-not-loaded': 'pointer-events:none',
						'.je-header': 'display:inline-block',
						'.je-upload-preview img':
							'float:left;margin:0%200.5rem%200.5rem%200;max-width:100%25;max-height:5rem',
						'.je-checkbox': 'display:inline-block;width:auto',
						'.je-checkbox-control--compact':
							'display:inline-block;margin-right:1rem',
						'.je-radio': 'display:inline-block;width:auto',
						'.je-radio-control--compact':
							'display:inline-block;margin-right:1rem',
						'.je-switcher':
							'background-color:transparent;display:inline-block;font-style:italic;font-weight:normal;height:auto;width:auto;margin-bottom:0;margin-left:5px;padding:0%200%200%203px',
						'.je-textarea': 'width:100%25;height:300px;box-sizing:border-box',
						'.je-range-control': 'text-align:center',
						'.je-indented-panel':
							'padding-left:10px;margin-left:10px;border-left:1px%20solid%20%23ccc',
						'.je-indented-panel--top': 'padding-left:10px;margin-left:10px',
						'.je-tabholder': 'float:left;width:130px',
						'.je-tabholder .content': 'margin-left:120px',
						'.je-tabholder--top': 'margin-left:10px',
						'.je-tabholder--clear': 'clear:both',
						'.je-tab':
							'border:1px%20solid%20%23ccc;border-width:1px%200%201px%201px;text-align:center;line-height:30px;border-radius:5px;border-bottom-right-radius:0;border-top-right-radius:0;font-weight:bold;cursor:pointer',
						'.je-tab--top':
							'float:left;border:1px%20solid%20%23ccc;border-width:1px%201px%200px%201px;text-align:center;line-height:30px;border-radius:5px;padding-left:5px;padding-right:5px;border-bottom-right-radius:0;border-bottom-left-radius:0;font-weight:bold;cursor:pointer',
						'.je-block-link': 'display:block',
						'.je-media': 'width:100%25'
					}
					function Ja(t) {
						return (
							(Ja =
								'function' == typeof Symbol &&
								'symbol' == typeof Symbol.iterator
									? function (t) {
											return typeof t
										}
									: function (t) {
											return t &&
												'function' == typeof Symbol &&
												t.constructor === Symbol &&
												t !== Symbol.prototype
												? 'symbol'
												: typeof t
										}),
							Ja(t)
						)
					}
					function Wa(t, e) {
						;(null == e || e > t.length) && (e = t.length)
						for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r]
						return n
					}
					function Za() {
						Za = function () {
							return e
						}
						var t,
							e = {},
							r = Object.prototype,
							n = r.hasOwnProperty,
							i =
								Object.defineProperty ||
								function (t, e, r) {
									t[e] = r.value
								},
							o = 'function' == typeof Symbol ? Symbol : {},
							a = o.iterator || '@@iterator',
							s = o.asyncIterator || '@@asyncIterator',
							l = o.toStringTag || '@@toStringTag'
						function c(t, e, r) {
							return (
								Object.defineProperty(t, e, {
									value: r,
									enumerable: !0,
									configurable: !0,
									writable: !0
								}),
								t[e]
							)
						}
						try {
							c({}, '')
						} catch (t) {
							c = function (t, e, r) {
								return (t[e] = r)
							}
						}
						function u(t, e, r, n) {
							var o = e && e.prototype instanceof v ? e : v,
								a = Object.create(o.prototype),
								s = new L(n || [])
							return i(a, '_invoke', { value: C(t, r, s) }), a
						}
						function h(t, e, r) {
							try {
								return { type: 'normal', arg: t.call(e, r) }
							} catch (t) {
								return { type: 'throw', arg: t }
							}
						}
						e.wrap = u
						var p = 'suspendedStart',
							d = 'suspendedYield',
							f = 'executing',
							y = 'completed',
							m = {}
						function v() {}
						function b() {}
						function g() {}
						var w = {}
						c(w, a, function () {
							return this
						})
						var _ = Object.getPrototypeOf,
							k = _ && _(_(T([])))
						k && k !== r && n.call(k, a) && (w = k)
						var j = (g.prototype = v.prototype = Object.create(w))
						function O(t) {
							;['next', 'throw', 'return'].forEach(function (e) {
								c(t, e, function (t) {
									return this._invoke(e, t)
								})
							})
						}
						function x(t, e) {
							function r(i, o, a, s) {
								var l = h(t[i], t, o)
								if ('throw' !== l.type) {
									var c = l.arg,
										u = c.value
									return u && 'object' == Ja(u) && n.call(u, '__await')
										? e.resolve(u.__await).then(
												function (t) {
													r('next', t, a, s)
												},
												function (t) {
													r('throw', t, a, s)
												}
											)
										: e.resolve(u).then(
												function (t) {
													;(c.value = t), a(c)
												},
												function (t) {
													return r('throw', t, a, s)
												}
											)
								}
								s(l.arg)
							}
							var o
							i(this, '_invoke', {
								value: function (t, n) {
									function i() {
										return new e(function (e, i) {
											r(t, n, e, i)
										})
									}
									return (o = o ? o.then(i, i) : i())
								}
							})
						}
						function C(e, r, n) {
							var i = p
							return function (o, a) {
								if (i === f) throw Error('Generator is already running')
								if (i === y) {
									if ('throw' === o) throw a
									return { value: t, done: !0 }
								}
								for (n.method = o, n.arg = a; ; ) {
									var s = n.delegate
									if (s) {
										var l = E(s, n)
										if (l) {
											if (l === m) continue
											return l
										}
									}
									if ('next' === n.method) n.sent = n._sent = n.arg
									else if ('throw' === n.method) {
										if (i === p) throw ((i = y), n.arg)
										n.dispatchException(n.arg)
									} else 'return' === n.method && n.abrupt('return', n.arg)
									i = f
									var c = h(e, r, n)
									if ('normal' === c.type) {
										if (((i = n.done ? y : d), c.arg === m)) continue
										return { value: c.arg, done: n.done }
									}
									'throw' === c.type &&
										((i = y), (n.method = 'throw'), (n.arg = c.arg))
								}
							}
						}
						function E(e, r) {
							var n = r.method,
								i = e.iterator[n]
							if (i === t)
								return (
									(r.delegate = null),
									('throw' === n &&
										e.iterator.return &&
										((r.method = 'return'),
										(r.arg = t),
										E(e, r),
										'throw' === r.method)) ||
										('return' !== n &&
											((r.method = 'throw'),
											(r.arg = new TypeError(
												"The iterator does not provide a '" + n + "' method"
											)))),
									m
								)
							var o = h(i, e.iterator, r.arg)
							if ('throw' === o.type)
								return (
									(r.method = 'throw'), (r.arg = o.arg), (r.delegate = null), m
								)
							var a = o.arg
							return a
								? a.done
									? ((r[e.resultName] = a.value),
										(r.next = e.nextLoc),
										'return' !== r.method && ((r.method = 'next'), (r.arg = t)),
										(r.delegate = null),
										m)
									: a
								: ((r.method = 'throw'),
									(r.arg = new TypeError('iterator result is not an object')),
									(r.delegate = null),
									m)
						}
						function S(t) {
							var e = { tryLoc: t[0] }
							1 in t && (e.catchLoc = t[1]),
								2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
								this.tryEntries.push(e)
						}
						function P(t) {
							var e = t.completion || {}
							;(e.type = 'normal'), delete e.arg, (t.completion = e)
						}
						function L(t) {
							;(this.tryEntries = [{ tryLoc: 'root' }]),
								t.forEach(S, this),
								this.reset(!0)
						}
						function T(e) {
							if (e || '' === e) {
								var r = e[a]
								if (r) return r.call(e)
								if ('function' == typeof e.next) return e
								if (!isNaN(e.length)) {
									var i = -1,
										o = function r() {
											for (; ++i < e.length; )
												if (n.call(e, i))
													return (r.value = e[i]), (r.done = !1), r
											return (r.value = t), (r.done = !0), r
										}
									return (o.next = o)
								}
							}
							throw new TypeError(Ja(e) + ' is not iterable')
						}
						return (
							(b.prototype = g),
							i(j, 'constructor', { value: g, configurable: !0 }),
							i(g, 'constructor', { value: b, configurable: !0 }),
							(b.displayName = c(g, l, 'GeneratorFunction')),
							(e.isGeneratorFunction = function (t) {
								var e = 'function' == typeof t && t.constructor
								return (
									!!e &&
									(e === b || 'GeneratorFunction' === (e.displayName || e.name))
								)
							}),
							(e.mark = function (t) {
								return (
									Object.setPrototypeOf
										? Object.setPrototypeOf(t, g)
										: ((t.__proto__ = g), c(t, l, 'GeneratorFunction')),
									(t.prototype = Object.create(j)),
									t
								)
							}),
							(e.awrap = function (t) {
								return { __await: t }
							}),
							O(x.prototype),
							c(x.prototype, s, function () {
								return this
							}),
							(e.AsyncIterator = x),
							(e.async = function (t, r, n, i, o) {
								void 0 === o && (o = Promise)
								var a = new x(u(t, r, n, i), o)
								return e.isGeneratorFunction(r)
									? a
									: a.next().then(function (t) {
											return t.done ? t.value : a.next()
										})
							}),
							O(j),
							c(j, l, 'Generator'),
							c(j, a, function () {
								return this
							}),
							c(j, 'toString', function () {
								return '[object Generator]'
							}),
							(e.keys = function (t) {
								var e = Object(t),
									r = []
								for (var n in e) r.push(n)
								return (
									r.reverse(),
									function t() {
										for (; r.length; ) {
											var n = r.pop()
											if (n in e) return (t.value = n), (t.done = !1), t
										}
										return (t.done = !0), t
									}
								)
							}),
							(e.values = T),
							(L.prototype = {
								constructor: L,
								reset: function (e) {
									if (
										((this.prev = 0),
										(this.next = 0),
										(this.sent = this._sent = t),
										(this.done = !1),
										(this.delegate = null),
										(this.method = 'next'),
										(this.arg = t),
										this.tryEntries.forEach(P),
										!e)
									)
										for (var r in this)
											't' === r.charAt(0) &&
												n.call(this, r) &&
												!isNaN(+r.slice(1)) &&
												(this[r] = t)
								},
								stop: function () {
									this.done = !0
									var t = this.tryEntries[0].completion
									if ('throw' === t.type) throw t.arg
									return this.rval
								},
								dispatchException: function (e) {
									if (this.done) throw e
									var r = this
									function i(n, i) {
										return (
											(s.type = 'throw'),
											(s.arg = e),
											(r.next = n),
											i && ((r.method = 'next'), (r.arg = t)),
											!!i
										)
									}
									for (var o = this.tryEntries.length - 1; o >= 0; --o) {
										var a = this.tryEntries[o],
											s = a.completion
										if ('root' === a.tryLoc) return i('end')
										if (a.tryLoc <= this.prev) {
											var l = n.call(a, 'catchLoc'),
												c = n.call(a, 'finallyLoc')
											if (l && c) {
												if (this.prev < a.catchLoc) return i(a.catchLoc, !0)
												if (this.prev < a.finallyLoc) return i(a.finallyLoc)
											} else if (l) {
												if (this.prev < a.catchLoc) return i(a.catchLoc, !0)
											} else {
												if (!c)
													throw Error('try statement without catch or finally')
												if (this.prev < a.finallyLoc) return i(a.finallyLoc)
											}
										}
									}
								},
								abrupt: function (t, e) {
									for (var r = this.tryEntries.length - 1; r >= 0; --r) {
										var i = this.tryEntries[r]
										if (
											i.tryLoc <= this.prev &&
											n.call(i, 'finallyLoc') &&
											this.prev < i.finallyLoc
										) {
											var o = i
											break
										}
									}
									o &&
										('break' === t || 'continue' === t) &&
										o.tryLoc <= e &&
										e <= o.finallyLoc &&
										(o = null)
									var a = o ? o.completion : {}
									return (
										(a.type = t),
										(a.arg = e),
										o
											? ((this.method = 'next'), (this.next = o.finallyLoc), m)
											: this.complete(a)
									)
								},
								complete: function (t, e) {
									if ('throw' === t.type) throw t.arg
									return (
										'break' === t.type || 'continue' === t.type
											? (this.next = t.arg)
											: 'return' === t.type
												? ((this.rval = this.arg = t.arg),
													(this.method = 'return'),
													(this.next = 'end'))
												: 'normal' === t.type && e && (this.next = e),
										m
									)
								},
								finish: function (t) {
									for (var e = this.tryEntries.length - 1; e >= 0; --e) {
										var r = this.tryEntries[e]
										if (r.finallyLoc === t)
											return this.complete(r.completion, r.afterLoc), P(r), m
									}
								},
								catch: function (t) {
									for (var e = this.tryEntries.length - 1; e >= 0; --e) {
										var r = this.tryEntries[e]
										if (r.tryLoc === t) {
											var n = r.completion
											if ('throw' === n.type) {
												var i = n.arg
												P(r)
											}
											return i
										}
									}
									throw Error('illegal catch attempt')
								},
								delegateYield: function (e, r, n) {
									return (
										(this.delegate = {
											iterator: T(e),
											resultName: r,
											nextLoc: n
										}),
										'next' === this.method && (this.arg = t),
										m
									)
								}
							}),
							e
						)
					}
					function Ya(t, e, r, n, i, o, a) {
						try {
							var s = t[o](a),
								l = s.value
						} catch (t) {
							return void r(t)
						}
						s.done ? e(l) : Promise.resolve(l).then(n, i)
					}
					function Qa(t) {
						var e = (function (t) {
							if ('object' != Ja(t) || !t) return t
							var e = t[Symbol.toPrimitive]
							if (void 0 !== e) {
								var r = e.call(t, 'string')
								if ('object' != Ja(r)) return r
								throw new TypeError(
									'@@toPrimitive must return a primitive value.'
								)
							}
							return String(t)
						})(t)
						return 'symbol' == Ja(e) ? e : e + ''
					}
					var Ka = (function () {
						function t(e) {
							var r = this,
								n =
									arguments.length > 1 && void 0 !== arguments[1]
										? arguments[1]
										: {}
							if (
								((function (t, e) {
									if (!(t instanceof e))
										throw new TypeError('Cannot call a class as a function')
								})(this, t),
								!(e instanceof Element))
							)
								throw new Error('element should be an instance of Element')
							;(this.element = e),
								(this.options = l({}, t.defaults.options, n)),
								(this.ready = !1),
								(this.copyClipboard = null),
								(this.schema = this.options.schema),
								(this.template = this.options.template),
								(this.translate =
									this.options.translate || t.defaults.translate),
								(this.translateProperty =
									this.options.translateProperty ||
									t.defaults.translateProperty),
								(this.uuid = 0),
								(this.__data = {})
							var i = this.options.theme || t.defaults.theme,
								o = t.defaults.themes[i]
							if (!o) throw new Error('Unknown theme '.concat(i))
							this.element.setAttribute('data-theme', i),
								this.element.classList.add('je-not-loaded'),
								this.element.classList.remove('je-ready'),
								(this.theme = new o(this))
							var a = l($a, this.getEditorsRules()),
								s = function (t, e, n) {
									return n
										? r.addNewStyleRulesToShadowRoot(t, e, n)
										: r.addNewStyleRules(t, e)
								}
							if (!this.theme.options.disable_theme_rules) {
								var c = u(this.element)
								s('default', a, c), void 0 !== o.rules && s(i, o.rules, c)
							}
							var h =
								t.defaults.iconlibs[this.options.iconlib || t.defaults.iconlib]
							h && (this.iconlib = new h()),
								(this.root_container = this.theme.getContainer()),
								this.element.appendChild(this.root_container),
								(this.promise = this.load())
						}
						return (
							(e = t),
							(r = [
								{
									key: 'load',
									value:
										((n = Za().mark(function e() {
											var r,
												n,
												i,
												o,
												a,
												s,
												l = this
											return Za().wrap(
												function (e) {
													for (;;)
														switch ((e.prev = e.next)) {
															case 0:
																return (
																	(r =
																		document.location.origin +
																		document.location.pathname.toString()),
																	((n = new Ii(this.options)).onSchemaLoaded =
																		function (t) {
																			l.trigger('schemaLoaded', t)
																		}),
																	(n.onAllSchemasLoaded = function () {
																		l.trigger('allSchemasLoaded')
																	}),
																	(this.expandSchema = function (t) {
																		return n.expandSchema(t)
																	}),
																	(this.expandRefs = function (t, e) {
																		return n.expandRefs(t, e)
																	}),
																	(i = document.location.toString()),
																	(e.next = 9),
																	n.load(this.schema, r, i)
																)
															case 9:
																;(o = e.sent),
																	(a = this.options.custom_validators
																		? {
																				custom_validators:
																					this.options.custom_validators
																			}
																		: {}),
																	(this.validator = new kr(
																		this,
																		null,
																		a,
																		t.defaults
																	)),
																	(s = this.getEditorClass(o)),
																	(this.root = this.createEditor(s, {
																		jsoneditor: this,
																		schema: o,
																		required: !0,
																		container: this.root_container
																	})),
																	this.root.preBuild(),
																	this.root.build(),
																	this.root.postBuild(),
																	h(this.options, 'startval') &&
																		this.root.setValue(this.options.startval),
																	(this.validation_results =
																		this.validator.validate(
																			this.root.getValue()
																		)),
																	this.root.showValidationErrors(
																		this.validation_results
																	),
																	(this.ready = !0),
																	this.element.classList.remove(
																		'je-not-loaded'
																	),
																	this.element.classList.add('je-ready'),
																	window.requestAnimationFrame(function () {
																		l.ready &&
																			((l.validation_results =
																				l.validator.validate(
																					l.root.getValue()
																				)),
																			l.root.showValidationErrors(
																				l.validation_results
																			),
																			l.trigger('ready'),
																			l.trigger('change'))
																	})
															case 24:
															case 'end':
																return e.stop()
														}
												},
												e,
												this
											)
										})),
										(i = function () {
											var t = this,
												e = arguments
											return new Promise(function (r, i) {
												var o = n.apply(t, e)
												function a(t) {
													Ya(o, r, i, a, s, 'next', t)
												}
												function s(t) {
													Ya(o, r, i, a, s, 'throw', t)
												}
												a(void 0)
											})
										}),
										function () {
											return i.apply(this, arguments)
										})
								},
								{
									key: 'getValue',
									value: function () {
										if (!this.ready)
											throw new Error(
												'JSON Editor not ready yet. Make sure the load method is complete'
											)
										return this.root.getValue()
									}
								},
								{
									key: 'setValue',
									value: function (t) {
										if (!this.ready)
											throw new Error(
												'JSON Editor not ready yet. Make sure the load method is complete'
											)
										return this.root.setValue(t), this
									}
								},
								{
									key: 'validate',
									value: function (t) {
										if (!this.ready)
											throw new Error(
												'JSON Editor not ready yet. Make sure the load method is complete'
											)
										return 1 === arguments.length
											? this.validator.validate(t)
											: this.validation_results
									}
								},
								{
									key: 'destroy',
									value: function () {
										this.destroyed ||
											(this.ready &&
												((this.schema = null),
												(this.options = null),
												this.root.destroy(),
												(this.root = null),
												(this.root_container = null),
												(this.validator = null),
												(this.validation_results = null),
												(this.theme = null),
												(this.iconlib = null),
												(this.template = null),
												(this.__data = null),
												(this.ready = !1),
												(this.element.innerHTML = ''),
												this.element.removeAttribute('data-theme'),
												(this.destroyed = !0)))
									}
								},
								{
									key: 'on',
									value: function (t, e) {
										return (
											(this.callbacks = this.callbacks || {}),
											(this.callbacks[t] = this.callbacks[t] || []),
											this.callbacks[t].push(e),
											this
										)
									}
								},
								{
									key: 'off',
									value: function (t, e) {
										if (t && e) {
											;(this.callbacks = this.callbacks || {}),
												(this.callbacks[t] = this.callbacks[t] || [])
											for (var r = [], n = 0; n < this.callbacks[t].length; n++)
												this.callbacks[t][n] !== e &&
													r.push(this.callbacks[t][n])
											this.callbacks[t] = r
										} else
											t
												? ((this.callbacks = this.callbacks || {}),
													(this.callbacks[t] = []))
												: (this.callbacks = {})
										return this
									}
								},
								{
									key: 'trigger',
									value: function (t, e) {
										if (
											this.callbacks &&
											this.callbacks[t] &&
											this.callbacks[t].length
										)
											for (var r = 0; r < this.callbacks[t].length; r++)
												this.callbacks[t][r].apply(this, [e])
										return this
									}
								},
								{
									key: 'setOption',
									value: function (t, e) {
										if ('show_errors' !== t)
											throw new Error(
												'Option '.concat(
													t,
													' must be set during instantiation and cannot be changed later'
												)
											)
										return (this.options.show_errors = e), this.onChange(), this
									}
								},
								{
									key: 'getEditorsRules',
									value: function () {
										return Object.values(t.defaults.editors).reduce(function (
											t,
											e
										) {
											return e.rules ? l(t, e.rules) : t
										}, {})
									}
								},
								{
									key: 'getEditorClass',
									value: function (e) {
										var r,
											n = this
										if (
											((e = this.expandSchema(e)),
											t.defaults.resolvers.find(function (i) {
												return (r = i(e, n)) && t.defaults.editors[r]
											}),
											!r)
										)
											throw new Error(
												'Unknown editor for schema '.concat(JSON.stringify(e))
											)
										if (!t.defaults.editors[r])
											throw new Error('Unknown editor '.concat(r))
										return t.defaults.editors[r]
									}
								},
								{
									key: 'createEditor',
									value: function (e, r) {
										var n =
											arguments.length > 2 && void 0 !== arguments[2]
												? arguments[2]
												: 1
										return new e((r = l({}, e.options || {}, r)), t.defaults, n)
									}
								},
								{
									key: 'onChange',
									value: function (t) {
										var e = this
										if (
											this.ready &&
											(t && this.trigger(t.event, t.data), !this.firing_change)
										)
											return (
												(this.firing_change = !0),
												window.requestAnimationFrame(function () {
													;(e.firing_change = !1),
														e.ready &&
															((e.validation_results = e.validator.validate(
																e.root.getValue()
															)),
															'never' !== e.options.show_errors
																? e.root.showValidationErrors(
																		e.validation_results
																	)
																: e.root.showValidationErrors([]),
															e.trigger('change'))
												}),
												this
											)
									}
								},
								{
									key: 'compileTemplate',
									value: function (e) {
										var r,
											n =
												arguments.length > 1 && void 0 !== arguments[1]
													? arguments[1]
													: t.defaults.template
										if ('string' == typeof n) {
											if (!t.defaults.templates[n])
												throw new Error('Unknown template engine '.concat(n))
											if (!(r = t.defaults.templates[n]()))
												throw new Error(
													'Template engine '.concat(
														n,
														' missing required library.'
													)
												)
										} else r = n
										if (!r) throw new Error('No template engine set')
										if (!r.compile)
											throw new Error('Invalid template engine set')
										return r.compile(e)
									}
								},
								{
									key: '_data',
									value: function (t, e, r) {
										if (3 !== arguments.length)
											return t.hasAttribute('data-jsoneditor-'.concat(e))
												? this.__data[
														t.getAttribute('data-jsoneditor-'.concat(e))
													]
												: null
										var n
										t.hasAttribute('data-jsoneditor-'.concat(e))
											? (n = t.getAttribute('data-jsoneditor-'.concat(e)))
											: ((n = this.uuid++),
												t.setAttribute('data-jsoneditor-'.concat(e), n)),
											(this.__data[n] = r)
									}
								},
								{
									key: 'registerEditor',
									value: function (t) {
										return (
											(this.editors = this.editors || {}),
											(this.editors[t.path] = t),
											this
										)
									}
								},
								{
									key: 'unregisterEditor',
									value: function (t) {
										return (
											(this.editors = this.editors || {}),
											(this.editors[t.path] = null),
											this
										)
									}
								},
								{
									key: 'getEditor',
									value: function (t) {
										if (this.editors) return this.editors[t]
									}
								},
								{
									key: 'watch',
									value: function (t, e) {
										return (
											(this.watchlist = this.watchlist || {}),
											(this.watchlist[t] = this.watchlist[t] || []),
											this.watchlist[t].push(e),
											this
										)
									}
								},
								{
									key: 'unwatch',
									value: function (t, e) {
										if (!this.watchlist || !this.watchlist[t]) return this
										if (!e) return (this.watchlist[t] = null), this
										for (var r = [], n = 0; n < this.watchlist[t].length; n++)
											this.watchlist[t][n] !== e && r.push(this.watchlist[t][n])
										return (this.watchlist[t] = r.length ? r : null), this
									}
								},
								{
									key: 'notifyWatchers',
									value: function (t) {
										if (!this.watchlist || !this.watchlist[t]) return this
										for (var e = 0; e < this.watchlist[t].length; e++)
											this.watchlist[t][e]()
									}
								},
								{
									key: 'isEnabled',
									value: function () {
										return !this.root || this.root.isEnabled()
									}
								},
								{
									key: 'enable',
									value: function () {
										this.root.enable()
									}
								},
								{
									key: 'disable',
									value: function () {
										this.root.disable()
									}
								},
								{
									key: 'setCopyClipboardContents',
									value: function (t) {
										this.copyClipboard = t
									}
								},
								{
									key: 'getCopyClipboardContents',
									value: function () {
										return this.copyClipboard
									}
								},
								{
									key: 'addNewStyleRules',
									value: function (t, e) {
										var r = document.querySelector('#theme-'.concat(t))
										r ||
											((r = document.createElement('style')).setAttribute(
												'id',
												'theme-'.concat(t)
											),
											r.appendChild(document.createTextNode('')),
											document.head.appendChild(r))
										for (
											var n = r.sheet ? r.sheet : r.styleSheet,
												i = this.element.nodeName.toLowerCase();
											n.cssRules.length > 0;

										)
											n.deleteRule(0)
										Object.keys(e).forEach(function (r) {
											var o =
												'default' === t
													? r
													: ''
															.concat(i, '[data-theme="')
															.concat(t, '"] ')
															.concat(r)
											n.insertRule
												? n.insertRule(
														o + ' {' + decodeURIComponent(e[r]) + '}',
														0
													)
												: n.addRule && n.addRule(o, decodeURIComponent(e[r]), 0)
										})
									}
								},
								{
									key: 'addNewStyleRulesToShadowRoot',
									value: function (t, e, r) {
										var n = this.element.nodeName.toLowerCase(),
											i = ''
										Object.keys(e).forEach(function (r) {
											var o =
												'default' === t
													? r
													: ''
															.concat(n, '[data-theme="')
															.concat(t, '"] ')
															.concat(r)
											i += o + ' {' + decodeURIComponent(e[r]) + '}\n'
										})
										var o,
											a = new CSSStyleSheet()
										a.replaceSync(i),
											(r.adoptedStyleSheets = [].concat(
												(function (t) {
													if (Array.isArray(t)) return Wa(t)
												})((o = r.adoptedStyleSheets)) ||
													(function (t) {
														if (
															('undefined' != typeof Symbol &&
																null != t[Symbol.iterator]) ||
															null != t['@@iterator']
														)
															return Array.from(t)
													})(o) ||
													(function (t, e) {
														if (t) {
															if ('string' == typeof t) return Wa(t, e)
															var r = Object.prototype.toString
																.call(t)
																.slice(8, -1)
															return (
																'Object' === r &&
																	t.constructor &&
																	(r = t.constructor.name),
																'Map' === r || 'Set' === r
																	? Array.from(t)
																	: 'Arguments' === r ||
																		  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
																				r
																		  )
																		? Wa(t, e)
																		: void 0
															)
														}
													})(o) ||
													(function () {
														throw new TypeError(
															'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
														)
													})(),
												[a]
											))
									}
								},
								{
									key: 'showValidationErrors',
									value: function (t) {
										var e = null != t ? t : this.validate()
										Object.values(this.editors).forEach(function (t) {
											t && ((t.is_dirty = !0), t.showValidationErrors(e))
										})
									}
								}
							]),
							r &&
								(function (t, e) {
									for (var r = 0; r < e.length; r++) {
										var n = e[r]
										;(n.enumerable = n.enumerable || !1),
											(n.configurable = !0),
											'value' in n && (n.writable = !0),
											Object.defineProperty(t, Qa(n.key), n)
									}
								})(e.prototype, r),
							Object.defineProperty(e, 'prototype', { writable: !1 }),
							e
						)
						var e, r, n, i
					})()
					;(Ka.defaults = Ci),
						(Ka.AbstractEditor = w),
						(Ka.AbstractTheme = Vo),
						(Ka.AbstractIconLib = Hi),
						Object.assign(Ka.defaults.themes, Ga),
						Object.assign(Ka.defaults.editors, _i),
						Object.assign(Ka.defaults.templates, Bi),
						Object.assign(Ka.defaults.iconlibs, Bo)
				})(),
				n
			)
		})())()),
	r = t.exports.JSONEditor,
	n = t.exports.__esModule
export { r as JSONEditor, n as __esModule, e as default }
//# sourceMappingURL=/sm/83145b10986ec338642139d902e6d8646a979900fe40727face5448c1e1b8f80.map
