export const vFocus = {
  mounted(el, binding) {
    if (binding.value) {
      el.focus();
    }
  }
}
