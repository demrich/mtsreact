import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MediaQuery from 'react-responsive';
import Slider from "react-slick";
import Columns from "react-columns";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';

let mttBlue = "#03a5ed"
let mttOrange = "#EC7701"

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

    return(
        <div style={productCenter}>
            <Columns columns= "3" dimensions={dimensions}>
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
            height: '30rem'
        }



        let featuredCatImage = {
            background: 'url(' + this.props.featuredImage + ') no-repeat',
            backgroundSize: 'contain',
            display: 'inline-block',
            position: 'absolute',
            float: this.props.float,
            width: '45vw',
            minHeight:'110vh'

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
            fontSize: '3em',
            textTransform: 'uppercase',
            fontWeight: '100',
            margin: '10px 0 10px 2.5em',
            letterSpacing: '.05em'
        }

        let content = {
            textAlign: 'center',
            fontSize: '1em',
            lineHeight: '1.5rem',
            padding: '6% 8% 6% 8%',
            margin: 'auto',
            fontWeight: '300'
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

        if (window.matchMedia('screen and (max-width: 850px)').matches) {
            categoryBackground.height = '40vh'
            featuredCatImage.width= '40%'
            title.fontSize='2em'
        }

        if (window.matchMedia('screen and (max-width: 414px)').matches) {
            categoryBackground.height = '20vh'

        }
      return (
        <div {...this.props} className="category" >
        <div style={featuredCatImage} className="featured-image"></div>
        <div style={categoryBackground}></div>
        <div style={titleBar}>
        <h2 style= {title}>{this.props.title}</h2>
        </div>
        <p style={content}>{this.props.content}</p>
        <hr style={hr} />
        <button style={learnButton}>Learn More <span style={orangeTriangle}>&#9658;</span></button>
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
            <div>
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
                    <img style={imageSpecs} id={product.sku} src={product.imageURL} />
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
              background= {category.background}
              float = {category.float}
              featuredImage = {category.featuredImage} 
              content={category.content} 
              products={displayProduct} />
              )
            }
          )}          
            </div>
           : '...loading' }
        </div>
        );
    }
}
export default App;  
