

const MARGIN1 = { LEFT: 100, RIGHT: 10, TOP: 10, BOTTOM: 100 }
const WIDTH1 = 800 - MARGIN1.LEFT - MARGIN1.RIGHT
const HEIGHT1 = 500 - MARGIN1.TOP - MARGIN1.BOTTOM

const svg1 = d3.select("#scatter-plot").append("svg")
  .attr("width", WIDTH1 + MARGIN1.LEFT + MARGIN1.RIGHT)
  .attr("height", HEIGHT1 + MARGIN1.TOP + MARGIN1.BOTTOM)

const g1 = svg1.append("g")
  .attr("transform", `translate(${MARGIN1.LEFT}, ${MARGIN1.TOP})`)

//Read the data
d3.csv('https://ammaralzureiqi.github.io/COVID%20Data/country_wise_latest.csv', function(data) {

// Add X axis
var x = d3.scalePow()
.exponent(0.5)
.domain([10, 452529])
.range([ 0, WIDTH1 ]);
svg1.append("g")
.attr("transform", "translate(0," + HEIGHT1 + ")")
.call(d3.axisBottom(x));

// Add Y axis
var y = d3.scalePow()
.exponent(0.5)
.domain([0, 45844])
.range([ HEIGHT1, 0]);
svg1.append("g")
.call(d3.axisLeft(y));

// Add a tooltip div. Here I define the general feature of the tooltip: stuff that do not depend on the data point.
// Its opacity is set to 0: we don't see it by default.
var tooltip = d3.select("#scatter-plot")
.append("div")
.style("opacity", 0)
.attr("class", "tooltip")
.style("background-color", "white")
.style("border", "solid")
.style("border-width", "1px")
.style("border-radius", "5px")
.style("padding", "10px")
.style("position", "absolute")



// A function that change this tooltip when the user hover a point.
// Its opacity is set to 1: we can now see it. Plus it set the text and position of tooltip depending on the datapoint (d)
var mouseover = function(d) {
tooltip
  .style("opacity", 1)
}

var mousemove = function(d) {
tooltip
  .html("Confirmed Cases: " + d.Confirmed + "<br> Country: " + d['Country/Region'])
  .style("left", (d3.mouse(this)[0]+90) + "px") // It is important to put the +90: other wise the tooltip is exactly where the point is an it creates a weird effect
  .style("top", (d3.mouse(this)[1]) + "px")
}

// A function that change this tooltip when the leaves a point: just need to set opacity to 0 again
var mouseleave = function(d) {
tooltip
  .transition()
  .duration(200)
  .style("opacity", 0)
}

// Add dots
svg1.append('g')
.selectAll("dot")
.data(data) // the .filter part is just to keep a few dots on the chart, not all of them
.enter()
.append("circle")
  .attr("cx", function (d) { return x(d.Confirmed); } )
  .attr("cy", function (d) { return y(d.Deaths); } )
  .attr("r", 7)
  .style("fill", "#69b3a2")
  .style("opacity", 0.3)
  .style("stroke", "white")
.on("mouseover", mouseover )
.on("mousemove", mousemove )
.on("mouseleave", mouseleave )

})