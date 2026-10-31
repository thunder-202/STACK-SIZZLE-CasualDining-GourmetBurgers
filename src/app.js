const IMAGES = {
  doubleStack: new URL('./assets/images/double_stack_burger_1793352931979.jpg', import.meta.url).href,
  bbqChicken: new URL('./assets/images/bbq_chicken_burger_1793352933742.jpg', import.meta.url).href,
  crispySouthern: new URL('./assets/images/crispy_southern_chicken_1793352935821.jpg', import.meta.url).href,
  truffleFries: new URL('./assets/images/loaded_truffle_fries_1793352936748.jpg', import.meta.url).href,
  spicyCrunch: new URL('./assets/images/spicy_crunch_burger_1793352938122.jpg', import.meta.url).href,
  chocolateShake: new URL('./assets/images/classic_chocolate_shake_1793352939206.jpg', import.meta.url).href,
  heroFeast: new URL('./assets/images/hero_burger_feast_1793352930905.jpg', import.meta.url).href,
  promoSpread: new URL('./assets/images/promo_table_spread_1793352940522.jpg', import.meta.url).href,
  kitchenGrill: new URL('./assets/images/kitchen_grill_sizzle_1793352942530.jpg', import.meta.url).href,
  freshIngredients: new URL('./assets/images/fresh_burger_ingredients_1793352944054.jpg', import.meta.url).href,
  friendsDining: new URL('./assets/images/friends_casual_dining_1793352946431.jpg', import.meta.url).href,
  brownieSundae: new URL('./assets/images/brownie_waffle_sundae_1793352947803.jpg', import.meta.url).href,
};

const MENU_ITEMS = [
  {
    id: 'double-stack-burger',
    name: 'The Double Stack Burger',
    category: 'Burgers',
    price: 19.5,
    dietary: 'GF Bun Option',
    image: IMAGES.doubleStack,
    alt: 'The Double Stack Burger with two seared Wagyu-blend patties, double cheddar, pickles, and sizzle sauce',
    description:
      'Two lacy-edged Queensland Wagyu-blend smash patties, double American cheddar, house-cured crinkle pickles, diced white onion, and smoky sizzle sauce on a warm potato bun.',
    prepNote: 'Pressed fresh on seasoned hot steel · Swap to gluten-free bun on request.',
  },
  {
    id: 'bacon-maple-sizzle-burger',
    name: 'Streaky Bacon & Cheddar Smash',
    category: 'Burgers',
    price: 20.5,
    dietary: 'GF Bun Option',
    image: IMAGES.heroFeast,
    alt: 'Double smash burger with streaky smoky bacon, aged cheddar, and house relish',
    description:
      'Double grass-fed smash beef, ironbark-smoked streaky bacon, double aged cheddar, charred onion jam, crisp dill pickles, and black pepper mayo.',
    prepNote: 'Served hot off the pass · Pairs well with Loaded Truffle Fries.',
  },
  {
    id: 'sourdough-steak-melt',
    name: 'Chargrilled Sourdough Steak Melt',
    category: 'Burgers',
    price: 21.0,
    dietary: 'Signature Melt',
    image: IMAGES.promoSpread,
    alt: 'Toasted sourdough grilled steak sandwich with melted provolone, caramelised onion, and rocket',
    description:
      'Sliced seared rib-fillet steak, melted provolone, slow-caramelised balsamic onions, wild rocket, and horseradish herb mayo pressed between thick-cut sourdough.',
    prepNote: 'Buttered crust grilled golden on the flat-top.',
  },
  {
    id: 'green-garden-halloumi-burger',
    name: 'Crisp Halloumi & Avocado Stack',
    category: 'Burgers',
    price: 18.2,
    dietary: 'Vegetarian · GF Bun Option',
    image: IMAGES.freshIngredients,
    alt: 'Fresh heirloom tomato, butter lettuce, red onion, cheddar, and golden brioche buns',
    description:
      'Golden pan-seared Queensland halloumi, smashed Hass avocado, heirloom tomato, butterhead lettuce, pickled red onion, and lemon-herb aioli on toasted brioche.',
    prepNote: 'Vegetarian favourite · Can be prepared with plant-based patty.',
  },
  {
    id: 'smoky-bbq-chicken-burger',
    name: 'Smoky BBQ Chicken Burger',
    category: 'Chicken',
    price: 18.9,
    dietary: 'Flame Grilled',
    image: IMAGES.bbqChicken,
    alt: 'Smoky BBQ Chicken Burger with hickory barbecue glaze, crispy onion rings, cheddar, and slaw',
    description:
      'Chargrilled buttermilk chicken thigh basted in hickory-molasses BBQ glaze, beer-battered onion rings, aged cheddar, and crisp Granny Smith apple slaw.',
    prepNote: '24-hour buttermilk marinade grilled over open heat.',
  },
  {
    id: 'spicy-crunch-burger',
    name: 'Spicy Crunch Burger',
    category: 'Chicken',
    price: 19.2,
    dietary: 'Spicy',
    image: IMAGES.spicyCrunch,
    alt: 'Spicy Crunch Burger with fiery chili glaze, pickled jalapenos, melted pepper jack, and cabbage slaw',
    description:
      'Crispy fried chicken breast lacquered in fiery habanero-honey oil, pickled green jalapenos, melted pepper jack cheese, crunchy red cabbage slaw, and chipotle mayo.',
    prepNote: 'Medium-hot kick · Mild comeback glaze available on request.',
  },
  {
    id: 'crispy-southern-chicken',
    name: 'Crispy Southern Chicken Tenders',
    category: 'Chicken',
    price: 16.5,
    dietary: 'House Brined',
    image: IMAGES.crispySouthern,
    alt: 'Golden Crispy Southern Chicken tenders with creamy comeback dipping sauce and dill pickles',
    description:
      'Five free-range buttermilk-brined tenders dredged in cracked pepper seasoned flour, fried extra-crunchy, and served with house comeback sauce and bread-and-butter pickles.',
    prepNote: 'Includes choice of one house-whipped dipping sauce.',
  },
  {
    id: 'sticky-buffalo-wings',
    name: 'Smoky Hot Honey Chicken Wings',
    category: 'Chicken',
    price: 15.8,
    dietary: 'Spicy',
    image: IMAGES.promoSpread,
    alt: 'Glazed chicken wings served in a basket with crisp celery sticks and ranch dip',
    description:
      'Eight crisp-skinned wings tossed in charred chilli and Queensland bush honey glaze, plated with chilled celery batons and buttermilk ranch dip.',
    prepNote: 'Cooked fresh to order for crisp skin.',
  },
  {
    id: 'loaded-truffle-fries',
    name: 'Loaded Truffle Fries',
    category: 'Sides',
    price: 13.5,
    dietary: 'Vegetarian · Gluten-Free',
    image: IMAGES.truffleFries,
    alt: 'Loaded Truffle Fries with shaved Parmigiano-Reggiano, black truffle oil, roasted garlic aioli, and chives',
    description:
      'Double-cooked skin-on fries tossed in aromatic black truffle oil, buried under 24-month shaved parmesan, roasted garlic aioli ribbons, and fresh snipped chives.',
    prepNote: 'Fried in dedicated plant-oil vat.',
  },
  {
    id: 'sizzle-bacon-cheese-fries',
    name: 'Sizzle Sauce & Bacon Loaded Fries',
    category: 'Sides',
    price: 14.2,
    dietary: 'Crowd Favourite',
    image: IMAGES.friendsDining,
    alt: 'Skillet of loaded cheddar, crispy bacon, and jalapeno fries on a timber booth table',
    description:
      'Golden shoestring fries smothered in warm aged cheddar sauce, smoky bacon bits, pickled jalapeno slices, spring onion, and tangy house sizzle drizzle.',
    prepNote: 'Generous share portion for two.',
  },
  {
    id: 'rosemary-sea-salt-fries',
    name: 'Rosemary & Murray River Salt Fries',
    category: 'Sides',
    price: 8.5,
    dietary: 'Vegan · Gluten-Free',
    image: IMAGES.heroFeast,
    alt: 'Skin-on golden fries seasoned with crispy rosemary and flaky sea salt',
    description:
      'Crisp skin-on Sebago potato fries tossed hot with flash-fried rosemary needles, flaky pink salt, and a pot of house smoked tomato relish.',
    prepNote: '100% plant-based and gluten-free.',
  },
  {
    id: 'classic-chocolate-shake',
    name: 'Classic Chocolate Shake',
    category: 'Drinks',
    price: 10.5,
    dietary: 'Vegetarian',
    image: IMAGES.chocolateShake,
    alt: 'Classic Belgian dark chocolate thickshake topped with whipped cream and chocolate curls',
    description:
      'Spun thick with Maleny jersey milk ice cream, Belgian 70% dark chocolate ganache, roasted malt, whipped cream peak, and dark chocolate curls.',
    prepNote: 'Served in chilled fountain glass dine-in or insulated cup takeaway.',
  },
  {
    id: 'salted-caramel-malt-shake',
    name: 'Salted Caramel & Roasted Malt Shake',
    category: 'Drinks',
    price: 10.9,
    dietary: 'Vegetarian',
    image: IMAGES.friendsDining,
    alt: 'Hand-spun thickshakes topped with whipped cream at a casual restaurant table',
    description:
      'Velvety vanilla bean ice cream blended with house-cooked sea salt caramel, golden malted barley crunch, and fresh whipped cream.',
    prepNote: 'Made to order at the shake bar.',
  },
  {
    id: 'blood-orange-craft-soda',
    name: 'Queensland Blood Orange & Lime Soda',
    category: 'Drinks',
    price: 6.8,
    dietary: 'Vegan · Caffeine-Free',
    image: IMAGES.promoSpread,
    alt: 'Chilled sparkling citrus craft sodas with fresh lime over ice',
    description:
      'Small-batch sparkling soda pressed with orchard blood orange, Tahitian lime juice, and a hint of crushed mint over cracked ice.',
    prepNote: 'Crisp, low-sugar house refresher.',
  },
  {
    id: 'brownie-waffle-sundae',
    name: 'Warm Brownie & Belgian Waffle Sundae',
    category: 'Desserts',
    price: 14.5,
    dietary: 'Vegetarian',
    image: IMAGES.brownieSundae,
    alt: 'Warm dark chocolate fudge brownie and crisp Belgian waffle topped with vanilla bean ice cream, salted caramel, and toasted pecans',
    description:
      'Fudgy dark chocolate brownie beside a crisp toasted Liège waffle quarter, crowned with vanilla bean ice cream, warm salted caramel, and roasted pecans.',
    prepNote: 'Baked in small trays daily · Ideal to share.',
  },
  {
    id: 'cinnamon-waffle-fingers',
    name: 'Spiced Cinnamon Waffle Dippers',
    category: 'Desserts',
    price: 11.5,
    dietary: 'Vegetarian',
    image: IMAGES.brownieSundae,
    alt: 'Crisp golden waffle strips dusted with cinnamon sugar and dark chocolate fudge sauce',
    description:
      'Crisp golden waffle fingers dusted in warm cinnamon caster sugar, served with pots of warm Belgian dark chocolate fudge and salted caramel.',
    prepNote: 'Toasted fresh when ordered.',
  },
];

const GALLERY_ITEMS = [
  {
    src: IMAGES.doubleStack,
    title: 'Lacy-Edged Double Smash Sear',
    caption: 'Two Wagyu-blend patties pressed onto seasoned steel with double cheddar melt and tangy sizzle sauce.',
    spanClass: 'lg:col-span-7 aspect-[16/10]',
  },
  {
    src: IMAGES.truffleFries,
    title: 'Black Truffle & Aged Parmesan Fries',
    caption: 'Skin-on Sebago fries finished with 24-month shaved Parmigiano-Reggiano, garlic aioli, and fresh chives.',
    spanClass: 'lg:col-span-5 aspect-[4/3] lg:aspect-auto',
  },
  {
    src: IMAGES.freshIngredients,
    title: 'Morning Kitchen Prep',
    caption: 'Heirloom tomatoes, crisp butter lettuce, house-cured crinkle pickles, and locally baked brioche buns.',
    spanClass: 'lg:col-span-4 aspect-[4/3]',
  },
  {
    src: IMAGES.chocolateShake,
    title: 'Hand-Spun Fountain Thickshakes',
    caption: 'Spun thick with Queensland dairy ice cream, Belgian 70% dark chocolate ganache, and fresh cream.',
    spanClass: 'lg:col-span-4 aspect-[4/3]',
  },
  {
    src: IMAGES.kitchenGrill,
    title: 'Live Flat-Top Pass',
    caption: 'Every burger is pressed fresh to order in our open forest-green-tiled Brisbane kitchen.',
    spanClass: 'lg:col-span-4 aspect-[4/3]',
  },
  {
    src: IMAGES.friendsDining,
    title: 'Built for Good Company',
    caption: 'Timber booths, warm brass lighting, and trays of burgers and shakes made for long catch-ups.',
    spanClass: 'sm:col-span-2 lg:col-span-12 aspect-[16/9] max-h-[420px]',
  },
];

let activeCategory = 'all';
/** @type {Record<string, number>} */
let cart = {};
let demoCheckoutCompleted = false;
let activeModalItemId = null;
let activeLightboxIndex = 0;
let toastTimer = null;

function formatAUD(amount) {
  return `$${amount.toFixed(2)}`;
}

function getCartTotals() {
  let count = 0;
  let subtotal = 0;
  for (const [id, qty] of Object.entries(cart)) {
    const item = MENU_ITEMS.find((entry) => entry.id === id);
    if (item && qty > 0) {
      count += qty;
      subtotal += item.price * qty;
    }
  }
  return { count, subtotal };
}

function attachImageFallbacks(root = document) {
  const imgs = root.querySelectorAll('img');
  imgs.forEach((img) => {
    if (img.dataset.fallbackBound === 'true') return;
    img.dataset.fallbackBound = 'true';
    img.addEventListener('error', () => {
      const parent = img.parentElement;
      if (!parent) return;
      const label = img.dataset.fallbackLabel || img.alt || 'STACK & SIZZLE';
      img.hidden = true;
      const fallback = document.createElement('div');
      fallback.className = 'img-fallback-box w-full h-full flex flex-col items-center justify-center p-6 text-center';
      fallback.innerHTML = `
        <svg class="w-8 h-8 mb-2 text-[#F25C05]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 11h16M5 11a7 7 0 0114 0M4 15h16M6 15v2a2 2 0 002 2h8a2 2 0 002-2v-2" />
        </svg>
        <span class="font-display text-sm font-bold">${label}</span>
      `;
      parent.appendChild(fallback);
    });
  });
}

function showToast(message, showCartLink = true) {
  const toastEl = document.getElementById('toast-notification');
  const msgEl = document.getElementById('toast-message');
  const cartActionEl = document.getElementById('toast-cart-action');
  if (!toastEl || !msgEl || !cartActionEl) return;

  msgEl.textContent = message;
  cartActionEl.hidden = !showCartLink;
  toastEl.classList.add('is-visible');

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastEl.classList.remove('is-visible');
  }, 3200);
}

function renderMenuGrid() {
  const grid = document.getElementById('menu-items-grid');
  const countLabel = document.getElementById('menu-results-count');
  if (!grid) return;

  const filtered =
    activeCategory === 'all'
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeCategory);

  if (countLabel) {
    const catText = activeCategory === 'all' ? 'menu items' : `${activeCategory.toLowerCase()} items`;
    countLabel.textContent = `Showing ${filtered.length} ${catText}`;
  }

  grid.innerHTML = filtered
    .map((item) => {
      const qty = cart[item.id] || 0;
      const actionMarkup =
        qty > 0
          ? `
            <div class="inline-flex items-center rounded-md border border-[#123524] bg-[#123524] text-[#FAF7F2]">
              <button
                type="button"
                data-dec-id="${item.id}"
                aria-label="Decrease quantity of ${item.name}"
                class="w-9 h-9 inline-flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer font-bold"
              >&minus;</button>
              <span class="font-price text-xs font-semibold px-2.5 min-w-[2rem] text-center">${qty}</span>
              <button
                type="button"
                data-inc-id="${item.id}"
                aria-label="Increase quantity of ${item.name}"
                class="w-9 h-9 inline-flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer font-bold"
              >+</button>
            </div>
          `
          : `
            <button
              type="button"
              data-add-id="${item.id}"
              class="btn-primary px-4 py-2 rounded-md text-xs font-semibold whitespace-nowrap shrink-0 cursor-pointer"
            >
              Add to Order
            </button>
          `;

      return `
        <article class="food-card bg-[#FAF7F2] border border-[#1C1E1C]/10 rounded-lg overflow-hidden flex flex-col justify-between">
          <div>
            <div class="food-media relative aspect-[4/3] overflow-hidden bg-[#141514]">
              <img
                src="${item.image}"
                alt="${item.alt}"
                referrerpolicy="no-referrer"
                loading="lazy"
                data-fallback-label="${item.name}"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-6 pb-4">
              <div class="flex items-baseline justify-between gap-3 mb-1.5">
                <p class="text-xs font-medium text-[#636863]">
                  ${item.category} <span aria-hidden="true">·</span> ${item.dietary}
                </p>
                <span class="font-price text-[15px] font-semibold text-[#123524] whitespace-nowrap shrink-0">
                  ${formatAUD(item.price)} AUD
                </span>
              </div>
              <h3 class="font-display text-lg font-bold text-[#1C1E1C] mb-2">
                ${item.name}
              </h3>
              <p class="text-sm text-[#3D413D] leading-relaxed">
                ${item.description}
              </p>
            </div>
          </div>
          <div class="px-6 pb-6 pt-2 flex items-center justify-between gap-3">
            <button
              type="button"
              data-view-id="${item.id}"
              class="text-xs font-semibold text-[#1C1E1C] hover:text-[#D9480F] underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              View Item
            </button>
            ${actionMarkup}
          </div>
        </article>
      `;
    })
    .join('');

  attachImageFallbacks(grid);
}

function renderGallery() {
  const galleryGrid = document.getElementById('gallery-grid');
  if (!galleryGrid) return;

  galleryGrid.innerHTML = GALLERY_ITEMS.map(
    (item, idx) => `
      <button
        type="button"
        data-gallery-index="${idx}"
        aria-label="Open photo in lightbox: ${item.title}"
        class="gallery-tile group relative rounded-lg overflow-hidden bg-[#141514] text-left cursor-pointer ${item.spanClass}"
      >
        <img
          src="${item.src}"
          alt="${item.caption}"
          referrerpolicy="no-referrer"
          loading="lazy"
          data-fallback-label="${item.title}"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5">
          <span class="font-display text-base sm:text-lg font-bold text-[#FAF7F2]">${item.title}</span>
          <span class="text-xs text-[#FAF7F2]/80 line-clamp-1">${item.caption}</span>
        </div>
      </button>
    `
  ).join('');

  attachImageFallbacks(galleryGrid);
}

function renderCartUI() {
  const { count, subtotal } = getCartTotals();

  const headerOrderLabel = document.getElementById('header-order-label');
  if (headerOrderLabel) {
    headerOrderLabel.textContent = count > 0 ? `Order Online (${count})` : 'Order Online';
  }

  const menuCartSummary = document.getElementById('menu-cart-summary');
  if (menuCartSummary) {
    menuCartSummary.textContent = count > 0 ? `${count} · ${formatAUD(subtotal)}` : '$0.00';
  }

  const subtotalEl = document.getElementById('cart-subtotal');
  if (subtotalEl) {
    subtotalEl.textContent = formatAUD(subtotal);
  }

  const clearBtn = document.getElementById('clear-cart-btn');
  const placeBtn = document.getElementById('place-demo-order-btn');
  if (clearBtn) clearBtn.disabled = count === 0;
  if (placeBtn) placeBtn.disabled = count === 0;

  const container = document.getElementById('cart-items-container');
  if (!container) return;

  if (demoCheckoutCompleted && count === 0) {
    container.innerHTML = `
      <div class="p-6 rounded-lg bg-[#123524] text-[#FAF7F2] space-y-3">
        <p class="text-xs font-semibold text-[#F25C05]">Portfolio Demo Confirmation</p>
        <h3 class="font-display text-2xl font-extrabold">Demo Order Simulated!</h3>
        <p class="text-sm text-[#FAF7F2]/85 leading-relaxed">
          Thank you for testing the STACK &amp; SIZZLE online ordering flow. Because this website is a fictional agency portfolio demonstration, no payment was charged and no order has been sent to a restaurant.
        </p>
        <div class="pt-2">
          <button
            type="button"
            id="reset-demo-order-btn"
            class="btn-primary px-4 py-2 rounded-md text-xs font-semibold cursor-pointer"
          >
            Start Another Demo Order
          </button>
        </div>
      </div>
    `;
    const resetBtn = document.getElementById('reset-demo-order-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        demoCheckoutCompleted = false;
        closeCartDrawer();
        const menuSection = document.getElementById('menu');
        if (menuSection) menuSection.scrollIntoView({ behavior: 'smooth' });
      });
    }
    return;
  }

  const entries = Object.entries(cart).filter(([, qty]) => qty > 0);
  if (entries.length === 0) {
    container.innerHTML = `
      <div class="py-12 text-center space-y-4">
        <p class="font-display text-xl font-bold text-[#1C1E1C]">Your demo order tray is empty</p>
        <p class="text-sm text-[#636863] max-w-xs mx-auto leading-relaxed">
          Explore our burgers, Southern chicken, loaded fries, and shakes to test the interactive cart demonstration.
        </p>
        <div class="pt-2">
          <a
            href="#menu"
            id="empty-cart-browse-btn"
            class="btn-forest px-5 py-2.5 rounded-md text-sm font-semibold inline-block"
          >
            Browse Menu Items
          </a>
        </div>
      </div>
    `;
    const browseBtn = document.getElementById('empty-cart-browse-btn');
    if (browseBtn) {
      browseBtn.addEventListener('click', () => closeCartDrawer());
    }
    return;
  }

  container.innerHTML = entries
    .map(([id, qty]) => {
      const item = MENU_ITEMS.find((entry) => entry.id === id);
      if (!item) return '';
      const lineTotal = item.price * qty;
      return `
        <div class="p-4 rounded-lg bg-white border border-[#1C1E1C]/10 flex items-start justify-between gap-4">
          <div class="min-w-0 flex-1">
            <h3 class="font-display text-base font-bold text-[#1C1E1C] truncate">${item.name}</h3>
            <p class="font-price text-xs text-[#636863] mt-0.5">${formatAUD(item.price)} AUD each</p>
            <div class="mt-3 flex items-center gap-3">
              <div class="inline-flex items-center rounded border border-[#1C1E1C]/20 bg-[#FAF7F2]">
                <button
                  type="button"
                  data-dec-id="${item.id}"
                  aria-label="Decrease quantity of ${item.name}"
                  class="w-8 h-8 inline-flex items-center justify-center text-sm font-bold hover:bg-[#1C1E1C]/5 cursor-pointer"
                >&minus;</button>
                <span class="font-price text-xs font-semibold px-2.5 min-w-[1.75rem] text-center">${qty}</span>
                <button
                  type="button"
                  data-inc-id="${item.id}"
                  aria-label="Increase quantity of ${item.name}"
                  class="w-8 h-8 inline-flex items-center justify-center text-sm font-bold hover:bg-[#1C1E1C]/5 cursor-pointer"
                >+</button>
              </div>
              <button
                type="button"
                data-remove-id="${item.id}"
                class="text-xs font-medium text-[#636863] hover:text-[#BF3D0A] underline underline-offset-2 cursor-pointer"
              >
                Remove
              </button>
            </div>
          </div>
          <div class="font-price text-sm font-bold text-[#123524] whitespace-nowrap shrink-0">
            ${formatAUD(lineTotal)}
          </div>
        </div>
      `;
    })
    .join('');
}

function addToCart(itemId) {
  const item = MENU_ITEMS.find((entry) => entry.id === itemId);
  if (!item) return;
  demoCheckoutCompleted = false;
  cart[itemId] = (cart[itemId] || 0) + 1;
  renderCartUI();
  renderMenuGrid();
  showToast(`Added ${item.name} to demo order`, true);
}

function updateQuantity(itemId, delta) {
  const next = (cart[itemId] || 0) + delta;
  if (next <= 0) {
    delete cart[itemId];
  } else {
    cart[itemId] = next;
  }
  renderCartUI();
  renderMenuGrid();
}

function removeFromCart(itemId) {
  delete cart[itemId];
  renderCartUI();
  renderMenuGrid();
}

function clearCart() {
  cart = {};
  demoCheckoutCompleted = false;
  renderCartUI();
  renderMenuGrid();
  showToast('Demo cart cleared', false);
}

function syncBodyScrollLock() {
  const anyOpen = document.querySelector(
    '#cart-backdrop.is-open, #item-modal-backdrop.is-open, #lightbox-backdrop.is-open, #directions-modal-backdrop.is-open'
  );
  document.body.classList.toggle('modal-open', Boolean(anyOpen));
}

function openCartDrawer() {
  const backdrop = document.getElementById('cart-backdrop');
  const drawer = document.getElementById('cart-drawer');
  if (!backdrop || !drawer) return;
  backdrop.classList.add('is-open');
  backdrop.setAttribute('aria-hidden', 'false');
  drawer.classList.add('is-open');
  syncBodyScrollLock();
}

function closeCartDrawer() {
  const backdrop = document.getElementById('cart-backdrop');
  const drawer = document.getElementById('cart-drawer');
  if (!backdrop || !drawer) return;
  backdrop.classList.remove('is-open');
  backdrop.setAttribute('aria-hidden', 'true');
  drawer.classList.remove('is-open');
  syncBodyScrollLock();
}

function openItemModal(itemId) {
  const item = MENU_ITEMS.find((entry) => entry.id === itemId);
  const backdrop = document.getElementById('item-modal-backdrop');
  if (!item || !backdrop) return;

  activeModalItemId = item.id;
  const img = document.getElementById('item-modal-image');
  const meta = document.getElementById('item-modal-meta');
  const price = document.getElementById('item-modal-price');
  const title = document.getElementById('item-modal-title');
  const desc = document.getElementById('item-modal-desc');
  const prep = document.getElementById('item-modal-prep');

  if (img) {
    img.hidden = false;
    img.src = item.image;
    img.alt = item.alt;
  }
  if (meta) meta.textContent = `${item.category} · ${item.dietary}`;
  if (price) price.textContent = `${formatAUD(item.price)} AUD`;
  if (title) title.textContent = item.name;
  if (desc) desc.textContent = item.description;
  if (prep) prep.textContent = item.prepNote;

  backdrop.classList.add('is-open');
  backdrop.setAttribute('aria-hidden', 'false');
  syncBodyScrollLock();
}

function closeItemModal() {
  const backdrop = document.getElementById('item-modal-backdrop');
  if (!backdrop) return;
  backdrop.classList.remove('is-open');
  backdrop.setAttribute('aria-hidden', 'true');
  activeModalItemId = null;
  syncBodyScrollLock();
}

function updateLightboxSlide() {
  const item = GALLERY_ITEMS[activeLightboxIndex];
  if (!item) return;
  const img = document.getElementById('lightbox-image');
  const counter = document.getElementById('lightbox-counter');
  const caption = document.getElementById('lightbox-caption');
  const subcaption = document.getElementById('lightbox-subcaption');

  if (img) {
    img.src = item.src;
    img.alt = item.caption;
  }
  if (counter) counter.textContent = `${activeLightboxIndex + 1} / ${GALLERY_ITEMS.length}`;
  if (caption) caption.textContent = item.title;
  if (subcaption) subcaption.textContent = item.caption;
}

function openLightbox(index) {
  activeLightboxIndex = (index + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
  updateLightboxSlide();
  const backdrop = document.getElementById('lightbox-backdrop');
  if (!backdrop) return;
  backdrop.classList.add('is-open');
  backdrop.setAttribute('aria-hidden', 'false');
  syncBodyScrollLock();
}

function closeLightbox() {
  const backdrop = document.getElementById('lightbox-backdrop');
  if (!backdrop) return;
  backdrop.classList.remove('is-open');
  backdrop.setAttribute('aria-hidden', 'true');
  syncBodyScrollLock();
}

function stepLightbox(delta) {
  activeLightboxIndex = (activeLightboxIndex + delta + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
  updateLightboxSlide();
}

function openDirectionsModal() {
  const backdrop = document.getElementById('directions-modal-backdrop');
  if (!backdrop) return;
  backdrop.classList.add('is-open');
  backdrop.setAttribute('aria-hidden', 'false');
  syncBodyScrollLock();
}

function closeDirectionsModal() {
  const backdrop = document.getElementById('directions-modal-backdrop');
  if (!backdrop) return;
  backdrop.classList.remove('is-open');
  backdrop.setAttribute('aria-hidden', 'true');
  syncBodyScrollLock();
}

function setMenuCategory(category) {
  activeCategory = category;
  const tabs = document.querySelectorAll('#menu-filter-bar [data-category]');
  tabs.forEach((tab) => {
    const isMatch = tab.getAttribute('data-category') === category;
    tab.setAttribute('aria-selected', isMatch ? 'true' : 'false');
  });
  renderMenuGrid();
}

function initApp() {
  attachImageFallbacks(document);
  renderMenuGrid();
  renderGallery();
  renderCartUI();

  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobilePanel = document.getElementById('mobile-nav-panel');
  const iconOpen = document.getElementById('icon-menu-open');
  const iconClose = document.getElementById('icon-menu-close');

  function setMobileMenu(open) {
    if (!mobileToggle || !mobilePanel || !iconOpen || !iconClose) return;
    mobileToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    mobilePanel.hidden = !open;
    iconOpen.classList.toggle('hidden', open);
    iconClose.classList.toggle('hidden', !open);
  }

  if (mobileToggle && mobilePanel) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileToggle.getAttribute('aria-expanded') === 'true';
      setMobileMenu(!isOpen);
    });

    mobilePanel.querySelectorAll('[data-mobile-link]').forEach((link) => {
      link.addEventListener('click', () => setMobileMenu(false));
    });
  }

  document.addEventListener('click', (event) => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) return;

    const openCartTrigger = target.closest('[data-open-cart]');
    if (openCartTrigger) {
      setMobileMenu(false);
      openCartDrawer();
      return;
    }

    const addTrigger = target.closest('[data-add-id]');
    if (addTrigger) {
      const id = addTrigger.getAttribute('data-add-id');
      if (id) addToCart(id);
      return;
    }

    const incTrigger = target.closest('[data-inc-id]');
    if (incTrigger) {
      const id = incTrigger.getAttribute('data-inc-id');
      if (id) updateQuantity(id, 1);
      return;
    }

    const decTrigger = target.closest('[data-dec-id]');
    if (decTrigger) {
      const id = decTrigger.getAttribute('data-dec-id');
      if (id) updateQuantity(id, -1);
      return;
    }

    const removeTrigger = target.closest('[data-remove-id]');
    if (removeTrigger) {
      const id = removeTrigger.getAttribute('data-remove-id');
      if (id) removeFromCart(id);
      return;
    }

    const viewTrigger = target.closest('[data-view-id]');
    if (viewTrigger) {
      const id = viewTrigger.getAttribute('data-view-id');
      if (id) openItemModal(id);
      return;
    }

    const categoryTrigger = target.closest('#menu-filter-bar [data-category]');
    if (categoryTrigger) {
      const cat = categoryTrigger.getAttribute('data-category');
      if (cat) setMenuCategory(cat);
      return;
    }

    const footerCatTrigger = target.closest('[data-footer-category]');
    if (footerCatTrigger) {
      const cat = footerCatTrigger.getAttribute('data-footer-category');
      if (cat) setMenuCategory(cat);
      return;
    }

    const galleryTrigger = target.closest('[data-gallery-index]');
    if (galleryTrigger) {
      const idx = Number(galleryTrigger.getAttribute('data-gallery-index'));
      if (!Number.isNaN(idx)) openLightbox(idx);
      return;
    }

    const socialTrigger = target.closest('[data-demo-social]');
    if (socialTrigger) {
      const network = socialTrigger.getAttribute('data-demo-social') || 'Social';
      showToast(`${network} link — portfolio concept demonstration`, false);
      return;
    }

    if (target.id === 'cart-backdrop') closeCartDrawer();
    if (target.id === 'item-modal-backdrop') closeItemModal();
    if (target.id === 'lightbox-backdrop') closeLightbox();
    if (target.id === 'directions-modal-backdrop') closeDirectionsModal();
  });

  document.getElementById('close-cart-btn')?.addEventListener('click', closeCartDrawer);
  document.getElementById('clear-cart-btn')?.addEventListener('click', clearCart);
  document.getElementById('place-demo-order-btn')?.addEventListener('click', () => {
    const { count } = getCartTotals();
    if (count === 0) return;
    cart = {};
    demoCheckoutCompleted = true;
    renderCartUI();
    renderMenuGrid();
  });

  document.getElementById('close-item-modal-btn')?.addEventListener('click', closeItemModal);
  document.getElementById('item-modal-cancel-btn')?.addEventListener('click', closeItemModal);
  document.getElementById('item-modal-add-btn')?.addEventListener('click', () => {
    if (activeModalItemId) {
      addToCart(activeModalItemId);
      closeItemModal();
    }
  });

  document.getElementById('close-lightbox-btn')?.addEventListener('click', closeLightbox);
  document.getElementById('lightbox-prev-btn')?.addEventListener('click', () => stepLightbox(-1));
  document.getElementById('lightbox-next-btn')?.addEventListener('click', () => stepLightbox(1));

  document.getElementById('open-directions-btn')?.addEventListener('click', openDirectionsModal);
  document.getElementById('close-directions-btn')?.addEventListener('click', closeDirectionsModal);
  document.getElementById('done-directions-btn')?.addEventListener('click', closeDirectionsModal);

  document.addEventListener('keydown', (event) => {
    const lightboxOpen = document.getElementById('lightbox-backdrop')?.classList.contains('is-open');
    if (lightboxOpen) {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        stepLightbox(-1);
        return;
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        stepLightbox(1);
        return;
      }
    }

    if (event.key === 'Escape') {
      closeCartDrawer();
      closeItemModal();
      closeLightbox();
      closeDirectionsModal();
      setMobileMenu(false);
    }
  });

  const contactForm = document.getElementById('contact-form');
  if (contactForm instanceof HTMLFormElement) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-email');
      const topicSelect = document.getElementById('contact-topic');
      const messageInput = document.getElementById('contact-message');

      const errName = document.getElementById('error-contact-name');
      const errEmail = document.getElementById('error-contact-email');
      const errMsg = document.getElementById('error-contact-message');

      if (
        !(nameInput instanceof HTMLInputElement) ||
        !(emailInput instanceof HTMLInputElement) ||
        !(topicSelect instanceof HTMLSelectElement) ||
        !(messageInput instanceof HTMLTextAreaElement)
      ) {
        return;
      }

      const nameVal = nameInput.value.trim();
      const emailVal = emailInput.value.trim();
      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal);
      const msgVal = messageInput.value.trim();

      if (errName) errName.hidden = Boolean(nameVal);
      if (errEmail) errEmail.hidden = emailValid;
      if (errMsg) errMsg.hidden = Boolean(msgVal);

      if (!nameVal || !emailValid || !msgVal) {
        return;
      }

      const feedbackBox = document.getElementById('contact-demo-feedback');
      const feedbackTitle = document.getElementById('contact-feedback-title');
      const feedbackBody = document.getElementById('contact-feedback-body');

      if (feedbackTitle) {
        feedbackTitle.textContent = `Thanks, ${nameVal} — Demo Enquiry Logged`;
      }
      if (feedbackBody) {
        feedbackBody.textContent = `We've simulated receiving your "${topicSelect.value}" message (${emailVal}). In a live restaurant deployment, this form connects to the venue's booking or inbox workflow.`;
      }
      if (feedbackBox) {
        feedbackBox.hidden = false;
      }

      contactForm.reset();
    });
  }
}

initApp();
