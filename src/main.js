import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n/config'

// FAQ Accordion functionality
document.addEventListener('DOMContentLoaded', () => {
  const faqHeaders = document.querySelectorAll('.faq-header')
  
  faqHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const faqItem = this.parentElement
      
      document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
          item.classList.remove('active')
        }
      })
      
      faqItem.classList.toggle('active')
    })
  })
})

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')