interface AnnouncementItem {
  id: string;
  title: string;
  message: string;
}

const announcementItems: AnnouncementItem[] = [
  {
    id: '1',
    title: 'New Program Guidelines',
    message: 'New program guidelines are now available. Please review them before your next submission.',
  },
  {
    id: '2',
    title: 'System Maintenance',
    message: 'Scheduled maintenance will occur this Saturday from 2 AM to 4 AM EST.',
  },
  {
    id: '3',
    title: 'Upcoming Deadline',
    message: 'The submission deadline for Q2 reports is June 30th, 2024.',
  },
];

export default announcementItems; 