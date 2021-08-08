import Index from "./pages/home";
import Navbar from "./components/navbar";
import CreatePlaylist from "./pages/create-playlist";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/private-route";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Switch>
            <PrivateRoute exact path="/create-playlist">
              <CreatePlaylist />
            </PrivateRoute>
            <Route exact path="/">
              <Index />
            </Route>
          </Switch>
        </Router>
        <Toaster position="bottom-center" />
      </Provider>
    </ChakraProvider>
  );
}

export default App;
