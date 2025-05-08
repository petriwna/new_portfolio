export interface SidebarItem {
    label: string
    icon?: string
    icon_arrow?: string
    color?: string
    padding?: 'yes' | 'no'
    children?: SidebarItem[]
}
