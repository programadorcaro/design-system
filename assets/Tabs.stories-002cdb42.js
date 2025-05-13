import{j as a}from"./jsx-runtime-1a9d9a93.js";import{N as o}from"./index-fb6ddde3.js";import{r as x}from"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const h=[{label:"Mp4",value:"mp4"},{label:"GIF",value:"gif"}],P={title:"Components/Tabs",component:o,tags:["autodocs"],args:{label:"Export as",labelProps:{className:"text-inherit"},tabs:h},argTypes:{label:{description:"Label for the Tabs group",control:"text",table:{defaultValue:{summary:"Export as"}}},labelProps:{description:"Props for the label element",control:"object"},tabs:{description:"Array of tab options",control:!1},onChange:{description:"Callback when tab changes",control:!1},defaultActive:{description:"Default active tab value (for controlled usage)",control:"text"}}},t={args:{},render:e=>a.jsx("div",{className:"w-72",children:a.jsx(o,{...e,onChange:s=>console.log("Selected tab:",s)})})},r={args:{},render:e=>a.jsx("div",{className:"w-2/3",children:a.jsx(o,{tabs:[...e.tabs,{label:"MKV",value:"mkv"},{label:"MP3",value:"mp3"}],label:e.label,labelProps:e.labelProps,onChange:s=>console.log("Selected tab:",s)})})},l={args:{label:"Export as (Controlled)",defaultActive:"gif"},render:e=>{const[s,v]=x.useState("gif");return a.jsx("div",{className:"w-72",children:a.jsx(o,{...e,defaultActive:s,onChange:f=>v(f.value)})})}};var n,c,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {},
  render: args => <div className="w-72">
      <Tabs {...args} onChange={tab => console.log("Selected tab:", tab)} />
    </div>
}`,...(i=(c=t.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var b,d,p;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {},
  render: args => <div className="w-2/3">
      <Tabs tabs={[...args.tabs, {
      label: "MKV",
      value: "mkv"
    }, {
      label: "MP3",
      value: "mp3"
    }]} label={args.label} labelProps={args.labelProps} onChange={tab => console.log("Selected tab:", tab)} />
    </div>
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,u,g;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "Export as (Controlled)",
    defaultActive: "gif"
  },
  render: args => {
    const [active, setActive] = useState("gif");
    return <div className="w-72">
        <Tabs {...args} defaultActive={active} onChange={tab => setActive(tab.value)} />
      </div>;
  }
}`,...(g=(u=l.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const S=["Basic","MultipleTabs","Controlled"];export{t as Basic,l as Controlled,r as MultipleTabs,S as __namedExportsOrder,P as default};
