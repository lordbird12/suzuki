/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';
import { AuthService } from 'app/core/auth/auth.service';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id: 'admin',
        title: 'ผู้จัดการระบบ',
        // subtitle: 'Admin',
        type: 'group',
        icon: 'heroicons_outline:users',
        // hidden: function () {
        //     return AuthService._marketingRole; // must be a boolean value
        // },
        children: [
            {
                id: 'member',
                title: 'สมาชิก',
                type: 'collapsable',
                // icon: 'heroicons_outline:clipboard-check',
                // link: '/user/list',
                children: [
                    {
                        id: 'list',
                        title: 'รายชื่อสมาชิก',
                        type: 'basic',
                        // icon: 'heroicons_outline:clipboard-check',
                        link: '/member/list',
                    },
                ],
            },
            {
                id: 'class',
                title: 'คลาสเรียน',
                type: 'collapsable',
                // icon: 'heroicons_outline:clipboard-check',
                // link: '/user/list',
                children: [
                    {
                        id: 'class-type-list',
                        title: 'ประเภทคลาส',
                        type: 'basic',
                        // icon: 'heroicons_outline:clipboard-check',
                        link: '/class-type/list',
                    },
                    {
                        id: 'class-list',
                        title: 'คลาส',
                        type: 'basic',
                        // icon: 'heroicons_outline:clipboard-check',
                        link: '/class/list',
                    },
                ],
            },
            {
                id: 'quest',
                title: 'เควส',
                type: 'collapsable',
                // icon: 'heroicons_outline:clipboard-check',
                // link: '/user/list',
                children: [
                    {
                        id: 'quest-type-list',
                        title: 'ประเภทเควส',
                        type: 'basic',
                        // icon: 'heroicons_outline:clipboard-check',
                        link: '/quest-type/list',
                    },
                    {
                        id: 'quest-sub-type-list',
                        title: 'ประเภทย่อยเควส',
                        type: 'basic',
                        // icon: 'heroicons_outline:clipboard-check',
                        link: '/quest-sub-type/list',
                    },
                    {
                        id: 'quest-group-list',
                        title: 'กลุ่มเควส',
                        type: 'basic',
                        // icon: 'heroicons_outline:clipboard-check',
                        link: '/quest-group/list',
                    },
                    {
                        id: 'quest-list',
                        title: 'เควส',
                        type: 'basic',
                        // icon: 'heroicons_outline:clipboard-check',
                        link: '/quest/list',
                    },
                ],
            },
            {
                id: 'round',
                title: 'รอบ',
                type: 'collapsable',
                // icon: 'heroicons_outline:clipboard-check',
                // link: '/user/list',
                children: [
                    {
                        id: 'round-list',
                        title: 'รอบ',
                        type: 'basic',
                        // icon: 'heroicons_outline:clipboard-check',
                        link: '/round/list',
                    },
                    {
                        id: 'round-time-list',
                        title: 'รอบเวลา',
                        type: 'basic',
                        // icon: 'heroicons_outline:clipboard-check',
                        link: '/round-time/list',
                    },
                ],
            },
            {
                id: 'item',
                title: 'ไอเทม',
                type: 'collapsable',
                // icon: 'heroicons_outline:clipboard-check',
                // link: '/user/list',
                children: [
                    {
                        id: 'item-list',
                        title: 'ไอเทม',
                        type: 'basic',
                        // icon: 'heroicons_outline:clipboard-check',
                        link: '/item/list',
                    }
                ],
            },
        ],
    },
    {
        id: 'content',
        title: 'ข่าวสารและกิจกรรม',
        type: 'group',
        icon: 'heroicons_outline:home',
        children: [

            {
                id: 'announcement',
                title: 'ข่าวสาร',
                type: 'basic',
                link: '/announcement/list',
            },
        ],
    },
    {
        id: 'account',
        title: 'บัญชีผู้ใช้',
        type: 'group',
        icon: 'heroicons_outline:home',
        children: [

            {
                id: 'user-signout',
                title: 'ออกจากระบบ',
                type: 'basic',
                link: '/sign-out',
            },
        ],
    },
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id: 'dashboards',
        title: 'Dashboards',
        tooltip: 'Dashboards',
        type: 'aside',
        icon: 'heroicons_outline:home',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'apps',
        title: 'Apps',
        tooltip: 'Apps',
        type: 'aside',
        icon: 'heroicons_outline:qrcode',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'pages',
        title: 'Pages',
        tooltip: 'Pages',
        type: 'aside',
        icon: 'heroicons_outline:document-duplicate',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'user-interface',
        title: 'UI',
        tooltip: 'UI',
        type: 'aside',
        icon: 'heroicons_outline:collection',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'navigation-features',
        title: 'Navigation',
        tooltip: 'Navigation',
        type: 'aside',
        icon: 'heroicons_outline:menu',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id: 'dashboards',
        title: 'DASHBOARDS',
        type: 'group',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'apps',
        title: 'APPS',
        type: 'group',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'others',
        title: 'OTHERS',
        type: 'group',
    },
    {
        id: 'pages',
        title: 'Pages',
        type: 'aside',
        icon: 'heroicons_outline:document-duplicate',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'user-interface',
        title: 'User Interface',
        type: 'aside',
        icon: 'heroicons_outline:collection',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'navigation-features',
        title: 'Navigation Features',
        type: 'aside',
        icon: 'heroicons_outline:menu',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id: 'dashboards',
        title: 'Dashboards',
        type: 'group',
        icon: 'heroicons_outline:home',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'apps',
        title: 'Apps',
        type: 'group',
        icon: 'heroicons_outline:qrcode',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'pages',
        title: 'Pages',
        type: 'group',
        icon: 'heroicons_outline:document-duplicate',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'user-interface',
        title: 'UI',
        type: 'group',
        icon: 'heroicons_outline:collection',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'navigation-features',
        title: 'Misc',
        type: 'group',
        icon: 'heroicons_outline:menu',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
];
