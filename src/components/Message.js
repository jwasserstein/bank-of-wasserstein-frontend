import React from 'react';
import './Message.css';

const Message = props => {
    const colorClass = 'Message-' + (props.color || 'red');
    return (
        <div className={'Message ' + colorClass}>{props.children}</div>
    );
};

export default Message;