var fs = require('fs');
var pixelWidth = require('string-pixel-width');
var gm = require('gm').subClass({imageMagick: true});

var outputDirectory = './tmp';
var appendedFilename = '-meme';

var endsWith = function(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
};

var getFontSize = function(text, width, height) {
    var fontSize = 100;
    var textWidth = 0;

    while(1) {
        textWidth = pixelWidth(text, {size:fontSize, font:'impact'});
        if( ( textWidth < (width-15)) && (fontSize < height/10) ) {
            break;
        }
        fontSize-=2;
    }
    console.log(fontSize);
    return {fontSize:fontSize, width:textWidth};
};

var gifmeme = module.exports;

gifmeme.init = function(output, append){
    outputDirectory = output;
    appendedFilename = append;
};

gifmeme.generate = function(file, topText, bottomText, next){

    if(!fs.existsSync(outputDirectory)){
        fs.mkdirSync(outputDirectory);
    }

    if(!endsWith(outputDirectory, '/')){
        outputDirectory = outputDirectory + '/';
    }

    var memefilename = file.split('/');
    memefilename = memefilename[memefilename.length-1];

    var parts = memefilename.split('.');
    var ext = parts.pop();
    parts.push(appendedFilename+'.'+ext);

    memefilename = parts.join('');

    topText = topText.toUpperCase();
    bottomText = bottomText.toUpperCase();

    gm(file).size(function(err, size){
        if(err){
            return next(err);
        }

        var width = size.width;
        var height = size.height;

        var topFontSize = getFontSize(topText, width, height);
        var bottomFontSize = getFontSize(bottomText, width, height);

        gm(file).coalesce()
            .font(__dirname+"/impact.ttf")
            .stroke("#000000")
            .fill('#ffffff')
            .fontSize(topFontSize.fontSize)
            .strokeWidth(1.5)
            .drawText(0, 15,  topText, "North")
            .fontSize(bottomFontSize.fontSize)
            .drawText(0, height-15-bottomFontSize.fontSize, bottomText, "North")
            .write(outputDirectory + memefilename, function (err) {
                if (err) {
                    return next(err);
                } else {
                    return next(null, outputDirectory + memefilename);
                }
        });
    });


};
