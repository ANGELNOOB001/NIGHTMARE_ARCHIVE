window.addEventListener('scroll', () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;

    // スクロール率（0.0 〜 1.0）
    const scrollPercent = scrollHeight > 0 ? scrollPosition / scrollHeight : 0;

    // 0 → 1 → 0 の山形を作る計算
    let intensity = 1 - Math.abs(2 * scrollPercent - 1);

    const overlay = document.getElementById('scroll-burn-overlay');
    if (overlay) {
        // ★ 最大値を 0.6 に制限。これで「薄く、でも確実に染まっている」質感になります。
        overlay.style.opacity = (intensity * 0.6).toFixed(2);
    }
});




document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('movie-title');
    if (!title) return;

    const text = title.textContent;
    title.innerHTML = '';

    [...text].forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.classList.add('letter');

        // 出現の間隔を 0.12秒 に短縮（タタタタッ！と出るテンポ）
        span.style.animationDelay = `${index * 0.12}s`;

        title.appendChild(span);
    });
});





document.addEventListener('DOMContentLoaded', () => {
    const cross = document.querySelector('.cross-icon');
    if (!cross) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // 要素が画面に入った（交差した）場合
            if (entry.isIntersecting) {
                // 2秒（2000ミリ秒）待ってからクラスを付与
                setTimeout(() => {
                    cross.classList.add('is-inverted');
                }, 2000);

                // 一度発動したら監視を止める（何度も回転させないため）
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 1.0 // 要素が完全に画面に出てからカウント開始
    });

    observer.observe(cross);
});