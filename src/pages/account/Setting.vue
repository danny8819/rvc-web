<template>
  <div class="setting-container d-flex justify-center py-5">
    <div class="setting-left rvc-card">
      <div class="left-header">个人中心</div>
      <el-divider class="mt-1" />

      <div class="left-list">
        <div
          class="left-item"
          :class="{ active: type === index }"
          v-for="(item, index) in ['我的信息', '账号安全']"
          :key="index"
          @click="type = index"
        >
          <span>{{ item }}</span>
        </div>
      </div>
    </div>

    <div class="setting-right rvc-card ml-2">
      <div v-if="type === 0">
        <div class="right-header" style="text-align: left">编辑资料</div>
        <el-divider class="mt-1" />
        <div
          class="setting-right-avatar d-flex justify-center mb-4 flex-column align-center"
        >
          <el-avatar :size="90" :src="infoForm.avatar"> </el-avatar>
          <div class="avatar-action font-12 my-1">
            <label for="fileInput">修改头像</label>
            <input
              id="fileInput"
              type="file"
              @change="onFileChange"
              hidden
              accept="image/jpeg, image/png"
            />
          </div>
        </div>
        <el-form
          ref="formRef"
          :model="infoForm"
          status-icon
          label-width="100px"
        >
          <el-form-item label="昵称:" prop="nickname">
            <el-input
              v-model="infoForm.nickname"
              autocomplete="off"
              style="width: 400px"
            />
          </el-form-item>

          <el-form-item label="签名:" prop="description">
            <el-input
              type="textarea"
              v-model="infoForm.description"
              autocomplete="off"
              style="height: 95px; min-height: 95px; width: 400px"
              :rows="4"
              resize="none"
            />
          </el-form-item>

          <el-form-item>
            <el-button
              type="primary"
              @click="submitForm(formRef)"
              :disabled="disabled"
              >确认修改</el-button
            >
          </el-form-item>
        </el-form>
      </div>

      <div v-if="type === 1">
        <div class="right-header" style="text-align: left">账号安全</div>
        <el-divider class="mt-1" />
        <el-button @click="$router.push('/account/password')"
          >修改密码</el-button
        >

        <div class="w-50 ma-auto" v-if="false">
          <img class="w-100" src="@/assets/img/noData.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/store/user";
import {
  userInfo as userInfoApi,
  changeUserInfo,
  changeAvatar,
} from "@/api/user";

const userStore = useUserStore();
const formRef = ref();
const infoForm = ref({});
const disabled = ref(false);
const type = ref(0);
freshInfo();

function freshInfo() {
  userStore.updateUserInfo().then((res) => {
    infoForm.value = res;
  });
}
function onFileChange(e) {
  const [file] = e.target.files;
  const fileSize = file.size;

  const fileSizeInMB = fileSize / (1024 * 1024);
  if (fileSizeInMB > 5) {
    alert("请上传不超过5MB的图片");
    return;
  }
  if (file && userStore.userInfo.uid && userStore.userInfo.username) {
    const formData = new FormData();
    formData.append("avatar", file);
    formData.append("uid", userStore.userInfo.uid);
    formData.append("username", userStore.userInfo.username);

    changeAvatar(formData).then((res) => {
      console.log(res);
      if (res.code == 200) {
        ElMessage({
          message: res.msg || "修改成功",
          type: "error",
        });
      }
      freshInfo();
    });
  }
}
const submitForm = (formEl) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      disabled.value = true;

      const params = {
        description: infoForm.value.description,
        nickname: infoForm.value.nickname,
        uid: infoForm.value.uid,
        username: infoForm.value.username,
      };

      changeUserInfo(params).then((res) => {
        disabled.value = false;
      });
    } else {
      return false;
    }
  });
};
</script>

<style scoped lang="scss">
.setting-container {
  width: 730px;
  margin: auto;

  .setting-left {
    width: 150px;
  }
  .left-header,
  .right-header {
    height: 30px;
    line-height: 30px;
    text-align: center;
  }

  .left-item {
    width: 100%;

    text-align: center;
    height: 30px;
    line-height: 30px;

    &.active {
      color: #00c3ff;
    }
  }

  .avatar-action {
    color: #00c3ff;
  }
}
</style>
