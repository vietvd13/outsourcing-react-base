import { Outlet, useNavigate } from 'react-router-dom';
import { Button, Layout, Flex, Typography } from 'antd';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { logout } from '@/store/authSlice';
import type { RootState } from '@/store/store';

const { Header, Content } = Layout;
const { Title } = Typography;

export default function AdminLayout() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector((s: RootState) => s.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ background: '#001529', color: 'white' }}>
        <Flex justify="space-between" align="center">
          <Title level={4} style={{ color: 'white', margin: 0 }}>
            Welcome, {user?.name || 'Admin'}
          </Title>
          <Button type="primary" danger onClick={handleLogout}>
            Logout
          </Button>
        </Flex>
      </Header>
      <Content style={{ padding: '24px' }}>
        <Outlet />
      </Content>
    </Layout>
  );
}
