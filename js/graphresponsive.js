var paul=paul || {};

paul.renderGraph=function(strategy)
{
    var title=strategy.title;
    var valueMethod=strategy.number;
    var tooltipMethod=strategy.tooltip;
    var nameMethod=strategy.name;
    var place = strategy.place;
//    var widthstatus = strategy.witdthstatus;
//    var fixedwidth = strategy.fixedwidth;
    
    // Script for drawing the low point histogram again. 
    var margin = {top: 10, right: 0, bottom: 150, left: 120},
        width = $(".graph")[0].offsetWidth - margin.left - margin.right;
    
//    if (widthstatus === "fixed"){ width = fixedwidth }
//    else{
    if (width > 500){ 
            height = 500 - margin.top - margin.bottom;
            }
        else if (width < 300){
            height = 300 - margin.top - margin.bottom;
            }
        else {
            height = width - margin.top - margin.bottom;
            };
//    }
    
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
    
    var div = d3.select(place).append("div")   
        .attr("class", "tooltip")               
        .style("opacity", 0);
    
    var svg = d3.select(place).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        
    var tip = d3.tip()
        .attr('class', 'd3-tip')
        .offset([-10, 0])
        .html(function(d) {return tooltipMethod(d);});
    
    d3.csv("https://dl.dropboxusercontent.com/u/7729166/dataquotes20140814.csv", type, function(error, data) {
      x.domain(data.map(nameMethod));
      y.domain([0, d3.max(data, function(d) { return valueMethod(d)+2;})]);
    
      svg.append("text")
          .attr("class", "title")
          .attr("x", function(d) {return width/3;})
          .attr("y", 10)
          .text(title);
    
      if (width > 500){   
             svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height + ")")
                .call(xAxis)
                .selectAll(".tick text")
                .call(wrap, x.rangeBand());
       }
       else {   
             svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height + ")")
                .call(xAxis)
                .selectAll(".tick text")
                .style("text-anchor", "end")
                .attr("dx", "-.8em")
                .attr("dy", "-0.4em")
                .attr("transform", function(d){
                     return "rotate(-70)";
                 });
        }
    
      svg.append("g")
          .attr("class", "y axis")
          .call(yAxis)
        .append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", -35)
          .attr("x", function(d) {return -(height/4);})
          .attr("dy", ".71em")
          .style("text-anchor", "end")
          .text("Number of Responses");
    
      svg.selectAll(".bar")
          .data(data)
        .enter().append("rect")
          .attr("class", "bar")
          .attr("x", function(d) { return x(nameMethod(d)); })
          .attr("width", x.rangeBand())
          .attr("y", function(d) { return y(valueMethod(d)); })
          .attr("height", function(d) { return height - y(valueMethod(d)); })
    
    //tool tip information
           .on('mouseover', tip.show)
           .on('mouseout', tip.hide);
           
        svg.call(tip);
            });
    
    function wrap(text, width) {
      text.each(function() {
        var text = d3.select(this),
            words = text.text().split(/\s+/).reverse(),
            word,
            line = [],
            lineNumber = 0,
            lineHeight = 1.1, // ems
            y = text.attr("y"),
            dy = parseFloat(text.attr("dy")),
            tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
        while (word = words.pop()) {
          line.push(word);
          tspan.text(line.join(" "));
          if (tspan.node().getComputedTextLength() > width) {
            line.pop();
            tspan.text(line.join(" "));
            line = [word];
            tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
          }
        }
      });
    }
    
    
    
    function type(d) {
      d.low_numbers = +d.low_numbers;
      return d;
    }
};