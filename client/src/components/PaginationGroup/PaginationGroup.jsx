import { useEffect } from 'react';
import { Section, PageLocation, PageSize } from './style';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginationGroup = ({ page, size, setPage, setSize, totalPage }) => {
  const handlePage = (page) => setPage(page);

  const handlePaginationClick = (e) => {
    const paginationBtn = e.target.closest('.MuiButtonBase-root');
    if (paginationBtn) {
      if (!paginationBtn.disabled) {
        const nowPage = document.querySelector(
          '.MuiButtonBase-root[aria-current="true"]'
        );
        const regex = /[^0-9]/g;
        const result = nowPage.ariaLabel.replace(regex, '');
        const pageNumber = parseInt(result);
        setPage(pageNumber);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('click', handlePaginationClick);
  }, []);

  const handleChangePageSize = (event) => {
    setSize(event.target.value);
    setPage(1);
  };

  return (
    <Section>
      <PageLocation>
        <Stack spacing={2}>
          <Pagination
            count={totalPage}
            variant="outlined"
            shape="rounded"
            onChange={(event, value) => handlePage(value)}
            page={page}
          />
        </Stack>
      </PageLocation>
      <PageSize>
        <fieldset>
          <p>
            <input
              type="radio"
              id="15"
              name="page-size"
              value="15"
              onChange={handleChangePageSize}
              checked={size === '15'}
            />
            <label htmlFor="15">15</label>
          </p>
          <p>
            <input
              type="radio"
              id="30"
              name="page-size"
              value="30"
              onChange={handleChangePageSize}
              checked={size === '30'}
            />
            <label htmlFor="30">30</label>
          </p>
          <p>
            <input
              type="radio"
              id="50"
              name="page-size"
              value="50"
              onChange={handleChangePageSize}
              checked={size === '50'}
            />
            <label htmlFor="50">50</label>
          </p>
        </fieldset>
        <p>per page</p>
      </PageSize>
    </Section>
  );
};

export default PaginationGroup;
