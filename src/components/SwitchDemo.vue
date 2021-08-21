<template>
  <div>
    <doc-title>Switch 组件展示</doc-title>
    <Demo :component="Switch1Demo" />
    <Demo :component="Switch2Demo" />
    <Attr :columns="columns" :data="data"></Attr>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import Switch1Demo from "./Switch1.demo.vue";
import Switch2Demo from "./Switch2.demo.vue";
import Demo from "./Demo.vue";
import { columns } from "../lib/data";
import DocTitle from "./DocTitle.vue";
import Markdown from "./Markdown.vue";
import Attr from "./Attr.vue";

export default {
  components: { Demo, DocTitle, Markdown, Attr },
  setup() {
    const data = ref([
      {
        params: "value",
        desc: "是否选中",
        type: "boolean",
        select: "false / true",
        default: "false",
      },
      {
        params: "disabled",
        desc: "禁止选中",
        type: "boolean",
        select: "null",
        default: "false",
      },
    ]);
    return { Switch1Demo, Switch2Demo, data, columns };
  },
};
</script>

<style lang="scss">
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
    }
  }
}
</style>
