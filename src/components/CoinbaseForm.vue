<template>
  <el-form class="coinbase-form">
    <CoinbaseIcon />
    <el-button @click="logIn" v-if="!tokenValue">Login</el-button>
    <div v-else class="coinbase-form__token-field">
      {{ tokenValue }}
    </div>
  </el-form>
</template>

<script setup>
import { ref } from "vue";
import { getRequiredProvider, getTokenWallet } from "../services/login-wallet.js";
import { ElMessageBox } from "element-plus";
import CoinbaseIcon from "./CoinbaseIcon.vue";

const tokenValue = ref(null);

const logIn = () => {
  const provider = getRequiredProvider("isCoinbaseWallet");

  if (!provider) {
    return ElMessageBox.confirm(
      "У вас не установлено расширение Coinbase, скачать?"
    ).then(() =>
      window.open("https://www.coinbase.com/ru/wallet/articles/getting-started-extension")
    );
  }

  getTokenWallet(provider).then(([token]) => (tokenValue.value = token));
};
</script>

<style lang="scss" scoped>
.coinbase-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
  height: 100%;

  &__authed-info {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__token-field {
    background-color: #0052ff;
    color: #fff;
    font-weight: 700;
    padding: 5px 10px;
    border-radius: 6px;
  }
}
</style>
