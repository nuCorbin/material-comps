import { useQuery } from '@tanstack/react-query';
import { apiService } from '@/api/apiService';

const fetchDashboard = async () => {
  return await apiService.get('/dashboard');
};

const Dashboard = () => {
  const { data, error, isLoading } = useQuery(['dashboard'], fetchDashboard);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading dashboard</p>;

  return (
    <div>
      <h1>Dashboard</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Dashboard;
