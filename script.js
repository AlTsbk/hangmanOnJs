let words = ['тумбочка','полка','бутылка','чашка','крыша','кровать','шампунь','дезодарант','тарелка','сковорода','ложка',
'вилка','штаны','туфли','книга','школа','университет','дверь','потолок','майнкрафт'];

let keyboard = document.querySelector('.keyboard');
let word = document.querySelector('.word');
let hangman = document.querySelector('.hangman img');
let keyword = words[Math.floor(Math.random()*20)];
let life = 6;
let correctLetters = 0;

function letterChoose(){
    let letter = this.textContent.toLowerCase();
    this.removeEventListener('click',letterChoose);
    
    this.classList.remove('key');
    this.classList.add('usedKey'); 
    if(keyword.indexOf(letter) > -1){
        let l = document.querySelectorAll('.' + letter);
        l.forEach((lett)=>{
            lett.classList.remove('textCell');
            lett.classList.add('letter');
            lett.textContent = keyword[keyword.indexOf(letter)];
            correctLetters++;
        });        
        if(correctLetters == keyword.length){
            keyboard.innerHTML = "<h1>Вы победили</h1></br><p>Что бы начать заново нажмите f5</p>";
            keyboard.style.display = "block"
            keyboard.style.color = "#43a047";
        }
    }else{
        life--;
        hangman.src = `img/${6-life}.png`;
        if(life == 0){
            keyboard.innerHTML = "<h1>Вы проиграли</h1></br><p>Что бы начать заново нажмите f5</p>";
            keyboard.style.display = "block"
            keyboard.style.color = "#e53935";
            
        }
    }  
}

for(let i = 'а'.charCodeAt(0); i <= 'я'.charCodeAt(0); i++){
    let letter = document.createElement('div');
    letter.textContent = String.fromCharCode(i).toUpperCase();
    letter.classList.add('key');
    letter.addEventListener('click',letterChoose);
    keyboard.appendChild(letter);
}


for(let i = 0; i < keyword.length; i++){
    let textCell = document.createElement('div');
    textCell.classList.add('textCell');
    textCell.classList.add(keyword[i]);
    word.appendChild(textCell);
}

