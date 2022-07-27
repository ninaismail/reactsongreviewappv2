import React from 'react';
import axios from 'axios';

export default class PersonAdd extends React.Component {
  state = {
    Name: '', 
    duration:'206'
  }

  handleChange = event => {
    this.setState({ Name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const song = {
      name: this.state.Name
    };

    axios.post('http://localhost:3001/music', { song })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Song Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}