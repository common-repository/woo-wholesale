var j = jQuery.noConflict();
j(document).ready(function () {
    j('#_vedows_status').click(function () {

        if (this.checked)
            j('#checkuncheck').fadeIn('slow');
        else
            j('#checkuncheck').fadeOut('slow');
    })

    j(".add-rowWS").click(function () {
        var markup = '<tr><td><input type="number" name="_vedows_wholesale[qty][]" value=""></td><td><input type="text" name="_vedows_wholesale[price][]" value=""></td><td><input type="button" class="delete-row" value="X"></td></tr>';

        j("#inputWS tbody").append(markup);
    });

    j("#inputWS").on('click', '.delete-row', function () {
        j(this).parent().parent().remove();
    });

});

