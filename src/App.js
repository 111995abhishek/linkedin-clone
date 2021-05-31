import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';

function App() {
  return (
    <div className="app">
      {/* header */}
      <Header/>
      <div className="app_body">
        <Sidebar/>
        <Feed/>
      </div>
        {/* side-bar */}
        {/* Feed */}
        {/* widgets */}
    </div>
  );
}

export default App;
