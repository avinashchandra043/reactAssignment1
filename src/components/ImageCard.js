import React from "react";
import "./ImageCard.css";
import ImgFile from "../assets/chocolate-chip-.png";
import { connect } from "react-redux";
import { changeType } from "../store/myAction";
function ImageCard({ keyValue, name, size, type, currentType, changeType }) {
  const handleMultiple = () => {
    const arr = [...currentType];
    if (arr.findIndex((element) => element === keyValue) > -1) {
      const newarr = arr.filter(function (value) {
        return value !== keyValue;
      });
      changeType(newarr);
      let newArr = [];
      for (let i = 1; i <= 9; i++) {
        if (newarr.findIndex((element) => element === i) < 0) {
          newArr.push(i);
        }
      }
      newArr.map((value) => {
        document.getElementById(value).style.background = "#fff";
        document.getElementById(value).style.borderColor = "#dfe3eb";
        document.getElementById(value).style.color = "#497696";
        document.getElementById(`{${value}ext}`).style.color = "#fff";
        document.getElementById(`{${value}ext}`).style.backgroundColor =
          "#99acc2";
        document.getElementById(`{${value}svg}`).style.fill = "#99acc2";
      });
    } else {
      arr.push(keyValue);
      changeType(arr);
    }
  };
  return (
    <div className="imgcard" id={keyValue} onClick={handleMultiple}>
      <div className="imgcard1">
        <img src={ImgFile} />
      </div>
      <div className="imgcard2">
        <div className="imgcard21">
          <div className="imgcard211">
            <div>{name}</div>
            <div className="imgcard2111">
              <div>{size} MB</div>
              <div className="imgcard21111">
                <div className="imgcardExt" id={`{${keyValue}ext}`}>
                  {type}
                </div>
                <div className="imgcardsvg">
                  <svg
                    id={`{${keyValue}svg}`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="529 2123 20 20"
                  >
                    <path
                      d="M546 2123h-14a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-14a3 3 0 0 0-3-3Zm-9 5a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm-2.51 13H532a1 1 0 0 1-.94-.71l3.09-3.71a1.08 1.08 0 0 1 .79-.36 1 1 0 0 1 .78.4l1 1.33-2.23 3.05Zm12.51-1a1 1 0 0 1-1 1h-9l5.47-7.52a1 1 0 0 1 1.52-.12l3.01 3.05v3.59Z"
                      fillRule="evenodd"
                      data-name="image (1)"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    currentType: state.my.type,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeType: (value) => dispatch(changeType(value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ImageCard);
