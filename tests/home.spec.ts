import { test, expect } from '@playwright/test'

const baseURL = 'https://grayinfilmv2.netlify.app/'

test.describe('test the static personal webpage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(baseURL)
  })
  test('check navbar contents exist', async ({ page }) => {
    expect(page.getByRole('link', { name: 'Home' }).isVisible)
    expect(page.getByRole('link', { name: 'Blog' }).isVisible)
    expect(page.getByRole('link', { name: '\'See @grayinfilm on GitHub' }).isVisible)
    expect(page.getByRole('link', { name: '\'See @grayinfilm on Instagram' }).isVisible)
    expect(page.getByRole('link', { name: '\'See @grayinfilm on LinkedIn' }).isVisible)
    expect(page.getByRole('link', { name: '\'See @grayinfilm on LinkTree' }).isVisible)
    expect(page.getByRole('link', { name: '\'See @grayinfilm on RSS' }).isVisible)
  })
  test('check home navbar link is redirecting', async ({ page }) => {
    await page.getByRole('link', { name: 'Home' }).click()
    expect(page.url()).toEqual(baseURL)
  })
  test('check blog navbar link is redirecting', async ({ page }) => {
    await page.getByRole('link', { name: 'Blog' }).click()
    expect(page.url()).toEqual(baseURL + '/blog')
  })
  test('check github navbar link is redirecting', async ({ page }) => {
    const popupPromise = page.waitForEvent('popup')
    await page.getByRole('link', { name: '\'See @grayinfilm on GitHub' }).click()
    const popup = await popupPromise
    expect(popup.evaluate('location.href')).toEqual('https://github.com/digracesion')
  })
  test('check instagram navbar link is redirecting', async ({ page }) => {
    const popupPromise = page.waitForEvent('popup')
    await page.getByRole('link', { name: '\'See @grayinfilm on Instagram' }).click()
    const popup = await popupPromise
    expect(popup.evaluate('location.href')).toEqual('https://www.instagram.com/gray__in__film/')
  })
  test('check linkedin navbar link is redirecting', async ({ page }) => {
    const popupPromise = page.waitForEvent('popup')
    await page.getByRole('link', { name: '\'See @grayinfilm on LinkedIn' }).click()
    const popup = await popupPromise
    expect(popup.evaluate('location.href')).toEqual('https://www.linkedin.com/in/mary-grygjeanne-grace-icay-109184140/')
  })
  test('check linktree navbar link is redirecting', async ({ page }) => {
    const popupPromise = page.waitForEvent('popup')
    await page.getByRole('link', { name: '\'See @grayinfilm on LinkTree' }).click()
    const popup = await popupPromise
    expect(popup.evaluate('location.href')).toEqual('https://linktr.ee/grayinfilm')
  })
  test('check rss navbar link is redirecting', async ({ page }) => {
    const popupPromise = page.waitForEvent('popup')
    await page.getByRole('link', { name: '\'See @grayinfilm on RSS' }).click()
    const popup = await popupPromise
    expect(popup.evaluate('location.href')).toEqual(baseURL + 'feed.xml')
  })
  test('check support me on kofi link', async ({ page }) => {
    expect(page.getByRole('link', { name: 'Ko-Fi' }).isVisible)
    const popupPromise = page.waitForEvent('popup')
    await page.getByText('Support Me! Ko-Fi Hashnode').click()
    const popup = await popupPromise
    expect(popup.evaluate('location.href')).toEqual('https://ko-fi.com/grayinfilm');
  })
  test('check support me on hashnode link', async ({ page }) => {
    expect(page.getByRole('link', { name: 'Ko-Fi' }).isVisible)
    const popupPromise = page.waitForEvent('popup')
    await page.getByText('Support Me! Ko-Fi Hashnode').click()
    const popup = await popupPromise
    expect(popup.evaluate('location.href')).toEqual('https://ko-fi.com/grayinfilm')
  })
  test('check blog redirection link from read my blogposts', async ({ page }) => {
    await page.getByRole('link', { name: 'Read my blogposts →' }).click()
    expect(page.url()).toEqual(baseURL)
  })
  test('check blog redirection links from go to blog', async ({ page }) => {
    await page.getByRole('link', { name: 'Go to blog →' }).click()
    expect(page.url()).toEqual(baseURL)
  })
})
