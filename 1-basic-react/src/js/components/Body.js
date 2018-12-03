import React from "react";

export default class Body extends React.Component{
    handleChange(e) {
        const value = e.target.value;
        this.props.changeTitle(value);
    }

    render(){
        return(<div>
            <input value={this.props.value} onChange={this.handleChange.bind(this)} />
        </div>);
    }
}