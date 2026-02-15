import { reactive, ref, watch } from 'vue'
import { useDisplay } from 'vuetify'

/**
 * SSR-safe display: assumes desktop (xs: false) when there is no viewport (SSR/build),
 * and uses real useDisplay().xs on the client so mobile gets correct layout after hydration.
 * Returns a display object with an xs getter so both templates and Options API computed (this.display.xs) see the boolean value.
 */
export function useDisplaySSRSafe () {
  const xsRef = ref(false)

  if (import.meta.client) {
    const vuetifyDisplay = useDisplay()
    watch(
      () => vuetifyDisplay.xs,
      (val) => { xsRef.value = val },
      { immediate: true }
    )
  }

  const display = reactive({
    get xs () { return xsRef.value }
  })
  return { display }
}
