import { computed } from 'vue';
import { sidebarMenuConfig } from '@/shared/config/sidebarMenuConfig';
import type { SidebarMenuItem } from '@/shared/config/sidebarMenuConfig';

export function useSidebarMenu(tab: string) {
    const menuItems = computed<SidebarMenuItem[]>(() => {
        return sidebarMenuConfig[tab] || [];
    });

    return { menuItems };
}
