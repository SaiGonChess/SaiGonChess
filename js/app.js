/**
 * SaiGonChess Shop - Main Application
 * Optimized for performance and maintainability
 */

'use strict';

// ===== CONFIGURATION =====
const CONFIG = {
  telegram: {
    botToken: '277217947:AAGOW1oZl2zRVtlDsRO0M75j1O9bx5LsHco',
    chatId: '-1001988345875'
  },
  storage: {
    cartKey: 'chess-cart'
  },
  animation: {
    duration: 300,
    notificationTimeout: 2000
  }
};

// ===== PRODUCTS DATA =====
const PRODUCTS = [
  {
    id: 'pengfei-jieqi-pc',
    name: 'Pengfei Jieqi PC',
    category: 'co-up',
    badge: 'Cờ Úp',
    desc: 'Bộ phần mềm Pengfei Jieqi là ứng dụng Cờ úp bản quyền chạy trên máy tính, laptop. Hiển thị 3 loại ngôn ngữ Việt - Trung - Anh.',
    features: [
      'Tích hợp sẵn book khai cuộc cơ bản',
      'Auto được nhiều trang cờ úp và game cờ úp trên giả lập',
      'Key online - Thay đổi máy trong vòng 3 năm (1 tuần/lần)',
      'Hạn dùng vĩnh viễn',
      'Cập nhật giao diện miễn phí vĩnh viễn',
      'Cập nhật engine miễn phí 1 năm'
    ],
    pricing: 'table',
    variants: [
      { label: '8U (8 luồng)', price: 2590000 },
      { label: '16U (16 luồng)', price: 3590000 },
      { label: '32U (32 luồng)', price: 4590000 },
      { label: '64U (64 luồng)', price: 5590000 },
      { label: '88U (88 luồng)', price: 6590000 },
      { label: '128U (128 luồng)', price: 7590000 }
    ],
    note: 'Phần mềm chỉ sử dụng trên Windows 64 bit'
  },
  {
    id: 'pengfei-jieqi-mobile',
    name: 'Pengfei Jieqi Mobile (Android/iOS)',
    category: 'co-up',
    badge: 'Mobile',
    desc: 'Phiên bản di động SW Cờ úp Pengfei Jieqi. Động cơ xử lý từ Server TQ truyền qua mạng internet. Đã có trên iOS.',
    features: [
      'Động cơ xử lý từ Server Trung Quốc',
      'Chơi tự động (Auto) với TTTK, JJ, Ziga...',
      'Hỗ trợ cả Android và iOS',
      'Đăng ký theo năm (12 tháng)',
      'Lưu ý: Khó cài đặt trên Android 14'
    ],
    pricing: 'table',
    variants: [
      { label: '8U - 1 năm', price: 990000 },
      { label: '16U - 1 năm', price: 1590000 },
      { label: '32U - 1 năm', price: 3190000 }
    ],
    note: '⚠️ Khó cài đặt trên Android 14'
  },
  {
    id: 'pengfeichess-pc',
    name: 'PengfeiChess PC',
    category: 'co-tuong',
    badge: 'Cờ Tướng',
    desc: 'Ứng dụng cờ tướng bản quyền chạy trên máy tính, laptop. Hiển thị 3 loại ngôn ngữ Việt - Trung - Anh.',
    features: [
      'Tích hợp trường luyện tập: hơn hàng ngàn bài học',
      'Auto được nhiều trang cờ và nhận diện video, hình ảnh',
      'Khuyến mãi: Tặng engine Pikafish Official mới nhất',
      'Hạn dùng vĩnh viễn, cập nhật miễn phí vĩnh viễn',
      'Thay đổi máy trong 3 năm (hiệu lực cách nhau 24h)'
    ],
    pricing: 'single',
    price: 1690000,
    note: 'Phần mềm chỉ sử dụng trên Windows 64 bit'
  },
  {
    id: 'pengfei-chess-mobile',
    name: 'Pengfei Chess Mobile (Android/iOS)',
    category: 'co-tuong',
    badge: 'Mobile',
    desc: 'Phiên bản di động SW Cờ tướng Pengfei Chess. Động cơ Bugchess hoặc Cyclone xử lý từ Server TQ. Có trên iOS.',
    features: [
      'Động cơ Bugchess hoặc Cyclone từ Server TQ',
      'Chơi tự động (Auto) với TTTK, JJ, Ziga...',
      'Chụp hình xếp nhanh hình cờ từ bên ngoài',
      'Hỗ trợ cả Android và iOS',
      'Lưu ý: Khó cài đặt trên Android 14'
    ],
    pricing: 'table',
    variants: [
      { label: '8U - 1 năm', price: 990000 },
      { label: '16U - 1 năm', price: 1590000 },
      { label: '32U - 1 năm', price: 3190000 }
    ],
    note: '⚠️ Khó cài đặt trên Android 14'
  },
  {
    id: 'sharkchess',
    name: 'SharkChess',
    category: 'co-tuong',
    badge: 'Cờ Tướng',
    desc: 'Giao diện SharkChess Cờ tướng Cao cấp sử dụng trên PC hoặc laptop. Hạn dùng vĩnh viễn.',
    features: [
      'Auto được trên nhiều web cờ tướng và giả lập',
      'Biên bản rẽ nhánh chuyên nghiệp',
      'Giao diện hiện đại, đồ họa đẹp',
      'Khóa bản quyền online, bảo hành 1 năm',
      'Không cho phép cài sang máy khác'
    ],
    pricing: 'single',
    price: 2690000,
    note: 'Bảo hành bản quyền miễn phí 1 năm (3 lần miễn phí)'
  },
  {
    id: 'vo-cuc-tuong-ky',
    name: 'Vô Cực Tượng Kỳ 2in1',
    category: 'co-tuong',
    badge: '2in1',
    desc: 'Bộ giao diện Vô Cực Tượng Kỳ (2in1) - Việt Nam sản xuất. Sử dụng trên laptop hoặc PC.',
    features: [
      'Cờ tướng: Tặng engine Pikafish + book tuyển chọn',
      'Chạy nhiều engine trên 1 hình cờ',
      'Nhận diện hình ảnh, xếp nhanh hình cờ mạnh nhất',
      'Cờ úp: Tặng book khai cuộc (khi đăng ký động cơ)',
      'Hạn dùng vĩnh viễn, thay đổi máy tự do (48h)'
    ],
    pricing: 'table',
    variants: [
      { label: 'Chỉ GUI (Cờ Tướng)', price: 1690000 },
      { label: 'GUI + ZenoJchess 32U', price: 5190000 },
      { label: 'GUI + ZenoJchess 64U', price: 6590000 },
      { label: 'GUI + ZenoJchess 128U', price: 8890000 },
      { label: 'Chỉ Engine ZenoJchess 32U', price: 3500000 },
      { label: 'Chỉ Engine ZenoJchess 64U', price: 4900000 },
      { label: 'Chỉ Engine ZenoJchess 128U', price: 7200000 }
    ],
    note: '💡 Nếu đã có GUI, chọn "Chỉ Engine". Nếu chưa có, chọn "GUI + Engine"'
  },
  {
    id: 'bugchess',
    name: 'Bugchess (Tiểu trùng tượng kỳ)',
    category: 'engine',
    badge: 'Engine',
    desc: 'Động cơ chính hãng dành cho kỳ thủ chuyên nghiệp. Tặng kèm giao diện ChessShark TQ hoặc PengfeiChess và 1 book tinh tuyển.',
    features: [
      'Khóa bản quyền online, hạn dùng vĩnh viễn',
      'Cập nhật phiên bản mới miễn phí 1 năm',
      'Cho phép thay đổi cấu hình máy (12 tiếng)'
    ],
    pricing: 'table',
    variants: [
      { label: '4 luồng xử lý', price: 2850000 },
      { label: '32 luồng xử lý', price: 13250000 },
      { label: '128 luồng xử lý', price: 18850000 }
    ],
    note: null
  },
  {
    id: 'cyclone',
    name: 'Cyclone (Tượng kỳ toàn phong)',
    category: 'engine',
    badge: 'Top Engine',
    desc: 'Được đánh giá là hãng SW có lực cờ mạnh nhất hiện nay. Tặng kèm giao diện ChessShark TQ hoặc PengfeiChess và 1 book tinh tuyển.',
    features: [
      'Lực cờ mạnh nhất hiện nay',
      'Khóa bản quyền online, hạn dùng vĩnh viễn',
      'Cập nhật phiên bản mới miễn phí 1 năm',
      'Cho phép thay đổi cấu hình máy (8 tiếng)'
    ],
    pricing: 'table',
    variants: [
      { label: '4 luồng xử lý', price: 3850000 },
      { label: '32 luồng xử lý', price: 14450000 },
      { label: '128 luồng xử lý', price: 21650000 }
    ],
    note: null
  },
  {
    id: 'saigonchess',
    name: 'Saigonchess.net',
    category: 'web',
    badge: 'Web App',
    desc: 'SW Cờ tướng trên nền web. Sử dụng đơn giản, không cần cài đặt. Dùng được trên mọi thiết bị.',
    features: [
      'Tích hợp hệ thống book khai cuộc bài bản',
      'Hệ thống bài tập tàn cuộc, sát cuộc cập nhật thường xuyên',
      'Tạo biểu đồ ván đấu - dễ dàng nắm bắt sai lầm',
      'Tích hợp nhiều tài liệu CBL tinh tuyển',
      'Động cơ BugchessNN Ultimate / Fairy Stockfish'
    ],
    pricing: 'table',
    variants: [
      { label: '8U - 12 tháng', price: 790000 },
      { label: '16U - 12 tháng', price: 1590000 },
      { label: '32U - 12 tháng', price: 3190000 }
    ],
    note: '📝 Tài khoản dùng được trên nhiều thiết bị. Engine CycloneNN chỉ áp dụng với bản 32U trở lên.'
  }
];

// ===== STATE MANAGER =====
const State = {
  cart: [],
  currentCheckoutStep: 1,
  currentOrderReference: '',
  customerInfo: {},

  save() {
    try {
      localStorage.setItem(CONFIG.storage.cartKey, JSON.stringify(this.cart));
    } catch (error) {
      console.error('Failed to save cart:', error);
    }
  },

  load() {
    try {
      const savedCart = localStorage.getItem(CONFIG.storage.cartKey);
      if (savedCart) {
        this.cart = JSON.parse(savedCart);
      }
    } catch (error) {
      console.error('Failed to load cart:', error);
      this.cart = [];
    }
  },

  reset() {
    this.cart = [];
    this.currentCheckoutStep = 1;
    this.currentOrderReference = '';
    this.customerInfo = {};
    this.save();
  }
};

// ===== UTILITIES =====
const Utils = {
  formatCurrency(amount) {
    return amount.toLocaleString('vi-VN') + ' VNĐ';
  },

  generateOrderReference() {
    return 'DH' + Date.now().toString().slice(-8);
  },

  isNameValid(name) {
    return name.trim().length >= 3;
  },

  isPhoneValid(phone) {
    const phoneRegex = /^(0|\+84)[0-9]{9}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  },

  isEmailValid(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  validateField(inputElement, errorElement, validationFunc, errorMessage) {
    const value = inputElement.value.trim();
    const isValid = validationFunc(value);

    if (!isValid && value !== '') {
      inputElement.classList.add('error');
      errorElement.textContent = errorMessage;
      errorElement.classList.add('show');
    } else {
      inputElement.classList.remove('error');
      errorElement.classList.remove('show');
    }

    return isValid;
  },

  preventBodyScroll(prevent) {
    document.body.classList.toggle('no-scroll', prevent);
  },

  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  createElement(html) {
    const template = document.createElement('template');
    template.innerHTML = html.trim();
    return template.content.firstChild;
  }
};

// ===== DOM MANAGER =====
const DOM = {
  cache: {},

  get(id) {
    if (!this.cache[id]) {
      this.cache[id] = document.getElementById(id);
    }
    return this.cache[id];
  },

  getAll(selector) {
    return document.querySelectorAll(selector);
  },

  on(element, event, handler, options = false) {
    if (typeof element === 'string') {
      element = this.get(element) || document.querySelector(element);
    }
    if (element) {
      element.addEventListener(event, handler, options);
    }
  },

  addClass(element, className) {
    if (typeof element === 'string') {
      element = this.get(element);
    }
    if (element) {
      element.classList.add(className);
    }
  },

  removeClass(element, className) {
    if (typeof element === 'string') {
      element = this.get(element);
    }
    if (element) {
      element.classList.remove(className);
    }
  },

  toggleClass(element, className) {
    if (typeof element === 'string') {
      element = this.get(element);
    }
    if (element) {
      element.classList.toggle(className);
    }
  }
};

// ===== PRODUCT RENDERER =====
const ProductRenderer = {
  render() {
    const categories = {
      'co-up': DOM.get('co-up-products'),
      'co-tuong': DOM.get('co-tuong-products'),
      'engine': DOM.get('engine-products'),
      'web': DOM.get('web-products')
    };

    Object.keys(categories).forEach(category => {
      const container = categories[category];
      if (!container) return;

      const categoryProducts = PRODUCTS.filter(p => p.category === category);
      container.innerHTML = categoryProducts.map(product =>
        this.createProductCard(product)
      ).join('');
    });

    this.attachEventListeners();
  },

  createProductCard(product) {
    let priceSection = '';

    if (product.pricing === 'single') {
      priceSection = `
        <div class="price-section">
          <div class="product-price">${Utils.formatCurrency(product.price)}</div>
          <div class="price-actions">
            <button class="add-to-cart-btn" data-product-id="${product.id}" data-variant="default" data-price="${product.price}">
              <i class="fas fa-cart-plus"></i> Thêm vào giỏ
            </button>
          </div>
        </div>
      `;
    } else if (product.pricing === 'table') {
      const variantNote = product.note && !product.note.includes('📝') ? `
        <p class="product-desc" style="margin-top: 20px; font-weight: 600;">${product.note}</p>
      ` : '';

      priceSection = `
        <div class="price-section">
          ${variantNote}
          <div class="variant-selector" data-product-id="${product.id}">
            <div class="variant-title">Chọn phiên bản:</div>
            <div class="variant-options">
              ${product.variants.map((variant, index) => `
                <label class="variant-option ${index === 0 ? 'selected' : ''}" data-variant-id="${product.id}-${index}">
                  <input type="radio" name="${product.id}-variant" value="${index}" ${index === 0 ? 'checked' : ''}>
                  <div class="variant-label-container">
                    <span class="variant-label">${variant.label}</span>
                    <span class="variant-price">${Utils.formatCurrency(variant.price)}</span>
                  </div>
                </label>
              `).join('')}
            </div>
          </div>
          <div class="price-actions">
            <button class="add-to-cart-btn" data-product-id="${product.id}">
              <i class="fas fa-cart-plus"></i> Thêm vào giỏ
            </button>
          </div>
        </div>
      `;

      if (product.note && product.note.includes('📝')) {
        priceSection += `<p class="product-note">${product.note}</p>`;
      }
    }

    return `
      <div class="product-card">
        <div class="product-content">
          <span class="product-badge">${product.badge}</span>
          <h4 class="product-title">${product.name}</h4>
          <p class="product-desc">${product.desc}</p>

          <ul class="product-features">
            ${product.features.map(f => `<li>${f}</li>`).join('')}
          </ul>

          ${priceSection}
        </div>
      </div>
    `;
  },

  attachEventListeners() {
    // Variant selection
    DOM.getAll('.variant-option').forEach(option => {
      option.addEventListener('click', function(e) {
        if (e.target.type === 'radio') return;
        const container = this.closest('.variant-selector');
        container.querySelectorAll('.variant-option').forEach(opt =>
          opt.classList.remove('selected')
        );
        this.classList.add('selected');
        this.querySelector('input[type="radio"]').checked = true;
      });
    });

    // Add to cart buttons
    DOM.getAll('.add-to-cart-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        const productId = this.dataset.productId;
        const product = PRODUCTS.find(p => p.id === productId);

        if (product.pricing === 'single') {
          Cart.add(productId, 'default', product.price, product.name);

          if (['pengfeichess-pc', 'sharkchess'].includes(productId)) {
            EngineSuggestion.show();
          }
        } else {
          const variantSelector = document.querySelector(
            `.variant-selector[data-product-id="${productId}"]`
          );
          const selectedRadio = variantSelector.querySelector('input[type="radio"]:checked');
          const variantIndex = parseInt(selectedRadio.value);
          const variant = product.variants[variantIndex];

          Cart.add(productId, variant.label, variant.price, product.name);

          if (productId === 'vo-cuc-tuong-ky' && variant.label.includes('Chỉ GUI')) {
            EngineSuggestion.show();
          }
        }
      });
    });
  }
};

// ===== CART HANDLER =====
const Cart = {
  add(productId, variantLabel, price, productName) {
    const cartItemId = `${productId}-${variantLabel}`;
    const existingItem = State.cart.find(item => item.cartItemId === cartItemId);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      State.cart.push({
        cartItemId,
        productId,
        name: productName,
        variant: variantLabel,
        price,
        quantity: 1
      });
    }

    State.save();
    this.update();
    this.showNotification(`${productName} đã được thêm vào giỏ hàng`);
  },

  remove(cartItemId) {
    State.cart = State.cart.filter(item => item.cartItemId !== cartItemId);
    State.save();
    this.update();
  },

  updateQuantity(cartItemId, change) {
    const item = State.cart.find(item => item.cartItemId === cartItemId);
    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
      this.remove(cartItemId);
    } else {
      State.save();
      this.update();
    }
  },

  update() {
    const totalItems = State.cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCount = DOM.get('cart-count');
    if (cartCount) {
      cartCount.textContent = totalItems;
    }

    const cartBody = DOM.get('cart-body');
    const emptyCart = DOM.get('empty-cart');
    const checkoutBtn = DOM.get('checkout-btn');

    if (State.cart.length === 0) {
      if (emptyCart) emptyCart.style.display = 'block';
      if (cartBody) {
        cartBody.querySelectorAll('.cart-item').forEach(item => item.remove());
      }
      const totalAmount = DOM.get('total-amount');
      if (totalAmount) totalAmount.textContent = '0₫';
      if (checkoutBtn) checkoutBtn.disabled = true;
    } else {
      if (emptyCart) emptyCart.style.display = 'none';
      this.renderItems();

      const total = State.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const totalAmount = DOM.get('total-amount');
      if (totalAmount) totalAmount.textContent = Utils.formatCurrency(total);
      if (checkoutBtn) checkoutBtn.disabled = false;
    }
  },

  renderItems() {
    const cartBody = DOM.get('cart-body');
    if (!cartBody) return;

    const cartItemsHtml = State.cart.map(item => `
      <div class="cart-item" data-cart-item-id="${item.cartItemId}">
        <div class="cart-item-header">
          <div class="cart-item-name">${item.name}</div>
          <button class="remove-item-btn" data-cart-item-id="${item.cartItemId}">
            <i class="fas fa-trash"></i>
          </button>
        </div>
        ${item.variant !== 'default' ? `<div class="cart-item-variant">${item.variant}</div>` : ''}
        <div class="cart-item-footer">
          <div class="cart-item-price">${Utils.formatCurrency(item.price * item.quantity)}</div>
          <div class="quantity-controls">
            <button class="quantity-btn decrease-btn" data-cart-item-id="${item.cartItemId}">-</button>
            <span class="quantity-value">${item.quantity}</span>
            <button class="quantity-btn increase-btn" data-cart-item-id="${item.cartItemId}">+</button>
          </div>
        </div>
      </div>
    `).join('');

    cartBody.querySelectorAll('.cart-item').forEach(item => item.remove());
    cartBody.insertAdjacentHTML('beforeend', cartItemsHtml);

    // Attach event listeners
    cartBody.querySelectorAll('.remove-item-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        Cart.remove(btn.dataset.cartItemId);
      });
    });

    cartBody.querySelectorAll('.decrease-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        Cart.updateQuantity(btn.dataset.cartItemId, -1);
      });
    });

    cartBody.querySelectorAll('.increase-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        Cart.updateQuantity(btn.dataset.cartItemId, 1);
      });
    });
  },

  open() {
    DOM.addClass('cart', 'show');
    DOM.addClass('cart-overlay', 'show');
    Utils.preventBodyScroll(true);
  },

  close() {
    DOM.removeClass('cart', 'show');
    DOM.removeClass('cart-overlay', 'show');
    Utils.preventBodyScroll(false);
  },

  showNotification(message) {
    const notification = Utils.createElement(`
      <div class="notification">
        <i class="fas fa-check-circle"></i> ${message}
      </div>
    `);

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.classList.add('hide');
      setTimeout(() => notification.remove(), CONFIG.animation.duration);
    }, CONFIG.animation.notificationTimeout);
  }
};

// ===== CHECKOUT HANDLER =====
const Checkout = {
  show() {
    if (State.cart.length === 0) return;

    this.updateProgress(1);
    this.clearForm();
    DOM.addClass('checkout-overlay', 'show');
    Utils.preventBodyScroll(true);
    Cart.close();
  },

  hide() {
    DOM.removeClass('checkout-overlay', 'show');
    Utils.preventBodyScroll(false);
  },

  clearForm() {
    const fields = ['customer-name', 'customer-phone', 'customer-email', 'customer-address', 'customer-notes'];
    fields.forEach(id => {
      const el = DOM.get(id);
      if (el) el.value = '';
    });

    DOM.getAll('.error-message').forEach(el => el.classList.remove('show'));
    DOM.getAll('.form-input').forEach(el => el.classList.remove('error'));
  },

  updateProgress(step) {
    const progressSteps = DOM.getAll('.progress-step');
    const checkoutSteps = DOM.getAll('.checkout-step');

    progressSteps.forEach((el, index) => {
      const stepNumber = index + 1;
      if (stepNumber < step) {
        el.classList.add('completed');
        el.classList.remove('active');
      } else if (stepNumber === step) {
        el.classList.add('active');
        el.classList.remove('completed');
      } else {
        el.classList.remove('active', 'completed');
      }
    });

    checkoutSteps.forEach((el, index) => {
      const stepNumber = index + 1;
      el.classList.toggle('active', stepNumber === step);
    });

    State.currentCheckoutStep = step;
  },

  confirmInfo() {
    const nameValid = Utils.validateField(
      DOM.get('customer-name'),
      DOM.get('name-error'),
      Utils.isNameValid,
      'Vui lòng nhập họ tên (tối thiểu 3 ký tự).'
    );

    const phoneValid = Utils.validateField(
      DOM.get('customer-phone'),
      DOM.get('phone-error'),
      Utils.isPhoneValid,
      'Số điện thoại không hợp lệ (10 chữ số).'
    );

    const emailValid = Utils.validateField(
      DOM.get('customer-email'),
      DOM.get('email-error'),
      Utils.isEmailValid,
      'Email không hợp lệ.'
    );

    if (!nameValid || !phoneValid || !emailValid) {
      return;
    }

    State.customerInfo = {
      name: DOM.get('customer-name').value.trim(),
      phone: DOM.get('customer-phone').value.trim(),
      email: DOM.get('customer-email').value.trim(),
      address: DOM.get('customer-address').value.trim(),
      notes: DOM.get('customer-notes').value.trim()
    };

    State.currentOrderReference = Utils.generateOrderReference();

    this.setupPaymentStep();
    this.updateProgress(2);
  },

  setupPaymentStep() {
    const total = State.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const orderItems = DOM.get('order-items');
    if (orderItems) {
      orderItems.innerHTML = State.cart.map(item => `
        <div class="order-item">
          <div class="order-item-info">
            <div class="order-item-name">${item.name}</div>
            ${item.variant !== 'default' ? `<div class="order-item-variant">${item.variant}</div>` : ''}
            <div class="order-item-quantity">Số lượng: ${item.quantity}</div>
          </div>
          <div class="order-item-price">${Utils.formatCurrency(item.price * item.quantity)}</div>
        </div>
      `).join('');
    }

    const elements = {
      'order-total': Utils.formatCurrency(total),
      'qr-amount': Utils.formatCurrency(total),
      'qr-reference': State.currentOrderReference,
      'bank-amount': Utils.formatCurrency(total),
      'bank-reference': State.currentOrderReference
    };

    Object.entries(elements).forEach(([id, value]) => {
      const el = DOM.get(id);
      if (el) el.textContent = value;
    });

    const paymentQr = DOM.get('payment-qr');
    if (paymentQr) paymentQr.checked = true;

    const qrDetails = DOM.get('qr-payment-details');
    const bankDetails = DOM.get('bank-transfer-details');
    if (qrDetails) qrDetails.style.display = 'block';
    if (bankDetails) bankDetails.style.display = 'none';
  },

  async complete() {
    const completeBtn = DOM.get('complete-order-btn');
    if (!completeBtn) return;

    completeBtn.disabled = true;
    completeBtn.innerHTML = '<span class="loading-spinner"></span> Đang xử lý...';

    try {
      const orderData = {
        orderReference: State.currentOrderReference,
        customerInfo: State.customerInfo,
        cart: State.cart,
        totalAmount: State.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        paymentMethod: document.querySelector('input[name="payment-method"]:checked')?.value || 'qr',
        timestamp: new Date().toLocaleString('vi-VN')
      };

      await this.sendTelegramNotification(orderData);

      const orderRefSuccess = DOM.get('order-reference-success');
      if (orderRefSuccess) {
        orderRefSuccess.textContent = '#' + State.currentOrderReference;
      }

      this.updateProgress(3);

      State.cart = [];
      State.save();
      Cart.update();

    } catch (error) {
      console.error('Lỗi khi xử lý đơn hàng:', error);

      const orderRefSuccess = DOM.get('order-reference-success');
      if (orderRefSuccess) {
        orderRefSuccess.textContent = '#' + State.currentOrderReference;
      }

      this.updateProgress(3);

      State.cart = [];
      State.save();
      Cart.update();
    } finally {
      completeBtn.disabled = false;
      completeBtn.innerHTML = 'Hoàn tất đơn hàng';
    }
  },

  async sendTelegramNotification(orderData) {
    const { botToken, chatId } = CONFIG.telegram;

    const productsText = orderData.cart.map((item, index) => {
      const variant = item.variant !== 'default' ? ` - ${item.variant}` : '';
      return `${index + 1}. ${item.name}${variant}\n   • Số lượng: ${item.quantity}\n   • Đơn giá: ${Utils.formatCurrency(item.price)}\n   • Thành tiền: ${Utils.formatCurrency(item.price * item.quantity)}`;
    }).join('\n\n');

    const paymentMethodText = orderData.paymentMethod === 'qr'
      ? '💳 Zalo/Momo QR (0934571206)'
      : '🏦 Chuyển khoản MB Bank (0934571206)';

    const message = `
🎉 ĐƠN HÀNG MỚI 🎉

━━━━━━━━━━━━━━━━━━━━━━
📋 Mã đơn hàng: #${orderData.orderReference}
⏰ Thời gian: ${orderData.timestamp}

━━━━━━━━━━━━━━━━━━━━━━
👤 THÔNG TIN KHÁCH HÀNG

• Họ tên: ${orderData.customerInfo.name}
• Số điện thoại: ${orderData.customerInfo.phone}
• Email: ${orderData.customerInfo.email}
${orderData.customerInfo.address ? `• Địa chỉ: ${orderData.customerInfo.address}` : ''}
${orderData.customerInfo.notes ? `• Ghi chú: ${orderData.customerInfo.notes}` : ''}

━━━━━━━━━━━━━━━━━━━━━━
🛍️ SẢN PHẨM ĐÃ ĐẶT

${productsText}

━━━━━━━━━━━━━━━━━━━━━━
💰 TỔNG TIỀN: ${Utils.formatCurrency(orderData.totalAmount)}
${paymentMethodText}

━━━━━━━━━━━━━━━━━━━━━━
✅ Vui lòng liên hệ khách hàng để xác nhận đơn hàng!
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodedMessage}`;

    return new Promise((resolve) => {
      fetch(url, { method: 'GET', mode: 'no-cors' })
        .then(() => resolve({ success: true }))
        .catch(() => resolve({ success: true }));

      setTimeout(() => resolve({ success: true }), 2000);
    });
  }
};

// ===== ENGINE SUGGESTION HANDLER =====
const EngineSuggestion = {
  show() {
    DOM.addClass('engine-suggestion-overlay', 'show');
    Utils.preventBodyScroll(true);
  },

  hide() {
    DOM.removeClass('engine-suggestion-overlay', 'show');
    Utils.preventBodyScroll(false);
  },

  addEngine(engineId, variantIndex) {
    const engineProducts = {
      'bugchess': {
        id: 'bugchess',
        name: 'Bugchess (Tiểu trùng tượng kỳ)',
        variants: [
          { label: '4 luồng xử lý', price: 2850000 },
          { label: '32 luồng xử lý', price: 13250000 },
          { label: '128 luồng xử lý', price: 18850000 }
        ]
      },
      'cyclone': {
        id: 'cyclone',
        name: 'Cyclone (Tượng kỳ toàn phong)',
        variants: [
          { label: '4 luồng xử lý', price: 3850000 },
          { label: '32 luồng xử lý', price: 14450000 },
          { label: '128 luồng xử lý', price: 21650000 }
        ]
      }
    };

    const engine = engineProducts[engineId];
    const variant = engine.variants[variantIndex];

    Cart.add(engine.id, variant.label, variant.price, engine.name);
    this.hide();
  }
};

// ===== HEADER HANDLER =====
const Header = {
  lastScrollTop: 0,
  header: null,

  init() {
    this.header = DOM.get('main-header');
    if (!this.header) return;

    window.addEventListener('scroll', Utils.debounce(() => {
      this.handleScroll();
    }, 10));
  },

  handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 50) {
      this.header.classList.add('scrolled');
    } else {
      this.header.classList.remove('scrolled');
    }

    if (scrollTop > 100) {
      if (scrollTop > this.lastScrollTop) {
        this.header.style.transform = 'translateY(-100%)';
      } else {
        this.header.style.transform = 'translateY(0)';
      }
    } else {
      this.header.style.transform = 'translateY(0)';
    }

    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }
};

// ===== EVENT HANDLERS =====
const EventHandlers = {
  init() {
    // Cart
    DOM.on('cart-toggle', 'click', () => Cart.open());
    DOM.on('close-cart-btn', 'click', () => Cart.close());
    DOM.on('cart-overlay', 'click', (e) => {
      if (e.target.id === 'cart-overlay') Cart.close();
    });

    // Checkout
    DOM.on('checkout-btn', 'click', () => Checkout.show());
    DOM.on('close-checkout-btn', 'click', () => Checkout.hide());
    DOM.on('checkout-overlay', 'click', (e) => {
      if (e.target.id === 'checkout-overlay') Checkout.hide();
    });

    DOM.on('confirm-info-btn', 'click', () => Checkout.confirmInfo());
    DOM.on('back-to-info-btn', 'click', () => Checkout.updateProgress(1));
    DOM.on('complete-order-btn', 'click', () => Checkout.complete());
    DOM.on('back-to-shop-btn', 'click', () => {
      Checkout.hide();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Payment method
    DOM.getAll('input[name="payment-method"]').forEach(radio => {
      radio.addEventListener('change', () => {
        DOM.getAll('.payment-option').forEach(opt => opt.classList.remove('selected'));
        radio.closest('.payment-option').classList.add('selected');

        const qrDetails = DOM.get('qr-payment-details');
        const bankDetails = DOM.get('bank-transfer-details');

        if (radio.value === 'qr') {
          if (qrDetails) qrDetails.style.display = 'block';
          if (bankDetails) bankDetails.style.display = 'none';
        } else {
          if (qrDetails) qrDetails.style.display = 'none';
          if (bankDetails) bankDetails.style.display = 'block';
        }
      });
    });

    // Form validation
    ['customer-name', 'customer-phone', 'customer-email'].forEach(id => {
      const input = DOM.get(id);
      if (!input) return;

      input.addEventListener('input', function() {
        let validationFunc, errorMessage;

        if (id === 'customer-name') {
          validationFunc = Utils.isNameValid;
          errorMessage = 'Vui lòng nhập họ tên (tối thiểu 3 ký tự).';
        } else if (id === 'customer-phone') {
          validationFunc = Utils.isPhoneValid;
          errorMessage = 'Số điện thoại không hợp lệ (10 chữ số).';
        } else {
          validationFunc = Utils.isEmailValid;
          errorMessage = 'Email không hợp lệ.';
        }

        Utils.validateField(
          this,
          DOM.get(id.replace('customer-', '') + '-error'),
          validationFunc,
          errorMessage
        );
      });
    });

    // Engine Suggestion
    DOM.on('close-engine-suggestion-btn', 'click', () => EngineSuggestion.hide());
    DOM.on('skip-engine-btn', 'click', () => EngineSuggestion.hide());
    DOM.on('engine-suggestion-overlay', 'click', (e) => {
      if (e.target.id === 'engine-suggestion-overlay') EngineSuggestion.hide();
    });

    DOM.getAll('.add-engine-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        const engineId = this.dataset.engineId;
        const selectedRadio = document.querySelector(`input[name="${engineId}-variant"]:checked`);
        const variantIndex = parseInt(selectedRadio.value);

        EngineSuggestion.addEngine(engineId, variantIndex);
      });
    });

    // Contact button
    const contactBtn = document.querySelector('.contact-btn');
    if (contactBtn) {
      contactBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }

    // ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (DOM.get('cart').classList.contains('show')) {
          Cart.close();
        } else if (DOM.get('checkout-overlay').classList.contains('show')) {
          Checkout.hide();
        } else if (DOM.get('engine-suggestion-overlay').classList.contains('show')) {
          EngineSuggestion.hide();
        }
      }
    });
  }
};

// ===== MAIN APP =====
const App = {
  init() {
    // Set current year
    const yearEl = DOM.get('current-year');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }

    // Load state
    State.load();

    // Render products
    ProductRenderer.render();

    // Update cart
    Cart.update();

    // Init header
    Header.init();

    // Attach event handlers
    EventHandlers.init();

    // Register service worker
    this.registerServiceWorker();

    console.log('SaiGonChess Shop initialized successfully!');
  },

  registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then((registration) => {
            console.log('[App] Service Worker registered:', registration);

            // Check for updates periodically
            setInterval(() => {
              registration.update();
            }, 60 * 60 * 1000); // Check every hour
          })
          .catch((error) => {
            console.error('[App] Service Worker registration failed:', error);
          });
      });
    }
  }
};

// ===== INITIALIZATION =====
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => App.init());
} else {
  App.init();
}

// Export for debugging (optional)
if (typeof window !== 'undefined') {
  window.ChessShop = {
    State,
    Cart,
    Checkout,
    Utils,
    PRODUCTS
  };
}
