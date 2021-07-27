let imgarr=["songs/song1img.jpg","songs/song2img.jpg","songs/song3img.jpg","songs/song4img.jpg","songs/song5img.jpg"]
let songarr=["songs/song1.mp3","songs/song2.mp3","songs/song3.mp3","songs/song4.mp3","songs/song5.mp3"]

var no=0

function next()
{
    no=no+1
    if (no<=4){
        document.getElementById('dp').src = imgarr[no];
        document.getElementById('sng').src = songarr[no];
    }
    else{
        no=0
        document.getElementById('dp').src = imgarr[no];
        document.getElementById('sng').src = songarr[no];
    }
}

function previous()
{
    no=no-1
    if (no>=0){
        document.getElementById('dp').src = imgarr[no];
        document.getElementById('sng').src = songarr[no];
    }
    else{
        no=4
        document.getElementById('dp').src = imgarr[no];
        document.getElementById('sng').src = songarr[no];
    }
}