<template>
  <component
    :is="tag"
    class="g-col"
    :style="{
      '--g-col-xl': xl ?? span,
      '--g-col-lg': lg ?? span,
      '--g-col-md': md ?? span,
      '--g-col-sm': sm ?? span,
      '--g-col-xs': xs ?? span,
    }"
  >
    <slot></slot>
  </component>
</template>
<script lang="ts" setup>
defineOptions({
  name: "GCol",
});

defineProps({
  tag: {
    type: String,
    default: "div",
  },
  xl: {
    type: [Number, String],
    default: null,
  },
  lg: {
    type: [Number, String],
    default: null,
  },
  md: {
    type: [Number, String],
    default: null,
  },
  sm: {
    type: [Number, String],
    default: null,
  },
  xs: {
    type: [Number, String],
    default: null,
  },
  span: {
    type: Number,
    default: 12,
  },
});
</script>
