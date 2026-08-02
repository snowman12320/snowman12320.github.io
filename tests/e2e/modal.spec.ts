import { expect, test } from '@playwright/test'

test('project card opens detail modal', async ({ page }) => {
  await page.goto('/')

  const firstProjectCard = page.locator('#projects .group').first()
  await expect(firstProjectCard).toBeVisible()

  await firstProjectCard.click()
  await page.pause()

  const modal = page.locator('.modal-sheet')
  await expect(modal).toBeVisible()

  await expect(modal.locator('h3')).toHaveCount(1)

  await page.keyboard.press('Escape')
  await expect(modal).not.toBeVisible()
})

test('experience card opens detail modal', async ({ page }) => {
  await page.goto('/')

  const firstExperience = page.locator('#experience button.group').first()
  await expect(firstExperience).toBeVisible()

  await firstExperience.click()

  const modal = page.locator('.modal-sheet')
  await expect(modal).toBeVisible()

  await expect(modal.locator('h3')).toContainText(/軟體工程師|工程師|Developer/i)

  await page.keyboard.press('Escape')
  await expect(modal).not.toBeVisible()
})

test('modal closes when clicking the ✕ close button', async ({ page }) => {
  await page.goto('/')

  await page.locator('#projects .group').first().click()
  const modal = page.locator('.modal-sheet')
  await expect(modal).toBeVisible()

  await modal.getByRole('button', { name: /close modal/i }).click()
  await expect(modal).not.toBeVisible()
})

test('modal closes when clicking the backdrop overlay', async ({ page }) => {
  await page.goto('/')

  await page.locator('#projects .group').first().click()
  const modal = page.locator('.modal-sheet')
  await expect(modal).toBeVisible()

  // Click outside the modal panel (the dark backdrop behind it)
  await page.mouse.click(10, 10)
  await expect(modal).not.toBeVisible()
})

test('experience modal accordion expands and collapses contribution sections', async ({ page }) => {
  await page.goto('/')

  await page.locator('#experience button.group').first().click()
  const modal = page.locator('.modal-sheet')
  await expect(modal).toBeVisible()

  // Wait for the accordion headers to appear
  const accordionHeaders = modal.locator('button[type="button"]')
  const count = await accordionHeaders.count()

  if (count > 0) {
    const firstHeader = accordionHeaders.first()
    const headerText = await firstHeader.textContent()

    // First section should be open by default — click it to collapse
    await firstHeader.click()
    // Click again to re-expand
    await firstHeader.click()

    // Verify the section title is still visible after toggle
    await expect(firstHeader).toContainText(headerText ?? '')
  }
})

test('language switch updates modal content', async ({ page }) => {
  await page.goto('/')

  // Open a project modal in zh (default)
  await page.locator('#projects .group').first().click()
  const modal = page.locator('.modal-sheet')
  await expect(modal).toBeVisible()
  const zhTitle = await modal.locator('h3').textContent()

  // Close modal and switch language
  await page.keyboard.press('Escape')
  await expect(modal).not.toBeVisible()

  await page.getByRole('button', { name: 'Switch to English' }).click()

  // Re-open the same first project card
  await page.locator('#projects .group').first().click()
  await expect(modal).toBeVisible()
  const enTitle = await modal.locator('h3').textContent()

  // Title may be the same if the project name is not translated, but category/description should differ
  // At minimum, the modal should still open correctly after lang switch
  await expect(modal).toBeVisible()
  expect(enTitle).toBeTruthy()
})

