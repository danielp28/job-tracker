import React, {Component} from "react";

export default class Secret extends Component {
    render () {
        return(
            <div>
                Hello {this.props.name}
                <hr />
                <button onClick = {this.props.auth.logout}>Logout</button>
            </div>
        )
    }
}