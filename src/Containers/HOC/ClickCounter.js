import React, {Component} from 'react'
import withCounter from './withCounter';

class ClickCounter extends Component {
    render(){
    console.log("inside vounter")

        const {count, incrementCount} = this.props;
        return(
            <button onClick={incrementCount}>Clicked {count} times</button>
        )
    }
}

export default withCounter(ClickCounter);
