const galleryItems = [
  { preview: 'img/preview-1.jpeg', fullview: 'img/fullview-1.jpeg', alt: 'alt text 1' },
  { preview: 'img/preview-2.jpeg', fullview: 'img/fullview-2.jpeg', alt: 'alt text 2' },
  { preview: 'img/preview-3.jpeg', fullview: 'img/fullview-3.jpeg', alt: 'alt text 3' },
  { preview: 'img/preview-4.jpeg', fullview: 'img/fullview-4.jpeg', alt: 'alt text 4' },
  { preview: 'img/preview-5.jpeg', fullview: 'img/fullview-5.jpeg', alt: 'alt text 5' },
  { preview: 'img/preview-6.jpeg', fullview: 'img/fullview-6.jpeg', alt: 'alt text 6' },
];

const wrapper = document.querySelector('.image-gallery');

wrapper.classList.add('js-image-gallery');

const gallery = document.querySelector('.js-image-gallery');

const creatGallery = (obj) => {
  const full = document.createElement('div');
  full.classList.add('fullview');

  const preview = document.createElement('ul');
  preview.classList.add('preview');

  const allImeg = document.createElement('img');

  obj.forEach((item, i) => {
    const liItem = document.createElement('li');

    const liImg = document.createElement('img');

    preview.appendChild(liItem);
    liImg.setAttribute('src', obj[i].preview);
    liImg.setAttribute('alt', obj[i].alt);
    liImg.dataset.fullview = obj[i].fullview;
    liItem.appendChild(liImg);
    if (i === 0) {
      liItem.classList.add('preview-activ');
      allImeg.setAttribute('src', liImg.dataset.fullview);
      allImeg.setAttribute('alt', liImg.alt);
      full.appendChild(allImeg);
    }
  });

  const switcher = (e) => {
    const target = e.target;

    if (target.nodeName !== 'IMG') return;

    const liImgs = Array.from(document.querySelectorAll('li'));

    liImgs.forEach(li => li.classList.remove('preview-activ'));
    target.parentNode.classList.add('preview-activ');
    allImeg.setAttribute(
      'src',
      obj.find(imgs => imgs.preview === target.getAttribute('src')).fullview,
    );
    allImeg.setAttribute('alt', obj.find(imgs => imgs.preview == target.getAttribute('src')).alt);
  };

  buildingDOM(full, preview);

  preview.addEventListener('click', switcher);
};

function buildingDOM(full, preview) {
  gallery.prepend(full);
  gallery.appendChild(preview);
}

creatGallery(galleryItems);
