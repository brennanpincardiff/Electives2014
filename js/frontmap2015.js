// Script for drawing the front map
d3.select(window).on("resize", throttle);

var zoom = d3.behavior.zoom()
	.scaleExtent([1, 9])
	.on("zoom", move);

var width = document.getElementById('frontpagemap').offsetWidth;
var height = width / 2;
var topo,projection,path,svg,g;
var graticule = d3.geo.graticule();

var tip = d3.tip()
	.attr('class', 'd3-tip')
 	.offset([0, 0])
	.html(function(d) {
					  	if (d.number == 1) {
 					 		return "One sudent visited <br/>" + d.region;}
						    else {
					    	return d.number + " students visited <br/>"  + d.region;}
  				})

setup(width,height);

function setup(width,height){
				  projection = d3.geo.mercator()
			      .translate([(width/2), (height/2)])
		         .scale( width / 2 / Math.PI);
 				 path = d3.geo.path().projection(projection);
				 svg = d3.select("#frontpagemap").append("svg:svg")
			      .attr("width", width)
			      .attr("height", height)
			      .call(zoom)
			      .on("click", click)
			      .append("g");
				  g = svg.append("g:g");
				}

d3.json("https://dl.dropboxusercontent.com/u/7729166/data/world-topo-min.json", function(error, world) {
				  var countries = topojson.feature(world, world.objects.countries).features;
				  topo = countries;
				  draw(topo);
				});

function draw(topo) {
                svg.append("path")
                    .datum(graticule)
                    .attr("class", "graticule")
                    .attr("d", path);

				g.append("path")
			   		.datum({type: "LineString", coordinates: [[-180, 0], [-90, 0], [0, 0], [90, 0], [180, 0]]})
			   		.attr("class", "equator")
			   		.attr("d", path);

		  		var country = g.selectAll(".country").data(topo);


			    country.enter().insert("path")
			       .attr("class", "country")
    			   .attr("d", path)
 			       .attr("id", function(d,i) { return d.id; })
      			   .attr("title", function(d,i) { return d.properties.name; })
      			   .style("fill", "#aec7e8");

				function drawsummarycircles(){

  //Adding elective summary circles from external TSV file
  
  
    	
  d3.tsv("https://dl.dropboxusercontent.com/u/7729166/electivestotal2015.txt", function(err, data) {
    g.selectAll("circle")
       .data(data)
       .enter()
       .append("svg:circle")
       .attr("cx", function(d) {
               return projection([d.longitude, d.latitude])[0];
       })
       .attr("cy", function(d) {
               return projection([d.longitude, d.latitude])[1];
       })
       .attr("r",  function(d){
       			return ([d.radius]*width/150)})
       .attr("stroke-width", 1)
       .attr("stroke", "black")
       .style("fill", function(d) {
       					return ([d.color])})      
       .on('mouseover', tip.show)
       .on('mouseout', tip.hide)

    });
    };

svg.call(drawsummarycircles);
svg.call(tip);

  };

function redraw() {
  width = document.getElementById('frontpagemap').offsetWidth;
  height = width / 2;
  d3.select('svg').remove();
  setup(width,height);
  draw(topo);
}

function move() {
  var t = d3.event.translate;
  var s = d3.event.scale; 
  zscale = s;
  var h = height/4;


  t[0] = Math.min(
    (width/height)  * (s - 1), 
    Math.max( width * (1 - s), t[0] )
  );

  t[1] = Math.min(
    h * (s - 1) + h * s, 
    Math.max(height  * (1 - s) - h * s, t[1])
  );

  zoom.translate(t);

  g.attr("transform", "translate(" + t + ")scale(" + s + ")");

}

var throttleTimer;

function throttle() {
  window.clearTimeout(throttleTimer);
    throttleTimer = window.setTimeout(function() {
      redraw();
    }, 200);
}

//geo translation on mouse click in map

function click() {
  var latlon = projection.invert(d3.mouse(this));
  console.log(latlon);
}
