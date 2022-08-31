import { View, Text, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';
import Button from '../button/Button';
import { incrementCounter, decrementCounter, resetCounter, inputIncrement } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const CounterClock = () => {
    const [inputValue, setInputValue] = useState(0)
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();


    const handleIncrement = () => {
        dispatch(incrementCounter())


    }
    const handleDecrement = () => {
        dispatch(decrementCounter())
    }

    const handleInputIncrement = () => {

        dispatch(inputIncrement(inputValue))

    }

    return (
        <View style={styles.container}>
            <Button
                title="increment"
                handleBtn={handleIncrement}

            />
            <Text style={{ marginVertical: 20 }}>{count}</Text>
            <Button
                title="decrement"

                handleBtn={handleDecrement}
            />
            <TextInput
                style={styles.inputField}
                onChangeText={(value) => setInputValue(parseInt(value))}
            />
            <Button title='incrementAmount' handleBtn={handleInputIncrement} />
        </View>
    )
}

export default CounterClock

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputField: {
        marginVertical: 20,
        borderWidth: 1,
        borderColor: "#FFA451",
        paddingHorizontal: 50,
        paddingVertical: 5
    }
});