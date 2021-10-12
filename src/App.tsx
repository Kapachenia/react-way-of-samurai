import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import state, {addPost, DialogElType, MessageElType, PostElType, StateType, updateNewPostText} from "./redux/state";


type AppPropsType = {
    state: StateType
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
}

const App = (props: AppPropsType) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <div className='content-wrapper'>
                <Navbar/>
                <Route path={"/dialogs"} render={() => <Dialogs messages={state.messagesPage.messages}
                                                                dialogs={state.messagesPage.dialogs}/>}/>
                <Route path={"/profile"} render={() => <Profile posts={state.profilePage.posts}
                                                                newPostText={state.profilePage.newPostText}
                                                                addPost={addPost}
                                                                updateNewPostText={updateNewPostText}
                                                                message={props.state.profilePage.newPostText}
                />}/>
            </div>
        </div>
    );
}

export default App;