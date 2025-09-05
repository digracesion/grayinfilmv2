import { blogPosts, BlogPost } from '../data/blogPosts'

export function setupTagFilter(onFilter: (posts: BlogPost[]) => void) {
  const tagFilter = document.getElementById('tag-filter') as HTMLSelectElement
  
  if (!tagFilter) return

  tagFilter.addEventListener('change', (e) => {
    const selectedTag = (e.target as HTMLSelectElement).value.toLowerCase()
    
    if (!selectedTag) {
      onFilter(blogPosts)
      return
    }

    const filteredPosts = blogPosts.filter(post => {
      return post.tags.some(tag => tag.toLowerCase() === selectedTag)
    })

    onFilter(filteredPosts)
  })
}