let playing;
let button, muteButton;
let muted;
let volumeDownButton, volumeUpButton;
let myCurrentVolume = 1;
let myVideos = [];


function setup() {

    myVideos.push(new myVideo("assets/face.mp4", screen.width/2, 0, 400, 300));
    myVideos.push(new myVideo("assets/mid.mp4", screen.width/2, 300, 400, 300));
    myVideos.push(new myVideo("assets/feet.mp4", screen.width/2, 600, 400, 300));

    createCanvas(screen.width, screen.height);
    background('black');

    textSize(40);
    fill('white');
    text("Strange Place", 75, 50);
    text("By: Mary Primeau", 50, 90);

    button = createButton('start');
    button.position(182, 400);
    muteButton = createButton('mute');
    muteButton.position(180, 430);

    volumeDownButton = createButton('volume down');
    volumeDownButton.position(150, 460);

    volumeUpButton = createButton('volume up');
    volumeUpButton.position(160, 490);

    button.mousePressed(playVideo);
    muteButton.mousePressed(audioVolume);
    volumeDownButton.mousePressed(volumeDown);
    volumeUpButton.mousePressed(volumeUp);

    for (let i = 0; i < myVideos.length; i++) {
        let tempVideo = createVideo([myVideos[i].theVideoPath]);
        tempVideo.size(myVideos[i].theW, myVideos[i].theH);
        tempVideo.position(myVideos[i].theX, myVideos[i].theY);
        myVideos[i].settheVideoObject(tempVideo);
    }

}

function volumeDown() {
    myCurrentVolume -= .1;
    if (myCurrentVolume <= 0) {
        myCurrentVolume = 0;
    }
    for (let i = 0; i < myVideos.length; i++) {
        let temp = myVideos[i].theVideoObject;
        temp.volume(myCurrentVolume);
    }

}

function volumeUp() {
    myCurrentVolume += .1;
    if (myCurrentVolume >= 1) {
        myCurrentVolume = 1;
    }

    for (let i = 0; i < myVideos.length; i++) {
        let temp = myVideos[i].theVideoObject;
        temp.volume(myCurrentVolume);
    }

}

function audioVolume() {
    if (muted) {
        muteButton.html('unmute')
        for (let i = 0; i < myVideos.length; i++) {
            let temp = myVideos[i].theVideoObject;
            temp.volume(0);
        }

    } else {
        muteButton.html('mute');
        for (let i = 0; i < myVideos.length; i++) {
            let temp = myVideos[i].theVideoObject;
            temp.volume(myCurrentVolume);

        }

    }

    muted = !muted;

}

function playVideo() {

    if (playing) {
        for (let i = 0; i < myVideos.length; i++) {
            let temp = myVideos[i].theVideoObject;
            temp.pause();
            temp.volume(1);
        }
        button.html('start');
        playing = false;
    } else {
        for (let i = 0; i < myVideos.length; i++) {
            let temp = myVideos[i].theVideoObject;
            temp.loop();
            temp.volume(1);
        }

        button.html('stop');
        playing = true;

    }

}