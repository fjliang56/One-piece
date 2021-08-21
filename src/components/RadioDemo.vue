<template>
  <doc-title>Radio 单选框示例</doc-title>
  <Demo :component="Radio1Demo" />
  <Demo :component="Radio2Demo" />
  <Attr :columns="columns" :data="data"></Attr>
</template>

<script lang="ts">
import Radio1Demo from "./Radio1.demo.vue";
import Radio2Demo from "./Radio2.demo.vue";
import Demo from "./Demo.vue";
import Markdown from "./Markdown.vue";
import Attr from "./Attr.vue";
import { ref } from "vue";
import { columns } from "../lib/data";
import DocTitle from "./DocTitle.vue";
export default {
  name: "RadioDoc",
  components: { DocTitle, Attr, Markdown, Demo },
  setup() {
    const data = ref([
      {
        params: "label",
        desc: "相当于原生radio标签的value",
        type: "string / number / boolean",
        select: "自定义",
        default: "自定义",
      },
      {
        params: "v-model:value",
        desc: "双向绑定",
        type: "随着label属性类型改变",
        select: "自定义",
        default: "label属性中的任意一个值",
      },
    ]);
    return { Radio1Demo, Radio2Demo, data, columns };
  },
};
</script>

<style lang="scss" scoped></style>
