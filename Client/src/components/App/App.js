import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const PageOne = () => {
  return <div>PageOne</div>;
}

const PageTwo = () => {
  return <div>PageTwo</div>;
}

const App = () => {
  return (
    <section>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={pageOne} />
          <Route exact path="/pagetwo" component={pageTwo} />
        </div>
      </BrowserRouter>
      App
    </section>
  )
};

export default App;