import React, { useState } from 'react'


export default class Counter extends React.Component {

    constructor(props) {
        console.log("inside constructor")
        super(props);
        this.state = { counter: 0}
    }


    componentWillMount(){                                  //deprecated
        console.log("inside component will mount");
    }

    // static getDerivedStateFromProps(props, state) {
    //     console.log("inside get derived states from props", props, state);
    //     return null;
    // }

    componentDidMount() {
        console.log("inside component did mount");
    }

    componentDidUpdate() {
        console.log("inside component did update")
    }

    componentWillReceiveProps(nextProps) {                   //deprecated
        console.log("inside component will receive props", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("inside should component update", nextProps, nextState);
        // if(true) return false;
        return true;
    }

    componentWillUpdate(nextProps, nextState){              //deprecated

        console.log("inside component will update", nextProps, nextState);
    }
    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log("inside should component update", prevProps, prevState);
    //     return null;
    // }

    componentDidUpdate(prevProps, prevState) {
        console.log("inside component did update", prevProps, prevState);
    }

    componentWillUnmount(){
        console.log("inside component will unmount")
    }
    

    render() {
        console.log("inside render");
        return(
                <div>
                <h1 style={{textAlign:"initial"}}>{this.props.greet}</h1>
                <div className="row">
                <button onClick={() => this.setState({...this.state,counter: this.state.counter - 1 })} className={"btn btn-primary"}>-</button>
                <span style={{ padding: "10px", fontSize: "30px" }}>{this.state.counter}</span>
                <button onClick={() => this.setState( { ...this.state,counter: this.state.counter + 1 })} className={"btn btn-primary"}>+</button>
                </div>
            </div>
        )

        
    }
}




// (-)  10   (+)


// const Counter = (props)=>{
//     const [counter, setCounter] = useState(0);
//     console.log("props>>>>>>>>>>>>>>",props);



//     return(
//         <div style={{margin:"auto",width:"50%"}}>
//          <h1>{props.greet}</h1>
//           <button onClick={()=>setCounter(counter-1)}>-</button>
//           {counter}
//           <button onClick={()=>setCounter(counter+1)}>+</button>
//         </div>
//     )
// }

// export default Counter;


