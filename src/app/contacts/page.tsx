"use client"
import * as React from 'react';
import { Container } from '@mui/material';
import ContactCard from '@/components/ContactCard';

export default function ContactsPage() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <ContactCard
        email="support@sebt.gov"
        phone="(555) 123-4567"
        hours="Monday - Friday, 9:00 AM - 5:00 PM EST"
      />
    </Container>
  );
} 