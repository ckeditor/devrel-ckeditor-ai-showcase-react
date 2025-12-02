import { useState } from 'react';
import { useSidebar } from '../contexts/useSidebar';

const RightSidebar = () => {
  const { registerSidebarElement } = useSidebar();
  const [expandedSections, setExpandedSections] = useState({
    tasks: false,
    'ai-chat': false
  });

  const tasks = [
    {
      id: 1,
      type: 'added',
      description: 'Add new paragraph about best practices',
      author: 'John Doe',
      time: '10 minutes ago'
    },
    {
      id: 2,
      type: 'modified',
      description: 'Update introduction section',
      author: 'Jane Smith',
      time: '1 hour ago'
    },
    {
      id: 3,
      type: 'deleted',
      description: 'Remove duplicate content',
      author: 'Mike Johnson',
      time: '3 hours ago'
    },
    {
      id: 4,
      type: 'added',
      description: 'Add code examples',
      author: 'John Doe',
      time: '5 hours ago'
    }
  ];

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="sidebar-right">
      {/* Tasks Section */}
      <div className={`sidebar-section ${expandedSections.tasks ? 'expanded' : ''}`}>
        <div className="sidebar-section-header" onClick={() => toggleSection('tasks')}>
          <h3>Tasks</h3>
          <span className={`sidebar-section-toggle ${expandedSections.tasks ? '' : 'collapsed'}`}>
            ▼
          </span>
        </div>
        <div className="sidebar-section-content" style={{ display: expandedSections.tasks ? 'flex' : 'none' }}>
          <div className="changes-list">
            {tasks.map(change => (
              <div key={change.id} className="change-item">
                <div className={`change-icon ${change.type}`}></div>
                <div className="change-details">
                  <div className="change-description">{change.description}</div>
                  <div className="change-meta">
                    {change.author} · {change.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CKEditor AI Chat Section */}
      <div className={`sidebar-section ${expandedSections['ai-chat'] ? 'expanded' : ''}`}>
        <div className="sidebar-section-header" onClick={() => toggleSection('ai-chat')}>
          <h3>CKEditor AI Chat</h3>
          <span className={`sidebar-section-toggle ${expandedSections['ai-chat'] ? '' : 'collapsed'}`}>
            ▼
          </span>
        </div>
        <div className="sidebar-section-content" style={{ display: expandedSections['ai-chat'] ? 'flex' : 'none', padding: 0 }}>
          <div ref={registerSidebarElement} id="ai-sidebar-container" style={{ width: '100%', height: '100%' }}>
            {/* CKEditor AI interface will be rendered here */}
            {/* // 📌 Task 1: Integrate AI Sidebar to the Editor - remove the placeholder span below*/}
            <span style={{ margin: '10px', padding: '10px', border: '1px dashed #ccc', fontSize: '13px', color: '#888' }}>CKEditor AI Chat interface placeholder</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;