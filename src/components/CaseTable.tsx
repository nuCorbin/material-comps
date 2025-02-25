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
import CaseDialog from './CaseDialog';

interface CaseItem {
  id: string;
  title: string;
  status: 'Open' | 'Closed';
  createdAt: string;
}

interface CaseTableProps {
  cases: CaseItem[];
  onCreateCase: () => void;
}

type SortField = 'title' | 'status' | 'createdAt';

export default function CaseTable({ cases, onCreateCase }: CaseTableProps) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [sortField, setSortField] = React.useState<SortField>('createdAt');
  const [sortDirection, setSortDirection] = React.useState<'asc' | 'desc'>('desc');
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [selectedCase, setSelectedCase] = React.useState<CaseItem | null>(null);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const filteredAndSortedCases = React.useMemo(() => {
    return cases
      .filter(caseItem =>
        caseItem.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => {
        const compareValue = sortDirection === 'asc' ? 1 : -1;
        if (a[sortField] < b[sortField]) return -1 * compareValue;
        if (a[sortField] > b[sortField]) return 1 * compareValue;
        return 0;
      });
  }, [cases, searchQuery, sortField, sortDirection]);

  const handleOpenDialog = (caseItem?: CaseItem) => {
    if (caseItem) {
      setSelectedCase(caseItem);
    } else {
      setSelectedCase(null);
    }
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedCase(null);
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
          placeholder="Search cases..."
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
          Create New Case
        </Button>
      </Box>

      <TableContainer component={Paper} elevation={0}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={sortField === 'title'}
                  direction={sortField === 'title' ? sortDirection : 'asc'}
                  onClick={() => handleSort('title')}
                >
                  Title
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
              <TableCell>
                <TableSortLabel
                  active={sortField === 'createdAt'}
                  direction={sortField === 'createdAt' ? sortDirection : 'asc'}
                  onClick={() => handleSort('createdAt')}
                >
                  Created At
                </TableSortLabel>
              </TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredAndSortedCases.map((caseItem) => (
              <TableRow key={caseItem.id}>
                <TableCell>{caseItem.title}</TableCell>
                <TableCell>{caseItem.status}</TableCell>
                <TableCell>{caseItem.createdAt}</TableCell>
                <TableCell>
                  <Button
                    variant="text"
                    sx={{ color: 'primary.main' }}
                    onClick={() => handleOpenDialog(caseItem)}
                  >
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <CaseDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        initialData={selectedCase ? {
          id: selectedCase.id,
          title: selectedCase.title,
          description: '', // Add description field to CaseItem interface if needed
        } : undefined}
      />
    </Box>
  );
} 