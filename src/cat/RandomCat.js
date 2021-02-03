class RandomCat {
  constructor({ $target, initialData, onClick }) {
    this.$searchResult = document.createElement("div");
    this.$searchResult.className = "RandomCat";
    $target.appendChild(this.$searchResult);

    this.data = initialData;
    this.onClick = onClick;

    this.render();
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  render() {
    this.$searchResult.innerHTML = this.data
      .map(
        cat => `
              <div class="random-item">
                <div class='name'>${cat.name}</div>
                <img src=${cat.url} alt=${cat.name} />
              </div>
            `
      )
      .join("");

    this.$searchResult.querySelectorAll(".item").forEach(($item, index) => {
      $item.addEventListener("click", () => {
        console.log(this.data[index]);
        this.onClick(this.data[index]);
      });
    });
  }
}