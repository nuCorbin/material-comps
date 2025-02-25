"use client"
import * as React from 'react';
import { Container } from '@mui/material';
import FAQCard from '../../components/FAQCard';
import faqItems from '../mockData/faqsItems';

export default function FAQsPage() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <FAQCard faqs={faqItems} />
    </Container>
  );
} 