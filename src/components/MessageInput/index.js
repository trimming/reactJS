import React, { useState } from 'react';


export const MessageInput = ({ onSubmit }) => {

    const [textInput, setTextInput] = useState('');

    const handlePress = (text) => {
        setTextInput(text)
    }

    return (
        <form >

            <input value={textInput} onChange={(event) => { handlePress(event.target.value) }} />
            <button onClick={() => onSubmit('User', textInput)}>send</button>
        </form>
    );
};