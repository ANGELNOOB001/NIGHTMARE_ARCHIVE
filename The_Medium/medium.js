window.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.5 // 要素が50%見えたらカウント開始
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 画面に入ってから1000ms（1秒）後にクラスを付与
                setTimeout(() => {
                    entry.target.querySelectorAll('span').forEach(span => {
                        span.classList.add('active');
                    });
                }, 1000);

                // 一度発火したら監視を止める（何度もチカチカさせないため）
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // note-boxを監視対象にする
    const noteBox = document.querySelector('.note-box');
    if (noteBox) {
        observer.observe(noteBox);
    }
});