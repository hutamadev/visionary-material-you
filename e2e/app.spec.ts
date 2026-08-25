import { test, expect } from '@playwright/test'

test.describe('Vibecoding Material You 3 Web App', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should load page with correct title and branding', async ({ page }) => {
    await expect(page).toHaveTitle(/Visionary · Material You 3 Digital Engineering/)
    const brand = page.getByText('Vibecoding', { exact: false }).first()
    await expect(brand).toBeVisible()
  })

  test('should default to Dark Mode', async ({ page }) => {
    const html = page.locator('html')
    await expect(html).toHaveClass(/dark/)
  })

  test('should toggle theme from Dark Mode to Light Mode and back', async ({ page }) => {
    const html = page.locator('html')
    await expect(html).toHaveClass(/dark/)

    // Find the theme toggle button in the navbar
    const themeBtn = page.getByRole('button', { name: /Switch to (light|dark) mode/i })
    await expect(themeBtn).toBeVisible()

    // Switch to Light Mode
    await themeBtn.click()
    await expect(html).not.toHaveClass(/dark/)

    // Switch back to Dark Mode
    await themeBtn.click()
    await expect(html).toHaveClass(/dark/)
  })

  test('should render all core sections', async ({ page }) => {
    // 1. Hero Section
    await expect(page.locator('#home')).toBeVisible()
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/Sculpting/i)

    // 2. About Section
    await expect(page.locator('#about')).toBeVisible()
    await expect(page.getByText('Human-Centric Material Design')).toBeVisible()

    // 3. Services Section
    await expect(page.locator('#services')).toBeVisible()
    await expect(page.getByText('Full-Stack Web Engineering')).toBeVisible()

    // 4. Workflow Section
    await expect(page.locator('#workflow')).toBeVisible()
    await expect(page.getByText('Discovery & System Blueprint')).toBeVisible()

    // 5. Portfolio Section
    await expect(page.locator('#portfolio')).toBeVisible()
    await expect(page.getByText('Nexus Enterprise Banking Core')).toBeVisible()

    // 6. Testimonials Section
    await expect(page.locator('#testimonials')).toBeVisible()
    await expect(page.getByText('Trusted by Innovative Leaders')).toBeVisible()

    // 7. Team Section
    await expect(page.locator('#team')).toBeVisible()
    await expect(page.getByText('Sarah Johnson')).toBeVisible()

    // 8. Contact & Footer Section
    await expect(page.locator('#contact')).toBeVisible()
    await expect(page.getByText("Let's Start a Conversation")).toBeVisible()
  })

  test('should support quick consultation form submission in CTA', async ({ page }) => {
    const ctaSection = page.locator('#contact-cta')
    await ctaSection.scrollIntoViewIfNeeded()

    const emailInput = ctaSection.locator('#cta-email')
    await expect(emailInput).toBeVisible()
    await emailInput.fill('client@example.com')

    const submitBtn = ctaSection.getByRole('button', { name: /Consult Now/i })
    await submitBtn.click()

    await expect(ctaSection.getByText('Received!')).toBeVisible({ timeout: 5000 })
  })
})
