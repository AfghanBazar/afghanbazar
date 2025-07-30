const ads = [];

const adsContainer = document.getElementById('ads-container');
const adForm = document.getElementById('ad-form');
const formMessage = document.getElementById('form-message');
const postSection = document.getElementById('post-ad');
const adsListSection = document.getElementById('ads-list');
const btnHome = document.getElementById('btn-home');
const btnPost = document.getElementById('btn-post');

// نمایش بخش‌ها
btnHome.addEventListener('click', () => {
  adsListSection.classList.remove('hidden');
  postSection.classList.add('hidden');
  btnHome.classList.add('active');
  btnPost.classList.remove('active');
  renderAds();
});

btnPost.addEventListener('click', () => {
  adsListSection.classList.add('hidden');
  postSection.classList.remove('hidden');
  btnPost.classList.add('active');
  btnHome.classList.remove('active');
  formMessage.textContent = '';
  adForm.reset();
});

// رندر آگهی‌ها
function renderAds() {
  adsContainer.innerHTML = '';
  if (ads.length === 0) {
    adsContainer.innerHTML = '<p>فعلا هیچ آگهی وجود ندارد.</p>';
    return;
  }
  ads.forEach((ad, index) => {
    const card = document.createElement('div');
    card.className = 'ad-card';
    card.innerHTML = `
      <div class="ad-title">${ad.title}</div>
      <div class="ad-desc">${ad.description}</div>
      <div class="ad-price">${ad.price ? ad.price + ' AFN' : 'قیمت توافقی'}</div>
      <div class="ad-location">${ad.location}</div>
    `;
    adsContainer.appendChild(card);
  });
}

// ارسال فرم آگهی
adForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.getElementById('ad-title').value.trim();
  const description = document.getElementById('ad-desc').value.trim();
  const price = document.getElementById('ad-price').value.trim();
  const location = document.getElementById('ad-location').value.trim();

  if (!title || !description || !location) {
    formMessage.textContent = 'لطفا همه فیلدهای ضروری را پر کنید.';
    formMessage.style.color = 'red';
    return;
  }

  ads.push({
    title,
    description,
    price: price || null,
    location
  });

  formMessage.textContent = 'آگهی با موفقیت ثبت شد!';
  formMessage.style.color = '#00ff90';
  adForm.reset();
  btnHome.click();
});

// نمایش اولیه آگهی‌ها (خالی)
renderAds();
const ads = [];

const adsContainer = document.getElementById('ads-container');
const adForm = document.getElementById('ad-form');
const formMessage = document.getElementById('form-message');
const postSection = document.getElementById('post-ad');
const adsListSection = document.getElementById('ads-list');
const btnHome = document.getElementById('btn-home');
const btnPost = document.getElementById('btn-post');

// نمایش بخش‌ها
btnHome.addEventListener('click', () => {
  adsListSection.classList.remove('hidden');
  postSection.classList.add('hidden');
  btnHome.classList.add('active');
  btnPost.classList.remove('active');
  renderAds();
});

btnPost.addEventListener('click', () => {
  adsListSection.classList.add('hidden');
  postSection.classList.remove('hidden');
  btnPost.classList.add('active');
  btnHome.classList.remove('active');
  formMessage.textContent = '';
  adForm.reset();
});

// رندر آگهی‌ها
function renderAds() {
  adsContainer.innerHTML = '';
  if (ads.length === 0) {
    adsContainer.innerHTML = '<p>فعلا هیچ آگهی وجود ندارد.</p>';
    return;
  }
  ads.forEach((ad, index) => {
    const card = document.createElement('div');
    card.className = 'ad-card';
    card.innerHTML = `
      <div class="ad-title">${ad.title}</div>
      <div class="ad-desc">${ad.description}</div>
      <div class="ad-price">${ad.price ? ad.price + ' AFN' : 'قیمت توافقی'}</div>
      <div class="ad-location">${ad.location}</div>
    `;
    adsContainer.appendChild(card);
  });
}

// ارسال فرم آگهی
adForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.getElementById('ad-title').value.trim();
  const description = document.getElementById('ad-desc').value.trim();
  const price = document.getElementById('ad-price').value.trim();
  const location = document.getElementById('ad-location').value.trim();

  if (!title || !description || !location) {
    formMessage.textContent = 'لطفا همه فیلدهای ضروری را پر کنید.';
    formMessage.style.color = 'red';
    return;
  }

  ads.push({
    title,
    description,const ads = [];

const adsContainer = document.getElementById('ads-container');
const adForm = document.getElementById('ad-form');
const formMessage = document.getElementById('form-message');
const postSection = document.getElementById('post-ad');
const adsListSection = document.getElementById('ads-list');
const btnHome = document.getElementById('btn-home');
const btnPost = document.getElementById('btn-post');

// نمایش بخش‌ها
btnHome.addEventListener('click', () => {
  adsListSection.classList.remove('hidden');
  postSection.classList.add('hidden');
  btnHome.classList.add('active');
  btnPost.classList.remove('active');
  renderAds();
});

btnPost.addEventListener('click', () => {
  adsListSection.classList.add('hidden');
  postSection.classList.remove('hidden');
  btnPost.classList.add('active');
  btnHome.classList.remove('active');
  formMessage.textContent = '';
  adForm.reset();
});

// رندر آگهی‌ها
function renderAds() {
  adsContainer.innerHTML = '';
  if (ads.length === 0) {
    adsContainer.innerHTML = '<p>فعلا هیچ آگهی وجود ندارد.</p>';
    return;
  }
  ads.forEach((ad, index) => {
    const card = document.createElement('div');
    card.className = 'ad-card';
    card.innerHTML = `
      <div class="ad-title">${ad.title}</div>
      <div class="ad-desc">${ad.description}</div>
      <div class="ad-price">${ad.price ? ad.price + ' AFN' : 'قیمت توافقی'}</div>
      <div class="ad-location">${ad.location}</div>
    `;
    adsContainer.appendChild(card);
  });
}

// ارسال فرم آگهی
adForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.getElementById('ad-title').value.trim();
  const description = document.getElementById('ad-desc').value.trim();
  const price = document.getElementById('ad-price').value.trim();
  const location = document.getElementById('ad-location').value.trim();

  if (!title || !description || !location) {
    formMessage.textContent = 'لطفا همه فیلدهای ضروری را پر کنید.';
    formMessage.style.color = 'red';
    return;
  }

  ads.push({
    title,
    description,
    price: price || null,
    location
  });

  formMessage.textContent = 'آگهی با موفقیت ثبت شد!';
  formMessage.style.color = '#00ff90';
  adForm.reset();
  btnHome.click();
});

// نمایش اولیه آگهی‌ها (خالی)
renderAds();

    price: price || null,
    location
  });

  formMessage.textContent = 'آگهی با موفقیت ثبت شد!';
  formMessage.style.color = '#00ff90';
  adForm.reset();
  btnHome.click();
});

// نمایش اولیه آگهی‌ها (خالی)
renderAds();
