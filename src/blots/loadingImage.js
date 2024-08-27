import Quill from "quill";

const Embed = Quill.import("blots/embed");

class LoadingImage extends Embed {
  static create(src) {
    const node = super.create(src);
    if (src === true) return node;

    const image = document.createElement("img");
    image.setAttribute("src", src);
    node.appendChild(image);
    return node;
  }
}

LoadingImage.blotName = "loading-image";
LoadingImage.className = "image-uploading";
LoadingImage.tagName = "span";

export default LoadingImage;
