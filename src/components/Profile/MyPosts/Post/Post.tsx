import React from "react";
import c from "./Post.module.css";

type PostType = {
    message: string
    likesCount: number
}

function Post(props: PostType) {
    return (
        <div className={c.item}>
            <img alt="ava"
                src='https://st2.depositphotos.com/1981013/7098/v/600/depositphotos_70983973-stock-illustration-samurai-man.jpg'></img>
            {props.message}
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post