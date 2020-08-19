import React from 'react'
import { connect } from 'react-redux'
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { MARK_TODO_AS_DONE, MARK_TODO_AS_OPEN, REMOVE_TODO } from '../actions/actions'
import { OPEN } from '../constants/todoStatus'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    item: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
        marginTop: 8,
        backgroundColor: 'skyblue'
    },
    text: {
        paddingLeft: 8,
        paddingRight: 8
    }
})

const TodoList = ({ todos, markTodoAsDone, markTodoAsNew, removeTodo }) => {
    return (
        <View style={styles.container}>
            {todos.map((todo) => (
                <TouchableOpacity key={todo.id} style={styles.item}>
                    {todo.status === OPEN ? (
                        <Button title={'Done!'} onPress={() => markTodoAsDone(todo.id)} />
                    ) : (
                        <Button title={'Reopen'} onPress={() => markTodoAsNew(todo.id)} />
                    )}
                    <Text style={styles.text}>{todo.text}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    markTodoAsDone: id => dispatch({ type: MARK_TODO_AS_DONE, payload: id }),
    markTodoAsNew: id => dispatch({ type: MARK_TODO_AS_OPEN, payload: id }),
    removeTodo: id => dispatch({ type: REMOVE_TODO, payload: id })
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
