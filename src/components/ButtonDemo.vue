<template>
  <div>
    <h1>Button 示例</h1>
    <Demo :component="Button1Demo" />
    <Demo :component="Button2Demo" />
    <Demo :component="Button3Demo" />
    <Demo :component="Button4Demo" />
    <Demo :component="Button5Demo" />
    <Attr :columns="columns" :data="data" />
  </div>
</template>
<script lang="ts">
import Demo from "./Demo.vue";
import Button1Demo from "./Button1.demo.vue";
import Button2Demo from "./Button2.demo.vue";
import Button3Demo from "./Button3.demo.vue";
import Button4Demo from "./Button4.demo.vue";
import Button5Demo from "./Button5.demo.vue";
import { ref } from "vue";
import Attr from "./Attr.vue";
import { columns } from "../lib/data";
import DocTitle from "./DocTitle.vue";

export default {
  components: { Demo, Attr, DocTitle },
  setup() {
    const data = ref([
      {
        params: "normal",
        desc: "常规使用",
        type: "string",
        select: "normal / FontColor / Shadow",
        default: "default",
      },
      {
        params: "size",
        desc: "尺寸大小",
        type: "string",
        select: "small / normal / large",
        default: "normal",
      },
      {
        params: "level",
        desc: "不同形式",
        type: "string",
        select: "normal / link / text",
        default: "normal",
      },
      {
        params: "disabled",
        desc: "禁止",
        type: "string",
        select: "border / FontColor / Shadow",
        default: "normal",
      },
      {
        params: "loading",
        desc: "是否加载",
        type: "boolean",
        select: "false / true",
        default: "false",
      },
    ]);
    return {
      data,
      columns,
      Button1Demo,
      Button2Demo,
      Button3Demo,
      Button4Demo,
      Button5Demo,
    };
  },
};
</script>
