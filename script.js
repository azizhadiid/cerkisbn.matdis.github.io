// Membuat variabel
const num1 = document.getElementById("1");
const num2 = document.getElementById("2");
const num3 = document.getElementById("3");
const num4 = document.getElementById("4");
const num5 = document.getElementById("5");
const num6 = document.getElementById("6");
const num7 = document.getElementById("7");
const num8 = document.getElementById("8");
const num9 = document.getElementById("9");
const num10 = document.getElementById("10");
const num11 = document.getElementById("11");
const num12 = document.getElementById("12");
const num13 = document.getElementById("lastValue");
// button
const btnEl = document.getElementById("button");
// right and wrong alert
const rightValue = document.getElementById("rightVald");
const wrongValue = document.getElementById("wrongVald");

// Menggenerate penjumlahan
function generateNum() {
    const result = 
        (1 * parseInt(num1.value || 0)) + 
        (3 * parseInt(num2.value || 0)) + 
        (1 * parseInt(num3.value || 0)) + 
        (3 * parseInt(num4.value || 0)) + 
        (1 * parseInt(num5.value || 0)) + 
        (3 * parseInt(num6.value || 0)) + 
        (1 * parseInt(num7.value || 0)) + 
        (3 * parseInt(num8.value || 0)) + 
        (1 * parseInt(num9.value || 0)) + 
        (3 * parseInt(num10.value || 0)) + 
        (1 * parseInt(num11.value || 0)) + 
        (3 * parseInt(num12.value || 0));

    return result;
} 

// fungsi untuk melihat apakah ISBN Valid
function testNum () {
    const total = generateNum(); // Menggunakan fungsi generateNum() dengan benar
    const currentNum = total % 10;

    // Menyembunyikan pesan validasi sebelum menampilkan hasil baru
    rightValue.style.display = 'none';
    wrongValue.style.display = 'none';

    if (currentNum === 0) {
        rightValue.style.display = 'block';
        console.log("oke");
    } else if (currentNum != 0 ) {
        console.log("Tidak Oke");
        if ((10 - currentNum) === parseInt(num13.value || 0)) {
            rightValue.style.display = 'block';
            console.log("oke 2");
        } else {
            wrongValue.style.display = 'block';
            console.log("tidak Oke 2");
        }
    }
}

btnEl.addEventListener("click", function() {
    testNum();
});