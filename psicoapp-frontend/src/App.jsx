import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout'; // Header y Footer están dentro de Layout
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import RecoverPasswordPage from './pages/RecoverPasswordPage';
import ChangePasswordPage from './pages/ChangePasswordPage';
import SolicitarCitaPage from './pages/SolicitarCitaPage';
import CitasPage from './pages/CitasPage';
import PerfilPage from './pages/PerfilPage';
import EnviarTestPage from './pages/EnviarTestPage';
import CompletarTestPage from './pages/CompletarTestPage';
import ReportesPage from './pages/ReportesPage';
import SubirReportePage from './pages/SubirReportePage';
import SesionesPage from './pages/SesionesPage';
import DashboardPage from './pages/DashboardPage';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/recover-password" element={<RecoverPasswordPage />} />
        <Route path="/change-password" element={<ChangePasswordPage />} />
        
        <Route
          path="/perfil"
          element={
            <Layout>
              <PerfilPage />
            </Layout>
          }
        />
        <Route
          path="/citas"
          element={
            <Layout>
              <CitasPage />
            </Layout>
          }
        />
        <Route
          path="/solicitar-cita"
          element={
            <Layout>
              <SolicitarCitaPage />
            </Layout>
          }
        />
        <Route
          path="/reportes"
          element={
            <Layout>
              <ReportesPage />
            </Layout>
          }
        />
        <Route
          path="/subir-reporte"
          element={
            <Layout>
              <SubirReportePage />
            </Layout>
          }
        />
        <Route
          path="/sesiones-virtuales"
          element={
            <Layout>
              <SesionesPage />
            </Layout>
          }
        />
        <Route
          path="/completar-test"
          element={
            <Layout>
              <CompletarTestPage />
            </Layout>
          }
        />
        <Route
          path="/enviar-test"
          element={
            <Layout>
              <EnviarTestPage />
            </Layout>
          }
        />

        <Route 
  path="/dashboard" 
  element={<ProtectedRoute isAuth={!!localStorage.getItem('token')}><Layout><DashboardPage /></Layout></ProtectedRoute>} 
/>
        {/* Redirigir a login si no se encuentra otra ruta */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;



