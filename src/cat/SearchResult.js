class SearchResult {
  $searchResult = null;
  data = null;
  onClick = null;

  constructor({ $target, initialData, onClick }) {
    this.$searchResult = document.createElement("div");
    this.$searchResult.className = "SearchResult";
    $target.appendChild(this.$searchResult);

    this.data = initialData;
    this.onClick = onClick;

    this.render();
  }

  setState(nextData) {
    this.data = nextData;

    if(this.data.length == 0) {
      this.$searchResult.innerHTML = '결과가 없습니다.';
      return ;
    };

    this.render();
  }

  render() {
    this.$searchResult.innerHTML = this.data
      .map(
        cat => `
          <div class="item">
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
