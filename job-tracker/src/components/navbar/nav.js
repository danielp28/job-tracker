import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Nav extends Component {
    state = {
        open: false,
        width: window.innerWidth
      };
    
      updateWidth = () => {
        const newState = { width: window.innerWidth };
    
        if (this.state.open && newState.width > 991) {
          newState.open = false;
        }
    
        this.setState(newState);
      };
    
      toggleNav = () => {
        this.setState({ open: !this.state.open });
      };
    render(){
        return(
            <nav className = "navbar navbar-expand-lg navbar-light bg-light mb-2">
                <Link className="navbar-brand" to="/">
                    Job Tracker
                </Link>
                <button
                onClick={this.toggleNav}
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle Navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
            </nav>
        )
    }
}

export default Nav