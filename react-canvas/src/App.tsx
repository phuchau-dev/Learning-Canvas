import BouncingCircle from "./components/BouncingCircle";
import { COLORS } from "./constants/colors";

function App() {
    return (
        <div className="container" style={{ backgroundColor: COLORS.BACKGROUND_BLUE }}>
            <BouncingCircle color={COLORS.YELLOW} initialSize={10} step={1} minSize={10} maxSize={200} />
        </div>
    );
}

export default App;