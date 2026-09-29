document.addEventListener('DOMContentLoaded', () => {
    const warningScreen = document.getElementById('warning-screen');
    const bootScreen = document.getElementById('boot-screen');
    const bootVideo = document.getElementById('boot-video');
    const btnEnter = document.getElementById('btn-enter');
    const btnExit = document.getElementById('btn-exit');

    const remiLeft = document.getElementById('remi-left');
    const remiRight = document.getElementById('remi-right');
    const mainHub = document.getElementById('main-hub');
    const topNav = document.querySelector('.top-nav');

    // КЛИК "МНЕ ЕСТЬ 12 ЛЕТ"
    if (btnEnter && warningScreen && bootScreen && bootVideo) {
        btnEnter.addEventListener('click', () => {
            // 1. Плавный уход экрана 12+
            warningScreen.classList.add('fade-out');
            
            setTimeout(() => {
                warningScreen.style.display = 'none';
                bootScreen.style.display = 'flex';
                
                // 2. Включаем интро со звуком
                bootVideo.muted = false;
                bootVideo.play().catch(err => console.log(err));

                // 3. ТАЙМИНГ ВЫЛЕТА (3.3 секунды)
                setTimeout(() => {
                    bootScreen.classList.add('fade-out');

                    // Показываем верхнее меню, Реми и центральный Хаб
                    if (topNav) topNav.classList.add('nav-visible');
                    if (remiLeft) remiLeft.classList.add('remi-visible');
                    if (remiRight) remiRight.classList.add('remi-visible');

                    if (mainHub) {
                        mainHub.classList.remove('hub-hidden');
                        mainHub.classList.add('hub-visible');
                    }
                }, 3300);

                // Полностью гасим bootScreen
                setTimeout(() => {
                    bootScreen.style.display = 'none';
                }, 5600);

            }, 600);
        });
    }

    if (btnExit) {
        btnExit.addEventListener('click', () => {
            window.location.href = 'https://www.google.com';
        });
    }

    // Переключение вкладок
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');

            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // Кнопки взаимодействия
    const btnBoost = document.getElementById('btn-boost');
    if (btnBoost) {
        btnBoost.addEventListener('click', () => {
            const statAp = document.getElementById('stat-ap');
            const statAtk = document.getElementById('stat-atk');
            if (statAp && statAtk) {
                statAp.innerHTML = '⚡ Anomaly Proficiency: <span class="val">999x (MAX MOG)</span>';
                statAtk.innerHTML = '💥 ATK Bonus: <span class="val">99x Base / 99x ATK%</span>';
                btnBoost.innerText = 'ДИСКИ ЗАМОГГЕНЫ НА 100%! 💎';
                btnBoost.style.background = '#00ff66';
                btnBoost.style.color = '#000';
            }
        });
    }

    const btnChess = document.getElementById('btn-chess');
    const chessLog = document.getElementById('chess-log');
    if (btnChess && chessLog) {
        btnChess.addEventListener('click', () => {
            chessLog.innerHTML = '&gt; Виталя поймал мат на 3 ходу! M3 Mindset зафиксирован!';
        });
    }

    const btnRepair = document.getElementById('btn-repair');
    const screenStatus = document.getElementById('screen-status');
    if (btnRepair && screenStatus) {
        btnRepair.addEventListener('click', () => {
            screenStatus.className = 'screen-box fixed';
            screenStatus.innerHTML = '✅ ЭКРАН ВОССТАНОВЛЕН! Контакт шлейфа зажат!';
            btnRepair.innerText = 'ШЛЕЙФ ЗАФИКСИРОВАН 🛠️';
        });
    }

    const btnGacha = document.getElementById('btn-gacha');
    const gachaLog = document.getElementById('gacha-log');
    const polyCount = document.getElementById('poly-count');
    const pityCount = document.getElementById('pity-count');
    let polys = 2240;
    let pity = 80;

    if (btnGacha && gachaLog) {
        btnGacha.addEventListener('click', () => {
            if (polys >= 1600) {
                polys -= 1600;
                pity = 0;
                polyCount.innerText = polys;
                pityCount.innerText = pity;
                gachaLog.innerHTML = '&gt; ✨ ВЫПАЛА S-РАНГ REMIELLE (M3) С ПЕРВОЙ КРУТКИ!';
            } else {
                gachaLog.innerHTML = '&gt; ❌ Не хватает полихромов!';
            }
        });
    }
});
