import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {SAVE_TODO} from "./actions/actions";

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

const Main = ({test, saveTodo}) => {
    const [todo, setTodo] = useState('');

    return (
        <View style={styles.container}>
            <Text>App goes here</Text>
            <TextInput style={styles.input} placeholder={'TODO Message'} onChangeText={setTodo} />
            <Button title={test} onPress={() => saveTodo(todo)} />
        </View>
    );
};

const mapStateToProps = state => ({
    test: state.text
});

const mapDispatchToProps = (dispatch) => ({
    saveTodo: todo => dispatch({type: SAVE_TODO, payload: todo})
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
