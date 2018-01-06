import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

const RANDOM_COLOR = ['red', 'blue', 'green', 'yellow', 'gold', 'orange', 'purple', 'grey', 'silver'];

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: 'white'
        };
    }

    render() {
        return (
            <View style={[styles.container, { backgroundColor: this.state.backgroundColor, },]} >
                <TouchableHighlight
                    style={styles.button}
                    underlayColor='lightblue'
                    onPress={() => {
                        this.changeBackground();
                    }}>
                    <Text>Change Background Color</Text>
                </TouchableHighlight>
            </View>
        );
    }

    changeBackground() {
        const c = Math.floor(Math.random() * (RANDOM_COLOR.length - 1));
        console.log("random index: ", c);
        this.setState({
            backgroundColor: RANDOM_COLOR[c]
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        padding: 10,
        backgroundColor: 'lightgrey'
    }
});
