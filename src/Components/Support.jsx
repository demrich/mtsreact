import React, { Component } from 'react';

let mttBlue = "#03a5ed"
let mttOrange = "#EC7701"


export default class Support extends Component {
    state = {}    
    componentDidMount() {
        window.scrollTo(0, 0)
        document.title = "myTouchSmart– Support";

    }
    render() {
        return(
            <div className="learn">
            <p>Support Page, Yo</p>
           </div>

        )
    }
}