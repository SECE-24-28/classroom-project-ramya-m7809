import styled from "styled-components";

export const OurPromisesStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* Custom gap using props */
  gap: ${(props) => props.gapLength || "20px"};

  align-items: center;
  padding: ${(props) => props.padding || "2rem 1rem"};

  /* Heading styling */
  h1 {
    text-align: center;
    font-size: ${(props) => props.titleSize || "32px"};
    color: ${(props) => props.titleColor || "#333"};
    font-weight: 700;
  }

  /* Wrapper for all cards */
  .parent {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${(props) => props.cardGap || "2rem"};
    width: 100%;
    max-width: 1300px;
  }

  /* Each card (child box) */
  .child {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: ${(props) => props.cardWidth || "380px"};
    background-color: white;
    padding: 1.5rem;
    border-radius: 0px 0px 12px 12px;

    /* Shadow + hover */
    box-shadow: ${(props) =>
      props.cardShadow || "0 4px 15px rgba(0, 0, 0, 0.08)"};
    transition: 0.3s ease;

    &:hover {
      transform: translateY(-6px);
      box-shadow: ${(props) =>
        props.cardHoverShadow || "0 8px 25px rgba(0, 0, 0, 0.12)"};
    }
  }

  /* Icon + title row */
  .title__parent {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  /* Title text */
  .title {
    font-size: ${(props) => props.cardTitleSize || "24px"};
    font-weight: 600;
    color: ${(props) => props.cardTitleColor || "#777"};
  }

  /* Description */
  .para {
    font-size: ${(props) => props.cardTextSize || "18px"};
    font-weight: 400;
    color: ${(props) => props.cardTextColor || "rgb(86, 102, 131)"};
    line-height: 1.5;
  }
`;