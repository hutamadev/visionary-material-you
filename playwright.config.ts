import { defineConfig, devices } from '@playwright/test'
import fs from 'node:fs'

const heliumWindows = 'C:\\Program Files\\imput\\Helium\\Application\\chrome.exe'
const defaultChrome = fs.existsSync(heliumWindows) ? heliumWindows : undefined

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:5173',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        launchOptions: {
          executablePath: process.env.PLAYWRIGHT_CHROME_PATH || defaultChrome,
          args: [
            '--use-gl=angle',
            '--use-angle=swiftshader',
            '--enable-webgl',
            '--no-sandbox',
          ],
        },
      },
    },
  ],
  webServer: process.env.PLAYWRIGHT_SKIP_WEBSERVER
    ? undefined
    : {
        command: 'bun run dev --port 5173',
        url: 'http://localhost:5173',
        reuseExistingServer: true,
      },
})
