const port = 4000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const path = require('path');
const cors = require('cors');
const e = require('express');
const { type } = require('os');

app.use(express.json());
app.use(cors());

//kết nối với database
mongoose.connect('mongodb+srv://user123:user143@cluster0.fryfbhz.mongodb.net/SHOPSHOES?retryWrites=true&w=majority&appName=Cluster0')

//api
app.get('/', (req, res) => {
    res.send('Express app is running');
});

//lưu trữ hình ảnh
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storage });

//tải hình ảnh lên
app.use('/images', express.static('upload/images'));

app.post('/upload', upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    });
});

//tạo schema sản phẩm
const Product = mongoose.model('Product', {
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    new_price: {
        type: Number,
        required: true
    },
    old_price: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    available: {
        type: Boolean,
        default: true
    }
});

//thêm sản phẩm
app.post('/addproduct', async (req, res) => {
    let products = await Product.find({});
    let id;
    if (products.length > 0) {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;
    }
    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    })
    console.log(product);
    await product.save();
    console.log('Product added');
    res.json({
        success: true,
        name: req.body.name
    })
});

//xóa sản phẩm
app.post('/removeproduct', async (req, res) => {
    await Product.findOneAndDelete({ id: req.body.id });
    console.log('Product removed');
    res.json({
        success: true,
        name: req.body.name
    })
});

//lấy tất cả sản phẩm
app.get('/allproducts', async (req, res) => {
    let products = await Product.find({});
    console.log('All products sent');
    res.json(products);
});

//tạo schema người dùng
const User = mongoose.model('User', {
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
    cartData: {
        type: Object,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

//endpoint đăng ký
app.post('/signup', async (req, res) => {
    let check = await User.findOne({ email: req.body.email });
    if (check) {
        return res.status(400).json({
            success: false,
            errors: 'Email already exists'
        });
    }
    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;
    }
    const user = new User({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
        cartData: cart
    });
    await user.save();
    const data = {
        user: {
            id: user.id,
        },
    };
    const token = jwt.sign(data, 'secret_ecom');
    res.json({ success: true, token });
});

//endpoint đăng nhập
app.post('/login', async (req, res) => {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
        const passMatch = req.body.password === user.password;
        if (passMatch) {
            const data = {
                user: {
                    id: user.id,
                },
            };
            const token = jwt.sign(data, 'secret_ecom');
            res.json({ success: true, token });
        } else {
            res.json({ success: false, errors: 'Password incorrect' });
        }
    } else {
        res.json({ success: false, errors: 'Email not found' });
    }
});

//endpoint sản phẩm mới nhất
app.get('/newcollections', async (req, res) => {
    let products = await Product.find({});
    let newcollection = products.slice(1).slice(-8);
    console.log('New collections sent');
    res.send(newcollection);
});

//endpoint sản phẩm nổi bật
app.get('/popularproducts', async (req, res) => {
    let products = await Product.find({ category: "men" });
    let popularproducts = products.slice(0, 4);
    console.log('Popular products sent');
    res.send(popularproducts);
});

//fetch user
const fetchUser = async (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).json({ errors: 'Auth Error' });
    }
    else {
        try {
            const data = jwt.verify(token, 'secret_ecom');
            req.user = data.user;
            next();
        } catch (error) {
            res.status(401).send({ errors: 'Invalid Token' });
        }
    }
}

//endpoint thêm sản phẩm vào giỏ hàng
app.post('/addtocart', fetchUser, async (req, res) => {
    console.log('Added to cart', req.body.itemId);
    let userData = await User.findOne({ _id: req.user.id });
    userData.cartData[req.body.itemId] += 1;
    await User.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
    res.send("Added to cart");
});

//endpoint xoá sản phẩm vào giỏ hàng
app.post('/removefromcart', fetchUser, async (req, res) => {
    console.log('Removed from cart', req.body.itemId);
    let userData = await User.findOne({ _id: req.user.id });
    userData.cartData[req.body.itemId] -= 1;
    await User.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
    res.send("Removed from cart");
});

//endpoint sản phẩm trong giỏ hàng
app.post('/getcart', fetchUser, async (req, res) => {
    console.log('Cart data sent');
    let userData = await User.findOne({ _id: req.user.id });
    res.send(userData.cartData);
});

app.listen(port, (error) => {
    if (!error) {
        console.log('Server is running on port ' + port);
    }
    else {
        console.log('Error' + error);
    }
});

