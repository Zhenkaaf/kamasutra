import React from "react";
import { NavLink } from "react-router-dom";
import s from './../Dialogs.module.css';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.item + ' ' + s.active}>
            <img className={s.avaDial} src="https://images.hdqwalls.com/download/hair-in-face-beautiful-blonde-girl-th-1280x2120.jpg" />
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem;