const h = "900px";

function pageChange(value) {
    d3.select(".plot img").remove();
    d3.select(".plot svg").remove();
    d3.select(".chart-container").remove();
    Plotly.purge("plot");
    if (value === "Home") {
        home();
    } else if (value === "Scatter") {
        vis1();
    } else if (value === "Line") {
        viz2();        
    } else if (value === "Chart JS") {
        vis3();        
    }
};

function home() {
    d3.select(".plot")
        .append("img")
        .attr("src", "../assets/images/avocado.jpg")
        .attr("class", "img-fluid")
        .attr("height", h)
};

function vis3() {
    d3.select(".plot")
        .append("div")
        .attr("class", "chart-container")
        .attr("style", "background-color:white")
        .append("canvas")
        .attr("id", "chartjs");
    chartjs()
    
};

function test1() {
    var trace1 = {x: ["beer", "wine", "martini", "margarita", "ice tea", "rum & coke", "mai tai", "gin & tonic"], y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],  type: "bar"};
    var data = [trace1];
    var layout = {title: "'Bar' Chart"};
    Plotly.newPlot("plot", data, layout);

};

// Page Change Listener
d3.selectAll("a.nav-item.nav-link").on("click", function() {
    var value = d3.select(this).text();
    pageChange(value);  
});
// Makes the currently selected view 'active' and removes 'active' from others
$(".navbar-nav .nav-link").on("click", function(){
    $(".navbar-nav").find(".active").removeClass("active");
    $(this).addClass("active");
 });