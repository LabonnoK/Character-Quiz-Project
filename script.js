$("button").click(function() {
    var number = $(".number").val();
    var city = $(".weather").val();
    
if( parseInt(number)<6 && city=== "New York"){
    $(".statements").show();
    $(".statements").text("••••••YOU ARE MONICA!••••••");
    $(".statements").append("<img src='https://media4.giphy.com/media/kEKXtLMApfVXsqG1RV/giphy.gif'>");

}else if( parseInt(number)<6 && city=== "LA"){
    $(".statements").show();
    $(".statements").text("••••••RACHEL!••••••");
    $(".statements").append("<img src='https://media2.giphy.com/media/w5M9QgelugIJG/giphy.gif'>");

}else if( parseInt(number)>6 && city=== "LA"){
    $(".statements").show();
    $(".statements").text("••••••JOEY!••••••");
    $(".statements").append("<img src='https://i.pinimg.com/originals/6c/1c/5a/6c1c5a76db0dd7f80075be0f022319df.gif'>");

}else if( parseInt(number)>6 && city=== "New York"){
    $(".statements").show();
    $(".statements").text("••••••ROSS!••••••");
    $(".statements").append("<img src='https://media1.tenor.com/images/d7aca38930ddd378265302dce77bd6b3/tenor.gif?itemid=15694188'>");

}else if(  parseInt(number)===6 && city=== "New York"){
    $(".statements").show();
    $(".statements").text("••••••CHANDLER!••••••");
    $(".statements").append("<img src='https://media0.giphy.com/media/Su7Bo9MMnyl0ZE263z/source.gif'>");

}else if(  parseInt(number)===6 && city=== "LA"){
    $(".statements").show();
    $(".statements").text("••••••PHOEBE!•••••• ");
    $(".statements").append("<img src='https://d2j1wkp1bavyfs.cloudfront.net/wp-content/uploads/2018/07/tumblr_nfujixUjqk1shdtkfo1_500.gif'>");
}

});

var counter = 0;
$("button").click(function(){
    counter = counter + 1;
    $(".counter").text("THE BUTTON WAS CLICKED " + counter + " TIME(S)");
});




