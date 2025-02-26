import BouncingCircle from "./components/BouncingCircle";
import { COLORS } from "./constants/colors";

function App() {
    return (
        <div className="container" style={{ backgroundColor: COLORS.BACKGROUND_BLUE }}>
            <BouncingCircle color={COLORS.YELLOW} initialSize={10} step={2} minSize={10} maxSize={300}  mode="bounce" />
        </div>
    );
}

export default App;