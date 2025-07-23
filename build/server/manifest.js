const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.svg"]),
	mimeTypes: {".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.B-hQR7qe.js",app:"_app/immutable/entry/app.iLq__zz9.js",imports:["_app/immutable/entry/start.B-hQR7qe.js","_app/immutable/chunks/-1qDcZ9B.js","_app/immutable/chunks/8wWrA-yt.js","_app/immutable/chunks/yAHeAIGd.js","_app/immutable/chunks/DEqZlM8t.js","_app/immutable/entry/app.iLq__zz9.js","_app/immutable/chunks/yAHeAIGd.js","_app/immutable/chunks/8wWrA-yt.js","_app/immutable/chunks/DEqZlM8t.js","_app/immutable/chunks/DsnmJJEf.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-CRnO-aMY.js')),
			__memo(() => import('./chunks/1-eRsw41Jo.js')),
			__memo(() => import('./chunks/2-BsOLx7H0.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
