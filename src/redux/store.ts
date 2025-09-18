import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers/authReducer'

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'increment':
//       return {
//         ...state,
//         counter: state.counter + action.payload
//       }
//       break;
  
//     default:
//       break;
//   }
// }

// const [state, dispatch] = useReducer()


// dispatch({type: 'increment', payload: 5})
