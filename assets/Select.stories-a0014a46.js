import{j as a}from"./jsx-runtime-1a9d9a93.js";import{H as l}from"./index-2503b743.js";import{R as j}from"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const D={title:"Form/Select",component:l,tags:["autodocs"],args:{selectSize:"md",variant:"default"},argTypes:{selectSize:{description:"Size of the select",control:"inline-radio",options:["sm","md","lg"],table:{defaultValue:{summary:"md"}}},variant:{description:"Visual variant of the select",control:"inline-radio",options:["default","filled"],table:{defaultValue:{summary:"default"}}},disabled:{description:"Disabled state of the select",control:"boolean"}}},c=[{value:"Option1",label:"Option 1"},{value:"Option2",label:"Option 2"},{value:"Option3",label:"Option 3"},{value:"Option4",label:"Option 4"},{value:"Option5",label:"Option 5"}],n={args:{label:"Select an option"},render:t=>a.jsx(l,{...t,children:c.map(e=>a.jsx(l.Option,{value:e.value,label:e.label},e.value))})},s={args:{label:"Select an option",value:"Option2"},render:t=>a.jsx(l,{...t,children:c.map(e=>a.jsx(l.Option,{value:e.value,label:e.label},e.value))})},r={args:{label:"Select an option",disabled:!0},render:t=>a.jsx(l,{...t,children:c.map(e=>a.jsx(l.Option,{value:e.value,label:e.label},e.value))})},i={render:()=>{const[t,e]=j.useState("");return a.jsxs("div",{className:"space-y-4",children:[a.jsx(l,{label:"Controlled Select",value:t,onChange:o=>e(o),children:c.map(o=>a.jsx(l.Option,{value:o.value,label:o.label},o.value))}),a.jsxs("div",{className:"text-sm text-gray-600",children:["Selected value: ",t||"None"]})]})}};var p,u,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "Select an option"
  },
  render: args => <Select {...args}>
      {options.map(option => <Select.Option key={option.value} value={option.value} label={option.label} />)}
    </Select>
}`,...(d=(u=n.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var m,v,b;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "Select an option",
    value: "Option2"
  },
  render: args => <Select {...args}>
      {options.map(option => <Select.Option key={option.value} value={option.value} label={option.label} />)}
    </Select>
}`,...(b=(v=s.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var S,g,O;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: "Select an option",
    disabled: true
  },
  render: args => <Select {...args}>
      {options.map(option => <Select.Option key={option.value} value={option.value} label={option.label} />)}
    </Select>
}`,...(O=(g=r.parameters)==null?void 0:g.docs)==null?void 0:O.source}}};var x,f,h;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState("");
    return <div className="space-y-4">
        <Select label="Controlled Select" value={value} onChange={newValue => setValue(newValue)}>
          {options.map(option => <Select.Option key={option.value} value={option.value} label={option.label} />)}
        </Select>
        <div className="text-sm text-gray-600">
          Selected value: {value || "None"}
        </div>
      </div>;
  }
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const k=["Default","WithValue","Disabled","Controlled"];export{i as Controlled,n as Default,r as Disabled,s as WithValue,k as __namedExportsOrder,D as default};
