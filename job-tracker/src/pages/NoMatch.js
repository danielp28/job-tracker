import React, { Component } from "react";
import {Link} from "react-router-dom"

class NoMatch extends Component {
    render() {
        return(
            <h1>There's nothing here!
                <Link
                to="/"
                >Back to reality</Link>
                </h1>
        )
    }
}
export default NoMatch