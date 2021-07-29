import Index from "./pages/index";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
        </Switch>
      </Router>
      <Toaster position="bottom-center" />
    </Provider>
  );
}

export default App;
