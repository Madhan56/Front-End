document.getElementById('generate').addEventListener('click',function()
{
const length = 10;
const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$&*";
let pw = "";
for(let i=0;i<length;i++)
{
    const randomIndex = Math.floor(Math.random()*charset.length);
    pw+= charset[randomIndex];
}
document.getElementById('pw').value = pw;
});