window.onload = function() {
    let add = document.querySelector('.mui-amount-increase');
    let reduce = document.querySelector('.mui-amount-decrease');
    let num = document.querySelector('.mui-amount-input');
    let xian = document.querySelector('.mui-amount-max');
    let shoptext = document.querySelector('#J_LinkAdd');
    let shopcar = document.querySelector('.tb-btn-add');

    // shopcar.style.backgroundColor = '#999';
    // shopcar.style.border = '1px solid #999';
    num.oninput = function() {


        if (isNaN(num.value)) {
            num.value = 1;
        }
        if (num.value > 5) {
            xian.style.display = 'block';

            shopcar.style.backgroundColor = '#999';
            shopcar.style.border = '1px solid #999';
            shopcar.style.cursor = 'none';
            shoptext.style.cursor = 'default';
        } else {
            xian.style.display = 'none';
            shopcar.style.backgroundColor = '#ff0036';
            shopcar.style.border = '1px solid #ff0036';
        }
    }

    add.onclick = function() {


        num.value++;
        if (num.value > 5) {
            xian.style.display = 'block';
            shopcar.style.backgroundColor = '#999';
            shopcar.style.border = '1px solid #999';
            shopcar.style.cursor = ' default';
            shoptext.style.cursor = 'default';

        } else {
            xian.style.display = 'none';
            shopcar.style.backgroundColor = '#ff0036';
            shopcar.style.border = '1px solid #ff0036';
        }
    }

    reduce.onclick = function() {
        console.log(11);

        num.value--;
        if (num.value <= 1) {
            num.value = 1
        }
        if (num.value > 5) {
            xian.style.display = 'block';
            shopcar.style.backgroundColor = '#999';
            shopcar.style.border = '1px solid #999';
            shopcar.style.cursor = 'none';
            shoptext.style.cursor = 'default';
        } else {
            xian.style.display = 'none';
            shopcar.style.backgroundColor = '#ff0036';
            shopcar.style.border = '1px solid #ff0036';

        }
    }
}