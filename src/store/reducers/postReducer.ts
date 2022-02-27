import IPost from './../../interfaces/IPost';

interface PostState {
    posts: IPost[]
}

const initialState: PostState = {
    posts: []
}

enum PostActionTypes {
    POST_CREATE = 'POST_CREATE',
    POST_DELETE = 'POST_DELETE'
}

interface PostCreateAction {
    type: PostActionTypes.POST_CREATE,
    payload: IPost
}

interface PostDeleteAction {
    type: PostActionTypes.POST_DELETE,
    payload: string
}

type PostActions = PostCreateAction | PostDeleteAction

export default function postReducer(state = initialState, action: PostActions): PostState {
    switch (action.type) {
        case PostActionTypes.POST_CREATE:
            return { posts: [...state.posts, action.payload] }
        case PostActionTypes.POST_DELETE:
            return { posts: state.posts.filter(post => post.id !== action.payload) }
        default:
            return state
    }
}

export const createPost = (payload: IPost) => {
    return { type: PostActionTypes.POST_CREATE, payload }
}
export const deletePost = (payload: string) => {
    return { type: PostActionTypes.POST_DELETE, payload }
}

