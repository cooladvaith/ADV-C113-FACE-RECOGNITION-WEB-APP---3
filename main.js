 Webcam.set({
    width:350,
    hieght:300,
    image_format: "png",
    png_quality:90

 })

 camera = document.getElementById("camera");

Webcam.attach( '#camera' );

function take_snapeshot()
{
    webcam.snap(function(dat_uri) {
        document.getElementById("result").innerHTMLHTML = '<img id="captured_image" src=" '+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/sX8Bw4ZmX/model.json',modelLoaded);

function modelLoaded() {
  console.log('Modal Loaded!');
}