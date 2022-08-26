import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 0},
                {id: 2, message: "It's my first post", likesCount: 23},
                {id: 3, message: "ABOBA", likesCount: 54},
                {id: 4, message: "oh shit here we go again", likesCount: 1488},
            ],
            newPostText: ""
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Валера"},
                {id: 2, name: "иOne"},
                {id: 3, name: "Сан Саныч"},
                {id: 4, name: "Сашка Попуг"},
                {id: 5, name: "Кириллл"}
            ],
            messages: [
                {id: 1, message: "Здарова"},
                {id: 2, message: "Ну шо?"},
                {id: 3, message: "Го пить пиво"},
                {id: 4, message: "Ыть"},
                {id: 5, message: "Кавооо?"}
            ],
            newMessageBody: ""
        }
    },
    _callSubscriber() {
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
}

export default store;