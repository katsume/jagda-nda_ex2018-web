require('babel-polyfill');

const   $= require('jquery');

$(()=>{

    const   page= new ({
                index: require('./index')
            }[__page__])();

});
