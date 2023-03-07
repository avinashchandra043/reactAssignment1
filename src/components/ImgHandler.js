import React from "react";
import ImageCard from "./ImageCard";
import "./ImageCard.css";
import ListCard from "./ListCard";
import { connect } from "react-redux";
import { changeType } from "../store/myAction";
function ImgHandler({ value, currentType }) {
  const data = [
    {
      id: 1,
      name: "Name",
      fileName: "Imagen_ame.jpg",
      size_ration: "310 X 250",
      author: "Emily Watkins",
      uploaded: "5th Jan 2021",
      time: "06:15 PM",
      size: 3.4,
      type: "jpg",
    },
    {
      id: 2,
      name: "Name",
      fileName: "Imagen_ame.jpg",
      size_ration: "310 X 250",
      author: "Emily Watkins",
      uploaded: "5th Jan 2021",
      time: "06:15 PM",
      size: 3.4,
      type: "jpg",
    },
    {
      id: 3,
      name: "Name",
      fileName: "Imagen_ame.jpg",
      size_ration: "310 X 250",
      author: "Emily Watkins",
      uploaded: "5th Jan 2021",
      time: "06:15 PM",
      size: 3.4,
      type: "mp4",
    },
    {
      id: 4,
      name: "Name",
      fileName: "Imagen_ame.jpg",
      size_ration: "310 X 250",
      author: "Emily Watkins",
      uploaded: "5th Jan 2021",
      time: "06:15 PM",
      size: 3.4,
      type: "jpg",
    },
    {
      id: 5,
      name: "Name",
      fileName: "Imagen_ame.jpg",
      size_ration: "310 X 250",
      author: "Emily Watkins",
      uploaded: "5th Jan 2021",
      time: "06:15 PM",
      size: 3.4,
      type: "jpg",
    },
    {
      id: 6,
      name: "Name",
      fileName: "Imagen_ame.jpg",
      size_ration: "310 X 250",
      author: "Emily Watkins",
      uploaded: "5th Jan 2021",
      time: "06:15 PM",
      size: 3.4,
      type: "mp4",
    },
    {
      id: 7,
      name: "Name",
      fileName: "Imagen_ame.jpg",
      size_ration: "310 X 250",
      author: "Emily Watkins",
      uploaded: "5th Jan 2021",
      time: "06:15 PM",
      size: 3.4,
      type: "jpg",
    },
    {
      id: 8,
      name: "Name",
      fileName: "Imagen_ame.jpg",
      size_ration: "310 X 250",
      author: "Emily Watkins",
      uploaded: "5th Jan 2021",
      time: "06:15 PM",
      size: 3.4,
      type: "jpg",
    },
    {
      id: 9,
      name: "Name",
      fileName: "Imagen_ame.jpg",
      size_ration: "310 X 250",
      author: "Emily Watkins",
      uploaded: "5th Jan 2021",
      time: "06:15 PM",
      size: 3.4,
      type: "mp4",
    },
  ];
  const arr = [...currentType];
  console.log(arr);
  arr.map((value) => {
    document.getElementById(value).style.background = "#00bbd8";
    document.getElementById(value).style.borderColor = "#00bbd8";
    document.getElementById(value).style.color = "white";
    document.getElementById(`{${value}ext}`).style.color = "#5e7c98";
    document.getElementById(`{${value}ext}`).style.backgroundColor = "white";
    document.getElementById(`{${value}svg}`).style.fill = "white";
  });
  // let newArr = [];
  // for (let i = 1; i <= 9; i++) {
  //   if (arr.findIndex((element) => element === i) < 0) {
  //     newArr.push(i);
  //   }
  // }
  // newArr.map((value) => {
  //   document.getElementById(value).style.background = "#fff";
  //   document.getElementById(value).style.borderColor = "#dfe3eb";
  //   document.getElementById(value).style.color = "#497696";
  //   document.getElementById(`{${value}ext}`).style.color = "#fff";
  //   document.getElementById(`{${value}ext}`).style.backgroundColor = "#99acc2";
  //   document.getElementById(`{${value}svg}`).style.fill = "#99acc2";
  // });

  return (
    <div>
      {value ? (
        <div className="imgHandler">
          {data.map((value) => (
            <ImageCard
              name={value.name}
              size={value.size}
              type={value.type}
              keyValue={value.id}
            />
          ))}
        </div>
      ) : (
        <div className="imgHandler2">
          <div className="listTitle">
            <div className="listTitle1">
              <input type="checkbox" />
            </div>
            <div className="listTitle2">File Name</div>
            <div className="listTitle3">Size and Ration</div>
            <div className="listTitle4">Uploaded at</div>
            <div className="listTitle5">Author</div>
          </div>
          <div>
            {data.map((value) => (
              <ListCard
                file={value.fileName}
                rat={value.size_ration}
                author={value.author}
                uploaded={value.uploaded}
                time={value.time}
                size={value.size}
              />
            ))}
          </div>
        </div>
      )}
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
export default connect(mapStateToProps, mapDispatchToProps)(ImgHandler);
