export default function ReviewDetails({ params }) {
  return (
    <div>
      <h1>
        Review {params.reviewid} for products {params.productid}
      </h1>
    </div>
  );
}
