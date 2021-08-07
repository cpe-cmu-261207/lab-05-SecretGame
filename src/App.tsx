import React from 'react';
import { useState } from 'react'

import Header from './component/Header';
import Todo from './component/Todo';

function App() {
  return (
    <div>

      {/* header section */}
      <Header></Header>

      {/* todo section */}
      <Todo></Todo>

      {/* footer section */}
      <p className='text-center text-gray-400'> © 2021 by Winnapat kaewmora </p>
    </div>
  );
}

export default App;
