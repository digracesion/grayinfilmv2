import { blogPosts, BlogPost } from '../data/blogPosts'

export function setupSearch(onFilter: (posts: BlogPost[]) => void) {
  const searchInput = document.getElementById('search-input') as HTMLInputElement
  
  if (!searchInput) return

  searchInput.addEventListener('input', (e) => {
    const query = (e.target as HTMLInputElement).value.toLowerCase().trim()
    
    if (!query) {
      onFilter(blogPosts)
      return
    }

    const filteredPosts = blogPosts.filter(post => {
      return (
        post.title.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query)) ||
        post.author.toLowerCase().includes(query)
      )
    })

    onFilter(filteredPosts)
  })
}