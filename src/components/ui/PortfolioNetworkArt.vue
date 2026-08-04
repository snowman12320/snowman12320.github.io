<script setup lang="ts">
withDefaults(defineProps<{
  gradientId?: string
  variant?: 'orbit' | 'grid' | 'network' | 'rings' | 'waves'
}>(), {
  gradientId: 'portfolio-network-gradient',
  variant: 'network',
})
</script>

<template>
  <svg class="portfolio-network-art pointer-events-none absolute -right-24 top-1/2 -z-10 hidden h-[32rem] w-[48rem] -translate-y-1/2 text-blue-500/[0.28] transition duration-700 ease-out group-hover/section:rotate-3 group-hover/section:scale-110 group-hover/section:text-blue-500/[0.38] lg:block dark:text-blue-300/[0.3] dark:group-hover/section:text-blue-300/[0.42]" viewBox="0 0 672 448" fill="none" aria-hidden="true">
    <defs>
      <linearGradient :id="gradientId" x1="0" y1="0" x2="672" y2="448" gradientUnits="userSpaceOnUse">
        <stop stop-color="currentColor" stop-opacity="0" />
        <stop offset="0.5" stop-color="currentColor" />
        <stop offset="1" stop-color="currentColor" stop-opacity="0" />
      </linearGradient>
    </defs>
    <g v-if="variant === 'orbit'">
      <ellipse cx="336" cy="224" rx="250" ry="112" :stroke="`url(#${gradientId})`" stroke-width="2" />
      <ellipse cx="336" cy="224" rx="170" ry="250" transform="rotate(58 336 224)" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 10" />
      <ellipse cx="336" cy="224" rx="105" ry="250" transform="rotate(-58 336 224)" stroke="currentColor" stroke-width="1.5" />
      <ellipse cx="336" cy="224" rx="292" ry="64" transform="rotate(-22 336 224)" stroke="currentColor" stroke-width="1.5" />
      <ellipse cx="336" cy="224" rx="64" ry="292" transform="rotate(22 336 224)" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 12" />
      <circle cx="336" cy="224" r="42" stroke="currentColor" stroke-width="2" />
      <circle cx="336" cy="224" r="12" fill="currentColor" />
      <circle cx="118" cy="178" r="8" fill="currentColor" />
      <circle cx="520" cy="112" r="8" fill="currentColor" />
      <circle cx="548" cy="332" r="8" fill="currentColor" />
      <circle cx="206" cy="74" r="5" fill="currentColor" />
      <circle cx="438" cy="378" r="5" fill="currentColor" />
      <circle cx="612" cy="224" r="5" fill="currentColor" />
    </g>
    <g v-else-if="variant === 'grid'">
      <path d="M108 92H564V356H108V92Z" :stroke="`url(#${gradientId})`" stroke-width="2" />
      <path d="M108 180H564M108 268H564M260 92V356M412 92V356" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 8" />
      <path d="M108 356L260 268L412 356L564 180M108 180L260 92L412 180L564 92" stroke="currentColor" stroke-width="2" />
      <rect x="244" y="252" width="32" height="32" rx="6" fill="currentColor" />
      <rect x="396" y="164" width="32" height="32" rx="6" fill="currentColor" />
      <circle cx="108" cy="180" r="7" fill="currentColor" />
      <circle cx="564" cy="180" r="7" fill="currentColor" />
    </g>
    <g v-else-if="variant === 'rings'">
      <circle cx="336" cy="224" r="180" :stroke="`url(#${gradientId})`" stroke-width="2" />
      <circle cx="336" cy="224" r="126" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 9" />
      <circle cx="336" cy="224" r="72" stroke="currentColor" stroke-width="1.5" />
      <path d="M336 44V404M156 224H516M209 97L463 351M209 351L463 97" stroke="currentColor" stroke-width="1.5" />
      <circle cx="336" cy="44" r="8" fill="currentColor" />
      <circle cx="516" cy="224" r="8" fill="currentColor" />
      <circle cx="336" cy="404" r="8" fill="currentColor" />
      <circle cx="156" cy="224" r="8" fill="currentColor" />
      <circle cx="336" cy="224" r="14" fill="currentColor" />
    </g>
    <g v-else-if="variant === 'waves'">
      <path d="M24 224C104 64 184 64 264 224C344 384 424 384 504 224C560 112 612 112 660 180" :stroke="`url(#${gradientId})`" stroke-width="3" />
      <path d="M24 304C104 144 184 144 264 304C344 464 424 464 504 304C560 192 612 192 660 260" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 10" />
      <path d="M24 144C104 -16 184 -16 264 144C344 304 424 304 504 144C560 32 612 32 660 100" stroke="currentColor" stroke-width="1.5" />
      <circle cx="264" cy="224" r="9" fill="currentColor" />
      <circle cx="504" cy="224" r="9" fill="currentColor" />
      <circle cx="660" cy="180" r="9" fill="currentColor" />
    </g>
    <g v-else>
      <path d="M20 224H178L258 82H414L492 224H652" :stroke="`url(#${gradientId})`" stroke-width="2" />
      <path d="M88 388L178 224L258 366H414L492 224L584 64" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 8" />
      <path d="M178 224L336 224L414 82L492 224L336 366L258 82" stroke="currentColor" stroke-width="1.5" />
      <circle cx="178" cy="224" r="8" fill="currentColor" />
      <circle cx="258" cy="82" r="8" fill="currentColor" />
      <circle cx="414" cy="82" r="8" fill="currentColor" />
      <circle cx="492" cy="224" r="8" fill="currentColor" />
      <circle cx="336" cy="366" r="8" fill="currentColor" />
      <circle cx="336" cy="224" r="4" fill="white" class="dark:fill-gray-950" />
    </g>
  </svg>
</template>
