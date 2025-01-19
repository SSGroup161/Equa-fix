import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import Notfound from "../pages/Notfound";
import Barang from "../pages/Barang";
import Depot from "../pages/Depot";
import Karyawan from "../pages/Karyawan";
import Laporan from "../pages/Laporan";
import Penggajian from "../pages/Penggajian";
import Login from "../pages/Login";
import Forget from "../pages/Forget";
import ChangePassword from "../pages/ChangePassword";
import TambahSetoran from "../pages/TambahSetoran";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<Navigate to="/setoran-harian" replace />}
                />
                <Route path="/setoran-harian" element={<Home />} />
                <Route
                    path="/setoran-harian/tambah-setoran"
                    element={<TambahSetoran />}
                />
                <Route path="/barang" element={<Barang />} />
                <Route path="/depot" element={<Depot />} />
                <Route path="/karyawan" element={<Karyawan />} />
                <Route path="/laporan" element={<Laporan />} />
                <Route path="/penggajian" element={<Penggajian />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forget" element={<Forget />} />
                <Route path="/change" element={<ChangePassword />} />
                <Route path="*" element={<Notfound />} />
            </Routes>
        </Router>
    );
};

export default App;
