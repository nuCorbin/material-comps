"use client"
import * as React from 'react';
import { Container } from '@mui/material';
import Resources from '../../components/Resources';
import resourceItems from '../mockData/resourceItems';

export default function ResourcesPage() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Resources 
        title="Resources"
        resources={resourceItems}
      />
    </Container>
  );
} 