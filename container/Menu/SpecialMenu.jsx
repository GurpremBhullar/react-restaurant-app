import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Enjoy" />
      <h1 className="headtext__cormorant">Today&apos;s Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Veg</p>
        <div className="app__specialMenu_menu_items">
          {data.veg.map((veg, index) => (
            <MenuItem key={veg.title + index} title={veg.title} price={veg.price} tags={veg.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.spices} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_nonveg  flex__center">
        <p className="app__specialMenu-menu_heading">Non Veg</p>
        <div className="app__specialMenu_menu_items">
          {data.nonveg.map((nonveg, index) => (
            <MenuItem key={nonveg.title + index} title={nonveg.title} price={nonveg.price} tags={nonveg.tags} />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">View More</button>
    </div>
  </div>
);

export default SpecialMenu;