import React, { Component , PropTypes } from 'react';
import './css/Time.css'
import './css/bootstrap.css'

export class Time extends Component {


  constructor({ initInputHr,initInputmin }) {
    super();
    this.state = {	inputHr: initInputHr,
 					inputmin: initInputmin }
  }

	handleChangeHr = (event) => {
		if(event.target.value >= 25)
		{
			event.target.value = 24
		}
		if(event.target.value <= 0)
		{
			event.target.value = 1
		}
		let newHr = event.target.value;
		this.setState({inputHr: newHr });
		this.props.ParnewHr(newHr);
	}

	handleChangeMin = (event) => {
		if(event.target.value >= 61)
		{
			event.target.value = 60
		}
		if(event.target.value <= -1)
		{
			event.target.value = 0
		}
		let newMin = event.target.value;
		this.setState({inputmin: newMin });
		this.props.ParnewMin(newMin);
	}


	render() {
		return(
      		<div className="col-md-12">
        		<div className="container-fluid">
       		     	
       		     	<h3>Time</h3>
       		    
       		    <input type="number" className="Hrinput"
       		    min="1" max="24" value={this.state.inputHr}
       			placeholder="Time 01-24"
       			onChange={this.handleChangeHr}
       			/> :  
       			<input type="number" className="Mininput"
       			placeholder="Time 00-59"
       			min="0" max="59" value={this.state.inputmin}
       			onChange={this.handleChangeMin}
       			/>


       			<br/>
       			</div>      			
       		</div>	
       	);	
	}
}

export class Zone extends Component {


  constructor({ initzoneOld }) {
    super();
    this.state = {	zoneOld: initzoneOld }
  }

	handleChangeZoneOld = (event) => {
		let newzoneOld = event.target.value;
		this.setState({zoneOld: newzoneOld });
		this.props.Paroldzone(newzoneOld);
	}

	render() {
		return(
      		<div className="col-md-12">
        		<div className="container-fluid">
       		     	<h3>Zone</h3>
       		     	    <select className="Zoneinput1"
       		     	    value={this.state.zoneOld} 
       		     	    onChange={this.handleChangeZoneOld}>
	       		     		<option value="24">gmt+12(New Zealand Standard Time)</option>
	       		     		<option value="23">gmt+11(Magadan, New Caledonia, Solomon Is.
Samo)</option>
	       		     		<option value="22">gmt+10(Sydney, Eastern Australia Standard Time)</option>
	       		     		<option value="21">gmt+9(Osaka, Seoul, Sapporo, Seoul, Tokyo, Yakutsk
Japan Standard Time,)</option>
	       		     		<option value="20">gmt+8(Beijing, Chongqing, Hong Kong, Kuala Lumpar,
Manila, Perth, Singapore)</option>
	       		     		<option value="19">gmt+7(Bangkok, Hanoi, Jakarta, Phnom Penh
Western Australia Standard Time)</option>
	       		     		<option value="18">gmt+6(Almaty, Dhakar, Kathmandu, Colombo, Sri Lanka)</option>
	       		     		<option value="17">gmt+5(Calcutta, Colombo, Islamabad, Madras, New Dehli)</option>
	       		     		<option value="16">gmt+4(Abu Dhabi, Baku, Kabul, Kazan, Muscat, Tehran, Tbilisi, Volgograd)</option>
	       		     		<option value="15">gmt+3(Ankara, Aden, Amman, Baghdad, Bahrain, Beruit, Dammam)</option>
	       		     		<option value="14">gmt+2(Athens, Bucharest, Cairo, Cape Town, Cyprus, Estonia, Finland,
Greece)</option>
	       		     		<option value="13">gmt+1(Amsterdam, Berlin, Budapest,
EUROPEAN UNION)</option>
	       		     		<option value="12">gmt+0(Greenwich Mean Time (GMT), LONDON)</option>
	       		     		<option value="11">gmt-1(Azores, Cape Verde Is., Western Africa Time)</option>
	       		     		<option value="10">gmt-2(Mid-Atlantic)</option>
	       		     		<option value="9">gmt-3(Brazilia, Rio de Janero
Standard Time [Canada])</option>
	       		     		<option value="8">gmt-4(Caracas, Labrador, La Paz, Maritimes, Santiago.
Atlantic Standard Time)</option>
	       		     		<option value="7">gmt-5(Washington.
Eastern Standard Time)</option>
	       		     		<option value="6">gmt-6(Houston,
Indiana [west], Manitoba, Memphis, New Orleans, 
Mexico City)</option>
	       		     		<option value="5">gmt-7(Salt Lake City, Santa Fe, Saskatchewan West,
Mountain Standard Time)</option>
	       		     		<option value="4">gmt-8(Pacific Standard Time)</option>
	       		     		<option value="3">gmt-9(Alaska, Alaska Standard Time)</option>
	       		     		<option value="2">gmt-10(Hawaii, Honolulu, Hawaiin Standard Time)</option>
	       		     		<option value="1">gmt-11(Midway Island,  Samoa)</option>
	       		     		<option value="0">gmt-12(Eniwetok, Kwaialein)</option>
       		     		</select>
       			</div>
       		</div>	
       	);	
	}
}

export class NewZone extends Component {

  constructor({ initzoneNew }) {
    super();
    this.state = {	zoneNew: initzoneNew }
  }

	handleChangeZoneNew = (event) => {
		let newzoneNew = event.target.value;
		this.setState({zoneNew: newzoneNew });
		this.props.Parnewzone(newzoneNew);
	}


	render() {
		return(
      		<div className="col-md-12">
        		<div className="container-fluid">
       		     	<h3>New-Zone</h3>
       		     	    <select className="Zoneinput2"
       		     	    value={this.state.zoneNew} 
       		     	    onChange={this.handleChangeZoneNew}>
	       		     		<option value="24">gmt+12(New Zealand Standard Time)</option>
	       		     		<option value="23">gmt+11(Magadan, New Caledonia, Solomon Is.
Samo)</option>
	       		     		<option value="22">gmt+10(Sydney, Eastern Australia Standard Time)</option>
	       		     		<option value="21">gmt+9(Osaka, Seoul, Sapporo, Seoul, Tokyo, Yakutsk
Japan Standard Time,)</option>
	       		     		<option value="20">gmt+8(Beijing, Chongqing, Hong Kong, Kuala Lumpar,
Manila, Perth, Singapore)</option>
	       		     		<option value="19">gmt+7(Bangkok, Hanoi, Jakarta, Phnom Penh
Western Australia Standard Time)</option>
	       		     		<option value="18">gmt+6(Almaty, Dhakar, Kathmandu, Colombo, Sri Lanka)</option>
	       		     		<option value="17">gmt+5(Calcutta, Colombo, Islamabad, Madras, New Dehli)</option>
	       		     		<option value="16">gmt+4(Abu Dhabi, Baku, Kabul, Kazan, Muscat, Tehran, Tbilisi, Volgograd)</option>
	       		     		<option value="15">gmt+3(Ankara, Aden, Amman, Baghdad, Bahrain, Beruit, Dammam)</option>
	       		     		<option value="14">gmt+2(Athens, Bucharest, Cairo, Cape Town, Cyprus, Estonia, Finland,
Greece)</option>
	       		     		<option value="13">gmt+1(Amsterdam, Berlin, Budapest,
EUROPEAN UNION)</option>
	       		     		<option value="12">gmt+0(Greenwich Mean Time (GMT), LONDON)</option>
	       		     		<option value="11">gmt-1(Azores, Cape Verde Is., Western Africa Time)</option>
	       		     		<option value="10">gmt-2(Mid-Atlantic)</option>
	       		     		<option value="9">gmt-3(Brazilia, Rio de Janero
Standard Time [Canada])</option>
	       		     		<option value="8">gmt-4(Caracas, Labrador, La Paz, Maritimes, Santiago.
Atlantic Standard Time)</option>
	       		     		<option value="7">gmt-5(Washington.
Eastern Standard Time)</option>
	       		     		<option value="6">gmt-6(Houston,
Indiana [west], Manitoba, Memphis, New Orleans, 
Mexico City)</option>
	       		     		<option value="5">gmt-7(Salt Lake City, Santa Fe, Saskatchewan West,
Mountain Standard Time)</option>
	       		     		<option value="4">gmt-8(Pacific Standard Time)</option>
	       		     		<option value="3">gmt-9(Alaska, Alaska Standard Time)</option>
	       		     		<option value="2">gmt-10(Hawaii, Honolulu, Hawaiin Standard Time)</option>
	       		     		<option value="1">gmt-11(Midway Island,  Samoa)</option>
	       		     		<option value="0">gmt-12(Eniwetok, Kwaialein)</option>
       		     		</select>
       			</div>

       			
       			
       		</div>	
       	);	
	}
}



export class NewTime extends Component {

	static propTypes = {
							ConTime: PropTypes.string.isRequired
						};

	static defaultProps = {
							ConTime: "24 : 00"
						};


	state = {
				timeNew: "23 : 59"
			}

	ConvertTime = (event) => { 
		this.setState({timeNew:this.props.ConTime});
	}


	render() {
		return(
      		<div className="col-md-12">
        		<div className="container-fluid">
       		     	<h3>New-Time</h3>
       		     	<p className="Newtimeout"> {this.state.timeNew} </p>
       		     	<button className="Convertbtn"
       		     	onClick={this.ConvertTime}
       		     	>Convert</button>
       			</div>

       			
       			
       		</div>	
       	);	
	}
}

