import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
    posts: [],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)};
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        case SET_STATUS:
            return {...state, status: action.status};
        case SAVE_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos}};
        default:
            return state;
    }
}

export const addPostCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const deletePost = (postId) => ({type: DELETE_POST, postId: postId})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile})
export const setUserStatus = (status) => ({type: SET_STATUS, status: status})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getUserProfile = (userId) => async (dispatch) => {
    // const data = await usersAPI.getProfile(userId);
    // dispatch(setUserProfile(data));
}

export const getUserStatus = (userId) => async (dispatch) => {
    // const data = await profileAPI.getStatus(userId);
    // dispatch(setUserStatus(data));
}

export const updateUserStatus = (status) => async (dispatch) => {
    // const data = await profileAPI.updateStatus(status);
    // if (data.resultCode === 0) {
    //     dispatch(setUserStatus(status));
    // }
}

export const savePhoto = (file) => async (dispatch) => {
    // const data = await profileAPI.savePhoto(file);
    // if (data.resultCode === 0) {
    //     dispatch(savePhotoSuccess(data.data.photos));
    // }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    // const data = await profileAPI.saveProfile(profile);
    // if (data.resultCode === 0) {
    //     dispatch(getUserProfile(userId));
    // } else {
    //     let contactName = data.messages[0].split('>')[1];
    //     contactName = contactName.substring(0, contactName.length - 1).toLowerCase();
    //     dispatch(stopSubmit("edit-profile", {"contacts": {[contactName]: data.messages[0]} }));
    //     return Promise.reject(data.messages[0]);
    // }
}

export default profileReducer;