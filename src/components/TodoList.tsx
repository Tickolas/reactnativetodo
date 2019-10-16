import React from 'react'
import { connect } from 'react-redux'
import { Button, StyleSheet, Text, View } from 'react-native'
import { MARK_TODO_AS_DONE, MARK_TODO_AS_NEW, REMOVE_TODO } from '../actions/actions'
import { NEW } from '../constants/todoStatus'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

const TodoList = ({ todos, markTodoAsDone, markTodoAsNew, removeTodo }) => {
    return (
        <View style={styles.container}>
            {todos.map((todo, idx) => (
                <>
                    {todo.status === NEW ? (
                        <Button title={'Done!'} onPress={() => markTodoAsDone(todo.id)} />
                    ) : (
                        <Button title={'Reopen'} onPress={() => markTodoAsNew(todo.id)} />
                    )}
                    <Text>{`${idx}: ${todo.text}`}</Text>
                    <Button title={'X'} onPress={() => removeTodo(todo.id)} />
                </>
            ))}
        </View>
    )
}

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    markTodoAsDone: id => dispatch({ type: MARK_TODO_AS_DONE, payload: id }),
    markTodoAsNew: id => dispatch({ type: MARK_TODO_AS_NEW, payload: id }),
    removeTodo: id => dispatch({ type: REMOVE_TODO, payload: id })
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
