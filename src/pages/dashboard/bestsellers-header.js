const header = [
  {
    id: 'images',
    title: 'Image',
    sortable: false,
    template: data => {
      return `
          <div class="sortable-table__cell">
            <img class="sortable-table-image" alt="Image" src="${data[0].url}">
          </div>
        `;
    }
  },
  {
    id: 'title',
    title: 'Name',
    sortable: true,
    sortType: 'string'
  },
  {
    id: 'subcategory',
    title: 'Category',
    sortable: false,
    template: subcategory => {
      return `
        <div class="sortable-table__cell">
          <span data-tooltip='<div class=&quot;sortable-table-tooltip&quot;>
          <span class=&quot;sortable-table-tooltip__category&quot;>${subcategory.category.title}</span> /
          <b class=&quot;sortable-table-tooltip__subcategory&quot;>${subcategory.title}</b>
        </div>'>${subcategory.title}</span>
        </div>
      `;
    }
  },
  {
    id: 'quantity',
    title: 'Quantity',
    sortable: true,
    sortType: 'number'
  },
  {
    id: 'price',
    title: 'Price',
    sortable: true,
    sortType: 'number',
    template: data => `<div class="sortable-table__cell">$${data}</div>`
  },
  {
    id: 'sales',
    title: 'Sales',
    sortable: true,
    sortType: 'number',
  },
];

export default header;
