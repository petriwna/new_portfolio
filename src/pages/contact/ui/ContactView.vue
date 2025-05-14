<template>
  <SideMenu :menu="sidebarMenuConfig.contacts" />
<!--  <ContactContent />-->
</template>
<script setup lang="ts">
import { useSidebarMenu } from '@/entities/sidebar/model/useSidebarMenu';
import SideMenu from "@/features/sideMenu/ui/SideMenu.vue";
import {sidebarMenuConfig} from "@/shared/config/sidebarMenuConfig";
</script>
