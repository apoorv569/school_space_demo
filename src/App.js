import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";

import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import StudentTable from "./Components/StudentTable";

export default function App() {
    return (
        <Router>
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
                    <Routes>
                        <Route path='/students' element={<StudentTable />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}
