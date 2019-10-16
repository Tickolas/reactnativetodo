import rootReducer, { initialState } from '../rootReducer'
import { ADD_TODO, MARK_TODO_AS_DONE, MARK_TODO_AS_NEW, REMOVE_TODO } from '../../actions/actions'
import { DONE, NEW } from '../../constants/todoStatus'

describe('RootReducer', () => {
    it('should handle ADD_TODO', () => {
        const action = { type: ADD_TODO, payload: 'I added a TODO' }

        const result = rootReducer(initialState, action)

        expect(result).toEqual({ idCounter: 1, todos: [{ id: 1, status: NEW, text: action.payload }] })
    })

    it('should handle REMOVE_TODO', () => {
        const state = {
            ...initialState,
            idCounter: 1,
            todos: [{ id: 1, text: 'I should be removed', status: NEW }]
        }
        const action = { type: REMOVE_TODO, payload: 1 }

        const result = rootReducer(state, action)

        expect(result).toEqual({ idCounter: 1, todos: [] })
    })

    it('should handle MARK_TODO_AS_DONE', () => {
        const state = {
            ...initialState,
            idCounter: 1,
            todos: [{ id: 1, text: 'I should be removed', status: NEW }]
        }
        const action = { type: MARK_TODO_AS_DONE, payload: 1 }

        const result = rootReducer(state, action)

        expect(result).toEqual({ idCounter: 1, todos: [{ ...state.todos[0], status: DONE }] })
    })

    it('should handle MARK_TODO_AS_NEW', () => {
        const state = {
            ...initialState,
            idCounter: 1,
            todos: [{ id: 1, text: 'I should be removed', status: DONE }]
        }
        const action = { type: MARK_TODO_AS_NEW, payload: 1 }

        const result = rootReducer(state, action)

        expect(result).toEqual({ idCounter: 1, todos: [{ ...state.todos[0], status: NEW }] })
    })
})
