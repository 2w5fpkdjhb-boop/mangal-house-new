const MENU = [
  {id:1,name:"Свинина — мякоть",price:220,category:"Свинина",img:"https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=700&q=80"},
  {id:2,name:"Свинина — антрекот",price:220,category:"Свинина",img:"https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80"},
  {id:3,name:"Свиные рёбра",price:220,category:"Свинина",img:"https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80"},
  {id:4,name:"Шея без кости",price:240,category:"Свинина",img:"https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=700&q=80"},
  {id:5,name:"Баранина — мякоть",price:260,category:"Баранина",img:"https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=700&q=80"},
  {id:6,name:"Баранина — пистолеты",price:280,category:"Баранина",img:"https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=700&q=80"},
  {id:7,name:"Куриные крылья",price:150,category:"Курица",img:"https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=700&q=80"},
  {id:8,name:"Куриная голень",price:150,category:"Курица",img:"https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=700&q=80"},
  {id:9,name:"Куриное филе",price:170,category:"Курица",img:"https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=700&q=80"},
  {id:10,name:"Печень по-царски",price:250,category:"Говядина",img:"https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=700&q=80"},
  {id:11,name:"Сувлаки с курицей",price:160,category:"Блюда на углях",img:"https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=80"},
  {id:12,name:"Сувлаки с говядиной",price:210,category:"Блюда на углях",img:"https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=80"},
  {id:13,name:"Сувлаки со свининой",price:180,category:"Блюда на углях",img:"https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=80"},
  {id:14,name:"Люля-кебаб с курицей",price:170,category:"Люля-кебаб",img:"https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=700&q=80"},
  {id:15,name:"Люля-кебаб с говядиной",price:230,category:"Люля-кебаб",img:"https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=700&q=80"},
  {id:16,name:"Люля-кебаб с бараниной",price:240,category:"Люля-кебаб",img:"https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=700&q=80"},
  {id:17,name:"Шаурма с курицей",price:270,category:"Шаурма",img:"https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=700&q=80"},
  {id:18,name:"Шаурма со свининой",price:320,category:"Шаурма",img:"https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=700&q=80"},
  {id:19,name:"Сэндвич с курицей",price:280,category:"Сэндвичи",img:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=80"},
  {id:20,name:"Сэндвич с ветчиной",price:260,category:"Сэндвичи",img:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=80"},
  {id:21,name:"Гиро в лаваше",price:280,category:"Гиро",img:"https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=700&q=80"},
  {id:22,name:"Гиро в лаваше МЕГА",price:350,category:"Гиро",img:"https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=700&q=80"},
  {id:23,name:"Бургер — куриный стейк",price:300,category:"Бургеры",img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80"},
  {id:24,name:"Бургер — куриный фарш",price:280,category:"Бургеры",img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80"},
  {id:25,name:"Супер говяжий бургер",price:390,category:"Бургеры",img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80"},
  {id:26,name:"Супер сырный бургер",price:390,category:"Бургеры",img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80"},
  {id:27,name:"Хот-дог в булочке",price:200,category:"Хот-дог",img:"https://images.unsplash.com/photo-1612392062631-94dd858cba88?auto=format&fit=crop&w=700&q=80"},
  {id:28,name:"Хот-дог в лаваше",price:220,category:"Хот-дог",img:"https://images.unsplash.com/photo-1612392062631-94dd858cba88?auto=format&fit=crop&w=700&q=80"},
  {id:29,name:"Картофель фри",price:150,category:"Закуски",img:"https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=80"},
  {id:30,name:"Аджапсандали",price:150,category:"Закуски",img:"https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80"},
  {id:31,name:"Сыр к шаурме",price:60,category:"Добавки",img:"https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=700&q=80"},
  {id:32,name:"Халапеньо к шаурме",price:60,category:"Добавки",img:"https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?auto=format&fit=crop&w=700&q=80"},
  {id:33,name:"Грибы к шаурме",price:60,category:"Добавки",img:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=700&q=80"}
];

let cart = JSON.parse(localStorage.getItem("mangalCart") || "[]");
let currentCategory = "Все";

function saveCart(){ localStorage.setItem("mangalCart", JSON.stringify(cart)); updateCartCount(); }
function addToCart(id){
  const item = cart.find(x => x.id === id);
  if(item) item.qty += 1; else {
    const product = MENU.find(x => x.id === id);
    cart.push({...product, qty:1});
  }
  saveCart();
}
function changeQty(id, delta){
  const item = cart.find(x => x.id === id);
  if(!item) return;
  item.qty += delta;
  if(item.qty <= 0) cart = cart.filter(x => x.id !== id);
  saveCart(); renderCart();
}
function removeItem(id){ cart = cart.filter(x => x.id !== id); saveCart(); renderCart(); }
function updateCartCount(){
  const count = cart.reduce((s,x)=>s+x.qty,0);
  ["cartCount","floatingCartCount"].forEach(id=>{ const el=document.getElementById(id); if(el) el.textContent=count; });
}
function openCart(){ document.getElementById("cartModal")?.classList.add("open"); renderCart(); }
function closeCart(){ document.getElementById("cartModal")?.classList.remove("open"); }
function renderCart(){
  const box=document.getElementById("cartItems"), summary=document.getElementById("cartSummary");
  if(!box || !summary) return;
  if(!cart.length){ box.innerHTML='<div class="empty">Корзина пока пуста</div>'; summary.innerHTML=''; return; }
  box.innerHTML=cart.map(x=>`<div class="cart-row">
    <div><strong>${x.name}</strong><br><small>${x.price} ₽</small></div>
    <div class="qty-controls"><button onclick="changeQty(${x.id},-1)">−</button><span>${x.qty}</span><button onclick="changeQty(${x.id},1)">+</button></div>
    <button class="remove-btn" onclick="removeItem(${x.id})">Удалить</button>
  </div>`).join("");
  const total=cart.reduce((s,x)=>s+x.price*x.qty,0);
  const left=Math.max(0,1500-total);
  summary.innerHTML=`<div class="cart-summary">
    <div class="cart-total"><span>Итого</span><span>${total} ₽</span></div>
    <p class="${left===0?'free-delivery':'delivery-left'}">${left===0?'🎉 Доставка бесплатная':'До бесплатной доставки осталось '+left+' ₽'}</p>
  </div>`;
}
function renderMenu(){
  const grid=document.getElementById("menuGrid"); if(!grid) return;
  const search=(document.getElementById("menuSearch")?.value || "").toLowerCase();
  const items=MENU.filter(x=>(currentCategory==="Все"||x.category===currentCategory)&&x.name.toLowerCase().includes(search));
  grid.innerHTML=items.map(x=>`<article class="menu-card">
    <img src="${x.img}" alt="${x.name}" loading="lazy">
    <div class="menu-card-body">
      <div class="category">${x.category}</div><h3>${x.name}</h3>
      <div class="menu-card-bottom"><span class="price">${x.price} ₽</span><button class="add-btn" onclick="addToCart(${x.id})">+ В корзину</button></div>
    </div>
  </article>`).join("") || '<div class="empty">Ничего не найдено</div>';
}
function initFilters(){
  const box=document.getElementById("categoryFilters"); if(!box) return;
  const cats=["Все",...new Set(MENU.map(x=>x.category))];
  box.innerHTML=cats.map(c=>`<button class="filter-btn ${c==="Все"?"active":""}" data-category="${c}">${c}</button>`).join("");
  box.addEventListener("click",e=>{
    const btn=e.target.closest("button"); if(!btn) return;
    currentCategory=btn.dataset.category;
    box.querySelectorAll("button").forEach(b=>b.classList.toggle("active",b===btn));
    renderMenu();
  });
}
function submitOrder(e){
  e.preventDefault();
  if(!cart.length){ alert("Добавьте блюда в корзину."); return; }
  const name=document.getElementById("customerName").value.trim();
  const phone=document.getElementById("customerPhone").value.trim();
  const type=document.getElementById("deliveryType").value;
  const address=document.getElementById("customerAddress").value.trim();
  const comment=document.getElementById("customerComment").value.trim();
  if(type==="Доставка" && !address){ alert("Укажите адрес доставки."); return; }
  const total=cart.reduce((s,x)=>s+x.price*x.qty,0);
  const lines=cart.map(x=>`• ${x.name} × ${x.qty} = ${x.price*x.qty} ₽`).join("\n");
  const text=`🔥 НОВЫЙ ЗАКАЗ — MANGAL HOUSE\n\n${lines}\n\nИтого: ${total} ₽\nПолучение: ${type}\n${type==="Доставка"?"Адрес: "+address+"\n":""}Имя: ${name}\nТелефон: ${phone}\nКомментарий: ${comment||"—"}\n${total>=1500?"🎉 Бесплатная доставка":""}`;
  window.open("https://t.me/share/url?url=&text="+encodeURIComponent(text),"_blank");
}
document.addEventListener("DOMContentLoaded",()=>{
  updateCartCount(); initFilters(); renderMenu();
  document.getElementById("menuSearch")?.addEventListener("input",renderMenu);
  document.getElementById("orderForm")?.addEventListener("submit",submitOrder);
  document.querySelector(".menu-toggle")?.addEventListener("click",()=>document.querySelector(".nav")?.classList.toggle("open"));
  document.getElementById("deliveryType")?.addEventListener("change",e=>{
    const address=document.getElementById("customerAddress");
    if(address){ address.style.display=e.target.value==="Самовывоз"?"none":"block"; address.required=e.target.value==="Доставка"; }
  });
  document.getElementById("cartModal")?.addEventListener("click",e=>{ if(e.target.id==="cartModal") closeCart(); });
});