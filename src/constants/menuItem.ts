import {
    RiHome2Line,
    RiPercentLine,
    RiPieChart2Line,
    RiMessage2Line,
    RiSettings2Line,
    RiLogoutBoxLine,
} from 'react-icons/ri'
export const menuItems = [
    {
        title: 'Dashboard',
        icon: RiHome2Line,
        path: '/dashboard',
    },
    {
        title: 'Sales',
        icon: RiPercentLine,
        path: '/sales',
    },
    {
        title: 'Analytics',
        icon: RiPieChart2Line,
        path: '/analytics',
    },
    {
        title: 'Messages',
        icon: RiMessage2Line,
        path: '/messages',
    },
    {
        title: 'Settings',
        icon: RiSettings2Line,
        path: '/settings',
    },
];