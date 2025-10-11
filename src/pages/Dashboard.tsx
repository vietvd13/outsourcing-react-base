/**
 * @file Dashboard page which also serves as a showcase for all configured features.
 * This page serves as a living documentation for developers to understand
 * what components and features are available in the base project.
 */

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import {
  Button,
  Card,
  Space,
  Typography,
  Divider,
  Form,
  Input,
  Select,
  Table,
  Modal,
  Tag,
  Alert,
  Spin,
  Row,
  Col
} from 'antd';
import {
  UserOutlined,
  SettingOutlined,
  BellOutlined,
  GlobalOutlined,
  ApiOutlined,
  LockOutlined
} from '@ant-design/icons';
import type { RootState } from '@/store/store';

const { Title, Paragraph, Text } = Typography;
const { Option } = Select;

/**
 * Dashboard component demonstrating all configured features.
 */
export default function Dashboard() {
  const { t, i18n } = useTranslation();
  const auth = useSelector((state: RootState) => state.auth);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  // Sample data for table demo
  const tableData = [
    { key: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { key: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { key: '3', name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor' }
  ];

  const tableColumns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Role', dataIndex: 'role', key: 'role', render: (role: string) => <Tag color="blue">{role}</Tag> }
  ];

  // Language change handler
  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
    toast.success(`Language changed to ${language === 'en' ? 'English' : 'Tiếng Việt'}`);
  };

  // Toast demo functions
  const showSuccessToast = () => toast.success('This is a success message!');
  const showErrorToast = () => toast.error('This is an error message!');
  const showInfoToast = () => toast('This is an info message!');

  // Loading demo
  const simulateLoading = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
      <Title level={1}>
        <ApiOutlined /> React Base Project Showcase
      </Title>
      <Paragraph>
        This page demonstrates all the configured features and components available in this base project.
        It serves as a living documentation for developers.
      </Paragraph>

      {/* Authentication State */}
      <Card title={<><LockOutlined /> Authentication State</> } style={{ marginBottom: '24px' }}>
        <Row gutter={16}>
          <Col span={12}>
            <Text strong>Current User: </Text>
            <Text>{auth.user?.name || 'Not logged in'}</Text>
          </Col>
          <Col span={12}>
            <Text strong>Token Status: </Text>
            <Tag color={auth.token ? 'green' : 'red'}>
              {auth.token ? 'Authenticated' : 'Not authenticated'}
            </Tag>
          </Col>
        </Row>
      </Card>

      {/* Internationalization Demo */}
      <Card title={<><GlobalOutlined /> Internationalization (i18n)</> } style={{ marginBottom: '24px' }}>
        <Space direction="vertical" style={{ width: '100%' }}>
          <div>
            <Text strong>Current Language: </Text>
            <Tag color="blue">{i18n.language === 'en' ? 'English' : 'Tiếng Việt'}</Tag>
          </div>
          <Space>
            <Button onClick={() => handleLanguageChange('en')}>English</Button>
            <Button onClick={() => handleLanguageChange('vi')}>Tiếng Việt</Button>
          </Space>
          <Alert
            message="Translation Example"
            description={t('welcome', 'Welcome to our application!')}
            type="info"
            showIcon
          />
        </Space>
      </Card>

      {/* Toast Notifications Demo */}
      <Card title={<><BellOutlined /> Toast Notifications</> } style={{ marginBottom: '24px' }}>
        <Space>
          <Button type="primary" onClick={showSuccessToast}>Success Toast</Button>
          <Button danger onClick={showErrorToast}>Error Toast</Button>
          <Button onClick={showInfoToast}>Info Toast</Button>
        </Space>
      </Card>

      {/* UI Components Demo */}
      <Card title={<><SettingOutlined /> UI Components Demo</> } style={{ marginBottom: '24px' }}>
        <Space direction="vertical" style={{ width: '100%' }} size="large">

          {/* Buttons */}
          <div>
            <Title level={4}>Buttons</Title>
            <Space wrap>
              <Button type="primary">Primary</Button>
              <Button>Default</Button>
              <Button type="dashed">Dashed</Button>
              <Button type="text">Text</Button>
              <Button type="link">Link</Button>
              <Button danger>Danger</Button>
              <Button loading>Loading</Button>
            </Space>
          </div>

          <Divider />

          {/* Form Demo */}
          <div>
            <Title level={4}>Form Example</Title>
            <Form layout="inline">
              <Form.Item label="Name">
                <Input placeholder="Enter your name" prefix={<UserOutlined />} />
              </Form.Item>
              <Form.Item label="Role">
                <Select defaultValue="user" style={{ width: 120 }}>
                  <Option value="admin">Admin</Option>
                  <Option value="user">User</Option>
                  <Option value="editor">Editor</Option>
                </Select>
              </Form.Item>
              <Form.Item>
                <Button type="primary">Submit</Button>
              </Form.Item>
            </Form>
          </div>

          <Divider />

          {/* Table Demo */}
          <div>
            <Title level={4}>Table Example</Title>
            <Table
              dataSource={tableData}
              columns={tableColumns}
              pagination={false}
              size="small"
            />
          </div>

          <Divider />

          {/* Modal Demo */}
          <div>
            <Title level={4}>Modal Example</Title>
            <Button type="primary" onClick={() => setModalVisible(true)}>
              Open Modal
            </Button>
            <Modal
              title="Demo Modal"
              open={modalVisible}
              onOk={() => setModalVisible(false)}
              onCancel={() => setModalVisible(false)}
            >
              <p>This is a demo modal to showcase the Modal component.</p>
              <p>You can put any content here.</p>
            </Modal>
          </div>

          <Divider />

          {/* Loading Demo */}
          <div>
            <Title level={4}>Loading States</Title>
            <Space>
              <Button onClick={simulateLoading}>Simulate Loading</Button>
              {loading && <Spin />}
            </Space>
          </div>

        </Space>
      </Card>

      {/* Technical Information */}
      <Card title="Technical Stack" style={{ marginBottom: '24px' }}>
        <Row gutter={16}>
          <Col span={8}>
            <Title level={5}>Frontend</Title>
            <ul>
              <li>React 19</li>
              <li>TypeScript</li>
              <li>Ant Design</li>
              <li>React Router</li>
            </ul>
          </Col>
          <Col span={8}>
            <Title level={5}>State Management</Title>
            <ul>
              <li>Redux Toolkit</li>
              <li>React Redux</li>
            </ul>
          </Col>
          <Col span={8}>
            <Title level={5}>Other Features</Title>
            <ul>
              <li>React Hook Form</li>
              <li>Zod Validation</li>
              <li>i18next</li>
              <li>React Hot Toast</li>
              <li>Axios with Interceptors</li>
            </ul>
          </Col>
        </Row>
      </Card>

      {/* API Features */}
      <Card title="API Features Configured">
        <ul>
          <li><Text strong>Automatic Token Refresh:</Text> Handles expired tokens automatically</li>
          <li><Text strong>Request Queuing:</Text> Queues requests during token refresh</li>
          <li><Text strong>Error Handling:</Text> Global error notifications via toast</li>
          <li><Text strong>Language Headers:</Text> Automatically sends Accept-Language header</li>
          <li><Text strong>TypeScript Support:</Text> Fully typed API responses</li>
        </ul>
      </Card>
    </div>
  );
}
