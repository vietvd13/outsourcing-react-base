import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '@/store/hooks';
import type { RootState } from '@/store/store';

interface RoleBasedGuardProps {
  allowedRoles: string[];
}

export default function RoleBasedGuard({ allowedRoles }: RoleBasedGuardProps) {
  const user = useAppSelector((s: RootState) => s.auth.user);

  if (!user || !user.role) {
    // User is not logged in or has no role, redirect to login
    return <Navigate to="/login" replace />;
  }

  const hasRequiredRole = allowedRoles.includes(user.role);

  if (!hasRequiredRole) {
    // User does not have the required role, redirect to a 'forbidden' page or home
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
