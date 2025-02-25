"use client"
import * as React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  Box,
  TableSortLabel,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import StudentDialog from './StudentDialog';

interface StudentItem {
  id: string;
  name: string;
  grade: number;
  school: string;
  status: 'Active' | 'Inactive';
}

interface StudentTableProps {
  students: StudentItem[];
  onAddStudent: () => void;
}

type SortField = 'name' | 'grade' | 'school' | 'status';

export default function StudentTable({ students, onAddStudent }: StudentTableProps) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [sortField, setSortField] = React.useState<SortField>('name');
  const [sortDirection, setSortDirection] = React.useState<'asc' | 'desc'>('asc');
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [selectedStudent, setSelectedStudent] = React.useState<StudentItem | null>(null);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const filteredAndSortedStudents = React.useMemo(() => {
    return students
      .filter(student =>
        student.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => {
        const compareValue = sortDirection === 'asc' ? 1 : -1;
        if (a[sortField] < b[sortField]) return -1 * compareValue;
        if (a[sortField] > b[sortField]) return 1 * compareValue;
        return 0;
      });
  }, [students, searchQuery, sortField, sortDirection]);

  const handleOpenDialog = (student?: StudentItem) => {
    if (student) {
      setSelectedStudent(student);
    } else {
      setSelectedStudent(null);
    }
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedStudent(null);
  };

  return (
    <Box>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        mb: 2 
      }}>
        <TextField
          placeholder="Search students..."
          variant="outlined"
          size="small"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ width: 300 }}
        />
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => handleOpenDialog()}
        >
          Add New Student
        </Button>
      </Box>

      <TableContainer component={Paper} elevation={0}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={sortField === 'name'}
                  direction={sortField === 'name' ? sortDirection : 'asc'}
                  onClick={() => handleSort('name')}
                >
                  Name
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortField === 'grade'}
                  direction={sortField === 'grade' ? sortDirection : 'asc'}
                  onClick={() => handleSort('grade')}
                >
                  Grade
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortField === 'school'}
                  direction={sortField === 'school' ? sortDirection : 'asc'}
                  onClick={() => handleSort('school')}
                >
                  School
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortField === 'status'}
                  direction={sortField === 'status' ? sortDirection : 'asc'}
                  onClick={() => handleSort('status')}
                >
                  Status
                </TableSortLabel>
              </TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredAndSortedStudents.map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.grade}</TableCell>
                <TableCell>{student.school}</TableCell>
                <TableCell>{student.status}</TableCell>
                <TableCell>
                  <Button
                    variant="text"
                    sx={{ color: 'primary.main' }}
                    onClick={() => handleOpenDialog(student)}
                  >
                    View/Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <StudentDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        initialData={selectedStudent}
      />
    </Box>
  );
} 