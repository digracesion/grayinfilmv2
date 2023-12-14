import { test, expect, chromium, type Browser, type BrowserContext, type Page } from '@playwright/test'
import 'dotenv/config'

let browser: Browser
let context: BrowserContext
let page: Page
const baseURL = process.env.BASE_URL ?? 'https://grayinfilmv2.netlify.app'
const blogURL = process.env.BLOG_URL ?? 'https://grayinfilmv2.netlify.app'
const profileURL = {
  github: process.env.GITHUB_URL ?? 'https://github.com/digracesion',
  instagram: process.env.INSTAGRAM_URL ?? 'https://www.instagram.com/gray__in__film/',
  linkedin: process.env.LINKEDIN_URL ?? 'https://www.linkedin.com/in/mary-grygjeanne-grace-icay-109184140/',
  links: process.env.LINKS_URL ?? 'https://www.biodrop.io/digracesion',
  rss: process.env.RSS_URL ?? 'https://grayinfilmv2.netlify.app/feed.xml',
  kofi: process.env.KOFI_URL ?? 'https://ko-fi.com/grayinfilm',
  hashnode: process.env.HASHNODE_URL ?? 'https://digracesion.hashnode.dev/sponsor',
  newsletter: process.env.NEWSLETTER_URL ?? 'https://grayinfilm.substack.com'
}

/**
 * Asynchronously checks if a link redirects to the expected URL.
 * @param expectedURL The expected URL that the link should redirect to.
 * @returns A Promise that resolves to void.
 */
async function checkLinkRedirection (expectedURL: string): Promise<void> {
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  page.once('popup', async (popup) => {
    await popup.waitForLoadState()
    const currentURL = popup.url()
    expect(currentURL).toBe(expectedURL)
  })
}

test.describe('test the static personal webpage @Se616e1c6', () => {
  test.beforeAll(async () => {
    browser = await chromium.launch()
    context = await browser.newContext()
  })
  test.beforeEach(async () => {
    page = await context.newPage()
    await page.goto(baseURL)
  })
  test('check title', async () => {
    expect(await page.title()).toBe('Brutal Theme | Home')
  })
  test('check home navbar link is redirecting', async () => {
    await page.getByRole('link', { name: 'Home' }).click()
    await expect(page).toHaveURL(baseURL)
  })
  test('check blog navbar link is redirecting', async () => {
    await page.getByRole('link', { name: 'Blog' }).first().click()
    await expect(page).toHaveURL(blogURL)
  })
  test('check github navbar link is redirecting', async () => {
    void checkLinkRedirection('\'See @grayinfilm on GitHub', profileURL.github)
  })
  test('check instagram navbar link is redirecting', async () => {
    void checkLinkRedirection('\'See @grayinfilm on Instagram', profileURL.instagram)
  })
  test('check linkedin navbar link is redirecting', async () => {
    void checkLinkRedirection('\'See @grayinfilm on LinkedIn', profileURL.linkedin)
  })
  test('check links navbar link is redirecting', async () => {
    void checkLinkRedirection('\'See @grayinfilm on BioDrop', profileURL.links)
  })
  test('check rss navbar link is redirecting', async () => {
    void checkLinkRedirection('\'See @grayinfilm on RSS', profileURL.rss)
  })
  test('check support me on kofi link', async () => {
    void checkLinkRedirection('Ko-Fi', profileURL.kofi)
  })
  test('check support me on hashnode link', async () => {
    void checkLinkRedirection('Hashnode', profileURL.hashnode)
  })
  test('check support me on newsletter link', async () => {
    void checkLinkRedirection('Newsletter', profileURL.newsletter)
  })
  test('check blog redirection link from read my blogposts', async () => {
    await page.getByRole('link', { name: 'Read my blogposts →' }).click()
    await expect(page).toHaveURL(blogURL)
  })
  test('check blog redirection links from go to blog', async () => {
    await page.getByRole('link', { name: 'Go to blog →' }).click()
    await expect(page).toHaveURL(blogURL)
  })
  test.afterEach(async () => {
    await page.close()
  })
  test.afterAll(async () => {
    await context.close()
    await browser.close()
  })
})
