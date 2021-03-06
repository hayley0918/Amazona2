import bcrypt from 'bcryptjs'

const data = {
    users: [
        {
            name: 'Hayley',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true
        },
        {
            name: 'Bob',
            email: 'bob@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false
        }

    ],
    products:[
        {
            name: 'Nike Slim Shirt',
            category: 'Shirts',
            image: '/images/p1.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality products'
        },
        {
            name: 'Adidas Fit Shirt',
            category: 'Shirts',
            image: '/images/p2.jpg',
            price: 100,
            countInStock: 20,
            brand: 'Adidas',
            rating: 4.0,
            numReviews: 10,
            description: 'high quality products'
        },
        {
            name: 'Lacoste Free Shirt',
            category: 'Shirts',
            image: '/images/p3.jpg',
            price: 220,
            countInStock: 0,
            brand: 'Lacoste',
            rating: 4.5,
            numReviews: 17,
            description: 'high quality products'
        },
        {
            name: 'Nike Slim Pants',
            category: 'Pants',
            image: '/images/p4.jpg',
            price: 210,
            countInStock: 12,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 7,
            description: 'high quality products'
        },
        {
            name: 'Puma Slim Pants',
            category: 'Pants',
            image: '/images/p5.jpg',
            price: 120,
            countInStock: 5,
            brand: 'Puma',
            rating: 4.5,
            numReviews: 5,
            description: 'high quality products'
        },
        {
            name: 'Adidas Fit Pants',
            category: 'Pants',
            image: '/images/p6.jpg',
            price: 150,
            brand: 'Adidas',
            rating: 4.5,
            numReviews: 3,
            countInStock: 7,
            description: 'high quality products'
        }
    ]
}

export default data