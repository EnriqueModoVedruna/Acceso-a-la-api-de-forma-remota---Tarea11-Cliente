fetch('http://localhost:8080/api/v1/product', {
    method: 'GET'
})
let endPointInsert = "/insert"
let endPointDelete = "/delete"

const productsTable = document.getElementById('productsTable');

// async function fetchProductData() {
//     try {
//         const response = await fetch(createproductUrl(baseUrl));
//         const data = await response.json();
//         console.log(data);
//         displayProducts(data.data.results);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }
displayProducts(products);

document.querySelector("#cargar").addEventListener("click", () => {
    peticion(api, (product) => {
        productsTable.appendChild(productCard(product))
    });
});

document.querySelector("#limpiar").addEventListener("click", () => {
    productsTable.innerHTML = ""
})

function displayProducts(products) {
    products.forEach(product => {
        const card = document.createElement('tr');
        card.classList.add('border', 'px-4', 'py-2');

        card.innerHTML = `
            <td class="border px-4 py-2">${product.productPrice}</td>
            <td class="border px-4 py-2">${product.productName}</td>
            let botonBorrar = document.createElement("button")
            botonBorrar. innerHTML = "Borrar"
        `;

        productsTable.appendChild(card);
    });
    }

    botonBorrar.onclick = async () => {
        await deleteProduct(product.productId);
    };