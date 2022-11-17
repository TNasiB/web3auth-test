<script setup>
import CoinbaseForm from "./components/CoinbaseForm.vue";
import MetamaskForm from "./components/MetamaskForm.vue";
import PhantomForm from "./components/PhantomForm.vue";

const sourceComponentsMap = [
  {
    id: 1,
    classLabel: "coinbase",
    component: CoinbaseForm,
  },
  {
    id: 2,
    classLabel: "metamask",
    component: MetamaskForm,
  },
  {
    id: 3,
    classLabel: "phantom",
    component: PhantomForm,
  },
];
</script>

<template>
  <div class="app">
    <el-card class="app__auth-form">
      <template #header>
        <span class="app__auth-form-title">Authorization</span>
      </template>
      <div class="app__marketplace-forms">
        <el-card
          v-for="{ id, component, classLabel } in sourceComponentsMap"
          class="app__marketplace-form"
          :class="`app__marketplace-form--${classLabel}`"
          :key="id"
        >
          <component :is="component" />
        </el-card>
      </div>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.app {
  background-color: #fff;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;

  &__auth-form-title {
    font-weight: 700;
  }

  &__marketplace-forms {
    display: flex;
    gap: 20px;
    min-height: 150px;
    flex-wrap: wrap;
    justify-content: center;
  }

  &__marketplace-form {
    display: flex;
    min-width: 300px;
    flex-grow: 1;
  }

  &__marketplace-form--phantom {
    background-color: #2c2d30;
  }

  &__marketplace-form--metamask {
    background-color: #ee9b52;
  }
}
</style>
