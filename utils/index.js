function filter() {
    const queryObj = { ...this.queryParams };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach(el => delete queryObj[el]);

    this.query.where = { ...this.query.where, ...queryObj };
    return this;
}

function  sort() {
    if (this.queryParams.sort) {
        this.query.order = this.queryParams.sort.split(',').map(item => {
            return item.startsWith('-') ? [item.slice(1), 'DESC'] : [item, 'ASC'];
        });
    }
    return this;
}
