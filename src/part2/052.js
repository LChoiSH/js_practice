class Chart {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  drawLine() {
    console.log('draw line');
  }
}

class BarChart extends Chart {
  constructor(width, height) {
    super(width, height);
  }

  draw() {
    this.drawLine();
    console.log(`draw ${this.width} X ${this.height}  _ barchart`)
  }
}

const barchart1 = new BarChart(10, 10);
barchart1.draw();