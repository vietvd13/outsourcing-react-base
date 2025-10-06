import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { loginSchema, type LoginSchema } from '@/validation/login.schema';
import { useAppDispatch } from '@/store/hooks';
import { setCredentials } from '@/store/authSlice';
import { login } from '@/services/modules/auth.service';

export default function Login() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } =
    useForm<LoginSchema>({ resolver: zodResolver(loginSchema) });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = async (values: LoginSchema) => {
    const data = await login(values);
    dispatch(setCredentials({ token: data.token, user: data.user }));
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card">
      <h1>Login</h1>
      <input placeholder="Email" {...register('email')} />
      {errors.email && <small>{(errors.email as any).message}</small>}
      <input placeholder="Password" type="password" {...register('password')} />
      {errors.password && <small>{(errors.password as any).message}</small>}
      <button disabled={isSubmitting} type="submit">Sign in</button>
    </form>
  );
}
