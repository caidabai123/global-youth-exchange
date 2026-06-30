<template>
  <header id="header">
    <div class="container">
      <nav>
        <router-link to="/" class="logo">
          <div class="logo-icon">G</div>
          <div class="logo-text">
            <h1>国际青年文化交流</h1>
            <span>GLOBAL YOUTH EXCHANGE</span>
          </div>
        </router-link>
        <div class="nav-toggle" id="navToggle" @click="toggleNav">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul class="nav-links" id="navLinks" :class="{ active: isNavOpen }">
          <li><router-link to="/" @click="closeNav">首页</router-link></li>
          <li><router-link to="/cultural-exchange" @click="closeNav">国际文化交流项目</router-link></li>
          <li><router-link to="/cultural-visa" @click="closeNav">国际青年文化交流签证</router-link></li>
          <li><router-link to="/working-holiday" @click="closeNav">打工度假签证</router-link></li>
          <li><router-link to="/internship-visa" @click="closeNav">国际青年实习培训签证</router-link></li>
          <li><router-link to="/about" @click="closeNav">关于我们</router-link></li>
          <li><router-link to="/contact" @click="closeNav">联系我们</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
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