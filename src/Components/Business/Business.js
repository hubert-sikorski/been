import React from 'react';
import './Business.css';

class Business extends React.Component {
    render() {
        return (
            <div className="Business">
                <div className="image-container">
                    <a href={this.props.business.url} target="_blank" rel="noopener noreferrer">
                        <img src={this.props.business.imageSrc} alt=''/>
                    </a>
                </div>
                <h2>
                    <a href={this.props.business.url} target="_blank" rel="noopener noreferrer">
                        {this.props.business.name}
                    </a>
                </h2>
                <div className="Business-information">
                    <div className="Business-address">
                        <a className="Business-link" href={`https://www.google.com/maps/search/?api=1&query=${this.props.business.coordinates1},${this.props.business.coordinates2}`} target="_blank" rel="noopener noreferrer">
                            {this.props.business.address}
                            <br/>
                            {this.props.business.city}
                            <br/>
                            {this.props.business.state} {this.props.business.zipCode}
                        </a>
                    </div>
                    <div className="Business-reviews">
                        <h3>
                            {this.props.business.category}
                            </h3>
                        <h3 className="rating">
                            {this.props.business.rating}<i className="fa fa-star"></i>
                        </h3>
                        <p>
                            {this.props.business.reviewCount} reviews
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Business;