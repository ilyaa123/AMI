<template>
	<div class="wrapper">Message example</div>
	<div class="lowpart"></div>
</template>

<style scoped>
.wrapper {
	background-color: #fff;
	color: #000;
	border-radius: 50px;
	width: fit-content;
	padding: 0 10px;
}

.wrapper::before {
	content: '';
	position: relative;
	transform: rotate(90deg);
	top: 40px;
	width: 0;
	height: 0;
	border-left: 20px solid transparent;
	border-right: 20px solid transparent;
	border-top: 20px solid #ee0e0e;
	clear: both;
}

/* .lowpart {
  position: relative;
  background-color: red;
  width: 10px;
  height: 10px;
} */
</style>
