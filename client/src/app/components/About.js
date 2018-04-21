import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
    render() {
        return (
            <div className="col-md-12">
            <div className="col-md-4">
                <h1>Mision</h1>
                <div className="jumbutron">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ab quam excepturi sint, distinctio sed animi repellendus sequi saepe praesentium qui accusamus tenetur assumenda iure nisi soluta ipsum odio nihil.</p>
                </div>
            </div>
            <div className="col-md-4">
                <h1>Vision</h1>
                <div className="jumbutron">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ab quam excepturi sint, distinctio sed animi repellendus sequi saepe praesentium qui accusamus tenetur assumenda iure nisi soluta ipsum odio nihil.</p>
                </div>
            </div>
            <div className="col-md-4">
                <h1>Reseña Historica</h1>
                <div className="jumbutron">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ab quam excepturi sint, distinctio sed animi repellendus sequi saepe praesentium qui accusamus tenetur assumenda iure nisi soluta ipsum odio nihil.</p>
                </div>
            </div>
        </div>
        );
    }
}

export default About;