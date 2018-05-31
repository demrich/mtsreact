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

let vidLink = "https://www.youtube.com/watch?v=CPTrxlio6Z4"



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
        categories: [
            {
                "_id": "5b072cd4433f9954b89871d2",
                "title": "EASY SET WIFI \n SMART PLUGS",
                "background": "uploads/categories/2018-05-24T21:21:24.213ZiStock-515743697.jpg",
                "featuredImage": "uploads/categories/2018-05-24T21:21:24.228Zwifi-homepage-header.png",
                "float": "left",
                "content": "Simplify your routine with myTouchSmart Wi-Fi Plug-in Smart Plugs. The easy‑to‑program smart switches work with incandescent, CFL, halogen and LED bulbs, delivering simple automation to your indoor lighting. The Wi-Fi-enabled smart plugs are compatible with Amazon Alexa and Google assistant and can be controlled using your mobile device – just down load the free, easy-to-use app for your Android or Apple device – making them ideal for varied routines.\n",
                "learnLink": "#",
                "request": {
                    "type": "GET"
                }
            },
            {
                "_id": "5b072d1e433f9954b89871d3",
                "title": "SIMPLE SET TIMER",
                "background": "uploads/categories/2018-05-24T21:22:38.228ZiStock-538997271.jpg",
                "featuredImage": "uploads/categories/2018-05-24T21:22:38.241Zsimpleset-homepage-header.png",
                "float": "right",
                "content": "Simplify your routine with myTouchSmart Simple Set Timers. The easy‑to‑program timers work with incandescent, CFL, halogen and LED bulbs, delivering simple automation to your indoor or outdoor lighting. Whether you’re away for a few hours or a few weeks, the timers offer a quick way to deter crime by giving your home a lived-in appearance. Ideal for varied routines, Simple Set Timers allow you to create unique schedules using simple daily presets, personalized my on/my off settings, fully customizable countdown ranging from one minute to 24 hours, and manual ON/OFF override button if your plans change.\n",
                "learnLink": "#",
                "request": {
                    "type": "GET"
                }
            },
            {
                "_id": "5b072d50433f9954b89871d4",
                "title": "SUNSMART™ TIMER",
                "background": "uploads/categories/2018-05-24T21:23:28.574ZiStock_57260278_MEDIUM.jpg",
                "featuredImage": "uploads/categories/2018-05-24T21:23:28.589Zsunsmart-homepage-header.png",
                "float": "left",
                "content": "Keep time on your side with myTouchSmart SunSmart™ Timers. The timers provide simple, convenient automation for your lighting. SunSmart™ technology is a built-in component that automatically recognizes the sunrise and sunset times for your region and can turn your lights on and off accordingly. The timers are ideal for varied routines, allowing you to set unique schedules for every day of the week.",
                "learnLink": "#",
                "request": {
                    "type": "GET"
                }
            }
        ],
        products:  [
            {
                "_id": "5b081c356dac047df76bfd04",
                "name": "Easy Set Wi-Fi Smart Plug",
                "price": 0,
                "cartLink": "#",
                "imageURL": "uploads/products/2018-05-25T14:22:45.240Z39844.jpg",
                "sku": "39844",
                "category": {
                    "_id": "5b072cd4433f9954b89871d2",
                    "title": "EASY SET WIFI \n SMART PLUGS"
                },
                "type": "Indoor",
                "request": {
                    "type": "GET"
                }
            },
            {
                "_id": "5b081c676dac047df76bfd05",
                "name": "Easy Set Wi-Fi Smart Plug",
                "price": 0,
                "cartLink": "#",
                "imageURL": "uploads/products/2018-05-25T14:23:35.162Z39845.jpg",
                "sku": "39844",
                "category": {
                    "_id": "5b072cd4433f9954b89871d2",
                    "title": "EASY SET WIFI \n SMART PLUGS"
                },
                "type": "Outdoor/ Indoor",
                "request": {
                    "type": "GET"
                }
            },
            {
                "_id": "5b081d3c6dac047df76bfd06",
                "name": "Simple Set Plug-in Timer",
                "price": 29.99,
                "cartLink": "https://byjasco.com/products/878/add-to-cart",
                "imageURL": "uploads/products/2018-05-25T14:27:08.773Z33862.jpg",
                "productURL": "https://byjasco.com/products/mytouchsmart-indooroutdoor-plug-digital-timer",
                "sku": "33862",
                "category": {
                    "_id": "5b072d1e433f9954b89871d3",
                    "title": "SIMPLE SET TIMER"
                },
                "type": "Outdoor/ Indoor",
                "request": {
                    "type": "GET"
                }
            },
            {
                "_id": "5b08410d9294171c3db65203",
                "name": "Simple Set Wireless Timer System",
                "price": 34.99,
                "cartLink": "https://byjasco.com/products/1280/add-to-cart",
                "imageURL": "uploads/products/2018-05-25T16:59:57.627Z35167.jpg",
                "productURL": "#",
                "sku": "35167",
                "category": {
                    "_id": "5b072d1e433f9954b89871d3",
                    "title": "SIMPLE SET TIMER"
                },
                "type": "Outdoor/ Indoor",
                "request": {
                    "type": "GET"
                }
            },
            {
                "_id": "5b0841899294171c3db65204",
                "name": "Simple Set Plug-in Timer",
                "price": 0,
                "cartLink": "#",
                "imageURL": "uploads/products/2018-05-25T17:02:01.341Z36027.jpg",
                "productURL": "#",
                "sku": "36027",
                "category": {
                    "_id": "5b072d1e433f9954b89871d3",
                    "title": "SIMPLE SET TIMER"
                },
                "type": "Outdoor/ Indoor",
                "request": {
                    "type": "GET"
                }
            },
            {
                "_id": "5b0841ab9294171c3db65205",
                "name": "Simple Set Plug-in Timer",
                "price": 0,
                "cartLink": "#",
                "imageURL": "uploads/products/2018-05-25T17:02:35.877Z26892.jpg",
                "productURL": "#",
                "sku": "26892",
                "category": {
                    "_id": "5b072d1e433f9954b89871d3",
                    "title": "SIMPLE SET TIMER"
                },
                "type": "Indoor",
                "request": {
                    "type": "GET"
                }
            },
            {
                "_id": "5b08420c9294171c3db65206",
                "name": "Simple Set Plug-in Timer",
                "price": 12.99,
                "cartLink": "https://byjasco.com/products/1276/add-to-cart",
                "imageURL": "uploads/products/2018-05-25T17:04:12.363Z36253.jpg",
                "productURL": "#",
                "sku": "36253",
                "category": {
                    "_id": "5b072d1e433f9954b89871d3",
                    "title": "SIMPLE SET TIMER"
                },
                "type": "Indoor",
                "request": {
                    "type": "GET"
                }
            },
            {
                "_id": "5b08425e9294171c3db65207",
                "name": "Simple Set Wireless Timer System",
                "price": 29.99,
                "cartLink": "https://byjasco.com/products/1278/add-to-cart",
                "imageURL": "uploads/products/2018-05-25T17:05:34.526Z35166.jpg",
                "productURL": "#",
                "sku": "35166",
                "category": {
                    "_id": "5b072d1e433f9954b89871d3",
                    "title": "SIMPLE SET TIMER"
                },
                "type": "Indoor",
                "request": {
                    "type": "GET"
                }
            },
            {
                "_id": "5b0842bb9294171c3db65208",
                "name": "Simple Set Digital Timer",
                "price": 24.99,
                "cartLink": "https://byjasco.com/products/904/add-to-cart",
                "imageURL": "uploads/products/2018-05-25T17:07:07.486Z26893.jpg",
                "productURL": "#",
                "sku": "26893",
                "category": {
                    "_id": "5b072d1e433f9954b89871d3",
                    "title": "SIMPLE SET TIMER"
                },
                "type": "In-Wall",
                "request": {
                    "type": "GET"
                }
            },
            {
                "_id": "5b1024499e33475ed881a5a5",
                "name": "SunSmart™ All-in-One Timer",
                "price": 34.99,
                "cartLink": "https://byjasco.com/products/1391/add-to-cart",
                "imageURL": "uploads/products/2018-05-31T16:35:21.141Z33861.jpg",
                "productURL": "https://byjasco.com/products/mytouchsmart-all-one-sunsmart-digital-countdown-timer",
                "sku": "33861",
                "category": {
                    "_id": "5b072d50433f9954b89871d4",
                    "title": "SUNSMART™ TIMER"
                },
                "type": "In-Wall",
                "request": {
                    "type": "GET"
                }
            },
            {
                "_id": "5b10247e9e33475ed881a5a6",
                "name": "SunSmart™ Plug-in Timer",
                "price": 0,
                "cartLink": "#",
                "imageURL": "uploads/products/2018-05-31T16:36:14.900Z26898.jpg",
                "productURL": "#",
                "sku": "26898",
                "category": {
                    "_id": "5b072d50433f9954b89871d4",
                    "title": "SUNSMART™ TIMER"
                },
                "type": "Outdoor/ Indoor",
                "request": {
                    "type": "GET"
                }
            },
            {
                "_id": "5b10249b9e33475ed881a5a7",
                "name": "SunSmart™ Plug-in Timer",
                "price": 0,
                "cartLink": "#",
                "imageURL": "uploads/products/2018-05-31T16:36:43.797Z33860.jpg",
                "productURL": "#",
                "sku": "33860",
                "category": {
                    "_id": "5b072d50433f9954b89871d4",
                    "title": "SUNSMART™ TIMER"
                },
                "type": "Indoor",
                "request": {
                    "type": "GET"
                }
            }
        ],
        heroes:  [
            {
                "_id": "5b0d9e23b7bce4319e19c0d0",
                "title": "The Easiest Timers to Set",
                "heroImage": "uploads/heroes/2018-05-29T18:38:27.098ZMyTouchSmart-Microsite-V3.jpg",
                "button": true,
                "request": {
                    "type": "GET"
                }
            },
            {
                "_id": "5b0da2e5b7bce4319e19c0d1",
                "title": "Schedule and control indoor and outdoor lighting or other devices from anywhere",
                "heroImage": "uploads/heroes/2018-05-29T18:58:45.334ZMyTouchSmart-Microsite-V3-2.jpg",
                "button": false,
                "request": {
                    "type": "GET"
                }
            },
            {
                "_id": "5b0da2f0b7bce4319e19c0d2",
                "title": "Simply Set Custom on/off times or presets that suit your schedule",
                "heroImage": "uploads/heroes/2018-05-29T18:58:56.854ZMyTouchSmart-Microsite-V3-3.jpg",
                "button": false,
                "request": {
                    "type": "GET"
                }
            },
            {
                "_id": "5b0da311b7bce4319e19c0d3",
                "title": "Sunsmart Technology adjusts to sunrise and sunset times in your area",
                "heroImage": "uploads/heroes/2018-05-29T18:59:29.873ZMyTouchSmart-Microsite-V3-4.jpg",
                "button": false,
                "request": {
                    "type": "GET"
                }
            }
        ]
    }

    render() {
        let categories = this.state.categories
        let products = this.state.products
        let heroes = this.state.heroes   
        
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
            })}
            </Slider>

            
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
            ///Products
               if(category._id === product.category._id) {
                   return (
                    <div className="product-card" key={i}>
                    <a key={product.sku} href={product.productURL}>
                    <img alt={product.name} style={imageSpecs} id={product.sku} src={product.imageURL} />
                    </a>
                    <h4 style= {productCat}>{product.type}</h4>
                    <span>{product.name}</span>
                    <h5 style={priceStyle}>${product.price}</h5>
                    <a href={product.cartLink} target="_blank">
                    <button className="prod-button" style={productButton}>Add to Cart</button>
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
