"use client"
import * as React from 'react';
import { Container } from '@mui/material';
import AnnouncementCard from '@/components/AnnouncementCard';
import announcementItems from '@/app/mockData/announcementItems';

export default function AnnouncementsPage() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <AnnouncementCard announcements={announcementItems} />
    </Container>
  );
} 