import profileReducer, {addPostCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 0},
        {id: 2, message: "It's my first post", likesCount: 23},
        {id: 3, message: "ABOBA", likesCount: 54},
        {id: 4, message: "oh shit here we go again", likesCount: 1488},
    ]
};

test('length of post should be incremented', () => {
    // 1. test data
    let action = addPostCreator("it-kamasutra");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(5);
});

test('message of new post should be correct', () => {
    // 1. test data
    let action = addPostCreator("it-kamasutra");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts[4].message).toBe("привет");
});

test('after deleting length of posts should be decremented', () => {
    // 1. test data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(3);
});

test(`after deleting length shouldn't be decremented if id is incorrect`, () => {
    // 1. test data
    let action = deletePost(1000);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(4);
});