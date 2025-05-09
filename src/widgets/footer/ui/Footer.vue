<script setup lang="ts">
import FooterSocialLink from './FooterSocialLink.vue'
import Icon from "@/shared/ui/Icon.vue";
import { socialLinks } from '@/widgets/footer/model/socialLinks'

</script>
<template>
  <div class="footer">
    <div class="footer__social">
      <div class="tab">
        <p>find me in:</p>
      </div>
      <ul>
        <li v-for="link in socialLinks.slice(0, 1)" :key="link.href">
          <FooterSocialLink
              :href="link.href"
              :icon="link.icon"
              :label="link.label"
              :className="link.className"
          />
        </li>
      </ul>
    </div>
    <div class="footer__git">
      <a class="footer__link tab link" target="_blank" href="https://github.com/petriwna">
        @petriwna
        <Icon name="git" className="footer__icon" />
      </a>

      <FooterSocialLink
          v-for="link in socialLinks.slice(1)"
          :href="link.href"
          :icon="link.icon"
          :className="link.className"
          :label="link.label"
      />
    </div>
  </div>
</template>

