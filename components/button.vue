<script setup>
const props = defineProps(["text", "cancel", "disable", "loading"]);
const emit = defineEmits(["custom-event"]);
const emitEvent = () => {
  if (props.disable == true || props.loading == true) return;
  emit("custom-event");
};
</script>
<template>
  <div class="global-button flex items-center justify-center cursor-pointer" @click="emitEvent">
    <span>{{ props.text }}</span>
  </div>
</template>
<style lang="scss" scoped>
.global-button {
  font-size: 16px;
  font-weight: 350;
  line-height: 20px;
  letter-spacing: 0.2px;
  color: #fff;
  border-radius: 4px;
  background: var(--brand-orange, #ff5a00);
  padding: 12px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
}
.cancel {
  background: #ffffff !important;
  color: #374151 !important;
  border: 1px solid #d1d5db;
}
.disable {
  background: #d1d5db !important;
  color: #9ca3af !important;
}
.global-button::after {
  content: "";
  display: block;
  width: 1.2em;
  height: 1.2em;
  position: absolute;
  left: calc(50% - 0.75em);
  top: calc(50% - 0.75em);
  border: 0.15em solid transparent;
  border-right-color: white;
  border-radius: 50%;
  animation: button-anim 0.7s linear infinite;
  opacity: 0;
}

@keyframes button-anim {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

.global-button.loading {
  color: transparent;
}

.global-button.loading::after {
  opacity: 1;
}
</style>
