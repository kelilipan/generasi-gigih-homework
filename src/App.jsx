import Index from "./pages/home";
import Navbar from "./components/navbar";
import CreatePlaylist from "./pages/create-playlist";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/create-playlist">
            <CreatePlaylist />
          </Route>
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
