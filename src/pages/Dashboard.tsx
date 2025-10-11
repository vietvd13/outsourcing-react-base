import { useQuery } from '@tanstack/react-query';
import { getMe } from '@/services/modules/user.service';

export default function Dashboard() {
  const { data, isLoading } = useQuery({ queryKey: ['me'], queryFn: getMe });
  if (isLoading) return <p>Loading…</p>;
  
}
