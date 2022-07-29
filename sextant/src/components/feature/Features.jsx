import React from "react";
import { Component } from "react";
import "./Features.css"

class Features extends Component {
  render() {
    return (
        <div className="Exhibit">
            <h2 className="FeaturesHeading">{this.props.name}</h2>
            <div className="FeaturesContent">
                {this.props.children}
            </div>
        </div>
    );
}
}
export default Features;