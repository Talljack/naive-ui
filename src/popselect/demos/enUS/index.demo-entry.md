# Popselect

If you want select some options but don't want a picker, you can use popselect instead.

## Demos

```demo
basic
size
scrollable
multiple
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| multiple | `boolean` | `false` | Whether to select multiple values. |
| options | `Array<SelectOption \| SelectGroupOption>` | `[]` | For details of configuration options, see [Select](select#SelectOption-Type) |
| render-label | `(option: SelectOption \| SelectGroupOption) => VNodeChild` | `undefined` | Render function of all the options. |
| scrollable | `boolean` | `false` | Whether the select menu is scrollable. |
| size | `'small' \| 'medium' \| 'large'` | `'medium'` | Size of the Popselect. |
| value | `string \| number \| Array<string \| number> \| null` | `null` | Value in controlled mode. |
| on-update:value | `(string \| number \| Array<string \| number> \| null) => void` | `undefined` | Callback of value updating. |

For SelectOption & SelectGroupOption, see [Select](select#SelectOption-Type)

For other props, see [Popover](popover#Props)
