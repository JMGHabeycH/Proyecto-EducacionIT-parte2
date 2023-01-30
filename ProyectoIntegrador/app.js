const express = require('express');
const app = express();
const port = 3000;

//seteo motor de plantilla
app.set('view engine', 'ejs')



app.get("/",(req, res) => {
    res.render("pages/home", {
        title: 'Home',
        body: 'products.ejs'
    });
});

app.get("/alta",(req, res) => {
    res.render("pages/home", {
        title: 'Alta',
        body: 'altaForm.ejs'
    });
});

app.get("/contacto",(req, res) => {
    res.render("pages/contacto", {
        title: 'Contacto',
        body: 'contactoForm.ejs'
    });
});

app.get("/nosotros",(req, res) => {
    res.render("pages/nosotros", {
        title: 'Nosotros',
        body: 'usText.ejs'
    });
});

app.use(express.static('public'));

//Validaciones de la inscripcion de productos
const {body, validationResult} = require('express-validator');
const {exists} = require('fs');

app.post('/productRegister', [
    body('name', 'Ingrese nombre del producto')
        .exists()
        .isAlpha()
        .trim()
        .isLength({min:2,max:30}),
    body('price', 'Ingrese un precio valido para el producto')
        .exists()
        .isNumeric(),
    body('stock', 'Ingrese una cantidad valida en stock')
        .exists()
        .isNumeric(),
    body('brand', 'Ingrese la marca del producto no mayor a 40 caracteres')
        .exists()
        .isAlpha()
        .trim()
        .isLength({max:40}),
    body('category', 'Ingrese la categoria del producto no mayor a 50 caracteres')
        .exists()
        .isAlpha()
        .trim()
        .isLength({max: 50}),
    body('shortDescription', 'Ingrese una descripcion no mayor a 80 caracteres')
        .exists()
        .isAlpha()
        .isLength({max: 80}),
    body('longDescription', 'Ingrese una descripcion no mayor a 200 caracteres')
        .exists()
        .isAlpha()
        .isLength({max: 200}),
    body('minAge', 'Ingrese la edad minima')
        .exists()
        .isNumeric(),
    body('maxAge', 'Ingrese la edad maxima')
        .exists()
        .isNumeric(),
    body('prodcutImage', 'Agrege una imagen donde se pueda ver todo el prodcuto')
        .exists()
], (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.status(400).json({errors: errors.array()});
        console.log(errors);
    }
});

app.listen(port, ()=>{
    console.log(`app escuchando en puerto ${port}`);
});

// const getIdFromHash = () => {
//     const defaultPage = 'inicio';
//     let id = location.hash.slice(1);
//     console.log(id);
//     if (id[0] === '/') {
//         id = id.slice(1);
//         console.log(id);
//     }
//     return id || defaultPage;
// };

// const getPageLink = id => `paginas/${id}.html`;

// const initiatePage = () => {
//     loadDefaultPage();
// };

// const loadDefaultPage = () => {
//     const id = getIdFromHash();
//     loadPageContent(id);
// };

// const loadPageContent = async (id) =>{
//     const pageLink = getPageLink(id);
//     // console.log(pageLink);


//     const mainContent = await fetch(pageLink)
//     .then((response) => response.text())
//     .catch(error => console.error(`Error: `, error))
//     .then((text) => {main.innerHTML = text})
//     // .finally(() => console.warn(`Request ended`))
    
    
//     if (pageLink === `paginas/inicio.html`) {
//         document.title = pageInfo["/"].title;
       
//     } else if (pageLink === `paginas/alta.html`) {
//         document.title = pageInfo["/alta"].title;
//     } else if (pageLink === `paginas/contacto.html`) {
//         document.title = pageInfo["/contacto"].title;
//     } else if (pageLink === `paginas/nosotros.html`) {
//         document.title = pageInfo["/nosotros"].title;
//     } else {
//         document.title = pageTitle;
//     };

        
// };

// window.addEventListener('hashchange', e => {
//     const id = getIdFromHash();
//     // console.log(id);

//     loadPageContent(id);

// });


// initiatePage();

