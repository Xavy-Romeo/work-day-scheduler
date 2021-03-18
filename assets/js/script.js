var date = moment();

var timeBlockValues = [
    {time:'7  AM  ',input:'',id:'A',moment: moment(date, 'H').set('hour', 7), hour: 7},
    {time:'8  AM  ',input:'',id:'B',moment: moment(date, 'H').set('hour', 8), hour: 8},
    {time:'9  AM  ',input:'',id:'C',moment: moment(date, 'H').set('hour', 9), hour: 9},
    {time:'10AM  ',input:'',id:'D',moment: moment(date, 'H').set('hour', 10), hour: 10},
    {time:'11AM  ',input:'',id:'E',moment: moment(date, 'H').set('hour', 11), hour: 11},
    {time:'12PM  ',input:'',id:'F',moment: moment(date, 'H').set('hour', 12), hour: 12},
    {time:'1  PM  ',input:'',id:'G',moment: moment(date, 'H').set('hour', 13), hour: 13},
    {time:'2  PM  ',input:'',id:'H',moment: moment(date, 'H').set('hour', 14), hour: 14},
    {time:'3  PM  ',input:'',id:'I',moment: moment(date, 'H').set('hour', 15), hour: 15},
    {time:'4  PM  ',input:'',id:'J',moment: moment(date, 'H').set('hour', 16), hour: 16},
    {time:'5  PM  ',input:'',id:'K',moment: moment(date, 'H').set('hour', 17), hour: 17},
    {time:'6  PM  ',input:'',id:'L',moment: moment(date, 'H').set('hour', 18), hour: 18},
    {time:'7  PM  ',input:'',id:'M',moment: moment(date, 'H').set('hour', 19), hour: 19}
];

var startUp = function() {
    currentDayEl();
    timeBlocks();
    auditBlocks();
};

var currentDayEl = function() {
    // view current date in header
    $('#currentDay').text(moment().format('dddd LL'));
    return;
};

var timeBlocks = function() {
    // loop timeBlockValues to set appropriate amount of blocks
    $.each (timeBlockValues, function(i) {

        var timeBlockEl = $('.container');

        //create time blocks by hour
        blockEl = $('<div>')
             .addClass('row time-block')
             // add p, textarea and button elements to div
             .html('<p class="hour">' + timeBlockValues[i].time + '</p>'
                    + '<textarea class="description future" id="input' + timeBlockValues[i].id + '"/>'              
                    + '<button class="saveBtn" id="btn' + timeBlockValues[i].id + '"></button>'
             )         
        
        // append blocks to container
        timeBlockEl.append(blockEl);
    });
}; 

// color code blocks
var auditBlocks = function() {
    // loop through blocks to see if past, current or future
    $.each (timeBlockValues, function(i) {
        
        // set time (hour) to timeBlockValue[i].hour    
        var time = moment(date, 'H').set('hour', timeBlockValues[i].hour);

        // if time is current hour
        if (moment(date, 'H').isSame(time)) {
            $('#input' + timeBlockValues[i].id).removeClass('future')
            $('#input' + timeBlockValues[i].id).addClass('present'); 
        }

        // if time is in the past
        else if (moment().isAfter(timeBlockValues[i].moment)) {
            $('#input' + timeBlockValues[i].id).removeClass('future present');
            $('#input' + timeBlockValues[i].id).addClass('past'); 
        }
    });
};

startUp();
