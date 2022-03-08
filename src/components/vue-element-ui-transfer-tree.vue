<template>
  <div class="flex">
    <div class="flex-1">
      <el-card shadow="never">
        <div slot="header" class="clearfix">
          <span>{{ leftTitle || "待选值" }}</span>
        </div>
        <div class="">
          <el-input
            v-model="leftFilterText"
            class="w-full"
            clearable
            size="small"
            placeholder="输入关键字进行过滤"
          />
          <div class="tree-wrap">
            <el-tree
              ref="leftTree"
              v-bind="leftTree"
              :filter-node-method="filterNode"
              @check-change="checkedType('left')"
            />
          </div>
        </div>
      </el-card>
    </div>
    <div
      class="flex flex-col items-center justify-center flex-none transfer-button-wrap"
    >
      <div>
        <el-button
          :disabled="checkedTypeStatus !== 'left'"
          icon="el-icon-right"
          circle
          :type="checkedTypeStatus !== 'left' ? '' : 'primary'"
          @click="handleTree('left')"
        />
      </div>
      <div style="margin-top: 8px">
        <el-button
          :disabled="checkedTypeStatus !== 'right'"
          icon="el-icon-back"
          :type="checkedTypeStatus !== 'right' ? '' : 'primary'"
          circle
          @click="handleTree('right')"
        />
      </div>
    </div>
    <div class="flex-1">
      <el-card shadow="never">
        <div slot="header" class="clearfix">
          <span>{{ rightTitle || "已选值" }}</span>
        </div>
        <div class="">
          <el-input
            v-model="rightFilterText"
            class="w-full"
            clearable
            size="small"
            placeholder="输入关键字进行过滤"
          />
          <div class="tree-wrap">
            <el-tree
              ref="rightTree"
              :filter-node-method="filterNode"
              v-bind="rightTree"
              @check-change="checkedType('right')"
            />
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" scoped>
@import url("./style.scss");
</style>
