import React, { useState } from 'react';
import { MessageInput } from "./../MessageInput";

export const MessageList = () => {

    const [message, setMessage] = useState([]);

    const onSubmit = (author, text) => {
        setMessage([
            ...message,
            {
                author,
                text,
            }
        ]);
    }

    return (
        <div>
            {message.map((item, index) => (
                <div key={index}>
                    {item.author}-{item.text}
                </div>
            ))}
            <MessageInput onSubmit={onSubmit} />
        </div>
    );
};