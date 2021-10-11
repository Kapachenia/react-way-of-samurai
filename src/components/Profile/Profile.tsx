import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import c from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostElType} from "../../redux/state";

type ProfileType = {
    posts: Array<PostElType>
    addPost: (postMessage: string) => void
}

function Profile(props: ProfileType) {
    return (
        <div className={c.content}>
            <ProfileInfo />
            <div>
                <MyPosts posts={props.posts} addPost={props.addPost} />
                <div>
                    New post
                </div>
            </div>
        </div>
    )
}

export default Profile