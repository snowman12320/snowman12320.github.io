import { expect, test } from '@playwright/test'

test('home page renders the resume sections', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle(/陳威良|William/i)
  await expect(page.getByRole('banner')).toBeVisible()
  await expect(page.locator('section#experience')).toBeVisible()
  await expect(page.locator('section#projects')).toBeVisible()
  await expect(page.locator('section#skills')).toBeVisible()

  await expect(page.locator('header a[href="#experience"]')).toContainText(/經歷|Experience/i)
  await expect(page.locator('header a[href="#projects"]')).toContainText(/專案|Projects/i)
  await expect(page.locator('header a[href="#skills"]')).toContainText(/技能|Skills/i)
})
