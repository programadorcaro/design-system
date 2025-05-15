import{j as e}from"./jsx-runtime-1a9d9a93.js";import{r as h}from"./index-8b3efc3f.js";import{N as o}from"./index-e3b98a90.js";import"./_commonjsHelpers-de833af9.js";const E={title:"Components/Tabs",component:o},r=[{label:"Mp4",value:"mp4"},{label:"GIF",value:"gif"}],s=()=>e.jsx("div",{className:"w-1/3",children:e.jsx(o,{label:"Export as",labelProps:{className:"text-white"},tabs:r,onChange:a=>console.log("Selected tab:",a)})}),t=()=>{const[a,x]=h.useState("gif");return e.jsx("div",{className:"w-1/3",children:e.jsx(o,{label:"Export as (Controlled)",labelProps:{className:"text-white"},tabs:r,defaultActive:a,onChange:g=>x(g.value)})})},l=()=>e.jsx("div",{className:"w-2/3",children:e.jsx(o,{tabs:[...r,{label:"MKV",value:"mkv"},{label:"MP3",value:"mp3"}],label:"Export as",labelProps:{className:"text-white"},onChange:a=>console.log("Selected tab:",a)})});var n,c,i;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`() => <div className="w-1/3">
    <Tabs label="Export as" labelProps={{
    className: "text-white"
  }} tabs={tabOptions} onChange={tab => console.log("Selected tab:", tab)} />
  </div>`,...(i=(c=s.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var b,p,m;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const [active, setActive] = useState("gif");
  return <div className="w-1/3">
      <Tabs label="Export as (Controlled)" labelProps={{
      className: "text-white"
    }} tabs={tabOptions} defaultActive={active} onChange={tab => setActive(tab.value)} />
    </div>;
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,u,v;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
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
}`,...(v=(u=l.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};const S=["Basic","Controlled","MultipleTabs"];export{s as Basic,t as Controlled,l as MultipleTabs,S as __namedExportsOrder,E as default};
