

class ImageInfo {
  $imageInfo = null;
  data = null;

  constructor({ $target, data }) {
    const $imageInfo = document.createElement("div");
    $imageInfo.className = "ImageInfo";
    this.$imageInfo = $imageInfo;
    $target.appendChild($imageInfo);

    this.data = data;

    this.$imageInfo.addEventListener('click', e => {
      if(e.target == e.currentTarget) {
        $imageInfo.style.display = 'none';
      } else if (e.target.className == 'close') {
        $imageInfo.style.display = 'none';
      }
    });

    document.addEventListener("keyup", e => {
      if (e.keyCode === 27) {
        $imageInfo.style.display = 'none';
      }
    });

    this.render();
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  render() {
    if (this.data.visible) {
      const { name, url, temperament, origin } = this.data.image;
      console.log(this.data);

      this.$imageInfo.innerHTML = `
        <div class="content-wrapper">
          <div class="title">
            <span>${name}</span>
            <div class="close">x</div>
          </div>
          <img src="${url}" alt="${name}"/>        
          <div class="description">
            <div>성격: ${temperament}</div>
            <div>태생: ${origin}</div>
          </div>
        </div>`;
      this.$imageInfo.style.display = "block";

    } else {
      this.$imageInfo.style.display = "none";
    }
  }
}
