import Head from "next/head";
import { NAME, ORG_IMAGE_URL } from "../lib/constants";

export default function Meta() {
  return (
    <Head>
      <meta
        name="description"
        content={`Hello, my name is ${NAME}! I am a full stack developer with a passion for learning. 
        I have a strong skill set in backend development, scaling cloud infrastructure, 
        graphic design, data analytics and quantitative programming.`}
      />
      <meta property="og:image" content={ORG_IMAGE_URL} />
    </Head>
  );
}
