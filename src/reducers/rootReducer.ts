import { ADD_TODO, MARK_TODO_AS_DONE, MARK_TODO_AS_OPEN, REMOVE_TODO } from '../actions/actions'
import { DONE, OPEN } from '../constants/todoStatus'

export const initialState = {
    idCounter: 0,
    todos: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            const id = state.idCounter + 1
            return {
                ...state,
                idCounter: id,
                todos: [...state.todos, { id, text: action.payload, status: OPEN }]
            }
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        case MARK_TODO_AS_DONE: {
            return {
                ...state,
                todos: state.todos.map(todo => (todo.id === action.payload ? { ...todo, status: DONE } : todo))
            }
        }
        case MARK_TODO_AS_OPEN: {
            return {
                ...state,
                todos: state.todos.map(todo => (todo.id === action.payload ? { ...todo, status: OPEN } : todo))
            }
        }
        default:
            return state
    }
}

export default rootReducer
