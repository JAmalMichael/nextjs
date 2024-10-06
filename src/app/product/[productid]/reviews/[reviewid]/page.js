import { notFound } from "next/navigation";

export default function ReviewDetails({ params }) {
  if (parseInt(params.reviewid) > 1000) {
    notFound();
  }
  return (
    <div>
      <h1>
        Review {params.reviewid} for products {params.productid}
      </h1>
    </div>
  );
}
