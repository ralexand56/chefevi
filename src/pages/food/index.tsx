import React, { useEffect } from "react";
import styled from "styled-components";
import { FoodCategory, Food } from "../../interfaces";
import firebase from "../../Firebase";
import fb from "firebase";

const Main = styled.main`
  padding: 3em 1em;
  font-size: 2em;
`;

const StyledLInk = styled.a`
  &:hover {
    cursor: pointer;
  }
`;

// collection.add({ name: "All" });

export default () => {
  const [categories, setCategories] = React.useState<FoodCategory[]>([
    { id: "1", name: "All", sort: 5 },
    { id: "2", name: "Hors D'ouevres", sort: 10 },
    { id: "3", name: "Main Dishes", sort: 10 },
    { id: "4", name: "Sides", sort: 10 },
    { id: "5", name: "Desserts", sort: 10 },
    { id: "6", name: "Beverages", sort: 90 }
  ]);
  const [currentCategoryId, setCurrentCategoryId] = React.useState();
  const [foods, setFoods] = React.useState<Food[]>([]);

  const onCollectionUpdate = (querySnapshot: fb.firestore.QuerySnapshot) => {
    const categs: FoodCategory[] = [];

    querySnapshot.docs.map(doc => {
      const { name, sort } = doc.data();

      categs.push({
        id: doc.id,
        name,
        sort
      });
    });

    setCategories(categs);
    setCurrentCategoryId(categs.filter(x => x.name === "All")[0].id);
  };

  useEffect(() => {
    const collection = firebase.firestore().collection("foodCategories");

    collection.onSnapshot(onCollectionUpdate);
  }, []);

  const handleCategoryClick = (id: string) => setCurrentCategoryId(id);

  return (
    <div id="wrapper">
      {/* <!--top_header start--> */}
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
                          <a href="index.html">home</a>
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
                              <a href="gallery-4-column.html">Food/Beverage</a>
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
        <div className="hm_bread_wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <h1>food gallery</h1>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Food Gallery</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        {/* <!--About section start--> */}
        <div className="hm_gallery_wrapper">
          <div className="container">
            <div className="hm_gallery_inner margin_btm30">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="filter_list">
                    <ul>
                      {categories.sort((a,b) => a.sort - b.sort).map(x => (
                        <li
                          key={x.id}
                          onClick={() => handleCategoryClick(x.id)}
                        >
                          <StyledLInk
                            className={`filter${
                              currentCategoryId === x.id ? " active" : ""
                            }`}
                          >
                            {x.name}
                          </StyledLInk>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="gallery_full_width" id="portfolio">
                    <div
                      className="col-lg-3 col-md-3 col-sm-6 padding_left padding_right mix mix-all apps"
                      data-value="2"
                    >
                      <div className="gallery_img">
                        <img
                          src="images/gallery/apps2.jpg"
                          alt=""
                          className="img-responsive"
                        />
                        <div className="gallery_img_overlay" />
                        <div className="overlay_buttons">
                          <h4>
                            Teriyaki Chicken Skewers & Vegan Pulled Pork Over
                            Polenta
                          </h4>
                          <a
                            className="popup-gallery"
                            href="images/gallery/apps2.jpg"
                          >
                            <i className="fa fa-search" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-md-3 col-sm-6 padding_left padding_right mix mix-all apps"
                      data-value="2"
                    >
                      <div className="gallery_img">
                        <img
                          src="images/gallery/apps1.jpg"
                          alt=""
                          className="img-responsive"
                        />
                        <div className="gallery_img_overlay" />
                        <div className="overlay_buttons">
                          <h4>
                            Teriyaki Chicken Skewers & Vegan Pulled Pork Over
                            Polenta
                          </h4>
                          <a
                            className="popup-gallery"
                            href="images/gallery/apps1.jpg"
                          >
                            <i className="fa fa-search" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-md-3 col-sm-6 padding_left padding_right mix mix-all apps"
                      data-value="2"
                    >
                      <div className="gallery_img">
                        <img
                          src="images/gallery/apps3.jpg"
                          alt=""
                          className="img-responsive"
                        />
                        <div className="gallery_img_overlay" />
                        <div className="overlay_buttons">
                          <h4>Brown Sugar Glazed/ Bacon Wrapped Scallops</h4>
                          <a
                            className="popup-gallery"
                            href="images/gallery/apps3.jpg"
                          >
                            <i className="fa fa-search" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-md-3 col-sm-6 padding_left padding_right mix mix-all apps"
                      data-value="2"
                    >
                      <div className="gallery_img">
                        <img
                          src="images/gallery/apps4.jpg"
                          alt=""
                          className="img-responsive"
                        />
                        <div className="gallery_img_overlay" />
                        <div className="overlay_buttons">
                          <h4>Buffalo Deviled Eggs</h4>
                          <a
                            className="popup-gallery"
                            href="images/gallery/apps4.jpg"
                          >
                            <i className="fa fa-search" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-md-3 col-sm-6 padding_left padding_right mix mix-all apps"
                      data-value="2"
                    >
                      <div className="gallery_img">
                        <img
                          src="images/gallery/apps5.jpg"
                          alt=""
                          className="img-responsive"
                        />
                        <div className="gallery_img_overlay" />
                        <div className="overlay_buttons">
                          <h4>Thai Spring Rolls with Sweet Chili Sauce</h4>
                          <a
                            className="popup-gallery"
                            href="images/gallery/apps5.jpg"
                          >
                            <i className="fa fa-search" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-md-3 col-sm-6 padding_left padding_right mix mix-all des"
                      data-value="2"
                    >
                      <div className="gallery_img">
                        <img
                          src="images/gallery/des5.jpg"
                          alt=""
                          className="img-responsive"
                        />
                        <div className="gallery_img_overlay" />
                        <div className="overlay_buttons">
                          <h4>
                            Red Velevet Cupcake with Cream Cheese Frosting
                          </h4>
                          <a
                            className="popup-gallery"
                            href="images/gallery/des5.jpg"
                          >
                            <i className="fa fa-search" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-md-3 col-sm-6 padding_left padding_right mix mix-all apps"
                      data-value="2"
                    >
                      <div className="gallery_img">
                        <img
                          src="images/gallery/apps7.jpg"
                          alt=""
                          className="img-responsive"
                        />
                        <div className="gallery_img_overlay" />
                        <div className="overlay_buttons">
                          <h4>Bacon Mustard Greens over Crisp Polenta</h4>
                          <a
                            className="popup-gallery"
                            href="images/gallery/apps7.jpg"
                          >
                            <i className="fa fa-search" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-md-3 col-sm-6 padding_left padding_right mix mix-all main"
                      data-value="3"
                    >
                      <div className="gallery_img">
                        <img
                          src="images/gallery/main1.jpg"
                          alt=""
                          className="img-responsive"
                        />
                        <div className="gallery_img_overlay" />
                        <div className="overlay_buttons">
                          <h4>
                            Soy Maple Glazed Salmon over Wild Rice & Asparagus
                          </h4>
                          <a
                            className="popup-gallery"
                            href="images/gallery/main1.jpg"
                          >
                            <i className="fa fa-search" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-md-3 col-sm-6 padding_left padding_right mix mix-all main"
                      data-value="3"
                    >
                      <div className="gallery_img">
                        <img
                          src="images/gallery/main2.jpg"
                          alt=""
                          className="img-responsive"
                        />
                        <div className="gallery_img_overlay" />
                        <div className="overlay_buttons">
                          <h4>Meatballs over Handmade Buccatini</h4>
                          <a
                            className="popup-gallery"
                            href="images/gallery/main2.jpg"
                          >
                            <i className="fa fa-search" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-md-3 col-sm-6 padding_left padding_right mix mix-all main"
                      data-value="3"
                    >
                      <div className="gallery_img">
                        <img
                          src="images/gallery/main3.jpg"
                          alt=""
                          className="img-responsive"
                        />
                        <div className="gallery_img_overlay" />
                        <div className="overlay_buttons">
                          <h4>
                            Soy Maple Glazed Salmon over White Cheddar Truffle
                            Mashed Potatoes
                          </h4>
                          <a
                            className="popup-gallery"
                            href="images/gallery/main3.jpg"
                          >
                            <i className="fa fa-search" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-md-3 col-sm-6 padding_left padding_right mix mix-all main"
                      data-value="3"
                    >
                      <div className="gallery_img">
                        <img
                          src="images/gallery/main4.jpg"
                          alt=""
                          className="img-responsive"
                        />
                        <div className="gallery_img_overlay" />
                        <div className="overlay_buttons">
                          <h4>Assorted Sushi</h4>
                          <a
                            className="popup-gallery"
                            href="images/gallery/main4.jpg"
                          >
                            <i className="fa fa-search" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-md-3 col-sm-6 padding_left padding_right mix mix-all main"
                      data-value="3"
                    >
                      <div className="gallery_img">
                        <img
                          src="images/gallery/main5.jpg"
                          alt=""
                          className="img-responsive"
                        />
                        <div className="gallery_img_overlay" />
                        <div className="overlay_buttons">
                          <h4>
                            Honey/Sriracha Pork Chops w/ Green Beans & Herb
                            Roasted Potatoes
                          </h4>
                          <a
                            className="popup-gallery"
                            href="images/gallery/main5.jpg"
                          >
                            <i className="fa fa-search" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-md-3 col-sm-6 padding_left padding_right mix mix-all main"
                      data-value="3"
                    >
                      <div className="gallery_img">
                        <img
                          src="images/gallery/main6.jpg"
                          alt=""
                          className="img-responsive"
                        />
                        <div className="gallery_img_overlay" />
                        <div className="overlay_buttons">
                          <h4>Shrimp Scampi over Zucchini Pasta</h4>
                          <a
                            className="popup-gallery"
                            href="images/gallery/main6.jpg"
                          >
                            <i className="fa fa-search" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-md-3 col-sm-6 padding_left padding_right mix mix-all main"
                      data-value="3"
                    >
                      <div className="gallery_img">
                        <img
                          src="images/gallery/main7.jpg"
                          alt=""
                          className="img-responsive"
                        />
                        <div className="gallery_img_overlay" />
                        <div className="overlay_buttons">
                          <h4>
                            Lobster Tail w/ White Cheddar Truffle Mashed
                            Potatoes and Roasted Brussel Sprouts
                          </h4>
                          <a
                            className="popup-gallery"
                            href="images/gallery/main7.jpg"
                          >
                            <i className="fa fa-search" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-md-3 col-sm-6 padding_left padding_right mix mix-all main"
                      data-value="3"
                    >
                      <div className="gallery_img">
                        <img
                          src="images/gallery/main8.jpg"
                          alt=""
                          className="img-responsive"
                        />
                        <div className="gallery_img_overlay" />
                        <div className="overlay_buttons">
                          <h4>Juicy Lucy Burger</h4>
                          <a
                            className="popup-gallery"
                            href="images/gallery/main8.jpg"
                          >
                            <i className="fa fa-search" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-md-3 col-sm-6 padding_left padding_right mix mix-all main"
                      data-value="3"
                    >
                      <div className="gallery_img">
                        <img
                          src="images/gallery/main9.jpg"
                          alt=""
                          className="img-responsive"
                        />
                        <div className="gallery_img_overlay" />
                        <div className="overlay_buttons">
                          <h4>
                            Handmade Goat Cheese/Portobello Mushroom Ravioli in
                            Sage Butter Sauce
                          </h4>
                          <a
                            className="popup-gallery"
                            href="images/gallery/main9.jpg"
                          >
                            <i className="fa fa-search" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-md-3 col-sm-6 padding_left padding_right mix mix-all des"
                      data-value="3"
                    >
                      <div className="gallery_img">
                        <img
                          src="images/gallery/des1.jpg"
                          alt=""
                          className="img-responsive"
                        />
                        <div className="gallery_img_overlay" />
                        <div className="overlay_buttons">
                          <h4>Fresh Churros w/ Homemade Chocolate Sauce</h4>
                          <a
                            className="popup-gallery"
                            href="images/gallery/des1.jpg"
                          >
                            <i className="fa fa-search" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-md-3 col-sm-6 padding_left padding_right mix mix-all des"
                      data-value="3"
                    >
                      <div className="gallery_img">
                        <img
                          src="images/gallery/des2.jpg"
                          alt=""
                          className="img-responsive"
                        />
                        <div className="gallery_img_overlay" />
                        <div className="overlay_buttons">
                          <h4>Dessert Display</h4>
                          <a
                            className="popup-gallery"
                            href="images/gallery/des2.jpg"
                          >
                            <i className="fa fa-search" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-md-3 col-sm-6 padding_left padding_right mix mix-all des"
                      data-value="3"
                    >
                      <div className="gallery_img">
                        <img
                          src="images/gallery/des3.jpg"
                          alt=""
                          className="img-responsive"
                        />
                        <div className="gallery_img_overlay" />
                        <div className="overlay_buttons">
                          <h4>Rose Apple Pastries</h4>
                          <a
                            className="popup-gallery"
                            href="images/gallery/des3.jpg"
                          >
                            <i className="fa fa-search" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-md-3 col-sm-6 padding_left padding_right mix mix-all des"
                      data-value="3"
                    >
                      <div className="gallery_img">
                        <img
                          src="images/gallery/des4.jpg"
                          alt=""
                          className="img-responsive"
                        />
                        <div className="gallery_img_overlay" />
                        <div className="overlay_buttons">
                          <h4>Chocolate Pecan Pie</h4>
                          <a
                            className="popup-gallery"
                            href="images/gallery/des4.jpg"
                          >
                            <i className="fa fa-search" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-md-3 col-sm-6 padding_left padding_right mix mix-all bev"
                      data-value="3"
                    >
                      <div className="gallery_img">
                        <img
                          src="images/gallery/bev1.jpg"
                          alt=""
                          className="img-responsive"
                        />
                        <div className="gallery_img_overlay" />
                        <div className="overlay_buttons">
                          <h4>
                            Citrus Red Sangria & Cilantro/Lime Agua Fresca
                          </h4>
                          <a
                            className="popup-gallery"
                            href="images/gallery/bev1.jpg"
                          >
                            <i className="fa fa-search" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-md-3 col-sm-6 padding_left padding_right mix mix-all des"
                      data-value="3"
                    >
                      <div className="gallery_img">
                        <img
                          src="images/gallery/des6.jpg"
                          alt=""
                          className="img-responsive"
                        />
                        <div className="gallery_img_overlay" />
                        <div className="overlay_buttons">
                          <h4>Snickerdoodle Warm Butter Cake</h4>
                          <a
                            className="popup-gallery"
                            href="images/gallery/des6.jpg"
                          >
                            <i className="fa fa-search" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-md-3 col-sm-6 padding_left padding_right mix mix-all des"
                      data-value="3"
                    >
                      <div className="gallery_img">
                        <img
                          src="images/gallery/apps9.jpg"
                          alt=""
                          className="img-responsive"
                        />
                        <div className="gallery_img_overlay" />
                        <div className="overlay_buttons">
                          <h4>Caprese Flower</h4>
                          <a
                            className="popup-gallery"
                            href="images/gallery/apps9.jpg"
                          >
                            <i className="fa fa-search" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-md-3 col-sm-6 padding_left padding_right mix mix-all des"
                      data-value="3"
                    >
                      <div className="gallery_img">
                        <img
                          src="images/gallery/apps10.jpg"
                          alt=""
                          className="img-responsive"
                        />
                        <div className="gallery_img_overlay" />
                        <div className="overlay_buttons">
                          <h4>
                            Goat Cheese Portobello Crisp Ravioli in Sage Butter
                          </h4>
                          <a
                            className="popup-gallery"
                            href="images/gallery/apps10.jpg"
                          >
                            <i className="fa fa-search" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-md-3 col-sm-6 padding_left padding_right mix mix-all des"
                      data-value="3"
                    >
                      <div className="gallery_img">
                        <img
                          src="images/gallery/apps11.jpg"
                          alt=""
                          className="img-responsive"
                        />
                        <div className="gallery_img_overlay" />
                        <div className="overlay_buttons">
                          <h4>Caprese Skewers</h4>
                          <a
                            className="popup-gallery"
                            href="images/gallery/apps11.jpg"
                          >
                            <i className="fa fa-search" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-md-3 col-sm-6 padding_left padding_right mix mix-all des"
                      data-value="3"
                    >
                      <div className="gallery_img">
                        <img
                          src="images/gallery/apps12.jpg"
                          alt=""
                          className="img-responsive"
                        />
                        <div className="gallery_img_overlay" />
                        <div className="overlay_buttons">
                          <h4>Bagel Station</h4>
                          <a
                            className="popup-gallery"
                            href="images/gallery/apps12.jpg"
                          >
                            <i className="fa fa-search" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-md-3 col-sm-6 padding_left padding_right mix mix-all des"
                      data-value="3"
                    >
                      <div className="gallery_img">
                        <img
                          src="images/gallery/apps13.jpg"
                          alt=""
                          className="img-responsive"
                        />
                        <div className="gallery_img_overlay" />
                        <div className="overlay_buttons">
                          <h4>Tea Sandwiches</h4>
                          <a
                            className="popup-gallery"
                            href="images/gallery/apps13.jpg"
                          >
                            <i className="fa fa-search" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-md-3 col-sm-6 padding_left padding_right mix mix-all des"
                      data-value="3"
                    >
                      <div className="gallery_img">
                        <img
                          src="images/gallery/apps14.jpg"
                          alt=""
                          className="img-responsive"
                        />
                        <div className="gallery_img_overlay" />
                        <div className="overlay_buttons">
                          <h4>Classic Deviled Eggs</h4>
                          <a
                            className="popup-gallery"
                            href="images/gallery/apps14.jpg"
                          >
                            <i className="fa fa-search" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-md-3 col-sm-6 padding_left padding_right mix mix-all des"
                      data-value="3"
                    >
                      <div className="gallery_img">
                        <img
                          src="images/gallery/apps15.jpg"
                          alt=""
                          className="img-responsive"
                        />
                        <div className="gallery_img_overlay" />
                        <div className="overlay_buttons">
                          <h4>Charcuterie</h4>
                          <a
                            className="popup-gallery"
                            href="images/gallery/apps15.jpg"
                          >
                            <i className="fa fa-search" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-3 col-md-3 col-sm-6 padding_left padding_right mix mix-all des"
                      data-value="3"
                    >
                      <div className="gallery_img">
                        <img
                          src="images/gallery/apps17.jpg"
                          alt=""
                          className="img-responsive"
                        />
                        <div className="gallery_img_overlay" />
                        <div className="overlay_buttons">
                          <h4>Brunch Layout</h4>
                          <a
                            className="popup-gallery"
                            href="images/gallery/apps17.jpg"
                          >
                            <i className="fa fa-search" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--footer start--> */}
        <div className="hm_footer_wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-6">
                <div className="hm_footer_box">
                  <img
                    src="images/chefEviLogo.png"
                    alt=""
                    className="img-responsive"
                  />
                  <p className="footer_about_para">
                    Making the world a happier place, one tummy at a time.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6">
                <div className="hm_footer_box">
                  <h3 className="footer_heading">Follow</h3>
                  <ul>
                    <li>
                      <a href="#">Facebook</a>
                    </li>
                    <li>
                      <a href="#">Instagram</a>
                    </li>
                    <li>
                      <a href="#">Twitter</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6">
                <div className="hm_footer_box">
                  <h3 className="footer_heading">Links</h3>
                  <ul>
                    <li>
                      <a href="index.html">home</a>
                    </li>
                    <li>
                      <a href="contact.html">Request a Quote</a>
                    </li>
                    <li>
                      <a href="services.html">Menus & Services</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6">
                <div className="hm_footer_box hm_footer_contact">
                  <h3 className="footer_heading">Our Information</h3>
                  <ul>
                    <li>
                      <span className="footer_icon">
                        <i className="fa fa-map-marker" aria-hidden="true" />{" "}
                      </span>
                      <p className="foo_con_para">Culver City, CA</p>
                    </li>
                    <li>
                      <span className="footer_icon">
                        <i className="fa fa-phone" aria-hidden="true" />{" "}
                      </span>
                      <p className="foo_con_para">424.273.7630</p>
                    </li>
                    <li>
                      <a href="mailto:chef@thechefevi.com">
                        <span className="footer_icon">
                          <i className="fa fa-envelope" aria-hidden="true" />{" "}
                        </span>
                        <p className="foo_con_para">chef@thechefevi.com</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--bottom footer start--> */}
        <div className="hm_bottom_footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <p>Copyrights &copy; 2017 All Rights Reserved by evibobevy</p>
              </div>
              <div className="col-lg-6 col-md-6">
                <ul className="footer_so_icons">
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-google-plus" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-pinterest-p" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
