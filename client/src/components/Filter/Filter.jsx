import {
  Section,
  BtnGroup,
  FilterOptions,
  FilterBtn,
  FilterCheck,
} from './style';
import { getVoteFilteredData, getData } from '../../api/api';
import { useNavigate, useParams } from 'react-router-dom';

const Filter = ({
  totalQuestion,
  type,
  setData,
  setFiltered,
  setPage,
  setSize,
}) => {
  const navigate = useNavigate();
  const { filtering } = useParams();

  const onNewestFilter = () => {
    getData().then((res) => {
      navigate(`/1/15/`, { replace: true });
      setPage(1);
      setSize('15');
      setData(res.data.data);
      setFiltered(false);
    });
  };

  const onVotesFilter = () => {
    getVoteFilteredData()
      .then((res) => {
        navigate(`/1/15/votes`);
        setPage(1);
        setSize('15');
        setData(res.data.data);
        setFiltered(true);
      })
      .catch((err) => alert('필터링에 실패했습니다😂'));
  };

  return (
    <Section>
      <h3>
        {totalQuestion} {type}
      </h3>
      <BtnGroup>
        <FilterOptions>
          <p className={!filtering ? 'active' : ''} onClick={onNewestFilter}>
            Newest
          </p>
          <p
            className={filtering === 'votes' ? 'active' : ''}
            onClick={onVotesFilter}
          >
            Votes
          </p>
          <p className="disappear-mobile disabled">
            Bountied <span>{totalQuestion}</span>
          </p>
          <p className="disappear-mobile disabled">Unanswered</p>
          <p className="toggle disabled">More</p>
        </FilterOptions>
        <label htmlFor="filterToggler">
          <FilterCheck type="checkbox" id="filterToggler" disabled />
          <FilterBtn>
            <svg width="18" height="18" viewBox="0 0 18 18">
              <path d="M2 4h14v2H2V4Zm2 4h10v2H4V8Zm8 4H6v2h6v-2Z"></path>
            </svg>
            Filter
          </FilterBtn>
        </label>
      </BtnGroup>
    </Section>
  );
};

export default Filter;
