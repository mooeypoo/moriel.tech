<template>
  <section
    :class="['latest-blog-posts', `latest-blog-posts-era-${era}`]"
  >
    <h2 class="latest-blog-posts-title">
      Latest from the blog
    </h2>

    <ul
      v-if="latestPosts.length"
      class="latest-blog-posts-list"
    >
      <li
        v-for="post in latestPosts"
        :key="post.url"
        class="latest-blog-posts-item"
      >
        <a
          :href="post.url"
          target="_blank"
          rel="noopener noreferrer"
          class="latest-blog-posts-link"
        >
          {{ post.title }}
        </a>
        <div class="latest-blog-posts-meta">
          {{ formatDate(post.date) }}
        </div>
        <p class="latest-blog-posts-description">
          {{ post.description }}
        </p>
      </li>
    </ul>

    <p
      v-else
      class="latest-blog-posts-empty"
    >
      New posts are published on blog.moriel.tech.
    </p>

    <p class="latest-blog-posts-more">
      <a
        href="https://blog.moriel.tech/posts"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read more posts
      </a>
    </p>
  </section>
</template>

<script>
import { useAsyncData } from 'nuxt/app'
import { ofetch } from 'ofetch'

export default {
  name: 'LatestBlogPosts',
  props: {
    era: {
      type: String,
      default: '2021'
    }
  },
  async setup () {
    const { data } = await useAsyncData('latest-blog-posts', async () => {
      try {
        const response = await ofetch('https://blog.moriel.tech/latest-posts.json')
        return Array.isArray(response?.posts) ? response.posts : []
      } catch {
        return []
      }
    }, {
      default: () => [],
      server: true,
      lazy: true,
    })

    return { data }
  },
  computed: {
    latestPosts () {
      return Array.isArray(this.data) ? this.data.slice(0, 3) : []
    }
  },
  methods: {
    formatDate (dateValue) {
      if (!dateValue) return ''
      try {
        return new Date(dateValue).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        })
      } catch {
        return ''
      }
    }
  }
}
</script>

<style scoped>
.latest-blog-posts {
  margin-top: 2rem;
  padding: 1.1rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: rgba(255, 255, 255, 0.02);
}

.latest-blog-posts-title {
  margin-bottom: 0.75rem;
}

.latest-blog-posts-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.latest-blog-posts-item {
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.25);
}

.latest-blog-posts-item:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: 0;
}

.latest-blog-posts-link {
  font-weight: 700;
}

.latest-blog-posts-meta {
  opacity: 0.8;
  font-size: 0.9rem;
}

.latest-blog-posts-description {
  margin-top: 0.35rem;
  margin-bottom: 0;
}

.latest-blog-posts-empty {
  margin-top: 0.25rem;
  margin-bottom: 0;
}

.latest-blog-posts-more {
  margin-top: 1rem;
}

.latest-blog-posts-era-1989 {
  border: 1px solid cyan;
  background: rgba(0, 0, 0, 0.25);
  color: #d6ffff;
  font-family: 'Courier New', monospace;
}

.latest-blog-posts-era-1989 .latest-blog-posts-title {
  color: deeppink;
  text-transform: uppercase;
}

.latest-blog-posts-era-1989 .latest-blog-posts-item {
  border-bottom-color: rgba(0, 255, 255, 0.45);
}

.latest-blog-posts-era-1997 {
  border: 2px ridge #b9b9b9;
  background: #f4f4f4;
  color: #111;
}

.latest-blog-posts-era-1997 .latest-blog-posts-title {
  color: #003399;
}

.latest-blog-posts-era-1997 .latest-blog-posts-item {
  border-bottom-color: #999;
}

.latest-blog-posts-era-1997 .latest-blog-posts-link {
  color: #0000ee;
}

.latest-blog-posts-era-2000 {
  border: 1px solid #8062a7;
  border-radius: 0;
  background: #f7f3ff;
  color: #272727;
  box-shadow: 3px 3px 0 #b8a4d1;
}

.latest-blog-posts-era-2000 .latest-blog-posts-title {
  color: #57153d;
}

.latest-blog-posts-era-2000 .latest-blog-posts-item {
  border-bottom-color: #c3b3d8;
}

.latest-blog-posts-era-2012 {
  border: 1px solid #d8d8d8;
  background: #fff;
  color: #333;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.06);
}

.latest-blog-posts-era-2012 .latest-blog-posts-title {
  color: #31708f;
}

.latest-blog-posts-era-2012 .latest-blog-posts-item {
  border-bottom-color: #ddd;
}

.latest-blog-posts-era-2021 {
  border-color: rgba(255, 255, 255, 0.2);
}

.latest-blog-posts-era-2100 {
  border: 1px solid rgba(90, 169, 255, 0.45);
  background: linear-gradient(135deg, rgba(24, 34, 64, 0.85), rgba(20, 66, 92, 0.75));
  color: #daf7ff;
  box-shadow: 0 0 14px rgba(90, 169, 255, 0.2);
}

.latest-blog-posts-era-2100 .latest-blog-posts-title {
  color: #6ee3ff;
  letter-spacing: 0.06em;
}

.latest-blog-posts-era-2100 .latest-blog-posts-item {
  border-bottom-color: rgba(110, 227, 255, 0.4);
}
</style>
