export default async function (email) {
    if (email === "") {
        alert("Please enter an email address");
        return;
    }

    console.log(`Bearer ${process.env.NEXT_PUBLIC_API_KEY}`);

    // const res = await fetch("https://connect.mailerlite.com/api/subscribers", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Accept": "application/json",
    //         "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
    //     },
    //     body: JSON.stringify({ email: email })
    // }).then(() => window.location.href = "/thank-you")
    //     .catch(() => alert("Something went wrong. Please try again later."));

    const res = await fetch("/api/subscribe", {
        body: JSON.stringify({email: email}),
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST"
    });

    // const res = await fetch("/api/subscribe", {
    //     body: JSON.stringify({
    //         email: email
    //     }),
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Accept": "application/json",
    //     },
    //     method: "POST"
    // }).then(() => window.location.href = "/thank-you");
}