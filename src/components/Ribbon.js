import React from "react";
import Sort from "../assets/sort-descending.png";
import Dropdown from "../assets/Polygon 1.png";
import "./Header.css";
import "./Ribbon.css";
function Ribbon() {
  return (
    <div className="ribbon">
      <div className="ribbon1">
        <div className="headerBottom7">
          <div className="headerBottom71">
            <img src={Sort} />
          </div>
          <div className="headerBottom72">
            <div>Creation Date</div>
            <div className="headerbottom73">
              <img src={Dropdown} />
            </div>
          </div>
        </div>
        <div className="headerBottom7">
          <div className="headerBottom71">
            <img src={Sort} />
          </div>
          <div className="headerBottom72">
            <div>Creation Date</div>
            <div className="headerbottom73">
              <img src={Dropdown} />
            </div>
          </div>
        </div>
      </div>
      <div className="ribbon2">
        <div className="ribbon21">Flower</div>
        <div className="ribbon21">Fruit</div>
        <div className="ribbon21">Flower</div>
        <div className="ribbon21">Fruit</div>
        <div className="ribbon22">
          <img src={Sort} />
          <div>Filters</div>
        </div>
      </div>
    </div>
  );
}

export default Ribbon;
