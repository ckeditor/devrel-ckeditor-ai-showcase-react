import { useState } from 'react';
import contentData from '../data/content.json';

const TreeNavigation = ({ activeItem, onItemClick }) => {
  const [expandedItems, setExpandedItems] = useState({
    pages: true,
    articles: true,
    customers: true,
    reports: true,
    products: true
  });

  // Extract navigation items from content.json
  const pages = contentData.pages.map(page => ({
    id: page.id,
    name: page.name,
    type: page.type
  }));

  const articles = contentData.articles.map(article => ({
    id: article.id,
    name: article.name,
    type: article.type
  }));

  const customers = contentData.customers ? contentData.customers.map(customer => ({
    id: customer.id,
    name: customer.name,
    type: customer.type
  })) : [];

  const reports = contentData.reports ? contentData.reports.map(report => ({
    id: report.id,
    name: report.name,
    type: report.type
  })) : [];

  const products = contentData.products ? contentData.products.map(product => ({
    id: product.id,
    name: product.name,
    type: product.type
  })) : [];

  const toggleExpanded = (section) => {
    setExpandedItems(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="tree-nav">
      {/* Pages Section */}
      <div className="tree-item">
        <div
          className={`tree-item-header ${activeItem?.type === 'pages' ? 'active' : ''}`}
          onClick={() => toggleExpanded('pages')}
        >
          <span className="tree-toggle">
            {expandedItems.pages ? '▼' : '▶'}
          </span>
          <span>Pages</span>
        </div>
        {expandedItems.pages && (
          <div className="tree-children">
            {pages.map(page => (
              <div
                key={page.id}
                className={`tree-child ${activeItem?.id === page.id ? 'active' : ''}`}
                onClick={() => onItemClick(page)}
              >
                📄 {page.name}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Articles Section */}
      <div className="tree-item">
        <div
          className={`tree-item-header ${activeItem?.type === 'articles' ? 'active' : ''}`}
          onClick={() => toggleExpanded('articles')}
        >
          <span className="tree-toggle">
            {expandedItems.articles ? '▼' : '▶'}
          </span>
          <span>Articles</span>
        </div>
        {expandedItems.articles && (
          <div className="tree-children">
            {articles.map(article => (
              <div
                key={article.id}
                className={`tree-child ${activeItem?.id === article.id ? 'active' : ''}`}
                onClick={() => onItemClick(article)}
              >
                📝 {article.name}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Customers Section */}
      <div className="tree-item">
        <div
          className={`tree-item-header ${activeItem?.type === 'customers' ? 'active' : ''}`}
          onClick={() => toggleExpanded('customers')}
        >
          <span className="tree-toggle">
            {expandedItems.customers ? '▼' : '▶'}
          </span>
          <span>Customers</span>
        </div>
        {expandedItems.customers && (
          <div className="tree-children">
            {customers.map(customer => (
              <div
                key={customer.id}
                className={`tree-child ${activeItem?.id === customer.id ? 'active' : ''}`}
                onClick={() => onItemClick(customer)}
              >
                👥 {customer.name}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Reports Section */}
      <div className="tree-item">
        <div
          className={`tree-item-header ${activeItem?.type === 'reports' ? 'active' : ''}`}
          onClick={() => toggleExpanded('reports')}
        >
          <span className="tree-toggle">
            {expandedItems.reports ? '▼' : '▶'}
          </span>
          <span>Reports</span>
        </div>
        {expandedItems.reports && (
          <div className="tree-children">
            {reports.map(report => (
              <div
                key={report.id}
                className={`tree-child ${activeItem?.id === report.id ? 'active' : ''}`}
                onClick={() => onItemClick(report)}
              >
                📊 {report.name}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Products Section */}
      <div className="tree-item">
        <div
          className={`tree-item-header ${activeItem?.type === 'products' ? 'active' : ''}`}
          onClick={() => toggleExpanded('products')}
        >
          <span className="tree-toggle">
            {expandedItems.products ? '▼' : '▶'}
          </span>
          <span>Products</span>
        </div>
        {expandedItems.products && (
          <div className="tree-children">
            {products.map(product => (
              <div
                key={product.id}
                className={`tree-child ${activeItem?.id === product.id ? 'active' : ''}`}
                onClick={() => onItemClick(product)}
              >
                📦 {product.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TreeNavigation;