// Original Attio desktop hero excerpt. Reference only; its bundled React dependencies are not standalone.
// Source: https://attio.com/, source/reference/0y14chldcipxr.js, module 752153.
  let eD = [{ body: (e2) => (0, t.jsx)(D, { isActive: e2 }), id: "call", transformOrigin: "0% 100%", windowClassName: "top-[20px] right-[-64px] w-[136px] lg:top-[40px] lg:right-[-128px] lg:w-[30%] lg:max-w-[272px] xl:right-[-160px] 2xl:right-[-172px]" }, { body: (e2) => (0, t.jsx)(ef, { isActive: e2 }), id: "slack", transformOrigin: "100% 100%", windowClassName: "-top-[8px] left-[-64px] w-[134px] lg:-top-[16px] lg:left-[-128px] lg:w-[30%] lg:max-w-[268px] xl:left-[-160px] 2xl:left-[-172px]" }, { body: (e2) => (0, t.jsx)(eR, { isActive: e2 }), dark: true, id: "terminal", transformOrigin: "100% 0%", windowClassName: "bottom-[16px] left-[-48px] w-[150px] lg:bottom-[32px] lg:left-[-96px] lg:w-[33%] lg:max-w-[300px] xl:left-[-128px] 2xl:left-[-144px]" }], eQ = ["call", "slack", "attio", "terminal"], eZ = { duration: 0.6, ease: y }, eP = { duration: 0.5, ease: y }, eK = [0, 0.6], eU = ["terminal", "slack", "call"], eF = [500, 800], eW = (e2, [t2, a2]) => Math.min(1, Math.max(0, (e2 - t2) / (a2 - t2))), eY = (e2) => {
    let t2 = Math.round(2 * e2) / 2;
    return t2 <= 0.25 ? "none" : `blur(${t2}px)`;
  };
  function eG({ app: e2, constraintsRef: r2, isInteractive: n2, isLoopActive: o2, isRevealed: x2, onFocus: p2, scale: u2, zIndex: g2 }) {
    let h2 = (0, i.useMotionValue)(0), m2 = (0, i.useMotionValue)(3), C2 = (0, d.useTransform)(m2, eY);
    (0, c.useEffect)(() => {
      let t2 = { ...eZ, delay: x2 ? 0.2 * eU.indexOf(e2.id) : 0 }, r3 = (0, a.animate)(h2, +!!x2, t2), s2 = (0, a.animate)(m2, 3 * !x2, t2);
      return () => {
        r3.stop(), s2.stop();
      };
    }, [x2, h2, m2, e2.id]);
    let [f2, y2] = (0, c.useState)(true);
    (0, l.useMotionValueEvent)(h2, "change", (e3) => {
      y2(e3 < 1e-3);
    });
    let b2 = 1.2 + 0.15 * eU.indexOf(e2.id);
    return (0, t.jsx)(s.motion.div, { className: "pointer-events-none absolute inset-0", style: { zIndex: g2 }, initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { ...M, delay: b2 }, children: (0, t.jsx)(s.motion.div, { className: "absolute inset-0", style: { filter: C2, opacity: h2 }, children: (0, t.jsx)(es, { app: e2, constraintsRef: r2, isHidden: f2, isInteractive: n2, isLoopActive: o2 && !f2, onFocus: p2, scale: u2, transformOrigin: e2.transformOrigin, zIndex: g2 }) }) });
  }
  function eJ({ kicker: e2, title: r2, subtitle: x2 }) {
    let u2, g2 = (0, c.useRef)(null), h2 = (0, c.useRef)(null), C2 = (0, c.useRef)(null), f2 = (0, n.useInView)(g2, { margin: "0px" }), y2 = (u2 = (0, i.useMotionValue)(0), (0, c.useEffect)(() => {
      let e3 = g2.current;
      if (!e3) return;
      let t2 = 0, a2 = () => {
        t2 = 0;
        let a3 = e3.getBoundingClientRect(), r4 = a3.height - window.innerHeight;
        u2.set(r4 <= 0 ? 0 : Math.min(1, Math.max(0, -a3.top / r4)));
      }, r3 = () => {
        t2 || (t2 = requestAnimationFrame(a2));
      };
      return a2(), window.addEventListener("scroll", r3, { passive: true }), window.addEventListener("resize", r3, { passive: true }), () => {
        t2 && cancelAnimationFrame(t2), window.removeEventListener("scroll", r3), window.removeEventListener("resize", r3);
      };
    }, [g2, u2]), u2), j2 = (function(e3, t2, a2 = [0, 1]) {
      let [r3, s2] = a2, n2 = (0, i.useMotionValue)(r3);
      return (0, l.useMotionValueEvent)(e3, "change", (e4) => {
        let a3 = eW(e4, t2);
        n2.set(r3 + (s2 - r3) * a3);
      }), n2;
    })(y2, eK, [0.4, 0.7]), v2 = (0, i.useMotionValue)(E(0)), M2 = (0, i.useMotionValue)(_(0));
    (0, l.useMotionValueEvent)(y2, "change", (e3) => {
      v2.set(E(e3)), M2.set(_(e3));
    });
    let [N2, k2] = (0, c.useState)(false);
    (0, c.useEffect)(() => {
      let e3 = () => k2(window.scrollY >= 8);
      return e3(), window.addEventListener("scroll", e3, { passive: true }), () => window.removeEventListener("scroll", e3);
    }, []);
    let [R2, L2] = (0, c.useState)(false), B2 = (0, c.useRef)(false), V2 = (0, c.useRef)(0);
    (0, c.useEffect)(() => {
      N2 !== B2.current && (B2.current = N2, L2(true), window.clearTimeout(V2.current), V2.current = window.setTimeout(() => L2(false), 1300));
    }, [N2]), (0, c.useEffect)(() => () => window.clearTimeout(V2.current), []);
    let H2 = (0, i.useMotionValue)(1), O2 = (0, i.useMotionValue)(0), I2 = (0, d.useTransform)(O2, eY), z2 = (0, d.useTransform)(y2, (e3) => e3 >= 0.95 ? "hidden" : "visible");
    (0, c.useEffect)(() => {
      let e3 = (0, a.animate)(H2, +!N2, eP), t2 = (0, a.animate)(O2, 2.5 * !!N2, eP);
      return () => {
        e3.stop(), t2.stop();
      };
    }, [N2, H2, O2]);
    let T2 = (0, i.useMotionValue)(1);
    (0, c.useEffect)(() => {
      let e3 = 0, t2 = () => {
        let t3, a3;
        e3 = h2.current?.getBoundingClientRect().height ?? 0, t3 = 1 - (1 - eW(window.innerHeight, eF)) * 0.14, a3 = e3 > 0 ? Math.min(0.95 * t3, window.innerHeight / (1.5 * e3)) : 0.95 * t3, T2.set(N2 ? Math.min(a3, t3) : t3);
      };
      t2();
      let a2 = new ResizeObserver(t2);
      return h2.current && a2.observe(h2.current), window.addEventListener("resize", t2, { passive: true }), () => {
        a2.disconnect(), window.removeEventListener("resize", t2);
      };
    }, [N2, T2]);
    let D2 = (0, o.useSpring)(T2, { damping: 26, mass: 1, stiffness: 120 }), [Q2, Z2] = (0, c.useState)(false);
    (0, l.useMotionValueEvent)(y2, "change", (e3) => {
      Z2(e3 >= 0.1);
    });
    let [P2, K2] = (0, c.useState)(false), U2 = (0, c.useRef)(0), F2 = (0, c.useRef)(f2);
    F2.current = f2, (0, c.useEffect)(() => {
      let e3 = () => {
        F2.current && (K2(true), window.clearTimeout(U2.current), U2.current = window.setTimeout(() => K2(false), 160));
      };
      return window.addEventListener("scroll", e3, { passive: true }), () => {
        window.removeEventListener("scroll", e3), window.clearTimeout(U2.current);
      };
    }, []);
    let [W2, Y2] = (0, c.useState)(eQ), G2 = (e3) => Y2((t2) => t2[t2.length - 1] === e3 ? t2 : [...t2.filter((t3) => t3 !== e3), e3]), J2 = (e3) => W2.indexOf(e3) + 1;
    return (0, c.useEffect)(() => {
      if (N2) return;
      let e3 = window.setTimeout(() => Y2((e4) => e4 === eQ ? e4 : eQ), 700);
      return () => window.clearTimeout(e3);
    }, [N2]), (0, t.jsxs)("div", { ref: g2, className: "group/hero relative grid grid-cols-1 grid-rows-1", "data-hero-scrolling": P2 || R2 ? "" : void 0, children: [(0, t.jsxs)("div", { "aria-hidden": true, className: "pointer-events-none sticky top-(--site-header-height) z-0 col-start-1 row-start-1 h-[calc(100svh-var(--site-header-height))] self-start overflow-hidden", children: [(0, t.jsx)(p, { revealOpacity: j2 }), (0, t.jsx)(s.motion.div, { "aria-hidden": true, className: "absolute top-0 left-[-150%] h-[150%] w-[400%] origin-top will-change-transform", style: { backgroundImage: "radial-gradient(70% 106.6667% at 50% 0%, var(--color-primary-background) 32%, transparent 64%)", scaleX: v2, scaleY: M2 } })] }), (0, t.jsxs)("div", { className: "z-10 col-start-1 row-start-1 flex flex-col", children: [(0, t.jsxs)(s.motion.div, { style: { filter: I2, opacity: H2, pointerEvents: N2 ? "none" : "auto", visibility: z2, willChange: R2 ? "opacity, filter" : void 0 }, className: "sticky top-(--site-header-height) -mb-[min(calc(8px+20svh),calc(50svh-261px))] flex min-h-[clamp(320px,calc(40svh-var(--site-header-height)),520px)] flex-col items-center justify-center gap-6 px-6 pt-[max(96px,10svh)] text-center md:px-14 lg:mb-[max(min(calc(120px-20svh),calc(550px-53svh)),calc(max(389px,min(calc(82px+20vw),466px))-50svh))] lg:px-[58px]", children: [(0, t.jsxs)("div", { className: "flex flex-col items-center gap-9", children: [e2?.enabled && (0, t.jsx)(s.motion.div, { initial: b, animate: A, transition: { duration: 0.6, ease: w }, children: (0, t.jsx)(m, { kicker: e2 }) }), (0, t.jsx)(s.motion.h1, { style: { fontSize: "clamp(64px, calc(16px + 5.333svh), 80px)", letterSpacing: "clamp(-2.4px, calc(2.08px - 0.3733svh), -1.28px)" }, className: "text-balance font-display font-semibold text-primary-foreground leading-[0.95]", initial: b, animate: A, transition: { delay: 0.1, duration: 0.6, ease: w }, children: r2 })] }), (0, t.jsx)(s.motion.p, { className: "mt-3 max-w-[27em] text-balance font-medium text-[18px] text-accent-foreground leading-[1.3] tracking-[-0.18px]", initial: b, animate: A, transition: { delay: 0.2, duration: 0.6, ease: w }, children: x2 }), (0, t.jsxs)(eS.CtaContainer, { className: "w-auto", children: [(0, t.jsx)(s.motion.div, { initial: b, animate: A, transition: { delay: 0.30000000000000004, duration: 0.6, ease: w }, children: (0, t.jsx)(eH.CtaTalkToSales, { buttonSize: "sm", children: "Talk to sales" }) }), (0, t.jsx)(s.motion.div, { initial: b, animate: A, transition: { delay: 0.4, duration: 0.6, ease: w }, children: (0, t.jsx)(eV.CtaGetStarted, { buttonSize: "sm", children: "Start for free" }) })] })] }), (0, t.jsx)("div", { ref: C2, className: (0, S.cn)("sticky top-0 flex h-svh items-center justify-center overflow-visible pt-(--site-header-height) pb-20", { "pointer-events-none": !Q2 }), children: (0, t.jsxs)("div", { ref: h2, className: "relative w-2/3 max-w-[1440px] lg:w-3/4", children: [(0, t.jsx)(er, { constraintsRef: C2, isInteractive: Q2, onFocus: () => G2("attio"), scale: D2, zIndex: J2("attio") }), eD.map((e3) => (0, t.jsx)(eG, { app: e3, constraintsRef: C2, isInteractive: Q2, isLoopActive: f2, isRevealed: N2, onFocus: () => G2(e3.id), scale: D2, zIndex: J2(e3.id) }, e3.id))] }) })] })] });
  }
