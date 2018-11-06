const posts = [
  {
    img: 'https://placeimg.com/400/150/arch',
    title: 'Post title 1',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!',
    link: 'link-1.com',
  },
  {
    img: 'https://placeimg.com/400/150/nature',
    title: 'Post title 2',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!',
    link: 'link-2.com',
  },
  {
    img: 'https://placeimg.com/400/150/arch',
    title: 'Post title 3',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!',
    link: 'link-3.com',
  },
];

function createImgElem(imgLink) {
  const postImg = document.createElement('img');
  postImg.classList.add('post__image');
  postImg.setAttribute('src', imgLink);
  postImg.setAttribute('alt', 'post image');

  return postImg;
}
function createTitleElem(titleText) {
  const postTitle = document.createElement('h2');
  postTitle.classList.add('post__title');
  postTitle.textContent = titleText;

  return postTitle;
}

function createTextElem(contentText) {
  const postText = document.createElement('p');
  postText.classList.add('post__text');
  postText.textContent = contentText;

  return postText;
}

function createButton({ text = 'Read more', className = '', link = '#' }) {
  const btn = document.createElement('a');
  btn.textContent = text;
  btn.classList.add(className);
  btn.setAttribute('href', link);

  return btn;
}

function createPostCard({
  img = '', title = '', text = '', link = '',
}) {
  const postCont = document.createElement('div');
  postCont.classList.add('post');

  const bttn = createButton({ text: '', className: 'button', link });

  const postImg = createImgElem(img);
  const postTitle = createTitleElem(title);
  const postText = createTextElem(text);

  postCont.append(postImg, postTitle, postText, bttn);

  return postCont;
}

function createCards(postsArry) {
  const carts = postsArry.map(postItem => createPostCard(postItem));

  return carts;
}

const note = document.querySelector('#wrap');

const newPosts = createCards(posts);

note.append(...newPosts);
