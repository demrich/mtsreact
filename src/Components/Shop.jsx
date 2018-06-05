import React, { Component } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SiteData from '../ProductData.json';
import axios from 'axios';

let mttBlue = "#03a5ed"
let mttOrange = "#EC7701"

// function addCart(str) {
//     document.getElementById('result').src = str
//     document.getElementById('result').onload = function () {
//             return function () {
//                console.log(str);
//             }
//         }
//         ();
// }



class ProductRow extends Component {
   
    render() {
    let productCenter = {
        textAlign: 'center',
        paddingTop: '1em',
        paddingBottom: '5em',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }
    return(
        <div style={productCenter}>
            {this.props.products}

        </div>
    )}
}


class CategorySection extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
        document.title = "myTouchSmart– Shop";

    }
    render() {        
        let title = {
            color: mttOrange,
            textAlign: 'center',
            textTransform: 'uppercase',
            fontWeight: '100',
            letterSpacing: '.05em',
            margin: 'auto'
        }


        let hr = {
            width: '75%',
            color: '#eee',
            backgrundCOlor: '#eee',
            border: 'none',
            borderTop: '1px solid #929292'
            }
            
      return (
        <div {...this.props} className="category">
        <h2 id={this.props._id} className="title" style= {title}>{this.props.title}</h2>
        <hr style={hr} />
        <ProductRow products={this.props.products} />
        </div>
      )
    }
}

class Shop extends Component {
    state = SiteData
    render() {
        let categories = this.state.categories
        let products = this.state.products
        let heroes = this.state.heroes   
        let shopPage = {
            paddingTop: '3em',
        }
        return (
        <div className="app">
            {categories && products && heroes ? 
            <div style={shopPage}>
            {categories.map((category, i) => {
              let imageSpecs = {
                margin: 'auto',
                width: '15em'
              }
              let displayProduct = products.map ((product, i) => {
                  let productCat = {
                      margin: '5px'
                  }

                  let priceStyle = {
                      color: mttBlue,
                      fontSize: '1.3em',
                      fontWeight: '400',
                      margin: '.6em 0 .6em 0'
                  }
                  let productButton = {
                      background: mttOrange,
                      color: 'white',
                      padding: '.5em 1em .5em 1em',
                      border: 'none',
                      borderRadius: '1em',
                      fontSize: '1em',
                      textTransform: 'uppercase'

                  }
                  let productButtonDisabled = {
                    background: 'grey',
                    color: 'white',
                    padding: '.5em 1em .5em 1em',
                    border: 'none',
                    borderRadius: '1em',
                    fontSize: '1em',
                    textTransform: 'uppercase'
                }
           ///Products
           if(category._id === product.category._id) {
            if(product._id === "5b0841ab9294171c3db65205"){
                return (
                    <div className="product-card" key={i}>
                    <a key={product.sku} href={product.productURL}>                        
                    <img alt={product.name} style={imageSpecs} id={product.sku} src={product.imageURL} />
                    </a>
                    <h4 style= {productCat}>{product.type}</h4>
                    <span>{product.name}</span>
                    <h5 style={priceStyle}>${product.price}</h5>
                    <a href={product.productURL}>                        
                    <button className="prod-button" style={productButton}>View Details</button>
                    </a>
                    </div>
                )
               }
               else if(product.cartLink === '#'){
                return (
                    <div className="product-card" key={i}>
                    <img alt={product.name} style={imageSpecs} id={product.sku} src={product.imageURL} />
                    <h4 style= {productCat}>{product.type}</h4>
                    <span>{product.name}</span>
                    <h5 style={priceStyle}>${product.price}</h5>
                    <button className="prod-button" style={productButtonDisabled}>Coming Soon</button>
                    </div>
                )
            } else {
             return (
                 <div className="product-card" key={i}>
                 <a key={product.sku} href={product.productURL}>
                 <img alt={product.name} style={imageSpecs} id={product.sku} src={product.imageURL} />
                 </a>
                 <h4 style= {productCat}>{product.type}</h4>
                 <span>{product.name}</span>
                 <h5 style={priceStyle}>${product.price}</h5>
                 <a href={product.cartLink} rel="noopener noreferrer" target="_blank">
                 <button className="prod-button" style={productButton}>Add to Cart</button>
                 </a>
                 </div>
             )
            }
            }
     })

              return (
              <CategorySection 
              key={i} 
              id={category._id}
              title={category.title} 
              products={displayProduct} />
              
              )
            }
          )}
         <iframe title="cart" id="result" style={{width:'0', height:'0', border:'0'}} />
            </div>
           : <div className="border-loading-indicator col-2 row-2"></div> }
        
        </div>
        );
    }
}
export default Shop;  
