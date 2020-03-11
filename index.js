const a = document.querySelector('div');
const b = d3.select('div');

const c = document.querySelectorAll('div');
const d = d3.selectAll('div');

const canvas = d3.select('.canvas');

const svg = canvas.append('svg')
    .attr('height', 1000)
    .attr('width', 1000);

const group = svg.append('g')
    .attr('transform', 'translate(300, 0)');

group.append('rect')
    .attr("width", 20)
    .attr("height", 100)
    .attr("fill", 'blue')
    .attr("x", 20)
    .attr("y", 50);
group.append('circle')
    .attr("r", 10)
    .attr("cx", 400)
    .attr("cy", 300)
    .attr("fill", 'pink');
group.append('line')
    .attr("x1", 10)
    .attr("y1", 10)
    .attr("x2", 300)
    .attr("y2", 300)
    .attr("stroke", "green");

svg.append('text')
    .attr('x', 20)
    .attr('y', 170)
    .attr('fill', 'grey')
    .text('hello')
    .style('font-family', 'arial')
    .attr('font-weight', 'bold');

console.log('a : ', a);
console.log('b : ', b);
console.log('c : ', c);
console.log('d : ', d);
console.log('canvas : ', canvas);
console.log('svg : ', svg);