<template>
  <div class="wave-container">
    <svg :class="['wave-divider', `wave-${type}`]" :viewBox="`0 0 ${width} ${height}`" :preserveAspectRatio="preserveAspectRatio" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient :id="`wave-gradient-${type}`" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" :style="`stop-color: ${fromColor}`" />
          <stop offset="50%" :style="`stop-color: ${midColor}`" />
          <stop offset="100%" :style="`stop-color: ${toColor}`" />
        </linearGradient>
      </defs>
      <path :d="wavePath" :fill="`url(#wave-gradient-${type})`" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'WaveDivider',
  props: {
    type: {
      type: String,
      default: 'a',
      validator: (val) => ['a', 'b', 'c'].includes(val)
    },
    width: {
      type: Number,
      default: 1440
    },
    height: {
      type: Number,
      default: 150
    },
    fromColor: {
      type: String,
      default: '#002B5B'
    },
    midColor: {
      type: String,
      default: '#003366'
    },
    toColor: {
      type: String,
      default: '#002B5B'
    },
    preserveAspectRatio: {
      type: String,
      default: 'none'
    }
  },
  computed: {
    wavePath() {
      const w = this.width
      const h = this.height
      const hw = w / 2
      const qw = w / 4
      const hh = h / 2
      
      switch (this.type) {
        case 'b':
          return `M0,${h} Q${qw},${h * 0.3} ${hw},${hh} T${w},${h * 0.2} L${w},0 L0,0 Z`
        case 'c':
          return `M0,${h} C${qw * 0.3},${h * 0.2} ${qw * 1.2},${h * 0.8} ${qw * 2},${h * 0.3} C${qw * 2.8},${h * 0.1} ${qw * 3.5},${h * 0.6} ${w},${h * 0.4} L${w},0 L0,0 Z`
        default:
          return `M0,${h} C${qw},${h * 0.15} ${qw * 1.8},${h * 0.7} ${qw * 2.5},${h * 0.2} C${qw * 3.2},${h * 0.05} ${w},${h * 0.5} ${w},${h * 0.3} L${w},0 L0,0 Z`
      }
    }
  }
}
</script>

<style scoped>
.wave-container {
  width: 100%;
  margin: -1px 0;
}

.wave-divider {
  width: 100%;
  display: block;
  filter: drop-shadow(0 -4px 8px rgba(0, 0, 0, 0.05));
}
</style>
