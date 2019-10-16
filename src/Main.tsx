import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {ADD_TODO, REMOVE_TODO} from "./actions/actions";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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
});

const Main = ({todos, addTodo, removeTodo}) => {
    const [todo, setTodo] = useState('');

    return (
        <View style={styles.container}>
            <Text>App goes here</Text>
            <TextInput style={styles.input} placeholder={'TODO Text'} onChangeText={setTodo}/>
            <Button title={'Add TODO'} onPress={() => addTodo(todo)}/>
            {todos.map((todo, idx) => (
                <>
                    <Text>{`${idx}: ${todo.text}`}</Text>
                    <Button title={'X'} onPress={() => removeTodo(todo.id)}/>
                </>
            ))
            }
        </View>
    );
};

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
    addTodo: text => dispatch({type: ADD_TODO, payload: text}),
    removeTodo: id => dispatch({type: REMOVE_TODO, payload: id})
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
