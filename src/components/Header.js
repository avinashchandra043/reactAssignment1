import React, { useState } from "react";
import "./Header.css";
import ConnectionLost from "../assets/connection-lost.png";
import Upload from "../assets/upload.png";
import Path1 from "../assets/Path 1.png";
import Path2 from "../assets/Path 2.png";
import Pencil from "../assets/pencil (1).png";
import Copy from "../assets/copy (1).png";
import Delete from "../assets/delete (1).png";
import Search from "../assets/search (2).png";
import Sort from "../assets/sort-descending.png";
import Dropdown from "../assets/Polygon 1.png";
import Grid from "../assets/grid (2).png";
import List from "../assets/list.png";
import Ribbon from "./Ribbon";
import ImgHandler from "./ImgHandler";

function Header() {
  const [list, setList] = useState(true);
  const handleGrid = () => {
    setList((prevVal) => (prevVal = true));
    document.getElementById("h1").style.background = "#eaf0f6";
    document.getElementById("h2").style.background = "#fff";
    document.getElementById("h2").style.borderWidth = "0px";
    document.getElementById("h1").style.borderWidth = "1px";
  };
  const handleList = () => {
    document.getElementById("h1").style.background = "#fff";
    document.getElementById("h2").style.background = "#eaf0f6";
    document.getElementById("h2").style.borderWidth = "1px";
    document.getElementById("h1").style.borderWidth = "0px";
    setList((prevVal) => (prevVal = false));
  };
  return (
    <div className="header">
      <div className="headerHead">
        <div className="headerHead1">
          <div className="headerHead11">
            <img src={ConnectionLost} className="headerHead111" />
          </div>
        </div>
        <div className="headerHead3"> Media Library</div>
        <div className="headerHead2">
          <div className="headerHead22">
            <div className="headerHead221">
              <div className="headerHead222"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="headerBottom">
        <div className="headerBottom1">
          <div>
            <img src={Upload} />
          </div>
          <div>Upload</div>
        </div>
        <div className="headerBottom2">
          <div>
            <img src={Path1} className="headerBottom21" />
          </div>
          <div>
            <img src={Path2} className="headerBottom22" />
          </div>
        </div>
        <div className="headerBottom3">
          <img src={Pencil} />
        </div>
        <div className="headerBottom4">
          <img src={Copy} />
        </div>
        <div className="headerBottom5">
          <img src={Delete} />
        </div>
        <div className="headerBottom6">
          <img src={Search} />
          <input placeholder="Search..." />
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
        <div className="headerBottom8">
          <div id="h1" className="headerBottom81" onClick={handleGrid}>
            <img src={Grid} />
          </div>
          <div id="h2" className="headerBottom82" onClick={handleList}>
            <img src={List} />
          </div>
        </div>
      </div>
      <Ribbon />
      <ImgHandler value={list} />
    </div>
  );
}

export default Header;
