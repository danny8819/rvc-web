<template>
  <div class="model-tabs-wrap">
    <div class="model-tabs-content">
      <div
        class="model-tabs-item"
        :class="activeIdx == index ? 'active' : ''"
        v-for="(item, index) in tabsData"
        :key="index"
        @click.prevent="handleClick(index)"
      >
        <input
          class="model-tabs-item__input"
          type="radio"
          name="model-rde"
          id="model-rde-home"
          value="home"
        />
        <label class="model-tabs-item__label" for="model-rde-home">
          <div class="icon-wrap">
            <div class="icon-wrap__icon">
              <SvgIcon
                :name="item.icon"
                size="24"
                style="color: inherit"
              ></SvgIcon>
            </div>
            <div class="icon-wrap__text">{{ item.label }}</div>
          </div>
        </label>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const activeIdx = ref(1);
const tabsData = ref([
  {
    label: 'Home',
    icon: 'home',
  },
  {
    label: 'Models',
    icon: 'category',
  },
  {
    label: 'Images',
    icon: 'photo',
  },
  {
    icon: 'layout-list',
    label: 'Posts',
  },
  {
    label: 'Articles',
    icon: 'file-text',
  },
]);
const handleClick = index => {
  activeIdx.value = index;
};
</script>

<style scoped lang="scss">
.model-tabs-wrap {
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-start;

  gap: 16px;
  color: rgb(166, 167, 171);

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
}
.model-tabs-item.active {
  background-color: #2c2e33;
  border-radius: 4px;

  .icon-wrap__text {
    color: #fff;
  }
  .icon-wrap__icon {
    background-color: #1a1b1e;
    color: #fff;
  }
}
.model-tabs-wrap > * {
  box-sizing: border-box;

  flex-grow: 0;
}
.model-tabs-content {
  position: relative;

  display: inline-flex;
  width: auto;

  flex-direction: row;
  background-color: #141517;
  border-radius: 4px;
  overflow: hidden;
  padding: 4px;
  background-color: transparent;
  gap: 8px;
}

@media (max-width: 767px) {
  .model-tabs-content {
    overflow: auto hidden;
    max-width: 100%;
  }
}
.model-tabs-item__input {
  height: 0;
  width: 0;
  position: absolute;
  overflow: hidden;
  white-space: nowrap;
  opacity: 0;
}

.model-tabs-item__input:focus {
  outline: none;
}

.model-tabs-item__label {
  -webkit-tap-highlight-color: transparent;

  border-radius: 4px;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  display: block;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
  color: rgb(166, 167, 171);
  transition: color 200ms ease 0s;
  padding: 6px 10px 6px 6px;
}
.model-tabs-item__input:focus + .model-tabs-item__label {
  outline-offset: 2px;
  outline: 2px solid #1c7ed6;
}

.model-tabs-item__input:focus:focus:not(:focus-visible)
  + .model-tabs-item__label {
  outline: none;
}
.icon-wrap {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;

  align-items: center;

  flex-wrap: nowrap;

  justify-content: flex-start;
  gap: 8px;
}

.icon-wrap > * {
  box-sizing: border-box;
  flex-grow: 0;
}
.icon-wrap__icon {
  display: inline-flex;

  align-items: center;

  justify-content: center;
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  min-width: 30px;
  min-height: 30px;
  border-radius: 4px;
  background-color: transparent;
  color: #fff;
  border: 1px solid transparent;
  padding: 6px;
}
.icon-wrap__text {
  -webkit-tap-highlight-color: transparent;
  color: inherit;
  font-size: 14px;
  line-height: 1;

  text-decoration: none;
}

.icon-wrap__text:focus {
  outline-offset: 2px;
  outline: 2px solid #1c7ed6;
}

.icon-wrap__text:focus:not(:focus-visible) {
  outline: none;
}
.model-5jke1l {
  display: inline-flex;

  align-items: center;

  justify-content: center;
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  min-width: 30px;
  min-height: 30px;
  border-radius: 4px;
  background-color: #1a1b1e;
  color: #fff;
  border: 1px solid transparent;
  padding: 6px;
}
.model-tabs-item__label:hover {
  color: rgb(193, 194, 197);
}
</style>
