import{j as a}from"./jsx-runtime-1a9d9a93.js";import{a as t,Z as o}from"./index-d019e23c.js";import{R as k}from"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const w={title:"Form/Select",component:t,tags:["autodocs"],args:{selectSize:"md",variant:"default"},argTypes:{selectSize:{description:"Size of the select",control:"inline-radio",options:["sm","md","lg"],table:{defaultValue:{summary:"md"}}},variant:{description:"Visual variant of the select",control:"inline-radio",options:["default","filled"],table:{defaultValue:{summary:"default"}}},disabled:{description:"Disabled state of the select",control:"boolean"}}},r=[{value:"Option1",label:"Option 1"},{value:"Option2",label:"Option 2"},{value:"Option3",label:"Option 3"},{value:"Option4",label:"Option 4"},{value:"Option5",label:"Option 5"}],s={args:{label:"Select an option"},render:l=>a.jsx(t,{...l,children:r.map(e=>a.jsx(o,{value:e.value,label:e.label},e.value))})},i={args:{label:"Select an option"},render:l=>a.jsx(t,{...l,inputClassName:"bg-red-500 h-10",children:r.map(e=>a.jsx(o,{value:e.value,label:e.label},e.value))})},c={args:{label:"Select an option",value:"Option2"},render:l=>a.jsx(t,{...l,children:r.map(e=>a.jsx(o,{value:e.value,label:e.label},e.value))})},u={args:{label:"Select an option",disabled:!0},render:l=>a.jsx(t,{...l,children:r.map(e=>a.jsx(o,{value:e.value,label:e.label},e.value))})},p={render:()=>{const[l,e]=k.useState("");return a.jsxs("div",{className:"space-y-4",children:[a.jsx(t,{label:"Controlled Select",value:l,onChange:n=>e(n),children:r.map(n=>a.jsx(o,{value:n.value,label:n.label},n.value))}),a.jsxs("div",{className:"text-sm text-gray-600",children:["Selected value: ",l||"None"]})]})}};var d,m,v;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: "Select an option"
  },
  render: args => <Select {...args}>
      {options.map(option => <SelectOption key={option.value} value={option.value} label={option.label} />)}
    </Select>
}`,...(v=(m=s.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var b,S,g;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: "Select an option"
  },
  render: args => <Select {...args} inputClassName="bg-red-500 h-10">
      {options.map(option => <SelectOption key={option.value} value={option.value} label={option.label} />)}
    </Select>
}`,...(g=(S=i.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var x,h,O;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: "Select an option",
    value: "Option2"
  },
  render: args => <Select {...args}>
      {options.map(option => <SelectOption key={option.value} value={option.value} label={option.label} />)}
    </Select>
}`,...(O=(h=c.parameters)==null?void 0:h.docs)==null?void 0:O.source}}};var f,j,y;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: "Select an option",
    disabled: true
  },
  render: args => <Select {...args}>
      {options.map(option => <SelectOption key={option.value} value={option.value} label={option.label} />)}
    </Select>
}`,...(y=(j=u.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var C,V,N;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState("");
    return <div className="space-y-4">
        <Select label="Controlled Select" value={value} onChange={newValue => setValue(newValue)}>
          {options.map(option => <SelectOption key={option.value} value={option.value} label={option.label} />)}
        </Select>
        <div className="text-sm text-gray-600">
          Selected value: {value || "None"}
        </div>
      </div>;
  }
}`,...(N=(V=p.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};const E=["Default","WithCustomStyle","WithValue","Disabled","Controlled"];export{p as Controlled,s as Default,u as Disabled,i as WithCustomStyle,c as WithValue,E as __namedExportsOrder,w as default};
