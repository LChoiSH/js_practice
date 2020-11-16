function drawChart(width = 200, height = 400) {
  console.log(`Draw ${width}  X ${height} chart`);
}

drawChart(100);
drawChart();

function drawChart2(width = 200, height = width / 2) {
  console.log(`Draw ${width}  X ${height} chart`);
}

drawChart2(300);
drawChart2();