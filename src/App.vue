<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
const globalData = { primaryColor: "#FF7465" };
onLaunch(() => {
  console.log("App Launch");
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>

<style>
page {
  padding: 20px;
}
</style>
