import React from 'react';
import './Pagination.css';

class Pagination extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pageNumbers: []
        };
    }

    generateNumbers = () => {
        for (
            let i = 0;
            i <=
            Math.ceil(
                this.props.totalBusinesses / this.props.businessesPerPage
            );
            i++
        ) {
            this.state.pageNumbers.push(i);
        }
    };

    render() {
        this.generateNumbers();

        return (
            <div>
                <ul className="Pagination">
                    {this.state.pageNumbers.map(number => {
                        return (
                            <li key={number} className="PaginationElement">
                                <a
                                    href="#!"
                                    className="PaginationElement_Switch"
                                    onClick={() => this.props.paginate(number)}
                                >
                                    {number}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default Pagination;
