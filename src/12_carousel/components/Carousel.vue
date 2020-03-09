<template>
  <div class="carousel-wrapper">
    <div class="carousel-nav carousel-nav_prev"
      :disabled="atFirstPosition"
      @click="moveSlide(-1)"
    ></div>
    <div class="carousel-nav carousel-nav_next"
      :disabled="atLastPosition"
      @click="moveSlide(1)"
    ></div>
    
    <div class="carousel">
      <div class="carousel-cards"
        :style="changeTranslateX"
      >
        <div class="carousel-item"
          v-for="(item, index) in items"
          :key="index"
        >
          <div class="carousel-item__image">
            <img src="https://placehold.it/200x200" alt="">
          </div>
          <div class="carousel-item__name">
            {{ item.name }}
          </div>
          <div class="carousel-item__tags">
            <span v-for="(tag, index) in item.tag"
              :key="index"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: ['items'],
  data() {
    return {
      currentOffset: 0,
      itemWidth: 220,
      visibleSlides: 3
    }
  },

  computed: {
    changeTranslateX() {
      return `transform: translateX(${this.currentOffset}px);`
    },

    atFirstPosition() {
      return this.currentOffset === 0
    },

    atLastPosition() {
      return this.currentOffset <= (this.itemWidth * -1) * (this.items.length - this.visibleSlides)
    }
  },

  methods: {
    moveSlide(value) {
      if (value === 1 && !this.atLastPosition) {
        this.currentOffset -= this.itemWidth
      } else if (value === -1 && !this.atFirstPosition) {
        this.currentOffset += this.itemWidth
      }
    }
  }
}
</script>
