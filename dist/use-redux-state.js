function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var t=require("react-redux"),r=e(require("lodash.set")),n=e(require("lodash.get"));exports.asyncMiddleware=function(e){return function(t){return function(r){try{var u=t(r),a=n(r,"meta.async"),o=function(){if(a){var t=e.dispatch,u=e.getState;return Promise.resolve(a({payload:r.payload,set:function(e,r,n){t({type:n||"SET["+e+"]",payload:r,meta:{path:e}})},get:function(e){var t=u();return n(t,e)}})).then(function(){})}}();return Promise.resolve(o&&o.then?o.then(function(){return u}):u)}catch(e){return Promise.reject(e)}}}},exports.createReducer=function(e){return function(t,u){void 0===t&&(t=e);var a=n(u,"meta.path");return a?r(t,a,u.payload):t}},exports.useAsync=function(e){var r=e.type,n=e.effect,u=t.useDispatch();return function(e){return u({type:r,payload:e,meta:{async:n}})}},exports.useRedux=function(e,r){var u=t.useSelector(function(t){return n(t,e)}),a=t.useDispatch(),o=r||"SET["+e+"]";return[u,function(t){return a({type:o,payload:t,meta:{path:e}})}]},exports.useReduxSetter=function(e,r){var n=t.useDispatch(),u=r||"SET["+e+"]";return function(t){return n({type:u,payload:t,meta:{path:e}})}},exports.useReduxValue=function(e){return t.useSelector(function(t){return n(t,e)})};
//# sourceMappingURL=use-redux-state.js.map