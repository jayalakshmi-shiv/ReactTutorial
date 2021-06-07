import React, {useEffect,useState} from 'react'

// class Counter extends React.Component {
//     constructor(props) {
//         console.log("constructor");
//         super(props);
//         this.state = { counter: 0 }
//     }
//     // Mounting Phase
//     componentWillMount() {                                                              //deprecated
//         console.log("component will mount");
//     }
//     componentDidMount() {
//         console.log("component did mount");
//     }

//     //     static getDerivedStateFromProps(props, state) {
//     //         console.log("inside get derived states from props", props, state);
//     //         return null;
//     //     }

//     // Update Phase
//     componentWillReceiveProps(nextProps) {                                             //deprecated
//         console.log("component will receive props", nextProps);
//     }

//     componentWillUpdate(nextProps, nextState) {                                        //deprecated
//         console.log("component will update", nextProps, nextState);
//     }

//     shouldComponentUpdate(nextProps, nextState) {
//         console.log("should component update", nextProps, nextState);
//         // for not rendering, uncomment first line and comment second line after this
//         // if(true) return false;   
//         return true;
//     }
//     //     getSnapshotBeforeUpdate(prevProps, prevState) {
//     //         console.log("inside get snapshot before update", prevProps, prevState);
//     //         return null;
//     //     }

//     componentDidUpdate(prevProps, prevState) {
//         console.log("component did update", prevProps, prevState);
//     }

//     //unmount phase
//     componentWillUnmount() {
//         console.log("inside component will unmount")
//     }


//     render() {
//         console.log("render")
//         return (
//             <div>
//                 <h1>{this.props.greet}</h1>
//                 <button className={"btn btn-primary"} onClick={() => this.setState({ counter: this.state.counter - 1 })}>-</button>
//                 <span style={{padding:"10px"}}>{this.state.counter}</span>
//                 <button className={"btn btn-primary"} onClick={() => this.setState({ counter: this.state.counter + 1 })}>+</button>
//             </div>
//         )
//     }
// }

// export default Counter;



const Counter = (props) => {
    const [counter, setCounter] = useState(0);
    const [conditionalUpdate, setConditionalUpdate] = useState(false);
    let updateEveryTime = false;

    // ************************* Mounting Phase ******************************
    useEffect(() => {
        console.log("inside component did mount")
    }, [])


    // ************************* Update Phase ********************************
    //runs on initial mount and on everyUpdate
    useEffect(() => {
        console.log("I run on initial mount and on every update")
    })

    useEffect(() => {
        if (updateEveryTime) {
            console.log("Component did update");
        }
        else {
            updateEveryTime = true;
        }
    })
    useEffect(() => {
        console.log("Update for specific state")
    }, [conditionalUpdate])

    // ************************* un mounting Phase *****************************

    useEffect(()=>{
        return ()=>{console.log("component will unmount")}
    },[])



    return (
        <div >
            <h1>{props.greet}</h1>
            <button onClick={() => setCounter(counter - 1)} className={"btn btn-primary"}>-</button>
            <span style={{ padding: "10px", fontSize: "30px" }}>{counter}</span>
            <button onClick={() => setCounter(counter + 1)} className={"btn btn-primary"}>+</button>
            <br/>
                <button onClick={() => setConditionalUpdate(true)} className={"btn btn-primary"}>Condition based update</button>
            
            <br/>
            <button className={"btn btn-primary"} onClick={()=>props.updateParent("i am displaying from child")}>Update Parent</button>
            <p>{props.parentString}</p>
        </div>
    )
}

export default Counter;