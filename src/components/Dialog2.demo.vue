<demo>
    一键打开 Dialog
    </demo>
<template>
  <div>
    <Button @click="showDialog">打开对话框</Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import { openDialog } from "../lib/openDialog";
export default {
  components: {
    Button,
  },
  setup() {
    const showDialog = () => {
      openDialog({
        title: "标题",
        content: "你好",
        visible: true,
        closeOnClickOverlay: false,
        ok: () => {
          console.log("ok");
          return false;
        },
        cancel: () => {
          console.log("cancel");
        },
      });
    };
    return {
      showDialog,
    };
  },
};
</script>
