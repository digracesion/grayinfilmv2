import { BlogPost } from '../data/blogPosts'

export function renderBlogGrid(posts: BlogPost[]): string {
  return posts.map(post => renderBlogCard(post)).join('')
}

function renderBlogCard(post: BlogPost): string {
  const formattedDate = new Date(post.pubDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return `
    <article class="blog-card">
      <div class="blog-card-content">
        <header class="blog-card-header">
          <h2 class="blog-card-title">${post.title}</h2>
          <div class="blog-card-meta">
            <span>📅 ${formattedDate}</span>
            <span>✍️ ${post.author}</span>
          </div>
        </header>
        
        <p class="blog-card-description">${post.description}</p>
        
        <div class="blog-card-tags">
          ${post.tags.map(tag => `<span class="tag">${formatTag(tag)}</span>`).join('')}
        </div>
        
        <footer class="blog-card-footer">
          ${post.externalUrl 
            ? `<a href="${post.externalUrl}" target="_blank" class="read-more">Read on external site →</a>`
            : `<span class="read-more">Coming soon</span>`
          }
          ${post.externalUrl 
            ? `<a href="${post.externalUrl}" target="_blank" class="external-link">🔗 External</a>`
            : ''
          }
        </footer>
      </div>
    </article>
  `
}

function formatTag(tag: string): string {
  return tag.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ')
}