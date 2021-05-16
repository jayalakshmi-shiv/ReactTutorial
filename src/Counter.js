import React, { useEffect, useState } from 'react'
let updateEveryTime = false;


export default class Counter extends React.Component {

    constructor(props) {
        console.log("inside constructor")
        super(props);
        this.state = { counter: 0 }
    }

    // ************************* Mounting Phase ******************************
    // componentWillMount() {                                  //deprecated
    //     console.log("inside component will mount");
    // }

    static getDerivedStateFromProps(props, state) {
        console.log("inside get derived states from props", props, state);
        return null;
    }

    // ************************* Update Phase *********************************
    componentDidMount() {
        console.log("inside component did mount");
    }

    componentDidUpdate() {
        console.log("inside component did update")
    }

    // componentWillReceiveProps(nextProps) {                   //deprecated
    //     console.log("inside component will receive props", nextProps);
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("inside should component update", nextProps, nextState);
        // for not rendering, uncomment first line and comment second line after this
        // if(true) return false;   
        return true;
    }

    // componentWillUpdate(nextProps, nextState) {              //deprecated
    //     console.log("inside component will update", nextProps, nextState);
    // }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("inside get snapshot before update", prevProps, prevState);
        return null;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("inside component did update", prevProps, prevState);
    }

    // ************************* un mounting Phase ******************************

    componentWillUnmount(){
        console.log("inside component will unmount")
    }

    render() {
        console.log("inside render");
        return (
            <div className="col">
                <h1 style={{ textAlign: "initial" }}>{this.props.greet}</h1>
                <div className="row">
                    <button onClick={() => this.setState({ ...this.state, counter: this.state.counter - 1 })} className={"btn btn-primary"}>-</button>
                    <span style={{ padding: "10px", fontSize: "30px" }}>{this.state.counter}</span>
                    <button onClick={() => this.setState({ ...this.state, counter: this.state.counter + 1 })} className={"btn btn-primary"}>+</button>
                </div>
            </div>
        )
    }
}





// const Counter = (props) => {
//     const [counter, setCounter] = useState(0);
//     const [conditionalUpdate, setConditionalUpdate] = useState(false);

//     // ************************* Mounting Phase ******************************
//     useEffect(() => {
//         console.log("inside component did mount")
//     }, [])


//     // ************************* Update Phase ********************************
//     //runs on initial mount and on everyUpdate
//     useEffect(() => {
//         console.log("I run on initial mount and on every update")
//     })

//     useEffect(() => {
//         if (updateEveryTime) {
//             console.log("Component did update");
//         }
//         else {
//             updateEveryTime = true;
//         }
//     })
//     useEffect(() => {
//         console.log("Update for specific state")
//     }, [conditionalUpdate])

//     // ************************* un mounting Phase *****************************

//     useEffect(()=>{
//         return ()=>{console.log("component will unmount")}
//     },[])


//     return (
//         <div style={{ textAlign: "left" }}>
//             <h1>{props.greet}</h1>
//             <button onClick={() => setCounter(counter - 1)} className={"btn btn-primary"}>-</button>
//             <span style={{ padding: "10px", fontSize: "30px" }}>{counter}</span>
//             <button onClick={() => setCounter(counter + 1)} className={"btn btn-primary"}>+</button>
//             <br/>
//             <div>
//                 <button onClick={() => setConditionalUpdate(true)} className={"btn btn-primary"}>Condition based update</button>
//             </div>
//         </div>
//     )
// }

// export default Counter;


