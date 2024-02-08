
$('.verify').on('click', function() {
    $('.verify').css('color', '#0C8969');
});
$('.error').on('click', function() {
    $('.error-msg1').toggleClass('show');
    $(window).scrollTop(0);
});

$('.add-person').on('click', function() {
    $('.error').css('border', ' 1px solid #E23232');
});
$('.profile').on('click', function() {
    $('.list').toggleClass('hidden');
});

$('.chat-open').on('click', function() {
    $('.chat-close').toggleClass('hidden');
});
$('#yes-button').on('click', function() {
    $('.undefined').addClass('hidden');
    $('#yes-modal').addClass('hidden');
});
