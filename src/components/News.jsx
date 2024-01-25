import React, { Component } from 'react';

class News extends Component {
    const {news} = this.props;
    render() { 
        return (
            <div>
                <p>{news}</p>
            </div>
        );
    }
}
 
export default News;