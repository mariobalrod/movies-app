import React from 'react';
import {Pagination} from 'react-bootstrap';

class PaginationCom extends React.Component {

    constructor() {
        super();
        this.state={}
    }

    render() {
        return (
            <div className="container" style={{marginTop: 180, marginBottom: 250, width: 400}}>
                <Pagination className="animated flipInY">
                    <Pagination.First/>
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Item>{2}</Pagination.Item>
                    <Pagination.Item>{3}</Pagination.Item>
                    <Pagination.Item>{4}</Pagination.Item>
                    <Pagination.Item>{5}</Pagination.Item>
                    <Pagination.Ellipsis />
                    <Pagination.Item>{20}</Pagination.Item>
                    <Pagination.Next onClick={this.props.loadMoreItems}/>
                    <Pagination.Last />
                </Pagination>
            </div>
        )
    }

};

export default PaginationCom;