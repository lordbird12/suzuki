/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';
import { AuthService } from 'app/core/auth/auth.service';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id: 'admin',
        title: 'บัญชีธนาคารวัด',
        // subtitle: 'Admin',
        type: 'group',
        icon: 'heroicons_outline:home',
        // hidden: function () {
        //     return AuthService._marketingRole; // must be a boolean value
        // },
        children: [
            {
                id: 'bank',
                title: 'บัญชีธนาคาร',
                type: 'collapsable',
                // icon: 'heroicons_outline:clipboard-check',
                // link: '/user/list',
                children: [
                    {
                        id: 'list',
                        title: 'รายชื่อบัญชีธนาคาร',
                        type: 'basic',
                        // icon: 'heroicons_outline:clipboard-check',
                        link: '/bank/list',
                    },
                    {
                        id: 'create-user',
                        title: 'สร้างบัญชีธนาคาร',
                        type: 'basic',
                        // icon: 'heroicons_outline:clipboard-check',
                        link: '/bank/new-bank',
                    },

                ]
            },
            {
                id: 'deposit-withdraw',
                title: 'ธุรกรรมทางการเงิน',
                type: 'collapsable',
                // icon: 'heroicons_outline:clipboard-check',
                // link: '/user/list',
                children: [
                    {
                        id: 'list',
                        title: 'รายการธุรกรรม',
                        type: 'basic',
                        // icon: 'heroicons_outline:clipboard-check',
                        link: '/bank/list-deposit',
                    },
                    {
                        id: 'new-deposit',
                        title: 'เพิ่มหน้าฝากเงิน',
                        type: 'basic',
                        // icon: 'heroicons_outline:clipboard-check',
                        link: '/bank/new-bank-deposit',
                    },
                    {
                        id: 'new-withdraw',
                        title: 'เพิ่มหน้าถอนเงิน',
                        type: 'basic',
                        // icon: 'heroicons_outline:clipboard-check',
                        link: '/bank/new-bank-withdraw',
                    },

                ]
            },
            // {
            //     id: 'withdraw',
            //     title: 'ถอนเงิน',
            //     type: 'collapsable',
            //     // icon: 'heroicons_outline:clipboard-check',
            //     // link: '/user/list',
            //     children: [
            //         {
            //             id: 'list',
            //             title: 'รายการถอนเงิน',
            //             type: 'basic',
            //             // icon: 'heroicons_outline:clipboard-check',
            //             link: '/bank/list-withdraw',
            //         },
            //         {
            //             id: 'new-withdraw',
            //             title: 'เพิ่มหน้าถอนเงิน',
            //             type: 'basic',
            //             // icon: 'heroicons_outline:clipboard-check',
            //             link: '/bank/new-bank-withdraw',
            //         },

            //     ]
            // },
        ]
    },

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
                id: 'user',
                title: 'ผู้ใช้งาน',
                type: 'collapsable',
                // icon: 'heroicons_outline:clipboard-check',
                // link: '/user/list',
                children: [
                    {
                        id: 'list',
                        title: 'รายชื่อผู้ใช้งาน',
                        type: 'basic',
                        // icon: 'heroicons_outline:clipboard-check',
                        link: '/user/list',
                    },
                    {
                        id: 'create-user',
                        title: 'สร้างผู้ใช้งาน',
                        type: 'basic',
                        // icon: 'heroicons_outline:clipboard-check',
                        link: '/user/create-user',
                    },
                    {
                        id: 'position',
                        title: 'ตำแหน่ง',
                        type: 'collapsable',
                        // icon: 'heroicons_outline:clipboard-check',
                        // link: '/user/list',
                        children: [
                            {
                                id: 'list',
                                title: 'รายการตำแหน่ง',
                                type: 'basic',
                                // icon: 'heroicons_outline:clipboard-check',
                                link: '/position/list',
                            },
                            {
                                id: 'new-position',
                                title: 'สร้างตำแหน่ง',
                                type: 'basic',
                                // icon: 'heroicons_outline:clipboard-check',
                                link: '/position/new-position',
                            },

                        ]
                    },
                    {
                        id: 'department',
                        title: 'แผนก',
                        type: 'collapsable',
                        // icon: 'heroicons_outline:clipboard-check',
                        // link: '/user/list',
                        children: [
                            {
                                id: 'list',
                                title: 'รายการแผนก',
                                type: 'basic',
                                // icon: 'heroicons_outline:clipboard-check',
                                link: '/department/list',
                            },
                            {
                                id: 'new-department',
                                title: 'สร้างแผนก',
                                type: 'basic',
                                // icon: 'heroicons_outline:clipboard-check',
                                link: '/department/new-department',
                            },

                        ]
                    },

                ]
            },
            {
                id: 'monk',
                title: 'พระ',
                type: 'collapsable',
                // icon: 'heroicons_outline:clipboard-check',
                // link: '/user/list',
                children: [
                    {
                        id: 'list',
                        title: 'รายการพระ',
                        type: 'basic',
                        // icon: 'heroicons_outline:clipboard-check',
                        link: '/monk/list',
                    },
                    {
                        id: 'new-location',
                        title: 'สร้างพระ',
                        type: 'basic',
                        // icon: 'heroicons_outline:clipboard-check',
                        link: '/monk/new-monk',
                    },
                    {
                        id: 'group-monk',
                        title: 'จัดกลุ่มพระ',
                        type: 'collapsable',
                        // icon: 'heroicons_outline:clipboard-check',
                        // link: '/user/list',
                        children: [
                            {
                                id: 'list',
                                title: 'รายการจัดกลุ่มพระ',
                                type: 'basic',
                                // icon: 'heroicons_outline:clipboard-check',
                                link: '/group-monk/list',
                            },
                            {
                                id: 'new-group-monk',
                                title: 'สร้างกลุ่มพระ',
                                type: 'basic',
                                // icon: 'heroicons_outline:clipboard-check',
                                link: '/group-monk/new-group-monk',
                            },
                            {
                                id: 'new-group-monk',
                                title: 'เพิ่มพระเข้ากลุ่ม',
                                type: 'basic',
                                // icon: 'heroicons_outline:clipboard-check',
                                link: '/group-monk/new-monk-group',
                            },

                        ]
                    },

                ]
            },
            {
                id: 'sala',
                title: 'ศาลา',
                type: 'collapsable',
                // icon: 'heroicons_outline:clipboard-check',
                // link: '/user/list',
                children: [
                    {
                        id: 'list',
                        title: 'รายชื่อศาลา',
                        type: 'basic',
                        // icon: 'heroicons_outline:clipboard-check',
                        link: '/sala/list',
                    },
                    {
                        id: 'new-sala',
                        title: 'สร้างศาลา',
                        type: 'basic',
                        // icon: 'heroicons_outline:clipboard-check',
                        link: '/sala/new-sala',
                    },
                    {
                        id: 'list-reserve',
                        title: 'รายชื่อจองศาลา',
                        type: 'basic',
                        // icon: 'heroicons_outline:clipboard-check',
                        link: '/sala/list-reserve',
                    },
                    {
                        id: 'reserve-sala',
                        title: 'จองศาลา',
                        type: 'basic',
                        // icon: 'heroicons_outline:clipboard-check',
                        link: '/sala/reserve-sala',
                    },

                ]
            },

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
                    {
                        id: 'new-position',
                        title: 'เพิ่มสมาชิก',
                        type: 'basic',
                        // icon: 'heroicons_outline:clipboard-check',
                        link: '/member/new-member',
                    },

                ]
            },

            {
                id: 'location',
                title: 'ห้องเก็บอุปกรณ์',
                type: 'collapsable',
                // icon: 'heroicons_outline:clipboard-check',
                // link: '/user/list',
                children: [
                    {
                        id: 'list',
                        title: 'รายการห้องเก็บอุปกรณ์',
                        type: 'basic',
                        // icon: 'heroicons_outline:clipboard-check',
                        link: '/location/list',
                    },
                    {
                        id: 'new-location',
                        title: 'สร้างห้องเก็บอุปกรณ์',
                        type: 'basic',
                        // icon: 'heroicons_outline:clipboard-check',
                        link: '/location/new-location',
                    },

                ]
            },
            {
                id: 'item',
                title: 'อุปกรณ์',
                type: 'collapsable',
                // icon: 'heroicons_outline:clipboard-check',
                // link: '/user/list',
                children: [
                    {
                        id: 'list',
                        title: 'รายการอุปกรณ์',
                        type: 'basic',
                        // icon: 'heroicons_outline:clipboard-check',
                        link: '/item/list',
                    },
                    {
                        id: 'new-location',
                        title: 'สร้างอุปกรณ์ใหม่',
                        type: 'basic',
                        // icon: 'heroicons_outline:clipboard-check',
                        link: '/item/new-item',
                    },

                ]
            },



        ]
    },
    {
        id: 'news',
        title: 'จัดการข่าว',
        // subtitle: 'Admin',
        type: 'group',
        icon: 'heroicons_outline:view-grid',
        // hidden: function () {
        //     return AuthService._marketingRole; // must be a boolean value
        // },
        children: [
            {
                id: 'news',
                title: 'ข่าวสาร',
                type: 'collapsable',
                // icon: 'heroicons_outline:clipboard-check',
                // link: '/user/list',
                children: [
                    {
                        id: 'list',
                        title: 'รายการข่าว',
                        type: 'basic',
                        // icon: 'heroicons_outline:clipboard-check',
                        link: '/news/list',
                    },
                    {
                        id: 'new-news',
                        title: 'เพิ่มข่าวใหม่',
                        type: 'basic',
                        // icon: 'heroicons_outline:clipboard-check',
                        link: '/news/new-news',
                    },
                    {
                        id: 'category-news',
                        title: 'หมวดหมู่ข่าว',
                        type: 'collapsable',
                        // icon: 'heroicons_outline:clipboard-check',
                        // link: '/user/list',
                        children: [
                            {
                                id: 'list',
                                title: 'รายชื่อหมวดหมู่',
                                type: 'basic',
                                // icon: 'heroicons_outline:clipboard-check',
                                link: '/news/list-category-news',
                            },
                            {
                                id: 'new-category-news',
                                title: 'เพิ่มข่าวใหม่',
                                type: 'basic',
                                // icon: 'heroicons_outline:clipboard-check',
                                link: '/news/new-category-news',
                            },
                        ]
                    },

                ]
            },
        ]
    },
    {
        id: 'gallery',
        title: 'จัดการแกลลอรี่',
        // subtitle: 'Admin',
        type: 'group',
        icon: 'heroicons_outline:view-grid',
        // hidden: function () {
        //     return AuthService._marketingRole; // must be a boolean value
        // },
        children: [
            {
                id: 'gallery',
                title: 'แกลลอรี่',
                type: 'collapsable',
                // icon: 'heroicons_outline:clipboard-check',
                // link: '/user/list',
                children: [
                    {
                        id: 'list',
                        title: 'รายการแกลลอรี่',
                        type: 'basic',
                        // icon: 'heroicons_outline:clipboard-check',
                        link: '/gallery/list',
                    },
                    {
                        id: 'new-gallery',
                        title: 'เพิ่มแกลลอรี่ใหม่',
                        type: 'basic',
                        // icon: 'heroicons_outline:clipboard-check',
                        link: '/gallery/new-gallery',
                    },
                    {
                        id: 'category-gallery',
                        title: 'หมวดหมู่แกลลอรี่',
                        type: 'collapsable',
                        // icon: 'heroicons_outline:clipboard-check',
                        // link: '/user/list',
                        children: [
                            {
                                id: 'list',
                                title: 'รายชื่อหมวดหมู่',
                                type: 'basic',
                                // icon: 'heroicons_outline:clipboard-check',
                                link: '/gallery/list-category-gallery',
                            },
                            {
                                id: 'new-category-gallery',
                                title: 'เพิ่มหมวดหมู่แกลลอรี่ใหม่',
                                type: 'basic',
                                // icon: 'heroicons_outline:clipboard-check',
                                link: '/gallery/new-category-gallery',
                            },
                        ]
                    },

                ]
            },
        ]
    },
    {
        id: 'sacred',
        title: 'จัดการวัตถุมงคล',
        // subtitle: 'Admin',
        type: 'group',
        icon: 'heroicons_outline:view-grid',
        // hidden: function () {
        //     return AuthService._marketingRole; // must be a boolean value
        // },
        children: [
            {
                id: '',
                title: 'วัตถุมงคล',
                type: 'collapsable',
                // icon: 'heroicons_outline:clipboard-check',
                // link: '/user/list',
                children: [
                    {
                        id: 'list',
                        title: 'รายการวัตถุมงคล',
                        type: 'basic',
                        // icon: 'heroicons_outline:clipboard-check',
                        link: '/sacred/list',
                    },
                    {
                        id: 'new-sacred',
                        title: 'สร้างวัตถุมงคล',
                        type: 'basic',
                        // icon: 'heroicons_outline:clipboard-check',
                        link: '/sacred/new-sacred',
                    },

                ]
            },



        ]
    },
    {
        id: 'land',
        title: 'จัดการที่ดิน',
        // subtitle: 'Admin',
        type: 'group',
        icon: 'heroicons_outline:view-grid',
        // hidden: function () {
        //     return AuthService._marketingRole; // must be a boolean value
        // },
        children: [
            {
                id: 'land',
                title: 'จัดการที่ดิน',
                type: 'collapsable',
                // icon: 'heroicons_outline:clipboard-check',
                // link: '/user/list',
                children: [
                    {
                        id: 'list',
                        title: 'รายการที่ดิน',
                        type: 'basic',
                        // icon: 'heroicons_outline:clipboard-check',
                        link: '/land/list',
                    },
                    {
                        id: 'new-land',
                        title: 'เพิ่มที่ดิน',
                        type: 'basic',
                        // icon: 'heroicons_outline:clipboard-check',
                        link: '/land/new',
                    },
                    {
                        id: 'event-land',
                        title: 'จัดการกิจกรรมที่ดิน',
                        type: 'collapsable',
                        // icon: 'heroicons_outline:clipboard-check',
                        // link: '/user/list',
                        children: [
                            {
                                id: 'list',
                                title: 'รายการกิจกรรมที่ดิน',
                                type: 'basic',
                                // icon: 'heroicons_outline:clipboard-check',
                                link: '/event-land/list',
                            },
                            {
                                id: 'new-land',
                                title: 'เพิ่มกิจกรรมที่ดิน',
                                type: 'basic',
                                // icon: 'heroicons_outline:clipboard-check',
                                link: '/event-land/new',
                            },
                            
                        ]
                    },
                    {
                        id: 'rent-land',
                        title: 'จัดการเช่าที่ดิน',
                        type: 'collapsable',
                        // icon: 'heroicons_outline:clipboard-check',
                        // link: '/user/list',
                        children: [
                            {
                                id: 'list',
                                title: 'รายการเช่าที่ดิน',
                                type: 'basic',
                                // icon: 'heroicons_outline:clipboard-check',
                                link: '/rent-land/list',
                            },
                            {
                                id: 'new-land',
                                title: 'เพิ่มกิจเช่าที่ดิน',
                                type: 'basic',
                                // icon: 'heroicons_outline:clipboard-check',
                                link: '/rent-land/new',
                            },
                            
                        ]
                    },
                ]
            },



        ]
    },
  
    {
        id: 'stock',
        title: 'สต๊อก',
        // subtitle: 'Admin',
        type: 'group',
        icon: 'heroicons_outline:view-grid',
        // hidden: function () {
        //     return AuthService._marketingRole; // must be a boolean value
        // },
        children: [
            {
                id: 'stock-deposit',
                title: 'ยืมอุปกรณ์',
                type: 'collapsable',
                // icon: 'heroicons_outline:clipboard-check',
                // link: '/user/list',
                children: [
                    {
                        id: 'list',
                        title: 'รายการยืมอุปกรณ์',
                        type: 'basic',
                        // icon: 'heroicons_outline:clipboard-check',
                        link: '/deposit/list',
                    },
                    {
                        id: 'create-user',
                        title: 'สร้างผู้ใช้งาน',
                        type: 'basic',
                        // icon: 'heroicons_outline:clipboard-check',
                        link: '/deposit/new-deposit',
                    },

                ]
            },



        ]
    },

    {
        id: 'account',
        title: 'บัญชีผู้ใช้',
        type: 'group',
        icon: 'heroicons_outline:home',
        children: [
            {
                id: 'settings',
                title: 'โปรไฟล์',
                type: 'basic',
                link: '/user/profile',
            },
            {
                id: 'user-signout',
                title: 'ออกจากระบบ',
                type: 'basic',
                link: '/sign-out',
            }
        ]
    },

];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id: 'dashboards',
        title: 'Dashboards',
        tooltip: 'Dashboards',
        type: 'aside',
        icon: 'heroicons_outline:home',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'apps',
        title: 'Apps',
        tooltip: 'Apps',
        type: 'aside',
        icon: 'heroicons_outline:qrcode',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'pages',
        title: 'Pages',
        tooltip: 'Pages',
        type: 'aside',
        icon: 'heroicons_outline:document-duplicate',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'user-interface',
        title: 'UI',
        tooltip: 'UI',
        type: 'aside',
        icon: 'heroicons_outline:collection',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'navigation-features',
        title: 'Navigation',
        tooltip: 'Navigation',
        type: 'aside',
        icon: 'heroicons_outline:menu',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id: 'dashboards',
        title: 'DASHBOARDS',
        type: 'group',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'apps',
        title: 'APPS',
        type: 'group',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'others',
        title: 'OTHERS',
        type: 'group'
    },
    {
        id: 'pages',
        title: 'Pages',
        type: 'aside',
        icon: 'heroicons_outline:document-duplicate',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'user-interface',
        title: 'User Interface',
        type: 'aside',
        icon: 'heroicons_outline:collection',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'navigation-features',
        title: 'Navigation Features',
        type: 'aside',
        icon: 'heroicons_outline:menu',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id: 'dashboards',
        title: 'Dashboards',
        type: 'group',
        icon: 'heroicons_outline:home',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'apps',
        title: 'Apps',
        type: 'group',
        icon: 'heroicons_outline:qrcode',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'pages',
        title: 'Pages',
        type: 'group',
        icon: 'heroicons_outline:document-duplicate',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'user-interface',
        title: 'UI',
        type: 'group',
        icon: 'heroicons_outline:collection',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id: 'navigation-features',
        title: 'Misc',
        type: 'group',
        icon: 'heroicons_outline:menu',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];
