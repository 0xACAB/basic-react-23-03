import React, {Component} from 'react';

export default OriginalComponent => class DecoratedComponent extends Component {
    state = { isOpen: false };

    toggleOpen = () => {
        const {isOpen} = this.state;
        this.setState({isOpen: !isOpen});
    };

    render() {
        return <OriginalComponent {...this.props} isOpen={this.state.isOpen} toggleOpen={this.toggleOpen}/>
    }
}
