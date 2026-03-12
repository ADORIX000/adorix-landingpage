(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/TypingText.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
;
;
const TypingText = ({ text, className, delay = 0, speed = 0.03, startDelay = 0, triggerOnce = true })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: className,
        children: text.split("").map((char, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                initial: {
                    opacity: 0
                },
                whileInView: {
                    opacity: 1
                },
                viewport: {
                    once: triggerOnce
                },
                transition: {
                    duration: 0.05,
                    delay: startDelay + delay + index * speed
                },
                children: char
            }, index, false, {
                fileName: "[project]/src/components/TypingText.jsx",
                lineNumber: 8,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/src/components/TypingText.jsx",
        lineNumber: 6,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = TypingText;
const __TURBOPACK__default__export__ = TypingText;
var _c;
__turbopack_context__.k.register(_c, "TypingText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/WorkflowAnimation.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WorkflowAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$audio$2d$lines$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AudioLines$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/audio-lines.js [app-client] (ecmascript) <export default as AudioLines>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.js [app-client] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scan$2d$face$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScanFace$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scan-face.js [app-client] (ecmascript) <export default as ScanFace>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/megaphone.js [app-client] (ecmascript) <export default as Megaphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-question-mark.js [app-client] (ecmascript) <export default as HelpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-client] (ecmascript) <export default as Code2>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
// Canvas Size - Increased for readability
const STAGE = {
    w: 850,
    h: 550
};
// Card Size - Increased from 60 to 72
const CARD = {
    w: 72,
    h: 72
};
/* --------------------------
   Nodes Configuration
   Shifted Right by +40px (Total +70px from base)
   Note: Since we increased CARD size, we might need slightly more breathing room, 
   but the current grid should hold thanks to large stage.
-------------------------- */ const nodes = {
    // Top Left Group
    TTS: {
        x: 115,
        y: 30,
        label: "TTS",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$audio$2d$lines$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AudioLines$3e$__["AudioLines"],
        color: "#10B981"
    },
    STT: {
        x: 215,
        y: 30,
        label: "STT",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"],
        color: "#0EA5E9"
    },
    // Top Right Group
    AGE: {
        x: 400,
        y: 30,
        label: "Age Detection",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scan$2d$face$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScanFace$3e$__["ScanFace"],
        color: "#EC4899"
    },
    GENDER: {
        x: 530,
        y: 30,
        label: "Gender Detection",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scan$2d$face$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScanFace$3e$__["ScanFace"],
        color: "#EC4899"
    },
    // Middle Row
    AI: {
        x: 160,
        y: 180,
        label: "AI Assistant",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"],
        color: "#8B5CF6"
    },
    KIOSK: {
        x: 440,
        y: 180,
        label: "KIOSK",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"],
        color: "#0D8A9E"
    },
    // Right Column
    COMP: {
        x: 620,
        y: 120,
        label: "Companies",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        color: "#3B82F6"
    },
    AD: {
        x: 620,
        y: 220,
        label: "Advertisement",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__["Megaphone"],
        color: "#F43F5E"
    },
    DEV: {
        x: 620,
        y: 400,
        label: "Developers",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"],
        color: "#6366F1"
    },
    // Bottom Area
    VISITOR: {
        x: 440,
        y: 330,
        label: "Visitor",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"],
        color: "#64748B"
    },
    QL: {
        x: 230,
        y: 330,
        label: "Questions",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"],
        color: "#F59E0B"
    },
    ATT: {
        x: 440,
        y: 450,
        label: "Attention Tracking",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
        color: "#14B8A6"
    }
};
/* --------------------------
   Helper Functions
-------------------------- */ function anchor(key, side = "center") {
    const n = nodes[key];
    const cx = n.x + CARD.w / 2;
    const cy = n.y + CARD.h / 2;
    const pad = 0;
    if (side === "left") return {
        x: n.x - pad,
        y: cy
    };
    if (side === "right") return {
        x: n.x + CARD.w + pad,
        y: cy
    };
    if (side === "top") return {
        x: cx,
        y: n.y - pad
    };
    if (side === "bottom") return {
        x: cx,
        y: n.y + CARD.h + pad
    };
    return {
        x: cx,
        y: cy
    };
}
/* Branch Path Builder */ function branchPath(start, ends, type) {
    let d = `M ${start.x} ${start.y}`;
    if (type === "fork-up") {
        const midY = (start.y + Math.max(...ends.map((e)=>e.y))) / 2;
        const minX = Math.min(...ends.map((e)=>e.x));
        const maxX = Math.max(...ends.map((e)=>e.x));
        d += ` V ${midY}`;
        d += ` M ${minX} ${midY} H ${maxX}`;
        ends.forEach((end)=>{
            d += ` M ${end.x} ${midY} V ${end.y}`;
        });
    } else if (type === "fork-right") {
        const midX = (start.x + Math.min(...ends.map((e)=>e.x))) / 2;
        const minY = Math.min(...ends.map((e)=>e.y));
        const maxY = Math.max(...ends.map((e)=>e.y));
        d += ` H ${midX}`;
        d += ` M ${midX} ${minY} V ${maxY}`;
        ends.forEach((end)=>{
            d += ` M ${midX} ${end.y} H ${end.x}`;
        });
    }
    return d;
}
/* --------------------------
   Components
-------------------------- */ const Card = ({ x, y, label, icon: Icon, color, delay = 0 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            scale: 0.8,
            y: 20
        },
        whileInView: {
            opacity: 1,
            scale: 1,
            y: 0
        },
        viewport: {
            once: true
        },
        whileHover: {
            y: -5,
            scale: 1.05,
            shadow: "0px 25px 50px -12px rgba(0,0,0,0.25)"
        },
        transition: {
            delay,
            duration: 0.5,
            type: "spring",
            stiffness: 200
        },
        className: "absolute flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg border border-gray-100 z-10 group cursor-pointer",
        style: {
            left: x,
            top: y,
            width: CARD.w,
            height: CARD.h
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center w-8 h-8 rounded-lg mb-1.5 transition-transform group-hover:scale-110",
                style: {
                    backgroundColor: `${color}15`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                    className: "w-5 h-5",
                    style: {
                        color: color
                    },
                    strokeWidth: 2.5
                }, void 0, false, {
                    fileName: "[project]/src/components/WorkflowAnimation.jsx",
                    lineNumber: 116,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/WorkflowAnimation.jsx",
                lineNumber: 112,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-[10px] font-bold text-gray-600 text-center leading-tight px-1 group-hover:text-gray-900 transition-colors",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/WorkflowAnimation.jsx",
                lineNumber: 118,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/WorkflowAnimation.jsx",
        lineNumber: 103,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = Card;
const AnimatedConnection = ({ d, color = "#CBD5E1", delay = 0 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: d,
                fill: "none",
                stroke: color,
                strokeWidth: "2.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                opacity: "0.2"
            }, void 0, false, {
                fileName: "[project]/src/components/WorkflowAnimation.jsx",
                lineNumber: 126,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                d: d,
                fill: "none",
                stroke: color,
                strokeWidth: "2.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                initial: {
                    pathLength: 0,
                    opacity: 0
                },
                whileInView: {
                    pathLength: 1,
                    opacity: 1
                },
                viewport: {
                    once: true
                },
                transition: {
                    duration: 1.5,
                    ease: "easeInOut",
                    delay
                }
            }, void 0, false, {
                fileName: "[project]/src/components/WorkflowAnimation.jsx",
                lineNumber: 135,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
_c1 = AnimatedConnection;
function WorkflowAnimation() {
    _s();
    const arrows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WorkflowAnimation.useMemo[arrows]": ()=>{
            const a = {
                "WorkflowAnimation.useMemo[arrows].a": (k, side)=>anchor(k, side)
            }["WorkflowAnimation.useMemo[arrows].a"];
            return [
                // 1. AI -> TTS / STT (Fork Up)
                {
                    d: branchPath(a("AI", "top"), [
                        a("TTS", "bottom"),
                        a("STT", "bottom")
                    ], "fork-up"),
                    delay: 0.5,
                    color: "#0EA5E9"
                },
                // 2. Kiosk -> Age / Gender (Fork Up)
                {
                    d: branchPath(a("KIOSK", "top"), [
                        a("AGE", "bottom"),
                        a("GENDER", "bottom")
                    ], "fork-up"),
                    delay: 0.7,
                    color: "#EC4899"
                },
                // 3. Kiosk -> Companies / Ads (Fork Right)
                {
                    d: branchPath(a("KIOSK", "right"), [
                        a("COMP", "left"),
                        a("AD", "left")
                    ], "fork-right"),
                    delay: 0.9,
                    color: "#F43F5E"
                },
                // 4. Companies -> Developers 
                {
                    d: `M ${a("COMP", "right").x} ${a("COMP", "right").y} H ${a("COMP", "right").x + 20} V ${a("DEV", "right").y} H ${a("DEV", "right").x}`,
                    delay: 1.1,
                    color: "#3B82F6"
                },
                // 5. Ad Connector
                {
                    d: `M ${a("AD", "right").x} ${a("AD", "right").y} H ${a("AD", "right").x + 20}`,
                    delay: 1.2,
                    color: "#3B82F6"
                },
                // 6. Visitor -> Questions (Left)
                {
                    d: `M ${a("VISITOR", "left").x} ${a("VISITOR", "left").y} H ${a("QL", "right").x}`,
                    delay: 1.3,
                    color: "#F59E0B"
                },
                // 7. Visitor -> Attention (Down)
                {
                    d: `M ${a("VISITOR", "bottom").x} ${a("VISITOR", "bottom").y} V ${a("ATT", "top").y}`,
                    delay: 1.4,
                    color: "#14B8A6"
                },
                // 8. Visitor -> Kiosk (Up)
                {
                    d: `M ${a("VISITOR", "top").x} ${a("VISITOR", "top").y} V ${a("KIOSK", "bottom").y}`,
                    delay: 1.5,
                    color: "#64748B"
                },
                // 9. AI -> Questions (Purple Path)
                {
                    d: `M ${a("AI", "bottom").x} ${a("AI", "bottom").y} V ${a("QL", "top").y - 20} H ${a("QL", "top").x} V ${a("QL", "top").y}`,
                    delay: 1.6,
                    color: "#8B5CF6"
                }
            ];
        }
    }["WorkflowAnimation.useMemo[arrows]"], []);
    // Dynamic height calculation based on scale to prevent whitespace
    // Standard height 550px. 
    // Mobile scale 0.6 -> Height ~330px
    // Tablet scale 0.8 -> Height ~440px
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full flex justify-center py-0 md:py-6 overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                width: STAGE.w,
                height: STAGE.h,
                // We use a CSS variable for scale, and we MUST adjust the container height 
                // via a wrapper or simple max-height approach in CSS to crop the empty space 
                // left by the scale() transform.
                transform: 'scale(var(--scale-factor, 1))',
                marginBottom: 'var(--margin-adjust, 0px)'
            },
            className: "jsx-d4fce8d471ea662d" + " " + "relative flex-shrink-0 origin-top transform transition-transform duration-300",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    id: "d4fce8d471ea662d",
                    children: "@media (width<=640px){.transform.jsx-d4fce8d471ea662d{--scale-factor:.55;--margin-adjust:-248px}}@media (width>=641px) and (width<=1024px){.transform.jsx-d4fce8d471ea662d{--scale-factor:.8;--margin-adjust:-110px}}"
                }, void 0, false, void 0, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        backgroundImage: "radial-gradient(#CBD5E1 1.5px, transparent 1.5px)",
                        backgroundSize: "24px 24px"
                    },
                    className: "jsx-d4fce8d471ea662d" + " " + "absolute inset-0 opacity-30"
                }, void 0, false, {
                    fileName: "[project]/src/components/WorkflowAnimation.jsx",
                    lineNumber: 243,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: `0 0 ${STAGE.w} ${STAGE.h}`,
                    className: "jsx-d4fce8d471ea662d" + " " + "absolute inset-0 w-full h-full pointer-events-none z-0",
                    children: arrows.map((arr, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedConnection, {
                            d: arr.d,
                            color: arr.color,
                            delay: arr.delay
                        }, i, false, {
                            fileName: "[project]/src/components/WorkflowAnimation.jsx",
                            lineNumber: 257,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/WorkflowAnimation.jsx",
                    lineNumber: 252,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-d4fce8d471ea662d" + " " + "relative w-full h-full",
                    children: Object.entries(nodes).map(([key, n], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                            ...n,
                            delay: i * 0.1
                        }, key, false, {
                            fileName: "[project]/src/components/WorkflowAnimation.jsx",
                            lineNumber: 264,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/WorkflowAnimation.jsx",
                    lineNumber: 262,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/WorkflowAnimation.jsx",
            lineNumber: 215,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/WorkflowAnimation.jsx",
        lineNumber: 214,
        columnNumber: 5
    }, this);
}
_s(WorkflowAnimation, "o7q5REV89Fvkhb1SMUFisjR6R+s=");
_c2 = WorkflowAnimation;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "AnimatedConnection");
__turbopack_context__.k.register(_c2, "WorkflowAnimation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/TechStack.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const Logos = {
    RaspberryPi: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 100 120",
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    stroke: "#BF1042",
                    strokeWidth: "2",
                    fill: "#C51A4A",
                    d: "M16 112c.5-5.5-2.2-7.5-6.5-12.2-2.3-2.6-3.7-5.4-3.5-7.7 0-.5.6-.2 1.2.6.4.7.7 1.2 2.1 2.2 4.4 3 6.6 4.6 13.9 10.9 9.3 8 20.3 8.3 27 8.3 6.7 0 17.6-.3 27-8.3 7.3-6.3 9.5-7.9 13.9-10.9 1.4-1 1.7-1.5 2.1-2.2.6-.8 1.2-1.1 1.2-.6.2 2.3-1.2 5.1-3.5 7.7-4.3 4.7-7 6.7-6.5 12.2 1 9.9 8.7 15.6 9.4 16.1 1.5.9 2.5.3 2.1-1.3-.8-3.4-1.3-3.6-1.5-4.1-1.5-3.3-1.8-8 .4-12.7 1.9-4 3.7-10.9 4-19 .5-13.6-7.8-21.6-11.8-25.2-1.7-1.5-2-2.1-1.7-4.8.2-1.2 1.3-4.1 2.4-7.8 1.1-3.6 1.8-5.3 1.8-5.8 0-.4-.3-1.4-.9-2.7-1.8-3.5-5.6-5.7-9.5-5.7-4.2 0-8.6 3.4-11 8.5l-.9 1.9c-.3.7-.7.9-1.3.4C63.2 47.7 57.7 45.4 50 45.4c-7.7 0-13.2 2.3-16.5 6.3-.6.5-1 .3-1.3-.4l-.9-1.9c-2.4-5.1-6.8-8.5-11-8.5-3.9 0-7.7 2.2-9.5 5.7-.6 1.3-.9 2.3-.9 2.7 0 .5.7 2.2 1.8 5.8 1.1 3.7 2.2 6.6 2.4 7.8.3 2.7 0 3.3-1.7 4.8-4 3.6-12.3 11.6-11.8 25.2.3 8.1 2.1 15 4 19 2.2 4.7 1.9 9.4.4 12.7-.2.5-.7.7-1.5 4.1-.4 1.6.6 2.2 2.1 1.3.7-.5 8.4-6.2 9.4-16.1z"
                }, void 0, false, {
                    fileName: "[project]/src/components/TechStack.jsx",
                    lineNumber: 8,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    stroke: "#6DB33F",
                    strokeWidth: "2",
                    fill: "#7CBD42",
                    d: "M78 18.2c-.4 5.9-4.8 15.3-10.4 17.6-1.5.6-2.5 1.1-3.6 2 4.2 17.5 1.1 28.5-8.4 29.5-9.3.9-19.1-8.7-19.1-8.7-2.6-3-5.2-3-7.8 0 0 0-9.8 9.6-19.1 8.7-9.5-1-12.6-12-8.4-29.5-1.1-.9-2.1-1.4-3.6-2-5.6-2.3-10-11.7-10.4-17.6-.8-11.4 7.9-15.7 7.9-15.7 3.3-1.5 7.4-1 10.4.9l.4.2c3.1 1.9 5.8 1.8 7.3.3.4-.4 1.1-1.1 2.2-2.3 3.6-3.8 10-3.3 12.1-.9l1.6 1.9c2 2.3 5 2.3 7 0l1.6-1.9c2.1-2.4 8.5-2.9 12.1.9 1.1 1.2 1.8 1.9 2.2 2.3 1.5 1.5 4.2 1.6 7.3-.3l.4-.2c3-1.9 7.1-2.4 10.4-.9 0 0 8.7 4.3 7.9 15.7z"
                }, void 0, false, {
                    fileName: "[project]/src/components/TechStack.jsx",
                    lineNumber: 9,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TechStack.jsx",
            lineNumber: 7,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)),
    Python: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 100 100",
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "py_a",
                            x1: "16",
                            y1: "17",
                            x2: "88",
                            y2: "82",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0",
                                    stopColor: "#3776AB"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TechStack.jsx",
                                    lineNumber: 16,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    stopColor: "#2F6690"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TechStack.jsx",
                                    lineNumber: 17,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/TechStack.jsx",
                            lineNumber: 15,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "py_b",
                            x1: "14",
                            y1: "16",
                            x2: "84",
                            y2: "86",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0",
                                    stopColor: "#FFD343"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TechStack.jsx",
                                    lineNumber: 20,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    stopColor: "#FFC331"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TechStack.jsx",
                                    lineNumber: 21,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/TechStack.jsx",
                            lineNumber: 19,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/TechStack.jsx",
                    lineNumber: 14,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "url(#py_a)",
                    d: "M49.7 10.7c-9.6 0-18.4 1-18.4 8v8.6H49v2.8H18.6c-4.4 0-8.3 3.5-8.3 8.3v22.4h17.2v-5c0-5.8 4.8-10.6 10.6-10.6h17v-8.6c0-6-8.5-7.9-15.4-7.9zm-6 5.8c1.7 0 3 1.4 3 3s-1.4 3-3 3-3-1.4-3-3 1.3-3 3-3z"
                }, void 0, false, {
                    fileName: "[project]/src/components/TechStack.jsx",
                    lineNumber: 24,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "url(#py_b)",
                    d: "M50.2 89.3c9.6 0 17.5-1.2 17.5-8.2V72.6H51v-2.9h29.5c4.4 0 8.3-3.5 8.3-8.3V39H71.5v5c0 5.8-4.8 10.6-10.6 10.6H43.9v8.6c0 6.1 8.8 8 15.7 8l.6 18.1zm6.2-14.7c-1.7 0-3-1.4-3-3s1.4-3 3-3c1.6 0 3 1.3 3 3s-1.3 3-3 3z"
                }, void 0, false, {
                    fileName: "[project]/src/components/TechStack.jsx",
                    lineNumber: 25,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TechStack.jsx",
            lineNumber: 13,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)),
    React: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "-11.5 -10.232 23 20.463",
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    r: "2.05",
                    fill: "#61dafb"
                }, void 0, false, {
                    fileName: "[project]/src/components/TechStack.jsx",
                    lineNumber: 30,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    stroke: "#61dafb",
                    strokeWidth: "1",
                    fill: "none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            rx: "11",
                            ry: "4.2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/TechStack.jsx",
                            lineNumber: 32,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            rx: "11",
                            ry: "4.2",
                            transform: "rotate(60)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/TechStack.jsx",
                            lineNumber: 33,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            rx: "11",
                            ry: "4.2",
                            transform: "rotate(120)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/TechStack.jsx",
                            lineNumber: 34,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/TechStack.jsx",
                    lineNumber: 31,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TechStack.jsx",
            lineNumber: 29,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)),
    TensorFlow: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "#FF6F00",
                    d: "M11.66 2.38L2.4 6.7v3.05l9.26-3.88 9.25 3.88v-3.04L11.66 2.38z"
                }, void 0, false, {
                    fileName: "[project]/src/components/TechStack.jsx",
                    lineNumber: 40,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "#FFA000",
                    d: "M11.66 7.86l-8.08 3.4 8.08 3.39 8.08-3.4-8.08-3.38z"
                }, void 0, false, {
                    fileName: "[project]/src/components/TechStack.jsx",
                    lineNumber: 41,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "#FFD54F",
                    d: "M11.66 16.21L4.85 13.3v7.36l6.81-2.9v-1.55zm1.37 0v1.55l6.81 2.9V13.3l-6.81 2.91z"
                }, void 0, false, {
                    fileName: "[project]/src/components/TechStack.jsx",
                    lineNumber: 42,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TechStack.jsx",
            lineNumber: 39,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)),
    Node: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            ...props,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#339933",
                d: "M12 2L4 6.5v9L12 20l8-4.5v-9L12 2zm0 2.9l5.5 3.1-2 1.1L12 7.2 8.5 9.1l-2-1.1L12 4.9zm-6 10.9V8.2l1.6.9v4.5l3.9 2.2V18L6 15.8zm12 0l-5.5 3.1v-2.2l3.9-2.2V10l3.1 1.8-1.5.9v3.1z"
            }, void 0, false, {
                fileName: "[project]/src/components/TechStack.jsx",
                lineNumber: 47,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/TechStack.jsx",
            lineNumber: 46,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)),
    OpenCV: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "#FF0000",
                    d: "M12 0A12 12 0 1 0 12 24 12 12 0 0 0 12 0zm0 3.38a8.63 8.63 0 1 1 0 17.25 8.63 8.63 0 0 1 0-17.25z"
                }, void 0, false, {
                    fileName: "[project]/src/components/TechStack.jsx",
                    lineNumber: 52,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "#0000FF",
                    d: "M5.91 6.89A8.63 8.63 0 0 1 18.09 6.89L15.6 9.38a5.1 5.1 0 0 0-7.2 0L5.91 6.89z"
                }, void 0, false, {
                    fileName: "[project]/src/components/TechStack.jsx",
                    lineNumber: 53,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "#00FF00",
                    d: "M18.09 17.11a8.63 8.63 0 0 1-12.18 0l2.49-2.49a5.1 5.1 0 0 0 7.2 0l2.49 2.49z"
                }, void 0, false, {
                    fileName: "[project]/src/components/TechStack.jsx",
                    lineNumber: 54,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TechStack.jsx",
            lineNumber: 51,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)),
    JS: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "#F7DF1E",
                    d: "M0 0h24v24H0V0z"
                }, void 0, false, {
                    fileName: "[project]/src/components/TechStack.jsx",
                    lineNumber: 59,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "#000",
                    d: "M22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.24-.156-.375l-1.785.885c.16.435.42.81.69 1.11 1.05 1.035 3.06 1.14 4.38.195 1.41-1.035 1.635-2.61 1.635-4.41V11.03z"
                }, void 0, false, {
                    fileName: "[project]/src/components/TechStack.jsx",
                    lineNumber: 60,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TechStack.jsx",
            lineNumber: 58,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)),
    Vite: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 410 404",
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "#FFC920",
                    d: "M370.6 8.7l30.2 24.3-199 371.1-2.4-1.2L0 33 30.2 8.7h340.4z"
                }, void 0, false, {
                    fileName: "[project]/src/components/TechStack.jsx",
                    lineNumber: 65,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "#BD34FE",
                    d: "M228.4 345.1L188.2 3.8l164.6 150.8-124.4 190.5z"
                }, void 0, false, {
                    fileName: "[project]/src/components/TechStack.jsx",
                    lineNumber: 66,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fill: "#4DB6AC",
                    d: "M199.6 374.9L.1 31.8l158.4 150.3 41.1 192.8z"
                }, void 0, false, {
                    fileName: "[project]/src/components/TechStack.jsx",
                    lineNumber: 67,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TechStack.jsx",
            lineNumber: 64,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)),
    Tailwind: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            ...props,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#38BDF8",
                d: "M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"
            }, void 0, false, {
                fileName: "[project]/src/components/TechStack.jsx",
                lineNumber: 72,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/TechStack.jsx",
            lineNumber: 71,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)),
    Framer: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            ...props,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#000",
                d: "M4 0h16v8h-8zM4 12h8v8h-8zM4 24h8v-8h8v-8h-8v-8h-8z"
            }, void 0, false, {
                fileName: "[project]/src/components/TechStack.jsx",
                lineNumber: 77,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/TechStack.jsx",
            lineNumber: 76,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)),
    Recharts: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            ...props,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#22d3ee",
                d: "M3 3v18h18v-2H5V3H3zm4 14h2v-7H7v7zm4 0h2V8h-2v9zm4 0h2v-5h-2v5z"
            }, void 0, false, {
                fileName: "[project]/src/components/TechStack.jsx",
                lineNumber: 82,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/TechStack.jsx",
            lineNumber: 81,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)),
    Picovoice: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            ...props,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#377DFF",
                d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"
            }, void 0, false, {
                fileName: "[project]/src/components/TechStack.jsx",
                lineNumber: 87,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/TechStack.jsx",
            lineNumber: 86,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
};
const TECH_STACK = [
    {
        name: "Raspberry Pi",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/raspberrypi/raspberrypi-original.svg",
        url: "https://www.raspberrypi.org/"
    },
    {
        name: "Python",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        url: "https://www.python.org/"
    },
    {
        name: "TensorFlow",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
        url: "https://www.tensorflow.org/"
    },
    {
        name: "OpenCV",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg",
        url: "https://opencv.org/"
    },
    {
        name: "Node.js",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
        url: "https://nodejs.org/"
    },
    {
        name: "React",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        url: "https://react.dev/"
    },
    {
        name: "JavaScript",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {
        name: "Vite",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
        url: "https://vitejs.dev/"
    },
    {
        name: "Tailwind CSS",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        url: "https://tailwindcss.com/"
    },
    {
        name: "Framer Motion",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
        url: "https://www.framer.com/motion/"
    },
    {
        name: "Recharts",
        icon: Logos.Recharts,
        url: "https://recharts.org/"
    },
    {
        name: "Picovoice",
        icon: Logos.Picovoice,
        url: "https://picovoice.ai/"
    }
];
const TechStack = ()=>{
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [scrollY, setScrollY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TechStack.useEffect": ()=>{
            const checkMobile = {
                "TechStack.useEffect.checkMobile": ()=>{
                    setIsMobile(window.innerWidth < 1024); // lg breakpoint
                }
            }["TechStack.useEffect.checkMobile"];
            checkMobile();
            window.addEventListener('resize', checkMobile);
            const handleScroll = {
                "TechStack.useEffect.handleScroll": ()=>{
                    if (containerRef.current) {
                        const rect = containerRef.current.getBoundingClientRect();
                        const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
                        setScrollY(scrollProgress);
                    }
                }
            }["TechStack.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            handleScroll(); // Initial call
            return ({
                "TechStack.useEffect": ()=>{
                    window.removeEventListener('scroll', handleScroll);
                    window.removeEventListener('resize', checkMobile);
                }
            })["TechStack.useEffect"];
        }
    }["TechStack.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "w-full pt-10 pb-20 overflow-hidden relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl md:text-4xl font-bold text-center mb-12 md:mb-24 text-gray-800 animate-fade-in-up px-4",
                children: "Tech Stack"
            }, void 0, false, {
                fileName: "[project]/src/components/TechStack.jsx",
                lineNumber: 142,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `max-w-7xl mx-auto px-4 ${isMobile ? 'grid grid-cols-3 sm:grid-cols-4 gap-6 md:gap-8 justify-items-center' : 'flex flex-wrap justify-center items-center gap-6'}`,
                children: TECH_STACK.map((tech, index)=>{
                    // Calculate wave offset for each item - ONLY on desktop
                    const waveOffset = isMobile ? 0 : Number((Math.sin(scrollY * Math.PI * 2 + index * 0.5) * 40).toFixed(2));
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: tech.url,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "flex flex-col items-center gap-2 cursor-pointer group/item transition-all duration-300 hover:scale-110 relative",
                        style: {
                            transform: `translateY(${waveOffset}px)`,
                            transition: 'transform 0.3s ease-out'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center p-3 md:p-4 shadow-lg border border-gray-100",
                                children: tech.iconUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: tech.iconUrl,
                                    alt: tech.name,
                                    className: "w-full h-full object-contain"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TechStack.jsx",
                                    lineNumber: 169,
                                    columnNumber: 37
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(tech.icon, {
                                    className: "w-full h-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TechStack.jsx",
                                    lineNumber: 171,
                                    columnNumber: 37
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/TechStack.jsx",
                                lineNumber: 167,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden md:block absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded opacity-0 group-hover/item:opacity-100 transition-opacity whitespace-nowrap pointer-events-none",
                                children: tech.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/TechStack.jsx",
                                lineNumber: 176,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, index, true, {
                        fileName: "[project]/src/components/TechStack.jsx",
                        lineNumber: 155,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/src/components/TechStack.jsx",
                lineNumber: 146,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TechStack.jsx",
        lineNumber: 141,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TechStack, "j+SQ5XM1c3oPDuQatJ97byvFI/4=");
_c = TechStack;
const __TURBOPACK__default__export__ = TechStack;
var _c;
__turbopack_context__.k.register(_c, "TechStack");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Features.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
// --- Hyper-Premium Advanced Animation Components (High Visibility v2.2) ---
const BioMesh = ({ isPaused })=>{
    const nodes = [
        {
            x: 30,
            y: 30
        },
        {
            x: 70,
            y: 30
        },
        {
            x: 50,
            y: 20
        },
        {
            x: 30,
            y: 70
        },
        {
            x: 70,
            y: 70
        },
        {
            x: 50,
            y: 80
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-full flex items-center justify-center bg-white rounded-2xl overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 100 100",
            className: "w-4/5 h-4/5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    stroke: "var(--adorix-primary)",
                    strokeWidth: "0.2",
                    opacity: "0.1",
                    children: [
                        [
                            20,
                            40,
                            60,
                            80
                        ].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "0",
                                y1: p,
                                x2: "100",
                                y2: p
                            }, `h${p}`, false, {
                                fileName: "[project]/src/components/Features.jsx",
                                lineNumber: 18,
                                columnNumber: 48
                            }, ("TURBOPACK compile-time value", void 0))),
                        [
                            20,
                            40,
                            60,
                            80
                        ].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: p,
                                y1: "0",
                                x2: p,
                                y2: "100"
                            }, `v${p}`, false, {
                                fileName: "[project]/src/components/Features.jsx",
                                lineNumber: 19,
                                columnNumber: 48
                            }, ("TURBOPACK compile-time value", void 0)))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Features.jsx",
                    lineNumber: 17,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    stroke: "var(--adorix-primary)",
                    strokeWidth: "0.3",
                    opacity: "0.2",
                    children: nodes.map((n, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "50",
                            y1: "50",
                            x2: n.x,
                            y2: n.y
                        }, i, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 25,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/Features.jsx",
                    lineNumber: 23,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    transform: "translate(50, 50)",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                            r: "18",
                            fill: "none",
                            stroke: "var(--adorix-primary)",
                            strokeWidth: "0.8",
                            strokeDasharray: "4 2",
                            animate: {
                                rotate: 360
                            },
                            transition: {
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 31,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                            r: "12",
                            fill: "none",
                            stroke: "var(--adorix-accent)",
                            strokeWidth: "1.5",
                            strokeDasharray: "6 4",
                            animate: {
                                rotate: -360
                            },
                            transition: {
                                duration: 12,
                                repeat: Infinity,
                                ease: "linear"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 33,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            r: "4",
                            fill: "var(--adorix-primary)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 35,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                            r: "6",
                            fill: "var(--adorix-primary)",
                            opacity: "0.3",
                            animate: {
                                scale: [
                                    1,
                                    1.3,
                                    1
                                ]
                            },
                            transition: {
                                duration: 2,
                                repeat: Infinity
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 36,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Features.jsx",
                    lineNumber: 30,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                nodes.map((n, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                        cx: n.x,
                        cy: n.y,
                        r: "1.5",
                        fill: "var(--adorix-accent)",
                        animate: {
                            opacity: [
                                0.3,
                                1,
                                0.3
                            ]
                        },
                        transition: {
                            duration: 2,
                            delay: i * 0.3,
                            repeat: Infinity
                        }
                    }, i, false, {
                        fileName: "[project]/src/components/Features.jsx",
                        lineNumber: 42,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].rect, {
                    x: "15",
                    y: "0",
                    width: "70",
                    height: "0.6",
                    fill: "var(--adorix-primary)",
                    opacity: "0.5",
                    animate: !isPaused ? {
                        y: [
                            15,
                            85
                        ]
                    } : {
                        y: 50
                    },
                    transition: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/Features.jsx",
                    lineNumber: 47,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Features.jsx",
            lineNumber: 15,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Features.jsx",
        lineNumber: 14,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = BioMesh;
const SupersonicStream = ({ isPaused })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-full flex items-center justify-center bg-white rounded-2xl overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 100 100",
            className: "w-full h-full p-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                        id: "speedBlur",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                            stdDeviation: "1.5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 59,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Features.jsx",
                        lineNumber: 58,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Features.jsx",
                    lineNumber: 57,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    opacity: "0.15",
                    children: [
                        ...Array(3)
                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                            cx: "50",
                            cy: "50",
                            r: "10",
                            fill: "none",
                            stroke: "var(--adorix-primary)",
                            strokeWidth: "0.5",
                            animate: {
                                r: [
                                    10,
                                    80
                                ],
                                opacity: [
                                    0.6,
                                    0
                                ]
                            },
                            transition: {
                                duration: 1.5,
                                repeat: Infinity,
                                delay: i * 0.5,
                                ease: "easeOut"
                            }
                        }, i, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 66,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/Features.jsx",
                    lineNumber: 64,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        ...Array(8)
                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].line, {
                            x1: "120",
                            x2: "-20",
                            y1: 20 + i * 8,
                            y2: 20 + i * 8,
                            stroke: "var(--adorix-primary)",
                            strokeWidth: 0.5 + i * 137 % 100 / 100,
                            strokeDasharray: "20 40",
                            opacity: 0.2 + i * 91 % 30 / 100,
                            animate: !isPaused ? {
                                x: [
                                    -150,
                                    150
                                ]
                            } : {
                                x: 0
                            },
                            transition: {
                                duration: 0.8 + i * 73 % 50 / 100,
                                repeat: Infinity,
                                ease: "linear"
                            }
                        }, i, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 81,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/Features.jsx",
                    lineNumber: 79,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                    animate: !isPaused ? {
                        y: [
                            0,
                            -3,
                            0
                        ],
                        rotate: [
                            -1,
                            1,
                            -1
                        ]
                    } : {
                        y: 0
                    },
                    transition: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "50",
                            cy: "50",
                            r: "25",
                            fill: "var(--adorix-primary)",
                            opacity: "0.05",
                            filter: "url(#speedBlur)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 104,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "25",
                            y: "32",
                            width: "50",
                            height: "36",
                            rx: "4",
                            fill: "white",
                            stroke: "var(--adorix-primary)",
                            strokeWidth: "1",
                            shadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 106,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "25",
                            y: "32",
                            width: "50",
                            height: "8",
                            rx: "4",
                            fill: "var(--adorix-dark)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 107,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "30",
                            y: "46",
                            width: "30",
                            height: "2",
                            fill: "var(--adorix-primary)",
                            opacity: "0.3",
                            rx: "1"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 110,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "30",
                            y: "52",
                            width: "20",
                            height: "2",
                            fill: "var(--adorix-primary)",
                            opacity: "0.3",
                            rx: "1"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 111,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].rect, {
                            x: "30",
                            y: "58",
                            width: "15",
                            height: "2",
                            fill: "var(--adorix-accent)",
                            rx: "1",
                            animate: {
                                width: [
                                    15,
                                    35,
                                    15
                                ]
                            },
                            transition: {
                                duration: 2,
                                repeat: Infinity
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 112,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                            d: "M 62 42 L 54 54 L 59 54 L 56 66 L 66 52 L 61 52 Z",
                            fill: "var(--adorix-accent)",
                            initial: {
                                pathLength: 0,
                                opacity: 0
                            },
                            animate: {
                                pathLength: 1,
                                opacity: [
                                    0.6,
                                    1,
                                    0.6
                                ]
                            },
                            transition: {
                                duration: 0.8,
                                repeat: Infinity,
                                repeatDelay: 1
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 118,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Features.jsx",
                    lineNumber: 96,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                [
                    ...Array(6)
                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].rect, {
                        width: 10 + i * 223 % 20,
                        height: "0.8",
                        fill: "var(--adorix-accent)",
                        opacity: "0.4",
                        animate: !isPaused ? {
                            x: [
                                150,
                                -100
                            ]
                        } : {
                            x: 50
                        },
                        transition: {
                            duration: 0.5 + i * 157 % 50 / 100,
                            repeat: Infinity,
                            delay: i * 311 % 100 / 100,
                            ease: "linear"
                        },
                        y: 15 + i * 449 % 70
                    }, `p-${i}`, false, {
                        fileName: "[project]/src/components/Features.jsx",
                        lineNumber: 129,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Features.jsx",
            lineNumber: 56,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Features.jsx",
        lineNumber: 55,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c1 = SupersonicStream;
const QuantumVault = ({ isPaused })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-full flex items-center justify-center bg-white rounded-2xl overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 100 100",
            className: "w-4/5 h-4/5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                            id: "fingerClip",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                cx: "50",
                                cy: "50",
                                rx: "16",
                                ry: "24"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Features.jsx",
                                lineNumber: 155,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 154,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            id: "basePrint",
                            clipPath: "url(#fingerClip)",
                            children: Array.from({
                                length: 15
                            }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: `M ${50 - i * 1.5} 80 L ${50 - i * 1.5} 45 A ${i * 1.5} ${i * 2} 0 0 1 ${50 + i * 1.5} 45 L ${50 + i * 1.5} 80`,
                                    fill: "none",
                                    stroke: "var(--adorix-primary)",
                                    strokeWidth: "0.8",
                                    opacity: "0.3"
                                }, i, false, {
                                    fileName: "[project]/src/components/Features.jsx",
                                    lineNumber: 160,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 158,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Features.jsx",
                    lineNumber: 153,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("use", {
                    href: "#basePrint"
                }, void 0, false, {
                    fileName: "[project]/src/components/Features.jsx",
                    lineNumber: 166,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                    clipPath: "url(#scanClip)",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                            id: "scanClip",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].rect, {
                                x: "0",
                                y: "0",
                                width: "100",
                                height: "20",
                                animate: !isPaused ? {
                                    y: [
                                        -20,
                                        100
                                    ]
                                } : {
                                    y: 50
                                },
                                transition: {
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/Features.jsx",
                                lineNumber: 169,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 168,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            stroke: "var(--adorix-accent)",
                            strokeWidth: "1",
                            opacity: "0.8",
                            children: Array.from({
                                length: 15
                            }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: `M ${50 - i * 1.5} 80 L ${50 - i * 1.5} 45 A ${i * 1.5} ${i * 2} 0 0 1 ${50 + i * 1.5} 45 L ${50 + i * 1.5} 80`,
                                    fill: "none"
                                }, `s-${i}`, false, {
                                    fileName: "[project]/src/components/Features.jsx",
                                    lineNumber: 173,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 171,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Features.jsx",
                    lineNumber: 167,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].line, {
                    x1: "30",
                    x2: "70",
                    y1: "0",
                    y2: "0",
                    stroke: "var(--adorix-accent)",
                    strokeWidth: "1",
                    animate: !isPaused ? {
                        y: [
                            20,
                            80
                        ]
                    } : {
                        y: 50
                    },
                    transition: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/Features.jsx",
                    lineNumber: 179,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "85",
                    cy: "15",
                    r: "4",
                    fill: "var(--adorix-primary)",
                    opacity: "0.2"
                }, void 0, false, {
                    fileName: "[project]/src/components/Features.jsx",
                    lineNumber: 183,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 83 15 L 84.5 16.5 L 87 13.5",
                    fill: "none",
                    stroke: "var(--adorix-primary)",
                    strokeWidth: "1",
                    opacity: "0.8"
                }, void 0, false, {
                    fileName: "[project]/src/components/Features.jsx",
                    lineNumber: 184,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Features.jsx",
            lineNumber: 152,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Features.jsx",
        lineNumber: 151,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c2 = QuantumVault;
const SpectralField = ({ isPaused })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-full flex items-center justify-center overflow-hidden bg-white rounded-2xl group border border-gray-100 shadow-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 100 100",
            className: "w-[180px] h-[180px] origin-center relative z-10",
            style: {
                letterSpacing: '0.05em'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "chartGradient",
                        x1: "0%",
                        y1: "100%",
                        x2: "0%",
                        y2: "0%",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: "var(--adorix-accent)",
                                stopOpacity: "0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Features.jsx",
                                lineNumber: 196,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: "var(--adorix-accent)",
                                stopOpacity: "0.2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Features.jsx",
                                lineNumber: 197,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Features.jsx",
                        lineNumber: 195,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Features.jsx",
                    lineNumber: 194,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    stroke: "var(--adorix-primary)",
                    strokeWidth: "0.5",
                    opacity: "0.15",
                    children: [
                        [
                            10,
                            20,
                            30,
                            40,
                            50,
                            60,
                            70,
                            80,
                            90
                        ].map((y)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "0",
                                y1: y,
                                x2: "100",
                                y2: y
                            }, `hy${y}`, false, {
                                fileName: "[project]/src/components/Features.jsx",
                                lineNumber: 203,
                                columnNumber: 68
                            }, ("TURBOPACK compile-time value", void 0))),
                        [
                            10,
                            20,
                            30,
                            40,
                            50,
                            60,
                            70,
                            80,
                            90
                        ].map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: x,
                                y1: "0",
                                x2: x,
                                y2: "100"
                            }, `vx${x}`, false, {
                                fileName: "[project]/src/components/Features.jsx",
                                lineNumber: 204,
                                columnNumber: 68
                            }, ("TURBOPACK compile-time value", void 0)))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Features.jsx",
                    lineNumber: 202,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    transform: "translate(60, 8)",
                    children: [
                        10,
                        15,
                        8,
                        20,
                        25,
                        18,
                        28
                    ].map((val, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].rect, {
                            x: i * 5,
                            width: "3",
                            fill: "var(--adorix-accent)",
                            initial: {
                                height: val,
                                y: 30 - val
                            },
                            animate: {
                                height: [
                                    val,
                                    val * 0.6,
                                    val * 1.3,
                                    val * 0.8,
                                    val
                                ],
                                y: [
                                    30 - val,
                                    30 - val * 0.6,
                                    30 - val * 1.3,
                                    30 - val * 0.8,
                                    30 - val
                                ]
                            },
                            transition: {
                                duration: 4,
                                repeat: Infinity,
                                delay: i * 0.2,
                                ease: "easeInOut"
                            },
                            opacity: "0.8"
                        }, `bar-${i}`, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 212,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/Features.jsx",
                    lineNumber: 210,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    transform: "translate(25, 68)",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                            cx: "0",
                            cy: "0",
                            r: "14",
                            fill: "none",
                            stroke: "var(--adorix-accent)",
                            strokeWidth: "2.5",
                            strokeDasharray: "60 100",
                            animate: {
                                rotate: [
                                    0,
                                    360
                                ]
                            },
                            transition: {
                                duration: 10,
                                repeat: Infinity,
                                ease: "linear"
                            },
                            opacity: "0.8"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 231,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                            cx: "0",
                            cy: "0",
                            r: "10",
                            fill: "none",
                            stroke: "var(--adorix-primary)",
                            strokeWidth: "1",
                            strokeDasharray: "10 20 5 15",
                            animate: {
                                rotate: [
                                    0,
                                    -360
                                ]
                            },
                            transition: {
                                duration: 15,
                                repeat: Infinity,
                                ease: "linear"
                            },
                            opacity: "0.5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 236,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "0",
                            cy: "0",
                            r: "2",
                            fill: "var(--adorix-accent)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 241,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                            d: "M 10 -10 L 20 -20 L 40 -20",
                            fill: "none",
                            stroke: "var(--adorix-accent)",
                            strokeWidth: "0.8",
                            initial: {
                                pathLength: 0
                            },
                            animate: {
                                pathLength: 1
                            },
                            transition: {
                                duration: 1,
                                delay: 0.5
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 243,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].text, {
                            x: "42",
                            y: "-18",
                            fontSize: "4",
                            fill: "var(--adorix-dark)",
                            fontWeight: "bold",
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                delay: 1
                            },
                            children: "75% ACTIVE"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 248,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Features.jsx",
                    lineNumber: 229,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M 40 10 L 40 40 L 85 40",
                            fill: "none",
                            stroke: "var(--adorix-primary)",
                            strokeWidth: "0.5",
                            opacity: "0.3"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 256,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        [
                            15,
                            25,
                            35
                        ].map((y)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "40",
                                y1: y,
                                x2: "85",
                                y2: y,
                                stroke: "var(--adorix-primary)",
                                strokeWidth: "0.5",
                                opacity: "0.1"
                            }, `hl-${y}`, false, {
                                fileName: "[project]/src/components/Features.jsx",
                                lineNumber: 257,
                                columnNumber: 46
                            }, ("TURBOPACK compile-time value", void 0))),
                        [
                            50,
                            60,
                            70,
                            80
                        ].map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: x,
                                y1: "10",
                                x2: x,
                                y2: "40",
                                stroke: "var(--adorix-primary)",
                                strokeWidth: "0.5",
                                opacity: "0.1"
                            }, `vl-${x}`, false, {
                                fileName: "[project]/src/components/Features.jsx",
                                lineNumber: 258,
                                columnNumber: 50
                            }, ("TURBOPACK compile-time value", void 0))),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].line, {
                            x1: "40",
                            y1: "10",
                            x2: "40",
                            y2: "40",
                            stroke: "var(--adorix-accent)",
                            strokeWidth: "0.5",
                            opacity: "0.6",
                            animate: {
                                x1: [
                                    40,
                                    85,
                                    40
                                ],
                                x2: [
                                    40,
                                    85,
                                    40
                                ]
                            },
                            transition: {
                                duration: 6,
                                repeat: Infinity,
                                ease: "linear"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 261,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                            d: "M 40 40 L 40 35 L 50 35 L 55 25 L 65 28 L 75 15 L 85 5 L 85 40 Z",
                            fill: "url(#chartGradient)",
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                duration: 1,
                                delay: 0.5
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 269,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                            d: "M 40 35 L 50 35 L 55 25 L 65 28 L 75 15 L 85 5",
                            fill: "none",
                            stroke: "var(--adorix-primary)",
                            strokeWidth: "1.5",
                            initial: {
                                pathLength: 0
                            },
                            animate: {
                                pathLength: 1
                            },
                            transition: {
                                duration: 1.5,
                                ease: "easeOut"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 278,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].polygon, {
                            points: "82,4 86,2 86,8",
                            fill: "var(--adorix-primary)",
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                delay: 1.5
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 287,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                delay: 1.5
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "50",
                                    cy: "35",
                                    r: "1.5",
                                    fill: "var(--adorix-accent)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Features.jsx",
                                    lineNumber: 295,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "55",
                                    cy: "25",
                                    r: "1.5",
                                    fill: "var(--adorix-accent)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Features.jsx",
                                    lineNumber: 296,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "65",
                                    cy: "28",
                                    r: "1.5",
                                    fill: "var(--adorix-accent)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Features.jsx",
                                    lineNumber: 297,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "75",
                                    cy: "15",
                                    r: "1.5",
                                    fill: "var(--adorix-accent)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Features.jsx",
                                    lineNumber: 298,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 294,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Features.jsx",
                    lineNumber: 254,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    transform: "translate(55, 82)",
                    children: [
                        4,
                        7,
                        5,
                        8,
                        12,
                        6,
                        9,
                        14,
                        10,
                        15
                    ].map((val, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].rect, {
                            x: i * 3.5,
                            width: "2",
                            fill: "var(--adorix-primary)",
                            opacity: "0.5",
                            initial: {
                                height: val,
                                y: 15 - val
                            },
                            animate: {
                                height: [
                                    val,
                                    val * 1.5,
                                    val * 0.4,
                                    val * 1.2,
                                    val
                                ],
                                y: [
                                    15 - val,
                                    15 - val * 1.5,
                                    15 - val * 0.4,
                                    15 - val * 1.2,
                                    15 - val
                                ]
                            },
                            transition: {
                                duration: 3.5,
                                repeat: Infinity,
                                delay: i * 0.15,
                                ease: "easeInOut"
                            }
                        }, `bbar-${i}`, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 305,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/Features.jsx",
                    lineNumber: 303,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Features.jsx",
            lineNumber: 193,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Features.jsx",
        lineNumber: 192,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c3 = SpectralField;
const TargetingPulse = ({ isPaused })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-full flex items-center justify-center overflow-hidden bg-white rounded-2xl group border border-gray-100 shadow-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 200 100",
            className: "w-[110%] h-[110%] origin-center relative z-10 isolate",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "shaftGrad",
                            x1: "0%",
                            y1: "0%",
                            x2: "0%",
                            y2: "100%",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0%",
                                    stopColor: "#2D3748"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Features.jsx",
                                    lineNumber: 331,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "30%",
                                    stopColor: "#4A5568"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Features.jsx",
                                    lineNumber: 332,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "100%",
                                    stopColor: "#1A202C"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Features.jsx",
                                    lineNumber: 333,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 330,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "metalGrad",
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "100%",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0%",
                                    stopColor: "#FFFFFF"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Features.jsx",
                                    lineNumber: 336,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "30%",
                                    stopColor: "#E2E8F0"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Features.jsx",
                                    lineNumber: 337,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "100%",
                                    stopColor: "#718096"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Features.jsx",
                                    lineNumber: 338,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 335,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                            id: "arrowShadow",
                            x: "-50%",
                            y: "-50%",
                            width: "200%",
                            height: "200%",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feDropShadow", {
                                dx: "2",
                                dy: "4",
                                stdDeviation: "2",
                                floodOpacity: "0.2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Features.jsx",
                                lineNumber: 341,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 340,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                            id: "targetShadow",
                            x: "-20%",
                            y: "-20%",
                            width: "140%",
                            height: "140%",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feDropShadow", {
                                dx: "0",
                                dy: "8",
                                stdDeviation: "6",
                                floodOpacity: "0.08"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Features.jsx",
                                lineNumber: 344,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 343,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Features.jsx",
                    lineNumber: 329,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                    d: "M 30 35 Q 30 30 35 30 Q 40 25 45 30 Q 50 28 50 35 Z",
                    fill: "#E8F0FE",
                    animate: {
                        x: [
                            -5,
                            5,
                            -5
                        ]
                    },
                    transition: {
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/Features.jsx",
                    lineNumber: 349,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                    d: "M 170 25 Q 170 20 175 20 Q 180 15 185 20 Q 190 18 190 25 Z",
                    fill: "#E8F0FE",
                    animate: {
                        x: [
                            5,
                            -5,
                            5
                        ]
                    },
                    transition: {
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/Features.jsx",
                    lineNumber: 350,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                    d: "M 120 15 Q 120 12 125 12 Q 130 8 135 12 Q 140 10 140 15 Z",
                    fill: "#E8F0FE",
                    animate: {
                        x: [
                            0,
                            -8,
                            0
                        ]
                    },
                    transition: {
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/Features.jsx",
                    lineNumber: 351,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                    cx: "100",
                    cy: "85",
                    rx: "50",
                    ry: "4",
                    fill: "#E8F0FE",
                    opacity: "0.6"
                }, void 0, false, {
                    fileName: "[project]/src/components/Features.jsx",
                    lineNumber: 354,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    transform: "translate(100, 50)",
                    filter: "url(#targetShadow)",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            r: "40",
                            fill: "var(--adorix-primary)",
                            opacity: "0.9"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 358,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            r: "30",
                            fill: "#FFFFFF"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 359,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            r: "20",
                            fill: "var(--adorix-primary)",
                            opacity: "0.9"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 360,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            r: "10",
                            fill: "#FFFFFF"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 361,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            r: "4",
                            fill: "var(--adorix-accent)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 362,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Features.jsx",
                    lineNumber: 357,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                !isPaused && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                    initial: {
                        x: 80,
                        y: -80,
                        opacity: 0
                    },
                    animate: {
                        x: 0,
                        y: 0,
                        opacity: 1
                    },
                    transition: {
                        duration: 0.6,
                        type: "spring",
                        stiffness: 120,
                        damping: 12,
                        delay: 0.5,
                        repeat: Infinity,
                        repeatDelay: 4
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        transform: "translate(98, 48) rotate(135) scale(0.7)",
                        filter: "url(#arrowShadow)",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "-70",
                                y: "-1.25",
                                width: "65",
                                height: "2.5",
                                fill: "url(#shaftGrad)",
                                rx: "0.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Features.jsx",
                                lineNumber: 374,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M -45 -1 L -58 -6 L -66 -6 L -58 -1 Z",
                                fill: "var(--adorix-accent)",
                                stroke: "var(--adorix-primary)",
                                strokeWidth: "0.5",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Features.jsx",
                                lineNumber: 377,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M -45 1 L -58 6 L -66 6 L -58 1 Z",
                                fill: "var(--adorix-accent)",
                                stroke: "var(--adorix-primary)",
                                strokeWidth: "0.5",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Features.jsx",
                                lineNumber: 378,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M -70 -1.5 L -73 -2.5 L -73 2.5 L -70 1.5 Z",
                                fill: "#1A202C"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Features.jsx",
                                lineNumber: 381,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "-9",
                                y: "-2",
                                width: "4",
                                height: "4",
                                fill: "#4A5568",
                                rx: "0.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Features.jsx",
                                lineNumber: 384,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "-8",
                                y1: "-2",
                                x2: "-8",
                                y2: "2",
                                stroke: "#A0AEC0",
                                strokeWidth: "0.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Features.jsx",
                                lineNumber: 385,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "-6",
                                y1: "-2",
                                x2: "-6",
                                y2: "2",
                                stroke: "#A0AEC0",
                                strokeWidth: "0.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Features.jsx",
                                lineNumber: 386,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M 0 0 L -8 -4 L -6 0 L -8 4 Z",
                                fill: "url(#metalGrad)",
                                stroke: "#718096",
                                strokeWidth: "0.5",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Features.jsx",
                                lineNumber: 388,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M 0 0 L -8 0",
                                stroke: "#FFFFFF",
                                strokeWidth: "0.5",
                                opacity: "0.8"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Features.jsx",
                                lineNumber: 389,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Features.jsx",
                        lineNumber: 372,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Features.jsx",
                    lineNumber: 367,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                isPaused && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    transform: "translate(100, 50)",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        transform: "translate(-2, -2) rotate(135) scale(0.7)",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "-70",
                                y: "-1.25",
                                width: "65",
                                height: "2.5",
                                fill: "url(#shaftGrad)",
                                rx: "0.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Features.jsx",
                                lineNumber: 396,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M 0 0 L -8 -4 L -6 0 L -8 4 Z",
                                fill: "url(#metalGrad)",
                                stroke: "#718096",
                                strokeWidth: "0.5",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Features.jsx",
                                lineNumber: 397,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Features.jsx",
                        lineNumber: 395,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Features.jsx",
                    lineNumber: 394,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Features.jsx",
            lineNumber: 328,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Features.jsx",
        lineNumber: 327,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c4 = TargetingPulse;
const HolographicScope = ({ isPaused })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-full flex items-center justify-center overflow-hidden bg-white rounded-2xl group border border-gray-100 shadow-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 200 200",
            className: "w-[120%] h-[120%] origin-center relative z-10 isolate",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "phoneGrad",
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "100%",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0%",
                                    stopColor: "#1e1e24"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Features.jsx",
                                    lineNumber: 410,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "100%",
                                    stopColor: "#2b2b36"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Features.jsx",
                                    lineNumber: 411,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 409,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "screenGrad",
                            x1: "0%",
                            y1: "0%",
                            x2: "0%",
                            y2: "100%",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0%",
                                    stopColor: "#ffffff"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Features.jsx",
                                    lineNumber: 414,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "100%",
                                    stopColor: "#f8f9fa"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Features.jsx",
                                    lineNumber: 415,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 413,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                            id: "floatShadow",
                            x: "-20%",
                            y: "-20%",
                            width: "140%",
                            height: "140%",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feDropShadow", {
                                dx: "0",
                                dy: "6",
                                stdDeviation: "4",
                                floodOpacity: "0.1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Features.jsx",
                                lineNumber: 418,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 417,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                            id: "phoneShadow",
                            x: "-20%",
                            y: "-20%",
                            width: "140%",
                            height: "140%",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feDropShadow", {
                                dx: "-5",
                                dy: "15",
                                stdDeviation: "15",
                                floodOpacity: "0.15"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Features.jsx",
                                lineNumber: 421,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 420,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Features.jsx",
                    lineNumber: 408,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                    cx: "100",
                    cy: "100",
                    r: "75",
                    fill: "var(--adorix-primary)",
                    fillOpacity: "0.05",
                    animate: {
                        scale: [
                            1,
                            1.05,
                            1
                        ],
                        rotate: [
                            0,
                            5,
                            0
                        ]
                    },
                    transition: {
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/Features.jsx",
                    lineNumber: 426,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                    cx: "100",
                    cy: "100",
                    r: "88",
                    fill: "none",
                    stroke: "var(--adorix-primary)",
                    strokeWidth: "2",
                    strokeDasharray: "6 12 18 12",
                    strokeOpacity: "0.1",
                    animate: {
                        rotate: [
                            0,
                            90
                        ]
                    },
                    transition: {
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/Features.jsx",
                    lineNumber: 433,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                    animate: {
                        y: [
                            -5,
                            5,
                            -5
                        ]
                    },
                    transition: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M 140 40 L 142 48 L 150 50 L 142 52 L 140 60 L 138 52 L 130 50 L 138 48 Z",
                        fill: "#FFFFFF"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Features.jsx",
                        lineNumber: 443,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Features.jsx",
                    lineNumber: 441,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                    animate: {
                        y: [
                            5,
                            -5,
                            5
                        ]
                    },
                    transition: {
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.5
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M 50 150 L 51 154 L 55 155 L 51 156 L 50 160 L 49 156 L 45 155 L 49 154 Z",
                        fill: "#FFFFFF"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Features.jsx",
                        lineNumber: 447,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Features.jsx",
                    lineNumber: 445,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                    filter: "url(#floatShadow)",
                    animate: {
                        y: [
                            -8,
                            8,
                            -8
                        ],
                        rotate: [
                            -5,
                            5,
                            -5
                        ]
                    },
                    transition: {
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "85",
                            cy: "55",
                            r: "14",
                            fill: "var(--adorix-accent)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 453,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "85",
                            cy: "50",
                            r: "5",
                            fill: "#FFFFFF"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 454,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M 75 62 A 10 10 0 0 1 95 62",
                            fill: "none",
                            stroke: "#FFFFFF",
                            strokeWidth: "4",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 455,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Features.jsx",
                    lineNumber: 451,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                    filter: "url(#floatShadow)",
                    animate: {
                        y: [
                            8,
                            -8,
                            8
                        ],
                        rotate: [
                            5,
                            -5,
                            5
                        ]
                    },
                    transition: {
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "60",
                            cy: "75",
                            r: "16",
                            fill: "var(--adorix-primary)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 460,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                            d: "M 52 75 L 58 81 L 68 69",
                            fill: "none",
                            stroke: "#FFFFFF",
                            strokeWidth: "4",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            initial: {
                                pathLength: 0
                            },
                            animate: {
                                pathLength: 1
                            },
                            transition: {
                                duration: 1,
                                delay: 0.5
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 462,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Features.jsx",
                    lineNumber: 458,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                    filter: "url(#floatShadow)",
                    animate: {
                        y: [
                            5,
                            -5,
                            5
                        ]
                    },
                    transition: {
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M 75 160 Q 95 160 95 170 Q 95 180 80 180 L 72 186 C 70 180 75 170 75 160 Z",
                            fill: "var(--adorix-accent)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 473,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "80",
                            cy: "170",
                            r: "2",
                            fill: "#FFFFFF"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 474,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "86",
                            cy: "170",
                            r: "2",
                            fill: "#FFFFFF"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 475,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "92",
                            cy: "170",
                            r: "2",
                            fill: "#FFFFFF"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 476,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Features.jsx",
                    lineNumber: 471,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    transform: "translate(105, 110) rotate(5)",
                    filter: "url(#phoneShadow)",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "-44",
                            y: "-84",
                            width: "88",
                            height: "176",
                            rx: "16",
                            fill: "url(#phoneGrad)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 482,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "-40",
                            y: "-80",
                            width: "80",
                            height: "168",
                            rx: "12",
                            fill: "url(#screenGrad)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 484,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "-14",
                            y: "-76",
                            width: "28",
                            height: "6",
                            rx: "3",
                            fill: "#1A202C"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 487,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            opacity: "0.8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M -30 -60 L -34 -56 L -30 -52",
                                    fill: "none",
                                    stroke: "#4A5568",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Features.jsx",
                                    lineNumber: 492,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "-16",
                                    cy: "-56",
                                    r: "7",
                                    fill: "var(--adorix-primary)",
                                    fillOpacity: "0.1"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Features.jsx",
                                    lineNumber: 494,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "-16",
                                    cy: "-58",
                                    r: "2.5",
                                    fill: "var(--adorix-primary)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Features.jsx",
                                    lineNumber: 495,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M -21 -52 A 5 5 0 0 1 -11 -52",
                                    fill: "none",
                                    stroke: "var(--adorix-primary)",
                                    strokeWidth: "2",
                                    strokeLinecap: "round"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Features.jsx",
                                    lineNumber: 496,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "32",
                                    cy: "-58",
                                    r: "1.5",
                                    fill: "#A0AEC0"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Features.jsx",
                                    lineNumber: 498,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "32",
                                    cy: "-53",
                                    r: "1.5",
                                    fill: "#A0AEC0"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Features.jsx",
                                    lineNumber: 499,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 490,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "-40",
                            y1: "-42",
                            x2: "40",
                            y2: "-42",
                            stroke: "#E2E8F0",
                            strokeWidth: "1"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 503,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            transform: "translate(0, -32)",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                                    initial: {
                                        scale: 0,
                                        opacity: 0
                                    },
                                    animate: {
                                        scale: 1,
                                        opacity: 1
                                    },
                                    transition: {
                                        delay: 0.8,
                                        type: 'spring'
                                    },
                                    style: {
                                        transformOrigin: "-18px 0px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M -20 -4 L 20 -4 Q 26 -4 26 2 L 26 14 Q 26 20 20 20 L -20 20 Q -26 20 -26 14 L -26 2 L -32 -4 Z",
                                            fill: "#F8FAFC"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Features.jsx",
                                            lineNumber: 509,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "-18",
                                            y1: "4",
                                            x2: "16",
                                            y2: "4",
                                            stroke: "var(--adorix-accent)",
                                            strokeWidth: "2.5",
                                            strokeLinecap: "round",
                                            strokeOpacity: "0.6"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Features.jsx",
                                            lineNumber: 510,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "-18",
                                            y1: "12",
                                            x2: "8",
                                            y2: "12",
                                            stroke: "var(--adorix-accent)",
                                            strokeWidth: "2.5",
                                            strokeLinecap: "round",
                                            strokeOpacity: "0.6"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Features.jsx",
                                            lineNumber: 511,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Features.jsx",
                                    lineNumber: 508,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                                    initial: {
                                        scale: 0,
                                        opacity: 0
                                    },
                                    animate: {
                                        scale: 1,
                                        opacity: 1
                                    },
                                    transition: {
                                        delay: 1.8,
                                        type: 'spring'
                                    },
                                    style: {
                                        transformOrigin: "26px 34px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M 20 26 L -10 26 Q -16 26 -16 32 L -16 44 Q -16 50 -10 50 L 20 50 Q 26 50 26 44 L 26 32 L 32 26 Z",
                                            fill: "var(--adorix-primary)",
                                            fillOpacity: "0.1"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Features.jsx",
                                            lineNumber: 516,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "-6",
                                            y1: "34",
                                            x2: "18",
                                            y2: "34",
                                            stroke: "var(--adorix-primary)",
                                            strokeWidth: "2.5",
                                            strokeLinecap: "round"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Features.jsx",
                                            lineNumber: 517,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "-6",
                                            y1: "42",
                                            x2: "12",
                                            y2: "42",
                                            stroke: "var(--adorix-primary)",
                                            strokeWidth: "2.5",
                                            strokeLinecap: "round"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Features.jsx",
                                            lineNumber: 518,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Features.jsx",
                                    lineNumber: 515,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                                    initial: {
                                        scale: 0,
                                        opacity: 0
                                    },
                                    animate: {
                                        scale: 1,
                                        opacity: 1
                                    },
                                    transition: {
                                        delay: 2.8,
                                        type: 'spring'
                                    },
                                    style: {
                                        transformOrigin: "-18px 60px"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M -20 56 L 24 56 Q 30 56 30 62 L 30 74 Q 30 80 24 80 L -20 80 Q -26 80 -26 74 L -26 62 L -32 56 Z",
                                            fill: "#F8FAFC"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Features.jsx",
                                            lineNumber: 523,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "-18",
                                            y1: "64",
                                            x2: "20",
                                            y2: "64",
                                            stroke: "var(--adorix-accent)",
                                            strokeWidth: "2.5",
                                            strokeLinecap: "round",
                                            strokeOpacity: "0.6"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Features.jsx",
                                            lineNumber: 524,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "-18",
                                            y1: "72",
                                            x2: "12",
                                            y2: "72",
                                            stroke: "var(--adorix-accent)",
                                            strokeWidth: "2.5",
                                            strokeLinecap: "round",
                                            strokeOpacity: "0.6"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Features.jsx",
                                            lineNumber: 525,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Features.jsx",
                                    lineNumber: 522,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: [
                                            0,
                                            1,
                                            0.5,
                                            1
                                        ]
                                    },
                                    transition: {
                                        delay: 3.5,
                                        duration: 2,
                                        repeat: Infinity
                                    },
                                    transform: "translate(0, 92)",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M -12 -4 L 16 -4 Q 22 -4 22 2 L 22 10 Q 22 16 16 16 L -12 16 Q -18 16 -18 10 L -18 2 L -24 -4 Z",
                                            fill: "#EDF2F7"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Features.jsx",
                                            lineNumber: 530,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "-6",
                                            cy: "6",
                                            r: "2",
                                            fill: "#A0AEC0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Features.jsx",
                                            lineNumber: 531,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "2",
                                            cy: "6",
                                            r: "2",
                                            fill: "#A0AEC0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Features.jsx",
                                            lineNumber: 532,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "10",
                                            cy: "6",
                                            r: "2",
                                            fill: "#A0AEC0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Features.jsx",
                                            lineNumber: 533,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Features.jsx",
                                    lineNumber: 529,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 506,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: "-40",
                            y1: "70",
                            x2: "40",
                            y2: "70",
                            stroke: "#E2E8F0",
                            strokeWidth: "1"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 538,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            opacity: "0.6",
                            transform: "translate(0, 76)",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                    points: "-16,-2 -22,2 -16,6",
                                    fill: "#4A5568"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Features.jsx",
                                    lineNumber: 542,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "0",
                                    cy: "2",
                                    r: "4",
                                    fill: "#4A5568"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Features.jsx",
                                    lineNumber: 543,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: "16",
                                    y: "-2",
                                    width: "7",
                                    height: "7",
                                    fill: "#4A5568",
                                    rx: "1"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Features.jsx",
                                    lineNumber: 544,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 541,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Features.jsx",
                    lineNumber: 480,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].g, {
                    filter: "url(#floatShadow)",
                    animate: {
                        y: [
                            4,
                            -4,
                            4
                        ],
                        rotate: [
                            2,
                            -2,
                            2
                        ]
                    },
                    transition: {
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.5
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "135",
                            y: "120",
                            width: "28",
                            height: "18",
                            rx: "4",
                            fill: "var(--adorix-primary)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 550,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M 135 130 L 128 136 L 140 136 Z",
                            fill: "var(--adorix-primary)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 552,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "143",
                            cy: "127",
                            r: "1.5",
                            fill: "#FFFFFF"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 554,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "155",
                            cy: "127",
                            r: "1.5",
                            fill: "#FFFFFF"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 555,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M 145 132 Q 149 135 153 132",
                            fill: "none",
                            stroke: "#FFFFFF",
                            strokeWidth: "1.5",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 556,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Features.jsx",
                    lineNumber: 549,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Features.jsx",
            lineNumber: 407,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Features.jsx",
        lineNumber: 406,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c5 = HolographicScope;
// --- Main Components ---
const FeatureCard = ({ animation: Animation, title, description, cardClassName = '' })=>{
    _s();
    const [isActive, setIsActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "FeatureCard.useEffect": ()=>{
            const checkMobile = {
                "FeatureCard.useEffect.checkMobile": ()=>{
                    setIsMobile(window.innerWidth < 768);
                }
            }["FeatureCard.useEffect.checkMobile"];
            checkMobile();
            window.addEventListener('resize', checkMobile);
            return ({
                "FeatureCard.useEffect": ()=>window.removeEventListener('resize', checkMobile)
            })["FeatureCard.useEffect"];
        }
    }["FeatureCard.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: ()=>setIsActive(!isActive),
        className: `group relative w-full overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-2xl flex flex-col cursor-pointer ${cardClassName}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative w-full ${!isMobile ? 'md:absolute md:inset-0' : 'aspect-square'} flex items-center justify-center transition-all duration-700 ease-out z-0 bg-gray-50/50`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Animation, {
                    isPaused: isActive
                }, void 0, false, {
                    fileName: "[project]/src/components/Features.jsx",
                    lineNumber: 584,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Features.jsx",
                lineNumber: 583,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute inset-0 z-10 flex flex-col items-center justify-center p-6 md:p-8 text-center space-y-4 bg-white/90 backdrop-blur-3xl transition-all duration-300 ease-out ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl md:text-2xl font-black text-gray-900 tracking-tight leading-tight",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/Features.jsx",
                        lineNumber: 589,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-700 md:text-gray-800 leading-relaxed text-lg md:text-base font-bold max-w-[300px]",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/src/components/Features.jsx",
                        lineNumber: 592,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Features.jsx",
                lineNumber: 588,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-adorix-primary/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 z-20"
            }, void 0, false, {
                fileName: "[project]/src/components/Features.jsx",
                lineNumber: 598,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Features.jsx",
        lineNumber: 578,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FeatureCard, "M1xp0TD8ePg3Gd8l6rANXys37y4=");
_c6 = FeatureCard;
const FeatureCards = ()=>{
    const features = [
        {
            animation: HolographicScope,
            title: 'Precision Campaigns',
            description: 'Create hyper-targeted campaigns with our advanced segmentation tools. Deliver personalized experiences at scale.'
        },
        {
            animation: TargetingPulse,
            title: 'Audience Targeting',
            description: 'Reach the right people at the right time. Our smart algorithms ensure maximum engagement and conversion.'
        },
        {
            animation: QuantumVault,
            title: 'Enterprise Security',
            description: 'Bank-level encryption and compliance with industry standards. Your data is protected with military-grade security.'
        },
        {
            animation: SpectralField,
            title: 'Real-Time Analytics',
            description: 'Track every interaction with comprehensive dashboards. Make data-driven decisions with actionable insights.'
        },
        {
            animation: BioMesh,
            title: 'AI-Powered Insights',
            description: 'Leverage advanced machine learning to understand customer behavior and optimize your campaigns in real-time.'
        },
        {
            animation: SupersonicStream,
            title: 'Lightning Fast Performance',
            description: 'Experience blazing-fast ad delivery with our optimized infrastructure. Your campaigns load instantly, every time.'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-24 px-6 bg-gray-50/50 overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-20",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 0.8
                        },
                        className: "text-4xl md:text-6xl font-black text-gray-900 mb-8 tracking-tighter",
                        children: [
                            "Powerful Features ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/components/Features.jsx",
                                lineNumber: 648,
                                columnNumber: 43
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-clip-text text-transparent bg-gradient-to-r from-adorix-primary via-adorix-accent to-adorix-primary bg-[length:200%_auto] animate-gradient",
                                children: "Built for Results"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Features.jsx",
                                lineNumber: 649,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Features.jsx",
                        lineNumber: 641,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Features.jsx",
                    lineNumber: 640,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
                    children: features.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FeatureCard, {
                            animation: feature.animation,
                            title: feature.title,
                            description: feature.description,
                            cardClassName: `min-h-[400px] md:min-h-0 md:aspect-[4/5]${index === 4 ? ' lg:col-start-2' : ''}`
                        }, index, false, {
                            fileName: "[project]/src/components/Features.jsx",
                            lineNumber: 659,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/Features.jsx",
                    lineNumber: 657,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Features.jsx",
            lineNumber: 639,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Features.jsx",
        lineNumber: 638,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c7 = FeatureCards;
const __TURBOPACK__default__export__ = FeatureCards;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "BioMesh");
__turbopack_context__.k.register(_c1, "SupersonicStream");
__turbopack_context__.k.register(_c2, "QuantumVault");
__turbopack_context__.k.register(_c3, "SpectralField");
__turbopack_context__.k.register(_c4, "TargetingPulse");
__turbopack_context__.k.register(_c5, "HolographicScope");
__turbopack_context__.k.register(_c6, "FeatureCard");
__turbopack_context__.k.register(_c7, "FeatureCards");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/VisionMission.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
const VisionMission = ()=>{
    const cardData = [
        {
            title: "Our Vision",
            content: "To breathe life into the digital frontier, creating a world where every screen is a sentient partner that understands, anticipates, and respects the human gaze."
        },
        {
            title: "Our Mission",
            content: "To pioneer the next generation of interactive intelligence—transforming raw physiological data into meaningful brand dialogues through ethical, high-fidelity AI vision."
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-24 px-6 max-w-4xl mx-auto z-10 relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-10",
            children: cardData.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 50,
                        scale: 0.9
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0,
                        scale: 1
                    },
                    viewport: {
                        once: true,
                        margin: "-100px"
                    },
                    transition: {
                        duration: 0.7,
                        ease: [
                            0.175,
                            0.885,
                            0.32,
                            1.275
                        ],
                        delay: index * 0.15 // Staggered appearance
                    },
                    className: "relative bg-white/10 backdrop-blur-md p-10 md:p-14 rounded-[2.5rem] shadow-sm transition-all duration-300 hover:shadow-xl hover:bg-white flex flex-col items-center text-center gap-6 group overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "absolute inset-0 w-full h-full pointer-events-none rounded-[2.5rem]",
                            preserveAspectRatio: "none",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].rect, {
                                width: "100%",
                                height: "100%",
                                rx: "40",
                                fill: "none",
                                stroke: "var(--adorix-primary)",
                                strokeWidth: "4",
                                initial: {
                                    strokeDasharray: "0 2000",
                                    strokeOpacity: 0
                                },
                                whileInView: {
                                    strokeDasharray: "2000 0",
                                    strokeOpacity: [
                                        0,
                                        1,
                                        0.2
                                    ]
                                },
                                viewport: {
                                    once: true,
                                    margin: "-100px"
                                },
                                transition: {
                                    duration: 1.5,
                                    delay: index * 0.15 + 0.3,
                                    ease: "easeInOut"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/VisionMission.jsx",
                                lineNumber: 36,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/VisionMission.jsx",
                            lineNumber: 35,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 rounded-[2.5rem] border border-white/20 pointer-events-none"
                        }, void 0, false, {
                            fileName: "[project]/src/components/VisionMission.jsx",
                            lineNumber: 51,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center w-full relative z-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative inline-block mb-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-4xl font-bold text-adorix-dark cursor-default",
                                        children: item.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/VisionMission.jsx",
                                        lineNumber: 56,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/VisionMission.jsx",
                                    lineNumber: 55,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 text-lg leading-relaxed max-w-2xl",
                                    children: item.content
                                }, void 0, false, {
                                    fileName: "[project]/src/components/VisionMission.jsx",
                                    lineNumber: 60,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/VisionMission.jsx",
                            lineNumber: 54,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, index, true, {
                    fileName: "[project]/src/components/VisionMission.jsx",
                    lineNumber: 22,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/src/components/VisionMission.jsx",
            lineNumber: 20,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/VisionMission.jsx",
        lineNumber: 19,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = VisionMission;
const __TURBOPACK__default__export__ = VisionMission;
var _c;
__turbopack_context__.k.register(_c, "VisionMission");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/MeetTeam.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
'use client';
;
;
;
;
const TeamMember = ({ name, role, image, delay, linkedin, github, twitter })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 30
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true
        },
        transition: {
            delay,
            duration: 0.5
        },
        className: "flex-shrink-0 w-[80vw] sm:w-auto bg-white/70 backdrop-blur-xl p-8 rounded-[2.5rem] border border-adorix-primary/5 hover:border-adorix-primary/30 transition-all duration-500 group text-center snap-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mb-6 inline-block",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-32 h-32 rounded-full overflow-hidden border-4 border-adorix-light group-hover:border-adorix-primary transition-colors duration-500 mx-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: image,
                            alt: name,
                            className: "w-full h-full object-cover"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MeetTeam.jsx",
                            lineNumber: 17,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/MeetTeam.jsx",
                        lineNumber: 16,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    linkedin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: linkedin,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "absolute -bottom-2 -right-2 bg-adorix-primary text-white p-2 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MeetTeam.jsx",
                            lineNumber: 26,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/MeetTeam.jsx",
                        lineNumber: 20,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MeetTeam.jsx",
                lineNumber: 15,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-xl font-bold text-adorix-dark mb-1",
                children: name
            }, void 0, false, {
                fileName: "[project]/src/components/MeetTeam.jsx",
                lineNumber: 30,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-adorix-primary font-medium text-sm mb-4",
                children: role
            }, void 0, false, {
                fileName: "[project]/src/components/MeetTeam.jsx",
                lineNumber: 31,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center gap-4",
                children: [
                    github && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: github,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                            className: "w-5 h-5 text-gray-400 hover:text-adorix-dark cursor-pointer transition-colors"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MeetTeam.jsx",
                            lineNumber: 35,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/MeetTeam.jsx",
                        lineNumber: 34,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    twitter && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: twitter,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"], {
                            className: "w-5 h-5 text-gray-400 hover:text-adorix-accent cursor-pointer transition-colors"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MeetTeam.jsx",
                            lineNumber: 40,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/MeetTeam.jsx",
                        lineNumber: 39,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MeetTeam.jsx",
                lineNumber: 32,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MeetTeam.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c = TeamMember;
const MeetTeam = ()=>{
    const team = [
        {
            name: "Deeghayu Arandara",
            role: "TEAM LEAD & IOT ARCHITECT",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Deeghayu",
            linkedin: "https://www.linkedin.com/in/deeghayu-arandara-44773730a/",
            github: "https://github.com/DeeghayuA",
            twitter: "https://x.com/YOUR_LINK_HERE"
        },
        {
            name: "Binethma Jayawickrama",
            role: "COMPUTER VISION ENGINEER",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Binethma",
            linkedin: "https://www.linkedin.com/in/binethma/",
            github: "https://github.com/BinethmaJayawickrama",
            twitter: "https://x.com/YOUR_LINK_HERE"
        },
        {
            name: "Sithika Weerasinghe",
            role: "FULL STACK DEVELOPER",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sithika",
            linkedin: "https://github.com/SithikaWeerasinghe",
            github: "https://github.com/SithikaWeerasinghe",
            twitter: "https://x.com/YOUR_LINK_HERE"
        },
        {
            name: "Chanithma Dangalla",
            role: "BACKEND DEVELOPER",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chanithma",
            linkedin: " https://www.linkedin.com/in/chanithma-dangalla-b52203339/",
            github: "https://github.com/Chanithmaaa",
            twitter: "https://x.com/YOUR_LINK_HERE"
        },
        {
            name: "Sahan Adithya",
            role: "AI INTERACTION DESIGNER",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sahan",
            linkedin: " https://www.linkedin.com/in/sahan-adithya-32a941359/",
            github: "https://github.com/SahanAdithya",
            twitter: "https://x.com/YOUR_LINK_HERE"
        },
        {
            name: "Lithira Kalubowila",
            role: "DATA ANALYTICS SPECIALIST",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lithira",
            linkedin: "https://www.linkedin.com/in/lithira-kalubowila-78b169354/",
            github: "https://github.com/lithira20240973-ops",
            twitter: "https://x.com/YOUR_LINK_HERE"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-24 px-6 max-w-7xl mx-auto z-10 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        className: "text-4xl md:text-5xl font-bold text-adorix-dark mb-4",
                        children: "Meet Our Team"
                    }, void 0, false, {
                        fileName: "[project]/src/components/MeetTeam.jsx",
                        lineNumber: 102,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            delay: 0.1
                        },
                        className: "text-gray-600 max-w-2xl mx-auto",
                        children: "The visionaries and engineers building the future of intelligent, responsive advertising environments."
                    }, void 0, false, {
                        fileName: "[project]/src/components/MeetTeam.jsx",
                        lineNumber: 110,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MeetTeam.jsx",
                lineNumber: 101,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex sm:grid overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-8 sm:pb-0 scrollbar-hide",
                children: team.map((member, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TeamMember, {
                        ...member,
                        delay: index * 0.1
                    }, index, false, {
                        fileName: "[project]/src/components/MeetTeam.jsx",
                        lineNumber: 123,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/MeetTeam.jsx",
                lineNumber: 121,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MeetTeam.jsx",
        lineNumber: 100,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = MeetTeam;
const __TURBOPACK__default__export__ = MeetTeam;
var _c, _c1;
__turbopack_context__.k.register(_c, "TeamMember");
__turbopack_context__.k.register(_c1, "MeetTeam");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TypingText$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TypingText.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WorkflowAnimation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/WorkflowAnimation.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TechStack$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TechStack.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Features$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Features.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VisionMission$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/VisionMission.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MeetTeam$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MeetTeam.jsx [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
const Home = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative pt-48 pb-20 px-6 max-w-5xl mx-auto z-10 text-center flex flex-col items-center gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-6xl md:text-8xl font-bold text-gray-900 leading-[1.1] tracking-tight",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TypingText$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                text: "Ads that",
                                speed: 0.05
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-transparent bg-clip-text bg-gradient-to-r from-adorix-primary to-adorix-accent",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TypingText$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    text: "look back at you.",
                                    startDelay: 0.5,
                                    speed: 0.05
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.jsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.jsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.5,
                            delay: 0.2
                        },
                        className: "text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium",
                        children: "Adorix transforms static screens into intelligent agents. Track real attention, interact with voice, and serve personalized content in real-time."
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.jsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.5,
                            delay: 0.3
                        },
                        className: "flex flex-col sm:flex-row gap-5 justify-center items-center mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://app.yourdomain.com/signup",
                                className: "px-10 py-4 bg-gray-900 text-white rounded-full font-bold hover:bg-black transition flex items-center gap-2 group shadow-lg hover:shadow-xl hover:-translate-y-1 duration-200",
                                children: [
                                    "Get Started ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "w-4 h-4 group-hover:translate-x-1 transition"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.jsx",
                                        lineNumber: 49,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://app.yourdomain.com/login",
                                className: "px-10 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-bold hover:bg-gray-50 transition hover:border-gray-300 hover:shadow-md hover:-translate-y-1 duration-200",
                                children: "View Live Demo"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.jsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 19,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "px-6 max-w-7xl mx-auto mb-10 mt-10 md:mt-32 z-10 relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center lg:justify-start lg:col-span-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WorkflowAnimation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/app/page.jsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.jsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center lg:text-left space-y-6 lg:col-span-2 flex flex-col justify-center items-center lg:items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl font-bold text-gray-900 tracking-tight",
                                    children: "The Intelligent Flow"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.jsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl text-gray-600 leading-relaxed font-medium",
                                    children: "Adorix turns passive screens into active, intelligent agents. Detect visitors, analyze demographics, and serve personalized content in milliseconds all while maintaining absolute privacy. It’s not just a display; it’s a responsive environment that adapts to everyone."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.jsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.jsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.jsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 58,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TechStack$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 83,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VisionMission$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 86,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Features$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 89,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MeetTeam$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 92,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-32 px-6 max-w-7xl mx-auto z-10 relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-adorix-dark rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            animate: {
                                rotate: 360
                            },
                            transition: {
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear"
                            },
                            className: "absolute -top-40 -right-40 w-[600px] h-[600px] border border-white/5 rounded-full"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.jsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            animate: {
                                rotate: -360
                            },
                            transition: {
                                duration: 25,
                                repeat: Infinity,
                                ease: "linear"
                            },
                            className: "absolute -bottom-40 -left-40 w-[600px] h-[600px] border border-white/5 rounded-full"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.jsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl md:text-5xl font-bold text-white mb-8",
                                    children: "Ready to capture real attention?"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.jsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://app.yourdomain.com/signup",
                                    className: "inline-block bg-adorix-primary hover:bg-adorix-secondary text-white px-12 py-5 rounded-full font-bold text-lg transition shadow-[0_0_30px_rgba(13,138,158,0.3)] hover:shadow-[0_0_50px_rgba(13,138,158,0.5)] transform hover:-translate-y-1",
                                    children: "Deploy Your First Campaign"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.jsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-8 text-gray-500 text-sm",
                                    children: "No credit card required for demo."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.jsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.jsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.jsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/page.jsx",
                lineNumber: 95,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.jsx",
        lineNumber: 16,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Home;
const __TURBOPACK__default__export__ = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_15898b39._.js.map