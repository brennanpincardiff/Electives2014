// Script for drawing the safe histogram. 
var margin = {top: 50, right: 0, bottom: 150, left: 120};
var width = 400 - margin.left - margin.right;
var height = 400 - margin.top - margin.bottom;

	
var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10);

var div = d3.select("#safegraph").append("div")   
    .attr("class", "tooltip")               
    .style("opacity", 0);

var svg = d3.select("#safegraph").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
var tip = d3.tip()
	.attr('class', 'd3-tip')
 	.offset([-10, 0])
 	.direction('e')
	.html(function(d) {return d.safe_tip_quote;});

d3.csv("https://dl.dropboxusercontent.com/u/7729166/dataquotes20140814.csv", type, function(error, data) {
  x.domain(data.map(function(d) { return d.safe_disc; }));
  y.domain([0, d3.max(data, function(d) { return d.safe_numbers+5; })]);

  svg.append("text")
      .attr("class", "title")
      .attr("x", -50)
      .attr("y", -30)
      .text("Did you feel safe on your Elective?");

   
  svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
	    .selectAll(".tick text")
        .style("text-anchor", "end")
        .attr("dx", "0.5em")
        .attr("dy", "0.5em");
    

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", -35)
      .attr("x", -30)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Number of Responses");

  svg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.safe_disc); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.safe_numbers); })
      .attr("height", function(d) { return height - y(d.safe_numbers); })

//tool tip information
       .on('mouseover', tip.show)
       .on('mouseout', tip.hide);
       
    svg.call(tip);
        });

function type(d) {
  d.safe_numbers = +d.safe_numbers;
  return d;
}


