import React from "react";
import "./ListCard.css";
import ListImg from "../assets/chocolate-chip-.png";
function ListCard(props) {
  return (
    <div className="listcard">
      <div className="listcard1">
        <input type="checkbox" />
      </div>
      <div className="listcard2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="529 2123 20 20"
        >
          <path
            d="M546 2123h-14a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-14a3 3 0 0 0-3-3Zm-9 5a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm-2.51 13H532a1 1 0 0 1-.94-.71l3.09-3.71a1.08 1.08 0 0 1 .79-.36 1 1 0 0 1 .78.4l1 1.33-2.23 3.05Zm12.51-1a1 1 0 0 1-1 1h-9l5.47-7.52a1 1 0 0 1 1.52-.12l3.01 3.05v3.59Z"
            fill="#99ACC2"
            fillRule="evenodd"
            data-name="image (1)"
          />
        </svg>
      </div>
      <div className="listcard3">
        <img src={ListImg} />
      </div>
      <div className="listcard7">{props.file}</div>
      <div className="listcard4">
        <div>{props.size} MB</div>
        <div className="listcard41"></div>
        <div>{props.rat}</div>
      </div>
      <div className="listcard5">
        <div>{props.uploaded},</div>
        <div>{props.time}</div>
      </div>
      <div className="listcard6">
        <div>{props.author}</div>
      </div>
    </div>
  );
}

export default ListCard;
