require('./style.scss');

class Init{
    constructor(name){
        console.log(`Olá ${name}`);
        
        let partial = require('./partial.html');

        let app = document.getElementById('app');
        app.innerHTML = partial;

    }
}

new Init('Carlos');
