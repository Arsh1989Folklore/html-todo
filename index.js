
let counter = 1;
$('#div2').on('keyup', (event) => {
    if (event.key === 'Enter') {
        let textareaContent = $('textarea').val();
        addList();
        $('textarea').val(null);
    }
});

function addList() {
    $('.unli').addClass('added');
    let li = document.createElement('li');
    let classLi = "check" + counter;
    $(li).addClass(classLi);
    classLi = "." + classLi;
    let classCro = "cross" + counter;
    $(li).addClass(classCro);
    classCro = "." + classCro;
    li.innerHTML = $('textarea').val();
    $('.unli').prepend(li);


    let span = document.createElement('span');
    let checkBox = document.createElement('input');
    let classcheckbox = "check"+counter;
    $(checkBox).addClass(classcheckbox);
    classcheckbox = "." + classcheckbox;
    $(checkBox).attr('type', 'checkbox');
    span.append(checkBox);

    let cross = document.createElement('button');
    cross.innerHTML = "&#x2718;";
    let classcross = "cross" + counter;
    $(cross).addClass(classcross);
    classcross = "." + classcross;
    span.append(cross);
    li.append(span);
    //console.log(checkBox);
    counter++;
}
if ($('.unli').hasClass('added')) {
    document.querySelector('.check').addEventListener('change', () => {
        alert();
    })
}


document.querySelector('#div1').addEventListener('click',(event)=>
{
    //console.log(event);
    if(event.srcElement.tagName === 'INPUT')
    {
        let classofchecked = "." + event.srcElement.classList[0];
        if (event.srcElement.checked === true)
        {  
            $(classofchecked).addClass('check');
           // console.log(event.srcElement.className);
        }
        
       else
       {
            $(classofchecked).removeClass('check');
           // console.log(event.srcElement.className);
       }
        //console.log(classofchecked);
        

    }
    if (event.srcElement.tagName === 'BUTTON')
    {
        let classofchecked = "." + event.srcElement.classList[0];
        $(classofchecked).addClass('remove');
    }
})