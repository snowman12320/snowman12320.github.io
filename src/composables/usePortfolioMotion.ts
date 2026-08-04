import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onBeforeUnmount, onMounted, type Ref } from 'vue'

gsap.registerPlugin(ScrollTrigger)

export function usePortfolioMotion(root: Ref<HTMLElement | null>) {
  let context: gsap.Context | null = null

  onMounted(() => {
    if (!root.value) return

    context = gsap.context(() => {
      const motion = gsap.matchMedia()
      motion.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.portfolio-hero-copy > *', {
          y: 28,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
        })

        gsap.from('.portfolio-service-card', {
          scrollTrigger: { trigger: '#services', start: 'top 75%' },
          y: 36,
          opacity: 0,
          duration: 0.65,
          stagger: 0.1,
          ease: 'power2.out',
        })

        gsap.from('.portfolio-proof-item', {
          scrollTrigger: { trigger: '#results', start: 'top 75%' },
          x: -24,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
        })

        gsap.from('.portfolio-process-step', {
          scrollTrigger: { trigger: '#process', start: 'top 75%' },
          y: 28,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
        })

        gsap.utils.toArray<SVGElement>('.portfolio-network-art').forEach((art, index) => {
          const section = art.closest('section')
          if (!section) return

          gsap.fromTo(
            art,
            { opacity: 0, scale: 0.72, rotate: index % 2 === 0 ? -8 : 8 },
            {
              opacity: 1,
              scale: 1,
              rotate: 0,
              duration: 1.1,
              ease: 'power3.out',
              scrollTrigger: { trigger: section, start: 'top 78%', once: true },
            },
          )
        })
      })
    }, root.value)
  })

  onBeforeUnmount(() => {
    context?.revert()
    context = null
  })
}
