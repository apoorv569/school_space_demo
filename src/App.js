
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import StudentTable from "./Components/StudentTable";

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

                <div style={{
                    marginLeft: 310,
                }}
                >
                  <StudentTable />
                </div>
            </div>
    );
}
