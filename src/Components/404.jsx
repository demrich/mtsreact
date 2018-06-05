import React, { Component } from 'react';

let mttBlue = "#03a5ed"
let mttOrange = "#EC7701"


export default class NotFound extends Component {
    state= {}
    componentDidMount() {
        window.scrollTo(0, 0)
        document.title = "404 Not Found";

    }
    render(){
        let notFound = {
            textAlign:'center'
        }

        let sadboi = {
            fontSize: '20em',
            padding: '0',
            margin: '0'
        }

        let whoops = {
            fontSize:'8em',
            padding: '0',
            paddingTop: '.2em',
            margin: '0'
        }

        return(
            <div style={notFound} className="not-found">
            <h1 style={whoops}>404 Not Found</h1>
            <h1 style={{margin:'0'}}>Congratulations! You Broke Our Site.</h1>
            <p style={sadboi}>&#9785;</p>
           </div>

        )
    }
}