import Header from "../components/Header.jsx";
import BuyNow from "../components/BuyNow.jsx";

export default function CartLayout({ children }) {
  return (
    <section>
      <Header />
      {children}
      <BuyNow />
    </section>
  );
}
