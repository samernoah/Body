<template>
  <div class="OrganStatusView">
    <slot></slot>
    <slot name="Heart"></slot>
    <slot name="Pancreas"></slot>
  </div>
</template>

<script>
export default {
  name: "OrganStatusView",
};
</script>

<style>
.OrganStatusView {
  position: relative;
  width: 100%;
  /* height: 100%; */
}
</style>