<template>
  <el-form class="metamask-form">
    <metamask-icon />
    <el-button @click="loginMetamask" v-if="!tokenValue">Login</el-button>
    <div v-else class="metamask-form__token-field">{{ tokenValue }}</div>
  </el-form>
</template>

<script setup>
import { ref } from "vue";
import { getRequiredProvider, getTokenWallet } from "../services/login-wallet.js";
import { ElMessageBox } from "element-plus";
import MetamaskIcon from "./MetamaskIcon.vue";

const tokenValue = ref(null);

const loginMetamask = () => {
  const provider = getRequiredProvider("isMetaMask");
  if (!provider) {
    return ElMessageBox.confirm(
      "У вас не установлено расширение Metamask, скачать?"
    ).then(() => window.open("https://metamask.io/download"));
  }

  getTokenWallet(provider).then(([token]) => (tokenValue.value = token));
};
</script>

<style lang="scss" scoped>
.metamask-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
  height: 100%;

  &__token-field {
    background-color: #fff;
    padding: 5px 10px;
    border-radius: 6px;
    font-weight: 700;
    color: #ee811a;
  }
}
</style>
