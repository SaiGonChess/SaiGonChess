# 🚀 Hướng dẫn Deploy SaiGonChess

## ✅ Checklist Deploy

### Trước khi Deploy
- [x] Code đã tối ưu (CSS, JS tách file)
- [x] PWA manifest.json đã tạo
- [x] Service Worker (sw.js) đã sẵn sàng
- [x] netlify.toml đã cấu hình
- [x] .gitignore đã tạo
- [x] Code đã push lên GitHub

### Sau khi Deploy lên Netlify
- [ ] Kiểm tra site load thành công
- [ ] Test PWA: Có thể "Add to Home Screen"
- [ ] Test Service Worker hoạt động
- [ ] Test offline mode
- [ ] Test giỏ hàng (thêm/xóa sản phẩm)
- [ ] Test checkout flow
- [ ] Test Telegram notification (đặt hàng thử)
- [ ] Test responsive trên mobile
- [ ] Chạy Lighthouse audit (target: 90+)
- [ ] Đổi tên domain (nếu cần)
- [ ] Thêm custom domain (nếu có)

---

## 🌐 Deploy lên Netlify (Cách 1: GitHub - Khuyến nghị)

### Bước 1: Merge code vào main branch (Optional)
```bash
# Từ branch hiện tại
git checkout main
git merge claude/chess-software-shop-018Jmb6JKYy4BBK6L4NfTZE1
git push origin main
```

### Bước 2: Deploy trên Netlify
1. Truy cập: https://app.netlify.com/
2. Đăng nhập bằng GitHub
3. Click **"Add new site"** → **"Import an existing project"**
4. Chọn **"Deploy with GitHub"**
5. Chọn repository: **SaiGonChess/SaiGonChess**
6. Cấu hình:
   ```
   Branch: main (hoặc claude/chess-software-shop-...)
   Build command: (để trống)
   Publish directory: .
   ```
7. Click **"Deploy site"**
8. Đợi 1-2 phút → Done!

### Bước 3: Tùy chỉnh
- **Đổi tên**: Site settings → Change site name → `saigonchess-shop`
- **URL mới**: `https://saigonchess-shop.netlify.app`

---

## 🎯 Deploy lên Netlify (Cách 2: Netlify CLI)

### Cài đặt Netlify CLI
```bash
npm install -g netlify-cli
```

### Deploy
```bash
# 1. Đăng nhập
netlify login

# 2. Deploy lần đầu
netlify init

# 3. Deploy production
netlify deploy --prod

# 4. Mở site
netlify open:site
```

---

## 📦 Deploy lên Netlify (Cách 3: Drag & Drop)

Nhanh nhất nhưng không có auto-deploy:

1. Vào: https://app.netlify.com/drop
2. Kéo thả folder `SaiGonChess` vào
3. Done!

---

## 🔧 Cấu hình sau Deploy

### 1. Environment Variables (Nếu cần)
```
Site settings → Environment variables → Add variable

Ví dụ:
- TELEGRAM_BOT_TOKEN: xxx
- TELEGRAM_CHAT_ID: xxx
```

### 2. Custom Headers (Đã cấu hình trong netlify.toml)
- Security headers
- Cache headers
- Service Worker headers

### 3. Custom Domain
```
Domain settings → Add custom domain
→ Thêm saigonchess.net
→ Configure DNS theo hướng dẫn
```

---

## 🎨 Tạo Icons cho PWA

### Cần tạo các file sau trong folder `images/`:
- icon-72x72.png
- icon-96x96.png
- icon-128x128.png
- icon-144x144.png
- icon-152x152.png
- icon-192x192.png
- icon-384x384.png
- icon-512x512.png
- favicon-16x16.png
- favicon-32x32.png
- apple-touch-icon.png (180x180)

### Tool tự động tạo icons:
1. Vào: https://realfavicongenerator.net/
2. Upload logo (PNG, tối thiểu 512x512)
3. Download package
4. Copy vào folder `images/`
5. Commit và push

---

## ✅ Test sau khi Deploy

### 1. Test PWA
```
Chrome DevTools → Application
- Manifest: Kiểm tra manifest.json load đúng
- Service Workers: Kiểm tra SW đã register
- Storage: Kiểm tra LocalStorage giỏ hàng
```

### 2. Test Offline
```
Chrome DevTools → Network → Offline
Reload page → Site vẫn hoạt động
```

### 3. Test Performance
```
Chrome DevTools → Lighthouse
Run audit → PWA, Performance, SEO
Target: 90+ cho tất cả
```

### 4. Test Mobile
```
- Responsive design
- Touch events
- "Add to Home Screen"
- Offline mode
```

### 5. Test Chức năng
- ✅ Xem sản phẩm
- ✅ Thêm vào giỏ hàng
- ✅ Điều chỉnh số lượng
- ✅ Checkout
- ✅ Nhận Telegram notification

---

## 🐛 Troubleshooting

### Service Worker không hoạt động
```
Nguyên nhân: Chưa có HTTPS
Giải pháp: Netlify tự động bật HTTPS, đợi 1-2 phút
```

### Site không load
```
Kiểm tra:
1. Branch đúng chưa?
2. Publish directory = "." chưa?
3. Console có lỗi không?
```

### PWA không cài được
```
Kiểm tra:
1. manifest.json có lỗi không?
2. Icons đã tạo chưa?
3. Service Worker đã register chưa?
```

### Telegram không nhận thông báo
```
Kiểm tra:
1. Bot token đúng chưa?
2. Chat ID đúng chưa?
3. Bot đã được add vào group chưa?
```

---

## 📊 Monitoring

### Netlify Analytics (Optional - Paid)
```
Site → Analytics → Enable
```

### Google Analytics (Free)
Uncomment code trong `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

Thay `G-XXXXXXXXXX` bằng GA4 Measurement ID của bạn.

---

## 🚀 Auto Deploy

Mỗi khi push code lên GitHub:
```bash
git add .
git commit -m "Update features"
git push origin main
```

Netlify sẽ **tự động deploy** trong 1-2 phút!

---

## 📞 Hỗ trợ

Nếu có vấn đề:
- Netlify Docs: https://docs.netlify.com/
- Netlify Support: https://www.netlify.com/support/
- Community: https://answers.netlify.com/

---

Made with ❤️ by SaiGonChess Team
