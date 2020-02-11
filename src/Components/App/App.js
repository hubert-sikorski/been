import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Pagination from '../Pagination/Pagination';
import Yelp from '../../util/Yelp';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            businesses: [],
            currentPage: 1,
            businessesPerPage: 20,
            totalBusinesses: 0
        };
    }

    searchYelp = (term, location, sortBy) => {
        Yelp.search(term, location, sortBy).then(businesses => {
            this.setState({
                businesses: businesses,
                totalBusinesses: businesses.length
            });
        });
    };

    changePage = pageNumber => {
        const indexOfLastBusiness =
            this.state.currentPage * this.state.businessesPerPage;
        const indexOfFirstBusiness =
            indexOfLastBusiness - this.state.businessesPerPage;
        this.setState({
            currentPage: pageNumber
        })
        this.state.businesses.slice(indexOfFirstBusiness, indexOfLastBusiness);
    };

    paginate = pageNumber => {
        this.changePage(pageNumber);
    };

    render() {
        return (
            <div className="App">
                <h1>Been</h1>
                <SearchBar searchYelp={this.searchYelp} />
                <BusinessList businesses={this.state.businesses} />
                <Pagination
                    totalBusinesses={this.state.totalBusinesses}
                    businessesPerPage={this.state.businessesPerPage}
                    paginate={this.paginate}
                />
            </div>
        );
    }
}

export default App;
