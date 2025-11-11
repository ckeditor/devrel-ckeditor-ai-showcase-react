import { useState, useEffect } from 'react';
import contentData from '../data/content.json';
import ContentField from './ContentField';

const ContentEditor = ({ activeItem }) => {
  const [formData, setFormData] = useState({
    // Common fields
    title: '',
    seoDescription: '',
    publishedDate: new Date().toISOString().split('T')[0],
    outline: '',
    content: '',

    // Customer fields
    companyName: '',
    industry: '',
    location: '',
    contactEmail: '',
    contactPhone: '',
    revenue: '',
    contractValue: '',
    contractStatus: '',
    accountManager: '',
    status: '',

    // Report fields
    reportPeriod: '',
    category: '',
    author: '',
    summary: '',

    // Product fields
    sku: '',
    price: '',
    description: '',
    specifications: '',
    stockStatus: ''
  });

  useEffect(() => {
    if (activeItem) {
      // Find the full content from the JSON data
      let fullContent = null;

      if (activeItem.type === 'page') {
        fullContent = contentData.pages.find(page => page.id === activeItem.id);
      } else if (activeItem.type === 'article') {
        fullContent = contentData.articles.find(article => article.id === activeItem.id);
      } else if (activeItem.type === 'customer') {
        fullContent = contentData.customers.find(customer => customer.id === activeItem.id);
      } else if (activeItem.type === 'report') {
        fullContent = contentData.reports.find(report => report.id === activeItem.id);
      } else if (activeItem.type === 'product') {
        fullContent = contentData.products.find(product => product.id === activeItem.id);
      }

      if (fullContent) {
        setFormData({
          // Common fields
          title: fullContent.title || '',
          seoDescription: fullContent.seoDescription || '',
          publishedDate: fullContent.publishedDate || new Date().toISOString().split('T')[0],
          outline: fullContent.outline || '',
          content: fullContent.content || '',

          // Customer fields
          companyName: fullContent.companyName || '',
          industry: fullContent.industry || '',
          location: fullContent.location || '',
          contactEmail: fullContent.contactEmail || '',
          contactPhone: fullContent.contactPhone || '',
          revenue: fullContent.revenue || '',
          contractValue: fullContent.contractValue || '',
          contractStatus: fullContent.contractStatus || '',
          accountManager: fullContent.accountManager || '',
          status: fullContent.status || '',

          // Report fields
          reportPeriod: fullContent.reportPeriod || '',
          category: fullContent.category || '',
          author: fullContent.author || '',
          summary: fullContent.summary || '',

          // Product fields
          sku: fullContent.sku || '',
          price: fullContent.price || '',
          description: fullContent.description || '',
          specifications: fullContent.specifications || '',
          stockStatus: fullContent.stockStatus || ''
        });
      }
    }
  }, [activeItem]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    console.log('Saving content:', formData);
    // Here you would normally save to a backend
    alert('Content saved successfully!');
  };

  const handlePublish = () => {
    console.log('Publishing content:', formData);
    alert('Content published successfully!');
  };

  return (
    <div className="main-content">
      <div className="content-header">
        <h1>{activeItem ? `Edit: ${activeItem.name}` : 'Select a page or article'}</h1>
        {activeItem && (
          <div className="content-actions">
            <button className="btn btn-secondary" onClick={handleSave}>
              Save Draft
            </button>
            <button className="btn btn-primary" onClick={handlePublish}>
              Publish
            </button>
          </div>
        )}
      </div>

      {activeItem && (
        <form>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Enter page title..."
            />
          </div>

          <div className="form-row">
            <div className="form-group" style={{ flex: activeItem?.type === 'page' ? 1 : undefined }}>
              <label htmlFor="seoDescription">SEO Description</label>
              <input
                type="text"
                id="seoDescription"
                name="seoDescription"
                value={formData.seoDescription}
                onChange={handleInputChange}
                placeholder="Brief description for search engines..."
              />
            </div>

            {activeItem?.type === 'article' && (
              <div className="form-group">
                <label htmlFor="publishedDate">Published Date</label>
                <input
                  type="date"
                  id="publishedDate"
                  name="publishedDate"
                  value={formData.publishedDate}
                  onChange={handleInputChange}
                />
              </div>
            )}
          </div>

          {activeItem?.type === 'article' && (
            <div className="form-group">
              <label htmlFor="outline">Outline</label>
              <textarea
                id="outline"
                name="outline"
                value={formData.outline}
                onChange={handleInputChange}
                placeholder="Enter article outline or summary..."
                rows="4"
              />
            </div>
          )}

          {/* Customer-specific fields */}
          {activeItem?.type === 'customer' && (
            <>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="companyName">Company Name</label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Enter company name..."
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="industry">Industry</label>
                  <input
                    type="text"
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    placeholder="Enter industry..."
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contactEmail">Contact Email</label>
                  <input
                    type="email"
                    id="contactEmail"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleInputChange}
                    placeholder="Enter contact email..."
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contactPhone">Contact Phone</label>
                  <input
                    type="text"
                    id="contactPhone"
                    name="contactPhone"
                    value={formData.contactPhone}
                    onChange={handleInputChange}
                    placeholder="Enter contact phone..."
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contractValue">Contract Value</label>
                  <input
                    type="text"
                    id="contractValue"
                    name="contractValue"
                    value={formData.contractValue}
                    onChange={handleInputChange}
                    placeholder="Enter contract value..."
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="status">Status</label>
                  <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                  >
                    <option value="">Select status...</option>
                    <option value="lead">Lead</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </div>
            </>
          )}

          {/* Report-specific fields */}
          {activeItem?.type === 'report' && (
            <>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="reportPeriod">Report Period</label>
                  <input
                    type="text"
                    id="reportPeriod"
                    name="reportPeriod"
                    value={formData.reportPeriod}
                    onChange={handleInputChange}
                    placeholder="e.g., Q4 2024 or 2024-01-01 to 2024-12-31"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="category">Category</label>
                  <input
                    type="text"
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    placeholder="Enter report category..."
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="summary">Summary</label>
                <textarea
                  id="summary"
                  name="summary"
                  value={formData.summary}
                  onChange={handleInputChange}
                  placeholder="Enter report summary..."
                  rows="3"
                />
              </div>
            </>
          )}

          {/* Product-specific fields */}
          {activeItem?.type === 'product' && (
            <>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="sku">SKU</label>
                  <input
                    type="text"
                    id="sku"
                    name="sku"
                    value={formData.sku}
                    onChange={handleInputChange}
                    placeholder="Enter SKU..."
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="price">Price</label>
                  <input
                    type="text"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    placeholder="Enter price..."
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="specifications">Specifications</label>
                <textarea
                  id="specifications"
                  name="specifications"
                  value={formData.specifications}
                  onChange={handleInputChange}
                  placeholder="Enter product specifications..."
                  rows="3"
                />
              </div>
            </>
          )}

          <div className="form-group">
            <label htmlFor="content">
              {activeItem?.type === 'customer' ? 'Customer Overview' :
               activeItem?.type === 'report' ? 'Report Content' :
               activeItem?.type === 'product' ? 'Product Description' : 'Content'}
            </label>
            <ContentField
              contentKey={activeItem.id}
              value={formData.content}
              onChange={(value) => setFormData(prev => ({ ...prev, content: value }))}
            />
          </div>
        </form>
      )}

      {!activeItem && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '400px',
          color: '#999'
        }}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ marginBottom: '10px' }}>No content selected</h2>
            <p>Select a page or article from the navigation to start editing</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentEditor;