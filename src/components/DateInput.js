import React from 'react';

const DEFAULT_DATE = "2010-01-01";
const DEFAULT_TIME = "00:00:00";

class DateInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: DEFAULT_DATE,
      time: DEFAULT_TIME,
    };

    this.dateHandler = this.dateHandler.bind(this);
    this.timeHandler = this.timeHandler.bind(this);
  }

  dateHandler(event) {
    this.setState({date: event.target.value});
    this.props.dispatchFunc(event.target.value + "T" + this.state.time);
  }

  timeHandler(event) {
    var newTime = event.target.value;
    if(newTime.length === 5) {
      newTime += ":00";
    }

    this.setState({time: newTime});
    this.props.dispatchFunc(this.state.date + "T" + newTime);
  }

  render() {
    return (
      <div className="DateInput">
        <label>
          {this.props.labelText}: 
          <input type="date" defaultValue={DEFAULT_DATE} onChange={this.dateHandler}/>
          <input type="time" step="1" defaultValue={DEFAULT_TIME} onChange={this.timeHandler}/>
        </label>
      </div>
      )
  }
}

export default DateInput;

