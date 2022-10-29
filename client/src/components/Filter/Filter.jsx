import {
  Section,
  BtnGroup,
  FilterOptions,
  FilterBtn,
  FilterCheck,
} from './style';

const Filter = () => {
  return (
    <Section>
      <h3>23,148,869 questions</h3>
      <BtnGroup>
        <FilterOptions>
          <p className="active">Newest</p>
          <p>Active</p>
          <p className="disappear-mobile">
            Bountied <span>267</span>
          </p>
          <p className="disappear-mobile">Unanswered</p>
          <p className="toggle">More</p>
        </FilterOptions>
        <label htmlFor="filterToggler">
          <FilterCheck type="checkbox" id="filterToggler" />
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
