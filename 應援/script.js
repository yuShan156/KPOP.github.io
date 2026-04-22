

// 搜尋過濾功能
function filterGroups() {
    const input = document.getElementById('groupSearch').value.toLowerCase();
    const cards = document.querySelectorAll('.group-card');
    
    cards.forEach(card => {
        const title = card.querySelector('.card-title').innerText.toLowerCase();
        const header = card.querySelector('.card-header').innerText.toLowerCase();
        if (title.includes(input) || header.includes(input)) {
            card.style.display = 'block';
        } else {
            card.style.displafuy = 'none';
        }
    });
}

// 下拉選單類別切換
function switchGroup(value) {
    const cards = document.querySelectorAll('.group-card');
    
    cards.forEach(card => {
        // 檢查卡片的 data-name 是否等於選單選中的值
        if (value === 'all' || card.getAttribute('data-name') === value) {
            card.style.display = 'block';  // 顯示
        } else {
            card.style.display = 'none';   // 隱藏
        }
    });
}

// 點擊 Modal 以外區域自動關閉
window.onclick = function(event) {
    const overlay = document.getElementById('modalOverlay');
    if (event.target == overlay) {
        closeModal();
    }
}

