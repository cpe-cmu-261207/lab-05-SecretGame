import React from 'react';
import { useState } from 'react'

import Header from './component/Header';
import Todo from './component/Todo';
import Footer from './component/Footer';

function App() {
  return (
    <div>

      {/* header section */}
      <Header></Header>

      {/* todo section */}
      <Todo></Todo>

      {/* footer section */}
      <Footer></Footer>
      
    </div>
  );
}

export default App;
