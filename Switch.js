const email = prompt("Enter email address");
const password = prompt("Enter Password");
/*---------------- Switch case ---------------- */
switch (email && password) {
    case "stu@letsupgrade.com" && "12345":
        {
            alert(" You are logged in ");
            break;
        }
    default:
        alert("Try again  with correct email and password");
}