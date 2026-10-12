function teisendamine() {
    let vastus = document.getElementById("vastus");
    let valik = document.getElementsByName("valik");
    let arv = document.getElementById("arv");

    const toll = 39.37;
    const meeter = 0.0254;

    for (let i = 0; i < valik.length; i++) {
        if (valik[i].checked) {
            if (valik[i].value == "meeter") {
                vastus.innerHTML = arv.value + " meetrit = "
                    + (arv.value * toll) + " tolli";
            } else if (valik[i].value == "tolli") {
                vastus.innerHTML = arv.value + " tolli = "
                    + (arv.value * meeter) + " meetrit";
            }
            else{
                vastus.innerHTML ="vali parema valik";
            }
        }
    }
}