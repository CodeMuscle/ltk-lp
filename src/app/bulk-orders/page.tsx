import React from "react";
import BulkOrderForm from "../(components)/BulkOrdersForm";
import NewsletterSection from "../(components)/NewsletterSection";

const BulkOrder = () => {
  return (
    <section className="py-12 w-full flex flex-col gap-16 items-center justify-center">
      <h1 className="font-semibold text-lg lg:text-4xl text-black">
        Bulk Order
      </h1>

      {/* Form */}
      <div className="form-section w-full">
        {/* <BulkOrderForm /> */}
        <BulkOrderForm />
      </div>

      {/* Newsletter Section */}
      <div className="w-full">
        <NewsletterSection />
      </div>
    </section>
  );
};

export default BulkOrder;
