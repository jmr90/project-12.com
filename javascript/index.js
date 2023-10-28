const questions = [
    'What does Snuffles the family dog rename himself as after Rick gives him an intelligence-boosting helmet?'
];

const answers = [
    'Snowball'
];

const options = [
    ['Snuggles', 'Snowball', 'Sleighbells', 'Slushy']
];

const correct = 'Correct!';
const incorrect = 'Incorrect';
const noAnswer = 'Please select an answer';

$('.1').on('click', function() {
    $('.1').addClass('focus');
    $('.2').removeClass('focus');
    $('.3').removeClass('focus');
    $('.4').removeClass('focus');
});

$('.2').on('click', function() {
    $('.2').addClass('focus');
    $('.1').removeClass('focus');
    $('.3').removeClass('focus');
    $('.4').removeClass('focus');
});

$('.3').on('click', function() {
    $('.3').addClass('focus');
    $('.1').removeClass('focus');
    $('.2').removeClass('focus');
    $('.4').removeClass('focus');
});

$('.4').on('click', function() {
    $('.4').addClass('focus');
    $('.1').removeClass('focus');
    $('.2').removeClass('focus');
    $('.3').removeClass('focus');
});

function startQuiz() {
    $('#question').html(questions[0]);
    $('.1').html(options[0][0]);
    $('.2').html(options[0][1]);
    $('.3').html(options[0][2]);
    $('.4').html(options[0][3]);
}


startQuiz();

$('.submit').on('click', function() {
    if ($('.submit').text() == 'Submit') {
        if (!$('.option').hasClass('focus')) {
            $('#feedback').html(noAnswer);
            $('#feedback').show();
        } else if ($('.focus').text() == answers[0]) {
            $('.option').prop('disabled',true);
            $('.submit').html('Reset');
            $('.focus').addClass('correct');
            $('#feedback').html(correct);
            $('#feedback').show();
            $('#feedback').addClass('correct');
        } else {
            $('.option').prop("disabled",true);
            $('.submit').html('Reset');
            $('.focus').addClass('incorrect');
            $('#feedback').html(incorrect);
            $('#feedback').show();
            $('#feedback').addClass('incorrect');
        }
    } else {
        $('#feedback').html('');
        $('#feedback').hide();
        $('#feedback').removeClass('correct incorrect');
        $('.option').removeClass('correct incorrect focus');
        $('.option').prop('disabled', false);
        $('.submit').html('Submit');
    }

});