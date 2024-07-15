import React from "react";

const PaymentOptCard = () => {
  ",";

  const options = [
    {
      id: 1,
      name: "Credit Card",
      description: "We accept mastercard, Visa and American Express",
    },
    {
      id: 2,
      name: "Paypal",
      description: "securely complete your purchase with paypal ",
    },
    {
      id: 3,
      name: "Applepay",
      description: "securely complete your purchase with Applepay ",
    },
  ];
  return (
    <div className="mx-auto w-full max-w-[472px] grid grid-cols-1 gap-4 md:rounded-xl md:border md:p-4">
      <h2 className="text-[#1D1D1D] text-base font-semibold md:hidden">
        Payment Options
      </h2>
      <p className="text-[#404040]">
        Choose any of the payment method to complete your purchase.
      </p>
      <div className="grid grid-cols-1 gap-3">
        {options.map((option) => (
          <div
            key={option.id}
            className="flex items-center justify-between px-3 py-4 rounded-xl border active:bg-[#F7F7F7]"
          >
            <div className="flex items-center gap-2">
              <input type="radio" className="w-[1.125rem] h-[1.125rem]" />
              <div>
                <h3 className="text-[#1D1D1D] text-base font-semibold">
                  {option.name}
                </h3>
                <p className="text-[#666666] text-sm">{option.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentOptCard;
