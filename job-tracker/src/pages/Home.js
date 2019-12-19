import React, { Component } from "react";
import Navbar from "../components/navbar/nav"


export default class Main extends Component {
    render() {
        return (
            <div>
                <Navbar {...this.props} />
               
                <br></br>
                Hello {this.props.name} <br></br>
                Do you want to see the secret area? <a href="/secret">Click here</a>
                {/* {!this.props.auth.isAuthenticated() &&
                    <div>
                        <hr />
                        Please Login first
              <hr />
                        <button onClick={this.props.auth.login}>Login</button>
                    </div>
                } */}

            </div>
        )
    }

}