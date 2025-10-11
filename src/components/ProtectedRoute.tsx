import { Outlet, Navigate } from 'react-router-dom';
import { useAppSelector } from '@/store/hooks';
import type { RootState } from '@/store/store';

export default function ProtectedRoute() {
  const isAuthenticated = useAppSelector((s: RootState) => !!s.auth.token);
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}
