import {
  MdAnalytics,
  MdAttachMoney,
  MdDashboard,
  MdHelpCenter,
  MdOutlineSettings,
  MdPeople,
  MdShoppingBag,
  MdSupervisedUserCircle,
  MdWork,
} from 'react-icons/md';

const EmptyComponent = () => {
  return <div></div>;
};

export const menuItems = [
  {
    title: 'Pages',
    list: [
      {
        title: 'Dashboard',
        path: '/dashboard',
        icon: MdDashboard ? <MdDashboard /> : <EmptyComponent />,
      },
      {
        title: 'Users',
        path: '/dashboard/users',
        icon: MdSupervisedUserCircle ? <MdSupervisedUserCircle /> : <EmptyComponent />,
      },
      {
        title: 'Products',
        path: '/dashboard/products',
        icon: MdShoppingBag ? <MdShoppingBag /> : <EmptyComponent />,
      },
      {
        title: 'Transactions',
        path: '/dashboard/transactions',
        icon: MdAttachMoney ? <MdAttachMoney /> : <EmptyComponent />,
      },
    ],
  },
  {
    title: 'Analytics',
    list: [
      {
        title: 'Revenue',
        path: '/dashboard/revenue',
        icon: MdWork ? <MdWork /> : <EmptyComponent />,
      },
      {
        title: 'Reports',
        path: '/dashboard/reports',
        icon: MdAnalytics ? <MdAnalytics /> : <EmptyComponent />,
      },
      {
        title: 'Teams',
        path: '/dashboard/teams',
        icon: MdPeople ? <MdPeople /> : <EmptyComponent />,
      },
    ],
  },
  {
    title: 'User',
    list: [
      {
        title: 'Settings',
        path: '/dashboard/settings',
        icon: MdOutlineSettings ? <MdOutlineSettings /> : <EmptyComponent />,
      },
      {
        title: 'Help',
        path: '/dashboard/help',
        icon: MdHelpCenter ? <MdHelpCenter /> : <EmptyComponent />,
      },
    ],
  },
];
