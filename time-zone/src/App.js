import React, { Component } from 'react';
import bg from './pic/bg.gif';
import './css/App.css';
import './css/bootstrap.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={bg} className="App-logo" alt="carindark" />
          <h2>Time-zone Converter</h2>
        </div>

                <div className="row" >
                        <div className="col-md-3">
                              <div className="col-md-12">
                                <div className="container-fluid" >
                                  <h3>Time</h3>
                                </div>
                              </div>
                        </div>
                        <div className="col-md-3">
                              <div className="col-md-12">
                                <div className="container-fluid" >
                                  <h3>Zone</h3>
                                </div>
                              </div>
                        </div>
                        <div className="col-md-3">
                              <div className="col-md-12">
                                <div className="container-fluid" >
                                  <h3>New-Zone</h3>
                                </div>
                              </div>
                        </div> 
                        <div className="col-md-3">
                              <div className="col-md-12">
                                <div className="container-fluid" >
                                  <h3>New-Time</h3>
                                </div>
                              </div>
                        </div>
                </div>

      </div>






    );
  }
}

export default App;
