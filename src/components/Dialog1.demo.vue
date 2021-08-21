<demo>
    常规使用
    </demo>
<template>
  <div>
    <Button theme="primary" size="small" contextmenu="" @click="toggle"
      >打开对话框</Button
    >
    <Dialog
      v-model:visible="visible"
      :closeOnClickOverlay="false"
      :ok="f1"
      :cancel="f2"
    >
      <template v-slot:content>
        <strong>hi</strong>
        <div>hi2</div>
      </template>
      <template v-slot:title>
        <strong>加粗的标题</strong>
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { ref } from "vue";
import { openDialog } from "../lib/openDialog";
export default {
  components: {
    Dialog,
    Button,
  },
  setup() {
    const visible = ref(false);
    const toggle = () => {
      visible.value = !visible.value;
    };
    const f1 = () => {
      return false;
    };
    const f2 = () => {};
    const showDialog = () => {
      openDialog({
        title: "标题",
        content: "这里是内容",
        visible: true,
        closeOnClickOverlay: false,
        ok: () => {
          console.log("确认");
          return false;
        },
        cancel: () => {
          console.log("取消");
        },
      });
    };
    return {
      visible,
      toggle,
      f1,
      f2,
      showDialog,
    };
  },
};
</script>
