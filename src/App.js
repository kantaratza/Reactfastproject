import React, { Component } from 'react';
import bg from './pic/bg.gif';
import './css/App.css';
import './css/bootstrap.css'

import {Time,Zone,NewZone,NewTime} from './Time';




class App extends Component {

  constructor() { super(); this.state = { Contime: "23 : 59",
                                          InputHr: 23 ,
                                          Inputmin: 59,
                                          zoneOld: 12,
                                          zoneNew: 12
                                        } 
                }

    onHrChanged(newHr) {
      this.setState({ InputHr: newHr })
        let newhr = ((newHr - (this.state.zoneOld-12)) + (this.state.zoneNew-12));
        let hrstring = "";
          if (newhr >= 24){ hrstring = " (Tomorrow) " + (newhr-24).toString() ;  }
          else if (newhr <= -1){ hrstring = " (Yesterday) " + (newhr+24).toString() ;  }
          else {hrstring = newhr.toString();}            
        let timeCon = (hrstring) + " : " + (this.state.Inputmin.toString());
      this.setState({Contime: timeCon})
    }
    onMinChanged(newMin) {
      this.setState({ Inputmin: newMin })
        let newhr = ((this.state.InputHr - (this.state.zoneOld-12)) + (this.state.zoneNew-12));
        let hrstring = "";
          if (newhr >= 24){ hrstring = " (Tomorrow) " + (newhr-24).toString() ;  }
          else if (newhr <= -1){ hrstring = " (Yesterday) " + (newhr+24).toString() ;  }
          else {hrstring = newhr.toString();}        
        let timeCon = (hrstring) + " : " + (newMin.toString());
      this.setState({Contime: timeCon})
    }
    onZoneChanged(newzoneOld) {
      this.setState({ zoneOld: newzoneOld })
        let newhr = ((this.state.InputHr - (newzoneOld-12)) + (this.state.zoneNew-12));
        let hrstring = "";
          if (newhr >= 24){ hrstring = " (Tomorrow) " + (newhr-24).toString() ;  }
          else if (newhr <= -1){ hrstring = " (Yesterday) " + (newhr+24).toString()  ; }
          else {hrstring = newhr.toString();}
        let timeCon = (hrstring) + " : " + (this.state.Inputmin.toString());
      this.setState({Contime: timeCon})
    }
    onZoneNewChanged(newzoneNew) {
      this.setState({ zoneNew: newzoneNew })
        let newhr = ((this.state.InputHr - (this.state.zoneOld-12)) + (newzoneNew-12));
        let hrstring = "";
          if (newhr >= 24){ hrstring = " (Tomorrow) " + (newhr-24).toString()  ; }
          else if (newhr <= -1){ hrstring = " (Yesterday) " + (newhr+24).toString() ;  }
          else {hrstring = newhr.toString();}            
        let timeCon = (hrstring) + " : " + (this.state.Inputmin.toString());
      this.setState({Contime: timeCon})
    }

/* ConvTime(InputHr,Inputmin,zoneOld,zoneNew) { 
  let newhr = ((InputHr - zoneOld)+zoneNew);
  let timeCon = (newhr.toString()) + " : " + (Inputmin.toString();
  this.setState({Contime: timeCon})
}*/

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={bg} className="App-logo" alt="carindark" />
          <h2>Time-zone Converter</h2>
          {/*<h3>{this.state.Contime} =   {this.state.Inputmin} : {this.state.InputHr} - {this.state.zoneOld} + {this.state.zoneNew}</h3>*/}
        </div>

                <div className="row" >
                        <div className="col-md-3">
                          <Time initInputHr={this.state.InputHr}
                                initInputmin={this.state.Inputmin}
                                ParnewHr={(newHr) => this.onHrChanged(newHr) }
                                ParnewMin={(newMin) => this.onMinChanged(newMin) }/>
                        </div>
                        <div className="col-md-3">
                          <Zone initzoneOld={this.state.zoneOld}
                                Paroldzone={(newzoneOld) => this.onZoneChanged(newzoneOld) } />
                        </div>
                        <div className="col-md-3">
                          <NewZone initzoneNew={this.state.zoneNew}
                                  Parnewzone={(newzoneNew) => this.onZoneNewChanged(newzoneNew) }/>
                        </div> 
                        <div className="col-md-3">
                          <NewTime ConTime={this.state.Contime}/>
                        </div>
                </div>
      </div>
    );
  }


}

export default App;
