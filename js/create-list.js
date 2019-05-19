function createList(inp, out) {
    const v = $(inp).val().trim();
    if (v != "") {
        $(out).append(
            `<span data="${v}" class="lists-content badge badge-pill badge-info ml-2 mt-2">
                ${v}
                <i class="fas fa-times float-right ml-2 remove-me"></i>
            </span >`
        );
        $(inp).val('');
    }
}

function getList() {
    let a = $('.lists-content');
    let b = [];

    for(let i = 0; i < a.length; i++) 
        b.push($(a[i]).attr('data'));

    return b;
}

function clean() {
    $('.lists-content').remove();
}

function createResult(time, data) {
    $('.card').first().hide();
    $('.header-body').append(
        `<div class="card col-md-12 r-card">
            <div class="card-body">
                <h5 class="card-title">binary search result</h5>
                <label>Time: ${time}</label>
                <br/>
                <label>${(data != -1) ? 'Found' : 'not Found'}</label>
                <div class="col-md-12 text-right">
                    <button id="goBack" type="button" class="btn btn-info">Back</button>
                </div>
            </div>
        </div>`
    )
}

$(document).on('click', '#goBack', function () {
    $('.r-card').remove();
    $('.card').show();
    $('input').val('');
})

$(document).on('keyup', '#listCreator', function (e) {
    if (e.keyCode === 13) createList('#listCreator', '.lists')
})

$(document).on('click', '.remove-me', function () {
    $(this).parent().remove();
})