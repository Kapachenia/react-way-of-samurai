import React from 'react';
import c from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogElType, MessageElType} from "../../redux/state";

type DialogsType = {
    messages: Array<MessageElType>
    dialogs: Array<DialogElType>
}

function Dialogs(props: DialogsType) {

    const textArea = React.createRef<HTMLTextAreaElement>()

    let dialogsElements = props.dialogs
        .map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)

    let messagesElement = props.messages
        .map(m => <Message key={m.id} message={m.message} id={m.id}/>)

    const addMessage = () => {
        const text = textArea.current?.value
        console.log(text)
    }


    return (
        <div className={c.content}>
            <div className={c.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={c.message}>
                {messagesElement}
            </div>
            <div><textarea ref={textArea}></textarea></div>
            <div>
                <button onClick={addMessage}>add message</button>
            </div>
        </div>
    )
}

export default Dialogs