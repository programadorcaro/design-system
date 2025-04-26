import{j as e}from"./jsx-runtime-1a9d9a93.js";import{r as b}from"./index-8b3efc3f.js";import{x as n,w as r,f as M}from"./index-e8fd6519.js";import"./_commonjsHelpers-de833af9.js";const C=a=>{const[N,f]=b.useState(!1);return e.jsx(M,{open:N,onOpenChange:f,...a})},W={title:"Components/Dropdown",component:C,tags:["autodocs"],args:{trigger:e.jsx("button",{children:"Click me"}),children:e.jsxs(e.Fragment,{children:[e.jsx(n,{children:"Option 1"}),e.jsx(n,{children:"Option 2"}),e.jsx(n,{children:"Option 3"})]})},argTypes:{trigger:{description:"Element that triggers the dropdown",control:"object"},children:{description:"Dropdown content",control:"object"}},decorators:[a=>e.jsx("div",{style:{padding:"3rem",minHeight:"400px"},children:e.jsx(a,{})})]},o={},t={args:{trigger:e.jsx("div",{className:"w-10 h-10 rounded-full bg-gray-300 cursor-pointer"}),children:e.jsxs(e.Fragment,{children:[e.jsxs(r,{children:[e.jsx(n,{children:"My profile @mia"}),e.jsx(n,{children:"Account settings"}),e.jsx(n,{children:"Device management"}),e.jsx(n,{children:"Sign out"})]}),e.jsxs(r,{title:"SWITCH ACCOUNT",children:[e.jsx(n,{children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-gray-300"}),e.jsxs("div",{children:[e.jsx("div",{className:"text-sm",children:"Mia de Silva"}),e.jsx("div",{className:"text-xs text-gray-500",children:"hi@miadesign.io"})]})]})}),e.jsx(n,{children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-gray-300"}),e.jsxs("div",{children:[e.jsx("div",{className:"text-sm",children:"Caitlyn King"}),e.jsx("div",{className:"text-xs text-gray-500",children:"caitlyn@stripe.com"})]})]})}),e.jsx(n,{children:"Sign out of all accounts"})]})]})}},s={args:{trigger:e.jsx("button",{className:"px-4 py-2 bg-gray-800 rounded-md",children:"Menu"}),children:e.jsxs(r,{children:[e.jsx(n,{children:"Edit"}),e.jsx(n,{children:"Duplicate"}),e.jsx(n,{children:"Share"}),e.jsx(n,{children:"Delete"})]})}},i={args:{trigger:e.jsx("button",{className:"px-4 py-2 bg-gray-800 rounded-md",children:"Actions"}),children:e.jsxs(r,{children:[e.jsx(n,{children:"Edit file"}),e.jsx(n,{children:"Make a copy"}),e.jsx(n,{children:"Share with others"}),e.jsx(n,{className:"text-red-500",children:"Delete"})]})}},d={args:{trigger:e.jsx("button",{className:"px-4 py-2 bg-gray-800 rounded-md",children:"Options"}),children:e.jsxs(e.Fragment,{children:[e.jsxs(r,{title:"Account",children:[e.jsx(n,{children:"Profile"}),e.jsx(n,{children:"Settings"})]}),e.jsxs(r,{title:"Team",children:[e.jsx(n,{children:"Invite members"}),e.jsx(n,{children:"Team settings"})]}),e.jsx(r,{children:e.jsx(n,{className:"text-red-500",children:"Sign out"})})]})}};var c,l,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,g,x;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    trigger: <div className="w-10 h-10 rounded-full bg-gray-300 cursor-pointer">
        {/* Avatar placeholder */}
      </div>,
    children: <>
        <DropdownSection>
          <DropdownItem>My profile @mia</DropdownItem>
          <DropdownItem>Account settings</DropdownItem>
          <DropdownItem>Device management</DropdownItem>
          <DropdownItem>Sign out</DropdownItem>
        </DropdownSection>

        <DropdownSection title="SWITCH ACCOUNT">
          <DropdownItem>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-300" />
              <div>
                <div className="text-sm">Mia de Silva</div>
                <div className="text-xs text-gray-500">hi@miadesign.io</div>
              </div>
            </div>
          </DropdownItem>
          <DropdownItem>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-300" />
              <div>
                <div className="text-sm">Caitlyn King</div>
                <div className="text-xs text-gray-500">caitlyn@stripe.com</div>
              </div>
            </div>
          </DropdownItem>
          <DropdownItem>Sign out of all accounts</DropdownItem>
        </DropdownSection>
      </>
  }
}`,...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var h,u,w;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    trigger: <button className="px-4 py-2 bg-gray-800 rounded-md">Menu</button>,
    children: <DropdownSection>
        <DropdownItem>Edit</DropdownItem>
        <DropdownItem>Duplicate</DropdownItem>
        <DropdownItem>Share</DropdownItem>
        <DropdownItem>Delete</DropdownItem>
      </DropdownSection>
  }
}`,...(w=(u=s.parameters)==null?void 0:u.docs)==null?void 0:w.source}}};var D,j,I;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    trigger: <button className="px-4 py-2 bg-gray-800 rounded-md">Actions</button>,
    children: <DropdownSection>
        <DropdownItem>Edit file</DropdownItem>
        <DropdownItem>Make a copy</DropdownItem>
        <DropdownItem>Share with others</DropdownItem>
        <DropdownItem className="text-red-500">Delete</DropdownItem>
      </DropdownSection>
  }
}`,...(I=(j=i.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var S,v,y;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    trigger: <button className="px-4 py-2 bg-gray-800 rounded-md">Options</button>,
    children: <>
        <DropdownSection title="Account">
          <DropdownItem>Profile</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
        </DropdownSection>
        <DropdownSection title="Team">
          <DropdownItem>Invite members</DropdownItem>
          <DropdownItem>Team settings</DropdownItem>
        </DropdownSection>
        <DropdownSection>
          <DropdownItem className="text-red-500">Sign out</DropdownItem>
        </DropdownSection>
      </>
  }
}`,...(y=(v=d.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const P=["Default","ProfileDropdown","SimpleMenu","WithIcons","MultipleSections"];export{o as Default,d as MultipleSections,t as ProfileDropdown,s as SimpleMenu,i as WithIcons,P as __namedExportsOrder,W as default};
