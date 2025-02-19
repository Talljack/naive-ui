# 复选框 Checkbox

哟，哟，Check it out。

## 演示

```demo
basic
group
grid
indeterminate
controlled
event
```

## Props

### Checkbox Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| checked | `boolean` | `false` | 受控状态下是否选中 |
| default-checked | `boolean` | `false` | 非受控模式下默认是否选中 |
| disabled | `boolean` | `false` | 是否禁用 |
| focusable | `boolean` | `true` | 是否可被 focus |
| indeterminate | `boolean` | `false` | 是否部分选中 |
| label | `string \| (() => VNodeChild)` | `undefined` | Checkbox 的标签 |
| value | `string \| number` | `undefined` | Checkbox 在 checkbox group 中使用的值 |
| on-update:checked | `(checked: boolean) => void` | `undefined` | 当 checked 改变时触发的回调函数 |

### Checkbox Group Props

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| disabled | `boolean` | `false` | 选项组是否禁用 |
| default-value | `Array<string \| number>` | `null` | 选项组非受控模式下的默认值 |
| max | `number` | `undefined` | 可被勾选的 checkbox 的最大数量 |
| min | `number` | `undefined` | 可被勾选的 checkbox 的最小数量 |
| value | `Array<string \| number> \| null` | `undefined` | 选项组受控模式下的值 |
| on-update:value | `(value: string \| number)` | `undefined` | 选项组的值改变时的回调 |

## Slots

### Checkbox Slots

| 名称    | 参数 | 说明                |
| ------- | ---- | ------------------- |
| default | `()` | Checkbox 的标签内容 |

### Checkbox Group Slots

| 名称    | 参数 | 说明                 |
| ------- | ---- | -------------------- |
| default | `()` | CheckboxGroup 的内容 |
