document.addEventListener('DOMContentLoaded', () => {
  const tituloLoja = document.getElementById('titulo-loja');
  const productList = document.querySelector('.product-list');

  productList.style.display = 'flex';
  productList.style.justifyContent = 'center';
  productList.style.flexWrap = 'wrap';
  
  tituloLoja.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.3)';
});
