//Checks local storage and pulls any saved events
function displyEvents(){
    $('#9 .description').val(localStorage.getItem('9'));
    $('#10 .description').val(localStorage.getItem('10'));
    $('#11 .description').val(localStorage.getItem('11'));
    $('#12 .description').val(localStorage.getItem('12'));
    $('#13 .description').val(localStorage.getItem('13'));
    $('#14 .description').val(localStorage.getItem('14'));
    $('#15 .description').val(localStorage.getItem('15'));
    $('#16 .description').val(localStorage.getItem('16'));
    $('#17 .description').val(localStorage.getItem('17'));
}

function saveEvent(event){
    var description = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');

    localStorage.setItem(time, description)
}

window.addEventListener('load', (event) => {
    $('.saveBtn').on('click', saveEvent);
});