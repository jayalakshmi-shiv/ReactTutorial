import React, {Component} from 'react'
import PureComponent from './PureComponents';
import RegularComponent from './RegularComponent';

class ParentComponent extends Component {
    constructor(props){
        super(props);
        this.state = {name:"Shruthi"}
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({name:"Shruthi"})
        },2000)
    }

    render(){
        console.log("**********Parent Component Render*************")
        return(
            <div>
                "Parent Component"
                <PureComponent name={this.state.name}/>
                <RegularComponent name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComponent;
