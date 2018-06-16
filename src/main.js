
class Init{
    constructor(name){
        console.log(`Olá ${name}`);
        let component = require('./template/')
        let app = document.getElementById('app');
        app.innerHTML = component.template;
        component.action();
    }
}

new Init('Carlos');
