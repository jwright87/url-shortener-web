import React, { Component } from 'react';
import './App.css';

export class UrlShort extends Component {
    constructor(props) {
    super(props)
    this.state = {value: '',shortUrl:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }

    handleSubmit(event) {
        console.log("URL Submitted: " +this.state.value);
        fetch('http://localhost:8080/api/shorten?url='+this.state.value)
        .then(results => {
            return results.json();
        })
        .then(data => {
            this.setState({value:data.shortenedURL});
        })
        event.preventDefault();
    }
    render() {
        return (
            <form>
                <label>Enter URL:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Shorten"/>
            </form>
            <div>
                <p></p>
            </div>
        );
    }
}

export default UrlShort;