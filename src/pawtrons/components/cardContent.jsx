import Card from "./index";

export default function PawtronCard({ pawtron }) {
  return (
    <Card>
      <Card.Img url={pawtron.image} alt={pawtron.alt} />
      <Card.Heading heading={pawtron.title} />
      <Card.Text text={pawtron.review} />
      <Card.Email email={pawtron.author} />
    </Card>
  );
}
