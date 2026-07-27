<template>
  <section id="hero" class="reveal py-16 border-b border-gray-100 dark:border-gray-800">
    <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
      <div class="flex items-start gap-5">
        <img
          src="/images/avatar.png"
          alt="陳威良 William 大頭照"
          class="w-24 h-24 rounded-full object-cover object-top border-2 border-gray-200 dark:border-gray-700 shrink-0 shadow-sm"
        />
        <div>
          <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100">
            {{ $t('profile.name') }}
          </h1>
          <p class="mt-2 text-xl font-medium text-blue-600 dark:text-blue-400 flex items-center gap-2">
            <FaIcon :icon="['fas', 'laptop-code']" class="text-lg" />
            {{ $t('profile.title') }}
          </p>
          <p class="mt-2 text-sm text-gray-400 dark:text-gray-500 flex items-center gap-1.5">
            <FaIcon :icon="['fas', 'location-dot']" />
            {{ $t('profile.location') }}
          </p>
          <p class="mt-4 text-gray-600 dark:text-gray-300 max-w-full leading-relaxed">
            {{ $t('profile.summary') }}
          </p>
        </div>
      </div>
    </div>
    <div class="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-600 dark:text-gray-400">
      <a href="mailto:snowman12320@gmail.com" class="inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
        <FaIcon :icon="['fas', 'envelope']" class="w-4 text-center" />
        snowman12320@gmail.com
      </a>
      <a href="tel:+886976103738" class="inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
        <FaIcon :icon="['fas', 'phone']" class="w-4 text-center" />
        0976103738
      </a>
      <a href="https://www.linkedin.com/in/william-chendev/" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
        <FaIcon :icon="['fab', 'linkedin']" class="w-4 text-center" />
        linkedin.com/in/william-chendev
      </a>
      <a href="https://github.com/snowman12320" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
        <FaIcon :icon="['fab', 'github']" class="w-4 text-center" />
        github.com/snowman12320
      </a>
    </div>
  </section>
</template>
