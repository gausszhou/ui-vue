<template>
  <div class="example example-basic">
    <g-row :gap="10">
      <g-col v-for="(item, index) in items" :key="index" :span="item">
        <div class="g-box">
          {{ item }}
        </div>
      </g-col>
    </g-row>
  </div>
</template>

<script lang="ts" setup>
const items = [12, 6, 6, 4, 4, 4, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2];
</script>

<style lang="scss">
.example-basic {
  .g-box {
    padding: 12px;
    border: 1px solid #cccccc;
    border-radius: 4px;
  }
}
</style>
