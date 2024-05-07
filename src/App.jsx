import DataAdd from "./compenents/DataAdd";
import Header from "./compenents/Header";

function App() {
  return (
    <>
      <div className="bg-slate-300 w-full h-screen flex flex-col items-center">
        <Header />
        <DataAdd />
      </div>
    </>
  );
}

export default App;
