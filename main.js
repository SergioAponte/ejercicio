let productos=document.querySelector('.product')
agregar.addEventListener('click',()=>{
          // productos.innerHTML+=`
          // <div class="product_card">
          //       <div class="product_title">Titulo</div>
          //       <div class="product_image">Imagen</div>
          //       <div class="product_description">Descripcion</div>
          //       <div class="product_price">product_description</div>
          //       <button class="product_button">ELiminar</button>
          //   </div>
          // `
          let tarjeta=document.createElement('div')
          tarjeta.className='product_card'
          let titulotarjeta=document.createElement('div')
          titulotarjeta.className='product_title'
          titulotarjeta.textContent='titulo'
          let imagen=document.createElement('div')
          imagen.className='product_image'
          imagen.textContent='imagen'
          tarjeta.appendChild(titulotarjeta)
          tarjeta.appendChild(imagen)
          productos.appendChild(tarjeta)
})