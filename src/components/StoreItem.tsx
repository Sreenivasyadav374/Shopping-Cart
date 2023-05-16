import { Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { Button } from "react-bootstrap";

type StoreItemProps = {
  id: number;
  name: String;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const quantity = 0;
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column" />
      <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
        <span className="ms-2 fs-2">{name}</span>
        <span className="ms-2 me-2 text-muted">{formatCurrency(price)}</span>
      </Card.Title>
      <div className="mt-auto">
        {quantity === 0 ? (
          <Button>Add to Cart</Button>
        ) : (
          <div
            className="d-flex flex-column align-items-center"
            style={{ gap: ".5rem" }}
          >
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ gap: ".5rem" }}
            >
              <Button>-</Button>
              <div>
                <span>{quantity}</span>
                in cart
              </div>
              <Button>+</Button>
            </div>
            <Button variant="danger" size="sm" className="mb-2">
              Remove
            </Button>
          </div>
        )}
        <div></div>
        <div></div>
      </div>
    </Card>
  );
}
