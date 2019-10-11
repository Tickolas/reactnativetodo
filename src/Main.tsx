import React from 'react';
import { connect, Provider } from 'react-redux';
import {Button, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        color: 'red'
    }
});

const Main = ({test}) => {
    return (
        <View style={styles.container}>
            <Text>App goes here</Text>
            <Button className={styles.button} title={test} />
        </View>
    );
};

const mapStateToProps = state => ({
    test: state.text
});

export default connect(mapStateToProps)(Main);
