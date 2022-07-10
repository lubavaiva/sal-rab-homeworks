// Задание 4.1. Вывод карточек товаров

function parseProducts(json) {
   let data = JSON.parse(json);//  Присвойте переменной data результат преобразования аргумента в объект - JSON.parse(json)
   let products = data.products;
   return products; // Верните как результат функции свойство products объекта data
}

function renderProductsCards(json) {// Напишите функцию renderProductsCards(json)
    
    clearProducts(); // Выполните функцию clearProducts - она уже написана в коде, просто вызовите ее, аргументы не требуются
    
    let products = parseProducts(json);
     
    for  (let i = 0; i < products.length; i++) {
    addProduct(products[i]);
    } // Напишите цикл, в котором перебираете все products от 0 до (length - 1)
}