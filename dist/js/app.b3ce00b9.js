(function (t) { function e(e) { for (var a, r, c = e[0], s = e[1], l = e[2], v = 0, p = []; v < c.length; v++)r = c[v], n[r] && p.push(n[r][0]), n[r] = 0; for (a in s)Object.prototype.hasOwnProperty.call(s, a) && (t[a] = s[a]); u && u(e); while (p.length)p.shift()(); return i.push(...l || []), o(); } function o() { for (var t, e = 0; e < i.length; e++) { for (var o = i[e], a = !0, c = 1; c < o.length; c++) { const s = o[c]; n[s] !== 0 && (a = !1); }a && (i.splice(e--, 1), t = r(r.s = o[0])); } return t; } const a = {}; var n = { app: 0 }; var i = []; function r(e) { if (a[e]) return a[e].exports; const o = a[e] = { i: e, l: !1, exports: {} }; return t[e].call(o.exports, o, o.exports, r), o.l = !0, o.exports; }r.m = t, r.c = a, r.d = function (t, e, o) { r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o }); }, r.r = function (t) { typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(t, '__esModule', { value: !0 }); }, r.t = function (t, e) { if (1 & e && (t = r(t)), 8 & e) return t; if (4 & e && typeof t === 'object' && t && t.__esModule) return t; const o = Object.create(null); if (r.r(o), Object.defineProperty(o, 'default', { enumerable: !0, value: t }), 2 & e && typeof t !== 'string') for (const a in t)r.d(o, a, (e => t[e]).bind(null, a)); return o; }, r.n = function (t) { const e = t && t.__esModule ? function () { return t.default; } : function () { return t; }; return r.d(e, 'a', e), e; }, r.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e); }, r.p = '/'; let c = window.webpackJsonp = window.webpackJsonp || []; const s = c.push.bind(c); c.push = e, c = c.slice(); for (let l = 0; l < c.length; l++)e(c[l]); var u = s; i.push([0, 'chunk-vendors']), o(); }({
  0(t, e, o) { t.exports = o('56d7'); },
  '3b84': function (t, e, o) { t.exports = `${o.p}img/marker.5a8c57f4.png`; },
  '56d7': function (t, e, o) {
    o.r(e); o('cadf'), o('551c'), o('097d'); const a = o('2b0e'); const n = o('bb71'); o('da64'); a.a.use(n.a, { iconfont: 'md' }); const i = o('1cf8'); const r = function () { const t = this; const e = t.$createElement; const o = t._self._c || e; return o('v-app', [o('v-toolbar', { attrs: { color: 'white', app: '' } }, [o('v-toolbar-title', { staticClass: 'headline text-uppercase' }, [o('span', [t._v('Sportswhere')])])], 1), o('v-content', [o('router-view'), o('v-bottom-nav', { attrs: { active: t.bottomNav, value: !0, fixed: '' }, on: { 'update:active': function (e) { t.bottomNav = e; } } }, [o('v-btn', { attrs: { color: 'teal', flat: '', value: 'sports' }, on: { click(e) { t.$router.push('/sports'); } } }, [o('span', [t._v('Sports')]), o('v-icon', [t._v('accessibility_new')])], 1), o('v-btn', { attrs: { color: 'teal', flat: '', value: 'home' }, on: { click(e) { t.$router.push('/'); } } }, [o('span', [t._v('Accueil')]), o('v-icon', [t._v('home')])], 1), o('v-btn', { attrs: { color: 'teal', flat: '', value: 'map' }, on: { click(e) { t.$router.push('map'); } } }, [o('span', [t._v('Carte')]), o('v-icon', [t._v('map')])], 1)], 1)], 1)], 1); }; const c = []; const s = { name: 'App', data() { return { bottomNav: 'home' }; } }; const l = s; const u = o('2877'); const v = o('6544'); const p = o.n(v); const f = o('7496'); const d = o('887a'); const m = o('8336'); const h = o('549c'); const g = o('132d'); const b = o('71d9'); const y = o('2a7f'); const _ = Object(u.a)(l, r, c, !1, null, null, null); _.options.__file = 'App.vue'; const x = _.exports; p()(_, {
      VApp: f.a, VBottomNav: d.a, VBtn: m.a, VContent: h.a, VIcon: g.a, VToolbar: b.a, VToolbarTitle: y.a,
    }); const w = o('8c4f'); const V = function () { const t = this; const e = t.$createElement; const o = t._self._c || e; return o('v-layout', { attrs: { 'justify-center': '' } }, [o('v-flex', { attrs: { xs12: '', sm6: '' } }, [o('v-card', [o('v-container', { attrs: { fluid: '', 'grid-list-md': '' } }, [o('v-layout', { attrs: { row: '', wrap: '' } }, t._l(t.cards, (e) => { return o('v-flex', t._b({ key: e.title }, 'v-flex', (a = {}, a[`xs${e.flex}`] = !0, a), !1), [o('v-card', [o('v-img', { attrs: { src: e.src, height: '200px' } }, [o('v-container', { attrs: { 'fill-height': '', fluid: '', 'pa-2': '' } }, [o('v-layout', { attrs: { 'fill-height': '' } }, [o('v-flex', { attrs: { xs12: '', 'align-end': '', flexbox: '' } }, [o('span', { staticClass: 'headline white--text', domProps: { textContent: t._s(e.title) } })])], 1)], 1)], 1), o('v-card-actions', [o('v-spacer'), o('v-btn', { attrs: { icon: '' } }, [o('v-icon', [t._v('map')])], 1)], 1)], 1)], 1); let a; }))], 1)], 1)], 1)], 1); }; const j = []; const C = o('be94'); const S = o('2f62'); const O = { data() { return { cards: [{ title: 'Judo', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 }, { title: 'Foot', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 }, { title: 'Rugby', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 }] }; }, methods: Object(C.a)({}, Object(S.b)(['setActivityLocalization', 'setActivityDescription']), { onSelection(t) { this.setActivityLocalization(t.localization), this.setActivityDescription(t.description); } }) }; const A = O; const z = o('b0af'); const k = o('99d9'); const P = o('a523'); const L = o('0e8f'); const D = o('adda'); const T = o('a722'); const $ = o('9910'); const N = Object(u.a)(A, V, j, !1, null, null, null); N.options.__file = 'Home.vue'; const E = N.exports; p()(N, {
      VBtn: m.a, VCard: z.a, VCardActions: k.a, VContainer: P.a, VFlex: L.a, VIcon: g.a, VImg: D.a, VLayout: T.a, VSpacer: $.a,
    }); const F = function () { const t = this; const e = t.$createElement; const a = t._self._c || e; return a('v-card', { attrs: { padding: '' } }, [a('v-card-title', { attrs: { 'primary-title': '' } }, [a('div', [a('h3', { staticClass: 'headline mb-0' }, [t._v('Kangaroo Valley Safari')]), a('div', [t._v(t._s(t.activityDescription))])])]), a('v-container', [a('vl-map', { staticStyle: { height: '50vh' }, attrs: { 'load-tiles-while-animating': !0, 'load-tiles-while-interacting': !0, 'data-projection': 'EPSG:4326' } }, [a('vl-view', { attrs: { zoom: t.zoom, center: t.geolocPosition, rotation: t.rotation }, on: { 'update:zoom': function (e) { t.zoom = e; }, 'update:center': function (e) { t.geolocPosition = e; }, 'update:rotation': function (e) { t.rotation = e; } } }), a('vl-geoloc', { on: { 'update:position': function (e) { t.geolocPosition = e; } }, scopedSlots: t._u([{ key: 'default', fn(e) { return [e.position ? a('vl-feature', { attrs: { id: 'position-feature' } }, [a('vl-geom-point', { attrs: { coordinates: e.position } }), a('vl-style-box', [a('vl-style-icon', { attrs: { src: o('3b84'), scale: 0.2, anchor: [0.5, 1] } })], 1)], 1) : t._e()]; } }]) }), a('vl-layer-tile', { attrs: { id: 'osm' } }, [a('vl-source-osm')], 1)], 1)], 1)], 1); }; const I = []; const M = {
      data() {
        return {
          zoom: 5, center: this.activityLocalization, rotation: 0, geolocPosition: this.activityLocalization,
        };
      },
      computed: Object(C.a)({}, Object(S.c)(['activityLocalization', 'activityDescription'])),
    }; const B = M; const J = o('12b2'); const q = Object(u.a)(B, F, I, !1, null, null, null); q.options.__file = 'Map.vue'; const G = q.exports; p()(q, { VCard: z.a, VCardTitle: J.a, VContainer: P.a }); const H = function () { const t = this; const e = t.$createElement; const o = t._self._c || e; return o('div', { staticClass: 'grey lighten-3', staticStyle: { 'max-width': '400px', margin: 'auto' }, attrs: { id: 'e3' } }, [o('v-card', [o('v-container', { attrs: { fluid: '', 'grid-list-lg': '' } }, [o('v-layout', { attrs: { row: '', wrap: '' } }, [o('v-flex', { attrs: { xs12: '' } }, [o('v-card', { staticClass: 'white--text', attrs: { color: 'teal' } }, [o('v-layout', [o('v-flex', { attrs: { xs5: '' } }, [o('v-img', { attrs: { src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg', height: '125px', contain: '' } })], 1), o('v-flex', { attrs: { xs7: '' } }, [o('v-card-title', { attrs: { 'primary-title': '' } }, [o('div', [o('div', { staticClass: 'headline' }, [t._v('Supermodel')]), o('div', [t._v('Foster the People')]), o('div', [t._v('(2014)')])])])], 1)], 1), o('v-divider', { attrs: { light: '' } }), o('v-card-actions', { staticClass: 'pa-3' }, [o('v-spacer'), o('v-icon', [t._v('star_border')])], 1)], 1)], 1)], 1)], 1)], 1)], 1); }; const K = []; const R = o('bc3a'); const Q = o.n(R); function U() { return Q.a.get('http://ndlinfo.herokuapp.com/users/1'); } const W = { created() { U().then(t => console.log(t)); } }; const X = W; const Y = o('ce7e6'); const Z = Object(u.a)(X, H, K, !1, null, null, null); Z.options.__file = 'Sports.vue'; const tt = Z.exports; p()(Z, {
      VCard: z.a, VCardActions: k.a, VCardTitle: J.a, VContainer: P.a, VDivider: Y.a, VFlex: L.a, VIcon: g.a, VImg: D.a, VLayout: T.a, VSpacer: $.a,
    }), a.a.use(w.a); const et = new w.a({ routes: [{ path: '/', name: 'home', component: E }, { path: '/sports', name: 'sports', component: tt }, { path: '/map', name: 'map', component: G }] }); a.a.use(S.a); const ot = new S.a.Store({ state: { activityLocalization: null, activityDescription: null }, mutations: { setActivityLocalization(t, e) { t.activityLocalization = e; }, setActivityDescription(t, e) { t.activityDescription = e; } }, actions: { activityLocalization(t, e) { const o = t.commit; o('setActivityLocalization', e); }, activityDescription(t, e) { const o = t.commit; o('setActivityDescription', e); } } }); const at = o('9483'); Object(at.a)(''.concat('/', 'service-worker.js'), {
      ready() { console.log('App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB'); }, registered() { console.log('Service worker has been registered.'); }, cached() { console.log('Content has been cached for offline use.'); }, updatefound() { console.log('New content is downloading.'); }, updated() { console.log('New content is available; please refresh.'); }, offline() { console.log('No internet connection found. App is running in offline mode.'); }, error(t) { console.error('Error during service worker registration:', t); },
    }); o('2b69'); a.a.use(i.a), a.a.config.productionTip = !1, new a.a({ router: et, store: ot, render(t) { return t(x); } }).$mount('#app');
  },
}));
// # sourceMappingURL=app.b3ce00b9.js.map