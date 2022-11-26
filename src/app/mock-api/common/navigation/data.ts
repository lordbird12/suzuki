/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';
import { AuthService } from 'app/core/auth/auth.service';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id: 'administrator',
        title: 'Administrator',
        subtitle: 'List of main menu for admin role',
        type: 'group',
        icon: 'heroicons_outline:home',
        children: [
            {
                title: 'รายชื่อ',
                type: 'basic',
                icon: 'heroicons_outline:users',
                link: '/member/list',
            },
           
            // {
            //     title: 'รายการเติมเงิน',
            //     type: 'basic',
            //     icon: 'heroicons_outline:cash',
            //     link: 'transaction/list'
            // },

            {
                title: 'สไตล์',
                type: 'basic',
                icon: 'heroicons_outline:collection',
                link: 'style/list'
            },
           

            {
                title: 'รถจักรยานยนต์',
                type: 'basic',
                icon: 'mat_solid:sports_motorsports',
                link: 'motorcycle/list'
            },



        ],
    },

    {
        id: 'account',
        title: 'Account',
        type: 'group',
        icon: 'heroicons_outline:home',
        children: [

            {
                id: 'signout',
                title: 'ออกจากระบบ',
                type: 'basic',
                icon: 'heroicons_outline:logout',
                link: '/sign-out',
            },
        ],
    },
];
