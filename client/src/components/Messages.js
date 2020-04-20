import React from 'react';

const Messages = (props) => {
    let cont = 0;
    return (
        <div className="container">
            {props.messages.map(message =>
                <div key={cont++} className={`mx-auto alert alert-${(message.type)? 'success' : 'warning'} alert-dismissible fade show`} role="alert" style={{width: 300}}>
                    {message.msg}
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            )}
        </div>
    );

}

export default Messages;
