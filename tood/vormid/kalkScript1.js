function teisendamine() {
    let vastus = document.getElementById("vastus");
    let valik = document.getElementsByName("valik");
    let arv = document.getElementById("arv");

    const toll = 39.37;
    const meeter = 0.0254;

    let vastusepilt = document.getElementById("vastusepilt");

    for (let i = 0; i < valik.length; i++) {
        if (valik[i].checked) {
            if (valik[i].value === "meeter") {
                vastus.innerHTML = arv.value + " meetrit = "
                    + (arv.value * toll).toFixed(1) + " tolli";
                vastus.style.color = "green";
                vastusepilt.src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Harilik_orav.jpg?utm_source=fiu-vro.wikipedia.org&utm_campaign=index&utm_content=original";
            } else if (valik[i].value === "tolli") {
                vastus.innerHTML = arv.value + " tolli = "
                    + (arv.value * meeter).toFixed(1) + " meetrit";
                vastus.style.color = "blue";
                vastusepilt.src="https://meisterdisain.ee/wp-content/uploads/2021/05/IMG_4802-scaled.jpeg";

            }
            else{
                vastus.innerHTML ="vali parema valik";
            }
        }
    }
}