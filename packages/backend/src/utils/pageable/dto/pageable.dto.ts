export class PageableDto<T> {
  data: T[];
  page: number;
  totalPages: number;
  size: number;
  totalElements: number;

  constructor(options: {
    data: T[];
    totalElements: number;
    page?: number;
    size?: number;
  }) {
    const { data, totalElements, page = 0, size = 10 } = options;

    this.data = data;
    this.page = page;
    this.size = size;
    this.totalPages = Math.ceil(totalElements / size);
    this.totalElements = totalElements;
  }
}
