const { program } = require("commander");
const Canvas = require("canvas");
const fs = require("fs").promises;

// constants
const backgroundImages = { burst: "assets/background/burst.png" };
const allowTextAmount = { burst: 1 };

program.version("1.0.0");

program
    .option(
        "-t, --type [type]",
        "build with according built-in background. available: burst"
    )
    .option("-i, --input [input text]", "build with according text.")
    .option(
        "-o, --output [output path]",
        "set image output path",
        "./output/output.png"
    );

program.parse(process.argv);

const options = program.opts();

if (!options.type || !options.input) {
    console.log("Miss arguments!");
    process.exit(1);
} else if (!backgroundImages[options.type]) {
    console.log("Provided type not supported!");
    process.exit(1);
} else if (options.input.length > allowTextAmount[options.type]) {
    console.log("Text too long!");
    process.exit(1);
}

async function main(type, input, output) {
    const background = await Canvas.loadImage(backgroundImages[type]);

    const canvas = Canvas.createCanvas(background.width, background.height);
    const ctx = canvas.getContext("2d");

    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    switch (type) {
        case "burst": {
            ctx.font = '34pt "DFKai-SB"';
            ctx.fillStyle = "#e5e508";
            ctx.rotate((-34 * Math.PI) / 180);
            ctx.lineWidth = 5;
            ctx.strokeText(input + "!", -23, 88);
            ctx.fillText(input + "!", -23, 88);
        }
    }

    await fs.writeFile(output, canvas.toBuffer());
}

main(options.type, options.input, options.output);
