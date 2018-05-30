import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';

let mttBlue = "#03a5ed"
let mttOrange = "#EC7701"

function addCart(str, button) {
    function updateBtn() {
    // Update button.
    var button = document.getElementsByClassName('cart-progress');
    console.log(button)
}
    document.getElementById('result').src = str
    document.getElementById('result').onload = function () {
            return function () {
                updateBtn();
            }
        }
        ();
} 

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
        <h2 className="title" style= {title}>{this.props.title}</h2>
        <hr style={hr} />
        <ProductRow products={this.props.products} />
        </div>
      )
    }
}

class Shop extends Component {
    state = { 
        categories: [],
        products: [],
        heroes: []
    }
    componentDidMount() {
        function getCategories() {
            return axios.get('http://localhost:3001/categories')
        }
        function getProducts() {
            return axios.get('http://localhost:3001/products')
        }
        function getHeroes() {
            return axios.get('http://localhost:3001/heroes')
        }
        axios.all([getCategories(), getProducts(), getHeroes()])
            .then(axios.spread((categories, products, heroes) => {
                let self = this;
                self.setState({
                    categories: categories,
                    products: products,
                    heroes: heroes
                });
            }));
    }

    render() {
        let categories = this.state.categories.data
        let products = this.state.products.data
        let heroes = this.state.heroes.data   
        let shopPage = {
            paddingTop: '3em',
        }
        return (
        <div className="app">
            {categories && products && heroes ? 
            <div style={shopPage}>
            {categories.categories.map((category, i) => {
              let imageSpecs = {
                margin: 'auto',
                width: '15em'
              }
              let displayProduct = products.products.map ((product, i) => {
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
            ///Products
               if(category._id === product.category._id) {
                let click = addCart(product.cartLink, this);
    
                   return (
                    <div key={i}>
                    <a key={product.sku} href={product.productURL}>
                    <img alt={product.name} style={imageSpecs} id={product.sku} src={product.imageURL} />
                    </a>
                    <h4 style= {productCat}>{product.type}</h4>
                    <span>{product.name}</span>
                    <h5 style={priceStyle}>${product.price}</h5>
                    <button style={productButton}>Add to Cart</button>
                    </div>
                )}
            })

              return (
              <CategorySection 
              key={i} 
              title={category.title} 
              products={displayProduct} />
              
              )
            }
          )}
            </div>
           : <div className="border-loading-indicator col-2 row-2"></div> }
        
        </div>
        );
    }
}
export default Shop;  
