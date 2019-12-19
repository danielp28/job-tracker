import React, {Component} from "react";


export default class Navbar extends Component {
  render(){
    return(
      <div>
      <h5>Job Tracker</h5>
      {!this.props.auth.isAuthenticated() &&
                    <div>
                        <hr />
                        Please Login first
              <hr />
                        <button onClick={this.props.auth.login}>Login</button>
                    </div>
                }
      </div>
    )
  }
}

