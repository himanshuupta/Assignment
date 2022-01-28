function PrintTable(num) {
    for (let i = 0; i <= 10; i++) {
        console.log(num + "*" + i + "=" + num * i);
        // document.write(num + "*" + i + "=" + num * i + "<br>");
    }
}
const num = prompt("Enter a number");

PrintTable(num);