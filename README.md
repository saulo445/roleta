# roleta
site em html que serve como uma roleta que sorteia lugares para encontro

<script>
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
            mapsLink: "https://www.google.com/maps/place/Limeira+Shopping/@-22.533295,-47.3884749,17z/data=!3m1!4b1!4m6!3m5!1s0x94c87e1938a5b14f:0xd05f52e7b2a94b3f!8m2!3d-22.5333!4d-47.3859!16s%2Fg%2F11b7q6qvrd?entry=ttu&g_ep=EgoyMDI5MDMyOS4wIKXMDSoASAFQAw%3D%3D"
        },
        { 
            id: "pizza", 
            name: "Bella Capri", 
            address: "Limeira, SP",
            image: "https://media-cdn.tripadvisor.com/media/photo-s/1b/0f/4e/38/fachada-bella-capri-limeira.jpg",
            imageLarge: "https://media-cdn.tripadvisor.com/media/photo-s/1b/0f/4e/38/fachada-bella-capri-limeira.jpg",
            color: "#F9A602",
            mapsLink: "https://www.google.com/maps/place/Bella+Capri+Pizzaria+-+Limeira/@-22.5552401,-47.4170669,17z/data=!3m2!4b1!5s0x94c8807cd6e23fc7:0xb3874a60afb5ea61!4m6!3m5!1s0x94c881363799dc5b:0x39cc4337a205cefe!8m2!3d-22.5552451!4d-47.4124535!16s%2Fg%2F11g03w_1px?entry=ttu&g_ep=EgoyMDI5MDMyOS4wIKXMDSoASAFQAw%3D%3D"
        },
        { 
            id: "jangada", 
            name: "Restaurante Jangada", 
            address: "Limeira, SP",
            image: "https://images.getinapp.com.br/8ebbea34-ca5f-4d5d-b492-15ae3ca149f8.jpg",
            imageLarge: "https://images.getinapp.com.br/8ebbea34-ca5f-4d5d-b492-15ae3ca149f8.jpg",
            color: "#9B59B6",
            mapsLink: "https://www.google.com/maps/place/Restaurante+Jangada+Limeira/@-22.5351279,-47.38671,17z/data=!3m1!4b1!4m6!3m5!1s0x94c8806451a5338f:0x8fdab000a30a1267!8m2!3d-22.5351279!4d-47.3841351!16s%2Fg%2F1ydntnsny?entry=ttu&g_ep=EgoyMDI5MDMyOS4wIKXMDSoASAFQAw%3D%3D"
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
    }
    
    // Inicializar a roleta quando a página carregar
    window.onload = initWheel;
    
    function startRoulette() {
        // Resetar seleção anterior
        if (selectedPlace) {
            const prevElement = document.getElementById(selectedPlace.id);
            prevElement.classList.remove('selected');
        }
        
        // Esconder detalhes do local anterior
        document.getElementById('place-detail').style.display = 'none';
        
        const button = document.querySelector('.spin-button');
        button.disabled = true;
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Girando...';
        
        document.getElementById('result').style.display = 'none';
        
        // Sortear um lugar aleatório PRIMEIRO
        const randomIndex = Math.floor(Math.random() * places.length);
        selectedPlace = places[randomIndex];
        
        console.log("Resultado sorteado:", selectedPlace.name);
        
        // Calcular ângulo para parar exatamente no lugar selecionado
        const wheel = document.getElementById('wheel');
        const totalItems = places.length;
        const degreesPerItem = 360 / totalItems;
        
        // Calcular a posição final exata (em graus)
        // 1. Adicionar voltas completas para efeito (ex: 5 voltas = 1800°)
        // 2. Calcular a posição do item sorteado
        // 3. Ajustar para que a seta aponte corretamente
        const extraRotations = 5; // Número de voltas completas extras
        const targetRotation = (extraRotations * 360) + (randomIndex * degreesPerItem);
        
        // Aplicar a rotação
        wheel.style.transition = 'transform 4s cubic-bezier(0.17, 0.67, 0.21, 0.99)';
        wheel.style.transform = `rotate(${targetRotation}deg)`;
        
        // Atualizar a rotação atual para a próxima vez
        currentRotation = targetRotation % 360;
        
        // Quando a roleta parar
        setTimeout(() => {
            // Destacar o lugar selecionado
            const selectedElement = document.getElementById(selectedPlace.id);
            selectedElement.classList.add('selected');
            
            // Mostrar o resultado
            document.getElementById('selected-place').textContent = selectedPlace.name;
            document.getElementById('result').style.display = 'block';
            
            // Mostrar detalhes do local
            showPlaceDetails(selectedPlace);
            
            // Iniciar a contagem regressiva
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
            
            // Reativar o botão
            button.disabled = false;
            button.innerHTML = '<i class="fas fa-dice"></i> Sortear Novamente!';
            
            // Efeito de confete
            createConfetti();
        }, 4000);
    }
    
    function showPlaceDetails(place) {
        const detailSection = document.getElementById('place-detail');
        const placeImage = document.getElementById('place-image-large');
        const placeName = document.getElementById('detail-place-name');
        const mapLink = document.getElementById('map-link');
        
        // Preencher os detalhes
        placeImage.src = place.imageLarge;
        placeName.textContent = place.name;
        mapLink.href = place.mapsLink;
        
        // Mostrar a seção de detalhes
        detailSection.style.display = 'block';
    }
    
    function confirmSelection(place) {
        alert(`🎉 Combinado! Vamos para ${place.name}! \n\nTe envio uma mensagem para acertarmos os detalhes!`);
    }
    
    function createConfetti() {
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            confetti.style.animation = `confettiFall ${Math.random() * 3 + 2}s linear forwards`;
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }
    }
</script>
