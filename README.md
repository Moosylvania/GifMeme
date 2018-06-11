# GifMeme [![NPM Version](https://img.shields.io/npm/v/gifmeme.svg?style=flat)](https://www.npmjs.org/package/gifmeme)
Node.js module for creating a meme from an animated gif will work with static images too such as jpeg and png.

# To Install
        $ npm install gifmeme

# Requirements
GifMeme is utilizing ImageMagick to finalize the output of the animated gif.  Please insure that ImageMagick is installed locally.

# API

* init(outputDirectoryName, fileAppendedName) <br/> The outputDirectoryName is where the meme file will be written to on your file system.<br/><br/>fileAppendedName is a string that will be appended to the original file name. eg - if fileAppendedName = '-meme', photo.png will write out to photo-meme.png
* generate(file, topText, bottomText, callback)<br/>file is the filename and location - eg. __dirname + 'public/images/photo.png'<br/><br/>topText and bottomText are the text that will be overlayed on the top and bottom of the photo respectively.<br/> callback will return the filename or an error

# Example Uses -
    var gifmeme = require('gifmeme');
    gifmeme.init('./tmp', '-meme');
    gifmeme.generate('./photo.gif', 'Top of Meme', 'Bottom of Meme', function(error, memefilename){
        if(error){
            console.log(error);
        } else {
            console.log(memefilename);
        }
    });
