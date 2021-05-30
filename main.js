prediction_1=""
prediction_2=""
Webcam.set({
    width: 350, 
    height: 350,
    image_format:'png',
    png_quality: 90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function captureimage(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">';

    });
}
console.log('ml5 version',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/oAjZn2j3x//model.json', modelloaded);
function modelloaded(){
    console.log("modelloaded")
}
function speak(){
    var synth=window.speechSynthesis
    speak_data1="The first prediction is "+prediction_1
    speak_data2="The first prediction is "+prediction_2
    utterthis=new SpeechSynthesisUtterance(speak_data1+speak_data2)
    synth.speak(utterthis);
}