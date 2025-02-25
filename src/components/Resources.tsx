"use client"
import * as React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
  Box,
} from '@mui/material';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';

// Define possible icon types
type IconType = 'pdf' | 'csv' | 'manual' | 'default';

interface ResourceItem {
  id: string;
  title: string;
  url: string;
  iconType: IconType;
}

interface ResourcesProps {
  title?: string;
  resources: ResourceItem[];
}

const getButtonIcon = (iconType: IconType) => {
  switch (iconType) {
    case 'pdf':
      return <DownloadOutlinedIcon color="inherit" />;
    case 'csv':
      return <DownloadOutlinedIcon color="inherit" />;
    case 'manual':
      return <DownloadOutlinedIcon color="inherit" />;
    default:
      return <DownloadOutlinedIcon color="inherit" />;
  }
};

const getResourceIcon = (iconType: IconType) => {
  switch (iconType) {
    case 'pdf':
      return <DescriptionOutlinedIcon color="inherit" />;
    case 'csv':
      return <DescriptionOutlinedIcon color="inherit" />;
    case 'manual':
      return <DescriptionOutlinedIcon color="inherit" />;
    default:
      return <DescriptionOutlinedIcon color="inherit" />;
  }
};

export default function Resources({ title = 'Resources', resources }: ResourcesProps) {
  return (
    <Card
      sx={{
        width: '100%',
        borderRadius: 2,
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          component="h2"
          sx={{
            fontWeight: 600,
            mb: 3,
          }}
        >
          {title}
        </Typography>

        <Stack spacing={2.5}>
          {resources.map((resource) => (
            <Box
              key={resource.id}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                }}
              >
                {getResourceIcon(resource.iconType)}
                <Typography>{resource.title}</Typography>
              </Box>
              
              <Button
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                size="small"
                startIcon={getButtonIcon(resource.iconType)}
                sx={{
                  textTransform: 'none',
                  borderRadius: 1,
                  px: 2,
                  py: 0.5,
                }}
              >
                Download
              </Button>
            </Box>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
} 