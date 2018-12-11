# Datepicker

Easily select dates and time, based on the [flatpickr](https://flatpickr.js.org/) library.

### Import (JS)
```js
import '@amber-ds/components/date
```

### Syntax
```html
<amber-date
  value="2028-12-01"
>
</amber-date>
```

### Properties
| **name** | **type** |**description** |
|-|-|-|
| `flatpickr` | object | access the flatpickr instance |
| `config` | object | a flatpickr configuration, overrides any default value |

### Methods
| **name** | **arguments** | **return**| **description** |
|-|-|-|-|
| `open()` | *void* | *void* | open the datepicker
| `close()` | *void* | *void* | close the datepicker