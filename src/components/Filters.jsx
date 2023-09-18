export default function Filter({ state }) {
  const { filtered_products, all_products } = state;
  let companies = all_products.map((product) => {
    return product.company;
  });
  companies = [...new Set(companies)];
  return (
    <section className="filter">
      <input
        type="text"
        placeholder="search product"
        className="filter__input"
      />
      <div className="companies">
        <h5 className="filters__title">companies</h5>
        <div className="companies__btn--container">
          {companies.map((company) => {
            return <span className="filter__btn">{company}</span>;
          })}
        </div>
      </div>
    </section>
  );
}
