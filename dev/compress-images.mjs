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

new Compress().public();
