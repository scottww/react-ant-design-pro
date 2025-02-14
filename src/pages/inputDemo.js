import React, { useState } from 'react';
import Input from './components/Input';  // 引入封装的 Input 组件

const Form = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>React Input Component</h1>
      <Input 
        value={inputValue}
        onChange={handleInputChange}
        placeholder="请输入内容"
        className="custom-class"
      />
    </div>
  );
};

export default Form;
