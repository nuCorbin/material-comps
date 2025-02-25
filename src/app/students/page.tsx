"use client"
import * as React from 'react';
import { Container } from '@mui/material';
import StudentTable from '@/components/StudentTable';
import SectionHeader from '@/components/SectionHeader';
import studentItems from '@/app/mockData/studentItems';

export default function StudentsPage() {
  const handleAddStudent = () => {
    // Implement add student functionality
    console.log('Add student clicked');
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <SectionHeader title="Manage Student Records" />
      <StudentTable 
        students={studentItems}
        onAddStudent={handleAddStudent}
      />
    </Container>
  );
} 