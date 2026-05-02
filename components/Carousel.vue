<template>
    <div class="carousel" @mouseenter="stopTimer" @mouseleave="startTimer">
        <div v-if="visibleItems.length === 0" class="carousel-empty"></div>

        <template v-if="visibleItems.length > 0">
            <div
                class="carousel-track"
                :style="{ transform: `translateX(-${current * 100}%)` }"
            >
                <div
                    v-for="item in visibleItems"
                    :key="item.id"
                    class="carousel-slide"
                >
                    <img
                        class="backdrop-img"
                        :src="$utils.getImageUrl(item.backdrop_path, 1280)"
                        :alt="item.title || item.name"
                    />
                    <div class="slide-overlay">
                        <div class="slide-info">
                            <h1 class="slide-title">
                                {{ item.title || item.name }}
                            </h1>
                            <p class="slide-overview">{{ item.overview }}</p>
                            <div class="slide-meta">
                                <span class="slide-rating">
                                    <i class="ri-star-fill"></i>
                                    {{ item.vote_average.toFixed(1) }}
                                </span>
                                <span class="slide-year">{{
                                    (
                                        item.release_date ||
                                        item.first_air_date ||
                                        ''
                                    ).slice(0, 4)
                                }}</span>
                            </div>
                            <button class="btn-watch">
                                <i class="ri-play-fill"></i> Watch Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <button class="carousel-ctrl prev" @click="prevSlide">
                <i class="ri-arrow-left-s-line"></i>
            </button>
            <button class="carousel-ctrl next" @click="nextSlide">
                <i class="ri-arrow-right-s-line"></i>
            </button>

            <div class="carousel-dots">
                <span
                    v-for="(_, i) in visibleItems"
                    :key="i"
                    :class="['dot', { active: i === current }]"
                    @click="goTo(i)"
                ></span>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    name: 'Carousel',

    props: {
        items: {
            type: Array,
            default: () => []
        }
    },

    data() {
        return {
            current: 0,
            timer: null
        }
    },

    computed: {
        visibleItems() {
            return this.items.filter((item) => !!item.backdrop_path).slice(0, 5)
        }
    },

    watch: {
        items() {
            this.current = 0
        }
    },

    mounted() {
        this.startTimer()
    },

    beforeDestroy() {
        this.stopTimer()
    },

    methods: {
        nextSlide() {
            if (this.visibleItems.length === 0) return
            this.current =
                this.current === this.visibleItems.length - 1
                    ? 0
                    : this.current + 1
        },

        prevSlide() {
            if (this.visibleItems.length === 0) return
            this.current =
                this.current === 0
                    ? this.visibleItems.length - 1
                    : this.current - 1
        },

        goTo(i) {
            this.current = i
        },

        startTimer() {
            this.stopTimer()
            this.timer = setInterval(this.nextSlide, 5000)
        },

        stopTimer() {
            if (this.timer) {
                clearInterval(this.timer)
                this.timer = null
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.carousel {
    position: relative;
    width: 100%;
    height: 500px;
    overflow: hidden;
    background-color: $primary-background-color;
}

.carousel-empty {
    width: 100%;
    height: 100%;
    background: $primary-background-color;
}

.carousel-track {
    display: flex;
    height: 100%;
    transition: transform 0.6s ease;
}

.carousel-slide {
    min-width: 100%;
    height: 100%;
    position: relative;
    flex-shrink: 0;
}

.backdrop-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.slide-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
        to right,
        rgba($primary-background-color, 0.95) 0%,
        rgba($primary-background-color, 0.55) 50%,
        transparent 100%
    );
    display: flex;
    align-items: center;
}

.slide-info {
    max-width: 500px;
    padding: 2rem 3rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.content-tag {
    display: inline-block;
    background: $accent-color;
    color: $text-color-white;
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    padding: 0.25rem 0.65rem;
    border-radius: 4px;
    align-self: flex-start;
}

.slide-title {
    font-size: 2.2rem;
    font-weight: 700;
    color: $text-color-white;
    line-height: 1.2;
    margin: 0;
}

.slide-overview {
    font-size: 0.9rem;
    color: rgba($text-color-white, 0.75);
    line-height: 1.6;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.slide-meta {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
}

.slide-rating {
    color: #f5c518;
    font-weight: 600;
    font-size: 0.95rem;

    i {
        margin-right: 0.2rem;
    }
}

.slide-year {
    color: $text-color-grey;
    font-size: 0.95rem;
}

.btn-watch {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    background: $accent-color;
    color: $text-color-white;
    border: none;
    border-radius: 6px;
    padding: 0.75rem 1.75rem;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    align-self: flex-start;
    transition: background 0.2s ease;

    &:hover {
        background: darken($accent-color, 8%);
    }
}

.carousel-ctrl {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: rgba($primary-background-color, 0.6);
    border: 1px solid rgba($accent-color, 0.3);
    color: $text-color-white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
    transition: all 0.3s ease;
    font-size: 1.4rem;

    &:hover {
        background: $accent-color;
        border-color: $accent-color;
    }

    &.prev {
        left: 1rem;
    }

    &.next {
        right: 1rem;
    }
}

.carousel-dots {
    position: absolute;
    bottom: 1.25rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 0.5rem;
    z-index: 10;
}

.dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba($text-color-white, 0.4);
    cursor: pointer;
    transition: all 0.3s ease;

    &.active {
        background: $accent-color;
        width: 24px;
        border-radius: 4px;
    }
}
</style>
