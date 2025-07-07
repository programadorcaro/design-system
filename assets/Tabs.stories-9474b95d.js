import{j as e}from"./jsx-runtime-1a9d9a93.js";import{r as S}from"./index-8b3efc3f.js";import{A as s}from"./index-d019e23c.js";import"./_commonjsHelpers-de833af9.js";const T={title:"Components/Tabs",component:s},n=[{label:"Mp4",value:"mp4"},{label:"GIF",value:"gif"}],t=()=>e.jsx("div",{className:"w-1/3",children:e.jsx(s,{label:"Export as",labelProps:{className:"text-white"},tabs:n,onChange:a=>console.log("Selected tab:",a)})}),l=()=>{const[a,N]=S.useState("gif");return e.jsx("div",{className:"w-1/3",children:e.jsx(s,{label:"Export as (Controlled)",labelProps:{className:"text-white"},tabs:n,defaultActive:a,onChange:C=>N(C.value)})})},o=()=>e.jsx("div",{className:"w-2/3",children:e.jsx(s,{tabs:[...n,{label:"MKV",value:"mkv"},{label:"MP3",value:"mp3"}],label:"Export as",labelProps:{className:"text-white"},onChange:a=>console.log("Selected tab:",a)})}),r=()=>e.jsx("div",{className:"w-1/3",children:e.jsx(s,{label:"Export as",labelProps:{className:"text-white"},tabs:n,disabled:!0,onChange:a=>console.log("Selected tab:",a)})});var c,i,b;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`() => <div className="w-1/3">
    <Tabs label="Export as" labelProps={{
    className: "text-white"
  }} tabs={tabOptions} onChange={tab => console.log("Selected tab:", tab)} />
  </div>`,...(b=(i=t.parameters)==null?void 0:i.docs)==null?void 0:b.source}}};var p,d,m;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const [active, setActive] = useState("gif");
  return <div className="w-1/3">
      <Tabs label="Export as (Controlled)" labelProps={{
      className: "text-white"
    }} tabs={tabOptions} defaultActive={active} onChange={tab => setActive(tab.value)} />
    </div>;
}`,...(m=(d=l.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,v,x;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return <div className="w-2/3">
      <Tabs tabs={[...tabOptions, {
      label: "MKV",
      value: "mkv"
    }, {
      label: "MP3",
      value: "mp3"
    }]} label="Export as" labelProps={{
      className: "text-white"
    }} onChange={tab => console.log("Selected tab:", tab)} />
    </div>;
}`,...(x=(v=o.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var g,h,w;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`() => <div className="w-1/3">
    <Tabs label="Export as" labelProps={{
    className: "text-white"
  }} tabs={tabOptions} disabled onChange={tab => console.log("Selected tab:", tab)} />
  </div>`,...(w=(h=r.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};const A=["Basic","Controlled","MultipleTabs","Disabled"];export{t as Basic,l as Controlled,r as Disabled,o as MultipleTabs,A as __namedExportsOrder,T as default};
