document.addEventListener("DOMContentLoaded", function() {

    const sing_button = document.querySelector("#sing");
    sing_button.addEventListener("click", sing);



    function sing() {
        const friends = ["Joe","Keegan","Thomas","Clay","Micah"];
        const friend_elements = [];

        for(let i = 0;i < friends.length;++i) { // creating the div's for each individual friend
            const friend_div = document.createElement("div");
            friend_div.className = "friend";
            friend_div.innerHTML = "<h3>" + friends[i] + "</h3>";

            for(let j = 99;j > 0;--j) {
                friend_div.innerHTML += `<p>${j} lines of code on the wall , ${j} lines of code. ${friends[i]} strikes one out, clears it all out, ${j - 1} lines of code on the wall</p>`;
            }

            friend_elements[i] = friend_div;
            document.body.appendChild(friend_elements[i]);
        }
    }
});





