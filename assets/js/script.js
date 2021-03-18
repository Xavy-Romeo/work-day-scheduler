var timeBlockValues = [
    {time:'7  AM  ',input:'',id:'A'},{time:'8  AM  ',input:'',id:'B'},{time:'9  AM  ',input:'',id:'C'},{time:'10AM  ',input:'',id:'D'},
    {time:'11AM  ',input:'',id:'E'},{time:'12PM  ',input:'',id:'F'},{time:'1  PM  ',input:'',id:'G'},{time:'2  PM  ',input:'',id:'H'},
    {time:'3  PM  ',input:'',id:'I'},{time:'4  PM  ',input:'',id:'J'},{time:'5  PM  ',input:'',id:'K'},{time:'6  PM  ',input:'',id:'L'},{time:'7  PM  ',input:'',id:'M'}
];

var startUp = function() {
    currentDayEl();
    timeBlocks();
};

var currentDayEl = function() {
    $('#currentDay').text(moment().format('dddd LL'));
    return;
};

var timeBlocks = function() {
    for (i=0; i < timeBlockValues.length; i++) {

        var timeBlockEl = $('.container');

        //create time blocks by hour
        blockEl = $('<div>')
             .addClass('row time-block')
             // add p, textarea and button elements to div
             .html('<p class="hour">' + timeBlockValues[i].time + '</p>'
                    + '<textarea class="description" />'              
                    + '<button class="saveBtn" id="btn' + timeBlockValues[i].id + '"></button>'
             )         
     
        timeBlockEl.append(blockEl);
    }
};           
  

startUp();






// if (moment().isAfter(time)) {
//     $(taskEl).addClass('list-group-item-danger');
//   }
//   else if (Math.abs(moment().diff(time, 'days')) <= 2) {
//     $(taskEl).addClass('list-group-item-warning');
//   }