import React from 'react';

const ListsContent = (props) => {
    return (
        <div>
            <h1>{props.match.params.type}</h1>
        </div>
    )
}

export default ListsContent;