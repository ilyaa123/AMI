<template>
  <div class="main-wrapper">
    <div class="avatar-wrapper">
      <img src="/avatar.png" alt="" class="avatar" />
    </div>
    <div class="sub-wrapper">
      <div class="title-wrapper">
        <div class="title">Zeri</div>
        <div class="other">
          <span class="status">
            <v-icon size="medium" icon="mdi-check-all"></v-icon>
          </span>
          <span class="chat-block__time">18:09</span>
        </div>
      </div>
      <div class="chat-block__wrapper_message">
        <div class="message">Can just tell me alredy how big ur {{ foo }}?</div>
        <div class="pin-wrapper">
          <v-icon icon="mdi-pin-outline" size="medium"></v-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { foo } = defineProps(["foo"]);
</script>

<style scoped>
.main-wrapper {
  display: flex;
  height: 67px;
  width: 404px;
  font-family: Roboto, -apple-system, apple color emoji, BlinkMacSystemFont,
    Segoe UI, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 5px 10px;
}

.main-wrapper:hover {
  background-color: #2f2f2f;
}

.sub-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.title-wrapper {
  display: flex;
  flex-direction: row;
}

.chat-block__wrapper_message {
  display: flex;
}

.other {
  display: flex;
  align-items: center;
}

.title {
  flex: 1;
}

.title-wrapper {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  display: flex;
}

.status {
  display: flex;
  align-items: center;
  margin: 0 2px 0 0;
}

.avatar-wrapper {
  margin: 0 5px 0 0;
  display: flex;
  align-items: center;
}

.message {
  flex: 1;
  max-width: 282px;
  text-overflow: ellipsis;
}

.pin-wrapper {
  display: flex;
  align-items: center;
}
.avatar {
  width: 54px;
  height: 54px;
  border-radius: 50px;
}
</style>
