import{j as e}from"./jsx-runtime-1a9d9a93.js";import{r as x}from"./index-8b3efc3f.js";import{B as r}from"./index-769689f8.js";import"./_commonjsHelpers-de833af9.js";const S={title:"Form/Checkbox",component:r},c=()=>e.jsx("div",{className:"w-1/3",children:e.jsx(r,{checked:!0,onChange:()=>console.log("checked")})}),s=()=>e.jsx("div",{className:"w-1/3",children:e.jsx(r,{checked:!1,onChange:()=>console.log("checked")})}),o=()=>{const[p,C]=x.useState(!1);return e.jsx("div",{className:"w-1/3",children:e.jsx(r,{checked:p,onChange:()=>C(u=>!u)})})};var a,t,n;c.parameters={...c.parameters,docs:{...(a=c.parameters)==null?void 0:a.docs,source:{originalSource:`() => <div className="w-1/3">
    <Checkbox checked={true} onChange={() => console.log("checked")} />
  </div>`,...(n=(t=c.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var d,h,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`() => <div className="w-1/3">
    <Checkbox checked={false} onChange={() => console.log("checked")} />
  </div>`,...(l=(h=s.parameters)==null?void 0:h.docs)==null?void 0:l.source}}};var m,i,k;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const [checked, setChecked] = useState(false);
  return <div className="w-1/3">
      <Checkbox checked={checked} onChange={() => setChecked(prevState => !prevState)} />
    </div>;
}`,...(k=(i=o.parameters)==null?void 0:i.docs)==null?void 0:k.source}}};const w=["Checked","Unchecked","Controlled"];export{c as Checked,o as Controlled,s as Unchecked,w as __namedExportsOrder,S as default};
