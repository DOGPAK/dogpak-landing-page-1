export default async function(email) {
    const res = await fetch("/api/subscribe", {
        body: JSON.stringify({
            email: email
        }),
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST"
    });
}