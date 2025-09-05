import './style.css'
import { BlogPost, blogPosts } from './data/blogPosts'
import { renderHeader } from './components/Header'
import { renderBlogGrid } from './components/BlogGrid'
import { renderFooter } from './components/Footer'
import { setupSearch } from './utils/search'
import { setupTagFilter } from './utils/tagFilter'

class App {
  private container: HTMLElement
  private filteredPosts: BlogPost[] = blogPosts

  constructor() {
    this.container = document.querySelector<HTMLDivElement>('#app')!
    this.init()
  }

  private init() {
    this.render()
    this.setupEventListeners()
  }

  private render() {
    this.container.innerHTML = `
      ${renderHeader()}
      <main class="main-content">
        <div class="container">
          <section class="hero">
            <h1 class="hero-title">Gray in Film</h1>
            <p class="hero-subtitle">
              Stories, thoughts, and experiences from a Filipino expat in Japan. 
              Exploring tech, photography, language learning, and life abroad.
            </p>
          </section>
          
          <section class="filters">
            <div class="search-container">
              <input 
                type="text" 
                id="search-input" 
                placeholder="Search posts..." 
                class="search-input"
              >
            </div>
            <div class="tag-filter-container">
              <select id="tag-filter" class="tag-filter">
                <option value="">All Categories</option>
                ${this.getUniqueTags().map(tag => 
                  `<option value="${tag}">${this.formatTag(tag)}</option>`
                ).join('')}
              </select>
            </div>
          </div>
          
          <section class="blog-section">
            <div id="blog-grid" class="blog-grid">
              ${renderBlogGrid(this.filteredPosts)}
            </div>
            <div id="no-results" class="no-results" style="display: none;">
              <p>No posts found matching your criteria.</p>
            </div>
          </section>
        </div>
      </main>
      ${renderFooter()}
    `
  }

  private setupEventListeners() {
    setupSearch((filteredPosts) => {
      this.filteredPosts = filteredPosts
      this.updateBlogGrid()
    })

    setupTagFilter((filteredPosts) => {
      this.filteredPosts = filteredPosts
      this.updateBlogGrid()
    })
  }

  private updateBlogGrid() {
    const blogGrid = document.getElementById('blog-grid')!
    const noResults = document.getElementById('no-results')!
    
    if (this.filteredPosts.length === 0) {
      blogGrid.style.display = 'none'
      noResults.style.display = 'block'
    } else {
      blogGrid.style.display = 'grid'
      noResults.style.display = 'none'
      blogGrid.innerHTML = renderBlogGrid(this.filteredPosts)
    }
  }

  private getUniqueTags(): string[] {
    const tags = new Set<string>()
    blogPosts.forEach(post => {
      post.tags.forEach(tag => tags.add(tag))
    })
    return Array.from(tags).sort()
  }

  private formatTag(tag: string): string {
    return tag.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')
  }
}

new App()