$(document).ready(function() {
    getList();
    var sTodo;
    $('#add_btn').click(function() {
        sTodo = $('#todo').val();
        
        $.ajax({
            url:'/add/todo',
            method:'POST',
            data:{data:sTodo},
            dataType:'json',
            success: function(data) {
                $('#todo').val('');
                getList();
            },
            error: function(data) {
            }
        });
    });
});

function getList() {
    var sHTMLBody = '';
    $.ajax({
        url:'/show/todo',
        method:'GET',
        dataType:'json',
        success: function(aData) {
            $('#table_todo_body').empty();
            aData.forEach((oElement: any) => {
                sHTMLBody = `<tr> <td> ${oElement.todo_name} </td> <td> Update Delete </td> </tr>`;
                $('#table_todo_body').append(sHTMLBody);
            });
        },
        error: function(data) {
        }
    });
}