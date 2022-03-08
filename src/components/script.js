import cloneDeep from "lodash.clonedeep";
const treeCommonProps = {
  "show-checkbox": true,
  "default-expand-all": true,
};
export default {
  name: "VueElementUiTransferTree",
  props: {
    defaultCheckedKeys: {
      type: Array,
      default: () => [],
    },
    treeProps: {
      type: Object,
      default: () => ({}),
    },
    leftTitle: String,
    rightTitle: String,
  },
  data() {
    return {
      leftTree: {
        ...this.treeProps,
        ...treeCommonProps,
        data: cloneDeep(this.treeProps.data),
      },
      rightTree: {
        ...this.treeProps,
        ...treeCommonProps,
        data: [],
      },
      leftCheckedKeys: [],
      rightCheckedKeys: [],
      leftCheckedLeafKeys: [],
      rightCheckedLeafKeys: [],
      allKeys: [],
      allBranchKeys: {},
      allLeafKeys: [],
      checkedTypeStatus: null,
      leftFilterText: "",
      rightFilterText: "",
    };
  },
  computed: {
    itemKeyName() {
      return this.treeProps?.["node-key"] || "id";
    },
    childrenKeyName() {
      return this.treeProps?.props?.children || "children";
    },
    labelKeyName() {
      return this.treeProps?.props?.label || "label";
    },
  },
  watch: {
    leftFilterText(val) {
      this.$refs.leftTree.filter(val);
    },
    rightFilterText(val) {
      this.$refs.rightTree.filter(val);
    },
  },
  mounted() {
    this.initAllKeys();
    this.handleDefaultCheckedKeys();
  },
  methods: {
    // 获取所有的节点的key
    initAllKeys() {
      this.handleAllNodes(this.treeProps.data, (item, nodes, parent) => {
        const key = item?.[this.itemKeyName];
        // 记录改节点的key
        if (!item?.[this.childrenKeyName]) this.allLeafKeys.push(key);
        this.allKeys.push(key);

        // 记录改节点下面分支的所有节点
        this.allBranchKeys[key] = this.allBranchKeys[key] ?? [];
        if (parent) {
          const parentKey = parent[this.itemKeyName];
          this.allBranchKeys[parentKey] &&
            this.allBranchKeys[parentKey].push(key);

          for (const k in this.allBranchKeys) {
            const element = this.allBranchKeys[k];
            element.includes(parentKey) && element.push(key);
          }
        }
      });
    },
    // 获取选中的节点（或叶子节点）的keys和对应的补集
    setCheckedKeys({ type, isLeaf, isBackFillData }) {
      const leaf = isLeaf ? "Leaf" : "";
      const checkedKeys = isBackFillData
        ? this.defaultCheckedKeys
        : this.$refs[`${type}Tree`].getCheckedKeys();
      this[`${type}Checked${leaf}Keys`] = [
        ...this[`${type}Checked${leaf}Keys`],
        ...this[`all${leaf}Keys`].filter((item) => {
          return checkedKeys.includes(item);
        }),
      ];

      this[`${this.getReverseType(type)}Checked${leaf}Keys`] = this[
        `all${leaf}Keys`
      ].filter((item) => {
        return !this[`${type}Checked${leaf}Keys`].includes(item);
      });
    },
    // 取相反的类型
    getReverseType(type) {
      const types = ["left", "right"];
      return types.filter((item) => item !== type)[0];
    },
    // 设置默认选中的值
    handleDefaultCheckedKeys() {
      if (this.defaultCheckedKeys.length > 0) {
        this.handleTree("left", true);
      }
    },
    handleTree(type, isBackFillData = false) {
      // 对所有节点分组
      this.setCheckedKeys({ type, isBackFillData });
      // 对所有叶子节点分组
      this.setCheckedKeys({ type, isLeaf: true, isBackFillData });
      // 处理树的渲染
      this.generateTree(type);
      this.generateTree(this.getReverseType(type));

      this.$emit("checked-change", this.leftCheckedKeys);
    },
    getCheckedNodes() {
      return this.leftCheckedKeys;
    },
    // 通过记录的节点（或叶子节点）的keys和对应的补集，来重新渲染两边的树结构
    generateTree(type) {
      const treeData = cloneDeep(this.treeProps.data);
      this.handleAllNodes(treeData, (item, nodes) => {
        const delItem = () => {
          const index = nodes.findIndex(
            (d) => d?.[this.itemKeyName] === item?.[this.itemKeyName]
          );
          nodes.splice(index, 1);
        };

        // 如果该节点有子节点
        if (item?.[this.childrenKeyName]) {
          const branchData = this.allBranchKeys?.[item?.[this.itemKeyName]];
          const isIncludeStatus = branchData.map((key) =>
            this?.[`${type}CheckedKeys`].includes(key)
          );
          // 如果所有的字节点都包含，则需要删除掉该父节点
          isIncludeStatus.every((i) => i === true) && delItem();
        } else {
          // 如果该节点被包含，则删除此节点
          this[`${type}CheckedLeafKeys`].includes(item?.[this.itemKeyName]) &&
            delItem();
        }
      });

      this[`${type}Tree`].data = treeData;
      this.checkedTypeStatus = null;
      this.leftFilterText = "";
      this.rightFilterText = "";
    },
    // 树的递归通用处理
    handleAllNodes(data, cb, parent) {
      // 从最后一个开始遍历是为了删除的时候保证索引的正确
      for (let i = data.length - 1; i >= 0; i--) {
        const element = data[i];
        cb(element, data, parent);
        if (element?.[this.childrenKeyName]) {
          this.handleAllNodes(element?.[this.childrenKeyName], cb, element);
        }
      }
    },
    // 记录当前操作的树
    checkedType(type) {
      const checkedKeys = this.$refs[`${type}Tree`].getCheckedKeys();
      if (checkedKeys.length > 0) {
        this.checkedTypeStatus = type;
        this.$refs[`${this.getReverseType(type)}Tree`].setCheckedKeys([]);
      } else {
        this.checkedTypeStatus = null;
      }
    },

    filterNode(value, data) {
      if (!value) return true;
      return data?.[this.labelKeyName]?.indexOf(value) !== -1;
    },
  },
};
