import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { configureHistory } from "../../router/history";
import store from "../../store";
import Home from "../../containers/home";

const history = configureHistory();

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <Router history={history}>
            <Route path="/" component={Home} exact />
          </Router>
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;
