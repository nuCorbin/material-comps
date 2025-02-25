"use client"
import * as React from 'react';
import { Container } from '@mui/material';
import SchoolDistrictList from '../../components/SchoolDistrictList';
import schoolDistricts from '../mockData/districtItems';

export default function DistrictsPage() {
  const [selectedDistrict, setSelectedDistrict] = React.useState(null);

  const handleDistrictSelect = (district:any) => {
    setSelectedDistrict(district);
    // Add any additional handling here
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <SchoolDistrictList
        districts={schoolDistricts}
        onDistrictSelect={handleDistrictSelect}
        selectedDistrict={selectedDistrict}
      />
    </Container>
  );
} 