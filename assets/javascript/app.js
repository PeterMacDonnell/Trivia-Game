$(document).ready(function() {
// variables
var countdown = 60;
var forTheInterval;
var numberCorrect = 0;
var numberWrong = 0;


//Function to start the countdown
function run() {
    forTheInterval = setInterval(decrement, 1000);
}

//Hide the questions and other contents
$(window).on("load", hide);

$('#start').on('click', function(){
    $(this).hide();
    show();
    run();
});

$('#done').on('click', function(){
    $('#start').hide();
    hide();
    resultsHere();
    stop();
});


//Stuff for the results page
function resultsHere(){
    var alldone = $('<h2>').html('Great job you finished!');
    var answersCorrect = $('<p>').html('Correct answers: ' + numberCorrect);
    var answersWrong = $('<p>').html('Incorrect answers: ' + numberWrong);
    
    var newclass= $('<div class="col-lg-4 col-lg-offset-4 text-center" id="summary">');
    newclass.append(alldone);
    newclass.append(answersCorrect);
    newclass.append(answersWrong);
    $('.row:nth(2)').append(newclass);
}

function decrement() {
    
    countdown--;
     
     //  Show the number in the #show-number tag.
     $("#timer").html(" " + countdown + " seconds");
    
    //  Once countdown hits one...
    if (countdown === 1) {
        $("#timer").html(" " + countdown + " second");
    }
      //  Once countdown hits zero...
    else if (countdown === 0) {
        //  ...run the stop function.
        $('#start').hide();
        hide();
        resultsHere();
        stop();
    }
}

function stop() {
    clearInterval(forTheInterval);
}


//This function will hide some contents
function hide(){
    $('.form-group').hide();
    $('#time').hide();
    $('#done').hide();
}

//This function will hide some contents
function show() {
    $('.form-group').show();
    $('#time').show();
    $('#done').show();
}

//to calculate good and bad answers
$('input[type=radio]').on("change", function() {
   numberCorrect =  $('input[value=goodanswer]:checked').length;
   numberWrong = $('input[value=wrong]:checked').length;
});

});













// I scraped the below approach, I was attempting the harder assignment. Can be disregarded.


// var = forTheTimer;
// var totalTime = 120000;

// function timeTheQuiz (){
//     $(".starting-button").on("click", function() {
//         forTheTimer = setInterval(decrement, totalTime,function() {

//             $("#displayTimer").text(totalTime);

//             if(totalTime = 0){
//             alert("You've either run out of time or finished my quiz. Either way thanks for playing!");
//             }
            
// }
//     }}




// var theQuestions = [
// {
// question: "In China, many languages and dialects are spoken. Which is most prevalent?",
// answers: ["Cantonese", "Hakka", "English", "Mandarin"],
// correctAnswer: [3],
// picture: "assets/images/wanmei.gif",
// rightComment:"Perfect!完美！",
// wrongComment:"Try again next time!",
// unansweredComment: "Times up!没时间了！"
// },

// {
//     question: "One of the most complicated Chinese characters still used is pronounced 'Biang', it has an astonishing 58 strokes and cannot by typed. What does it mean?",
//     answers: ["It's a kind of noodle", "It represents the stress of the human condition", "It is a slang word for poop.", "It is a traditional way to say goodbye."],
//     correctAnswer: [0],
//     picture: "assets/images/biang.gif",
//     rightComment:"Right on! 我们去吃面吧！",
//     wrongComment:"C'mon man! Do you even like noodles?",
//     unansweredComment: "Times up!没时间了！"
// },

// {
//     question: "One of the following numbers is culturally understood to be very unlucky. Which is it?",
//     answers: ["2 because it can also mean evil", "4 because it sounds a lot like the word for death", "16 because it sounds like the word for Japan", "1 because it is thought to be a 'lonely' number"],
//     correctAnswer: [1],
//     picture: "assets/images/zombies.gif",
//     rightComment:"You got it! Keep it up加油！",
//     wrongComment:"Nope! But now you know! 加油！",
//     unansweredComment: "Times up!没时间了！"

// },

// {
//     question: "What is the most widely used 'superapp' in China, used to communicate, blog, pay for things, make reservations, etc?",
// answers: ["Pleco", "RenRen人人", "QQ", "WeChat微信"],
// correctAnswer: [3],
// picture: "assets/images/wechat-icon.gif",
// rightComment:"Awesome! 你有没有看过你女友刚才给你发的呢？",
// wrongComment:"Dude its obviously WeChat! WeChat is the bomb!",
// unansweredComment: "Times up!没时间了！"
// },

// {
//     question: "Of the following, which is traditionally associated with Beijing?",
// answers: ["Kung-Pao Chicken宫保鸡丁", "Beef Noodle Soup牛肉面", "Peking Duck北京烤鸭", "Pork fat over rice回锅肉盖饭"],
// correctAnswer: [2],
// picture: "assets/images/duck.gif",
// rightComment:"You're right! Good job哎呀我饿了。。。",
// wrongComment:"But I gave such a big hint! Peking Duck!哎哟哦哦哦哦哦哦",
// unansweredComment: "Times up!没时间了！"
// }];






