document.addEventListener('DOMContentLoaded', function() {
    const productItems = document.querySelectorAll('.product-item');
    productItems.forEach(item => {
        item.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            // 根据 productId 构建正确的商品详情页面的 URL
            window.location.href = `product-detail-${productId}.html`;
        });
    });
    
    // 表单验证
    const form = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // 阻止表单的默认提交行为

        // 获取表单字段的值
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // 简单的验证逻辑
        if (!name || !email || !message) {
            // 如果有字段为空，显示错误信息
            formFeedback.textContent = '请填写所有必填字段。';
            formFeedback.style.color = 'red';
            return;
        }

        // 如果所有字段都已填写，模拟表单提交
        console.log('Form Submitted', { name, email, message });
        // 显示成功信息
        formFeedback.textContent = '感谢您的提交！我们会尽快与您联系。';
        formFeedback.style.color = 'green';

        // 清空表单
        form.reset();
    });

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
