import { Typography } from 'antd';

const { Title } = Typography;

export default function AdminPage() {
  return (
    <div>
      <Title level={2}>Admin Dashboard</Title>
      <p>This page is only accessible to users with the 'admin' role.</p>
    </div>
  );
}
