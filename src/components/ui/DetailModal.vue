<script setup lang="ts">
import { onBeforeUnmount, watch } from 'vue'

const { open, size = 'lg' } = defineProps<{
  open: boolean
  size?: 'lg' | 'xl'
}>()

const emit = defineEmits<{ close: [] }>()

const handleEsc = (event: KeyboardEvent) => {
  if (event.key === 'Escape') emit('close')
}

watch(
  () => open,
  (isOpen) => {
    document.body.classList.toggle('overflow-hidden', isOpen)
    if (isOpen) document.addEventListener('keydown', handleEsc)
    else document.removeEventListener('keydown', handleEsc)
  },
)

onBeforeUnmount(() => {
  document.body.classList.remove('overflow-hidden')
  document.removeEventListener('keydown', handleEsc)
})
</script>

<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div v-if="open" class="fixed inset-0 z-[100] flex items-end sm:items-center justify-center">
        <button class="absolute inset-0 bg-black/60 backdrop-blur-[1px]" aria-label="Close modal" @click="emit('close')" />
        <section
          class="modal-sheet relative w-full rounded-t-3xl sm:rounded-2xl border border-gray-200 bg-white/95 shadow-lg dark:border-gray-700 dark:bg-gray-900 max-h-[88vh] sm:max-h-[82vh] overflow-y-auto p-6 sm:p-10"
          :class="size === 'xl' ? 'sm:max-w-5xl' : 'sm:max-w-2xl'"
        >
          <div class="mx-auto mb-4 h-1.5 w-10 rounded-full bg-gray-300 dark:bg-gray-700 sm:hidden" />
          <button
            class="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-lg text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Close modal"
            @click="emit('close')"
          >
            <FaIcon :icon="['fas', 'xmark']" />
          </button>
          <slot />
        </section>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.25s ease;
}
.modal-fade-enter-active .modal-sheet,
.modal-fade-leave-active .modal-sheet {
  transition: transform 0.25s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
.modal-fade-enter-from .modal-sheet,
.modal-fade-leave-to .modal-sheet {
  transform: translateY(100%);
}
@media (min-width: 640px) {
  .modal-fade-enter-from .modal-sheet,
  .modal-fade-leave-to .modal-sheet {
    transform: translateY(0.75rem) scale(0.97);
  }
}
</style>
