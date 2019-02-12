var numbersTable = document.getElementById("numbers");
var virtualTable = document.createElement('table');
var itemRow;
for (var i = 0; i <= 100; i = i + 2) {
  if(i===0 || i%5===0){
     itemRow = document.createElement('tr');
  }
    var itemCell = document.createElement('td');
    itemCell.textContent = i;
    itemRow.appendChild(itemCell);
    virtualTable.appendChild(itemRow);
}
numbersTable.innerHTML = virtualTable.innerHTML;
document.write("end.");