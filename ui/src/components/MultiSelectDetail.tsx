import React from 'react';
import { Select } from 'antd';
import '../assets/css/MultiSelect.css';

const { Option } = Select;
const options: React.ReactNode[] = [];
options.push(<Option key={'nsfw'}>#NSFW</Option>);
options.push(<Option key={'advance'}>#Advance</Option>);
options.push(<Option key={'hardcore'}>#Hardcore</Option>);
options.push(<Option key={'family'}>#Family</Option>);
options.push(<Option key={'health'}>#Health</Option>);

const children: React.ReactNode[] = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

const handleChange = (value: string[]) => {
  console.log(`selected ${value}`);
};

const App: React.FC = () => (
  <>
    <Select
      mode="multiple"
      allowClear
      style={{
        width: '100%',
        overflow: 'auto',
        position: 'relative',
        marginTop: '1rem'
      }}
      placeholder="Please select"
      onChange={handleChange}
    >
      {options}
    </Select>
  </>
);

export default App;
