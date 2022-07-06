var margin = { top: 10, right: 20, bottom: 40, left: 30 };
var width = 600 - margin.left - margin.right;
var height = 600 - margin.top - margin.bottom;

let fullWidth = width + margin.left + margin.right;
let fullHeight = height + margin.top + margin.bottom;

var svg = d3
  .select(".chart")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .attr("viewBox", `0 0 ${fullWidth / 2} ${fullHeight / 2}`)
  .append("g")
  .attr("transform", `translate( ${margin.left}, ${margin.top})`);

svg
  .append("rect")
  .attr("width", width)
  .attr("height", height)
  .style("fill", "pink")
  .style("stroke", "black");

let yScale = d3.scaleLinear().domain([0, 100]).range([height, 0]);
let yAxis = d3.axisLeft(yScale).ticks(10);
svg.call(yAxis);

let xScale = d3
  .scaleTime()
  .domain([new Date(2022, 0, 1, 6), new Date(2022, 0, 1, 9)])
  .range([0, width]);
let xAxis = d3
  .axisBottom(xScale)
  .ticks(5)
  .tickSizeInner(10)
  .tickSizeOuter(20)
  .tickPadding(15);
svg.append("g").attr("transform", `translate(0, ${height})`).call(xAxis);
