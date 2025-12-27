<div align="center">

# ⚡ ZapShift

### Lightning-Fast Parcel Delivery Management Platform

[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://zap-shift-beta.vercel.app/)
[![GitHub Stars](https://img.shields.io/github/stars/mca-programmer/zap-shift-client?style=social)](https://github.com/mca-programmer/zap-shift-client)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

[Features](#-features) • [Demo](#-demo) • [Installation](#-installation) • [Tech Stack](#-tech-stack) • [Contributing](#-contributing)

</div>

---

## 📖 About

**ZapShift** is a modern parcel delivery management system that connects customers, delivery riders, and administrators in one seamless platform. Track parcels in real-time, manage deliveries efficiently, and handle logistics with ease.

### ✨ Key Highlights

- 📦 Real-time parcel tracking with live GPS
- 🚀 Fast and intuitive user interface
- 👥 Multi-role support (Customer, Rider, Admin)
- 💳 Integrated payment gateway
- 📱 Mobile-responsive design
- 🔔 Instant push notifications

---

## 🎯 Features

### For Customers
- Create and manage parcel deliveries
- Real-time order tracking with GPS
- Multiple payment options
- Order history and receipts
- Rate and review deliveries

### For Riders
- Receive delivery assignments
- Optimized route navigation
- Earnings and performance tracking
- Easy pickup and delivery confirmation
- In-app customer communication

### For Admins
- Complete dashboard overview
- User and rider management
- Order monitoring and analytics
- Pricing and commission control
- Generate reports and insights

---

## 🌐 Demo

🔗 **Live Application**: [https://zap-shift-beta.vercel.app/](https://zap-shift-beta.vercel.app/)

### Demo Accounts

```
Customer:
Email: customer@demo.com
Password: demo123

Rider:
Email: rider@demo.com
Password: demo123

Admin:
Email: admin@demo.com
Password: demo123
```

---

## 🛠️ Tech Stack

**Frontend:**
- React 
- JavaScript
- Tailwind CSS
- Socket.io Client

**Backend:**
- Express
- MongoDB
- JWT Authentication

**Services:**
- Google Maps API
- Stripe Payment
- Firebase (Notifications)
- Vercel (Hosting)

---

## 🚀 Installation

### Prerequisites

```bash
Node.js >= 18.0.0
npm or yarn
MongoDB

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
zap-shift-client/
├── src/
│   ├── app/              # Next.js pages
│   ├── components/       # React components
│   ├── lib/             # Utilities & helpers
│   ├── store/           # Redux store
│   └── styles/          # CSS styles
├── public/              # Static files
├── .env.local           # Environment variables
└── package.json         # Dependencies
```

---

## 🔗 API Endpoints

### Authentication
```
POST /auth/register    - Register new user
POST /auth/login       - User login
POST /auth/logout      - User logout
```

### Orders
```
POST /orders           - Create order
GET  /orders           - Get all orders
GET  /orders/:id       - Get order details
PUT  /orders/:id       - Update order
GET  /orders/:id/track - Track order
```

### Users
```
GET  /users/profile    - Get profile
PUT  /users/profile    - Update profile
GET  /users/orders     - Get user orders
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 🗺️ Roadmap

- [x] User authentication
- [x] Real-time tracking
- [x] Payment integration
- [x] Admin dashboard
- [ ] Multi-language support
- [ ] Mobile app (iOS & Android)
- [ ] AI route optimization
- [ ] Blockchain tracking

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact

**Developer**: MCA Programmer

- 📧 Email: musarrafhosen52@gmail.com
- 📱 Phone: +880 1701378952
- 🌐 Website: [zap-shift-beta.vercel.app](https://zap-shift-beta.vercel.app/)
- 💻 GitHub: [@mca-programmer](https://github.com/mca-programmer)

---

## 🙏 Acknowledgments

- [React.js](https://reactjs.org/) - React
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [MongoDB](https://www.mongodb.com/) - Database
- [Vercel](https://vercel.com/) - Hosting Platform
- All contributors and supporters

---

<div align="center">

**Made with ❤️ by MCA Programmer**

⭐ Star this repo if you find it helpful!

</div>
