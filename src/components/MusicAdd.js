import React, { Component } from 'react';
import axios from 'axios';
export default class CreateSong extends Component {
    constructor(props) {
        super(props)
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: '',
            duration: ''
        }
    }
    onChangeName(e) {
      this.setState({ name: e.target.value });   
     }
    onChangeDuration(e) {
      this.setState({ duration: e.target.value });   
     }
    onSubmit(e) {
        e.preventDefault()
        const SongObject = {
            Name: this.state.name,
            Duration: this.state.duration
        };
        axios.post('http://localhost:3001/music' , SongObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });
        this.setState({ name: '', duration: '' })
    }

    render() {
      const { name, duration } = this.state;

        return (
            <div className="wrapper">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Song Name</label>
                        <input type="text" value={name} onChange={this.onChangeName} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Add Song Duration</label>
                        <input type="text" value={duration} onChange={this.onChangeDuration} className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Song" className="btn btn-success btn-block" />
                    </div>
                </form>
            </div>
        )
    }
}