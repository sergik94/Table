import { Referral } from '../../types/Referral';
import {
  SData,
  STable,
  STBody,
  STBodyTR,
  STD,
  STH,
  STHead,
  STHeadTR,
} from './Table.styles';

type Props = {
  data: Referral[];
};

const Table = ({ data }: Props) => {
  const keys = Object.keys(data[0]);
  return (
    <STable>
      <STHead>
        <STHeadTR>
          {keys.slice(1).map((item) => (
            <STH key={item}>{item[0].toUpperCase() + item.slice(1)}</STH>
          ))}
        </STHeadTR>
      </STHead>

      <STBody>
        {data.map((obj) => (
          <STBodyTR key={obj.id}>
            <STD width="200px">
              {obj['referral event'].name}
              <SData color="gray" fs="12px" fw={400} padding="8px 0">
                {obj['referral event'].date}
              </SData>

              <SData fw={700}>$ {obj['referral event'].total.toFixed(2)}</SData>
            </STD>

            <STD width="250px">
              <SData>{obj.advocate.email}</SData>

              <SData fw={400} padding="8px 0">
                {obj.advocate.position}
              </SData>
            </STD>

            <STD width="250px">
              <SData>{obj.friend.email}</SData>

              <SData fw={400} padding="8px 0">
                {obj.friend.position}
              </SData>
            </STD>

            <STD width="200px">
              <SData>{obj['referral status'].status}</SData>

              {obj['referral status'].isFraud && (
                <SData color="red" fs="12px" padding="8px 0">
                  Marked as fraud
                </SData>
              )}

              {!obj['referral status'].isFraud && (
                <SData color="gray" fs="12px" padding="8px 0">
                  Passed fraud checks
                </SData>
              )}
            </STD>
          </STBodyTR>
        ))}
      </STBody>
    </STable>
  );
};

export default Table;
