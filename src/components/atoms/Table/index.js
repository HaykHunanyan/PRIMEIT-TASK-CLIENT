import styled, { css } from 'styled-components';
import { Table as table } from 'antd';
import propTypes from 'prop-types';

const Table = styled(table)`
  .ant-table {
    border: 1px solid #e8eef4;
    box-sizing: border-box;
    border-radius: 4px 4px 0 0;
    .ant-table-content {
      padding-bottom: 100px;
      .ant-table-tbody > tr {
        &:nth-child(odd) > td {
          background-color: #fff;
        }
        &:nth-child(even) > td {
          background-color: #f8fafc;
        }
      }
      &::-webkit-scrollbar {
        width: 17px;
        height: 17px;
      }
      &::-webkit-scrollbar {
        height: 17px;
      }
      &::-webkit-scrollbar-track {
        background: #f7f9fc;
      }
      &::-webkit-scrollbar-thumb {
        background: #dde3eb;
      }
      &::-webkit-scrollbar-thumb:hover {
        background: #d0d4d9;
      }
    }
  }

  .docs_table_header {
    display: flex;
    justify-content: space-between;
  }

  .documents_status {
    .anticon {
      margin-right: 10px;

      &.anticon-check-circle {
        color: #00dace;
      }

      &.anticon-exclamation-circle {
        color: #fc5e7a;
      }
      &.anticon-close-circle {
        color: #fc5e7a;
      }
      &.anticon-clock-circle {
        color: #35a5e4;
      }
    }
  }

  .ant-table-title {
    border-bottom: 1px solid #e8eef4;
  }
  .ant-table-thead > tr > th {
    background-color: #fff;
    font-weight: 500;
    font-size: 16px;
    color: #101d5b;
  }
  .ant-table-tbody > tr {
    td {
      font-size: 16px;
      color: #7e8299;
      font-weight: 400;
    }

    &:last-child {
      > td {
        border-bottom: 0;
      }
    }
  }
  ${props =>
    props.width &&
    css`
      width: ${props.width};
    `}
  ${props =>
    props.colswidth &&
    css`
      th {
        width: ${props.colswidth};
      }
    `}
  ${props =>
    props.mb &&
    css`
      margin-bottom: ${props.mb};
    `}
  ${props =>
    props.row &&
    css`
      .ant-table-cell {
        width: ${props.row};
      }
    `}
  ${props =>
    props.headcolor &&
    css`
      .ant-table-thead > tr > th {
        color: ${props.headcolor};
      }
    `}
  ${props =>
    props.headerbackcolor &&
    css`
      .ant-table-thead > tr > th {
        background-color: ${props.headerbackcolor};
      }
    `}
  ${props =>
    props.footerbackcolor &&
    css`
      .ant-table-footer {
        background-color: ${props.footerbackcolor};
      }
    `}
  ${props =>
    props.footertopborder &&
    css`
      .ant-table-footer {
        border-top: ${props.footertopborder}!important;
      }
    `}
  ${props =>
    props.footerpadding &&
    css`
      .ant-table-footer {
        padding: ${props.footerpadding}!important;
      }
    `}
  ${props =>
    props.bodycolor &&
    css`
      .ant-table-tbody > tr td {
        color: ${props.bodycolor};
      }
    `}
  ${props =>
    props.bodyweight &&
    css`
      .ant-table-tbody > tr td {
        font-weight: ${props.bodyweight};
      }
    `}
  ${props =>
    props.hide === 'body' &&
    css`
      .ant-table-tbody {
        display: none;
      }
      .ant-table,
      .ant-table-container {
        border-bottom: none;
      }
      .ant-table-thead > tr > th {
        border-bottom: none;
      }
    `}
  ${props =>
    props.extra === 'pagination' &&
    css`
      .ant-pagination-total-text {
        font-size: 12px;
        color: #7e8299;
      }
      .ant-pagination-item {
        font-weight: 400;
        a {
          color: #101d5b;
          font-size: 16px;
        }
        &.ant-pagination-item-active {
          border-color: transparent;
          a {
            font-weight: 500;
          }
        }
      }
    `}
${props =>
    props.pagination_margin &&
    css`
      .ant-pagination {
        margin: ${props.pagination_margin};
      }
    `}
    ${props =>
    props.rowHeight &&
    css`
      .ant-table-thead > tr {
        height: ${props.rowHeight}px;
      }
    `}
    ${props =>
    props.flex === 'contents' &&
    css`
      .ant-table-thead > tr {
        display: contents;
      }
    `}
    ${props =>
    props.flex === 'contents-none' &&
    css`
      .ant-table-thead > tr > .ant-table-cell {
        padding: 11px 16px;
      }
    `}
`;

Table.propTypes = {
  type: propTypes.string,
};

Table.defaultProps = {};

/** @component */
export default Table;
