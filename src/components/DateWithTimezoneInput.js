import React from 'react';

const DEFAULT_DATE = "2010-01-01";
const DEFAULT_TIME = "00:00:00";
const DEFAULT_TIMEZONE = "+03:00" 

class DateWithTimezoneInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: DEFAULT_DATE,
      time: DEFAULT_TIME,
      timezone: DEFAULT_TIMEZONE,
    };

    this.dateHandler = this.dateHandler.bind(this);
    this.timeHandler = this.timeHandler.bind(this);
    this.timeZoneHandler = this.timeZoneHandler.bind(this);
  }

  dateHandler(event) {
    this.setState({date: event.target.value});
    this.props.dispatchFunc(event.target.value + "T" + this.state.time + this.state.timezone);
  }

  timeHandler(event) {
    var newTime = event.target.value;
    if(newTime.length === 5) {
      newTime += ":00";
    }

    this.setState({time: newTime});
    this.props.dispatchFunc(this.state.date + "T" + newTime + this.state.timezone);
  }

  timeZoneHandler(event) {
    this.setState({timezone: event.target.value});
    this.props.dispatchFunc(this.state.date + "T" + this.state.time + event.target.value);
  }

  render() {
    return (
      <div className="DateWithTimezoneInput">
        <label>
          {this.props.labelText}: 
          <input type="date" defaultValue={DEFAULT_DATE} onChange={this.dateHandler}/>
          <input type="time" step="1" defaultValue={DEFAULT_TIME} onChange={this.timeHandler}/>
          <select id="timezone" defaultValue={DEFAULT_TIMEZONE} onChange={this.timeZoneHandler} >
            <option value="-11:00">-11:00</option>
            <option value="-10:00">-10:00</option>
            <option value="-09:00">-09:00</option>
            <option value="-08:00">-08:00</option>
            <option value="-07:00">-07:00</option>
            <option value="-06:00">-06:00</option>
            <option value="-05:00">-05:00</option>
            <option value="-04:00">-04:00</option>
            <option value="-03:00">-03:00</option>
            <option value="-02:00">-02:00</option>
            <option value="-01:00">-01:00</option>
            <option value="+00:00">+00:00</option>
            <option value="+01:00">+01:00</option>
            <option value="+02:00">+02:00</option>
            <option value="+03:00">+03:00</option>
            <option value="+04:00">+04:00</option>
            <option value="+05:00">+05:00</option>
            <option value="+06:00">+06:00</option>
            <option value="+07:00">+07:00</option>
            <option value="+08:00">+08:00</option>
            <option value="+09:00">+09:00</option>
            <option value="+10:00">+10:00</option>
            <option value="+11:00">+11:00</option>
            <option value="+12:00">+12:00</option>
          </select>
        </label>
      </div>
      )
  }
}

export default DateWithTimezoneInput;

