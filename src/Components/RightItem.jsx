import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function RightItem(props) {
  return (
    <div className='right-item item'>
      <div className='item-img'>
        <img src={props.image} alt='' />
      </div>
      <div>
        <p>{props.body}</p>
        <Link to={props.link} target='_blank'>
          <button className='btn'>{props.btnContent}</button>
        </Link>
      </div>
    </div>
  );
}

export default RightItem;
