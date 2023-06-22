const http = require('http');/* sacamos la libreria http */
const fs = require('fs');/*sacamos la libreria */

    const server = http.createServer((req,res)=>{
        const method = req.method;
        const url = req.url
        const bootstrap=`<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>`
        let title;
        let content;
   switch (url) {
    case"/":
        title = "Home"
        content = `
        <div class="d-flex flex-column text-align-center align-content-center">
        <h2 class="text-align-center justify-content-center d-flex text-align-center align-items-center" style="margin:100px"> Ventartemis 😺 </h2>

        <div class="d-flex flex-row justify-content-evenly text-align-center align-content-center m-5 p-5">
        <a class="btn btn-outline-light" href="/"> Home </a>
        <a class="btn btn-outline-light" href="/users">Users</a>
        <a class="btn btn-outline-light" href="/categories">Categories</a>
        <a class="btn btn-outline-light" href="/products">Products</a>
        <a class="btn btn-outline-light" href="/employees">Employees</a>
        <a class="btn btn-outline-light" href="/customers">Customers</a>
        <a class="btn btn-outline-light" href="/sales">Sales</a>
        <a class="btn btn-outline-light" href="/shopping">Shopping</a>
        
        </div>
        <table style="margin:100px; border: 1px solid white; padding:20px">
          <thead style="background-color:white; color:black; border: 1px solid white;">
            <tr >
              <th scope="col">Producto</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Precio</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border: 1px solid white;>
              <td>Producto 1</td>
              <td>90</td>
              <td>$70.000</td>
              <td>$900.000</td>
            </tr>
            <tr style="border: 1px solid white;">
              <td>Producto 2</td>
              <td>11</td>
              <td>$12.000</td>
              <td>$36.000</td>
            </tr>
            <tr style="border: 1px solid white;">
              <td>Producto 3</td>
              <td>37</td>
              <td>$20.090</td>
              <td>$69.000</td>
            </tr>
            <tr style="border: 1px solid white;">
              <td>Producto 4</td>
              <td>14</td>
              <td>$76.000</td>
              <td>$600.000</td>
            </tr>
            <tr style="border: 1px solid white;">
              <td>Producto 5</td>
              <td>48</td>
              <td>$8.040</td>
              <td>$80.000</td>
            </tr>
            <tr style="border: 1px solid white;">
              <td>Producto 6</td>
              <td>22</td>
              <td>$12.008</td>
              <td>$34.060</td>
            </tr>
            <tr style="border: 1px solid white;">
              <td>Producto 7</td>
              <td>36</td>
              <td>$21.030</td>
              <td>$67.003</td>
            </tr>
            <tr style="border: 1px solid white;">
              <td>Producto 8</td>
              <td>144</td>
              <td>$2.000</td>
              <td>$78.000</td>
            </tr>
            <tr style="border: 1px solid white;">
              <td>Producto 9</td>
              <td>245</td>
              <td>$11.00</td>
              <td>$540.900</td>
            </tr>
            <tr style="border: 1px solid white;">
              <td>Producto 10</td>
              <td>78</td>
              <td>$9.000</td>
              <td>$36.000.000</td>
            </tr>
          </tbody>
        </table>
        </div>
    
        `
        break;     
    case "/users":
        title="users"
        content=`
         <h2 class="text-align-center justify-content-center d-flex text-align-center align-items-center" style="margin:100px"> Users 😺 </h2>
        <div class="d-flex flex-row justify-content-evenly text-align-center align-content-center m-5 p-5">
        <a class="btn btn-outline-light" href="/"> Home </a>
        <a class="btn btn-outline-light" href="/users">Users</a>
        <a class="btn btn-outline-light" href="/categories">Categories</a>
        <a class="btn btn-outline-light" href="/products">Products</a>
        <a class="btn btn-outline-light" href="/employees">Employees</a>
        <a class="btn btn-outline-light" href="/customers">Customers</a>
        <a class="btn btn-outline-light" href="/sales">Sales</a>
        <a class="btn btn-outline-light" href="/shopping">Shopping</a>
        
        </div>
        
        <table style="margin:100px; border: 1px solid white; padding:20px">
          <thead style="background-color:white; color:black; border: 1px solid white;">
            <th scope="col">Nombre</th>
            <th scope="col">telefono</th>
            <th scope="col">email</th>
        </thead>
        <tbody>
            <tr style="border: 1px solid white;> 
              <td>John Doe</td>
              <td>1234567890</td>
              <td>johndoe@example.com</td>
            </tr>
            <tr style="border: 1px solid white;>
              <td>Jane Smith</td>
              <td>0987654321</td>
              <td>janesmith@example.com</td>
            </tr>
            <tr style="border: 1px solid white;>
              <td>Robert Johnson</td>
              <td>5555555555</td>
              <td>robertjohnson@example.com</td>
            </tr>
            <tr style="border: 1px solid white;>
              <td>Emily Davis</td>
              <td>9876543210</td>
              <td>emilydavis@example.com</td>
            </tr>
            <tr style="border: 1px solid white;>
              <td>Michael Wilson</td>
              <td>7777777777</td>
              <td>michaelwilson@example.com</td>
            </tr>
            <tr style="border: 1px solid white; >
              <td>Sarah Anderson</td>
              <td>3333333333</td>
              <td>sarahanderson@example.com</td>
            </tr>
            <tr style="border: 1px solid white;>
              <td>David Thompson</td>
              <td>4567890123</td>
              <td>davidthompson@example.com</td>
            </tr>
            <tr style="border: 1px solid white;>
              <td>Amy Harris</td>
              <td>8765432109</td>
              <td>amyharris@example.com</td>
            </tr>
            <tr style="border: 1px solid white;>
              <td>Christopher Walker</td>
              <td>2222222222</td>
              <td>christopherwalker@example.com</td>
            </tr>
            <tr style="border: 1px solid white;>
              <td>Olivia Martin</td>
              <td>4444444444</td>
              <td>oliviamartin@example.com</td>
            </tr>
          </tbody>
    </table>`        
        break; 
    case "/categories":
        title="categories"
        content=`
       
        <h2 class="text-align-center justify-content-center d-flex text-align-center align-items-center" style="margin:100px"> Categorias 😺 </h2>
        <div class="d-flex flex-row justify-content-evenly text-align-center align-content-center m-5 p-5">
        <a class="btn btn-outline-light" href="/"> Home </a>
        <a class="btn btn-outline-light" href="/users">Users</a>
        <a class="btn btn-outline-light" href="/categories">Categories</a>
        <a class="btn btn-outline-light" href="/products">Products</a>
        <a class="btn btn-outline-light" href="/employees">Employees</a>
        <a class="btn btn-outline-light" href="/customers">Customers</a>
        <a class="btn btn-outline-light" href="/sales">Sales</a>
        <a class="btn btn-outline-light" href="/shopping">Shopping</a>
        
        </div>
  
        <table style="margin:100px; border: 1px solid white; padding:20px">
          <thead style="background-color:white; color:black; border: 1px solid white;">
            <tr style="border: 1px solid white;>
              <th scope="col">Categoría</th>
              <th scope="col">Descripción</th>
              <th scope="col">Número de Productos</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border: 1px solid white;>
              <td>Categoría A</td>
              <td>Descripción de la categoría A</td>
              <td>10</td>
            </tr>
            <tr style="border: 1px solid white;>
              <td>Categoría B</td>
              <td>Descripción de la categoría B</td>
              <td>5</td>
            </tr>
            <tr style="border: 1px solid white;>
              <td>Categoría C</td>
              <td>Descripción de la categoría C</td>
              <td>8</td>
            </tr>
            <tr style="border: 1px solid white;>
              <td>Categoría D</td>
              <td>Descripción de la categoría D</td>
              <td>3</td>
            </tr>
            <tr style="border: 1px solid white;>
              <td>Categoría E</td>
              <td>Descripción de la categoría E</td>
              <td>6</td>
            </tr>
          </tbody>`
        break; 
    case "/products":
        title="products"
        content=`
         
        <h2 class="text-align-center justify-content-center d-flex text-align-center align-items-center" style="margin:100px"> Productos 😺 </h2>

        <div class="d-flex flex-row justify-content-evenly text-align-center align-content-center m-5 p-5">
        <a class="btn btn-outline-light" href="/"> Home </a>
        <a class="btn btn-outline-light" href="/users">Users</a>
        <a class="btn btn-outline-light" href="/categories">Categories</a>
        <a class="btn btn-outline-light" href="/products">Products</a>
        <a class="btn btn-outline-light" href="/employees">Employees</a>
        <a class="btn btn-outline-light" href="/customers">Customers</a>
        <a class="btn btn-outline-light" href="/sales">Sales</a>
        <a class="btn btn-outline-light" href="/shopping">Shopping</a>
        
        </div>

        <table style="margin:100px; border: 1px solid white; padding:20px">
          <thead style="background-color:white; color:black; border: 1px solid white;">
            <tr style="border: 1px solid white;>
              <th scope="col">Producto</th>
              <th scope="col">Descripción</th>
              <th scope="col">Precio</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border: 1px solid white;>
              <td>Producto A</td>
              <td>Descripción del Producto A</td>
              <td>$10.00</td>
            </tr>
            <tr style="border: 1px solid white;>
              <td>Producto B</td>
              <td>Descripción del Producto B</td>
              <td>$15.00</td>
            </tr>
            <tr style="border: 1px solid white;>
              <td>Producto C</td>
              <td>Descripción del Producto C</td>
              <td>$12.50</td>
            </tr>
            <tr style="border: 1px solid white;>
              <td>Producto D</td>
              <td>Descripción del Producto D</td>
              <td>$8.99</td>
            </tr>
            <tr style="border: 1px solid white;>
              <td>Producto E</td>
              <td>Descripción del Producto E</td>
              <td>$20.00</td>
            </tr>
          </tbody>
        </table>`
        break; 
    case "/employees":
        title="employees"
        content=`

        <h2 class="text-align-center justify-content-center d-flex text-align-center align-items-center" style="margin:100px"> Empleados 😺 </h2>
         
        <div class="d-flex flex-row justify-content-evenly text-align-center align-content-center m-5 p-5">
        <a class="btn btn-outline-light" href="/"> Home </a>
        <a class="btn btn-outline-light" href="/users">Users</a>
        <a class="btn btn-outline-light" href="/categories">Categories</a>
        <a class="btn btn-outline-light" href="/products">Products</a>
        <a class="btn btn-outline-light" href="/employees">Employees</a>
        <a class="btn btn-outline-light" href="/customers">Customers</a>
        <a class="btn btn-outline-light" href="/sales">Sales</a>
        <a class="btn btn-outline-light" href="/shopping">Shopping</a>
        
        </div>

  
        <table style="margin:100px; border: 1px solid white; padding:20px">
        <thead style="background-color:white; color:black; border: 1px solid white;">
      <tr style="border: 1px solid white;>
        <th>Nombre</th>
        <th>Teléfono</th>
        <th>Correo Electrónico</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border: 1px solid white;>
        <td>Empleado 1</td>
        <td>1234567890</td>
        <td>empleado1@example.com</td>
      </tr>
      <tr style="border: 1px solid white;>
        <td>Empleado 2</td>
        <td>9876543210</td>
        <td>empleado2@example.com</td>
      </tr>
      <tr style="border: 1px solid white;>
        <td>Empleado 3</td>
        <td>4567890123</td>
        <td>empleado3@example.com</td>
      </tr>
      <tr style="border: 1px solid white;>
        <td>Empleado 4</td>
        <td>7890123456</td>
        <td>empleado4@example.com</td>
      </tr>
      <tr style="border: 1px solid white;>
        <td>Empleado 5</td>
        <td>3210987654</td>
        <td>empleado5@example.com</td>
      </tr>
    </tbody>
  </table>`
        break; 
    case "/customers":
        title="customers"
        content=`
     
        <h2 class="text-align-center justify-content-center d-flex text-align-center align-items-center" style="margin:100px"> Clientes 😺 </h2>
        <div class="d-flex flex-row justify-content-evenly text-align-center align-content-center m-5 p-5">
        <a class="btn btn-outline-light" href="/"> Home </a>
        <a class="btn btn-outline-light" href="/users">Users</a>
        <a class="btn btn-outline-light" href="/categories">Categories</a>
        <a class="btn btn-outline-light" href="/products">Products</a>
        <a class="btn btn-outline-light" href="/employees">Employees</a>
        <a class="btn btn-outline-light" href="/customers">Customers</a>
        <a class="btn btn-outline-light" href="/sales">Sales</a>
        <a class="btn btn-outline-light" href="/shopping">Shopping</a>
        
        </div>


        <form action="/customers" method="POST">
        <label for="name">nombre</label>
        <input type="text" name="name">
        <label for="email">email</label>
        <input type="email" name="email">
        <label for="telefono">telefono</label>
        <input type="number" name="telefono">
        <input type="submit" value="enviar">
      </form>`
      if (url === "/customers" && method === "POST") {
        fs.writeFileSync("feliz.txt", "Te quiero mucho PHP mi papá");
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      }
        break; 
    case "/sales":
        title="sales"
        content=`
         
        <h2 class="text-align-center justify-content-center d-flex text-align-center align-items-center" style="margin:100px"> Ventas😺 </h2>
        <div class="d-flex flex-row justify-content-evenly text-align-center align-content-center m-5 p-5">
        <a class="btn btn-outline-light" href="/"> Home </a>
        <a class="btn btn-outline-light" href="/users">Users</a>
        <a class="btn btn-outline-light" href="/categories">Categories</a>
        <a class="btn btn-outline-light" href="/products">Products</a>
        <a class="btn btn-outline-light" href="/employees">Employees</a>
        <a class="btn btn-outline-light" href="/customers">Customers</a>
        <a class="btn btn-outline-light" href="/sales">Sales</a>
        <a class="btn btn-outline-light" href="/shopping">Shopping</a>
        
        </div>

  
        <table style="margin:100px; border: 1px solid white; padding:20px">
          <thead style="background-color:white; color:black; border: 1px solid white;">
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio unitario</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Producto 1</td>
              <td>2</td>
              <td>$10.00</td>
              <td>$20.00</td>
            </tr>
            <tr>
              <td>Producto 2</td>
              <td>1</td>
              <td>$15.00</td>
              <td>$15.00</td>
            </tr>
            <tr>
              <td>Producto 3</td>
              <td>3</td>
              <td>$8.50</td>
              <td>$25.50</td>
            </tr>
            <tr>
              <td>Producto 4</td>
              <td>2</td>
              <td>$12.00</td>
              <td>$24.00</td>
            </tr>
            <tr>
              <td>Producto 5</td>
              <td>1</td>
              <td>$18.75</td>
              <td>$18.75</td>
            </tr>
            <tr class="total">
              <td colspan="3" align="right">Total:</td>
              <td>$103.25</td>
            </tr>
          </tbody>
        </table>`
        break; 
    case "/shopping":
        title="shopping"
        content=`
         
        <h2 class="text-align-center justify-content-center d-flex text-align-center align-items-center" style="margin:100px"> Shopping 😺 </h2>

        <div class="d-flex flex-row justify-content-evenly text-align-center align-content-center m-5 p-5">
        <a class="btn btn-outline-light" href="/"> Home </a>
        <a class="btn btn-outline-light" href="/users">Users</a>
        <a class="btn btn-outline-light" href="/categories">Categories</a>
        <a class="btn btn-outline-light" href="/products">Products</a>
        <a class="btn btn-outline-light" href="/employees">Employees</a>
        <a class="btn btn-outline-light" href="/customers">Customers</a>
        <a class="btn btn-outline-light" href="/sales">Sales</a>
        <a class="btn btn-outline-light" href="/shopping">Shopping</a>
        
        </div>

        <h1> Tamos melos </h1>
    <img src="ttps://media.giphy.com/media/NfzERYyiWcXU4/giphy.gif" alt="...">
        
        `
        break;   
    default:
        break;
   }
   
   res.setHeader('Content-Type', 'text/html');/* explicar que estamos enviando html */
   res.write(`<html>`);
   /* head */
   res.write(`<head>`);
   res.write(`<meta charset="UTF-8">`);
   res.write(`<title>${title}</title>`);
   res.write(`${bootstrap}`);
   res.write(`</head>`);
   /* body */
   res.write(`<body style="background-color: black; color:white">`);
   res.write(`${content}`);
   res.write(`</body>`);
   res.write(`</html>`);
   
});/* si no se le pone los parentesis es qu espera a que se ejecute,NO la ejecuta el codigo (aplica si la funcion no es anonima)*/
server.listen(7001);/* prepara al servidor web para funcionar y recibir solicitudes */
/* req.url (donde esta ubicado actualmente)*/
/* req.method  (metodo que usa para la solicitud)*/
/* req.headers  (headers de la solicitud) */
/* Process.exit  (para salir del server)*/