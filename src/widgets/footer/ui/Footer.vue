<script setup lang="ts">
import FooterSocialLink from './FooterSocialLink.vue'
import Icon from "@/shared/ui/Icon.vue";
</script>
<template>
  <div class="footer">
    <div class="footer__social">
      <div class="tab">
        <p>find me in:</p>
      </div>
      <ul>
        <li class="tab">
          <FooterSocialLink
              href="https://www.linkedin.com/in/nataliia-sychevska/"
              icon="linkedin"
              className="footer__link--linkedin"
          />
        </li>
      </ul>
    </div>
    <div class="footer__git tab">
      <a class="footer__link link" target="_blank" href="https://github.com/petriwna">
        @petriwna
        <Icon name="git" className="footer__icon" />
      </a>

      <FooterSocialLink
          href="https://github.com/petriwna"
          icon="git"
          className="footer__link--icon"
      />
    </div>
  </div>
</template>

