/* eslint-disable @typescript-eslint/no-floating-promises */
import { test, expect, chromium } from '@playwright/test'

const browser = await chromium.launch()
const context = await browser.newContext()
const page = await context.newPage()

const baseURL = 'https://grayinfilmv2.netlify.app/'
const profileURL = {
  github: 'https://github.com/digracesion',
  instagram: 'https://www.instagram.com/gray__in__film/',
  linkedin: 'https://www.linkedin.com/in/mary-grygjeanne-grace-icay-109184140/',
  links: 'https://www.biodrop.io/digracesion',
  rss: baseURL + 'feed.xml',
  kofi: 'https://ko-fi.com/grayinfilm',
  hashnode: 'https://digracesion.hashnode.dev/sponsor/'
}

test.describe('test the static personal webpage', () => {
  test.beforeEach(async () => {
    await page.goto(baseURL)
  })
  test('check home navbar link is redirecting', async () => {
    await page.getByRole('link', { name: 'Home' }).click()
    expect(page).not.toBe('')
    await expect(page).toHaveURL(baseURL)
  })
  test('check blog navbar link is redirecting', async () => {
    await page.getByRole('link', { name: 'Blog' }).first().click()
    expect(page).not.toBe('')
    await expect(page).toHaveURL(baseURL + 'blog/')
  })
  test('check github navbar link is redirecting', async () => {
    const popupPromise = page.waitForEvent('popup')
    await page.getByRole('link', { name: '\'See @grayinfilm on GitHub' }).click()
    const popup = await popupPromise
    await expect(popup).toHaveURL(profileURL.github)
  })
  test('check instagram navbar link is redirecting', async () => {
    const popupPromise = page.waitForEvent('popup')
    await page.getByRole('link', { name: '\'See @grayinfilm on Instagram' }).click()
    const popup = await popupPromise
    await expect(popup).toHaveURL(profileURL.instagram)
  })
  test('check linkedin navbar link is redirecting', async () => {
    const popupPromise = page.waitForEvent('popup')
    await page.getByRole('link', { name: '\'See @grayinfilm on LinkedIn' }).click()
    const popup = await popupPromise
    await expect(popup).toHaveURL(profileURL.linkedin)
  })
  test('check linktree navbar link is redirecting', async () => {
    const popupPromise = page.waitForEvent('popup')
    await page.getByRole('link', { name: '\'See @grayinfilm on LinkTree' }).click()
    const popup = await popupPromise
    await expect(popup).toHaveURL(profileURL.linktree)
  })
  test('check rss navbar link is redirecting', async () => {
    const popupPromise = page.waitForEvent('popup')
    await page.getByRole('link', { name: '\'See @grayinfilm on RSS' }).click()
    const popup = await popupPromise
    await expect(popup).toHaveURL(profileURL.rss)
  })
  test('check support me on kofi link', async () => {
    const popupPromise = page.waitForEvent('popup')
    await page.getByRole('link', { name: 'Ko-Fi' }).click()
    const popup = await popupPromise
    await expect(popup).toHaveURL(profileURL.kofi)
  })
  test('check support me on hashnode link', async () => {
    const popupPromise = page.waitForEvent('popup')
    await page.getByRole('link', { name: 'Hashnode' }).click()
    const popup = await popupPromise
    await expect(popup).toHaveURL(profileURL.hashnode)
  })
  test('check blog redirection link from read my blogposts', async () => {
    await page.getByRole('link', { name: 'Read my blogposts →' }).click()
    expect(page).not.toBe('')
    await expect(page).toHaveURL(baseURL + 'blog/')
  })
  test('check blog redirection links from go to blog', async () => {
    await page.getByRole('link', { name: 'Go to blog →' }).click()
    expect(page).not.toBe('')
    await expect(page).toHaveURL(baseURL + 'blog/')
  })
  test.afterAll(async () => {
    context.close()
    browser.close()
  })
})
