import{j as x}from"./jsx-runtime-BjgbQsUx.js";var p=Object.defineProperty,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,o=(s,e,t)=>e in s?p(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,r=(s,e)=>{for(var t in e||(e={}))d.call(e,t)&&o(s,t,e[t]);if(i)for(var t of i(e))m.call(e,t)&&o(s,t,e[t]);return s},n=(s,e)=>{var t={};for(var a in s)d.call(s,a)&&e.indexOf(a)<0&&(t[a]=s[a]);if(s!=null&&i)for(var a of i(s))e.indexOf(a)<0&&m.call(s,a)&&(t[a]=s[a]);return t};function f(s,{insertAt:e}={}){if(typeof document>"u")return;const t=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",e==="top"&&t.firstChild?t.insertBefore(a,t.firstChild):t.appendChild(a),a.styleSheet?a.styleSheet.cssText=s:a.appendChild(document.createTextNode(s))}f(`@tailwind base;
@tailwind components;
@tailwind utilities;
`);function u(s){var e=s,{className:t=""}=e,a=n(e,["className"]);return x.jsx("div",r({className:`p-4 rounded-md bg-black font-default ${t}`},a))}u.displayName="Box";var c={sm:"px-4 py-2 h-10 text-sm",md:"px-5 py-3 h-12 text-md",lg:"px-6 py-4 h-14 text-lg",xl:"px-8 py-5 h-16 text-xl"};function y(s){var e=s,{size:t="sm",className:a=""}=e,l=n(e,["size","className"]);return x.jsx("button",r({className:`
        font-default font-medium text-center box-border rounded-sm
        flex items-center justify-center gap-2 cursor-pointer
        ${c[t]}
        ${a}
      `},l))}y.displayName="Button";var g={sm:"text-xl",md:"text-2xl",lg:"text-4xl",xl:"text-5xl","2xl":"text-6xl","3xl":"text-7xl","4xl":"text-8xl","5xl":"text-9xl"};function N(s){var e=s,{size:t="md",className:a=""}=e,l=n(e,["size","className"]);return x.jsx("h2",r({className:`
        font-default leading-tight m-0 text-gray-300
        ${g[t]}
        ${a}
      `},l))}N.displayName="Heading";var b={sm:"px-3 py-2 text-sm",md:"px-4 py-3 text-md",lg:"px-5 py-4 text-lg"};function v(s){var e=s,{inputSize:t="md",className:a=""}=e,l=n(e,["inputSize","className"]);return x.jsx("input",r({className:`
        font-default box-border w-full rounded-sm
        bg-gray-900 text-white
        placeholder:text-gray-400
        focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
        disabled:cursor-not-allowed disabled:opacity-50
        ${b[t]}
        ${a}
      `},l))}v.displayName="TextInput";var h={xxs:"text-xxs",xs:"text-xs",sm:"text-sm",md:"text-base",lg:"text-lg",xl:"text-xl","2xl":"text-2xl","4xl":"text-4xl","5xl":"text-5xl","6xl":"text-6xl","7xl":"text-7xl","8xl":"text-8xl","9xl":"text-9xl"};function _(s){var e=s,{size:t="md",className:a=""}=e,l=n(e,["size","className"]);return x.jsx("p",r({className:`
        font-default leading-base m-0 text-gray-300
        ${h[t]}
        ${a}
      `},l))}_.displayName="Text";export{u as B,N as H,_ as T,y as a,v as b};
