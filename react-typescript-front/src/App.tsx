import { Component, PropsWithChildren } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

type Props = {};
type State = {};

class App extends Component<Props, State> {
  render() {
    return (
      <div className="App">
        <h1>Welcome to the App!</h1>
      </div>
    );
  }
}

export default App;