import {ref, computed} from 'vue';
import {sidebarMenuConfig} from '@/shared/config/sidebarMenuConfig';

const selectedTab = ref<'profession' | 'personal' | 'hobbies'>('profession');

const selectTab = (tab: typeof selectedTab.value) => {
    selectedTab.value = tab;
};

const menuItems = computed(() => sidebarMenuConfig[selectedTab.value] || []);

export const useSidebar = () => ({
    selectedTab,
    menuItems,
    selectTab
});
