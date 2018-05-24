import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MediaQuery from 'react-responsive';
import Slider from "react-slick";
import Columns from "react-columns";
import "./App.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';

let mttBlue = "#03a5ed"
let mttOrange = "#EC7701"
let link = {
    textDecoration: 'none'
}

function HeroTitle(props) {
    return( 
        <h1>{props.title}</h1>
    )
  }

  class SimpleSlider extends React.Component {
    render() {
      let slideSettings = {
        textAlign: 'center', 
        padding: '60px',
      }
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      };
      return (
        <div style={slideSettings}>
        <Slider {...settings}>
            {this.props.products}
        </Slider>
        </div>
      )
    }
  }

class ProductRow extends Component {
   
    render() {
    let dimensions = [{
        width: 300,
    }]

    let productCenter = {
        textAlign: 'center',
        paddingTop: '1em',
        paddingBottom: '5em'
    }
    let queries = [
        {
        columns: 2,
        query: 'min-width: 500px'
      }, {
        columns: 4,
        query: 'min-width: 1000px'
      }];
    

    return(
        <div style={productCenter}>
            <Columns dimensions={dimensions} queries={queries}>
            {this.props.products}
            </Columns>
        </div>
    )}
}

class HeroCategory extends Component {
    render(){
    return(
        <HeroTitle title="MyTouchSmart Indoor Timers" />
    )
    }
}



class CategorySection extends Component {

    render() {        
        let categoryBackground = {
            background: 'url(' + this.props.background + ') no-repeat',
            backgroundSize: 'cover', 
            backgroundPosition: 'top center',
            width: '100%',
        }



        let featuredCatImage = {
            background: 'url(' + this.props.featuredimage + ') no-repeat',
            backgroundSize: 'contain',
            display: 'inline-block',
            position: 'absolute',
            float: this.props.float,
            backgroundPosition: this.props.float,
        }

        let titleBar = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: mttOrange,
            width: '100%',
            height: 'auto',
            textAlign: 'center',
            whiteSpace: 'pre-line'
        }

        let title = {
            color: 'white',
            textTransform: 'uppercase',
            fontWeight: '100',
            margin: '10px 0 10px 2.5em',
            letterSpacing: '.05em'
        }

        let content = {
            textAlign: 'center',
            fontSize: '1em',
            lineHeight: '1.5rem',
            margin: 'auto',
            fontWeight: '300',
            width: '70%'            
        }

        let hr = {
            width: '75%',
            color: '#eee',
            backgrundCOlor: '#eee',
            border: 'none',
            borderTop: '1px solid #929292'
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

        if(this.props.float === 'right'){
            featuredCatImage.right= '0'
            title.margin ='10px 100px 10px 0'
        }


      return (
        <div {...this.props} className="category">
        <div className="featured-cat-image" style={featuredCatImage}  />
        <div className='category-background' style={categoryBackground} />
        <div style={titleBar}>
        <h2 className="title" style= {title}>{this.props.title}</h2>
        </div>
        <p className="content" style={content}>{this.props.content}</p>
        <hr style={hr} />
        <a style={link} href={this.props.learnlink}>
        <button style={learnButton}>Learn More <span style={orangeTriangle}>&#9658;</span></button>
        </a>
        <ProductRow products={this.props.products} />
        </div>
      )
    }
}

class App extends Component {
    state = { 
        categories: [],
        products: []
    }
    componentDidMount() {
        function getCategories() {
            return axios.get('http://localhost:3001/categories')
        }
        function getProducts() {
            return axios.get('http://localhost:3001/products')
        }
        axios.all([getCategories(), getProducts()])
            .then(axios.spread((categories, products) => {
                let self = this;
                self.setState({
                    categories: categories,
                    products: products
                });
            }));
    }

    render() {
        let categories = this.state.categories.data
        let products = this.state.products.data
        return (
        <div className="app">
            {categories && products ? 
            <div className="site-body fade-in">
            <HeroCategory />
            {categories.categories.map((category, i) => {
              let imageSpecs = {
                margin: 'auto',
                width: '150px'
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
                   return (
                    <div key={i}>
                    <img alt={product.name} style={imageSpecs} id={product.sku} src={product.imageURL} />
                    <h4 style= {productCat}>{product.type}</h4>
                    <span>{product.name}</span>
                    <h5 style={priceStyle}>${product.price}</h5>
                    <a href={product.cartLink}>
                    <button style={productButton}>Add to Cart</button>
                    </a>
                    </div>
                )}
            })

              return (
              <CategorySection 
              key={i} 
              title={category.title} 
              background= {category.background}
              float = {category.float}
              featuredimage = {category.featuredImage} 
              content={category.content} 
              learnlink={category.learnLink}
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
export default App;  
