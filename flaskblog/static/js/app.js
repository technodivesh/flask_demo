
// (function () {
//   // body of the function
// 	console.log("Hello");

// 	// $( "#progressbar" ).progressbar({
//  //      value: 37
//  //    });

//  	$('#mybutton').on('click',function(){
//  		console.log("testing");
//  		$('#content').load("partials/demopar.html");
//  	});


//  	$("#loadContent").click(function(){
//     // $.get("<url to partial>", function(data){$("#emailToContent").html(data);}
//  	$('#content').load("new.html");
//   });



// })();




$(document).ready(function(){


	console.log("Hello");

   
	$('#mybutton').on('click',function(){
 		console.log("testing");
 		$('#content').load("/partials/demopar.html");
 	});

});