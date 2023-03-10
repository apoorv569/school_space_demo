
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

export default function App() {
    return (
            <div>
                <div style={{
                    marginLeft: 280,
                }}
                >
                    <Header />
                </div>

                <div>
                    <Sidebar />
                </div>
            </div>
    );
}
