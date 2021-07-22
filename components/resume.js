import Container from "./container";
import Image from "next/image";
import sstwo_res from "../public/sstwo_res.png";

export default function Resume() {
  return (
    <Container>
      <div className="mt-6 mb-6 ml-44 h-3/5 w-3/5">
        <Image src={sstwo_res} alt="Copy of resume" />
      </div>
    </Container>
  );
}
