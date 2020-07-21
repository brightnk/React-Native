import React, { useState } from 'react'
import { StyleSheet, TextInput, View, Button, Modal } from 'react-native';


const GoalInput = props => {


    const [enteredGoal, setEnterdGoal] = useState('');



    function goalInputHandler(enteredText) {
        setEnterdGoal(enteredText);
    }

    const addGoalHandler = () => {
        props.addGoal(enteredGoal);
        setEnterdGoal("");
    }

    const cancelGoalHandler = () => {
        props.onCancel();
        setEnterdGoal("");
    }


    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course Goal"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add" onPress={addGoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" color="red" onPress={cancelGoalHandler} />
                    </View>

                </View>

            </View>
        </Modal>
    )
};



const styles = StyleSheet.create({
    input: {
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom: 10
    },


    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    buttonContainer: {
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    button: {
        width: '40%'
    }

})

export default GoalInput;