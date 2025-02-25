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
  MenuItem,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface StudentDialogProps {
  open: boolean;
  onClose: () => void;
  initialData?: {
    id?: string;
    name: string;
    grade: number;
    school: string;
    status: 'Active' | 'Inactive';
  };
}

const GRADES = [9, 10, 11, 12];
const STATUS_OPTIONS = ['Active', 'Inactive'] as const;

export default function StudentDialog({ open, onClose, initialData }: StudentDialogProps) {
  const [formData, setFormData] = React.useState({
    name: '',
    grade: 9,
    school: '',
    status: 'Active' as const,
  });

  React.useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({
        name: '',
        grade: 9,
        school: '',
        status: 'Active',
      });
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
        {initialData?.id ? 'Edit Student' : 'Add New Student'}
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
            label="Student Name"
            fullWidth
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <TextField
            select
            label="Grade"
            fullWidth
            value={formData.grade}
            onChange={(e) => setFormData({ ...formData, grade: Number(e.target.value) })}
          >
            {GRADES.map((grade) => (
              <MenuItem key={grade} value={grade}>
                {grade}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="School"
            fullWidth
            value={formData.school}
            onChange={(e) => setFormData({ ...formData, school: e.target.value })}
          />
          <TextField
            select
            label="Status"
            fullWidth
            value={formData.status}
            onChange={(e) => setFormData({ 
              ...formData, 
              status: e.target.value as 'Active' | 'Inactive'
            })}
          >
            {STATUS_OPTIONS.map((status) => (
              <MenuItem key={status} value={status}>
                {status}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </DialogContent>

      <DialogActions sx={{ p: 3 }}>
        <Button
          variant="contained"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
} 