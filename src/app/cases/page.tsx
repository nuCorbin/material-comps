"use client"
import * as React from 'react';
import { Container } from '@mui/material';
import CaseTable from '@/components/CaseTable';
import SectionHeader from '@/components/SectionHeader';
import caseItems from '@/app/mockData/caseItems';

export default function CasesPage() {
  const handleCreateCase = () => {
    // Implement create case functionality
    console.log('Create case clicked');
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <SectionHeader title="Manage Case Tickets" />
      <CaseTable 
        cases={caseItems}
        onCreateCase={handleCreateCase}
      />
    </Container>
  );
} 