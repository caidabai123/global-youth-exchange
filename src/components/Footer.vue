<template>
  <footer>
    <div class="container">
      <div class="footer-content">
        <div class="footer-about">
          <div class="logo">
            <router-link to="/">
              <div class="logo-icon">G</div>
              <div class="logo-text">
                <h1>国际青年文化交流</h1>
                <span>GLOBAL YOUTH EXCHANGE</span>
              </div>
            </router-link>
          </div>
          <p>致力于促进国际青年文化交流，搭建跨文化沟通桥梁，为全球青年提供专业、可靠的交流服务。</p>
        </div>
        <div class="footer-section">
          <h4>快速链接</h4>
          <div class="footer-links">
            <router-link to="/cultural-exchange">国际文化交流项目</router-link>
            <router-link to="/cultural-visa">国际青年文化交流签证</router-link>
            <router-link to="/working-holiday">打工度假签证</router-link>
            <router-link to="/internship-visa">国际青年实习培训签证</router-link>
            <router-link to="/about">关于我们</router-link>
            <router-link to="/contact">联系我们</router-link>
          </div>
        </div>
        <div class="footer-section">
          <h4>联系方式</h4>
          <div class="footer-links">
            <a href="#">北京市朝阳区国际文化交流中心</a>
            <a href="tel:+861088888888">+86 10 8888 8888</a>
            <a href="mailto:info@globalyouth.org">info@globalyouth.org</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 Global Youth Cultural Exchange. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>