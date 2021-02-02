function preload(){

}

function setup(){
canvas=createCanvas(350,350)
canvas=canvas.center()
video=createCapture(VIDEO)
video.hide()

classifier=ml5.imageClassifier("MobileNet" ,loaded)

}


function loaded(){
console.log("model loaded")
}



function draw(){
image(video,0,0,350,350)
classifier.classify(video,getresults)

}

function getresults (error,results) {
    if (error) {
        console.log(error) 

    }
    else {
        console.log(results)
        document.getElementById("objectspan").innerHTML=results[0].label
        document.getElementById("accuracyspan").innerHTML=results[0].confidence.toFixed(3)*100+" %"
        

    }
}
