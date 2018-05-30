import React, { Component } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios';

let mttBlue = "#03a5ed"
let mttOrange = "#EC7701"
let link = {
    textDecoration: 'none'
}

let vidLink = "#"



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
            {/* <Columns dimensions={dimensions} queries={queries}>
            {this.props.products}
            </Columns> */}
        </div>
    )}
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
            pointerEvents: 'none',
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

class Home extends Component {
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
        
        //////Hero Slider Settings////
        let HeroSlideSettings = {
            width: '100vw', 
          }
          var HeroSliderSettings = {
            dots: true,
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
          };
        ////////////////////////

        //////Product Slider Settings////
        let sliderHeader = {
            color: mttOrange,
            textAlign: 'center',
            fontSize: '3em',
            margin: 'auto',
            fontWeight: '300',
            paddingTop: '20px'
        }
        let ProductSlideSettings = {
            textAlign: 'center', 
            paddingBottom: '40px',
          }
          let ProductSliderSettings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
          };
        ////////////////////////

        return (
        <div className="app">
            {categories && products && heroes ? 
            <div>
            <Slider {...HeroSliderSettings}>
            {heroes.heroes.map((hero, i) => {
                 if(hero.button === true){
                     return(
                    <a key={i} href={vidLink}>
                    <img key={i} style={HeroSlideSettings} alt={hero.title} src={hero.heroImage} />
                    </a>
                     )
                    }
                return(
                <img key={i} style={HeroSlideSettings} alt={hero.title} src={hero.heroImage} />
                )
            })}
            </Slider>
            <h2 style={sliderHeader}>Shop myTouchSmart</h2>
            <Slider {...ProductSliderSettings}>
                {products.products.map ((product, i) => {
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
                  let imageSpecs = {
                    margin: 'auto',
                    width: '15em'
                  }
            ///Slider Products
                  return(
                    <div key={i} >
                    <div style={ProductSlideSettings} >
                    <a alt={product.name} href={product.productURL}>
                    <img alt={product.name} style={imageSpecs} id={product.sku} src={product.imageURL} />
                    </a>
                    <h4 style= {productCat}>{product.type}</h4>
                    <span>{product.name}</span>
                    <h5 style={priceStyle}>${product.price}</h5>
                    <a href={product.cartLink}>
                    <button style={productButton}>Add to Cart</button>
                    </a>
                    </div>
                    </div>
                  )
            })}
            </Slider>

            
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
                   return (
                    <div key={i}>
                    <a key={product.sku} href={product.productURL}>
                    <img alt={product.name} style={imageSpecs} id={product.sku} src={product.imageURL} />
                    </a>
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
export default Home;  
