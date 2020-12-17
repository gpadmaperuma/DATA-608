d3.csv('ue_industry.csv', data =>{
    console.log(
        d3.extent(data, d=> +d.index)
    );
});

d3.select('#part1')
            .selectAll('circle')
            .data(dataset)
            .enter()
            .append('circle')
            .attr('r', d => 5)
            .attr('cx', d => d.x)
            .attr('cy', d => d.y)

d3.csv('ue_industry.csv', data =>{
    Object.keys(data[0]).forEach (key => {
        console.log(key)
    })
});

d3.csv('ue_industry.csv', data =>{
        console.log(Object.keys(data[0]))
});
