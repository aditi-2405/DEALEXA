var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition(),

var Textbox = $('#textbox');
var StopTextbox = $('#stoptextbox');
var instructions
$('instructions
var dealNameId = $('#dealName');
var Content
var issuerValue-""
var dealName=
recognition.continuous = true;
recognition.interimResults = false;
recognition.onresult function(event) f
	var current = debugger;
	var transcript I event.results[current][0].transcript:
			Content =transcript.toLowerCase(),
		if(content. includes("click") 8& Content.includes("ADD")
		AddText()
		else if(Content.includes("click") && Content.includes("stop"))
		recognition.stop().
		else if(Content.includes("issue"))
		setissueVal(Content);	 
		else if(Content includes("deal name"))
		setdealName (Content);
		else
		Textbox.val(Content);
	recognition.stop();
setTimeout(() => ( recognition.start(); ), 1000);
};
recognition.onstart = function
instructions.text('Voice recognition is ON.'),
recognition.onspeechend = function(){
instructions.text('No activity.');
}
recognition.onerror = function(event){
if(event.error == 'no-speech'){
instructions.text('Try again.');
}
}
$('#start-btn').on('click',function(e){
	if (Content.length){
	Content="";
	}
	Textbox.val("")
	recognition.start();
});

Textbox.on('input', function(){
Content = $(this).val();
})
$('#clear-btn').on('click`, function(e) {
Textbox.val("")
});
$('#stop-btn ).on('click' , function(e){
	StopTextbox.val( "Dealeexa stop")
	StopTextbox.attr("style", "display:block)
	recognition.stop();
});
function AddText(){
	
	var data= "Deal saved successfully";
	//data+=dealName;
	$('#selVal').text(data)
	Content="";
	Textbox.val("")
}
function setissueVal(content)
{
	if(Content.includes("yash"))
	{
		$("div.issuerVal select").val("one");
		issuerValue="yash";
	}
	else if(Content.includes("Aditi"))
	{
		$("div.issuerVal select").val("two");
		issuerValue="Aditi";
	}
	else if(Content.includes("Rohit"))
	{
	$("div.issuerVal select").val("three");
	issuerValue="rohit';
	}
	Content="":
	
}
function setdealName(content)
{
	let str = content.substring(content.lastIndexof("name')+4).trim();
	$('#dealName').val(str);
	Content="";
}