function openModal(modalId) {
    document.getElementById(modalId).classList.add('open');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('open');
}

function loadContent(contentId) {
    document.getElementById('content-area').innerHTML = `<h1>Loading ${contentId}...</h1>`;
}

// Для мобільної версії відкриття чату
function toggleChat() {
    const chat = document.getElementById('chat-area');
    chat.classList.toggle('open');
}
const inventoryItems = [
    { id: 1, name: 'Gold Coins', quantity: 150000, icon: './img/coins-icon.png', actionable: false },
    { id: 1, name: '1', quantity: 2, icon: './img/1.png', actionable: true },
];
  
  function loadInventory() {
    const inventoryItemsContainer = document.getElementById('inventory-items');
    inventoryItemsContainer.innerHTML = '';
  
    inventoryItems.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'inventory-item';
      itemDiv.onclick = () => showItemDetails(item);
  
      const itemIcon = document.createElement('img');
      itemIcon.src = item.icon;
      itemIcon.alt = item.name;
  
      const itemQuantityBadge = document.createElement('span');
      itemQuantityBadge.className = 'item-quantity-badge';
      itemQuantityBadge.textContent = item.quantity;
  
      //const itemName = document.createElement('span');
     // itemName.textContent = item.name;
  
      itemDiv.appendChild(itemIcon);
      itemDiv.appendChild(itemQuantityBadge);
      //itemDiv.appendChild(itemName);
      inventoryItemsContainer.appendChild(itemDiv);
    });
  }
  
  function showItemDetails(item) {
    document.getElementById('item-name').textContent = item.name;
    document.getElementById('item-quantity').textContent = `Quantity: ${item.quantity}`;
  
    const actionsDiv = document.getElementById('item-actions');
    if (item.actionable) {
      actionsDiv.style.display = 'flex';
    } else {
      actionsDiv.style.display = 'none';
    }
  
    document.getElementById('item-details').classList.remove('hidden');
  }
  
  function useItem() {
    alert('Using item!');
  }
  
  function discardItem() {
    alert('Discarding item!');
  }
  
  // Initialize inventory on modal open
  loadInventory();