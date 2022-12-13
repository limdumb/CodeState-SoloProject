import styled from "styled-components";

const InfoContainer = styled.section`
  width: 512px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid rgb(0, 0, 0, 0.5);
`;

const ProfilImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

const CelebrityName = styled.span`
  width: 80%;
  font-size: 50px;
  display: flex;
  justify-content: center;
`

export default function ClebrityInfo() {
  return (
    <InfoContainer>
      <ProfilImage src="https://thumbs.gfycat.com/BelovedUnknownGoitered-size_restricted.gif" alt="태연">
      </ProfilImage>
      <CelebrityName>김태연</CelebrityName>
    </InfoContainer>
  );
}