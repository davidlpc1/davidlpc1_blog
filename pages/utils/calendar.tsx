import styled from "styled-components";
import Subtitle from "../../components/Subtitle";
import Head from "../../components/Head";

interface howDaysThisMonthHasProps {
  month: number;
  actualYear: number;
}

const MonthDaysContainer = styled.li`
    display:flex;
    justify-content:space-around;
    margin:0.75rem;
    padding:0.5rem;

    ul {
        display:grid;
        grid-template-rows: repeat(3,1fr);
        grid-template-columns: repeat(12,1fr);
        gap:0.25rem;
    }

    li {
        list-style:none;
        background:rgba(0,0,0,0.05);
        padding:.25rem;
        color:rgba(0,0,0,0.8);
        transition: 270ms;

        &:hover {
            color:rgba(0,0,0,0.65);
            opacity: 0.4;
        }
    }
`;

export default function Calendar() {
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
        <Subtitle>Calendar</Subtitle>
        <ul>
            { months.map((month,index) => {
                const daysOfThisMonth = howDaysThisMonthHas({ month:index + 1,actualYear })
                const daysArray = [];
                for(let day = 1;day <= daysOfThisMonth;day++) {
                    daysArray.push(day)
                }

                //style={actualMonth === month ? {borderColor:'red',borderStyle:'solid' } : {}}
                return (
                    <MonthDaysContainer style={actualMonth === month ? {borderColor:'#fff62d',borderWidth:2,borderStyle:'solid'} : {}} key={`month--${index}--${month}`}>
                        {actualMonth === month ? `Today:${month}` : month}
                        <ul>
                            {daysArray.map((day,index) => <li key={`day:${day}--index:${index}`} style={actualDay === day && actualMonth === month ? { backgroundColor:'#fff62d'} : {}}>{day}</li>)}
                        </ul>
                    </MonthDaysContainer>
                )
            })}
        </ul>
      </>
  )
}
