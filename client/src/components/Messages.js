import React from 'react';

const Messages = (props) => {
    let cont = 0;
    let tipoAlerta = '';
    if (props.warning) {
        tipoAlerta = 'warning';
    } else {
        tipoAlerta = 'success';
    }
    return (
        <div className="container">
            {props.messages.map(msg =>
                <div key={cont++} className={`mx-auto alert alert-${tipoAlerta} alert-dismissible fade show`} role="alert" style={{width: 300}}>
                    {msg.txt}
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            )}
        </div>
    );

}

export default Messages;
