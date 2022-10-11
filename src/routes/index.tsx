import { Routes, Route } from "react-router-dom";
import DefaultLayout from "layouts/Default";
import Homepage from "pages/Homepage";

export default function RoutesList() {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path="/" element={<Homepage />} />
            </Route>
        </Routes>
    );
}
