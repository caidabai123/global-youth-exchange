<template>
  <div class="home">
    <section class="hero">
      <div class="hero-bg"></div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="tagline">NON-PROFIT ORGANIZATION</div>
        <h2>连接世界 启迪未来</h2>
        <p>非营利性国际青年文化交流平台，致力于通过各类交流项目促进跨文化理解与人文互联，为青年搭建通往世界的桥梁</p>
        <div class="hero-buttons">
          <router-link to="/cultural-exchange" class="btn btn-primary">探索项目</router-link>
          <router-link to="/contact" class="btn btn-outline">联系我们</router-link>
        </div>
      </div>
      <div class="btn-scroll"></div>
    </section>

    <section id="about" class="section">
      <div class="container">
        <div class="section-title">
          <div class="section-tag">ABOUT US</div>
          <h2>关于我们</h2>
          <p>连接世界青年，促进跨文化理解与友谊</p>
        </div>
        
        <div class="about-grid">
          <div class="about-features">
            <div class="feature-item">
              <div class="feature-icon">🌍</div>
              <h4>全球网络</h4>
              <p>覆盖50+国家和200+合作伙伴机构</p>
            </div>
            <div class="feature-item">
              <div class="feature-icon">🎓</div>
              <h4>丰富项目</h4>
              <p>涵盖学术交流、文化体验、志愿服务等多个领域</p>
            </div>
            <div class="feature-item">
              <div class="feature-icon">🤝</div>
              <h4>专业服务</h4>
              <p>专业团队全程指导，确保交流体验安全顺利</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="programs" class="section" style="background: var(--bg-gray);">
      <div class="container">
        <div class="section-title">
          <div class="section-tag">PROGRAMS</div>
          <h2>核心项目</h2>
          <p>四大核心类目，满足不同青年的交流需求</p>
        </div>
        
        <div class="services-grid">
          <div class="service-card">
            <div class="service-icon">🎨</div>
            <h4>国际文化交流项目</h4>
            <p>学术交流、艺术交流、志愿服务、体育交流、职业发展、文化体验</p>
            <router-link to="/cultural-exchange" class="service-link">了解更多 →</router-link>
          </div>
          <div class="service-card">
            <div class="service-icon">🛂</div>
            <h4>国际青年文化交流签证</h4>
            <p>美国J-1交流访问签证、英国GAE政府授权交换签证等专业指导</p>
            <router-link to="/cultural-visa" class="service-link">了解更多 →</router-link>
          </div>
          <div class="service-card">
            <div class="service-icon">✈️</div>
            <h4>打工度假签证</h4>
            <p>澳大利亚、新西兰、加拿大等热门目的地打工度假签证服务</p>
            <router-link to="/working-holiday" class="service-link">了解更多 →</router-link>
          </div>
          <div class="service-card">
            <div class="service-icon">💼</div>
            <h4>国际青年实习培训签证</h4>
            <p>信息技术、金融财经、商业管理等领域的国际实习机会</p>
            <router-link to="/internship-visa" class="service-link">了解更多 →</router-link>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
    this.initScrollEffects()
    this.initStatAnimation()
  },
  methods: {
    initScrollEffects() {
      window.addEventListener('scroll', this.handleScroll)
    },
    handleScroll() {
      const scrolled = window.scrollY
      const heroContent = document.querySelector('.hero-content')
      if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`
      }
    },
    initStatAnimation() {
      // 简化的统计动画
      const stats = document.querySelectorAll('.stat-item h3')
      stats.forEach(stat => {
        const target = stat.textContent
        const numeric = parseInt(target.replace(/[^0-9]/g, ''))
        if (numeric) {
          this.animateNumber(stat, 0, numeric, 2000)
        }
      })
    },
    animateNumber(element, start, end, duration) {
      const range = end - start
      const startTime = performance.now()
      
      const update = (currentTime) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        const current = Math.floor(progress * range + start)
        element.textContent = current + '+'
        
        if (progress < 1) {
          requestAnimationFrame(update)
        }
      }
      
      requestAnimationFrame(update)
    }
  }
}
</script>