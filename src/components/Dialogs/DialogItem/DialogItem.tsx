import c from "../Dialogs.module.css";
import {Link} from "react-router-dom";
import React from "react";

type DialogsType = {
    name: string
    id: number
}

function DialogItem(props: DialogsType ) {
    return (
        <div className={`${c.dialog} ${c.active}`}>
            <Link to={`/dialogs/${props.id}`}>{props.name}</Link>
        </div>
    )
}

export default DialogItem