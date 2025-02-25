type IconType = 'pdf' | 'csv' | 'manual';

const resourceItems: Array<{
  id: string;
  title: string;
  url: string;
  iconType: IconType;
}> = [
  {
    id: '1',
    title: 'Program Guidelines (PDF)',
    url: '/path/to/guidelines.pdf',
    iconType: 'pdf',
  },
  {
    id: '2',
    title: 'CSV Upload Template (CSV)',
    url: '/path/to/template.csv',
    iconType: 'csv',
  },
  {
    id: '3',
    title: 'User Manual (PDF)',
    url: '/path/to/manual.pdf',
    iconType: 'manual',
  },
];

export default resourceItems;