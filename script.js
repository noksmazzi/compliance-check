document.getElementById("complianceForm").addEventListener("submit", function(e){
    e.preventDefault();

    let form = new FormData(e.target);
    let score = 0;
    let total = 9;

    let businessName = form.get("businessName");

    form.forEach((value, key) => {
        if(key !== "businessName" && value === "yes") {
            score++;
        }
    });

    let percentage = Math.round((score / total) * 100);

    window.location.href = "result.html?score=" + percentage + "&business=" + encodeURIComponent(businessName);
});
