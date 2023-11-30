<template>
  <view class="">
    <view class="uni-form-item uni-column">
      <view class="uni-input-wrapper">
        <input
          class="uni-input"
          placeholder="带清除按钮的输入框"
          :value="searchStr"
          @input="clearInput"
        />
        <text class="uni-icon" v-if="showClearIcon" @click="clearIcon">&#xe434;</text>
      </view>
    </view>

    <view class="uni-margin-wrap">
      <swiper
        class="swiper"
        circular
        indicator-dots
        autoplay
        :interval="5000"
        :duration="500"
        indicator-active-color="#FF7465"
      >
        <swiper-item>
          <img src="/static/ad/1.jpg" alt="" />
          <!-- <view class="swiper-item uni-bg-red">A</view> -->
        </swiper-item>
        <swiper-item>
          <img src="/static/ad/2.jpg" alt="" />
          <!-- <view class="swiper-item uni-bg-green">B</view> -->
        </swiper-item>
        <swiper-item>
          <img src="/static/ad/3.jpg" alt="" />
          <!-- <view class="swiper-item uni-bg-blue">C</view> -->
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
const searchStr = ref("");
const showClearIcon = ref(false);

function clearInput(event: Event) {
  searchStr.value = event.detail.value;
  if (event.detail.value.length > 0) {
    showClearIcon.value = true;
  } else {
    showClearIcon.value = true;
  }
}
function clearIcon() {
  searchStr.value = "";
  showClearIcon.value = false;
}
</script>

<style>
.uni-margin-wrap {
  width: 690rpx;
  width: 100%;
}
.swiper {
  height: 300rpx;
}
.swiper-item {
  display: block;
  height: 300rpx;
  line-height: 300rpx;
  text-align: center;
}
.swiper-list {
  margin-top: 40rpx;
  margin-bottom: 0;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
