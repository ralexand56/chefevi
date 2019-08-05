import React from "react";

export default () => {
  return (
    <div className="hm_home_style1 hm_home_style3">
      {/* <!--menu start--> */}
      <div className="hm_menu_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="hm_logo">
                <a href="index.html">
                  <img
                    src="images/chefEviLogo.png"
                    alt=""
                    className="img-responsive"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-8">
              <div className="hm_menu_wrap">
                <nav>
                  <div className="menu_btn">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="hm_menu">
                    <ul>
                      <li className="active dropdown">
                        <a href="/">home</a>
                      </li>
                      <li>
                        <a href="contact.html">Request a quote</a>
                      </li>
                      <li>
                        <a href="services.html">Menus & Services</a>
                      </li>
                      <li className="dropdown">
                        <a href="javacsript:;">Media</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="gallery-3-column.html">Chef Evi Team</a>
                          </li>
                          <li>
                            <a href="./food">Food/Beverage</a>
                          </li>
                          <li>
                            <a href="./admin">Admin</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--banner start--> */}
      
    </div>
  );
};
