# GifMeme [![NPM Version](https://img.shields.io/npm/v/gifmeme.svg?style=flat)](https://www.npmjs.org/package/gifmeme)
Node.js module for creating a meme from an animated gif will work with static images too such as jpeg and png.

# To Install
        $ npm install gifmeme

# Requirements
Nodejs 6.4.0+ (utilizes es6 promises.)

GifMeme is utilizing ImageMagick to finalize the output of the animated gif.  Please insure that ImageMagick is installed locally.

# API

* init on require - eg require ('gifmeme')(outputDirectoryName, fileAppendedName)

    outputDirectoryName (optional, default is './tmp') is where the meme file will be written to on your file system.

    fileAppendedName (optional, default is '-meme') is a string that will be appended to the original file name. eg - if fileAppendedName = '-meme', photo.png will write out to photo-meme.png

* generate(file, topText, bottomText)

    file is the filename and location - eg. __dirname + 'public/images/photo.png'

    topText and bottomText are the text that will be overlayed on the top and bottom of the photo respectively.

    this function will return a promise with the filename of the generated meme.  If an error occurs the promise will throw a rejection with the error.

# Example Code
    var gifmeme = require('gifmeme')();
    try{
        gifmeme.generate('./test.gif', 'Top of Meme', 'Bottom of Meme').then(memeFilename => {
            console.log('Meme Generated to :' + memeFilename);
        });
    } catch(e){
        console.log(e);
    }

#Test Example

You can simply run the test.js file included with this repository

    > node test.js
