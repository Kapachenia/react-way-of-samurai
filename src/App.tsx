import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {addPost, DialogElType, MessageElType, PostElType} from "./redux/state";


type AppPropsType = {
    posts: Array<PostElType>
    messages: Array<MessageElType>
    dialogs: Array<DialogElType>
}

const App = (props: AppPropsType) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <div className='content-wrapper'>
                <Navbar/>
                <Route path={"/dialogs"} render={() => <Dialogs messages={props.messages}
                                                                dialogs={props.dialogs}/>}/>
                <Route path={"/profile"} render={() => <Profile posts={props.posts}
                                                                addPost={addPost}
                />}/>
            </div>
        </div>
    );
}

export default App;