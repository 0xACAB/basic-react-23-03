import React, {Component} from 'react';
import comments from "../decorators/comments";

class Comments extends Component {

    getComments() {
        return this.props.comments.map(comment => {
            return (
                <ul key={comment.id}>
                    <li><h3>{comment.user}</h3></li>
                    <li><p>{comment.text}</p></li>
                </ul>
            );
        })
    }

    render() {
        const {isOpen, toggleOpen} = this.props;
        return(
            <div>
                <h2>Comments:</h2>
                <button onClick={toggleOpen}>{isOpen ? 'Hide' : 'Show'}</button>
                {isOpen && this.getComments()}
            </div>
        );
    }
}

export default comments(Comments);
