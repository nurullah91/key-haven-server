# Key Haven server

This is a mechanical keyboard e-commerce website server. In this website you can browse products and add product to cart and view cart also you can get the carts product by clicking the cart icon in the navbar. And you can add update or delete a product in dashboard. You can place order from your cart items. In About us page you will get information about the Key Haven. You can also visit contact us page for details contact information.

> ## _API end points_
>
> ### Products
>
> - POST: api/v1/products/create-product
> - PUT:api/v1/products/:id
> - DELETE:api/v1/products/:id
> - GET: api/v1/products
> - GET: api/v1/products?page=2&limit=10&search=KeyBrand
> - GET: api/v1/products/:id

> ### Orders
>
> - POST: api/v1/orders/create-order
> - PUT: api/v1/orders/:id
> - DELETE: api/v1/orders/:id
> - GET: api/v1/orders
> - GET: api/v1/orders?email=sample@gmail.com
> - GET: api/v1/orders/:id

> ### Reviews
>
> - POST: api/v1/reviews/create-review
> - DELETE: api/v1/reviews/:id
> - PUT: api/v1/reviews/:id
> - GET: api/v1/reviews

---

### Sample Request

_Create Product_

```
{
    "image": "https://example.com/images/corsair-k95.jpg",
    "title": "Corsair K95 RGB Platinum",
    "brand": "Corsair",
    "availableQuantity": 10,
    "price": 199.99,
    "description": "The Corsair K95 RGB Platinum is a top-tier mechanical keyboard featuring customizable RGB lighting and durable key switches."
}
```

_Create Order_

```
 {
    "name": "John Doe",
    "phone": "1234567890",
    "email": "johndoe@example.com",
    "deliveryAddress": "123 Main Street, Springfield, USA",
    "totalPrice": 299.99,
    "orderStatus": "paid",
    "orderInfo": [
      {
        "product": "668db54f3898033e829be761",
        "price": 4,
        "quantity": 2
      },
      {
        "product": "668db54f3898033e829be761",
        "price": 7,
        "quantity": 1
      }
    ]
  }
```

_Create Review_

```
{
  "name": "John Doe",
  "email": "johndoe@example2.com",
  "location": "New York",
  "review": "This keyboard is amazing! It's very responsive and comfortable to type on.",
  "image": "https://example.com/profile-image.jpg",
  "rating": 4.5
}

```

---

### ■ Local installation guideline:

first clone this repository then give this command in you terminal

```language
npm i
npm run start:dev
```

---

> - This websites client side code's [link](https://github.com/nurullah91/key-haven-client)
> - And the client side live [link](https://key-haven-client.vercel.app)
> - Here is a video overview and understanding of this project [link](https://drive.google.com/file/d/1wxAXpqNmpt3GrNxejXavnyoY8Kf0lopQ/view?usp=sharing)
> - This the requirement analysis docs [link](https://docs.google.com/document/d/1y4R-T2vYN_qRIRny6NndESLZ8p7eph_zIL9x8yI-3Lc/edit?usp=sharing)

## Live link of Server side production [link](https://key-haven-server.vercel.app)
