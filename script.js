let total = 0;

      function addItem() {
        // get the item name and price from the input fields
        let itemName = document.getElementById("item-name-input").value;
        let itemPrice = document.getElementById("item-price-input").value;

        // validate the input
        if (itemName === "" || itemPrice === "" || isNaN(itemPrice)) {
          alert("Please enter a valid item name and price.");
          return;
        }

        // add the item and price to the table
        let table = document.getElementById("table");
        let row = table.insertRow(-1);
        let nameCell = row.insertCell(0);
        let priceCell = row.insertCell(1);
        nameCell.innerHTML = itemName;
        priceCell.innerHTML = "$" + itemPrice;

        // update the grand total
        total += parseFloat(itemPrice);
        document.getElementById("total").innerHTML = "Grand total: $" + total.toFixed(2);

        // clear the input fields
        document.getElementById("item-name-input").value = "";
        document.getElementById("item-price-input").value = "";
      }
