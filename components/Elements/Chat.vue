<template>
  <div class="chat-block">
    <div class="chat-block__avatar">
      <img src="/avatar.png" alt="" class="avatar" />
    </div>
    <div class="chat-block__wrapper">
      <div class="chat-block__wrapper_title">
        <div class="chat-block__title">Zeri</div>
        <div class="chat-block__other">
          <span class="chat-block__status">
            <v-icon icon="fa:fas fa-edit"></v-icon>
          </span>
          <span class="chat-block__time">18:09</span>
        </div>
      </div>
      <div class="chat-block__wrapper_message">
        <div class="chat-block__message">
          Can just tell me alredy how big ur ****?
        </div>
        <div class="chat-block__fix-btn-wrapper">icon</div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.chat-block {
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

.chat-block:hover {
  background-color: #2f2f2f;
}

.chat-block__wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.chat-block__wrapper_title {
  display: flex;
  flex-direction: row;
}

.chat-block__wrapper_message {
  display: flex;
}

.chat-block__title {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  flex: 1;
}

.chart-block__status {
  display: flex;
  align-items: center;
}

.chat-block__avatar {
  margin: 0 5px 0 0;
  display: flex;
  align-items: center;
}
.avatar {
  width: 54px;
  height: 54px;
  border-radius: 50px;
}
</style>
