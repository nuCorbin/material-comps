"use client"
import * as React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Link,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

interface ContactCardProps {
  email: string;
  phone: string;
  hours: string;
}

export default function ContactCard({ email, phone, hours }: ContactCardProps) {
  return (
    <Card sx={{ width: '100%', maxWidth: 600 }}>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom fontWeight="500">
          Contact Information
        </Typography>
        
        <Typography variant="body1" color="text.secondary" gutterBottom>
          For additional support, please contact our help desk:
        </Typography>

        <Box sx={{ mt: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <EmailIcon sx={{ mr: 1, color: 'inherit' }} />
            <Typography variant="body1">
              Email: <Link href={`mailto:${email}`} underline="hover">{email}</Link>
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <PhoneIcon sx={{ mr: 1, color: 'inherit' }} />
            <Typography variant="body1">
              Phone: {phone}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AccessTimeIcon sx={{ mr: 1, color: 'inherit' }} />
            <Typography variant="body1">
              Hours: {hours}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
} 