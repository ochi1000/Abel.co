async function loadProducts() {
  const res = await fetch('/api/products/');
  const data = await res.json();
  const container = document.getElementById('products');
  data.products.forEach(p => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <a href="product.html?id=${p.id}">
        <img src="${p.image_url}" alt="${p.name}" />
        <h3>${p.name}</h3>
        <p class="price">$${p.price}</p>
      </a>
    `;
    container.appendChild(div);
  });
}

async function loadProduct() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  if (!id) return;
  const res = await fetch(`/api/products/${id}/`);
  const p = await res.json();
  const container = document.getElementById('product-detail');
  container.innerHTML = `
    <img src="${p.image_url}" alt="${p.name}" />
    <h2>${p.name}</h2>
    <p>${p.description}</p>
    <p class="price">$${p.price}</p>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('products')) {
    loadProducts();
  }
  if (document.getElementById('product-detail')) {
    loadProduct();
  }
});
