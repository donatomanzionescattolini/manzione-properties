import api from "./api";

export async function createStripeSession(amount) {
    const res = await api.post("/stripe/create-session", { amount });
    window.location.href = res.data.url;
}
