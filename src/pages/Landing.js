import React from 'react';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Link } from 'react-router-dom';
import Logo from '../Component/Logo';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo/>
      </nav>
      <div className="container page">
        <div>
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p>
            I'm baby grailed normcore neutra la croix. Gluten-free tofu flannel skateboard wolf, ennui 3 wolf moon. Kinfolk
            dreamcatcher cupping grailed, la croix readymade next level edison bulb pok pok bitters tonx pork belly
            biodiesel adaptogen.
          </p>
          <Link to={'/Login'}><button className="btn btn-hero">Login/Register</button>
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};


export default Landing;
