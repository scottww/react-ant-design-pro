import React from 'react';
import Link from 'umi/link';

export default () => {
  return (
    <div>
      <p>Home Page</p>
      <div>
        <h1>Page index</h1>
        <Link to="/detail">go to /detail</Link>
      </div>
    </div>
  );
};
