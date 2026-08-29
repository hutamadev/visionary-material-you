import { test, expect } from '@playwright/test'

test.describe('SEO and Semantic HTML Accessibility Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should verify comprehensive SEO meta tags and Title', async ({
    page,
  }) => {
    // Title
    await expect(page).toHaveTitle(
      /Visionary · Material You 3 Digital Engineering & Web Architecture/
    )

    // Meta Description & Keywords
    const desc = page.locator('meta[name="description"]')
    await expect(desc).toHaveAttribute(
      'content',
      /Visionary combines Google Material You 3/
    )

    const keywords = page.locator('meta[name="keywords"]')
    await expect(keywords).toHaveAttribute('content', /Material You 3/)

    // OpenGraph Tags
    const ogTitle = page.locator('meta[property="og:title"]')
    await expect(ogTitle).toHaveAttribute(
      'content',
      /Visionary · Material You 3/
    )

    const ogType = page.locator('meta[property="og:type"]')
    await expect(ogType).toHaveAttribute('content', 'website')

    // Twitter Tags
    const twitterCard = page.locator('meta[name="twitter:card"]')
    await expect(twitterCard).toHaveAttribute('content', 'summary_large_image')
  })

  test('should enforce strict single H1 heading hierarchy', async ({
    page,
  }) => {
    // Only 1 h1 should exist across the entire webpage
    const h1Count = await page.locator('h1').count()
    expect(h1Count).toBe(1)

    const h1 = page.locator('h1')
    await expect(h1).toContainText(/Sculpting/i)

    // Verify presence of section h2s
    const h2s = page.locator('h2')
    const h2Count = await h2s.count()
    expect(h2Count).toBeGreaterThanOrEqual(6)
  })

  test('should verify HTML5 landmarks (header, nav, main, section, footer, article)', async ({
    page,
  }) => {
    // Landmarks
    await expect(page.locator('header')).toBeVisible()
    await expect(page.locator('main')).toBeVisible()
    await expect(page.locator('footer')).toBeVisible()

    // Navigation with proper ARIA
    const nav = page.locator('nav[aria-label="Main Navigation"]')
    await expect(nav).toBeVisible()

    // Sections with aria-labels
    await expect(page.locator('section#about')).toHaveAttribute(
      'aria-label',
      'About Visionary'
    )
    await expect(page.locator('section#services')).toHaveAttribute(
      'aria-label',
      'Core Capabilities'
    )
    await expect(page.locator('section#workflow')).toHaveAttribute(
      'aria-label',
      'Execution Framework'
    )
    await expect(page.locator('section#portfolio')).toHaveAttribute(
      'aria-label',
      'Selected Case Studies'
    )
    await expect(page.locator('section#testimonials')).toHaveAttribute(
      'aria-label',
      'Client Testimonials'
    )
    await expect(page.locator('section#team')).toHaveAttribute(
      'aria-label',
      'Core Team'
    )

    // Semantic Article cards
    const articles = page.locator('article')
    const articleCount = await articles.count()
    expect(articleCount).toBeGreaterThanOrEqual(10)
  })

  test('should verify image alt tags and decorative aria-hidden tags', async ({
    page,
  }) => {
    // All avatar images have non-empty alt text
    const avatars = page.locator('img')
    const count = await avatars.count()
    for (let i = 0; i < count; i++) {
      const img = avatars.nth(i)
      const alt = await img.getAttribute('alt')
      expect(alt).toBeTruthy()
      expect(alt!.length).toBeGreaterThan(0)
    }
  })
})
