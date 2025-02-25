"use client"
import * as React from 'react';
import { Container } from '@mui/material';
import DashboardOverview from '@/components/DashboardOverview';
import dashboardItems from '@/app/mockData/dashboardItems';

export default function DashboardPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <DashboardOverview items={dashboardItems} />
    </Container>
  );
} 