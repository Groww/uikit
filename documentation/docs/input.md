---
id: input
title: Input
sidebar_label: Input
---

Input helps you to take inputs from a user,by using [TextInput]() api from react native,with slight modification in the ui from groww design guidelines,but you can control how you want to make it look,by passing some additional props to it.

:::note
Input component supports all the props supported by TextInput along with it takes some additional props
:::

## Usage

```jsx
import { Input } from 'frontatish';

<Input
  label="Name (As on PAN Card)"
  placeholder="CMBPR3476M"
  error="Your name is lame. Get a better one."
/>;
```

## Props

### label

The tilte of your input field,which will be a string.

|           Type            |         Default         |       Required        |
| :-----------------------: | :---------------------: | :-------------------: |
| string <img width="500"/> | None <img width="500"/> | No <img width="500"/> |

### error

The error message you want to show,once error gets occured

|           Type            |         Default         |       Required        |
| :-----------------------: | :---------------------: | :-------------------: |
| string <img width="500"/> | None <img width="500"/> | No <img width="500"/> |

### disabled

boolean value to be passed,if you want to disable the input.

|            Type            |         Default         |       Required        |
| :------------------------: | :---------------------: | :-------------------: |
| boolean <img width="500"/> | None <img width="500"/> | No <img width="500"/> |

### labelStyle

TextStyle object to style your input label

|             Type             |         Default         |       Required        |
| :--------------------------: | :---------------------: | :-------------------: |
| TextStyle <img width="500"/> | None <img width="500"/> | No <img width="500"/> |

### inputTextStyle

TextStyle object to style the text of input value same as [labelStyle](#labelstyle)

### disabledTextStyle

TextStyle object to style the text of input value,when its in disabled state same as [labelStyle](#labelstyle)

### containerStyle

ViewStyle object to style the parent container,which contains the whole TextInput and error messages.

|             Type             |         Default         |       Required        |
| :--------------------------: | :---------------------: | :-------------------: |
| ViewStyle <img width="500"/> | None <img width="500"/> | No <img width="500"/> |

### bottomBorderStyle

ViewStyle object to style the underline of your TextInput,same as [containerStyle](#containerstyle)
