import React, {Component} from 'react';
import './App.css';
import Main from "./pages/Home";
import Secret from "./pages/Secret"
import NotFound from "./pages/NoMatch"
import Callback from "./pages/Callback"


class App extends Component {
  render() {
    let mainComponent = ""
    switch(this.props.location){
      case "":
          mainComponent = <Main {...this.props} />;
          break;
          case "callback":
            mainComponent = <Callback />;
            break;
      case "secret":
          mainComponent = this.props.auth.isAuthenticated() ? <Secret {...this.props} />: <NotFound />
          break;
          default :
          mainComponent = <NotFound />;
    }

    
  return (
    <div className="App">
      <header className="App-header">
      
       
        {mainComponent}
      </header>
    </div>
  );
  }
}
export default App;
