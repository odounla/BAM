import React from "react";

import styled from "styled-components";

import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/undraw_greek_freak_j-2-qb.svg";

import { Link } from "react-router-dom";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Basketball <span>Africa</span> Market
          </h1>
          <p>
            Here is the website for athletes to showcase and find a sport
            contract around the world, also for coaches to track and recruits
            atlests with bether profile.
          </p>

          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="team hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
