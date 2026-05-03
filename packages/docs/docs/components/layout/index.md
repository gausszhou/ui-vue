# Layout 布局

<script setup>
import ExampleBasic from './basic.vue';
import ExampleBasicCode from './basic.vue?raw';
import ExampleResponsive from './responsive.vue'
import ExampleResponsiveCode from './responsive.vue?raw'
</script>

栅格布局。

## 基础用法

使用 `Row` 组件来创建行，`Col` 组件来创建列。

<ExampleBasic/>

<details>
<summary>查看代码</summary>
<pre>
  <code>
{{ ExampleBasicCode }}
  </code>
</pre>
</details>

## 响应式

使用 `xl` `lg` `md` `sm` `xs` 等属性来控制 `Col` 在不同页面宽度下占的份数

<ExampleResponsive />

<details>
<summary>查看代码</summary>
<pre>
  <code>
{{ ExampleResponsiveCode }}
  </code>
</pre>
</details>