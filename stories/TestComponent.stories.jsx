import React from 'react';
import "./testcomponent.css";

const TestComponentWithItems = (props) => 
  <div className={props.variant}>
    <div className="value">{props.item.value}</div>
  </div>

export default {
  title: "Test Component",
  component: TestComponentWithItems,
}

export const TestComponent = {
    args: {
      variant: "black",
    },
    argTypes: {
      variant: {
        control: "select",
        options: ["black", "red", "blue"],
      },
    },
    render: (args) => <div>
      <TestComponentWithItems
        variant={args.variant}
        item={{value: <div>value 1</div>}}
      />
    </div>,
  };