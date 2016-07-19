import React, { Component } from 'react';

export default class Message extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const message = this.props.message;
        return (
            <div className={'message-row'}>
                <div>{message.author}: {message.text}, {message.datetime && message.datetime.toString()}</div>
            </div>
        );
    }
}
