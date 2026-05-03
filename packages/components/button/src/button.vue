<template>
  <button
    class="g-button"
    :class="classList"
    :disabled="disabled || loading"
    @click="handlerClick"
  >
    <i v-if="props.loading" class="g-icon-loading"></i>
    <i
      v-if="props.icon && !props.loading"
      class="g-icon"
      :class="props.icon"
    ></i>
    <span v-if="$slots.default">
      <slot />
    </span>
  </button>
</template>

<script lang="ts" setup>
import { computed } from "vue";

defineOptions({
  name: "GButton",
});

const props = defineProps({
  type: {
    default: "",
  },
  size: {
    default: "",
  },
  icon: {
    default: "",
  },
  round: Boolean,
  plain: Boolean,
  circle: Boolean,
  disabled: Boolean,
  loading: Boolean,
});
const emits = defineEmits(["click"]);
const classList = computed(() => {
  const { type, size, round, plain, circle, disabled, loading } = props;
  return [
    {
      [`g-button--${type}`]: type,
      [`g-button--${size}`]: size,
      ["is-disabled"]: disabled,
      ["is-loading"]: loading,
      ["is-round"]: round,
      ["is-plain"]: plain,
      ["is-circle"]: circle,
    },
  ];
});
function handlerClick(event: MouseEvent): void {
  emits("click", event);
}
</script>
