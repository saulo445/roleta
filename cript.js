// Configurações e variáveis globais
const places = [
    { 
        id: "tacho", 
        name: "Tacho do Céu", 
        address: "Limeira, SP",
        image: "https://lh3.googleusercontent.com/p/AF1QipOJ9Q65Thl1YCPBKnrxMIoHZJrwkBIPqV6eh8oG=w289-h312-n-k-no",
        imageLarge: "https://lh3.googleusercontent.com/p/AF1QipOJ9Q65Thl1YCPBKnrxMIoHZJrwkBIPqV6eh8oG=w289-h312-n-k-no",
        color: "#FF6B6B",
        mapsLink: "https://www.google.com/maps?sca_esv=e7bf22627bcd1c5c&output=search&q=tacho+do+ceu+limeira&source=lnms&fbs=AIIjpHxX5k-tONtMCu8aDeA7E5WMdDwGSuc8eBkl8hX51y2q6yZimebQW8AlXqPrTTnqj6FhPo3xYjeCRruM0I_KguaczRNBd799zQ63DSMVI6ZfdOAmp3KKoNqbrRzMja500ATeZm1vh-EZ4gBDF_JI12WHt1zkcmIgBmX8ZCzi7uXnaVZUSpRTY0grVqQ9NDRK92vEBCufzhpFr2bAD4kOasp7M-I9AA&entry=mc&ved=1t:200715&ictx=111"
    },
    { 
        id: "gelato", 
        name: "Georgina Gelato", 
        address: "Limeira, SP",
        image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nq6GYS3v-Dy-21X0_iFyE9FADUFWxhIIWMFlHA4-Fk6sOegUk7Am9SROyL77xIQJpzE1llXJh9RAEDOdtk9hymlQ8v065USohw5CfrfSlqKJySl0gwMbB1qyGlX1wYJpUkFO80j=w289-h312-n-k-no",
        imageLarge: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nq6GYS3v-Dy-21X0_iFyE9FADUFWxhIIWMFlHA4-Fk6sOegUk7Am9SROyL77xIQJpzE1llXJh9RAEDOdtk9hymlQ8v065USohw5CfrfSlqKJySl0gwMbB1qyGlX1wYJpUkFO80j=w289-h312-n-k-no",
        color: "#4ECDC4",
        mapsLink: "https://www.google.com/maps/place/Georgina+Gelato/@-22.5676475,-47.4113653,17z/data=!3m1!4b1!4m6!3m5!1s0x94c8815a5260097b:0xaa9de99c618b852f!8m2!3d-22.5676525!4d-47.4067519!16s%2Fg%2F11rjyv_s1k?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D"
    },
    { 
        id: "shopping", 
        name: "Shopping Center", 
        address: "Limeira, SP",
        image: "https://s2-g1.glbimg.com/PJxSe_bWrErlwoBPEJGaWjN_AYg=/0x0:1600x900/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/t/9/5BFuxTQs6LbPsn7NgdAw/imagem-1.png",
        imageLarge: "https://s2-g1.glbimg.com/PJxSe_bWrErlwoBPEJGaWjN_AYg=/0x0:1600x900/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/t/9/5BFuxTQs6LbPsn7NgdAw/imagem-1.png",
        color: "#45B7D1",
        mapsLink: "https://www.google.com/maps/place/Limeira+Shopping/@-22.533295,-47.3884749,17z/data=!3m1!4b1!4m6!3m5!1s0x94c87e1938a5b14f:0xd05f52e7b2a94b3f!8m2!3d-22.5333!4d-47.3859!16s%2Fg%2F11b7q6qvrd?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D"
    },
    { 
        id: "pizza", 
        name: "Bella Capri", 
        address: "Limeira, SP",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/1b/0f/4e/38/fachada-bella-capri-limeira.jpg",
        imageLarge: "https://media-cdn.tripadvisor.com/media/photo-s/1b/0f/4e/38/fachada-bella-capri-limeira.jpg",
        color: "#F9A602",
        mapsLink: "https://www.google.com/maps/place/Bella+Capri+Pizzaria+-+Limeira/@-22.5552401,-47.4170669,17z/data=!3m2!4b1!5s0x94c8807cd6e23fc7:0xb3874a60afb5ea61!4m6!3m5!1s0x94c881363799dc5b:0x39cc4337a205cefe!8m2!3d-22.5552451!4d-47.4124535!16s%2Fg%2F11g03w_1px?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D"
    },
    { 
        id: "jangada", 
        name: "Restaurante Jangada", 
        address: "Limeira, SP",
        image: "https://images.getinapp.com.br/8ebbea34-ca5f-4d5d-b492-15ae3ca149f8.jpg",
        imageLarge: "https://images.getinapp.com.br/8ebbea34-ca5f-4d5d-b492-15ae3ca149f8.jpg",
        color: "#9B59B6",
        mapsLink: "https://www.google.com/maps/place/Restaurante+Jangada+Limeira/@-22.5351279,-47.38671,17z/data=!3m1!4b1!4m6!3m5!1s0x94c8806451a5338f:0x8fdab000a30a1267!8m2!3d-22.5351279!4d-47.3841351!16s%2Fg%2F1ydntnsny?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D"
    }
];

let selectedPlace = null;
let countdownInterval;
let secondsLeft = 10;
let currentRotation = 0;

// Inicializar a roleta
function initWheel() {
    const wheel = document.getElementById('wheel');
    const angle = 360 / places.length;
    
    // Criar a seta dinâmica
    const pointer = document.createElement('div');
    pointer.className = 'wheel-pointer';
    pointer.innerHTML = '▼';
    pointer.id = 'dynamicPointer';
    
    // Adicionar a seta ao container
    document.querySelector('.wheel-container').appendChild(pointer);
    
    // Criar os itens da roleta
    places.forEach((place, index) => {
        const item = document.createElement('div');
        item.className = 'wheel-item';
        item.id = place.id;
        item.style.transform = `rotate(${index * angle}deg)`;
        item.style.background = place.color;
        
        const content = document.createElement('div');
        content.className = 'wheel-item-content';
        
        const img = document.createElement('img');
        img.className = 'wheel-item-image';
        img.src = place.image;
        img.alt = place.name;
        
        const name = document.createElement('div');
        name.className = 'wheel-item-name';
        name.textContent = place.name;
        
        content.appendChild(img);
        content.appendChild(name);
        item.appendChild(content);
        wheel.appendChild(item);
    });

    // Adicionar evento de clique ao botão
    document.getElementById('spinButton').addEventListener('click', startRoulette);
    
    console.log('Roleta inicializada com sucesso!');
}

// Função principal de sorteio
function startRoulette() {
    // Esconder a seta anterior
    const pointer = document.getElementById('dynamicPointer');
    pointer.classList.remove('visible');
    
    // Resetar seleção anterior
    if (selectedPlace) {
        const prevElement = document.getElementById(selectedPlace.id);
        if (prevElement) {
            prevElement.classList.remove('selected');
        }
    }
    
    // Esconder detalhes do local anterior
    document.getElementById('place-detail').style.display = 'none';
    
    const button = document.getElementById('spinButton');
    button.disabled = true;
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Girando...';
    
    document.getElementById('result').style.display = 'none';
    
    // 1. PRIMEIRO: Sortear um lugar aleatório
    const randomIndex = Math.floor(Math.random() * places.length);
    selectedPlace = places[randomIndex];
    
    console.log("🎯 Resultado sorteado:", selectedPlace.name, "Índice:", randomIndex);
    
    // 2. CALCULAR: Ângulo exato para parar no lugar sorteado
    const wheel = document.getElementById('wheel');
    const totalItems = places.length;
    const degreesPerItem = 360 / totalItems;
    
    // Cálculo preciso do ângulo final
    const extraRotations = 5; // Voltas completas para efeito
    const targetRotation = (extraRotations * 360) + (randomIndex * degreesPerItem) + (360 - 90);
    
    console.log("📐 Ângulo calculado:", targetRotation, "graus");
    
    // 3. APLICAR: A rotação calculada
    wheel.style.transition = 'transform 4s cubic-bezier(0.17, 0.67, 0.21, 0.99)';
    wheel.style.transform = `rotate(${targetRotation}deg)`;
    
    // Quando a roleta parar
    setTimeout(() => {
        // MOSTRAR A SETA quando a roleta parar
        pointer.classList.add('visible');
        
        // Destacar o lugar selecionado
        const selectedElement = document.getElementById(selectedPlace.id);
        if (selectedElement) {
            selectedElement.classList.add('selected');
        }
        
        // Mostrar o resultado
        document.getElementById('selected-place').textContent = selectedPlace.name;
        document.getElementById('result').style.display = 'block';
        
        // Mostrar detalhes do local
        showPlaceDetails(selectedPlace);
        
        // Iniciar a contagem regressiva
        startCountdown();
        
        // Reativar o botão
        button.disabled = false;
        button.innerHTML = '<i class="fas fa-dice"></i> Sortear Novamente!';
        
        // Efeito de confete
        createConfetti();
        
    }, 4000);
}

// Iniciar contagem regressiva
function startCountdown() {
    secondsLeft = 10;
    document.getElementById('timer').textContent = `Confirmando em: ${secondsLeft} segundos`;
    
    clearInterval(countdownInterval);
    countdownInterval = setInterval(() => {
        secondsLeft--;
        document.getElementById('timer').textContent = `Confirmando em: ${secondsLeft} segundos`;
        
        if (secondsLeft <= 0) {
            clearInterval(countdownInterval);
            confirmSelection(selectedPlace);
        }
    }, 1000);
}

// Mostrar detalhes do local sorteado
function showPlaceDetails(place) {
    const detailSection = document.getElementById('place-detail');
    const placeImage = document.getElementById('place-image-large');
    const placeName = document.getElementById('detail-place-name');
    const mapLink = document.getElementById('map-link');
    
    // Preencher os detalhes
    placeImage.src = place.imageLarge;
    placeImage.alt = place.name;
    placeName.textContent = place.name;
    mapLink.href = place.mapsLink;
    
    // Mostrar a seção de detalhes
    detailSection.style.display = 'block';
}

// Confirmar seleção automática
function confirmSelection(place) {
    if (place) {
        alert(`🎉 Combinado! Vamos para ${place.name}! \n\nTe envio uma mensagem para acertarmos os detalhes!`);
    }
}

// Criar efeito de confete
function createConfetti() {
    const confettiCount = 100;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        // Posição aleatória
        confetti.style.left = Math.random() * 100 + 'vw';
        
        // Cor aleatória
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        
        // Animação aleatória
        const duration = Math.random() * 3 + 2;
        confetti.style.animation = `confettiFall ${duration}s linear forwards`;
        
        document.body.appendChild(confetti);
        
        // Remover após animação
        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.remove();
            }
        }, duration * 1000 + 1000);
    }
}

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    initWheel();
    console.log('Página carregada e pronta!');
});

// Função para tocar música (opcional)
function toggleMusic() {
    const music = document.getElementById('backgroundMusic');
    const button = document.querySelector('.music-button');
    
    if (music.paused) {
        music.play();
        button.innerHTML = '🔊';
        button.style.background = '#4ECDC4';
    } else {
        music.pause();
        button.innerHTML = '🎵';
        button.style.background = '#ff6b6b';
    }
}

// Iniciar música com interação do usuário
function startMusicOnInteraction() {
    const music = document.getElementById('backgroundMusic');
    if (music) {
        music.volume = 0.3;
        music.play().catch(error => {
            console.log("Música precisa de interação do usuário");
        });
    }
}

// Adicionar evento de clique para iniciar música
document.addEventListener('click', function initMusic() {
    startMusicOnInteraction();
    document.removeEventListener('click', initMusic);
});
