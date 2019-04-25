!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t=t||self).Yox=n()}(this,function(){"use strict";var t=!0,n=!1,e=null,r=void 0,o="function",i="undefined"!=typeof window?window:r,u="undefined"!=typeof document?document:r;var s={},c=[],f="";function a(t){return t!==r}var p=Object.prototype.toString;function h(t,n){return"numeric"===n?b(t):p.call(t).toLowerCase()==="[object "+n+"]"}function v(t){return typeof t===o}function d(t){return Array.isArray(t)}function l(t){return t!==e&&"object"==typeof t}function y(t){return"string"==typeof t}function m(t){return"number"==typeof t}function g(t){return"boolean"==typeof t}function b(t){return m(t)||y(t)&&!isNaN(parseFloat(t))&&isFinite(t)}var x=Object.freeze({is:h,func:v,array:d,object:l,string:y,number:m,boolean:g,numeric:b});function w(t,n,e){if(v(t))return d(e)?t.apply(n,e):a(n)?t.call(n,e):a(e)?t(e):t()}var $=function(){function n(t,n){this.type=t,this.originalEvent=n}return n.prototype.preventDefault=function(){if(!this.isPrevented){var n=this.originalEvent;n&&n.preventDefault(),this.isPrevented=t}return this},n.prototype.stopPropagation=function(){if(!this.isStoped){var n=this.originalEvent;n&&n.stopPropagation(),this.isStoped=t}return this},n.prototype.prevent=function(){return this.preventDefault()},n.prototype.stop=function(){return this.stopPropagation()},n}();function k(t,e,r){var o=t.length;if(o)if(r)for(var i=o-1;i>=0&&e(t[i],i,t)!==n;i--);else for(i=0;i<o&&e(t[i],i,t)!==n;i++);}function C(t,n){return t.join(n)}function T(t,n){t[t.length]=n}function E(t,n){t.unshift(n)}function O(t,n,e){d(n)?k(n,function(n){e(t,n)}):e(t,n)}function j(t,n){O(t,n,T)}function A(t,n){O(t,n,E)}function P(t,n,e){var r={};return k(t,function(t){r[n?t[n]:t]=e||t}),r}function S(t,e,r){var o=-1;return k(t,function(t,i){if(r===n?t==e:t===e)return o=i,n}),o}function q(t,n,e){return S(t,n,e)>=0}function z(e,r,o){var i=0;return k(e,function(t,u){(o===n?t==r:t===r)&&(e.splice(u,1),i++)},t),i}function D(t){return!d(t)||!t.length}var I=Object.freeze({each:k,join:C,push:j,unshift:A,toArray:function(t){return d(t)?t:w([].slice,t)},toObject:P,indexOf:S,has:q,last:function(t){var n=t.length;if(n>0)return t[n-1]},pop:function(t){return t.pop()},remove:z,falsy:D}),M=/-([a-z])/gi,Y=/\B([A-Z])/g,K={},L={};function U(t,n,e){return m(e)?n===e?f:t.slice(n,e):t.slice(n)}function N(t,n,e){return t.indexOf(n,a(e)?e:0)}function B(t,n,e){return t.lastIndexOf(n,a(e)?e:t.length)}function F(t,n){return N(t,n)>=0}function W(t,n){return 0===N(t,n)}function G(t,n){return t.charCodeAt(n||0)}function J(t){return!y(t)||!t.length}var R=Object.freeze({camelize:function(t){return K[t]||(K[t]=t.replace(M,function(t,n){return n.toUpperCase()})),K[t]},hyphenate:function(t){return L[t]||(L[t]=t.replace(Y,function(t,n){return"-"+n.toLowerCase()})),L[t]},trim:function(t){return J(t)?f:t.trim()},slice:U,indexOf:N,lastIndexOf:B,has:F,startsWith:W,endsWith:function(t,n){var e=t.length-n.length;return e>=0&&B(t,n)===e},charAt:function(t,n){return t.charAt(n||0)},codeAt:G,falsy:J});function Z(t,n){return void 0===n&&(n=f),t!=e&&t.toString?t.toString():n}var H=".",Q={};function V(t,n){return t===n?n.length:W(t,n+=H)?n.length:-1}function X(e,r){if(J(e))r(e,t);else for(var o=0,i=0;t;){if(!((i=N(e,H,o))>0)){r(U(e,o),t);break}if(r(U(e,o,i),n)===n)break;o=i+1}}function _(t){return y(t)?t:m(t)?Z(t):f}function tt(t,n){var e=Q[n];e||(e=n.replace(/\./g,"\\.").replace(/\*\*/g,"([.\\w]+?)").replace(/\*/g,"(\\w+)"),e=Q[n]=new RegExp("^"+e+"$"));var r=t.match(e);if(r)return r[1]}function nt(t){return Object.keys(t)}function et(t,n){return t.length-n.length}function rt(t,n){return n.length-t.length}function ot(t,n){return nt(t).sort(n?rt:et)}function it(t,e){for(var r in t)if(e(t[r],r)===n)break}function ut(t,n){return a(t[n])||t.hasOwnProperty(n)}function st(t){it(t,function(n,e){delete t[e]})}function ct(t){for(var n=[],e=1;e<arguments.length;e++)n[e-1]=arguments[e];return k(n,function(n){it(n,function(n,e){t[e]=n})}),t}function ft(t,n){var e=t;return d(t)?n?(e=[],k(t,function(t,r){e[r]=ft(t,n)})):e=t.slice():l(t)&&(e={},it(t,function(t,r){e[r]=n?ft(t,n):t})),e}var at={};function pt(t,o){return X(o,function(o,i){if(t==e)return t=r,n;var u=t[o],s=a(u)||t.hasOwnProperty(o);u&&v(u.get)&&(u=u.get()),i?s?(at.value=u,t=at):t=r:t=u}),t}function ht(t,e,r,o){X(e,function(e,i){if(i)t[e]=r;else if(t[e])t=t[e];else{if(!o)return n;t=t[e]={}}})}var vt=Object.freeze({keys:nt,falsy:function(t){return!l(t)||d(t)||!nt(t).length},sort:ot,each:it,has:ut,clear:st,extend:ct,copy:ft,get:pt,set:ht}),dt="undefined"!=typeof console?console:e,lt=/yox/.test(Z(function(){}));function yt(){if(i){var t=i.DEBUG;if(g(t))return t}return lt}function mt(t){dt&&yt()&&dt.warn("[Yox warn]: "+t)}var gt=Object.freeze({log:function(t){dt&&yt()&&dt.log("[Yox log]: "+t)},warn:mt,error:function(t){dt&&dt.error("[Yox error]: "+t)},fatal:function(t){throw new Error("[Yox fatal]: "+t)}}),bt=function(){function e(t){this.ns=t||n,this.listeners={}}return e.prototype.fire=function(e,r,o){var i,u,s;e instanceof $?(i=e,u=e.type,s=l(r)?[i,r]:i):(u=e,r&&(s=r));var c=this,f=xt(c.ns,u),a=f.name,p=f.ns,h=c.listeners[a],v=t;return h&&k(ft(h),function(t,e,f){if((o?o(t,r):$t(p,t))&&q(f,t)){i&&(i.listener=t.fn);var a=w(t.fn,t.ctx,s);return t.num=t.num?t.num+1:1,t.num===t.max&&c.off(u,t),i&&(a===n?i.prevent().stop():i.isStoped&&(a=n)),a===n?v=n:void 0}}),v},e.prototype.has=function(e,r){var o=this.listeners,i=xt(this.ns,e),u=i.name,s=i.ns,c=t,f=wt(r),a=function(t){return k(t,function(t){if(f(t)&&$t(s,t))return c=n}),c};return u?o[u]&&a(o[u]):s&&it(o,a),!c},e.prototype.on=function(t,n,e){var r=this,o=r.listeners,i=function(t,n){if(t){var i=v(t)?{fn:t}:t;if(l(i)&&v(i.fn)){e&&ct(i,e);var u=xt(r.ns,n),s=u.name,c=u.ns;return i.ns=c,void j(o[s]||(o[s]=[]),i)}}};y(t)?i(n,t):it(t,i)},e.prototype.off=function(n,e){var r=this.listeners;if(n){var o=xt(this.ns,n),i=o.name,u=o.ns,s=wt(e),c=function(n,e){k(n,function(t,n,e){s(t)&&$t(u,t)&&e.splice(n,1)},t),n.length||delete r[e]};i?r[i]&&c(r[i],i):u&&it(r,c)}else this.listeners={}},e}();function xt(t,n){var e={name:n,ns:f};if(t){var r=N(n,".");r>=0&&(e.name=U(n,0,r),e.ns=U(n,r+1))}return e}function wt(n){return l(n)?function(t){return n===t}:v(n)?function(t){return n===t.fn}:function(n){return t}}function $t(t,n){return!t.length||t===n.ns}function kt(t){return v(t)&&/native code/.test(Z(t))}typeof setImmediate===o&&kt(setImmediate)&&setImmediate;var Ct,Tt=typeof MessageChannel===o&&kt(MessageChannel)?function(t){var n=new MessageChannel;n.port1.onmessage=t,n.port2.postMessage(1)}:setTimeout,Et=function(){function t(){this.nextTasks=[]}return t.shared=function(){return Ct||(Ct=new t),Ct},t.prototype.append=function(t){j(this.nextTasks,t),this.start()},t.prototype.prepend=function(t){A(this.nextTasks,t),this.start()},t.prototype.start=function(){var t=this;1===t.nextTasks.length&&Tt(function(){t.run()})},t.prototype.clear=function(){this.nextTasks.length=0},t.prototype.run=function(){var t=this.nextTasks;t.length&&(this.nextTasks=[],k(t,w))},t}(),Ot="beforeCreate",jt="afterCreate";function At(t,n){return void 0===n&&(n=0),b(t)?+t:n}Pt=f,JSON.stringify(Pt),C(["c","d","e","f","g","a","h","i","b"],",");var Pt,St={sync:t},qt={sync:n},zt=function(){function n(n,e,r,o,i,u,s){var c=this;c.keypath=n,c.sync=e,c.cache=r,c.deps=[],c.context=i.context,c.observer=i,c.getter=u,c.setter=s,c.unique={},c.callback=function(e,r,o){var u=c.value,s=c.get(t);s!==u&&i.diff(n,s,u)},(c.fixed=!D(o))&&(k(o,function(t){c.add(t)}),c.bind())}return n.build=function(e,r,o){var i,u,s=t,f=t,a=c;if(v(o)?i=o:l(o)&&(g(o.cache)&&(s=o.cache),g(o.sync)&&(f=o.sync),d(o.deps)&&(a=o.deps),v(o.get)&&(i=o.get),v(o.set)&&(u=o.set)),i)return new n(e,f,s,a,r,i,u)},n.prototype.get=function(t){var e=this.getter,r=this.context;if(this.cache){if(t||!ut(this,"value"))if(this.fixed)this.value=w(e,r);else{this.unbind();var o=n.current;n.current=this,this.value=w(e,r),this.bind(),n.current=o}}else this.value=w(e,r);return this.value},n.prototype.set=function(t){var n=this.setter,e=this.context;n&&n.call(e,t)},n.prototype.add=function(n){this.unique[n]=t},n.prototype.bind=function(){var t=this,n=t.unique,e=t.deps,r=t.observer,o=t.callback,i=t.sync;it(n,function(t,n){j(e,n),r.watch(n,o,i?St:qt)}),this.unique={}},n.prototype.unbind=function(){var n=this.deps,e=this.observer,r=this.callback;k(n,function(t){e.unwatch(t,r)},t),n.length=0},n}();function Dt(t,e){var r;return k(t,function(t){var o=V(e,t);if(o>=0)return r={name:t,prop:U(e,o)},n}),r}function It(t,n){if(t==e||n===f)return t;var r=pt(t,n);return r?r.value:void 0}function Mt(n,e,o,i,u){var c=function(t,e,r){if(e!==r){var o=(c=t,s=_(s=n),c=_(c),s===f?c:c!==f?s+H+c:s);k(i,function(t){a(tt(o,t))&&u(t,o,e,r)}),Mt(o,e,r,i,u)}var s,c};(function(n,e,o){var i=y(n),u=y(e);if(i||u)return o("length",i?n.length:r,u?e.length:r),t})(e,o,c)||function(n,e,o){var i=d(n),u=d(e);if(i||u){var s=i?n.length:r,c=u?e.length:r;o("length",s,c);for(var f=0,a=Math.max(s||0,c||0);f<a;f++)o(f,n?n[f]:r,e?e[f]:r);return t}}(e,o,c)||function(t,n,e){var r=l(t),o=l(n);(r||o)&&(t=r?t:s,n=o?n:s,r&&it(t,function(t,r){t!==n[r]&&e(r,t,n[r])}),o&&it(n,function(n,r){n!==t[r]&&e(r,t[r],n)}))}(e,o,c)}function Yt(t,n,e,r,o,i){var u;it(r,function(r,s){if(function(t){return F(t,"*")}(s))a(tt(t,s))?i(s,t,n,e):o&&(u?j(u,s):u=[s]);else{var c=V(s,t);if(c>=0){var f=U(s,c),p=It(n,f),h=It(e,f);p!==h&&i(s,s,p,h)}}}),u&&Mt(t,n,e,u,i)}function Kt(t,n){if(t.count&&n)return t.count--,n[0]!==n[1]}function Lt(n){return n===t?{immediate:t}:l(n)?ft(n):{}}var Ut=function(){function e(t,n){this.data=t||{},this.context=n||this,this.nextTask=new Et,this.syncEmitter=new bt,this.asyncEmitter=new bt,this.asyncChanges={}}return e.prototype.get=function(t,n,e){var r,o,i=zt.current,u=this.data,s=this.computed,c=this.reversedComputedKeys;if(t===f)return u;if(i&&!e&&i.add(t),s){if(o=s[t])return o.get();if(c){var a=Dt(c,t);a&&a.prop&&(r=pt(s[a.name].get(),a.prop))}}return r||(r=pt(u,t)),r?r.value:n},e.prototype.set=function(t,n){var e=this,r=e.data,o=e.computed,i=e.reversedComputedKeys,u=function(t,n){var u=e.get(n);if(t!==u){var s;if(o&&((s=o[n])&&s.set(t),i)){var c=Dt(i,n);if(c&&c.prop&&(s=o[c.name])){var f=s.get();(l(f)||d(f))&&ht(f,c.prop,t)}}s||ht(r,n,t),e.diff(n,t,u)}};y(t)?u(n,t):l(t)&&it(t,u)},e.prototype.diff=function(n,e,o){var i=this,u=i.syncEmitter,s=i.asyncEmitter,c=i.asyncChanges,f=36!==G(n);Yt(n,e,o,u.listeners,f,function(t,n,e,r){u.fire(t,[e,r,n])}),Yt(n,e,o,s.listeners,f,function(n,e,o,u){k(s.listeners[n],function(t){t.count++});var f=(c[e]||(c[e]={value:u,list:[]})).list;q(f,n)||j(f,n),i.pending||(i.pending=t,i.nextTask.append(function(){i.pending&&(i.pending=r,i.diffAsync())}))})},e.prototype.diffAsync=function(){var t=this,n=t.asyncEmitter,e=t.asyncChanges;t.asyncChanges={},it(e,function(e,r){var o=[t.get(r),e.value,r];k(e.list,function(t){n.fire(t,o,Kt)})})},e.prototype.addComputed=function(n,e){var r=zt.build(n,this,e);if(r)return this.computed||(this.computed={}),this.computed[n]=r,this.reversedComputedKeys=ot(this.computed,t),r},e.prototype.removeComputed=function(n){var e=this.computed;e&&ut(e,n)&&(delete e[n],this.reversedComputedKeys=ot(e,t))},e.prototype.watch=function(t,n,e){var o=this,i=o.context,u=o.syncEmitter,s=o.asyncEmitter,c=function(t,n,e){l(n)&&(g(n.immediate)&&(e.immediate=n.immediate),g(n.sync)&&(e.sync=n.sync),g(n.once)&&(e.once=n.once),v(n.watcher)&&(n=n.watcher));var c=e.sync?u:s;if(v(n)){var f={fn:n,ctx:i,count:0};e.once&&(f.max=1),c.on(t,f)}e.immediate&&w(n,i,[o.get(t),r,t])};y(t)?(v(n)||l(n))&&c(t,n,Lt(e)):it(t,function(t,n){c(n,t,{})})},e.prototype.unwatch=function(t,n){this.syncEmitter.off(t,n),this.asyncEmitter.off(t,n)},e.prototype.toggle=function(t){var n=!this.get(t);return this.set(t,n),n},e.prototype.increase=function(t,n,e){var r=At(this.get(t),0)+(n||1);if(!m(e)||r<=e)return this.set(t,r),r},e.prototype.decrease=function(t,n,e){var r=At(this.get(t),0)-(n||1);if(!m(e)||r>=e)return this.set(t,r),r},e.prototype.insert=function(e,r,o){var i=this.get(e),u=(i=d(i)?ft(i):[]).length;if(o===t||o===u)i.push(r);else if(o===n||0===o)i.unshift(r);else{if(!(o>0&&o<u))return;i.splice(o,0,r)}return this.set(e,i),t},e.prototype.append=function(n,e){return this.insert(n,e,t)},e.prototype.prepend=function(t,e){return this.insert(t,e,n)},e.prototype.removeAt=function(n,e){var r=this.get(n);if(d(r)&&e>=0&&e<r.length)return(r=ft(r)).splice(e,1),this.set(n,r),t},e.prototype.remove=function(n,e){var r=this.get(n);if(d(r)&&z(r=ft(r),e))return this.set(n,r),t},e.prototype.copy=function(t,n){return ft(t,n)},e.prototype.destroy=function(){this.syncEmitter.off(),this.asyncEmitter.off(),this.nextTask.clear(),st(this)},e}(),Nt=u,Bt="textContent";Nt&&(function(t){return t===r}(Nt.body[Bt])&&(Bt="innerText"),Nt.addEventListener,Nt.body.classList,Nt.querySelector);P(["click","tap"]);return function(){function e(n){var e=this;l(n)||(n=s),e.$options=n,w(n[Ot],e,n);n.el;var r=n.data,o=n.props,i=n.model,u=(n.parent,n.replace,n.computed),c=(n.template,n.transitions,n.components,n.directives,n.partials,n.filters,n.slots),f=n.events,a=n.methods,p=n.watchers,h=n.extensions;h&&ct(e,h),i&&(e.$model=i);var d=o?e.checkPropTypes(o):{};c&&ct(d,c),o&&l(r)&&mt('"data" option expected to be a function.');var y=e.$observer=new Ut(d,e);u&&it(u,function(t,n){y.addComputed(n,t)});var m=v(r)?w(r,e,n):r;l(m)&&it(m,function(t,n){ut(d,n)?mt('"'+n+'" is already defined as a prop. Use prop default value instead.'):d[n]=t}),e.$emitter=new bt(t),a&&it(a,function(t,n){e[n]=t}),w(n[jt],e),f&&e.on(f),p&&y.nextTask.prepend(function(){e.$observer&&e.watch(p)})}return e.use=function(t){t.install(e)},e.nextTick=function(t){Et.shared().append(t)},e.compile=function(t,n){},e.directive=function(t,n){},e.transition=function(t,n){},e.component=function(t,n){},e.partial=function(t,n){},e.filter=function(t,n){},e.checkPropTypes=function(e,r){var i=ft(e);return it(r,function(r,u){var s,c=r.type,f=r.value,p=r.required,d=e[u];(v(p)&&(p=p(e)),a(d))?c?(J(c)?D(c)||k(c,function(e){if(h(d,e))return s=t,n}):s=h(d,c),s!==t&&mt('The prop "'+u+'" type is not matched.')):mt('The prop "'+u+'" in propTypes has no type.'):p?mt('The prop "'+u+'" is marked as required, but its value is not found.'):a(f)&&(i[u]=c===o?f:v(f)?f(e):f)}),i},e.prototype.addComputed=function(t,n){return this.$observer.addComputed(t,n)},e.prototype.removeComputed=function(t){this.$observer.removeComputed(t)},e.prototype.get=function(t,n,e){return this.$observer.get(t,n,e)},e.prototype.set=function(t,n){var e=this.$observer;e&&e.set(t,n)},e.prototype.on=function(t,n){return this.$emitter.on(t,n,{ctx:this}),this},e.prototype.once=function(t,n){return this.$emitter.on(t,n,{ctx:this,max:1}),this},e.prototype.off=function(t,n){return this.$emitter.off(t,n),this},e.prototype.fire=function(n,e,r){var o,i,u=n instanceof $?n:new $(n);return u.target||(u.target=this),l(e)?o=e:e===t&&(r=t),(i=this.$emitter.fire(u,o))&&(r?this.$children&&k(this.$children,function(n){return i=n.fire(u,e,t)}):this.$parent&&(i=this.$parent.fire(u,e))),i},e.prototype.watch=function(t,n,e){return this.$observer.watch(t,n,e),this},e.prototype.watchOnce=function(n,e,r){var o=Lt(r);return o.once=t,this.$observer.watch(n,e,o),this},e.prototype.unwatch=function(t,n){return this.$observer.unwatch(t,n),this},e.prototype.directive=function(t,n){},e.prototype.transition=function(t,n){},e.prototype.component=function(t,n){},e.prototype.partial=function(t,n){},e.prototype.filter=function(t,n){},e.prototype.forceUpdate=function(){},e.prototype.render=function(){},e.prototype.update=function(t,n){},e.prototype.checkPropTypes=function(t){var n=this.$options.propTypes;return n?e.checkPropTypes(t,n):t},e.prototype.create=function(t,n,e){},e.prototype.destroy=function(){var t=this.$options,n=this.$emitter,e=this.$observer;w(t.beforeDestroy,this),n.off(),e.destroy(),st(this),w(t.afterDestroy,this)},e.prototype.nextTick=function(t,n){var e=this.$observer.nextTask;n?e.prepend(t):e.append(t)},e.prototype.toggle=function(t){return this.$observer.toggle(t)},e.prototype.increase=function(t,n,e){return this.$observer.increase(t,n,e)},e.prototype.decrease=function(t,n,e){return this.$observer.decrease(t,n,e)},e.prototype.insert=function(t,n,e){return this.$observer.insert(t,n,e)},e.prototype.append=function(t,n){return this.$observer.append(t,n)},e.prototype.prepend=function(t,n){return this.$observer.prepend(t,n)},e.prototype.removeAt=function(t,n){return this.$observer.removeAt(t,n)},e.prototype.remove=function(t,n){return this.$observer.remove(t,n)},e.prototype.copy=function(t,n){return this.$observer.copy(t,n)},e.version="1.0.0-alpha",e.is=x,e.array=I,e.object=vt,e.string=R,e.logger=gt,e.Event=$,e.Emitter=bt,e}()});
//# sourceMappingURL=yox.pure.js.map
