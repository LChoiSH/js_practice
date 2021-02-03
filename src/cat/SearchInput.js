const TEMPLATE = '<input type="text">';

class SearchInput {
  constructor({ $target, onSearch, randomSearch }) {
    const $searchInput = document.createElement("input");
    this.$searchInput = $searchInput;
    this.$searchInput.placeholder = "고양이를 검색해보세요.|";

    const $randomButton = document.createElement("button");
    this.$randomButton = $randomButton;
    this.$randomButton.innerText = '랜덤';
    Object.assign(this.$randomButton.style, {
      position: 'absolute',
      top: 0,
      right: 0
    });
    $target.appendChild($randomButton);

    $searchInput.className = "SearchInput";
    $target.appendChild($searchInput);

    $searchInput.addEventListener("keyup", e => {
      if (e.keyCode === 13) {
        onSearch(e.target.value);
        $searchInput.blur();
      }
    });

    $randomButton.addEventListener("click", e => {
      randomSearch();
      $searchInput.blur();
    });

    $searchInput.addEventListener('click', e => {
      $searchInput.value = '';
    });

    console.log("SearchInput created.", this);
    $searchInput.focus();
  }
  render() {}
}
