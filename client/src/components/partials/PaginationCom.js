import React from 'react';
import {Pagination} from 'react-bootstrap';

class PaginationCom extends React.Component {

    constructor() {
        super();
        this.state={}
    }

    render() {
        return (
            <div className="container" style={{marginTop: 180, marginBottom: 250, width: 200}}>
                <Pagination className="animated flipInY">
                    <Pagination.First onClick={this.props.firstPage}/>
                    <Pagination.Prev onClick={this.props.prevPage} />
                    <Pagination.Ellipsis />
                    <Pagination.Next onClick={this.props.nextPage}/>
                    <Pagination.Last onClick={this.props.lastPage}/>
                </Pagination>
            </div>
        )
    }

};

export default PaginationCom;