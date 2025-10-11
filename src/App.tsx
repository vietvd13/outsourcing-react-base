import { Toaster } from 'react-hot-toast';
import { AppRoutes } from '@/routes/routes';

export default function App() {
  return (
    <>
      <AppRoutes />
      <Toaster />
    </>
  );
}
// ...removed scaffold demo component
