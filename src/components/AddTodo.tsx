import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Button, StyleSheet, TextInput, View } from 'react-native'
import { ADD_TODO } from '../actions/actions'

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
    }
})

const AddTodo = ({ addTodo }) => {
    const [todo, setTodo] = useState('')
    const [showAddTodo, setShowAddTodo] = useState(false)

    return (
        <View style={styles.container}>
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
        </View>
    )
}

const mapDispatchToProps = dispatch => ({
    addTodo: text => dispatch({ type: ADD_TODO, payload: text })
})

export default connect(
    null,
    mapDispatchToProps
)(AddTodo)
