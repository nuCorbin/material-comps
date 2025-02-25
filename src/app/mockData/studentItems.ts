interface StudentItem {
  id: string;
  name: string;
  grade: number;
  school: string;
  status: 'Active' | 'Inactive';
}

const studentItems: StudentItem[] = [
  { id: '1', name: 'John Doe', grade: 9, school: 'High School A', status: 'Active' },
  { id: '2', name: 'Jane Smith', grade: 10, school: 'High School B', status: 'Inactive' },
  { id: '3', name: 'Michael Johnson', grade: 11, school: 'High School A', status: 'Active' },
  { id: '4', name: 'Emily Brown', grade: 9, school: 'High School C', status: 'Active' },
  { id: '5', name: 'William Davis', grade: 12, school: 'High School B', status: 'Active' },
  // ... add 15 more students with varied data
];

export default studentItems; 