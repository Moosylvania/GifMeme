var gifmeme = require('./index')();

try{
    gifmeme.generate('./test.gif', 'Top of My Meme', 'Bottom of my Meme YEAH!!!!').then(memeFilename =>{
        console.log(memeFilename);
    });
} catch(e){
    console.log(e);
}
