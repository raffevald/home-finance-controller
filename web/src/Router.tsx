import { Route, Routes } from 'react-router-dom';

import { LoginPage } from './pages/loginPage/loginPages';
import { DashboardPage } from './pages/dashboardPage/dashboardPage';


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
    )
}