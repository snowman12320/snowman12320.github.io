import { nextTick, onBeforeUnmount, onMounted, onUpdated } from 'vue'

export function useReveal() {
  let observer: IntersectionObserver | null = null
  const observed = new WeakSet<Element>()

  const bindRevealElements = () => {
    if (!observer) return
    const activeObserver = observer
    document.querySelectorAll('.reveal').forEach((el) => {
      if (el.classList.contains('visible')) return
      if (observed.has(el)) return
      activeObserver.observe(el)
      observed.add(el)
    })
  }

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer?.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.1 },
    )

    bindRevealElements()
  })

  onUpdated(async () => {
    await nextTick()
    bindRevealElements()
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
  })
}
