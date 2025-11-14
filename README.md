# SaiGonChess - Shop Phần Mềm Cờ Tướng & Cờ Úp

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

Website bán hàng phần mềm cờ tướng và cờ úp bản quyền chính hãng. Engine ELO 3200+, hỗ trợ đa nền tảng PC & Mobile.

## 🚀 Tính năng

### ✨ Tính năng chính
- 🛒 **Giỏ hàng thông minh**: Thêm/xóa sản phẩm, điều chỉnh số lượng
- 💳 **Thanh toán đa kênh**: Zalo, Momo, MB Bank
- 📱 **Responsive Design**: Tối ưu cho mọi thiết bị
- 🔔 **Thông báo Telegram**: Tự động gửi đơn hàng qua Telegram
- 💾 **LocalStorage**: Lưu giỏ hàng tự động
- 🎨 **UI/UX hiện đại**: Animations mượt mà, giao diện đẹp

### 🎯 Tối ưu hóa
- ⚡ **Performance**: Code tối ưu, lazy loading
- 🔍 **SEO Friendly**: Meta tags đầy đủ, structured data
- 📱 **PWA Support**: Cài đặt như app native
- 🌐 **Offline Support**: Service Worker caching
- ♿ **Accessibility**: ARIA labels, semantic HTML
- 🎨 **Modern CSS**: CSS Variables, Flexbox, Grid

## 📁 Cấu trúc thư mục

```
SaiGonChess/
├── index.html          # Trang chủ (optimized HTML)
├── manifest.json       # PWA manifest
├── sw.js              # Service Worker
├── css/
│   └── style.css      # Stylesheet chính
├── js/
│   └── app.js         # JavaScript chính
├── images/            # Hình ảnh, icons
│   ├── icon-*.png     # PWA icons
│   ├── favicon-*.png  # Favicons
│   └── og-image.jpg   # Open Graph image
└── README.md          # File này
```

## 🛠️ Công nghệ sử dụng

- **HTML5**: Semantic markup
- **CSS3**: Modern styling, animations
- **Vanilla JavaScript**: No dependencies
- **PWA**: Progressive Web App
- **Font Awesome**: Icons
- **LocalStorage**: Client-side storage
- **Telegram Bot API**: Order notifications

## 🚀 Cài đặt & Sử dụng

### 1. Clone repository

```bash
git clone https://github.com/yourusername/SaiGonChess.git
cd SaiGonChess
```

### 2. Cấu hình Telegram Bot (Optional)

Mở file `js/app.js` và cập nhật thông tin Telegram:

```javascript
const CONFIG = {
  telegram: {
    botToken: 'YOUR_BOT_TOKEN',
    chatId: 'YOUR_CHAT_ID'
  }
};
```

### 3. Chạy trên local server

Sử dụng một trong các cách sau:

**Python:**
```bash
python -m http.server 8000
```

**Node.js (http-server):**
```bash
npx http-server -p 8000
```

**PHP:**
```bash
php -S localhost:8000
```

Truy cập: `http://localhost:8000`

### 4. Deploy lên hosting

Upload tất cả files lên web hosting của bạn. Đảm bảo:
- HTTPS được bật (bắt buộc cho PWA)
- Service Worker có thể truy cập từ root domain

## 📝 Hướng dẫn tùy chỉnh

### Thay đổi sản phẩm

Mở `js/app.js` và chỉnh sửa mảng `PRODUCTS`:

```javascript
const PRODUCTS = [
  {
    id: 'product-id',
    name: 'Tên sản phẩm',
    category: 'co-up', // co-up, co-tuong, engine, web
    badge: 'Badge',
    desc: 'Mô tả sản phẩm',
    features: [
      'Tính năng 1',
      'Tính năng 2'
    ],
    pricing: 'single', // 'single' hoặc 'table'
    price: 1000000, // Nếu pricing = 'single'
    variants: [ // Nếu pricing = 'table'
      { label: 'Phiên bản 1', price: 1000000 },
      { label: 'Phiên bản 2', price: 2000000 }
    ]
  }
];
```

### Thay đổi màu sắc

Mở `css/style.css` và chỉnh sửa CSS variables:

```css
:root {
  --dark-bg: #0f0f23;
  --card-bg: #1a1a2e;
  --text-primary: #ffffff;
  --text-secondary: #b8b8d1;
  --accent: #00f2fe;
  --success: #43e97b;
  --danger: #f5576c;
}
```

### Thay đổi thông tin liên hệ

Mở `index.html` và tìm section `#contact`:

```html
<div class="contact-item">
  <span>📱</span> Zalo: 0934571206
</div>
```

## 🎨 PWA Icons

Tạo icons cho PWA tại thư mục `images/`:

- `icon-72x72.png`
- `icon-96x96.png`
- `icon-128x128.png`
- `icon-144x144.png`
- `icon-152x152.png`
- `icon-192x192.png`
- `icon-384x384.png`
- `icon-512x512.png`
- `favicon-16x16.png`
- `favicon-32x32.png`
- `apple-touch-icon.png` (180x180)

Sử dụng tool online: [RealFaviconGenerator](https://realfavicongenerator.net/)

## 🔧 Tính năng nâng cao

### Service Worker Caching

Service Worker tự động cache:
- Static assets (CSS, JS, images)
- HTML pages
- Font files

### Telegram Notifications

Khi khách hàng đặt hàng, thông tin sẽ được gửi tự động qua Telegram:
- Thông tin khách hàng
- Danh sách sản phẩm
- Tổng tiền
- Phương thức thanh toán

### LocalStorage

Giỏ hàng được lưu tự động vào LocalStorage, không mất khi refresh trang.

## 📊 SEO & Meta Tags

Website đã được tối ưu SEO với:
- Meta description
- Open Graph tags (Facebook)
- Twitter Cards
- Structured Data (JSON-LD)
- Canonical URLs
- Alt texts cho images

## ⚡ Performance

- **Lazy loading**: Images và resources
- **Minified CSS/JS**: Giảm kích thước file
- **Caching**: Service Worker + Browser cache
- **CDN**: Font Awesome từ CDN
- **Preconnect**: DNS prefetch cho external resources

## 🔒 Bảo mật

- ✅ HTTPS recommended
- ✅ Input validation
- ✅ XSS prevention
- ✅ CORS configuration
- ✅ Content Security Policy (recommended)

## 📱 Browser Support

- ✅ Chrome/Edge (90+)
- ✅ Firefox (88+)
- ✅ Safari (14+)
- ✅ Opera (76+)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

### Service Worker không hoạt động

1. Kiểm tra HTTPS đã được bật
2. Clear cache và hard reload (Ctrl + Shift + R)
3. Kiểm tra Console cho errors

### Telegram không nhận thông báo

1. Kiểm tra botToken và chatId
2. Kiểm tra bot đã được thêm vào group/channel
3. Test API endpoint trực tiếp

### Giỏ hàng bị mất

1. Kiểm tra LocalStorage có bị disable không
2. Kiểm tra Private/Incognito mode
3. Clear cookies và thử lại

## 📄 License

MIT License - xem file [LICENSE](LICENSE) để biết thêm chi tiết.

## 🤝 Đóng góp

Pull requests luôn được chào đón! Vui lòng:

1. Fork repository
2. Tạo branch mới (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📞 Liên hệ

- **Website**: https://saigonchess.net
- **Zalo**: 0934571206
- **Email**: contact@saigonchess.net

## 🙏 Credits

- Icons: [Font Awesome](https://fontawesome.com/)
- Design inspiration: Modern e-commerce websites
- Chess Knight emoji: Unicode Consortium

---

Made with ❤️ by SaiGonChess Team
