
//    function initMap() {
//         map = new google.maps.Map(document.getElementById('map'), {
//           center: {lat: 54.566921, lng: 18.399099},
//           zoom: 8
//         });
//       }


function initMap(){
    const loc={lat: 54.566921, lng: 18.399099};
    const map=new google.maps.Map(document.querySelector('.map'),
    {
        zoom: 14,
        center: loc
    });
    const marker = new google.maps.Marker({
        position: loc,
        map: map
    })
}