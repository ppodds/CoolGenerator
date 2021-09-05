# Cool Generator

---

<div style="display: flex;justify-content: center;">
<img src="docs/project.png">
</div>

No, it's not cool at all. LOL.

## Introduce

Cool Generator is a very cool command line program to generate cool images.

If you have any cool idea, pull requests are welcome!

## Install

```shell
git clone https://github.com/ppodds/CoolGenerator.git
cd CoolGenerator
npm install
```

If you encounter any error, please read following install instruction documents.

[node-canvas](https://github.com/Automattic/node-canvas)
[commander.js](https://github.com/tj/commander.js)

## Usage

```
Usage: node generator.js [options]

Options:
  -V, --version               output the version number
  -t, --type [type]           build with according built-in background. available: burst
  -i, --input [input text]    build with according text.
  -o, --output [output path]  set image output path (default: "./output/output.png")
  -h, --help                  display help for command
```

## Arguments

- -t, --type
  - set background image you want to use
- -i, --input
  - set image text
- -o, --output
  - set output file path

## Examples

Basic usage

```
node generator.js -t burst -i 酷
```

Set output path

```
node generator.js -t burst -i 酷 -o ./output/StarBurstStream.png
```

## TODO

- [ ] more background image
- [ ] zhang bei tu (長輩圖) support
