console.log('JS is properly sourced')
let clickCount=0;

$('document').ready(function(){
    console.log('jquery is working');
    $('#generateButton').on('click', function(){
        appendDiv()
    })
    $('#appendHereDiv').on('click', '.swapButton', function(){
       $(this).parent().toggleClass("swapClass");

    })
    $('#appendHereDiv').on('click', '.deleteButton', function(){
        $(this).parent().remove();
    })
})

function appendDiv() {
    clickCount++;
    console.log(clickCount);
    $('#appendHereDiv').append('<div class="newDivFromGenerator" data-click-count="'+clickCount+'"><p>Click Count: '+ clickCount +'</p>'+
            '<button class="swapButton" type="button">Swap</button>'+
            '<button class="deleteButton" type="button">Delete</button></div>'
    );
}


