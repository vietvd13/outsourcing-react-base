import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Typography, Card } from 'antd';
import styles from './Login.module.scss';
import { MailOutlined, LockOutlined } from '@ant-design/icons';

import { loginSchema, type LoginSchema } from '@/validation/login.schema';
import { useAppDispatch } from '@/store/hooks';
import { setCredentials } from '@/store/authSlice';
import { login } from '@/services/modules/auth.service';

const { Title } = Typography;

export default function Login() {
  const { control, handleSubmit, formState: { errors, isSubmitting } } =
    useForm<LoginSchema>({ resolver: zodResolver(loginSchema) });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = async (values: LoginSchema) => {
    const data = await login(values);
    dispatch(setCredentials({ token: data.token, user: data.user }));
    navigate('/');
  };

  return (
    <Card className={styles.loginCard}>
      <Title level={2} className={styles.title}>Login</Title>
      <Form onFinish={handleSubmit(onSubmit)} layout="vertical">
        <Form.Item
          label="Email"
          validateStatus={errors.email ? 'error' : ''}
          help={errors.email?.message}
        >
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                prefix={<MailOutlined />}
                placeholder="Email"
              />
            )}
          />
        </Form.Item>

        <Form.Item
          label="Password"
          validateStatus={errors.password ? 'error' : ''}
          help={errors.password?.message}
        >
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input.Password
                {...field}
                prefix={<LockOutlined />}
                placeholder="Password"
              />
            )}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isSubmitting} block>
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
