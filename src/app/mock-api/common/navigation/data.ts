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
                title: 'ลูกค้า',
                type: 'basic',
                icon: 'feather:smile',
                link: '/client/list',
            },

            {
                title: 'สไตล์',
                type: 'basic',
                icon: 'heroicons_outline:collection',
                link: 'style/list'
            },

            {
                title: 'ความเร็ว',
                type: 'basic',
                icon: 'mat_solid:speed',
                link: 'speed/list'
            },


            {
                title: 'รถจักรยานยนต์',
                type: 'basic',
                icon: 'mat_solid:sports_motorsports',
                link: 'motorcycle/list'
            },

            {
                title: 'ของรางวัล',
                type: 'basic',
                icon: 'feather:gift',
                link: 'item/list'
            },


            {
                title: 'โปรโมชั่น',
                type: 'basic',
                icon: 'feather:package',
                link: 'promotion/list'
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
