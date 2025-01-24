import { Minomax } from "@cresteem/minomax";
const minomax = new Minomax();

class Compress {
  favicons() {
    // compress favicons
    minomax
      .compressImages({
        lookUpPatterns: "public/favicons/*png",
        targetFormat: "webp",
        destinationBasePath: "compressed",
      })
      .catch(console.error);
  }

  svg() {
    // compress all svg
    minomax
      .compressImages({
        lookUpPatterns: "public/**/*svg",
        targetFormat: "svg",
        destinationBasePath: "compressed",
      })
      .catch(console.error);
  }

  public() {
    // compress all svg
    minomax
      .compressImages({
        lookUpPatterns: ["public/**/*png", "public/**/*jpg"],
        targetFormat: "webp",
        destinationBasePath: "compressed",
      })
      .catch(console.error);
  }
}

const compress = new Compress();
const args = process.argv.slice(2);

if (args.includes("favicons")) {
  compress.favicons();
} else if (args.includes("svg")) {
  compress.svg();
} else if (args.includes("public")) {
  compress.public();
} else {
  console.error("Please provide a valid argument: favicons, svg, or public");
}
