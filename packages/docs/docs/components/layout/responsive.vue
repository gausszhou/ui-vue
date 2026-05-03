<template>
  <div class="example example-responsive">
    <g-row :gap="10">
      <g-col :xl="3" :lg="4" :md="6"  :sm="6" :xs="12" v-for="(_, index) in 12" :key="index">
        <div class="g-box">
          {{ index }}
        </div>
      </g-col>
    </g-row>
  </div>
</template>

<style lang="scss">
.example-responsive {
  .g-box {
    padding: 12px;
    border: 1px solid #cccccc;
    border-radius: 4px;
  }
}
</style>
