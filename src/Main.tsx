import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { ADD_TODO, MARK_TODO_AS_DONE, MARK_TODO_AS_NEW, REMOVE_TODO } from './actions/actions'
import { NEW } from './constants/todoStatus'
import moment from 'moment'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderStyle: 'solid',
        padding: 5
    },
    button: {
        color: 'red'
    }
})

const Main = ({ todos, addTodo, markTodoAsDone, markTodoAsNew, removeTodo }) => {
    const [todo, setTodo] = useState('')
    const [showAddTodo, setShowAddTodo] = useState(false)

    return (
        <View style={styles.container}>
            <Text>todo</Text>
            <Text>{moment().format('dddd DD MMM YYYY')}</Text>
            {showAddTodo ? (
                <>
                    <TextInput style={styles.input} placeholder={'TODO Text'} onChangeText={setTodo} />
                    <Button
                        title={'+'}
                        onPress={() => {
                            addTodo(todo)
                            setShowAddTodo(false)
                        }}
                    />
                </>
            ) : (
                <Button title={'Add todo'} onPress={() => setShowAddTodo(true)} />
            )}
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
    addTodo: text => dispatch({ type: ADD_TODO, payload: text }),
    markTodoAsDone: id => dispatch({ type: MARK_TODO_AS_DONE, payload: id }),
    markTodoAsNew: id => dispatch({ type: MARK_TODO_AS_NEW, payload: id }),
    removeTodo: id => dispatch({ type: REMOVE_TODO, payload: id })
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main)
