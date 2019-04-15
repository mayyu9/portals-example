import React from 'react';
import { Link } from 'react-router-dom';

class PageTwo extends React.Component{
    render(){
        return(
            <div className="pages two">
                <h1>
                    <Link to={"/pg3"}>Go to second page</Link>
                </h1>
            </div>
        );
    }
}

export default PageTwo;