import React from 'react'

// class Counter extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={counter:0}
//     }

//     render (){
//         return(
//           <div>
//               <button>-</button>
//               {this.state.counter}
//               <button>+</button>
//           </div>
//         )
//     }
// }

// export default Counter;



const Counter = ()=>{

    const [counter, setCounter] = React.useState(0);

   
    return(
        <div>
            <button onClick={()=>setCounter(counter-1)}>-</button>
                {counter}
            <button onClick={()=>setCounter(counter+1)}>+</button>
        </div>
    )
}

export default Counter;