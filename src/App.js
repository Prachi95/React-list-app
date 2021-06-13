import React from 'react';
import University from "./Components/University";
import UniversityDetail from "./Components/UniversityDetail";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

const App = () => {

  return (
    <BrowserRouter>
      <div className="App-container">
        <header className="App-data-container App-header">
          <div className="App-header-title">Top Universities in India</div>
        </header>
        <main className="App-data-container App-main">
          <Switch>
            <Route path="/" exact component={University}></Route>
            <Route path="/detail/:id" component={UniversityDetail}></Route>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
   
  );
}

export default App;
