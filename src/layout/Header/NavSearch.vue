<template>
  <div class="search-container">
    <form id="nav-searchform" class="is-focus">
      <div class="nav-search-content">
        <input
          v-model="searchValue"
          class="nav-search-input"
          type="text"
          autocomplete="off"
          maxlength="100"
          x-webkit-speech=""
          x-webkit-grammar="builtin:translate"
          placeholder="搜索模型"
        />
        <div
          class="nav-search-clean"
          :class="{ 'has-keywords': searchValue }"
          @click="searchValue = ''"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 14.75C11.7279 14.75 14.75 11.7279 14.75 8C14.75 4.27208 11.7279 1.25 8 1.25C4.27208 1.25 1.25 4.27208 1.25 8C1.25 11.7279 4.27208 14.75 8 14.75ZM9.64999 5.64303C9.84525 5.44777 10.1618 5.44777 10.3571 5.64303C10.5524 5.83829 10.5524 6.15487 10.3571 6.35014L8.70718 8.00005L10.3571 9.64997C10.5524 9.84523 10.5524 10.1618 10.3571 10.3571C10.1618 10.5523 9.84525 10.5523 9.64999 10.3571L8.00007 8.70716L6.35016 10.3571C6.15489 10.5523 5.83831 10.5523 5.64305 10.3571C5.44779 10.1618 5.44779 9.84523 5.64305 9.64997L7.29296 8.00005L5.64305 6.35014C5.44779 6.15487 5.44779 5.83829 5.64305 5.64303C5.83831 5.44777 6.15489 5.44777 6.35016 5.64303L8.00007 7.29294L9.64999 5.64303Z"
              fill="#C9CCD0"
            ></path>
          </svg>
        </div>
      </div>
      <div class="nav-search-btn" @click="handleSearch">
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.3451 15.2003C16.6377 15.4915 16.4752 15.772 16.1934 16.0632C16.15 16.1279 16.0958 16.1818 16.0525 16.2249C15.7707 16.473 15.4456 16.624 15.1854 16.3652L11.6848 12.8815C10.4709 13.8198 8.97529 14.3267 7.44714 14.3267C3.62134 14.3267 0.5 11.2314 0.5 7.41337C0.5 3.60616 3.6105 0.5 7.44714 0.5C11.2729 0.5 14.3943 3.59538 14.3943 7.41337C14.3943 8.98802 13.8524 10.5087 12.8661 11.7383L16.3451 15.2003ZM2.13647 7.4026C2.13647 10.3146 4.52083 12.6766 7.43624 12.6766C10.3517 12.6766 12.736 10.3146 12.736 7.4026C12.736 4.49058 10.3517 2.1286 7.43624 2.1286C4.50999 2.1286 2.13647 4.50136 2.13647 7.4026Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </form>
    <!-- <div class="search-panel">111</div> -->
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(["search"]);
const searchValue = ref("");

const handleSearch = () => {
  emit("search", searchValue.value);
};
</script>

<style lang="scss">
.search-container {
  height: 38px;
}
#nav-searchform {
  border-radius: 8px;
  background: #f1f2f3;
  display: flex;
  align-items: center;
  padding: 0 48px 0 4px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  line-height: 38px;
  border: 1px solid #e3e5e7;
  height: 40px;
  opacity: 0.9;
  transition: background-color 0.3s;
}

// #nav-searchform:focus-within {
//   border: 1px solid #e3e5e7;
//   border-bottom: none;
//   background: #fff;
//   border-radius: 8px 8px 0px 0px;
// }

.nav-search-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 0 8px;
  width: 100%;
  height: 32px;
  border: 2px solid transparent;
  border-radius: 6px;
}

.nav-search-content:focus-within {
  background-color: #e3e5e7;
}

.nav-search-btn {
  position: absolute;
  top: 3px;
  right: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 6px;
  color: #18191c;
  line-height: 32px;
  cursor: pointer;
  transition: background-color 0.3s;
}

// .nav-search-input:focus + .nav-search-clean {
//   visibility: inherit;
// }

.nav-search-clean {
  width: 16px;
  height: 16px;
  cursor: pointer;
  visibility: hidden;
  box-sizing: border-box;
  display: flex;

  &.has-keywords {
    visibility: inherit;
  }
}

.nav-search-input {
  overflow: hidden;
  padding-right: 8px;
  border: none;
  background-color: transparent;
  box-shadow: none;
  color: #61666d;
  font-size: 14px;
  line-height: 20px;
}

.nav-search-input:focus {
  outline: none;
  background-color: #e3e5e7;
  color: #18191c;
}

.search-panel {
  display: none;
}

#nav-searchform:focus-within + .search-panel {
  display: block;
  width: 100%;
  max-height: 612px;
  overflow-y: auto;
  background: #fff;
  border: 1px solid #e3e5e7;
  border-top: none;
  border-radius: 0 0 8px 8px;
  padding: 13px 0 16px;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
