export function task_3()
{
    class Product {

        constructor(name, price, quantity, description) {
            this.name = name.toLowerCase();
            this.price = price;
            this.quantity = quantity;
            this.description = description.toLowerCase();

        }
    }

    function filter(request) {

        let props = request
            .toLowerCase()
            .split("&");

        let correctProps = props
            .map(arr => arr.split('-'))
            .map(prop => {
                if (prop.length < 3)
                    return [prop[0], prop[1].replace(/[0123456789]/g, ""), prop[1].replace(/\D/g, "")]
                return prop;

            });

        return arrOfProducts
            .filter(product => correctProps
                .every(arr => whatProp(arr[1], product[arr[0]], arr[2])));
    }

//contains
//starts
//ends
//=
// >
// <
// >=
// <=
    function whatProp(str, prop, value) {
        switch (str) {
            case 'contains':
                return prop.toString().includes(value);
            case 'starts':
                return prop.toString().startsWith(value);
            case 'ends':
                return prop.toString().endsWith(value);
            case '=':
                return prop === Number(value);
            case '>':
                return prop > Number(value);
            case '<':
                return prop < Number(value);
            case '>=':
                return prop >= Number(value);
            case '<=':
                return prop <= Number(value);

        }
    }



    let product1 = new Product("fd_Milk", 100, 5, "123abc");
    let product2 = new Product("Bread_fd", 1, 10, "123abc");
    let product3 = new Product("BChocolate_fd", 2, 5, "123abc");
    let product4 = new Product("fd_BChocolate", 2, 4, "123abc");
    let product5 = new Product("bfd", 2, 100, "123Abc");

    let arrOfProducts = [];

    arrOfProducts.push(product1);
    arrOfProducts.push(product2);
    arrOfProducts.push(product3);
    arrOfProducts.push(product4);
    arrOfProducts.push(product5);

    console.log("________________________________Requests________________________________");
    console.log("name-contains-fd&name-starts-B&price-<=2&quantity->=5&description-ends-abc");
    console.log(filter("name-contains-fd&name-starts-B&price-<=2&quantity->=5&description-ends-abc"));
    console.log(filter("name-starts-fd&quantity-=5"));
}