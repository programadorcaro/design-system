import{j as k}from"./jsx-runtime-1a9d9a93.js";import{v as U}from"./index-90dbc78c.js";import{r as q}from"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const J={title:"Form/TextInput",component:U,tags:["autodocs"],args:{placeholder:"Type your text",inputSize:"md",variant:"default"},argTypes:{inputSize:{description:"Size of the input",control:"inline-radio",options:["sm","md","lg"],table:{defaultValue:{summary:"md"}}},variant:{description:"Visual variant of the input",control:"inline-radio",options:["default","filled","withClear"],table:{defaultValue:{summary:"default"}}},disabled:{description:"Disabled state of the input",control:"boolean"},placeholder:{description:"Placeholder text",control:"text"}}},e={args:{variant:"default"}},a={args:{inputSize:"sm"}},r={args:{inputSize:"md"}},t={args:{inputSize:"lg"}},s={args:{disabled:!0}},o={args:{variant:"filled"}},n={render:_=>{const[O,c]=q.useState("Input Field");return k.jsx(U,{..._,variant:"withClear",value:O,onChange:R=>c(R.target.value),onClear:()=>c(""),placeholder:"Input Field"})}},l={args:{label:"Email",placeholder:"Enter your email"}},i={args:{label:"Username",labelProps:{className:"text-red-500 text-lg"},placeholder:"Enter your username"}};var u,d,p;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: "default"
  }
}`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,g,h;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    inputSize: "sm"
  }
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var S,b,f;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    inputSize: "md"
  }
}`,...(f=(b=r.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var v,x,C;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    inputSize: "lg"
  }
}`,...(C=(x=t.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var y,z,E;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(E=(z=s.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var F,V,I;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    variant: "filled"
  }
}`,...(I=(V=o.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var L,W,D;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState("Input Field");
    return <TextInput {...args} variant="withClear" value={value} onChange={e => setValue(e.target.value)} onClear={() => setValue("")} placeholder="Input Field" />;
  }
}`,...(D=(W=n.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var T,j,w;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: "Email",
    placeholder: "Enter your email"
  }
}`,...(w=(j=l.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var P,M,N;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: "Username",
    labelProps: {
      className: "text-red-500 text-lg"
    },
    placeholder: "Enter your username"
  }
}`,...(N=(M=i.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};const K=["Default","Small","Medium","Large","Disabled","Filled","WithClear","WithLabel","WithCustomLabel"];export{e as Default,s as Disabled,o as Filled,t as Large,r as Medium,a as Small,n as WithClear,i as WithCustomLabel,l as WithLabel,K as __namedExportsOrder,J as default};
