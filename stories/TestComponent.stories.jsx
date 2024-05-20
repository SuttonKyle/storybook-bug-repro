import React from 'react';
import "./testcomponent.css";

const DataList = (props) =>
  <dl className={props.variant}>
    {props.children}
  </dl>;

const DataPoint = (props) => 
  <div className="value">
    {props.children}
  </div>;


const TestComponentWithItems = (props) => 
  <DataList variant={props.variant}>
    {props.items.map(item => <DataPoint>{item.value}</DataPoint>)}
  </DataList>


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
        items={[
          {value: "value 1"},
          {value: <div>value 2</div>},
        ]}
      />
    </div>,
  };