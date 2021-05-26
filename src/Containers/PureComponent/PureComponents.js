import React from 'react'

class PureComponent extends React.PureComponent{
    render(){
        console.log("Pure Component Render")
        return(
            <div>
                Pure Component: {this.props.name}
            </div>
        )
    }
}

export default PureComponent;
