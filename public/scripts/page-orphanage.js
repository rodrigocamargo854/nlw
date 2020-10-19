const options = {
    //  passar este objeto para o l.map
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheel: false,
    zoomControl: false
}

// // objeto L esta direcionado para a tag js no html, por sua vez chama function map
// // ajuste de visualização coordenadas , escala

// create map                         //coordenadas         zoom
const map = L.map('mapid', options).setView([-26.905457, -49.036230], 16);


// criando titel layer
L.tileLayer(

    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

).addTo(map);


//create icon 
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})




//create and add marker              
L.marker([-26.905457, -49.036230], { icon })
    .addTo(map)


// galeriia de imagem
// image galery
function selectImage(event) {

    // Botão clicado
    const button = event.currentTarget

    // remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")

    function removeActiveClass(button) {
        button.classList.remove("active")
    }

    buttons.forEach(removeActiveClass)

    // selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")


    // atualizar o container de imagem
    imageContainer.src = image.src

    // add a classe .active para o botão clicado
    button.classList.add('active')

}