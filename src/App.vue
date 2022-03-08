<template>
  <div>
    <vue-element-ui-transfer-tree
      :default-checked-keys="selectTreeKeys"
      :tree-props="{
        data,
        props: {
          children: 'children',
          label: 'label',
        },
        'node-key': 'id',
      }"
      left-title="全部字段"
      right-title="已选字段"
      @checked-change="selectTreeKeys = $event"
    />

    <br />
    已选中的key：{{ selectTreeKeys }}
  </div>
</template>

<script>
import Vue from "vue";
import VueElementTransferTree from "./components/index.js";
Vue.use(VueElementTransferTree);

export default {
  data() {
    return {
      selectTreeKeys: [8, 3, 7],
      data: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1",
                },
                {
                  id: 10,
                  label: "三级 1-1-2",
                  children: [
                    {
                      id: 11,
                      label: "四级 1-1-2-1",
                    },
                    {
                      id: 12,
                      label: "四级 1-1-2-2",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1",
            },
            {
              id: 6,
              label: "二级 2-2",
            },
          ],
        },
        {
          id: 3,
          label: "一级 3",
          children: [
            {
              id: 7,
              label: "二级 3-1",
            },
            {
              id: 8,
              label: "二级 3-2",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style></style>
