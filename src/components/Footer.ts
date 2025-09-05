export function renderFooter(): string {
  return `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <p class="footer-text">
            © 2024 Gray in Film. Built with ❤️ and Vite.js
          </p>
          <div class="footer-links">
            <a href="https://ko-fi.com/grayinfilm" target="_blank" class="footer-link">Support Me</a>
            <a href="https://grayinfilm.substack.com" target="_blank" class="footer-link">Newsletter</a>
            <a href="https://digracesion.hashnode.dev/sponsor" target="_blank" class="footer-link">Sponsor</a>
            <a href="mailto:hello@grayinfilm.com" class="footer-link">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  `
}