import { useSelector } from "react-redux";
import { DealsList, Section, Title } from "./MainPage-styled";
import { getToken } from "../../redux/selectors";
import { useGetDealsQuery } from "../../redux/dealsApi";
import { DealsItem } from "../../components/DealsItem/DealsItem";

export const MainPage = () => {
  const token = useSelector(getToken);
  const { data } = useGetDealsQuery(token);

  return (
    <Section>
      <Title>Open Deals</Title>
      <DealsList>
        {data?.length !== 0 &&
          data?.map((el) => (
            <li key={el._id}>
              <DealsItem el={el} />
            </li>
          ))}
      </DealsList>
    </Section>
  );
};
