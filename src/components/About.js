import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import ReactStars from "react-rating-stars-component";


class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foodItems: []
    }
  }

  //React lifecycle 
componentDidMount() {
  axios.get(`https://asm-dev-api.herokuapp.com/api/v1/food`)
  .then(res => {
    console.log("this is the response", res)
    const food = res.data.data.meals;
    this.setState({ foodItems: food });
  }).catch(error => {
    console.log("this is the error", error)
  })
  }
  ratingChanged = (newRating) => {
    console.log(newRating);
  };

  render() {
    const { foodItems } = this.state
    return (
      <div>
        <body>
          <main>

            <div className="cards">
              {
                foodItems && foodItems.map((item, index) => (

                  <div className="card">
                    <div className="img">
                      <img src={item.strMealThumb} 
                    alt="foods"/>
                    </div>
                    
                    <div className="vish1">
                      <h3>{item.title}</h3>
                      <h3>{item.price}</h3>
                    </div>
                    <h6>{item.strMeal}</h6>
                    <p>{item.description}</p>
                    <FontAwesomeIcon className="square" icon={faPlus} />
                    <div className="atm">
                      <ReactStars 
                      count={item.ratings}
                      onChange={this.ratingChanged}
                      size={24}
                      activeColor="#ffd700"
                    />,
                      
                    </div>
                    
                    
                  </div>
                  
                ))
              }
              
            </div>
            <h5 className="pat" > Learn More</h5>
            <div>
              
            </div>

          </main>
        </body>
      </div>
    )
  }
}

export default About
