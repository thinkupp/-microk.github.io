<template>
  <vuetify-layout>
    <v-subheader>基本应用</v-subheader>
    <v-row>
      <v-col cols="12" sm="6" md="4">
        <v-btn color="primary" @click="$message.success('成功提示')">success</v-btn>
        <custom-code>this.$message.success("成功提示")</custom-code>
      </v-col>

      <v-col cols="12" sm="6" md="4">
        <v-btn color="info" @click="$message.info('信息提示')">info</v-btn>
        <custom-code>this.$message.info('信息提示')</custom-code>
      </v-col>

      <v-col cols="12" sm="6" md="4">
        <v-btn color="warning" @click="$message.warning('警告提醒')">warning</v-btn>
        <custom-code>this.$message.warning('警告提示')</custom-code>
      </v-col>

      <v-col cols="12" sm="6" md="6">
        <v-btn color="error" @click="$message.error('错误提醒')">error</v-btn>
        <custom-code>this.$message.error('错误提醒')</custom-code>
      </v-col>

      <v-col cols="12" sm="12" md="6">
        <v-btn @click="$message.show('默认消息条')">show</v-btn>
        <custom-code>this.$message.show('默认消息条')</custom-code>
      </v-col>
    </v-row>

    <v-subheader>-</v-subheader>
    <v-btn @click="useInJs" color="primary">在JS/TS文件中使用</v-btn>
    <custom-code :code="usedInJsCode">
      import { Notify } from "vuetify-message-snackbar";
      <br />Notify.success("成功提示")
    </custom-code>

    <v-subheader>自定义方向</v-subheader>
    <v-row>
      <v-col cols="12" sm="6" lg="4">
        <v-btn @click="$message.topLeft().info('TL')">上左</v-btn>
        <custom-code>this.$message.topLeft().info('TL')</custom-code>
      </v-col>
      <v-col cols="12" sm="6" lg="4">
        <v-btn @click="$message.top().info('Top')">上中</v-btn>
        <custom-code>this.$message.top().info('Top')</custom-code>
      </v-col>
      <v-col cols="12" sm="6" lg="4">
        <v-btn @click="$message.topRight().info('TR')">上右</v-btn>
        <custom-code>this.$message.topRight().info('TR')</custom-code>
      </v-col>
      <v-col cols="12" sm="6" lg="4">
        <v-btn @click="$message.bottomLeft().info('BL')">下左</v-btn>
        <custom-code>this.$message.bottomLeft().info('BL')</custom-code>
      </v-col>
      <v-col cols="12" sm="6" lg="4">
        <v-btn @click="$message.bottom().info('Bottom')">下中</v-btn>
        <custom-code>this.$message.bottom().info('Bottom')</custom-code>
      </v-col>
      <v-col cols="12" sm="6" lg="4">
        <v-btn @click="$message.bottomRight().info('BR')">下右</v-btn>
        <custom-code>this.$message.bottomRight().info('BR')</custom-code>
      </v-col>
    </v-row>

    <v-subheader>消息条ICON</v-subheader>
    <v-btn @click="$message.messageIcon('mdi-domain').success('自定义ICON')">自定义ICON</v-btn>
    <custom-code>this.$message.messageIcon('mdi-domain').success('自定义ICON')</custom-code>

    <v-btn @click="$message.messageIcon().success('隐藏预设的ICON')">隐藏预设的ICON</v-btn>
    <custom-code>this.$message.messageIcon().success('隐藏预设的ICON')</custom-code>

    <v-subheader>过渡效果</v-subheader>
    <v-btn @click="$message.transition().success('随机过渡效果')">随机过渡效果</v-btn>
    <custom-code>this.$message.transition().success('随机过渡效果')</custom-code>

    <v-subheader>函数式配置</v-subheader>
    <v-btn
      @click="
      $message
        .top()
        .color('#12d6cd')
        .show('函数式配置背景色')
      "
    >自定义背景色</v-btn>
    <custom-code>this.$message.top().color('#12d6cd').show('函数式配置背景色')</custom-code>

    <v-btn @click="$message.offsetTop(Math.random() * 200).success('随机间距')">随机间距</v-btn>
    <custom-code>this.$message.offsetTop(Math.random() * 200).success('随机间距')</custom-code>

    <v-subheader>通过传参配置</v-subheader>
    <v-btn @click="$message({ color: '#12d6cd', message: '传参配置背景' })">自定义背景色</v-btn>
    <custom-code>this.$message({ color: '#12d6cd', message: '传参配置背景' })</custom-code>

    <v-btn @click="$message({ offsetTop: Math.random() * 200, message: '随机间距' })">随机间距</v-btn>
    <custom-code>this.$message({ offsetTop: Math.random() * 200, message: '随机间距' })</custom-code>

    <v-subheader>关闭按钮相关</v-subheader>
    <v-btn
      @click="$message.top().closeButtonContent('关闭').timeout(-1).info('设置关闭按钮文案')"
    >设置关闭按钮文本</v-btn>
    <custom-code>this.$message.top().closeButtonContent('关闭').timeout(-1).info('设置关闭按钮文案')</custom-code>

    <v-btn
      @click="$message.top().closeButtonContent('').shaped().info('隐藏关闭按钮')"
    >传空字符串隐藏关闭按钮</v-btn>
    <custom-code>this.$message.top().closeButtonContent('').shaped().info('隐藏关闭按钮')</custom-code>

    <v-subheader>VNode</v-subheader>
    <v-btn @click="handleVNodeMessage">Message使用VNode</v-btn>
    <custom-code>this.$message.success(this.$createElement("div", "Message使用VNode"))</custom-code>

    <v-btn @click="handleVNodeCloaseButton">关闭按钮使用VNode</v-btn>
    <custom-code>this.$message.closeButtonContent(this.$createElement("div", "VNode Close")).success("关闭按钮使用VNode")</custom-code>

    <v-subheader>参数缓存</v-subheader>
    <v-btn @click="handleCustom">参数缓存</v-btn>
    <custom-code code="cacheParamsCode">
      this.$message.topRight().centered().save("custom_bar");
      <br />
      this.$message.read("custom_bar").success("参数已缓存");
      <br />
      this.$nextTick(() => {
      <br />
      this.$message.read("custom_bar").info("无需再次设置");
      <br />
      });
    </custom-code>

    <v-subheader>控制</v-subheader>
    <v-btn @click="handleClose">关闭创建的消息条</v-btn>
    <custom-code>
      const bar = this.$message.top().success("这个消息条将在1秒钟后通过close方法关闭");
      <br />
      setTimeout(() => {
      <br />
        bar.close();
      <br />
      }, 1000);
    </custom-code>

    <v-btn @click="handleAgain">创建一个相同的消息条</v-btn>
    <custom-code>
      const bar = this.$message
      <br />
        .top()
      <br />
        .timeout(-1)
      <br />
        .closeButtonContent("^-^")
      <br />
        .info("消息条关闭1秒后将会通过again方法创建一个相同的消息条");
      <br />

      setTimeout(() => {
      <br />
        bar.close();
      <br />
        setTimeout(() => {
      <br />
          bar.again();
      <br />
        }, 1000);
      <br />
      }, 2000);
    </custom-code>

    <v-btn @click="$message.closeAll()">关闭全部</v-btn>
    <custom-code>this.$message.closeAll()</custom-code>
  </vuetify-layout>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import VuetifyLayout from "./components/VuetifyLayout.vue";
import CustomCode from "./components/CustomCode.vue";
import { useInJs } from "./util";

@Component({
  components: {
    VuetifyLayout,
    CustomCode,
  }
})
export default class VuetifyMessage extends Vue {
  private usedInJsCode = `import { Notify } from "vuetify-message-snackbar";\nNotify.success("成功提示")`
  private cacheParamsCode = `this.$message.topRight().centered().save("custom_bar");
this.$message.read("custom_bar").success("参数已缓存");
this.$nextTick(() => {
      this.$message.read("custom_bar").info("无需再次设置");
});
  `

  private handleVNodeMessage() {
    this.$message.success(this.$createElement("div", "Message使用VNode"));
  }

  private handleVNodeCloaseButton() {
    this.$message.closeButtonContent(this.$createElement("div", "VNode Close")).success("关闭按钮使用VNode");
  }

  private handleCustom() {
    this.$message
      .topRight()
      .centered()
      .save("custom_bar");
    this.$message.read("custom_bar").success("参数已缓存");
    this.$nextTick(() => {
      this.$message.read("custom_bar").info("无需再次设置");
    });
  }

  private handleClose() {
    const bar = this.$message.top().success("这个消息条将在1秒钟后通过close方法关闭");

    setTimeout(() => {
      bar.close();
    }, 1000);
  }

  private handleAgain() {
    const bar = this.$message
      .top()
      .timeout(-1)
      .closeButtonContent("^-^")
      .info("消息条关闭1秒后将会通过again方法创建一个相同的消息条");

    setTimeout(() => {
      bar.close();

      setTimeout(() => {
        bar.again();
      }, 1000);
    }, 2000);
  }

  private useInJs() {
    useInJs();
  }
}
</script>
