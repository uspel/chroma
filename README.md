# Chroma

Chroma provides a readable scripting interface for Minecraft text formatting.

## Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Colors](#colors)
- [Modifiers](#modifiers)
- [Other Notes](#other-notes)

## Features

- Supports all Minecraft Bedrock [formatting codes](https://minecraft.wiki/w/Formatting_codes)
- Simple and readable chaining syntax
- Concatenation and nesting support
- Formatting presets
- No dependencies

## Installation

Set up a new creation with the [Minepicker Creator CLI](https://creator.minepicker.com) and then run the following command to install the latest version of Chroma:

```shell
minepicker use chroma
```

## Usage

```js
import { world } from "@minecraft/server";
import chroma from "chroma";

world.sendMessage(chroma.blue("Hello world!"));
```

### Chaining

Formatting options can be chanined, with any conflicting options being overriden by the latest value in the chain.

```js
chroma.bold.blue("Hello world!");
```

### Concatenation & Nesting

Formatted text can be joined together and nested just like regular strings!

```js
import { world } from "@minecraft/server";
import chroma from "chroma";

world.sendMessage(
  "This is " + chroma.bold("bold")
);

world.sendMessage(
  chroma.yellow.italic(
    `A ${chroma.bold("very")} important message`
  )
);
```

### Presets

Assign Chroma instances to your own variables to shorten your code!

```js
import { world } from "@minecraft/server";
import chroma from "chroma";

const info = chroma.blue;
const warning = chroma.italic.yellow;

world.sendMessage(info("Scripts loaded!"));

const message =
  "This script is " +
  chroma.bold("completely useless");

world.sendMessage(info("You have a warning:"));
world.sendMessage(warning(message));
```

## Colors

Using the following properties on a Chroma instance will return a new instance with the appropriate color formatting applied:

- `aqua`
- `black`
- `blue`
- `darkAqua`
- `darkBlue`
- `darkGray`
- `darkGreen`
- `darkPurple`
- `darkRed`
- `gold`
- `gray`
- `green`
- `lightPurple`
- `materialAmethyst`
- `materialCopper`
- `materialDiamond`
- `materialEmerald`
- `materialGold`
- `materialIron`
- `materialLapis`
- `materialNetherite`
- `materialQuartz`
- `materialRedstone`
- `minecoinGold`
- `red`
- `yellow`
- `white`

### TextColor Enum

Alternatively, you may apply colors using the `color` method, providing a `TextColor` member as an argument:

```js
import { world } from "@minecraft/server";
import chroma, { TextColor } from "chroma";

const error = chroma.bold.color(TextColor.Red);

world.sendMessage(
  error("Oh no! Something went wrong.")
);
```

## Modifiers

Using the following properties on a Chroma instance will return a new instance with the appropriate modifier formatting applied:

- `bold`
- `italic`
- `obfuscated`
- `reset` (also resets all previously chained options)

## Other Notes

Calling a Chroma instance will not only append a reset (`§r`) code to the end of the string, but also an additional `§¬` code.
This is done so that future Chroma calls on the string can identify the end of formatted sections to support format nesting. This `§¬` code will not appear in the displayed text.
