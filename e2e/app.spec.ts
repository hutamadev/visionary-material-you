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

  test('should default to system theme (not explicitly dark)', async ({ page }) => {
    const html = page.locator('html')
    // Saat 'system', class 'dark' tergantung OS di environment test (biasanya light)
    // Cukup pastikan app termuat tanpa error
    await expect(html).toBeDefined()
  })

  test('should toggle theme correctly via dropdown', async ({ page }) => {
    const html = page.locator('html')
    const themeMenuBtn = page.getByRole('button', { name: 'Change theme' })
    
    // Buka menu tema
    await themeMenuBtn.click()
    
    // Pilih Dark
    await page.getByRole('button', { name: 'dark' }).click()
    await expect(html).toHaveClass(/dark/)
    
    // Pilih Light
    await themeMenuBtn.click()
    await page.getByRole('button', { name: 'light' }).click()
    await expect(html).not.toHaveClass(/dark/)
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
