# Cheat sheet for the CKEditor implementation

## ENV variables

```js
// Load configuration from environment variables
const LICENSE_KEY = import.meta.env.VITE_CKEDITOR_LICENSE_KEY;
const CLOUD_SERVICES_TOKEN_URL = import.meta.env.VITE_CKEDITOR_CLOUD_SERVICES_TOKEN_URL;
const WEBSOCKET_URL = import.meta.env.VITE_CKEDITOR_WEBSOCKET_URL;
```

## Sidebar

```js
const { sidebarElement } = useSidebar();
```


## AI and baloon toolbar configuration

```js
        ai: {
          container: {
            type: 'overlay',
            side: 'right',
            visibleByDefault: false
          },
          chat: {
            channelId: DOCUMENT_ID,
            models: {
              // defaultModelId: 'auto',
              // modelSelectorAlwaysVisible: true,
              // displayedModels: ['gpt-5', 'claude-4-5-sonnet', 'claude-3-5-haiku', 'gpt-4.1-mini']
            },
            context: {
              document: {
                enabled: true
              },
              urls: {
                enabled: true
              },
              files: {
                enabled: true
              },
              sources: [
                {
                  id: "destinations",
                  label: "Internal Guidelines",
                  // sample resources
                  getResources: async () => {
                    const resources = [
                      {
                        id: 'email-styleguide',
                        type: 'web-resource',
                        label: 'Email Guidelines',
                        data: 'https://gist.github.com/Simply007/0fb703584c932825e6ff691b9913d97e'
                      }
                    ];

                    return Promise.resolve(resources);
                  }
                }
              ],
            }
          },
          quickActions: {
            extraCommands: [
              // An action that opens the AI Chat interface for interactive conversations.
              {
                id: 'explain-like-i-am-five',
                displayedPrompt: 'Explain like I am five',
                prompt: 'Explain the following text like I am five years old.',
                type: 'CHAT'
              },

              // ... More custom actions ...
            ],
          },
          reviewMode: {
            translations: [
              {
                id: 'german',
                label: 'German'
              },
              {
                id: 'french',
                label: 'French'
              },
              {
                id: 'czech',
                label: 'Czech'
              }
            ]
          }
        },
        balloonToolbar: ['aiQuickActions', '|', 'bold', 'italic', '|', 'link', 'insertImage', '|', 'bulletedList', 'numberedList'],
```

### Custom models


```js
models: {
  // defaultModelId: 'auto',
  // modelSelectorAlwaysVisible: true,
  // displayedModels: ['gpt-5', 'claude-4-5-sonnet', 'claude-3-5-haiku', 'gpt-4.1-mini']
},
```

### Custom Resources

```js
sources: [
  {
    id: "destinations",
    label: "Internal Guidelines",
    // sample resources
    getResources: async () => {
      const resources = [
        {
          id: 'email-styleguide',
          type: 'web-resource',
          label: 'Email Guidelines',
          data: 'https://gist.github.com/Simply007/0fb703584c932825e6ff691b9913d97e'
        }
      ];

      return Promise.resolve(resources);
    }
  }
],
```

## Custom Quick actions

```js

quickActions: {
  extraCommands: [
    // An action that opens the AI Chat interface for interactive conversations.
    {
      id: 'explain-like-i-am-five',
      displayedPrompt: 'Explain like I am five',
      prompt: 'Explain the following text like I am five years old.',
      type: 'CHAT'
    },

    // ... More custom actions ...
  ],
},

```

## Custom review mode

reviewMode: {
  translations: [
    {
      id: 'german',
      label: 'German'
    },
    {
      id: 'french',
      label: 'French'
    },
    {
      id: 'czech',
      label: 'Czech'
    }
  ]
}


---

Extra

## Users

```js
class UsersIntegration extends Plugin {
  static get requires() {
    return ['Users'];
  }

  init() {
    const users = this.editor.plugins.get('Users');

    // Just add a minimal dummy user
    users.addUser({ id: 'user-1', name: 'John Doe' });
    users.defineMe('user-1');
  }
}
```