import React from "react";
import "../styles/styles.css"; 

const Navigation = () => {
  return (
    <div className="Navbar">
      <div className="menu">
        <a href="index.html"><img src="home_icon.png" alt="HOME" width="25px" /></a>
        <div id="mySidenav" className="navi">
          <div><a href="#">All Tutorials</a></div>
          <div><a href="#">Videos</a></div>
          <div><a href="#">Notes</a></div>
          <div><a href="#">Practice Problems</a></div>
          <div><a href="#">Books</a></div>
          <div><a href="#">University Space</a></div>
        </div>
        <input className="search" type="text" name="search" placeholder="Search... " />
      </div>
    </div>
  );
};

const HeaderContent = () => {
  return (
    <div className="mainContent">
      <div className="backGroundEffect">
        <img src="/io.svg" alt="Logo" />
      </div>

      <div className="picture">
        <div className="inte">
          <h1 className="hellow orange">Code</h1>
          <h1 className="hellow white">सीखेगा</h1>
          <h1 className="hellow green">Bharat</h1>
        </div>
        <div className="greeting">
          <p>Hello 👋 Programmer</p>
          <div className="animation1">
            <div className="first">
              <div>Learn Code</div>
            </div>
            <div className="second">
              <div>Do Practice</div>
            </div>
            <div className="third">
              <div>Have Fun</div>
            </div>
          </div>
        </div>
      </div>

      <div className="daco">
        <img src="/io.svg" alt="Logo" />
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <Navigation />
      <HeaderContent />
    </>
  );
};

export default Home;
