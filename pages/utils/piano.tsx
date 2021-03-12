import styled from "styled-components";
import Head from "next/head";
import Subtitle from "../../components/Subtitle";

const Container = styled.div`
  width: 95%;
  height: 230px;
  margin: 30px auto 0 auto;
  display: flex;

  li {
    width: 14.28%;
    height: 100%;
    list-style-type: none;
    position: relative;
    display: flex;
  }
  .white {
    width: 100%;
    height: 100%;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
    position: relative;
    z-index: 1;
    background: #f0f0f9;
  }
  .black {
    position: absolute;
    right: -35%;
    z-index: 2;
    width: 70%;
    height: 120px;
    background: #000;
    box-shadow: 1px 0 #777, 0 2px 0 #777, 0 3px 0 #666, 0 4px 0 #555,
      0 5px 0 #444, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),
      0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),
      0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2),
      0 20px 20px rgba(0, 0, 0, 0.15);
  }
  /* .playing {
    transform: scale(0.98);
    border-color: #fd951f;
    box-shadow: 0 0 1rem #fd951f;
  } */
  .key {
    transition: transform 80ms ease;
  }
  .black:active {
    box-shadow: 1px 0 #555, 0 1px 0 #555, 0 1px 0 #444, 0 2px 0 #333;
  }
  .white:active {
    box-shadow: -1px 0 15px rgba(0, 0, 0, 0.7) inset;
  }
`;

export default function Piano() {
  const keysWithTwoSounds = ["C", "D", "F", "G", "A"];
  const keys = [
    { key: 65, note: "C", audio: "/music/040.wav" },
    { key: 87, note: "C#", audio: "/music/041.wav" },
    { key: 83, note: "D", audio: "/music/042.wav" },
    { key: 69, note: "D#", audio: "/music/043.wav" },
    { key: 68, note: "E", audio: "/music/044.wav" },
    { key: 70, note: "F", audio: "/music/045.wav" },
    { key: 84, note: "F#", audio: "/music/046.wav" },
    { key: 71, note: "G", audio: "/music/047.wav" },
    { key: 89, note: "G#", audio: "/music/048.wav" },
    { key: 72, note: "A", audio: "/music/049.wav" },
    { key: 85, note: "A#", audio: "/music/050.wav" },
    { key: 74, note: "B", audio: "/music/051.wav" },
    { key: 75, note: "C", audio: "/music/052.wav" },
    { key: 79, note: "C#", audio: "/music/053.wav" },
    { key: 76, note: "D", audio: "/music/054.wav" },
    { key: 80, note: "D#", audio: "/music/055.wav" },
    { key: 186, note: "E", audio: "/music/056.wav" },
  ];
  function playNote(audioName) {
    new Audio(audioName).play();
  }
  return (
    <>
      <Head>
        <title>Piano | Davidlpc1</title>
      </Head>
      <Subtitle>Piano</Subtitle>
      <Container as="ul">
        {keys.map(({ key, note, audio }, index) => {
          if (note.includes("#")) return;
          const existSameKeyWithHash = keysWithTwoSounds.find(
            (keySound) => note == keySound
          );
          return (
            <li tabIndex={index + 1} key={`${key}-${note}`}>
              <div
                className="white key"
                data-key={key}
                data-note={note}
                onClick={() => playNote(audio)}
              ></div>
              {existSameKeyWithHash !== undefined && (
                <div
                  className="black key"
                  onClick={() => playNote(keys[index + 1].audio)}
                  data-key={keys[index + 1].key}
                  data-note={keys[index + 1].note}
                ></div>
              )}
            </li>
          );
        })}
      </Container>
    </>
  );
}
