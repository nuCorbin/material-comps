import * as React from 'react';
import {
  Select,
  MenuItem,
  Typography,

} from '@mui/material';

interface SchoolDistrict {
  id: string | number;
  name: string;
  location?: string;
}

interface SchoolDistrictListProps {
  districts: SchoolDistrict[];
  onDistrictSelect?: (district: SchoolDistrict) => void;
  selectedDistrict?: SchoolDistrict | null;
}

export default function SchoolDistrictList({
  districts,
  onDistrictSelect,
  selectedDistrict,
}: SchoolDistrictListProps) {
  return (
    <Select
      value={selectedDistrict?.id || ''}
      onChange={(event) => {
        const selected = districts.find(d => d.id === event.target.value);
        if (selected) onDistrictSelect?.(selected);
      }}
      displayEmpty
      sx={{
        width: '200px',
        bgcolor: 'background.paper',
        '& .MuiSelect-select': {
          py: 1.5,
        },
      }}
    >
      <MenuItem value="" disabled>
        <Typography>Select District</Typography>
      </MenuItem>
      <MenuItem value="all">
        <Typography>All Districts</Typography>
      </MenuItem>
      {districts.map((district) => (
        <MenuItem key={district.id} value={district.id}>
          <Typography>{district.name}</Typography>
        </MenuItem>
      ))}
    </Select>
  );
} 