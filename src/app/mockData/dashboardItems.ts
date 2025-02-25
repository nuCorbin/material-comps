interface DashboardItem {
  id: string;
  title: string;
  value: string | number;
}

const dashboardItems: DashboardItem[] = [
  {
    id: '1',
    title: 'Upload Errors',
    value: 23,
  },
  {
    id: '2',
    title: 'Pending Status',
    value: '34',
  },
  {
    id: '3',
    title: 'Total Students',
    value: '1,234',
  },
];

export default dashboardItems; 