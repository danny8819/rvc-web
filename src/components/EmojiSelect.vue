<template>
  <div class="emoji-bar-item">
    <button
      type="button"
      class="emoji-action"
      @click="show = !show"
      :disabled="disabled"
    >
      <svg viewBox="0 0 1024 1024">
        <path
          d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m0-102.4c226.742857 0 409.6-182.857143 409.6-409.6S738.742857 102.4 512 102.4 102.4 285.257143 102.4 512s182.857143 409.6 409.6 409.6z m-204.8-358.4h409.6c0 113.371429-91.428571 204.8-204.8 204.8s-204.8-91.428571-204.8-204.8z m0-102.4c-43.885714 0-76.8-32.914286-76.8-76.8s32.914286-76.8 76.8-76.8 76.8 32.914286 76.8 76.8-32.914286 76.8-76.8 76.8z m409.6 0c-43.885714 0-76.8-32.914286-76.8-76.8s32.914286-76.8 76.8-76.8c43.885714 0 76.8 32.914286 76.8 76.8s-32.914286 76.8-76.8 76.8z"
        ></path></svg
      ><svg viewBox="0 0 1024 1024">
        <path
          d="M498.7 655.8l-197.6-268c-8.1-10.9-0.3-26.4 13.3-26.4h395.2c13.6 0 21.4 15.4 13.3 26.4l-197.6 268c-6.6 9-20 9-26.6 0z"
        ></path>
      </svg>
    </button>
    <div class="emoji-drop-panel" style="left: 0px" v-show="show">
      <ul class="emoji-panel-content-emotion">
        <li
          v-for="(item, index) in emojiList"
          :key="index"
          @click="onClick(item)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  disabled: {
    type: Boolean,
    default: true,
  },
});
const emit = defineEmits(['choose']);
const show = ref(false);
const svgStyle = shallowReactive({
  size: '16px',
  color: '#595959',
});
const emojis =
  '😀 😃 😄 😁 😆 😅 😂 🤣 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 😛 😝 😜 🤓 😎 😏 😒 😞 😔 😟 😕 🙁 😣 😖 😫 😩 😢 😭 😤 😠 😡 😳 😱 😨 🤗 🤔 😶 😑 😬 🙄 😯 😴 😷 🤑 😈 🤡 💩 👻 💀 👀 👣 👐 🙌 👏 🤝 👍 👎 👊 ✊ 🤛 🤜 🤞 ✌️ 🤘 👌 👈 👉 👆 👇 ☝️ ✋ 🤚 🖐 🖖 👋 🤙 💪 🖕 ✍️ 🙏 ';
const emojiList = emojis.split(' ');
const onClickOutside = event => {
  const panel = document.querySelector('.emoji-drop-panel');
  const btn = document.querySelector('.emoji-action');
  if (!panel.contains(event.target) && !btn.contains(event.target)) {
    show.value = false;
  }
};
function onClick(item) {
  emit('choose', item);
  show.value = false;
}
onMounted(() => {
  document.addEventListener('click', onClickOutside);
});
onUnmounted(() => {
  document.removeEventListener('click', onClickOutside);
});
</script>

<style scoped lang="scss">
.emoji-bar-item {
  display: flex;
  height: 40px;
  padding: 4px;
  position: relative;
  text-align: center;
  align-items: center;
  justify-content: flex-start;
  --emoji-toolbar-color: #ccc;
}

.emoji-bar-item button {
  background: transparent;
  border: none;
  color: #595959;
  cursor: pointer;
  display: inline-flex;
  height: 32px;
  overflow: hidden;
  padding: 0 8px;
  white-space: nowrap;
  align-items: center;

  &:disabled {
    cursor: not-allowed;
  }
}

.emoji-action:before {
  background-color: #bfa;
  border-radius: 5px;
  color: red;
  content: attr(data-tooltip);
  font-size: 0.75em;
  opacity: 0;
  padding: 5px 10px;
  position: absolute;
  text-align: center;
  top: 40px;
  transition: opacity 0.6s;
  visibility: hidden;
  white-space: pre;
  z-index: 1;
}

.emoji-action:after {
  border: 5px solid transparent;
  border-bottom: 5px solid #bfa;
  content: '';
  opacity: 0;
  position: absolute;
  top: 30px;
  transition: opacity 0.6s;
  visibility: hidden;
}
.emoji-action svg {
  fill: v-bind('svgStyle.color');
  height: v-bind('svgStyle.size');
  width: v-bind('svgStyle.size');
}
.emoji-drop-panel {
  background-color: #fff;
  border: 1px solid var(--emoji-toolbar-border-color);
  border-radius: 3px;
  box-shadow: 0 2px 10px #0000001f;
  margin-top: 40px;
  min-width: 200px;
  padding: 10px;
  position: absolute;
  top: 0;
  z-index: 1;
}
.emoji-panel-content-emotion {
  font-size: 20px;
  list-style: none;
  text-align: left;
  width: 300px;
}
.emoji-panel-content-emotion li {
  border-radius: 3px 3px;
  cursor: pointer;
  display: inline-block;
  padding: 0 5px;
}
</style>
