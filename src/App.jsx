import "./App.css";
import Homepage from "./components/Homepage";
import Sidenav from "./components/Sidenav";

function App() {
  return (
    <html className="bg-[#292825]">
      <div className="flex flex-row justify-center max-w-[1900px] mx-auto  ">
        <Sidenav />
        <Homepage />
      </div>
    </html>
  );
}

export default App;
