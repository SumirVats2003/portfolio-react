import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function LeftItem(props) {
  return (
    <div className='item'>
      <div>
        <p>{props.body}</p>
        <Link to={props.link} target='_blank'>
          <button className='btn'>{props.btnContent}</button>
        </Link>
      </div>
      <div className='item-img'>
        <img src={props.image} alt='' />
      </div>
    </div>
  );
}

export default LeftItem;
