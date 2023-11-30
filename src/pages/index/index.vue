<template>
  <view class="">
    <view class="uni-form-item uni-column">
      <view class="uni-input-wrapper">
        <uni-icons type="search" size="22" color="#AAAAAA"></uni-icons>
        <input
          class="uni-input"
          placeholder="Find your product"
          :value="searchStr"
          @input="clearInput"
        />
        <uni-icons
          v-if="showClearIcon"
          type="clear"
          size="22"
          color="#AAAAAA"
          @click="clearIcon"
        ></uni-icons>
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
          <view class="swiper-item">
            <img class="img" src="/static/ad/1.png" alt="" />
          </view>
        </swiper-item>
        <swiper-item>
          <view class="swiper-item">
            <img class="img" src="/static/ad/2.png" alt="" />
          </view>
        </swiper-item>
        <swiper-item>
          <view class="swiper-item">
            <img class="img" src="/static/ad/3.png" alt="" />
          </view>
        </swiper-item>
      </swiper>
    </view>

    <view class="tag-wrap">
      <view
        v-for="tag in tagList"
        :key="tag"
        :class="['tag-item', { 'tag-item--active': tag === curTag }]"
        @click="searchByTag(tag)"
      >
        {{ tag }}
      </view>
    </view>

    <view class="good-wrap">
      <good-item v-for="good in curList" :key="good.id" :good="good" />
    </view>
  </view>
</template>

<script setup lang="ts">
import { getGood } from "@/pages/api/index";
import type { Good } from "@/types/index";
import goodItem from "@/pages/index/good-item.vue";

const tagList = ["All", "Top", "Lastest"];

const searchStr = ref("");
const showClearIcon = ref(false);
const curTag = ref(tagList[0]);

const list = ref<Good[]>([]);
const curList = ref(list.value);

onMounted(init);

function init() {
  list.value = getGood();
  curList.value = [...list.value];
}
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
function searchByTag(tag: string) {
  curTag.value = tag;
  const tagId = tag.toLowerCase();
  if (tagId === "all") {
    curList.value = [...list.value];
    return;
  }
  curList.value = list.value.filter((item) => item.tag === tagId);
}
</script>

<style lang="scss" scoped>
.uni-margin-wrap {
  width: 100%;
  margin-top: 20px;
}
.swiper {
  height: 300rpx;
}
.swiper-item {
  // display: block;
  height: 300rpx;
  // line-height: 300rpx;
  text-align: center;
  border-radius: 30px;
  overflow: hidden;
  .img {
    width: 100%;
    height: 300rpx;
    object-fit: cover;
  }
}
.swiper-list {
  margin-top: 20px;
  margin-bottom: 0;
}
.uni-input-wrapper {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  padding: 8px 13px;
  flex-direction: row;
  flex-wrap: nowrap;
  background-color: #f7f8fb;
  border-radius: 30px;
  overflow: hidden;
}
.uni-input {
  height: 28px;
  line-height: 28px;
  font-size: 14px;
  padding: 0px 10px;
  flex: 1;
  background-color: #f7f8fb;
}
.tag-wrap {
  margin: 20px 0;
}
.tag-item {
  padding: 4px 10px;
  display: inline-block;
  font-size: 16px;
  line-height: 24px;
  border-radius: 16px;
  margin-right: 8px;
  background-color: #f7f8fb;
  color: #aaaaaa;
}
.tag-item--active {
  background-color: #ff7465;
  color: white;
}
</style>
