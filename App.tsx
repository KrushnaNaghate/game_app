import GameList from "./src/component/GameList";
import { Provider } from "react-redux";
import store from "./Redux/store/Store";

const App = () => {

  return (
    <Provider store={store}>
      <GameList/>
    </Provider>
  );
};

export default App;
