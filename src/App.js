import React, { Component } from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import Periodontics from './pages/periodontics/Periodontics';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Meet from './pages/meet/Meet';
import Treatments from './pages/treatments/Treatments';
import Faqs from './pages/faqs/Faqs';
import Visit from './pages/visit/Visit';

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
              <Route path="/meet" component={Meet} exact />
              <Route path="/treatments" component={Treatments} exact />
              <Route path="/faqs" component={Faqs} exact />
              <Route path="/visit" component={Visit} exact />
            </Switch>
          </main>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
