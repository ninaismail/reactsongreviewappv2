import React, { Component } from 'react';
import axios from 'axios';
export default class CreatePlaylist extends Component {
    constructor(props) {
        super(props)
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeUserID = this.onChangeUserID.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            title: '',
            userid: ''
        }
    }
    onChangeTitle(e) {
      this.setState({ title: e.target.value });   
     }
    onChangeUserID(e) {
      this.setState({ userid: e.target.value });   
     }
    onSubmit(e) {
        e.preventDefault()
        const PlaylistObject = {
            Title: this.state.title,
            UserID: this.state.userid
        };
        axios.post('http://localhost:3003/myplaylists' , PlaylistObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });
        this.setState({ title: '', userid: '' })
    }

    render() {
      const { title, userid } = this.state;

        return (
            <div className="wrapper">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Playlist Title</label>
                        <input type="text" value={title} onChange={this.onChangeTitle} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Add Playlist User ID</label>
                        <input type="text" value={userid} onChange={this.onChangeUserID} className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Song" className="btn btn-success btn-block" />
                    </div>
                </form>
            </div>
        )
    }
}