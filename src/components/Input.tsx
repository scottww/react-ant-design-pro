import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

// 输入框组件
const Input = ({ 
  value, 
  onChange, 
  placeholder, 
  type = 'text', 
  disabled = false, 
  className = '', 
  style = {} 
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className={`input-component ${className}`}  // 可以添加传入的className
      style={style}  // 支持传入style
    />
  );
};

// PropTypes 定义属性类型（可选）
Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
};

// 默认属性
Input.defaultProps = {
  placeholder: '',
  type: 'text',
  disabled: false,
  className: '',
  style: {},
};

export default Input;
