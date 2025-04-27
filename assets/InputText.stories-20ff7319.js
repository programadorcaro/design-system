import{j as M}from"./jsx-runtime-1a9d9a93.js";import{m as j}from"./index-a606d923.js";import{r as W}from"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const k={title:"Form/TextInput",component:j,tags:["autodocs"],args:{placeholder:"Type your text",inputSize:"md",variant:"default"},argTypes:{inputSize:{description:"Size of the input",control:"inline-radio",options:["sm","md","lg"],table:{defaultValue:{summary:"md"}}},variant:{description:"Visual variant of the input",control:"inline-radio",options:["default","filled","withClear"],table:{defaultValue:{summary:"default"}}},disabled:{description:"Disabled state of the input",control:"boolean"},placeholder:{description:"Placeholder text",control:"text"}}},e={args:{variant:"default"}},a={args:{inputSize:"sm"}},r={args:{inputSize:"md"}},t={args:{inputSize:"lg"}},s={args:{disabled:!0}},o={args:{variant:"filled"}},n={render:w=>{const[E,i]=W.useState("Input Field");return M.jsx(j,{...w,variant:"withClear",value:E,onChange:L=>i(L.target.value),onClear:()=>i(""),placeholder:"Input Field"})}};var l,u,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: "default"
  }
}`,...(d=(u=e.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var c,p,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    inputSize: "sm"
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,S,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    inputSize: "md"
  }
}`,...(f=(S=r.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var h,v,x;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    inputSize: "lg"
  }
}`,...(x=(v=t.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var b,z,C;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(C=(z=s.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var F,V,I;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    variant: "filled"
  }
}`,...(I=(V=o.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var y,D,T;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("Input Field");
    return <TextInput {...args} variant="withClear" value={value} onChange={e => setValue(e.target.value)} onClear={() => setValue("")} placeholder="Input Field" />;
  }
}`,...(T=(D=n.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};const q=["Default","Small","Medium","Large","Disabled","Filled","WithClear"];export{e as Default,s as Disabled,o as Filled,t as Large,r as Medium,a as Small,n as WithClear,q as __namedExportsOrder,k as default};
