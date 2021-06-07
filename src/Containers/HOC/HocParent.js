import React from 'react';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';

const HocParent = () =>{
    return(
        <div>
            <ClickCounter/>
            <HoverCounter/>
        </div>
    )
}
export default HocParent;