export default async function (email) {
    if (email === "") {
        alert("Please enter an email address");
        return;
    }
    const res = await fetch("/api/subscribe", {
        body: JSON.stringify({
            email: email
        }),
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST"
    }).then(() => window.location.href = "/thank-you");
}