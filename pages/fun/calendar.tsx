import styled from "styled-components";

import dynamic from "next/dynamic";
const Head = dynamic(() => import("../../components/Head"));
// import { GetStaticProps } from "next";
const Subtitle = dynamic(() => import("../../components/Subtitle"));

interface howDaysThisMonthHasProps {
  month: number;
  actualYear: number;
}

interface CalendarProps {
  months: Array<string>;
  actualMonth: string;
  actualDay: number;
  actualYear: number;
}

const MonthDaysContainer = styled.li`
  display: flex;
  margin: 0.75rem;
  padding: 0.25rem;
  overflow-x: scroll;
  max-width:400px;

  ul {
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(9, 1fr);
    gap: 0.25rem;
    padding-left: 0;
  }

  li {
    list-style: none;
    background: rgba(0, 0, 0, 0.05);
    padding: 0.25rem;
    color: rgba(0, 0, 0, 0.8);
    transition: 270ms;

    &:hover {
      color: rgba(0, 0, 0, 0.65);
      opacity: 0.4;
    }
  }
  @media (min-width: 700px) {
    ul {
      grid-template-rows: repeat(3, 1fr);
      grid-template-columns: repeat(12, 1fr);
    }
  }
`;

export default function Calendar({
  months,
  actualMonth,
  actualDay,
  actualYear,
}: CalendarProps) {
  function howDaysThisMonthHas({
    month,
    actualYear,
  }: howDaysThisMonthHasProps) {
    return new Date(actualYear, month, 0).getDate();
  }

  return (
    <>
      <Head>
        <title>Calendar | Davidlpc1</title>
      </Head>
      <Subtitle>Calendar - {actualYear}</Subtitle>
      <ul>
        {months.map((month, index) => {
          const daysOfThisMonth = howDaysThisMonthHas({
            month: index + 1,
            actualYear,
          });
          const daysArray = [];
          for (let day = 1; day <= daysOfThisMonth; day++) {
            daysArray.push(day);
          }

          //style={actualMonth === month ? {borderColor:'red',borderStyle:'solid' } : {}}
          return (
            <>
              {actualMonth === month ? `Today:${month}` : month}
              <MonthDaysContainer
                style={
                  actualMonth === month
                    ? {
                        borderColor: "#fff62d",
                        borderWidth: 2,
                        borderStyle: "solid",
                      }
                    : {}
                }
                key={`month--${index}--${month}`}
              >
                <ul>
                  {daysArray.map((day, index) => (
                    <li
                      key={`day:${day}--index:${index}`}
                      style={
                        actualDay === day && actualMonth === month
                          ? { backgroundColor: "#fff62d" }
                          : {}
                      }
                    >
                      {day}
                    </li>
                  ))}
                </ul>
              </MonthDaysContainer>
            </>
          );
        })}
      </ul>
    </>
  );
}

export const getStaticProps = () => {
  const date = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const actualMonth = months[date.getMonth()];
  const actualDay = date.getDate();
  const actualYear = date.getFullYear();

  return {
    props: {
      months,
      actualMonth,
      actualDay,
      actualYear,
    },
  };
};
