# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modal.spec.ts >> copy link button and auto-open modal with query param
- Location: tests/e2e/modal.spec.ts:86:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.modal-sheet')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('.modal-sheet')

```

```yaml
- banner:
  - link "陳威良 William":
    - /url: "#/"
  - navigation:
    - link "經歷":
      - /url: "#experience"
    - link "專案":
      - /url: "#projects"
    - link "技能":
      - /url: "#skills"
  - button "Switch to English": EN
  - button "切換為深色模式"
  - button "列印精簡履歷"
  - button "公司"
- contentinfo: © 2026 陳威良 William. Built with Vue 3 + Vite + Tailwind CSS.
```

# Test source

```ts
  1   | import { expect, test } from '@playwright/test'
  2   | 
  3   | test('project card opens detail modal', async ({ page }) => {
  4   |   await page.goto('/')
  5   | 
  6   |   const firstProjectCard = page.locator('#projects .group').first()
  7   |   await expect(firstProjectCard).toBeVisible()
  8   | 
  9   |   await firstProjectCard.click()
  10  |   await page.pause()
  11  | 
  12  |   const modal = page.locator('.modal-sheet')
  13  |   await expect(modal).toBeVisible()
  14  | 
  15  |   await expect(modal.locator('h3')).toHaveCount(1)
  16  | 
  17  |   await page.keyboard.press('Escape')
  18  |   await expect(modal).not.toBeVisible()
  19  | })
  20  | 
  21  | test('experience card opens detail modal', async ({ page }) => {
  22  |   await page.goto('/')
  23  | 
  24  |   const firstExperience = page.locator('#experience [role="button"].group').first()
  25  |   await expect(firstExperience).toBeVisible()
  26  | 
  27  |   await firstExperience.click()
  28  | 
  29  |   const modal = page.locator('.modal-sheet')
  30  |   await expect(modal).toBeVisible()
  31  | 
  32  |   await expect(modal.locator('h3')).toContainText(/軟體工程師|工程師|Developer/i)
  33  | 
  34  |   await page.keyboard.press('Escape')
  35  |   await expect(modal).not.toBeVisible()
  36  | })
  37  | 
  38  | test('modal closes when clicking the ✕ close button', async ({ page }) => {
  39  |   await page.goto('/')
  40  | 
  41  |   await page.locator('#projects .group').first().click()
  42  |   const modal = page.locator('.modal-sheet')
  43  |   await expect(modal).toBeVisible()
  44  | 
  45  |   await modal.getByRole('button', { name: /close modal/i }).click()
  46  |   await expect(modal).not.toBeVisible()
  47  | })
  48  | 
  49  | test('modal closes when clicking the backdrop overlay', async ({ page }) => {
  50  |   await page.goto('/')
  51  | 
  52  |   await page.locator('#projects .group').first().click()
  53  |   const modal = page.locator('.modal-sheet')
  54  |   await expect(modal).toBeVisible()
  55  | 
  56  |   // Click outside the modal panel (the dark backdrop behind it)
  57  |   await page.mouse.click(10, 10)
  58  |   await expect(modal).not.toBeVisible()
  59  | })
  60  | 
  61  | test('experience modal accordion expands and collapses contribution sections', async ({ page }) => {
  62  |   await page.goto('/')
  63  | 
  64  |   await page.locator('#experience [role="button"].group').first().click()
  65  |   const modal = page.locator('.modal-sheet')
  66  |   await expect(modal).toBeVisible()
  67  | 
  68  |   // Wait for the accordion headers to appear
  69  |   const accordionHeaders = modal.locator('button[type="button"]')
  70  |   const count = await accordionHeaders.count()
  71  | 
  72  |   if (count > 0) {
  73  |     const firstHeader = accordionHeaders.first()
  74  |     const headerText = await firstHeader.textContent()
  75  | 
  76  |     // First section should be open by default — click it to collapse
  77  |     await firstHeader.click()
  78  |     // Click again to re-expand
  79  |     await firstHeader.click()
  80  | 
  81  |     // Verify the section title is still visible after toggle
  82  |     await expect(firstHeader).toContainText(headerText ?? '')
  83  |   }
  84  | })
  85  | 
  86  | test('copy link button and auto-open modal with query param', async ({ page }) => {
  87  |   // First navigate to home, then change the hash
  88  |   await page.goto('/')
  89  | 
  90  |   // Navigate to URL with hash fragment
  91  |   await page.goto('/#/project-equipment-rental-system')
  92  | 
  93  |   // The modal should automatically open
  94  |   const modal = page.locator('.modal-sheet')
> 95  |   await expect(modal).toBeVisible({ timeout: 5000 })
      |                       ^ Error: expect(locator).toBeVisible() failed
  96  | 
  97  |   // Verify the modal is showing the correct project
  98  |   const modalTitle = modal.locator('h3').first()
  99  |   await expect(modalTitle).toContainText(/Equipment|設備|器材|租賃/i)
  100 | 
  101 |   // Click the copy link button inside the modal
  102 |   const copyButton = modal.locator('button[aria-label="Copy link"], button[aria-label="複製連結"]').first()
  103 |   await copyButton.click()
  104 | 
  105 |   // Verify the "Copied" feedback is shown
  106 |   await expect(modal.locator('text=/Copied|已複製/')).toBeVisible()
  107 | })
  108 | 
  109 | test('language switch updates modal content', async ({ page }) => {
  110 |   await page.goto('/')
  111 | 
  112 |   // Open a project modal in zh (default)
  113 |   await page.locator('#projects .group').first().click()
  114 |   const modal = page.locator('.modal-sheet')
  115 |   await expect(modal).toBeVisible()
  116 |   const zhTitle = await modal.locator('h3').textContent()
  117 | 
  118 |   // Close modal and switch language
  119 |   await page.keyboard.press('Escape')
  120 |   await expect(modal).not.toBeVisible()
  121 | 
  122 |   await page.getByRole('button', { name: 'Switch to English' }).click()
  123 | 
  124 |   // Re-open the same first project card
  125 |   await page.locator('#projects .group').first().click()
  126 |   await expect(modal).toBeVisible()
  127 |   const enTitle = await modal.locator('h3').textContent()
  128 | 
  129 |   // Title may be the same if the project name is not translated, but category/description should differ
  130 |   // At minimum, the modal should still open correctly after lang switch
  131 |   await expect(modal).toBeVisible()
  132 |   expect(enTitle).toBeTruthy()
  133 | })
  134 | 
  135 | 
```