/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { test, expect, chromium, type Browser, type BrowserContext, type Page } from '@playwright/test'
import 'dotenv/config'

let browser: Browser
let context: BrowserContext
let page: Page
const baseURL = process.env.BASE_URL!
const blogURL = process.env.BLOG_URL!
const profileURL = {
  github: process.env.GITHUB_URL!,
  instagram: process.env.INSTAGRAM_URL!,
  linkedin: process.env.LINKEDIN_URL!,
  links: process.env.LINKS_URL!,
  rss: process.env.RSS_URL!,
  kofi: process.env.KOFI_URL!,
  hashnode: process.env.HASHNODE_URL!
}

async function checkLinkRedirection (linkName: string, expectedURL: string) {
  const popupPromise = page.waitForEvent('popup')
  await page.getByRole('link', { name: linkName }).click()
  const popup = await popupPromise
  const currentURL = await popup.evaluate('location.href')
  expect(currentURL).toEqual(expectedURL)
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
  test('check title @T8a56309d', async () => {
    expect(await page.title()).toBe('Brutal Theme | Home')
  })
  test('check home navbar link is redirecting @T3ecb860e', async () => {
    await page.getByRole('link', { name: 'Home' }).click()
    await expect(page).toHaveURL(baseURL)
  })
  test('check blog navbar link is redirecting @T8f04f031', async () => {
    await page.getByRole('link', { name: 'Blog' }).first().click()
    await expect(page).toHaveURL(blogURL)
  })
  test('check github navbar link is redirecting @T607a0dbd', async () => {
    void checkLinkRedirection('\'See @grayinfilm on GitHub', profileURL.github)
  })
  test('check instagram navbar link is redirecting @Tdfa6a28b', async () => {
    void checkLinkRedirection('\'See @grayinfilm on Instagram', profileURL.instagram)
  })
  test('check linkedin navbar link is redirecting @T5369c048', async () => {
    void checkLinkRedirection('\'See @grayinfilm on LinkedIn', profileURL.linkedin)
  })
  test('check links navbar link is redirecting @T07c68866', async () => {
    void checkLinkRedirection('\'See @grayinfilm on BioDrop', profileURL.links)
  })
  test('check rss navbar link is redirecting @T411a8b08', async () => {
    void checkLinkRedirection('\'See @grayinfilm on RSS', profileURL.rss)
  })
  test('check support me on kofi link @T2a975061', async () => {
    void checkLinkRedirection('Ko-Fi', profileURL.kofi)
  })
  test('check support me on hashnode link @Teba88b3b', async () => {
    void checkLinkRedirection('Hashnode', profileURL.hashnode)
  })
  test('check blog redirection link from read my blogposts @T66f61bb5', async () => {
    await page.getByRole('link', { name: 'Read my blogposts →' }).click()
    await expect(page).toHaveURL(blogURL)
  })
  test('check blog redirection links from go to blog @Tbf3a8417', async () => {
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
