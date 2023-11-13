import { CellClassParams, ValueGetterParams } from "ag-grid-community";

export const columnDefs = {
  clusterColDefs: [
    {
      headerName: "Status",
      field: "status",
      valueGetter: (params: ValueGetterParams) => {
        const { data } = params;

        if (!data || !data.status) return null;

        const statusObj: Record<string, string> = {
          green: "Green",
          yellow: "Yellow",
          red: "Red",
        };

        return statusObj[data.status] || data.status;
      },

      cellStyle: (params: CellClassParams) => {
        const { data } = params;
        if (!data || !data.status) return null;

        const colorObj: Record<string, string> = {
          green: "green",
          yellow: "#FFD574",
          red: "red",
        };

        const color = colorObj[data.status];
        return color ? { color } : null;
      },
    },
    { headerName: "Nodes", field: "nodes" },
    { headerName: "Indices", field: "indices" },
    { headerName: "Total Shards", field: "shards.total" },
    { headerName: "Documents", field: "documents" },
    {
      headerName: "Data",
      field: "data",
      valueGetter: function (params: ValueGetterParams) {
        const data = params?.data?.data;

        if (data) {
          const numericValue = Number(String(data).slice(0, 4));
          return numericValue + " GB";
        }
      },
    },
  ],

  topQueryColDefsWithRanks: [
    {
      headerName: "순위",
      field: "",
      valueGetter: "node.rowIndex + 1",
    },
    { headerName: "검색어", field: "keyword" },
    { headerName: "검색 쿼리수", field: "count" },
  ],

  topQueryBoardColDefs: [
    {
      headerName: "순위",
      field: "rank",
      sortable: false,
      valueGetter: function (params: ValueGetterParams) {
        return (params.node?.rowIndex ?? 0) + 1;
      },
    },
    {
      headerName: "검색어",
      field: "keyword",
      flex: 2,
      sortable: false,
      valueGetter: function (params: ValueGetterParams) {
        const colValue = params.data.keyword;
        return colValue ? colValue : "-";
      },
    },
    {
      headerName: "검색 쿼리 수",
      field: "count",
      sortable: false,
    },
  ],

  hideSearchTermsColDefs: [
    { headerName: "ID", field: "popHideWordId" },
    { headerName: "단어", field: "keyword" },
    {
      headerName: "작성자",
      field: "updaterName",
      valueGetter: function (params: ValueGetterParams) {
        return params.data.updaterName
          ? params.data.updaterName
          : params.data.creatorName;
      },
    },
    { headerName: "등록날짜", field: "createdAt" },
  ],

  overridingSearchTermsBoardColDefs: [
    { headerName: "ID", field: "popFirstWordId" },
    { headerName: "단어", field: "keyword" },
    { headerName: "순위", field: "rank" },
    {
      headerName: "작성자",
      field: "updaterName",
      valueGetter: function (params: ValueGetterParams) {
        return params.data.updaterName
          ? params.data.updaterName
          : params.data.creatorName;
      },
    },
    { headerName: "등록날짜", field: "createdAt" },
  ],

  popularTermsRankBoardColDefs: [
    {
      headerName: "순위",
      field: "rank",
      flex: 1,
      sortable: false,
      valueGetter: function (params: ValueGetterParams) {
        return (params.node?.rowIndex ?? 0) + 1;
      },
    },
    {
      headerName: "검색어",
      field: "keyword",
      flex: 2,
      sortable: false,
      valueGetter: function (params: ValueGetterParams) {
        const colValue = params.data.keyword;
        return colValue ? colValue : "-";
      },
    },
  ],

  popularTermsPreRankBoardColDefs: [
    {
      headerName: "순위",
      field: "rank",
      flex: 1,
      sortable: false,
    },
    {
      headerName: "검색어",
      field: "keyword",
      flex: 2,
      sortable: false,
      valueGetter: function (params: ValueGetterParams) {
        const colValue = params.data.keyword;
        return colValue ? colValue : "-";
      },
    },
  ],

  autoCompleteColDefs: [
    { headerName: "아이디", field: "autoFixDictId" },
    { headerName: "자동완성 키워드", field: "trfKeyword" },
    { headerName: "반영여부", field: "reflectAct" },
    { headerName: "가중치", field: "weightedVal" },
    { headerName: "생성일자", field: "createdAt" },
    {
      headerName: "작성자",
      field: "creatorName",
      valueGetter: (params: ValueGetterParams) => {
        const { updaterName, creatorName } = params.data;

        return updaterName ? updaterName : creatorName;
      },
    },
  ],

  userDictColDefs: [
    { headerName: "아이디", field: "customDictId" },
    { headerName: "단어", field: "keyword" },
    {
      headerName: "등록단어",
      field: "rgisWord",
      valueGetter: function (param: ValueGetterParams) {
        const { type, rgisWord } = param.data;

        if (type === "S") {
          return rgisWord;
        }

        if (type === "M") {
          return rgisWord.split(" ").join("+");
        }
      },
    },
    { headerName: "작성자", field: "createrName" },
    { headerName: "등록날짜", field: "createdAt" },
  ],

  synonymDictColDefs: [
    { headerName: "아이디", field: "synomDictId" },
    { headerName: "단어", field: "keyword" },
    { headerName: "등록단어", field: "synomWord" },
    { headerName: "등록날짜", field: "createdAt" },
    {
      headerName: "작성자",
      field: "updaterName",
      valueGetter: (params: ValueGetterParams) => {
        const { updaterName, creatorName } = params.data;

        return updaterName ? updaterName : creatorName;
      },
    },
  ],

  forbiddenDictColDefs: [
    { headerName: "아이디", field: "stwdDictId" },
    { headerName: "단어", field: "keyword" },
    { headerName: "작성자", field: "createrName" },
    { headerName: "등록날짜", field: "createdAt" },
  ],

  suggestedTermsColDefs: [
    { headerName: "ID", field: "sgtWordId" },
    { headerName: "검색어", field: "keyword" },
    { headerName: "추천 검색어", field: "sgtWord" },
    { headerName: "반영여부", field: "reflectAct" },
    {
      headerName: "작성자",
      field: "username",
      valueGetter: function (params: ValueGetterParams) {
        return params.data.updaterName
          ? params.data.updaterName
          : params.data.creatorName;
      },
      sortable: false,
    },
    { headerName: "등록날짜", field: "createdAt", sortable: false },
  ],

  typoCorrectionColDefs: [
    { headerName: "ID", field: "autoFixDictId", sortable: false },
    { headerName: "키워드", field: "keyword" },
    {
      headerName: "오타교정 키워드 명",
      field: "trfKeyword",
      sortable: false,
    },
    { headerName: "반영여부", field: "reflectAct" },
    { headerName: "가중치", field: "weightedVal" },
    { headerName: "등록날짜", field: "createdAt", sortable: false },
    {
      headerName: "작성자",
      field: "updaterName",
      valueGetter: function (params: ValueGetterParams) {
        return params.data.updaterName
          ? params.data.updaterName
          : params.data.creatorName;
      },
    },
  ],
};
