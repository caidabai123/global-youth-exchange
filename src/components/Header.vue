<template>
  <header id="header">
    <div class="container">
      <nav>
        <router-link to="/" class="logo">
          <div class="logo-icon">G</div>
          <div class="logo-text">
            <h1>{{ t('header.logo') }}</h1>
            <span>{{ t('header.slogan') }}</span>
          </div>
        </router-link>
        <ul class="nav-links" id="navLinks" :class="{ active: isNavOpen }">
          <li><router-link to="/" @click="closeNav">{{ t('header.nav.home') }}</router-link></li>
          <li><router-link to="/cultural-exchange" @click="closeNav">{{ t('header.nav.culturalExchange') }}</router-link></li>
          <li><router-link to="/cultural-visa" @click="closeNav">{{ t('header.nav.culturalVisa') }}</router-link></li>
          <li><router-link to="/working-holiday" @click="closeNav">{{ t('header.nav.workingHoliday') }}</router-link></li>
          <li><router-link to="/internship-visa" @click="closeNav">{{ t('header.nav.internshipVisa') }}</router-link></li>
          <li><router-link to="/about" @click="closeNav">{{ t('header.nav.about') }}</router-link></li>
          <li><router-link to="/contact" @click="closeNav">{{ t('header.nav.contact') }}</router-link></li>
        </ul>
        <div class="lang-switch">
          <button class="lang-btn" :class="{ active: locale === 'en' }" @click="switchLang('en')">EN</button>
          <button class="lang-btn" :class="{ active: locale === 'zh' }" @click="switchLang('zh')">{{ t('header.lang.zh') }}</button>
        </div>
        <div class="nav-actions">
          <button class="lang-toggle" @click="toggleLang">{{ locale === 'en' ? '中' : 'EN' }}</button>
          <div class="nav-toggle" id="navToggle" @click="toggleNav">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'Header',
  setup() {
    const { locale, t } = useI18n()
    
    const switchLang = (lang) => {
      locale.value = lang
    }
    
    const toggleLang = () => {
      locale.value = locale.value === 'zh' ? 'en' : 'zh'
    }
    
    return { t, locale, switchLang, toggleLang }
  },
  data() {
    return {
      isNavOpen: false
    }
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen
    },
    closeNav() {
      this.isNavOpen = false
    },
    handleScroll() {
      const header = document.getElementById('header')
      if (window.scrollY > 50) {
        header.classList.add('scrolled')
      } else {
        header.classList.remove('scrolled')
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>