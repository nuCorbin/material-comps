import { Typography, Box } from '@mui/material';

interface SectionHeaderProps {
  title: string;
}

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography
        variant="h4"
        component="h1"
        fontWeight="500"
        sx={{ color: 'text.primary' }}
      >
        {title}
      </Typography>
    </Box>
  );
} 