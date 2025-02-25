"use client"
import * as React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  IconButton,
  Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface CaseDialogProps {
  open: boolean;
  onClose: () => void;
  initialData?: {
    id?: string;
    title: string;
    description: string;
  };
}

export default function CaseDialog({ open, onClose, initialData }: CaseDialogProps) {
  const [formData, setFormData] = React.useState({
    title: '',
    description: '',
  });

  React.useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({ title: '', description: '' });
    }
  }, [initialData]);

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Form submitted:', formData);
    onClose();
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle sx={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
        pb: 2,
      }}>
        {initialData?.id ? 'Edit Case' : 'Create New Case'}
        <IconButton
          onClick={onClose}
          size="small"
          sx={{ color: 'text.secondary' }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 1 }}>
          <TextField
            label="Case Title"
            fullWidth
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
          <TextField
            label="Case Description"
            fullWidth
            multiline
            rows={4}
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
        </Box>
      </DialogContent>

      <DialogActions sx={{ p: 3 }}>
        <Button
          variant="contained"
          onClick={handleSubmit}
        >
          Submit Case
        </Button>
      </DialogActions>
    </Dialog>
  );
} 