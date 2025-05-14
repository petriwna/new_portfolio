export type SidebarMenuItem = {
    label: string;
    isTab?: boolean;
    icon?: string;
    icon_arrow?: string;
    color?: string;
    padding?: string;
    children?: SidebarMenuItem[];
};

export const sidebarMenuTabs = ['profession', 'personal', 'hobbies', 'projects', 'contacts'] as const;

export const sidebarMenuConfig: Record<string, SidebarMenuItem[]> = {
    profession: [
        {
            label: 'profession-info',
            icon_arrow: 'arrow',
            children: [
                {
                    label: 'bio',
                    icon: 'folder',
                    isTab: true,
                    color: '--primitive-rose-400',
                    icon_arrow: 'arrow-s',
                    children: [
                        {label: 'high-school', icon: 'file', color: '--primitive-slate-500', padding: 'yes'},
                        {label: 'university', icon: 'file', color: '--primitive-slate-500', padding: 'yes'},
                    ],
                },
                {
                    label: 'interests',
                    icon: 'folder',
                    isTab: true,
                    icon_arrow: 'arrow-s',
                    color: '--primitive-teal-400',
                    children: [
                        {label: 'high-school', icon: 'file', color: '--primitive-slate-500', padding: 'yes'},
                        {label: 'university', icon: 'file', color: '--primitive-slate-500', padding: 'yes'},
                    ],
                },
                {
                    label: 'education',
                    icon: 'folder',
                    isTab: true,
                    icon_arrow: 'arrow-s',
                    color: '--primitive-indigo-500',
                    children: [
                        {label: 'high-school', icon: 'file', color: '--primitive-slate-500', padding: 'yes'},
                        {label: 'university', icon: 'file', color: '--primitive-slate-500', padding: 'yes'},
                    ],
                },
            ]
        },
        {
            label: 'contacts',
            icon_arrow: 'arrow',
            children: [
                {label: 'user@gmail.com', icon: 'message', color: '--primitive-slate-500'},
                {label: '+3598246359', icon: 'phone', color: '--primitive-slate-500'},
            ],
        },
    ],
    personal: [
        {
            label: 'personal-info',
            icon_arrow: 'arrow',
            children: [
                {
                    label: 'bio',
                    icon: 'folder',
                    isTab: true,
                    color: '--primitive-rose-400',
                    icon_arrow: 'arrow-s',
                    children: [
                        {label: 'high-school', icon: 'file', color: '--primitive-slate-500', padding: 'yes'},
                        {label: 'university', icon: 'file', color: '--primitive-slate-500', padding: 'yes'},
                    ],
                },
                {
                    label: 'interests',
                    icon: 'folder',
                    isTab: true,
                    icon_arrow: 'arrow-s',
                    color: '--primitive-teal-400',
                    children: [
                        {label: 'high-school', icon: 'file', color: '--primitive-slate-500', padding: 'yes'},
                        {label: 'university', icon: 'file', color: '--primitive-slate-500', padding: 'yes'},
                    ],
                },
                {
                    label: 'education',
                    icon: 'folder',
                    icon_arrow: 'arrow-s',
                    isTab: true,
                    color: '--primitive-indigo-500',
                    children: [
                        {label: 'high-school', icon: 'file', color: '--primitive-slate-500', padding: 'yes'},
                        {label: 'university', icon: 'file', color: '--primitive-slate-500', padding: 'yes'},
                    ],
                },
            ]
        },
        {
            label: 'contacts',
            icon_arrow: 'arrow',
            children: [
                {
                    label: 'user@gmail.com',
                    icon: 'message',
                    color: '--primitive-rose-400',
                },
                {
                    label: '+380986171139',
                    icon: 'phone',
                }
            ]
        },
    ],
    hobbies: [
        {
            label: 'hobbies',
            icon_arrow: 'arrow',
            isTab: true,
        },
    ],
    contacts: [
        {
            label: 'contacts',
            icon_arrow: 'arrow',
            children: [
                { label: 'user@gmail.com', icon: 'message', color: '--primitive-slate-500' },
                { label: '+3598246359', icon: 'phone', color: '--primitive-slate-500' },
            ],
        },
        {
            label: 'find-me-also-in',
            icon_arrow: 'arrow',
            children: [
                { label: 'YouTube', icon: 'youtube' },
                { label: 'dev.to', icon: 'devto' },
                { label: 'Instagram', icon: 'instagram' },
                { label: 'Twitch', icon: 'twitch' },
            ],
        },
    ]
};
