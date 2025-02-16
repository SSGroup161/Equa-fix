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
import BarangTambah from "../pages/BarangTambah";
import Depot from "../pages/Depot";
import DepotTambah from "../pages/DepotTambah";
import Karyawan from "../pages/Karyawan";
import Laporan from "../pages/Laporan";
import Penggajian from "../pages/Penggajian";
import Login from "../pages/Login";
import Forget from "../pages/Forget";
import ChangePassword from "../pages/ChangePassword";
import SetoranTambah from "../pages/SetoranTambah";
import SetoranEdit from "../pages/SetoranEdit";
import KaryawanTambah from "../pages/KaryawanTambah";
import Mobil from "../pages/Mobil";
import MobilTambah from "../pages/MobilTambah";

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
                    element={<SetoranTambah />}
                />
                <Route
                    path="/setoran-harian/edit-setoran/:id"
                    element={<SetoranEdit />}
                />
                <Route path="/barang" element={<Barang />} />
                <Route
                    path="/barang/tambah-barang"
                    element={<BarangTambah />}
                />
                <Route path="/depot" element={<Depot />} />
                <Route path="/depot/tambah-depot" element={<DepotTambah />} />
                <Route path="/karyawan" element={<Karyawan />} />
                <Route
                    path="/karyawan/tambah-karyawan"
                    element={<KaryawanTambah />}
                />
                <Route path="/laporan" element={<Laporan />} />
                <Route path="/mobil" element={<Mobil />} />
                <Route path="/mobil/tambah-mobil" element={<MobilTambah />} />
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
