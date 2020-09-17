import React from 'react';
import router from 'umi/router';

export default () => {
  return (
    <div>
      <p>detail Page</p>
      <button
        onClick={() => {
          router.goBack();
        }}
      >
        返回
      </button>
    </div>
  );
};
