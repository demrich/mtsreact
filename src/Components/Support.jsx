import React, { Component } from 'react';
import SiteData from '../ProductData.json';

let mttBlue = "#03a5ed"
let mttOrange = "#EC7701"



class SupportSection extends Component {
        render(){
            return(
                <ul style={{padding: '0'}}>
                {this.props.products}
                </ul>
            )
        }
}

class CategorySection extends Component {
    render(){
             return(
                <div id={this.props.title} style={{width: "90%", margin: 'auto', paddingBottom: '2em'}}>
                <h2 style={{margin: '0'}}>{this.props.title}</h2>
                <hr style={{backgroundColor: 'grey'}} />
                <SupportSection products={this.props.products}/>
                </div>
            )

    }
 
}


export default class Support extends Component {
    state = SiteData    
    componentDidMount() {
        window.scrollTo(0, 0)
        document.title = "myTouchSmart– Support";

    }
    render() {
        let Categories = this.state.categories;
        let Products = this.state.products;
        let Support = {
            color: mttOrange,
            marginBottom: '10px'
        }
        let button = {
            background: mttBlue,
            color: 'white',
            fontSize: '.75em',
            padding: '.2em 1em .3em 1em',
            border: 'none',
            borderRadius: '20px',
            textDecoration: 'none'
        }
        return(
        <div className="support">
            <div style={{padding: '3em 0 5em 0'}}>
            <div style={{width: '90%', margin: 'auto', height: '20px', borderBottom: '1px solid grey', textAlign: 'center'}}>
                <span style={{fontSize: '40px', color: mttBlue, backgroundColor: '#fff', padding: '0 1.5em'}}>
                    Support
                </span>
            </div>
            </div>

            {Categories.map((category, i) => {
                let displayProduct = Products.map((product, i) => {
                    if(category._id === product.category._id && product.support){
                        if(product.support.video && product.support.manual){
                            return(
                                <li key={i}>
                                <div style={{paddingBottom: '20px'}}>
                                <span style={Support}>{product.type} {product.name} - {product.sku}</span><br />
                                <div style={{paddingTop:'10px'}}><a style={button}>Read It</a><span style={{color: 'grey'}}> | </span><a style={button}>Watch It</a></div>
                                </div>
                                </li>
                            )
                        } else if(!product.support.video && product.support.manual){
                            
                            return(
                                <li key={i}>
                                <div style={{paddingBottom: '20px'}}>
                                <span style={Support}>{product.type} {product.name} - {product.sku}</span><br />
                                <div style={{paddingTop:'10px'}}><a href={product.support.manual} style={button}>Read It</a></div>
                                </div>
                                </li>
                            )
                        } else if(product.support.video && !product.support.manual){
                            return(
                                <li key={i}>
                                <div style={{paddingBottom: '20px'}}>
                                <span style={Support}>{product.type} {product.name} - {product.sku}</span><br />
                                <div style={{paddingTop:'10px'}}><a style={button}>Watch It</a></div>
                                </div>
                                </li>
                            )
                        }}
                })

               let filteredDisplay = displayProduct.filter(product => product !== undefined)
               if(filteredDisplay.length !== 0){
                return(
                    <CategorySection
                    key={i}
                    style={{paddingTop: '2em'}}
                    title={category.title}
                    products={filteredDisplay}
                    />                    
                )
               }

                }
            )}
           </div>

        )
    }
}