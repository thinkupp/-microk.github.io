<template>
  <div class="custom-code app-code">
    <slot></slot>
    <v-btn
      class="copy-target"
      text
      color="primary"
      @click="handleClick"
      :data-clipboard-text="content"
    >复制</v-btn>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ClipboardJS from "clipboard";

@Component
export default class VuetifyMessage extends Vue {
  private content = "";

  mounted() {
    const c = new ClipboardJS('.copy-target');
  }

  private handleClick() {
    let content = "";

    for (let i = 0; i < (this.$slots.default?.length || 0); i++) {
      const item = this.$slots.default?.[i];
      if (item) {
        let str = "";
        if (item.tag === 'br') {
          str = '\n';
        } else if (item.text) {
          str = item.text.trim();
        }
        if (str) {
          content += str;
        }
      }
    }

    this.content = content;
  }
}
</script>

<style lang="less">
.custom-code {
  font-size: 15px;
  background: #fafafa;
  border: thin solid rgba(0, 0, 0, 0.12);
  color: #333;
  padding: 6px 10px 6px 16px;
  margin: 16px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: pre-line;
}
</style>
