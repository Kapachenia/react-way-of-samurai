import {rerenderTree} from "../rerender";

export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessasgesPageType
}

type ProfilePageType = {
    posts: Array<PostElType>
    newPostText: string
}

type MessasgesPageType = {
    messages: Array<MessageElType>
    dialogs: Array<DialogElType>
}

export type PostElType = {
    id: number
    message: string
    likesCount: number
}

export type DialogElType = {
    id: number
    name: string
}

export type MessageElType = {
    id: number
    message: string
}

const state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: "Hello", likesCount: 12},
            {id: 2, message: "Hi", likesCount: 15},
            {id: 3, message: "Yo", likesCount: 2}
        ],
        newPostText: 'enter message'
    },
    messagesPage: {
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How is your react"},
            {id: 3, message: "Hello"}
        ],
        dialogs: [
            {id: 1, name: "Evgeni"},
            {id: 2, name: "Dimich"},
            {id: 3, name: "Victor"},
            {id: 4, name: "Katia"},
            {id: 5, name: "Sveta"},
            {id: 6, name: "Artem"},
        ]
    }
}

export const addPost = () => {
    const newPost: PostElType = {
        id: 4,
        message: state.profilePage.newPostText,
        likesCount: 0
    }

    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderTree(state)
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderTree(state)
}

export default state
