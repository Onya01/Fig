import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPlus } from '@fortawesome/free-solid-svg-icons';
import Media from 'react-responsive';

function About() {
  return (
    <Media query="(min-width: 400px)">
      <body>
        <main>
          <div className="container">
            <div className="image1">
              <img
                src={require('../images/Roose Muffen.jpg').default}
                height={200}
                width={200}
                alt="food"
              />
              <div className="vish1">
                <h3>Roose Muffen</h3>
                <h3>12$</h3>
              </div>
              <h6>Serve with french fries + drink</h6>
              <p>
                Choice of: Coke, Fanta, Sprite Upgrade to a larg fries. And
                whopper patty. Add tender crisp patty and more...
              </p>
              <FontAwesomeIcon className="square" icon={faPlus} />
              <FontAwesomeIcon className="atm" icon={faStar} />
              <FontAwesomeIcon className="atm" icon={faStar} />
              <FontAwesomeIcon className="atm" icon={faStar} />
              <FontAwesomeIcon className="atm1" icon={faStar} />
            </div>
            <div className="image1">
              <img
                src={require('../images/pan cake.jpg').default}
                height={200}
                width={200}
                alt="food"
              />
              <div className="vish1">
                <h3>Egg Muffen</h3>
                <h3>12$</h3>
              </div>
              <h6>Serve with french fries + drink</h6>
              <p>
                Choice of: Coke, Fanta, Sprite Upgrade to a larg fries. And
                whopper patty. Add tender crisp patty and more...
              </p>
              <FontAwesomeIcon className="square" icon={faPlus} />
              <FontAwesomeIcon className="atm" icon={faStar} />
              <FontAwesomeIcon className="atm" icon={faStar} />
              <FontAwesomeIcon className="atm" icon={faStar} />
              <FontAwesomeIcon className="atm" icon={faStar} />
            </div>

            <div className="image1">
              <img
                src={require('../images/Egg Muffen.jpg').default}
                height={200}
                width={200}
                alt="food"
              />
              <div className="vish1">
                <h3>Pan Cake</h3>
                <h3>15$</h3>
              </div>
              <h6>Serve with french fries + drink</h6>
              <p>
                Choice of: Coke, Fanta, Sprite Upgrade to a larg fries. And
                whopper patty. Add tender crisp patty and more...
              </p>
              <FontAwesomeIcon className="square" icon={faPlus} />
              <FontAwesomeIcon className="atm" icon={faStar} />
              <FontAwesomeIcon className="atm" icon={faStar} />
              <FontAwesomeIcon className="atm" icon={faStar} />
              <FontAwesomeIcon className="atm" icon={faStar} />
            </div>
          </div>

          <div className="container1">
            <div className="image2">
              <img
                src={require('../images/Salad.jpg').default}
                height={200}
                width={200}
                alt="food"
              />
              <div className="vish1">
                <h3>Salads</h3>
                <h3>15$</h3>
              </div>
              <h6>Serve with french fries + drink</h6>
              <p>
                Choice of: Coke, Fanta, Sprite Upgrade to a larg fries. And
                whopper patty. Add tender crisp patty and more...
              </p>
              <FontAwesomeIcon className="square" icon={faPlus} />
              <FontAwesomeIcon className="atm" icon={faStar} />
              <FontAwesomeIcon className="atm" icon={faStar} />
              <FontAwesomeIcon className="atm1" icon={faStar} />
            </div>

            <div className="image2">
              <img
                src={require('../images/Egg Masala.jpg').default}
                height={200}
                width={200}
                alt="food"
              />
              <div className="vish1">
                <h3>Egg Masala</h3>
                <h3>15$</h3>
              </div>
              <h6>Serve with french fries + drink</h6>
              <p>
                Choice of: Coke, Fanta, Sprite Upgrade to a larg fries. And
                whopper patty. Add tender crisp patty and more...
              </p>
              <FontAwesomeIcon className="square" icon={faPlus} />
              <FontAwesomeIcon className="atm" icon={faStar} />
              <FontAwesomeIcon className="atm" icon={faStar} />
              <FontAwesomeIcon className="atm" icon={faStar} />
            </div>

            <div className="image2">
              <img
                src={require('../images/Vegle Muffen.jpg').default}
                height={200}
                width={200}
                alt="food"
              />
              <div className="vish1">
                <h3>Vegle Muffen</h3>
                <h3>15$</h3>
              </div>
              <h6>Serve with french fries + drink</h6>
              <p>
                Choice of: Coke, Fanta, Sprite Upgrade to a larg fries. And
                whopper patty. Add tender crisp patty and more...
              </p>
              <FontAwesomeIcon className="square" icon={faPlus} />
              <FontAwesomeIcon className="atm" icon={faStar} />
              <FontAwesomeIcon className="atm" icon={faStar} />
              <FontAwesomeIcon className="atm" icon={faStar} />
              <FontAwesomeIcon className="atm1" icon={faStar} />
            </div>
          </div>
          <p className="pt">Learn More</p>

          <div></div>
        </main>
      </body>
    </Media>
  );
}

export default About;
