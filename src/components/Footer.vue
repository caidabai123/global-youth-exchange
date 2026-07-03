<template>
  <footer>
    <div class="container">
      <div class="footer-content">
        <div class="footer-about">
          <div class="logo">
            <router-link to="/">
              <div class="logo-icon">G</div>
              <div class="logo-text">
                <h1>{{ t('footer.logoText') }}</h1>
                <span>{{ t('footer.slogan') }}</span>
              </div>
            </router-link>
          </div>
          <p>{{ t('footer.description') }}</p>
        </div>
        <div class="footer-section">
          <h4>{{ t('footer.quickLinks') }}</h4>
          <div class="footer-links">
            <router-link to="/cultural-exchange">{{ t('header.nav.culturalExchange') }}</router-link>
            <router-link to="/cultural-visa">{{ t('header.nav.culturalVisa') }}</router-link>
            <router-link to="/working-holiday">{{ t('header.nav.workingHoliday') }}</router-link>
            <router-link to="/internship-visa">{{ t('header.nav.internshipVisa') }}</router-link>
            <router-link to="/about">{{ t('header.nav.about') }}</router-link>
            <router-link to="/contact">{{ t('header.nav.contact') }}</router-link>
          </div>
        </div>
        <div class="footer-section">
          <h4>{{ t('footer.contact') }}</h4>
          <div class="footer-links">
            <a href="#">{{ t('contact.info.address') }}</a>
            <a href="tel:+61282110688">+61 2 8211 0688</a>
            <a href="mailto:contact@datangcapital.com.au">contact@datangcapital.com.au</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>{{ t('footer.copyright') }}</p>
      </div>
    </div>
  </footer>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'Footer',
  setup() {
    const { t } = useI18n()
    return { t }
  }
}
</script>