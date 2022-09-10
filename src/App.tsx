import React from "react";
import "./App.css";

function App() {
  return (
    <div className="w3-row-padding">
      <div className="w3-third">
        <div className="w3-white w3-text-grey w3-card-4">
          <div className="w3-display-container">
            <img
              src="/assets/img/avatar.jpeg"
              style={{ width: "100%" }}
              alt="Avatar"
            />
            <div className="w3-display-bottomleft w3-container w3-text-black">
              <h2> Supply Day </h2>
            </div>
          </div>
          <div className="w3-container">
            <p>
              <i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal" />
              Supply Company
            </p>
            <p>
              <i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal" />
              Iraq - Nasiriyah
            </p>
            <p>
              <i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal" />
              contact@gmail.com
            </p>
            <p>
              <i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal" />
              009647716248400
            </p>
            <hr />
          </div>
        </div>
        <br />
      </div>
      <div className="w3-twothird">
        <div className="w3-container w3-card w3-white w3-margin-bottom">
          <h2 className="w3-text-grey w3-padding-16">
            <i className="fa fa-truck fa-fw w3-margin-right w3-xxlarge w3-text-teal" />
            Supply Day
          </h2>
          <div className="w3-container">
            <h5 className="w3-opacity">
              <b></b>
            </h5>
            <p>
              اول شركه لتجهيز المنتجات الغذائيه العاليه الجوده لكافه انحاء العراق ..
              نحن نختصر لكل الوقت والكلفه ونصل اليك اينما تكون
            </p>
            <hr />
          </div>
          <div className="w3-container">
            <h5 className="w3-opacity">
              <b>Address</b>
            </h5>
            <p>
              Iraq - Nasiriyah, Al-Haboubi, Toffaha, next to Al-Manar Pharmacy
            </p>
            <hr />
          </div>
          {/* <div className="w3-container"> */}
          {/*  <h5 className="w3-opacity"> */}
          {/*    <b>Graphic Designer / designsomething.com</b> */}
          {/*  </h5> */}
          {/*  <h6 className="w3-text-teal"> */}
          {/*    <i className="fa fa-calendar fa-fw w3-margin-right" /> */}
          {/*    Jun 2010 - Mar 2012 */}
          {/*  </h6> */}
          {/*  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> */}
          {/*  <br /> */}
          {/* </div> */}
        </div>
        <div className="w3-container w3-card w3-white">
          <h3 className="title">Visit us</h3>
          <iframe
            className="map"
            title="mapLoc"
            src="https://maps.google.com/maps?q=31.045266,%2046.254583&t=&z=17&ie=UTF8&iwloc=&output=embed"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
        {/* <div className="w3-container w3-card w3-white"> */}
        {/*  <h2 className="w3-text-grey w3-padding-16"> */}
        {/*    <i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal" /> */}
        {/*    Education */}
        {/*  </h2> */}
        {/*  <div className="w3-container"> */}
        {/*    <h5 className="w3-opacity"> */}
        {/*      <b>W3Schools.com</b> */}
        {/*    </h5> */}
        {/*    <h6 className="w3-text-teal"> */}
        {/*      <i className="fa fa-calendar fa-fw w3-margin-right" /> */}
        {/*      Forever */}
        {/*    </h6> */}
        {/*    <p>Web Development! All I need to know in one place</p> */}
        {/*    <hr /> */}
        {/*  </div> */}
        {/*  <div className="w3-container"> */}
        {/*    <h5 className="w3-opacity"> */}
        {/*      <b>London Business School</b> */}
        {/*    </h5> */}
        {/*    <h6 className="w3-text-teal"> */}
        {/*      <i className="fa fa-calendar fa-fw w3-margin-right" /> */}
        {/*      2013 - 2015 */}
        {/*    </h6> */}
        {/*    <p>Master Degree</p> */}
        {/*    <hr /> */}
        {/*  </div> */}
        {/*  <div className="w3-container"> */}
        {/*    <h5 className="w3-opacity"> */}
        {/*      <b>School of Coding</b> */}
        {/*    </h5> */}
        {/*    <h6 className="w3-text-teal"> */}
        {/*      <i className="fa fa-calendar fa-fw w3-margin-right" /> */}
        {/*      2010 - 2013 */}
        {/*    </h6> */}
        {/*    <p>Bachelor Degree</p> */}
        {/*    <br /> */}
        {/*  </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default App;
