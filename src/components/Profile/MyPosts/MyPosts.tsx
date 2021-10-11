import Post from "./Post/Post";
import c from "./MyPost.module.css";
import {PostElType} from "../../../redux/state";
import React from "react";

type MyPostsType = {
    posts: Array<PostElType>
    addPost: (postMessage: string) => void
}

function MyPosts(props: MyPostsType) {

    let postsElement = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)
        }
    }

    return (
        <div className={c.wrapper}>
            <div>
                <textarea ref={newPostElement}></textarea>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={c.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts