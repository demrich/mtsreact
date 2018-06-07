import React, { Component } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios';
import Modal from 'react-responsive-modal';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';
import SiteData from '../ProductData.json'

let mttBlue = "#03a5ed"
let mttOrange = "#EC7701"
let link = {
    textDecoration: 'none'
}

class AddToCart extends Component {
    render(){
        return(
            <div>
                <iframe 
                title="result" 
                style={{width: '0', height: '0', border: 'none'}}
                src={this.props.addedCart}
                 />
            </div>
        )
    }

}

class YoutubeVid extends React.Component {
    render() {
      let opts = {
        height: '390',
        width: '640',
        playerVars: { // https://developers.google.com/youtube/player_parameters
        }
      };

      if (document.documentElement.clientWidth < 640) {
         opts = {
            height: '185',
            width: '320'
          };    }
   
      return (
        <YouTube
          videoId="CPTrxlio6Z4"
          opts={opts}
          onReady={this._onReady}
        />
      );
    }
   
    _onReady(event) {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
    }
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
        let learnLink= "/learn#" + this.props._id;

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
        <HashLink style={link} to={learnLink} >
        <button style={learnButton}>Learn More 
        <span style={orangeTriangle}>&#9658;</span>
        </button></HashLink>
        <ProductRow products={this.props.products} />
        </div>
      )
    }
}

class Home extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
        document.title = "myTouchSmart– Home";

    }

    state = SiteData
        onOpenModal = () => {
            this.setState({ open: true });
        };
        
        onCloseModal = () => {
            this.setState({ open: false });
        };  

        handleClick(cartLink, e){
            this.setState({
                    addCart: cartLink
            })
           }
    
    render() {
        let categories = this.state.categories
        let products = this.state.products
        let heroes = this.state.heroes 
        let open  = this.state.open
        let addCart = this.state.addCart

        //////Hero Slider Settings////
        let HeroSlideSettings = {
            width: '100vw', 
          }
          var HeroSliderSettings = {
            dots: true,
            arrows: true,
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
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
          };
        ////////////////////////
        

        return (
        <div className="app">
            {categories && products && heroes ? 
            <div>
            <Slider {...HeroSliderSettings}>
            {heroes.map((hero, i) => {
                 if(hero.button === true){
                    return(
                        <div key={i} >
                        <img className="hero-button" onClick={this.onOpenModal} key={i} style={HeroSlideSettings} alt={hero.title} src={hero.heroImage} />
                        <Modal open={open} onClose={this.onCloseModal} center>
                        <div>
                            <YoutubeVid />
                        </div>
                        </Modal>
                        </div>
                     )
                    }
                return(
                <img key={i} style={HeroSlideSettings} alt={hero.title} src={hero.heroImage} />
                )
            })}
            </Slider>
            <div>
            <Link className="shop-header" to="/shop">
            <h3 style={sliderHeader}>Shop myTouchSmart</h3>
            </Link>
            <Slider {...ProductSliderSettings}>
                {products.map ((product, i) => {
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
            
            if(product.cartLink !== "#"){
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
                    <button className="prod-button" style={productButton}>Add to Cart</button>
                    </a>
                    </div>
                    </div>
                  )
            }
                  
            })}
            </Slider>
            </div>

            
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
                        <button  
                        className="prod-button" 
                        style={productButton}
                        onClick={this.handleClick.bind(this, product.cartLink)}
                        >
                        Add to Cart
                        </button>
                        </div>
                    )
                   }
                   }
            })
            let FilteredDisplayProduct = displayProduct.filter(product => product !== undefined)
              return (
              <CategorySection 
              key={i} 
              title={category.title} 
              background= {category.background}
              float = {category.float}
              featuredimage = {category.featuredImage} 
              content={category.content} 
              _id={category._id}
              products={FilteredDisplayProduct} />
              )
            }
          )
          }

          <AddToCart addedCart={addCart} />

          </div>       
           : <div className="border-loading-indicator col-2 row-2"></div> }
        
        </div>
        );
    }
}
export default Home;  
