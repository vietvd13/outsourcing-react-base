import { Route, Routes, Navigate } from 'react-router-dom';
import AdminLayout from '@/layouts/AdminLayout';
import AuthLayout from '@/layouts/AuthLayout';
import Dashboard from '@/pages/Dashboard';
import AdminPage from '@/pages/Admin';
import Login from '@/pages/Login';
import ProtectedRoute from '@/components/ProtectedRoute';
import RoleBasedGuard from '@/components/RoleBasedGuard';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route element={<AdminLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route element={<RoleBasedGuard allowedRoles={['admin']} />}>
            <Route path="/admin" element={<AdminPage />} />
          </Route>
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
