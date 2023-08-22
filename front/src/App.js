import { Counter } from "./components/Counter/Counter";
import { FetchedData } from "./components/FetchedData/FetchedData";
import { FetchedPokemon } from "./components/FetchedData/FetchedPokemon";
import { Notifications } from "./components/Notifications/Notifications";
import { SocketComponent } from "./components/SocketComponent/SocketComponent";
import { User } from "./components/User/User";

function App() {
  return (
    <div className="App">
      <Notifications />

      <div className="mt-12 px-10 grid grid-cols-2 gap-10">
        <SocketComponent />
        <FetchedPokemon />
      </div>

      <div className="mt-12 grid grid-cols-2 gap-10 px-10">
        <User />
        <FetchedData />
      </div>

      <Counter />
    </div>
  );
}

export default App;
