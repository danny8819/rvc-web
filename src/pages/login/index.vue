<template>
  <div class="login">
    <v-card text="Login" width="400">
      <v-form v-model="valid">
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="email"
                label="Email"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="password"
                label="Password"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const valid = ref(false);
const email = ref("");
const password = ref("");

const nameRules = ref([
  (value: string) => {
    if (value) return true;
    return "Name is required.";
  },
  (value: string) => {
    if (value?.length <= 10) return true;
    return "Name must be less than 10 characters.";
  },
]);
const emailRules = ref([
  (value: string) => {
    if (value) return true;

    return "E-mail is requred.";
  },
  (value: string) => {
    if (/.+@.+\..+/.test(value)) return true;
    return "E-mail must be valid.";
  },
]);
</script>

<style scoped lang="scss"></style>
