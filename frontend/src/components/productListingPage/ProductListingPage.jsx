import { useState } from "react";
import ProductBox from "../productBox/ProductBox";
import ProductBoxListView from "../productBoxListView/ProductBoxListView";
import Button from "@mui/material/Button";
import { CiGrid42 } from "react-icons/ci";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


// ─── DATA ────────────────────────────────────────────────────────────────────

const CATEGORIES = [
  { label: "Sneakers", count: 42 },
  { label: "Running", count: 28 },
  { label: "Lifestyle", count: 19 },
  { label: "Basketball", count: 11 },
  { label: "Training", count: 15 },
  { label: "Hiking", count: 9 },
  { label: "Football", count: 7 },
  { label: "Tennis", count: 6 },
  { label: "Skateboarding", count: 5 },
  { label: "Golf", count: 4 },
  { label: "Cycling", count: 3 },
  { label: "Swimming", count: 2 },
];

const BRANDS = [
  { label: "Nike", count: 34 },
  { label: "Adidas", count: 27 },
  { label: "New Balance", count: 18 },
  { label: "Puma", count: 12 },
  { label: "Converse", count: 9 },
  { label: "Reebok", count: 8 },
  { label: "Vans", count: 7 },
  { label: "Under Armour", count: 5 },
  { label: "Asics", count: 4 },
];

const GENDERS = ["Men", "Women", "Unisex", "Kids"];
const MATERIALS = ["Mesh", "Leather", "Canvas", "Knit", "Suede", "Synthetic"];
const SIZES = [
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
];
const COLORS = [
  { name: "Black", hex: "#1a1a1a" },
  { name: "White", hex: "#f5f5f0" },
  { name: "Red", hex: "#D85A30" },
  { name: "Blue", hex: "#185FA5" },
  { name: "Green", hex: "#1D9E75" },
  { name: "Yellow", hex: "#EF9F27" },
  { name: "Pink", hex: "#D4537E" },
  { name: "Gray", hex: "#888780" },
];
const RATINGS = [5, 4, 3, 2];

// ─── FILTER SECTION COMPONENT ────────────────────────────────────────────────

function FilterSection({ title, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-gray-100 pb-4 mb-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full mb-3 group"
      >
        <span className="text-[13px] font-semibold tracking-widest uppercase text-gray-500 group-hover:text-gray-600 transition-colors">
          {title}
        </span>
        <span
          className={`text-gray-400 text-sm transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          ▾
        </span>
      </button>
      {open && children}
    </div>
  );
}

function CheckItem({ label, count, checked, onChange }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer py-1 group">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-3.5 h-3.5 accent-orange-500 cursor-pointer rounded"
      />
      <span className="text-sm text-gray-700 flex-1 group-hover:text-gray-900 transition-colors">
        {label}
      </span>
      {count !== undefined && (
        <span className="text-xs text-gray-300">{count}</span>
      )}
    </label>
  );
}

// ─── SIDEBAR ─────────────────────────────────────────────────────────────────

function Sidebar({ filters, setFilters }) {
  const toggle = (key, value) =>
    setFilters((f) => {
      const set = new Set(f[key]);
      set.has(value) ? set.delete(value) : set.add(value);
      return { ...f, [key]: set };
    });

  return (
    /**
     * sticky top-0  → sticks to the top of the viewport when scrolling
     * h-screen      → full viewport height
     * overflow-y-auto with max-h logic handled below via the inner div
     */
    <aside className="w-60 min-w-60 sticky top-0 h-screen flex flex-col bg-white border-r border-gray-100 shadow-sm z-10">
      {/* Logo — always visible */}
      <div className="px-5 pt-6 pb-4 border-b border-gray-100 shrink-0">
        <div
          className="text-xl font-bold tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Filter<span className="text-orange-500">.</span>Products
        </div>
        <p className="text-[11px] text-gray-400 mt-0.5">42 products found</p>
      </div>

      {/* Scrollable filter area — after 250px triggers scroll */}
      <div
        className="flex-1 overflow-y-auto px-5 py-4"
        style={{ maxHeight: "calc(100vh - 90px)" }} /* 90px ≈ logo block */
      >
        {/* ── Category ── */}
        <FilterSection title="Category">
          {CATEGORIES.map((c) => (
            <CheckItem
              key={c.label}
              label={c.label}
              count={c.count}
              checked={filters.categories.has(c.label)}
              onChange={() => toggle("categories", c.label)}
            />
          ))}
        </FilterSection>

        {/* ── Brand ── */}
        <FilterSection title="Brand">
          {BRANDS.map((b) => (
            <CheckItem
              key={b.label}
              label={b.label}
              count={b.count}
              checked={filters.brands.has(b.label)}
              onChange={() => toggle("brands", b.label)}
            />
          ))}
        </FilterSection>

        {/* ── Gender ── */}
        <FilterSection title="Gender">
          {GENDERS.map((g) => (
            <CheckItem
              key={g}
              label={g}
              checked={filters.genders.has(g)}
              onChange={() => toggle("genders", g)}
            />
          ))}
        </FilterSection>

        {/* ── Material ── */}
        <FilterSection title="Material" defaultOpen={false}>
          {MATERIALS.map((m) => (
            <CheckItem
              key={m}
              label={m}
              checked={filters.materials.has(m)}
              onChange={() => toggle("materials", m)}
            />
          ))}
        </FilterSection>

        {/* ── Price Range ── */}
        <FilterSection title="Price Range">
          <input
            type="range"
            min={0}
            max={500}
            value={filters.maxPrice}
            onChange={(e) =>
              setFilters((f) => ({ ...f, maxPrice: Number(e.target.value) }))
            }
            className="w-full accent-orange-500"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span className="text-[14px] text-[#ff5252]">₹ 0</span>
            <span className="text-[#ff5252] text-[14px] font-medium">
              ₹{filters.maxPrice}
            </span>
          </div>
        </FilterSection>

        {/* ── Rating ── */}
        <FilterSection title="Rating">
          {RATINGS.map((r) => (
            <label
              key={r}
              className="flex items-center gap-2 cursor-pointer py-1 group"
            >
              <input
                type="checkbox"
                checked={filters.ratings.has(r)}
                onChange={() => toggle("ratings", r)}
                className="w-3.5 h-3.5 accent-orange-500"
              />
              <span className="text-amber-400 text-xs tracking-tight">
                {"★".repeat(r)}
                {"☆".repeat(5 - r)}
              </span>
              <span className="text-xs text-gray-400">& up</span>
            </label>
          ))}
        </FilterSection>

        {/* ── Size ── */}
        <FilterSection title="Size" defaultOpen={false}>
          <div className="flex flex-wrap gap-2 mt-1">
            {SIZES.map((s) => (
              <button
                key={s}
                onClick={() => toggle("sizes", s)}
                className={`w-9 h-9 rounded-lg text-xs font-medium border transition-all duration-150
                  ${
                    filters.sizes.has(s)
                      ? "bg-orange-500 text-white border-orange-500"
                      : "border-gray-200 text-gray-600 hover:border-orange-300 hover:text-orange-500"
                  }`}
              >
                {s}
              </button>
            ))}
          </div>
        </FilterSection>

        {/* ── Color ── */}
        <FilterSection title="Color" defaultOpen={false}>
          <div className="flex flex-wrap gap-2 mt-1">
            {COLORS.map((c) => (
              <button
                key={c.name}
                onClick={() => toggle("colors", c.name)}
                title={c.name}
                className={`w-7 h-7 rounded-full border-2 transition-all duration-150 relative
                  ${filters.colors.has(c.name) ? "border-orange-400 scale-110" : "border-transparent hover:scale-105"}`}
                style={{
                  backgroundColor: c.hex,
                  boxShadow:
                    c.name === "White" ? "inset 0 0 0 1px #ddd" : "none",
                }}
              >
                {filters.colors.has(c.name) && (
                  <span className="absolute inset-0 flex items-center justify-center text-white text-[10px]">
                    ✓
                  </span>
                )}
              </button>
            ))}
          </div>
        </FilterSection>

        {/* ── Availability ── */}
        <FilterSection title="Availability" defaultOpen={false}>
          <CheckItem
            label="In Stock"
            checked={filters.inStock}
            onChange={() => setFilters((f) => ({ ...f, inStock: !f.inStock }))}
          />
          <CheckItem
            label="On Sale"
            checked={filters.onSale}
            onChange={() => setFilters((f) => ({ ...f, onSale: !f.onSale }))}
          />
          <CheckItem
            label="New Arrivals"
            checked={filters.newOnly}
            onChange={() => setFilters((f) => ({ ...f, newOnly: !f.newOnly }))}
          />
        </FilterSection>

        {/* Clear */}
        <button
          onClick={() =>
            setFilters({
              categories: new Set(),
              brands: new Set(),
              genders: new Set(),
              materials: new Set(),
              sizes: new Set(),
              colors: new Set(),
              ratings: new Set(),
              maxPrice: 500,
              inStock: false,
              onSale: false,
              newOnly: false,
            })
          }
          className="text-xs text-orange-500 hover:text-orange-700 transition-colors mt-1 mb-6"
        >
          Clear all filters
        </button>
      </div>
    </aside>
  );
}

// ─── ACTIVE FILTER TAGS ───────────────────────────────────────────────────────

function ActiveTags({ filters, setFilters }) {
  const tags = [];

  filters.categories.forEach((v) =>
    tags.push({
      label: v,
      remove: () =>
        setFilters((f) => {
          const s = new Set(f.categories);
          s.delete(v);
          return { ...f, categories: s };
        }),
    }),
  );
  filters.brands.forEach((v) =>
    tags.push({
      label: v,
      remove: () =>
        setFilters((f) => {
          const s = new Set(f.brands);
          s.delete(v);
          return { ...f, brands: s };
        }),
    }),
  );
  filters.genders.forEach((v) =>
    tags.push({
      label: v,
      remove: () =>
        setFilters((f) => {
          const s = new Set(f.genders);
          s.delete(v);
          return { ...f, genders: s };
        }),
    }),
  );
  filters.sizes.forEach((v) =>
    tags.push({
      label: `Size ${v}`,
      remove: () =>
        setFilters((f) => {
          const s = new Set(f.sizes);
          s.delete(v);
          return { ...f, sizes: s };
        }),
    }),
  );
  filters.colors.forEach((v) =>
    tags.push({
      label: v,
      remove: () =>
        setFilters((f) => {
          const s = new Set(f.colors);
          s.delete(v);
          return { ...f, colors: s };
        }),
    }),
  );
  if (filters.maxPrice < 500)
    tags.push({
      label: `Under $${filters.maxPrice}`,
      remove: () => setFilters((f) => ({ ...f, maxPrice: 500 })),
    });
  if (filters.inStock)
    tags.push({
      label: "In Stock",
      remove: () => setFilters((f) => ({ ...f, inStock: false })),
    });
  if (filters.onSale)
    tags.push({
      label: "On Sale",
      remove: () => setFilters((f) => ({ ...f, onSale: false })),
    });

  if (!tags.length) return null;

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((t, i) => (
        <span
          key={i}
          className="flex items-center gap-1.5 bg-orange-50 border border-orange-200 text-orange-700 text-xs rounded-full px-3 py-1"
        >
          {t.label}
          <button
            onClick={t.remove}
            className="text-orange-400 hover:text-orange-700 text-sm leading-none"
          >
            ×
          </button>
        </span>
      ))}
    </div>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export default function ProductListingPage() {
  const [itemView, setItemView] = useState("grid");

  const [filters, setFilters] = useState({
    categories: new Set(["Sneakers"]),
    brands: new Set(),
    genders: new Set(),
    materials: new Set(),
    sizes: new Set(),
    colors: new Set(),
    ratings: new Set(),
    maxPrice: 500,
    inStock: false,
    onSale: false,
    newOnly: false,
  });

  const [sort, setSort] = useState("Most Popular");
  const [page, setPage] = useState(1);

  // const sorted = [...PRODUCTS].sort((a, b) => {
  //   if (sort === "Price: Low to High") return a.price - b.price;
  //   if (sort === "Price: High to Low") return b.price - a.price;
  //   if (sort === "Best Rating") return b.rating - a.rating;
  //   return 0;
  // });

  return (
    <>
      {/* Google Fonts */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600&family=DM+Sans:wght@300;400;500&display=swap');
      body { font-family: 'DM Sans', sans-serif; }`}</style>

      <div className="flex bg-gray-50 min-h-screen">
        {/* ── Sticky Sidebar ── */}
        <Sidebar filters={filters} setFilters={setFilters} />

        {/* ── Main Content ── */}
        <main className="flex-1 px-6 py-6 overflow-hidden">
          {/* Topbar */}
          <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
            <div>
              <p className="text-xs text-gray-400 mb-1">
                Home › <span className="text-orange-500">Sneakers</span>
              </p>
              <h1
                className="text-2xl font-semibold text-gray-900 tracking-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Products
              </h1>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-xs text-gray-400">
                {/* Showing {sorted.length} of 42 products */}
              </span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-700 cursor-pointer focus:outline-none focus:border-orange-300"
              >
                {[
                  "Most Popular",
                  "Price: Low to High",
                  "Price: High to Low",
                  "Newest First",
                  "Best Rating",
                ].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
              <div className="flex rounded-md overflow-hidden ">
                <button
                  className={`cursor-pointer p-2 transition-all 
    ${
      itemView === "grid"
        ? "text-[#ff5252]!"
        : "text-gray-700! bg-gray-50 hover:bg-[#ff5252]! hover:text-white!"
    }`}
                  onClick={() => setItemView("grid")}
                >
                  <CiGrid42  size={24} />
                </button>

                <button
                  className={` cursor-pointer p-2 transition-all  
    ${
      itemView === "list"
        ? "text-[#ff5252]! "
        : "text-gray-700! hover:bg-[#ff5252]! hover:text-white!"
    }`}
                  onClick={() => setItemView("list")}
                >
                  <AiOutlineMenuUnfold   size={24} />
                </button>
              </div>
            </div>
          </div>

          {/* Active tags */}
          <ActiveTags filters={filters} setFilters={setFilters} />

          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* {sorted.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))} */}
          </div>

          <div
            className={`grid ${itemView === "grid" ? "grid grid-cols-2 md:grid-cols-4" : "grid grid-cols-1 md:grid-cols-1"} gap-4`}
          >
            {itemView === "grid" ? (
              <>
                <ProductBox />
                <ProductBox />
                <ProductBox />
                <ProductBox />
                <ProductBox />
                <ProductBox />
                <ProductBox />
                <ProductBox />
              </>
            ) : (
              <>
                <ProductBoxListView />
                <ProductBoxListView />
                <ProductBoxListView />
                <ProductBoxListView />
                <ProductBoxListView />
                <ProductBoxListView />
                <ProductBoxListView />
                <ProductBoxListView />
              </>
            )}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-10 mb-4">
             <Pagination count={10} variant="outlined" shape="rounded" />
            
      
          </div>
        </main>
      </div>
    </>
  );
}
