// import styled from "styled-components";

import dynamic from "next/dynamic";
const Head = dynamic(() => import("../../components/Head"));
const Subtitle = dynamic(() => import("../../components/Subtitle"));
const Back = dynamic(() => import("../../components/Back"));

export default function Calendar() {
  return (
    <>
      <Head>
        <title>Calculator | Davidlpc1</title>
      </Head>
      <Back href="/" />
      <Subtitle>Calculator</Subtitle>
      <p>EM CONSTRUÇÃO</p>
      {/* <CalculatorContainer>

      </CalculatorContainer> */}
    </>
  );
}
