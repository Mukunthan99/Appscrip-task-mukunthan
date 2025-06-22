# Appscrip-task-Mukunthan

This is a product listing page built using **Next.js** (React Framework) as part of an assessment task. The page is fully responsive, utilises server-side rendering (SSR), and fetches mock data from the [FakeStoreAPI](https://fakestoreapi.com/). It features filtering, sorting, and basic SEO optimisation.

## Live Demo

https://appscrip-task-mukunthan.vercel.app/

## Features

- **Responsive Design**: Optimised for mobile and desktop.
- **Filtering**: Filter by category ("Ideal For" logic).
- **Sorting**: Sort by Recommended, Price High to Low, Low to High, etc.
- **Mobile Sidebar Drawer** for filters.
- **SSR (Server-Side Rendering)** for product data using `getServerSideProps`.
- **SEO Optimized**:
  - Title, meta description
  - Semantic tags (`<h1>`, `<h2>`.`<aside>`,etc)
  - SEO-friendly image names and alt attributes
- **Minimal DOM size** and no unnecessary libraries used.

## Tech Stack

- **Next.js** (React)
- **CSS Modules** for styling
- **FakeStoreAPI** for mock data
- **Vercel** for deployment
- **GitHub** for source code management

## Folder Structure

```
components/
│
├── Header/ # Top header with nav and icons
├── Footer/ # Footer with collapsibles & social
├── FilterSidebar/ # Sidebar filters (Ideal For, etc.)
├── SortDropdown/ # Sort dropdown UI
├── ProductCard/ # Individual product card
├── ProductsPage/ # Filterable, sortable product grid
└── Shop/ # Container for Shop page
```


##  SSR (Server-Side Rendering)
Server-side rendering has been implemented in the pages/index.js file using getServerSideProps:
#### Code Sample:
```
export async function getServerSideProps() {
  const res = await fetch('https://fakestoreapi.com/products');
  const productsData = await res.json();

  return {
    props: { productsData },
  };
}
```

## Links
- **GitHub Repo:** https://github.com/Mukunthan99/Appscrip-task-mukunthan
- **API:** https://fakestoreapi.com/
- **Live Site:** https://appscrip-task-mukunthan.vercel.app/





