console.log("app is running!");

class App {
  $target = null;
  data = [];

  constructor($target) {
    this.$target = $target;

    this.searchInput = new SearchInput({
      $target,
      onSearch: keyword => {
        $target.querySelector('.SearchResult').innerText = '로딩중~';

        api.fetchCats(keyword).then(({ data }) => {
          this.setState(data)
          console.log(data);
        });
      },
      randomSearch: () => {
        $target.querySelector('.SearchResult').innerText = '로딩중~';
        api.fetchRandom().then(({ data }) => this.setState(data));
      }
    });

    this.randomCat = new RandomCat({
      $target,
      initialData: [],
      onClick: image => {
        let x = api.fetchCatInfo(image.id).then(({ data }) => {
          this.imageInfo.setState({
            visible: true,
            image
          });
        });
      }
    })

    this.searchResult = new SearchResult({
      $target,
      initialData: this.data,
      onClick: image => {
        let x = api.fetchCatInfo(image.id).then(({ data }) => {
          this.imageInfo.setState({
            visible: true,
            image
          });
        });
      }
    });

    this.imageInfo = new ImageInfo({
      $target,
      data: {
        visible: false,
        image: null
      }
    });
  }

  setState(nextData) {
    console.log(this);
    this.data = nextData;
    this.searchResult.setState(nextData);
  }
}
