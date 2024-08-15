import React from "react";
import { ExperienceList } from "../../../data/ProjectData";
import {
  Card,
  CardLeft,
  CardRight,
  Stack,
  BtnGroup,
} from "./ExperienceCardElements";

function ExperienceCard() {
  return (
    <>
      {ExperienceList.map((list, index) => (
        <Card key={index}>
          <CardLeft>
            <img src={list.img} alt={list.name} />
          </CardLeft>
          <CardRight>
            <h4>{list.title}</h4>
            <p>{list.company}</p>
            <Stack>
              <span className='stackTitle'>Duration -</span>
              <span className='tags'>{list.time}</span>
            </Stack>
            <BtnGroup>
              {list.cert == "" ? (
                ""
              ) : (
                <a
                  className='btn PrimaryBtn'
                  href={list.cert}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  View Certificate ➜
                </a>
              )}
            </BtnGroup>
          </CardRight>
        </Card>
      ))}
    </>
  );
}

export default ExperienceCard;
