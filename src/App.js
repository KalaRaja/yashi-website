import React, { Component } from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import Periodontics from './pages/periodontics/Periodontics';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

class App extends Component {

  render() {
    return (
      <div className="body">
        <div className='main'>
          <Header />
          <main>
            <Switch>
              <Route path="/home" component={Home} exact />
              <Route path="/periodontics" component={Periodontics} exact />
            </Switch>
          </main>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
