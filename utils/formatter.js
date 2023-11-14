export default function formatter(money) {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(money);
}
