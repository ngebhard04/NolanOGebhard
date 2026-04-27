function evaluateCandidate() {
    // Get user inputs
    const job = document.getElementById("job").value;
    const education = document.getElementById("education").value;
    const experience = parseFloat(document.getElementById("experience").value);
    const gender = document.getElementById("gender").value;
    const age = parseInt(document.getElementById("age").value);
    const name = document.getElementById("name").value;

    let score = 0;
    let explanation = [];

    // -----------------------
    // Legitimate Factors
    // -----------------------

    if (education === "highschool") {
        score += 1;
        explanation.push("+1 for high school education");
    }
    if (education === "bachelor") {
        score += 2;
        explanation.push("+2 for bachelor's degree");
    }
    if (education === "master") {
        score += 3;
        explanation.push("+3 for master's degree");
    }

    score += experience * 1.5;
    explanation.push(`+${experience * 1.5} from experience`);

    if (job === "tech" && education === "master") {
        score += 2;
        explanation.push("+2 bonus for advanced tech education");
    }

    // -----------------------
    // BIAS (intentional)
    // -----------------------

    // Gender bias
    if (job === "tech" && gender === "female") {
        score -= 2;
        explanation.push("-2 bias penalty (gender bias in tech)");
    }

    // Age bias
    if (age > 50) {
        score -= 1.5;
        explanation.push("-1.5 bias penalty (age bias)");
    }

    // Name-based bias (simulate background bias)
    const biasedNames = ["Jamal", "Maria", "Aisha"];
    if (biasedNames.includes(name)) {
        score -= 2;
        explanation.push("-2 bias penalty (name-based bias)");
    }

    // -----------------------
    // Final Decision
    // -----------------------

    let result = "";
    if (score >= 8) {
        result = "Strong Hire";
    } else if (score >= 5) {
        result = "Consider";
    } else {
        result = "Rejected";
    }

    // -----------------------
    // Output to page
    // -----------------------

    document.getElementById("result").innerHTML = `
        <h3>Hiring Result: ${result}</h3>
        <p><strong>Score:</strong> ${score.toFixed(2)}</p>
        <p><strong>Breakdown:</strong></p>
        <ul>
            ${explanation.map(item => `<li>${item}</li>`).join("")}
        </ul>
    `;
}