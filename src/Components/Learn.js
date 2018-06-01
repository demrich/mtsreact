import React, { Component } from 'react';
let mttBlue = "#03a5ed"
let mttOrange = "#EC7701"
export default class Learn extends Component {
    state= {
        learn: [ 
        {
            id: "5b072cd4433f9954b89871d2",
            name: 'Easy Set Wifi Smart Plugs',
            imageUrl: 'uploads/categories/learn-wifi.jpg',
            shopLink: 'myselecsmart/shop#smartplug'
        },
        {
            id: "5b072d1e433f9954b89871d3",
            name: 'Simple Set Timers',
            imageUrl: 'uploads/categories/learn-simpleset.jpg',
            shopLink: 'myselecsmart/shop#timer'
        },
        {
            id: "5b072d50433f9954b89871d4",
            name: 'SunSmart™ Timers',
            imageUrl: 'uploads/categories/learn-sunsmart.jpg',
            shopLink: 'myselecsmart/shop#sunsmart'
        }
    ]
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render(){
        let div={
            minHeight: "20em",
            textAlign:'center'
        }
        let h1 = {
            margin: 'auto',
            textAlign: 'center',
            padding: '1em 0',
        }
        let peace = {
            fontSize: '15em',
            padding:'0',
            margin: 'auto',
        }
        let learns = this.state.learn;

        return(
            <div className="learn">
            {learns ? 
            learns.map((learn, i) => { 
                let hr = {
                    width: '75%',
                    color: '#eee',
                    backgrundCOlor: '#eee',
                    border: 'none',
                    borderTop: '1px solid #929292'
                    }
                    let link = {
                        textDecoration: 'none'
                    }
                    let learnButton = {
                        display: '-webkit-box',
                        position: 'relative',
                        top: '-1.5em',
                        border: 'none',
                        borderRadius: '1em',
                        padding: '.5em 1em',
                        margin: 'auto',
                        textAlign: 'center',
                        textTransform: 'uppercase',
                        background: mttBlue,  
                        color: "white" ,
                        fontSize: '1.5em'       
                    }
            
                    let orangeTriangle = {
                        color: mttOrange
                    }
                    let learnImage={
                        margin: 'auto',
                        paddingBottom: '4em'
                    }

                    let learnSection = {
                        textAlign: 'center'
                    }
                    let shopLink= "/mytouchsmart/#/shop#" + learn.id;
                return(
            <div style={learnSection} key={learn.id}>
                <img className='learn-image' style={learnImage} src={learn.imageUrl} alt={learn.name}  />
                <hr style={hr} />
                <a style={link} href={shopLink}>
                    <button style={learnButton}>Shop {learn.name}
                         <span style={orangeTriangle}>&#9658;</span>
                    </button>
                </a>
            </div>
            ) })
        : <span>Loading...</span>}
           </div>

        )
    }
}