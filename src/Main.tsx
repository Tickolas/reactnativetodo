import React from 'react'
import { StyleSheet, View } from 'react-native'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
import Header from './components/Header'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})

const Main = () => {
    return (
        <View style={styles.container}>
            <Header />
            <AddTodo />
            <TodoList />
        </View>
    )
}

export default Main
