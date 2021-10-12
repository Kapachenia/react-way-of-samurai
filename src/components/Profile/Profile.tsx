import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import c from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostElType} from "../../redux/state";

type ProfileType = {
    posts: Array<PostElType>
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
    message: string
}

function Profile(props: ProfileType) {
    return (
        <div className={c.content}>
            <ProfileInfo />
            <div>
                <MyPosts posts={props.posts}
                         newPostText={props.newPostText}
                         addPost={props.addPost}
                         updateNewPostText={props.updateNewPostText}
                         // message={props.message}
                />
                <div>
                    New post
                </div>
            </div>
        </div>
    )
}

export default Profile