<script setup lang="ts">
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import DxList from 'devextreme-vue/list';
import { tasks } from '../data';
</script>
<template>
  <div>
    <DxList
      :data-source="tasks"
      :height="300"
      :show-selection-controls="true"
      selection-mode="multiple"
    />
  </div>
</template>
<style>
.dx-list .dx-list-item {
  border: 0;
  width: 25%;
  float: left;
}
</style>
