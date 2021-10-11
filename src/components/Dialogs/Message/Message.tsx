import c from "../Dialogs.module.css";
import React from "react";

type MessageType = {
    message: string
    id: number
}

function Message(props: MessageType) {
    return (
        <div className={c.dialog}>{props.message}</div>
    )
}

export default Message