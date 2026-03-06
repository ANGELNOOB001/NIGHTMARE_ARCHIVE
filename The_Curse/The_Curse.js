window.addEventListener('DOMContentLoaded', () => {
    const targetElement = document.getElementById('target-text');

    if (targetElement) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // 画面に現れてから2000ms（2秒）後にクラス付与
                    setTimeout(() => {
                        const words = entry.target.querySelectorAll('.unholy-word');
                        words.forEach(word => word.classList.add('active'));
                    }, 2000);

                    // 1度実行したら監視を終了
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 }); // 50%見えたらカウント開始

        observer.observe(targetElement);
    }
});





// 既存のObserverに以下の処理を追記
const analysisBoxes = document.querySelectorAll('.analysis-box');

const analysisObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            analysisObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

analysisBoxes.forEach(box => analysisObserver.observe(box));