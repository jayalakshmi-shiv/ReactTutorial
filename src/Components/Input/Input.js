import React, {useState}from 'react'
import './style.css'

 /**
  * Factory function to create a ShallowWrapper for the App component.
  * @function setup
  * @param {object} props - Component props specific to this setup.
  * @returns {ShallowWrapper}
  */
 
const Input = (props) =>{
    const [inputValue, setInputValue] = useState(props.value);


    const updateInput = (e) =>{
        e.preventDefault();
        props.updateField({name:props.name, value:e.target.value});
        setInputValue(e.target.value)
    }
    
    return(
        <div>
            <input class="inputContainer"
            name={props.name} 
            value={inputValue}
            onChange={updateInput}
            type={props.type}/>
        </div>
    )
}
export default Input;







// import React from 'react';



// const Input = () =>{
//         const [uName, setUName] = React.useState("Shruthi");

//     const changeInputs = (e) =>{
//         e.preventDefault();
//         setUName(e.target.value);
//     }

//     return(
//         <div>
//             <input name={"userName"} value={uName} type="text" onChange={changeInputs}/>
//         </div>
//     )

// }

// export default Input;