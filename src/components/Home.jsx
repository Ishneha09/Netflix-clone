import React from "react";
import vg from "../pictures/ph3.png";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechStar</h1>
          <p>Find the best solution here</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            Technology encompasses the application of scientific knowledge and
            tools to solve practical problems and enhance human life. In our
            modern era, technology permeates every aspect of society, driving
            progress in fields such as communication, medicine, transportation,
            and entertainment
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1> who we are?</h1>
          <p>
            Technology encompasses the application of scientific knowledge and
            tools to solve practical problems and enhance human life. In our
            modern era, technology permeates every aspect of society, driving
            progress in fields such as communication, medicine, transportation,
            and entertainment. Innovations like artificial intelligence,
            blockchain, and the Internet of Things are shaping the digital
            landscape, fostering connectivity and efficiency. As technology
            evolves, it brings both opportunities and challenges, influencing
            the way we work, learn, and interact with the world. Staying
            informed and adapting to technological advancements is key in
            navigating our rapidly changing global environment.
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
