<template>
  <el-form class="phantom-form">
    <phantom-icon />
    <el-button @click="loginPhantom" v-if="!tokenValue">Login</el-button>
    <div v-else class="phantom-form__token-field">{{ tokenValue }}</div>
  </el-form>
</template>

<script setup>
import { ref } from "vue";
import PhantomIcon from "./PhantomIcon.vue";
import { ElMessageBox } from "element-plus";

const tokenValue = ref(null);

const loginPhantom = async () => {
  const isPhantomInstalled = window.phantom?.solana?.isPhantom;
  if (isPhantomInstalled) {
    const resp = await window.solana.connect();
    tokenValue.value = resp.publicKey.toString();
  } else {
    ElMessageBox.confirm("У вас не установлено расширение Phantom, скачать?").then(() =>
      window.open("https://phantom.app/download")
    );
  }
};
</script>

<style lang="scss" scoped>
.phantom-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
  height: 100%;

  &__token-field {
    color: #000;
    font-weight: 700;
    background-color: #fff;
    padding: 5px 10px;
    border-radius: 6px;
  }
}
</style>
