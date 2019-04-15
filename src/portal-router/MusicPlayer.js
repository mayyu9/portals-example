import React from 'react';
import ReactDOM from 'react-dom';

/* 
* A portal can have a shared state with parent.
* here we have passed the prop variable "parentstate"
* and it will update with the parent
*/

class MusicPlayer extends React.Component{
    render(){
        return ReactDOM.createPortal(
            <div>
                <h1>
                    {`Always visible Mock Media Player! ${this.props.parentState}`}
                </h1>
            </div>,
            document.getElementById('portal')
        )
    }
}

export default MusicPlayer;