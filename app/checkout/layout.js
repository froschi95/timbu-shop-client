import BuyNow from "../components/BuyNow.jsx";

export default function CheckoutLayout({ children }) {
  return (
    <section>
      {/* <Header /> */}
      {children}
      <BuyNow text={"place order"} hRef={"/"} />
    </section>
  );
}
