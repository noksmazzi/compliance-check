document.getElementById("complianceForm").addEventListener("submit", function(e){
    e.preventDefault();

    let form = new FormData(e.target);

    let businessName = form.get("businessName");
    let email = form.get("email");

    // Calculate score
    let score = 0;
    let total = 9;

    form.forEach((value, key) => {
        if(key !== "businessName" && key !== "email" && value === "yes") {
            score++;
        }
    });

    let percentage = Math.round((score / total) * 100);

    // SEND EMAIL TO YOU (LEAD CAPTURE)
    fetch("https://formsubmit.co/YOUR-FORMSUBMIT-URL", {
        method: "POST",
        body: form
    });

    // REDIRECT USER TO RESULTS PAGE
    window.location.href = "result.html?score=" + percentage + "&business=" + encodeURIComponent(businessName);
});
