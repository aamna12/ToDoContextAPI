import './App.css';
import AddField from './components/AddField';
import List from './components/List';
import {TodoContextProvider} from "./context/TodoContext";

function App() {
  return (
    <>
    <TodoContextProvider>
    <div className="bg-indigo-900 h-screen">
      <h1 className="text-center font-bold text-[46px] text-white underline">To Dos List</h1>
      <AddField />
      <div className="m-10 p-3 flex justify-center  items-center flex-col gap-4">
        <List />
      </div>
    </div>
    </TodoContextProvider>
    </>
  );
}

export default App;
