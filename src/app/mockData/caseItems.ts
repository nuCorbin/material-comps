interface CaseItem {
  id: string;
  title: string;
  status: 'Open' | 'Closed';
  createdAt: string;
}

const caseItems: CaseItem[] = [
  {
    id: '1',
    title: 'Missing Student Data',
    status: 'Open',
    createdAt: '2023-06-01',
  },
  {
    id: '2',
    title: 'Incorrect Disbursement Amount',
    status: 'Closed',
    createdAt: '2023-05-28',
  },
  {
    id: '3',
    title: 'Data Validation Error',
    status: 'Open',
    createdAt: '2023-06-02',
  },
  // Add more sample cases...
];

export default caseItems; 