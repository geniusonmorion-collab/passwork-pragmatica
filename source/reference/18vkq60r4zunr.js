;
!(function() {
  try {
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
    n && ((e._debugIds || (e._debugIds = {}))[n] = "449f1b7e-7a39-15f7-0709-1ea68dbaec86");
  } catch (e2) {
  }
})();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 317136, 935247, (e) => {
  "use strict";
  var t = e.i(541130);
  try {
    var i = "u" > typeof window ? window : e.g;
    i._sentryModuleMetadata = i._sentryModuleMetadata || {}, i._sentryModuleMetadata[new i.Error().stack] = Object.assign({}, i._sentryModuleMetadata[new i.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function r(e2, t2) {
    if (e2 instanceof Promise) throw Error(t2);
  }
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function a(e2) {
    let i2 = e2.runtimeEnvStrict ?? e2.runtimeEnv ?? t.default.env;
    if (e2.emptyStringAsUndefined) for (let [e3, t2] of Object.entries(i2)) "" === t2 && delete i2[e3];
    if (e2.skipValidation) {
      if (e2.extends) for (let t2 of e2.extends) t2.skipValidation = true;
      return i2;
    }
    let n2 = "object" == typeof e2.client ? e2.client : {}, a2 = "object" == typeof e2.server ? e2.server : {}, o2 = "object" == typeof e2.shared ? e2.shared : {}, s = e2.isServer ?? ("u" < typeof window || "Deno" in window), u = s ? { ...a2, ...o2, ...n2 } : { ...n2, ...o2 }, l = e2.createFinalSchema?.(u, s)?.["~standard"].validate(i2) ?? (function(e3, t2) {
      let i3 = {}, n3 = [];
      for (let a3 in e3) {
        let o3 = e3[a3]["~standard"].validate(t2[a3]);
        if (r(o3, `Validation must be synchronous, but ${a3} returned a Promise.`), o3.issues) {
          n3.push(...o3.issues.map((e4) => ({ ...e4, message: e4.message, path: [a3, ...e4.path ?? []] })));
          continue;
        }
        i3[a3] = o3.value;
      }
      return n3.length ? { issues: n3 } : { value: i3 };
    })(u, i2);
    r(l, "Validation must be synchronous");
    let d = e2.onValidationError ?? ((e3) => {
      throw console.error("\u274C Invalid environment variables:", e3), Error("Invalid environment variables");
    }), c = e2.onInvalidAccess ?? (() => {
      throw Error("\u274C Attempted to access a server-side environment variable on the client");
    });
    return l.issues ? d(l.issues) : new Proxy(Object.assign((e2.extends ?? []).reduce((e3, t2) => Object.assign(e3, t2), {}), l.value), { get(t2, i3) {
      if ("string" == typeof i3 && "__esModule" !== i3 && "$$typeof" !== i3) return s || e2.clientPrefix && (i3.startsWith(e2.clientPrefix) || i3 in o2) ? Reflect.get(t2, i3) : c(i3);
    } });
  }
  e.s(["createEnv", 0, a], 935247);
  try {
    var o = "u" > typeof window ? window : e.g;
    o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[new o.Error().stack] = Object.assign({}, o._sentryModuleMetadata[new o.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["createEnv", 0, function(e2) {
    let i2 = "object" == typeof e2.client ? e2.client : {}, r2 = "object" == typeof e2.server ? e2.server : {}, n2 = e2.shared, o2 = e2.runtimeEnv ? e2.runtimeEnv : { ...t.default.env, ...e2.experimental__runtimeEnv };
    return a({ ...e2, shared: n2, client: i2, server: r2, clientPrefix: "NEXT_PUBLIC_", runtimeEnv: o2 });
  }], 317136);
}, 784738, 70156, (e) => {
  "use strict";
  var t = e.i(541130), i = e.i(935247), r = e.i(703573);
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["vercel", 0, () => (0, i.createEnv)({ server: { VERCEL: r.string().optional(), CI: r.string().optional(), VERCEL_ENV: r.enum(["development", "preview", "production"]).optional(), VERCEL_TARGET_ENV: r.string().optional(), VERCEL_URL: r.string().optional(), VERCEL_PROJECT_PRODUCTION_URL: r.string().optional(), VERCEL_BRANCH_URL: r.string().optional(), VERCEL_REGION: r.string().optional(), VERCEL_DEPLOYMENT_ID: r.string().optional(), VERCEL_SKEW_PROTECTION_ENABLED: r.string().optional(), VERCEL_AUTOMATION_BYPASS_SECRET: r.string().optional(), VERCEL_GIT_PROVIDER: r.string().optional(), VERCEL_GIT_REPO_SLUG: r.string().optional(), VERCEL_GIT_REPO_OWNER: r.string().optional(), VERCEL_GIT_REPO_ID: r.string().optional(), VERCEL_GIT_COMMIT_REF: r.string().optional(), VERCEL_GIT_COMMIT_SHA: r.string().optional(), VERCEL_GIT_COMMIT_MESSAGE: r.string().optional(), VERCEL_GIT_COMMIT_AUTHOR_LOGIN: r.string().optional(), VERCEL_GIT_COMMIT_AUTHOR_NAME: r.string().optional(), VERCEL_GIT_PREVIOUS_SHA: r.string().optional(), VERCEL_GIT_PULL_REQUEST_ID: r.string().optional() }, runtimeEnv: t.default.env })], 70156);
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s([], 784738);
}, 817422, (e) => {
  "use strict";
  e.i(12929);
  var t, i = e.i(562429), r = e.i(703573);
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s([], 315830), e.i(315830);
  var a = e.i(201528);
  e.s(["endsWith", () => a._endsWith, "gt", () => a._gt, "gte", () => a._gte, "includes", () => a._includes, "length", () => a._length, "lowercase", () => a._lowercase, "lt", () => a._lt, "lte", () => a._lte, "maxLength", () => a._maxLength, "maxSize", () => a._maxSize, "mime", () => a._mime, "minLength", () => a._minLength, "minSize", () => a._minSize, "multipleOf", () => a._multipleOf, "negative", () => a._negative, "nonnegative", () => a._nonnegative, "nonpositive", () => a._nonpositive, "normalize", () => a._normalize, "overwrite", () => a._overwrite, "positive", () => a._positive, "property", () => a._property, "regex", () => a._regex, "size", () => a._size, "slugify", () => a._slugify, "startsWith", () => a._startsWith, "toLowerCase", () => a._toLowerCase, "toUpperCase", () => a._toUpperCase, "trim", () => a._trim, "uppercase", () => a._uppercase], 770854);
  var o = e.i(770854), s = e.i(979163), u = e.i(696859), l = e.i(2108);
  try {
    var d = "u" > typeof window ? window : e.g;
    d._sentryModuleMetadata = d._sentryModuleMetadata || {}, d._sentryModuleMetadata[new d.Error().stack] = Object.assign({}, d._sentryModuleMetadata[new d.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let c = { invalid_type: "invalid_type", too_big: "too_big", too_small: "too_small", invalid_format: "invalid_format", not_multiple_of: "not_multiple_of", unrecognized_keys: "unrecognized_keys", invalid_union: "invalid_union", invalid_key: "invalid_key", invalid_element: "invalid_element", invalid_value: "invalid_value", custom: "custom" };
  function m(e2) {
    l.config({ customError: e2 });
  }
  function f() {
    return l.config().customError;
  }
  t || (t = {}), e.s(["ZodFirstPartyTypeKind", 0, t, "ZodIssueCode", 0, c, "getErrorMap", 0, f, "setErrorMap", 0, m], 614126), e.i(614126), e.s(["$brand", () => l.$brand, "ZodFirstPartyTypeKind", 0, t, "ZodIssueCode", 0, c, "config", () => l.config, "getErrorMap", 0, f, "setErrorMap", 0, m], 477713), e.i(477713);
  var p = e.i(904277), v = e.i(69547), g = e.i(89232), _ = e.i(667416), $ = e.i(201528), y = e.i(181503), h = e.i(232428), b = e.i(549648);
  try {
    var x = "u" > typeof window ? window : e.g;
    x._sentryModuleMetadata = x._sentryModuleMetadata || {}, x._sentryModuleMetadata[new x.Error().stack] = Object.assign({}, x._sentryModuleMetadata[new x.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let k = { ...r, ...o, iso: b }, w = /* @__PURE__ */ new Set(["$schema", "$ref", "$defs", "definitions", "$id", "id", "$comment", "$anchor", "$vocabulary", "$dynamicRef", "$dynamicAnchor", "type", "enum", "const", "anyOf", "oneOf", "allOf", "not", "properties", "required", "additionalProperties", "patternProperties", "propertyNames", "minProperties", "maxProperties", "items", "prefixItems", "additionalItems", "minItems", "maxItems", "uniqueItems", "contains", "minContains", "maxContains", "minLength", "maxLength", "pattern", "format", "minimum", "maximum", "exclusiveMinimum", "exclusiveMaximum", "multipleOf", "description", "default", "contentEncoding", "contentMediaType", "contentSchema", "unevaluatedItems", "unevaluatedProperties", "if", "then", "else", "dependentSchemas", "dependentRequired", "nullable", "readOnly"]);
  var I = e.i(416917);
  try {
    var Z = "u" > typeof window ? window : e.g;
    Z._sentryModuleMetadata = Z._sentryModuleMetadata || {}, Z._sentryModuleMetadata[new Z.Error().stack] = Object.assign({}, Z._sentryModuleMetadata[new Z.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["bigint", 0, function(e2) {
    return a._coercedBigint(r.ZodBigInt, e2);
  }, "boolean", 0, function(e2) {
    return a._coercedBoolean(r.ZodBoolean, e2);
  }, "date", 0, function(e2) {
    return a._coercedDate(r.ZodDate, e2);
  }, "number", 0, function(e2) {
    return a._coercedNumber(r.ZodNumber, e2);
  }, "string", 0, function(e2) {
    return a._coercedString(r.ZodString, e2);
  }], 946056);
  var z = e.i(946056);
  e.s(["$brand", () => l.$brand, "$input", () => p.$input, "$output", () => p.$output, "NEVER", () => l.NEVER, "TimePrecision", () => $.TimePrecision, "ZodAny", () => r.ZodAny, "ZodArray", () => r.ZodArray, "ZodBase64", () => r.ZodBase64, "ZodBase64URL", () => r.ZodBase64URL, "ZodBigInt", () => r.ZodBigInt, "ZodBigIntFormat", () => r.ZodBigIntFormat, "ZodBoolean", () => r.ZodBoolean, "ZodCIDRv4", () => r.ZodCIDRv4, "ZodCIDRv6", () => r.ZodCIDRv6, "ZodCUID", () => r.ZodCUID, "ZodCUID2", () => r.ZodCUID2, "ZodCatch", () => r.ZodCatch, "ZodCodec", () => r.ZodCodec, "ZodCustom", () => r.ZodCustom, "ZodCustomStringFormat", () => r.ZodCustomStringFormat, "ZodDate", () => r.ZodDate, "ZodDefault", () => r.ZodDefault, "ZodDiscriminatedUnion", () => r.ZodDiscriminatedUnion, "ZodE164", () => r.ZodE164, "ZodEmail", () => r.ZodEmail, "ZodEmoji", () => r.ZodEmoji, "ZodEnum", () => r.ZodEnum, "ZodError", () => s.ZodError, "ZodExactOptional", () => r.ZodExactOptional, "ZodFile", () => r.ZodFile, "ZodFirstPartyTypeKind", 0, t, "ZodFunction", () => r.ZodFunction, "ZodGUID", () => r.ZodGUID, "ZodIPv4", () => r.ZodIPv4, "ZodIPv6", () => r.ZodIPv6, "ZodISODate", () => b.ZodISODate, "ZodISODateTime", () => b.ZodISODateTime, "ZodISODuration", () => b.ZodISODuration, "ZodISOTime", () => b.ZodISOTime, "ZodIntersection", () => r.ZodIntersection, "ZodIssueCode", 0, c, "ZodJWT", () => r.ZodJWT, "ZodKSUID", () => r.ZodKSUID, "ZodLazy", () => r.ZodLazy, "ZodLiteral", () => r.ZodLiteral, "ZodMAC", () => r.ZodMAC, "ZodMap", () => r.ZodMap, "ZodNaN", () => r.ZodNaN, "ZodNanoID", () => r.ZodNanoID, "ZodNever", () => r.ZodNever, "ZodNonOptional", () => r.ZodNonOptional, "ZodNull", () => r.ZodNull, "ZodNullable", () => r.ZodNullable, "ZodNumber", () => r.ZodNumber, "ZodNumberFormat", () => r.ZodNumberFormat, "ZodObject", () => r.ZodObject, "ZodOptional", () => r.ZodOptional, "ZodPipe", () => r.ZodPipe, "ZodPrefault", () => r.ZodPrefault, "ZodPreprocess", () => r.ZodPreprocess, "ZodPromise", () => r.ZodPromise, "ZodReadonly", () => r.ZodReadonly, "ZodRealError", () => s.ZodRealError, "ZodRecord", () => r.ZodRecord, "ZodSet", () => r.ZodSet, "ZodString", () => r.ZodString, "ZodStringFormat", () => r.ZodStringFormat, "ZodSuccess", () => r.ZodSuccess, "ZodSymbol", () => r.ZodSymbol, "ZodTemplateLiteral", () => r.ZodTemplateLiteral, "ZodTransform", () => r.ZodTransform, "ZodTuple", () => r.ZodTuple, "ZodType", () => r.ZodType, "ZodULID", () => r.ZodULID, "ZodURL", () => r.ZodURL, "ZodUUID", () => r.ZodUUID, "ZodUndefined", () => r.ZodUndefined, "ZodUnion", () => r.ZodUnion, "ZodUnknown", () => r.ZodUnknown, "ZodVoid", () => r.ZodVoid, "ZodXID", () => r.ZodXID, "ZodXor", () => r.ZodXor, "_ZodString", () => r._ZodString, "_default", () => r._default, "_function", () => r._function, "any", () => r.any, "array", () => r.array, "base64", () => r.base64, "base64url", () => r.base64url, "bigint", () => r.bigint, "boolean", () => r.boolean, "catch", () => r.catch, "check", () => r.check, "cidrv4", () => r.cidrv4, "cidrv6", () => r.cidrv6, "clone", () => v.clone, "codec", () => r.codec, "coerce", 0, z, "config", () => l.config, "core", 0, i, "cuid", () => r.cuid, "cuid2", () => r.cuid2, "custom", () => r.custom, "date", () => r.date, "decode", () => u.decode, "decodeAsync", () => u.decodeAsync, "describe", () => r.describe, "discriminatedUnion", () => r.discriminatedUnion, "e164", () => r.e164, "email", () => r.email, "emoji", () => r.emoji, "encode", () => u.encode, "encodeAsync", () => u.encodeAsync, "endsWith", () => a._endsWith, "enum", () => r.enum, "exactOptional", () => r.exactOptional, "file", () => r.file, "flattenError", () => _.flattenError, "float32", () => r.float32, "float64", () => r.float64, "formatError", () => _.formatError, "fromJSONSchema", 0, function(e2, t2) {
    var i2, r2;
    let n2, a2;
    if ("boolean" == typeof e2) return e2 ? k.any() : k.never();
    try {
      n2 = JSON.parse(JSON.stringify(e2));
    } catch {
      throw Error("fromJSONSchema input is not valid JSON (possibly cyclic); use $defs/$ref for recursive schemas");
    }
    let o2 = { version: (i2 = n2, r2 = t2?.defaultTarget, "https://json-schema.org/draft/2020-12/schema" === (a2 = i2.$schema) ? "draft-2020-12" : "http://json-schema.org/draft-07/schema#" === a2 ? "draft-7" : "http://json-schema.org/draft-04/schema#" === a2 ? "draft-4" : r2 ?? "draft-2020-12"), defs: n2.$defs || n2.definitions || {}, refs: /* @__PURE__ */ new Map(), processing: /* @__PURE__ */ new Set(), rootSchema: n2, registry: t2?.registry ?? p.globalRegistry };
    return (function e3(t3, i3) {
      if ("boolean" == typeof t3) return t3 ? k.any() : k.never();
      let r3 = (function t4(i4, r4) {
        let n4;
        if (void 0 !== i4.not) {
          if ("object" == typeof i4.not && 0 === Object.keys(i4.not).length) return k.never();
          throw Error("not is not supported in Zod (except { not: {} } for never)");
        }
        if (void 0 !== i4.unevaluatedItems) throw Error("unevaluatedItems is not supported");
        if (void 0 !== i4.unevaluatedProperties) throw Error("unevaluatedProperties is not supported");
        if (void 0 !== i4.if || void 0 !== i4.then || void 0 !== i4.else) throw Error("Conditional schemas (if/then/else) are not supported");
        if (void 0 !== i4.dependentSchemas || void 0 !== i4.dependentRequired) throw Error("dependentSchemas and dependentRequired are not supported");
        if (i4.$ref) {
          let t5 = i4.$ref;
          if (r4.refs.has(t5)) return r4.refs.get(t5);
          if (r4.processing.has(t5)) return k.lazy(() => {
            if (!r4.refs.has(t5)) throw Error(`Circular reference not resolved: ${t5}`);
            return r4.refs.get(t5);
          });
          r4.processing.add(t5);
          let n5 = e3((function(e4, t6) {
            if (!e4.startsWith("#")) throw Error("External $ref is not supported, only local refs (#/...) are allowed");
            let i5 = e4.slice(1).split("/").filter(Boolean);
            if (0 === i5.length) return t6.rootSchema;
            let r5 = "draft-2020-12" === t6.version ? "$defs" : "definitions";
            if (i5[0] === r5) {
              let r6 = i5[1];
              if (!r6 || !t6.defs[r6]) throw Error(`Reference not found: ${e4}`);
              return t6.defs[r6];
            }
            throw Error(`Reference not found: ${e4}`);
          })(t5, r4), r4);
          return r4.refs.set(t5, n5), r4.processing.delete(t5), n5;
        }
        if (void 0 !== i4.enum) {
          let e4 = i4.enum;
          if ("openapi-3.0" === r4.version && true === i4.nullable && 1 === e4.length && null === e4[0]) return k.null();
          if (0 === e4.length) return k.never();
          if (1 === e4.length) return k.literal(e4[0]);
          if (e4.every((e5) => "string" == typeof e5)) return k.enum(e4);
          let t5 = e4.map((e5) => k.literal(e5));
          return t5.length < 2 ? t5[0] : k.union([t5[0], t5[1], ...t5.slice(2)]);
        }
        if (void 0 !== i4.const) return k.literal(i4.const);
        let a4 = i4.type;
        if (Array.isArray(a4)) {
          let e4 = a4.map((e5) => t4({ ...i4, type: e5 }, r4));
          return 0 === e4.length ? k.never() : 1 === e4.length ? e4[0] : k.union(e4);
        }
        if (!a4) return k.any();
        switch (a4) {
          case "string": {
            let e4 = k.string();
            if (i4.format) {
              let t5 = i4.format;
              "email" === t5 ? e4 = e4.check(k.email()) : "uri" === t5 || "uri-reference" === t5 ? e4 = e4.check(k.url()) : "uuid" === t5 || "guid" === t5 ? e4 = e4.check(k.uuid()) : "date-time" === t5 ? e4 = e4.check(k.iso.datetime()) : "date" === t5 ? e4 = e4.check(k.iso.date()) : "time" === t5 ? e4 = e4.check(k.iso.time()) : "duration" === t5 ? e4 = e4.check(k.iso.duration()) : "ipv4" === t5 ? e4 = e4.check(k.ipv4()) : "ipv6" === t5 ? e4 = e4.check(k.ipv6()) : "mac" === t5 ? e4 = e4.check(k.mac()) : "cidr" === t5 ? e4 = e4.check(k.cidrv4()) : "cidr-v6" === t5 ? e4 = e4.check(k.cidrv6()) : "base64" === t5 ? e4 = e4.check(k.base64()) : "base64url" === t5 ? e4 = e4.check(k.base64url()) : "e164" === t5 ? e4 = e4.check(k.e164()) : "jwt" === t5 ? e4 = e4.check(k.jwt()) : "emoji" === t5 ? e4 = e4.check(k.emoji()) : "nanoid" === t5 ? e4 = e4.check(k.nanoid()) : "cuid" === t5 ? e4 = e4.check(k.cuid()) : "cuid2" === t5 ? e4 = e4.check(k.cuid2()) : "ulid" === t5 ? e4 = e4.check(k.ulid()) : "xid" === t5 ? e4 = e4.check(k.xid()) : "ksuid" === t5 && (e4 = e4.check(k.ksuid()));
            }
            "number" == typeof i4.minLength && (e4 = e4.min(i4.minLength)), "number" == typeof i4.maxLength && (e4 = e4.max(i4.maxLength)), i4.pattern && (e4 = e4.regex(new RegExp(i4.pattern))), n4 = e4;
            break;
          }
          case "number":
          case "integer": {
            let e4 = "integer" === a4 ? k.number().int() : k.number();
            "number" == typeof i4.minimum && (e4 = e4.min(i4.minimum)), "number" == typeof i4.maximum && (e4 = e4.max(i4.maximum)), "number" == typeof i4.exclusiveMinimum ? e4 = e4.gt(i4.exclusiveMinimum) : true === i4.exclusiveMinimum && "number" == typeof i4.minimum && (e4 = e4.gt(i4.minimum)), "number" == typeof i4.exclusiveMaximum ? e4 = e4.lt(i4.exclusiveMaximum) : true === i4.exclusiveMaximum && "number" == typeof i4.maximum && (e4 = e4.lt(i4.maximum)), "number" == typeof i4.multipleOf && (e4 = e4.multipleOf(i4.multipleOf)), n4 = e4;
            break;
          }
          case "boolean":
            n4 = k.boolean();
            break;
          case "null":
            n4 = k.null();
            break;
          case "object": {
            let t5 = {}, a5 = i4.properties || {}, o3 = new Set(i4.required || []);
            for (let [i5, n5] of Object.entries(a5)) {
              let a6 = e3(n5, r4);
              t5[i5] = o3.has(i5) ? a6 : a6.optional();
            }
            if (i4.propertyNames) {
              let a6 = e3(i4.propertyNames, r4), o4 = i4.additionalProperties && "object" == typeof i4.additionalProperties ? e3(i4.additionalProperties, r4) : k.any();
              if (0 === Object.keys(t5).length) {
                n4 = k.record(a6, o4);
                break;
              }
              let s3 = k.object(t5).passthrough(), u2 = k.looseRecord(a6, o4);
              n4 = k.intersection(s3, u2);
              break;
            }
            if (i4.patternProperties) {
              let a6 = i4.patternProperties, o4 = Object.keys(a6), s3 = [];
              for (let t6 of o4) {
                let i5 = e3(a6[t6], r4), n5 = k.string().regex(new RegExp(t6));
                s3.push(k.looseRecord(n5, i5));
              }
              let u2 = [];
              if (Object.keys(t5).length > 0 && u2.push(k.object(t5).passthrough()), u2.push(...s3), 0 === u2.length) n4 = k.object({}).passthrough();
              else if (1 === u2.length) n4 = u2[0];
              else {
                let e4 = k.intersection(u2[0], u2[1]);
                for (let t6 = 2; t6 < u2.length; t6++) e4 = k.intersection(e4, u2[t6]);
                n4 = e4;
              }
              break;
            }
            let s2 = k.object(t5);
            n4 = false === i4.additionalProperties ? s2.strict() : "object" == typeof i4.additionalProperties ? s2.catchall(e3(i4.additionalProperties, r4)) : s2.passthrough();
            break;
          }
          case "array": {
            let t5 = i4.prefixItems, a5 = i4.items;
            if (t5 && Array.isArray(t5)) {
              let o3 = t5.map((t6) => e3(t6, r4)), s2 = a5 && "object" == typeof a5 && !Array.isArray(a5) ? e3(a5, r4) : void 0;
              n4 = s2 ? k.tuple(o3).rest(s2) : k.tuple(o3), "number" == typeof i4.minItems && (n4 = n4.check(k.minLength(i4.minItems))), "number" == typeof i4.maxItems && (n4 = n4.check(k.maxLength(i4.maxItems)));
            } else if (Array.isArray(a5)) {
              let t6 = a5.map((t7) => e3(t7, r4)), o3 = i4.additionalItems && "object" == typeof i4.additionalItems ? e3(i4.additionalItems, r4) : void 0;
              n4 = o3 ? k.tuple(t6).rest(o3) : k.tuple(t6), "number" == typeof i4.minItems && (n4 = n4.check(k.minLength(i4.minItems))), "number" == typeof i4.maxItems && (n4 = n4.check(k.maxLength(i4.maxItems)));
            } else if (void 0 !== a5) {
              let t6 = e3(a5, r4), o3 = k.array(t6);
              "number" == typeof i4.minItems && (o3 = o3.min(i4.minItems)), "number" == typeof i4.maxItems && (o3 = o3.max(i4.maxItems)), n4 = o3;
            } else n4 = k.array(k.any());
            break;
          }
          default:
            throw Error(`Unsupported type: ${a4}`);
        }
        return n4;
      })(t3, i3), n3 = t3.type || void 0 !== t3.enum || void 0 !== t3.const;
      if (t3.anyOf && Array.isArray(t3.anyOf)) {
        let a4 = t3.anyOf.map((t4) => e3(t4, i3)), o3 = k.union(a4);
        r3 = n3 ? k.intersection(r3, o3) : o3;
      }
      if (t3.oneOf && Array.isArray(t3.oneOf)) {
        let a4 = t3.oneOf.map((t4) => e3(t4, i3)), o3 = k.xor(a4);
        r3 = n3 ? k.intersection(r3, o3) : o3;
      }
      if (t3.allOf && Array.isArray(t3.allOf)) if (0 === t3.allOf.length) r3 = n3 ? r3 : k.any();
      else {
        let a4 = n3 ? r3 : e3(t3.allOf[0], i3), o3 = +!n3;
        for (let r4 = o3; r4 < t3.allOf.length; r4++) a4 = k.intersection(a4, e3(t3.allOf[r4], i3));
        r3 = a4;
      }
      true === t3.nullable && "openapi-3.0" === i3.version && (r3 = k.nullable(r3)), true === t3.readOnly && (r3 = k.readonly(r3)), void 0 !== t3.default && (r3 = r3.default(t3.default));
      let a3 = {};
      for (let e4 of ["$id", "id", "$comment", "$anchor", "$vocabulary", "$dynamicRef", "$dynamicAnchor"]) e4 in t3 && (a3[e4] = t3[e4]);
      for (let e4 of ["contentEncoding", "contentMediaType", "contentSchema"]) e4 in t3 && (a3[e4] = t3[e4]);
      for (let e4 of Object.keys(t3)) w.has(e4) || (a3[e4] = t3[e4]);
      return Object.keys(a3).length > 0 && i3.registry.add(r3, a3), t3.description && (r3 = r3.describe(t3.description)), r3;
    })(n2, o2);
  }, "function", () => r.function, "getErrorMap", 0, f, "globalRegistry", () => p.globalRegistry, "gt", () => a._gt, "gte", () => a._gte, "guid", () => r.guid, "hash", () => r.hash, "hex", () => r.hex, "hostname", () => r.hostname, "httpUrl", () => r.httpUrl, "includes", () => a._includes, "instanceof", () => r.instanceof, "int", () => r.int, "int32", () => r.int32, "int64", () => r.int64, "intersection", () => r.intersection, "invertCodec", () => r.invertCodec, "ipv4", () => r.ipv4, "ipv6", () => r.ipv6, "iso", 0, b, "json", () => r.json, "jwt", () => r.jwt, "keyof", () => r.keyof, "ksuid", () => r.ksuid, "lazy", () => r.lazy, "length", () => a._length, "literal", () => r.literal, "locales", 0, I, "looseObject", () => r.looseObject, "looseRecord", () => r.looseRecord, "lowercase", () => a._lowercase, "lt", () => a._lt, "lte", () => a._lte, "mac", () => r.mac, "map", () => r.map, "maxLength", () => a._maxLength, "maxSize", () => a._maxSize, "meta", () => r.meta, "mime", () => a._mime, "minLength", () => a._minLength, "minSize", () => a._minSize, "multipleOf", () => a._multipleOf, "nan", () => r.nan, "nanoid", () => r.nanoid, "nativeEnum", () => r.nativeEnum, "negative", () => a._negative, "never", () => r.never, "nonnegative", () => a._nonnegative, "nonoptional", () => r.nonoptional, "nonpositive", () => a._nonpositive, "normalize", () => a._normalize, "null", () => r.null, "nullable", () => r.nullable, "nullish", () => r.nullish, "number", () => r.number, "object", () => r.object, "optional", () => r.optional, "overwrite", () => a._overwrite, "parse", () => u.parse, "parseAsync", () => u.parseAsync, "partialRecord", () => r.partialRecord, "pipe", () => r.pipe, "positive", () => a._positive, "prefault", () => r.prefault, "preprocess", () => r.preprocess, "prettifyError", () => _.prettifyError, "promise", () => r.promise, "property", () => a._property, "readonly", () => r.readonly, "record", () => r.record, "refine", () => r.refine, "regex", () => a._regex, "regexes", () => g.regexes, "registry", () => p.registry, "safeDecode", () => u.safeDecode, "safeDecodeAsync", () => u.safeDecodeAsync, "safeEncode", () => u.safeEncode, "safeEncodeAsync", () => u.safeEncodeAsync, "safeParse", () => u.safeParse, "safeParseAsync", () => u.safeParseAsync, "set", () => r.set, "setErrorMap", 0, m, "size", () => a._size, "slugify", () => a._slugify, "startsWith", () => a._startsWith, "strictObject", () => r.strictObject, "string", () => r.string, "stringFormat", () => r.stringFormat, "stringbool", () => r.stringbool, "success", () => r.success, "superRefine", () => r.superRefine, "symbol", () => r.symbol, "templateLiteral", () => r.templateLiteral, "toJSONSchema", () => h.toJSONSchema, "toLowerCase", () => a._toLowerCase, "toUpperCase", () => a._toUpperCase, "transform", () => r.transform, "treeifyError", () => _.treeifyError, "trim", () => a._trim, "tuple", () => r.tuple, "uint32", () => r.uint32, "uint64", () => r.uint64, "ulid", () => r.ulid, "undefined", () => r.undefined, "union", () => r.union, "unknown", () => r.unknown, "uppercase", () => a._uppercase, "url", () => r.url, "util", () => y.util, "uuid", () => r.uuid, "uuidv4", () => r.uuidv4, "uuidv6", () => r.uuidv6, "uuidv7", () => r.uuidv7, "void", () => r.void, "xid", () => r.xid, "xor", () => r.xor], 30558);
  var S = e.i(30558);
  e.s(["z", 0, S], 817422);
}, 12929, 295349, 916876, (e) => {
  "use strict";
  var t = e.i(2108), i = e.i(69547);
  try {
    var r = "u" > typeof window ? window : e.g;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function n() {
    let e2, t2, r2;
    return { localeError: (e2 = { string: { unit: "characters", verb: "to have" }, file: { unit: "bytes", verb: "to have" }, array: { unit: "items", verb: "to have" }, set: { unit: "items", verb: "to have" }, map: { unit: "entries", verb: "to have" } }, t2 = { regex: "input", email: "email address", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO datetime", date: "ISO date", time: "ISO time", duration: "ISO duration", ipv4: "IPv4 address", ipv6: "IPv6 address", mac: "MAC address", cidrv4: "IPv4 range", cidrv6: "IPv6 range", base64: "base64-encoded string", base64url: "base64url-encoded string", json_string: "JSON string", e164: "E.164 number", jwt: "JWT", template_literal: "input" }, r2 = { nan: "NaN" }, (n2) => {
      switch (n2.code) {
        case "invalid_type": {
          let e3 = r2[n2.expected] ?? n2.expected, t3 = i.parsedType(n2.input), a2 = r2[t3] ?? t3;
          return `Invalid input: expected ${e3}, received ${a2}`;
        }
        case "invalid_value":
          if (1 === n2.values.length) return `Invalid input: expected ${i.stringifyPrimitive(n2.values[0])}`;
          return `Invalid option: expected one of ${i.joinValues(n2.values, "|")}`;
        case "too_big": {
          let t3 = n2.inclusive ? "<=" : "<", i2 = e2[n2.origin] ?? null;
          if (i2) return `Too big: expected ${n2.origin ?? "value"} to have ${t3}${n2.maximum.toString()} ${i2.unit ?? "elements"}`;
          return `Too big: expected ${n2.origin ?? "value"} to be ${t3}${n2.maximum.toString()}`;
        }
        case "too_small": {
          let t3 = n2.inclusive ? ">=" : ">", i2 = e2[n2.origin] ?? null;
          if (i2) return `Too small: expected ${n2.origin} to have ${t3}${n2.minimum.toString()} ${i2.unit}`;
          return `Too small: expected ${n2.origin} to be ${t3}${n2.minimum.toString()}`;
        }
        case "invalid_format":
          if ("starts_with" === n2.format) return `Invalid string: must start with "${n2.prefix}"`;
          if ("ends_with" === n2.format) return `Invalid string: must end with "${n2.suffix}"`;
          if ("includes" === n2.format) return `Invalid string: must include "${n2.includes}"`;
          if ("regex" === n2.format) return `Invalid string: must match pattern ${n2.pattern}`;
          return `Invalid ${t2[n2.format] ?? n2.format}`;
        case "not_multiple_of":
          return `Invalid number: must be a multiple of ${n2.divisor}`;
        case "unrecognized_keys":
          return `Unrecognized key${n2.keys.length > 1 ? "s" : ""}: ${i.joinValues(n2.keys, ", ")}`;
        case "invalid_key":
          return `Invalid key in ${n2.origin}`;
        case "invalid_union":
          if (n2.options && Array.isArray(n2.options) && n2.options.length > 0) {
            let e3 = n2.options.map((e4) => `'${e4}'`).join(" | ");
            return `Invalid discriminator value. Expected ${e3}`;
          }
          return "Invalid input";
        case "invalid_element":
          return `Invalid value in ${n2.origin}`;
        default:
          return "Invalid input";
      }
    }) };
  }
  e.s(["default", 0, n], 295349);
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  (0, t.config)(n()), e.s([], 12929);
  try {
    var o = "u" > typeof window ? window : e.g;
    o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[new o.Error().stack] = Object.assign({}, o._sentryModuleMetadata[new o.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s([], 916876);
}, 703573, 549648, 979163, 696859, (e) => {
  "use strict";
  e.s(["ZodAny", () => e5, "ZodArray", () => tl, "ZodBase64", () => eP, "ZodBase64URL", () => eM, "ZodBigInt", () => eH, "ZodBigIntFormat", () => e0, "ZodBoolean", () => eq, "ZodCIDRv4", () => eI, "ZodCIDRv6", () => ez, "ZodCUID", () => el, "ZodCUID2", () => ec, "ZodCatch", () => t2, "ZodCodec", () => ie, "ZodCustom", () => ig, "ZodCustomStringFormat", () => eT, "ZodDate", () => ts, "ZodDefault", () => tq, "ZodDiscriminatedUnion", () => th, "ZodE164", () => eU, "ZodEmail", () => G, "ZodEmoji", () => ea, "ZodEnum", () => tj, "ZodExactOptional", () => tK, "ZodFile", () => tL, "ZodFunction", () => ip, "ZodGUID", () => X, "ZodIPv4", () => ey, "ZodIPv6", () => ek, "ZodIntersection", () => tx, "ZodJWT", () => eD, "ZodKSUID", () => e_, "ZodLazy", () => il, "ZodLiteral", () => tT, "ZodMAC", () => eb, "ZodMap", () => tE, "ZodNaN", () => t3, "ZodNanoID", () => es, "ZodNever", () => tr, "ZodNonOptional", () => t0, "ZodNull", () => e7, "ZodNullable", () => tG, "ZodNumber", () => eB, "ZodNumberFormat", () => eV, "ZodObject", () => tm, "ZodOptional", () => tJ, "ZodPipe", () => t8, "ZodPrefault", () => tH, "ZodPreprocess", () => ir, "ZodPromise", () => ic, "ZodReadonly", () => ia, "ZodRecord", () => tZ, "ZodSet", () => tO, "ZodString", () => V, "ZodStringFormat", () => F, "ZodSuccess", () => t6, "ZodSymbol", () => e1, "ZodTemplateLiteral", () => is, "ZodTransform", () => tR, "ZodTuple", () => tw, "ZodType", () => B, "ZodULID", () => ef, "ZodURL", () => ei, "ZodUUID", () => Y, "ZodUndefined", () => e9, "ZodUnion", () => tg, "ZodUnknown", () => tt, "ZodVoid", () => ta, "ZodXID", () => ev, "ZodXor", () => t$, "_ZodString", () => J, "_default", () => tY, "_function", () => iv, "any", () => te, "array", () => td, "base64", () => eE, "base64url", () => eO, "bigint", () => eQ, "boolean", () => eY, "catch", () => t9, "check", () => i_, "cidrv4", () => eZ, "cidrv6", () => eS, "codec", () => it, "cuid", () => ed, "cuid2", () => em, "custom", () => i$, "date", () => tu, "describe", () => ib, "discriminatedUnion", () => tb, "e164", () => ej, "email", () => W, "emoji", () => eo, "enum", () => tD, "exactOptional", () => tF, "file", () => tC, "float32", () => eF, "float64", () => eG, "function", () => iv, "guid", () => q, "hash", () => eR, "hex", () => eC, "hostname", () => eL, "httpUrl", () => en, "instanceof", () => ik, "int", () => eK, "int32", () => eW, "int64", () => e4, "intersection", () => tk, "invertCodec", () => ii, "ipv4", () => eh, "ipv6", () => ew, "json", () => iI, "jwt", () => eN, "keyof", () => tc, "ksuid", () => e$, "lazy", () => id, "literal", () => tA, "looseObject", () => tv, "looseRecord", () => tP, "mac", () => ex, "map", () => tM, "meta", () => ix, "nan", () => t7, "nanoid", () => eu, "nativeEnum", () => tN, "never", () => tn, "nonoptional", () => t4, "null", () => e8, "nullable", () => tW, "nullish", () => tX, "number", () => eJ, "object", () => tf, "optional", () => tV, "partialRecord", () => tS, "pipe", () => t5, "prefault", () => tQ, "preprocess", () => iZ, "promise", () => im, "readonly", () => io, "record", () => tz, "refine", () => iy, "set", () => tU, "strictObject", () => tp, "string", () => K, "stringFormat", () => eA, "stringbool", () => iw, "success", () => t1, "superRefine", () => ih, "symbol", () => e2, "templateLiteral", () => iu, "transform", () => tB, "tuple", () => tI, "uint32", () => eX, "uint64", () => e6, "ulid", () => ep, "undefined", () => e3, "union", () => t_, "unknown", () => ti, "url", () => er, "uuid", () => H, "uuidv4", () => Q, "uuidv6", () => ee, "uuidv7", () => et, "void", () => to, "xid", () => eg, "xor", () => ty], 703573);
  var t = e.i(2108), i = e.i(383197), r = e.i(69547), n = e.i(904277), a = e.i(201528), o = e.i(89232), s = e.i(894320), u = e.i(181503), l = e.i(232428), d = e.i(128831);
  e.s(["ZodISODate", () => p, "ZodISODateTime", () => m, "ZodISODuration", () => $, "ZodISOTime", () => g, "date", () => v, "datetime", () => f, "duration", () => y, "time", () => _], 549648);
  try {
    var c = "u" > typeof window ? window : e.g;
    c._sentryModuleMetadata = c._sentryModuleMetadata || {}, c._sentryModuleMetadata[new c.Error().stack] = Object.assign({}, c._sentryModuleMetadata[new c.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let m = t.$constructor("ZodISODateTime", (e10, t10) => {
    i.$ZodISODateTime.init(e10, t10), F.init(e10, t10);
  });
  function f(e10) {
    return a._isoDateTime(m, e10);
  }
  let p = t.$constructor("ZodISODate", (e10, t10) => {
    i.$ZodISODate.init(e10, t10), F.init(e10, t10);
  });
  function v(e10) {
    return a._isoDate(p, e10);
  }
  let g = t.$constructor("ZodISOTime", (e10, t10) => {
    i.$ZodISOTime.init(e10, t10), F.init(e10, t10);
  });
  function _(e10) {
    return a._isoTime(g, e10);
  }
  let $ = t.$constructor("ZodISODuration", (e10, t10) => {
    i.$ZodISODuration.init(e10, t10), F.init(e10, t10);
  });
  function y(e10) {
    return a._isoDuration($, e10);
  }
  var h = e.i(905772), b = e.i(667416);
  try {
    var x = "u" > typeof window ? window : e.g;
    x._sentryModuleMetadata = x._sentryModuleMetadata || {}, x._sentryModuleMetadata[new x.Error().stack] = Object.assign({}, x._sentryModuleMetadata[new x.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let k = (e10, t10) => {
    b.$ZodError.init(e10, t10), e10.name = "ZodError", Object.defineProperties(e10, { format: { value: (t11) => b.formatError(e10, t11) }, flatten: { value: (t11) => b.flattenError(e10, t11) }, addIssue: { value: (t11) => {
      e10.issues.push(t11), e10.message = JSON.stringify(e10.issues, r.jsonStringifyReplacer, 2);
    } }, addIssues: { value: (t11) => {
      e10.issues.push(...t11), e10.message = JSON.stringify(e10.issues, r.jsonStringifyReplacer, 2);
    } }, isEmpty: { get: () => 0 === e10.issues.length } });
  }, w = t.$constructor("ZodError", k), I = t.$constructor("ZodError", k, { Parent: Error });
  e.s(["ZodError", 0, w, "ZodRealError", 0, I], 979163);
  try {
    var Z = "u" > typeof window ? window : e.g;
    Z._sentryModuleMetadata = Z._sentryModuleMetadata || {}, Z._sentryModuleMetadata[new Z.Error().stack] = Object.assign({}, Z._sentryModuleMetadata[new Z.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let z = h._parse(I), S = h._parseAsync(I), P = h._safeParse(I), E = h._safeParseAsync(I), M = h._encode(I), O = h._decode(I), U = h._encodeAsync(I), j = h._decodeAsync(I), D = h._safeEncode(I), N = h._safeDecode(I), T = h._safeEncodeAsync(I), A = h._safeDecodeAsync(I);
  e.s(["decode", 0, O, "decodeAsync", 0, j, "encode", 0, M, "encodeAsync", 0, U, "parse", 0, z, "parseAsync", 0, S, "safeDecode", 0, N, "safeDecodeAsync", 0, A, "safeEncode", 0, D, "safeEncodeAsync", 0, T, "safeParse", 0, P, "safeParseAsync", 0, E], 696859);
  try {
    var L = "u" > typeof window ? window : e.g;
    L._sentryModuleMetadata = L._sentryModuleMetadata || {}, L._sentryModuleMetadata[new L.Error().stack] = Object.assign({}, L._sentryModuleMetadata[new L.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e10) {
  }
  let C = /* @__PURE__ */ new WeakMap();
  function R(e10, t10, i2) {
    let r2 = Object.getPrototypeOf(e10), n2 = C.get(r2);
    if (n2 || (n2 = /* @__PURE__ */ new Set(), C.set(r2, n2)), !n2.has(t10)) for (let e11 in n2.add(t10), i2) {
      let t11 = i2[e11];
      Object.defineProperty(r2, e11, { configurable: true, enumerable: false, get() {
        let i3 = t11.bind(this);
        return Object.defineProperty(this, e11, { configurable: true, writable: true, enumerable: true, value: i3 }), i3;
      }, set(t12) {
        Object.defineProperty(this, e11, { configurable: true, writable: true, enumerable: true, value: t12 });
      } });
    }
  }
  let B = t.$constructor("ZodType", (e10, t10) => (i.$ZodType.init(e10, t10), Object.assign(e10["~standard"], { jsonSchema: { input: (0, d.createStandardJSONSchemaMethod)(e10, "input"), output: (0, d.createStandardJSONSchemaMethod)(e10, "output") } }), e10.toJSONSchema = (0, d.createToJSONSchemaMethod)(e10, {}), e10.def = t10, e10.type = t10.type, Object.defineProperty(e10, "_def", { value: t10 }), e10.parse = (t11, i2) => z(e10, t11, i2, { callee: e10.parse }), e10.safeParse = (t11, i2) => P(e10, t11, i2), e10.parseAsync = async (t11, i2) => S(e10, t11, i2, { callee: e10.parseAsync }), e10.safeParseAsync = async (t11, i2) => E(e10, t11, i2), e10.spa = e10.safeParseAsync, e10.encode = (t11, i2) => M(e10, t11, i2), e10.decode = (t11, i2) => O(e10, t11, i2), e10.encodeAsync = async (t11, i2) => U(e10, t11, i2), e10.decodeAsync = async (t11, i2) => j(e10, t11, i2), e10.safeEncode = (t11, i2) => D(e10, t11, i2), e10.safeDecode = (t11, i2) => N(e10, t11, i2), e10.safeEncodeAsync = async (t11, i2) => T(e10, t11, i2), e10.safeDecodeAsync = async (t11, i2) => A(e10, t11, i2), R(e10, "ZodType", { check(...e11) {
    let t11 = this.def;
    return this.clone(u.util.mergeDefs(t11, { checks: [...t11.checks ?? [], ...e11.map((e12) => "function" == typeof e12 ? { _zod: { check: e12, def: { check: "custom" }, onattach: [] } } : e12)] }), { parent: true });
  }, with(...e11) {
    return this.check(...e11);
  }, clone(e11, t11) {
    return r.clone(this, e11, t11);
  }, brand() {
    return this;
  }, register(e11, t11) {
    return e11.add(this, t11), this;
  }, refine(e11, t11) {
    return this.check(iy(e11, t11));
  }, superRefine(e11, t11) {
    return this.check(ih(e11, t11));
  }, overwrite(e11) {
    return this.check(a._overwrite(e11));
  }, optional() {
    return tV(this);
  }, exactOptional() {
    return tF(this);
  }, nullable() {
    return tW(this);
  }, nullish() {
    return tV(tW(this));
  }, nonoptional(e11) {
    return t4(this, e11);
  }, array() {
    return td(this);
  }, or(e11) {
    return t_([this, e11]);
  }, and(e11) {
    return tk(this, e11);
  }, transform(e11) {
    return t5(this, tB(e11));
  }, default(e11) {
    return tY(this, e11);
  }, prefault(e11) {
    return tQ(this, e11);
  }, catch(e11) {
    return t9(this, e11);
  }, pipe(e11) {
    return t5(this, e11);
  }, readonly() {
    return io(this);
  }, describe(e11) {
    let t11 = this.clone();
    return n.globalRegistry.add(t11, { description: e11 }), t11;
  }, meta(...e11) {
    if (0 === e11.length) return n.globalRegistry.get(this);
    let t11 = this.clone();
    return n.globalRegistry.add(t11, e11[0]), t11;
  }, isOptional() {
    return this.safeParse(void 0).success;
  }, isNullable() {
    return this.safeParse(null).success;
  }, apply(e11) {
    return e11(this);
  } }), Object.defineProperty(e10, "description", { get: () => n.globalRegistry.get(e10)?.description, configurable: true }), e10)), J = t.$constructor("_ZodString", (e10, t10) => {
    i.$ZodString.init(e10, t10), B.init(e10, t10), e10._zod.processJSONSchema = (t11, i2, r3) => l.stringProcessor(e10, t11, i2, r3);
    let r2 = e10._zod.bag;
    e10.format = r2.format ?? null, e10.minLength = r2.minimum ?? null, e10.maxLength = r2.maximum ?? null, R(e10, "_ZodString", { regex(...e11) {
      return this.check(a._regex(...e11));
    }, includes(...e11) {
      return this.check(a._includes(...e11));
    }, startsWith(...e11) {
      return this.check(a._startsWith(...e11));
    }, endsWith(...e11) {
      return this.check(a._endsWith(...e11));
    }, min(...e11) {
      return this.check(a._minLength(...e11));
    }, max(...e11) {
      return this.check(a._maxLength(...e11));
    }, length(...e11) {
      return this.check(a._length(...e11));
    }, nonempty(...e11) {
      return this.check(a._minLength(1, ...e11));
    }, lowercase(e11) {
      return this.check(a._lowercase(e11));
    }, uppercase(e11) {
      return this.check(a._uppercase(e11));
    }, trim() {
      return this.check(a._trim());
    }, normalize(...e11) {
      return this.check(a._normalize(...e11));
    }, toLowerCase() {
      return this.check(a._toLowerCase());
    }, toUpperCase() {
      return this.check(a._toUpperCase());
    }, slugify() {
      return this.check(a._slugify());
    } });
  }), V = t.$constructor("ZodString", (e10, t10) => {
    i.$ZodString.init(e10, t10), J.init(e10, t10), e10.email = (t11) => e10.check(a._email(G, t11)), e10.url = (t11) => e10.check(a._url(ei, t11)), e10.jwt = (t11) => e10.check(a._jwt(eD, t11)), e10.emoji = (t11) => e10.check(a._emoji(ea, t11)), e10.guid = (t11) => e10.check(a._guid(X, t11)), e10.uuid = (t11) => e10.check(a._uuid(Y, t11)), e10.uuidv4 = (t11) => e10.check(a._uuidv4(Y, t11)), e10.uuidv6 = (t11) => e10.check(a._uuidv6(Y, t11)), e10.uuidv7 = (t11) => e10.check(a._uuidv7(Y, t11)), e10.nanoid = (t11) => e10.check(a._nanoid(es, t11)), e10.guid = (t11) => e10.check(a._guid(X, t11)), e10.cuid = (t11) => e10.check(a._cuid(el, t11)), e10.cuid2 = (t11) => e10.check(a._cuid2(ec, t11)), e10.ulid = (t11) => e10.check(a._ulid(ef, t11)), e10.base64 = (t11) => e10.check(a._base64(eP, t11)), e10.base64url = (t11) => e10.check(a._base64url(eM, t11)), e10.xid = (t11) => e10.check(a._xid(ev, t11)), e10.ksuid = (t11) => e10.check(a._ksuid(e_, t11)), e10.ipv4 = (t11) => e10.check(a._ipv4(ey, t11)), e10.ipv6 = (t11) => e10.check(a._ipv6(ek, t11)), e10.cidrv4 = (t11) => e10.check(a._cidrv4(eI, t11)), e10.cidrv6 = (t11) => e10.check(a._cidrv6(ez, t11)), e10.e164 = (t11) => e10.check(a._e164(eU, t11)), e10.datetime = (t11) => e10.check(f(t11)), e10.date = (t11) => e10.check(v(t11)), e10.time = (t11) => e10.check(_(t11)), e10.duration = (t11) => e10.check(y(t11));
  });
  function K(e10) {
    return a._string(V, e10);
  }
  let F = t.$constructor("ZodStringFormat", (e10, t10) => {
    i.$ZodStringFormat.init(e10, t10), J.init(e10, t10);
  }), G = t.$constructor("ZodEmail", (e10, t10) => {
    i.$ZodEmail.init(e10, t10), F.init(e10, t10);
  });
  function W(e10) {
    return a._email(G, e10);
  }
  let X = t.$constructor("ZodGUID", (e10, t10) => {
    i.$ZodGUID.init(e10, t10), F.init(e10, t10);
  });
  function q(e10) {
    return a._guid(X, e10);
  }
  let Y = t.$constructor("ZodUUID", (e10, t10) => {
    i.$ZodUUID.init(e10, t10), F.init(e10, t10);
  });
  function H(e10) {
    return a._uuid(Y, e10);
  }
  function Q(e10) {
    return a._uuidv4(Y, e10);
  }
  function ee(e10) {
    return a._uuidv6(Y, e10);
  }
  function et(e10) {
    return a._uuidv7(Y, e10);
  }
  let ei = t.$constructor("ZodURL", (e10, t10) => {
    i.$ZodURL.init(e10, t10), F.init(e10, t10);
  });
  function er(e10) {
    return a._url(ei, e10);
  }
  function en(e10) {
    return a._url(ei, { protocol: o.regexes.httpProtocol, hostname: o.regexes.domain, ...u.util.normalizeParams(e10) });
  }
  let ea = t.$constructor("ZodEmoji", (e10, t10) => {
    i.$ZodEmoji.init(e10, t10), F.init(e10, t10);
  });
  function eo(e10) {
    return a._emoji(ea, e10);
  }
  let es = t.$constructor("ZodNanoID", (e10, t10) => {
    i.$ZodNanoID.init(e10, t10), F.init(e10, t10);
  });
  function eu(e10) {
    return a._nanoid(es, e10);
  }
  let el = t.$constructor("ZodCUID", (e10, t10) => {
    i.$ZodCUID.init(e10, t10), F.init(e10, t10);
  });
  function ed(e10) {
    return a._cuid(el, e10);
  }
  let ec = t.$constructor("ZodCUID2", (e10, t10) => {
    i.$ZodCUID2.init(e10, t10), F.init(e10, t10);
  });
  function em(e10) {
    return a._cuid2(ec, e10);
  }
  let ef = t.$constructor("ZodULID", (e10, t10) => {
    i.$ZodULID.init(e10, t10), F.init(e10, t10);
  });
  function ep(e10) {
    return a._ulid(ef, e10);
  }
  let ev = t.$constructor("ZodXID", (e10, t10) => {
    i.$ZodXID.init(e10, t10), F.init(e10, t10);
  });
  function eg(e10) {
    return a._xid(ev, e10);
  }
  let e_ = t.$constructor("ZodKSUID", (e10, t10) => {
    i.$ZodKSUID.init(e10, t10), F.init(e10, t10);
  });
  function e$(e10) {
    return a._ksuid(e_, e10);
  }
  let ey = t.$constructor("ZodIPv4", (e10, t10) => {
    i.$ZodIPv4.init(e10, t10), F.init(e10, t10);
  });
  function eh(e10) {
    return a._ipv4(ey, e10);
  }
  let eb = t.$constructor("ZodMAC", (e10, t10) => {
    i.$ZodMAC.init(e10, t10), F.init(e10, t10);
  });
  function ex(e10) {
    return a._mac(eb, e10);
  }
  let ek = t.$constructor("ZodIPv6", (e10, t10) => {
    i.$ZodIPv6.init(e10, t10), F.init(e10, t10);
  });
  function ew(e10) {
    return a._ipv6(ek, e10);
  }
  let eI = t.$constructor("ZodCIDRv4", (e10, t10) => {
    i.$ZodCIDRv4.init(e10, t10), F.init(e10, t10);
  });
  function eZ(e10) {
    return a._cidrv4(eI, e10);
  }
  let ez = t.$constructor("ZodCIDRv6", (e10, t10) => {
    i.$ZodCIDRv6.init(e10, t10), F.init(e10, t10);
  });
  function eS(e10) {
    return a._cidrv6(ez, e10);
  }
  let eP = t.$constructor("ZodBase64", (e10, t10) => {
    i.$ZodBase64.init(e10, t10), F.init(e10, t10);
  });
  function eE(e10) {
    return a._base64(eP, e10);
  }
  let eM = t.$constructor("ZodBase64URL", (e10, t10) => {
    i.$ZodBase64URL.init(e10, t10), F.init(e10, t10);
  });
  function eO(e10) {
    return a._base64url(eM, e10);
  }
  let eU = t.$constructor("ZodE164", (e10, t10) => {
    i.$ZodE164.init(e10, t10), F.init(e10, t10);
  });
  function ej(e10) {
    return a._e164(eU, e10);
  }
  let eD = t.$constructor("ZodJWT", (e10, t10) => {
    i.$ZodJWT.init(e10, t10), F.init(e10, t10);
  });
  function eN(e10) {
    return a._jwt(eD, e10);
  }
  let eT = t.$constructor("ZodCustomStringFormat", (e10, t10) => {
    i.$ZodCustomStringFormat.init(e10, t10), F.init(e10, t10);
  });
  function eA(e10, t10, i2 = {}) {
    return a._stringFormat(eT, e10, t10, i2);
  }
  function eL(e10) {
    return a._stringFormat(eT, "hostname", o.regexes.hostname, e10);
  }
  function eC(e10) {
    return a._stringFormat(eT, "hex", o.regexes.hex, e10);
  }
  function eR(e10, t10) {
    let i2 = t10?.enc ?? "hex", r2 = `${e10}_${i2}`, n2 = o.regexes[r2];
    if (!n2) throw Error(`Unrecognized hash format: ${r2}`);
    return a._stringFormat(eT, r2, n2, t10);
  }
  let eB = t.$constructor("ZodNumber", (e10, t10) => {
    i.$ZodNumber.init(e10, t10), B.init(e10, t10), e10._zod.processJSONSchema = (t11, i2, r3) => l.numberProcessor(e10, t11, i2, r3), R(e10, "ZodNumber", { gt(e11, t11) {
      return this.check(a._gt(e11, t11));
    }, gte(e11, t11) {
      return this.check(a._gte(e11, t11));
    }, min(e11, t11) {
      return this.check(a._gte(e11, t11));
    }, lt(e11, t11) {
      return this.check(a._lt(e11, t11));
    }, lte(e11, t11) {
      return this.check(a._lte(e11, t11));
    }, max(e11, t11) {
      return this.check(a._lte(e11, t11));
    }, int(e11) {
      return this.check(eK(e11));
    }, safe(e11) {
      return this.check(eK(e11));
    }, positive(e11) {
      return this.check(a._gt(0, e11));
    }, nonnegative(e11) {
      return this.check(a._gte(0, e11));
    }, negative(e11) {
      return this.check(a._lt(0, e11));
    }, nonpositive(e11) {
      return this.check(a._lte(0, e11));
    }, multipleOf(e11, t11) {
      return this.check(a._multipleOf(e11, t11));
    }, step(e11, t11) {
      return this.check(a._multipleOf(e11, t11));
    }, finite() {
      return this;
    } });
    let r2 = e10._zod.bag;
    e10.minValue = Math.max(r2.minimum ?? -1 / 0, r2.exclusiveMinimum ?? -1 / 0) ?? null, e10.maxValue = Math.min(r2.maximum ?? 1 / 0, r2.exclusiveMaximum ?? 1 / 0) ?? null, e10.isInt = (r2.format ?? "").includes("int") || Number.isSafeInteger(r2.multipleOf ?? 0.5), e10.isFinite = true, e10.format = r2.format ?? null;
  });
  function eJ(e10) {
    return a._number(eB, e10);
  }
  let eV = t.$constructor("ZodNumberFormat", (e10, t10) => {
    i.$ZodNumberFormat.init(e10, t10), eB.init(e10, t10);
  });
  function eK(e10) {
    return a._int(eV, e10);
  }
  function eF(e10) {
    return a._float32(eV, e10);
  }
  function eG(e10) {
    return a._float64(eV, e10);
  }
  function eW(e10) {
    return a._int32(eV, e10);
  }
  function eX(e10) {
    return a._uint32(eV, e10);
  }
  let eq = t.$constructor("ZodBoolean", (e10, t10) => {
    i.$ZodBoolean.init(e10, t10), B.init(e10, t10), e10._zod.processJSONSchema = (t11, i2, r2) => l.booleanProcessor(e10, t11, i2, r2);
  });
  function eY(e10) {
    return a._boolean(eq, e10);
  }
  let eH = t.$constructor("ZodBigInt", (e10, t10) => {
    i.$ZodBigInt.init(e10, t10), B.init(e10, t10), e10._zod.processJSONSchema = (t11, i2, r3) => l.bigintProcessor(e10, t11, i2, r3), e10.gte = (t11, i2) => e10.check(a._gte(t11, i2)), e10.min = (t11, i2) => e10.check(a._gte(t11, i2)), e10.gt = (t11, i2) => e10.check(a._gt(t11, i2)), e10.gte = (t11, i2) => e10.check(a._gte(t11, i2)), e10.min = (t11, i2) => e10.check(a._gte(t11, i2)), e10.lt = (t11, i2) => e10.check(a._lt(t11, i2)), e10.lte = (t11, i2) => e10.check(a._lte(t11, i2)), e10.max = (t11, i2) => e10.check(a._lte(t11, i2)), e10.positive = (t11) => e10.check(a._gt(BigInt(0), t11)), e10.negative = (t11) => e10.check(a._lt(BigInt(0), t11)), e10.nonpositive = (t11) => e10.check(a._lte(BigInt(0), t11)), e10.nonnegative = (t11) => e10.check(a._gte(BigInt(0), t11)), e10.multipleOf = (t11, i2) => e10.check(a._multipleOf(t11, i2));
    let r2 = e10._zod.bag;
    e10.minValue = r2.minimum ?? null, e10.maxValue = r2.maximum ?? null, e10.format = r2.format ?? null;
  });
  function eQ(e10) {
    return a._bigint(eH, e10);
  }
  let e0 = t.$constructor("ZodBigIntFormat", (e10, t10) => {
    i.$ZodBigIntFormat.init(e10, t10), eH.init(e10, t10);
  });
  function e4(e10) {
    return a._int64(e0, e10);
  }
  function e6(e10) {
    return a._uint64(e0, e10);
  }
  let e1 = t.$constructor("ZodSymbol", (e10, t10) => {
    i.$ZodSymbol.init(e10, t10), B.init(e10, t10), e10._zod.processJSONSchema = (t11, i2, r2) => l.symbolProcessor(e10, t11, i2, r2);
  });
  function e2(e10) {
    return a._symbol(e1, e10);
  }
  let e9 = t.$constructor("ZodUndefined", (e10, t10) => {
    i.$ZodUndefined.init(e10, t10), B.init(e10, t10), e10._zod.processJSONSchema = (t11, i2, r2) => l.undefinedProcessor(e10, t11, i2, r2);
  });
  function e3(e10) {
    return a._undefined(e9, e10);
  }
  let e7 = t.$constructor("ZodNull", (e10, t10) => {
    i.$ZodNull.init(e10, t10), B.init(e10, t10), e10._zod.processJSONSchema = (t11, i2, r2) => l.nullProcessor(e10, t11, i2, r2);
  });
  function e8(e10) {
    return a._null(e7, e10);
  }
  let e5 = t.$constructor("ZodAny", (e10, t10) => {
    i.$ZodAny.init(e10, t10), B.init(e10, t10), e10._zod.processJSONSchema = (t11, i2, r2) => l.anyProcessor(e10, t11, i2, r2);
  });
  function te() {
    return a._any(e5);
  }
  let tt = t.$constructor("ZodUnknown", (e10, t10) => {
    i.$ZodUnknown.init(e10, t10), B.init(e10, t10), e10._zod.processJSONSchema = (t11, i2, r2) => l.unknownProcessor(e10, t11, i2, r2);
  });
  function ti() {
    return a._unknown(tt);
  }
  let tr = t.$constructor("ZodNever", (e10, t10) => {
    i.$ZodNever.init(e10, t10), B.init(e10, t10), e10._zod.processJSONSchema = (t11, i2, r2) => l.neverProcessor(e10, t11, i2, r2);
  });
  function tn(e10) {
    return a._never(tr, e10);
  }
  let ta = t.$constructor("ZodVoid", (e10, t10) => {
    i.$ZodVoid.init(e10, t10), B.init(e10, t10), e10._zod.processJSONSchema = (t11, i2, r2) => l.voidProcessor(e10, t11, i2, r2);
  });
  function to(e10) {
    return a._void(ta, e10);
  }
  let ts = t.$constructor("ZodDate", (e10, t10) => {
    i.$ZodDate.init(e10, t10), B.init(e10, t10), e10._zod.processJSONSchema = (t11, i2, r3) => l.dateProcessor(e10, t11, i2, r3), e10.min = (t11, i2) => e10.check(a._gte(t11, i2)), e10.max = (t11, i2) => e10.check(a._lte(t11, i2));
    let r2 = e10._zod.bag;
    e10.minDate = r2.minimum ? new Date(r2.minimum) : null, e10.maxDate = r2.maximum ? new Date(r2.maximum) : null;
  });
  function tu(e10) {
    return a._date(ts, e10);
  }
  let tl = t.$constructor("ZodArray", (e10, t10) => {
    i.$ZodArray.init(e10, t10), B.init(e10, t10), e10._zod.processJSONSchema = (t11, i2, r2) => l.arrayProcessor(e10, t11, i2, r2), e10.element = t10.element, R(e10, "ZodArray", { min(e11, t11) {
      return this.check(a._minLength(e11, t11));
    }, nonempty(e11) {
      return this.check(a._minLength(1, e11));
    }, max(e11, t11) {
      return this.check(a._maxLength(e11, t11));
    }, length(e11, t11) {
      return this.check(a._length(e11, t11));
    }, unwrap() {
      return this.element;
    } });
  });
  function td(e10, t10) {
    return a._array(tl, e10, t10);
  }
  function tc(e10) {
    return tD(Object.keys(e10._zod.def.shape));
  }
  let tm = t.$constructor("ZodObject", (e10, t10) => {
    i.$ZodObjectJIT.init(e10, t10), B.init(e10, t10), e10._zod.processJSONSchema = (t11, i2, r2) => l.objectProcessor(e10, t11, i2, r2), u.util.defineLazy(e10, "shape", () => t10.shape), R(e10, "ZodObject", { keyof() {
      return tD(Object.keys(this._zod.def.shape));
    }, catchall(e11) {
      return this.clone({ ...this._zod.def, catchall: e11 });
    }, passthrough() {
      return this.clone({ ...this._zod.def, catchall: ti() });
    }, loose() {
      return this.clone({ ...this._zod.def, catchall: ti() });
    }, strict() {
      return this.clone({ ...this._zod.def, catchall: tn() });
    }, strip() {
      return this.clone({ ...this._zod.def, catchall: void 0 });
    }, extend(e11) {
      return u.util.extend(this, e11);
    }, safeExtend(e11) {
      return u.util.safeExtend(this, e11);
    }, merge(e11) {
      return u.util.merge(this, e11);
    }, pick(e11) {
      return u.util.pick(this, e11);
    }, omit(e11) {
      return u.util.omit(this, e11);
    }, partial(...e11) {
      return u.util.partial(tJ, this, e11[0]);
    }, required(...e11) {
      return u.util.required(t0, this, e11[0]);
    } });
  });
  function tf(e10, t10) {
    return new tm({ type: "object", shape: e10 ?? {}, ...u.util.normalizeParams(t10) });
  }
  function tp(e10, t10) {
    return new tm({ type: "object", shape: e10, catchall: tn(), ...u.util.normalizeParams(t10) });
  }
  function tv(e10, t10) {
    return new tm({ type: "object", shape: e10, catchall: ti(), ...u.util.normalizeParams(t10) });
  }
  let tg = t.$constructor("ZodUnion", (e10, t10) => {
    i.$ZodUnion.init(e10, t10), B.init(e10, t10), e10._zod.processJSONSchema = (t11, i2, r2) => l.unionProcessor(e10, t11, i2, r2), e10.options = t10.options;
  });
  function t_(e10, t10) {
    return new tg({ type: "union", options: e10, ...u.util.normalizeParams(t10) });
  }
  let t$ = t.$constructor("ZodXor", (e10, t10) => {
    tg.init(e10, t10), i.$ZodXor.init(e10, t10), e10._zod.processJSONSchema = (t11, i2, r2) => l.unionProcessor(e10, t11, i2, r2), e10.options = t10.options;
  });
  function ty(e10, t10) {
    return new t$({ type: "union", options: e10, inclusive: false, ...u.util.normalizeParams(t10) });
  }
  let th = t.$constructor("ZodDiscriminatedUnion", (e10, t10) => {
    tg.init(e10, t10), i.$ZodDiscriminatedUnion.init(e10, t10);
  });
  function tb(e10, t10, i2) {
    return new th({ type: "union", options: t10, discriminator: e10, ...u.util.normalizeParams(i2) });
  }
  let tx = t.$constructor("ZodIntersection", (e10, t10) => {
    i.$ZodIntersection.init(e10, t10), B.init(e10, t10), e10._zod.processJSONSchema = (t11, i2, r2) => l.intersectionProcessor(e10, t11, i2, r2);
  });
  function tk(e10, t10) {
    return new tx({ type: "intersection", left: e10, right: t10 });
  }
  let tw = t.$constructor("ZodTuple", (e10, t10) => {
    i.$ZodTuple.init(e10, t10), B.init(e10, t10), e10._zod.processJSONSchema = (t11, i2, r2) => l.tupleProcessor(e10, t11, i2, r2), e10.rest = (t11) => e10.clone({ ...e10._zod.def, rest: t11 });
  });
  function tI(e10, t10, r2) {
    let n2 = t10 instanceof i.$ZodType, a2 = n2 ? r2 : t10;
    return new tw({ type: "tuple", items: e10, rest: n2 ? t10 : null, ...u.util.normalizeParams(a2) });
  }
  let tZ = t.$constructor("ZodRecord", (e10, t10) => {
    i.$ZodRecord.init(e10, t10), B.init(e10, t10), e10._zod.processJSONSchema = (t11, i2, r2) => l.recordProcessor(e10, t11, i2, r2), e10.keyType = t10.keyType, e10.valueType = t10.valueType;
  });
  function tz(e10, t10, i2) {
    return new tZ(t10 && t10._zod ? { type: "record", keyType: e10, valueType: t10, ...u.util.normalizeParams(i2) } : { type: "record", keyType: K(), valueType: e10, ...u.util.normalizeParams(t10) });
  }
  function tS(e10, t10, i2) {
    let n2 = r.clone(e10);
    return n2._zod.values = void 0, new tZ({ type: "record", keyType: n2, valueType: t10, ...u.util.normalizeParams(i2) });
  }
  function tP(e10, t10, i2) {
    return new tZ({ type: "record", keyType: e10, valueType: t10, mode: "loose", ...u.util.normalizeParams(i2) });
  }
  let tE = t.$constructor("ZodMap", (e10, t10) => {
    i.$ZodMap.init(e10, t10), B.init(e10, t10), e10._zod.processJSONSchema = (t11, i2, r2) => l.mapProcessor(e10, t11, i2, r2), e10.keyType = t10.keyType, e10.valueType = t10.valueType, e10.min = (...t11) => e10.check(a._minSize(...t11)), e10.nonempty = (t11) => e10.check(a._minSize(1, t11)), e10.max = (...t11) => e10.check(a._maxSize(...t11)), e10.size = (...t11) => e10.check(a._size(...t11));
  });
  function tM(e10, t10, i2) {
    return new tE({ type: "map", keyType: e10, valueType: t10, ...u.util.normalizeParams(i2) });
  }
  let tO = t.$constructor("ZodSet", (e10, t10) => {
    i.$ZodSet.init(e10, t10), B.init(e10, t10), e10._zod.processJSONSchema = (t11, i2, r2) => l.setProcessor(e10, t11, i2, r2), e10.min = (...t11) => e10.check(a._minSize(...t11)), e10.nonempty = (t11) => e10.check(a._minSize(1, t11)), e10.max = (...t11) => e10.check(a._maxSize(...t11)), e10.size = (...t11) => e10.check(a._size(...t11));
  });
  function tU(e10, t10) {
    return new tO({ type: "set", valueType: e10, ...u.util.normalizeParams(t10) });
  }
  let tj = t.$constructor("ZodEnum", (e10, t10) => {
    i.$ZodEnum.init(e10, t10), B.init(e10, t10), e10._zod.processJSONSchema = (t11, i2, r3) => l.enumProcessor(e10, t11, i2, r3), e10.enum = t10.entries, e10.options = Object.values(t10.entries);
    let r2 = new Set(Object.keys(t10.entries));
    e10.extract = (e11, i2) => {
      let n2 = {};
      for (let i3 of e11) if (r2.has(i3)) n2[i3] = t10.entries[i3];
      else throw Error(`Key ${i3} not found in enum`);
      return new tj({ ...t10, checks: [], ...u.util.normalizeParams(i2), entries: n2 });
    }, e10.exclude = (e11, i2) => {
      let n2 = { ...t10.entries };
      for (let t11 of e11) if (r2.has(t11)) delete n2[t11];
      else throw Error(`Key ${t11} not found in enum`);
      return new tj({ ...t10, checks: [], ...u.util.normalizeParams(i2), entries: n2 });
    };
  });
  function tD(e10, t10) {
    return new tj({ type: "enum", entries: Array.isArray(e10) ? Object.fromEntries(e10.map((e11) => [e11, e11])) : e10, ...u.util.normalizeParams(t10) });
  }
  function tN(e10, t10) {
    return new tj({ type: "enum", entries: e10, ...u.util.normalizeParams(t10) });
  }
  let tT = t.$constructor("ZodLiteral", (e10, t10) => {
    i.$ZodLiteral.init(e10, t10), B.init(e10, t10), e10._zod.processJSONSchema = (t11, i2, r2) => l.literalProcessor(e10, t11, i2, r2), e10.values = new Set(t10.values), Object.defineProperty(e10, "value", { get() {
      if (t10.values.length > 1) throw Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return t10.values[0];
    } });
  });
  function tA(e10, t10) {
    return new tT({ type: "literal", values: Array.isArray(e10) ? e10 : [e10], ...u.util.normalizeParams(t10) });
  }
  let tL = t.$constructor("ZodFile", (e10, t10) => {
    i.$ZodFile.init(e10, t10), B.init(e10, t10), e10._zod.processJSONSchema = (t11, i2, r2) => l.fileProcessor(e10, t11, i2, r2), e10.min = (t11, i2) => e10.check(a._minSize(t11, i2)), e10.max = (t11, i2) => e10.check(a._maxSize(t11, i2)), e10.mime = (t11, i2) => e10.check(a._mime(Array.isArray(t11) ? t11 : [t11], i2));
  });
  function tC(e10) {
    return a._file(tL, e10);
  }
  let tR = t.$constructor("ZodTransform", (e10, r2) => {
    i.$ZodTransform.init(e10, r2), B.init(e10, r2), e10._zod.processJSONSchema = (t10, i2, r3) => l.transformProcessor(e10, t10, i2, r3), e10._zod.parse = (i2, n2) => {
      if ("backward" === n2.direction) throw new t.$ZodEncodeError(e10.constructor.name);
      i2.addIssue = (t10) => {
        "string" == typeof t10 ? i2.issues.push(u.util.issue(t10, i2.value, r2)) : (t10.fatal && (t10.continue = false), t10.code ?? (t10.code = "custom"), t10.input ?? (t10.input = i2.value), t10.inst ?? (t10.inst = e10), i2.issues.push(u.util.issue(t10)));
      };
      let a2 = r2.transform(i2.value, i2);
      return a2 instanceof Promise ? a2.then((e11) => (i2.value = e11, i2.fallback = true, i2)) : (i2.value = a2, i2.fallback = true, i2);
    };
  });
  function tB(e10) {
    return new tR({ type: "transform", transform: e10 });
  }
  let tJ = t.$constructor("ZodOptional", (e10, t10) => {
    i.$ZodOptional.init(e10, t10), B.init(e10, t10), e10._zod.processJSONSchema = (t11, i2, r2) => l.optionalProcessor(e10, t11, i2, r2), e10.unwrap = () => e10._zod.def.innerType;
  });
  function tV(e10) {
    return new tJ({ type: "optional", innerType: e10 });
  }
  let tK = t.$constructor("ZodExactOptional", (e10, t10) => {
    i.$ZodExactOptional.init(e10, t10), B.init(e10, t10), e10._zod.processJSONSchema = (t11, i2, r2) => l.optionalProcessor(e10, t11, i2, r2), e10.unwrap = () => e10._zod.def.innerType;
  });
  function tF(e10) {
    return new tK({ type: "optional", innerType: e10 });
  }
  let tG = t.$constructor("ZodNullable", (e10, t10) => {
    i.$ZodNullable.init(e10, t10), B.init(e10, t10), e10._zod.processJSONSchema = (t11, i2, r2) => l.nullableProcessor(e10, t11, i2, r2), e10.unwrap = () => e10._zod.def.innerType;
  });
  function tW(e10) {
    return new tG({ type: "nullable", innerType: e10 });
  }
  function tX(e10) {
    return tV(tW(e10));
  }
  let tq = t.$constructor("ZodDefault", (e10, t10) => {
    i.$ZodDefault.init(e10, t10), B.init(e10, t10), e10._zod.processJSONSchema = (t11, i2, r2) => l.defaultProcessor(e10, t11, i2, r2), e10.unwrap = () => e10._zod.def.innerType, e10.removeDefault = e10.unwrap;
  });
  function tY(e10, t10) {
    return new tq({ type: "default", innerType: e10, get defaultValue() {
      return "function" == typeof t10 ? t10() : u.util.shallowClone(t10);
    } });
  }
  let tH = t.$constructor("ZodPrefault", (e10, t10) => {
    i.$ZodPrefault.init(e10, t10), B.init(e10, t10), e10._zod.processJSONSchema = (t11, i2, r2) => l.prefaultProcessor(e10, t11, i2, r2), e10.unwrap = () => e10._zod.def.innerType;
  });
  function tQ(e10, t10) {
    return new tH({ type: "prefault", innerType: e10, get defaultValue() {
      return "function" == typeof t10 ? t10() : u.util.shallowClone(t10);
    } });
  }
  let t0 = t.$constructor("ZodNonOptional", (e10, t10) => {
    i.$ZodNonOptional.init(e10, t10), B.init(e10, t10), e10._zod.processJSONSchema = (t11, i2, r2) => l.nonoptionalProcessor(e10, t11, i2, r2), e10.unwrap = () => e10._zod.def.innerType;
  });
  function t4(e10, t10) {
    return new t0({ type: "nonoptional", innerType: e10, ...u.util.normalizeParams(t10) });
  }
  let t6 = t.$constructor("ZodSuccess", (e10, t10) => {
    i.$ZodSuccess.init(e10, t10), B.init(e10, t10), e10._zod.processJSONSchema = (t11, i2, r2) => l.successProcessor(e10, t11, i2, r2), e10.unwrap = () => e10._zod.def.innerType;
  });
  function t1(e10) {
    return new t6({ type: "success", innerType: e10 });
  }
  let t2 = t.$constructor("ZodCatch", (e10, t10) => {
    i.$ZodCatch.init(e10, t10), B.init(e10, t10), e10._zod.processJSONSchema = (t11, i2, r2) => l.catchProcessor(e10, t11, i2, r2), e10.unwrap = () => e10._zod.def.innerType, e10.removeCatch = e10.unwrap;
  });
  function t9(e10, t10) {
    return new t2({ type: "catch", innerType: e10, catchValue: "function" == typeof t10 ? t10 : () => t10 });
  }
  let t3 = t.$constructor("ZodNaN", (e10, t10) => {
    i.$ZodNaN.init(e10, t10), B.init(e10, t10), e10._zod.processJSONSchema = (t11, i2, r2) => l.nanProcessor(e10, t11, i2, r2);
  });
  function t7(e10) {
    return a._nan(t3, e10);
  }
  let t8 = t.$constructor("ZodPipe", (e10, t10) => {
    i.$ZodPipe.init(e10, t10), B.init(e10, t10), e10._zod.processJSONSchema = (t11, i2, r2) => l.pipeProcessor(e10, t11, i2, r2), e10.in = t10.in, e10.out = t10.out;
  });
  function t5(e10, t10) {
    return new t8({ type: "pipe", in: e10, out: t10 });
  }
  let ie = t.$constructor("ZodCodec", (e10, t10) => {
    t8.init(e10, t10), i.$ZodCodec.init(e10, t10);
  });
  function it(e10, t10, i2) {
    return new ie({ type: "pipe", in: e10, out: t10, transform: i2.decode, reverseTransform: i2.encode });
  }
  function ii(e10) {
    let t10 = e10._zod.def;
    return new ie({ type: "pipe", in: t10.out, out: t10.in, transform: t10.reverseTransform, reverseTransform: t10.transform });
  }
  let ir = t.$constructor("ZodPreprocess", (e10, t10) => {
    t8.init(e10, t10), i.$ZodPreprocess.init(e10, t10);
  }), ia = t.$constructor("ZodReadonly", (e10, t10) => {
    i.$ZodReadonly.init(e10, t10), B.init(e10, t10), e10._zod.processJSONSchema = (t11, i2, r2) => l.readonlyProcessor(e10, t11, i2, r2), e10.unwrap = () => e10._zod.def.innerType;
  });
  function io(e10) {
    return new ia({ type: "readonly", innerType: e10 });
  }
  let is = t.$constructor("ZodTemplateLiteral", (e10, t10) => {
    i.$ZodTemplateLiteral.init(e10, t10), B.init(e10, t10), e10._zod.processJSONSchema = (t11, i2, r2) => l.templateLiteralProcessor(e10, t11, i2, r2);
  });
  function iu(e10, t10) {
    return new is({ type: "template_literal", parts: e10, ...u.util.normalizeParams(t10) });
  }
  let il = t.$constructor("ZodLazy", (e10, t10) => {
    i.$ZodLazy.init(e10, t10), B.init(e10, t10), e10._zod.processJSONSchema = (t11, i2, r2) => l.lazyProcessor(e10, t11, i2, r2), e10.unwrap = () => e10._zod.def.getter();
  });
  function id(e10) {
    return new il({ type: "lazy", getter: e10 });
  }
  let ic = t.$constructor("ZodPromise", (e10, t10) => {
    i.$ZodPromise.init(e10, t10), B.init(e10, t10), e10._zod.processJSONSchema = (t11, i2, r2) => l.promiseProcessor(e10, t11, i2, r2), e10.unwrap = () => e10._zod.def.innerType;
  });
  function im(e10) {
    return new ic({ type: "promise", innerType: e10 });
  }
  let ip = t.$constructor("ZodFunction", (e10, t10) => {
    i.$ZodFunction.init(e10, t10), B.init(e10, t10), e10._zod.processJSONSchema = (t11, i2, r2) => l.functionProcessor(e10, t11, i2, r2);
  });
  function iv(e10) {
    return new ip({ type: "function", input: Array.isArray(e10?.input) ? tI(e10?.input) : e10?.input ?? td(ti()), output: e10?.output ?? ti() });
  }
  let ig = t.$constructor("ZodCustom", (e10, t10) => {
    i.$ZodCustom.init(e10, t10), B.init(e10, t10), e10._zod.processJSONSchema = (t11, i2, r2) => l.customProcessor(e10, t11, i2, r2);
  });
  function i_(e10) {
    let t10 = new s.$ZodCheck({ check: "custom" });
    return t10._zod.check = e10, t10;
  }
  function i$(e10, t10) {
    return a._custom(ig, e10 ?? (() => true), t10);
  }
  function iy(e10, t10 = {}) {
    return a._refine(ig, e10, t10);
  }
  function ih(e10, t10) {
    return a._superRefine(e10, t10);
  }
  let ib = a.describe, ix = a.meta;
  function ik(e10, t10 = {}) {
    let i2 = new ig({ type: "custom", check: "custom", fn: (t11) => t11 instanceof e10, abort: true, ...u.util.normalizeParams(t10) });
    return i2._zod.bag.Class = e10, i2._zod.check = (t11) => {
      t11.value instanceof e10 || t11.issues.push({ code: "invalid_type", expected: e10.name, input: t11.value, inst: i2, path: [...i2._zod.def.path ?? []] });
    }, i2;
  }
  let iw = (...e10) => a._stringbool({ Codec: ie, Boolean: eq, String: V }, ...e10);
  function iI(e10) {
    let t10 = id(() => t_([K(e10), eJ(), eY(), e8(), td(t10), tz(K(), t10)]));
    return t10;
  }
  function iZ(e10, t10) {
    return new ir({ type: "pipe", in: tB(e10), out: t10 });
  }
}, 894320, 153563, 873885, (e) => {
  "use strict";
  var t = e.i(2108), i = e.i(69547);
  try {
    var r = "u" > typeof window ? window : e.g;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let n = (e2) => e2 ? RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e2}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, a = n(4), o = n(6), s = n(7), u = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u, l = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", d = RegExp(`^${l}$`);
  function c(e2) {
    let t2 = "(?:[01]\\d|2[0-3]):[0-5]\\d";
    return "number" == typeof e2.precision ? -1 === e2.precision ? `${t2}` : 0 === e2.precision ? `${t2}:[0-5]\\d` : `${t2}:[0-5]\\d\\.\\d{${e2.precision}}` : `${t2}(?::[0-5]\\d(?:\\.\\d+)?)?`;
  }
  let m = /^-?\d+$/, f = /^[^A-Z]*$/, p = /^[^a-z]*$/;
  function v(e2, t2) {
    return RegExp(`^[A-Za-z0-9+/]{${e2}}${t2}$`);
  }
  function g(e2) {
    return RegExp(`^[A-Za-z0-9_-]{${e2}}$`);
  }
  let _ = v(22, "=="), $ = g(22), y = v(27, "="), h = g(27), b = v(43, "="), x = g(43), k = v(64, ""), w = g(64), I = v(86, "=="), Z = g(86);
  e.s(["base64", 0, /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, "base64url", 0, /^[A-Za-z0-9_-]*$/, "bigint", 0, /^-?\d+n?$/, "boolean", 0, /^(?:true|false)$/i, "browserEmail", 0, /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, "cidrv4", 0, /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, "cidrv6", 0, /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, "cuid", 0, /^[cC][0-9a-z]{6,}$/, "cuid2", 0, /^[0-9a-z]+$/, "date", 0, d, "datetime", 0, function(e2) {
    let t2 = c({ precision: e2.precision }), i2 = ["Z"];
    e2.local && i2.push(""), e2.offset && i2.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
    let r2 = `${t2}(?:${i2.join("|")})`;
    return RegExp(`^${l}T(?:${r2})$`);
  }, "domain", 0, /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/, "duration", 0, /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, "e164", 0, /^\+[1-9]\d{6,14}$/, "email", 0, /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, "emoji", 0, function() {
    return RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u");
  }, "extendedDuration", 0, /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, "guid", 0, /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, "hex", 0, /^[0-9a-fA-F]*$/, "hostname", 0, /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, "html5Email", 0, /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, "httpProtocol", 0, /^https?$/, "idnEmail", 0, u, "integer", 0, m, "ipv4", 0, /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, "ipv6", 0, /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, "ksuid", 0, /^[A-Za-z0-9]{27}$/, "lowercase", 0, f, "mac", 0, (e2) => {
    let t2 = i.escapeRegex(e2 ?? ":");
    return RegExp(`^(?:[0-9A-F]{2}${t2}){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}${t2}){5}[0-9a-f]{2}$`);
  }, "md5_base64", 0, _, "md5_base64url", 0, $, "md5_hex", 0, /^[0-9a-fA-F]{32}$/, "nanoid", 0, /^[a-zA-Z0-9_-]{21}$/, "null", 0, /^null$/i, "number", 0, /^-?\d+(?:\.\d+)?$/, "rfc5322Email", 0, /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "sha1_base64", 0, y, "sha1_base64url", 0, h, "sha1_hex", 0, /^[0-9a-fA-F]{40}$/, "sha256_base64", 0, b, "sha256_base64url", 0, x, "sha256_hex", 0, /^[0-9a-fA-F]{64}$/, "sha384_base64", 0, k, "sha384_base64url", 0, w, "sha384_hex", 0, /^[0-9a-fA-F]{96}$/, "sha512_base64", 0, I, "sha512_base64url", 0, Z, "sha512_hex", 0, /^[0-9a-fA-F]{128}$/, "string", 0, (e2) => {
    let t2 = e2 ? `[\\s\\S]{${e2?.minimum ?? 0},${e2?.maximum ?? ""}}` : "[\\s\\S]*";
    return RegExp(`^${t2}$`);
  }, "time", 0, function(e2) {
    return RegExp(`^${c(e2)}$`);
  }, "ulid", 0, /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, "undefined", 0, /^undefined$/i, "unicodeEmail", 0, u, "uppercase", 0, p, "uuid", 0, n, "uuid4", 0, a, "uuid6", 0, o, "uuid7", 0, s, "xid", 0, /^[0-9a-vA-V]{20}$/], 153563);
  try {
    var z = "u" > typeof window ? window : e.g;
    z._sentryModuleMetadata = z._sentryModuleMetadata || {}, z._sentryModuleMetadata[new z.Error().stack] = Object.assign({}, z._sentryModuleMetadata[new z.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let S = t.$constructor("$ZodCheck", (e2, t2) => {
    var i2;
    e2._zod ?? (e2._zod = {}), e2._zod.def = t2, (i2 = e2._zod).onattach ?? (i2.onattach = []);
  }), P = { number: "number", bigint: "bigint", object: "date" }, E = t.$constructor("$ZodCheckLessThan", (e2, t2) => {
    S.init(e2, t2);
    let i2 = P[typeof t2.value];
    e2._zod.onattach.push((e3) => {
      let i3 = e3._zod.bag, r2 = (t2.inclusive ? i3.maximum : i3.exclusiveMaximum) ?? 1 / 0;
      t2.value < r2 && (t2.inclusive ? i3.maximum = t2.value : i3.exclusiveMaximum = t2.value);
    }), e2._zod.check = (r2) => {
      (t2.inclusive ? r2.value <= t2.value : r2.value < t2.value) || r2.issues.push({ origin: i2, code: "too_big", maximum: "object" == typeof t2.value ? t2.value.getTime() : t2.value, input: r2.value, inclusive: t2.inclusive, inst: e2, continue: !t2.abort });
    };
  }), M = t.$constructor("$ZodCheckGreaterThan", (e2, t2) => {
    S.init(e2, t2);
    let i2 = P[typeof t2.value];
    e2._zod.onattach.push((e3) => {
      let i3 = e3._zod.bag, r2 = (t2.inclusive ? i3.minimum : i3.exclusiveMinimum) ?? -1 / 0;
      t2.value > r2 && (t2.inclusive ? i3.minimum = t2.value : i3.exclusiveMinimum = t2.value);
    }), e2._zod.check = (r2) => {
      (t2.inclusive ? r2.value >= t2.value : r2.value > t2.value) || r2.issues.push({ origin: i2, code: "too_small", minimum: "object" == typeof t2.value ? t2.value.getTime() : t2.value, input: r2.value, inclusive: t2.inclusive, inst: e2, continue: !t2.abort });
    };
  }), O = t.$constructor("$ZodCheckMultipleOf", (e2, t2) => {
    S.init(e2, t2), e2._zod.onattach.push((e3) => {
      var i2;
      (i2 = e3._zod.bag).multipleOf ?? (i2.multipleOf = t2.value);
    }), e2._zod.check = (r2) => {
      if (typeof r2.value != typeof t2.value) throw Error("Cannot mix number and bigint in multiple_of check.");
      ("bigint" == typeof r2.value ? r2.value % t2.value === BigInt(0) : 0 === i.floatSafeRemainder(r2.value, t2.value)) || r2.issues.push({ origin: typeof r2.value, code: "not_multiple_of", divisor: t2.value, input: r2.value, inst: e2, continue: !t2.abort });
    };
  }), U = t.$constructor("$ZodCheckNumberFormat", (e2, t2) => {
    S.init(e2, t2), t2.format = t2.format || "float64";
    let r2 = t2.format?.includes("int"), n2 = r2 ? "int" : "number", [a2, o2] = i.NUMBER_FORMAT_RANGES[t2.format];
    e2._zod.onattach.push((e3) => {
      let i2 = e3._zod.bag;
      i2.format = t2.format, i2.minimum = a2, i2.maximum = o2, r2 && (i2.pattern = m);
    }), e2._zod.check = (i2) => {
      let s2 = i2.value;
      if (r2) {
        if (!Number.isInteger(s2)) return void i2.issues.push({ expected: n2, format: t2.format, code: "invalid_type", continue: false, input: s2, inst: e2 });
        if (!Number.isSafeInteger(s2)) return void (s2 > 0 ? i2.issues.push({ input: s2, code: "too_big", maximum: Number.MAX_SAFE_INTEGER, note: "Integers must be within the safe integer range.", inst: e2, origin: n2, inclusive: true, continue: !t2.abort }) : i2.issues.push({ input: s2, code: "too_small", minimum: Number.MIN_SAFE_INTEGER, note: "Integers must be within the safe integer range.", inst: e2, origin: n2, inclusive: true, continue: !t2.abort }));
      }
      s2 < a2 && i2.issues.push({ origin: "number", input: s2, code: "too_small", minimum: a2, inclusive: true, inst: e2, continue: !t2.abort }), s2 > o2 && i2.issues.push({ origin: "number", input: s2, code: "too_big", maximum: o2, inclusive: true, inst: e2, continue: !t2.abort });
    };
  }), j = t.$constructor("$ZodCheckBigIntFormat", (e2, t2) => {
    S.init(e2, t2);
    let [r2, n2] = i.BIGINT_FORMAT_RANGES[t2.format];
    e2._zod.onattach.push((e3) => {
      let i2 = e3._zod.bag;
      i2.format = t2.format, i2.minimum = r2, i2.maximum = n2;
    }), e2._zod.check = (i2) => {
      let a2 = i2.value;
      a2 < r2 && i2.issues.push({ origin: "bigint", input: a2, code: "too_small", minimum: r2, inclusive: true, inst: e2, continue: !t2.abort }), a2 > n2 && i2.issues.push({ origin: "bigint", input: a2, code: "too_big", maximum: n2, inclusive: true, inst: e2, continue: !t2.abort });
    };
  }), D = t.$constructor("$ZodCheckMaxSize", (e2, t2) => {
    var r2;
    S.init(e2, t2), (r2 = e2._zod.def).when ?? (r2.when = (e3) => {
      let t3 = e3.value;
      return !i.nullish(t3) && void 0 !== t3.size;
    }), e2._zod.onattach.push((e3) => {
      let i2 = e3._zod.bag.maximum ?? 1 / 0;
      t2.maximum < i2 && (e3._zod.bag.maximum = t2.maximum);
    }), e2._zod.check = (r3) => {
      let n2 = r3.value;
      n2.size <= t2.maximum || r3.issues.push({ origin: i.getSizableOrigin(n2), code: "too_big", maximum: t2.maximum, inclusive: true, input: n2, inst: e2, continue: !t2.abort });
    };
  }), N = t.$constructor("$ZodCheckMinSize", (e2, t2) => {
    var r2;
    S.init(e2, t2), (r2 = e2._zod.def).when ?? (r2.when = (e3) => {
      let t3 = e3.value;
      return !i.nullish(t3) && void 0 !== t3.size;
    }), e2._zod.onattach.push((e3) => {
      let i2 = e3._zod.bag.minimum ?? -1 / 0;
      t2.minimum > i2 && (e3._zod.bag.minimum = t2.minimum);
    }), e2._zod.check = (r3) => {
      let n2 = r3.value;
      n2.size >= t2.minimum || r3.issues.push({ origin: i.getSizableOrigin(n2), code: "too_small", minimum: t2.minimum, inclusive: true, input: n2, inst: e2, continue: !t2.abort });
    };
  }), T = t.$constructor("$ZodCheckSizeEquals", (e2, t2) => {
    var r2;
    S.init(e2, t2), (r2 = e2._zod.def).when ?? (r2.when = (e3) => {
      let t3 = e3.value;
      return !i.nullish(t3) && void 0 !== t3.size;
    }), e2._zod.onattach.push((e3) => {
      let i2 = e3._zod.bag;
      i2.minimum = t2.size, i2.maximum = t2.size, i2.size = t2.size;
    }), e2._zod.check = (r3) => {
      let n2 = r3.value, a2 = n2.size;
      if (a2 === t2.size) return;
      let o2 = a2 > t2.size;
      r3.issues.push({ origin: i.getSizableOrigin(n2), ...o2 ? { code: "too_big", maximum: t2.size } : { code: "too_small", minimum: t2.size }, inclusive: true, exact: true, input: r3.value, inst: e2, continue: !t2.abort });
    };
  }), A = t.$constructor("$ZodCheckMaxLength", (e2, t2) => {
    var r2;
    S.init(e2, t2), (r2 = e2._zod.def).when ?? (r2.when = (e3) => {
      let t3 = e3.value;
      return !i.nullish(t3) && void 0 !== t3.length;
    }), e2._zod.onattach.push((e3) => {
      let i2 = e3._zod.bag.maximum ?? 1 / 0;
      t2.maximum < i2 && (e3._zod.bag.maximum = t2.maximum);
    }), e2._zod.check = (r3) => {
      let n2 = r3.value;
      if (n2.length <= t2.maximum) return;
      let a2 = i.getLengthableOrigin(n2);
      r3.issues.push({ origin: a2, code: "too_big", maximum: t2.maximum, inclusive: true, input: n2, inst: e2, continue: !t2.abort });
    };
  }), L = t.$constructor("$ZodCheckMinLength", (e2, t2) => {
    var r2;
    S.init(e2, t2), (r2 = e2._zod.def).when ?? (r2.when = (e3) => {
      let t3 = e3.value;
      return !i.nullish(t3) && void 0 !== t3.length;
    }), e2._zod.onattach.push((e3) => {
      let i2 = e3._zod.bag.minimum ?? -1 / 0;
      t2.minimum > i2 && (e3._zod.bag.minimum = t2.minimum);
    }), e2._zod.check = (r3) => {
      let n2 = r3.value;
      if (n2.length >= t2.minimum) return;
      let a2 = i.getLengthableOrigin(n2);
      r3.issues.push({ origin: a2, code: "too_small", minimum: t2.minimum, inclusive: true, input: n2, inst: e2, continue: !t2.abort });
    };
  }), C = t.$constructor("$ZodCheckLengthEquals", (e2, t2) => {
    var r2;
    S.init(e2, t2), (r2 = e2._zod.def).when ?? (r2.when = (e3) => {
      let t3 = e3.value;
      return !i.nullish(t3) && void 0 !== t3.length;
    }), e2._zod.onattach.push((e3) => {
      let i2 = e3._zod.bag;
      i2.minimum = t2.length, i2.maximum = t2.length, i2.length = t2.length;
    }), e2._zod.check = (r3) => {
      let n2 = r3.value, a2 = n2.length;
      if (a2 === t2.length) return;
      let o2 = i.getLengthableOrigin(n2), s2 = a2 > t2.length;
      r3.issues.push({ origin: o2, ...s2 ? { code: "too_big", maximum: t2.length } : { code: "too_small", minimum: t2.length }, inclusive: true, exact: true, input: r3.value, inst: e2, continue: !t2.abort });
    };
  }), R = t.$constructor("$ZodCheckStringFormat", (e2, t2) => {
    var i2, r2;
    S.init(e2, t2), e2._zod.onattach.push((e3) => {
      let i3 = e3._zod.bag;
      i3.format = t2.format, t2.pattern && (i3.patterns ?? (i3.patterns = /* @__PURE__ */ new Set()), i3.patterns.add(t2.pattern));
    }), t2.pattern ? (i2 = e2._zod).check ?? (i2.check = (i3) => {
      t2.pattern.lastIndex = 0, t2.pattern.test(i3.value) || i3.issues.push({ origin: "string", code: "invalid_format", format: t2.format, input: i3.value, ...t2.pattern ? { pattern: t2.pattern.toString() } : {}, inst: e2, continue: !t2.abort });
    }) : (r2 = e2._zod).check ?? (r2.check = () => {
    });
  }), B = t.$constructor("$ZodCheckRegex", (e2, t2) => {
    R.init(e2, t2), e2._zod.check = (i2) => {
      t2.pattern.lastIndex = 0, t2.pattern.test(i2.value) || i2.issues.push({ origin: "string", code: "invalid_format", format: "regex", input: i2.value, pattern: t2.pattern.toString(), inst: e2, continue: !t2.abort });
    };
  }), J = t.$constructor("$ZodCheckLowerCase", (e2, t2) => {
    t2.pattern ?? (t2.pattern = f), R.init(e2, t2);
  }), V = t.$constructor("$ZodCheckUpperCase", (e2, t2) => {
    t2.pattern ?? (t2.pattern = p), R.init(e2, t2);
  }), K = t.$constructor("$ZodCheckIncludes", (e2, t2) => {
    S.init(e2, t2);
    let r2 = i.escapeRegex(t2.includes), n2 = new RegExp("number" == typeof t2.position ? `^.{${t2.position}}${r2}` : r2);
    t2.pattern = n2, e2._zod.onattach.push((e3) => {
      let t3 = e3._zod.bag;
      t3.patterns ?? (t3.patterns = /* @__PURE__ */ new Set()), t3.patterns.add(n2);
    }), e2._zod.check = (i2) => {
      i2.value.includes(t2.includes, t2.position) || i2.issues.push({ origin: "string", code: "invalid_format", format: "includes", includes: t2.includes, input: i2.value, inst: e2, continue: !t2.abort });
    };
  }), F = t.$constructor("$ZodCheckStartsWith", (e2, t2) => {
    S.init(e2, t2);
    let r2 = RegExp(`^${i.escapeRegex(t2.prefix)}.*`);
    t2.pattern ?? (t2.pattern = r2), e2._zod.onattach.push((e3) => {
      let t3 = e3._zod.bag;
      t3.patterns ?? (t3.patterns = /* @__PURE__ */ new Set()), t3.patterns.add(r2);
    }), e2._zod.check = (i2) => {
      i2.value.startsWith(t2.prefix) || i2.issues.push({ origin: "string", code: "invalid_format", format: "starts_with", prefix: t2.prefix, input: i2.value, inst: e2, continue: !t2.abort });
    };
  }), G = t.$constructor("$ZodCheckEndsWith", (e2, t2) => {
    S.init(e2, t2);
    let r2 = RegExp(`.*${i.escapeRegex(t2.suffix)}$`);
    t2.pattern ?? (t2.pattern = r2), e2._zod.onattach.push((e3) => {
      let t3 = e3._zod.bag;
      t3.patterns ?? (t3.patterns = /* @__PURE__ */ new Set()), t3.patterns.add(r2);
    }), e2._zod.check = (i2) => {
      i2.value.endsWith(t2.suffix) || i2.issues.push({ origin: "string", code: "invalid_format", format: "ends_with", suffix: t2.suffix, input: i2.value, inst: e2, continue: !t2.abort });
    };
  });
  function W(e2, t2, r2) {
    e2.issues.length && t2.issues.push(...i.prefixIssues(r2, e2.issues));
  }
  let X = t.$constructor("$ZodCheckProperty", (e2, t2) => {
    S.init(e2, t2), e2._zod.check = (e3) => {
      let i2 = t2.schema._zod.run({ value: e3.value[t2.property], issues: [] }, {});
      if (i2 instanceof Promise) return i2.then((i3) => W(i3, e3, t2.property));
      W(i2, e3, t2.property);
    };
  }), q = t.$constructor("$ZodCheckMimeType", (e2, t2) => {
    S.init(e2, t2);
    let i2 = new Set(t2.mime);
    e2._zod.onattach.push((e3) => {
      e3._zod.bag.mime = t2.mime;
    }), e2._zod.check = (r2) => {
      i2.has(r2.value.type) || r2.issues.push({ code: "invalid_value", values: t2.mime, input: r2.value.type, inst: e2, continue: !t2.abort });
    };
  }), Y = t.$constructor("$ZodCheckOverwrite", (e2, t2) => {
    S.init(e2, t2), e2._zod.check = (e3) => {
      e3.value = t2.tx(e3.value);
    };
  });
  e.s(["$ZodCheck", 0, S, "$ZodCheckBigIntFormat", 0, j, "$ZodCheckEndsWith", 0, G, "$ZodCheckGreaterThan", 0, M, "$ZodCheckIncludes", 0, K, "$ZodCheckLengthEquals", 0, C, "$ZodCheckLessThan", 0, E, "$ZodCheckLowerCase", 0, J, "$ZodCheckMaxLength", 0, A, "$ZodCheckMaxSize", 0, D, "$ZodCheckMimeType", 0, q, "$ZodCheckMinLength", 0, L, "$ZodCheckMinSize", 0, N, "$ZodCheckMultipleOf", 0, O, "$ZodCheckNumberFormat", 0, U, "$ZodCheckOverwrite", 0, Y, "$ZodCheckProperty", 0, X, "$ZodCheckRegex", 0, B, "$ZodCheckSizeEquals", 0, T, "$ZodCheckStartsWith", 0, F, "$ZodCheckStringFormat", 0, R, "$ZodCheckUpperCase", 0, V], 894320);
  try {
    var H = "u" > typeof window ? window : e.g;
    H._sentryModuleMetadata = H._sentryModuleMetadata || {}, H._sentryModuleMetadata[new H.Error().stack] = Object.assign({}, H._sentryModuleMetadata[new H.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["Doc", 0, class {
    constructor(e2 = []) {
      this.content = [], this.indent = 0, this && (this.args = e2);
    }
    indented(e2) {
      this.indent += 1, e2(this), this.indent -= 1;
    }
    write(e2) {
      if ("function" == typeof e2) {
        e2(this, { execution: "sync" }), e2(this, { execution: "async" });
        return;
      }
      let t2 = e2.split("\n").filter((e3) => e3), i2 = Math.min(...t2.map((e3) => e3.length - e3.trimStart().length));
      for (let e3 of t2.map((e4) => e4.slice(i2)).map((e4) => " ".repeat(2 * this.indent) + e4)) this.content.push(e3);
    }
    compile() {
      return Function(...this?.args, [...(this?.content ?? [""]).map((e2) => `  ${e2}`)].join("\n"));
    }
  }], 873885);
}, 2108, 69547, (e) => {
  "use strict";
  var t;
  try {
    var i = "u" > typeof window ? window : e.g;
    i._sentryModuleMetadata = i._sentryModuleMetadata || {}, i._sentryModuleMetadata[new i.Error().stack] = Object.assign({}, i._sentryModuleMetadata[new i.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let r = Object.freeze({ status: "aborted" }), n = /* @__PURE__ */ Symbol("zod_brand");
  (t = globalThis).__zod_globalConfig ?? (t.__zod_globalConfig = {});
  let a = globalThis.__zod_globalConfig;
  e.s(["$ZodAsyncError", 0, class extends Error {
    constructor() {
      super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
    }
  }, "$ZodEncodeError", 0, class extends Error {
    constructor(e2) {
      super(`Encountered unidirectional transform during encode: ${e2}`), this.name = "ZodEncodeError";
    }
  }, "$brand", 0, n, "$constructor", 0, function(e2, t2, i2) {
    function r2(i3, r3) {
      if (i3._zod || Object.defineProperty(i3, "_zod", { value: { def: r3, constr: o2, traits: /* @__PURE__ */ new Set() }, enumerable: false }), i3._zod.traits.has(e2)) return;
      i3._zod.traits.add(e2), t2(i3, r3);
      let n3 = o2.prototype, a3 = Object.keys(n3);
      for (let e3 = 0; e3 < a3.length; e3++) {
        let t3 = a3[e3];
        t3 in i3 || (i3[t3] = n3[t3].bind(i3));
      }
    }
    let n2 = i2?.Parent ?? Object;
    class a2 extends n2 {
    }
    function o2(e3) {
      var t3;
      let n3 = i2?.Parent ? new a2() : this;
      for (let i3 of (r2(n3, e3), (t3 = n3._zod).deferred ?? (t3.deferred = []), n3._zod.deferred)) i3();
      return n3;
    }
    return Object.defineProperty(a2, "name", { value: e2 }), Object.defineProperty(o2, "init", { value: r2 }), Object.defineProperty(o2, Symbol.hasInstance, { value: (t3) => !!i2?.Parent && t3 instanceof i2.Parent || t3?._zod?.traits?.has(e2) }), Object.defineProperty(o2, "name", { value: e2 }), o2;
  }, "NEVER", 0, r, "config", 0, function(e2) {
    return e2 && Object.assign(a, e2), a;
  }, "globalConfig", 0, a], 2108);
  try {
    var o = "u" > typeof window ? window : e.g;
    o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[new o.Error().stack] = Object.assign({}, o._sentryModuleMetadata[new o.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function s(e2) {
    return { get value() {
      {
        let t2 = e2();
        return Object.defineProperty(this, "value", { value: t2 }), t2;
      }
    } };
  }
  let u = /* @__PURE__ */ Symbol("evaluating");
  function l(e2, t2, i2) {
    Object.defineProperty(e2, t2, { value: i2, writable: true, enumerable: true, configurable: true });
  }
  function d(...e2) {
    let t2 = {};
    for (let i2 of e2) Object.assign(t2, Object.getOwnPropertyDescriptors(i2));
    return Object.defineProperties({}, t2);
  }
  let c = "captureStackTrace" in Error ? Error.captureStackTrace : (...e2) => {
  };
  function m(e2) {
    return "object" == typeof e2 && null !== e2 && !Array.isArray(e2);
  }
  let f = s(() => {
    if (a.jitless || "u" > typeof navigator && navigator?.userAgent?.includes("Cloudflare")) return false;
    try {
      return Function(""), true;
    } catch (e2) {
      return false;
    }
  });
  function p(e2) {
    if (false === m(e2)) return false;
    let t2 = e2.constructor;
    if (void 0 === t2 || "function" != typeof t2) return true;
    let i2 = t2.prototype;
    return false !== m(i2) && false !== Object.prototype.hasOwnProperty.call(i2, "isPrototypeOf");
  }
  let v = /* @__PURE__ */ new Set(["string", "number", "symbol"]), g = /* @__PURE__ */ new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"]);
  function _(e2, t2, i2) {
    let r2 = new e2._zod.constr(t2 ?? e2._zod.def);
    return (!t2 || i2?.parent) && (r2._zod.parent = e2), r2;
  }
  function $(e2) {
    return "bigint" == typeof e2 ? e2.toString() + "n" : "string" == typeof e2 ? `"${e2}"` : `${e2}`;
  }
  let y = { safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER], int32: [-2147483648, 2147483647], uint32: [0, 4294967295], float32: [-34028234663852886e22, 34028234663852886e22], float64: [-Number.MAX_VALUE, Number.MAX_VALUE] }, h = { int64: [BigInt("-9223372036854775808"), BigInt("9223372036854775807")], uint64: [BigInt(0), BigInt("18446744073709551615")] };
  function b(e2) {
    return "string" == typeof e2 ? e2 : e2?.message;
  }
  function x(e2) {
    let t2 = atob(e2), i2 = new Uint8Array(t2.length);
    for (let e3 = 0; e3 < t2.length; e3++) i2[e3] = t2.charCodeAt(e3);
    return i2;
  }
  function k(e2) {
    let t2 = "";
    for (let i2 = 0; i2 < e2.length; i2++) t2 += String.fromCharCode(e2[i2]);
    return btoa(t2);
  }
  e.s(["BIGINT_FORMAT_RANGES", 0, h, "Class", 0, class {
    constructor(...e2) {
    }
  }, "NUMBER_FORMAT_RANGES", 0, y, "aborted", 0, function(e2, t2 = 0) {
    if (true === e2.aborted) return true;
    for (let i2 = t2; i2 < e2.issues.length; i2++) if (e2.issues[i2]?.continue !== true) return true;
    return false;
  }, "allowsEval", 0, f, "assert", 0, function(e2) {
  }, "assertEqual", 0, function(e2) {
    return e2;
  }, "assertIs", 0, function(e2) {
  }, "assertNever", 0, function(e2) {
    throw Error("Unexpected value in exhaustive check");
  }, "assertNotEqual", 0, function(e2) {
    return e2;
  }, "assignProp", 0, l, "base64ToUint8Array", 0, x, "base64urlToUint8Array", 0, function(e2) {
    let t2 = e2.replace(/-/g, "+").replace(/_/g, "/"), i2 = "=".repeat((4 - t2.length % 4) % 4);
    return x(t2 + i2);
  }, "cached", 0, s, "captureStackTrace", 0, c, "cleanEnum", 0, function(e2) {
    return Object.entries(e2).filter(([e3, t2]) => Number.isNaN(Number.parseInt(e3, 10))).map((e3) => e3[1]);
  }, "cleanRegex", 0, function(e2) {
    let t2 = +!!e2.startsWith("^"), i2 = e2.endsWith("$") ? e2.length - 1 : e2.length;
    return e2.slice(t2, i2);
  }, "clone", 0, _, "cloneDef", 0, function(e2) {
    return d(e2._zod.def);
  }, "createTransparentProxy", 0, function(e2) {
    let t2;
    return new Proxy({}, { get: (i2, r2, n2) => (t2 ?? (t2 = e2()), Reflect.get(t2, r2, n2)), set: (i2, r2, n2, a2) => (t2 ?? (t2 = e2()), Reflect.set(t2, r2, n2, a2)), has: (i2, r2) => (t2 ?? (t2 = e2()), Reflect.has(t2, r2)), deleteProperty: (i2, r2) => (t2 ?? (t2 = e2()), Reflect.deleteProperty(t2, r2)), ownKeys: (i2) => (t2 ?? (t2 = e2()), Reflect.ownKeys(t2)), getOwnPropertyDescriptor: (i2, r2) => (t2 ?? (t2 = e2()), Reflect.getOwnPropertyDescriptor(t2, r2)), defineProperty: (i2, r2, n2) => (t2 ?? (t2 = e2()), Reflect.defineProperty(t2, r2, n2)) });
  }, "defineLazy", 0, function(e2, t2, i2) {
    let r2;
    Object.defineProperty(e2, t2, { get() {
      if (r2 !== u) return void 0 === r2 && (r2 = u, r2 = i2()), r2;
    }, set(i3) {
      Object.defineProperty(e2, t2, { value: i3 });
    }, configurable: true });
  }, "esc", 0, function(e2) {
    return JSON.stringify(e2);
  }, "escapeRegex", 0, function(e2) {
    return e2.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }, "explicitlyAborted", 0, function(e2, t2 = 0) {
    if (true === e2.aborted) return true;
    for (let i2 = t2; i2 < e2.issues.length; i2++) if (e2.issues[i2]?.continue === false) return true;
    return false;
  }, "extend", 0, function(e2, t2) {
    if (!p(t2)) throw Error("Invalid input to extend: expected a plain object");
    let i2 = e2._zod.def.checks;
    if (i2 && i2.length > 0) {
      let i3 = e2._zod.def.shape;
      for (let e3 in t2) if (void 0 !== Object.getOwnPropertyDescriptor(i3, e3)) throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
    }
    let r2 = d(e2._zod.def, { get shape() {
      let i3 = { ...e2._zod.def.shape, ...t2 };
      return l(this, "shape", i3), i3;
    } });
    return _(e2, r2);
  }, "finalizeIssue", 0, function(e2, t2, i2) {
    let r2 = e2.message ? e2.message : b(e2.inst?._zod.def?.error?.(e2)) ?? b(t2?.error?.(e2)) ?? b(i2.customError?.(e2)) ?? b(i2.localeError?.(e2)) ?? "Invalid input", { inst: n2, continue: a2, input: o2, ...s2 } = e2;
    return s2.path ?? (s2.path = []), s2.message = r2, t2?.reportInput && (s2.input = o2), s2;
  }, "floatSafeRemainder", 0, function(e2, t2) {
    let i2 = e2 / t2, r2 = Math.round(i2), n2 = Number.EPSILON * Math.max(Math.abs(i2), 1);
    return Math.abs(i2 - r2) < n2 ? 0 : i2 - r2;
  }, "getElementAtPath", 0, function(e2, t2) {
    return t2 ? t2.reduce((e3, t3) => e3?.[t3], e2) : e2;
  }, "getEnumValues", 0, function(e2) {
    let t2 = Object.values(e2).filter((e3) => "number" == typeof e3);
    return Object.entries(e2).filter(([e3, i2]) => -1 === t2.indexOf(+e3)).map(([e3, t3]) => t3);
  }, "getLengthableOrigin", 0, function(e2) {
    return Array.isArray(e2) ? "array" : "string" == typeof e2 ? "string" : "unknown";
  }, "getParsedType", 0, (e2) => {
    let t2 = typeof e2;
    switch (t2) {
      case "undefined":
        return "undefined";
      case "string":
        return "string";
      case "number":
        return Number.isNaN(e2) ? "nan" : "number";
      case "boolean":
        return "boolean";
      case "function":
        return "function";
      case "bigint":
        return "bigint";
      case "symbol":
        return "symbol";
      case "object":
        if (Array.isArray(e2)) return "array";
        if (null === e2) return "null";
        if (e2.then && "function" == typeof e2.then && e2.catch && "function" == typeof e2.catch) return "promise";
        if ("u" > typeof Map && e2 instanceof Map) return "map";
        if ("u" > typeof Set && e2 instanceof Set) return "set";
        if ("u" > typeof Date && e2 instanceof Date) return "date";
        if ("u" > typeof File && e2 instanceof File) return "file";
        return "object";
      default:
        throw Error(`Unknown data type: ${t2}`);
    }
  }, "getSizableOrigin", 0, function(e2) {
    return e2 instanceof Set ? "set" : e2 instanceof Map ? "map" : e2 instanceof File ? "file" : "unknown";
  }, "hexToUint8Array", 0, function(e2) {
    let t2 = e2.replace(/^0x/, "");
    if (t2.length % 2 != 0) throw Error("Invalid hex string length");
    let i2 = new Uint8Array(t2.length / 2);
    for (let e3 = 0; e3 < t2.length; e3 += 2) i2[e3 / 2] = Number.parseInt(t2.slice(e3, e3 + 2), 16);
    return i2;
  }, "isObject", 0, m, "isPlainObject", 0, p, "issue", 0, function(...e2) {
    let [t2, i2, r2] = e2;
    return "string" == typeof t2 ? { message: t2, code: "custom", input: i2, inst: r2 } : { ...t2 };
  }, "joinValues", 0, function(e2, t2 = "|") {
    return e2.map((e3) => $(e3)).join(t2);
  }, "jsonStringifyReplacer", 0, function(e2, t2) {
    return "bigint" == typeof t2 ? t2.toString() : t2;
  }, "merge", 0, function(e2, t2) {
    if (e2._zod.def.checks?.length) throw Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
    let i2 = d(e2._zod.def, { get shape() {
      let i3 = { ...e2._zod.def.shape, ...t2._zod.def.shape };
      return l(this, "shape", i3), i3;
    }, get catchall() {
      return t2._zod.def.catchall;
    }, checks: t2._zod.def.checks ?? [] });
    return _(e2, i2);
  }, "mergeDefs", 0, d, "normalizeParams", 0, function(e2) {
    if (!e2) return {};
    if ("string" == typeof e2) return { error: () => e2 };
    if (e2?.message !== void 0) {
      if (e2?.error !== void 0) throw Error("Cannot specify both `message` and `error` params");
      e2.error = e2.message;
    }
    return (delete e2.message, "string" == typeof e2.error) ? { ...e2, error: () => e2.error } : e2;
  }, "nullish", 0, function(e2) {
    return null == e2;
  }, "numKeys", 0, function(e2) {
    let t2 = 0;
    for (let i2 in e2) Object.prototype.hasOwnProperty.call(e2, i2) && t2++;
    return t2;
  }, "objectClone", 0, function(e2) {
    return Object.create(Object.getPrototypeOf(e2), Object.getOwnPropertyDescriptors(e2));
  }, "omit", 0, function(e2, t2) {
    let i2 = e2._zod.def, r2 = i2.checks;
    if (r2 && r2.length > 0) throw Error(".omit() cannot be used on object schemas containing refinements");
    let n2 = d(e2._zod.def, { get shape() {
      let r3 = { ...e2._zod.def.shape };
      for (let e3 in t2) {
        if (!(e3 in i2.shape)) throw Error(`Unrecognized key: "${e3}"`);
        t2[e3] && delete r3[e3];
      }
      return l(this, "shape", r3), r3;
    }, checks: [] });
    return _(e2, n2);
  }, "optionalKeys", 0, function(e2) {
    return Object.keys(e2).filter((t2) => "optional" === e2[t2]._zod.optin && "optional" === e2[t2]._zod.optout);
  }, "parsedType", 0, function(e2) {
    let t2 = typeof e2;
    switch (t2) {
      case "number":
        return Number.isNaN(e2) ? "nan" : "number";
      case "object":
        if (null === e2) return "null";
        if (Array.isArray(e2)) return "array";
        if (e2 && Object.getPrototypeOf(e2) !== Object.prototype && "constructor" in e2 && e2.constructor) return e2.constructor.name;
    }
    return t2;
  }, "partial", 0, function(e2, t2, i2) {
    let r2 = t2._zod.def.checks;
    if (r2 && r2.length > 0) throw Error(".partial() cannot be used on object schemas containing refinements");
    let n2 = d(t2._zod.def, { get shape() {
      let r3 = t2._zod.def.shape, n3 = { ...r3 };
      if (i2) for (let t3 in i2) {
        if (!(t3 in r3)) throw Error(`Unrecognized key: "${t3}"`);
        i2[t3] && (n3[t3] = e2 ? new e2({ type: "optional", innerType: r3[t3] }) : r3[t3]);
      }
      else for (let t3 in r3) n3[t3] = e2 ? new e2({ type: "optional", innerType: r3[t3] }) : r3[t3];
      return l(this, "shape", n3), n3;
    }, checks: [] });
    return _(t2, n2);
  }, "pick", 0, function(e2, t2) {
    let i2 = e2._zod.def, r2 = i2.checks;
    if (r2 && r2.length > 0) throw Error(".pick() cannot be used on object schemas containing refinements");
    let n2 = d(e2._zod.def, { get shape() {
      let e3 = {};
      for (let r3 in t2) {
        if (!(r3 in i2.shape)) throw Error(`Unrecognized key: "${r3}"`);
        t2[r3] && (e3[r3] = i2.shape[r3]);
      }
      return l(this, "shape", e3), e3;
    }, checks: [] });
    return _(e2, n2);
  }, "prefixIssues", 0, function(e2, t2) {
    return t2.map((t3) => (t3.path ?? (t3.path = []), t3.path.unshift(e2), t3));
  }, "primitiveTypes", 0, g, "promiseAllObject", 0, function(e2) {
    let t2 = Object.keys(e2);
    return Promise.all(t2.map((t3) => e2[t3])).then((e3) => {
      let i2 = {};
      for (let r2 = 0; r2 < t2.length; r2++) i2[t2[r2]] = e3[r2];
      return i2;
    });
  }, "propertyKeyTypes", 0, v, "randomString", 0, function(e2 = 10) {
    let t2 = "abcdefghijklmnopqrstuvwxyz", i2 = "";
    for (let r2 = 0; r2 < e2; r2++) i2 += t2[Math.floor(Math.random() * t2.length)];
    return i2;
  }, "required", 0, function(e2, t2, i2) {
    let r2 = d(t2._zod.def, { get shape() {
      let r3 = t2._zod.def.shape, n2 = { ...r3 };
      if (i2) for (let t3 in i2) {
        if (!(t3 in n2)) throw Error(`Unrecognized key: "${t3}"`);
        i2[t3] && (n2[t3] = new e2({ type: "nonoptional", innerType: r3[t3] }));
      }
      else for (let t3 in r3) n2[t3] = new e2({ type: "nonoptional", innerType: r3[t3] });
      return l(this, "shape", n2), n2;
    } });
    return _(t2, r2);
  }, "safeExtend", 0, function(e2, t2) {
    if (!p(t2)) throw Error("Invalid input to safeExtend: expected a plain object");
    let i2 = d(e2._zod.def, { get shape() {
      let i3 = { ...e2._zod.def.shape, ...t2 };
      return l(this, "shape", i3), i3;
    } });
    return _(e2, i2);
  }, "shallowClone", 0, function(e2) {
    return p(e2) ? { ...e2 } : Array.isArray(e2) ? [...e2] : e2 instanceof Map ? new Map(e2) : e2 instanceof Set ? new Set(e2) : e2;
  }, "slugify", 0, function(e2) {
    return e2.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
  }, "stringifyPrimitive", 0, $, "uint8ArrayToBase64", 0, k, "uint8ArrayToBase64url", 0, function(e2) {
    return k(e2).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
  }, "uint8ArrayToHex", 0, function(e2) {
    return Array.from(e2).map((e3) => e3.toString(16).padStart(2, "0")).join("");
  }, "unwrapMessage", 0, b], 69547);
}, 562429, (e) => {
  "use strict";
  e.i(916876);
  var t = e.i(2108), i = e.i(905772), r = e.i(667416), n = e.i(309841), a = e.i(894320), o = e.i(238857), s = e.i(69547), u = e.i(153563), l = e.i(416917), d = e.i(904277), c = e.i(873885), m = e.i(201528), f = e.i(128831), p = e.i(232428);
  try {
    var v = "u" > typeof window ? window : e.g;
    v._sentryModuleMetadata = v._sentryModuleMetadata || {}, v._sentryModuleMetadata[new v.Error().stack] = Object.assign({}, v._sentryModuleMetadata[new v.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var g = "u" > typeof window ? window : e.g;
    g._sentryModuleMetadata = g._sentryModuleMetadata || {}, g._sentryModuleMetadata[new g.Error().stack] = Object.assign({}, g._sentryModuleMetadata[new g.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s([], 266074);
  var _ = e.i(266074);
  e.s(["$ZodAny", () => n.$ZodAny, "$ZodArray", () => n.$ZodArray, "$ZodAsyncError", () => t.$ZodAsyncError, "$ZodBase64", () => n.$ZodBase64, "$ZodBase64URL", () => n.$ZodBase64URL, "$ZodBigInt", () => n.$ZodBigInt, "$ZodBigIntFormat", () => n.$ZodBigIntFormat, "$ZodBoolean", () => n.$ZodBoolean, "$ZodCIDRv4", () => n.$ZodCIDRv4, "$ZodCIDRv6", () => n.$ZodCIDRv6, "$ZodCUID", () => n.$ZodCUID, "$ZodCUID2", () => n.$ZodCUID2, "$ZodCatch", () => n.$ZodCatch, "$ZodCheck", () => a.$ZodCheck, "$ZodCheckBigIntFormat", () => a.$ZodCheckBigIntFormat, "$ZodCheckEndsWith", () => a.$ZodCheckEndsWith, "$ZodCheckGreaterThan", () => a.$ZodCheckGreaterThan, "$ZodCheckIncludes", () => a.$ZodCheckIncludes, "$ZodCheckLengthEquals", () => a.$ZodCheckLengthEquals, "$ZodCheckLessThan", () => a.$ZodCheckLessThan, "$ZodCheckLowerCase", () => a.$ZodCheckLowerCase, "$ZodCheckMaxLength", () => a.$ZodCheckMaxLength, "$ZodCheckMaxSize", () => a.$ZodCheckMaxSize, "$ZodCheckMimeType", () => a.$ZodCheckMimeType, "$ZodCheckMinLength", () => a.$ZodCheckMinLength, "$ZodCheckMinSize", () => a.$ZodCheckMinSize, "$ZodCheckMultipleOf", () => a.$ZodCheckMultipleOf, "$ZodCheckNumberFormat", () => a.$ZodCheckNumberFormat, "$ZodCheckOverwrite", () => a.$ZodCheckOverwrite, "$ZodCheckProperty", () => a.$ZodCheckProperty, "$ZodCheckRegex", () => a.$ZodCheckRegex, "$ZodCheckSizeEquals", () => a.$ZodCheckSizeEquals, "$ZodCheckStartsWith", () => a.$ZodCheckStartsWith, "$ZodCheckStringFormat", () => a.$ZodCheckStringFormat, "$ZodCheckUpperCase", () => a.$ZodCheckUpperCase, "$ZodCodec", () => n.$ZodCodec, "$ZodCustom", () => n.$ZodCustom, "$ZodCustomStringFormat", () => n.$ZodCustomStringFormat, "$ZodDate", () => n.$ZodDate, "$ZodDefault", () => n.$ZodDefault, "$ZodDiscriminatedUnion", () => n.$ZodDiscriminatedUnion, "$ZodE164", () => n.$ZodE164, "$ZodEmail", () => n.$ZodEmail, "$ZodEmoji", () => n.$ZodEmoji, "$ZodEncodeError", () => t.$ZodEncodeError, "$ZodEnum", () => n.$ZodEnum, "$ZodError", () => r.$ZodError, "$ZodExactOptional", () => n.$ZodExactOptional, "$ZodFile", () => n.$ZodFile, "$ZodFunction", () => n.$ZodFunction, "$ZodGUID", () => n.$ZodGUID, "$ZodIPv4", () => n.$ZodIPv4, "$ZodIPv6", () => n.$ZodIPv6, "$ZodISODate", () => n.$ZodISODate, "$ZodISODateTime", () => n.$ZodISODateTime, "$ZodISODuration", () => n.$ZodISODuration, "$ZodISOTime", () => n.$ZodISOTime, "$ZodIntersection", () => n.$ZodIntersection, "$ZodJWT", () => n.$ZodJWT, "$ZodKSUID", () => n.$ZodKSUID, "$ZodLazy", () => n.$ZodLazy, "$ZodLiteral", () => n.$ZodLiteral, "$ZodMAC", () => n.$ZodMAC, "$ZodMap", () => n.$ZodMap, "$ZodNaN", () => n.$ZodNaN, "$ZodNanoID", () => n.$ZodNanoID, "$ZodNever", () => n.$ZodNever, "$ZodNonOptional", () => n.$ZodNonOptional, "$ZodNull", () => n.$ZodNull, "$ZodNullable", () => n.$ZodNullable, "$ZodNumber", () => n.$ZodNumber, "$ZodNumberFormat", () => n.$ZodNumberFormat, "$ZodObject", () => n.$ZodObject, "$ZodObjectJIT", () => n.$ZodObjectJIT, "$ZodOptional", () => n.$ZodOptional, "$ZodPipe", () => n.$ZodPipe, "$ZodPrefault", () => n.$ZodPrefault, "$ZodPreprocess", () => n.$ZodPreprocess, "$ZodPromise", () => n.$ZodPromise, "$ZodReadonly", () => n.$ZodReadonly, "$ZodRealError", () => r.$ZodRealError, "$ZodRecord", () => n.$ZodRecord, "$ZodRegistry", () => d.$ZodRegistry, "$ZodSet", () => n.$ZodSet, "$ZodString", () => n.$ZodString, "$ZodStringFormat", () => n.$ZodStringFormat, "$ZodSuccess", () => n.$ZodSuccess, "$ZodSymbol", () => n.$ZodSymbol, "$ZodTemplateLiteral", () => n.$ZodTemplateLiteral, "$ZodTransform", () => n.$ZodTransform, "$ZodTuple", () => n.$ZodTuple, "$ZodType", () => n.$ZodType, "$ZodULID", () => n.$ZodULID, "$ZodURL", () => n.$ZodURL, "$ZodUUID", () => n.$ZodUUID, "$ZodUndefined", () => n.$ZodUndefined, "$ZodUnion", () => n.$ZodUnion, "$ZodUnknown", () => n.$ZodUnknown, "$ZodVoid", () => n.$ZodVoid, "$ZodXID", () => n.$ZodXID, "$ZodXor", () => n.$ZodXor, "$brand", () => t.$brand, "$constructor", () => t.$constructor, "$input", () => d.$input, "$output", () => d.$output, "Doc", () => c.Doc, "JSONSchema", 0, _, "JSONSchemaGenerator", 0, class {
    get metadataRegistry() {
      return this.ctx.metadataRegistry;
    }
    get target() {
      return this.ctx.target;
    }
    get unrepresentable() {
      return this.ctx.unrepresentable;
    }
    get override() {
      return this.ctx.override;
    }
    get io() {
      return this.ctx.io;
    }
    get counter() {
      return this.ctx.counter;
    }
    set counter(e2) {
      this.ctx.counter = e2;
    }
    get seen() {
      return this.ctx.seen;
    }
    constructor(e2) {
      let t2 = e2?.target ?? "draft-2020-12";
      "draft-4" === t2 && (t2 = "draft-04"), "draft-7" === t2 && (t2 = "draft-07"), this.ctx = (0, f.initializeContext)({ processors: p.allProcessors, target: t2, ...e2?.metadata && { metadata: e2.metadata }, ...e2?.unrepresentable && { unrepresentable: e2.unrepresentable }, ...e2?.override && { override: e2.override }, ...e2?.io && { io: e2.io } });
    }
    process(e2, t2 = { path: [], schemaPath: [] }) {
      return (0, f.process)(e2, this.ctx, t2);
    }
    emit(e2, t2) {
      t2 && (t2.cycles && (this.ctx.cycles = t2.cycles), t2.reused && (this.ctx.reused = t2.reused), t2.external && (this.ctx.external = t2.external)), (0, f.extractDefs)(this.ctx, e2);
      let { "~standard": i2, ...r2 } = (0, f.finalize)(this.ctx, e2);
      return r2;
    }
  }, "NEVER", () => t.NEVER, "TimePrecision", () => m.TimePrecision, "_any", () => m._any, "_array", () => m._array, "_base64", () => m._base64, "_base64url", () => m._base64url, "_bigint", () => m._bigint, "_boolean", () => m._boolean, "_catch", () => m._catch, "_check", () => m._check, "_cidrv4", () => m._cidrv4, "_cidrv6", () => m._cidrv6, "_coercedBigint", () => m._coercedBigint, "_coercedBoolean", () => m._coercedBoolean, "_coercedDate", () => m._coercedDate, "_coercedNumber", () => m._coercedNumber, "_coercedString", () => m._coercedString, "_cuid", () => m._cuid, "_cuid2", () => m._cuid2, "_custom", () => m._custom, "_date", () => m._date, "_decode", () => i._decode, "_decodeAsync", () => i._decodeAsync, "_default", () => m._default, "_discriminatedUnion", () => m._discriminatedUnion, "_e164", () => m._e164, "_email", () => m._email, "_emoji", () => m._emoji, "_encode", () => i._encode, "_encodeAsync", () => i._encodeAsync, "_endsWith", () => m._endsWith, "_enum", () => m._enum, "_file", () => m._file, "_float32", () => m._float32, "_float64", () => m._float64, "_gt", () => m._gt, "_gte", () => m._gte, "_guid", () => m._guid, "_includes", () => m._includes, "_int", () => m._int, "_int32", () => m._int32, "_int64", () => m._int64, "_intersection", () => m._intersection, "_ipv4", () => m._ipv4, "_ipv6", () => m._ipv6, "_isoDate", () => m._isoDate, "_isoDateTime", () => m._isoDateTime, "_isoDuration", () => m._isoDuration, "_isoTime", () => m._isoTime, "_jwt", () => m._jwt, "_ksuid", () => m._ksuid, "_lazy", () => m._lazy, "_length", () => m._length, "_literal", () => m._literal, "_lowercase", () => m._lowercase, "_lt", () => m._lt, "_lte", () => m._lte, "_mac", () => m._mac, "_map", () => m._map, "_max", () => m._max, "_maxLength", () => m._maxLength, "_maxSize", () => m._maxSize, "_mime", () => m._mime, "_min", () => m._min, "_minLength", () => m._minLength, "_minSize", () => m._minSize, "_multipleOf", () => m._multipleOf, "_nan", () => m._nan, "_nanoid", () => m._nanoid, "_nativeEnum", () => m._nativeEnum, "_negative", () => m._negative, "_never", () => m._never, "_nonnegative", () => m._nonnegative, "_nonoptional", () => m._nonoptional, "_nonpositive", () => m._nonpositive, "_normalize", () => m._normalize, "_null", () => m._null, "_nullable", () => m._nullable, "_number", () => m._number, "_optional", () => m._optional, "_overwrite", () => m._overwrite, "_parse", () => i._parse, "_parseAsync", () => i._parseAsync, "_pipe", () => m._pipe, "_positive", () => m._positive, "_promise", () => m._promise, "_property", () => m._property, "_readonly", () => m._readonly, "_record", () => m._record, "_refine", () => m._refine, "_regex", () => m._regex, "_safeDecode", () => i._safeDecode, "_safeDecodeAsync", () => i._safeDecodeAsync, "_safeEncode", () => i._safeEncode, "_safeEncodeAsync", () => i._safeEncodeAsync, "_safeParse", () => i._safeParse, "_safeParseAsync", () => i._safeParseAsync, "_set", () => m._set, "_size", () => m._size, "_slugify", () => m._slugify, "_startsWith", () => m._startsWith, "_string", () => m._string, "_stringFormat", () => m._stringFormat, "_stringbool", () => m._stringbool, "_success", () => m._success, "_superRefine", () => m._superRefine, "_symbol", () => m._symbol, "_templateLiteral", () => m._templateLiteral, "_toLowerCase", () => m._toLowerCase, "_toUpperCase", () => m._toUpperCase, "_transform", () => m._transform, "_trim", () => m._trim, "_tuple", () => m._tuple, "_uint32", () => m._uint32, "_uint64", () => m._uint64, "_ulid", () => m._ulid, "_undefined", () => m._undefined, "_union", () => m._union, "_unknown", () => m._unknown, "_uppercase", () => m._uppercase, "_url", () => m._url, "_uuid", () => m._uuid, "_uuidv4", () => m._uuidv4, "_uuidv6", () => m._uuidv6, "_uuidv7", () => m._uuidv7, "_void", () => m._void, "_xid", () => m._xid, "_xor", () => m._xor, "clone", () => n.clone, "config", () => t.config, "createStandardJSONSchemaMethod", () => f.createStandardJSONSchemaMethod, "createToJSONSchemaMethod", () => f.createToJSONSchemaMethod, "decode", () => i.decode, "decodeAsync", () => i.decodeAsync, "describe", () => m.describe, "encode", () => i.encode, "encodeAsync", () => i.encodeAsync, "extractDefs", () => f.extractDefs, "finalize", () => f.finalize, "flattenError", () => r.flattenError, "formatError", () => r.formatError, "globalConfig", () => t.globalConfig, "globalRegistry", () => d.globalRegistry, "initializeContext", () => f.initializeContext, "isValidBase64", () => n.isValidBase64, "isValidBase64URL", () => n.isValidBase64URL, "isValidJWT", () => n.isValidJWT, "locales", 0, l, "meta", () => m.meta, "parse", () => i.parse, "parseAsync", () => i.parseAsync, "prettifyError", () => r.prettifyError, "process", () => f.process, "regexes", 0, u, "registry", () => d.registry, "safeDecode", () => i.safeDecode, "safeDecodeAsync", () => i.safeDecodeAsync, "safeEncode", () => i.safeEncode, "safeEncodeAsync", () => i.safeEncodeAsync, "safeParse", () => i.safeParse, "safeParseAsync", () => i.safeParseAsync, "toDotPath", () => r.toDotPath, "toJSONSchema", () => p.toJSONSchema, "treeifyError", () => r.treeifyError, "util", 0, s, "version", () => o.version], 562429);
}, 232428, 128831, (e) => {
  "use strict";
  var t = e.i(904277);
  try {
    var i = "u" > typeof window ? window : e.g;
    i._sentryModuleMetadata = i._sentryModuleMetadata || {}, i._sentryModuleMetadata[new i.Error().stack] = Object.assign({}, i._sentryModuleMetadata[new i.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function r(e2) {
    let i2 = e2?.target ?? "draft-2020-12";
    return "draft-4" === i2 && (i2 = "draft-04"), "draft-7" === i2 && (i2 = "draft-07"), { processors: e2.processors ?? {}, metadataRegistry: e2?.metadata ?? t.globalRegistry, target: i2, unrepresentable: e2?.unrepresentable ?? "throw", override: e2?.override ?? (() => {
    }), io: e2?.io ?? "output", counter: 0, seen: /* @__PURE__ */ new Map(), cycles: e2?.cycles ?? "ref", reused: e2?.reused ?? "inline", external: e2?.external ?? void 0 };
  }
  function n(e2, t2, i2 = { path: [], schemaPath: [] }) {
    var r2;
    let a2 = e2._zod.def, o2 = t2.seen.get(e2);
    if (o2) return o2.count++, i2.schemaPath.includes(e2) && (o2.cycle = i2.path), o2.schema;
    let s2 = { schema: {}, count: 1, cycle: void 0, path: i2.path };
    t2.seen.set(e2, s2);
    let u2 = e2._zod.toJSONSchema?.();
    if (u2) s2.schema = u2;
    else {
      let r3 = { ...i2, schemaPath: [...i2.schemaPath, e2], path: i2.path };
      if (e2._zod.processJSONSchema) e2._zod.processJSONSchema(t2, s2.schema, r3);
      else {
        let i3 = s2.schema, n2 = t2.processors[a2.type];
        if (!n2) throw Error(`[toJSONSchema]: Non-representable type encountered: ${a2.type}`);
        n2(e2, t2, i3, r3);
      }
      let o3 = e2._zod.parent;
      o3 && (s2.ref || (s2.ref = o3), n(o3, t2, r3), t2.seen.get(o3).isParent = true);
    }
    let l2 = t2.metadataRegistry.get(e2);
    return l2 && Object.assign(s2.schema, l2), "input" === t2.io && (function e3(t3, i3) {
      let r3 = i3 ?? { seen: /* @__PURE__ */ new Set() };
      if (r3.seen.has(t3)) return false;
      r3.seen.add(t3);
      let n2 = t3._zod.def;
      if ("transform" === n2.type) return true;
      if ("array" === n2.type) return e3(n2.element, r3);
      if ("set" === n2.type) return e3(n2.valueType, r3);
      if ("lazy" === n2.type) return e3(n2.getter(), r3);
      if ("promise" === n2.type || "optional" === n2.type || "nonoptional" === n2.type || "nullable" === n2.type || "readonly" === n2.type || "default" === n2.type || "prefault" === n2.type) return e3(n2.innerType, r3);
      if ("intersection" === n2.type) return e3(n2.left, r3) || e3(n2.right, r3);
      if ("record" === n2.type || "map" === n2.type) return e3(n2.keyType, r3) || e3(n2.valueType, r3);
      if ("pipe" === n2.type) return !!t3._zod.traits.has("$ZodCodec") || e3(n2.in, r3) || e3(n2.out, r3);
      if ("object" === n2.type) {
        for (let t4 in n2.shape) if (e3(n2.shape[t4], r3)) return true;
        return false;
      }
      if ("union" === n2.type) {
        for (let t4 of n2.options) if (e3(t4, r3)) return true;
        return false;
      }
      if ("tuple" === n2.type) {
        for (let t4 of n2.items) if (e3(t4, r3)) return true;
        if (n2.rest && e3(n2.rest, r3)) return true;
      }
      return false;
    })(e2) && (delete s2.schema.examples, delete s2.schema.default), "input" === t2.io && "_prefault" in s2.schema && ((r2 = s2.schema).default ?? (r2.default = s2.schema._prefault)), delete s2.schema._prefault, t2.seen.get(e2).schema;
  }
  function a(e2, t2) {
    let i2 = e2.seen.get(t2);
    if (!i2) throw Error("Unprocessed schema. This is a bug in Zod.");
    let r2 = /* @__PURE__ */ new Map();
    for (let t3 of e2.seen.entries()) {
      let i3 = e2.metadataRegistry.get(t3[0])?.id;
      if (i3) {
        let e3 = r2.get(i3);
        if (e3 && e3 !== t3[0]) throw Error(`Duplicate schema id "${i3}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
        r2.set(i3, t3[0]);
      }
    }
    let n2 = (t3) => {
      if (t3[1].schema.$ref) return;
      let r3 = t3[1], { ref: n3, defId: a2 } = ((t4) => {
        let r4 = "draft-2020-12" === e2.target ? "$defs" : "definitions";
        if (e2.external) {
          let i3 = e2.external.registry.get(t4[0])?.id, n5 = e2.external.uri ?? ((e3) => e3);
          if (i3) return { ref: n5(i3) };
          let a4 = t4[1].defId ?? t4[1].schema.id ?? `schema${e2.counter++}`;
          return t4[1].defId = a4, { defId: a4, ref: `${n5("__shared")}#/${r4}/${a4}` };
        }
        if (t4[1] === i2) return { ref: "#" };
        let n4 = `#/${r4}/`, a3 = t4[1].schema.id ?? `__schema${e2.counter++}`;
        return { defId: a3, ref: n4 + a3 };
      })(t3);
      r3.def = { ...r3.schema }, a2 && (r3.defId = a2);
      let o2 = r3.schema;
      for (let e3 in o2) delete o2[e3];
      o2.$ref = n3;
    };
    if ("throw" === e2.cycles) for (let t3 of e2.seen.entries()) {
      let e3 = t3[1];
      if (e3.cycle) throw Error(`Cycle detected: #/${e3.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
    for (let i3 of e2.seen.entries()) {
      let r3 = i3[1];
      if (t2 === i3[0]) {
        n2(i3);
        continue;
      }
      if (e2.external) {
        let r4 = e2.external.registry.get(i3[0])?.id;
        if (t2 !== i3[0] && r4) {
          n2(i3);
          continue;
        }
      }
      if (e2.metadataRegistry.get(i3[0])?.id || r3.cycle || r3.count > 1 && "ref" === e2.reused) {
        n2(i3);
        continue;
      }
    }
  }
  function o(e2, t2) {
    let i2 = e2.seen.get(t2);
    if (!i2) throw Error("Unprocessed schema. This is a bug in Zod.");
    let r2 = (t3) => {
      let i3 = e2.seen.get(t3);
      if (null === i3.ref) return;
      let n3 = i3.def ?? i3.schema, a3 = { ...n3 }, o3 = i3.ref;
      if (i3.ref = null, o3) {
        r2(o3);
        let i4 = e2.seen.get(o3), s3 = i4.schema;
        if (s3.$ref && ("draft-07" === e2.target || "draft-04" === e2.target || "openapi-3.0" === e2.target) ? (n3.allOf = n3.allOf ?? [], n3.allOf.push(s3)) : Object.assign(n3, s3), Object.assign(n3, a3), t3._zod.parent === o3) for (let e3 in n3) "$ref" !== e3 && "allOf" !== e3 && (e3 in a3 || delete n3[e3]);
        if (s3.$ref && i4.def) for (let e3 in n3) "$ref" !== e3 && "allOf" !== e3 && e3 in i4.def && JSON.stringify(n3[e3]) === JSON.stringify(i4.def[e3]) && delete n3[e3];
      }
      let s2 = t3._zod.parent;
      if (s2 && s2 !== o3) {
        r2(s2);
        let t4 = e2.seen.get(s2);
        if (t4?.schema.$ref && (n3.$ref = t4.schema.$ref, t4.def)) for (let e3 in n3) "$ref" !== e3 && "allOf" !== e3 && e3 in t4.def && JSON.stringify(n3[e3]) === JSON.stringify(t4.def[e3]) && delete n3[e3];
      }
      e2.override({ zodSchema: t3, jsonSchema: n3, path: i3.path ?? [] });
    };
    for (let t3 of [...e2.seen.entries()].reverse()) r2(t3[0]);
    let n2 = {};
    if ("draft-2020-12" === e2.target ? n2.$schema = "https://json-schema.org/draft/2020-12/schema" : "draft-07" === e2.target ? n2.$schema = "http://json-schema.org/draft-07/schema#" : "draft-04" === e2.target ? n2.$schema = "http://json-schema.org/draft-04/schema#" : e2.target, e2.external?.uri) {
      let i3 = e2.external.registry.get(t2)?.id;
      if (!i3) throw Error("Schema is missing an `id` property");
      n2.$id = e2.external.uri(i3);
    }
    Object.assign(n2, i2.def ?? i2.schema);
    let a2 = e2.metadataRegistry.get(t2)?.id;
    void 0 !== a2 && n2.id === a2 && delete n2.id;
    let o2 = e2.external?.defs ?? {};
    for (let t3 of e2.seen.entries()) {
      let e3 = t3[1];
      e3.def && e3.defId && (e3.def.id === e3.defId && delete e3.def.id, o2[e3.defId] = e3.def);
    }
    e2.external || Object.keys(o2).length > 0 && ("draft-2020-12" === e2.target ? n2.$defs = o2 : n2.definitions = o2);
    try {
      let i3 = JSON.parse(JSON.stringify(n2));
      return Object.defineProperty(i3, "~standard", { value: { ...t2["~standard"], jsonSchema: { input: s(t2, "input", e2.processors), output: s(t2, "output", e2.processors) } }, enumerable: false, writable: false }), i3;
    } catch (e3) {
      throw Error("Error converting schema to JSON.");
    }
  }
  let s = (e2, t2, i2 = {}) => (s2) => {
    let { libraryOptions: u2, target: l2 } = s2 ?? {}, d2 = r({ ...u2 ?? {}, target: l2, io: t2, processors: i2 });
    return n(e2, d2), a(d2, e2), o(d2, e2);
  };
  e.s(["createStandardJSONSchemaMethod", 0, s, "createToJSONSchemaMethod", 0, (e2, t2 = {}) => (i2) => {
    let s2 = r({ ...i2, processors: t2 });
    return n(e2, s2), a(s2, e2), o(s2, e2);
  }, "extractDefs", 0, a, "finalize", 0, o, "initializeContext", 0, r, "process", 0, n], 128831);
  var u = e.i(69547);
  try {
    var l = "u" > typeof window ? window : e.g;
    l._sentryModuleMetadata = l._sentryModuleMetadata || {}, l._sentryModuleMetadata[new l.Error().stack] = Object.assign({}, l._sentryModuleMetadata[new l.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let d = { guid: "uuid", url: "uri", datetime: "date-time", json_string: "json-string", regex: "" }, c = (e2, t2, i2, r2) => {
    i2.type = "string";
    let { minimum: n2, maximum: a2, format: o2, patterns: s2, contentEncoding: u2 } = e2._zod.bag;
    if ("number" == typeof n2 && (i2.minLength = n2), "number" == typeof a2 && (i2.maxLength = a2), o2 && (i2.format = d[o2] ?? o2, "" === i2.format && delete i2.format, "time" === o2 && delete i2.format), u2 && (i2.contentEncoding = u2), s2 && s2.size > 0) {
      let e3 = [...s2];
      1 === e3.length ? i2.pattern = e3[0].source : e3.length > 1 && (i2.allOf = [...e3.map((e4) => ({ ..."draft-07" === t2.target || "draft-04" === t2.target || "openapi-3.0" === t2.target ? { type: "string" } : {}, pattern: e4.source }))]);
    }
  }, m = (e2, t2, i2, r2) => {
    let { minimum: n2, maximum: a2, format: o2, multipleOf: s2, exclusiveMaximum: u2, exclusiveMinimum: l2 } = e2._zod.bag;
    "string" == typeof o2 && o2.includes("int") ? i2.type = "integer" : i2.type = "number";
    let d2 = "number" == typeof l2 && l2 >= (n2 ?? -1 / 0), c2 = "number" == typeof u2 && u2 <= (a2 ?? 1 / 0), m2 = "draft-04" === t2.target || "openapi-3.0" === t2.target;
    d2 ? m2 ? (i2.minimum = l2, i2.exclusiveMinimum = true) : i2.exclusiveMinimum = l2 : "number" == typeof n2 && (i2.minimum = n2), c2 ? m2 ? (i2.maximum = u2, i2.exclusiveMaximum = true) : i2.exclusiveMaximum = u2 : "number" == typeof a2 && (i2.maximum = a2), "number" == typeof s2 && (i2.multipleOf = s2);
  }, f = (e2, t2, i2, r2) => {
    i2.type = "boolean";
  }, p = (e2, t2, i2, r2) => {
    if ("throw" === t2.unrepresentable) throw Error("BigInt cannot be represented in JSON Schema");
  }, v = (e2, t2, i2, r2) => {
    if ("throw" === t2.unrepresentable) throw Error("Symbols cannot be represented in JSON Schema");
  }, g = (e2, t2, i2, r2) => {
    "openapi-3.0" === t2.target ? (i2.type = "string", i2.nullable = true, i2.enum = [null]) : i2.type = "null";
  }, _ = (e2, t2, i2, r2) => {
    if ("throw" === t2.unrepresentable) throw Error("Undefined cannot be represented in JSON Schema");
  }, $ = (e2, t2, i2, r2) => {
    if ("throw" === t2.unrepresentable) throw Error("Void cannot be represented in JSON Schema");
  }, y = (e2, t2, i2, r2) => {
    i2.not = {};
  }, h = (e2, t2, i2, r2) => {
  }, b = (e2, t2, i2, r2) => {
  }, x = (e2, t2, i2, r2) => {
    if ("throw" === t2.unrepresentable) throw Error("Date cannot be represented in JSON Schema");
  }, k = (e2, t2, i2, r2) => {
    let n2 = e2._zod.def, a2 = (0, u.getEnumValues)(n2.entries);
    a2.every((e3) => "number" == typeof e3) && (i2.type = "number"), a2.every((e3) => "string" == typeof e3) && (i2.type = "string"), i2.enum = a2;
  }, w = (e2, t2, i2, r2) => {
    let n2 = e2._zod.def, a2 = [];
    for (let e3 of n2.values) if (void 0 === e3) {
      if ("throw" === t2.unrepresentable) throw Error("Literal `undefined` cannot be represented in JSON Schema");
    } else if ("bigint" == typeof e3) if ("throw" === t2.unrepresentable) throw Error("BigInt literals cannot be represented in JSON Schema");
    else a2.push(Number(e3));
    else a2.push(e3);
    if (0 === a2.length) ;
    else if (1 === a2.length) {
      let e3 = a2[0];
      i2.type = null === e3 ? "null" : typeof e3, "draft-04" === t2.target || "openapi-3.0" === t2.target ? i2.enum = [e3] : i2.const = e3;
    } else a2.every((e3) => "number" == typeof e3) && (i2.type = "number"), a2.every((e3) => "string" == typeof e3) && (i2.type = "string"), a2.every((e3) => "boolean" == typeof e3) && (i2.type = "boolean"), a2.every((e3) => null === e3) && (i2.type = "null"), i2.enum = a2;
  }, I = (e2, t2, i2, r2) => {
    if ("throw" === t2.unrepresentable) throw Error("NaN cannot be represented in JSON Schema");
  }, Z = (e2, t2, i2, r2) => {
    let n2 = e2._zod.pattern;
    if (!n2) throw Error("Pattern not found in template literal");
    i2.type = "string", i2.pattern = n2.source;
  }, z = (e2, t2, i2, r2) => {
    let n2 = { type: "string", format: "binary", contentEncoding: "binary" }, { minimum: a2, maximum: o2, mime: s2 } = e2._zod.bag;
    void 0 !== a2 && (n2.minLength = a2), void 0 !== o2 && (n2.maxLength = o2), s2 ? 1 === s2.length ? (n2.contentMediaType = s2[0], Object.assign(i2, n2)) : (Object.assign(i2, n2), i2.anyOf = s2.map((e3) => ({ contentMediaType: e3 }))) : Object.assign(i2, n2);
  }, S = (e2, t2, i2, r2) => {
    i2.type = "boolean";
  }, P = (e2, t2, i2, r2) => {
    if ("throw" === t2.unrepresentable) throw Error("Custom types cannot be represented in JSON Schema");
  }, E = (e2, t2, i2, r2) => {
    if ("throw" === t2.unrepresentable) throw Error("Function types cannot be represented in JSON Schema");
  }, M = (e2, t2, i2, r2) => {
    if ("throw" === t2.unrepresentable) throw Error("Transforms cannot be represented in JSON Schema");
  }, O = (e2, t2, i2, r2) => {
    if ("throw" === t2.unrepresentable) throw Error("Map cannot be represented in JSON Schema");
  }, U = (e2, t2, i2, r2) => {
    if ("throw" === t2.unrepresentable) throw Error("Set cannot be represented in JSON Schema");
  }, j = (e2, t2, i2, r2) => {
    let a2 = e2._zod.def, { minimum: o2, maximum: s2 } = e2._zod.bag;
    "number" == typeof o2 && (i2.minItems = o2), "number" == typeof s2 && (i2.maxItems = s2), i2.type = "array", i2.items = n(a2.element, t2, { ...r2, path: [...r2.path, "items"] });
  }, D = (e2, t2, i2, r2) => {
    let a2 = e2._zod.def;
    i2.type = "object", i2.properties = {};
    let o2 = a2.shape;
    for (let e3 in o2) i2.properties[e3] = n(o2[e3], t2, { ...r2, path: [...r2.path, "properties", e3] });
    let s2 = new Set([...new Set(Object.keys(o2))].filter((e3) => {
      let i3 = a2.shape[e3]._zod;
      return "input" === t2.io ? void 0 === i3.optin : void 0 === i3.optout;
    }));
    s2.size > 0 && (i2.required = Array.from(s2)), a2.catchall?._zod.def.type === "never" ? i2.additionalProperties = false : a2.catchall ? a2.catchall && (i2.additionalProperties = n(a2.catchall, t2, { ...r2, path: [...r2.path, "additionalProperties"] })) : "output" === t2.io && (i2.additionalProperties = false);
  }, N = (e2, t2, i2, r2) => {
    let a2 = e2._zod.def, o2 = false === a2.inclusive, s2 = a2.options.map((e3, i3) => n(e3, t2, { ...r2, path: [...r2.path, o2 ? "oneOf" : "anyOf", i3] }));
    o2 ? i2.oneOf = s2 : i2.anyOf = s2;
  }, T = (e2, t2, i2, r2) => {
    let a2 = e2._zod.def, o2 = n(a2.left, t2, { ...r2, path: [...r2.path, "allOf", 0] }), s2 = n(a2.right, t2, { ...r2, path: [...r2.path, "allOf", 1] }), u2 = (e3) => "allOf" in e3 && 1 === Object.keys(e3).length;
    i2.allOf = [...u2(o2) ? o2.allOf : [o2], ...u2(s2) ? s2.allOf : [s2]];
  }, A = (e2, t2, i2, r2) => {
    let a2 = e2._zod.def;
    i2.type = "array";
    let o2 = "draft-2020-12" === t2.target ? "prefixItems" : "items", s2 = "draft-2020-12" === t2.target || "openapi-3.0" === t2.target ? "items" : "additionalItems", u2 = a2.items.map((e3, i3) => n(e3, t2, { ...r2, path: [...r2.path, o2, i3] })), l2 = a2.rest ? n(a2.rest, t2, { ...r2, path: [...r2.path, s2, ..."openapi-3.0" === t2.target ? [a2.items.length] : []] }) : null;
    "draft-2020-12" === t2.target ? (i2.prefixItems = u2, l2 && (i2.items = l2)) : "openapi-3.0" === t2.target ? (i2.items = { anyOf: u2 }, l2 && i2.items.anyOf.push(l2), i2.minItems = u2.length, l2 || (i2.maxItems = u2.length)) : (i2.items = u2, l2 && (i2.additionalItems = l2));
    let { minimum: d2, maximum: c2 } = e2._zod.bag;
    "number" == typeof d2 && (i2.minItems = d2), "number" == typeof c2 && (i2.maxItems = c2);
  }, L = (e2, t2, i2, r2) => {
    let a2 = e2._zod.def;
    i2.type = "object";
    let o2 = a2.keyType, s2 = o2._zod.bag, u2 = s2?.patterns;
    if ("loose" === a2.mode && u2 && u2.size > 0) {
      let e3 = n(a2.valueType, t2, { ...r2, path: [...r2.path, "patternProperties", "*"] });
      for (let t3 of (i2.patternProperties = {}, u2)) i2.patternProperties[t3.source] = e3;
    } else ("draft-07" === t2.target || "draft-2020-12" === t2.target) && (i2.propertyNames = n(a2.keyType, t2, { ...r2, path: [...r2.path, "propertyNames"] })), i2.additionalProperties = n(a2.valueType, t2, { ...r2, path: [...r2.path, "additionalProperties"] });
    let l2 = o2._zod.values;
    if (l2) {
      let e3 = [...l2].filter((e4) => "string" == typeof e4 || "number" == typeof e4);
      e3.length > 0 && (i2.required = e3);
    }
  }, C = (e2, t2, i2, r2) => {
    let a2 = e2._zod.def, o2 = n(a2.innerType, t2, r2), s2 = t2.seen.get(e2);
    "openapi-3.0" === t2.target ? (s2.ref = a2.innerType, i2.nullable = true) : i2.anyOf = [o2, { type: "null" }];
  }, R = (e2, t2, i2, r2) => {
    let a2 = e2._zod.def;
    n(a2.innerType, t2, r2), t2.seen.get(e2).ref = a2.innerType;
  }, B = (e2, t2, i2, r2) => {
    let a2 = e2._zod.def;
    n(a2.innerType, t2, r2), t2.seen.get(e2).ref = a2.innerType, i2.default = JSON.parse(JSON.stringify(a2.defaultValue));
  }, J = (e2, t2, i2, r2) => {
    let a2 = e2._zod.def;
    n(a2.innerType, t2, r2), t2.seen.get(e2).ref = a2.innerType, "input" === t2.io && (i2._prefault = JSON.parse(JSON.stringify(a2.defaultValue)));
  }, V = (e2, t2, i2, r2) => {
    let a2, o2 = e2._zod.def;
    n(o2.innerType, t2, r2), t2.seen.get(e2).ref = o2.innerType;
    try {
      a2 = o2.catchValue(void 0);
    } catch {
      throw Error("Dynamic catch values are not supported in JSON Schema");
    }
    i2.default = a2;
  }, K = (e2, t2, i2, r2) => {
    let a2 = e2._zod.def, o2 = a2.in._zod.traits.has("$ZodTransform"), s2 = "input" === t2.io ? o2 ? a2.out : a2.in : a2.out;
    n(s2, t2, r2), t2.seen.get(e2).ref = s2;
  }, F = (e2, t2, i2, r2) => {
    let a2 = e2._zod.def;
    n(a2.innerType, t2, r2), t2.seen.get(e2).ref = a2.innerType, i2.readOnly = true;
  }, G = (e2, t2, i2, r2) => {
    let a2 = e2._zod.def;
    n(a2.innerType, t2, r2), t2.seen.get(e2).ref = a2.innerType;
  }, W = (e2, t2, i2, r2) => {
    let a2 = e2._zod.def;
    n(a2.innerType, t2, r2), t2.seen.get(e2).ref = a2.innerType;
  }, X = (e2, t2, i2, r2) => {
    let a2 = e2._zod.innerType;
    n(a2, t2, r2), t2.seen.get(e2).ref = a2;
  }, q = { string: c, number: m, boolean: f, bigint: p, symbol: v, null: g, undefined: _, void: $, never: y, any: h, unknown: b, date: x, enum: k, literal: w, nan: I, template_literal: Z, file: z, success: S, custom: P, function: E, transform: M, map: O, set: U, array: j, object: D, union: N, intersection: T, tuple: A, record: L, nullable: C, nonoptional: R, default: B, prefault: J, catch: V, pipe: K, readonly: F, promise: G, optional: W, lazy: X };
  e.s(["allProcessors", 0, q, "anyProcessor", 0, h, "arrayProcessor", 0, j, "bigintProcessor", 0, p, "booleanProcessor", 0, f, "catchProcessor", 0, V, "customProcessor", 0, P, "dateProcessor", 0, x, "defaultProcessor", 0, B, "enumProcessor", 0, k, "fileProcessor", 0, z, "functionProcessor", 0, E, "intersectionProcessor", 0, T, "lazyProcessor", 0, X, "literalProcessor", 0, w, "mapProcessor", 0, O, "nanProcessor", 0, I, "neverProcessor", 0, y, "nonoptionalProcessor", 0, R, "nullProcessor", 0, g, "nullableProcessor", 0, C, "numberProcessor", 0, m, "objectProcessor", 0, D, "optionalProcessor", 0, W, "pipeProcessor", 0, K, "prefaultProcessor", 0, J, "promiseProcessor", 0, G, "readonlyProcessor", 0, F, "recordProcessor", 0, L, "setProcessor", 0, U, "stringProcessor", 0, c, "successProcessor", 0, S, "symbolProcessor", 0, v, "templateLiteralProcessor", 0, Z, "toJSONSchema", 0, function(e2, t2) {
    if ("_idmap" in e2) {
      let i3 = r({ ...t2, processors: q }), s2 = {};
      for (let t3 of e2._idmap.entries()) {
        let [e3, r2] = t3;
        n(r2, i3);
      }
      let u2 = {};
      for (let r2 of (i3.external = { registry: e2, uri: t2?.uri, defs: s2 }, e2._idmap.entries())) {
        let [e3, t3] = r2;
        a(i3, t3), u2[e3] = o(i3, t3);
      }
      return Object.keys(s2).length > 0 && (u2.__shared = { ["draft-2020-12" === i3.target ? "$defs" : "definitions"]: s2 }), { schemas: u2 };
    }
    let i2 = r({ ...t2, processors: q });
    return n(e2, i2), a(i2, e2), o(i2, e2);
  }, "transformProcessor", 0, M, "tupleProcessor", 0, A, "undefinedProcessor", 0, _, "unionProcessor", 0, N, "unknownProcessor", 0, b, "voidProcessor", 0, $], 232428);
}, 905772, 667416, (e) => {
  "use strict";
  var t = e.i(2108), i = e.i(69547);
  try {
    var r = "u" > typeof window ? window : e.g;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let n = (e2, t2) => {
    e2.name = "$ZodError", Object.defineProperty(e2, "_zod", { value: e2._zod, enumerable: false }), Object.defineProperty(e2, "issues", { value: t2, enumerable: false }), e2.message = JSON.stringify(t2, i.jsonStringifyReplacer, 2), Object.defineProperty(e2, "toString", { value: () => e2.message, enumerable: false });
  }, a = (0, t.$constructor)("$ZodError", n), o = (0, t.$constructor)("$ZodError", n, { Parent: Error });
  function s(e2) {
    let t2 = [];
    for (let i2 of e2.map((e3) => "object" == typeof e3 ? e3.key : e3)) "number" == typeof i2 ? t2.push(`[${i2}]`) : "symbol" == typeof i2 ? t2.push(`[${JSON.stringify(String(i2))}]`) : /[^\w$]/.test(i2) ? t2.push(`[${JSON.stringify(i2)}]`) : (t2.length && t2.push("."), t2.push(i2));
    return t2.join("");
  }
  e.s(["$ZodError", 0, a, "$ZodRealError", 0, o, "flattenError", 0, function(e2, t2 = (e3) => e3.message) {
    let i2 = {}, r2 = [];
    for (let n2 of e2.issues) n2.path.length > 0 ? (i2[n2.path[0]] = i2[n2.path[0]] || [], i2[n2.path[0]].push(t2(n2))) : r2.push(t2(n2));
    return { formErrors: r2, fieldErrors: i2 };
  }, "formatError", 0, function(e2, t2 = (e3) => e3.message) {
    let i2 = { _errors: [] }, r2 = (e3, n2 = []) => {
      for (let a2 of e3.issues) if ("invalid_union" === a2.code && a2.errors.length) a2.errors.map((e4) => r2({ issues: e4 }, [...n2, ...a2.path]));
      else if ("invalid_key" === a2.code) r2({ issues: a2.issues }, [...n2, ...a2.path]);
      else if ("invalid_element" === a2.code) r2({ issues: a2.issues }, [...n2, ...a2.path]);
      else {
        let e4 = [...n2, ...a2.path];
        if (0 === e4.length) i2._errors.push(t2(a2));
        else {
          let r3 = i2, n3 = 0;
          for (; n3 < e4.length; ) {
            let i3 = e4[n3];
            n3 === e4.length - 1 ? (r3[i3] = r3[i3] || { _errors: [] }, r3[i3]._errors.push(t2(a2))) : r3[i3] = r3[i3] || { _errors: [] }, r3 = r3[i3], n3++;
          }
        }
      }
    };
    return r2(e2), i2;
  }, "prettifyError", 0, function(e2) {
    let t2 = [];
    for (let i2 of [...e2.issues].sort((e3, t3) => (e3.path ?? []).length - (t3.path ?? []).length)) t2.push(`\u2716 ${i2.message}`), i2.path?.length && t2.push(`  \u2192 at ${s(i2.path)}`);
    return t2.join("\n");
  }, "toDotPath", 0, s, "treeifyError", 0, function(e2, t2 = (e3) => e3.message) {
    let i2 = { errors: [] }, r2 = (e3, n2 = []) => {
      var a2, o2;
      for (let s2 of e3.issues) if ("invalid_union" === s2.code && s2.errors.length) s2.errors.map((e4) => r2({ issues: e4 }, [...n2, ...s2.path]));
      else if ("invalid_key" === s2.code) r2({ issues: s2.issues }, [...n2, ...s2.path]);
      else if ("invalid_element" === s2.code) r2({ issues: s2.issues }, [...n2, ...s2.path]);
      else {
        let e4 = [...n2, ...s2.path];
        if (0 === e4.length) {
          i2.errors.push(t2(s2));
          continue;
        }
        let r3 = i2, u2 = 0;
        for (; u2 < e4.length; ) {
          let i3 = e4[u2], n3 = u2 === e4.length - 1;
          "string" == typeof i3 ? (r3.properties ?? (r3.properties = {}), (a2 = r3.properties)[i3] ?? (a2[i3] = { errors: [] }), r3 = r3.properties[i3]) : (r3.items ?? (r3.items = []), (o2 = r3.items)[i3] ?? (o2[i3] = { errors: [] }), r3 = r3.items[i3]), n3 && r3.errors.push(t2(s2)), u2++;
        }
      }
    };
    return r2(e2), i2;
  }], 667416);
  try {
    var u = "u" > typeof window ? window : e.g;
    u._sentryModuleMetadata = u._sentryModuleMetadata || {}, u._sentryModuleMetadata[new u.Error().stack] = Object.assign({}, u._sentryModuleMetadata[new u.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let l = (e2) => (r2, n2, a2, o2) => {
    let s2 = a2 ? { ...a2, async: false } : { async: false }, u2 = r2._zod.run({ value: n2, issues: [] }, s2);
    if (u2 instanceof Promise) throw new t.$ZodAsyncError();
    if (u2.issues.length) {
      let r3 = new (o2?.Err ?? e2)(u2.issues.map((e3) => i.finalizeIssue(e3, s2, t.config())));
      throw i.captureStackTrace(r3, o2?.callee), r3;
    }
    return u2.value;
  }, d = l(o), c = (e2) => async (r2, n2, a2, o2) => {
    let s2 = a2 ? { ...a2, async: true } : { async: true }, u2 = r2._zod.run({ value: n2, issues: [] }, s2);
    if (u2 instanceof Promise && (u2 = await u2), u2.issues.length) {
      let r3 = new (o2?.Err ?? e2)(u2.issues.map((e3) => i.finalizeIssue(e3, s2, t.config())));
      throw i.captureStackTrace(r3, o2?.callee), r3;
    }
    return u2.value;
  }, m = c(o), f = (e2) => (r2, n2, o2) => {
    let s2 = o2 ? { ...o2, async: false } : { async: false }, u2 = r2._zod.run({ value: n2, issues: [] }, s2);
    if (u2 instanceof Promise) throw new t.$ZodAsyncError();
    return u2.issues.length ? { success: false, error: new (e2 ?? a)(u2.issues.map((e3) => i.finalizeIssue(e3, s2, t.config()))) } : { success: true, data: u2.value };
  }, p = f(o), v = (e2) => async (r2, n2, a2) => {
    let o2 = a2 ? { ...a2, async: true } : { async: true }, s2 = r2._zod.run({ value: n2, issues: [] }, o2);
    return s2 instanceof Promise && (s2 = await s2), s2.issues.length ? { success: false, error: new e2(s2.issues.map((e3) => i.finalizeIssue(e3, o2, t.config()))) } : { success: true, data: s2.value };
  }, g = v(o), _ = (e2) => (t2, i2, r2) => {
    let n2 = r2 ? { ...r2, direction: "backward" } : { direction: "backward" };
    return l(e2)(t2, i2, n2);
  }, $ = _(o), y = (e2) => (t2, i2, r2) => l(e2)(t2, i2, r2), h = y(o), b = (e2) => async (t2, i2, r2) => {
    let n2 = r2 ? { ...r2, direction: "backward" } : { direction: "backward" };
    return c(e2)(t2, i2, n2);
  }, x = b(o), k = (e2) => async (t2, i2, r2) => c(e2)(t2, i2, r2), w = k(o), I = (e2) => (t2, i2, r2) => {
    let n2 = r2 ? { ...r2, direction: "backward" } : { direction: "backward" };
    return f(e2)(t2, i2, n2);
  }, Z = I(o), z = (e2) => (t2, i2, r2) => f(e2)(t2, i2, r2), S = z(o), P = (e2) => async (t2, i2, r2) => {
    let n2 = r2 ? { ...r2, direction: "backward" } : { direction: "backward" };
    return v(e2)(t2, i2, n2);
  }, E = P(o), M = (e2) => async (t2, i2, r2) => v(e2)(t2, i2, r2), O = M(o);
  e.s(["_decode", 0, y, "_decodeAsync", 0, k, "_encode", 0, _, "_encodeAsync", 0, b, "_parse", 0, l, "_parseAsync", 0, c, "_safeDecode", 0, z, "_safeDecodeAsync", 0, M, "_safeEncode", 0, I, "_safeEncodeAsync", 0, P, "_safeParse", 0, f, "_safeParseAsync", 0, v, "decode", 0, h, "decodeAsync", 0, w, "encode", 0, $, "encodeAsync", 0, x, "parse", 0, d, "parseAsync", 0, m, "safeDecode", 0, S, "safeDecodeAsync", 0, O, "safeEncode", 0, Z, "safeEncodeAsync", 0, E, "safeParse", 0, p, "safeParseAsync", 0, g], 905772);
}, 89232, 181503, (e) => {
  "use strict";
  var t = e.i(153563);
  e.s(["regexes", 0, t], 89232);
  var i = e.i(69547);
  e.s(["util", 0, i], 181503);
}, 904277, 201528, (e) => {
  "use strict";
  try {
    var t = "u" > typeof window ? window : e.g;
    t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[new t.Error().stack] = Object.assign({}, t._sentryModuleMetadata[new t.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let i = /* @__PURE__ */ Symbol("ZodOutput"), r = /* @__PURE__ */ Symbol("ZodInput");
  class n {
    constructor() {
      this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
    }
    add(e2, ...t2) {
      let i2 = t2[0];
      return this._map.set(e2, i2), i2 && "object" == typeof i2 && "id" in i2 && this._idmap.set(i2.id, e2), this;
    }
    clear() {
      return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
    }
    remove(e2) {
      let t2 = this._map.get(e2);
      return t2 && "object" == typeof t2 && "id" in t2 && this._idmap.delete(t2.id), this._map.delete(e2), this;
    }
    get(e2) {
      let t2 = e2._zod.parent;
      if (t2) {
        let i2 = { ...this.get(t2) ?? {} };
        delete i2.id;
        let r2 = { ...i2, ...this._map.get(e2) };
        return Object.keys(r2).length ? r2 : void 0;
      }
      return this._map.get(e2);
    }
    has(e2) {
      return this._map.has(e2);
    }
  }
  function a() {
    return new n();
  }
  (s = globalThis).__zod_globalRegistry ?? (s.__zod_globalRegistry = a());
  let o = globalThis.__zod_globalRegistry;
  e.s(["$ZodRegistry", 0, n, "$input", 0, r, "$output", 0, i, "globalRegistry", 0, o, "registry", 0, a], 904277);
  var s, u = e.i(894320), l = e.i(383197), d = e.i(69547);
  try {
    var c = "u" > typeof window ? window : e.g;
    c._sentryModuleMetadata = c._sentryModuleMetadata || {}, c._sentryModuleMetadata[new c.Error().stack] = Object.assign({}, c._sentryModuleMetadata[new c.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function m(e2, t2) {
    return new u.$ZodCheckLessThan({ check: "less_than", ...d.normalizeParams(t2), value: e2, inclusive: false });
  }
  function f(e2, t2) {
    return new u.$ZodCheckLessThan({ check: "less_than", ...d.normalizeParams(t2), value: e2, inclusive: true });
  }
  function p(e2, t2) {
    return new u.$ZodCheckGreaterThan({ check: "greater_than", ...d.normalizeParams(t2), value: e2, inclusive: false });
  }
  function v(e2, t2) {
    return new u.$ZodCheckGreaterThan({ check: "greater_than", ...d.normalizeParams(t2), value: e2, inclusive: true });
  }
  function g(e2) {
    return new u.$ZodCheckOverwrite({ check: "overwrite", tx: e2 });
  }
  function _(e2, t2) {
    let i2 = new u.$ZodCheck({ check: "custom", ...d.normalizeParams(t2) });
    return i2._zod.check = e2, i2;
  }
  e.s(["TimePrecision", 0, { Any: null, Minute: -1, Second: 0, Millisecond: 3, Microsecond: 6 }, "_any", 0, function(e2) {
    return new e2({ type: "any" });
  }, "_array", 0, function(e2, t2, i2) {
    return new e2({ type: "array", element: t2, ...d.normalizeParams(i2) });
  }, "_base64", 0, function(e2, t2) {
    return new e2({ type: "string", format: "base64", check: "string_format", abort: false, ...d.normalizeParams(t2) });
  }, "_base64url", 0, function(e2, t2) {
    return new e2({ type: "string", format: "base64url", check: "string_format", abort: false, ...d.normalizeParams(t2) });
  }, "_bigint", 0, function(e2, t2) {
    return new e2({ type: "bigint", ...d.normalizeParams(t2) });
  }, "_boolean", 0, function(e2, t2) {
    return new e2({ type: "boolean", ...d.normalizeParams(t2) });
  }, "_catch", 0, function(e2, t2, i2) {
    return new e2({ type: "catch", innerType: t2, catchValue: "function" == typeof i2 ? i2 : () => i2 });
  }, "_check", 0, _, "_cidrv4", 0, function(e2, t2) {
    return new e2({ type: "string", format: "cidrv4", check: "string_format", abort: false, ...d.normalizeParams(t2) });
  }, "_cidrv6", 0, function(e2, t2) {
    return new e2({ type: "string", format: "cidrv6", check: "string_format", abort: false, ...d.normalizeParams(t2) });
  }, "_coercedBigint", 0, function(e2, t2) {
    return new e2({ type: "bigint", coerce: true, ...d.normalizeParams(t2) });
  }, "_coercedBoolean", 0, function(e2, t2) {
    return new e2({ type: "boolean", coerce: true, ...d.normalizeParams(t2) });
  }, "_coercedDate", 0, function(e2, t2) {
    return new e2({ type: "date", coerce: true, ...d.normalizeParams(t2) });
  }, "_coercedNumber", 0, function(e2, t2) {
    return new e2({ type: "number", coerce: true, checks: [], ...d.normalizeParams(t2) });
  }, "_coercedString", 0, function(e2, t2) {
    return new e2({ type: "string", coerce: true, ...d.normalizeParams(t2) });
  }, "_cuid", 0, function(e2, t2) {
    return new e2({ type: "string", format: "cuid", check: "string_format", abort: false, ...d.normalizeParams(t2) });
  }, "_cuid2", 0, function(e2, t2) {
    return new e2({ type: "string", format: "cuid2", check: "string_format", abort: false, ...d.normalizeParams(t2) });
  }, "_custom", 0, function(e2, t2, i2) {
    let r2 = d.normalizeParams(i2);
    return r2.abort ?? (r2.abort = true), new e2({ type: "custom", check: "custom", fn: t2, ...r2 });
  }, "_date", 0, function(e2, t2) {
    return new e2({ type: "date", ...d.normalizeParams(t2) });
  }, "_default", 0, function(e2, t2, i2) {
    return new e2({ type: "default", innerType: t2, get defaultValue() {
      return "function" == typeof i2 ? i2() : d.shallowClone(i2);
    } });
  }, "_discriminatedUnion", 0, function(e2, t2, i2, r2) {
    return new e2({ type: "union", options: i2, discriminator: t2, ...d.normalizeParams(r2) });
  }, "_e164", 0, function(e2, t2) {
    return new e2({ type: "string", format: "e164", check: "string_format", abort: false, ...d.normalizeParams(t2) });
  }, "_email", 0, function(e2, t2) {
    return new e2({ type: "string", format: "email", check: "string_format", abort: false, ...d.normalizeParams(t2) });
  }, "_emoji", 0, function(e2, t2) {
    return new e2({ type: "string", format: "emoji", check: "string_format", abort: false, ...d.normalizeParams(t2) });
  }, "_endsWith", 0, function(e2, t2) {
    return new u.$ZodCheckEndsWith({ check: "string_format", format: "ends_with", ...d.normalizeParams(t2), suffix: e2 });
  }, "_enum", 0, function(e2, t2, i2) {
    return new e2({ type: "enum", entries: Array.isArray(t2) ? Object.fromEntries(t2.map((e3) => [e3, e3])) : t2, ...d.normalizeParams(i2) });
  }, "_file", 0, function(e2, t2) {
    return new e2({ type: "file", ...d.normalizeParams(t2) });
  }, "_float32", 0, function(e2, t2) {
    return new e2({ type: "number", check: "number_format", abort: false, format: "float32", ...d.normalizeParams(t2) });
  }, "_float64", 0, function(e2, t2) {
    return new e2({ type: "number", check: "number_format", abort: false, format: "float64", ...d.normalizeParams(t2) });
  }, "_gt", 0, p, "_gte", 0, v, "_guid", 0, function(e2, t2) {
    return new e2({ type: "string", format: "guid", check: "string_format", abort: false, ...d.normalizeParams(t2) });
  }, "_includes", 0, function(e2, t2) {
    return new u.$ZodCheckIncludes({ check: "string_format", format: "includes", ...d.normalizeParams(t2), includes: e2 });
  }, "_int", 0, function(e2, t2) {
    return new e2({ type: "number", check: "number_format", abort: false, format: "safeint", ...d.normalizeParams(t2) });
  }, "_int32", 0, function(e2, t2) {
    return new e2({ type: "number", check: "number_format", abort: false, format: "int32", ...d.normalizeParams(t2) });
  }, "_int64", 0, function(e2, t2) {
    return new e2({ type: "bigint", check: "bigint_format", abort: false, format: "int64", ...d.normalizeParams(t2) });
  }, "_intersection", 0, function(e2, t2, i2) {
    return new e2({ type: "intersection", left: t2, right: i2 });
  }, "_ipv4", 0, function(e2, t2) {
    return new e2({ type: "string", format: "ipv4", check: "string_format", abort: false, ...d.normalizeParams(t2) });
  }, "_ipv6", 0, function(e2, t2) {
    return new e2({ type: "string", format: "ipv6", check: "string_format", abort: false, ...d.normalizeParams(t2) });
  }, "_isoDate", 0, function(e2, t2) {
    return new e2({ type: "string", format: "date", check: "string_format", ...d.normalizeParams(t2) });
  }, "_isoDateTime", 0, function(e2, t2) {
    return new e2({ type: "string", format: "datetime", check: "string_format", offset: false, local: false, precision: null, ...d.normalizeParams(t2) });
  }, "_isoDuration", 0, function(e2, t2) {
    return new e2({ type: "string", format: "duration", check: "string_format", ...d.normalizeParams(t2) });
  }, "_isoTime", 0, function(e2, t2) {
    return new e2({ type: "string", format: "time", check: "string_format", precision: null, ...d.normalizeParams(t2) });
  }, "_jwt", 0, function(e2, t2) {
    return new e2({ type: "string", format: "jwt", check: "string_format", abort: false, ...d.normalizeParams(t2) });
  }, "_ksuid", 0, function(e2, t2) {
    return new e2({ type: "string", format: "ksuid", check: "string_format", abort: false, ...d.normalizeParams(t2) });
  }, "_lazy", 0, function(e2, t2) {
    return new e2({ type: "lazy", getter: t2 });
  }, "_length", 0, function(e2, t2) {
    return new u.$ZodCheckLengthEquals({ check: "length_equals", ...d.normalizeParams(t2), length: e2 });
  }, "_literal", 0, function(e2, t2, i2) {
    return new e2({ type: "literal", values: Array.isArray(t2) ? t2 : [t2], ...d.normalizeParams(i2) });
  }, "_lowercase", 0, function(e2) {
    return new u.$ZodCheckLowerCase({ check: "string_format", format: "lowercase", ...d.normalizeParams(e2) });
  }, "_lt", 0, m, "_lte", 0, f, "_mac", 0, function(e2, t2) {
    return new e2({ type: "string", format: "mac", check: "string_format", abort: false, ...d.normalizeParams(t2) });
  }, "_map", 0, function(e2, t2, i2, r2) {
    return new e2({ type: "map", keyType: t2, valueType: i2, ...d.normalizeParams(r2) });
  }, "_max", 0, f, "_maxLength", 0, function(e2, t2) {
    return new u.$ZodCheckMaxLength({ check: "max_length", ...d.normalizeParams(t2), maximum: e2 });
  }, "_maxSize", 0, function(e2, t2) {
    return new u.$ZodCheckMaxSize({ check: "max_size", ...d.normalizeParams(t2), maximum: e2 });
  }, "_mime", 0, function(e2, t2) {
    return new u.$ZodCheckMimeType({ check: "mime_type", mime: e2, ...d.normalizeParams(t2) });
  }, "_min", 0, v, "_minLength", 0, function(e2, t2) {
    return new u.$ZodCheckMinLength({ check: "min_length", ...d.normalizeParams(t2), minimum: e2 });
  }, "_minSize", 0, function(e2, t2) {
    return new u.$ZodCheckMinSize({ check: "min_size", ...d.normalizeParams(t2), minimum: e2 });
  }, "_multipleOf", 0, function(e2, t2) {
    return new u.$ZodCheckMultipleOf({ check: "multiple_of", ...d.normalizeParams(t2), value: e2 });
  }, "_nan", 0, function(e2, t2) {
    return new e2({ type: "nan", ...d.normalizeParams(t2) });
  }, "_nanoid", 0, function(e2, t2) {
    return new e2({ type: "string", format: "nanoid", check: "string_format", abort: false, ...d.normalizeParams(t2) });
  }, "_nativeEnum", 0, function(e2, t2, i2) {
    return new e2({ type: "enum", entries: t2, ...d.normalizeParams(i2) });
  }, "_negative", 0, function(e2) {
    return m(0, e2);
  }, "_never", 0, function(e2, t2) {
    return new e2({ type: "never", ...d.normalizeParams(t2) });
  }, "_nonnegative", 0, function(e2) {
    return v(0, e2);
  }, "_nonoptional", 0, function(e2, t2, i2) {
    return new e2({ type: "nonoptional", innerType: t2, ...d.normalizeParams(i2) });
  }, "_nonpositive", 0, function(e2) {
    return f(0, e2);
  }, "_normalize", 0, function(e2) {
    return g((t2) => t2.normalize(e2));
  }, "_null", 0, function(e2, t2) {
    return new e2({ type: "null", ...d.normalizeParams(t2) });
  }, "_nullable", 0, function(e2, t2) {
    return new e2({ type: "nullable", innerType: t2 });
  }, "_number", 0, function(e2, t2) {
    return new e2({ type: "number", checks: [], ...d.normalizeParams(t2) });
  }, "_optional", 0, function(e2, t2) {
    return new e2({ type: "optional", innerType: t2 });
  }, "_overwrite", 0, g, "_pipe", 0, function(e2, t2, i2) {
    return new e2({ type: "pipe", in: t2, out: i2 });
  }, "_positive", 0, function(e2) {
    return p(0, e2);
  }, "_promise", 0, function(e2, t2) {
    return new e2({ type: "promise", innerType: t2 });
  }, "_property", 0, function(e2, t2, i2) {
    return new u.$ZodCheckProperty({ check: "property", property: e2, schema: t2, ...d.normalizeParams(i2) });
  }, "_readonly", 0, function(e2, t2) {
    return new e2({ type: "readonly", innerType: t2 });
  }, "_record", 0, function(e2, t2, i2, r2) {
    return new e2({ type: "record", keyType: t2, valueType: i2, ...d.normalizeParams(r2) });
  }, "_refine", 0, function(e2, t2, i2) {
    return new e2({ type: "custom", check: "custom", fn: t2, ...d.normalizeParams(i2) });
  }, "_regex", 0, function(e2, t2) {
    return new u.$ZodCheckRegex({ check: "string_format", format: "regex", ...d.normalizeParams(t2), pattern: e2 });
  }, "_set", 0, function(e2, t2, i2) {
    return new e2({ type: "set", valueType: t2, ...d.normalizeParams(i2) });
  }, "_size", 0, function(e2, t2) {
    return new u.$ZodCheckSizeEquals({ check: "size_equals", ...d.normalizeParams(t2), size: e2 });
  }, "_slugify", 0, function() {
    return g((e2) => d.slugify(e2));
  }, "_startsWith", 0, function(e2, t2) {
    return new u.$ZodCheckStartsWith({ check: "string_format", format: "starts_with", ...d.normalizeParams(t2), prefix: e2 });
  }, "_string", 0, function(e2, t2) {
    return new e2({ type: "string", ...d.normalizeParams(t2) });
  }, "_stringFormat", 0, function(e2, t2, i2, r2 = {}) {
    let n2 = d.normalizeParams(r2), a2 = { ...d.normalizeParams(r2), check: "string_format", type: "string", format: t2, fn: "function" == typeof i2 ? i2 : (e3) => i2.test(e3), ...n2 };
    return i2 instanceof RegExp && (a2.pattern = i2), new e2(a2);
  }, "_stringbool", 0, function(e2, t2) {
    let i2 = d.normalizeParams(t2), r2 = i2.truthy ?? ["true", "1", "yes", "on", "y", "enabled"], n2 = i2.falsy ?? ["false", "0", "no", "off", "n", "disabled"];
    "sensitive" !== i2.case && (r2 = r2.map((e3) => "string" == typeof e3 ? e3.toLowerCase() : e3), n2 = n2.map((e3) => "string" == typeof e3 ? e3.toLowerCase() : e3));
    let a2 = new Set(r2), o2 = new Set(n2), s2 = e2.Codec ?? l.$ZodCodec, u2 = e2.Boolean ?? l.$ZodBoolean, c2 = new s2({ type: "pipe", in: new (e2.String ?? l.$ZodString)({ type: "string", error: i2.error }), out: new u2({ type: "boolean", error: i2.error }), transform: (e3, t3) => {
      let r3 = e3;
      return "sensitive" !== i2.case && (r3 = r3.toLowerCase()), !!a2.has(r3) || !o2.has(r3) && (t3.issues.push({ code: "invalid_value", expected: "stringbool", values: [...a2, ...o2], input: t3.value, inst: c2, continue: false }), {});
    }, reverseTransform: (e3, t3) => true === e3 ? r2[0] || "true" : n2[0] || "false", error: i2.error });
    return c2;
  }, "_success", 0, function(e2, t2) {
    return new e2({ type: "success", innerType: t2 });
  }, "_superRefine", 0, function(e2, t2) {
    let i2 = _((t3) => (t3.addIssue = (e3) => {
      "string" == typeof e3 ? t3.issues.push(d.issue(e3, t3.value, i2._zod.def)) : (e3.fatal && (e3.continue = false), e3.code ?? (e3.code = "custom"), e3.input ?? (e3.input = t3.value), e3.inst ?? (e3.inst = i2), e3.continue ?? (e3.continue = !i2._zod.def.abort), t3.issues.push(d.issue(e3)));
    }, e2(t3.value, t3)), t2);
    return i2;
  }, "_symbol", 0, function(e2, t2) {
    return new e2({ type: "symbol", ...d.normalizeParams(t2) });
  }, "_templateLiteral", 0, function(e2, t2, i2) {
    return new e2({ type: "template_literal", parts: t2, ...d.normalizeParams(i2) });
  }, "_toLowerCase", 0, function() {
    return g((e2) => e2.toLowerCase());
  }, "_toUpperCase", 0, function() {
    return g((e2) => e2.toUpperCase());
  }, "_transform", 0, function(e2, t2) {
    return new e2({ type: "transform", transform: t2 });
  }, "_trim", 0, function() {
    return g((e2) => e2.trim());
  }, "_tuple", 0, function(e2, t2, i2, r2) {
    let n2 = i2 instanceof l.$ZodType, a2 = n2 ? r2 : i2;
    return new e2({ type: "tuple", items: t2, rest: n2 ? i2 : null, ...d.normalizeParams(a2) });
  }, "_uint32", 0, function(e2, t2) {
    return new e2({ type: "number", check: "number_format", abort: false, format: "uint32", ...d.normalizeParams(t2) });
  }, "_uint64", 0, function(e2, t2) {
    return new e2({ type: "bigint", check: "bigint_format", abort: false, format: "uint64", ...d.normalizeParams(t2) });
  }, "_ulid", 0, function(e2, t2) {
    return new e2({ type: "string", format: "ulid", check: "string_format", abort: false, ...d.normalizeParams(t2) });
  }, "_undefined", 0, function(e2, t2) {
    return new e2({ type: "undefined", ...d.normalizeParams(t2) });
  }, "_union", 0, function(e2, t2, i2) {
    return new e2({ type: "union", options: t2, ...d.normalizeParams(i2) });
  }, "_unknown", 0, function(e2) {
    return new e2({ type: "unknown" });
  }, "_uppercase", 0, function(e2) {
    return new u.$ZodCheckUpperCase({ check: "string_format", format: "uppercase", ...d.normalizeParams(e2) });
  }, "_url", 0, function(e2, t2) {
    return new e2({ type: "string", format: "url", check: "string_format", abort: false, ...d.normalizeParams(t2) });
  }, "_uuid", 0, function(e2, t2) {
    return new e2({ type: "string", format: "uuid", check: "string_format", abort: false, ...d.normalizeParams(t2) });
  }, "_uuidv4", 0, function(e2, t2) {
    return new e2({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v4", ...d.normalizeParams(t2) });
  }, "_uuidv6", 0, function(e2, t2) {
    return new e2({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v6", ...d.normalizeParams(t2) });
  }, "_uuidv7", 0, function(e2, t2) {
    return new e2({ type: "string", format: "uuid", check: "string_format", abort: false, version: "v7", ...d.normalizeParams(t2) });
  }, "_void", 0, function(e2, t2) {
    return new e2({ type: "void", ...d.normalizeParams(t2) });
  }, "_xid", 0, function(e2, t2) {
    return new e2({ type: "string", format: "xid", check: "string_format", abort: false, ...d.normalizeParams(t2) });
  }, "_xor", 0, function(e2, t2, i2) {
    return new e2({ type: "union", options: t2, inclusive: false, ...d.normalizeParams(i2) });
  }, "describe", 0, function(e2) {
    let t2 = new u.$ZodCheck({ check: "describe" });
    return t2._zod.onattach = [(t3) => {
      let i2 = o.get(t3) ?? {};
      o.add(t3, { ...i2, description: e2 });
    }], t2._zod.check = () => {
    }, t2;
  }, "meta", 0, function(e2) {
    let t2 = new u.$ZodCheck({ check: "meta" });
    return t2._zod.onattach = [(t3) => {
      let i2 = o.get(t3) ?? {};
      o.add(t3, { ...i2, ...e2 });
    }], t2._zod.check = () => {
    }, t2;
  }], 201528);
}, 309841, 416917, (e) => {
  "use strict";
  var t = e.i(383197), i = e.i(69547);
  e.s(["$ZodAny", () => t.$ZodAny, "$ZodArray", () => t.$ZodArray, "$ZodBase64", () => t.$ZodBase64, "$ZodBase64URL", () => t.$ZodBase64URL, "$ZodBigInt", () => t.$ZodBigInt, "$ZodBigIntFormat", () => t.$ZodBigIntFormat, "$ZodBoolean", () => t.$ZodBoolean, "$ZodCIDRv4", () => t.$ZodCIDRv4, "$ZodCIDRv6", () => t.$ZodCIDRv6, "$ZodCUID", () => t.$ZodCUID, "$ZodCUID2", () => t.$ZodCUID2, "$ZodCatch", () => t.$ZodCatch, "$ZodCodec", () => t.$ZodCodec, "$ZodCustom", () => t.$ZodCustom, "$ZodCustomStringFormat", () => t.$ZodCustomStringFormat, "$ZodDate", () => t.$ZodDate, "$ZodDefault", () => t.$ZodDefault, "$ZodDiscriminatedUnion", () => t.$ZodDiscriminatedUnion, "$ZodE164", () => t.$ZodE164, "$ZodEmail", () => t.$ZodEmail, "$ZodEmoji", () => t.$ZodEmoji, "$ZodEnum", () => t.$ZodEnum, "$ZodExactOptional", () => t.$ZodExactOptional, "$ZodFile", () => t.$ZodFile, "$ZodFunction", () => t.$ZodFunction, "$ZodGUID", () => t.$ZodGUID, "$ZodIPv4", () => t.$ZodIPv4, "$ZodIPv6", () => t.$ZodIPv6, "$ZodISODate", () => t.$ZodISODate, "$ZodISODateTime", () => t.$ZodISODateTime, "$ZodISODuration", () => t.$ZodISODuration, "$ZodISOTime", () => t.$ZodISOTime, "$ZodIntersection", () => t.$ZodIntersection, "$ZodJWT", () => t.$ZodJWT, "$ZodKSUID", () => t.$ZodKSUID, "$ZodLazy", () => t.$ZodLazy, "$ZodLiteral", () => t.$ZodLiteral, "$ZodMAC", () => t.$ZodMAC, "$ZodMap", () => t.$ZodMap, "$ZodNaN", () => t.$ZodNaN, "$ZodNanoID", () => t.$ZodNanoID, "$ZodNever", () => t.$ZodNever, "$ZodNonOptional", () => t.$ZodNonOptional, "$ZodNull", () => t.$ZodNull, "$ZodNullable", () => t.$ZodNullable, "$ZodNumber", () => t.$ZodNumber, "$ZodNumberFormat", () => t.$ZodNumberFormat, "$ZodObject", () => t.$ZodObject, "$ZodObjectJIT", () => t.$ZodObjectJIT, "$ZodOptional", () => t.$ZodOptional, "$ZodPipe", () => t.$ZodPipe, "$ZodPrefault", () => t.$ZodPrefault, "$ZodPreprocess", () => t.$ZodPreprocess, "$ZodPromise", () => t.$ZodPromise, "$ZodReadonly", () => t.$ZodReadonly, "$ZodRecord", () => t.$ZodRecord, "$ZodSet", () => t.$ZodSet, "$ZodString", () => t.$ZodString, "$ZodStringFormat", () => t.$ZodStringFormat, "$ZodSuccess", () => t.$ZodSuccess, "$ZodSymbol", () => t.$ZodSymbol, "$ZodTemplateLiteral", () => t.$ZodTemplateLiteral, "$ZodTransform", () => t.$ZodTransform, "$ZodTuple", () => t.$ZodTuple, "$ZodType", () => t.$ZodType, "$ZodULID", () => t.$ZodULID, "$ZodURL", () => t.$ZodURL, "$ZodUUID", () => t.$ZodUUID, "$ZodUndefined", () => t.$ZodUndefined, "$ZodUnion", () => t.$ZodUnion, "$ZodUnknown", () => t.$ZodUnknown, "$ZodVoid", () => t.$ZodVoid, "$ZodXID", () => t.$ZodXID, "$ZodXor", () => t.$ZodXor, "clone", () => i.clone, "isValidBase64", () => t.isValidBase64, "isValidBase64URL", () => t.isValidBase64URL, "isValidJWT", () => t.isValidJWT], 309841);
  try {
    var r = "u" > typeof window ? window : e.g;
    r._sentryModuleMetadata = r._sentryModuleMetadata || {}, r._sentryModuleMetadata[new r.Error().stack] = Object.assign({}, r._sentryModuleMetadata[new r.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s([], 675763), e.i(675763);
  try {
    var n = "u" > typeof window ? window : e.g;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var a = "u" > typeof window ? window : e.g;
    a._sentryModuleMetadata = a._sentryModuleMetadata || {}, a._sentryModuleMetadata[new a.Error().stack] = Object.assign({}, a._sentryModuleMetadata[new a.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var o = "u" > typeof window ? window : e.g;
    o._sentryModuleMetadata = o._sentryModuleMetadata || {}, o._sentryModuleMetadata[new o.Error().stack] = Object.assign({}, o._sentryModuleMetadata[new o.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function s(e2, t2, i2, r2) {
    let n2 = Math.abs(e2), a2 = n2 % 10, o2 = n2 % 100;
    return o2 >= 11 && o2 <= 19 ? r2 : 1 === a2 ? t2 : a2 >= 2 && a2 <= 4 ? i2 : r2;
  }
  try {
    var u = "u" > typeof window ? window : e.g;
    u._sentryModuleMetadata = u._sentryModuleMetadata || {}, u._sentryModuleMetadata[new u.Error().stack] = Object.assign({}, u._sentryModuleMetadata[new u.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var l = "u" > typeof window ? window : e.g;
    l._sentryModuleMetadata = l._sentryModuleMetadata || {}, l._sentryModuleMetadata[new l.Error().stack] = Object.assign({}, l._sentryModuleMetadata[new l.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var d = "u" > typeof window ? window : e.g;
    d._sentryModuleMetadata = d._sentryModuleMetadata || {}, d._sentryModuleMetadata[new d.Error().stack] = Object.assign({}, d._sentryModuleMetadata[new d.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var c = "u" > typeof window ? window : e.g;
    c._sentryModuleMetadata = c._sentryModuleMetadata || {}, c._sentryModuleMetadata[new c.Error().stack] = Object.assign({}, c._sentryModuleMetadata[new c.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var m = "u" > typeof window ? window : e.g;
    m._sentryModuleMetadata = m._sentryModuleMetadata || {}, m._sentryModuleMetadata[new m.Error().stack] = Object.assign({}, m._sentryModuleMetadata[new m.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var f = "u" > typeof window ? window : e.g;
    f._sentryModuleMetadata = f._sentryModuleMetadata || {}, f._sentryModuleMetadata[new f.Error().stack] = Object.assign({}, f._sentryModuleMetadata[new f.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  var p = e.i(295349);
  try {
    var v = "u" > typeof window ? window : e.g;
    v._sentryModuleMetadata = v._sentryModuleMetadata || {}, v._sentryModuleMetadata[new v.Error().stack] = Object.assign({}, v._sentryModuleMetadata[new v.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var g = "u" > typeof window ? window : e.g;
    g._sentryModuleMetadata = g._sentryModuleMetadata || {}, g._sentryModuleMetadata[new g.Error().stack] = Object.assign({}, g._sentryModuleMetadata[new g.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var _ = "u" > typeof window ? window : e.g;
    _._sentryModuleMetadata = _._sentryModuleMetadata || {}, _._sentryModuleMetadata[new _.Error().stack] = Object.assign({}, _._sentryModuleMetadata[new _.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var $ = "u" > typeof window ? window : e.g;
    $._sentryModuleMetadata = $._sentryModuleMetadata || {}, $._sentryModuleMetadata[new $.Error().stack] = Object.assign({}, $._sentryModuleMetadata[new $.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var y = "u" > typeof window ? window : e.g;
    y._sentryModuleMetadata = y._sentryModuleMetadata || {}, y._sentryModuleMetadata[new y.Error().stack] = Object.assign({}, y._sentryModuleMetadata[new y.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var h = "u" > typeof window ? window : e.g;
    h._sentryModuleMetadata = h._sentryModuleMetadata || {}, h._sentryModuleMetadata[new h.Error().stack] = Object.assign({}, h._sentryModuleMetadata[new h.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var b = "u" > typeof window ? window : e.g;
    b._sentryModuleMetadata = b._sentryModuleMetadata || {}, b._sentryModuleMetadata[new b.Error().stack] = Object.assign({}, b._sentryModuleMetadata[new b.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var x = "u" > typeof window ? window : e.g;
    x._sentryModuleMetadata = x._sentryModuleMetadata || {}, x._sentryModuleMetadata[new x.Error().stack] = Object.assign({}, x._sentryModuleMetadata[new x.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var k = "u" > typeof window ? window : e.g;
    k._sentryModuleMetadata = k._sentryModuleMetadata || {}, k._sentryModuleMetadata[new k.Error().stack] = Object.assign({}, k._sentryModuleMetadata[new k.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var w = "u" > typeof window ? window : e.g;
    w._sentryModuleMetadata = w._sentryModuleMetadata || {}, w._sentryModuleMetadata[new w.Error().stack] = Object.assign({}, w._sentryModuleMetadata[new w.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function I(e2, t2, i2) {
    return 1 === Math.abs(e2) ? t2 : i2;
  }
  function Z(e2) {
    if (!e2) return "";
    let t2 = e2[e2.length - 1];
    return e2 + (["\u0561", "\u0565", "\u0568", "\u056B", "\u0578", "\u0578\u0582", "\u0585"].includes(t2) ? "\u0576" : "\u0568");
  }
  try {
    var z = "u" > typeof window ? window : e.g;
    z._sentryModuleMetadata = z._sentryModuleMetadata || {}, z._sentryModuleMetadata[new z.Error().stack] = Object.assign({}, z._sentryModuleMetadata[new z.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var S = "u" > typeof window ? window : e.g;
    S._sentryModuleMetadata = S._sentryModuleMetadata || {}, S._sentryModuleMetadata[new S.Error().stack] = Object.assign({}, S._sentryModuleMetadata[new S.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var P = "u" > typeof window ? window : e.g;
    P._sentryModuleMetadata = P._sentryModuleMetadata || {}, P._sentryModuleMetadata[new P.Error().stack] = Object.assign({}, P._sentryModuleMetadata[new P.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var E = "u" > typeof window ? window : e.g;
    E._sentryModuleMetadata = E._sentryModuleMetadata || {}, E._sentryModuleMetadata[new E.Error().stack] = Object.assign({}, E._sentryModuleMetadata[new E.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var M = "u" > typeof window ? window : e.g;
    M._sentryModuleMetadata = M._sentryModuleMetadata || {}, M._sentryModuleMetadata[new M.Error().stack] = Object.assign({}, M._sentryModuleMetadata[new M.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var O = "u" > typeof window ? window : e.g;
    O._sentryModuleMetadata = O._sentryModuleMetadata || {}, O._sentryModuleMetadata[new O.Error().stack] = Object.assign({}, O._sentryModuleMetadata[new O.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function U() {
    let e2, t2, r2;
    return { localeError: (e2 = { string: { unit: "\u178F\u17BD\u17A2\u1780\u17D2\u179F\u179A", verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793" }, file: { unit: "\u1794\u17C3", verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793" }, array: { unit: "\u1792\u17B6\u178F\u17BB", verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793" }, set: { unit: "\u1792\u17B6\u178F\u17BB", verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793" } }, t2 = { regex: "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B", email: "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793\u17A2\u17CA\u17B8\u1798\u17C2\u179B", url: "URL", emoji: "\u179F\u1789\u17D2\u1789\u17B6\u17A2\u17B6\u179A\u1798\u17D2\u1798\u178E\u17CD", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "\u1780\u17B6\u179B\u1794\u179A\u17B7\u1785\u17D2\u1786\u17C1\u1791 \u1793\u17B7\u1784\u1798\u17C9\u17C4\u1784 ISO", date: "\u1780\u17B6\u179B\u1794\u179A\u17B7\u1785\u17D2\u1786\u17C1\u1791 ISO", time: "\u1798\u17C9\u17C4\u1784 ISO", duration: "\u179A\u1799\u17C8\u1796\u17C1\u179B ISO", ipv4: "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv4", ipv6: "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv6", cidrv4: "\u178A\u17C2\u1793\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv4", cidrv6: "\u178A\u17C2\u1793\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv6", base64: "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u17A2\u17CA\u17B7\u1780\u17BC\u178A base64", base64url: "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u17A2\u17CA\u17B7\u1780\u17BC\u178A base64url", json_string: "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A JSON", e164: "\u179B\u17C1\u1781 E.164", jwt: "JWT", template_literal: "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B" }, r2 = { nan: "NaN", number: "\u179B\u17C1\u1781", array: "\u17A2\u17B6\u179A\u17C1 (Array)", null: "\u1782\u17D2\u1798\u17B6\u1793\u178F\u1798\u17D2\u179B\u17C3 (null)" }, (n2) => {
      switch (n2.code) {
        case "invalid_type": {
          let e3 = r2[n2.expected] ?? n2.expected, t3 = i.parsedType(n2.input), a2 = r2[t3] ?? t3;
          if (/^[A-Z]/.test(n2.expected)) return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A instanceof ${n2.expected} \u1794\u17C9\u17BB\u1793\u17D2\u178F\u17C2\u1791\u1791\u17BD\u179B\u1794\u17B6\u1793 ${a2}`;
          return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${e3} \u1794\u17C9\u17BB\u1793\u17D2\u178F\u17C2\u1791\u1791\u17BD\u179B\u1794\u17B6\u1793 ${a2}`;
        }
        case "invalid_value":
          if (1 === n2.values.length) return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${i.stringifyPrimitive(n2.values[0])}`;
          return `\u1787\u1798\u17D2\u179A\u17BE\u179F\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1787\u17B6\u1798\u17BD\u1799\u1780\u17D2\u1793\u17BB\u1784\u1785\u17C6\u178E\u17C4\u1798 ${i.joinValues(n2.values, "|")}`;
        case "too_big": {
          let t3 = n2.inclusive ? "<=" : "<", i2 = e2[n2.origin] ?? null;
          if (i2) return `\u1792\u17C6\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${n2.origin ?? "\u178F\u1798\u17D2\u179B\u17C3"} ${t3} ${n2.maximum.toString()} ${i2.unit ?? "\u1792\u17B6\u178F\u17BB"}`;
          return `\u1792\u17C6\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${n2.origin ?? "\u178F\u1798\u17D2\u179B\u17C3"} ${t3} ${n2.maximum.toString()}`;
        }
        case "too_small": {
          let t3 = n2.inclusive ? ">=" : ">", i2 = e2[n2.origin] ?? null;
          if (i2) return `\u178F\u17BC\u1785\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${n2.origin} ${t3} ${n2.minimum.toString()} ${i2.unit}`;
          return `\u178F\u17BC\u1785\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${n2.origin} ${t3} ${n2.minimum.toString()}`;
        }
        case "invalid_format":
          if ("starts_with" === n2.format) return `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1785\u17B6\u1794\u17CB\u1795\u17D2\u178F\u17BE\u1798\u178A\u17C4\u1799 "${n2.prefix}"`;
          if ("ends_with" === n2.format) return `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1794\u1789\u17D2\u1785\u1794\u17CB\u178A\u17C4\u1799 "${n2.suffix}"`;
          if ("includes" === n2.format) return `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1798\u17B6\u1793 "${n2.includes}"`;
          if ("regex" === n2.format) return `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u178F\u17C2\u1795\u17D2\u1782\u17BC\u1795\u17D2\u1782\u1784\u1793\u17B9\u1784\u1791\u1798\u17D2\u179A\u1784\u17CB\u178A\u17C2\u179B\u1794\u17B6\u1793\u1780\u17C6\u178E\u178F\u17CB ${n2.pattern}`;
          return `\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 ${t2[n2.format] ?? n2.format}`;
        case "not_multiple_of":
          return `\u179B\u17C1\u1781\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u178F\u17C2\u1787\u17B6\u1796\u17A0\u17BB\u1782\u17BB\u178E\u1793\u17C3 ${n2.divisor}`;
        case "unrecognized_keys":
          return `\u179A\u1780\u1783\u17BE\u1789\u179F\u17C4\u1798\u17B7\u1793\u179F\u17D2\u1782\u17B6\u179B\u17CB\u17D6 ${i.joinValues(n2.keys, ", ")}`;
        case "invalid_key":
          return `\u179F\u17C4\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u1793\u17C5\u1780\u17D2\u1793\u17BB\u1784 ${n2.origin}`;
        case "invalid_union":
        default:
          return "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C";
        case "invalid_element":
          return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u1793\u17C5\u1780\u17D2\u1793\u17BB\u1784 ${n2.origin}`;
      }
    }) };
  }
  try {
    var j = "u" > typeof window ? window : e.g;
    j._sentryModuleMetadata = j._sentryModuleMetadata || {}, j._sentryModuleMetadata[new j.Error().stack] = Object.assign({}, j._sentryModuleMetadata[new j.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var D = "u" > typeof window ? window : e.g;
    D._sentryModuleMetadata = D._sentryModuleMetadata || {}, D._sentryModuleMetadata[new D.Error().stack] = Object.assign({}, D._sentryModuleMetadata[new D.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var N = "u" > typeof window ? window : e.g;
    N._sentryModuleMetadata = N._sentryModuleMetadata || {}, N._sentryModuleMetadata[new N.Error().stack] = Object.assign({}, N._sentryModuleMetadata[new N.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let T = (e2) => e2.charAt(0).toUpperCase() + e2.slice(1);
  function A(e2) {
    let t2 = Math.abs(e2), i2 = t2 % 10, r2 = t2 % 100;
    return r2 >= 11 && r2 <= 19 || 0 === i2 ? "many" : 1 === i2 ? "one" : "few";
  }
  try {
    var L = "u" > typeof window ? window : e.g;
    L._sentryModuleMetadata = L._sentryModuleMetadata || {}, L._sentryModuleMetadata[new L.Error().stack] = Object.assign({}, L._sentryModuleMetadata[new L.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var C = "u" > typeof window ? window : e.g;
    C._sentryModuleMetadata = C._sentryModuleMetadata || {}, C._sentryModuleMetadata[new C.Error().stack] = Object.assign({}, C._sentryModuleMetadata[new C.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var R = "u" > typeof window ? window : e.g;
    R._sentryModuleMetadata = R._sentryModuleMetadata || {}, R._sentryModuleMetadata[new R.Error().stack] = Object.assign({}, R._sentryModuleMetadata[new R.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var B = "u" > typeof window ? window : e.g;
    B._sentryModuleMetadata = B._sentryModuleMetadata || {}, B._sentryModuleMetadata[new B.Error().stack] = Object.assign({}, B._sentryModuleMetadata[new B.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var J = "u" > typeof window ? window : e.g;
    J._sentryModuleMetadata = J._sentryModuleMetadata || {}, J._sentryModuleMetadata[new J.Error().stack] = Object.assign({}, J._sentryModuleMetadata[new J.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var V = "u" > typeof window ? window : e.g;
    V._sentryModuleMetadata = V._sentryModuleMetadata || {}, V._sentryModuleMetadata[new V.Error().stack] = Object.assign({}, V._sentryModuleMetadata[new V.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var K = "u" > typeof window ? window : e.g;
    K._sentryModuleMetadata = K._sentryModuleMetadata || {}, K._sentryModuleMetadata[new K.Error().stack] = Object.assign({}, K._sentryModuleMetadata[new K.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var F = "u" > typeof window ? window : e.g;
    F._sentryModuleMetadata = F._sentryModuleMetadata || {}, F._sentryModuleMetadata[new F.Error().stack] = Object.assign({}, F._sentryModuleMetadata[new F.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var G = "u" > typeof window ? window : e.g;
    G._sentryModuleMetadata = G._sentryModuleMetadata || {}, G._sentryModuleMetadata[new G.Error().stack] = Object.assign({}, G._sentryModuleMetadata[new G.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var W = "u" > typeof window ? window : e.g;
    W._sentryModuleMetadata = W._sentryModuleMetadata || {}, W._sentryModuleMetadata[new W.Error().stack] = Object.assign({}, W._sentryModuleMetadata[new W.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function X(e2, t2, i2, r2) {
    let n2 = Math.abs(e2), a2 = n2 % 10, o2 = n2 % 100;
    return o2 >= 11 && o2 <= 19 ? r2 : 1 === a2 ? t2 : a2 >= 2 && a2 <= 4 ? i2 : r2;
  }
  try {
    var q = "u" > typeof window ? window : e.g;
    q._sentryModuleMetadata = q._sentryModuleMetadata || {}, q._sentryModuleMetadata[new q.Error().stack] = Object.assign({}, q._sentryModuleMetadata[new q.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var Y = "u" > typeof window ? window : e.g;
    Y._sentryModuleMetadata = Y._sentryModuleMetadata || {}, Y._sentryModuleMetadata[new Y.Error().stack] = Object.assign({}, Y._sentryModuleMetadata[new Y.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var H = "u" > typeof window ? window : e.g;
    H._sentryModuleMetadata = H._sentryModuleMetadata || {}, H._sentryModuleMetadata[new H.Error().stack] = Object.assign({}, H._sentryModuleMetadata[new H.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var Q = "u" > typeof window ? window : e.g;
    Q._sentryModuleMetadata = Q._sentryModuleMetadata || {}, Q._sentryModuleMetadata[new Q.Error().stack] = Object.assign({}, Q._sentryModuleMetadata[new Q.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var ee = "u" > typeof window ? window : e.g;
    ee._sentryModuleMetadata = ee._sentryModuleMetadata || {}, ee._sentryModuleMetadata[new ee.Error().stack] = Object.assign({}, ee._sentryModuleMetadata[new ee.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var et = "u" > typeof window ? window : e.g;
    et._sentryModuleMetadata = et._sentryModuleMetadata || {}, et._sentryModuleMetadata[new et.Error().stack] = Object.assign({}, et._sentryModuleMetadata[new et.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  function ei() {
    let e2, t2, r2;
    return { localeError: (e2 = { string: { unit: "\u0441\u0438\u043C\u0432\u043E\u043B\u0456\u0432", verb: "\u043C\u0430\u0442\u0438\u043C\u0435" }, file: { unit: "\u0431\u0430\u0439\u0442\u0456\u0432", verb: "\u043C\u0430\u0442\u0438\u043C\u0435" }, array: { unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432", verb: "\u043C\u0430\u0442\u0438\u043C\u0435" }, set: { unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432", verb: "\u043C\u0430\u0442\u0438\u043C\u0435" } }, t2 = { regex: "\u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456", email: "\u0430\u0434\u0440\u0435\u0441\u0430 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0457 \u043F\u043E\u0448\u0442\u0438", url: "URL", emoji: "\u0435\u043C\u043E\u0434\u0437\u0456", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "\u0434\u0430\u0442\u0430 \u0442\u0430 \u0447\u0430\u0441 ISO", date: "\u0434\u0430\u0442\u0430 ISO", time: "\u0447\u0430\u0441 ISO", duration: "\u0442\u0440\u0438\u0432\u0430\u043B\u0456\u0441\u0442\u044C ISO", ipv4: "\u0430\u0434\u0440\u0435\u0441\u0430 IPv4", ipv6: "\u0430\u0434\u0440\u0435\u0441\u0430 IPv6", cidrv4: "\u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D IPv4", cidrv6: "\u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D IPv6", base64: "\u0440\u044F\u0434\u043E\u043A \u0443 \u043A\u043E\u0434\u0443\u0432\u0430\u043D\u043D\u0456 base64", base64url: "\u0440\u044F\u0434\u043E\u043A \u0443 \u043A\u043E\u0434\u0443\u0432\u0430\u043D\u043D\u0456 base64url", json_string: "\u0440\u044F\u0434\u043E\u043A JSON", e164: "\u043D\u043E\u043C\u0435\u0440 E.164", jwt: "JWT", template_literal: "\u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456" }, r2 = { nan: "NaN", number: "\u0447\u0438\u0441\u043B\u043E", array: "\u043C\u0430\u0441\u0438\u0432" }, (n2) => {
      switch (n2.code) {
        case "invalid_type": {
          let e3 = r2[n2.expected] ?? n2.expected, t3 = i.parsedType(n2.input), a2 = r2[t3] ?? t3;
          if (/^[A-Z]/.test(n2.expected)) return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F instanceof ${n2.expected}, \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043E ${a2}`;
          return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F ${e3}, \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043E ${a2}`;
        }
        case "invalid_value":
          if (1 === n2.values.length) return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F ${i.stringifyPrimitive(n2.values[0])}`;
          return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0430 \u043E\u043F\u0446\u0456\u044F: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F \u043E\u0434\u043D\u0435 \u0437 ${i.joinValues(n2.values, "|")}`;
        case "too_big": {
          let t3 = n2.inclusive ? "<=" : "<", i2 = e2[n2.origin] ?? null;
          if (i2) return `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u0432\u0435\u043B\u0438\u043A\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${n2.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F"} ${i2.verb} ${t3}${n2.maximum.toString()} ${i2.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432"}`;
          return `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u0432\u0435\u043B\u0438\u043A\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${n2.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F"} \u0431\u0443\u0434\u0435 ${t3}${n2.maximum.toString()}`;
        }
        case "too_small": {
          let t3 = n2.inclusive ? ">=" : ">", i2 = e2[n2.origin] ?? null;
          if (i2) return `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u043C\u0430\u043B\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${n2.origin} ${i2.verb} ${t3}${n2.minimum.toString()} ${i2.unit}`;
          return `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u043C\u0430\u043B\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${n2.origin} \u0431\u0443\u0434\u0435 ${t3}${n2.minimum.toString()}`;
        }
        case "invalid_format":
          if ("starts_with" === n2.format) return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u043F\u043E\u0447\u0438\u043D\u0430\u0442\u0438\u0441\u044F \u0437 "${n2.prefix}"`;
          if ("ends_with" === n2.format) return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u0437\u0430\u043A\u0456\u043D\u0447\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u043D\u0430 "${n2.suffix}"`;
          if ("includes" === n2.format) return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u043C\u0456\u0441\u0442\u0438\u0442\u0438 "${n2.includes}"`;
          if ("regex" === n2.format) return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u0442\u0438 \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${n2.pattern}`;
          return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 ${t2[n2.format] ?? n2.format}`;
        case "not_multiple_of":
          return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0435 \u0447\u0438\u0441\u043B\u043E: \u043F\u043E\u0432\u0438\u043D\u043D\u043E \u0431\u0443\u0442\u0438 \u043A\u0440\u0430\u0442\u043D\u0438\u043C ${n2.divisor}`;
        case "unrecognized_keys":
          return `\u041D\u0435\u0440\u043E\u0437\u043F\u0456\u0437\u043D\u0430\u043D\u0438\u0439 \u043A\u043B\u044E\u0447${n2.keys.length > 1 ? "\u0456" : ""}: ${i.joinValues(n2.keys, ", ")}`;
        case "invalid_key":
          return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u043A\u043B\u044E\u0447 \u0443 ${n2.origin}`;
        case "invalid_union":
        default:
          return "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456";
        case "invalid_element":
          return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0443 ${n2.origin}`;
      }
    }) };
  }
  try {
    var er = "u" > typeof window ? window : e.g;
    er._sentryModuleMetadata = er._sentryModuleMetadata || {}, er._sentryModuleMetadata[new er.Error().stack] = Object.assign({}, er._sentryModuleMetadata[new er.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var en = "u" > typeof window ? window : e.g;
    en._sentryModuleMetadata = en._sentryModuleMetadata || {}, en._sentryModuleMetadata[new en.Error().stack] = Object.assign({}, en._sentryModuleMetadata[new en.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var ea = "u" > typeof window ? window : e.g;
    ea._sentryModuleMetadata = ea._sentryModuleMetadata || {}, ea._sentryModuleMetadata[new ea.Error().stack] = Object.assign({}, ea._sentryModuleMetadata[new ea.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var eo = "u" > typeof window ? window : e.g;
    eo._sentryModuleMetadata = eo._sentryModuleMetadata || {}, eo._sentryModuleMetadata[new eo.Error().stack] = Object.assign({}, eo._sentryModuleMetadata[new eo.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var es = "u" > typeof window ? window : e.g;
    es._sentryModuleMetadata = es._sentryModuleMetadata || {}, es._sentryModuleMetadata[new es.Error().stack] = Object.assign({}, es._sentryModuleMetadata[new es.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var eu = "u" > typeof window ? window : e.g;
    eu._sentryModuleMetadata = eu._sentryModuleMetadata || {}, eu._sentryModuleMetadata[new eu.Error().stack] = Object.assign({}, eu._sentryModuleMetadata[new eu.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  try {
    var el = "u" > typeof window ? window : e.g;
    el._sentryModuleMetadata = el._sentryModuleMetadata || {}, el._sentryModuleMetadata[new el.Error().stack] = Object.assign({}, el._sentryModuleMetadata[new el.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  e.s(["ar", 0, function() {
    let e2, t2, r2;
    return { localeError: (e2 = { string: { unit: "\u062D\u0631\u0641", verb: "\u0623\u0646 \u064A\u062D\u0648\u064A" }, file: { unit: "\u0628\u0627\u064A\u062A", verb: "\u0623\u0646 \u064A\u062D\u0648\u064A" }, array: { unit: "\u0639\u0646\u0635\u0631", verb: "\u0623\u0646 \u064A\u062D\u0648\u064A" }, set: { unit: "\u0639\u0646\u0635\u0631", verb: "\u0623\u0646 \u064A\u062D\u0648\u064A" } }, t2 = { regex: "\u0645\u062F\u062E\u0644", email: "\u0628\u0631\u064A\u062F \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A", url: "\u0631\u0627\u0628\u0637", emoji: "\u0625\u064A\u0645\u0648\u062C\u064A", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "\u062A\u0627\u0631\u064A\u062E \u0648\u0648\u0642\u062A \u0628\u0645\u0639\u064A\u0627\u0631 ISO", date: "\u062A\u0627\u0631\u064A\u062E \u0628\u0645\u0639\u064A\u0627\u0631 ISO", time: "\u0648\u0642\u062A \u0628\u0645\u0639\u064A\u0627\u0631 ISO", duration: "\u0645\u062F\u0629 \u0628\u0645\u0639\u064A\u0627\u0631 ISO", ipv4: "\u0639\u0646\u0648\u0627\u0646 IPv4", ipv6: "\u0639\u0646\u0648\u0627\u0646 IPv6", cidrv4: "\u0645\u062F\u0649 \u0639\u0646\u0627\u0648\u064A\u0646 \u0628\u0635\u064A\u063A\u0629 IPv4", cidrv6: "\u0645\u062F\u0649 \u0639\u0646\u0627\u0648\u064A\u0646 \u0628\u0635\u064A\u063A\u0629 IPv6", base64: "\u0646\u064E\u0635 \u0628\u062A\u0631\u0645\u064A\u0632 base64-encoded", base64url: "\u0646\u064E\u0635 \u0628\u062A\u0631\u0645\u064A\u0632 base64url-encoded", json_string: "\u0646\u064E\u0635 \u0639\u0644\u0649 \u0647\u064A\u0626\u0629 JSON", e164: "\u0631\u0642\u0645 \u0647\u0627\u062A\u0641 \u0628\u0645\u0639\u064A\u0627\u0631 E.164", jwt: "JWT", template_literal: "\u0645\u062F\u062E\u0644" }, r2 = { nan: "NaN" }, (n2) => {
      switch (n2.code) {
        case "invalid_type": {
          let e3 = r2[n2.expected] ?? n2.expected, t3 = i.parsedType(n2.input), a2 = r2[t3] ?? t3;
          if (/^[A-Z]/.test(n2.expected)) return `\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 instanceof ${n2.expected}\u060C \u0648\u0644\u0643\u0646 \u062A\u0645 \u0625\u062F\u062E\u0627\u0644 ${a2}`;
          return `\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 ${e3}\u060C \u0648\u0644\u0643\u0646 \u062A\u0645 \u0625\u062F\u062E\u0627\u0644 ${a2}`;
        }
        case "invalid_value":
          if (1 === n2.values.length) return `\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 ${i.stringifyPrimitive(n2.values[0])}`;
          return `\u0627\u062E\u062A\u064A\u0627\u0631 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062A\u0648\u0642\u0639 \u0627\u0646\u062A\u0642\u0627\u0621 \u0623\u062D\u062F \u0647\u0630\u0647 \u0627\u0644\u062E\u064A\u0627\u0631\u0627\u062A: ${i.joinValues(n2.values, "|")}`;
        case "too_big": {
          let t3 = n2.inclusive ? "<=" : "<", i2 = e2[n2.origin] ?? null;
          if (i2) return ` \u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0623\u0646 \u062A\u0643\u0648\u0646 ${n2.origin ?? "\u0627\u0644\u0642\u064A\u0645\u0629"} ${t3} ${n2.maximum.toString()} ${i2.unit ?? "\u0639\u0646\u0635\u0631"}`;
          return `\u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0623\u0646 \u062A\u0643\u0648\u0646 ${n2.origin ?? "\u0627\u0644\u0642\u064A\u0645\u0629"} ${t3} ${n2.maximum.toString()}`;
        }
        case "too_small": {
          let t3 = n2.inclusive ? ">=" : ">", i2 = e2[n2.origin] ?? null;
          if (i2) return `\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0644\u0640 ${n2.origin} \u0623\u0646 \u064A\u0643\u0648\u0646 ${t3} ${n2.minimum.toString()} ${i2.unit}`;
          return `\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0644\u0640 ${n2.origin} \u0623\u0646 \u064A\u0643\u0648\u0646 ${t3} ${n2.minimum.toString()}`;
        }
        case "invalid_format":
          if ("starts_with" === n2.format) return `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0628\u062F\u0623 \u0628\u0640 "${n2.prefix}"`;
          if ("ends_with" === n2.format) return `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0646\u062A\u0647\u064A \u0628\u0640 "${n2.suffix}"`;
          if ("includes" === n2.format) return `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u062A\u0636\u0645\u0651\u064E\u0646 "${n2.includes}"`;
          if ("regex" === n2.format) return `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0637\u0627\u0628\u0642 \u0627\u0644\u0646\u0645\u0637 ${n2.pattern}`;
          return `${t2[n2.format] ?? n2.format} \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644`;
        case "not_multiple_of":
          return `\u0631\u0642\u0645 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0645\u0646 \u0645\u0636\u0627\u0639\u0641\u0627\u062A ${n2.divisor}`;
        case "unrecognized_keys":
          return `\u0645\u0639\u0631\u0641${n2.keys.length > 1 ? "\u0627\u062A" : ""} \u063A\u0631\u064A\u0628${n2.keys.length > 1 ? "\u0629" : ""}: ${i.joinValues(n2.keys, "\u060C ")}`;
        case "invalid_key":
          return `\u0645\u0639\u0631\u0641 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644 \u0641\u064A ${n2.origin}`;
        case "invalid_union":
        default:
          return "\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644";
        case "invalid_element":
          return `\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644 \u0641\u064A ${n2.origin}`;
      }
    }) };
  }, "az", 0, function() {
    let e2, t2, r2;
    return { localeError: (e2 = { string: { unit: "simvol", verb: "olmal\u0131d\u0131r" }, file: { unit: "bayt", verb: "olmal\u0131d\u0131r" }, array: { unit: "element", verb: "olmal\u0131d\u0131r" }, set: { unit: "element", verb: "olmal\u0131d\u0131r" } }, t2 = { regex: "input", email: "email address", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO datetime", date: "ISO date", time: "ISO time", duration: "ISO duration", ipv4: "IPv4 address", ipv6: "IPv6 address", cidrv4: "IPv4 range", cidrv6: "IPv6 range", base64: "base64-encoded string", base64url: "base64url-encoded string", json_string: "JSON string", e164: "E.164 number", jwt: "JWT", template_literal: "input" }, r2 = { nan: "NaN" }, (n2) => {
      switch (n2.code) {
        case "invalid_type": {
          let e3 = r2[n2.expected] ?? n2.expected, t3 = i.parsedType(n2.input), a2 = r2[t3] ?? t3;
          if (/^[A-Z]/.test(n2.expected)) return `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n instanceof ${n2.expected}, daxil olan ${a2}`;
          return `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n ${e3}, daxil olan ${a2}`;
        }
        case "invalid_value":
          if (1 === n2.values.length) return `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n ${i.stringifyPrimitive(n2.values[0])}`;
          return `Yanl\u0131\u015F se\xE7im: a\u015Fa\u011F\u0131dak\u0131lardan biri olmal\u0131d\u0131r: ${i.joinValues(n2.values, "|")}`;
        case "too_big": {
          let t3 = n2.inclusive ? "<=" : "<", i2 = e2[n2.origin] ?? null;
          if (i2) return `\xC7ox b\xF6y\xFCk: g\xF6zl\u0259nil\u0259n ${n2.origin ?? "d\u0259y\u0259r"} ${t3}${n2.maximum.toString()} ${i2.unit ?? "element"}`;
          return `\xC7ox b\xF6y\xFCk: g\xF6zl\u0259nil\u0259n ${n2.origin ?? "d\u0259y\u0259r"} ${t3}${n2.maximum.toString()}`;
        }
        case "too_small": {
          let t3 = n2.inclusive ? ">=" : ">", i2 = e2[n2.origin] ?? null;
          if (i2) return `\xC7ox ki\xE7ik: g\xF6zl\u0259nil\u0259n ${n2.origin} ${t3}${n2.minimum.toString()} ${i2.unit}`;
          return `\xC7ox ki\xE7ik: g\xF6zl\u0259nil\u0259n ${n2.origin} ${t3}${n2.minimum.toString()}`;
        }
        case "invalid_format":
          if ("starts_with" === n2.format) return `Yanl\u0131\u015F m\u0259tn: "${n2.prefix}" il\u0259 ba\u015Flamal\u0131d\u0131r`;
          if ("ends_with" === n2.format) return `Yanl\u0131\u015F m\u0259tn: "${n2.suffix}" il\u0259 bitm\u0259lidir`;
          if ("includes" === n2.format) return `Yanl\u0131\u015F m\u0259tn: "${n2.includes}" daxil olmal\u0131d\u0131r`;
          if ("regex" === n2.format) return `Yanl\u0131\u015F m\u0259tn: ${n2.pattern} \u015Fablonuna uy\u011Fun olmal\u0131d\u0131r`;
          return `Yanl\u0131\u015F ${t2[n2.format] ?? n2.format}`;
        case "not_multiple_of":
          return `Yanl\u0131\u015F \u0259d\u0259d: ${n2.divisor} il\u0259 b\xF6l\xFCn\u0259 bil\u0259n olmal\u0131d\u0131r`;
        case "unrecognized_keys":
          return `Tan\u0131nmayan a\xE7ar${n2.keys.length > 1 ? "lar" : ""}: ${i.joinValues(n2.keys, ", ")}`;
        case "invalid_key":
          return `${n2.origin} daxilind\u0259 yanl\u0131\u015F a\xE7ar`;
        case "invalid_union":
        default:
          return "Yanl\u0131\u015F d\u0259y\u0259r";
        case "invalid_element":
          return `${n2.origin} daxilind\u0259 yanl\u0131\u015F d\u0259y\u0259r`;
      }
    }) };
  }, "be", 0, function() {
    let e2, t2, r2;
    return { localeError: (e2 = { string: { unit: { one: "\u0441\u0456\u043C\u0432\u0430\u043B", few: "\u0441\u0456\u043C\u0432\u0430\u043B\u044B", many: "\u0441\u0456\u043C\u0432\u0430\u043B\u0430\u045E" }, verb: "\u043C\u0435\u0446\u044C" }, array: { unit: { one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442", few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B", many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u045E" }, verb: "\u043C\u0435\u0446\u044C" }, set: { unit: { one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442", few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B", many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u045E" }, verb: "\u043C\u0435\u0446\u044C" }, file: { unit: { one: "\u0431\u0430\u0439\u0442", few: "\u0431\u0430\u0439\u0442\u044B", many: "\u0431\u0430\u0439\u0442\u0430\u045E" }, verb: "\u043C\u0435\u0446\u044C" } }, t2 = { regex: "\u0443\u0432\u043E\u0434", email: "email \u0430\u0434\u0440\u0430\u0441", url: "URL", emoji: "\u044D\u043C\u043E\u0434\u0437\u0456", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO \u0434\u0430\u0442\u0430 \u0456 \u0447\u0430\u0441", date: "ISO \u0434\u0430\u0442\u0430", time: "ISO \u0447\u0430\u0441", duration: "ISO \u043F\u0440\u0430\u0446\u044F\u0433\u043B\u0430\u0441\u0446\u044C", ipv4: "IPv4 \u0430\u0434\u0440\u0430\u0441", ipv6: "IPv6 \u0430\u0434\u0440\u0430\u0441", cidrv4: "IPv4 \u0434\u044B\u044F\u043F\u0430\u0437\u043E\u043D", cidrv6: "IPv6 \u0434\u044B\u044F\u043F\u0430\u0437\u043E\u043D", base64: "\u0440\u0430\u0434\u043E\u043A \u0443 \u0444\u0430\u0440\u043C\u0430\u0446\u0435 base64", base64url: "\u0440\u0430\u0434\u043E\u043A \u0443 \u0444\u0430\u0440\u043C\u0430\u0446\u0435 base64url", json_string: "JSON \u0440\u0430\u0434\u043E\u043A", e164: "\u043D\u0443\u043C\u0430\u0440 E.164", jwt: "JWT", template_literal: "\u0443\u0432\u043E\u0434" }, r2 = { nan: "NaN", number: "\u043B\u0456\u043A", array: "\u043C\u0430\u0441\u0456\u045E" }, (n2) => {
      switch (n2.code) {
        case "invalid_type": {
          let e3 = r2[n2.expected] ?? n2.expected, t3 = i.parsedType(n2.input), a2 = r2[t3] ?? t3;
          if (/^[A-Z]/.test(n2.expected)) return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u045E\u0441\u044F instanceof ${n2.expected}, \u0430\u0442\u0440\u044B\u043C\u0430\u043D\u0430 ${a2}`;
          return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u045E\u0441\u044F ${e3}, \u0430\u0442\u0440\u044B\u043C\u0430\u043D\u0430 ${a2}`;
        }
        case "invalid_value":
          if (1 === n2.values.length) return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F ${i.stringifyPrimitive(n2.values[0])}`;
          return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0432\u0430\u0440\u044B\u044F\u043D\u0442: \u0447\u0430\u043A\u0430\u045E\u0441\u044F \u0430\u0434\u0437\u0456\u043D \u0437 ${i.joinValues(n2.values, "|")}`;
        case "too_big": {
          let t3 = n2.inclusive ? "<=" : "<", i2 = e2[n2.origin] ?? null;
          if (i2) {
            let e3 = s(Number(n2.maximum), i2.unit.one, i2.unit.few, i2.unit.many);
            return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u0432\u044F\u043B\u0456\u043A\u0456: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${n2.origin ?? "\u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435"} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 ${i2.verb} ${t3}${n2.maximum.toString()} ${e3}`;
          }
          return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u0432\u044F\u043B\u0456\u043A\u0456: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${n2.origin ?? "\u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435"} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 \u0431\u044B\u0446\u044C ${t3}${n2.maximum.toString()}`;
        }
        case "too_small": {
          let t3 = n2.inclusive ? ">=" : ">", i2 = e2[n2.origin] ?? null;
          if (i2) {
            let e3 = s(Number(n2.minimum), i2.unit.one, i2.unit.few, i2.unit.many);
            return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u043C\u0430\u043B\u044B: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${n2.origin} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 ${i2.verb} ${t3}${n2.minimum.toString()} ${e3}`;
          }
          return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u043C\u0430\u043B\u044B: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${n2.origin} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 \u0431\u044B\u0446\u044C ${t3}${n2.minimum.toString()}`;
        }
        case "invalid_format":
          if ("starts_with" === n2.format) return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u043F\u0430\u0447\u044B\u043D\u0430\u0446\u0446\u0430 \u0437 "${n2.prefix}"`;
          if ("ends_with" === n2.format) return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0437\u0430\u043A\u0430\u043D\u0447\u0432\u0430\u0446\u0446\u0430 \u043D\u0430 "${n2.suffix}"`;
          if ("includes" === n2.format) return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0437\u043C\u044F\u0448\u0447\u0430\u0446\u044C "${n2.includes}"`;
          if ("regex" === n2.format) return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0430\u0434\u043F\u0430\u0432\u044F\u0434\u0430\u0446\u044C \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${n2.pattern}`;
          return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B ${t2[n2.format] ?? n2.format}`;
        case "not_multiple_of":
          return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u043B\u0456\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0431\u044B\u0446\u044C \u043A\u0440\u0430\u0442\u043D\u044B\u043C ${n2.divisor}`;
        case "unrecognized_keys":
          return `\u041D\u0435\u0440\u0430\u0441\u043F\u0430\u0437\u043D\u0430\u043D\u044B ${n2.keys.length > 1 ? "\u043A\u043B\u044E\u0447\u044B" : "\u043A\u043B\u044E\u0447"}: ${i.joinValues(n2.keys, ", ")}`;
        case "invalid_key":
          return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u043A\u043B\u044E\u0447 \u0443 ${n2.origin}`;
        case "invalid_union":
        default:
          return "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434";
        case "invalid_element":
          return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u0430\u0435 \u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435 \u045E ${n2.origin}`;
      }
    }) };
  }, "bg", 0, function() {
    let e2, t2, r2;
    return { localeError: (e2 = { string: { unit: "\u0441\u0438\u043C\u0432\u043E\u043B\u0430", verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430" }, file: { unit: "\u0431\u0430\u0439\u0442\u0430", verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430" }, array: { unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430", verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430" }, set: { unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430", verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430" } }, t2 = { regex: "\u0432\u0445\u043E\u0434", email: "\u0438\u043C\u0435\u0439\u043B \u0430\u0434\u0440\u0435\u0441", url: "URL", emoji: "\u0435\u043C\u043E\u0434\u0436\u0438", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO \u0432\u0440\u0435\u043C\u0435", date: "ISO \u0434\u0430\u0442\u0430", time: "ISO \u0432\u0440\u0435\u043C\u0435", duration: "ISO \u043F\u0440\u043E\u0434\u044A\u043B\u0436\u0438\u0442\u0435\u043B\u043D\u043E\u0441\u0442", ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441", ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441", cidrv4: "IPv4 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D", cidrv6: "IPv6 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D", base64: "base64-\u043A\u043E\u0434\u0438\u0440\u0430\u043D \u043D\u0438\u0437", base64url: "base64url-\u043A\u043E\u0434\u0438\u0440\u0430\u043D \u043D\u0438\u0437", json_string: "JSON \u043D\u0438\u0437", e164: "E.164 \u043D\u043E\u043C\u0435\u0440", jwt: "JWT", template_literal: "\u0432\u0445\u043E\u0434" }, r2 = { nan: "NaN", number: "\u0447\u0438\u0441\u043B\u043E", array: "\u043C\u0430\u0441\u0438\u0432" }, (n2) => {
      switch (n2.code) {
        case "invalid_type": {
          let e3 = r2[n2.expected] ?? n2.expected, t3 = i.parsedType(n2.input), a2 = r2[t3] ?? t3;
          if (/^[A-Z]/.test(n2.expected)) return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434: \u043E\u0447\u0430\u043A\u0432\u0430\u043D instanceof ${n2.expected}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D ${a2}`;
          return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434: \u043E\u0447\u0430\u043A\u0432\u0430\u043D ${e3}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D ${a2}`;
        }
        case "invalid_value":
          if (1 === n2.values.length) return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434: \u043E\u0447\u0430\u043A\u0432\u0430\u043D ${i.stringifyPrimitive(n2.values[0])}`;
          return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430 \u043E\u043F\u0446\u0438\u044F: \u043E\u0447\u0430\u043A\u0432\u0430\u043D\u043E \u0435\u0434\u043D\u043E \u043E\u0442 ${i.joinValues(n2.values, "|")}`;
        case "too_big": {
          let t3 = n2.inclusive ? "<=" : "<", i2 = e2[n2.origin] ?? null;
          if (i2) return `\u0422\u0432\u044A\u0440\u0434\u0435 \u0433\u043E\u043B\u044F\u043C\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${n2.origin ?? "\u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442"} \u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430 ${t3}${n2.maximum.toString()} ${i2.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430"}`;
          return `\u0422\u0432\u044A\u0440\u0434\u0435 \u0433\u043E\u043B\u044F\u043C\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${n2.origin ?? "\u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442"} \u0434\u0430 \u0431\u044A\u0434\u0435 ${t3}${n2.maximum.toString()}`;
        }
        case "too_small": {
          let t3 = n2.inclusive ? ">=" : ">", i2 = e2[n2.origin] ?? null;
          if (i2) return `\u0422\u0432\u044A\u0440\u0434\u0435 \u043C\u0430\u043B\u043A\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${n2.origin} \u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430 ${t3}${n2.minimum.toString()} ${i2.unit}`;
          return `\u0422\u0432\u044A\u0440\u0434\u0435 \u043C\u0430\u043B\u043A\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${n2.origin} \u0434\u0430 \u0431\u044A\u0434\u0435 ${t3}${n2.minimum.toString()}`;
        }
        case "invalid_format": {
          if ("starts_with" === n2.format) return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0437\u0430\u043F\u043E\u0447\u0432\u0430 \u0441 "${n2.prefix}"`;
          if ("ends_with" === n2.format) return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0437\u0430\u0432\u044A\u0440\u0448\u0432\u0430 \u0441 "${n2.suffix}"`;
          if ("includes" === n2.format) return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0432\u043A\u043B\u044E\u0447\u0432\u0430 "${n2.includes}"`;
          if ("regex" === n2.format) return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0441\u044A\u0432\u043F\u0430\u0434\u0430 \u0441 ${n2.pattern}`;
          let e3 = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D";
          return "emoji" === n2.format && (e3 = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E"), "datetime" === n2.format && (e3 = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E"), "date" === n2.format && (e3 = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430"), "time" === n2.format && (e3 = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E"), "duration" === n2.format && (e3 = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430"), `${e3} ${t2[n2.format] ?? n2.format}`;
        }
        case "not_multiple_of":
          return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E \u0447\u0438\u0441\u043B\u043E: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0431\u044A\u0434\u0435 \u043A\u0440\u0430\u0442\u043D\u043E \u043D\u0430 ${n2.divisor}`;
        case "unrecognized_keys":
          return `\u041D\u0435\u0440\u0430\u0437\u043F\u043E\u0437\u043D\u0430\u0442${n2.keys.length > 1 ? "\u0438" : ""} \u043A\u043B\u044E\u0447${n2.keys.length > 1 ? "\u043E\u0432\u0435" : ""}: ${i.joinValues(n2.keys, ", ")}`;
        case "invalid_key":
          return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043A\u043B\u044E\u0447 \u0432 ${n2.origin}`;
        case "invalid_union":
        default:
          return "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434";
        case "invalid_element":
          return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430 \u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442 \u0432 ${n2.origin}`;
      }
    }) };
  }, "ca", 0, function() {
    let e2, t2, r2;
    return { localeError: (e2 = { string: { unit: "car\xE0cters", verb: "contenir" }, file: { unit: "bytes", verb: "contenir" }, array: { unit: "elements", verb: "contenir" }, set: { unit: "elements", verb: "contenir" } }, t2 = { regex: "entrada", email: "adre\xE7a electr\xF2nica", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "data i hora ISO", date: "data ISO", time: "hora ISO", duration: "durada ISO", ipv4: "adre\xE7a IPv4", ipv6: "adre\xE7a IPv6", cidrv4: "rang IPv4", cidrv6: "rang IPv6", base64: "cadena codificada en base64", base64url: "cadena codificada en base64url", json_string: "cadena JSON", e164: "n\xFAmero E.164", jwt: "JWT", template_literal: "entrada" }, r2 = { nan: "NaN" }, (n2) => {
      switch (n2.code) {
        case "invalid_type": {
          let e3 = r2[n2.expected] ?? n2.expected, t3 = i.parsedType(n2.input), a2 = r2[t3] ?? t3;
          if (/^[A-Z]/.test(n2.expected)) return `Tipus inv\xE0lid: s'esperava instanceof ${n2.expected}, s'ha rebut ${a2}`;
          return `Tipus inv\xE0lid: s'esperava ${e3}, s'ha rebut ${a2}`;
        }
        case "invalid_value":
          if (1 === n2.values.length) return `Valor inv\xE0lid: s'esperava ${i.stringifyPrimitive(n2.values[0])}`;
          return `Opci\xF3 inv\xE0lida: s'esperava una de ${i.joinValues(n2.values, " o ")}`;
        case "too_big": {
          let t3 = n2.inclusive ? "com a m\xE0xim" : "menys de", i2 = e2[n2.origin] ?? null;
          if (i2) return `Massa gran: s'esperava que ${n2.origin ?? "el valor"} contingu\xE9s ${t3} ${n2.maximum.toString()} ${i2.unit ?? "elements"}`;
          return `Massa gran: s'esperava que ${n2.origin ?? "el valor"} fos ${t3} ${n2.maximum.toString()}`;
        }
        case "too_small": {
          let t3 = n2.inclusive ? "com a m\xEDnim" : "m\xE9s de", i2 = e2[n2.origin] ?? null;
          if (i2) return `Massa petit: s'esperava que ${n2.origin} contingu\xE9s ${t3} ${n2.minimum.toString()} ${i2.unit}`;
          return `Massa petit: s'esperava que ${n2.origin} fos ${t3} ${n2.minimum.toString()}`;
        }
        case "invalid_format":
          if ("starts_with" === n2.format) return `Format inv\xE0lid: ha de comen\xE7ar amb "${n2.prefix}"`;
          if ("ends_with" === n2.format) return `Format inv\xE0lid: ha d'acabar amb "${n2.suffix}"`;
          if ("includes" === n2.format) return `Format inv\xE0lid: ha d'incloure "${n2.includes}"`;
          if ("regex" === n2.format) return `Format inv\xE0lid: ha de coincidir amb el patr\xF3 ${n2.pattern}`;
          return `Format inv\xE0lid per a ${t2[n2.format] ?? n2.format}`;
        case "not_multiple_of":
          return `N\xFAmero inv\xE0lid: ha de ser m\xFAltiple de ${n2.divisor}`;
        case "unrecognized_keys":
          return `Clau${n2.keys.length > 1 ? "s" : ""} no reconeguda${n2.keys.length > 1 ? "s" : ""}: ${i.joinValues(n2.keys, ", ")}`;
        case "invalid_key":
          return `Clau inv\xE0lida a ${n2.origin}`;
        case "invalid_union":
        default:
          return "Entrada inv\xE0lida";
        case "invalid_element":
          return `Element inv\xE0lid a ${n2.origin}`;
      }
    }) };
  }, "cs", 0, function() {
    let e2, t2, r2;
    return { localeError: (e2 = { string: { unit: "znak\u016F", verb: "m\xEDt" }, file: { unit: "bajt\u016F", verb: "m\xEDt" }, array: { unit: "prvk\u016F", verb: "m\xEDt" }, set: { unit: "prvk\u016F", verb: "m\xEDt" } }, t2 = { regex: "regul\xE1rn\xED v\xFDraz", email: "e-mailov\xE1 adresa", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "datum a \u010Das ve form\xE1tu ISO", date: "datum ve form\xE1tu ISO", time: "\u010Das ve form\xE1tu ISO", duration: "doba trv\xE1n\xED ISO", ipv4: "IPv4 adresa", ipv6: "IPv6 adresa", cidrv4: "rozsah IPv4", cidrv6: "rozsah IPv6", base64: "\u0159et\u011Bzec zak\xF3dovan\xFD ve form\xE1tu base64", base64url: "\u0159et\u011Bzec zak\xF3dovan\xFD ve form\xE1tu base64url", json_string: "\u0159et\u011Bzec ve form\xE1tu JSON", e164: "\u010D\xEDslo E.164", jwt: "JWT", template_literal: "vstup" }, r2 = { nan: "NaN", number: "\u010D\xEDslo", string: "\u0159et\u011Bzec", function: "funkce", array: "pole" }, (n2) => {
      switch (n2.code) {
        case "invalid_type": {
          let e3 = r2[n2.expected] ?? n2.expected, t3 = i.parsedType(n2.input), a2 = r2[t3] ?? t3;
          if (/^[A-Z]/.test(n2.expected)) return `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no instanceof ${n2.expected}, obdr\u017Eeno ${a2}`;
          return `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no ${e3}, obdr\u017Eeno ${a2}`;
        }
        case "invalid_value":
          if (1 === n2.values.length) return `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no ${i.stringifyPrimitive(n2.values[0])}`;
          return `Neplatn\xE1 mo\u017Enost: o\u010Dek\xE1v\xE1na jedna z hodnot ${i.joinValues(n2.values, "|")}`;
        case "too_big": {
          let t3 = n2.inclusive ? "<=" : "<", i2 = e2[n2.origin] ?? null;
          if (i2) return `Hodnota je p\u0159\xEDli\u0161 velk\xE1: ${n2.origin ?? "hodnota"} mus\xED m\xEDt ${t3}${n2.maximum.toString()} ${i2.unit ?? "prvk\u016F"}`;
          return `Hodnota je p\u0159\xEDli\u0161 velk\xE1: ${n2.origin ?? "hodnota"} mus\xED b\xFDt ${t3}${n2.maximum.toString()}`;
        }
        case "too_small": {
          let t3 = n2.inclusive ? ">=" : ">", i2 = e2[n2.origin] ?? null;
          if (i2) return `Hodnota je p\u0159\xEDli\u0161 mal\xE1: ${n2.origin ?? "hodnota"} mus\xED m\xEDt ${t3}${n2.minimum.toString()} ${i2.unit ?? "prvk\u016F"}`;
          return `Hodnota je p\u0159\xEDli\u0161 mal\xE1: ${n2.origin ?? "hodnota"} mus\xED b\xFDt ${t3}${n2.minimum.toString()}`;
        }
        case "invalid_format":
          if ("starts_with" === n2.format) return `Neplatn\xFD \u0159et\u011Bzec: mus\xED za\u010D\xEDnat na "${n2.prefix}"`;
          if ("ends_with" === n2.format) return `Neplatn\xFD \u0159et\u011Bzec: mus\xED kon\u010Dit na "${n2.suffix}"`;
          if ("includes" === n2.format) return `Neplatn\xFD \u0159et\u011Bzec: mus\xED obsahovat "${n2.includes}"`;
          if ("regex" === n2.format) return `Neplatn\xFD \u0159et\u011Bzec: mus\xED odpov\xEDdat vzoru ${n2.pattern}`;
          return `Neplatn\xFD form\xE1t ${t2[n2.format] ?? n2.format}`;
        case "not_multiple_of":
          return `Neplatn\xE9 \u010D\xEDslo: mus\xED b\xFDt n\xE1sobkem ${n2.divisor}`;
        case "unrecognized_keys":
          return `Nezn\xE1m\xE9 kl\xED\u010De: ${i.joinValues(n2.keys, ", ")}`;
        case "invalid_key":
          return `Neplatn\xFD kl\xED\u010D v ${n2.origin}`;
        case "invalid_union":
        default:
          return "Neplatn\xFD vstup";
        case "invalid_element":
          return `Neplatn\xE1 hodnota v ${n2.origin}`;
      }
    }) };
  }, "da", 0, function() {
    let e2, t2, r2;
    return { localeError: (e2 = { string: { unit: "tegn", verb: "havde" }, file: { unit: "bytes", verb: "havde" }, array: { unit: "elementer", verb: "indeholdt" }, set: { unit: "elementer", verb: "indeholdt" } }, t2 = { regex: "input", email: "e-mailadresse", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO dato- og klokkesl\xE6t", date: "ISO-dato", time: "ISO-klokkesl\xE6t", duration: "ISO-varighed", ipv4: "IPv4-omr\xE5de", ipv6: "IPv6-omr\xE5de", cidrv4: "IPv4-spektrum", cidrv6: "IPv6-spektrum", base64: "base64-kodet streng", base64url: "base64url-kodet streng", json_string: "JSON-streng", e164: "E.164-nummer", jwt: "JWT", template_literal: "input" }, r2 = { nan: "NaN", string: "streng", number: "tal", boolean: "boolean", array: "liste", object: "objekt", set: "s\xE6t", file: "fil" }, (n2) => {
      switch (n2.code) {
        case "invalid_type": {
          let e3 = r2[n2.expected] ?? n2.expected, t3 = i.parsedType(n2.input), a2 = r2[t3] ?? t3;
          if (/^[A-Z]/.test(n2.expected)) return `Ugyldigt input: forventede instanceof ${n2.expected}, fik ${a2}`;
          return `Ugyldigt input: forventede ${e3}, fik ${a2}`;
        }
        case "invalid_value":
          if (1 === n2.values.length) return `Ugyldig v\xE6rdi: forventede ${i.stringifyPrimitive(n2.values[0])}`;
          return `Ugyldigt valg: forventede en af f\xF8lgende ${i.joinValues(n2.values, "|")}`;
        case "too_big": {
          let t3 = n2.inclusive ? "<=" : "<", i2 = e2[n2.origin] ?? null, a2 = r2[n2.origin] ?? n2.origin;
          if (i2) return `For stor: forventede ${a2 ?? "value"} ${i2.verb} ${t3} ${n2.maximum.toString()} ${i2.unit ?? "elementer"}`;
          return `For stor: forventede ${a2 ?? "value"} havde ${t3} ${n2.maximum.toString()}`;
        }
        case "too_small": {
          let t3 = n2.inclusive ? ">=" : ">", i2 = e2[n2.origin] ?? null, a2 = r2[n2.origin] ?? n2.origin;
          if (i2) return `For lille: forventede ${a2} ${i2.verb} ${t3} ${n2.minimum.toString()} ${i2.unit}`;
          return `For lille: forventede ${a2} havde ${t3} ${n2.minimum.toString()}`;
        }
        case "invalid_format":
          if ("starts_with" === n2.format) return `Ugyldig streng: skal starte med "${n2.prefix}"`;
          if ("ends_with" === n2.format) return `Ugyldig streng: skal ende med "${n2.suffix}"`;
          if ("includes" === n2.format) return `Ugyldig streng: skal indeholde "${n2.includes}"`;
          if ("regex" === n2.format) return `Ugyldig streng: skal matche m\xF8nsteret ${n2.pattern}`;
          return `Ugyldig ${t2[n2.format] ?? n2.format}`;
        case "not_multiple_of":
          return `Ugyldigt tal: skal v\xE6re deleligt med ${n2.divisor}`;
        case "unrecognized_keys":
          return `${n2.keys.length > 1 ? "Ukendte n\xF8gler" : "Ukendt n\xF8gle"}: ${i.joinValues(n2.keys, ", ")}`;
        case "invalid_key":
          return `Ugyldig n\xF8gle i ${n2.origin}`;
        case "invalid_union":
          return "Ugyldigt input: matcher ingen af de tilladte typer";
        case "invalid_element":
          return `Ugyldig v\xE6rdi i ${n2.origin}`;
        default:
          return "Ugyldigt input";
      }
    }) };
  }, "de", 0, function() {
    let e2, t2, r2;
    return { localeError: (e2 = { string: { unit: "Zeichen", verb: "zu haben" }, file: { unit: "Bytes", verb: "zu haben" }, array: { unit: "Elemente", verb: "zu haben" }, set: { unit: "Elemente", verb: "zu haben" } }, t2 = { regex: "Eingabe", email: "E-Mail-Adresse", url: "URL", emoji: "Emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO-Datum und -Uhrzeit", date: "ISO-Datum", time: "ISO-Uhrzeit", duration: "ISO-Dauer", ipv4: "IPv4-Adresse", ipv6: "IPv6-Adresse", cidrv4: "IPv4-Bereich", cidrv6: "IPv6-Bereich", base64: "Base64-codierter String", base64url: "Base64-URL-codierter String", json_string: "JSON-String", e164: "E.164-Nummer", jwt: "JWT", template_literal: "Eingabe" }, r2 = { nan: "NaN", number: "Zahl", array: "Array" }, (n2) => {
      switch (n2.code) {
        case "invalid_type": {
          let e3 = r2[n2.expected] ?? n2.expected, t3 = i.parsedType(n2.input), a2 = r2[t3] ?? t3;
          if (/^[A-Z]/.test(n2.expected)) return `Ung\xFCltige Eingabe: erwartet instanceof ${n2.expected}, erhalten ${a2}`;
          return `Ung\xFCltige Eingabe: erwartet ${e3}, erhalten ${a2}`;
        }
        case "invalid_value":
          if (1 === n2.values.length) return `Ung\xFCltige Eingabe: erwartet ${i.stringifyPrimitive(n2.values[0])}`;
          return `Ung\xFCltige Option: erwartet eine von ${i.joinValues(n2.values, "|")}`;
        case "too_big": {
          let t3 = n2.inclusive ? "<=" : "<", i2 = e2[n2.origin] ?? null;
          if (i2) return `Zu gro\xDF: erwartet, dass ${n2.origin ?? "Wert"} ${t3}${n2.maximum.toString()} ${i2.unit ?? "Elemente"} hat`;
          return `Zu gro\xDF: erwartet, dass ${n2.origin ?? "Wert"} ${t3}${n2.maximum.toString()} ist`;
        }
        case "too_small": {
          let t3 = n2.inclusive ? ">=" : ">", i2 = e2[n2.origin] ?? null;
          if (i2) return `Zu klein: erwartet, dass ${n2.origin} ${t3}${n2.minimum.toString()} ${i2.unit} hat`;
          return `Zu klein: erwartet, dass ${n2.origin} ${t3}${n2.minimum.toString()} ist`;
        }
        case "invalid_format":
          if ("starts_with" === n2.format) return `Ung\xFCltiger String: muss mit "${n2.prefix}" beginnen`;
          if ("ends_with" === n2.format) return `Ung\xFCltiger String: muss mit "${n2.suffix}" enden`;
          if ("includes" === n2.format) return `Ung\xFCltiger String: muss "${n2.includes}" enthalten`;
          if ("regex" === n2.format) return `Ung\xFCltiger String: muss dem Muster ${n2.pattern} entsprechen`;
          return `Ung\xFCltig: ${t2[n2.format] ?? n2.format}`;
        case "not_multiple_of":
          return `Ung\xFCltige Zahl: muss ein Vielfaches von ${n2.divisor} sein`;
        case "unrecognized_keys":
          return `${n2.keys.length > 1 ? "Unbekannte Schl\xFCssel" : "Unbekannter Schl\xFCssel"}: ${i.joinValues(n2.keys, ", ")}`;
        case "invalid_key":
          return `Ung\xFCltiger Schl\xFCssel in ${n2.origin}`;
        case "invalid_union":
        default:
          return "Ung\xFCltige Eingabe";
        case "invalid_element":
          return `Ung\xFCltiger Wert in ${n2.origin}`;
      }
    }) };
  }, "el", 0, function() {
    let e2, t2, r2;
    return { localeError: (e2 = { string: { unit: "\u03C7\u03B1\u03C1\u03B1\u03BA\u03C4\u03AE\u03C1\u03B5\u03C2", verb: "\u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9" }, file: { unit: "bytes", verb: "\u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9" }, array: { unit: "\u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03B1", verb: "\u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9" }, set: { unit: "\u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03B1", verb: "\u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9" }, map: { unit: "\u03BA\u03B1\u03C4\u03B1\u03C7\u03C9\u03C1\u03AE\u03C3\u03B5\u03B9\u03C2", verb: "\u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9" } }, t2 = { regex: "\u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2", email: "\u03B4\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 email", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO \u03B7\u03BC\u03B5\u03C1\u03BF\u03BC\u03B7\u03BD\u03AF\u03B1 \u03BA\u03B1\u03B9 \u03CE\u03C1\u03B1", date: "ISO \u03B7\u03BC\u03B5\u03C1\u03BF\u03BC\u03B7\u03BD\u03AF\u03B1", time: "ISO \u03CE\u03C1\u03B1", duration: "ISO \u03B4\u03B9\u03AC\u03C1\u03BA\u03B5\u03B9\u03B1", ipv4: "\u03B4\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 IPv4", ipv6: "\u03B4\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 IPv6", mac: "\u03B4\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 MAC", cidrv4: "\u03B5\u03CD\u03C1\u03BF\u03C2 IPv4", cidrv6: "\u03B5\u03CD\u03C1\u03BF\u03C2 IPv6", base64: "\u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC \u03BA\u03C9\u03B4\u03B9\u03BA\u03BF\u03C0\u03BF\u03B9\u03B7\u03BC\u03AD\u03BD\u03B7 \u03C3\u03B5 base64", base64url: "\u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC \u03BA\u03C9\u03B4\u03B9\u03BA\u03BF\u03C0\u03BF\u03B9\u03B7\u03BC\u03AD\u03BD\u03B7 \u03C3\u03B5 base64url", json_string: "\u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC JSON", e164: "\u03B1\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2 E.164", jwt: "JWT", template_literal: "\u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2" }, r2 = { nan: "NaN" }, (n2) => {
      switch (n2.code) {
        case "invalid_type": {
          let e3 = r2[n2.expected] ?? n2.expected, t3 = i.parsedType(n2.input), a2 = r2[t3] ?? t3;
          if ("string" == typeof n2.expected && /^[A-Z]/.test(n2.expected)) return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD instanceof ${n2.expected}, \u03BB\u03AE\u03C6\u03B8\u03B7\u03BA\u03B5 ${a2}`;
          return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD ${e3}, \u03BB\u03AE\u03C6\u03B8\u03B7\u03BA\u03B5 ${a2}`;
        }
        case "invalid_value":
          if (1 === n2.values.length) return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD ${i.stringifyPrimitive(n2.values[0])}`;
          return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B5\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD \u03AD\u03BD\u03B1 \u03B1\u03C0\u03CC ${i.joinValues(n2.values, "|")}`;
        case "too_big": {
          let t3 = n2.inclusive ? "<=" : "<", i2 = e2[n2.origin] ?? null;
          if (i2) return `\u03A0\u03BF\u03BB\u03CD \u03BC\u03B5\u03B3\u03AC\u03BB\u03BF: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD ${n2.origin ?? "\u03C4\u03B9\u03BC\u03AE"} \u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9 ${t3}${n2.maximum.toString()} ${i2.unit ?? "\u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03B1"}`;
          return `\u03A0\u03BF\u03BB\u03CD \u03BC\u03B5\u03B3\u03AC\u03BB\u03BF: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD ${n2.origin ?? "\u03C4\u03B9\u03BC\u03AE"} \u03BD\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 ${t3}${n2.maximum.toString()}`;
        }
        case "too_small": {
          let t3 = n2.inclusive ? ">=" : ">", i2 = e2[n2.origin] ?? null;
          if (i2) return `\u03A0\u03BF\u03BB\u03CD \u03BC\u03B9\u03BA\u03C1\u03CC: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD ${n2.origin} \u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9 ${t3}${n2.minimum.toString()} ${i2.unit}`;
          return `\u03A0\u03BF\u03BB\u03CD \u03BC\u03B9\u03BA\u03C1\u03CC: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD ${n2.origin} \u03BD\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 ${t3}${n2.minimum.toString()}`;
        }
        case "invalid_format":
          if ("starts_with" === n2.format) return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC: \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03BE\u03B5\u03BA\u03B9\u03BD\u03AC \u03BC\u03B5 "${n2.prefix}"`;
          if ("ends_with" === n2.format) return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC: \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03C4\u03B5\u03BB\u03B5\u03B9\u03CE\u03BD\u03B5\u03B9 \u03BC\u03B5 "${n2.suffix}"`;
          if ("includes" === n2.format) return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC: \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03C0\u03B5\u03C1\u03B9\u03AD\u03C7\u03B5\u03B9 "${n2.includes}"`;
          if ("regex" === n2.format) return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC: \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03C4\u03B1\u03B9\u03C1\u03B9\u03AC\u03B6\u03B5\u03B9 \u03BC\u03B5 \u03C4\u03BF \u03BC\u03BF\u03C4\u03AF\u03B2\u03BF ${n2.pattern}`;
          return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03BF: ${t2[n2.format] ?? n2.format}`;
        case "not_multiple_of":
          return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03BF\u03C2 \u03B1\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2: \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03C0\u03BF\u03BB\u03BB\u03B1\u03C0\u03BB\u03AC\u03C3\u03B9\u03BF \u03C4\u03BF\u03C5 ${n2.divisor}`;
        case "unrecognized_keys":
          return `\u0386\u03B3\u03BD\u03C9\u03C3\u03C4${n2.keys.length > 1 ? "\u03B1" : "\u03BF"} \u03BA\u03BB\u03B5\u03B9\u03B4${n2.keys.length > 1 ? "\u03B9\u03AC" : "\u03AF"}: ${i.joinValues(n2.keys, ", ")}`;
        case "invalid_key":
          return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03BF \u03BA\u03BB\u03B5\u03B9\u03B4\u03AF \u03C3\u03C4\u03BF ${n2.origin}`;
        case "invalid_union":
        default:
          return "\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2";
        case "invalid_element":
          return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03C4\u03B9\u03BC\u03AE \u03C3\u03C4\u03BF ${n2.origin}`;
      }
    }) };
  }, "en", () => p.default, "eo", 0, function() {
    let e2, t2, r2;
    return { localeError: (e2 = { string: { unit: "karaktrojn", verb: "havi" }, file: { unit: "bajtojn", verb: "havi" }, array: { unit: "elementojn", verb: "havi" }, set: { unit: "elementojn", verb: "havi" } }, t2 = { regex: "enigo", email: "retadreso", url: "URL", emoji: "emo\u011Dio", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO-datotempo", date: "ISO-dato", time: "ISO-tempo", duration: "ISO-da\u016Dro", ipv4: "IPv4-adreso", ipv6: "IPv6-adreso", cidrv4: "IPv4-rango", cidrv6: "IPv6-rango", base64: "64-ume kodita karaktraro", base64url: "URL-64-ume kodita karaktraro", json_string: "JSON-karaktraro", e164: "E.164-nombro", jwt: "JWT", template_literal: "enigo" }, r2 = { nan: "NaN", number: "nombro", array: "tabelo", null: "senvalora" }, (n2) => {
      switch (n2.code) {
        case "invalid_type": {
          let e3 = r2[n2.expected] ?? n2.expected, t3 = i.parsedType(n2.input), a2 = r2[t3] ?? t3;
          if (/^[A-Z]/.test(n2.expected)) return `Nevalida enigo: atendi\u011Dis instanceof ${n2.expected}, ricevi\u011Dis ${a2}`;
          return `Nevalida enigo: atendi\u011Dis ${e3}, ricevi\u011Dis ${a2}`;
        }
        case "invalid_value":
          if (1 === n2.values.length) return `Nevalida enigo: atendi\u011Dis ${i.stringifyPrimitive(n2.values[0])}`;
          return `Nevalida opcio: atendi\u011Dis unu el ${i.joinValues(n2.values, "|")}`;
        case "too_big": {
          let t3 = n2.inclusive ? "<=" : "<", i2 = e2[n2.origin] ?? null;
          if (i2) return `Tro granda: atendi\u011Dis ke ${n2.origin ?? "valoro"} havu ${t3}${n2.maximum.toString()} ${i2.unit ?? "elementojn"}`;
          return `Tro granda: atendi\u011Dis ke ${n2.origin ?? "valoro"} havu ${t3}${n2.maximum.toString()}`;
        }
        case "too_small": {
          let t3 = n2.inclusive ? ">=" : ">", i2 = e2[n2.origin] ?? null;
          if (i2) return `Tro malgranda: atendi\u011Dis ke ${n2.origin} havu ${t3}${n2.minimum.toString()} ${i2.unit}`;
          return `Tro malgranda: atendi\u011Dis ke ${n2.origin} estu ${t3}${n2.minimum.toString()}`;
        }
        case "invalid_format":
          if ("starts_with" === n2.format) return `Nevalida karaktraro: devas komenci\u011Di per "${n2.prefix}"`;
          if ("ends_with" === n2.format) return `Nevalida karaktraro: devas fini\u011Di per "${n2.suffix}"`;
          if ("includes" === n2.format) return `Nevalida karaktraro: devas inkluzivi "${n2.includes}"`;
          if ("regex" === n2.format) return `Nevalida karaktraro: devas kongrui kun la modelo ${n2.pattern}`;
          return `Nevalida ${t2[n2.format] ?? n2.format}`;
        case "not_multiple_of":
          return `Nevalida nombro: devas esti oblo de ${n2.divisor}`;
        case "unrecognized_keys":
          return `Nekonata${n2.keys.length > 1 ? "j" : ""} \u015Dlosilo${n2.keys.length > 1 ? "j" : ""}: ${i.joinValues(n2.keys, ", ")}`;
        case "invalid_key":
          return `Nevalida \u015Dlosilo en ${n2.origin}`;
        case "invalid_union":
        default:
          return "Nevalida enigo";
        case "invalid_element":
          return `Nevalida valoro en ${n2.origin}`;
      }
    }) };
  }, "es", 0, function() {
    let e2, t2, r2;
    return { localeError: (e2 = { string: { unit: "caracteres", verb: "tener" }, file: { unit: "bytes", verb: "tener" }, array: { unit: "elementos", verb: "tener" }, set: { unit: "elementos", verb: "tener" } }, t2 = { regex: "entrada", email: "direcci\xF3n de correo electr\xF3nico", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "fecha y hora ISO", date: "fecha ISO", time: "hora ISO", duration: "duraci\xF3n ISO", ipv4: "direcci\xF3n IPv4", ipv6: "direcci\xF3n IPv6", cidrv4: "rango IPv4", cidrv6: "rango IPv6", base64: "cadena codificada en base64", base64url: "URL codificada en base64", json_string: "cadena JSON", e164: "n\xFAmero E.164", jwt: "JWT", template_literal: "entrada" }, r2 = { nan: "NaN", string: "texto", number: "n\xFAmero", boolean: "booleano", array: "arreglo", object: "objeto", set: "conjunto", file: "archivo", date: "fecha", bigint: "n\xFAmero grande", symbol: "s\xEDmbolo", undefined: "indefinido", null: "nulo", function: "funci\xF3n", map: "mapa", record: "registro", tuple: "tupla", enum: "enumeraci\xF3n", union: "uni\xF3n", literal: "literal", promise: "promesa", void: "vac\xEDo", never: "nunca", unknown: "desconocido", any: "cualquiera" }, (n2) => {
      switch (n2.code) {
        case "invalid_type": {
          let e3 = r2[n2.expected] ?? n2.expected, t3 = i.parsedType(n2.input), a2 = r2[t3] ?? t3;
          if (/^[A-Z]/.test(n2.expected)) return `Entrada inv\xE1lida: se esperaba instanceof ${n2.expected}, recibido ${a2}`;
          return `Entrada inv\xE1lida: se esperaba ${e3}, recibido ${a2}`;
        }
        case "invalid_value":
          if (1 === n2.values.length) return `Entrada inv\xE1lida: se esperaba ${i.stringifyPrimitive(n2.values[0])}`;
          return `Opci\xF3n inv\xE1lida: se esperaba una de ${i.joinValues(n2.values, "|")}`;
        case "too_big": {
          let t3 = n2.inclusive ? "<=" : "<", i2 = e2[n2.origin] ?? null, a2 = r2[n2.origin] ?? n2.origin;
          if (i2) return `Demasiado grande: se esperaba que ${a2 ?? "valor"} tuviera ${t3}${n2.maximum.toString()} ${i2.unit ?? "elementos"}`;
          return `Demasiado grande: se esperaba que ${a2 ?? "valor"} fuera ${t3}${n2.maximum.toString()}`;
        }
        case "too_small": {
          let t3 = n2.inclusive ? ">=" : ">", i2 = e2[n2.origin] ?? null, a2 = r2[n2.origin] ?? n2.origin;
          if (i2) return `Demasiado peque\xF1o: se esperaba que ${a2} tuviera ${t3}${n2.minimum.toString()} ${i2.unit}`;
          return `Demasiado peque\xF1o: se esperaba que ${a2} fuera ${t3}${n2.minimum.toString()}`;
        }
        case "invalid_format":
          if ("starts_with" === n2.format) return `Cadena inv\xE1lida: debe comenzar con "${n2.prefix}"`;
          if ("ends_with" === n2.format) return `Cadena inv\xE1lida: debe terminar en "${n2.suffix}"`;
          if ("includes" === n2.format) return `Cadena inv\xE1lida: debe incluir "${n2.includes}"`;
          if ("regex" === n2.format) return `Cadena inv\xE1lida: debe coincidir con el patr\xF3n ${n2.pattern}`;
          return `Inv\xE1lido ${t2[n2.format] ?? n2.format}`;
        case "not_multiple_of":
          return `N\xFAmero inv\xE1lido: debe ser m\xFAltiplo de ${n2.divisor}`;
        case "unrecognized_keys":
          return `Llave${n2.keys.length > 1 ? "s" : ""} desconocida${n2.keys.length > 1 ? "s" : ""}: ${i.joinValues(n2.keys, ", ")}`;
        case "invalid_key":
          return `Llave inv\xE1lida en ${r2[n2.origin] ?? n2.origin}`;
        case "invalid_union":
        default:
          return "Entrada inv\xE1lida";
        case "invalid_element":
          return `Valor inv\xE1lido en ${r2[n2.origin] ?? n2.origin}`;
      }
    }) };
  }, "fa", 0, function() {
    let e2, t2, r2;
    return { localeError: (e2 = { string: { unit: "\u06A9\u0627\u0631\u0627\u06A9\u062A\u0631", verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F" }, file: { unit: "\u0628\u0627\u06CC\u062A", verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F" }, array: { unit: "\u0622\u06CC\u062A\u0645", verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F" }, set: { unit: "\u0622\u06CC\u062A\u0645", verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F" } }, t2 = { regex: "\u0648\u0631\u0648\u062F\u06CC", email: "\u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644", url: "URL", emoji: "\u0627\u06CC\u0645\u0648\u062C\u06CC", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "\u062A\u0627\u0631\u06CC\u062E \u0648 \u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648", date: "\u062A\u0627\u0631\u06CC\u062E \u0627\u06CC\u0632\u0648", time: "\u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648", duration: "\u0645\u062F\u062A \u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648", ipv4: "IPv4 \u0622\u062F\u0631\u0633", ipv6: "IPv6 \u0622\u062F\u0631\u0633", cidrv4: "IPv4 \u062F\u0627\u0645\u0646\u0647", cidrv6: "IPv6 \u062F\u0627\u0645\u0646\u0647", base64: "base64-encoded \u0631\u0634\u062A\u0647", base64url: "base64url-encoded \u0631\u0634\u062A\u0647", json_string: "JSON \u0631\u0634\u062A\u0647", e164: "E.164 \u0639\u062F\u062F", jwt: "JWT", template_literal: "\u0648\u0631\u0648\u062F\u06CC" }, r2 = { nan: "NaN", number: "\u0639\u062F\u062F", array: "\u0622\u0631\u0627\u06CC\u0647" }, (n2) => {
      switch (n2.code) {
        case "invalid_type": {
          let e3 = r2[n2.expected] ?? n2.expected, t3 = i.parsedType(n2.input), a2 = r2[t3] ?? t3;
          if (/^[A-Z]/.test(n2.expected)) return `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A instanceof ${n2.expected} \u0645\u06CC\u200C\u0628\u0648\u062F\u060C ${a2} \u062F\u0631\u06CC\u0627\u0641\u062A \u0634\u062F`;
          return `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A ${e3} \u0645\u06CC\u200C\u0628\u0648\u062F\u060C ${a2} \u062F\u0631\u06CC\u0627\u0641\u062A \u0634\u062F`;
        }
        case "invalid_value":
          if (1 === n2.values.length) return `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A ${i.stringifyPrimitive(n2.values[0])} \u0645\u06CC\u200C\u0628\u0648\u062F`;
          return `\u06AF\u0632\u06CC\u0646\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A \u06CC\u06A9\u06CC \u0627\u0632 ${i.joinValues(n2.values, "|")} \u0645\u06CC\u200C\u0628\u0648\u062F`;
        case "too_big": {
          let t3 = n2.inclusive ? "<=" : "<", i2 = e2[n2.origin] ?? null;
          if (i2) return `\u062E\u06CC\u0644\u06CC \u0628\u0632\u0631\u06AF: ${n2.origin ?? "\u0645\u0642\u062F\u0627\u0631"} \u0628\u0627\u06CC\u062F ${t3}${n2.maximum.toString()} ${i2.unit ?? "\u0639\u0646\u0635\u0631"} \u0628\u0627\u0634\u062F`;
          return `\u062E\u06CC\u0644\u06CC \u0628\u0632\u0631\u06AF: ${n2.origin ?? "\u0645\u0642\u062F\u0627\u0631"} \u0628\u0627\u06CC\u062F ${t3}${n2.maximum.toString()} \u0628\u0627\u0634\u062F`;
        }
        case "too_small": {
          let t3 = n2.inclusive ? ">=" : ">", i2 = e2[n2.origin] ?? null;
          if (i2) return `\u062E\u06CC\u0644\u06CC \u06A9\u0648\u0686\u06A9: ${n2.origin} \u0628\u0627\u06CC\u062F ${t3}${n2.minimum.toString()} ${i2.unit} \u0628\u0627\u0634\u062F`;
          return `\u062E\u06CC\u0644\u06CC \u06A9\u0648\u0686\u06A9: ${n2.origin} \u0628\u0627\u06CC\u062F ${t3}${n2.minimum.toString()} \u0628\u0627\u0634\u062F`;
        }
        case "invalid_format":
          if ("starts_with" === n2.format) return `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 "${n2.prefix}" \u0634\u0631\u0648\u0639 \u0634\u0648\u062F`;
          if ("ends_with" === n2.format) return `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 "${n2.suffix}" \u062A\u0645\u0627\u0645 \u0634\u0648\u062F`;
          if ("includes" === n2.format) return `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0634\u0627\u0645\u0644 "${n2.includes}" \u0628\u0627\u0634\u062F`;
          if ("regex" === n2.format) return `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 \u0627\u0644\u06AF\u0648\u06CC ${n2.pattern} \u0645\u0637\u0627\u0628\u0642\u062A \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F`;
          return `${t2[n2.format] ?? n2.format} \u0646\u0627\u0645\u0639\u062A\u0628\u0631`;
        case "not_multiple_of":
          return `\u0639\u062F\u062F \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0645\u0636\u0631\u0628 ${n2.divisor} \u0628\u0627\u0634\u062F`;
        case "unrecognized_keys":
          return `\u06A9\u0644\u06CC\u062F${n2.keys.length > 1 ? "\u0647\u0627\u06CC" : ""} \u0646\u0627\u0634\u0646\u0627\u0633: ${i.joinValues(n2.keys, ", ")}`;
        case "invalid_key":
          return `\u06A9\u0644\u06CC\u062F \u0646\u0627\u0634\u0646\u0627\u0633 \u062F\u0631 ${n2.origin}`;
        case "invalid_union":
        default:
          return "\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631";
        case "invalid_element":
          return `\u0645\u0642\u062F\u0627\u0631 \u0646\u0627\u0645\u0639\u062A\u0628\u0631 \u062F\u0631 ${n2.origin}`;
      }
    }) };
  }, "fi", 0, function() {
    let e2, t2, r2;
    return { localeError: (e2 = { string: { unit: "merkki\xE4", subject: "merkkijonon" }, file: { unit: "tavua", subject: "tiedoston" }, array: { unit: "alkiota", subject: "listan" }, set: { unit: "alkiota", subject: "joukon" }, number: { unit: "", subject: "luvun" }, bigint: { unit: "", subject: "suuren kokonaisluvun" }, int: { unit: "", subject: "kokonaisluvun" }, date: { unit: "", subject: "p\xE4iv\xE4m\xE4\xE4r\xE4n" } }, t2 = { regex: "s\xE4\xE4nn\xF6llinen lauseke", email: "s\xE4hk\xF6postiosoite", url: "URL-osoite", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO-aikaleima", date: "ISO-p\xE4iv\xE4m\xE4\xE4r\xE4", time: "ISO-aika", duration: "ISO-kesto", ipv4: "IPv4-osoite", ipv6: "IPv6-osoite", cidrv4: "IPv4-alue", cidrv6: "IPv6-alue", base64: "base64-koodattu merkkijono", base64url: "base64url-koodattu merkkijono", json_string: "JSON-merkkijono", e164: "E.164-luku", jwt: "JWT", template_literal: "templaattimerkkijono" }, r2 = { nan: "NaN" }, (n2) => {
      switch (n2.code) {
        case "invalid_type": {
          let e3 = r2[n2.expected] ?? n2.expected, t3 = i.parsedType(n2.input), a2 = r2[t3] ?? t3;
          if (/^[A-Z]/.test(n2.expected)) return `Virheellinen tyyppi: odotettiin instanceof ${n2.expected}, oli ${a2}`;
          return `Virheellinen tyyppi: odotettiin ${e3}, oli ${a2}`;
        }
        case "invalid_value":
          if (1 === n2.values.length) return `Virheellinen sy\xF6te: t\xE4ytyy olla ${i.stringifyPrimitive(n2.values[0])}`;
          return `Virheellinen valinta: t\xE4ytyy olla yksi seuraavista: ${i.joinValues(n2.values, "|")}`;
        case "too_big": {
          let t3 = n2.inclusive ? "<=" : "<", i2 = e2[n2.origin] ?? null;
          if (i2) return `Liian suuri: ${i2.subject} t\xE4ytyy olla ${t3}${n2.maximum.toString()} ${i2.unit}`.trim();
          return `Liian suuri: arvon t\xE4ytyy olla ${t3}${n2.maximum.toString()}`;
        }
        case "too_small": {
          let t3 = n2.inclusive ? ">=" : ">", i2 = e2[n2.origin] ?? null;
          if (i2) return `Liian pieni: ${i2.subject} t\xE4ytyy olla ${t3}${n2.minimum.toString()} ${i2.unit}`.trim();
          return `Liian pieni: arvon t\xE4ytyy olla ${t3}${n2.minimum.toString()}`;
        }
        case "invalid_format":
          if ("starts_with" === n2.format) return `Virheellinen sy\xF6te: t\xE4ytyy alkaa "${n2.prefix}"`;
          if ("ends_with" === n2.format) return `Virheellinen sy\xF6te: t\xE4ytyy loppua "${n2.suffix}"`;
          if ("includes" === n2.format) return `Virheellinen sy\xF6te: t\xE4ytyy sis\xE4lt\xE4\xE4 "${n2.includes}"`;
          if ("regex" === n2.format) return `Virheellinen sy\xF6te: t\xE4ytyy vastata s\xE4\xE4nn\xF6llist\xE4 lauseketta ${n2.pattern}`;
          return `Virheellinen ${t2[n2.format] ?? n2.format}`;
        case "not_multiple_of":
          return `Virheellinen luku: t\xE4ytyy olla luvun ${n2.divisor} monikerta`;
        case "unrecognized_keys":
          return `${n2.keys.length > 1 ? "Tuntemattomat avaimet" : "Tuntematon avain"}: ${i.joinValues(n2.keys, ", ")}`;
        case "invalid_key":
          return "Virheellinen avain tietueessa";
        case "invalid_union":
          return "Virheellinen unioni";
        case "invalid_element":
          return "Virheellinen arvo joukossa";
        default:
          return "Virheellinen sy\xF6te";
      }
    }) };
  }, "fr", 0, function() {
    let e2, t2, r2;
    return { localeError: (e2 = { string: { unit: "caract\xE8res", verb: "avoir" }, file: { unit: "octets", verb: "avoir" }, array: { unit: "\xE9l\xE9ments", verb: "avoir" }, set: { unit: "\xE9l\xE9ments", verb: "avoir" } }, t2 = { regex: "entr\xE9e", email: "adresse e-mail", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "date et heure ISO", date: "date ISO", time: "heure ISO", duration: "dur\xE9e ISO", ipv4: "adresse IPv4", ipv6: "adresse IPv6", cidrv4: "plage IPv4", cidrv6: "plage IPv6", base64: "cha\xEEne encod\xE9e en base64", base64url: "cha\xEEne encod\xE9e en base64url", json_string: "cha\xEEne JSON", e164: "num\xE9ro E.164", jwt: "JWT", template_literal: "entr\xE9e" }, r2 = { string: "cha\xEEne", number: "nombre", int: "entier", boolean: "bool\xE9en", bigint: "grand entier", symbol: "symbole", undefined: "ind\xE9fini", null: "null", never: "jamais", void: "vide", date: "date", array: "tableau", object: "objet", tuple: "tuple", record: "enregistrement", map: "carte", set: "ensemble", file: "fichier", nonoptional: "non-optionnel", nan: "NaN", function: "fonction" }, (n2) => {
      switch (n2.code) {
        case "invalid_type": {
          let e3 = r2[n2.expected] ?? n2.expected, t3 = i.parsedType(n2.input), a2 = r2[t3] ?? t3;
          if (/^[A-Z]/.test(n2.expected)) return `Entr\xE9e invalide : instanceof ${n2.expected} attendu, ${a2} re\xE7u`;
          return `Entr\xE9e invalide : ${e3} attendu, ${a2} re\xE7u`;
        }
        case "invalid_value":
          if (1 === n2.values.length) return `Entr\xE9e invalide : ${i.stringifyPrimitive(n2.values[0])} attendu`;
          return `Option invalide : une valeur parmi ${i.joinValues(n2.values, "|")} attendue`;
        case "too_big": {
          let t3 = n2.inclusive ? "<=" : "<", i2 = e2[n2.origin] ?? null;
          if (i2) return `Trop grand : ${r2[n2.origin] ?? "valeur"} doit ${i2.verb} ${t3}${n2.maximum.toString()} ${i2.unit ?? "\xE9l\xE9ment(s)"}`;
          return `Trop grand : ${r2[n2.origin] ?? "valeur"} doit \xEAtre ${t3}${n2.maximum.toString()}`;
        }
        case "too_small": {
          let t3 = n2.inclusive ? ">=" : ">", i2 = e2[n2.origin] ?? null;
          if (i2) return `Trop petit : ${r2[n2.origin] ?? "valeur"} doit ${i2.verb} ${t3}${n2.minimum.toString()} ${i2.unit}`;
          return `Trop petit : ${r2[n2.origin] ?? "valeur"} doit \xEAtre ${t3}${n2.minimum.toString()}`;
        }
        case "invalid_format":
          if ("starts_with" === n2.format) return `Cha\xEEne invalide : doit commencer par "${n2.prefix}"`;
          if ("ends_with" === n2.format) return `Cha\xEEne invalide : doit se terminer par "${n2.suffix}"`;
          if ("includes" === n2.format) return `Cha\xEEne invalide : doit inclure "${n2.includes}"`;
          if ("regex" === n2.format) return `Cha\xEEne invalide : doit correspondre au mod\xE8le ${n2.pattern}`;
          return `${t2[n2.format] ?? n2.format} invalide`;
        case "not_multiple_of":
          return `Nombre invalide : doit \xEAtre un multiple de ${n2.divisor}`;
        case "unrecognized_keys":
          return `Cl\xE9${n2.keys.length > 1 ? "s" : ""} non reconnue${n2.keys.length > 1 ? "s" : ""} : ${i.joinValues(n2.keys, ", ")}`;
        case "invalid_key":
          return `Cl\xE9 invalide dans ${n2.origin}`;
        case "invalid_union":
        default:
          return "Entr\xE9e invalide";
        case "invalid_element":
          return `Valeur invalide dans ${n2.origin}`;
      }
    }) };
  }, "frCA", 0, function() {
    let e2, t2, r2;
    return { localeError: (e2 = { string: { unit: "caract\xE8res", verb: "avoir" }, file: { unit: "octets", verb: "avoir" }, array: { unit: "\xE9l\xE9ments", verb: "avoir" }, set: { unit: "\xE9l\xE9ments", verb: "avoir" } }, t2 = { regex: "entr\xE9e", email: "adresse courriel", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "date-heure ISO", date: "date ISO", time: "heure ISO", duration: "dur\xE9e ISO", ipv4: "adresse IPv4", ipv6: "adresse IPv6", cidrv4: "plage IPv4", cidrv6: "plage IPv6", base64: "cha\xEEne encod\xE9e en base64", base64url: "cha\xEEne encod\xE9e en base64url", json_string: "cha\xEEne JSON", e164: "num\xE9ro E.164", jwt: "JWT", template_literal: "entr\xE9e" }, r2 = { nan: "NaN" }, (n2) => {
      switch (n2.code) {
        case "invalid_type": {
          let e3 = r2[n2.expected] ?? n2.expected, t3 = i.parsedType(n2.input), a2 = r2[t3] ?? t3;
          if (/^[A-Z]/.test(n2.expected)) return `Entr\xE9e invalide : attendu instanceof ${n2.expected}, re\xE7u ${a2}`;
          return `Entr\xE9e invalide : attendu ${e3}, re\xE7u ${a2}`;
        }
        case "invalid_value":
          if (1 === n2.values.length) return `Entr\xE9e invalide : attendu ${i.stringifyPrimitive(n2.values[0])}`;
          return `Option invalide : attendu l'une des valeurs suivantes ${i.joinValues(n2.values, "|")}`;
        case "too_big": {
          let t3 = n2.inclusive ? "\u2264" : "<", i2 = e2[n2.origin] ?? null;
          if (i2) return `Trop grand : attendu que ${n2.origin ?? "la valeur"} ait ${t3}${n2.maximum.toString()} ${i2.unit}`;
          return `Trop grand : attendu que ${n2.origin ?? "la valeur"} soit ${t3}${n2.maximum.toString()}`;
        }
        case "too_small": {
          let t3 = n2.inclusive ? "\u2265" : ">", i2 = e2[n2.origin] ?? null;
          if (i2) return `Trop petit : attendu que ${n2.origin} ait ${t3}${n2.minimum.toString()} ${i2.unit}`;
          return `Trop petit : attendu que ${n2.origin} soit ${t3}${n2.minimum.toString()}`;
        }
        case "invalid_format":
          if ("starts_with" === n2.format) return `Cha\xEEne invalide : doit commencer par "${n2.prefix}"`;
          if ("ends_with" === n2.format) return `Cha\xEEne invalide : doit se terminer par "${n2.suffix}"`;
          if ("includes" === n2.format) return `Cha\xEEne invalide : doit inclure "${n2.includes}"`;
          if ("regex" === n2.format) return `Cha\xEEne invalide : doit correspondre au motif ${n2.pattern}`;
          return `${t2[n2.format] ?? n2.format} invalide`;
        case "not_multiple_of":
          return `Nombre invalide : doit \xEAtre un multiple de ${n2.divisor}`;
        case "unrecognized_keys":
          return `Cl\xE9${n2.keys.length > 1 ? "s" : ""} non reconnue${n2.keys.length > 1 ? "s" : ""} : ${i.joinValues(n2.keys, ", ")}`;
        case "invalid_key":
          return `Cl\xE9 invalide dans ${n2.origin}`;
        case "invalid_union":
        default:
          return "Entr\xE9e invalide";
        case "invalid_element":
          return `Valeur invalide dans ${n2.origin}`;
      }
    }) };
  }, "he", 0, function() {
    let e2, t2, r2, n2, a2, o2, s2, u2, l2;
    return { localeError: (e2 = { string: { label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA", gender: "f" }, number: { label: "\u05DE\u05E1\u05E4\u05E8", gender: "m" }, boolean: { label: "\u05E2\u05E8\u05DA \u05D1\u05D5\u05DC\u05D9\u05D0\u05E0\u05D9", gender: "m" }, bigint: { label: "BigInt", gender: "m" }, date: { label: "\u05EA\u05D0\u05E8\u05D9\u05DA", gender: "m" }, array: { label: "\u05DE\u05E2\u05E8\u05DA", gender: "m" }, object: { label: "\u05D0\u05D5\u05D1\u05D9\u05D9\u05E7\u05D8", gender: "m" }, null: { label: "\u05E2\u05E8\u05DA \u05E8\u05D9\u05E7 (null)", gender: "m" }, undefined: { label: "\u05E2\u05E8\u05DA \u05DC\u05D0 \u05DE\u05D5\u05D2\u05D3\u05E8 (undefined)", gender: "m" }, symbol: { label: "\u05E1\u05D9\u05DE\u05D1\u05D5\u05DC (Symbol)", gender: "m" }, function: { label: "\u05E4\u05D5\u05E0\u05E7\u05E6\u05D9\u05D4", gender: "f" }, map: { label: "\u05DE\u05E4\u05D4 (Map)", gender: "f" }, set: { label: "\u05E7\u05D1\u05D5\u05E6\u05D4 (Set)", gender: "f" }, file: { label: "\u05E7\u05D5\u05D1\u05E5", gender: "m" }, promise: { label: "Promise", gender: "m" }, NaN: { label: "NaN", gender: "m" }, unknown: { label: "\u05E2\u05E8\u05DA \u05DC\u05D0 \u05D9\u05D3\u05D5\u05E2", gender: "m" }, value: { label: "\u05E2\u05E8\u05DA", gender: "m" } }, t2 = { string: { unit: "\u05EA\u05D5\u05D5\u05D9\u05DD", shortLabel: "\u05E7\u05E6\u05E8", longLabel: "\u05D0\u05E8\u05D5\u05DA" }, file: { unit: "\u05D1\u05D9\u05D9\u05D8\u05D9\u05DD", shortLabel: "\u05E7\u05D8\u05DF", longLabel: "\u05D2\u05D3\u05D5\u05DC" }, array: { unit: "\u05E4\u05E8\u05D9\u05D8\u05D9\u05DD", shortLabel: "\u05E7\u05D8\u05DF", longLabel: "\u05D2\u05D3\u05D5\u05DC" }, set: { unit: "\u05E4\u05E8\u05D9\u05D8\u05D9\u05DD", shortLabel: "\u05E7\u05D8\u05DF", longLabel: "\u05D2\u05D3\u05D5\u05DC" }, number: { unit: "", shortLabel: "\u05E7\u05D8\u05DF", longLabel: "\u05D2\u05D3\u05D5\u05DC" } }, r2 = (t3) => t3 ? e2[t3] : void 0, n2 = (t3) => {
      let i2 = r2(t3);
      return i2 ? i2.label : t3 ?? e2.unknown.label;
    }, a2 = (e3) => `\u05D4${n2(e3)}`, o2 = (e3) => {
      let t3 = r2(e3);
      return "f" === (t3?.gender ?? "m") ? "\u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05D9\u05D5\u05EA" : "\u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA";
    }, s2 = (e3) => e3 ? t2[e3] ?? null : null, u2 = { regex: { label: "\u05E7\u05DC\u05D8", gender: "m" }, email: { label: "\u05DB\u05EA\u05D5\u05D1\u05EA \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC", gender: "f" }, url: { label: "\u05DB\u05EA\u05D5\u05D1\u05EA \u05E8\u05E9\u05EA", gender: "f" }, emoji: { label: "\u05D0\u05D9\u05DE\u05D5\u05D2'\u05D9", gender: "m" }, uuid: { label: "UUID", gender: "m" }, nanoid: { label: "nanoid", gender: "m" }, guid: { label: "GUID", gender: "m" }, cuid: { label: "cuid", gender: "m" }, cuid2: { label: "cuid2", gender: "m" }, ulid: { label: "ULID", gender: "m" }, xid: { label: "XID", gender: "m" }, ksuid: { label: "KSUID", gender: "m" }, datetime: { label: "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D5\u05D6\u05DE\u05DF ISO", gender: "m" }, date: { label: "\u05EA\u05D0\u05E8\u05D9\u05DA ISO", gender: "m" }, time: { label: "\u05D6\u05DE\u05DF ISO", gender: "m" }, duration: { label: "\u05DE\u05E9\u05DA \u05D6\u05DE\u05DF ISO", gender: "m" }, ipv4: { label: "\u05DB\u05EA\u05D5\u05D1\u05EA IPv4", gender: "f" }, ipv6: { label: "\u05DB\u05EA\u05D5\u05D1\u05EA IPv6", gender: "f" }, cidrv4: { label: "\u05D8\u05D5\u05D5\u05D7 IPv4", gender: "m" }, cidrv6: { label: "\u05D8\u05D5\u05D5\u05D7 IPv6", gender: "m" }, base64: { label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D1\u05D1\u05E1\u05D9\u05E1 64", gender: "f" }, base64url: { label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D1\u05D1\u05E1\u05D9\u05E1 64 \u05DC\u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05E8\u05E9\u05EA", gender: "f" }, json_string: { label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA JSON", gender: "f" }, e164: { label: "\u05DE\u05E1\u05E4\u05E8 E.164", gender: "m" }, jwt: { label: "JWT", gender: "m" }, ends_with: { label: "\u05E7\u05DC\u05D8", gender: "m" }, includes: { label: "\u05E7\u05DC\u05D8", gender: "m" }, lowercase: { label: "\u05E7\u05DC\u05D8", gender: "m" }, starts_with: { label: "\u05E7\u05DC\u05D8", gender: "m" }, uppercase: { label: "\u05E7\u05DC\u05D8", gender: "m" } }, l2 = { nan: "NaN" }, (t3) => {
      switch (t3.code) {
        case "invalid_type": {
          let r3 = t3.expected, a3 = l2[r3 ?? ""] ?? n2(r3), o3 = i.parsedType(t3.input), s3 = l2[o3] ?? e2[o3]?.label ?? o3;
          if (/^[A-Z]/.test(t3.expected)) return `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA instanceof ${t3.expected}, \u05D4\u05EA\u05E7\u05D1\u05DC ${s3}`;
          return `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${a3}, \u05D4\u05EA\u05E7\u05D1\u05DC ${s3}`;
        }
        case "invalid_value": {
          if (1 === t3.values.length) return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05E2\u05E8\u05DA \u05D7\u05D9\u05D9\u05D1 \u05DC\u05D4\u05D9\u05D5\u05EA ${i.stringifyPrimitive(t3.values[0])}`;
          let e3 = t3.values.map((e4) => i.stringifyPrimitive(e4));
          if (2 === t3.values.length) return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05D4\u05DE\u05EA\u05D0\u05D9\u05DE\u05D5\u05EA \u05D4\u05DF ${e3[0]} \u05D0\u05D5 ${e3[1]}`;
          let r3 = e3[e3.length - 1], n3 = e3.slice(0, -1).join(", ");
          return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05D4\u05DE\u05EA\u05D0\u05D9\u05DE\u05D5\u05EA \u05D4\u05DF ${n3} \u05D0\u05D5 ${r3}`;
        }
        case "too_big": {
          let e3 = s2(t3.origin), i2 = a2(t3.origin ?? "value");
          if ("string" === t3.origin) return `${e3?.longLabel ?? "\u05D0\u05E8\u05D5\u05DA"} \u05DE\u05D3\u05D9: ${i2} \u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05DB\u05D9\u05DC ${t3.maximum.toString()} ${e3?.unit ?? ""} ${t3.inclusive ? "\u05D0\u05D5 \u05E4\u05D7\u05D5\u05EA" : "\u05DC\u05DB\u05DC \u05D4\u05D9\u05D5\u05EA\u05E8"}`.trim();
          if ("number" === t3.origin) {
            let e4 = t3.inclusive ? `\u05E7\u05D8\u05DF \u05D0\u05D5 \u05E9\u05D5\u05D5\u05D4 \u05DC-${t3.maximum}` : `\u05E7\u05D8\u05DF \u05DE-${t3.maximum}`;
            return `\u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9: ${i2} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${e4}`;
          }
          if ("array" === t3.origin || "set" === t3.origin) {
            let r4 = "set" === t3.origin ? "\u05E6\u05E8\u05D9\u05DB\u05D4" : "\u05E6\u05E8\u05D9\u05DA", n4 = t3.inclusive ? `${t3.maximum} ${e3?.unit ?? ""} \u05D0\u05D5 \u05E4\u05D7\u05D5\u05EA` : `\u05E4\u05D7\u05D5\u05EA \u05DE-${t3.maximum} ${e3?.unit ?? ""}`;
            return `\u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9: ${i2} ${r4} \u05DC\u05D4\u05DB\u05D9\u05DC ${n4}`.trim();
          }
          let r3 = t3.inclusive ? "<=" : "<", n3 = o2(t3.origin ?? "value");
          if (e3?.unit) return `${e3.longLabel} \u05DE\u05D3\u05D9: ${i2} ${n3} ${r3}${t3.maximum.toString()} ${e3.unit}`;
          return `${e3?.longLabel ?? "\u05D2\u05D3\u05D5\u05DC"} \u05DE\u05D3\u05D9: ${i2} ${n3} ${r3}${t3.maximum.toString()}`;
        }
        case "too_small": {
          let e3 = s2(t3.origin), i2 = a2(t3.origin ?? "value");
          if ("string" === t3.origin) return `${e3?.shortLabel ?? "\u05E7\u05E6\u05E8"} \u05DE\u05D3\u05D9: ${i2} \u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05DB\u05D9\u05DC ${t3.minimum.toString()} ${e3?.unit ?? ""} ${t3.inclusive ? "\u05D0\u05D5 \u05D9\u05D5\u05EA\u05E8" : "\u05DC\u05E4\u05D7\u05D5\u05EA"}`.trim();
          if ("number" === t3.origin) {
            let e4 = t3.inclusive ? `\u05D2\u05D3\u05D5\u05DC \u05D0\u05D5 \u05E9\u05D5\u05D5\u05D4 \u05DC-${t3.minimum}` : `\u05D2\u05D3\u05D5\u05DC \u05DE-${t3.minimum}`;
            return `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${i2} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${e4}`;
          }
          if ("array" === t3.origin || "set" === t3.origin) {
            let r4 = "set" === t3.origin ? "\u05E6\u05E8\u05D9\u05DB\u05D4" : "\u05E6\u05E8\u05D9\u05DA";
            if (1 === t3.minimum && t3.inclusive) {
              let e4 = (t3.origin, "\u05DC\u05E4\u05D7\u05D5\u05EA \u05E4\u05E8\u05D9\u05D8 \u05D0\u05D7\u05D3");
              return `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${i2} ${r4} \u05DC\u05D4\u05DB\u05D9\u05DC ${e4}`;
            }
            let n4 = t3.inclusive ? `${t3.minimum} ${e3?.unit ?? ""} \u05D0\u05D5 \u05D9\u05D5\u05EA\u05E8` : `\u05D9\u05D5\u05EA\u05E8 \u05DE-${t3.minimum} ${e3?.unit ?? ""}`;
            return `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${i2} ${r4} \u05DC\u05D4\u05DB\u05D9\u05DC ${n4}`.trim();
          }
          let r3 = t3.inclusive ? ">=" : ">", n3 = o2(t3.origin ?? "value");
          if (e3?.unit) return `${e3.shortLabel} \u05DE\u05D3\u05D9: ${i2} ${n3} ${r3}${t3.minimum.toString()} ${e3.unit}`;
          return `${e3?.shortLabel ?? "\u05E7\u05D8\u05DF"} \u05DE\u05D3\u05D9: ${i2} ${n3} ${r3}${t3.minimum.toString()}`;
        }
        case "invalid_format": {
          if ("starts_with" === t3.format) return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05EA\u05D7\u05D9\u05DC \u05D1 "${t3.prefix}"`;
          if ("ends_with" === t3.format) return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05E1\u05EA\u05D9\u05D9\u05DD \u05D1 "${t3.suffix}"`;
          if ("includes" === t3.format) return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05DB\u05DC\u05D5\u05DC "${t3.includes}"`;
          if ("regex" === t3.format) return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05EA\u05D0\u05D9\u05DD \u05DC\u05EA\u05D1\u05E0\u05D9\u05EA ${t3.pattern}`;
          let e3 = u2[t3.format], i2 = e3?.label ?? t3.format, r3 = e3?.gender ?? "m";
          return `${i2} \u05DC\u05D0 ${"f" === r3 ? "\u05EA\u05E7\u05D9\u05E0\u05D4" : "\u05EA\u05E7\u05D9\u05DF"}`;
        }
        case "not_multiple_of":
          return `\u05DE\u05E1\u05E4\u05E8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D7\u05D9\u05D9\u05D1 \u05DC\u05D4\u05D9\u05D5\u05EA \u05DE\u05DB\u05E4\u05DC\u05D4 \u05E9\u05DC ${t3.divisor}`;
        case "unrecognized_keys":
          return `\u05DE\u05E4\u05EA\u05D7${t3.keys.length > 1 ? "\u05D5\u05EA" : ""} \u05DC\u05D0 \u05DE\u05D6\u05D5\u05D4${t3.keys.length > 1 ? "\u05D9\u05DD" : "\u05D4"}: ${i.joinValues(t3.keys, ", ")}`;
        case "invalid_key":
          return "\u05E9\u05D3\u05D4 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF \u05D1\u05D0\u05D5\u05D1\u05D9\u05D9\u05E7\u05D8";
        case "invalid_union":
        default:
          return "\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF";
        case "invalid_element": {
          let e3 = a2(t3.origin ?? "array");
          return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF \u05D1${e3}`;
        }
      }
    }) };
  }, "hr", 0, function() {
    let e2, t2, r2;
    return { localeError: (e2 = { string: { unit: "znakova", verb: "imati" }, file: { unit: "bajtova", verb: "imati" }, array: { unit: "stavki", verb: "imati" }, set: { unit: "stavki", verb: "imati" } }, t2 = { regex: "unos", email: "email adresa", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO datum i vrijeme", date: "ISO datum", time: "ISO vrijeme", duration: "ISO trajanje", ipv4: "IPv4 adresa", ipv6: "IPv6 adresa", cidrv4: "IPv4 raspon", cidrv6: "IPv6 raspon", base64: "base64 kodirani tekst", base64url: "base64url kodirani tekst", json_string: "JSON tekst", e164: "E.164 broj", jwt: "JWT", template_literal: "unos" }, r2 = { nan: "NaN", string: "tekst", number: "broj", boolean: "boolean", array: "niz", object: "objekt", set: "skup", file: "datoteka", date: "datum", bigint: "bigint", symbol: "simbol", undefined: "undefined", null: "null", function: "funkcija", map: "mapa" }, (n2) => {
      switch (n2.code) {
        case "invalid_type": {
          let e3 = r2[n2.expected] ?? n2.expected, t3 = i.parsedType(n2.input), a2 = r2[t3] ?? t3;
          if (/^[A-Z]/.test(n2.expected)) return `Neispravan unos: o\u010Dekuje se instanceof ${n2.expected}, a primljeno je ${a2}`;
          return `Neispravan unos: o\u010Dekuje se ${e3}, a primljeno je ${a2}`;
        }
        case "invalid_value":
          if (1 === n2.values.length) return `Neispravna vrijednost: o\u010Dekivano ${i.stringifyPrimitive(n2.values[0])}`;
          return `Neispravna opcija: o\u010Dekivano jedno od ${i.joinValues(n2.values, "|")}`;
        case "too_big": {
          let t3 = n2.inclusive ? "<=" : "<", i2 = e2[n2.origin] ?? null, a2 = r2[n2.origin] ?? n2.origin;
          if (i2) return `Preveliko: o\u010Dekivano da ${a2 ?? "vrijednost"} ima ${t3}${n2.maximum.toString()} ${i2.unit ?? "elemenata"}`;
          return `Preveliko: o\u010Dekivano da ${a2 ?? "vrijednost"} bude ${t3}${n2.maximum.toString()}`;
        }
        case "too_small": {
          let t3 = n2.inclusive ? ">=" : ">", i2 = e2[n2.origin] ?? null, a2 = r2[n2.origin] ?? n2.origin;
          if (i2) return `Premalo: o\u010Dekivano da ${a2} ima ${t3}${n2.minimum.toString()} ${i2.unit}`;
          return `Premalo: o\u010Dekivano da ${a2} bude ${t3}${n2.minimum.toString()}`;
        }
        case "invalid_format":
          if ("starts_with" === n2.format) return `Neispravan tekst: mora zapo\u010Dinjati s "${n2.prefix}"`;
          if ("ends_with" === n2.format) return `Neispravan tekst: mora zavr\u0161avati s "${n2.suffix}"`;
          if ("includes" === n2.format) return `Neispravan tekst: mora sadr\u017Eavati "${n2.includes}"`;
          if ("regex" === n2.format) return `Neispravan tekst: mora odgovarati uzorku ${n2.pattern}`;
          return `Neispravna ${t2[n2.format] ?? n2.format}`;
        case "not_multiple_of":
          return `Neispravan broj: mora biti vi\u0161ekratnik od ${n2.divisor}`;
        case "unrecognized_keys":
          return `Neprepoznat${n2.keys.length > 1 ? "i klju\u010Devi" : " klju\u010D"}: ${i.joinValues(n2.keys, ", ")}`;
        case "invalid_key":
          return `Neispravan klju\u010D u ${r2[n2.origin] ?? n2.origin}`;
        case "invalid_union":
        default:
          return "Neispravan unos";
        case "invalid_element":
          return `Neispravna vrijednost u ${r2[n2.origin] ?? n2.origin}`;
      }
    }) };
  }, "hu", 0, function() {
    let e2, t2, r2;
    return { localeError: (e2 = { string: { unit: "karakter", verb: "legyen" }, file: { unit: "byte", verb: "legyen" }, array: { unit: "elem", verb: "legyen" }, set: { unit: "elem", verb: "legyen" } }, t2 = { regex: "bemenet", email: "email c\xEDm", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO id\u0151b\xE9lyeg", date: "ISO d\xE1tum", time: "ISO id\u0151", duration: "ISO id\u0151intervallum", ipv4: "IPv4 c\xEDm", ipv6: "IPv6 c\xEDm", cidrv4: "IPv4 tartom\xE1ny", cidrv6: "IPv6 tartom\xE1ny", base64: "base64-k\xF3dolt string", base64url: "base64url-k\xF3dolt string", json_string: "JSON string", e164: "E.164 sz\xE1m", jwt: "JWT", template_literal: "bemenet" }, r2 = { nan: "NaN", number: "sz\xE1m", array: "t\xF6mb" }, (n2) => {
      switch (n2.code) {
        case "invalid_type": {
          let e3 = r2[n2.expected] ?? n2.expected, t3 = i.parsedType(n2.input), a2 = r2[t3] ?? t3;
          if (/^[A-Z]/.test(n2.expected)) return `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k instanceof ${n2.expected}, a kapott \xE9rt\xE9k ${a2}`;
          return `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k ${e3}, a kapott \xE9rt\xE9k ${a2}`;
        }
        case "invalid_value":
          if (1 === n2.values.length) return `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k ${i.stringifyPrimitive(n2.values[0])}`;
          return `\xC9rv\xE9nytelen opci\xF3: valamelyik \xE9rt\xE9k v\xE1rt ${i.joinValues(n2.values, "|")}`;
        case "too_big": {
          let t3 = n2.inclusive ? "<=" : "<", i2 = e2[n2.origin] ?? null;
          if (i2) return `T\xFAl nagy: ${n2.origin ?? "\xE9rt\xE9k"} m\xE9rete t\xFAl nagy ${t3}${n2.maximum.toString()} ${i2.unit ?? "elem"}`;
          return `T\xFAl nagy: a bemeneti \xE9rt\xE9k ${n2.origin ?? "\xE9rt\xE9k"} t\xFAl nagy: ${t3}${n2.maximum.toString()}`;
        }
        case "too_small": {
          let t3 = n2.inclusive ? ">=" : ">", i2 = e2[n2.origin] ?? null;
          if (i2) return `T\xFAl kicsi: a bemeneti \xE9rt\xE9k ${n2.origin} m\xE9rete t\xFAl kicsi ${t3}${n2.minimum.toString()} ${i2.unit}`;
          return `T\xFAl kicsi: a bemeneti \xE9rt\xE9k ${n2.origin} t\xFAl kicsi ${t3}${n2.minimum.toString()}`;
        }
        case "invalid_format":
          if ("starts_with" === n2.format) return `\xC9rv\xE9nytelen string: "${n2.prefix}" \xE9rt\xE9kkel kell kezd\u0151dnie`;
          if ("ends_with" === n2.format) return `\xC9rv\xE9nytelen string: "${n2.suffix}" \xE9rt\xE9kkel kell v\xE9gz\u0151dnie`;
          if ("includes" === n2.format) return `\xC9rv\xE9nytelen string: "${n2.includes}" \xE9rt\xE9ket kell tartalmaznia`;
          if ("regex" === n2.format) return `\xC9rv\xE9nytelen string: ${n2.pattern} mint\xE1nak kell megfelelnie`;
          return `\xC9rv\xE9nytelen ${t2[n2.format] ?? n2.format}`;
        case "not_multiple_of":
          return `\xC9rv\xE9nytelen sz\xE1m: ${n2.divisor} t\xF6bbsz\xF6r\xF6s\xE9nek kell lennie`;
        case "unrecognized_keys":
          return `Ismeretlen kulcs${n2.keys.length > 1 ? "s" : ""}: ${i.joinValues(n2.keys, ", ")}`;
        case "invalid_key":
          return `\xC9rv\xE9nytelen kulcs ${n2.origin}`;
        case "invalid_union":
        default:
          return "\xC9rv\xE9nytelen bemenet";
        case "invalid_element":
          return `\xC9rv\xE9nytelen \xE9rt\xE9k: ${n2.origin}`;
      }
    }) };
  }, "hy", 0, function() {
    let e2, t2, r2;
    return { localeError: (e2 = { string: { unit: { one: "\u0576\u0577\u0561\u0576", many: "\u0576\u0577\u0561\u0576\u0576\u0565\u0580" }, verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C" }, file: { unit: { one: "\u0562\u0561\u0575\u0569", many: "\u0562\u0561\u0575\u0569\u0565\u0580" }, verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C" }, array: { unit: { one: "\u057F\u0561\u0580\u0580", many: "\u057F\u0561\u0580\u0580\u0565\u0580" }, verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C" }, set: { unit: { one: "\u057F\u0561\u0580\u0580", many: "\u057F\u0561\u0580\u0580\u0565\u0580" }, verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C" } }, t2 = { regex: "\u0574\u0578\u0582\u057F\u0584", email: "\u0567\u056C. \u0570\u0561\u057D\u0581\u0565", url: "URL", emoji: "\u0567\u0574\u0578\u057B\u056B", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO \u0561\u0574\u057D\u0561\u0569\u056B\u057E \u0587 \u056A\u0561\u0574", date: "ISO \u0561\u0574\u057D\u0561\u0569\u056B\u057E", time: "ISO \u056A\u0561\u0574", duration: "ISO \u057F\u0587\u0578\u0572\u0578\u0582\u0569\u0575\u0578\u0582\u0576", ipv4: "IPv4 \u0570\u0561\u057D\u0581\u0565", ipv6: "IPv6 \u0570\u0561\u057D\u0581\u0565", cidrv4: "IPv4 \u0574\u056B\u057B\u0561\u056F\u0561\u0575\u0584", cidrv6: "IPv6 \u0574\u056B\u057B\u0561\u056F\u0561\u0575\u0584", base64: "base64 \u0571\u0587\u0561\u0579\u0561\u0583\u0578\u057E \u057F\u0578\u0572", base64url: "base64url \u0571\u0587\u0561\u0579\u0561\u0583\u0578\u057E \u057F\u0578\u0572", json_string: "JSON \u057F\u0578\u0572", e164: "E.164 \u0570\u0561\u0574\u0561\u0580", jwt: "JWT", template_literal: "\u0574\u0578\u0582\u057F\u0584" }, r2 = { nan: "NaN", number: "\u0569\u056B\u057E", array: "\u0566\u0561\u0576\u0563\u057E\u0561\u056E" }, (n2) => {
      switch (n2.code) {
        case "invalid_type": {
          let e3 = r2[n2.expected] ?? n2.expected, t3 = i.parsedType(n2.input), a2 = r2[t3] ?? t3;
          if (/^[A-Z]/.test(n2.expected)) return `\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 instanceof ${n2.expected}, \u057D\u057F\u0561\u0581\u057E\u0565\u056C \u0567 ${a2}`;
          return `\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 ${e3}, \u057D\u057F\u0561\u0581\u057E\u0565\u056C \u0567 ${a2}`;
        }
        case "invalid_value":
          if (1 === n2.values.length) return `\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 ${i.stringifyPrimitive(n2.values[1])}`;
          return `\u054D\u056D\u0561\u056C \u057F\u0561\u0580\u0562\u0565\u0580\u0561\u056F\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 \u0570\u0565\u057F\u0587\u0575\u0561\u056C\u0576\u0565\u0580\u056B\u0581 \u0574\u0565\u056F\u0568\u055D ${i.joinValues(n2.values, "|")}`;
        case "too_big": {
          let t3 = n2.inclusive ? "<=" : "<", i2 = e2[n2.origin] ?? null;
          if (i2) {
            let e3 = I(Number(n2.maximum), i2.unit.one, i2.unit.many);
            return `\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0574\u0565\u056E \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 ${Z(n2.origin ?? "\u0561\u0580\u056A\u0565\u0584")} \u056F\u0578\u0582\u0576\u0565\u0576\u0561 ${t3}${n2.maximum.toString()} ${e3}`;
          }
          return `\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0574\u0565\u056E \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 ${Z(n2.origin ?? "\u0561\u0580\u056A\u0565\u0584")} \u056C\u056B\u0576\u056B ${t3}${n2.maximum.toString()}`;
        }
        case "too_small": {
          let t3 = n2.inclusive ? ">=" : ">", i2 = e2[n2.origin] ?? null;
          if (i2) {
            let e3 = I(Number(n2.minimum), i2.unit.one, i2.unit.many);
            return `\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0583\u0578\u0584\u0580 \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 ${Z(n2.origin)} \u056F\u0578\u0582\u0576\u0565\u0576\u0561 ${t3}${n2.minimum.toString()} ${e3}`;
          }
          return `\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0583\u0578\u0584\u0580 \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 ${Z(n2.origin)} \u056C\u056B\u0576\u056B ${t3}${n2.minimum.toString()}`;
        }
        case "invalid_format":
          if ("starts_with" === n2.format) return `\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u057D\u056F\u057D\u057E\u056B "${n2.prefix}"-\u0578\u057E`;
          if ("ends_with" === n2.format) return `\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u0561\u057E\u0561\u0580\u057F\u057E\u056B "${n2.suffix}"-\u0578\u057E`;
          if ("includes" === n2.format) return `\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u057A\u0561\u0580\u0578\u0582\u0576\u0561\u056F\u056B "${n2.includes}"`;
          if ("regex" === n2.format) return `\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u0570\u0561\u0574\u0561\u057A\u0561\u057F\u0561\u057D\u056D\u0561\u0576\u056B ${n2.pattern} \u0571\u0587\u0561\u0579\u0561\u0583\u056B\u0576`;
          return `\u054D\u056D\u0561\u056C ${t2[n2.format] ?? n2.format}`;
        case "not_multiple_of":
          return `\u054D\u056D\u0561\u056C \u0569\u056B\u057E\u2024 \u057A\u0565\u057F\u0584 \u0567 \u0562\u0561\u0566\u0574\u0561\u057A\u0561\u057F\u056B\u056F \u056C\u056B\u0576\u056B ${n2.divisor}-\u056B`;
        case "unrecognized_keys":
          return `\u0549\u0573\u0561\u0576\u0561\u0579\u057E\u0561\u056E \u0562\u0561\u0576\u0561\u056C\u056B${n2.keys.length > 1 ? "\u0576\u0565\u0580" : ""}. ${i.joinValues(n2.keys, ", ")}`;
        case "invalid_key":
          return `\u054D\u056D\u0561\u056C \u0562\u0561\u0576\u0561\u056C\u056B ${Z(n2.origin)}-\u0578\u0582\u0574`;
        case "invalid_union":
        default:
          return "\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574";
        case "invalid_element":
          return `\u054D\u056D\u0561\u056C \u0561\u0580\u056A\u0565\u0584 ${Z(n2.origin)}-\u0578\u0582\u0574`;
      }
    }) };
  }, "id", 0, function() {
    let e2, t2, r2;
    return { localeError: (e2 = { string: { unit: "karakter", verb: "memiliki" }, file: { unit: "byte", verb: "memiliki" }, array: { unit: "item", verb: "memiliki" }, set: { unit: "item", verb: "memiliki" } }, t2 = { regex: "input", email: "alamat email", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "tanggal dan waktu format ISO", date: "tanggal format ISO", time: "jam format ISO", duration: "durasi format ISO", ipv4: "alamat IPv4", ipv6: "alamat IPv6", cidrv4: "rentang alamat IPv4", cidrv6: "rentang alamat IPv6", base64: "string dengan enkode base64", base64url: "string dengan enkode base64url", json_string: "string JSON", e164: "angka E.164", jwt: "JWT", template_literal: "input" }, r2 = { nan: "NaN" }, (n2) => {
      switch (n2.code) {
        case "invalid_type": {
          let e3 = r2[n2.expected] ?? n2.expected, t3 = i.parsedType(n2.input), a2 = r2[t3] ?? t3;
          if (/^[A-Z]/.test(n2.expected)) return `Input tidak valid: diharapkan instanceof ${n2.expected}, diterima ${a2}`;
          return `Input tidak valid: diharapkan ${e3}, diterima ${a2}`;
        }
        case "invalid_value":
          if (1 === n2.values.length) return `Input tidak valid: diharapkan ${i.stringifyPrimitive(n2.values[0])}`;
          return `Pilihan tidak valid: diharapkan salah satu dari ${i.joinValues(n2.values, "|")}`;
        case "too_big": {
          let t3 = n2.inclusive ? "<=" : "<", i2 = e2[n2.origin] ?? null;
          if (i2) return `Terlalu besar: diharapkan ${n2.origin ?? "value"} memiliki ${t3}${n2.maximum.toString()} ${i2.unit ?? "elemen"}`;
          return `Terlalu besar: diharapkan ${n2.origin ?? "value"} menjadi ${t3}${n2.maximum.toString()}`;
        }
        case "too_small": {
          let t3 = n2.inclusive ? ">=" : ">", i2 = e2[n2.origin] ?? null;
          if (i2) return `Terlalu kecil: diharapkan ${n2.origin} memiliki ${t3}${n2.minimum.toString()} ${i2.unit}`;
          return `Terlalu kecil: diharapkan ${n2.origin} menjadi ${t3}${n2.minimum.toString()}`;
        }
        case "invalid_format":
          if ("starts_with" === n2.format) return `String tidak valid: harus dimulai dengan "${n2.prefix}"`;
          if ("ends_with" === n2.format) return `String tidak valid: harus berakhir dengan "${n2.suffix}"`;
          if ("includes" === n2.format) return `String tidak valid: harus menyertakan "${n2.includes}"`;
          if ("regex" === n2.format) return `String tidak valid: harus sesuai pola ${n2.pattern}`;
          return `${t2[n2.format] ?? n2.format} tidak valid`;
        case "not_multiple_of":
          return `Angka tidak valid: harus kelipatan dari ${n2.divisor}`;
        case "unrecognized_keys":
          return `Kunci tidak dikenali ${n2.keys.length > 1 ? "s" : ""}: ${i.joinValues(n2.keys, ", ")}`;
        case "invalid_key":
          return `Kunci tidak valid di ${n2.origin}`;
        case "invalid_union":
        default:
          return "Input tidak valid";
        case "invalid_element":
          return `Nilai tidak valid di ${n2.origin}`;
      }
    }) };
  }, "is", 0, function() {
    let e2, t2, r2;
    return { localeError: (e2 = { string: { unit: "stafi", verb: "a\xF0 hafa" }, file: { unit: "b\xE6ti", verb: "a\xF0 hafa" }, array: { unit: "hluti", verb: "a\xF0 hafa" }, set: { unit: "hluti", verb: "a\xF0 hafa" } }, t2 = { regex: "gildi", email: "netfang", url: "vefsl\xF3\xF0", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO dagsetning og t\xEDmi", date: "ISO dagsetning", time: "ISO t\xEDmi", duration: "ISO t\xEDmalengd", ipv4: "IPv4 address", ipv6: "IPv6 address", cidrv4: "IPv4 range", cidrv6: "IPv6 range", base64: "base64-encoded strengur", base64url: "base64url-encoded strengur", json_string: "JSON strengur", e164: "E.164 t\xF6lugildi", jwt: "JWT", template_literal: "gildi" }, r2 = { nan: "NaN", number: "n\xFAmer", array: "fylki" }, (n2) => {
      switch (n2.code) {
        case "invalid_type": {
          let e3 = r2[n2.expected] ?? n2.expected, t3 = i.parsedType(n2.input), a2 = r2[t3] ?? t3;
          if (/^[A-Z]/.test(n2.expected)) return `Rangt gildi: \xDE\xFA sl\xF3st inn ${a2} \xFEar sem \xE1 a\xF0 vera instanceof ${n2.expected}`;
          return `Rangt gildi: \xDE\xFA sl\xF3st inn ${a2} \xFEar sem \xE1 a\xF0 vera ${e3}`;
        }
        case "invalid_value":
          if (1 === n2.values.length) return `Rangt gildi: gert r\xE1\xF0 fyrir ${i.stringifyPrimitive(n2.values[0])}`;
          return `\xD3gilt val: m\xE1 vera eitt af eftirfarandi ${i.joinValues(n2.values, "|")}`;
        case "too_big": {
          let t3 = n2.inclusive ? "<=" : "<", i2 = e2[n2.origin] ?? null;
          if (i2) return `Of st\xF3rt: gert er r\xE1\xF0 fyrir a\xF0 ${n2.origin ?? "gildi"} hafi ${t3}${n2.maximum.toString()} ${i2.unit ?? "hluti"}`;
          return `Of st\xF3rt: gert er r\xE1\xF0 fyrir a\xF0 ${n2.origin ?? "gildi"} s\xE9 ${t3}${n2.maximum.toString()}`;
        }
        case "too_small": {
          let t3 = n2.inclusive ? ">=" : ">", i2 = e2[n2.origin] ?? null;
          if (i2) return `Of l\xEDti\xF0: gert er r\xE1\xF0 fyrir a\xF0 ${n2.origin} hafi ${t3}${n2.minimum.toString()} ${i2.unit}`;
          return `Of l\xEDti\xF0: gert er r\xE1\xF0 fyrir a\xF0 ${n2.origin} s\xE9 ${t3}${n2.minimum.toString()}`;
        }
        case "invalid_format":
          if ("starts_with" === n2.format) return `\xD3gildur strengur: ver\xF0ur a\xF0 byrja \xE1 "${n2.prefix}"`;
          if ("ends_with" === n2.format) return `\xD3gildur strengur: ver\xF0ur a\xF0 enda \xE1 "${n2.suffix}"`;
          if ("includes" === n2.format) return `\xD3gildur strengur: ver\xF0ur a\xF0 innihalda "${n2.includes}"`;
          if ("regex" === n2.format) return `\xD3gildur strengur: ver\xF0ur a\xF0 fylgja mynstri ${n2.pattern}`;
          return `Rangt ${t2[n2.format] ?? n2.format}`;
        case "not_multiple_of":
          return `R\xF6ng tala: ver\xF0ur a\xF0 vera margfeldi af ${n2.divisor}`;
        case "unrecognized_keys":
          return `\xD3\xFEekkt ${n2.keys.length > 1 ? "ir lyklar" : "ur lykill"}: ${i.joinValues(n2.keys, ", ")}`;
        case "invalid_key":
          return `Rangur lykill \xED ${n2.origin}`;
        case "invalid_union":
        default:
          return "Rangt gildi";
        case "invalid_element":
          return `Rangt gildi \xED ${n2.origin}`;
      }
    }) };
  }, "it", 0, function() {
    let e2, t2, r2;
    return { localeError: (e2 = { string: { unit: "caratteri", verb: "avere" }, file: { unit: "byte", verb: "avere" }, array: { unit: "elementi", verb: "avere" }, set: { unit: "elementi", verb: "avere" } }, t2 = { regex: "input", email: "indirizzo email", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "data e ora ISO", date: "data ISO", time: "ora ISO", duration: "durata ISO", ipv4: "indirizzo IPv4", ipv6: "indirizzo IPv6", cidrv4: "intervallo IPv4", cidrv6: "intervallo IPv6", base64: "stringa codificata in base64", base64url: "URL codificata in base64", json_string: "stringa JSON", e164: "numero E.164", jwt: "JWT", template_literal: "input" }, r2 = { nan: "NaN", number: "numero", array: "vettore" }, (n2) => {
      switch (n2.code) {
        case "invalid_type": {
          let e3 = r2[n2.expected] ?? n2.expected, t3 = i.parsedType(n2.input), a2 = r2[t3] ?? t3;
          if (/^[A-Z]/.test(n2.expected)) return `Input non valido: atteso instanceof ${n2.expected}, ricevuto ${a2}`;
          return `Input non valido: atteso ${e3}, ricevuto ${a2}`;
        }
        case "invalid_value":
          if (1 === n2.values.length) return `Input non valido: atteso ${i.stringifyPrimitive(n2.values[0])}`;
          return `Opzione non valida: atteso uno tra ${i.joinValues(n2.values, "|")}`;
        case "too_big": {
          let t3 = n2.inclusive ? "<=" : "<", i2 = e2[n2.origin] ?? null;
          if (i2) return `Troppo grande: ${n2.origin ?? "valore"} deve avere ${t3}${n2.maximum.toString()} ${i2.unit ?? "elementi"}`;
          return `Troppo grande: ${n2.origin ?? "valore"} deve essere ${t3}${n2.maximum.toString()}`;
        }
        case "too_small": {
          let t3 = n2.inclusive ? ">=" : ">", i2 = e2[n2.origin] ?? null;
          if (i2) return `Troppo piccolo: ${n2.origin} deve avere ${t3}${n2.minimum.toString()} ${i2.unit}`;
          return `Troppo piccolo: ${n2.origin} deve essere ${t3}${n2.minimum.toString()}`;
        }
        case "invalid_format":
          if ("starts_with" === n2.format) return `Stringa non valida: deve iniziare con "${n2.prefix}"`;
          if ("ends_with" === n2.format) return `Stringa non valida: deve terminare con "${n2.suffix}"`;
          if ("includes" === n2.format) return `Stringa non valida: deve includere "${n2.includes}"`;
          if ("regex" === n2.format) return `Stringa non valida: deve corrispondere al pattern ${n2.pattern}`;
          return `Input non valido: ${t2[n2.format] ?? n2.format}`;
        case "not_multiple_of":
          return `Numero non valido: deve essere un multiplo di ${n2.divisor}`;
        case "unrecognized_keys":
          return `Chiav${n2.keys.length > 1 ? "i" : "e"} non riconosciut${n2.keys.length > 1 ? "e" : "a"}: ${i.joinValues(n2.keys, ", ")}`;
        case "invalid_key":
          return `Chiave non valida in ${n2.origin}`;
        case "invalid_union":
        default:
          return "Input non valido";
        case "invalid_element":
          return `Valore non valido in ${n2.origin}`;
      }
    }) };
  }, "ja", 0, function() {
    let e2, t2, r2;
    return { localeError: (e2 = { string: { unit: "\u6587\u5B57", verb: "\u3067\u3042\u308B" }, file: { unit: "\u30D0\u30A4\u30C8", verb: "\u3067\u3042\u308B" }, array: { unit: "\u8981\u7D20", verb: "\u3067\u3042\u308B" }, set: { unit: "\u8981\u7D20", verb: "\u3067\u3042\u308B" } }, t2 = { regex: "\u5165\u529B\u5024", email: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9", url: "URL", emoji: "\u7D75\u6587\u5B57", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO\u65E5\u6642", date: "ISO\u65E5\u4ED8", time: "ISO\u6642\u523B", duration: "ISO\u671F\u9593", ipv4: "IPv4\u30A2\u30C9\u30EC\u30B9", ipv6: "IPv6\u30A2\u30C9\u30EC\u30B9", cidrv4: "IPv4\u7BC4\u56F2", cidrv6: "IPv6\u7BC4\u56F2", base64: "base64\u30A8\u30F3\u30B3\u30FC\u30C9\u6587\u5B57\u5217", base64url: "base64url\u30A8\u30F3\u30B3\u30FC\u30C9\u6587\u5B57\u5217", json_string: "JSON\u6587\u5B57\u5217", e164: "E.164\u756A\u53F7", jwt: "JWT", template_literal: "\u5165\u529B\u5024" }, r2 = { nan: "NaN", number: "\u6570\u5024", array: "\u914D\u5217" }, (n2) => {
      switch (n2.code) {
        case "invalid_type": {
          let e3 = r2[n2.expected] ?? n2.expected, t3 = i.parsedType(n2.input), a2 = r2[t3] ?? t3;
          if (/^[A-Z]/.test(n2.expected)) return `\u7121\u52B9\u306A\u5165\u529B: instanceof ${n2.expected}\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F\u304C\u3001${a2}\u304C\u5165\u529B\u3055\u308C\u307E\u3057\u305F`;
          return `\u7121\u52B9\u306A\u5165\u529B: ${e3}\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F\u304C\u3001${a2}\u304C\u5165\u529B\u3055\u308C\u307E\u3057\u305F`;
        }
        case "invalid_value":
          if (1 === n2.values.length) return `\u7121\u52B9\u306A\u5165\u529B: ${i.stringifyPrimitive(n2.values[0])}\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F`;
          return `\u7121\u52B9\u306A\u9078\u629E: ${i.joinValues(n2.values, "\u3001")}\u306E\u3044\u305A\u308C\u304B\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
        case "too_big": {
          let t3 = n2.inclusive ? "\u4EE5\u4E0B\u3067\u3042\u308B" : "\u3088\u308A\u5C0F\u3055\u3044", i2 = e2[n2.origin] ?? null;
          if (i2) return `\u5927\u304D\u3059\u304E\u308B\u5024: ${n2.origin ?? "\u5024"}\u306F${n2.maximum.toString()}${i2.unit ?? "\u8981\u7D20"}${t3}\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
          return `\u5927\u304D\u3059\u304E\u308B\u5024: ${n2.origin ?? "\u5024"}\u306F${n2.maximum.toString()}${t3}\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
        }
        case "too_small": {
          let t3 = n2.inclusive ? "\u4EE5\u4E0A\u3067\u3042\u308B" : "\u3088\u308A\u5927\u304D\u3044", i2 = e2[n2.origin] ?? null;
          if (i2) return `\u5C0F\u3055\u3059\u304E\u308B\u5024: ${n2.origin}\u306F${n2.minimum.toString()}${i2.unit}${t3}\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
          return `\u5C0F\u3055\u3059\u304E\u308B\u5024: ${n2.origin}\u306F${n2.minimum.toString()}${t3}\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
        }
        case "invalid_format":
          if ("starts_with" === n2.format) return `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${n2.prefix}"\u3067\u59CB\u307E\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
          if ("ends_with" === n2.format) return `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${n2.suffix}"\u3067\u7D42\u308F\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
          if ("includes" === n2.format) return `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${n2.includes}"\u3092\u542B\u3080\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
          if ("regex" === n2.format) return `\u7121\u52B9\u306A\u6587\u5B57\u5217: \u30D1\u30BF\u30FC\u30F3${n2.pattern}\u306B\u4E00\u81F4\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
          return `\u7121\u52B9\u306A${t2[n2.format] ?? n2.format}`;
        case "not_multiple_of":
          return `\u7121\u52B9\u306A\u6570\u5024: ${n2.divisor}\u306E\u500D\u6570\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
        case "unrecognized_keys":
          return `\u8A8D\u8B58\u3055\u308C\u3066\u3044\u306A\u3044\u30AD\u30FC${n2.keys.length > 1 ? "\u7FA4" : ""}: ${i.joinValues(n2.keys, "\u3001")}`;
        case "invalid_key":
          return `${n2.origin}\u5185\u306E\u7121\u52B9\u306A\u30AD\u30FC`;
        case "invalid_union":
        default:
          return "\u7121\u52B9\u306A\u5165\u529B";
        case "invalid_element":
          return `${n2.origin}\u5185\u306E\u7121\u52B9\u306A\u5024`;
      }
    }) };
  }, "ka", 0, function() {
    let e2, t2, r2;
    return { localeError: (e2 = { string: { unit: "\u10E1\u10D8\u10DB\u10D1\u10DD\u10DA\u10DD", verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1" }, file: { unit: "\u10D1\u10D0\u10D8\u10E2\u10D8", verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1" }, array: { unit: "\u10D4\u10DA\u10D4\u10DB\u10D4\u10DC\u10E2\u10D8", verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1" }, set: { unit: "\u10D4\u10DA\u10D4\u10DB\u10D4\u10DC\u10E2\u10D8", verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1" } }, t2 = { regex: "\u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0", email: "\u10D4\u10DA-\u10E4\u10DD\u10E1\u10E2\u10D8\u10E1 \u10DB\u10D8\u10E1\u10D0\u10DB\u10D0\u10E0\u10D7\u10D8", url: "URL", emoji: "\u10D4\u10DB\u10DD\u10EF\u10D8", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "\u10D7\u10D0\u10E0\u10D8\u10E6\u10D8-\u10D3\u10E0\u10DD", date: "\u10D7\u10D0\u10E0\u10D8\u10E6\u10D8", time: "\u10D3\u10E0\u10DD", duration: "\u10EE\u10D0\u10DC\u10D2\u10E0\u10EB\u10DA\u10D8\u10D5\u10DD\u10D1\u10D0", ipv4: "IPv4 \u10DB\u10D8\u10E1\u10D0\u10DB\u10D0\u10E0\u10D7\u10D8", ipv6: "IPv6 \u10DB\u10D8\u10E1\u10D0\u10DB\u10D0\u10E0\u10D7\u10D8", cidrv4: "IPv4 \u10D3\u10D8\u10D0\u10DE\u10D0\u10D6\u10DD\u10DC\u10D8", cidrv6: "IPv6 \u10D3\u10D8\u10D0\u10DE\u10D0\u10D6\u10DD\u10DC\u10D8", base64: "base64-\u10D9\u10DD\u10D3\u10D8\u10E0\u10D4\u10D1\u10E3\u10DA\u10D8 \u10D5\u10D4\u10DA\u10D8", base64url: "base64url-\u10D9\u10DD\u10D3\u10D8\u10E0\u10D4\u10D1\u10E3\u10DA\u10D8 \u10D5\u10D4\u10DA\u10D8", json_string: "JSON \u10D5\u10D4\u10DA\u10D8", e164: "E.164 \u10DC\u10DD\u10DB\u10D4\u10E0\u10D8", jwt: "JWT", template_literal: "\u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0" }, r2 = { nan: "NaN", number: "\u10E0\u10D8\u10EA\u10EE\u10D5\u10D8", string: "\u10D5\u10D4\u10DA\u10D8", boolean: "\u10D1\u10E3\u10DA\u10D4\u10D0\u10DC\u10D8", function: "\u10E4\u10E3\u10DC\u10E5\u10EA\u10D8\u10D0", array: "\u10DB\u10D0\u10E1\u10D8\u10D5\u10D8" }, (n2) => {
      switch (n2.code) {
        case "invalid_type": {
          let e3 = r2[n2.expected] ?? n2.expected, t3 = i.parsedType(n2.input), a2 = r2[t3] ?? t3;
          if (/^[A-Z]/.test(n2.expected)) return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 instanceof ${n2.expected}, \u10DB\u10D8\u10E6\u10D4\u10D1\u10E3\u10DA\u10D8 ${a2}`;
          return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${e3}, \u10DB\u10D8\u10E6\u10D4\u10D1\u10E3\u10DA\u10D8 ${a2}`;
        }
        case "invalid_value":
          if (1 === n2.values.length) return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${i.stringifyPrimitive(n2.values[0])}`;
          return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D5\u10D0\u10E0\u10D8\u10D0\u10DC\u10E2\u10D8: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8\u10D0 \u10D4\u10E0\u10D7-\u10D4\u10E0\u10D7\u10D8 ${i.joinValues(n2.values, "|")}-\u10D3\u10D0\u10DC`;
        case "too_big": {
          let t3 = n2.inclusive ? "<=" : "<", i2 = e2[n2.origin] ?? null;
          if (i2) return `\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10D3\u10D8\u10D3\u10D8: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${n2.origin ?? "\u10DB\u10DC\u10D8\u10E8\u10D5\u10DC\u10D4\u10DA\u10DD\u10D1\u10D0"} ${i2.verb} ${t3}${n2.maximum.toString()} ${i2.unit}`;
          return `\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10D3\u10D8\u10D3\u10D8: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${n2.origin ?? "\u10DB\u10DC\u10D8\u10E8\u10D5\u10DC\u10D4\u10DA\u10DD\u10D1\u10D0"} \u10D8\u10E7\u10DD\u10E1 ${t3}${n2.maximum.toString()}`;
        }
        case "too_small": {
          let t3 = n2.inclusive ? ">=" : ">", i2 = e2[n2.origin] ?? null;
          if (i2) return `\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10DE\u10D0\u10E2\u10D0\u10E0\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${n2.origin} ${i2.verb} ${t3}${n2.minimum.toString()} ${i2.unit}`;
          return `\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10DE\u10D0\u10E2\u10D0\u10E0\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${n2.origin} \u10D8\u10E7\u10DD\u10E1 ${t3}${n2.minimum.toString()}`;
        }
        case "invalid_format":
          if ("starts_with" === n2.format) return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D5\u10D4\u10DA\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10D8\u10EC\u10E7\u10D4\u10D1\u10DD\u10D3\u10D4\u10E1 "${n2.prefix}"-\u10D8\u10D7`;
          if ("ends_with" === n2.format) return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D5\u10D4\u10DA\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10DB\u10D7\u10D0\u10D5\u10E0\u10D3\u10D4\u10D1\u10DD\u10D3\u10D4\u10E1 "${n2.suffix}"-\u10D8\u10D7`;
          if ("includes" === n2.format) return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D5\u10D4\u10DA\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1 "${n2.includes}"-\u10E1`;
          if ("regex" === n2.format) return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D5\u10D4\u10DA\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D4\u10E1\u10D0\u10D1\u10D0\u10DB\u10D4\u10D1\u10DD\u10D3\u10D4\u10E1 \u10E8\u10D0\u10D1\u10DA\u10DD\u10DC\u10E1 ${n2.pattern}`;
          return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 ${t2[n2.format] ?? n2.format}`;
        case "not_multiple_of":
          return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E0\u10D8\u10EA\u10EE\u10D5\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10D8\u10E7\u10DD\u10E1 ${n2.divisor}-\u10D8\u10E1 \u10EF\u10D4\u10E0\u10D0\u10D3\u10D8`;
        case "unrecognized_keys":
          return `\u10E3\u10EA\u10DC\u10DD\u10D1\u10D8 \u10D2\u10D0\u10E1\u10D0\u10E6\u10D4\u10D1${n2.keys.length > 1 ? "\u10D4\u10D1\u10D8" : "\u10D8"}: ${i.joinValues(n2.keys, ", ")}`;
        case "invalid_key":
          return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D2\u10D0\u10E1\u10D0\u10E6\u10D4\u10D1\u10D8 ${n2.origin}-\u10E8\u10D8`;
        case "invalid_union":
        default:
          return "\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0";
        case "invalid_element":
          return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10DB\u10DC\u10D8\u10E8\u10D5\u10DC\u10D4\u10DA\u10DD\u10D1\u10D0 ${n2.origin}-\u10E8\u10D8`;
      }
    }) };
  }, "kh", 0, function() {
    return U();
  }, "km", 0, U, "ko", 0, function() {
    let e2, t2, r2;
    return { localeError: (e2 = { string: { unit: "\uBB38\uC790", verb: "to have" }, file: { unit: "\uBC14\uC774\uD2B8", verb: "to have" }, array: { unit: "\uAC1C", verb: "to have" }, set: { unit: "\uAC1C", verb: "to have" } }, t2 = { regex: "\uC785\uB825", email: "\uC774\uBA54\uC77C \uC8FC\uC18C", url: "URL", emoji: "\uC774\uBAA8\uC9C0", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO \uB0A0\uC9DC\uC2DC\uAC04", date: "ISO \uB0A0\uC9DC", time: "ISO \uC2DC\uAC04", duration: "ISO \uAE30\uAC04", ipv4: "IPv4 \uC8FC\uC18C", ipv6: "IPv6 \uC8FC\uC18C", cidrv4: "IPv4 \uBC94\uC704", cidrv6: "IPv6 \uBC94\uC704", base64: "base64 \uC778\uCF54\uB529 \uBB38\uC790\uC5F4", base64url: "base64url \uC778\uCF54\uB529 \uBB38\uC790\uC5F4", json_string: "JSON \uBB38\uC790\uC5F4", e164: "E.164 \uBC88\uD638", jwt: "JWT", template_literal: "\uC785\uB825" }, r2 = { nan: "NaN" }, (n2) => {
      switch (n2.code) {
        case "invalid_type": {
          let e3 = r2[n2.expected] ?? n2.expected, t3 = i.parsedType(n2.input), a2 = r2[t3] ?? t3;
          if (/^[A-Z]/.test(n2.expected)) return `\uC798\uBABB\uB41C \uC785\uB825: \uC608\uC0C1 \uD0C0\uC785\uC740 instanceof ${n2.expected}, \uBC1B\uC740 \uD0C0\uC785\uC740 ${a2}\uC785\uB2C8\uB2E4`;
          return `\uC798\uBABB\uB41C \uC785\uB825: \uC608\uC0C1 \uD0C0\uC785\uC740 ${e3}, \uBC1B\uC740 \uD0C0\uC785\uC740 ${a2}\uC785\uB2C8\uB2E4`;
        }
        case "invalid_value":
          if (1 === n2.values.length) return `\uC798\uBABB\uB41C \uC785\uB825: \uAC12\uC740 ${i.stringifyPrimitive(n2.values[0])} \uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4`;
          return `\uC798\uBABB\uB41C \uC635\uC158: ${i.joinValues(n2.values, "\uB610\uB294 ")} \uC911 \uD558\uB098\uC5EC\uC57C \uD569\uB2C8\uB2E4`;
        case "too_big": {
          let t3 = n2.inclusive ? "\uC774\uD558" : "\uBBF8\uB9CC", i2 = "\uBBF8\uB9CC" === t3 ? "\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4" : "\uC5EC\uC57C \uD569\uB2C8\uB2E4", r3 = e2[n2.origin] ?? null, a2 = r3?.unit ?? "\uC694\uC18C";
          if (r3) return `${n2.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uD07D\uB2C8\uB2E4: ${n2.maximum.toString()}${a2} ${t3}${i2}`;
          return `${n2.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uD07D\uB2C8\uB2E4: ${n2.maximum.toString()} ${t3}${i2}`;
        }
        case "too_small": {
          let t3 = n2.inclusive ? "\uC774\uC0C1" : "\uCD08\uACFC", i2 = "\uC774\uC0C1" === t3 ? "\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4" : "\uC5EC\uC57C \uD569\uB2C8\uB2E4", r3 = e2[n2.origin] ?? null, a2 = r3?.unit ?? "\uC694\uC18C";
          if (r3) return `${n2.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uC791\uC2B5\uB2C8\uB2E4: ${n2.minimum.toString()}${a2} ${t3}${i2}`;
          return `${n2.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uC791\uC2B5\uB2C8\uB2E4: ${n2.minimum.toString()} ${t3}${i2}`;
        }
        case "invalid_format":
          if ("starts_with" === n2.format) return `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${n2.prefix}"(\uC73C)\uB85C \uC2DC\uC791\uD574\uC57C \uD569\uB2C8\uB2E4`;
          if ("ends_with" === n2.format) return `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${n2.suffix}"(\uC73C)\uB85C \uB05D\uB098\uC57C \uD569\uB2C8\uB2E4`;
          if ("includes" === n2.format) return `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${n2.includes}"\uC744(\uB97C) \uD3EC\uD568\uD574\uC57C \uD569\uB2C8\uB2E4`;
          if ("regex" === n2.format) return `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: \uC815\uADDC\uC2DD ${n2.pattern} \uD328\uD134\uACFC \uC77C\uCE58\uD574\uC57C \uD569\uB2C8\uB2E4`;
          return `\uC798\uBABB\uB41C ${t2[n2.format] ?? n2.format}`;
        case "not_multiple_of":
          return `\uC798\uBABB\uB41C \uC22B\uC790: ${n2.divisor}\uC758 \uBC30\uC218\uC5EC\uC57C \uD569\uB2C8\uB2E4`;
        case "unrecognized_keys":
          return `\uC778\uC2DD\uD560 \uC218 \uC5C6\uB294 \uD0A4: ${i.joinValues(n2.keys, ", ")}`;
        case "invalid_key":
          return `\uC798\uBABB\uB41C \uD0A4: ${n2.origin}`;
        case "invalid_union":
        default:
          return "\uC798\uBABB\uB41C \uC785\uB825";
        case "invalid_element":
          return `\uC798\uBABB\uB41C \uAC12: ${n2.origin}`;
      }
    }) };
  }, "lt", 0, function() {
    return { localeError: /* @__PURE__ */ (() => {
      let e2 = { string: { unit: { one: "simbolis", few: "simboliai", many: "simboli\u0173" }, verb: { smaller: { inclusive: "turi b\u016Bti ne ilgesn\u0117 kaip", notInclusive: "turi b\u016Bti trumpesn\u0117 kaip" }, bigger: { inclusive: "turi b\u016Bti ne trumpesn\u0117 kaip", notInclusive: "turi b\u016Bti ilgesn\u0117 kaip" } } }, file: { unit: { one: "baitas", few: "baitai", many: "bait\u0173" }, verb: { smaller: { inclusive: "turi b\u016Bti ne didesnis kaip", notInclusive: "turi b\u016Bti ma\u017Eesnis kaip" }, bigger: { inclusive: "turi b\u016Bti ne ma\u017Eesnis kaip", notInclusive: "turi b\u016Bti didesnis kaip" } } }, array: { unit: { one: "element\u0105", few: "elementus", many: "element\u0173" }, verb: { smaller: { inclusive: "turi tur\u0117ti ne daugiau kaip", notInclusive: "turi tur\u0117ti ma\u017Eiau kaip" }, bigger: { inclusive: "turi tur\u0117ti ne ma\u017Eiau kaip", notInclusive: "turi tur\u0117ti daugiau kaip" } } }, set: { unit: { one: "element\u0105", few: "elementus", many: "element\u0173" }, verb: { smaller: { inclusive: "turi tur\u0117ti ne daugiau kaip", notInclusive: "turi tur\u0117ti ma\u017Eiau kaip" }, bigger: { inclusive: "turi tur\u0117ti ne ma\u017Eiau kaip", notInclusive: "turi tur\u0117ti daugiau kaip" } } } };
      function t2(t3, i2, r3, n3) {
        let a2 = e2[t3] ?? null;
        return null === a2 ? a2 : { unit: a2.unit[i2], verb: a2.verb[n3][r3 ? "inclusive" : "notInclusive"] };
      }
      let r2 = { regex: "\u012Fvestis", email: "el. pa\u0161to adresas", url: "URL", emoji: "jaustukas", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO data ir laikas", date: "ISO data", time: "ISO laikas", duration: "ISO trukm\u0117", ipv4: "IPv4 adresas", ipv6: "IPv6 adresas", cidrv4: "IPv4 tinklo prefiksas (CIDR)", cidrv6: "IPv6 tinklo prefiksas (CIDR)", base64: "base64 u\u017Ekoduota eilut\u0117", base64url: "base64url u\u017Ekoduota eilut\u0117", json_string: "JSON eilut\u0117", e164: "E.164 numeris", jwt: "JWT", template_literal: "\u012Fvestis" }, n2 = { nan: "NaN", number: "skai\u010Dius", bigint: "sveikasis skai\u010Dius", string: "eilut\u0117", boolean: "login\u0117 reik\u0161m\u0117", undefined: "neapibr\u0117\u017Eta reik\u0161m\u0117", function: "funkcija", symbol: "simbolis", array: "masyvas", object: "objektas", null: "nulin\u0117 reik\u0161m\u0117" };
      return (e3) => {
        switch (e3.code) {
          case "invalid_type": {
            let t3 = n2[e3.expected] ?? e3.expected, r3 = i.parsedType(e3.input), a2 = n2[r3] ?? r3;
            if (/^[A-Z]/.test(e3.expected)) return `Gautas tipas ${a2}, o tik\u0117tasi - instanceof ${e3.expected}`;
            return `Gautas tipas ${a2}, o tik\u0117tasi - ${t3}`;
          }
          case "invalid_value":
            if (1 === e3.values.length) return `Privalo b\u016Bti ${i.stringifyPrimitive(e3.values[0])}`;
            return `Privalo b\u016Bti vienas i\u0161 ${i.joinValues(e3.values, "|")} pasirinkim\u0173`;
          case "too_big": {
            let i2 = n2[e3.origin] ?? e3.origin, r3 = t2(e3.origin, A(Number(e3.maximum)), e3.inclusive ?? false, "smaller");
            if (r3?.verb) return `${T(i2 ?? e3.origin ?? "reik\u0161m\u0117")} ${r3.verb} ${e3.maximum.toString()} ${r3.unit ?? "element\u0173"}`;
            let a2 = e3.inclusive ? "ne didesnis kaip" : "ma\u017Eesnis kaip";
            return `${T(i2 ?? e3.origin ?? "reik\u0161m\u0117")} turi b\u016Bti ${a2} ${e3.maximum.toString()} ${r3?.unit}`;
          }
          case "too_small": {
            let i2 = n2[e3.origin] ?? e3.origin, r3 = t2(e3.origin, A(Number(e3.minimum)), e3.inclusive ?? false, "bigger");
            if (r3?.verb) return `${T(i2 ?? e3.origin ?? "reik\u0161m\u0117")} ${r3.verb} ${e3.minimum.toString()} ${r3.unit ?? "element\u0173"}`;
            let a2 = e3.inclusive ? "ne ma\u017Eesnis kaip" : "didesnis kaip";
            return `${T(i2 ?? e3.origin ?? "reik\u0161m\u0117")} turi b\u016Bti ${a2} ${e3.minimum.toString()} ${r3?.unit}`;
          }
          case "invalid_format":
            if ("starts_with" === e3.format) return `Eilut\u0117 privalo prasid\u0117ti "${e3.prefix}"`;
            if ("ends_with" === e3.format) return `Eilut\u0117 privalo pasibaigti "${e3.suffix}"`;
            if ("includes" === e3.format) return `Eilut\u0117 privalo \u012Ftraukti "${e3.includes}"`;
            if ("regex" === e3.format) return `Eilut\u0117 privalo atitikti ${e3.pattern}`;
            return `Neteisingas ${r2[e3.format] ?? e3.format}`;
          case "not_multiple_of":
            return `Skai\u010Dius privalo b\u016Bti ${e3.divisor} kartotinis.`;
          case "unrecognized_keys":
            return `Neatpa\u017Eint${e3.keys.length > 1 ? "i" : "as"} rakt${e3.keys.length > 1 ? "ai" : "as"}: ${i.joinValues(e3.keys, ", ")}`;
          case "invalid_key":
            return "Rastas klaidingas raktas";
          case "invalid_union":
          default:
            return "Klaidinga \u012Fvestis";
          case "invalid_element": {
            let t3 = n2[e3.origin] ?? e3.origin;
            return `${T(t3 ?? e3.origin ?? "reik\u0161m\u0117")} turi klaiding\u0105 \u012Fvest\u012F`;
          }
        }
      };
    })() };
  }, "mk", 0, function() {
    let e2, t2, r2;
    return { localeError: (e2 = { string: { unit: "\u0437\u043D\u0430\u0446\u0438", verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442" }, file: { unit: "\u0431\u0430\u0458\u0442\u0438", verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442" }, array: { unit: "\u0441\u0442\u0430\u0432\u043A\u0438", verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442" }, set: { unit: "\u0441\u0442\u0430\u0432\u043A\u0438", verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442" } }, t2 = { regex: "\u0432\u043D\u0435\u0441", email: "\u0430\u0434\u0440\u0435\u0441\u0430 \u043D\u0430 \u0435-\u043F\u043E\u0448\u0442\u0430", url: "URL", emoji: "\u0435\u043C\u043E\u045F\u0438", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO \u0434\u0430\u0442\u0443\u043C \u0438 \u0432\u0440\u0435\u043C\u0435", date: "ISO \u0434\u0430\u0442\u0443\u043C", time: "ISO \u0432\u0440\u0435\u043C\u0435", duration: "ISO \u0432\u0440\u0435\u043C\u0435\u0442\u0440\u0430\u0435\u045A\u0435", ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441\u0430", ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441\u0430", cidrv4: "IPv4 \u043E\u043F\u0441\u0435\u0433", cidrv6: "IPv6 \u043E\u043F\u0441\u0435\u0433", base64: "base64-\u0435\u043D\u043A\u043E\u0434\u0438\u0440\u0430\u043D\u0430 \u043D\u0438\u0437\u0430", base64url: "base64url-\u0435\u043D\u043A\u043E\u0434\u0438\u0440\u0430\u043D\u0430 \u043D\u0438\u0437\u0430", json_string: "JSON \u043D\u0438\u0437\u0430", e164: "E.164 \u0431\u0440\u043E\u0458", jwt: "JWT", template_literal: "\u0432\u043D\u0435\u0441" }, r2 = { nan: "NaN", number: "\u0431\u0440\u043E\u0458", array: "\u043D\u0438\u0437\u0430" }, (n2) => {
      switch (n2.code) {
        case "invalid_type": {
          let e3 = r2[n2.expected] ?? n2.expected, t3 = i.parsedType(n2.input), a2 = r2[t3] ?? t3;
          if (/^[A-Z]/.test(n2.expected)) return `\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 instanceof ${n2.expected}, \u043F\u0440\u0438\u043C\u0435\u043D\u043E ${a2}`;
          return `\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${e3}, \u043F\u0440\u0438\u043C\u0435\u043D\u043E ${a2}`;
        }
        case "invalid_value":
          if (1 === n2.values.length) return `Invalid input: expected ${i.stringifyPrimitive(n2.values[0])}`;
          return `\u0413\u0440\u0435\u0448\u0430\u043D\u0430 \u043E\u043F\u0446\u0438\u0458\u0430: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 \u0435\u0434\u043D\u0430 ${i.joinValues(n2.values, "|")}`;
        case "too_big": {
          let t3 = n2.inclusive ? "<=" : "<", i2 = e2[n2.origin] ?? null;
          if (i2) return `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u0433\u043E\u043B\u0435\u043C: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${n2.origin ?? "\u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442\u0430"} \u0434\u0430 \u0438\u043C\u0430 ${t3}${n2.maximum.toString()} ${i2.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0438"}`;
          return `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u0433\u043E\u043B\u0435\u043C: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${n2.origin ?? "\u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442\u0430"} \u0434\u0430 \u0431\u0438\u0434\u0435 ${t3}${n2.maximum.toString()}`;
        }
        case "too_small": {
          let t3 = n2.inclusive ? ">=" : ">", i2 = e2[n2.origin] ?? null;
          if (i2) return `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u043C\u0430\u043B: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${n2.origin} \u0434\u0430 \u0438\u043C\u0430 ${t3}${n2.minimum.toString()} ${i2.unit}`;
          return `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u043C\u0430\u043B: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${n2.origin} \u0434\u0430 \u0431\u0438\u0434\u0435 ${t3}${n2.minimum.toString()}`;
        }
        case "invalid_format":
          if ("starts_with" === n2.format) return `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0437\u0430\u043F\u043E\u0447\u043D\u0443\u0432\u0430 \u0441\u043E "${n2.prefix}"`;
          if ("ends_with" === n2.format) return `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0437\u0430\u0432\u0440\u0448\u0443\u0432\u0430 \u0441\u043E "${n2.suffix}"`;
          if ("includes" === n2.format) return `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0432\u043A\u043B\u0443\u0447\u0443\u0432\u0430 "${n2.includes}"`;
          if ("regex" === n2.format) return `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u043E\u0434\u0433\u043E\u0430\u0440\u0430 \u043D\u0430 \u043F\u0430\u0442\u0435\u0440\u043D\u043E\u0442 ${n2.pattern}`;
          return `Invalid ${t2[n2.format] ?? n2.format}`;
        case "not_multiple_of":
          return `\u0413\u0440\u0435\u0448\u0435\u043D \u0431\u0440\u043E\u0458: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0431\u0438\u0434\u0435 \u0434\u0435\u043B\u0438\u0432 \u0441\u043E ${n2.divisor}`;
        case "unrecognized_keys":
          return `${n2.keys.length > 1 ? "\u041D\u0435\u043F\u0440\u0435\u043F\u043E\u0437\u043D\u0430\u0435\u043D\u0438 \u043A\u043B\u0443\u0447\u0435\u0432\u0438" : "\u041D\u0435\u043F\u0440\u0435\u043F\u043E\u0437\u043D\u0430\u0435\u043D \u043A\u043B\u0443\u0447"}: ${i.joinValues(n2.keys, ", ")}`;
        case "invalid_key":
          return `\u0413\u0440\u0435\u0448\u0435\u043D \u043A\u043B\u0443\u0447 \u0432\u043E ${n2.origin}`;
        case "invalid_union":
        default:
          return "\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441";
        case "invalid_element":
          return `\u0413\u0440\u0435\u0448\u043D\u0430 \u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442 \u0432\u043E ${n2.origin}`;
      }
    }) };
  }, "ms", 0, function() {
    let e2, t2, r2;
    return { localeError: (e2 = { string: { unit: "aksara", verb: "mempunyai" }, file: { unit: "bait", verb: "mempunyai" }, array: { unit: "elemen", verb: "mempunyai" }, set: { unit: "elemen", verb: "mempunyai" } }, t2 = { regex: "input", email: "alamat e-mel", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "tarikh masa ISO", date: "tarikh ISO", time: "masa ISO", duration: "tempoh ISO", ipv4: "alamat IPv4", ipv6: "alamat IPv6", cidrv4: "julat IPv4", cidrv6: "julat IPv6", base64: "string dikodkan base64", base64url: "string dikodkan base64url", json_string: "string JSON", e164: "nombor E.164", jwt: "JWT", template_literal: "input" }, r2 = { nan: "NaN", number: "nombor" }, (n2) => {
      switch (n2.code) {
        case "invalid_type": {
          let e3 = r2[n2.expected] ?? n2.expected, t3 = i.parsedType(n2.input), a2 = r2[t3] ?? t3;
          if (/^[A-Z]/.test(n2.expected)) return `Input tidak sah: dijangka instanceof ${n2.expected}, diterima ${a2}`;
          return `Input tidak sah: dijangka ${e3}, diterima ${a2}`;
        }
        case "invalid_value":
          if (1 === n2.values.length) return `Input tidak sah: dijangka ${i.stringifyPrimitive(n2.values[0])}`;
          return `Pilihan tidak sah: dijangka salah satu daripada ${i.joinValues(n2.values, "|")}`;
        case "too_big": {
          let t3 = n2.inclusive ? "<=" : "<", i2 = e2[n2.origin] ?? null;
          if (i2) return `Terlalu besar: dijangka ${n2.origin ?? "nilai"} ${i2.verb} ${t3}${n2.maximum.toString()} ${i2.unit ?? "elemen"}`;
          return `Terlalu besar: dijangka ${n2.origin ?? "nilai"} adalah ${t3}${n2.maximum.toString()}`;
        }
        case "too_small": {
          let t3 = n2.inclusive ? ">=" : ">", i2 = e2[n2.origin] ?? null;
          if (i2) return `Terlalu kecil: dijangka ${n2.origin} ${i2.verb} ${t3}${n2.minimum.toString()} ${i2.unit}`;
          return `Terlalu kecil: dijangka ${n2.origin} adalah ${t3}${n2.minimum.toString()}`;
        }
        case "invalid_format":
          if ("starts_with" === n2.format) return `String tidak sah: mesti bermula dengan "${n2.prefix}"`;
          if ("ends_with" === n2.format) return `String tidak sah: mesti berakhir dengan "${n2.suffix}"`;
          if ("includes" === n2.format) return `String tidak sah: mesti mengandungi "${n2.includes}"`;
          if ("regex" === n2.format) return `String tidak sah: mesti sepadan dengan corak ${n2.pattern}`;
          return `${t2[n2.format] ?? n2.format} tidak sah`;
        case "not_multiple_of":
          return `Nombor tidak sah: perlu gandaan ${n2.divisor}`;
        case "unrecognized_keys":
          return `Kunci tidak dikenali: ${i.joinValues(n2.keys, ", ")}`;
        case "invalid_key":
          return `Kunci tidak sah dalam ${n2.origin}`;
        case "invalid_union":
        default:
          return "Input tidak sah";
        case "invalid_element":
          return `Nilai tidak sah dalam ${n2.origin}`;
      }
    }) };
  }, "nl", 0, function() {
    let e2, t2, r2;
    return { localeError: (e2 = { string: { unit: "tekens", verb: "heeft" }, file: { unit: "bytes", verb: "heeft" }, array: { unit: "elementen", verb: "heeft" }, set: { unit: "elementen", verb: "heeft" } }, t2 = { regex: "invoer", email: "emailadres", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO datum en tijd", date: "ISO datum", time: "ISO tijd", duration: "ISO duur", ipv4: "IPv4-adres", ipv6: "IPv6-adres", cidrv4: "IPv4-bereik", cidrv6: "IPv6-bereik", base64: "base64-gecodeerde tekst", base64url: "base64 URL-gecodeerde tekst", json_string: "JSON string", e164: "E.164-nummer", jwt: "JWT", template_literal: "invoer" }, r2 = { nan: "NaN", number: "getal" }, (n2) => {
      switch (n2.code) {
        case "invalid_type": {
          let e3 = r2[n2.expected] ?? n2.expected, t3 = i.parsedType(n2.input), a2 = r2[t3] ?? t3;
          if (/^[A-Z]/.test(n2.expected)) return `Ongeldige invoer: verwacht instanceof ${n2.expected}, ontving ${a2}`;
          return `Ongeldige invoer: verwacht ${e3}, ontving ${a2}`;
        }
        case "invalid_value":
          if (1 === n2.values.length) return `Ongeldige invoer: verwacht ${i.stringifyPrimitive(n2.values[0])}`;
          return `Ongeldige optie: verwacht \xE9\xE9n van ${i.joinValues(n2.values, "|")}`;
        case "too_big": {
          let t3 = n2.inclusive ? "<=" : "<", i2 = e2[n2.origin] ?? null, r3 = "date" === n2.origin ? "laat" : "string" === n2.origin ? "lang" : "groot";
          if (i2) return `Te ${r3}: verwacht dat ${n2.origin ?? "waarde"} ${t3}${n2.maximum.toString()} ${i2.unit ?? "elementen"} ${i2.verb}`;
          return `Te ${r3}: verwacht dat ${n2.origin ?? "waarde"} ${t3}${n2.maximum.toString()} is`;
        }
        case "too_small": {
          let t3 = n2.inclusive ? ">=" : ">", i2 = e2[n2.origin] ?? null, r3 = "date" === n2.origin ? "vroeg" : "string" === n2.origin ? "kort" : "klein";
          if (i2) return `Te ${r3}: verwacht dat ${n2.origin} ${t3}${n2.minimum.toString()} ${i2.unit} ${i2.verb}`;
          return `Te ${r3}: verwacht dat ${n2.origin} ${t3}${n2.minimum.toString()} is`;
        }
        case "invalid_format":
          if ("starts_with" === n2.format) return `Ongeldige tekst: moet met "${n2.prefix}" beginnen`;
          if ("ends_with" === n2.format) return `Ongeldige tekst: moet op "${n2.suffix}" eindigen`;
          if ("includes" === n2.format) return `Ongeldige tekst: moet "${n2.includes}" bevatten`;
          if ("regex" === n2.format) return `Ongeldige tekst: moet overeenkomen met patroon ${n2.pattern}`;
          return `Ongeldig: ${t2[n2.format] ?? n2.format}`;
        case "not_multiple_of":
          return `Ongeldig getal: moet een veelvoud van ${n2.divisor} zijn`;
        case "unrecognized_keys":
          return `Onbekende key${n2.keys.length > 1 ? "s" : ""}: ${i.joinValues(n2.keys, ", ")}`;
        case "invalid_key":
          return `Ongeldige key in ${n2.origin}`;
        case "invalid_union":
        default:
          return "Ongeldige invoer";
        case "invalid_element":
          return `Ongeldige waarde in ${n2.origin}`;
      }
    }) };
  }, "no", 0, function() {
    let e2, t2, r2;
    return { localeError: (e2 = { string: { unit: "tegn", verb: "\xE5 ha" }, file: { unit: "bytes", verb: "\xE5 ha" }, array: { unit: "elementer", verb: "\xE5 inneholde" }, set: { unit: "elementer", verb: "\xE5 inneholde" } }, t2 = { regex: "input", email: "e-postadresse", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO dato- og klokkeslett", date: "ISO-dato", time: "ISO-klokkeslett", duration: "ISO-varighet", ipv4: "IPv4-omr\xE5de", ipv6: "IPv6-omr\xE5de", cidrv4: "IPv4-spekter", cidrv6: "IPv6-spekter", base64: "base64-enkodet streng", base64url: "base64url-enkodet streng", json_string: "JSON-streng", e164: "E.164-nummer", jwt: "JWT", template_literal: "input" }, r2 = { nan: "NaN", number: "tall", array: "liste" }, (n2) => {
      switch (n2.code) {
        case "invalid_type": {
          let e3 = r2[n2.expected] ?? n2.expected, t3 = i.parsedType(n2.input), a2 = r2[t3] ?? t3;
          if (/^[A-Z]/.test(n2.expected)) return `Ugyldig input: forventet instanceof ${n2.expected}, fikk ${a2}`;
          return `Ugyldig input: forventet ${e3}, fikk ${a2}`;
        }
        case "invalid_value":
          if (1 === n2.values.length) return `Ugyldig verdi: forventet ${i.stringifyPrimitive(n2.values[0])}`;
          return `Ugyldig valg: forventet en av ${i.joinValues(n2.values, "|")}`;
        case "too_big": {
          let t3 = n2.inclusive ? "<=" : "<", i2 = e2[n2.origin] ?? null;
          if (i2) return `For stor(t): forventet ${n2.origin ?? "value"} til \xE5 ha ${t3}${n2.maximum.toString()} ${i2.unit ?? "elementer"}`;
          return `For stor(t): forventet ${n2.origin ?? "value"} til \xE5 ha ${t3}${n2.maximum.toString()}`;
        }
        case "too_small": {
          let t3 = n2.inclusive ? ">=" : ">", i2 = e2[n2.origin] ?? null;
          if (i2) return `For lite(n): forventet ${n2.origin} til \xE5 ha ${t3}${n2.minimum.toString()} ${i2.unit}`;
          return `For lite(n): forventet ${n2.origin} til \xE5 ha ${t3}${n2.minimum.toString()}`;
        }
        case "invalid_format":
          if ("starts_with" === n2.format) return `Ugyldig streng: m\xE5 starte med "${n2.prefix}"`;
          if ("ends_with" === n2.format) return `Ugyldig streng: m\xE5 ende med "${n2.suffix}"`;
          if ("includes" === n2.format) return `Ugyldig streng: m\xE5 inneholde "${n2.includes}"`;
          if ("regex" === n2.format) return `Ugyldig streng: m\xE5 matche m\xF8nsteret ${n2.pattern}`;
          return `Ugyldig ${t2[n2.format] ?? n2.format}`;
        case "not_multiple_of":
          return `Ugyldig tall: m\xE5 v\xE6re et multiplum av ${n2.divisor}`;
        case "unrecognized_keys":
          return `${n2.keys.length > 1 ? "Ukjente n\xF8kler" : "Ukjent n\xF8kkel"}: ${i.joinValues(n2.keys, ", ")}`;
        case "invalid_key":
          return `Ugyldig n\xF8kkel i ${n2.origin}`;
        case "invalid_union":
        default:
          return "Ugyldig input";
        case "invalid_element":
          return `Ugyldig verdi i ${n2.origin}`;
      }
    }) };
  }, "ota", 0, function() {
    let e2, t2, r2;
    return { localeError: (e2 = { string: { unit: "harf", verb: "olmal\u0131d\u0131r" }, file: { unit: "bayt", verb: "olmal\u0131d\u0131r" }, array: { unit: "unsur", verb: "olmal\u0131d\u0131r" }, set: { unit: "unsur", verb: "olmal\u0131d\u0131r" } }, t2 = { regex: "giren", email: "epostag\xE2h", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO heng\xE2m\u0131", date: "ISO tarihi", time: "ISO zaman\u0131", duration: "ISO m\xFCddeti", ipv4: "IPv4 ni\u015F\xE2n\u0131", ipv6: "IPv6 ni\u015F\xE2n\u0131", cidrv4: "IPv4 menzili", cidrv6: "IPv6 menzili", base64: "base64-\u015Fifreli metin", base64url: "base64url-\u015Fifreli metin", json_string: "JSON metin", e164: "E.164 say\u0131s\u0131", jwt: "JWT", template_literal: "giren" }, r2 = { nan: "NaN", number: "numara", array: "saf", null: "gayb" }, (n2) => {
      switch (n2.code) {
        case "invalid_type": {
          let e3 = r2[n2.expected] ?? n2.expected, t3 = i.parsedType(n2.input), a2 = r2[t3] ?? t3;
          if (/^[A-Z]/.test(n2.expected)) return `F\xE2sit giren: umulan instanceof ${n2.expected}, al\u0131nan ${a2}`;
          return `F\xE2sit giren: umulan ${e3}, al\u0131nan ${a2}`;
        }
        case "invalid_value":
          if (1 === n2.values.length) return `F\xE2sit giren: umulan ${i.stringifyPrimitive(n2.values[0])}`;
          return `F\xE2sit tercih: m\xFBteberler ${i.joinValues(n2.values, "|")}`;
        case "too_big": {
          let t3 = n2.inclusive ? "<=" : "<", i2 = e2[n2.origin] ?? null;
          if (i2) return `Fazla b\xFCy\xFCk: ${n2.origin ?? "value"}, ${t3}${n2.maximum.toString()} ${i2.unit ?? "elements"} sahip olmal\u0131yd\u0131.`;
          return `Fazla b\xFCy\xFCk: ${n2.origin ?? "value"}, ${t3}${n2.maximum.toString()} olmal\u0131yd\u0131.`;
        }
        case "too_small": {
          let t3 = n2.inclusive ? ">=" : ">", i2 = e2[n2.origin] ?? null;
          if (i2) return `Fazla k\xFC\xE7\xFCk: ${n2.origin}, ${t3}${n2.minimum.toString()} ${i2.unit} sahip olmal\u0131yd\u0131.`;
          return `Fazla k\xFC\xE7\xFCk: ${n2.origin}, ${t3}${n2.minimum.toString()} olmal\u0131yd\u0131.`;
        }
        case "invalid_format":
          if ("starts_with" === n2.format) return `F\xE2sit metin: "${n2.prefix}" ile ba\u015Flamal\u0131.`;
          if ("ends_with" === n2.format) return `F\xE2sit metin: "${n2.suffix}" ile bitmeli.`;
          if ("includes" === n2.format) return `F\xE2sit metin: "${n2.includes}" ihtiv\xE2 etmeli.`;
          if ("regex" === n2.format) return `F\xE2sit metin: ${n2.pattern} nak\u015F\u0131na uymal\u0131.`;
          return `F\xE2sit ${t2[n2.format] ?? n2.format}`;
        case "not_multiple_of":
          return `F\xE2sit say\u0131: ${n2.divisor} kat\u0131 olmal\u0131yd\u0131.`;
        case "unrecognized_keys":
          return `Tan\u0131nmayan anahtar ${n2.keys.length > 1 ? "s" : ""}: ${i.joinValues(n2.keys, ", ")}`;
        case "invalid_key":
          return `${n2.origin} i\xE7in tan\u0131nmayan anahtar var.`;
        case "invalid_union":
          return "Giren tan\u0131namad\u0131.";
        case "invalid_element":
          return `${n2.origin} i\xE7in tan\u0131nmayan k\u0131ymet var.`;
        default:
          return "K\u0131ymet tan\u0131namad\u0131.";
      }
    }) };
  }, "pl", 0, function() {
    let e2, t2, r2;
    return { localeError: (e2 = { string: { unit: "znak\xF3w", verb: "mie\u0107" }, file: { unit: "bajt\xF3w", verb: "mie\u0107" }, array: { unit: "element\xF3w", verb: "mie\u0107" }, set: { unit: "element\xF3w", verb: "mie\u0107" } }, t2 = { regex: "wyra\u017Cenie", email: "adres email", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "data i godzina w formacie ISO", date: "data w formacie ISO", time: "godzina w formacie ISO", duration: "czas trwania ISO", ipv4: "adres IPv4", ipv6: "adres IPv6", cidrv4: "zakres IPv4", cidrv6: "zakres IPv6", base64: "ci\u0105g znak\xF3w zakodowany w formacie base64", base64url: "ci\u0105g znak\xF3w zakodowany w formacie base64url", json_string: "ci\u0105g znak\xF3w w formacie JSON", e164: "liczba E.164", jwt: "JWT", template_literal: "wej\u015Bcie" }, r2 = { nan: "NaN", number: "liczba", array: "tablica" }, (n2) => {
      switch (n2.code) {
        case "invalid_type": {
          let e3 = r2[n2.expected] ?? n2.expected, t3 = i.parsedType(n2.input), a2 = r2[t3] ?? t3;
          if (/^[A-Z]/.test(n2.expected)) return `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano instanceof ${n2.expected}, otrzymano ${a2}`;
          return `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano ${e3}, otrzymano ${a2}`;
        }
        case "invalid_value":
          if (1 === n2.values.length) return `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano ${i.stringifyPrimitive(n2.values[0])}`;
          return `Nieprawid\u0142owa opcja: oczekiwano jednej z warto\u015Bci ${i.joinValues(n2.values, "|")}`;
        case "too_big": {
          let t3 = n2.inclusive ? "<=" : "<", i2 = e2[n2.origin] ?? null;
          if (i2) return `Za du\u017Ca warto\u015B\u0107: oczekiwano, \u017Ce ${n2.origin ?? "warto\u015B\u0107"} b\u0119dzie mie\u0107 ${t3}${n2.maximum.toString()} ${i2.unit ?? "element\xF3w"}`;
          return `Zbyt du\u017C(y/a/e): oczekiwano, \u017Ce ${n2.origin ?? "warto\u015B\u0107"} b\u0119dzie wynosi\u0107 ${t3}${n2.maximum.toString()}`;
        }
        case "too_small": {
          let t3 = n2.inclusive ? ">=" : ">", i2 = e2[n2.origin] ?? null;
          if (i2) return `Za ma\u0142a warto\u015B\u0107: oczekiwano, \u017Ce ${n2.origin ?? "warto\u015B\u0107"} b\u0119dzie mie\u0107 ${t3}${n2.minimum.toString()} ${i2.unit ?? "element\xF3w"}`;
          return `Zbyt ma\u0142(y/a/e): oczekiwano, \u017Ce ${n2.origin ?? "warto\u015B\u0107"} b\u0119dzie wynosi\u0107 ${t3}${n2.minimum.toString()}`;
        }
        case "invalid_format":
          if ("starts_with" === n2.format) return `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi zaczyna\u0107 si\u0119 od "${n2.prefix}"`;
          if ("ends_with" === n2.format) return `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi ko\u0144czy\u0107 si\u0119 na "${n2.suffix}"`;
          if ("includes" === n2.format) return `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi zawiera\u0107 "${n2.includes}"`;
          if ("regex" === n2.format) return `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi odpowiada\u0107 wzorcowi ${n2.pattern}`;
          return `Nieprawid\u0142ow(y/a/e) ${t2[n2.format] ?? n2.format}`;
        case "not_multiple_of":
          return `Nieprawid\u0142owa liczba: musi by\u0107 wielokrotno\u015Bci\u0105 ${n2.divisor}`;
        case "unrecognized_keys":
          return `Nierozpoznane klucze${n2.keys.length > 1 ? "s" : ""}: ${i.joinValues(n2.keys, ", ")}`;
        case "invalid_key":
          return `Nieprawid\u0142owy klucz w ${n2.origin}`;
        case "invalid_union":
        default:
          return "Nieprawid\u0142owe dane wej\u015Bciowe";
        case "invalid_element":
          return `Nieprawid\u0142owa warto\u015B\u0107 w ${n2.origin}`;
      }
    }) };
  }, "ps", 0, function() {
    let e2, t2, r2;
    return { localeError: (e2 = { string: { unit: "\u062A\u0648\u06A9\u064A", verb: "\u0648\u0644\u0631\u064A" }, file: { unit: "\u0628\u0627\u06CC\u067C\u0633", verb: "\u0648\u0644\u0631\u064A" }, array: { unit: "\u062A\u0648\u06A9\u064A", verb: "\u0648\u0644\u0631\u064A" }, set: { unit: "\u062A\u0648\u06A9\u064A", verb: "\u0648\u0644\u0631\u064A" } }, t2 = { regex: "\u0648\u0631\u0648\u062F\u064A", email: "\u0628\u0631\u06CC\u069A\u0646\u0627\u0644\u06CC\u06A9", url: "\u06CC\u0648 \u0622\u0631 \u0627\u0644", emoji: "\u0627\u06CC\u0645\u0648\u062C\u064A", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "\u0646\u06CC\u067C\u0647 \u0627\u0648 \u0648\u062E\u062A", date: "\u0646\u06D0\u067C\u0647", time: "\u0648\u062E\u062A", duration: "\u0645\u0648\u062F\u0647", ipv4: "\u062F IPv4 \u067E\u062A\u0647", ipv6: "\u062F IPv6 \u067E\u062A\u0647", cidrv4: "\u062F IPv4 \u0633\u0627\u062D\u0647", cidrv6: "\u062F IPv6 \u0633\u0627\u062D\u0647", base64: "base64-encoded \u0645\u062A\u0646", base64url: "base64url-encoded \u0645\u062A\u0646", json_string: "JSON \u0645\u062A\u0646", e164: "\u062F E.164 \u0634\u0645\u06D0\u0631\u0647", jwt: "JWT", template_literal: "\u0648\u0631\u0648\u062F\u064A" }, r2 = { nan: "NaN", number: "\u0639\u062F\u062F", array: "\u0627\u0631\u06D0" }, (n2) => {
      switch (n2.code) {
        case "invalid_type": {
          let e3 = r2[n2.expected] ?? n2.expected, t3 = i.parsedType(n2.input), a2 = r2[t3] ?? t3;
          if (/^[A-Z]/.test(n2.expected)) return `\u0646\u0627\u0633\u0645 \u0648\u0631\u0648\u062F\u064A: \u0628\u0627\u06CC\u062F instanceof ${n2.expected} \u0648\u0627\u06CC, \u0645\u06AB\u0631 ${a2} \u062A\u0631\u0644\u0627\u0633\u0647 \u0634\u0648`;
          return `\u0646\u0627\u0633\u0645 \u0648\u0631\u0648\u062F\u064A: \u0628\u0627\u06CC\u062F ${e3} \u0648\u0627\u06CC, \u0645\u06AB\u0631 ${a2} \u062A\u0631\u0644\u0627\u0633\u0647 \u0634\u0648`;
        }
        case "invalid_value":
          if (1 === n2.values.length) return `\u0646\u0627\u0633\u0645 \u0648\u0631\u0648\u062F\u064A: \u0628\u0627\u06CC\u062F ${i.stringifyPrimitive(n2.values[0])} \u0648\u0627\u06CC`;
          return `\u0646\u0627\u0633\u0645 \u0627\u0646\u062A\u062E\u0627\u0628: \u0628\u0627\u06CC\u062F \u06CC\u0648 \u0644\u0647 ${i.joinValues(n2.values, "|")} \u0685\u062E\u0647 \u0648\u0627\u06CC`;
        case "too_big": {
          let t3 = n2.inclusive ? "<=" : "<", i2 = e2[n2.origin] ?? null;
          if (i2) return `\u0689\u06CC\u0631 \u0644\u0648\u06CC: ${n2.origin ?? "\u0627\u0631\u0632\u069A\u062A"} \u0628\u0627\u06CC\u062F ${t3}${n2.maximum.toString()} ${i2.unit ?? "\u0639\u0646\u0635\u0631\u0648\u0646\u0647"} \u0648\u0644\u0631\u064A`;
          return `\u0689\u06CC\u0631 \u0644\u0648\u06CC: ${n2.origin ?? "\u0627\u0631\u0632\u069A\u062A"} \u0628\u0627\u06CC\u062F ${t3}${n2.maximum.toString()} \u0648\u064A`;
        }
        case "too_small": {
          let t3 = n2.inclusive ? ">=" : ">", i2 = e2[n2.origin] ?? null;
          if (i2) return `\u0689\u06CC\u0631 \u06A9\u0648\u0686\u0646\u06CC: ${n2.origin} \u0628\u0627\u06CC\u062F ${t3}${n2.minimum.toString()} ${i2.unit} \u0648\u0644\u0631\u064A`;
          return `\u0689\u06CC\u0631 \u06A9\u0648\u0686\u0646\u06CC: ${n2.origin} \u0628\u0627\u06CC\u062F ${t3}${n2.minimum.toString()} \u0648\u064A`;
        }
        case "invalid_format":
          if ("starts_with" === n2.format) return `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F \u062F "${n2.prefix}" \u0633\u0631\u0647 \u067E\u06CC\u0644 \u0634\u064A`;
          if ("ends_with" === n2.format) return `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F \u062F "${n2.suffix}" \u0633\u0631\u0647 \u067E\u0627\u06CC \u062A\u0647 \u0648\u0631\u0633\u064A\u0696\u064A`;
          if ("includes" === n2.format) return `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F "${n2.includes}" \u0648\u0644\u0631\u064A`;
          if ("regex" === n2.format) return `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F \u062F ${n2.pattern} \u0633\u0631\u0647 \u0645\u0637\u0627\u0628\u0642\u062A \u0648\u0644\u0631\u064A`;
          return `${t2[n2.format] ?? n2.format} \u0646\u0627\u0633\u0645 \u062F\u06CC`;
        case "not_multiple_of":
          return `\u0646\u0627\u0633\u0645 \u0639\u062F\u062F: \u0628\u0627\u06CC\u062F \u062F ${n2.divisor} \u0645\u0636\u0631\u0628 \u0648\u064A`;
        case "unrecognized_keys":
          return `\u0646\u0627\u0633\u0645 ${n2.keys.length > 1 ? "\u06A9\u0644\u06CC\u0689\u0648\u0646\u0647" : "\u06A9\u0644\u06CC\u0689"}: ${i.joinValues(n2.keys, ", ")}`;
        case "invalid_key":
          return `\u0646\u0627\u0633\u0645 \u06A9\u0644\u06CC\u0689 \u067E\u0647 ${n2.origin} \u06A9\u06D0`;
        case "invalid_union":
        default:
          return "\u0646\u0627\u0633\u0645\u0647 \u0648\u0631\u0648\u062F\u064A";
        case "invalid_element":
          return `\u0646\u0627\u0633\u0645 \u0639\u0646\u0635\u0631 \u067E\u0647 ${n2.origin} \u06A9\u06D0`;
      }
    }) };
  }, "pt", 0, function() {
    let e2, t2, r2;
    return { localeError: (e2 = { string: { unit: "caracteres", verb: "ter" }, file: { unit: "bytes", verb: "ter" }, array: { unit: "itens", verb: "ter" }, set: { unit: "itens", verb: "ter" } }, t2 = { regex: "padr\xE3o", email: "endere\xE7o de e-mail", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "data e hora ISO", date: "data ISO", time: "hora ISO", duration: "dura\xE7\xE3o ISO", ipv4: "endere\xE7o IPv4", ipv6: "endere\xE7o IPv6", cidrv4: "faixa de IPv4", cidrv6: "faixa de IPv6", base64: "texto codificado em base64", base64url: "URL codificada em base64", json_string: "texto JSON", e164: "n\xFAmero E.164", jwt: "JWT", template_literal: "entrada" }, r2 = { nan: "NaN", number: "n\xFAmero", null: "nulo" }, (n2) => {
      switch (n2.code) {
        case "invalid_type": {
          let e3 = r2[n2.expected] ?? n2.expected, t3 = i.parsedType(n2.input), a2 = r2[t3] ?? t3;
          if (/^[A-Z]/.test(n2.expected)) return `Tipo inv\xE1lido: esperado instanceof ${n2.expected}, recebido ${a2}`;
          return `Tipo inv\xE1lido: esperado ${e3}, recebido ${a2}`;
        }
        case "invalid_value":
          if (1 === n2.values.length) return `Entrada inv\xE1lida: esperado ${i.stringifyPrimitive(n2.values[0])}`;
          return `Op\xE7\xE3o inv\xE1lida: esperada uma das ${i.joinValues(n2.values, "|")}`;
        case "too_big": {
          let t3 = n2.inclusive ? "<=" : "<", i2 = e2[n2.origin] ?? null;
          if (i2) return `Muito grande: esperado que ${n2.origin ?? "valor"} tivesse ${t3}${n2.maximum.toString()} ${i2.unit ?? "elementos"}`;
          return `Muito grande: esperado que ${n2.origin ?? "valor"} fosse ${t3}${n2.maximum.toString()}`;
        }
        case "too_small": {
          let t3 = n2.inclusive ? ">=" : ">", i2 = e2[n2.origin] ?? null;
          if (i2) return `Muito pequeno: esperado que ${n2.origin} tivesse ${t3}${n2.minimum.toString()} ${i2.unit}`;
          return `Muito pequeno: esperado que ${n2.origin} fosse ${t3}${n2.minimum.toString()}`;
        }
        case "invalid_format":
          if ("starts_with" === n2.format) return `Texto inv\xE1lido: deve come\xE7ar com "${n2.prefix}"`;
          if ("ends_with" === n2.format) return `Texto inv\xE1lido: deve terminar com "${n2.suffix}"`;
          if ("includes" === n2.format) return `Texto inv\xE1lido: deve incluir "${n2.includes}"`;
          if ("regex" === n2.format) return `Texto inv\xE1lido: deve corresponder ao padr\xE3o ${n2.pattern}`;
          return `${t2[n2.format] ?? n2.format} inv\xE1lido`;
        case "not_multiple_of":
          return `N\xFAmero inv\xE1lido: deve ser m\xFAltiplo de ${n2.divisor}`;
        case "unrecognized_keys":
          return `Chave${n2.keys.length > 1 ? "s" : ""} desconhecida${n2.keys.length > 1 ? "s" : ""}: ${i.joinValues(n2.keys, ", ")}`;
        case "invalid_key":
          return `Chave inv\xE1lida em ${n2.origin}`;
        case "invalid_union":
          return "Entrada inv\xE1lida";
        case "invalid_element":
          return `Valor inv\xE1lido em ${n2.origin}`;
        default:
          return "Campo inv\xE1lido";
      }
    }) };
  }, "ro", 0, function() {
    let e2, t2, r2;
    return { localeError: (e2 = { string: { unit: "caractere", verb: "s\u0103 aib\u0103" }, file: { unit: "octe\u021Bi", verb: "s\u0103 aib\u0103" }, array: { unit: "elemente", verb: "s\u0103 aib\u0103" }, set: { unit: "elemente", verb: "s\u0103 aib\u0103" }, map: { unit: "intr\u0103ri", verb: "s\u0103 aib\u0103" } }, t2 = { regex: "intrare", email: "adres\u0103 de email", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "dat\u0103 \u0219i or\u0103 ISO", date: "dat\u0103 ISO", time: "or\u0103 ISO", duration: "durat\u0103 ISO", ipv4: "adres\u0103 IPv4", ipv6: "adres\u0103 IPv6", mac: "adres\u0103 MAC", cidrv4: "interval IPv4", cidrv6: "interval IPv6", base64: "\u0219ir codat base64", base64url: "\u0219ir codat base64url", json_string: "\u0219ir JSON", e164: "num\u0103r E.164", jwt: "JWT", template_literal: "intrare" }, r2 = { nan: "NaN", string: "\u0219ir", number: "num\u0103r", boolean: "boolean", function: "func\u021Bie", array: "matrice", object: "obiect", undefined: "nedefinit", symbol: "simbol", bigint: "num\u0103r mare", void: "void", never: "never", map: "hart\u0103", set: "set" }, (n2) => {
      switch (n2.code) {
        case "invalid_type": {
          let e3 = r2[n2.expected] ?? n2.expected, t3 = i.parsedType(n2.input), a2 = r2[t3] ?? t3;
          return `Intrare invalid\u0103: a\u0219teptat ${e3}, primit ${a2}`;
        }
        case "invalid_value":
          if (1 === n2.values.length) return `Intrare invalid\u0103: a\u0219teptat ${i.stringifyPrimitive(n2.values[0])}`;
          return `Op\u021Biune invalid\u0103: a\u0219teptat una dintre ${i.joinValues(n2.values, "|")}`;
        case "too_big": {
          let t3 = n2.inclusive ? "<=" : "<", i2 = e2[n2.origin] ?? null;
          if (i2) return `Prea mare: a\u0219teptat ca ${n2.origin ?? "valoarea"} ${i2.verb} ${t3}${n2.maximum.toString()} ${i2.unit ?? "elemente"}`;
          return `Prea mare: a\u0219teptat ca ${n2.origin ?? "valoarea"} s\u0103 fie ${t3}${n2.maximum.toString()}`;
        }
        case "too_small": {
          let t3 = n2.inclusive ? ">=" : ">", i2 = e2[n2.origin] ?? null;
          if (i2) return `Prea mic: a\u0219teptat ca ${n2.origin} ${i2.verb} ${t3}${n2.minimum.toString()} ${i2.unit}`;
          return `Prea mic: a\u0219teptat ca ${n2.origin} s\u0103 fie ${t3}${n2.minimum.toString()}`;
        }
        case "invalid_format":
          if ("starts_with" === n2.format) return `\u0218ir invalid: trebuie s\u0103 \xEEnceap\u0103 cu "${n2.prefix}"`;
          if ("ends_with" === n2.format) return `\u0218ir invalid: trebuie s\u0103 se termine cu "${n2.suffix}"`;
          if ("includes" === n2.format) return `\u0218ir invalid: trebuie s\u0103 includ\u0103 "${n2.includes}"`;
          if ("regex" === n2.format) return `\u0218ir invalid: trebuie s\u0103 se potriveasc\u0103 cu modelul ${n2.pattern}`;
          return `Format invalid: ${t2[n2.format] ?? n2.format}`;
        case "not_multiple_of":
          return `Num\u0103r invalid: trebuie s\u0103 fie multiplu de ${n2.divisor}`;
        case "unrecognized_keys":
          return `Chei nerecunoscute: ${i.joinValues(n2.keys, ", ")}`;
        case "invalid_key":
          return `Cheie invalid\u0103 \xEEn ${n2.origin}`;
        case "invalid_union":
        default:
          return "Intrare invalid\u0103";
        case "invalid_element":
          return `Valoare invalid\u0103 \xEEn ${n2.origin}`;
      }
    }) };
  }, "ru", 0, function() {
    let e2, t2, r2;
    return { localeError: (e2 = { string: { unit: { one: "\u0441\u0438\u043C\u0432\u043E\u043B", few: "\u0441\u0438\u043C\u0432\u043E\u043B\u0430", many: "\u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432" }, verb: "\u0438\u043C\u0435\u0442\u044C" }, file: { unit: { one: "\u0431\u0430\u0439\u0442", few: "\u0431\u0430\u0439\u0442\u0430", many: "\u0431\u0430\u0439\u0442" }, verb: "\u0438\u043C\u0435\u0442\u044C" }, array: { unit: { one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442", few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430", many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432" }, verb: "\u0438\u043C\u0435\u0442\u044C" }, set: { unit: { one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442", few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430", many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432" }, verb: "\u0438\u043C\u0435\u0442\u044C" } }, t2 = { regex: "\u0432\u0432\u043E\u0434", email: "email \u0430\u0434\u0440\u0435\u0441", url: "URL", emoji: "\u044D\u043C\u043E\u0434\u0437\u0438", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO \u0434\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F", date: "ISO \u0434\u0430\u0442\u0430", time: "ISO \u0432\u0440\u0435\u043C\u044F", duration: "ISO \u0434\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C", ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441", ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441", cidrv4: "IPv4 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D", cidrv6: "IPv6 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D", base64: "\u0441\u0442\u0440\u043E\u043A\u0430 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 base64", base64url: "\u0441\u0442\u0440\u043E\u043A\u0430 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 base64url", json_string: "JSON \u0441\u0442\u0440\u043E\u043A\u0430", e164: "\u043D\u043E\u043C\u0435\u0440 E.164", jwt: "JWT", template_literal: "\u0432\u0432\u043E\u0434" }, r2 = { nan: "NaN", number: "\u0447\u0438\u0441\u043B\u043E", array: "\u043C\u0430\u0441\u0441\u0438\u0432" }, (n2) => {
      switch (n2.code) {
        case "invalid_type": {
          let e3 = r2[n2.expected] ?? n2.expected, t3 = i.parsedType(n2.input), a2 = r2[t3] ?? t3;
          if (/^[A-Z]/.test(n2.expected)) return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C instanceof ${n2.expected}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043E ${a2}`;
          return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C ${e3}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043E ${a2}`;
        }
        case "invalid_value":
          if (1 === n2.values.length) return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C ${i.stringifyPrimitive(n2.values[0])}`;
          return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0434\u043D\u043E \u0438\u0437 ${i.joinValues(n2.values, "|")}`;
        case "too_big": {
          let t3 = n2.inclusive ? "<=" : "<", i2 = e2[n2.origin] ?? null;
          if (i2) {
            let e3 = X(Number(n2.maximum), i2.unit.one, i2.unit.few, i2.unit.many);
            return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${n2.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"} \u0431\u0443\u0434\u0435\u0442 \u0438\u043C\u0435\u0442\u044C ${t3}${n2.maximum.toString()} ${e3}`;
          }
          return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${n2.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"} \u0431\u0443\u0434\u0435\u0442 ${t3}${n2.maximum.toString()}`;
        }
        case "too_small": {
          let t3 = n2.inclusive ? ">=" : ">", i2 = e2[n2.origin] ?? null;
          if (i2) {
            let e3 = X(Number(n2.minimum), i2.unit.one, i2.unit.few, i2.unit.many);
            return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${n2.origin} \u0431\u0443\u0434\u0435\u0442 \u0438\u043C\u0435\u0442\u044C ${t3}${n2.minimum.toString()} ${e3}`;
          }
          return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${n2.origin} \u0431\u0443\u0434\u0435\u0442 ${t3}${n2.minimum.toString()}`;
        }
        case "invalid_format":
          if ("starts_with" === n2.format) return `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u043D\u0430\u0447\u0438\u043D\u0430\u0442\u044C\u0441\u044F \u0441 "${n2.prefix}"`;
          if ("ends_with" === n2.format) return `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0437\u0430\u043A\u0430\u043D\u0447\u0438\u0432\u0430\u0442\u044C\u0441\u044F \u043D\u0430 "${n2.suffix}"`;
          if ("includes" === n2.format) return `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C "${n2.includes}"`;
          if ("regex" === n2.format) return `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${n2.pattern}`;
          return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 ${t2[n2.format] ?? n2.format}`;
        case "not_multiple_of":
          return `\u041D\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E: \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043A\u0440\u0430\u0442\u043D\u044B\u043C ${n2.divisor}`;
        case "unrecognized_keys":
          return `\u041D\u0435\u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u043D\u043D${n2.keys.length > 1 ? "\u044B\u0435" : "\u044B\u0439"} \u043A\u043B\u044E\u0447${n2.keys.length > 1 ? "\u0438" : ""}: ${i.joinValues(n2.keys, ", ")}`;
        case "invalid_key":
          return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043A\u043B\u044E\u0447 \u0432 ${n2.origin}`;
        case "invalid_union":
        default:
          return "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u0432\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435";
        case "invalid_element":
          return `\u041D\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0432 ${n2.origin}`;
      }
    }) };
  }, "sl", 0, function() {
    let e2, t2, r2;
    return { localeError: (e2 = { string: { unit: "znakov", verb: "imeti" }, file: { unit: "bajtov", verb: "imeti" }, array: { unit: "elementov", verb: "imeti" }, set: { unit: "elementov", verb: "imeti" } }, t2 = { regex: "vnos", email: "e-po\u0161tni naslov", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO datum in \u010Das", date: "ISO datum", time: "ISO \u010Das", duration: "ISO trajanje", ipv4: "IPv4 naslov", ipv6: "IPv6 naslov", cidrv4: "obseg IPv4", cidrv6: "obseg IPv6", base64: "base64 kodiran niz", base64url: "base64url kodiran niz", json_string: "JSON niz", e164: "E.164 \u0161tevilka", jwt: "JWT", template_literal: "vnos" }, r2 = { nan: "NaN", number: "\u0161tevilo", array: "tabela" }, (n2) => {
      switch (n2.code) {
        case "invalid_type": {
          let e3 = r2[n2.expected] ?? n2.expected, t3 = i.parsedType(n2.input), a2 = r2[t3] ?? t3;
          if (/^[A-Z]/.test(n2.expected)) return `Neveljaven vnos: pri\u010Dakovano instanceof ${n2.expected}, prejeto ${a2}`;
          return `Neveljaven vnos: pri\u010Dakovano ${e3}, prejeto ${a2}`;
        }
        case "invalid_value":
          if (1 === n2.values.length) return `Neveljaven vnos: pri\u010Dakovano ${i.stringifyPrimitive(n2.values[0])}`;
          return `Neveljavna mo\u017Enost: pri\u010Dakovano eno izmed ${i.joinValues(n2.values, "|")}`;
        case "too_big": {
          let t3 = n2.inclusive ? "<=" : "<", i2 = e2[n2.origin] ?? null;
          if (i2) return `Preveliko: pri\u010Dakovano, da bo ${n2.origin ?? "vrednost"} imelo ${t3}${n2.maximum.toString()} ${i2.unit ?? "elementov"}`;
          return `Preveliko: pri\u010Dakovano, da bo ${n2.origin ?? "vrednost"} ${t3}${n2.maximum.toString()}`;
        }
        case "too_small": {
          let t3 = n2.inclusive ? ">=" : ">", i2 = e2[n2.origin] ?? null;
          if (i2) return `Premajhno: pri\u010Dakovano, da bo ${n2.origin} imelo ${t3}${n2.minimum.toString()} ${i2.unit}`;
          return `Premajhno: pri\u010Dakovano, da bo ${n2.origin} ${t3}${n2.minimum.toString()}`;
        }
        case "invalid_format":
          if ("starts_with" === n2.format) return `Neveljaven niz: mora se za\u010Deti z "${n2.prefix}"`;
          if ("ends_with" === n2.format) return `Neveljaven niz: mora se kon\u010Dati z "${n2.suffix}"`;
          if ("includes" === n2.format) return `Neveljaven niz: mora vsebovati "${n2.includes}"`;
          if ("regex" === n2.format) return `Neveljaven niz: mora ustrezati vzorcu ${n2.pattern}`;
          return `Neveljaven ${t2[n2.format] ?? n2.format}`;
        case "not_multiple_of":
          return `Neveljavno \u0161tevilo: mora biti ve\u010Dkratnik ${n2.divisor}`;
        case "unrecognized_keys":
          return `Neprepoznan${n2.keys.length > 1 ? "i klju\u010Di" : " klju\u010D"}: ${i.joinValues(n2.keys, ", ")}`;
        case "invalid_key":
          return `Neveljaven klju\u010D v ${n2.origin}`;
        case "invalid_union":
        default:
          return "Neveljaven vnos";
        case "invalid_element":
          return `Neveljavna vrednost v ${n2.origin}`;
      }
    }) };
  }, "sv", 0, function() {
    let e2, t2, r2;
    return { localeError: (e2 = { string: { unit: "tecken", verb: "att ha" }, file: { unit: "bytes", verb: "att ha" }, array: { unit: "objekt", verb: "att inneh\xE5lla" }, set: { unit: "objekt", verb: "att inneh\xE5lla" } }, t2 = { regex: "regulj\xE4rt uttryck", email: "e-postadress", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO-datum och tid", date: "ISO-datum", time: "ISO-tid", duration: "ISO-varaktighet", ipv4: "IPv4-intervall", ipv6: "IPv6-intervall", cidrv4: "IPv4-spektrum", cidrv6: "IPv6-spektrum", base64: "base64-kodad str\xE4ng", base64url: "base64url-kodad str\xE4ng", json_string: "JSON-str\xE4ng", e164: "E.164-nummer", jwt: "JWT", template_literal: "mall-literal" }, r2 = { nan: "NaN", number: "antal", array: "lista" }, (n2) => {
      switch (n2.code) {
        case "invalid_type": {
          let e3 = r2[n2.expected] ?? n2.expected, t3 = i.parsedType(n2.input), a2 = r2[t3] ?? t3;
          if (/^[A-Z]/.test(n2.expected)) return `Ogiltig inmatning: f\xF6rv\xE4ntat instanceof ${n2.expected}, fick ${a2}`;
          return `Ogiltig inmatning: f\xF6rv\xE4ntat ${e3}, fick ${a2}`;
        }
        case "invalid_value":
          if (1 === n2.values.length) return `Ogiltig inmatning: f\xF6rv\xE4ntat ${i.stringifyPrimitive(n2.values[0])}`;
          return `Ogiltigt val: f\xF6rv\xE4ntade en av ${i.joinValues(n2.values, "|")}`;
        case "too_big": {
          let t3 = n2.inclusive ? "<=" : "<", i2 = e2[n2.origin] ?? null;
          if (i2) return `F\xF6r stor(t): f\xF6rv\xE4ntade ${n2.origin ?? "v\xE4rdet"} att ha ${t3}${n2.maximum.toString()} ${i2.unit ?? "element"}`;
          return `F\xF6r stor(t): f\xF6rv\xE4ntat ${n2.origin ?? "v\xE4rdet"} att ha ${t3}${n2.maximum.toString()}`;
        }
        case "too_small": {
          let t3 = n2.inclusive ? ">=" : ">", i2 = e2[n2.origin] ?? null;
          if (i2) return `F\xF6r lite(t): f\xF6rv\xE4ntade ${n2.origin ?? "v\xE4rdet"} att ha ${t3}${n2.minimum.toString()} ${i2.unit}`;
          return `F\xF6r lite(t): f\xF6rv\xE4ntade ${n2.origin ?? "v\xE4rdet"} att ha ${t3}${n2.minimum.toString()}`;
        }
        case "invalid_format":
          if ("starts_with" === n2.format) return `Ogiltig str\xE4ng: m\xE5ste b\xF6rja med "${n2.prefix}"`;
          if ("ends_with" === n2.format) return `Ogiltig str\xE4ng: m\xE5ste sluta med "${n2.suffix}"`;
          if ("includes" === n2.format) return `Ogiltig str\xE4ng: m\xE5ste inneh\xE5lla "${n2.includes}"`;
          if ("regex" === n2.format) return `Ogiltig str\xE4ng: m\xE5ste matcha m\xF6nstret "${n2.pattern}"`;
          return `Ogiltig(t) ${t2[n2.format] ?? n2.format}`;
        case "not_multiple_of":
          return `Ogiltigt tal: m\xE5ste vara en multipel av ${n2.divisor}`;
        case "unrecognized_keys":
          return `${n2.keys.length > 1 ? "Ok\xE4nda nycklar" : "Ok\xE4nd nyckel"}: ${i.joinValues(n2.keys, ", ")}`;
        case "invalid_key":
          return `Ogiltig nyckel i ${n2.origin ?? "v\xE4rdet"}`;
        case "invalid_union":
        default:
          return "Ogiltig input";
        case "invalid_element":
          return `Ogiltigt v\xE4rde i ${n2.origin ?? "v\xE4rdet"}`;
      }
    }) };
  }, "ta", 0, function() {
    let e2, t2, r2;
    return { localeError: (e2 = { string: { unit: "\u0B8E\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B95\u0BCD\u0B95\u0BB3\u0BCD", verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD" }, file: { unit: "\u0BAA\u0BC8\u0B9F\u0BCD\u0B9F\u0BC1\u0B95\u0BB3\u0BCD", verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD" }, array: { unit: "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD", verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD" }, set: { unit: "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD", verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD" } }, t2 = { regex: "\u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1", email: "\u0BAE\u0BBF\u0BA9\u0BCD\u0BA9\u0B9E\u0BCD\u0B9A\u0BB2\u0BCD \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO \u0BA4\u0BC7\u0BA4\u0BBF \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD", date: "ISO \u0BA4\u0BC7\u0BA4\u0BBF", time: "ISO \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD", duration: "ISO \u0B95\u0BBE\u0BB2 \u0B85\u0BB3\u0BB5\u0BC1", ipv4: "IPv4 \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF", ipv6: "IPv6 \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF", cidrv4: "IPv4 \u0BB5\u0BB0\u0BAE\u0BCD\u0BAA\u0BC1", cidrv6: "IPv6 \u0BB5\u0BB0\u0BAE\u0BCD\u0BAA\u0BC1", base64: "base64-encoded \u0B9A\u0BB0\u0BAE\u0BCD", base64url: "base64url-encoded \u0B9A\u0BB0\u0BAE\u0BCD", json_string: "JSON \u0B9A\u0BB0\u0BAE\u0BCD", e164: "E.164 \u0B8E\u0BA3\u0BCD", jwt: "JWT", template_literal: "input" }, r2 = { nan: "NaN", number: "\u0B8E\u0BA3\u0BCD", array: "\u0B85\u0BA3\u0BBF", null: "\u0BB5\u0BC6\u0BB1\u0BC1\u0BAE\u0BC8" }, (n2) => {
      switch (n2.code) {
        case "invalid_type": {
          let e3 = r2[n2.expected] ?? n2.expected, t3 = i.parsedType(n2.input), a2 = r2[t3] ?? t3;
          if (/^[A-Z]/.test(n2.expected)) return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 instanceof ${n2.expected}, \u0BAA\u0BC6\u0BB1\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${a2}`;
          return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${e3}, \u0BAA\u0BC6\u0BB1\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${a2}`;
        }
        case "invalid_value":
          if (1 === n2.values.length) return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${i.stringifyPrimitive(n2.values[0])}`;
          return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BB5\u0BBF\u0BB0\u0BC1\u0BAA\u0BCD\u0BAA\u0BAE\u0BCD: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${i.joinValues(n2.values, "|")} \u0B87\u0BB2\u0BCD \u0B92\u0BA9\u0BCD\u0BB1\u0BC1`;
        case "too_big": {
          let t3 = n2.inclusive ? "<=" : "<", i2 = e2[n2.origin] ?? null;
          if (i2) return `\u0BAE\u0BBF\u0B95 \u0BAA\u0BC6\u0BB0\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${n2.origin ?? "\u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1"} ${t3}${n2.maximum.toString()} ${i2.unit ?? "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD"} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
          return `\u0BAE\u0BBF\u0B95 \u0BAA\u0BC6\u0BB0\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${n2.origin ?? "\u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1"} ${t3}${n2.maximum.toString()} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
        }
        case "too_small": {
          let t3 = n2.inclusive ? ">=" : ">", i2 = e2[n2.origin] ?? null;
          if (i2) return `\u0BAE\u0BBF\u0B95\u0B9A\u0BCD \u0B9A\u0BBF\u0BB1\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${n2.origin} ${t3}${n2.minimum.toString()} ${i2.unit} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
          return `\u0BAE\u0BBF\u0B95\u0B9A\u0BCD \u0B9A\u0BBF\u0BB1\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${n2.origin} ${t3}${n2.minimum.toString()} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
        }
        case "invalid_format":
          if ("starts_with" === n2.format) return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "${n2.prefix}" \u0B87\u0BB2\u0BCD \u0BA4\u0BCA\u0B9F\u0B99\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
          if ("ends_with" === n2.format) return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "${n2.suffix}" \u0B87\u0BB2\u0BCD \u0BAE\u0BC1\u0B9F\u0BBF\u0BB5\u0B9F\u0BC8\u0BAF \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
          if ("includes" === n2.format) return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "${n2.includes}" \u0B90 \u0B89\u0BB3\u0BCD\u0BB3\u0B9F\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
          if ("regex" === n2.format) return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: ${n2.pattern} \u0BAE\u0BC1\u0BB1\u0BC8\u0BAA\u0BBE\u0B9F\u0BCD\u0B9F\u0BC1\u0B9F\u0BA9\u0BCD \u0BAA\u0BCA\u0BB0\u0BC1\u0BA8\u0BCD\u0BA4 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
          return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 ${t2[n2.format] ?? n2.format}`;
        case "not_multiple_of":
          return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B8E\u0BA3\u0BCD: ${n2.divisor} \u0B87\u0BA9\u0BCD \u0BAA\u0BB2\u0BAE\u0BBE\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
        case "unrecognized_keys":
          return `\u0B85\u0B9F\u0BC8\u0BAF\u0BBE\u0BB3\u0BAE\u0BCD \u0BA4\u0BC6\u0BB0\u0BBF\u0BAF\u0BBE\u0BA4 \u0BB5\u0BBF\u0B9A\u0BC8${n2.keys.length > 1 ? "\u0B95\u0BB3\u0BCD" : ""}: ${i.joinValues(n2.keys, ", ")}`;
        case "invalid_key":
          return `${n2.origin} \u0B87\u0BB2\u0BCD \u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BB5\u0BBF\u0B9A\u0BC8`;
        case "invalid_union":
        default:
          return "\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1";
        case "invalid_element":
          return `${n2.origin} \u0B87\u0BB2\u0BCD \u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1`;
      }
    }) };
  }, "th", 0, function() {
    let e2, t2, r2;
    return { localeError: (e2 = { string: { unit: "\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23", verb: "\u0E04\u0E27\u0E23\u0E21\u0E35" }, file: { unit: "\u0E44\u0E1A\u0E15\u0E4C", verb: "\u0E04\u0E27\u0E23\u0E21\u0E35" }, array: { unit: "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23", verb: "\u0E04\u0E27\u0E23\u0E21\u0E35" }, set: { unit: "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23", verb: "\u0E04\u0E27\u0E23\u0E21\u0E35" } }, t2 = { regex: "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E1B\u0E49\u0E2D\u0E19", email: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E2D\u0E35\u0E40\u0E21\u0E25", url: "URL", emoji: "\u0E2D\u0E34\u0E42\u0E21\u0E08\u0E34", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E40\u0E27\u0E25\u0E32\u0E41\u0E1A\u0E1A ISO", date: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E41\u0E1A\u0E1A ISO", time: "\u0E40\u0E27\u0E25\u0E32\u0E41\u0E1A\u0E1A ISO", duration: "\u0E0A\u0E48\u0E27\u0E07\u0E40\u0E27\u0E25\u0E32\u0E41\u0E1A\u0E1A ISO", ipv4: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48 IPv4", ipv6: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48 IPv6", cidrv4: "\u0E0A\u0E48\u0E27\u0E07 IP \u0E41\u0E1A\u0E1A IPv4", cidrv6: "\u0E0A\u0E48\u0E27\u0E07 IP \u0E41\u0E1A\u0E1A IPv6", base64: "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E1A\u0E1A Base64", base64url: "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E1A\u0E1A Base64 \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A URL", json_string: "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E1A\u0E1A JSON", e164: "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28 (E.164)", jwt: "\u0E42\u0E17\u0E40\u0E04\u0E19 JWT", template_literal: "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E1B\u0E49\u0E2D\u0E19" }, r2 = { nan: "NaN", number: "\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02", array: "\u0E2D\u0E32\u0E23\u0E4C\u0E40\u0E23\u0E22\u0E4C (Array)", null: "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E04\u0E48\u0E32 (null)" }, (n2) => {
      switch (n2.code) {
        case "invalid_type": {
          let e3 = r2[n2.expected] ?? n2.expected, t3 = i.parsedType(n2.input), a2 = r2[t3] ?? t3;
          if (/^[A-Z]/.test(n2.expected)) return `\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19 instanceof ${n2.expected} \u0E41\u0E15\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A ${a2}`;
          return `\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19 ${e3} \u0E41\u0E15\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A ${a2}`;
        }
        case "invalid_value":
          if (1 === n2.values.length) return `\u0E04\u0E48\u0E32\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19 ${i.stringifyPrimitive(n2.values[0])}`;
          return `\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E43\u0E19 ${i.joinValues(n2.values, "|")}`;
        case "too_big": {
          let t3 = n2.inclusive ? "\u0E44\u0E21\u0E48\u0E40\u0E01\u0E34\u0E19" : "\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32", i2 = e2[n2.origin] ?? null;
          if (i2) return `\u0E40\u0E01\u0E34\u0E19\u0E01\u0E33\u0E2B\u0E19\u0E14: ${n2.origin ?? "\u0E04\u0E48\u0E32"} \u0E04\u0E27\u0E23\u0E21\u0E35${t3} ${n2.maximum.toString()} ${i2.unit ?? "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23"}`;
          return `\u0E40\u0E01\u0E34\u0E19\u0E01\u0E33\u0E2B\u0E19\u0E14: ${n2.origin ?? "\u0E04\u0E48\u0E32"} \u0E04\u0E27\u0E23\u0E21\u0E35${t3} ${n2.maximum.toString()}`;
        }
        case "too_small": {
          let t3 = n2.inclusive ? "\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E19\u0E49\u0E2D\u0E22" : "\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32", i2 = e2[n2.origin] ?? null;
          if (i2) return `\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32\u0E01\u0E33\u0E2B\u0E19\u0E14: ${n2.origin} \u0E04\u0E27\u0E23\u0E21\u0E35${t3} ${n2.minimum.toString()} ${i2.unit}`;
          return `\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32\u0E01\u0E33\u0E2B\u0E19\u0E14: ${n2.origin} \u0E04\u0E27\u0E23\u0E21\u0E35${t3} ${n2.minimum.toString()}`;
        }
        case "invalid_format":
          if ("starts_with" === n2.format) return `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E02\u0E36\u0E49\u0E19\u0E15\u0E49\u0E19\u0E14\u0E49\u0E27\u0E22 "${n2.prefix}"`;
          if ("ends_with" === n2.format) return `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E25\u0E07\u0E17\u0E49\u0E32\u0E22\u0E14\u0E49\u0E27\u0E22 "${n2.suffix}"`;
          if ("includes" === n2.format) return `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E21\u0E35 "${n2.includes}" \u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21`;
          if ("regex" === n2.format) return `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E15\u0E49\u0E2D\u0E07\u0E15\u0E23\u0E07\u0E01\u0E31\u0E1A\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14 ${n2.pattern}`;
          return `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: ${t2[n2.format] ?? n2.format}`;
        case "not_multiple_of":
          return `\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E15\u0E49\u0E2D\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E08\u0E33\u0E19\u0E27\u0E19\u0E17\u0E35\u0E48\u0E2B\u0E32\u0E23\u0E14\u0E49\u0E27\u0E22 ${n2.divisor} \u0E44\u0E14\u0E49\u0E25\u0E07\u0E15\u0E31\u0E27`;
        case "unrecognized_keys":
          return `\u0E1E\u0E1A\u0E04\u0E35\u0E22\u0E4C\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E23\u0E39\u0E49\u0E08\u0E31\u0E01: ${i.joinValues(n2.keys, ", ")}`;
        case "invalid_key":
          return `\u0E04\u0E35\u0E22\u0E4C\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E19 ${n2.origin}`;
        case "invalid_union":
          return "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E44\u0E21\u0E48\u0E15\u0E23\u0E07\u0E01\u0E31\u0E1A\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E22\u0E39\u0E40\u0E19\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E44\u0E27\u0E49";
        case "invalid_element":
          return `\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E19 ${n2.origin}`;
        default:
          return "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07";
      }
    }) };
  }, "tr", 0, function() {
    let e2, t2, r2;
    return { localeError: (e2 = { string: { unit: "karakter", verb: "olmal\u0131" }, file: { unit: "bayt", verb: "olmal\u0131" }, array: { unit: "\xF6\u011Fe", verb: "olmal\u0131" }, set: { unit: "\xF6\u011Fe", verb: "olmal\u0131" } }, t2 = { regex: "girdi", email: "e-posta adresi", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO tarih ve saat", date: "ISO tarih", time: "ISO saat", duration: "ISO s\xFCre", ipv4: "IPv4 adresi", ipv6: "IPv6 adresi", cidrv4: "IPv4 aral\u0131\u011F\u0131", cidrv6: "IPv6 aral\u0131\u011F\u0131", base64: "base64 ile \u015Fifrelenmi\u015F metin", base64url: "base64url ile \u015Fifrelenmi\u015F metin", json_string: "JSON dizesi", e164: "E.164 say\u0131s\u0131", jwt: "JWT", template_literal: "\u015Eablon dizesi" }, r2 = { nan: "NaN" }, (n2) => {
      switch (n2.code) {
        case "invalid_type": {
          let e3 = r2[n2.expected] ?? n2.expected, t3 = i.parsedType(n2.input), a2 = r2[t3] ?? t3;
          if (/^[A-Z]/.test(n2.expected)) return `Ge\xE7ersiz de\u011Fer: beklenen instanceof ${n2.expected}, al\u0131nan ${a2}`;
          return `Ge\xE7ersiz de\u011Fer: beklenen ${e3}, al\u0131nan ${a2}`;
        }
        case "invalid_value":
          if (1 === n2.values.length) return `Ge\xE7ersiz de\u011Fer: beklenen ${i.stringifyPrimitive(n2.values[0])}`;
          return `Ge\xE7ersiz se\xE7enek: a\u015Fa\u011F\u0131dakilerden biri olmal\u0131: ${i.joinValues(n2.values, "|")}`;
        case "too_big": {
          let t3 = n2.inclusive ? "<=" : "<", i2 = e2[n2.origin] ?? null;
          if (i2) return `\xC7ok b\xFCy\xFCk: beklenen ${n2.origin ?? "de\u011Fer"} ${t3}${n2.maximum.toString()} ${i2.unit ?? "\xF6\u011Fe"}`;
          return `\xC7ok b\xFCy\xFCk: beklenen ${n2.origin ?? "de\u011Fer"} ${t3}${n2.maximum.toString()}`;
        }
        case "too_small": {
          let t3 = n2.inclusive ? ">=" : ">", i2 = e2[n2.origin] ?? null;
          if (i2) return `\xC7ok k\xFC\xE7\xFCk: beklenen ${n2.origin} ${t3}${n2.minimum.toString()} ${i2.unit}`;
          return `\xC7ok k\xFC\xE7\xFCk: beklenen ${n2.origin} ${t3}${n2.minimum.toString()}`;
        }
        case "invalid_format":
          if ("starts_with" === n2.format) return `Ge\xE7ersiz metin: "${n2.prefix}" ile ba\u015Flamal\u0131`;
          if ("ends_with" === n2.format) return `Ge\xE7ersiz metin: "${n2.suffix}" ile bitmeli`;
          if ("includes" === n2.format) return `Ge\xE7ersiz metin: "${n2.includes}" i\xE7ermeli`;
          if ("regex" === n2.format) return `Ge\xE7ersiz metin: ${n2.pattern} desenine uymal\u0131`;
          return `Ge\xE7ersiz ${t2[n2.format] ?? n2.format}`;
        case "not_multiple_of":
          return `Ge\xE7ersiz say\u0131: ${n2.divisor} ile tam b\xF6l\xFCnebilmeli`;
        case "unrecognized_keys":
          return `Tan\u0131nmayan anahtar${n2.keys.length > 1 ? "lar" : ""}: ${i.joinValues(n2.keys, ", ")}`;
        case "invalid_key":
          return `${n2.origin} i\xE7inde ge\xE7ersiz anahtar`;
        case "invalid_union":
        default:
          return "Ge\xE7ersiz de\u011Fer";
        case "invalid_element":
          return `${n2.origin} i\xE7inde ge\xE7ersiz de\u011Fer`;
      }
    }) };
  }, "ua", 0, function() {
    return ei();
  }, "uk", 0, ei, "ur", 0, function() {
    let e2, t2, r2;
    return { localeError: (e2 = { string: { unit: "\u062D\u0631\u0648\u0641", verb: "\u06C1\u0648\u0646\u0627" }, file: { unit: "\u0628\u0627\u0626\u0679\u0633", verb: "\u06C1\u0648\u0646\u0627" }, array: { unit: "\u0622\u0626\u0679\u0645\u0632", verb: "\u06C1\u0648\u0646\u0627" }, set: { unit: "\u0622\u0626\u0679\u0645\u0632", verb: "\u06C1\u0648\u0646\u0627" } }, t2 = { regex: "\u0627\u0646 \u067E\u0679", email: "\u0627\u06CC \u0645\u06CC\u0644 \u0627\u06CC\u0688\u0631\u06CC\u0633", url: "\u06CC\u0648 \u0622\u0631 \u0627\u06CC\u0644", emoji: "\u0627\u06CC\u0645\u0648\u062C\u06CC", uuid: "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC", uuidv4: "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC \u0648\u06CC 4", uuidv6: "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC \u0648\u06CC 6", nanoid: "\u0646\u06CC\u0646\u0648 \u0622\u0626\u06CC \u0688\u06CC", guid: "\u062C\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC", cuid: "\u0633\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC", cuid2: "\u0633\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC 2", ulid: "\u06CC\u0648 \u0627\u06CC\u0644 \u0622\u0626\u06CC \u0688\u06CC", xid: "\u0627\u06CC\u06A9\u0633 \u0622\u0626\u06CC \u0688\u06CC", ksuid: "\u06A9\u06D2 \u0627\u06CC\u0633 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC", datetime: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0688\u06CC\u0679 \u0679\u0627\u0626\u0645", date: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u062A\u0627\u0631\u06CC\u062E", time: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0648\u0642\u062A", duration: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0645\u062F\u062A", ipv4: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 4 \u0627\u06CC\u0688\u0631\u06CC\u0633", ipv6: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 6 \u0627\u06CC\u0688\u0631\u06CC\u0633", cidrv4: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 4 \u0631\u06CC\u0646\u062C", cidrv6: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 6 \u0631\u06CC\u0646\u062C", base64: "\u0628\u06CC\u0633 64 \u0627\u0646 \u06A9\u0648\u0688\u0688 \u0633\u0679\u0631\u0646\u06AF", base64url: "\u0628\u06CC\u0633 64 \u06CC\u0648 \u0622\u0631 \u0627\u06CC\u0644 \u0627\u0646 \u06A9\u0648\u0688\u0688 \u0633\u0679\u0631\u0646\u06AF", json_string: "\u062C\u06D2 \u0627\u06CC\u0633 \u0627\u0648 \u0627\u06CC\u0646 \u0633\u0679\u0631\u0646\u06AF", e164: "\u0627\u06CC 164 \u0646\u0645\u0628\u0631", jwt: "\u062C\u06D2 \u0688\u0628\u0644\u06CC\u0648 \u0679\u06CC", template_literal: "\u0627\u0646 \u067E\u0679" }, r2 = { nan: "NaN", number: "\u0646\u0645\u0628\u0631", array: "\u0622\u0631\u06D2", null: "\u0646\u0644" }, (n2) => {
      switch (n2.code) {
        case "invalid_type": {
          let e3 = r2[n2.expected] ?? n2.expected, t3 = i.parsedType(n2.input), a2 = r2[t3] ?? t3;
          if (/^[A-Z]/.test(n2.expected)) return `\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: instanceof ${n2.expected} \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627\u060C ${a2} \u0645\u0648\u0635\u0648\u0644 \u06C1\u0648\u0627`;
          return `\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: ${e3} \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627\u060C ${a2} \u0645\u0648\u0635\u0648\u0644 \u06C1\u0648\u0627`;
        }
        case "invalid_value":
          if (1 === n2.values.length) return `\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: ${i.stringifyPrimitive(n2.values[0])} \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
          return `\u063A\u0644\u0637 \u0622\u067E\u0634\u0646: ${i.joinValues(n2.values, "|")} \u0645\u06CC\u06BA \u0633\u06D2 \u0627\u06CC\u06A9 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
        case "too_big": {
          let t3 = n2.inclusive ? "<=" : "<", i2 = e2[n2.origin] ?? null;
          if (i2) return `\u0628\u06C1\u062A \u0628\u0691\u0627: ${n2.origin ?? "\u0648\u06CC\u0644\u06CC\u0648"} \u06A9\u06D2 ${t3}${n2.maximum.toString()} ${i2.unit ?? "\u0639\u0646\u0627\u0635\u0631"} \u06C1\u0648\u0646\u06D2 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u06D2`;
          return `\u0628\u06C1\u062A \u0628\u0691\u0627: ${n2.origin ?? "\u0648\u06CC\u0644\u06CC\u0648"} \u06A9\u0627 ${t3}${n2.maximum.toString()} \u06C1\u0648\u0646\u0627 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
        }
        case "too_small": {
          let t3 = n2.inclusive ? ">=" : ">", i2 = e2[n2.origin] ?? null;
          if (i2) return `\u0628\u06C1\u062A \u0686\u06BE\u0648\u0679\u0627: ${n2.origin} \u06A9\u06D2 ${t3}${n2.minimum.toString()} ${i2.unit} \u06C1\u0648\u0646\u06D2 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u06D2`;
          return `\u0628\u06C1\u062A \u0686\u06BE\u0648\u0679\u0627: ${n2.origin} \u06A9\u0627 ${t3}${n2.minimum.toString()} \u06C1\u0648\u0646\u0627 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
        }
        case "invalid_format":
          if ("starts_with" === n2.format) return `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "${n2.prefix}" \u0633\u06D2 \u0634\u0631\u0648\u0639 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`;
          if ("ends_with" === n2.format) return `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "${n2.suffix}" \u067E\u0631 \u062E\u062A\u0645 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`;
          if ("includes" === n2.format) return `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "${n2.includes}" \u0634\u0627\u0645\u0644 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`;
          if ("regex" === n2.format) return `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: \u067E\u06CC\u0679\u0631\u0646 ${n2.pattern} \u0633\u06D2 \u0645\u06CC\u0686 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`;
          return `\u063A\u0644\u0637 ${t2[n2.format] ?? n2.format}`;
        case "not_multiple_of":
          return `\u063A\u0644\u0637 \u0646\u0645\u0628\u0631: ${n2.divisor} \u06A9\u0627 \u0645\u0636\u0627\u0639\u0641 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`;
        case "unrecognized_keys":
          return `\u063A\u06CC\u0631 \u062A\u0633\u0644\u06CC\u0645 \u0634\u062F\u06C1 \u06A9\u06CC${n2.keys.length > 1 ? "\u0632" : ""}: ${i.joinValues(n2.keys, "\u060C ")}`;
        case "invalid_key":
          return `${n2.origin} \u0645\u06CC\u06BA \u063A\u0644\u0637 \u06A9\u06CC`;
        case "invalid_union":
        default:
          return "\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679";
        case "invalid_element":
          return `${n2.origin} \u0645\u06CC\u06BA \u063A\u0644\u0637 \u0648\u06CC\u0644\u06CC\u0648`;
      }
    }) };
  }, "uz", 0, function() {
    let e2, t2, r2;
    return { localeError: (e2 = { string: { unit: "belgi", verb: "bo\u2018lishi kerak" }, file: { unit: "bayt", verb: "bo\u2018lishi kerak" }, array: { unit: "element", verb: "bo\u2018lishi kerak" }, set: { unit: "element", verb: "bo\u2018lishi kerak" }, map: { unit: "yozuv", verb: "bo\u2018lishi kerak" } }, t2 = { regex: "kirish", email: "elektron pochta manzili", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO sana va vaqti", date: "ISO sana", time: "ISO vaqt", duration: "ISO davomiylik", ipv4: "IPv4 manzil", ipv6: "IPv6 manzil", mac: "MAC manzil", cidrv4: "IPv4 diapazon", cidrv6: "IPv6 diapazon", base64: "base64 kodlangan satr", base64url: "base64url kodlangan satr", json_string: "JSON satr", e164: "E.164 raqam", jwt: "JWT", template_literal: "kirish" }, r2 = { nan: "NaN", number: "raqam", array: "massiv" }, (n2) => {
      switch (n2.code) {
        case "invalid_type": {
          let e3 = r2[n2.expected] ?? n2.expected, t3 = i.parsedType(n2.input), a2 = r2[t3] ?? t3;
          if (/^[A-Z]/.test(n2.expected)) return `Noto\u2018g\u2018ri kirish: kutilgan instanceof ${n2.expected}, qabul qilingan ${a2}`;
          return `Noto\u2018g\u2018ri kirish: kutilgan ${e3}, qabul qilingan ${a2}`;
        }
        case "invalid_value":
          if (1 === n2.values.length) return `Noto\u2018g\u2018ri kirish: kutilgan ${i.stringifyPrimitive(n2.values[0])}`;
          return `Noto\u2018g\u2018ri variant: quyidagilardan biri kutilgan ${i.joinValues(n2.values, "|")}`;
        case "too_big": {
          let t3 = n2.inclusive ? "<=" : "<", i2 = e2[n2.origin] ?? null;
          if (i2) return `Juda katta: kutilgan ${n2.origin ?? "qiymat"} ${t3}${n2.maximum.toString()} ${i2.unit} ${i2.verb}`;
          return `Juda katta: kutilgan ${n2.origin ?? "qiymat"} ${t3}${n2.maximum.toString()}`;
        }
        case "too_small": {
          let t3 = n2.inclusive ? ">=" : ">", i2 = e2[n2.origin] ?? null;
          if (i2) return `Juda kichik: kutilgan ${n2.origin} ${t3}${n2.minimum.toString()} ${i2.unit} ${i2.verb}`;
          return `Juda kichik: kutilgan ${n2.origin} ${t3}${n2.minimum.toString()}`;
        }
        case "invalid_format":
          if ("starts_with" === n2.format) return `Noto\u2018g\u2018ri satr: "${n2.prefix}" bilan boshlanishi kerak`;
          if ("ends_with" === n2.format) return `Noto\u2018g\u2018ri satr: "${n2.suffix}" bilan tugashi kerak`;
          if ("includes" === n2.format) return `Noto\u2018g\u2018ri satr: "${n2.includes}" ni o\u2018z ichiga olishi kerak`;
          if ("regex" === n2.format) return `Noto\u2018g\u2018ri satr: ${n2.pattern} shabloniga mos kelishi kerak`;
          return `Noto\u2018g\u2018ri ${t2[n2.format] ?? n2.format}`;
        case "not_multiple_of":
          return `Noto\u2018g\u2018ri raqam: ${n2.divisor} ning karralisi bo\u2018lishi kerak`;
        case "unrecognized_keys":
          return `Noma\u2019lum kalit${n2.keys.length > 1 ? "lar" : ""}: ${i.joinValues(n2.keys, ", ")}`;
        case "invalid_key":
          return `${n2.origin} dagi kalit noto\u2018g\u2018ri`;
        case "invalid_union":
        default:
          return "Noto\u2018g\u2018ri kirish";
        case "invalid_element":
          return `${n2.origin} da noto\u2018g\u2018ri qiymat`;
      }
    }) };
  }, "vi", 0, function() {
    let e2, t2, r2;
    return { localeError: (e2 = { string: { unit: "k\xFD t\u1EF1", verb: "c\xF3" }, file: { unit: "byte", verb: "c\xF3" }, array: { unit: "ph\u1EA7n t\u1EED", verb: "c\xF3" }, set: { unit: "ph\u1EA7n t\u1EED", verb: "c\xF3" } }, t2 = { regex: "\u0111\u1EA7u v\xE0o", email: "\u0111\u1ECBa ch\u1EC9 email", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ng\xE0y gi\u1EDD ISO", date: "ng\xE0y ISO", time: "gi\u1EDD ISO", duration: "kho\u1EA3ng th\u1EDDi gian ISO", ipv4: "\u0111\u1ECBa ch\u1EC9 IPv4", ipv6: "\u0111\u1ECBa ch\u1EC9 IPv6", cidrv4: "d\u1EA3i IPv4", cidrv6: "d\u1EA3i IPv6", base64: "chu\u1ED7i m\xE3 h\xF3a base64", base64url: "chu\u1ED7i m\xE3 h\xF3a base64url", json_string: "chu\u1ED7i JSON", e164: "s\u1ED1 E.164", jwt: "JWT", template_literal: "\u0111\u1EA7u v\xE0o" }, r2 = { nan: "NaN", number: "s\u1ED1", array: "m\u1EA3ng" }, (n2) => {
      switch (n2.code) {
        case "invalid_type": {
          let e3 = r2[n2.expected] ?? n2.expected, t3 = i.parsedType(n2.input), a2 = r2[t3] ?? t3;
          if (/^[A-Z]/.test(n2.expected)) return `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i instanceof ${n2.expected}, nh\u1EADn \u0111\u01B0\u1EE3c ${a2}`;
          return `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i ${e3}, nh\u1EADn \u0111\u01B0\u1EE3c ${a2}`;
        }
        case "invalid_value":
          if (1 === n2.values.length) return `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i ${i.stringifyPrimitive(n2.values[0])}`;
          return `T\xF9y ch\u1ECDn kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i m\u1ED9t trong c\xE1c gi\xE1 tr\u1ECB ${i.joinValues(n2.values, "|")}`;
        case "too_big": {
          let t3 = n2.inclusive ? "<=" : "<", i2 = e2[n2.origin] ?? null;
          if (i2) return `Qu\xE1 l\u1EDBn: mong \u0111\u1EE3i ${n2.origin ?? "gi\xE1 tr\u1ECB"} ${i2.verb} ${t3}${n2.maximum.toString()} ${i2.unit ?? "ph\u1EA7n t\u1EED"}`;
          return `Qu\xE1 l\u1EDBn: mong \u0111\u1EE3i ${n2.origin ?? "gi\xE1 tr\u1ECB"} ${t3}${n2.maximum.toString()}`;
        }
        case "too_small": {
          let t3 = n2.inclusive ? ">=" : ">", i2 = e2[n2.origin] ?? null;
          if (i2) return `Qu\xE1 nh\u1ECF: mong \u0111\u1EE3i ${n2.origin} ${i2.verb} ${t3}${n2.minimum.toString()} ${i2.unit}`;
          return `Qu\xE1 nh\u1ECF: mong \u0111\u1EE3i ${n2.origin} ${t3}${n2.minimum.toString()}`;
        }
        case "invalid_format":
          if ("starts_with" === n2.format) return `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i b\u1EAFt \u0111\u1EA7u b\u1EB1ng "${n2.prefix}"`;
          if ("ends_with" === n2.format) return `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i k\u1EBFt th\xFAc b\u1EB1ng "${n2.suffix}"`;
          if ("includes" === n2.format) return `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i bao g\u1ED3m "${n2.includes}"`;
          if ("regex" === n2.format) return `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i kh\u1EDBp v\u1EDBi m\u1EABu ${n2.pattern}`;
          return `${t2[n2.format] ?? n2.format} kh\xF4ng h\u1EE3p l\u1EC7`;
        case "not_multiple_of":
          return `S\u1ED1 kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i l\xE0 b\u1ED9i s\u1ED1 c\u1EE7a ${n2.divisor}`;
        case "unrecognized_keys":
          return `Kh\xF3a kh\xF4ng \u0111\u01B0\u1EE3c nh\u1EADn d\u1EA1ng: ${i.joinValues(n2.keys, ", ")}`;
        case "invalid_key":
          return `Kh\xF3a kh\xF4ng h\u1EE3p l\u1EC7 trong ${n2.origin}`;
        case "invalid_union":
        default:
          return "\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7";
        case "invalid_element":
          return `Gi\xE1 tr\u1ECB kh\xF4ng h\u1EE3p l\u1EC7 trong ${n2.origin}`;
      }
    }) };
  }, "yo", 0, function() {
    let e2, t2, r2;
    return { localeError: (e2 = { string: { unit: "\xE0mi", verb: "n\xED" }, file: { unit: "bytes", verb: "n\xED" }, array: { unit: "nkan", verb: "n\xED" }, set: { unit: "nkan", verb: "n\xED" } }, t2 = { regex: "\u1EB9\u0300r\u1ECD \xECb\xE1w\u1ECDl\xE9", email: "\xE0d\xEDr\u1EB9\u0301s\xEC \xECm\u1EB9\u0301l\xEC", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "\xE0k\xF3k\xF2 ISO", date: "\u1ECDj\u1ECD\u0301 ISO", time: "\xE0k\xF3k\xF2 ISO", duration: "\xE0k\xF3k\xF2 t\xF3 p\xE9 ISO", ipv4: "\xE0d\xEDr\u1EB9\u0301s\xEC IPv4", ipv6: "\xE0d\xEDr\u1EB9\u0301s\xEC IPv6", cidrv4: "\xE0gb\xE8gb\xE8 IPv4", cidrv6: "\xE0gb\xE8gb\xE8 IPv6", base64: "\u1ECD\u0300r\u1ECD\u0300 t\xED a k\u1ECD\u0301 n\xED base64", base64url: "\u1ECD\u0300r\u1ECD\u0300 base64url", json_string: "\u1ECD\u0300r\u1ECD\u0300 JSON", e164: "n\u1ECD\u0301mb\xE0 E.164", jwt: "JWT", template_literal: "\u1EB9\u0300r\u1ECD \xECb\xE1w\u1ECDl\xE9" }, r2 = { nan: "NaN", number: "n\u1ECD\u0301mb\xE0", array: "akop\u1ECD" }, (n2) => {
      switch (n2.code) {
        case "invalid_type": {
          let e3 = r2[n2.expected] ?? n2.expected, t3 = i.parsedType(n2.input), a2 = r2[t3] ?? t3;
          if (/^[A-Z]/.test(n2.expected)) return `\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e: a n\xED l\xE1ti fi instanceof ${n2.expected}, \xE0m\u1ECD\u0300 a r\xED ${a2}`;
          return `\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e: a n\xED l\xE1ti fi ${e3}, \xE0m\u1ECD\u0300 a r\xED ${a2}`;
        }
        case "invalid_value":
          if (1 === n2.values.length) return `\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e: a n\xED l\xE1ti fi ${i.stringifyPrimitive(n2.values[0])}`;
          return `\xC0\u1E63\xE0y\xE0n a\u1E63\xEC\u1E63e: yan \u1ECD\u0300kan l\xE1ra ${i.joinValues(n2.values, "|")}`;
        case "too_big": {
          let t3 = n2.inclusive ? "<=" : "<", i2 = e2[n2.origin] ?? null;
          if (i2) return `T\xF3 p\u1ECD\u0300 j\xF9: a n\xED l\xE1ti j\u1EB9\u0301 p\xE9 ${n2.origin ?? "iye"} ${i2.verb} ${t3}${n2.maximum} ${i2.unit}`;
          return `T\xF3 p\u1ECD\u0300 j\xF9: a n\xED l\xE1ti j\u1EB9\u0301 ${t3}${n2.maximum}`;
        }
        case "too_small": {
          let t3 = n2.inclusive ? ">=" : ">", i2 = e2[n2.origin] ?? null;
          if (i2) return `K\xE9r\xE9 ju: a n\xED l\xE1ti j\u1EB9\u0301 p\xE9 ${n2.origin} ${i2.verb} ${t3}${n2.minimum} ${i2.unit}`;
          return `K\xE9r\xE9 ju: a n\xED l\xE1ti j\u1EB9\u0301 ${t3}${n2.minimum}`;
        }
        case "invalid_format":
          if ("starts_with" === n2.format) return `\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 b\u1EB9\u0300r\u1EB9\u0300 p\u1EB9\u0300l\xFA "${n2.prefix}"`;
          if ("ends_with" === n2.format) return `\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 par\xED p\u1EB9\u0300l\xFA "${n2.suffix}"`;
          if ("includes" === n2.format) return `\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 n\xED "${n2.includes}"`;
          if ("regex" === n2.format) return `\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 b\xE1 \xE0p\u1EB9\u1EB9r\u1EB9 mu ${n2.pattern}`;
          return `A\u1E63\xEC\u1E63e: ${t2[n2.format] ?? n2.format}`;
        case "not_multiple_of":
          return `N\u1ECD\u0301mb\xE0 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 j\u1EB9\u0301 \xE8y\xE0 p\xEDp\xEDn ti ${n2.divisor}`;
        case "unrecognized_keys":
          return `B\u1ECDt\xECn\xEC \xE0\xECm\u1ECD\u0300: ${i.joinValues(n2.keys, ", ")}`;
        case "invalid_key":
          return `B\u1ECDt\xECn\xEC a\u1E63\xEC\u1E63e n\xEDn\xFA ${n2.origin}`;
        case "invalid_union":
        default:
          return "\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e";
        case "invalid_element":
          return `Iye a\u1E63\xEC\u1E63e n\xEDn\xFA ${n2.origin}`;
      }
    }) };
  }, "zhCN", 0, function() {
    let e2, t2, r2;
    return { localeError: (e2 = { string: { unit: "\u5B57\u7B26", verb: "\u5305\u542B" }, file: { unit: "\u5B57\u8282", verb: "\u5305\u542B" }, array: { unit: "\u9879", verb: "\u5305\u542B" }, set: { unit: "\u9879", verb: "\u5305\u542B" } }, t2 = { regex: "\u8F93\u5165", email: "\u7535\u5B50\u90AE\u4EF6", url: "URL", emoji: "\u8868\u60C5\u7B26\u53F7", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO\u65E5\u671F\u65F6\u95F4", date: "ISO\u65E5\u671F", time: "ISO\u65F6\u95F4", duration: "ISO\u65F6\u957F", ipv4: "IPv4\u5730\u5740", ipv6: "IPv6\u5730\u5740", cidrv4: "IPv4\u7F51\u6BB5", cidrv6: "IPv6\u7F51\u6BB5", base64: "base64\u7F16\u7801\u5B57\u7B26\u4E32", base64url: "base64url\u7F16\u7801\u5B57\u7B26\u4E32", json_string: "JSON\u5B57\u7B26\u4E32", e164: "E.164\u53F7\u7801", jwt: "JWT", template_literal: "\u8F93\u5165" }, r2 = { nan: "NaN", number: "\u6570\u5B57", array: "\u6570\u7EC4", null: "\u7A7A\u503C(null)" }, (n2) => {
      switch (n2.code) {
        case "invalid_type": {
          let e3 = r2[n2.expected] ?? n2.expected, t3 = i.parsedType(n2.input), a2 = r2[t3] ?? t3;
          if (/^[A-Z]/.test(n2.expected)) return `\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B instanceof ${n2.expected}\uFF0C\u5B9E\u9645\u63A5\u6536 ${a2}`;
          return `\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B ${e3}\uFF0C\u5B9E\u9645\u63A5\u6536 ${a2}`;
        }
        case "invalid_value":
          if (1 === n2.values.length) return `\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B ${i.stringifyPrimitive(n2.values[0])}`;
          return `\u65E0\u6548\u9009\u9879\uFF1A\u671F\u671B\u4EE5\u4E0B\u4E4B\u4E00 ${i.joinValues(n2.values, "|")}`;
        case "too_big": {
          let t3 = n2.inclusive ? "<=" : "<", i2 = e2[n2.origin] ?? null;
          if (i2) return `\u6570\u503C\u8FC7\u5927\uFF1A\u671F\u671B ${n2.origin ?? "\u503C"} ${t3}${n2.maximum.toString()} ${i2.unit ?? "\u4E2A\u5143\u7D20"}`;
          return `\u6570\u503C\u8FC7\u5927\uFF1A\u671F\u671B ${n2.origin ?? "\u503C"} ${t3}${n2.maximum.toString()}`;
        }
        case "too_small": {
          let t3 = n2.inclusive ? ">=" : ">", i2 = e2[n2.origin] ?? null;
          if (i2) return `\u6570\u503C\u8FC7\u5C0F\uFF1A\u671F\u671B ${n2.origin} ${t3}${n2.minimum.toString()} ${i2.unit}`;
          return `\u6570\u503C\u8FC7\u5C0F\uFF1A\u671F\u671B ${n2.origin} ${t3}${n2.minimum.toString()}`;
        }
        case "invalid_format":
          if ("starts_with" === n2.format) return `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u4EE5 "${n2.prefix}" \u5F00\u5934`;
          if ("ends_with" === n2.format) return `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u4EE5 "${n2.suffix}" \u7ED3\u5C3E`;
          if ("includes" === n2.format) return `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u5305\u542B "${n2.includes}"`;
          if ("regex" === n2.format) return `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u6EE1\u8DB3\u6B63\u5219\u8868\u8FBE\u5F0F ${n2.pattern}`;
          return `\u65E0\u6548${t2[n2.format] ?? n2.format}`;
        case "not_multiple_of":
          return `\u65E0\u6548\u6570\u5B57\uFF1A\u5FC5\u987B\u662F ${n2.divisor} \u7684\u500D\u6570`;
        case "unrecognized_keys":
          return `\u51FA\u73B0\u672A\u77E5\u7684\u952E(key): ${i.joinValues(n2.keys, ", ")}`;
        case "invalid_key":
          return `${n2.origin} \u4E2D\u7684\u952E(key)\u65E0\u6548`;
        case "invalid_union":
        default:
          return "\u65E0\u6548\u8F93\u5165";
        case "invalid_element":
          return `${n2.origin} \u4E2D\u5305\u542B\u65E0\u6548\u503C(value)`;
      }
    }) };
  }, "zhTW", 0, function() {
    let e2, t2, r2;
    return { localeError: (e2 = { string: { unit: "\u5B57\u5143", verb: "\u64C1\u6709" }, file: { unit: "\u4F4D\u5143\u7D44", verb: "\u64C1\u6709" }, array: { unit: "\u9805\u76EE", verb: "\u64C1\u6709" }, set: { unit: "\u9805\u76EE", verb: "\u64C1\u6709" } }, t2 = { regex: "\u8F38\u5165", email: "\u90F5\u4EF6\u5730\u5740", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO \u65E5\u671F\u6642\u9593", date: "ISO \u65E5\u671F", time: "ISO \u6642\u9593", duration: "ISO \u671F\u9593", ipv4: "IPv4 \u4F4D\u5740", ipv6: "IPv6 \u4F4D\u5740", cidrv4: "IPv4 \u7BC4\u570D", cidrv6: "IPv6 \u7BC4\u570D", base64: "base64 \u7DE8\u78BC\u5B57\u4E32", base64url: "base64url \u7DE8\u78BC\u5B57\u4E32", json_string: "JSON \u5B57\u4E32", e164: "E.164 \u6578\u503C", jwt: "JWT", template_literal: "\u8F38\u5165" }, r2 = { nan: "NaN" }, (n2) => {
      switch (n2.code) {
        case "invalid_type": {
          let e3 = r2[n2.expected] ?? n2.expected, t3 = i.parsedType(n2.input), a2 = r2[t3] ?? t3;
          if (/^[A-Z]/.test(n2.expected)) return `\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA instanceof ${n2.expected}\uFF0C\u4F46\u6536\u5230 ${a2}`;
          return `\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA ${e3}\uFF0C\u4F46\u6536\u5230 ${a2}`;
        }
        case "invalid_value":
          if (1 === n2.values.length) return `\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA ${i.stringifyPrimitive(n2.values[0])}`;
          return `\u7121\u6548\u7684\u9078\u9805\uFF1A\u9810\u671F\u70BA\u4EE5\u4E0B\u5176\u4E2D\u4E4B\u4E00 ${i.joinValues(n2.values, "|")}`;
        case "too_big": {
          let t3 = n2.inclusive ? "<=" : "<", i2 = e2[n2.origin] ?? null;
          if (i2) return `\u6578\u503C\u904E\u5927\uFF1A\u9810\u671F ${n2.origin ?? "\u503C"} \u61C9\u70BA ${t3}${n2.maximum.toString()} ${i2.unit ?? "\u500B\u5143\u7D20"}`;
          return `\u6578\u503C\u904E\u5927\uFF1A\u9810\u671F ${n2.origin ?? "\u503C"} \u61C9\u70BA ${t3}${n2.maximum.toString()}`;
        }
        case "too_small": {
          let t3 = n2.inclusive ? ">=" : ">", i2 = e2[n2.origin] ?? null;
          if (i2) return `\u6578\u503C\u904E\u5C0F\uFF1A\u9810\u671F ${n2.origin} \u61C9\u70BA ${t3}${n2.minimum.toString()} ${i2.unit}`;
          return `\u6578\u503C\u904E\u5C0F\uFF1A\u9810\u671F ${n2.origin} \u61C9\u70BA ${t3}${n2.minimum.toString()}`;
        }
        case "invalid_format":
          if ("starts_with" === n2.format) return `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u4EE5 "${n2.prefix}" \u958B\u982D`;
          if ("ends_with" === n2.format) return `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u4EE5 "${n2.suffix}" \u7D50\u5C3E`;
          if ("includes" === n2.format) return `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u5305\u542B "${n2.includes}"`;
          if ("regex" === n2.format) return `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u7B26\u5408\u683C\u5F0F ${n2.pattern}`;
          return `\u7121\u6548\u7684 ${t2[n2.format] ?? n2.format}`;
        case "not_multiple_of":
          return `\u7121\u6548\u7684\u6578\u5B57\uFF1A\u5FC5\u9808\u70BA ${n2.divisor} \u7684\u500D\u6578`;
        case "unrecognized_keys":
          return `\u7121\u6CD5\u8B58\u5225\u7684\u9375\u503C${n2.keys.length > 1 ? "\u5011" : ""}\uFF1A${i.joinValues(n2.keys, "\u3001")}`;
        case "invalid_key":
          return `${n2.origin} \u4E2D\u6709\u7121\u6548\u7684\u9375\u503C`;
        case "invalid_union":
        default:
          return "\u7121\u6548\u7684\u8F38\u5165\u503C";
        case "invalid_element":
          return `${n2.origin} \u4E2D\u6709\u7121\u6548\u7684\u503C`;
      }
    }) };
  }], 416917);
}, 383197, 238857, (e) => {
  "use strict";
  var t = e.i(894320), i = e.i(2108), r = e.i(873885), n = e.i(905772), a = e.i(153563), o = e.i(69547);
  try {
    var s = "u" > typeof window ? window : e.g;
    s._sentryModuleMetadata = s._sentryModuleMetadata || {}, s._sentryModuleMetadata[new s.Error().stack] = Object.assign({}, s._sentryModuleMetadata[new s.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let u = { major: 4, minor: 4, patch: 3 };
  e.s(["version", 0, u], 238857);
  try {
    var l = "u" > typeof window ? window : e.g;
    l._sentryModuleMetadata = l._sentryModuleMetadata || {}, l._sentryModuleMetadata[new l.Error().stack] = Object.assign({}, l._sentryModuleMetadata[new l.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let d = i.$constructor("$ZodType", (e2, t2) => {
    var r2;
    e2 ?? (e2 = {}), e2._zod.def = t2, e2._zod.bag = e2._zod.bag || {}, e2._zod.version = u;
    let a2 = [...e2._zod.def.checks ?? []];
    for (let t3 of (e2._zod.traits.has("$ZodCheck") && a2.unshift(e2), a2)) for (let i2 of t3._zod.onattach) i2(e2);
    if (0 === a2.length) (r2 = e2._zod).deferred ?? (r2.deferred = []), e2._zod.deferred?.push(() => {
      e2._zod.run = e2._zod.parse;
    });
    else {
      let t3 = (e3, t4, r4) => {
        let n2, a3 = o.aborted(e3);
        for (let s2 of t4) {
          if (s2._zod.def.when) {
            if (o.explicitlyAborted(e3) || !s2._zod.def.when(e3)) continue;
          } else if (a3) continue;
          let t5 = e3.issues.length, u2 = s2._zod.check(e3);
          if (u2 instanceof Promise && r4?.async === false) throw new i.$ZodAsyncError();
          if (n2 || u2 instanceof Promise) n2 = (n2 ?? Promise.resolve()).then(async () => {
            await u2, e3.issues.length !== t5 && (a3 || (a3 = o.aborted(e3, t5)));
          });
          else {
            if (e3.issues.length === t5) continue;
            a3 || (a3 = o.aborted(e3, t5));
          }
        }
        return n2 ? n2.then(() => e3) : e3;
      }, r3 = (r4, n2, s2) => {
        if (o.aborted(r4)) return r4.aborted = true, r4;
        let u2 = t3(n2, a2, s2);
        if (u2 instanceof Promise) {
          if (false === s2.async) throw new i.$ZodAsyncError();
          return u2.then((t4) => e2._zod.parse(t4, s2));
        }
        return e2._zod.parse(u2, s2);
      };
      e2._zod.run = (n2, o2) => {
        if (o2.skipChecks) return e2._zod.parse(n2, o2);
        if ("backward" === o2.direction) {
          let t4 = e2._zod.parse({ value: n2.value, issues: [] }, { ...o2, skipChecks: true });
          return t4 instanceof Promise ? t4.then((e3) => r3(e3, n2, o2)) : r3(t4, n2, o2);
        }
        let s2 = e2._zod.parse(n2, o2);
        if (s2 instanceof Promise) {
          if (false === o2.async) throw new i.$ZodAsyncError();
          return s2.then((e3) => t3(e3, a2, o2));
        }
        return t3(s2, a2, o2);
      };
    }
    o.defineLazy(e2, "~standard", () => ({ validate: (t3) => {
      try {
        let i2 = (0, n.safeParse)(e2, t3);
        return i2.success ? { value: i2.data } : { issues: i2.error?.issues };
      } catch (i2) {
        return (0, n.safeParseAsync)(e2, t3).then((e3) => e3.success ? { value: e3.data } : { issues: e3.error?.issues });
      }
    }, vendor: "zod", version: 1 }));
  }), c = i.$constructor("$ZodString", (e2, t2) => {
    d.init(e2, t2), e2._zod.pattern = [...e2?._zod.bag?.patterns ?? []].pop() ?? a.string(e2._zod.bag), e2._zod.parse = (i2, r2) => {
      if (t2.coerce) try {
        i2.value = String(i2.value);
      } catch (e3) {
      }
      return "string" == typeof i2.value || i2.issues.push({ expected: "string", code: "invalid_type", input: i2.value, inst: e2 }), i2;
    };
  }), m = i.$constructor("$ZodStringFormat", (e2, i2) => {
    t.$ZodCheckStringFormat.init(e2, i2), c.init(e2, i2);
  }), f = i.$constructor("$ZodGUID", (e2, t2) => {
    t2.pattern ?? (t2.pattern = a.guid), m.init(e2, t2);
  }), p = i.$constructor("$ZodUUID", (e2, t2) => {
    if (t2.version) {
      let e3 = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[t2.version];
      if (void 0 === e3) throw Error(`Invalid UUID version: "${t2.version}"`);
      t2.pattern ?? (t2.pattern = a.uuid(e3));
    } else t2.pattern ?? (t2.pattern = a.uuid());
    m.init(e2, t2);
  }), v = i.$constructor("$ZodEmail", (e2, t2) => {
    t2.pattern ?? (t2.pattern = a.email), m.init(e2, t2);
  }), g = i.$constructor("$ZodURL", (e2, t2) => {
    m.init(e2, t2), e2._zod.check = (i2) => {
      try {
        let r2 = i2.value.trim();
        if (!t2.normalize && t2.protocol?.source === a.httpProtocol.source && !/^https?:\/\//i.test(r2)) return void i2.issues.push({ code: "invalid_format", format: "url", note: "Invalid URL format", input: i2.value, inst: e2, continue: !t2.abort });
        let n2 = new URL(r2);
        t2.hostname && (t2.hostname.lastIndex = 0, t2.hostname.test(n2.hostname) || i2.issues.push({ code: "invalid_format", format: "url", note: "Invalid hostname", pattern: t2.hostname.source, input: i2.value, inst: e2, continue: !t2.abort })), t2.protocol && (t2.protocol.lastIndex = 0, t2.protocol.test(n2.protocol.endsWith(":") ? n2.protocol.slice(0, -1) : n2.protocol) || i2.issues.push({ code: "invalid_format", format: "url", note: "Invalid protocol", pattern: t2.protocol.source, input: i2.value, inst: e2, continue: !t2.abort })), t2.normalize ? i2.value = n2.href : i2.value = r2;
        return;
      } catch (r2) {
        i2.issues.push({ code: "invalid_format", format: "url", input: i2.value, inst: e2, continue: !t2.abort });
      }
    };
  }), _ = i.$constructor("$ZodEmoji", (e2, t2) => {
    t2.pattern ?? (t2.pattern = a.emoji()), m.init(e2, t2);
  }), $ = i.$constructor("$ZodNanoID", (e2, t2) => {
    t2.pattern ?? (t2.pattern = a.nanoid), m.init(e2, t2);
  }), y = i.$constructor("$ZodCUID", (e2, t2) => {
    t2.pattern ?? (t2.pattern = a.cuid), m.init(e2, t2);
  }), h = i.$constructor("$ZodCUID2", (e2, t2) => {
    t2.pattern ?? (t2.pattern = a.cuid2), m.init(e2, t2);
  }), b = i.$constructor("$ZodULID", (e2, t2) => {
    t2.pattern ?? (t2.pattern = a.ulid), m.init(e2, t2);
  }), x = i.$constructor("$ZodXID", (e2, t2) => {
    t2.pattern ?? (t2.pattern = a.xid), m.init(e2, t2);
  }), k = i.$constructor("$ZodKSUID", (e2, t2) => {
    t2.pattern ?? (t2.pattern = a.ksuid), m.init(e2, t2);
  }), w = i.$constructor("$ZodISODateTime", (e2, t2) => {
    t2.pattern ?? (t2.pattern = a.datetime(t2)), m.init(e2, t2);
  }), I = i.$constructor("$ZodISODate", (e2, t2) => {
    t2.pattern ?? (t2.pattern = a.date), m.init(e2, t2);
  }), Z = i.$constructor("$ZodISOTime", (e2, t2) => {
    t2.pattern ?? (t2.pattern = a.time(t2)), m.init(e2, t2);
  }), z = i.$constructor("$ZodISODuration", (e2, t2) => {
    t2.pattern ?? (t2.pattern = a.duration), m.init(e2, t2);
  }), S = i.$constructor("$ZodIPv4", (e2, t2) => {
    t2.pattern ?? (t2.pattern = a.ipv4), m.init(e2, t2), e2._zod.bag.format = "ipv4";
  }), P = i.$constructor("$ZodIPv6", (e2, t2) => {
    t2.pattern ?? (t2.pattern = a.ipv6), m.init(e2, t2), e2._zod.bag.format = "ipv6", e2._zod.check = (i2) => {
      try {
        new URL(`http://[${i2.value}]`);
      } catch {
        i2.issues.push({ code: "invalid_format", format: "ipv6", input: i2.value, inst: e2, continue: !t2.abort });
      }
    };
  }), E = i.$constructor("$ZodMAC", (e2, t2) => {
    t2.pattern ?? (t2.pattern = a.mac(t2.delimiter)), m.init(e2, t2), e2._zod.bag.format = "mac";
  }), M = i.$constructor("$ZodCIDRv4", (e2, t2) => {
    t2.pattern ?? (t2.pattern = a.cidrv4), m.init(e2, t2);
  }), O = i.$constructor("$ZodCIDRv6", (e2, t2) => {
    t2.pattern ?? (t2.pattern = a.cidrv6), m.init(e2, t2), e2._zod.check = (i2) => {
      let r2 = i2.value.split("/");
      try {
        if (2 !== r2.length) throw Error();
        let [e3, t3] = r2;
        if (!t3) throw Error();
        let i3 = Number(t3);
        if (`${i3}` !== t3 || i3 < 0 || i3 > 128) throw Error();
        new URL(`http://[${e3}]`);
      } catch {
        i2.issues.push({ code: "invalid_format", format: "cidrv6", input: i2.value, inst: e2, continue: !t2.abort });
      }
    };
  });
  function U(e2) {
    if ("" === e2) return true;
    if (/\s/.test(e2) || e2.length % 4 != 0) return false;
    try {
      return atob(e2), true;
    } catch {
      return false;
    }
  }
  let j = i.$constructor("$ZodBase64", (e2, t2) => {
    t2.pattern ?? (t2.pattern = a.base64), m.init(e2, t2), e2._zod.bag.contentEncoding = "base64", e2._zod.check = (i2) => {
      U(i2.value) || i2.issues.push({ code: "invalid_format", format: "base64", input: i2.value, inst: e2, continue: !t2.abort });
    };
  });
  function D(e2) {
    if (!a.base64url.test(e2)) return false;
    let t2 = e2.replace(/[-_]/g, (e3) => "-" === e3 ? "+" : "/");
    return U(t2.padEnd(4 * Math.ceil(t2.length / 4), "="));
  }
  let N = i.$constructor("$ZodBase64URL", (e2, t2) => {
    t2.pattern ?? (t2.pattern = a.base64url), m.init(e2, t2), e2._zod.bag.contentEncoding = "base64url", e2._zod.check = (i2) => {
      D(i2.value) || i2.issues.push({ code: "invalid_format", format: "base64url", input: i2.value, inst: e2, continue: !t2.abort });
    };
  }), T = i.$constructor("$ZodE164", (e2, t2) => {
    t2.pattern ?? (t2.pattern = a.e164), m.init(e2, t2);
  });
  function A(e2, t2 = null) {
    try {
      let i2 = e2.split(".");
      if (3 !== i2.length) return false;
      let [r2] = i2;
      if (!r2) return false;
      let n2 = JSON.parse(atob(r2));
      if ("typ" in n2 && n2?.typ !== "JWT" || !n2.alg || t2 && (!("alg" in n2) || n2.alg !== t2)) return false;
      return true;
    } catch {
      return false;
    }
  }
  let L = i.$constructor("$ZodJWT", (e2, t2) => {
    m.init(e2, t2), e2._zod.check = (i2) => {
      A(i2.value, t2.alg) || i2.issues.push({ code: "invalid_format", format: "jwt", input: i2.value, inst: e2, continue: !t2.abort });
    };
  }), C = i.$constructor("$ZodCustomStringFormat", (e2, t2) => {
    m.init(e2, t2), e2._zod.check = (i2) => {
      t2.fn(i2.value) || i2.issues.push({ code: "invalid_format", format: t2.format, input: i2.value, inst: e2, continue: !t2.abort });
    };
  }), R = i.$constructor("$ZodNumber", (e2, t2) => {
    d.init(e2, t2), e2._zod.pattern = e2._zod.bag.pattern ?? a.number, e2._zod.parse = (i2, r2) => {
      if (t2.coerce) try {
        i2.value = Number(i2.value);
      } catch (e3) {
      }
      let n2 = i2.value;
      if ("number" == typeof n2 && !Number.isNaN(n2) && Number.isFinite(n2)) return i2;
      let a2 = "number" == typeof n2 ? Number.isNaN(n2) ? "NaN" : Number.isFinite(n2) ? void 0 : "Infinity" : void 0;
      return i2.issues.push({ expected: "number", code: "invalid_type", input: n2, inst: e2, ...a2 ? { received: a2 } : {} }), i2;
    };
  }), B = i.$constructor("$ZodNumberFormat", (e2, i2) => {
    t.$ZodCheckNumberFormat.init(e2, i2), R.init(e2, i2);
  }), J = i.$constructor("$ZodBoolean", (e2, t2) => {
    d.init(e2, t2), e2._zod.pattern = a.boolean, e2._zod.parse = (i2, r2) => {
      if (t2.coerce) try {
        i2.value = !!i2.value;
      } catch (e3) {
      }
      let n2 = i2.value;
      return "boolean" == typeof n2 || i2.issues.push({ expected: "boolean", code: "invalid_type", input: n2, inst: e2 }), i2;
    };
  }), V = i.$constructor("$ZodBigInt", (e2, t2) => {
    d.init(e2, t2), e2._zod.pattern = a.bigint, e2._zod.parse = (i2, r2) => {
      if (t2.coerce) try {
        i2.value = BigInt(i2.value);
      } catch (e3) {
      }
      return "bigint" == typeof i2.value || i2.issues.push({ expected: "bigint", code: "invalid_type", input: i2.value, inst: e2 }), i2;
    };
  }), K = i.$constructor("$ZodBigIntFormat", (e2, i2) => {
    t.$ZodCheckBigIntFormat.init(e2, i2), V.init(e2, i2);
  }), F = i.$constructor("$ZodSymbol", (e2, t2) => {
    d.init(e2, t2), e2._zod.parse = (t3, i2) => {
      let r2 = t3.value;
      return "symbol" == typeof r2 || t3.issues.push({ expected: "symbol", code: "invalid_type", input: r2, inst: e2 }), t3;
    };
  }), G = i.$constructor("$ZodUndefined", (e2, t2) => {
    d.init(e2, t2), e2._zod.pattern = a.undefined, e2._zod.values = /* @__PURE__ */ new Set([void 0]), e2._zod.parse = (t3, i2) => {
      let r2 = t3.value;
      return void 0 === r2 || t3.issues.push({ expected: "undefined", code: "invalid_type", input: r2, inst: e2 }), t3;
    };
  }), W = i.$constructor("$ZodNull", (e2, t2) => {
    d.init(e2, t2), e2._zod.pattern = a.null, e2._zod.values = /* @__PURE__ */ new Set([null]), e2._zod.parse = (t3, i2) => {
      let r2 = t3.value;
      return null === r2 || t3.issues.push({ expected: "null", code: "invalid_type", input: r2, inst: e2 }), t3;
    };
  }), X = i.$constructor("$ZodAny", (e2, t2) => {
    d.init(e2, t2), e2._zod.parse = (e3) => e3;
  }), q = i.$constructor("$ZodUnknown", (e2, t2) => {
    d.init(e2, t2), e2._zod.parse = (e3) => e3;
  }), Y = i.$constructor("$ZodNever", (e2, t2) => {
    d.init(e2, t2), e2._zod.parse = (t3, i2) => (t3.issues.push({ expected: "never", code: "invalid_type", input: t3.value, inst: e2 }), t3);
  }), H = i.$constructor("$ZodVoid", (e2, t2) => {
    d.init(e2, t2), e2._zod.parse = (t3, i2) => {
      let r2 = t3.value;
      return void 0 === r2 || t3.issues.push({ expected: "void", code: "invalid_type", input: r2, inst: e2 }), t3;
    };
  }), Q = i.$constructor("$ZodDate", (e2, t2) => {
    d.init(e2, t2), e2._zod.parse = (i2, r2) => {
      if (t2.coerce) try {
        i2.value = new Date(i2.value);
      } catch (e3) {
      }
      let n2 = i2.value, a2 = n2 instanceof Date;
      return a2 && !Number.isNaN(n2.getTime()) || i2.issues.push({ expected: "date", code: "invalid_type", input: n2, ...a2 ? { received: "Invalid Date" } : {}, inst: e2 }), i2;
    };
  });
  function ee(e2, t2, i2) {
    e2.issues.length && t2.issues.push(...o.prefixIssues(i2, e2.issues)), t2.value[i2] = e2.value;
  }
  let et = i.$constructor("$ZodArray", (e2, t2) => {
    d.init(e2, t2), e2._zod.parse = (i2, r2) => {
      let n2 = i2.value;
      if (!Array.isArray(n2)) return i2.issues.push({ expected: "array", code: "invalid_type", input: n2, inst: e2 }), i2;
      i2.value = Array(n2.length);
      let a2 = [];
      for (let e3 = 0; e3 < n2.length; e3++) {
        let o2 = n2[e3], s2 = t2.element._zod.run({ value: o2, issues: [] }, r2);
        s2 instanceof Promise ? a2.push(s2.then((t3) => ee(t3, i2, e3))) : ee(s2, i2, e3);
      }
      return a2.length ? Promise.all(a2).then(() => i2) : i2;
    };
  });
  function ei(e2, t2, i2, r2, n2, a2) {
    let s2 = i2 in r2;
    if (e2.issues.length) {
      if (n2 && a2 && !s2) return;
      t2.issues.push(...o.prefixIssues(i2, e2.issues));
    }
    if (!s2 && !n2) {
      e2.issues.length || t2.issues.push({ code: "invalid_type", expected: "nonoptional", input: void 0, path: [i2] });
      return;
    }
    void 0 === e2.value ? s2 && (t2.value[i2] = void 0) : t2.value[i2] = e2.value;
  }
  function er(e2) {
    let t2 = Object.keys(e2.shape);
    for (let i3 of t2) if (!e2.shape?.[i3]?._zod?.traits?.has("$ZodType")) throw Error(`Invalid element at key "${i3}": expected a Zod schema`);
    let i2 = o.optionalKeys(e2.shape);
    return { ...e2, keys: t2, keySet: new Set(t2), numKeys: t2.length, optionalKeys: new Set(i2) };
  }
  function en(e2, t2, i2, r2, n2, a2) {
    let o2 = [], s2 = n2.keySet, u2 = n2.catchall._zod, l2 = u2.def.type, d2 = "optional" === u2.optin, c2 = "optional" === u2.optout;
    for (let n3 in t2) {
      if ("__proto__" === n3 || s2.has(n3)) continue;
      if ("never" === l2) {
        o2.push(n3);
        continue;
      }
      let a3 = u2.run({ value: t2[n3], issues: [] }, r2);
      a3 instanceof Promise ? e2.push(a3.then((e3) => ei(e3, i2, n3, t2, d2, c2))) : ei(a3, i2, n3, t2, d2, c2);
    }
    return (o2.length && i2.issues.push({ code: "unrecognized_keys", keys: o2, input: t2, inst: a2 }), e2.length) ? Promise.all(e2).then(() => i2) : i2;
  }
  let ea = i.$constructor("$ZodObject", (e2, t2) => {
    let i2;
    d.init(e2, t2);
    let r2 = Object.getOwnPropertyDescriptor(t2, "shape");
    if (!r2?.get) {
      let e3 = t2.shape;
      Object.defineProperty(t2, "shape", { get: () => {
        let i3 = { ...e3 };
        return Object.defineProperty(t2, "shape", { value: i3 }), i3;
      } });
    }
    let n2 = o.cached(() => er(t2));
    o.defineLazy(e2._zod, "propValues", () => {
      let e3 = t2.shape, i3 = {};
      for (let t3 in e3) {
        let r3 = e3[t3]._zod;
        if (r3.values) for (let e4 of (i3[t3] ?? (i3[t3] = /* @__PURE__ */ new Set()), r3.values)) i3[t3].add(e4);
      }
      return i3;
    });
    let a2 = o.isObject, s2 = t2.catchall;
    e2._zod.parse = (t3, r3) => {
      i2 ?? (i2 = n2.value);
      let o2 = t3.value;
      if (!a2(o2)) return t3.issues.push({ expected: "object", code: "invalid_type", input: o2, inst: e2 }), t3;
      t3.value = {};
      let u2 = [], l2 = i2.shape;
      for (let e3 of i2.keys) {
        let i3 = l2[e3], n3 = "optional" === i3._zod.optin, a3 = "optional" === i3._zod.optout, s3 = i3._zod.run({ value: o2[e3], issues: [] }, r3);
        s3 instanceof Promise ? u2.push(s3.then((i4) => ei(i4, t3, e3, o2, n3, a3))) : ei(s3, t3, e3, o2, n3, a3);
      }
      return s2 ? en(u2, o2, t3, r3, n2.value, e2) : u2.length ? Promise.all(u2).then(() => t3) : t3;
    };
  }), eo = i.$constructor("$ZodObjectJIT", (e2, t2) => {
    let n2, a2;
    ea.init(e2, t2);
    let s2 = e2._zod.parse, u2 = o.cached(() => er(t2)), l2 = o.isObject, d2 = !i.globalConfig.jitless, c2 = o.allowsEval, m2 = d2 && c2.value, f2 = t2.catchall;
    e2._zod.parse = (i2, c3) => {
      a2 ?? (a2 = u2.value);
      let p2 = i2.value;
      return l2(p2) ? d2 && m2 && c3?.async === false && true !== c3.jitless ? (n2 || (n2 = ((e3) => {
        let t3 = new r.Doc(["shape", "payload", "ctx"]), i3 = u2.value, n3 = (e4) => {
          let t4 = o.esc(e4);
          return `shape[${t4}]._zod.run({ value: input[${t4}], issues: [] }, ctx)`;
        };
        t3.write("const input = payload.value;");
        let a3 = /* @__PURE__ */ Object.create(null), s3 = 0;
        for (let e4 of i3.keys) a3[e4] = `key_${s3++}`;
        for (let r2 of (t3.write("const newResult = {};"), i3.keys)) {
          let i4 = a3[r2], s4 = o.esc(r2), u3 = e3[r2], l4 = u3?._zod?.optin === "optional", d3 = u3?._zod?.optout === "optional";
          t3.write(`const ${i4} = ${n3(r2)};`), l4 && d3 ? t3.write(`
        if (${i4}.issues.length) {
          if (${s4} in input) {
            payload.issues = payload.issues.concat(${i4}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${s4}, ...iss.path] : [${s4}]
            })));
          }
        }
        
        if (${i4}.value === undefined) {
          if (${s4} in input) {
            newResult[${s4}] = undefined;
          }
        } else {
          newResult[${s4}] = ${i4}.value;
        }
        
      `) : l4 ? t3.write(`
        if (${i4}.issues.length) {
          payload.issues = payload.issues.concat(${i4}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${s4}, ...iss.path] : [${s4}]
          })));
        }
        
        if (${i4}.value === undefined) {
          if (${s4} in input) {
            newResult[${s4}] = undefined;
          }
        } else {
          newResult[${s4}] = ${i4}.value;
        }
        
      `) : t3.write(`
        const ${i4}_present = ${s4} in input;
        if (${i4}.issues.length) {
          payload.issues = payload.issues.concat(${i4}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${s4}, ...iss.path] : [${s4}]
          })));
        }
        if (!${i4}_present && !${i4}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${s4}]
          });
        }

        if (${i4}_present) {
          if (${i4}.value === undefined) {
            newResult[${s4}] = undefined;
          } else {
            newResult[${s4}] = ${i4}.value;
          }
        }

      `);
        }
        t3.write("payload.value = newResult;"), t3.write("return payload;");
        let l3 = t3.compile();
        return (t4, i4) => l3(e3, t4, i4);
      })(t2.shape)), i2 = n2(i2, c3), f2) ? en([], p2, i2, c3, a2, e2) : i2 : s2(i2, c3) : (i2.issues.push({ expected: "object", code: "invalid_type", input: p2, inst: e2 }), i2);
    };
  });
  function es(e2, t2, r2, n2) {
    for (let i2 of e2) if (0 === i2.issues.length) return t2.value = i2.value, t2;
    let a2 = e2.filter((e3) => !o.aborted(e3));
    return 1 === a2.length ? (t2.value = a2[0].value, a2[0]) : (t2.issues.push({ code: "invalid_union", input: t2.value, inst: r2, errors: e2.map((e3) => e3.issues.map((e4) => o.finalizeIssue(e4, n2, i.config()))) }), t2);
  }
  let eu = i.$constructor("$ZodUnion", (e2, t2) => {
    d.init(e2, t2), o.defineLazy(e2._zod, "optin", () => t2.options.some((e3) => "optional" === e3._zod.optin) ? "optional" : void 0), o.defineLazy(e2._zod, "optout", () => t2.options.some((e3) => "optional" === e3._zod.optout) ? "optional" : void 0), o.defineLazy(e2._zod, "values", () => {
      if (t2.options.every((e3) => e3._zod.values)) return new Set(t2.options.flatMap((e3) => Array.from(e3._zod.values)));
    }), o.defineLazy(e2._zod, "pattern", () => {
      if (t2.options.every((e3) => e3._zod.pattern)) {
        let e3 = t2.options.map((e4) => e4._zod.pattern);
        return RegExp(`^(${e3.map((e4) => o.cleanRegex(e4.source)).join("|")})$`);
      }
    });
    let i2 = 1 === t2.options.length ? t2.options[0]._zod.run : null;
    e2._zod.parse = (r2, n2) => {
      if (i2) return i2(r2, n2);
      let a2 = false, o2 = [];
      for (let e3 of t2.options) {
        let t3 = e3._zod.run({ value: r2.value, issues: [] }, n2);
        if (t3 instanceof Promise) o2.push(t3), a2 = true;
        else {
          if (0 === t3.issues.length) return t3;
          o2.push(t3);
        }
      }
      return a2 ? Promise.all(o2).then((t3) => es(t3, r2, e2, n2)) : es(o2, r2, e2, n2);
    };
  });
  function el(e2, t2, r2, n2) {
    let a2 = e2.filter((e3) => 0 === e3.issues.length);
    return 1 === a2.length ? t2.value = a2[0].value : 0 === a2.length ? t2.issues.push({ code: "invalid_union", input: t2.value, inst: r2, errors: e2.map((e3) => e3.issues.map((e4) => o.finalizeIssue(e4, n2, i.config()))) }) : t2.issues.push({ code: "invalid_union", input: t2.value, inst: r2, errors: [], inclusive: false }), t2;
  }
  let ed = i.$constructor("$ZodXor", (e2, t2) => {
    eu.init(e2, t2), t2.inclusive = false;
    let i2 = 1 === t2.options.length ? t2.options[0]._zod.run : null;
    e2._zod.parse = (r2, n2) => {
      if (i2) return i2(r2, n2);
      let a2 = false, o2 = [];
      for (let e3 of t2.options) {
        let t3 = e3._zod.run({ value: r2.value, issues: [] }, n2);
        t3 instanceof Promise ? (o2.push(t3), a2 = true) : o2.push(t3);
      }
      return a2 ? Promise.all(o2).then((t3) => el(t3, r2, e2, n2)) : el(o2, r2, e2, n2);
    };
  }), ec = i.$constructor("$ZodDiscriminatedUnion", (e2, t2) => {
    t2.inclusive = false, eu.init(e2, t2);
    let i2 = e2._zod.parse;
    o.defineLazy(e2._zod, "propValues", () => {
      let e3 = {};
      for (let i3 of t2.options) {
        let r3 = i3._zod.propValues;
        if (!r3 || 0 === Object.keys(r3).length) throw Error(`Invalid discriminated union option at index "${t2.options.indexOf(i3)}"`);
        for (let [t3, i4] of Object.entries(r3)) for (let r4 of (e3[t3] || (e3[t3] = /* @__PURE__ */ new Set()), i4)) e3[t3].add(r4);
      }
      return e3;
    });
    let r2 = o.cached(() => {
      let e3 = t2.options, i3 = /* @__PURE__ */ new Map();
      for (let r3 of e3) {
        let e4 = r3._zod.propValues?.[t2.discriminator];
        if (!e4 || 0 === e4.size) throw Error(`Invalid discriminated union option at index "${t2.options.indexOf(r3)}"`);
        for (let t3 of e4) {
          if (i3.has(t3)) throw Error(`Duplicate discriminator value "${String(t3)}"`);
          i3.set(t3, r3);
        }
      }
      return i3;
    });
    e2._zod.parse = (n2, a2) => {
      let s2 = n2.value;
      if (!o.isObject(s2)) return n2.issues.push({ code: "invalid_type", expected: "object", input: s2, inst: e2 }), n2;
      let u2 = r2.value.get(s2?.[t2.discriminator]);
      return u2 ? u2._zod.run(n2, a2) : t2.unionFallback || "backward" === a2.direction ? i2(n2, a2) : (n2.issues.push({ code: "invalid_union", errors: [], note: "No matching discriminator", discriminator: t2.discriminator, options: Array.from(r2.value.keys()), input: s2, path: [t2.discriminator], inst: e2 }), n2);
    };
  }), em = i.$constructor("$ZodIntersection", (e2, t2) => {
    d.init(e2, t2), e2._zod.parse = (e3, i2) => {
      let r2 = e3.value, n2 = t2.left._zod.run({ value: r2, issues: [] }, i2), a2 = t2.right._zod.run({ value: r2, issues: [] }, i2);
      return n2 instanceof Promise || a2 instanceof Promise ? Promise.all([n2, a2]).then(([t3, i3]) => ef(e3, t3, i3)) : ef(e3, n2, a2);
    };
  });
  function ef(e2, t2, i2) {
    let r2, n2 = /* @__PURE__ */ new Map();
    for (let i3 of t2.issues) if ("unrecognized_keys" === i3.code) for (let e3 of (r2 ?? (r2 = i3), i3.keys)) n2.has(e3) || n2.set(e3, {}), n2.get(e3).l = true;
    else e2.issues.push(i3);
    for (let t3 of i2.issues) if ("unrecognized_keys" === t3.code) for (let e3 of t3.keys) n2.has(e3) || n2.set(e3, {}), n2.get(e3).r = true;
    else e2.issues.push(t3);
    let a2 = [...n2].filter(([, e3]) => e3.l && e3.r).map(([e3]) => e3);
    if (a2.length && r2 && e2.issues.push({ ...r2, keys: a2 }), o.aborted(e2)) return e2;
    let s2 = (function e3(t3, i3) {
      if (t3 === i3 || t3 instanceof Date && i3 instanceof Date && +t3 == +i3) return { valid: true, data: t3 };
      if (o.isPlainObject(t3) && o.isPlainObject(i3)) {
        let r3 = Object.keys(i3), n3 = Object.keys(t3).filter((e4) => -1 !== r3.indexOf(e4)), a3 = { ...t3, ...i3 };
        for (let r4 of n3) {
          let n4 = e3(t3[r4], i3[r4]);
          if (!n4.valid) return { valid: false, mergeErrorPath: [r4, ...n4.mergeErrorPath] };
          a3[r4] = n4.data;
        }
        return { valid: true, data: a3 };
      }
      if (Array.isArray(t3) && Array.isArray(i3)) {
        if (t3.length !== i3.length) return { valid: false, mergeErrorPath: [] };
        let r3 = [];
        for (let n3 = 0; n3 < t3.length; n3++) {
          let a3 = e3(t3[n3], i3[n3]);
          if (!a3.valid) return { valid: false, mergeErrorPath: [n3, ...a3.mergeErrorPath] };
          r3.push(a3.data);
        }
        return { valid: true, data: r3 };
      }
      return { valid: false, mergeErrorPath: [] };
    })(t2.value, i2.value);
    if (!s2.valid) throw Error(`Unmergable intersection. Error path: ${JSON.stringify(s2.mergeErrorPath)}`);
    return e2.value = s2.data, e2;
  }
  let ep = i.$constructor("$ZodTuple", (e2, t2) => {
    d.init(e2, t2);
    let i2 = t2.items;
    e2._zod.parse = (r2, n2) => {
      let a2 = r2.value;
      if (!Array.isArray(a2)) return r2.issues.push({ input: a2, inst: e2, expected: "tuple", code: "invalid_type" }), r2;
      r2.value = [];
      let o2 = [], s2 = ev(i2, "optin"), u2 = ev(i2, "optout");
      if (!t2.rest) {
        if (a2.length < s2) return r2.issues.push({ code: "too_small", minimum: s2, inclusive: true, input: a2, inst: e2, origin: "array" }), r2;
        a2.length > i2.length && r2.issues.push({ code: "too_big", maximum: i2.length, inclusive: true, input: a2, inst: e2, origin: "array" });
      }
      let l2 = Array(i2.length);
      for (let e3 = 0; e3 < i2.length; e3++) {
        let t3 = i2[e3]._zod.run({ value: a2[e3], issues: [] }, n2);
        t3 instanceof Promise ? o2.push(t3.then((t4) => {
          l2[e3] = t4;
        })) : l2[e3] = t3;
      }
      if (t2.rest) {
        let e3 = i2.length - 1;
        for (let s3 of a2.slice(i2.length)) {
          e3++;
          let i3 = t2.rest._zod.run({ value: s3, issues: [] }, n2);
          i3 instanceof Promise ? o2.push(i3.then((t3) => eg(t3, r2, e3))) : eg(i3, r2, e3);
        }
      }
      return o2.length ? Promise.all(o2).then(() => e_(l2, r2, i2, a2, u2)) : e_(l2, r2, i2, a2, u2);
    };
  });
  function ev(e2, t2) {
    for (let i2 = e2.length - 1; i2 >= 0; i2--) if ("optional" !== e2[i2]._zod[t2]) return i2 + 1;
    return 0;
  }
  function eg(e2, t2, i2) {
    e2.issues.length && t2.issues.push(...o.prefixIssues(i2, e2.issues)), t2.value[i2] = e2.value;
  }
  function e_(e2, t2, i2, r2, n2) {
    for (let a2 = 0; a2 < i2.length; a2++) {
      let i3 = e2[a2], s2 = a2 < r2.length;
      if (i3.issues.length) {
        if (!s2 && a2 >= n2) {
          t2.value.length = a2;
          break;
        }
        t2.issues.push(...o.prefixIssues(a2, i3.issues));
      }
      t2.value[a2] = i3.value;
    }
    for (let e3 = t2.value.length - 1; e3 >= r2.length; e3--) if ("optional" === i2[e3]._zod.optout && void 0 === t2.value[e3]) t2.value.length = e3;
    else break;
    return t2;
  }
  let e$ = i.$constructor("$ZodRecord", (e2, t2) => {
    d.init(e2, t2), e2._zod.parse = (r2, n2) => {
      let s2 = r2.value;
      if (!o.isPlainObject(s2)) return r2.issues.push({ expected: "record", code: "invalid_type", input: s2, inst: e2 }), r2;
      let u2 = [], l2 = t2.keyType._zod.values;
      if (l2) {
        let a2;
        r2.value = {};
        let d2 = /* @__PURE__ */ new Set();
        for (let a3 of l2) if ("string" == typeof a3 || "number" == typeof a3 || "symbol" == typeof a3) {
          d2.add("number" == typeof a3 ? a3.toString() : a3);
          let l3 = t2.keyType._zod.run({ value: a3, issues: [] }, n2);
          if (l3 instanceof Promise) throw Error("Async schemas not supported in object keys currently");
          if (l3.issues.length) {
            r2.issues.push({ code: "invalid_key", origin: "record", issues: l3.issues.map((e3) => o.finalizeIssue(e3, n2, i.config())), input: a3, path: [a3], inst: e2 });
            continue;
          }
          let c2 = l3.value, m2 = t2.valueType._zod.run({ value: s2[a3], issues: [] }, n2);
          m2 instanceof Promise ? u2.push(m2.then((e3) => {
            e3.issues.length && r2.issues.push(...o.prefixIssues(a3, e3.issues)), r2.value[c2] = e3.value;
          })) : (m2.issues.length && r2.issues.push(...o.prefixIssues(a3, m2.issues)), r2.value[c2] = m2.value);
        }
        for (let e3 in s2) d2.has(e3) || (a2 = a2 ?? []).push(e3);
        a2 && a2.length > 0 && r2.issues.push({ code: "unrecognized_keys", input: s2, inst: e2, keys: a2 });
      } else for (let l3 of (r2.value = {}, Reflect.ownKeys(s2))) {
        if ("__proto__" === l3 || !Object.prototype.propertyIsEnumerable.call(s2, l3)) continue;
        let d2 = t2.keyType._zod.run({ value: l3, issues: [] }, n2);
        if (d2 instanceof Promise) throw Error("Async schemas not supported in object keys currently");
        if ("string" == typeof l3 && a.number.test(l3) && d2.issues.length) {
          let e3 = t2.keyType._zod.run({ value: Number(l3), issues: [] }, n2);
          if (e3 instanceof Promise) throw Error("Async schemas not supported in object keys currently");
          0 === e3.issues.length && (d2 = e3);
        }
        if (d2.issues.length) {
          "loose" === t2.mode ? r2.value[l3] = s2[l3] : r2.issues.push({ code: "invalid_key", origin: "record", issues: d2.issues.map((e3) => o.finalizeIssue(e3, n2, i.config())), input: l3, path: [l3], inst: e2 });
          continue;
        }
        let c2 = t2.valueType._zod.run({ value: s2[l3], issues: [] }, n2);
        c2 instanceof Promise ? u2.push(c2.then((e3) => {
          e3.issues.length && r2.issues.push(...o.prefixIssues(l3, e3.issues)), r2.value[d2.value] = e3.value;
        })) : (c2.issues.length && r2.issues.push(...o.prefixIssues(l3, c2.issues)), r2.value[d2.value] = c2.value);
      }
      return u2.length ? Promise.all(u2).then(() => r2) : r2;
    };
  }), ey = i.$constructor("$ZodMap", (e2, t2) => {
    d.init(e2, t2), e2._zod.parse = (i2, r2) => {
      let n2 = i2.value;
      if (!(n2 instanceof Map)) return i2.issues.push({ expected: "map", code: "invalid_type", input: n2, inst: e2 }), i2;
      let a2 = [];
      for (let [o2, s2] of (i2.value = /* @__PURE__ */ new Map(), n2)) {
        let u2 = t2.keyType._zod.run({ value: o2, issues: [] }, r2), l2 = t2.valueType._zod.run({ value: s2, issues: [] }, r2);
        u2 instanceof Promise || l2 instanceof Promise ? a2.push(Promise.all([u2, l2]).then(([t3, a3]) => {
          eh(t3, a3, i2, o2, n2, e2, r2);
        })) : eh(u2, l2, i2, o2, n2, e2, r2);
      }
      return a2.length ? Promise.all(a2).then(() => i2) : i2;
    };
  });
  function eh(e2, t2, r2, n2, a2, s2, u2) {
    e2.issues.length && (o.propertyKeyTypes.has(typeof n2) ? r2.issues.push(...o.prefixIssues(n2, e2.issues)) : r2.issues.push({ code: "invalid_key", origin: "map", input: a2, inst: s2, issues: e2.issues.map((e3) => o.finalizeIssue(e3, u2, i.config())) })), t2.issues.length && (o.propertyKeyTypes.has(typeof n2) ? r2.issues.push(...o.prefixIssues(n2, t2.issues)) : r2.issues.push({ origin: "map", code: "invalid_element", input: a2, inst: s2, key: n2, issues: t2.issues.map((e3) => o.finalizeIssue(e3, u2, i.config())) })), r2.value.set(e2.value, t2.value);
  }
  let eb = i.$constructor("$ZodSet", (e2, t2) => {
    d.init(e2, t2), e2._zod.parse = (i2, r2) => {
      let n2 = i2.value;
      if (!(n2 instanceof Set)) return i2.issues.push({ input: n2, inst: e2, expected: "set", code: "invalid_type" }), i2;
      let a2 = [];
      for (let e3 of (i2.value = /* @__PURE__ */ new Set(), n2)) {
        let n3 = t2.valueType._zod.run({ value: e3, issues: [] }, r2);
        n3 instanceof Promise ? a2.push(n3.then((e4) => ex(e4, i2))) : ex(n3, i2);
      }
      return a2.length ? Promise.all(a2).then(() => i2) : i2;
    };
  });
  function ex(e2, t2) {
    e2.issues.length && t2.issues.push(...e2.issues), t2.value.add(e2.value);
  }
  let ek = i.$constructor("$ZodEnum", (e2, t2) => {
    d.init(e2, t2);
    let i2 = o.getEnumValues(t2.entries), r2 = new Set(i2);
    e2._zod.values = r2, e2._zod.pattern = RegExp(`^(${i2.filter((e3) => o.propertyKeyTypes.has(typeof e3)).map((e3) => "string" == typeof e3 ? o.escapeRegex(e3) : e3.toString()).join("|")})$`), e2._zod.parse = (t3, n2) => {
      let a2 = t3.value;
      return r2.has(a2) || t3.issues.push({ code: "invalid_value", values: i2, input: a2, inst: e2 }), t3;
    };
  }), ew = i.$constructor("$ZodLiteral", (e2, t2) => {
    if (d.init(e2, t2), 0 === t2.values.length) throw Error("Cannot create literal schema with no valid values");
    let i2 = new Set(t2.values);
    e2._zod.values = i2, e2._zod.pattern = RegExp(`^(${t2.values.map((e3) => "string" == typeof e3 ? o.escapeRegex(e3) : e3 ? o.escapeRegex(e3.toString()) : String(e3)).join("|")})$`), e2._zod.parse = (r2, n2) => {
      let a2 = r2.value;
      return i2.has(a2) || r2.issues.push({ code: "invalid_value", values: t2.values, input: a2, inst: e2 }), r2;
    };
  }), eI = i.$constructor("$ZodFile", (e2, t2) => {
    d.init(e2, t2), e2._zod.parse = (t3, i2) => {
      let r2 = t3.value;
      return r2 instanceof File || t3.issues.push({ expected: "file", code: "invalid_type", input: r2, inst: e2 }), t3;
    };
  }), eZ = i.$constructor("$ZodTransform", (e2, t2) => {
    d.init(e2, t2), e2._zod.optin = "optional", e2._zod.parse = (r2, n2) => {
      if ("backward" === n2.direction) throw new i.$ZodEncodeError(e2.constructor.name);
      let a2 = t2.transform(r2.value, r2);
      if (n2.async) return (a2 instanceof Promise ? a2 : Promise.resolve(a2)).then((e3) => (r2.value = e3, r2.fallback = true, r2));
      if (a2 instanceof Promise) throw new i.$ZodAsyncError();
      return r2.value = a2, r2.fallback = true, r2;
    };
  });
  function ez(e2, t2) {
    return void 0 === t2 && (e2.issues.length || e2.fallback) ? { issues: [], value: void 0 } : e2;
  }
  let eS = i.$constructor("$ZodOptional", (e2, t2) => {
    d.init(e2, t2), e2._zod.optin = "optional", e2._zod.optout = "optional", o.defineLazy(e2._zod, "values", () => t2.innerType._zod.values ? /* @__PURE__ */ new Set([...t2.innerType._zod.values, void 0]) : void 0), o.defineLazy(e2._zod, "pattern", () => {
      let e3 = t2.innerType._zod.pattern;
      return e3 ? RegExp(`^(${o.cleanRegex(e3.source)})?$`) : void 0;
    }), e2._zod.parse = (e3, i2) => {
      if ("optional" === t2.innerType._zod.optin) {
        let r2 = e3.value, n2 = t2.innerType._zod.run(e3, i2);
        return n2 instanceof Promise ? n2.then((e4) => ez(e4, r2)) : ez(n2, r2);
      }
      return void 0 === e3.value ? e3 : t2.innerType._zod.run(e3, i2);
    };
  }), eP = i.$constructor("$ZodExactOptional", (e2, t2) => {
    eS.init(e2, t2), o.defineLazy(e2._zod, "values", () => t2.innerType._zod.values), o.defineLazy(e2._zod, "pattern", () => t2.innerType._zod.pattern), e2._zod.parse = (e3, i2) => t2.innerType._zod.run(e3, i2);
  }), eE = i.$constructor("$ZodNullable", (e2, t2) => {
    d.init(e2, t2), o.defineLazy(e2._zod, "optin", () => t2.innerType._zod.optin), o.defineLazy(e2._zod, "optout", () => t2.innerType._zod.optout), o.defineLazy(e2._zod, "pattern", () => {
      let e3 = t2.innerType._zod.pattern;
      return e3 ? RegExp(`^(${o.cleanRegex(e3.source)}|null)$`) : void 0;
    }), o.defineLazy(e2._zod, "values", () => t2.innerType._zod.values ? /* @__PURE__ */ new Set([...t2.innerType._zod.values, null]) : void 0), e2._zod.parse = (e3, i2) => null === e3.value ? e3 : t2.innerType._zod.run(e3, i2);
  }), eM = i.$constructor("$ZodDefault", (e2, t2) => {
    d.init(e2, t2), e2._zod.optin = "optional", o.defineLazy(e2._zod, "values", () => t2.innerType._zod.values), e2._zod.parse = (e3, i2) => {
      if ("backward" === i2.direction) return t2.innerType._zod.run(e3, i2);
      if (void 0 === e3.value) return e3.value = t2.defaultValue, e3;
      let r2 = t2.innerType._zod.run(e3, i2);
      return r2 instanceof Promise ? r2.then((e4) => eO(e4, t2)) : eO(r2, t2);
    };
  });
  function eO(e2, t2) {
    return void 0 === e2.value && (e2.value = t2.defaultValue), e2;
  }
  let eU = i.$constructor("$ZodPrefault", (e2, t2) => {
    d.init(e2, t2), e2._zod.optin = "optional", o.defineLazy(e2._zod, "values", () => t2.innerType._zod.values), e2._zod.parse = (e3, i2) => ("backward" === i2.direction || void 0 === e3.value && (e3.value = t2.defaultValue), t2.innerType._zod.run(e3, i2));
  }), ej = i.$constructor("$ZodNonOptional", (e2, t2) => {
    d.init(e2, t2), o.defineLazy(e2._zod, "values", () => {
      let e3 = t2.innerType._zod.values;
      return e3 ? new Set([...e3].filter((e4) => void 0 !== e4)) : void 0;
    }), e2._zod.parse = (i2, r2) => {
      let n2 = t2.innerType._zod.run(i2, r2);
      return n2 instanceof Promise ? n2.then((t3) => eD(t3, e2)) : eD(n2, e2);
    };
  });
  function eD(e2, t2) {
    return e2.issues.length || void 0 !== e2.value || e2.issues.push({ code: "invalid_type", expected: "nonoptional", input: e2.value, inst: t2 }), e2;
  }
  let eN = i.$constructor("$ZodSuccess", (e2, t2) => {
    d.init(e2, t2), e2._zod.parse = (e3, r2) => {
      if ("backward" === r2.direction) throw new i.$ZodEncodeError("ZodSuccess");
      let n2 = t2.innerType._zod.run(e3, r2);
      return n2 instanceof Promise ? n2.then((t3) => (e3.value = 0 === t3.issues.length, e3)) : (e3.value = 0 === n2.issues.length, e3);
    };
  }), eT = i.$constructor("$ZodCatch", (e2, t2) => {
    d.init(e2, t2), e2._zod.optin = "optional", o.defineLazy(e2._zod, "optout", () => t2.innerType._zod.optout), o.defineLazy(e2._zod, "values", () => t2.innerType._zod.values), e2._zod.parse = (e3, r2) => {
      if ("backward" === r2.direction) return t2.innerType._zod.run(e3, r2);
      let n2 = t2.innerType._zod.run(e3, r2);
      return n2 instanceof Promise ? n2.then((n3) => (e3.value = n3.value, n3.issues.length && (e3.value = t2.catchValue({ ...e3, error: { issues: n3.issues.map((e4) => o.finalizeIssue(e4, r2, i.config())) }, input: e3.value }), e3.issues = [], e3.fallback = true), e3)) : (e3.value = n2.value, n2.issues.length && (e3.value = t2.catchValue({ ...e3, error: { issues: n2.issues.map((e4) => o.finalizeIssue(e4, r2, i.config())) }, input: e3.value }), e3.issues = [], e3.fallback = true), e3);
    };
  }), eA = i.$constructor("$ZodNaN", (e2, t2) => {
    d.init(e2, t2), e2._zod.parse = (t3, i2) => ("number" == typeof t3.value && Number.isNaN(t3.value) || t3.issues.push({ input: t3.value, inst: e2, expected: "nan", code: "invalid_type" }), t3);
  }), eL = i.$constructor("$ZodPipe", (e2, t2) => {
    d.init(e2, t2), o.defineLazy(e2._zod, "values", () => t2.in._zod.values), o.defineLazy(e2._zod, "optin", () => t2.in._zod.optin), o.defineLazy(e2._zod, "optout", () => t2.out._zod.optout), o.defineLazy(e2._zod, "propValues", () => t2.in._zod.propValues), e2._zod.parse = (e3, i2) => {
      if ("backward" === i2.direction) {
        let r3 = t2.out._zod.run(e3, i2);
        return r3 instanceof Promise ? r3.then((e4) => eC(e4, t2.in, i2)) : eC(r3, t2.in, i2);
      }
      let r2 = t2.in._zod.run(e3, i2);
      return r2 instanceof Promise ? r2.then((e4) => eC(e4, t2.out, i2)) : eC(r2, t2.out, i2);
    };
  });
  function eC(e2, t2, i2) {
    return e2.issues.length ? (e2.aborted = true, e2) : t2._zod.run({ value: e2.value, issues: e2.issues, fallback: e2.fallback }, i2);
  }
  let eR = i.$constructor("$ZodCodec", (e2, t2) => {
    d.init(e2, t2), o.defineLazy(e2._zod, "values", () => t2.in._zod.values), o.defineLazy(e2._zod, "optin", () => t2.in._zod.optin), o.defineLazy(e2._zod, "optout", () => t2.out._zod.optout), o.defineLazy(e2._zod, "propValues", () => t2.in._zod.propValues), e2._zod.parse = (e3, i2) => {
      if ("forward" === (i2.direction || "forward")) {
        let r2 = t2.in._zod.run(e3, i2);
        return r2 instanceof Promise ? r2.then((e4) => eB(e4, t2, i2)) : eB(r2, t2, i2);
      }
      {
        let r2 = t2.out._zod.run(e3, i2);
        return r2 instanceof Promise ? r2.then((e4) => eB(e4, t2, i2)) : eB(r2, t2, i2);
      }
    };
  });
  function eB(e2, t2, i2) {
    if (e2.issues.length) return e2.aborted = true, e2;
    if ("forward" === (i2.direction || "forward")) {
      let r2 = t2.transform(e2.value, e2);
      return r2 instanceof Promise ? r2.then((r3) => eJ(e2, r3, t2.out, i2)) : eJ(e2, r2, t2.out, i2);
    }
    {
      let r2 = t2.reverseTransform(e2.value, e2);
      return r2 instanceof Promise ? r2.then((r3) => eJ(e2, r3, t2.in, i2)) : eJ(e2, r2, t2.in, i2);
    }
  }
  function eJ(e2, t2, i2, r2) {
    return e2.issues.length ? (e2.aborted = true, e2) : i2._zod.run({ value: t2, issues: e2.issues }, r2);
  }
  let eV = i.$constructor("$ZodPreprocess", (e2, t2) => {
    eL.init(e2, t2);
  }), eK = i.$constructor("$ZodReadonly", (e2, t2) => {
    d.init(e2, t2), o.defineLazy(e2._zod, "propValues", () => t2.innerType._zod.propValues), o.defineLazy(e2._zod, "values", () => t2.innerType._zod.values), o.defineLazy(e2._zod, "optin", () => t2.innerType?._zod?.optin), o.defineLazy(e2._zod, "optout", () => t2.innerType?._zod?.optout), e2._zod.parse = (e3, i2) => {
      if ("backward" === i2.direction) return t2.innerType._zod.run(e3, i2);
      let r2 = t2.innerType._zod.run(e3, i2);
      return r2 instanceof Promise ? r2.then(eF) : eF(r2);
    };
  });
  function eF(e2) {
    return e2.value = Object.freeze(e2.value), e2;
  }
  let eG = i.$constructor("$ZodTemplateLiteral", (e2, t2) => {
    d.init(e2, t2);
    let i2 = [];
    for (let e3 of t2.parts) if ("object" == typeof e3 && null !== e3) {
      if (!e3._zod.pattern) throw Error(`Invalid template literal part, no pattern found: ${[...e3._zod.traits].shift()}`);
      let t3 = e3._zod.pattern instanceof RegExp ? e3._zod.pattern.source : e3._zod.pattern;
      if (!t3) throw Error(`Invalid template literal part: ${e3._zod.traits}`);
      let r2 = +!!t3.startsWith("^"), n2 = t3.endsWith("$") ? t3.length - 1 : t3.length;
      i2.push(t3.slice(r2, n2));
    } else if (null === e3 || o.primitiveTypes.has(typeof e3)) i2.push(o.escapeRegex(`${e3}`));
    else throw Error(`Invalid template literal part: ${e3}`);
    e2._zod.pattern = RegExp(`^${i2.join("")}$`), e2._zod.parse = (i3, r2) => ("string" != typeof i3.value ? i3.issues.push({ input: i3.value, inst: e2, expected: "string", code: "invalid_type" }) : (e2._zod.pattern.lastIndex = 0, e2._zod.pattern.test(i3.value) || i3.issues.push({ input: i3.value, inst: e2, code: "invalid_format", format: t2.format ?? "template_literal", pattern: e2._zod.pattern.source })), i3);
  }), eW = i.$constructor("$ZodFunction", (e2, t2) => (d.init(e2, t2), e2._def = t2, e2._zod.def = t2, e2.implement = (t3) => {
    if ("function" != typeof t3) throw Error("implement() must be called with a function");
    return function(...i2) {
      let r2 = Reflect.apply(t3, this, e2._def.input ? (0, n.parse)(e2._def.input, i2) : i2);
      return e2._def.output ? (0, n.parse)(e2._def.output, r2) : r2;
    };
  }, e2.implementAsync = (t3) => {
    if ("function" != typeof t3) throw Error("implementAsync() must be called with a function");
    return async function(...i2) {
      let r2 = e2._def.input ? await (0, n.parseAsync)(e2._def.input, i2) : i2, a2 = await Reflect.apply(t3, this, r2);
      return e2._def.output ? await (0, n.parseAsync)(e2._def.output, a2) : a2;
    };
  }, e2._zod.parse = (t3, i2) => ("function" != typeof t3.value ? t3.issues.push({ code: "invalid_type", expected: "function", input: t3.value, inst: e2 }) : e2._def.output && "promise" === e2._def.output._zod.def.type ? t3.value = e2.implementAsync(t3.value) : t3.value = e2.implement(t3.value), t3), e2.input = (...t3) => {
    let i2 = e2.constructor;
    return new i2(Array.isArray(t3[0]) ? { type: "function", input: new ep({ type: "tuple", items: t3[0], rest: t3[1] }), output: e2._def.output } : { type: "function", input: t3[0], output: e2._def.output });
  }, e2.output = (t3) => new e2.constructor({ type: "function", input: e2._def.input, output: t3 }), e2)), eX = i.$constructor("$ZodPromise", (e2, t2) => {
    d.init(e2, t2), e2._zod.parse = (e3, i2) => Promise.resolve(e3.value).then((e4) => t2.innerType._zod.run({ value: e4, issues: [] }, i2));
  }), eq = i.$constructor("$ZodLazy", (e2, t2) => {
    d.init(e2, t2), o.defineLazy(e2._zod, "innerType", () => (t2._cachedInner || (t2._cachedInner = t2.getter()), t2._cachedInner)), o.defineLazy(e2._zod, "pattern", () => e2._zod.innerType?._zod?.pattern), o.defineLazy(e2._zod, "propValues", () => e2._zod.innerType?._zod?.propValues), o.defineLazy(e2._zod, "optin", () => e2._zod.innerType?._zod?.optin ?? void 0), o.defineLazy(e2._zod, "optout", () => e2._zod.innerType?._zod?.optout ?? void 0), e2._zod.parse = (t3, i2) => e2._zod.innerType._zod.run(t3, i2);
  }), eY = i.$constructor("$ZodCustom", (e2, i2) => {
    t.$ZodCheck.init(e2, i2), d.init(e2, i2), e2._zod.parse = (e3, t2) => e3, e2._zod.check = (t2) => {
      let r2 = t2.value, n2 = i2.fn(r2);
      if (n2 instanceof Promise) return n2.then((i3) => eH(i3, t2, r2, e2));
      eH(n2, t2, r2, e2);
    };
  });
  function eH(e2, t2, i2, r2) {
    if (!e2) {
      let e3 = { code: "custom", input: i2, inst: r2, path: [...r2._zod.def.path ?? []], continue: !r2._zod.def.abort };
      r2._zod.def.params && (e3.params = r2._zod.def.params), t2.issues.push(o.issue(e3));
    }
  }
  e.s(["$ZodAny", 0, X, "$ZodArray", 0, et, "$ZodBase64", 0, j, "$ZodBase64URL", 0, N, "$ZodBigInt", 0, V, "$ZodBigIntFormat", 0, K, "$ZodBoolean", 0, J, "$ZodCIDRv4", 0, M, "$ZodCIDRv6", 0, O, "$ZodCUID", 0, y, "$ZodCUID2", 0, h, "$ZodCatch", 0, eT, "$ZodCodec", 0, eR, "$ZodCustom", 0, eY, "$ZodCustomStringFormat", 0, C, "$ZodDate", 0, Q, "$ZodDefault", 0, eM, "$ZodDiscriminatedUnion", 0, ec, "$ZodE164", 0, T, "$ZodEmail", 0, v, "$ZodEmoji", 0, _, "$ZodEnum", 0, ek, "$ZodExactOptional", 0, eP, "$ZodFile", 0, eI, "$ZodFunction", 0, eW, "$ZodGUID", 0, f, "$ZodIPv4", 0, S, "$ZodIPv6", 0, P, "$ZodISODate", 0, I, "$ZodISODateTime", 0, w, "$ZodISODuration", 0, z, "$ZodISOTime", 0, Z, "$ZodIntersection", 0, em, "$ZodJWT", 0, L, "$ZodKSUID", 0, k, "$ZodLazy", 0, eq, "$ZodLiteral", 0, ew, "$ZodMAC", 0, E, "$ZodMap", 0, ey, "$ZodNaN", 0, eA, "$ZodNanoID", 0, $, "$ZodNever", 0, Y, "$ZodNonOptional", 0, ej, "$ZodNull", 0, W, "$ZodNullable", 0, eE, "$ZodNumber", 0, R, "$ZodNumberFormat", 0, B, "$ZodObject", 0, ea, "$ZodObjectJIT", 0, eo, "$ZodOptional", 0, eS, "$ZodPipe", 0, eL, "$ZodPrefault", 0, eU, "$ZodPreprocess", 0, eV, "$ZodPromise", 0, eX, "$ZodReadonly", 0, eK, "$ZodRecord", 0, e$, "$ZodSet", 0, eb, "$ZodString", 0, c, "$ZodStringFormat", 0, m, "$ZodSuccess", 0, eN, "$ZodSymbol", 0, F, "$ZodTemplateLiteral", 0, eG, "$ZodTransform", 0, eZ, "$ZodTuple", 0, ep, "$ZodType", 0, d, "$ZodULID", 0, b, "$ZodURL", 0, g, "$ZodUUID", 0, p, "$ZodUndefined", 0, G, "$ZodUnion", 0, eu, "$ZodUnknown", 0, q, "$ZodVoid", 0, H, "$ZodXID", 0, x, "$ZodXor", 0, ed, "isValidBase64", 0, U, "isValidBase64URL", 0, D, "isValidJWT", 0, A], 383197);
}, 791768, (e) => {
  "use strict";
  var t = e.i(317136);
  e.i(784738);
  var i = e.i(70156), r = e.i(817422);
  try {
    var n = window;
    n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[new n.Error().stack] = Object.assign({}, n._sentryModuleMetadata[new n.Error().stack], { "_sentryBundlerPluginAppKey:attio/polaris": true });
  } catch (e2) {
  }
  let a = (0, t.createEnv)({ client: { NEXT_PUBLIC_COOKIE_DECISION_KEY: r.z.string().min(1), NEXT_PUBLIC_ENV: r.z.enum(["development", "staging", "production"]), NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID: r.z.string().optional(), NEXT_PUBLIC_INTERCOM_APP_ID: r.z.string().min(1), NEXT_PUBLIC_IS_PRODUCTION: r.z.enum(["production", "staging", "development"]).optional().transform((e2) => "production" === e2), NEXT_PUBLIC_MIXPANEL_TOKEN: r.z.string().optional(), NEXT_PUBLIC_POLARIS_ALGOLIA_APPLICATION_ID: r.z.string().min(1), NEXT_PUBLIC_POLARIS_ALGOLIA_APPS_INDEX_NAME: r.z.string().min(1), NEXT_PUBLIC_POLARIS_ALGOLIA_INDEX_NAME: r.z.string().min(1), NEXT_PUBLIC_POLARIS_API_KEY_SEARCH: r.z.string().min(1), NEXT_PUBLIC_RECAPTCHA_SITEKEY: r.z.string().min(1), NEXT_PUBLIC_SENTRY_DSN: r.z.string().optional() }, experimental__runtimeEnv: { NEXT_PUBLIC_COOKIE_DECISION_KEY: "attio-cookies-consent", NEXT_PUBLIC_ENV: "production", NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID: "GTM-MDPGXCK", NEXT_PUBLIC_INTERCOM_APP_ID: "cqp3eh0z", NEXT_PUBLIC_IS_PRODUCTION: "production", NEXT_PUBLIC_MIXPANEL_TOKEN: "947e6010d91c7a8684887289a58582cc", NEXT_PUBLIC_POLARIS_ALGOLIA_APPLICATION_ID: "WMF1W6G3L8", NEXT_PUBLIC_POLARIS_ALGOLIA_APPS_INDEX_NAME: "polaris_apps_index", NEXT_PUBLIC_POLARIS_ALGOLIA_INDEX_NAME: "polaris_help_index", NEXT_PUBLIC_POLARIS_API_KEY_SEARCH: "7478ee6e16bc2ee5b95194bb90896226", NEXT_PUBLIC_RECAPTCHA_SITEKEY: "6LclumYsAAAAAEDZPKR5FkJS_zFx9hCaLy2Lbw0C", NEXT_PUBLIC_SENTRY_DSN: "https://afceb9e6ddac6219e4bf7c3e2fc69c53@o394581.ingest.us.sentry.io/4505793402896384" }, extends: [(0, i.vercel)()], server: { ANALYZE: r.z.string().optional().transform((e2) => "true" === e2), ASHBY_API_KEY: r.z.string().min(1), ATTIO_ACCESS_TOKEN: r.z.string().min(1), ATTIO_SALES_LIST_ID: r.z.string().min(1), ATTIO_STARTUPS_LIST_ID: r.z.string().min(1), BASE_URL: r.z.url(), BLOB_BASE_URL: r.z.url(), BLOB_READ_WRITE_TOKEN: r.z.string().min(1), CIRCLE_COMMUNITY_ADMIN_API_KEY: r.z.string().min(1), CRON_SECRET: r.z.string().optional(), CUSTOMER_IO_API_KEY: r.z.string().min(1), CUSTOMER_IO_SITE_ID: r.z.string().min(1), DEPLOYMENT_URL: r.z.string().optional(), GITHUB_READ_TOKEN: r.z.string().optional(), LINEAR_VDP_LABEL_ID: r.z.string().min(1), LINEAR_VDP_TEAM_ID: r.z.string().min(1), LINEAR_VDP_TOKEN: r.z.string().min(1), NODE_ENV: r.z.enum(["development", "test", "production"]), POLARIS_ALGOLIA_API_KEY_ADMIN: r.z.string().optional(), RECAPTCHA_SECRET_KEY: r.z.string().min(1), SENTRY_AUTH_TOKEN: r.z.string().optional(), SLACK_TWITTER_COMPETITOR_FEED_CHANNEL_ID: r.z.string().min(1), SLACK_TWITTER_FEED_CHANNEL_ID: r.z.string().min(1), SLACK_TWITTER_FEED_TOKEN: r.z.string().min(1), STORYBLOK_ACCESS_TOKEN: r.z.string().min(1), STORYBLOK_CAREERS_PIXELS_FOLDER_ID: r.z.string().min(1), STORYBLOK_EVENTS_CHANNEL_ID: r.z.string().min(1), STORYBLOK_EVENTS_TOKEN: r.z.string().min(1), STORYBLOK_OAUTH_TOKEN: r.z.string().optional(), STORYBLOK_SPACE_ID: r.z.string().min(1), STORYBLOK_WEBHOOK_SECRET: r.z.string().optional(), TWITTER_BEARER_TOKEN: r.z.string().min(1), TWITTER_USER_ID: r.z.string().min(1), WEBHOOK_SECRET: r.z.string().optional() } });
  e.s(["env", 0, a]);
}]);
