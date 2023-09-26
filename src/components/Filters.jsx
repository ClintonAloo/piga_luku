export default function Filter({ state, setSearch, setCompany }) {
  const { filtered_products, all_products } = state;
  let companies = all_products.map((product) => {
    return product.company;
  });
  companies = ["all", ...new Set(companies)];
  return (
    <section className="filter">
      <input
        onChange={(e) => setSearch(e)}
        type="text"
        placeholder="search product"
        className="filter__input"
      />
      <div className="companies">
        <h5 className="filters__title">companies</h5>
        <div className="companies__btn--container">
          {companies.map((company, index) => {
            return (
              <span
                key={index}
                onClick={() => setCompany(company)}
                className="filter__btn"
              >
                {company}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
