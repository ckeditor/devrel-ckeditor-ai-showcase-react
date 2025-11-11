import { useState } from 'react'
import './App.css'
import TreeNavigation from './components/TreeNavigation'
import ContentEditor from './components/ContentEditor'
import RightSidebar from './components/RightSidebar'

function App() {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="app-container">
      {/* Left Sidebar with Tree Navigation */}
      <div className="sidebar-left">
        <h3>Content Structure</h3>
        <TreeNavigation
          activeItem={activeItem}
          onItemClick={handleItemClick}
        />
      </div>

      {/* Main Content Editor */}
      <ContentEditor activeItem={activeItem} />

      {/* Right Sidebar with Comments and Track Changes */}
      <RightSidebar />
    </div>
  )
}

export default App
