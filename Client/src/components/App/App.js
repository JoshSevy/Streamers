import React from 'react';
import { Route } from 'react-router-dom';
import StreamCreate from '../Streams/StreamCreate';
import StreamDelete from '../Streams/StreamDelete';
import StreamEdit from '../Streams/StreamEdit';
import StreamList from '../Streams/StreamList';
import StreamShow from '../Streams/StreamShow';
import Header from '../Header/Header'

const App = () => {
  return (
    <section className="ui container">
      <Header />
        <div>
        <Route exact path="/" component={StreamList} />
        <Route exact path="/streams/new" component={StreamCreate} />
        <Route exact path="/streams/edit" component={StreamEdit} />
        <Route exact path="/streams/delete" component={StreamDelete} />
        <Route exact path="/streams/show" component={StreamShow} />
        </div>
    </section>
  )
};

export default App;