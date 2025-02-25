"use client"
import * as React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Alert,
  Stack,
} from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

interface AnnouncementItem {
  id: string;
  title: string;
  message: string;
}

interface AnnouncementCardProps {
  announcements: AnnouncementItem[];
}

export default function AnnouncementCard({ announcements }: AnnouncementCardProps) {
  return (
    <Card sx={{ width: '100%', maxWidth: 600 }}>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom fontWeight="500">
          Announcement
        </Typography>

        <Stack spacing={2}>
          {announcements.map((announcement) => (
            <Alert
              key={announcement.id}
              icon={<InfoOutlinedIcon />}
              severity="info"
              sx={{
                '& .MuiAlert-icon': {
                  color: 'inherit',
                },
                '& .MuiAlert-message': {
                  width: '100%',
                },
              }}
            >
              <Typography fontWeight="500" gutterBottom>
                {announcement.title}
              </Typography>
              <Typography color="text.secondary">
                {announcement.message}
              </Typography>
            </Alert>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
} 