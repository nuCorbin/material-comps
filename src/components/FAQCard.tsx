"use client"
import * as React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCardProps {
  faqs: FAQItem[];
}

export default function FAQCard({ faqs }: FAQCardProps) {
  return (
    <Card sx={{ width: '100%', maxWidth: 600 }}>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom fontWeight="500">
          Frequently Asked Questions
        </Typography>

        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            elevation={0}
            disableGutters
            sx={{
              '&:before': { display: 'none' },
              borderBottom: '1px solid',
              borderColor: 'divider',
              '&:first-of-type': {
                borderTop: '1px solid',
                borderColor: 'divider',
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                px: 0,
                '& .MuiAccordionSummary-content': {
                  my: 1.5,
                },
              }}
            >
              <Typography fontWeight="500">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 0, pb: 2 }}>
              <Typography color="text.secondary">
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </CardContent>
    </Card>
  );
} 