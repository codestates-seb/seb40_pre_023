import React, { useEffect, useState } from 'react';
import { Section, PageLocation, PageSize } from './style';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { getQuestions } from '../../api/api';

const PaginationGroup = () => {
  const [pageNum, setPageNum] = useState(1);
  const [pageSize, setPageSize] = useState('15');

  const handlePage = (page) => setPageNum(page);

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

        setPageNum(pageNumber);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('click', handlePaginationClick);
  }, []);

  useEffect(() => {
    getQuestions(pageNum, pageSize).then((res) => {
      //TODO: 현재 임시로 pageNum과 pageSize를 응답받도록 설정해 놓음 추후, 페이지에 해당하는 데이터 받아야함
      console.log(res);
    });
  }, [pageNum, pageSize]);

  const handleChangePageSize = (event) => {
    setPageSize(event.target.value);
    setPageNum(1);
  };

  return (
    <Section>
      <PageLocation>
        <Stack spacing={2}>
          {/* TODO: count에 전체 페이지 수 넣어야 함 */}
          <Pagination
            count={10}
            variant="outlined"
            shape="rounded"
            onChange={(event, value) => handlePage(value)}
            page={pageNum}
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
              checked={pageSize === '15'}
              onChange={handleChangePageSize}
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
