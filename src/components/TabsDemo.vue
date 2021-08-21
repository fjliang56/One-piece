<template>
  <h1>Tabs 示例</h1>
  <Demo :component="Tabs1Demo" />
  <Attr :columns="columns" :data="data" />
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Tabs1Demo from "./Tabs1.demo.vue";
import Attr from "./Attr.vue";
import { columns } from "../lib/data";
import DocTitle from "./DocTitle.vue";
import { ref } from "vue";

export default {
  components: {
    Demo,
    Attr,
    DocTitle,
    Tabs1Demo,
  },
  setup() {
    const data = ref([
      {
        params: "tab-item",
        desc: "tab页签",
        type: "component",
        select: "tab-item",
        default: "--",
      },
    ]);
    const title = ref("学习");
    return {
      Tabs1Demo,
      data,
      columns,
      title,
    };
  },
};
</script>
