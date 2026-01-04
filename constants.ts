import { AppConfig, CommissionStatus } from './types';

export const CONFIG: AppConfig = {
  artistName: "Nova Artistry",
  tagline: "Digital Illustrator & Concept Artist",
  // Using a placeholder image - replace with your actual URL
  profileImage: "https://picsum.photos/400/400", 
  
  // CHANGE THIS TO TOGGLE STATUS: CommissionStatus.OPEN or CommissionStatus.CLOSED
  status: CommissionStatus.OPEN,

  links: [
    {
      id: '1',
      label: 'Instagram',
      url: '#',
      iconName: 'Instagram'
    },
    {
      id: '2',
      label: 'Reddit',
      url: '#',
      iconName: 'MessageCircle' // Using MessageCircle as a generic social icon for Reddit
    },
    {
      id: '3',
      label: 'TOS das Comissões (Português)',
      url: '#',
      iconName: 'FileText'
    },
    {
      id: '4',
      label: 'Commission TOS (English)',
      url: '#',
      iconName: 'FileText'
    }
  ]
};
