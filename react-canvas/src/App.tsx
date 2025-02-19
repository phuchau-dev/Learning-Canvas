import BouncingCircle from "./components/BouncingCircle";
import { COLORS } from "./constants/colors"; 
import "./App.css"; 

function App() {
  return (
    <div className="container" style={{ backgroundColor: COLORS.BACKGROUND_BLUE }}>
      <BouncingCircle />
    </div>
  );
}

export default App;