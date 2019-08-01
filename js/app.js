$('.addSkills').on('click', function(evt){
        var skills = $("#usrInput").val();
        var markup = 
        `<tr>
            <td><button class="remove"> X </button> ${skills}</td></tr>
        </tr>`

    $('#skills tbody').append(markup);

});

$('#skills tbody').on('click', '.remove', function() {
    $(this).parents('tr').remove();
});



