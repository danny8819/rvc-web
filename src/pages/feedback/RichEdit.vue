<template>
  <main class="w-full">
    <Editor
      v-model="richContent"
      api-key="no-api-key"
      :init="tinymceOption"
    />
  </main>
</template>
<script setup lang="ts">
import { useColorMode } from '@vueuse/core';
import Editor from '@tinymce/tinymce-vue';
// import tinymce from 'tinymce/tinymce';
// import 'tinymce/themes/silver/theme.min.js';
// import 'tinymce/models/dom/model.min.js';
// import 'tinymce/icons/default/icons';
// import 'tinymce/plugins/lists';
// import 'tinymce/plugins/link';
// import 'tinymce/plugins/code';
// import 'tinymce/plugins/media';

const props = defineProps<{
  modelValue: string;
}>();
const emit = defineEmits(['update:modelValue']);
const colorMode = useColorMode();
console.log(colorMode.value);

const richContent = ref('');
watch(
  () => richContent.value,
  val => {
    emit('update:modelValue', val);
  },
);
const tinymceOption = reactive({
  ui_mode: 'split',
  plugins: 'link code media lists',
  branding: false,
  menubar: false,
  statusbar: false,
  min_height: 280,
  toolbar: 'image bold italic h2 checklist bullist numlist link code',
  toolbar_location: 'bottom',
  skin_url: 'tinymce/skins/ui/oxide-dark',
  content_css: 'tinymce/skins/content/dark/content.min.css',
  language_url: '/tinymce/langs/zh-Hans.js',
  language: 'zh-Hans',
});

watch(
  () => colorMode.value,
  () => {
    if (colorMode.value === 'dark') {
      tinymceOption.skin_url = 'tinymce/skins/ui/oxide-dark';
      tinymceOption.content_css = 'tinymce/skins/content/dark/content.min.css';
    } else {
      tinymceOption.skin_url = 'tinymce/skins/ui/oxide';
      tinymceOption.content_css =
        'tinymce/skins/content/default/content.min.css';
    }
  },
);
</script>
<style scoped>
:deep(.tox-editor-header) {
  border: none !important;
}
:deep(.tox-tinymce) {
  height: 280px !important;
}
</style>
