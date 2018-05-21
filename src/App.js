import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MediaQuery from 'react-responsive';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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
      );
    }
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

        
///////////// CSS STYLES////////////////////////////
        let categoryBackground = {
            background: 'url(' + this.props.background + ') no-repeat',
            backgroundSize: 'cover', 
            width: '100%',
            height: '30rem'
        }

        let titleBar = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#EC7701',
            width: '100%',
            height: '7rem',
            textAlign: 'center'
        }

        let title = {
            color: 'white',
            fontSize: '4em',
            textTransform: 'uppercase'
        }

        let content = {
            textAlign: 'center',
            fontSize: '2em',
            padding: '6% 8% 3% 8%',
            margin: 'auto'
        }

        let hr = {
            width: '75%',
            height: '2px',
            color: '#eee',
            backgrundCOlor: '#eee',
            borderTop: '3px solid #929292'
            }
////////////////////////////////////////////////////////


      return (
        <div {...this.props} className="category" >
        <div style={categoryBackground}></div>
        <div style={titleBar}>
        <h2 style= {title}>{this.props.title}</h2>
        </div>
        <p style={content}>{this.props.content}</p>
        <hr style={hr} />
        <SimpleSlider products={this.props.products} />
        </div>
      )
    }
}

class App extends Component {
    state = { categories: [] }
    componentDidMount() {
     
      fetch('/categories')
      .then(res => res.json())
      .then(categories => this.setState({ categories }))
    }

    render() {
        let data = this.state.categories;
        let DataToRender = data && data.title ? data.map(category =>{
            let title = data.title
            let background = data.background
            let content = data.content

            let product = data.products.map(product => {
              let productName = product.name
              let productPrice = product.price
              let productLink = product.cartLink
              return productName || productPrice || productLink
            })

            return title || background || content || product
        }) : []
        
        return (
        <div className="app">
            {data ?
            <div>
            <HeroCategory />
            {data.map((category, i) => {
              let autoMargin = {
                margin: 'auto'
              }

              let displayProduct = category.products.map ((product, i) => {
                return (
                <div>
                  <img style={autoMargin} src={product.imageURL} />
                  <h4>{product.name}</h4>
                  <h5>{product.price}</h5>
                </div>
                )})
    
              return (
              <CategorySection 
              key={i} 
              title={category.title} background= {category.background} 
              content={category.content} products={displayProduct} />
              )}
          )}          
            </div>
           : '...loading' }
        </div>
        );
    }
}
export default App;  
