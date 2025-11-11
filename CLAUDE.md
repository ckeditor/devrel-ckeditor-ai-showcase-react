# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a CKEditor AI Webinar Showcase application - a React-based content management interface that demonstrates CKEditor 5's premium AI features. The application provides a multi-panel editing interface for managing various content types (pages, articles, customers, reports, products) with integrated AI-powered editing capabilities.

## Build and Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:5173 by default)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Architecture

### Three-Column Layout Structure

The application uses a three-column layout defined in `src/App.jsx`:

1. **Left Sidebar** (`TreeNavigation.jsx`): Collapsible tree navigation for content types
2. **Main Editor** (`ContentEditor.jsx`): Dynamic form with content type-specific fields
3. **Right Sidebar** (`RightSidebar.jsx`): Tasks and AI insights panel

### Content Management System

**Data Structure**: All content is stored in `src/data/content.json` with five content types:
- `pages`: Static website pages
- `articles`: Blog posts and articles
- `customers`: Customer/client records
- `reports`: Business reports
- `products`: Product catalog items

Each content type has:
- Common fields: `id`, `name`, `type`, `title`, `content`
- Type-specific fields (e.g., customers have `companyName`, `industry`; products have `sku`, `price`)

### CKEditor Integration Architecture

**ContentField Component** (`src/components/ContentField.jsx`):
- Wraps CKEditor 5 DecoupledEditor
- Uses `contentKey` prop to force re-initialization when switching between different content items
- Implements decoupled UI with separate menu bar and toolbar refs
- Handles CKEditor lifecycle with proper cleanup in `onAfterDestroy`

**Key CKEditor Configuration**:
- License key and cloud services token are configured at the top of `ContentField.jsx`
- Document ID used for collaboration features
- AI features configured with overlay container on the right side

### CKEditor Premium AI Features

The editor is configured with:

**AI Chat** (`ai.chat`):
- Uses `channelId` tied to document ID for chat history persistence
- Overlay container positioned on the right side (or sidebar via SidebarContext)
- Context sources including document, URLs, and files
- Custom knowledge sources via `sources` array (see example "Internal Guidelines" source)
- Model selection configuration (currently commented out)

**AI Quick Actions** (`ai.quickActions`):
- Custom commands via `extraCommands` array
- Example: "Explain like I am five" custom action
- Type can be 'CHAT' for interactive conversations

**AI Review Mode** (`ai.reviewMode`):
- Translation options for multiple languages (German, French, Czech)

**Other Premium Features**:
- Format Painter
- Slash Commands
- Enhanced Paste from Office

### State Management Pattern

**ContentEditor Component**:
1. Maintains all form fields in a single `formData` state object
2. Uses `useEffect` to load content from JSON when `activeItem` changes
3. Implements conditional field rendering based on `activeItem.type`
4. Propagates content changes to parent via `onChange` callback

**Important**: The `contentKey={activeItem.id}` prop in ContentField:
- Forces CKEditor to reinitialize when switching content items, preventing content from one item bleeding into another
- Is used as the `DOCUMENT_ID` for:
  - CKEditor's collaboration features (`collaboration.channelId`)
  - AI Chat history persistence (`ai.chat.channelId`)
- Ensures complete data isolation between different content items

### SidebarContext for AI Integration

**Architecture**: The application uses React Context to integrate CKEditor's AI interface into the right sidebar:

1. **SidebarContext** (`src/contexts/SidebarContext.jsx`): Provides a context for sharing the sidebar DOM element reference
2. **SidebarProvider**: Wraps the entire app in `main.jsx` to provide context to all components
3. **RightSidebar**: Registers its DOM element using `registerSidebarElement` callback
4. **ContentField**: Consumes the `sidebarElement` from context and passes it to CKEditor's AI container config

This pattern allows the CKEditor AI interface to render inside the RightSidebar component instead of as an overlay, creating a more integrated experience. The AI container config uses conditional rendering:

- If `sidebarElement` is available: uses `type: 'sidebar'` with the element reference
- Otherwise: falls back to `type: 'overlay'`


## Key Implementation Details

### Adding Custom AI Context Sources

To add custom knowledge sources to AI Chat (in `ContentField.jsx`):

```javascript
ai: {
  chat: {
    context: {
      sources: [
        {
          id: "your-source-id",
          label: "Display Name",
          getResources: async () => {
            return [
              {
                id: 'resource-id',
                type: 'web-resource', // or 'file', 'text'
                label: 'Resource Label',
                data: 'https://your-url.com' // or file content
              }
            ];
          }
        }
      ]
    }
  }
}
```

### Adding New Content Types

To add a new content type:

1. Add data to `src/data/content.json` with the new type
2. Update `TreeNavigation.jsx` to extract and display the new type
3. Add conditional fields in `ContentEditor.jsx` based on `activeItem?.type`
4. Update the `formData` state initialization with new type-specific fields

### CKEditor Configuration Customization

Main configuration areas in `ContentField.jsx`:

- **Toolbar items**: Line 127-174 (add/remove toolbar buttons)
- **Plugins**: Line 177-248 (enable/disable features)
- **AI settings**: Line 250-322 (customize AI behavior)
- **Image configuration**: Line 382-397 (image toolbar and styles)
- **Table configuration**: Line 434-436 (table toolbar)


## Important Configuration Values

**Environment Variables** (in `.env` file):

- `VITE_CKEDITOR_LICENSE_KEY`: CKEditor 5 trial/production license
- `VITE_CKEDITOR_CLOUD_SERVICES_TOKEN_URL`: Token endpoint for cloud services
- `VITE_CKEDITOR_WEBSOCKET_URL`: WebSocket URL for real-time collaboration (format: `wss://your-environment-id.cke-cs.com/ws`)

These values are loaded from environment variables in `ContentField.jsx` using `import.meta.env`. A `.env.example` file is provided as a template. Copy it to `.env` and fill in your actual values. The `.env` file is gitignored to keep credentials secure.

**Dynamic Document ID**:

The `DOCUMENT_ID` is automatically set based on the selected content item's ID (e.g., "home", "article1", "customer1"). This document ID is used for:

- **Collaboration features**: Each document has its own collaboration channel via `collaboration.channelId`. Real-time collaboration is enabled through `collaboration.webSocketUrl` configured from environment variables.
- **AI Chat history**: Each document maintains separate AI chat history (`ai.chat.channelId`)

The document ID is derived from the `contentKey` prop passed to ContentField, ensuring complete isolation between different content items.

## Testing the Application

1. Start dev server: `npm run dev`
2. Navigate to different content items in the left sidebar
3. Verify editor reinitializes with correct content for each item
4. Test AI features via toolbar buttons or inline actions
5. Check that form fields change based on content type

## Known Configuration Notes

- Model selection is currently commented out in the AI chat configuration (ContentField.jsx)
- CSS imports for ContentField are commented out
- The application uses a SidebarContext to integrate CKEditor AI into the right sidebar instead of an overlay
