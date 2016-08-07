let data = {};

const showData = function(el) {
  return function() {
    el.innerHTML = data.message || 'No message';
  };
}

const saveData = function(newData) {
  data = newData;
}

function loadComponent () {
  const element = document.createElement('div'); 
  
  const title = document.createElement('h1');
  title.className = 'pure-button';
  title.innerHTML = 'Hello world!!';
  element.appendChild(title);

  const buttonShow = document.createElement('button');
  buttonShow.type= 'button';
  buttonShow.innerHTML = 'Show';
  buttonShow.onclick = showData(title);
  element.appendChild(buttonShow);

  const buttonLoadData = document.createElement('button');
  buttonLoadData.type= 'button';
  buttonLoadData.innerHTML = 'Load Data';
  buttonLoadData.onclick = function() {
    try {
      require.ensure(['./data'], function(require) {
        const nData = require('./data');
        console.log('Data loadaded: ', nData);
        saveData(nData);
        buttonLoadData.remove();
      });
    } catch(err) {
      console.error('Error load data: ', err);
    }
  };
  element.appendChild(buttonLoadData);

  return element;
}

module.exports = loadComponent;