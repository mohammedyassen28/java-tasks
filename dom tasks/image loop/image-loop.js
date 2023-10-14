

var imageUrls = 
[
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg',
    'images/5.jpg',
    'images/6.jpg',
    'images/7.jpg',
    'images/8.jpg',
    'images/9.jpg',
    'images/10.jpg',
];

var imageContainer = document.getElementById('imageContainer');
for(var i = 0 ; i<imageUrls.length ; i++){
    var imgElement = new Image();
    imgElement.src =  imageUrls[i];
    imageContainer.appendChild (imgElement);
}