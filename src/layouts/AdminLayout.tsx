import { Outlet } from 'react-router-dom';

export default function AdminLayout() {
  return (
    <div className="container">
      <header>Admin</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
