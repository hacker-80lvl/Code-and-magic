'use strict';

var GetMaxTime = function(times) {
    var max_index1;
    var max_index2;
    if(times[0] > times[1])
        max_index1 = 0;
    else
        max_index1 = 1;
        
    if (times[2] > times[3])
        max_index2 = 2;
    else
        max_index2 = 3;
        
    if(times[max_index1] > times[max_index2])
        return max_index1;
    return max_index2;
};
var GetPlayerRange = function(index, MAX_RANGE, times) {
    console.log(times);
    var max_index = GetMaxTime(times);
    var range;
    
    if(index == max_index)
        return MAX_RANGE;
    
    range = Math.floor(times[index] * MAX_RANGE / times[max_index]);
    return range;
};
window.renderStatistics = function(ctx, players, times) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
    ctx.fillRect(215, 20, 300, 200);
    
    ctx.fillStyle = "rgb(159, 252, 255)";
    ctx.fillRect(205, 10, 300, 200);
    
    var pos_x = 225;
    var pos_y = 190;
    var MAX_RANGE = 160;
    
    for (let i = 0; i < players.length; i++)
    {
        ctx.fillStyle = 'rgb(0,' + Math.floor(Math.random() * 150) +', 255)';
        console.log(ctx.fillStyle);
        if(players[i] == 'Вы')
            ctx.fillStyle = '#f00';
        ctx.fillRect(pos_x, pos_y - 10, 30, -GetPlayerRange(i, MAX_RANGE, times));
        
        ctx.fillStyle = "#000";
        ctx.textBaseLine = "hanging";
        ctx.fillText(players[i], pos_x, pos_y + 10);
        
        pos_x += 75;
    }
};