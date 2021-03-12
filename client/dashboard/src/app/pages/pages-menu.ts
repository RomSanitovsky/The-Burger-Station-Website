import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Summary',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Tables & Data',
    icon: 'grid-outline',
    children: [
      {
        title: 'Users',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Items',
        link: '/pages/tables/table-items',
      },
      {
        title: 'Branches',
        link: '/pages/tables/table-branches',
      },
    ],
  },
];
