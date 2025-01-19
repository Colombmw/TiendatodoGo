	let cartItems = [];
		
		function toggleCart() {
		    const cart = document.getElementById('cart');
		    cart.style.display = cart.style.display === 'block' ? 'none' : 'block';
		}
		
		function addToCart(productName, price) {
		    const existingItem = cartItems.find(item => item.name === productName);
		    if (existingItem) {
		        existingItem.quantity += 1;
		    } else {
		        cartItems.push({ name: productName, price: price, quantity: 1 });
		    }
		    renderCart();
		}
		
		function removeFromCart(productName) {
		    cartItems = cartItems.filter(item => item.name !== productName);
		    renderCart();
		}
		
		function renderCart() {
		    const cartItemsContainer = document.getElementById('cart-items');
		    const cartCount = document.getElementById('cart-count');
		    let total = 0;
		
		    if (cartItems.length === 0) {
		        cartItemsContainer.innerHTML = '<p>Tu carrito está vacío.</p>';
		        cartCount.innerText = '0';
		        return;
		    }
		
		    cartItemsContainer.innerHTML = '';
		    cartItems.forEach(item => {
		        total += item.price * item.quantity;
		        const cartItem = document.createElement('div');
		        cartItem.className = 'cart-item';
		        cartItem.innerHTML = `
		            <span>${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}</span>
		            <button onclick="removeFromCart('${item.name}')">Eliminar</button>
		        `;
		        cartItemsContainer.appendChild(cartItem);
		    });
		
		    cartCount.innerText = cartItems.length; // Actualizar el número de productos
		    document.getElementById('cart-total').innerText = total.toFixed(2);
		}
		
		function proceedToCheckout() {
		    sessionStorage.setItem('cart', JSON.stringify(cartItems));
		    window.location.href = 'formulario/formulario_pedido.html';
		}
		
		renderCart(); // Inicializa el carrito
		function renderCart() {
		    const cartItemsContainer = document.getElementById('cart-items');
		    const cartCount = document.getElementById('cart-count');
		    let total = 0;
		
		    if (cartItems.length === 0) {
		        cartItemsContainer.innerHTML = '<p>Tu carrito está vacío.</p>';
		        cartCount.innerText = '0';
		        return;
		    }
		
		    cartItemsContainer.innerHTML = '';
		    cartItems.forEach(item => {
		        total += item.price * item.quantity;
		        const cartItem = document.createElement('div');
		        cartItem.className = 'cart-item';
		        cartItem.innerHTML = `
		            <div class="d-flex align-items-center">
		                <img src="${getProductImage(item.name)}" alt="${item.name}" width="50" height="50" class="me-2">
		                <span>${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}</span>
		                <button onclick="removeFromCart('${item.name}')">Eliminar</button>
		            </div>
		        `;
		        cartItemsContainer.appendChild(cartItem);
		    });
		
		    cartCount.innerText = cartItems.length; // Actualizar el número de productos
		    document.getElementById('cart-total').innerText = total.toFixed(2);
		}
		
		function getProductImage(productName) {
		    const productImages = {
		        'Creatina Monohidratada': 'https://i.postimg.cc/zvX36XyZ/producto-Creatina-mono1.jpg',
		        'Mini masajeador': 'https://i.postimg.cc/BZkGdnLT/Mini-masajeador.png',
		        'Reloj Inteligente Smartwatch T500 Ultra': 'https://i.postimg.cc/Kz6V9QQd/reloj-t500-samrtwatch.jpg',
		        'Mini Wafflera': 'https://i.postimg.cc/gj371RTr/mini-wafflera.jpg',
		        'Gafas Para Leer John Lennon Blue': 'https://i.postimg.cc/N0LzBZz3/gafas-de-aumento.jpg',
		        'Combo Gafas De Sol Cartier Classy 101': 'https://i.postimg.cc/vBV26fMX/Gafas-de-Sol-classy-101.png',
		        'Perfume One Million De Paco Rabanne': 'https://i.postimg.cc/XqK2sWrC/1-million-parfum.webp',
		        'Perfume Mujer Moschino Toy 2 Bubble Gum': 'https://i.postimg.cc/PrhVPC7z/perfume-mujer-Moschino-Toy-2.jpg' ,
				'Airpods-pro-2': 'https://i.postimg.cc/m2YDy58W/Airpods-pro-2.jpg',
    'Maquina de Boxeo': 'https://i.postimg.cc/KcdkNLbB/Maquina-de-boxeo.jpg',
    'Tabla Push Up Sistema Flexiones Ejercicio': 'https://i.postimg.cc/q75M7VMy/Tabla-Push-Up.webp',
    'Audifonos M28 Tws 53 Gamer': 'https://i.postimg.cc/gcRkG79L/Auriculares-Bluettoh.jpg',
    'Bolso Totto Trio': 'https://i.postimg.cc/BQ0ZbCsY/totto-maleta-trio.jpg',
    'Proyector Hy300 Full Hd Android Control':'https://i.postimg.cc/wBMHsf1z/Proyector-Hy300-Full-Hd-Android-Control.jpg',
	'Kit Mancuernas Pesas 50kg': 'https://i.postimg.cc/7ZLjBCwM/Kit-Mancuernas-Pesas-50kg.png',
	'Muñequeras Vendas Straps 8924':'https://i.postimg.cc/cJwhTZgB/Munequeras-Vendas-Straps-8924.jpg',
	'Tn Super Mega Gainer Proteina':'https://i.postimg.cc/NGp4ddMS/Tn-Super-Mega-Gainer-Proteina.jpg',
	'Maquina Lava Vasos A Presion':'https://i.postimg.cc/1tyGHFZy/Maquina-Lava-Vasos-A-Presion.jpg',
	'Trapero Giratorio 360 Con 2 Mopas':'https://i.postimg.cc/5ybx7w4N/Trapero-Giratorio-360-Con-2-Mopas.jpg'


		    };
		
		    return productImages[productName] || ''; // Devuelve la URL de la imagen correspondiente
		}
		
		function buyNow(productName, price) {
    addToCart(productName, price); // Añadir al carrito
    proceedToCheckout(); // Proceder al checkout
}



function searchFunction() {
    let input = document.getElementById('searchInput').value.toLowerCase(); // Convertir entrada a minúsculas
    let products = document.querySelectorAll('.product-card'); // Seleccionar todos los productos

    products.forEach(product => {
        // Obtener el nombre del producto desde el atributo data-name y convertirlo a minúsculas
        let productName = product.getAttribute('data-name').toLowerCase();
        
        // Verificar si el nombre del producto incluye la búsqueda
        if (productName.includes(input)) {
            product.style.display = 'block'; // Mostrar el producto
        } else {
            product.style.display = 'none'; // Ocultar el producto
        }
    });
}