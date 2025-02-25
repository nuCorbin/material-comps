"use client"
import * as React from 'react';
import {
  Paper,
  Typography,
  Box,
} from '@mui/material';
import Grid from '@mui/material/Grid2';


interface DashboardItem {
  id: string;
  title: string;
  value: string | number;
}

interface DashboardOverviewProps {
  items: DashboardItem[];
}

export default function DashboardOverview({ items }: DashboardOverviewProps) {
  return (
    <Grid container spacing={3}>
      {items.map((item) => (
        <Grid size={{ xs: 6, sm: 6, md: 4 }} key={item.id}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              height: '100%',
              borderRadius: 2,
              backgroundColor: 'background.paper',
              border: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
              }}
            >
              <Typography
                variant="h6"
                component="h2"
                color="text.secondary"
                fontWeight="400"
              >
                {item.title}
              </Typography>
              <Typography
                variant="h4"
                component="p"
                fontWeight="500"
              >
                {item.value}
              </Typography>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
} 