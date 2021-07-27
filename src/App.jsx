import Index from "./pages/index";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "./store";
function App() {
  return (
    <Provider store={store}>
      <Index />
      <Toaster position="bottom-center" />
    </Provider>
  );
}

export default App;
